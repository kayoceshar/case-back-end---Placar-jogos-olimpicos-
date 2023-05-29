import { result, ResultInputDTO } from "../model/resultsCompetition";

export interface ResultsRepository {
    insertResult(result: result):Promise<void>;
    rankRace(competicao: string):Promise<ResultInputDTO[]>;
    rankDart(competicao: string):Promise<ResultInputDTO[]>;
    getAllResults():Promise<result[]>;
}