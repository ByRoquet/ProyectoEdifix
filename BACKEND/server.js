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

// Conectar a MongoDB al iniciar el servidor
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


//Hola