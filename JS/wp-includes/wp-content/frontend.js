!(function () {
  var t = {
      1989: function (t, n, e) {
        var r = e(1789),
          o = e(401),
          a = e(7667),
          c = e(1327),
          i = e(1866);
        function u(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = c),
          (u.prototype.set = i),
          (t.exports = u);
      },
      8407: function (t, n, e) {
        var r = e(7040),
          o = e(4125),
          a = e(2117),
          c = e(7518),
          i = e(4705);
        function u(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = c),
          (u.prototype.set = i),
          (t.exports = u);
      },
      7071: function (t, n, e) {
        var r = e(852)(e(5639), "Map");
        t.exports = r;
      },
      3369: function (t, n, e) {
        var r = e(4785),
          o = e(1285),
          a = e(6e3),
          c = e(9916),
          i = e(5265);
        function u(t) {
          var n = -1,
            e = null == t ? 0 : t.length;
          for (this.clear(); ++n < e; ) {
            var r = t[n];
            this.set(r[0], r[1]);
          }
        }
        (u.prototype.clear = r),
          (u.prototype.delete = o),
          (u.prototype.get = a),
          (u.prototype.has = c),
          (u.prototype.set = i),
          (t.exports = u);
      },
      2705: function (t, n, e) {
        var r = e(5639).Symbol;
        t.exports = r;
      },
      6874: function (t) {
        t.exports = function (t, n, e) {
          switch (e.length) {
            case 0:
              return t.call(n);
            case 1:
              return t.call(n, e[0]);
            case 2:
              return t.call(n, e[0], e[1]);
            case 3:
              return t.call(n, e[0], e[1], e[2]);
          }
          return t.apply(n, e);
        };
      },
      9932: function (t) {
        t.exports = function (t, n) {
          for (
            var e = -1, r = null == t ? 0 : t.length, o = Array(r);
            ++e < r;

          )
            o[e] = n(t[e], e, t);
          return o;
        };
      },
      2488: function (t) {
        t.exports = function (t, n) {
          for (var e = -1, r = n.length, o = t.length; ++e < r; )
            t[o + e] = n[e];
          return t;
        };
      },
      4865: function (t, n, e) {
        var r = e(9465),
          o = e(7813),
          a = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, e) {
          var c = t[n];
          (a.call(t, n) && o(c, e) && (void 0 !== e || n in t)) || r(t, n, e);
        };
      },
      8470: function (t, n, e) {
        var r = e(7813);
        t.exports = function (t, n) {
          for (var e = t.length; e--; ) if (r(t[e][0], n)) return e;
          return -1;
        };
      },
      9465: function (t, n, e) {
        var r = e(8777);
        t.exports = function (t, n, e) {
          "__proto__" == n && r
            ? r(t, n, {
                configurable: !0,
                enumerable: !0,
                value: e,
                writable: !0,
              })
            : (t[n] = e);
        };
      },
      1078: function (t, n, e) {
        var r = e(2488),
          o = e(7285);
        t.exports = function t(n, e, a, c, i) {
          var u = -1,
            s = n.length;
          for (a || (a = o), i || (i = []); ++u < s; ) {
            var p = n[u];
            e > 0 && a(p)
              ? e > 1
                ? t(p, e - 1, a, c, i)
                : r(i, p)
              : c || (i[i.length] = p);
          }
          return i;
        };
      },
      7786: function (t, n, e) {
        var r = e(1811),
          o = e(327);
        t.exports = function (t, n) {
          for (var e = 0, a = (n = r(n, t)).length; null != t && e < a; )
            t = t[o(n[e++])];
          return e && e == a ? t : void 0;
        };
      },
      4239: function (t, n, e) {
        var r = e(2705),
          o = e(9607),
          a = e(2333),
          c = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : c && c in Object(t)
            ? o(t)
            : a(t);
        };
      },
      13: function (t) {
        t.exports = function (t, n) {
          return null != t && n in Object(t);
        };
      },
      9454: function (t, n, e) {
        var r = e(4239),
          o = e(7005);
        t.exports = function (t) {
          return o(t) && "[object Arguments]" == r(t);
        };
      },
      8458: function (t, n, e) {
        var r = e(3560),
          o = e(5346),
          a = e(3218),
          c = e(346),
          i = /^\[object .+?Constructor\]$/,
          u = Function.prototype,
          s = Object.prototype,
          p = u.toString,
          f = s.hasOwnProperty,
          l = RegExp(
            "^" +
              p
                .call(f)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          );
        t.exports = function (t) {
          return !(!a(t) || o(t)) && (r(t) ? l : i).test(c(t));
        };
      },
      5970: function (t, n, e) {
        var r = e(3012),
          o = e(9095);
        t.exports = function (t, n) {
          return r(t, n, function (n, e) {
            return o(t, e);
          });
        };
      },
      3012: function (t, n, e) {
        var r = e(7786),
          o = e(611),
          a = e(1811);
        t.exports = function (t, n, e) {
          for (var c = -1, i = n.length, u = {}; ++c < i; ) {
            var s = n[c],
              p = r(t, s);
            e(p, s) && o(u, a(s, t), p);
          }
          return u;
        };
      },
      611: function (t, n, e) {
        var r = e(4865),
          o = e(1811),
          a = e(5776),
          c = e(3218),
          i = e(327);
        t.exports = function (t, n, e, u) {
          if (!c(t)) return t;
          for (
            var s = -1, p = (n = o(n, t)).length, f = p - 1, l = t;
            null != l && ++s < p;

          ) {
            var v = i(n[s]),
              d = e;
            if (s != f) {
              var _ = l[v];
              void 0 === (d = u ? u(_, v, l) : void 0) &&
                (d = c(_) ? _ : a(n[s + 1]) ? [] : {});
            }
            r(l, v, d), (l = l[v]);
          }
          return t;
        };
      },
      6560: function (t, n, e) {
        var r = e(5703),
          o = e(8777),
          a = e(6557),
          c = o
            ? function (t, n) {
                return o(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: r(n),
                  writable: !0,
                });
              }
            : a;
        t.exports = c;
      },
      531: function (t, n, e) {
        var r = e(2705),
          o = e(9932),
          a = e(1469),
          c = e(3448),
          i = r ? r.prototype : void 0,
          u = i ? i.toString : void 0;
        t.exports = function t(n) {
          if ("string" == typeof n) return n;
          if (a(n)) return o(n, t) + "";
          if (c(n)) return u ? u.call(n) : "";
          var e = n + "";
          return "0" == e && 1 / n == -1 / 0 ? "-0" : e;
        };
      },
      1811: function (t, n, e) {
        var r = e(1469),
          o = e(5403),
          a = e(5514),
          c = e(9833);
        t.exports = function (t, n) {
          return r(t) ? t : o(t, n) ? [t] : a(c(t));
        };
      },
      4429: function (t, n, e) {
        var r = e(5639)["__core-js_shared__"];
        t.exports = r;
      },
      8777: function (t, n, e) {
        var r = e(852),
          o = (function () {
            try {
              var t = r(Object, "defineProperty");
              return t({}, "", {}), t;
            } catch (t) {}
          })();
        t.exports = o;
      },
      9021: function (t, n, e) {
        var r = e(5564),
          o = e(5357),
          a = e(61);
        t.exports = function (t) {
          return a(o(t, void 0, r), t + "");
        };
      },
      1957: function (t, n, e) {
        var r = "object" == typeof e.g && e.g && e.g.Object === Object && e.g;
        t.exports = r;
      },
      5050: function (t, n, e) {
        var r = e(7019);
        t.exports = function (t, n) {
          var e = t.__data__;
          return r(n) ? e["string" == typeof n ? "string" : "hash"] : e.map;
        };
      },
      852: function (t, n, e) {
        var r = e(8458),
          o = e(7801);
        t.exports = function (t, n) {
          var e = o(t, n);
          return r(e) ? e : void 0;
        };
      },
      9607: function (t, n, e) {
        var r = e(2705),
          o = Object.prototype,
          a = o.hasOwnProperty,
          c = o.toString,
          i = r ? r.toStringTag : void 0;
        t.exports = function (t) {
          var n = a.call(t, i),
            e = t[i];
          try {
            t[i] = void 0;
            var r = !0;
          } catch (t) {}
          var o = c.call(t);
          return r && (n ? (t[i] = e) : delete t[i]), o;
        };
      },
      7801: function (t) {
        t.exports = function (t, n) {
          return null == t ? void 0 : t[n];
        };
      },
      222: function (t, n, e) {
        var r = e(1811),
          o = e(5694),
          a = e(1469),
          c = e(5776),
          i = e(1780),
          u = e(327);
        t.exports = function (t, n, e) {
          for (var s = -1, p = (n = r(n, t)).length, f = !1; ++s < p; ) {
            var l = u(n[s]);
            if (!(f = null != t && e(t, l))) break;
            t = t[l];
          }
          return f || ++s != p
            ? f
            : !!(p = null == t ? 0 : t.length) &&
                i(p) &&
                c(l, p) &&
                (a(t) || o(t));
        };
      },
      1789: function (t, n, e) {
        var r = e(4536);
        t.exports = function () {
          (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
      },
      401: function (t) {
        t.exports = function (t) {
          var n = this.has(t) && delete this.__data__[t];
          return (this.size -= n ? 1 : 0), n;
        };
      },
      7667: function (t, n, e) {
        var r = e(4536),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var n = this.__data__;
          if (r) {
            var e = n[t];
            return "__lodash_hash_undefined__" === e ? void 0 : e;
          }
          return o.call(n, t) ? n[t] : void 0;
        };
      },
      1327: function (t, n, e) {
        var r = e(4536),
          o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
          var n = this.__data__;
          return r ? void 0 !== n[t] : o.call(n, t);
        };
      },
      1866: function (t, n, e) {
        var r = e(4536);
        t.exports = function (t, n) {
          var e = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (e[t] = r && void 0 === n ? "__lodash_hash_undefined__" : n),
            this
          );
        };
      },
      7285: function (t, n, e) {
        var r = e(2705),
          o = e(5694),
          a = e(1469),
          c = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
          return a(t) || o(t) || !!(c && t && t[c]);
        };
      },
      5776: function (t) {
        var n = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
          var r = typeof t;
          return (
            !!(e = null == e ? 9007199254740991 : e) &&
            ("number" == r || ("symbol" != r && n.test(t))) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
          );
        };
      },
      5403: function (t, n, e) {
        var r = e(1469),
          o = e(3448),
          a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          c = /^\w*$/;
        t.exports = function (t, n) {
          if (r(t)) return !1;
          var e = typeof t;
          return (
            !(
              "number" != e &&
              "symbol" != e &&
              "boolean" != e &&
              null != t &&
              !o(t)
            ) ||
            c.test(t) ||
            !a.test(t) ||
            (null != n && t in Object(n))
          );
        };
      },
      7019: function (t) {
        t.exports = function (t) {
          var n = typeof t;
          return "string" == n ||
            "number" == n ||
            "symbol" == n ||
            "boolean" == n
            ? "__proto__" !== t
            : null === t;
        };
      },
      5346: function (t, n, e) {
        var r,
          o = e(4429),
          a = (r = /[^.]+$/.exec((o && o.keys && o.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        t.exports = function (t) {
          return !!a && a in t;
        };
      },
      7040: function (t) {
        t.exports = function () {
          (this.__data__ = []), (this.size = 0);
        };
      },
      4125: function (t, n, e) {
        var r = e(8470),
          o = Array.prototype.splice;
        t.exports = function (t) {
          var n = this.__data__,
            e = r(n, t);
          return !(
            e < 0 ||
            (e == n.length - 1 ? n.pop() : o.call(n, e, 1), --this.size, 0)
          );
        };
      },
      2117: function (t, n, e) {
        var r = e(8470);
        t.exports = function (t) {
          var n = this.__data__,
            e = r(n, t);
          return e < 0 ? void 0 : n[e][1];
        };
      },
      7518: function (t, n, e) {
        var r = e(8470);
        t.exports = function (t) {
          return r(this.__data__, t) > -1;
        };
      },
      4705: function (t, n, e) {
        var r = e(8470);
        t.exports = function (t, n) {
          var e = this.__data__,
            o = r(e, t);
          return o < 0 ? (++this.size, e.push([t, n])) : (e[o][1] = n), this;
        };
      },
      4785: function (t, n, e) {
        var r = e(1989),
          o = e(8407),
          a = e(7071);
        t.exports = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (a || o)(),
              string: new r(),
            });
        };
      },
      1285: function (t, n, e) {
        var r = e(5050);
        t.exports = function (t) {
          var n = r(this, t).delete(t);
          return (this.size -= n ? 1 : 0), n;
        };
      },
      6e3: function (t, n, e) {
        var r = e(5050);
        t.exports = function (t) {
          return r(this, t).get(t);
        };
      },
      9916: function (t, n, e) {
        var r = e(5050);
        t.exports = function (t) {
          return r(this, t).has(t);
        };
      },
      5265: function (t, n, e) {
        var r = e(5050);
        t.exports = function (t, n) {
          var e = r(this, t),
            o = e.size;
          return e.set(t, n), (this.size += e.size == o ? 0 : 1), this;
        };
      },
      4523: function (t, n, e) {
        var r = e(8306);
        t.exports = function (t) {
          var n = r(t, function (t) {
              return 500 === e.size && e.clear(), t;
            }),
            e = n.cache;
          return n;
        };
      },
      4536: function (t, n, e) {
        var r = e(852)(Object, "create");
        t.exports = r;
      },
      2333: function (t) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
          return n.call(t);
        };
      },
      5357: function (t, n, e) {
        var r = e(6874),
          o = Math.max;
        t.exports = function (t, n, e) {
          return (
            (n = o(void 0 === n ? t.length - 1 : n, 0)),
            function () {
              for (
                var a = arguments, c = -1, i = o(a.length - n, 0), u = Array(i);
                ++c < i;

              )
                u[c] = a[n + c];
              c = -1;
              for (var s = Array(n + 1); ++c < n; ) s[c] = a[c];
              return (s[n] = e(u)), r(t, this, s);
            }
          );
        };
      },
      5639: function (t, n, e) {
        var r = e(1957),
          o = "object" == typeof self && self && self.Object === Object && self,
          a = r || o || Function("return this")();
        t.exports = a;
      },
      61: function (t, n, e) {
        var r = e(6560),
          o = e(1275)(r);
        t.exports = o;
      },
      1275: function (t) {
        var n = Date.now;
        t.exports = function (t) {
          var e = 0,
            r = 0;
          return function () {
            var o = n(),
              a = 16 - (o - r);
            if (((r = o), a > 0)) {
              if (++e >= 800) return arguments[0];
            } else e = 0;
            return t.apply(void 0, arguments);
          };
        };
      },
      5514: function (t, n, e) {
        var r = e(4523),
          o =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          a = /\\(\\)?/g,
          c = r(function (t) {
            var n = [];
            return (
              46 === t.charCodeAt(0) && n.push(""),
              t.replace(o, function (t, e, r, o) {
                n.push(r ? o.replace(a, "$1") : e || t);
              }),
              n
            );
          });
        t.exports = c;
      },
      327: function (t, n, e) {
        var r = e(3448);
        t.exports = function (t) {
          if ("string" == typeof t || r(t)) return t;
          var n = t + "";
          return "0" == n && 1 / t == -1 / 0 ? "-0" : n;
        };
      },
      346: function (t) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
          if (null != t) {
            try {
              return n.call(t);
            } catch (t) {}
            try {
              return t + "";
            } catch (t) {}
          }
          return "";
        };
      },
      5703: function (t) {
        t.exports = function (t) {
          return function () {
            return t;
          };
        };
      },
      7813: function (t) {
        t.exports = function (t, n) {
          return t === n || (t != t && n != n);
        };
      },
      5564: function (t, n, e) {
        var r = e(1078);
        t.exports = function (t) {
          return null != t && t.length ? r(t, 1) : [];
        };
      },
      9095: function (t, n, e) {
        var r = e(13),
          o = e(222);
        t.exports = function (t, n) {
          return null != t && o(t, n, r);
        };
      },
      6557: function (t) {
        t.exports = function (t) {
          return t;
        };
      },
      5694: function (t, n, e) {
        var r = e(9454),
          o = e(7005),
          a = Object.prototype,
          c = a.hasOwnProperty,
          i = a.propertyIsEnumerable,
          u = r(
            (function () {
              return arguments;
            })()
          )
            ? r
            : function (t) {
                return o(t) && c.call(t, "callee") && !i.call(t, "callee");
              };
        t.exports = u;
      },
      1469: function (t) {
        var n = Array.isArray;
        t.exports = n;
      },
      3560: function (t, n, e) {
        var r = e(4239),
          o = e(3218);
        t.exports = function (t) {
          if (!o(t)) return !1;
          var n = r(t);
          return (
            "[object Function]" == n ||
            "[object GeneratorFunction]" == n ||
            "[object AsyncFunction]" == n ||
            "[object Proxy]" == n
          );
        };
      },
      1780: function (t) {
        t.exports = function (t) {
          return (
            "number" == typeof t &&
            t > -1 &&
            t % 1 == 0 &&
            t <= 9007199254740991
          );
        };
      },
      3218: function (t) {
        t.exports = function (t) {
          var n = typeof t;
          return null != t && ("object" == n || "function" == n);
        };
      },
      7005: function (t) {
        t.exports = function (t) {
          return null != t && "object" == typeof t;
        };
      },
      3448: function (t, n, e) {
        var r = e(4239),
          o = e(7005);
        t.exports = function (t) {
          return "symbol" == typeof t || (o(t) && "[object Symbol]" == r(t));
        };
      },
      8306: function (t, n, e) {
        var r = e(3369);
        function o(t, n) {
          if ("function" != typeof t || (null != n && "function" != typeof n))
            throw new TypeError("Expected a function");
          var e = function () {
            var r = arguments,
              o = n ? n.apply(this, r) : r[0],
              a = e.cache;
            if (a.has(o)) return a.get(o);
            var c = t.apply(this, r);
            return (e.cache = a.set(o, c) || a), c;
          };
          return (e.cache = new (o.Cache || r)()), e;
        }
        (o.Cache = r), (t.exports = o);
      },
      8718: function (t, n, e) {
        var r = e(5970),
          o = e(9021)(function (t, n) {
            return null == t ? {} : r(t, n);
          });
        t.exports = o;
      },
      9833: function (t, n, e) {
        var r = e(531);
        t.exports = function (t) {
          return null == t ? "" : r(t);
        };
      },
      3609: function (t) {
        "use strict";
        t.exports = jQuery;
      },
    },
    n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { exports: {} });
    return t[r](o, o.exports, e), o.exports;
  }
  (e.n = function (t) {
    var n =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return e.d(n, { a: n }), n;
  }),
    (e.d = function (t, n) {
      for (var r in n)
        e.o(n, r) &&
          !e.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: n[r] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (function () {
      "use strict";
      var t = e(3609),
        n = e.n(t),
        r = function t() {
          for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
            r[o] = arguments[o];
          var a;
          window.fbq
            ? ((a = window).fbq.apply(a, r),
              aepc_pixel_events.ss_in_ajax &&
                n().ajax({
                  url: aepc_pixel_events.api.root + "aepc/v1/fbq",
                  method: "POST",
                  dataType: "json",
                  beforeSend: function (t) {
                    t.setRequestHeader(
                      "X-WP-Nonce",
                      aepc_pixel_events.api.nonce
                    );
                  },
                  data: { query: r },
                }))
            : setTimeout(function () {
                return t.apply(void 0, r);
              }, 500);
        },
        o = e(8718),
        a = e.n(o);
      e(3609)(document).ready(function (t) {
        t(document.body);
        var n = function (t) {
            return aepc_extend_args(t);
          },
          e = function (t, n) {
            n ? setTimeout(t, 1e3 * n) : t();
          };
        aepc_pixel_events.standard_events &&
          t.each(aepc_pixel_events.standard_events, function (o, a) {
            t.each(a, function (t, a) {
              e(function () {
                r(
                  "track",
                  o,
                  n(a.params ? a.params : {}),
                  a.event_id ? { eventID: a.event_id } : {}
                );
              }, a.delay);
            });
          }),
          void 0 !== aepc_pixel_events.custom_events &&
            t.each(aepc_pixel_events.custom_events, function (o, a) {
              t.each(a, function (t, a) {
                e(function () {
                  r(
                    "trackCustom",
                    o,
                    n(a.params ? a.params : {}),
                    a.event_id ? { eventID: a.event_id } : {}
                  );
                }, a.delay);
              });
            }),
          void 0 !== aepc_pixel_events.css_events &&
            t.each(aepc_pixel_events.css_events, function (e, o) {
              t.each(o, function (o, a) {
                t(e).on("click", function () {
                  r(a.trackType, a.trackName, n(a.trackParams));
                });
              });
            }),
          void 0 !== aepc_pixel_events.link_clicks &&
            t.each(aepc_pixel_events.link_clicks, function (e, o) {
              t.each(o, function (o, a) {
                t("a")
                  .filter(function () {
                    var n = t(this).attr("href");
                    if (void 0 === n) return !1;
                    if ("contains" === o)
                      return n.match(
                        new RegExp(
                          e.replace(/\*/g, "[^/]+").replace(/([./?])/gm, "\\$1")
                        )
                      );
                    if ("exact" === o) {
                      var r = e + (e.match(/\/+$/) ? "" : "/");
                      return (
                        r.match(/^http(s)?:\/\//) ||
                          ((r = "/" + r.replace(/^\/+/, "")),
                          (r =
                            window.location.protocol +
                            "//" +
                            window.location.host +
                            r)),
                        (n += n.match(/\/+$/) ? "" : "/").match(
                          /^http(s)?:\/\//
                        ) ||
                          ((n = "/" + n.replace(/^\/+/, "")),
                          (n =
                            window.location.protocol +
                            "//" +
                            window.location.host +
                            n)),
                        r === n
                      );
                    }
                    return !1;
                  })
                  .on("click", function (e) {
                    t.each(a, function (t, e) {
                      r(e.trackType, e.trackName, n(e.trackParams));
                    });
                  });
              });
            }),
          void 0 !== aepc_pixel_events.js_events &&
            t.each(aepc_pixel_events.js_events, function (e, o) {
              t.each(o, function (o, a) {
                t(e).on(o, function () {
                  t.each(a, function (t, e) {
                    r(e.trackType, e.trackName, n(e.trackParams));
                  });
                });
              });
            }),
          t(document.body).on("added_to_cart", function (t, e, o, c) {
            if ("no" === aepc_pixel.enable_addtocart) return t;
            var i = c.closest(".product, .wc-block-grid__product"),
              u =
                "yes" === aepc_pixel.can_use_sku && c.data("product_sku")
                  ? c.data("product_sku")
                  : c.data("product_id"),
              s = i.find('input[name="quantity"]').length
                ? i.find('input[name="quantity"]').val()
                : 1;
            if (c.closest("form").length) {
              var p = c.closest("form"),
                f = p.find('[name="variation_id"]'),
                l = p.find('[name="add-to-cart"]');
              f.length ? (u = f.val()) : l.length && (u = l.val());
            }
            r(
              "track",
              "AddToCart",
              n(
                a()(
                  {
                    content_ids: [u],
                    content_type: "product",
                    content_name: i
                      .find(
                        "h3, .woocommerce-loop-product__title, .wc-block-grid__product-title"
                      )
                      .text(),
                    content_category: i
                      .find("span[data-content_category]")
                      .data("content_category"),
                    value:
                      parseFloat(
                        i
                          .find("span.amount:last, span.amount:last bdi")
                          .clone()
                          .children()
                          .remove()
                          .end()
                          .text()
                      ) * s,
                    currency: woocommerce_params.currency,
                  },
                  aepc_pixel.allowed_params.AddToCart
                )
              ),
              { eventID: o }
            );
          }),
          t(".add_to_wishlist, .wl-add-to").on("click", function (e) {
            if ("no" === aepc_pixel.enable_wishlist) return e;
            var o = t(this),
              a = o.data("product-sku")
                ? o.data("product-sku")
                : o.data("product-id");
            r("track", "AddToWishlist", n(aepc_wc_add_to_wishlist[a]));
          }),
          t("body.woocommerce-page form.checkout").on(
            "checkout_place_order",
            function (t) {
              "yes" === aepc_pixel.enable_addpaymentinfo &&
                r("track", "AddPaymentInfo", n(aepc_add_payment_info_params));
            }
          ),
          t(document.body).on("edd_cart_item_added", function (t, e) {
            var o = e.pixel;
            if ("no" === aepc_pixel.enable_addtocart) return t;
            r(
              "track",
              "AddToCart",
              n(o.params ? o.params : {}),
              o.event_id ? { eventID: o.event_id } : {}
            );
          }),
          t(".edd-checkout").on(
            "click",
            'form#edd_purchase_form input[type="submit"]',
            function (t) {
              return "no" === aepc_pixel.enable_addpaymentinfo
                ? t
                : (r(
                    "track",
                    "AddPaymentInfo",
                    n(aepc_add_payment_info_params)
                  ),
                  !0);
            }
          );
      });
    })();
})();
