/*
 * alien_squad.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

const XPadding = 35;
const YPadding = 28;
const AlienMoveDistance = 10;

class Alien extends Phaser.Sprite {
    constructor(game, x, y, frame1, frame2) {
        super(game, x, y, constants.AssetKeys.SPRITESHEET);

        this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

        this.scale.set(0.5);
        this.anchor.set(0.5);
        this._frame1 = frame1;
        this._frame2 = frame2;
        this.frame = frame1;

        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.setSize(51, 34, -2);
        this.body.fixedRotation = true;
        this.body.allowGravity = false;
    }

    fixedUpdate() {
        // toggle the aliens frame
        if (this.frame === this._frame1) {
            this.frame = this._frame2;
        } else if (this.frame === this._frame2) {
            this.frame = this._frame1;
        }
    }
}

export default class AlienSquad extends Phaser.Group {
    constructor(game, numCols = constants.DEFAULT_NUM_ALIEN_COLS, numRows =
            constants.DEFAULT_NUM_ALIEN_ROWS) {
        super(game);

        this.numCols = numCols;
        this.numRows = numRows;
        this.enableBody = true;
        this.physicsBodyType = Phaser.Physics.ARCADE;

        this._currentUpdateInterval = Phaser.Timer.SECOND * 1;
        game.time.events.loop(this._currentUpdateInterval, this._fixedUpdate, this);
        this._createAliens();
    }

    update() {
        this.forEachAlive((alien) => {
            alien.update();
        });
    }

    _fixedUpdate() {
        this.callAll('fixedUpdate');
    }

    _descend() {
        this.y += AlienMoveDistance;
    }

    _createAliens() {
        let frame1, frame2;
        for (let i = 0; i < this.numCols; ++i) {
            for (let j = 0; j < this.numRows; ++j) {
                switch (j) {
                    case 0:
                        frame1 = 1; frame2 = 2;
                        break;
                    case 1:
                    case 2:
                        frame1 = 4; frame2 = 5;
                        break;
                    case 3:
                    case 4:
                        frame1 = 0; frame2 = 3;
                        break;
                }
                this.add(new Alien(this.game, i * XPadding, j * YPadding, frame1,
                            frame2));
            }
        }
        this.x = 15;
        this.y = 20;

        const tween = this.game.add.tween(this).to({ x: 115 }, 3000,
                Phaser.Easing.Sinusoidal.InOut, true, 0, 1000, true);
        tween.onLoop.add(this._descend, this);
    }
}
