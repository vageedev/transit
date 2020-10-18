import Rebase from 're-base';
import * as firebase from "firebase";

const config = {
        apiKey: "AIzaSyCBwYUYb9Bc-wLaUPB8TNqIKx2KKgRN0fo",
        authDomain: "transit-5db51.firebaseapp.com",
        databaseURL: "https://transit-5db51.firebaseio.com",
        projectId: "transit-5db51",
        storageBucket: "transit-5db51.appspot.com",
        messagingSenderId: "805709594017",
        appId: "1:805709594017:web:13a9b14201b9f4ec1f5fe0"
    };

const fireDB = firebase.initializeApp(config);


export default fireDB.database().ref();



