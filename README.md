# AngularPrestamos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Error Linux
 En caso de que muestre este error <span style="color:red">Error: ENOSPC: System limit for number of file watchers reached angular</span>.
ejecutar este comando
`sudo sysctl -w fs.inotify.max_user_watches=524288`

## Variables de entorno
- API_URL = Este es el URL del API
- BASE =  Este es la base del banco


## Seguridad API KEY
La pagina prestamos y usuarios esta protegida por una api key, la cual es `secret` esta la tendras que ingresar en la barra de navegacion en el input api key, este usa un store global para poder trasmitirla a su guardian 

## Librerias
Se uso material en la parte de prestamos,
En la parte de usuario y dashboard del home se uso [Devextreme](https://js.devexpress.com/ "Devextreme")

## BD del json-server
Se encuentra en la raiz del sistema como db.json

## Iniciar API
Instalar libreria `npm install -g json-server`,
Correr api usando el db.json `json-server --watch db.json` este comando en la carpeta de la aplicacion

## Uso de lazychild
Se crearon modulos a aparte de cada pages y sus routings

## Uso de store
Se creo el store.service el cual usa la reactividad para suscribirse a las variables globales, como el API KEY y la base monetaria del banco
