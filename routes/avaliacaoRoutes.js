import { Router } from "express";
import {
  registrarFeedback,
  listarAvaliacoes,
  obterPorId,
  atualizarDados,
  deletarRegistro,
  reverterExclusao
} from "../controllers/AvaliacaoController.js";

const avaliacaoRouter = Router();

avaliacaoRouter.post("/", registrarFeedback);
avaliacaoRouter.get("/", listarAvaliacoes);
avaliacaoRouter.get("/:id", obterPorId);
avaliacaoRouter.put("/:id", atualizarDados);
avaliacaoRouter.delete("/:id", deletarRegistro);
avaliacaoRouter.post("/restore/:id", reverterExclusao);

export default avaliacaoRouter;