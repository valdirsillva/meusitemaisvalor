export default () => {
  return (
    <section className=" page-Section" id="team">
      <div className="">
        <div className="container-fluid">
          <div className="text-justify">
            <div className="col-xl-3 pl-lg-5 col-lg-4 mb-lg-0 mb-3 text-left">
              <img
                className="imglazy logo"
                src={images["logo-maisvalor-branco-216x111.png"]}
                data-src="../img/logo-maisvalor-branco-216x111.png"
                alt="Grupo Mais Valor - Assessoria Financeira"
              />
            </div>
            <div className="col-xl-11 col-lg-7 text-justify mb-lg-0 mb-2 px-lg-5">
              <div className="footer-warning">
                <p className="titt mb-3 mt-4 text-uppercase">
                  <b>Esclarecimento aos nossos clientes e colaboradores !</b>
                </p>
                <p className="mb-1">
                  O <b>GRUPO MAIS VALOR</b> não solicita{" "}
                  <b>
                    depósitos, transferências, adiantamentos ou cobranças de
                    taxas
                  </b>{" "}
                  para nenhum de seus clientes.
                </p>
                <p className="mb-1">
                  Recentemente identificamos que alguns clientes estão sendo
                  contatados por terceiros que utilizam nossas informações como
                  Endereço e CNPJ da nossa empresa e utilizam o nome{" "}
                  <b>
                    CONSULTORIA FINANCEIRA GMVB CRED/ CONSULTORIA FINANCEIRA
                    GMVB LTDA
                  </b>
                  , empresa essa que alegam ser domínio legalmente registrado e
                  propriedade da{" "}
                  <b>GMVB PROMOÇÕES E INTERMEDIAÇÕES DE CRÉDITO</b>, sendo que{" "}
                  <b className="text-warning">
                    referida empresa não pertence ao domínio e nem propriedade
                    da GMVB PROMOÇÕES E INTERMEDIAÇÕES DE CRÉDITO CONSIGNADO
                    LTDA – ME
                  </b>{" "}
                  e que não faz parte do grupo.
                </p>
                <p className="mb-1">
                  Alertamos também sobre a atuação da empresa CredplayBrasil
                  (https://credplaybrasil.com/), está empresa não pertence ao
                  Grupo Mais Valor e não possui autorização para tratar de
                  qualquer assunto em nosso nome ou que venha a ser de nosso
                  conhecimento. Recebemos informações de que a empresa Playcred
                  Assessoria também vem aplicando golpes se passando pelo Grupo
                  Mais Valor.
                </p>
                <p className="mb-1">
                  As práticas/condutas das empresas acima mencionadas são
                  completamente repudiadas pelo Grupo Mais Valor, que preza seus
                  clientes e atua com total transparência e confiabilidade.
                </p>
                <p className="mb-2">
                  Caso sejam contatados por qualquer pessoa da empresa{" "}
                  <b>
                    CONSULTORIA FINANCEIRA GMVB CRED ou qualquer outra empresa e
                    que haja informação de cobrança de qualquer valor para fazer
                    o empréstimo,
                  </b>{" "}
                  entre em contato imediatamente em nossos canais de
                  atendimento:
                </p>
                <p className="mb-0">
                  <b>
                    <a href="mailto:sac@grupomaisvalor.com.br" className="">
                      <b></b>
                    </a>
                  </b>
                </p>
                <p className="mb-0">
                  <b>
                    SAC 0800 042 0710 /{" "}
                    <img className="img_width" src={images["whatsapp.png"]} />
                    <a
                      className="color_white"
                      href="https://web.Whatsapp.com/send?phone=5511958684256"
                      target="_blank"
                      rel="noopener noreferrer"
                    > {" "}
                      (11) 95868 4256 / {" "}
                    </a>
                  </b>
                  <b>
                    <img
                      className="img_width"
                      src={images["icons8-mensagem-16.png"]}
                    />{" "}
                    <a className="color_white" href="mailto:sac@grupomaisvalor.com.br" target="_blank">
                      sac@grupomaisvalor.com.br
                    </a>
                  </b>
                </p>
                <p className="mb-3">
                  <b>Sede (11) 3467 0070 </b>
                </p>
              </div>
            </div>
          </div>
        </div>
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
