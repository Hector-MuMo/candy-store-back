import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    phone: String,
    address: {
        street: String,
        suburb: String,
        zip: String,
        city: String,
        state: String,
        country: String,
    },
    RFC: String
}, {
    id: true,
    toJSON: {
        virtuals: true,
        versionKey: true,
    },
    timestamps: true,
})

export default UserSchema