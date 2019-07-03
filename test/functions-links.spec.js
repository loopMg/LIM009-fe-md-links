import {
	extractLinks
} from '../src/controller/links.js'


const route = '/home/maga/Desktop/LIM009-fe-md-links/test/Example/Test/test.md';

describe('should return extract of read file', () => {
	it('extractLinks is a function', () => {
		expect(typeof(extractLinks)).toBe('function')
	})
	it('should return array of object',()=> {
		expect(extractLinks(route)).toEqual([{
            href: 'https://www.youtube.com/watch?v=MetC_lv2GNw',
            text: 'maga',
            path: route
        }])

	})
})