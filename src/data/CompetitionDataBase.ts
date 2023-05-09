import { CustomError } from "../error/CustomError";
import { CompetitionStatus, competition } from "../model/competition";
import { BaseDatabase } from "./BaseDataBase";

export class CompetitionBaseDatabase extends BaseDatabase{
    private table = 'Competition'

    public create = async (competition: competition) => {
        try {
           await CompetitionBaseDatabase.connection(this.table)
           .insert(competition) 
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }

    getAllCompetitions = async () => {
        const result = await CompetitionBaseDatabase.connection(this.table)
        return result
    }

    public close = async(name:string)=> {
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