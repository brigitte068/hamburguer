import Avaliacao from "../models/Avaliacao.js";

export const registrarFeedback = async (req, res) => {
  try {
    const { nota: score, pedido_id: id_do_pedido } = req.body;

    if (!score || score < 1 || score > 5) {
      return res.status(400).json({ mensagem: "A pontuação deve ser de 1 a 5" });
    }

    const feedbackSalvo = await Avaliacao.create({ nota: score, pedido_id: id_do_pedido });
    
    return res.status(201).json(feedbackSalvo);
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};

export const listarAvaliacoes = async (req, res) => {
  try {
    const resultados = await Avaliacao.findAll();
    
    if (resultados.length === 0) {
      return res.status(404).json({ info: 'Não existem registros cadastrados' });
    }
    
    return res.status(200).json(resultados);
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};

export const obterPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Avaliacao.findByPk(id);
    
    if (review) {
      return res.status(200).json(review);
    }
    
    return res.status(404).json({ mensagem: 'O registro solicitado não existe' });
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};

export const atualizarDados = async (req, res) => {
  try {
    const { nota: novoScore } = req.body;
    const { id } = req.params;

    if (novoScore && (novoScore < 1 || novoScore > 5)) {
      return res.status(400).json({ aviso: "Valor de nota inválido" });
    }

    const reviewExistente = await Avaliacao.findByPk(id);
    
    if (!reviewExistente) {
      return res.status(404).json({ mensagem: 'Impossível atualizar: ID não encontrado' });
    }

    await reviewExistente.update(req.body);
    return res.status(200).json(reviewExistente);
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};

export const deletarRegistro = async (req, res) => {
  try {
    const alvo = await Avaliacao.findByPk(req.params.id);
    
    if (!alvo) {
      return res.status(404).json({ mensagem: 'Item não localizado' });
    }

    await alvo.destroy();
    return res.status(200).json({ concluido: true, detalhes: 'Removido com sucesso' });
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};

export const reverterExclusao = async (req, res) => {
  try {
    const backup = await Avaliacao.findByPk(req.params.id, { paranoid: false });
    
    if (!backup) {
      return res.status(404).json({ mensagem: 'Não há registros deletados com este ID' });
    }

    await backup.restore();
    return res.status(200).json({ info: 'Dados recuperados', objeto: backup });
  } catch (err) {
    return res.status(500).json({ falha: err.message });
  }
};