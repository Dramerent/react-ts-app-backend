import express from "express"
import cors from "cors"
import { router } from "./Routers/mainRouter.js"
import { corsSettingsType } from "./types/mainTypes.js"
import { prisma } from "./lib/prismaClient.js"
import "dotenv/config"; 

const app: express.Express = express()
const PORT: number = 3002
const corsSettings: corsSettingsType = {
    origin: 'https://react-ts-app-frontend.onrender.com',
    credentials: true
}

app.use(cors(corsSettings))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(`dpg-d6tg02ruibrs73crfi5g-a.oregon-postgres.render.com/app`, router);




app.listen(PORT, () =>{
    console.log(`сервер запущен на ${PORT} порте`)
})
