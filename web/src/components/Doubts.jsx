import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

export default () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <section id="faq" className="faq section-bg mb-md-5 mb-5 ">
      <div className="container mb-sm-5">
        <div className="section-title ">
          <h3 className="text-center section-heading text-uppercase m-3">
            PERGUNTAS FREQUENTES
          </h3>
        </div>

        <div className="faq-list p-3  bg-success bg-opacity-10 border border-info border-start-0 rounded">
          <ul>
            <li data-aos="fade-up " data-aos-delay="100">
              <a
                onClick={() => setOpen(!open)}
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-3"
                className="collapsed "
              >
                {/* <i className="fas fa-circle-question text-success "></i>{" "} */}
                Preciso ter um CNPJ para trabalhar como parceiro Mais Valor?{" "}
                <i className="fa icon-arrow-collapsed"></i>
              </a>
              <Collapse in={open}>
                <div id="example-collapse-text">
                  Não. Este é um programa de bonificação também para pessoas
                  físicas que buscam por uma renda extra de forma prática e
                  segura.
                </div>
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
                {/* <i className="fas fa-circle-question text-success "></i> Tem */}
                Limite para indicação de clientes?{" "}
                <i className="fa icon-arrow-collapsed"></i>
              </a>
              <Collapse in={open1}>
                <div id="example-collapse-text">
                  Não. Você pode indicar quantos clientes quiser e de qualquer
                  localidade.
                </div>
              </Collapse>
            </li>

            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bx bx-help-circle icon-help"></i>{" "}
              <a
                data-bs-toggle="collapse"
                data-bs-target="#faq-list-4"
                className="collapsed"
                onClick={() => setOpen2(!open2)}
              >
                {/* <i className="fas fa-circle-question text-success "></i> Quais */}
                Documentos eu preciso para indicar um cliente?{" "}
                <i className="fa icon-arrow-collapsed"></i>
              </a>
              <Collapse in={open2}>
                <div id="example-collapse-text">
                  Para realizar a indicação serão necessários alguns documentos,
                  lembrando que o documento de identificação pessoal (CNH ou RG)
                  é obrigatório. Caso o indicado não possua os demais
                  documentos, a Mais Valor poderá entrar em contato solicitando
                  o complemento dos documentos necessários.
                </div>
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
                {/* <i className="fas fa-circle-question text-success "></i> Como */}
                É feita a validação de um cliente indicado?{" "}
                <i className="fa icon-arrow-collapsed"></i>
              </a>
              <Collapse in={open3}>
                <div id="example-collapse-text">
                  A validação é realizada em duas etapas. Primeiramente será
                  realizado a análise de crédito e validação dos documentos dos
                  clientes indicados e logo depois a contratação do crédito
                  pré-aprovado pelo cliente.
                </div>
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
                {/* <i className="fas fa-circle-question text-success "></i> Como */}
                Saber o melhor produto para trabalhar?{" "}
                <i className="fa icon-arrow-collapsed"></i>
              </a>
              <Collapse in={open4}>
                <div id="example-collapse-text">
                  Os parceiros da Mais Valor recebem todo o suporte e
                  treinamento, com mesa de Análise especializada nos produtos.
                  Dessa forma, você poderá escolher os produtos que mais
                  combinam com o seu perfil e disponibilidade.
                </div>
              </Collapse>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
