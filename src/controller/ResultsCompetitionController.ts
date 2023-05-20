import { Request, Response } from "express";
import { ResultsCompetitionBusiness } from "../business/ResultsCompetitionBusiness";
import { ResultInputDTO } from "../model/resultsCompetition";



export class ResultsCompetitionController {
    constructor(
        private resultsCompetitionBusiness: ResultsCompetitionBusiness
    ){}
    public insertResult = async(req:Request, res:Response) => {
        try {
            const input: ResultInputDTO = {
                competicao: req.body.competicao,
                atleta: req.body.atleta,
                value: req.body.value,
                unidade: req.body.unidade
            }

            await this.resultsCompetitionBusiness.insertResults(input)
            res.status(200).send({message: "Result added successfully"})            
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public rank = async (req: Request, res: Response) => {
        try {
            const competicao = req.body.competicao
            const result = await this.resultsCompetitionBusiness.rank(competicao)
            res.status(200).send(result)
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}