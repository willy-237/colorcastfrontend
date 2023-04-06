import ClientModel from "../Model/clientModel.js";
import  jwt  from "jsonwebtoken";
import { expressjwt} from "express-jwt"

const signin = async (req, res) => {
    try{
        let client = await ClientModel.findOne({"email": req.body.email});
        if(!client){
            return res.status(401).json({
                error: "Compte client inconnu"
            });
        }

        if(!client.authenticate(req.body.password)){
            return res.status(401).send({ error: "l'email ou le mot de passe ne correspondent pas"})
        }

        const token = jwt.sign({ _id: client._id, status: client.status, name: client.name}, "topSecret");
        

        res.cookie("t", token, {expire: new Date() + 9999 });

        return res.json({
            message: `Welcome ${client.name}`,
            token,
            user: {
                _id: client._id,
                name: client.name,
                email: client.email
            }
        })
    }catch(err){
        return res.status(401).json({error: "Nous n'avons pas pu vous inscrire"});
    }
}

const signout = (req, res) => {
    res.clearCookie("t")
        return res.status(200).json({
            message: "signed out"
        })
}

const requireSignin = expressjwt({
    secret: "topSecret",
    algorithms: ['HS256']
})

export default { signin, signout}