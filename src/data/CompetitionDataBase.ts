import { CompetitionRepository } from "../business/CompetitionRepository";
import { CustomError } from "../error/CustomError";
import { CompetitionStatus, competition } from "../model/competition";
import { BaseDatabase } from "./BaseDataBase";

export class CompetitionBaseDatabase extends BaseDatabase implements CompetitionRepository {
    private table = 'Competition'

    public create = async (competition: competition):Promise<void> => {
        try {
           await CompetitionBaseDatabase.connection(this.table)
           .insert(competition) 
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }

    public getAllCompetitions = async ():Promise<competition[]> => {
        const result = await CompetitionBaseDatabase.connection(this.table)
        return result
    }

    public close = async(name:string):Promise<void> => {
        try {
            await CompetitionBaseDatabase.connection
            .update({status:CompetitionStatus.CLOSED})
            .where({name:name})
            .into(this.table)
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }
}