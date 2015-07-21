/*
 * ===========================================================================
 * File: preload.js
 * Author: Anthony Del Ciotto
 * Desc: This state preloads all the assets.
 * ===========================================================================
 */

export default class PreloadState extends Phaser.State {
    preload() {
        this.load.image('logo', 'res/img/html.png');
    }

    create() {
        this.state.start('play');
    }
}
