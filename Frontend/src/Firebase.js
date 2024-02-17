import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAqy2DQnP4ymSdmoar2kYQUCdfZum15g2g",
  authDomain: "resumescorer-c4951.firebaseapp.com",
  projectId: "resumescorer-c4951",
  storageBucket: "resumescorer-c4951.appspot.com",
  messagingSenderId: "167203874711",
  appId: "1:167203874711:web:e6d634ca838e8ef7ac86d2"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);