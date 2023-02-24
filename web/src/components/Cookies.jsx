import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default () => {
  const [show, setShow] = useState(true)
  const [cookies, setCookie] = useCookies(['termo']);

  function HandleClick (){
    setCookie('termo', true, {path: '/'});
  }


  return (
    <div>
     {!!!cookies.termo ? <div id="alerta-politica-privacidade" className="w-100 py-2 hide">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-9 col-lg-10 text-center text-sm-left">
            <p className="m-0 text-white py-lg-2">
              Ao acessar nosso site e serviços, você concorda com as condições
              de nossa{" "}
              <Link
                to="/politicaprivacidade"
                target={"_blank"}
                
                className="text-white"
              >
                Política de Privacidade
              </Link>{" "}
              e{" "}
              <Link to="/termosdeuso" target={"_blank"} className="text-white">
                Termos de Uso
              </Link>
              .
            </p>
          </div>
          <div className="col-12 col-sm-3 col-lg-2 text-center text-sm-right pt-2 pt-sm-0">
            <button
              onClick={() => {setShow(false); HandleClick();}}
              data-url=""
              type="button"
              className="btn btn-success    hover_products border_radius_btn float-right"
            >
              Prosseguir
            </button>
          </div>
        </div>
      </div>
    </div>
  :null}
  </div>
  );
};
