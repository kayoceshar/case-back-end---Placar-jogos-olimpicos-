import { CompetitionRepository } from "../../src/business/CompetitionRepository";
import { competition } from "../../src/model/competition";
import { competitionMock } from "./CompetitionMock";

export class CompetitionDataBaseMock implements CompetitionRepository {
public create =  async(competition: competition):Promise<void> => {}

public getAllCompetitions = async ():Promise<competition[]> => {
    return competitionMock
 }

public close = async(name:string):Promise<void> => {}
}

