[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](./LICENSE)

# Select Language: **English**, [Portuguese](https://github.com/santanafx/frontend-3d-car/blob/main/README-pt.md)

# About the project

The project involved taking on a challenge proposed by the company Softruck. Softruck is a multinational corporation that provides management solutions with the aim of reducing operational costs and actively monitoring and measuring resource performance.

## Technologies and programming languages used

**Typescript** | **React** | **HTML** | **SASS** | **Vite**

For the development of the project, the following technologies were chosen:

1. `React`, which is a widely used JavaScript library for building interactive and performant user interfaces.
2. `Vite`, a tool known for its speed and efficiency in development.
3. `TypeScript`, which adds optional typing to JavaScript, providing greater ease of maintenance, code robustness, improved readability, and bug reduction.

## Video

<a href="https://www.youtube.com/watch?v=QKh7RwoH_Sc">Video here</a>.

#### Images

<div style="display: flex; justify-content: center;">
  <img src='./public/images/readme/img1.png' style="margin-right: 10px;">
  <img src='./public/images/readme/img2.png'>
</div>

## Libraries used

1. `mapbox-gl` - A mapping library that allows you to create interactive and custom maps.
2. `react-map-gl` - A library that provides React components for integrating interactive maps. This library works in conjunction with the `mapbox-gl` library.
3. `sass` - A library that enables the creation of styles for web pages or applications.
4. `react-redux` - a library that allows state management between Redux and React.
5. `@reduxjs/toolkit` - a library that simplifies and optimizes the entire state management process using Redux.
6. `@types/mapbox-gl` - a package of TypeScript type definitions for the `mapbox-gl` library.
7. `@types/react-redux` - a package of TypeScript type definitions for the `react-redux` library.
8. `@types/react-map-gl` - a package of TypeScript type definitions for the `react-map-gl` library.
9. `i18next` - a library that provides support for loading and managing application translations.
10. `react-i18next` - a library that works in conjunction with the `i18next` library for React applications.

#### Goal

The challenge provided the following instructions:

Using the provided geographic data and data sprite, create a screen with a map that should perform animation on the sprite based on the direction of the car.

##### Bonus task

Utilize the vehicle's speed to determine how fast it will move along the route.

Allow the user to select which of the routes will be drawn at that moment.

## Project structure

The project was organized into folders, each intended for a specific element according to its function. The `./src/assets` folder stores project image files. The `./src/components` folder follows the Atomic Design methodology, enabling the creation of a more consistent and standardized system. The `./src/css` folder contains the `main.css` file and the `main.css.map` file, which facilitate code debugging and maintenance. The `./src/styles` folder stores the SCSS files for the entire project. The `./src/store` folder contains the files for managing the state of multiple variables using the `./src/store/reducers/vehicleData` reducer. The folder `./src/lib` contains the `i18n.ts` file with the code to perform the internationalization of all the text in the application. The folder `./src/locale` contains the `en.json` and `pt.json` files with the object and its translations.

When starting the project, a page is loaded with a map obtained through the use of the Mapbox API. The map was rendered using the `react-map-gl` library, which provides components that enable greater interaction between the user and the map. The components `<Map>`, `<GeolocateControl>`, `<FullscreenControl>` and `<NavigationControl>` were added.

1. `<Map>` enables rendering the map on the screen.
2. `<GeolocateControl>` allows sharing the user's geographic location.
3. `<FullscreenControl>` enables expanding the map to fill the entire screen.
4. `<NavigationControl>` adds buttons for zooming in, zooming out, and resetting the direction (default position north).

Four React components were created: `<CarMarker>`, `<VehicleRoute>`, `<BestRoute>` and `<Options>`.

1. `<CarMarker>` renders a car based on latitude, longitude, speed, and direction, allowing the user to automatically follow the vehicle based on coordinates during the route. This component also displays information about longitude, latitude, direction, and speed in the lower left corner of the screen.
2. `<VehicleRoute>` dynamically renders the vehicle's route (a blue line) based on latitude and longitude coordinates from the `./public/frontend_data_gps.json` file. In this component, a green circle (starting point of the route) and a red circle (ending point of the route) are also rendered. The `<Source>` and `<Layer>` components from the `react-map-gl` library enable the representation of points and lines on the map.
3. `<BestRoute>` renders the most efficient route from the starting point of the route to the endpoint. The user can choose to view the path (a black line) or not. In this component, a GET request is made to the Mapbox Directions API.
4. `<Options>` renders all the menu buttons, including `Start route 1`, `Start route 2`, `Start route 3`, `Start route 4`, `Start route 5`, `Show Best Route`, `Enable Vehicle Tracking`, `Disable Vehicle Tracking`, `Change to EN`, `Hide Best Route` and `Reset Route`.' In this component, it is also checked whether the car has already reached its final destination or if the user is prompted to choose a route.

## How to Locate Myself in the Project?

- All project components are rendered in `./src/App`.
  - All components can be found in the `./src/components` folder.
    - Once inside the `./src/App` file, you can navigate through the components and make the desired changes.

## How to install

To set up the environment, you'll need to have the following installed on your computer:

Node.js
<a href="https://nodejs.org/">Click here to install Node.js</a>.

To install Node, click on the link and download the LTS version (recommended version).
To verify if it was installed correctly, open the terminal and type 'node -v' or 'node --version'.

<img align="center" src='./public/images/readme/instrucao-node.png'>
Git
<a href="https://git-scm.com/download">Click here to install Git</a>.

If you don't have a preferred terminal, I recommend using Git Bash. To install it, there will be an option during the Git installation to allow installing Git Bash.
To check if Git was installed correctly, open the terminal and type 'git --version'.

<img align="center" src='./public/images/readme/instrucao-git.png'>
Visual Studio Code

Go to the link and download the Windows version.
<a href="https://code.visualstudio.com/download">Click here to install Visual Studio</a>.

Right-click on a location on your computer and select the 'Git Bash Here' option.

<img align="center" src='./public/images/readme/instrucao-gitBashHere.png'>
In the terminal, enter the following command, replacing 'paste the project link here' with the GitHub project link:

git clone 'paste the project link here'

<img align="center" src='./public/images/readme/instrucao-clone.png'>
<img align="center" src='./public/images/readme/instrucao-gitClone.png'>
A folder with the desired project will be added to the selected location.
Right-click on the folder and select 'Open with Code.'

<img align="center" src='./public/images/readme/instrucao-abrirCode.png'>
Once Visual Studio is open with the desired project, open the terminal by clicking on the menu in the top tab and type the command 'npm install,' and then type 'npm run dev.' A browser window will open, and the project will start on your computer.

<img align="center" src='./public/images/readme/instrucao-terminal.png'>
<img align="center" src='./public/images/readme/instrucao-npm.png'>
<br />

# :sunglasses: Author <a name="id07"></a>

<br />

Lucas Santana Figueiredo

<div>
 <a href="https://discordapp.com/users/254746660549296128" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" target="_blank"></a>
  <a href = "mailto:santanafx@hotmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/lucas-santana-figueiredo/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
  <a href="https://wa.me/5531997915854" target="_blank"><img src=https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white></a>
</div>
