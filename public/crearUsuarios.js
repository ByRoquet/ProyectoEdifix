const { MongoClient } = require('mongodb');

// URI con tu usuario y contraseña
const uri = "mongodb+srv://ByRoquet:BOtCKlnzlQWiRV69@cluster0.qleg1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function crearUsuarios() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB");

    const db = client.db("proyectoedifix"); // Nombre de tu base de datos
    const usuarios = db.collection("usuarios"); // Creamos o usamos la colección 'usuarios'

    // Crear índices únicos para los campos 'correo' y 'nombre'
    await usuarios.createIndex({ correo: 1 }, { unique: true });
    await usuarios.createIndex({ nombre: 1 }, { unique: true });

    // Aquí cambia los valores según el nuevo usuario que quieras agregar
    const nuevoUsuario = {
      nombre: "AlanJosue",      // Cambia el nombre
      correo: "alanJ@gmail.com",  // Cambia el correo
      password: "abcd1234"    // Cambia la contraseña
    };

    try {
      // Intentamos insertar el usuario
      const resultado = await usuarios.insertOne(nuevoUsuario);
      console.log(`✅ Usuario creado con ID: ${resultado.insertedId}`);
    } catch (insertError) {
      if (insertError.code === 11000) {
        console.error("❌ Error: El correo o nombre de usuario ya existe.");
      } else {
        console.error("❌ Error inesperado:", insertError);
      }
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await client.close();
  }
}

crearUsuarios();

//Hector estuvo aqui, ctm gabo

