import getInfo from './functions/info'
import getImage from './functions/image'

export default async (id: string): Promise<object> => {
  const data = await getInfo(id)
  const image = await getImage(data.imageUrl)
  return {
    ...data,
    url: image
  }
}
