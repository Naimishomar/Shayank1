import mongoose from "mongoose";

const minesSchema = new mongoose.Schema({
    mineId:{
        type: Number,
        required: true,
        unique: true,
    },
    mineName:{
        type: String,
        required: true,
    },
    mineDescription:{
        type: String,
        required: true,
    },
    mineLocation:{
        type: String,
        required: true,
    },
    mineOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    }
});

const Mines =  mongoose.model("Mines", minesSchema);
export default Mines;