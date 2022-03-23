import { 
    createAnAccountValidation,
    loginValidation,
} from "../validation/user.validation.js";
import {isUsername, isPassword} from "../utils/user/user.js";
import { createAccount, loginUser } from "../services/user.service.js";
import {createAccessToken} from "../utils/jwt/createAccessToken.js";
import {createRefreshToken} from "../utils/jwt/createRefreshToken.js";

export const createAnAccount = async (req, res) => {
    const { username } = req.body;

    try{
        //Validation
        const { error } = createAnAccountValidation(req.body);
        if (error?.details.length > 0) return res.status(422).json({ validation: error.details });

        //Checking if username already exists
        if(await isUsername(username)) return res.status(422).json({username: "Sorry this username already exists"});

        //Create account
        await createAccount(req.body);

        return res.status(201).json('Your account has been successfully created');
    }catch(error){
        throw new Error(error);
    }
}

export const login = async (req, res) => {
    const {username, password} = req.body;

    try{
        //Validation
        const { error } = loginValidation(req.body);
        if (error?.details.length > 0) return res.status(422).json({ validation: error.details });

        //Check if the user exists
        if (!await isUsername(username)) return res.status(422).json({username: 'Your username doesn\'t exist' });
        if (!await isPassword(username, password)) return res.status(422).json({password: 'Your password does not match' });

        //Getting the user
        const user = await loginUser(username);

        //Setting the data
        const data = {
            'id': user._id,
            'username': user.username,
        };

        //Creating an access token
        const accessToken = createAccessToken(data);

        //Creating a refresh token
        const refreshToken = createRefreshToken(data);

        return res.status(200).json({ data, accessToken, refreshToken });
    }catch(error){
        throw new Error(error);
    }
}