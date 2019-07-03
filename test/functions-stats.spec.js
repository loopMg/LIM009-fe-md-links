import { statsLinks, statsValidate } from '../src/controller/stats.js'


let input = [{
  "href": "https://www.youtube.com/watch?v=MetC_lv2GNw", "path": "/home/maga/Desktop/LIM009-fe-md-links/test/Example/Test/test.md", 
  "text": "maga"}];


describe('statsLinks return basic stats of links', () => {
  it('statsLinks is a function', () => {
    expect(typeof(statsLinks)).toBe('function')
  })
  it('should return stats total and unique links', () => {
    expect(statsLinks(input)).toEqual(`Total: 1 \nUnique: 1`)
  })
})

let inputSV = [{
  href: 'https://www.youtube.com/watch?v=MetC_lv2GNw',
  text: 'maga',
  path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats/test.md',
  status : 200,
  statusText : 'OK'
 }, {
  href: 'https://nodejs.org/es/123456789',
  text: '404',
  path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats/test.md',
  status: 404,
  statusText: 'Fail'
 }];

describe('', () => {
  it('statsValidate is a function', () => {
    expect(typeof(statsValidate)).toBe('function')
  })
  it('should return stats brokens links', () => {
    expect(statsValidate(inputSV)).toBe(`Brokens: 1`)
  })
})
