import {
  validateLinks
} from '../src/controller/validate.js'

import fetchMock from '../__mocks__/node-fetch.js'
import { doesNotReject } from 'assert';
fetchMock.config.sendAsJson = false;

fetchMock
  .mock('https://www.youtube.com/watch?v=MetC_lv2GNw', 200)
  .mock('https://lms.laboratoria.l/', 500)
  .mock('https://nodejs.org/es/123456789', 404)
  .mock('https://www..faacebook.com', 400 )

const arrLink = [{
  href: 'https://www.youtube.com/watch?v=MetC_lv2GNw',
  text: 'maga',
  path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/testing.md'
}, {
  href: 'https://lms.laboratoria.l/',
  text: 'laboratoria',
  path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/testing.md'
}, {
  href: 'https://nodejs.org/es/123456789',
  text: '404',
  path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/testing.md'
}];

const arrLinkCatch = [{
  href: 'https://www..faacebook.com',
  text: 'catch',
  path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/Example_catch.md',
}]


describe('validate array of objet with Links ', () => {
  it('validateLinks is a function', () => {
    expect(typeof(validateLinks)).toBe('function');

  })
  it('', (done) => {
    validateLinks(arrLink)
    .then((res) => {
      expect(res).toEqual([{
        href: 'https://www.youtube.com/watch?v=MetC_lv2GNw',
        text: 'maga',
        path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/testing.md',
        status: 200,
        statusText: 'OK'
      }, {
        href: 'https://lms.laboratoria.l/',
        text: 'laboratoria',
        path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/testing.md',
        status: 500,
        statusText: 'Fail'
      }, {
        href: 'https://nodejs.org/es/123456789',
        text: '404',
        path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/testing.md',
        status: 404,
        statusText: 'Fail'
      }])
      done();
    })
  })
  it('', (done) => {
    validateLinks(arrLinkCatch)
    .catch((err) => {
       expect(err).toEqual([{
        href: 'https://www..faacebook.com',
        text: 'catch',
        path: '/home/maga/Desktop/LIM009-fe-md-links/test/Example_Two/Example_catch.md',
        status: 400,
        statusText: 'Fail'
      }])
     })
     done();
  })
})