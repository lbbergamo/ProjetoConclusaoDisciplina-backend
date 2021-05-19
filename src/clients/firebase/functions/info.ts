import myAdmin from './../credentials'

export default async (info_id: string) => {
  const db = myAdmin.firestore()
  const result = await db.collection('info').doc(info_id).get()
  if (result.exists) {
    return result.data()
  }
  return null
}
