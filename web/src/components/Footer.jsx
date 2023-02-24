import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conecte-se conosco nas redes sociais :</span>
        </div>

        <div>
          <a href="https://web.facebook.com/grupomaisvalor/" className="me-4 text-reset" target="_blank">
            <img src={images["facebook.svg"]}></img>
          </a>
        
          <a href="https://www.instagram.com/grupomaisvalor/" className="me-4 text-reset" target="_blank">
            <img src={images["instagram.svg"]}></img>
          </a>

          <a href="https://www.linkedin.com/company/grupomaisvalor/" className="me-4 text-reset" target="_blank">
            <img src={images["linkedin.svg"]}></img>
          </a>

          <a href="https://web.Whatsapp.com/send?phone=5511958684256" className="me-4 text-reset" target="_blank">
            <img src={images["whatsapp.svg"]}></img>
          </a>
        </div>
      </div>

      <div>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-credit-card me-3 "></i>Grupo Mais Valor
              </h6>
              <p>
                A Mais Valor é uma das maiores gestoras de negócios,
                especializada em assessoria financeira para pessoas físicas e
                empresas, com agências e representantes distribuídos pelos
                principais estados do Brasil.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Produtos</h6>
              <p>
                <Link className="text-reset" to="/saqueaniversario"  target={"_blank"}>
                  Antecipação Saque Aniversário FGTS
                </Link>
              </p>
              <p>
                <Link className="text-reset" to="/creditoconsignado"  target={"_blank"}>
                  Crédito Consignado
                </Link>
              </p>
              <p>
                <Link className="text-reset" to="/creditoimobiliario"  target={"_blank"}>
                  Crédito Imobiliário
                </Link>
              </p>
              <p>
                <Link className="text-reset" to="/consorcios"  target={"_blank"}>
                  Consórcios
                </Link>
              </p>

              <p>
                <Link className="text-reset" to="/portabilidadeemprestimo"  target={"_blank"}>
                  Portabilidade de Empréstimo
                </Link>
              </p>
              <p>
                <Link className="text-reset" to="/cartaobeneficio"  target={"_blank"}>
                  Cartão Benefício
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">Informações</h6>
              <p>
                <Link
                  to="/trabalheconosco"
                  target={"_blank"}
                  className="text-reset"
                >
                  Trabalhe Conosco
                </Link>
              </p>

              <p>
                <Link to="/sobrenos" target={"_blank"} className="text-reset">
                  Sobre Nós
                </Link>
              </p>

              <p>
                <Link to="/canaldeetica" target={"_blank"} className="text-reset">
                  Canal de Ética
                </Link>
              </p>

              <p>
                <Link
                  to="/politicaprivacidade"
                  target={"_blank"}
                  className="text-reset"
                >
                  Política de Privacidade
                </Link>
              </p>

              <p>
                <Link
                  to="/termosdeuso"
                  target={"_blank"}
                  className="text-reset"
                >
                  Termos de Uso
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <i className="fas fa-home me-3"></i>Rua Quinze de Novembro, 184
                <br />
                Sala 601 - Centro
                <br />
                São Paulo / SP CEP: 01013-904
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>{" "}
                sac@grupomaisvalor.com.br
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>TEL - (11) 3467-0070
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>SAC - 0800-042-0710
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 - Aqui + Valor Negocio Promocoes e Intermediacoes LTDA / CNPJ/MF
        n° 15.359.515/0001-50
      </div>
    </footer>
  );
};

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
