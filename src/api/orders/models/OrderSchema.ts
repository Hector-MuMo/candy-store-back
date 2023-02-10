import mongoose from "mongoose"
import ProductSchema from "../../products/models/productSchema"
import UserSchema from "../../users/models/UserSchema"

const OrderSchema = new mongoose.Schema({
    order_id: String,
    order_payment: String,
    userInfo: UserSchema,
    products: [ProductSchema],
    total_products: Number,
    delivery_type: String,
    status: String
}, {
    id: true,
    toJSON: {
        virtuals: true,
        versionKey: true,
    },
    timestamps: true,
})

export default OrderSchema

