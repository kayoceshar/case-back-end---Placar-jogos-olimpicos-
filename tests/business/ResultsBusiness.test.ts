import { ResultsCompetitionBusiness } from "../../src/business/ResultsCompetitionBusiness";
import { CustomError } from "../../src/error/CustomError";
import { CompetitionDataBaseMock } from "../mocks/CompetitionDataBaseMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { ResultsDataBaseMock } from "../mocks/ResultsDataBaseMock";

const resultBusiness = new ResultsCompetitionBusiness(
    new CompetitionDataBaseMock(),
    new ResultsDataBaseMock(),
    new IdGeneratorMock()    
)

describe('testes inserir resultados', () => {
    test("Teste 1: Erro que deve retornar quando o nome da competição está vazio",async () => {
       expect.assertions(3)
       
       const input = {
        competicao: "",
        atleta: "Jacy",
        value: 100.5,
        unidade: "m"
       }

       try{
          await resultBusiness.insertResults(input)
       }catch (error:any) {  
          expect(error).toBeInstanceOf(CustomError)
          expect(error.statusCode).toBe(422)
          expect(error.message).toBe("It is necessary to inform the name of the competition.")   
      }
    })

    test("Teste 2: Erro que deve retornar quando o nome da competição não existe",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "xadrez",
         atleta: "Jacy",
         value: 100.5,
         unidade: "m"
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(404)
           expect(error.message).toBe("Competition does not exist.")   
       }
     })

     test("Teste 3: Erro que deve retornar quando o status da competição está encerrado.",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "Corrida",
         atleta: "Jacy",
         value: 100.5,
         unidade: "m"
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(422)
           expect(error.message).toBe("It is not possible to add the result to an already closed competition.")   
       }
     })

     test("Teste 4: Erro que deve retornar quando o nome do atleta está vazio",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "100m rasos",
         atleta: "",
         value: 100.5,
         unidade: "m"
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(422)
           expect(error.message).toBe("It is necessary to inform the name of the athlete.")   
       }
     })

     test("Teste 5: Erro que deve retornar quando o valor da competição está vazio",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "100m rasos",
         atleta: "Jacy",
         value: 0,
         unidade: "m"
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(422)
           expect(error.message).toBe("It is necessary to inform the value of the athlete's result.")   
       }
     })

     test("Teste 6: Erro que deve retornar quando o valor da competição não for um number.",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "100m rasos",
         atleta: "Jacy",
         value: "cem",
         unidade: "m"
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(422)
           expect(error.message).toBe("The value must be a number.")   
       }
     })

     test("Teste 7: Erro que deve retornar quando o valor da unidade estiver vazio.",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "100m rasos",
         atleta: "Jacy",
         value: 100.5,
         unidade: ""
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(422)
           expect(error.message).toBe("It is necessary to inform the unit")   
       }
     })
     
     test("Teste 8: Erro que deve retornar quando o valor da unidade não estiver em s ou m.",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "100m rasos",
         atleta: "Jacy",
         value: 100.5,
         unidade: "p"
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(422)
           expect(error.message).toBe("The unit needs either s(seconds) or m(meters).")   
       }
     })


     test("Teste 9: Erro que deve retornar quando tenta colocar um novo resultado para o mesmo atleta.",async () => {
        expect.assertions(3)
        
        const input = {
         competicao: "100m rasos",
         atleta: "Kayo",
         value: 100.5,
         unidade: "s"
        }
 
        try{
           await resultBusiness.insertResults(input)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(409)
           expect(error.message).toBe("There is already a result for this athlete.")   
       }
     })

     
 
    test("Teste 10: Sucesso em adicionar o resultado",async () => {
           
        const input = {
            competicao: "100m rasos",
            atleta: "Mario",
            value: 50.5,
            unidade: "s"
           }
         const  result = await resultBusiness.insertResults(input)     
          expect(result).not.toBeDefined()   
      
    })
 
 })


 describe('testes ranking', () => {
    test("Teste 1: Erro que deve retornar quando o nome da competição está vazio",async () => {
        expect.assertions(3)
        const competicao = ""
        
        try{
           await resultBusiness.rank(competicao)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(422)
           expect(error.message).toBe("It is necessary to inform the name of the competition.")   
       }
     })

     test("Teste 2: Erro que deve retornar quando o nome da competição não existe",async () => {
        expect.assertions(3)
        const competicao = "natação"
        
        try{
           await resultBusiness.rank(competicao)
        }catch (error:any) {  
           expect(error).toBeInstanceOf(CustomError)
           expect(error.statusCode).toBe(404)
           expect(error.message).toBe("Competition does not exist.")   
       }
     })

     test("Teste 3: Sucesso em retornar o ranking",async () => {           
        const competicao = "100m rasos"
         const result = await resultBusiness.rank(competicao)     
         expect(result).toEqual([{atleta: "Kayo", competicao: "100m rasos", competition_id: "id11", id: "id", unidade: "s", value: 9.25}])
      
    })
 
 })
 