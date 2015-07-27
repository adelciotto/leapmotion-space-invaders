/*
 * ===========================================================================
 * File: preload.js
 * Author: Anthony Del Ciotto
 * Desc: This state preloads all the assets.
 * ===========================================================================
 */

import constants from '../constants';

export default class PreloadState extends Phaser.State {
    preload() {
        this.load.image(constants.AssetKeys.HTML_LOGO, 'res/img/html.png');
        this.load.image(constants.AssetKeys.PHASER_LOGO, 'res/img/phaser.png');
    }

    create() {
        this.state.start('splash');
    }
}
