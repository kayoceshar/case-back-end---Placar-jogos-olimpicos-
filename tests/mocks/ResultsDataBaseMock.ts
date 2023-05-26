import { ResultsRepository } from "../../src/business/ResultsRepository";
import { Result, ResultInputDTO } from "../../src/model/resultsCompetition";
import { resultsMock } from "./ResultsMock";

export class ResultsDataBaseMock implements ResultsRepository{
    public insertResult =  async(result: Result):Promise<void> => {}
    
    public rankRace = async(competicao: string):Promise<ResultInputDTO[]> => {
        const result = resultsMock.filter(result => result.competicao === competicao)
        return result
    }

    public rankDart = async(competicao: string):Promise<ResultInputDTO[]>  => {
        const result = resultsMock.filter(result => result.competicao === competicao)
        return result
    }

    public getAllResults = async():Promise<Result[]> => {
        return resultsMock
    }
}