import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    sku: String,
    name: String,
    description: String,
    brand: String,
    price: String,
    priceComparasion: String,
    cost: String,
    category: String,
    imgs: Array,
    status: String
}, {
    id: true,
    toJSON: {
        virtuals: true,
        versionKey: true,
    },
    timestamps: true,
})

export default ProductSchema