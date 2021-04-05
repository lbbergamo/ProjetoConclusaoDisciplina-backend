
export function filterLocation (response: IGoogleServiceResponse): any {
  if (response == null) {
    throw new Error('')
  }
  const { results } = response
  return results
    .map(element => {
      return element.geometry
    })
    .map(element => {
      return element.location
    })[0]
}

interface IGoogleServiceResponse{
  results: Array<{
    address_components: Object[]
    formatted_address: string
    geometry: {
      location: object
    }
    place_id: string
    plus_code: Object
  }>
  status: string
}
