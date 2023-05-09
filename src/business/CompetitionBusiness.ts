import { CompetitionBaseDatabase } from "../data/CompetitionDataBase";
import { CustomError } from "../error/CustomError";
import { NameNotFound, NoExistingCompetition } from "../error/competitionErrors";
import { CompetitionDTO, competition} from "../model/competition";
import { IdGenerator } from "../services/IdGenerator";


const idGenerator = new IdGenerator()
const competitionDataBase =  new CompetitionBaseDatabase


export class CompetitionBusiness {
    public create = async(input: CompetitionDTO) => {
        try {
            
        const {name} = input;

        if(!name){
            throw new NameNotFound()
        }

        const id = idGenerator.generateId()

        const competition: competition = {
            id,
            name
        }

        await competitionDataBase.create(competition)
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }

    public close = async(name: string) =>{
        try {
            if(!name){
                throw new NameNotFound()
            }

            const allCompetitions =  await competitionDataBase.getAllCompetitions()
            const getCompetition = allCompetitions.find(competition => competition.name === name)

            if(!getCompetition){
                throw new NoExistingCompetition()
            }

            await competitionDataBase.close(name)
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }

    }



    
}