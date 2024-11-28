const db = require('../db/conex');

module.exports = async (req, res) => {
    const id = req.params.id;
    const connection = await db;
    const [materias] = await connection.query('SELECT * FROM `v_alumno_materias` WHERE Matricula = ?', [id]);
    materias.forEach(element => {
        return Array(
            {
                key: element.Codigo,
                label: element.Nombre,
                children: '<b>Maestro:</b>' + element.Profesor,
            }
        )
    });
    res.json(materias);
};


