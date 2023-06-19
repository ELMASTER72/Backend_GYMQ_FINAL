import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    inCart: { type: Boolean, default: false },
    price: { type: Number, required: true },
})

export default mongoose.model.Product|| mongoose.model('Product',ProductSchema)