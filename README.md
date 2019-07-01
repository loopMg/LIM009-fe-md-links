# **MD-Links**

Es una herramienta que sirve para la lectura y analisis de archivos en formato `Markdown` , verificando los links que contengan y reportando el total de links encontrados, validados, unicos y rotos.

## Instalación

    npm install -g magalopez/md-links

### API

Importar funcion `mdLinks(path, options)`  :  deberia retornar una promesa que resuelva un arreglo de objetos, donde cada objeto representa un link.

##### Argumentos

- `path`: Ruta absoluta.

- `options`: Un objeto con las siguientes propiedades: `validate` Booleano que determina si se desea validar links encontrados.

##### Valor de retorno

  - `href`: URL encontrada.

- `text`: Texto que aparecía dentro del link (`<a>`).

- `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo

```js

const  mdLinks  =  require("md-links");

  

mdLinks("./some/example.md")

.then(links  => {

// => [{ href, text, file }]

})

.catch(console.error);

  

mdLinks("./some/example.md", { validate: true })

.then(links  => {

// => [{ href, text, file, status, ok }]

})

.catch(console.error);

  

mdLinks("./some/dir")

.then(links  => {

// => [{ href, text, file }]

})

.catch(console.error);

```

  

### CLI (Command Line Interface - Interfaz de Línea de Comando)

#### Ejecutable
 
 A través de la terminal:

  `md-links <path-to-file> [options]`
 
#### Ejemplo:

```sh

$ md-links ./some/example.md

./some/example.md http://algo.com/2/3/ Link a algo

./some/example.md https://otra-cosa.net/algun-doc.html algún doc

./some/example.md http://google.com/ Google

```
Identificar el archivo markdown (a partir de la ruta que recibe como

argumento), analizar el archivo Markdown e imprime los links que vaya

encontrando, junto con la ruta del archivo donde aparece y el texto.

  #### Options

##### `--validate`

  

Si pasamos la opción `--validate`, el módulo hace una petición HTTP para

averiguar si el link funciona o no.
  

#### Ejemplo:

  ```sh13d99df067c1

$ md-13d99df067c1

./some/example.md http://algo.com/2/3/ ok 200 Link a algo

./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc

./some/example.md http://google.com/ ok 301 Google

```

  Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de

la URL, así como el status de la respuesta recibida a la petición HTTP a dicha

URL.

 ##### `--stats`

 
Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas

básicas sobre los links.

```sh

$ md-links ./some/example.md --stats

Total: 3

Unique: 3

```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que

necesiten de los resultados de la validación.

  

```sh

$ md-links ./some/example.md --stats --validate

Total: 3

Unique: 3

Broken: 1

```

## Flow Chart
  
[FlowChart](/img/flowchart.png)