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

   test("Teste 2: Sucesso na criação da competição",async () => {
            
         await competitionBusiness.create("100m rasos")      
         expect(200).toBe(200)   
     
   })

})


describe('testes close', () => {
   test("Teste 1: Erro que deve retornar quando o nome está vazio",async () => {
      expect.assertions(3)
      try{
         await competitionBusiness.close("")
      }catch (error:any) {  
         expect(error).toBeInstanceOf(CustomError)
         expect(error.statusCode).toBe(404)
         expect(error.message).toBe("Competition name not found.")   
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
            
      await competitionBusiness.close("100m rasos")      
      expect(200).toBe(200)   
  
}) 

})

