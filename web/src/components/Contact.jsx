import React, { useState } from "react";
import Iframe from "react-iframe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => {
  ;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  async function submitFormContact(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          message,
        }),
      });

      const { error } = await response.json();

      if (response.status === 201) {
        resetInputs();
        toast.success("Dados enviado com sucesso!");
      }

      if (response.status === 400) {
        toast.error(`${error}`);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function resetInputs() {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  }

  return (
    <section className="page-section mt-sm-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="text-center section-heading text-uppercase font_size_titulo m-5">
              Contato
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              id="form_contato"
              name="form_contato"
              noValidate
              onSubmit={submitFormContact}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="nome_contato"
                      name="nome_contato"
                      type="text"
                      placeholder="Nome: *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email_contato"
                      name="email_contato"
                      type="email"
                      placeholder="Email: *"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="telefone_contato"
                      name="telefone_contato"
                      type="tel"
                      placeholder="Telefone: *"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="mensagem_contato"
                      name="mensagem_contato"
                      placeholder="Mensagem: *"
                      required="required"
                      data-validation-required-message="Please enter a message."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className=" form-group">
                  <div>
                    <Iframe
                      className="rounded"
                      width="100%"
                      height="400px"
                      id="gmap_canvas"
                      name="gmap_canvas"
                      src={
                        "https://maps.google.com/maps?q=xv%20de%20novembro%20184&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      }
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                    />
                    <a href="https://123movies-to.org"></a>
                  </div>
                </div>

                <div className="clearfix"></div>
                <div className="col-lg-12 text-center">
                  <div id="success"></div>
                  <button
                    id="btn_contato"
                    name="btn_contato"
                    className="btn btn-success  text-uppercase"
                    type="submit"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </div>

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
