## gulp-phaser-template

This repository contains a basic template for a HTML5 game. Using the [Phaser](http://phaser.io) game framework;
written in [ES6](https://babeljs.io/) and using [gulp](http://gulpjs.com/) for build task automation.

### View:

The template is running live [here](http://adelciotto.github.io/gulp-phaser-template/)

### How to use:

Firstly, ensure that Node.js & npm are installed:

```shell
node -v   # should return something like V0.12.2
npm -v    # should return something like 2.7.5
```
If not then download it [here](http://nodejs.org).

Then clone the repo:

```shell
git clone https://github.com/adelciotto/gulp-phaser-template.git
cd gulp-phaser-template
```

Then install all node modules, and run the start npm task:

```shell
npm install && npm run start
```

### npm tasks:

* ```npm run start``` - Builds the scripts and assets; then starts the server at [http://localhost:8000](http://localhost:8000).
* ```npm run watch``` - Builds the scripts and assets; then constantly watches all the ES6 source files for any changes.
* ```npm run build``` - Only builds the scripts and assets.

### License and Legal

This code-base is released under the [MIT License](http://opensource.org/licenses/MIT).

All dependencies are released under their own respective licenses.
