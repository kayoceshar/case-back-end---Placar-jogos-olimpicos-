import express from "express";
import { CompetitionController } from "../controller/CompetitionController";
import { CompetitionBaseDatabase } from "../data/CompetitionDataBase";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { IdGenerator } from "../services/IdGenerator";

export const competitionRouter = express.Router()


const competitionDataBase = new CompetitionBaseDatabase()
const competitionBusiness = new CompetitionBusiness(competitionDataBase, new IdGenerator())
const competitionController = new CompetitionController(competitionBusiness)

competitionRouter.post('/create', (req, res) => competitionController.create(req, res));
competitionRouter.put('/close', (req, res) => competitionController.close(req, res));