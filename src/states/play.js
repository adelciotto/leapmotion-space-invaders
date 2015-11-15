/*
 * play.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import Leap from '../leap';
import Player from '../entities/player';
import AlienSquad from '../entities/alien_squad';
import FadeInOutText from '../gui/fadeinout_text';
//import config from '../config.json';
import constants from '../constants';

const TextXPos = constants.GAME_WIDTH / 2;
const TextYPos = constants.GAME_HEIGHT - 25;

export default class PlayState extends Phaser.State {
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this._player = this.add.existing(new Player(this.game));
        this._aliens = this.add.existing(new AlienSquad(this.game, false));
        this._score = 0;
        this._round = 0;

        this._createGui();
        this._createLeapController();
    }

    update() {
        this.physics.arcade.overlap(this._player.weapon, this._aliens, this._handleAlienHit, null,
                this);
    }

    //render() {
        //if (config.isDevEnv) {
            //// draw player bounding box
            //this.game.debug.body(this._player, 'green', false);

            //// draw alien bounding boxes
            //this._aliens.forEachAlive((alien) => {
                //this.game.debug.body(alien, 'green', false);
            //});
        //}
    //}

    _createGui() {
        const graphics = this.game.add.graphics(0, 0);
        const y = constants.GAME_HEIGHT - 50;

        graphics.lineStyle(2, 0x00FF00, 1);
        graphics.moveTo(0, y);
        graphics.lineTo(constants.GAME_WIDTH, y);

        this.add.existing(new FadeInOutText(this.game, TextXPos, TextYPos,
                    constants.TextLabels.HOWTO_MOVE, 3000, this._showShootHelpTxt.bind(this),
                    constants.MED_TEXT_SIZE, true, true));
    }

    _showShootHelpTxt() {
        this.add.existing(new FadeInOutText(this.game, TextXPos, TextYPos,
                    constants.TextLabels.HOWTO_SHOOT, 3000, null, constants.MED_TEXT_SIZE, true,
                    true));
    }

    _createLeapController() {
        this._leapController = new Leap.LeapController(this.game);
        this._leapController.on(Leap.LeapListeners.OnMove, this._handleOnMove, this,
                { axis: Leap.LeapUtils.Axis.X });
        this._leapController.on(Leap.LeapListeners.OnPinched, this._handleOnPinched, this);
    }

    _handleOnMove(palmPosition) {
        this._player.setPosition(palmPosition);
    }

    _handleOnPinched(pinchingFinger) {
        this._player.fire(pinchingFinger.type);
    }

    _handleAlienHit(laser, alien) {
        if (this._round === 0) {
            this._round++;
            this._aliens.start();
        }

        laser.kill();
        alien.kill();
    }
}
