import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    
    productName: {
        type:String,
        required: [true, "Pas de nom de produit"]
    },
})

const ListModel = mongoose.model('List', productSchema)
export default ListModel