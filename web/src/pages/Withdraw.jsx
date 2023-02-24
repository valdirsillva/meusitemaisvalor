import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

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

const Withdraw = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone1, setPhone1] = useState("");
  const [cpf1, setCpf1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [cpf2, setCpf2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [cpf3, setCpf3] = useState("");

  const cpf_pattern = "999.999.999-99";
  const phone_pattern = "(99) 99999-9999";

  const [nameWithdrawBirthday1, setNameWithdrawBirthday1] = useState("")
  const [emailWithdrawBirthday1, setEmailWithdrawBirthday1] = useState("")

  const [nameWithdrawBirthday2, setNameWithdrawBirthday2] = useState("")
  const [emailWithdrawBirthday2, setEmailWithdrawBirthday2] = useState("")

  const [nameWithdrawBirthday3, setNameWithdrawBirthday3] = useState("")
  const [emailWithdrawBirthday3, setEmailWithdrawBirthday3] = useState("")

  const handleFormSubmitWithdrawalBirthday1 = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.SAQUE_ANIVERSARIO,
          name: nameWithdrawBirthday1,
          email: emailWithdrawBirthday1,
          phone: phone,
          cpf: cpf
        }
      )
      setCpf("")
      setPhone("")
      setNameWithdrawBirthday1("")
      setEmailWithdrawBirthday1("")

    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitWithdrawalBirthday2 = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.SAQUE_ANIVERSARIO,
          name: nameWithdrawBirthday2,
          email: emailWithdrawBirthday2,
          phone: phone1,
          cpf: cpf1
        }
      )
      setCpf1("")
      setPhone1("")
      setNameWithdrawBirthday2("")
      setEmailWithdrawBirthday2("")

    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitWithdrawalBirthday3 = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.SAQUE_ANIVERSARIO,
          name: nameWithdrawBirthday3,
          email: emailWithdrawBirthday3,
          phone: phone2,
          cpf: cpf2
        }
      )
      setCpf2("")
      setPhone2("")
      setNameWithdrawBirthday3("")
      setEmailWithdrawBirthday3("")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Dinheiro rápido e seguro na sua mão.
        // Antecipe até 10 parcelas do seu Saque-Aniversário!"
        background_image="saque1.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="container color_sobre">
      <ToastContainer />
        <div className="row">
          <div className="col-lg-8">
            <div className="col-12 mt-4 col-lg-12">
              <h1 className="mt-5 font_size_sm mb-5">Saque-Aniversário do FGTS</h1>
              <h3 className="font-weight-bold mt-5 font_size_sm_h3 mb-lg-4 mb-xl-5">
                Com a Mais Valor você antecipa 10 anos do Saque-Aniversário do
                FGTS e recebe o dinheiro na conta em até 24 horas, sem
                comprometer sua renda mensal!
              </h3>

              <button
                type="button"
                className="btn btn-success  mb-4 mt-4 hover_products border_radius_btn text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Contratar agora!
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
                        Contratar agora!
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form id="form_saque" name="form_saque" onSubmit={handleFormSubmitWithdrawalBirthday1}>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="nome_saque"
                          >
                            Nome
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu nome"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="nome_saque"
                            name="nome_saque"
                            value={nameWithdrawBirthday1}
                            onChange={(event) => setNameWithdrawBirthday1(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="email_saque"
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="email_saque"
                            name="email_saque"
                            value={emailWithdrawBirthday1}
                            onChange={(event) => setEmailWithdrawBirthday1(event.target.value)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="telefone_saque"
                          >
                            CEL
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Digite seu telefone"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="telefone_saque"
                            name="telefone_saque"
                            onChange={({ target }) =>
                              setPhone(unMask(target.value))
                            }
                            value={masker(phone, phone_pattern)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="cpf_saque"
                          >
                            CPF
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu CPF"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="cpf_saque"
                            name="cpf_saque"
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

            <div className="col-12 col-lg-12">
              <h3 className="font-weight-bold font_size_sm mb-0 mt-5 mb-lg-3 mb-xl-2">
                O que é a antecipação do Saque-Aniversário FGTS?
              </h3>

              <ul id="saque-aniversario-secao-01" className="list-unstyled">
                <li className="d-flex  align-items-start mb-3 mt-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>
                    Uma nova modalidade de crédito destinada a pessoas físicas
                    que optarem pelo Saque-Aniversário do FGTS;
                  </span>
                </li>
                <li className="d-flex mb-3 align-items-start">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>
                    Você pode antecipar até 10 anos do Saque-Aniversário, sem
                    comprometer sua renda mensal;
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2 ">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>
                    É de R$ 200,00 e não há limite máximo para o saque;
                  </span>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>
                    Liberado para negativados com saldo no FGTS, mesmo em contas
                    inativas.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>
                    Débito anual diretamente do saldo do FGTS, sem descontar
                    parcelas mensais.
                  </span>
                </li>

                <button
                  type="button"
                  className="btn btn-success  mb-4 mt-4 hover_products border_radius_btn text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Quero antecipar meu FGTS!
                </button>
                <div
                  className="modal fade"
                  id="exampleModal1"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel1">
                          Quero antecipar meu FGTS!
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
                          id="form_antecipar_fgts"
                          name="form_antecipar_fgts"
                          onSubmit={handleFormSubmitWithdrawalBirthday2}
                        >
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="nome_antecipar_fgts"
                            >
                              Nome
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Digite seu nome"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="nome_antecipar_fgts"
                              name="nome_antecipar_fgts"
                              value={nameWithdrawBirthday2}
                              onChange={(event) => setNameWithdrawBirthday2(event.target.value)}
                            />
                          </div>
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="email_antecipar_fgts"
                            >
                              E-mail
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Digite seu e-mail"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="email_antecipar_fgts"
                              name="email_antecipar_fgts"

                              value={emailWithdrawBirthday2}
                              onChange={(event) => setEmailWithdrawBirthday2(event.target.value)}
                            />
                          </div>
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="telefone_antecipar_fgts"
                            >
                              CEL
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Digite seu telefone"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="telefone_antecipar_fgts"
                              name="telefone_antecipar_fgts"
                              onChange={({ target }) =>
                                setPhone1(unMask(target.value))
                              }
                              value={masker(phone1, phone_pattern)}
                            />
                          </div>
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="cpf_antecipar_fgts"
                            >
                              CPF
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Digite seu CPF"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="cpf_antecipar_fgts"
                              name="cpf_antecipar_fgts"
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
                            <button type="submit" className="btn btn-primary">
                              Enviar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>

            <div className="col-12 col-lg-12">
              <h3 className="font-weight-bold font_size_sm mb-0 mt-5 mb-lg-3 mb-xl-2">
                Antecipe o seu FGTS com a Mais Valor e aproveite todas as
                vantagens!
              </h3>

              <ul id="saque-aniversario-secao-01" className="list-unstyled">
                <li className="d-flex align-items-start mt-3 mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>
                    Dinheiro na conta em até 24h úteis após aprovação.
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>Sem descontos de parcelas mensais.</span>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>Crédito autorizado para pessoas negativadas.</span>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>
                    Não impacta na contratação de outras linhas de crédito.
                  </span>
                </li>

                <li className="d-flex align-items-start mb-3 ">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>Débito direto na conta vinculada ao FGTS.</span>
                </li>

                <li className="d-flex  align-items-start mb-3 ">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>Menor taxa do mercado.</span>
                </li>

                <button
                  type="button"
                  className="btn btn-success  mb-4 mt-4 hover_products border_radius_btn text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Antecipar agora!
                </button>

                <div
                  className="modal fade"
                  id="exampleModal2"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel2">
                          Antecipar agora!
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
                          id="form_antecipar_agora"
                          name="form_antecipar_agora"

                          onSubmit={handleFormSubmitWithdrawalBirthday3}
                        >
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="nome_antecipar_agora"
                            >
                              Nome
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Digite seu nome"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="nome_antecipar_agora"
                              name="nome_antecipar_agora"

                              value={nameWithdrawBirthday3}
                              onChange={(event) => setNameWithdrawBirthday3(event.target.value)}
                            />
                          </div>
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="email_antecipar_agora"
                            >
                              E-mail
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Digite seu e-mail"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="email_antecipar_agora"
                              name="email_antecipar_agora"

                              value={emailWithdrawBirthday3}
                              onChange={(event) => setEmailWithdrawBirthday3(event.target.value)}
                            />
                          </div>
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="telefone_antecipar_agora"
                            >
                              CEL
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Digite seu telefone"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="telefone_antecipar_agora"
                              name="telefone_antecipar_agora"
                              onChange={({ target }) =>
                                setPhone2(unMask(target.value))
                              }
                              value={masker(phone2, phone_pattern)}
                            />
                          </div>
                          <div className="input-group mb-3">
                            <label
                              className="input-group-Text"
                              htmlFor="cpf_antecipar_agora"
                            >
                              CPF
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Digite seu CPF"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                              id="cpf_antecipar_agora"
                              name="cpf_antecipar_agora"
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
              </ul>
            </div>
            <div className="col-12 col-lg-12">
              <h3 className="font-weight-bold font_size_sm mb-0 mt-5 mb-lg-3 mb-xl-2">
                Quem pode antecipar?
              </h3>

              <ul id="saque-aniversario-secao-01" className="list-unstyled">
                <li className="d-flex align-items-start mb-3 mt-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>Maiores de 18 anos.</span>
                </li>

                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>Ter trabalhado com carteira assinada.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i>
                  <span>Optou pelo Saque-Aniversário.</span>
                </li>
                <li className="d-flex align-items-start mb-3">
                <i className="text-success mr-2">
                    <FontAwesomeIcon icon={solid("circle")} />
                  </i><span>Mínimo R$ 200 de saldo no
                  FGTS.</span>
                </li>
              </ul>
            </div>

            <div className="faq-list p-3  bg-opacity-10   rounded-end ">
              <h3 className="font-weight-bold font_size_sm mb-0 mb-lg-3 mb-xl-2">
                Ainda com dúvida? Confira algumas perguntas frequentes!
              </h3>
              <ul className="list-unstyled">
                <li data-aos="fade-up " data-aos-delay="100">
                  <a

                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                    onClick={() => setOpen(!open)}
                  >
                    <i className="fas fa-circle-question text-success "></i> O
                    que é FGTS?{" "}
                    <i className="fa icon-arrow-collapsed  mt-3 mb-3"></i>
                  </a>
                  <Collapse in={open}>
                    <p>
                      O FGTS — Fundo de Garantia do Tempo de Serviço — é um
                      fundo que todo trabalhador com carteira assinada tem
                      direito na Caixa Econômica Federal em que a empresa
                      empregadora deposita mensalmente uma porcentagem do
                      salário bruto de cada funcionário. Esse fundo pode ter
                      contas do tipo ativa (referente ao emprego atual do
                      trabalhador) ou inativa (referente ao valor acumulado em
                      empregos anteriores).
                    </p>
                  </Collapse>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed "
                    onClick={() => setOpen1(!open1)}
                  >
                    <i className="fas fa-circle-question text-success "></i> O
                    que é Saque-Aniversário?{" "}
                    <i className="fa icon-arrow-collapsed mb-3"></i>
                  </a>
                  <Collapse in={open1}>
                    <p>
                      Todos os anos, no mês de aniversário, trabalhadores com
                      carteira assinada têm a opção de receber parte do saldo
                      disponível no FGTS.
                    </p>
                  </Collapse>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed "
                    onClick={() => setOpen2(!open2)}
                  >
                    <i className="fas fa-circle-question text-success "></i>{" "}
                    Como me cadastrar no Saque-Aniversário?{" "}
                    <i className="fa icon-arrow-collapsed mb-3"></i>
                  </a>
                  <Collapse in={open2}>
                    <p>
                      Primeiro você deve entrar no site do FGTS ou aplicativo do
                      FGTS, e na tela inicial clicar na opção “Se cadastrar na
                      modalidade Saque-Aniversário”. Feito isso, você insira seu
                      CPF e senha - a mesma utilizada para consultar o extrato
                      do fundo de garantia. Em seguida aparecerá uma tela com as
                      informações da modalidade em qual o trabalhador se
                      encontra, geralmente saque-rescisão. Clique na opção
                      “saque-aniversário”, depois escolha qual data receber o
                      dinheiro. Pode ser no 1° dia do mês de aniversário ou 10°
                      dia do mês seguinte.
                    </p>
                  </Collapse>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed "
                    onClick={() => setOpen3(!open3)}
                  >
                    <i className="fas fa-circle-question text-success "></i>{" "}
                    Como eu recebo o valor do adiantamento do FGTS?{" "}
                    <i className="fa icon-arrow-collapsed mb-3"></i>
                  </a>
                  <Collapse in={open3}>
                    <p>Diretamente na conta corrente do trabalhador.</p>
                  </Collapse>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-6"
                    className="collapsed "
                    onClick={() => setOpen4(!open4)}
                  >
                    <i className="fas fa-circle-question text-success "></i>{" "}
                    Quem pode antecipar o FGTS com a Mais Valor?{" "}
                    <i className="fa icon-arrow-collapsed mb-3"></i>
                  </a>
                  <Collapse in={open4}>
                    <p>
                      Maiores de 18 anos, que já tenham trabalhado com carteira
                      assinada, que optem pela opção Saque-Aniversário e com
                      pelo menos R$ 400 de saldo no FGTS.
                    </p>
                  </Collapse>
                </li>

                <li data-aos="fade-up" data-aos-delay="500">
                  <i className="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-7"
                    className="collapsed "
                    onClick={() => setOpen5(!open5)}
                  >
                    <i className="fas fa-circle-question text-success "></i>{" "}
                    Tenho restrição no nome, posso antecipar meu FGTS com a Mais
                    Valor? <i className="fa icon-arrow-collapsed mb-3"></i>
                  </a>
                  <Collapse in={open5}>
                    <p>
                      Sim! Essa alternativa de crédito é permitida mesmo para
                      quem tem restrições no CPF.
                    </p>
                  </Collapse>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-12">
              <h3 className="font-weight-bold font_size_sm mb-0 mt-4 mb-lg-3 mb-xl-2">
                Não deixe o seu dinheiro parado no banco.
                <br />
                Faça a sua antecipação com a Mais Valor!
              </h3>

              <button
                type="button"
                className="btn btn-success mt-4  mb-4 hover_products border_radius_btn text-decoration-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal3"
              >
                Contratar agora!
              </button>

              <div
                className="modal fade"
                id="exampleModal3"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel3">
                        Contratar agora!
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form id="form_antecipacao" name="form_antecipacao">
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="nome_antecipacao"
                          >
                            Nome
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu nome"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="nome_antecipacao"
                            name="nome_antecipacao"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="email_antecipacao"
                          >
                            E-mail
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="email_antecipacao"
                            name="email_antecipacao"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="telefone_antecipacao"
                          >
                            CEL
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Digite seu telefone"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="telefone_antecipacao"
                            name="telefone_antecipacao"
                            onChange={({ target }) =>
                              setPhone3(unMask(target.value))
                            }
                            value={masker(phone3, phone_pattern)}
                          />
                        </div>
                        <div className="input-group mb-3">
                          <label
                            className="input-group-Text"
                            htmlFor="cpf_antecipacao"
                          >
                            CPF
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Digite seu CPF"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            id="cpf_antecipacao"
                            name="cpf_antecipacao"
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
          </div>
        </div>
      </div>

      <Amazing amazing={Amazing}></Amazing>
      <Footer footer={Footer}></Footer>
    </div>
  );
};

export default Withdraw;
