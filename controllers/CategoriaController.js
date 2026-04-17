import Categoria from "../models/Categoria.js";
import Produto from "../models/Produto.js";

export const cadastrarCategoria = async (req, res) => {
  try {
    const novaCategoria = await Categoria.create(req.body);
    return res.status(201).json(novaCategoria);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro ao registrar categoria", erro: err.message });
  }
};

export const buscarTodas = async (req, res) => {
  try {
    const lista = await Categoria.findAll({
      include: [{ model: Produto, as: 'produtos' }]
    });

    if (!lista || lista.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum registro encontrado' });
    }
    return res.status(200).json(lista);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Categoria.findByPk(id, {
      include: [{ model: Produto, as: 'produtos' }]
    });

    if (!item) {
      return res.status(404).json({ mensagem: 'Categoria inexistente' });
    }
    return res.status(200).json(item);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
};

export const editarCategoria = async (req, res) => {
  try {
    const registro = await Categoria.findByPk(req.params.id);
    
    if (!registro) {
      return res.status(404).json({ mensagem: 'Não foi possível encontrar a categoria' });
    }

    await registro.update(req.body);
    return res.status(200).json(registro);
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
};

export const removerCategoria = async (req, res) => {
  try {
    const alvo = await Categoria.findByPk(req.params.id);
    
    if (!alvo) {
      return res.status(404).json({ mensagem: 'Categoria não encontrada para exclusão' });
    }

    await alvo.destroy();
    return res.status(200).json({ status: 'Sucesso', msg: 'Registro removido' });
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
};

export const recuperarCategoria = async (req, res) => {
  try {
    const deletado = await Categoria.findByPk(req.params.id, { paranoid: false });
    
    if (!deletado) {
      return res.status(404).json({ mensagem: 'Registro não encontrado no lixo' });
    }

    await deletado.restore();
    return res.status(200).json({ status: 'Restaurado', item: deletado });
  } catch (err) {
    return res.status(500).json({ erro: err.message });
  }
};