import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

const Channel = () => {
  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Fale com a Mais Valor!"
        background_image="falecomamaisvalor.png"
        subintro=""
        header={Header}
      ></Header>

      <div className="row justify-content-center color_sobre mt-3 pt-3 pt-lg-0 pb-5 pb-lg-0">
        <div className="col-lg-8">
          <div className="container color_sobre">
            <div className="row">
              <div className="col-12 ">
                <h1 className="mb-5 font_size_sm mt-5">
                  Fale com a Mais Valor
                </h1>
                <p className="mb-5 text-justify">
                  "Fale com a Mais Valor" foi criado para ser um canal aberto
                  para comunicação com nosso público externo e interno. Nossa
                  missão é{" "}
                  <b>
                    “sermos os melhores no que fazemos, inovando e melhorando
                    continuamente”
                  </b>
                  , por isso, a sua opinião é tão importante, queremos te ouvir
                  para cada vez mais estarmos alinhados com nossos valores e
                  atender melhor VOCÊ. Este canal está alinhado com as medidas
                  nacionais e internacionais de combate à corrupção,
                  especialmente com as leis nº 12.846/13 – Lei Anticorrupção
                  Brasileira, nº 12.529/11 – Lei de Defesa da Concorrência
                  Brasileira, nº 12.850/13 – Lei de Combate ao Crime Organizado
                  e com o decreto nº 8.420/15 – regulamentação da Lei
                  Anticorrupção.{" "}
                </p>

                <div className="mb-5">
                  <form
                    id="formSac"
                    method="post"
                    action=""
                    encType="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="urlAction"
                      id="urlAction"
                      value=""
                    />
                    <input
                      type="hidden"
                      name="recaptcha_response"
                      id="recaptchaResponse"
                    />

                    <div className="container text-center justify-content-center card_gap d-lg-flex">
                      <div className="col-lg-4">
                        <img
                          alt="Imagem de relato"
                          src={images["relato1.png"]}
                          className="img img-responsive "
                        />
                        <div className="card-body mt-4">
                          <Link
                            to="/relato"
                            className="btn btn-success  mb-4 hover_products border_radius_btn"
                          >
                            Relato
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <img
                        alt="Imagem de uma sugestao"
                          src={images["sugestao1.png"]}
                          className="img img-responsive "
                        />
                        <div className="card-body mt-4">
                          <Link
                            to="/sugestao"
                            className="btn btn-success  mb-4 hover_products border_radius_btn"
                          >
                            Sugestão
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <img
                        alt="imagem de uma duvida"
                          src={images["duvida1.png"]}
                          className="img img-responsive "
                        />
                        <div className="card-body mt-4">
                          <Link
                            to="/duvida"
                            className="btn btn-success  mb-4 hover_products border_radius_btn"
                          >
                            Dúvida
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default Channel;

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
