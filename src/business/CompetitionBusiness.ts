import { CustomError } from "../error/CustomError";
import { NameNotFound, NoExistingCompetition } from "../error/competitionErrors";
import { competition} from "../model/competition";
import { CompetitionRepository } from "./CompetitionRepository";
import { IIdGenerator } from "./ports";





export class CompetitionBusiness {
    constructor(
        private competitionDataBase: CompetitionRepository,
        private idGenerator: IIdGenerator,
    ){}
    public create = async(name:string) => {
        try {
            
        
        if(!name){
            throw new NameNotFound()
        }

        const id = this.idGenerator.generateId()

        const competition: competition = {
            id,
            name
        }

        

        await this.competitionDataBase.create(competition)

        
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    public close = async(name: string) =>{
        try {
            if(!name){
                throw new NameNotFound()
            }

            const allCompetitions =  await this.competitionDataBase.getAllCompetitions()
            const getCompetition = allCompetitions.find(competition => competition.name === name)

            if(!getCompetition){
                throw new NoExistingCompetition()
            }

            await this.competitionDataBase.close(name)
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }

    }
    
}