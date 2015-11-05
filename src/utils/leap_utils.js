/*
 * leap_utils.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import utils from './index';
import Leap from 'leapjs';

const leapUtils = {
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

utils.objFreezeRecursive(leapUtils);
export default leapUtils;
