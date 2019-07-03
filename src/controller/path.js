import fs from 'fs';
import path from 'path';

//convert relative routes in absolutes routes return string
export const absolutePath = (route) => {
    if (!path.isAbsolute(route)) 
    {
        return path.resolve(route);
    } 
    else 
    {
        return route;
    }
}

//verify file and return boolean
export const verifyFile = (route) => {
    let getStat = fs.statSync(route);
    let isFile = getStat.isFile();
    return isFile;
}

//read Directories return Array files
export const getMarkdownFiles = (route) => {
    if (verifyFile(path.join(route))) 
    {
        return path.extname(route) === ".md" ? [route] : [];
    } 
    else 
    {
        const readDir = fs.readdirSync(path.join(route));
        return readDir.map(routeName => {
            const filesArray = getMarkdownFiles(path.join(route, routeName));
            return filesArray;
        });
    }
}

//flatten array 
export const flatten = (arr) => {
    let ret = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) 
        {
            ret = ret.concat(flatten(arr[i]));
        } 
        else 
        {
            ret.push(arr[i]);
        }
    }
    return ret;
}