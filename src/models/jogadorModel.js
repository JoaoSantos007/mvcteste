const pool = require('../config/db')

const Jogador = {
    listarTodosJogadores: async () => {
        const [rows] = await pool.execute('SELECT * FROM jogadores')
        return rows
    },
    deletar: async (id) => {
        const { result } = await pool.execute('DELETE FROM jogadores WHERE id = ?', [id])
        return result.affectedRows
    },
    atualizar: async (id, dados) => {
        const query = `
        UPDATE jogadores
        SET nome = ?, posicao = ?, idade = ?,
        WHERE id = ?
        `;
        const values = [
            dados.nome,
            dados.posicao || null,
            dados.idade || null,
            id
        ];
        const [result] = await pool.execute(query, values);
        return result.affectedRows;
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO jogadores
        (nome, posicao, idade)
        VALUES (?, ?, ?)
        `;
        const values = [
            dados.nome,
            dados.posicao || null,
            dados.idade || null,
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },
}

module.exports = Jogador