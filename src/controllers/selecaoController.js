const selecao = require('../models/selecaoModel')

const selecaoController = {
    index: async (req, res) => {
        try {
            const selecao = await selecao.listarTodos()
            res.json(selecao);
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params

        try {
            const affectedRows = await selecao.deletar(id)

            if (affectedRows === 0) {
                return res.status(404).json({ message: 'Registro não encontrado' })
            }

            res.status(200).send()
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    store: async (req, res) => {
        try {
            const insertId = await selecao.criar(req.body)
            res.status(201).json({ id: insertId, ...req.body })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    },

    update: async (req, res) => {
        const { id } = req.params

        try {
            const affectedRows = await selecao.atualizar(id, req.body)

            if (affectedRows === 0) {
                return res.status(404).json({ message: 'Registro não encontrado' })
            }

            res.json({ id, ...req.body })
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = selecaoController