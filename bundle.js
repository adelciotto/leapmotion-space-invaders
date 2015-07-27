(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * ===========================================================================
 * File: constants.js
 * Author: Anthony Del Ciotto
 * Desc: TODO
 * ===========================================================================
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

exports['default'] = constants;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
/*
 * ===========================================================================
 * File: index.js
 * Author: Anthony Del Ciotto
 * Desc: The games main entry point.
 * ===========================================================================
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
 * ===========================================================================
 * File: boot.js
 * Author: Anthony Del Ciotto
 * Desc: This state configures the Phaser framework; setting various
 * properties and options.
 * ===========================================================================
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
'use strict';

exports.boot = require('./boot.js');
exports.preload = require('./preload.js');
exports.splash = require('./splash.js');
exports.play = require('./play.js');

},{"./boot.js":3,"./play.js":5,"./preload.js":6,"./splash.js":7}],5:[function(require,module,exports){
/*
 * ===========================================================================
 * File: play.js
 * Author: Anthony Del Ciotto
 * Desc: This state contains all the main gameplay logic.
 * ===========================================================================
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var PlayState = (function (_Phaser$State) {
    _inherits(PlayState, _Phaser$State);

    function PlayState() {
        _classCallCheck(this, PlayState);

        _get(Object.getPrototypeOf(PlayState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PlayState, [{
        key: 'create',
        value: function create() {
            this.logo = this.add.sprite(this.world.centerX, this.world.centerY, _constants2['default'].AssetKeys.PHASER_LOGO);
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
 * ===========================================================================
 * File: preload.js
 * Author: Anthony Del Ciotto
 * Desc: This state preloads all the assets.
 * ===========================================================================
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var PreloadState = (function (_Phaser$State) {
    _inherits(PreloadState, _Phaser$State);

    function PreloadState() {
        _classCallCheck(this, PreloadState);

        _get(Object.getPrototypeOf(PreloadState.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PreloadState, [{
        key: 'preload',
        value: function preload() {
            this.load.image(_constants2['default'].AssetKeys.HTML_LOGO, 'res/img/html.png');
            this.load.image(_constants2['default'].AssetKeys.PHASER_LOGO, 'res/img/phaser.png');
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
 * ===========================================================================
 * File: splash.js
 * Author: Anthony Del Ciotto
 * Desc: This state preloads all the assets.
 * ===========================================================================
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

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
            this.htmlLogo = this.add.sprite(this.world.centerX, this.world.centerY, _constants2['default'].AssetKeys.HTML_LOGO);
            this.htmlLogo.anchor.set(0.5);
            this.htmlLogo.alpha = 0;

            // create the phaser logo sprite
            this.phaserLogo = this.add.sprite(this.world.centerX, this.world.centerY, _constants2['default'].AssetKeys.PHASER_LOGO);
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29uc3RhbnRzLmpzIiwic3JjL2luZGV4LmpzIiwic3JjL3N0YXRlcy9ib290LmpzIiwic3JjL3N0YXRlcy9pbmRleC5qcyIsInNyYy9zdGF0ZXMvcGxheS5qcyIsInNyYy9zdGF0ZXMvcHJlbG9hZC5qcyIsInNyYy9zdGF0ZXMvc3BsYXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7O0FBUUE7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOztBQUhYLElBQUksWUFBWTtJQUNaLFdBQVc7UUFDUCxXQUFXO1FBQ1gsYUFBYTs7OztBQVNyQixRQUFRLGFBTE87QUFNZixPQUFPLFVBQVUsUUFBUTtzK0JBQzY4Qjs7QUN0QnQrQjs7Ozs7Ozs7QUFRQTs7QUFBQSxJQUFJLFNBQVMsUUFBUTs7QUFFckIsT0FBTyxTQUFTLFlBQVc7SUFDdkIsSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLEtBQUssS0FBSyxPQUFPLE1BQU0sUUFBUTs7O0lBRzFELEVBQUUsS0FBSyxRQUFRLFVBQUMsS0FBSyxLQUFRO1FBQ3pCLEtBQUssTUFBTSxJQUFHLEtBQUksS0FBTzs7O0lBRzdCLEtBQUssTUFBTSxNQUFNOztzbERBSWlrRDs7QUN0QnRsRDs7Ozs7Ozs7O0FBU0E7O0FBRUEsT0FBTyxlQUFlLFNBQVMsY0FBYztJQUN6QyxPQUFPOzs7QUFHWCxJQUFJLGVBQWUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxpQkFBaUIsUUFBUSxPQUFPLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLLEVBQUUsSUFBSSxhQUFhLE1BQU0sSUFBSSxXQUFXLGFBQWEsV0FBVyxjQUFjLE9BQU8sV0FBVyxlQUFlLE1BQU0sSUFBSSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sT0FBTyxlQUFlLFFBQVEs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QWdCLE1BdEJIOztRQXdCYixLQUFLLE9BQU8sZUF4QkMsWUFBVyxZQUFBLGVBQUEsTUFBQSxNQUFBLE1BQUE7OztJQTJCNUIsYUEzQmlCLGFBQVcsQ0FBQTtRQTRCeEIsS0FBSztRQUNMLE9BNUJFLFNBQUEsU0FBRztZQTZCRCxJQUFJLFFBQVE7OztZQTNCaEIsS0FBSyxXQUFXLEtBQUssSUFBSSxPQUFPLEtBQUssTUFBTSxTQUFTLEtBQUssTUFBTSxTQUMzRCxZQUFBLFdBQVUsVUFBVTtZQUN4QixLQUFLLFNBQVMsT0FBTyxJQUFJO1lBQ3pCLEtBQUssU0FBUyxRQUFROzs7WUFHdEIsS0FBSyxhQUFhLEtBQUssSUFBSSxPQUFPLEtBQUssTUFBTSxTQUFTLEtBQUssTUFBTSxTQUM3RCxZQUFBLFdBQVUsVUFBVTtZQUN4QixLQUFLLFdBQVcsT0FBTyxJQUFJO1lBQzNCLEtBQUssV0FBVyxRQUFROzs7WUFHeEIsSUFBSSxZQUFZLEtBQUssSUFBSSxNQUFNLEtBQUssVUFBVSxHQUFHLEVBQUMsT0FBTyxLQUFJLE1BQ3pELE9BQU8sT0FBTyxNQUFNLElBQUksTUFBTSxHQUFHLEdBQUc7WUFDeEMsVUFBVSxXQUFXLElBQUksVUFBQSxHQUFLO2dCQUMxQixJQUFJLGNBQWMsTUFBSyxJQUFJLE1BQU0sTUFBSyxZQUFZLEdBQUcsRUFBQyxPQUFPLEtBQ3pELE1BQU0sT0FBTyxPQUFPLE1BQU0sSUFBSSxNQUFNLEdBQUcsR0FBRztnQkFDOUMsWUFBWSxXQUFXLElBQUksVUFBQSxHQUFDO29CQTJCcEIsT0EzQndCLE1BQUssTUFBTSxNQUFNOzs7Ozs7SUFpQ3pELE9BckRpQjtHQUFvQixPQUFPOztBQXdEaEQsUUFBUSxhQXhEYTtBQXlEckIsT0FBTyxVQUFVLFFBQVE7a3VIQUN5c0giLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGaWxlOiBjb25zdGFudHMuanNcbiAqIEF1dGhvcjogQW50aG9ueSBEZWwgQ2lvdHRvXG4gKiBEZXNjOiBUT0RPXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG52YXIgY29uc3RhbnRzID0ge1xuICAgIEFzc2V0S2V5czoge1xuICAgICAgICBIVE1MX0xPR086ICdodG1sLWxvZ28nLFxuICAgICAgICBQSEFTRVJfTE9HTzogJ3BoYXNlci1sb2dvJyxcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHM7XG4iLCIvKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGaWxlOiBpbmRleC5qc1xuICogQXV0aG9yOiBBbnRob255IERlbCBDaW90dG9cbiAqIERlc2M6IFRoZSBnYW1lcyBtYWluIGVudHJ5IHBvaW50LlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxudmFyIHN0YXRlcyA9IHJlcXVpcmUoJy4vc3RhdGVzJyk7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg4MDAsIDQ4MCwgUGhhc2VyLkFVVE8sICdnYW1lJywgbnVsbCk7XG5cbiAgICAvLyBhZGQgYWxsIHRoZSBnYW1lIHN0YXRlcyBhbmQgdGhlbiBzdGFydCB0aGUgYm9vdCBzdGF0ZVxuICAgIF8uZWFjaChzdGF0ZXMsICh2YWwsIGtleSkgPT4ge1xuICAgICAgICBnYW1lLnN0YXRlLmFkZChgJHtrZXl9YCwgdmFsKTtcbiAgICB9KTtcblxuICAgIGdhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcbn07XG4iLCIvKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGaWxlOiBib290LmpzXG4gKiBBdXRob3I6IEFudGhvbnkgRGVsIENpb3R0b1xuICogRGVzYzogVGhpcyBzdGF0ZSBjb25maWd1cmVzIHRoZSBQaGFzZXIgZnJhbWV3b3JrOyBzZXR0aW5nIHZhcmlvdXNcbiAqIHByb3BlcnRpZXMgYW5kIG9wdGlvbnMuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gYWRkIHRoZSBQaGFzZXIgRGVidWcgcGx1Z2luXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQucGx1Z2luKFBoYXNlci5QbHVnaW4uRGVidWcpO1xuXG4gICAgICAgIHRoaXMucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuXG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0aGUgc2NhbGUgbWFuYWdlclxuICAgICAgICB0aGlzLnNjYWxlLm1pbldpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgdGhpcy5zY2FsZS5taW5IZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgdGhpcy5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnBhZ2VBbGlnblZlcnRpY2FsbHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnNjYWxlLnNjYWxlTW9kZSA9IHRoaXMuc2NhbGUuZnVsbFNjcmVlblNjYWxlTW9kZSA9XG4gICAgICAgICAgICBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xuXG4gICAgICAgIC8vIGNhcHR1cmUgY2VydGFpbiBrZXlzIHRvIHByZXZlbnQgdGhlaXIgZGVmYXVsdCBhY3Rpb25zIGluIHRoZSBicm93c2VyLlxuICAgICAgICAvLyB0aGlzIGlzIG9ubHkgbmVjZXNzYXJ5IGJlY2F1c2UgdGhpcyBpcyBhbiBIVE1MNSBnYW1lLlxuICAgICAgICB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleUNhcHR1cmUoW1xuICAgICAgICAgICAgUGhhc2VyLktleWJvYXJkLlVQLFxuICAgICAgICAgICAgUGhhc2VyLktleWJvYXJkLkRPV05cbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ3ByZWxvYWQnKTtcbiAgICB9XG59XG4iLCJleHBvcnRzLmJvb3QgPSByZXF1aXJlKCcuL2Jvb3QuanMnKTtcbmV4cG9ydHMucHJlbG9hZCA9IHJlcXVpcmUoJy4vcHJlbG9hZC5qcycpO1xuZXhwb3J0cy5zcGxhc2ggPSByZXF1aXJlKCcuL3NwbGFzaC5qcycpO1xuZXhwb3J0cy5wbGF5ID0gcmVxdWlyZSgnLi9wbGF5LmpzJyk7XG4iLCIvKlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGaWxlOiBwbGF5LmpzXG4gKiBBdXRob3I6IEFudGhvbnkgRGVsIENpb3R0b1xuICogRGVzYzogVGhpcyBzdGF0ZSBjb250YWlucyBhbGwgdGhlIG1haW4gZ2FtZXBsYXkgbG9naWMuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmxvZ28gPSB0aGlzLmFkZC5zcHJpdGUodGhpcy53b3JsZC5jZW50ZXJYLCB0aGlzLndvcmxkLmNlbnRlclksXG4gICAgICAgICAgICBjb25zdGFudHMuQXNzZXRLZXlzLlBIQVNFUl9MT0dPKTtcbiAgICAgICAgdGhpcy5sb2dvLmFuY2hvci5zZXQoMC41KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMubG9nby5yb3RhdGlvbiArPSAwLjA1O1xuICAgIH1cbn1cbiIsIi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZpbGU6IHByZWxvYWQuanNcbiAqIEF1dGhvcjogQW50aG9ueSBEZWwgQ2lvdHRvXG4gKiBEZXNjOiBUaGlzIHN0YXRlIHByZWxvYWRzIGFsbCB0aGUgYXNzZXRzLlxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKi9cblxuaW1wb3J0IGNvbnN0YW50cyBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMubG9hZC5pbWFnZShjb25zdGFudHMuQXNzZXRLZXlzLkhUTUxfTE9HTywgJ3Jlcy9pbWcvaHRtbC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKGNvbnN0YW50cy5Bc3NldEtleXMuUEhBU0VSX0xPR08sICdyZXMvaW1nL3BoYXNlci5wbmcnKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoJ3NwbGFzaCcpO1xuICAgIH1cbn1cbiIsIi8qXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZpbGU6IHNwbGFzaC5qc1xuICogQXV0aG9yOiBBbnRob255IERlbCBDaW90dG9cbiAqIERlc2M6IFRoaXMgc3RhdGUgcHJlbG9hZHMgYWxsIHRoZSBhc3NldHMuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqL1xuXG5pbXBvcnQgY29uc3RhbnRzIGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwbGFzaFN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgaHRtbCBsb2dvIHNwcml0ZVxuICAgICAgICB0aGlzLmh0bWxMb2dvID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMud29ybGQuY2VudGVyWCwgdGhpcy53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgY29uc3RhbnRzLkFzc2V0S2V5cy5IVE1MX0xPR08pO1xuICAgICAgICB0aGlzLmh0bWxMb2dvLmFuY2hvci5zZXQoMC41KTtcbiAgICAgICAgdGhpcy5odG1sTG9nby5hbHBoYSA9IDA7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBwaGFzZXIgbG9nbyBzcHJpdGVcbiAgICAgICAgdGhpcy5waGFzZXJMb2dvID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMud29ybGQuY2VudGVyWCwgdGhpcy53b3JsZC5jZW50ZXJZLFxuICAgICAgICAgICAgY29uc3RhbnRzLkFzc2V0S2V5cy5QSEFTRVJfTE9HTyk7XG4gICAgICAgIHRoaXMucGhhc2VyTG9nby5hbmNob3Iuc2V0KDAuNSk7XG4gICAgICAgIHRoaXMucGhhc2VyTG9nby5hbHBoYSA9IDA7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmYWRlLWluIHR3ZWVuXG4gICAgICAgIHZhciBodG1sVHdlZW4gPSB0aGlzLmFkZC50d2Vlbih0aGlzLmh0bWxMb2dvKS50byh7YWxwaGE6IDF9LCAxMDAwLFxuICAgICAgICAgICAgUGhhc2VyLkVhc2luZy5DdWJpYy5JbiwgdHJ1ZSwgMCwgMCwgdHJ1ZSk7XG4gICAgICAgIGh0bWxUd2Vlbi5vbkNvbXBsZXRlLmFkZChmID0+IHtcbiAgICAgICAgICAgIHZhciBwaGFzZXJUd2VlbiA9IHRoaXMuYWRkLnR3ZWVuKHRoaXMucGhhc2VyTG9nbykudG8oe2FscGhhOiAxfSxcbiAgICAgICAgICAgICAgICAxMDAwLCBQaGFzZXIuRWFzaW5nLkN1YmljLkluLCB0cnVlLCAwLCAwLCB0cnVlKTtcbiAgICAgICAgICAgIHBoYXNlclR3ZWVuLm9uQ29tcGxldGUuYWRkKGYgPT4gdGhpcy5zdGF0ZS5zdGFydCgncGxheScpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19