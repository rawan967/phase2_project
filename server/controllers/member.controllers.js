import Member from '../model/member.model.js';
import middleware from '../middleware/auth.middleware.js';

const login = async (req, res) => {
    const { name, password } = req.body;
    // if any of the two fields are empty
    if (!name || !password) {
        return res.status(400).json({ error: 'Name and password are required' });
    }
    const member = await Member.findOne({ where: { name: name, password: password } });
    if (member) {

        return res.status(200).
        json({
            message: 'Login successful', 
            member, 
            token:  middleware.token(
            id = member.id,
            name = member.name,
            committee = member.committee,
            role = 'member',
        )
         });
    } else {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
}
const getALll = async (req, res) => {
    const members = await Member.findAll();
    return res.json(members)
}
const getById = async (req, res) => {
    const id = req.body.id;
    const member = await Member.findByPk(id);
    return res.json(member)
}
const getByCommittee = async (req, res) => {
    const committee = req.body.committee;
    const members = await Member.findAll({ where: { committee: committee},
        order : [['score', 'DESC']]
    });
    return res.json(members)
}

const AddMember = async (req, res) => {
    const { name, password, committee, score } = req.body;
    const exist = await member.findByPk(id);
    if (exist) {
        return res.status(400).json({ error: 'Member with this ID already exists' });
    }
    const newMember = await Member.create({ name, password, committee, score });
    return res.status(201).json(newMember);
}

const deleteMember = async (req, res) => {
    const id = req.body.id;
    const foundMember = await Member.findByPk(id);
     if(!foundMember) {
        return res.status(404).json({ message: 'Member not found' });
     }
    await Member.destroy({ where: { id: id } });
    return res.status(200).json({ message: 'Member deleted successfully' });
};

const update = async(req,res)=>{
    const { id, name, password, committee, score } = req.body;
     const foundMember = await Member.findByPk(id);
     if(!foundMember) {
        return res.status(404).json({ message: 'Member not found' });
     }
     await Member.update({ name, password, committee, score }, { where: { id: id } });
     return res.status(200).json({ message: 'Member updated successfully' });
}

    module.exports = {
    login,
    getALll,
    getById,
    getByCommittee,
    AddMember,
    deleteMember,
    update
}

