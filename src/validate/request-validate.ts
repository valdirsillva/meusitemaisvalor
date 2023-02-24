import { Request } from "express";

export function RequestValidate(req: Request) {
  if (req.body.relationID === '0' || req.body.relationTypeID === '0' ) {
      throw new Error("Campos tipo de relação e relato devem ser selecionados.")
  }

  if (req.body.branchID === '0' || req.body.factAwareID === '0') {
    throw new Error("Campos onde ocorreu o fato e como tomou conhecimento devem ser selecionados.")
  }

  if (req.body.channelID === '0') {
    throw new Error("O camo [Em qual canal] deve ser selecionado")
  }
}


