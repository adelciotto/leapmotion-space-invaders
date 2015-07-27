/*
 * ===========================================================================
 * File: boot.js
 * Author: Anthony Del Ciotto
 * Desc: This state configures the Phaser framework; setting various
 * properties and options.
 * ===========================================================================
 */

export default class BootState extends Phaser.State {
    create() {
        // add the Phaser Debug plugin
        this.game.add.plugin(Phaser.Plugin.Debug);

        this.physics.startSystem(Phaser.Physics.ARCADE);

        // configure the scale manager
        this.scale.minWidth = this.width;
        this.scale.minHeight = this.height;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.scaleMode = this.scale.fullScreenScaleMode =
            Phaser.ScaleManager.SHOW_ALL;

        // capture certain keys to prevent their default actions in the browser.
        // this is only necessary because this is an HTML5 game.
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN
        ]);
        this.input.maxPointers = 1;

        this.state.start('preload');
    }
}
