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
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("It is necessary to inform the name of the competition.")   
     }
   })

   test("Teste 2: Sucesso na criação da competição",async () => {
            
        const result = await competitionBusiness.create("100m rasos")      
         expect(result).not.toBeDefined()
     
   })

})


describe('testes close', () => {
   test("Teste 1: Erro que deve retornar quando o nome está vazio",async () => {
      expect.assertions(3)
      try{
         await competitionBusiness.close("")
      }catch (error:any) {  
         expect(error).toBeInstanceOf(CustomError)
         expect(error.statusCode).toBe(422)
         expect(error.message).toBe("It is necessary to inform the name of the competition.")   
     }
   })

   test("Teste 2: Erro que deve retornar quando a competição não existe",async () => {
      expect.assertions(3)
      try{
         await competitionBusiness.close("natação")
      }catch (error:any) {  
         expect(error).toBeInstanceOf(CustomError)
         expect(error.statusCode).toBe(404)
         expect(error.message).toBe("Competition does not exist.")   
     }
   })

test("Teste 3: Sucesso em encerrar a competição",async () => {
            
     const result = await competitionBusiness.close("100m rasos")      
      expect(result).not.toBeDefined()  
  
}) 

})

