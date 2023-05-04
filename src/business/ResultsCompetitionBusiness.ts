import { CompetitionBaseDatabase } from "../data/CompetitionDataBase";
import { ResultsCompetitionDataBase } from "../data/ResultsCompetitionDataBase";
import { CustomError } from "../error/CustomError";
import { AtletaNotFound, CompeticaoNotFound, InvalidCompetition, InvalidUnidade, InvalidValue, NameNotFound, NoExistingCompetition, UnidadeNotFound, ValueNotFound } from "../error/competitionErrors";
import { CompetitionStatus } from "../model/competition";
import { resultInputDTO } from "../model/resultsCompetition";
import { IdGenerator } from "../services/IdGenerator";
import { result } from "../model/resultsCompetition";


const competitionDataBase = new CompetitionBaseDatabase()
const resultsCompetitionDataBase = new ResultsCompetitionDataBase()
const idGenerator = new IdGenerator()

export class ResultsCompetitionBusiness{
    public insertResults = async(input: resultInputDTO) => {
        try {
            const {competicao, atleta, value, unidade} = input

            if(!competicao){
                throw new CompeticaoNotFound();
            }

            const allCompetitions =  await competitionDataBase.getAllCompetitions()
            const getCompetition = allCompetitions.find(competition => competition.name === competicao)

            if(!getCompetition){
                throw new NoExistingCompetition()
            }

            if(getCompetition.status === CompetitionStatus.CLOSED){
                throw new InvalidCompetition()
            }

            if(!atleta){
                throw new AtletaNotFound(); 
            }

            if(!value){
                throw new ValueNotFound();
            }   
            
            if(typeof value != "number"){
                throw new InvalidValue();
            } 

            if(!unidade){
                throw new UnidadeNotFound(); 
            }

            if(unidade.toUpperCase() != "S" && unidade.toUpperCase() != "M"){
                throw new InvalidUnidade();
            }

            const id: string = idGenerator.generateId()
            const competition_id = getCompetition.id

            const result:result = {
                id,
                competicao,
                atleta,
                value,
                unidade,
                competition_id
            }

            await resultsCompetitionDataBase.insertResult(result)
            
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }
}