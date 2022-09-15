import mongoose from 'mongoose'

const ListSchema = new mongoose.Schema({
    
    ListName: {
        type:String,
        required: [true, "Pas de nom de liste"]
    },
    ListPicture: {
        type:String,
        required: [true, "Pas d'mage"]
    }
})

const ListModel = mongoose.model('List', ListSchema)
export default ListModel