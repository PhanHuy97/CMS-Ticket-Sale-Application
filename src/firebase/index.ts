import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCObFyQdKYNJDZhu_SbMbWGqHQyM9hjvEM",
    authDomain: "cms-ticket.firebaseapp.com",
    projectId: "cms-ticket",
    storageBucket: "cms-ticket.appspot.com",
    messagingSenderId: "855843575155",
    appId: "1:855843575155:web:989f974f75afe15f452106",
    measurementId: "G-ZVL969WZJT"
};

initializeApp(firebaseConfig)
const database = getFirestore()

export default database