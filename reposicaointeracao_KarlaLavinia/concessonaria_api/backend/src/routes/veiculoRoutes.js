import { Router } from "express";
import { atualizarVeiculo, criarVeiculo, deletarVeiculo, listarVeiculos } from "../controller/veiculoController.js";
const router = Router()

router.post('/',criarVeiculo )
router.get('/', listarVeiculos )
router.put ('/:id', atualizarVeiculo )
router.delete ('/:id', deletarVeiculo)



export default router;