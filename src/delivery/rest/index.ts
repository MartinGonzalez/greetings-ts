require('dotenv').config();
import express from "express";
import logRequests from "./middlewares/loggingMiddleware";
import { GetGreetingsController } from "./controllers/getGreetingsController";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(logRequests)

const greetingsController = new GetGreetingsController();
app.use('/greetings', greetingsController.router)

app.listen(port, () => console.log(`REST API server running at http://localhost:${port}`))