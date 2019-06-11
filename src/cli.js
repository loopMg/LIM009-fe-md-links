#!/usr/bin/env node

const [,, ... args] = process.argv

console.log(`Hellow World ${args}`);


//const { promisify } = require("util");
//flatten array 
const flatten = (arr) => {
  return arr.reduce((acc, item) => [
    ...acc,
    ...item
  ], [])
}

//check for the existence of a markdown file  
const getMarkdownFiles = async (directoryPath) => {
  console.log(directoryPath)

  const readdir = promisify(fs.readdir)
  const getStats = promisify(fs.stat)
  try {
    const files = await readdir(directoryPath)
    const fileStats = files.map(async (fileName) => {
      const stats = await getStats(path.join(directoryPath, fileName))
      return {
        fileName,
        stats,
      }
    })

    const stats = await Promise.all(fileStats)
    const directories = stats.filter((fileStats) => fileStats.stats.isDirectory())
      .map(fileStats => fileStats.fileName)
    const markdownFiles = files.filter(file => path.extname(file) === ".md") // example.md
    console.log("markdownFiles", markdownFiles)
    console.log("directories", directories)
    console.log("--------------------------");

    if (directories.length === 0) {
      return markdownFiles
    }

    const promises = directories.map((directory) => getMarkdownFiles(path.join(directoryPath, directory)))
    const filesArray = await Promise.all(promises) // [["test.md"]]
    console.log(filesArray)
    return [
      ...markdownFiles,
      ...flatten(filesArray)
    ]
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

getMarkdownFiles(absolutePath('/home/maga/Desktop/Example'))
  .then((files) => console.log(files))
  .catch(err => console.log(err.message))
//'/home/maga/Desktop/Example'