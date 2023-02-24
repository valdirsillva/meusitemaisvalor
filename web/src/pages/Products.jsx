import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";
import { mask as masker, unMask } from "node-masker";

const Products = () => {
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");

  const cpf_pattern = "999.999.999-99";
  const phone_pattern = "(99) 99999-9999";
  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Precisando de dinheiro? Nós temos a solução de crédito ideal para você!"
        background_image="produtos.png"
        // subintro=""
        header={Header}
      ></Header>
      <div className="container  color_sobre">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-5 font_size_sm mt-5">Produtos</h1>
            <h2 className="mb-4 font_size_sm_h3 mt-4">Mais Valor para você e sua família!</h2>
            <p className="mb-5">
              Oferecemos as melhores opções de créditos e consórcios de forma
              prática e segura. Taxas atrativas que estão entre as menores do
              mercado. Entre em contato com a gente e fale com nossos
              especialistas!
            </p>

            <h3 className="mb-4 font_size_sm">Nós temos as melhores condições para:</h3>

            <ul className="list-unstyled font-weight-bold">
              <li className="mb-3 ">
                <Link to="/saqueaniversario">
                  Antecipação Saque-Aniversário FGTS
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/creditoconsignado">Crédito Consignado</Link>
              </li>
              <li className="mb-3">
                <Link to="/creditoimobiliario">Crédito Imobiliário</Link>
              </li>
              <li className="mb-3">
                <Link to="/consorcios">Consórcios</Link>
              </li>
              <li className="mb-3">
                <Link to="/portabilidadeemprestimo">
                  Portabilidade de Empréstimo
                </Link>
              </li>
              <li className="mb-3">
                <Link to="/cartaobeneficio">
                  Cartão Benefício
                </Link>
              </li>
            </ul>
            <br></br>
          </div>
        </div>

        <Link
          className=" btn btn-success mb-4 hover_products border_radius_btn text-decoration-none"
          to="/contatos"
        >
          Fale conosco
        </Link>
      </div>
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
                  <label className="input-group-Text" htmlFor="email_portabilidade">
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
                    TEL
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Digite seu telefone"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="telefone_simulacao"
                    name="telefone_simulacao"
                    onChange={({ target }) => setPhone(unMask(target.value))}
                    value={masker(phone, phone_pattern)}
                  />
                </div>
                <div className="input-group mb-3">
                  <label className="input-group-Text" htmlFor="cpf_portabilidade">
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
                    Solicitar Simulação!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Amazing amazing={Amazing}></Amazing>
      <Footer footer={Footer}></Footer>
    </div>
  );
};

export default Products;
