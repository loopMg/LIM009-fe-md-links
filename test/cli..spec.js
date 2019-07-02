import { becomeObjet , cli } from '../src/cli.js'


const arrayOp = [ '--validate', '--stats' ]


describe('', () => {
  it('becomeObjet is a function', () => {
    expect(typeof(becomeObjet)).toBe('function')
  })
  it('', () => {
    expect(becomeObjet(arrayOp)).toEqual({"stats": true, "validate": true})
  })
})


const path = '/home/maga/Desktop/LIM009-fe-md-links/test/Example_stats/test.md'
const options1 = {"stats": true, "validate": true};


describe('', () => {
  it('cli is a function', () => {
    expect(typeof(cli)).toBe('function')
  })
  it('', (done) => {
   cli(path, options1)
   .then(res => {
     expect(res).toEqual(res)
   })
  done();
  })
})
