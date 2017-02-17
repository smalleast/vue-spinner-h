!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.VueSpinner = t() : e.VueSpinner = t()
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r])return n[r].exports;
      var o = n[r] = {exports: {}, id: r, loaded: !1};
      return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "/", t(0)
  }([function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var o = n(4), i = r(o);
    t.default = i.default
  }, function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
      props: {
        width: {type: String, default: "4px"},
        size: {type: String, default: "28px"},
        color: {type: String, default: "#26a2ff"},
        cssClass: {type: String}
      }
    }
  }, function (e, t, n) {
    t = e.exports = n(3)(), t.push([e.id, "@keyframes mint-spinner-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.mint-spinner-snake{animation:mint-spinner-rotate 1.2s infinite linear;border:4px solid #26a2ff;border-right-color:transparent;border-radius:50%;display:inline-block;height:28px;width:28px}", "", {
      version: 3,
      sources: ["/./src/components/VueSpinner.vue"],
      names: [],
      mappings: "AACA,+BACA,GAAG,sBAAsB,CACxB,AACD,GAAK,uBAAwB,CAC5B,CACA,AACD,oBAAoB,mDAAmD,yBAAyB,+BAA+B,kBAAkB,qBAAqB,YAAY,UAAU,CAC3L",
      file: "VueSpinner.vue",
      sourcesContent: ["\n@keyframes mint-spinner-rotate{\n0%{transform:rotate(0deg)\n}\n100%{transform:rotate(360deg)\n}\n}\n.mint-spinner-snake{animation:mint-spinner-rotate 1.2s infinite linear;border:4px solid #26a2ff;border-right-color:transparent;border-radius:50%;display:inline-block;height:28px;width:28px\n}\n"],
      sourceRoot: "webpack://"
    }])
  }, function (e, t) {
    e.exports = function () {
      var e = [];
      return e.toString = function () {
        for (var e = [], t = 0; t < this.length; t++) {
          var n = this[t];
          n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
        }
        return e.join("")
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);
        for (var r = {}, o = 0; o < this.length; o++) {
          var i = this[o][0];
          "number" == typeof i && (r[i] = !0)
        }
        for (o = 0; o < t.length; o++) {
          var s = t[o];
          "number" == typeof s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), e.push(s))
        }
      }, e
    }
  }, function (e, t, n) {
    var r, o;
    n(7), r = n(1);
    var i = n(5);
    o = r = r || {}, "object" != typeof r.default && "function" != typeof r.default || (o = r = r.default), "function" == typeof o && (o = o.options), o.render = i.render, o.staticRenderFns = i.staticRenderFns, e.exports = r
  }, function (e, t) {
    e.exports = {
      render: function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("span", {
          class: ["mint-spinner-snake", e.cssClass],
          style: {
            width: e.size,
            height: e.size,
            "border-width": e.width,
            "border-top-color": e.color,
            "border-left-color": e.color,
            "border-bottom-color": e.color
          }
        })
      }, staticRenderFns: []
    }
  }, function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n], o = d[r.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++)o.parts[i](r.parts[i]);
          for (; i < r.parts.length; i++)o.parts.push(u(r.parts[i], t))
        } else {
          for (var s = [], i = 0; i < r.parts.length; i++)s.push(u(r.parts[i], t));
          d[r.id] = {id: r.id, refs: 1, parts: s}
        }
      }
    }

    function o(e) {
      for (var t = [], n = {}, r = 0; r < e.length; r++) {
        var o = e[r], i = o[0], s = o[1], a = o[2], u = o[3], f = {css: s, media: a, sourceMap: u};
        n[i] ? n[i].parts.push(f) : t.push(n[i] = {id: i, parts: [f]})
      }
      return t
    }

    function i(e, t) {
      var n = h(), r = A[A.length - 1];
      if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), A.push(t); else {
        if ("bottom" !== e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        n.appendChild(t)
      }
    }

    function s(e) {
      e.parentNode.removeChild(e);
      var t = A.indexOf(e);
      t >= 0 && A.splice(t, 1)
    }

    function a(e) {
      var t = document.createElement("style");
      return t.type = "text/css", i(e, t), t
    }

    function u(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = v++;
        n = m || (m = a(t)), r = f.bind(null, n, i, !1), o = f.bind(null, n, i, !0)
      } else n = a(t), r = p.bind(null, n), o = function () {
        s(n)
      };
      return r(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)return;
          r(e = t)
        } else o()
      }
    }

    function f(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = g(t, o); else {
        var i = document.createTextNode(o), s = e.childNodes;
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
      }
    }

    function p(e, t) {
      var n = t.css, r = t.media, o = t.sourceMap;
      if (r && e.setAttribute("media", r), o && (n += "\n/*# sourceURL=" + o.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
        for (; e.firstChild;)e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n))
      }
    }

    var d = {}, l = function (e) {
      var t;
      return function () {
        return "undefined" == typeof t && (t = e.apply(this, arguments)), t
      }
    }, c = l(function () {
      return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
    }), h = l(function () {
      return document.head || document.getElementsByTagName("head")[0]
    }), m = null, v = 0, A = [];
    e.exports = function (e, t) {
      t = t || {}, "undefined" == typeof t.singleton && (t.singleton = c()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
      var n = o(e);
      return r(n, t), function (e) {
        for (var i = [], s = 0; s < n.length; s++) {
          var a = n[s], u = d[a.id];
          u.refs--, i.push(u)
        }
        if (e) {
          var f = o(e);
          r(f, t)
        }
        for (var s = 0; s < i.length; s++) {
          var u = i[s];
          if (0 === u.refs) {
            for (var p = 0; p < u.parts.length; p++)u.parts[p]();
            delete d[u.id]
          }
        }
      }
    };
    var g = function () {
      var e = [];
      return function (t, n) {
        return e[t] = n, e.filter(Boolean).join("\n")
      }
    }()
  }, function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.id, r, ""]]);
    n(6)(r, {});
    r.locals && (e.exports = r.locals)
  }])
});
//# sourceMappingURL=vue-spinner.js.map
