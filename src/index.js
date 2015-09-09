/*
 * index.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import _ from 'underscore';
import states from './states';

let game = null;

const LeapMotionPrototypeTemplate = {
    start() {
        game = new Phaser.Game(800, 480, Phaser.AUTO, 'game', null);

        // add all the game states and then start the boot state
        _.each(states, (val, key) => {
            game.state.add(`${key}`, val);
        });

        game.state.start('boot');
    }
};

// ew, think of a better way to do this. Id really rather not have the start
// function encapsulated in a global object but It's not too big of a deal.
// None of the source we are writing will be used publicly, but still TODO!
module.exports = LeapMotionPrototypeTemplate;
window.LeapMotionPrototypeTemplate = LeapMotionPrototypeTemplate;
