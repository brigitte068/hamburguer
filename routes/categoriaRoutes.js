import { Router } from 'express';
import { 
    cadastrarCategoria, 
    listarTodasCategorias, 
    buscarCategoriaUnica, 
    atualizarCategoria, 
    excluirCategoria 
} from '../controllers/CategoriaController.js';

const categoriaRouter = Router();

categoriaRouter.post('/', cadastrarCategoria);
categoriaRouter.get('/', listarTodasCategorias);
categoriaRouter.get('/:id', buscarCategoriaUnica);
categoriaRouter.put('/:id', atualizarCategoria);
categoriaRouter.delete('/:id', excluirCategoria);

export default categoriaRouter;