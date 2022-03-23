import jwt from 'jsonwebtoken';

//Signing the refresh token
export const createRefreshToken = (data) => {
    return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '1yr'});
}