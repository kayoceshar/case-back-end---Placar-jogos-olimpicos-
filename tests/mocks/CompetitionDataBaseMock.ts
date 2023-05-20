import { CompetitionRepository } from "../../src/business/CompetitionRepository";
import { competition } from "../../src/model/competition";

export class CompetitionDataBaseMock implements CompetitionRepository {
public create =  async(competition: competition):Promise<void> => {}

public getAllCompetitions = async ():Promise<competition[]> => {
    return []
 }

public close = async(name:string):Promise<void> => {}
}

