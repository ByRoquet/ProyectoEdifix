const { MongoClient } = require('mongodb');

// CONEXIÓN CORRECTA
const uri = "mongodb+srv://ByRoquet:BOtCKlnzlQWiRV69@cluster0.qleg1my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function probarConexion() {
  try {
    await client.connect();
    console.log("✅ Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("❌ Error de conexión:", error);
  } finally {
    await client.close();
  }
}

probarConexion();