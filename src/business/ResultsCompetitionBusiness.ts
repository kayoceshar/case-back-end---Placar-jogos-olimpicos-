import { CustomError } from "../error/CustomError";
import { AtletaNotFound, Attempts, CompeticaoNotFound, ExistingCompetitionRace, InvalidCompetition, InvalidUnidade, InvalidValue, NameNotFound, NoExistingCompetition, UnidadeNotFound, ValueNotFound } from "../error/competitionErrors";
import { CompetitionStatus } from "../model/competition";
import { ResultInputDTO } from "../model/resultsCompetition";
import { Result } from "../model/resultsCompetition";
import { CompetitionRepository } from "./CompetitionRepository";
import { IIdGenerator } from "./ports";
import { ResultsRepository } from "./ResultsRepository";



export class ResultsCompetitionBusiness{
    constructor(
        private competitionDataBase: CompetitionRepository,
        private resultsCompetitionDataBase: ResultsRepository,
        private idGenerator: IIdGenerator
    ){}
    public insertResults = async(input: ResultInputDTO) => {
        try {
            const {competicao, atleta, value, unidade} = input

            if(!competicao){
                throw new CompeticaoNotFound();
            }

            const allCompetitions =  await this.competitionDataBase.getAllCompetitions()
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

            const allResults = await this.resultsCompetitionDataBase.getAllResults()
            const getResult = allResults.find(result => result.atleta === atleta);       
            
            let counter = 0;
            
            for (let i = 0; i < allResults.length; i++) {
              if (allResults[i].atleta === atleta) counter++;
            }
            
            if(counter > 3){
                throw new Attempts();
            }
          

            if(competicao === '100m rasos' && getResult){
                throw new ExistingCompetitionRace()
            }



            const id: string = this.idGenerator.generateId()
            const competition_id = getCompetition.id

            const result:Result = {
                id,
                competicao,
                atleta,
                value,
                unidade,
                competition_id
            }

            await this.resultsCompetitionDataBase.insertResult(result)
            
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    public rank = async (competicao: string) => {
        try {

            if(!competicao){
                throw new CompeticaoNotFound();
            }

            const allCompetitions =  await this.competitionDataBase.getAllCompetitions()
            const getCompetition = allCompetitions.find(competition => competition.name === competicao)

            if(!getCompetition){
                throw new NoExistingCompetition()
            }

           
            if(competicao === '100m rasos'){
                const result = await this.resultsCompetitionDataBase.rankRace(competicao)
                return result
            }else {
                const result = await this.resultsCompetitionDataBase.rankDart(competicao)
                return result
            }

            
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
}