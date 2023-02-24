import React, {  useState, useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doubt = () => {
  // const [radioOption, setRadioOption] = useState(null);
  

  const [relations, setRelation] = useState([])
  const [selectRelationCompanies, setSelectRelationCompanies] = useState(0)

  const [name, setName] = useState('')
  const [phone, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [hasFile, setHasFile] = useState('')

  const [message, setMessage] = useState('')

  function handleChangedFile(event) {
    if (!event.target.files) {
        return;
    }

    const selectedFile = Array.from(event.target.files)       
    setHasFile(selectedFile)
  }

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

    getRelationsCompany()
  }, []) 

  async function sendNewDoubt(e) {
     e.preventDefault()  
     try {
      let pathName = window.location.pathname  
      let content = pathName.replace(/\//g,'') // Remove a barra do pathName

      let form = new FormData()

      form.append("content_name", content)
      form.append("relationType", selectRelationCompanies)
      form.append("name", name)
      form.append("email", email)
      form.append("phone", phone)
      form.append("message", message)
      form.append("file", hasFile[0])
     
      const response = await fetch(`${process.env.REACT_APP_API_URL}/suggestions-or-doubts/add`, {
        method: "POST",
        body: form
      })

      const { error } = await response.json()

      if (response.status === 201) {
        /**
         * Limpa os camnpos do formulário
         */
        resetInputs() 
        toast.success("Dados enviado com sucesso!")
      }

      if (response.status === 400) {
         toast.error(`${error}`)
      }

     } catch(err) {
       console.log(err) 
     }
  }

  function resetInputs() {
    setName('')
    setEmail('')
    setPhoneNumber('')
    setHasFile('')
    setSelectRelationCompanies(0)
    setMessage('')
  }

  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Qual é a sua dúvida?"
        background_image="falecomamaisvalor.png"
        subintro=""
        btnintro=""
        header={Header}
      ></Header>
      <div className="mt-3 pt-lg-0 pb-5 pb-lg-0">
        <div className="container color_sobre">
          <div className="row">
            <div className="col-12">
            <h1 className="mb-5 font_size_sm mt-5">Dúvida</h1>
              <h2 className="mb-3 font_size_sm_h3">
                Restou alguma dúvida? Fale conosco, vamos procurar esclarecer
                tudo o que estiver ao nosso alcance.
              </h2>
              <form
                action=""
                id="form_duvida"
                name="form_duvida"
                onSubmit={sendNewDoubt}

                encType="multipart/form-data"
              >
                <div className="form-group row mb-5">
                  <div className="col-12">
                    <label className="mt-3">Gostaria de se identificar?</label>
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
                    <div className="custom-control mb-4 custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="duvida_N"
                        // onChange={(e) => setRadioOption(e.target.value)}
                        name="identificar"
                        value="2"
                        
                      />
                      <label className="custom-control-label" htmlFor="duvida_N">
                        Não
                      </label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="m-0">Qual a sua relação com a Mais Valor?</p>
                  </div>
                  <div className="md-form mb-4 mt-0">
                    <select
                      className="form-control"
                      name="select_duvida"
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
                            id="campo_colaborador"
                            value={typeRelation}
                          >
                            {typeRelation}
                          </option>
                        )
                      })} 

                    </select>
                  </div>
                  {/* {radioOption === "1" && ( */}
                    <div id="campo_nome" className="md-form mb-4 mt-0">
                      <label htmlFor="nome">Nome Completo</label>
                      <input
                        type="text"
                        className="form-control txt"
                        name="nome_duvida"
                        id="nome_duvida"
                        placeholder=""
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                  {/* )} */}
                  {/* {radioOption === "1" && ( */}
                    <div id="campo_telefone" className="md-form mb-4 mt-0">
                      <label htmlFor="telefone">Celular</label>
                      <input
                        type="text"
                        className="form-control txt"
                        name="telefone_duvida"
                        id="telefone_duvida"
                        placeholder="" 
                        value={phone}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                      />
                    </div>
                  {/* )} */}
                  {/* {radioOption === "1" && ( */}
                    <div className="md-form mb-4 mt-0" id="div-email">
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        className="form-control txt"
                        name="email_duvida"
                        id="email_duvida"
                        placeholder=""
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  {/* )} */}
                  <div className="md-form mb-4 mt-0" id="arquivo">
                    <label htmlFor="email">
                      Anexar arquivo:{" "}
                      <i>
                        (somente arquivos .pdf / .doc / .docx, tamanho máximo
                        2MB)
                      </i>
                    </label>
                    <input
                      type="file"
                      className="form-control  txt"
                      name="file_duvida"
                      id="file_duvida"
                      placeholder=""
                      accept=".doc,.docx,.pdf"
                      onChange={handleChangedFile}
                    />
                  </div>
                  <div className="md-form">
                    <label htmlFor="obs">
                      <h5 className="mb-3 font_size_sm_h3">
                        Qual a sua dúvida com relação ao Código de Conduta,
                        politicas e procedimentos da Mais Valor?
                      </h5>
                      <p>
                        (Descreva o mais detalhadamente possível o(s)
                        processo(s) ou procedimento(s) que você tem dúvida(s)
                        sobre o código de ética, ou procedimento(s) da empresa.
                        Caso seja possível, indique a área/setor a que você se
                        refere.)
                      </p>
                    </label>
                    <textarea
                      className="md-textarea form-control txt"
                      cols="30"
                      rows="5"
                      name="obs_duvida"
                      id="obs_duvida"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      id="duvida_btn"
                      name="duvida_btn"
                      className="btn btn-success  mb-4 hover_products border_radius_btn float-right"
                      value="enviar"
                    >
                      Enviar
                    </button>
                  </div>
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

export default Doubt;

