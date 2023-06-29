const { conn } = require("../config/conn");


const findAll = async() => {

    try {
        // const [rows] = await conn.query("SELECT * FROM pokemon WHERE pok_id >= ? && pok_id <= ?", { inicio, final });
        const [rows] = await conn.query("SELECT * FROM pokemon");
        // SELECT * FROM `pokemon` WHERE pok_id >= 0 && pok_id<=5;
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
};

const findOne = async(params) => {
    // const { id } = params;
    const { pok_id } = params;
    try {
        const [rows] = await conn.query("SELECT * FROM pokemon WHERE ?", { pok_id });
        // console.log("intentando conseguir el pokemon " + pok_id + id)
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
};


module.exports = {
    findAll,
    findOne,
};