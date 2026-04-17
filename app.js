import express from 'express';
import './models/index.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import produtoRoutes from './routes/produtosRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';

const api = express();
const PORTA = 3000;

api.use(express.json());

api.get('/', (req, res) => {
    return res.status(200).json({ status: 'Sistema Operacional' });
});

api.use('/categoria', categoriaRoutes);
api.use('/pedido', pedidoRoutes);
api.use('/entrega', entregaRoutes);
api.use('/produto', produtoRoutes);
api.use('/avaliacoes', avaliacaoRoutes);

api.listen(PORTA, () => {
    console.log(`Servidor ativo em: http://localhost:${PORTA}`);
});