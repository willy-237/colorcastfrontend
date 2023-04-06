import mongoose from "mongoose";
import crypto from "crypto";

const clientSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        match: [/.+\@.+\..+/, "Remplissez l'addresse mail"],
        required: "l'adresse mail est requise"
    },
    hashed_password: {
        type: String,
        required: "Password is required"
    },
    salt: String,
});


//propriété virtuelle pour le mot de passe 
clientSchema.virtual("password").set(function(password){
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function(){
    return this._password;
});


clientSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password){
        if(!password) return '';
        
        try{
            return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
        }catch(err){
            return "";
        }
    },
    makeSalt: function(){
        return Math.round((new Date().valueOf() * Math.random())) + ""
    }
}

//fonction pour valider le mot de passe
clientSchema.path("hashed_password").validate(function(v){
    if(this._password && this._password.length < 6){
        this.invalidate("password", "le mot de passe doit faire au moins 6 caractères")
    }
    if(this.isNew && !this._password){
        this.invalidate("password", "Le mot de passe est requis")
    }
});

//fonction pour verifier si il y a des champs dupliqués
clientSchema.pre("save", async function(next){
    const email = await this.constructor.findOne({
        email: this.email,
    });
    const password_email =  await this.constructor.findOne({
        name: this.name,
        email: this.password,
    });
    
    let message = "";
    
    if(password_email){
        message = 'Ce compte existe déjà';
        return next(new Error(message));
    }else if(email){
        message = 'Cette adresse mail est déjà prise'
        return next(new Error(message));
    }
    
    return next();
        
})





export default mongoose.model("Client", clientSchema)