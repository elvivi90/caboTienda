import "firebase/database";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyD1HT43l-IphxAipXp6IDcXhDLQ-6whQmY",
  authDomain: "cabotiendaaccounting.firebaseapp.com",
  databaseURL: "https://cabotiendaaccounting-default-rtdb.firebaseio.com",
  projectId: "cabotiendaaccounting",
  storageBucket: "cabotiendaaccounting.appspot.com",
  messagingSenderId: "1063456210718",
  appId: "1:1063456210718:web:d952640d2e377e9071d30f",
  measurementId: "G-5ED4HZQJMK"
};



const app = initializeApp(firebaseConfig);  

const fireDB = getDatabase(app);


export default fireDB;