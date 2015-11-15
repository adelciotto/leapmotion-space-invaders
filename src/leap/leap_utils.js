/*
 * leap_utils.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import utils from '../utils';
import Leap from 'leapjs';

const LeapUtils = {
    DefaultOpts: {
        minPinchStrength: 0.8
    },

    Axis: {
        X: 0, Y: 1, Z: 2,
        ALL: '4'
    },

    findPinchingFinger(hand) {
        let pincher;
        let closest = 500;

        for (var f = 1; f < 5; ++f) {
            const curr = hand.fingers[f];
            const distance = Leap.vec3.distance(hand.thumb.tipPosition, curr.tipPosition);
            if (curr !== hand.thumb && distance < closest) {
                closest = distance;
                pincher = curr;
            }
        }

        return pincher;
    }
};

utils.objFreezeRecursive(LeapUtils);
export default LeapUtils;
