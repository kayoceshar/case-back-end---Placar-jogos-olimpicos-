import { CompetitionBusiness } from "../../src/business/CompetitionBusiness";
import { CustomError } from "../../src/error/CustomError";
import { CompetitionDataBaseMock } from "../mocks/CompetitionDataBaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";


const competitionBusiness = new CompetitionBusiness(
   new CompetitionDataBaseMock(),
   new IdGeneratorMock() 
)

describe('testes create', () => {
   test("Teste 1: Erro que deve retornar quando o nome está vazio",async () => {
      expect.assertions(3)
      try{
         await competitionBusiness.create("")
      }catch (error:any) {  
         expect(error).toBeInstanceOf(CustomError)
         expect(error.statusCode).toBe(404)
         expect(error.message).toBe("Competition name not found.")   
     }
   })
})

