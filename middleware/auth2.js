import jwt from 'jsonwebtoken';
import ENV from '../config.js'
import UserModel from '../model/User.model.js';

/** auth middleware */
export const Auth2 = (roles) => async (req, res, next) =>{
    try {
        
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);
        const userData = await UserModel.findById(decodedToken.userId)
        console.log(userData.role);
        if([].concat(roles).includes(userData.role)){
            next()
        }else{
            res.status(409)
            res.send({ error: "no tiene permiso"})
        }
    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }
}