import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDMFSbAZNOGNhd77WLG1FdfJ2WRdksjfJI",
  authDomain: "products-227aa.firebaseapp.com",
  databaseURL: "https://products-227aa.firebaseio.com",
  projectId: "products-227aa",
  storageBucket: "",
  messagingSenderId: "695229798995",
  appId: "1:695229798995:web:9aefd69629c1b9b4"
};
const fire = firebase.initializeApp(config);
export default fire;
