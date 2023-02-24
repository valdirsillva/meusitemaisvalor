import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Conheça a Mais Valor:
        // Uma consultoria financeira
        // personalizada para você!"
        background_image="sobrenos.png"
        subintro=""
        header={Header}
      ></Header>
      <div className="container color_sobre">
        <div className="row pt-5 pt-lg-2 pb-5 pb-lg-0">
          <div className="col-lg-7">
            
            <h1 className="mb-5 font_size_sm mt-5">
             Sobre Nós
            </h1>
            <div className="row">
              <div className="col-lg-8">
                <p>
                  A Mais Valor é uma das maiores gestoras de negócios,
                  especializada em assessoria financeira para pessoas físicas e
                  empresas, com agências e representantes distribuídos pelos
                  principais estados do Brasil.
                </p>
                <p>
                  Ao longo de 10 anos, nosso propósito é de ajudar pessoas e
                  famílias a realizarem os seus sonhos, de maneira prática,
                  segura e eficiente. Por isso, contamos com as melhores
                  condições de crédito consignado para empresas privadas e
                  servidores públicos federal, estadual e municipal.
                </p>
                <p className="mb-5">
                  Além de linhas de crédito facilitadas para aposentados e
                  pensionistas do INSS.
                </p>

                <Link
                  className="btn btn-success  mb-4 hover_products border_radius_btn text-decoration-none"
                  to="/produtos"
                >
                  Conheça nossos produtos
                </Link>
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

export default About;
