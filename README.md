# Lista de usuarios con Redux Toolkit

![descripción de la imágen](https://hybridheroes.de/blog/content/images/2022/03/redux-toolkit-1400.jpg)

![Badge en Desarollo](https://img.shields.io/badge/STATUS-Terminado-green)


## Descripcion del proyecto  
Consultar una API, tomar una lista de usuarios colocar esta lista en el estado global de la app 
y dejandola ahí para que cualquier componente pueda usarla, en este ejemplo quién utiliza la lista de usuarios
es el componente UserList y esta quien hace el llamado a la API y manda a ejecutar esa operación.

## Proposito Redux  
Esto es muy útil cuando la app es muy grande, y es una app que escala porque vamos a tener muchos
componetes, y varios de estos componentes con seguridad van a compartir la misma información, entonces para no
pasarla a través de props, la podemos dejar en un estado global o en una store como redux para que ellos la consulten 
desde acá.

## 🛠️ Abre y ejecuta el proyecto

Clonar el repositorio remoto  
`git clone https://github.com/Gina04/redux-app.git`

Instala las dependencias del proyecto  
`npm install`

Inicializar el proyecto  
`npm start`
## :heavy_check_mark: Tecnologías utilizadas  
- React 
- Redux
- npm 
- Hooks: useEffect, useSelect, useDispatch;
- Librerias: Redux Toolkit, Axios, bootstrap



