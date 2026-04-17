import { Router } from "express";
import {
    cadastrarNovoProduto,
    exibirCatalogo,
    buscarProdutoIndividual,
    modificarProduto,
    removerProduto
} from "../controllers/ProdutoController.js";

const produtoRouter = Router();

produtoRouter.post("/", cadastrarNovoProduto);
produtoRouter.get("/", exibirCatalogo);
produtoRouter.get("/:id", buscarProdutoIndividual);
produtoRouter.put("/:id", modificarProduto);
produtoRouter.delete("/:id", removerProduto);

export default produtoRouter;