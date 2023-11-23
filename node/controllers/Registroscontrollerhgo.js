import Registromodelhgo from "../models/Registromodelshgo.js"

//Método para mostrar los registros (Nacional)
export const getAllRegisterhgo= async (req, res)=>{
    try {
        const registroshgo= await Registromodelhgo.findAll()
        res.json({registroshgo})
    } catch (error) {
        res.json({message: error.message})
        
    }
}