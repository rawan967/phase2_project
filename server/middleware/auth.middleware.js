const jwt =  require('jsonwebtoken');
// const token = async (id, name, committee, role) =>{
//     return jwt.sign({ id, name, committee, role }, '666', { expiresIn: '1d' });
// }


async function token(id, name, committee, role) {
    return jwt.sign({ id, name, committee, role }, '666', { expiresIn: '7d' });
}
function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Access denied' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, '666');
        console.log(decoded);
        req.user = decoded;
    
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}
function checkRole(role){
    return (req, res, next) => {
        if(req.user.role != role){
             return res.status(403).json({message: "Forbidden"});
        }
        next();
    }
}
module.exports ={ 
    checkRole,
    verifyToken,
    token,
    };