import { filterLocation } from '../filterLocation'
import mock from './../../../../../clients/googleService/geocode.json'
const sut = (object: any): any => {
  return filterLocation(object)
}

describe('test the location filter ', () => {
  it('should receive lng and lat', () => {
    const request = sut(mock)
    expect(request).toHaveProperty('lat')
    expect(request).toHaveProperty('lng')
  })
  it('should receive args invalid', () => {
    const request = sut({ results: [] })
    expect(request).toBeUndefined()
  })

  it('should receive args invalid2', () => {
    const request = (): any => {
      return sut(null)
    }
    expect(request).toThrow()
  })
})
