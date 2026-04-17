import Categoria from '../models/Categoria.js';

export const cadastrarCategoria = async (req, res) => {
    try {
        const novaCategoria = await Categoria.create(req.body);
        return res.status(201).json(novaCategoria);
    } catch (err) {
        return res.status(400).json({ erro: err.message });
    }
};

export const listarTodasCategorias = async (req, res) => {
    try {
        const lista = await Categoria.findAll();
        return res.status(200).json(lista);
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
};

export const buscarCategoriaUnica = async (req, res) => {
    try {
        const item = await Categoria.findByPk(req.params.id);
        if (!item) {
            return res.status(404).json({ erro: 'Categoria não localizada' });
        }
        return res.status(200).json(item);
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
};

export const atualizarCategoria = async (req, res) => {
    try {
        const alvo = await Categoria.findByPk(req.params.id);
        if (!alvo) {
            return res.status(404).json({ erro: 'Categoria não localizada' });
        }
        await alvo.update(req.body);
        return res.status(200).json(alvo);
    } catch (err) {
        return res.status(400).json({ erro: err.message });
    }
};

export const excluirCategoria = async (req, res) => {
    try {
        const registro = await Categoria.findByPk(req.params.id);
        if (!registro) {
            return res.status(404).json({ erro: 'Categoria não localizada' });
        }
        await registro.destroy();
        return res.status(204).send();
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
};