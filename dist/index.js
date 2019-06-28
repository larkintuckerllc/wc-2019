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
window.addEventListener('WebComponentsReady', function () {
    var HelloWorld = /** @class */ (function (_super) {
        __extends(HelloWorld, _super);
        function HelloWorld() {
            var _this = _super.call(this) || this;
            _this.flowerEl = null;
            _this.redEl = null;
            _this.blueEl = null;
            _this.handleRedClick = _this.handleRedClick.bind(_this);
            _this.handleBlueClick = _this.handleBlueClick.bind(_this);
            var shadowRootEl = _this.attachShadow({ mode: 'closed' });
            shadowRootEl.innerHTML = "\n        <style>\n          #root {\n            display: inline-block;\n            font-size: 0px;\n          }\n          .block {\n            display: inline-block;\n            width: 100px;\n            height: 100px;\n          }\n          .block--red {\n            background-color: red;\n          }\n          .block--blue {\n            background-color: blue;\n          }\n          #root__flower {\n            font-size: 20px;\n          }\n        </style>\n        <div id=\"root\">\n          <div id=\"root__red\" class=\"block block--red\"></div>\n          <div id=\"root__blue\" class=\"block block--blue\"></div>\n          <div id=\"root__flower\">&nbsp;</div>\n        </div>\n      ";
            _this.flowerEl = shadowRootEl.getElementById('root__flower');
            _this.redEl = shadowRootEl.getElementById('root__red');
            _this.blueEl = shadowRootEl.getElementById('root__blue');
            if (_this.redEl === null || _this.blueEl === null) {
                return _this;
            }
            _this.redEl.addEventListener('click', _this.handleRedClick);
            _this.blueEl.addEventListener('click', _this.handleBlueClick);
            return _this;
        }
        HelloWorld.prototype.disconnectedCallback = function () {
            if (this.redEl === null || this.blueEl === null) {
                return;
            }
            this.redEl.removeEventListener('click', this.handleRedClick);
            this.blueEl.removeEventListener('click', this.handleBlueClick);
        };
        HelloWorld.prototype.handleRedClick = function (e) {
            if (this.flowerEl == null) {
                return;
            }
            this.flowerEl.innerHTML = 'Red';
        };
        HelloWorld.prototype.handleBlueClick = function (e) {
            if (this.flowerEl == null) {
                return;
            }
            this.flowerEl.innerHTML = 'Blue';
        };
        return HelloWorld;
    }(HTMLElement));
    window.customElements.define('hello-world', HelloWorld);
    var rootEl = document.getElementById('root');
    if (rootEl === null) {
        return;
    }
    rootEl.appendChild(document.createElement('hello-world'));
    rootEl.appendChild(document.createElement('hello-world'));
});
