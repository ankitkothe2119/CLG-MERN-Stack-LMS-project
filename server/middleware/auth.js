import jwt from 'jsonwebtoken';

export const verifyaToken =async (req, res, next)=>{
    try{
        let token =req.header("Authorization");
        
        if(!token){
            return res.status(403).send("Access Denied");
        }

        if (token.stsrtsWith("Bearer ")){
            token =token.slice(7, token.length).trimLeft();
        }
        const verified =jwt.verify(token, process.env.JWT_SECRET);
        req.user =verified;
        next();

    }catch(err){
        res.ststus(500).json({error: err.message });
    }
}