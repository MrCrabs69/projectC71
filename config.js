import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCVDfqBIA6GVYxQ0tAVygYyz6aRBgH97mk",
  authDomain: "complaintfourm.firebaseapp.com",
  projectId: "complaintfourm",
  storageBucket: "complaintfourm.appspot.com",
  messagingSenderId: "576691618365",
  appId: "1:576691618365:web:4ff5337f92972681bea054"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

