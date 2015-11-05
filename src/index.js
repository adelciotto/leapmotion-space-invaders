/*
 * index.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import _ from 'underscore';
import constants from './constants';
import states from './states';

window.onload = function() {
    const game = new Phaser.Game(constants.GAME_WIDTH, constants.GAME_HEIGHT,
            Phaser.AUTO, 'game', null, false, false);

    // add all the game states and then start the boot state
    _.each(states, (val, key) => {
        game.state.add(`${key}`, val);
    });

    game.state.start('boot');
};
