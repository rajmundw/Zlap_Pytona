/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nconsole.log('hello');\n$(function () {\n    var Rutkowski = function Rutkowski() {\n        _classCallCheck(this, Rutkowski);\n\n        this.x = 0;\n        this.y = 0;\n        this.direction = 'right';\n    };\n\n    var Pyton = function Pyton() {\n        _classCallCheck(this, Pyton);\n\n        this.x = Math.round(Math.floor(Math.random() * 10));\n        this.y = Math.round(Math.floor(Math.random() * 10));\n    };\n\n    var Game = function () {\n        function Game() {\n            _classCallCheck(this, Game);\n\n            this.board = $('#board').children();\n            this.rutkowski = newRutkowski();\n            this.pyton = newPyton();\n            this.score = $('#score').children().children();\n            this.index = function (x, y) {\n                return x + y * 10;\n            };\n            this.counter = 250;\n        }\n\n        _createClass(Game, [{\n            key: 'turnRutkowski',\n            value: function turnRutkowski(event) {\n                switch (event.which) {\n                    case 37:\n                        this.rutkowski.direction = 'left';\n                        break;\n                    case 39:\n                        this.rutkowski.direction = 'right';\n                        break;\n                    case 38:\n                        this.rutkowski.direction = 'up';\n                        break;\n                    case 40:\n                        this.rutkowski.direction = 'down';\n                        break;\n                }\n            }\n        }, {\n            key: 'hideVisibleRutkowski',\n            value: function hideVisibleRutkowski() {\n                var currentRutkowskiClass = $('.rutkowski');\n                currentRutkowskiClass.removeClass('rutkowski');\n            }\n        }, {\n            key: 'showRutkowski',\n            value: function showRutkowski() {\n                $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');\n            }\n        }, {\n            key: 'showPyton',\n            value: function showPyton() {\n                $(this.board[this.index(this.pyton.x, this.pyton.y)]).addClass('pyton');\n            }\n        }, {\n            key: 'moveRutkowski',\n            value: function moveRutkowski() {\n                this.hideVisibleRutkowski();\n                if (this.rutkowski.direction === \"right\") {\n                    this.rutkowski.x = this.rutkowski.x + 1;\n                    $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');\n                } else if (this.rutkowski.direction === \"left\") {\n                    this.rutkowski.x = this.rutkowski.x - 1;\n                    $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');\n                } else if (this.rutkowski.direction === \"down\") {\n                    this.rutkowski.y = this.rutkowski.y + 1;\n                    $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');\n                } else if (this.rutkowski.direction === \"up\") {\n                    this.rutkowski.y = this.rutkowski.y - 1;\n                    $(this.board[this.index(this.rutkowski.x, this.rutkowski.y)]).addClass('rutkowski');\n                }\n\n                this.crash();\n                this.gameOver();\n            }\n        }, {\n            key: 'crash',\n            value: function crash() {\n                if (this.rutkowski.x == this.pyton.x && this.rutkowski.y == this.pyton.y) {\n                    $('.pyton').removeClass('pyton');\n                    result++;\n                    $(this.score).text(result);\n                    this.pyton.x = Math.round(Math.floor(Math.random() * 10));\n                    this.pyton.y = Math.round(Math.floor(Math.random() * 10));\n                    this.showPyton();\n                    this.counter -= 5;\n                    clearInterval(this.interval);\n                    this.startGame();\n                }\n            }\n        }, {\n            key: 'startGame',\n            value: function startGame() {\n                var _this = this;\n\n                this.interval = setInterval(function () {\n                    _this.moveRutkowski();\n                }, this.counter);\n            }\n        }, {\n            key: 'gameOver',\n            value: function gameOver() {\n                if (this.rutkowski.x < 0 || this.rutkowski.y < 0 || this.rutkowski.x > 9 || this.rutkowski.y > 9) {\n                    this.hideVisibleRutkowski();\n                    clearInterval(this.interval);\n                    var divGameOver = '<div class=\"game-over\">GAME OVER</div>';\n                    $('body').append(divGameOver);\n                }\n            }\n        }]);\n\n        return Game;\n    }();\n\n    document.addEventListener('keydown', function (event) {\n        game.turnRutkowski(event);\n    });\n\n    var newRutkowski = function newRutkowski() {\n        var rutkowski = new Rutkowski();\n        return rutkowski;\n    };\n    var newPyton = function newPyton() {\n        var pyton = new Pyton();\n        return pyton;\n    };\n    var result = 0;\n    var game = new Game();\n    game.showRutkowski();\n    game.showPyton();\n    game.startGame();\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });