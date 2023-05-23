import { Request, Response } from "express";
import { CompetitionDTO } from "../model/competition";
import { CompetitionBusiness } from "../business/CompetitionBusiness";



export class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ){}
    public create = async(req:Request, res: Response) => {
        try {
            const name = req.body.name        
            
           await this.competitionBusiness.create(name)
           
                     
           res.status(200).send({message: "Competition Created!"})
            
            

        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public close = async(req:Request, res: Response) => {
        try {
            const name = req.body.name
            await this.competitionBusiness.close(name)
            res.status(200).send({message: "Competition ended successfully!"})
        } catch (error:any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

}                   