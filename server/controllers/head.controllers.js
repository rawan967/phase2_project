import Head from '../model/head.model.js';

const getALll = async (req, res) => {
    const heads = await Head.findAll();
    return res.json(heads)
}

module.exports = {
    getALll
}