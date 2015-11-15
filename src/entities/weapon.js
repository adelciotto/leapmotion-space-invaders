/*
 * weapon.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import Laser from './laser';

export default class Weapon extends Phaser.Group {
    constructor(game, dir = -1) {
        super(game, game.world, 'Weapon', false, true, Phaser.Physics.ARCADE);

        this.nextFire = 0;
        this.laserSpeed = 400;
        this.fireRate = 0;
        this._dir = dir;

        for (let i = 0; i < 32; ++i) {
            this.add(new Laser(game), true);
        }
    }

    fire(source) {
        if (this.game.time.time < this.nextFire) {
            return;
        }

        const y = source.y - source.width/2;

        this.getFirstExists(false).fire(source.x, y, this.laserSpeed * this._dir);
        this.nextFire = this.game.time.time + this.fireRate;
    }
}
