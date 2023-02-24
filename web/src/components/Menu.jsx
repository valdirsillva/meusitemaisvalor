import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "./Cookies";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";

export default () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark background absolute-top"
      id="mainNav"
    >
      <div id="mainNavigation" className="mainNavigation ">
        <nav role="navigation">
          <div className="py-3 text-center ">
            <Link to="/">
              <img src={images["logo-mv-70x51.svg"]} alt="" className="invert" />
            </Link>
          </div>
          <MyAlert></MyAlert>
          {/* <div class="alert alert-warning alert-dismissible d-lg-flex align-items-center fade show">
            <div></div>
            <i class="fa-solid fa-triangle-exclamation"></i>
            <strong class="mx-2">Aviso!</strong> O GRUPO MAIS VALOR não solicita
            depósitos, transferências, adiantamentos ou cobranças de taxas para
            nenhum de seus clientes.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
            ></button>
          </div> */}
          {}
        </nav>
        <div className="navbar-expand-md">
          <div className="navbar-dark text-center my-2">
            {/* <button
              class="navbar-toggler w-50"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpen(false)}
            >
              <i class="fa-solid fa-bars"></i> <span>Menu</span>
            </button> */}

            <Dropdown>
              <Dropdown.Toggle className="navbar-toggler w-75">
                <i className="fa-solid fa-bars"></i> <span>Menu</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/">Home</Dropdown.Item>
                <Dropdown.Item href="/produtos">Produtos</Dropdown.Item>
                <Dropdown.Item href="/saqueaniversario">
                  Saque-Aniversário
                </Dropdown.Item>
                <Dropdown.Item href="/creditoconsignado">
                  Crédito Consignado
                </Dropdown.Item>
                <Dropdown.Item href="/creditoimobiliario">
                  Crédito Imobiliário
                </Dropdown.Item>
                <Dropdown.Item href="/consorcios">Consórcios</Dropdown.Item>
                <Dropdown.Item href="/portabilidadeemprestimo">
                  Portabilidade de Empréstimos
                </Dropdown.Item>
                <Dropdown.Item href="/cartaobeneficio">
                  Cartão Benefício
                </Dropdown.Item>
                <Dropdown.Item href="/sobrenos">Sobre Nós</Dropdown.Item>
                <Dropdown.Item href="/canaldeetica">
                Fale com a Mais Valor
                </Dropdown.Item>
                <Dropdown.Item href="/contatos">Contato</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div
            className="text-center collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown dropdown_hover ">
                <Link className="nav-link fs-5" to="/produtos">
                  Produtos
                </Link>

                <ul
                  className="dropdown-menu my-0"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="/saqueaniversario">
                      Antecipação Saque-Aniversário FGTS
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/creditoconsignado">
                      Crédito Consignado
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/creditoimobiliario">
                      Crédito Imobiliário
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/consorcios">
                      Consórcios
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/portabilidadeemprestimo">
                      Portabilidade de Empréstimo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cartaobeneficio">
                      Cartão Benefício
                    </Link>
                  </li>
                </ul>
              </li>
              <li id="Services" className="nav-item">
                <Link className="nav-link fs-5" to="/sobrenos">
                  Sobre Nós
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/canaldeetica">
                  Fale com a Mais Valor
                </Link>
              </li>
              <li id="Contato" className="nav-item">
                <Link className="nav-link fs-5" to="/contatos">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Cookies cookies={Cookies}></Cookies>
      </div>
    </nav>
  );
};

function MyAlert() {
  const alert_closed = window.sessionStorage.getItem("alert_closed");
  const [show, setShow] = useState(true);
  const closeAlert = () => {
    window.sessionStorage.setItem("alert_closed", true);
    setShow(false);
  };
  if (show && !alert_closed) {
    return (
      <Alert variant="warning" onClose={() => closeAlert()} dismissible>
        <i className="fa-solid fa-triangle-exclamation"></i>
        <strong className="mx-2">Aviso!</strong> O GRUPO MAIS VALOR não solicita
        depósitos, transferências, adiantamentos ou cobranças de taxas para
        nenhum de seus clientes.
      </Alert>
    );
  }
}

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
