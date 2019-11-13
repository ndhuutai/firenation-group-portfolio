import * as firebase from 'firebase/app';
import firebaseConfig from './config/firebaseConfig';

import "firebase/auth";
import "firebase/database";
import "firebase/storage"

firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export default firebase;