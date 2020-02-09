!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 7));
})([
  function(e, t) {
    e.exports = require("stream");
  },
  function(e, t) {
    e.exports = require("zlib");
  },
  function(e, t) {
    e.exports = require("https");
  },
  function(e, t) {
    e.exports = require("url");
  },
  function(e, t) {
    e.exports = require("http");
  },
  function(e, t) {
    e.exports = require("querystring");
  },
  function(e, t, r) {
    e.exports =
      (r(2),
      r(5),
      (function(e) {
        function t(n) {
          if (r[n]) return r[n].exports;
          var o = (r[n] = { exports: {}, id: n, loaded: !1 });
          return (
            e[n].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
          );
        }
        var r = {};
        return (t.m = e), (t.c = r), (t.p = ""), t(0);
      })([
        function(e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var o = n(r(1)),
            s = n(r(2)),
            i = r(5),
            a = {
              processor: i.getInterestResults,
              objectConstructor: i.constructInterestObj
            },
            u = {
              processor: i.getTrendingResults,
              objectConstructor: i.constructTrendingObj
            },
            c = o.default.bind(void 0, s.default);
          (t.default = {
            autoComplete: c("Auto complete", a),
            dailyTrends: c("Daily trends", u),
            interestByRegion: c("Interest by region", a),
            interestOverTime: c("Interest over time", a),
            realTimeTrends: c("Real time trends", u),
            relatedQueries: c("Related queries", a),
            relatedTopics: c("Related topics", a)
          }),
            (e.exports = t.default);
        },
        function(e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function(e, t, r) {
              var n = r.processor,
                o = r.objectConstructor,
                s = n(e);
              return function(e, r) {
                var n = o(e, r),
                  i = n.cbFunc,
                  a = n.obj;
                return a instanceof Error
                  ? Promise.reject(i(a))
                  : s(t, a)
                      .then(function(e) {
                        return i(null, e);
                      })
                      .catch(function(e) {
                        return Promise.reject(i(e));
                      });
              };
            }),
            (e.exports = t.default);
        },
        function(e, t, r) {
          "use strict";
          function n(e) {
            return e && e.__esModule ? e : { default: e };
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.default = function(e) {
              var t = e.method,
                r = e.host,
                n = e.path,
                a = e.qs,
                u = e.agent,
                c = {
                  host: r,
                  method: t,
                  path: n + "?" + s.default.stringify(a)
                };
              return (
                u && (c.agent = u),
                i && (c.headers = { cookie: i }),
                new Promise(function(e, t) {
                  var r = o.default.request(c, function(r) {
                    var n = "";
                    r.on("data", function(e) {
                      n += e;
                    }),
                      r.on("end", function() {
                        429 === r.statusCode && r.headers["set-cookie"]
                          ? ((i = r.headers["set-cookie"][0].split(";")[0]),
                            (c.headers = { cookie: i }),
                            (function(e, t) {
                              var r = void 0;
                              (r = o.default.request(e, function(e) {
                                var r = "";
                                e.on("data", function(e) {
                                  r += e;
                                }),
                                  e.on("end", function() {
                                    t(null, r.toString("utf8"));
                                  });
                              })).on("error", function(e) {
                                t(e);
                              }),
                                r.end();
                            })(c, function(r, n) {
                              return r ? t(r) : void e(n);
                            }))
                          : e(n.toString("utf8"));
                      });
                  });
                  r.on("error", function(e) {
                    t(e);
                  }),
                    r.end();
                })
              );
            });
          var o = n(r(3)),
            s = n(r(4)),
            i = void 0;
          e.exports = t.default;
        },
        function(e, t) {
          e.exports = r(2);
        },
        function(e, t) {
          e.exports = r(5);
        },
        function(e, t) {
          "use strict";
          function r(e, t) {
            return Math.abs(t - e) / 864e5 < 7;
          }
          function n(e, t, r) {
            var n = (e.getUTCMonth() + 1).toString(),
              o = e.getUTCDate().toString(),
              s = r ? "" : "-";
            (n = n.length < 2 ? "0" + n : n),
              (o = r && o.length < 2 ? "0" + o : o);
            var i = e.getUTCFullYear().toString(),
              a = e.getUTCHours(),
              u = e.getUTCMinutes();
            return t
              ? "" + i + s + n + s + o + "T" + a + "\\:" + u + "\\:00"
              : "" + i + s + n + s + o;
          }
          function o(e) {
            if (e.startTime && e.endTime && e.startTime > e.endTime) {
              var t = e.startTime;
              (e.startTime = e.endTime), (e.endTime = t);
            }
            e.endTime || (e.endTime = new Date()),
              e.startTime || (e.startTime = new Date("2004-01-01"));
            var o = r(e.startTime, e.endTime),
              s = n(e.startTime, o && e.granularTimeResolution),
              i = n(e.endTime, o && e.granularTimeResolution);
            return (e.time = s + " " + i), e;
          }
          function s(e, t) {
            return (
              e
                ? (e && "object" !== (void 0 === e ? "undefined" : l(e))) ||
                  Array.isArray(e)
                  ? (e = new Error("Must supply an object"))
                  : e.keyword || (e = new Error("Must have a keyword field"))
                : (e = new Error("Must supply an object")),
              f(t) && (e = new Error("Callback function must be a function")),
              (function(e) {
                return (
                  !e.startTime ||
                    e.startTime instanceof Date ||
                    (e = new Error("startTime must be a Date object")),
                  !e.endTime ||
                    e.endTime instanceof Date ||
                    (e = new Error("endTime must be a Date object")),
                  e
                );
              })(
                (e = (function(e) {
                  return Array.isArray(e.geo) &&
                    Array.isArray(e.keyword) &&
                    e.geo.length !== e.keyword.length
                    ? new Error("Geo length must be equal to keyword length")
                    : e;
                })(e))
              )
            );
          }
          function i() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = ["COUNTRY", "REGION", "CITY", "DMA"],
              r = t.some(function(t) {
                return t === e.toUpperCase();
              });
            return r ? e.toUpperCase() : "";
          }
          function a(e) {
            try {
              return JSON.parse(e.slice(4)).widgets;
            } catch (t) {
              throw ((t.requestBody = e), t);
            }
          }
          function u(e) {
            var t = e.geo && Array.isArray(e.geo),
              r = Array.isArray(e.keyword);
            if (
              (t &&
                !r &&
                ((e.keyword = Array(e.geo.length).fill(e.keyword)), (r = !0)),
              r)
            ) {
              var n = (function() {
                var r = e.keyword.reduce(function(t, r) {
                  return t.push(c({}, e, { keyword: r })), t;
                }, []);
                return (
                  t &&
                    e.geo.forEach(function(e, t) {
                      r[t].geo = e;
                    }),
                  { v: r }
                );
              })();
              if ("object" === (void 0 === n ? "undefined" : l(n))) return n.v;
            }
            return [e];
          }
          Object.defineProperty(t, "__esModule", { value: !0 });
          var c =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              },
            l =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
          (t.isLessThan7Days = r),
            (t.convertDateToString = n),
            (t.formatTime = o),
            (t.constructInterestObj = function(e, t) {
              return (
                "function" == typeof e && (t = e),
                (e = s(e, t)).hl || (e.hl = "en-US"),
                e.category || (e.category = 0),
                e.timezone || (e.timezone = new Date().getTimezoneOffset()),
                -1 ===
                  ["images", "news", "youtube", "froogle", ""].indexOf(
                    e.property
                  ) && (e.property = ""),
                t ||
                  (t = function(e, t) {
                    return e || t;
                  }),
                { cbFunc: t, obj: (e = o(e)) }
              );
            }),
            (t.formatResolution = i),
            (t.parseResults = a),
            (t.formatComparisonItems = u),
            (t.getInterestResults = function(e) {
              return function(t, r) {
                var n = {
                    "Auto complete": {
                      path:
                        "/trends/api/autocomplete/" +
                        encodeURIComponent(r.keyword)
                    },
                    "Interest over time": {
                      path: "/trends/api/widgetdata/multiline",
                      _id: "TIMESERIES"
                    },
                    "Interest by region": {
                      path: "/trends/api/widgetdata/comparedgeo",
                      resolution: i(r.resolution),
                      _id: "GEO_MAP"
                    },
                    "Related topics": {
                      path: "/trends/api/widgetdata/relatedsearches",
                      _id: "RELATED_TOPICS"
                    },
                    "Related queries": {
                      path: "/trends/api/widgetdata/relatedsearches",
                      _id: "RELATED_QUERIES"
                    }
                  },
                  o = {
                    method: "GET",
                    host: "trends.google.com",
                    path: "/trends/api/explore",
                    qs: {
                      hl: r.hl,
                      req: JSON.stringify({
                        comparisonItem: u(r),
                        category: r.category,
                        property: r.property
                      }),
                      tz: r.timezone
                    }
                  };
                r.agent && (o.agent = r.agent);
                var s = n[t],
                  c = s.path,
                  l = s.resolution,
                  f = s._id;
                return e(o)
                  .then(function(n) {
                    var o = a(n).find(function(e) {
                      var r = e.id,
                        n = void 0 === r ? "" : r,
                        o = e.request;
                      return n.indexOf(f) > -1 || ("Auto complete" === t && o);
                    });
                    if (!o)
                      throw {
                        message:
                          "Available widgets does not contain selected api type",
                        requestBody: n
                      };
                    var s = o.request,
                      i = o.token;
                    l && (s.resolution = l),
                      (s.requestOptions.category = r.category),
                      (s.requestOptions.property = r.property),
                      (s = JSON.stringify(s));
                    var u = {
                      path: c,
                      method: "GET",
                      host: "trends.google.com",
                      qs: { hl: r.hl, req: s, token: i, tz: r.timezone }
                    };
                    return r.agent && (u.agent = r.agent), e(u);
                  })
                  .then(function(e) {
                    try {
                      return JSON.stringify(JSON.parse(e.slice(5)));
                    } catch (t) {
                      return e;
                    }
                  });
              };
            }),
            (t.getTrendingResults = function(e) {
              return function(t, r) {
                var o = {
                    "Daily trends": {
                      path: "/trends/api/dailytrends",
                      extraParams: { ed: n(r.trendDate, !1, !0), ns: r.ns }
                    },
                    "Real time trends": {
                      path: "/trends/api/realtimetrends",
                      extraParams: { fi: 0, fs: 0, ri: 300, rs: 20, sort: 0 }
                    }
                  },
                  s = {
                    method: "GET",
                    host: "trends.google.com",
                    path: o[t].path,
                    qs: {
                      hl: r.hl,
                      tz: r.timezone,
                      geo: r.geo,
                      cat: r.category
                    }
                  };
                return (
                  r.agent && (s.agent = r.agent),
                  (s.qs = c({}, s.qs, o[t].extraParams)),
                  e(s).then(function(e) {
                    try {
                      return JSON.stringify(JSON.parse(e.slice(5)));
                    } catch (t) {
                      return e;
                    }
                  })
                );
              };
            }),
            (t.constructTrendingObj = function(e, t) {
              if (
                ("function" == typeof e && (t = e),
                !e ||
                  (e && "object" !== (void 0 === e ? "undefined" : l(e))) ||
                  Array.isArray(e))
              )
                e = new Error("Must supply an object");
              else {
                (e.trendDate && e.trendDate instanceof Date) ||
                  delete e.trendDate;
                var r = new Date(),
                  n = {
                    hl: "en-US",
                    category: "all",
                    timezone: r.getTimezoneOffset(),
                    trendDate: r,
                    ns: 15
                  };
                e = c({}, n, e);
              }
              return (
                f(t) && (e = new Error("Callback function must be a function")),
                e.geo ||
                  (e = new Error("Must supply an geographical location (geo)")),
                t ||
                  (t = function(e, t) {
                    return e || t;
                  }),
                { cbFunc: t, obj: e }
              );
            });
          var f = function(e) {
            return !!e && "function" != typeof e;
          };
        }
      ]));
  },
  function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0),
      o = r(4),
      s = r(3),
      i = r(2),
      a = r(1);
    const u = n.Readable,
      c = Symbol("buffer"),
      l = Symbol("type");
    class f {
      constructor() {
        this[l] = "";
        const e = arguments[0],
          t = arguments[1],
          r = [];
        let n = 0;
        if (e) {
          const t = e,
            o = Number(t.length);
          for (let e = 0; e < o; e++) {
            const o = t[e];
            let s;
            (s =
              o instanceof Buffer
                ? o
                : ArrayBuffer.isView(o)
                ? Buffer.from(o.buffer, o.byteOffset, o.byteLength)
                : o instanceof ArrayBuffer
                ? Buffer.from(o)
                : o instanceof f
                ? o[c]
                : Buffer.from("string" == typeof o ? o : String(o))),
              (n += s.length),
              r.push(s);
          }
        }
        this[c] = Buffer.concat(r);
        let o = t && void 0 !== t.type && String(t.type).toLowerCase();
        o && !/[^\u0020-\u007E]/.test(o) && (this[l] = o);
      }
      get size() {
        return this[c].length;
      }
      get type() {
        return this[l];
      }
      text() {
        return Promise.resolve(this[c].toString());
      }
      arrayBuffer() {
        const e = this[c],
          t = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return Promise.resolve(t);
      }
      stream() {
        const e = new u();
        return (e._read = function() {}), e.push(this[c]), e.push(null), e;
      }
      toString() {
        return "[object Blob]";
      }
      slice() {
        const e = this.size,
          t = arguments[0],
          r = arguments[1];
        let n, o;
        (n = void 0 === t ? 0 : t < 0 ? Math.max(e + t, 0) : Math.min(t, e)),
          (o = void 0 === r ? e : r < 0 ? Math.max(e + r, 0) : Math.min(r, e));
        const s = Math.max(o - n, 0),
          i = this[c].slice(n, n + s),
          a = new f([], { type: arguments[2] });
        return (a[c] = i), a;
      }
    }
    function d(e, t, r) {
      Error.call(this, e),
        (this.message = e),
        (this.type = t),
        r && (this.code = this.errno = r.code),
        Error.captureStackTrace(this, this.constructor);
    }
    let p;
    Object.defineProperties(f.prototype, {
      size: { enumerable: !0 },
      type: { enumerable: !0 },
      slice: { enumerable: !0 }
    }),
      Object.defineProperty(f.prototype, Symbol.toStringTag, {
        value: "Blob",
        writable: !1,
        enumerable: !1,
        configurable: !0
      }),
      (d.prototype = Object.create(Error.prototype)),
      (d.prototype.constructor = d),
      (d.prototype.name = "FetchError");
    try {
      p = require("encoding").convert;
    } catch (e) {}
    const h = Symbol("Body internals"),
      y = n.PassThrough;
    function m(e) {
      var t = this,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = r.size;
      let s = void 0 === o ? 0 : o;
      var i = r.timeout;
      let a = void 0 === i ? 0 : i;
      null == e
        ? (e = null)
        : g(e)
        ? (e = Buffer.from(e.toString()))
        : v(e) ||
          Buffer.isBuffer(e) ||
          ("[object ArrayBuffer]" === Object.prototype.toString.call(e)
            ? (e = Buffer.from(e))
            : ArrayBuffer.isView(e)
            ? (e = Buffer.from(e.buffer, e.byteOffset, e.byteLength))
            : e instanceof n || (e = Buffer.from(String(e)))),
        (this[h] = { body: e, disturbed: !1, error: null }),
        (this.size = s),
        (this.timeout = a),
        e instanceof n &&
          e.on("error", function(e) {
            const r =
              "AbortError" === e.name
                ? e
                : new d(
                    `Invalid response body while trying to fetch ${t.url}: ${e.message}`,
                    "system",
                    e
                  );
            t[h].error = r;
          });
    }
    function b() {
      var e = this;
      if (this[h].disturbed)
        return m.Promise.reject(
          new TypeError(`body used already for: ${this.url}`)
        );
      if (((this[h].disturbed = !0), this[h].error))
        return m.Promise.reject(this[h].error);
      let t = this.body;
      if (null === t) return m.Promise.resolve(Buffer.alloc(0));
      if ((v(t) && (t = t.stream()), Buffer.isBuffer(t)))
        return m.Promise.resolve(t);
      if (!(t instanceof n)) return m.Promise.resolve(Buffer.alloc(0));
      let r = [],
        o = 0,
        s = !1;
      return new m.Promise(function(n, i) {
        let a;
        e.timeout &&
          (a = setTimeout(function() {
            (s = !0),
              i(
                new d(
                  `Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,
                  "body-timeout"
                )
              );
          }, e.timeout)),
          t.on("error", function(t) {
            "AbortError" === t.name
              ? ((s = !0), i(t))
              : i(
                  new d(
                    `Invalid response body while trying to fetch ${e.url}: ${t.message}`,
                    "system",
                    t
                  )
                );
          }),
          t.on("data", function(t) {
            if (!s && null !== t) {
              if (e.size && o + t.length > e.size)
                return (
                  (s = !0),
                  void i(
                    new d(
                      `content size at ${e.url} over limit: ${e.size}`,
                      "max-size"
                    )
                  )
                );
              (o += t.length), r.push(t);
            }
          }),
          t.on("end", function() {
            if (!s) {
              clearTimeout(a);
              try {
                n(Buffer.concat(r, o));
              } catch (t) {
                i(
                  new d(
                    `Could not create Buffer from response body for ${e.url}: ${t.message}`,
                    "system",
                    t
                  )
                );
              }
            }
          });
      });
    }
    function g(e) {
      return (
        "object" == typeof e &&
        "function" == typeof e.append &&
        "function" == typeof e.delete &&
        "function" == typeof e.get &&
        "function" == typeof e.getAll &&
        "function" == typeof e.has &&
        "function" == typeof e.set &&
        ("URLSearchParams" === e.constructor.name ||
          "[object URLSearchParams]" === Object.prototype.toString.call(e) ||
          "function" == typeof e.sort)
      );
    }
    function v(e) {
      return (
        "object" == typeof e &&
        "function" == typeof e.arrayBuffer &&
        "string" == typeof e.type &&
        "function" == typeof e.stream &&
        "function" == typeof e.constructor &&
        "string" == typeof e.constructor.name &&
        /^(Blob|File)$/.test(e.constructor.name) &&
        /^(Blob|File)$/.test(e[Symbol.toStringTag])
      );
    }
    function w(e) {
      let t,
        r,
        o = e.body;
      if (e.bodyUsed) throw new Error("cannot clone body after it is used");
      return (
        o instanceof n &&
          "function" != typeof o.getBoundary &&
          ((t = new y()),
          (r = new y()),
          o.pipe(t),
          o.pipe(r),
          (e[h].body = t),
          (o = r)),
        o
      );
    }
    function T(e) {
      return null === e
        ? null
        : "string" == typeof e
        ? "text/plain;charset=UTF-8"
        : g(e)
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : v(e)
        ? e.type || null
        : Buffer.isBuffer(e)
        ? null
        : "[object ArrayBuffer]" === Object.prototype.toString.call(e)
        ? null
        : ArrayBuffer.isView(e)
        ? null
        : "function" == typeof e.getBoundary
        ? `multipart/form-data;boundary=${e.getBoundary()}`
        : e instanceof n
        ? null
        : "text/plain;charset=UTF-8";
    }
    function O(e) {
      const t = e.body;
      return null === t
        ? 0
        : v(t)
        ? t.size
        : Buffer.isBuffer(t)
        ? t.length
        : t &&
          "function" == typeof t.getLengthSync &&
          ((t._lengthRetrievers && 0 == t._lengthRetrievers.length) ||
            (t.hasKnownLength && t.hasKnownLength()))
        ? t.getLengthSync()
        : null;
    }
    (m.prototype = {
      get body() {
        return this[h].body;
      },
      get bodyUsed() {
        return this[h].disturbed;
      },
      arrayBuffer() {
        return b.call(this).then(function(e) {
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        });
      },
      blob() {
        let e = (this.headers && this.headers.get("content-type")) || "";
        return b.call(this).then(function(t) {
          return Object.assign(new f([], { type: e.toLowerCase() }), {
            [c]: t
          });
        });
      },
      json() {
        var e = this;
        return b.call(this).then(function(t) {
          try {
            return JSON.parse(t.toString());
          } catch (t) {
            return m.Promise.reject(
              new d(
                `invalid json response body at ${e.url} reason: ${t.message}`,
                "invalid-json"
              )
            );
          }
        });
      },
      text() {
        return b.call(this).then(function(e) {
          return e.toString();
        });
      },
      buffer() {
        return b.call(this);
      },
      textConverted() {
        var e = this;
        return b.call(this).then(function(t) {
          return (function(e, t) {
            if ("function" != typeof p)
              throw new Error(
                "The package `encoding` must be installed to use the textConverted() function"
              );
            const r = t.get("content-type");
            let n,
              o,
              s = "utf-8";
            r && (n = /charset=([^;]*)/i.exec(r));
            (o = e.slice(0, 1024).toString()),
              !n && o && (n = /<meta.+?charset=(['"])(.+?)\1/i.exec(o));
            !n &&
              o &&
              ((n = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
                o
              )),
              n && (n = /charset=(.*)/i.exec(n.pop())));
            !n && o && (n = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o));
            n &&
              ((s = n.pop()),
              ("gb2312" !== s && "gbk" !== s) || (s = "gb18030"));
            return p(e, "UTF-8", s).toString();
          })(t, e.headers);
        });
      }
    }),
      Object.defineProperties(m.prototype, {
        body: { enumerable: !0 },
        bodyUsed: { enumerable: !0 },
        arrayBuffer: { enumerable: !0 },
        blob: { enumerable: !0 },
        json: { enumerable: !0 },
        text: { enumerable: !0 }
      }),
      (m.mixIn = function(e) {
        for (const t of Object.getOwnPropertyNames(m.prototype))
          if (!(t in e)) {
            const r = Object.getOwnPropertyDescriptor(m.prototype, t);
            Object.defineProperty(e, t, r);
          }
      }),
      (m.Promise = global.Promise);
    const j = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,
      S = /[^\t\x20-\x7e\x80-\xff]/;
    function E(e) {
      if (((e = `${e}`), j.test(e) || "" === e))
        throw new TypeError(`${e} is not a legal HTTP header name`);
    }
    function x(e) {
      if (((e = `${e}`), S.test(e)))
        throw new TypeError(`${e} is not a legal HTTP header value`);
    }
    function P(e, t) {
      t = t.toLowerCase();
      for (const r in e) if (r.toLowerCase() === t) return r;
    }
    const C = Symbol("map");
    class A {
      constructor() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : void 0;
        if (((this[C] = Object.create(null)), e instanceof A)) {
          const t = e.raw(),
            r = Object.keys(t);
          for (const e of r) for (const r of t[e]) this.append(e, r);
        } else if (null == e);
        else {
          if ("object" != typeof e)
            throw new TypeError("Provided initializer must be an object");
          {
            const t = e[Symbol.iterator];
            if (null != t) {
              if ("function" != typeof t)
                throw new TypeError("Header pairs must be iterable");
              const r = [];
              for (const t of e) {
                if (
                  "object" != typeof t ||
                  "function" != typeof t[Symbol.iterator]
                )
                  throw new TypeError("Each header pair must be iterable");
                r.push(Array.from(t));
              }
              for (const e of r) {
                if (2 !== e.length)
                  throw new TypeError(
                    "Each header pair must be a name/value tuple"
                  );
                this.append(e[0], e[1]);
              }
            } else
              for (const t of Object.keys(e)) {
                const r = e[t];
                this.append(t, r);
              }
          }
        }
      }
      get(e) {
        E((e = `${e}`));
        const t = P(this[C], e);
        return void 0 === t ? null : this[C][t].join(", ");
      }
      forEach(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          r = B(this),
          n = 0;
        for (; n < r.length; ) {
          var o = r[n];
          const s = o[0],
            i = o[1];
          e.call(t, i, s, this), (r = B(this)), n++;
        }
      }
      set(e, t) {
        (t = `${t}`), E((e = `${e}`)), x(t);
        const r = P(this[C], e);
        this[C][void 0 !== r ? r : e] = [t];
      }
      append(e, t) {
        (t = `${t}`), E((e = `${e}`)), x(t);
        const r = P(this[C], e);
        void 0 !== r ? this[C][r].push(t) : (this[C][e] = [t]);
      }
      has(e) {
        return E((e = `${e}`)), void 0 !== P(this[C], e);
      }
      delete(e) {
        E((e = `${e}`));
        const t = P(this[C], e);
        void 0 !== t && delete this[C][t];
      }
      raw() {
        return this[C];
      }
      keys() {
        return R(this, "key");
      }
      values() {
        return R(this, "value");
      }
      [Symbol.iterator]() {
        return R(this, "key+value");
      }
    }
    function B(e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "key+value";
      const r = Object.keys(e[C]).sort();
      return r.map(
        "key" === t
          ? function(e) {
              return e.toLowerCase();
            }
          : "value" === t
          ? function(t) {
              return e[C][t].join(", ");
            }
          : function(t) {
              return [t.toLowerCase(), e[C][t].join(", ")];
            }
      );
    }
    (A.prototype.entries = A.prototype[Symbol.iterator]),
      Object.defineProperty(A.prototype, Symbol.toStringTag, {
        value: "Headers",
        writable: !1,
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperties(A.prototype, {
        get: { enumerable: !0 },
        forEach: { enumerable: !0 },
        set: { enumerable: !0 },
        append: { enumerable: !0 },
        has: { enumerable: !0 },
        delete: { enumerable: !0 },
        keys: { enumerable: !0 },
        values: { enumerable: !0 },
        entries: { enumerable: !0 }
      });
    const k = Symbol("internal");
    function R(e, t) {
      const r = Object.create(_);
      return (r[k] = { target: e, kind: t, index: 0 }), r;
    }
    const _ = Object.setPrototypeOf(
      {
        next() {
          if (!this || Object.getPrototypeOf(this) !== _)
            throw new TypeError("Value of `this` is not a HeadersIterator");
          var e = this[k];
          const t = e.target,
            r = e.kind,
            n = e.index,
            o = B(t, r);
          return n >= o.length
            ? { value: void 0, done: !0 }
            : ((this[k].index = n + 1), { value: o[n], done: !1 });
        }
      },
      Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
    );
    function $(e) {
      const t = Object.assign({ __proto__: null }, e[C]),
        r = P(e[C], "Host");
      return void 0 !== r && (t[r] = t[r][0]), t;
    }
    Object.defineProperty(_, Symbol.toStringTag, {
      value: "HeadersIterator",
      writable: !1,
      enumerable: !1,
      configurable: !0
    });
    const q = Symbol("Response internals"),
      z = o.STATUS_CODES;
    class L {
      constructor() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        m.call(this, e, t);
        const r = t.status || 200,
          n = new A(t.headers);
        if (null != e && !n.has("Content-Type")) {
          const t = T(e);
          t && n.append("Content-Type", t);
        }
        this[q] = {
          url: t.url,
          status: r,
          statusText: t.statusText || z[r],
          headers: n,
          counter: t.counter
        };
      }
      get url() {
        return this[q].url || "";
      }
      get status() {
        return this[q].status;
      }
      get ok() {
        return this[q].status >= 200 && this[q].status < 300;
      }
      get redirected() {
        return this[q].counter > 0;
      }
      get statusText() {
        return this[q].statusText;
      }
      get headers() {
        return this[q].headers;
      }
      clone() {
        return new L(w(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected
        });
      }
    }
    m.mixIn(L.prototype),
      Object.defineProperties(L.prototype, {
        url: { enumerable: !0 },
        status: { enumerable: !0 },
        ok: { enumerable: !0 },
        redirected: { enumerable: !0 },
        statusText: { enumerable: !0 },
        headers: { enumerable: !0 },
        clone: { enumerable: !0 }
      }),
      Object.defineProperty(L.prototype, Symbol.toStringTag, {
        value: "Response",
        writable: !1,
        enumerable: !1,
        configurable: !0
      });
    const U = Symbol("Request internals"),
      D = s.parse,
      M = s.format,
      I = "destroy" in n.Readable.prototype;
    function N(e) {
      return "object" == typeof e && "object" == typeof e[U];
    }
    class F {
      constructor(e) {
        let t,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        N(e)
          ? (t = D(e.url))
          : ((t = e && e.href ? D(e.href) : D(`${e}`)), (e = {}));
        let n = r.method || e.method || "GET";
        if (
          ((n = n.toUpperCase()),
          (null != r.body || (N(e) && null !== e.body)) &&
            ("GET" === n || "HEAD" === n))
        )
          throw new TypeError("Request with GET/HEAD method cannot have body");
        let o = null != r.body ? r.body : N(e) && null !== e.body ? w(e) : null;
        m.call(this, o, {
          timeout: r.timeout || e.timeout || 0,
          size: r.size || e.size || 0
        });
        const s = new A(r.headers || e.headers || {});
        if (null != o && !s.has("Content-Type")) {
          const e = T(o);
          e && s.append("Content-Type", e);
        }
        let i = N(e) ? e.signal : null;
        if (
          ("signal" in r && (i = r.signal),
          null != i &&
            !(function(e) {
              const t = e && "object" == typeof e && Object.getPrototypeOf(e);
              return !(!t || "AbortSignal" !== t.constructor.name);
            })(i))
        )
          throw new TypeError(
            "Expected signal to be an instanceof AbortSignal"
          );
        (this[U] = {
          method: n,
          redirect: r.redirect || e.redirect || "follow",
          headers: s,
          parsedURL: t,
          signal: i
        }),
          (this.follow =
            void 0 !== r.follow
              ? r.follow
              : void 0 !== e.follow
              ? e.follow
              : 20),
          (this.compress =
            void 0 !== r.compress
              ? r.compress
              : void 0 === e.compress || e.compress),
          (this.counter = r.counter || e.counter || 0),
          (this.agent = r.agent || e.agent);
      }
      get method() {
        return this[U].method;
      }
      get url() {
        return M(this[U].parsedURL);
      }
      get headers() {
        return this[U].headers;
      }
      get redirect() {
        return this[U].redirect;
      }
      get signal() {
        return this[U].signal;
      }
      clone() {
        return new F(this);
      }
    }
    function H(e) {
      Error.call(this, e),
        (this.type = "aborted"),
        (this.message = e),
        Error.captureStackTrace(this, this.constructor);
    }
    m.mixIn(F.prototype),
      Object.defineProperty(F.prototype, Symbol.toStringTag, {
        value: "Request",
        writable: !1,
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperties(F.prototype, {
        method: { enumerable: !0 },
        url: { enumerable: !0 },
        headers: { enumerable: !0 },
        redirect: { enumerable: !0 },
        clone: { enumerable: !0 },
        signal: { enumerable: !0 }
      }),
      (H.prototype = Object.create(Error.prototype)),
      (H.prototype.constructor = H),
      (H.prototype.name = "AbortError");
    const G = n.PassThrough,
      J = s.resolve;
    function Y(e, t) {
      if (!Y.Promise)
        throw new Error(
          "native promise missing, set fetch.Promise to your favorite alternative"
        );
      return (
        (m.Promise = Y.Promise),
        new Y.Promise(function(r, s) {
          const u = new F(e, t),
            c = (function(e) {
              const t = e[U].parsedURL,
                r = new A(e[U].headers);
              if (
                (r.has("Accept") || r.set("Accept", "*/*"),
                !t.protocol || !t.hostname)
              )
                throw new TypeError("Only absolute URLs are supported");
              if (!/^https?:$/.test(t.protocol))
                throw new TypeError("Only HTTP(S) protocols are supported");
              if (e.signal && e.body instanceof n.Readable && !I)
                throw new Error(
                  "Cancellation of streamed requests with AbortSignal is not supported in node < 8"
                );
              let o = null;
              if (
                (null == e.body && /^(POST|PUT)$/i.test(e.method) && (o = "0"),
                null != e.body)
              ) {
                const t = O(e);
                "number" == typeof t && (o = String(t));
              }
              o && r.set("Content-Length", o),
                r.has("User-Agent") ||
                  r.set(
                    "User-Agent",
                    "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"
                  ),
                e.compress &&
                  !r.has("Accept-Encoding") &&
                  r.set("Accept-Encoding", "gzip,deflate");
              let s = e.agent;
              return (
                "function" == typeof s && (s = s(t)),
                r.has("Connection") || s || r.set("Connection", "close"),
                Object.assign({}, t, {
                  method: e.method,
                  headers: $(r),
                  agent: s
                })
              );
            })(u),
            l = ("https:" === c.protocol ? i : o).request,
            f = u.signal;
          let p = null;
          const h = function() {
            let e = new H("The user aborted a request.");
            s(e),
              u.body && u.body instanceof n.Readable && u.body.destroy(e),
              p && p.body && p.body.emit("error", e);
          };
          if (f && f.aborted) return void h();
          const y = function() {
              h(), g();
            },
            m = l(c);
          let b;
          function g() {
            m.abort(), f && f.removeEventListener("abort", y), clearTimeout(b);
          }
          f && f.addEventListener("abort", y),
            u.timeout &&
              m.once("socket", function(e) {
                b = setTimeout(function() {
                  s(new d(`network timeout at: ${u.url}`, "request-timeout")),
                    g();
                }, u.timeout);
              }),
            m.on("error", function(e) {
              s(
                new d(
                  `request to ${u.url} failed, reason: ${e.message}`,
                  "system",
                  e
                )
              ),
                g();
            }),
            m.on("response", function(e) {
              clearTimeout(b);
              const t = (function(e) {
                const t = new A();
                for (const r of Object.keys(e))
                  if (!j.test(r))
                    if (Array.isArray(e[r]))
                      for (const n of e[r])
                        S.test(n) ||
                          (void 0 === t[C][r]
                            ? (t[C][r] = [n])
                            : t[C][r].push(n));
                    else S.test(e[r]) || (t[C][r] = [e[r]]);
                return t;
              })(e.headers);
              if (Y.isRedirect(e.statusCode)) {
                const n = t.get("Location"),
                  o = null === n ? null : J(u.url, n);
                switch (u.redirect) {
                  case "error":
                    return (
                      s(
                        new d(
                          `redirect mode is set to error: ${u.url}`,
                          "no-redirect"
                        )
                      ),
                      void g()
                    );
                  case "manual":
                    if (null !== o)
                      try {
                        t.set("Location", o);
                      } catch (e) {
                        s(e);
                      }
                    break;
                  case "follow":
                    if (null === o) break;
                    if (u.counter >= u.follow)
                      return (
                        s(
                          new d(
                            `maximum redirect reached at: ${u.url}`,
                            "max-redirect"
                          )
                        ),
                        void g()
                      );
                    const n = {
                      headers: new A(u.headers),
                      follow: u.follow,
                      counter: u.counter + 1,
                      agent: u.agent,
                      compress: u.compress,
                      method: u.method,
                      body: u.body,
                      signal: u.signal,
                      timeout: u.timeout
                    };
                    return 303 !== e.statusCode && u.body && null === O(u)
                      ? (s(
                          new d(
                            "Cannot follow redirect with body being a readable stream",
                            "unsupported-redirect"
                          )
                        ),
                        void g())
                      : ((303 !== e.statusCode &&
                          ((301 !== e.statusCode && 302 !== e.statusCode) ||
                            "POST" !== u.method)) ||
                          ((n.method = "GET"),
                          (n.body = void 0),
                          n.headers.delete("content-length")),
                        r(Y(new F(o, n))),
                        void g());
                }
              }
              e.once("end", function() {
                f && f.removeEventListener("abort", y);
              });
              let n = e.pipe(new G());
              const o = {
                  url: u.url,
                  status: e.statusCode,
                  statusText: e.statusMessage,
                  headers: t,
                  size: u.size,
                  timeout: u.timeout,
                  counter: u.counter
                },
                i = t.get("Content-Encoding");
              if (
                !u.compress ||
                "HEAD" === u.method ||
                null === i ||
                204 === e.statusCode ||
                304 === e.statusCode
              )
                return (p = new L(n, o)), void r(p);
              const c = { flush: a.Z_SYNC_FLUSH, finishFlush: a.Z_SYNC_FLUSH };
              if ("gzip" == i || "x-gzip" == i)
                return (
                  (n = n.pipe(a.createGunzip(c))), (p = new L(n, o)), void r(p)
                );
              if ("deflate" != i && "x-deflate" != i) {
                if ("br" == i && "function" == typeof a.createBrotliDecompress)
                  return (
                    (n = n.pipe(a.createBrotliDecompress())),
                    (p = new L(n, o)),
                    void r(p)
                  );
                (p = new L(n, o)), r(p);
              } else {
                e.pipe(new G()).once("data", function(e) {
                  (n =
                    8 == (15 & e[0])
                      ? n.pipe(a.createInflate())
                      : n.pipe(a.createInflateRaw())),
                    (p = new L(n, o)),
                    r(p);
                });
              }
            }),
            (function(e, t) {
              const r = t.body;
              null === r
                ? e.end()
                : v(r)
                ? r.stream().pipe(e)
                : Buffer.isBuffer(r)
                ? (e.write(r), e.end())
                : r.pipe(e);
            })(m, u);
        })
      );
    }
    (Y.isRedirect = function(e) {
      return 301 === e || 302 === e || 303 === e || 307 === e || 308 === e;
    }),
      (Y.Promise = global.Promise);
    var V = Y;
    let K;
    var Z = r(6);
    async function Q(e) {
      return (
        (e = ["IVORY", ...e]),
        console.log(e),
        new Promise((t, r) =>
          Object(Z.interestOverTime)({ keyword: e })
            .then(e => JSON.parse(e).default.averages)
            .then(r => {
              const n = 100 / r[0],
                o = e.map((e, t) => [e, r[t] * n]);
              console.log(o), t(o);
            })
            .catch(e => {
              console.log(e);
            })
        )
      );
    }
    !(async function() {
      await (async function() {
        return new Promise((e, t) => {
          V(
            "https://spreadsheets.google.com/feeds/list/1uGluGMd7v8Dujez_u903wKAvtufwCLL178AYL9bdpOY/1/public/values?alt=json",
            {}
          )
            .then(e => e.json())
            .then(t => {
              (K = t.feed.entry), e();
            })
            .catch(function(e) {
              console.log("err=" + e);
            });
        });
      })();
      const e = K.map(e => e.gsx$color.$t);
      for (; 0 < e.length; ) await Q(e.splice(0, 4));
    })();
  }
]);
