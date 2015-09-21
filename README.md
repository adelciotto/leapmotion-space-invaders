## leapmotion-prototype-template

This repository contains a basic template for our prototype leapmotion games. We use the [Phaser](http://phaser.io) game framework,
and the [Leap-Motion API](https://developer.leapmotion.com/documentation/javascript/devguide/Leap_Overview.html).

### View:

The template is running live [here](http://adelciotto.github.io/leapmotion-prototype-template/)

### Setting up the template

#### create a github repo for your prototype

On github, create a new repository and make sure to leave *Initialize this repository with a README* unchecked.
Furthermore, leave *Add .gitignore* and *Add a license* to **None**

Note: When naming the repo, stick to the convention: **your-prototype-name**.

#### clone the repo

```shell
git clone https://github.com/adelciotto/leapmotion-prototype-template.git
your-prototype-name/
cd your-prototype-name
```

#### setup the template

run the install script:

```shell
./scripts/install.sh <your-github-username> <your-prototype-name>
```
*Note: Please omit the brackets.*

### Developing a prototype

#### api reference

Please familiarise yourself with both the [Phaser API](http://phaser.io/docs) and the [Leap-Motion API](https://developer.leapmotion.com/documentation/javascript/devguide/Leap_Overview.html).

#### npm tasks:

* ```npm run dev``` - Builds and scripts and assets in development mode, then
hosts the game at [localhost:8000](http://localhost:8000). All source files and
assets are watched and a browser reload will be triggered on any changes.
* ```npm run prod``` - Builds and scripts and assets in production mode, then
hosts the game at [localhost:8000](http://localhost:8000).
* ```npm run build``` - Builds the scripts and assets in production mode.
This means all source files are minified and all assets are optimised.

#### JS Conventions

We use Javascript ES6 in this project; which is compiled down to ES5 for browser compatibility using [Babel](https://babeljs.io/).
For a complete ES6 reference; go [here](https://babeljs.io/docs/learn-es2015/)

Stick to the JS coding conventions outlined [here](https://github.com/airbnb/javascript) by [airbnb](https://github.com/airbnb)

### Deploying the game

#### push to gh-pages branch

To update the deployed game; please run the gh pages deploy script in the root directory:

```shell
./scripts/deploy
```

**Note: only deploy when you feel you have something remotely playable**
