const mdlinks = require('./index')


let userRoute = '/home/maga/Desktop/Example/';

let uglyArr = mdlinks.getMarkdownFiles(userRoute);
let flat = mdlinks.flatten(uglyArr);

console.log('Ass: ', flat);


// uglyArr = getMarkdownFiles(absolutePath(userRoute));
// let aplanau = flatten(uglyArr);
// console.log('Ass: ', aplanau)