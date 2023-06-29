const { json } = require("express");
const service = require("../services/pokemonService");

const index = async(req, res) => {
    try {
        const rows = await service.findAll();
        res.render("pokemon", { rows });
    } catch (error) {
        console.log("No se pudo acceder a los datos");
    }


    // res.send({ rows })
};

const show = async(req, res) => {
    const rows = await service.findOne(req.params);
    res.json(rows);
};



module.exports = {
    index,
    show,
};