const pool = require('../config/db')

const Selecao = {
    listarTodos: async () => {
        const [rows] = await pool.execute('SELECT * FROM selecao')
        return rows
    },

    deletar: async (id) => {
        const [result] = await pool.execute(
            'DELETE FROM selecao WHERE id = ?',
            [id]
        )

        return result.affectedRows
    },

    atualizar: async (id, dados) => {
        const query = `
        UPDATE selecao
        SET nome = ?, continente = ?
        WHERE id = ?
        `

        const values = [
            dados.nome,
            dados.continente,
            id
        ]

        const [result] = await pool.execute(query, values)
        return result.affectedRows
    },

    criar: async (dados) => {
        const query = `
        INSERT INTO selecao
        (nome, continente)
        VALUES (?, ?)
        `

        const values = [
            dados.nome,
            dados.continente
        ]

        const [result] = await pool.execute(query, values)
        return result.insertId
    }
}

module.exports = Selecao