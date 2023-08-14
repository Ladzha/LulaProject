import jwt from 'jsonwebtoken';

export const authMiddleware = (request, response, next) => {
  if(request.method ==='OPTIONS'){
    next()
  }
  try {
    const token = request.headers.authorization.split(' ')[1] //get token from headers
    if(!token){
      return response.status(401).json({message: 'User not authorized'})
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY) //verify token
    request.user = decoded;
    next();
    
  } catch (error) {
    console.log(error);
    return response.status(401).json({message: 'User not authorized'})
  }

}