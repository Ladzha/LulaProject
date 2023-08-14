import jwt from 'jsonwebtoken';

export const roleMiddleware = (role) => {
    return function (request, response, next) {
        console.log(role);
        if(request.method ==='OPTIONS'){
        next()
        }
        try {
        const token = request.headers.authorization.split(' ')[1] //get token from headers
        if(!token){
            return response.status(403).json({message: 'User not has permission'})
        }
        const {role: userRole} = jwt.verify(token, process.env.SECRET_KEY) //verify token
        // request.user = decoded;
        let hasRole = false;
        
        if(userRole === role){
            hasRole = true;
        }
        if(!hasRole){
            return response.status(403).json({message: 'User not has permission'})
        }

        next();
        
        } catch (error) {
        console.log(error);
        return response.status(403).json({message: 'User not has permission'})
        }
    
    }
}