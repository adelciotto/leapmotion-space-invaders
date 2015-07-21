/*
 * ===========================================================================
 * File: index.js
 * Author: Anthony Del Ciotto
 * Desc: The games main entry point.
 * ===========================================================================
 */

var states = require('./states');

window.onload = function() {
    var game = new Phaser.Game(400, 240, Phaser.AUTO, 'game', null);

    // add all the game states and then start the boot state
    _.each(states, (val, key) => {
        game.state.add(`${key}`, val);
    });

    game.state.start('boot');
};
