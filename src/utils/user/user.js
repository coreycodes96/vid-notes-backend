import User from "../../models/user.model.js";
import bcrypt from "bcryptjs";

//Check username
export const isUsername = async username => {
    try{
        const checkUsername = await User.countDocuments({username});

        return checkUsername === 0 ? false : true;
    }catch(error){
        throw new Error(error);
    }
}

//Check password
export const isPassword = async (username, password) => {
    try{
        //Check if the password correct
        const user = await User.findOne({ username }, 'password');
        const doesPasswordExist = await bcrypt.compare(password, user.password);

        return doesPasswordExist;
    }catch(error){
        throw new Error(error);
    }
}