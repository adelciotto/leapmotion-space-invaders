/*
 * play.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import Leap from '../leap';
import Player from '../entities/player';
import AlienSquad from '../entities/alien_squad';
import config from '../config.json';

export default class PlayState extends Phaser.State {
    create() {
        this._currentScore = 0;

        this._player = new Player(this.game);
        this._aliens = new AlienSquad(this.game);
        this.add.existing(this._player);
        this.add.existing(this._aliens);

        this._leapController = new Leap.LeapController();
        this._leapController.on(Leap.LeapListeners.OnMove, this._handleOnMove, this,
                { axis: Leap.LeapUtils.Axis.X });
        this._leapController.on(Leap.LeapListeners.OnPinching, this._handleOnPinching, this,
                { minPinchStrength: 0.85 });
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    }

    update() {
        this.physics.arcade.overlap(this._player.weapon, this._aliens, this._handleAlienHit, null,
                this);
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

    _handleOnMove(palmPosition) {
        this._player.setPosition(palmPosition);
    }

    _handleOnPinching(pinchingFinger) {
        this._player.fire(pinchingFinger.id);
    }

    _handleAlienHit(laser, alien) {
        laser.kill();
        alien.kill();
    }
}
