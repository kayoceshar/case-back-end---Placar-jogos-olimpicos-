import { competition } from "../model/competition";

export interface CompetitionRepository {
    create(competition: competition):Promise<void>;
    getAllCompetitions():Promise<competition[]>;
    close(name:string):Promise<void>;
}