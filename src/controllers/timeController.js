const Time = require('../models/timeModel')

const timeController = {
  index: async (req, res) => {
    try {
      const times = await Time.listarTodos()
      res.json(times)
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao listar times' })
    }
  },

  show: async (req, res) => {
    try {
      const { id } = req.params
      const time = await Time.buscarPorId(id)

      if (!time) {
        return res.status(404).json({ erro: 'Time não encontrado' })
      }

      res.json(time)
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar time' })
    }
  },

  store: async (req, res) => {
    try {
      const { nome, pais, liga } = req.body

      if (!nome || !pais || !liga) {
        return res.status(400).json({ erro: 'nome, pais e liga são obrigatórios' })
      }

      const novoTime = await Time.criar({ nome, pais, liga })
      res.status(201).json(novoTime)
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao criar time' })
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params
      const { nome, pais, liga } = req.body

      const time = await Time.buscarPorId(id)
      if (!time) {
        return res.status(404).json({ erro: 'Time não encontrado' })
      }

      await Time.atualizar(id, { nome, pais, liga })
      res.json({ mensagem: 'Time atualizado com sucesso' })
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar time' })
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params

      const time = await Time.buscarPorId(id)
      if (!time) {
        return res.status(404).json({ erro: 'Time não encontrado' })
      }

      await Time.deletar(id)
      res.json({ mensagem: 'Time deletado com sucesso' })
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao deletar time' })
    }
  }
}

module.exports = timeController
