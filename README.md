# Pony Maze
A solution for [TrustPilot's Pony Challenge](https://ponychallenge.trustpilot.com/api-docs/index.html).
Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using Redux, Axios, Sass and Bootstrap (for quick and easy styling). Styling is not responsive as the app is intended for desktop resolutions.

## How to play
The app is hosted [here](https://mypipsen.github.io/PonyMaze). Move the pony with the arrow keys or WASD.

## Algorithm
The maze can be automatically solved by clicking the solve-button. This is implemented through a [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search). However, the domokun is not accounted for in the suggested path. 

## Installation
```
npm i
cp .env.example .env
npm run start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.