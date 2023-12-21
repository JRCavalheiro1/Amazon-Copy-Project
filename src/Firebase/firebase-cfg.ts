import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//configuração do aplicativo firebase
const firebaseConfig = {
  apiKey: "AIzaSyDzf_WT6IKGE38TaGSlOnK9NuphTmZK4nI",
  authDomain: "cursofb-bdd6f.firebaseapp.com",
  databaseURL: "https://cursofb-bdd6f-default-rtdb.firebaseio.com",
  projectId: "cursofb-bdd6f",
  storageBucket: "cursofb-bdd6f.appspot.com",
  messagingSenderId: "674178809432",
  appId: "1:674178809432:web:7a8e79d86998cbec05542d",
  measurementId: "G-LZT98THB94"
};

//inicializa o app
const appConfig = initializeApp(firebaseConfig);
export const auth = getAuth (appConfig);
