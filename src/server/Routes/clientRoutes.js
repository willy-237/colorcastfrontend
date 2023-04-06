import express from "express";
import clientCtrl from "../controllers/clientController.js";

const router = express.Router();

//route pour créer un utilisateur et afficher la liste des utilisateurs. 
//Il faut etre connecter et authentifier en tant que Admin pour pouvoir creer un autre utilisateur
router.route("/api/clients")
.post(clientCtrl.createClient)

export default router