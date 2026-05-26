const Produto = require('../models/produtosModel');

const produtoController = {
    index: async (req,res)=>{
        try{
            const produto = await Produto.listarTodosProdutos()
            res.json(produto);
        }catch(error){
            res.status(500).json
        }
    },
    delete: async(req,res)=>{
        const{id} = req.params
        try{
            const affectedRows = await Produto.deletar(id)
            if (affectedRows === 0) {
                return res.status(404).json({message: 'registro nao ecnontrado'})
            }
            res.status(200).send()
        }catch{
            res.status(500).json({error:error.mesage})
        }
    },
    store: async (req, res) => {
        try {
        const insertId = await Produto.criar(req.body);
        res.status(201).json({ id: insertId, ...req.body });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
        const affectedRows = await Produto.atualizar(id, req.body);
        if (affectedRows === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json({ id, ...req.body });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }   
}

module.exports = produtoController