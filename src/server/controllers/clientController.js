
import errorHandler from "../ErrorHelpers/errorHelpers.js";
import ClientModel from "../Model/clientModel.js"


//fonction pour créer un utilisateur
const createClient = async (req, res) =>{
    const client = new ClientModel(req.body)
    try{
        await client.save();
        client.hashed_password = undefined
        client.salt = undefined;
        return res.status(200).json({
            message: "Client successfully created",
            clientCreated: client
        })
    }catch(err){
        return res.status(400).json({
            error:  errorHandler.getErrorMessage(err)
        })
    }
};

export default { createClient };