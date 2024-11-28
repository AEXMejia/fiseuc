const express = require('express');
const app = express();
const cors = require('cors');
const getAlumno = require('./query/getAlumno');
const geMaterias = require('./query/getMaterias');
const getCalificaciones = require('./query/getCalificaciones');
const setLogin = require('./query/setLogin');
const updateAlumno = require('./query/updateAlumno');
const updatePassword = require('./query/updatePassword');

app.use(cors());
app.use(express.json()); // Necesario para procesar JSON en el cuerpo de la solicitud

app.use('/alumno/:id', getAlumno);
app.use('/materias/:id', geMaterias);
app.use('/calificaciones/:id', getCalificaciones);
app.post('/update/alumno/simple/', updateAlumno)
app.post('/update/alumno/password/', updatePassword)

app.post('/login', setLogin);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
