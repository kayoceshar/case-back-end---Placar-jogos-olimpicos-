import { CustomError } from "../error/CustomError";
import { result } from "../model/resultsCompetition";
import { BaseDatabase } from "./BaseDataBase";

export class ResultsCompetitionDataBase extends BaseDatabase{
    private table = 'Competition_results'


    public insertResult =  async(result: result) => {
        try {
          await ResultsCompetitionDataBase.connection(this.table)
          .insert(result)  
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }



}