/*
 * play.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import { constants } from '../constants';

export default class PlayState extends Phaser.State {
    create() {
        this.logo = this.add.sprite(this.world.centerX, this.world.centerY,
                                    constants.AssetKeys.PHASER_LOGO);
        this.logo.anchor.set(0.5);
    }

    update() {
        this.logo.rotation += 0.05;
    }
}
