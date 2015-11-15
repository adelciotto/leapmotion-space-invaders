/*
 * constants.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import utils from './utils';

const constants = {
    GAME_WIDTH              : 1024,
    GAME_HEIGHT             : 672,
    DEFAULT_NUM_ALIEN_COLS  : 11,
    DEFAULT_NUM_ALIEN_ROWS  : 5,

    LARGE_TEXT_SIZE         : 20,
    MED_TEXT_SIZE           : 12,
    SMALL_TEXT_SIZE         : 4,

    AssetKeys: {
        LEAP_HOWTO          : 'leap-howto',
        SPRITESHEET         : 'spritesheet',
        RECT                : 'rect',
        GAME_FONT           : 'game_font'
    },

    TextLabels: {
        HOWTO_MOVE          : 'move your hand across the device to move left or right',
        HOWTO_SHOOT         : 'pinch slowely to shoot'
    }
};

utils.objFreezeRecursive(constants);
export default constants;
