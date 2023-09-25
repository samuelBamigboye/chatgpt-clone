import { getApp, getApps, initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN0IInn_mepDI3x7W2H92tU8cXZgBlaR0",
  authDomain: "iclonechatgpt.firebaseapp.com",
  projectId: "iclonechatgpt",
  storageBucket: "iclonechatgpt.appspot.com",
  messagingSenderId: "69249768003",
  appId: "1:69249768003:web:10ac48563a9c2b6c4252f6"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db}