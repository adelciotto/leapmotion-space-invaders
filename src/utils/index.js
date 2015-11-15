/*
 * utils.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import _ from 'underscore';

const utils = {
    objFreezeRecursive(obj) {
        // makes first level of props read-only
        Object.freeze(obj);

        // iterates over props and recursively makes them read-only
        _.each(obj, (val, key) => {
            if (_.isObject(val)) {
                Object.freeze(obj[key]);
            }
        });
    },

    objCheckDefaults(obj, defaults) {
        _.each(defaults, (val, key) => {
            if (typeof obj[key] === 'undefined') {
                obj[key] = val;
            }
        });
    }
};

export default utils;
