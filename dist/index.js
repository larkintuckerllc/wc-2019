"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var template = document.createElement('template');
    template.innerHTML = "\n  <style>\n    #root {\n      text-align: center;\n    }\n  </style>\n  <div id=\"root\">\n    <span id=\"root__value\"></span>\n    <button id=\"root__button\">Increment</button>\n  </div>\n  ";
    var HelloWorld = /** @class */ (function (_super) {
        __extends(HelloWorld, _super);
        function HelloWorld() {
            var _this = _super.call(this) || this;
            _this.buttonEl = null;
            _this.value = 0;
            _this.valueEl = null;
            _this.handleClick = function () {
                if (_this.valueEl === null) {
                    return;
                }
                _this.value += 1;
                _this.valueEl.textContent = _this.value.toString();
            };
            var shadow = _this.attachShadow({ mode: 'closed' });
            shadow.appendChild(template.content.cloneNode(true));
            _this.valueEl = shadow.getElementById('root__value');
            _this.buttonEl = shadow.getElementById('root__button');
            if (_this.valueEl === null || _this.buttonEl === null) {
                return _this;
            }
            _this.valueEl.textContent = _this.value.toString();
            _this.buttonEl.addEventListener('click', _this.handleClick);
            return _this;
        }
        HelloWorld.prototype.disconnectedCallback = function () {
            if (this.buttonEl === null) {
                return;
            }
            this.buttonEl.removeEventListener('click', this.handleClick);
        };
        return HelloWorld;
    }(HTMLElement));
    window.customElements.define('hello-world', HelloWorld);
})();
