import {elementos} from "./elem.js"
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-/firestore.js";  


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
    const id = elementos.inputId.value;
    const nombre = elementos.inputNombre.value;
    const apellido = elementos.inputApellido.value;
    const edad = elementos.inputEdad.value; 
});