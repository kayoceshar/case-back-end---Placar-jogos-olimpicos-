import express from "express";
import { ResultsCompetitionController } from "../controller/ResultsCompetitionController";
import { ResultsCompetitionDataBase } from "../data/ResultsCompetitionDataBase";
import { CompetitionBaseDatabase } from "../data/CompetitionDataBase";
import { ResultsCompetitionBusiness } from "../business/ResultsCompetitionBusiness";
import { IdGenerator } from "../services/IdGenerator";

export const resultsCompetitionRouter = express.Router()

const competitionBaseDataBase = new CompetitionBaseDatabase()
const resultsCompetitionDataBase = new ResultsCompetitionDataBase()
const resultsCompetitionBusiness =  new ResultsCompetitionBusiness(competitionBaseDataBase, resultsCompetitionDataBase, new IdGenerator)
const resultsCompetitionController = new ResultsCompetitionController(resultsCompetitionBusiness)

resultsCompetitionRouter.post('/insert', (req, res)=> resultsCompetitionController.insertResult(req, res))
resultsCompetitionRouter.get('/ranking', (req, res)=> resultsCompetitionController.rank(req, res))