import fs from 'fs';
import marked from 'marked';


const renderer = new marked.Renderer();

export const extractLinks = (route) => {
    let readMarkDown = fs.readFileSync(route).toString();
    let arr = [];

    renderer.link = (href, path, text) => {
        return arr.push({
            href: href,
            text: text,
            path: route
        });
    }
    marked(readMarkDown, { renderer: renderer });
    return arr;
}