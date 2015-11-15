/*
 * fadeinout_text.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

export default class FadeInOutText extends Phaser.BitmapText {
    constructor(game, x, y, text, yoyoDelay, cb = null, size = constants.DEFAULT_TEXT_SIZE,
            autoshow = false, autoDestroy = false) {
        super(game, x, y, constants.AssetKeys.GAME_FONT, text, size);

        this.anchor.set(0.5);
        this._yoyoDelay = yoyoDelay;
        this._cb = cb;
        this._autoDestroy = autoDestroy;

        if (autoshow) {
            this.show();
        }
    }

    show() {
        this.alpha = 0;
        this.revive();

        const tween = this.game.add.tween(this);
        tween.to({ alpha: 1 }, 500, Phaser.Easing.Cubic.In, false, 0, 0, true);
        tween.onComplete.add(() => {
            if (this._cb) this._cb();

            if (this._autoDestroy) {
                this.destroy();
            } else {
                this.kill();
            }
        });
        tween.yoyoDelay(this._yoyoDelay);
        tween.start();
    }
}
