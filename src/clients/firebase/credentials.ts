import admin from 'firebase-admin'
import credentialsFirebase from './credentialsFirebase.json'

const myAdmin = admin.initializeApp({
  credential: admin.credential.cert(credentialsFirebase),
  storageBucket: 'infocep-cad3e.appspot.com'
})

export default { myAdmin }
