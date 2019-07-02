import {absolutePath,
        verifyFile,
        getMarkdownFiles,
        flatten
        } from '../src/controller/path.js/'

let relativeRoute = 'Example/';
let absoluteRoute = '/home/maga/Desktop/LIM009-fe-md-links/Example';

describe('convert relative route in absolute route', () => {
  it('absolutePath is a function', () => {
    expect(typeof(absolutePath)).toBe('function')
  })
  it('should return string absolute route for relative route', () => {
    expect(absolutePath(relativeRoute)).toEqual('/home/maga/Desktop/LIM009-fe-md-links/Example');
  })
  it('should return string absolute route for absolute route', () => {
    expect(absolutePath(absoluteRoute)).toEqual('/home/maga/Desktop/LIM009-fe-md-links/Example');
  })
});

let userFile = '/home/maga/Desktop/LIM009-fe-md-links/README.md';

describe('check if path is a file', () => {
  it('verifyFile is a function', () => {
    expect(typeof(verifyFile)).toBe('function')
  })
  it('should return boolean', () => {
    expect(verifyFile(userFile)).toEqual(true)
  })
})

let path = '/home/maga/Desktop/LIM009-fe-md-links/test/Example/'

describe('get markdown files', () => {
  it('getMarkdownFiles is a function', () => {
    expect(typeof(getMarkdownFiles)).toBe('function');
  })
  it('should return array', () => {
    expect(getMarkdownFiles(path)).toEqual([["/home/maga/Desktop/LIM009-fe-md-links/test/Example/Test/test.md"], [], "/home/maga/Desktop/LIM009-fe-md-links/test/Example/file.md"]
    );
  })
})

let arrayPath = [[[], "/Example/Test/test.md"], "/Example/example.md", "/Example/file.md"];

describe('flatten arrays', () => {
  it('flatten is a function', () => {
    expect(typeof(flatten)).toBe('function');
  })
  it('should return flat array', () => {
    expect(flatten(arrayPath)).toEqual(["/Example/Test/test.md","/Example/example.md","/Example/file.md"])
  })
})