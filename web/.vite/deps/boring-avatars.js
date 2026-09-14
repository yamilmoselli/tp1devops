import {
  __commonJS,
  require_react
} from "./chunk-GFWMZNU4.js";

// node_modules/boring-avatars/build/index.js
var require_build = __commonJS({
  "node_modules/boring-avatars/build/index.js"(exports, module) {
    !function(e, t) {
      if ("object" === typeof exports && "object" === typeof module) module.exports = t(require_react());
      else if ("function" === typeof define && define.amd) define(["react"], t);
      else {
        var r = "object" === typeof exports ? t(require_react()) : t(e.react);
        for (var l in r) ("object" === typeof exports ? exports : e)[l] = r[l];
      }
    }(exports, function(e) {
      return function(e2) {
        var t = {};
        function r(l) {
          if (t[l]) return t[l].exports;
          var i = t[l] = { i: l, l: false, exports: {} };
          return e2[l].call(i.exports, i, i.exports, r), i.l = true, i.exports;
        }
        return r.m = e2, r.c = t, r.d = function(e3, t2, l) {
          r.o(e3, t2) || Object.defineProperty(e3, t2, { enumerable: true, get: l });
        }, r.r = function(e3) {
          "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, r.t = function(e3, t2) {
          if (1 & t2 && (e3 = r(e3)), 8 & t2) return e3;
          if (4 & t2 && "object" === typeof e3 && e3 && e3.__esModule) return e3;
          var l = /* @__PURE__ */ Object.create(null);
          if (r.r(l), Object.defineProperty(l, "default", { enumerable: true, value: e3 }), 2 & t2 && "string" != typeof e3) for (var i in e3) r.d(l, i, (function(t3) {
            return e3[t3];
          }).bind(null, i));
          return l;
        }, r.n = function(e3) {
          var t2 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return r.d(t2, "a", t2), t2;
        }, r.o = function(e3, t2) {
          return Object.prototype.hasOwnProperty.call(e3, t2);
        }, r.p = "/", r(r.s = 1);
      }([function(t, r) {
        t.exports = e;
      }, function(e2, t, r) {
        e2.exports = r(2);
      }, function(e2, t, r) {
        "use strict";
        function l(e3, t2) {
          if (null == e3) return {};
          var r2, l2, i2 = function(e4, t3) {
            if (null == e4) return {};
            var r3, l3, i3 = {}, a3 = Object.keys(e4);
            for (l3 = 0; l3 < a3.length; l3++) r3 = a3[l3], t3.indexOf(r3) >= 0 || (i3[r3] = e4[r3]);
            return i3;
          }(e3, t2);
          if (Object.getOwnPropertySymbols) {
            var a2 = Object.getOwnPropertySymbols(e3);
            for (l2 = 0; l2 < a2.length; l2++) r2 = a2[l2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, r2) && (i2[r2] = e3[r2]);
          }
          return i2;
        }
        r.r(t);
        var i = r(0), a = r.n(i), n = function(e3) {
          for (var t2 = 0, r2 = 0; r2 < e3.length; r2++) {
            t2 = (t2 << 5) - t2 + e3.charCodeAt(r2), t2 &= t2;
          }
          return Math.abs(t2);
        }, c = function(e3, t2) {
          return Math.floor(e3 / Math.pow(10, t2) % 10);
        }, h = function(e3, t2) {
          return !(c(e3, t2) % 2);
        }, o = function(e3, t2, r2) {
          var l2 = e3 % t2;
          return r2 && c(e3, r2) % 2 === 0 ? -l2 : l2;
        }, s = function(e3, t2, r2) {
          return t2[e3 % r2];
        };
        var f = function(e3) {
          var t2 = e3.name, r2 = e3.colors, a2 = e3.title, c2 = e3.square, h2 = e3.size, f2 = l(e3, ["name", "colors", "title", "square", "size"]), m2 = function(e4, t3) {
            var r3 = n(e4), l2 = t3 && t3.length;
            return Array.from({ length: 3 }, function(e5, i2) {
              return { color: s(r3 + i2, t3, l2), translateX: o(r3 * (i2 + 1), 8, 1), translateY: o(r3 * (i2 + 1), 8, 2), scale: 1.2 + o(r3 * (i2 + 1), 4) / 10, rotate: o(r3 * (i2 + 1), 360, 1) };
            });
          }(t2, r2), d2 = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: h2, height: h2 }, f2), a2 && i.createElement("title", null, t2), i.createElement("mask", { id: d2, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: c2 ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(d2, ")") }, i.createElement("rect", { width: 80, height: 80, fill: m2[0].color }), i.createElement("path", { filter: "url(#filter_".concat(d2, ")"), d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: m2[1].color, transform: "translate(" + m2[1].translateX + " " + m2[1].translateY + ") rotate(" + m2[1].rotate + " 40 40) scale(" + m2[2].scale + ")" }), i.createElement("path", { filter: "url(#filter_".concat(d2, ")"), style: { mixBlendMode: "overlay" }, d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: m2[2].color, transform: "translate(" + m2[2].translateX + " " + m2[2].translateY + ") rotate(" + m2[2].rotate + " 40 40) scale(" + m2[2].scale + ")" })), i.createElement("defs", null, i.createElement("filter", { id: "filter_".concat(d2), filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" }, i.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }), i.createElement("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), i.createElement("feGaussianBlur", { stdDeviation: 7, result: "effect1_foregroundBlur" }))));
        }, m = { pixel: function(e3) {
          var t2 = e3.name, r2 = e3.colors, a2 = e3.title, c2 = e3.square, h2 = e3.size, o2 = l(e3, ["name", "colors", "title", "square", "size"]), f2 = function(e4, t3) {
            var r3 = n(e4), l2 = t3 && t3.length;
            return Array.from({ length: 64 }, function(e5, i2) {
              return s(r3 % (i2 + 1), t3, l2);
            });
          }(t2, r2), m2 = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: h2, height: h2 }, o2), a2 && i.createElement("title", null, t2), i.createElement("mask", { id: m2, "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: c2 ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(m2, ")") }, i.createElement("rect", { width: 10, height: 10, fill: f2[0] }), i.createElement("rect", { x: 20, width: 10, height: 10, fill: f2[1] }), i.createElement("rect", { x: 40, width: 10, height: 10, fill: f2[2] }), i.createElement("rect", { x: 60, width: 10, height: 10, fill: f2[3] }), i.createElement("rect", { x: 10, width: 10, height: 10, fill: f2[4] }), i.createElement("rect", { x: 30, width: 10, height: 10, fill: f2[5] }), i.createElement("rect", { x: 50, width: 10, height: 10, fill: f2[6] }), i.createElement("rect", { x: 70, width: 10, height: 10, fill: f2[7] }), i.createElement("rect", { y: 10, width: 10, height: 10, fill: f2[8] }), i.createElement("rect", { y: 20, width: 10, height: 10, fill: f2[9] }), i.createElement("rect", { y: 30, width: 10, height: 10, fill: f2[10] }), i.createElement("rect", { y: 40, width: 10, height: 10, fill: f2[11] }), i.createElement("rect", { y: 50, width: 10, height: 10, fill: f2[12] }), i.createElement("rect", { y: 60, width: 10, height: 10, fill: f2[13] }), i.createElement("rect", { y: 70, width: 10, height: 10, fill: f2[14] }), i.createElement("rect", { x: 20, y: 10, width: 10, height: 10, fill: f2[15] }), i.createElement("rect", { x: 20, y: 20, width: 10, height: 10, fill: f2[16] }), i.createElement("rect", { x: 20, y: 30, width: 10, height: 10, fill: f2[17] }), i.createElement("rect", { x: 20, y: 40, width: 10, height: 10, fill: f2[18] }), i.createElement("rect", { x: 20, y: 50, width: 10, height: 10, fill: f2[19] }), i.createElement("rect", { x: 20, y: 60, width: 10, height: 10, fill: f2[20] }), i.createElement("rect", { x: 20, y: 70, width: 10, height: 10, fill: f2[21] }), i.createElement("rect", { x: 40, y: 10, width: 10, height: 10, fill: f2[22] }), i.createElement("rect", { x: 40, y: 20, width: 10, height: 10, fill: f2[23] }), i.createElement("rect", { x: 40, y: 30, width: 10, height: 10, fill: f2[24] }), i.createElement("rect", { x: 40, y: 40, width: 10, height: 10, fill: f2[25] }), i.createElement("rect", { x: 40, y: 50, width: 10, height: 10, fill: f2[26] }), i.createElement("rect", { x: 40, y: 60, width: 10, height: 10, fill: f2[27] }), i.createElement("rect", { x: 40, y: 70, width: 10, height: 10, fill: f2[28] }), i.createElement("rect", { x: 60, y: 10, width: 10, height: 10, fill: f2[29] }), i.createElement("rect", { x: 60, y: 20, width: 10, height: 10, fill: f2[30] }), i.createElement("rect", { x: 60, y: 30, width: 10, height: 10, fill: f2[31] }), i.createElement("rect", { x: 60, y: 40, width: 10, height: 10, fill: f2[32] }), i.createElement("rect", { x: 60, y: 50, width: 10, height: 10, fill: f2[33] }), i.createElement("rect", { x: 60, y: 60, width: 10, height: 10, fill: f2[34] }), i.createElement("rect", { x: 60, y: 70, width: 10, height: 10, fill: f2[35] }), i.createElement("rect", { x: 10, y: 10, width: 10, height: 10, fill: f2[36] }), i.createElement("rect", { x: 10, y: 20, width: 10, height: 10, fill: f2[37] }), i.createElement("rect", { x: 10, y: 30, width: 10, height: 10, fill: f2[38] }), i.createElement("rect", { x: 10, y: 40, width: 10, height: 10, fill: f2[39] }), i.createElement("rect", { x: 10, y: 50, width: 10, height: 10, fill: f2[40] }), i.createElement("rect", { x: 10, y: 60, width: 10, height: 10, fill: f2[41] }), i.createElement("rect", { x: 10, y: 70, width: 10, height: 10, fill: f2[42] }), i.createElement("rect", { x: 30, y: 10, width: 10, height: 10, fill: f2[43] }), i.createElement("rect", { x: 30, y: 20, width: 10, height: 10, fill: f2[44] }), i.createElement("rect", { x: 30, y: 30, width: 10, height: 10, fill: f2[45] }), i.createElement("rect", { x: 30, y: 40, width: 10, height: 10, fill: f2[46] }), i.createElement("rect", { x: 30, y: 50, width: 10, height: 10, fill: f2[47] }), i.createElement("rect", { x: 30, y: 60, width: 10, height: 10, fill: f2[48] }), i.createElement("rect", { x: 30, y: 70, width: 10, height: 10, fill: f2[49] }), i.createElement("rect", { x: 50, y: 10, width: 10, height: 10, fill: f2[50] }), i.createElement("rect", { x: 50, y: 20, width: 10, height: 10, fill: f2[51] }), i.createElement("rect", { x: 50, y: 30, width: 10, height: 10, fill: f2[52] }), i.createElement("rect", { x: 50, y: 40, width: 10, height: 10, fill: f2[53] }), i.createElement("rect", { x: 50, y: 50, width: 10, height: 10, fill: f2[54] }), i.createElement("rect", { x: 50, y: 60, width: 10, height: 10, fill: f2[55] }), i.createElement("rect", { x: 50, y: 70, width: 10, height: 10, fill: f2[56] }), i.createElement("rect", { x: 70, y: 10, width: 10, height: 10, fill: f2[57] }), i.createElement("rect", { x: 70, y: 20, width: 10, height: 10, fill: f2[58] }), i.createElement("rect", { x: 70, y: 30, width: 10, height: 10, fill: f2[59] }), i.createElement("rect", { x: 70, y: 40, width: 10, height: 10, fill: f2[60] }), i.createElement("rect", { x: 70, y: 50, width: 10, height: 10, fill: f2[61] }), i.createElement("rect", { x: 70, y: 60, width: 10, height: 10, fill: f2[62] }), i.createElement("rect", { x: 70, y: 70, width: 10, height: 10, fill: f2[63] })));
        }, bauhaus: function(e3) {
          var t2 = e3.name, r2 = e3.colors, a2 = e3.title, c2 = e3.square, f2 = e3.size, m2 = l(e3, ["name", "colors", "title", "square", "size"]), d2 = function(e4, t3) {
            var r3 = n(e4), l2 = t3 && t3.length;
            return Array.from({ length: 4 }, function(e5, i2) {
              return { color: s(r3 + i2, t3, l2), translateX: o(r3 * (i2 + 1), 40 - (i2 + 17), 1), translateY: o(r3 * (i2 + 1), 40 - (i2 + 17), 2), rotate: o(r3 * (i2 + 1), 360), isSquare: h(r3, 2) };
            });
          }(t2, r2), u2 = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: f2, height: f2 }, m2), a2 && i.createElement("title", null, t2), i.createElement("mask", { id: u2, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: c2 ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(u2, ")") }, i.createElement("rect", { width: 80, height: 80, fill: d2[0].color }), i.createElement("rect", { x: 10, y: 30, width: 80, height: d2[1].isSquare ? 80 : 10, fill: d2[1].color, transform: "translate(" + d2[1].translateX + " " + d2[1].translateY + ") rotate(" + d2[1].rotate + " 40 40)" }), i.createElement("circle", { cx: 40, cy: 40, fill: d2[2].color, r: 16, transform: "translate(" + d2[2].translateX + " " + d2[2].translateY + ")" }), i.createElement("line", { x1: 0, y1: 40, x2: 80, y2: 40, strokeWidth: 2, stroke: d2[3].color, transform: "translate(" + d2[3].translateX + " " + d2[3].translateY + ") rotate(" + d2[3].rotate + " 40 40)" })));
        }, ring: function(e3) {
          var t2 = e3.name, r2 = e3.colors, i2 = e3.title, c2 = e3.square, h2 = e3.size, o2 = l(e3, ["name", "colors", "title", "square", "size"]), f2 = function(e4, t3) {
            var r3 = n(t3), l2 = e4 && e4.length, i3 = Array.from({ length: 5 }, function(t4, i4) {
              return s(r3 + i4, e4, l2);
            }), a2 = [];
            return a2[0] = i3[0], a2[1] = i3[1], a2[2] = i3[1], a2[3] = i3[2], a2[4] = i3[2], a2[5] = i3[3], a2[6] = i3[3], a2[7] = i3[0], a2[8] = i3[4], a2;
          }(r2, t2), m2 = a.a.useId();
          return a.a.createElement("svg", Object.assign({ viewBox: "0 0 90 90", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: h2, height: h2 }, o2), i2 && a.a.createElement("title", null, t2), a.a.createElement("mask", { id: m2, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 90, height: 90 }, a.a.createElement("rect", { width: 90, height: 90, rx: c2 ? void 0 : 180, fill: "#FFFFFF" })), a.a.createElement("g", { mask: "url(#".concat(m2, ")") }, a.a.createElement("path", { d: "M0 0h90v45H0z", fill: f2[0] }), a.a.createElement("path", { d: "M0 45h90v45H0z", fill: f2[1] }), a.a.createElement("path", { d: "M83 45a38 38 0 00-76 0h76z", fill: f2[2] }), a.a.createElement("path", { d: "M83 45a38 38 0 01-76 0h76z", fill: f2[3] }), a.a.createElement("path", { d: "M77 45a32 32 0 10-64 0h64z", fill: f2[4] }), a.a.createElement("path", { d: "M77 45a32 32 0 11-64 0h64z", fill: f2[5] }), a.a.createElement("path", { d: "M71 45a26 26 0 00-52 0h52z", fill: f2[6] }), a.a.createElement("path", { d: "M71 45a26 26 0 01-52 0h52z", fill: f2[7] }), a.a.createElement("circle", { cx: 45, cy: 45, r: 23, fill: f2[8] })));
        }, beam: function(e3) {
          var t2 = e3.name, r2 = e3.colors, a2 = e3.title, c2 = e3.square, f2 = e3.size, m2 = l(e3, ["name", "colors", "title", "square", "size"]), d2 = function(e4, t3) {
            var r3, l2 = n(e4), i2 = t3 && t3.length, a3 = s(l2, t3, i2), c3 = o(l2, 10, 1), f3 = c3 < 5 ? c3 + 4 : c3, m3 = o(l2, 10, 2), d3 = m3 < 5 ? m3 + 4 : m3;
            return { wrapperColor: a3, faceColor: (r3 = a3, "#" === r3.slice(0, 1) && (r3 = r3.slice(1)), (299 * parseInt(r3.substr(0, 2), 16) + 587 * parseInt(r3.substr(2, 2), 16) + 114 * parseInt(r3.substr(4, 2), 16)) / 1e3 >= 128 ? "#000000" : "#FFFFFF"), backgroundColor: s(l2 + 13, t3, i2), wrapperTranslateX: f3, wrapperTranslateY: d3, wrapperRotate: o(l2, 360), wrapperScale: 1 + o(l2, 3) / 10, isMouthOpen: h(l2, 2), isCircle: h(l2, 1), eyeSpread: o(l2, 5), mouthSpread: o(l2, 3), faceRotate: o(l2, 10, 3), faceTranslateX: f3 > 6 ? f3 / 2 : o(l2, 8, 1), faceTranslateY: d3 > 6 ? d3 / 2 : o(l2, 7, 2) };
          }(t2, r2), u2 = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 36 36", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: f2, height: f2 }, m2), a2 && i.createElement("title", null, t2), i.createElement("mask", { id: u2, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 36, height: 36 }, i.createElement("rect", { width: 36, height: 36, rx: c2 ? void 0 : 72, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(u2, ")") }, i.createElement("rect", { width: 36, height: 36, fill: d2.backgroundColor }), i.createElement("rect", { x: "0", y: "0", width: 36, height: 36, transform: "translate(" + d2.wrapperTranslateX + " " + d2.wrapperTranslateY + ") rotate(" + d2.wrapperRotate + " 18 18) scale(" + d2.wrapperScale + ")", fill: d2.wrapperColor, rx: d2.isCircle ? 36 : 6 }), i.createElement("g", { transform: "translate(" + d2.faceTranslateX + " " + d2.faceTranslateY + ") rotate(" + d2.faceRotate + " 18 18)" }, d2.isMouthOpen ? i.createElement("path", { d: "M15 " + (19 + d2.mouthSpread) + "c2 1 4 1 6 0", stroke: d2.faceColor, fill: "none", strokeLinecap: "round" }) : i.createElement("path", { d: "M13," + (19 + d2.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: d2.faceColor }), i.createElement("rect", { x: 14 - d2.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: d2.faceColor }), i.createElement("rect", { x: 20 + d2.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, stroke: "none", fill: d2.faceColor }))));
        }, sunset: function(e3) {
          var t2 = e3.name, r2 = e3.colors, a2 = e3.title, c2 = e3.square, h2 = e3.size, o2 = l(e3, ["name", "colors", "title", "square", "size"]), f2 = function(e4, t3) {
            var r3 = n(e4), l2 = t3 && t3.length;
            return Array.from({ length: 4 }, function(e5, i2) {
              return s(r3 + i2, t3, l2);
            });
          }(t2, r2), m2 = t2.replace(/\s/g, ""), d2 = i.useId();
          return i.createElement("svg", Object.assign({ viewBox: "0 0 80 80", fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", width: h2, height: h2 }, o2), a2 && i.createElement("title", null, t2), i.createElement("mask", { id: d2, maskUnits: "userSpaceOnUse", x: 0, y: 0, width: 80, height: 80 }, i.createElement("rect", { width: 80, height: 80, rx: c2 ? void 0 : 160, fill: "#FFFFFF" })), i.createElement("g", { mask: "url(#".concat(d2, ")") }, i.createElement("path", { fill: "url(#gradient_paint0_linear_" + m2 + ")", d: "M0 0h80v40H0z" }), i.createElement("path", { fill: "url(#gradient_paint1_linear_" + m2 + ")", d: "M0 40h80v40H0z" })), i.createElement("defs", null, i.createElement("linearGradient", { id: "gradient_paint0_linear_" + m2, x1: 40, y1: 0, x2: 40, y2: 40, gradientUnits: "userSpaceOnUse" }, i.createElement("stop", { stopColor: f2[0] }), i.createElement("stop", { offset: 1, stopColor: f2[1] })), i.createElement("linearGradient", { id: "gradient_paint1_linear_" + m2, x1: 40, y1: 40, x2: 40, y2: 80, gradientUnits: "userSpaceOnUse" }, i.createElement("stop", { stopColor: f2[2] }), i.createElement("stop", { offset: 1, stopColor: f2[3] }))));
        }, marble: f }, d = { geometric: "beam", abstract: "bauhaus" }, u = function(e3) {
          var t2 = e3.variant, r2 = void 0 === t2 ? "marble" : t2, i2 = e3.colors, n2 = void 0 === i2 ? ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"] : i2, c2 = e3.name, h2 = void 0 === c2 ? "Clara Barton" : c2, o2 = e3.title, s2 = void 0 !== o2 && o2, u2 = e3.size, g = e3.square, w = void 0 !== g && g, E = l(e3, ["variant", "colors", "name", "title", "size", "square"]), p = m[d[r2] || r2] || f;
          return a.a.createElement(p, Object.assign({ colors: n2, name: h2, title: s2, size: u2, square: w }, E));
        };
        t.default = u;
      }]);
    });
  }
});
export default require_build();
//# sourceMappingURL=boring-avatars.js.map
