const db = require('../db/conex');

module.exports = async (req, res) => {
    const { id, password } = req.body;
    const connection = await db;
    const [alumno] = await connection.query('SELECT id_alumno, Matricula FROM `alumnos` WHERE (`Matricula` = ? OR `Correo` = ?) AND `password` = ?', [id,id,password]);
    if (alumno.length === 1) {
        res.json({ message: 'Login exitoso', user: alumno[0] });
    } else {
        const [maestro] = await connection.query('SELECT id_profesor, Matricula FROM `profesores` WHERE (`Matricula` = ? OR `Correo` = ?) AND `password` = ?', [id,id,password]);
        if (maestro.length === 1) {
            res.json({ message: 'Login exitoso', user: maestro[0] });
        } else {
            res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }
    }
};