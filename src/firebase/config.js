import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDO6UOBaxvhvA5nwpp8NbNNnV6H8N-T8hY',
  authDomain: 'usuarios-6ba4d.firebaseapp.com',
  databaseURL: 'https://usuarios-6ba4d.firebaseio.com',
  projectId: 'usuarios-6ba4d',
  storageBucket: 'usuarios-6ba4d.appspot.com',
  messagingSenderId: '894362525072',
  appId: '1:894362525072:web:ee97f15da78e18bc026715',
  measurementId: 'G-JJRYJS7ZSW',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { db, auth, timestamp };
