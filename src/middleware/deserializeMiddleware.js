import jwt from "jsonwebtoken";
import util from "util";

import { createAccessToken } from '../utils/jwt/createAccessToken.js';

const verify = util.promisify(jwt.verify);

//middleware
const deserializeMiddleware = async (req, res, next) => {
    const accessToken = req.headers["authorization"]?.split(" ")[1];
    const refreshToken = req.headers["x-refresh"]?.split(" ")[1];

    //If the access token does not exist
    if (!accessToken) return next();

    try {
        //Decoding the access token
        const decoded = await verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        //Setting the data from the access token
        res.locals.user = decoded;
    } catch (error) {
        //If the access token is invalid
        if (error.message === "jwt expired" && refreshToken) {
            //Verifying the refresh token
            const user = await verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
                .catch(() =>
                    res.status(401).send("Cannot refresh token")
                );

            //Setting that access token data
            const tokenData = {
                'id': user.id,
                'username': user.username,
            };

            //Creating a new access token
            const accessToken = createAccessToken(tokenData);

            //Setting the new access token to the header
            res.setHeader("x-access", accessToken);

            //Setting the access token
            res.locals.user = user;

            return next();
        }
    }

    next();
};

export default deserializeMiddleware;