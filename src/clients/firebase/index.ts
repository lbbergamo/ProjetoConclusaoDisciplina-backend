import getInfo from './functions/info'
import getImage from './functions/image'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async (id: string) => {
  const data = await getInfo(id)
  const image = await getImage(data.imageUrl)
  return {
    ...data,
    image
  }
}
