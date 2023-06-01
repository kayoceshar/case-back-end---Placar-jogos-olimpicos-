# Teste prático da EstanteVirtual

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## Jogos Olímpicos

Enunciado:

Jogos Olímpicos
Com a chegada dos jogos olímpicos, fomos designados para construir uma API REST em Ruby para o COB (Comitê Olímico Brasileiro), que será responsável por marcar e dizer os vencedores das seguintes modalidades:

100m rasos: Menor tempo vence
Lançamento de Dardo: Maior distância vence


Detalhes:
A API não deve aceitar cadastros de resultados se a competição já estiver encerrada.
A API pode retornar o ranking/resultado parcial, caso a disputa ainda não estiver encerrada.
No caso da competição do lançamento de dardos, cada atleta terá 3 chances, e o resultado da competição deverá levar em conta o lançamento mais distante de cada atleta.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


🎯 EndPoints 


 1. **Criar uma competição**  
    
 2. **Cadastrar resultados para uma competição**
        
 3. **Finalizar uma competição**
    
 4. **Retornar o ranking da competição, exibindo a posição final de cada atleta**
    
 

    
 - ### **👨‍💻 Tecnologias Utilizadas**
    	
- Typescript
- Node.js
- MySQL
- Express.js
- Knex.js
	
- ### Para Rodar o projeto:
- git clone https://github.com/kayoceshar/Cookenu.git
- npm install
- criar um arquivo .env com as informações do seus banco de dados
- variáveis do arquivo .env:
	DB_HOST: ,
   	DB_USER: ,
    	DB_PASSWORD: ,
    	DB_DATABASE: ,
- executar as queries do arquivo queries.sql para criar as tabelas
- npm run dev -> para rodar o servidor
    
- ### **👨‍💻 Link Render** 
    
  <p>Confira o <a href="https://placar-jogos-olimpicos.onrender.com" target="_blank">Render</a>.</p>
    
- ### **👨‍💻 Documentação Postman** 
     
  <p>Confira o <a href="https://documenter.getpostman.com/view/23251344/2s93mBvJNc" target="_blank">Documentação</a>.</p>

