import { Router } from "express";
import {
  realizarPedido,
  obterTodosPedidos,
  buscarPedidoUnico
} from "../controllers/PedidoController.js";

const pedidoRouter = Router();

pedidoRouter.post("/", realizarPedido);
pedidoRouter.get("/", obterTodosPedidos);
pedidoRouter.get("/:id", buscarPedidoUnico);

export default pedidoRouter;