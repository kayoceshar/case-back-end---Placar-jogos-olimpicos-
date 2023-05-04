import { Request, Response } from "express";
import { ResultsCompetitionBusiness } from "../business/ResultsCompetitionBusiness";
import { resultInputDTO } from "../model/resultsCompetition";

const resultsCompetitionBusiness = new ResultsCompetitionBusiness()

export class ResultsCompetitionController {
    public insertResult = async(req:Request, res:Response) => {
        try {
            const input: resultInputDTO = {
                competicao: req.body.competicao,
                atleta: req.body.atleta,
                value: req.body.value,
                unidade: req.body.unidade
            }

            await resultsCompetitionBusiness.insertResults(input)
            res.status(200).send({message: "Result added successfully"})            
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}