/*
 * preload.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

export default class PreloadState extends Phaser.State {
    preload() {
        this.load.image(constants.AssetKeys.LEAP_HOWTO, 'res/img/leap-instructions.png');
        this.load.spritesheet(constants.AssetKeys.SPRITESHEET, 'res/img/sheet.png', 62, 34);
        this.load.bitmapFont(constants.AssetKeys.GAME_FONT, 'res/fonts/game_font.png',
                'res/fonts/game_font.xml');
    }

    create() {
        this._prerender();
        this.state.start('play');
    }

    _prerender() {
        // prerender a pixel to be used as a texture for the lasers
        const bmd = this.add.bitmapData(1, 1);
        const ctx = bmd.context;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 1, 1);
        this.cache.addBitmapData(constants.AssetKeys.RECT, bmd);
    }
}
