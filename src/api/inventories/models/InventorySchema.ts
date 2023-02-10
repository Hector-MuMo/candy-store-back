import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
    product_id: String,
    stock: Number,
    location: String
}, {
    id: true,
    toJSON: {
        virtuals: true,
        versionKey: true
    }
})

export default InventorySchema