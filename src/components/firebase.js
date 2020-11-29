import app from 'firebase/app';//The app variable represents the firebase application.

//We have to import auth and firestore to use the features.
import 'firebase/auth';
import 'firebase/firebase-firestore';

//For firebase config setting, you should use your own application's information.
const config = {
    apiKey: "AIzaSyARq4lpSJ8KtNI51M5QXZBy_jB4DHhJTjQ",
    authDomain: "farmers-93b89.firebaseapp.com",
    databaseURL: "https://farmers-93b89.firebaseio.com",
    projectId: "farmers-93b89",
    storageBucket: "farmers-93b89.appspot.com",
    // appId: "1:374910634329:web:c6422b33deb61f5aae2448",
    // measurementId: "G-TEY0F0FKQ4"
    
  };

class Firebase{

    constructor(){

        app.initializeApp(config)
        this.auth=app.auth()
        this.db=app.firestore()
    }

    isInitialiazed(){
        return new Promise(resolve=>{
            this.auth.onAuthStateChanged(resolve)
        })
    }

    login(email,pass){
        //firebase login function
        console.log(email)
        console.log(pass)
        return this.auth.signInWithEmailAndPassword(email,pass)
    }

    logout(){
        //firebase logout function
        return this.auth.signOut()
    }

    async register(name,email,pass){
        //firebase register function
        await this.auth.createUserWithEmailAndPassword(email, pass)
    
        return this.auth.currentUser.updateProfile({
            displayName:name
        })
    }

    addFruit(fruit){
        //user presence control
        if(!this.auth.currentUser){
            return alert('Not authorized')
        }

        //Adding documents to the collection of pckurdu
        return this.db.doc(`users/${this.auth.currentUser.uid}`).set({
            fruit:fruit
        })
    }

    isInitialized(){
        return new Promise(resolve=>{
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
    }   

    async getCurrentUserFruit() {
		const fruit = await this.db.doc(`users/${this.auth.currentUser.uid}`).get()
		return fruit.get('fruit')
    }

    async getCurrentFarmer(){
        const farmer = await this.db.doc(`farmers/${this.auth.currentUser.uid}`).get()
        return farmer.get()
    }
}


export default new Firebase()