import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Work = () => {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] =  useState('')
  const [email, setEmail] = useState('')

  const [city, setCity] =  useState('')
  const [state, setState] = useState('')
  const [area, setArea] = useState('')
  const [comment, setComent] =  useState('')

  const [file, setFile] = useState('')
 
  function handleChangedFile(event) {
    if (!event.target.files) {
        return;
    }

    const selectedFile = Array.from(event.target.files)    
    setFile(selectedFile)
  }

  const formData = () => {
    let data = new FormData()
    data.append('name', name)
    data.append('gender', gender)
    data.append('phone', phone)
    data.append('email', email)
    data.append('city', city)
    data.append('state', state)
    data.append('area', area)
    data.append('comment', comment)
    data.append('has_file', file[0])

    return data
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()

    try {
        const data = formData()

        const response = await fetch(`${process.env.REACT_APP_API_URL}/candidate/add`, {
          method: 'POST', 
          body: data
        });

        const { error } = await response.json()

        if (response.status === 201) {
            resetInputs()
            toast.success("Dados enviados com sucesso!")
        }
  
        if (response.status === 400) {
            toast.error(`${error}`)
        }

    } catch (err) {
        console.log(err)
    }
  }

  /**
   * Seleciona o valor radiobutton for checado
   * @param {*} event 
   */
  function handleOnChangeGender(event) {
    setGender(event.target.value )
  }

  function resetInputs() {
    setName('')
    setEmail('')
    setPhone('')
    setCity('')
    setState('')
    setFile('')
    setComent('')
  }

   return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Venha fazer parte do time Mais Valor!"
        background_image="trabalheconosco1.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="mt-3 pt-lg-0 pb-5 pb-lg-0">
        <div className="container color_sobre">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-5 mt-5">Trabalhe conosco</h1>
              <h2 className="mb-3">
                Estamos sempre em busca de talentos!
              </h2>
              <p>
                Estamos em constante crescimento com foco em transformar e
                democratizar cada vez mais o mercado de crédito no Brasil. Como
                um dos maiores correspondentes bancários do país, buscamos
                talentos que possam nos ajudar a cumprir essa missão. Envie seu
                currículo para nós, estamos ansiosos para te conhecer!
              </p>
              <form onSubmit={handleSubmitForm} action="post" encType="multipart/form-data">
                <div className="form-group row mb-4">
                  <p>Informações Pessoais</p>
                  <div id="campo_nome" className="md-form mb-4 mt-0">
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                      type="text"
                      className="form-control txt"

                      name="nome_work"

                      id="nome"
                      placeholder=""
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label className="mt-3">Gênero</label>
                  </div>

                  <div className="col-12" onChange={handleOnChangeGender}>
                    <div className="custom-control custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="work_S"
                        name="identificar"
                        value="Masculino"
                      />
                      <label className="custom-control-label" htmlFor="work_S">
                        Masculino
                      </label>
                    </div>
                    <div className="custom-control mb-4 custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="work_N"
                        name="identificar"
                        value="Feminino"
                      />
                      <label className="custom-control-label" htmlFor="work_N">
                        Feminino
                      </label>
                    </div>
                    {/* <div className="custom-control mb-4 custom-radio custom-control-inline">
                      <input
                        type="radio"
                        className="custom-control-input sexo"
                        id="work_I"
                     name="identificar"
                        value="Nao"
                      />
                      <label className="custom-control-label" htmlFor="work_I">
                       Prefiro não dizer
                      </label>
                    </div> */}
                  </div>

                  <p>Informações para contato</p>

                  <div id="campo_telefone" className="md-form mb-4 mt-0">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                      type="text"
                      className="form-control txt"

                      name="telefone_work"
                      id="telefone"
                      placeholder=""
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                  <div className="md-form mb-4 mt-0" id="div-email">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      className="form-control txt"

                      name="email_work"

                      id="email"
                      placeholder=""
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div id="campo_cidade" className="md-form mb-4 mt-0">
                    <label htmlFor="cidade">Cidade</label>
                    <input
                      type="text"
                      className="form-control txt"

                      name="cidade_work"

                      id="cidade"
                      placeholder=""
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                    />
                  </div>
                  <div id="campo_nome" className="md-form mb-4 mt-0">
                    <label htmlFor="estado">Estado</label>
                    <input
                      type="text"
                      className="form-control txt"

                      name="estado_work"

                      id="estado"
                      placeholder=""
                      value={state}
                      onChange={(event) => setState(event.target.value)}
                    />
                  </div>
                  <div id="campo_nome" className="md-form mb-4 mt-0">
                    <label htmlFor="areadeinteresse">Área de interesse</label>
                    <input
                      type="text"
                      className="form-control txt"

                      name="areadeinteresse_work"

                      id="areadeinteresse"
                      placeholder=""
                      value={area}
                      onChange={(event) => setArea(event.target.value)}
                    />
                  </div>
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
                      name="file_work"

                      id="file"
                      placeholder=""
                      // accept=".doc,.docx,.pdf"
                      // value={file}
                      onChange={handleChangedFile}
                      
                    />
                  </div>
                  <div className="md-form">
                    <label htmlFor="observacoes">
                      <p>Observações</p>
                      
                    </label>
                    <textarea
                      className="md-textarea form-control txt"

                      name="obs_work"

                      id="observacoes"
                      cols="30"
                      rows="5"
                      value={comment}
                      onChange={(event) => setComent(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      id="work_btn"
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

export default Work;
