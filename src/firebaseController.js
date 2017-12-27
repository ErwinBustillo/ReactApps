import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDH8LCVGBJ7C1OfRmcaa3dvlxin3gH0OEg",
  authDomain: "administracion-tienda.firebaseapp.com",
  databaseURL: "https://administracion-tienda.firebaseio.com",
  projectId: "administracion-tienda",
  storageBucket: "administracion-tienda.appspot.com",
  messagingSenderId: "271437402233"
};
firebase.initializeApp(config);

const database = firebase.database();

const platillos = database.ref('/alimentos');
const bebidas = database.ref('/bebidas');

const datos = {platillos, bebidas};

export default datos;
