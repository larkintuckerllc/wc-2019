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
            var shadow = _this.attachShadow({ mode: 'closed' });
            var rootEl = document.createElement('div');
            rootEl.textContent = 'Hello World';
            shadow.appendChild(rootEl);
            return _this;
        }
        return HelloWorld;
    }(HTMLElement));
    window.customElements.define('hello-world', HelloWorld);
})();
