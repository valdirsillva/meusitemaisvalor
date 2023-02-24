import { Link } from "react-router-dom";

export default (props) => {
  return (
    
    <header
      className="masthead margin_top_sm"
      style={{ backgroundImage: `url(img/${props.background_image})` }}
    >
    
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in success">{props.intro}</div>
          <div className="intro-heading text-uppercase ">{props.subintro}</div>
          {/* <a
            className="btn btn-success text-uppercase js-scroll-trigger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
          >
            {props.btnintro}
          </a> */}
          <div
            className="modal  fade"
            id="exampleModal4"
            tabinex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel4">
                    {props.btnsubintro}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Nome
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu nome"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-Text" id="basic-addon1">
                        E-mail
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Digite seu e-mail"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-Text" id="basic-addon1">
                        TEL
                      </span>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Digite seu telefone"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-Text" id="basic-addon1">
                        CPF
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Digite seu CPF"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </div>
                
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fechar
                  </button>
                  <button type="button" className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

