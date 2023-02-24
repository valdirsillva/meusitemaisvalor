import React from "react";

import Header from "../components/Header";
import Menu from "../components/Menu";
import Amazing from "../components/Amazing";
import Footer from "../components/Footer";

const termsUse = () => {
  return (
    <div className="App">
      <Menu menu={Menu}></Menu>
      <Header
        // intro="Conheça a Mais Valor:
        // Uma consultoria financeira
        // personalizada para você!"
        background_image="termos.png"
        subintro=""
        header={Header}
      ></Header>
      <div id="termos-de-uso" className="container privacy">
        <div className="color_sobre row pb-5">
          <div className="col-12 col-xl-9 py-5">
            <h1 className="mb-4">Termos e Condições de uso</h1>
            <p className="mb-4">
              Os presentes Termos e Condições de Uso visam regular a utilização
              por você, usuário, de nossos serviços pelo site institucional,
              mobile e aplicativos das empresas do Grupo Mais Valor (denominados
              "Serviços").
            </p>
            <h2 className="mb-2">1. Termo de Aceitação</h2>
            <p className="mb-4">
              Ao utilizar os nossos Serviços, o usuário aceita e concorda com
              todos os termos e condições expostas que se encontram vigentes na
              data. Alertamos que estes Termos e Condições de Uso poderão ser
              modificados a qualquer momento pela Mais Valor, em virtude de
              alterações na legislação ou nos Serviços, em decorrência da
              utilização de novas ferramentas tecnológicas ou, ainda, sempre
              que, a exclusivo critério da Mais Valor, tais alterações se façam
              necessárias. A utilização dos Serviços online por qualquer usuário
              implicará em expressa aceitação destes Termos e Condições de Uso.
            </p>

            <h2 className="mb-2">2. Atualização das Informações</h2>
            <p className="mb-4">
              A Mais Valor se reserva o direito de aprimorar as funcionalidades
              dos Serviços e de implementar novas tecnologias. Assim, os Termos
              de Uso poderão ser alterados, a qualquer tempo, exceto em caso de
              vedação legal, para incluir as modificações implementadas. Ao
              continuar a utilizar os nossos Serviços após alterados os Termos
              de Uso, você concorda com as alterações realizadas e vigentes à
              época do acesso.
            </p>
            <h3 className="mb-2">
              3. Acesso a Conteúdo Restrito e Suspensão de Acesso
            </h3>
            <p className="mb-2">
              Alguns Serviços estão disponíveis em conteúdo aberto e fechado.
              Quando o acesso a conteúdo for restrito, será necessário prévio
              cadastro do usuário e o acesso ao ambiente por meio de login e
              senha. Considerando que você é responsável pela veracidade das
              informações cadastradas, informamos que o cadastro de informações
              falsas pode gerar inconsistência na prestação dos Serviços, bem
              como impactar ou interromper o seu acesso.
            </p>
            <p className="mb-4">
              A qualquer tempo, sem aviso prévio, a Mais Valor poderá suspender,
              cancelar ou interromper o acesso aos Serviços, respeitadas as
              condições da legislação aplicável. A Mais Valor não se
              responsabiliza por eventuais danos e/ou problemas decorrentes da
              demora, interrupção ou bloqueio nas transmissões de dados
              decorrentes da conexão de internet do usuário.
            </p>
            <h3 className="mb-2">4. Uso Adequado dos Serviços</h3>
            <p className="mb-2">
              Ao utilizar os Serviços, você se compromete a respeitar a
              legislação brasileira vigente e o disposto nestes Termos e
              Condições de Uso, não devendo produzir, disponibilizar ou
              compartilhar qualquer conteúdo que:
            </p>
            <ol className="mb-4">
              <li>
                Implique a prática de ato ilícito e viole a legislação
                brasileira vigente;
              </li>
              <li>
                Viole direitos de terceiro ou direitos da Mais Valor para
                qualquer empresa do seu conglomerado;
              </li>
              <li>
                Seja falso, incorreto, impreciso, extemporâneo e que possa
                induzir outrem a erro;
              </li>
              <li>
                Disponibilize ou permita o acesso a conteúdo ilegal, violento,
                pornográfico ou qualquer outro ato contrário à lei e à ordem
                pública;
              </li>
              <li>
                Induza a discriminação ou incite o ódio contra pessoas e/ou
                grupos de pessoas em razão de nacionalidade, raça, religião,
                orientação sexual, gênero, condição física, nacionalidade,
                dentre outros atos que contrariem a ordem pública e a legislação
                brasileira vigente;
              </li>
              <li>
                Seja resguardado por direito de propriedade intelectual de
                terceiro e você não tenha autorização prévia para utilizá-lo;
              </li>
              <li>
                Contenha vírus ou outro elemento que seja capaz, em razão de
                suas características (como forma, extensão, etc), de causar
                danos ou impedir o funcionamento regular da rede do sistema e/ou
                de equipamentos informáticos ("hardware" e "software") da Mais
                Valor ou de terceiro.
              </li>
            </ol>
            <h3 className="mb-2">5. Responsabilidades</h3>
            <p className="mb-2">
              Enquanto você usufruir dos Serviços oferecidos, você é
              responsável:
            </p>
            <ol className="mb-2">
              <li>
                Por todo ato, por ação ou omissão, realizado em nosso site
                responsabilizando-se pela prática de todo e qualquer ato ilícito
                feita por você;
              </li>
              <li>Pelo conteúdo gerado por você;</li>
              <li>
                Pela reparação de danos causados a terceiros, a Mais Valor ou ao
                Conglomerado Mais Valor, a partir do uso dos Serviços;
              </li>
              <li>
                Pelo seu próprio acesso à internet e ao pagamento pelos serviços
                de acesso à rede;
              </li>
              <li>
                Pelo equipamento necessário para realizar a conexão à internet,
                como computador e modem, garantindo a segurança adequada do
                ambiente, mediante a utilização de ferramentas como antivírus e
                firewall;
              </li>
              <li>
                Por não utilizar os Serviços para outras finalidades além
                daquelas indicadas no site.
              </li>
            </ol>
            <p className="mb-2">
              Sem prejuízo das demais isenções de responsabilidade indicadas no
              presente documento, você se declara ciente de que a Mais Valor não
              será responsável:
            </p>
            <ol className="mb-4">
              <li>
                Por qualquer defraudação de utilidade que você possa atribuir
                aos Serviços, pela falibilidade destes, nem por qualquer
                dificuldade de acesso a estes, decorrentes de condutas
                atribuíveis a terceiros, como, por exemplo, prestadores de
                serviços de conexão à internet;
              </li>
              <li>
                Pela presença de vírus ou demais elementos nocivos nos Serviços,
                capazes de causar alterações em seus sistemas informáticos
                (software e hardware), documentos eletrônicos, eximindo-se a
                Mais Valor de qualquer responsabilidade por eventuais danos e
                prejuízos decorrentes de quaisquer elementos nocivos inseridos
                por terceiros;
              </li>
              <li>
                Pelos danos e prejuízos de toda natureza decorrentes do
                conhecimento que terceiros não autorizados possam ter de
                quaisquer dados fornecidos nos Serviços, em decorrência de falha
                exclusivamente relacionada ao usuário ou a terceiros que fujam a
                qualquer controle razoável da Mais Valor.
              </li>
            </ol>
            <h4 className="mb-2">6. Propriedade Intelectual</h4>
            <p className="mb-2">
              A Mais Valor assegura que as informações (textos, imagens, sons
              e/ou aplicativos) contidas no seu site estão de acordo com a
              legislação e normativos que regulam os direitos de propriedade
              intelectual (autoral e industrial), bem como pertencem a Mais
              Valor ou a terceiro que licitamente cedeu o seu direito de uso,
              não sendo permitidas modificações, cópias, reproduções ou
              quaisquer outras formas de utilização para fins comerciais sem o
              consentimento prévio e expresso da Mais Valor.
            </p>
            <p className="mb-4">
              Você declara que irá respeitar todos os direitos de propriedade
              intelectual contidos nos nossos Serviços, ciente de que o direito
              de acesso ao Serviço não concede qualquer autorização para uso de
              direitos de propriedade intelectual constantes de tal Serviço.
            </p>
            <h4 className="mb-2">7. Lei aplicável e resolução de conflitos</h4>
            <p className="mb-2">
              Toda e qualquer controvérsia oriunda dos termos expostos nestes
              Termos e Condições de Uso serão solucionados de acordo com a lei
              brasileira, sendo competente o foro da cidade de São Paulo, Estado
              de São Paulo, com exclusão de qualquer outro por mais privilegiado
              que seja.
            </p>
            <p className="mb-2">
              Fica claro, ainda, que a utilização de Serviços e as ordens
              comandadas fora do território brasileiro, ou ainda as decorrentes
              de operações iniciadas no exterior podem estar sujeitas também à
              legislação e jurisdição das autoridades dos países onde forem
              comandadas ou iniciadas.
            </p>
          </div>
        </div>
      </div>

      <Amazing amazing={Amazing}></Amazing>
      <Footer footer={Footer}></Footer>
    </div>
  );
};

export default termsUse;
