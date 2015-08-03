/*
 * index.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var states = require('./states');

window.onload = function() {
    const game = new Phaser.Game(800, 480, Phaser.AUTO, 'game', null);

    // add all the game states and then start the boot state
    _.each(states, (val, key) => {
        game.state.add(`${key}`, val);
    });

    game.state.start('boot');
};
