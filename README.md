# Proyecto Final de Moviles

Miembros del equipo

-   Francisco Xavier Guinto Rios
-   Ana Belgica Martinez Montoya
-   Michelle Angelica Xolocotzi Villanueva
-   Maria De Lourdes Nieto Flores

## Objective

El objetivo de este proyecto demostrar lo aprendido durante el semestre y crear una aplicacion movil funcional.

## Goals

-   [ ] Crear una aplicacion movil respecto a peliculas
-   [ ] Usar un API
-   [ ] Hacer uso de varios componentes de Ionic
-   [ ] Interfaz entendible para el usuario



# Development 

Lo primero que hicimos fue reunirnos para discutir como se realizaria el proyecto, que interfaz usariamos, los recursos que ocupariamos y la division del trabajo.

1. Creamos un nuevo proyecto usando el siguiente comando
   
        - ionic start Final blank
1.1 Procedimos a crear la mayoria de las paginas, servicios, componentes

    
        - ionic g pages Paginas/home --spec=false
        - ionic g pages Paginas/peliculasyseries --spec=false
        - ionic g pages Paginas/pelis --spec=false
        - ionic g pages Paginas/peli-details --spec=false
        - ionic g pages Paginas/peliculas --spec=false
        - ionic g s services/data

2. Tambien se hizo la creacion de algunos archivos json para controlar el menu y un pequeño almacenamiento para imprimir unas peliculas.
   

3. Se hizo uso de la pagina http://www.omdbapi.com/ para de ahi obtener el API usando en nuestro proyecto

      



## How To Build Executable Of The Program


### The prerequisites are:

**1. Install Angular and Ionic**

Puedes ocupar los siguientes comandos para instalarlos:

    - npm install -g @ionic/cli
    - npm install -g @angular/cli

Debes tener en cuenta que para el correcto funcionamiento de estos codigos previamente requieres tener instalado Node.js

**2. Install Firebase**

Para que funcione de forma correcta la seccion del Login debes ingresar los siguientes codigos en la terminal.

    -  npm uninstall firebase @angular/fire 
    -  package.json
    -  dependencies {... "@angular/fire": "^5.4.2", "firebase": "7.14.1",...}
    -  Save change
    -  npm install firebase @angular/fire
    
**Here are a ScreenShoot to make it more visible.**

![image](https://user-images.githubusercontent.com/15019106/82767558-219dfa00-9dee-11ea-850f-f202911adc88.png)

![image](https://user-images.githubusercontent.com/15019106/82767600-64f86880-9dee-11ea-88af-809937fd6637.png)

![image](https://user-images.githubusercontent.com/15019106/82767615-85c0be00-9dee-11ea-829f-0e239a4c43a8.png)

Y por ultimo revisar que existan estas librerias en *app.module.ts*

    -   import { AngularFireAuthModule } from '@angular/fire/auth';
        imports: [AngularFireAuthModule],      

**Here are a ScreenShoot to make it more visible.**

![cap1](https://user-images.githubusercontent.com/15019106/45443883-9a493b00-b68b-11e8-899c-7b109b8efbf9.PNG)


Finally, **To compile** the server of the aplication the following command is required:

    - Ionic serve



**NOTE: Since the source code is in several files, the files MUST be in the same directory**
