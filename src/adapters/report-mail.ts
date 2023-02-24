import { ReportDataProps } from "../repositories/report-repository";
import { NodemailerMailAdapter } from "./nodemailer/nodemailer-mail-adapter"

export class ReportMailCustom {
    async execute(data: ReportDataProps) {
      const testNodemailerAdapter = new NodemailerMailAdapter()
      let manager = data.isManagerAware;
      let isManager = data.isManagerInvolved

      let managerAware = (manager === false) ? 'NAO' : 'SIM'
      let managerInvolved = (isManager === false) ? 'NAO' : 'SIM'

      await testNodemailerAdapter.sendMail({
        subject: 'NOVO RELATO - FORMULÁRIO SITE',
        body: [
          `<div style="font-family sans-serif. font-size:16px; color: #222;">`,
          `<p><b>Nome:</b><br/> ${data.name} </p>`,
          `<p><b>Email:</b><br/> ${data.email}</p>`,
          `<p><b>Telefone:</b><br/> ${data.phone}</p>`,
          `<p><b>Qual a sua relação com a Mais Valor?</b><br/> ${data.typeRelation}</p>`,
          `<p><b>Qual o tipo de relato você gostaria de fazer? </b><br/> ${data.relation}</p>`,

          `<p><b>Indique onde ocorreu o fato: </b><br/> ${data.branchText}</p>`,
          `<p><b>Como tomou conhecimento do fato? </b><br/> ${data.factText}</p>`,
          `<p><b>Você sabe se algum Superintendente, Gerente, Coordenador ou Supervisor tem conhecimento do fato?</b><br/> ${managerAware}</p>`,
          `<p><b>Você sabe se algum gestor está envolvido diretamente no relato? </b><br/> ${managerInvolved}</p>`,

          `<p><b>Descreva com mais detalhes o seu relato. </b><br/> ${data.details}</p>`,
          `<p><b>Existem testemunhas? Quem são? </b><br/> ${data.has_witnesses}</p>`,
          `<p><b>Você possui ou sabe se existem evidências do fato? Em caso positivo, quais são?</b><br/> ${data.evidence_of_facts}</p>`,

          `<p><b>Caso seja possível, indique qual valor financeiro envolvido neste fato?</b><br/> ${data.has_balance}</p>`,
          `<p><b>Caso você tenha alguma sugestão de como solucionar o problema, descreva-a:</b><br/> ${data.suggestion}</p>`,
          `</div>`
        ].join('\n'),
  
        _file: data.has_file,
        mailTo: data.mailTo,
      })
    }
}

