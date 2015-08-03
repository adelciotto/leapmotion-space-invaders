(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * constants.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var constants = {
    AssetKeys: {
        HTML_LOGO: 'html-logo',
        PHASER_LOGO: 'phaser-logo'
    }
};
exports.constants = constants;

},{}],2:[function(require,module,exports){
/*
 * index.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

var states = require('./states');

window.onload = function () {
    var game = new Phaser.Game(800, 480, Phaser.AUTO, 'game', null);

    // add all the game states and then start the boot state
    _.each(states, function (val, key) {
        game.state.add('' + key, val);
    });

    game.state.start('boot');
};

},{"./states":4}],3:[function(require,module,exports){
/*
 * boot.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootState = (function (_Phaser$State) {
    _inherits(BootState, _Phaser$State);

    function BootState() {
        _classCallCheck(this, BootState);

        _get(Object.getPrototypeOf(BootState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(BootState, [{
        key: 'create',
        value: function create() {
            // add the Phaser Debug plugin
            this.game.add.plugin(Phaser.Plugin.Debug);

            this.physics.startSystem(Phaser.Physics.ARCADE);

            // configure the scale manager
            this.scale.minWidth = this.width;
            this.scale.minHeight = this.height;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.scaleMode = this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

            // capture certain keys to prevent their default actions in the browser.
            // this is only necessary because this is an HTML5 game.
            this.input.keyboard.addKeyCapture([Phaser.Keyboard.UP, Phaser.Keyboard.DOWN]);
            this.input.maxPointers = 1;

            this.state.start('preload');
        }
    }]);

    return BootState;
})(Phaser.State);

exports['default'] = BootState;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
/*
 * index.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

exports.boot = require('./boot.js');
exports.preload = require('./preload.js');
exports.splash = require('./splash.js');
exports.play = require('./play.js');

},{"./boot.js":3,"./play.js":5,"./preload.js":6,"./splash.js":7}],5:[function(require,module,exports){
/*
 * play.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var PlayState = (function (_Phaser$State) {
    _inherits(PlayState, _Phaser$State);

    function PlayState() {
        _classCallCheck(this, PlayState);

        _get(Object.getPrototypeOf(PlayState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PlayState, [{
        key: 'create',
        value: function create() {
            this.logo = this.add.sprite(this.world.centerX, this.world.centerY, _constants.constants.AssetKeys.PHASER_LOGO);
            this.logo.anchor.set(0.5);
        }
    }, {
        key: 'update',
        value: function update() {
            this.logo.rotation += 0.05;
        }
    }]);

    return PlayState;
})(Phaser.State);

exports['default'] = PlayState;
module.exports = exports['default'];

},{"../constants":1}],6:[function(require,module,exports){
/*
 * preload.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var PreloadState = (function (_Phaser$State) {
    _inherits(PreloadState, _Phaser$State);

    function PreloadState() {
        _classCallCheck(this, PreloadState);

        _get(Object.getPrototypeOf(PreloadState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PreloadState, [{
        key: 'preload',
        value: function preload() {
            this.load.image(_constants.constants.AssetKeys.HTML_LOGO, 'res/img/html.png');
            this.load.image(_constants.constants.AssetKeys.PHASER_LOGO, 'res/img/phaser.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('splash');
        }
    }]);

    return PreloadState;
})(Phaser.State);

exports['default'] = PreloadState;
module.exports = exports['default'];

},{"../constants":1}],7:[function(require,module,exports){
/*
 * splash.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var SplashState = (function (_Phaser$State) {
    _inherits(SplashState, _Phaser$State);

    function SplashState() {
        _classCallCheck(this, SplashState);

        _get(Object.getPrototypeOf(SplashState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SplashState, [{
        key: 'create',
        value: function create() {
            var _this = this;

            // create the html logo sprite
            this.htmlLogo = this.add.sprite(this.world.centerX, this.world.centerY, _constants.constants.AssetKeys.HTML_LOGO);
            this.htmlLogo.anchor.set(0.5);
            this.htmlLogo.alpha = 0;

            // create the phaser logo sprite
            this.phaserLogo = this.add.sprite(this.world.centerX, this.world.centerY, _constants.constants.AssetKeys.PHASER_LOGO);
            this.phaserLogo.anchor.set(0.5);
            this.phaserLogo.alpha = 0;

            // create the fade-in tween
            var htmlTween = this.add.tween(this.htmlLogo).to({ alpha: 1 }, 1000, Phaser.Easing.Cubic.In, true, 0, 0, true);
            htmlTween.onComplete.add(function (f) {
                var phaserTween = _this.add.tween(_this.phaserLogo).to({ alpha: 1 }, 1000, Phaser.Easing.Cubic.In, true, 0, 0, true);
                phaserTween.onComplete.add(function (f) {
                    return _this.state.start('play');
                });
            });
        }
    }]);

    return SplashState;
})(Phaser.State);

exports['default'] = SplashState;
module.exports = exports['default'];

},{"../constants":1}]},{},[2])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29uc3RhbnRzLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL3N0YXRlcy9ib290LmpzIiwic3JjL3N0YXRlcy9pbmRleC5qcyIsInNyYy9zdGF0ZXMvcGxheS5qcyIsInNyYy9zdGF0ZXMvcHJlbG9hZC5qcyIsInNyYy9zdGF0ZXMvc3BsYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7QUFPQTs7QUFFQSxPQUFPLGVBQWUsU0FBUyxjQUFjO0lBQ3pDLE9BQU87O0FBSEosSUFBTSxZQUFZO0lBQ3JCLFdBQVc7UUFDUCxXQUFXO1FBQ1gsYUFBYTs7O0FBUXJCLFFBQVEsWUFBWTswMEJBQ3N6Qjs7QUNuQjEwQjs7Ozs7OztBQU9BOztBQUFBLElBQUksU0FBUyxRQUFROztBQUVyQixPQUFPLFNBQVMsWUFBVztJQUN2QixJQUFNLE9BQU8sSUFBSSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxRQUFROzs7SUFHNUQsRUFBRSxLQUFLLFFBQVEsVUFBQyxLQUFLLEtBQVE7UUFDekIsS0FBSyxNQUFNLElBQUcsS0FBSSxLQUFPOzs7SUFHN0IsS0FBSyxNQUFNLE1BQU07OzA4Q0FJcTdDOztBQ3JCMThDOzs7Ozs7O0FBT0E7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOzs7QUFHWCxJQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVB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LElBQUksT0FBTyxLQUFLLE1BQU0sU0FBUyxLQUFLLE1BQU0sU0FDL0IsV0FaakMsVUFZMkMsVUFBVTtZQUN0RCxLQUFLLFdBQVcsT0FBTyxJQUFJO1lBQzNCLEtBQUssV0FBVyxRQUFROzs7WUFHeEIsSUFBTSxZQUFZLEtBQUssSUFBSSxNQUFNLEtBQUssVUFDckIsR0FBRyxFQUFDLE9BQU8sS0FBSSxNQUNaLE9BQU8sT0FBTyxNQUFNLElBQUksTUFBTSxHQUFHLEdBQUc7WUFDeEQsVUFBVSxXQUFXLElBQUksVUFBQSxHQUFLO2dCQUMxQixJQUFNLGNBQWMsTUFBSyxJQUFJLE1BQU0sTUFBSyxZQUNyQixHQUFHLEVBQUMsT0FBTyxLQUFJLE1BQU0sT0FBTyxPQUFPLE1BQU0sSUFDdEMsTUFBTSxHQUFHLEdBQUc7Z0JBQ2xDLFlBQVksV0FBVyxJQUFJLFVBQUEsR0FBQztvQkFxQnBCLE9BckJ3QixNQUFLLE1BQU0sTUFBTTs7Ozs7O0lBMkJ6RCxPQWpEaUI7R0FBb0IsT0FBTzs7QUFvRGhELFFBQVEsYUFwRGE7QUFxRHJCLE9BQU8sVUFBVSxRQUFRO3N6SEFDNnhIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIGNvbnN0YW50cy5qc1xuICogQ29weXJpZ2h0IChDKSAyMDE1IGFkZWxjaW90dG8gPGFudGhkZWwuZGV2ZWxvcGVyQGdtYWlsLmNvbT5cbiAqXG4gKiBEaXN0cmlidXRlZCB1bmRlciB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNvbnN0YW50cyA9IHtcbiAgICBBc3NldEtleXM6IHtcbiAgICAgICAgSFRNTF9MT0dPOiAnaHRtbC1sb2dvJyxcbiAgICAgICAgUEhBU0VSX0xPR086ICdwaGFzZXItbG9nbycsXG4gICAgfVxufTtcbiIsIi8qXG4gKiBpbmRleC5qc1xuICogQ29weXJpZ2h0IChDKSAyMDE1IGFkZWxjaW90dG8gPGFudGhkZWwuZGV2ZWxvcGVyQGdtYWlsLmNvbT5cbiAqXG4gKiBEaXN0cmlidXRlZCB1bmRlciB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxudmFyIHN0YXRlcyA9IHJlcXVpcmUoJy4vc3RhdGVzJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNDgwLCBQaGFzZXIuQVVUTywgJ2dhbWUnLCBudWxsKTtcblxuICAgIC8vIGFkZCBhbGwgdGhlIGdhbWUgc3RhdGVzIGFuZCB0aGVuIHN0YXJ0IHRoZSBib290IHN0YXRlXG4gICAgXy5lYWNoKHN0YXRlcywgKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGdhbWUuc3RhdGUuYWRkKGAke2tleX1gLCB2YWwpO1xuICAgIH0pO1xuXG4gICAgZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xufTtcbiIsIi8qXG4gKiBib290LmpzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgYWRlbGNpb3R0byA8YW50aGRlbC5kZXZlbG9wZXJAZ21haWwuY29tPlxuICpcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBQaGFzZXIgRGVidWcgcGx1Z2luXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQucGx1Z2luKFBoYXNlci5QbHVnaW4uRGVidWcpO1xuXG4gICAgICAgIHRoaXMucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuXG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0aGUgc2NhbGUgbWFuYWdlclxuICAgICAgICB0aGlzLnNjYWxlLm1pbldpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5zY2FsZS5taW5IZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IHRoaXMuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcblxuICAgICAgICAvLyBjYXB0dXJlIGNlcnRhaW4ga2V5cyB0byBwcmV2ZW50IHRoZWlyIGRlZmF1bHQgYWN0aW9ucyBpbiB0aGUgYnJvd3Nlci5cbiAgICAgICAgLy8gdGhpcyBpcyBvbmx5IG5lY2Vzc2FyeSBiZWNhdXNlIHRoaXMgaXMgYW4gSFRNTDUgZ2FtZS5cbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXlDYXB0dXJlKFtcbiAgICAgICAgICAgIFBoYXNlci5LZXlib2FyZC5VUCxcbiAgICAgICAgICAgIFBoYXNlci5LZXlib2FyZC5ET1dOXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcblxuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdwcmVsb2FkJyk7XG4gICAgfVxufVxuIiwiLypcbiAqIGluZGV4LmpzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgYWRlbGNpb3R0byA8YW50aGRlbC5kZXZlbG9wZXJAZ21haWwuY29tPlxuICpcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5leHBvcnRzLmJvb3QgPSByZXF1aXJlKCcuL2Jvb3QuanMnKTtcbmV4cG9ydHMucHJlbG9hZCA9IHJlcXVpcmUoJy4vcHJlbG9hZC5qcycpO1xuZXhwb3J0cy5zcGxhc2ggPSByZXF1aXJlKCcuL3NwbGFzaC5qcycpO1xuZXhwb3J0cy5wbGF5ID0gcmVxdWlyZSgnLi9wbGF5LmpzJyk7XG4iLCIvKlxuICogcGxheS5qc1xuICogQ29weXJpZ2h0IChDKSAyMDE1IGFkZWxjaW90dG8gPGFudGhkZWwuZGV2ZWxvcGVyQGdtYWlsLmNvbT5cbiAqXG4gKiBEaXN0cmlidXRlZCB1bmRlciB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMubG9nbyA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLndvcmxkLmNlbnRlclgsIHRoaXMud29ybGQuY2VudGVyWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0YW50cy5Bc3NldEtleXMuUEhBU0VSX0xPR08pO1xuICAgICAgICB0aGlzLmxvZ28uYW5jaG9yLnNldCgwLjUpO1xuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5sb2dvLnJvdGF0aW9uICs9IDAuMDU7XG4gICAgfVxufVxuIiwiLypcbiAqIHByZWxvYWQuanNcbiAqIENvcHlyaWdodCAoQykgMjAxNSBhZGVsY2lvdHRvIDxhbnRoZGVsLmRldmVsb3BlckBnbWFpbC5jb20+XG4gKlxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGNvbnN0YW50cy5Bc3NldEtleXMuSFRNTF9MT0dPLCAncmVzL2ltZy9odG1sLnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoY29uc3RhbnRzLkFzc2V0S2V5cy5QSEFTRVJfTE9HTywgJ3Jlcy9pbWcvcGhhc2VyLnBuZycpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydCgnc3BsYXNoJyk7XG4gICAgfVxufVxuIiwiLypcbiAqIHNwbGFzaC5qc1xuICogQ29weXJpZ2h0IChDKSAyMDE1IGFkZWxjaW90dG8gPGFudGhkZWwuZGV2ZWxvcGVyQGdtYWlsLmNvbT5cbiAqXG4gKiBEaXN0cmlidXRlZCB1bmRlciB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BsYXNoU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBodG1sIGxvZ28gc3ByaXRlXG4gICAgICAgIHRoaXMuaHRtbExvZ28gPSB0aGlzLmFkZC5zcHJpdGUodGhpcy53b3JsZC5jZW50ZXJYLCB0aGlzLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RhbnRzLkFzc2V0S2V5cy5IVE1MX0xPR08pO1xuICAgICAgICB0aGlzLmh0bWxMb2dvLmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy5odG1sTG9nby5hbHBoYSA9IDA7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBwaGFzZXIgbG9nbyBzcHJpdGVcbiAgICAgICAgdGhpcy5waGFzZXJMb2dvID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMud29ybGQuY2VudGVyWCwgdGhpcy53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RhbnRzLkFzc2V0S2V5cy5QSEFTRVJfTE9HTyk7XG4gICAgICAgIHRoaXMucGhhc2VyTG9nby5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMucGhhc2VyTG9nby5hbHBoYSA9IDA7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmYWRlLWluIHR3ZWVuXG4gICAgICAgIGNvbnN0IGh0bWxUd2VlbiA9IHRoaXMuYWRkLnR3ZWVuKHRoaXMuaHRtbExvZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oe2FscGhhOiAxfSwgMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaGFzZXIuRWFzaW5nLkN1YmljLkluLCB0cnVlLCAwLCAwLCB0cnVlKTtcbiAgICAgICAgaHRtbFR3ZWVuLm9uQ29tcGxldGUuYWRkKGYgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGhhc2VyVHdlZW4gPSB0aGlzLmFkZC50d2Vlbih0aGlzLnBoYXNlckxvZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oe2FscGhhOiAxfSwgMTAwMCwgUGhhc2VyLkVhc2luZy5DdWJpYy5JbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLCAwLCAwLCB0cnVlKTtcbiAgICAgICAgICAgIHBoYXNlclR3ZWVuLm9uQ29tcGxldGUuYWRkKGYgPT4gdGhpcy5zdGF0ZS5zdGFydCgncGxheScpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19