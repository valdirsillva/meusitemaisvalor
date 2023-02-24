import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Contato"
        background_image="faleconosco.png"
        subintro=""
        header={Header}
      ></Header>

      <div className="row pt-5 color_sobre pt-lg-0 pb-5 pb-lg-0 text-center d-flex justify-content-center">
        <div className="col-12">
        <h1 className="mb-5 font_size_sm text_left_sm text_left_lg mt-5">Contato</h1>
          <h2 className="mb-5 font_size_sm mt-5">
            Entre em contato com a gente e fale agora com os nossos consultores.
          </h2>
          <h6 className="mb-5">
            Disponível das 10h às 18h, exceto final de semana e feriados.
          </h6>
        </div>
        <div className="d-lg-flex justify-content-center ">
          <div id="ctt_local" className="col-xl-3 col-md-6 pt-4 pt-md-0">
            <img
              src={images["1059927-200.png"]}
              className="img img-responsive w-25"
            />
            <address className="mt--2 mt-0 mb-0">
              <p>
                Rua Quinze de Novembro, 184
                <br />
                Sala 601 - Centro
                <br />
                São Paulo / SP CEP: 01013-904
              </p>
            </address>
          </div>
          <div id="ctt_tel" className="col-xl-3 col-md-3 pt-4 pt-md-0">
            <img
              src={images["phone_call_thin_icon_171587.png"]}
              className="img img-responsive w-25"
            />
            <p className="mt-md-2 mt-0 mb-0 ">
              <Link className="text-reset" to="/tel:+551134670070">
                Sede (11) 3467-0070
              </Link>
            </p>
            <p className="mt-md-2 mt-0 mb-0 font_size">
              <a className="text-reset" href="#">
                {" "}
                Sac 0800-042-0710
              </a>
            </p>
          </div>
          <div
            id="ctt_email"
            className="col-xl-3 col-md-3 offset-xl-0 offset-md-0 pt-4 pt-xl-0"
          >
            <img
              src={images["ícone-da-mensagem-100736073.jpg"]}
              className="img img-responsive w-25"
            />
            <p className="m-0 font_size mt-md-2">
              <a className="text-reset" href="mailto:vagas@grupomaisvalor.com.br">
                vagas@grupomaisvalor.com.br
              </a>
            </p>
            <p className="m-0 font_size">
              <a className="text-reset" href="mailto:sac@grupomaisvalor.com.br">
                sac@grupomaisvalor.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
      <div id="ctt_alerta" className="container-fluid text-white bg-dark pb-3 pt-3">
        <div className="container text-center">
          <p className="m-0">
            Atenção! A Mais Valor não solicita depósito antecipado para a
            liberação do crédito.
          </p>
          <p className="m-0">
            Caso receba algum contato suspeito entre em contato.
          </p>
        </div>
      </div>
      <Amazing amazing={Amazing}></Amazing>
      <Footer footer={Footer}></Footer>
    </div>
  );
};

export default Contacts;

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/img/", false, /\.(png|jpe?g|svg)$/)
);
