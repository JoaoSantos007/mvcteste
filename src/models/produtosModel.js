const pool = require('../config/db')

const Produto = {
    listarTodosProdutos: async () => {
        const [rows] = await pool.execute('SELECT * FROM produtos')
        return rows
    },
    deletar: async(id)=>{
        const {result} = await pool.execute('DELETE FROM PRODUTOS WHERE id = ?',[id])
        return result.affectedRows
    },
    atualizar: async (id, dados) => {
        const query = `
        UPDATE produtos
        SET nome = ?, descricao = ?, preco = ?, estoque = ?,
        categoria = ?,
        WHERE id = ?
        `;
        const values = [
        dados.nome,
        dados.descricao|| null,
        dados.preco || null,
        dados.estoque || null,
        dados.categoria || null,
        id
        ];
        const [result] = await pool.execute(query, values);
        return result.affectedRows;
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO produtos
        (nome, descricao, preco, estoque, categoria)
        VALUES (?, ?, ?, ?, ?)
        `;
        const values = [
            dados.nome,
            dados.descricao|| null,
            dados.preco || null,
            dados.estoque || null,
            dados.categoria || null,
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
        },
    }

module.exports = Produto