/*
 * splash.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import { constants } from '../constants';

export default class SplashState extends Phaser.State {
    create() {
        // create the html logo sprite
        this.htmlLogo = this.add.sprite(this.world.centerX, this.world.centerY,
                                        constants.AssetKeys.HTML_LOGO);
        this.htmlLogo.anchor.set(0.5);
        this.htmlLogo.alpha = 0;

        // create the phaser logo sprite
        this.phaserLogo = this.add.sprite(this.world.centerX, this.world.centerY,
                                          constants.AssetKeys.PHASER_LOGO);
        this.phaserLogo.anchor.set(0.5);
        this.phaserLogo.alpha = 0;

        // create the fade-in tween
        const htmlTween = this.add.tween(this.htmlLogo)
                        .to({alpha: 1}, 1000,
                            Phaser.Easing.Cubic.In, true, 0, 0, true);
        htmlTween.onComplete.add(f => {
            const phaserTween = this.add.tween(this.phaserLogo)
                              .to({alpha: 1}, 1000, Phaser.Easing.Cubic.In,
                                  true, 0, 0, true);
            phaserTween.onComplete.add(f => this.state.start('play'));
        });
    }
}
