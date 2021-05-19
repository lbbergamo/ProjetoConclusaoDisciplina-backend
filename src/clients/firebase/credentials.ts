import admin from 'firebase-admin'
import serviceAccount from 'credentialsFirebase.json'

export default admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'infocep-cad3e.appspot.com'
})
