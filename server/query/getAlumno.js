const db = require('../db/conex');

module.exports = async (req, res) => {
    const id = req.params.id;
    const connection = await db;
    const [alumno] = await connection.query('SELECT * FROM `v_alumno_informacion` WHERE `Matricula` = ?', [id]);
    res.json(alumno);
};


