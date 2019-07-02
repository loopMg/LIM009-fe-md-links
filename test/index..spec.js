import { mdLinks } from '../src/index.js'


const path = '/home/maga/Desktop/LIM009-fe-md-links/test/Example/';

describe('should return a promise that resolves an array', () => {
  it('mdLinks is a function', () => {
    expect(typeof(mdLinks)).toBe('function')
  })
  it('mdLinks should return a promise that resolves an array', () => {
    expect(mdLinks(path, { validate : false })).resolves.toEqual([{
      href: 'https://www.youtube.com/watch?v=MetC_lv2GNw',
      text: 'maga',
      path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example/Test/test.md' }]);
  })
  it('mdLinks should return a promise that resolves an array with links validate', () => {
    expect(mdLinks(path, { validate : true })).resolves.toEqual([{
      href: 'https://www.youtube.com/watch?v=MetC_lv2GNw',
      text: 'maga',
      path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example/Test/test.md',
      status : 200,
      statusText : 'OK'
     }])
  })
})


