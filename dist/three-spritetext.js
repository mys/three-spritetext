// Version 1.0.5 three-spritetext - https://github.com/vasturiano/three-spritetext
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.SpriteText = factory());
}(this, (function () { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var _class = function (_THREE$Sprite) {
    inherits(_class, _THREE$Sprite);

    function _class() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var textHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'rgba(255, 255, 255, 1)';
      classCallCheck(this, _class);

      var _this = possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, new THREE.SpriteMaterial({ map: new THREE.Texture() })));

      _this._text = text;
      _this._textHeight = textHeight;
      _this._color = color;

      _this._fontFace = 'Arial';
      _this._fontSize = 90; // defines text resolution

      _this._canvas = document.createElement('canvas');
      _this._texture = _this.material.map;
      _this._texture.minFilter = THREE.LinearFilter;

      _this._genCanvas();
      return _this;
    }

    createClass(_class, [{
      key: '_genCanvas',
      value: function _genCanvas() {
        var canvas = this._canvas;
        var ctx = canvas.getContext('2d');
        var expandVertically = 7; // set text above 3d object

        var font = 'bold ' + this.fontSize + 'px ' + this.fontFace;

        ctx.font = font;
        var textWidth = ctx.measureText(this.text).width;
        canvas.width = textWidth;
        canvas.height = this.fontSize * expandVertically;

        ctx.font = font;
        ctx.fillStyle = this.color;
        ctx.textBaseline = 'top';
        ctx.fillText(this.text, 0, 0);

        // Inject canvas into sprite
        this._texture.image = canvas;
        this._texture.needsUpdate = true;

        this.scale.set(this.textHeight * canvas.width / canvas.height * expandVertically, this.textHeight * expandVertically);
      }
    }, {
      key: 'clone',
      value: function clone() {
        return new this.constructor(this.text, this.textHeight, this.color).copy(this);
      }
    }, {
      key: 'copy',
      value: function copy(source) {
        THREE.Sprite.prototype.copy.call(this, source);

        this.color = source.color;
        this.fontFace = source.fontFace;
        this.fontSize = source.fontSize;

        return this;
      }
    }, {
      key: 'text',
      get: function get$$1() {
        return this._text;
      },
      set: function set$$1(text) {
        this._text = text;this._genCanvas();
      }
    }, {
      key: 'textHeight',
      get: function get$$1() {
        return this._textHeight;
      },
      set: function set$$1(textHeight) {
        this._textHeight = textHeight;this._genCanvas();
      }
    }, {
      key: 'color',
      get: function get$$1() {
        return this._color;
      },
      set: function set$$1(color) {
        this._color = color;this._genCanvas();
      }
    }, {
      key: 'fontFace',
      get: function get$$1() {
        return this._fontFace;
      },
      set: function set$$1(fontFace) {
        this._fontFace = fontFace;this._genCanvas();
      }
    }, {
      key: 'fontSize',
      get: function get$$1() {
        return this._fontSize;
      },
      set: function set$$1(fontSize) {
        this._fontSize = fontSize;this._genCanvas();
      }
    }]);
    return _class;
  }(THREE.Sprite);

  return _class;

})));
//# sourceMappingURL=three-spritetext.js.map
