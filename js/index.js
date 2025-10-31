import {elementos} from "./elem.js"
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  import { 
    getFirestore,
    doc, 
    setDoc   
  } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";  

console.log("object");


  const firebaseConfig = {
    apiKey: "AIzaSyBrldFx3HjJ0a_T5h6mgqvpavQUjgZaxDw",
    authDomain: "clase3a-24962.firebaseapp.com",
    projectId: "clase3a-24962",
    storageBucket: "clase3a-24962.firebasestorage.app",
    messagingSenderId: "362905420270",
    appId: "1:362905420270:web:ac2d865417cbf39a978eff",
    measurementId: "G-BEW9MS52F2"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

elementos.btnRegistrar.addEventListener('click', async()=>{
    try {
        await setDoc(doc(db, "test", elementos.inputId.value), {
            nombre: elementos.inputNombre.value,
            apellido: elementos.inputApellido.value,
            edad: elementos.inputEdad.value
        });
    }catch (error) {
        console.error("Error adding document: ", error);
    }   
});

