import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARq4lpSJ8KtNI51M5QXZBy_jB4DHhJTjQ",
    authDomain: "farmers-93b89.firebaseapp.com",
    databaseURL: "https://farmers-93b89.firebaseio.com",
    projectId: "farmers-93b89",
    storageBucket: "farmers-93b89.appspot.com",
    appId: "1:374910634329:web:c6422b33deb61f5aae2448",
    measurementId: "G-TEY0F0FKQ4"
});


const db = firebaseApp.firestore();
export default db;