import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";
import { mask as masker, unMask } from "node-masker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Benefit = () => {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const cpf_pattern = "999.999.999-99";
  const phone_pattern = "(99) 99999-9999";

  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Consórcio: uma maneira segura e econômica de conquistar seus sonhos."
        background_image="beneficio1.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="container color_sobre">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mt-5 font_size_sm mb-5">Cartão Benefício</h1>
            <h2 className="mb-4 font_size_sm_h3 mt-4">
              Atenção, servidor público
            </h2>
            <p className="mb-5">
              O cartão benefício é uma facilidade que chegou para te ajudar nas
              finanças. Ele conta com Saque Fácil, que é uma linha de crédito em
              que você pode sacar a qualquer momento, mesmo sem ter saldo em
              conta. O valor cai em até duas horas após a solicitação.
              <br />
              Você pode solicitar o Saque Fácil através de diversos canais: app,
              site, Central de Relacionamento ou lojas físicas. O valor é
              creditado na conta corrente e o pagamento pode ser parcelado (com
              juros).
            </p>

            <h3 className="font-weight-bold font_size_sm mb-0 mt-5 mb-lg-3 mb-xl-2">
              Separamos algumas vantagens do cartão benefício para você:
            </h3>

            <ul id="saque-aniversario-secao-01" className="list-unstyled">
              <li className="d-flex  align-items-start mb-3 mt-3">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Saque Fácil não rotativo</span>
              </li>

              <li className="d-flex align-items-start mb-3">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Contratação fácil</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Sem taxa de serviço</span>
              </li>
              <li className="d-flex align-items-start mb-3">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Cartão sem anuidade</span>
              </li>
              <li className="d-flex align-items-start mb-4">
                <i className="text-success mr-2">
                  <FontAwesomeIcon icon={solid("circle")} />
                </i>
                <span>Sem taxa de emissão</span>
              </li>
            </ul>

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
                      Cartão Benefício!
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form id="form_consorcio" name="form_consorcio">
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="nome_consorcio"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu nome"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="nome_consorcio"
                          name="nome_consorcio"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="email_consorcio"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Digite seu e-mail"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="email_consorcio"
                          name="email_consorcio"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="telefone_consorcio"
                        >
                          CEL
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Digite seu telefone"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="telefone_consorcio"
                          name="telefone_consorcio"
                          onChange={({ target }) =>
                            setPhone(unMask(target.value))
                          }
                          value={masker(phone, phone_pattern)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="cpf_consorcio"
                        >
                          CPF
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu CPF"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="cpf_consorcio"
                          name="cpf_consorcio"
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

export default Benefit;
