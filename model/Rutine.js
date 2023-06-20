import mongoose from "mongoose";

export const RutineSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    channel: { type: String, required: true},
    url:{type: String, required: true},
    category:{type: String, required: true}
    
})

export default mongoose.model.Rutine|| mongoose.model('Rutine',RutineSchema)