import mongoose from "mongoose";

export const GymSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    address: {type: String,require: true},
    location:{type: String, require: true}
})

export default mongoose.model.Gym|| mongoose.model('Gym',GymSchema)