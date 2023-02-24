// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Report = () => {
  // const [radioOption, setRadioOption] = useState(null);
  const [branches, setBranches] = useState([])
  const [relations, setRelation] = useState([])
  const [factsAwares, setFactsAwares] = useState([])
  const [relationsTypes, setRelationsTypes] = useState([])

  const [selectRelationCompanies, setSelectRelationCompanies] = useState(0)
  const [selectRelationType, setSelectRelationType] = useState(0)
  // const [selectWhereOcorrendFacts, setSelectWhereOcorrendFacts] = useState(0)
  const [selectBranchesCompanies, setSelectBranchesCompanies] = useState(0)

  // como consegui ou tomei conhecimentio dos fatos
  const [selectHowDidIGetTheFacts, setSelectHowDidIGetTheFacts] = useState(0)
  const [isManagerAwareFact, setIsManagerAwareFact] = useState(false)
  const [isManagerInvolvedReport, setIsManagerInvolvedReport] = useState(false)
  const [describeReportMoreDetails, setDescribeReportMoreDetails] = useState("")
  const [hasWitnesses, setHasWitnesses] = useState("")
  // Possui ou sabe se existem evidencia dos  fatos 
  const [channel, setChannel] = useState(0)
  const [itHasEvidencesFacts, setItHasEvidencesFacts] = useState("")
  const [itHasFinancialValue, setItHasFinancialValue] = useState("")
  const [haveSuggestion, setHaveSuggestion] = useState("")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  // Caso tenha um arquivo 
  const [itHasFile, setItHasFile] = useState("")

  useEffect( () => {
    async function getRelationsCompany() {
      try {
        const relationsCompanies = await fetch(`${process.env.REACT_APP_API_URL}/relation-company`)
        const data = await relationsCompanies.json() 
        setRelation(data)
      } catch(err) {
        console.log(err)
      }
    }

    async function getRelationsType() {
      try {
        const relationsTypes = await fetch(`${process.env.REACT_APP_API_URL}/relations-types`)
        const data = await relationsTypes.json()
        setRelationsTypes(data)
      } catch(err) {
        console.log(err)
      }
    }

    async function getBranches() {
      try {
        const branches = await fetch(`${process.env.REACT_APP_API_URL}/branches`)
        const data = await branches.json()
        setBranches(data)
      } catch(err) {
        console.log(err)
      }
    }

    async function getFactsAware() {
      try {
        const doFetch = await fetch(`${process.env.REACT_APP_API_URL}/facts-aware`)
        const data = await doFetch.json()
        setFactsAwares(data)
      } catch(err) {
        console.log(err)
      }
    }

    getRelationsCompany()
    getRelationsType()
    getBranches()
    getFactsAware()
    
  }, []) 


  function handleChangedFile(event) {
    if (!event.target.files) {
        return;
    }

    const selectedFile = Array.from(event.target.files)
    setItHasFile(selectedFile)
  }

  function handleSendReport(event) {
    event.preventDefault()
    try {
      createReport()
    } catch(err) {
      console.log(err)
    }
  }

  async function createReport() {
    let form = new FormData()

    form.append("fullname", name)
    form.append("email", email)
    form.append("phone", phoneNumber)
    form.append("details", describeReportMoreDetails)
    form.append("has_witnesses", hasWitnesses)
    form.append("evidence_of_facts", itHasEvidencesFacts)
    
    form.append("has_balance", itHasFinancialValue)
    form.append("suggestion", haveSuggestion)
    form.append("has_file", itHasFile[0])

    form.append("relationID", selectRelationType)
    form.append("relationTypeID", selectRelationCompanies)
    form.append("branchID", selectBranchesCompanies)

    form.append("factAwareID", selectHowDidIGetTheFacts)
    form.append("channelID", channel)

    form.append("isManagerAware", isManagerAwareFact)
    form.append("isManagerInvolved", isManagerInvolvedReport)   
  
    const response = await fetch(`${process.env.REACT_APP_API_URL}/report/add`, {
      method: "POST",
      body: form
    })

    const { error } = await response.json()

    if (response.status === 201) {
       resetInput()
       toast.success("Dados enviado com sucesso!")
    }

    if (response.status === 400) {
       toast.error(`${error}`)
    }
  }

  function resetInput() {
    setName("")
    setEmail("")
    setChannel(0)
    setItHasFile("")
    setPhoneNumber("")
    setHasWitnesses("")
    setSelectRelationType(null)
    setHaveSuggestion("")
    setSelectHowDidIGetTheFacts(0)
    setSelectRelationCompanies(0)
    setSelectBranchesCompanies(0)
    setIsManagerAwareFact(false)
    setIsManagerInvolvedReport(false)
    setDescribeReportMoreDetails("") 
    setItHasEvidencesFacts("")
    setItHasFinancialValue("")
  }

  function isFillAnonymous(event) {
    if (event.target.value === '2') {
      setName('Anônimo')
      setEmail('usuario@anonimo.com')
      setPhoneNumber('11 0000-0000')
    }
  }

  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Faça um relato"
        background_image="falecomamaisvalor.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="mt-3 pt-lg-0 pb-5 pb-lg-0">
        <div className="container color_sobre">
          <div className="row">
            <div className="col-12">
            <h1 className="mb-5 font_size_sm mt-5">Relato</h1>
              <h2 className="mb-3 font_size_sm_h3">
                Faça aqui o seu relato. Se preferir, escreva a mensagem em modo
                anônimo. Garantimos total sigilo.
              </h2>

              <form id="form_relato" name="form_relato" method="POST" onSubmit={handleSendReport} encType="multipart/form-data" >
                <div className="form-group row mb-5">
                  <div className="col-12">
                    <label className="">Gostaria de se identificar?</label>
                  </div>
                  <div className="col-12">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="duvida_S"
                        // onChange={(e) => setRadioOption(e.target.value)}
                        name="identificar"
                        value="1"
                      />
                      <label className="custom-control-label" htmlFor="duvida_S">
                        Sim
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="duvida_N"
                        // onChange={(e) => setRadioOption(e.target.value)}
                        name="identificar"
                        value="2"
                        onChange={isFillAnonymous}
                      />
                      <label className="custom-control-label" htmlFor="duvida_N">
                        Não
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="m-0">Qual a sua relação com a Mais Valor?</p>
                </div>

                <div className=" mb-4 mt-0">
                  <select
                    className="form-control"
                    id="relationTypeID"
                    name="relationTypeID"
                    aria-label="Default select example"
                    onChange={(event) => setSelectRelationCompanies(event.target.value)}
                  >
                  <option selected disabled>
                    [Selecione]
                  </option>
                  {relations.map(({id, typeRelation}) => {
                    return (
                      <option
                        key={id}
                        value={id}
                      >
                        {typeRelation}
                      </option>
                    )
                  })}  
    
                  </select>
                </div>

                <div className="mb-3">
                  <p className="m-0">
                    Qual o tipo de relato você gostaria de fazer?
                  </p>
                </div>

                <div className="mb-4 mt-0">
                  <select
                    className="form-control"
                    name="relationID"
                    id="relationID"
                    aria-label="Default select example"
                    onChange={(event) => setSelectRelationType(event.target.value)}
                  >
                    <option selected disabled > [Selecione] </option>
                    {relationsTypes.map(({ id, relation }) => {
                      return (
                        <option
                          key={id}
                          value={id}
                        >
                         {relation}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <p className="m-0">Indique onde ocorreu o fato:</p>
                </div>

                <div className=" mb-4 mt-0">
                  <select
                    className="form-control"
                    name="branchID"
                    id="branchID"
                    aria-label="Default select example"
                    onChange={(event) => setSelectBranchesCompanies(event.target.value)}
                  >
                    <option selected disabled>
                      [Selecione]
                    </option>
                    {branches.map(({ id, branchText}) => {
                      return (
                        <option
                          key={id}
                          value={id}
                        >
                        {branchText}
                      </option>
                      )
                    })}
                  </select>
                </div>

                <div className="mb-3">
                  <p className="m-0">Como tomou conhecimento do fato?</p>
                </div>

                <div className="mb-4 mt-0">
                  <select
                    className="form-control"
                    name="factAwareID"
                    id="factAwareID"
                    aria-label="Default select example"
                    onChange={(event) => setSelectHowDidIGetTheFacts(event.target.value)}
                  >
                    <option selected disabled>
                      [Selecione]
                    </option>
                    {factsAwares.map(({id, factText}) => {
                      return (
                        <option
                          key={id}
                          id={`campo_aconteceu_comigo${id}`}
                          value={id}
                       >
                       {factText}
                      </option>
                      )
                    })}

                  </select>
                </div>

                <div className="mb-3">
                  <p className="m-0">Em qual canal?</p>
                </div>

                <div className="mb-4 mt-0">
                  <select
                    className="form-control"
                    name="channelID"
                    id="channelID"
                    aria-label="Default select example"
                    onChange={(event) => setChannel(event.target.value)}
                  >
                    <option selected disabled>
                      [Selecione]
                    </option>
                    <option id="campo_telefone" value={1}>
                      Telefone
                    </option>
                    <option id="campo_whatsapp" value={2}>
                      WhatsApp
                    </option>
                    <option  id="campo_email" value={3}>
                      E-mail
                    </option>
                    <option
                      id="campo_forma_presencial"
                      value="4"
                    >
                      De forma presencial
                    </option> 
                </select>
                </div>      
                
                <div className="mb-3">
                  <p className="m-0">
                    Você sabe se algum Superintendente, Gerente, Coordenador ou
                    Supervisor tem conhecimento do fato?
                  </p>
                </div>

                <div className="mb-4 mt-0">
                  <select
                    className="form-control"
                    name="isManagerAware"
                    id="isManagerAware"
                    aria-label="Default select example"
                    onChange={(event) => setIsManagerAwareFact(event.target.value)}
                  >
                    <option selected disabled>
                      [Selecione]
                    </option>
                    <option id="campo_sim_gerente" value={true}>
                      Sim
                    </option>
                    <option id="campo_nao_gerente" value={false}>
                      Não
                    </option>
                  </select>
                </div>

                <div className="mb-3">
                  <p className="m-0">
                    Você sabe se algum gestor está envolvido diretamente no
                    relato?
                  </p>
                </div>

                <div className="mb-4 mt-0">
                  <select
                    className="form-control"
                    name="isManagerInvolved"
                    id="isManagerInvolved"
                    aria-label="Default select example"
                    onChange={(event) => setIsManagerInvolvedReport(event.target.value)}
                  >
                    <option selected disabled>
                      [Selecione]
                    </option>
                    <option
                      id="campo_diretamente_sim"
                      value={true}
                    >
                      Sim
                    </option>
                    <option
                      id="campo_diretamente_nao"
                      value={false}
                    >
                      Não
                    </option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="obs">
                    <h5 className="mb-3 font_size_sm_h3">Conte como tudo aconteceu.</h5>
                    <p>Descreva com mais detalhes o seu relato.</p>
                  </label>
                  <textarea
                    className="md-textarea form-control txt"
                    id="details"
                    name="details"
                    value={describeReportMoreDetails}
                    onChange={(event) => setDescribeReportMoreDetails(event.target.value)}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="mb-4" htmlFor="obs">
                    Existem testemunhas? Quem são?
                  </label>
                  <textarea
                    className="md-textarea form-control txt"
                    id="has_witnesses"
                    name="has_witnesses"
                    value={hasWitnesses}
                    onChange={(event) => setHasWitnesses(event.target.value)}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="mb-4" htmlFor="obs">
                    Você possui ou sabe se existem evidências do fato? Em caso
                    positivo, quais são?{" "}
                  </label>
                  <textarea
                    className="md-textarea form-control txt"
                    id="evidence_of_facts"
                    name="evidence_of_facts"
                    value={itHasEvidencesFacts}
                    onChange={(event) => setItHasEvidencesFacts(event.target.value)}
                  ></textarea>
                </div>

                <div className="mb-4 ">
                  <label className="mb-4" htmlFor="obs">
                    Caso seja possível, indique qual valor financeiro envolvido
                    neste fato?
                  </label>
                  <textarea
                    className="md-textarea form-control txt"
                    id="has_balance"
                    name="has_balance"
                    value={itHasFinancialValue}
                    onChange={(event) => setItHasFinancialValue(event.target.value)}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="mb-4" htmlFor="obs">
                    Caso você tenha alguma sugestão de como solucionar o
                    problema, descreva-a:
                  </label>
                  <textarea
                    className="md-textarea form-control txt"
                    id="suggestion"
                    name="suggestion"
                    value={haveSuggestion}
                    onChange={(event) => setHaveSuggestion(event.target.value)}
                  ></textarea>
                </div>
                {/* {radioOption === "1" && ( */}
                  <div id="campo_nome" className="mb-4 mt-0">
                    <label htmlFor="nome">Nome completo</label>
                    <input
                      type="text"
                      className="form-control txt"
                      name="fullname"
                      id="fullname"
                      placeholder=""
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                {/* )} */}
                {/* {radioOption === "1" && ( */}
                  <div className=" mb-4 mt-0" id="div-email">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      className="form-control txt"
                      name="email"
                      id="email"
                      placeholder=""
                      value={email}

                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                {/* )} */}
                {/* {radioOption === "1" && ( */}
                  <div id="campo_telefone" className=" mb-4 mt-0">
                    <label htmlFor="estado">Celular</label>
                    <input
                      type="text"
                      className="form-control txt"
                      name="phone"
                      id="telefone"
                      placeholder=""
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                  </div>
                {/* )} */}
                <div className="md-form mb-4 mt-0" id="arquivo">
                  <label htmlFor="file">
                    Anexar arquivo:{" "}
                    <i>
                      (somente arquivos .pdf / .doc / .docx, tamanho máximo 2MB)
                    </i>
                  </label>
                  <input
                    type="file"
                    className="form-control  txt"
                    name="arquivo"
                    id="file"
                    placeholder=""
                    accept=".doc,.docx,.pdf"
                    
                   
                    onChange={handleChangedFile}
                  />
                </div>

                <div className="mt-5 mb-5">
                  <button
                    type="submit"
                    id="btn_enviar"
                    className="btn btn-success  mb-4 hover_products border_radius_btn float-right"
                    value="enviar"
                  >
                    Enviar
                  </button>
                </div>

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Amazing amazing={Amazing}></Amazing>
      <Footer footer={Footer}></Footer>
    </div>
  );
};

export default Report;

