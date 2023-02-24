import React, { useState } from "react";
import { mask as masker, unMask } from "node-masker";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { fetchApi } from "../utils/api";
import { PRODUCTS } from "../utils/products";

const RealEstate = () => {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const cpf_pattern = "999.999.999-99";
  const phone_pattern = "(99) 99999-9999";

  const [nameReatStateCredit, setNameReatStateCredit] = useState("")
  const [emailReatStateCredit, setEmailReatStateCredit] = useState("")
  
  const handleSubmitReatStateCredit = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
        productId: PRODUCTS.CREDITO_IMOBILIARIO,
        name: nameReatStateCredit,
        email: emailReatStateCredit,
        phone: phone,
        cpf: cpf
      })
      /**
       * Função para resetar campos do formulário
       */
      handleResetForm()
    } catch(err) {
      console.log(err)
    }
  }

  const handleResetForm = () => {
    setCpf("")
    setPhone("")
    setNameReatStateCredit("")
    setEmailReatStateCredit("")
  }

  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Crédito Imobiliário"
        background_image="imobiliario1.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="container color_sobre">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-5 font_size_sm mb-5">Crédito Imobiliário</h1>
            <h2 className="mb-4 font_size_sm_h3 mt-4">
              Conte com o Crédito Consignado para equilibrar sua vida
              financeira, realizar seus sonhos e projetos para sua família!
            </h2>
            <p className="mb-5">
              As menores taxas de juros em empréstimo pessoal, mais tempo para
              pagar e parcelas debitadas diretamente do holerite ou benefício.
              <br />O dinheiro entra direto na sua conta bancária e não é
              necessário informar o motivo do empréstimo ou comprovar o uso.
              Oferecemos as melhores opções de créditos e consórcios de forma
              prática e segura.
            </p>
            <p>
              <i>
                *Neste período serão pagos apenas os juros, seguros e tarifa de
                administração do contrato.
              </i>
            </p>
            <p className="mb-4">
              <i>
                **Neste mês serão pagos os seguros e a tarifa de administração
                do contrato.
              </i>
            </p>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-success  mb-4 hover_products border_radius_btn text-decoration-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Contratar agora
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                Crédito Imobiliário!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="form_imobiliario" name="form_imobiliario" onSubmit={handleSubmitReatStateCredit}>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="nome_imobiliario">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu nome"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="nome_imobiliario"
                      name="nome_imobiliario"
                      value={nameReatStateCredit}
                      onChange={(event) => setNameReatStateCredit(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="email_imobiliario">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Digite seu e-mail"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="email_imobiliario"
                      name="email_imobiliario"
                      value={emailReatStateCredit}
                      onChange={(event) => setEmailReatStateCredit(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="telefone_imobiliario">
                      CEL
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Digite seu telefone"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="telefone_imobiliario"
                      name="telefone_imobiliario"
                      onChange={({ target }) =>
                      setPhone(unMask(target.value))
                    }
                    value={masker(phone, phone_pattern)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="cpf_imobiliario">
                      CPF
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu CPF"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="cpf_imobiliario"
                      name="cpf_imobiliario"
                      onChange={({ target }) =>
                      setCpf(unMask(target.value))
                    }
                    value={masker(cpf, cpf_pattern)}
                    />
                  </div>
                  <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </div>
              </form>
                 {/* componente de mensagem toast */}
                <ToastContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Amazing amazing={Amazing}></Amazing>
      <Footer footer={Footer}></Footer>
    </div>
  );
};

export default RealEstate;
