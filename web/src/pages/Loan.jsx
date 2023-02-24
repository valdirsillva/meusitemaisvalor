import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";
import { mask as masker, unMask } from "node-masker";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchApi } from "../utils/api"
import { PRODUCTS } from "../utils/products"

const Loan = () => {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const cpf_pattern = "999.999.999-99";
  const phone_pattern = "(99) 99999-9999";

  const [nameLoanPortability, setNameLoanPortability] = useState("")
  const [emailLoanPortability, setEmailLoanPortability] = useState("")

  const handleFormSubmitLoanPortability = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
        productId: PRODUCTS.PORTABILIDADE_EMPRÉSTIMO,
        name: nameLoanPortability,
        email: emailLoanPortability,
        phone: phone,
        cpf: cpf
      })
      handleResetForm()

    } catch(err) {
      console.log(err)
    }
  }

  const handleResetForm = (e) => {
    setCpf("")
    setPhone("")
    setNameLoanPortability("")
    setEmailLoanPortability("")
  }

  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Transfira seus empréstimos com a Mais Valor e aproveite as melhores condições!"
        background_image="portabilidade.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="container color_sobre">
        <div className="row">
          <div className="col-lg-8">
          <h1 className="mt-5 font_size_sm mb-5">Portabilidade de Empréstimo!</h1>
            <h2 className="mb-4 font_size_sm_h3 mt-4">
              Faça aqui a portabilidade do seu empréstimo consignado
            </h2>
            <p className="mb-4">
              Transfira seus empréstimos para um único banco, possibilitando a
              diminuição das taxas de juros e melhores condições de pagamento
              das parcelas em aberto.
              <br />
              Com a portabilidade do Empréstimo Consignado você pode solicitar a
              transferência de seus créditos contratados em outros bancos e ter
              as parcelas debitadas em folha de pagamento. Consulte nossos
              especialistas hoje!
            </p>

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
                      Portabilidade de Empréstimo!
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form id="form_portabilidade" name="form_portabilidade" onSubmit={handleFormSubmitLoanPortability}>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="nome_portabilidade"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu nome"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="nome_portabilidade"
                          name="nome_portabilidade"

                          value={nameLoanPortability}
                          onChange={(event) => setNameLoanPortability(event.target.value)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="email_portabilidade"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Digite seu e-mail"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="email_portabilidade"
                          name="email_portabilidade"
                          value={emailLoanPortability}
                          onChange={(event) => setEmailLoanPortability(event.target.value)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="telefone_portabilidade"
                        >
                          CEL
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Digite seu telefone"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="telefone_portabilidade"
                          name="telefone_portabilidade"
                          onChange={({ target }) =>
                            setPhone(unMask(target.value))
                          }
                          value={masker(phone, phone_pattern)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label className="input-group-Text" htmlFor="cpf_portabilidade">
                          CPF
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu CPF"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="cpf_portabilidade"
                          name="cpf_portabilidade"
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
                      {/* componente de mensagem toast */}
                      <ToastContainer/>
                    </form>
                  </div>
                </div>
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

export default Loan;
