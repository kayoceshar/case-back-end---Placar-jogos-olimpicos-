import { Result, ResultInputDTO } from "../model/resultsCompetition";

export interface ResultsRepository {
    insertResult(result: Result):Promise<void>;
    rankRace(competicao: string):Promise<ResultInputDTO[]>;
    rankDart(competicao: string):Promise<ResultInputDTO[]>;
    getAllResults():Promise<Result[]>;
}