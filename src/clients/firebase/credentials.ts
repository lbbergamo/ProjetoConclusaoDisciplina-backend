import admin from 'firebase-admin'
import serviceAccount from './firebasekeys'

const myAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'infocep-cad3e.appspot.com'
})

export default { myAdmin }
