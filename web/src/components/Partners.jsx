import React from "react";
import { Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";



function PartnersToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <>
      <button
        className="d-none d-lg-block border border-success  p-0 w-75 text-center"
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
      <button
        className="d-sm-block d-md-none border border-success  p-0 w-50"
        type="button"
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    </>
  );
}

export default () => {
  return (
    <section className="bg-light page-section">
      <h3 className="text-center m-5 text-uppercase ">Nossos Parceiros</h3>

      <div className="container card-group  w-100">
        <Accordion flush>
          <div className="row">
            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent text-center d-flex justify-content-center align-items-center flex-column"
                eventKey="0"
              >
                <PartnersToggle eventKey="0">
                  <img
                    className="img-fluid mx-auto"
                    src={images["logodaycoval.png"]}
                    alt="Banco Daycoval"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">Banco Daycoval</p>
                  
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">
                  62.232.889/0001-90
                  </p>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">(11)99111-6583</p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="1"
              >
                <PartnersToggle eventKey="1">
                  <img
                    className="img-fluid"
                    src={images["logosafra.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">Banco Safra S/A</p>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">
                    58.160.789/0001-28
                  </p>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">
                    0800 772 4136 (SAC) 
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="2"
              >
                <PartnersToggle eventKey="2">
                  <img
                    className="img-fluid"
                    src={images["logosantander.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">
                    2022 Banco Santander
                  </p>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">
                    90.400.888/0001-42
                  </p>
                  <p className="mb-0 font_size_parceiros_lg font_size_parceiros">
                    0800 702 3535 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="3"
              >
                <PartnersToggle eventKey="3">
                  <img
                    className="img-fluid"
                    src={images["logobb.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    {" "}
                    © Banco do Brasil S/A
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    00.000.000/0001-91
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    0800 729 0722 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="4"
              >
                <PartnersToggle eventKey="4">
                  <img
                    className="img-fluid"
                    src={images["logobradesco.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    Banco Bradesco SA
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    60.746.948.0001-12
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    0800 704 8383 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="5"
              >
                <PartnersToggle eventKey="5">
                  <img
                    className="img-fluid"
                    src={images["logoitau.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    {" "}
                    © 2021 Itaú Unibanco
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    60.872.504/0001-23
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    0800 728 0728 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent  d-flex justify-content-center align-items-center flex-column"
                eventKey="6"
              >
                <PartnersToggle eventKey="6">
                  <img
                    className="img-fluid"
                    src={images["logoalfa.png"]}
                    alt="Banco Daycoval"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    BANCO ALFA DE INVESTIMENTO S/A
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    60.770.336/0001-65
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    {" "}
                    0800 725 3344 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="7"
              >
                <PartnersToggle eventKey="7">
                  <img
                    className="img-fluid"
                    src={images["logomaster.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">© Banco Master</p>
                  <p className="mb-0 font_size_parceiros_lg">
                    33.923.798/0002-83
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    0800 729 1710 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="8"
              >
                <PartnersToggle eventKey="8">
                  <img
                    className="img-fluid"
                    src={images["logoinbursa.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    BANCO INBURSA S.A.
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    04.866.275/0001-63
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">(11)3030-4444</p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="9"
              >
                <PartnersToggle eventKey="9">
                  <img
                    className="img-fluid"
                    src={images["logobrb.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    BRB - Banco de Brasília
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    00.000.208/0001-00
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    (11) 3105-2135 (TEL)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="10"
              >
                <PartnersToggle eventKey="10">
                  <img
                    className="img-fluid"
                    src={images["logocrefisa.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    Banco Crefisa S.A.
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    61.033.106/0001-86
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    0800 727 4884 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="11"
              >
                <PartnersToggle eventKey="11">
                  <img
                    className="img-fluid"
                    src={images["logoparana.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">
                    PARANÁ BANCO S/A
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    14.388.334/0001-99
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                    0800 645 6090 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="12"
              >
                <PartnersToggle eventKey="12">
                  <img
                    className="img-fluid"
                    src={images["logosim.png"]}
                    alt="Banco Daycoval"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg"> A Sim é uma plataforma digital pertencente ao Grupo Santander</p>
                  <p className="mb-0 font_size_parceiros_lg">
                  07.707.650/0001-10
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">  SAC: 0800 720 4367</p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="13"
              >
                <PartnersToggle eventKey="13">
                  <img
                    className="img-fluid"
                    src={images["logoole.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">BANCO SANTANDER (BRASIL) S.A</p>
                  <p className="mb-0 font_size_parceiros_lg">
                  90.400.888/0001-42
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                  0800 726 7454 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="14"
              >
                <PartnersToggle eventKey="14">
                  <img
                    className="img-fluid"
                    src={images["logopan.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">Banco PAN S.A. (“PAN”), instituição financeira</p>
                  <p className="mb-0 font_size_parceiros_lg">
                  59.285.411/0001-13
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                  0800 775 8686 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="15"
              >
                <PartnersToggle eventKey="15">
                  <img
                    className="img-fluid"
                    src={images["logocrefaz.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">Crefaz Sociedade de Credito ao Microempreendedor</p>
                  <p className="mb-0 font_size_parceiros_lg">
                  18.188.384/0001-83
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                  0800 052 5051 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="16"
              >
                <PartnersToggle eventKey="16">
                  <img
                    className="img-fluid"
                    src={images["logocetelem.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg"> Banco Cetelem S/A</p>
                  <p className="mb-0 font_size_parceiros_lg">
                  00.558.456/0001-71
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                  0800 722 0401 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>

            <div className="col-lg-2 col-6 mb-4">
              <Accordion.Item
                className="bg-transparent d-flex justify-content-center align-items-center flex-column"
                eventKey="17"
              >
                <PartnersToggle eventKey="17">
                  <img
                    className="img-fluid"
                    src={images["logoc6.png"]}
                    alt="Banco Safra"
                  ></img>
                </PartnersToggle>
                <Accordion.Body>
                  <p className="mb-0 font_size_parceiros_lg">© 2022 BANCO C6 S.A.</p>
                  <p className="mb-0 font_size_parceiros_lg">
                  31.872.495/0001-72
                  </p>
                  <p className="mb-0 font_size_parceiros_lg">
                  0800 660 0060 (SAC)
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </div>
        </Accordion>
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
