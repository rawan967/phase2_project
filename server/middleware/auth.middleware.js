const jwt =  require('jsonwebtoken');
const app = require('express');
app.use(express.json());

const token = async (id, name, committee, role) =>{
    return jwt.sign({ id, name, committee, role }, '666', { expiresIn: '1d' });
}

function isAdmin(req, res, next) {  
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];   
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }       
    try {
        const decoded = jwt.verify(token, 'secretKey');    
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}



module.exports ={ token,
                  isAdmin };