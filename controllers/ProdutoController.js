import Produto from '../models/Produto.js';
import Categoria from '../models/Categoria.js';

export const cadastrarNovoProduto = async (req, res) => {
    try {
        const itemSalvo = await Produto.create(req.body);
        return res.status(201).json(itemSalvo);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

export const exibirCatalogo = async (req, res) => {
    try {
        const listagem = await Produto.findAll({
            include: [{ model: Categoria, as: 'categoria' }]
        });
        return res.status(200).json(listagem);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const buscarProdutoIndividual = async (req, res) => {
    try {
        const { id: produtoId } = req.params;
        const resultado = await Produto.findByPk(produtoId, {
            include: [{ model: Categoria, as: 'categoria' }]
        });

        if (!resultado) {
            return res.status(404).json({ info: 'Item não localizado no sistema' });
        }

        return res.status(200).json(resultado);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const modificarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const registro = await Produto.findByPk(id);

        if (!registro) {
            return res.status(404).json({ info: 'Impossível atualizar: Produto não existe' });
        }

        await registro.update(req.body);
        return res.status(200).json(registro);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

export const removerProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const alvo = await Produto.findByPk(id);

        if (!alvo) {
            return res.status(404).json({ info: 'Produto não encontrado para deleção' });
        }

        await alvo.destroy();
        return res.status(204).send();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};