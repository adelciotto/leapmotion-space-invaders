/*
 * leap_controller.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import Leap from 'leapjs';
import LeapUtils from './leap_utils';
import _ from 'underscore';

const MinHandVisible = 0.25;

export default class LeapController {
    constructor() {
        this._listeners = {};

        // initialise leapjs
        this._controller = new Leap.Controller({ enableGestures: true });
        this._controller.connect();
        this._controller.on('frame', this._onFrame.bind(this));
    }

    on(listener, callback, ctx = null, options = {}) {
        _.each(listener.defaultOpts, (val, key) => {
            if (typeof options[key] === 'undefined') {
                options[key] = val;
            }
        });

        this._listeners[listener.name] = {
            callback: callback.bind(ctx),
            options: options
        };
    }

    _onFrame(frame) {
        _.each(frame.hands, (hand) => {
            // check the time the hand has been visible to the device.
            // This helps ensure that minor motion or environmental changes not in control of the
            // player don't affect the gameplay.
            if (hand && hand.timeVisible > MinHandVisible) {
                _.each(this._listeners, (val, key) => {
                    this[`_process${key}`](frame, hand, val);
                });
            }
        });
    }

    _processOnMove(frame, hand, listener) {
        const opts = listener.options;
        const pos = (opts.axis === LeapUtils.Axis.ALL ? hand.stabilizedPalmPosition :
                hand.stabilizedPalmPosition[opts.axis]);

        listener.callback(pos, hand);
    }

    _processOnPinching(frame, hand, listener) {
        const opts = listener.options;

        if (hand.pinchStrength > opts.minPinchStrength) {
            listener.callback(LeapUtils.findPinchingFinger(hand), hand);
        }
    }
}
