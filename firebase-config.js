const firebaseConfig = {
  apiKey: "AIzaSyByurVc4iWvu1CsoeLSyeErKszQhafCk0w",
  authDomain: "invoice-tool-access.firebaseapp.com",
  projectId: "invoice-tool-access",
  storageBucket: "invoice-tool-access.firebasestorage.app",
  messagingSenderId: "61154350236",
  appId: "1:61154350236:web:4d5e2b4b748826ef250959"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();