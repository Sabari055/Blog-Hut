import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDxWodSs_nPdRG5ddibiWBEVtKBq4PWY_c",
    authDomain: "blog-1513f.firebaseapp.com",
    projectId: "blog-1513f",
    storageBucket: "blog-1513f.appspot.com",
    messagingSenderId: "185769437990",
    appId: "1:185769437990:web:78017a076323d07eeb2fe7"
  };

  initializeApp(firebaseConfig)

  const db = getFirestore()

  export {db}