import express from "express";
import cors from "cors";
import { router } from "./Routers/mainRouter.js";
// import "dotenv/config"; 
const app = express();
const PORT = 3002;
const corsSettings = {
    origin: 'http://localhost:5173',
    credentials: true
};
app.use(cors(corsSettings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/app', router);
app.get('/', (req, res) => { console.log("hw!!"); res.send('Hello, World!'); });
app.listen(PORT, () => {
    console.log(`сервер запущен на ${PORT} порте`);
});
