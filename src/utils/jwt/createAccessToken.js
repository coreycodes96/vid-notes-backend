import jwt from 'jsonwebtoken';

//Signing the access token
export const createAccessToken = (data) => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15mins' });
}