/*
 * ===========================================================================
 * File: play.js
 * Author: Anthony Del Ciotto
 * Desc: This state contains all the main gameplay logic.
 * ===========================================================================
 */

export default class PlayState extends Phaser.State {
    create() {
        this.logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
        this.logo.anchor.set(0.5);
        this.logo.scale.set(0.5);
    }

    update() {
        this.logo.rotation += 0.05;
    }
}
