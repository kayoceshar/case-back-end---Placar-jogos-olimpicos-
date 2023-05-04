import { Request, Response } from "express";
import { CompetitionDTO } from "../model/competition";
import { CompetitionBusiness } from "../business/CompetitionBusiness";

const competitionBusiness = new CompetitionBusiness()

export class CompetitionController {
    public create = async(req:Request, res: Response) => {
        try {

            const input: CompetitionDTO = {
                name: req.body.name
            }
            
            await competitionBusiness.create(input)
            res.status(200).send({message: "Competition Created!"})


        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}                   