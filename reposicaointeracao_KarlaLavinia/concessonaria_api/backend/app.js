import express from "express";
import cors from "cors"
import conn from "./src/config/database.js";

//Model
import { veiculoModels } from "./src/models/veiculoModels.js";
// Routes
import veiculoRoutes from "./src/routes/veiculoRoutes.js"

const app = express();

conn.sync();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json())

app.use("/api/veiculo", veiculoRoutes)

app.use((req, res)=>{
    res.status(404).json({mensagem: "Rota não encontrada!"})
})

// //Erro handler
// app.use(errorHandler)

export default app; 