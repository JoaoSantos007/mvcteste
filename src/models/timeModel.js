const db = require('../config/db')

const Time = {
  listarTodos: async () => {
    const [rows] = await db.query('SELECT * FROM time')
    return rows
  },

  buscarPorId: async (id) => {
    const [rows] = await db.query('SELECT * FROM time WHERE id = ?', [id])
    return rows[0] || null
  },

  criar: async (dados) => {
    const { nome, pais, liga } = dados
    const [result] = await db.query(
      'INSERT INTO time (nome, pais, liga) VALUES (?, ?, ?)',
      [nome, pais, liga]
    )
    return { id: result.insertId, ...dados }
  },

  atualizar: async (id, dados) => {
    const { nome, pais, liga } = dados
    const [result] = await db.query(
      'UPDATE time SET nome = ?, pais = ?, liga = ? WHERE id = ?',
      [nome, pais, liga, id]
    )
    return result.affectedRows > 0
  },

  deletar: async (id) => {
    const [result] = await db.query('DELETE FROM time WHERE id = ?', [id])
    return result.affectedRows > 0
  }
}

module.exports = Time
