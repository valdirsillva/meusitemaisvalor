import React, { useState } from "react";
import { mask as masker, unMask } from "node-masker";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchApi } from "../utils/api"
import { PRODUCTS } from '../utils/products'

export default () => {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone1, setPhone1] = useState("");
  const [cpf1, setCpf1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [cpf2, setCpf2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [cpf3, setCpf3] = useState("");
  const [phone4, setPhone4] = useState("");
  const [cpf4, setCpf4] = useState("");
  const [phone5, setPhone5] = useState("");
  const [cpf5, setCpf5] = useState("");
  const [phone6, setPhone6] = useState("");
  const [cpf6, setCpf6] = useState("");

  const cpf_pattern = "999.999.999-99";
  const phone_pattern = "(99) 99999-9999";

  const [namePersonalCredit, setNamePersonalCredit] = useState('')
  const [emailPersonalCredit, setEmailPersonalCredit] = useState('')

  const [nameCreditPortability, setNameCreditPortability] = useState('')
  const [emailCreditPortability, setEmailCreditPortability] = useState('')

  const [nameRealStateFinancing, setNameRealStateFinancing] = useState('')
  const [emailRealStateFinancing, setEmailRealStateFinancing] = useState('')

  const [nameCardBenefits, setNameCardBenefits] = useState('')
  const [emailCardBenefits, setEmailCardBenefits] = useState('')

  const [nameVehicleCredit, setNameVehicleCredit] = useState('')
  const [emailVehicleCredit, setEmailVehicleCredit] = useState('')

  const [nameCardBenefitsForm2, setNameCardBenefitsForm2] = useState('')
  const [emailCardBenefitsForm2, setEmailCardBenefitsForm2] = useState('')

  const handleSubmitPersonalCredit = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
        productId: PRODUCTS.CREDITO_PESSOAL,
        name: namePersonalCredit,
        email: emailPersonalCredit,
        phone: phone1,
        cpf: cpf1
      })

      setCpf1("")
      setPhone1("")
      setNamePersonalCredit("")
      setEmailPersonalCredit("")
    } catch(err) {
      console.log(err)
    }
  }

  const handleSubmitCreditPortability = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
        productId: PRODUCTS.PORTABILIDADE_CREDITO,
        name: nameCreditPortability,
        email: emailCreditPortability,
        phone: phone2,
        cpf: cpf2
      })
      setCpf2("")
      setPhone2("")
      setNameCreditPortability("")
      setEmailCreditPortability("")
    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitRealStateFinancing = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.FINANCIAMENTO_IMOBILIARIO,
          name: nameRealStateFinancing,
          email: emailRealStateFinancing,
          phone: phone3,
          cpf: cpf3
        }
      )

      setCpf3("")
      setPhone3("")
      setNameRealStateFinancing("")
      setEmailRealStateFinancing("")
    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitCardBenefits = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.CARTAO_BENEFICIOS,
          name: nameCardBenefits,
          email: emailCardBenefits,
          phone: phone4,
          cpf: cpf4
        }
      )

      setCpf4("")
      setPhone4("")
      setNameCardBenefits("")
      setEmailCardBenefits("")
    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitVehicleCredit = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.CREDITO_VEICULO,
          name: nameVehicleCredit,
          email: emailVehicleCredit,
          phone: phone5,
          cpf: cpf5
        }
      )

      setCpf5("")
      setPhone5("")
      setNameVehicleCredit("")
      setEmailVehicleCredit("")
    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitCardBenefitsForm2 = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.CARTAO_BENEFICIOS,
          name: nameCardBenefitsForm2,
          email: emailCardBenefitsForm2,
          phone: phone6,
          cpf: cpf6
        }
      )

      setCpf6("")
      setPhone6("")
      setNameCardBenefitsForm2("")
      setEmailCardBenefitsForm2("")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <section className="container margin_top_precisando " id="services">
      <div className="row justify-content-md-center">
        <div className="col-lg-12 text-center mb-4">
          <h2 className="section-heading text-uppercase font_size_titulo">
            Precisando de dinheiro?
          </h2>
          <h3 className="section-subheading font_size_subtitulo">
            Temos as melhores soluções pra você ter um crédito a mais!
          </h3>
        </div>
        <div>
          <div className="col-lg-12 pt-5">
            <div className="profile-card-3 text-center">
              <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img
                  src={images["contratacaorapida.png"]}
                  className="img img-responsive w-100 height_sm_burocracia"
                />
              </a>
              <div
                className="profile-name "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabinex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Contratação rápida e sem burocracia
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form id="form_burocracia" name="form_burocracia">
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="nome_burocracia"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu nome"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="nome_burocracia"
                          name="nome_burocracia"

                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="email_burocracia"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Digite seu e-mail"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="email_burocracia"
                          name="email_burocracia"
                          onChange={(event) => setEmailPersonalCredit(event.target.value)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="telefone_burocracia"
                        >
                          CEL
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Digite seu telefone"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="telefone_burocracia"
                          name="telefone_burocracia"
                          onChange={({ target }) =>
                            setPhone(unMask(target.value))
                          }
                          value={masker(phone, phone_pattern)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="cpf_burocracia"
                        >
                          CPF
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu CPF"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="cpf_burocracia"
                          name="cpf_burocracia"
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

                      <ToastContainer />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-lg-flex  justify-content-center pt-lg-5  text-center">
          <div className="row">
            <div className="col-lg-3 col-6 margin_top_sm_card margin_bottom_card">
              <div className="profile-card-2 height_card_sm">
                <a data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  <img
                    src={images["pessoal.png"]}
                    className="img img-responsive height_img_sm"
                  />
                </a>
                <div
                  className="profile-name"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                ></div>
              </div>
              <div
                className="modal fade"
                id="exampleModal1"
                tabinex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Crédito Pessoal
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form name="form_cp" id="form_cp" onSubmit={handleSubmitPersonalCredit}>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text msg-erro msg-nome"
                            htmlFor="nome_cp"
                          >
                            Nome
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="nome_cp"
                            name="nome_cp"
                            placeholder="Digite seu nome"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(event) => setNamePersonalCredit(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="email_cp"
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="email_cp"
                            name="email_cp"
                            onChange={(event) => setEmailPersonalCredit(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="telefone_cp"
                          >
                            CEL
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Digite seu telefone"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="telefone_cp"
                            name="telefone_cp"
                            onChange={({ target }) =>
                              setPhone1(unMask(target.value))
                            }
                            value={masker(phone1, phone_pattern)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label className="input-group-Text" htmlFor="cpf_cp">
                            CPF
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu CPF"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="cpf_cp"
                            name="cpf_cp"
                            onChange={({ target }) =>
                              setCpf1(unMask(target.value))
                            }
                            value={masker(cpf1, cpf_pattern)}
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
                          <button
                            type="submit"
                            className="btn btn-primary"
                            id="botao"
                          >
                            Enviar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 margin_top_sm_card  ">
              <div className="profile-card-2 height_card_sm">
                <a data-bs-toggle="modal" data-bs-target="#exampleModal2">
                  <img
                    src={images["portabilidade1.png"]}
                    className="img img-responsive height_img_sm"
                  />
                </a>
                <div
                  className="profile-name"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                ></div>
              </div>
              <div
                className="modal fade"
                id="exampleModal2"
                tabinex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel2">
                        Portabilidade de credito
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
                        action=""
                        name="form_portabilidade"
                        id="form_portabilidade"
                        onSubmit={handleSubmitCreditPortability}
                      >
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

                            onChange={(event) => setNameCreditPortability(event.target.value)}
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
                            onChange={(event) => setEmailCreditPortability(event.target.value)}
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
                              setPhone2(unMask(target.value))
                            }
                            value={masker(phone2, phone_pattern)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="cpf_portabilidade"
                          >
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
                              setCpf2(unMask(target.value))
                            }
                            value={masker(cpf2, cpf_pattern)}
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

            <div className="col-lg-3 col-6 margin_top_sm_card margin_bottom_card">
              <div className="profile-card-2  height_card_sm">
                <a data-bs-toggle="modal" data-bs-target="#exampleModal3">
                  <img
                    src={images["financiamento.png"]}
                    className="img img-responsive height_img_sm "
                  />
                </a>
                <div
                  className="profile-name"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                ></div>
              </div>
              <div
                className="modal fade"
                id="exampleModal3"
                tabinex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel3">
                        Financiamento imobiliário
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
                        action="#"
                        name="form_imobiliario"
                        id="form_imobiliario"
                        onSubmit={handleFormSubmitRealStateFinancing}
                      >
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="nome_imobiliario"
                          >
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
                            value={nameRealStateFinancing}
                            onChange={(event) => setNameRealStateFinancing(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="email_imobiliario"
                          >
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
                            value={emailRealStateFinancing}
                            onChange={(event) => setEmailRealStateFinancing(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="telefone_imobiliario"
                          >
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
                              setPhone3(unMask(target.value))
                            }
                            value={masker(phone3, phone_pattern)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="cpf_imobiliario"
                          >
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
                              setCpf3(unMask(target.value))
                            }
                            value={masker(cpf3, cpf_pattern)}
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

            <div className="col-lg-3 col-6 margin_top_sm_card ">
              <div className="profile-card-2  height_card_sm">
                <a data-bs-toggle="modal" data-bs-target="#exampleModal4">
                  <img
                    src={images["beneficio1.png"]}
                    className="img img-responsive height_img_sm"
                  />
                </a>
                <div
                  className="profile-name"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal4"
                ></div>
              </div>
              <div
                className="modal fade"
                id="exampleModal4"
                tabinex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel4">
                        Cartão Benefício
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form name="form_pre_aprovado" id="form_pre_aprovado" onSubmit={handleFormSubmitCardBenefits}>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="nome_pre_aprovado"
                          >
                            Nome
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu nome"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="nome_pre_aprovado"
                            name="nome_pre_aprovado"
                            value={nameCardBenefits}

                            onChange={(event) => setNameCardBenefits(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="email_pre_aprovado"
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="email_pre_aprovado"
                            name="email_pre_aprovado"
                            value={emailCardBenefits}

                            onChange={(event) => setEmailCardBenefits(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="telefone_pre_aprovado"
                          >
                            CEL
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Digite seu telefone"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="telefone_pre_aprovado"
                            name="telefone_pre_aprovado"
                            onChange={({ target }) =>
                              setPhone4(unMask(target.value))
                            }
                            value={masker(phone4, phone_pattern)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="cpf_pre_aprovado"
                          >
                            CPF
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu CPF"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="cpf_pre_aprovado"
                            name="cpf_pre_aprovado"
                            onChange={({ target }) =>
                              setCpf4(unMask(target.value))
                            }
                            value={masker(cpf4, cpf_pattern)}
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
        <div>
          <div className="col-lg-12  pt-lg-5">
            <div className="Profile-card-2 ">
              <a data-bs-toggle="modal" data-bs-target="#exampleModal5">
                <img
                  src={images["veiculo2.png"]}
                  className="img img-responsive w-100 height_sm"
                />
              </a>
              <div
                className="profile-name"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal5"
              ></div>
            </div>
            <div
              className="modal fade"
              id="exampleModal5"
              tabinex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel5">
                      Crédito veículo
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form id="form_veiculo" name="form_veiculo" onSubmit={handleFormSubmitVehicleCredit}>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="nome_veiculo"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu nome"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="nome_veiculo"
                          name="nome_veiculo"
                          value={nameVehicleCredit}
                          
                          onChange={(event) => setNameVehicleCredit(event.target.value)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="email_veiculo"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Digite seu e-mail"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="email_veiculo"
                          name="email_veiculo"
                          value={emailVehicleCredit}
                          onChange={(event) => setEmailVehicleCredit(event.target.value)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="telefone_veiculo"
                        >
                          CEL
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Digite seu telefone"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="telefone_veiculo"
                          name="telefone_veiculo"
                          onChange={({ target }) =>
                            setPhone5(unMask(target.value))
                          }
                          value={masker(phone5, phone_pattern)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="cpf_veiculo"
                        >
                          CPF
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu CPF"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="cpf_veiculo"
                          name="cpf_veiculo"
                          onChange={({ target }) =>
                            setCpf5(unMask(target.value))
                          }
                          value={masker(cpf5, cpf_pattern)}
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

        <div>
          <div className="col-lg-12 pt-5">
            <div className="Profile-card-2">
              <a data-bs-toggle="modal" data-bs-target="#exampleModal6">
                <img
                  src={images["imagemnova.png"]}
                  className="img img-responsive w-100 height_sm"
                />
              </a>
              <div
                className="profile-name "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal6"
              ></div>
            </div>
            <div
              className="modal fade"
              id="exampleModal6"
              tabinex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel6">
                      Cartão Benefício
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form id="form_beneficio" name="form_beneficio" onSubmit={handleFormSubmitCardBenefitsForm2}>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="nome_beneficio"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu nome"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="nome_beneficio"
                          name="nome_beneficio"

                          value={nameCardBenefitsForm2}
                          onChange={(event) => setNameCardBenefitsForm2(event.target.value)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="email_beneficio"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Digite seu e-mail"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="email_beneficio"
                          name="email_beneficio"
                          value={emailCardBenefitsForm2}
                          onChange={(event) => setEmailCardBenefitsForm2(event.target.value)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="telefone_beneficio"
                        >
                          CEL
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Digite seu telefone"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="telefone_beneficio"
                          name="telefone_beneficio"
                          onChange={({ target }) =>
                            setPhone6(unMask(target.value))
                          }
                          value={masker(phone6, phone_pattern)}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <label
                          className="input-group-Text"
                          htmlFor="cpf_beneficio"
                        >
                          CPF
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Digite seu CPF"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          id="cpf_beneficio"
                          name="cpf_beneficio"
                          onChange={({ target }) =>
                            setCpf6(unMask(target.value))
                          }
                          value={masker(cpf6, cpf_pattern)}
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
    </section>
  );
};

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/img/", false, /\.(png|jpe?g|svg)$/)
);
