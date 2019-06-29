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
            var styleEl = document.createElement('style');
            styleEl.textContent = "\n      #root {\n        text-align: center;\n      }\n      ";
            var rootEl = document.createElement('div');
            rootEl.id = 'root';
            _this.valueEl = document.createElement('div');
            _this.valueEl.id = 'root__value';
            _this.valueEl.textContent = _this.value.toString();
            _this.buttonEl = document.createElement('button');
            _this.buttonEl.id = 'root__button';
            _this.buttonEl.textContent = 'Increment';
            _this.buttonEl.addEventListener('click', _this.handleClick);
            shadow.appendChild(styleEl);
            rootEl.appendChild(_this.valueEl);
            rootEl.appendChild(_this.buttonEl);
            shadow.appendChild(rootEl);
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
