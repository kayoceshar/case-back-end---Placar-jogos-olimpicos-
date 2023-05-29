import { ResultsRepository } from "../business/ResultsRepository";
import { CustomError } from "../error/CustomError";
import { result, ResultInputDTO } from "../model/resultsCompetition";
import { BaseDatabase } from "./BaseDataBase";

export class ResultsCompetitionDataBase extends BaseDatabase implements ResultsRepository {
    private table = 'Competition_results'


    public insertResult =  async(result: result):Promise<void> => {
        try {
          await ResultsCompetitionDataBase.connection(this.table)
          .insert(result)  
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }


    public rankRace = async(competicao: string):Promise<ResultInputDTO[]> => {
        try {
           const result = await ResultsCompetitionDataBase.connection(this.table)
           .select('competicao','atleta','value','unidade')
           .where('competicao', '=', competicao)
           .orderBy('value','asc')
           return result
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }

    

    public rankDart = async(competicao: string):Promise<ResultInputDTO[]>  => {
        try {
            const result = await ResultsCompetitionDataBase.connection(this.table)
            .select('competicao','atleta')
            .max('value as value')
            .select('unidade')           
            .where('competicao', '=', competicao)
            .groupBy('atleta','unidade')
            .orderBy('value','desc')
            return result  
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }


    public getAllResults = async():Promise<result[]> => {
        try {
            const result = await ResultsCompetitionDataBase.connection(this.table)
            return result
        } catch (error:any) {
            throw new CustomError(400, error.message); 
        }
    }

}