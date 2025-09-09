import mongoose from "mongoose";

const workersSchema = new mongoose.Schema({
  id:{
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  aadharCard: {
    type: Number,
    required: true,
    unique: true,
    minLength: [12, "Should be of length 12"],
    maxLength: [12, "Should be of length 12"],
  },
  phoneNumber:{
    type: Number,
    required: true, 
    unique: true,
    minLength: [10, "Should be of length 10"],
    maxLength: [10, "Should be of length 10"],
  },
  age:{
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  admin:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  }
});

const Workers =  mongoose.model("Workers", workersSchema);
export default Workers;