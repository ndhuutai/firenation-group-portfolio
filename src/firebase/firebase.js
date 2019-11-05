import * as firebase from 'firebase/app';
import firebaseConfig from './config/firebaseConfig';

import "firebase/auth";
import "firebase/database";

export default firebase.initializeApp(firebaseConfig);