const admin = require("firebase-admin");
const serviceAccount = require("./serviventa-cfe1f-firebase-adminsdk-nwhqs-d0a6edba34.json"); // Ruta al archivo JSON de credenciales de Firebase Admin SDK
const data = require("./data.json"); // Tu archivo data.json

// Inicializa la aplicación de Firebase Admin con tus credenciales
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/project/serviventa-cfe1f/firestore/databases/-default-/data/~2Fpedidos~2F20sDIIbMgSHpErubGz4D" // URL de tu base de datos en Firebase
});

// Obtiene una referencia a la colección de productos en Firestore
const productsRef = admin.firestore().collection("servicios");

// Itera sobre los productos en el archivo data.json y súbelos a Firebase
data.forEach(async product => {
  try {
    await productsRef.add(product);
    console.log(`Servicio "${product.titulo}" cargado exitosamente.`);
  } catch (error) {
    console.error(`Error al cargar el servicio "${product.titulo}":`, error);
  }
});