/*
 * constants.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import utils from './utils';

const constants = {
    GAME_WIDTH: 480,
    GAME_HEIGHT: 320,
    DEFAULT_NUM_ALIEN_COLS: 11,
    DEFAULT_NUM_ALIEN_ROWS: 5,

    AssetKeys: {
        LEAP_HOWTO: 'leap-howto',
        SPRITESHEET: 'spritesheet',
        RECT: 'rect'
    }
};

utils.objFreezeRecursive(constants);
export default constants;
