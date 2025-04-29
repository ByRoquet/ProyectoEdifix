const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Sirve archivos estáticos

// Conexión a MongoDB
const uri = "mongodb+srv://ByRoquet:BOtCKlnzlQWiRV69@cluster0.qleg1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
let db;

async function connectToMongoDB() {
    try {
        await client.connect();
        db = client.db("proyectoedifix");
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        process.exit(1);
    }
}
connectToMongoDB();

// Configura el middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Ruta para la página principal
app.get('/principal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'principal.html'));
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Buscar usuario en la base de datos
        const user = await db.collection('usuarios').findOne({ 
            nombre: username, // Cambiado para coincidir con tu estructura de DB
            password: password   // En producción, usa hash (bcrypt)!
        });
        
        if (user) {
            // Login exitoso
            res.json({ success: true });
            message: 'Exitooooo'
        } else {
            // Credenciales incorrectas
            res.status(401).json({ 
                success: false, 
                message: 'Usuario o contraseña incorrectos' 
            });
        }
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error del servidor' 
        });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});