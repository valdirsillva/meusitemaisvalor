// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sugestion = () => {
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

    async function sendNewSuggeston(e) {
       e.preventDefault()  
       try {
        let pathName = window.location.pathname
        let content = pathName.replace(/\//g,'')
       
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
          toast.success("Dados enviado com sucesso!")
        }

        if (response.status === 400) {
           toast.error(`${error}`)
        }

       } catch(err) {
         console.log(err) 
       }
    }
  
  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Faça uma sugestão"
        background_image="falecomamaisvalor.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="mt-3 pt-lg-0 pb-5 pb-lg-0">
        <div className="container color_sobre">
          <div className="row">
            <div className="col-12">
            <h1 className="mb-5 font_size_sm mt-5">Sugestão</h1>
              <h2 className="mb-3 font_size_sm_h3">
                Estamos em constante evolução. Nos ajude em algum ponto que
                possamos melhorar.
              </h2>
              <form action="" onSubmit={sendNewSuggeston} method="POST" encType="multipart/form-data">
                <div className="form-group row mb-5">
                  <div className="col-12">
                    <label className="mt-3">Gostaria de se identificar?</label>
                  </div>
                  <div className="col-12">
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="sugestion_S"
                        // onChange={(e) => setRadioOption(e.target.value)}
                        name="identificar"
                        value="1"
                      />
                      <label className="custom-control-label" htmlFor="sugestion_S">
                        Sim
                      </label>
                    </div>

                    <div className="custom-control mb-4 custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="sugestion_N"
                        // onChange={(e) => setRadioOption(e.target.value)}
                        name="identificar"
                        value="2"
                      />
                      <label className="custom-control-label" htmlFor="sugestion_N">
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
                        name="nome_sugestion"
                        id="nome"
                        placeholder=""
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
                        name="telefone_sugestion"
                        id="telefone"
                        placeholder=""
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
                        name="email_sugestion"
                        id="email"
                        placeholder=""
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                  {/* )} */}
                  <div className="md-form mb-4 mt-0" id="arquivo">
                    <label htmlFor="file">
                      Anexar arquivo:{" "}
                      <i>
                        (somente arquivos .pdf / .doc / .docx, tamanho máximo
                        2MB)
                      </i>
                    </label>
                    <input
                      type="file"
                      className="form-control  txt"
                      name="file_sugestion"
                      id="file"
                      placeholder=""
                      accept=".doc,.docx,.pdf"
                      onChange={handleChangedFile}
                    />
                  </div>
                  <div className="md-form">
                    <label htmlFor="obs_sugestion">
                      <h5 className="mb-3 font_size_sm_h3">Qual a sua sugestão?</h5>
                      <p>
                        Qual a sua sugestão? (Descreva o mais detalhadamente
                        possível o(s) processo(s) ou procedimento(s) que na sua
                        opinião deve(m) ser alterado(s) em benefício da empresa
                        e dos colaboradores e parceiros, especificando quais
                        seriam essas alterações e quais os benefícios
                        decorrentes de sua implementação. Caso seja possível,
                        indique a área/setor a que você se refere.)
                      </p>
                    </label>
                    <textarea
                      className="md-textarea form-control txt"
                      name="obs_sugestion"
                      id="obs_sugestion"
                      cols="30"
                      rows="5"
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      id="sugestion_btn"
                      // onclick=""
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

export default Sugestion;

// function mensagemFormEnviado(e) {
//   e.preventDefault();
//   alert("Formulario Enviado");
// }


