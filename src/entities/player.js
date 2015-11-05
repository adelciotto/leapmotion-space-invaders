/*
 * player.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';
import Weapon from './weapon';

const SpawnXPos = constants.GAME_WIDTH / 2;

export default class Player extends Phaser.Sprite {
    constructor(game) {
        super(game, SpawnXPos, 0, constants.AssetKeys.SPRITESHEET, 6);

        this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

        this.anchor.set(0.5);
        this.scale.set(0.5);
        this.tint = 0x00FF00;
        this._lastPinchedFingerId = 0;
        this.weapon = new Weapon(game);

        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.fixedRotation = true;
        this.body.allowGravity = false;
        this.body.collideWorldBounds = true;
        this.reset();
    }

    reset() {
        super.reset(SpawnXPos, constants.GAME_HEIGHT - this.height);
    }

    setPosition(rawPos) {
        // the leapmotion palm position vectors origin is in the middle of the device, while the
        // games x-origin is left corner, so we need to add half the game width to center the player.
        this.x = rawPos*2 + constants.GAME_WIDTH/2;
        this.x = Phaser.Math.clamp(this.x, 0, constants.GAME_WIDTH);
    }

    fire(fingerId) {
        if (fingerId !== this._lastPinchedFingerId) {
            this.weapon.fire(this);
            this._lastPinchedFingerId = fingerId;
        }
    }
}
