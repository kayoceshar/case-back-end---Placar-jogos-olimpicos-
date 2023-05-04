import app from "./app";
import { competitionRouter } from "./router/competitionRouter";
import { resultsCompetitionRouter } from "./router/resultsCompetitionRouter";

app.use('/competition', competitionRouter)
app.use('/results', resultsCompetitionRouter)