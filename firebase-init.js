
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCtsyNIY-OUL907pmnw0cSmbTi2jzA_4wg",
    authDomain: "pinku-digital-point.firebaseapp.com",
    projectId: "pinku-digital-point",
    storageBucket: "pinku-digital-point.firebasestorage.app",
    messagingSenderId: "18176547567",
    appId: "1:18176547567:web:a250cab31f49184c14191a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";
export const auth = getAuth(app);
export const db = getFirestore(app);
