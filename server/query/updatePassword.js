

const db = require('../db/conex');

module.exports = async (req, res) => {
    const { lastPassword, newPassword, Matricula} = req.body;
    try {
    const connection = await db;
    const [update] = await connection.query('UPDATE `alumnos` SET `password`= ?  WHERE `Matricula` = ? AND password = ?', [newPassword,Matricula,lastPassword,]);
    res.json(update)
    } catch (error) {
        res.Json("No se Actualizo")
    }
};


