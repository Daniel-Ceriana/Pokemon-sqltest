const model = require("../models/Pokemon");

const findAll = async() => {
    return model.findAll();
};

const findOne = async(params) => {
    const rows = await model.findOne(params);

    if (rows.length > 0) {
        return rows[0];
    }

    return "No existe el registro";
};



module.exports = {
    findAll,
    findOne,
};