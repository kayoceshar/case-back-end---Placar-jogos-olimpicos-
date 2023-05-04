import { CustomError } from "../error/CustomError";
import { competition } from "../model/competition";
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
}