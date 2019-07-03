import {
	becomeObject,
	cli
} from '../src/controller/executor'

import fetchMock from '../__mocks__/node-fetch.js'
fetchMock.config.sendAsJson = false;

fetchMock
  .mock('https://www.youtube.com/watch?v=MetC_lv2GNw', 200)
  .mock('https://nodejs.org/es/123456789', 404)


const arrayOp = ['--validate', '--stats']


describe('should return object', () => {
	it('becomeObject is a function', () => {
		expect(typeof (becomeObject)).toBe('function')
	})
	it('get array and should return object ', () => {
		expect(becomeObject(arrayOp)).toEqual({
			"stats": true,
			"validate": true
		})
	})
})


const path = '/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats';

const options1 = { "stats": true, "validate": true };
const options2 = { "stats": true, "validate": false };
const options3 = { "stats": false, "validate": false };
const options4 = { "stats": false, "validate": true };

describe('user control over library', () => {
	it('cli is a function', () => {
		expect(typeof(cli)).toBe('function')
	})
	it('validate and stats result', (done) => {
		cli(path, options1)
			.then((res) => {
				expect(res).toEqual(`Total: 2 \nUnique: 2 \nBrokens: 1`)
				done();
			})
	})
	it('stats result', (done) => {
		cli(path, options2)
			.then((res) => {
				expect(res).toEqual(`Total: 2 \nUnique: 2`);
				done();
			})
	})
	it('links result', (done) => {
		cli(path,options3)
			.then((res) => {
				console.log('fail',res)
				expect(res).toEqual(`/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats/test.md https://www.youtube.com/watch?v=MetC_lv2GNw \n/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats/test.md https://nodejs.org/es/123456789 \n`)
				done();
		})
	})
	it('links validate result', (done) => { 
		cli(path, options4)
			.then((res) => {
				expect(res).toEqual(`/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats/test.md https://www.youtube.com/watch?v=MetC_lv2GNw 200 OK \n/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats/test.md https://nodejs.org/es/123456789 404 Fail \n`)
				done();
			})	
	 })
});



