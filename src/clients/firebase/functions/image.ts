/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-floating-promises */
import myAdmin from './../credentials'
import fs from 'fs'
import path from 'path'

export default async (imageName: string) => {
  const bucket = myAdmin.storage().bucket()
  return await bucket.file(imageName)
    .download()
    .then(async (data: Array<WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>>) => {
      const buffer = Buffer.from(data[0])
      fs.writeFile(path.resolve('.', 'public', 'uploads', 'image', imageName), buffer, 'binary', (err, data) => { })
    })
    .then(() => `uploads/image/${imageName}`)
    .catch(error => { throw { message: error.message, status: "Couldn't recover image" } })
}
