/*
 * laser.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

export default class Laser extends Phaser.Sprite {
    constructor(game) {
        super(game, parent.x, parent.y, game.cache.getBitmapData(constants.AssetKeys.RECT));

        this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

        this.anchor.set(0.5);
        this.height = 16;
        this.width = 2;
        this.checkWorldBounds = this.outOfBoundsKill = true;
        this.exists = false;
    }

    fire(x, y, speed) {
        this.reset(x, y);

        this.body.allowGravity = false;
        this.body.fixedRotation = true;
        this.body.velocity.y = speed;
    }
}
