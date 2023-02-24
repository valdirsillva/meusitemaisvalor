import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

const Policy = () => {
  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Política de Privacidade"
        background_image="politica.png"
        subintro=""
        header={Header}
      ></Header>
      <div id="politica-de-privacidade" className="container privacy">
        <div className=" color_sobre row pb-5">
          <div className="col-12 col-xl-9 py-5">
            <h1 className="mb-5 mt-5">Política de Privacidade</h1>
            <p className="mb-4">
              Esta Política de Privacidade faz parte do compromisso do Grupo
              Mais Valor com a transparência, a segurança e a privacidade dos
              seus dados. Explicamos aqui como e por que coletamos, tratamos e
              mantemos registro de seus dados pessoais, além de definir como
              você pode utilizar nossos serviços e exercer seus direitos
              previstos em Lei.
            </p>
            <h2 className="mb-2">Quem Somos</h2>
            <p className="mb-2">
              O Grupo Mais Valor é formado por um conjunto de empresas
              especializadas em assessoria financeira, com agências e
              representantes distribuídos pelos principais estados do Brasil.
              Nosso propósito é ajudar pessoas e famílias a realizarem os seus
              sonhos, de maneira prática, segura e eficiente. Somos
              correspondentes bancários.{" "}
            </p>
            <p className="mb-4">
              Os correspondentes bancários são empresas contratadas por
              instituições financeiras e demais instituições autorizadas pelo
              Banco Central do Brasil para a prestação de serviços de
              atendimento aos clientes e usuários dessas instituições. Entre os
              correspondentes mais conhecidos encontram-se as lotéricas e o
              banco postal. Esta atividade foi devidamente regulada pelo Banco
              Central do Brasil, nos termos da Resolução nº 3954/2011.
            </p>
            <h2 className="mb-2">A quem essa Política se aplica</h2>
            <p className="mb-4">
              Esta Política se aplica a todos os usuários do site, dos produtos
              e serviços oferecidos pela Mais Valor, assim entendida a empresa A
              AQUI + VALOR NEGOCIO PROMOCOES E INTERMEDIACOES LTDA (“Mais
              Valor”), CNPJ/MF nº 15.359.515/0001-50 com sede na rua Quinze de
              Novembro 184, Centro – SP CEP 01.013-001 e todas as suas
              controladoras, controladas, direta ou indiretamente, assim como
              coligadas e sociedades sob controle comum.
            </p>
            <h3 className="mb-4">Momento da Coleta dos Dados</h3>
            <p className="mb-2">
              Coletamos dados quando você: contrata algum de nossos produtos
              (ex.: contrata ou renova empréstimo); acessa e navega no site da
              Mais Valor; entra em contato conosco por meio dos nossos canais de
              atendimento, como site, chat, e-mail e telefone.
            </p>
            <p className="mb-4">
              Ao aceitar essa Política de Privacidade, você dá ciência e
              concorda com os termos e regras deste documento e assume o
              compromisso de nos apresentar somente dados pessoais verdadeiros,
              atualizados e precisos.
            </p>
            <h3 className="mb-2">Quais dados a Mais Valor coleta</h3>
            <p className="mb-2">
              A coleta de dados pode acontecer quando você nos passa os seus
              dados de forma direta, por exemplo, quando você simula ou solicita
              um empréstimo no nosso site, ou de forma automática, como quando
              você autoriza o uso de cookies pelo nosso site, por exemplo. Em
              alguns casos, também compartilhamos dados com parceiros para
              finalidades específicas (por exemplo, para prevenção a fraudes).
              Esses dados são usados tanto para viabilizar e melhorar a sua
              experiência, inclusive para a análise da sua solicitação de
              empréstimo, como para cumprir nossos deveres previstos em lei ou
              regulamentos oficiais.
            </p>
            <p className="mb-4">
              {" "}
              Em alguns casos, na medida autorizada por lei ou com o seu
              consentimento, também é possível que a gente receba alguns de seus
              dados por meio de terceiros, como parceiros comerciais, bureaus de
              crédito, órgãos públicos ou serviços que a Mais Valor contrata
              para casos específicos, como prevenção a fraude e análise de
              crédito, por exemplo.
            </p>
            <p className="mb-3">Estes são os dados coletados pela Mais Valor:</p>
            <h3 className="mb-2">Informações pessoais</h3>
            <ul className="mb-4">
              <li>
                Dados Cadastrais (ex: nome, endereço, data de nascimento,
                gênero, naturalidade, profissão, empregador atual, documentos de
                identidade, etc.);
              </li>
              <li>
                Informações bancárias (ex: banco, agência e conta bancária) para
                liberação de crédito;
              </li>
              <li>Número de telefone e e-mail;</li>
              <li>
                Renda declarada e comprovantes (holerites, extratos, etc);
              </li>
              <li>Comprovante de endereço;</li>
              <li>Dados de documentos (por exemplo, cópia da CNH)</li>
              <li>Áudio/voz, quando entramos em contato com você</li>
            </ul>
            <h4 className="mb-2">Dados que coletamos de terceiros</h4>
            <ul className="mb-4">
              <li>Dados cadastrais;</li>
              <li>Número de telefone e e-mail;</li>
            </ul>
            <h4 className="mb-2">Dados de navegação e do dispositivo</h4>
            <ul className="mb-4">
              <li>Endereço IP do dispositivo móvel;</li>
              <li>Interações realizadas e perfil de uso do site;</li>
              <li>Cookies;</li>
              <li>
                Alguns atributos do dispositivo como sistema operacional,
                navegador, aplicativos instalados, nível de bateria, contatos,
                marca e modelo;
              </li>
            </ul>
            <h4 className="mb-2">
              Dados relacionados a contratação de produtos da Mais Valor
            </h4>
            <ul className="mb-4">
              <li>
                Informações de contratação ou solicitação de propostas de nossos
                produtos e serviços (por exemplo, dados cadastrais, conta
                bancária, etc.);
              </li>
              <li>
                Histórico de contratações realizadas conosco, como empréstimos,
                simulações, solicitações de renovação de empréstimo, eventuais;
              </li>
              <li>
                Histórico e registros dos canais de atendimento ao cliente e de
                interações com a Mais Valor;
              </li>
            </ul>
            <h4 className="mb-2">Dados Públicos</h4>
            <ul className="mb-4">
              <li>
                Podemos coletar informações públicas a seu respeito, publicadas
                por você ou por terceiros, o que pode incluir registros de
                órgãos públicos;
              </li>
              <li>
                Depoimentos e declarações referentes à Mais Valor postados em
                redes sociais ou espaços públicos na internet, incluindo seu
                nome e imagem (por exemplo, fotos de perfil);{" "}
              </li>
            </ul>
            <h5 className="mb-2">
              Como os dados pessoais são usados pela Mais Valor
            </h5>
            <p className="mb-3">
              A Mais Valor usa seus dados para oferecer os melhores produtos
              financeiros e aprimorar as nossas funcionalidades, observadas as
              finalidades descritas abaixo:
            </p>
            <h5 className="mb-2">Informações Pessoais</h5>
            <ul className="mb-4">
              <li>
                Oferecimento e prestação de serviços e produtos financeiros
                contratados através dos nossos canais de venda;
              </li>
              <li>
                Verificação da identidade, autenticação e verificação de
                requisitos legais para contratação dos serviços e produtos Mais
                Valor (por exemplo, precisamos saber se você é maior de idade);
              </li>
              <li>
                Autenticação de transações financeiras, conforme exigido pela
                regulação do setor;
              </li>
              <li>
                Contato para envio de notificações, lembretes de pendências e
                atendimento ao cliente;
              </li>
              <li>Melhorias nos serviços prestados;</li>
              <li>
                Campanhas de Marketing, prospecção, informativos, pesquisas e
                promoção de serviços Mais Valor e de seus parceiros;
              </li>
              <li>Proteção ao crédito;</li>
              <li>
                Prevenção, identificação e tratamento de eventuais problemas
                técnicos, de segurança ou relacionados a atos ilícitos, fraudes
                e crimes financeiros;
              </li>
              <li>
                Exercício regular de direito da Mais Valor, incluindo eventuais
                ações judiciais e administrativas, conforme necessário;
              </li>
              <li>
                Cumprimento de ordem emanada de autoridade pública, do
                judiciário ou de órgão fiscalizador, incluindo a Autoridade
                Nacional de Proteção de Dados.
              </li>
            </ul>
            <h5 className="mb-2">Dados de documentos</h5>
            <ul className="mb-4">
              <li>
                Prevenção a fraude, verificação de identidade e autenticação de
                procedimentos;
              </li>
            </ul>
            <h5 className="mb-2">Dados que coletamos de terceiros</h5>
            <ul className="mb-4">
              <li>Melhoria de produtos e serviços;</li>
              <li>
                Desenvolvimento de campanhas de Marketing, prospecção, pesquisas
                e reavaliações periódicas da viabilidade da concessão de crédito
                por parte da Mais Valor;
              </li>
              <li>Proteção ao crédito;</li>
              <li>
                Identificação, prevenção e tratamento de problemas e
                vulnerabilidades técnicas ou de segurança da informação, atos
                ilícitos, fraudes e crimes de qualquer natureza;
              </li>
              <li>
                Cumprimento de dever legal ou regulatório ou exercício legítimo
                de direitos pela Mais Valor, o que pode incluir, por exemplo,
                manutenção de cadastro e informações de acesso a aplicações Mais
                Valor na forma da Lei n. 12.965/2014 (Marco Civil da
                Internet);cumprimento de ordem emanada por autoridade pública,
                judicial ou pela Autoridade Nacional de Proteção de Dados;
                adoção e atualização de normas referentes a procedimentos de
                Conheça seu Cliente, Compliance, Prevenção à Corrupção, Lavagem
                de Dinheiro e Financiamento do Terrorismo.
              </li>
            </ul>
            <h5 className="mb-2">Dados de navegação e do dispositivo</h5>
            <ul className="mb-4">
              <li>
                Oferecimento e prestação de serviços e produtos financeiros
                contratados através da Mais Valor;
              </li>
              <li>
                Operacionalização, análise de melhorias e comunicação de novos
                produtos e serviços da Mais Valor ou de parceiros estratégicos;
              </li>
              <li>
                Montagem e consumo de estatísticas, perfis anonimizados e
                levantamentos de informações pertinentes ao comportamento do
                usuário no consumo dos produtos e serviços Mais Valor;
              </li>
              <li>Proteção ao crédito;</li>
              <li>
                Identificação, prevenção e resolução de problemas técnicos ou de
                segurança;
              </li>
              <li>
                Cumprimento de dever legal ou regulatório ou exercício legítimo
                de direitos pela Mais Valor, o que pode incluir, por exemplo,
                manutenção de cadastro e informações de acesso a aplicações Mais
                Valor na forma da Lei n. 12.965/2014 (Marco Civil da
                Internet);cumprimento de ordem emanada por autoridade pública,
                judicial ou pela Autoridade Nacional de Proteção de Dados;
                adoção e atualização de normas referentes a procedimentos de
                Conheça seu Cliente, Compliance, Prevenção à Corrupção, Lavagem
                de Dinheiro e Financiamento do Terrorismo;
              </li>
            </ul>
            <h6 className="mb-2">
              Dados relacionados a contratação de produtos Mais Valor
            </h6>
            <ul className="mb-4">
              <li>
                Oferecimento e prestação de serviços e produtos financeiros
                contratados através do Mais Valor;
              </li>
              <li>
                Operacionalização, análise de melhorias e comunicação de novos
                produtos e serviços da Mais Valor ou de parceiros estratégicos;
              </li>
              <li>
                Validação e autenticação de transações e atividade de suporte e
                atendimento ao cliente;
              </li>
              <li>
                Desenvolvimento e criação de inteligência para inovação, testes,
                revisão e desenvolvimento de novos produtos a serem oferecidos
                pela Mais Valor;
              </li>
              <li>
                Desenvolvimento de campanhas de Marketing, prospecção, pesquisas
                e reavaliações periódicas a respeito de produtos Mais Valor;
              </li>
              <li>Proteção ao Crédito;</li>
              <li>
                Cumprimento de dever legal ou regulatório ou exercício legítimo
                de direitos pela Mais Valor, o que pode incluir, por exemplo,
                manutenção de cadastro e informações de acesso a aplicações Mais
                Valor na forma da Lei n. 12.965/2014 (Marco Civil da Internet);
                cumprimento de ordem emanada por autoridade pública, judicial ou
                pela Autoridade Nacional de Proteção de Dados; adoção e
                atualização de normas referentes a procedimentos de Conheça seu
                Cliente, Compliance, Prevenção à Corrupção, Lavagem de Dinheiro
                e Financiamento do Terrorismo;
              </li>
            </ul>
            <h6 className="mb-2">Dados Públicos</h6>
            <ul className="mb-4">
              <li>
                Divulgação, com a possibilidade de direcionamento, de novos
                produtos e campanhas de marketing em redes sociais, sites,
                aplicativos ou materiais publicitários de qualquer natureza
              </li>
              <li>Proteção ao Crédito;</li>
              <li>
                Cumprimento de dever legal ou regulatório ou exercício legítimo
                de direitos pela Mais Valor, o que pode incluir, por exemplo,
                (i) manutenção de cadastro e informações de acesso a aplicações
                Mais Valor na forma da Lei n. 12.965/2014 (Marco Civil da
                Internet); cumprimento de ordem emanada por autoridade pública,
                judicial ou pela Autoridade Nacional de Proteção de Dados;
                adoção e atualização de normas referentes a procedimentos de
                Conheça seu Cliente, Compliance, Prevenção à Corrupção, Lavagem
                de Dinheiro e Financiamento do Terrorismo.
              </li>
            </ul>
            <h6 className="mb-2">Compartilhamento de dados pessoais</h6>
            <p className="mb-2">
              Caso você nos dê o consentimento ou na medida permitida por lei,
              seus dados pessoais poderão ser compartilhados com parceiros
              estratégicos, para garantia de direitos e deveres da Mais Valor
              (por exemplo, para cobranças e prevenção de fraudes ao sistema
              financeiro) e aprimoramento dos nossos serviços e produtos (por
              exemplo, para elaboração de novos modelos e produtos de crédito).
              Além disso, o compartilhamento também poderá ocorrer com outras
              empresas do mesmo grupo econômico ou com Fundos e instituições
              financeiras parceiras da Mais Valor, quando necessário para
              viabilizar a prestação dos nossos serviços, observados sempre os
              limites e as finalidades apontadas acima e o que determina a
              legislação aplicável.
            </p>
            <p className="mb-0">
              <b>
                <u>Redirecionamento a sites de terceiros:</u>
              </b>{" "}
              durante navegação no nosso site ou consumo de qualquer dos nossos
              produtos, é possível que você seja redirecionado a sites ou
              plataformas de terceiros. Após esse redirecionamento, não
              poderemos aplicar regras desta Política de Privacidade e não
              poderemos controlar ou ser responsáveis por práticas relacionadas
              a privacidade dos sites de terceiros, ainda que sejam nossos
              parceiros, pois as regras de coleta e uso dos seus dados deverão
              ser definidas pelas políticas disponíveis no site para onde você
              for redirecionado.{" "}
            </p>
            <p className="mb-4">
              Em todo caso, a Mais Valor exigirá de todo terceiro contratado
              para prover serviços de apoio o cumprimento dos nossos padrões
              mínimos de privacidade e segurança da informação.
            </p>
            <h6 className="mb-2">Segurança da Informação e Retenção de Dados</h6>
            <p className="mb-0">
              Enquanto você for cliente ou possível cliente de algum produto
              Mais Valor, os seus dados, tratados na forma prevista acima, serão
              mantidos em ambientes seguros e controlados segundo as melhores
              práticas de privacidade e segurança da informação.
            </p>
            <p className="mb-0">
              No entanto, por mais que a Mais Valor empregue seus melhores
              esforços para garantia da segurança da informação, não é possível
              garantir a não ocorrência de invasões, vazamentos de dados e
              demais eventos relacionados a segurança cibernética. Nesse caso,
              eventuais incidentes serão tratados na forma prevista em lei.
            </p>
            <p className="mb-0">
              A qualquer momento, você poderá entrar em contato com a Mais
              valor&nbsp;e exercer os direitos previstos na legislação e nesta
              política de privacidade. Em alguns casos, ainda que você requisite
              a exclusão ou deixe de ser nosso cliente, a Mais Valor poderá
              manter armazenados os seus dados pessoais por um período adicional
              para cumprimento de dever legal ou exercício legítimo de direitos,
              o que pode incluir, por exemplo, manutenção de informações de
              acesso a aplicações Mais Valor na forma da Lei n. 12.965/2014
              (Marco Civil da Internet); manutenção de dados cadastrais e
              transacionais conforme determinado pelo Banco Central do Brasil;
              preservação de direitos da Mais Valor em processos judiciais e/ou
              administrativos.{" "}
            </p>
            <p className="mb-4">
              Em todo caso, a retenção dos dados observará os limites e as
              finalidades previstas em lei e nesta Política de Privacidade. Não
              manipulamos os seus dados para alterá-los ou desvirtuá-los. Em
              todo caso, o acesso aos dados coletados é restrito a pessoas
              autorizadas para o tratamento adequado. Os colaboradores que
              utilizarem indevidamente essas informações estarão sujeitos às
              penalidades previstas em nosso processo disciplinar e na lei.
            </p>
            <h6 className="mb-2">Direitos do titular dos dados</h6>
            <p className="mb-4">
              Você poderá exercer os seus direitos previstos na legislação
              brasileira referente a Proteção de Dados Pessoais e nesta Política
              de Privacidade. Para isto, a Mais valor criou um canal oficial de
              comunicação com o nosso time de privacidade. Assim, caso você
              ainda tenha dúvidas sobre o seu direito ou qualquer ponto
              relacionado à privacidade dos seus dados, você pode entrar em
              contato diretamente conosco pelo e-mail{" "}
              <u>
                <a href="mailto:c@grupomaisvalor.com.br">
                  sac@grupomaisvalor.com.br
                </a>
              </u>
              .
            </p>
            <h6 className="mb-2">Registro de Navegação</h6>
            <p className="mb-3">
              Ao navegar no nosso website, a Mais Valor poderá registrar as
              atividades que você realizar, dentro dos limites estabelecidos em
              lei. Tal registro será feito através de logs contendo informações
              como endereço IP, ações realizadas pelo usuário (por exemplo,
              cliques nas páginas), data e hora de cada ação realizada,
              informações sobre o dispositivo utilizado (por exemplo, sistema
              operacional, marca e modelo do dispositivo, navegador e
              geolocalização). Esse registro poderá ser feito através de
              tecnologia própria da Mais Valor ou de terceiros, a exemplo:
            </p>
            <p className="mb-2">
              <b>
                <u>
                  <a
                   rel="noopener noreferrer"
                    href="https://pt.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)"
                    target="_blank"
                  >
                    Cookies:
                  </a>
                </u>
              </b>{" "}
              arquivos que armazenam temporariamente suas ações na plataforma,
              usados, por exemplo, para oferta de conteúdo personalizado. A Mais
              Valor possui Cookies de terceiros ativados no seu site, cujas
              práticas de privacidade e tratamento de dados é feito de acordo
              com a Política de Privacidade e os Termos de Uso desses terceiros,
              onde a Mais Valor não pode interferir nem se responsabilizar. Você
              pode, a qualquer hora, bloquear o uso de cookies ativando uma
              configuração no seu navegador de internet, dentro dos limites das
              funcionalidades oferecidas pelo seu navegador, ou excluir os dados
              de Cookies existentes por meio das mesmas configurações. A
              desativação dos cookies poderá alterar ou impedir o funcionamento
              de algumas funcionalidades da nossa página.
            </p>
            <p className="mb-4">
              <b>
                <u>
                  <a
                   rel="noopener noreferrer"
                    href="https://analytics.google.com/analytics/web/provision/?hl=pt-BR#/provision"
                    target="_blank"
                  >
                    Google Analytics:
                  </a>
                </u>
              </b>{" "}
              ferramentas que podem coletar informações a respeito do
              comportamento do usuário enquanto navega por uma plataforma.
            </p>
            <p className="policy-title mb-2">Consentimento</p>
            <p className="mb-4">
              Ao acessar o nosso site, você dá consentimento à Mais Valor para o
              tratamento dos seus dados na forma descrita nesta Política, que é
              um requisito necessário para a prestação dos nossos serviços e
              para que a Mais Valor possa lhe oferecer uma opção de crédito
              inteligente e inclusiva.
            </p>
            <p className="policy-title mb-2">
              Alterações a esta Política de Privacidade
            </p>
            <p className="mb-0">
              A Mais Valor poderá alterar esta Política de Privacidade a
              qualquer tempo e a seu exclusivo critério, e as alterações serão
              válidas e vinculantes após a divulgação no nosso site ou após
              informada ao usuário por outro meio legítimo. Ao continuar usando
              os produtos e serviços Mais Valor após a alteração, você concorda
              com os novos termos e condições.
            </p>
            <p className="mb-4">
              Caso as mudanças envolvam alterações nas práticas relacionadas a
              tratamento de dados pessoais que dependam do seu consentimento,
              solicitaremos a sua concordância expressa e específica com os
              novos termos desta Política de Privacidade.
            </p>
            <p className="policy-title mb-2">
              Comunicação com o time de Privacidade
            </p>
            <p className="mb-0">
              Se ainda restarem dúvidas sobre como tratamos os seus dados ou
              sobre os seus direitos previstos nesta Política de Privacidade,
              você pode entrar em contato com a Mais Valor através do e-mail{" "}
              <u>
                <a href="mailto:sac@grupomaisvalor.com.br">
                  sac@grupomaisvalor.com.br
                </a>
              </u>
              , que é o seu canal direto com a equipe responsável pelo suporte a
              privacidade de dados. Será uma satisfação poder tirar suas
              dúvidas!
            </p>
          </div>
        </div>
      </div>
      <Amazing amazing={Amazing}></Amazing>
      <Footer footer={Footer}></Footer>
    </div>
  );
};

export default Policy;
