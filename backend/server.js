// 1. Importamos los módulos necesarios
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

// 2. Inicializamos Express
const app = express();

// 3. Usamos dotenv para leer las variables del archivo .env (más adelante)
dotenv.config();

// 4. Middleware: permite recibir datos en formato JSON y habilitar CORS
app.use(express.json());
app.use(cors());

// 5. Creamos la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', // Contraseña del root
    database: 'beatdate'
});

// 6. Nos conectamos a la base y mostramos si funcionó o no
db.connect(err => {
    if (err) {
        console.error('❌ Error al conectar a la base de datos:', err);
    } else {
        console.log('✅ Conectado a la base de datos MySQL (beatdate)');
    }
});

// 7. Ruta de prueba para verificar que el servidor funciona
app.get('/', (req, res) => {
    res.send('Servidor backend de BeatDate en funcionamiento 🎶');
});
// Ruta para manejar el login
app.post('/login', (req, res) => {
    const { nombre_usuario, password } = req.body;

    console.log('📨 Datos recibidos desde el formulario:', req.body);

    // Validación básica
    if (!nombre_usuario || !password) {
        return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    // Consulta a la base de datos
    const query = 'SELECT * FROM usuarios WHERE nombre_usuario = ? AND password = ?';
    db.query(query, [nombre_usuario, password], (err, resultados) => {
        if (err) {
            console.error('❌ Error en la consulta SQL:', err);
            return res.status(500).json({ mensaje: 'Error interno del servidor' });
        }

        if (resultados.length > 0) {
            // Usuario encontrado
            res.json({ mensaje: 'Login exitoso', usuario: resultados[0] });
        } else {
            // Usuario no encontrado o contraseña incorrecta
            res.status(401).json({ mensaje: 'Usuario o contraseña incorrectos' });
        }
    });
});

// Ruta para registrar un nuevo usuario
app.post('/registro', (req, res) => {
    const { nombre_usuario, email, password, rol } = req.body;

    // Validación básica
    if (!nombre_usuario || !email || !password || !rol) {
        return res.status(400).json({ mensaje: 'Faltan datos' });
    }

    // Verificamos si el usuario ya existe
    const verificarQuery = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(verificarQuery, [email], (err, resultados) => {
        if (err) {
            console.error('❌ Error al verificar usuario:', err);
            return res.status(500).json({ mensaje: 'Error del servidor' });
        }

        if (resultados.length > 0) {
            return res.status(409).json({ mensaje: 'El usuario ya existe' });
        }

        // Si no existe, lo insertamos
        const insertarQuery = 'INSERT INTO usuarios (nombre_usuario, email, password, rol) VALUES (?, ?, ?, ?)';
        db.query(insertarQuery, [nombre_usuario, email, password, rol], (err, resultado) => {
            if (err) {
                console.error('❌ Error al insertar usuario:', err);
                return res.status(500).json({ mensaje: 'Error al registrar usuario' });
            }

            res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
        });
    });
});


// 8. Levantamos el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
