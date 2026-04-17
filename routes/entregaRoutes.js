import { Router } from "express";
import {
    listarEntregas,
    buscarEntrega,
    salvarEntrega,
    modificarEntrega,
    removerEntrega
} from "../controllers/EntregaController.js";

const entregaRoutes = Router();

entregaRoutes.get("/", listarEntregas);
entregaRoutes.get("/:id", buscarEntrega);
entregaRoutes.post("/", salvarEntrega);
entregaRoutes.put("/:id", modificarEntrega);
entregaRoutes.delete("/:id", removerEntrega);

export default entregaRoutes;