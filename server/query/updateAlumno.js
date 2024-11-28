

const db = require('../db/conex');

module.exports = async (req, res) => {
    const { Nombre, Nacimiento, CURP, Matricula } = req.body;
    try {
    const connection = await db;
    const [update] = await connection.query('UPDATE `alumnos` SET `Nombre`= ? ,`Fecha_nacimiento`=?,`CURP`=? WHERE `Matricula` = ?', [Nombre,Nacimiento,CURP,Matricula]);
    res.json(update)
    } catch (error) {
        res.Json("No se Actualizo")
    }
};


