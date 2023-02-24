import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";
import { mask as masker, unMask } from "node-masker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { fetchApi } from "../utils/api"
import { PRODUCTS } from "../utils/products"

const Credit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const cpf_pattern = "999.999.999-99";
  const phone_pattern = "(99) 99999-9999";

  const handleSubmitConsignedCredit = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
        productId: PRODUCTS.CONSORCIO,
        name: name,
        email: email,
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
    setName("")
    setEmail("")
  }

  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Crédito Consignado com mais praticidade para você cuidar do que mais importa!"
        background_image="consignado.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="container color_sobre">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-5 font_size_sm mb-5">Crédito Consignado</h1>
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

            <h3 className="font-weight-bold font_size_sm mb-0 mt-5 mb-lg-3 mb-xl-2">
              Nós temos as melhores condições para:
            </h3>

            <ul id="saque-aniversario-secao-01" className="list-unstyled">
              <li className="d-flex align-items-start mb-3 mt-3">
                <i class="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Aposentados e Pensionistas</span>
              </li>

              <li className="d-flex align-items-start mb-3">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Empresas Privadas</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Forças Armadas Brasileira</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Funcionários Públicos</span>
              </li>
              <li className="d-flex align-items-start mb-4">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Polícia Militar</span>
              </li>
            </ul>
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
                  Crédito Consignado!
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  id="form_credito_consignado"
                  name="form_credito_consignado"

                  onSubmit={handleSubmitConsignedCredit}
                >
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="nome_consignado"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu nome"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="nome_consignado"
                      name="nome_consignado"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="email_consignado"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Digite seu e-mail"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="email_consignado"
                      name="email_consignado"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="telefone_consignado"
                    >
                      CEL
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Digite seu telefone"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="telefone_consignado"
                      name="telefone_consignado"
                      onChange={({ target }) => setPhone(unMask(target.value))}
                      value={masker(phone, phone_pattern)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="cpf_consignado"
                    >
                      CPF
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu CPF"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="cpf_consignado"
                      name="cpf_consignado"
                      onChange={({ target }) => setCpf(unMask(target.value))}
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

                  <ToastContainer />
                </form>
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

export default Credit;
