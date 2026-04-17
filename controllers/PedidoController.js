import Entrega from "../models/Entrega.js";
import Pedido from "../models/Pedido.js";
import Avaliacao from "../models/Avaliacao.js";

export const realizarPedido = async (req, res) => {
  try {
    const novoRegistro = await Pedido.create(req.body);
    return res.status(201).json(novoRegistro);
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};

export const obterTodosPedidos = async (req, res) => {
  try {
    const listagem = await Pedido.findAll({
      include: [
        { model: Entrega, as: 'entrega' },
        { model: Avaliacao, as: 'avaliacao' }
      ]
    });

    if (!listagem || listagem.length === 0) {
      return res.status(404).json({ informacao: "A base de dados está vazia" });
    }

    return res.status(200).json(listagem);
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};

export const buscarPedidoUnico = async (req, res) => {
  try {
    const { id: codigoPedido } = req.params;
    const item = await Pedido.findByPk(codigoPedido, {
      include: [
        { model: Entrega, as: 'entrega' },
        { model: Avaliacao, as: 'avaliacao' }
      ]
    });

    if (!item) {
      return res.status(404).json({ mensagem: "Não existe pedido com o ID informado" });
    }

    return res.status(200).json(item);
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};