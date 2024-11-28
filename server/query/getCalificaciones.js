const db = require('../db/conex');

module.exports = async (req, res) => {
    const id = req.params.id;
    const connection = await db;
    const [materias] = await connection.query('SELECT * FROM `v_alumno_calificaciones` WHERE Matricula = ?', [id]);
    res.json(materias);
};


