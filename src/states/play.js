/*
 * play.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

require('leapjs-plugins');

import Player from '../entities/player';
import AlienSquad from '../entities/alien_squad';
import Leap from 'leapjs';
import leapUtils from '../utils/leap_utils';
import config from '../config.json';

const MinHandVisible = 0.25;
const MinPinchStrength = 0.75;

export default class PlayState extends Phaser.State {
    create() {
        this._currentScore = 0;

        this._player = new Player(this.game);
        this._aliens = new AlienSquad(this.game);
        this.add.existing(this._player);
        this.add.existing(this._aliens);

        this.controller = new Leap.Controller({ enableGestures: true });
        this.controller.connect();
        this.controller.on('frame', this._onFrame.bind(this));

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    update() {
        this.physics.arcade.overlap(this._player.weapon, this._aliens, this._onAlienHit, null, this);
    }

    render() {
        if (config.isDevEnv) {
            // draw player bounding box
            this.game.debug.body(this._player, 'green', false);

            // draw alien bounding boxes
            this._aliens.forEachAlive((alien) => {
                this.game.debug.body(alien, 'green', false);
            });
        }
    }

    _onFrame(frame) {
        frame.hands.forEach((hand, idx) => {
            if (hand.timeVisible > MinHandVisible) {
                this._player.setPosition(hand.palmPosition[0]);

                if (hand.pinchStrength > MinPinchStrength) {
                    this._player.fire(leapUtils.findPinchingFinger(hand).id);
                }
            }
        });
    }

    _onAlienHit(laser, alien) {
        laser.kill();
        alien.kill();
    }
}
