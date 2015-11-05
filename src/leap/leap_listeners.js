/*
 * leap_listeners.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import utils from '../utils';
import LeapUtils from './leap_utils';

const LeapListeners = {
    OnMove: {
        name: 'OnMove',
        defaultOpts: { axis: LeapUtils.Axis.ALL }
    },
    OnPinching: {
        name: 'OnPinching',
        defaultOpts: { minPinchStrength: 0.75 }
    }
};

utils.objFreezeRecursive(LeapListeners);
export default LeapListeners;

