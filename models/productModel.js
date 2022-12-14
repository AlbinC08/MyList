import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    
    productName: {
        type:String,
        required: [true, "Pas de nom de produit"]
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "List",
    },
})

const productModel = mongoose.model('Product', productSchema)
export default productModel