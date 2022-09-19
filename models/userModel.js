import mongoose from 'mongoose'

/******** SCHEMA A RESPECTER POUR CREER UN UTILISATEUR **********/

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "pas de Nom"]
    },
    firstname: {
        type:String,
        required: [true, "Pas de prenom"]
    },
    mail: {
        type: String,
        required: [true, "pas de mail"]
    },
    password: {
        type: String,
        required: [true, "pas de mot de passe"]
    },
    pokemon: []
})

const userModel = mongoose.model('user', userSchema)
export default userModel