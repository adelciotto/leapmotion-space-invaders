/*
 * splash.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

export default class SplashState extends Phaser.State {
    create() {
        // create the phaser logo sprite
        this.leapImg = this.add.sprite(this.world.centerX, this.world.centerY,
                constants.AssetKeys.LEAP_HOWTO);
        this.leapImg.anchor.set(0.5);
        this.leapImg.scale.set(0.7);
        this.leapImg.alpha = 0;

        // create the fade-in tween
        this.add.tween(this.leapImg)
                      .to({alpha: 1}, 2500, Phaser.Easing.Cubic.In, true, 0, 0, true)
                      .onComplete.add(f => this.state.start('play'));
    }
}
