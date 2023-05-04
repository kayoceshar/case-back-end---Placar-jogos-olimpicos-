import express from "express";
import { ResultsCompetitionController } from "../controller/ResultsCompetitionController";

export const resultsCompetitionRouter = express.Router()

const resultsCompetitionController = new ResultsCompetitionController()

resultsCompetitionRouter.post('/insert', resultsCompetitionController.insertResult)