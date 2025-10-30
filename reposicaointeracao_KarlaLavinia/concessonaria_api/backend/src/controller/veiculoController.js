 import { veiculoModels } from "../models/veiculoModels.js";

export const criarVeiculo = async (req, res, next) => {
    
    const { modelo, placa, ano, cor, preco} = req.body

    try {
        if(!modelo){
            const err = new Error("O campo Modelo é obrigatório.");
            err.statusCode = 400;
            throw err;
        }
        if(!placa){
             const err = new Error("O campo placa é obrigatório.");
            err.statusCode = 400;
              throw err;
        }
        if(!ano){
           const err = new Error("O campo ano é obrigatório.");
            err.statusCode = 400;
            throw err;
        }
        if(!cor){
           const err = new Error("O campo cor é obrigatório.");
            err.statusCode = 400;
            throw err;
        }
        if(!preco){
           const err = new Error("O campo preço é obrigatório.");
            err.statusCode = 400;
            throw err;
        }

        const novoVeiculo = await veiculoModels.create({ modelo, placa, ano, cor, preco})
        res.status(201).json({mensagem:"veiculo cadastrado!", novoVeiculo})
    } catch (error) {
        next(error)
    }




};
 
export const listarVeiculos = async (req, res, next) => {
    try{
        const veiculos = await veiculoModels.findAll({
            attributes: ['modelo', 'placa', 'ano','cor', 'preco']
        });
        res.status(200).json({veiculos});
    } catch (error){
       next (error);
    }
}


export const atualizarVeiculo = async (req, res, next) => {
    const { id } = req.params
    const { modelo, placa, ano, cor, preco } = req.body

    try{
        if(!modelo) {
            const err = new Error ("O modelo do veículo é obrigatório")
            err.statusCode = 404
            throw err;

        } 

        const veiculo = await veiculoModels.findByPk(id)
        if(!placa){
            const err = new Error("Veículo não encontrado")
            err.statusCode = 404
            throw err
        }
     if(!ano){
        const err = new Error("Tarefa não encontrada")
        err.statusCode = 404
        throw err
     }
     if(!preco){
        const err = new Error("Veículo não encontrado")
        err.statusCode = 404
        throw err
     }

     if(modelo !== undefined){
            modelo.veiculo = modelo
        }

        if(placa !== undefined){
            placa.veiculo = placa
        }

        if(cor!== undefined){
            cor.veiculo = cor
        }
          if(preco!== undefined){
            preco.veiculo = preco
        }

        await veiculo.save()
        res.status(200).json(veiculo)

    }catch(error){
        next (error)
    }
}

export const deletarVeiculo = async (request, response, next) => {
    const { id } = request.params;
    
    try {
        const veiculo = await veiculoModels.findByPk(id);

        if (!veiculo) {
            const err = new Error("Veículo não encontrado");
            err.statusCode = 404;
            throw err;
        }

        const veiculoDeletado = await veiculoModels.destroy({ where: { id } });

        if (veiculoDeletado === 0) {
            const err = new Error("Veículo não deletado");
            err.statusCode = 400;
            throw err;
        }

        res.status(200).json({ mensagem: "Veículo deletado com sucesso!" });

    } catch (error) {
        next(error);
    }
};
