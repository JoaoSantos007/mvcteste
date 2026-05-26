const Jogador = require('../models/jogadorModel');

const jogadorController = {
    index: async (req,res)=>{
        try{
            const jogador = await Jogador.listarTodosJogadores()
            res.json(jogador);
        }catch(error){
            res.status(500).json
        }
    },
    delete: async(req,res)=>{
        const{id} = req.params
        try{
            const affectedRows = await Jogador.deletar(id)
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
        const insertId = await Jogador.criar(req.body);
        res.status(201).json({ id: insertId, ...req.body });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
        const affectedRows = await Jogador.atualizar(id, req.body);
        if (affectedRows === 0) {
        return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.json({ id, ...req.body });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    }   
}

module.exports = jogadorController