import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

//Create account
export const createAccount = async data => {
    try{
        const hashedPassword = await bcrypt.hash(data.password, 12);
        const newUser = await User.create({ ...data, password: hashedPassword });

        return newUser;
    }catch(error){
        throw new Error(error);
    }
}

//Login
export const loginUser = async username => {
    try{
        const user = await User.findOne({ username });

        return user;
    }catch(error){
        throw new Error(error);
    }
}