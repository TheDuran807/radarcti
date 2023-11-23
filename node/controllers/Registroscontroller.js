import Registromodel from "../models/Registromodels.js";

//Método para mostrar los registros (Nacional)
export const getAllRegister= async (req, res)=>{
    try {
        const registros= await Registromodel.findAll()
        res.json({registros})
    } catch (error) {
        res.json({message: error.message})
        
    }

    
    
    /*Método para mostrar un registro en especifico 
     export const getRegister = async( req, res)=>{
        try {
            const registro= await Registromodel.findAll({
                where:{id: req.params.id}
            })
            res.json(registro[0])
        } catch (error) {
            res.json({message: error.message})
            
        }
    }*/


}

