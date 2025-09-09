import Workers from "../models/workers.model.js";
import Admin from "../models/admin.model.js";
import { nanoid } from "nanoid";

export const registerWorker = async(req,res)=>{
    try {
        const {name,email,aadharCard,phoneNumber,age,gender,password} = req.body;
        if(!name || !email || !aadharCard || !phoneNumber || !age || !gender || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const existingWorker = await Workers.findOne({$or:[{email},{aadharCard}]});
            if(existingWorker){
                return res.status(400).json({message:"Worker already exists"});
            }
            const id = nanoid(5); 
            const password = await bcrypt.hash(password, 10);
            const worker = await Workers.create({
                id: id,
                name,
                email,
                aadharCard,
                phoneNumber,
                age,
                gender,
                password: password,
            })
            const token = jwt.sign({id:worker.id}, process.env.JWT_SECRET, {expiresIn:'24h'});
            return res.status(201).json({message:"Worker registered successfully", worker, token});
        }
    } catch (error) {
        console.log("Error in registerWorker:",error);
        return res.status(400).json({message:"Error in registerWorker"});
    }
}

export const loginWorker = async(req,res)=>{
    try {
        const {id,password} = req.body;
        if(!id || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const worker = await Workers.findOne({id});
            if(!worker){
                return res.status(400).json({message:"Invalid id"});
            }
            const isMatch = await bcrypt.compare(password, worker.password);
            if(!isMatch){
                return res.status(400).json({message:"Invalid password"});
            }
            const token = jwt.sign({id:worker.id}, process.env.JWT_SECRET, {expiresIn:'24h'});
            return res.status(200).json({message:"Login successful", token});
        }
    } catch (error) {
        console.log("Error in loginWorker:",error);
        return res.status(400).json({message:"Error in loginWorker"});
    }
}

export const getAllWorkers = async(req,res)=>{
    try {
        const workers = await Workers.find();
        return res.status(200).json({message:"All workers fetched successfully", workers});
    } catch (error) {
        console.log("Error in getAllWorkers:",error);
        return res.status(400).json({message:"Error in getAllWorkers"});
    }
}

export const getWorkerById = async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const worker = await Workers.findOne({id});
            if(!worker){
                return res.status(400).json({message:"Invalid id"});
            }
            return res.status(200).json({message:"Worker fetched successfully", worker});
        }
    } catch (error) {
        console.log("Error in getWorkerById:",error);
        return res.status(400).json({message:"Error in getWorkerById"});
    }
}

export const updateWorker = async(req,res)=>{
    try {
        const {previousPassword, password, mobileNumber} = req.body;
        if(!previousPassword || !password || !mobileNumber){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const worker = await Workers.findOne({id: req.user.id});
            if(!worker){
                return res.status(400).json({message:"Invalid id"});
            }
            if(await bcrypt.compare(previousPassword, worker.password)){
                const password = await bcrypt.hash(password, 10);
                const worker = await Workers.findOneAndUpdate({id: req.user.id},{password, mobileNumber});
                return res.status(200).json({message:"Password updated successfully", worker});
            }
            else{
                return res.status(400).json({message:"Invalid password"});
            }
        }
    } catch (error) {
        console.log("Error in updateWorker:",error);
        return res.status(400).json({message:"Error in updateWorker"});
    }
}

export const deleteWorker = async(req,res)=>{
    try {
        const worker = await Workers.findOne({id: req.user.id});
        if(!worker){
            return res.status(400).json({message:"Invalid id"});
        }
        await Workers.findOneAndDelete({id: req.user.id});
        return res.status(200).json({message:"Worker deleted successfully"});
    } catch (error) {
        console.log("Error in deleteWorker:",error);
        return res.status(400).json({message:"Error in deleteWorker"});
    }
}

