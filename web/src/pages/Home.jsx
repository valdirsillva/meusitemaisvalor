import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../App.css";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Doubts from "../components/Doubts";
import Partners from "../components/Partners";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Services from "../components/Services";
import { mask as masker, unMask } from "node-masker";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {fetchApi} from "../utils/api"
import { PRODUCTS } from "../utils/products"

function Home() {
  const [creditoShow, setCreditoShow] = useState(false);
  const [veiculoShow, setVeiculoShow] = useState(false);
  const [saqueShow, setSaqueShow] = useState(false);

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

  const [namePropertyGarantee, setNamePropertyGarantee] = useState('')
  const [emailPropertyGarantee, setEmailPropertyGarantee] = useState('')

  const [nameVehicleGarantee, setNameVehicleGarantee] = useState('')
  const [emailVehicleGarantee, setEmailVehicleGarantee] = useState('')

  const [nameWithdrawBirthday, setNameWithdrawBirthday] = useState('')
  const [emailWithdrawBirthday, setEmailWithdrawBirthday] = useState('')

  const handleFormSubmitPropertyGarantee = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
        productId: PRODUCTS.GARANTIA_IMOVEL,
        name: namePropertyGarantee,
        email: emailPropertyGarantee,
        phone: phone,
        cpf: cpf
      })

      setCpf("")
      setPhone("")
      setNamePropertyGarantee("")
      setEmailPropertyGarantee("")
    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitVehicleGarantee = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.CREDITO_VEICULO,
          name: nameVehicleGarantee,
          email: emailVehicleGarantee,
          phone: phone1,
          cpf: cpf1
        }
      )

      setCpf1("")
      setPhone1("")
      setNameVehicleGarantee("")
      setEmailVehicleGarantee("")
    } catch(err) {
      console.log(err)
    }
  }

  const handleFormSubmitWithdrawalBirthday = async (e) => {
    e.preventDefault()
    try {
      fetchApi({
          productId: PRODUCTS.SAQUE_ANIVERSARIO,
          name: nameWithdrawBirthday,
          email: emailWithdrawBirthday,
          phone: phone2,
          cpf: cpf2
        }
      )

      setCpf2("")
      setPhone2("")
      setNameWithdrawBirthday("")
      setEmailWithdrawBirthday("")
    } catch(err) {
      console.log(err)
    }
  }

  return (
    
    <>
      <Menu menu={Menu}></Menu>

      <Carousel fade indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 margin_top_sm position-relative"
            src={images["carrosel1.png"]}
            alt="First slide"
            intro="Ola"
          />
          <Button
            variant="primary"
            className="position-absolute start-50 translate-middle btn_sm pr-lg-5 pl-lg-5  border_radius_btn"
            onClick={setCreditoShow}
          >
            Contrate
          </Button>

          <Modal show={creditoShow} onHide={() => setCreditoShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Garantia de Imóvel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-body">
                <form id="form_imovel" name="form_imovel" onSubmit={handleFormSubmitPropertyGarantee} >
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="nome_imovel">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu nome"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="nome_imovel"
                      name="nome_imovel"
                      value={namePropertyGarantee}
                      onChange={(event) => setNamePropertyGarantee(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="email_imovel">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Digite seu e-mail"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="email_imovel"
                      name="email_imovel"
                      value={emailPropertyGarantee}
                      onChange={(event) => setEmailPropertyGarantee(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="telefone_imovel"
                    >
                      CEL
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Digite seu telefone"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="telefone_imovel"
                      name="telefone_imovel"
                      onChange={({ target }) => setPhone(unMask(target.value))}
                      value={masker(phone, phone_pattern)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="cpf_imovel">
                      CPF
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu CPF"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="cpf_imovel"
                      name="cpf_imovel"
                      onChange={({ target }) => setCpf(unMask(target.value))}
                      value={masker(cpf, cpf_pattern)}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setCreditoShow(false)}
                    >
                      Fechar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 margin_top_sm position-relative"
            src={images["carrosel2.png"]}
            alt="Second slide"
          />
          <Button
            variant="primary"
            className="position-absolute start-50 translate-middle btn_sm pr-lg-5 pl-lg-5 border_radius_btn "
            onClick={setVeiculoShow}
          >
            Contrate
          </Button>
          <Modal show={veiculoShow} onHide={() => setVeiculoShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Garantia de Veículo </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-body">
                <form id="form_garantia" name="form_garantia" onSubmit={handleFormSubmitVehicleGarantee}>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="nome_garantia">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu nome"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="nome_garantia"
                      name="nome_garantia"

                      value={nameVehicleGarantee}
                      onChange={(event) => setNameVehicleGarantee(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="email_garantia"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Digite seu e-mail"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="email_garantia"
                      name="email_garantia"

                      value={emailVehicleGarantee}
                      onChange={(event) => setEmailVehicleGarantee(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="telefone_garantia"
                    >
                      CEL
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Digite seu telefone"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="telefone_garantia"
                      name="telefone_garantia"
                      onChange={({ target }) => setPhone1(unMask(target.value))}
                      value={masker(phone1, phone_pattern)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="cpf_garantia">
                      CPF
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu CPF"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="cpf_garantia"
                      name="cpf_garantia"
                      onChange={({ target }) => setCpf1(unMask(target.value))}
                      value={masker(cpf1, cpf_pattern)}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setVeiculoShow(false)}
                    >
                      Fechar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 margin_top_sm position-relative"
            src={images["carrosel3.png"]}
            alt="Third slide"
          />
          <Button
            variant="primary"
            className="position-absolute start-50 translate-middle btn_sm pr-lg-5 pl-lg-5  border_radius_btn"
            onClick={setSaqueShow}
          >
            Contrate
          </Button>
          <Modal show={saqueShow} onHide={() => setSaqueShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Saque-Aniversário</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div className="modal-body">
                <form id="form_garantia" name="form_garantia" onSubmit={handleFormSubmitWithdrawalBirthday}>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="nome_garantia">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu nome"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="nome_garantia"
                      name="nome_garantia"
                      value={nameWithdrawBirthday}

                      onChange={(event) => setNameWithdrawBirthday(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="email_garantia"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Digite seu e-mail"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="email_garantia"
                      name="email_garantia"
                      value={emailWithdrawBirthday}
                      onChange={(event) => setEmailWithdrawBirthday(event.target.value)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-Text"
                      htmlFor="telefone_garantia"
                    >
                      CEL
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Digite seu telefone"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="telefone_garantia"
                      name="telefone_garantia"
                      onChange={({ target }) => setPhone2(unMask(target.value))}
                      value={masker(phone2, phone_pattern)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <label className="input-group-Text" htmlFor="cpf_garantia">
                      CPF
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu CPF"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      id="cpf_garantia"
                      name="cpf_garantia"
                      onChange={({ target }) => setCpf2(unMask(target.value))}
                      value={masker(cpf2, cpf_pattern)}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setSaqueShow(false)}
                    >
                      Fechar
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </Carousel.Item>
      </Carousel>

      <div
        className="modal fade"
        id="modal_mensagem_saida"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content margi_top_simule">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Simule sem compromisso!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="form_simulacao" name="form_simulacao">
                <div className="input-group mb-3">
                  <label className="input-group-Text" htmlFor="nome_simulacao">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu nome"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="nome_simulacao"
                    name="nome_simulacao"
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
                    id="email_simulacao"
                    name="email_simulacao"
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
                    id="telefone_simulacao"
                    name="telefone_simulacao"
                    onChange={({ target }) => setPhone3(unMask(target.value))}
                    value={masker(phone3, phone_pattern)}
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
                    onChange={({ target }) => setCpf3(unMask(target.value))}
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
                    Solicitar Simulação!
                  </button>
                </div>

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>

      <Services services={Services}></Services>

      <Partners partners={Partners}></Partners>

      {/* <Doubts doubts={Doubts}></Doubts> */}

      <Contact contact={Contact}></Contact>

      <Amazing amazing={Amazing}></Amazing>

      <Footer footer={Footer}></Footer>
    </>
  );
}

export default Home;
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
