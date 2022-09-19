import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    
    productName: {
        type:String,
        required: [true, "Pas de nom de produit"]
    },
    list: {
        type: String,
        default: "default"
    },
})

const productModel = mongoose.model('Product', productSchema)
export default productModel