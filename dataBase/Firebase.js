import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBcmW-ftivHfzxfcZ_f12F1F4ln4w0ikTQ",
  authDomain: "sr-eats-7721c.firebaseapp.com",
  projectId: "sr-eats-7721c",
  storageBucket: "sr-eats-7721c.appspot.com",
  messagingSenderId: "51615511795",
  appId: "1:51615511795:web:592e146dbdd22293297386"
};

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
firebase.initializeApp(firebaseConfig);

export default firebase;