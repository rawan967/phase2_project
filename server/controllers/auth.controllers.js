const Head = require ('../model/head.model.js') ;
const  Member= require('../model/member.model.js') ;
const middleware = require('../middleware/auth.middleware.js');


const login = async (req, res) => {
    const {name, password} = req.body;
    if (!name || !password) {
        return res.status(400).json({ error: 'Name and password are required' });
    }
    const head = await Head.findOne({ where: {name, password } });
    if (head) {
    const token_head = await middleware.token(
        head.id,
        head.name,
        head.committee,
        'head');

        console.log(token_head); 
        return res.status(200).json({ message: 'Login successful', head, token_head });
    }

    const member = await Member.findOne({ where: { name: name, password: password } });
    if (member) {
        const token_member = await middleware.token(
           member.id,
            member.name,
            member.committee,
            'member',
        );
        console.log(token_member);
        return res.status(200).json({ message: 'Login successful', member, token_member });
    }
    return res.status(401).json({ error: 'Invalid Name or Password'  });  
};

module.exports = {
    login
}