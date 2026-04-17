import Categoria from './Categoria.js';
import Produto from './Produto.js';
import Pedido from './Pedido.js';
import Entrega from './Entrega.js';
import Avaliacao from './Avaliacao.js';

const appModels = {
  Categoria,
  Produto,
  Pedido,
  Entrega,
  Avaliacao
};

for (const model of Object.values(appModels)) {
  if (typeof model.associate === 'function') {
    model.associate(appModels);
  }
}

export default appModels;