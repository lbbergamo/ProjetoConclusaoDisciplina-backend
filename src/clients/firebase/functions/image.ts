import myAdmin from './../credentials'
import fs from 'fs'
import path from 'path'

export default async (imageName: string) => {
  const bucket = myAdmin.storage().bucket()
  bucket.file(imageName).download().then(async (data: Array<WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>>) => {
    const buffer = Buffer.from(data[0])
    fs.writeFile(path.resolve(__dirname, '..', 'imgs', imageName), buffer, 'binary', (err) => {
      console.log(err)
    })
  }).catch((err: any) =>
    console.log(`Não foi possivel baixar a imagem: ${err}`))
}
