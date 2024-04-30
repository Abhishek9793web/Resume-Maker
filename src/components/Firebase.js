//src/firebase.js
import firebase from 'firebase/compat/app'; // Use compat for older versions
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: 'AIzaSyBFI6-260LBz9jzUCZe9D_4lgl7yWPrj74',
  authDomain: 'project-5af5d.firebaseapp.com',
  projectId: 'project-5af5d',
  storageBucket: 'project-5af5d.appspot.com',
  messagingSenderId: '669927272304',
  appId: '1:669927272304:web:00b8be537797be4a90a9b5',
};


firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore(); 
export const auth = app.auth();
export default app;
export {  firestore, firebase };



