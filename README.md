# Proyecto Final de Moviles

Team members

-   Francisco Xavier Guinto Rios
-   Ana Belgica Martinez Montoya
-   Michelle Angelica Xolocotzi Villanueva
-   Maria De Lourdes Nieto Flores

## Objective

The objective of this project is to demonstrate what has been learned during the semester and create a functional mobile application.

## Goals

-   [x] Create a mobile application regarding movies
-   [x] Use an API
-   [x] Make use of various Ionic components and plugins
-   [x] Understandable user interface



# Development 

The first thing we did was meet to discuss how the project would be carried out, what interface we would use, the resources we would occupy and the division of labor.

1. We create a new project using the following command
   
        - ionic start Final blank
1.1 We proceeded to create most of the pages, services, components, etc.

    
        - ionic g pages Paginas/home --spec=false
        - ionic g pages Paginas/peliculasyseries --spec=false
        - ionic g pages Paginas/pelis --spec=false
        - ionic g pages Paginas/peli-details --spec=false
        - ionic g pages Paginas/peliculas --spec=false
        - ionic g s services/data

2. The creation of some json files was made to control the menu and a small storage to print some movies.
   

3. We made use of the page http://www.omdbapi.com/ to get the API from there using our project.
   

4. The page https://firebase.google.com/ was used to carry out our login section, within that page we have a database in which all the information is stored to allow access to the application in which the user's email and password are stored.
      
    ![1](https://user-images.githubusercontent.com/15019106/82832556-092aef80-9e81-11ea-857a-27247970f196.jpeg)

    ![2](https://user-images.githubusercontent.com/15019106/82832580-1a73fc00-9e81-11ea-9a12-31c6801153a4.jpeg)

    ![3](https://user-images.githubusercontent.com/15019106/82832594-2790eb00-9e81-11ea-91f4-3a2125690c71.jpeg)


## How To Build Executable Of The Program


### The prerequisites are:

**1. Install Angular and Ionic**

You can use the following commands to install them:

    - npm install -g @ionic/cli
    - npm install -g @angular/cli

You must bear in mind that for the correct operation of these codes you previously need to have Node.js installed

**2. Install Firebase**

For the Login section to work correctly you must enter the following codes in the terminal.

    -  npm uninstall firebase @angular/fire 
    -  package.json
    -  dependencies {... "@angular/fire": "^5.4.2", "firebase": "7.14.1",...}
    -  Save change
    -  npm install firebase @angular/fire
    
**Here are a ScreenShoot to make it more visible.**

![image](https://user-images.githubusercontent.com/15019106/82767558-219dfa00-9dee-11ea-850f-f202911adc88.png)

![image](https://user-images.githubusercontent.com/15019106/82767600-64f86880-9dee-11ea-88af-809937fd6637.png)

![image](https://user-images.githubusercontent.com/15019106/82767615-85c0be00-9dee-11ea-829f-0e239a4c43a8.png)


And finally check that these libraries exist in *app.module.ts*

    -   import { AngularFireAuthModule } from '@angular/fire/auth';
        imports: [AngularFireModule] from'@angular/fire';      

**Here are a ScreenShoot to make it more visible.**

![image](https://user-images.githubusercontent.com/15019106/82813248-4a5bd900-9e5a-11ea-82ba-c09d6a473873.png)


**3. Install Plugins**

Because this project uses some plugins obtained from the Ionic page so that it does not show any errors when starting the project, you have to add the following commands.

        - ionic cordova plugin add cordova-plugin-x-socialsharing
        - npm install @ionic-native/social-sharing

        - ionic cordova plugin add cordova-sqlite-storage
        - npm install --save @ionic/storage



Finally, **To compile** the server of the aplication the following command is required:

    - ionic serve

**Here are a ScreenShoot to make it more visible.**

![image](https://user-images.githubusercontent.com/15019106/82812977-c6095600-9e59-11ea-9fd0-a94d401a9071.png)

Once the code is run it will show something like this

![image](https://user-images.githubusercontent.com/15019106/82812806-67dc7300-9e59-11ea-9e76-a6e76e9c02bc.png)


**NOTE: Since the source code is in several files, the files MUST be in the same directory**
