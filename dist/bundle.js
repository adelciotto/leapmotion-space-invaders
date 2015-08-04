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
        LEAP_LOGO: 'leap-logo',
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

            this.stage.backgroundColor = 0xFFFFFF;
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
            this.helpText = this.add.text(this.game.width / 2, this.game.height * 0.9, 'Roll your hand to rotate the sprite', { fontSize: 32, align: 'center' });
            this.helpText.anchor.set(0.5);

            this.controller = new Leap.Controller({ enableGestures: true });
            this.controller.connect();

            this.controller.on('frame', this._onFrame.bind(this));
        }
    }, {
        key: '_onFrame',
        value: function _onFrame(frame) {
            var _this = this;

            frame.hands.forEach(function (hand, idx) {
                _this.logo.rotation = -hand.roll();
            });
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
            this.load.image(_constants.constants.AssetKeys.LEAP_LOGO, 'res/img/leap-motion-logo.png');
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
            this.leapLogo = this.add.sprite(this.world.centerX, this.world.centerY, _constants.constants.AssetKeys.LEAP_LOGO);
            this.leapLogo.anchor.set(0.5);
            this.leapLogo.scale.set(1.5);
            this.leapLogo.alpha = 0;

            // create the phaser logo sprite
            this.phaserLogo = this.add.sprite(this.world.centerX, this.world.centerY, _constants.constants.AssetKeys.PHASER_LOGO);
            this.phaserLogo.anchor.set(0.5);
            this.phaserLogo.alpha = 0;

            // create the fade-in tween
            var leapTween = this.add.tween(this.leapLogo).to({ alpha: 1 }, 1000, Phaser.Easing.Cubic.In, true, 0, 0, true);
            leapTween.onComplete.add(function (f) {
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29uc3RhbnRzLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL3N0YXRlcy9ib290LmpzIiwic3JjL3N0YXRlcy9pbmRleC5qcyIsInNyYy9zdGF0ZXMvcGxheS5qcyIsInNyYy9zdGF0ZXMvcHJlbG9hZC5qcyIsInNyYy9zdGF0ZXMvc3BsYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7QUFPQTs7QUFFQSxPQUFPLGVBQWUsU0FBUyxjQUFjO0lBQ3pDLE9BQU87O0FBSEosSUFBTSxZQUFZO0lBQ3JCLFdBQVc7UUFDUCxXQUFXO1FBQ1gsYUFBYTs7O0FBUXJCLFFBQVEsWUFBWTtzM0JBQ2syQjs7QUNuQnQzQjs7Ozs7OztBQU9BOztBQUFBLElBQUksU0FBUyxRQUFROztBQUVyQixPQUFPLFNBQVMsWUFBVztJQUN2QixJQUFNLE9BQU8sSUFBSSxPQUFPLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxRQUFROzs7SUFHNUQsRUFBRSxLQUFLLFFBQVEsVUFBQyxLQUFLLEtBQVE7UUFDekIsS0FBSyxNQUFNLElBQUcsS0FBSSxLQUFPOzs7SUFHN0IsS0FBSyxNQUFNLE1BQU07O2svQ0FJNjlDOztBQ3JCbC9DOzs7Ozs7O0FBT0E7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOzs7QUFHWCxJQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixJQUFJLE9BQU8sU0FBUyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxTQUFTLE1BQU0sV0FBVyxPQUFPLFFBQVEsRUFBRSxJQUFJLFNBQVMsSUFBSSxXQUFXLEtBQUssV0FBVyxLQUFLLE9BQU8sU0FBUyxTQUFTLFdBQVcsU0FBUyxPQUFPLElBQUksV0FBVyxNQUFNLFNBQVMsU0FBUyxXQUFXLElBQUksT0FBTyxPQUFPLHlCQUF5QixRQUFRLFdBQVcsSUFBSSxTQUFTLFdBQVcsRUFBRSxJQUFJLFNBQVMsT0FBTyxlQUFlLFNBQVMsSUFBSSxXQUFXLE1BQU0sRUFBRSxPQUFPLGtCQUFrQixFQUFFLEtBQUssUUFBUSxNQUFNLFVBQVUsTUFBTSxVQUFVLFNBQVMsTUFBTSxTQUFTLG9CQUFvQixJQUFJLFdBQVcsTUFBTSxFQUFFLE9BQU8sS0FBSyxjQUFjLEVBQUUsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFdBQVcsV0FBVyxFQUFFLE9BQU8sYUFBYSxPQUFPLE9BQU8sS0FBSzs7QUFFMW9CLFNBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxTQUFTLFVBQVUsVUFBVSxZQUFZLEVBQUUsSUFBSSxPQUFPLGVBQWUsY0FBYyxlQUFlLE1BQU0sRUFBRSxNQUFNLElBQUksVUFBVSw2REFBNkQsT0FBTyxlQUFlLFNBQVMsWUFBWSxPQUFPLE9BQU8sY0FBYyxXQUFXLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxVQUFVLFlBQVksT0FBTyxVQUFVLE1BQU0sY0FBYyxXQUFXLElBQUksWUFBWSxPQUFPLGlCQUFpQixPQUFPLGVBQWUsVUFBVSxjQUFjLFNBQVMsWUFBWTs7QUFFamUsSUFkcUIsWUFBUyxDQUFBLFVBQUEsZUFBQTtJQWUxQixVQWZpQixXQUFTOztJQWlCMUIsU0FqQmlCLFlBQVM7UUFrQnRCLGdCQUFnQixNQWxCSDs7UUFvQmIsS0FBSyxPQUFPLGVBcEJDLFVBQVMsWUFBQSxlQUFBLE1BQUEsTUFBQSxNQUFBOzs7SUF1QjFCLGFBdkJpQixXQUFTLENBQUE7UUF3QnRCLEtBQUs7UUFDTCxPQXhCRSxTQUFBLFNBQUc7O1lBRUwsS0FBSyxLQUFLLElBQUksT0FBTyxPQUFPLE9BQU87O1lBRW5DLEtBQUssTUFBTSxrQkFBa0I7WUFDN0IsS0FBSyxRQUFRLFlBQVksT0FBTyxRQUFROzs7WUFHeEMsS0FBSyxNQUFNLFdBQVcsS0FBSztZQUMzQixLQUFLLE1BQU0sWUFBWSxLQUFLO1lBQzVCLEtBQUssTUFBTSx3QkFBd0I7WUFDbkMsS0FBSyxNQUFNLHNCQUFzQjtZQUNqQyxLQUFLLE1BQU0sWUFBWSxLQUFLLE1BQU0sc0JBQ1gsT0FBTyxhQUFhOzs7O1lBSTNDLEtBQUssTUFBTSxTQUFTLGNBQWMsQ0FDOUIsT0FBTyxTQUFTLElBQ2hCLE9BQU8sU0FBUztZQUVwQixLQUFLLE1BQU0sY0FBYzs7WUFFekIsS0FBSyxNQUFNLE1BQU07Ozs7SUF3QnJCLE9BaERpQjtHQUFrQixPQUFPOztBQW1EOUMsUUFBUSxhQW5EYTtBQW9EckIsT0FBTyxVQUFVLFFBQVE7OGdHQUNxL0Y7O0FDNUQ5Z0c7Ozs7Ozs7QUFPQTs7QUFBQSxRQUFRLE9BQU8sUUFBUTtBQUN2QixRQUFRLFVBQVUsUUFBUTtBQUMxQixRQUFRLFNBQVMsUUFBUTtBQUN6QixRQUFRLE9BQU8sUUFBUTtrakNBRzJoQzs7QUNibGpDOzs7Ozs7O0FBT0E7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOzs7QUFHWCxJQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixJQUFJLE9BQU8sU0FBUyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxTQUFTLE1BQU0sV0FBVyxPQUFPLFFBQVEsRUFBRSxJQUFJLFNBQVMsSUFBSSxXQUFXLEtBQUssV0FBVyxLQUFLLE9BQU8sU0FBUyxTQUFTLFdBQVcsU0FBUyxPQUFPLElBQUksV0FBVyxNQUFNLFNBQVMsU0FBUyxXQUFXLElBQUksT0FBTyxPQUFPLHlCQUF5QixRQUFRLFdBQVcsSUFBSSxTQUFTLFdBQVcsRUFBRSxJQUFJLFNBQVMsT0FBTyxlQUFlLFNBQVMsSUFBSSxXQUFXLE1BQU0sRUFBRSxPQUFPLGtCQUFrQixFQUFFLEtBQUssUUFBUSxNQUFNLFVBQVUsTUFBTSxVQUFVLFNBQVMsTUFBTSxTQUFTLG9CQUFvQixJQUFJLFdBQVcsTUFBTSxFQUFFLE9BQU8sS0FBSyxjQUFjLEVBQUUsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFdBQVcsV0FBVyxFQUFFLE9BQU8sYUFBYSxPQUFPLE9BQU8sS0FBSzs7QUFFMW9CLFNBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxTQUFTLFVBQVUsVUFBVSxZQUFZLEVBQUUsSUFBSSxPQUFPLGVBQWUsY0FBYyxlQUFlLE1BQU0sRUFBRSxNQUFNLElBQUksVUFBVSw2REFBNkQsT0FBTyxlQUFlLFNBQVMsWUFBWSxPQUFPLE9BQU8sY0FBYyxXQUFXLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxVQUFVLFlBQVksT0FBTyxVQUFVLE1BQU0sY0FBYyxXQUFXLElBQUksWUFBWSxPQUFPLGlCQUFpQixPQUFPLGVBQWUsVUFBVSxjQUFjLFNBQVMsWUFBWTs7QUFFamUsSUFBSSxhQUFhLFFBZFM7O0FBZ0IxQixJQWRxQixZQUFTLENBQUEsVUFBQSxlQUFBO0lBZTFCLFVBZmlCLFdBQVM7O0lBaUIxQixTQWpCaUIsWUFBUztRQWtCdEIsZ0JBQWdCLE1BbEJIOztRQW9CYixLQUFLLE9BQU8sZUFwQkMsVUFBUyxZQUFBLGVBQUEsTUFBQSxNQUFBLE1BQUE7OztJQXVCMUIsYUF2QmlCLFdBQVMsQ0FBQTtRQXdCdEIsS0FBSztRQUNMLE9BeEJFLFNBQUEsU0FBRztZQUNMLEtBQUssT0FBTyxLQUFLLElBQUksT0FBTyxLQUFLLE1BQU0sU0FBUyxLQUFLLE1BQU0sU0FDL0IsV0FMM0IsVUFLcUMsVUFBVTtZQUNoRCxLQUFLLEtBQUssT0FBTyxJQUFJO1lBQ3JCLEtBQUssV0FBVyxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssUUFBTSxHQUFHLEtBQUssS0FBSyxTQUFPLEtBQ3BDLHVDQUNBLEVBQUUsVUFBVSxJQUFJLE9BQU87WUFDckQsS0FBSyxTQUFTLE9BQU8sSUFBSTs7WUFFekIsS0FBSyxhQUFhLElBQUksS0FBSyxXQUFXLEVBQUUsZ0JBQWdCO1lBQ3hELEtBQUssV0FBVzs7WUFFaEIsS0FBSyxXQUFXLEdBQUcsU0FBUyxLQUFLLFNBQVMsS0FBSzs7T0F1QmhEO1FBQ0MsS0FBSztRQUNMLE9BdEJJLFNBQUEsU0FBQyxPQUFPO1lBdUJSLElBQUksUUFBUTs7WUF0QmhCLE1BQU0sTUFBTSxRQUFRLFVBQUMsTUFBTSxLQUFRO2dCQUMvQixNQUFLLEtBQUssV0FBVyxDQUFDLEtBQUs7Ozs7O0lBNkJuQyxPQS9DaUI7R0FBa0IsT0FBTzs7QUFrRDlDLFFBQVEsYUFsRGE7QUFtRHJCLE9BQU8sVUFBVSxRQUFROzBtR0FDaWxHOztBQzdEMW1HOzs7Ozs7O0FBT0E7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOzs7QUFHWCxJQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixJQUFJLE9BQU8sU0FBUyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxTQUFTLE1BQU0sV0FBVyxPQUFPLFFBQVEsRUFBRSxJQUFJLFNBQVMsSUFBSSxXQUFXLEtBQUssV0FBVyxLQUFLLE9BQU8sU0FBUyxTQUFTLFdBQVcsU0FBUyxPQUFPLElBQUksV0FBVyxNQUFNLFNBQVMsU0FBUyxXQUFXLElBQUksT0FBTyxPQUFPLHlCQUF5QixRQUFRLFdBQVcsSUFBSSxTQUFTLFdBQVcsRUFBRSxJQUFJLFNBQVMsT0FBTyxlQUFlLFNBQVMsSUFBSSxXQUFXLE1BQU0sRUFBRSxPQUFPLGtCQUFrQixFQUFFLEtBQUssUUFBUSxNQUFNLFVBQVUsTUFBTSxVQUFVLFNBQVMsTUFBTSxTQUFTLG9CQUFvQixJQUFJLFdBQVcsTUFBTSxFQUFFLE9BQU8sS0FBSyxjQUFjLEVBQUUsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFdBQVcsV0FBVyxFQUFFLE9BQU8sYUFBYSxPQUFPLE9BQU8sS0FBSzs7QUFFMW9CLFNBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxTQUFTLFVBQVUsVUFBVSxZQUFZLEVBQUUsSUFBSSxPQUFPLGVBQWUsY0FBYyxlQUFlLE1BQU0sRUFBRSxNQUFNLElBQUksVUFBVSw2REFBNkQsT0FBTyxlQUFlLFNBQVMsWUFBWSxPQUFPLE9BQU8sY0FBYyxXQUFXLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxVQUFVLFlBQVksT0FBTyxVQUFVLE1BQU0sY0FBYyxXQUFXLElBQUksWUFBWSxPQUFPLGlCQUFpQixPQUFPLGVBQWUsVUFBVSxjQUFjLFNBQVMsWUFBWTs7QUFFamUsSUFBSSxhQUFhLFFBZFM7O0FBZ0IxQixJQWRxQixlQUFZLENBQUEsVUFBQSxlQUFBO0lBZTdCLFVBZmlCLGNBQVk7O0lBaUI3QixTQWpCaUIsZUFBWTtRQWtCekIsZ0JBQWdCLE1BbEJIOztRQW9CYixLQUFLLE9BQU8sZUFwQkMsYUFBWSxZQUFBLGVBQUEsTUFBQSxNQUFBLE1BQUE7OztJQXVCN0IsYUF2QmlCLGNBQVksQ0FBQTtRQXdCekIsS0FBSztRQUNMLE9BeEJHLFNBQUEsVUFBRztZQUNOLEtBQUssS0FBSyxNQUFNLFdBSmYsVUFJeUIsVUFBVSxXQUNwQjtZQUNoQixLQUFLLEtBQUssTUFBTSxXQU5mLFVBTXlCLFVBQVUsYUFBYTs7T0F5QmxEO1FBQ0MsS0FBSztRQUNMLE9BeEJFLFNBQUEsU0FBRztZQUNMLEtBQUssTUFBTSxNQUFNOzs7O0lBNEJyQixPQXBDaUI7R0FBcUIsT0FBTzs7QUF1Q2pELFFBQVEsYUF2Q2E7QUF3Q3JCLE9BQU8sVUFBVSxRQUFROzBuREFDaW1EOztBQ2xEMW5EOzs7Ozs7O0FBT0E7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOzs7QUFHWCxJQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEsV0FBVyxLQUFLLGlCQUFpQixPQUFPLFVBQVUsYUFBYSxZQUFZLGFBQWEsRUFBRSxJQUFJLFlBQVksaUJBQWlCLFlBQVksV0FBVyxhQUFhLElBQUksYUFBYSxpQkFBaUIsYUFBYSxjQUFjLE9BQU87O0FBRWppQixJQUFJLE9BQU8sU0FBUyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxTQUFTLE1BQU0sV0FBVyxPQUFPLFFBQVEsRUFBRSxJQUFJLFNBQVMsSUFBSSxXQUFXLEtBQUssV0FBVyxLQUFLLE9BQU8sU0FBUyxTQUFTLFdBQVcsU0FBUyxPQUFPLElBQUksV0FBVyxNQUFNLFNBQVMsU0FBUyxXQUFXLElBQUksT0FBTyxPQUFPLHlCQUF5QixRQUFRLFdBQVcsSUFBSSxTQUFTLFdBQVcsRUFBRSxJQUFJLFNBQVMsT0FBTyxlQUFlLFNBQVMsSUFBSSxXQUFXLE1BQU0sRUFBRSxPQUFPLGtCQUFrQixFQUFFLEtBQUssUUFBUSxNQUFNLFVBQVUsTUFBTSxVQUFVLFNBQVMsTUFBTSxTQUFTLG9CQUFvQixJQUFJLFdBQVcsTUFBTSxFQUFFLE9BQU8sS0FBSyxjQUFjLEVBQUUsSUFBSSxTQUFTLEtBQUssS0FBSyxJQUFJLFdBQVcsV0FBVyxFQUFFLE9BQU8sYUFBYSxPQUFPLE9BQU8sS0FBSzs7QUFFMW9CLFNBQVMsZ0JBQWdCLFVBQVUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsY0FBYyxFQUFFLE1BQU0sSUFBSSxVQUFVOztBQUVoSCxTQUFTLFVBQVUsVUFBVSxZQUFZLEVBQUUsSUFBSSxPQUFPLGVBQWUsY0FBYyxlQUFlLE1BQU0sRUFBRSxNQUFNLElBQUksVUFBVSw2REFBNkQsT0FBTyxlQUFlLFNBQVMsWUFBWSxPQUFPLE9BQU8sY0FBYyxXQUFXLFdBQVcsRUFBRSxhQUFhLEVBQUUsT0FBTyxVQUFVLFlBQVksT0FBTyxVQUFVLE1BQU0sY0FBYyxXQUFXLElBQUksWUFBWSxPQUFPLGlCQUFpQixPQUFPLGVBQWUsVUFBVSxjQUFjLFNBQVMsWUFBWTs7QUFFamUsSUFBSSxhQUFhLFFBZFM7O0FBZ0IxQixJQWRxQixjQUFXLENBQUEsVUFBQSxlQUFBO0lBZTVCLFVBZmlCLGFBQVc7O0lBaUI1QixTQWpCaUIsY0FBVztRQWtCeEIsZ0JBQWdCLE1BbEJIOztRQW9CYixLQUFLLE9BQU8sZUFwQkMsWUFBVyxZQUFBLGVBQUEsTUFBQSxNQUFBLE1BQUE7OztJQXVCNUIsYUF2QmlCLGFBQVcsQ0FBQTtRQXdCeEIsS0FBSztRQUNMLE9BeEJFLFNBQUEsU0FBRztZQXlCRCxJQUFJLFFBQVE7OztZQXZCaEIsS0FBSyxXQUFXLEtBQUssSUFBSSxPQUFPLEtBQUssTUFBTSxTQUFTLEtBQUssTUFBTSxTQUMvQixXQU4vQixVQU15QyxVQUFVO1lBQ3BELEtBQUssU0FBUyxPQUFPLElBQUk7WUFDekIsS0FBSyxTQUFTLE1BQU0sSUFBSTtZQUN4QixLQUFLLFNBQVMsUUFBUTs7O1lBR3RCLEtBQUssYUFBYSxLQUFLLElBQUksT0FBTyxLQUFLLE1BQU0sU0FBUyxLQUFLLE1BQU0sU0FDL0IsV0FiakMsVUFhMkMsVUFBVTtZQUN0RCxLQUFLLFdBQVcsT0FBTyxJQUFJO1lBQzNCLEtBQUssV0FBVyxRQUFROzs7WUFHeEIsSUFBTSxZQUFZLEtBQUssSUFBSSxNQUFNLEtBQUssVUFDckIsR0FBRyxFQUFDLE9BQU8sS0FBSSxNQUNaLE9BQU8sT0FBTyxNQUFNLElBQUksTUFBTSxHQUFHLEdBQUc7WUFDeEQsVUFBVSxXQUFXLElBQUksVUFBQSxHQUFLO2dCQUMxQixJQUFNLGNBQWMsTUFBSyxJQUFJLE1BQU0sTUFBSyxZQUNyQixHQUFHLEVBQUMsT0FBTyxLQUFJLE1BQU0sT0FBTyxPQUFPLE1BQU0sSUFDdEMsTUFBTSxHQUFHLEdBQUc7Z0JBQ2xDLFlBQVksV0FBVyxJQUFJLFVBQUEsR0FBQztvQkFxQnBCLE9BckJ3QixNQUFLLE1BQU0sTUFBTTs7Ozs7O0lBMkJ6RCxPQWxEaUI7R0FBb0IsT0FBTzs7QUFxRGhELFFBQVEsYUFyRGE7QUFzRHJCLE9BQU8sVUFBVSxRQUFRO3MrSEFDNjhIIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbiAqIGNvbnN0YW50cy5qc1xuICogQ29weXJpZ2h0IChDKSAyMDE1IGFkZWxjaW90dG8gPGFudGhkZWwuZGV2ZWxvcGVyQGdtYWlsLmNvbT5cbiAqXG4gKiBEaXN0cmlidXRlZCB1bmRlciB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNvbnN0YW50cyA9IHtcbiAgICBBc3NldEtleXM6IHtcbiAgICAgICAgTEVBUF9MT0dPOiAnbGVhcC1sb2dvJyxcbiAgICAgICAgUEhBU0VSX0xPR086ICdwaGFzZXItbG9nbycsXG4gICAgfVxufTtcbiIsIi8qXG4gKiBpbmRleC5qc1xuICogQ29weXJpZ2h0IChDKSAyMDE1IGFkZWxjaW90dG8gPGFudGhkZWwuZGV2ZWxvcGVyQGdtYWlsLmNvbT5cbiAqXG4gKiBEaXN0cmlidXRlZCB1bmRlciB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxudmFyIHN0YXRlcyA9IHJlcXVpcmUoJy4vc3RhdGVzJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNDgwLCBQaGFzZXIuQVVUTywgJ2dhbWUnLCBudWxsKTtcblxuICAgIC8vIGFkZCBhbGwgdGhlIGdhbWUgc3RhdGVzIGFuZCB0aGVuIHN0YXJ0IHRoZSBib290IHN0YXRlXG4gICAgXy5lYWNoKHN0YXRlcywgKHZhbCwga2V5KSA9PiB7XG4gICAgICAgIGdhbWUuc3RhdGUuYWRkKGAke2tleX1gLCB2YWwpO1xuICAgIH0pO1xuXG4gICAgZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xufTtcbiIsIi8qXG4gKiBib290LmpzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgYWRlbGNpb3R0byA8YW50aGRlbC5kZXZlbG9wZXJAZ21haWwuY29tPlxuICpcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBQaGFzZXIgRGVidWcgcGx1Z2luXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQucGx1Z2luKFBoYXNlci5QbHVnaW4uRGVidWcpO1xuXG4gICAgICAgIHRoaXMuc3RhZ2UuYmFja2dyb3VuZENvbG9yID0gMHhGRkZGRkY7XG4gICAgICAgIHRoaXMucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuXG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0aGUgc2NhbGUgbWFuYWdlclxuICAgICAgICB0aGlzLnNjYWxlLm1pbldpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5zY2FsZS5taW5IZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IHRoaXMuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhhc2VyLlNjYWxlTWFuYWdlci5TSE9XX0FMTDtcblxuICAgICAgICAvLyBjYXB0dXJlIGNlcnRhaW4ga2V5cyB0byBwcmV2ZW50IHRoZWlyIGRlZmF1bHQgYWN0aW9ucyBpbiB0aGUgYnJvd3Nlci5cbiAgICAgICAgLy8gdGhpcyBpcyBvbmx5IG5lY2Vzc2FyeSBiZWNhdXNlIHRoaXMgaXMgYW4gSFRNTDUgZ2FtZS5cbiAgICAgICAgdGhpcy5pbnB1dC5rZXlib2FyZC5hZGRLZXlDYXB0dXJlKFtcbiAgICAgICAgICAgIFBoYXNlci5LZXlib2FyZC5VUCxcbiAgICAgICAgICAgIFBoYXNlci5LZXlib2FyZC5ET1dOXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcblxuICAgICAgICB0aGlzLnN0YXRlLnN0YXJ0KCdwcmVsb2FkJyk7XG4gICAgfVxufVxuIiwiLypcbiAqIGluZGV4LmpzXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgYWRlbGNpb3R0byA8YW50aGRlbC5kZXZlbG9wZXJAZ21haWwuY29tPlxuICpcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG5leHBvcnRzLmJvb3QgPSByZXF1aXJlKCcuL2Jvb3QuanMnKTtcbmV4cG9ydHMucHJlbG9hZCA9IHJlcXVpcmUoJy4vcHJlbG9hZC5qcycpO1xuZXhwb3J0cy5zcGxhc2ggPSByZXF1aXJlKCcuL3NwbGFzaC5qcycpO1xuZXhwb3J0cy5wbGF5ID0gcmVxdWlyZSgnLi9wbGF5LmpzJyk7XG4iLCIvKlxuICogcGxheS5qc1xuICogQ29weXJpZ2h0IChDKSAyMDE1IGFkZWxjaW90dG8gPGFudGhkZWwuZGV2ZWxvcGVyQGdtYWlsLmNvbT5cbiAqXG4gKiBEaXN0cmlidXRlZCB1bmRlciB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMubG9nbyA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLndvcmxkLmNlbnRlclgsIHRoaXMud29ybGQuY2VudGVyWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0YW50cy5Bc3NldEtleXMuUEhBU0VSX0xPR08pO1xuICAgICAgICB0aGlzLmxvZ28uYW5jaG9yLnNldCgwLjUpO1xuICAgICAgICB0aGlzLmhlbHBUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud2lkdGgvMiwgdGhpcy5nYW1lLmhlaWdodCowLjksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdSb2xsIHlvdXIgaGFuZCB0byByb3RhdGUgdGhlIHNwcml0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZm9udFNpemU6IDMyLCBhbGlnbjogJ2NlbnRlcicgfSk7XG4gICAgICAgIHRoaXMuaGVscFRleHQuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBMZWFwLkNvbnRyb2xsZXIoeyBlbmFibGVHZXN0dXJlczogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNvbm5lY3QoKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIub24oJ2ZyYW1lJywgdGhpcy5fb25GcmFtZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBfb25GcmFtZShmcmFtZSkge1xuICAgICAgICBmcmFtZS5oYW5kcy5mb3JFYWNoKChoYW5kLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9nby5yb3RhdGlvbiA9IC1oYW5kLnJvbGwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLypcbiAqIHByZWxvYWQuanNcbiAqIENvcHlyaWdodCAoQykgMjAxNSBhZGVsY2lvdHRvIDxhbnRoZGVsLmRldmVsb3BlckBnbWFpbC5jb20+XG4gKlxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGNvbnN0YW50cy5Bc3NldEtleXMuTEVBUF9MT0dPLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlcy9pbWcvbGVhcC1tb3Rpb24tbG9nby5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGNvbnN0YW50cy5Bc3NldEtleXMuUEhBU0VSX0xPR08sICdyZXMvaW1nL3BoYXNlci5wbmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ3NwbGFzaCcpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBzcGxhc2guanNcbiAqIENvcHlyaWdodCAoQykgMjAxNSBhZGVsY2lvdHRvIDxhbnRoZGVsLmRldmVsb3BlckBnbWFpbC5jb20+XG4gKlxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGFzaFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgaHRtbCBsb2dvIHNwcml0ZVxuICAgICAgICB0aGlzLmxlYXBMb2dvID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMud29ybGQuY2VudGVyWCwgdGhpcy53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0YW50cy5Bc3NldEtleXMuTEVBUF9MT0dPKTtcbiAgICAgICAgdGhpcy5sZWFwTG9nby5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMubGVhcExvZ28uc2NhbGUuc2V0KDEuNSk7XG4gICAgICAgIHRoaXMubGVhcExvZ28uYWxwaGEgPSAwO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgcGhhc2VyIGxvZ28gc3ByaXRlXG4gICAgICAgIHRoaXMucGhhc2VyTG9nbyA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLndvcmxkLmNlbnRlclgsIHRoaXMud29ybGQuY2VudGVyWSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0YW50cy5Bc3NldEtleXMuUEhBU0VSX0xPR08pO1xuICAgICAgICB0aGlzLnBoYXNlckxvZ28uYW5jaG9yLnNldCgwLjUpO1xuICAgICAgICB0aGlzLnBoYXNlckxvZ28uYWxwaGEgPSAwO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZmFkZS1pbiB0d2VlblxuICAgICAgICBjb25zdCBsZWFwVHdlZW4gPSB0aGlzLmFkZC50d2Vlbih0aGlzLmxlYXBMb2dvKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHthbHBoYTogMX0sIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhhc2VyLkVhc2luZy5DdWJpYy5JbiwgdHJ1ZSwgMCwgMCwgdHJ1ZSk7XG4gICAgICAgIGxlYXBUd2Vlbi5vbkNvbXBsZXRlLmFkZChmID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBoYXNlclR3ZWVuID0gdGhpcy5hZGQudHdlZW4odGhpcy5waGFzZXJMb2dvKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHthbHBoYTogMX0sIDEwMDAsIFBoYXNlci5FYXNpbmcuQ3ViaWMuSW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSwgMCwgMCwgdHJ1ZSk7XG4gICAgICAgICAgICBwaGFzZXJUd2Vlbi5vbkNvbXBsZXRlLmFkZChmID0+IHRoaXMuc3RhdGUuc3RhcnQoJ3BsYXknKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==