import express from "express"
import cors from "cors"
import { router } from "./Routers/mainRouter.js"
import { corsSettingsType } from "./types/mainTypes.js"
import { prisma } from "./lib/prismaClient.js"
// import "dotenv/config"; 

const app: express.Express = express()
const PORT: number = 3002
const corsSettings: corsSettingsType = {
    origin: 'https://react-ts-app-frontend.onrender.com',
    credentials: true
}
console.log('DATABASE_URL:', process.env.DATABASE_URL);
app.use(cors(corsSettings))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/app', router)




app.listen(PORT, () =>{
    console.log(`сервер запущен на ${PORT} порте`)
})
