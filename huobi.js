webpackJsonp([0], {
    0: function(t, e, n) {
        "use strict";

        function a(t, e) {
            var n = 1e3 / (e || 60),
                a = 1e3 * t;
            return Math.ceil(a / n)
        }

        function i(t, e) {
            var n = {
                attr: e
            };
            return n.node = t, n
        }

        function o(t, e) {
            return t && e && t.parentNode ? t.nodeName.toLowerCase() === e.toLowerCase() ? t : o(t.parentNode, e) : null
        }

        function r(t, e, n) {
            if (!t || !e || !t.parentNode) return null;
            if (n) {
                if (t.className.split(" ").includes(e)) return t
            } else if (t.className.indexOf(e) > -1) return t;
            return r(t.parentNode, e, n)
        }

        function c(t, e, n) {
            return t && e && t.parentNode ? (n ? null !== t.getAttribute(e) : t.getAttribute(e)) ? i(t, t.getAttribute(e)) : c(t.parentNode, e) : null
        }

        function s(t) {
            return [].slice.apply(t)
        }

        function u(t) {
            if (void 0 != t) {
                var e = "string" == typeof t ? t.toLowerCase().replace(/\s/g, "") : t.toString().toLowerCase().replace(/\s/g, ""),
                    n = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                    a = void 0,
                    i = void 0,
                    o = void 0,
                    r = void 0,
                    c = void 0,
                    s = void 0;
                return /e[+-]/.test(e) ? (i = /\+/.test(e), o = e.split("e"), a = /\-/.test(o[0].toString()) ? "-0." : "0.", o[0] = o[0].replace("-", ""), r = o[0].split(".")[1] ? o[0].split(".")[1].length : 0, c = o[1], s = c.split(i ? "+" : "-")[1], o = o[0].replace(".", ""), i ? o + n.substring(0, s - r) : a + n.substring(0, s - 1) + o) : e + ""
            }
        }

        function l(t, e, n, a) {
            var i = void 0;
            if (null != t) {
                if (!~Object.prototype.toString.call(t).indexOf("number") && t != 1 * t) return t;
                var o = u(t),
                    r = o.indexOf("."),
                    c = 0,
                    s = 0;
                if (isNaN(parseFloat(o))) s = 0;
                else if (isNaN(o)) s = parseFloat(o);
                else if (void 0 !== e)
                    if (e = ("" + e).split(":"), i = e[1] || "floor", e = e[0], e = 1 * e || 0, r >= 0) {
                        if ((c = o.substring(r + 1, o.length).length) < e) {
                            for (var l = 0; l < e - c; l++) o += "0";
                            s = 0 === r ? "0" + o : o
                        } else s = U[i] ? U[i](e, o, r) : U.floor(e, o, r);
                        e <= 0 && (s = parseInt(t, 10))
                    } else if (e > 0) {
                    o += ".";
                    for (var d = 0; d < e; d++) o += "0";
                    s = o
                } else e <= 0 && (s = o);
                else s = Number(o);
                return s = n ? function(t, e, n) {
                    for (var a = t.split("."), i = "", o = 0, r = a[0].length; r--;) i = o % e || !o ? a[0].charAt(r) + i : a[0].charAt(r) + n + i, o++;
                    return a[1] ? i + "." + a[1] : i
                }(s, n, a || ",") : s
            }
        }

        function d(t) {
            return t > 9 ? t : "0" + t
        }

        function p(t, e, n) {
            var t = (t + "").split(":"),
                a = 1 * t[0] < Math.pow(10, 11) && !t[1] ? new Date(1e3 * t[0]) : new Date(1 * t[0]),
                i = a.getFullYear(),
                o = d(a.getMonth() + 1),
                r = d(a.getDate()),
                c = d(n ? a.getUTCHours() : a.getHours()),
                s = d(a.getMinutes()),
                u = d(a.getSeconds());
            return e ? e.toLowerCase().replace("y", i).replace("m", o).replace("d", r).replace("h", c).replace("i", s).replace("s", u) : i + "-" + o + "-" + r + " " + c + ":" + s + ":" + u
        }

        function f(t, e) {
            var n = new Date(1e3 * t),
                a = e || "YYYY-MM-DD";
            return Date.prototype.Format = function(t) {
                var e = {
                    "M+": this.getMonth() + 1,
                    "D+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S+": this.getMilliseconds()
                };
                /(Y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
                for (var n in e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
                return t
            }, n.Format(a)
        }

        function m(t) {
            var e = void 0;
            if (!window.getSearchParameters) {
                e = location.search.replace("?", "").split("&"), window.getSearchParameters = {};
                for (var n, a = 0, i = e.length; a < i; a++) n = e[a].split("="), getSearchParameters[n[0]] = decodeURIComponent(n[1])
            }
            return getSearchParameters[t]
        }

        function g(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        function _(t) {
            if ("object" !== (void 0 === t ? "undefined" : R()(t))) return t;
            if (null === t) return t;
            var e = new Object;
            for (var n in t) t.hasOwnProperty(n) && (e[n] = _(t[n]));
            return e
        }

        function v(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                if (n)
                    for (var a in n) n.hasOwnProperty(a) && ("object" === R()(n[a]) ? t[a] = v(t[a], n[a]) : t[a] = n[a])
            }
            return t
        }

        function b(t, e) {
            if ("string" == typeof t) {
                z[t] = z[t] || document.querySelectorAll(t) || [];
                for (var n = 0; n < z[t].length; n++) z[t][n] && (z[t][n].innerHTML = e)
            } else t.innerHTML = e
        }

        function h(t, e) {
            var n = V[t] || (/\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);},__data = obj;with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : h(document.getElementById(t).innerHTML));
            return V[t] = n, e ? n(e) : n
        }

        function y(t) {
            return t ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);},__data = obj;with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : void console.error("Empty template string")
        }

        function k(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments[2],
                a = document.getElementById(t);
            if (!a) return void console.error("Unfound element id:", t);
            (!K[t] || n && n !== K[t].str) && (n = n || a.querySelector("script").innerHTML, K[t] = {
                str: n,
                tmpl: y(n),
                last_data: "{}"
            });
            var i = B()(e);
            i !== K[t].last_data && (a.innerHTML = K[t].tmpl(e), K[t].last_data = i)
        }

        function w(t) {
            for (var e, n, a, i = {}, o = {}, r = [], c = t.length; c--;) e = t[c], n = t[c].getAttribute("name"), a = e.type, n && ("text" === a || "password" === a || "hidden" === a || a.indexOf("select") > -1 || "textarea" === a ? (i[n] = e.value, o[n] = e) : "checkbox" === a ? (i[n] = i[n] || [], o[n] = o[n] || [], o[n].push(e), !0 === e.checked && i[n].push(e.value)) : "radio" === a && (o[n] = e, !0 === e.checked && (i[n] = e.value)), r.unshift({
                name: n,
                value: i[n],
                type: a
            }));
            return [i, o, r]
        }

        function S(t, e) {
            var n = new RegExp("(^|&)" + t + "=([" + (e ? "\\w" : "^") + "&]*)(&|$)"),
                a = window.location.search.substr(1).match(n);
            return null != a ? decodeURI(a[2]) : null
        }

        function T() {
            var t = [].slice.apply(arguments);
            return t.length ? t.shift().replace(/\{([^\}]+)\}/gi, function(e) {
                return e = e.replace(/[\{\}]/g, "").split("||"), void 0 !== t[e[0].replace(/\s/g, "")] ? t[e[0].replace(/\s/g, "")] : (e[1] ? e[1] : e[0]).replace(/(^\s+)|(\s+$)/g, "")
            }) : ""
        }

        function L() {
            function t(t) {
                n = t || {}
            }

            function e(t) {
                return n[t] || t
            }
            var n = {};
            return {
                getLang: e,
                _keys: t,
                lib: function() {
                    return n
                }
            }
        }

        function E(t) {
            for (var e, n = t.replace(/<block[\s]*name=["'\w\d-_]+>([\S\s\t]*?)<\/block>/g, ""), a = t.match(/<block[\s]*name=["'\w\d-_]+>([\S\s\t]*?)<\/block>/g) || [], i = {}, o = a.length; o--;)(e = /<block[\s]*name=(["'\w\d-_]+)>([\S\s\t]*?)<\/block>/.exec(a[o])) && (i[e[1].replace(/['"]/g, "")] = e[2]);
            return {
                html: n,
                block: i,
                blockLength: a.length
            }
        }

        function x() {
            var t = [].slice.apply(arguments);
            if (!(t.length < 2)) return t.shift().apply(t.shift(), t)
        }

        function O(t) {
            function e() {
                t(), n(e)
            }
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            };
            n(e)
        }

        function I(t, e) {
            function n(t) {
                return t.replace(/^\w/, function(t) {
                    return t.toUpperCase()
                })
            }
            var a = t.split(e),
                i = a[0];
            return a.forEach(function(t, e) {
                e && (i += n(t))
            }), i
        }

        function A() {
            return ((navigator.languages ? navigator.languages.length : 0) ? navigator.languages[0] : navigator.language || navigator.userLanguage).toLowerCase()
        }

        function q(t, e, n) {
            var a = "",
                i = "",
                o = "",
                r = [],
                c = "0";
            if (-1 == t.indexOf("?")) return t + "?" + e + "=" + n;
            if (a = t.substr(t.indexOf("?") + 1), -1 != a.indexOf("&")) {
                r = a.split("&");
                for (var s in r) r[s].split("=")[0] == e ? (o = n, c = "1") : o = r[s].split("=")[1], i = i + r[s].split("=")[0] + "=" + o + "&";
                i = i.substr(0, i.length - 1), "0" == c && i == a && (i = i + "&" + e + "=" + n)
            } else -1 != a.indexOf("=") ? (r = a.split("="), r[0] == e ? (o = n, c = "1") : o = r[1], i = r[0] + "=" + o, "0" == c && i == a && (i = i + "&" + e + "=" + n)) : i = e + "=" + n;
            return t.substr(0, t.indexOf("?")) + "?" + i
        }

        function C(t) {
            var e = t.getBoundingClientRect(),
                n = document.documentElement.clientTop,
                a = document.documentElement.clientLeft;
            return {
                top: e.top - n + (window.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: e.left - a + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }
        }

        function N(t, e) {
            if (t) {
                for (var n = t.childNodes, a = 0; a < n.length; a++) "#text" != n[a].nodeName || /\s/.test(n.nodeValue) || t.removeChild(n[a]);
                return void 0 != e ? n.item(e) : n
            }
        }

        function P(t, e) {
            var n = e || 4;
            return new RegExp("^(([0-9]{1}\\d*)|([0]{1}))(\\.(\\d){0," + n + "})?$").test(t)
        }

        function M(t, e, n) {
            var a = n ? window[n] : Y;
            return isNaN(+t) ? void 0 === a && (a = "") : ("" === t || P(t, e)) && (a = t), Y = a, n && (window[n] = a), void 0 === a ? "" : a
        }
        n.d(e, "F", function() {
            return a
        }), n.d(e, "u", function() {
            return s
        }), n.d(e, "t", function() {
            return O
        }), n.d(e, "h", function() {
            return x
        }), n.d(e, "o", function() {
            return E
        }), n.d(e, "n", function() {
            return L
        }), n.d(e, "b", function() {
            return l
        }), n.d(e, "z", function() {
            return f
        }), n.d(e, "c", function() {
            return p
        }), n.d(e, "a", function() {
            return m
        }), n.d(e, "f", function() {
            return F
        }), n.d(e, "v", function() {
            return g
        }), n.d(e, "d", function() {
            return h
        }), n.d(e, "x", function() {
            return _
        }), n.d(e, "j", function() {
            return v
        }), n.d(e, "w", function() {
            return o
        }), n.d(e, "g", function() {
            return c
        }), n.d(e, "k", function() {
            return j
        }), n.d(e, "E", function() {
            return b
        }), n.d(e, "e", function() {
            return k
        }), n.d(e, "i", function() {
            return Q
        }), n.d(e, "y", function() {
            return w
        }), n.d(e, "m", function() {
            return S
        }), n.d(e, "p", function() {
            return T
        }), n.d(e, "q", function() {
            return u
        }), n.d(e, "D", function() {
            return I
        }), n.d(e, "A", function() {
            return A
        }), n.d(e, "l", function() {
            return r
        }), n.d(e, "B", function() {
            return q
        }), n.d(e, "r", function() {
            return C
        }), n.d(e, "s", function() {
            return M
        }), n.d(e, "C", function() {
            return N
        });
        var D = n(14),
            B = n.n(D),
            H = n(18),
            R = n.n(H),
            G = n(72),
            U = (n.n(G), function() {
                function t(t, e, n) {
                    return (0 === n ? "0" : "") + e.substring(0, t + 1 + n)
                }

                function e(e, n, a) {
                    var i = t(e, n, a);
                    return 1 * i == 1 * n ? i : (1 * i + 7 / Math.pow(10, 1 * e + 1)).toFixed(e)
                }

                function n(t, e, n) {
                    return (1 * e).toFixed(t)
                }
                return {
                    floor: t,
                    ceil: e,
                    rounding: n
                }
            }()),
            F = {
                add: document.addEventListener ? function(t, e, n) {
                    "mousewheel" === e && void 0 !== document.mozFullScreen && (e = "DOMMouseScroll"), t.addEventListener(e, n, !1)
                } : function(t, e, n) {
                    t.attachEvent("on" + e, n)
                },
                remove: document.removeEventListener ? function(t, e, n) {
                    t.removeEventListener(e, n, !1)
                } : function(t, e, n) {
                    t.detachEvent("on" + e, n)
                },
                target: function(t) {
                    return t.target ? t.target : window.event.srcElement
                },
                delta: function(t) {
                    var e = t || window.event;
                    return e.wheelDelta / -120 || e.detail / 3
                },
                stop: function(t) {
                    t && t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : (window.event.cancelBubble = !0, window.event.returnValue = !1)
                },
                mouse: function(t) {
                    return {
                        x: t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                        y: t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
                    }
                },
                trigger: function(t, e, n) {
                    var a = document.createEvent("HTMLEvents");
                    a.initEvent(e, !0, !1), a.info = n, t.dispatchEvent(a)
                },
                on: function(t, e, n) {
                    var a = t[this.myEvent._nEid] || (t[this.myEvent._nEid] = this.myEvent._guid++);
                    if (this.myEvent._cache[a] || (this.myEvent._cache[a] = {
                            elem: t,
                            listener: this.myEvent._create(a),
                            events: {}
                        }), e && !this.myEvent._cache[a].events[e] && (this.myEvent._cache[a].events[e] = [], this.add(t, e, this.myEvent._cache[a].listener)), !n) return this.myEvent._cache[a];
                    n[this.myEvent._nFid] || (n[this.myEvent._nFid] = this.myEvent._fid++), this.myEvent._cache[a].events[e].push(n)
                },
                off: function(t, e, n) {
                    var a = void 0,
                        i = void 0,
                        o = void 0,
                        r = t[this.myEvent._nEid],
                        c = this.myEvent._cache[r];
                    if (c)
                        if (a = c.events, n) {
                            if (!(o = a[e])) return;
                            for (i = 0; i < o.length; i++) o[i][this.myEvent._nFid] === n[this.myEvent._nFid] && o.splice(i--, 1);
                            if (0 === o.length) return this.off(t, e)
                        } else if (e) delete a[e], this.remove(t, e, c.listener);
                    else {
                        for (i in a) this.remove(t, i, c.listener);
                        delete this.myEvent._cache[r]
                    }
                },
                myEvent: {
                    _fid: 1,
                    _guid: 1,
                    _nEid: "{$huobi-eid}" + (new Date).getTime(),
                    _nFid: "{$huobi-fid}" + (new Date).getTime(),
                    _create: function(t) {
                        return function(e) {
                            e = F.fix(e || window.event);
                            for (var n = 0, a = (e || (e = document.event)).type, i = F.myEvent._cache[t].elem, o = arguments, r = F.myEvent._cache[t].events[a]; n < r.length; n++) null === r[n].apply(i, o) && e.preventDefault()
                        }
                    },
                    _cache: {}
                },
                fix: function(t) {
                    if (document.addEventListener) return t;
                    var e = void 0,
                        n = {};
                    for (e in t) n[e] = t[e];
                    return n
                }
            },
            j = function() {
                var t = document.documentElement.classList,
                    e = {
                        hasClass: function(e, n) {
                            return t ? e.classList.contains(n) : new RegExp("(^|\\s)" + n + "(\\s|$)").test(e.className)
                        },
                        addClass: function(n, a) {
                            t ? n.classList.add(a) : e.hasClass(n, a) || (n.className = n.className + " " + a)
                        },
                        removeClass: function(n, a) {
                            t ? n.classList.remove(a) : e.hasClass(n, a) && (n.className = n.className.replace(new RegExp("(^|\\s)*" + a + "(\\s|$)*", "g"), ""))
                        },
                        getPosition: function(t, e) {
                            var n, a, i, o = t,
                                r = 0,
                                c = 0;
                            if (t.nodeName) {
                                for (; o && ("body" == o.nodeName.toLowerCase() && (a = 1), i = o.currentStyle ? o.currentStyle : document.defaultView.getComputedStyle(o), r += o.offsetLeft + (parseInt(i.borderLeftWidth) ? parseInt(i.borderLeftWidth) : 0) - (a ? 0 : o.scrollLeft), c += o.offsetTop + (parseInt(i.borderTopWidth) ? parseInt(i.borderTopWidth) : 0) - (a ? 0 : o.scrollTop), n = o.offsetParent ? o.offsetParent : o, o = o.offsetParent, !(e & e === o)););
                                return {
                                    x: r,
                                    y: c,
                                    element: o,
                                    forefather: e || n
                                }
                            }
                        }
                    };
                return e
            }(),
            z = {},
            V = {},
            K = {},
            Q = function() {
                function t(t) {
                    var e = document.cookie.match("(?:^|;)\\s*" + t + "=([^;]*)");
                    return e ? decodeURIComponent(e[1]) : null
                }

                function e(t) {
                    var e = t.name + "=" + encodeURIComponent(t.value);
                    if (t.domain && (e += "; domain=" + t.domain), t.path && (e += "; path=" + t.path), t.time) {
                        var n = new Date;
                        n.setTime(n.getTime() + 1e3 * t.time), e += "; expires=" + n.toGMTString()
                    }
                    document.cookie = e
                }

                function n(n, a) {
                    var i = (t(n), a || {});
                    i.name = n, i.value = "", i.time = -1, e(i)
                }
                return {
                    get: t,
                    set: e,
                    del: n
                }
            }();
        window.$_GET = S;
        var Y = void 0
    },
    1: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = t.split("-");
            return e[0].toLowerCase() + "-" + (e[1] || e[0]).toUpperCase()
        }

        function i(t, e, n) {
            var a = {
                    base: _,
                    HBBase: v,
                    uc: h,
                    vote: b
                },
                i = t.replace("{{", "").split("}}")[0];
            return n = n || {}, n.method = e, n.url = o(t, n.path, e), n.getApiOption ? n : a[i](n)
        }

        function o(t, e, n) {
            var a = p.c.rest,
                i = p.c.main,
                o = p.c.uc,
                r = p.c.vote,
                c = t || "",
                s = Math.random().toString(36).substr(2);
            c = c.replace(new RegExp("{{(base)}}", "ig"), a), c = c.replace(new RegExp("{{(HBBase)}}", "ig"), i), c = c.replace(new RegExp("{{(uc)}}", "ig"), o), c = c.replace(new RegExp("{{(vote)}}", "ig"), r), "get" === n && (c += "?r=" + s);
            for (var u in e) c = c.replace(new RegExp("{{(" + u + ")}}", "ig"), e[u]);
            return c
        }

        function r(t) {
            return t.driver = "PRO", n.i(f.b)(d.a.__resInterceptors, t), t
        }

        function c(t) {
            return t.driver = "HB", n.i(f.b)(d.a.__resInterceptors, t), t
        }

        function s(t) {
            return t.driver = "UC", n.i(f.b)(d.a.__resInterceptors, t), t
        }

        function u(t) {
            return t.driver = "VOTE", n.i(f.b)(d.a.__resInterceptors, t), t
        }

        function l(t, e) {
            var n = {};
            g.i.get(t) ? (n[t] = g.i.get(t), e.setHeaders(n)) : e.delHeaders(t)
        }
        n.d(e, "c", function() {
            return y
        }), n.d(e, "d", function() {
            return k
        }), n.d(e, "n", function() {
            return w
        }), n.d(e, "m", function() {
            return S
        }), n.d(e, "a", function() {
            return T
        }), n.d(e, "g", function() {
            return L
        }), n.d(e, "_84", function() {
            return E
        }), n.d(e, "_85", function() {
            return x
        }), n.d(e, "_22", function() {
            return O
        }), n.d(e, "_23", function() {
            return I
        }), n.d(e, "_20", function() {
            return A
        }), n.d(e, "_21", function() {
            return q
        }), n.d(e, "_47", function() {
            return C
        }), n.d(e, "_48", function() {
            return N
        }), n.d(e, "b", function() {
            return P
        }), n.d(e, "v", function() {
            return M
        }), n.d(e, "u", function() {
            return D
        }), n.d(e, "_44", function() {
            return B
        }), n.d(e, "_43", function() {
            return H
        }), n.d(e, "_83", function() {
            return R
        }), n.d(e, "_76", function() {
            return G
        }), n.d(e, "_75", function() {
            return U
        }), n.d(e, "M", function() {
            return F
        }), n.d(e, "_72", function() {
            return j
        }), n.d(e, "_71", function() {
            return z
        }), n.d(e, "G", function() {
            return V
        }), n.d(e, "_80", function() {
            return K
        }), n.d(e, "_74", function() {
            return Q
        }), n.d(e, "_79", function() {
            return Y
        }), n.d(e, "_77", function() {
            return W
        }), n.d(e, "_64", function() {
            return $
        }), n.d(e, "_78", function() {
            return J
        }), n.d(e, "N", function() {
            return Z
        }), n.d(e, "_73", function() {
            return X
        }), n.d(e, "_81", function() {
            return tt
        }), n.d(e, "_82", function() {
            return et
        }), n.d(e, "K", function() {
            return nt
        }), n.d(e, "I", function() {
            return at
        }), n.d(e, "L", function() {
            return it
        }), n.d(e, "H", function() {
            return ot
        }), n.d(e, "_65", function() {
            return rt
        }), n.d(e, "_66", function() {
            return ct
        }), n.d(e, "_41", function() {
            return st
        }), n.d(e, "_42", function() {
            return ut
        }), n.d(e, "_68", function() {
            return lt
        }), n.d(e, "_69", function() {
            return dt
        }), n.d(e, "_19", function() {
            return pt
        }), n.d(e, "i", function() {
            return ft
        }), n.d(e, "j", function() {
            return mt
        }), n.d(e, "k", function() {
            return gt
        }), n.d(e, "_3", function() {
            return _t
        }), n.d(e, "l", function() {
            return vt
        }), n.d(e, "f", function() {
            return bt
        }), n.d(e, "_27", function() {
            return ht
        }), n.d(e, "_2", function() {
            return yt
        }), n.d(e, "A", function() {
            return kt
        }), n.d(e, "B", function() {
            return wt
        }), n.d(e, "_4", function() {
            return St
        }), n.d(e, "_12", function() {
            return Tt
        }), n.d(e, "C", function() {
            return Lt
        }), n.d(e, "w", function() {
            return Et
        }), n.d(e, "W", function() {
            return xt
        }), n.d(e, "_1", function() {
            return Ot
        }), n.d(e, "_52", function() {
            return It
        }), n.d(e, "Z", function() {
            return At
        }), n.d(e, "_0", function() {
            return qt
        }), n.d(e, "X", function() {
            return Ct
        }), n.d(e, "Y", function() {
            return Nt
        }), n.d(e, "q", function() {
            return Pt
        }), n.d(e, "r", function() {
            return Mt
        }), n.d(e, "_16", function() {
            return Dt
        }), n.d(e, "_6", function() {
            return Bt
        }), n.d(e, "_17", function() {
            return Ht
        }), n.d(e, "_18", function() {
            return Rt
        }), n.d(e, "_13", function() {
            return Gt
        }), n.d(e, "_8", function() {
            return Ut
        }), n.d(e, "_10", function() {
            return Ft
        }), n.d(e, "_9", function() {
            return jt
        }), n.d(e, "_7", function() {
            return zt
        }), n.d(e, "_14", function() {
            return Vt
        }), n.d(e, "_5", function() {
            return Kt
        }), n.d(e, "_11", function() {
            return Qt
        }), n.d(e, "_15", function() {
            return Yt
        }), n.d(e, "E", function() {
            return Wt
        }), n.d(e, "D", function() {
            return $t
        }), n.d(e, "_62", function() {
            return Jt
        }), n.d(e, "_61", function() {
            return Zt
        }), n.d(e, "_63", function() {
            return Xt
        }), n.d(e, "o", function() {
            return te
        }), n.d(e, "_24", function() {
            return ee
        }), n.d(e, "_67", function() {
            return ne
        }), n.d(e, "_50", function() {
            return ae
        }), n.d(e, "x", function() {
            return ie
        }), n.d(e, "_51", function() {
            return oe
        }), n.d(e, "e", function() {
            return re
        }), n.d(e, "z", function() {
            return ce
        }), n.d(e, "y", function() {
            return se
        }), n.d(e, "_49", function() {
            return ue
        }), n.d(e, "J", function() {
            return le
        }), n.d(e, "_46", function() {
            return de
        }), n.d(e, "_86", function() {
            return pe
        }), n.d(e, "_87", function() {
            return fe
        }), n.d(e, "_90", function() {
            return me
        }), n.d(e, "_89", function() {
            return ge
        }), n.d(e, "_88", function() {
            return _e
        }), n.d(e, "p", function() {
            return ve
        }), n.d(e, "s", function() {
            return be
        }), n.d(e, "T", function() {
            return he
        }), n.d(e, "U", function() {
            return ye
        }), n.d(e, "V", function() {
            return ke
        }), n.d(e, "t", function() {
            return we
        }), n.d(e, "_45", function() {
            return Se
        }), n.d(e, "_39", function() {
            return Te
        }), n.d(e, "_40", function() {
            return Le
        }), n.d(e, "_38", function() {
            return Ee
        }), n.d(e, "_31", function() {
            return xe
        }), n.d(e, "_33", function() {
            return Oe
        }), n.d(e, "_35", function() {
            return Ie
        }), n.d(e, "_37", function() {
            return Ae
        }), n.d(e, "_34", function() {
            return qe
        }), n.d(e, "_36", function() {
            return Ce
        }), n.d(e, "_30", function() {
            return Ne
        }), n.d(e, "_32", function() {
            return Pe
        }), n.d(e, "_26", function() {
            return Me
        }), n.d(e, "O", function() {
            return De
        }), n.d(e, "P", function() {
            return Be
        }), n.d(e, "S", function() {
            return He
        }), n.d(e, "R", function() {
            return Re
        }), n.d(e, "_70", function() {
            return Ge
        }), n.d(e, "_54", function() {
            return Ue
        }), n.d(e, "_57", function() {
            return Fe
        }), n.d(e, "_29", function() {
            return je
        }), n.d(e, "_58", function() {
            return ze
        }), n.d(e, "_55", function() {
            return Ve
        }), n.d(e, "_59", function() {
            return Ke
        }), n.d(e, "_60", function() {
            return Qe
        }), n.d(e, "_53", function() {
            return Ye
        }), n.d(e, "_28", function() {
            return We
        }), n.d(e, "_56", function() {
            return $e
        }), n.d(e, "F", function() {
            return _
        }), n.d(e, "_25", function() {
            return v
        }), n.d(e, "h", function() {
            return h
        }), n.d(e, "Q", function() {
            return b
        });
        var d = n(11),
            p = n(5),
            f = n(3),
            m = n(29),
            g = n(0),
            _ = n.i(m.a)({
                headers: {
                    "Accept-Language": localStorage.lang && a(localStorage.lang)
                }
            }),
            v = n.i(m.a)({
                headers: {
                    "Accept-Language": localStorage.lang && a(localStorage.lang)
                }
            }),
            b = n.i(m.a)({
                headers: {
                    "Accept-Language": localStorage.lang && a(localStorage.lang)
                }
            }),
            h = n.i(m.a)({
                option: {
                    withCredentials: !0
                },
                headers: {
                    "Accept-Language": localStorage.lang && a(localStorage.lang)
                }
            }),
            y = function(t) {
                return i("{{base}}/account/accounts", "get", t)
            },
            k = function(t) {
                return i("{{base}}/account/accounts/{{account-id}}/balance", "get", t)
            },
            w = function(t) {
                return i("{{base}}/users/login", "post", t)
            },
            S = function(t) {
                return i("{{base}}/users/logout", "post", t)
            },
            T = function(t) {
                return i("{{base}}/users/user", "get", t)
            },
            L = function(t) {
                return i("{{base}}/users/token/verify", "post", t)
            },
            E = function(t) {
                return i("{{base}}/order/orders", "post", t)
            },
            x = function(t) {
                return i("{{base}}/order/orders/{{order-id}}/place", "post", t)
            },
            O = function(t) {
                return i("{{base}}/order/orders/{{order-id}}/submitcancel", "post", t)
            },
            I = function(t) {
                return i("{{base}}/order/orders/{{order-id}}/matchresults", "get", t)
            },
            A = function(t) {
                return i("{{base}}/order/orders/", "get", t)
            },
            q = function(t) {
                return i("{{base}}/order/matchresults/", "get", t)
            },
            C = function(t) {
                return i("{{base}}/query/finances/", "get", t)
            },
            N = function(t) {
                return i("{{base}}/dw/withdraw-virtual/{{withdraw-id}}/cancel", "post", t)
            },
            P = function(t) {
                return i("{{base}}/users/auth/check", "get", t)
            },
            M = function(t) {
                return i("{{HBBase}}/api/user_auth.php", "post", t)
            },
            D = function(t) {
                return i("{{HBBase}}/api/uc.php", "post", t)
            },
            B = function(t) {
                return i("{{HBBase}}/p/api/activity/pro/yd_time", "get", t)
            },
            H = function(t) {
                return i("{{HBBase}}/p/api/activity/pro/yd_join", "post", t)
            },
            R = function(t) {
                return i("{{base}}/common/exchange", "get", t)
            },
            G = function(t) {
                return i("{{base}}/dw/deposit-virtual/addresses", "get", t)
            },
            U = function(t) {
                return i("{{base}}/dw/deposit-virtual/sharedAddressWithTag", "get", t)
            },
            F = function(t) {
                return i("{{base}}/dw/withdraw-virtual/addresses", "get", t)
            },
            j = function(t) {
                return i("{{base}}/dw/withdraw-virtual/{{withdraw-id}}/place", "post", t)
            },
            z = function(t) {
                return i("{{base}}/dw/withdraw/create", "post", t)
            },
            V = function(t) {
                return i("{{base}}/dw/withdraw/addresses", "post", t)
            },
            K = function(t) {
                return i("{{base}}/dw/withdraw/check-amount", "get", t)
            },
            Q = function(t) {
                return i("{{base}}/dw/withdraw/check-limit", "post", t)
            },
            Y = function(t) {
                return i("{{base}}/query/dw/withdraw-virtual/limitdetails", "get", t)
            },
            W = function(t) {
                return i("{{base}}/dw/withdraw-virtual/fee", "get", t)
            },
            $ = function(t) {
                var e = t || {};
                e.withCredentials = !1, e.headers = {};
                return i("{{base}}/rate/usd_cny_rate", "get", e)
            },
            J = function(t) {
                return i("{{base}}/dw/withdraw-virtual/fee-range", "get", t)
            },
            Z = function(t) {
                return i("{{base}}/dw/withdraw/addresses/{{address-id}}/delete", "post", t)
            },
            X = function(t) {
                return i("{{base}}/dw/withdraw/audit-check", "get", t)
            },
            tt = function(t) {
                return i("{{base}}/dw/withdraw/verify-identity", "post", t)
            },
            et = function(t) {
                return i("{{base}}/settings/fee", "get", t)
            },
            nt = function(t) {
                return i("{{base}}/hadax/settings/currencys", "get", t)
            },
            at = function(t) {
                return i("{{base}}/hadax/settings/symbols", "get", t)
            },
            it = function(t) {
                return i("{{base}}/settings/currencys", "get", t)
            },
            ot = function(t) {
                return i("{{base}}/settings/symbols", "get", t)
            },
            rt = function(t) {
                return i("{{HBBase}}/p/api/contents/publicizeWidely", "get", t)
            },
            ct = function(t) {
                return i("{{HBBase}}/p/api/contents/pro/top_notice", "get", t)
            },
            st = function(t) {
                return i("{{HBBase}}/p/api/contents/pro/list_notice", "get", t)
            },
            ut = function(t) {
                return i("{{HBBase}}/p/api/contents/pro/notice/{{id}}", "get", t)
            },
            lt = function(t) {
                return i("{{HBBase}}/p/api/contents/pro/helps", "get", t)
            },
            dt = function(t) {
                return i("{{HBBase}}/p/api/contents/pro/help_get", "get", t)
            },
            pt = function(t) {
                return i("{{uc}}/uc/open/kv_store/get", "get", t)
            },
            ft = function(t) {
                return i("{{uc}}/uc/open/login", "post", t)
            },
            mt = function(t) {
                return i("{{uc}}/uc/open/ga/login", "post", t)
            },
            gt = function(t) {
                return i("{{uc}}/uc/open/risk/control", "post", t)
            },
            _t = function(t) {
                return i("{{uc}}/uc/open/risk/control", "post", t)
            },
            vt = function(t) {
                return i("{{uc}}/uc/open/logout", "get", t)
            },
            bt = function(t) {
                return i("{{uc}}/uc/open/ticket/get?ts=" + 1 * new Date, "get", t)
            },
            ht = function(t) {
                return i("{{uc}}/uc/open/register", "post", t)
            },
            yt = function(t) {
                return i("{{uc}}/uc/open/captcha_code/send", "get", t)
            },
            kt = function(t) {
                return i("{{uc}}/uc/open/sms_code/send", "post", t)
            },
            wt = function(t) {
                return i("{{uc}}/uc/open/email_code/send", "post", t)
            },
            St = function(t) {
                return i("{{uc}}/uc/open/country/list", "get", t)
            },
            Tt = function(t) {
                return i("{{uc}}/uc/open/security/get", "get", t)
            },
            Lt = function(t) {
                return i("{{uc}}/uc/open/security/strategy/verify", "post", t)
            },
            Et = function(t) {
                return i("{{uc}}/uc/open/security/strategy/get", "get", t)
            },
            xt = function(t) {
                return i("{{uc}}/uc/open/login_password/change", "post", t)
            },
            Ot = function(t) {
                return i("{{uc}}/uc/open/login_password/reset", "post", t)
            },
            It = function(t) {
                return i("{{uc}}/uc/open/2fa/login", "post", t)
            },
            At = function(t) {
                return i("{{uc}}/uc/open/login_password_reset/account_verify", "post", t)
            },
            qt = function(t) {
                return i("{{uc}}/uc/open/login_password_reset/security_verify", "post", t)
            },
            Ct = function(t) {
                return i("{{uc}}/uc/open/ga/generate", "get", t)
            },
            Nt = function(t) {
                return i("{{uc}}/uc/open/asset_ga/bind", "post", t)
            },
            Pt = function(t) {
                return i("{{uc}}/uc/open/license/agree", "post", t)
            },
            Mt = function(t) {
                return i("{{uc}}/uc/open/license/state", "get", t)
            },
            Dt = function(t) {
                return i("{{uc}}/uc/open/phone/bind", "post", t)
            },
            Bt = function(t) {
                return i("{{uc}}/uc/open/sms_code/verify", "post", t)
            },
            Ht = function(t) {
                return i("{{uc}}/uc/open/email_code/verify", "post", t)
            },
            Rt = function(t) {
                return i("{{uc}}/uc/open/email/bind", "post", t)
            },
            Gt = function(t) {
                return i("{{uc}}/uc/open/login_log/list", "get", t)
            },
            Ut = function(t) {
                return i("{{uc}}/uc/open/ga/generate_for_change", "get", t)
            },
            Ft = function(t) {
                return i("{{uc}}/uc/open/asset_ga/change", "post", t)
            },
            jt = function(t) {
                return i("{{uc}}/uc/open/ga_code/verify", "post", t)
            },
            zt = function(t) {
                return i("{{uc}}/uc/open/phone/rebind", "post", t)
            },
            Vt = function(t) {
                return i("{{uc}}/uc/open/operation_log/list", "get", t)
            },
            Kt = function(t) {
                return i("{{uc}}/uc/open/country_id/get", "get", t)
            },
            Qt = function(t) {
                return i("{{uc}}/uc/open/security/strategy/enable", "post", t)
            },
            Yt = function(t) {
                return i("{{uc}}/uc/open/security/strategy/disable", "post", t)
            },
            Wt = function(t) {
                return i("{{base}}/dw/transfer-in/fork", "post", t)
            },
            $t = function(t) {
                return i("{{base}}/dw/transfer-out/fork", "post", t)
            },
            Jt = function(t) {
                return i("{{uc}}/uc/open/trading_pair/add", "post", t)
            },
            Zt = function(t) {
                return i("{{uc}}/uc/open/trading_pair/cancel", "post", t)
            },
            Xt = function(t) {
                return i("{{uc}}/uc/open/trading_pair/list", "get", t)
            },
            te = function(t) {
                return i("{{uc}}/uc/open/user/get", "get", t)
            },
            ee = function(t) {
                return i("{{HBBase}}/p/api/contents/pro/single_page/{{id}}", "get", t)
            },
            ne = function(t) {
                return i("{{HBBase}}/p/api/app/last/version", "get", t)
            },
            ae = function(t) {
                return i("{{base}}/margin/orders", "post", t)
            },
            ie = function(t) {
                return i("{{base}}/margin/orders/{{order-id}}/repay", "post", t)
            },
            oe = function(t) {
                return i("{{base}}/margin/loan-orders", "get", t)
            },
            re = function(t) {
                return i("{{base}}/margin/accounts/balance", "get", t)
            },
            ce = function(t) {
                return i("{{base}}/dw/transfer-out/margin", "post", t)
            },
            se = function(t) {
                return i("{{base}}/dw/transfer-in/margin", "post", t)
            },
            ue = function(t) {
                return i("{{base}}/margin/settings", "get", t)
            },
            le = function(t) {
                return i("{{base}}/margin/symbols", "get", t)
            },
            de = function(t) {
                return i("{{base}}/margin/finances/", "get", t)
            },
            pe = function(t) {
                return i("{{HBBase}}/p/api/contents/pro/currency_introduction", "get", t)
            },
            fe = function(t) {
                return i("{{uc}}/uc/open/api_key/create", "post", t)
            },
            me = function(t) {
                return i("{{uc}}/uc/open/api_key/modify", "post", t)
            },
            ge = function(t) {
                return i("{{uc}}/uc/open/api_key/delete", "post", t)
            },
            _e = function(t) {
                return i("{{uc}}/uc/open/api_key/list", "get", t)
            },
            ve = function(t) {
                return i("{{base}}/member", "get", t)
            },
            be = function(t) {
                return i("{{base}}/member/levels", "get", t)
            },
            he = function(t) {
                return i("{{base}}/member/enroll", "post", t)
            },
            ye = function(t) {
                return i("{{base}}/member/renew", "post", t)
            },
            ke = function(t) {
                return i("{{base}}/member/upgrade", "post", t)
            },
            we = function(t) {
                return i("{{base}}/member/upgrade/calc-fee", "post", t)
            },
            Se = function(t) {
                return i("{{base}}/points/actions", "get", t)
            },
            Te = function(t) {
                return i("{{base}}/points/order/create", "post", t)
            },
            Le = function(t) {
                return i("{{base}}/points/order/{{order-id}}/place", "post", t)
            },
            Ee = function(t) {
                return i("{{base}}/points/pack/{{pack-id}}", "get", t)
            },
            xe = function(t) {
                return i("{{base}}/points/transfer/create", "post", t)
            },
            Oe = function(t) {
                return i("{{base}}/points/orders", "get", t)
            },
            Ie = function(t) {
                return i("{{base}}/points/order/{{order-id}}", "get", t)
            },
            Ae = function(t) {
                return i("{{base}}/points/transfer/{{transfer-id}}/reject", "post", t)
            },
            qe = function(t) {
                return i("{{base}}/points/transfer/{{transfer-id}}/cancel", "post", t)
            },
            Ce = function(t) {
                return i("{{base}}/points/transfer/{{transfer-id}}/accept", "post", t)
            },
            Ne = function(t) {
                return i("{{base}}/points/pack/list", "get", t)
            },
            Pe = function(t) {
                return i("{{base}}/points/transfer-in/count", "get", t)
            },
            Me = function(t) {
                return i("{{HBBase}}/p/api/activity/pro/myStory", "get", t)
            },
            De = function(t) {
                return i("{{vote}}/vote/open/vote/get", "get", t)
            },
            Be = function(t) {
                return i("{{vote}}/vote/open/vote/item/get", "get", t)
            },
            He = function(t) {
                return i("{{vote}}/vote/open/poll", "post", t)
            },
            Re = function(t) {
                return i("{{vote}}/vote/open/token/get", "get", t)
            },
            Ge = function(t) {
                return i("{{vote}}/vote/open/vote/item/get", "get", t)
            },
            Ue = function(t) {
                return i("{{uc}}/uc/open/invite/inviter/get", "get", t)
            },
            Fe = function(t) {
                return i("{{uc}}/uc/open/invite/invitee/list", "get", t)
            },
            je = function(t) {
                return i("{{uc}}/uc/open/invite/global_setting/get", "get", t)
            },
            ze = function(t) {
                return i("{{base}}/brokerage/orders", "get", t)
            },
            Ve = function(t) {
                return i("{{base}}/brokerage/sum", "get", t)
            },
            Ke = function(t) {
                return i("{{base}}/brokerage/export/request-id", "post", t)
            },
            Qe = function(t) {
                return i("{{base}}/brokerage/orders/export", "get", t)
            },
            Ye = function(t) {
                return i("{{uc}}/uc/open/invite/inviter/get_by_code", "get", t)
            },
            We = function(t) {
                return i("{{base}}/brokerage/rank", "post", t)
            },
            $e = function(t) {
                return i("{{HBBase}}/p/api/contents/invitePictures", "get", t)
            };
        _.interceptors.response.use(r), v.interceptors.response.use(c), h.interceptors.response.use(s), b.interceptors.response.use(u), _.interceptors.request.use(function(t) {
            return l("HB-PRO-TOKEN", _), ~t.url.indexOf("usd_cny_rate") && (t.headers = {}), t
        }), v.interceptors.request.use(function(t) {
            return l("HB-OLD-TOKEN", v), t
        }), h.interceptors.request.use(function(t) {
            return l("HB-UC-TOKEN", h), t
        }), b.interceptors.request.use(function(t) {
            return l("HB-VOTE-TOKEN", b), t
        }), l("HB-PRO-TOKEN", _), l("HB-OLD-TOKEN", v), l("HB-UC-TOKEN", h), l("HB-VOTE-TOKEN", b)
    },
    10: function(t, e, n) {
        "use strict";

        function a() {
            var t = i.symbolDataArr,
                e = i.symbolDataObj,
                n = {
                    overview: {},
                    depth: {},
                    trade: {},
                    marketSymbols: t
                },
                a = void 0;
            if (t)
                for (var o = 0; o < t.length; o++) a = t[o], n.overview[a] = {
                    ticker: {},
                    day: {},
                    symbol: [e[a]["base-currency"], e[a]["quote-currency"]],
                    rate: "",
                    direction: "",
                    oldPrice: ""
                }, n.depth[a] = {}, n.trade[a] = {};
            return n
        }
        var i = top.window.STORE || {
            market: {},
            userInfo: {},
            token: "",
            ticket: "",
            account: [],
            balance: {},
            marginBalance: {},
            marginBalanceTotal: null,
            useAccountId: 0,
            interceptor: !1,
            needTicket: !1,
            lang: localStorage.lang || "en_us",
            currencyReady: !1,
            currencyData: [],
            currencyDataObj: {},
            currencyDataArr: [],
            symbolReady: !1,
            symbolData: [],
            symbolDataObj: {},
            symbolDataArr: [],
            marginReady: !1,
            marginData: [],
            marginDataObj: {},
            marginDataArr: [],
            marginFlState: {
                "fl-sys": 1,
                "fl-mgt": 1,
                "fl-end": 1
            }
        };
        i.InitSymbol = function() {
            i.market = a()
        }, window.STORE = i, e.a = i
    },
    11: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i
        });
        var a = n(3),
            i = {
                __ready: n.i(a.c)("__ready"),
                __ajaxState: n.i(a.c)("__ajaxState"),
                __getUserInfo: n.i(a.c)("__getUserInfo"),
                __userLogin: n.i(a.c)("__userLogin"),
                __userLogout: n.i(a.c)("__userLogout"),
                __userIsLogin: n.i(a.c)("__userIsLogin"),
                __getImgCaptcha: n.i(a.c)("__getImgCaptcha"),
                __getUserLoginErrNum: n.i(a.c)("__getUserLoginErrNum"),
                __formLoginVerify: n.i(a.c)("__formLoginVerify"),
                __formRegisterVerify: n.i(a.c)("__formRegisterVerify"),
                __verifyToken: n.i(a.c)("__verifyToken"),
                __marketTicker: n.i(a.c)("__marketTicker"),
                __marketDay: n.i(a.c)("__marketDay"),
                __marketDepth: n.i(a.c)("__marketDepth"),
                __getNotice: n.i(a.c)("__getNotice"),
                __getUserAccount: n.i(a.c)("__getUserAccount"),
                __getUserBalance: n.i(a.c)("__getUserBalance"),
                __getUserMarginBalance: n.i(a.c)("__getUserMarginBalance"),
                __getEquivalent: n.i(a.c)("__getEquivalent"),
                __getAuthCheck: n.i(a.c)("__getAuthCheck"),
                __resInterceptors: n.i(a.c)("__resInterceptors"),
                __ucLoginControl: n.i(a.c)("__ucLoginControl"),
                __ucLogin: n.i(a.c)("__ucLogin"),
                __ucIsLogin: n.i(a.c)("__ucIsLogin"),
                __ucLogout: n.i(a.c)("__ucLogout", !0),
                __ucGetUserInfo: n.i(a.c)("__ucGetUserInfo"),
                __changeTheme: n.i(a.c)("__changeTheme"),
                __tickerSub: n.i(a.c)("__tickerSub"),
                __dayKlineSub: n.i(a.c)("__dayKlineSub"),
                __allSymbolTicker: n.i(a.c)("__allSymbolTicker"),
                __allSymbolDayKline: n.i(a.c)("__allSymbolDayKline"),
                __loginDisplayToggle: n.i(a.c)("__loginDisplayToggle"),
                __userRegister: n.i(a.c)("__userRegister")
            }
    },
    12: function(t, e, n) {
        "use strict";

        function a(t) {
            for (var e = {
                    trade: {},
                    frozen: {},
                    credit: {},
                    total: {}
                }, n = t, a = 0; a < n.length; a++) "trade" === n[a].type && (e.trade[n[a].currency] = n[a].balance, e.total[n[a].currency] = e.total[n[a].currency] || 0, e.total[n[a].currency] = 1 * e.total[n[a].currency] + 1 * n[a].balance), "frozen" === n[a].type && (e.frozen[n[a].currency] = n[a].balance, e.total[n[a].currency] = e.total[n[a].currency] || 0, e.total[n[a].currency] = 1 * e.total[n[a].currency] + 1 * n[a].balance), "credit" === n[a].type && (e.credit[n[a].currency] = n[a].balance);
            return e
        }

        function i(t) {
            function e(t) {
                var e = {};
                return t.forEach(function(t, n) {
                    e[t.type] = e[t.type] || {}, e[t.type][t.currency] = t.balance
                }), e
            }
            var n = t || [],
                a = {};
            return n.forEach(function(t, n) {
                a[t.symbol] = e(t.list), a[t.symbol]["risk-rate"] = t["risk-rate"], a[t.symbol]["fl-price"] = t["fl-price"], a[t.symbol]["fl-type"] = t["fl-type"], a[t.symbol].state = t.state
            }), a
        }

        function o(t) {
            g.a.balance = a(t.list), n.i(l.b)(d.a.__getUserBalance, g.a.balance)
        }

        function r(t) {
            var e = location.hostname;
            return t ? (e = location.hostname.split("."), e.shift(), e.join(".")) : e
        }

        function c(t) {
            var e = location.pathname,
                n = e.split("/"),
                a = t || localStorage.lang,
                i = location.search,
                o = location.hash,
                r = !0;
            return i = i ? i.replace(/\\/g, "") : "", p.a[n[1]] && (r = !1), a === p.b ? r || n.splice(1, 1) : r ? n.splice(1, 0, a) : n.splice(1, 1, a), localStorage.lang = t, n.join("/") + i + o
        }

        function s(t) {
            var e = location.pathname,
                n = location.search,
                a = e.split("/"),
                i = void 0;
            n = n ? n.replace(/\\/g, "") : "", i = a[1] === p.b ? "/login/" : p.a[a[1]] ? "/" + a[1] + "/login/" : "/login/", a.indexOf("login") < 0 && (t || !!a[1]) && function() {
                setTimeout(function() {
                    location.href = i + "?backUrl=" + e + n
                }, 50)
            }()
        }

        function u(t) {
            var e = "OTC_ACTION_" + t,
                n = f.i.get(e);
            return n ? (f.i.del(e, {
                domain: r(),
                path: "/"
            }), location.href = location.protocol + "//otc.huobi.pro/" + decodeURIComponent(n)) : null
        }
        n.d(e, "e", function() {
            return u
        }), n.d(e, "b", function() {
            return r
        }), n.d(e, "a", function() {
            return v
        }), n.d(e, "f", function() {
            return b
        }), n.d(e, "d", function() {
            return c
        }), n.d(e, "c", function() {
            return s
        });
        var l = n(3),
            d = n(11),
            p = n(5),
            f = n(0),
            m = (n(1), n(15)),
            g = n(10),
            _ = n(15),
            v = new m.a;
        v.Then = o, v.GetAccountThen = function(t) {
            var e = t.data;
            "ok" === e.status && (g.a.account = e.data, n.i(l.b)(d.a.__getUserAccount, e))
        };
        var b = new _.b;
        b.Then = function(t) {
            g.a.marginBalance = n.i(f.j)(g.a.marginBalance, i(t)), n.i(l.b)(d.a.__getUserMarginBalance, g.a.marginBalance)
        }
    },
    13: function(t, e, n) {
        "use strict";

        function a(t, e) {
            var a = 0,
                o = 0,
                r = n.i(i.q)(t),
                c = n.i(i.q)(e);
            if (!(1 * c)) return "0";
            ~r.indexOf(".") && (r = r.replace(/0+$/, "")), ~c.indexOf(".") && (c = c.replace(/0+$/, ""));
            try {
                a = r.toString().split(".")[1].length
            } catch (t) {
                console.log(t)
            }
            try {
                o = c.toString().split(".")[1].length
            } catch (t) {
                console.log(t)
            }
            return Number(r.toString().replace(".", "")) / Number(c.toString().replace(".", "")) * Math.pow(10, o - a)
        }
        n.d(e, "b", function() {
            return g
        }), n.d(e, "c", function() {
            return _
        }), n.d(e, "a", function() {
            return v
        }), n.d(e, "d", function() {
            return b
        });
        var i = n(0),
            o = function(t) {
                var e = {};
                return function() {
                    var n = Array.prototype.slice.call(arguments).toString();
                    return n in e ? e[n] : e[n] = t.apply(this, arguments)
                }
            },
            r = o(function(t, e) {
                return t.length < e ? r("0" + t, e) : t
            }),
            c = o(function(t, e) {
                return t.length < e ? c(t + "0", e) : t
            }),
            s = o(function(t) {
                return "0" === t.substr(0, 1) && "0." !== t.substr(0, 2) ? s(t.substr(1)) : t
            }),
            u = o(function(t) {
                return t.match(/[\.]$/) ? u(t.replace(/[\.]$/, "")) : t
            }),
            l = function(t, e) {
                var a = !1,
                    o = n.i(i.q)(t),
                    s = n.i(i.q)(e),
                    u = o.substr(0, 1).match(/^\D/) ? 1 : 0,
                    l = s.substr(0, 1).match(/^\D/) ? 1 : 0,
                    d = u ? o.substr(1).split(".") : o.split("."),
                    p = l ? s.substr(1).split(".") : s.split("."),
                    f = Math.max(d[0].length, p[0].length),
                    m = Math.max(d[1] ? d[1].length : 0, p[1] ? p[1].length : 0),
                    g = r(d[0], f),
                    _ = r(p[0], f);
                d[1] = d[1] ? d[1] : "", p[1] = p[1] ? p[1] : "";
                var v = d[1] || p[1] ? c(d[1], m) : "",
                    b = d[1] || p[1] ? c(p[1], m) : "";
                d = ("0" + g + v).split(""), p = ("0" + _ + b).split("");
                for (var h = d.length + 1; !a && h--;) {
                    var y = d.length - h;
                    if (d[y] - p[y] > 0) break;
                    a = d[y] - p[y] < 0
                }
                return a ? {
                    intMax: f,
                    floatMax: m,
                    needSwap: a,
                    arrA: p.reverse(),
                    arrB: d.reverse(),
                    symbol: parseInt(l + "" + u, 2)
                } : {
                    intMax: f,
                    floatMax: m,
                    needSwap: a,
                    arrA: d.reverse(),
                    arrB: p.reverse(),
                    symbol: parseInt(u + "" + l, 2)
                }
            },
            d = function(t, e) {
                switch (e) {
                    case 0:
                        if ("add" == t) return 0;
                        if ("sub" == t) return 0;
                        break;
                    case 1:
                    case 2:
                        if ("add" == t) return 1;
                        if ("sub" == t) return 0;
                        break;
                    case 3:
                        if ("add" == t) return 0;
                        if ("sub" == t) return 0
                }
            },
            p = function(t, e, a) {
                t = n.i(i.q)(t), e = n.i(i.q)(e);
                var a = a || l(t, e);
                if (d("add", a.symbol)) return f(t, e, a);
                var o = [0];
                return a.arrA.forEach(function(t, e) {
                    o[e] += 1 * t + 1 * a.arrB[e], o[e] > 9 ? (o[e] -= 10, o[e + 1] = 1) : o[e + 1] = 0
                }), o.splice(a.floatMax, 0, "."), o = u(s(o.reverse().toString().replace(/,/g, ""))), "." === o.replace(/0/g, "") ? "0" : (!a.needSwap && 2 == a.symbol || 3 == a.symbol ? "-" : "") + o
            },
            f = function(t, e, n) {
                var n = n || l(t, e);
                if (d("sub", n.symbol)) return p(t, e, n);
                var a = [0];
                return n.arrA.forEach(function(t, e) {
                    a[e] += 1 * t - 1 * n.arrB[e], a[e] < 0 ? (a[e] += 10, a[e + 1] = -1) : a[e + 1] = 0
                }), a.splice(n.floatMax, 0, "."), a = u(s(a.reverse().toString().replace(/,/g, ""))), "." === a.replace(/0/g, "") ? "0" : (n.symbol > 1 ? "-" : "") + a
            },
            m = function(t, e) {
                var n = n || l(t, e),
                    a = [0];
                return n.arrB.forEach(function(t, e) {
                    n.arrA.forEach(function(n, i) {
                        a[i + e] += n * t;
                        var o = Math.floor(a[i + e] / 10);
                        a[i + e] %= 10, a[i + e + 1] = a[i + e + 1] ? a[i + e + 1] + o : o
                    })
                }), a.splice(2 * n.floatMax, 0, "."), a = u(s(a.reverse().toString().replace(/,/g, ""))), (2 == n.symbol || 1 == n.symbol ? "-" : "") + a
            },
            g = (function() {
                function t() {
                    var t = [].slice.apply(arguments),
                        e = this,
                        n = t.shift();
                    return function() {
                        return n = e.apply(this, [n, t.shift()]), t.length ? arguments.callee.apply(this, arguments) : n
                    }()
                }

                function e() {
                    return t.apply(p, arguments)
                }

                function n() {
                    return t.apply(f, arguments)
                }

                function a() {
                    return t.apply(m, arguments)
                }
            }(), p),
            _ = f,
            v = m,
            b = a
    },
    136: function(t, e, n) {
        "use strict";

        function a(t, e) {
            if (t) {
                p = e;
                var u = d[t],
                    l = {
                        hiddenClose: 1,
                        hiddenFoot: 1,
                        block: "agreement",
                        agree: u.key
                    };
                return n.i(s.j)(l, u, {
                    lang: LANG.dialog
                }), n.i(r.r)({
                    params: {
                        type: u.key
                    }
                }).then(function(t) {
                    var e = t.data;
                    e.success && (e.data.state ? p && a(p) : (c.b.construct(l), c.b.open(i, o)))
                }), c.b
            }
        }

        function i(t) {
            var e = t.querySelector("div"),
                n = t.querySelector("div.dia_cont");
            !m && s.f.add(n, "scroll", function() {
                n.scrollTop > 0 ? n.parentNode.querySelector("div").style.display = "block" : n.parentNode.querySelector("div").style.display = "none"
            }), e.style.cssText = ";width:560px;height:auto;", e.querySelector(".dia_content").style.cssText = ";height:auto;max-height:none;overflow:hidden;", m = 1
        }

        function o(t, e, i) {
            var o = t.dialog.querySelector("div");
            if (!e.disabled) {
                var c = t.dialog.querySelector('[name="agree"]');
                if (i.dia_checkbox && !c.checked) return void f.Error(LANG.dialog["请勾选用户协议"], 1e3);
                n.i(r.q)({
                    data: {
                        type: i.agree
                    }
                }).then(function(e) {
                    e.data.success && (o.style.cssText = "", t.Close(), p && a(p))
                })
            }
        }
        var r = n(1),
            c = n(26),
            s = n(0),
            u = n(6),
            l = n(2),
            d = {
                PRO: {
                    key: "PRO",
                    value: "PRO",
                    title: "Pro站协议",
                    dia_content: "",
                    dia_button: "我已阅读并同意上述协议"
                },
                SEGWIT2X: {
                    key: "SEGWIT2X",
                    title: "SegWit2X分叉协议",
                    dia_content: "",
                    dia_button: "我已了解上述风险"
                },
                MARGIN: {
                    key: "MARGIN",
                    title: "杠杆交易协议",
                    dia_content: "P_dialog_agreement_margin",
                    dia_button: "我已阅读并同意上述协议"
                },
                MAIN_ZONE: {
                    key: "MAIN_ZONE",
                    title: "开通主区交易",
                    dia_content: "P_dialog_agreement_main",
                    dia_button: "同意开通",
                    dia_checkbox: "我已了解并自愿承担上述风险"
                },
                NEW_ZONE: {
                    key: "NEW_ZONE",
                    title: "开通创新区交易",
                    dia_content: "P_dialog_agreement_new",
                    dia_button: "同意开通",
                    dia_checkbox: "我已了解并自愿承担上述风险"
                },
                PRO_ZONE: {
                    key: "PRO_ZONE",
                    title: "开通专业区交易",
                    dia_content: "P_dialog_agreement_pro",
                    dia_button: "同意开通",
                    dia_checkbox: "我已了解并自愿承担上述风险"
                },
                FORK_ZONE: {
                    key: "FORK_ZONE",
                    title: "开通分叉区交易",
                    dia_content: "P_dialog_agreement_fork",
                    dia_button: "同意开通",
                    dia_checkbox: "我已了解并自愿承担上述风险"
                },
                PRO_POINT_TRANSFER: {
                    key: "PRO_POINT_TRANSFER",
                    title: "点卡转让规则",
                    dia_content: "P_dialog_agreement_point_transfer",
                    dia_button: "确定",
                    dia_checkbox: "我已阅读并同意上述协议"
                },
                VIP: {
                    key: "VIP",
                    title: "VIP服务协议",
                    dia_content: "P_vip_agreement",
                    dia_button: "确定",
                    dia_checkbox: "我已阅读并同意上述协议"
                },
                HT: {
                    key: "HT",
                    title: "提示",
                    dia_content: "P_dialog_agreement_ht",
                    dia_button: "我已了解并自愿承担上述风险"
                },
                VOTE_HT: {
                    key: "VOTE_HT",
                    title: "HADAX投票功能使用协议",
                    dia_content: "P_dialog_agreement_vote_ht",
                    dia_checkbox: "我已阅读并同意上述协议",
                    dia_button: "确定"
                }
            },
            p = void 0,
            f = (new u.a, new l.a),
            m = void 0;
        e.a = a
    },
    15: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = this;
            return e.type = t || "spot", e.apiAccount = "", e.apiBalance = "", e.GetAccount = function(t) {
                n.i(o.c)().then(function(n) {
                    e.GetAccountThen && e.GetAccountThen(n);
                    var a = n.data;
                    "ok" === a.status && (e.accounts = a, t && t(a))
                })
            }, e.GetBalance = function(t) {
                var a = t && "string" == typeof t ? t : e.type,
                    i = e.accounts.data.filter(function(t) {
                        return t.type === a
                    });
                i[0] && n.i(o.d)({
                    path: {
                        "account-id": i[0].id
                    }
                }).then(function(t) {
                    var n = t.data;
                    "ok" === n.status && e.Then && e.Then(n.data)
                })
            }, e.Get = function(t) {
                e.accounts ? e.GetBalance(t) : e.GetAccount(function() {
                    e.GetBalance(t)
                })
            }, e
        }

        function i() {
            var t = this;
            t.Get = function(e) {
                n.i(o.e)({
                    params: {
                        symbol: e
                    }
                }).then(function(e) {
                    var n = e.data;
                    "ok" === n.status && t.Then && t.Then(n.data)
                })
            }
        }
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return i
        });
        var o = n(1)
    },
    16: function(t, e) {},
    161: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = this;
            e.wrap = t, e.ele = new c.b(n.i(s.d)(r.a, u)), e.pageNow = 0, e.prevPage = 0, e.nextPage = 0, e.setDelay = 0, e.delayState = !0, e.delay = function() {
                e.setDelay && e.delayState && (e.delayState = !1, setTimeout(function() {
                    e.delayState = !0
                }, e.setDelay))
            }, e.loadState = function(t) {
                e.isLoad = !!t
            }, e.Init = function(t, a) {
                e.wrap = t || e.wrap, e.wrap.appendChild(e.ele), s.f.add(e.ele, "click", function(t) {
                    if (e.delayState && !e.isLoad) {
                        e.delay();
                        var i = s.f.target(t),
                            o = n.i(s.g)(i, "data-direction"),
                            r = void 0;
                        o = o && o.node, o && (r = o.getAttribute("data-direction"), e.Stop || ("next" === r ? e.pageNow++ : e.pageNow--), e.direction = r, e.View(), o && e.Then && e.Then(r, e.pageNow), o && a && a(r, e.pageNow))
                    }
                }), e.btns = e.ele.getElementsByTagName("button"), e.prevBtn = e.btns[0], e.nextBtn = e.btns[1], e.View()
            }, e.Set = function(t) {
                var n = t || {};
                e.pageNow = void 0 !== n.pageNow ? n.pageNow : e.pageNow, e.prevPage = void 0 !== n.prvePage ? n.prvePage : e.prevPage, e.nextPage = void 0 !== n.nextPage ? n.nextPage : e.nextPage
            }, e.View = function() {
                e.pageNow || e.prevPage ? e.BtnView("prev", "inline-block") : e.BtnView("prev", "none"), e.nextPage ? e.BtnView("next", "inline-block") : e.BtnView("next", "none")
            }, e.BtnView = function(t, n) {
                e[t + "Btn"] && (e[t + "Btn"].style.display = n)
            }
        }
        var i = n(186),
            o = (n.n(i), n(190)),
            r = n.n(o),
            c = n(9),
            s = n(0),
            u = {
                lang: n.i(s.j)({
                    prev: "prev",
                    next: "next"
                }, window.LANG.pagination)
            };
        e.a = a
    },
    17: function(t, e, n) {
        "use strict";

        function a() {
            function t(t) {
                components = t
            }
            var e = this,
                n = "input" == e.nodeName.toLowerCase() ? e.parentNode.parentNode.querySelector(".pro_warning") : e.parentNode.querySelector(".error_notice");
            if (n) return e.timer = null, e.focusTimer = null, e.error = function(t, n) {
                return void c.Show(e, t)
            }, o.f.add(e, "focus", function() {
                e.timer && clearTimeout(e.timer), e.timer = null, e.clear(), e.autocheckVal()
            }), e.clear = function(t) {
                c.Hide()
            }, o.f.add(e, "blur", function() {
                e.focusTimer && clearTimeout(e.focusTimer), e.focusTimer = null, c.Hide()
            }), o.f.add(window, "scroll", function() {
                c.Hide()
            }), e.autocheckVal = function() {
                e.focusTimer && clearTimeout(e.focusTimer), e.focusTimer = null, e.focusTimer = setTimeout(e.autocheckVal, 100)
            }, t
        }

        function i(t) {
            for (var e = {}, n = {}, a = t.length; a--;) t[a].getAttribute("pro_name") && ("text" == t[a].type || "password" == t[a].type || "hidden" == t[a].type ? (e[t[a].getAttribute("pro_name")] = t[a].value, n[t[a].getAttribute("pro_name")] = t[a]) : 1 == t[a].checked ? (e[t[a].getAttribute("pro_name")] = t[a].value, n[t[a].getAttribute("pro_name")] = t[a]) : "radio" === t[a].type && "checkbox" === t[a].type || (n[t[a].getAttribute("pro_name")] = t[a]));
            return {
                data: e,
                dom: n
            }
        }
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return i
        });
        var o = n(0),
            r = n(6),
            c = new r.a
    },
    173: function(t, e, n) {
        "use strict";

        function a() {
            var t;
            return "margin" === TRADE_TYPE ? t = STORE.marginBalance["account-id"] : STORE.account.forEach(function(e) {
                "spot" === e.type && (t = e.id)
            }), t
        }

        function i(t) {
            S.buyMarketPrecision = t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), n.d(e, "setBuyMarketPrecision", function() {
            return i
        }), n.d(e, "QueryOrderList", function() {
            return A
        }), n.d(e, "QueryHistoryOrderList", function() {
            return q
        }), n.d(e, "QueryResultsList", function() {
            return C
        }), n.d(e, "getListData", function() {
            return N
        });
        var o = n(162),
            r = n.n(o),
            c = n(75),
            s = n.n(c),
            u = n(14),
            l = n.n(u),
            d = (n(71), n(0)),
            p = n(1),
            f = n(13),
            m = n(9),
            g = n(2),
            _ = n(72),
            v = n.n(_),
            b = location.pathname.indexOf("transac") > -1,
            h = new m.a,
            y = new g.a,
            k = window.PAGE_QUOTE || "",
            w = window.PAGE_COIN || "",
            S = {
                openOrders: {
                    page: 0,
                    md5: "",
                    screen: "",
                    states: "submitted,partial-filled",
                    type: "openOrders",
                    id: "open_orders_body",
                    list: "open_orders_list"
                },
                orderHistory: {
                    page: 0,
                    md5: "",
                    screen: "",
                    states: "partial-canceled,filled,canceled",
                    type: "orderHistory",
                    id: "order_history_body",
                    list: "order_history_list"
                },
                tradeHistory: {
                    page: 0,
                    md5: "",
                    screen: "",
                    states: "",
                    type: "tradeHistory",
                    id: "trade_history_body",
                    list: "trade_history_list"
                }
            },
            T = {},
            L = function(t) {
                return v()(t + "hello, moto")
            },
            E = function(t, e) {
                T.symbol = t.symbol || "", T.size = t.size || 11, T.from = t.from || "", T.direct = t.direct || "", T.quote = t.quote || "", T.coin = t.coin || "", S[e].screen = t.types || "";
                var a = {
                    symbol: T.symbol,
                    size: T.size,
                    states: S[e].states,
                    from: T.from,
                    direct: T.direct,
                    types: S[e].screen,
                    quote: T.quote,
                    coin: T.coin
                };
                b && (a["start-date"] = n.i(d.c)(+new Date - 15552e6, "y-m-d"), a["end-date"] = n.i(d.c)(+new Date, "y-m-d"));
                for (var i in a) "" == a[i] && delete a[i];
                return a
            },
            x = function(t) {
                return t.getBoundingClientRect().top + (document.body.scrollTop || document.documentElement.scrollTop)
            },
            O = function(t) {
                var e = "openOrders" == t ? "open_orders" : "order_history",
                    n = h.querySelector("." + e);
                n && (document.documentElement.scrollTop = x(n), document.body.scrollTop = x(n))
            },
            I = function(t, e) {
                var a = t.data,
                    i = a.data,
                    o = {},
                    c = T.size,
                    u = [],
                    p = l()(i),
                    m = L(p),
                    g = function(t) {
                        if (h.getElementById(S[e].id)) {
                            var n = h.getElementById(S[e].id),
                                a = n.querySelector(".l_transac_list"),
                                i = n.querySelector(".l_paging"),
                                o = i && i.querySelector("ul"),
                                r = n.querySelector(".J_list_prompt_search"),
                                c = n.querySelector(".J_list_prompt");
                            if (n.parentNode.querySelector(".loading").style.display = "none", T.search && (a.style.display = "none", o && (o.style.display = "none")), r && (r.style.display = "none"), c && (c.style.display = "none"), 0 == t.length) return void(T.search ? r.style.display = "block" : c.style.display = "block");
                            a.style.display = "block", o && (o.style.display = "block")
                        }
                    };
                if (S[e].md5 == m) return void g(i);
                if ("ok" === a.status) {
                    var _ = i.length < c ? i.length : i.length - 1,
                        v = i.length && i[0].id,
                        y = i.length && i.length >= c && i[_].id;
                    STORE.quoteList = s()(STORE.symbolDataObj).reduce(function(t, e) {
                        var n = e["quote-currency"];
                        return !t.includes(n) && t.push(n), t
                    }, []);
                    for (var k = 0; k < _; k++) {
                        var w = i[k].symbol,
                            E = top.window.SYMBOLDATA.accuracy[w],
                            x = E ? 1 * E.fee : 8,
                            O = E ? 1 * E.amount : 8,
                            I = E ? 1 * E.price : 8,
                            A = E ? 1 * E.total : 8,
                            q = {
                                id: i[k].id,
                                data: n.i(d.c)(i[k]["created-at"]),
                                pairs: top.window.SYMBOLDATA[w] || function(t) {
                                    var e = !0,
                                        n = !1,
                                        a = void 0;
                                    try {
                                        for (var i, o = r()(STORE.quoteList); !(e = (i = o.next()).done); e = !0) {
                                            var c = i.value;
                                            if (t.endsWith(c)) return t.replace(c, "/" + c).toUpperCase()
                                        }
                                    } catch (t) {
                                        n = !0, a = t
                                    } finally {
                                        try {
                                            !e && o.return && o.return()
                                        } finally {
                                            if (n) throw a
                                        }
                                    }
                                    return t.toUpperCase()
                                }(w),
                                source: i[k].source,
                                tradeType: i[k].source.indexOf("margin") >= 0 || i[k].source.indexOf("fl") >= 0 ? "margin" : "spot",
                                type: i[k].type.indexOf("buy") >= 0 ? {
                                    class: "up",
                                    value: "BUY"
                                } : {
                                    class: "down",
                                    value: "SELL"
                                },
                                price: n.i(d.b)(i[k].price, I),
                                market: 0
                            };
                        "openOrders" != e && "orderHistory" != e || (q.amount = n.i(d.b)(i[k].amount, O), q.total = n.i(d.b)(n.i(f.a)(i[k].price, i[k].amount), A), q.executed = n.i(d.b)(i[k]["field-amount"], O), q.unexecuted = n.i(d.b)(n.i(f.c)(i[k].amount, i[k]["field-amount"]), O)), "openOrders" == e && ("buy-market" == i[k].type && (q.price = "市价"), "buy-market" == i[k].type && (q.amount = "---"), "buy-market" == i[k].type && (q.market = 1), "buy-market" == i[k].type && (q.total = n.i(d.b)(i[k].amount, S.buyMarketPrecision)), "buy-market" == i[k].type && (q.unexecuted = n.i(d.b)(n.i(f.c)(i[k].amount, i[k]["field-amount"]), S.buyMarketPrecision)), "sell-market" == i[k].type && (q.price = "市价"), "sell-market" == i[k].type && (q.total = "---"), "sell-market" == i[k].type && (q.market = 1)), "orderHistory" == e && (q.unexecuted = n.i(d.b)(i[k]["field-amount"], O), q.averageprice = n.i(d.b)(n.i(f.d)(n.i(d.b)(i[k]["field-cash-amount"], 15), n.i(d.b)(i[k]["field-amount"], 15)), I), q.status = i[k].state, "buy-market" != i[k].type && "sell-market" != i[k].type || (q.price = "市价"), "buy-market" == i[k].type && (q.amount = n.i(d.b)(i[k].amount, I))), "tradeHistory" == e && (q.amount = n.i(d.b)(i[k]["filled-amount"], O), q.total = n.i(d.b)(n.i(f.a)(i[k].price, i[k]["filled-amount"]), A), q.fee = n.i(d.b)(i[k]["filled-fees"], x), q.points = n.i(d.b)(i[k]["filled-points"], 8), "buy-market" == i[k].type && (q.amount = n.i(d.b)(i[k]["filled-amount"], I))), u.push(q)
                    }
                    T.direct ? "next" == T.direct ? S[e].page++ : --S[e].page <= 0 && (S[e].page = 0) : S[e].page = 0, S[e].page, S[e].md5 = L(p), o = {
                        prev: v,
                        next: y,
                        active: S[e].page,
                        data: u,
                        quote: T.quote,
                        coin: T.coin,
                        seeMore: !b
                    }, document.getElementById(S[e].id).innerHTML = n.i(d.d)(S[e].list, o), g(u)
                } else g([])
            },
            A = function t(e) {
                var i = S.openOrders.type,
                    o = E(e, i);
                if ("margin" === TRADE_TYPE && !STORE.marginBalance["account-id"] || "exchange" === TRADE_TYPE && !STORE.account.length) return setTimeout(function() {
                    t(e)
                }, 200);
                "transac" !== window.PAGE_NAME && (o["account-id"] = a()), n.i(p._20)({
                    params: o
                }).then(function(t) {
                    I(t, i)
                })
            },
            q = function t(e) {
                var i = S.orderHistory.type,
                    o = E(e, i);
                if ("margin" === TRADE_TYPE && !STORE.marginBalance["account-id"] || "exchange" === TRADE_TYPE && !STORE.account.length) return setTimeout(function() {
                    t(e)
                }, 200);
                "transac" !== window.PAGE_NAME && (o["account-id"] = a()), n.i(p._20)({
                    params: o
                }).then(function(t) {
                    I(t, i)
                })
            },
            C = function t(e) {
                var i = S.tradeHistory.type,
                    o = E(e, i);
                if ("margin" === TRADE_TYPE && !STORE.marginBalance["account-id"] || "exchange" === TRADE_TYPE && !STORE.account.length) return setTimeout(function() {
                    t(e)
                }, 200);
                "transac" !== window.PAGE_NAME && (o["account-id"] = a()), n.i(p._21)({
                    params: o
                }).then(function(t) {
                    I(t, i)
                })
            },
            N = function(t) {
                A(t), q(t), C(t), T = t
            },
            P = function(t) {
                n.i(p._22)({
                    path: {
                        "order-id": t
                    }
                }).then(function(t) {
                    var e = t.data,
                        a = null;
                    if ("ok" === e.status) {
                        var i = n.i(d.g)(h.getElementById("open_orders_body").querySelectorAll(".btn_cancel")[0], "data-id"),
                            o = i && i.attr;
                        y.Show(window.LANG.dialog["撤单申请成功"], 1500), clearTimeout(a), a = setTimeout(function() {
                            clearTimeout(a), A({
                                symbol: T.symbol,
                                size: T.size,
                                types: S.openOrders.screen,
                                from: o,
                                quote: k,
                                coin: w
                            })
                        }, 2e3)
                    } else y.Error(e["err-msg"], 3e3)
                })
            },
            M = function(t, e, a) {
                var i = t.attr,
                    o = e.attr;
                n.i(p._23)({
                    path: {
                        "order-id": i
                    }
                }).then(function(t) {
                    var e = t.data,
                        i = e.data,
                        r = [];
                    if ("ok" === e.status) {
                        for (var c = 0, s = i.length; c < s; c++) {
                            var u = i[c].symbol,
                                l = top.window.SYMBOLDATA.accuracy[u],
                                p = l ? 1 * l.fee : 8,
                                m = l ? 1 * l.amount : 8,
                                g = l ? 1 * l.price : 8,
                                _ = l ? 1 * l.total : 8,
                                v = {
                                    id: i[c].id,
                                    data: n.i(d.c)(i[c]["created-at"]),
                                    price: n.i(d.b)(i[c].price, g),
                                    amount: n.i(d.b)(i[c]["filled-amount"], m),
                                    total: n.i(d.b)(n.i(f.a)(i[c].price, i[c]["filled-amount"]), _),
                                    fee: n.i(d.b)(i[c]["filled-fees"], p),
                                    points: n.i(d.b)(i[c]["filled-points"], 8),
                                    feetype: o ? i[c].type.indexOf("buy") >= 0 ? o.split("/")[0] : o.split("/")[1] : ""
                                };
                            r.push(v)
                        }
                        "function" == typeof a && a(r)
                    } else y.Error(e["err-msg"], 3e3)
                })
            },
            D = function(t, e) {
                var a = d.f.target(t),
                    i = n.i(d.g)(a, "data-drop-down"),
                    o = n.i(d.w)(a, "div"),
                    r = (h.getElementById(e).querySelectorAll(".l_drop_down_box"), o.querySelector(".l_drop_down_box")),
                    c = o.querySelector(".l_drop_down_list"),
                    s = c.offsetHeight;
                i && (r.offsetHeight ? r.style.height = "0px" : (r.style.height = s + "px", r.querySelector(".drop_down_scroll").scrollTop = 0))
            },
            B = function(t, e) {
                var a = n.i(d.g)(t, "data-page-id"),
                    i = n.i(d.g)(t, "data-page-type"),
                    o = this.querySelector(".loading"),
                    r = {
                        symbol: T.symbol,
                        size: T.size,
                        types: S[e].screen,
                        from: a && a.attr,
                        direct: i && i.attr,
                        quote: k,
                        coin: w
                    };
                a && a.attr && (o.style.display = "block", "openOrders" == e && A(r), "orderHistory" == e && q(r), "tradeHistory" == e && C(r), O(e))
            };
        h.Ready(function() {
            top.window.PAGECONFIG = S, h.getElementById("open_orders") && d.f.add(h.getElementById("open_orders"), "click", function(t) {
                var e = d.f.target(t),
                    a = n.i(d.g)(e, "data-id"),
                    i = a && a.attr;
                i && P(i), B.call(this, e, S.openOrders.type)
            }), h.getElementById("order_history") && d.f.add(h.getElementById("order_history"), "click", function(t) {
                var e = d.f.target(t),
                    a = n.i(d.g)(e, "data-drop-down"),
                    i = n.i(d.g)(e, "data-drop-pair"),
                    o = n.i(d.w)(e, "div"),
                    r = o.querySelector(".drop_down_body"),
                    c = (h.getElementById("order_history").querySelectorAll(".l_tr"), void 0);
                a && a.attr && (c = a.node.querySelector("span"), !d.k.hasClass(o, "z_active") && (c.style.display = "block"), M(a, i, function(e) {
                    for (var n = "", a = 0, i = e.length; a < i; a++) {
                        var s = "";
                        1 * e[a].fee && (s += e[a].fee + " " + e[a].feetype), 1 * e[a].points && (s += '<span class="pts">' + e[a].points + " pts</span>"), n += '<div class="drop_down_tr_hover"><ul class="drop_down_tr"><li>' + e[a].data + "</li><li>" + e[a].price + "</li><li>" + e[a].amount + "</li><li>" + e[a].total + "</li><li>" + s + "</li></ul></div>"
                    }
                    r.innerHTML = n, c.style.display = "none", d.k.hasClass(o, "z_active") ? d.k.removeClass(o, "z_active") : d.k.addClass(o, "z_active"), D(t, "order_history")
                })), B.call(this, e, S.orderHistory.type)
            }), h.getElementById("trade_history") && d.f.add(h.getElementById("trade_history"), "click", function(t) {
                var e = d.f.target(t);
                B.call(this, e, S.tradeHistory.type)
            })
        })
    },
    186: function(t, e) {},
    19: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = this,
                n = t || {},
                a = n.tryVoice;
            return i.a.call(e, t), e.tryVoice = a, e.btn = n.button, e.btnText = n.btnText || [], e.retryNum = 0, e.api = n.api || e.api, e.Callback = function(t) {
                e.btn && (t <= 0 ? (e.btn.disabled = !1, t < 0 && (e.retryNum = e.retryNum > e.tryVoice ? 0 : e.retryNum, e.btn.innerHTML = e.tryVoice && e.retryNum >= e.tryVoice ? e.btnText[3] : e.btnText[2], e.isVoice = e.tryVoice && e.retryNum >= e.tryVoice, e.ResetCallback && e.ResetCallback())) : e.btn.innerHTML = e.btnText[1].replace("$", t))
            }, e.Send = function(t) {
                if (e.count < e.countTime) return void console.log("正在获取中请稍后..");
                e.ToSend(t), e.btn.disabled = !0
            }, e.ToSend = function(t) {
                void 0 === t.voice && (t.voice = e.tryVoice && e.retryNum >= e.tryVoice), e.postData = t || {};
                var n = {
                    data: e.postData
                };
                e.api(n).then(function(t) {
                    var n = t.data;
                    if (e.Then && e.Then(t), "ok" !== n.status && !n.success) return e.Reset();
                    e.retryNum++, e.RemainTime()
                })
            }, e.fire = function() {
                e.RemainTime()
            }, e.trySMS = function(t) {
                t.voice = !1, e.Send(t)
            }, e.tryAudio = function(t) {
                t.voice = !0, e.Send(t)
            }, this
        }
        var i = n(35);
        e.a = a
    },
    190: function(t, e) {
        t.exports = '<div class="pagination">\n    <button data-direction="prev"><%=lang[\'prev\']%></button>\n    <button data-direction="next"><%=lang[\'next\']%></button>\n</div>'
    },
    2: function(t, e, n) {
        "use strict";

        function a() {
            var t = this;
            t.isInit = !1, t.Show = function(e, n, a) {
                t.isInit || t.CreateBox(), t.contentIn.innerHTML = e, t.AutoHide(n);
                var i = a || "ok";
                t.contentIcon.className = "ok" === i ? "hb_icon_toast_success" : "hb_icon_toast_failed"
            }, t.Error = function(e, n) {
                t.Show(e, n, "error")
            }, t.Hide = function() {
                t.toastBox && (t.toastBox.remove ? t.toastBox.remove() : t.toastBox.parentNode.removeChild(t.toastBox), t.isInit = !1)
            }, t.CreateBox = function() {
                var e = document.body;
                t.toastBox = document.createElement("div"), t.toastContent = document.createElement("div"), t.contentIn = document.createElement("p"), t.contentIcon = document.createElement("i"), t.toastBox.className = "com_toast", t.toastContent.className = "toast_content", t.toastContent.appendChild(t.contentIcon), t.toastContent.appendChild(t.contentIn), t.toastBox.appendChild(t.toastContent), e.appendChild(t.toastBox), t.InitEvent(), t.isInit = !0
            }, t.AutoHide = function(e) {
                t.autoHide && clearTimeout(t.autoHide), t.autoHide = setTimeout(function() {
                    t.Hide()
                }, e || 5e3)
            }, t.InitEvent = function() {
                t.toastBox.onclick = function(e) {
                    "toast_close" === e.target.className && t.Hide()
                }
            }
        }
        n.d(e, "a", function() {
            return a
        });
        var i = n(30);
        n.n(i)
    },
    20: function(t, e, n) {
        t.exports = n.p + "assets/fonts/loading.svg"
    },
    21: function(t, e, n) {
        "use strict";

        function a() {
            var t = this;
            return t.NC = window.noCaptcha && new window.noCaptcha, t.Init = function(e) {
                var n = e || {};
                n.token = e.token || [n.appkey, (new Date).getTime(), Math.random()].join(":"), n.language = s.langMap[localStorage.lang] || "en", n.foreign = "cn" !== s.langMap[localStorage.lang], t.option = n, t.NC.init(n), t.inited = 1
            }, t.Reload = function(e) {
                t.option && (e && (t.option.token = e), t.Init(t.option))
            }, t
        }

        function i() {
            if (window.noCaptcha) return new a;
            var t = document.getElementsByTagName("script")[0],
                e = document.createElement("script");
            return e.async = !0, e.src = s.script, t.parentNode.insertBefore(e, t), new r.a(function(t) {
                e.onload = function() {
                    t(new a)
                }
            })
        }
        var o = n(74),
            r = n.n(o),
            c = n(37),
            s = (n.n(c), {
                langMap: {
                    "zh-cn": "cn",
                    "zh-hk": "tw",
                    "en-us": "en",
                    "ja-jp": "ja_JP",
                    "ko-kr": "ko_KR",
                    "ru-ru": "ru_RU",
                    "fr-fr": "fr_FR",
                    "es-es": "es_ES",
                    "de-de": "de_DE",
                    "th-th": "th_TH",
                    "vi-vi": "vi_VN",
                    "tr-tr": "tr_TR"
                },
                script: "//aeis.alicdn.com/sd/ncpc/nc.js?v=180323"
            });
        e.a = i
    },
    219: function(t, e, n) {
        "use strict";

        function a() {
            function t(t, e) {
                var n, a, i, o = t,
                    r = 0,
                    c = 0;
                if (t.nodeName) {
                    for (; o && ("body" == o.nodeName.toLowerCase() && (a = 1), i = o.currentStyle ? o.currentStyle : document.defaultView.getComputedStyle(o), r += o.offsetLeft + (parseInt(i.borderLeftWidth) ? parseInt(i.borderLeftWidth) : 0) - (a ? 0 : o.scrollLeft), c += o.offsetTop + (parseInt(i.borderTopWidth) ? parseInt(i.borderTopWidth) : 0) - (a ? 0 : o.scrollTop), n = o.offsetParent ? o.offsetParent : o, o = o.offsetParent, !(e & e === o)););
                    return {
                        x: r,
                        y: c,
                        element: o,
                        forefather: e || n
                    }
                }
            }

            function e(t, e, n) {
                (document.addEventListener ? function(a, i, o) {
                    t.addEventListener(e, n, !1)
                } : function(a, i, o) {
                    t.attachEvent("on" + e, n)
                })(t, e, n)
            }

            function n(t) {
                t && t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : (window.event.cancelBubble = !0, window.event.returnValue = !1)
            }

            function a(t) {
                return {
                    x: t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                    y: t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
                }
            }

            function i(t, e) {
                O[t] = e
            }

            function o(t) {
                delete O[t]
            }

            function r(t, e) {
                if (t < 0 && (t = 0), t > 100 && (t = 100), x !== t) {
                    x = t, u(t);
                    for (var n in O) "function" == typeof O[n] && O[n](t, e)
                }
            }

            function c(t, e) {
                r(t, e || "data")
            }

            function s(t) {
                r(100 * t / L, "event")
            }

            function u(t, e) {
                e && g(), v.style.left = t * L / 100 - (E ? 0 : y / 2) + "px", v.x = ~~(t * L / 100)
            }

            function l() {
                setTimeout(function() {
                    w = 0
                }, 20)
            }

            function d(t) {
                k = 1, S = a(t).x, T = v.x, g()
            }

            function p(t) {
                f(t, 1), k = 0
            }

            function f(t, e) {
                k && (n(t), w && !e || (w = 1, l(), s(T + a(t).x - S)))
            }

            function m(e) {
                var n = a(e).x,
                    i = t(b).x;
                g(), s(n - i - (E ? y : 0) / 2)
            }

            function g() {
                y = v.offsetWidth, L = b.offsetWidth - (E ? y : 0)
            }

            function _(t, n) {
                h = "string" == typeof t ? document.querySelector("#" + t.replace("#", "")) : t, v = document.createElement("i"), b = document.createElement("i"), v.className = "drag_bar", b.className = "drag_track", h.appendChild(v), h.appendChild(b), E = n, y = v.offsetWidth, L = b.offsetWidth - (E ? y : 0), e(v, "mousedown", d), e(b, "click", m), e(document, "mousemove", f), e(document, "mouseup", p), c(0)
            }
            var v, b, h, y, k, w, S, T, L, E, x, O = {};
            return {
                bindCallback: i,
                unbindCallback: o,
                redrag: c,
                init: _,
                setInit: g,
                resetPos: u
            }
        }
        e.a = a
    },
    22: function(t, e, n) {
        "use strict";

        function a(t, e) {
            var n = localStorage.getItem(t + "HuobiProList");
            n = n ? JSON.parse(n) : [], g.a[t + "Ready"] = 1, g.a[t + "DataObj"] = {}, g.a[t + "DataArr"] = [], n.forEach(function(n) {
                "symbol" == e && (n[e] = n["base-currency"] + n["quote-currency"]), g.a[t + "DataArr"].push(n[e]), g.a[t + "DataObj"][n[e].toLowerCase()] = n
            }), g.a[t + "Data"] = n
        }

        function i(t, e) {
            t && (e && e.checked ? setTimeout(function() {
                i(t, e)
            }, 100) : t())
        }

        function o() {
            g.a.symbolReady && g.a.marginReady && g.a.marginDataArr.forEach(function(t) {
                g.a.symbolDataObj[t]
            })
        }

        function r() {}
        var c = n(14),
            s = n.n(c),
            u = n(8),
            l = n.n(u),
            d = n(7),
            p = n.n(d),
            f = n(76),
            m = (n.n(f), n(1)),
            g = n(10),
            _ = function() {
                var t = p()(l.a.mark(function t(e) {
                    var n;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = !!localStorage.getItem("symbolHuobiProList")) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 4, k(m.H, "symbol");
                            case 4:
                                a("symbol", "symbol"), g.a.InitSymbol(), o(), n && i(function() {
                                    k(m.H, "symbol")
                                }, e);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            v = function() {
                var t = p()(l.a.mark(function t(e) {
                    var n;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = !!localStorage.getItem("hadaxSymbolHuobiProList")) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 4, k(m.I, "hadaxSymbol");
                            case 4:
                                a("hadaxSymbol", "symbol"), g.a.InitSymbol(), o(), n && i(function() {
                                    k(m.I, "hadaxSymbol")
                                }, e);
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            b = function() {
                var t = p()(l.a.mark(function t(e) {
                    var n;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = !!localStorage.getItem("marginHuobiProList")) {
                                    t.next = 4;
                                    break
                                }
                                return t.next = 4, k(m.J, "margin");
                            case 4:
                                a("margin", "symbol"), o(), n && i(function() {
                                    k(m.J, "margin")
                                }, e);
                            case 7:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            h = function() {
                var t = p()(l.a.mark(function t(e) {
                    var n, o, r;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = (localStorage.getItem("lang") || "en-us").replace("_", "-"), o = !!localStorage.getItem("hadaxCurrencyHuobiProList"), r = {
                                        params: {}
                                    }, n = n.split("-"), r.params.language = n[0] + "-" + (n[1] || n[0]).toUpperCase(), o) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 8, k(m.K, "hadaxCurrency", r);
                            case 8:
                                a("hadaxCurrency", "name"), o && i(function() {
                                    k(m.K, "hadaxCurrency", r)
                                }, e);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            y = function() {
                var t = p()(l.a.mark(function t(e) {
                    var n, o, r;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = (localStorage.getItem("lang") || "en-us").replace("_", "-"), o = !!localStorage.getItem("currencyHuobiProList"), r = {
                                        params: {}
                                    }, n = n.split("-"), r.params.language = n[0] + "-" + (n[1] || n[0]).toUpperCase(), o) {
                                    t.next = 8;
                                    break
                                }
                                return t.next = 8, k(m.L, "currency", r);
                            case 8:
                                a("currency", "name"), o && i(function() {
                                    k(m.L, "currency", r)
                                }, e);
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            k = function() {
                var t = p()(l.a.mark(function t(e, n, a) {
                    var i, o, r, c;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return i = !!localStorage.getItem(n + "HuobiProList"), t.next = 3, e(a || {});
                            case 3:
                                if (o = t.sent, r = o.data, c = void 0 === r ? {} : r, c.data) {
                                    t.next = 8;
                                    break
                                }
                                return t.abrupt("return", setTimeout(function() {
                                    k(e, n, a)
                                }, 5e3));
                            case 8:
                                return c.data.sort(function(t, e) {
                                    return 1 * e.weight - 1 * t.weight
                                }), localStorage.setItem(n + "HuobiProList", s()(c.data)), t.abrupt("return", c);
                            case 11:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e, n, a) {
                    return t.apply(this, arguments)
                }
            }();
        e.a = {
            hadaxSymbols: v,
            hadaxCurrencyinfo: h,
            symbols: _,
            currencyinfo: y,
            margin: b,
            cuff: r
        }
    },
    220: function(t, e, n) {
        "use strict";

        function a(t) {
            function e() {
                for (var t = void 0, e = void 0, n = 0; n < p; n++) t = document.createElement("i"), t.className = "point", e = 100 / (p - 1) * n, l && n === p - 1 ? t.style.right = 0 : (t.style.left = e + "%", t.style.transform = "translateX(" + -e + "%)"), t.setAttribute("data-point", e), m.push(t), r.appendChild(t)
            }

            function a(t, e) {
                t && (t.appendChild(r), e || (d.init(r, 1), u.f.add(window, "resize", function(t) {
                    d.resetPos(d.num, !0)
                }), u.f.add(r, "click", function(t) {
                    var e = u.f.target(t),
                        a = n.i(u.g)(e, "data-point");
                    a && d.redrag(a.attr, "point_event")
                }), u.f.add(r, "keyup", function(t) {
                    switch (t.which) {
                        case 37:
                            d.num--, d.redrag(d.num, "keyup");
                            break;
                        case 39:
                            d.num++, d.redrag(d.num, "keyup");
                            break;
                        default:
                            return
                    }
                })))
            }
            var i = t || {},
                r = new s.b(c.a),
                l = !0,
                d = n.i(o.a)(),
                p = i.point || 5,
                f = r.querySelector(".progress"),
                m = [];
            return d.bindCallback("fn1", function(t, e) {
                    var n = t / (100 / (p - 1));
                    n = n > p - 1 ? p - 1 : n, f.style.width = t + "%", d.num = t, 1 * t ? u.k.addClass(r, "focus") : u.k.removeClass(r, "focus"), m.forEach(function(t, e) {
                        m[e].className = e <= n ? "point cur" : "point"
                    })
                }),
                function() {
                    l || u.k.addClass(r, "overflew"), i.class && u.k.addClass(r, i.class), e()
                }(), {
                    Drag: d,
                    Init: a,
                    Then: d.bindCallback
                }
        }
        var i = n(272),
            o = (n.n(i), n(219)),
            r = n(279),
            c = n.n(r),
            s = n(9),
            u = n(0);
        e.a = a
    },
    221: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = this,
                a = t || {};
            e.api = a.api, e.renderId = a.renderId, e.Pagination = {}, e.DomState = {}, e.Toast = {}, e.apiOption = {}, e.isLoad = !1, e.getSize = 0, c.a.call(e.Pagination), s.a.call(e.DomState), u.a.call(e.Toast), e.Get = function(t, a) {
                e.apiOption = t, e.getSize = t.size, e.getSize += 1, e.isLoad = !0, e.Pagination.loadState(!0), e.api({
                    params: o()({}, t, {
                        size: e.getSize
                    })
                }).then(function(i) {
                    var o = i.data,
                        c = o.data,
                        s = void 0;
                    e.Then && e.Then(i), "ok" === o.status ? (s = c.length, e.data = c, s ? (e.dataId = [c[0].id, c[s - 1].id], s < t.size ? e.Pagination.Set({
                        nextPage: 0
                    }) : e.Pagination.Set({
                        nextPage: 1
                    })) : e.Pagination.Set({
                        nextPage: 0,
                        prevPage: 0
                    }), e.Pagination.View(), c.splice(t.size, s), e.DomState.Ready(function() {
                        e.Pagination.wrap.style.display = s ? "block" : "none", n.i(r.e)(e.renderId, c)
                    }), a && a(c)) : e.Toast.Error(o["err-msg"]), e.isLoad = !1, e.Pagination.loadState(!1)
                })
            }, e.Reset = function() {
                e.apiOption && (delete e.apiOption.from, delete e.apiOption.direct, delete e.apiOption.pageNow), e.Pagination.Set({
                    pageNow: 0
                })
            }, e.DomState.Ready(function() {
                e.pagination = a.page && e.Pagination.Init(document.querySelector(a.page), function(t, n) {
                    e.apiOption.direct = t, e.apiOption.pageNow = n, e.apiOption.from = "prev" === t ? e.dataId[0] : e.dataId[1], e.isLoad || e.Get(e.apiOption)
                }), e.Pagination.Set({
                    nextPage: 0,
                    prevPage: 0
                })
            })
        }
        var i = n(27),
            o = n.n(i),
            r = n(0),
            c = n(161),
            s = n(9),
            u = n(2);
        e.a = a
    },
    225: function(t, e, n) {
        "use strict";
        var a = n(281),
            i = n.n(a),
            o = n(273),
            r = (n.n(o), n(9)),
            c = n(0),
            s = n(5),
            u = n(12),
            l = new r.a,
            d = {
                mgtLang: s.a,
                userLang: localStorage.lang.toLowerCase() || s.b,
                browserLang: n.i(c.A)()
            };
        l.Ready(function() {
            l.selectLang = new r.b(n.i(c.d)(i.a, d), "select_lang"), l.selectLangDT = l.selectLang.querySelector("dt"), l.selectLangDD = l.selectLang.querySelector("dd"), c.f.add(l.selectLang, "click", function(t) {
                var e = c.f.target(t),
                    a = n.i(c.w)(e, "p");
                n.i(c.w)(e, "dt") && (c.k.hasClass(l.selectLang, "open") ? c.k.removeClass(l.selectLang, "open") : c.k.addClass(l.selectLang, "open")), a && (l.selectLangDT.innerHTML = a.innerHTML, l.selectLangDD.style.display = "none", location.href = n.i(u.d)(a.getAttribute("data-lang").toLowerCase()))
            }), c.f.add(l.selectLang, "blur", function() {
                c.k.removeClass(l.selectLang, "open")
            })
        })
    },
    24: function(t, e, n) {
        "use strict";

        function a(t) {
            L.a.uc_token = t.data.uc_token, L.a.ticket = t.data.ticket, w.h.defaults.headers.common["HB-UC-TOKEN"] = L.a.uc_token, y.i.set({
                name: "HB-UC-TOKEN",
                value: L.a.uc_token,
                domain: n.i(S.b)(),
                path: "/"
            }), n.i(w.f)().then(function(t) {
                var e = t.data;
                e.success ? u(e.data.ticket) : (I.Error(e.message, 5e3), setTimeout(function() {
                    10096 === e.code && (location.href = "/user_center/uc_set_ga/"), 10098 === e.code && (location.href = "/user_center/uc_open_ga/")
                }, 3e3))
            })
        }

        function i(t, e) {
            return n.i(w.i)({
                data: t
            }).then(function(t) {
                var i = t.data;
                return i.success ? a(i) : e && e(), n.i(b.b)(h.a.__ucLogin, i), i
            })
        }

        function o(t) {
            return n.i(w.j)({
                data: t
            }).then(function(t) {
                var e = t.data;
                return e.success && (e.isGa = !0, a(e)), n.i(b.b)(h.a.__ucLogin, e), e
            })
        }

        function r(t, e) {
            var a = n.i(y.m)("backUrl") || n.i(y.m)("backurl");
            n.i(T.a)(t, {}, "callback", function(t) {
                C && console.log("hbSSO back"), l(a)
            })
        }

        function c() {
            var t = 0;
            n.i(w.l)().then(function(e) {
                var a = e.data;
                n.i(T.a)(k.c.huobi + "/p/user/uc_logout", {}, "callback", function(e) {
                    (t += 1) >= 2 && n.i(b.b)(h.a.__ucLogout, a)
                }), n.i(w.m)().then(function(e) {
                    var a = e.data;
                    if ((t += 1) >= 2) return n.i(b.b)(h.a.__ucLogout, a);
                    setTimeout(function() {
                        n.i(b.b)(h.a.__ucLogout, a)
                    }, q)
                })
            })
        }

        function s(t) {
            var e = decodeURIComponent(t) || "",
                n = void 0,
                a = void 0,
                i = ["www.huobi.com", "www.hadax.com", "huobiapps.com"];
            return ~e.indexOf("http") && (n = e.replace("http://", "").replace("https://", ""), a = n.split("/")[0].split("."), a.shift(), ~i.indexOf(n.split("/")[0]) || ~i.indexOf(a.join("."))) ? location.protocol + "//" + n : (e = e.replace("http://", "").replace("https://", ""), "/" + (e = e.replace(/^\/+/, "").replace(/\\/g, "")))
        }

        function u(t, e, a) {
            var i = n.i(y.m)("backUrl") || n.i(y.m)("backurl");
            n.i(w.n)({
                data: {
                    ticket: t
                }
            }).then(function(t) {
                var a = t.data;
                "ok" === a.status && (y.i.set({
                    name: "HB-PRO-TOKEN",
                    value: a.data.token,
                    domain: n.i(S.b)(),
                    path: "/"
                }), setTimeout(function() {
                    l(i, e), C && console.log("proLogin back")
                }, A ? q : 1e3))
            })
        }

        function l(t, e) {
            null === n.i(S.e)("login") && setTimeout(function() {
                location.href = e || (t ? s(t) : "/")
            }, 600)
        }

        function d() {
            n.i(w.o)().then(function(t) {
                var e = t.data;
                e.success && (L.a.userInfo = e.data), n.i(b.b)(h.a.__ucGetUserInfo, e)
            })
        }

        function p() {
            function t(t) {
                var e = n.i(S.b)(t);
                y.i.del("AUTHTOKEN", {
                    domain: e,
                    path: "/"
                }), y.i.del("HBP_AGREE", {
                    domain: e,
                    path: "/"
                }), y.i.del("HB-PRO-TOKEN", {
                    domain: e,
                    path: "/"
                }), y.i.del("HB-OLD-TOKEN", {
                    domain: e,
                    path: "/"
                }), y.i.del("HB-UC-TOKEN", {
                    domain: e,
                    path: "/"
                }), y.i.del("HB-VOTE-TOKEN", {
                    domain: e,
                    path: "/"
                })
            }
            t(), t(1), L.a.needTicket = "", L.a.token = "", L.a.uc_token = "", localStorage.removeItem("huobi_pro_eyes")
        }

        function f() {
            for (var t = ["login", "reg", "bindmail", "bindga", "bindmobile", "resetpwd", "modifypwd"], e = t.length; e--;) y.i.del("OTC_ACTION_" + t[e], {
                domain: n.i(S.b)(),
                path: "/"
            })
        }
        n.d(e, "j", function() {
            return a
        }), n.d(e, "e", function() {
            return f
        }), n.d(e, "h", function() {
            return i
        }), n.d(e, "i", function() {
            return o
        }), n.d(e, "g", function() {
            return r
        }), n.d(e, "d", function() {
            return c
        }), n.d(e, "b", function() {
            return d
        }), n.d(e, "f", function() {
            return O
        }), n.d(e, "a", function() {
            return p
        });
        var m = n(8),
            g = n.n(m),
            _ = n(7),
            v = n.n(_),
            b = n(3),
            h = n(11),
            y = n(0),
            k = n(5),
            w = n(1),
            S = n(12),
            T = n(31),
            L = n(10),
            E = n(2);
        n.d(e, "c", function() {
            return w.p
        });
        var x = function() {
                var t = v()(g.a.mark(function t(e, a) {
                    return g.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", n.i(w.f)().then(function(t) {
                                    var n = t.data;
                                    n.success && u(n.data.ticket, e, a)
                                }));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e, n) {
                    return t.apply(this, arguments)
                }
            }(),
            O = function() {
                var t = v()(g.a.mark(function t(e) {
                    var a, i, o;
                    return g.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (a = y.i.get("HB-PRO-TOKEN"), i = y.i.get("HB-UC-TOKEN"), o = !!a, L.a.needTicket = e, L.a.isLikeLogin = !!a, L.a.token = a, L.a.uc_token = i, !o) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 8, n.i(w.g)().then(function(t) {
                                    var e = t.data;
                                    (o = "ok" === e.status) || console.warn("tokenVerify:", e)
                                });
                            case 8:
                                if (!e || o) {
                                    t.next = 10;
                                    break
                                }
                                return t.abrupt("return", x(location.href, "renewal"));
                            case 10:
                                t.next = 13;
                                break;
                            case 12:
                                x(location.href, "renewal");
                            case 13:
                                n.i(b.b)(h.a.__userIsLogin, o), n.i(b.b)(h.a.__ucIsLogin, i);
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }(),
            I = new E.a,
            A = n.i(y.m)("hb_sso"),
            q = 6e3,
            C = localStorage.deBug
    },
    25: function(t, e, n) {
        "use strict";
        var a = n(53),
            i = (n.n(a), n(62)),
            o = n.n(i),
            r = n(4),
            c = n(0),
            s = n(5),
            u = n(1),
            l = n(19),
            d = n(2),
            p = n(17),
            f = n.i(c.n)(),
            m = n.i(c.o)(o.a),
            g = void 0,
            _ = void 0,
            v = {
                btc: "/index.php?a=btc_",
                ltc: "/index.php?a=ltc_"
            },
            b = new d.a,
            h = void 0,
            y = void 0,
            k = void 0,
            w = new l.a({
                tryVoice: 3,
                countTime: 60,
                api: u.A
            }),
            S = new l.a({
                countTime: 60,
                api: u.B
            });
        e.a = function() {
            function t(t, e) {
                return A = e, t && t(g.dialog), g.Open(), g
            }

            function e(t) {
                return g && g.Close(t), g
            }

            function a(t) {
                var e = t.block || "loading",
                    a = {
                        PHONE: "关闭手机验证后24小时内禁止提币。",
                        EMAIL: "关闭邮箱验证后24小时内禁止提币。",
                        GA: "关闭谷歌验证器验证后24小时内禁止提币。"
                    };
                L = t, f._keys(t.lang), h = null, k = 0;
                var l = {
                    lang: f.getLang,
                    item: L.item,
                    currency: t.currency,
                    page: {
                        title: f.getLang(t.title),
                        titleMore: "disable" == L.action ? f.getLang(a[L.itemkey]) : ""
                    },
                    huobifinance: v[t.currency] ? s.c.main + "/" + e.replace("gohuobi", "") + v[t.currency] + e.replace("gohuobi", "") : s.c.main + "/finance/innovate/",
                    btn: !!t.btn && (1 == t.btn ? {
                        submit: f.getLang("确定")
                    } : {
                        cancel: f.getLang("取消"),
                        submit: f.getLang("确定")
                    }),
                    option: t
                };
                return g = g || new r.a({
                    html: n.i(c.d)(n.i(r.b)(m.html).html, l)
                }), _ && (g.dialog.innerHTML = n.i(c.d)(n.i(r.b)(m.html).fc, l)), I = g.dialog.querySelector("#dia_close"), I.style.display = L.hiddenClose ? "none" : "", C = g.dialog.querySelector(".dia_submit"), C.style.display = L.hiddenFoot ? "none" : "", g.dialog.querySelector('[block="content"]').innerHTML = n.i(c.d)(m.block[e], L.content || l), !_ && !L.stopEvent && c.f.add(g.dialog, "click", i), g.callback(u), _ = 1, E = n.i(c.u)(g.dialog.querySelectorAll("input")).concat(n.i(c.u)(g.dialog.querySelectorAll("button"))), E.forEach(function(t) {
                    "pro_dia_address_amount" === t.getAttribute("pro_name") && (c.f.add(t, "keydown", function() {
                        g.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[L.currency]["show-precision"])
                    }), c.f.add(t, "keyup", function() {
                        g.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[L.currency]["show-precision"])
                    })), n.i(c.h)(p.a, t)
                }), q = g.dialog.querySelector("#agreeAgt"), !y && n.i(c.t)(o), g
            }

            function i(t) {
                var e = c.f.target(t),
                    a = n.i(c.g)(e, "action");
                n.i(c.g)(e, "stop") && c.f.stop(t), a && T[a.attr] && T[a.attr](a.node, e, g.dialog)
            }

            function o() {
                q && (q.parentNode.parentNode.querySelector("button").disabled = !q.checked)
            }

            function u(t) {
                var a = {};
                if (!k) {
                    if ("submit" == t.type) {
                        if (h = n.i(p.b)(E), !x && h.dom.sms_code) return h.dom.sms_code.error(f.getLang("请先获取短信验证码"));
                        if (!h.data.sms_code && h.dom.sms_code) return h.dom.sms_code.error(f.getLang("短信验证码没有填写"));
                        if (!O && h.dom.email_code) return h.dom.email_code.error(f.getLang("请先获取邮箱验证码"));
                        if (!h.data.email_code && h.dom.email_code) return h.dom.email_code.error(f.getLang("请输入邮箱验证码"));
                        if (!h.data.ga_code && h.dom.ga_code) return h.dom.ga_code.error(f.getLang("谷歌验证码没有填写"));
                        h.data.sms_code && (a.sms_code = h.data.sms_code), h.data.ga_code && (a.ga_code = h.data.ga_code), h.data.email_code && (a.email_code = h.data.email_code), k = 1, L.success && L.success(a, g, function(t) {
                            k = 0, t || (x = 0, O = 0, e())
                        })
                    }
                    "close" == t.type && (w.Reset(), S.Reset())
                }
            }

            function l() {
                var t = this;
                t.udesk = d, t.close = e, t.btn_submit = function(t) {
                    A && A(g, t, L)
                }, t.getSms = function(t) {
                    var e = !!t.dataset.voice;
                    w.btn = g.dialog.querySelector('[act="sms_btn_wrap"]'), w.btnText = ['<a href="" action="getSms" stop="1">' + f.getLang("点击获取") + "</a>", "<span>$" + f.getLang("秒后重试") + "</span>", '<a href="" action="getSms" stop="1">' + f.getLang("重新获取") + "</a>", '<a href="" action="getSms" stop="1">' + f.getLang("重新获取") + "</a> " + f.getLang("或者试试") + ' <a href="" action="getSms" stop="1" data-voice="1">' + f.getLang("语音验证码") + "</a>"], w.Send({
                        use_type: "VERIFY_SETTING_POLICY",
                        voice: e
                    })
                }, t.getEmail = function(t) {
                    S.btn = g.dialog.querySelector('[act="email_btn_wrap"]'), S.btnText = ['<a href="" action="getEmail" stop="1">' + f.getLang("点击获取") + "</a>", "<span>$" + f.getLang("秒后重试") + "</span>", '<a href="" action="getEmail" stop="1">' + f.getLang("重新获取") + "</a>", '<a href="" action="getEmail" stop="1">' + f.getLang("重新获取") + "</a>"], S.Send({
                        use_type: "VERIFY_SETTING_POLICY"
                    })
                }, S.Then = function(t) {
                    var e = t.data;
                    e.success ? (O = 1, h && h.dom.email_code.clear()) : b.Error(e.message)
                }, w.Then = function(t) {
                    var e = t.data;
                    e.success ? (x = 1, h && h.dom.sms_code.clear()) : b.Error(e.message)
                }
            }

            function d() {
                var t = window.screenTop + (window.outerHeight - 500 - 51) / 2,
                    e = window.screenLeft + (window.outerWidth - 520) / 2,
                    n = "width=520,height=500,top=" + t + ",left=" + e;
                window.open("http: //huobi.udesk.cn/im_client?cur_url=" + encodeURIComponent(location.href) + "&pre_url=" + encodeURIComponent(document.referrer), "udesk_im", n)
            }
            var T = {},
                L = void 0,
                E = void 0,
                x = void 0,
                O = void 0,
                I = void 0,
                A = void 0,
                q = void 0,
                C = void 0;
            return n.i(c.h)(l, T), {
                open: t,
                close: e,
                construct: a
            }
        }()
    },
    26: function(t, e, n) {
        "use strict";

        function a(t, e) {
            e(), U.construct(t), U.open()
        }

        function i(t, e, n) {
            e(), t.goback = n, O.a.construct(t), O.a.open(e)
        }

        function o(t, e) {
            x.a.construct(t), x.a.open(e)
        }

        function r(t, e) {
            L.a.construct(t), L.a.open(e)
        }

        function c(t, e) {
            T.a.construct(t), T.a.open(e)
        }

        function s(t, e) {
            I.a.construct(t), I.a.open(e)
        }

        function u(t, e) {
            t.title = O.a.title(t.currency, G), t.action = "add_address", e && delete t.next, t.callback = function(t, n, a) {
                "pass" == t && i(n, a, "function" == typeof e && e)
            }, t.lang = G, E.a.construct(t), E.a.open()
        }

        function l(t) {
            t.title = L.a.title(t.currency, G), t.action = t.action || "withdraw", t.next = r, t.lang = G, E.a.construct(t), E.a.open()
        }

        function d(t) {
            t.title = T.a.title(t, G), t.action = "marginTransfer", t.next = c, t.lang = G, t.currencys = H, E.a.construct(t), E.a.open()
        }

        function p(t) {
            t.title = I.a.title(t.currency, G), t.action = "repay", t.next = s, t.lang = G, t.currencys = H, E.a.construct(t), E.a.open()
        }

        function f(t) {
            t.title = x.a.title(t.currency, G), t.action = "conver", t.next = o, t.lang = G, t.currencys = H, t.currency_obj = R, t.currencyData = H, E.a.construct(t), E.a.open()
        }

        function m(t) {
            t.title = t.title, t.action = t.action, t.block = t.block, t.next = a, t.lang = G, E.a.construct(t), E.a.open()
        }

        function g(t) {
            t.title = "提升额度", t.action = "withdraw_big", t.lang = G, t.currency_obj = R, t.currencyData = H, E.a.construct(t), E.a.open()
        }

        function _(t, e) {
            P.a.construct(t), P.a.open(e)
        }

        function v(t) {
            t.title = P.a.title(G), t.action = "ht_confirm", t.next = _, t.lang = G, E.a.construct(t), E.a.open()
        }

        function b(t, e) {
            M.a.construct(t), M.a.open(e)
        }

        function h(t) {
            t.title = M.a.title(G, t.block || "big_price"), t.action = "ht_confirm", t.next = b, t.lang = G, t.block = t.block || "big_price", E.a.construct(t), E.a.open()
        }

        function y(t, e) {
            D.a.construct(t), D.a.open(e)
        }

        function k(t) {
            t.block = t.block || "big_price", t.title = D.a.title(G, t.block), t.action = t.action || "vip", t.next = y, t.lang = G, E.a.construct(t), E.a.open()
        }

        function w(t, e) {
            B.a.construct(t), B.a.open(e)
        }

        function S(t) {
            t.title = B.a.title(G, t.block), t.action = t.action || "vote", t.next = w, t.lang = G, E.a.construct(t), E.a.open()
        }
        n.d(e, "i", function() {
            return d
        }), n.d(e, "c", function() {
            return l
        }), n.d(e, "a", function() {
            return u
        }), n.d(e, "l", function() {
            return f
        }), n.d(e, "b", function() {
            return U
        }), n.d(e, "e", function() {
            return m
        }), n.d(e, "k", function() {
            return g
        }), n.d(e, "j", function() {
            return p
        }), n.d(e, "h", function() {
            return v
        }), n.d(e, "g", function() {
            return h
        }), n.d(e, "f", function() {
            return k
        }), n.d(e, "d", function() {
            return S
        });
        var T = n(47),
            L = n(40),
            E = n(46),
            x = n(41),
            O = n(39),
            I = n(44),
            A = n(0),
            q = n(3),
            C = n(10),
            N = n(25),
            P = n(42),
            M = n(43),
            D = n(48),
            B = n(49),
            H = [],
            R = {},
            G = n.i(A.j)(window.LANG.dialog),
            U = function() {
                function t(t) {
                    n.i(A.j)(t.lang, G), N.a.construct(t)
                }

                function e(t, e) {
                    N.a.open(t, e)
                }

                function a() {
                    N.a.close()
                }
                return {
                    construct: t,
                    open: e,
                    close: a
                }
            }();
        n.i(q.a)("__ready", function(t) {
            var e = C.a.currencyData;
            C.a.symbolData;
            e.forEach(function(t) {
                H.push(t.name), R[t.name] = t
            })
        })
    },
    272: function(t, e) {},
    273: function(t, e) {},
    277: function(t, e) {},
    279: function(t, e) {
        t.exports = '<div class="range" tabindex="0">\n    <div class="progress"></div>\n    <div class="path"></div>\n</div>'
    },
    281: function(t, e) {
        t.exports = "<dl class=\"select_lang\" tabindex=\"0\">\n    <dt><span><%=__data['mgtLang'][__data['userLang']]%></span></dt>\n    <dd>\n        <%\n        for(var i in __data['mgtLang']){\n        %>\n        <p data-lang=\"<%= i %>\">\n            <%=__data['mgtLang'][i]%>\n        </p>\n        <%\n        }\n        %>\n    </dd>\n</dl>"
    },
    29: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = t || {},
                n = u.a.create(e.option || {});
            return function() {
                var t = this;
                this.setHeaders = function(e) {
                    var n = {};
                    c()(t.defaults.headers.common).forEach(function(e) {
                        n[e] = t.defaults.headers.common[e]
                    }), c()(e).forEach(function(t) {
                        e[t] && (n[t] = e[t])
                    }), o()(t.defaults, {
                        headers: {
                            common: n
                        }
                    })
                }, this.delHeaders = function(e) {
                    delete t.defaults.headers.common[e]
                }
            }.apply(n), n.setHeaders(t.headers || {}), n
        }
        var i = n(73),
            o = n.n(i),
            r = n(28),
            c = n.n(r),
            s = n(23),
            u = n.n(s);
        e.a = a
    },
    291: function(t, e, n) {
        "use strict";
        var a = n(28),
            i = n.n(a),
            o = function(t, e) {
                function n(t) {
                    var e = t || I.theme;
                    i()(O["hb-day"]).forEach(function(t) {
                        I[t] = O[e][t]
                    })
                }

                function a(t) {
                    var e = M.getBoundingClientRect();
                    return {
                        x: (t.clientX - e.left) * F,
                        y: (t.clientY - e.top) * F
                    }
                }

                function o(t, e) {
                    if ("bids" === e) {
                        var n = C.map(function(e) {
                            return Math.abs(e[0] - t)
                        });
                        return C[n.indexOf(Math.min.apply(null, n))][1]
                    }
                    var a = q.map(function(e) {
                        return Math.abs(e[0] - t)
                    });
                    return q[a.indexOf(Math.min.apply(null, a))][1]
                }

                function r(t, e, n) {
                    if (w(U), R = !1, t > W - F) return void(R = !0);
                    for (var a = G.getImageData(t, 0, 1, $ - 1 * F), i = 0; i < a.height; i++) {
                        var o = a.data[4 * i * a.width],
                            r = a.data[4 * i * a.width + 1];
                        if (o || r) return f(t, i, r < 120 ? "asks" : "bids"), void(R = !0)
                    }
                    R = !0
                }

                function c(t, e, n) {
                    return t = s(t, n), n && console.log("cutFixed", t), e ? u(t, e, n).join(".") : Math.floor(t)
                }

                function s(t, e) {
                    if (e && console.log("scientific2float", t), void 0 !== t) {
                        for (var n, a, i, o, r, c, s, u = "string" == typeof t ? t.toLowerCase().replace(/\s/g, "") : t.toString().toLowerCase().replace(/\s/g, ""), l = "", d = 0; d < 100; d++) l += "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
                        return /e/.test(u) ? (u.replace("+", ""), /e\-/.test(u) ? s = 1 : u.replace("e", "e+"), a = /\+/.test(u), i = u.split("e"), n = /\-/.test(i[0].toString()) ? "-0." : "0.", i[0] = s ? i[0].replace("-", "") : i[0], o = i[0].split(".")[1] ? i[0].split(".")[1].length : 0, r = i[1], c = r.split(a ? "+" : "-")[1], i = i[0].replace(".", ""), a ? i + l.substring(0, c - o) : n + l.substring(0, c - 1) + i) : u
                    }
                }

                function u(t, e, n) {
                    var a, t = 1 * t,
                        e = e || 0,
                        i = s(t).toString().split(".");
                    return i.length < 2 ? i[1] = Math.pow(10, e).toString().substring(1, e + 1) : (a = s(i[1]).toString().length, i[1] = (s(s(i[1]) / Math.pow(10, a)).toString() + "00000000000000").substring(2, e + 2)), i
                }

                function l(t, e, n) {
                    for (var a, i = n.length, o = [t, ""]; i--;)
                        if (a = Math.pow(e, i + 1), t / a > 1) {
                            o = [t / a, n[i], 1];
                            break
                        }
                    return o
                }

                function d(t, e, n, a, i) {
                    var o = {
                            1e3: ["K", "M", "B"],
                            1e4: ["万", "亿", "兆"]
                        },
                        e = e || 0,
                        r = 1 * t < 0 ? -1 : 1,
                        t = Math.abs(1 * t),
                        n = n || 1e4,
                        a = a || o[n],
                        s = l(t, n, a);
                    return s = i && 1 * (s[0] * r + s[1]) == s[0] * r * 1 ? s[0] * r : c(s[0] * r, e) + s[1]
                }

                function p(t, e, n) {
                    U.beginPath(), U.arc(t, e, 10 * F, 0, 2 * Math.PI), U.closePath(), U.fillStyle = I.dotColor.replace("1)", ".3)"), U.fill(), U.beginPath(), U.arc(t, e, 5 * F, 0, 2 * Math.PI), U.closePath(), U.fillStyle = I.dotColor, U.fill()
                }

                function f(t, e, n) {
                    CanvasRenderingContext2D.prototype.roundRect = function(t, e, n, a, i) {
                        var o = Math.min(n, a);
                        return i > o / 2 && (i = o / 2), this.beginPath(), this.moveTo(t + i, e), this.arcTo(t + n, e, t + n, e + a, i), this.arcTo(t + n, e + a, t, e + a, i), this.arcTo(t, e + a, t, e, i), this.arcTo(t, e, t + n, e, i), this.closePath(), this
                    };
                    var a = 150 * F,
                        i = 80 * F,
                        r = 18 * F;
                    U.shadowBlur = 4 * F, U.shadowOffsetY = 2 * F;
                    var c = t - a > U.shadowBlur ? t - a : U.shadowBlur,
                        s = e - i - r > U.shadowBlur ? e - i - r : e + r,
                        u = S(),
                        l = u.pTick * t + u.pMin,
                        d = o(l, n);
                    U.shadowColor = "rgba(0,0,0,.25)", U.fillStyle = I.bgColor, U.roundRect(c, s, a, i, 3 * F), U.fill(), U.shadowBlur = 0, U.shadowOffsetY = 0, U.fillStyle = I.tipColor, U.font = 12 * F + "px Arial", U.fillText(A[I.lang]["委托价"], c + 16 * F, s + 30 * F), U.fillText(l.toFixed(I.priceFix), c + 72 * F, s + 30 * F), U.fillText(A[I.lang]["累计"], c + 16 * F, s + 56 * F), U.fillText(d.toFixed(I.amountFix), c + 72 * F, s + 56 * F), p(t, e, n)
                }

                function m() {
                    G.strokeStyle = I.axisColor, G.lineWidth = ~~(1.5 * F), G.beginPath(), G.moveTo(y(0), y($)), G.lineTo(y(W), y($)), G.lineTo(y(W), y(0)), G.stroke(), G.closePath()
                }

                function g(t) {
                    var e = [],
                        n = [];
                    t.asks.forEach(function(t, n) {
                        var a = [];
                        a.push(t[0]), n - 1 > -1 ? a.push(1 * t[1] + 1 * e[n - 1][1]) : a.push(t[1]), e.push(a)
                    });
                    var a = e[e.length - 1] ? e[e.length - 1][1] : 0;
                    t.bids.forEach(function(t, e) {
                        var a = [];
                        a.push(t[0]), e - 1 > -1 ? a.push(1 * t[1] + 1 * n[e - 1][1]) : a.push(t[1]), n.push(a)
                    });
                    var i = n[n.length - 1] ? n[n.length - 1][1] : 0;
                    N = Math.max(i, a), q = e, C = n.reverse()
                }

                function _() {
                    G.strokeStyle = I.bidsLineColor, G.lineWidth = ~~(1.5 * F), G.beginPath();
                    for (var t = C.sort(function(t, e) {
                            return t[0] - e[0]
                        }), e = W / t.length / 2, n = 0; n < t.length; n++) 0 === n && G.moveTo(y(n * e), y(k(t[n][1]))), G.lineTo(y(n * e), y(k(t[n][1]))), n === t.length - 1 && G.lineTo(y(n * e), y($ - F));
                    G.stroke(), G.lineTo(y(0), y($)), G.lineTo(y(0), y(0)), G.closePath(), G.fillStyle = I.bidsFillColor, G.fill()
                }

                function v() {
                    G.strokeStyle = I.asksLineColor, G.beginPath();
                    for (var t = q.sort(function(t, e) {
                            return t[0] - e[0]
                        }), e = W / t.length / 2, n = W / 2 + 2 * F, a = 0; a < t.length; a++) 0 === a && G.lineTo(y(n), y($ - F)), G.lineTo(y(a * e + n), y(k(t[a][1]))), a === t.length - 1 && G.lineTo(y(W), y(k(t[a][1])));
                    G.stroke(), G.lineTo(y(W), y($ - F)), G.lineTo(y(n), y($ - F)), G.closePath(), G.fillStyle = I.asksFillColor, G.fill()
                }

                function b() {
                    for (var t = 32 * F, e = 16 * F, n = ~~(j / 100) - 1, a = 1 + ~~(z / 100), i = (W - 2 * t) / n, o = ($ - 2 * e) / a, r = [], c = [], s = [], u = [], l = 0, d = [], p = [], f = S(), m = t; m < W; m += i) r.push(m), c.push(f.pMin + m * f.pTick);
                    for (var g = $ - F; g > 0; g -= o) s.push(g), u.push(($ - F - g) * f.aTick);
                    u.forEach(function(t, e) {
                        l += t, d.push(I.noAmountTick * e), p.push(e)
                    }), N < 5 && 0 !== l && (u = p, N = (Y - o * a - 1) / o + 5), 0 === l && (u = d), u[0] = 0, h(r, c, "x"), h(s, u, "y")
                }

                function h(t, e, n) {
                    G.lineWidth = ~~(1.5 * F), G.strokeStyle = I.axisColor, G.font = 12 * F + "px Arial", G.fillStyle = I.color, G.textAlign = "x" === n ? "center" : "left";
                    var a = F;
                    "x" === n ? t.forEach(function(t, n) {
                        G.beginPath(), G.lineTo(y(t), $ + a), G.lineTo(y(t), (z + 4) * F + a), G.stroke(), G.closePath(), G.fillText(e[n].toFixed(I.priceFix), y(t), (z + 20) * F + a)
                    }) : t.forEach(function(t, n) {
                        var i = e[n] <= 1e3 ? e[n].toFixed(0) : d(e[n], 2, 1e3);
                        G.beginPath(), G.lineTo(W + a, y(t + a)), G.lineTo((j + 4) * F + a, y(t + a)), G.stroke(), G.fillText(i, (j + 8) * F + a, y(t + 4 * F)), G.closePath()
                    })
                }

                function y(t) {
                    return .5 + ~~t
                }

                function k(t) {
                    if (0 === t) return $ - F;
                    var e = Y - Y * t / N + K;
                    return e - $ < ~~(G.lineWidth * F) ? e - ~~(G.lineWidth * F) : e
                }

                function w(t) {
                    t.clearRect(0, 0, D * F, B * F)
                }

                function S() {
                    var t = C[0] && C[0][0] || 0,
                        e = q[q.length - 1] && q[q.length - 1][0] || 0;
                    return {
                        pMin: 1 * t,
                        pMax: 1 * e,
                        pTick: (e - t) / W,
                        aTick: N / Y
                    }
                }

                function T(t) {
                    w(G), g(t), m(), b(), _(), v()
                }

                function L() {
                    w(G), m(), b(), _(), v()
                }

                function E() {
                    x(), w(U), L()
                }

                function x() {
                    D = P.offsetWidth - 2, B = P.offsetHeight - 2, M.width = H.width = D * F, M.height = H.height = B * F, j = D - I.ruleWidth, z = B - I.ruleHeight, V = ~~(B * I.paddingTop / 100), K = V * F, Q = z - V, Y = Q * F, W = j * F, $ = z * F, R = !0
                }! function(t) {
                    t.getContext = function(t) {
                        return function(e) {
                            var n, a, i = t.call(this, e);
                            return "2d" === e && (n = i.backingStorePixelRatio || i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1, (a = (window.devicePixelRatio || 1) / n) > 1 && (this.style.height = this.height + "px", this.style.width = this.width + "px", this.width *= a, this.height *= a)), i
                        }
                    }(t.getContext)
                }(HTMLCanvasElement.prototype);
                var O = {
                        "hb-night": {
                            bidsLineColor: e && e.bidsLineColor || "rgba(88, 144, 101, 0)",
                            asksLineColor: e && e.asksLineColor || "rgba(190, 67, 79, 0)",
                            bidsFillColor: e && e.bidsLineColor || "rgba(88, 144, 101, .2)",
                            asksFillColor: e && e.asksLineColor || "rgba(190, 67, 79, .2)",
                            axisColor: e && e.axisColor || "rgba(97, 104, 138, .3)",
                            color: e && e.color || "#61688A",
                            bgColor: "#262A42",
                            dotColor: "rgba(122, 152, 247, 1)",
                            tipColor: "#C7CCE6"
                        },
                        "hb-day": {
                            bidsLineColor: e && e.bidsLineColor || "rgba(3, 192, 135, 0)",
                            asksLineColor: e && e.asksLineColor || "rgba(231, 109, 66, 0)",
                            bidsFillColor: e && e.bidsLineColor || "rgba(3, 192, 135, .1)",
                            asksFillColor: e && e.asksLineColor || "rgba(231, 109, 66, .1)",
                            axisColor: e && e.axisColor || "rgba(180, 188, 227, .3)",
                            color: e && e.color || "#232A4A",
                            bgColor: "#ffffff",
                            dotColor: "rgba(21, 180, 241, 1)",
                            tipColor: "#61688A"
                        }
                    },
                    I = {
                        theme: e && e.theme || "hb-night",
                        ruleHeight: e && e.ruleHeight || 30,
                        ruleWidth: e && e.ruleWidth || 50,
                        priceFix: e && e.priceFix || 2,
                        amountFix: e && e.amountFix || 0,
                        paddingTop: e && e.paddingTop || 15,
                        noAmountTick: e && e.noAmountTick || 500,
                        lang: e && e.lang || "en-us"
                    };
                n();
                var A = {
                        "zh-cn": {
                            "委托价": "委托价",
                            "累计": "累计"
                        },
                        "zh-hk": {
                            "委托价": "委託價",
                            "累计": "累計"
                        },
                        "en-us": {
                            "委托价": "Price",
                            "累计": "Sum"
                        },
                        "de-de": {
                            "委托价": "Preis",
                            "累计": "Total"
                        },
                        "ru-ru": {
                            "委托价": "Цена",
                            "累计": "Объём"
                        },
                        "ja-jp": {
                            "委托价": "価格",
                            "累计": "累計"
                        },
                        "ko-kr": {
                            "委托价": "위탁단가",
                            "累计": "누적량"
                        },
                        "fr-fr": {
                            "委托价": "Prix",
                            "累计": "Somme"
                        },
                        "es-es": {
                            "委托价": "Precio",
                            "累计": "Suma"
                        },
                        "th-th": {
                            "委托价": "ราคาสั่งซื้อ",
                            "累计": "ทยอยสะสม"
                        },
                        "vi-vi": {
                            "委托价": "Giá lệnh",
                            "累计": "Lũy kế"
                        },
                        "tr-tr": {
                            "委托价": "Emanet fiyatı",
                            "累计": "Sum"
                        }
                    },
                    q = [],
                    C = [],
                    N = 0,
                    P = "string" == typeof t ? document.querySelector("#" + t.replace("#", "")) : t || document.querySelector("#chart"),
                    M = document.createElement("canvas"),
                    D = P.offsetWidth - 2,
                    B = P.offsetHeight - 2,
                    H = document.createElement("canvas"),
                    R = !0;
                M.width = H.width = D, M.height = H.height = B, M.style.position = H.style.position = "absolute", P.style.position = "relative", P.appendChild(M), P.appendChild(H);
                var G = M.getContext("2d"),
                    U = H.getContext("2d"),
                    F = function(t) {
                        return (window.devicePixelRatio || 1) / (t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1)
                    }(G),
                    j = D - I.ruleWidth,
                    z = B - I.ruleHeight,
                    V = ~~(B * I.paddingTop / 100),
                    K = V * F,
                    Q = z - V,
                    Y = Q * F,
                    W = j * F,
                    $ = z * F;
                return H.addEventListener("mousemove", function(t) {
                    var e = a(t);
                    R && r(e.x, e.y)
                }, !1), H.addEventListener("mouseout", function(t) {
                    setTimeout(function() {
                        return w(U)
                    }, 500)
                }, !1), {
                    update: L,
                    putData: T,
                    forceUpdate: E,
                    initTheme: n
                }
            };
        e.a = o
    },
    3: function(t, e, n) {
        "use strict";

        function a(t, e) {
            var n = document.createEvent("HTMLEvents");
            return n.initEvent(t, !1, !1), n.localSync = e, n
        }

        function i(t, e) {
            if (!t || "object" !== (void 0 === t ? "undefined" : d()(t))) return void console.error("Publish: action is not defined", "action:", t);
            t.info = e, t.version = (new Date).getTime(), t.localSync && localStorage.setItem(t.type, u()({
                version: t.version,
                data: t.info
            })), p && console.log("%c ↙ publish:" + t.type, "color:green"), document.dispatchEvent(t)
        }

        function o(t) {
            var e = t.key,
                n = (t.newValue, t.oldValue, v(e, t));
            n && (n.source = "storage", p && console.log("%c ↗ subscribe(storage):" + e, "color:sienna"))
        }

        function r(t) {
            var e = t.type;
            t.info, t.version;
            v(e, t), p && console.log("%c ↗ subscribe(document):" + e, "color:sienna")
        }

        function c(t, e) {
            if (!t) return void console.error("Subscribe: action is not defined");
            var n = _(t, e);
            f.bind(window, "storage", o), "storage" !== n.source && (document.addEventListener(t, r), n.source = "document")
        }
        n.d(e, "c", function() {
            return a
        }), n.d(e, "b", function() {
            return i
        }), n.d(e, "a", function() {
            return c
        });
        var s = n(14),
            u = n.n(s),
            l = n(18),
            d = n.n(l),
            p = !1,
            f = {
                bind: document.addEventListener ? function(t, e, n) {
                    t.addEventListener(e, n, !1)
                } : function(t, e, n) {
                    t.attachEvent("on" + e, n)
                }
            },
            m = {},
            g = {},
            _ = function(t, e) {
                return m[t] = m[t] || {}, g[t] = g[t] || [], e && g[t].push(e), m[t].callback = g[t], m[t]
            },
            v = function(t, e) {
                if (m[t]) {
                    var n = m[t].callback,
                        a = (e.key, e.newValue),
                        i = (e.oldValue, a ? JSON.parse(a) : {}),
                        o = i.version,
                        r = i.data;
                    e.info = e.info || r, e.version = e.version || o, m[t].version = e.version;
                    for (var c = 0; c < n.length; c++) n[c] && n[c](e);
                    return m[t]
                }
            }
    },
    30: function(t, e) {},
    31: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        });
        var a = n(18),
            i = n.n(a),
            o = function(t, e, n, a) {
                t = t || "", e = e || {}, n = n || "", a = a || function() {};
                if ("object" == (void 0 === e ? "undefined" : i()(e))) {
                    for (var o = "", r = function(t) {
                            var e = [];
                            for (var n in t) t.hasOwnProperty(n) && e.push(n);
                            return e
                        }(e), c = 0; c < r.length; c++) o += encodeURIComponent(r[c]) + "=" + encodeURIComponent(e[r[c]]), c != r.length - 1 && (o += "&");
                    o && (t += (t.indexOf("?") > -1 ? "&" : "?") + o)
                } else "function" == typeof e && (n = e, a = n);
                "function" == typeof n && (a = n, n = "callback"), Date.now || (Date.now = function() {
                    return (new Date).getTime()
                });
                var s = Date.now(),
                    u = "jsonp" + Math.round(s + 1000001 * Math.random());
                window[u] = function(t) {
                    a(t);
                    try {
                        delete window[u]
                    } catch (t) {
                        window[u] = void 0
                    }
                }, -1 === t.indexOf("?") ? t += "?" : t += "&";
                var l = document.createElement("script");
                l.setAttribute("src", t + n + "=" + u), document.getElementsByTagName("head")[0].appendChild(l)
            }
    },
    32: function(t, e, n) {
        "use strict";

        function a() {
            l || (l = 1, s.Ready(function() {
                var t = document.createElement("iframe"),
                    e = document.querySelector("body");
                t.style.cssText = "display:none;position:absolute;top:-99999px;", e.appendChild(t), t.src = "/user_center/uc_ticket/?backUrl=" + location.pathname
            }))
        }
        var i = n(3),
            o = n(9),
            r = n(10),
            c = n(24),
            s = (n(12), new o.a),
            u = {
                resInterceptorsCode: {
                    "login-required": !0,
                    "token-not-valid": !0,
                    512: !0,
                    403: !0
                }
            },
            l = 0;
        n.i(i.a)("__resInterceptors", function(t) {
            var e = t.info,
                i = e.data,
                o = e.config,
                s = e.driver,
                l = o.url;
            if (!(location.href.indexOf("/login/") > 0) && !i.success && "ok" !== i.status && (u.resInterceptorsCode[i["err-code"]] || u.resInterceptorsCode[i.code])) {
                if ("UC" !== s) return a();
                if (r.a.needTicket) return setTimeout(function() {
                    n.i(c.a)(), location.href = "/login/?backurl=" + location.pathname
                }, 300);
                r.a.needTicket && console.warn("__resInterceptors logout", l, i)
            }
        }), n.i(i.a)("__ready", function(t) {
            var e = t.info,
                a = void 0 === e ? {} : e,
                i = a.needTicket;
            r.a.needTicket = i, n.i(c.f)(i)
        })
    },
    33: function(t, e) {},
    34: function(t, e) {
        t.exports = '<div class="component_tips">\n    <i class="icon"></i>\n    <div class="msg"></div>\n</div>'
    },
    35: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = this,
                n = t || {};
            return n.countTime = n.countTime || 60, e.option = n, e.countTime = n.countTime, e.count = n.countTime, e.RemainTime = function() {
                if (e.ClearRemainTime(), e.count--, e.Callback && e.Callback(e.count), e.count <= 0) return void e.Reset();
                e.SetRemainTime = setTimeout(e.RemainTime, 1e3)
            }, e.Reset = function() {
                e.count = n.countTime, e.ClearRemainTime(), e.Callback && e.Callback(-1)
            }, e.ClearRemainTime = function() {
                clearTimeout(e.SetRemainTime), e.SetRemainTime = null
            }, e
        }
        e.a = a
    },
    37: function(t, e) {},
    372: function(t, e, n) {
        "use strict";

        function a(t, e) {
            var n = e || 0,
                i = [1e3, 3e3, 1e4];
            i[n] && setTimeout(function() {
                t(), a(t, ++n)
            }, i[n])
        }

        function i() {
            n.i(C.e)().then(function(t) {
                var e = t.data,
                    n = 2;
                "ok" === e.status && (K.a.marginBalanceTotal = {}, e.data.forEach(function(t) {
                    t.symbol === PAGE_COIN + PAGE_QUOTE && (K.a.marginBalance = o(t), n = 1 * K.a.marginBalance["risk-rate"] || 2), t && t.list.forEach(function(t) {
                        K.a.marginBalanceTotal[t.currency] = K.a.marginBalanceTotal[t.currency] || 0, ["trade", "loan", "frozen", "interest"].forEach(function(e) {
                            t.type == e && (K.a.marginBalanceTotal[t.currency] += 1 * t.balance)
                        })
                    })
                }), _t = 0, n < 1.1 && (n = 1.1), n > 2 && (n = 2), n = 3 + 7 * (1 - (2 - n) / .9), setTimeout(i, 1e3 * n))
            })
        }

        function o(t) {
            var e = I.g;
            return t ? (e["fl-price"] = t["fl-price"], e["account-id"] = t.id, e["risk-rate"] = t["risk-rate"] >= 2 ? 2 : t["risk-rate"], e.state = t.state, t.list.forEach(function(t) {
                e[t.type][t.currency] = t.balance
            })) : [PAGE_COIN, PAGE_QUOTE].forEach(function(t) {
                e.trade[t] = 0, e.frozen[t] = 0, e.loan[t] = 0, e.interest[t] = 0, e["loan-available"][t] = 0, e["transfer-out-available"][t] = 0
            }), e
        }

        function r() {
            for (var t = navigator.userAgent, e = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod", "rv:1.2.3.4", "windows mobile", "midp"), n = !0, a = 0; a < e.length; a++)
                if (t.indexOf(e[a]) > 0) {
                    n = !1;
                    break
                }
            return n
        }

        function c() {
            var t = this;
            t.deposit = function(t) {
                location.href = t.dataset.path + "?action=deposit&coin=" + t.dataset.coin
            }, t.activeChart = function(t) {
                if (r()) {
                    document.querySelector("#chartMask").style.display = "none"
                }
            }, t.showChartMask = function() {
                if (r()) {
                    document.querySelector("#chartMask").style.display = "block"
                }
            }, t.locationgo = function(t) {
                var e = t.dataset.path;
                location.href = e + "?symbol=" + PAGE_COIN + PAGE_QUOTE
            }, t.marginTransfer = function(t, e) {
                n.i(R.i)({
                    quote: PAGE_QUOTE,
                    base: PAGE_COIN,
                    currency: e || PAGE_COIN,
                    type: "in",
                    success: function() {
                        a(i), q.a.Get([])
                    }
                })
            }
        }

        function s(t) {
            return t > .01 ? 2 : t.toString().match(/[^\.0]/) ? t.toString().match(/[^\.0]/).index + 1 : void 0
        }

        function u() {
            var t = document.querySelectorAll("[lazyfill]");
            [].forEach.call(t, l)
        }

        function l(t) {
            var e = t.getAttribute("lazyfill"),
                a = {
                    base: PAGE_COIN,
                    quote: PAGE_QUOTE
                };
            "attr" == e ? t.setAttribute(t.dataset.attr, n.i(A.d)(t.dataset.template || e, a)) : t.innerHTML = n.i(A.d)(t.dataset.template || e, a)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var d = n(162),
            p = n.n(d),
            f = n(14),
            m = n.n(f),
            g = n(18),
            _ = n.n(g),
            v = n(77),
            b = n.n(v),
            h = n(192),
            y = n.n(h),
            k = n(28),
            w = n.n(k),
            S = n(8),
            T = n.n(S),
            L = n(7),
            E = n.n(L),
            x = (n(70), n(774)),
            O = (n.n(x), n(225), n(277)),
            I = (n.n(O), n(71), n(5)),
            A = n(0),
            q = n(12),
            C = n(1),
            N = n(809),
            P = n.n(N),
            M = n(3),
            D = n(173),
            B = n(92),
            H = n(13),
            R = n(26),
            G = n(11),
            U = n(23),
            F = (n.n(U), n(9)),
            j = n(458),
            z = n(91),
            V = n(220),
            K = n(10),
            Q = (n(221), n(6)),
            Y = n(2),
            W = n(291),
            $ = n(136),
            J = n(467),
            Z = n(69),
            X = (n(461), n(468)),
            tt = n(469),
            et = n(22),
            nt = this,
            at = function() {
                var t = E()(T.a.mark(function t() {
                    var e, o, l, d, f, g, v, h, k, S, L, E, x, O, R, U, F, Q, $, nt, at, rt, ct, bt, ht, yt, kt, wt, St, Tt, Lt, Et, xt, Ot, It, At, qt, Ct, Nt, Pt, Mt, Dt, Bt, Ht, Rt, Gt, Ut, Ft, jt, zt, Vt, Kt, Qt, Yt, Wt, $t, Jt, Zt, Xt, te;
                    return T.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return te = function() {
                                    vt.Ready(function() {
                                        var t = L.market.ticker.close,
                                            e = (L.coin + "/" + L.quote).toUpperCase();
                                        t = n.i(A.b)(t, Q.precision.price || 0);
                                        var a = t ? t + " " + e + " " + gt : e + " " + gt;
                                        document.title = a
                                    })
                                }, Xt = function(t, e) {
                                    var a = t * ft;
                                    ft && (a ? (e.style.cssText = "", e.innerHTML = "≈ " + n.i(A.b)(a, s(a)) + " CNY") : (e.style.height = "0", e.innerHTML = ""))
                                }, Jt = function t() {
                                    if (!L.market.ticker.close) return setTimeout(t, 200);
                                    var e = m()(L.market.ticker),
                                        a = JSON.parse(e),
                                        i = JSON.parse(m()(L.market.dayKline));
                                    a.close = n.i(A.b)(a.close, Q.precision.price), a.high = n.i(A.b)(i.high, Q.precision.price), a.low = n.i(A.b)(i.low, Q.precision.price), a.amount = n.i(A.b)(a.amount, 0), a.myRate = lt.rate, a.symbol = (L.coin + "/" + L.quote).toUpperCase(), a.coin = L.coin.toUpperCase(), vt.Ready(function() {
                                        vt.getElementById("tickerClose").innerHTML = a.close || "---", n.i(A.e)("ticker_wrap", a), $t() && a.close && Wt(a.close)
                                    })
                                }, $t = function() {
                                    return "object" === ("undefined" == typeof localStorage ? "undefined" : _()(localStorage)) && localStorage.lang && ("zh-cn" === localStorage.lang || "zh-hk" === localStorage.lang)
                                }, Wt = function t(e) {
                                    if (!Qt) return setTimeout(function() {
                                        return t(e)
                                    }, 300);
                                    if ("usdt" === L.quote) ft = Qt;
                                    else {
                                        if (!K.a.symbolDataObj[L.quote + "usdt"]) return;
                                        if (!L.market.AllSymbolTicker[L.quote + "usdt"] || !L.market.AllSymbolTicker[L.quote + "usdt"].close) return setTimeout(function() {
                                            return t(e)
                                        }, 300);
                                        ft = Qt * L.market.AllSymbolTicker[L.quote + "usdt"].close
                                    }
                                    var a = n.i(A.b)(n.i(H.a)(e, ft), s(n.i(H.a)(e, ft)));
                                    vt.getElementById("tickerCny").innerHTML = "≈ " + a + " CNY", vt.getElementById("tickerCny_ticker_bar").innerHTML = "≈ " + a + " CNY", vt.formSellLimit && A.f.trigger(vt.formSellLimit.price, "input"), vt.formSellLimit && A.f.trigger(vt.formBuyLimit.price, "input")
                                }, Yt = function t() {
                                    var e = localStorage.getItem("usdrate");
                                    if (e && (e = e.split("/"), 1 * e[0] && 1 * e[1] && 1 * new Date - (e[1] || 0) < 864e5)) return Qt = e[0], setTimeout(t, 6e4);
                                    n.i(C._64)().then(function(e) {
                                        var n = e.data;
                                        "ok" === n.status ? (Kt = 1, Qt = n.data, localStorage.setItem("usdrate", Qt + "/" + 1 * new Date), setTimeout(t, 6e4)) : (Kt += 1, setTimeout(t, 1e3 * Kt))
                                    })
                                }, Vt = function(t) {
                                    n.i(C._83)({
                                        params: {
                                            symbol: t
                                        }
                                    }).then(function(t) {
                                        var n = t.data;
                                        "ok" === n.status ? vt.Ready(function() {
                                            Q.limit.buyLimit.price.less = n.data["buy-limit-must-less-than"], Q.limit.buyLimit.amount.min = n.data["limit-order-must-greater-than"], Q.limit.buyLimit.amount.mgtMax = n.data["limit-order-must-less-than"], Q.limit.sellLimit.price.greater = n.data["sell-limit-must-greater-than"], Q.limit.sellLimit.amount.min = n.data["limit-order-must-greater-than"], Q.limit.sellLimit.amount.mgtMax = n.data["limit-order-must-less-than"], Q.limit.buyMarket.amount.min = n.data["market-buy-order-must-greater-than"], Q.limit.buyMarket.amount.mgtMax = n.data["market-buy-order-must-less-than"], Q.limit.sellMarket.amount.min = n.data["market-sell-order-must-greater-than"], Q.limit.sellMarket.amount.mgtMax = n.data["market-sell-order-must-less-than"], vt.modTrade = vt.getElementById("mod_trade"), vt.formTradeButton = vt.modTrade.querySelectorAll('button[type="submit"]'), vt.formTradeButton.forEach(function(t) {
                                                t.disabled = !1
                                            })
                                        }) : "base-symbol-error" === n["err-code"] && (e.Error(n["err-msg"], 3e4), vt.Ready(function() {
                                            vt.formTradeButton.forEach(function(t) {
                                                t.disabled = !0
                                            })
                                        }))
                                    })
                                }, zt = function(t, e, a, i) {
                                    t.value = 1 * a && 1 * (1 * e).toFixed(void 0 === i ? Q.precision.amount : i) ? n.i(A.b)(n.i(H.a)(e, a / 100), void 0 === i ? Q.precision.amount : i) : "", A.f.trigger(t, "input", "range")
                                }, jt = function(t, e) {
                                    return t && e ? n.i(H.a)(t, e) : 0
                                }, Ct = function(t, e) {
                                    var n = e || 4;
                                    return new RegExp("^(([0-9]{1}\\d*)|([0]{1}))(\\.(\\d){0," + n + "})?$").test(t)
                                }, qt = function(t, e, n) {
                                    t.Drag.redrag(1 * n && 1 * e ? n / e * 100 : 0)
                                }, At = function(t, o, r) {
                                    var c = {
                                            exchange: L.account.id,
                                            margin: K.a.marginBalance["account-id"]
                                        },
                                        s = {
                                            exchange: "web",
                                            margin: "margin-web"
                                        };
                                    if (!c[it]) return void console.warn("get account error");
                                    void 0 !== t.data.price && (t.data.price = n.i(A.b)(t.data.price, Q.precision.price)), t.data["account-id"] = c[it], t.data.source = s[it], r.disabled = !0, n.i(C._84)(t).then(function(t) {
                                        var c = t.data,
                                            s = c.data;
                                        "ok" === c.status ? n.i(C._85)({
                                            path: {
                                                "order-id": s
                                            }
                                        }).then(function(t) {
                                            var s = t.data;
                                            s.data;
                                            "ok" === s.status ? (e.Show(window.LANG.exchange["委托成功"] || "委托成功", 2e3), o.amount.value = "", A.f.trigger(o.amount, "input"), q.a.Get(K.a.currencyDataArr), n.i(D.QueryOrderList)(Q.queryOrderList, "openOrders"), n.i(D.QueryHistoryOrderList)(Q.queryHistoryOrderList, "orderHistory"), "margin" === it && a(i)) : e.Error(c["err-msg"], 3e3), r.disabled = !1
                                        }) : e.Error(c["err-msg"], 3e3), r.disabled = !1
                                    })
                                }, It = function() {
                                    var t = this;
                                    t.AuthNow = function(e) {
                                        if ("price" === e || "amount" === e) return function(a, i) {
                                            return function(o, r, c) {
                                                var s = void 0,
                                                    u = n.i(A.D)(c.FormDataCommon.type, "-"),
                                                    l = c.FormDataCommon.type.split("-"),
                                                    d = r.msg.errorMsg.split("|"),
                                                    p = a[u],
                                                    f = void 0,
                                                    m = void 0,
                                                    g = void 0,
                                                    _ = void 0;
                                                return "buy" === l[0] && ("price" === e && (f = p.price.min, m = n.i(A.b)(p.price.less * i.close, Q.precision.price), g = parseInt(100 * p.price.less) + "%"), "amount" === e && (f = p.amount.min, m = Math.min(p.amount.max, p.amount.mgtMax))), "sell" === l[0] && ("price" === e && (f = n.i(A.b)(p.price.greater * i.close, Q.precision.price), m = p.price.max, _ = parseInt(100 * p.price.greater) + "%"), "amount" === e && (f = p.amount.min, m = Math.min(p.amount.max, p.amount.mgtMax))), o ? (f = n.i(A.b)(f, t.AuthInput.dataset.precision ? $(t.AuthInput.dataset.precision) : Q.precision[e]), m = n.i(A.b)(m, t.AuthInput.dataset.precision ? $(t.AuthInput.dataset.precision) : Q.precision[e]), 1 * o < 1 * f && (t.Msg = d[1].replace("%s", "sell" === l[0] ? _ || f : f), s = 3), 1 * o > 1 * m && (t.Msg = d[0].replace("%s", "buy" === l[0] ? g || m : m), s = 3)) : s = 1, s
                                            }
                                        }(Q.limit, L.market.ticker)
                                    }, t.Then = function(e, n) {
                                        Q.precision.price;
                                        L.SubmitFormData = {}, "submit" === n.type ? (L.SubmitFormData = n.formData, L.SubmitFormInputs = n.inputs, L.SubmitFormButton = n.button, At({
                                            data: n.formData
                                        }, n.inputs, n.button)) : (pt.Show(n.ele, '<i class="huobi_pro_warning"></i> ' + t.Msg), n.ele.focus(), A.k.addClass(n.ele, "input_error"), n.ele.getAttribute("isBind") && A.f.add(n.ele, "input", function() {
                                            pt.Hide(), A.k.removeClass(n.ele, "input_error")
                                        }), A.f.add(n.ele, "blur", function() {
                                            pt.Hide(), A.k.removeClass(n.ele, "input_error")
                                        }), n.ele.setAttribute("isBind", 1))
                                    }
                                }, Ot = function t() {
                                    if (xt) {
                                        var e = "exchange" == it ? K.a.balance : K.a.marginBalance;
                                        if ("exchange" == it && !K.a.balance.trade || "margin" == it && (!K.a.marginBalance || !K.a.marginBalance.trade)) return Et && clearTimeout(Et), Et = setTimeout(t, 100);
                                        L.formData.buyLimit.price ? Q.limit.buyLimit.amount.max = +e.trade[L.quote.toLowerCase()] ? n.i(A.b)(e.trade[L.quote.toLowerCase()] / L.formData.buyLimit.price, Q.precision.amount) : 0 : Q.limit.buyLimit.amount.max = n.i(A.b)(0, Q.precision.amount), Q.limit.sellLimit.amount.max = n.i(A.b)(e.trade[L.coin], Q.precision.amount), Q.limit.buyMarket.amount.max = n.i(A.b)(n.i(A.b)(e.trade[L.quote.toLowerCase()], K.a.currencyDataObj[PAGE_QUOTE]["show-precision"]), $("volumes")), Q.limit.sellMarket.amount.max = n.i(A.b)(e.trade[L.coin], Q.precision.amount), vt.Ready(function() {
                                            vt.formBuyLimit.querySelector(".max_num").innerHTML = n.i(A.b)(Q.limit.buyLimit.amount.max, Q.precision.amount), vt.formSellLimit.querySelector(".max_num").innerHTML = n.i(A.b)(Q.limit.sellLimit.amount.max, Q.precision.amount), vt.formBuyMarket.querySelector(".max_num").innerHTML = n.i(A.b)(Q.limit.buyMarket.amount.max, $("volumes")), vt.formSellMarket.querySelector(".max_num").innerHTML = n.i(A.b)(Q.limit.sellMarket.amount.max, Q.precision.amount), qt(Rt, Q.limit.buyLimit.amount.max, L.formData.buyLimit.amount), qt(Gt, Q.limit.sellLimit.amount.max, L.formData.sellLimit.amount)
                                        })
                                    }
                                }, Lt = function() {
                                    vt.Ready(function() {
                                        var t = vt.getElementById("otcGuide");
                                        t && "object" === ("undefined" == typeof localStorage ? "undefined" : _()(localStorage)) && localStorage.lang && "zh-cn" === localStorage.lang && (t.style.display = "block")
                                    })
                                }, St = function(t) {
                                    t.subbed || n.i(M.b)(G.a.__dayKlineSub, t)
                                }, wt = function(t) {
                                    t.subbed || n.i(M.b)(G.a.__tickerSub, t)
                                }, kt = function(t) {
                                    var e = t.info;
                                    L.market.dayKline = e.tick, Jt()
                                }, yt = function(t) {
                                    var e = t.info;
                                    L.market.ticker = e.tick, Jt(), te()
                                }, ht = function() {
                                    f.plugin(n.i(B.b)({
                                        symbol: (L.coin + L.quote).toLowerCase()
                                    }).sub().ticker(), wt), f.plugin(n.i(B.b)({
                                        symbol: (L.coin + L.quote).toLowerCase(),
                                        period: "1day"
                                    }).sub().kline(), St)
                                }, $ = function(t) {
                                    var e = dt[(PAGE_COIN + PAGE_QUOTE).toLowerCase()] || b.a;
                                    return Math.min(e, Q.precision[t])
                                }, k = function(t) {
                                    var e = document.querySelector("#depth_chart"),
                                        a = A.k.hasClass(document.querySelector("html"), "hb-night") ? "hb-night" : "hb-day";
                                    t.subbed || (h || (e.innerHTML = "", h = n.i(W.a)("depth_chart", {
                                        priceFix: K.a.symbolDataObj[g]["trade-price-precision"],
                                        amountFix: K.a.symbolDataObj[g]["trade-amount-precision"],
                                        lang: localStorage.lang.toLowerCase(),
                                        theme: a
                                    })), h.putData(t.tick))
                                }, t.next = 24, et.a.symbols(ot);
                            case 24:
                                return t.next = 26, et.a.margin(ot);
                            case 26:
                                return t.next = 28, et.a.currencyinfo(ot);
                            case 28:
                                e = new Y.a, o = K.a.symbolDataObj["exchange" == it ? K.a.symbolDataArr[0] : K.a.marginDataArr[0]], l = "exchange" == it ? K.a.symbolDataObj : K.a.marginDataObj, d = localStorage[st] ? localStorage[st].split("_") : null, PAGE_SYMBOL_ARR[0] && PAGE_SYMBOL_ARR[1] ? (window.PAGE_COIN = PAGE_SYMBOL_ARR[0].toLowerCase(), window.PAGE_QUOTE = PAGE_SYMBOL_ARR[1].toLowerCase()) : (window.PAGE_COIN = d ? d[0] : o["base-currency"], window.PAGE_QUOTE = d ? d[1] : o["quote-currency"], l[window.PAGE_COIN + window.PAGE_QUOTE] || (window.PAGE_COIN = o["base-currency"], window.PAGE_QUOTE = o["quote-currency"]), window.location.hash = "#" + window.PAGE_COIN + "_" + window.PAGE_QUOTE), vt.Ready(u), f = B.a.handsup(I.c.ws), g = (PAGE_COIN + PAGE_QUOTE).toLowerCase(), v = n.i(B.b)({
                                    symbol: g
                                }).sub().depth({
                                    step: "percent10"
                                }), h = null, S = !w()("exchange" == it ? K.a.symbolDataObj : K.a.marginDataObj).filter(function(t) {
                                    return !("exchange" == it ? K.a.symbolDataObj : K.a.marginDataObj)[t].delist
                                }).includes((PAGE_COIN + PAGE_QUOTE).toLowerCase()), S ? window.location.href = "/" : localStorage.setItem(st, PAGE_COIN + "_" + PAGE_QUOTE), vt.Ready(function() {
                                    A.f.add(window, "resize", function() {
                                        return h && h.forceUpdate()
                                    }), n.i(M.a)("__changeTheme", function(t) {
                                        h && h.initTheme(t.info), h && h.forceUpdate()
                                    }), f.plugin(v, k)
                                }), L = {
                                    symbol_config: K.a.symbolDataObj[(PAGE_COIN + PAGE_QUOTE).toLowerCase()],
                                    imgCaptcha: {},
                                    loginData: {},
                                    loginControl: {},
                                    account: {},
                                    quote: PAGE_QUOTE,
                                    coin: PAGE_COIN,
                                    orderList: [],
                                    auth: {
                                        trade: {}
                                    },
                                    formData: {
                                        buyLimit: {},
                                        sellLimit: {},
                                        buyMarket: {},
                                        sellMarket: {}
                                    },
                                    formCache: {
                                        buyLimit: {},
                                        sellLimit: {},
                                        buyMarket: {},
                                        sellMarket: {},
                                        buy: {},
                                        sell: {}
                                    },
                                    market: {
                                        AllSymbolTicker: {},
                                        depth: {},
                                        ticker: {},
                                        dayKline: {}
                                    },
                                    SubmitFormData: {}
                                }, E = N.huobiResolution.get(), x = y()(E, 2), O = x[0], R = void 0 === O ? "15min" : O, U = x[1], F = void 0 === U ? 1 : U, vt.Ready(function() {
                                    window.tvWidget = new P.a({
                                        ws: f.info,
                                        base: top.PAGE_COIN,
                                        quote: top.PAGE_QUOTE,
                                        period: R,
                                        chartType: F,
                                        props: {
                                            library_path: "/charting_library/",
                                            fullscreen: !1,
                                            width: "100%",
                                            height: 480
                                        },
                                        cssfile: "hb-night" === n.i(Z.b)() ? "/charting_library/static/night.css" : "/charting_library/static/day.css",
                                        themeName: n.i(Z.b)(),
                                        symbols: [L.symbol_config],
                                        lang: localStorage.getItem("lang").substr(0, 2)
                                    })
                                }), Q = {
                                    precision: {
                                        price: L.symbol_config["trade-price-precision"],
                                        amount: L.symbol_config["trade-amount-precision"],
                                        volumes: L.symbol_config["trade-total-precision"],
                                        fee: L.symbol_config["fee-precision"]
                                    },
                                    range: {
                                        buyLimit: 0,
                                        sellLimit: 0,
                                        buyMarket: 0,
                                        sellMarket: 0
                                    },
                                    queryOrderList: {
                                        size: 11,
                                        symbol: L.coin + L.quote,
                                        states: "submitted,partial-filled",
                                        types: "",
                                        quote: L.quote,
                                        coin: L.coin
                                    },
                                    queryHistoryOrderList: {
                                        size: 11,
                                        symbol: L.coin + L.quote,
                                        states: "partial-canceled,filled,canceled",
                                        types: "",
                                        quote: L.quote,
                                        coin: L.coin
                                    },
                                    symbol: PAGE_COIN + PAGE_QUOTE,
                                    size: 11
                                }, Q.limit = {
                                    buyLimit: {
                                        price: {
                                            min: 1 * n.i(A.b)(Math.pow(.1, Q.precision.price), Q.precision.price),
                                            less: 1.1
                                        },
                                        amount: {
                                            min: .001,
                                            max: 1e4,
                                            mgtMax: 1e4
                                        }
                                    },
                                    sellLimit: {
                                        price: {
                                            greater: .9,
                                            max: 99999
                                        },
                                        amount: {
                                            min: .001,
                                            max: 1e4,
                                            mgtMax: 1e4
                                        }
                                    },
                                    buyMarket: {
                                        amount: {
                                            min: 1 * n.i(A.b)(Math.pow(.1, Q.precision.price), Q.precision.price),
                                            max: 1e3,
                                            mgtMax: 1e4
                                        }
                                    },
                                    sellMarket: {
                                        amount: {
                                            min: .001,
                                            max: 1e4,
                                            mgtMax: 1e4
                                        }
                                    },
                                    circuitBreak: {
                                        less: 10,
                                        greater: 100,
                                        rate: 0
                                    }
                                }, n.i(D.setBuyMarketPrecision)($("volumes")), top.window.SYMBOLDATA = {
                                    accuracy: {}
                                }, n.i(M.a)("__getUserAccount", function(t) {
                                    L.account = K.a.account[K.a.useAccountId]
                                }), n.i(M.a)("__getUserBalance", function(t) {
                                    var e = t.info,
                                        a = !1;
                                    vt.Ready(function() {
                                        n.i(A.E)(".buy_available", n.i(A.b)(e.trade[L.quote], K.a.currencyDataObj[PAGE_QUOTE]["show-precision"])), n.i(A.E)(".sell_available", n.i(A.b)(e.trade[L.coin], K.a.currencyDataObj[PAGE_COIN]["show-precision"]))
                                    });
                                    for (var i in e.total) 1 * e.total[i] && (a = !0);
                                    a || "exchange" !== TRADE_TYPE || A.i.get("otc_login_guide") || Lt(), Ot()
                                }), n.i(M.a)("__allSymbolTicker", function(t) {
                                    var e = t.info.ch.split(".")[1];
                                    L.market.AllSymbolTicker[e] = L.market.AllSymbolTicker[e] ? L.market.AllSymbolTicker[e] : {}, L.market.AllSymbolTicker[e] = t.info.tick
                                }), n.i(M.a)("__allSymbolDayKline", function(t) {
                                    var e = t.info,
                                        a = e.ch.split(".")[1];
                                    L.market.AllSymbolTicker[a] = L.market.AllSymbolTicker[a] ? L.market.AllSymbolTicker[a] : {}, L.market.AllSymbolTicker[a] = e.tick;
                                    var i = (e.tick.close - e.tick.open) / e.tick.open * 100,
                                        o = 1 * n.i(A.b)(i, 2) ? n.i(A.b)(i, 2) : n.i(A.b)(0, 2),
                                        r = (1 * o > 0 ? "+" : "") + o,
                                        c = r + "%";
                                    a == PAGE_COIN + PAGE_QUOTE && (lt.rate = {
                                        showRate: c,
                                        rate: 1 * o
                                    }, Jt())
                                }), n.i(M.a)("__userIsLogin", function(t) {
                                    t.info ? (rt(), Vt(L.coin + L.quote), nt(!0)) : nt()
                                }), nt = function(t) {
                                    vt.Ready(function() {
                                        var e = vt.getElementById("open_orders_scroll"),
                                            n = vt.getElementById("order_history_scroll");
                                        t ? (e && (e.style.display = "block"), n && (n.style.display = "block")) : (e && (e.style.display = "none"), n && (n.style.display = "none"))
                                    })
                                }, at = function(t, e) {
                                    return t.currentStyle ? t.currentStyle[e] : window.getComputedStyle(t, null)[e]
                                }, rt = function() {
                                    for (var t = K.a.symbolData, e = 0, n = t.length; e < n; e++) {
                                        var a = t[e]["symbol-name"].replace("/", "").toLowerCase();
                                        top.window.SYMBOLDATA[a] = t[e]["symbol-name"], top.window.SYMBOLDATA.accuracy[a.toLowerCase()] = {
                                            fee: t[e]["fee-precision"],
                                            amount: t[e]["trade-amount-precision"],
                                            price: t[e]["trade-price-precision"],
                                            total: t[e]["trade-total-precision"]
                                        }
                                    }
                                    bt()
                                }, ct = void 0, bt = function(t) {
                                    n.i(D.QueryOrderList)(Q.queryOrderList, "openOrders"), n.i(D.QueryHistoryOrderList)(Q.queryHistoryOrderList, "orderHistory"), ct = setInterval(function() {
                                        0 == top.window.PAGECONFIG.openOrders.page && (delete Q.queryOrderList.from, delete Q.queryOrderList.direct, n.i(D.QueryOrderList)(Q.queryOrderList, "openOrders")), 0 == top.window.PAGECONFIG.orderHistory.page && (delete Q.queryHistoryOrderList.from, delete Q.queryHistoryOrderList.direct, n.i(D.QueryHistoryOrderList)(Q.queryHistoryOrderList, "orderHistory"))
                                    }, 5e3)
                                }, n.i(M.a)("__tickerSub", yt), n.i(M.a)("__dayKlineSub", kt), ht(), Tt = function t(e) {
                                    var n, a = "[object Array]" === Object.prototype.toString.call(e) ? [] : {};
                                    if ("object" === (void 0 === e ? "undefined" : _()(e))) {
                                        if (window.JSON) n = m()(e), a = JSON.parse(n);
                                        else
                                            for (var i in e) a[i] = "object" === _()(e[i]) ? t(e[i]) : e[i];
                                        return a
                                    }
                                }, n.i(M.a)("__userIsLogin", function(t) {
                                    xt = t.info
                                }), Nt = new z.a, Pt = new z.a, Pt.Then = function(t) {
                                    pt.Hide(), Ut.Drag.setInit(), Ft.Drag.setInit(), Rt.Drag.redrag(0, "reset"), Gt.Drag.redrag(0, "reset"), Ut.Drag.redrag(0, "reset"), Ft.Drag.redrag(0, "reset"), t && vt.formBuyLimit.price && vt.formBuyLimit.price.setAttribute("force", 1)
                                }, Mt = n.i(V.a)(), Dt = n.i(V.a)(), Bt = n.i(V.a)(), Ht = n.i(V.a)(), Rt = n.i(V.a)(), Gt = n.i(V.a)(), Ut = n.i(V.a)(), Ft = n.i(V.a)(), Kt = 1, Qt = null, Yt(), vt.Ready(function() {
                                    if (!r()) {
                                        document.querySelector("#chartMask").style.display = "none"
                                    }
                                    vt.sbq = vt.querySelectorAll('span[unit="show_buy_quote"]');
                                    var t = !0,
                                        e = !1,
                                        n = void 0;
                                    try {
                                        for (var a, i = p()(vt.sbq); !(t = (a = i.next()).done); t = !0) {
                                            a.value.innerHTML = L.quote
                                        }
                                    } catch (t) {
                                        e = !0, n = t
                                    } finally {
                                        try {
                                            !t && i.return && i.return()
                                        } finally {
                                            if (e) throw n
                                        }
                                    }
                                    vt.ssq = vt.querySelectorAll('span[unit="show_sell_quote"]');
                                    var o = !0,
                                        c = !1,
                                        s = void 0;
                                    try {
                                        for (var u, l = p()(vt.ssq); !(o = (u = l.next()).done); o = !0) {
                                            u.value.innerHTML = L.quote
                                        }
                                    } catch (t) {
                                        c = !0, s = t
                                    } finally {
                                        try {
                                            !o && l.return && l.return()
                                        } finally {
                                            if (c) throw s
                                        }
                                    }
                                    vt.sbq_logout = vt.querySelectorAll('span[unit="show_buy_quote_logout"]');
                                    var d = !0,
                                        f = !1,
                                        m = void 0;
                                    try {
                                        for (var g, _ = p()(vt.sbq_logout); !(d = (g = _.next()).done); d = !0) {
                                            g.value.innerHTML = L.quote
                                        }
                                    } catch (t) {
                                        f = !0, m = t
                                    } finally {
                                        try {
                                            !d && _.return && _.return()
                                        } finally {
                                            if (f) throw m
                                        }
                                    }
                                    vt.ssq_logout = vt.querySelectorAll('span[unit="show_sell_quote_logout"]');
                                    var v = !0,
                                        b = !1,
                                        h = void 0;
                                    try {
                                        for (var y, k = p()(vt.ssq_logout); !(v = (y = k.next()).done); v = !0) {
                                            y.value.innerHTML = L.quote
                                        }
                                    } catch (t) {
                                        b = !0, h = t
                                    } finally {
                                        try {
                                            !v && k.return && k.return()
                                        } finally {
                                            if (b) throw h
                                        }
                                    }
                                }), vt.Ready(function() {
                                    function t(t, e) {
                                        var n = {
                                            buyLimit: {
                                                price: "price",
                                                amount: "amount"
                                            },
                                            sellLimit: {
                                                price: "price",
                                                amount: "amount"
                                            },
                                            buyMarket: {
                                                amount: "volumes"
                                            },
                                            sellMarket: {
                                                amount: "amount"
                                            }
                                        };
                                        return "volumes" == n[t][e] ? $("volumes") : Q.precision[n[t][e]]
                                    }

                                    function e(e, a) {
                                        var i = t(e, a),
                                            o = L.formData[e][a] + "",
                                            r = o.split("."),
                                            c = r[1] ? r[1].length : 0,
                                            s = void 0;
                                        return s = isNaN(L.formData[e][a]) ? L.formCache[e][a] || "" : c > i ? n.i(A.b)(L.formData[e][a], i) : L.formData[e][a], L.formCache[e][a] = s, L.formData[e][a] = s, s
                                    }

                                    function a(t, e) {
                                        t.querySelector("span").innerHTML = n.i(A.b)(e, $("volumes")) + " " + L.quote.toUpperCase()
                                    }
                                    Pt.Init(document.getElementById("mod_trade")), Nt.Init(document.getElementById("mod_trade_logout")), vt.formBuyLimit = vt.getElementById("form_buy_limit"), vt.formSellLimit = vt.getElementById("form_sell_limit"), vt.formBuyMarket = vt.getElementById("form_buy_market"), vt.formSellMarket = vt.getElementById("form_sell_market"), vt.marginAccount = vt.querySelector("#margin_account"), vt.marginHbQuote = vt.querySelector("#margin_hb_quote"), vt.marginHbBase = vt.querySelector("#margin_hb_base"), vt.marginHbQuote1 = vt.querySelector("#margin_hb_quote1"), vt.marginHbBase1 = vt.querySelector("#margin_hb_base1"), vt.marginAccounts = {
                                        coin: n.i(A.u)(vt.marginAccount.querySelectorAll("span")),
                                        percent: vt.marginAccount.querySelector("p.percent"),
                                        riskVal: vt.marginAccount.querySelector("i.risk_val"),
                                        fire: vt.marginAccount.querySelector("b")
                                    }, vt.formPrice = vt.querySelectorAll("input[name='price']"), vt.depositLimitQuote = vt.querySelector("#deposit_limit_quote"), vt.depositLimitCoin = vt.querySelector("#deposit_limit_coin"), vt.depositMarketQuote = vt.querySelector("#deposit_market_quote"), vt.depositMarketCoin = vt.querySelector("#deposit_market_coin"), vt.totalBalance = vt.querySelector("#total_balance"), vt.totalBalanceToLogin = vt.querySelector("#total_balance_to_login"), vt.buyLimitMathPrice = vt.querySelector("#buy_limit_math_price"), vt.sellLimitMathPrice = vt.querySelector("#sell_limit_math_price"), "margin" == it && getCookie("HB-PRO-TOKEN") && (vt.marginAccount.style.display = "block", vt.marginHbQuote.style.display = "none", vt.marginHbBase.style.display = "none", vt.marginHbQuote1.style.display = "none", vt.marginHbBase1.style.display = "none"), K.a.currencyDataObj[PAGE_COIN]["deposit-enabled"] && (vt.depositLimitCoin.style.display = "", vt.depositMarketCoin.style.display = ""), K.a.currencyDataObj[PAGE_QUOTE]["deposit-enabled"] && (vt.depositLimitQuote.style.display = "", vt.depositMarketQuote.style.display = ""), getCookie("HB-PRO-TOKEN") ? vt.totalBalance.style.display = "" : vt.totalBalanceToLogin.style.display = "";
                                    var i = new j.a({
                                            form: vt.formBuyLimit
                                        }),
                                        o = new j.a({
                                            form: vt.formSellLimit
                                        }),
                                        r = new j.a({
                                            form: vt.formBuyMarket
                                        }),
                                        c = new j.a({
                                            form: vt.formSellMarket
                                        });
                                    It.call(i), It.call(o), It.call(r), It.call(c), A.f.add(vt.formBuyLimit, "input", function(t) {
                                        L.formData.buyLimit = i.GetData(i.Inputs)[0], t.info || (vt.formBuyLimit.price.value = e("buyLimit", "price"), vt.formBuyLimit.amount.value = e("buyLimit", "amount"), qt(Rt, Q.limit.buyLimit.amount.max, L.formData.buyLimit.amount)), Ot(), Xt(vt.formBuyLimit.price.value, vt.buyLimitMathPrice), a(vt.getElementById("buy_total"), jt(L.formData.buyLimit.price, L.formData.buyLimit.amount))
                                    }), A.f.add(vt.formSellLimit, "input", function(t) {
                                        L.formData.sellLimit = o.GetData(o.Inputs)[0], t.info || (vt.formSellLimit.price.value = e("sellLimit", "price"), vt.formSellLimit.amount.value = e("sellLimit", "amount"), qt(Gt, Q.limit.sellLimit.amount.max, L.formData.sellLimit.amount)), Xt(vt.formSellLimit.price.value, vt.sellLimitMathPrice), a(vt.getElementById("sell_total"), jt(L.formData.sellLimit.price, L.formData.sellLimit.amount))
                                    }), A.f.add(vt.formBuyMarket, "input", function(t) {
                                        L.formData.buyMarket = r.GetData(r.Inputs)[0], t.info || (vt.formBuyMarket.amount.value = e("buyMarket", "amount"), qt(Ut, Q.limit.buyMarket.amount.max, L.formData.buyMarket.amount))
                                    }), A.f.add(vt.formSellMarket, "input", function(t) {
                                        L.formData.sellMarket = c.GetData(c.Inputs)[0], t.info || (vt.formSellMarket.amount.value = e("sellMarket", "amount"), qt(Ft, Q.limit.sellMarket.amount.max, L.formData.sellMarket.amount))
                                    }), Mt.Init(vt.querySelector(".logout_limit_buy"), !0), Dt.Init(vt.querySelector(".logout_limit_sell"), !0), Bt.Init(vt.querySelector(".logout_market_buy"), !0), Ht.Init(vt.querySelector(".logout_market_sell"), !0), Rt.Init(vt.formBuyLimit.querySelector(".input_range")), Rt.Then("fn_buyLimitRange", function(t, e) {
                                        Q.range.buyLimit = t, "data" !== e && zt(vt.formBuyLimit.amount, Q.limit.buyLimit.amount.max, t)
                                    }), Gt.Init(vt.formSellLimit.querySelector(".input_range")), Gt.Then("fn_sellLimitRange", function(t, e) {
                                        Q.range.sellLimit = t, "data" !== e && zt(vt.formSellLimit.amount, Q.limit.sellLimit.amount.max, t)
                                    }), Ut.Init(vt.formBuyMarket.querySelector(".input_range")), Ut.Then("fn_buyMarketRange", function(t, e) {
                                        Q.range.buyMarket = t, "data" !== e && zt(vt.formBuyMarket.amount, Q.limit.buyMarket.amount.max, t, $("volumes"))
                                    }), Ft.Init(vt.formSellMarket.querySelector(".input_range")), Ft.Then("fn_sellMarketRange", function(t, e) {
                                        Q.range.sellMarket = t, "data" !== e && zt(vt.formSellMarket.amount, Q.limit.sellMarket.amount.max, t)
                                    })
                                }), vt.Ready(function() {
                                    function t(t) {
                                        n.i(C._66)({
                                            params: {
                                                language: localStorage.lang ? localStorage.lang.toLowerCase() : "en-us"
                                            }
                                        }).then(function(e) {
                                            var a = e.data;
                                            if (a.success && a.data) {
                                                L.topNoticeList = a.data.top_notice_list;
                                                for (var i = 0; i < L.topNoticeList.length; i++) L.topNoticeList[i].times = n.i(A.c)(L.topNoticeList[i].created);
                                                n.i(A.e)(t, L.topNoticeList)
                                            }
                                        })
                                    }
                                    for (var e = vt.querySelectorAll(".l_show_btn"), a = (vt.querySelectorAll(".l_show_box"), vt.querySelectorAll(".l_tab_transac")), i = 0, o = e.length; i < o; i++) e[i].index = i, A.f.add(e[i], "click", function(t) {
                                        var e = this,
                                            n = (e.index, e.parentNode);
                                        A.k.hasClass(n, "z_active") ? A.k.removeClass(n, "z_active") : A.k.addClass(n, "z_active")
                                    });
                                    for (var i = 0, o = a.length; i < o; i++) a[i].index = i, A.f.add(a[i], "click", function(t) {
                                        var e = A.f.target(t),
                                            a = n.i(A.g)(e, "data-type"),
                                            i = this,
                                            o = i.index,
                                            r = i.querySelectorAll("li"),
                                            c = a && "all" == a.attr ? "" : a && "buy" == a.attr ? "buy-market,buy-limit" : "sell-market,sell-limit";
                                        if (a && a.attr) {
                                            for (var s = 0, u = r.length; s < u; s++) A.k.removeClass(r[s], "z_active");
                                            A.k.addClass(a.node, "z_active"), o ? (Q.queryHistoryOrderList.types = c, n.i(D.QueryHistoryOrderList)({
                                                symbol: Q.symbol,
                                                size: Q.size,
                                                types: c,
                                                quote: L.quote,
                                                coin: L.coin
                                            }, "orderHistory")) : (Q.queryOrderList.types = c, n.i(D.QueryOrderList)({
                                                symbol: Q.symbol,
                                                size: Q.size,
                                                types: c,
                                                quote: L.quote,
                                                coin: L.coin
                                            }, "openOrders"))
                                        }
                                    });
                                    vt.getElementById("order_history").style.display = "block", vt.Ready(function() {
                                        t("notice_list"), vt.notice_list = vt.querySelector("#notice_list"), A.f.add(vt.notice_list, "click", function(t) {
                                            var e = n.i(A.g)(A.f.target(t), "data-href-id");
                                            if (e) {
                                                var a = "/notice_detail/?id=" + e.attr;
                                                window.location.href = a
                                            }
                                        })
                                    });
                                    var r = vt.getElementById("coin_detail_in");
                                    n.i(C._86)({
                                        params: {
                                            currency: L.coin,
                                            lang: localStorage.lang || "en-us"
                                        }
                                    }).then(function(t) {
                                        var e = t.data;
                                        e.success && e.data && (r.innerHTML = n.i(A.d)("coin_detail_tmp", {
                                            fullName: e.data.fullName,
                                            summary: e.data.summary,
                                            publishTime: e.data.publishTime,
                                            publishVolume: e.data.publishVolume,
                                            circulateVolume: e.data.circulateVolume,
                                            crowdfundingPrice: e.data.crowdfundingPrice,
                                            whitePaper: e.data.whitePaper,
                                            officialWebsite: e.data.officialWebsite,
                                            blockQuery: e.data.blockQuery
                                        }))
                                    })
                                }), vt.Ready(function() {
                                    mt || (mt = n.i(J.a)({
                                        key: localStorage.getItem(ut)
                                    }))
                                }), vt.Ready(function() {
                                    n.i(X.a)(), n.i(tt.a)(), "exchange" !== TRADE_TYPE || A.i.get("HB-PRO-TOKEN") || A.i.get("otc_guide") || Lt(), [].forEach.call(vt.querySelectorAll(".mod_show_btn"), function(t) {
                                        var e = 0;
                                        A.f.add(t, "click", function(t) {
                                            var a = A.f.target(t),
                                                i = n.i(A.l)(a, "mod", !0);
                                            e = e || i.offsetHeight, i.style.height = e + "px", A.k.hasClass(i, "hide") ? A.k.removeClass(i, "hide") : A.k.addClass(i, "hide"), setTimeout(function() {
                                                return i.style.height = ""
                                            }, 150)
                                        })
                                    })
                                }), Zt = {}, n.i(A.h)(c, Zt), A.f.add(document, "click", function(t) {
                                    var e = A.f.target(t),
                                        a = n.i(A.g)(e, "action"),
                                        i = n.i(A.g)(e, "stop"),
                                        o = n.i(A.g)(e, "data-currency");
                                    i && A.f.stop(t), a && Zt[a.attr] && Zt[a.attr](a.node, o && o.attr), !a && Zt.showChartMask()
                                }), A.f.add(document, "click", function(t) {
                                    var e = A.f.target(t),
                                        n = e.dataset.action,
                                        a = location.pathname;
                                    n && A.f.stop(t), "go_login" == n && (location.href = "/login/?backUrl=" + a), "go_register" == n && (location.href = "/register/?backUrl=" + a)
                                }), n.i(A.t)(function() {
                                    if (mt && Qt && (mt.usdrate = Qt), "margin" == it && vt.marginAccounts) {
                                        if (_t++ % n.i(A.F)(10)) return;
                                        Ot(), vt.marginAccounts.coin[0].innerHTML = K.a.marginBalance.trade ? n.i(A.b)(K.a.marginBalance.trade[PAGE_QUOTE], K.a.currencyDataObj[PAGE_QUOTE]["show-precision"]) : n.i(A.b)(0, K.a.currencyDataObj[PAGE_QUOTE]["show-precision"]), vt.marginAccounts.coin[1].innerHTML = K.a.marginBalance.trade ? n.i(A.b)(K.a.marginBalance.trade[PAGE_COIN], K.a.currencyDataObj[PAGE_COIN]["show-precision"]) : n.i(A.b)(0, K.a.currencyDataObj[PAGE_COIN]["show-precision"]);
                                        var t;
                                        t = !K.a.marginBalance["fl-price"] || 1 * K.a.marginBalance.loan[PAGE_COIN] == 0 && 1 * K.a.marginBalance.loan[PAGE_QUOTE] == 0 ? vt.marginAccounts.coin[2].dataset.text : 1 * K.a.marginBalance["fl-price"] == 0 ? 0 : n.i(A.b)(K.a.marginBalance["fl-price"], Q.precision.price), vt.marginAccounts.coin[2].innerHTML = t, K.a.marginBalance["risk-rate"] ? K.a.marginFlState[K.a.marginBalance.state] ? (vt.marginAccounts.percent.style.display = "none", vt.marginAccounts.fire.style.display = "block") : (vt.marginAccounts.percent.style.display = "", vt.marginAccounts.fire.style.display = "none", K.a.marginBalance["risk-rate"] >= 1.1 ? vt.marginAccounts.percent.style.width = (K.a.marginBalance["risk-rate"] - 1.1) / .9 * 100 + "%" : vt.marginAccounts.percent.style.width = 0, vt.marginAccounts.riskVal.innerHTML = K.a.marginBalance["risk-rate"] >= 2 ? vt.marginAccounts.riskVal.dataset.text : n.i(A.b)(100 * K.a.marginBalance["risk-rate"], 0) + "%") : (vt.marginAccounts.percent.style.display = "", vt.marginAccounts.fire.style.display = "none", vt.marginAccounts.percent.style.width = "100%", vt.marginAccounts.riskVal.innerHTML = vt.marginAccounts.riskVal.dataset.text)
                                    }
                                }), Ot(), vt.Ready(function() {
                                    var t = document.querySelector("#exchange_image"),
                                        e = t.querySelectorAll("img");
                                    [].forEach.call(e, function(t) {
                                        return t.src = t.dataset.src
                                    }), "exchange" === it && (t.style.display = "block")
                                }), n.i(M.b)(G.a.__ready, {
                                    needTicket: !1
                                });
                            case 90:
                            case "end":
                                return t.stop()
                        }
                    }, t, this)
                }));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            it = window.PAGE_NAME || "exchange",
            ot = {
                checked: 1
            };
        window.zEmbed = 1;
        var rt = {
                margin: {
                    cookies_hash: "HBP_MARGIN_SYMBOLS_HASH",
                    cookies_filter: "HBP_MARGIN_SYMBOLS_FILTER"
                },
                exchange: {
                    cookies_hash: "HBP_SYMBOLS_HASH",
                    cookies_filter: "HBP_SYMBOLS_FILTER"
                }
            },
            ct = {
                innovation: "NEW_ZONE",
                profession: "PRO_ZONE",
                bifurcation: "FORK_ZONE",
                ht: "HT"
            },
            st = rt[it].cookies_hash,
            ut = rt[it].cookies_filter,
            lt = {
                rate: "---"
            },
            dt = {
                ethbtc: 6,
                etcbtc: 6,
                ltcbtc: 6,
                bccbtc: 6
            },
            pt = (B.a.handsup(I.c.ws), new Q.a),
            ft = void 0,
            mt = void 0,
            gt = document.title,
            _t = 0;
        n.i(M.a)("__userIsLogin", function(t) {
            function e() {
                n = setTimeout(function() {
                    q.a.Get([]), e()
                }, 2e4)
            }
            ot.checked = 0;
            var n = void 0;
            t.info && (q.a.Get([]), "margin" === it && i(), e())
        }), n.i(M.a)("__ucGetUserInfo", function() {
            var t = E()(T.a.mark(function t(e) {
                var a, o, r, c, s, u, l, d, p, f, m, g, _, v, b = e.info;
                return T.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (s = function(t) {
                                    if (t) {
                                        var e = [183];
                                        return t.filter(function(t) {
                                            return e.includes(1 * t)
                                        }).length
                                    }
                                }, a = PAGE_COIN + PAGE_QUOTE, o = K.a.symbolDataObj[a]["symbol-partition"], r = ct[o], c = "ht" === PAGE_COIN && ct.ht, "margin" !== it) {
                                t.next = 27;
                                break
                            }
                            return i(), t.next = 6, n.i(C.f)();
                        case 6:
                            if (u = t.sent, l = u.data, !l.success) {
                                t.next = 25;
                                break
                            }
                            return t.next = 11, n.i(C.u)({
                                data: {
                                    method: "login",
                                    ticket: l.data.ticket
                                }
                            });
                        case 11:
                            return d = t.sent, p = d.data, "ok" === p.status && A.i.set({
                                name: "HB-OLD-TOKEN",
                                value: p.data.token,
                                domain: n.i(q.b)(),
                                path: "/"
                            }), t.next = 16, n.i(C.v)({
                                headers: {
                                    "HB-OLD-TOKEN": p.data.token
                                },
                                data: {
                                    method: "get_auth_pro_status"
                                }
                            });
                        case 16:
                            return f = t.sent, m = f.data, t.next = 20, n.i(C._5)();
                        case 20:
                            g = t.sent, _ = g.data, v = void 0, _.success && (v = _.data.country_id), s(b.data.country_id) ? n.i(R.e)({
                                lang: {},
                                title: "提示",
                                block: "disable_margin",
                                btn: 0
                            }) : 1 * m.data != 2 && v && s([v]) ? n.i(R.e)({
                                lang: {},
                                title: "提示",
                                block: "disable_margin_ip",
                                btn: 1,
                                hiddenClose: !0,
                                success: function() {
                                    location.href = "/user_center/uc_auth/"
                                }
                            }) : n.i($.a)("MARGIN");
                        case 25:
                            t.next = 28;
                            break;
                        case 27:
                            r ? n.i($.a)(r, c) : c && n.i($.a)(c);
                        case 28:
                        case "end":
                            return t.stop()
                    }
                }, t, nt)
            }));
            return function(e) {
                return t.apply(this, arguments)
            }
        }()), n.i(M.a)("__changeTheme", function(t) {
            var e = t.info;
            tvWidget.setTheme(e)
        });
        var vt = new F.a;
        at()
    },
    38: function(t, e) {
        t.exports = '<%\n\tvar lang = __data.lang ||new Function,\n\t\tbtn = __data.btn ||{},\n\t\tpage = __data.page||{};\n%>\n<div class="dialog" growing-ignore="true">\n\t<div class="dia_tit">\n\t\t<div><b><%=lang(page.title)%><%= page.titleExt ? lang(page.titleExt) : ""%></b><span class="close" id="dia_close">×</span>\n\t\t</div>\n\t\t<p  data="dia_title" class="dia_tit_more"><%= page.titleMore ? lang(page.titleMore) : ""%></p>\n\t</div>\n\t<div class="dia_content">block_dia_content</div>\n\n\t<% if(btn && typeof btn == "object"){ %>\n\t\t<div class="dia_submit">\n\t\t\t<span class="error_notice"></span>\n\t\t\t<% if(btn.cancel) { %>\n\t\t\t\t<button class="btn_cancel" pro_name="btn_cancel">\n\t\t\t\t\t<%=lang(btn.cancel)%>\n\t\t\t\t</button>\n\t\t\t<% }%>\n\t\t\t<% if(btn.submit) { %>\n\t\t\t\t<button class="btn btn_submit btn-primary" pro_name="btn_submit">\n\t\t\t\t\t<%=lang(btn.submit)%>\n\t\t\t\t</button>\n\t\t\t<% }%>\n\t\t</div>\n\t\t<% }else if(typeof btn == "string") {%>\n\t\t\t<%=btn%>\n\t\t\t\t<% }%>\n\n</div>\n<div class="dialog_extra"></div>\n'
    },
    39: function(t, e, n) {
        "use strict";
        var a = n(14),
            i = n.n(a),
            o = n(50),
            r = (n.n(o), n(57)),
            c = n.n(r),
            s = n(23),
            u = (n.n(s), n(4)),
            l = n(0),
            d = n(17),
            p = n(1),
            f = n(2),
            m = n(5),
            g = n(19),
            _ = new g.a({
                tryVoice: 3,
                countTime: 60,
                api: p.A
            }),
            v = new g.a({
                countTime: 60,
                api: p.B
            }),
            b = n.i(l.n)(),
            h = n.i(l.o)(c.a),
            y = void 0,
            k = void 0,
            w = new f.a;
        e.a = function() {
            function t(t) {
                return t && t(), y.Open(), y
            }

            function e(t) {
                g = t, b._keys(t.lang), T = 0, O = 0;
                var e = {
                    lang: b.getLang,
                    currency: t.currency,
                    action_type: t.action,
                    page: {
                        title: t.title
                    },
                    resetPwd: m.c.main + "/p/user/securityCenter/resetAssetPwd",
                    btn: {
                        submit: b.getLang("确定")
                    },
                    UI: window.UI,
                    no_verify: t.no_verify,
                    addr_tag: t.addr_tag,
                    address: t.no_verify && t.address
                };
                y = y || new u.a({
                    html: n.i(l.d)(n.i(u.b)(h.html).html, e)
                }), x = null, k && (y.dialog.innerHTML = n.i(l.d)(n.i(u.b)(h.html).fc, e)), E = n.i(l.u)(y.dialog.querySelectorAll("input")).concat(n.i(l.u)(y.dialog.querySelectorAll("button"))), E.forEach(function(t) {
                    n.i(l.h)(d.a, t)
                }), !k && l.f.add(y.dialog, "click", c), !k && y.callback(a), k = 1, x = n.i(d.b)(E), x.dom.pro_dia_address_address.disabled = !0, x.dom.pro_dia_address_address.value = e.no_verify && e.address ? e.address : ""
            }

            function a(t) {
                var e = {};
                if (!O) {
                    if ("submit" == t.type) {
                        if (x = n.i(d.b)(E), !x.data.pro_dia_address_address && x.dom.pro_dia_address_address) return x.dom.pro_dia_address_address.error(g.currency.toUpperCase() + " " + b.getLang("提币地址没有填写"));
                        if (!x.data.pro_dia_address_alias && x.dom.pro_dia_address_alias) return x.dom.pro_dia_address_alias.error(b.getLang("名称没有填写"));
                        if (!x.data.sms_code && x.dom.sms_code) return x.dom.sms_code.error(b.getLang("短信验证码没有填写"));
                        if (!L && x.dom.email_code) return x.dom.email_code.error(b.getLang("请先获取邮箱验证码"));
                        if (!x.data.email_code && x.dom.email_code) return x.dom.email_code.error(b.getLang("请输入邮箱验证码"));
                        if (!x.data.ga_code && x.dom.ga_code) return x.dom.ga_code.error(b.getLang("谷歌验证码没有填写"));
                        x.data.sms_code && (e.smsCode = x.data.sms_code), x.data.ga_code && (e.gaCode = x.data.ga_code), x.data.email_code && (e.emailCode = x.data.email_code), g.no_verify ? delete p.F.defaults.headers.common.authData : p.F.defaults.headers.common.authData = encodeURIComponent(i()(e)), O = 1, "add_address" == g.action ? n.i(p.G)({
                            data: {
                                address: x.data.pro_dia_address_address,
                                tag: g.addr_tag || null,
                                alias: x.data.pro_dia_address_alias,
                                currency: g.currency,
                                level: "default"
                            }
                        }).then(function(t) {
                            var e = t.data;
                            O = 0, "ok" === e.status ? (y.Close(), g.goback && g.goback()) : w.Error(t.data["err-msg"])
                        }) : g.goback && g.goback(x, function() {
                            O = 0
                        }, y.Close)
                    }
                    "close" == t.type && (_.Reset(), v.Reset())
                }
            }

            function o() {}

            function r() {}

            function c(t) {
                var e = l.f.target(t),
                    a = n.i(l.g)(e, "action");
                n.i(l.g)(e, "stop") && l.f.stop(t), a && S[a.attr] && S[a.attr](a.node, e, y.dialog)
            }

            function s() {
                var t = this;
                t.getSms = function(t) {
                    t.dataset.voice;
                    _.btn = y.dialog.querySelector('[act="sms_btn_wrap"]'), _.btnText = ['<a href="" action="getSms" stop="1">' + b.getLang("点击获取") + "</a>", "<span>$" + b.getLang("秒后重试") + "</span>", '<a href="" action="getSms" stop="1">' + b.getLang("重新获取") + "</a>", '<a href="" action="getSms" stop="1">' + b.getLang("重新获取") + "</a> " + b.getLang("或者试试") + ' <a href="" action="getSms" stop="1" data-voice="1">' + b.getLang("语音验证码") + "</a>"], _.Send({
                        use_type: "VERIFY_SETTING_POLICY"
                    })
                }, t.getEmail = function(t) {
                    v.btn = y.dialog.querySelector('[act="email_btn_wrap"]'), v.btnText = ['<a href="" action="getEmail" stop="1">' + b.getLang("点击获取") + "</a>", "<span>$" + b.getLang("秒后重试") + "</span>", '<a href="" action="getEmail" stop="1">' + b.getLang("重新获取") + "</a>", '<a href="" action="getEmail" stop="1">' + b.getLang("重新获取") + "</a>"], v.Send({
                        use_type: "VERIFY_SETTING_POLICY"
                    })
                }, v.Then = function(t) {
                    var e = t.data;
                    e.success ? (L = 1, x && x.dom.email_code.clear()) : w.Error(e.message)
                }, _.Then = function(t) {
                    var e = t.data;
                    e.success ? (T = 1, x && x.dom.sms_code.clear()) : w.Error(e.message)
                }
            }

            function f(t, e, n) {
                return b._keys(e), {
                    del: b.getLang("删除安全地址")
                }[n] || b.getLang("添加提币地址")
            }
            var g = void 0,
                S = {},
                T = void 0,
                L = void 0,
                E = void 0,
                x = void 0,
                O = void 0;
            return n.i(l.h)(s, S), {
                open: t,
                title: f,
                construct: e,
                updateData: o,
                callUpdate: r
            }
        }()
    },
    4: function(t, e, n) {
        "use strict";

        function a(t) {
            function e(t) {
                a.cbList.forEach(function(e) {
                    "function" == typeof e && e(t)
                })
            }
            var n = arguments,
                a = this,
                i = t || {};
            return a.cbList = [], a.html = i.html || "", a.state = "close", a.Open = function() {
                a.dialog.style.display = "block", a.state = "open";
                var t = {
                    type: "open",
                    arg: [].slice.apply(arguments)
                };
                e(t), a.Then && a.Then(t)
            }, a.Close = function(t) {
                a.dialog.style.display = "none", a.state = "close";
                var n = {
                    type: "close",
                    driver: t ? "inhuman" : "unhuman",
                    arg: [].slice.apply(arguments)
                };
                e(n), a.Then && a.Then(n)
            }, a.Submit = function() {
                var t = {
                    type: "submit"
                };
                e(t), a.Then && a.Then(t)
            }, a.Render = function(t) {
                a.dialog && (a.dialog.innerHTML = t)
            }, a.callback = function(t) {
                a.cbList.push(t)
            }, a.dialog = new o.b(a.html, "body"), a.dialog.style.display = "none", a.closeBtn = a.dialog.querySelector(".close"), r.f.add(a.dialog, "click", function(t) {
                var e = r.f.target(t);
                (e.className.toString().indexOf("close") > -1 || e.className.toString().indexOf("cancel") > -1) && a.Close(1), e.className.toString().indexOf("btn_submit") > -1 && a.Submit()
            }), r.f.add(document, "keyup", function(t) {
                if ("open" === a.state) {
                    if (13 === t.keyCode) {
                        var i = {
                            type: "enter",
                            arg: [].slice.apply(n)
                        };
                        e(i), a.Then && a.Then(i)
                    }
                    27 === t.keyCode && a.Close()
                }
            }), a
        }

        function i(t) {
            var e = s.a.split("block_dia_content");
            return {
                fc: e[0] + t + e[1],
                html: '<div class="dialog_wrap">' + e[0] + t + e[1] + "</div>"
            }
        }
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return i
        });
        var o = n(9),
            r = n(0),
            c = n(38),
            s = n.n(c)
    },
    40: function(t, e, n) {
        "use strict";
        var a = n(27),
            i = n.n(a),
            o = n(51),
            r = (n.n(o), n(58)),
            c = n.n(r),
            s = n(4),
            u = n(0),
            l = n(5),
            d = n(1),
            p = n(19),
            f = n(2),
            m = n(17),
            g = n.i(u.n)(),
            _ = n.i(u.o)(c.a),
            v = void 0,
            b = void 0,
            h = {
                btc: "/index.php?a=btc_",
                ltc: "/index.php?a=ltc_"
            },
            y = new f.a,
            k = void 0,
            w = void 0,
            S = new p.a({
                tryVoice: 3,
                countTime: 60,
                api: d.A
            }),
            T = new p.a({
                countTime: 60,
                api: d.B
            });
        e.a = function() {
            function t(t, e) {
                return A = e, t && t(v.dialog), v.Open(), v
            }

            function e(t) {
                return v.Close(t), v
            }

            function a(t) {
                var e = t.block || "loading",
                    a = {
                        PHONE: "关闭手机验证后24小时内禁止提币。",
                        EMAIL: "关闭邮箱验证后24小时内禁止提币。",
                        GA: "关闭谷歌验证器验证后24小时内禁止提币。"
                    };
                L = t, g._keys(t.lang), k = null, w = 0;
                var i = {
                    lang: g.getLang,
                    item: L.item,
                    data: L.data,
                    currency: t.currency,
                    page: {
                        title: g.getLang(t.title),
                        titleMore: "disable" == L.action ? g.getLang(a[L.itemkey]) : ""
                    },
                    huobifinance: h[t.currency] ? l.c.main + "/" + e.replace("gohuobi", "") + h[t.currency] + e.replace("gohuobi", "") : l.c.main + "/finance/innovate/",
                    btn: !!t.btn && (1 == t.btn ? {
                        submit: g.getLang("确定")
                    } : {
                        cancel: g.getLang("取消"),
                        submit: g.getLang("确定")
                    })
                };
                return v = v || new s.a({
                    html: n.i(u.d)(n.i(s.b)(_.html).html, i)
                }), b && (v.dialog.innerHTML = n.i(u.d)(n.i(s.b)(_.html).fc, i)), I = v.dialog.querySelector("#dia_close"), I.style.display = L.hiddenClose ? "none" : "", v.dialog.querySelector('[block="content"]').innerHTML = n.i(u.d)(_.block[e], L.content || i), !b && !L.stopEvent && u.f.add(v.dialog, "click", o), v.callback(r), b = 1, E = n.i(u.u)(v.dialog.querySelectorAll("input")).concat(n.i(u.u)(v.dialog.querySelectorAll("button"))), E.forEach(function(t) {
                    "pro_dia_address_amount" === t.getAttribute("pro_name") && (u.f.add(t, "keydown", function() {
                        v.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[L.currency]["show-precision"])
                    }), u.f.add(t, "keyup", function() {
                        v.dialog.querySelector('[amout="out_amount"]').innerHTML = Num(1 * t.value ? 1 * t.value : 0, STORE.currencyDataObj[L.currency]["show-precision"])
                    })), n.i(u.h)(m.a, t)
                }), S.btn = v.dialog.querySelector('[act="sms_btn_wrap"]'), S.btnText = ['<a href="" action="getSms" stop="1">' + g.getLang("点击获取") + "</a>", "<span>$" + g.getLang("秒后重试") + "</span>", '<a href="" action="getSms" stop="1">' + g.getLang("重新获取") + "</a>", '<a href="" action="getSms" stop="1">' + g.getLang("重新获取") + "</a> " + g.getLang("或者试试") + ' <a href="" action="getSms" stop="1" data-voice="1">' + g.getLang("语音验证码") + "</a>"], T.btn = v.dialog.querySelector('[act="email_btn_wrap"]'), T.btnText = ['<a href="" action="getEmail" stop="1">' + g.getLang("点击获取") + "</a>", "<span>$" + g.getLang("秒后重试") + "</span>", '<a href="" action="getEmail" stop="1">' + g.getLang("重新获取") + "</a>", '<a href="" action="getEmail" stop="1">' + g.getLang("重新获取") + "</a>"], L.fired && (T.fire(), S.fire()), setTimeout(function() {
                    v.dialog.querySelector("[pro_name=auth_code]") && v.dialog.querySelector("[pro_name=auth_code]").focus()
                }, 100), v
            }

            function o(t) {
                var e = u.f.target(t),
                    a = n.i(u.g)(e, "action");
                n.i(u.g)(e, "stop") && u.f.stop(t), a && f[a.attr] && f[a.attr](a.node, e, v.dialog)
            }

            function r(t) {
                var a = {};
                if (!w) {
                    if ("submit" == t.type || "enter" == t.type) {
                        if (k = n.i(m.b)(E), !x && k.dom.sms_code) return k.dom.sms_code.error(g.getLang("请先获取短信验证码"));
                        if (!k.data.sms_code && k.dom.sms_code) return k.dom.sms_code.error(g.getLang("短信验证码没有填写"));
                        if (!O && k.dom.email_code) return k.dom.email_code.error(g.getLang("请先获取邮箱验证码"));
                        if (!k.data.email_code && k.dom.email_code) return k.dom.email_code.error(g.getLang("请输入邮箱验证码"));
                        if (!k.data.ga_code && k.dom.ga_code) return k.dom.ga_code.error(g.getLang("谷歌验证码没有填写"));
                        if (!k.data.auth_code && k.dom.auth_code) return k.dom.auth_code.error(g.getLang("验证码没有填写"));
                        k.data.sms_code && (a.sms_code = k.data.sms_code), k.data.ga_code && (a.ga_code = k.data.ga_code), k.data.email_code && (a.email_code = k.data.email_code), k.data.auth_code && (a.auth_code = k.data.auth_code), w = 1, "verify" === L.action ? n.i(d.C)({
                            data: i()({
                                use_type: L.use_type
                            }, a)
                        }).then(function(t) {
                            var n = t.data;
                            n.success ? (L.success && L.success(n.data, v, a), e()) : (w = 0, y.Error(n.message))
                        }) : L.success && L.success(i()({
                            use_type: L.use_type || "VERIFY_SETTING_POLICY"
                        }, a), v, function(t) {
                            w = 0, !t && e()
                        })
                    }
                    "close" == t.type && (S.Reset(), T.Reset(), L.dialogCloseAfter && L.dialogCloseAfter())
                }
            }

            function c() {
                var t = this;
                t.close = e, t.btn_submit = function() {
                    A && A(v)
                }, t.getSms = function(t) {
                    var e = !!t.dataset.voice,
                        n = {
                            use_type: L.use_type || "VERIFY_SETTING_POLICY",
                            voice: e
                        };
                    "LOGIN" === L.use_type && (n.token = L.data.token), S.Send(n)
                }, t.getEmail = function(t) {
                    var e = {
                        use_type: L.use_type || "VERIFY_SETTING_POLICY"
                    };
                    "LOGIN" === L.use_type && (e.token = L.data.token), T.Send(e)
                }, T.Then = function(t) {
                    var e = t.data;
                    e.success ? (O = 1, k && k.dom.email_code.clear()) : y.Error(e.message)
                }, S.Then = function(t) {
                    var e = t.data;
                    e.success ? (x = 1, k && k.dom.sms_code.clear()) : y.Error(e.message)
                }
            }

            function p(t, e) {
                return g._keys(e), g.getLang("安全验证")
            }
            var f = {},
                L = void 0,
                E = void 0,
                x = void 0,
                O = void 0,
                I = void 0,
                A = void 0;
            return n.i(u.h)(c, f), {
                title: p,
                open: t,
                close: e,
                construct: a
            }
        }()
    },
    41: function(t, e, n) {
        "use strict";
        var a = n(77),
            i = n.n(a),
            o = n(52),
            r = (n.n(o), n(59)),
            c = n.n(r),
            s = n(4),
            u = n(0),
            l = n(3),
            d = n(1),
            p = n(12),
            f = n(17),
            m = n(2),
            g = void 0,
            _ = n.i(u.n)(),
            v = new m.a,
            b = n.i(u.o)(c.a),
            h = void 0,
            y = void 0,
            k = {
                "en-us": "/notice_detail/?id=647",
                "zh-cn": "/zh-cn/notice_detail/?id=648"
            };
        e.a = function() {
            function t(t) {
                S(), t && t(), g.Open()
            }

            function e(t) {
                T = t, O = {
                    currency: {},
                    scoin: []
                }, y = 0, _._keys(t.lang), O.currency = {
                    coin: t.currency,
                    amount: null
                }, t.scoin && t.scoin.forEach(function(t) {
                    O.scoin.push({
                        coin: t,
                        amount: null
                    })
                });
                var e = localStorage.getItem("lang") || "en-us",
                    a = k["zh-cn" === e || "en-us" === e ? e : "en-us"],
                    i = {
                        currency: t.currency,
                        scoin: t.scoin,
                        act: x,
                        amount: 0,
                        lang: _.getLang,
                        page: {
                            title: t.title,
                            titleExt: '<a class="help_link" href="' + a + '" target="_blank">' + _.getLang("了解更多？") + "</a>"
                        },
                        btn: {
                            cancel: _.getLang("取消"),
                            submit: _.getLang("转换")
                        }
                    };
                h = t.currencys || h, g = g || new s.a({
                    html: n.i(u.d)(n.i(s.b)(b.html).html, i)
                }), L && (g.dialog.innerHTML = n.i(u.d)(n.i(s.b)(b.html).fc, i)), q = g.dialog.querySelectorAll("dl"), A = g.dialog.querySelectorAll("em"), I = n.i(u.u)(g.dialog.querySelectorAll("input")).concat(n.i(u.u)(g.dialog.querySelectorAll("button"))), I.forEach(function(t) {
                    n.i(u.h)(f.a, t)
                });
                var r = n.i(f.b)(I),
                    l = i.amount,
                    d = i.currency.toUpperCase(),
                    v = i.scoin.map(function(t) {
                        return l + " " + t.toUpperCase()
                    }).join(" + ");
                l && (x ? (r.dom.pro_dia_from.value = l + " " + d, r.dom.pro_dia_to.value = v) : (r.dom.pro_dia_from.value = v, r.dom.pro_dia_to.value = l + " " + d)), !L && u.f.add(g.dialog, "click", o), !L && n.i(u.t)(c), L = 1, g.callback(m), p.a.Get(h)
            }

            function a() {
                if (!T || null === O.currency.amount) return setTimeout(a, 200);
                A[0].innerHTML = n.i(u.b)(O.min, T.currency_obj[O.currency.coin]["show-precision"]), A[1].innerHTML = n.i(u.b)(O.currency.amount, T.currency_obj[O.currency.coin]["show-precision"])
            }

            function o(t) {
                var e = u.f.target(t),
                    a = n.i(u.g)(e, "action");
                n.i(u.g)(e, "stop") && u.f.stop(t), a && E[a.attr] && E[a.attr](a.node, e, g.dialog)
            }

            function r() {
                var t = this;
                t.switch_dir = function(t, e, n) {
                    var a = [q[0].className, q[1].className];
                    q[0].className = a[1], q[1].className = a[0], x = !x, I[0].value = ""
                }, t.allIn = function(t, e, a) {
                    1 * n.i(u.b)(x ? O.currency.amount : O.min, T.currency_obj[O.currency.coin]["show-precision"]) && (I[0].value = n.i(u.b)(x ? O.currency.amount : O.min, T.currency_obj[O.currency.coin]["show-precision"]))
                }
            }

            function c() {
                var t = {
                        currency: T.currency,
                        scoin: T.scoin,
                        act: x,
                        amount: 1 * I[0].value || 0
                    },
                    e = n.i(f.b)(I),
                    a = t.amount,
                    i = t.currency.toUpperCase(),
                    o = t.scoin.map(function(t) {
                        return a + " " + t.toUpperCase()
                    }).join(" + ");
                a ? x ? (e.dom.pro_dia_from.value = a + " " + i, e.dom.pro_dia_to.value = o) : (e.dom.pro_dia_from.value = o, e.dom.pro_dia_to.value = a + " " + i) : (e.dom.pro_dia_from.value = "", e.dom.pro_dia_to.value = "")
            }

            function m(t) {
                if (!y && "submit" == t.type) {
                    var e = n.i(f.b)(I),
                        a = x ? d.D : d.E;
                    if (!e.data.pro_dia_amount) return e.dom.pro_dia_amount.error(_.getLang("请先输入数量"));
                    y = 1, a({
                        data: {
                            amount: e.data.pro_dia_amount,
                            currency: T.currency
                        }
                    }).then(function(t) {
                        return y = 0, "ok" === t.data.status ? (I[0].value = "", g.Close(), setTimeout(function() {
                            getPageCallback("updateFinanceList") && getPageCallback("updateFinanceList")()
                        }, 500), v.Show(_.getLang("分叉转币成功"))) : v.Error(t.data["err-msg"])
                    })
                }
            }

            function w(t, e) {
                return _._keys(e), _.getLang("分叉币转换_title")
            }

            function S() {
                var t = document.querySelector(".dia_ticket");
                t && (t.parentElement.style.overflow = "visible")
            }
            var T = void 0,
                L = void 0,
                E = {},
                x = 1,
                O = {
                    currency: {},
                    scoin: []
                },
                I = void 0,
                A = void 0,
                q = void 0;
            return n.i(u.h)(r, E), n.i(l.a)("__getUserBalance", function(t) {
                var e = t.info,
                    n = i.a;
                e && (e = e.trade, O.currency.amount = 1 * e[O.currency.coin], O.scoin.forEach(function(t) {
                    n = Math.min(n, 1 * e[t.coin]), t.amount = 1 * e[t.coin]
                }), O.min = n, a())
            }), {
                open: t,
                title: w,
                construct: e
            }
        }()
    },
    42: function(t, e, n) {
        "use strict";
        var a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(16),
            s = (n.n(c), n(60)),
            u = n.n(s),
            l = n(4),
            d = n(0),
            p = (n(13), n(1), n(2)),
            f = (n(6), n(21)),
            m = n.i(d.n)(),
            g = n.i(d.o)(u.a),
            _ = new p.a,
            v = void 0,
            b = void 0,
            h = void 0,
            y = void 0,
            k = void 0,
            w = void 0,
            S = void 0,
            T = void 0,
            L = void 0;
        e.a = function() {
            function t(e) {
                b.dialog.querySelector('button[pro_name="btn_submit"]').disabled = !1, v = 0, S ? (e && e(), b.Open(), S.inited ? S.Reload(h.data.token) : S.Init({
                    renderTo: "#ali_captcha",
                    appkey: "FFFF0000000001796AA8",
                    token: h.data.token,
                    scene: "activity",
                    callback: function(t) {
                        T = t
                    }
                })) : setTimeout(function() {
                    t(e)
                }, 100)
            }

            function e(t) {
                return b && b.Close(t), b
            }

            function a(t) {
                w = 0, h = t, m._keys(t.lang), y = {
                    lang: m.getLang,
                    data: t.data,
                    page: {
                        title: t.title
                    },
                    btn: {
                        submit: m.getLang("确定")
                    }
                }, b = b || new l.a({
                    html: n.i(d.d)(n.i(l.b)(g.html).html, y)
                }), !k && d.f.add(b.dialog, "click", s), k = 1, b.callback(p), o()
            }

            function o() {
                b.dialog.querySelector('[block="content"]').innerHTML = n.i(d.d)(g.block.content, y), c(180)
            }

            function c(t) {
                if (t < 0) return v = 1, void(b.dialog.querySelector('button[pro_name="btn_submit"]').disabled = !0);
                L && clearTimeout(L), L = null, L = setTimeout(function() {
                    c(t - 1)
                }, 1e3), b.dialog.querySelector('p[data="dia_title"]').innerHTML = n.i(d.d)(g.block.dia_title, {
                    n: t,
                    lang: m.getLang
                })
            }

            function s(t) {
                var e = d.f.target(t),
                    a = n.i(d.g)(e, "action");
                n.i(d.g)(e, "stop") && d.f.stop(t), a && O[a.attr] && O[a.attr]()
            }

            function u() {}

            function p(t) {
                if (!v && !w && "submit" === t.type) return T ? void(h.success && (w = 1, h.success(T, function() {
                    e(), w = 0, T = null
                }))) : _.Error(LANG.dialog["请先拖动滑块验证"], 2e3)
            }

            function E(t) {
                return m._keys(t), m.getLang("购买点卡支付确认")
            }
            var x = function() {
                    var t = r()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.t0 = S, t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, n.i(f.a)();
                                case 4:
                                    t.t0 = t.sent;
                                case 5:
                                    S = t.t0;
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                O = {};
            return n.i(d.h)(u, O), x(), {
                open: t,
                title: E,
                construct: a
            }
        }()
    },
    43: function(t, e, n) {
        "use strict";
        var a = n(16),
            i = (n.n(a), n(61)),
            o = n.n(i),
            r = n(4),
            c = n(0),
            s = (n(13), n(1), n(2)),
            u = (n(6), n.i(c.n)()),
            l = n.i(c.o)(o.a),
            d = (new s.a, void 0),
            p = void 0,
            f = void 0,
            m = void 0,
            g = void 0;
        e.a = function() {
            function t(t) {
                t && t(), d.Open()
            }

            function e(t) {
                return d && d.Close(t), d
            }

            function a(t) {
                g = 0, p = t, u._keys(t.lang), f = {
                    Num: c.b,
                    lang: u.getLang,
                    data: t.data,
                    page: {
                        title: t.title
                    },
                    btn: {
                        submit: u.getLang("确定")
                    }
                }, d = d || new r.a({
                    html: n.i(c.d)(n.i(r.b)(l.html).html, f)
                }), !m && c.f.add(d.dialog, "click", o), m = 1, d.callback(_), i()
            }

            function i() {
                d.dialog.querySelector('[block="content"]').innerHTML = n.i(c.d)(l.block[p.block], f), "transfer_in" != p.block && "transfer_out" != p.block || (d.dialog.querySelector('p[data="dia_title"]').innerHTML = n.i(c.d)(l.block.dia_title, {
                    lang: u.getLang
                }))
            }

            function o(t) {
                var e = c.f.target(t),
                    a = n.i(c.g)(e, "action");
                n.i(c.g)(e, "stop") && c.f.stop(t), a && b[a.attr] && b[a.attr]()
            }

            function s() {}

            function _(t) {
                g || "submit" === t.type && p.success && (g = 1, p.success(function() {
                    e(), g = 0
                }))
            }

            function v(t, e) {
                var n = {
                    transfer_out: "点卡转让确认",
                    transfer_in: "点卡接收确认"
                };
                return u._keys(t), u.getLang(n[e])
            }
            var b = {};
            return n.i(c.h)(s, b), {
                open: t,
                title: v,
                construct: a
            }
        }()
    },
    44: function(t, e, n) {
        "use strict";
        var a = n(54),
            i = (n.n(a), n(63)),
            o = n.n(i),
            r = n(4),
            c = n(0),
            s = n(13),
            u = n(1),
            l = n(2),
            d = n(6),
            p = new d.a,
            f = new l.a,
            m = void 0,
            g = n.i(c.n)(),
            _ = n.i(c.o)(o.a),
            v = void 0,
            b = void 0,
            h = void 0,
            y = void 0,
            k = void 0,
            w = void 0,
            S = {};
        e.a = function() {
            function t(e) {
                y ? (e && e(), m.Open()) : setTimeout(function() {
                    t(e)
                }, 100)
            }

            function e(t) {
                w = 0, t.order = JSON.parse(t.order), v = t, g._keys(t.lang), b = {
                    cash: S,
                    lang: g.getLang,
                    add: s.b,
                    order: t.order,
                    symbols: STORE.symbolDataObj[t.order.symbol]["symbol-name"],
                    page: {
                        title: t.title
                    },
                    btn: {
                        cancel: g.getLang("取消"),
                        submit: g.getLang("确定")
                    }
                }, m = m || new r.a({
                    html: n.i(c.d)(n.i(r.b)(_.html).html, b)
                }), a(), !h && c.f.add(m.dialog, "click", o), h = 1, m.callback(d)
            }

            function a() {
                n.i(u.e)({
                    params: {
                        symbol: v.order.symbol
                    }
                }).then(function(t) {
                    var e = t.data;
                    "ok" === e.status && i(e.data[0])
                })
            }

            function i(t) {
                t ? t.list.forEach(function(t) {
                    S[t.currency] = "trade" === t.type ? t.balance : S[t.currency]
                }) : (S[v.quote] = 0, S[v.base] = 0), y = 1, m.dialog.innerHTML = n.i(c.d)(n.i(r.b)(_.html).fc, b), k = m.dialog.querySelector('input[flag="amt"]'), c.f.add(k, "input", function() {
                    k.value = n.i(c.s)(k.value, 8)
                })
            }

            function o(t) {
                var e = c.f.target(t),
                    a = n.i(c.g)(e, "action");
                n.i(c.g)(e, "stop") && c.f.stop(t), a && E[a.attr] && E[a.attr]()
            }

            function l() {
                this.allIn = function() {
                    var t = Math.min(1 * S[v.order.currency], n.i(s.b)(1 * v.order["loan-balance"], 1 * v.order["interest-balance"]));
                    k.value = n.i(c.b)(t, "8"), c.f.trigger(k, "input")
                }
            }

            function d(t) {
                if (!w)
                    if (p.Hide(), "submit" == t.type) {
                        if (!k.value) return p.Show(k, g.getLang("请先输入数量"));
                        w = 1, n.i(u.x)({
                            path: {
                                "order-id": v.order.id
                            },
                            data: {
                                amount: k.value
                            }
                        }).then(function(t) {
                            var e = t.data;
                            return w = 0, "ok" === e.status ? (k.value = "", m.Close(), v.success && v.success(t), f.Show(g.getLang("操作成功"))) : f.Error(e["err-msg"])
                        })
                    } else "open" == t.type ? c.f.add(document, "mousewheel", T) : "close" == t.type && c.f.remove(document, "mousewheel", T)
            }

            function T(t) {
                c.f.stop(t)
            }

            function L(t, e) {
                return g._keys(e), g.getLang("归还借贷")
            }
            var E = {};
            return n.i(c.h)(l, E), {
                open: t,
                title: L,
                construct: e
            }
        }()
    },
    45: function(t, e, n) {
        "use strict";

        function a(t) {
            n.i(p.f)().then(function(e) {
                var a = e.data;
                a.success && n.i(p.u)({
                    data: {
                        method: "login",
                        ticket: a.data.ticket
                    }
                }).then(function(e) {
                    var n = e.data;
                    "ok" == n.status && (g.i.set({
                        name: "HB-OLD-TOKEN",
                        value: n.data.token,
                        domain: GetHost(),
                        path: "/"
                    }), t && t())
                })
            })
        }

        function i(t) {
            function e(t) {
                x = t, _._keys(t.lang), I()
            }

            function i(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function r() {
                m.a.construct({
                    lang: x.lang,
                    currency: x.currency,
                    title: x.title,
                    page: {
                        title: x.title
                    },
                    hiddenClose: !0
                }), m.a.open().callback(function(t) {}), s()
            }

            function s() {
                function t() {
                    n.i(p.v)({
                        data: {
                            method: "get_auth_info"
                        }
                    }).then(function(n) {
                        var o = n.data;
                        "ok" === o.status ? (q = i(q, i(i(i(o.data.auth_info, o.data.force_info), o.data.user_info), d.a.userInfo)), c += 1, e()) : 555 === o["err-code"] && a(t)
                    })
                }

                function e(t) {
                    if (!(O || c < 2)) {
                        var e = t || S(x.action, r);
                        window.UI = window.UI || q, !o && window.UI && (o = setTimeout(function() {
                            delete window.UI, o = null
                        }, 1 * $_GET("refresh_time") || 18e5)), "actions" != e && ("pass" == e ? x.next && x.next(x, m.a.close) : (m.a.close(), L(e)), x.callback && x.callback(e, x, m.a.close, A))
                    }
                }
                var r = {
                        withdraw_big: {
                            "0001": ["verify", "prokyc"],
                            "0010": ["verify", "prokyc"],
                            "0011": ["verify", "prokyc"],
                            "0100": ["verify", "prokyc"],
                            "0101": ["verify", "prokyc"],
                            "0110": ["verify", "prokyc"],
                            "0111": ["verify", "prokyc"],
                            1000: ["verify", "prokyc"],
                            1001: ["verify", "prokyc"],
                            1010: ["verify", "prokyc"],
                            1011: ["verify", "prokyc"],
                            1100: ["verify", "prokyc"],
                            1101: ["verify", "prokyc"],
                            1110: ["verify", "prokyc"],
                            1111: ["verify", "prokyc"]
                        },
                        vote: {
                            "0001": ["votekyc"],
                            "0010": ["votekyc"],
                            "0011": ["votekyc"],
                            "0100": ["votekyc"],
                            "0101": ["votekyc"],
                            "0110": ["votekyc"],
                            "0111": ["votekyc"],
                            1000: ["votekyc"],
                            1001: ["votekyc"],
                            1010: ["votekyc"],
                            1011: ["votekyc"],
                            1100: ["votekyc"],
                            1101: ["votekyc"],
                            1110: ["votekyc"],
                            1111: ["votekyc"]
                        }
                    },
                    c = 0;
                if (!r[x.action] && window.UI || window.skipTaskHall) return c = 2, e("pass");
                t(),
                    function() {
                        n.i(p.w)().then(function(t) {
                            var n = t.data,
                                a = 0;
                            if (n.success) {
                                for (var o in n.data.setting) n.data.setting[o] && ++a;
                                n.data.setting.bigman = a, q = i(q, n.data), c += 1, e()
                            }
                        })
                    }()
            }

            function b() {
                return (1 * q.pro_status == 2 ? 1 : 0).toString()
            }

            function h() {
                return (1 * q.setting.verify_phone).toString()
            }

            function y() {
                return (1 * q.setting.verify_ga).toString()
            }

            function k() {
                return (1 * q.setting.verify_email).toString()
            }

            function w() {
                return (1 * q.c1_status == 2 || 1 * q.u_status == 2 ? 1 : 0).toString()
            }

            function S(t, e) {
                function a(t) {
                    if ("verify" === t) return q.setting.bigman > 1 ? 2 : 0
                }
                var i = {
                        verify: {
                            index: 0,
                            title: _.getLang("至少开启2项双重身份验证"),
                            keys: "verify",
                            status: 0,
                            actionUrl: localStorage.root + "user_center/uc_info/",
                            actionName: _.getLang("立即开启")
                        },
                        votekyc: {
                            index: 0,
                            title: _.getLang("身份认证"),
                            keys: "pro_status",
                            status: 0,
                            actionUrl: "//www.huobipro.com/user_center/uc_auth/",
                            actionName: _.getLang("立即认证")
                        },
                        prokyc: {
                            index: 0,
                            title: _.getLang("身份认证"),
                            keys: "pro_status",
                            status: 0,
                            actionUrl: localStorage.root + "user_center/uc_auth/",
                            actionName: _.getLang("立即认证")
                        }
                    },
                    o = [],
                    r = b() + h() + k() + y(),
                    c = {},
                    s = 1;
                return n.i(g.h)(T, c), "transfer" === t ? 1 * w() ? "pass" : [{
                    index: 0,
                    title: _.getLang("实名认证"),
                    keys: "c1_status",
                    status: 0,
                    actionUrl: f.c.main + "/account/auth.php?a=real_name_auth&auth_level=C1",
                    actionName: _.getLang("立即认证")
                }] : e[t] ? "string" == typeof e[t][r] && c[e[t][r]] && c[e[t][r]]() ? "actions" : (e[t][r].forEach(function(t) {
                    o.push(i[t])
                }), o.forEach(function(t) {
                    var e = [t.actionName, _.getLang("待审核"), _.getLang("已完成"), _.getLang("审核未通过")],
                        n = "number" == typeof q[t.keys] ? q[t.keys] : a(t.keys);
                    t.status = 2 == n ? 1 : 0, t.index = n, t.actionName = e[n], s = s && t.status
                }), o.length && !s ? o : "pass") : "pass"
            }

            function T() {
                this.stop = function() {
                    return "stop"
                }
            }

            function L(t) {
                x.task = t, A.construct(x), A.open()
            }

            function E() {}
            var x, O, I = function() {
                    var t = u()(c.a.mark(function t() {
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, l.a.currencyinfo();
                                case 2:
                                    d.a.currencyData.forEach(function(t) {
                                        v.pro[t.name] = "1"
                                    });
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                A = t,
                q = {};
            return {
                open: r,
                close: E,
                construct: e
            }
        }
        var o, r = n(8),
            c = n.n(r),
            s = n(7),
            u = n.n(s),
            l = n(22),
            d = n(10),
            p = n(1),
            f = n(5),
            m = n(25),
            g = n(0),
            _ = n.i(g.n)();
        window.lang = _;
        var v = {
            pro: {},
            huobi: {}
        };
        f.d.forEach(function(t) {
            v.huobi[t] = "1"
        }), e.a = i
    },
    458: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";

        function GetData(t) {
            for (var e = {}, n = {}, a = [], i = void 0, o = void 0, r = void 0, c = t.length; c--;) i = t[c], o = t[c].getAttribute("name"), r = i.type, o && ("text" === r || "password" === r || "hidden" === r || r.indexOf("select") > -1 || "textarea" === r || "file" === r ? (e[o] = Trim(i.value), n[o] = i) : "checkbox" === r ? (e[o] = e[o] || [], n[o] = n[o] || [], n[o].push(i), !0 === i.checked && e[o].push(i.value)) : "radio" === r && (n[o] = i, !0 === i.checked && (e[o] = i.value)), a.unshift({
                name: o,
                value: e[o],
                type: r
            }));
            return [e, n, a]
        }

        function Trim(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        function FilterEmpty(t) {
            for (var e in t) !t[e] && delete t[e];
            return t
        }

        function IsHidden(t) {
            return null === t.offsetParent
        }

        function FormValidator(option) {
            function Mode(dataType) {
                function matchOption(t) {
                    return _this.RegList[t]
                }

                function matchMode(t, e) {
                    var n = t.match(e);
                    return n.shift(), n
                }
                var _modes = {
                        regExp: {
                            code: 2,
                            reg: /\/.+\//g
                        },
                        extend: {
                            code: 3,
                            reg: /^(.+?){(\d+),(\d+)}$/
                        },
                        and: {
                            code: 4,
                            reg: /^(.+?)\&\&(.+?)$/
                        },
                        or: {
                            code: 5,
                            reg: /^(.+?)\|\|(.+?)$/
                        }
                    },
                    _mode = {};
                return !!dataType && (_mode = matchOption(dataType) ? {
                    code: 1,
                    reg: [dataType]
                } : _modes.regExp.reg.test(dataType) ? {
                    code: _modes.regExp.code,
                    reg: [eval(dataType)]
                } : _modes.extend.reg.test(dataType) ? {
                    code: _modes.extend.code,
                    reg: matchMode(dataType, _modes.extend.reg)
                } : _modes.or.reg.test(dataType) ? {
                    code: _modes.or.code,
                    reg: matchMode(dataType, _modes.or.reg)
                } : _modes.and.reg.test(dataType) ? {
                    code: _modes.and.code,
                    reg: matchMode(dataType, _modes.and.reg)
                } : {
                    code: 0
                })
            }
            var _this = this,
                _op = option || {};
            return _op.ignoreHidden = void 0 === _op.ignoreHidden || _op.ignoreHidden, _this.option = _op, _this.Form = _op.form, _this.MsgTip = _op.formTip, _this.RegList = {
                    "*": /[\w\W]+/,
                    p: /^[0-9]{5,11}$/,
                    pwd: /(?!\d+$)[\w\W]{8,20}$/,
                    passport: /^(?!_\-)(?!.*?_$)([a-zA-Z0-9\s\,\'.]){5,20}$/,
                    pinyin: /[A-Za-z]$/,
                    e: /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    compare: function(t, e) {
                        var n = e.compare;
                        return t ? t === _this.FormDataCommon[n] ? 0 : 2 : 1
                    }
                }, _this.Trim = Trim, _this.GetData = GetData, _this.Inputs = _this.Form.querySelectorAll("input,select,textarea"), _this.GetFormData = function() {
                    _this.Inputs = _this.option.dynamicNode ? _this.Form.querySelectorAll("input,select,textarea") : _this.Inputs, _this._formData = _this.GetData(_this.Inputs), _this.FormData = _this._formData[2], _this.FormDataCommon = _this._formData[0]
                }, _this.GetFormInput = function() {
                    _this.FormInput = _this._formData[1], _this.FormButton = _this.Form.querySelector('[type="submit"]')
                }, _this.GetInputInfo = function() {
                    var t = {},
                        e = {},
                        n = {},
                        a = void 0;
                    for (var i in _this.FormInput) _this.FormInput.hasOwnProperty(i) && (a = isDOM(_this.FormInput[i]) ? _this.FormInput[i] : _this.FormInput[i][0], n[i] = {
                        dataType: a.getAttribute("data-datatype"),
                        msg: {
                            nullMsg: a.getAttribute("data-msg-null"),
                            errorMsg: a.getAttribute("data-msg-error")
                        },
                        dataNumMin: a.getAttribute("data-num-min"),
                        dataNumMax: a.getAttribute("data-num-max"),
                        compare: a.getAttribute("data-compare"),
                        ele: a,
                        form: _this.Form,
                        mode: Mode(a.getAttribute("data-datatype"))
                    }, t[i] = n[i].dataType, e[i] = n[i].msg);
                    _this.MsgList = e, _this.TypeList = t, _this.InputInfo = n
                }, _this.qualified = !0, _this.Auth = function() {
                    function t(t) {
                        return _this.RegList[t]
                    }

                    function e(t, e, n, a, i) {
                        var o = void 0 === t ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(t);
                        return "function" === o ? t(r, n, a) : e && _this.Trim(e) && _this.RegList["*"].test(e) ? t.test(e) ? 0 : 2 : 1
                    }

                    function n(t, e, n) {
                        return t && _this.Trim(t) && _this.RegList["*"].test(t) ? t.length >= e && t.length <= n ? 0 : 2 : 1
                    }
                    for (var a = void 0, i = void 0, o = void 0, r = void 0, c = void 0, s = void 0, u = 0, l = _this.FormData.length, d = l; u < l; u++) {
                        if (d--, o = _this.FormData[u].name, i = _this.FormInput[o], r = "object" === __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(_this.FormData[u].value) ? _this.FormData[u].value[0] : _this.FormData[u].value, c = _this.AuthNow && _this.AuthNow(o), _this.AuthInput = i, s = c ? {
                                code: 9,
                                reg: c
                            } : _this.InputInfo[o].mode) switch (s.code) {
                            case 1:
                                a = e(t(s.reg[0]), r, _this.InputInfo[o], _this);
                                break;
                            case 2:
                                a = e(s.reg[0], r, _this.InputInfo[o], _this);
                                break;
                            case 3:
                                a = 0 === n(r, s.reg[1], s.reg[2]) ? e(t(s.reg[0]), r, _this.InputInfo[o], _this) : n(r, s.reg[1], s.reg[2]);
                                break;
                            case 4:
                                for (var p = 0; p < s.reg.length; p++) {
                                    var f = e(t(s.reg[p]), r, _this.InputInfo[o], _this);
                                    if (f > 0) {
                                        a = f;
                                        break
                                    }
                                    a = 0
                                }
                                break;
                            case 5:
                                for (var m = 0; m < s.reg.length && 0 !== (a = e(t(s.reg[m]), r, _this.InputInfo[o], _this)); m++);
                                break;
                            case 9:
                                a = e(s.reg, r, _this.InputInfo[o], _this);
                                break;
                            default:
                                console.warn("未匹配到校验规则", _this.InputInfo[o])
                        }
                        if (_op.ignoreHidden && IsHidden(i) && (a = 0), a) {
                            _this.qualified = !1, _this.MsgShow(i, o, a);
                            break
                        }
                        d || (_this.qualified = !0)
                    }
                    _this.qualified && _this.SubmitForm()
                }, _this.MsgShow = function(t, e, n) {
                    var a = _this.MsgList[e];
                    switch (n) {
                        case 1:
                            _this.Msg = a.nullMsg;
                            break;
                        case 2:
                            _this.Msg = a.errorMsg
                    }
                    _this.Then && _this.Then(_this.Form, {
                        type: "showMsg",
                        resultCode: n,
                        msgList: a,
                        msgNow: _this.Msg,
                        authInput: _this.AuthInput,
                        ele: _this.FormInput[e],
                        inputs: _this.FormInput,
                        button: _this.FormButton
                    }, _this), _this.MsgTip && (_this.MsgTip.innerHTML = _this.Msg)
                }, _this.SubmitForm = function() {
                    _this.qualified && _this.Then && _this.Then(_this.Form, {
                        type: "submit",
                        formDataSerialize: _this.FormData,
                        formData: _this.option.filterEmpty ? FilterEmpty(_this.FormDataCommon) : _this.FormDataCommon,
                        authInput: _this.AuthInput,
                        resultCode: 0,
                        inputs: _this.FormInput,
                        button: _this.FormButton
                    }, _this)
                },
                function() {
                    _this.Form.addEventListener("submit", function(t) {
                        _this.GetFormData(), _this.GetFormInput(), _this.GetInputInfo(), _this.Auth(), t.stopPropagation(), t.preventDefault()
                    })
                }(), _this
        }
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return FormValidator
        });
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(18),
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__),
            isDOM = "object" === ("undefined" == typeof HTMLElement ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(HTMLElement)) ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" === (void 0 === t ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(t)) && 1 === t.nodeType && "string" == typeof t.nodeName
            }
    },
    46: function(t, e, n) {
        "use strict";
        var a = n(55),
            i = (n.n(a), n(64)),
            o = n.n(i),
            r = n(45),
            c = n(4),
            s = n(2),
            u = n(0),
            l = n.i(u.n)(),
            d = n.i(u.o)(o.a),
            p = void 0,
            f = void 0;
        new s.a;
        e.a = n.i(r.a)(function() {
            function t() {
                return p.Open(), p
            }

            function e(t) {
                m = t, l._keys(t.lang);
                var e = {
                    lang: l.getLang,
                    currency: t.currency,
                    page: {
                        title: t.title
                    },
                    btn: !1
                };
                p = p || new c.a({
                    html: n.i(u.d)(n.i(c.b)(d.html).html, e)
                }), f && (p.dialog.innerHTML = n.i(u.d)(n.i(c.b)(d.html).fc, e)), s = document.querySelector("[block='task_list']"), s.innerHTML = n.i(u.d)(d.block.task_list, {
                    lang: l.getLang,
                    task: t.task
                }), p.callback(function() {}), !f && u.f.add(p.dialog, "click", o), f = 1
            }

            function a() {}

            function i() {}

            function o(t) {
                var e = u.f.target(t),
                    a = n.i(u.g)(e, "action");
                n.i(u.g)(e, "stop") && u.f.stop(t), a && g[a.attr] && g[a.attr](a.node, e, p.dialog)
            }

            function r() {}
            var s = void 0,
                m = void 0,
                g = {};
            return n.i(u.h)(r, g), {
                open: t,
                construct: e,
                updateData: a,
                callUpdate: i,
                myDialog: function() {
                    return p
                }
            }
        }())
    },
    461: function(t, e, n) {
        "use strict"
    },
    465: function(t, e, n) {
        "use strict";

        function a(t) {
            return t.rep || t.subbed || t.ch || ""
        }

        function i(t, e) {
            var n = void 0;
            if (!t) return void console.error("MateSymbol: ChannelId is not defined");
            for (var a in e)
                if (e.hasOwnProperty(a) && t.indexOf(e[a]) > -1) {
                    n = e[a];
                    break
                }
            return n
        }
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return i
        })
    },
    467: function(t, e, n) {
        "use strict";

        function a() {
            function t(t, e) {
                var i = n.i(_.w)(t, "dl");
                delete a[e][t.dataset.symbol], "marked" == a.filterKey && (i.parentNode.removeChild(i), a.coin_list_dom.querySelector("dl") || a.render()), t.dataset.marked = 0
            }

            function e(t, e) {
                a[e][t.dataset.symbol] = "marked", t.dataset.marked = 1
            }
            var a = this;
            a.usersort = function(t) {
                t.dataset.sortKey;
                a.sort = a.sortKey == t.dataset.sortKey ? !a.sort : 1, a.sortKey = t.dataset.sortKey, a.sortNode = t.querySelector("i"), a.render()
            }, a.changeEyes = function() {
                a.eyeStatus = 1 * !a.eyeStatus, localStorage.setItem("eye_status", a.eyeStatus), a.renderBalance()
            }, a.clear_key = function() {
                a.search_keyword.value = ""
            }, a.switch_quote = function(t) {
                a.priceQuote = "btc" == a.priceQuote ? "cny" : "btc", a.setPriceQuote(), a.render()
            }, a.userfilter = function(t) {
                a.filterKey = t.dataset.filterKey, localStorage.setItem(I, a.filterKey), a.setFilter(), a.render()
            }, a.showmarked = function(t) {
                a.filterKey = "marked", localStorage.setItem(I, a.filterKey), a.setFilter(), a.render()
            }, a.gourl = function(t) {
                location.href = localStorage.root + t.dataset.symbolPath + "/" + window.TRADE_TYPE.toLowerCase() + "/"
            }, a.mark = function(n) {
                var i = 1 * n.dataset.marked ? S._61 : S._62,
                    o = 1 * n.dataset.marked ? t : e;
                n.className = "hb_icon_marked breathe", a.isLogin ? i({
                    data: {
                        trading_pair: n.dataset.symbol,
                        website: "PRO"
                    }
                }).then(function(t) {
                    t.data.success ? o(n, "coinList") : E.Show(t.data.message, 3e3), n.className = 1 * n.dataset.marked ? "hb_icon_marked" : "hb_icon_unmarked"
                }) : (o(n, "localData"), n.className = 1 * n.dataset.marked ? "hb_icon_marked" : "hb_icon_unmarked", localStorage.setItem("mark_symbol", g()(a.localData)))
            }
        }

        function i() {
            function t(t) {
                return (1 * t).toString()
            }
            var e = this;
            e.setPriceQuote = function() {
                localStorage.setItem("priceQuote", e.priceQuote), e.switchQuote.className = "cny" === e.priceQuote ? e.switchQuote.className.replace(/\sswitch_wrap_cur/g, "") + " switch_wrap_cur" : e.switchQuote.className.replace(/\sswitch_wrap_cur/g, ""), e.new_price_dom.innerHTML = e.new_price_dom.dataset.text + ("cny" !== e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? "" : "(CNY)"), e.render()
            }, e.filter = function(t) {
                var n = [],
                    a = [],
                    i = [],
                    o = [],
                    r = e.coinList || e.localData,
                    c = {
                        price: "cny" !== e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? "close" : "cnyClose",
                        rate: "rate"
                    };
                if (e.resetSort(), !e.inited && ("marked" === e.filterKey && !r[(PAGE_COIN + PAGE_QUOTE).toLowerCase()] || "marked" !== e.filterKey && e.filterKey !== PAGE_QUOTE.toLowerCase()) && (e.filterKey = PAGE_QUOTE.toLowerCase(), e.setFilter()), t.forEach(function(t) {
                        h.a[O.obj][t.symbol] && ("marked" != e.filterKey ? t["quote-currency"] === e.filterKey && (n.push(t), a.push(t["base-currency"] + t["quote-currency"])) : r[t.symbol] && (n.push(t), a.push(t["base-currency"] + t["quote-currency"])))
                    }), "mgt" == e.sortKey) {
                    for (var s = 0, u = e.symbolDataArr.length; s < u; s++)
                        for (var l = 0, d = n.length; l < d; l++) n[l].symbol === e.symbolDataArr[s] && o.push(n[l]);
                    n = o
                } else "coin" == e.sortKey ? (a.sort(), e.sort && a.reverse(), a.forEach(function(t) {
                    n.forEach(function(e) {
                        t == e["base-currency"] + e["quote-currency"] && i.push(e)
                    })
                }), n = i) : (a = [], i = [], n.forEach(function(t) {
                    e.ticker[t.symbol] && void 0 !== e.ticker[t.symbol][c[e.sortKey]] ? i.push(t) : a.push(t)
                }), e.orderBy[e.sortKey] && i.sort(e.orderBy[e.sortKey]), n = i.concat(a));
                return n
            }, e.render = function() {
                if (e.isLogin && !e.coinList) return setTimeout(e.render, 200);
                e.coin_list_dom.innerHTML = n.i(_.d)(e.coin_list_html, {
                    symbol: e.symbolData,
                    option: e,
                    markArr: e.coinList || e.localData
                }), setTimeout(function() {
                    e.coin_list_dom.querySelector(".cur") && e.coin_list_dom.querySelector(".cur").offsetTop > e.coin_list_dom.clientHeight && (e.coin_list_dom.scrollTop = e.coin_list_dom.querySelector(".cur").offsetTop)
                }, 200), e.updateHtml(), e.inited = 1
            }, e.resetSort = function() {
                for (var t = e.sort_dom.length; t--;) e.sort_dom[t].querySelector("i").className = "";
                e.sortNode && (e.sortNode.className = e.sort ? "desc" : "asc")
            }, e.setFilter = function() {
                for (var t = e.filter_dom.length; t--;) e.filter_dom[t].className = e.filter_dom[t].dataset.filterKey == e.filterKey ? "cur" : "";
                e.filter_dom_mark.className = "marked" === e.filterKey ? "cur" : "", e.sortKey = "mgt", e.sortNode = null
            }, e.orderBy = function() {
                function t(t, n) {
                    return e.ticker[n] && e.ticker[n][t] ? e.ticker[n][t] : 0
                }
                return {
                    price: function(n, a) {
                        var i = "cny" !== e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? "close" : "cnyClose";
                        return e.sort ? t(i, a.symbol) - t(i, n.symbol) : t(i, n.symbol) - t(i, a.symbol)
                    },
                    rate: function(n, a) {
                        return e.sort ? t("rate", a.symbol) - t("rate", n.symbol) : t("rate", n.symbol) - t("rate", a.symbol)
                    }
                }
            }(), e.getUcData = function() {
                if (!e.isLogin) return setTimeout(e.getUcData, 200);
                e.isLogin && n.i(S._63)({
                    params: {
                        website: "PRO"
                    }
                }).then(function(t) {
                    e.coinList = {}, t.data.data.forEach(function(t) {
                        e.coinList[t] = "marked"
                    })
                })
            };
            var a;
            e.updateHtml = function() {
                a && clearTimeout(a), a = setTimeout(e.updateHtmlFn, 50)
            }, e.updateHtmlFn = function() {
                var a = [].slice.apply(e.coin_list_dom.querySelectorAll("dl")),
                    i = [].slice.apply(e.coin_list_dom.querySelectorAll(".market_category")),
                    o = [];
                o[10] = "color-buy", o[1] = "color-sell", a.forEach(function(a) {
                    e.ticker[a.dataset.symbol] && ("cny" != e.priceQuote || "zh-cn" != localStorage.lang && "zh-hk" != localStorage.lang ? a.querySelector("span[price]").innerHTML = e.ticker[a.dataset.symbol].close ? n.i(_.b)(e.ticker[a.dataset.symbol].close, h.a.symbolDataObj[a.dataset.symbol]["trade-price-precision"]) : "---" : a.querySelector("span[price]").innerHTML = e.ticker[a.dataset.symbol].cnyClose ? e.ticker[a.dataset.symbol].cnyClose : "---", a.querySelector("span[rate]").innerHTML = e.ticker[a.dataset.symbol].showRate || "---", e.ticker[a.dataset.symbol].showRate && (a.querySelector("span[rate]").className = o[1 * (t(e.ticker[a.dataset.symbol].rate > 0) + t(e.ticker[a.dataset.symbol].rate < 0))]))
                }), i.forEach(function(t) {
                    var n = "partition" + t.dataset.partition;
                    e.info && e.info[n] && (t.querySelector("i").style.visibility = "visible")
                })
            }
        }

        function o(t) {
            function e() {
                d.isLogin = !!_.i.get("HB-PRO-TOKEN"), setTimeout(e, 1e3)
            }

            function o() {
                var t = this;
                t.getUcData(), t.localData = JSON.parse(localStorage.getItem("mark_symbol") || "{}"), t.coin_list_dom = t.wrap.querySelector(".coin_list"), t.coin_list_html = t.coin_list_dom.querySelector("script").innerHTML, t.filter_dom = t.wrap.querySelectorAll('span[action="userfilter"]'), t.filter_dom_mark = t.wrap.querySelector('b[action="showmarked"]'), t.sort_dom = t.wrap.querySelectorAll('span[action="usersort"]'), t.total_dom = document.querySelector("#total_balance").querySelector("b"), t.total_eyes = document.querySelector("#total_eyes"), t.total_about_dom = document.querySelector("#total_balance").querySelector("span"), t.search_keyword = t.wrap.querySelector("#search_keyword"), t.switchQuote = t.wrap.querySelector('div[action="switch_quote"]'), t.new_price_dom = t.wrap.querySelector("#new_price"), t.clear_key_dom = t.wrap.querySelector('[action="clear_key"]'), t.search_sign_dom = t.wrap.querySelector('[flag="search_sign"]'), t.symbolData = h.a.symbolData, t.symbolDataArr = h.a.symbolDataArr, t.symbolDataObj = h.a.symbolDataObj, n.i(_.h)(a, t), t.eyeStatus = 1 * t.eyeStatus, t.setFilter(), t.render(), t.setPriceQuote(), _.f.add(t.total_eyes, "click", t.changeEyes), _.f.add(t.wrap, "click", function(e) {
                    var a = _.f.target(e),
                        i = n.i(_.g)(a, "action"),
                        o = n.i(_.g)(a, "stop"),
                        r = n.i(_.g)(a, "stop_prop");
                    o && _.f.stop(e), r && (e && e.stopPropagation ? e.stopPropagation() : window.event.cancelBubble = !0), i && t[i.attr] && t[i.attr](i.node)
                }), e(), n.i(_.t)(s)
            }

            function s() {
                d.search_keyword.value ? (d.clear_key_dom.style.display = "inline-block", d.search_sign_dom.style.display = "none") : (d.clear_key_dom.style.display = "none", d.search_sign_dom.style.display = ""), d.keys !== d.search_keyword.value && (d.symbolDataObj = {}, d.symbolDataArr = [], d.symbolData = u(h.a.symbolData, d.search_keyword.value), d.symbolData.forEach(function(t) {
                    t.delist || (d.symbolDataArr.push(t.symbol), d.symbolDataObj[t.symbol.toLowerCase()] = t)
                }), d.keys = d.search_keyword.value, d.render())
            }

            function u(t, e) {
                var n = [],
                    a = e || "";
                return t.forEach(function(t) {
                    ~t["base-currency"].toLowerCase().indexOf(a.toLowerCase()) && n.push(t)
                }), n
            }
            var l = t || {},
                d = {
                    wrap: document.querySelector("#drawer"),
                    filterKey: l.key || localStorage.getItem(I) || "usdt",
                    sortKey: "mgt",
                    ticker: {},
                    isLogin: !!_.i.get("HB-PRO-TOKEN"),
                    keys: "init",
                    inited: 0,
                    eyeStatus: localStorage.getItem("eye_status") || 1,
                    priceQuote: localStorage.getItem("priceQuote") || "btc"
                };
            return n.i(_.h)(r, d), n.i(_.h)(i, d), n.i(_.h)(o, d), n.i(_.h)(c, d), d
        }

        function r(t) {
            function e(t) {
                var e = 0,
                    n = {};
                for (var a in t) ! function(t, e, a) {
                    "btc" === t["base-currency"] ? n[a] = 1 / e.close : "btc" === t["quote-currency"] && (n[a] = e.close)
                }(t[a], i.ticker[t[a].symbol], a);
                for (var a in t) e += 1 * function(t, e, a) {
                    return "btc" !== t["base-currency"] && "btc" !== t["quote-currency"] ? t["base-currency"] === a ? i.balance[a] * e.close * n[t["quote-currency"]] || 0 : t["quote-currency"] === a ? i.balance[a] * (1 / e.close) * n[t["base-currency"]] || 0 : 0 : i.balance[a] * n[a] || 0
                }(t[a], i.ticker[t[a].symbol], a);
                return e
            }

            function a(t) {
                for (var e, n = h.a.symbolData, a = 0, i = n.length; a < i; a++)
                    if (n[a]["base-currency"] === t && "btc" === n[a]["quote-currency"] || n[a]["quote-currency"] === t && "btc" === n[a]["base-currency"]) {
                        e = n[a];
                        break
                    }
                if (!e)
                    for (var a = 0, i = n.length; a < i; a++)
                        if (n[a]["base-currency"] === t && "usdt" === n[a]["quote-currency"] || n[a]["quote-currency"] === t && "usdt" === n[a]["base-currency"]) {
                            e = n[a];
                            break
                        }
                if (!e)
                    for (var a = 0, i = n.length; a < i; a++)
                        if (n[a]["base-currency"] === t || n[a]["quote-currency"] === t) {
                            e = n[a];
                            break
                        }
                return e
            }
            var i = this;
            i.renderBalance = function() {
                if (u) {
                    var t, o = {},
                        r = 1;
                    if (!h.a.currencyReady || !h.a.symbolReady || "exchange" == window.TRADE_TYPE && !i.balance || "margin" == window.TRADE_TYPE && !h.a.marginBalanceTotal || !i.ticker) return s && clearTimeout(s), s = setTimeout(i.renderBalance, 300);
                    if (i.balance) {
                        "margin" == window.TRADE_TYPE && (i.balance = h.a.marginBalanceTotal);
                        for (var c in i.balance) "btc" !== c && h.a.symbolData.forEach(function(t) {
                            t["base-currency"] !== c && t["quote-currency"] !== c || (o[c] = a(c))
                        });
                        o.bt2 && delete o.bt2, o.bt1 && delete o.bt1;
                        for (var l in o) r = r && i.ticker[o[l].symbol] && i.ticker[o[l].symbol].close;
                        t = r && e(o), t || 0 === t ? t += 1 * i.balance.btc ? 1 * i.balance.btc : 0 : t = "---", i.total_dom.innerHTML = i.eyeStatus ? n.i(_.b)(t, 1 * h.a.currencyDataObj.btc["show-precision"]) : "*****", i.total_eyes.className = i.eyeStatus ? "eyes hb_icon_visible" : "eyes hb_icon_invisible", i.usdrate && i.ticker.btcusdt && "---" != t && ("zh-hk" == localStorage.lang || "zh-cn" == localStorage.lang) && (i.total_about_dom.innerHTML = " ≈ " + (i.eyeStatus ? n.i(_.b)(i.usdrate * n.i(_.b)(t, 1 * h.a.currencyDataObj.btc["show-precision"]) * i.ticker.btcusdt.close, 2) : "*****") + " CNY")
                    }
                }
            }
        }

        function c() {
            function t() {
                m.info || (m.info = {}), n.i(S._24)({
                    path: {
                        id: ""
                    },
                    params: {
                        lang: localStorage.lang || "",
                        pageType: 1
                    }
                }).then(function(n) {
                    n.data.success ? e(n.data.data) : setTimeout(t, 5e3)
                })
            }

            function e(t) {
                t.forEach(function(t) {
                    m.info[t.pageIdentifier] = {
                        title: t.title,
                        content: t.summary
                    }
                }), m.updateHtml()
            }

            function a(t) {
                t.filter(function(t) {
                    return t.pageIdentifier.toLowerCase().match("partition")
                }).forEach(function(t) {
                    m.info[t.pageIdentifier.toLowerCase()] = {
                        title: t.title,
                        content: t.summary
                    }
                }), m.updateHtml()
            }

            function i(t) {
                t.subbed || n.i(b.b)(v.a.__allSymbolTicker, t)
            }

            function o(t) {
                t.subbed || n.i(b.b)(v.a.__allSymbolDayKline, t)
            }

            function r(t) {
                return t > .01 ? 2 : t.toString().match(/[^\.0]/) ? t.toString().match(/[^\.0]/).index + 1 : void 0
            }

            function c(t, e) {
                var a, i = h.a.symbolDataObj[e],
                    o = m.usdrate;
                if (i) {
                    if (!o) return setTimeout(function() {
                        return c(t, e)
                    }, 300);
                    if ("usdt" === i["quote-currency"]) a = o;
                    else if (h.a.symbolDataObj[i["quote-currency"] + "usdt"]) {
                        if (!m.ticker[i["quote-currency"] + "usdt"] || !m.ticker[i["quote-currency"] + "usdt"].close) return setTimeout(function() {
                            return c(t, e)
                        }, 300);
                        a = o * m.ticker[i["quote-currency"] + "usdt"].close
                    } else m.ticker[e].cnyClose = "---";
                    if (!t || !a) return setTimeout(function() {
                        return c(t, e)
                    }, 300);
                    $_GET.debuger && console.log(t, a), m.ticker[e].cnyClose = n.i(_.b)(n.i(k.a)(t, a), r(n.i(k.a)(t, a))), m.updateHtml(), m.renderBalance()
                }
            }

            function s(t) {
                t.forEach(function(t) {
                    var e = {
                        info: {
                            tick: t,
                            ch: "overview." + t.symbol
                        }
                    };
                    PAGE_COIN + PAGE_QUOTE != t.symbol && (n.i(b.b)(v.a.__allSymbolTicker, e.info), n.i(b.b)(v.a.__allSymbolDayKline, e.info))
                })
            }

            function u(t) {
                var e = t.info.ch.split(".")[1];
                m.ticker[e] = m.ticker[e] ? m.ticker[e] : {}, m.ticker[e].close = t.info.tick.close, c(t.info.tick.close, e), m.updateHtml(), m.renderBalance()
            }

            function l(t) {
                var e = t.info,
                    a = e.ch.split(".")[1],
                    i = (e.tick.close - e.tick.open) / e.tick.open * 100,
                    o = 1 * n.i(_.b)(i, 2) ? n.i(_.b)(i, 2) : n.i(_.b)(0, 2),
                    r = (1 * o > 0 ? "+" : "") + o,
                    c = r + "%";
                m.ticker[a] = m.ticker[a] ? m.ticker[a] : {}, m.ticker[a].showRate = c, m.ticker[a].rate = 1 * o, m.updateHtml()
            }
            var p = function() {
                    var t = f()(d.a.mark(function t() {
                        var e, i;
                        return d.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return m.info || (m.info = {}), t.next = 3, n.i(S._24)({
                                        path: {
                                            id: ""
                                        },
                                        params: {
                                            lang: localStorage.lang || "",
                                            pageType: 2
                                        }
                                    });
                                case 3:
                                    e = t.sent, i = e.data, i.success ? a(i.data) : setTimeout(p, 5e3);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                m = this;
            n.i(b.a)("__allSymbolTicker", u), n.i(b.a)("__allSymbolDayKline", l), n.i(b.a)("__getUserBalance", function(t) {
                    var e = t.info;
                    m.balance = {};
                    for (var n in e.total) 1 * e.total[n] && (m.balance[n] = e.total[n]);
                    m.renderBalance()
                }), t(), p(),
                function() {
                    L.plugin(n.i(y.b)().sub().overview(), function(t) {
                        t.ch && "market.overview" === t.ch && s(t.data)
                    }), L.plugin(n.i(y.b)({
                        symbol: PAGE_COIN + PAGE_QUOTE
                    }).sub().ticker(), i), L.plugin(n.i(y.b)({
                        symbol: PAGE_COIN + PAGE_QUOTE,
                        period: "1day"
                    }).sub().kline(), o)
                }()
        }
        n.d(e, "a", function() {
            return o
        });
        var s, u, l = n(8),
            d = n.n(l),
            p = n(7),
            f = n.n(p),
            m = n(14),
            g = n.n(m),
            _ = n(0),
            v = n(11),
            b = n(3),
            h = n(10),
            y = n(92),
            k = n(13),
            w = n(5),
            S = n(1),
            T = n(2),
            L = y.a.handsup(w.c.ws),
            E = new T.a,
            x = {
                margin: {
                    ready: "marginReady",
                    data: "marginData",
                    obj: "marginDataObj",
                    arr: "marginDataArr",
                    cookies_filter: "HBP_MARGIN_SYMBOLS_FILTER"
                },
                exchange: {
                    ready: "symbolReady",
                    data: "symbolData",
                    obj: "symbolDataObj",
                    arr: "symbolDataArr",
                    cookies_filter: "HBP_SYMBOLS_FILTER"
                }
            },
            O = x[(window.TRADE_TYPE || "exchange").toLowerCase()],
            I = O.cookies_filter;
        n.i(b.a)("__userIsLogin", function(t) {
            u = t.info
        })
    },
    468: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = l.a.symbolDataObj[_]["trade-price-precision"],
                a = l.a.symbolDataObj[_]["trade-amount-precision"];
            return t.map(function(t) {
                return u()({}, t, {
                    time: n.i(p.c)(t.ts, "h:i:s"),
                    type: "sell" === t.direction ? "down" : "up",
                    price: n.i(p.b)(t.price, e),
                    amount: n.i(p.b)(t.amount, a)
                })
            })
        }

        function i(t) {
            b = a(t.data), r(), v = n.i(m.b)({
                symbol: _
            }).sub().trade(), g.plugin(v, o)
        }

        function o(t) {
            if (!t.subbed) {
                var e = t.tick.data.length,
                    n = b.slice(0, e).map(function(t) {
                        return t.id
                    }),
                    i = t.tick.data.reduce(function(t, e) {
                        return t.concat(n.includes(e.id) ? [] : e)
                    }, []);
                b = a(i).concat(b).slice(0, 100)
            }
            r()
        }

        function r() {
            n.i(p.e)("market_trades_list", {
                list: b
            })
        }

        function c() {
            _ = PAGE_COIN + PAGE_QUOTE, v = n.i(m.b)({
                symbol: _
            }).req().trade(), b = [], g.plugin(v, i)
        }
        n.d(e, "a", function() {
            return c
        });
        var s = n(27),
            u = n.n(s),
            l = n(10),
            d = (n(22), n(291), n(5)),
            p = n(0),
            f = n(9),
            m = n(92),
            g = m.a.handsup(d.c.ws),
            _ = (new f.a, void 0),
            v = void 0,
            b = void 0
    },
    469: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = t.info;
            m = f, f = e.tick.close
        }

        function i() {
            function t() {
                t.price && t.price.getAttribute("force") && (m.writeDepth = !1, t.price.removeAttribute("force"), a(1)), setTimeout(t, 100)
            }

            function e(t) {
                if (t && t.length) {
                    var e = 0;
                    return t.forEach(function(t, n) {
                        e < +t[1] && n < 7 && (e = +t[1])
                    }), e
                }
            }

            function a(e) {
                var i = m.depths,
                    o = u.getElementsByName("price");
                if (!(i.bids[0] && i.asks[0] || f)) return setTimeout(function() {
                    a(e)
                }, 200);
                o && (m.writeDepth || (t.price = o[0], ("" == o[1].value || e) && (o[1].value = n.i(c.b)(i.bids[0] ? i.bids[0][0] : f || 0, g.precision.price), c.f.trigger(o[1], "input")), ("" == o[0].value || e) && (o[0].value = n.i(c.b)(i.asks[0] ? i.asks[0][0] : f || 0, i.floatLength), c.f.trigger(o[0], "input")), m.writeDepth = !0))
            }

            function i(t) {
                var i = n.i(r.a)(t),
                    o = n.i(r.b)(i, d.a.symbolDataArr);
                t.tick && (t.tick.asksMaxVal = e(t.tick.asks), t.tick.bidsMaxVal = e(t.tick.bids), m.market.depth[o] = t.tick, m.market.depth[o].symbol = [m.coin, m.quote], m.market.depth[o].floatLength = g.precision.price, m.market.depth[o].amountFloatLength = g.precision.amount, m.market.depth[o].quote_currency = m.quote.toUpperCase(), n.i(c.e)("market_depth", m.market.depth[o], u.depthListHtml), m.depths = m.market.depth[o], a())
            }
            var u = new l.a,
                m = {
                    symbol_config: d.a.symbolDataObj[(PAGE_COIN + PAGE_QUOTE).toLowerCase()],
                    coin: PAGE_COIN,
                    quote: PAGE_QUOTE,
                    account: {},
                    market: {
                        depth: {},
                        ticker: {}
                    },
                    depths: {},
                    writeDepth: !1
                },
                g = {
                    precision: {
                        price: m.symbol_config["trade-price-precision"],
                        amount: m.symbol_config["trade-amount-precision"],
                        volumes: m.symbol_config["trade-total-precision"],
                        fee: m.symbol_config["fee-precision"]
                    },
                    depthApi: {
                        symbol: m.coin + m.quote,
                        step: "step0"
                    },
                    depthApiPick: {
                        pick: ["bids.7", "asks.7"]
                    }
                };
            t(), n.i(o.a)("__marketDay", function(t) {
                    var e = t.info,
                        n = e[m.coin + m.quote];
                    m.market.ticker = n ? n.ticker : {}, m.ticker_version = 1 * new Date
                }), n.i(o.a)("__marketTicker", function(t) {
                    var e = t.info,
                        n = e[m.coin + m.quote];
                    m.market.ticker = n ? n.ticker : {}, m.ticker_version = 1 * new Date
                }),
                function(t) {
                    t.Num = c.b, p.plugin(n.i(s.b)(g.depthApi).sub(g.depthApiPick).depth(), i)
                }(window), u.Ready(function() {
                    u.depthSelect = u.getElementById("depth_select"), u.depthList = u.getElementById("market_depth"), u.depthStep = u.getElementById("depth_step"), u.depthListHtml = u.depthList.querySelector("script[name='normal']").innerHTML, n.i(c.e)("market_depth", {
                        quote_currency: m.quote.toUpperCase()
                    }, u.depthListHtml), c.f.add(u, "click", function(t) {
                        c.k.removeClass(u.depthSelect, "slide_down")
                    }), c.f.add(u.depthSelect, "click", function(t) {
                        t.stopPropagation(), c.k.hasClass(u.depthSelect, "slide_down") ? c.k.removeClass(u.depthSelect, "slide_down") : c.k.addClass(u.depthSelect, "slide_down");
                        var e = c.f.target(t),
                            a = n.i(c.g)(e, "data-depth"),
                            o = void 0,
                            r = void 0,
                            l = void 0;
                        a && (o = a.node, r = o.getAttribute("data-depth"), l = o.innerText, u.depthStep.innerText = l, c.k.removeClass(u.depthSelect, "slide_down"), c.k.removeClass(u.depthSelect.querySelector(".active"), "active"), c.k.addClass(o, "active"), p.unplug(n.i(s.b)(g.depthApi).sub().depth(), i), g.depthApi.step = "step" + r, p.plugin(n.i(s.b)(g.depthApi).sub().depth(), i))
                    });
                    var t = void 0;
                    c.f.add(u.depthList, "click", function(e) {
                        var a = c.f.target(e),
                            i = n.i(c.g)(a, "data-info");
                        i && i.attr && (u.formPrice[0].value = i.attr, u.formPrice[1].value = i.attr, u.formPrice[0].className = "focus", u.formPrice[1].className = "focus", c.f.trigger(u.formPrice[0], "input"), c.f.trigger(u.formPrice[1], "input")), t && clearTimeout(t), t = null, t = setTimeout(function() {
                            u.formPrice[0].className = "", u.formPrice[1].className = ""
                        }, 300)
                    })
                })
        }
        n.d(e, "a", function() {
            return i
        });
        var o = (n(11), n(3)),
            r = n(465),
            c = n(0),
            s = n(92),
            u = n(5),
            l = n(9),
            d = (n(22), n(10)),
            p = s.a.handsup(u.c.ws),
            f = void 0,
            m = void 0;
        n.i(o.a)("__tickerSub", a)
    },
    47: function(t, e, n) {
        "use strict";
        var a = n(56),
            i = (n.n(a), n(65)),
            o = n.n(i),
            r = n(4),
            c = n(0),
            s = n(1),
            u = n(2),
            l = n(6),
            d = (n(3), new l.a),
            p = void 0,
            f = {},
            m = {},
            g = void 0,
            _ = void 0,
            v = void 0,
            b = new u.a,
            h = n.i(c.n)(),
            y = n.i(c.o)(o.a),
            k = void 0,
            w = void 0,
            S = void 0;
        e.a = function() {
            function t(e) {
                v ? (e && e(), p.Open()) : setTimeout(function() {
                    t(e)
                }, 100)
            }

            function e(t) {
                P = 0, k = t, g = t.type ? "in" == t.type ? 0 : 1 : 0, _ = t.currency ? t.currency : k.base, h._keys(t.lang), v = null, w = {
                    cash: m,
                    wallet: f,
                    base: t.base,
                    quote: t.quote,
                    lang: h.getLang,
                    currency: t.currency,
                    page: {
                        title: t.title
                    },
                    btn: {
                        cancel: h.getLang("取消"),
                        submit: h.getLang("确定")
                    }
                }, p = p || new r.a({
                    html: n.i(c.d)(n.i(r.b)(y.html).html, w)
                }), a(), !S && c.f.add(p.dialog, "click", o), !S && n.i(c.t)(l), S = 1, p.callback(L)
            }

            function a() {
                n.i(s.e)({
                    params: {
                        symbol: k.base + k.quote
                    }
                }).then(function(t) {
                    var e = t.data;
                    "ok" === e.status && i(e.data[0])
                })
            }

            function i(t) {
                t ? t.list.forEach(function(t) {
                    m[t.currency] = "transfer-out-available" === t.type ? t.balance : m[t.currency]
                }) : (m[k.quote] = 0, m[k.base] = 0), f[k.base] = STORE.balance.trade[k.base], f[k.quote] = STORE.balance.trade[k.quote], v = 1, S && (p.dialog.innerHTML = n.i(c.d)(n.i(r.b)(y.html).fc, w)), O = p.dialog.querySelector('[flag="dir"]'), M = p.dialog.querySelector('[flag="tips"]'), A = p.dialog.querySelector('[flag="ava"]'), N = p.dialog.querySelector('[flag="inputFlag"]'), q = n.i(c.u)(p.dialog.querySelector('[flag="filter"]').querySelectorAll("span")), I = p.dialog.querySelector("b"), C = p.dialog.querySelector("input"), C.getAttribute("bindEvent") || (C.setAttribute("bindEvent", "bindEvent"), c.f.add(C, "blur", function() {
                    d.Hide()
                }), c.f.add(C, "focus", function() {
                    d.Hide()
                }), c.f.add(C, "input", function() {
                    d.Hide(), C.value = n.i(c.s)(C.value, STORE.currencyDataObj[_]["show-precision"])
                })), u()
            }

            function o(t) {
                var e = c.f.target(t),
                    a = n.i(c.g)(e, "action");
                n.i(c.g)(e, "stop") && c.f.stop(t), a && D[a.attr] && D[a.attr](a.node)
            }

            function u() {
                D.ver = 1 * new Date
            }

            function l() {
                var t = 1 * g;
                H[k.base] = 0, H[k.quote] = 1, D.ver !== B && (B = D.ver, N.innerHTML = _, O.className = H.className[t], M.className = H.tips[t], I.innerHTML = h.getLang(H.title[t]), A.innerHTML = n.i(c.b)(H.money[t][_], STORE.currencyDataObj[_]["show-precision"]) + " " + _, C.value = "", D.oldTab && (D.oldTab.className = ""), q[H[_]].className = "cur", D.oldTab = q[H[_]])
            }

            function T() {
                var t = this;
                t.changeDirection = function() {
                    g = !g, u()
                }, t.changeFilter = function(t) {
                    _ = t.dataset.filter, u()
                }, t.allIn = function(t) {
                    var e = 1 * g;
                    C.value = n.i(c.b)(H.money[e][_], STORE.currencyDataObj[_]["show-precision"])
                }
            }

            function L(t) {
                var e = 1 * g;
                if (!P)
                    if (d.Hide(), "submit" == t.type) {
                        if (!C.value) return d.Show(C, h.getLang("请先输入数量"));
                        P = 1, H.fn[e]({
                            data: {
                                amount: C.value,
                                currency: _,
                                symbol: k.base + k.quote
                            }
                        }).then(function(t) {
                            var e = t.data;
                            return P = 0, "ok" === e.status ? (C.value = "", p.Close(), k.success && k.success(t), b.Show(h.getLang("操作成功"))) : b.Error(e["err-msg"])
                        })
                    } else "open" == t.type ? c.f.add(document, "mousewheel", E) : "close" == t.type && c.f.remove(document, "mousewheel", E)
            }

            function E(t) {
                c.f.stop(t)
            }

            function x(t, e) {
                var n = t.type ? "in" == t.type ? 0 : 1 : 0,
                    a = [h.getLang("转入本金"), h.getLang("转出本金")];
                return h._keys(e), a[n]
            }
            var O, I, A, q, C, N, P, M, D = {
                    ver: 0
                },
                B = 0,
                H = {
                    className: ["tio_in", "tio_out"],
                    money: [f, m],
                    title: ["转入本金", "转出本金"],
                    fn: [s.y, s.z],
                    tips: ["hb_icon_tip hide", "hb_icon_tip"]
                };
            return n.i(c.h)(T, D), {
                open: t,
                title: x,
                construct: e
            }
        }()
    },
    48: function(t, e, n) {
        "use strict";
        var a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(16),
            s = (n.n(c), n(66)),
            u = n.n(s),
            l = n(4),
            d = n(0),
            p = (n(13), n(2)),
            f = (n(6), n(1)),
            m = n(15),
            g = n(21),
            _ = new m.a,
            v = n.i(d.n)(),
            b = {
                level: 0,
                monthIndex: 0
            },
            h = n.i(d.o)(u.a),
            y = new p.a,
            k = void 0,
            w = void 0,
            S = void 0,
            T = void 0,
            L = void 0,
            E = void 0,
            x = void 0,
            O = void 0,
            I = void 0;
        e.a = function() {
            function t(e) {
                x ? (window.spotBalance || E || (E = 1, _.Get("spot")), e && e(), o(), k.Open(), x.inited ? x.Reload() : x.Init({
                    renderTo: "#ali_captcha",
                    appkey: "FFFF0000000001796AA8",
                    scene: "activity",
                    callback: function(t) {
                        O = t
                    }
                })) : setTimeout(function() {
                    t(e)
                }, 100)
            }

            function e(t) {
                return k && k.Close(t), k
            }

            function a(t) {
                L = 0, w = t, v._keys(t.lang), b = {
                    level: w.data.level || 0,
                    monthIndex: w.data.monthIndex || 0,
                    targetLevel: w.data.targetLevel || 0
                }, S = {
                    Num: d.b,
                    lang: v.getLang,
                    data: t.data,
                    page: {
                        title: t.title
                    },
                    btn: {
                        submit: v.getLang("确定")
                    }
                }, k = k || new l.a({
                    html: n.i(d.d)(n.i(l.b)(h.html).html, S)
                }), !T && d.f.add(k.dialog, "click", m), T = 1, k.dialog.querySelector("b").innerHTML = N(null, w.block), k.callback(q), "upgradeVip" === w.block && n.i(f.t)({
                    data: {
                        source: "sys"
                    }
                }).then(function(t) {
                    var e = t.data;
                    "ok" === e.status ? (b.fee = [], e.data.forEach(function(t) {
                        b.fee[t.level] = t
                    }), p()) : myToast.Error(e["err-msg"], 2e3)
                })
            }

            function o() {
                k.dialog.querySelector('[block="content"]').innerHTML = n.i(d.d)(h.block[w.block], S), "vip" === w.block ? (k.dialog.querySelector('[block="level"]').innerHTML = h.block.loading, k.dialog.querySelector('[block="validity_days"]').innerHTML = h.block.loading) : "prolongVip" === w.block ? (k.dialog.querySelector('[block="validity_days"]').innerHTML = h.block.loading, k.dialog.querySelector('p[data="dia_title"]').innerHTML = n.i(d.d)(h.block.dia_title_vip_more, {
                    Num: d.b,
                    lang: v.getLang
                })) : "upgradeVip" === w.block && (k.dialog.querySelector('[block="upgradeLevel"]').innerHTML = h.block.loading, k.dialog.querySelector('p[data="dia_title"]').innerHTML = n.i(d.d)(h.block.dia_title_vip_levelup, {
                    Num: d.b,
                    lang: v.getLang
                })), P()
            }

            function c() {
                b.month = b.data.data.data[b.level], k.dialog.querySelector('[block="validity_days"]').innerHTML = n.i(d.d)(h.block.validity_days, {
                    data: b.month["price-plans"],
                    Num: d.b,
                    monthIndex: b.monthIndex,
                    lang: v.getLang
                }), s()
            }

            function s() {
                var t = null;
                b.month["price-plans"].forEach(function(e) {
                    1 == e["number-of-month"] && (t = e)
                }), t && b.month["price-plans"][b.monthIndex]["number-of-month"] == t["number-of-month"] && (t = null), k.dialog.querySelector('[block="amount"]').innerHTML = b.month["price-plans"][b.monthIndex].price + ' <em class="uppercase">' + b.month["charge-currency"] + "</em>" + (t ? '<span class="line-through">' + n.i(d.b)(t.price * b.month["price-plans"][b.monthIndex]["number-of-month"]) + '<em class="uppercase">' + b.month["charge-currency"] + "</em></span>" : ""), u()
            }

            function u() {
                window.spotBalance && k.dialog && k.dialog.querySelector('[block="tradeht"]') && (k.dialog.querySelector('[block="tradeht"]').innerHTML = n.i(d.b)(window.spotBalance, 8))
            }

            function p() {
                b.fee && k.dialog && k.dialog.querySelector('[block="tradeht"]') && (k.dialog.querySelector('[block="amount"]').innerHTML = n.i(d.b)(b.fee[1 * b.targetLevel + 1].amount, 8))
            }

            function m(t) {
                var e = d.f.target(t),
                    a = n.i(d.g)(e, "action");
                n.i(d.g)(e, "stop") && d.f.stop(t), a && D[a.attr] && D[a.attr](a.node)
            }

            function A() {
                var t = this;
                t.showAllLevel = function(t) {
                    t.parentNode.parentNode.className = "vip_type vip_all_level", I = 1
                }, t.showAllOtherLevel = function(t) {
                    t.parentNode.parentNode.className = "vip_type vip_all_other_level", k.dialog.querySelector('[block="level_title"]').className = "input_top level_target_only", I = 1
                }, t.selectLevel = function(t) {
                    "vip" === w.block ? b.level = t.dataset.level : b.targetLevel = t.dataset.level, b.monthIndex = 0, k.dialog.querySelector('[block="level_title"]') && (k.dialog.querySelector('[block="level_title"]').className = "input_top level_target"), P(), I = null
                }, t.selectMonth = function(t) {
                    b.monthIndex = t.dataset.monthIndex, c()
                }
            }

            function q(t) {
                if ("close" === t.type && C(), !L && "submit" === t.type) {
                    if (!O) return y.Error(LANG.dialog["请先拖动滑块验证"], 2e3);
                    if (I) return y.Error(LANG.dialog["请完成您的选择"], 2e3);
                    "vip" === w.block && (L = 1, w.success({
                        aLiData: O,
                        level: b.data.data.data[b.level],
                        validity: b.data.data.data[b.level]["price-plans"][b.monthIndex]
                    }, C)), "prolongVip" === w.block && (L = 1, w.success({
                        aLiData: O,
                        validity: b.data.data.data[b.level]["price-plans"][b.monthIndex]
                    }, C)), "upgradeVip" === w.block && (L = 1, w.success({
                        aLiData: O,
                        level: 1 * b.targetLevel + 1
                    }, C))
                }
            }

            function C(t) {
                t && (e(), window.spotBalance = null, E = null), x.Reload(), O = null, I = null, L = 0
            }

            function N(t, e) {
                var n = {
                    vip: "开通VIP",
                    prolongVip: "VIP续费",
                    upgradeVip: "VIP升级"
                };
                return t && v._keys(t), v.getLang(n[e])
            }
            var P = function() {
                    var t = r()(i.a.mark(function t() {
                        var e, a;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.t0 = b.data, t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, n.i(f.s)();
                                case 4:
                                    t.t0 = t.sent;
                                case 5:
                                    e = t.t0, a = e.data, b.data = {
                                        data: a
                                    }, "vip" === w.block ? (k.dialog.querySelector('[block="level"]').innerHTML = n.i(d.d)(h.block.level, {
                                        lang: v.getLang,
                                        Num: d.b,
                                        data: a.data,
                                        level: b.level,
                                        targetLevel: b.targetLevel || 1 * b.level + 1
                                    }), c()) : "prolongVip" === w.block ? (c(), k.dialog.querySelector('[block="level"]').innerHTML = "VIP " + window.STORE.userInfo.vip_level) : "upgradeVip" === w.block && (k.dialog.querySelector('[block="upgradeLevel"]').innerHTML = n.i(d.d)(h.block.upgradeLevel, {
                                        lang: v.getLang,
                                        data: a.data,
                                        Num: d.b,
                                        level: window.STORE.userInfo.vip_level - 1,
                                        startLevel: 1 * window.STORE.userInfo.vip_level,
                                        targetLevel: b.targetLevel || 1 * window.STORE.userInfo.vip_level
                                    }), u(), p());
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                M = function() {
                    var t = r()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.t0 = x, t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, n.i(g.a)();
                                case 4:
                                    t.t0 = t.sent;
                                case 5:
                                    x = t.t0;
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                D = {};
            return n.i(d.h)(A, D), _.Then = function(t) {
                t.list.forEach(function(t) {
                    "ht" === t.currency && "trade" === t.type && (window.spotBalance = t.balance)
                }), u()
            }, M(), {
                open: t,
                title: N,
                construct: a
            }
        }()
    },
    49: function(t, e, n) {
        "use strict";
        var a = n(8),
            i = n.n(a),
            o = n(7),
            r = n.n(o),
            c = n(16),
            s = (n.n(c), n(67)),
            u = n.n(s),
            l = n(4),
            d = n(0),
            p = n(13),
            f = n(2),
            m = (n(6), n(1), n(15)),
            g = n(21),
            _ = new m.a,
            v = n.i(d.n)(),
            b = n.i(d.o)(u.a),
            h = new f.a,
            y = void 0,
            k = void 0,
            w = void 0,
            S = void 0,
            T = void 0,
            L = void 0,
            E = void 0,
            x = void 0,
            O = 1;
        e.a = function() {
            function t(e) {
                E ? (window.spotBalance || L || (L = 1, _.Get("spot")), e && e(), o(), y.Open(), E.inited ? E.Reload() : E.Init({
                    renderTo: "#ali_captcha",
                    appkey: "FFFF0000000001796AA8",
                    scene: "activity",
                    callback: function(t) {
                        x = t
                    }
                })) : setTimeout(function() {
                    t(e)
                }, 100)
            }

            function e(t) {
                return y && y.Close(t), y
            }

            function a(t) {
                T = 0, k = t, O = 1, v._keys(t.lang), w = {
                    Num: d.b,
                    lang: v.getLang,
                    page: {
                        title: t.title
                    },
                    btn: {
                        submit: v.getLang("确定")
                    }
                }, y = y || new l.a({
                    html: n.i(d.d)(n.i(l.b)(b.html).html, w)
                }), !S && d.f.add(y.dialog, "click", f), S || (d.f.add(y.dialog.querySelector("input"), "focus", function() {
                    y.dialog.querySelector("input").setAttribute("isfocus", 1)
                }), d.f.add(y.dialog.querySelector("input"), "blur", function() {
                    y.dialog.querySelector("input").removeAttribute("isfocus")
                }), u()), S = 1, y.Then = I
            }

            function o() {
                var t = y.dialog.querySelector("#limit_vote");
                t.innerHTML = n.i(d.p)(t.dataset.value, k.limit), c(), y.dialog.querySelector('p[data="dia_title"]').innerHTML = LANG.dialog["使用HT进行投票后，已支付的HT不予退还"]
            }

            function c() {
                y.dialog.querySelector("input").value = O || "", y.dialog.querySelector('[block="amount"]').innerHTML = (O ? n.i(p.a)(k.cost, O) : "---") + " HT"
            }

            function s() {
                window.spotBalance && y.dialog && y.dialog.querySelector('[block="tradeht"]') && (y.dialog.querySelector('[block="tradeht"]').innerHTML = n.i(d.b)(window.spotBalance, 8))
            }

            function u() {
                return y.dialog.querySelector("input") && y.dialog.querySelector("input").getAttribute("isfocus") ? (O = 1 * y.dialog.querySelector("input").value, (O <= 0 || !O) && (O = null), O > k.limit && (O = 1 * k.limit), c(), void setTimeout(u, 50)) : setTimeout(u, 50)
            }

            function f(t) {
                var e = d.f.target(t),
                    a = n.i(d.g)(e, "action");
                n.i(d.g)(e, "stop") && d.f.stop(t), a && N[a.attr] && N[a.attr](a.node)
            }

            function m() {
                var t = this;
                t.sub = function() {
                    O - 1 <= 0 ? O = 1 : O -= 1, c()
                }, t.add = function() {
                    O + 1 > k.limit ? O = 1 * k.limit : O += 1, c()
                }
            }

            function I(t) {
                if ("close" === t.type) return A();
                if (!T && "submit" === t.type) {
                    if (!x) return h.Error(LANG.dialog["请先拖动滑块验证"], 2e3);
                    if (!O) return A(), h.Error(LANG.dialog["投票数量不能为0"], 2e3);
                    if (1 * n.i(p.a)(k.cost, O) > 1 * window.spotBalance) return A(), h.Error(LANG.dialog["可用HT不足"], 2e3);
                    T = 1, k.success({
                        aLiData: x,
                        voteAmount: O
                    }, A)
                }
            }

            function A(t) {
                t && (e(), window.spotBalance = null, L = null, O = 1), E.Reload(), x = null, T = 0
            }

            function q(t) {
                return v._keys(t), v.getLang("投票")
            }
            var C = function() {
                    var t = r()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (t.t0 = E, t.t0) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, n.i(g.a)();
                                case 4:
                                    t.t0 = t.sent;
                                case 5:
                                    E = t.t0;
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    }));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                N = {};
            return n.i(d.h)(m, N), _.Then = function(t) {
                t.list.forEach(function(t) {
                    "ht" === t.currency && "trade" === t.type && (window.spotBalance = t.balance)
                }), s()
            }, C(), {
                open: t,
                title: q,
                construct: a
            }
        }()
    },
    5: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = [].concat(r);
            return e[0] = t, s ? c.api : e.join(".")
        }
        n.d(e, "g", function() {
            return x
        }), n.d(e, "c", function() {
            return S
        }), n.d(e, "d", function() {
            return T
        }), n.d(e, "e", function() {
            return L
        }), n.d(e, "a", function() {
            return E
        }), n.d(e, "b", function() {
            return O
        }), n.d(e, "f", function() {
            return I
        });
        var i = n(14),
            o = n.n(i),
            r = location.hostname.split("."),
            c = {
                api: "api.huobi.com",
                www: "content.huobi.pro",
                uc: "uc.huobi.pro",
                vote: "api.hadax.com",
                pro: "www.huobipro.com",
                huobi: "www.huobi.com"
            },
            s = !1,
            u = navigator.userAgent || "",
            l = u.match(/HB_ENV\s?\(([^\)]+)\)/);
        if (l) {
            var d = JSON.parse(l[1]);
            d.api_host && (c.api = d.api_host), d.php_host && (c.www = d.php_host), d.uc_host && (c.uc = d.uc_host), s = !0
        }
        var p = "https:" === window.location.protocol ? "wss:" : "ws:",
            f = /pro-dev|pro_dev/.test(location.hostname) ? "pro-web--dev-1.huobiapps.com" : location.hostname,
            m = /-dev-/.test(f) ? "dev" : "prd",
            g = "dev" === m ? f : a("api"),
            _ = "dev" === m ? f.replace("-web-", "-api-") : a("api"),
            v = "dev" === m ? f.replace("pro-web-", "api-") : c.api,
            b = "dev" === m ? f.replace("pro-web", "www") : c.www,
            h = "dev" === m ? f.replace("pro-web--dev", "uc.dev") : c.uc,
            y = "dev" === m ? f.replace("pro-web--dev", "vote.dev") : c.vote,
            k = "dev" === m ? f.replace("hadax-", "pro-") : c.pro,
            w = "dev" === m ? f.replace("pro-web", "www") : c.huobi,
            S = {
                http: "//" + g,
                rest: "//" + _ + "/v1",
                uc: "//" + h,
                vote: "//" + y,
                ws: p + "//" + _ + "/ws",
                hbws: p + "//" + v + "/ws",
                main: "//" + b,
                type: "prd",
                pro: "//" + k,
                huobi: "//" + w
            },
            T = ["btc", "bcc", "eth", "ltc", "etc"],
            L = {
                eth: "",
                etc: ""
            },
            E = {
                "en-us": "English",
                "zh-cn": "简体中文",
                "zh-hk": "繁體中文",
                "ko-kr": "한국어",
                "ja-jp": "日本語",
                "ru-ru": "Русский",
                "de-de": "Deutsch",
                "fr-fr": "Français",
                "es-es": "Español",
                "th-th": "ไทย",
                "vi-vi": "Tiếng Việt",
                "tr-tr": "Türkiye"
            },
            x = {
                trade: {},
                frozen: {},
                loan: {},
                interest: {},
                "transfer-out-available": {},
                "loan-available": {},
                "risk-rate": 2,
                "fl-price": "0",
                "fl-type": "safe",
                state: ""
            },
            O = "zh-cn",
            I = [37, 183, 71, 169, 100, 83, 88, 182, 60, 32];
        window.API_ENV = S, localStorage.languages = o()(E), localStorage.defaultLang = O
    },
    50: function(t, e) {},
    51: function(t, e) {},
    52: function(t, e) {},
    53: function(t, e) {},
    54: function(t, e) {},
    55: function(t, e) {},
    56: function(t, e) {},
    57: function(t, e) {
        t.exports = '<div class="dia_add_address">\n    <div class="dia_input">\n        <div class="input_top">\n            <b><i class="upper"><%=currency%></i> <%=lang("地址")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_address_address">\n        </div>\n    </div>\n    <% if (addr_tag){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("标签")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_address_tag" disabled value="<%=addr_tag%>">\n        </div>\n    </div>\n    <% } %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("备注")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_address_alias">\n        </div>\n    </div>\n    <% if (!no_verify) { %>\n    <% if(UI.setting.verify_phone){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("短信验证码")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="sms_code" maxlength="6">\n            <span class="input_text_right sms_verify" act="sms_btn_wrap">\n            <a href="" action="getSms" stop="1"><%=lang("点击获取")%></a>\n        </span>\n        </div>\n        <p class="input_bottom">\n            <%=lang("手机号")%> <b class="color_master"><%=UI.phone%></b>\n        </p>\n    </div>\n    <% } %>\n    <% if(UI.setting.verify_email){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("邮箱验证码")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="email_code" verify="1" maxlength="6">\n            <span class="input_text_right sms_verify" act="email_btn_wrap">\n            <a href="" action="getEmail" stop="1"><%=lang("点击获取")%></a>\n        </span>\n        </div>\n        <p class="input_bottom">\n            <%=lang("邮箱")%> <b class="color_master"><%=UI.email%></b>\n        </p>\n    </div>\n    <% } %>\n    <% if(UI.setting.verify_ga){ %>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("谷歌验证码")%></b>\n            <p class="pro_warning"></p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="ga_code">\n        </span>\n        </div>\n    </div>\n    <% } %>\n    <% } %>\n</div>\n'
    },
    58: function(t, e, n) {
        t.exports = '<div block="content"></div>\n<block name="loading">\n\t<div class="dia_loading" style="text-align: center"><img class="dia_wd_address_loading" src="' + n(20) + '"/></div>\n</block>\n<block name="content">\n\t<%=content%>\n</block>\n\n<block name="login_verify_setting">\n\t\t<% if(item === "PHONE"){%>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("手机号")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=data.phone%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("短信验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="auth_code" maxlength="6" >\n\t\t\t\t\t<span class="input_text_right sms_verify" act="sms_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getSms" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <%} %>\n\t\t<% if(item === "EMAIL"){ %>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=data.email%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="auth_code" verify="1" maxlength="6">\n\t\t\t\t\t<span class="input_text_right sms_verify" act="email_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getEmail" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <%\n\n\t\t} %>\n\t    <% if(item === "GA"){ %>\n\t    <div class="dia_input">\n\t        <div class="input_top">\n\t            <b><%=lang("谷歌验证码")%></b>\n\t            <p class="pro_warning"></p>\n\t        </div>\n\t        <div class="input_middle">\n\t            <input class="input_text" type="text" pro_name="auth_code">\n\t        </span>\n\t        </div>\n\t    </div>\n\t    <% } %>\n</block>\n\n<block name="verify_setting">\n\t<% if(UI.setting.verify_phone || item === "PHONE"){ %>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("手机号")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.phone%>">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("短信验证码")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" pro_name="sms_code" maxlength="6">\n\t\t\t\t<span class="input_text_right sms_verify" act="sms_btn_wrap">\n\t\t\t\t\t<a href="" action="getSms" stop="1">\n\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t<% } %>\n\t<% if(UI.setting.verify_email || item === "EMAIL"){ %>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("邮箱")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.email%>">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("邮箱验证码")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" type="text" pro_name="email_code" verify="1" maxlength="6">\n\t\t\t\t<span class="input_text_right sms_verify" act="email_btn_wrap">\n\t\t\t\t\t<a href="" action="getEmail" stop="1">\n\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t<% } %>\n\t<% if(UI.setting.verify_ga || item === "GA"){ %>\n\t<div class="dia_input">\n\t\t<div class="input_top">\n\t\t\t<b><%=lang("谷歌验证码")%></b>\n\t\t\t<p class="pro_warning"></p>\n\t\t</div>\n\t\t<div class="input_middle">\n\t\t\t<input class="input_text" type="text" pro_name="ga_code" maxlength="6">\n\t\t</span>\n\t\t</div>\n\t</div>\n\t<% } %>\n</block>'
    },
    59: function(t, e) {
        t.exports = '<div class="dia_ticket">\n\t<div class="dia_ticket_head">\n\t\t<dl class="<%if(act){%>dia_ticket_to<%}else{%>dia_ticket_from<%}%>">\n\t\t\t<dt class="upper"><%=scoin.join("+")%></dt>\n\t\t\t<dd><%=lang("可转换")%><em>---</em><span class="huobi_pro_info"><div class="dia_tips"><div><%=lang("1 BT1 + 1 BT2 = 1 BTC，因此BT1、BT2可用余额中的较小值为最大可转换数额")%></div><i>█</i></div>\n        </span></dd>\n\t\t</dl>\n\t\t<dl class="<%if(!act){%>dia_ticket_to<%}else{%>dia_ticket_from<%}%>">\n\t\t\t<dt class="upper"><%= currency %></dt>\n\t\t\t<dd><%=lang("可转换")%><em>---</em></dd>\n\t\t</dl>\n\t\t<b action="switch_dir"><i class="hb_icon_split_coin"></i><em><%=lang("点击切换")%></em></b>\n\t</div>\n\t<div class="dia_ticket_data">\n\t    <div class="dia_input">\n\t        <div class="input_top">\n\t            <b><%=lang("转换数量")%></b>\n\t            <p class="pro_warning"><%=lang("分叉币无需手续费，支持实时到账。")%></p>\n\t        </div>\n\t        <div class="input_middle">\n\t            <input class="input_text" type="text" pro_name="pro_dia_amount" maxlength="20">\n\t            <span class="input_text_right tio_all_in">|<b action="allIn"><%=lang("全部转换")%></b></span>\n\t        </div>\n\t        <p class="input_bottom align_left">\n\t        </p>\n\t    </div>\n\t</div>\n\t<div class="dia_ticket_ouput">\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("将消耗")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" disabled type="text" pro_name="pro_dia_from">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="dia_input">\n\t\t\t<div class="input_top">\n\t\t\t\t<b>\n\t\t\t\t\t<%=lang("将生成")%>\n\t\t\t\t</b>\n\t\t\t\t<p class="pro_warning"></p>\n\t\t\t</div>\n\t\t\t<div class="input_middle">\n\t\t\t\t<input class="input_text" disabled type="text" pro_name="pro_dia_to">\n\t\t\t</div>\n\t\t</div>\n\t\t\x3c!-- <dl>\n\t\t\t<dt><%=lang("将消耗")%></dt>\n\t\t\t<dd><%=lang("将生成")%></dd>\n\t\t</dl> --\x3e\n\t\t\x3c!-- <dl block="result" class="upper"></dl> --\x3e\n\t</div>\n</div>\n<block name="result">\n\t<% if(!act){%>\n\t<dt>\n\t\t<% for(var i = 0; i < scoin.length; i ++){%>\n\t\t\t<%if(i){%><b>+</b><%}%><em><%=amount%></em><%=scoin[i]%>\n\t\t<% } %>\n\t</dt>\n\t<dd><em><%=amount%></em><%= currency %></dd>\n\t<% } else {%>\n\t<dt><em><%=amount%></em><%= currency %></dt>\n\t<dd>\n\t\t<% for(var i = 0; i < scoin.length; i ++){%>\n\t\t\t<%if(i){%><b>+</b><%}%><em><%=amount%></em><%=scoin[i]%>\n\t\t<% } %>\n\t</dd>\n\t<% }%>\n</block>'
    },
    6: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = this;
            e.Init = function() {
                e.tips = new r.b(o.a, "body"), e.elemIcon = e.tips.querySelector(".icon"), e.elemMsg = e.tips.querySelector(".msg"), e.Hide()
            }, e.Show = function(t, a, i) {
                var o = n.i(c.r)(t),
                    r = (t.offsetHeight, t.offsetWidth),
                    s = void 0,
                    u = void 0,
                    l = void 0;
                switch (i = i || "center", e.elem = t, e.msg = a, e.visibility = 1, e.elemMsg.innerHTML = a, e.tips.style.visibility = "visible", s = e.tips.offsetHeight, u = e.tips.offsetWidth, i) {
                    case "left":
                        l = o.left + r + 10 - u + "px";
                        break;
                    case "right":
                        l = o.left - 10 + "px";
                        break;
                    default:
                        l = o.left + r / 2 - u / 2 + "px"
                }
                e.tips.style.left = l, e.tips.style.top = o.top - s - 3 + "px", e.tips.className = "component_tips tips_position_" + i
            }, c.f.add(window, "resize", function() {
                e.visibility && e.Show(e.elem, e.msg)
            }), e.Hide = function() {
                e.tips.style.visibility = "hidden", e.tips.style.top = "-999px", e.visibility = 0
            }, e.Init()
        }
        var i = n(34),
            o = n.n(i),
            r = n(9),
            c = n(0),
            s = n(33);
        n.n(s);
        e.a = a
    },
    60: function(t, e) {
        t.exports = '<div class="credits_confirm">\n    <div block="content"></div>\n    \x3c!--滑块???--\x3e\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang(\'验证\')%>\n        </div>\n        <div class="input_middle">\n            <div class="ali_captcha" id="ali_captcha"></div>\n        </div>\n    </div>\n</div>\n\n<block name="content">\n    <div class="dia_input credit_detail">\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'点卡套餐\')%>\n                <em><%=data.name%> x<%=data.quantity%></em>\n            </div>\n        </div>\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'点数\')%>\n                <em><%=data["total-points"]%> <%= lang(\'点\') %></em>\n            </div>\n        </div>\n        <%if(data["total-gift"]*1>0){%>\n        <div class="buy_detail">\n            <div class="input_top">\n                <%= lang(\'赠送币数\')%>\n                <em class="uppercase"><%=data["total-gift"]%>  <%=data["gift-currency"]%></em>\n            </div>\n        </div>\n        <%}%>\n    </div>\n\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang(\'应付金额\')%>\n        </div>\n        <div class="input_middle">\n            <p class="total_amount"><%=data["total-amount"]%> <em class="uppercase"><%=data.currency%></em></p>\n            <% if(data.currency != "usdt"){%>\n            <p class="price_tips"><%= lang(\'折算价格\')%>:1USDT = <%=Num((1/data["price"]),STORE.currencyDataObj[data.currency]["show-precision"])%> <span class="uppercase"><%=data.currency%></span> <i class="hb_icon_tip"><em><%= lang(\'根据行情实时折算，以最终生成的购买订单中价格为准\')%></em></i></p>\n            <%}%>\n        </div>\n    </div>\n</block>\n<block name="dia_title">\n    <p class="title_tips"><%if(n > 0){%><%= lang(\'请在 %s 秒内支付完毕\').replace(\'%s\',\'<i style="width:30px;text-align:center;display:inline-block;">\'+n+\'</i>\')%><%}else{%><%= lang(\'订单已失效\')%><%}%></p>\n</block>'
    },
    61: function(t, e) {
        t.exports = '<div class="credits_confirm">\n    <div block="content"></div>\n</div>\n<block name="transfer_out">\n\n    <div class="dia_input credit_detail">\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'对方UID\') %>\n                <em><%=data["face-uid"]%></em>\n            </div>\n        </div>\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'对方账号\') %>\n                <em><%=data["face-account"]%></em>\n            </div>\n        </div>\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'转让点数\') %>\n                <em><%=Num(data["points"],8)%> <%= lang(\'点\') %></em>\n            </div>\n        </div>\n    </div>\n\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang(\'转让总价\') %>\n        </div>\n        <div class="input_middle">\n            <p class="total_amount"><%=Num(data["price"],STORE.currencyDataObj.usdt["show-precision"])%> <em class="uppercase">USDT</em><br/><b style="padding-left:0;"><%= lang(\'折合每点价格\') %>：<%=Num(data["price"]/data["points"],STORE.currencyDataObj.usdt["show-precision"])%> USDT/<%= lang(\'点\') %></b></p>\n        </div>\n    </div>\n</block>\n\n<block name="big_price">\n    <p>\n        <%= lang(\'转让单价过高\') %>：<%=Num(data.price,STORE.currencyDataObj.usdt["show-precision"])%> USDT/<%= lang(\'点\') %> <br>\n        <%= lang(\'确定以此价格转让？\') %>\n    </p>\n</block>\n\n<block name="dia_title">\n    <p class="title_tips"><%= lang(\'请仔细核对对方UID及对方账号，以免转错。\') %></p>\n</block>\n\n<block name="transfer_in">\n        <div class="dia_input">\n        <div class="input_top">\n            <%= lang(\'转让总价\') %>\n        </div>\n        <div class="input_middle">\n            <p class="total_amount"><%=Num(data["total-amount"],STORE.currencyDataObj.usdt["show-precision"])%> <em class="uppercase"><%=data.currency%></em><br/><b style="padding-left:0;"><%= lang(\'折合每点价格\') %>：<%=Num(data["total-amount"]/data["total-points"],STORE.currencyDataObj.usdt["show-precision"])%> USDT/ <%= lang(\'点\') %></b></p>\n        </div>\n    </div>\n    <div class="dia_input credit_detail">\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'对方UID\') %>\n                <em><%=data.uid%></em>\n            </div>\n        </div>\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'对方账号\') %>\n                <em><%=data.account || data.phone || data.email%></em>\n            </div>\n        </div>\n        <div class="detail_in">\n            <div class="input_top">\n                <%= lang(\'转让点数\') %>\n                <em><%=Num(data["total-points"],8)%>  <%= lang(\'点\') %></em>\n            </div>\n        </div>\n    </div>\n\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang(\'应付\') %>\n        </div>\n        <div class="input_middle">\n            <p class="total_amount"><%=Num(data["total-amount"],STORE.currencyDataObj.usdt["show-precision"])%> <em class="uppercase">USDT</em></p>\n            <p class="price_tips"> <%= lang(\'可用\') %> <%=Num(data["usdt-trade"],STORE.currencyDataObj.usdt["show-precision"])%> <em class="uppercase">USDT</em></p>\n        </div>\n    </div>\n</block>'
    },
    62: function(t, e, n) {
        t.exports = '<div block="content"></div>\n<block name="loading">\n\t<div class="dia_loading" style="text-align: center"><img class="dia_wd_address_loading" style="width:32px;" src="' + n(20) + '"/></div>\n</block>\n<block name="wegwit2x">\n\t<div class="arg_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont"><%=lang(\'P_dialog_segwit2x_agreement\')%></div>\n\t</div>\n\t<div class="dia_arg_btn btn_segwit2x">\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang("我已阅读并同意上述协议")%></button>\n\t</div>\n</block>\n<block name="agreement_margin">\n\t<div class="arg_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont"><%=lang(\'P_dialog_agreement_margin\')%></div>\n\t</div>\n\t<div class="dia_arg_btn btn_margin" style="margin-top: 20px">\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang("我已阅读并同意上述协议")%></button>\n\t</div>\n</block>\n\n<block name="agreement">\n\t<div class="arg_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont"><%= lang(option.dia_content) %></div>\n\t</div>\n\t<%if(option.dia_checkbox){%>\n\t<div class="dia_arg_btn dia_global_btn" style="padding-top: 10px">\n\t\t<label>\n\t\t\t<input type="checkbox" name="agree" checked="checked"> <%=lang(option.dia_checkbox)%>\n\t\t</label>\n\t</div>\n\t<%}%>\n\t<div class="dia_arg_btn btn_margin" style="margin-top: 20px">\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang(option.dia_button)%></button>\n\t</div>\n</block>\n\n<block name="fireGlobal">\n\t<div class="arg_content dia_global_content">\n\t\t<div class="dia_top_mask" style="display:none"></div>\n\t\t<div class="dia_bottom_mask"></div>\n\t\t<div class="dia_cont dia_global">\n<p><%=lang("尊敬的用户您好：")%></p>\n<p><%=lang("欢迎您选择火币全球专业站（www.huobi.pro）（以下简称“专业站”）。为了您使用方便，您在火币网（www.huobi.com）的账户信息可以通过开通操作后在专业站使用，但前提是您必须同意下列条件，如您不同意下列任一条件，请您停止下一步操作并立即退出本页面：")%></p>\n<p><%=lang("1. 同意火币全球专业站的《用户协议》（包括但不限于正文、《隐私条款》、《了解你的客户和反洗钱政策》等）的内容，请您务必仔细阅读并了解相关内容，详见链接")%>(<a href=\'<%=location.protocol%>//<%=location.hostname%><%=lang("ROOT")%>about/agreement\' target="_blank"><%=location.protocol%>//<%=location.hostname%><%=lang("ROOT")%>about/agreement</a>);</p>\n<p><%=lang("2. 如您点击“开通”，即视为: 您已经仔细阅读并完全理解且同意了《用户协议》等内容，并同意受到《用户协议》的约束和管辖；且您已经授权专业站访问您在火币网的账户信息，包括但不限于注册信息、认证信息等。")%></p>\n\t\t</div>\n\t</div>\n\t<div class="dia_arg_btn dia_global_btn">\n\t\t<p><input type="checkbox" chekced="" id="agreeAgt" name="" style="margin-right:10px;"><label for="agreeAgt"><%=lang("开通后表明您已同意以上授权说明及")%><a href=\'<%=location.protocol%>//<%=location.hostname%><%=lang("ROOT")%>about/agreement\' target="_blank" class="main_link"><%=lang("《用户协议》")%></a></label></p>\n\t\t<button class="btn btn_submit btn-primary" action="btn_submit"><%=lang("开通火币全球专业站")%></button>\n\t</div>\n</block>\n\n<block name="content">\n\t<%=content%>\n</block>\n<block name="verify_setting">\n\t\t<% if((option.action !== "enable" && UI.setting.verify_phone) || item === "PHONE"){ %>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("手机号")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.phone%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("短信验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="sms_code" maxlength="6">\n\t\t\t\t\t<span class="input_text_right sms_verify" act="sms_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getSms" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <% } %>\n\t\t<% if((option.action !== "enable" && UI.setting.verify_email) || item === "EMAIL"){ %>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" disabled value="<%=UI.email%>">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="dia_input">\n\t\t\t\t<div class="input_top">\n\t\t\t\t\t<b>\n\t\t\t\t\t\t<%=lang("邮箱验证码")%>\n\t\t\t\t\t</b>\n\t\t\t\t\t<p class="pro_warning"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="input_middle">\n\t\t\t\t\t<input class="input_text" type="text" pro_name="email_code" verify="1" maxlength="6">\n\t\t\t\t\t<span class="input_text_right sms_verify" act="email_btn_wrap">\n\t\t\t\t\t\t<a href="" action="getEmail" stop="1">\n\t\t\t\t\t\t\t<%=lang("点击获取")%>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    <% } %>\n\t    <% if((option.action !== "enable" && UI.setting.verify_ga) || item === "GA"){ %>\n\t    <div class="dia_input">\n\t        <div class="input_top">\n\t            <b><%=lang("谷歌验证码")%></b>\n\t            <p class="pro_warning"></p>\n\t        </div>\n\t        <div class="input_middle">\n\t            <input class="input_text" type="text" pro_name="ga_code">\n\t        </span>\n\t        </div>\n\t    </div>\n\t    <% } %>\n</block>\n<block name="disable_margin">\n\t<p><%=lang("您所在的国家或地区暂不支持杠杆功能")%></p>\n</block>\n<block name="disable_margin_ip">\n\t<p><%=lang("您的IP登录归属地不支持杠杆功能")%></p>\n\t<p><%=lang("如果您不是该归属地国籍，请先进行实名认证")%></p>\n</block>\n<block name="disable_vote">\n\t<p><%=lang("您所在的国家或地区暂不支持此功能")%></p>\n</block>\n<block name="disable_points_ip">\n\t<p><%=lang("您的IP登录归属地不支持点卡购买功能")%></p>\n\t<p><%=lang("如果您不是该归属地国籍，请先进行实名认证")%></p>\n</block>'
    },
    63: function(t, e) {
        t.exports = '<div class="repay_content">\n    <div class="dia_input">\n        <div class="input_top">\n           <%=lang("杠杆账户")%>\n        </div>\n        <div class="input_middle">\n            <input class="input_text font_16 uppercase" type="text" disabled="disabled" value="<%=symbols%>">\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%=lang("应还数量")%>\n        </div>\n        <div class="input_middle">\n            <p class="font_24"><%=Num(add(order["loan-balance"]*1 , order["interest-balance"]*1),"8")%> <em class="uppercase"><%=order.currency%></em></p>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="left_amount">\n            <div class="input_top">\n                <%=lang("借贷数量")%>\n                <em class="uppercase"><%=Num(order["loan-balance"],"8")%> <%=order.currency%></em>\n            </div>\n        </div>\n        <div class="left_amount">\n            <div class="input_top">\n                <%=lang("利息")%>\n                <em class="uppercase"><%=Num(order["interest-balance"],"8")%> <%=order.currency%></em>\n            </div>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("归还数量")%></b>\n            <p class="avail_able">\n                <%=lang("可用")%> <%=Num(cash[order.currency],STORE.currencyDataObj[order.currency]["show-precision"])%> <em class="uppercase"><%=order.currency%></em>\n            </p>\n        </div>\n        <div class="input_middle">\n            <input flag="amt" class="input_text" type="text">\n            <span class="input_text_right tio_all_in"><em class="uppercase"><%=order.currency%></em> <s></s><b action="allIn"><%=lang("全部")%></b></span>\n        </div>\n    </div>\n</div>'
    },
    64: function(t, e) {
        t.exports = '<div class="lead_dialog">\n\t<p><%=lang("请您先完成如下操作")%>：</p>\n\t<ul block="task_list"></ul>\n</div>\n<block name="task_list">\n\t<%for(var i = 0,l = task.length; i < l; i++){%>\n\n\t\t<li class="<%=task[i].index ? \'complete\' : \'\'%>">\n\t\t\t<i class="<%=task[i].status ? \'hb_icon_toast_success\' : \'hb_icon_toast_failed\'%>"></i>\n\t\t\t<span><%=task[i].title%></span>\n\t\t\t<a href="<%=task[i].actionUrl%>" target="_blank" <%if(task[i].index){%>stop="1"<%}%>><%= lang(task[i].status ? "已完成" : task[i].actionName)%></a>\n\t\t</li>\n\t\t<%}%>\n</block>'
    },
    65: function(t, e) {
        t.exports = '<div class="transfer_content">\n    <dl class="tio_form_view">\n        <dt><%=lang("从")%><i class="hb_icon_split_coin" action="changeDirection"></i><%=lang("到")%></dt>\n        <dd flag="dir">\n            <div class="account1"><%=lang("交易账户")%></div>\n            <div class="account2"><span class="uppercase"><%=base%>/<%=quote%></span><%=lang("杠杆账户")%></div>\n        </dd>\n    </dl>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("币种")%></b>\n        </div>\n        <div class="input_middle input_margin_select uppercase" flag="filter">\n            <span action="changeFilter" data-filter="<%=base%>"><%=base%><i></i></span><span action="changeFilter" data-filter="<%=quote%>"><%=quote%><i></i></span>\n        </div>\n\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <b><%=lang("数量")%></b>\n            <p class="avail_able">\n                <%=lang("可转")%> <i flag="ava" class="uppercase">---</i>\n                <i class="hb_icon_tip" flag="tips">\n                    <em><%=lang("杠杆账户的风险率高于200%部分的资金可转出")%></em>\n                </i>\n            </p>\n        </div>\n        <div class="input_middle">\n            <input class="input_text" type="text" pro_name="pro_dia_amount" maxlength="20">\n            <span class="input_text_right tio_all_in"><em class="uppercase" flag="inputFlag"><%=currency%></em> <s></s><b action="allIn"><%=lang("全部")%></b></span>\n        </div>\n\n    </div>\n</div>'
    },
    66: function(t, e, n) {
        t.exports = '<div class="vip_content" block="content"></div>\n<block name="vip">\n    <div class="dia_input pb0_dia_input">\n        <div class="input_top">\n            <%= lang("开通等级") %>\n        </div>\n        <div class="input_middle" block="level"></div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang("开通时长") %>\n        </div>\n        <div class="input_middle vip_long" block="validity_days">\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top"><%= lang("应付") %></div>\n        <div class="input_middle">\n            <p class="total_amount" block="amount">---</p>\n            <p><%= lang("可用") %> <i block="tradeht">---</i> HT <a target="_blank" href="<%=localStorage.root%>ht/intro_get/"><%= lang("获取HT") %></a> </p>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang("验证") %>\n        </div>\n        <div class="input_middle">\n            <div class="ali_captcha" id="ali_captcha"></div>\n        </div>\n    </div>\n</block>\n<block name="level">\n    <ul class="vip_type">\n        <li class="cur">\n            <span><%=lang(data[level || 0]["level-display-name"])%></span>\n            <em><%= lang("交易手续费率") %> <%=lang(\n                (localStorage.lang == "zh-cn" || localStorage.lang == "zh-hk") ? \n                    data[level || 0]["fee-discount-rate"]*10 : \n                    (100-Num(data[level || 0]["fee-discount-rate"]*100,0))\n                )%><%= lang("折") %></em>\n        </li>\n        <%for(var i = 0, l = data.length; i < l; i++){%>\n        <li <%if(level == i){%>class="cur"<%}%> action="selectLevel" data-level="<%=i%>">\n            <span><%=lang(data[i]["level-display-name"])%></span>\n            <em><%= lang("交易手续费率") %><%=lang(\n                (localStorage.lang == "zh-cn" || localStorage.lang == "zh-hk") ? \n                    data[i]["fee-discount-rate"]*10 : \n                    (100-Num(data[i]["fee-discount-rate"]*100,0))+\'% \'\n                )%><%= lang("折") %></em>\n        </li>\n        <% } %>\n        <li class="select_other"><a href="" action="showAllLevel" stop="stop"><%= lang("选择其他等级") %></a></li>\n    </ul>\n</block>\n<block name="validity_days">\n    <%for(var i = 0, l = data.length; i < l; i++){%>\n    <label <%if(i == monthIndex){%>class="cur"<%}%>>\n    <span action="selectMonth" data-month-index="<%=i%>"><%=data[i]["number-of-month"]%> <%= lang(\'个月\') + (+data[i]["number-of-month"] > 1 ? (\n            localStorage.lang == "en-us" ?  "s" : ""\n        ) : \'\') %></span>\n    </label>\n    <% } %>\n</block>\n<block name="loading">\n    <div style="text-align: center;height:50px;line-height:50px;"><img class="dia_wd_address_loading" style="width:32px;" src="' + n(20) + '"/></div>\n</block>\n<block name="prolongVip">\n    <div class="dia_input pb0_dia_input">\n        <div class="input_top">\n            <%= lang("当前等级") %>\n        </div>\n        <div class="input_middle">\n            <p class="total_amount" block="level">---</p>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang("续费时长") %>\n        </div>\n        <div class="input_middle vip_long" block="validity_days"></div>\n    </div>\n\n\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang("应付") %>\n        </div>\n        <div class="input_middle">\n            <p class="total_amount" block="amount">---</p>\n            <p><%= lang("可用") %> <i block="tradeht">---</i> HT <a target="_blank" href="<%=localStorage.root%>ht/intro_get/"><%= lang("获取HT") %></a> </p>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang("验证") %>\n        </div>\n        <div class="input_middle">\n            <div class="ali_captcha" id="ali_captcha"></div>\n        </div>\n    </div>\n</block>\n\n<block name="dia_title_vip_more">\n    <p class="title_tips"><%= lang("续费后VIP等级不变，到期日自动延长") %></p>\n</block>\n\n<block name="dia_title_vip_levelup">\n    <p class="title_tips"><%= lang("升级后会员到期日不变，升级立即生效") %></p>\n</block>\n\n\n<block name="upgradeLevel">\n    <ul class="vip_type vip_type2">\n        <li class="cur">\n            <span><%=lang(data[level || 0]["level-display-name"])%></span>\n            <em><%= lang("交易手续费率") %><%=lang(\n                (localStorage.lang == "zh-cn" || localStorage.lang == "zh-hk") ? \n                    data[level || 0]["fee-discount-rate"]*10 : \n                    (100-Num(data[level || 0]["fee-discount-rate"]*100,0))+\'% \'\n                )%><%= lang("折") %></em>\n        </li>\n        <li class="replace_to"></li>\n        <li class="cur">\n            <span><%=lang(data[targetLevel || 0]["level-display-name"])%></span>\n            <em><%= lang("交易手续费率") %><%=lang(\n                (localStorage.lang == "zh-cn" || localStorage.lang == "zh-hk") ? \n                    data[targetLevel || 0]["fee-discount-rate"]*10 : \n                    (100-Num(data[targetLevel || 0]["fee-discount-rate"]*100,0))+\'% \'\n                )%><%= lang("折") %></em>\n        </li>\n        <%\n            for(var i = startLevel, l = data.length; i < l; i++){\n        %>\n        <li <%if(targetLevel == i){%>class="cur"<%}%> action="selectLevel" data-level="<%=i%>">\n            <span><%=lang(data[i]["level-display-name"])%></span>\n            <em><%= lang("交易手续费率") %><%=lang(\n                (localStorage.lang == "zh-cn" || localStorage.lang == "zh-hk") ? \n                    data[i]["fee-discount-rate"]*10 : \n                    (100-Num(data[i]["fee-discount-rate"]*100,0))+\'% \'\n                )%><%= lang("折") %></em>\n        </li>\n        <% } \n            if(l - startLevel > 1){%>\n        <li class="select_other"><a href="" action="showAllOtherLevel" stop="stop"><%= lang("选择其他等级") %></a></li>\n        <%}else{%>\n        <li></li>\n        <%}%>\n    </ul>\n</block>\n\n<block name="upgradeVip">\n\n    <div class="dia_input pb0_dia_input">\n        <div class="input_top level_target" block="level_title">\n            <em><%= lang("当前等级") %></em><%= lang("升级至") %>\n        </div>\n        <div class="input_middle" block="upgradeLevel"></div>\n    </div>\n\n\n    <div class="dia_input">\n        <div class="input_top price_tips">\n            <%= lang("需支付") %> <i class="hb_icon_tip"><em><%= lang("由于VIP等级价格不同，升级需补齐差价") %></em></i>\n        </div>\n        <div class="input_middle">\n            <p class="total_amount" block="amount">---</p>\n            <p><%= lang("可用") %> <i block="tradeht">---</i> HT <a target="_blank" href="<%=localStorage.root%>ht/intro_get/"><%= lang("获取HT") %></a> </p>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang("验证") %>\n        </div>\n        <div class="input_middle">\n            <div class="ali_captcha" id="ali_captcha"></div>\n        </div>\n    </div>\n</block>'
    },
    67: function(t, e) {
        t.exports = '<div class="vip_content" block="content">\n    <div class="dia_input">\n        <div class="input_top vote_title clearfix">\n            <i><%= lang("投票数") %></i><em id="limit_vote" data-value=\'<%= lang("每人最多投{0}票") %>\'></em>\n        </div>\n        <div class="input_middle vote_amount">\n            <span action="sub">-</span><input type="text" name="" value=""><span action="add">+</span>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top"><%= lang("应付") %></div>\n        <div class="input_middle">\n            <p class="total_amount" block="amount">---</p>\n            <p><%= lang("可用") %> <i block="tradeht">---</i> HT <a target="_blank" href="//www.huobipro.com/ht/intro_get/"><%= lang("获取HT") %></a> </p>\n        </div>\n    </div>\n    <div class="dia_input">\n        <div class="input_top">\n            <%= lang("验证") %>\n        </div>\n        <div class="input_middle">\n            <div class="ali_captcha" id="ali_captcha"></div>\n        </div>\n    </div>\n</div>'
    },
    68: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = t.querySelector("div"),
                n = t.querySelector("div.dia_cont");
            !l && u.f.add(n, "scroll", function() {
                n.scrollTop > 0 ? n.parentNode.querySelector("div").style.display = "block" : n.parentNode.querySelector("div").style.display = "none"
            }), e.style.cssText = ";width:560px;height:600px;", e.querySelector(".dia_content").style.cssText = ";height:480px;max-height:480px;overflow:hidden;", l = 1
        }

        function i(t, e, a) {
            var i = t.dialog.querySelector("div");
            e.disabled || n.i(c.q)({
                data: {
                    type: "PRO"
                }
            }).then(function(e) {
                e.data.success && (i.style.cssText = "", t.Close())
            })
        }

        function o(t) {
            if (!(location.href.indexOf("about") > -1) && t.info) {
                var e = t.info.data;
                n.i(c.r)({
                    params: {
                        type: "PRO"
                    }
                }).then(function(t) {
                    var n = t,
                        o = n.data;
                    o.success && !o.data.state && e.gmt_created < 15054912e5 && (s.b.construct({
                        lang: {},
                        title: "开通火币全球专业站",
                        hiddenClose: 1,
                        block: "fireGlobal"
                    }), s.b.open(a, i))
                })
            }
        }
        var r = n(3),
            c = n(1),
            s = n(26),
            u = n(0),
            l = void 0;
        n.i(r.a)("__getUserInfo", o), n.i(r.a)("__ucGetUserInfo", o)
    },
    69: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return u
        }), n.d(e, "a", function() {
            return d
        });
        var a = n(0),
            i = n(3),
            o = n(11),
            r = document.querySelector("html"),
            c = function() {
                a.k.removeClass(r, "hb-day"), a.k.addClass(r, "hb-night"), l("hb-night")
            },
            s = function() {
                a.k.removeClass(r, "hb-night"), a.k.addClass(r, "hb-day"), l("hb-day")
            },
            u = function() {
                var t = null;
                try {
                    t = localStorage.getItem("theme")
                } catch (e) {
                    t = a.k.hasClass(r, "hb-night") ? "hb-night" : "hb-day"
                } finally {
                    t = t || (a.k.hasClass(r, "hb-night") ? "hb-night" : "hb-day")
                }
                return t
            },
            l = function(t, e) {
                if (!t) return !1;
                try {
                    localStorage.setItem("theme", t), localStorage.getItem("theme")
                } catch (t) {
                    console.warn("Theme cannot save")
                }
                if (e) {
                    var c = function() {
                        return "hb-night" === t ? ["hb-day", "hb-night"] : ["hb-night", "hb-day"]
                    };
                    a.k.removeClass(r, c()[0]).addClass(r, c()[1])
                }
                n.i(i.b)(o.a.__changeTheme, t)
            },
            d = function() {
                return a.k.hasClass(r, "hb-night") ? s() : c()
            }
    },
    70: function(t, e, n) {
        "use strict";

        function a(t, e) {
            O.Ready(function() {
                t ? (S.k.addClass(O.body, "user_is_login"), S.k.removeClass(O.body, "user_not_login")) : (S.k.removeClass(O.body, "user_is_login"), S.k.addClass(O.body, "user_not_login"), n.i(k.a)(), e && n.i(y.c)())
            })
        }

        function i(t) {
            n.i(S.e)("head_nav", s()({
                    lang: E,
                    isLogin: t,
                    LangPath: y.d
                }, x)), o(), w.a.cuff(),
                function() {
                    var t = document.querySelectorAll("a"),
                        e = location.hostname.split(".");
                    e.shift();
                    for (var n = t.length; n--;) /otc.huobi.pro/.test(t[n].href) && (t[n].href = t[n].href.replace("otc.huobi.pro", "otc." + e.join(".")))
                }()
        }

        function o() {
            if (O.otc_info_box = O.getElementById("otcGuide"), O.otc_info_box && O.getElementById("go-otc")) {
                var t = function() {
                    O.otc_info_box.style.display = "none", S.i.set({
                        name: S.i.get("HB-PRO-TOKEN") ? "otc_login_guide" : "otc_guide",
                        value: !0,
                        domain: n.i(y.b)(),
                        path: "/"
                    })
                };
                S.f.add(O.getElementById("go-otc"), "click", function(e) {
                    t()
                }), S.f.add(O.otc_info_box, "click", function(e) {
                    e.target.className.indexOf("remove-guide") > -1 && t(), "A" === e.target.parentNode.nodeName && t()
                })
            }
        }

        function r(t) {
            i(t), O.selectLang = null, O.changeTheme = null, S.f.add(document, "click", function(t) {
                var e = S.f.target(t),
                    a = n.i(S.l)(e, "select_lang"),
                    i = n.i(S.l)(e, "change_theme"),
                    o = n.i(S.l)(e, "btn_logout"),
                    r = n.i(S.g)(e, "data-lang");
                if (a ? (O.selectLang = a, S.k.hasClass(a, "open") ? S.k.removeClass(a, "open") : S.k.addClass(a, "open")) : O.selectLang && S.k.removeClass(O.selectLang, "open"), i) {
                    var c = i.querySelector("i").className;
                    i.querySelector("i").className = "hb_icon_day" === c ? "hb_icon_night" : "hb_icon_day", n.i(T.a)()
                }
                o && (n.i(k.d)(), n.i(k.e)(), S.f.stop(t)), r && (location.href = n.i(y.d)(r.attr.toLowerCase()))
            })
        }
        var c = n(27),
            s = n.n(c),
            u = n(8),
            l = n.n(u),
            d = n(7),
            p = n.n(d),
            f = n(75),
            m = n.n(f),
            g = n(28),
            _ = n.n(g),
            v = n(9),
            b = n(3),
            h = (n(11), n(5)),
            y = (n(32), n(12)),
            k = n(24),
            w = n(22),
            S = n(0),
            T = n(69),
            L = n(23),
            E = (n.n(L), n(68), localStorage.lang && localStorage.lang.toLowerCase()),
            x = {
                langList: _()(h.a),
                langListText: m()(h.a),
                langText: h.a[E || h.b],
                lang: E,
                userInfo: "",
                vip: {},
                currencyArr: [],
                theme: function(t) {
                    var e = void 0;
                    try {
                        e = localStorage.getItem(t)
                    } catch (t) {
                        e = ""
                    }
                    return e
                }("theme") || "hb-night",
                page: window.PAGE_NAME
            },
            O = new v.a;
        n.i(b.a)("__userIsLogin", function(t) {
            var e = t.info,
                o = t.type;
            e ? ("__userIsLogin" === o && n.i(k.b)(), a(!0)) : STORE.needTicket ? a(!1, !0) : a(!1), O.Ready(function() {
                i(e)
            })
        }), n.i(b.a)("__ucGetUserInfo", function(t) {
            var e = t.info;
            O.Ready(p()(l.a.mark(function t() {
                var a, o;
                return l.a.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, n.i(k.c)();
                        case 2:
                            a = t.sent, o = a.data, "ok" === o.status && (x.vip["fee-discount-rate"] = o.data["fee-discount-rate"], x.vip["max-level"] = o.data["max-level"]), e.success && (x.userInfo = e.data.phone || e.data.email, e.data.vip_level || (x.vip.state = 0), 1 * e.data.vip_level && e.data.vip_expired && (x.vip.state = 1), 1 * e.data.vip_level && !e.data.vip_expired && (x.vip.state = 2), x.vip.level = e.data.vip_level, x.vip.timeout = n.i(S.c)(e.data.vip_expiry_date, "y-m-d")), i(!0);
                        case 7:
                        case "end":
                            return t.stop()
                    }
                }, t, this)
            })))
        }), n.i(b.a)("__ucLogout", function(t) {
            t.info;
            a(!1, !0), setTimeout(function() {
                location.reload()
            }, 80)
        }), O.Ready(function() {
            S.k.addClass(O.querySelector("html"), E), r(!1)
        })
    },
    71: function(t, e, n) {
        "use strict";

        function a(t) {
            var e = o.f.target(t),
                a = n.i(o.g)(e, "publicaction");
            n.i(o.g)(e, "stop") && o.f.stop(t), a && u[a.attr] && u[a.attr](a.node, t)
        }

        function i() {
            var t = this;
            t.dwcookie = function(t, e) {
                if ("a" == t.nodeName.toLowerCase()) {
                    var a = {
                        name: t.dataset.key,
                        value: t.dataset.value,
                        domain: n.i(c.b)(),
                        path: "/"
                    };
                    t.dataset.time && (a.time = t.dataset.time), o.i.set(a)
                }
            }, t.exchange_url = function(t, e) {
                var n = localStorage.getItem("HBP_EXCHANGE_PATH");
                n && (o.f.stop(e), location.href = t.dataset.path.replace("[base_quote]", n))
            }, t.margin_url = function(t, e) {
                var n = localStorage.getItem("HBP_MARGIN_PATH");
                n && (o.f.stop(e), location.href = t.dataset.path.replace("[base_quote]", n))
            }
        }
        var o = n(0),
            r = n(9),
            c = n(12),
            s = new r.a,
            u = {};
        s.Ready(function() {
            !window.publicEventBinded && o.f.add(document, "click", a), window.publicEventBinded = 1
        }), n.i(o.h)(i, u)
    },
    774: function(t, e) {},
    852: function(t, e, n) {
        t.exports = n(372)
    },
    9: function(t, e, n) {
        "use strict";

        function a() {
            var t = document;
            return t.dom = document, t.__queue = t.__queue || [], t.ExeQueue = function() {
                var e = t.__queue.shift();
                e && e(), t.__queue.length && t.ExeQueue()
            }, t.Ready = this.Ready = function(e) {
                t.isInteractive || t.isComplete ? e && e() : t.__queue.push(e)
            }, t
        }

        function i(t, e, n) {
            var i = this,
                o = document.createElement("div"),
                c = void 0,
                s = void 0;
            return o.innerHTML = t, s = o.firstElementChild || o.children[0] || o, s.wrap = o, a.call(i), e && i.Ready(function() {
                (c = "object" === (void 0 === e ? "undefined" : r()(e)) ? e : document[e] || document.getElementById(e)) && (n && (c.innerHTML = ""), s = c.appendChild(s))
            }), s
        }
        n.d(e, "a", function() {
            return a
        }), n.d(e, "b", function() {
            return i
        });
        var o = n(18),
            r = n.n(o);
        document.onreadystatechange = function() {
            switch (document.readyState) {
                case "loading":
                    document.loading && document.loading();
                    break;
                case "interactive":
                    document.isInteractive = !0, document.Interactive && document.Interactive(), document.ExeQueue && document.ExeQueue();
                    break;
                case "complete":
                    document.isComplete = !0, document.complete && document.complete(), document.isInteractive || document.ExeQueue && document.ExeQueue()
            }
        }
    },
    91: function(t, e, n) {
        "use strict";

        function a(t) {
            function e(t) {
                var e = t.length;
                if (!(e < 1))
                    for (var n = 0; n < e; n++) t[n].index = n, a(t[n])
            }

            function a(t) {
                i.f.add(t, o.op.eventType, function(t) {
                    var e = t.target,
                        a = n.i(i.w)(e, "li"),
                        r = a.index;
                    r === o.cur && c || (o.ShowBox(r), o.Then && o.Then(r))
                })
            }
            var o = this,
                r = t || {},
                c = r.one;
            r.eventType = r.eventType || "click", o.op = r, o.Init = function(t) {
                t && (o.Box = t, o.childrens = [], [].slice.apply(t.childNodes).forEach(function(t) {
                    1 === t.nodeType && o.childrens.push(t)
                }), o.hd = o.childrens[0], o.cur = 0, o.tab = o.hd.getElementsByTagName("li"), e(o.tab))
            }, o.ShowBox = function(t) {
                o.HideBox(), o.cur = 1 * t, o.tab[t].className = "cur", o.childrens[o.cur + 1].style.display = "block"
            }, o.HideBox = function() {
                o.tab[o.cur].className = "", o.childrens[o.cur + 1].style.display = "none"
            }
        }
        var i = n(0);
        e.a = a
    },
    92: function(t, e, n) {
        "use strict";

        function a(t) {
            function e(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function n(t, n) {
                var a = e(n || {}),
                    i = {
                        kline: {},
                        trade: {},
                        depth: {},
                        ticker: {},
                        overview: {}
                    };
                for (var o in i) ! function(n) {
                    i[n] = function(i) {
                        var o = {};
                        return o[t] = r[n](i), e(o, a)
                    }
                }(o);
                return i
            }
            var t = t || {},
                a = t.symbol || "btccny",
                i = t.period || "1min",
                o = t.step || "step0",
                r = {
                    kline: function(t) {
                        var t = t || {};
                        return "market." + (t.symbol || a) + ".kline." + (t.period || i)
                    },
                    trade: function(t) {
                        var t = t || {};
                        return "market." + (t.symbol || a) + ".trade.detail"
                    },
                    ticker: function(t) {
                        var t = t || {};
                        return "market." + (t.symbol || a) + ".detail"
                    },
                    depth: function(t) {
                        var t = t || {};
                        return "market." + (t.symbol || a) + ".depth." + (t.step || o)
                    },
                    overview: function(t) {
                        return "market.overview"
                    }
                };
            return {
                req: function(t) {
                    return n("req", t)
                },
                sub: function(t) {
                    return n("sub", t)
                },
                unsub: function(t) {
                    return n("unsub", t)
                }
            }
        }
        n.d(e, "a", function() {
            return u
        }), n.d(e, "b", function() {
            return a
        });
        var i = n(14),
            o = n.n(i),
            r = n(172),
            c = n.n(r),
            s = [];
        s[1] = "req", s[2] = "sub", s[4] = "unsub", top.window.api = top.window.api = a;
        var u = function() {
            function t() {
                function t(t) {
                    t.onerror = e, t.onclose = n, t.msg = p, t.onmessage = i, t.onopen = d
                }

                function e(t) {
                    top.window.debug_is_open && console.error(g + "::WebSocket on error ====>", t)
                }

                function n(e) {
                    top.window.debug_is_open && console.warn(g + "::WebSocket on close ====>", e), r[g] = new WebSocket(g), r[g].ts = 1 * new Date, r[g].isOpen = 0, t(r[g])
                }

                function a(t, e, n) {
                    var i = new FileReader;
                    if (n) i.addEventListener("loadend", function() {
                        for (var t = "", n = new Uint8Array(i.result), a = n.byteLength, o = 0; o < a; o++) t += String.fromCharCode(n[o]);
                        e(t)
                    }), i.readAsArrayBuffer(t);
                    else {
                        i.addEventListener("loadend", function() {
                            e(i.result)
                        });
                        try {
                            i.readAsBinaryString(t)
                        } catch (n) {
                            a(t, e, !0)
                        }
                    }
                }

                function i(t) {
                    var e;
                    new FileReader;
                    try {
                        e = JSON.parse(t.data), u(e)
                    } catch (n) {
                        if ("string" == typeof t.data) return;
                        a(t.data, function(t) {
                            e = JSON.parse(c.a.inflate(t, {
                                to: "string"
                            })), u(e)
                        })
                    }
                }

                function u(t) {
                    var e = t.rep ? "rep" : t.unsubbed ? "unsubbed" : "ch",
                        n = t.rep || t.unsubbed || t.subbed || t.ch || t.ping,
                        a = _.callback[e] ? _.callback[e][n] : null;
                    if (top.window.unzip_is_open && console.warn(g + "::WebSocket on message ====>", t, _.callback[e]), "error" != t.status) return t.ping ? f(t.ping) : a ? ("unsubbed" == e && (delete _.callback.ch[n], l(4, "unsub." + n, n)), "unsubbed" == e && delete _.callback[e][n], "rep" == e && (delete _.callback[e][n], l(1, "req." + n, n)), void a(t, e, n)) : void 0
                }

                function l(t, e, n) {
                    if (1 == t) return delete _.msgList[e];
                    4 == t && (delete _.msgList[e], delete _.msgList["sub." + n])
                }

                function d() {
                    r[g].isOpen = 1;
                    for (var t in _.msgList) r[g].send(_.msgList[t])
                }

                function p(t, e) {
                    var n = parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2),
                        a = "";
                    a = s[n] + "." + (t.req || t.sub || t.unsub), _.msgList[a] = o()(t), r[g].isOpen && r[g].send(_.msgList[a]), e && m && m(t, e)
                }

                function f(t) {
                    r[g].send(o()({
                        pong: t
                    }))
                }

                function m(t, e) {
                    var n = s[parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2)],
                        a = t[n];
                    _.callback[v[n]] || (_.callback[v[n]] = {}), _.callback[v[n]][a] = e
                }
                var g = this.host,
                    _ = this,
                    v = {
                        req: "rep",
                        sub: "ch",
                        unsub: "unsubbed"
                    };
                if (_.msgList = {}, _.callback = {}, g) return r[g] ? function() {
                    return r[g]
                } : (r[g] = new WebSocket(g), r[g].ts = 1 * new Date, t(r[g]), function() {
                    return r[g]
                })
            }

            function e(t) {
                var e;
                if (!top.window.getSearchParameters) {
                    e = location.search.replace("?", "").split("&"), top.window.getSearchParameters = {};
                    for (var n, a = 0, i = e.length; a < i; a++) n = e[a].split("="), top.window.getSearchParameters[n[0]] = decodeURIComponent(n[1])
                }
                return top.window.getSearchParameters[t]
            }

            function n() {
                var t, e = [].slice.apply(arguments);
                if (!(e.length < 2)) return e.shift().apply(t = e.shift(), e.length ? e : [t])
            }

            function a() {
                function t(t, e) {
                    var r = 1 * new Date + ~~(1e5 * Math.random()),
                        c = parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2),
                        u = s[c] + "." + (t.req || t.sub || t.unsub);
                    a[u] || (a[u] = [], i[u] = 0), a[u].push(e), e.alias = "fn_" + r.toString(r % 16 + 20), e.msg = u, e.bodywords = e.toString().replace(/[^\d\w]/g, ""), !i[u] && o().msg(t, n) && (i[u] = 1)
                }

                function e(t, e, i) {
                    var r = parseInt([~~!!t.unsub, ~~!!t.sub, ~~!!t.req].join(""), 2),
                        c = s[r] + "." + (t.req || t.sub || t.unsub),
                        u = c.replace(/^unsub/, "sub"),
                        l = c.replace(/^sub/, "unsub"),
                        d = {
                            unsub: l.replace("unsub.", "")
                        },
                        p = a[u];
                    if ("req" != s[r] && p) {
                        for (var f = p.length; f--;) {
                            if (e.alias && p[f].alias === e.alias) {
                                p.splice(f, 1), i && i(0);
                                break
                            }
                            if (!e.alias && p[f].bodywords == e.toString().replace(/[^\d\w]/g, "")) {
                                e.name || console.warn("匿名函数有可能导致移除错误!"), p.splice(f, 1), i && i(0);
                                break
                            }
                        }
                        p.length || (delete a[u], o().msg(d, function(t) {
                            n(t, i)
                        }))
                    }
                }

                function n(t, e) {
                    var n = parseInt([~~!!t.unsubbed, ~~!!t.subbed || ~~!!t.ch, ~~!!t.rep].join(""), 2),
                        i = s[n] + "." + (t.rep || t.subbed || t.ch || t.unsubbed);
                    if (a[i])
                        for (var o = a[i].length; o--;) a[i][o](t);
                    1 == n && delete a[i], t.unsubbed && e && e(1)
                }
                var a = {},
                    i = {},
                    o = this;
                return {
                    plugin: t,
                    unplug: e,
                    info: o()
                }
            }

            function i(e) {
                if (e) return top.window["__operator" + e] ? top.window["__operator" + e] : top.window["__operator" + e] = n(a, n(t, {
                    host: e
                }))
            }
            var r = {};
            return top.window.debug_is_open = e("debug_is_open"), top.window.unzip_is_open = e("unzip_is_open"), {
                handsup: i
            }
        }();
        top.window.operator = top.window.operator || u
    }
}, [852]);