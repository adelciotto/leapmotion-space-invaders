## leapmotion-prototype-template

This repository contains a basic template for our prototype leapmotion games. We use the [Phaser](http://phaser.io) game framework,
and the [Leap-Motion API](https://developer.leapmotion.com/documentation/javascript/devguide/Leap_Overview.html).

### View:

The template is running live [here](http://adelciotto.github.io/leapmotion-prototype-template/)

### Setting up the template

##### install node & npm

Firstly, ensure that Node.js & npm are installed:

```shell
node -v   # should return something like V0.12.2
npm -v    # should return something like 2.7.5
```
If not then download it [here](http://nodejs.org).

##### clone the repo

```shell
git clone https://github.com/adelciotto/leapmotion-prototype-template.git
cd leapmotion-prototype-template
```

##### create a github repo for your prototype

On github, create a new repository and make sure to leave *Initialize this repository with a README* unchecked.
Furthermore, leave *Add .gitignore* and *Add a license* to **None**

Note: When naming the repo, stick to the convention: **your-prototype-name**.

Then simply add this new repo as the remote origin:

```shell
git remote set-url origin https://github.com/your-github-username/your-repo-name.git
```

##### install all dependencies & run the watch task

```shell
npm i && npm run watch
```

### Developing a prototype

##### api reference

Please familiarise yourself with both the [Phaser API](http://phaser.io/docs) and the [Leap-Motion API](https://developer.leapmotion.com/documentation/javascript/devguide/Leap_Overview.html).

##### npm tasks:

* ```npm run start``` - Builds the scripts and assets; then starts the server at [localhost:8000](http://localhost:8000).
* ```npm run watch``` - Builds the scripts and assets; then constantly watches all the ES6 source files for any changes. hosted at [localhost:3000](http://localhost:3000)
* ```npm run build``` - Only builds the scripts and assets.

##### JS Conventions

We use Javascript ES6 in this project; which is compiled down to ES5 for browser compatibility using [Babel](https://babeljs.io/).
For a complete ES6 reference; go [here](https://babeljs.io/docs/learn-es2015/)

Stick to the JS coding conventions outlined [here](https://github.com/airbnb/javascript) by [airbnb](https://github.com/airbnb)

### Deploying the game

##### push to gh-pages branch

To update the deployed game; please run the gh pages deploy script in the root directory:

```shell
./git-gh-deploy
```

**Note: only deploy when you feel you have something remotely playable**

##### add your prototype to leapmotion-base

Once you have something deployed; please follow the README at the [leapmotion-base repo](https://github.com/adelciotto/leapmotion-base) for how to add the prototype.
