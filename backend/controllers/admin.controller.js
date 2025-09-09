import Admin from "../models/admin.model.js";
import { nanoid } from "nanoid";

export const registerAdmin = async(req,res)=>{
    try {
        const {name,email,aadharCard,age,gender,password} = req.body;
        if(!name || !email || !aadharCard || !age || !gender || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const existingAdmin = await Admin.findOne({$or:[{email},{aadharCard}]});
            if(existingAdmin){
                return res.status(400).json({message:"Admin already exists"});
            }
            const id = nanoid(5); 
            const password = await bcrypt.hash(password, 10);
            const admin = await Admin.create({
                id: id,
                name,
                email,
                aadharCard,
                age,
                gender,
                password: password,
            })
            const token = jwt.sign({id:admin.id}, process.env.JWT_SECRET, {expiresIn:'24h'});
            return res.status(201).json({message:"Admin registered successfully", admin, token});
        }
    } catch (error) {
        console.log("Error in registerAdmin:",error);
        return res.status(400).json({message:"Error in registerAdmin"});
    }
}

export const loginAdmin = async(req,res)=>{
    try {
        const {id,password} = req.body;
        if(!id || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const admin = await Admin.findOne({id});
            if(!admin){
                return res.status(400).json({message:"Invalid id"});
            }
            const isMatch = await bcrypt.compare(password, admin.password);
            if(!isMatch){
                return res.status(400).json({message:"Invalid password"});
            }
            const token = jwt.sign({id:admin.id}, process.env.JWT_SECRET, {expiresIn:'24h'});
            return res.status(200).json({message:"Login successful", token});
        }
    } catch (error) {
        console.log("Error in loginAdmin:",error);
        return res.status(400).json({message:"Error in loginAdmin"});
    }
}  

export const updateAdmin = async(req,res)=>{
    try {
        const {previousPassword,password} = req.body;
        if(!previousPassword || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const admin = await Admin.findOne({id: req.user.id});
            if(!admin){
                return res.status(400).json({message:"Invalid id"});
            }
            if(await bcrypt.compare(previousPassword, admin.password)){
                const password = await bcrypt.hash(password, 10);
                const admin = await Admin.findOneAndUpdate({id: req.user.id},{password});
                return res.status(200).json({message:"Password updated successfully", admin});
            }
            else{
                return res.status(400).json({message:"Invalid password"});
            }
        }
    } catch (error) {
        console.log("Error in updateAdmin:",error);
        return res.status(400).json({message:"Error in updateAdmin"});
    }
}

export const addWorkers = async (req, res) => {
    try {
        const { workers } = req.body;
        if (!workers || !Array.isArray(workers) || workers.length === 0) {
            return res.status(400).json({ message: "Workers array is required and cannot be empty." });
        }
        const admin = await Admin.findOne({ id: req.user.id });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found." });
        }
        const updatedWorkers = Array.from(new Set([...admin.workers.map(w => w.toString()), ...workers]));
        admin.workers = updatedWorkers;
        await admin.save();
        return res.status(200).json({ message: "Workers updated successfully.", workers: admin.workers });
    } catch (error) {
        console.log("Error in addWorkers:", error);
        return res.status(500).json({ message: "Server error in adding workers." });
    }
};
