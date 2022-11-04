# Company analytics 📈

This API has been developed by Víctor López.

Application created for Jump2Digital 2022.

## Objetivos

Task 1 => "Crear un base de datos (PostgreSQL, MySQL, Mongo, Firebase,etc) y guardar toda la lista de compañías utilizado siguiendo el esquema del JSON"

Task 2 => "Crear un endpoint que devuelva las compañías ordenadas por tamaño"

Task 3 => "Crear un endpoint que devuelva las compañías ordenadas por fecha de creación"

Task 4 => "Crear un endpoint que devuelva los siguientes datos: Número de empresas que hay en cada industria, Número de empresas que hay por cada rango de tamaños, Número de empresas que hay en cada año de creación"

## Instalación

Para que el projecto funcione tenemos que instalar previamente: 
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [Postman](https://www.postman.com/)

Podemos clonar el projecto del siguiente enlace:
```
    npm clone https://github.com/vkafkain/Jump2Digital_2022_Backend.git
```
Una vez clonado el projecto debemos ejecutar el siguiente comando por terminal:
```
    npm install
```

## Ejecutar

Una vez hemos instalado todo tenemos que ejecutar el comando: 
```
    npm run start
```
Esto nos inicializa el servidor y la base de datos.

## Arquitectura del projecto

Estructura:

![Demo](https://github.com/vkafkain/Jump2Digital_2022_Backend/blob/main/docs/01.png)

## Rutas

_Obtener compañias ordenadas por tamaño - GET_
```
http://localhost:3000/companies/size
```

_Obtener compañias ordenadas por fecha de creacion - GET_
```
http://localhost:3000/companies/date
```

_Obtener numero de empresas de cada industria, rango de tamaños y año de creación - GET_
```
http://localhost:3000/companies/count
```

## Programas utilizados

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [Express](https://www.npmjs.com/package/express) - Framework de node.js.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [Mongoose](https://mongoosejs.com/) - Dependencia que nos ayuda a gestionar datos con MongoDB.


## Autor

* Github [Víctor López](https://github.com/vkafkain)  |  Email vlopezmoles@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)