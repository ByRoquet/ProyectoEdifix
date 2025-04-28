const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Conexión a MongoDB
const uri = "mongodb+srv://ByRoquet:BOtCKlnzlQWiRV69@cluster0.qleg1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// Ruta de login
app.post('/login', async (req, res) => {
    const { usuario, contra } = req.body;

    try {
        await client.connect();
        const db = client.db("proyectoedifix");
        const usuarios = db.collection("usuarios");

        // Buscar usuario por nombre de usuario
        const usuarioEncontrado = await usuarios.findOne({ nombre: usuario });

        if (usuarioEncontrado) {
            // Comparar la contraseña ingresada con la almacenada en texto plano
            if (contra === usuarioEncontrado.password) {
                res.json({ success: true, message: "Inicio de sesión exitoso" });
            } else {
                res.json({ success: false, message: "Contraseña incorrecta" });
            }
        } else {
            res.json({ success: false, message: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error en el servidor" });
    } finally {
        await client.close();
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});