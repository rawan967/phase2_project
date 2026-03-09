const Head = require ('../model/head.model.js') ;
const Member = require('../model/member.model.js') ;
const middleware = require('../middleware/auth.middleware.js');


const getAll = async (req, res) => {
    if(req.user.role != 'head'){
        return res.status(403).json({message: "Forbidden"});
    }
    const committee = req.user.committee;
    const members = await Member.findAll({ where: { committee: committee},
        order : [['score', 'DESC']]
    });
    return res.json(members)
}
const getById = async (req, res) => {
    const id = req.params.id;
    const committee = req.user.committee;
    const member = await Member.findOne({ where: { id: id, committee: committee } });
    if(!member) {
        return res.status(404).json({ message: 'Member not found' });
    }
        return res.json(member)
}

const AddMember = async (req, res) => {
    const { name, password, committee, score } = req.body;

        if (!name || !password || !committee || score === undefined) {
             return res.status(400).json({ error: 'All fields are required' });
        }
        if (committee !== req.user.committee){
                return res.status(403).json({message:"You can only add members in your committee"});
            }
    const newMember = await Member.create({ name, password, committee, score });  
         return res.status(201).json(newMember);
}  
const update = async(req,res)=>{
    const id = req.params.id;
    const { name, password, committee, score } = req.body;
    const foundMember = await Member.findByPk(id);

     if(!foundMember) {
        return res.status(404).json({ message: 'Member not found' });
     }
    if (foundMember.committee !== req.user.committee){
            return res.status(403).json({message:"You can only update members in your committee"});
        }
     await Member.update({ name, password, committee, score }, { where: { id: id} });
     return res.status(200).json({ message: 'Member updated successfully' });
}


const deleteMember = async (req, res) => {
    const id = req.params.id;
    const committee = req.user.committee;
    const foundMember = await Member.findByPk(id);

     if(!foundMember) {
        return res.status(404).json({ message: 'Member not found' });
     }
     if (foundMember.committee !== committee){
            return res.status(403).json({message:"You can only delete members in your committee"});
     }

    await Member.destroy({ where: { id: id} });
    return res.status(200).json({ message: 'Member deleted successfully' });
};


module.exports = {
getAll, 
getById,
AddMember,
update,
deleteMember
}