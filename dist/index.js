import express from "express";
import cors from "cors";
import { router } from "./Routers/mainRouter.js";
// import "dotenv/config"; 
const app = express();
const PORT = 3002;
const corsSettings = {
    origin: 'https://react-ts-app-frontend.onrender.com',
    credentials: true
};
console.log('DATABASE_URL:', process.env.DATABASE_URL);
app.use(cors(corsSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/app', router);
app.listen(PORT, () => {
    console.log(`сервер запущен на ${PORT} порте`);
});
