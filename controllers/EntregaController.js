import Entrega from '../models/Entrega.js';

export const listarEntregas = async (req, res) => {
    try {
        const dadosEntregas = await Entrega.findAll();
        return res.status(200).json(dadosEntregas);
    } catch (falha) {
        return res.status(500).json({ erro: falha.message });
    }
};

export const buscarEntrega = async (req, res) => {
    try {
        const { id } = req.params;
        const registro = await Entrega.findByPk(id);
        if (!registro) {
            return res.status(404).json({ mensagem: 'Entrega não localizada' });
        }
        return res.status(200).json(registro);
    } catch (falha) {
        return res.status(500).json({ erro: falha.message });
    }
};

export const salvarEntrega = async (req, res) => {
    try {
        const novoItem = await Entrega.create(req.body);
        return res.status(201).json(novoItem);
    } catch (falha) {
        return res.status(400).json({ erro: falha.message });
    }
};

export const modificarEntrega = async (req, res) => {
    try {
        const { id } = req.params;
        const entregaAlvo = await Entrega.findByPk(id);
        if (!entregaAlvo) {
            return res.status(404).json({ mensagem: 'Registro inexistente para atualização' });
        }
        await entregaAlvo.update(req.body);
        return res.status(200).json(entregaAlvo);
    } catch (falha) {
        return res.status(400).json({ erro: falha.message });
    }
};

export const removerEntrega = async (req, res) => {
    try {
        const { id } = req.params;
        const itemRemovido = await Entrega.findByPk(id);
        if (!itemRemovido) {
            return res.status(404).json({ mensagem: 'Não foi possível encontrar a entrega para exclusão' });
        }
        await itemRemovido.destroy();
        return res.status(204).send();
    } catch (falha) {
        return res.status(500).json({ erro: falha.message });
    }
};