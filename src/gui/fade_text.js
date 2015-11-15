/*
 * fade_text.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

export default class FadeText extends Phaser.BitmapText {
    constructor(game, x, y, text, fadeTime = 500, cb = null, size = constants.DEFAULT_TEXT_SIZE,
            autoshow = false) {
        super(game, x, y, constants.AssetKeys.GAME_FONT, text, size);

        this.anchor.set(0.5);
        this._fadeTime = fadeTime;
        this._cb = cb;

        if (autoshow) {
            this.show();
        }
    }

    hide() {
        this._createTween(1, 0)
            .onComplete.add(() => this.destroy())
            .start();
    }

    show() {
        this._createTween(0, 1)
            .onComplete.add(this._cb)
            .start();
    }

    _createTween(from, to) {
        this.alpha = from;

        const tween = this.game.add.tween(this);
        return tween.to({ alpha: to }, this._fadeTime, Phaser.Easing.Cubic.In, false);
    }
}
