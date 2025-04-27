const { MongoClient } = require('mongodb');

// URI que ya sabes que funciona
const uri = "mongodb+srv://ByRoquet:BOtCKlnzlQWiRV69@cluster0.qleg1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function crearUsuarios() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db("proyectoedifix"); // Nombre de tu base de datos
    const usuarios = db.collection("usuarios"); // Creamos o usamos la colección 'usuarios'

    const nuevoUsuario = {
      nombre: "Alan",
      correo: "alan@gmail.com",
      password: "1234"
    };

    const resultado = await usuarios.insertOne(nuevoUsuario);
    console.log(`✅ Usuario creado con ID: ${resultado.insertedId}`);
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await client.close();
  }
}

crearUsuarios();
