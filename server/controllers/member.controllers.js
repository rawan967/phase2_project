const  Member= require('../model/member.model.js') ;


const getMyScore = async (req, res) => {
    const member = await Member.findByPk(req.user.id);
    if (!member) {
        return res.status(404).json({ error: 'Member not found' });
    }
    return res.json({ score: member.score });
};

const getCommitteeScoreboard = async (req, res) => {
    const other_members = await Member.findAll({ where: { committee: req.user.committee},
        order : [['score', 'DESC']]
    });
   const scoreboard = other_members.map((m, i) => ({
    rank: i + 1,
    name: m.name,
    score: m.score,
   }));
   return res.status(200).json(scoreboard);
};

    module.exports = {
    getMyScore,
    getCommitteeScoreboard,
    }

