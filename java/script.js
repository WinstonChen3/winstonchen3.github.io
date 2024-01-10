(()=>{
  var e = {
      520: e=>{
          !function() {
              "use strict";
              var t = "ontouchstart"in document.documentElement
                , n = t ? "touchend" : "click"
                , r = [].forEach
                , i = function() {
                  for (var e = "transitionend webkitTransitionEnd oTransitionEnd otransitionend".split(" "), t = 0; t < 4; ++t)
                      if ("on" + e[t].toLowerCase()in window)
                          return e[t];
                  return e[0]
              }();
              function o(e, t, n) {
                  n ? e.add(t) : e.remove(t)
              }
              var s, a, l, d = (s = {},
              a = {},
              function e(t, n, r) {
                  r = +(r || 6);
                  var i = t = t || "_";
                  if (n) {
                      var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                      for (i += (o += o.toLowerCase())[Math.round(Math.random() * (o.length - 1))],
                      o += "0123456789"; i.length < r; )
                          i += o[Math.round(Math.random() * (o.length - 1))]
                  } else
                      a[t] || (a[t] = 0),
                      i += ++a[t];
                  return s[i] || document.getElementById(i) ? e(t, n) : (s[i] = !0,
                  i)
              }
              ), c = function(e) {
                  if (n = document.documentElement.style,
                  (t = e.toLowerCase())in n)
                      return t;
                  for (var t, n, r = ((r = "Webkit Moz Ms O Khtml").toLowerCase() + r).split(" "), i = 0; i < 10; ++i)
                      if ((t = r[i] + e)in n)
                          return t;
                  return ""
              }("Transform"), u = function(e) {
                  var t = document.createElement("div").style
                    , n = [["translateY(", ")"], ["translate3d(0,", ",0)"]];
                  try {
                      t[e] = n[1].join("1px")
                  } catch (e) {}
                  return n[+!!t[e]] === n[1]
              }(c), h = [], f = function(e, r) {
                  var i, s, a, l, f, p, g, m, v, y = this, b = r.firstElementChild, w = r.lastElementChild, S = r.classList, x = e.openClass, E = e.closeClass, D = !e.noKeys, C = e.useBorders, R = !e.noTransforms && c, T = e.onToggle, A = !1;
                  Object.defineProperties(y, {
                      fit: {
                          value: function() {
                              var e = y.headingHeight;
                              y.open && (e += w.scrollHeight),
                              C && (e += y.elBorder),
                              y.height = e
                          }
                      },
                      ariaEnabled: {
                          get: function() {
                              return l
                          },
                          set: function(e) {
                              (e = !!e) != !!l && (l = e,
                              e ? (b.setAttribute("role", "tab"),
                              w.setAttribute("role", "tabpanel"),
                              function() {
                                  var e, t = "-heading", n = "-content", i = r.id;
                                  b.id || w.id ? w.id ? b.id || (b.id = (i || w.id) + t) : w.id = (i || b.id) + n : (e = i || d("a"),
                                  b.id = e + t,
                                  w.id = e + n);
                                  for (var o = function(e) {
                                      return document.querySelectorAll("#" + e)
                                  }; o(w.id).length > 1 || o(b.id).length > 1; )
                                      e = d("a"),
                                      w.id = e + n,
                                      b.id = e + t;
                                  b.setAttribute("aria-controls", w.id),
                                  w.setAttribute("aria-labelledby", b.id)
                              }(),
                              b.setAttribute("aria-selected", !!i),
                              b.setAttribute("aria-expanded", !!i),
                              w.setAttribute("aria-hidden", !i)) : (b.removeAttribute("role"),
                              b.removeAttribute("aria-controls"),
                              b.removeAttribute("aria-selected"),
                              b.removeAttribute("aria-expanded"),
                              w.removeAttribute("role"),
                              w.removeAttribute("aria-labelledby"),
                              w.removeAttribute("aria-hidden")))
                          }
                      },
                      open: {
                          get: function() {
                              return void 0 === i && (i = S.contains(x),
                              o(S, E, !i)),
                              i
                          },
                          set: function(t) {
                              if ((t = !!t) !== i) {
                                  if ("function" == typeof T && !1 === T.call(null, y, t))
                                      return;
                                  if (o(S, x, t),
                                  o(S, E, !t),
                                  i = t,
                                  l && (b.setAttribute("aria-selected", t),
                                  b.setAttribute("aria-expanded", t),
                                  w.setAttribute("aria-hidden", !t)),
                                  y.needsRefresh ? (delete y.needsRefresh,
                                  e.refresh()) : e.update(),
                                  e.modal && i)
                                      for (var n, r = 0, s = e.folds.length; r < s; ++r)
                                          y !== (n = e.folds[r]) && (n.open = !1)
                              }
                          }
                      },
                      disabled: {
                          get: function() {
                              return A
                          },
                          set: function(e) {
                              if ((e = !!e) !== A) {
                                  var i = r.style;
                                  (A = e) ? (i.height = null,
                                  R ? i[c] = null : i.top = null,
                                  t && b.removeEventListener("touchstart", g),
                                  b.removeEventListener(n, v),
                                  S.remove(x, E),
                                  m && (b.removeEventListener("keydown", m),
                                  b.removeAttribute("tabindex")),
                                  l && (y.ariaEnabled = !1,
                                  l = !0)) : (i.height = a + "px",
                                  R ? i[c] = u ? "translate3D(0," + s + "px,0)" : "translateY(" + s + "px)" : i.top = s + "px",
                                  t && b.addEventListener("touchstart", g),
                                  b.addEventListener(n, v),
                                  m && (b.addEventListener("keydown", m),
                                  b.tabIndex = 0))
                              }
                          }
                      },
                      y: {
                          get: function() {
                              return void 0 === s ? s = parseInt(r.style.top) || 0 : s
                          },
                          set: function(e) {
                              (e = +e) !== s && (s = e,
                              R ? r.style[c] = u ? "translate3D(0," + e + "px,0)" : "translateY(" + e + "px)" : r.style.top = e + "px")
                          }
                      },
                      height: {
                          get: function() {
                              return void 0 === a && (a = y.headingHeight + w.scrollHeight,
                              r.style.height = a + "px"),
                              a
                          },
                          set: function(e) {
                              e && (e = +e) !== a && (r.style.height = e + "px",
                              a = e)
                          }
                      },
                      headingHeight: {
                          get: function() {
                              return b.scrollHeight + y.heightOffset + (C ? y.headingBorder : 0)
                          }
                      },
                      headingBorder: {
                          get: function() {
                              return (b.offsetHeight || 0) - (b.clientHeight || 0)
                          }
                      },
                      elHeight: {
                          get: function() {
                              return r.scrollHeight + (C ? y.elBorder : 0)
                          }
                      },
                      elBorder: {
                          get: function() {
                              return (r.offsetHeight || 0) - (r.clientHeight || 0)
                          }
                      },
                      wrongSize: {
                          get: function() {
                              return y.headingHeight + w.scrollHeight !== r.scrollHeight
                          }
                      }
                  }),
                  y.index = h.push(y) - 1,
                  y.accordion = e,
                  y.el = r,
                  y.heading = b,
                  y.content = w,
                  y.ariaEnabled = !e.noAria,
                  y.heightOffset = e.heightOffset,
                  r.accordionFold = y.index,
                  C = "auto" === C ? 0 !== y.elBorder + y.headingBorder : C,
                  D && (b.tabIndex = 0,
                  b.addEventListener("keydown", m = function(t) {
                      var n;
                      switch (t.keyCode) {
                      case 32:
                          t.preventDefault();
                      case 13:
                          y.open = !y.open,
                          "A" === t.target.tagName && t.preventDefault();
                          break;
                      case 27:
                          t.target.blur();
                          break;
                      case 38:
                          if (n = y.previousFold) {
                              var r = n.childAccordions;
                              if (n.open && r) {
                                  for (var i, o; r && (o = (i = r[r.length - 1]).folds[i.folds.length - 1]).open; )
                                      r = o.childAccordions;
                                  o.heading.focus()
                              } else
                                  n.heading.focus()
                          } else {
                              if (!e.parent)
                                  return !0;
                              e.parentFold.heading.focus()
                          }
                          return t.preventDefault(),
                          !1;
                      case 40:
                          if (r = y.childAccordions,
                          y.open && r)
                              r[0].folds[0].heading.focus();
                          else if (n = y.nextFold)
                              n.heading.focus();
                          else {
                              if (!y.accordion.parent)
                                  return !0;
                              for (var s = y; s = s.accordion.parentFold; )
                                  if (n = s.nextFold) {
                                      n.heading.focus();
                                      break
                                  }
                              if (!s)
                                  return !0
                          }
                          return t.preventDefault(),
                          !1;
                      case 37:
                          y.open ? y.open = !1 : e.parent && e.parentFold.heading.focus();
                          break;
                      case 39:
                          r = y.childAccordions,
                          y.open ? r && r[0].folds[0].heading.focus() : y.open = !0
                      }
                  }
                  )),
                  t && b.addEventListener("touchstart", g = function(e) {
                      f = window.pageXOffset,
                      p = window.pageYOffset
                  }
                  , {
                      passive: !0
                  }),
                  b.addEventListener(n, v = function(e) {
                      return !(e.target === b || !b.contains(e.target) || "A" !== e.target.tagName || !e.target.href) || (("touchend" !== e.type || e.cancelable && window.pageXOffset === f && window.pageYOffset === p) && (y.open = !y.open,
                      e.preventDefault()),
                      !1)
                  }
                  )
              }, p = [], g = 0, m = function(e, t) {
                  var n, s, a, d, c = this, u = e.classList, h = void 0 === (t = t || {}).edgeClass ? "edge-visible" : t.edgeClass, v = void 0 === t.snapClass ? "snap" : t.snapClass, y = void 0 === t.enabledClass ? "accordion" : t.enabledClass, b = t.disabledClass;
                  Object.defineProperties(c, {
                      update: {
                          value: T
                      },
                      updateFold: {
                          value: function(e, t) {
                              for (var n = e, r = c.parentFold; n = n.nextFold; )
                                  n.y += t;
                              r || R(t),
                              e.height += t,
                              c.height += t,
                              r && r.open && c.parent.updateFold(r, t)
                          }
                      },
                      refresh: {
                          value: function(e) {
                              var t = !!e && v;
                              t && u.add(t),
                              c.update(),
                              c.childAccordions && c.childAccordions.forEach((function(t) {
                                  t.parentFold.open ? t.refresh(e) : t.parentFold.needsRefresh = !0
                              }
                              )),
                              t && setTimeout((function(e) {
                                  u.remove(t)
                              }
                              ), 20)
                          }
                      },
                      disabled: {
                          get: function() {
                              return s
                          },
                          set: function(t) {
                              if ((t = !!t) !== s) {
                                  var n = e.style
                                    , r = c.folds;
                                  if (y && o(u, y, !t),
                                  b && o(u, b, t),
                                  s = t) {
                                      n.height = null,
                                      v && u.remove(v),
                                      h && (e.removeEventListener(i, c.onTransitionEnd),
                                      u.remove(h));
                                      for (var a = 0, d = r.length; a < d; ++a)
                                          r[a].disabled = !0;
                                      c.noAria || e.removeAttribute("role"),
                                      --g
                                  } else {
                                      for (a = 0,
                                      d = r.length; a < d; ++a)
                                          r[a].disabled = !1;
                                      c.noAria || e.setAttribute("role", "tablist"),
                                      ++g,
                                      T()
                                  }
                                  g <= 0 ? (g = 0,
                                  m.setResizeRate(!1)) : l && m.setResizeRate(l)
                              }
                          }
                      },
                      parent: {
                          set: function(e) {
                              a = e
                          },
                          get: function() {
                              var e = a;
                              if (!e)
                                  return null;
                              for (; e; ) {
                                  if (!e.disabled)
                                      return e;
                                  e = e.parent
                              }
                              return null
                          }
                      },
                      parentFold: {
                          set: function(e) {
                              d = e
                          },
                          get: function() {
                              var e = d;
                              if (!e)
                                  return null;
                              for (var t = e.accordion; e && t; ) {
                                  if (!t.disabled)
                                      return e;
                                  (t = t.parent) && (e = t.parentFold)
                              }
                              return null
                          }
                      },
                      height: {
                          get: function() {
                              return n
                          },
                          set: function(t) {
                              t && (t = +t) !== n && (e.style.height = t + "px",
                              n = t)
                          }
                      },
                      wrongSize: {
                          get: function() {
                              for (var e = this.folds, t = e.length, n = 0; n < t; ++n)
                                  if (e[n].wrongSize)
                                      return !0;
                              if (e = this.childAccordions)
                                  for (; n < t; ++n)
                                      if (e[n].wrongSize)
                                          return !0;
                              return !1
                          }
                      },
                      root: {
                          get: function() {
                              for (var e = this; e; ) {
                                  if (!e.parent)
                                      return e;
                                  e = e.parent
                              }
                          }
                      }
                  }),
                  c.openClass = t.openClass || "open",
                  c.closeClass = t.closeClass || "closed",
                  c.modal = !!t.modal,
                  c.noAria = !!t.noAria,
                  c.noKeys = !!t.noKeys,
                  c.noTransforms = !!t.noTransforms,
                  c.index = p.push(c) - 1,
                  c.heightOffset = +t.heightOffset || 0,
                  c.useBorders = void 0 === t.useBorders ? "auto" : t.useBorders,
                  c.onToggle = t.onToggle;
                  var w = [];
                  r.call(e.children, (function(e) {
                      var t = new f(c,e);
                      w.push(t);
                      var n = w[w.length - 2];
                      n && (n.nextFold = t,
                      t.previousFold = n)
                  }
                  )),
                  e.accordion = c.index,
                  c.noAria || e.setAttribute("role", "tablist"),
                  c.el = e,
                  c.folds = w,
                  !t.disabled && y && u.add(y),
                  T();
                  for (var S = e; (S = S.parentNode) && 1 === S.nodeType; ) {
                      var x = m.getFold(S);
                      if (x) {
                          var E = x.accordion;
                          if (c.parent = E,
                          c.parentFold = x,
                          h && u.remove(h),
                          (E.childAccordions = E.childAccordions || []).push(c),
                          (x.childAccordions = x.childAccordions || []).push(c),
                          x.open) {
                              var D = x.el.scrollHeight
                                , C = x.headingHeight + x.content.scrollHeight - D || D - x.el.clientHeight;
                              E.updateFold(x, C)
                          }
                          break
                      }
                  }
                  function R(t) {
                      if (h) {
                          var n = e.getBoundingClientRect()
                            , r = window.innerHeight;
                          n.bottom + (t || 0) < r ? u.add(h) : n.bottom > r && u.remove(h)
                      }
                  }
                  function T() {
                      for (var e, t, r = 0, i = 0, o = 0, s = w.length, a = c.parentFold; o < s; ++o)
                          (e = w[o]).y = r,
                          e.fit(),
                          r += e.height,
                          i += e.height;
                      t = i - n,
                      a ? a.open && c.parent.updateFold(a, t) : R(t),
                      c.height = i
                  }
                  h && e.addEventListener(i, this.onTransitionEnd = function(t) {
                      !c.parent && t.target === e && "height" === t.propertyName && e.getBoundingClientRect().bottom > window.innerHeight && u.remove(h)
                  }
                  ),
                  this.disabled = !!t.disabled
              };
              "function" == typeof IE8PP && (m = IE8PP(m),
              f = IE8PP(f)),
              m.setResizeRate = function(e) {
                  var t = function(e) {
                      for (var t, n = 0, r = p.length; n < r; ++n)
                          (t = p[n]).parent || t.disabled || t.refresh(!0)
                  }
                    , n = m;
                  n.onResize && window.removeEventListener("resize", n.onResize),
                  !1 !== e && (e = +e || 0) >= 0 && (n.onResize = e ? function(e, t, n) {
                      t = t < 0 ? 0 : t;
                      var r, i, o, s, a = function() {
                          var n = Date.now() - r;
                          n >= t ? (e.apply(i, o),
                          s && clearTimeout(s),
                          s = i = o = null) : s = setTimeout(a, t - n)
                      };
                      return function() {
                          if (i = this,
                          o = arguments,
                          !t)
                              return e.apply(i, o);
                          r = Date.now(),
                          s || (s = setTimeout(a, t))
                      }
                  }(t, e) : t,
                  window.addEventListener("resize", n.onResize),
                  e && (l = e))
              }
              ,
              m.getAccordion = function(e) {
                  for (; e; ) {
                      if ("accordion"in e)
                          return p[e.accordion];
                      if (!(e = e.parentNode) || 1 !== e.nodeType)
                          return null
                  }
              }
              ,
              m.getFold = function(e) {
                  for (; e; ) {
                      if ("accordionFold"in e)
                          return h[e.accordionFold];
                      if (!(e = e.parentNode) || 1 !== e.nodeType)
                          return null
                  }
              }
              ,
              m.setResizeRate(25),
              window.Accordion = m,
              "object" == typeof e.exports && (e.exports.Accordion = m)
          }()
      }
  }
    , t = {};
  function n(r) {
      var i = t[r];
      if (void 0 !== i)
          return i.exports;
      var o = t[r] = {
          exports: {}
      };
      return e[r](o, o.exports, n),
      o.exports
  }
  (()=>{
      "use strict";
      var e = n(520);
      function t(e, t) {
          return n = (t || document).querySelectorAll(e),
          Array.prototype.slice.call(n);
          var n
      }
      function r(e) {
          return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
      }
      var i, o, s, a, l, d, c, u, h, f = {}, p = [], g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      function m(e, t) {
          for (var n in t)
              e[n] = t[n];
          return e
      }
      function v(e) {
          var t = e.parentNode;
          t && t.removeChild(e)
      }
      function y(e, t, n) {
          var r, o, s, a = {};
          for (s in t)
              "key" == s ? r = t[s] : "ref" == s ? o = t[s] : a[s] = t[s];
          if (arguments.length > 2 && (a.children = arguments.length > 3 ? i.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
              for (s in e.defaultProps)
                  void 0 === a[s] && (a[s] = e.defaultProps[s]);
          return b(e, a, r, o, null)
      }
      function b(e, t, n, r, i) {
          var a = {
              type: e,
              props: t,
              key: n,
              ref: r,
              __k: null,
              __: null,
              __b: 0,
              __e: null,
              __d: void 0,
              __c: null,
              __h: null,
              constructor: void 0,
              __v: null == i ? ++s : i
          };
          return null == i && null != o.vnode && o.vnode(a),
          a
      }
      function w(e) {
          return e.children
      }
      function S(e, t, n) {
          "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || g.test(t) ? n : n + "px"
      }
      function x(e, t, n, r, i) {
          var o;
          e: if ("style" === t)
              if ("string" == typeof n)
                  e.style.cssText = n;
              else {
                  if ("string" == typeof r && (e.style.cssText = r = ""),
                  r)
                      for (t in r)
                          n && t in n || S(e.style, t, "");
                  if (n)
                      for (t in n)
                          r && n[t] === r[t] || S(e.style, t, n[t])
              }
          else if ("o" === t[0] && "n" === t[1])
              o = t !== (t = t.replace(/Capture$/, "")),
              t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
              e.l || (e.l = {}),
              e.l[t + o] = n,
              n ? r || e.addEventListener(t, o ? D : E, o) : e.removeEventListener(t, o ? D : E, o);
          else if ("dangerouslySetInnerHTML" !== t) {
              if (i)
                  t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
              else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                  try {
                      e[t] = null == n ? "" : n;
                      break e
                  } catch (e) {}
              "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n))
          }
      }
      function E(e) {
          l = !0;
          try {
              return this.l[e.type + !1](o.event ? o.event(e) : e)
          } finally {
              l = !1
          }
      }
      function D(e) {
          l = !0;
          try {
              return this.l[e.type + !0](o.event ? o.event(e) : e)
          } finally {
              l = !1
          }
      }
      function C(e, t) {
          this.props = e,
          this.context = t
      }
      function R(e, t) {
          if (null == t)
              return e.__ ? R(e.__, e.__.__k.indexOf(e) + 1) : null;
          for (var n; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e)
                  return n.__e;
          return "function" == typeof e.type ? R(e) : null
      }
      function T(e) {
          var t, n;
          if (null != (e = e.__) && null != e.__c) {
              for (e.__e = e.__c.base = null,
              t = 0; t < e.__k.length; t++)
                  if (null != (n = e.__k[t]) && null != n.__e) {
                      e.__e = e.__c.base = n.__e;
                      break
                  }
              return T(e)
          }
      }
      function A(e) {
          l ? setTimeout(e) : u(e)
      }
      function k(e) {
          (!e.__d && (e.__d = !0) && d.push(e) && !_.__r++ || c !== o.debounceRendering) && ((c = o.debounceRendering) || A)(_)
      }
      function _() {
          var e, t, n, r, i, o, s, a;
          for (d.sort((function(e, t) {
              return e.__v.__b - t.__v.__b
          }
          )); e = d.shift(); )
              e.__d && (t = d.length,
              r = void 0,
              i = void 0,
              s = (o = (n = e).__v).__e,
              (a = n.__P) && (r = [],
              (i = m({}, o)).__v = o.__v + 1,
              P(a, o, i, n.__n, void 0 !== a.ownerSVGElement, null != o.__h ? [s] : null, r, null == s ? R(o) : s, o.__h),
              L(r, o),
              o.__e != s && T(o)),
              d.length > t && d.sort((function(e, t) {
                  return e.__v.__b - t.__v.__b
              }
              )));
          _.__r = 0
      }
      function M(e, t, n, r, i, o, s, a, l, d) {
          var c, u, h, g, m, v, y, S = r && r.__k || p, x = S.length;
          for (n.__k = [],
          c = 0; c < t.length; c++)
              if (null != (g = n.__k[c] = null == (g = t[c]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g || "bigint" == typeof g ? b(null, g, null, null, g) : Array.isArray(g) ? b(w, {
                  children: g
              }, null, null, null) : g.__b > 0 ? b(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g)) {
                  if (g.__ = n,
                  g.__b = n.__b + 1,
                  null === (h = S[c]) || h && g.key == h.key && g.type === h.type)
                      S[c] = void 0;
                  else
                      for (u = 0; u < x; u++) {
                          if ((h = S[u]) && g.key == h.key && g.type === h.type) {
                              S[u] = void 0;
                              break
                          }
                          h = null
                      }
                  P(e, g, h = h || f, i, o, s, a, l, d),
                  m = g.__e,
                  (u = g.ref) && h.ref != u && (y || (y = []),
                  h.ref && y.push(h.ref, null, g),
                  y.push(u, g.__c || m, g)),
                  null != m ? (null == v && (v = m),
                  "function" == typeof g.type && g.__k === h.__k ? g.__d = l = I(g, l, e) : l = O(e, g, h, S, m, l),
                  "function" == typeof n.type && (n.__d = l)) : l && h.__e == l && l.parentNode != e && (l = R(h))
              }
          for (n.__e = v,
          c = x; c--; )
              null != S[c] && ("function" == typeof n.type && null != S[c].__e && S[c].__e == n.__d && (n.__d = N(r).nextSibling),
              z(S[c], S[c]));
          if (y)
              for (c = 0; c < y.length; c++)
                  j(y[c], y[++c], y[++c])
      }
      function I(e, t, n) {
          for (var r, i = e.__k, o = 0; i && o < i.length; o++)
              (r = i[o]) && (r.__ = e,
              t = "function" == typeof r.type ? I(r, t, n) : O(n, r, r, i, r.__e, t));
          return t
      }
      function H(e, t) {
          return t = t || [],
          null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
              H(e, t)
          }
          )) : t.push(e)),
          t
      }
      function O(e, t, n, r, i, o) {
          var s, a, l;
          if (void 0 !== t.__d)
              s = t.__d,
              t.__d = void 0;
          else if (null == n || i != o || null == i.parentNode)
              e: if (null == o || o.parentNode !== e)
                  e.appendChild(i),
                  s = null;
              else {
                  for (a = o,
                  l = 0; (a = a.nextSibling) && l < r.length; l += 1)
                      if (a == i)
                          break e;
                  e.insertBefore(i, o),
                  s = o
              }
          return void 0 !== s ? s : i.nextSibling
      }
      function N(e) {
          var t, n, r;
          if (null == e.type || "string" == typeof e.type)
              return e.__e;
          if (e.__k)
              for (t = e.__k.length - 1; t >= 0; t--)
                  if ((n = e.__k[t]) && (r = N(n)))
                      return r;
          return null
      }
      function P(e, t, n, r, i, s, a, l, d) {
          var c, u, h, f, p, g, v, y, b, S, x, E, D, R, T, A = t.type;
          if (void 0 !== t.constructor)
              return null;
          null != n.__h && (d = n.__h,
          l = t.__e = n.__e,
          t.__h = null,
          s = [l]),
          (c = o.__b) && c(t);
          try {
              e: if ("function" == typeof A) {
                  if (y = t.props,
                  b = (c = A.contextType) && r[c.__c],
                  S = c ? b ? b.props.value : c.__ : r,
                  n.__c ? v = (u = t.__c = n.__c).__ = u.__E : ("prototype"in A && A.prototype.render ? t.__c = u = new A(y,S) : (t.__c = u = new C(y,S),
                  u.constructor = A,
                  u.render = B),
                  b && b.sub(u),
                  u.props = y,
                  u.state || (u.state = {}),
                  u.context = S,
                  u.__n = r,
                  h = u.__d = !0,
                  u.__h = [],
                  u._sb = []),
                  null == u.__s && (u.__s = u.state),
                  null != A.getDerivedStateFromProps && (u.__s == u.state && (u.__s = m({}, u.__s)),
                  m(u.__s, A.getDerivedStateFromProps(y, u.__s))),
                  f = u.props,
                  p = u.state,
                  u.__v = t,
                  h)
                      null == A.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(),
                      null != u.componentDidMount && u.__h.push(u.componentDidMount);
                  else {
                      if (null == A.getDerivedStateFromProps && y !== f && null != u.componentWillReceiveProps && u.componentWillReceiveProps(y, S),
                      !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(y, u.__s, S) || t.__v === n.__v) {
                          for (t.__v !== n.__v && (u.props = y,
                          u.state = u.__s,
                          u.__d = !1),
                          t.__e = n.__e,
                          t.__k = n.__k,
                          t.__k.forEach((function(e) {
                              e && (e.__ = t)
                          }
                          )),
                          x = 0; x < u._sb.length; x++)
                              u.__h.push(u._sb[x]);
                          u._sb = [],
                          u.__h.length && a.push(u);
                          break e
                      }
                      null != u.componentWillUpdate && u.componentWillUpdate(y, u.__s, S),
                      null != u.componentDidUpdate && u.__h.push((function() {
                          u.componentDidUpdate(f, p, g)
                      }
                      ))
                  }
                  if (u.context = S,
                  u.props = y,
                  u.__P = e,
                  E = o.__r,
                  D = 0,
                  "prototype"in A && A.prototype.render) {
                      for (u.state = u.__s,
                      u.__d = !1,
                      E && E(t),
                      c = u.render(u.props, u.state, u.context),
                      R = 0; R < u._sb.length; R++)
                          u.__h.push(u._sb[R]);
                      u._sb = []
                  } else
                      do {
                          u.__d = !1,
                          E && E(t),
                          c = u.render(u.props, u.state, u.context),
                          u.state = u.__s
                      } while (u.__d && ++D < 25);
                  u.state = u.__s,
                  null != u.getChildContext && (r = m(m({}, r), u.getChildContext())),
                  h || null == u.getSnapshotBeforeUpdate || (g = u.getSnapshotBeforeUpdate(f, p)),
                  T = null != c && c.type === w && null == c.key ? c.props.children : c,
                  M(e, Array.isArray(T) ? T : [T], t, n, r, i, s, a, l, d),
                  u.base = t.__e,
                  t.__h = null,
                  u.__h.length && a.push(u),
                  v && (u.__E = u.__ = null),
                  u.__e = !1
              } else
                  null == s && t.__v === n.__v ? (t.__k = n.__k,
                  t.__e = n.__e) : t.__e = W(n.__e, t, n, r, i, s, a, d);
              (c = o.diffed) && c(t)
          } catch (e) {
              t.__v = null,
              (d || null != s) && (t.__e = l,
              t.__h = !!d,
              s[s.indexOf(l)] = null),
              o.__e(e, t, n)
          }
      }
      function L(e, t) {
          o.__c && o.__c(t, e),
          e.some((function(t) {
              try {
                  e = t.__h,
                  t.__h = [],
                  e.some((function(e) {
                      e.call(t)
                  }
                  ))
              } catch (e) {
                  o.__e(e, t.__v)
              }
          }
          ))
      }
      function W(e, t, n, r, o, s, a, l) {
          var d, c, u, h = n.props, p = t.props, g = t.type, m = 0;
          if ("svg" === g && (o = !0),
          null != s)
              for (; m < s.length; m++)
                  if ((d = s[m]) && "setAttribute"in d == !!g && (g ? d.localName === g : 3 === d.nodeType)) {
                      e = d,
                      s[m] = null;
                      break
                  }
          if (null == e) {
              if (null === g)
                  return document.createTextNode(p);
              e = o ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p),
              s = null,
              l = !1
          }
          if (null === g)
              h === p || l && e.data === p || (e.data = p);
          else {
              if (s = s && i.call(e.childNodes),
              c = (h = n.props || f).dangerouslySetInnerHTML,
              u = p.dangerouslySetInnerHTML,
              !l) {
                  if (null != s)
                      for (h = {},
                      m = 0; m < e.attributes.length; m++)
                          h[e.attributes[m].name] = e.attributes[m].value;
                  (u || c) && (u && (c && u.__html == c.__html || u.__html === e.innerHTML) || (e.innerHTML = u && u.__html || ""))
              }
              if (function(e, t, n, r, i) {
                  var o;
                  for (o in n)
                      "children" === o || "key" === o || o in t || x(e, o, null, n[o], r);
                  for (o in t)
                      i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || x(e, o, t[o], n[o], r)
              }(e, p, h, o, l),
              u)
                  t.__k = [];
              else if (m = t.props.children,
              M(e, Array.isArray(m) ? m : [m], t, n, r, o && "foreignObject" !== g, s, a, s ? s[0] : n.__k && R(n, 0), l),
              null != s)
                  for (m = s.length; m--; )
                      null != s[m] && v(s[m]);
              l || ("value"in p && void 0 !== (m = p.value) && (m !== e.value || "progress" === g && !m || "option" === g && m !== h.value) && x(e, "value", m, h.value, !1),
              "checked"in p && void 0 !== (m = p.checked) && m !== e.checked && x(e, "checked", m, h.checked, !1))
          }
          return e
      }
      function j(e, t, n) {
          try {
              "function" == typeof e ? e(t) : e.current = t
          } catch (e) {
              o.__e(e, n)
          }
      }
      function z(e, t, n) {
          var r, i;
          if (o.unmount && o.unmount(e),
          (r = e.ref) && (r.current && r.current !== e.__e || j(r, null, t)),
          null != (r = e.__c)) {
              if (r.componentWillUnmount)
                  try {
                      r.componentWillUnmount()
                  } catch (e) {
                      o.__e(e, t)
                  }
              r.base = r.__P = null,
              e.__c = void 0
          }
          if (r = e.__k)
              for (i = 0; i < r.length; i++)
                  r[i] && z(r[i], t, n || "function" != typeof e.type);
          n || null == e.__e || v(e.__e),
          e.__ = e.__e = e.__d = void 0
      }
      function B(e, t, n) {
          return this.constructor(e, n)
      }
      function U(e, t, n) {
          var r, s, a;
          o.__ && o.__(e, t),
          s = (r = "function" == typeof n) ? null : n && n.__k || t.__k,
          a = [],
          P(t, e = (!r && n || t).__k = y(w, null, [e]), s || f, f, void 0 !== t.ownerSVGElement, !r && n ? [n] : s ? null : t.firstChild ? i.call(t.childNodes) : null, a, !r && n ? n : s ? s.__e : t.firstChild, r),
          L(a, e)
      }
      i = p.slice,
      o = {
          __e: function(e, t, n, r) {
              for (var i, o, s; t = t.__; )
                  if ((i = t.__c) && !i.__)
                      try {
                          if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(e)),
                          s = i.__d),
                          null != i.componentDidCatch && (i.componentDidCatch(e, r || {}),
                          s = i.__d),
                          s)
                              return i.__E = i
                      } catch (t) {
                          e = t
                      }
              throw e
          }
      },
      s = 0,
      a = function(e) {
          return null != e && void 0 === e.constructor
      }
      ,
      l = !1,
      C.prototype.setState = function(e, t) {
          var n;
          n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = m({}, this.state),
          "function" == typeof e && (e = e(m({}, n), this.props)),
          e && m(n, e),
          null != e && this.__v && (t && this._sb.push(t),
          k(this))
      }
      ,
      C.prototype.forceUpdate = function(e) {
          this.__v && (this.__e = !0,
          e && this.__h.push(e),
          k(this))
      }
      ,
      C.prototype.render = w,
      d = [],
      u = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
      _.__r = 0,
      h = 0;
      var G, F, V, q = [], Y = [], Q = o.__b, Z = o.__r, $ = o.diffed, X = o.__c, J = o.unmount;
      function K() {
          for (var e; e = q.shift(); )
              if (e.__P && e.__H)
                  try {
                      e.__H.__h.forEach(ne),
                      e.__H.__h.forEach(re),
                      e.__H.__h = []
                  } catch (t) {
                      e.__H.__h = [],
                      o.__e(t, e.__v)
                  }
      }
      o.__b = function(e) {
          G = null,
          Q && Q(e)
      }
      ,
      o.__r = function(e) {
          Z && Z(e);
          var t = (G = e.__c).__H;
          t && (F === G ? (t.__h = [],
          G.__h = [],
          t.__.forEach((function(e) {
              e.__N && (e.__ = e.__N),
              e.__V = Y,
              e.__N = e.i = void 0
          }
          ))) : (t.__h.forEach(ne),
          t.__h.forEach(re),
          t.__h = [])),
          F = G
      }
      ,
      o.diffed = function(e) {
          $ && $(e);
          var t = e.__c;
          t && t.__H && (t.__H.__h.length && (1 !== q.push(t) && V === o.requestAnimationFrame || ((V = o.requestAnimationFrame) || te)(K)),
          t.__H.__.forEach((function(e) {
              e.i && (e.__H = e.i),
              e.__V !== Y && (e.__ = e.__V),
              e.i = void 0,
              e.__V = Y
          }
          ))),
          F = G = null
      }
      ,
      o.__c = function(e, t) {
          t.some((function(e) {
              try {
                  e.__h.forEach(ne),
                  e.__h = e.__h.filter((function(e) {
                      return !e.__ || re(e)
                  }
                  ))
              } catch (n) {
                  t.some((function(e) {
                      e.__h && (e.__h = [])
                  }
                  )),
                  t = [],
                  o.__e(n, e.__v)
              }
          }
          )),
          X && X(e, t)
      }
      ,
      o.unmount = function(e) {
          J && J(e);
          var t, n = e.__c;
          n && n.__H && (n.__H.__.forEach((function(e) {
              try {
                  ne(e)
              } catch (e) {
                  t = e
              }
          }
          )),
          n.__H = void 0,
          t && o.__e(t, n.__v))
      }
      ;
      var ee = "function" == typeof requestAnimationFrame;
      function te(e) {
          var t, n = function() {
              clearTimeout(r),
              ee && cancelAnimationFrame(t),
              setTimeout(e)
          }, r = setTimeout(n, 100);
          ee && (t = requestAnimationFrame(n))
      }
      function ne(e) {
          var t = G
            , n = e.__c;
          "function" == typeof n && (e.__c = void 0,
          n()),
          G = t
      }
      function re(e) {
          var t = G;
          e.__c = e.__(),
          G = t
      }
      function ie(e, t) {
          for (var n in e)
              if ("__source" !== n && !(n in t))
                  return !0;
          for (var r in t)
              if ("__source" !== r && e[r] !== t[r])
                  return !0;
          return !1
      }
      function oe(e) {
          this.props = e
      }
      (oe.prototype = new C).isPureReactComponent = !0,
      oe.prototype.shouldComponentUpdate = function(e, t) {
          return ie(this.props, e) || ie(this.state, t)
      }
      ;
      var se = o.__b;
      o.__b = function(e) {
          e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
          e.ref = null),
          se && se(e)
      }
      ,
      "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
      var ae = o.__e;
      o.__e = function(e, t, n, r) {
          if (e.then)
              for (var i, o = t; o = o.__; )
                  if ((i = o.__c) && i.__c)
                      return null == t.__e && (t.__e = n.__e,
                      t.__k = n.__k),
                      i.__c(e, t);
          ae(e, t, n, r)
      }
      ;
      var le = o.unmount;
      function de(e, t, n) {
          return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
              "function" == typeof e.__c && e.__c()
          }
          )),
          e.__c.__H = null),
          null != (e = function(e, t) {
              for (var n in t)
                  e[n] = t[n];
              return e
          }({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t),
          e.__c = null),
          e.__k = e.__k && e.__k.map((function(e) {
              return de(e, t, n)
          }
          ))),
          e
      }
      function ce(e, t, n) {
          return e && (e.__v = null,
          e.__k = e.__k && e.__k.map((function(e) {
              return ce(e, t, n)
          }
          )),
          e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d),
          e.__c.__e = !0,
          e.__c.__P = n)),
          e
      }
      function ue() {
          this.__u = 0,
          this.t = null,
          this.__b = null
      }
      function he(e) {
          var t = e.__.__c;
          return t && t.__a && t.__a(e)
      }
      function fe() {
          this.u = null,
          this.o = null
      }
      o.unmount = function(e) {
          var t = e.__c;
          t && t.__R && t.__R(),
          t && !0 === e.__h && (e.type = null),
          le && le(e)
      }
      ,
      (ue.prototype = new C).__c = function(e, t) {
          var n = t.__c
            , r = this;
          null == r.t && (r.t = []),
          r.t.push(n);
          var i = he(r.__v)
            , o = !1
            , s = function() {
              o || (o = !0,
              n.__R = null,
              i ? i(a) : a())
          };
          n.__R = s;
          var a = function() {
              if (!--r.__u) {
                  if (r.state.__a) {
                      var e = r.state.__a;
                      r.__v.__k[0] = ce(e, e.__c.__P, e.__c.__O)
                  }
                  var t;
                  for (r.setState({
                      __a: r.__b = null
                  }); t = r.t.pop(); )
                      t.forceUpdate()
              }
          }
            , l = !0 === t.__h;
          r.__u++ || l || r.setState({
              __a: r.__b = r.__v.__k[0]
          }),
          e.then(s, s)
      }
      ,
      ue.prototype.componentWillUnmount = function() {
          this.t = []
      }
      ,
      ue.prototype.render = function(e, t) {
          if (this.__b) {
              if (this.__v.__k) {
                  var n = document.createElement("div")
                    , r = this.__v.__k[0].__c;
                  this.__v.__k[0] = de(this.__b, n, r.__O = r.__P)
              }
              this.__b = null
          }
          var i = t.__a && y(w, null, e.fallback);
          return i && (i.__h = null),
          [y(w, null, t.__a ? null : e.children), i]
      }
      ;
      var pe = function(e, t, n) {
          if (++n[1] === n[0] && e.o.delete(t),
          e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
              for (n = e.u; n; ) {
                  for (; n.length > 3; )
                      n.pop()();
                  if (n[1] < n[0])
                      break;
                  e.u = n = n[2]
              }
      };
      function ge(e) {
          return this.getChildContext = function() {
              return e.context
          }
          ,
          e.children
      }
      function me(e) {
          var t = this
            , n = e.i;
          t.componentWillUnmount = function() {
              U(null, t.l),
              t.l = null,
              t.i = null
          }
          ,
          t.i && t.i !== n && t.componentWillUnmount(),
          e.__v ? (t.l || (t.i = n,
          t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function(e) {
                  this.childNodes.push(e),
                  t.i.appendChild(e)
              },
              insertBefore: function(e, n) {
                  this.childNodes.push(e),
                  t.i.appendChild(e)
              },
              removeChild: function(e) {
                  this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                  t.i.removeChild(e)
              }
          }),
          U(y(ge, {
              context: t.context
          }, e.__v), t.l)) : t.l && t.componentWillUnmount()
      }
      (fe.prototype = new C).__a = function(e) {
          var t = this
            , n = he(t.__v)
            , r = t.o.get(e);
          return r[0]++,
          function(i) {
              var o = function() {
                  t.props.revealOrder ? (r.push(i),
                  pe(t, e, r)) : i()
              };
              n ? n(o) : o()
          }
      }
      ,
      fe.prototype.render = function(e) {
          this.u = null,
          this.o = new Map;
          var t = H(e.children);
          e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
          for (var n = t.length; n--; )
              this.o.set(t[n], this.u = [1, 0, this.u]);
          return e.children
      }
      ,
      fe.prototype.componentDidUpdate = fe.prototype.componentDidMount = function() {
          var e = this;
          this.o.forEach((function(t, n) {
              pe(e, n, t)
          }
          ))
      }
      ;
      var ve = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103
        , ye = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
        , be = "undefined" != typeof document
        , we = function(e) {
          return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
      };
      C.prototype.isReactComponent = {},
      ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
          Object.defineProperty(C.prototype, e, {
              configurable: !0,
              get: function() {
                  return this["UNSAFE_" + e]
              },
              set: function(t) {
                  Object.defineProperty(this, e, {
                      configurable: !0,
                      writable: !0,
                      value: t
                  })
              }
          })
      }
      ));
      var Se = o.event;
      function xe() {}
      function Ee() {
          return this.cancelBubble
      }
      function De() {
          return this.defaultPrevented
      }
      o.event = function(e) {
          return Se && (e = Se(e)),
          e.persist = xe,
          e.isPropagationStopped = Ee,
          e.isDefaultPrevented = De,
          e.nativeEvent = e
      }
      ;
      var Ce = {
          configurable: !0,
          get: function() {
              return this.class
          }
      }
        , Re = o.vnode;
      o.vnode = function(e) {
          var t = e.type
            , n = e.props
            , r = n;
          if ("string" == typeof t) {
              var i = -1 === t.indexOf("-");
              for (var o in r = {},
              n) {
                  var s = n[o];
                  be && "children" === o && "noscript" === t || "value" === o && "defaultValue"in n && null == s || ("defaultValue" === o && "value"in n && null == n.value ? o = "value" : "download" === o && !0 === s ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !we(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && ye.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === s && (s = void 0),
                  /^oninput$/i.test(o) && (o = o.toLowerCase(),
                  r[o] && (o = "oninputCapture")),
                  r[o] = s)
              }
              "select" == t && r.multiple && Array.isArray(r.value) && (r.value = H(n.children).forEach((function(e) {
                  e.props.selected = -1 != r.value.indexOf(e.props.value)
              }
              ))),
              "select" == t && null != r.defaultValue && (r.value = H(n.children).forEach((function(e) {
                  e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
              }
              ))),
              e.props = r,
              n.class != n.className && (Ce.enumerable = "className"in n,
              null != n.className && (r.class = n.className),
              Object.defineProperty(r, "className", Ce))
          }
          e.$$typeof = ve,
          Re && Re(e)
      }
      ;
      var Te = o.__r;
      o.__r = function(e) {
          Te && Te(e),
          e.__c
      }
      ;
      const Ae = []
        , ke = new Map;
      function _e(e) {
          Ae.push(e),
          ke.forEach((t=>{
              Ie(t, e)
          }
          ))
      }
      function Me(e) {
          let t = ke.get(e);
          if (!t || !t.isConnected) {
              if (t = e.querySelector("style[data-fullcalendar]"),
              !t) {
                  t = document.createElement("style"),
                  t.setAttribute("data-fullcalendar", "");
                  const n = (void 0 === He && (He = function() {
                      const e = document.querySelector('meta[name="csp-nonce"]');
                      if (e && e.hasAttribute("content"))
                          return e.getAttribute("content");
                      const t = document.querySelector("script[nonce]");
                      return t && t.nonce || ""
                  }()),
                  He);
                  n && (t.nonce = n);
                  const r = e === document ? document.head : e
                    , i = e === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
                  r.insertBefore(t, i)
              }
              ke.set(e, t),
              function(e) {
                  for (const t of Ae)
                      Ie(e, t)
              }(t)
          }
      }
      function Ie(e, t) {
          const {sheet: n} = e
            , r = n.cssRules.length;
          t.split("}").forEach(((e,t)=>{
              (e = e.trim()) && n.insertRule(e + "}", r + t)
          }
          ))
      }
      let He;
      "undefined" != typeof document && Me(document),
      _e(':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}');
      class Oe {
          constructor(e) {
              this.drainedOption = e,
              this.isRunning = !1,
              this.isDirty = !1,
              this.pauseDepths = {},
              this.timeoutId = 0
          }
          request(e) {
              this.isDirty = !0,
              this.isPaused() || (this.clearTimeout(),
              null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
          }
          pause(e="") {
              let {pauseDepths: t} = this;
              t[e] = (t[e] || 0) + 1,
              this.clearTimeout()
          }
          resume(e="", t) {
              let {pauseDepths: n} = this;
              e in n && (t ? delete n[e] : (n[e] -= 1,
              n[e] <= 0 && delete n[e]),
              this.tryDrain())
          }
          isPaused() {
              return Object.keys(this.pauseDepths).length
          }
          tryDrain() {
              if (!this.isRunning && !this.isPaused()) {
                  for (this.isRunning = !0; this.isDirty; )
                      this.isDirty = !1,
                      this.drained();
                  this.isRunning = !1
              }
          }
          clear() {
              this.clearTimeout(),
              this.isDirty = !1,
              this.pauseDepths = {}
          }
          clearTimeout() {
              this.timeoutId && (clearTimeout(this.timeoutId),
              this.timeoutId = 0)
          }
          drained() {
              this.drainedOption && this.drainedOption()
          }
      }
      function Ne(e) {
          e.parentNode && e.parentNode.removeChild(e)
      }
      function Pe(e, t) {
          if (e.closest)
              return e.closest(t);
          if (!document.documentElement.contains(e))
              return null;
          do {
              if (Le(e, t))
                  return e;
              e = e.parentElement || e.parentNode
          } while (null !== e && 1 === e.nodeType);
          return null
      }
      function Le(e, t) {
          return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
      }
      function We(e, t) {
          let n = e instanceof HTMLElement ? [e] : e
            , r = [];
          for (let e = 0; e < n.length; e += 1) {
              let i = n[e].querySelectorAll(t);
              for (let e = 0; e < i.length; e += 1)
                  r.push(i[e])
          }
          return r
      }
      const je = /(top|left|right|bottom|width|height)$/i;
      function ze(e, t) {
          for (let n in t)
              Be(e, n, t[n])
      }
      function Be(e, t, n) {
          null == n ? e.style[t] = "" : "number" == typeof n && je.test(t) ? e.style[t] = `${n}px` : e.style[t] = n
      }
      function Ue(e) {
          var t, n;
          return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target
      }
      let Ge = 0;
      function Fe() {
          return Ge += 1,
          "fc-dom-" + Ge
      }
      function Ve(e) {
          e.preventDefault()
      }
      function qe(e, t, n, r) {
          let i = function(e, t) {
              return n=>{
                  let r = Pe(n.target, e);
                  r && t.call(r, n, r)
              }
          }(n, r);
          return e.addEventListener(t, i),
          ()=>{
              e.removeEventListener(t, i)
          }
      }
      const Ye = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];
      function Qe(e) {
          return Object.assign({
              onClick: e
          }, Ze(e))
      }
      function Ze(e) {
          return {
              tabIndex: 0,
              onKeyDown(t) {
                  "Enter" !== t.key && " " !== t.key || (e(t),
                  t.preventDefault())
              }
          }
      }
      let $e = 0;
      function Xe() {
          return $e += 1,
          String($e)
      }
      function Je() {
          document.body.classList.add("fc-not-allowed")
      }
      function Ke() {
          document.body.classList.remove("fc-not-allowed")
      }
      function et(e) {
          let t, n, r = [], i = [];
          for ("string" == typeof e ? i = e.split(/\s*,\s*/) : "function" == typeof e ? i = [e] : Array.isArray(e) && (i = e),
          t = 0; t < i.length; t += 1)
              n = i[t],
              "string" == typeof n ? r.push("-" === n.charAt(0) ? {
                  field: n.substring(1),
                  order: -1
              } : {
                  field: n,
                  order: 1
              }) : "function" == typeof n && r.push({
                  func: n
              });
          return r
      }
      function tt(e, t, n) {
          let r, i;
          for (r = 0; r < n.length; r += 1)
              if (i = nt(e, t, n[r]),
              i)
                  return i;
          return 0
      }
      function nt(e, t, n) {
          return n.func ? n.func(e, t) : rt(e[n.field], t[n.field]) * (n.order || 1)
      }
      function rt(e, t) {
          return e || t ? null == t ? -1 : null == e ? 1 : "string" == typeof e || "string" == typeof t ? String(e).localeCompare(String(t)) : e - t : 0
      }
      function it(e, t) {
          let n = String(e);
          return "000".substr(0, t - n.length) + n
      }
      function ot(e, t, n) {
          return "function" == typeof e ? e(...t) : "string" == typeof e ? t.reduce(((e,t,n)=>e.replace("$" + n, t || "")), e) : n
      }
      function st(e, t) {
          return e - t
      }
      function at(e) {
          return e % 1 == 0
      }
      function lt(e) {
          let t = e.querySelector(".fc-scrollgrid-shrink-frame")
            , n = e.querySelector(".fc-scrollgrid-shrink-cushion");
          if (!t)
              throw new Error("needs fc-scrollgrid-shrink-frame className");
          if (!n)
              throw new Error("needs fc-scrollgrid-shrink-cushion className");
          return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
      }
      const dt = ["years", "months", "days", "milliseconds"]
        , ct = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
      function ut(e, t) {
          return "string" == typeof e ? function(e) {
              let t = ct.exec(e);
              if (t) {
                  let e = t[1] ? -1 : 1;
                  return {
                      years: 0,
                      months: 0,
                      days: e * (t[2] ? parseInt(t[2], 10) : 0),
                      milliseconds: e * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                  }
              }
              return null
          }(e) : "object" == typeof e && e ? ht(e) : "number" == typeof e ? ht({
              [t || "milliseconds"]: e
          }) : null
      }
      function ht(e) {
          let t = {
              years: e.years || e.year || 0,
              months: e.months || e.month || 0,
              days: e.days || e.day || 0,
              milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
          }
            , n = e.weeks || e.week;
          return n && (t.days += 7 * n,
          t.specifiedWeeks = !0),
          t
      }
      function ft(e) {
          return e.years || e.months || e.milliseconds ? 0 : e.days
      }
      function pt(e, t) {
          return {
              years: e.years + t.years,
              months: e.months + t.months,
              days: e.days + t.days,
              milliseconds: e.milliseconds + t.milliseconds
          }
      }
      function gt(e, t) {
          return {
              years: e.years * t,
              months: e.months * t,
              days: e.days * t,
              milliseconds: e.milliseconds * t
          }
      }
      function mt(e) {
          return vt(e) / 864e5
      }
      function vt(e) {
          return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
      }
      function yt(e, t) {
          let n = null;
          for (let r = 0; r < dt.length; r += 1) {
              let i = dt[r];
              if (t[i]) {
                  let r = e[i] / t[i];
                  if (!at(r) || null !== n && n !== r)
                      return null;
                  n = r
              } else if (e[i])
                  return null
          }
          return n
      }
      function bt(e) {
          let t = e.milliseconds;
          if (t) {
              if (t % 1e3 != 0)
                  return {
                      unit: "millisecond",
                      value: t
                  };
              if (t % 6e4 != 0)
                  return {
                      unit: "second",
                      value: t / 1e3
                  };
              if (t % 36e5 != 0)
                  return {
                      unit: "minute",
                      value: t / 6e4
                  };
              if (t)
                  return {
                      unit: "hour",
                      value: t / 36e5
                  }
          }
          return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
              unit: "week",
              value: e.days / 7
          } : {
              unit: "day",
              value: e.days
          } : e.months ? {
              unit: "month",
              value: e.months
          } : e.years ? {
              unit: "year",
              value: e.years
          } : {
              unit: "millisecond",
              value: 0
          }
      }
      function wt(e, t, n) {
          if (e === t)
              return !0;
          let r, i = e.length;
          if (i !== t.length)
              return !1;
          for (r = 0; r < i; r += 1)
              if (!(n ? n(e[r], t[r]) : e[r] === t[r]))
                  return !1;
          return !0
      }
      const St = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
      function xt(e, t) {
          let n = It(e);
          return n[2] += 7 * t,
          Ht(n)
      }
      function Et(e, t) {
          let n = It(e);
          return n[2] += t,
          Ht(n)
      }
      function Dt(e, t) {
          let n = It(e);
          return n[6] += t,
          Ht(n)
      }
      function Ct(e, t) {
          return (t.valueOf() - e.valueOf()) / 864e5
      }
      function Rt(e, t) {
          return Nt(e) === Nt(t) ? Math.round(Ct(e, t)) : null
      }
      function Tt(e) {
          return Ht([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
      }
      function At(e, t, n, r) {
          let i = Ht([t, 0, 1 + kt(t, n, r)])
            , o = Tt(e)
            , s = Math.round(Ct(i, o));
          return Math.floor(s / 7) + 1
      }
      function kt(e, t, n) {
          let r = 7 + t - n;
          return -(7 + Ht([e, 0, r]).getUTCDay() - t) % 7 + r - 1
      }
      function _t(e) {
          return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
      }
      function Mt(e) {
          return new Date(e[0],e[1] || 0,null == e[2] ? 1 : e[2],e[3] || 0,e[4] || 0,e[5] || 0)
      }
      function It(e) {
          return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
      }
      function Ht(e) {
          return 1 === e.length && (e = e.concat([0])),
          new Date(Date.UTC(...e))
      }
      function Ot(e) {
          return !isNaN(e.valueOf())
      }
      function Nt(e) {
          return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
      }
      function Pt(e, t, n=!1) {
          let r = e.toISOString();
          return r = r.replace(".000", ""),
          n && (r = r.replace("T00:00:00Z", "")),
          r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", jt(t, !0)))),
          r
      }
      function Lt(e) {
          return e.toISOString().replace(/T.*$/, "")
      }
      function Wt(e) {
          return e.toISOString().match(/^\d{4}-\d{2}/)[0]
      }
      function jt(e, t=!1) {
          let n = e < 0 ? "-" : "+"
            , r = Math.abs(e)
            , i = Math.floor(r / 60)
            , o = Math.round(r % 60);
          return t ? `${n + it(i, 2)}:${it(o, 2)}` : `GMT${n}${i}${o ? `:${it(o, 2)}` : ""}`
      }
      function zt(e, t, n) {
          let r, i;
          return function(...o) {
              if (r) {
                  if (!wt(r, o)) {
                      n && n(i);
                      let r = e.apply(this, o);
                      t && t(r, i) || (i = r)
                  }
              } else
                  i = e.apply(this, o);
              return r = o,
              i
          }
      }
      function Bt(e, t, n) {
          let r, i;
          return o=>{
              if (r) {
                  if (!xn(r, o)) {
                      n && n(i);
                      let r = e.call(this, o);
                      t && t(r, i) || (i = r)
                  }
              } else
                  i = e.call(this, o);
              return r = o,
              i
          }
      }
      function Ut(e, t, n) {
          let r = []
            , i = [];
          return o=>{
              let s = r.length
                , a = o.length
                , l = 0;
              for (; l < s; l += 1)
                  if (o[l]) {
                      if (!wt(r[l], o[l])) {
                          n && n(i[l]);
                          let r = e.apply(this, o[l]);
                          t && t(r, i[l]) || (i[l] = r)
                      }
                  } else
                      n && n(i[l]);
              for (; l < a; l += 1)
                  i[l] = e.apply(this, o[l]);
              return r = o,
              i.splice(a),
              i
          }
      }
      function Gt(e, t, n) {
          let r = {}
            , i = {};
          return o=>{
              let s = {};
              for (let a in o)
                  if (i[a])
                      if (wt(r[a], o[a]))
                          s[a] = i[a];
                      else {
                          n && n(i[a]);
                          let r = e.apply(this, o[a]);
                          s[a] = t && t(r, i[a]) ? i[a] : r
                      }
                  else
                      s[a] = e.apply(this, o[a]);
              return r = o,
              i = s,
              s
          }
      }
      const Ft = {
          week: 3,
          separator: 0,
          omitZeroMinute: 0,
          meridiem: 0,
          omitCommas: 0
      }
        , Vt = {
          timeZoneName: 7,
          era: 6,
          year: 5,
          month: 4,
          day: 2,
          weekday: 2,
          hour: 1,
          minute: 1,
          second: 1
      }
        , qt = /\s*([ap])\.?m\.?/i
        , Yt = /,/g
        , Qt = /\s+/g
        , Zt = /\u200e/g
        , $t = /UTC|GMT/;
      class Xt {
          constructor(e) {
              let t = {}
                , n = {}
                , r = 0;
              for (let i in e)
                  i in Ft ? (n[i] = e[i],
                  r = Math.max(Ft[i], r)) : (t[i] = e[i],
                  i in Vt && (r = Math.max(Vt[i], r)));
              this.standardDateProps = t,
              this.extendedSettings = n,
              this.severity = r,
              this.buildFormattingFunc = zt(Jt)
          }
          format(e, t) {
              return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
          }
          formatRange(e, t, n, r) {
              let {standardDateProps: i, extendedSettings: o} = this
                , s = (a = e.marker,
              l = t.marker,
              (d = n.calendarSystem).getMarkerYear(a) !== d.getMarkerYear(l) ? 5 : d.getMarkerMonth(a) !== d.getMarkerMonth(l) ? 4 : d.getMarkerDay(a) !== d.getMarkerDay(l) ? 2 : Nt(a) !== Nt(l) ? 1 : 0);
              var a, l, d;
              if (!s)
                  return this.format(e, n);
              let c = s;
              !(c > 1) || "numeric" !== i.year && "2-digit" !== i.year || "numeric" !== i.month && "2-digit" !== i.month || "numeric" !== i.day && "2-digit" !== i.day || (c = 1);
              let u = this.format(e, n)
                , h = this.format(t, n);
              if (u === h)
                  return u;
              let f = Jt(function(e, t) {
                  let n = {};
                  for (let r in e)
                      (!(r in Vt) || Vt[r] <= t) && (n[r] = e[r]);
                  return n
              }(i, c), o, n)
                , p = f(e)
                , g = f(t)
                , m = function(e, t, n, r) {
                  let i = 0;
                  for (; i < e.length; ) {
                      let o = e.indexOf(t, i);
                      if (-1 === o)
                          break;
                      let s = e.substr(0, o);
                      i = o + t.length;
                      let a = e.substr(i)
                        , l = 0;
                      for (; l < n.length; ) {
                          let e = n.indexOf(r, l);
                          if (-1 === e)
                              break;
                          let t = n.substr(0, e);
                          l = e + r.length;
                          let i = n.substr(l);
                          if (s === t && a === i)
                              return {
                                  before: s,
                                  after: a
                              }
                      }
                  }
                  return null
              }(u, p, h, g)
                , v = o.separator || r || n.defaultSeparator || "";
              return m ? m.before + p + v + g + m.after : u + v + h
          }
          getLargestUnit() {
              switch (this.severity) {
              case 7:
              case 6:
              case 5:
                  return "year";
              case 4:
                  return "month";
              case 3:
                  return "week";
              case 2:
                  return "day";
              default:
                  return "time"
              }
          }
      }
      function Jt(e, t, n) {
          let r = Object.keys(e).length;
          return 1 === r && "short" === e.timeZoneName ? e=>jt(e.timeZoneOffset) : 0 === r && t.week ? e=>function(e, t, n, r, i) {
              let o = [];
              return "long" === i ? o.push(n) : "short" !== i && "narrow" !== i || o.push(t),
              "long" !== i && "short" !== i || o.push(" "),
              o.push(r.simpleNumberFormat.format(e)),
              "rtl" === r.options.direction && o.reverse(),
              o.join("")
          }(n.computeWeekNumber(e.marker), n.weekText, n.weekTextLong, n.locale, t.week) : function(e, t, n) {
              e = Object.assign({}, e),
              t = Object.assign({}, t),
              function(e, t) {
                  e.timeZoneName && (e.hour || (e.hour = "2-digit"),
                  e.minute || (e.minute = "2-digit")),
                  "long" === e.timeZoneName && (e.timeZoneName = "short"),
                  t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
              }(e, t),
              e.timeZone = "UTC";
              let r, i = new Intl.DateTimeFormat(n.locale.codes,e);
              if (t.omitZeroMinute) {
                  let t = Object.assign({}, e);
                  delete t.minute,
                  r = new Intl.DateTimeFormat(n.locale.codes,t)
              }
              return o=>{
                  let s, {marker: a} = o;
                  return s = r && !a.getUTCMinutes() ? r : i,
                  function(e, t, n, r, i) {
                      return e = e.replace(Zt, ""),
                      "short" === n.timeZoneName && (e = function(e, t) {
                          let n = !1;
                          return e = e.replace($t, (()=>(n = !0,
                          t))),
                          n || (e += ` ${t}`),
                          e
                      }(e, "UTC" === i.timeZone || null == t.timeZoneOffset ? "UTC" : jt(t.timeZoneOffset))),
                      r.omitCommas && (e = e.replace(Yt, "").trim()),
                      r.omitZeroMinute && (e = e.replace(":00", "")),
                      !1 === r.meridiem ? e = e.replace(qt, "").trim() : "narrow" === r.meridiem ? e = e.replace(qt, ((e,t)=>t.toLocaleLowerCase())) : "short" === r.meridiem ? e = e.replace(qt, ((e,t)=>`${t.toLocaleLowerCase()}m`)) : "lowercase" === r.meridiem && (e = e.replace(qt, (e=>e.toLocaleLowerCase()))),
                      e = (e = e.replace(Qt, " ")).trim()
                  }(s.format(a), o, e, t, n)
              }
          }(e, t, n)
      }
      function Kt(e, t) {
          let n = t.markerToArray(e.marker);
          return {
              marker: e.marker,
              timeZoneOffset: e.timeZoneOffset,
              array: n,
              year: n[0],
              month: n[1],
              day: n[2],
              hour: n[3],
              minute: n[4],
              second: n[5],
              millisecond: n[6]
          }
      }
      function en(e, t, n, r) {
          let i = Kt(e, n.calendarSystem);
          return {
              date: i,
              start: i,
              end: t ? Kt(t, n.calendarSystem) : null,
              timeZone: n.timeZone,
              localeCodes: n.locale.codes,
              defaultSeparator: r || n.defaultSeparator
          }
      }
      class tn {
          constructor(e) {
              this.cmdStr = e
          }
          format(e, t, n) {
              return t.cmdFormatter(this.cmdStr, en(e, null, t, n))
          }
          formatRange(e, t, n, r) {
              return n.cmdFormatter(this.cmdStr, en(e, t, n, r))
          }
      }
      class nn {
          constructor(e) {
              this.func = e
          }
          format(e, t, n) {
              return this.func(en(e, null, t, n))
          }
          formatRange(e, t, n, r) {
              return this.func(en(e, t, n, r))
          }
      }
      function rn(e) {
          return "object" == typeof e && e ? new Xt(e) : "string" == typeof e ? new tn(e) : "function" == typeof e ? new nn(e) : null
      }
      const on = {
          navLinkDayClick: gn,
          navLinkWeekClick: gn,
          duration: ut,
          bootstrapFontAwesome: gn,
          buttonIcons: gn,
          customButtons: gn,
          defaultAllDayEventDuration: ut,
          defaultTimedEventDuration: ut,
          nextDayThreshold: ut,
          scrollTime: ut,
          scrollTimeReset: Boolean,
          slotMinTime: ut,
          slotMaxTime: ut,
          dayPopoverFormat: rn,
          slotDuration: ut,
          snapDuration: ut,
          headerToolbar: gn,
          footerToolbar: gn,
          defaultRangeSeparator: String,
          titleRangeSeparator: String,
          forceEventDuration: Boolean,
          dayHeaders: Boolean,
          dayHeaderFormat: rn,
          dayHeaderClassNames: gn,
          dayHeaderContent: gn,
          dayHeaderDidMount: gn,
          dayHeaderWillUnmount: gn,
          dayCellClassNames: gn,
          dayCellContent: gn,
          dayCellDidMount: gn,
          dayCellWillUnmount: gn,
          initialView: String,
          aspectRatio: Number,
          weekends: Boolean,
          weekNumberCalculation: gn,
          weekNumbers: Boolean,
          weekNumberClassNames: gn,
          weekNumberContent: gn,
          weekNumberDidMount: gn,
          weekNumberWillUnmount: gn,
          editable: Boolean,
          viewClassNames: gn,
          viewDidMount: gn,
          viewWillUnmount: gn,
          nowIndicator: Boolean,
          nowIndicatorClassNames: gn,
          nowIndicatorContent: gn,
          nowIndicatorDidMount: gn,
          nowIndicatorWillUnmount: gn,
          showNonCurrentDates: Boolean,
          lazyFetching: Boolean,
          startParam: String,
          endParam: String,
          timeZoneParam: String,
          timeZone: String,
          locales: gn,
          locale: gn,
          themeSystem: String,
          dragRevertDuration: Number,
          dragScroll: Boolean,
          allDayMaintainDuration: Boolean,
          unselectAuto: Boolean,
          dropAccept: gn,
          eventOrder: et,
          eventOrderStrict: Boolean,
          handleWindowResize: Boolean,
          windowResizeDelay: Number,
          longPressDelay: Number,
          eventDragMinDistance: Number,
          expandRows: Boolean,
          height: gn,
          contentHeight: gn,
          direction: String,
          weekNumberFormat: rn,
          eventResizableFromStart: Boolean,
          displayEventTime: Boolean,
          displayEventEnd: Boolean,
          weekText: String,
          weekTextLong: String,
          progressiveEventRendering: Boolean,
          businessHours: gn,
          initialDate: gn,
          now: gn,
          eventDataTransform: gn,
          stickyHeaderDates: gn,
          stickyFooterScrollbar: gn,
          viewHeight: gn,
          defaultAllDay: Boolean,
          eventSourceFailure: gn,
          eventSourceSuccess: gn,
          eventDisplay: String,
          eventStartEditable: Boolean,
          eventDurationEditable: Boolean,
          eventOverlap: gn,
          eventConstraint: gn,
          eventAllow: gn,
          eventBackgroundColor: String,
          eventBorderColor: String,
          eventTextColor: String,
          eventColor: String,
          eventClassNames: gn,
          eventContent: gn,
          eventDidMount: gn,
          eventWillUnmount: gn,
          selectConstraint: gn,
          selectOverlap: gn,
          selectAllow: gn,
          droppable: Boolean,
          unselectCancel: String,
          slotLabelFormat: gn,
          slotLaneClassNames: gn,
          slotLaneContent: gn,
          slotLaneDidMount: gn,
          slotLaneWillUnmount: gn,
          slotLabelClassNames: gn,
          slotLabelContent: gn,
          slotLabelDidMount: gn,
          slotLabelWillUnmount: gn,
          dayMaxEvents: gn,
          dayMaxEventRows: gn,
          dayMinWidth: Number,
          slotLabelInterval: ut,
          allDayText: String,
          allDayClassNames: gn,
          allDayContent: gn,
          allDayDidMount: gn,
          allDayWillUnmount: gn,
          slotMinWidth: Number,
          navLinks: Boolean,
          eventTimeFormat: rn,
          rerenderDelay: Number,
          moreLinkText: gn,
          moreLinkHint: gn,
          selectMinDistance: Number,
          selectable: Boolean,
          selectLongPressDelay: Number,
          eventLongPressDelay: Number,
          selectMirror: Boolean,
          eventMaxStack: Number,
          eventMinHeight: Number,
          eventMinWidth: Number,
          eventShortHeight: Number,
          slotEventOverlap: Boolean,
          plugins: gn,
          firstDay: Number,
          dayCount: Number,
          dateAlignment: String,
          dateIncrement: ut,
          hiddenDays: gn,
          fixedWeekCount: Boolean,
          validRange: gn,
          visibleRange: gn,
          titleFormat: gn,
          eventInteractive: Boolean,
          noEventsText: String,
          viewHint: gn,
          navLinkHint: gn,
          closeHint: String,
          timeHint: String,
          eventHint: String,
          moreLinkClick: gn,
          moreLinkClassNames: gn,
          moreLinkContent: gn,
          moreLinkDidMount: gn,
          moreLinkWillUnmount: gn,
          monthStartFormat: rn,
          handleCustomRendering: gn,
          customRenderingMetaMap: gn,
          customRenderingReplaces: Boolean
      }
        , sn = {
          eventDisplay: "auto",
          defaultRangeSeparator: " - ",
          titleRangeSeparator: " – ",
          defaultTimedEventDuration: "01:00:00",
          defaultAllDayEventDuration: {
              day: 1
          },
          forceEventDuration: !1,
          nextDayThreshold: "00:00:00",
          dayHeaders: !0,
          initialView: "",
          aspectRatio: 1.35,
          headerToolbar: {
              start: "title",
              center: "",
              end: "today prev,next"
          },
          weekends: !0,
          weekNumbers: !1,
          weekNumberCalculation: "local",
          editable: !1,
          nowIndicator: !1,
          scrollTime: "06:00:00",
          scrollTimeReset: !0,
          slotMinTime: "00:00:00",
          slotMaxTime: "24:00:00",
          showNonCurrentDates: !0,
          lazyFetching: !0,
          startParam: "start",
          endParam: "end",
          timeZoneParam: "timeZone",
          timeZone: "local",
          locales: [],
          locale: "",
          themeSystem: "standard",
          dragRevertDuration: 500,
          dragScroll: !0,
          allDayMaintainDuration: !1,
          unselectAuto: !0,
          dropAccept: "*",
          eventOrder: "start,-duration,allDay,title",
          dayPopoverFormat: {
              month: "long",
              day: "numeric",
              year: "numeric"
          },
          handleWindowResize: !0,
          windowResizeDelay: 100,
          longPressDelay: 1e3,
          eventDragMinDistance: 5,
          expandRows: !1,
          navLinks: !1,
          selectable: !1,
          eventMinHeight: 15,
          eventMinWidth: 30,
          eventShortHeight: 30,
          monthStartFormat: {
              month: "long",
              day: "numeric"
          }
      }
        , an = {
          datesSet: gn,
          eventsSet: gn,
          eventAdd: gn,
          eventChange: gn,
          eventRemove: gn,
          windowResize: gn,
          eventClick: gn,
          eventMouseEnter: gn,
          eventMouseLeave: gn,
          select: gn,
          unselect: gn,
          loading: gn,
          _unmount: gn,
          _beforeprint: gn,
          _afterprint: gn,
          _noEventDrop: gn,
          _noEventResize: gn,
          _resize: gn,
          _scrollRequest: gn
      }
        , ln = {
          buttonText: gn,
          buttonHints: gn,
          views: gn,
          plugins: gn,
          initialEvents: gn,
          events: gn,
          eventSources: gn
      }
        , dn = {
          headerToolbar: cn,
          footerToolbar: cn,
          buttonText: cn,
          buttonHints: cn,
          buttonIcons: cn,
          dateIncrement: cn,
          plugins: un,
          events: un,
          eventSources: un,
          resources: un
      };
      function cn(e, t) {
          return "object" == typeof e && "object" == typeof t && e && t ? xn(e, t) : e === t
      }
      function un(e, t) {
          return Array.isArray(e) && Array.isArray(t) ? wt(e, t) : e === t
      }
      const hn = {
          type: String,
          component: gn,
          buttonText: String,
          buttonTextKey: String,
          dateProfileGeneratorClass: gn,
          usesMinMaxTime: Boolean,
          classNames: gn,
          content: gn,
          didMount: gn,
          willUnmount: gn
      };
      function fn(e) {
          return vn(e, dn)
      }
      function pn(e, t) {
          let n = {}
            , r = {};
          for (let r in t)
              r in e && (n[r] = t[r](e[r]));
          for (let n in e)
              n in t || (r[n] = e[n]);
          return {
              refined: n,
              extra: r
          }
      }
      function gn(e) {
          return e
      }
      const {hasOwnProperty: mn} = Object.prototype;
      function vn(e, t) {
          let n = {};
          if (t)
              for (let r in t)
                  if (t[r] === cn) {
                      let t = [];
                      for (let i = e.length - 1; i >= 0; i -= 1) {
                          let o = e[i][r];
                          if ("object" == typeof o && o)
                              t.unshift(o);
                          else if (void 0 !== o) {
                              n[r] = o;
                              break
                          }
                      }
                      t.length && (n[r] = vn(t))
                  }
          for (let t = e.length - 1; t >= 0; t -= 1) {
              let r = e[t];
              for (let e in r)
                  e in n || (n[e] = r[e])
          }
          return n
      }
      function yn(e, t) {
          let n = {};
          for (let r in e)
              t(e[r], r) && (n[r] = e[r]);
          return n
      }
      function bn(e, t) {
          let n = {};
          for (let r in e)
              n[r] = t(e[r], r);
          return n
      }
      function wn(e) {
          let t = {};
          for (let n of e)
              t[n] = !0;
          return t
      }
      function Sn(e) {
          let t = [];
          for (let n in e)
              t.push(e[n]);
          return t
      }
      function xn(e, t) {
          if (e === t)
              return !0;
          for (let n in e)
              if (mn.call(e, n) && !(n in t))
                  return !1;
          for (let n in t)
              if (mn.call(t, n) && e[n] !== t[n])
                  return !1;
          return !0
      }
      const En = /^on[A-Z]/;
      function Dn(e, t) {
          let n = [];
          for (let r in e)
              mn.call(e, r) && (r in t || n.push(r));
          for (let r in t)
              mn.call(t, r) && e[r] !== t[r] && n.push(r);
          return n
      }
      function Cn(e, t, n={}) {
          if (e === t)
              return !0;
          for (let s in t)
              if (!(s in e && (r = e[s],
              i = t[s],
              o = n[s],
              r === i || !0 === o || o && o(r, i))))
                  return !1;
          var r, i, o;
          for (let n in e)
              if (!(n in t))
                  return !1;
          return !0
      }
      function Rn(e, t=0, n, r=1) {
          let i = [];
          null == n && (n = Object.keys(e).length);
          for (let o = t; o < n; o += r) {
              let t = e[o];
              void 0 !== t && i.push(t)
          }
          return i
      }
      let Tn = {};
      var An;
      An = class {
          getMarkerYear(e) {
              return e.getUTCFullYear()
          }
          getMarkerMonth(e) {
              return e.getUTCMonth()
          }
          getMarkerDay(e) {
              return e.getUTCDate()
          }
          arrayToMarker(e) {
              return Ht(e)
          }
          markerToArray(e) {
              return It(e)
          }
      }
      ,
      Tn.gregory = An;
      const kn = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
      class _n {
          constructor(e) {
              let t = this.timeZone = e.timeZone
                , n = "local" !== t && "UTC" !== t;
              e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
              this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl),
              this.calendarSystem = function(e) {
                  return new Tn[e]
              }(e.calendarSystem),
              this.locale = e.locale,
              this.weekDow = e.locale.week.dow,
              this.weekDoy = e.locale.week.doy,
              "ISO" === e.weekNumberCalculation && (this.weekDow = 1,
              this.weekDoy = 4),
              "number" == typeof e.firstDay && (this.weekDow = e.firstDay),
              "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation),
              this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText,
              this.weekTextLong = (null != e.weekTextLong ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText,
              this.cmdFormatter = e.cmdFormatter,
              this.defaultSeparator = e.defaultSeparator
          }
          createMarker(e) {
              let t = this.createMarkerMeta(e);
              return null === t ? null : t.marker
          }
          createNowMarker() {
              return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : Ht(_t(new Date))
          }
          createMarkerMeta(e) {
              if ("string" == typeof e)
                  return this.parse(e);
              let t = null;
              return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(),
              isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = Ht(e)),
              null !== t && Ot(t) ? {
                  marker: t,
                  isTimeUnspecified: !1,
                  forcedTzo: null
              } : null
          }
          parse(e) {
              let t = function(e) {
                  let t = kn.exec(e);
                  if (t) {
                      let e = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number(`0.${t[12]}`) : 0));
                      if (Ot(e)) {
                          let n = null;
                          return t[13] && (n = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))),
                          {
                              marker: e,
                              isTimeUnspecified: !t[6],
                              timeZoneOffset: n
                          }
                      }
                  }
                  return null
              }(e);
              if (null === t)
                  return null;
              let {marker: n} = t
                , r = null;
              return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset),
              {
                  marker: n,
                  isTimeUnspecified: t.isTimeUnspecified,
                  forcedTzo: r
              }
          }
          getYear(e) {
              return this.calendarSystem.getMarkerYear(e)
          }
          getMonth(e) {
              return this.calendarSystem.getMarkerMonth(e)
          }
          getDay(e) {
              return this.calendarSystem.getMarkerDay(e)
          }
          add(e, t) {
              let n = this.calendarSystem.markerToArray(e);
              return n[0] += t.years,
              n[1] += t.months,
              n[2] += t.days,
              n[6] += t.milliseconds,
              this.calendarSystem.arrayToMarker(n)
          }
          subtract(e, t) {
              let n = this.calendarSystem.markerToArray(e);
              return n[0] -= t.years,
              n[1] -= t.months,
              n[2] -= t.days,
              n[6] -= t.milliseconds,
              this.calendarSystem.arrayToMarker(n)
          }
          addYears(e, t) {
              let n = this.calendarSystem.markerToArray(e);
              return n[0] += t,
              this.calendarSystem.arrayToMarker(n)
          }
          addMonths(e, t) {
              let n = this.calendarSystem.markerToArray(e);
              return n[1] += t,
              this.calendarSystem.arrayToMarker(n)
          }
          diffWholeYears(e, t) {
              let {calendarSystem: n} = this;
              return Nt(e) === Nt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
          }
          diffWholeMonths(e, t) {
              let {calendarSystem: n} = this;
              return Nt(e) === Nt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
          }
          greatestWholeUnit(e, t) {
              let n = this.diffWholeYears(e, t);
              return null !== n ? {
                  unit: "year",
                  value: n
              } : (n = this.diffWholeMonths(e, t),
              null !== n ? {
                  unit: "month",
                  value: n
              } : (n = function(e, t) {
                  let n = Rt(e, t);
                  return null !== n && n % 7 == 0 ? n / 7 : null
              }(e, t),
              null !== n ? {
                  unit: "week",
                  value: n
              } : (n = Rt(e, t),
              null !== n ? {
                  unit: "day",
                  value: n
              } : (n = function(e, t) {
                  return (t.valueOf() - e.valueOf()) / 36e5
              }(e, t),
              at(n) ? {
                  unit: "hour",
                  value: n
              } : (n = function(e, t) {
                  return (t.valueOf() - e.valueOf()) / 6e4
              }(e, t),
              at(n) ? {
                  unit: "minute",
                  value: n
              } : (n = function(e, t) {
                  return (t.valueOf() - e.valueOf()) / 1e3
              }(e, t),
              at(n) ? {
                  unit: "second",
                  value: n
              } : {
                  unit: "millisecond",
                  value: t.valueOf() - e.valueOf()
              }))))))
          }
          countDurationsBetween(e, t, n) {
              let r;
              return n.years && (r = this.diffWholeYears(e, t),
              null !== r) ? r / (mt(n) / 365) : n.months && (r = this.diffWholeMonths(e, t),
              null !== r) ? r / (mt(n) / 30) : n.days && (r = Rt(e, t),
              null !== r) ? r / mt(n) : (t.valueOf() - e.valueOf()) / vt(n)
          }
          startOf(e, t) {
              return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? Tt(e) : "hour" === t ? function(e) {
                  return Ht([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
              }(e) : "minute" === t ? function(e) {
                  return Ht([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
              }(e) : "second" === t ? function(e) {
                  return Ht([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
              }(e) : null
          }
          startOfYear(e) {
              return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
          }
          startOfMonth(e) {
              return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
          }
          startOfWeek(e) {
              return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
          }
          computeWeekNumber(e) {
              return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function(e, t, n) {
                  let r = e.getUTCFullYear()
                    , i = At(e, r, t, n);
                  if (i < 1)
                      return At(e, r - 1, t, n);
                  let o = At(e, r + 1, t, n);
                  return o >= 1 ? Math.min(i, o) : i
              }(e, this.weekDow, this.weekDoy)
          }
          format(e, t, n={}) {
              return t.format({
                  marker: e,
                  timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
              }, this)
          }
          formatRange(e, t, n, r={}) {
              return r.isEndExclusive && (t = Dt(t, -1)),
              n.formatRange({
                  marker: e,
                  timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
              }, {
                  marker: t,
                  timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
              }, this, r.defaultSeparator)
          }
          formatIso(e, t={}) {
              let n = null;
              return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)),
              Pt(e, n, t.omitTime)
          }
          timestampToMarker(e) {
              return "local" === this.timeZone ? Ht(_t(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? Ht(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
          }
          offsetForMarker(e) {
              return "local" === this.timeZone ? -Mt(It(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(It(e)) : null
          }
          toDate(e, t) {
              return "local" === this.timeZone ? Mt(It(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(It(e)) * 60) : new Date(e.valueOf() - (t || 0))
          }
      }
      class Mn {
          constructor(e) {
              this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
          }
          setIconOverride(e) {
              let t, n;
              if ("object" == typeof e && e) {
                  for (n in t = Object.assign({}, this.iconClasses),
                  e)
                      t[n] = this.applyIconOverridePrefix(e[n]);
                  this.iconClasses = t
              } else
                  !1 === e && (this.iconClasses = {})
          }
          applyIconOverridePrefix(e) {
              let t = this.iconOverridePrefix;
              return t && 0 !== e.indexOf(t) && (e = t + e),
              e
          }
          getClass(e) {
              return this.classes[e] || ""
          }
          getIconClass(e, t) {
              let n;
              return n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e],
              n ? `${this.baseIconClass} ${n}` : ""
          }
          getCustomButtonIconClass(e) {
              let t;
              return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption],
              t) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(t)}` : ""
          }
      }
      function In(e) {
          e();
          let t = o.debounceRendering
            , n = [];
          for (o.debounceRendering = function(e) {
              n.push(e)
          }
          ,
          U(y(Hn, {}), document.createElement("div")); n.length; )
              n.shift()();
          o.debounceRendering = t
      }
      Mn.prototype.classes = {},
      Mn.prototype.iconClasses = {},
      Mn.prototype.baseIconClass = "",
      Mn.prototype.iconOverridePrefix = "";
      class Hn extends C {
          render() {
              return y("div", {})
          }
          componentDidMount() {
              this.setState({})
          }
      }
      function On(e) {
          let t = function(e, t) {
              var n = {
                  __c: t = "__cC" + h++,
                  __: e,
                  Consumer: function(e, t) {
                      return e.children(t)
                  },
                  Provider: function(e) {
                      var n, r;
                      return this.getChildContext || (n = [],
                      (r = {})[t] = this,
                      this.getChildContext = function() {
                          return r
                      }
                      ,
                      this.shouldComponentUpdate = function(e) {
                          this.props.value !== e.value && n.some((function(e) {
                              e.__e = !0,
                              k(e)
                          }
                          ))
                      }
                      ,
                      this.sub = function(e) {
                          n.push(e);
                          var t = e.componentWillUnmount;
                          e.componentWillUnmount = function() {
                              n.splice(n.indexOf(e), 1),
                              t && t.call(e)
                          }
                      }
                      ),
                      e.children
                  }
              };
              return n.Provider.__ = n.Consumer.contextType = n
          }(e)
            , n = t.Provider;
          return t.Provider = function() {
              let e = !this.getChildContext
                , t = n.apply(this, arguments);
              if (e) {
                  let e = [];
                  this.shouldComponentUpdate = t=>{
                      this.props.value !== t.value && e.forEach((e=>{
                          e.context = t.value,
                          e.forceUpdate()
                      }
                      ))
                  }
                  ,
                  this.sub = t=>{
                      e.push(t);
                      let n = t.componentWillUnmount;
                      t.componentWillUnmount = ()=>{
                          e.splice(e.indexOf(t), 1),
                          n && n.call(t)
                      }
                  }
              }
              return t
          }
          ,
          t
      }
      class Nn {
          constructor(e, t, n, r) {
              this.execFunc = e,
              this.emitter = t,
              this.scrollTime = n,
              this.scrollTimeReset = r,
              this.handleScrollRequest = e=>{
                  this.queuedRequest = Object.assign({}, this.queuedRequest || {}, e),
                  this.drain()
              }
              ,
              t.on("_scrollRequest", this.handleScrollRequest),
              this.fireInitialScroll()
          }
          detach() {
              this.emitter.off("_scrollRequest", this.handleScrollRequest)
          }
          update(e) {
              e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
          }
          fireInitialScroll() {
              this.handleScrollRequest({
                  time: this.scrollTime
              })
          }
          drain() {
              this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
          }
      }
      const Pn = On({});
      function Ln(e, t, n, r, i, o, s, a, l, d, c, u, h) {
          return {
              dateEnv: i,
              options: n,
              pluginHooks: s,
              emitter: d,
              dispatch: a,
              getCurrentData: l,
              calendarApi: c,
              viewSpec: e,
              viewApi: t,
              dateProfileGenerator: r,
              theme: o,
              isRtl: "rtl" === n.direction,
              addResizeHandler(e) {
                  d.on("_resize", e)
              },
              removeResizeHandler(e) {
                  d.off("_resize", e)
              },
              createScrollResponder: e=>new Nn(e,d,ut(n.scrollTime),n.scrollTimeReset),
              registerInteractiveComponent: u,
              unregisterInteractiveComponent: h
          }
      }
      class Wn extends C {
          shouldComponentUpdate(e, t) {
              return this.debug && console.log(Dn(e, this.props), Dn(t, this.state)),
              !Cn(this.props, e, this.propEquality) || !Cn(this.state, t, this.stateEquality)
          }
          safeSetState(e) {
              Cn(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e)
          }
      }
      Wn.addPropsEquality = function(e) {
          let t = Object.create(this.prototype.propEquality);
          Object.assign(t, e),
          this.prototype.propEquality = t
      }
      ,
      Wn.addStateEquality = function(e) {
          let t = Object.create(this.prototype.stateEquality);
          Object.assign(t, e),
          this.prototype.stateEquality = t
      }
      ,
      Wn.contextType = Pn,
      Wn.prototype.propEquality = {},
      Wn.prototype.stateEquality = {};
      class jn extends Wn {
      }
      function zn(e, t) {
          "function" == typeof e ? e(t) : e && (e.current = t)
      }
      jn.contextType = Pn;
      class Bn extends jn {
          constructor() {
              super(...arguments),
              this.id = Xe(),
              this.queuedDomNodes = [],
              this.currentDomNodes = [],
              this.handleEl = e=>{
                  const {options: t} = this.context
                    , {generatorName: n} = this.props;
                  t.customRenderingReplaces && Un(n, t) || this.updateElRef(e)
              }
              ,
              this.updateElRef = e=>{
                  this.props.elRef && zn(this.props.elRef, e)
              }
          }
          render() {
              const {props: e, context: t} = this
                , {options: n} = t
                , {customGenerator: r, defaultGenerator: i, renderProps: o} = e
                , s = Gn(e, [], this.handleEl);
              let l, d, c = !1, u = [];
              if (null != r) {
                  const e = "function" == typeof r ? r(o, y) : r;
                  if (!0 === e)
                      c = !0;
                  else {
                      const t = e && "object" == typeof e;
                      t && "html"in e ? s.dangerouslySetInnerHTML = {
                          __html: e.html
                      } : t && "domNodes"in e ? u = Array.prototype.slice.call(e.domNodes) : (t ? a(e) : "function" != typeof e) ? l = e : d = e
                  }
              } else
                  c = !Un(e.generatorName, n);
              return c && i && (l = i(o)),
              this.queuedDomNodes = u,
              this.currentGeneratorMeta = d,
              y(e.elTag, s, l)
          }
          componentDidMount() {
              this.applyQueueudDomNodes(),
              this.triggerCustomRendering(!0)
          }
          componentDidUpdate() {
              this.applyQueueudDomNodes(),
              this.triggerCustomRendering(!0)
          }
          componentWillUnmount() {
              this.triggerCustomRendering(!1)
          }
          triggerCustomRendering(e) {
              var t;
              const {props: n, context: r} = this
                , {handleCustomRendering: i, customRenderingMetaMap: o} = r.options;
              if (i) {
                  const r = null !== (t = this.currentGeneratorMeta) && void 0 !== t ? t : null == o ? void 0 : o[n.generatorName];
                  r && i(Object.assign(Object.assign({
                      id: this.id,
                      isActive: e,
                      containerEl: this.base,
                      reportNewContainerEl: this.updateElRef,
                      generatorMeta: r
                  }, n), {
                      elClasses: (n.elClasses || []).filter(Fn)
                  }))
              }
          }
          applyQueueudDomNodes() {
              const {queuedDomNodes: e, currentDomNodes: t} = this
                , n = this.base;
              if (!wt(e, t)) {
                  t.forEach(Ne);
                  for (let t of e)
                      n.appendChild(t);
                  this.currentDomNodes = e
              }
          }
      }
      function Un(e, t) {
          var n;
          return Boolean(t.handleCustomRendering && e && (null === (n = t.customRenderingMetaMap) || void 0 === n ? void 0 : n[e]))
      }
      function Gn(e, t, n) {
          const r = Object.assign(Object.assign({}, e.elAttrs), {
              ref: n
          });
          return (e.elClasses || t) && (r.className = (e.elClasses || []).concat(t || []).concat(r.className || []).filter(Boolean).join(" ")),
          e.elStyle && (r.style = e.elStyle),
          r
      }
      function Fn(e) {
          return Boolean(e)
      }
      Bn.addPropsEquality({
          elClasses: wt,
          elStyle: xn,
          elAttrs: function(e, t) {
              const n = Dn(e, t);
              for (let e of n)
                  if (!En.test(e))
                      return !1;
              return !0
          },
          renderProps: xn
      });
      const Vn = On(0);
      class qn extends C {
          constructor() {
              super(...arguments),
              this.InnerContent = Yn.bind(void 0, this),
              this.handleEl = e=>{
                  this.el = e,
                  this.props.elRef && (zn(this.props.elRef, e),
                  e && this.didMountMisfire && this.componentDidMount())
              }
          }
          render() {
              const {props: e} = this
                , t = function(e, t) {
                  const n = "function" == typeof e ? e(t) : e || [];
                  return "string" == typeof n ? [n] : n
              }(e.classNameGenerator, e.renderProps);
              if (e.children) {
                  const n = Gn(e, t, this.handleEl)
                    , r = e.children(this.InnerContent, e.renderProps, n);
                  return e.elTag ? y(e.elTag, n, r) : r
              }
              return y(Bn, Object.assign(Object.assign({}, e), {
                  elRef: this.handleEl,
                  elTag: e.elTag || "div",
                  elClasses: (e.elClasses || []).concat(t),
                  renderId: this.context
              }))
          }
          componentDidMount() {
              var e, t;
              this.el ? null === (t = (e = this.props).didMount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
                  el: this.el
              })) : this.didMountMisfire = !0
          }
          componentWillUnmount() {
              var e, t;
              null === (t = (e = this.props).willUnmount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
                  el: this.el
              }))
          }
      }
      function Yn(e, t) {
          const n = e.props;
          return y(Bn, Object.assign({
              renderProps: n.renderProps,
              generatorName: n.generatorName,
              customGenerator: n.customGenerator,
              defaultGenerator: n.defaultGenerator,
              renderId: e.context
          }, t))
      }
      qn.contextType = Vn;
      class Qn extends jn {
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , r = {
                  view: t.viewApi
              };
              return y(qn, Object.assign({}, e, {
                  elTag: e.elTag || "div",
                  elClasses: [...Zn(e.viewSpec), ...e.elClasses || []],
                  renderProps: r,
                  classNameGenerator: n.viewClassNames,
                  generatorName: void 0,
                  didMount: n.viewDidMount,
                  willUnmount: n.viewWillUnmount
              }), (()=>e.children))
          }
      }
      function Zn(e) {
          return [`fc-${e.type}-view`, "fc-view"]
      }
      function $n(e, t) {
          let n, r, i = [], {start: o} = t;
          for (e.sort(Xn),
          n = 0; n < e.length; n += 1)
              r = e[n],
              r.start > o && i.push({
                  start: o,
                  end: r.start
              }),
              r.end > o && (o = r.end);
          return o < t.end && i.push({
              start: o,
              end: t.end
          }),
          i
      }
      function Xn(e, t) {
          return e.start.valueOf() - t.start.valueOf()
      }
      function Jn(e, t) {
          let {start: n, end: r} = e
            , i = null;
          return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
          null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
          (null === n || null === r || n < r) && (i = {
              start: n,
              end: r
          }),
          i
      }
      function Kn(e, t) {
          return (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) && (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
      }
      function er(e, t) {
          return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
      }
      function tr(e, t) {
          return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
      }
      function nr(e, t) {
          return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
      }
      function rr(e) {
          let t = Math.floor(Ct(e.start, e.end)) || 1
            , n = Tt(e.start);
          return {
              start: n,
              end: Et(n, t)
          }
      }
      function ir(e, t=ut(0)) {
          let n = null
            , r = null;
          if (e.end) {
              r = Tt(e.end);
              let n = e.end.valueOf() - r.valueOf();
              n && n >= vt(t) && (r = Et(r, 1))
          }
          return e.start && (n = Tt(e.start),
          r && r <= n && (r = Et(n, 1))),
          {
              start: n,
              end: r
          }
      }
      function or(e, t, n, r) {
          return "year" === r ? ut(n.diffWholeYears(e, t), "year") : "month" === r ? ut(n.diffWholeMonths(e, t), "month") : function(e, t) {
              let n = Tt(e)
                , r = Tt(t);
              return {
                  years: 0,
                  months: 0,
                  days: Math.round(Ct(n, r)),
                  milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
              }
          }(e, t)
      }
      function sr(e, t) {
          return "function" == typeof e && (e = e()),
          null == e ? t.createNowMarker() : t.createMarker(e)
      }
      class ar {
          constructor(e) {
              this.props = e,
              this.nowDate = sr(e.nowInput, e.dateEnv),
              this.initHiddenDays()
          }
          buildPrev(e, t, n) {
              let {dateEnv: r} = this.props
                , i = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
              return this.build(i, -1, n)
          }
          buildNext(e, t, n) {
              let {dateEnv: r} = this.props
                , i = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
              return this.build(i, 1, n)
          }
          build(e, t, n=!0) {
              let r, i, o, s, a, l, {props: d} = this;
              var c, u;
              return r = this.buildValidRange(),
              r = this.trimHiddenDays(r),
              n && (c = e,
              e = null != (u = r).start && c < u.start ? u.start : null != u.end && c >= u.end ? new Date(u.end.valueOf() - 1) : c),
              i = this.buildCurrentRangeInfo(e, t),
              o = /^(year|month|week|day)$/.test(i.unit),
              s = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, o),
              s = this.trimHiddenDays(s),
              a = s,
              d.showNonCurrentDates || (a = Jn(a, i.range)),
              a = this.adjustActiveRange(a),
              a = Jn(a, r),
              l = er(i.range, r),
              nr(s, e) || (e = s.start),
              {
                  currentDate: e,
                  validRange: r,
                  currentRange: i.range,
                  currentRangeUnit: i.unit,
                  isRangeAllDay: o,
                  activeRange: a,
                  renderRange: s,
                  slotMinTime: d.slotMinTime,
                  slotMaxTime: d.slotMaxTime,
                  isValid: l,
                  dateIncrement: this.buildDateIncrement(i.duration)
              }
          }
          buildValidRange() {
              let e = this.props.validRangeInput
                , t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
              return this.refineRange(t) || {
                  start: null,
                  end: null
              }
          }
          buildCurrentRangeInfo(e, t) {
              let n, {props: r} = this, i = null, o = null, s = null;
              return r.duration ? (i = r.duration,
              o = r.durationUnit,
              s = this.buildRangeFromDuration(e, t, i, o)) : (n = this.props.dayCount) ? (o = "day",
              s = this.buildRangeFromDayCount(e, t, n)) : (s = this.buildCustomVisibleRange(e)) ? o = r.dateEnv.greatestWholeUnit(s.start, s.end).unit : (i = this.getFallbackDuration(),
              o = bt(i).unit,
              s = this.buildRangeFromDuration(e, t, i, o)),
              {
                  duration: i,
                  unit: o,
                  range: s
              }
          }
          getFallbackDuration() {
              return ut({
                  day: 1
              })
          }
          adjustActiveRange(e) {
              let {dateEnv: t, usesMinMaxTime: n, slotMinTime: r, slotMaxTime: i} = this.props
                , {start: o, end: s} = e;
              return n && (mt(r) < 0 && (o = Tt(o),
              o = t.add(o, r)),
              mt(i) > 1 && (s = Tt(s),
              s = Et(s, -1),
              s = t.add(s, i))),
              {
                  start: o,
                  end: s
              }
          }
          buildRangeFromDuration(e, t, n, r) {
              let i, o, s, {dateEnv: a, dateAlignment: l} = this.props;
              if (!l) {
                  let {dateIncrement: e} = this.props;
                  l = e && vt(e) < vt(n) ? bt(e).unit : r
              }
              function d() {
                  i = a.startOf(e, l),
                  o = a.add(i, n),
                  s = {
                      start: i,
                      end: o
                  }
              }
              return mt(n) <= 1 && this.isHiddenDay(i) && (i = this.skipHiddenDays(i, t),
              i = Tt(i)),
              d(),
              this.trimHiddenDays(s) || (e = this.skipHiddenDays(e, t),
              d()),
              s
          }
          buildRangeFromDayCount(e, t, n) {
              let r, {dateEnv: i, dateAlignment: o} = this.props, s = 0, a = e;
              o && (a = i.startOf(a, o)),
              a = Tt(a),
              a = this.skipHiddenDays(a, t),
              r = a;
              do {
                  r = Et(r, 1),
                  this.isHiddenDay(r) || (s += 1)
              } while (s < n);
              return {
                  start: a,
                  end: r
              }
          }
          buildCustomVisibleRange(e) {
              let {props: t} = this
                , n = t.visibleRangeInput
                , r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n
                , i = this.refineRange(r);
              return !i || null != i.start && null != i.end ? i : null
          }
          buildRenderRange(e, t, n) {
              return e
          }
          buildDateIncrement(e) {
              let t, {dateIncrement: n} = this.props;
              return n || ((t = this.props.dateAlignment) ? ut(1, t) : e || ut({
                  days: 1
              }))
          }
          refineRange(e) {
              if (e) {
                  let t = function(e, t) {
                      let n = null
                        , r = null;
                      return e.start && (n = t.createMarker(e.start)),
                      e.end && (r = t.createMarker(e.end)),
                      n || r ? n && r && r < n ? null : {
                          start: n,
                          end: r
                      } : null
                  }(e, this.props.dateEnv);
                  return t && (t = ir(t)),
                  t
              }
              return null
          }
          initHiddenDays() {
              let e, t = this.props.hiddenDays || [], n = [], r = 0;
              for (!1 === this.props.weekends && t.push(0, 6),
              e = 0; e < 7; e += 1)
                  (n[e] = -1 !== t.indexOf(e)) || (r += 1);
              if (!r)
                  throw new Error("invalid hiddenDays");
              this.isHiddenDayHash = n
          }
          trimHiddenDays(e) {
              let {start: t, end: n} = e;
              return t && (t = this.skipHiddenDays(t)),
              n && (n = this.skipHiddenDays(n, -1, !0)),
              null == t || null == n || t < n ? {
                  start: t,
                  end: n
              } : null
          }
          isHiddenDay(e) {
              return e instanceof Date && (e = e.getUTCDay()),
              this.isHiddenDayHash[e]
          }
          skipHiddenDays(e, t=1, n=!1) {
              for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; )
                  e = Et(e, t);
              return e
          }
      }
      function lr(e, t, n, r) {
          return {
              instanceId: Xe(),
              defId: e,
              range: t,
              forcedStartTzo: null == n ? null : n,
              forcedEndTzo: null == r ? null : r
          }
      }
      function dr(e, t, n) {
          let {dateEnv: r, pluginHooks: i, options: o} = n
            , {defs: s, instances: a} = e;
          a = yn(a, (e=>!s[e.defId].recurringDef));
          for (let e in s) {
              let n = s[e];
              if (n.recurringDef) {
                  let {duration: s} = n.recurringDef;
                  s || (s = n.allDay ? o.defaultAllDayEventDuration : o.defaultTimedEventDuration);
                  let l = cr(n, s, t, r, i.recurringTypes);
                  for (let t of l) {
                      let n = lr(e, {
                          start: t,
                          end: r.add(t, s)
                      });
                      a[n.instanceId] = n
                  }
              }
          }
          return {
              defs: s,
              instances: a
          }
      }
      function cr(e, t, n, r, i) {
          let o = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
              start: r.subtract(n.start, t),
              end: n.end
          }, r);
          return e.allDay && (o = o.map(Tt)),
          o
      }
      const ur = {
          id: String,
          groupId: String,
          title: String,
          url: String,
          interactive: Boolean
      }
        , hr = {
          start: gn,
          end: gn,
          date: gn,
          allDay: Boolean
      }
        , fr = Object.assign(Object.assign(Object.assign({}, ur), hr), {
          extendedProps: gn
      });
      function pr(e, t, n, r, i=mr(n), o, s) {
          let {refined: a, extra: l} = gr(e, n, i)
            , d = function(e, t) {
              let n = null;
              return e && (n = e.defaultAllDay),
              null == n && (n = t.options.defaultAllDay),
              n
          }(t, n)
            , c = function(e, t, n, r) {
              for (let i = 0; i < r.length; i += 1) {
                  let o = r[i].parse(e, n);
                  if (o) {
                      let {allDay: n} = e;
                      return null == n && (n = t,
                      null == n && (n = o.allDayGuess,
                      null == n && (n = !1))),
                      {
                          allDay: n,
                          duration: o.duration,
                          typeData: o.typeData,
                          typeId: i
                      }
                  }
              }
              return null
          }(a, d, n.dateEnv, n.pluginHooks.recurringTypes);
          if (c) {
              let e = vr(a, l, t ? t.sourceId : "", c.allDay, Boolean(c.duration), n, o);
              return e.recurringDef = {
                  typeId: c.typeId,
                  typeData: c.typeData,
                  duration: c.duration
              },
              {
                  def: e,
                  instance: null
              }
          }
          let u = function(e, t, n, r) {
              let i, o, {allDay: s} = e, a = null, l = !1, d = null, c = null != e.start ? e.start : e.date;
              if (i = n.dateEnv.createMarkerMeta(c),
              i)
                  a = i.marker;
              else if (!r)
                  return null;
              return null != e.end && (o = n.dateEnv.createMarkerMeta(e.end)),
              null == s && (s = null != t ? t : (!i || i.isTimeUnspecified) && (!o || o.isTimeUnspecified)),
              s && a && (a = Tt(a)),
              o && (d = o.marker,
              s && (d = Tt(d)),
              a && d <= a && (d = null)),
              d ? l = !0 : r || (l = n.options.forceEventDuration || !1,
              d = n.dateEnv.add(a, s ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)),
              {
                  allDay: s,
                  hasEnd: l,
                  range: {
                      start: a,
                      end: d
                  },
                  forcedStartTzo: i ? i.forcedTzo : null,
                  forcedEndTzo: o ? o.forcedTzo : null
              }
          }(a, d, n, r);
          if (u) {
              let e = vr(a, l, t ? t.sourceId : "", u.allDay, u.hasEnd, n, o)
                , r = lr(e.defId, u.range, u.forcedStartTzo, u.forcedEndTzo);
              return s && e.publicId && s[e.publicId] && (r.instanceId = s[e.publicId]),
              {
                  def: e,
                  instance: r
              }
          }
          return null
      }
      function gr(e, t, n=mr(t)) {
          return pn(e, n)
      }
      function mr(e) {
          return Object.assign(Object.assign(Object.assign({}, Dr), fr), e.pluginHooks.eventRefiners)
      }
      function vr(e, t, n, r, i, o, s) {
          let a = {
              title: e.title || "",
              groupId: e.groupId || "",
              publicId: e.id || "",
              url: e.url || "",
              recurringDef: null,
              defId: (s && e.id ? s[e.id] : "") || Xe(),
              sourceId: n,
              allDay: r,
              hasEnd: i,
              interactive: e.interactive,
              ui: Rr(e, o),
              extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t)
          };
          for (let t of o.pluginHooks.eventDefMemberAdders)
              Object.assign(a, t(e));
          return Object.freeze(a.ui.classNames),
          Object.freeze(a.extendedProps),
          a
      }
      function yr(e, t, n, r, i, o) {
          let s = {
              defs: {},
              instances: {}
          }
            , a = mr(n);
          for (let l of e) {
              let e = pr(l, t, n, r, a, i, o);
              e && br(e, s)
          }
          return s
      }
      function br(e, t={
          defs: {},
          instances: {}
      }) {
          return t.defs[e.def.defId] = e.def,
          e.instance && (t.instances[e.instance.instanceId] = e.instance),
          t
      }
      function wr(e, t) {
          let n = e.instances[t];
          if (n) {
              let t = e.defs[n.defId]
                , r = xr(e, (e=>{
                  return n = t,
                  r = e,
                  Boolean(n.groupId && n.groupId === r.groupId);
                  var n, r
              }
              ));
              return r.defs[t.defId] = t,
              r.instances[n.instanceId] = n,
              r
          }
          return {
              defs: {},
              instances: {}
          }
      }
      function Sr(e, t) {
          return {
              defs: Object.assign(Object.assign({}, e.defs), t.defs),
              instances: Object.assign(Object.assign({}, e.instances), t.instances)
          }
      }
      function xr(e, t) {
          let n = yn(e.defs, t)
            , r = yn(e.instances, (e=>n[e.defId]));
          return {
              defs: n,
              instances: r
          }
      }
      function Er(e) {
          return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
      }
      const Dr = {
          display: String,
          editable: Boolean,
          startEditable: Boolean,
          durationEditable: Boolean,
          constraint: gn,
          overlap: gn,
          allow: gn,
          className: Er,
          classNames: Er,
          color: String,
          backgroundColor: String,
          borderColor: String,
          textColor: String
      }
        , Cr = {
          display: null,
          startEditable: null,
          durationEditable: null,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: "",
          borderColor: "",
          textColor: "",
          classNames: []
      };
      function Rr(e, t) {
          let n = function(e, t) {
              return Array.isArray(e) ? yr(e, null, t, !0) : "object" == typeof e && e ? yr([e], null, t, !0) : null != e ? String(e) : null
          }(e.constraint, t);
          return {
              display: e.display || null,
              startEditable: null != e.startEditable ? e.startEditable : e.editable,
              durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
              constraints: null != n ? [n] : [],
              overlap: null != e.overlap ? e.overlap : null,
              allows: null != e.allow ? [e.allow] : [],
              backgroundColor: e.backgroundColor || e.color || "",
              borderColor: e.borderColor || e.color || "",
              textColor: e.textColor || "",
              classNames: (e.className || []).concat(e.classNames || [])
          }
      }
      function Tr(e) {
          return e.reduce(Ar, Cr)
      }
      function Ar(e, t) {
          return {
              display: null != t.display ? t.display : e.display,
              startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
              durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
              constraints: e.constraints.concat(t.constraints),
              overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
              allows: e.allows.concat(t.allows),
              backgroundColor: t.backgroundColor || e.backgroundColor,
              borderColor: t.borderColor || e.borderColor,
              textColor: t.textColor || e.textColor,
              classNames: e.classNames.concat(t.classNames)
          }
      }
      const kr = {
          id: String,
          defaultAllDay: Boolean,
          url: String,
          format: String,
          events: gn,
          eventDataTransform: gn,
          success: gn,
          failure: gn
      };
      function _r(e, t, n=Mr(t)) {
          let r;
          if ("string" == typeof e ? r = {
              url: e
          } : "function" == typeof e || Array.isArray(e) ? r = {
              events: e
          } : "object" == typeof e && e && (r = e),
          r) {
              let {refined: i, extra: o} = pn(r, n)
                , s = function(e, t) {
                  let n = t.pluginHooks.eventSourceDefs;
                  for (let t = n.length - 1; t >= 0; t -= 1) {
                      let r = n[t].parseMeta(e);
                      if (r)
                          return {
                              sourceDefId: t,
                              meta: r
                          }
                  }
                  return null
              }(i, t);
              if (s)
                  return {
                      _raw: e,
                      isFetching: !1,
                      latestFetchId: "",
                      fetchRange: null,
                      defaultAllDay: i.defaultAllDay,
                      eventDataTransform: i.eventDataTransform,
                      success: i.success,
                      failure: i.failure,
                      publicId: i.id || "",
                      sourceId: Xe(),
                      sourceDefId: s.sourceDefId,
                      meta: s.meta,
                      ui: Rr(i, t),
                      extendedProps: o
                  }
          }
          return null
      }
      function Mr(e) {
          return Object.assign(Object.assign(Object.assign({}, Dr), kr), e.pluginHooks.eventSourceRefiners)
      }
      function Ir(e, t, n) {
          let r = n.options.eventDataTransform
            , i = t ? t.eventDataTransform : null;
          return i && (e = Hr(e, i)),
          r && (e = Hr(e, r)),
          e
      }
      function Hr(e, t) {
          let n;
          if (t) {
              n = [];
              for (let r of e) {
                  let e = t(r);
                  e ? n.push(e) : null == e && n.push(r)
              }
          } else
              n = e;
          return n
      }
      function Or(e, t, n) {
          let {defs: r} = e
            , i = bn(e.instances, (e=>r[e.defId].allDay ? e : Object.assign(Object.assign({}, e), {
              range: {
                  start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                  end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
              },
              forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
              forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
          })));
          return {
              defs: r,
              instances: i
          }
      }
      function Nr(e, t) {
          return xr(e, (e=>e.sourceId !== t))
      }
      class Pr {
          constructor() {
              this.handlers = {},
              this.thisContext = null
          }
          setThisContext(e) {
              this.thisContext = e
          }
          setOptions(e) {
              this.options = e
          }
          on(e, t) {
              !function(e, t, n) {
                  (e[t] || (e[t] = [])).push(n)
              }(this.handlers, e, t)
          }
          off(e, t) {
              !function(e, t, n) {
                  n ? e[t] && (e[t] = e[t].filter((e=>e !== n))) : delete e[t]
              }(this.handlers, e, t)
          }
          trigger(e, ...t) {
              let n = this.handlers[e] || []
                , r = this.options && this.options[e]
                , i = [].concat(r || [], n);
              for (let e of i)
                  e.apply(this.thisContext, t)
          }
          hasHandlers(e) {
              return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e])
          }
      }
      const Lr = {
          startTime: "09:00",
          endTime: "17:00",
          daysOfWeek: [1, 2, 3, 4, 5],
          display: "inverse-background",
          classNames: "fc-non-business",
          groupId: "_businessHours"
      };
      function Wr(e, t) {
          return yr(function(e) {
              let t;
              return t = !0 === e ? [{}] : Array.isArray(e) ? e.filter((e=>e.daysOfWeek)) : "object" == typeof e && e ? [e] : [],
              t = t.map((e=>Object.assign(Object.assign({}, Lr), e))),
              t
          }(e), null, t)
      }
      function jr(e, t, n) {
          n.emitter.trigger("select", Object.assign(Object.assign({}, zr(e, n)), {
              jsEvent: t ? t.origEvent : null,
              view: n.viewApi || n.calendarApi.view
          }))
      }
      function zr(e, t) {
          let n = {};
          for (let r of t.pluginHooks.dateSpanTransforms)
              Object.assign(n, r(e, t));
          var r, i;
          return Object.assign(n, (r = e,
          i = t.dateEnv,
          Object.assign(Object.assign({}, hi(r.range, i, r.allDay)), {
              allDay: r.allDay
          }))),
          n
      }
      function Br(e, t, n) {
          let {dateEnv: r, options: i} = n
            , o = t;
          return e ? (o = Tt(o),
          o = r.add(o, i.defaultAllDayEventDuration)) : o = r.add(o, i.defaultTimedEventDuration),
          o
      }
      function Ur(e, t, n, r) {
          let i = Jr(e.defs, t)
            , o = {
              defs: {},
              instances: {}
          };
          for (let t in e.defs) {
              let s = e.defs[t];
              o.defs[t] = Gr(s, i[t], n, r)
          }
          for (let t in e.instances) {
              let s = e.instances[t]
                , a = o.defs[s.defId];
              o.instances[t] = Fr(s, a, i[s.defId], n, r)
          }
          return o
      }
      function Gr(e, t, n, r) {
          let i = n.standardProps || {};
          null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
          let o = Object.assign(Object.assign(Object.assign({}, e), i), {
              ui: Object.assign(Object.assign({}, e.ui), i.ui)
          });
          n.extendedProps && (o.extendedProps = Object.assign(Object.assign({}, o.extendedProps), n.extendedProps));
          for (let e of r.pluginHooks.eventDefMutationAppliers)
              e(o, n, r);
          return !o.hasEnd && r.options.forceEventDuration && (o.hasEnd = !0),
          o
      }
      function Fr(e, t, n, r, i) {
          let {dateEnv: o} = i
            , s = r.standardProps && !0 === r.standardProps.allDay
            , a = r.standardProps && !1 === r.standardProps.hasEnd
            , l = Object.assign({}, e);
          return s && (l.range = rr(l.range)),
          r.datesDelta && n.startEditable && (l.range = {
              start: o.add(l.range.start, r.datesDelta),
              end: o.add(l.range.end, r.datesDelta)
          }),
          r.startDelta && n.durationEditable && (l.range = {
              start: o.add(l.range.start, r.startDelta),
              end: l.range.end
          }),
          r.endDelta && n.durationEditable && (l.range = {
              start: l.range.start,
              end: o.add(l.range.end, r.endDelta)
          }),
          a && (l.range = {
              start: l.range.start,
              end: Br(t.allDay, l.range.start, i)
          }),
          t.allDay && (l.range = {
              start: Tt(l.range.start),
              end: Tt(l.range.end)
          }),
          l.range.end < l.range.start && (l.range.end = Br(t.allDay, l.range.start, i)),
          l
      }
      class Vr {
          constructor(e, t) {
              this.context = e,
              this.internalEventSource = t
          }
          remove() {
              this.context.dispatch({
                  type: "REMOVE_EVENT_SOURCE",
                  sourceId: this.internalEventSource.sourceId
              })
          }
          refetch() {
              this.context.dispatch({
                  type: "FETCH_EVENT_SOURCES",
                  sourceIds: [this.internalEventSource.sourceId],
                  isRefetch: !0
              })
          }
          get id() {
              return this.internalEventSource.publicId
          }
          get url() {
              return this.internalEventSource.meta.url
          }
          get format() {
              return this.internalEventSource.meta.format
          }
      }
      class qr {
          constructor(e, t, n) {
              this._context = e,
              this._def = t,
              this._instance = n || null
          }
          setProp(e, t) {
              if (e in hr)
                  console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
              else if ("id" === e)
                  t = ur[e](t),
                  this.mutate({
                      standardProps: {
                          publicId: t
                      }
                  });
              else if (e in ur)
                  t = ur[e](t),
                  this.mutate({
                      standardProps: {
                          [e]: t
                      }
                  });
              else if (e in Dr) {
                  let n = Dr[e](t);
                  n = "color" === e ? {
                      backgroundColor: t,
                      borderColor: t
                  } : "editable" === e ? {
                      startEditable: t,
                      durationEditable: t
                  } : {
                      [e]: t
                  },
                  this.mutate({
                      standardProps: {
                          ui: n
                      }
                  })
              } else
                  console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`)
          }
          setExtendedProp(e, t) {
              this.mutate({
                  extendedProps: {
                      [e]: t
                  }
              })
          }
          setStart(e, t={}) {
              let {dateEnv: n} = this._context
                , r = n.createMarker(e);
              if (r && this._instance) {
                  let e = or(this._instance.range.start, r, n, t.granularity);
                  t.maintainDuration ? this.mutate({
                      datesDelta: e
                  }) : this.mutate({
                      startDelta: e
                  })
              }
          }
          setEnd(e, t={}) {
              let n, {dateEnv: r} = this._context;
              if ((null == e || (n = r.createMarker(e),
              n)) && this._instance)
                  if (n) {
                      let e = or(this._instance.range.end, n, r, t.granularity);
                      this.mutate({
                          endDelta: e
                      })
                  } else
                      this.mutate({
                          standardProps: {
                              hasEnd: !1
                          }
                      })
          }
          setDates(e, t, n={}) {
              let r, {dateEnv: i} = this._context, o = {
                  allDay: n.allDay
              }, s = i.createMarker(e);
              var a, l;
              if (s && (null == t || (r = i.createMarker(t),
              r)) && this._instance) {
                  let e = this._instance.range;
                  !0 === n.allDay && (e = rr(e));
                  let t = or(e.start, s, i, n.granularity);
                  if (r) {
                      let s = or(e.end, r, i, n.granularity);
                      l = s,
                      (a = t).years === l.years && a.months === l.months && a.days === l.days && a.milliseconds === l.milliseconds ? this.mutate({
                          datesDelta: t,
                          standardProps: o
                      }) : this.mutate({
                          startDelta: t,
                          endDelta: s,
                          standardProps: o
                      })
                  } else
                      o.hasEnd = !1,
                      this.mutate({
                          datesDelta: t,
                          standardProps: o
                      })
              }
          }
          moveStart(e) {
              let t = ut(e);
              t && this.mutate({
                  startDelta: t
              })
          }
          moveEnd(e) {
              let t = ut(e);
              t && this.mutate({
                  endDelta: t
              })
          }
          moveDates(e) {
              let t = ut(e);
              t && this.mutate({
                  datesDelta: t
              })
          }
          setAllDay(e, t={}) {
              let n = {
                  allDay: e
              }
                , {maintainDuration: r} = t;
              null == r && (r = this._context.options.allDayMaintainDuration),
              this._def.allDay !== e && (n.hasEnd = r),
              this.mutate({
                  standardProps: n
              })
          }
          formatRange(e) {
              let {dateEnv: t} = this._context
                , n = this._instance
                , r = rn(e);
              return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
                  forcedStartTzo: n.forcedStartTzo,
                  forcedEndTzo: n.forcedEndTzo
              }) : t.format(n.range.start, r, {
                  forcedTzo: n.forcedStartTzo
              })
          }
          mutate(e) {
              let t = this._instance;
              if (t) {
                  let n = this._def
                    , r = this._context
                    , {eventStore: i} = r.getCurrentData()
                    , o = wr(i, t.instanceId);
                  o = Ur(o, {
                      "": {
                          display: "",
                          startEditable: !0,
                          durationEditable: !0,
                          constraints: [],
                          overlap: null,
                          allows: [],
                          backgroundColor: "",
                          borderColor: "",
                          textColor: "",
                          classNames: []
                      }
                  }, e, r);
                  let s = new qr(r,n,t);
                  this._def = o.defs[n.defId],
                  this._instance = o.instances[t.instanceId],
                  r.dispatch({
                      type: "MERGE_EVENTS",
                      eventStore: o
                  }),
                  r.emitter.trigger("eventChange", {
                      oldEvent: s,
                      event: this,
                      relatedEvents: Qr(o, r, t),
                      revert() {
                          r.dispatch({
                              type: "RESET_EVENTS",
                              eventStore: i
                          })
                      }
                  })
              }
          }
          remove() {
              let e = this._context
                , t = Yr(this);
              e.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: t
              }),
              e.emitter.trigger("eventRemove", {
                  event: this,
                  relatedEvents: [],
                  revert() {
                      e.dispatch({
                          type: "MERGE_EVENTS",
                          eventStore: t
                      })
                  }
              })
          }
          get source() {
              let {sourceId: e} = this._def;
              return e ? new Vr(this._context,this._context.getCurrentData().eventSources[e]) : null
          }
          get start() {
              return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
          }
          get end() {
              return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
          }
          get startStr() {
              let e = this._instance;
              return e ? this._context.dateEnv.formatIso(e.range.start, {
                  omitTime: this._def.allDay,
                  forcedTzo: e.forcedStartTzo
              }) : ""
          }
          get endStr() {
              let e = this._instance;
              return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                  omitTime: this._def.allDay,
                  forcedTzo: e.forcedEndTzo
              }) : ""
          }
          get id() {
              return this._def.publicId
          }
          get groupId() {
              return this._def.groupId
          }
          get allDay() {
              return this._def.allDay
          }
          get title() {
              return this._def.title
          }
          get url() {
              return this._def.url
          }
          get display() {
              return this._def.ui.display || "auto"
          }
          get startEditable() {
              return this._def.ui.startEditable
          }
          get durationEditable() {
              return this._def.ui.durationEditable
          }
          get constraint() {
              return this._def.ui.constraints[0] || null
          }
          get overlap() {
              return this._def.ui.overlap
          }
          get allow() {
              return this._def.ui.allows[0] || null
          }
          get backgroundColor() {
              return this._def.ui.backgroundColor
          }
          get borderColor() {
              return this._def.ui.borderColor
          }
          get textColor() {
              return this._def.ui.textColor
          }
          get classNames() {
              return this._def.ui.classNames
          }
          get extendedProps() {
              return this._def.extendedProps
          }
          toPlainObject(e={}) {
              let t = this._def
                , {ui: n} = t
                , {startStr: r, endStr: i} = this
                , o = {
                  allDay: t.allDay
              };
              return t.title && (o.title = t.title),
              r && (o.start = r),
              i && (o.end = i),
              t.publicId && (o.id = t.publicId),
              t.groupId && (o.groupId = t.groupId),
              t.url && (o.url = t.url),
              n.display && "auto" !== n.display && (o.display = n.display),
              e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? o.color = n.backgroundColor : (n.backgroundColor && (o.backgroundColor = n.backgroundColor),
              n.borderColor && (o.borderColor = n.borderColor)),
              n.textColor && (o.textColor = n.textColor),
              n.classNames.length && (o.classNames = n.classNames),
              Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(o, t.extendedProps) : o.extendedProps = t.extendedProps),
              o
          }
          toJSON() {
              return this.toPlainObject()
          }
      }
      function Yr(e) {
          let t = e._def
            , n = e._instance;
          return {
              defs: {
                  [t.defId]: t
              },
              instances: n ? {
                  [n.instanceId]: n
              } : {}
          }
      }
      function Qr(e, t, n) {
          let {defs: r, instances: i} = e
            , o = []
            , s = n ? n.instanceId : "";
          for (let e in i) {
              let n = i[e]
                , a = r[n.defId];
              n.instanceId !== s && o.push(new qr(t,a,n))
          }
          return o
      }
      function Zr(e, t, n, r) {
          let i = {}
            , o = {}
            , s = {}
            , a = []
            , l = []
            , d = Jr(e.defs, t);
          for (let t in e.defs) {
              let n = e.defs[t];
              "inverse-background" === d[n.defId].display && (n.groupId ? (i[n.groupId] = [],
              s[n.groupId] || (s[n.groupId] = n)) : o[t] = [])
          }
          for (let t in e.instances) {
              let s = e.instances[t]
                , c = e.defs[s.defId]
                , u = d[c.defId]
                , h = s.range
                , f = !c.allDay && r ? ir(h, r) : h
                , p = Jn(f, n);
              p && ("inverse-background" === u.display ? c.groupId ? i[c.groupId].push(p) : o[s.defId].push(p) : "none" !== u.display && ("background" === u.display ? a : l).push({
                  def: c,
                  ui: u,
                  instance: s,
                  range: p,
                  isStart: f.start && f.start.valueOf() === p.start.valueOf(),
                  isEnd: f.end && f.end.valueOf() === p.end.valueOf()
              }))
          }
          for (let e in i) {
              let t = $n(i[e], n);
              for (let n of t) {
                  let t = s[e]
                    , r = d[t.defId];
                  a.push({
                      def: t,
                      ui: r,
                      instance: null,
                      range: n,
                      isStart: !1,
                      isEnd: !1
                  })
              }
          }
          for (let t in o) {
              let r = $n(o[t], n);
              for (let n of r)
                  a.push({
                      def: e.defs[t],
                      ui: d[t],
                      instance: null,
                      range: n,
                      isStart: !1,
                      isEnd: !1
                  })
          }
          return {
              bg: a,
              fg: l
          }
      }
      function $r(e, t) {
          e.fcSeg = t
      }
      function Xr(e) {
          return e.fcSeg || e.parentNode.fcSeg || null
      }
      function Jr(e, t) {
          return bn(e, (e=>Kr(e, t)))
      }
      function Kr(e, t) {
          let n = [];
          return t[""] && n.push(t[""]),
          t[e.defId] && n.push(t[e.defId]),
          n.push(e.ui),
          Tr(n)
      }
      function ei(e, t) {
          let n = e.map(ti);
          return n.sort(((e,n)=>tt(e, n, t))),
          n.map((e=>e._seg))
      }
      function ti(e) {
          let {eventRange: t} = e
            , n = t.def
            , r = t.instance ? t.instance.range : t.range
            , i = r.start ? r.start.valueOf() : 0
            , o = r.end ? r.end.valueOf() : 0;
          return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
              id: n.publicId,
              start: i,
              end: o,
              duration: o - i,
              allDay: Number(n.allDay),
              _seg: e
          })
      }
      function ni(e, t) {
          let {pluginHooks: n} = t
            , r = n.isDraggableTransformers
            , {def: i, ui: o} = e.eventRange
            , s = o.startEditable;
          for (let e of r)
              s = e(s, i, o, t);
          return s
      }
      function ri(e, t) {
          return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
      }
      function ii(e, t) {
          return e.isEnd && e.eventRange.ui.durationEditable
      }
      function oi(e, t, n, r, i, o, s) {
          let {dateEnv: a, options: l} = n
            , {displayEventTime: d, displayEventEnd: c} = l
            , u = e.eventRange.def
            , h = e.eventRange.instance;
          null == d && (d = !1 !== r),
          null == c && (c = !1 !== i);
          let f = h.range.start
            , p = h.range.end
            , g = o || e.start || e.eventRange.range.start
            , m = s || e.end || e.eventRange.range.end
            , v = Tt(f).valueOf() === Tt(g).valueOf()
            , y = Tt(Dt(p, -1)).valueOf() === Tt(Dt(m, -1)).valueOf();
          return d && !u.allDay && (v || y) ? (g = v ? f : g,
          m = y ? p : m,
          c && u.hasEnd ? a.formatRange(g, m, t, {
              forcedStartTzo: o ? null : h.forcedStartTzo,
              forcedEndTzo: s ? null : h.forcedEndTzo
          }) : a.format(g, t, {
              forcedTzo: o ? null : h.forcedStartTzo
          })) : ""
      }
      function si(e, t, n) {
          let r = e.eventRange.range;
          return {
              isPast: r.end < (n || t.start),
              isFuture: r.start >= (n || t.end),
              isToday: t && nr(t, r.start)
          }
      }
      function ai(e) {
          let t = ["fc-event"];
          return e.isMirror && t.push("fc-event-mirror"),
          e.isDraggable && t.push("fc-event-draggable"),
          (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"),
          e.isDragging && t.push("fc-event-dragging"),
          e.isResizing && t.push("fc-event-resizing"),
          e.isSelected && t.push("fc-event-selected"),
          e.isStart && t.push("fc-event-start"),
          e.isEnd && t.push("fc-event-end"),
          e.isPast && t.push("fc-event-past"),
          e.isToday && t.push("fc-event-today"),
          e.isFuture && t.push("fc-event-future"),
          t
      }
      function li(e) {
          return e.instance ? e.instance.instanceId : `${e.def.defId}:${e.range.start.toISOString()}`
      }
      function di(e, t) {
          let {def: n, instance: r} = e.eventRange
            , {url: i} = n;
          if (i)
              return {
                  href: i
              };
          let {emitter: o, options: s} = t
            , {eventInteractive: a} = s;
          return null == a && (a = n.interactive,
          null == a && (a = Boolean(o.hasHandlers("eventClick")))),
          a ? Ze((e=>{
              o.trigger("eventClick", {
                  el: e.target,
                  event: new qr(t,n,r),
                  jsEvent: e,
                  view: t.viewApi
              })
          }
          )) : {}
      }
      const ci = {
          start: gn,
          end: gn,
          allDay: Boolean
      };
      function ui(e, t, n) {
          return Object.assign(Object.assign({}, hi(e, t, n)), {
              timeZone: t.timeZone
          })
      }
      function hi(e, t, n) {
          return {
              start: t.toDate(e.start),
              end: t.toDate(e.end),
              startStr: t.formatIso(e.start, {
                  omitTime: n
              }),
              endStr: t.formatIso(e.end, {
                  omitTime: n
              })
          }
      }
      function fi(e, t, n) {
          let r = !1
            , i = function(e) {
              r || (r = !0,
              t(e))
          }
            , o = function(e) {
              r || (r = !0,
              n(e))
          }
            , s = e(i, o);
          s && "function" == typeof s.then && s.then(i, o)
      }
      class pi extends Error {
          constructor(e, t) {
              super(e),
              this.response = t
          }
      }
      function gi(e, t, n) {
          const r = {
              method: e = e.toUpperCase()
          };
          return "GET" === e ? t += (-1 === t.indexOf("?") ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n),
          r.headers = {
              "Content-Type": "application/x-www-form-urlencoded"
          }),
          fetch(t, r).then((e=>{
              if (e.ok)
                  return e.json().then((t=>[t, e]), (()=>{
                      throw new pi("Failure parsing JSON",e)
                  }
                  ));
              throw new pi("Request failed",e)
          }
          ))
      }
      let mi;
      function vi() {
          return null == mi && (mi = function() {
              if ("undefined" == typeof document)
                  return !0;
              let e = document.createElement("div");
              e.style.position = "absolute",
              e.style.top = "0px",
              e.style.left = "0px",
              e.innerHTML = "<table><tr><td><div></div></td></tr></table>",
              e.querySelector("table").style.height = "100px",
              e.querySelector("div").style.height = "100%",
              document.body.appendChild(e);
              let t = e.querySelector("div").offsetHeight > 0;
              return document.body.removeChild(e),
              t
          }()),
          mi
      }
      class yi extends jn {
          constructor() {
              super(...arguments),
              this.state = {
                  forPrint: !1
              },
              this.handleBeforePrint = ()=>{
                  this.setState({
                      forPrint: !0
                  })
              }
              ,
              this.handleAfterPrint = ()=>{
                  this.setState({
                      forPrint: !1
                  })
              }
          }
          render() {
              let {props: e} = this
                , {options: t} = e
                , {forPrint: n} = this.state
                , r = n || "auto" === t.height || "auto" === t.contentHeight
                , i = r || null == t.height ? "" : t.height
                , o = ["fc", n ? "fc-media-print" : "fc-media-screen", `fc-direction-${t.direction}`, e.theme.getClass("root")];
              return vi() || o.push("fc-liquid-hack"),
              e.children(o, i, r, n)
          }
          componentDidMount() {
              let {emitter: e} = this.props;
              e.on("_beforeprint", this.handleBeforePrint),
              e.on("_afterprint", this.handleAfterPrint)
          }
          componentWillUnmount() {
              let {emitter: e} = this.props;
              e.off("_beforeprint", this.handleBeforePrint),
              e.off("_afterprint", this.handleAfterPrint)
          }
      }
      class bi {
          constructor(e) {
              this.component = e.component,
              this.isHitComboAllowed = e.isHitComboAllowed || null
          }
          destroy() {}
      }
      function wi(e) {
          return {
              [e.component.uid]: e
          }
      }
      const Si = {};
      class xi {
          getCurrentData() {
              return this.currentDataManager.getCurrentData()
          }
          dispatch(e) {
              this.currentDataManager.dispatch(e)
          }
          get view() {
              return this.getCurrentData().viewApi
          }
          batchRendering(e) {
              e()
          }
          updateSize() {
              this.trigger("_resize", !0)
          }
          setOption(e, t) {
              this.dispatch({
                  type: "SET_OPTION",
                  optionName: e,
                  rawOptionValue: t
              })
          }
          getOption(e) {
              return this.currentDataManager.currentCalendarOptionsInput[e]
          }
          getAvailableLocaleCodes() {
              return Object.keys(this.getCurrentData().availableRawLocales)
          }
          on(e, t) {
              let {currentDataManager: n} = this;
              n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn(`Unknown listener name '${e}'`)
          }
          off(e, t) {
              this.currentDataManager.emitter.off(e, t)
          }
          trigger(e, ...t) {
              this.currentDataManager.emitter.trigger(e, ...t)
          }
          changeView(e, t) {
              this.batchRendering((()=>{
                  if (this.unselect(),
                  t)
                      if (t.start && t.end)
                          this.dispatch({
                              type: "CHANGE_VIEW_TYPE",
                              viewType: e
                          }),
                          this.dispatch({
                              type: "SET_OPTION",
                              optionName: "visibleRange",
                              rawOptionValue: t
                          });
                      else {
                          let {dateEnv: n} = this.getCurrentData();
                          this.dispatch({
                              type: "CHANGE_VIEW_TYPE",
                              viewType: e,
                              dateMarker: n.createMarker(t)
                          })
                      }
                  else
                      this.dispatch({
                          type: "CHANGE_VIEW_TYPE",
                          viewType: e
                      })
              }
              ))
          }
          zoomTo(e, t) {
              let n;
              t = t || "day",
              n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t),
              this.unselect(),
              n ? this.dispatch({
                  type: "CHANGE_VIEW_TYPE",
                  viewType: n.type,
                  dateMarker: e
              }) : this.dispatch({
                  type: "CHANGE_DATE",
                  dateMarker: e
              })
          }
          getUnitViewSpec(e) {
              let t, n, {viewSpecs: r, toolbarConfig: i} = this.getCurrentData(), o = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []);
              for (let e in r)
                  o.push(e);
              for (t = 0; t < o.length; t += 1)
                  if (n = r[o[t]],
                  n && n.singleUnit === e)
                      return n;
              return null
          }
          prev() {
              this.unselect(),
              this.dispatch({
                  type: "PREV"
              })
          }
          next() {
              this.unselect(),
              this.dispatch({
                  type: "NEXT"
              })
          }
          prevYear() {
              let e = this.getCurrentData();
              this.unselect(),
              this.dispatch({
                  type: "CHANGE_DATE",
                  dateMarker: e.dateEnv.addYears(e.currentDate, -1)
              })
          }
          nextYear() {
              let e = this.getCurrentData();
              this.unselect(),
              this.dispatch({
                  type: "CHANGE_DATE",
                  dateMarker: e.dateEnv.addYears(e.currentDate, 1)
              })
          }
          today() {
              let e = this.getCurrentData();
              this.unselect(),
              this.dispatch({
                  type: "CHANGE_DATE",
                  dateMarker: sr(e.calendarOptions.now, e.dateEnv)
              })
          }
          gotoDate(e) {
              let t = this.getCurrentData();
              this.unselect(),
              this.dispatch({
                  type: "CHANGE_DATE",
                  dateMarker: t.dateEnv.createMarker(e)
              })
          }
          incrementDate(e) {
              let t = this.getCurrentData()
                , n = ut(e);
              n && (this.unselect(),
              this.dispatch({
                  type: "CHANGE_DATE",
                  dateMarker: t.dateEnv.add(t.currentDate, n)
              }))
          }
          getDate() {
              let e = this.getCurrentData();
              return e.dateEnv.toDate(e.currentDate)
          }
          formatDate(e, t) {
              let {dateEnv: n} = this.getCurrentData();
              return n.format(n.createMarker(e), rn(t))
          }
          formatRange(e, t, n) {
              let {dateEnv: r} = this.getCurrentData();
              return r.formatRange(r.createMarker(e), r.createMarker(t), rn(n), n)
          }
          formatIso(e, t) {
              let {dateEnv: n} = this.getCurrentData();
              return n.formatIso(n.createMarker(e), {
                  omitTime: t
              })
          }
          select(e, t) {
              let n;
              n = null == t ? null != e.start ? e : {
                  start: e,
                  end: null
              } : {
                  start: e,
                  end: t
              };
              let r = this.getCurrentData()
                , i = function(e, t, n) {
                  let r = function(e, t) {
                      let {refined: n, extra: r} = pn(e, ci)
                        , i = n.start ? t.createMarkerMeta(n.start) : null
                        , o = n.end ? t.createMarkerMeta(n.end) : null
                        , {allDay: s} = n;
                      return null == s && (s = i && i.isTimeUnspecified && (!o || o.isTimeUnspecified)),
                      Object.assign({
                          range: {
                              start: i ? i.marker : null,
                              end: o ? o.marker : null
                          },
                          allDay: s
                      }, r)
                  }(e, t)
                    , {range: i} = r;
                  if (!i.start)
                      return null;
                  if (!i.end) {
                      if (null == n)
                          return null;
                      i.end = t.add(i.start, n)
                  }
                  return r
              }(n, r.dateEnv, ut({
                  days: 1
              }));
              i && (this.dispatch({
                  type: "SELECT_DATES",
                  selection: i
              }),
              jr(i, null, r))
          }
          unselect(e) {
              let t = this.getCurrentData();
              t.dateSelection && (this.dispatch({
                  type: "UNSELECT_DATES"
              }),
              function(e, t) {
                  t.emitter.trigger("unselect", {
                      jsEvent: e ? e.origEvent : null,
                      view: t.viewApi || t.calendarApi.view
                  })
              }(e, t))
          }
          addEvent(e, t) {
              if (e instanceof qr) {
                  let t = e._def
                    , n = e._instance;
                  return this.getCurrentData().eventStore.defs[t.defId] || (this.dispatch({
                      type: "ADD_EVENTS",
                      eventStore: br({
                          def: t,
                          instance: n
                      })
                  }),
                  this.triggerEventAdd(e)),
                  e
              }
              let n, r = this.getCurrentData();
              if (t instanceof Vr)
                  n = t.internalEventSource;
              else if ("boolean" == typeof t)
                  t && ([n] = Sn(r.eventSources));
              else if (null != t) {
                  let e = this.getEventSourceById(t);
                  if (!e)
                      return console.warn(`Could not find an event source with ID "${t}"`),
                      null;
                  n = e.internalEventSource
              }
              let i = pr(e, n, r, !1);
              if (i) {
                  let e = new qr(r,i.def,i.def.recurringDef ? null : i.instance);
                  return this.dispatch({
                      type: "ADD_EVENTS",
                      eventStore: br(i)
                  }),
                  this.triggerEventAdd(e),
                  e
              }
              return null
          }
          triggerEventAdd(e) {
              let {emitter: t} = this.getCurrentData();
              t.trigger("eventAdd", {
                  event: e,
                  relatedEvents: [],
                  revert: ()=>{
                      this.dispatch({
                          type: "REMOVE_EVENTS",
                          eventStore: Yr(e)
                      })
                  }
              })
          }
          getEventById(e) {
              let t = this.getCurrentData()
                , {defs: n, instances: r} = t.eventStore;
              e = String(e);
              for (let i in n) {
                  let o = n[i];
                  if (o.publicId === e) {
                      if (o.recurringDef)
                          return new qr(t,o,null);
                      for (let e in r) {
                          let n = r[e];
                          if (n.defId === o.defId)
                              return new qr(t,o,n)
                      }
                  }
              }
              return null
          }
          getEvents() {
              let e = this.getCurrentData();
              return Qr(e.eventStore, e)
          }
          removeAllEvents() {
              this.dispatch({
                  type: "REMOVE_ALL_EVENTS"
              })
          }
          getEventSources() {
              let e = this.getCurrentData()
                , t = e.eventSources
                , n = [];
              for (let r in t)
                  n.push(new Vr(e,t[r]));
              return n
          }
          getEventSourceById(e) {
              let t = this.getCurrentData()
                , n = t.eventSources;
              e = String(e);
              for (let r in n)
                  if (n[r].publicId === e)
                      return new Vr(t,n[r]);
              return null
          }
          addEventSource(e) {
              let t = this.getCurrentData();
              if (e instanceof Vr)
                  return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                      type: "ADD_EVENT_SOURCES",
                      sources: [e.internalEventSource]
                  }),
                  e;
              let n = _r(e, t);
              return n ? (this.dispatch({
                  type: "ADD_EVENT_SOURCES",
                  sources: [n]
              }),
              new Vr(t,n)) : null
          }
          removeAllEventSources() {
              this.dispatch({
                  type: "REMOVE_ALL_EVENT_SOURCES"
              })
          }
          refetchEvents() {
              this.dispatch({
                  type: "FETCH_EVENT_SOURCES",
                  isRefetch: !0
              })
          }
          scrollToTime(e) {
              let t = ut(e);
              t && this.trigger("_scrollRequest", {
                  time: t
              })
          }
      }
      function Ei(e, t) {
          return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
      }
      function Di(e, t) {
          let n = {
              left: Math.max(e.left, t.left),
              right: Math.min(e.right, t.right),
              top: Math.max(e.top, t.top),
              bottom: Math.min(e.bottom, t.bottom)
          };
          return n.left < n.right && n.top < n.bottom && n
      }
      function Ci(e, t, n) {
          return {
              left: e.left + t,
              right: e.right + t,
              top: e.top + n,
              bottom: e.bottom + n
          }
      }
      const Ri = {
          defs: {},
          instances: {}
      };
      class Ti {
          constructor() {
              this.getKeysForEventDefs = zt(this._getKeysForEventDefs),
              this.splitDateSelection = zt(this._splitDateSpan),
              this.splitEventStore = zt(this._splitEventStore),
              this.splitIndividualUi = zt(this._splitIndividualUi),
              this.splitEventDrag = zt(this._splitInteraction),
              this.splitEventResize = zt(this._splitInteraction),
              this.eventUiBuilders = {}
          }
          splitProps(e) {
              let t = this.getKeyInfo(e)
                , n = this.getKeysForEventDefs(e.eventStore)
                , r = this.splitDateSelection(e.dateSelection)
                , i = this.splitIndividualUi(e.eventUiBases, n)
                , o = this.splitEventStore(e.eventStore, n)
                , s = this.splitEventDrag(e.eventDrag)
                , a = this.splitEventResize(e.eventResize)
                , l = {};
              this.eventUiBuilders = bn(t, ((e,t)=>this.eventUiBuilders[t] || zt(Ai)));
              for (let n in t) {
                  let d = t[n]
                    , c = o[n] || Ri
                    , u = this.eventUiBuilders[n];
                  l[n] = {
                      businessHours: d.businessHours || e.businessHours,
                      dateSelection: r[n] || null,
                      eventStore: c,
                      eventUiBases: u(e.eventUiBases[""], d.ui, i[n]),
                      eventSelection: c.instances[e.eventSelection] ? e.eventSelection : "",
                      eventDrag: s[n] || null,
                      eventResize: a[n] || null
                  }
              }
              return l
          }
          _splitDateSpan(e) {
              let t = {};
              if (e) {
                  let n = this.getKeysForDateSpan(e);
                  for (let r of n)
                      t[r] = e
              }
              return t
          }
          _getKeysForEventDefs(e) {
              return bn(e.defs, (e=>this.getKeysForEventDef(e)))
          }
          _splitEventStore(e, t) {
              let {defs: n, instances: r} = e
                , i = {};
              for (let e in n)
                  for (let r of t[e])
                      i[r] || (i[r] = {
                          defs: {},
                          instances: {}
                      }),
                      i[r].defs[e] = n[e];
              for (let e in r) {
                  let n = r[e];
                  for (let r of t[n.defId])
                      i[r] && (i[r].instances[e] = n)
              }
              return i
          }
          _splitIndividualUi(e, t) {
              let n = {};
              for (let r in e)
                  if (r)
                      for (let i of t[r])
                          n[i] || (n[i] = {}),
                          n[i][r] = e[r];
              return n
          }
          _splitInteraction(e) {
              let t = {};
              if (e) {
                  let n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents))
                    , r = this._getKeysForEventDefs(e.mutatedEvents)
                    , i = this._splitEventStore(e.mutatedEvents, r)
                    , o = r=>{
                      t[r] || (t[r] = {
                          affectedEvents: n[r] || Ri,
                          mutatedEvents: i[r] || Ri,
                          isEvent: e.isEvent
                      })
                  }
                  ;
                  for (let e in n)
                      o(e);
                  for (let e in i)
                      o(e)
              }
              return t
          }
      }
      function Ai(e, t, n) {
          let r = [];
          e && r.push(e),
          t && r.push(t);
          let i = {
              "": Tr(r)
          };
          return n && Object.assign(i, n),
          i
      }
      function ki(e, t, n, r) {
          return {
              dow: e.getUTCDay(),
              isDisabled: Boolean(r && !nr(r.activeRange, e)),
              isOther: Boolean(r && !nr(r.currentRange, e)),
              isToday: Boolean(t && nr(t, e)),
              isPast: Boolean(n ? e < n : !!t && e < t.start),
              isFuture: Boolean(n ? e > n : !!t && e >= t.end)
          }
      }
      function _i(e, t) {
          let n = ["fc-day", `fc-day-${St[e.dow]}`];
          return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"),
          n.push(t.getClass("today"))),
          e.isPast && n.push("fc-day-past"),
          e.isFuture && n.push("fc-day-future"),
          e.isOther && n.push("fc-day-other")),
          n
      }
      function Mi(e, t) {
          let n = ["fc-slot", `fc-slot-${St[e.dow]}`];
          return e.isDisabled ? n.push("fc-slot-disabled") : (e.isToday && (n.push("fc-slot-today"),
          n.push(t.getClass("today"))),
          e.isPast && n.push("fc-slot-past"),
          e.isFuture && n.push("fc-slot-future")),
          n
      }
      const Ii = rn({
          year: "numeric",
          month: "long",
          day: "numeric"
      })
        , Hi = rn({
          week: "long"
      });
      function Oi(e, t, n="day", r=!0) {
          const {dateEnv: i, options: o, calendarApi: s} = e;
          let a = i.format(t, "week" === n ? Hi : Ii);
          if (o.navLinks) {
              let e = i.toDate(t);
              const l = e=>{
                  let r = "day" === n ? o.navLinkDayClick : "week" === n ? o.navLinkWeekClick : null;
                  "function" == typeof r ? r.call(s, i.toDate(t), e) : ("string" == typeof r && (n = r),
                  s.zoomTo(t, n))
              }
              ;
              return Object.assign({
                  title: ot(o.navLinkHint, [a, e], a),
                  "data-navlink": ""
              }, r ? Qe(l) : {
                  onClick: l
              })
          }
          return {
              "aria-label": a
          }
      }
      let Ni, Pi = null;
      function Li() {
          return null === Pi && (Pi = function() {
              let e = document.createElement("div");
              ze(e, {
                  position: "absolute",
                  top: -1e3,
                  left: 0,
                  border: 0,
                  padding: 0,
                  overflow: "scroll",
                  direction: "rtl"
              }),
              e.innerHTML = "<div></div>",
              document.body.appendChild(e);
              let t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
              return Ne(e),
              t
          }()),
          Pi
      }
      function Wi() {
          return Ni || (Ni = function() {
              let e = document.createElement("div");
              e.style.overflow = "scroll",
              e.style.position = "absolute",
              e.style.top = "-9999px",
              e.style.left = "-9999px",
              document.body.appendChild(e);
              let t = ji(e);
              return document.body.removeChild(e),
              t
          }()),
          Ni
      }
      function ji(e) {
          return {
              x: e.offsetHeight - e.clientHeight,
              y: e.offsetWidth - e.clientWidth
          }
      }
      function zi(e, t=!1) {
          let n = window.getComputedStyle(e)
            , r = parseInt(n.borderLeftWidth, 10) || 0
            , i = parseInt(n.borderRightWidth, 10) || 0
            , o = parseInt(n.borderTopWidth, 10) || 0
            , s = parseInt(n.borderBottomWidth, 10) || 0
            , a = ji(e)
            , l = a.y - r - i
            , d = {
              borderLeft: r,
              borderRight: i,
              borderTop: o,
              borderBottom: s,
              scrollbarBottom: a.x - o - s,
              scrollbarLeft: 0,
              scrollbarRight: 0
          };
          return Li() && "rtl" === n.direction ? d.scrollbarLeft = l : d.scrollbarRight = l,
          t && (d.paddingLeft = parseInt(n.paddingLeft, 10) || 0,
          d.paddingRight = parseInt(n.paddingRight, 10) || 0,
          d.paddingTop = parseInt(n.paddingTop, 10) || 0,
          d.paddingBottom = parseInt(n.paddingBottom, 10) || 0),
          d
      }
      function Bi(e, t=!1, n) {
          let r = n ? e.getBoundingClientRect() : Ui(e)
            , i = zi(e, t)
            , o = {
              left: r.left + i.borderLeft + i.scrollbarLeft,
              right: r.right - i.borderRight - i.scrollbarRight,
              top: r.top + i.borderTop,
              bottom: r.bottom - i.borderBottom - i.scrollbarBottom
          };
          return t && (o.left += i.paddingLeft,
          o.right -= i.paddingRight,
          o.top += i.paddingTop,
          o.bottom -= i.paddingBottom),
          o
      }
      function Ui(e) {
          let t = e.getBoundingClientRect();
          return {
              left: t.left + window.pageXOffset,
              top: t.top + window.pageYOffset,
              right: t.right + window.pageXOffset,
              bottom: t.bottom + window.pageYOffset
          }
      }
      function Gi(e) {
          let t = [];
          for (; e instanceof HTMLElement; ) {
              let n = window.getComputedStyle(e);
              if ("fixed" === n.position)
                  break;
              /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e),
              e = e.parentNode
          }
          return t
      }
      class Fi {
          constructor(e, t, n, r) {
              this.els = t;
              let i = this.originClientRect = e.getBoundingClientRect();
              n && this.buildElHorizontals(i.left),
              r && this.buildElVerticals(i.top)
          }
          buildElHorizontals(e) {
              let t = []
                , n = [];
              for (let r of this.els) {
                  let i = r.getBoundingClientRect();
                  t.push(i.left - e),
                  n.push(i.right - e)
              }
              this.lefts = t,
              this.rights = n
          }
          buildElVerticals(e) {
              let t = []
                , n = [];
              for (let r of this.els) {
                  let i = r.getBoundingClientRect();
                  t.push(i.top - e),
                  n.push(i.bottom - e)
              }
              this.tops = t,
              this.bottoms = n
          }
          leftToIndex(e) {
              let t, {lefts: n, rights: r} = this, i = n.length;
              for (t = 0; t < i; t += 1)
                  if (e >= n[t] && e < r[t])
                      return t
          }
          topToIndex(e) {
              let t, {tops: n, bottoms: r} = this, i = n.length;
              for (t = 0; t < i; t += 1)
                  if (e >= n[t] && e < r[t])
                      return t
          }
          getWidth(e) {
              return this.rights[e] - this.lefts[e]
          }
          getHeight(e) {
              return this.bottoms[e] - this.tops[e]
          }
          similarTo(e) {
              return Vi(this.tops || [], e.tops || []) && Vi(this.bottoms || [], e.bottoms || []) && Vi(this.lefts || [], e.lefts || []) && Vi(this.rights || [], e.rights || [])
          }
      }
      function Vi(e, t) {
          const n = e.length;
          if (n !== t.length)
              return !1;
          for (let r = 0; r < n; r++)
              if (Math.round(e[r]) !== Math.round(t[r]))
                  return !1;
          return !0
      }
      class qi {
          getMaxScrollTop() {
              return this.getScrollHeight() - this.getClientHeight()
          }
          getMaxScrollLeft() {
              return this.getScrollWidth() - this.getClientWidth()
          }
          canScrollVertically() {
              return this.getMaxScrollTop() > 0
          }
          canScrollHorizontally() {
              return this.getMaxScrollLeft() > 0
          }
          canScrollUp() {
              return this.getScrollTop() > 0
          }
          canScrollDown() {
              return this.getScrollTop() < this.getMaxScrollTop()
          }
          canScrollLeft() {
              return this.getScrollLeft() > 0
          }
          canScrollRight() {
              return this.getScrollLeft() < this.getMaxScrollLeft()
          }
      }
      class Yi extends qi {
          constructor(e) {
              super(),
              this.el = e
          }
          getScrollTop() {
              return this.el.scrollTop
          }
          getScrollLeft() {
              return this.el.scrollLeft
          }
          setScrollTop(e) {
              this.el.scrollTop = e
          }
          setScrollLeft(e) {
              this.el.scrollLeft = e
          }
          getScrollWidth() {
              return this.el.scrollWidth
          }
          getScrollHeight() {
              return this.el.scrollHeight
          }
          getClientHeight() {
              return this.el.clientHeight
          }
          getClientWidth() {
              return this.el.clientWidth
          }
      }
      class Qi extends qi {
          getScrollTop() {
              return window.pageYOffset
          }
          getScrollLeft() {
              return window.pageXOffset
          }
          setScrollTop(e) {
              window.scroll(window.pageXOffset, e)
          }
          setScrollLeft(e) {
              window.scroll(e, window.pageYOffset)
          }
          getScrollWidth() {
              return document.documentElement.scrollWidth
          }
          getScrollHeight() {
              return document.documentElement.scrollHeight
          }
          getClientHeight() {
              return document.documentElement.clientHeight
          }
          getClientWidth() {
              return document.documentElement.clientWidth
          }
      }
      class Zi extends jn {
          constructor() {
              super(...arguments),
              this.uid = Xe()
          }
          prepareHits() {}
          queryHit(e, t, n, r) {
              return null
          }
          isValidSegDownEl(e) {
              return !this.props.eventDrag && !this.props.eventResize && !Pe(e, ".fc-event-mirror")
          }
          isValidDateDownEl(e) {
              return !(Pe(e, ".fc-event:not(.fc-bg-event)") || Pe(e, ".fc-more-link") || Pe(e, "a[data-navlink]") || Pe(e, ".fc-popover"))
          }
      }
      class $i {
          constructor(e=(e=>e.thickness)) {
              this.getEntryThickness = e,
              this.strictOrder = !1,
              this.allowReslicing = !1,
              this.maxCoord = -1,
              this.maxStackCnt = -1,
              this.levelCoords = [],
              this.entriesByLevel = [],
              this.stackCnts = {}
          }
          addSegs(e) {
              let t = [];
              for (let n of e)
                  this.insertEntry(n, t);
              return t
          }
          insertEntry(e, t) {
              let n = this.findInsertion(e);
              return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n),
              1) : this.handleInvalidInsertion(n, e, t)
          }
          isInsertionValid(e, t) {
              return (-1 === this.maxCoord || e.levelCoord + this.getEntryThickness(t) <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
          }
          handleInvalidInsertion(e, t, n) {
              return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t),
              0)
          }
          splitEntry(e, t, n) {
              let r = 0
                , i = []
                , o = e.span
                , s = t.span;
              return o.start < s.start && (r += this.insertEntry({
                  index: e.index,
                  thickness: e.thickness,
                  span: {
                      start: o.start,
                      end: s.start
                  }
              }, i)),
              o.end > s.end && (r += this.insertEntry({
                  index: e.index,
                  thickness: e.thickness,
                  span: {
                      start: s.end,
                      end: o.end
                  }
              }, i)),
              r ? (n.push({
                  index: e.index,
                  thickness: e.thickness,
                  span: eo(s, o)
              }, ...i),
              r) : (n.push(e),
              0)
          }
          insertEntryAt(e, t) {
              let {entriesByLevel: n, levelCoords: r} = this;
              -1 === t.lateral ? (to(r, t.level, t.levelCoord),
              to(n, t.level, [e])) : to(n[t.level], t.lateral, e),
              this.stackCnts[Ji(e)] = t.stackCnt
          }
          findInsertion(e) {
              let {levelCoords: t, entriesByLevel: n, strictOrder: r, stackCnts: i} = this
                , o = t.length
                , s = 0
                , a = -1
                , l = -1
                , d = null
                , c = 0;
              for (let u = 0; u < o; u += 1) {
                  let o = t[u];
                  if (!r && o >= s + this.getEntryThickness(e))
                      break;
                  let h, f = n[u], p = no(f, e.span.start, Xi), g = p[0] + p[1];
                  for (; (h = f[g]) && h.span.start < e.span.end; ) {
                      let e = o + this.getEntryThickness(h);
                      e > s && (s = e,
                      d = h,
                      a = u,
                      l = g),
                      e === s && (c = Math.max(c, i[Ji(h)] + 1)),
                      g += 1
                  }
              }
              let u = 0;
              if (d)
                  for (u = a + 1; u < o && t[u] < s; )
                      u += 1;
              let h = -1;
              return u < o && t[u] === s && (h = no(n[u], e.span.end, Xi)[0]),
              {
                  touchingLevel: a,
                  touchingLateral: l,
                  touchingEntry: d,
                  stackCnt: c,
                  levelCoord: s,
                  level: u,
                  lateral: h
              }
          }
          toRects() {
              let {entriesByLevel: e, levelCoords: t} = this
                , n = e.length
                , r = [];
              for (let i = 0; i < n; i += 1) {
                  let n = e[i]
                    , o = t[i];
                  for (let e of n)
                      r.push(Object.assign(Object.assign({}, e), {
                          thickness: this.getEntryThickness(e),
                          levelCoord: o
                      }))
              }
              return r
          }
      }
      function Xi(e) {
          return e.span.end
      }
      function Ji(e) {
          return e.index + ":" + e.span.start
      }
      function Ki(e) {
          let t = [];
          for (let i of e) {
              let e = []
                , o = {
                  span: i.span,
                  entries: [i]
              };
              for (let i of t)
                  eo(i.span, o.span) ? o = {
                      entries: i.entries.concat(o.entries),
                      span: (n = i.span,
                      r = o.span,
                      {
                          start: Math.min(n.start, r.start),
                          end: Math.max(n.end, r.end)
                      })
                  } : e.push(i);
              e.push(o),
              t = e
          }
          var n, r;
          return t
      }
      function eo(e, t) {
          let n = Math.max(e.start, t.start)
            , r = Math.min(e.end, t.end);
          return n < r ? {
              start: n,
              end: r
          } : null
      }
      function to(e, t, n) {
          e.splice(t, 0, n)
      }
      function no(e, t, n) {
          let r = 0
            , i = e.length;
          if (!i || t < n(e[r]))
              return [0, 0];
          if (t > n(e[i - 1]))
              return [i, 0];
          for (; r < i; ) {
              let o = Math.floor(r + (i - r) / 2)
                , s = n(e[o]);
              if (t < s)
                  i = o;
              else {
                  if (!(t > s))
                      return [o, 1];
                  r = o + 1
              }
          }
          return [r, 0]
      }
      class ro {
          constructor(e, t) {
              this.emitter = new Pr
          }
          destroy() {}
          setMirrorIsVisible(e) {}
          setMirrorNeedsRevert(e) {}
          setAutoScrollEnabled(e) {}
      }
      const io = {}
        , oo = {
          startTime: ut,
          duration: ut,
          create: Boolean,
          sourceId: String
      };
      function so(e) {
          let {refined: t, extra: n} = pn(e, oo);
          return {
              startTime: t.startTime || null,
              duration: t.duration || null,
              create: null == t.create || t.create,
              sourceId: t.sourceId,
              leftoverProps: n
          }
      }
      function ao(e, t) {
          return rn(!e || t > 10 ? {
              weekday: "short"
          } : t > 1 ? {
              weekday: "short",
              month: "numeric",
              day: "numeric",
              omitCommas: !0
          } : {
              weekday: "long"
          })
      }
      const lo = "fc-col-header-cell";
      function co(e) {
          return e.text
      }
      class uo extends jn {
          render() {
              let {dateEnv: e, options: t, theme: n, viewApi: r} = this.context
                , {props: i} = this
                , {date: o, dateProfile: s} = i
                , a = ki(o, i.todayRange, null, s)
                , l = [lo].concat(_i(a, n))
                , d = e.format(o, i.dayHeaderFormat)
                , c = !a.isDisabled && i.colCnt > 1 ? Oi(this.context, o) : {}
                , u = Object.assign(Object.assign(Object.assign({
                  date: e.toDate(o),
                  view: r
              }, i.extraRenderProps), {
                  text: d
              }), a);
              return y(qn, {
                  elTag: "th",
                  elClasses: l,
                  elAttrs: Object.assign({
                      role: "columnheader",
                      colSpan: i.colSpan,
                      "data-date": a.isDisabled ? void 0 : Lt(o)
                  }, i.extraDataAttrs),
                  renderProps: u,
                  generatorName: "dayHeaderContent",
                  customGenerator: t.dayHeaderContent,
                  defaultGenerator: co,
                  classNameGenerator: t.dayHeaderClassNames,
                  didMount: t.dayHeaderDidMount,
                  willUnmount: t.dayHeaderWillUnmount
              }, (e=>y("div", {
                  className: "fc-scrollgrid-sync-inner"
              }, !a.isDisabled && y(e, {
                  elTag: "a",
                  elAttrs: c,
                  elClasses: ["fc-col-header-cell-cushion", i.isSticky && "fc-sticky"]
              }))))
          }
      }
      const ho = rn({
          weekday: "long"
      });
      class fo extends jn {
          render() {
              let {props: e} = this
                , {dateEnv: t, theme: n, viewApi: r, options: i} = this.context
                , o = Et(new Date(2592e5), e.dow)
                , s = {
                  dow: e.dow,
                  isDisabled: !1,
                  isFuture: !1,
                  isPast: !1,
                  isToday: !1,
                  isOther: !1
              }
                , a = t.format(o, e.dayHeaderFormat)
                , l = Object.assign(Object.assign(Object.assign(Object.assign({
                  date: o
              }, s), {
                  view: r
              }), e.extraRenderProps), {
                  text: a
              });
              return y(qn, {
                  elTag: "th",
                  elClasses: [lo, ..._i(s, n), ...e.extraClassNames || []],
                  elAttrs: Object.assign({
                      role: "columnheader",
                      colSpan: e.colSpan
                  }, e.extraDataAttrs),
                  renderProps: l,
                  generatorName: "dayHeaderContent",
                  customGenerator: i.dayHeaderContent,
                  defaultGenerator: co,
                  classNameGenerator: i.dayHeaderClassNames,
                  didMount: i.dayHeaderDidMount,
                  willUnmount: i.dayHeaderWillUnmount
              }, (n=>y("div", {
                  className: "fc-scrollgrid-sync-inner"
              }, y(n, {
                  elTag: "a",
                  elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"],
                  elAttrs: {
                      "aria-label": t.format(o, ho)
                  }
              }))))
          }
      }
      class po extends C {
          constructor(e, t) {
              super(e, t),
              this.initialNowDate = sr(t.options.now, t.dateEnv),
              this.initialNowQueriedMs = (new Date).valueOf(),
              this.state = this.computeTiming().currentState
          }
          render() {
              let {props: e, state: t} = this;
              return e.children(t.nowDate, t.todayRange)
          }
          componentDidMount() {
              this.setTimeout()
          }
          componentDidUpdate(e) {
              e.unit !== this.props.unit && (this.clearTimeout(),
              this.setTimeout())
          }
          componentWillUnmount() {
              this.clearTimeout()
          }
          computeTiming() {
              let {props: e, context: t} = this
                , n = Dt(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs)
                , r = t.dateEnv.startOf(n, e.unit)
                , i = t.dateEnv.add(r, ut(1, e.unit))
                , o = i.valueOf() - n.valueOf();
              return o = Math.min(864e5, o),
              {
                  currentState: {
                      nowDate: r,
                      todayRange: go(r)
                  },
                  nextState: {
                      nowDate: i,
                      todayRange: go(i)
                  },
                  waitMs: o
              }
          }
          setTimeout() {
              let {nextState: e, waitMs: t} = this.computeTiming();
              this.timeoutId = setTimeout((()=>{
                  this.setState(e, (()=>{
                      this.setTimeout()
                  }
                  ))
              }
              ), t)
          }
          clearTimeout() {
              this.timeoutId && clearTimeout(this.timeoutId)
          }
      }
      function go(e) {
          let t = Tt(e);
          return {
              start: t,
              end: Et(t, 1)
          }
      }
      po.contextType = Pn;
      class mo extends jn {
          constructor() {
              super(...arguments),
              this.createDayHeaderFormatter = zt(vo)
          }
          render() {
              let {context: e} = this
                , {dates: t, dateProfile: n, datesRepDistinctDays: r, renderIntro: i} = this.props
                , o = this.createDayHeaderFormatter(e.options.dayHeaderFormat, r, t.length);
              return y(po, {
                  unit: "day"
              }, ((e,s)=>y("tr", {
                  role: "row"
              }, i && i("day"), t.map((e=>r ? y(uo, {
                  key: e.toISOString(),
                  date: e,
                  dateProfile: n,
                  todayRange: s,
                  colCnt: t.length,
                  dayHeaderFormat: o
              }) : y(fo, {
                  key: e.getUTCDay(),
                  dow: e.getUTCDay(),
                  dayHeaderFormat: o
              }))))))
          }
      }
      function vo(e, t, n) {
          return e || ao(t, n)
      }
      class yo {
          constructor(e, t) {
              let n = e.start
                , {end: r} = e
                , i = []
                , o = []
                , s = -1;
              for (; n < r; )
                  t.isHiddenDay(n) ? i.push(s + .5) : (s += 1,
                  i.push(s),
                  o.push(n)),
                  n = Et(n, 1);
              this.dates = o,
              this.indices = i,
              this.cnt = o.length
          }
          sliceRange(e) {
              let t = this.getDateDayIndex(e.start)
                , n = this.getDateDayIndex(Et(e.end, -1))
                , r = Math.max(0, t)
                , i = Math.min(this.cnt - 1, n);
              return r = Math.ceil(r),
              i = Math.floor(i),
              r <= i ? {
                  firstIndex: r,
                  lastIndex: i,
                  isStart: t === r,
                  isEnd: n === i
              } : null
          }
          getDateDayIndex(e) {
              let {indices: t} = this
                , n = Math.floor(Ct(this.dates[0], e));
              return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
          }
      }
      class bo {
          constructor(e, t) {
              let n, r, i, {dates: o} = e;
              if (t) {
                  for (r = o[0].getUTCDay(),
                  n = 1; n < o.length && o[n].getUTCDay() !== r; n += 1)
                      ;
                  i = Math.ceil(o.length / n)
              } else
                  i = 1,
                  n = o.length;
              this.rowCnt = i,
              this.colCnt = n,
              this.daySeries = e,
              this.cells = this.buildCells(),
              this.headerDates = this.buildHeaderDates()
          }
          buildCells() {
              let e = [];
              for (let t = 0; t < this.rowCnt; t += 1) {
                  let n = [];
                  for (let e = 0; e < this.colCnt; e += 1)
                      n.push(this.buildCell(t, e));
                  e.push(n)
              }
              return e
          }
          buildCell(e, t) {
              let n = this.daySeries.dates[e * this.colCnt + t];
              return {
                  key: n.toISOString(),
                  date: n
              }
          }
          buildHeaderDates() {
              let e = [];
              for (let t = 0; t < this.colCnt; t += 1)
                  e.push(this.cells[0][t].date);
              return e
          }
          sliceRange(e) {
              let {colCnt: t} = this
                , n = this.daySeries.sliceRange(e)
                , r = [];
              if (n) {
                  let {firstIndex: e, lastIndex: i} = n
                    , o = e;
                  for (; o <= i; ) {
                      let s = Math.floor(o / t)
                        , a = Math.min((s + 1) * t, i + 1);
                      r.push({
                          row: s,
                          firstCol: o % t,
                          lastCol: (a - 1) % t,
                          isStart: n.isStart && o === e,
                          isEnd: n.isEnd && a - 1 === i
                      }),
                      o = a
                  }
              }
              return r
          }
      }
      class wo {
          constructor() {
              this.sliceBusinessHours = zt(this._sliceBusinessHours),
              this.sliceDateSelection = zt(this._sliceDateSpan),
              this.sliceEventStore = zt(this._sliceEventStore),
              this.sliceEventDrag = zt(this._sliceInteraction),
              this.sliceEventResize = zt(this._sliceInteraction),
              this.forceDayIfListItem = !1
          }
          sliceProps(e, t, n, r, ...i) {
              let {eventUiBases: o} = e
                , s = this.sliceEventStore(e.eventStore, o, t, n, ...i);
              return {
                  dateSelectionSegs: this.sliceDateSelection(e.dateSelection, t, n, o, r, ...i),
                  businessHourSegs: this.sliceBusinessHours(e.businessHours, t, n, r, ...i),
                  fgEventSegs: s.fg,
                  bgEventSegs: s.bg,
                  eventDrag: this.sliceEventDrag(e.eventDrag, o, t, n, ...i),
                  eventResize: this.sliceEventResize(e.eventResize, o, t, n, ...i),
                  eventSelection: e.eventSelection
              }
          }
          sliceNowDate(e, t, n, r, ...i) {
              return this._sliceDateSpan({
                  range: {
                      start: e,
                      end: Dt(e, 1)
                  },
                  allDay: !1
              }, t, n, {}, r, ...i)
          }
          _sliceBusinessHours(e, t, n, r, ...i) {
              return e ? this._sliceEventStore(dr(e, So(t, Boolean(n)), r), {}, t, n, ...i).bg : []
          }
          _sliceEventStore(e, t, n, r, ...i) {
              if (e) {
                  let o = Zr(e, t, So(n, Boolean(r)), r);
                  return {
                      bg: this.sliceEventRanges(o.bg, i),
                      fg: this.sliceEventRanges(o.fg, i)
                  }
              }
              return {
                  bg: [],
                  fg: []
              }
          }
          _sliceInteraction(e, t, n, r, ...i) {
              if (!e)
                  return null;
              let o = Zr(e.mutatedEvents, t, So(n, Boolean(r)), r);
              return {
                  segs: this.sliceEventRanges(o.fg, i),
                  affectedInstances: e.affectedEvents.instances,
                  isEvent: e.isEvent
              }
          }
          _sliceDateSpan(e, t, n, r, i, ...o) {
              if (!e)
                  return [];
              let s = So(t, Boolean(n))
                , a = Jn(e.range, s);
              if (a) {
                  let t = function(e, t, n) {
                      let r = gr({
                          editable: !1
                      }, n)
                        , i = vr(r.refined, r.extra, "", e.allDay, !0, n);
                      return {
                          def: i,
                          ui: Kr(i, t),
                          instance: lr(i.defId, e.range),
                          range: e.range,
                          isStart: !0,
                          isEnd: !0
                      }
                  }(e = Object.assign(Object.assign({}, e), {
                      range: a
                  }), r, i)
                    , n = this.sliceRange(e.range, ...o);
                  for (let e of n)
                      e.eventRange = t;
                  return n
              }
              return []
          }
          sliceEventRanges(e, t) {
              let n = [];
              for (let r of e)
                  n.push(...this.sliceEventRange(r, t));
              return n
          }
          sliceEventRange(e, t) {
              let n = e.range;
              this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
                  start: n.start,
                  end: Et(n.start, 1)
              });
              let r = this.sliceRange(n, ...t);
              for (let t of r)
                  t.eventRange = e,
                  t.isStart = e.isStart && t.isStart,
                  t.isEnd = e.isEnd && t.isEnd;
              return r
          }
      }
      function So(e, t) {
          let n = e.activeRange;
          return t ? n : {
              start: Dt(n.start, e.slotMinTime.milliseconds),
              end: Dt(n.end, e.slotMaxTime.milliseconds - 864e5)
          }
      }
      function xo(e, t, n) {
          let {instances: r} = e.mutatedEvents;
          for (let e in r)
              if (!tr(t.validRange, r[e].range))
                  return !1;
          return Eo({
              eventDrag: e
          }, n)
      }
      function Eo(e, t) {
          let n = t.getCurrentData()
            , r = Object.assign({
              businessHours: n.businessHours,
              dateSelection: "",
              eventStore: n.eventStore,
              eventUiBases: n.eventUiBases,
              eventSelection: "",
              eventDrag: null,
              eventResize: null
          }, e);
          return (t.pluginHooks.isPropsValid || Do)(r, t)
      }
      function Do(e, t, n={}, r) {
          return !(e.eventDrag && !function(e, t, n, r) {
              let i = t.getCurrentData()
                , o = e.eventDrag
                , s = o.mutatedEvents
                , a = s.defs
                , l = s.instances
                , d = Jr(a, o.isEvent ? e.eventUiBases : {
                  "": i.selectionConfig
              });
              r && (d = bn(d, r));
              let c = (p = e.eventStore,
              g = o.affectedEvents.instances,
              {
                  defs: p.defs,
                  instances: yn(p.instances, (e=>!g[e.instanceId]))
              })
                , u = c.defs
                , h = c.instances
                , f = Jr(u, e.eventUiBases);
              var p, g;
              for (let r in l) {
                  let s = l[r]
                    , p = s.range
                    , g = d[s.defId]
                    , m = a[s.defId];
                  if (!Co(g.constraints, p, c, e.businessHours, t))
                      return !1;
                  let {eventOverlap: v} = t.options
                    , y = "function" == typeof v ? v : null;
                  for (let e in h) {
                      let n = h[e];
                      if (er(p, n.range)) {
                          if (!1 === f[n.defId].overlap && o.isEvent)
                              return !1;
                          if (!1 === g.overlap)
                              return !1;
                          if (y && !y(new qr(t,u[n.defId],n), new qr(t,m,s)))
                              return !1
                      }
                  }
                  let b = i.eventStore;
                  for (let e of g.allows) {
                      let i, o = Object.assign(Object.assign({}, n), {
                          range: s.range,
                          allDay: m.allDay
                      }), a = b.defs[m.defId], l = b.instances[r];
                      if (i = a ? new qr(t,a,l) : new qr(t,m),
                      !e(zr(o, t), i))
                          return !1
                  }
              }
              return !0
          }(e, t, n, r) || e.dateSelection && !function(e, t, n, r) {
              let i = e.eventStore
                , o = i.defs
                , s = i.instances
                , a = e.dateSelection
                , l = a.range
                , {selectionConfig: d} = t.getCurrentData();
              if (r && (d = r(d)),
              !Co(d.constraints, l, i, e.businessHours, t))
                  return !1;
              let {selectOverlap: c} = t.options
                , u = "function" == typeof c ? c : null;
              for (let e in s) {
                  let n = s[e];
                  if (er(l, n.range)) {
                      if (!1 === d.overlap)
                          return !1;
                      if (u && !u(new qr(t,o[n.defId],n), null))
                          return !1
                  }
              }
              for (let e of d.allows)
                  if (!e(zr(Object.assign(Object.assign({}, n), a), t), null))
                      return !1;
              return !0
          }(e, t, n, r))
      }
      function Co(e, t, n, r, i) {
          for (let o of e)
              if (!Ao(Ro(o, t, n, r, i), t))
                  return !1;
          return !0
      }
      function Ro(e, t, n, r, i) {
          return "businessHours" === e ? To(dr(r, t, i)) : "string" == typeof e ? To(xr(n, (t=>t.groupId === e))) : "object" == typeof e && e ? To(dr(e, t, i)) : []
      }
      function To(e) {
          let {instances: t} = e
            , n = [];
          for (let e in t)
              n.push(t[e].range);
          return n
      }
      function Ao(e, t) {
          for (let n of e)
              if (tr(n, t))
                  return !0;
          return !1
      }
      const ko = /^(visible|hidden)$/;
      class _o extends jn {
          constructor() {
              super(...arguments),
              this.handleEl = e=>{
                  this.el = e,
                  zn(this.props.elRef, e)
              }
          }
          render() {
              let {props: e} = this
                , {liquid: t, liquidIsAbsolute: n} = e
                , r = t && n
                , i = ["fc-scroller"];
              return t && (n ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")),
              y("div", {
                  ref: this.handleEl,
                  className: i.join(" "),
                  style: {
                      overflowX: e.overflowX,
                      overflowY: e.overflowY,
                      left: r && -(e.overcomeLeft || 0) || "",
                      right: r && -(e.overcomeRight || 0) || "",
                      bottom: r && -(e.overcomeBottom || 0) || "",
                      marginLeft: !r && -(e.overcomeLeft || 0) || "",
                      marginRight: !r && -(e.overcomeRight || 0) || "",
                      marginBottom: !r && -(e.overcomeBottom || 0) || "",
                      maxHeight: e.maxHeight || ""
                  }
              }, e.children)
          }
          needsXScrolling() {
              if (ko.test(this.props.overflowX))
                  return !1;
              let {el: e} = this
                , t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth()
                , {children: n} = e;
              for (let e = 0; e < n.length; e += 1)
                  if (n[e].getBoundingClientRect().width > t)
                      return !0;
              return !1
          }
          needsYScrolling() {
              if (ko.test(this.props.overflowY))
                  return !1;
              let {el: e} = this
                , t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth()
                , {children: n} = e;
              for (let e = 0; e < n.length; e += 1)
                  if (n[e].getBoundingClientRect().height > t)
                      return !0;
              return !1
          }
          getXScrollbarWidth() {
              return ko.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
          }
          getYScrollbarWidth() {
              return ko.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
          }
      }
      class Mo {
          constructor(e) {
              this.masterCallback = e,
              this.currentMap = {},
              this.depths = {},
              this.callbackMap = {},
              this.handleValue = (e,t)=>{
                  let {depths: n, currentMap: r} = this
                    , i = !1
                    , o = !1;
                  null !== e ? (i = t in r,
                  r[t] = e,
                  n[t] = (n[t] || 0) + 1,
                  o = !0) : (n[t] -= 1,
                  n[t] || (delete r[t],
                  delete this.callbackMap[t],
                  i = !0)),
                  this.masterCallback && (i && this.masterCallback(null, String(t)),
                  o && this.masterCallback(e, String(t)))
              }
          }
          createRef(e) {
              let t = this.callbackMap[e];
              return t || (t = this.callbackMap[e] = t=>{
                  this.handleValue(t, String(e))
              }
              ),
              t
          }
          collect(e, t, n) {
              return Rn(this.currentMap, e, t, n)
          }
          getAll() {
              return Sn(this.currentMap)
          }
      }
      function Io(e) {
          let t = We(e, ".fc-scrollgrid-shrink")
            , n = 0;
          for (let e of t)
              n = Math.max(n, lt(e));
          return Math.ceil(n)
      }
      function Ho(e, t) {
          return e.liquid && t.liquid
      }
      function Oo(e, t) {
          return null != t.maxHeight || Ho(e, t)
      }
      function No(e, t, n, r) {
          let {expandRows: i} = n;
          return "function" == typeof t.content ? t.content(n) : y("table", {
              role: "presentation",
              className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
              style: {
                  minWidth: n.tableMinWidth,
                  width: n.clientWidth,
                  height: i ? n.clientHeight : ""
              }
          }, n.tableColGroupNode, y(r ? "thead" : "tbody", {
              role: "presentation"
          }, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
      }
      function Po(e, t) {
          return wt(e, t, xn)
      }
      function Lo(e, t) {
          let n = [];
          for (let r of e) {
              let e = r.span || 1;
              for (let i = 0; i < e; i += 1)
                  n.push(y("col", {
                      style: {
                          width: "shrink" === r.width ? Wo(t) : r.width || "",
                          minWidth: r.minWidth || ""
                      }
                  }))
          }
          return y("colgroup", {}, ...n)
      }
      function Wo(e) {
          return null == e ? 4 : e
      }
      function jo(e) {
          for (let t of e)
              if ("shrink" === t.width)
                  return !0;
          return !1
      }
      function zo(e, t) {
          let n = ["fc-scrollgrid", t.theme.getClass("table")];
          return e && n.push("fc-scrollgrid-liquid"),
          n
      }
      function Bo(e, t) {
          let n = ["fc-scrollgrid-section", `fc-scrollgrid-section-${e.type}`, e.className];
          return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"),
          e.isSticky && n.push("fc-scrollgrid-section-sticky"),
          n
      }
      function Uo(e) {
          return y("div", {
              className: "fc-scrollgrid-sticky-shim",
              style: {
                  width: e.clientWidth,
                  minWidth: e.tableMinWidth
              }
          })
      }
      function Go(e) {
          let {stickyHeaderDates: t} = e;
          return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight),
          t
      }
      function Fo(e) {
          let {stickyFooterScrollbar: t} = e;
          return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight),
          t
      }
      class Vo extends jn {
          constructor() {
              super(...arguments),
              this.processCols = zt((e=>e), Po),
              this.renderMicroColGroup = zt(Lo),
              this.scrollerRefs = new Mo,
              this.scrollerElRefs = new Mo(this._handleScrollerEl.bind(this)),
              this.state = {
                  shrinkWidth: null,
                  forceYScrollbars: !1,
                  scrollerClientWidths: {},
                  scrollerClientHeights: {}
              },
              this.handleSizing = ()=>{
                  this.safeSetState(Object.assign({
                      shrinkWidth: this.computeShrinkWidth()
                  }, this.computeScrollerDims()))
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , r = e.sections || []
                , i = this.processCols(e.cols)
                , o = this.renderMicroColGroup(i, t.shrinkWidth)
                , s = zo(e.liquid, n);
              e.collapsibleWidth && s.push("fc-scrollgrid-collapsible");
              let a, l = r.length, d = 0, c = [], u = [], h = [];
              for (; d < l && "header" === (a = r[d]).type; )
                  c.push(this.renderSection(a, o, !0)),
                  d += 1;
              for (; d < l && "body" === (a = r[d]).type; )
                  u.push(this.renderSection(a, o, !1)),
                  d += 1;
              for (; d < l && "footer" === (a = r[d]).type; )
                  h.push(this.renderSection(a, o, !0)),
                  d += 1;
              let f = !vi();
              const p = {
                  role: "rowgroup"
              };
              return y("table", {
                  role: "grid",
                  className: s.join(" "),
                  style: {
                      height: e.height
                  }
              }, Boolean(!f && c.length) && y("thead", p, ...c), Boolean(!f && u.length) && y("tbody", p, ...u), Boolean(!f && h.length) && y("tfoot", p, ...h), f && y("tbody", p, ...c, ...u, ...h))
          }
          renderSection(e, t, n) {
              return "outerContent"in e ? y(w, {
                  key: e.key
              }, e.outerContent) : y("tr", {
                  key: e.key,
                  role: "presentation",
                  className: Bo(e, this.props.liquid).join(" ")
              }, this.renderChunkTd(e, t, e.chunk, n))
          }
          renderChunkTd(e, t, n, r) {
              if ("outerContent"in n)
                  return n.outerContent;
              let {props: i} = this
                , {forceYScrollbars: o, scrollerClientWidths: s, scrollerClientHeights: a} = this.state
                , l = Oo(i, e)
                , d = Ho(i, e)
                , c = i.liquid ? o ? "scroll" : l ? "auto" : "hidden" : "visible"
                , u = e.key
                , h = No(e, n, {
                  tableColGroupNode: t,
                  tableMinWidth: "",
                  clientWidth: i.collapsibleWidth || void 0 === s[u] ? null : s[u],
                  clientHeight: void 0 !== a[u] ? a[u] : null,
                  expandRows: e.expandRows,
                  syncRowHeights: !1,
                  rowSyncHeights: [],
                  reportRowHeightChange: ()=>{}
              }, r);
              return y(r ? "th" : "td", {
                  ref: n.elRef,
                  role: "presentation"
              }, y("div", {
                  className: "fc-scroller-harness" + (d ? " fc-scroller-harness-liquid" : "")
              }, y(_o, {
                  ref: this.scrollerRefs.createRef(u),
                  elRef: this.scrollerElRefs.createRef(u),
                  overflowY: c,
                  overflowX: i.liquid ? "hidden" : "visible",
                  maxHeight: e.maxHeight,
                  liquid: d,
                  liquidIsAbsolute: !0
              }, h)))
          }
          _handleScrollerEl(e, t) {
              let n = function(e, t) {
                  for (let n of e)
                      if (n.key === t)
                          return n;
                  return null
              }(this.props.sections, t);
              n && zn(n.chunk.scrollerElRef, e)
          }
          componentDidMount() {
              this.handleSizing(),
              this.context.addResizeHandler(this.handleSizing)
          }
          componentDidUpdate() {
              this.handleSizing()
          }
          componentWillUnmount() {
              this.context.removeResizeHandler(this.handleSizing)
          }
          computeShrinkWidth() {
              return jo(this.props.cols) ? Io(this.scrollerElRefs.getAll()) : 0
          }
          computeScrollerDims() {
              let e = Wi()
                , {scrollerRefs: t, scrollerElRefs: n} = this
                , r = !1
                , i = {}
                , o = {};
              for (let e in t.currentMap) {
                  let n = t.currentMap[e];
                  if (n && n.needsYScrolling()) {
                      r = !0;
                      break
                  }
              }
              for (let t of this.props.sections) {
                  let s = t.key
                    , a = n.currentMap[s];
                  if (a) {
                      let t = a.parentNode;
                      i[s] = Math.floor(t.getBoundingClientRect().width - (r ? e.y : 0)),
                      o[s] = Math.floor(t.getBoundingClientRect().height)
                  }
              }
              return {
                  forceYScrollbars: r,
                  scrollerClientWidths: i,
                  scrollerClientHeights: o
              }
          }
      }
      Vo.addStateEquality({
          scrollerClientWidths: xn,
          scrollerClientHeights: xn
      });
      class qo extends jn {
          constructor() {
              super(...arguments),
              this.handleEl = e=>{
                  this.el = e,
                  e && $r(e, this.props.seg)
              }
          }
          render() {
              const {props: e, context: t} = this
                , {options: n} = t
                , {seg: r} = e
                , {eventRange: i} = r
                , {ui: o} = i
                , s = {
                  event: new qr(t,i.def,i.instance),
                  view: t.viewApi,
                  timeText: e.timeText,
                  textColor: o.textColor,
                  backgroundColor: o.backgroundColor,
                  borderColor: o.borderColor,
                  isDraggable: !e.disableDragging && ni(r, t),
                  isStartResizable: !e.disableResizing && ri(r, t),
                  isEndResizable: !e.disableResizing && ii(r),
                  isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                  isStart: Boolean(r.isStart),
                  isEnd: Boolean(r.isEnd),
                  isPast: Boolean(e.isPast),
                  isFuture: Boolean(e.isFuture),
                  isToday: Boolean(e.isToday),
                  isSelected: Boolean(e.isSelected),
                  isDragging: Boolean(e.isDragging),
                  isResizing: Boolean(e.isResizing)
              };
              return y(qn, Object.assign({}, e, {
                  elRef: this.handleEl,
                  elClasses: [...ai(s), ...r.eventRange.ui.classNames, ...e.elClasses || []],
                  renderProps: s,
                  generatorName: "eventContent",
                  customGenerator: n.eventContent,
                  defaultGenerator: e.defaultGenerator,
                  classNameGenerator: n.eventClassNames,
                  didMount: n.eventDidMount,
                  willUnmount: n.eventWillUnmount
              }))
          }
          componentDidUpdate(e) {
              this.el && this.props.seg !== e.seg && $r(this.el, this.props.seg)
          }
      }
      class Yo extends jn {
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , {seg: r} = e
                , {ui: i} = r.eventRange
                , o = oi(r, n.eventTimeFormat || e.defaultTimeFormat, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
              return y(qo, Object.assign({}, e, {
                  elTag: "a",
                  elStyle: {
                      borderColor: i.borderColor,
                      backgroundColor: i.backgroundColor
                  },
                  elAttrs: di(r, t),
                  defaultGenerator: Qo,
                  timeText: o
              }), ((e,t)=>y(w, null, y(e, {
                  elTag: "div",
                  elClasses: ["fc-event-main"],
                  elStyle: {
                      color: t.textColor
                  }
              }), Boolean(t.isStartResizable) && y("div", {
                  className: "fc-event-resizer fc-event-resizer-start"
              }), Boolean(t.isEndResizable) && y("div", {
                  className: "fc-event-resizer fc-event-resizer-end"
              }))))
          }
      }
      function Qo(e) {
          return y("div", {
              className: "fc-event-main-frame"
          }, e.timeText && y("div", {
              className: "fc-event-time"
          }, e.timeText), y("div", {
              className: "fc-event-title-container"
          }, y("div", {
              className: "fc-event-title fc-sticky"
          }, e.event.title || y(w, null, " "))))
      }
      const Zo = e=>y(Pn.Consumer, null, (t=>{
          let {options: n} = t
            , r = {
              isAxis: e.isAxis,
              date: t.dateEnv.toDate(e.date),
              view: t.viewApi
          };
          return y(qn, Object.assign({}, e, {
              elTag: e.elTag || "div",
              renderProps: r,
              generatorName: "nowIndicatorContent",
              customGenerator: n.nowIndicatorContent,
              classNameGenerator: n.nowIndicatorClassNames,
              didMount: n.nowIndicatorDidMount,
              willUnmount: n.nowIndicatorWillUnmount
          }))
      }
      ))
        , $o = rn({
          day: "numeric"
      });
      class Xo extends jn {
          constructor() {
              super(...arguments),
              this.refineRenderProps = Bt(Ko)
          }
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , r = this.refineRenderProps({
                  date: e.date,
                  dateProfile: e.dateProfile,
                  todayRange: e.todayRange,
                  isMonthStart: e.isMonthStart || !1,
                  showDayNumber: e.showDayNumber,
                  extraRenderProps: e.extraRenderProps,
                  viewApi: t.viewApi,
                  dateEnv: t.dateEnv,
                  monthStartFormat: n.monthStartFormat
              });
              return y(qn, Object.assign({}, e, {
                  elClasses: [..._i(r, t.theme), ...e.elClasses || []],
                  elAttrs: Object.assign(Object.assign({}, e.elAttrs), r.isDisabled ? {} : {
                      "data-date": Lt(e.date)
                  }),
                  renderProps: r,
                  generatorName: "dayCellContent",
                  customGenerator: n.dayCellContent,
                  defaultGenerator: e.defaultGenerator,
                  classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
                  didMount: n.dayCellDidMount,
                  willUnmount: n.dayCellWillUnmount
              }))
          }
      }
      function Jo(e) {
          return Boolean(e.dayCellContent || Un("dayCellContent", e))
      }
      function Ko(e) {
          let {date: t, dateEnv: n, dateProfile: r, isMonthStart: i} = e
            , o = ki(t, e.todayRange, null, r)
            , s = e.showDayNumber ? n.format(t, i ? e.monthStartFormat : $o) : "";
          return Object.assign(Object.assign(Object.assign({
              date: n.toDate(t),
              view: e.viewApi
          }, o), {
              isMonthStart: i,
              dayNumberText: s
          }), e.extraRenderProps)
      }
      class es extends jn {
          render() {
              let {props: e} = this
                , {seg: t} = e;
              return y(qo, {
                  elTag: "div",
                  elClasses: ["fc-bg-event"],
                  elStyle: {
                      backgroundColor: t.eventRange.ui.backgroundColor
                  },
                  defaultGenerator: ts,
                  seg: t,
                  timeText: "",
                  isDragging: !1,
                  isResizing: !1,
                  isDateSelecting: !1,
                  isSelected: !1,
                  isPast: e.isPast,
                  isFuture: e.isFuture,
                  isToday: e.isToday,
                  disableDragging: !0,
                  disableResizing: !0
              })
          }
      }
      function ts(e) {
          let {title: t} = e.event;
          return t && y("div", {
              className: "fc-event-title"
          }, e.event.title)
      }
      function ns(e) {
          return y("div", {
              className: `fc-${e}`
          })
      }
      const rs = e=>y(Pn.Consumer, null, (t=>{
          let {dateEnv: n, options: r} = t
            , {date: i} = e
            , o = r.weekNumberFormat || e.defaultFormat
            , s = {
              num: n.computeWeekNumber(i),
              text: n.format(i, o),
              date: i
          };
          return y(qn, Object.assign({}, e, {
              renderProps: s,
              generatorName: "weekNumberContent",
              customGenerator: r.weekNumberContent,
              defaultGenerator: is,
              classNameGenerator: r.weekNumberClassNames,
              didMount: r.weekNumberDidMount,
              willUnmount: r.weekNumberWillUnmount
          }))
      }
      ));
      function is(e) {
          return e.text
      }
      class os extends jn {
          constructor() {
              super(...arguments),
              this.state = {
                  titleId: Fe()
              },
              this.handleRootEl = e=>{
                  this.rootEl = e,
                  this.props.elRef && zn(this.props.elRef, e)
              }
              ,
              this.handleDocumentMouseDown = e=>{
                  const t = Ue(e);
                  this.rootEl.contains(t) || this.handleCloseClick()
              }
              ,
              this.handleDocumentKeyDown = e=>{
                  "Escape" === e.key && this.handleCloseClick()
              }
              ,
              this.handleCloseClick = ()=>{
                  let {onClose: e} = this.props;
                  e && e()
              }
          }
          render() {
              let {theme: e, options: t} = this.context
                , {props: n, state: r} = this
                , i = ["fc-popover", e.getClass("popover")].concat(n.extraClassNames || []);
              return function(e, t) {
                  var n = y(me, {
                      __v: e,
                      i: t
                  });
                  return n.containerInfo = t,
                  n
              }(y("div", Object.assign({}, n.extraAttrs, {
                  id: n.id,
                  className: i.join(" "),
                  "aria-labelledby": r.titleId,
                  ref: this.handleRootEl
              }), y("div", {
                  className: "fc-popover-header " + e.getClass("popoverHeader")
              }, y("span", {
                  className: "fc-popover-title",
                  id: r.titleId
              }, n.title), y("span", {
                  className: "fc-popover-close " + e.getIconClass("close"),
                  title: t.closeHint,
                  onClick: this.handleCloseClick
              })), y("div", {
                  className: "fc-popover-body " + e.getClass("popoverContent")
              }, n.children)), n.parentEl)
          }
          componentDidMount() {
              document.addEventListener("mousedown", this.handleDocumentMouseDown),
              document.addEventListener("keydown", this.handleDocumentKeyDown),
              this.updateSize()
          }
          componentWillUnmount() {
              document.removeEventListener("mousedown", this.handleDocumentMouseDown),
              document.removeEventListener("keydown", this.handleDocumentKeyDown)
          }
          updateSize() {
              let {isRtl: e} = this.context
                , {alignmentEl: t, alignGridTop: n} = this.props
                , {rootEl: r} = this
                , i = function(e) {
                  let t = Gi(e)
                    , n = e.getBoundingClientRect();
                  for (let e of t) {
                      let t = Di(n, e.getBoundingClientRect());
                      if (!t)
                          return null;
                      n = t
                  }
                  return n
              }(t);
              if (i) {
                  let o = r.getBoundingClientRect()
                    , s = n ? Pe(t, ".fc-scrollgrid").getBoundingClientRect().top : i.top
                    , a = e ? i.right - o.width : i.left;
                  s = Math.max(s, 10),
                  a = Math.min(a, document.documentElement.clientWidth - 10 - o.width),
                  a = Math.max(a, 10);
                  let l = r.offsetParent.getBoundingClientRect();
                  ze(r, {
                      top: s - l.top,
                      left: a - l.left
                  })
              }
          }
      }
      class ss extends Zi {
          constructor() {
              super(...arguments),
              this.handleRootEl = e=>{
                  this.rootEl = e,
                  e ? this.context.registerInteractiveComponent(this, {
                      el: e,
                      useEventCenter: !1
                  }) : this.context.unregisterInteractiveComponent(this)
              }
          }
          render() {
              let {options: e, dateEnv: t} = this.context
                , {props: n} = this
                , {startDate: r, todayRange: i, dateProfile: o} = n
                , s = t.format(r, e.dayPopoverFormat);
              return y(Xo, {
                  elRef: this.handleRootEl,
                  date: r,
                  dateProfile: o,
                  todayRange: i
              }, ((t,r,i)=>y(os, {
                  elRef: i.ref,
                  id: n.id,
                  title: s,
                  extraClassNames: ["fc-more-popover"].concat(i.className || []),
                  extraAttrs: i,
                  parentEl: n.parentEl,
                  alignmentEl: n.alignmentEl,
                  alignGridTop: n.alignGridTop,
                  onClose: n.onClose
              }, Jo(e) && y(t, {
                  elTag: "div",
                  elClasses: ["fc-more-popover-misc"]
              }), n.children)))
          }
          queryHit(e, t, n, r) {
              let {rootEl: i, props: o} = this;
              return e >= 0 && e < n && t >= 0 && t < r ? {
                  dateProfile: o.dateProfile,
                  dateSpan: Object.assign({
                      allDay: !o.forceTimed,
                      range: {
                          start: o.startDate,
                          end: o.endDate
                      }
                  }, o.extraDateSpan),
                  dayEl: i,
                  rect: {
                      left: 0,
                      top: 0,
                      right: n,
                      bottom: r
                  },
                  layer: 1
              } : null
          }
      }
      class as extends jn {
          constructor() {
              super(...arguments),
              this.state = {
                  isPopoverOpen: !1,
                  popoverId: Fe()
              },
              this.handleLinkEl = e=>{
                  this.linkEl = e,
                  this.props.elRef && zn(this.props.elRef, e)
              }
              ,
              this.handleClick = e=>{
                  let {props: t, context: n} = this
                    , {moreLinkClick: r} = n.options
                    , i = ds(t).start;
                  function o(e) {
                      let {def: t, instance: r, range: i} = e.eventRange;
                      return {
                          event: new qr(n,t,r),
                          start: n.dateEnv.toDate(i.start),
                          end: n.dateEnv.toDate(i.end),
                          isStart: e.isStart,
                          isEnd: e.isEnd
                      }
                  }
                  "function" == typeof r && (r = r({
                      date: i,
                      allDay: Boolean(t.allDayDate),
                      allSegs: t.allSegs.map(o),
                      hiddenSegs: t.hiddenSegs.map(o),
                      jsEvent: e,
                      view: n.viewApi
                  })),
                  r && "popover" !== r ? "string" == typeof r && n.calendarApi.zoomTo(i, r) : this.setState({
                      isPopoverOpen: !0
                  })
              }
              ,
              this.handlePopoverClose = ()=>{
                  this.setState({
                      isPopoverOpen: !1
                  })
              }
          }
          render() {
              let {props: e, state: t} = this;
              return y(Pn.Consumer, null, (n=>{
                  let {viewApi: r, options: i, calendarApi: o} = n
                    , {moreLinkText: s} = i
                    , {moreCnt: a} = e
                    , l = ds(e)
                    , d = "function" == typeof s ? s.call(o, a) : `+${a} ${s}`
                    , c = ot(i.moreLinkHint, [a], d)
                    , u = {
                      num: a,
                      shortText: `+${a}`,
                      text: d,
                      view: r
                  };
                  return y(w, null, Boolean(e.moreCnt) && y(qn, {
                      elTag: e.elTag || "a",
                      elRef: this.handleLinkEl,
                      elClasses: [...e.elClasses || [], "fc-more-link"],
                      elStyle: e.elStyle,
                      elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Qe(this.handleClick)), {
                          title: c,
                          "aria-expanded": t.isPopoverOpen,
                          "aria-controls": t.isPopoverOpen ? t.popoverId : ""
                      }),
                      renderProps: u,
                      generatorName: "moreLinkContent",
                      customGenerator: i.moreLinkContent,
                      defaultGenerator: e.defaultGenerator || ls,
                      classNameGenerator: i.moreLinkClassNames,
                      didMount: i.moreLinkDidMount,
                      willUnmount: i.moreLinkWillUnmount
                  }, e.children), t.isPopoverOpen && y(ss, {
                      id: t.popoverId,
                      startDate: l.start,
                      endDate: l.end,
                      dateProfile: e.dateProfile,
                      todayRange: e.todayRange,
                      extraDateSpan: e.extraDateSpan,
                      parentEl: this.parentEl,
                      alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl,
                      alignGridTop: e.alignGridTop,
                      forceTimed: e.forceTimed,
                      onClose: this.handlePopoverClose
                  }, e.popoverContent()))
              }
              ))
          }
          componentDidMount() {
              this.updateParentEl()
          }
          componentDidUpdate() {
              this.updateParentEl()
          }
          updateParentEl() {
              this.linkEl && (this.parentEl = Pe(this.linkEl, ".fc-view-harness"))
          }
      }
      function ls(e) {
          return e.text
      }
      function ds(e) {
          if (e.allDayDate)
              return {
                  start: e.allDayDate,
                  end: Et(e.allDayDate, 1)
              };
          let {hiddenSegs: t} = e;
          return {
              start: cs(t),
              end: (n = t,
              n.reduce(hs).eventRange.range.end)
          };
          var n
      }
      function cs(e) {
          return e.reduce(us).eventRange.range.start
      }
      function us(e, t) {
          return e.eventRange.range.start < t.eventRange.range.start ? e : t
      }
      function hs(e, t) {
          return e.eventRange.range.end > t.eventRange.range.end ? e : t
      }
      const fs = []
        , ps = {
          code: "en",
          week: {
              dow: 0,
              doy: 4
          },
          direction: "ltr",
          buttonText: {
              prev: "prev",
              next: "next",
              prevYear: "prev year",
              nextYear: "next year",
              year: "year",
              today: "today",
              month: "month",
              week: "week",
              day: "day",
              list: "list"
          },
          weekText: "W",
          weekTextLong: "Week",
          closeHint: "Close",
          timeHint: "Time",
          eventHint: "Event",
          allDayText: "all-day",
          moreLinkText: "more",
          noEventsText: "No events to display"
      }
        , gs = Object.assign(Object.assign({}, ps), {
          buttonHints: {
              prev: "Previous $0",
              next: "Next $0",
              today: (e,t)=>"day" === t ? "Today" : `This ${e}`
          },
          viewHint: "$0 view",
          navLinkHint: "Go to $0",
          moreLinkHint: e=>`Show ${e} more event${1 === e ? "" : "s"}`
      });
      function ms(e) {
          let t = e.length > 0 ? e[0].code : "en"
            , n = fs.concat(e)
            , r = {
              en: gs
          };
          for (let e of n)
              r[e.code] = e;
          return {
              map: r,
              defaultCode: t
          }
      }
      function vs(e, t) {
          return "object" != typeof e || Array.isArray(e) ? function(e, t) {
              let n = [].concat(e || [])
                , r = function(e, t) {
                  for (let n = 0; n < e.length; n += 1) {
                      let r = e[n].toLocaleLowerCase().split("-");
                      for (let e = r.length; e > 0; e -= 1) {
                          let n = r.slice(0, e).join("-");
                          if (t[n])
                              return t[n]
                      }
                  }
                  return null
              }(n, t) || gs;
              return ys(e, n, r)
          }(e, t) : ys(e.code, [e.code], e)
      }
      function ys(e, t, n) {
          let r = vn([ps, n], ["buttonText"]);
          delete r.code;
          let {week: i} = r;
          return delete r.week,
          {
              codeArg: e,
              codes: t,
              week: i,
              simpleNumberFormat: new Intl.NumberFormat(e),
              options: r
          }
      }
      function bs(e) {
          return {
              id: Xe(),
              name: e.name,
              premiumReleaseDate: e.premiumReleaseDate ? new Date(e.premiumReleaseDate) : void 0,
              deps: e.deps || [],
              reducers: e.reducers || [],
              isLoadingFuncs: e.isLoadingFuncs || [],
              contextInit: [].concat(e.contextInit || []),
              eventRefiners: e.eventRefiners || {},
              eventDefMemberAdders: e.eventDefMemberAdders || [],
              eventSourceRefiners: e.eventSourceRefiners || {},
              isDraggableTransformers: e.isDraggableTransformers || [],
              eventDragMutationMassagers: e.eventDragMutationMassagers || [],
              eventDefMutationAppliers: e.eventDefMutationAppliers || [],
              dateSelectionTransformers: e.dateSelectionTransformers || [],
              datePointTransforms: e.datePointTransforms || [],
              dateSpanTransforms: e.dateSpanTransforms || [],
              views: e.views || {},
              viewPropsTransformers: e.viewPropsTransformers || [],
              isPropsValid: e.isPropsValid || null,
              externalDefTransforms: e.externalDefTransforms || [],
              viewContainerAppends: e.viewContainerAppends || [],
              eventDropTransformers: e.eventDropTransformers || [],
              componentInteractions: e.componentInteractions || [],
              calendarInteractions: e.calendarInteractions || [],
              themeClasses: e.themeClasses || {},
              eventSourceDefs: e.eventSourceDefs || [],
              cmdFormatter: e.cmdFormatter,
              recurringTypes: e.recurringTypes || [],
              namedTimeZonedImpl: e.namedTimeZonedImpl,
              initialView: e.initialView || "",
              elementDraggingImpl: e.elementDraggingImpl,
              optionChangeHandlers: e.optionChangeHandlers || {},
              scrollGridImpl: e.scrollGridImpl || null,
              listenerRefiners: e.listenerRefiners || {},
              optionRefiners: e.optionRefiners || {},
              propSetHandlers: e.propSetHandlers || {}
          }
      }
      class ws extends Mn {
      }
      function Ss(e, t, n, r) {
          if (t[e])
              return t[e];
          let i = function(e, t, n, r) {
              let i = n[e]
                , o = r[e]
                , s = e=>i && null !== i[e] ? i[e] : o && null !== o[e] ? o[e] : null
                , a = s("component")
                , l = s("superType")
                , d = null;
              if (l) {
                  if (l === e)
                      throw new Error("Can't have a custom view type that references itself");
                  d = Ss(l, t, n, r)
              }
              return !a && d && (a = d.component),
              a ? {
                  type: e,
                  component: a,
                  defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), i ? i.rawOptions : {}),
                  overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), o ? o.rawOptions : {})
              } : null
          }(e, t, n, r);
          return i && (t[e] = i),
          i
      }
      function xs(e) {
          return bn(e, Es)
      }
      function Es(e) {
          let t = "function" == typeof e ? {
              component: e
          } : e
            , {component: n} = t;
          return t.content ? n = Ds(t) : !n || n.prototype instanceof jn || (n = Ds(Object.assign(Object.assign({}, t), {
              content: n
          }))),
          {
              superType: t.type,
              component: n,
              rawOptions: t
          }
      }
      function Ds(e) {
          return t=>y(Pn.Consumer, null, (n=>y(qn, {
              elTag: "div",
              elClasses: Zn(n.viewSpec),
              renderProps: Object.assign(Object.assign({}, t), {
                  nextDayThreshold: n.options.nextDayThreshold
              }),
              generatorName: void 0,
              customGenerator: e.content,
              classNameGenerator: e.classNames,
              didMount: e.didMount,
              willUnmount: e.willUnmount
          })))
      }
      function Cs(e, t, n, r) {
          let i = xs(e)
            , o = xs(t.views)
            , s = function(e, t) {
              let n, r = {};
              for (n in e)
                  Ss(n, r, e, t);
              for (n in t)
                  Ss(n, r, e, t);
              return r
          }(i, o);
          return bn(s, (e=>function(e, t, n, r, i) {
              let o = e.overrides.duration || e.defaults.duration || r.duration || n.duration
                , s = null
                , a = ""
                , l = ""
                , d = {};
              if (o && (s = function(e) {
                  let t = JSON.stringify(e)
                    , n = Rs[t];
                  return void 0 === n && (n = ut(e),
                  Rs[t] = n),
                  n
              }(o),
              s)) {
                  let e = bt(s);
                  a = e.unit,
                  1 === e.value && (l = a,
                  d = t[a] ? t[a].rawOptions : {})
              }
              let c = t=>{
                  let n = t.buttonText || {}
                    , r = e.defaults.buttonTextKey;
                  return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null
              }
                , u = t=>{
                  let n = t.buttonHints || {}
                    , r = e.defaults.buttonTextKey;
                  return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null
              }
              ;
              return {
                  type: e.type,
                  component: e.component,
                  duration: s,
                  durationUnit: a,
                  singleUnit: l,
                  optionDefaults: e.defaults,
                  optionOverrides: Object.assign(Object.assign({}, d), e.overrides),
                  buttonTextOverride: c(r) || c(n) || e.overrides.buttonText,
                  buttonTextDefault: c(i) || e.defaults.buttonText || c(sn) || e.type,
                  buttonTitleOverride: u(r) || u(n) || e.overrides.buttonHint,
                  buttonTitleDefault: u(i) || e.defaults.buttonHint || u(sn)
              }
          }(e, o, t, n, r)))
      }
      ws.prototype.classes = {
          root: "fc-theme-standard",
          tableCellShaded: "fc-cell-shaded",
          buttonGroup: "fc-button-group",
          button: "fc-button fc-button-primary",
          buttonActive: "fc-button-active"
      },
      ws.prototype.baseIconClass = "fc-icon",
      ws.prototype.iconClasses = {
          close: "fc-icon-x",
          prev: "fc-icon-chevron-left",
          next: "fc-icon-chevron-right",
          prevYear: "fc-icon-chevrons-left",
          nextYear: "fc-icon-chevrons-right"
      },
      ws.prototype.rtlIconClasses = {
          prev: "fc-icon-chevron-right",
          next: "fc-icon-chevron-left",
          prevYear: "fc-icon-chevrons-right",
          nextYear: "fc-icon-chevrons-left"
      },
      ws.prototype.iconOverrideOption = "buttonIcons",
      ws.prototype.iconOverrideCustomButtonOption = "icon",
      ws.prototype.iconOverridePrefix = "fc-icon-";
      let Rs = {};
      function Ts(e) {
          for (let t in e)
              if (e[t].isFetching)
                  return !0;
          return !1
      }
      function As(e, t, n, r) {
          let i = {};
          for (let e of t)
              i[e.sourceId] = e;
          return n && (i = ks(i, n, r)),
          Object.assign(Object.assign({}, e), i)
      }
      function ks(e, t, n) {
          return _s(e, yn(e, (e=>function(e, t, n) {
              return Hs(e, n) ? !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end : !e.latestFetchId
          }(e, t, n))), t, !1, n)
      }
      function _s(e, t, n, r, i) {
          let o = {};
          for (let s in e) {
              let a = e[s];
              t[s] ? o[s] = Ms(a, n, r, i) : o[s] = a
          }
          return o
      }
      function Ms(e, t, n, r) {
          let {options: i, calendarApi: o} = r
            , s = r.pluginHooks.eventSourceDefs[e.sourceDefId]
            , a = Xe();
          return s.fetch({
              eventSource: e,
              range: t,
              isRefetch: n,
              context: r
          }, (n=>{
              let {rawEvents: s} = n;
              i.eventSourceSuccess && (s = i.eventSourceSuccess.call(o, s, n.response) || s),
              e.success && (s = e.success.call(o, s, n.response) || s),
              r.dispatch({
                  type: "RECEIVE_EVENTS",
                  sourceId: e.sourceId,
                  fetchId: a,
                  fetchRange: t,
                  rawEvents: s
              })
          }
          ), (n=>{
              let s = !1;
              i.eventSourceFailure && (i.eventSourceFailure.call(o, n),
              s = !0),
              e.failure && (e.failure(n),
              s = !0),
              s || console.warn(n.message, n),
              r.dispatch({
                  type: "RECEIVE_EVENT_ERROR",
                  sourceId: e.sourceId,
                  fetchId: a,
                  fetchRange: t,
                  error: n
              })
          }
          )),
          Object.assign(Object.assign({}, e), {
              isFetching: !0,
              latestFetchId: a
          })
      }
      function Is(e, t) {
          return yn(e, (e=>Hs(e, t)))
      }
      function Hs(e, t) {
          return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
      }
      function Os(e, t) {
          switch (t.type) {
          case "UNSELECT_DATES":
              return null;
          case "SELECT_DATES":
              return t.selection;
          default:
              return e
          }
      }
      function Ns(e, t) {
          switch (t.type) {
          case "UNSELECT_EVENT":
              return "";
          case "SELECT_EVENT":
              return t.eventInstanceId;
          default:
              return e
          }
      }
      function Ps(e, t) {
          let n;
          switch (t.type) {
          case "UNSET_EVENT_DRAG":
              return null;
          case "SET_EVENT_DRAG":
              return n = t.state,
              {
                  affectedEvents: n.affectedEvents,
                  mutatedEvents: n.mutatedEvents,
                  isEvent: n.isEvent
              };
          default:
              return e
          }
      }
      function Ls(e, t) {
          let n;
          switch (t.type) {
          case "UNSET_EVENT_RESIZE":
              return null;
          case "SET_EVENT_RESIZE":
              return n = t.state,
              {
                  affectedEvents: n.affectedEvents,
                  mutatedEvents: n.mutatedEvents,
                  isEvent: n.isEvent
              };
          default:
              return e
          }
      }
      function Ws(e, t, n, r, i) {
          return {
              header: e.headerToolbar ? js(e.headerToolbar, e, t, n, r, i) : null,
              footer: e.footerToolbar ? js(e.footerToolbar, e, t, n, r, i) : null
          }
      }
      function js(e, t, n, r, i, o) {
          let s = {}
            , a = []
            , l = !1;
          for (let d in e) {
              let c = zs(e[d], t, n, r, i, o);
              s[d] = c.widgets,
              a.push(...c.viewsWithButtons),
              l = l || c.hasTitle
          }
          return {
              sectionWidgets: s,
              viewsWithButtons: a,
              hasTitle: l
          }
      }
      function zs(e, t, n, r, i, o) {
          let s = "rtl" === t.direction
            , a = t.customButtons || {}
            , l = n.buttonText || {}
            , d = t.buttonText || {}
            , c = n.buttonHints || {}
            , u = t.buttonHints || {}
            , h = e ? e.split(" ") : []
            , f = []
            , p = !1;
          return {
              widgets: h.map((e=>e.split(",").map((e=>{
                  if ("title" === e)
                      return p = !0,
                      {
                          buttonName: e
                      };
                  let n, h, g, m, v, y;
                  if (n = a[e])
                      g = e=>{
                          n.click && n.click.call(e.target, e, e.target)
                      }
                      ,
                      (m = r.getCustomButtonIconClass(n)) || (m = r.getIconClass(e, s)) || (v = n.text),
                      y = n.hint || n.text;
                  else if (h = i[e]) {
                      f.push(e),
                      g = ()=>{
                          o.changeView(e)
                      }
                      ,
                      (v = h.buttonTextOverride) || (m = r.getIconClass(e, s)) || (v = h.buttonTextDefault);
                      let n = h.buttonTextOverride || h.buttonTextDefault;
                      y = ot(h.buttonTitleOverride || h.buttonTitleDefault || t.viewHint, [n, e], n)
                  } else if (o[e])
                      if (g = ()=>{
                          o[e]()
                      }
                      ,
                      (v = l[e]) || (m = r.getIconClass(e, s)) || (v = d[e]),
                      "prevYear" === e || "nextYear" === e) {
                          let t = "prevYear" === e ? "prev" : "next";
                          y = ot(c[t] || u[t], [d.year || "year", "year"], d[e])
                      } else
                          y = t=>ot(c[e] || u[e], [d[t] || t, t], d[e]);
                  return {
                      buttonName: e,
                      buttonClick: g,
                      buttonIcon: m,
                      buttonText: v,
                      buttonHint: y
                  }
              }
              )))),
              viewsWithButtons: f,
              hasTitle: p
          }
      }
      class Bs {
          constructor(e, t, n) {
              this.type = e,
              this.getCurrentData = t,
              this.dateEnv = n
          }
          get calendar() {
              return this.getCurrentData().calendarApi
          }
          get title() {
              return this.getCurrentData().viewTitle
          }
          get activeStart() {
              return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
          }
          get activeEnd() {
              return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
          }
          get currentStart() {
              return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
          }
          get currentEnd() {
              return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
          }
          getOption(e) {
              return this.getCurrentData().options[e]
          }
      }
      function Us(e, t) {
          let n = Sn(t.getCurrentData().eventSources);
          if (1 === n.length && 1 === e.length && Array.isArray(n[0]._raw) && Array.isArray(e[0]))
              return void t.dispatch({
                  type: "RESET_RAW_EVENTS",
                  sourceId: n[0].sourceId,
                  rawEvents: e[0]
              });
          let r = [];
          for (let t of e) {
              let e = !1;
              for (let r = 0; r < n.length; r += 1)
                  if (n[r]._raw === t) {
                      n.splice(r, 1),
                      e = !0;
                      break
                  }
              e || r.push(t)
          }
          for (let e of n)
              t.dispatch({
                  type: "REMOVE_EVENT_SOURCE",
                  sourceId: e.sourceId
              });
          for (let e of r)
              t.calendarApi.addEventSource(e)
      }
      const Gs = [bs({
          name: "array-event-source",
          eventSourceDefs: [{
              ignoreRange: !0,
              parseMeta: e=>Array.isArray(e.events) ? e.events : null,
              fetch(e, t) {
                  t({
                      rawEvents: e.eventSource.meta
                  })
              }
          }]
      }), bs({
          name: "func-event-source",
          eventSourceDefs: [{
              parseMeta: e=>"function" == typeof e.events ? e.events : null,
              fetch(e, t, n) {
                  const {dateEnv: r} = e.context;
                  fi(e.eventSource.meta.bind(null, ui(e.range, r)), (e=>t({
                      rawEvents: e
                  })), n)
              }
          }]
      }), bs({
          name: "json-event-source",
          eventSourceRefiners: {
              method: String,
              extraParams: gn,
              startParam: String,
              endParam: String,
              timeZoneParam: String
          },
          eventSourceDefs: [{
              parseMeta: e=>!e.url || "json" !== e.format && e.format ? null : {
                  url: e.url,
                  format: "json",
                  method: (e.method || "GET").toUpperCase(),
                  extraParams: e.extraParams,
                  startParam: e.startParam,
                  endParam: e.endParam,
                  timeZoneParam: e.timeZoneParam
              },
              fetch(e, t, n) {
                  const {meta: r} = e.eventSource
                    , i = function(e, t, n) {
                      let r, i, o, s, {dateEnv: a, options: l} = n, d = {};
                      return r = e.startParam,
                      null == r && (r = l.startParam),
                      i = e.endParam,
                      null == i && (i = l.endParam),
                      o = e.timeZoneParam,
                      null == o && (o = l.timeZoneParam),
                      s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {},
                      Object.assign(d, s),
                      d[r] = a.formatIso(t.start),
                      d[i] = a.formatIso(t.end),
                      "local" !== a.timeZone && (d[o] = a.timeZone),
                      d
                  }(r, e.range, e.context);
                  gi(r.method, r.url, i).then((([e,n])=>{
                      t({
                          rawEvents: e,
                          response: n
                      })
                  }
                  ), n)
              }
          }]
      }), bs({
          name: "simple-recurring-event",
          recurringTypes: [{
              parse(e, t) {
                  if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                      let i, o = {
                          daysOfWeek: e.daysOfWeek || null,
                          startTime: e.startTime || null,
                          endTime: e.endTime || null,
                          startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                          endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                      };
                      return e.duration && (i = e.duration),
                      !i && e.startTime && e.endTime && (n = e.endTime,
                      r = e.startTime,
                      i = {
                          years: n.years - r.years,
                          months: n.months - r.months,
                          days: n.days - r.days,
                          milliseconds: n.milliseconds - r.milliseconds
                      }),
                      {
                          allDayGuess: Boolean(!e.startTime && !e.endTime),
                          duration: i,
                          typeData: o
                      }
                  }
                  var n, r;
                  return null
              },
              expand(e, t, n) {
                  let r = Jn(t, {
                      start: e.startRecur,
                      end: e.endRecur
                  });
                  return r ? function(e, t, n, r) {
                      let i = e ? wn(e) : null
                        , o = Tt(n.start)
                        , s = n.end
                        , a = [];
                      for (; o < s; ) {
                          let e;
                          i && !i[o.getUTCDay()] || (e = t ? r.add(o, t) : o,
                          a.push(e)),
                          o = Et(o, 1)
                      }
                      return a
                  }(e.daysOfWeek, e.startTime, r, n) : []
              }
          }],
          eventRefiners: {
              daysOfWeek: gn,
              startTime: ut,
              endTime: ut,
              duration: ut,
              startRecur: gn,
              endRecur: gn
          }
      }), bs({
          name: "change-handler",
          optionChangeHandlers: {
              events(e, t) {
                  Us([e], t)
              },
              eventSources: Us
          }
      }), bs({
          name: "misc",
          isLoadingFuncs: [e=>Ts(e.eventSources)],
          propSetHandlers: {
              dateProfile: function(e, t) {
                  t.emitter.trigger("datesSet", Object.assign(Object.assign({}, ui(e.activeRange, t.dateEnv)), {
                      view: t.viewApi
                  }))
              },
              eventStore: function(e, t) {
                  let {emitter: n} = t;
                  n.hasHandlers("eventsSet") && n.trigger("eventsSet", Qr(e, t))
              }
          }
      })];
      class Fs {
          constructor(e, t) {
              this.runTaskOption = e,
              this.drainedOption = t,
              this.queue = [],
              this.delayedRunner = new Oe(this.drain.bind(this))
          }
          request(e, t) {
              this.queue.push(e),
              this.delayedRunner.request(t)
          }
          pause(e) {
              this.delayedRunner.pause(e)
          }
          resume(e, t) {
              this.delayedRunner.resume(e, t)
          }
          drain() {
              let {queue: e} = this;
              for (; e.length; ) {
                  let t, n = [];
                  for (; t = e.shift(); )
                      this.runTask(t),
                      n.push(t);
                  this.drained(n)
              }
          }
          runTask(e) {
              this.runTaskOption && this.runTaskOption(e)
          }
          drained(e) {
              this.drainedOption && this.drainedOption(e)
          }
      }
      function Vs(e, t, n) {
          let r;
          return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange,
          n.formatRange(r.start, r.end, rn(t.titleFormat || function(e) {
              let {currentRangeUnit: t} = e;
              if ("year" === t)
                  return {
                      year: "numeric"
                  };
              if ("month" === t)
                  return {
                      year: "numeric",
                      month: "long"
                  };
              let n = Rt(e.currentRange.start, e.currentRange.end);
              return null !== n && n > 1 ? {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
              } : {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
              }
          }(e)), {
              isEndExclusive: e.isRangeAllDay,
              defaultSeparator: t.titleRangeSeparator
          })
      }
      class qs {
          constructor(e) {
              this.computeCurrentViewData = zt(this._computeCurrentViewData),
              this.organizeRawLocales = zt(ms),
              this.buildLocale = zt(vs),
              this.buildPluginHooks = function() {
                  let e, t = [], n = [];
                  return (r,i)=>(e && wt(r, t) && wt(i, n) || (e = function(e, t) {
                      let n = {}
                        , r = {
                          premiumReleaseDate: void 0,
                          reducers: [],
                          isLoadingFuncs: [],
                          contextInit: [],
                          eventRefiners: {},
                          eventDefMemberAdders: [],
                          eventSourceRefiners: {},
                          isDraggableTransformers: [],
                          eventDragMutationMassagers: [],
                          eventDefMutationAppliers: [],
                          dateSelectionTransformers: [],
                          datePointTransforms: [],
                          dateSpanTransforms: [],
                          views: {},
                          viewPropsTransformers: [],
                          isPropsValid: null,
                          externalDefTransforms: [],
                          viewContainerAppends: [],
                          eventDropTransformers: [],
                          componentInteractions: [],
                          calendarInteractions: [],
                          themeClasses: {},
                          eventSourceDefs: [],
                          cmdFormatter: null,
                          recurringTypes: [],
                          namedTimeZonedImpl: null,
                          initialView: "",
                          elementDraggingImpl: null,
                          optionChangeHandlers: {},
                          scrollGridImpl: null,
                          listenerRefiners: {},
                          optionRefiners: {},
                          propSetHandlers: {}
                      };
                      function i(e) {
                          for (let l of e) {
                              const e = l.name
                                , d = n[e];
                              void 0 === d ? (n[e] = l.id,
                              i(l.deps),
                              a = l,
                              r = {
                                  premiumReleaseDate: (t = (s = r).premiumReleaseDate,
                                  o = a.premiumReleaseDate,
                                  void 0 === t ? o : void 0 === o ? t : new Date(Math.max(t.valueOf(), o.valueOf()))),
                                  reducers: s.reducers.concat(a.reducers),
                                  isLoadingFuncs: s.isLoadingFuncs.concat(a.isLoadingFuncs),
                                  contextInit: s.contextInit.concat(a.contextInit),
                                  eventRefiners: Object.assign(Object.assign({}, s.eventRefiners), a.eventRefiners),
                                  eventDefMemberAdders: s.eventDefMemberAdders.concat(a.eventDefMemberAdders),
                                  eventSourceRefiners: Object.assign(Object.assign({}, s.eventSourceRefiners), a.eventSourceRefiners),
                                  isDraggableTransformers: s.isDraggableTransformers.concat(a.isDraggableTransformers),
                                  eventDragMutationMassagers: s.eventDragMutationMassagers.concat(a.eventDragMutationMassagers),
                                  eventDefMutationAppliers: s.eventDefMutationAppliers.concat(a.eventDefMutationAppliers),
                                  dateSelectionTransformers: s.dateSelectionTransformers.concat(a.dateSelectionTransformers),
                                  datePointTransforms: s.datePointTransforms.concat(a.datePointTransforms),
                                  dateSpanTransforms: s.dateSpanTransforms.concat(a.dateSpanTransforms),
                                  views: Object.assign(Object.assign({}, s.views), a.views),
                                  viewPropsTransformers: s.viewPropsTransformers.concat(a.viewPropsTransformers),
                                  isPropsValid: a.isPropsValid || s.isPropsValid,
                                  externalDefTransforms: s.externalDefTransforms.concat(a.externalDefTransforms),
                                  viewContainerAppends: s.viewContainerAppends.concat(a.viewContainerAppends),
                                  eventDropTransformers: s.eventDropTransformers.concat(a.eventDropTransformers),
                                  calendarInteractions: s.calendarInteractions.concat(a.calendarInteractions),
                                  componentInteractions: s.componentInteractions.concat(a.componentInteractions),
                                  themeClasses: Object.assign(Object.assign({}, s.themeClasses), a.themeClasses),
                                  eventSourceDefs: s.eventSourceDefs.concat(a.eventSourceDefs),
                                  cmdFormatter: a.cmdFormatter || s.cmdFormatter,
                                  recurringTypes: s.recurringTypes.concat(a.recurringTypes),
                                  namedTimeZonedImpl: a.namedTimeZonedImpl || s.namedTimeZonedImpl,
                                  initialView: s.initialView || a.initialView,
                                  elementDraggingImpl: s.elementDraggingImpl || a.elementDraggingImpl,
                                  optionChangeHandlers: Object.assign(Object.assign({}, s.optionChangeHandlers), a.optionChangeHandlers),
                                  scrollGridImpl: a.scrollGridImpl || s.scrollGridImpl,
                                  listenerRefiners: Object.assign(Object.assign({}, s.listenerRefiners), a.listenerRefiners),
                                  optionRefiners: Object.assign(Object.assign({}, s.optionRefiners), a.optionRefiners),
                                  propSetHandlers: Object.assign(Object.assign({}, s.propSetHandlers), a.propSetHandlers)
                              }) : d !== l.id && console.warn(`Duplicate plugin '${e}'`)
                          }
                          var t, o, s, a
                      }
                      return e && i(e),
                      i(t),
                      r
                  }(r, i)),
                  t = r,
                  n = i,
                  e)
              }(),
              this.buildDateEnv = zt(Ys),
              this.buildTheme = zt(Qs),
              this.parseToolbars = zt(Ws),
              this.buildViewSpecs = zt(Cs),
              this.buildDateProfileGenerator = Bt(Zs),
              this.buildViewApi = zt($s),
              this.buildViewUiProps = Bt(Ks),
              this.buildEventUiBySource = zt(Xs, xn),
              this.buildEventUiBases = zt(Js),
              this.parseContextBusinessHours = Bt(ta),
              this.buildTitle = zt(Vs),
              this.emitter = new Pr,
              this.actionRunner = new Fs(this._handleAction.bind(this),this.updateData.bind(this)),
              this.currentCalendarOptionsInput = {},
              this.currentCalendarOptionsRefined = {},
              this.currentViewOptionsInput = {},
              this.currentViewOptionsRefined = {},
              this.currentCalendarOptionsRefiners = {},
              this.optionsForRefining = [],
              this.optionsForHandling = [],
              this.getCurrentData = ()=>this.data,
              this.dispatch = e=>{
                  this.actionRunner.request(e)
              }
              ,
              this.props = e,
              this.actionRunner.pause();
              let t = {}
                , n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi)
                , r = n.calendarOptions.initialView || n.pluginHooks.initialView
                , i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
              e.calendarApi.currentDataManager = this,
              this.emitter.setThisContext(e.calendarApi),
              this.emitter.setOptions(i.options);
              let o = function(e, t) {
                  let n = e.initialDate;
                  return null != n ? t.createMarker(n) : sr(e.now, t)
              }(n.calendarOptions, n.dateEnv)
                , s = i.dateProfileGenerator.build(o);
              nr(s.activeRange, o) || (o = s.currentRange.start);
              let a = {
                  dateEnv: n.dateEnv,
                  options: n.calendarOptions,
                  pluginHooks: n.pluginHooks,
                  calendarApi: e.calendarApi,
                  dispatch: this.dispatch,
                  emitter: this.emitter,
                  getCurrentData: this.getCurrentData
              };
              for (let e of n.pluginHooks.contextInit)
                  e(a);
              let l = function(e, t, n) {
                  let r = t ? t.activeRange : null;
                  return As({}, function(e, t) {
                      let n = Mr(t)
                        , r = [].concat(e.eventSources || [])
                        , i = [];
                      e.initialEvents && r.unshift(e.initialEvents),
                      e.events && r.unshift(e.events);
                      for (let e of r) {
                          let r = _r(e, t, n);
                          r && i.push(r)
                      }
                      return i
                  }(e, n), r, n)
              }(n.calendarOptions, s, a)
                , d = {
                  dynamicOptionOverrides: t,
                  currentViewType: r,
                  currentDate: o,
                  dateProfile: s,
                  businessHours: this.parseContextBusinessHours(a),
                  eventSources: l,
                  eventUiBases: {},
                  eventStore: {
                      defs: {},
                      instances: {}
                  },
                  renderableEventStore: {
                      defs: {},
                      instances: {}
                  },
                  dateSelection: null,
                  eventSelection: "",
                  eventDrag: null,
                  eventResize: null,
                  selectionConfig: this.buildViewUiProps(a).selectionConfig
              }
                , c = Object.assign(Object.assign({}, a), d);
              for (let e of n.pluginHooks.reducers)
                  Object.assign(d, e(null, null, c));
              ea(d, a) && this.emitter.trigger("loading", !0),
              this.state = d,
              this.updateData(),
              this.actionRunner.resume()
          }
          resetOptions(e, t) {
              let {props: n} = this;
              void 0 === t ? n.optionOverrides = e : (n.optionOverrides = Object.assign(Object.assign({}, n.optionOverrides || {}), e),
              this.optionsForRefining.push(...t)),
              (void 0 === t || t.length) && this.actionRunner.request({
                  type: "NOTHING"
              })
          }
          _handleAction(e) {
              let {props: t, state: n, emitter: r} = this
                , i = function(e, t) {
                  return "SET_OPTION" === t.type ? Object.assign(Object.assign({}, e), {
                      [t.optionName]: t.rawOptionValue
                  }) : e
              }(n.dynamicOptionOverrides, e)
                , o = this.computeOptionsData(t.optionOverrides, i, t.calendarApi)
                , s = function(e, t) {
                  return "CHANGE_VIEW_TYPE" === t.type && (e = t.viewType),
                  e
              }(n.currentViewType, e)
                , a = this.computeCurrentViewData(s, o, t.optionOverrides, i);
              t.calendarApi.currentDataManager = this,
              r.setThisContext(t.calendarApi),
              r.setOptions(a.options);
              let l = {
                  dateEnv: o.dateEnv,
                  options: o.calendarOptions,
                  pluginHooks: o.pluginHooks,
                  calendarApi: t.calendarApi,
                  dispatch: this.dispatch,
                  emitter: r,
                  getCurrentData: this.getCurrentData
              }
                , {currentDate: d, dateProfile: c} = n;
              this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (c = a.dateProfileGenerator.build(d)),
              d = function(e, t) {
                  return "CHANGE_DATE" === t.type ? t.dateMarker : e
              }(d, e),
              c = function(e, t, n, r) {
                  let i;
                  switch (t.type) {
                  case "CHANGE_VIEW_TYPE":
                      return r.build(t.dateMarker || n);
                  case "CHANGE_DATE":
                      return r.build(t.dateMarker);
                  case "PREV":
                      if (i = r.buildPrev(e, n),
                      i.isValid)
                          return i;
                      break;
                  case "NEXT":
                      if (i = r.buildNext(e, n),
                      i.isValid)
                          return i
                  }
                  return e
              }(c, e, d, a.dateProfileGenerator),
              "PREV" !== e.type && "NEXT" !== e.type && nr(c.currentRange, d) || (d = c.currentRange.start);
              let u = function(e, t, n, r) {
                  let i = n ? n.activeRange : null;
                  switch (t.type) {
                  case "ADD_EVENT_SOURCES":
                      return As(e, t.sources, i, r);
                  case "REMOVE_EVENT_SOURCE":
                      return o = e,
                      s = t.sourceId,
                      yn(o, (e=>e.sourceId !== s));
                  case "PREV":
                  case "NEXT":
                  case "CHANGE_DATE":
                  case "CHANGE_VIEW_TYPE":
                      return n ? ks(e, i, r) : e;
                  case "FETCH_EVENT_SOURCES":
                      return _s(e, t.sourceIds ? wn(t.sourceIds) : Is(e, r), i, t.isRefetch || !1, r);
                  case "RECEIVE_EVENTS":
                  case "RECEIVE_EVENT_ERROR":
                      return function(e, t, n, r) {
                          let i = e[t];
                          return i && n === i.latestFetchId ? Object.assign(Object.assign({}, e), {
                              [t]: Object.assign(Object.assign({}, i), {
                                  isFetching: !1,
                                  fetchRange: r
                              })
                          }) : e
                      }(e, t.sourceId, t.fetchId, t.fetchRange);
                  case "REMOVE_ALL_EVENT_SOURCES":
                      return {};
                  default:
                      return e
                  }
                  var o, s
              }(n.eventSources, e, c, l)
                , h = function(e, t, n, r, i) {
                  switch (t.type) {
                  case "RECEIVE_EVENTS":
                      return function(e, t, n, r, i, o) {
                          if (t && n === t.latestFetchId) {
                              let n = yr(Ir(i, t, o), t, o);
                              return r && (n = dr(n, r, o)),
                              Sr(Nr(e, t.sourceId), n)
                          }
                          return e
                      }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
                  case "RESET_RAW_EVENTS":
                      return function(e, t, n, r, i) {
                          const {defIdMap: o, instanceIdMap: s} = function(e) {
                              const {defs: t, instances: n} = e
                                , r = {}
                                , i = {};
                              for (let e in t) {
                                  const n = t[e]
                                    , {publicId: i} = n;
                                  i && (r[i] = e)
                              }
                              for (let e in n) {
                                  const r = t[n[e].defId]
                                    , {publicId: o} = r;
                                  o && (i[o] = e)
                              }
                              return {
                                  defIdMap: r,
                                  instanceIdMap: i
                              }
                          }(e);
                          return dr(yr(Ir(n, t, i), t, i, !1, o, s), r, i)
                      }(e, n[t.sourceId], t.rawEvents, r.activeRange, i);
                  case "ADD_EVENTS":
                      return function(e, t, n, r) {
                          return n && (t = dr(t, n, r)),
                          Sr(e, t)
                      }(e, t.eventStore, r ? r.activeRange : null, i);
                  case "RESET_EVENTS":
                      return t.eventStore;
                  case "MERGE_EVENTS":
                      return Sr(e, t.eventStore);
                  case "PREV":
                  case "NEXT":
                  case "CHANGE_DATE":
                  case "CHANGE_VIEW_TYPE":
                      return r ? dr(e, r.activeRange, i) : e;
                  case "REMOVE_EVENTS":
                      return function(e, t) {
                          let {defs: n, instances: r} = e
                            , i = {}
                            , o = {};
                          for (let e in n)
                              t.defs[e] || (i[e] = n[e]);
                          for (let e in r)
                              !t.instances[e] && i[r[e].defId] && (o[e] = r[e]);
                          return {
                              defs: i,
                              instances: o
                          }
                      }(e, t.eventStore);
                  case "REMOVE_EVENT_SOURCE":
                      return Nr(e, t.sourceId);
                  case "REMOVE_ALL_EVENT_SOURCES":
                      return xr(e, (e=>!e.sourceId));
                  case "REMOVE_ALL_EVENTS":
                      return {
                          defs: {},
                          instances: {}
                      };
                  default:
                      return e
                  }
              }(n.eventStore, e, u, c, l)
                , f = Ts(u) && !a.options.progressiveEventRendering && n.renderableEventStore || h
                , {eventUiSingleBase: p, selectionConfig: g} = this.buildViewUiProps(l)
                , m = this.buildEventUiBySource(u)
                , v = {
                  dynamicOptionOverrides: i,
                  currentViewType: s,
                  currentDate: d,
                  dateProfile: c,
                  eventSources: u,
                  eventStore: h,
                  renderableEventStore: f,
                  selectionConfig: g,
                  eventUiBases: this.buildEventUiBases(f.defs, p, m),
                  businessHours: this.parseContextBusinessHours(l),
                  dateSelection: Os(n.dateSelection, e),
                  eventSelection: Ns(n.eventSelection, e),
                  eventDrag: Ps(n.eventDrag, e),
                  eventResize: Ls(n.eventResize, e)
              }
                , y = Object.assign(Object.assign({}, l), v);
              for (let t of o.pluginHooks.reducers)
                  Object.assign(v, t(n, e, y));
              let b = ea(n, l)
                , w = ea(v, l);
              !b && w ? r.trigger("loading", !0) : b && !w && r.trigger("loading", !1),
              this.state = v,
              t.onAction && t.onAction(e)
          }
          updateData() {
              let {props: e, state: t} = this
                , n = this.data
                , r = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi)
                , i = this.computeCurrentViewData(t.currentViewType, r, e.optionOverrides, t.dynamicOptionOverrides)
                , o = this.data = Object.assign(Object.assign(Object.assign({
                  viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
                  calendarApi: e.calendarApi,
                  dispatch: this.dispatch,
                  emitter: this.emitter,
                  getCurrentData: this.getCurrentData
              }, r), i), t)
                , s = r.pluginHooks.optionChangeHandlers
                , a = n && n.calendarOptions
                , l = r.calendarOptions;
              if (a && a !== l) {
                  a.timeZone !== l.timeZone && (t.eventSources = o.eventSources = function(e, t, n) {
                      let r = t ? t.activeRange : null;
                      return _s(e, Is(e, n), r, !0, n)
                  }(o.eventSources, t.dateProfile, o),
                  t.eventStore = o.eventStore = Or(o.eventStore, n.dateEnv, o.dateEnv),
                  t.renderableEventStore = o.renderableEventStore = Or(o.renderableEventStore, n.dateEnv, o.dateEnv));
                  for (let e in s)
                      -1 === this.optionsForHandling.indexOf(e) && a[e] === l[e] || s[e](l[e], o)
              }
              this.optionsForHandling = [],
              e.onData && e.onData(o)
          }
          computeOptionsData(e, t, n) {
              if (!this.optionsForRefining.length && e === this.stableOptionOverrides && t === this.stableDynamicOptionOverrides)
                  return this.stableCalendarOptionsData;
              let {refinedOptions: r, pluginHooks: i, localeDefaults: o, availableLocaleData: s, extra: a} = this.processRawCalendarOptions(e, t);
              na(a);
              let l = this.buildDateEnv(r.timeZone, r.locale, r.weekNumberCalculation, r.firstDay, r.weekText, i, s, r.defaultRangeSeparator)
                , d = this.buildViewSpecs(i.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, o)
                , c = this.buildTheme(r, i)
                , u = this.parseToolbars(r, this.stableOptionOverrides, c, d, n);
              return this.stableCalendarOptionsData = {
                  calendarOptions: r,
                  pluginHooks: i,
                  dateEnv: l,
                  viewSpecs: d,
                  theme: c,
                  toolbarConfig: u,
                  localeDefaults: o,
                  availableRawLocales: s.map
              }
          }
          processRawCalendarOptions(e, t) {
              let {locales: n, locale: r} = fn([sn, e, t])
                , i = this.organizeRawLocales(n)
                , o = i.map
                , s = this.buildLocale(r || i.defaultCode, o).options
                , a = this.buildPluginHooks(e.plugins || [], Gs)
                , l = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, on), an), ln), a.listenerRefiners), a.optionRefiners)
                , d = {}
                , c = fn([sn, s, e, t])
                , u = {}
                , h = this.currentCalendarOptionsInput
                , f = this.currentCalendarOptionsRefined
                , p = !1;
              for (let e in c)
                  -1 === this.optionsForRefining.indexOf(e) && (c[e] === h[e] || dn[e] && e in h && dn[e](h[e], c[e])) ? u[e] = f[e] : l[e] ? (u[e] = l[e](c[e]),
                  p = !0) : d[e] = h[e];
              return p && (this.currentCalendarOptionsInput = c,
              this.currentCalendarOptionsRefined = u,
              this.stableOptionOverrides = e,
              this.stableDynamicOptionOverrides = t),
              this.optionsForHandling.push(...this.optionsForRefining),
              this.optionsForRefining = [],
              {
                  rawOptions: this.currentCalendarOptionsInput,
                  refinedOptions: this.currentCalendarOptionsRefined,
                  pluginHooks: a,
                  availableLocaleData: i,
                  localeDefaults: s,
                  extra: d
              }
          }
          _computeCurrentViewData(e, t, n, r) {
              let i = t.viewSpecs[e];
              if (!i)
                  throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
              let {refinedOptions: o, extra: s} = this.processRawViewOptions(i, t.pluginHooks, t.localeDefaults, n, r);
              return na(s),
              {
                  viewSpec: i,
                  options: o,
                  dateProfileGenerator: this.buildDateProfileGenerator({
                      dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
                      duration: i.duration,
                      durationUnit: i.durationUnit,
                      usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
                      dateEnv: t.dateEnv,
                      calendarApi: this.props.calendarApi,
                      slotMinTime: o.slotMinTime,
                      slotMaxTime: o.slotMaxTime,
                      showNonCurrentDates: o.showNonCurrentDates,
                      dayCount: o.dayCount,
                      dateAlignment: o.dateAlignment,
                      dateIncrement: o.dateIncrement,
                      hiddenDays: o.hiddenDays,
                      weekends: o.weekends,
                      nowInput: o.now,
                      validRangeInput: o.validRange,
                      visibleRangeInput: o.visibleRange,
                      fixedWeekCount: o.fixedWeekCount
                  }),
                  viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
              }
          }
          processRawViewOptions(e, t, n, r, i) {
              let o = fn([sn, e.optionDefaults, n, r, e.optionOverrides, i])
                , s = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, on), an), ln), hn), t.listenerRefiners), t.optionRefiners)
                , a = {}
                , l = this.currentViewOptionsInput
                , d = this.currentViewOptionsRefined
                , c = !1
                , u = {};
              for (let e in o)
                  o[e] === l[e] || dn[e] && dn[e](o[e], l[e]) ? a[e] = d[e] : (o[e] === this.currentCalendarOptionsInput[e] || dn[e] && dn[e](o[e], this.currentCalendarOptionsInput[e]) ? e in this.currentCalendarOptionsRefined && (a[e] = this.currentCalendarOptionsRefined[e]) : s[e] ? a[e] = s[e](o[e]) : u[e] = o[e],
                  c = !0);
              return c && (this.currentViewOptionsInput = o,
              this.currentViewOptionsRefined = a),
              {
                  rawOptions: this.currentViewOptionsInput,
                  refinedOptions: this.currentViewOptionsRefined,
                  extra: u
              }
          }
      }
      function Ys(e, t, n, r, i, o, s, a) {
          let l = vs(t || s.defaultCode, s.map);
          return new _n({
              calendarSystem: "gregory",
              timeZone: e,
              namedTimeZoneImpl: o.namedTimeZonedImpl,
              locale: l,
              weekNumberCalculation: n,
              firstDay: r,
              weekText: i,
              cmdFormatter: o.cmdFormatter,
              defaultSeparator: a
          })
      }
      function Qs(e, t) {
          return new (t.themeClasses[e.themeSystem] || ws)(e)
      }
      function Zs(e) {
          return new (e.dateProfileGeneratorClass || ar)(e)
      }
      function $s(e, t, n) {
          return new Bs(e,t,n)
      }
      function Xs(e) {
          return bn(e, (e=>e.ui))
      }
      function Js(e, t, n) {
          let r = {
              "": t
          };
          for (let t in e) {
              let i = e[t];
              i.sourceId && n[i.sourceId] && (r[t] = n[i.sourceId])
          }
          return r
      }
      function Ks(e) {
          let {options: t} = e;
          return {
              eventUiSingleBase: Rr({
                  display: t.eventDisplay,
                  editable: t.editable,
                  startEditable: t.eventStartEditable,
                  durationEditable: t.eventDurationEditable,
                  constraint: t.eventConstraint,
                  overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                  allow: t.eventAllow,
                  backgroundColor: t.eventBackgroundColor,
                  borderColor: t.eventBorderColor,
                  textColor: t.eventTextColor,
                  color: t.eventColor
              }, e),
              selectionConfig: Rr({
                  constraint: t.selectConstraint,
                  overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                  allow: t.selectAllow
              }, e)
          }
      }
      function ea(e, t) {
          for (let n of t.pluginHooks.isLoadingFuncs)
              if (n(e))
                  return !0;
          return !1
      }
      function ta(e) {
          return Wr(e.options.businessHours, e)
      }
      function na(e, t) {
          for (let n in e)
              console.warn(`Unknown option '${n}'` + (t ? ` for view '${t}'` : ""))
      }
      class ra extends jn {
          render() {
              return y("div", {
                  className: "fc-toolbar-chunk"
              }, ...this.props.widgetGroups.map((e=>this.renderWidgetGroup(e))))
          }
          renderWidgetGroup(e) {
              let {props: t} = this
                , {theme: n} = this.context
                , r = []
                , i = !0;
              for (let o of e) {
                  let {buttonName: e, buttonClick: s, buttonText: a, buttonIcon: l, buttonHint: d} = o;
                  if ("title" === e)
                      i = !1,
                      r.push(y("h2", {
                          className: "fc-toolbar-title",
                          id: t.titleId
                      }, t.title));
                  else {
                      let i = e === t.activeButton
                        , o = !t.isTodayEnabled && "today" === e || !t.isPrevEnabled && "prev" === e || !t.isNextEnabled && "next" === e
                        , c = [`fc-${e}-button`, n.getClass("button")];
                      i && c.push(n.getClass("buttonActive")),
                      r.push(y("button", {
                          type: "button",
                          title: "function" == typeof d ? d(t.navUnit) : d,
                          disabled: o,
                          "aria-pressed": i,
                          className: c.join(" "),
                          onClick: s
                      }, a || (l ? y("span", {
                          className: l,
                          role: "img"
                      }) : "")))
                  }
              }
              return r.length > 1 ? y("div", {
                  className: i && n.getClass("buttonGroup") || ""
              }, ...r) : r[0]
          }
      }
      class ia extends jn {
          render() {
              let e, t, {model: n, extraClassName: r} = this.props, i = !1, o = n.sectionWidgets, s = o.center;
              return o.left ? (i = !0,
              e = o.left) : e = o.start,
              o.right ? (i = !0,
              t = o.right) : t = o.end,
              y("div", {
                  className: [r || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
              }, this.renderSection("start", e || []), this.renderSection("center", s || []), this.renderSection("end", t || []))
          }
          renderSection(e, t) {
              let {props: n} = this;
              return y(ra, {
                  key: e,
                  widgetGroups: t,
                  title: n.title,
                  navUnit: n.navUnit,
                  activeButton: n.activeButton,
                  isTodayEnabled: n.isTodayEnabled,
                  isPrevEnabled: n.isPrevEnabled,
                  isNextEnabled: n.isNextEnabled,
                  titleId: n.titleId
              })
          }
      }
      class oa extends jn {
          constructor() {
              super(...arguments),
              this.state = {
                  availableWidth: null
              },
              this.handleEl = e=>{
                  this.el = e,
                  zn(this.props.elRef, e),
                  this.updateAvailableWidth()
              }
              ,
              this.handleResize = ()=>{
                  this.updateAvailableWidth()
              }
          }
          render() {
              let {props: e, state: t} = this
                , {aspectRatio: n} = e
                , r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"]
                , i = ""
                , o = "";
              return n ? null !== t.availableWidth ? i = t.availableWidth / n : o = 1 / n * 100 + "%" : i = e.height || "",
              y("div", {
                  "aria-labelledby": e.labeledById,
                  ref: this.handleEl,
                  className: r.join(" "),
                  style: {
                      height: i,
                      paddingBottom: o
                  }
              }, e.children)
          }
          componentDidMount() {
              this.context.addResizeHandler(this.handleResize)
          }
          componentWillUnmount() {
              this.context.removeResizeHandler(this.handleResize)
          }
          updateAvailableWidth() {
              this.el && this.props.aspectRatio && this.setState({
                  availableWidth: this.el.offsetWidth
              })
          }
      }
      class sa extends bi {
          constructor(e) {
              super(e),
              this.handleSegClick = (e,t)=>{
                  let {component: n} = this
                    , {context: r} = n
                    , i = Xr(t);
                  if (i && n.isValidSegDownEl(e.target)) {
                      let o = Pe(e.target, ".fc-event-forced-url")
                        , s = o ? o.querySelector("a[href]").href : "";
                      r.emitter.trigger("eventClick", {
                          el: t,
                          event: new qr(n.context,i.eventRange.def,i.eventRange.instance),
                          jsEvent: e,
                          view: r.viewApi
                      }),
                      s && !e.defaultPrevented && (window.location.href = s)
                  }
              }
              ,
              this.destroy = qe(e.el, "click", ".fc-event", this.handleSegClick)
          }
      }
      class aa extends bi {
          constructor(e) {
              super(e),
              this.handleEventElRemove = e=>{
                  e === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl)
              }
              ,
              this.handleSegEnter = (e,t)=>{
                  Xr(t) && (this.currentSegEl = t,
                  this.triggerEvent("eventMouseEnter", e, t))
              }
              ,
              this.handleSegLeave = (e,t)=>{
                  this.currentSegEl && (this.currentSegEl = null,
                  this.triggerEvent("eventMouseLeave", e, t))
              }
              ,
              this.removeHoverListeners = function(e, t, n, r) {
                  let i;
                  return qe(e, "mouseover", ".fc-event", ((e,t)=>{
                      if (t !== i) {
                          i = t,
                          n(e, t);
                          let o = e=>{
                              i = null,
                              r(e, t),
                              t.removeEventListener("mouseleave", o)
                          }
                          ;
                          t.addEventListener("mouseleave", o)
                      }
                  }
                  ))
              }(e.el, 0, this.handleSegEnter, this.handleSegLeave)
          }
          destroy() {
              this.removeHoverListeners()
          }
          triggerEvent(e, t, n) {
              let {component: r} = this
                , {context: i} = r
                , o = Xr(n);
              t && !r.isValidSegDownEl(t.target) || i.emitter.trigger(e, {
                  el: n,
                  event: new qr(i,o.eventRange.def,o.eventRange.instance),
                  jsEvent: t,
                  view: i.viewApi
              })
          }
      }
      class la extends Wn {
          constructor() {
              super(...arguments),
              this.buildViewContext = zt(Ln),
              this.buildViewPropTransformers = zt(ca),
              this.buildToolbarProps = zt(da),
              this.headerRef = {
                  current: null
              },
              this.footerRef = {
                  current: null
              },
              this.interactionsStore = {},
              this.state = {
                  viewLabelId: Fe()
              },
              this.registerInteractiveComponent = (e,t)=>{
                  let n = function(e, t) {
                      return {
                          component: e,
                          el: t.el,
                          useEventCenter: null == t.useEventCenter || t.useEventCenter,
                          isHitComboAllowed: t.isHitComboAllowed || null
                      }
                  }(e, t)
                    , r = [sa, aa].concat(this.props.pluginHooks.componentInteractions).map((e=>new e(n)));
                  this.interactionsStore[e.uid] = r,
                  Si[e.uid] = n
              }
              ,
              this.unregisterInteractiveComponent = e=>{
                  let t = this.interactionsStore[e.uid];
                  if (t) {
                      for (let e of t)
                          e.destroy();
                      delete this.interactionsStore[e.uid]
                  }
                  delete Si[e.uid]
              }
              ,
              this.resizeRunner = new Oe((()=>{
                  this.props.emitter.trigger("_resize", !0),
                  this.props.emitter.trigger("windowResize", {
                      view: this.props.viewApi
                  })
              }
              )),
              this.handleWindowResize = e=>{
                  let {options: t} = this.props;
                  t.handleWindowResize && e.target === window && this.resizeRunner.request(t.windowResizeDelay)
              }
          }
          render() {
              let e, {props: t} = this, {toolbarConfig: n, options: r} = t, i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, sr(t.options.now, t.dateEnv), t.viewTitle), o = !1, s = "";
              t.isHeightAuto || t.forPrint ? s = "" : null != r.height ? o = !0 : null != r.contentHeight ? s = r.contentHeight : e = Math.max(r.aspectRatio, .5);
              let a = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent)
                , l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
              return y(Pn.Provider, {
                  value: a
              }, n.header && y(ia, Object.assign({
                  ref: this.headerRef,
                  extraClassName: "fc-header-toolbar",
                  model: n.header,
                  titleId: l
              }, i)), y(oa, {
                  liquid: o,
                  height: s,
                  aspectRatio: e,
                  labeledById: l
              }, this.renderView(t), this.buildAppendContent()), n.footer && y(ia, Object.assign({
                  ref: this.footerRef,
                  extraClassName: "fc-footer-toolbar",
                  model: n.footer,
                  titleId: ""
              }, i)))
          }
          componentDidMount() {
              let {props: e} = this;
              this.calendarInteractions = e.pluginHooks.calendarInteractions.map((t=>new t(e))),
              window.addEventListener("resize", this.handleWindowResize);
              let {propSetHandlers: t} = e.pluginHooks;
              for (let n in t)
                  t[n](e[n], e)
          }
          componentDidUpdate(e) {
              let {props: t} = this
                , {propSetHandlers: n} = t.pluginHooks;
              for (let r in n)
                  t[r] !== e[r] && n[r](t[r], t)
          }
          componentWillUnmount() {
              window.removeEventListener("resize", this.handleWindowResize),
              this.resizeRunner.clear();
              for (let e of this.calendarInteractions)
                  e.destroy();
              this.props.emitter.trigger("_unmount")
          }
          buildAppendContent() {
              let {props: e} = this;
              return y(w, {}, ...e.pluginHooks.viewContainerAppends.map((t=>t(e))))
          }
          renderView(e) {
              let {pluginHooks: t} = e
                , {viewSpec: n} = e
                , r = {
                  dateProfile: e.dateProfile,
                  businessHours: e.businessHours,
                  eventStore: e.renderableEventStore,
                  eventUiBases: e.eventUiBases,
                  dateSelection: e.dateSelection,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize,
                  isHeightAuto: e.isHeightAuto,
                  forPrint: e.forPrint
              }
                , i = this.buildViewPropTransformers(t.viewPropsTransformers);
              for (let t of i)
                  Object.assign(r, t.transform(r, e));
              return y(n.component, Object.assign({}, r))
          }
      }
      function da(e, t, n, r, i, o) {
          let s = n.build(i, void 0, !1)
            , a = n.buildPrev(t, r, !1)
            , l = n.buildNext(t, r, !1);
          return {
              title: o,
              activeButton: e.type,
              navUnit: e.singleUnit,
              isTodayEnabled: s.isValid && !nr(t.currentRange, i),
              isPrevEnabled: a.isValid,
              isNextEnabled: l.isValid
          }
      }
      function ca(e) {
          return e.map((e=>new e))
      }
      class ua extends xi {
          constructor(e, t={}) {
              super(),
              this.isRendering = !1,
              this.isRendered = !1,
              this.currentClassNames = [],
              this.customContentRenderId = 0,
              this.handleAction = e=>{
                  switch (e.type) {
                  case "SET_EVENT_DRAG":
                  case "SET_EVENT_RESIZE":
                      this.renderRunner.tryDrain()
                  }
              }
              ,
              this.handleData = e=>{
                  this.currentData = e,
                  this.renderRunner.request(e.calendarOptions.rerenderDelay)
              }
              ,
              this.handleRenderRequest = ()=>{
                  if (this.isRendering) {
                      this.isRendered = !0;
                      let {currentData: e} = this;
                      In((()=>{
                          U(y(yi, {
                              options: e.calendarOptions,
                              theme: e.theme,
                              emitter: e.emitter
                          }, ((t,n,r,i)=>(this.setClassNames(t),
                          this.setHeight(n),
                          y(Vn.Provider, {
                              value: this.customContentRenderId
                          }, y(la, Object.assign({
                              isHeightAuto: r,
                              forPrint: i
                          }, e)))))), this.el)
                      }
                      ))
                  } else
                      this.isRendered && (this.isRendered = !1,
                      U(null, this.el),
                      this.setClassNames([]),
                      this.setHeight(""))
              }
              ,
              function(e) {
                  e.isConnected && Me(e.getRootNode())
              }(e),
              this.el = e,
              this.renderRunner = new Oe(this.handleRenderRequest),
              new qs({
                  optionOverrides: t,
                  calendarApi: this,
                  onAction: this.handleAction,
                  onData: this.handleData
              })
          }
          render() {
              let e = this.isRendering;
              e ? this.customContentRenderId += 1 : this.isRendering = !0,
              this.renderRunner.request(),
              e && this.updateSize()
          }
          destroy() {
              this.isRendering && (this.isRendering = !1,
              this.renderRunner.request())
          }
          updateSize() {
              In((()=>{
                  super.updateSize()
              }
              ))
          }
          batchRendering(e) {
              this.renderRunner.pause("batchRendering"),
              e(),
              this.renderRunner.resume("batchRendering")
          }
          pauseRendering() {
              this.renderRunner.pause("pauseRendering")
          }
          resumeRendering() {
              this.renderRunner.resume("pauseRendering", !0)
          }
          resetOptions(e, t) {
              this.currentDataManager.resetOptions(e, t)
          }
          setClassNames(e) {
              if (!wt(e, this.currentClassNames)) {
                  let {classList: t} = this.el;
                  for (let e of this.currentClassNames)
                      t.remove(e);
                  for (let n of e)
                      t.add(n);
                  this.currentClassNames = e
              }
          }
          setHeight(e) {
              Be(this.el, "height", e)
          }
      }
      class ha extends Zi {
          constructor() {
              super(...arguments),
              this.headerElRef = {
                  current: null
              }
          }
          renderSimpleLayout(e, t) {
              let {props: n, context: r} = this
                , i = []
                , o = Go(r.options);
              return e && i.push({
                  type: "header",
                  key: "header",
                  isSticky: o,
                  chunk: {
                      elRef: this.headerElRef,
                      tableClassName: "fc-col-header",
                      rowContent: e
                  }
              }),
              i.push({
                  type: "body",
                  key: "body",
                  liquid: !0,
                  chunk: {
                      content: t
                  }
              }),
              y(Qn, {
                  elClasses: ["fc-daygrid"],
                  viewSpec: r.viewSpec
              }, y(Vo, {
                  liquid: !n.isHeightAuto && !n.forPrint,
                  collapsibleWidth: n.forPrint,
                  cols: [],
                  sections: i
              }))
          }
          renderHScrollLayout(e, t, n, r) {
              let i = this.context.pluginHooks.scrollGridImpl;
              if (!i)
                  throw new Error("No ScrollGrid implementation");
              let {props: o, context: s} = this
                , a = !o.forPrint && Go(s.options)
                , l = !o.forPrint && Fo(s.options)
                , d = [];
              return e && d.push({
                  type: "header",
                  key: "header",
                  isSticky: a,
                  chunks: [{
                      key: "main",
                      elRef: this.headerElRef,
                      tableClassName: "fc-col-header",
                      rowContent: e
                  }]
              }),
              d.push({
                  type: "body",
                  key: "body",
                  liquid: !0,
                  chunks: [{
                      key: "main",
                      content: t
                  }]
              }),
              l && d.push({
                  type: "footer",
                  key: "footer",
                  isSticky: !0,
                  chunks: [{
                      key: "main",
                      content: Uo
                  }]
              }),
              y(Qn, {
                  elClasses: ["fc-daygrid"],
                  viewSpec: s.viewSpec
              }, y(i, {
                  liquid: !o.isHeightAuto && !o.forPrint,
                  forPrint: o.forPrint,
                  collapsibleWidth: o.forPrint,
                  colGroups: [{
                      cols: [{
                          span: n,
                          minWidth: r
                      }]
                  }],
                  sections: d
              }))
          }
      }
      function fa(e, t) {
          let n = [];
          for (let e = 0; e < t; e += 1)
              n[e] = [];
          for (let t of e)
              n[t.row].push(t);
          return n
      }
      function pa(e, t) {
          let n = [];
          for (let e = 0; e < t; e += 1)
              n[e] = [];
          for (let t of e)
              n[t.firstCol].push(t);
          return n
      }
      function ga(e, t) {
          let n = [];
          if (e) {
              for (let r = 0; r < t; r += 1)
                  n[r] = {
                      affectedInstances: e.affectedInstances,
                      isEvent: e.isEvent,
                      segs: []
                  };
              for (let t of e.segs)
                  n[t.row].segs.push(t)
          } else
              for (let e = 0; e < t; e += 1)
                  n[e] = null;
          return n
      }
      const ma = rn({
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: !0,
          meridiem: "narrow"
      });
      function va(e) {
          let {display: t} = e.eventRange.ui;
          return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
      }
      class ya extends jn {
          render() {
              let {props: e} = this;
              return y(Yo, Object.assign({}, e, {
                  elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
                  defaultTimeFormat: ma,
                  defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                  disableResizing: !e.seg.eventRange.def.allDay
              }))
          }
      }
      class ba extends jn {
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , {seg: r} = e
                , i = oi(r, n.eventTimeFormat || ma, t, !0, e.defaultDisplayEventEnd);
              return y(qo, Object.assign({}, e, {
                  elTag: "a",
                  elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
                  elAttrs: di(e.seg, t),
                  defaultGenerator: wa,
                  timeText: i,
                  isResizing: !1,
                  isDateSelecting: !1
              }))
          }
      }
      function wa(e) {
          return y(w, null, y("div", {
              className: "fc-daygrid-event-dot",
              style: {
                  borderColor: e.borderColor || e.backgroundColor
              }
          }), e.timeText && y("div", {
              className: "fc-event-time"
          }, e.timeText), y("div", {
              className: "fc-event-title"
          }, e.event.title || y(w, null, " ")))
      }
      class Sa extends jn {
          constructor() {
              super(...arguments),
              this.compileSegs = zt(xa)
          }
          render() {
              let {props: e} = this
                , {allSegs: t, invisibleSegs: n} = this.compileSegs(e.singlePlacements);
              return y(as, {
                  elClasses: ["fc-daygrid-more-link"],
                  dateProfile: e.dateProfile,
                  todayRange: e.todayRange,
                  allDayDate: e.allDayDate,
                  moreCnt: e.moreCnt,
                  allSegs: t,
                  hiddenSegs: n,
                  alignmentElRef: e.alignmentElRef,
                  alignGridTop: e.alignGridTop,
                  extraDateSpan: e.extraDateSpan,
                  popoverContent: ()=>{
                      let n = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
                      return y(w, null, t.map((t=>{
                          let r = t.eventRange.instance.instanceId;
                          return y("div", {
                              className: "fc-daygrid-event-harness",
                              key: r,
                              style: {
                                  visibility: n[r] ? "hidden" : ""
                              }
                          }, va(t) ? y(ba, Object.assign({
                              seg: t,
                              isDragging: !1,
                              isSelected: r === e.eventSelection,
                              defaultDisplayEventEnd: !1
                          }, si(t, e.todayRange))) : y(ya, Object.assign({
                              seg: t,
                              isDragging: !1,
                              isResizing: !1,
                              isDateSelecting: !1,
                              isSelected: r === e.eventSelection,
                              defaultDisplayEventEnd: !1
                          }, si(t, e.todayRange))))
                      }
                      )))
                  }
              })
          }
      }
      function xa(e) {
          let t = []
            , n = [];
          for (let r of e)
              t.push(r.seg),
              r.isVisible || n.push(r.seg);
          return {
              allSegs: t,
              invisibleSegs: n
          }
      }
      const Ea = rn({
          week: "narrow"
      });
      class Da extends Zi {
          constructor() {
              super(...arguments),
              this.rootElRef = {
                  current: null
              },
              this.state = {
                  dayNumberId: Fe()
              },
              this.handleRootEl = e=>{
                  zn(this.rootElRef, e),
                  zn(this.props.elRef, e)
              }
          }
          render() {
              let {context: e, props: t, state: n, rootElRef: r} = this
                , {options: i, dateEnv: o} = e
                , {date: s, dateProfile: a} = t;
              const l = t.showDayNumber && function(e, t, n) {
                  const {start: r, end: i} = t
                    , o = Dt(i, -1)
                    , s = n.getYear(r)
                    , a = n.getMonth(r)
                    , l = n.getYear(o)
                    , d = n.getMonth(o);
                  return !(s === l && a === d) && Boolean(e.valueOf() === r.valueOf() || 1 === n.getDay(e) && e.valueOf() < i.valueOf())
              }(s, a.currentRange, o);
              return y(Xo, {
                  elTag: "td",
                  elRef: this.handleRootEl,
                  elClasses: ["fc-daygrid-day", ...t.extraClassNames || []],
                  elAttrs: Object.assign(Object.assign(Object.assign({}, t.extraDataAttrs), t.showDayNumber ? {
                      "aria-labelledby": n.dayNumberId
                  } : {}), {
                      role: "gridcell"
                  }),
                  defaultGenerator: Ca,
                  date: s,
                  dateProfile: a,
                  todayRange: t.todayRange,
                  showDayNumber: t.showDayNumber,
                  isMonthStart: l,
                  extraRenderProps: t.extraRenderProps
              }, ((o,a)=>y("div", {
                  ref: t.innerElRef,
                  className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                  style: {
                      minHeight: t.minHeight
                  }
              }, t.showWeekNumber && y(rs, {
                  elTag: "a",
                  elClasses: ["fc-daygrid-week-number"],
                  elAttrs: Oi(e, s, "week"),
                  date: s,
                  defaultFormat: Ea
              }), !a.isDisabled && (t.showDayNumber || Jo(i) || t.forceDayTop) ? y("div", {
                  className: "fc-daygrid-day-top"
              }, y(o, {
                  elTag: "a",
                  elClasses: ["fc-daygrid-day-number", l && "fc-daygrid-month-start"],
                  elAttrs: Object.assign(Object.assign({}, Oi(e, s)), {
                      id: n.dayNumberId
                  })
              })) : t.showDayNumber ? y("div", {
                  className: "fc-daygrid-day-top",
                  style: {
                      visibility: "hidden"
                  }
              }, y("a", {
                  className: "fc-daygrid-day-number"
              }, " ")) : void 0, y("div", {
                  className: "fc-daygrid-day-events",
                  ref: t.fgContentElRef
              }, t.fgContent, y("div", {
                  className: "fc-daygrid-day-bottom",
                  style: {
                      marginTop: t.moreMarginTop
                  }
              }, y(Sa, {
                  allDayDate: s,
                  singlePlacements: t.singlePlacements,
                  moreCnt: t.moreCnt,
                  alignmentElRef: r,
                  alignGridTop: !t.showDayNumber,
                  extraDateSpan: t.extraDateSpan,
                  dateProfile: t.dateProfile,
                  eventSelection: t.eventSelection,
                  eventDrag: t.eventDrag,
                  eventResize: t.eventResize,
                  todayRange: t.todayRange
              }))), y("div", {
                  className: "fc-daygrid-day-bg"
              }, t.bgContent))))
          }
      }
      function Ca(e) {
          return e.dayNumberText || y(w, null, " ")
      }
      function Ra(e) {
          return e.eventRange.instance.instanceId + ":" + e.firstCol
      }
      function Ta(e) {
          return Ra(e) + ":" + e.lastCol
      }
      function Aa(e, t, n, r) {
          if (e.firstCol === t && e.lastCol === n - 1)
              return e;
          let i = e.eventRange
            , o = i.range
            , s = Jn(o, {
              start: r[t].date,
              end: Et(r[n - 1].date, 1)
          });
          return Object.assign(Object.assign({}, e), {
              firstCol: t,
              lastCol: n - 1,
              eventRange: {
                  def: i.def,
                  ui: Object.assign(Object.assign({}, i.ui), {
                      durationEditable: !1
                  }),
                  instance: i.instance,
                  range: s
              },
              isStart: e.isStart && s.start.valueOf() === o.start.valueOf(),
              isEnd: e.isEnd && s.end.valueOf() === o.end.valueOf()
          })
      }
      class ka extends $i {
          constructor() {
              super(...arguments),
              this.hiddenConsumes = !1,
              this.forceHidden = {}
          }
          addSegs(e) {
              const t = super.addSegs(e)
                , {entriesByLevel: n} = this
                , r = e=>!this.forceHidden[Ji(e)];
              for (let e = 0; e < n.length; e += 1)
                  n[e] = n[e].filter(r);
              return t
          }
          handleInvalidInsertion(e, t, n) {
              const {entriesByLevel: r, forceHidden: i} = this
                , {touchingEntry: o, touchingLevel: s, touchingLateral: a} = e;
              if (this.hiddenConsumes && o) {
                  const e = Ji(o);
                  if (!i[e])
                      if (this.allowReslicing) {
                          const e = Object.assign(Object.assign({}, o), {
                              span: eo(o.span, t.span)
                          });
                          i[Ji(e)] = !0,
                          r[s][a] = e,
                          this.splitEntry(o, t, n)
                      } else
                          i[e] = !0,
                          n.push(o)
              }
              return super.handleInvalidInsertion(e, t, n)
          }
      }
      class _a extends Zi {
          constructor() {
              super(...arguments),
              this.cellElRefs = new Mo,
              this.frameElRefs = new Mo,
              this.fgElRefs = new Mo,
              this.segHarnessRefs = new Mo,
              this.rootElRef = {
                  current: null
              },
              this.state = {
                  framePositions: null,
                  maxContentHeight: null,
                  segHeights: {}
              },
              this.handleResize = e=>{
                  e && this.updateSizing(!0)
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , {options: r} = n
                , i = e.cells.length
                , o = pa(e.businessHourSegs, i)
                , s = pa(e.bgEventSegs, i)
                , a = pa(this.getHighlightSegs(), i)
                , l = pa(this.getMirrorSegs(), i)
                , {singleColPlacements: d, multiColPlacements: c, moreCnts: u, moreMarginTops: h} = function(e, t, n, r, i, o, s) {
                  let a = new ka((t=>{
                      let n = e[t.index].eventRange.instance.instanceId + ":" + t.span.start + ":" + (t.span.end - 1);
                      return i[n]
                  }
                  ));
                  a.allowReslicing = !0,
                  a.strictOrder = r,
                  !0 === t || !0 === n ? (a.maxCoord = o,
                  a.hiddenConsumes = !0) : "number" == typeof t ? a.maxStackCnt = t : "number" == typeof n && (a.maxStackCnt = n,
                  a.hiddenConsumes = !0);
                  let l = []
                    , d = [];
                  for (let t = 0; t < e.length; t += 1) {
                      let n = e[t]
                        , r = Ta(n);
                      null != i[r] ? l.push({
                          index: t,
                          span: {
                              start: n.firstCol,
                              end: n.lastCol + 1
                          }
                      }) : d.push(n)
                  }
                  let c = a.addSegs(l)
                    , u = a.toRects()
                    , {singleColPlacements: h, multiColPlacements: f, leftoverMargins: p} = function(e, t, n) {
                      let r = function(e, t) {
                          let n = [];
                          for (let e = 0; e < t; e += 1)
                              n.push([]);
                          for (let t of e)
                              for (let e = t.span.start; e < t.span.end; e += 1)
                                  n[e].push(t);
                          return n
                      }(e, n.length)
                        , i = []
                        , o = []
                        , s = [];
                      for (let e = 0; e < n.length; e += 1) {
                          let a = r[e]
                            , l = []
                            , d = 0
                            , c = 0;
                          for (let r of a) {
                              let i = t[r.index];
                              l.push({
                                  seg: Aa(i, e, e + 1, n),
                                  isVisible: !0,
                                  isAbsolute: !1,
                                  absoluteTop: r.levelCoord,
                                  marginTop: r.levelCoord - d
                              }),
                              d = r.levelCoord + r.thickness
                          }
                          let u = [];
                          d = 0,
                          c = 0;
                          for (let r of a) {
                              let i = t[r.index]
                                , o = r.span.end - r.span.start > 1
                                , s = r.span.start === e;
                              c += r.levelCoord - d,
                              d = r.levelCoord + r.thickness,
                              o ? (c += r.thickness,
                              s && u.push({
                                  seg: Aa(i, r.span.start, r.span.end, n),
                                  isVisible: !0,
                                  isAbsolute: !0,
                                  absoluteTop: r.levelCoord,
                                  marginTop: 0
                              })) : s && (u.push({
                                  seg: Aa(i, r.span.start, r.span.end, n),
                                  isVisible: !0,
                                  isAbsolute: !1,
                                  absoluteTop: r.levelCoord,
                                  marginTop: c
                              }),
                              c = 0)
                          }
                          i.push(l),
                          o.push(u),
                          s.push(c)
                      }
                      return {
                          singleColPlacements: i,
                          multiColPlacements: o,
                          leftoverMargins: s
                      }
                  }(u, e, s)
                    , g = []
                    , m = [];
                  for (let e of d) {
                      f[e.firstCol].push({
                          seg: e,
                          isVisible: !1,
                          isAbsolute: !0,
                          absoluteTop: 0,
                          marginTop: 0
                      });
                      for (let t = e.firstCol; t <= e.lastCol; t += 1)
                          h[t].push({
                              seg: Aa(e, t, t + 1, s),
                              isVisible: !1,
                              isAbsolute: !1,
                              absoluteTop: 0,
                              marginTop: 0
                          })
                  }
                  for (let e = 0; e < s.length; e += 1)
                      g.push(0);
                  for (let t of c) {
                      let n = e[t.index]
                        , r = t.span;
                      f[r.start].push({
                          seg: Aa(n, r.start, r.end, s),
                          isVisible: !1,
                          isAbsolute: !0,
                          absoluteTop: 0,
                          marginTop: 0
                      });
                      for (let e = r.start; e < r.end; e += 1)
                          g[e] += 1,
                          h[e].push({
                              seg: Aa(n, e, e + 1, s),
                              isVisible: !1,
                              isAbsolute: !1,
                              absoluteTop: 0,
                              marginTop: 0
                          })
                  }
                  for (let e = 0; e < s.length; e += 1)
                      m.push(p[e]);
                  return {
                      singleColPlacements: h,
                      multiColPlacements: f,
                      moreCnts: g,
                      moreMarginTops: m
                  }
              }(ei(e.fgEventSegs, r.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, r.eventOrderStrict, t.segHeights, t.maxContentHeight, e.cells)
                , f = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
              return y("tr", {
                  ref: this.rootElRef,
                  role: "row"
              }, e.renderIntro && e.renderIntro(), e.cells.map(((t,n)=>{
                  let r = this.renderFgSegs(n, e.forPrint ? d[n] : c[n], e.todayRange, f)
                    , i = this.renderFgSegs(n, function(e, t) {
                      if (!e.length)
                          return [];
                      let n = function(e) {
                          let t = {};
                          for (let n of e)
                              for (let e of n)
                                  t[e.seg.eventRange.instance.instanceId] = e.absoluteTop;
                          return t
                      }(t);
                      return e.map((e=>({
                          seg: e,
                          isVisible: !0,
                          isAbsolute: !0,
                          absoluteTop: n[e.eventRange.instance.instanceId],
                          marginTop: 0
                      })))
                  }(l[n], c), e.todayRange, {}, Boolean(e.eventDrag), Boolean(e.eventResize), !1);
                  return y(Da, {
                      key: t.key,
                      elRef: this.cellElRefs.createRef(t.key),
                      innerElRef: this.frameElRefs.createRef(t.key),
                      dateProfile: e.dateProfile,
                      date: t.date,
                      showDayNumber: e.showDayNumbers,
                      showWeekNumber: e.showWeekNumbers && 0 === n,
                      forceDayTop: e.showWeekNumbers,
                      todayRange: e.todayRange,
                      eventSelection: e.eventSelection,
                      eventDrag: e.eventDrag,
                      eventResize: e.eventResize,
                      extraRenderProps: t.extraRenderProps,
                      extraDataAttrs: t.extraDataAttrs,
                      extraClassNames: t.extraClassNames,
                      extraDateSpan: t.extraDateSpan,
                      moreCnt: u[n],
                      moreMarginTop: h[n],
                      singlePlacements: d[n],
                      fgContentElRef: this.fgElRefs.createRef(t.key),
                      fgContent: y(w, null, y(w, null, r), y(w, null, i)),
                      bgContent: y(w, null, this.renderFillSegs(a[n], "highlight"), this.renderFillSegs(o[n], "non-business"), this.renderFillSegs(s[n], "bg-event")),
                      minHeight: e.cellMinHeight
                  })
              }
              )))
          }
          componentDidMount() {
              this.updateSizing(!0),
              this.context.addResizeHandler(this.handleResize)
          }
          componentDidUpdate(e, t) {
              let n = this.props;
              this.updateSizing(!xn(e, n))
          }
          componentWillUnmount() {
              this.context.removeResizeHandler(this.handleResize)
          }
          getHighlightSegs() {
              let {props: e} = this;
              return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
          }
          getMirrorSegs() {
              let {props: e} = this;
              return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
          }
          renderFgSegs(e, t, n, r, i, o, s) {
              let {context: a} = this
                , {eventSelection: l} = this.props
                , {framePositions: d} = this.state
                , c = 1 === this.props.cells.length
                , u = i || o || s
                , h = [];
              if (d)
                  for (let e of t) {
                      let {seg: t} = e
                        , {instanceId: f} = t.eventRange.instance
                        , p = e.isVisible && !r[f]
                        , g = e.isAbsolute
                        , m = ""
                        , v = "";
                      g && (a.isRtl ? (v = 0,
                      m = d.lefts[t.lastCol] - d.lefts[t.firstCol]) : (m = 0,
                      v = d.rights[t.firstCol] - d.rights[t.lastCol])),
                      h.push(y("div", {
                          className: "fc-daygrid-event-harness" + (g ? " fc-daygrid-event-harness-abs" : ""),
                          key: Ra(t),
                          ref: u ? null : this.segHarnessRefs.createRef(Ta(t)),
                          style: {
                              visibility: p ? "" : "hidden",
                              marginTop: g ? "" : e.marginTop,
                              top: g ? e.absoluteTop : "",
                              left: m,
                              right: v
                          }
                      }, va(t) ? y(ba, Object.assign({
                          seg: t,
                          isDragging: i,
                          isSelected: f === l,
                          defaultDisplayEventEnd: c
                      }, si(t, n))) : y(ya, Object.assign({
                          seg: t,
                          isDragging: i,
                          isResizing: o,
                          isDateSelecting: s,
                          isSelected: f === l,
                          defaultDisplayEventEnd: c
                      }, si(t, n)))))
                  }
              return h
          }
          renderFillSegs(e, t) {
              let {isRtl: n} = this.context
                , {todayRange: r} = this.props
                , {framePositions: i} = this.state
                , o = [];
              if (i)
                  for (let s of e) {
                      let e = n ? {
                          right: 0,
                          left: i.lefts[s.lastCol] - i.lefts[s.firstCol]
                      } : {
                          left: 0,
                          right: i.rights[s.firstCol] - i.rights[s.lastCol]
                      };
                      o.push(y("div", {
                          key: li(s.eventRange),
                          className: "fc-daygrid-bg-harness",
                          style: e
                      }, "bg-event" === t ? y(es, Object.assign({
                          seg: s
                      }, si(s, r))) : ns(t)))
                  }
              return y(w, {}, ...o)
          }
          updateSizing(e) {
              let {props: t, state: n, frameElRefs: r} = this;
              if (!t.forPrint && null !== t.clientWidth) {
                  if (e) {
                      let e = t.cells.map((e=>r.currentMap[e.key]));
                      if (e.length) {
                          let t = this.rootElRef.current
                            , r = new Fi(t,e,!0,!1);
                          n.framePositions && n.framePositions.similarTo(r) || this.setState({
                              framePositions: new Fi(t,e,!0,!1)
                          })
                      }
                  }
                  const i = this.state.segHeights
                    , o = this.querySegHeights()
                    , s = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                  this.safeSetState({
                      segHeights: Object.assign(Object.assign({}, i), o),
                      maxContentHeight: s ? this.computeMaxContentHeight() : null
                  })
              }
          }
          querySegHeights() {
              let e = this.segHarnessRefs.currentMap
                , t = {};
              for (let n in e) {
                  let r = Math.round(e[n].getBoundingClientRect().height);
                  t[n] = Math.max(t[n] || 0, r)
              }
              return t
          }
          computeMaxContentHeight() {
              let e = this.props.cells[0].key
                , t = this.cellElRefs.currentMap[e]
                , n = this.fgElRefs.currentMap[e];
              return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
          }
          getCellEls() {
              let e = this.cellElRefs.currentMap;
              return this.props.cells.map((t=>e[t.key]))
          }
      }
      _a.addStateEquality({
          segHeights: xn
      });
      class Ma extends Zi {
          constructor() {
              super(...arguments),
              this.splitBusinessHourSegs = zt(fa),
              this.splitBgEventSegs = zt(fa),
              this.splitFgEventSegs = zt(fa),
              this.splitDateSelectionSegs = zt(fa),
              this.splitEventDrag = zt(ga),
              this.splitEventResize = zt(ga),
              this.rowRefs = new Mo
          }
          render() {
              let {props: e, context: t} = this
                , n = e.cells.length
                , r = this.splitBusinessHourSegs(e.businessHourSegs, n)
                , i = this.splitBgEventSegs(e.bgEventSegs, n)
                , o = this.splitFgEventSegs(e.fgEventSegs, n)
                , s = this.splitDateSelectionSegs(e.dateSelectionSegs, n)
                , a = this.splitEventDrag(e.eventDrag, n)
                , l = this.splitEventResize(e.eventResize, n)
                , d = n >= 7 && e.clientWidth ? e.clientWidth / t.options.aspectRatio / 6 : null;
              return y(po, {
                  unit: "day"
              }, ((t,c)=>y(w, null, e.cells.map(((t,u)=>y(_a, {
                  ref: this.rowRefs.createRef(u),
                  key: t.length ? t[0].date.toISOString() : u,
                  showDayNumbers: n > 1,
                  showWeekNumbers: e.showWeekNumbers,
                  todayRange: c,
                  dateProfile: e.dateProfile,
                  cells: t,
                  renderIntro: e.renderRowIntro,
                  businessHourSegs: r[u],
                  eventSelection: e.eventSelection,
                  bgEventSegs: i[u].filter(Ia),
                  fgEventSegs: o[u],
                  dateSelectionSegs: s[u],
                  eventDrag: a[u],
                  eventResize: l[u],
                  dayMaxEvents: e.dayMaxEvents,
                  dayMaxEventRows: e.dayMaxEventRows,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  cellMinHeight: d,
                  forPrint: e.forPrint
              }))))))
          }
          componentDidMount() {
              this.registerInteractiveComponent()
          }
          componentDidUpdate() {
              this.registerInteractiveComponent()
          }
          registerInteractiveComponent() {
              if (!this.rootEl) {
                  const e = this.rowRefs.currentMap[0].getCellEls()[0]
                    , t = e ? e.closest(".fc-daygrid-body") : null;
                  t && (this.rootEl = t,
                  this.context.registerInteractiveComponent(this, {
                      el: t,
                      isHitComboAllowed: this.props.isHitComboAllowed
                  }))
              }
          }
          componentWillUnmount() {
              this.rootEl && (this.context.unregisterInteractiveComponent(this),
              this.rootEl = null)
          }
          prepareHits() {
              this.rowPositions = new Fi(this.rootEl,this.rowRefs.collect().map((e=>e.getCellEls()[0])),!1,!0),
              this.colPositions = new Fi(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)
          }
          queryHit(e, t) {
              let {colPositions: n, rowPositions: r} = this
                , i = n.leftToIndex(e)
                , o = r.topToIndex(t);
              if (null != o && null != i) {
                  let e = this.props.cells[o][i];
                  return {
                      dateProfile: this.props.dateProfile,
                      dateSpan: Object.assign({
                          range: this.getCellRange(o, i),
                          allDay: !0
                      }, e.extraDateSpan),
                      dayEl: this.getCellEl(o, i),
                      rect: {
                          left: n.lefts[i],
                          right: n.rights[i],
                          top: r.tops[o],
                          bottom: r.bottoms[o]
                      },
                      layer: 0
                  }
              }
              return null
          }
          getCellEl(e, t) {
              return this.rowRefs.currentMap[e].getCellEls()[t]
          }
          getCellRange(e, t) {
              let n = this.props.cells[e][t].date;
              return {
                  start: n,
                  end: Et(n, 1)
              }
          }
      }
      function Ia(e) {
          return e.eventRange.def.allDay
      }
      class Ha extends Zi {
          constructor() {
              super(...arguments),
              this.elRef = {
                  current: null
              },
              this.needsScrollReset = !1
          }
          render() {
              let {props: e} = this
                , {dayMaxEventRows: t, dayMaxEvents: n, expandRows: r} = e
                , i = !0 === n || !0 === t;
              i && !r && (i = !1,
              t = null,
              n = null);
              let o = ["fc-daygrid-body", i ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", r ? "" : "fc-daygrid-body-natural"];
              return y("div", {
                  ref: this.elRef,
                  className: o.join(" "),
                  style: {
                      width: e.clientWidth,
                      minWidth: e.tableMinWidth
                  }
              }, y("table", {
                  role: "presentation",
                  className: "fc-scrollgrid-sync-table",
                  style: {
                      width: e.clientWidth,
                      minWidth: e.tableMinWidth,
                      height: r ? e.clientHeight : ""
                  }
              }, e.colGroupNode, y("tbody", {
                  role: "presentation"
              }, y(Ma, {
                  dateProfile: e.dateProfile,
                  cells: e.cells,
                  renderRowIntro: e.renderRowIntro,
                  showWeekNumbers: e.showWeekNumbers,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  businessHourSegs: e.businessHourSegs,
                  bgEventSegs: e.bgEventSegs,
                  fgEventSegs: e.fgEventSegs,
                  dateSelectionSegs: e.dateSelectionSegs,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize,
                  dayMaxEvents: n,
                  dayMaxEventRows: t,
                  forPrint: e.forPrint,
                  isHitComboAllowed: e.isHitComboAllowed
              }))))
          }
          componentDidMount() {
              this.requestScrollReset()
          }
          componentDidUpdate(e) {
              e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset()
          }
          requestScrollReset() {
              this.needsScrollReset = !0,
              this.flushScrollReset()
          }
          flushScrollReset() {
              if (this.needsScrollReset && this.props.clientWidth) {
                  const e = function(e, t) {
                      let n;
                      return t.currentRangeUnit.match(/year|month/) && (n = e.querySelector(`[data-date="${Wt(t.currentDate)}-01"]`)),
                      n || (n = e.querySelector(`[data-date="${Lt(t.currentDate)}"]`)),
                      n
                  }(this.elRef.current, this.props.dateProfile);
                  if (e) {
                      const t = e.closest(".fc-daygrid-body")
                        , n = t.closest(".fc-scroller")
                        , r = e.getBoundingClientRect().top - t.getBoundingClientRect().top;
                      n.scrollTop = r ? r + 1 : 0
                  }
                  this.needsScrollReset = !1
              }
          }
      }
      class Oa extends wo {
          constructor() {
              super(...arguments),
              this.forceDayIfListItem = !0
          }
          sliceRange(e, t) {
              return t.sliceRange(e)
          }
      }
      class Na extends Zi {
          constructor() {
              super(...arguments),
              this.slicer = new Oa,
              this.tableRef = {
                  current: null
              }
          }
          render() {
              let {props: e, context: t} = this;
              return y(Ha, Object.assign({
                  ref: this.tableRef
              }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                  dateProfile: e.dateProfile,
                  cells: e.dayTableModel.cells,
                  colGroupNode: e.colGroupNode,
                  tableMinWidth: e.tableMinWidth,
                  renderRowIntro: e.renderRowIntro,
                  dayMaxEvents: e.dayMaxEvents,
                  dayMaxEventRows: e.dayMaxEventRows,
                  showWeekNumbers: e.showWeekNumbers,
                  expandRows: e.expandRows,
                  headerAlignElRef: e.headerAlignElRef,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  forPrint: e.forPrint
              }))
          }
      }
      function Pa(e, t) {
          let n = new yo(e.renderRange,t);
          return new bo(n,/year|month|week/.test(e.currentRangeUnit))
      }
      class La extends ar {
          buildRenderRange(e, t, n) {
              let r = super.buildRenderRange(e, t, n)
                , {props: i} = this;
              return Wa({
                  currentRange: r,
                  snapToWeek: /^(year|month)$/.test(t),
                  fixedWeekCount: i.fixedWeekCount,
                  dateEnv: i.dateEnv
              })
          }
      }
      function Wa(e) {
          let t, {dateEnv: n, currentRange: r} = e, {start: i, end: o} = r;
          if (e.snapToWeek && (i = n.startOfWeek(i),
          t = n.startOfWeek(o),
          t.valueOf() !== o.valueOf() && (o = xt(t, 1))),
          e.fixedWeekCount) {
              let e = n.startOfWeek(n.startOfMonth(Et(r.end, -1)));
              o = xt(o, 6 - Math.ceil(Ct(e, o) / 7))
          }
          return {
              start: i,
              end: o
          }
      }
      _e(':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}');
      var ja = bs({
          name: "@fullcalendar/daygrid",
          initialView: "dayGridMonth",
          views: {
              dayGrid: {
                  component: class extends ha {
                      constructor() {
                          super(...arguments),
                          this.buildDayTableModel = zt(Pa),
                          this.headerRef = {
                              current: null
                          },
                          this.tableRef = {
                              current: null
                          }
                      }
                      render() {
                          let {options: e, dateProfileGenerator: t} = this.context
                            , {props: n} = this
                            , r = this.buildDayTableModel(n.dateProfile, t)
                            , i = e.dayHeaders && y(mo, {
                              ref: this.headerRef,
                              dateProfile: n.dateProfile,
                              dates: r.headerDates,
                              datesRepDistinctDays: 1 === r.rowCnt
                          })
                            , o = t=>y(Na, {
                              ref: this.tableRef,
                              dateProfile: n.dateProfile,
                              dayTableModel: r,
                              businessHours: n.businessHours,
                              dateSelection: n.dateSelection,
                              eventStore: n.eventStore,
                              eventUiBases: n.eventUiBases,
                              eventSelection: n.eventSelection,
                              eventDrag: n.eventDrag,
                              eventResize: n.eventResize,
                              nextDayThreshold: e.nextDayThreshold,
                              colGroupNode: t.tableColGroupNode,
                              tableMinWidth: t.tableMinWidth,
                              dayMaxEvents: e.dayMaxEvents,
                              dayMaxEventRows: e.dayMaxEventRows,
                              showWeekNumbers: e.weekNumbers,
                              expandRows: !n.isHeightAuto,
                              headerAlignElRef: this.headerElRef,
                              clientWidth: t.clientWidth,
                              clientHeight: t.clientHeight,
                              forPrint: n.forPrint
                          });
                          return e.dayMinWidth ? this.renderHScrollLayout(i, o, r.colCnt, e.dayMinWidth) : this.renderSimpleLayout(i, o)
                      }
                  }
                  ,
                  dateProfileGeneratorClass: La
              },
              dayGridDay: {
                  type: "dayGrid",
                  duration: {
                      days: 1
                  }
              },
              dayGridWeek: {
                  type: "dayGrid",
                  duration: {
                      weeks: 1
                  }
              },
              dayGridMonth: {
                  type: "dayGrid",
                  duration: {
                      months: 1
                  },
                  fixedWeekCount: !0
              },
              dayGridYear: {
                  type: "dayGrid",
                  duration: {
                      years: 1
                  }
              }
          }
      });
      _e('.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}');
      class za extends Ti {
          getKeyInfo() {
              return {
                  allDay: {},
                  timed: {}
              }
          }
          getKeysForDateSpan(e) {
              return e.allDay ? ["allDay"] : ["timed"]
          }
          getKeysForEventDef(e) {
              return e.allDay ? "background" === (t = e).ui.display || "inverse-background" === t.ui.display ? ["timed", "allDay"] : ["allDay"] : ["timed"];
              var t
          }
      }
      const Ba = rn({
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: !0,
          meridiem: "short"
      });
      function Ua(e) {
          let t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
          return y(Pn.Consumer, null, (n=>{
              if (!e.isLabeled)
                  return y("td", {
                      className: t.join(" "),
                      "data-time": e.isoTimeStr
                  });
              let {dateEnv: r, options: i, viewApi: o} = n
                , s = null == i.slotLabelFormat ? Ba : Array.isArray(i.slotLabelFormat) ? rn(i.slotLabelFormat[0]) : rn(i.slotLabelFormat)
                , a = {
                  level: 0,
                  time: e.time,
                  date: r.toDate(e.date),
                  view: o,
                  text: r.format(e.date, s)
              };
              return y(qn, {
                  elTag: "td",
                  elClasses: t,
                  elAttrs: {
                      "data-time": e.isoTimeStr
                  },
                  renderProps: a,
                  generatorName: "slotLabelContent",
                  customGenerator: i.slotLabelContent,
                  defaultGenerator: Ga,
                  classNameGenerator: i.slotLabelClassNames,
                  didMount: i.slotLabelDidMount,
                  willUnmount: i.slotLabelWillUnmount
              }, (e=>y("div", {
                  className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
              }, y(e, {
                  elTag: "div",
                  elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
              }))))
          }
          ))
      }
      function Ga(e) {
          return e.text
      }
      class Fa extends jn {
          render() {
              return this.props.slatMetas.map((e=>y("tr", {
                  key: e.key
              }, y(Ua, Object.assign({}, e)))))
          }
      }
      const Va = rn({
          week: "short"
      });
      class qa extends Zi {
          constructor() {
              super(...arguments),
              this.allDaySplitter = new za,
              this.headerElRef = {
                  current: null
              },
              this.rootElRef = {
                  current: null
              },
              this.scrollerElRef = {
                  current: null
              },
              this.state = {
                  slatCoords: null
              },
              this.handleScrollTopRequest = e=>{
                  let t = this.scrollerElRef.current;
                  t && (t.scrollTop = e)
              }
              ,
              this.renderHeadAxis = (e,t="")=>{
                  let {options: n} = this.context
                    , {dateProfile: r} = this.props
                    , i = r.renderRange
                    , o = 1 === Ct(i.start, i.end) ? Oi(this.context, i.start, "week") : {};
                  return n.weekNumbers && "day" === e ? y(rs, {
                      elTag: "th",
                      elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                      elAttrs: {
                          "aria-hidden": !0
                      },
                      date: i.start,
                      defaultFormat: Va
                  }, (e=>y("div", {
                      className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", "fc-timegrid-axis-frame-liquid"].join(" "),
                      style: {
                          height: t
                      }
                  }, y(e, {
                      elTag: "a",
                      elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"],
                      elAttrs: o
                  })))) : y("th", {
                      "aria-hidden": !0,
                      className: "fc-timegrid-axis"
                  }, y("div", {
                      className: "fc-timegrid-axis-frame",
                      style: {
                          height: t
                      }
                  }))
              }
              ,
              this.renderTableRowAxis = e=>{
                  let {options: t, viewApi: n} = this.context
                    , r = {
                      text: t.allDayText,
                      view: n
                  };
                  return y(qn, {
                      elTag: "td",
                      elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                      elAttrs: {
                          "aria-hidden": !0
                      },
                      renderProps: r,
                      generatorName: "allDayContent",
                      customGenerator: t.allDayContent,
                      defaultGenerator: Ya,
                      classNameGenerator: t.allDayClassNames,
                      didMount: t.allDayDidMount,
                      willUnmount: t.allDayWillUnmount
                  }, (t=>y("div", {
                      className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", null == e ? " fc-timegrid-axis-frame-liquid" : ""].join(" "),
                      style: {
                          height: e
                      }
                  }, y(t, {
                      elTag: "span",
                      elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"]
                  }))))
              }
              ,
              this.handleSlatCoords = e=>{
                  this.setState({
                      slatCoords: e
                  })
              }
          }
          renderSimpleLayout(e, t, n) {
              let {context: r, props: i} = this
                , o = []
                , s = Go(r.options);
              return e && o.push({
                  type: "header",
                  key: "header",
                  isSticky: s,
                  chunk: {
                      elRef: this.headerElRef,
                      tableClassName: "fc-col-header",
                      rowContent: e
                  }
              }),
              t && (o.push({
                  type: "body",
                  key: "all-day",
                  chunk: {
                      content: t
                  }
              }),
              o.push({
                  type: "body",
                  key: "all-day-divider",
                  outerContent: y("tr", {
                      role: "presentation",
                      className: "fc-scrollgrid-section"
                  }, y("td", {
                      className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
                  }))
              })),
              o.push({
                  type: "body",
                  key: "body",
                  liquid: !0,
                  expandRows: Boolean(r.options.expandRows),
                  chunk: {
                      scrollerElRef: this.scrollerElRef,
                      content: n
                  }
              }),
              y(Qn, {
                  elRef: this.rootElRef,
                  elClasses: ["fc-timegrid"],
                  viewSpec: r.viewSpec
              }, y(Vo, {
                  liquid: !i.isHeightAuto && !i.forPrint,
                  collapsibleWidth: i.forPrint,
                  cols: [{
                      width: "shrink"
                  }],
                  sections: o
              }))
          }
          renderHScrollLayout(e, t, n, r, i, o, s) {
              let a = this.context.pluginHooks.scrollGridImpl;
              if (!a)
                  throw new Error("No ScrollGrid implementation");
              let {context: l, props: d} = this
                , c = !d.forPrint && Go(l.options)
                , u = !d.forPrint && Fo(l.options)
                , h = [];
              e && h.push({
                  type: "header",
                  key: "header",
                  isSticky: c,
                  syncRowHeights: !0,
                  chunks: [{
                      key: "axis",
                      rowContent: e=>y("tr", {
                          role: "presentation"
                      }, this.renderHeadAxis("day", e.rowSyncHeights[0]))
                  }, {
                      key: "cols",
                      elRef: this.headerElRef,
                      tableClassName: "fc-col-header",
                      rowContent: e
                  }]
              }),
              t && (h.push({
                  type: "body",
                  key: "all-day",
                  syncRowHeights: !0,
                  chunks: [{
                      key: "axis",
                      rowContent: e=>y("tr", {
                          role: "presentation"
                      }, this.renderTableRowAxis(e.rowSyncHeights[0]))
                  }, {
                      key: "cols",
                      content: t
                  }]
              }),
              h.push({
                  key: "all-day-divider",
                  type: "body",
                  outerContent: y("tr", {
                      role: "presentation",
                      className: "fc-scrollgrid-section"
                  }, y("td", {
                      colSpan: 2,
                      className: "fc-timegrid-divider " + l.theme.getClass("tableCellShaded")
                  }))
              }));
              let f = l.options.nowIndicator;
              return h.push({
                  type: "body",
                  key: "body",
                  liquid: !0,
                  expandRows: Boolean(l.options.expandRows),
                  chunks: [{
                      key: "axis",
                      content: e=>y("div", {
                          className: "fc-timegrid-axis-chunk"
                      }, y("table", {
                          "aria-hidden": !0,
                          style: {
                              height: e.expandRows ? e.clientHeight : ""
                          }
                      }, e.tableColGroupNode, y("tbody", null, y(Fa, {
                          slatMetas: o
                      }))), y("div", {
                          className: "fc-timegrid-now-indicator-container"
                      }, y(po, {
                          unit: f ? "minute" : "day"
                      }, (e=>{
                          let t = f && s && s.safeComputeTop(e);
                          return "number" == typeof t ? y(Zo, {
                              elClasses: ["fc-timegrid-now-indicator-arrow"],
                              elStyle: {
                                  top: t
                              },
                              isAxis: !0,
                              date: e
                          }) : null
                      }
                      ))))
                  }, {
                      key: "cols",
                      scrollerElRef: this.scrollerElRef,
                      content: n
                  }]
              }),
              u && h.push({
                  key: "footer",
                  type: "footer",
                  isSticky: !0,
                  chunks: [{
                      key: "axis",
                      content: Uo
                  }, {
                      key: "cols",
                      content: Uo
                  }]
              }),
              y(Qn, {
                  elRef: this.rootElRef,
                  elClasses: ["fc-timegrid"],
                  viewSpec: l.viewSpec
              }, y(a, {
                  liquid: !d.isHeightAuto && !d.forPrint,
                  forPrint: d.forPrint,
                  collapsibleWidth: !1,
                  colGroups: [{
                      width: "shrink",
                      cols: [{
                          width: "shrink"
                      }]
                  }, {
                      cols: [{
                          span: r,
                          minWidth: i
                      }]
                  }],
                  sections: h
              }))
          }
          getAllDayMaxEventProps() {
              let {dayMaxEvents: e, dayMaxEventRows: t} = this.context.options;
              return !0 !== e && !0 !== t || (e = void 0,
              t = 5),
              {
                  dayMaxEvents: e,
                  dayMaxEventRows: t
              }
          }
      }
      function Ya(e) {
          return e.text
      }
      class Qa {
          constructor(e, t, n) {
              this.positions = e,
              this.dateProfile = t,
              this.slotDuration = n
          }
          safeComputeTop(e) {
              let {dateProfile: t} = this;
              if (nr(t.currentRange, e)) {
                  let n = Tt(e)
                    , r = e.valueOf() - n.valueOf();
                  if (r >= vt(t.slotMinTime) && r < vt(t.slotMaxTime))
                      return this.computeTimeTop(ut(r))
              }
              return null
          }
          computeDateTop(e, t) {
              return t || (t = Tt(e)),
              this.computeTimeTop(ut(e.valueOf() - t.valueOf()))
          }
          computeTimeTop(e) {
              let t, n, {positions: r, dateProfile: i} = this, o = r.els.length, s = (e.milliseconds - vt(i.slotMinTime)) / vt(this.slotDuration);
              return s = Math.max(0, s),
              s = Math.min(o, s),
              t = Math.floor(s),
              t = Math.min(t, o - 1),
              n = s - t,
              r.tops[t] + r.getHeight(t) * n
          }
      }
      class Za extends jn {
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , {slatElRefs: r} = e;
              return y("tbody", null, e.slatMetas.map(((i,o)=>{
                  let s = {
                      time: i.time,
                      date: t.dateEnv.toDate(i.date),
                      view: t.viewApi
                  };
                  return y("tr", {
                      key: i.key,
                      ref: r.createRef(i.key)
                  }, e.axis && y(Ua, Object.assign({}, i)), y(qn, {
                      elTag: "td",
                      elClasses: ["fc-timegrid-slot", "fc-timegrid-slot-lane", !i.isLabeled && "fc-timegrid-slot-minor"],
                      elAttrs: {
                          "data-time": i.isoTimeStr
                      },
                      renderProps: s,
                      generatorName: "slotLaneContent",
                      customGenerator: n.slotLaneContent,
                      classNameGenerator: n.slotLaneClassNames,
                      didMount: n.slotLaneDidMount,
                      willUnmount: n.slotLaneWillUnmount
                  }))
              }
              )))
          }
      }
      class $a extends jn {
          constructor() {
              super(...arguments),
              this.rootElRef = {
                  current: null
              },
              this.slatElRefs = new Mo
          }
          render() {
              let {props: e, context: t} = this;
              return y("div", {
                  ref: this.rootElRef,
                  className: "fc-timegrid-slots"
              }, y("table", {
                  "aria-hidden": !0,
                  className: t.theme.getClass("table"),
                  style: {
                      minWidth: e.tableMinWidth,
                      width: e.clientWidth,
                      height: e.minHeight
                  }
              }, e.tableColGroupNode, y(Za, {
                  slatElRefs: this.slatElRefs,
                  axis: e.axis,
                  slatMetas: e.slatMetas
              })))
          }
          componentDidMount() {
              this.updateSizing()
          }
          componentDidUpdate() {
              this.updateSizing()
          }
          componentWillUnmount() {
              this.props.onCoords && this.props.onCoords(null)
          }
          updateSizing() {
              let {context: e, props: t} = this;
              var n;
              t.onCoords && null !== t.clientWidth && this.rootElRef.current.offsetHeight && t.onCoords(new Qa(new Fi(this.rootElRef.current,(n = this.slatElRefs.currentMap,
              t.slatMetas.map((e=>n[e.key]))),!1,!0),this.props.dateProfile,e.options.slotDuration))
          }
      }
      function Xa(e, t) {
          let n, r = [];
          for (n = 0; n < t; n += 1)
              r.push([]);
          if (e)
              for (n = 0; n < e.length; n += 1)
                  r[e[n].col].push(e[n]);
          return r
      }
      function Ja(e, t) {
          let n = [];
          if (e) {
              for (let r = 0; r < t; r += 1)
                  n[r] = {
                      affectedInstances: e.affectedInstances,
                      isEvent: e.isEvent,
                      segs: []
                  };
              for (let t of e.segs)
                  n[t.col].segs.push(t)
          } else
              for (let e = 0; e < t; e += 1)
                  n[e] = null;
          return n
      }
      class Ka extends jn {
          render() {
              let {props: e} = this;
              return y(as, {
                  elClasses: ["fc-timegrid-more-link"],
                  elStyle: {
                      top: e.top,
                      bottom: e.bottom
                  },
                  allDayDate: null,
                  moreCnt: e.hiddenSegs.length,
                  allSegs: e.hiddenSegs,
                  hiddenSegs: e.hiddenSegs,
                  extraDateSpan: e.extraDateSpan,
                  dateProfile: e.dateProfile,
                  todayRange: e.todayRange,
                  popoverContent: ()=>dl(e.hiddenSegs, e),
                  defaultGenerator: el,
                  forceTimed: !0
              }, (e=>y(e, {
                  elTag: "div",
                  elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
              })))
          }
      }
      function el(e) {
          return e.shortText
      }
      function tl(e, t) {
          if (!e)
              return [[], 0];
          let {level: n, lateralStart: r, lateralEnd: i} = e
            , o = r
            , s = [];
          for (; o < i; )
              s.push(t(n, o)),
              o += 1;
          return s.sort(nl),
          [s.map(rl), s[0][1]]
      }
      function nl(e, t) {
          return t[1] - e[1]
      }
      function rl(e) {
          return e[0]
      }
      function il(e, t) {
          const n = {};
          return (...r)=>{
              let i = e(...r);
              return i in n ? n[i] : n[i] = t(...r)
          }
      }
      function ol(e, t, n=null, r=0) {
          let i = [];
          if (n)
              for (let o = 0; o < e.length; o += 1) {
                  let s = e[o]
                    , a = n.computeDateTop(s.start, t)
                    , l = Math.max(a + (r || 0), n.computeDateTop(s.end, t));
                  i.push({
                      start: Math.round(a),
                      end: Math.round(l)
                  })
              }
          return i
      }
      const sl = rn({
          hour: "numeric",
          minute: "2-digit",
          meridiem: !1
      });
      class al extends jn {
          render() {
              return y(Yo, Object.assign({}, this.props, {
                  elClasses: ["fc-timegrid-event", "fc-v-event", this.props.isShort && "fc-timegrid-event-short"],
                  defaultTimeFormat: sl
              }))
          }
      }
      class ll extends jn {
          constructor() {
              super(...arguments),
              this.sortEventSegs = zt(ei)
          }
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , r = n.selectMirror
                , i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || r && e.dateSelectionSegs || []
                , o = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}
                , s = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
              return y(Xo, {
                  elTag: "td",
                  elRef: e.elRef,
                  elClasses: ["fc-timegrid-col", ...e.extraClassNames || []],
                  elAttrs: Object.assign({
                      role: "gridcell"
                  }, e.extraDataAttrs),
                  date: e.date,
                  dateProfile: e.dateProfile,
                  todayRange: e.todayRange,
                  extraRenderProps: e.extraRenderProps
              }, (t=>y("div", {
                  className: "fc-timegrid-col-frame"
              }, y("div", {
                  className: "fc-timegrid-col-bg"
              }, this.renderFillSegs(e.businessHourSegs, "non-business"), this.renderFillSegs(e.bgEventSegs, "bg-event"), this.renderFillSegs(e.dateSelectionSegs, "highlight")), y("div", {
                  className: "fc-timegrid-col-events"
              }, this.renderFgSegs(s, o, !1, !1, !1)), y("div", {
                  className: "fc-timegrid-col-events"
              }, this.renderFgSegs(i, {}, Boolean(e.eventDrag), Boolean(e.eventResize), Boolean(r), "mirror")), y("div", {
                  className: "fc-timegrid-now-indicator-container"
              }, this.renderNowIndicator(e.nowIndicatorSegs)), Jo(n) && y(t, {
                  elTag: "div",
                  elClasses: ["fc-timegrid-col-misc"]
              }))))
          }
          renderFgSegs(e, t, n, r, i, o) {
              let {props: s} = this;
              return s.forPrint ? dl(e, s) : this.renderPositionedFgSegs(e, t, n, r, i, o)
          }
          renderPositionedFgSegs(e, t, n, r, i, o) {
              let {eventMaxStack: s, eventShortHeight: a, eventOrderStrict: l, eventMinHeight: d} = this.context.options
                , {date: c, slatCoords: u, eventSelection: h, todayRange: f, nowDate: p} = this.props
                , g = n || r || i
                , m = ol(e, c, u, d)
                , {segPlacements: v, hiddenGroups: b} = function(e, t, n, r) {
                  let i = []
                    , o = [];
                  for (let n = 0; n < e.length; n += 1) {
                      let r = t[n];
                      r ? i.push({
                          index: n,
                          thickness: 1,
                          span: r
                      }) : o.push(e[n])
                  }
                  let {segRects: s, hiddenGroups: a} = function(e, t, n) {
                      let r = new $i;
                      null != t && (r.strictOrder = t),
                      null != n && (r.maxStackCnt = n);
                      let i = Ki(r.addSegs(e))
                        , o = function(e) {
                          const {entriesByLevel: t} = e
                            , n = il(((e,t)=>e + ":" + t), ((r,i)=>{
                              let o = function(e, t, n) {
                                  let {levelCoords: r, entriesByLevel: i} = e
                                    , o = i[t][n]
                                    , s = r[t] + o.thickness
                                    , a = r.length
                                    , l = t;
                                  for (; l < a && r[l] < s; l += 1)
                                      ;
                                  for (; l < a; l += 1) {
                                      let e, t = i[l], n = no(t, o.span.start, Xi), r = n[0] + n[1], s = r;
                                      for (; (e = t[s]) && e.span.start < o.span.end; )
                                          s += 1;
                                      if (r < s)
                                          return {
                                              level: l,
                                              lateralStart: r,
                                              lateralEnd: s
                                          }
                                  }
                                  return null
                              }(e, r, i)
                                , s = tl(o, n)
                                , a = t[r][i];
                              return [Object.assign(Object.assign({}, a), {
                                  nextLevelNodes: s[0]
                              }), a.thickness + s[1]]
                          }
                          ));
                          return tl(t.length ? {
                              level: 0,
                              lateralStart: 0,
                              lateralEnd: t[0].length
                          } : null, n)[0]
                      }(r);
                      return o = function(e, t) {
                          const n = il(((e,t,n)=>Ji(e)), ((e,t,r)=>{
                              let i, {nextLevelNodes: o, thickness: s} = e, a = s + r, l = s / a, d = [];
                              if (o.length)
                                  for (let e of o)
                                      if (void 0 === i) {
                                          let r = n(e, t, a);
                                          i = r[0],
                                          d.push(r[1])
                                      } else {
                                          let t = n(e, i, 0);
                                          d.push(t[1])
                                      }
                              else
                                  i = 1;
                              let c = (i - t) * l;
                              return [i - c, Object.assign(Object.assign({}, e), {
                                  thickness: c,
                                  nextLevelNodes: d
                              })]
                          }
                          ));
                          return e.map((e=>n(e, 0, 0)[1]))
                      }(o),
                      {
                          segRects: function(e) {
                              let t = [];
                              const n = il(((e,t,n)=>Ji(e)), ((e,n,i)=>{
                                  let o = Object.assign(Object.assign({}, e), {
                                      levelCoord: n,
                                      stackDepth: i,
                                      stackForward: 0
                                  });
                                  return t.push(o),
                                  o.stackForward = r(e.nextLevelNodes, n + e.thickness, i + 1) + 1
                              }
                              ));
                              function r(e, t, r) {
                                  let i = 0;
                                  for (let o of e)
                                      i = Math.max(n(o, t, r), i);
                                  return i
                              }
                              return r(e, 0, 0),
                              t
                          }(o),
                          hiddenGroups: i
                      }
                  }(i, n, r)
                    , l = [];
                  for (let t of s)
                      l.push({
                          seg: e[t.index],
                          rect: t
                      });
                  for (let e of o)
                      l.push({
                          seg: e,
                          rect: null
                      });
                  return {
                      segPlacements: l,
                      hiddenGroups: a
                  }
              }(e, m, l, s);
              return y(w, null, this.renderHiddenGroups(b, e), v.map((e=>{
                  let {seg: s, rect: l} = e
                    , d = s.eventRange.instance.instanceId
                    , c = g || Boolean(!t[d] && l)
                    , u = cl(l && l.span)
                    , m = !g && l ? this.computeSegHStyle(l) : {
                      left: 0,
                      right: 0
                  }
                    , v = Boolean(l) && l.stackForward > 0
                    , b = Boolean(l) && l.span.end - l.span.start < a;
                  return y("div", {
                      className: "fc-timegrid-event-harness" + (v ? " fc-timegrid-event-harness-inset" : ""),
                      key: o || d,
                      style: Object.assign(Object.assign({
                          visibility: c ? "" : "hidden"
                      }, u), m)
                  }, y(al, Object.assign({
                      seg: s,
                      isDragging: n,
                      isResizing: r,
                      isDateSelecting: i,
                      isSelected: d === h,
                      isShort: b
                  }, si(s, f, p))))
              }
              )))
          }
          renderHiddenGroups(e, t) {
              let {extraDateSpan: n, dateProfile: r, todayRange: i, nowDate: o, eventSelection: s, eventDrag: a, eventResize: l} = this.props;
              return y(w, null, e.map((e=>{
                  let d = cl(e.span)
                    , c = (u = e.entries,
                  h = t,
                  u.map((e=>h[e.index])));
                  var u, h;
                  return y(Ka, {
                      key: Pt(cs(c)),
                      hiddenSegs: c,
                      top: d.top,
                      bottom: d.bottom,
                      extraDateSpan: n,
                      dateProfile: r,
                      todayRange: i,
                      nowDate: o,
                      eventSelection: s,
                      eventDrag: a,
                      eventResize: l
                  })
              }
              )))
          }
          renderFillSegs(e, t) {
              let {props: n, context: r} = this
                , i = ol(e, n.date, n.slatCoords, r.options.eventMinHeight).map(((r,i)=>{
                  let o = e[i];
                  return y("div", {
                      key: li(o.eventRange),
                      className: "fc-timegrid-bg-harness",
                      style: cl(r)
                  }, "bg-event" === t ? y(es, Object.assign({
                      seg: o
                  }, si(o, n.todayRange, n.nowDate))) : ns(t))
              }
              ));
              return y(w, null, i)
          }
          renderNowIndicator(e) {
              let {slatCoords: t, date: n} = this.props;
              return t ? e.map(((e,r)=>y(Zo, {
                  key: r,
                  elClasses: ["fc-timegrid-now-indicator-line"],
                  elStyle: {
                      top: t.computeDateTop(e.start, n)
                  },
                  isAxis: !1,
                  date: n
              }))) : null
          }
          computeSegHStyle(e) {
              let t, n, {isRtl: r, options: i} = this.context, o = i.slotEventOverlap, s = e.levelCoord, a = e.levelCoord + e.thickness;
              o && (a = Math.min(1, s + 2 * (a - s))),
              r ? (t = 1 - a,
              n = s) : (t = s,
              n = 1 - a);
              let l = {
                  zIndex: e.stackDepth + 1,
                  left: 100 * t + "%",
                  right: 100 * n + "%"
              };
              return o && !e.stackForward && (l[r ? "marginLeft" : "marginRight"] = 20),
              l
          }
      }
      function dl(e, {todayRange: t, nowDate: n, eventSelection: r, eventDrag: i, eventResize: o}) {
          let s = (i ? i.affectedInstances : null) || (o ? o.affectedInstances : null) || {};
          return y(w, null, e.map((e=>{
              let i = e.eventRange.instance.instanceId;
              return y("div", {
                  key: i,
                  style: {
                      visibility: s[i] ? "hidden" : ""
                  }
              }, y(al, Object.assign({
                  seg: e,
                  isDragging: !1,
                  isResizing: !1,
                  isDateSelecting: !1,
                  isSelected: i === r,
                  isShort: !1
              }, si(e, t, n))))
          }
          )))
      }
      function cl(e) {
          return e ? {
              top: e.start,
              bottom: -e.end
          } : {
              top: "",
              bottom: ""
          }
      }
      class ul extends jn {
          constructor() {
              super(...arguments),
              this.splitFgEventSegs = zt(Xa),
              this.splitBgEventSegs = zt(Xa),
              this.splitBusinessHourSegs = zt(Xa),
              this.splitNowIndicatorSegs = zt(Xa),
              this.splitDateSelectionSegs = zt(Xa),
              this.splitEventDrag = zt(Ja),
              this.splitEventResize = zt(Ja),
              this.rootElRef = {
                  current: null
              },
              this.cellElRefs = new Mo
          }
          render() {
              let {props: e, context: t} = this
                , n = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate)
                , r = e.cells.length
                , i = this.splitFgEventSegs(e.fgEventSegs, r)
                , o = this.splitBgEventSegs(e.bgEventSegs, r)
                , s = this.splitBusinessHourSegs(e.businessHourSegs, r)
                , a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r)
                , l = this.splitDateSelectionSegs(e.dateSelectionSegs, r)
                , d = this.splitEventDrag(e.eventDrag, r)
                , c = this.splitEventResize(e.eventResize, r);
              return y("div", {
                  className: "fc-timegrid-cols",
                  ref: this.rootElRef
              }, y("table", {
                  role: "presentation",
                  style: {
                      minWidth: e.tableMinWidth,
                      width: e.clientWidth
                  }
              }, e.tableColGroupNode, y("tbody", {
                  role: "presentation"
              }, y("tr", {
                  role: "row"
              }, e.axis && y("td", {
                  "aria-hidden": !0,
                  className: "fc-timegrid-col fc-timegrid-axis"
              }, y("div", {
                  className: "fc-timegrid-col-frame"
              }, y("div", {
                  className: "fc-timegrid-now-indicator-container"
              }, "number" == typeof n && y(Zo, {
                  elClasses: ["fc-timegrid-now-indicator-arrow"],
                  elStyle: {
                      top: n
                  },
                  isAxis: !0,
                  date: e.nowDate
              })))), e.cells.map(((t,n)=>y(ll, {
                  key: t.key,
                  elRef: this.cellElRefs.createRef(t.key),
                  dateProfile: e.dateProfile,
                  date: t.date,
                  nowDate: e.nowDate,
                  todayRange: e.todayRange,
                  extraRenderProps: t.extraRenderProps,
                  extraDataAttrs: t.extraDataAttrs,
                  extraClassNames: t.extraClassNames,
                  extraDateSpan: t.extraDateSpan,
                  fgEventSegs: i[n],
                  bgEventSegs: o[n],
                  businessHourSegs: s[n],
                  nowIndicatorSegs: a[n],
                  dateSelectionSegs: l[n],
                  eventDrag: d[n],
                  eventResize: c[n],
                  slatCoords: e.slatCoords,
                  eventSelection: e.eventSelection,
                  forPrint: e.forPrint
              })))))))
          }
          componentDidMount() {
              this.updateCoords()
          }
          componentDidUpdate() {
              this.updateCoords()
          }
          updateCoords() {
              let {props: e} = this;
              var t;
              e.onColCoords && null !== e.clientWidth && e.onColCoords(new Fi(this.rootElRef.current,(t = this.cellElRefs.currentMap,
              e.cells.map((e=>t[e.key]))),!0,!1))
          }
      }
      class hl extends Zi {
          constructor() {
              super(...arguments),
              this.processSlotOptions = zt(fl),
              this.state = {
                  slatCoords: null
              },
              this.handleRootEl = e=>{
                  e ? this.context.registerInteractiveComponent(this, {
                      el: e,
                      isHitComboAllowed: this.props.isHitComboAllowed
                  }) : this.context.unregisterInteractiveComponent(this)
              }
              ,
              this.handleScrollRequest = e=>{
                  let {onScrollTopRequest: t} = this.props
                    , {slatCoords: n} = this.state;
                  if (t && n) {
                      if (e.time) {
                          let r = n.computeTimeTop(e.time);
                          r = Math.ceil(r),
                          r && (r += 1),
                          t(r)
                      }
                      return !0
                  }
                  return !1
              }
              ,
              this.handleColCoords = e=>{
                  this.colCoords = e
              }
              ,
              this.handleSlatCoords = e=>{
                  this.setState({
                      slatCoords: e
                  }),
                  this.props.onSlatCoords && this.props.onSlatCoords(e)
              }
          }
          render() {
              let {props: e, state: t} = this;
              return y("div", {
                  className: "fc-timegrid-body",
                  ref: this.handleRootEl,
                  style: {
                      width: e.clientWidth,
                      minWidth: e.tableMinWidth
                  }
              }, y($a, {
                  axis: e.axis,
                  dateProfile: e.dateProfile,
                  slatMetas: e.slatMetas,
                  clientWidth: e.clientWidth,
                  minHeight: e.expandRows ? e.clientHeight : "",
                  tableMinWidth: e.tableMinWidth,
                  tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                  onCoords: this.handleSlatCoords
              }), y(ul, {
                  cells: e.cells,
                  axis: e.axis,
                  dateProfile: e.dateProfile,
                  businessHourSegs: e.businessHourSegs,
                  bgEventSegs: e.bgEventSegs,
                  fgEventSegs: e.fgEventSegs,
                  dateSelectionSegs: e.dateSelectionSegs,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize,
                  todayRange: e.todayRange,
                  nowDate: e.nowDate,
                  nowIndicatorSegs: e.nowIndicatorSegs,
                  clientWidth: e.clientWidth,
                  tableMinWidth: e.tableMinWidth,
                  tableColGroupNode: e.tableColGroupNode,
                  slatCoords: t.slatCoords,
                  onColCoords: this.handleColCoords,
                  forPrint: e.forPrint
              }))
          }
          componentDidMount() {
              this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
          }
          componentDidUpdate(e) {
              this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
          }
          componentWillUnmount() {
              this.scrollResponder.detach()
          }
          queryHit(e, t) {
              let {dateEnv: n, options: r} = this.context
                , {colCoords: i} = this
                , {dateProfile: o} = this.props
                , {slatCoords: s} = this.state
                , {snapDuration: a, snapsPerSlot: l} = this.processSlotOptions(this.props.slotDuration, r.snapDuration)
                , d = i.leftToIndex(e)
                , c = s.positions.topToIndex(t);
              if (null != d && null != c) {
                  let e = this.props.cells[d]
                    , r = s.positions.tops[c]
                    , u = s.positions.getHeight(c)
                    , h = (t - r) / u
                    , f = c * l + Math.floor(h * l)
                    , p = this.props.cells[d].date
                    , g = pt(o.slotMinTime, gt(a, f))
                    , m = n.add(p, g)
                    , v = n.add(m, a);
                  return {
                      dateProfile: o,
                      dateSpan: Object.assign({
                          range: {
                              start: m,
                              end: v
                          },
                          allDay: !1
                      }, e.extraDateSpan),
                      dayEl: i.els[d],
                      rect: {
                          left: i.lefts[d],
                          right: i.rights[d],
                          top: r,
                          bottom: r + u
                      },
                      layer: 0
                  }
              }
              return null
          }
      }
      function fl(e, t) {
          let n = t || e
            , r = yt(e, n);
          return null === r && (n = e,
          r = 1),
          {
              snapDuration: n,
              snapsPerSlot: r
          }
      }
      class pl extends wo {
          sliceRange(e, t) {
              let n = [];
              for (let r = 0; r < t.length; r += 1) {
                  let i = Jn(e, t[r]);
                  i && n.push({
                      start: i.start,
                      end: i.end,
                      isStart: i.start.valueOf() === e.start.valueOf(),
                      isEnd: i.end.valueOf() === e.end.valueOf(),
                      col: r
                  })
              }
              return n
          }
      }
      class gl extends Zi {
          constructor() {
              super(...arguments),
              this.buildDayRanges = zt(ml),
              this.slicer = new pl,
              this.timeColsRef = {
                  current: null
              }
          }
          render() {
              let {props: e, context: t} = this
                , {dateProfile: n, dayTableModel: r} = e
                , {nowIndicator: i, nextDayThreshold: o} = t.options
                , s = this.buildDayRanges(r, n, t.dateEnv);
              return y(po, {
                  unit: i ? "minute" : "day"
              }, ((a,l)=>y(hl, Object.assign({
                  ref: this.timeColsRef
              }, this.slicer.sliceProps(e, n, null, t, s), {
                  forPrint: e.forPrint,
                  axis: e.axis,
                  dateProfile: n,
                  slatMetas: e.slatMetas,
                  slotDuration: e.slotDuration,
                  cells: r.cells[0],
                  tableColGroupNode: e.tableColGroupNode,
                  tableMinWidth: e.tableMinWidth,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  expandRows: e.expandRows,
                  nowDate: a,
                  nowIndicatorSegs: i && this.slicer.sliceNowDate(a, n, o, t, s),
                  todayRange: l,
                  onScrollTopRequest: e.onScrollTopRequest,
                  onSlatCoords: e.onSlatCoords
              }))))
          }
      }
      function ml(e, t, n) {
          let r = [];
          for (let i of e.headerDates)
              r.push({
                  start: n.add(i, t.slotMinTime),
                  end: n.add(i, t.slotMaxTime)
              });
          return r
      }
      const vl = [{
          hours: 1
      }, {
          minutes: 30
      }, {
          minutes: 15
      }, {
          seconds: 30
      }, {
          seconds: 15
      }];
      function yl(e, t, n, r, i) {
          let o = new Date(0)
            , s = e
            , a = ut(0)
            , l = n || function(e) {
              let t, n, r;
              for (t = vl.length - 1; t >= 0; t -= 1)
                  if (n = ut(vl[t]),
                  r = yt(n, e),
                  null !== r && r > 1)
                      return n;
              return e
          }(r)
            , d = [];
          for (; vt(s) < vt(t); ) {
              let e = i.add(o, s)
                , t = null !== yt(a, l);
              d.push({
                  date: e,
                  time: s,
                  key: e.toISOString(),
                  isoTimeStr: (c = e,
                  it(c.getUTCHours(), 2) + ":" + it(c.getUTCMinutes(), 2) + ":" + it(c.getUTCSeconds(), 2)),
                  isLabeled: t
              }),
              s = pt(s, r),
              a = pt(a, r)
          }
          var c;
          return d
      }
      function bl(e, t) {
          let n = new yo(e.renderRange,t);
          return new bo(n,!1)
      }
      var wl = bs({
          name: "@fullcalendar/timegrid",
          initialView: "timeGridWeek",
          optionRefiners: {
              allDaySlot: Boolean
          },
          views: {
              timeGrid: {
                  component: class extends qa {
                      constructor() {
                          super(...arguments),
                          this.buildTimeColsModel = zt(bl),
                          this.buildSlatMetas = zt(yl)
                      }
                      render() {
                          let {options: e, dateEnv: t, dateProfileGenerator: n} = this.context
                            , {props: r} = this
                            , {dateProfile: i} = r
                            , o = this.buildTimeColsModel(i, n)
                            , s = this.allDaySplitter.splitProps(r)
                            , a = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, t)
                            , {dayMinWidth: l} = e
                            , d = !l
                            , c = l
                            , u = e.dayHeaders && y(mo, {
                              dates: o.headerDates,
                              dateProfile: i,
                              datesRepDistinctDays: !0,
                              renderIntro: d ? this.renderHeadAxis : null
                          })
                            , h = !1 !== e.allDaySlot && (t=>y(Na, Object.assign({}, s.allDay, {
                              dateProfile: i,
                              dayTableModel: o,
                              nextDayThreshold: e.nextDayThreshold,
                              tableMinWidth: t.tableMinWidth,
                              colGroupNode: t.tableColGroupNode,
                              renderRowIntro: d ? this.renderTableRowAxis : null,
                              showWeekNumbers: !1,
                              expandRows: !1,
                              headerAlignElRef: this.headerElRef,
                              clientWidth: t.clientWidth,
                              clientHeight: t.clientHeight,
                              forPrint: r.forPrint
                          }, this.getAllDayMaxEventProps())))
                            , f = t=>y(gl, Object.assign({}, s.timed, {
                              dayTableModel: o,
                              dateProfile: i,
                              axis: d,
                              slotDuration: e.slotDuration,
                              slatMetas: a,
                              forPrint: r.forPrint,
                              tableColGroupNode: t.tableColGroupNode,
                              tableMinWidth: t.tableMinWidth,
                              clientWidth: t.clientWidth,
                              clientHeight: t.clientHeight,
                              onSlatCoords: this.handleSlatCoords,
                              expandRows: t.expandRows,
                              onScrollTopRequest: this.handleScrollTopRequest
                          }));
                          return c ? this.renderHScrollLayout(u, h, f, o.colCnt, l, a, this.state.slatCoords) : this.renderSimpleLayout(u, h, f)
                      }
                  }
                  ,
                  usesMinMaxTime: !0,
                  allDaySlot: !0,
                  slotDuration: "00:30:00",
                  slotEventOverlap: !0
              },
              timeGridDay: {
                  type: "timeGrid",
                  duration: {
                      days: 1
                  }
              },
              timeGridWeek: {
                  type: "timeGrid",
                  duration: {
                      weeks: 1
                  }
              }
          }
      });
      class Sl extends jn {
          constructor() {
              super(...arguments),
              this.state = {
                  textId: Fe()
              }
          }
          render() {
              let {theme: e, dateEnv: t, options: n, viewApi: r} = this.context
                , {cellId: i, dayDate: o, todayRange: s} = this.props
                , {textId: a} = this.state
                , l = ki(o, s)
                , d = n.listDayFormat ? t.format(o, n.listDayFormat) : ""
                , c = n.listDaySideFormat ? t.format(o, n.listDaySideFormat) : ""
                , u = Object.assign({
                  date: t.toDate(o),
                  view: r,
                  textId: a,
                  text: d,
                  sideText: c,
                  navLinkAttrs: Oi(this.context, o),
                  sideNavLinkAttrs: Oi(this.context, o, "day", !1)
              }, l);
              return y(qn, {
                  elTag: "tr",
                  elClasses: ["fc-list-day", ..._i(l, e)],
                  elAttrs: {
                      "data-date": Lt(o)
                  },
                  renderProps: u,
                  generatorName: "dayHeaderContent",
                  customGenerator: n.dayHeaderContent,
                  defaultGenerator: xl,
                  classNameGenerator: n.dayHeaderClassNames,
                  didMount: n.dayHeaderDidMount,
                  willUnmount: n.dayHeaderWillUnmount
              }, (t=>y("th", {
                  scope: "colgroup",
                  colSpan: 3,
                  id: i,
                  "aria-labelledby": a
              }, y(t, {
                  elTag: "div",
                  elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
              }))))
          }
      }
      function xl(e) {
          return y(w, null, e.text && y("a", Object.assign({
              id: e.textId,
              className: "fc-list-day-text"
          }, e.navLinkAttrs), e.text), e.sideText && y("a", Object.assign({
              "aria-hidden": !0,
              className: "fc-list-day-side-text"
          }, e.sideNavLinkAttrs), e.sideText))
      }
      const El = rn({
          hour: "numeric",
          minute: "2-digit",
          meridiem: "short"
      });
      class Dl extends jn {
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , {seg: r, timeHeaderId: i, eventHeaderId: o, dateHeaderId: s} = e
                , a = n.eventTimeFormat || El;
              return y(qo, Object.assign({}, e, {
                  elTag: "tr",
                  elClasses: ["fc-list-event", r.eventRange.def.url && "fc-event-forced-url"],
                  defaultGenerator: ()=>function(e, t) {
                      let n = di(e, t);
                      return y("a", Object.assign({}, n), e.eventRange.def.title)
                  }(r, t),
                  seg: r,
                  timeText: "",
                  disableDragging: !0,
                  disableResizing: !0
              }), ((e,n)=>y(w, null, function(e, t, n, r, i) {
                  let {options: o} = n;
                  if (!1 !== o.displayEventTime) {
                      let s, a = e.eventRange.def, l = e.eventRange.instance, d = !1;
                      if (a.allDay ? d = !0 : function(e) {
                          let t = ir(e);
                          return Ct(t.start, t.end) > 1
                      }(e.eventRange.range) ? e.isStart ? s = oi(e, t, n, null, null, l.range.start, e.end) : e.isEnd ? s = oi(e, t, n, null, null, e.start, l.range.end) : d = !0 : s = oi(e, t, n),
                      d) {
                          let e = {
                              text: n.options.allDayText,
                              view: n.viewApi
                          };
                          return y(qn, {
                              elTag: "td",
                              elClasses: ["fc-list-event-time"],
                              elAttrs: {
                                  headers: `${r} ${i}`
                              },
                              renderProps: e,
                              generatorName: "allDayContent",
                              customGenerator: o.allDayContent,
                              defaultGenerator: Cl,
                              classNameGenerator: o.allDayClassNames,
                              didMount: o.allDayDidMount,
                              willUnmount: o.allDayWillUnmount
                          })
                      }
                      return y("td", {
                          className: "fc-list-event-time"
                      }, s)
                  }
                  return null
              }(r, a, t, i, s), y("td", {
                  "aria-hidden": !0,
                  className: "fc-list-event-graphic"
              }, y("span", {
                  className: "fc-list-event-dot",
                  style: {
                      borderColor: n.borderColor || n.backgroundColor
                  }
              })), y(e, {
                  elTag: "td",
                  elClasses: ["fc-list-event-title"],
                  elAttrs: {
                      headers: `${o} ${s}`
                  }
              }))))
          }
      }
      function Cl(e) {
          return e.text
      }
      function Rl(e) {
          return e.text
      }
      function Tl(e) {
          let t = Tt(e.renderRange.start)
            , n = e.renderRange.end
            , r = []
            , i = [];
          for (; t < n; )
              r.push(t),
              i.push({
                  start: t,
                  end: Et(t, 1)
              }),
              t = Et(t, 1);
          return {
              dayDates: r,
              dayRanges: i
          }
      }
      function Al(e) {
          return !1 === e ? null : rn(e)
      }
      _e(':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}');
      var kl = bs({
          name: "@fullcalendar/list",
          optionRefiners: {
              listDayFormat: Al,
              listDaySideFormat: Al,
              noEventsClassNames: gn,
              noEventsContent: gn,
              noEventsDidMount: gn,
              noEventsWillUnmount: gn
          },
          views: {
              list: {
                  component: class extends Zi {
                      constructor() {
                          super(...arguments),
                          this.computeDateVars = zt(Tl),
                          this.eventStoreToSegs = zt(this._eventStoreToSegs),
                          this.state = {
                              timeHeaderId: Fe(),
                              eventHeaderId: Fe(),
                              dateHeaderIdRoot: Fe()
                          },
                          this.setRootEl = e=>{
                              e ? this.context.registerInteractiveComponent(this, {
                                  el: e
                              }) : this.context.unregisterInteractiveComponent(this)
                          }
                      }
                      render() {
                          let {props: e, context: t} = this
                            , {dayDates: n, dayRanges: r} = this.computeDateVars(e.dateProfile)
                            , i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
                          return y(Qn, {
                              elRef: this.setRootEl,
                              elClasses: ["fc-list", t.theme.getClass("table"), !1 !== t.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                              viewSpec: t.viewSpec
                          }, y(_o, {
                              liquid: !e.isHeightAuto,
                              overflowX: e.isHeightAuto ? "visible" : "hidden",
                              overflowY: e.isHeightAuto ? "visible" : "auto"
                          }, i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage()))
                      }
                      renderEmptyMessage() {
                          let {options: e, viewApi: t} = this.context
                            , n = {
                              text: e.noEventsText,
                              view: t
                          };
                          return y(qn, {
                              elTag: "div",
                              elClasses: ["fc-list-empty"],
                              renderProps: n,
                              generatorName: "noEventsContent",
                              customGenerator: e.noEventsContent,
                              defaultGenerator: Rl,
                              classNameGenerator: e.noEventsClassNames,
                              didMount: e.noEventsDidMount,
                              willUnmount: e.noEventsWillUnmount
                          }, (e=>y(e, {
                              elTag: "div",
                              elClasses: ["fc-list-empty-cushion"]
                          })))
                      }
                      renderSegList(e, t) {
                          let {theme: n, options: r} = this.context
                            , {timeHeaderId: i, eventHeaderId: o, dateHeaderIdRoot: s} = this.state
                            , a = function(e) {
                              let t, n, r = [];
                              for (t = 0; t < e.length; t += 1)
                                  n = e[t],
                                  (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                              return r
                          }(e);
                          return y(po, {
                              unit: "day"
                          }, ((e,l)=>{
                              let d = [];
                              for (let n = 0; n < a.length; n += 1) {
                                  let c = a[n];
                                  if (c) {
                                      let a = Lt(t[n])
                                        , u = s + "-" + a;
                                      d.push(y(Sl, {
                                          key: a,
                                          cellId: u,
                                          dayDate: t[n],
                                          todayRange: l
                                      })),
                                      c = ei(c, r.eventOrder);
                                      for (let t of c)
                                          d.push(y(Dl, Object.assign({
                                              key: a + ":" + t.eventRange.instance.instanceId,
                                              seg: t,
                                              isDragging: !1,
                                              isResizing: !1,
                                              isDateSelecting: !1,
                                              isSelected: !1,
                                              timeHeaderId: i,
                                              eventHeaderId: o,
                                              dateHeaderId: u
                                          }, si(t, l, e))))
                                  }
                              }
                              return y("table", {
                                  className: "fc-list-table " + n.getClass("table")
                              }, y("thead", null, y("tr", null, y("th", {
                                  scope: "col",
                                  id: i
                              }, r.timeHint), y("th", {
                                  scope: "col",
                                  "aria-hidden": !0
                              }), y("th", {
                                  scope: "col",
                                  id: o
                              }, r.eventHint))), y("tbody", null, d))
                          }
                          ))
                      }
                      _eventStoreToSegs(e, t, n) {
                          return this.eventRangesToSegs(Zr(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
                      }
                      eventRangesToSegs(e, t) {
                          let n = [];
                          for (let r of e)
                              n.push(...this.eventRangeToSegs(r, t));
                          return n
                      }
                      eventRangeToSegs(e, t) {
                          let n, r, i, {dateEnv: o} = this.context, {nextDayThreshold: s} = this.context.options, a = e.range, l = e.def.allDay, d = [];
                          for (n = 0; n < t.length; n += 1)
                              if (r = Jn(a, t[n]),
                              r && (i = {
                                  component: this,
                                  eventRange: e,
                                  start: r.start,
                                  end: r.end,
                                  isStart: e.isStart && r.start.valueOf() === a.start.valueOf(),
                                  isEnd: e.isEnd && r.end.valueOf() === a.end.valueOf(),
                                  dayIndex: n
                              },
                              d.push(i),
                              !i.isEnd && !l && n + 1 < t.length && a.end < o.add(t[n + 1].start, s))) {
                                  i.end = a.end,
                                  i.isEnd = !0;
                                  break
                              }
                          return d
                      }
                  }
                  ,
                  buttonTextKey: "list",
                  listDayFormat: {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                  }
              },
              listDay: {
                  type: "list",
                  duration: {
                      days: 1
                  },
                  listDayFormat: {
                      weekday: "long"
                  }
              },
              listWeek: {
                  type: "list",
                  duration: {
                      weeks: 1
                  },
                  listDayFormat: {
                      weekday: "long"
                  },
                  listDaySideFormat: {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                  }
              },
              listMonth: {
                  type: "list",
                  duration: {
                      month: 1
                  },
                  listDaySideFormat: {
                      weekday: "long"
                  }
              },
              listYear: {
                  type: "list",
                  duration: {
                      year: 1
                  },
                  listDaySideFormat: {
                      weekday: "long"
                  }
              }
          }
      });
      io.touchMouseIgnoreWait = 500;
      let _l = 0
        , Ml = 0
        , Il = !1;
      class Hl {
          constructor(e) {
              this.subjectEl = null,
              this.selector = "",
              this.handleSelector = "",
              this.shouldIgnoreMove = !1,
              this.shouldWatchScroll = !0,
              this.isDragging = !1,
              this.isTouchDragging = !1,
              this.wasTouchScroll = !1,
              this.handleMouseDown = e=>{
                  if (!this.shouldIgnoreMouse() && function(e) {
                      return 0 === e.button && !e.ctrlKey
                  }(e) && this.tryStart(e)) {
                      let t = this.createEventFromMouse(e, !0);
                      this.emitter.trigger("pointerdown", t),
                      this.initScrollWatch(t),
                      this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove),
                      document.addEventListener("mouseup", this.handleMouseUp)
                  }
              }
              ,
              this.handleMouseMove = e=>{
                  let t = this.createEventFromMouse(e);
                  this.recordCoords(t),
                  this.emitter.trigger("pointermove", t)
              }
              ,
              this.handleMouseUp = e=>{
                  document.removeEventListener("mousemove", this.handleMouseMove),
                  document.removeEventListener("mouseup", this.handleMouseUp),
                  this.emitter.trigger("pointerup", this.createEventFromMouse(e)),
                  this.cleanup()
              }
              ,
              this.handleTouchStart = e=>{
                  if (this.tryStart(e)) {
                      this.isTouchDragging = !0;
                      let t = this.createEventFromTouch(e, !0);
                      this.emitter.trigger("pointerdown", t),
                      this.initScrollWatch(t);
                      let n = e.target;
                      this.shouldIgnoreMove || n.addEventListener("touchmove", this.handleTouchMove),
                      n.addEventListener("touchend", this.handleTouchEnd),
                      n.addEventListener("touchcancel", this.handleTouchEnd),
                      window.addEventListener("scroll", this.handleTouchScroll, !0)
                  }
              }
              ,
              this.handleTouchMove = e=>{
                  let t = this.createEventFromTouch(e);
                  this.recordCoords(t),
                  this.emitter.trigger("pointermove", t)
              }
              ,
              this.handleTouchEnd = e=>{
                  if (this.isDragging) {
                      let t = e.target;
                      t.removeEventListener("touchmove", this.handleTouchMove),
                      t.removeEventListener("touchend", this.handleTouchEnd),
                      t.removeEventListener("touchcancel", this.handleTouchEnd),
                      window.removeEventListener("scroll", this.handleTouchScroll, !0),
                      this.emitter.trigger("pointerup", this.createEventFromTouch(e)),
                      this.cleanup(),
                      this.isTouchDragging = !1,
                      _l += 1,
                      setTimeout((()=>{
                          _l -= 1
                      }
                      ), io.touchMouseIgnoreWait)
                  }
              }
              ,
              this.handleTouchScroll = ()=>{
                  this.wasTouchScroll = !0
              }
              ,
              this.handleScroll = e=>{
                  if (!this.shouldIgnoreMove) {
                      let t = window.pageXOffset - this.prevScrollX + this.prevPageX
                        , n = window.pageYOffset - this.prevScrollY + this.prevPageY;
                      this.emitter.trigger("pointermove", {
                          origEvent: e,
                          isTouch: this.isTouchDragging,
                          subjectEl: this.subjectEl,
                          pageX: t,
                          pageY: n,
                          deltaX: t - this.origPageX,
                          deltaY: n - this.origPageY
                      })
                  }
              }
              ,
              this.containerEl = e,
              this.emitter = new Pr,
              e.addEventListener("mousedown", this.handleMouseDown),
              e.addEventListener("touchstart", this.handleTouchStart, {
                  passive: !0
              }),
              Ml += 1,
              1 === Ml && window.addEventListener("touchmove", Ol, {
                  passive: !1
              })
          }
          destroy() {
              this.containerEl.removeEventListener("mousedown", this.handleMouseDown),
              this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                  passive: !0
              }),
              Ml -= 1,
              Ml || window.removeEventListener("touchmove", Ol, {
                  passive: !1
              })
          }
          tryStart(e) {
              let t = this.querySubjectEl(e)
                , n = e.target;
              return !(!t || this.handleSelector && !Pe(n, this.handleSelector) || (this.subjectEl = t,
              this.isDragging = !0,
              this.wasTouchScroll = !1,
              0))
          }
          cleanup() {
              Il = !1,
              this.isDragging = !1,
              this.subjectEl = null,
              this.destroyScrollWatch()
          }
          querySubjectEl(e) {
              return this.selector ? Pe(e.target, this.selector) : this.containerEl
          }
          shouldIgnoreMouse() {
              return _l || this.isTouchDragging
          }
          cancelTouchScroll() {
              this.isDragging && (Il = !0)
          }
          initScrollWatch(e) {
              this.shouldWatchScroll && (this.recordCoords(e),
              window.addEventListener("scroll", this.handleScroll, !0))
          }
          recordCoords(e) {
              this.shouldWatchScroll && (this.prevPageX = e.pageX,
              this.prevPageY = e.pageY,
              this.prevScrollX = window.pageXOffset,
              this.prevScrollY = window.pageYOffset)
          }
          destroyScrollWatch() {
              this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
          }
          createEventFromMouse(e, t) {
              let n = 0
                , r = 0;
              return t ? (this.origPageX = e.pageX,
              this.origPageY = e.pageY) : (n = e.pageX - this.origPageX,
              r = e.pageY - this.origPageY),
              {
                  origEvent: e,
                  isTouch: !1,
                  subjectEl: this.subjectEl,
                  pageX: e.pageX,
                  pageY: e.pageY,
                  deltaX: n,
                  deltaY: r
              }
          }
          createEventFromTouch(e, t) {
              let n, r, i = e.touches, o = 0, s = 0;
              return i && i.length ? (n = i[0].pageX,
              r = i[0].pageY) : (n = e.pageX,
              r = e.pageY),
              t ? (this.origPageX = n,
              this.origPageY = r) : (o = n - this.origPageX,
              s = r - this.origPageY),
              {
                  origEvent: e,
                  isTouch: !0,
                  subjectEl: this.subjectEl,
                  pageX: n,
                  pageY: r,
                  deltaX: o,
                  deltaY: s
              }
          }
      }
      function Ol(e) {
          Il && e.preventDefault()
      }
      class Nl {
          constructor() {
              this.isVisible = !1,
              this.sourceEl = null,
              this.mirrorEl = null,
              this.sourceElRect = null,
              this.parentNode = document.body,
              this.zIndex = 9999,
              this.revertDuration = 0
          }
          start(e, t, n) {
              this.sourceEl = e,
              this.sourceElRect = this.sourceEl.getBoundingClientRect(),
              this.origScreenX = t - window.pageXOffset,
              this.origScreenY = n - window.pageYOffset,
              this.deltaX = 0,
              this.deltaY = 0,
              this.updateElPosition()
          }
          handleMove(e, t) {
              this.deltaX = e - window.pageXOffset - this.origScreenX,
              this.deltaY = t - window.pageYOffset - this.origScreenY,
              this.updateElPosition()
          }
          setIsVisible(e) {
              e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""),
              this.isVisible = e,
              this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"),
              this.isVisible = e)
          }
          stop(e, t) {
              let n = ()=>{
                  this.cleanup(),
                  t()
              }
              ;
              e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0)
          }
          doRevertAnimation(e, t) {
              let n = this.mirrorEl
                , r = this.sourceEl.getBoundingClientRect();
              n.style.transition = "top " + t + "ms,left " + t + "ms",
              ze(n, {
                  left: r.left,
                  top: r.top
              }),
              function(e, t) {
                  let n = r=>{
                      t(),
                      Ye.forEach((t=>{
                          e.removeEventListener(t, n)
                      }
                      ))
                  }
                  ;
                  Ye.forEach((t=>{
                      e.addEventListener(t, n)
                  }
                  ))
              }(n, (()=>{
                  n.style.transition = "",
                  e()
              }
              ))
          }
          cleanup() {
              this.mirrorEl && (Ne(this.mirrorEl),
              this.mirrorEl = null),
              this.sourceEl = null
          }
          updateElPosition() {
              this.sourceEl && this.isVisible && ze(this.getMirrorEl(), {
                  left: this.sourceElRect.left + this.deltaX,
                  top: this.sourceElRect.top + this.deltaY
              })
          }
          getMirrorEl() {
              let e = this.sourceElRect
                , t = this.mirrorEl;
              return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0),
              t.style.userSelect = "none",
              t.style.webkitUserSelect = "none",
              t.classList.add("fc-event-dragging"),
              ze(t, {
                  position: "fixed",
                  zIndex: this.zIndex,
                  visibility: "",
                  boxSizing: "border-box",
                  width: e.right - e.left,
                  height: e.bottom - e.top,
                  right: "auto",
                  bottom: "auto",
                  margin: 0
              }),
              this.parentNode.appendChild(t)),
              t
          }
      }
      class Pl extends qi {
          constructor(e, t) {
              super(),
              this.handleScroll = ()=>{
                  this.scrollTop = this.scrollController.getScrollTop(),
                  this.scrollLeft = this.scrollController.getScrollLeft(),
                  this.handleScrollChange()
              }
              ,
              this.scrollController = e,
              this.doesListening = t,
              this.scrollTop = this.origScrollTop = e.getScrollTop(),
              this.scrollLeft = this.origScrollLeft = e.getScrollLeft(),
              this.scrollWidth = e.getScrollWidth(),
              this.scrollHeight = e.getScrollHeight(),
              this.clientWidth = e.getClientWidth(),
              this.clientHeight = e.getClientHeight(),
              this.clientRect = this.computeClientRect(),
              this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll)
          }
          destroy() {
              this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
          }
          getScrollTop() {
              return this.scrollTop
          }
          getScrollLeft() {
              return this.scrollLeft
          }
          setScrollTop(e) {
              this.scrollController.setScrollTop(e),
              this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0),
              this.handleScrollChange())
          }
          setScrollLeft(e) {
              this.scrollController.setScrollLeft(e),
              this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0),
              this.handleScrollChange())
          }
          getClientWidth() {
              return this.clientWidth
          }
          getClientHeight() {
              return this.clientHeight
          }
          getScrollWidth() {
              return this.scrollWidth
          }
          getScrollHeight() {
              return this.scrollHeight
          }
          handleScrollChange() {}
      }
      class Ll extends Pl {
          constructor(e, t) {
              super(new Yi(e), t)
          }
          getEventTarget() {
              return this.scrollController.el
          }
          computeClientRect() {
              return Bi(this.scrollController.el)
          }
      }
      class Wl extends Pl {
          constructor(e) {
              super(new Qi, e)
          }
          getEventTarget() {
              return window
          }
          computeClientRect() {
              return {
                  left: this.scrollLeft,
                  right: this.scrollLeft + this.clientWidth,
                  top: this.scrollTop,
                  bottom: this.scrollTop + this.clientHeight
              }
          }
          handleScrollChange() {
              this.clientRect = this.computeClientRect()
          }
      }
      const jl = "function" == typeof performance ? performance.now : Date.now;
      class zl {
          constructor() {
              this.isEnabled = !0,
              this.scrollQuery = [window, ".fc-scroller"],
              this.edgeThreshold = 50,
              this.maxVelocity = 300,
              this.pointerScreenX = null,
              this.pointerScreenY = null,
              this.isAnimating = !1,
              this.scrollCaches = null,
              this.everMovedUp = !1,
              this.everMovedDown = !1,
              this.everMovedLeft = !1,
              this.everMovedRight = !1,
              this.animate = ()=>{
                  if (this.isAnimating) {
                      let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
                      if (e) {
                          let t = jl();
                          this.handleSide(e, (t - this.msSinceRequest) / 1e3),
                          this.requestAnimation(t)
                      } else
                          this.isAnimating = !1
                  }
              }
          }
          start(e, t, n) {
              this.isEnabled && (this.scrollCaches = this.buildCaches(n),
              this.pointerScreenX = null,
              this.pointerScreenY = null,
              this.everMovedUp = !1,
              this.everMovedDown = !1,
              this.everMovedLeft = !1,
              this.everMovedRight = !1,
              this.handleMove(e, t))
          }
          handleMove(e, t) {
              if (this.isEnabled) {
                  let n = e - window.pageXOffset
                    , r = t - window.pageYOffset
                    , i = null === this.pointerScreenY ? 0 : r - this.pointerScreenY
                    , o = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                  i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0),
                  o < 0 ? this.everMovedLeft = !0 : o > 0 && (this.everMovedRight = !0),
                  this.pointerScreenX = n,
                  this.pointerScreenY = r,
                  this.isAnimating || (this.isAnimating = !0,
                  this.requestAnimation(jl()))
              }
          }
          stop() {
              if (this.isEnabled) {
                  this.isAnimating = !1;
                  for (let e of this.scrollCaches)
                      e.destroy();
                  this.scrollCaches = null
              }
          }
          requestAnimation(e) {
              this.msSinceRequest = e,
              requestAnimationFrame(this.animate)
          }
          handleSide(e, t) {
              let {scrollCache: n} = e
                , {edgeThreshold: r} = this
                , i = r - e.distance
                , o = i * i / (r * r) * this.maxVelocity * t
                , s = 1;
              switch (e.name) {
              case "left":
                  s = -1;
              case "right":
                  n.setScrollLeft(n.getScrollLeft() + o * s);
                  break;
              case "top":
                  s = -1;
              case "bottom":
                  n.setScrollTop(n.getScrollTop() + o * s)
              }
          }
          computeBestEdge(e, t) {
              let {edgeThreshold: n} = this
                , r = null
                , i = this.scrollCaches || [];
              for (let o of i) {
                  let i = o.clientRect
                    , s = e - i.left
                    , a = i.right - e
                    , l = t - i.top
                    , d = i.bottom - t;
                  s >= 0 && a >= 0 && l >= 0 && d >= 0 && (l <= n && this.everMovedUp && o.canScrollUp() && (!r || r.distance > l) && (r = {
                      scrollCache: o,
                      name: "top",
                      distance: l
                  }),
                  d <= n && this.everMovedDown && o.canScrollDown() && (!r || r.distance > d) && (r = {
                      scrollCache: o,
                      name: "bottom",
                      distance: d
                  }),
                  s <= n && this.everMovedLeft && o.canScrollLeft() && (!r || r.distance > s) && (r = {
                      scrollCache: o,
                      name: "left",
                      distance: s
                  }),
                  a <= n && this.everMovedRight && o.canScrollRight() && (!r || r.distance > a) && (r = {
                      scrollCache: o,
                      name: "right",
                      distance: a
                  }))
              }
              return r
          }
          buildCaches(e) {
              return this.queryScrollEls(e).map((e=>e === window ? new Wl(!1) : new Ll(e,!1)))
          }
          queryScrollEls(e) {
              let t = [];
              for (let n of this.scrollQuery)
                  "object" == typeof n ? t.push(n) : t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(n)));
              return t
          }
      }
      class Bl extends ro {
          constructor(e, t) {
              super(e),
              this.containerEl = e,
              this.delay = null,
              this.minDistance = 0,
              this.touchScrollAllowed = !0,
              this.mirrorNeedsRevert = !1,
              this.isInteracting = !1,
              this.isDragging = !1,
              this.isDelayEnded = !1,
              this.isDistanceSurpassed = !1,
              this.delayTimeoutId = null,
              this.onPointerDown = e=>{
                  var t;
                  this.isDragging || (this.isInteracting = !0,
                  this.isDelayEnded = !1,
                  this.isDistanceSurpassed = !1,
                  (t = document.body).style.userSelect = "none",
                  t.style.webkitUserSelect = "none",
                  t.addEventListener("selectstart", Ve),
                  document.body.addEventListener("contextmenu", Ve),
                  e.isTouch || e.origEvent.preventDefault(),
                  this.emitter.trigger("pointerdown", e),
                  this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1),
                  this.mirror.start(e.subjectEl, e.pageX, e.pageY),
                  this.startDelay(e),
                  this.minDistance || this.handleDistanceSurpassed(e)))
              }
              ,
              this.onPointerMove = e=>{
                  if (this.isInteracting) {
                      if (this.emitter.trigger("pointermove", e),
                      !this.isDistanceSurpassed) {
                          let t, n = this.minDistance, {deltaX: r, deltaY: i} = e;
                          t = r * r + i * i,
                          t >= n * n && this.handleDistanceSurpassed(e)
                      }
                      this.isDragging && ("scroll" !== e.origEvent.type && (this.mirror.handleMove(e.pageX, e.pageY),
                      this.autoScroller.handleMove(e.pageX, e.pageY)),
                      this.emitter.trigger("dragmove", e))
                  }
              }
              ,
              this.onPointerUp = e=>{
                  var t;
                  this.isInteracting && (this.isInteracting = !1,
                  (t = document.body).style.userSelect = "",
                  t.style.webkitUserSelect = "",
                  t.removeEventListener("selectstart", Ve),
                  document.body.removeEventListener("contextmenu", Ve),
                  this.emitter.trigger("pointerup", e),
                  this.isDragging && (this.autoScroller.stop(),
                  this.tryStopDrag(e)),
                  this.delayTimeoutId && (clearTimeout(this.delayTimeoutId),
                  this.delayTimeoutId = null))
              }
              ;
              let n = this.pointer = new Hl(e);
              n.emitter.on("pointerdown", this.onPointerDown),
              n.emitter.on("pointermove", this.onPointerMove),
              n.emitter.on("pointerup", this.onPointerUp),
              t && (n.selector = t),
              this.mirror = new Nl,
              this.autoScroller = new zl
          }
          destroy() {
              this.pointer.destroy(),
              this.onPointerUp({})
          }
          startDelay(e) {
              "number" == typeof this.delay ? this.delayTimeoutId = setTimeout((()=>{
                  this.delayTimeoutId = null,
                  this.handleDelayEnd(e)
              }
              ), this.delay) : this.handleDelayEnd(e)
          }
          handleDelayEnd(e) {
              this.isDelayEnded = !0,
              this.tryStartDrag(e)
          }
          handleDistanceSurpassed(e) {
              this.isDistanceSurpassed = !0,
              this.tryStartDrag(e)
          }
          tryStartDrag(e) {
              this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0,
              this.mirrorNeedsRevert = !1,
              this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
              this.emitter.trigger("dragstart", e),
              !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
          }
          tryStopDrag(e) {
              this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
          }
          stopDrag(e) {
              this.isDragging = !1,
              this.emitter.trigger("dragend", e)
          }
          setIgnoreMove(e) {
              this.pointer.shouldIgnoreMove = e
          }
          setMirrorIsVisible(e) {
              this.mirror.setIsVisible(e)
          }
          setMirrorNeedsRevert(e) {
              this.mirrorNeedsRevert = e
          }
          setAutoScrollEnabled(e) {
              this.autoScroller.isEnabled = e
          }
      }
      class Ul {
          constructor(e) {
              this.origRect = Ui(e),
              this.scrollCaches = Gi(e).map((e=>new Ll(e,!0)))
          }
          destroy() {
              for (let e of this.scrollCaches)
                  e.destroy()
          }
          computeLeft() {
              let e = this.origRect.left;
              for (let t of this.scrollCaches)
                  e += t.origScrollLeft - t.getScrollLeft();
              return e
          }
          computeTop() {
              let e = this.origRect.top;
              for (let t of this.scrollCaches)
                  e += t.origScrollTop - t.getScrollTop();
              return e
          }
          isWithinClipping(e, t) {
              let n = {
                  left: e,
                  top: t
              };
              for (let e of this.scrollCaches)
                  if (!Gl(e.getEventTarget()) && !Ei(n, e.clientRect))
                      return !1;
              return !0
          }
      }
      function Gl(e) {
          let t = e.tagName;
          return "HTML" === t || "BODY" === t
      }
      class Fl {
          constructor(e, t) {
              this.useSubjectCenter = !1,
              this.requireInitial = !0,
              this.initialHit = null,
              this.movingHit = null,
              this.finalHit = null,
              this.handlePointerDown = e=>{
                  let {dragging: t} = this;
                  this.initialHit = null,
                  this.movingHit = null,
                  this.finalHit = null,
                  this.prepareHits(),
                  this.processFirstCoord(e),
                  this.initialHit || !this.requireInitial ? (t.setIgnoreMove(!1),
                  this.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
              }
              ,
              this.handleDragStart = e=>{
                  this.emitter.trigger("dragstart", e),
                  this.handleMove(e, !0)
              }
              ,
              this.handleDragMove = e=>{
                  this.emitter.trigger("dragmove", e),
                  this.handleMove(e)
              }
              ,
              this.handlePointerUp = e=>{
                  this.releaseHits(),
                  this.emitter.trigger("pointerup", e)
              }
              ,
              this.handleDragEnd = e=>{
                  this.movingHit && this.emitter.trigger("hitupdate", null, !0, e),
                  this.finalHit = this.movingHit,
                  this.movingHit = null,
                  this.emitter.trigger("dragend", e)
              }
              ,
              this.droppableStore = t,
              e.emitter.on("pointerdown", this.handlePointerDown),
              e.emitter.on("dragstart", this.handleDragStart),
              e.emitter.on("dragmove", this.handleDragMove),
              e.emitter.on("pointerup", this.handlePointerUp),
              e.emitter.on("dragend", this.handleDragEnd),
              this.dragging = e,
              this.emitter = new Pr
          }
          processFirstCoord(e) {
              let t, n = {
                  left: e.pageX,
                  top: e.pageY
              }, r = n, i = e.subjectEl;
              var o, s;
              i instanceof HTMLElement && (t = Ui(i),
              o = r,
              s = t,
              r = {
                  left: Math.min(Math.max(o.left, s.left), s.right),
                  top: Math.min(Math.max(o.top, s.top), s.bottom)
              });
              let a = this.initialHit = this.queryHitForOffset(r.left, r.top);
              if (a) {
                  if (this.useSubjectCenter && t) {
                      let e = Di(t, a.rect);
                      e && (r = function(e) {
                          return {
                              left: (e.left + e.right) / 2,
                              top: (e.top + e.bottom) / 2
                          }
                      }(e))
                  }
                  this.coordAdjust = (d = n,
                  {
                      left: (l = r).left - d.left,
                      top: l.top - d.top
                  })
              } else
                  this.coordAdjust = {
                      left: 0,
                      top: 0
                  };
              var l, d
          }
          handleMove(e, t) {
              let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
              !t && Vl(this.movingHit, n) || (this.movingHit = n,
              this.emitter.trigger("hitupdate", n, !1, e))
          }
          prepareHits() {
              this.offsetTrackers = bn(this.droppableStore, (e=>(e.component.prepareHits(),
              new Ul(e.el))))
          }
          releaseHits() {
              let {offsetTrackers: e} = this;
              for (let t in e)
                  e[t].destroy();
              this.offsetTrackers = {}
          }
          queryHitForOffset(e, t) {
              let {droppableStore: n, offsetTrackers: r} = this
                , i = null;
              for (let o in n) {
                  let s = n[o].component
                    , a = r[o];
                  if (a && a.isWithinClipping(e, t)) {
                      let n = a.computeLeft()
                        , r = a.computeTop()
                        , l = e - n
                        , d = t - r
                        , {origRect: c} = a
                        , u = c.right - c.left
                        , h = c.bottom - c.top;
                      if (l >= 0 && l < u && d >= 0 && d < h) {
                          let e = s.queryHit(l, d, u, h);
                          e && tr(e.dateProfile.activeRange, e.dateSpan.range) && (!i || e.layer > i.layer) && (e.componentId = o,
                          e.context = s.context,
                          e.rect.left += n,
                          e.rect.right += n,
                          e.rect.top += r,
                          e.rect.bottom += r,
                          i = e)
                      }
                  }
              }
              return i
          }
      }
      function Vl(e, t) {
          return !e && !t || Boolean(e) === Boolean(t) && (n = e.dateSpan,
          r = t.dateSpan,
          Kn(n.range, r.range) && n.allDay === r.allDay && function(e, t) {
              for (let n in t)
                  if ("range" !== n && "allDay" !== n && e[n] !== t[n])
                      return !1;
              for (let n in e)
                  if (!(n in t))
                      return !1;
              return !0
          }(n, r));
          var n, r
      }
      function ql(e, t) {
          let n = {};
          for (let r of t.pluginHooks.datePointTransforms)
              Object.assign(n, r(e, t));
          var r, i;
          return Object.assign(n, (r = e,
          {
              date: (i = t.dateEnv).toDate(r.range.start),
              dateStr: i.formatIso(r.range.start, {
                  omitTime: r.allDay
              }),
              allDay: r.allDay
          })),
          n
      }
      class Yl extends bi {
          constructor(e) {
              super(e),
              this.subjectEl = null,
              this.subjectSeg = null,
              this.isDragging = !1,
              this.eventRange = null,
              this.relevantEvents = null,
              this.receivingContext = null,
              this.validMutation = null,
              this.mutatedRelevantEvents = null,
              this.handlePointerDown = e=>{
                  let t = e.origEvent.target
                    , {component: n, dragging: r} = this
                    , {mirror: i} = r
                    , {options: o} = n.context
                    , s = n.context;
                  this.subjectEl = e.subjectEl;
                  let a = this.subjectSeg = Xr(e.subjectEl)
                    , l = (this.eventRange = a.eventRange).instance.instanceId;
                  this.relevantEvents = wr(s.getCurrentData().eventStore, l),
                  r.minDistance = e.isTouch ? 0 : o.eventDragMinDistance,
                  r.delay = e.isTouch && l !== n.props.eventSelection ? function(e) {
                      let {options: t} = e.context
                        , n = t.eventLongPressDelay;
                      return null == n && (n = t.longPressDelay),
                      n
                  }(n) : null,
                  o.fixedMirrorParent ? i.parentNode = o.fixedMirrorParent : i.parentNode = Pe(t, ".fc"),
                  i.revertDuration = o.dragRevertDuration;
                  let d = n.isValidSegDownEl(t) && !Pe(t, ".fc-event-resizer");
                  r.setIgnoreMove(!d),
                  this.isDragging = d && e.subjectEl.classList.contains("fc-event-draggable")
              }
              ,
              this.handleDragStart = e=>{
                  let t = this.component.context
                    , n = this.eventRange
                    , r = n.instance.instanceId;
                  e.isTouch ? r !== this.component.props.eventSelection && t.dispatch({
                      type: "SELECT_EVENT",
                      eventInstanceId: r
                  }) : t.dispatch({
                      type: "UNSELECT_EVENT"
                  }),
                  this.isDragging && (t.calendarApi.unselect(e),
                  t.emitter.trigger("eventDragStart", {
                      el: this.subjectEl,
                      event: new qr(t,n.def,n.instance),
                      jsEvent: e.origEvent,
                      view: t.viewApi
                  }))
              }
              ,
              this.handleHitUpdate = (e,t)=>{
                  if (!this.isDragging)
                      return;
                  let n = this.relevantEvents
                    , r = this.hitDragging.initialHit
                    , i = this.component.context
                    , o = null
                    , s = null
                    , a = null
                    , l = !1
                    , d = {
                      affectedEvents: n,
                      mutatedEvents: {
                          defs: {},
                          instances: {}
                      },
                      isEvent: !0
                  };
                  if (e) {
                      o = e.context;
                      let t = o.options;
                      i === o || t.editable && t.droppable ? (s = function(e, t, n) {
                          let r = e.dateSpan
                            , i = t.dateSpan
                            , o = r.range.start
                            , s = i.range.start
                            , a = {};
                          r.allDay !== i.allDay && (a.allDay = i.allDay,
                          a.hasEnd = t.context.options.allDayMaintainDuration,
                          i.allDay && (o = Tt(o)));
                          let l = or(o, s, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
                          l.milliseconds && (a.allDay = !1);
                          let d = {
                              datesDelta: l,
                              standardProps: a
                          };
                          for (let r of n)
                              r(d, e, t);
                          return d
                      }(r, e, o.getCurrentData().pluginHooks.eventDragMutationMassagers),
                      s && (a = Ur(n, o.getCurrentData().eventUiBases, s, o),
                      d.mutatedEvents = a,
                      xo(d, e.dateProfile, o) || (l = !0,
                      s = null,
                      a = null,
                      d.mutatedEvents = {
                          defs: {},
                          instances: {}
                      }))) : o = null
                  }
                  this.displayDrag(o, d),
                  l ? Je() : Ke(),
                  t || (i === o && Vl(r, e) && (s = null),
                  this.dragging.setMirrorNeedsRevert(!s),
                  this.dragging.setMirrorIsVisible(!e || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")),
                  this.receivingContext = o,
                  this.validMutation = s,
                  this.mutatedRelevantEvents = a)
              }
              ,
              this.handlePointerUp = ()=>{
                  this.isDragging || this.cleanup()
              }
              ,
              this.handleDragEnd = e=>{
                  if (this.isDragging) {
                      let t = this.component.context
                        , n = t.viewApi
                        , {receivingContext: r, validMutation: i} = this
                        , o = this.eventRange.def
                        , s = this.eventRange.instance
                        , a = new qr(t,o,s)
                        , l = this.relevantEvents
                        , d = this.mutatedRelevantEvents
                        , {finalHit: c} = this.hitDragging;
                      if (this.clearDrag(),
                      t.emitter.trigger("eventDragStop", {
                          el: this.subjectEl,
                          event: a,
                          jsEvent: e.origEvent,
                          view: n
                      }),
                      i) {
                          if (r === t) {
                              let r = new qr(t,d.defs[o.defId],s ? d.instances[s.instanceId] : null);
                              t.dispatch({
                                  type: "MERGE_EVENTS",
                                  eventStore: d
                              });
                              let c = {
                                  oldEvent: a,
                                  event: r,
                                  relatedEvents: Qr(d, t, s),
                                  revert() {
                                      t.dispatch({
                                          type: "MERGE_EVENTS",
                                          eventStore: l
                                      })
                                  }
                              }
                                , u = {};
                              for (let e of t.getCurrentData().pluginHooks.eventDropTransformers)
                                  Object.assign(u, e(i, t));
                              t.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, c), u), {
                                  el: e.subjectEl,
                                  delta: i.datesDelta,
                                  jsEvent: e.origEvent,
                                  view: n
                              })),
                              t.emitter.trigger("eventChange", c)
                          } else if (r) {
                              let i = {
                                  event: a,
                                  relatedEvents: Qr(l, t, s),
                                  revert() {
                                      t.dispatch({
                                          type: "MERGE_EVENTS",
                                          eventStore: l
                                      })
                                  }
                              };
                              t.emitter.trigger("eventLeave", Object.assign(Object.assign({}, i), {
                                  draggedEl: e.subjectEl,
                                  view: n
                              })),
                              t.dispatch({
                                  type: "REMOVE_EVENTS",
                                  eventStore: l
                              }),
                              t.emitter.trigger("eventRemove", i);
                              let u = d.defs[o.defId]
                                , h = d.instances[s.instanceId]
                                , f = new qr(r,u,h);
                              r.dispatch({
                                  type: "MERGE_EVENTS",
                                  eventStore: d
                              });
                              let p = {
                                  event: f,
                                  relatedEvents: Qr(d, r, h),
                                  revert() {
                                      r.dispatch({
                                          type: "REMOVE_EVENTS",
                                          eventStore: d
                                      })
                                  }
                              };
                              r.emitter.trigger("eventAdd", p),
                              e.isTouch && r.dispatch({
                                  type: "SELECT_EVENT",
                                  eventInstanceId: s.instanceId
                              }),
                              r.emitter.trigger("drop", Object.assign(Object.assign({}, ql(c.dateSpan, r)), {
                                  draggedEl: e.subjectEl,
                                  jsEvent: e.origEvent,
                                  view: c.context.viewApi
                              })),
                              r.emitter.trigger("eventReceive", Object.assign(Object.assign({}, p), {
                                  draggedEl: e.subjectEl,
                                  view: c.context.viewApi
                              }))
                          }
                      } else
                          t.emitter.trigger("_noEventDrop")
                  }
                  this.cleanup()
              }
              ;
              let {component: t} = this
                , {options: n} = t.context
                , r = this.dragging = new Bl(e.el);
              r.pointer.selector = Yl.SELECTOR,
              r.touchScrollAllowed = !1,
              r.autoScroller.isEnabled = n.dragScroll;
              let i = this.hitDragging = new Fl(this.dragging,Si);
              i.useSubjectCenter = e.useEventCenter,
              i.emitter.on("pointerdown", this.handlePointerDown),
              i.emitter.on("dragstart", this.handleDragStart),
              i.emitter.on("hitupdate", this.handleHitUpdate),
              i.emitter.on("pointerup", this.handlePointerUp),
              i.emitter.on("dragend", this.handleDragEnd)
          }
          destroy() {
              this.dragging.destroy()
          }
          displayDrag(e, t) {
              let n = this.component.context
                , r = this.receivingContext;
              r && r !== e && (r === n ? r.dispatch({
                  type: "SET_EVENT_DRAG",
                  state: {
                      affectedEvents: t.affectedEvents,
                      mutatedEvents: {
                          defs: {},
                          instances: {}
                      },
                      isEvent: !0
                  }
              }) : r.dispatch({
                  type: "UNSET_EVENT_DRAG"
              })),
              e && e.dispatch({
                  type: "SET_EVENT_DRAG",
                  state: t
              })
          }
          clearDrag() {
              let e = this.component.context
                , {receivingContext: t} = this;
              t && t.dispatch({
                  type: "UNSET_EVENT_DRAG"
              }),
              e !== t && e.dispatch({
                  type: "UNSET_EVENT_DRAG"
              })
          }
          cleanup() {
              this.subjectSeg = null,
              this.isDragging = !1,
              this.eventRange = null,
              this.relevantEvents = null,
              this.receivingContext = null,
              this.validMutation = null,
              this.mutatedRelevantEvents = null
          }
      }
      Yl.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
      const Ql = {
          fixedMirrorParent: gn
      }
        , Zl = {
          dateClick: gn,
          eventDragStart: gn,
          eventDragStop: gn,
          eventDrop: gn,
          eventResizeStart: gn,
          eventResizeStop: gn,
          eventResize: gn,
          drop: gn,
          eventReceive: gn,
          eventLeave: gn
      };
      class $l {
          constructor(e, t) {
              this.receivingContext = null,
              this.droppableEvent = null,
              this.suppliedDragMeta = null,
              this.dragMeta = null,
              this.handleDragStart = e=>{
                  this.dragMeta = this.buildDragMeta(e.subjectEl)
              }
              ,
              this.handleHitUpdate = (e,t,n)=>{
                  let {dragging: r} = this.hitDragging
                    , i = null
                    , o = null
                    , s = !1
                    , a = {
                      affectedEvents: {
                          defs: {},
                          instances: {}
                      },
                      mutatedEvents: {
                          defs: {},
                          instances: {}
                      },
                      isEvent: this.dragMeta.create
                  };
                  e && (i = e.context,
                  this.canDropElOnCalendar(n.subjectEl, i) && (o = function(e, t, n) {
                      let r = Object.assign({}, t.leftoverProps);
                      for (let i of n.pluginHooks.externalDefTransforms)
                          Object.assign(r, i(e, t));
                      let {refined: i, extra: o} = gr(r, n)
                        , s = vr(i, o, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n)
                        , a = e.range.start;
                      e.allDay && t.startTime && (a = n.dateEnv.add(a, t.startTime));
                      let l = t.duration ? n.dateEnv.add(a, t.duration) : Br(e.allDay, a, n);
                      return {
                          def: s,
                          instance: lr(s.defId, {
                              start: a,
                              end: l
                          })
                      }
                  }(e.dateSpan, this.dragMeta, i),
                  a.mutatedEvents = br(o),
                  s = !xo(a, e.dateProfile, i),
                  s && (a.mutatedEvents = {
                      defs: {},
                      instances: {}
                  },
                  o = null))),
                  this.displayDrag(i, a),
                  r.setMirrorIsVisible(t || !o || !document.querySelector(".fc-event-mirror")),
                  s ? Je() : Ke(),
                  t || (r.setMirrorNeedsRevert(!o),
                  this.receivingContext = i,
                  this.droppableEvent = o)
              }
              ,
              this.handleDragEnd = e=>{
                  let {receivingContext: t, droppableEvent: n} = this;
                  if (this.clearDrag(),
                  t && n) {
                      let r = this.hitDragging.finalHit
                        , i = r.context.viewApi
                        , o = this.dragMeta;
                      if (t.emitter.trigger("drop", Object.assign(Object.assign({}, ql(r.dateSpan, t)), {
                          draggedEl: e.subjectEl,
                          jsEvent: e.origEvent,
                          view: i
                      })),
                      o.create) {
                          let r = br(n);
                          t.dispatch({
                              type: "MERGE_EVENTS",
                              eventStore: r
                          }),
                          e.isTouch && t.dispatch({
                              type: "SELECT_EVENT",
                              eventInstanceId: n.instance.instanceId
                          }),
                          t.emitter.trigger("eventReceive", {
                              event: new qr(t,n.def,n.instance),
                              relatedEvents: [],
                              revert() {
                                  t.dispatch({
                                      type: "REMOVE_EVENTS",
                                      eventStore: r
                                  })
                              },
                              draggedEl: e.subjectEl,
                              view: i
                          })
                      }
                  }
                  this.receivingContext = null,
                  this.droppableEvent = null
              }
              ;
              let n = this.hitDragging = new Fl(e,Si);
              n.requireInitial = !1,
              n.emitter.on("dragstart", this.handleDragStart),
              n.emitter.on("hitupdate", this.handleHitUpdate),
              n.emitter.on("dragend", this.handleDragEnd),
              this.suppliedDragMeta = t
          }
          buildDragMeta(e) {
              return "object" == typeof this.suppliedDragMeta ? so(this.suppliedDragMeta) : "function" == typeof this.suppliedDragMeta ? so(this.suppliedDragMeta(e)) : function(e) {
                  let t = function(e, t) {
                      let n = io.dataAttrPrefix
                        , r = (n ? n + "-" : "") + "event";
                      return e.getAttribute("data-" + r) || ""
                  }(e);
                  return so(t ? JSON.parse(t) : {
                      create: !1
                  })
              }(e)
          }
          displayDrag(e, t) {
              let n = this.receivingContext;
              n && n !== e && n.dispatch({
                  type: "UNSET_EVENT_DRAG"
              }),
              e && e.dispatch({
                  type: "SET_EVENT_DRAG",
                  state: t
              })
          }
          clearDrag() {
              this.receivingContext && this.receivingContext.dispatch({
                  type: "UNSET_EVENT_DRAG"
              })
          }
          canDropElOnCalendar(e, t) {
              let n = t.options.dropAccept;
              return "function" == typeof n ? n.call(t.calendarApi, e) : "string" != typeof n || !n || Boolean(Le(e, n))
          }
      }
      io.dataAttrPrefix = "";
      class Xl {
          constructor(e, t={}) {
              this.handlePointerDown = e=>{
                  let {dragging: t} = this
                    , {minDistance: n, longPressDelay: r} = this.settings;
                  t.minDistance = null != n ? n : e.isTouch ? 0 : sn.eventDragMinDistance,
                  t.delay = e.isTouch ? null != r ? r : sn.longPressDelay : 0
              }
              ,
              this.handleDragStart = e=>{
                  e.isTouch && this.dragging.delay && e.subjectEl.classList.contains("fc-event") && this.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")
              }
              ,
              this.settings = t;
              let n = this.dragging = new Bl(e);
              n.touchScrollAllowed = !1,
              null != t.itemSelector && (n.pointer.selector = t.itemSelector),
              null != t.appendTo && (n.mirror.parentNode = t.appendTo),
              n.emitter.on("pointerdown", this.handlePointerDown),
              n.emitter.on("dragstart", this.handleDragStart),
              new $l(n,t.eventData)
          }
          destroy() {
              this.dragging.destroy()
          }
      }
      var Jl = bs({
          name: "@fullcalendar/interaction",
          componentInteractions: [class extends bi {
              constructor(e) {
                  super(e),
                  this.handlePointerDown = e=>{
                      let {dragging: t} = this
                        , n = e.origEvent.target;
                      t.setIgnoreMove(!this.component.isValidDateDownEl(n))
                  }
                  ,
                  this.handleDragEnd = e=>{
                      let {component: t} = this
                        , {pointer: n} = this.dragging;
                      if (!n.wasTouchScroll) {
                          let {initialHit: n, finalHit: r} = this.hitDragging;
                          if (n && r && Vl(n, r)) {
                              let {context: r} = t
                                , i = Object.assign(Object.assign({}, ql(n.dateSpan, r)), {
                                  dayEl: n.dayEl,
                                  jsEvent: e.origEvent,
                                  view: r.viewApi || r.calendarApi.view
                              });
                              r.emitter.trigger("dateClick", i)
                          }
                      }
                  }
                  ,
                  this.dragging = new Bl(e.el),
                  this.dragging.autoScroller.isEnabled = !1;
                  let t = this.hitDragging = new Fl(this.dragging,wi(e));
                  t.emitter.on("pointerdown", this.handlePointerDown),
                  t.emitter.on("dragend", this.handleDragEnd)
              }
              destroy() {
                  this.dragging.destroy()
              }
          }
          , class extends bi {
              constructor(e) {
                  super(e),
                  this.dragSelection = null,
                  this.handlePointerDown = e=>{
                      let {component: t, dragging: n} = this
                        , {options: r} = t.context
                        , i = r.selectable && t.isValidDateDownEl(e.origEvent.target);
                      n.setIgnoreMove(!i),
                      n.delay = e.isTouch ? function(e) {
                          let {options: t} = e.context
                            , n = t.selectLongPressDelay;
                          return null == n && (n = t.longPressDelay),
                          n
                      }(t) : null
                  }
                  ,
                  this.handleDragStart = e=>{
                      this.component.context.calendarApi.unselect(e)
                  }
                  ,
                  this.handleHitUpdate = (e,t)=>{
                      let {context: n} = this.component
                        , r = null
                        , i = !1;
                      if (e) {
                          let t = this.hitDragging.initialHit;
                          e.componentId === t.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(t, e) || (r = function(e, t, n) {
                              let r = e.dateSpan
                                , i = t.dateSpan
                                , o = [r.range.start, r.range.end, i.range.start, i.range.end];
                              o.sort(st);
                              let s = {};
                              for (let r of n) {
                                  let n = r(e, t);
                                  if (!1 === n)
                                      return null;
                                  n && Object.assign(s, n)
                              }
                              return s.range = {
                                  start: o[0],
                                  end: o[3]
                              },
                              s.allDay = r.allDay,
                              s
                          }(t, e, n.pluginHooks.dateSelectionTransformers)),
                          r && function(e, t, n) {
                              return !!tr(t.validRange, e.range) && Eo({
                                  dateSelection: e
                              }, n)
                          }(r, e.dateProfile, n) || (i = !0,
                          r = null)
                      }
                      r ? n.dispatch({
                          type: "SELECT_DATES",
                          selection: r
                      }) : t || n.dispatch({
                          type: "UNSELECT_DATES"
                      }),
                      i ? Je() : Ke(),
                      t || (this.dragSelection = r)
                  }
                  ,
                  this.handlePointerUp = e=>{
                      this.dragSelection && (jr(this.dragSelection, e, this.component.context),
                      this.dragSelection = null)
                  }
                  ;
                  let {component: t} = e
                    , {options: n} = t.context
                    , r = this.dragging = new Bl(e.el);
                  r.touchScrollAllowed = !1,
                  r.minDistance = n.selectMinDistance || 0,
                  r.autoScroller.isEnabled = n.dragScroll;
                  let i = this.hitDragging = new Fl(this.dragging,wi(e));
                  i.emitter.on("pointerdown", this.handlePointerDown),
                  i.emitter.on("dragstart", this.handleDragStart),
                  i.emitter.on("hitupdate", this.handleHitUpdate),
                  i.emitter.on("pointerup", this.handlePointerUp)
              }
              destroy() {
                  this.dragging.destroy()
              }
          }
          , Yl, class extends bi {
              constructor(e) {
                  super(e),
                  this.draggingSegEl = null,
                  this.draggingSeg = null,
                  this.eventRange = null,
                  this.relevantEvents = null,
                  this.validMutation = null,
                  this.mutatedRelevantEvents = null,
                  this.handlePointerDown = e=>{
                      let {component: t} = this
                        , n = Xr(this.querySegEl(e))
                        , r = this.eventRange = n.eventRange;
                      this.dragging.minDistance = t.context.options.eventDragMinDistance,
                      this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && this.component.props.eventSelection !== r.instance.instanceId)
                  }
                  ,
                  this.handleDragStart = e=>{
                      let {context: t} = this.component
                        , n = this.eventRange;
                      this.relevantEvents = wr(t.getCurrentData().eventStore, this.eventRange.instance.instanceId);
                      let r = this.querySegEl(e);
                      this.draggingSegEl = r,
                      this.draggingSeg = Xr(r),
                      t.calendarApi.unselect(),
                      t.emitter.trigger("eventResizeStart", {
                          el: r,
                          event: new qr(t,n.def,n.instance),
                          jsEvent: e.origEvent,
                          view: t.viewApi
                      })
                  }
                  ,
                  this.handleHitUpdate = (e,t,n)=>{
                      let {context: r} = this.component
                        , i = this.relevantEvents
                        , o = this.hitDragging.initialHit
                        , s = this.eventRange.instance
                        , a = null
                        , l = null
                        , d = !1
                        , c = {
                          affectedEvents: i,
                          mutatedEvents: {
                              defs: {},
                              instances: {}
                          },
                          isEvent: !0
                      };
                      e && (e.componentId === o.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(o, e) || (a = function(e, t, n, r) {
                          let i = e.context.dateEnv
                            , o = or(e.dateSpan.range.start, t.dateSpan.range.start, i, e.largeUnit);
                          if (n) {
                              if (i.add(r.start, o) < r.end)
                                  return {
                                      startDelta: o
                                  }
                          } else if (i.add(r.end, o) > r.start)
                              return {
                                  endDelta: o
                              };
                          return null
                      }(o, e, n.subjectEl.classList.contains("fc-event-resizer-start"), s.range))),
                      a && (l = Ur(i, r.getCurrentData().eventUiBases, a, r),
                      c.mutatedEvents = l,
                      xo(c, e.dateProfile, r) || (d = !0,
                      a = null,
                      l = null,
                      c.mutatedEvents = null)),
                      l ? r.dispatch({
                          type: "SET_EVENT_RESIZE",
                          state: c
                      }) : r.dispatch({
                          type: "UNSET_EVENT_RESIZE"
                      }),
                      d ? Je() : Ke(),
                      t || (a && Vl(o, e) && (a = null),
                      this.validMutation = a,
                      this.mutatedRelevantEvents = l)
                  }
                  ,
                  this.handleDragEnd = e=>{
                      let {context: t} = this.component
                        , n = this.eventRange.def
                        , r = this.eventRange.instance
                        , i = new qr(t,n,r)
                        , o = this.relevantEvents
                        , s = this.mutatedRelevantEvents;
                      if (t.emitter.trigger("eventResizeStop", {
                          el: this.draggingSegEl,
                          event: i,
                          jsEvent: e.origEvent,
                          view: t.viewApi
                      }),
                      this.validMutation) {
                          let a = new qr(t,s.defs[n.defId],r ? s.instances[r.instanceId] : null);
                          t.dispatch({
                              type: "MERGE_EVENTS",
                              eventStore: s
                          });
                          let l = {
                              oldEvent: i,
                              event: a,
                              relatedEvents: Qr(s, t, r),
                              revert() {
                                  t.dispatch({
                                      type: "MERGE_EVENTS",
                                      eventStore: o
                                  })
                              }
                          };
                          t.emitter.trigger("eventResize", Object.assign(Object.assign({}, l), {
                              el: this.draggingSegEl,
                              startDelta: this.validMutation.startDelta || ut(0),
                              endDelta: this.validMutation.endDelta || ut(0),
                              jsEvent: e.origEvent,
                              view: t.viewApi
                          })),
                          t.emitter.trigger("eventChange", l)
                      } else
                          t.emitter.trigger("_noEventResize");
                      this.draggingSeg = null,
                      this.relevantEvents = null,
                      this.validMutation = null
                  }
                  ;
                  let {component: t} = e
                    , n = this.dragging = new Bl(e.el);
                  n.pointer.selector = ".fc-event-resizer",
                  n.touchScrollAllowed = !1,
                  n.autoScroller.isEnabled = t.context.options.dragScroll;
                  let r = this.hitDragging = new Fl(this.dragging,wi(e));
                  r.emitter.on("pointerdown", this.handlePointerDown),
                  r.emitter.on("dragstart", this.handleDragStart),
                  r.emitter.on("hitupdate", this.handleHitUpdate),
                  r.emitter.on("dragend", this.handleDragEnd)
              }
              destroy() {
                  this.dragging.destroy()
              }
              querySegEl(e) {
                  return Pe(e.subjectEl, ".fc-event")
              }
          }
          ],
          calendarInteractions: [class {
              constructor(e) {
                  this.context = e,
                  this.isRecentPointerDateSelect = !1,
                  this.matchesCancel = !1,
                  this.matchesEvent = !1,
                  this.onSelect = e=>{
                      e.jsEvent && (this.isRecentPointerDateSelect = !0)
                  }
                  ,
                  this.onDocumentPointerDown = e=>{
                      let t = this.context.options.unselectCancel
                        , n = Ue(e.origEvent);
                      this.matchesCancel = !!Pe(n, t),
                      this.matchesEvent = !!Pe(n, Yl.SELECTOR)
                  }
                  ,
                  this.onDocumentPointerUp = e=>{
                      let {context: t} = this
                        , {documentPointer: n} = this
                        , r = t.getCurrentData();
                      if (!n.wasTouchScroll) {
                          if (r.dateSelection && !this.isRecentPointerDateSelect) {
                              let n = t.options.unselectAuto;
                              !n || n && this.matchesCancel || t.calendarApi.unselect(e)
                          }
                          r.eventSelection && !this.matchesEvent && t.dispatch({
                              type: "UNSELECT_EVENT"
                          })
                      }
                      this.isRecentPointerDateSelect = !1
                  }
                  ;
                  let t = this.documentPointer = new Hl(document);
                  t.shouldIgnoreMove = !0,
                  t.shouldWatchScroll = !1,
                  t.emitter.on("pointerdown", this.onDocumentPointerDown),
                  t.emitter.on("pointerup", this.onDocumentPointerUp),
                  e.emitter.on("select", this.onSelect)
              }
              destroy() {
                  this.context.emitter.off("select", this.onSelect),
                  this.documentPointer.destroy()
              }
          }
          ],
          elementDraggingImpl: Bl,
          optionRefiners: Ql,
          listenerRefiners: Zl
      });
      class Kl {
          title = "";
          controlHtml = "";
          contentHtml = '<div class="demo-calendar"></div>';
          initSafely(e, t, n) {
              let r = this.init(e, t, n);
              r instanceof ua && (r.render(),
              this.calendar = r)
          }
          init(e, t, n) {}
          destroy() {
              this.calendar && (this.calendar.destroy(),
              this.calendar = null)
          }
      }
      const ed = /^\w+:\/\//;
      function td(e) {
          return !ed.test(e)
      }
      const nd = "Europe/Luxembourg";
      function rd(e) {
          return "Tag" === e || "Monat" === e ? "r" : "Jahr" === e ? "s" : ""
      }
      var id = {
          code: "de-at",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Zurück",
              next: "Vor",
              today: "Heute",
              year: "Jahr",
              month: "Monat",
              week: "Woche",
              day: "Tag",
              list: "Terminübersicht"
          },
          weekText: "KW",
          weekTextLong: "Woche",
          allDayText: "Ganztägig",
          moreLinkText: e=>"+ weitere " + e,
          noEventsText: "Keine Ereignisse anzuzeigen",
          buttonHints: {
              prev: e=>`Vorherige${rd(e)} ${e}`,
              next: e=>`Nächste${rd(e)} ${e}`,
              today: e=>"Tag" === e ? "Heute" : `Diese${rd(e)} ${e}`
          },
          viewHint: e=>e + ("Woche" === e ? "n" : "Monat" === e ? "s" : "es") + "ansicht",
          navLinkHint: "Gehe zu $0",
          moreLinkHint: e=>"Zeige " + (1 === e ? "ein weiteres Ereignis" : e + " weitere Ereignisse"),
          closeHint: "Schließen",
          timeHint: "Uhrzeit",
          eventHint: "Ereignis"
      };
      function od(e) {
          return "Tag" === e || "Monat" === e ? "r" : "Jahr" === e ? "s" : ""
      }
      var sd = {
          code: "de",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Zurück",
              next: "Vor",
              today: "Heute",
              year: "Jahr",
              month: "Monat",
              week: "Woche",
              day: "Tag",
              list: "Terminübersicht"
          },
          weekText: "KW",
          weekTextLong: "Woche",
          allDayText: "Ganztägig",
          moreLinkText: e=>"+ weitere " + e,
          noEventsText: "Keine Ereignisse anzuzeigen",
          buttonHints: {
              prev: e=>`Vorherige${od(e)} ${e}`,
              next: e=>`Nächste${od(e)} ${e}`,
              today: e=>"Tag" === e ? "Heute" : `Diese${od(e)} ${e}`
          },
          viewHint: e=>e + ("Woche" === e ? "n" : "Monat" === e ? "s" : "es") + "ansicht",
          navLinkHint: "Gehe zu $0",
          moreLinkHint: e=>"Zeige " + (1 === e ? "ein weiteres Ereignis" : e + " weitere Ereignisse"),
          closeHint: "Schließen",
          timeHint: "Uhrzeit",
          eventHint: "Ereignis"
      }
        , ad = [{
          code: "af",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Vorige",
              next: "Volgende",
              today: "Vandag",
              year: "Jaar",
              month: "Maand",
              week: "Week",
              day: "Dag",
              list: "Agenda"
          },
          allDayText: "Heeldag",
          moreLinkText: "Addisionele",
          noEventsText: "Daar is geen gebeurtenisse nie"
      }, {
          code: "ar-dz",
          week: {
              dow: 0,
              doy: 4
          },
          direction: "rtl",
          buttonText: {
              prev: "السابق",
              next: "التالي",
              today: "اليوم",
              year: "سنة",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
              list: "أجندة"
          },
          weekText: "أسبوع",
          allDayText: "اليوم كله",
          moreLinkText: "أخرى",
          noEventsText: "أي أحداث لعرض"
      }, {
          code: "ar-kw",
          week: {
              dow: 0,
              doy: 12
          },
          direction: "rtl",
          buttonText: {
              prev: "السابق",
              next: "التالي",
              today: "اليوم",
              year: "سنة",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
              list: "أجندة"
          },
          weekText: "أسبوع",
          allDayText: "اليوم كله",
          moreLinkText: "أخرى",
          noEventsText: "أي أحداث لعرض"
      }, {
          code: "ar-ly",
          week: {
              dow: 6,
              doy: 12
          },
          direction: "rtl",
          buttonText: {
              prev: "السابق",
              next: "التالي",
              today: "اليوم",
              year: "سنة",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
              list: "أجندة"
          },
          weekText: "أسبوع",
          allDayText: "اليوم كله",
          moreLinkText: "أخرى",
          noEventsText: "أي أحداث لعرض"
      }, {
          code: "ar-ma",
          week: {
              dow: 6,
              doy: 12
          },
          direction: "rtl",
          buttonText: {
              prev: "السابق",
              next: "التالي",
              today: "اليوم",
              year: "سنة",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
              list: "أجندة"
          },
          weekText: "أسبوع",
          allDayText: "اليوم كله",
          moreLinkText: "أخرى",
          noEventsText: "أي أحداث لعرض"
      }, {
          code: "ar-sa",
          week: {
              dow: 0,
              doy: 6
          },
          direction: "rtl",
          buttonText: {
              prev: "السابق",
              next: "التالي",
              today: "اليوم",
              year: "سنة",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
              list: "أجندة"
          },
          weekText: "أسبوع",
          allDayText: "اليوم كله",
          moreLinkText: "أخرى",
          noEventsText: "أي أحداث لعرض"
      }, {
          code: "ar-tn",
          week: {
              dow: 1,
              doy: 4
          },
          direction: "rtl",
          buttonText: {
              prev: "السابق",
              next: "التالي",
              today: "اليوم",
              year: "سنة",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
              list: "أجندة"
          },
          weekText: "أسبوع",
          allDayText: "اليوم كله",
          moreLinkText: "أخرى",
          noEventsText: "أي أحداث لعرض"
      }, {
          code: "ar",
          week: {
              dow: 6,
              doy: 12
          },
          direction: "rtl",
          buttonText: {
              prev: "السابق",
              next: "التالي",
              today: "اليوم",
              year: "سنة",
              month: "شهر",
              week: "أسبوع",
              day: "يوم",
              list: "أجندة"
          },
          weekText: "أسبوع",
          allDayText: "اليوم كله",
          moreLinkText: "أخرى",
          noEventsText: "أي أحداث لعرض"
      }, {
          code: "az",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Əvvəl",
              next: "Sonra",
              today: "Bu Gün",
              year: "Il",
              month: "Ay",
              week: "Həftə",
              day: "Gün",
              list: "Gündəm"
          },
          weekText: "Həftə",
          allDayText: "Bütün Gün",
          moreLinkText: e=>"+ daha çox " + e,
          noEventsText: "Göstərmək üçün hadisə yoxdur"
      }, {
          code: "bg",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "назад",
              next: "напред",
              today: "днес",
              year: "година",
              month: "Месец",
              week: "Седмица",
              day: "Ден",
              list: "График"
          },
          allDayText: "Цял ден",
          moreLinkText: e=>"+още " + e,
          noEventsText: "Няма събития за показване"
      }, {
          code: "bn",
          week: {
              dow: 0,
              doy: 6
          },
          buttonText: {
              prev: "পেছনে",
              next: "সামনে",
              today: "আজ",
              year: "বছর",
              month: "মাস",
              week: "সপ্তাহ",
              day: "দিন",
              list: "তালিকা"
          },
          weekText: "সপ্তাহ",
          allDayText: "সারাদিন",
          moreLinkText: e=>"+অন্যান্য " + e,
          noEventsText: "কোনো ইভেন্ট নেই"
      }, {
          code: "bs",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Prošli",
              next: "Sljedeći",
              today: "Danas",
              year: "Godina",
              month: "Mjesec",
              week: "Sedmica",
              day: "Dan",
              list: "Raspored"
          },
          weekText: "Sed",
          allDayText: "Cijeli dan",
          moreLinkText: e=>"+ još " + e,
          noEventsText: "Nema događaja za prikazivanje"
      }, {
          code: "ca",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Anterior",
              next: "Següent",
              today: "Avui",
              year: "Any",
              month: "Mes",
              week: "Setmana",
              day: "Dia",
              list: "Agenda"
          },
          weekText: "Set",
          allDayText: "Tot el dia",
          moreLinkText: "més",
          noEventsText: "No hi ha esdeveniments per mostrar"
      }, {
          code: "cs",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Dříve",
              next: "Později",
              today: "Nyní",
              year: "Rok",
              month: "Měsíc",
              week: "Týden",
              day: "Den",
              list: "Agenda"
          },
          weekText: "Týd",
          allDayText: "Celý den",
          moreLinkText: e=>"+další: " + e,
          noEventsText: "Žádné akce k zobrazení"
      }, {
          code: "cy",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Blaenorol",
              next: "Nesaf",
              today: "Heddiw",
              year: "Blwyddyn",
              month: "Mis",
              week: "Wythnos",
              day: "Dydd",
              list: "Rhestr"
          },
          weekText: "Wythnos",
          allDayText: "Trwy'r dydd",
          moreLinkText: "Mwy",
          noEventsText: "Dim digwyddiadau"
      }, {
          code: "da",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Forrige",
              next: "Næste",
              today: "I dag",
              year: "År",
              month: "Måned",
              week: "Uge",
              day: "Dag",
              list: "Agenda"
          },
          weekText: "Uge",
          allDayText: "Hele dagen",
          moreLinkText: "flere",
          noEventsText: "Ingen arrangementer at vise"
      }, id, sd, {
          code: "el",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Προηγούμενος",
              next: "Επόμενος",
              today: "Σήμερα",
              year: "Ετος",
              month: "Μήνας",
              week: "Εβδομάδα",
              day: "Ημέρα",
              list: "Ατζέντα"
          },
          weekText: "Εβδ",
          allDayText: "Ολοήμερο",
          moreLinkText: "περισσότερα",
          noEventsText: "Δεν υπάρχουν γεγονότα προς εμφάνιση"
      }, {
          code: "en-au",
          week: {
              dow: 1,
              doy: 4
          },
          buttonHints: {
              prev: "Previous $0",
              next: "Next $0",
              today: "This $0"
          },
          viewHint: "$0 view",
          navLinkHint: "Go to $0",
          moreLinkHint: e=>`Show ${e} more event${1 === e ? "" : "s"}`
      }, {
          code: "en-gb",
          week: {
              dow: 1,
              doy: 4
          },
          buttonHints: {
              prev: "Previous $0",
              next: "Next $0",
              today: "This $0"
          },
          viewHint: "$0 view",
          navLinkHint: "Go to $0",
          moreLinkHint: e=>`Show ${e} more event${1 === e ? "" : "s"}`
      }, {
          code: "en-nz",
          week: {
              dow: 1,
              doy: 4
          },
          buttonHints: {
              prev: "Previous $0",
              next: "Next $0",
              today: "This $0"
          },
          viewHint: "$0 view",
          navLinkHint: "Go to $0",
          moreLinkHint: e=>`Show ${e} more event${1 === e ? "" : "s"}`
      }, {
          code: "eo",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Antaŭa",
              next: "Sekva",
              today: "Hodiaŭ",
              year: "Jaro",
              month: "Monato",
              week: "Semajno",
              day: "Tago",
              list: "Tagordo"
          },
          weekText: "Sm",
          allDayText: "Tuta tago",
          moreLinkText: "pli",
          noEventsText: "Neniuj eventoj por montri"
      }, {
          code: "es",
          week: {
              dow: 0,
              doy: 6
          },
          buttonText: {
              prev: "Ant",
              next: "Sig",
              today: "Hoy",
              year: "Año",
              month: "Mes",
              week: "Semana",
              day: "Día",
              list: "Agenda"
          },
          weekText: "Sm",
          allDayText: "Todo el día",
          moreLinkText: "más",
          noEventsText: "No hay eventos para mostrar"
      }, {
          code: "es",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Ant",
              next: "Sig",
              today: "Hoy",
              year: "Año",
              month: "Mes",
              week: "Semana",
              day: "Día",
              list: "Agenda"
          },
          buttonHints: {
              prev: "$0 antes",
              next: "$0 siguiente",
              today: e=>"Día" === e ? "Hoy" : ("Semana" === e ? "Esta" : "Este") + " " + e.toLocaleLowerCase()
          },
          viewHint: e=>"Vista " + ("Semana" === e ? "de la" : "del") + " " + e.toLocaleLowerCase(),
          weekText: "Sm",
          weekTextLong: "Semana",
          allDayText: "Todo el día",
          moreLinkText: "más",
          moreLinkHint: e=>`Mostrar ${e} eventos más`,
          noEventsText: "No hay eventos para mostrar",
          navLinkHint: "Ir al $0",
          closeHint: "Cerrar",
          timeHint: "La hora",
          eventHint: "Evento"
      }, {
          code: "et",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Eelnev",
              next: "Järgnev",
              today: "Täna",
              year: "Aasta",
              month: "Kuu",
              week: "Nädal",
              day: "Päev",
              list: "Päevakord"
          },
          weekText: "näd",
          allDayText: "Kogu päev",
          moreLinkText: e=>"+ veel " + e,
          noEventsText: "Kuvamiseks puuduvad sündmused"
      }, {
          code: "eu",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Aur",
              next: "Hur",
              today: "Gaur",
              year: "Urtea",
              month: "Hilabetea",
              week: "Astea",
              day: "Eguna",
              list: "Agenda"
          },
          weekText: "As",
          allDayText: "Egun osoa",
          moreLinkText: "gehiago",
          noEventsText: "Ez dago ekitaldirik erakusteko"
      }, {
          code: "fa",
          week: {
              dow: 6,
              doy: 12
          },
          direction: "rtl",
          buttonText: {
              prev: "قبلی",
              next: "بعدی",
              today: "امروز",
              year: "سال",
              month: "ماه",
              week: "هفته",
              day: "روز",
              list: "برنامه"
          },
          weekText: "هف",
          allDayText: "تمام روز",
          moreLinkText: e=>"بیش از " + e,
          noEventsText: "هیچ رویدادی به نمایش"
      }, {
          code: "fi",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Edellinen",
              next: "Seuraava",
              today: "Tänään",
              year: "Vuosi",
              month: "Kuukausi",
              week: "Viikko",
              day: "Päivä",
              list: "Tapahtumat"
          },
          weekText: "Vk",
          allDayText: "Koko päivä",
          moreLinkText: "lisää",
          noEventsText: "Ei näytettäviä tapahtumia"
      }, {
          code: "fr",
          buttonText: {
              prev: "Précédent",
              next: "Suivant",
              today: "Aujourd'hui",
              year: "Année",
              month: "Mois",
              week: "Semaine",
              day: "Jour",
              list: "Mon planning"
          },
          weekText: "Sem.",
          allDayText: "Toute la journée",
          moreLinkText: "en plus",
          noEventsText: "Aucun évènement à afficher"
      }, {
          code: "fr-ch",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Précédent",
              next: "Suivant",
              today: "Courant",
              year: "Année",
              month: "Mois",
              week: "Semaine",
              day: "Jour",
              list: "Mon planning"
          },
          weekText: "Sm",
          allDayText: "Toute la journée",
          moreLinkText: "en plus",
          noEventsText: "Aucun évènement à afficher"
      }, {
          code: "fr",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Précédent",
              next: "Suivant",
              today: "Aujourd'hui",
              year: "Année",
              month: "Mois",
              week: "Semaine",
              day: "Jour",
              list: "Planning"
          },
          weekText: "Sem.",
          weekTextLong: "Semaine",
          allDayText: "Toute la journée",
          moreLinkText: "en plus",
          noEventsText: "Aucun évènement à afficher"
      }, {
          code: "gl",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Ant",
              next: "Seg",
              today: "Hoxe",
              year: "Ano",
              month: "Mes",
              week: "Semana",
              day: "Día",
              list: "Axenda"
          },
          buttonHints: {
              prev: "$0 antes",
              next: "$0 seguinte",
              today: e=>"Día" === e ? "Hoxe" : ("Semana" === e ? "Esta" : "Este") + " " + e.toLocaleLowerCase()
          },
          viewHint: e=>"Vista " + ("Semana" === e ? "da" : "do") + " " + e.toLocaleLowerCase(),
          weekText: "Sm",
          weekTextLong: "Semana",
          allDayText: "Todo o día",
          moreLinkText: "máis",
          moreLinkHint: e=>`Amosar ${e} eventos máis`,
          noEventsText: "Non hai eventos para amosar",
          navLinkHint: "Ir ao $0",
          closeHint: "Pechar",
          timeHint: "A hora",
          eventHint: "Evento"
      }, {
          code: "he",
          direction: "rtl",
          buttonText: {
              prev: "הקודם",
              next: "הבא",
              today: "היום",
              year: "שנה",
              month: "חודש",
              week: "שבוע",
              day: "יום",
              list: "סדר יום"
          },
          allDayText: "כל היום",
          moreLinkText: "נוספים",
          noEventsText: "אין אירועים להצגה",
          weekText: "שבוע"
      }, {
          code: "hi",
          week: {
              dow: 0,
              doy: 6
          },
          buttonText: {
              prev: "पिछला",
              next: "अगला",
              today: "आज",
              year: "वर्ष",
              month: "महीना",
              week: "सप्ताह",
              day: "दिन",
              list: "कार्यसूची"
          },
          weekText: "हफ्ता",
          allDayText: "सभी दिन",
          moreLinkText: e=>"+अधिक " + e,
          noEventsText: "कोई घटनाओं को प्रदर्शित करने के लिए"
      }, {
          code: "hr",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Prijašnji",
              next: "Sljedeći",
              today: "Danas",
              year: "Godina",
              month: "Mjesec",
              week: "Tjedan",
              day: "Dan",
              list: "Raspored"
          },
          weekText: "Tje",
          allDayText: "Cijeli dan",
          moreLinkText: e=>"+ još " + e,
          noEventsText: "Nema događaja za prikaz"
      }, {
          code: "hu",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "vissza",
              next: "előre",
              today: "ma",
              year: "Év",
              month: "Hónap",
              week: "Hét",
              day: "Nap",
              list: "Lista"
          },
          weekText: "Hét",
          allDayText: "Egész nap",
          moreLinkText: "további",
          noEventsText: "Nincs megjeleníthető esemény"
      }, {
          code: "hy-am",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Նախորդ",
              next: "Հաջորդ",
              today: "Այսօր",
              year: "Տարի",
              month: "Ամիս",
              week: "Շաբաթ",
              day: "Օր",
              list: "Օրվա ցուցակ"
          },
          weekText: "Շաբ",
          allDayText: "Ամբողջ օր",
          moreLinkText: e=>"+ ևս " + e,
          noEventsText: "Բացակայում է իրադարձությունը ցուցադրելու"
      }, {
          code: "id",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "mundur",
              next: "maju",
              today: "hari ini",
              year: "Tahun",
              month: "Bulan",
              week: "Minggu",
              day: "Hari",
              list: "Agenda"
          },
          weekText: "Mg",
          allDayText: "Sehari penuh",
          moreLinkText: "lebih",
          noEventsText: "Tidak ada acara untuk ditampilkan"
      }, {
          code: "is",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Fyrri",
              next: "Næsti",
              today: "Í dag",
              year: "Ár",
              month: "Mánuður",
              week: "Vika",
              day: "Dagur",
              list: "Dagskrá"
          },
          weekText: "Vika",
          allDayText: "Allan daginn",
          moreLinkText: "meira",
          noEventsText: "Engir viðburðir til að sýna"
      }, {
          code: "it",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Prec",
              next: "Succ",
              today: "Oggi",
              year: "Anno",
              month: "Mese",
              week: "Settimana",
              day: "Giorno",
              list: "Agenda"
          },
          weekText: "Sm",
          allDayText: "Tutto il giorno",
          moreLinkText: e=>"+altri " + e,
          noEventsText: "Non ci sono eventi da visualizzare"
      }, {
          code: "ja",
          buttonText: {
              prev: "前",
              next: "次",
              today: "今日",
              year: "年",
              month: "月",
              week: "週",
              day: "日",
              list: "予定リスト"
          },
          weekText: "週",
          allDayText: "終日",
          moreLinkText: e=>"他 " + e + " 件",
          noEventsText: "表示する予定はありません"
      }, {
          code: "ka",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "წინა",
              next: "შემდეგი",
              today: "დღეს",
              year: "წელიწადი",
              month: "თვე",
              week: "კვირა",
              day: "დღე",
              list: "დღის წესრიგი"
          },
          weekText: "კვ",
          allDayText: "მთელი დღე",
          moreLinkText: e=>"+ კიდევ " + e,
          noEventsText: "ღონისძიებები არ არის"
      }, {
          code: "kk",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Алдыңғы",
              next: "Келесі",
              today: "Бүгін",
              year: "Жыл",
              month: "Ай",
              week: "Апта",
              day: "Күн",
              list: "Күн тәртібі"
          },
          weekText: "Не",
          allDayText: "Күні бойы",
          moreLinkText: e=>"+ тағы " + e,
          noEventsText: "Көрсету үшін оқиғалар жоқ"
      }, {
          code: "km",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "មុន",
              next: "បន្ទាប់",
              today: "ថ្ងៃនេះ",
              year: "ឆ្នាំ",
              month: "ខែ",
              week: "សប្តាហ៍",
              day: "ថ្ងៃ",
              list: "បញ្ជី"
          },
          weekText: "សប្តាហ៍",
          allDayText: "ពេញមួយថ្ងៃ",
          moreLinkText: "ច្រើនទៀត",
          noEventsText: "គ្មានព្រឹត្តិការណ៍ត្រូវបង្ហាញ"
      }, {
          code: "ko",
          buttonText: {
              prev: "이전달",
              next: "다음달",
              today: "오늘",
              year: "년도",
              month: "월",
              week: "주",
              day: "일",
              list: "일정목록"
          },
          weekText: "주",
          allDayText: "종일",
          moreLinkText: "개",
          noEventsText: "일정이 없습니다"
      }, {
          code: "ku",
          week: {
              dow: 6,
              doy: 12
          },
          direction: "rtl",
          buttonText: {
              prev: "پێشتر",
              next: "دواتر",
              today: "ئەمڕو",
              year: "ساڵ",
              month: "مانگ",
              week: "هەفتە",
              day: "ڕۆژ",
              list: "بەرنامە"
          },
          weekText: "هەفتە",
          allDayText: "هەموو ڕۆژەکە",
          moreLinkText: "زیاتر",
          noEventsText: "هیچ ڕووداوێك نیە"
      }, {
          code: "lb",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Zréck",
              next: "Weider",
              today: "Haut",
              year: "Joer",
              month: "Mount",
              week: "Woch",
              day: "Dag",
              list: "Terminiwwersiicht"
          },
          weekText: "W",
          allDayText: "Ganzen Dag",
          moreLinkText: "méi",
          noEventsText: "Nee Evenementer ze affichéieren"
      }, {
          code: "lt",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Atgal",
              next: "Pirmyn",
              today: "Šiandien",
              year: "Metai",
              month: "Mėnuo",
              week: "Savaitė",
              day: "Diena",
              list: "Darbotvarkė"
          },
          weekText: "SAV",
          allDayText: "Visą dieną",
          moreLinkText: "daugiau",
          noEventsText: "Nėra įvykių rodyti"
      }, {
          code: "lv",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Iepr.",
              next: "Nāk.",
              today: "Šodien",
              year: "Gads",
              month: "Mēnesis",
              week: "Nedēļa",
              day: "Diena",
              list: "Dienas kārtība"
          },
          weekText: "Ned.",
          allDayText: "Visu dienu",
          moreLinkText: e=>"+vēl " + e,
          noEventsText: "Nav notikumu"
      }, {
          code: "mk",
          buttonText: {
              prev: "претходно",
              next: "следно",
              today: "Денес",
              year: "година",
              month: "Месец",
              week: "Недела",
              day: "Ден",
              list: "График"
          },
          weekText: "Сед",
          allDayText: "Цел ден",
          moreLinkText: e=>"+повеќе " + e,
          noEventsText: "Нема настани за прикажување"
      }, {
          code: "ms",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Sebelum",
              next: "Selepas",
              today: "hari ini",
              year: "Tahun",
              month: "Bulan",
              week: "Minggu",
              day: "Hari",
              list: "Agenda"
          },
          weekText: "Mg",
          allDayText: "Sepanjang hari",
          moreLinkText: e=>"masih ada " + e + " acara",
          noEventsText: "Tiada peristiwa untuk dipaparkan"
      }, {
          code: "nb",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Forrige",
              next: "Neste",
              today: "I dag",
              year: "År",
              month: "Måned",
              week: "Uke",
              day: "Dag",
              list: "Agenda"
          },
          weekText: "Uke",
          weekTextLong: "Uke",
          allDayText: "Hele dagen",
          moreLinkText: "til",
          noEventsText: "Ingen hendelser å vise",
          buttonHints: {
              prev: "Forrige $0",
              next: "Neste $0",
              today: "Nåværende $0"
          },
          viewHint: "$0 visning",
          navLinkHint: "Gå til $0",
          moreLinkHint: e=>`Vis ${e} flere hendelse${1 === e ? "" : "r"}`
      }, {
          code: "ne",
          week: {
              dow: 7,
              doy: 1
          },
          buttonText: {
              prev: "अघिल्लो",
              next: "अर्को",
              today: "आज",
              year: "वर्ष",
              month: "महिना",
              week: "हप्ता",
              day: "दिन",
              list: "सूची"
          },
          weekText: "हप्ता",
          allDayText: "दिनभरि",
          moreLinkText: "थप लिंक",
          noEventsText: "देखाउनको लागि कुनै घटनाहरू छैनन्"
      }, {
          code: "nl",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Vorige",
              next: "Volgende",
              today: "Vandaag",
              year: "Jaar",
              month: "Maand",
              week: "Week",
              day: "Dag",
              list: "Lijst"
          },
          allDayText: "Hele dag",
          moreLinkText: "extra",
          noEventsText: "Geen evenementen om te laten zien"
      }, {
          code: "nn",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Førre",
              next: "Neste",
              today: "I dag",
              year: "År",
              month: "Månad",
              week: "Veke",
              day: "Dag",
              list: "Agenda"
          },
          weekText: "Veke",
          allDayText: "Heile dagen",
          moreLinkText: "til",
          noEventsText: "Ingen hendelser å vise"
      }, {
          code: "pl",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Poprzedni",
              next: "Następny",
              today: "Dziś",
              year: "Rok",
              month: "Miesiąc",
              week: "Tydzień",
              day: "Dzień",
              list: "Plan dnia"
          },
          weekText: "Tydz",
          allDayText: "Cały dzień",
          moreLinkText: "więcej",
          noEventsText: "Brak wydarzeń do wyświetlenia"
      }, {
          code: "pt-br",
          buttonText: {
              prev: "Anterior",
              next: "Próximo",
              prevYear: "Ano anterior",
              nextYear: "Próximo ano",
              year: "Ano",
              today: "Hoje",
              month: "Mês",
              week: "Semana",
              day: "Dia",
              list: "Lista"
          },
          buttonHints: {
              prev: "$0 Anterior",
              next: "Próximo $0",
              today: e=>"Dia" === e ? "Hoje" : ("Semana" === e ? "Esta" : "Este") + " " + e.toLocaleLowerCase()
          },
          viewHint: e=>"Visualizar " + ("Semana" === e ? "a" : "o") + " " + e.toLocaleLowerCase(),
          weekText: "Sm",
          weekTextLong: "Semana",
          allDayText: "dia inteiro",
          moreLinkText: e=>"mais +" + e,
          moreLinkHint: e=>`Mostrar mais ${e} eventos`,
          noEventsText: "Não há eventos para mostrar",
          navLinkHint: "Ir para $0",
          closeHint: "Fechar",
          timeHint: "A hora",
          eventHint: "Evento"
      }, {
          code: "pt",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Anterior",
              next: "Seguinte",
              today: "Hoje",
              year: "Ano",
              month: "Mês",
              week: "Semana",
              day: "Dia",
              list: "Agenda"
          },
          weekText: "Sem",
          allDayText: "Todo o dia",
          moreLinkText: "mais",
          noEventsText: "Não há eventos para mostrar"
      }, {
          code: "ro",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "precedentă",
              next: "următoare",
              today: "Azi",
              year: "An",
              month: "Lună",
              week: "Săptămână",
              day: "Zi",
              list: "Agendă"
          },
          weekText: "Săpt",
          allDayText: "Toată ziua",
          moreLinkText: e=>"+alte " + e,
          noEventsText: "Nu există evenimente de afișat"
      }, {
          code: "ru",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Пред",
              next: "След",
              today: "Сегодня",
              year: "Год",
              month: "Месяц",
              week: "Неделя",
              day: "День",
              list: "Повестка дня"
          },
          weekText: "Нед",
          allDayText: "Весь день",
          moreLinkText: e=>"+ ещё " + e,
          noEventsText: "Нет событий для отображения"
      }, {
          code: "si-lk",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "පෙර",
              next: "පසු",
              today: "අද",
              year: "අවුරුදු",
              month: "මාසය",
              week: "සතිය",
              day: "දවස",
              list: "ලැයිස්තුව"
          },
          weekText: "සති",
          allDayText: "සියලු",
          moreLinkText: "තවත්",
          noEventsText: "මුකුත් නැත"
      }, {
          code: "sk",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Predchádzajúci",
              next: "Nasledujúci",
              today: "Dnes",
              year: "Rok",
              month: "Mesiac",
              week: "Týždeň",
              day: "Deň",
              list: "Rozvrh"
          },
          weekText: "Ty",
          allDayText: "Celý deň",
          moreLinkText: e=>"+ďalšie: " + e,
          noEventsText: "Žiadne akcie na zobrazenie"
      }, {
          code: "sl",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Prejšnji",
              next: "Naslednji",
              today: "Trenutni",
              year: "Leto",
              month: "Mesec",
              week: "Teden",
              day: "Dan",
              list: "Dnevni red"
          },
          weekText: "Teden",
          allDayText: "Ves dan",
          moreLinkText: "več",
          noEventsText: "Ni dogodkov za prikaz"
      }, {
          code: "sm",
          buttonText: {
              prev: "Talu ai",
              next: "Mulimuli atu",
              today: "Aso nei",
              year: "Tausaga",
              month: "Masina",
              week: "Vaiaso",
              day: "Aso",
              list: "Faasologa"
          },
          weekText: "Vaiaso",
          allDayText: "Aso atoa",
          moreLinkText: "sili atu",
          noEventsText: "Leai ni mea na tutupu"
      }, {
          code: "sq",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "mbrapa",
              next: "Përpara",
              today: "Sot",
              year: "Viti",
              month: "Muaj",
              week: "Javë",
              day: "Ditë",
              list: "Listë"
          },
          weekText: "Ja",
          allDayText: "Gjithë ditën",
          moreLinkText: e=>"+më tepër " + e,
          noEventsText: "Nuk ka evente për të shfaqur"
      }, {
          code: "sr-cyrl",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Претходна",
              next: "следећи",
              today: "Данас",
              year: "Година",
              month: "Месец",
              week: "Недеља",
              day: "Дан",
              list: "Планер"
          },
          weekText: "Сед",
          allDayText: "Цео дан",
          moreLinkText: e=>"+ још " + e,
          noEventsText: "Нема догађаја за приказ"
      }, {
          code: "sr",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Prethodna",
              next: "Sledeći",
              today: "Danas",
              year: "Godina",
              month: "Mеsеc",
              week: "Nеdеlja",
              day: "Dan",
              list: "Planеr"
          },
          weekText: "Sed",
          allDayText: "Cеo dan",
          moreLinkText: e=>"+ još " + e,
          noEventsText: "Nеma događaja za prikaz"
      }, {
          code: "sv",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Förra",
              next: "Nästa",
              today: "Idag",
              year: "År",
              month: "Månad",
              week: "Vecka",
              day: "Dag",
              list: "Program"
          },
          buttonHints: {
              prev: e=>`Föregående ${e.toLocaleLowerCase()}`,
              next: e=>`Nästa ${e.toLocaleLowerCase()}`,
              today: e=>("Program" === e ? "Detta" : "Denna") + " " + e.toLocaleLowerCase()
          },
          viewHint: "$0 vy",
          navLinkHint: "Gå till $0",
          moreLinkHint: e=>`Visa ytterligare ${e} händelse${1 === e ? "" : "r"}`,
          weekText: "v.",
          weekTextLong: "Vecka",
          allDayText: "Heldag",
          moreLinkText: "till",
          noEventsText: "Inga händelser att visa",
          closeHint: "Stäng",
          timeHint: "Klockan",
          eventHint: "Händelse"
      }, {
          code: "ta-in",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "முந்தைய",
              next: "அடுத்தது",
              today: "இன்று",
              year: "ஆண்டு",
              month: "மாதம்",
              week: "வாரம்",
              day: "நாள்",
              list: "தினசரி அட்டவணை"
          },
          weekText: "வாரம்",
          allDayText: "நாள் முழுவதும்",
          moreLinkText: e=>"+ மேலும் " + e,
          noEventsText: "காண்பிக்க நிகழ்வுகள் இல்லை"
      }, {
          code: "th",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "ก่อนหน้า",
              next: "ถัดไป",
              prevYear: "ปีก่อนหน้า",
              nextYear: "ปีถัดไป",
              year: "ปี",
              today: "วันนี้",
              month: "เดือน",
              week: "สัปดาห์",
              day: "วัน",
              list: "กำหนดการ"
          },
          weekText: "สัปดาห์",
          allDayText: "ตลอดวัน",
          moreLinkText: "เพิ่มเติม",
          noEventsText: "ไม่มีกิจกรรมที่จะแสดง"
      }, {
          code: "tr",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "geri",
              next: "ileri",
              today: "bugün",
              year: "Yıl",
              month: "Ay",
              week: "Hafta",
              day: "Gün",
              list: "Ajanda"
          },
          weekText: "Hf",
          allDayText: "Tüm gün",
          moreLinkText: "daha fazla",
          noEventsText: "Gösterilecek etkinlik yok"
      }, {
          code: "ug",
          buttonText: {
              prev: "ئالدىنقى",
              next: "كېيىنكى",
              today: "بۈگۈن",
              year: "يىل",
              month: "ئاي",
              week: "ھەپتە",
              day: "كۈن",
              list: "كۈنتەرتىپ"
          },
          allDayText: "پۈتۈن كۈن"
      }, {
          code: "uk",
          week: {
              dow: 1,
              doy: 7
          },
          buttonText: {
              prev: "Попередній",
              next: "далі",
              today: "Сьогодні",
              year: "рік",
              month: "Місяць",
              week: "Тиждень",
              day: "День",
              list: "Порядок денний"
          },
          weekText: "Тиж",
          allDayText: "Увесь день",
          moreLinkText: e=>"+ще " + e + "...",
          noEventsText: "Немає подій для відображення"
      }, {
          code: "uz-cy",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Олин",
              next: "Кейин",
              today: "Бугун",
              month: "Ой",
              week: "Ҳафта",
              day: "Кун",
              list: "Кун тартиби"
          },
          weekText: "Ҳафта",
          allDayText: "Кун бўйича",
          moreLinkText: e=>"+ яна " + e,
          noEventsText: "Кўрсатиш учун воқеалар йўқ"
      }, {
          code: "uz",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Oldingi",
              next: "Keyingi",
              today: "Bugun",
              year: "Yil",
              month: "Oy",
              week: "Xafta",
              day: "Kun",
              list: "Kun tartibi"
          },
          allDayText: "Kun bo'yi",
          moreLinkText: e=>"+ yana " + e,
          noEventsText: "Ko'rsatish uchun voqealar yo'q"
      }, {
          code: "vi",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "Trước",
              next: "Tiếp",
              today: "Hôm nay",
              year: "Năm",
              month: "Tháng",
              week: "Tuần",
              day: "Ngày",
              list: "Lịch biểu"
          },
          weekText: "Tu",
          allDayText: "Cả ngày",
          moreLinkText: e=>"+ thêm " + e,
          noEventsText: "Không có sự kiện để hiển thị"
      }, {
          code: "zh-cn",
          week: {
              dow: 1,
              doy: 4
          },
          buttonText: {
              prev: "上月",
              next: "下月",
              today: "今天",
              year: "年",
              month: "月",
              week: "周",
              day: "日",
              list: "日程"
          },
          weekText: "周",
          allDayText: "全天",
          moreLinkText: e=>"另外 " + e + " 个",
          noEventsText: "没有事件显示"
      }, {
          code: "zh-tw",
          buttonText: {
              prev: "上個",
              next: "下個",
              today: "今天",
              year: "年",
              month: "月",
              week: "週",
              day: "天",
              list: "活動列表"
          },
          weekText: "週",
          allDayText: "整天",
          moreLinkText: "顯示更多",
          noEventsText: "沒有任何活動"
      }];
      const ld = ["GPL-My-Project-Is-Open-Source", "CC-Attribution-NonCommercial-NoDerivatives"]
        , dd = {
          position: "absolute",
          zIndex: 99999,
          bottom: "1px",
          left: "1px",
          background: "#eee",
          borderColor: "#ddd",
          borderStyle: "solid",
          borderWidth: "1px 1px 0 0",
          padding: "2px 4px",
          fontSize: "12px",
          borderTopRightRadius: "3px"
      };
      var cd = bs({
          name: "@fullcalendar/premium-common",
          premiumReleaseDate: "2023-11-29",
          optionRefiners: {
              schedulerLicenseKey: String
          },
          viewContainerAppends: [function(e) {
              let t = e.options.schedulerLicenseKey
                , n = "undefined" != typeof window ? window.location.href : "";
              if (!/\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(n)) {
                  let n = function(e, t) {
                      if (-1 !== ld.indexOf(e))
                          return "valid";
                      const n = (e || "").match(/^(\d+)-fcs-(\d+)$/);
                      if (n && 10 === n[1].length) {
                          const e = new Date(1e3 * parseInt(n[2], 10))
                            , r = io.mockSchedulerReleaseDate || t;
                          if (Ot(r))
                              return Et(r, -372) < e ? "valid" : "outdated"
                      }
                      return "invalid"
                  }(t, e.pluginHooks.premiumReleaseDate);
                  if ("valid" !== n)
                      return y("div", {
                          className: "fc-license-message",
                          style: dd
                      }, "outdated" === n ? y(w, null, "Your license key is too old to work with this version. ", y("a", {
                          href: "https://fullcalendar.io/docs/schedulerLicenseKey#outdated"
                      }, "More Info")) : y(w, null, "Your license key is invalid. ", y("a", {
                          href: "https://fullcalendar.io/docs/schedulerLicenseKey#invalid"
                      }, "More Info")))
              }
              return null
          }
          ]
      });
      function ud(e) {
          let t = e.scrollLeft;
          if ("rtl" === window.getComputedStyle(e).direction)
              switch (pd()) {
              case "negative":
                  t *= -1;
              case "reverse":
                  t = e.scrollWidth - t - e.clientWidth
              }
          return t
      }
      function hd(e, t) {
          if ("rtl" === window.getComputedStyle(e).direction)
              switch (pd()) {
              case "reverse":
                  t = e.scrollWidth - t;
                  break;
              case "negative":
                  t = -(e.scrollWidth - t)
              }
          e.scrollLeft = t
      }
      let fd;
      function pd() {
          return fd || (fd = function() {
              let e, t = document.createElement("div");
              return t.style.position = "absolute",
              t.style.top = "-1000px",
              t.style.width = "1px",
              t.style.height = "1px",
              t.style.overflow = "scroll",
              t.style.direction = "rtl",
              t.style.fontSize = "100px",
              t.innerHTML = "A",
              document.body.appendChild(t),
              t.scrollLeft > 0 ? e = "positive" : (t.scrollLeft = 1,
              e = t.scrollLeft > 0 ? "reverse" : "negative"),
              Ne(t),
              e
          }())
      }
      class gd {
          constructor(e, t) {
              this.scrollEl = e,
              this.isRtl = t,
              this.updateSize = ()=>{
                  let {scrollEl: e} = this
                    , t = We(e, ".fc-sticky");
                  !function(e, t, n) {
                      e.forEach(((e,r)=>{
                          let i, {textAlign: o, elWidth: s, parentBound: a} = t[r], l = a.right - a.left;
                          i = "center" === o && l > n ? (n - s) / 2 : "",
                          ze(e, {
                              left: i,
                              right: i,
                              top: 0
                          })
                      }
                      ))
                  }(t, this.queryElGeoms(t), e.clientWidth)
              }
          }
          queryElGeoms(e) {
              let {scrollEl: t, isRtl: n} = this
                , r = function(e) {
                  let t = e.getBoundingClientRect()
                    , n = zi(e);
                  return {
                      left: t.left + n.borderLeft + n.scrollbarLeft - ud(e),
                      top: t.top + n.borderTop - e.scrollTop
                  }
              }(t)
                , i = [];
              for (let t of e) {
                  let e = Ci(Bi(t.parentNode, !0, !0), -r.left, -r.top)
                    , o = t.getBoundingClientRect()
                    , s = window.getComputedStyle(t)
                    , a = window.getComputedStyle(t.parentNode).textAlign
                    , l = null;
                  "start" === a ? a = n ? "right" : "left" : "end" === a && (a = n ? "left" : "right"),
                  "sticky" !== s.position && (l = Ci(o, -r.left - (parseFloat(s.left) || 0), -r.top - (parseFloat(s.top) || 0))),
                  i.push({
                      parentBound: e,
                      naturalBound: l,
                      elWidth: o.width,
                      elHeight: o.height,
                      textAlign: a
                  })
              }
              return i
          }
      }
      class md extends jn {
          constructor() {
              super(...arguments),
              this.elRef = {
                  current: null
              },
              this.state = {
                  xScrollbarWidth: 0,
                  yScrollbarWidth: 0
              },
              this.handleScroller = e=>{
                  this.scroller = e,
                  zn(this.props.scrollerRef, e)
              }
              ,
              this.handleSizing = ()=>{
                  let {props: e} = this;
                  "scroll-hidden" === e.overflowY && this.setState({
                      yScrollbarWidth: this.scroller.getYScrollbarWidth()
                  }),
                  "scroll-hidden" === e.overflowX && this.setState({
                      xScrollbarWidth: this.scroller.getXScrollbarWidth()
                  })
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , r = n.isRtl && Li()
                , i = 0
                , o = 0
                , s = 0
                , {overflowX: a, overflowY: l} = e;
              return e.forPrint && (a = "visible",
              l = "visible"),
              "scroll-hidden" === a && (s = t.xScrollbarWidth),
              "scroll-hidden" === l && null != t.yScrollbarWidth && (r ? i = t.yScrollbarWidth : o = t.yScrollbarWidth),
              y("div", {
                  ref: this.elRef,
                  className: "fc-scroller-harness" + (e.liquid ? " fc-scroller-harness-liquid" : "")
              }, y(_o, {
                  ref: this.handleScroller,
                  elRef: this.props.scrollerElRef,
                  overflowX: "scroll-hidden" === a ? "scroll" : a,
                  overflowY: "scroll-hidden" === l ? "scroll" : l,
                  overcomeLeft: i,
                  overcomeRight: o,
                  overcomeBottom: s,
                  maxHeight: "number" == typeof e.maxHeight ? e.maxHeight + ("scroll-hidden" === a ? t.xScrollbarWidth : 0) : "",
                  liquid: e.liquid,
                  liquidIsAbsolute: !0
              }, e.children))
          }
          componentDidMount() {
              this.handleSizing(),
              this.context.addResizeHandler(this.handleSizing)
          }
          getSnapshotBeforeUpdate(e) {
              return this.props.forPrint && !e.forPrint ? {
                  simulateScrollLeft: this.scroller.el.scrollLeft
              } : {}
          }
          componentDidUpdate(e, t, n) {
              const {props: r, scroller: {el: i}} = this;
              if (xn(e, r) || this.handleSizing(),
              void 0 !== n.simulateScrollLeft)
                  i.style.left = -n.simulateScrollLeft + "px";
              else if (!r.forPrint && e.forPrint) {
                  const e = -parseInt(i.style.left);
                  i.style.left = "",
                  i.scrollLeft = e
              }
          }
          componentWillUnmount() {
              this.context.removeResizeHandler(this.handleSizing)
          }
          needsXScrolling() {
              return this.scroller.needsXScrolling()
          }
          needsYScrolling() {
              return this.scroller.needsYScrolling()
          }
      }
      const vd = "wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" ");
      class yd {
          constructor(e) {
              this.el = e,
              this.emitter = new Pr,
              this.isScrolling = !1,
              this.isTouching = !1,
              this.isRecentlyWheeled = !1,
              this.isRecentlyScrolled = !1,
              this.wheelWaiter = new Oe(this._handleWheelWaited.bind(this)),
              this.scrollWaiter = new Oe(this._handleScrollWaited.bind(this)),
              this.handleScroll = ()=>{
                  this.startScroll(),
                  this.emitter.trigger("scroll", this.isRecentlyWheeled, this.isTouching),
                  this.isRecentlyScrolled = !0,
                  this.scrollWaiter.request(500)
              }
              ,
              this.handleWheel = ()=>{
                  this.isRecentlyWheeled = !0,
                  this.wheelWaiter.request(500)
              }
              ,
              this.handleTouchStart = ()=>{
                  this.isTouching = !0
              }
              ,
              this.handleTouchEnd = ()=>{
                  this.isTouching = !1,
                  this.isRecentlyScrolled || this.endScroll()
              }
              ,
              e.addEventListener("scroll", this.handleScroll),
              e.addEventListener("touchstart", this.handleTouchStart, {
                  passive: !0
              }),
              e.addEventListener("touchend", this.handleTouchEnd);
              for (let t of vd)
                  e.addEventListener(t, this.handleWheel)
          }
          destroy() {
              let {el: e} = this;
              e.removeEventListener("scroll", this.handleScroll),
              e.removeEventListener("touchstart", this.handleTouchStart, {
                  passive: !0
              }),
              e.removeEventListener("touchend", this.handleTouchEnd);
              for (let t of vd)
                  e.removeEventListener(t, this.handleWheel)
          }
          startScroll() {
              this.isScrolling || (this.isScrolling = !0,
              this.emitter.trigger("scrollStart", this.isRecentlyWheeled, this.isTouching))
          }
          endScroll() {
              this.isScrolling && (this.emitter.trigger("scrollEnd"),
              this.isScrolling = !1,
              this.isRecentlyScrolled = !0,
              this.isRecentlyWheeled = !1,
              this.scrollWaiter.clear(),
              this.wheelWaiter.clear())
          }
          _handleScrollWaited() {
              this.isRecentlyScrolled = !1,
              this.isTouching || this.endScroll()
          }
          _handleWheelWaited() {
              this.isRecentlyWheeled = !1
          }
      }
      class bd {
          constructor(e, t) {
              this.isVertical = e,
              this.scrollEls = t,
              this.isPaused = !1,
              this.scrollListeners = t.map((e=>this.bindScroller(e)))
          }
          destroy() {
              for (let e of this.scrollListeners)
                  e.destroy()
          }
          bindScroller(e) {
              let {scrollEls: t, isVertical: n} = this
                , r = new yd(e);
              return r.emitter.on("scroll", ((r,i)=>{
                  if (!this.isPaused && ((!this.masterEl || this.masterEl !== e && (r || i)) && this.assignMaster(e),
                  this.masterEl === e))
                      for (let r of t)
                          r !== e && (n ? r.scrollTop = e.scrollTop : r.scrollLeft = e.scrollLeft)
              }
              )),
              r.emitter.on("scrollEnd", (()=>{
                  this.masterEl === e && (this.masterEl = null)
              }
              )),
              r
          }
          assignMaster(e) {
              this.masterEl = e;
              for (let t of this.scrollListeners)
                  t.el !== e && t.endScroll()
          }
          forceScrollLeft(e) {
              this.isPaused = !0;
              for (let t of this.scrollListeners)
                  hd(t.el, e);
              this.isPaused = !1
          }
          forceScrollTop(e) {
              this.isPaused = !0;
              for (let t of this.scrollListeners)
                  t.el.scrollTop = e;
              this.isPaused = !1
          }
      }
      io.SCROLLGRID_RESIZE_INTERVAL = 500;
      class wd extends jn {
          constructor() {
              super(...arguments),
              this.compileColGroupStats = Ut(Dd, Td),
              this.renderMicroColGroups = Ut(Lo),
              this.clippedScrollerRefs = new Mo,
              this.scrollerElRefs = new Mo(this._handleScrollerEl.bind(this)),
              this.chunkElRefs = new Mo(this._handleChunkEl.bind(this)),
              this.scrollSyncersBySection = {},
              this.scrollSyncersByColumn = {},
              this.rowUnstableMap = new Map,
              this.rowInnerMaxHeightMap = new Map,
              this.anyRowHeightsChanged = !1,
              this.recentSizingCnt = 0,
              this.state = {
                  shrinkWidths: [],
                  forceYScrollbars: !1,
                  forceXScrollbars: !1,
                  scrollerClientWidths: {},
                  scrollerClientHeights: {},
                  sectionRowMaxHeights: []
              },
              this.handleSizing = (e,t)=>{
                  if (!this.allowSizing())
                      return;
                  t || (this.anyRowHeightsChanged = !0);
                  let n = {};
                  (e || !t && !this.rowUnstableMap.size) && (n.sectionRowMaxHeights = this.computeSectionRowMaxHeights()),
                  this.setState(Object.assign(Object.assign({
                      shrinkWidths: this.computeShrinkWidths()
                  }, this.computeScrollerDims()), n), (()=>{
                      this.rowUnstableMap.size || this.updateStickyScrolling()
                  }
                  ))
              }
              ,
              this.handleRowHeightChange = (e,t)=>{
                  let {rowUnstableMap: n, rowInnerMaxHeightMap: r} = this;
                  if (t) {
                      n.delete(e);
                      let t = xd(e);
                      r.has(e) && r.get(e) === t || (r.set(e, t),
                      this.anyRowHeightsChanged = !0),
                      !n.size && this.anyRowHeightsChanged && (this.anyRowHeightsChanged = !1,
                      this.setState({
                          sectionRowMaxHeights: this.computeSectionRowMaxHeights()
                      }))
                  } else
                      n.set(e, !0)
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , {shrinkWidths: r} = t
                , i = this.compileColGroupStats(e.colGroups.map((e=>[e])))
                , o = this.renderMicroColGroups(i.map(((e,t)=>[e.cols, r[t]])))
                , s = zo(e.liquid, n);
              this.getDims();
              let a, l = e.sections, d = l.length, c = 0, u = [], h = [], f = [];
              for (; c < d && "header" === (a = l[c]).type; )
                  u.push(this.renderSection(a, c, i, o, t.sectionRowMaxHeights, !0)),
                  c += 1;
              for (; c < d && "body" === (a = l[c]).type; )
                  h.push(this.renderSection(a, c, i, o, t.sectionRowMaxHeights, !1)),
                  c += 1;
              for (; c < d && "footer" === (a = l[c]).type; )
                  f.push(this.renderSection(a, c, i, o, t.sectionRowMaxHeights, !0)),
                  c += 1;
              const p = !vi()
                , g = {
                  role: "rowgroup"
              };
              return y("table", {
                  ref: e.elRef,
                  role: "grid",
                  className: s.join(" ")
              }, function(e, t) {
                  let n = e.map(((e,n)=>{
                      let r = e.width;
                      return "shrink" === r && (r = e.totalColWidth + Wo(t[n]) + 1),
                      y("col", {
                          style: {
                              width: r
                          }
                      })
                  }
                  ));
                  return y("colgroup", {}, ...n)
              }(i, r), Boolean(!p && u.length) && y("thead", g, ...u), Boolean(!p && h.length) && y("tbody", g, ...h), Boolean(!p && f.length) && y("tfoot", g, ...f), p && y("tbody", g, ...u, ...h, ...f))
          }
          renderSection(e, t, n, r, i, o) {
              return "outerContent"in e ? y(w, {
                  key: e.key
              }, e.outerContent) : y("tr", {
                  key: e.key,
                  role: "presentation",
                  className: Bo(e, this.props.liquid).join(" ")
              }, e.chunks.map(((s,a)=>this.renderChunk(e, t, n[a], r[a], s, a, (i[t] || [])[a] || [], o))))
          }
          renderChunk(e, t, n, r, i, o, s, a) {
              if ("outerContent"in i)
                  return y(w, {
                      key: i.key
                  }, i.outerContent);
              let {state: l} = this
                , {scrollerClientWidths: d, scrollerClientHeights: c} = l
                , [u,h] = this.getDims()
                , f = t * h + o
                , p = o === (!this.context.isRtl || Li() ? h - 1 : 0)
                , g = t === u - 1
                , m = g && l.forceXScrollbars
                , v = p && l.forceYScrollbars
                , b = n && n.allowXScrolling
                , S = Oo(this.props, e)
                , x = Ho(this.props, e)
                , E = e.expandRows && x
                , D = No(e, i, {
                  tableColGroupNode: r,
                  tableMinWidth: n && n.totalColMinWidth || "",
                  clientWidth: void 0 !== d[f] ? d[f] : null,
                  clientHeight: void 0 !== c[f] ? c[f] : null,
                  expandRows: E,
                  syncRowHeights: Boolean(e.syncRowHeights),
                  rowSyncHeights: s,
                  reportRowHeightChange: this.handleRowHeightChange
              }, a)
                , C = m ? g ? "scroll" : "scroll-hidden" : b ? g ? "auto" : "scroll-hidden" : "hidden"
                , R = v ? p ? "scroll" : "scroll-hidden" : S ? p ? "auto" : "scroll-hidden" : "hidden";
              return D = y(md, {
                  ref: this.clippedScrollerRefs.createRef(f),
                  scrollerElRef: this.scrollerElRefs.createRef(f),
                  overflowX: C,
                  overflowY: R,
                  forPrint: this.props.forPrint,
                  liquid: x,
                  maxHeight: e.maxHeight
              }, D),
              y(a ? "th" : "td", {
                  key: i.key,
                  ref: this.chunkElRefs.createRef(f),
                  role: "presentation"
              }, D)
          }
          componentDidMount() {
              this.getStickyScrolling = Ut(_d),
              this.getScrollSyncersBySection = Gt(Ad.bind(this, !0), null, kd),
              this.getScrollSyncersByColumn = Gt(Ad.bind(this, !1), null, kd),
              this.updateScrollSyncers(),
              this.handleSizing(!1),
              this.context.addResizeHandler(this.handleSizing)
          }
          componentDidUpdate(e, t) {
              this.updateScrollSyncers(),
              this.handleSizing(!1, t.sectionRowMaxHeights !== this.state.sectionRowMaxHeights)
          }
          componentWillUnmount() {
              this.context.removeResizeHandler(this.handleSizing),
              this.destroyScrollSyncers()
          }
          allowSizing() {
              let e = new Date;
              return !this.lastSizingDate || e.valueOf() > this.lastSizingDate.valueOf() + io.SCROLLGRID_RESIZE_INTERVAL ? (this.lastSizingDate = e,
              this.recentSizingCnt = 0,
              !0) : (this.recentSizingCnt += 1) <= 10
          }
          computeShrinkWidths() {
              let e = this.compileColGroupStats(this.props.colGroups.map((e=>[e])))
                , [t,n] = this.getDims()
                , r = t * n
                , i = [];
              return e.forEach(((e,t)=>{
                  if (e.hasShrinkCol) {
                      let e = this.chunkElRefs.collect(t, r, n);
                      i[t] = Io(e)
                  }
              }
              )),
              i
          }
          computeSectionRowMaxHeights() {
              let e = new Map
                , [t,n] = this.getDims()
                , r = [];
              for (let i = 0; i < t; i += 1) {
                  let t = this.props.sections[i]
                    , o = [];
                  if (t && t.syncRowHeights) {
                      let r = [];
                      for (let t = 0; t < n; t += 1) {
                          let o = i * n + t
                            , s = []
                            , a = this.chunkElRefs.currentMap[o];
                          s = a ? We(a, ".fc-scrollgrid-sync-table tr").map((t=>{
                              let n = xd(t);
                              return e.set(t, n),
                              n
                          }
                          )) : [],
                          r.push(s)
                      }
                      let s = r[0].length
                        , a = !0;
                      for (let e = 1; e < n; e += 1)
                          if ((!t.chunks[e] || void 0 === t.chunks[e].outerContent) && r[e].length !== s) {
                              a = !1;
                              break
                          }
                      if (a) {
                          for (let e = 0; e < n; e += 1)
                              o.push([]);
                          for (let e = 0; e < s; e += 1) {
                              let t = [];
                              for (let i = 0; i < n; i += 1) {
                                  let n = r[i][e];
                                  null != n && t.push(n)
                              }
                              let i = Math.max(...t);
                              for (let e = 0; e < n; e += 1)
                                  o[e].push(i)
                          }
                      } else {
                          let e = [];
                          for (let t = 0; t < n; t += 1)
                              e.push(Sd(r[t]) + r[t].length);
                          let t = Math.max(...e);
                          for (let e = 0; e < n; e += 1) {
                              let n = r[e].length
                                , i = t - n
                                , s = Math.floor(i / n)
                                , a = i - s * (n - 1)
                                , l = []
                                , d = 0;
                              for (d < n && (l.push(a),
                              d += 1); d < n; )
                                  l.push(s),
                                  d += 1;
                              o.push(l)
                          }
                      }
                  }
                  r.push(o)
              }
              return this.rowInnerMaxHeightMap = e,
              r
          }
          computeScrollerDims() {
              let e = Wi()
                , [t,n] = this.getDims()
                , r = !this.context.isRtl || Li() ? n - 1 : 0
                , i = t - 1
                , o = this.clippedScrollerRefs.currentMap
                , s = this.scrollerElRefs.currentMap
                , a = !1
                , l = !1
                , d = {}
                , c = {};
              for (let e = 0; e < t; e += 1) {
                  let t = o[e * n + r];
                  if (t && t.needsYScrolling()) {
                      a = !0;
                      break
                  }
              }
              for (let e = 0; e < n; e += 1) {
                  let t = o[i * n + e];
                  if (t && t.needsXScrolling()) {
                      l = !0;
                      break
                  }
              }
              for (let o = 0; o < t; o += 1)
                  for (let t = 0; t < n; t += 1) {
                      let u = o * n + t
                        , h = s[u];
                      if (h) {
                          let n = h.parentNode;
                          d[u] = Math.floor(n.getBoundingClientRect().width - (t === r && a ? e.y : 0)),
                          c[u] = Math.floor(n.getBoundingClientRect().height - (o === i && l ? e.x : 0))
                      }
                  }
              return {
                  forceYScrollbars: a,
                  forceXScrollbars: l,
                  scrollerClientWidths: d,
                  scrollerClientHeights: c
              }
          }
          updateStickyScrolling() {
              let {isRtl: e} = this.context
                , t = this.scrollerElRefs.getAll().map((t=>[t, e]));
              this.getStickyScrolling(t).forEach((e=>e.updateSize()))
          }
          updateScrollSyncers() {
              let[e,t] = this.getDims()
                , n = e * t
                , r = {}
                , i = {}
                , o = this.scrollerElRefs.currentMap;
              for (let n = 0; n < e; n += 1) {
                  let e = n * t
                    , i = e + t;
                  r[n] = Rn(o, e, i, 1)
              }
              for (let e = 0; e < t; e += 1)
                  i[e] = this.scrollerElRefs.collect(e, n, t);
              this.scrollSyncersBySection = this.getScrollSyncersBySection(r),
              this.scrollSyncersByColumn = this.getScrollSyncersByColumn(i)
          }
          destroyScrollSyncers() {
              bn(this.scrollSyncersBySection, kd),
              bn(this.scrollSyncersByColumn, kd)
          }
          getChunkConfigByIndex(e) {
              let t = this.getDims()[1]
                , n = Math.floor(e / t)
                , r = e % t
                , i = this.props.sections[n];
              return i && i.chunks[r]
          }
          forceScrollLeft(e, t) {
              let n = this.scrollSyncersByColumn[e];
              n && n.forceScrollLeft(t)
          }
          forceScrollTop(e, t) {
              let n = this.scrollSyncersBySection[e];
              n && n.forceScrollTop(t)
          }
          _handleChunkEl(e, t) {
              let n = this.getChunkConfigByIndex(parseInt(t, 10));
              n && zn(n.elRef, e)
          }
          _handleScrollerEl(e, t) {
              let n = this.getChunkConfigByIndex(parseInt(t, 10));
              n && zn(n.scrollerElRef, e)
          }
          getDims() {
              let e = this.props.sections.length;
              return [e, e ? this.props.sections[0].chunks.length : 0]
          }
      }
      function Sd(e) {
          let t = 0;
          for (let n of e)
              t += n;
          return t
      }
      function xd(e) {
          let t = We(e, ".fc-scrollgrid-sync-inner").map(Ed);
          return t.length ? Math.max(...t) : 0
      }
      function Ed(e) {
          return e.offsetHeight
      }
      function Dd(e) {
          let t = Cd(e.cols, "width")
            , n = Cd(e.cols, "minWidth")
            , r = jo(e.cols);
          return {
              hasShrinkCol: r,
              totalColWidth: t,
              totalColMinWidth: n,
              allowXScrolling: "shrink" !== e.width && Boolean(t || n || r),
              cols: e.cols,
              width: e.width
          }
      }
      function Cd(e, t) {
          let n = 0;
          for (let r of e) {
              let e = r[t];
              "number" == typeof e && (n += e * (r.span || 1))
          }
          return n
      }
      wd.addStateEquality({
          shrinkWidths: wt,
          scrollerClientWidths: xn,
          scrollerClientHeights: xn
      });
      const Rd = {
          cols: Po
      };
      function Td(e, t) {
          return Cn(e, t, Rd)
      }
      function Ad(e, ...t) {
          return new bd(e,t)
      }
      function kd(e) {
          e.destroy()
      }
      function _d(e, t) {
          return new gd(e,t)
      }
      _e('.fc .fc-timeline-body{min-height:100%;position:relative;z-index:1}.fc .fc-timeline-slots{bottom:0;position:absolute;top:0;z-index:1}.fc .fc-timeline-slots>table{height:100%}.fc .fc-timeline-slot-minor{border-style:dotted}.fc .fc-timeline-slot-frame{align-items:center;display:flex;justify-content:center}.fc .fc-timeline-header-row-chrono .fc-timeline-slot-frame{justify-content:flex-start}.fc .fc-timeline-header-row:last-child .fc-timeline-slot-frame{overflow:hidden}.fc .fc-timeline-slot-cushion{padding:4px 5px;white-space:nowrap}.fc-direction-ltr .fc-timeline-slot{border-right:0!important}.fc-direction-rtl .fc-timeline-slot{border-left:0!important}.fc .fc-timeline-now-indicator-container{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:4}.fc .fc-timeline-now-indicator-arrow,.fc .fc-timeline-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;position:absolute;top:0}.fc .fc-timeline-now-indicator-arrow{border-left-color:transparent;border-right-color:transparent;border-width:6px 5px 0;margin:0 -6px}.fc .fc-timeline-now-indicator-line{border-width:0 0 0 1px;bottom:0;margin:0 -1px}.fc .fc-timeline-events{position:relative;width:0;z-index:3}.fc .fc-timeline-event-harness,.fc .fc-timeline-more-link{position:absolute;top:0}.fc-timeline-event{z-index:1}.fc-timeline-event.fc-event-mirror{z-index:2}.fc-timeline-event{align-items:center;border-radius:0;display:flex;font-size:var(--fc-small-font-size);margin-bottom:1px;padding:2px 1px;position:relative}.fc-timeline-event .fc-event-main{flex-grow:1;flex-shrink:1;min-width:0}.fc-timeline-event .fc-event-time{font-weight:700}.fc-timeline-event .fc-event-time,.fc-timeline-event .fc-event-title{padding:0 2px;white-space:nowrap}.fc-direction-ltr .fc-timeline-event.fc-event-end,.fc-direction-ltr .fc-timeline-more-link{margin-right:1px}.fc-direction-rtl .fc-timeline-event.fc-event-end,.fc-direction-rtl .fc-timeline-more-link{margin-left:1px}.fc-timeline-overlap-disabled .fc-timeline-event{margin-bottom:0;padding-bottom:5px;padding-top:5px}.fc-timeline-event:not(.fc-event-end):after,.fc-timeline-event:not(.fc-event-start):before{border-color:transparent #000;border-style:solid;border-width:5px;content:"";flex-grow:0;flex-shrink:0;height:0;margin:0 1px;opacity:.5;width:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-start):before,.fc-direction-rtl .fc-timeline-event:not(.fc-event-end):after{border-left:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-end):after,.fc-direction-rtl .fc-timeline-event:not(.fc-event-start):before{border-right:0}.fc-timeline-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;font-size:var(--fc-small-font-size);padding:1px}.fc-timeline-more-link-inner{display:inline-block;left:0;padding:2px;right:0}.fc .fc-timeline-bg{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:2}.fc .fc-timeline-bg .fc-non-business{z-index:1}.fc .fc-timeline-bg .fc-bg-event{z-index:2}.fc .fc-timeline-bg .fc-highlight{z-index:3}.fc .fc-timeline-bg-harness{bottom:0;position:absolute;top:0}');
      const Md = 18
        , Id = 6;
      io.MAX_TIMELINE_SLOTS = 1e3;
      const Hd = [{
          years: 1
      }, {
          months: 1
      }, {
          days: 1
      }, {
          hours: 1
      }, {
          minutes: 30
      }, {
          minutes: 15
      }, {
          minutes: 10
      }, {
          minutes: 5
      }, {
          minutes: 1
      }, {
          seconds: 30
      }, {
          seconds: 15
      }, {
          seconds: 10
      }, {
          seconds: 5
      }, {
          seconds: 1
      }, {
          milliseconds: 500
      }, {
          milliseconds: 100
      }, {
          milliseconds: 10
      }, {
          milliseconds: 1
      }];
      function Od(e, t, n, r) {
          let i = {
              labelInterval: n.slotLabelInterval,
              slotDuration: n.slotDuration
          };
          !function(e, t, n) {
              const {currentRange: r} = t;
              if (e.labelInterval && n.countDurationsBetween(r.start, r.end, e.labelInterval) > io.MAX_TIMELINE_SLOTS && (console.warn("slotLabelInterval results in too many cells"),
              e.labelInterval = null),
              e.slotDuration && n.countDurationsBetween(r.start, r.end, e.slotDuration) > io.MAX_TIMELINE_SLOTS && (console.warn("slotDuration results in too many cells"),
              e.slotDuration = null),
              e.labelInterval && e.slotDuration) {
                  const t = yt(e.labelInterval, e.slotDuration);
                  (null === t || t < 1) && (console.warn("slotLabelInterval must be a multiple of slotDuration"),
                  e.slotDuration = null)
              }
          }(i, e, t),
          Ld(i, e, t),
          function(e, t, n) {
              const {currentRange: r} = t;
              let {slotDuration: i} = e;
              if (!i) {
                  const o = Ld(e, t, n);
                  for (let e of Hd) {
                      const t = ut(e)
                        , n = yt(o, t);
                      if (null !== n && n > 1 && n <= Id) {
                          i = t;
                          break
                      }
                  }
                  i && n.countDurationsBetween(r.start, r.end, i) > 200 && (i = null),
                  i || (i = o),
                  e.slotDuration = i
              }
          }(i, e, t);
          let o = n.slotLabelFormat
            , s = Array.isArray(o) ? o : null != o ? [o] : function(e, t, n, r) {
              let i, o;
              const {labelInterval: s} = e;
              let a = bt(s).unit;
              const l = r.weekNumbers;
              let d = i = o = null;
              switch ("week" !== a || l || (a = "day"),
              a) {
              case "year":
                  d = {
                      year: "numeric"
                  };
                  break;
              case "month":
                  Wd("years", t, n) > 1 && (d = {
                      year: "numeric"
                  }),
                  i = {
                      month: "short"
                  };
                  break;
              case "week":
                  Wd("years", t, n) > 1 && (d = {
                      year: "numeric"
                  }),
                  i = {
                      week: "narrow"
                  };
                  break;
              case "day":
                  Wd("years", t, n) > 1 ? d = {
                      year: "numeric",
                      month: "long"
                  } : Wd("months", t, n) > 1 && (d = {
                      month: "long"
                  }),
                  l && (i = {
                      week: "short"
                  }),
                  o = {
                      weekday: "narrow",
                      day: "numeric"
                  };
                  break;
              case "hour":
                  l && (d = {
                      week: "short"
                  }),
                  Wd("days", t, n) > 1 && (i = {
                      weekday: "short",
                      day: "numeric",
                      month: "numeric",
                      omitCommas: !0
                  }),
                  o = {
                      hour: "numeric",
                      minute: "2-digit",
                      omitZeroMinute: !0,
                      meridiem: "short"
                  };
                  break;
              case "minute":
                  vt(s) / 6e4 / 60 >= Id ? (d = {
                      hour: "numeric",
                      meridiem: "short"
                  },
                  i = e=>":" + it(e.date.minute, 2)) : d = {
                      hour: "numeric",
                      minute: "numeric",
                      meridiem: "short"
                  };
                  break;
              case "second":
                  vt(s) / 1e3 / 60 >= Id ? (d = {
                      hour: "numeric",
                      minute: "2-digit",
                      meridiem: "lowercase"
                  },
                  i = e=>":" + it(e.date.second, 2)) : d = {
                      hour: "numeric",
                      minute: "2-digit",
                      second: "2-digit",
                      meridiem: "lowercase"
                  };
                  break;
              case "millisecond":
                  d = {
                      hour: "numeric",
                      minute: "2-digit",
                      second: "2-digit",
                      meridiem: "lowercase"
                  },
                  i = e=>"." + it(e.millisecond, 3)
              }
              return [].concat(d || [], i || [], o || [])
          }(i, e, t, n);
          i.headerFormats = s.map((e=>rn(e))),
          i.isTimeScale = Boolean(i.slotDuration.milliseconds);
          let a = null;
          if (!i.isTimeScale) {
              const e = bt(i.slotDuration).unit;
              /year|month|week/.test(e) && (a = e)
          }
          i.largeUnit = a,
          i.emphasizeWeeks = 1 === ft(i.slotDuration) && Wd("weeks", e, t) >= 2 && !n.businessHours;
          let l, d, c = n.snapDuration;
          c && (l = ut(c),
          d = yt(i.slotDuration, l)),
          null == d && (l = i.slotDuration,
          d = 1),
          i.snapDuration = l,
          i.snapsPerSlot = d;
          let u = vt(e.slotMaxTime) - vt(e.slotMinTime)
            , h = Nd(e.renderRange.start, i, t)
            , f = Nd(e.renderRange.end, i, t);
          i.isTimeScale && (h = t.add(h, e.slotMinTime),
          f = t.add(Et(f, -1), e.slotMaxTime)),
          i.timeWindowMs = u,
          i.normalizedRange = {
              start: h,
              end: f
          };
          let p = []
            , g = h;
          for (; g < f; )
              Pd(g, i, e, r) && p.push(g),
              g = t.add(g, i.slotDuration);
          i.slotDates = p;
          let m = -1
            , v = 0;
          const y = []
            , b = [];
          for (g = h; g < f; )
              Pd(g, i, e, r) ? (m += 1,
              y.push(m),
              b.push(v)) : y.push(m + .5),
              g = t.add(g, i.snapDuration),
              v += 1;
          return i.snapDiffToIndex = y,
          i.snapIndexToDiff = b,
          i.snapCnt = m + 1,
          i.slotCnt = i.snapCnt / i.snapsPerSlot,
          i.isWeekStarts = function(e, t) {
              let {slotDates: n, emphasizeWeeks: r} = e
                , i = null
                , o = [];
              for (let e of n) {
                  let n = t.computeWeekNumber(e)
                    , s = r && null !== i && i !== n;
                  i = n,
                  o.push(s)
              }
              return o
          }(i, t),
          i.cellRows = function(e, t) {
              let n = e.slotDates
                , r = e.headerFormats
                , i = r.map((()=>[]))
                , o = ft(e.slotDuration)
                , s = 7 === o ? "week" : 1 === o ? "day" : null
                , a = r.map((e=>e.getLargestUnit ? e.getLargestUnit() : null));
              for (let o = 0; o < n.length; o += 1) {
                  let l = n[o]
                    , d = e.isWeekStarts[o];
                  for (let n = 0; n < r.length; n += 1) {
                      let o = r[n]
                        , c = i[n]
                        , u = c[c.length - 1]
                        , h = n === r.length - 1
                        , f = r.length > 1 && !h
                        , p = null
                        , g = a[n] || (h ? s : null);
                      if (f) {
                          let e = t.format(l, o);
                          u && u.text === e ? u.colspan += 1 : p = jd(l, e, g)
                      } else
                          !u || at(t.countDurationsBetween(e.normalizedRange.start, l, e.labelInterval)) ? p = jd(l, t.format(l, o), g) : u.colspan += 1;
                      p && (p.weekStart = d,
                      c.push(p))
                  }
              }
              return i
          }(i, t),
          i.slotsPerLabel = yt(i.labelInterval, i.slotDuration),
          i
      }
      function Nd(e, t, n) {
          let r = e;
          return t.isTimeScale || (r = Tt(r),
          t.largeUnit && (r = n.startOf(r, t.largeUnit))),
          r
      }
      function Pd(e, t, n, r) {
          if (r.isHiddenDay(e))
              return !1;
          if (t.isTimeScale) {
              let r = Tt(e)
                , i = e.valueOf() - r.valueOf() - vt(n.slotMinTime);
              return i = (i % 864e5 + 864e5) % 864e5,
              i < t.timeWindowMs
          }
          return !0
      }
      function Ld(e, t, n) {
          const {currentRange: r} = t;
          let {labelInterval: i} = e;
          if (!i) {
              let t;
              if (e.slotDuration) {
                  for (t of Hd) {
                      const n = ut(t)
                        , r = yt(n, e.slotDuration);
                      if (null !== r && r <= Id) {
                          i = n;
                          break
                      }
                  }
                  i || (i = e.slotDuration)
              } else
                  for (t of Hd)
                      if (i = ut(t),
                      n.countDurationsBetween(r.start, r.end, i) >= Md)
                          break;
              e.labelInterval = i
          }
          return i
      }
      function Wd(e, t, n) {
          let r = t.currentRange
            , i = null;
          return "years" === e ? i = n.diffWholeYears(r.start, r.end) : "months" === e || "weeks" === e ? i = n.diffWholeMonths(r.start, r.end) : "days" === e && (i = Rt(r.start, r.end)),
          i || 0
      }
      function jd(e, t, n) {
          return {
              date: e,
              text: t,
              rowUnit: n,
              colspan: 1,
              isWeekStart: !1
          }
      }
      class zd extends jn {
          constructor() {
              super(...arguments),
              this.refineRenderProps = Bt(Gd),
              this.buildCellNavLinkAttrs = zt(Bd)
          }
          render() {
              let {props: e, context: t} = this
                , {dateEnv: n, options: r} = t
                , {cell: i, dateProfile: o, tDateProfile: s} = e
                , a = ki(i.date, e.todayRange, e.nowDate, o)
                , l = this.refineRenderProps({
                  level: e.rowLevel,
                  dateMarker: i.date,
                  text: i.text,
                  dateEnv: t.dateEnv,
                  viewApi: t.viewApi
              });
              return y(qn, {
                  elTag: "th",
                  elClasses: ["fc-timeline-slot", "fc-timeline-slot-label", i.isWeekStart && "fc-timeline-slot-em", ..."time" === i.rowUnit ? Mi(a, t.theme) : _i(a, t.theme)],
                  elAttrs: {
                      colSpan: i.colspan,
                      "data-date": n.formatIso(i.date, {
                          omitTime: !s.isTimeScale,
                          omitTimeZoneOffset: !0
                      })
                  },
                  renderProps: l,
                  generatorName: "slotLabelContent",
                  customGenerator: r.slotLabelContent,
                  defaultGenerator: Ud,
                  classNameGenerator: r.slotLabelClassNames,
                  didMount: r.slotLabelDidMount,
                  willUnmount: r.slotLabelWillUnmount
              }, (n=>y("div", {
                  className: "fc-timeline-slot-frame",
                  style: {
                      height: e.rowInnerHeight
                  }
              }, y(n, {
                  elTag: "a",
                  elClasses: ["fc-timeline-slot-cushion", "fc-scrollgrid-sync-inner", e.isSticky && "fc-sticky"],
                  elAttrs: this.buildCellNavLinkAttrs(t, i.date, i.rowUnit)
              }))))
          }
      }
      function Bd(e, t, n) {
          return n && "time" !== n ? Oi(e, t, n) : {}
      }
      function Ud(e) {
          return e.text
      }
      function Gd(e) {
          return {
              level: e.level,
              date: e.dateEnv.toDate(e.dateMarker),
              view: e.viewApi,
              text: e.text
          }
      }
      class Fd extends jn {
          render() {
              let {dateProfile: e, tDateProfile: t, rowInnerHeights: n, todayRange: r, nowDate: i} = this.props
                , {cellRows: o} = t;
              return y(w, null, o.map(((s,a)=>{
                  let l = a === o.length - 1
                    , d = t.isTimeScale && l;
                  return y("tr", {
                      key: a,
                      className: ["fc-timeline-header-row", d ? "fc-timeline-header-row-chrono" : ""].join(" ")
                  }, s.map((o=>y(zd, {
                      key: o.date.toISOString(),
                      cell: o,
                      rowLevel: a,
                      dateProfile: e,
                      tDateProfile: t,
                      todayRange: r,
                      nowDate: i,
                      rowInnerHeight: n && n[a],
                      isSticky: !l
                  }))))
              }
              )))
          }
      }
      class Vd {
          constructor(e, t, n, r, i, o) {
              this.slatRootEl = e,
              this.dateProfile = n,
              this.tDateProfile = r,
              this.dateEnv = i,
              this.isRtl = o,
              this.outerCoordCache = new Fi(e,t,!0,!1),
              this.innerCoordCache = new Fi(e,function(e, t) {
                  let n = e instanceof HTMLElement ? [e] : e
                    , r = [];
                  for (let e = 0; e < n.length; e += 1) {
                      let t = n[e].children;
                      for (let e = 0; e < t.length; e += 1) {
                          let n = t[e];
                          !Le(n, "div") || r.push(n)
                      }
                  }
                  return r
              }(t),!0,!1)
          }
          isDateInRange(e) {
              return nr(this.dateProfile.currentRange, e)
          }
          dateToCoord(e) {
              let {tDateProfile: t} = this
                , n = this.computeDateSnapCoverage(e) / t.snapsPerSlot
                , r = Math.floor(n);
              r = Math.min(r, t.slotCnt - 1);
              let i = n - r
                , {innerCoordCache: o, outerCoordCache: s} = this;
              return this.isRtl ? s.originClientRect.width - (s.rights[r] - o.getWidth(r) * i) : s.lefts[r] + o.getWidth(r) * i
          }
          rangeToCoords(e) {
              return {
                  start: this.dateToCoord(e.start),
                  end: this.dateToCoord(e.end)
              }
          }
          durationToCoord(e) {
              let {dateProfile: t, tDateProfile: n, dateEnv: r, isRtl: i} = this
                , o = 0;
              if (t) {
                  let s = r.add(t.activeRange.start, e);
                  n.isTimeScale || (s = Tt(s)),
                  o = this.dateToCoord(s),
                  !i && o && (o += 1)
              }
              return o
          }
          coordFromLeft(e) {
              return this.isRtl ? this.outerCoordCache.originClientRect.width - e : e
          }
          computeDateSnapCoverage(e) {
              return qd(e, this.tDateProfile, this.dateEnv)
          }
      }
      function qd(e, t, n) {
          let r = n.countDurationsBetween(t.normalizedRange.start, e, t.snapDuration);
          if (r < 0)
              return 0;
          if (r >= t.snapDiffToIndex.length)
              return t.snapCnt;
          let i = Math.floor(r)
            , o = t.snapDiffToIndex[i];
          return at(o) ? o += r - i : o = Math.ceil(o),
          o
      }
      function Yd(e, t) {
          return null === e ? {
              left: "",
              right: ""
          } : t ? {
              right: e,
              left: ""
          } : {
              left: e,
              right: ""
          }
      }
      function Qd(e, t) {
          return e ? t ? {
              right: e.start,
              left: -e.end
          } : {
              left: e.start,
              right: -e.end
          } : {
              left: "",
              right: ""
          }
      }
      class Zd extends jn {
          constructor() {
              super(...arguments),
              this.rootElRef = {
                  current: null
              }
          }
          render() {
              let {props: e, context: t} = this
                , n = bt(e.tDateProfile.slotDuration).unit
                , r = e.slatCoords && e.slatCoords.dateProfile === e.dateProfile ? e.slatCoords : null;
              return y(po, {
                  unit: n
              }, ((n,i)=>y("div", {
                  className: "fc-timeline-header",
                  ref: this.rootElRef
              }, y("table", {
                  "aria-hidden": !0,
                  className: "fc-scrollgrid-sync-table",
                  style: {
                      minWidth: e.tableMinWidth,
                      width: e.clientWidth
                  }
              }, e.tableColGroupNode, y("tbody", null, y(Fd, {
                  dateProfile: e.dateProfile,
                  tDateProfile: e.tDateProfile,
                  nowDate: n,
                  todayRange: i,
                  rowInnerHeights: e.rowInnerHeights
              }))), t.options.nowIndicator && y("div", {
                  className: "fc-timeline-now-indicator-container"
              }, r && r.isDateInRange(n) && y(Zo, {
                  elClasses: ["fc-timeline-now-indicator-arrow"],
                  elStyle: Yd(r.dateToCoord(n), t.isRtl),
                  isAxis: !0,
                  date: n
              })))))
          }
          componentDidMount() {
              this.updateSize()
          }
          componentDidUpdate() {
              this.updateSize()
          }
          updateSize() {
              this.props.onMaxCushionWidth && this.props.onMaxCushionWidth(this.computeMaxCushionWidth())
          }
          computeMaxCushionWidth() {
              return Math.max(...We(this.rootElRef.current, ".fc-timeline-header-row:last-child .fc-timeline-slot-cushion").map((e=>e.getBoundingClientRect().width)))
          }
      }
      class $d extends jn {
          render() {
              let {props: e, context: t} = this
                , {dateEnv: n, options: r, theme: i} = t
                , {date: o, tDateProfile: s, isEm: a} = e
                , l = ki(e.date, e.todayRange, e.nowDate, e.dateProfile)
                , d = Object.assign(Object.assign({
                  date: n.toDate(e.date)
              }, l), {
                  view: t.viewApi
              });
              return y(qn, {
                  elTag: "td",
                  elRef: e.elRef,
                  elClasses: ["fc-timeline-slot", "fc-timeline-slot-lane", a && "fc-timeline-slot-em", s.isTimeScale ? at(n.countDurationsBetween(s.normalizedRange.start, e.date, s.labelInterval)) ? "fc-timeline-slot-major" : "fc-timeline-slot-minor" : "", ...e.isDay ? _i(l, i) : Mi(l, i)],
                  elAttrs: {
                      "data-date": n.formatIso(o, {
                          omitTimeZoneOffset: !0,
                          omitTime: !s.isTimeScale
                      })
                  },
                  renderProps: d,
                  generatorName: "slotLaneContent",
                  customGenerator: r.slotLaneContent,
                  classNameGenerator: r.slotLaneClassNames,
                  didMount: r.slotLaneDidMount,
                  willUnmount: r.slotLaneWillUnmount
              }, (e=>y(e, {
                  elTag: "div"
              })))
          }
      }
      class Xd extends jn {
          render() {
              let {props: e} = this
                , {tDateProfile: t, cellElRefs: n} = e
                , {slotDates: r, isWeekStarts: i} = t
                , o = !t.isTimeScale && !t.largeUnit;
              return y("tbody", null, y("tr", null, r.map(((r,s)=>{
                  let a = r.toISOString();
                  return y($d, {
                      key: a,
                      elRef: n.createRef(a),
                      date: r,
                      dateProfile: e.dateProfile,
                      tDateProfile: t,
                      nowDate: e.nowDate,
                      todayRange: e.todayRange,
                      isEm: i[s],
                      isDay: o
                  })
              }
              ))))
          }
      }
      class Jd extends jn {
          constructor() {
              super(...arguments),
              this.rootElRef = {
                  current: null
              },
              this.cellElRefs = new Mo,
              this.handleScrollRequest = e=>{
                  let {onScrollLeftRequest: t} = this.props
                    , {coords: n} = this;
                  return t && n ? (e.time && t(n.coordFromLeft(n.durationToCoord(e.time))),
                  !0) : null
              }
          }
          render() {
              let {props: e, context: t} = this;
              return y("div", {
                  className: "fc-timeline-slots",
                  ref: this.rootElRef
              }, y("table", {
                  "aria-hidden": !0,
                  className: t.theme.getClass("table"),
                  style: {
                      minWidth: e.tableMinWidth,
                      width: e.clientWidth
                  }
              }, e.tableColGroupNode, y(Xd, {
                  cellElRefs: this.cellElRefs,
                  dateProfile: e.dateProfile,
                  tDateProfile: e.tDateProfile,
                  nowDate: e.nowDate,
                  todayRange: e.todayRange
              })))
          }
          componentDidMount() {
              this.updateSizing(),
              this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
          }
          componentDidUpdate(e) {
              this.updateSizing(),
              this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
          }
          componentWillUnmount() {
              this.scrollResponder.detach(),
              this.props.onCoords && this.props.onCoords(null)
          }
          updateSizing() {
              let {props: e, context: t} = this;
              var n;
              null !== e.clientWidth && this.scrollResponder && this.rootElRef.current.offsetWidth && (this.coords = new Vd(this.rootElRef.current,(n = this.cellElRefs.currentMap,
              e.tDateProfile.slotDates.map((e=>{
                  let t = e.toISOString();
                  return n[t]
              }
              ))),e.dateProfile,e.tDateProfile,t.dateEnv,t.isRtl),
              e.onCoords && e.onCoords(this.coords),
              this.scrollResponder.update(!1))
          }
          positionToHit(e) {
              let {outerCoordCache: t} = this.coords
                , {dateEnv: n, isRtl: r} = this.context
                , {tDateProfile: i} = this.props
                , o = t.leftToIndex(e);
              if (null != o) {
                  let s = t.getWidth(o)
                    , a = r ? (t.rights[o] - e) / s : (e - t.lefts[o]) / s
                    , l = Math.floor(a * i.snapsPerSlot)
                    , d = n.add(i.slotDates[o], gt(i.snapDuration, l));
                  return {
                      dateSpan: {
                          range: {
                              start: d,
                              end: n.add(d, i.snapDuration)
                          },
                          allDay: !this.props.tDateProfile.isTimeScale
                      },
                      dayEl: this.cellElRefs.currentMap[o],
                      left: t.lefts[o],
                      right: t.rights[o]
                  }
              }
              return null
          }
      }
      function Kd(e, t, n) {
          let r = [];
          if (n)
              for (let i of e) {
                  let e = n.rangeToCoords(i)
                    , o = Math.round(e.start)
                    , s = Math.round(e.end);
                  s - o < t && (s = o + t),
                  r.push({
                      start: o,
                      end: s
                  })
              }
          return r
      }
      class ec extends jn {
          render() {
              let {props: e} = this
                , t = [].concat(e.eventResizeSegs, e.dateSelectionSegs);
              return e.timelineCoords && y("div", {
                  className: "fc-timeline-bg"
              }, this.renderSegs(e.businessHourSegs || [], e.timelineCoords, "non-business"), this.renderSegs(e.bgEventSegs || [], e.timelineCoords, "bg-event"), this.renderSegs(t, e.timelineCoords, "highlight"))
          }
          renderSegs(e, t, n) {
              let {todayRange: r, nowDate: i} = this.props
                , {isRtl: o} = this.context
                , s = Kd(e, 0, t)
                , a = e.map(((e,t)=>{
                  let a = Qd(s[t], o);
                  return y("div", {
                      key: li(e.eventRange),
                      className: "fc-timeline-bg-harness",
                      style: a
                  }, "bg-event" === n ? y(es, Object.assign({
                      seg: e
                  }, si(e, r, i))) : ns(n))
              }
              ));
              return y(w, null, a)
          }
      }
      class tc extends wo {
          sliceRange(e, t, n, r, i) {
              let o = function(e, t, n) {
                  if (!t.isTimeScale && (e = ir(e),
                  t.largeUnit)) {
                      let r = e;
                      ((e = {
                          start: n.startOf(e.start, t.largeUnit),
                          end: n.startOf(e.end, t.largeUnit)
                      }).end.valueOf() !== r.end.valueOf() || e.end <= e.start) && (e = {
                          start: e.start,
                          end: n.add(e.end, t.slotDuration)
                      })
                  }
                  return e
              }(e, r, i)
                , s = [];
              if (qd(o.start, r, i) < qd(o.end, r, i)) {
                  let e = Jn(o, r.normalizedRange);
                  e && s.push({
                      start: e.start,
                      end: e.end,
                      isStart: e.start.valueOf() === o.start.valueOf() && Pd(e.start, r, t, n),
                      isEnd: e.end.valueOf() === o.end.valueOf() && Pd(Dt(e.end, -1), r, t, n)
                  })
              }
              return s
          }
      }
      const nc = rn({
          hour: "numeric",
          minute: "2-digit",
          omitZeroMinute: !0,
          meridiem: "narrow"
      });
      class rc extends jn {
          render() {
              let {props: e} = this;
              return y(Yo, Object.assign({}, e, {
                  elClasses: ["fc-timeline-event", "fc-h-event"],
                  defaultTimeFormat: nc,
                  defaultDisplayEventTime: !e.isTimeScale
              }))
          }
      }
      class ic extends jn {
          render() {
              let {props: e, context: t} = this
                , {hiddenSegs: n, placement: r, resourceId: i} = e
                , {top: o, hcoords: s} = r
                , a = s && null !== o
                , l = Qd(s, t.isRtl)
                , d = i ? {
                  resourceId: i
              } : {};
              return y(as, {
                  elRef: e.elRef,
                  elClasses: ["fc-timeline-more-link"],
                  elStyle: Object.assign({
                      visibility: a ? "" : "hidden",
                      top: o || 0
                  }, l),
                  allDayDate: null,
                  moreCnt: n.length,
                  allSegs: n,
                  hiddenSegs: n,
                  dateProfile: e.dateProfile,
                  todayRange: e.todayRange,
                  extraDateSpan: d,
                  popoverContent: ()=>y(w, null, n.map((t=>{
                      let n = t.eventRange.instance.instanceId;
                      return y("div", {
                          key: n,
                          style: {
                              visibility: e.isForcedInvisible[n] ? "hidden" : ""
                          }
                      }, y(rc, Object.assign({
                          isTimeScale: e.isTimeScale,
                          seg: t,
                          isDragging: !1,
                          isResizing: !1,
                          isDateSelecting: !1,
                          isSelected: n === e.eventSelection
                      }, si(t, e.todayRange, e.nowDate))))
                  }
                  )))
              }, (e=>y(e, {
                  elTag: "div",
                  elClasses: ["fc-timeline-more-link-inner", "fc-sticky"]
              })))
          }
      }
      class oc extends jn {
          constructor() {
              super(...arguments),
              this.slicer = new tc,
              this.sortEventSegs = zt(ei),
              this.harnessElRefs = new Mo,
              this.moreElRefs = new Mo,
              this.innerElRef = {
                  current: null
              },
              this.state = {
                  eventInstanceHeights: {},
                  moreLinkHeights: {}
              },
              this.handleResize = e=>{
                  e && this.updateSize()
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , {options: r} = n
                , {dateProfile: i, tDateProfile: o} = e
                , s = this.slicer.sliceProps(e, i, o.isTimeScale ? null : e.nextDayThreshold, n, i, n.dateProfileGenerator, o, n.dateEnv)
                , a = (s.eventDrag ? s.eventDrag.segs : null) || (s.eventResize ? s.eventResize.segs : null) || []
                , l = this.sortEventSegs(s.fgEventSegs, r.eventOrder)
                , d = Kd(l, r.eventMinWidth, e.timelineCoords)
                , [c,u] = function(e, t, n, r, i, o) {
                  let s = []
                    , a = [];
                  for (let r = 0; r < e.length; r += 1) {
                      let i = e[r]
                        , o = n[i.eventRange.instance.instanceId]
                        , l = t[r];
                      o && l ? s.push({
                          index: r,
                          span: l,
                          thickness: o
                      }) : a.push({
                          seg: i,
                          hcoords: l,
                          top: null
                      })
                  }
                  let l = new $i;
                  null != i && (l.strictOrder = i),
                  null != o && (l.maxStackCnt = o);
                  let d = l.addSegs(s)
                    , c = d.map((t=>({
                      seg: e[t.index],
                      hcoords: t.span,
                      top: null
                  })))
                    , u = Ki(d)
                    , h = []
                    , f = [];
                  const p = t=>e[t.index];
                  for (let t = 0; t < u.length; t += 1) {
                      let n = u[t]
                        , i = n.entries.map(p)
                        , o = r[Pt(cs(i))];
                      null != o ? h.push({
                          index: e.length + t,
                          thickness: o,
                          span: n.span
                      }) : f.push({
                          seg: i,
                          hcoords: n.span,
                          top: null
                      })
                  }
                  l.maxStackCnt = -1,
                  l.addSegs(h);
                  let g = l.toRects()
                    , m = []
                    , v = 0;
                  for (let t of g) {
                      let n = t.index;
                      m.push({
                          seg: n < e.length ? e[n] : u[n - e.length].entries.map(p),
                          hcoords: t.span,
                          top: t.levelCoord
                      }),
                      v = Math.max(v, t.levelCoord + t.thickness)
                  }
                  return [m.concat(a, c, f), v]
              }(l, d, t.eventInstanceHeights, t.moreLinkHeights, r.eventOrderStrict, r.eventMaxStack)
                , h = (s.eventDrag ? s.eventDrag.affectedInstances : null) || (s.eventResize ? s.eventResize.affectedInstances : null) || {};
              return y(w, null, y(ec, {
                  businessHourSegs: s.businessHourSegs,
                  bgEventSegs: s.bgEventSegs,
                  timelineCoords: e.timelineCoords,
                  eventResizeSegs: s.eventResize ? s.eventResize.segs : [],
                  dateSelectionSegs: s.dateSelectionSegs,
                  nowDate: e.nowDate,
                  todayRange: e.todayRange
              }), y("div", {
                  className: "fc-timeline-events fc-scrollgrid-sync-inner",
                  ref: this.innerElRef,
                  style: {
                      height: u
                  }
              }, this.renderFgSegs(c, h, !1, !1, !1), this.renderFgSegs(function(e, t, n) {
                  if (!e.length || !t)
                      return [];
                  let r = function(e) {
                      let t = {};
                      for (let n of e) {
                          let {seg: e} = n;
                          Array.isArray(e) || (t[e.eventRange.instance.instanceId] = n.top)
                      }
                      return t
                  }(n);
                  return e.map((e=>({
                      seg: e,
                      hcoords: t.rangeToCoords(e),
                      top: r[e.eventRange.instance.instanceId]
                  })))
              }(a, e.timelineCoords, c), {}, Boolean(s.eventDrag), Boolean(s.eventResize), !1)))
          }
          componentDidMount() {
              this.updateSize(),
              this.context.addResizeHandler(this.handleResize)
          }
          componentDidUpdate(e, t) {
              e.eventStore === this.props.eventStore && e.timelineCoords === this.props.timelineCoords && t.moreLinkHeights === this.state.moreLinkHeights || this.updateSize()
          }
          componentWillUnmount() {
              this.context.removeResizeHandler(this.handleResize)
          }
          updateSize() {
              let {props: e} = this
                , {timelineCoords: t} = e;
              const n = this.innerElRef.current;
              e.onHeightChange && e.onHeightChange(n, !1),
              t && this.setState({
                  eventInstanceHeights: bn(this.harnessElRefs.currentMap, (e=>Math.round(e.getBoundingClientRect().height))),
                  moreLinkHeights: bn(this.moreElRefs.currentMap, (e=>Math.round(e.getBoundingClientRect().height)))
              }, (()=>{
                  e.onHeightChange && e.onHeightChange(n, !0)
              }
              )),
              e.syncParentMinHeight && (n.parentElement.style.minHeight = n.style.height)
          }
          renderFgSegs(e, t, n, r, i) {
              let {harnessElRefs: o, moreElRefs: s, props: a, context: l} = this
                , d = n || r || i;
              return y(w, null, e.map((e=>{
                  let {seg: c, hcoords: u, top: h} = e;
                  if (Array.isArray(c)) {
                      let n = Pt(cs(c));
                      return y(ic, {
                          key: "m:" + n,
                          elRef: s.createRef(n),
                          hiddenSegs: c,
                          placement: e,
                          dateProfile: a.dateProfile,
                          nowDate: a.nowDate,
                          todayRange: a.todayRange,
                          isTimeScale: a.tDateProfile.isTimeScale,
                          eventSelection: a.eventSelection,
                          resourceId: a.resourceId,
                          isForcedInvisible: t
                      })
                  }
                  let f = c.eventRange.instance.instanceId
                    , p = d || Boolean(!t[f] && u && null !== h)
                    , g = Qd(u, l.isRtl);
                  return y("div", {
                      key: "e:" + f,
                      ref: d ? null : o.createRef(f),
                      className: "fc-timeline-event-harness",
                      style: Object.assign({
                          visibility: p ? "" : "hidden",
                          top: h || 0
                      }, g)
                  }, y(rc, Object.assign({
                      isTimeScale: a.tDateProfile.isTimeScale,
                      seg: c,
                      isDragging: n,
                      isResizing: r,
                      isDateSelecting: i,
                      isSelected: f === a.eventSelection
                  }, si(c, a.todayRange, a.nowDate))))
              }
              )))
          }
      }
      oc.addStateEquality({
          eventInstanceHeights: xn,
          moreLinkHeights: xn
      });
      class sc extends Zi {
          constructor() {
              super(...arguments),
              this.slatsRef = {
                  current: null
              },
              this.state = {
                  coords: null
              },
              this.handeEl = e=>{
                  e ? this.context.registerInteractiveComponent(this, {
                      el: e
                  }) : this.context.unregisterInteractiveComponent(this)
              }
              ,
              this.handleCoords = e=>{
                  this.setState({
                      coords: e
                  }),
                  this.props.onSlatCoords && this.props.onSlatCoords(e)
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , {options: r} = n
                , {dateProfile: i, tDateProfile: o} = e
                , s = bt(o.slotDuration).unit;
              return y("div", {
                  className: "fc-timeline-body",
                  ref: this.handeEl,
                  style: {
                      minWidth: e.tableMinWidth,
                      height: e.clientHeight,
                      width: e.clientWidth
                  }
              }, y(po, {
                  unit: s
              }, ((s,a)=>y(w, null, y(Jd, {
                  ref: this.slatsRef,
                  dateProfile: i,
                  tDateProfile: o,
                  nowDate: s,
                  todayRange: a,
                  clientWidth: e.clientWidth,
                  tableColGroupNode: e.tableColGroupNode,
                  tableMinWidth: e.tableMinWidth,
                  onCoords: this.handleCoords,
                  onScrollLeftRequest: e.onScrollLeftRequest
              }), y(oc, {
                  dateProfile: i,
                  tDateProfile: e.tDateProfile,
                  nowDate: s,
                  todayRange: a,
                  nextDayThreshold: r.nextDayThreshold,
                  businessHours: e.businessHours,
                  eventStore: e.eventStore,
                  eventUiBases: e.eventUiBases,
                  dateSelection: e.dateSelection,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize,
                  timelineCoords: t.coords,
                  syncParentMinHeight: !0
              }), r.nowIndicator && t.coords && t.coords.isDateInRange(s) && y("div", {
                  className: "fc-timeline-now-indicator-container"
              }, y(Zo, {
                  elClasses: ["fc-timeline-now-indicator-line"],
                  elStyle: Yd(t.coords.dateToCoord(s), n.isRtl),
                  isAxis: !1,
                  date: s
              }))))))
          }
          queryHit(e, t, n, r) {
              let i = this.slatsRef.current.positionToHit(e);
              return i ? {
                  dateProfile: this.props.dateProfile,
                  dateSpan: i.dateSpan,
                  rect: {
                      left: i.left,
                      right: i.right,
                      top: 0,
                      bottom: r
                  },
                  dayEl: i.dayEl,
                  layer: 0
              } : null
          }
      }
      function ac(e, t) {
          return [{
              span: e.slotCnt,
              minWidth: t || 1
          }]
      }
      var lc = bs({
          name: "@fullcalendar/timeline",
          premiumReleaseDate: "2023-11-29",
          deps: [cd],
          initialView: "timelineDay",
          views: {
              timeline: {
                  component: class extends Zi {
                      constructor() {
                          super(...arguments),
                          this.buildTimelineDateProfile = zt(Od),
                          this.scrollGridRef = {
                              current: null
                          },
                          this.state = {
                              slatCoords: null,
                              slotCushionMaxWidth: null
                          },
                          this.handleSlatCoords = e=>{
                              this.setState({
                                  slatCoords: e
                              })
                          }
                          ,
                          this.handleScrollLeftRequest = e=>{
                              this.scrollGridRef.current.forceScrollLeft(0, e)
                          }
                          ,
                          this.handleMaxCushionWidth = e=>{
                              this.setState({
                                  slotCushionMaxWidth: Math.ceil(e)
                              })
                          }
                      }
                      render() {
                          let {props: e, state: t, context: n} = this
                            , {options: r} = n
                            , i = !e.forPrint && Go(r)
                            , o = !e.forPrint && Fo(r)
                            , s = this.buildTimelineDateProfile(e.dateProfile, n.dateEnv, r, n.dateProfileGenerator)
                            , {slotMinWidth: a} = r
                            , l = ac(s, a || this.computeFallbackSlotMinWidth(s))
                            , d = [{
                              type: "header",
                              key: "header",
                              isSticky: i,
                              chunks: [{
                                  key: "timeline",
                                  content: n=>y(Zd, {
                                      dateProfile: e.dateProfile,
                                      clientWidth: n.clientWidth,
                                      clientHeight: n.clientHeight,
                                      tableMinWidth: n.tableMinWidth,
                                      tableColGroupNode: n.tableColGroupNode,
                                      tDateProfile: s,
                                      slatCoords: t.slatCoords,
                                      onMaxCushionWidth: a ? null : this.handleMaxCushionWidth
                                  })
                              }]
                          }, {
                              type: "body",
                              key: "body",
                              liquid: !0,
                              chunks: [{
                                  key: "timeline",
                                  content: t=>y(sc, Object.assign({}, e, {
                                      clientWidth: t.clientWidth,
                                      clientHeight: t.clientHeight,
                                      tableMinWidth: t.tableMinWidth,
                                      tableColGroupNode: t.tableColGroupNode,
                                      tDateProfile: s,
                                      onSlatCoords: this.handleSlatCoords,
                                      onScrollLeftRequest: this.handleScrollLeftRequest
                                  }))
                              }]
                          }];
                          return o && d.push({
                              type: "footer",
                              key: "footer",
                              isSticky: !0,
                              chunks: [{
                                  key: "timeline",
                                  content: Uo
                              }]
                          }),
                          y(Qn, {
                              elClasses: ["fc-timeline", !1 === r.eventOverlap ? "fc-timeline-overlap-disabled" : ""],
                              viewSpec: n.viewSpec
                          }, y(wd, {
                              ref: this.scrollGridRef,
                              liquid: !e.isHeightAuto && !e.forPrint,
                              forPrint: e.forPrint,
                              collapsibleWidth: !1,
                              colGroups: [{
                                  cols: l
                              }],
                              sections: d
                          }))
                      }
                      computeFallbackSlotMinWidth(e) {
                          return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
                      }
                  }
                  ,
                  usesMinMaxTime: !0,
                  eventResizableFromStart: !0
              },
              timelineDay: {
                  type: "timeline",
                  duration: {
                      days: 1
                  }
              },
              timelineWeek: {
                  type: "timeline",
                  duration: {
                      weeks: 1
                  }
              },
              timelineMonth: {
                  type: "timeline",
                  duration: {
                      months: 1
                  }
              },
              timelineYear: {
                  type: "timeline",
                  duration: {
                      years: 1
                  }
              }
          }
      });
      const dc = "_fc:"
        , cc = {
          id: String,
          parentId: String,
          children: gn,
          title: String,
          businessHours: gn,
          extendedProps: gn,
          eventEditable: Boolean,
          eventStartEditable: Boolean,
          eventDurationEditable: Boolean,
          eventConstraint: gn,
          eventOverlap: Boolean,
          eventAllow: gn,
          eventClassNames: Er,
          eventBackgroundColor: String,
          eventBorderColor: String,
          eventTextColor: String,
          eventColor: String
      };
      function uc(e, t="", n, r) {
          let {refined: i, extra: o} = pn(e, cc)
            , s = {
              id: i.id || dc + Xe(),
              parentId: i.parentId || t,
              title: i.title || "",
              businessHours: i.businessHours ? Wr(i.businessHours, r) : null,
              ui: Rr({
                  editable: i.eventEditable,
                  startEditable: i.eventStartEditable,
                  durationEditable: i.eventDurationEditable,
                  constraint: i.eventConstraint,
                  overlap: i.eventOverlap,
                  allow: i.eventAllow,
                  classNames: i.eventClassNames,
                  backgroundColor: i.eventBackgroundColor,
                  borderColor: i.eventBorderColor,
                  textColor: i.eventTextColor,
                  color: i.eventColor
              }, r),
              extendedProps: Object.assign(Object.assign({}, o), i.extendedProps)
          };
          if (Object.freeze(s.ui.classNames),
          Object.freeze(s.extendedProps),
          n[s.id])
              ;
          else if (n[s.id] = s,
          i.children)
              for (let e of i.children)
                  uc(e, s.id, n, r);
          return s
      }
      function hc(e) {
          return 0 === e.indexOf(dc) ? "" : e
      }
      class fc {
          constructor(e, t) {
              this._context = e,
              this._resource = t
          }
          setProp(e, t) {
              let n = this._resource;
              this._context.dispatch({
                  type: "SET_RESOURCE_PROP",
                  resourceId: n.id,
                  propName: e,
                  propValue: t
              }),
              this.sync(n)
          }
          setExtendedProp(e, t) {
              let n = this._resource;
              this._context.dispatch({
                  type: "SET_RESOURCE_EXTENDED_PROP",
                  resourceId: n.id,
                  propName: e,
                  propValue: t
              }),
              this.sync(n)
          }
          sync(e) {
              let t = this._context
                , n = e.id;
              this._resource = t.getCurrentData().resourceStore[n],
              t.emitter.trigger("resourceChange", {
                  oldResource: new fc(t,e),
                  resource: this,
                  revert() {
                      t.dispatch({
                          type: "ADD_RESOURCE",
                          resourceHash: {
                              [n]: e
                          }
                      })
                  }
              })
          }
          remove() {
              let e = this._context
                , t = this._resource
                , n = t.id;
              e.dispatch({
                  type: "REMOVE_RESOURCE",
                  resourceId: n
              }),
              e.emitter.trigger("resourceRemove", {
                  resource: this,
                  revert() {
                      e.dispatch({
                          type: "ADD_RESOURCE",
                          resourceHash: {
                              [n]: t
                          }
                      })
                  }
              })
          }
          getParent() {
              let e = this._context
                , t = this._resource.parentId;
              return t ? new fc(e,e.getCurrentData().resourceStore[t]) : null
          }
          getChildren() {
              let e = this._resource.id
                , t = this._context
                , {resourceStore: n} = t.getCurrentData()
                , r = [];
              for (let i in n)
                  n[i].parentId === e && r.push(new fc(t,n[i]));
              return r
          }
          getEvents() {
              let e = this._resource.id
                , t = this._context
                , {defs: n, instances: r} = t.getCurrentData().eventStore
                , i = [];
              for (let o in r) {
                  let s = r[o]
                    , a = n[s.defId];
                  -1 !== a.resourceIds.indexOf(e) && i.push(new qr(t,a,s))
              }
              return i
          }
          get id() {
              return hc(this._resource.id)
          }
          get title() {
              return this._resource.title
          }
          get eventConstraint() {
              return this._resource.ui.constraints[0] || null
          }
          get eventOverlap() {
              return this._resource.ui.overlap
          }
          get eventAllow() {
              return this._resource.ui.allows[0] || null
          }
          get eventBackgroundColor() {
              return this._resource.ui.backgroundColor
          }
          get eventBorderColor() {
              return this._resource.ui.borderColor
          }
          get eventTextColor() {
              return this._resource.ui.textColor
          }
          get eventClassNames() {
              return this._resource.ui.classNames
          }
          get extendedProps() {
              return this._resource.extendedProps
          }
          toPlainObject(e={}) {
              let t = this._resource
                , {ui: n} = t
                , r = this.id
                , i = {};
              return r && (i.id = r),
              t.title && (i.title = t.title),
              e.collapseEventColor && n.backgroundColor && n.backgroundColor === n.borderColor ? i.eventColor = n.backgroundColor : (n.backgroundColor && (i.eventBackgroundColor = n.backgroundColor),
              n.borderColor && (i.eventBorderColor = n.borderColor)),
              n.textColor && (i.eventTextColor = n.textColor),
              n.classNames.length && (i.eventClassNames = n.classNames),
              Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(i, t.extendedProps) : i.extendedProps = t.extendedProps),
              i
          }
          toJSON() {
              return this.toPlainObject()
          }
      }
      function pc(e) {
          return {
              resource: new fc(e.context,e.resource)
          }
      }
      const gc = et("id,title");
      class mc extends jn {
          constructor() {
              super(...arguments),
              this.refineRenderProps = Bt(yc)
          }
          render() {
              const {props: e} = this;
              return y(Pn.Consumer, null, (t=>{
                  let {options: n} = t
                    , r = this.refineRenderProps({
                      resource: e.resource,
                      date: e.date,
                      context: t
                  });
                  return y(qn, Object.assign({}, e, {
                      elAttrs: Object.assign(Object.assign({}, e.elAttrs), {
                          "data-resource-id": e.resource.id,
                          "data-date": e.date ? Lt(e.date) : void 0
                      }),
                      renderProps: r,
                      generatorName: "resourceLabelContent",
                      customGenerator: n.resourceLabelContent,
                      defaultGenerator: vc,
                      classNameGenerator: n.resourceLabelClassNames,
                      didMount: n.resourceLabelDidMount,
                      willUnmount: n.resourceLabelWillUnmount
                  }))
              }
              ))
          }
      }
      function vc(e) {
          return e.resource.title || e.resource.id
      }
      function yc(e) {
          return {
              resource: new fc(e.context,e.resource),
              date: e.date ? e.context.dateEnv.toDate(e.date) : null,
              view: e.context.viewApi
          }
      }
      class bc extends jn {
          render() {
              let {props: e} = this;
              return y(mc, {
                  elTag: "th",
                  elClasses: ["fc-col-header-cell", "fc-resource"],
                  elAttrs: {
                      role: "columnheader",
                      colSpan: e.colSpan
                  },
                  resource: e.resource,
                  date: e.date
              }, (t=>y("div", {
                  className: "fc-scrollgrid-sync-inner"
              }, y(t, {
                  elTag: "span",
                  elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"]
              }))))
          }
      }
      class wc extends jn {
          constructor() {
              super(...arguments),
              this.buildDateFormat = zt(Sc)
          }
          render() {
              let {props: e, context: t} = this
                , n = this.buildDateFormat(t.options.dayHeaderFormat, e.datesRepDistinctDays, e.dates.length);
              return y(po, {
                  unit: "day"
              }, ((r,i)=>1 === e.dates.length ? this.renderResourceRow(e.resources, e.dates[0]) : t.options.datesAboveResources ? this.renderDayAndResourceRows(e.dates, n, i, e.resources) : this.renderResourceAndDayRows(e.resources, e.dates, n, i)))
          }
          renderResourceRow(e, t) {
              let n = e.map((e=>y(bc, {
                  key: e.id,
                  resource: e,
                  colSpan: 1,
                  date: t
              })));
              return this.buildTr(n, "resources")
          }
          renderDayAndResourceRows(e, t, n, r) {
              let i = []
                , o = [];
              for (let s of e) {
                  i.push(this.renderDateCell(s, t, n, r.length, null, !0));
                  for (let e of r)
                      o.push(y(bc, {
                          key: e.id + ":" + s.toISOString(),
                          resource: e,
                          colSpan: 1,
                          date: s
                      }))
              }
              return y(w, null, this.buildTr(i, "day"), this.buildTr(o, "resources"))
          }
          renderResourceAndDayRows(e, t, n, r) {
              let i = []
                , o = [];
              for (let s of e) {
                  i.push(y(bc, {
                      key: s.id,
                      resource: s,
                      colSpan: t.length,
                      isSticky: !0
                  }));
                  for (let e of t)
                      o.push(this.renderDateCell(e, n, r, 1, s))
              }
              return y(w, null, this.buildTr(i, "resources"), this.buildTr(o, "day"))
          }
          renderDateCell(e, t, n, r, i, o) {
              let {props: s} = this
                , a = i ? `:${i.id}` : ""
                , l = i ? {
                  resource: new fc(this.context,i)
              } : {}
                , d = i ? {
                  "data-resource-id": i.id
              } : {};
              return s.datesRepDistinctDays ? y(uo, {
                  key: e.toISOString() + a,
                  date: e,
                  dateProfile: s.dateProfile,
                  todayRange: n,
                  colCnt: s.dates.length * s.resources.length,
                  dayHeaderFormat: t,
                  colSpan: r,
                  isSticky: o,
                  extraRenderProps: l,
                  extraDataAttrs: d
              }) : y(fo, {
                  key: e.getUTCDay() + a,
                  dow: e.getUTCDay(),
                  dayHeaderFormat: t,
                  colSpan: r,
                  isSticky: o,
                  extraRenderProps: l,
                  extraDataAttrs: d
              })
          }
          buildTr(e, t) {
              let {renderIntro: n} = this.props;
              return e.length || (e = [y("td", {
                  key: 0
              }, " ")]),
              y("tr", {
                  key: t,
                  role: "row"
              }, n && n(t), e)
          }
      }
      function Sc(e, t, n) {
          return e || ao(t, n)
      }
      class xc {
          constructor(e) {
              let t = {}
                , n = [];
              for (let r = 0; r < e.length; r += 1) {
                  let i = e[r].id;
                  n.push(i),
                  t[i] = r
              }
              this.ids = n,
              this.indicesById = t,
              this.length = e.length
          }
      }
      class Ec {
          constructor(e, t, n) {
              this.dayTableModel = e,
              this.resources = t,
              this.context = n,
              this.resourceIndex = new xc(t),
              this.rowCnt = e.rowCnt,
              this.colCnt = e.colCnt * t.length,
              this.cells = this.buildCells()
          }
          buildCells() {
              let {rowCnt: e, dayTableModel: t, resources: n} = this
                , r = [];
              for (let i = 0; i < e; i += 1) {
                  let e = [];
                  for (let r = 0; r < t.colCnt; r += 1)
                      for (let o = 0; o < n.length; o += 1) {
                          let s = n[o]
                            , a = {
                              resource: new fc(this.context,s)
                          }
                            , l = {
                              "data-resource-id": s.id
                          }
                            , d = ["fc-resource"]
                            , c = {
                              resourceId: s.id
                          }
                            , u = t.cells[i][r].date;
                          e[this.computeCol(r, o)] = {
                              key: s.id + ":" + u.toISOString(),
                              date: u,
                              extraRenderProps: a,
                              extraDataAttrs: l,
                              extraClassNames: d,
                              extraDateSpan: c
                          }
                      }
                  r.push(e)
              }
              return r
          }
      }
      class Dc extends Ec {
          computeCol(e, t) {
              return t * this.dayTableModel.colCnt + e
          }
          computeColRanges(e, t, n) {
              return [{
                  firstCol: this.computeCol(e, n),
                  lastCol: this.computeCol(t, n),
                  isStart: !0,
                  isEnd: !0
              }]
          }
      }
      class Cc extends Ec {
          computeCol(e, t) {
              return e * this.resources.length + t
          }
          computeColRanges(e, t, n) {
              let r = [];
              for (let i = e; i <= t; i += 1) {
                  let o = this.computeCol(i, n);
                  r.push({
                      firstCol: o,
                      lastCol: o,
                      isStart: i === e,
                      isEnd: i === t
                  })
              }
              return r
          }
      }
      const Rc = [];
      class Tc {
          constructor() {
              this.joinDateSelection = zt(this.joinSegs),
              this.joinBusinessHours = zt(this.joinSegs),
              this.joinFgEvents = zt(this.joinSegs),
              this.joinBgEvents = zt(this.joinSegs),
              this.joinEventDrags = zt(this.joinInteractions),
              this.joinEventResizes = zt(this.joinInteractions)
          }
          joinProps(e, t) {
              let n = []
                , r = []
                , i = []
                , o = []
                , s = []
                , a = []
                , l = ""
                , d = t.resourceIndex.ids.concat([""]);
              for (let t of d) {
                  let d = e[t];
                  n.push(d.dateSelectionSegs),
                  r.push(t ? d.businessHourSegs : Rc),
                  i.push(t ? d.fgEventSegs : Rc),
                  o.push(d.bgEventSegs),
                  s.push(d.eventDrag),
                  a.push(d.eventResize),
                  l = l || d.eventSelection
              }
              return {
                  dateSelectionSegs: this.joinDateSelection(t, ...n),
                  businessHourSegs: this.joinBusinessHours(t, ...r),
                  fgEventSegs: this.joinFgEvents(t, ...i),
                  bgEventSegs: this.joinBgEvents(t, ...o),
                  eventDrag: this.joinEventDrags(t, ...s),
                  eventResize: this.joinEventResizes(t, ...a),
                  eventSelection: l
              }
          }
          joinSegs(e, ...t) {
              let n = e.resources.length
                , r = [];
              for (let i = 0; i < n; i += 1) {
                  for (let n of t[i])
                      r.push(...this.transformSeg(n, e, i));
                  for (let o of t[n])
                      r.push(...this.transformSeg(o, e, i))
              }
              return r
          }
          expandSegs(e, t) {
              let n = e.resources.length
                , r = [];
              for (let i = 0; i < n; i += 1)
                  for (let n of t)
                      r.push(...this.transformSeg(n, e, i));
              return r
          }
          joinInteractions(e, ...t) {
              let n = e.resources.length
                , r = {}
                , i = []
                , o = !1
                , s = !1;
              for (let a = 0; a < n; a += 1) {
                  let l = t[a];
                  if (l) {
                      o = !0;
                      for (let t of l.segs)
                          i.push(...this.transformSeg(t, e, a));
                      Object.assign(r, l.affectedInstances),
                      s = s || l.isEvent
                  }
                  if (t[n])
                      for (let r of t[n].segs)
                          i.push(...this.transformSeg(r, e, a))
              }
              return o ? {
                  affectedInstances: r,
                  segs: i,
                  isEvent: s
              } : null
          }
      }
      class Ac extends Ti {
          getKeyInfo(e) {
              let {resourceDayTableModel: t} = e
                , n = bn(t.resourceIndex.indicesById, (e=>t.resources[e]));
              return n[""] = {},
              n
          }
          getKeysForDateSpan(e) {
              return [e.resourceId || ""]
          }
          getKeysForEventDef(e) {
              let t = e.resourceIds;
              return t.length ? t : [""]
          }
      }
      function kc(e, t) {
          return _c(e, [], t, !1, {}, !0).map((e=>e.resource))
      }
      function _c(e, t, n, r, i, o) {
          let s = function(e, t, n, r) {
              let i = function(e, t) {
                  let n = {};
                  for (let t in e) {
                      let r = e[t];
                      n[t] = {
                          resource: r,
                          resourceFields: Oc(r),
                          children: []
                      }
                  }
                  for (let r in e) {
                      let i = e[r];
                      if (i.parentId) {
                          let e = n[i.parentId];
                          e && Hc(n[r], e.children, t)
                      }
                  }
                  return n
              }(e, r)
                , o = [];
              for (let e in i) {
                  let s = i[e];
                  s.resource.parentId || Ic(s, o, n, 0, t, r)
              }
              return o
          }(e, r ? -1 : 1, t, n)
            , a = [];
          return Mc(s, a, r, [], 0, i, o),
          a
      }
      function Mc(e, t, n, r, i, o, s) {
          for (let a = 0; a < e.length; a += 1) {
              let l = e[a]
                , d = l.group;
              if (d)
                  if (n) {
                      let e = t.length
                        , a = r.length;
                      if (Mc(l.children, t, n, r.concat(0), i, o, s),
                      e < t.length) {
                          let n = t[e];
                          (n.rowSpans = n.rowSpans.slice())[a] = t.length - e
                      }
                  } else {
                      let e = d.spec.field + ":" + d.value
                        , a = null != o[e] ? o[e] : s;
                      t.push({
                          id: e,
                          group: d,
                          isExpanded: a
                      }),
                      a && Mc(l.children, t, n, r, i + 1, o, s)
                  }
              else if (l.resource) {
                  let e = l.resource.id
                    , a = null != o[e] ? o[e] : s;
                  t.push({
                      id: e,
                      rowSpans: r,
                      depth: i,
                      isExpanded: a,
                      hasChildren: Boolean(l.children.length),
                      resource: l.resource,
                      resourceFields: l.resourceFields
                  }),
                  a && Mc(l.children, t, n, r, i + 1, o, s)
              }
          }
      }
      function Ic(e, t, n, r, i, o) {
          if (n.length && (-1 === i || r <= i)) {
              let s = function(e, t, n) {
                  let r, i, o = e.resourceFields[n.field];
                  if (n.order)
                      for (i = 0; i < t.length; i += 1) {
                          let e = t[i];
                          if (e.group) {
                              let t = rt(o, e.group.value) * n.order;
                              if (0 === t) {
                                  r = e;
                                  break
                              }
                              if (t < 0)
                                  break
                          }
                      }
                  else
                      for (i = 0; i < t.length; i += 1) {
                          let e = t[i];
                          if (e.group && o === e.group.value) {
                              r = e;
                              break
                          }
                      }
                  return r || (r = {
                      group: {
                          value: o,
                          spec: n
                      },
                      children: []
                  },
                  t.splice(i, 0, r)),
                  r
              }(e, t, n[0]);
              Ic(e, s.children, n.slice(1), r + 1, i, o)
          } else
              Hc(e, t, o)
      }
      function Hc(e, t, n) {
          let r;
          for (r = 0; r < t.length && !(tt(t[r].resourceFields, e.resourceFields, n) > 0); r += 1)
              ;
          t.splice(r, 0, e)
      }
      function Oc(e) {
          let t = Object.assign(Object.assign(Object.assign({}, e.extendedProps), e.ui), e);
          return delete t.ui,
          delete t.extendedProps,
          t
      }
      class Nc extends Ti {
          getKeyInfo(e) {
              return Object.assign({
                  "": {}
              }, e.resourceStore)
          }
          getKeysForDateSpan(e) {
              return [e.resourceId || ""]
          }
          getKeysForEventDef(e) {
              let t = e.resourceIds;
              return t.length ? t : [""]
          }
      }
      function Pc(e, t) {
          let {resourceEditable: n} = e;
          if (null == n) {
              let r = e.sourceId && t.getCurrentData().eventSources[e.sourceId];
              r && (n = r.extendedProps.resourceEditable),
              null == n && (n = t.options.eventResourceEditable,
              null == n && (n = t.options.editable))
          }
          return n
      }
      function Lc(e, t, n, r) {
          if (t) {
              let t = function(e, t) {
                  return yn(e, (e=>er(e.range, t)))
              }(n.instances, r)
                , i = function(e, t) {
                  let n = {};
                  for (let r in e) {
                      let i = e[r];
                      for (let e of t[i.defId].resourceIds)
                          n[e] = !0
                  }
                  return n
              }(t, n.defs);
              return Object.assign(i, function(e, t) {
                  let n = {};
                  for (let r in e) {
                      let e;
                      for (; (e = t[r]) && (r = e.parentId,
                      r); )
                          n[r] = !0
                  }
                  return n
              }(i, e)),
              yn(e, ((e,t)=>i[t]))
          }
          return e
      }
      function Wc(e) {
          return bn(e, (e=>e.ui))
      }
      function jc(e, t, n) {
          return bn(e, ((e,r)=>r ? function(e, t, n) {
              let r = [];
              for (let e of t.resourceIds)
                  n[e] && r.unshift(n[e]);
              return r.unshift(e),
              Tr(r)
          }(e, t[r], n) : e))
      }
      let zc = [];
      function Bc(e) {
          zc.push(e)
      }
      function Uc(e) {
          return zc[e]
      }
      function Gc() {
          return zc
      }
      const Fc = {
          id: String,
          resources: gn,
          url: String,
          method: String,
          startParam: String,
          endParam: String,
          timeZoneParam: String,
          extraParams: gn
      };
      function Vc(e, t, n, r) {
          if (e) {
              let i = function(e) {
                  let t;
                  if ("string" == typeof e ? t = {
                      url: e
                  } : "function" == typeof e || Array.isArray(e) ? t = {
                      resources: e
                  } : "object" == typeof e && e && (t = e),
                  t) {
                      let {refined: n, extra: r} = pn(t, Fc);
                      !function(e) {
                          for (let t in e)
                              console.warn(`Unknown resource prop '${t}'`)
                      }(r);
                      let i = function(e) {
                          let t = Gc();
                          for (let n = t.length - 1; n >= 0; n -= 1) {
                              let r = t[n].parseMeta(e);
                              if (r)
                                  return {
                                      meta: r,
                                      sourceDefId: n
                                  }
                          }
                          return null
                      }(n);
                      if (i)
                          return {
                              _raw: e,
                              sourceId: Xe(),
                              sourceDefId: i.sourceDefId,
                              meta: i.meta,
                              publicId: n.id || "",
                              isFetching: !1,
                              latestFetchId: "",
                              fetchRange: null
                          }
                  }
                  return null
              }(e);
              return i = qc(i, n ? t : null, r),
              i
          }
          return null
      }
      function qc(e, t, n) {
          let r = Uc(e.sourceDefId)
            , i = Xe();
          return r.fetch({
              resourceSource: e,
              range: t,
              context: n
          }, (e=>{
              n.dispatch({
                  type: "RECEIVE_RESOURCES",
                  fetchId: i,
                  fetchRange: t,
                  rawResources: e.rawResources
              })
          }
          ), (e=>{
              n.dispatch({
                  type: "RECEIVE_RESOURCE_ERROR",
                  fetchId: i,
                  fetchRange: t,
                  error: e
              })
          }
          )),
          Object.assign(Object.assign({}, e), {
              isFetching: !0,
              latestFetchId: i
          })
      }
      const Yc = {
          resourceId: String,
          resourceIds: gn,
          resourceEditable: Boolean
      };
      function Qc(e, t) {
          return Object.assign(Object.assign({}, t), {
              constraints: Zc(e, t.constraints)
          })
      }
      function Zc(e, t) {
          return t.map((t=>{
              let n = t.defs;
              if (n)
                  for (let t in n) {
                      let r = n[t].resourceIds;
                      if (r.length && -1 === r.indexOf(e))
                          return !1
                  }
              return t
          }
          ))
      }
      xi.prototype.addResource = function(e, t=!0) {
          let n, r, i = this.getCurrentData();
          e instanceof fc ? (r = e._resource,
          n = {
              [r.id]: r
          }) : (n = {},
          r = uc(e, "", n, i)),
          this.dispatch({
              type: "ADD_RESOURCE",
              resourceHash: n
          }),
          t && this.trigger("_scrollRequest", {
              resourceId: r.id
          });
          let o = new fc(i,r);
          return i.emitter.trigger("resourceAdd", {
              resource: o,
              revert: ()=>{
                  this.dispatch({
                      type: "REMOVE_RESOURCE",
                      resourceId: r.id
                  })
              }
          }),
          o
      }
      ,
      xi.prototype.getResourceById = function(e) {
          e = String(e);
          let t = this.getCurrentData();
          if (t.resourceStore) {
              let n = t.resourceStore[e];
              if (n)
                  return new fc(t,n)
          }
          return null
      }
      ,
      xi.prototype.getResources = function() {
          let e = this.getCurrentData()
            , {resourceStore: t} = e
            , n = [];
          if (t)
              for (let r in t)
                  n.push(new fc(e,t[r]));
          return n
      }
      ,
      xi.prototype.getTopLevelResources = function() {
          let e = this.getCurrentData()
            , {resourceStore: t} = e
            , n = [];
          if (t)
              for (let r in t)
                  t[r].parentId || n.push(new fc(e,t[r]));
          return n
      }
      ,
      xi.prototype.refetchResources = function() {
          this.dispatch({
              type: "REFETCH_RESOURCES"
          })
      }
      ;
      const $c = {
          initialResources: gn,
          resources: gn,
          eventResourceEditable: Boolean,
          refetchResourcesOnNavigate: Boolean,
          resourceOrder: et,
          filterResourcesWithEvents: Boolean,
          resourceGroupField: String,
          resourceAreaWidth: gn,
          resourceAreaColumns: gn,
          resourcesInitiallyExpanded: Boolean,
          datesAboveResources: Boolean,
          needsResourceData: Boolean,
          resourceAreaHeaderClassNames: gn,
          resourceAreaHeaderContent: gn,
          resourceAreaHeaderDidMount: gn,
          resourceAreaHeaderWillUnmount: gn,
          resourceGroupLabelClassNames: gn,
          resourceGroupLabelContent: gn,
          resourceGroupLabelDidMount: gn,
          resourceGroupLabelWillUnmount: gn,
          resourceLabelClassNames: gn,
          resourceLabelContent: gn,
          resourceLabelDidMount: gn,
          resourceLabelWillUnmount: gn,
          resourceLaneClassNames: gn,
          resourceLaneContent: gn,
          resourceLaneDidMount: gn,
          resourceLaneWillUnmount: gn,
          resourceGroupLaneClassNames: gn,
          resourceGroupLaneContent: gn,
          resourceGroupLaneDidMount: gn,
          resourceGroupLaneWillUnmount: gn
      }
        , Xc = {
          resourcesSet: gn,
          resourceAdd: gn,
          resourceChange: gn,
          resourceRemove: gn
      };
      qr.prototype.getResources = function() {
          let {calendarApi: e} = this._context;
          return this._def.resourceIds.map((t=>e.getResourceById(t)))
      }
      ,
      qr.prototype.setResources = function(e) {
          let t = [];
          for (let n of e) {
              let e = null;
              "string" == typeof n ? e = n : "number" == typeof n ? e = String(n) : n instanceof fc ? e = n.id : console.warn("unknown resource type: " + n),
              e && t.push(e)
          }
          this.mutate({
              standardProps: {
                  resourceIds: t
              }
          })
      }
      ,
      Bc({
          ignoreRange: !0,
          parseMeta: e=>Array.isArray(e.resources) ? e.resources : null,
          fetch(e, t) {
              t({
                  rawResources: e.resourceSource.meta
              })
          }
      }),
      Bc({
          parseMeta: e=>"function" == typeof e.resources ? e.resources : null,
          fetch(e, t, n) {
              const r = e.context.dateEnv
                , i = e.resourceSource.meta
                , o = e.range ? {
                  start: r.toDate(e.range.start),
                  end: r.toDate(e.range.end),
                  startStr: r.formatIso(e.range.start),
                  endStr: r.formatIso(e.range.end),
                  timeZone: r.timeZone
              } : {};
              fi(i.bind(null, o), (e=>t({
                  rawResources: e
              })), n)
          }
      }),
      Bc({
          parseMeta: e=>e.url ? {
              url: e.url,
              method: (e.method || "GET").toUpperCase(),
              extraParams: e.extraParams
          } : null,
          fetch(e, t, n) {
              const r = e.resourceSource.meta
                , i = function(e, t, n) {
                  let r, i, o, s, {dateEnv: a, options: l} = n, d = {};
                  return t && (r = e.startParam,
                  null == r && (r = l.startParam),
                  i = e.endParam,
                  null == i && (i = l.endParam),
                  o = e.timeZoneParam,
                  null == o && (o = l.timeZoneParam),
                  d[r] = a.formatIso(t.start),
                  d[i] = a.formatIso(t.end),
                  "local" !== a.timeZone && (d[o] = a.timeZone)),
                  s = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {},
                  Object.assign(d, s),
                  d
              }(r, e.range, e.context);
              gi(r.method, r.url, i).then((([e,n])=>{
                  t({
                      rawResources: e,
                      response: n
                  })
              }
              ), n)
          }
      });
      var Jc = bs({
          name: "@fullcalendar/resource",
          premiumReleaseDate: "2023-11-29",
          deps: [cd],
          reducers: [function(e, t, n) {
              let r = function(e, t, n) {
                  let {options: r, dateProfile: i} = n;
                  if (!e || !t)
                      return Vc(r.initialResources || r.resources, i.activeRange, r.refetchResourcesOnNavigate, n);
                  switch (t.type) {
                  case "RESET_RESOURCE_SOURCE":
                      return Vc(t.resourceSourceInput, i.activeRange, r.refetchResourcesOnNavigate, n);
                  case "PREV":
                  case "NEXT":
                  case "CHANGE_DATE":
                  case "CHANGE_VIEW_TYPE":
                      return function(e, t, n, r) {
                          return !n || function(e) {
                              return Boolean(Uc(e.sourceDefId).ignoreRange)
                          }(e) || e.fetchRange && Kn(e.fetchRange, t) ? e : qc(e, t, r)
                      }(e, i.activeRange, r.refetchResourcesOnNavigate, n);
                  case "RECEIVE_RESOURCES":
                  case "RECEIVE_RESOURCE_ERROR":
                      return function(e, t, n) {
                          return t === e.latestFetchId ? Object.assign(Object.assign({}, e), {
                              isFetching: !1,
                              fetchRange: n
                          }) : e
                      }(e, t.fetchId, t.fetchRange);
                  case "REFETCH_RESOURCES":
                      return qc(e, i.activeRange, n);
                  default:
                      return e
                  }
              }(e && e.resourceSource, t, n)
                , i = function(e, t, n, r) {
                  if (!e || !t)
                      return {};
                  switch (t.type) {
                  case "RECEIVE_RESOURCES":
                      return function(e, t, n, r, i) {
                          if (r.latestFetchId === n) {
                              let e = {};
                              for (let n of t)
                                  uc(n, "", e, i);
                              return e
                          }
                          return e
                      }(e, t.rawResources, t.fetchId, n, r);
                  case "ADD_RESOURCE":
                      return i = e,
                      o = t.resourceHash,
                      Object.assign(Object.assign({}, i), o);
                  case "REMOVE_RESOURCE":
                      return function(e, t) {
                          let n = Object.assign({}, e);
                          delete n[t];
                          for (let e in n)
                              n[e].parentId === t && (n[e] = Object.assign(Object.assign({}, n[e]), {
                                  parentId: ""
                              }));
                          return n
                      }(e, t.resourceId);
                  case "SET_RESOURCE_PROP":
                      return function(e, t, n, r) {
                          let i = e[t];
                          return i ? Object.assign(Object.assign({}, e), {
                              [t]: Object.assign(Object.assign({}, i), {
                                  [n]: r
                              })
                          }) : e
                      }(e, t.resourceId, t.propName, t.propValue);
                  case "SET_RESOURCE_EXTENDED_PROP":
                      return function(e, t, n, r) {
                          let i = e[t];
                          return i ? Object.assign(Object.assign({}, e), {
                              [t]: Object.assign(Object.assign({}, i), {
                                  extendedProps: Object.assign(Object.assign({}, i.extendedProps), {
                                      [n]: r
                                  })
                              })
                          }) : e
                      }(e, t.resourceId, t.propName, t.propValue);
                  default:
                      return e
                  }
                  var i, o
              }(e && e.resourceStore, t, r, n)
                , o = function(e, t) {
                  return e && t ? "SET_RESOURCE_ENTITY_EXPANDED" === t.type ? Object.assign(Object.assign({}, e), {
                      [t.id]: t.isExpanded
                  }) : e : {}
              }(e && e.resourceEntityExpansions, t);
              return {
                  resourceSource: r,
                  resourceStore: i,
                  resourceEntityExpansions: o
              }
          }
          ],
          isLoadingFuncs: [e=>e.resourceSource && e.resourceSource.isFetching],
          eventRefiners: Yc,
          eventDefMemberAdders: [function(e) {
              return {
                  resourceIds: (t = e.resourceIds,
                  (t || []).map((e=>String(e)))).concat(e.resourceId ? [e.resourceId] : []),
                  resourceEditable: e.resourceEditable
              };
              var t
          }
          ],
          isDraggableTransformers: [function(e, t, n, r) {
              if (!e) {
                  let e = r.getCurrentData();
                  if (e.viewSpecs[e.currentViewType].optionDefaults.needsResourceData && Pc(t, r))
                      return !0
              }
              return e
          }
          ],
          eventDragMutationMassagers: [function(e, t, n) {
              let r = t.dateSpan.resourceId
                , i = n.dateSpan.resourceId;
              r && i && r !== i && (e.resourceMutation = {
                  matchResourceId: r,
                  setResourceId: i
              })
          }
          ],
          eventDefMutationAppliers: [function(e, t, n) {
              let r = t.resourceMutation;
              if (r && Pc(e, n)) {
                  let t = e.resourceIds.indexOf(r.matchResourceId);
                  if (-1 !== t) {
                      let n = e.resourceIds.slice();
                      n.splice(t, 1),
                      -1 === n.indexOf(r.setResourceId) && n.push(r.setResourceId),
                      e.resourceIds = n
                  }
              }
          }
          ],
          dateSelectionTransformers: [function(e, t) {
              let n = e.dateSpan.resourceId
                , r = t.dateSpan.resourceId;
              return n && r ? {
                  resourceId: n
              } : null
          }
          ],
          datePointTransforms: [function(e, t) {
              return e.resourceId ? {
                  resource: t.calendarApi.getResourceById(e.resourceId)
              } : {}
          }
          ],
          dateSpanTransforms: [function(e, t) {
              return e.resourceId ? {
                  resource: t.calendarApi.getResourceById(e.resourceId)
              } : {}
          }
          ],
          viewPropsTransformers: [class {
              constructor() {
                  this.filterResources = zt(Lc)
              }
              transform(e, t) {
                  return t.viewSpec.optionDefaults.needsResourceData ? {
                      resourceStore: this.filterResources(t.resourceStore, t.options.filterResourcesWithEvents, t.eventStore, t.dateProfile.activeRange),
                      resourceEntityExpansions: t.resourceEntityExpansions
                  } : null
              }
          }
          , class {
              constructor() {
                  this.buildResourceEventUis = zt(Wc, xn),
                  this.injectResourceEventUis = zt(jc)
              }
              transform(e, t) {
                  return t.viewSpec.optionDefaults.needsResourceData ? null : {
                      eventUiBases: this.injectResourceEventUis(e.eventUiBases, e.eventStore.defs, this.buildResourceEventUis(t.resourceStore))
                  }
              }
          }
          ],
          isPropsValid: function(e, t) {
              let n = (new Nc).splitProps(Object.assign(Object.assign({}, e), {
                  resourceStore: t.getCurrentData().resourceStore
              }));
              for (let e in n) {
                  let r = n[e];
                  if (e && n[""] && (r = Object.assign(Object.assign({}, r), {
                      eventStore: Sr(n[""].eventStore, r.eventStore),
                      eventUiBases: Object.assign(Object.assign({}, n[""].eventUiBases), r.eventUiBases)
                  })),
                  !Do(r, t, {
                      resourceId: e
                  }, Qc.bind(null, e)))
                      return !1
              }
              return !0
          },
          externalDefTransforms: [function(e) {
              return e.resourceId ? {
                  resourceId: e.resourceId
              } : {}
          }
          ],
          eventDropTransformers: [function(e, t) {
              let {resourceMutation: n} = e;
              if (n) {
                  let {calendarApi: e} = t;
                  return {
                      oldResource: e.getResourceById(n.matchResourceId),
                      newResource: e.getResourceById(n.setResourceId)
                  }
              }
              return {
                  oldResource: null,
                  newResource: null
              }
          }
          ],
          optionChangeHandlers: {
              resources: function(e, t) {
                  t.getCurrentData().resourceSource._raw !== e && t.dispatch({
                      type: "RESET_RESOURCE_SOURCE",
                      resourceSourceInput: e
                  })
              }
          },
          optionRefiners: $c,
          listenerRefiners: Xc,
          propSetHandlers: {
              resourceStore: function(e, t) {
                  let {emitter: n} = t;
                  n.hasHandlers("resourcesSet") && n.trigger("resourcesSet", function(e, t) {
                      let n = [];
                      for (let r in e)
                          n.push(new fc(t,e[r]));
                      return n
                  }(e, t))
              }
          }
      });
      function Kc({depth: e, hasChildren: t, isExpanded: n, onExpanderClick: r}) {
          let i = [];
          for (let t = 0; t < e; t += 1)
              i.push(y("span", {
                  className: "fc-icon"
              }));
          let o = ["fc-icon"];
          return t && (n ? o.push("fc-icon-minus-square") : o.push("fc-icon-plus-square")),
          i.push(y("span", {
              className: "fc-datagrid-expander" + (t ? "" : " fc-datagrid-expander-placeholder"),
              onClick: r
          }, y("span", {
              className: o.join(" ")
          }))),
          y(w, {}, ...i)
      }
      _e(".fc .fc-resource-timeline-divider{cursor:col-resize;width:3px}.fc .fc-resource-group{font-weight:inherit;text-align:inherit}.fc .fc-resource-timeline .fc-resource-group:not([rowspan]){background:var(--fc-neutral-bg-color)}.fc .fc-timeline-lane-frame{position:relative}.fc .fc-timeline-overlap-enabled .fc-timeline-lane-frame .fc-timeline-events{box-sizing:content-box;padding-bottom:10px}.fc-timeline-body-expandrows td.fc-timeline-lane{position:relative}.fc-timeline-body-expandrows .fc-timeline-lane-frame{position:static}.fc-datagrid-cell-frame-liquid{height:100%}.fc-liquid-hack .fc-datagrid-cell-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-datagrid-header .fc-datagrid-cell-frame{align-items:center;display:flex;justify-content:flex-start;position:relative}.fc .fc-datagrid-cell-resizer{bottom:0;cursor:col-resize;position:absolute;top:0;width:5px;z-index:1}.fc .fc-datagrid-cell-cushion{overflow:hidden;padding:8px;white-space:nowrap}.fc .fc-datagrid-expander{cursor:pointer;opacity:.65}.fc .fc-datagrid-expander .fc-icon{display:inline-block;width:1em}.fc .fc-datagrid-expander-placeholder{cursor:auto}.fc .fc-resource-timeline-flat .fc-datagrid-expander-placeholder{display:none}.fc-direction-ltr .fc-datagrid-cell-resizer{right:-3px}.fc-direction-rtl .fc-datagrid-cell-resizer{left:-3px}.fc-direction-ltr .fc-datagrid-expander{margin-right:3px}.fc-direction-rtl .fc-datagrid-expander{margin-left:3px}");
      class eu extends jn {
          constructor() {
              super(...arguments),
              this.refineRenderProps = Bt(nu),
              this.onExpanderClick = e=>{
                  let {props: t} = this;
                  t.hasChildren && this.context.dispatch({
                      type: "SET_RESOURCE_ENTITY_EXPANDED",
                      id: t.resource.id,
                      isExpanded: !t.isExpanded
                  })
              }
          }
          render() {
              let {props: e, context: t} = this
                , {colSpec: n} = e
                , r = this.refineRenderProps({
                  resource: e.resource,
                  fieldValue: e.fieldValue,
                  context: t
              });
              return y(qn, {
                  elTag: "td",
                  elClasses: ["fc-datagrid-cell", "fc-resource"],
                  elAttrs: {
                      role: "gridcell",
                      "data-resource-id": e.resource.id
                  },
                  renderProps: r,
                  generatorName: n.isMain ? "resourceLabelContent" : void 0,
                  customGenerator: n.cellContent,
                  defaultGenerator: tu,
                  classNameGenerator: n.cellClassNames,
                  didMount: n.cellDidMount,
                  willUnmount: n.cellWillUnmount
              }, (t=>y("div", {
                  className: "fc-datagrid-cell-frame",
                  style: {
                      height: e.innerHeight
                  }
              }, y("div", {
                  className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
              }, n.isMain && y(Kc, {
                  depth: e.depth,
                  hasChildren: e.hasChildren,
                  isExpanded: e.isExpanded,
                  onExpanderClick: this.onExpanderClick
              }), y(t, {
                  elTag: "span",
                  elClasses: ["fc-datagrid-cell-main"]
              })))))
          }
      }
      function tu(e) {
          return e.fieldValue || y(w, null, " ")
      }
      function nu(e) {
          return {
              resource: new fc(e.context,e.resource),
              fieldValue: e.fieldValue,
              view: e.context.viewApi
          }
      }
      class ru extends jn {
          render() {
              let {props: e, context: t} = this
                , {colSpec: n} = e
                , r = {
                  groupValue: e.fieldValue,
                  view: t.viewApi
              };
              return y(qn, {
                  elTag: "td",
                  elClasses: ["fc-datagrid-cell", "fc-resource-group"],
                  elAttrs: {
                      role: "gridcell",
                      rowSpan: e.rowSpan
                  },
                  renderProps: r,
                  generatorName: "resourceGroupLabelContent",
                  customGenerator: n.cellContent,
                  defaultGenerator: iu,
                  classNameGenerator: n.cellClassNames,
                  didMount: n.cellDidMount,
                  willUnmount: n.cellWillUnmount
              }, (e=>y("div", {
                  className: "fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid"
              }, y(e, {
                  elTag: "div",
                  elClasses: ["fc-datagrid-cell-cushion", "fc-sticky"]
              }))))
          }
      }
      function iu(e) {
          return e.groupValue || y(w, null, " ")
      }
      class ou extends jn {
          render() {
              let {props: e} = this
                , {resource: t, rowSpans: n, depth: r} = e
                , i = Oc(t);
              return y("tr", {
                  role: "row"
              }, e.colSpecs.map(((o,s)=>{
                  let a = n[s];
                  if (0 === a)
                      return null;
                  null == a && (a = 1);
                  let l = o.field ? i[o.field] : t.title || hc(t.id);
                  return a > 1 ? y(ru, {
                      key: s,
                      colSpec: o,
                      fieldValue: l,
                      rowSpan: a
                  }) : y(eu, {
                      key: s,
                      colSpec: o,
                      resource: t,
                      fieldValue: l,
                      depth: r,
                      hasChildren: e.hasChildren,
                      isExpanded: e.isExpanded,
                      innerHeight: e.innerHeight
                  })
              }
              )))
          }
      }
      ou.addPropsEquality({
          rowSpans: wt
      });
      class su extends jn {
          constructor() {
              super(...arguments),
              this.innerInnerRef = {
                  current: null
              },
              this.onExpanderClick = ()=>{
                  let {props: e} = this;
                  this.context.dispatch({
                      type: "SET_RESOURCE_ENTITY_EXPANDED",
                      id: e.id,
                      isExpanded: !e.isExpanded
                  })
              }
          }
          render() {
              let {props: e, context: t} = this
                , n = {
                  groupValue: e.group.value,
                  view: t.viewApi
              }
                , r = e.group.spec;
              return y("tr", {
                  role: "row"
              }, y(qn, {
                  elTag: "th",
                  elClasses: ["fc-datagrid-cell", "fc-resource-group", t.theme.getClass("tableCellShaded")],
                  elAttrs: {
                      role: "columnheader",
                      scope: "colgroup",
                      colSpan: e.spreadsheetColCnt
                  },
                  renderProps: n,
                  generatorName: "resourceGroupLabelContent",
                  customGenerator: r.labelContent,
                  defaultGenerator: au,
                  classNameGenerator: r.labelClassNames,
                  didMount: r.labelDidMount,
                  willUnmount: r.labelWillUnmount
              }, (t=>y("div", {
                  className: "fc-datagrid-cell-frame",
                  style: {
                      height: e.innerHeight
                  }
              }, y("div", {
                  className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",
                  ref: this.innerInnerRef
              }, y(Kc, {
                  depth: 0,
                  hasChildren: !0,
                  isExpanded: e.isExpanded,
                  onExpanderClick: this.onExpanderClick
              }), y(t, {
                  elTag: "span",
                  elClasses: ["fc-datagrid-cell-main"]
              }))))))
          }
      }
      function au(e) {
          return e.groupValue || y(w, null, " ")
      }
      su.addPropsEquality({
          group: function(e, t) {
              return e.spec === t.spec && e.value === t.value
          }
      });
      class lu extends jn {
          constructor() {
              super(...arguments),
              this.resizerElRefs = new Mo(this._handleColResizerEl.bind(this)),
              this.colDraggings = {}
          }
          render() {
              let {colSpecs: e, superHeaderRendering: t, rowInnerHeights: n} = this.props
                , r = {
                  view: this.context.viewApi
              }
                , i = [];
              if (n = n.slice(),
              t) {
                  let o = n.shift();
                  i.push(y("tr", {
                      key: "row-super",
                      role: "row"
                  }, y(qn, {
                      elTag: "th",
                      elClasses: ["fc-datagrid-cell", "fc-datagrid-cell-super"],
                      elAttrs: {
                          role: "columnheader",
                          scope: "colgroup",
                          colSpan: e.length
                      },
                      renderProps: r,
                      generatorName: "resourceAreaHeaderContent",
                      customGenerator: t.headerContent,
                      defaultGenerator: t.headerDefault,
                      classNameGenerator: t.headerClassNames,
                      didMount: t.headerDidMount,
                      willUnmount: t.headerWillUnmount
                  }, (e=>y("div", {
                      className: "fc-datagrid-cell-frame",
                      style: {
                          height: o
                      }
                  }, y(e, {
                      elTag: "div",
                      elClasses: ["fc-datagrid-cell-cushion", "fc-scrollgrid-sync-inner"]
                  }))))))
              }
              let o = n.shift();
              return i.push(y("tr", {
                  key: "row",
                  role: "row"
              }, e.map(((t,n)=>{
                  let i = n === e.length - 1;
                  return y(qn, {
                      key: n,
                      elTag: "th",
                      elClasses: ["fc-datagrid-cell"],
                      elAttrs: {
                          role: "columnheader"
                      },
                      renderProps: r,
                      generatorName: "resourceAreaHeaderContent",
                      customGenerator: t.headerContent,
                      defaultGenerator: t.headerDefault,
                      classNameGenerator: t.headerClassNames,
                      didMount: t.headerDidMount,
                      willUnmount: t.headerWillUnmount
                  }, (e=>y("div", {
                      className: "fc-datagrid-cell-frame",
                      style: {
                          height: o
                      }
                  }, y("div", {
                      className: "fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"
                  }, t.isMain && y("span", {
                      className: "fc-datagrid-expander fc-datagrid-expander-placeholder"
                  }, y("span", {
                      className: "fc-icon"
                  })), y(e, {
                      elTag: "span",
                      elClasses: ["fc-datagrid-cell-main"]
                  })), !i && y("div", {
                      className: "fc-datagrid-cell-resizer",
                      ref: this.resizerElRefs.createRef(n)
                  }))))
              }
              )))),
              y(w, null, i)
          }
          _handleColResizerEl(e, t) {
              let {colDraggings: n} = this;
              if (e) {
                  let r = this.initColResizing(e, parseInt(t, 10));
                  r && (n[t] = r)
              } else {
                  let e = n[t];
                  e && (e.destroy(),
                  delete n[t])
              }
          }
          initColResizing(e, t) {
              let {pluginHooks: n, isRtl: r} = this.context
                , {onColWidthChange: i} = this.props
                , o = n.elementDraggingImpl;
              if (o) {
                  let n, s, a = new o(e);
                  return a.emitter.on("dragstart", (()=>{
                      let r = We(Pe(e, "tr"), "th");
                      s = r.map((e=>e.getBoundingClientRect().width)),
                      n = s[t]
                  }
                  )),
                  a.emitter.on("dragmove", (e=>{
                      s[t] = Math.max(n + e.deltaX * (r ? -1 : 1), 20),
                      i && i(s.slice())
                  }
                  )),
                  a.setAutoScrollEnabled(!1),
                  a
              }
              return null
          }
      }
      class du extends jn {
          constructor() {
              super(...arguments),
              this.refineRenderProps = Bt(pc),
              this.handleHeightChange = (e,t)=>{
                  this.props.onHeightChange && this.props.onHeightChange(Pe(e, "tr"), t)
              }
          }
          render() {
              let {props: e, context: t} = this
                , {options: n} = t
                , r = this.refineRenderProps({
                  resource: e.resource,
                  context: t
              });
              return y("tr", {
                  ref: e.elRef
              }, y(qn, {
                  elTag: "td",
                  elClasses: ["fc-timeline-lane", "fc-resource"],
                  elAttrs: {
                      "data-resource-id": e.resource.id
                  },
                  renderProps: r,
                  generatorName: "resourceLaneContent",
                  customGenerator: n.resourceLaneContent,
                  classNameGenerator: n.resourceLaneClassNames,
                  didMount: n.resourceLaneDidMount,
                  willUnmount: n.resourceLaneWillUnmount
              }, (t=>y("div", {
                  className: "fc-timeline-lane-frame",
                  style: {
                      height: e.innerHeight
                  }
              }, y(t, {
                  elTag: "div",
                  elClasses: ["fc-timeline-lane-misc"]
              }), y(oc, {
                  dateProfile: e.dateProfile,
                  tDateProfile: e.tDateProfile,
                  nowDate: e.nowDate,
                  todayRange: e.todayRange,
                  nextDayThreshold: e.nextDayThreshold,
                  businessHours: e.businessHours,
                  eventStore: e.eventStore,
                  eventUiBases: e.eventUiBases,
                  dateSelection: e.dateSelection,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize,
                  timelineCoords: e.timelineCoords,
                  onHeightChange: this.handleHeightChange,
                  resourceId: e.resource.id
              })))))
          }
      }
      class cu extends jn {
          render() {
              let {props: e, context: t} = this
                , {renderHooks: n} = e
                , r = {
                  groupValue: e.groupValue,
                  view: t.viewApi
              };
              return y("tr", {
                  ref: e.elRef
              }, y(qn, {
                  elTag: "td",
                  elRef: e.elRef,
                  elClasses: ["fc-timeline-lane", "fc-resource-group", t.theme.getClass("tableCellShaded")],
                  renderProps: r,
                  generatorName: "resourceGroupLaneContent",
                  customGenerator: n.laneContent,
                  classNameGenerator: n.laneClassNames,
                  didMount: n.laneDidMount,
                  willUnmount: n.laneWillUnmount
              }, (t=>y(t, {
                  elTag: "div",
                  elStyle: {
                      height: e.innerHeight
                  }
              }))))
          }
      }
      class uu extends jn {
          render() {
              let {props: e, context: t} = this
                , {rowElRefs: n, innerHeights: r} = e;
              return y("tbody", null, e.rowNodes.map(((i,o)=>{
                  if (i.group)
                      return y(cu, {
                          key: i.id,
                          elRef: n.createRef(i.id),
                          groupValue: i.group.value,
                          renderHooks: i.group.spec,
                          innerHeight: r[o] || ""
                      });
                  if (i.resource) {
                      let s = i.resource;
                      return y(du, Object.assign({
                          key: i.id,
                          elRef: n.createRef(i.id)
                      }, e.splitProps[s.id], {
                          resource: s,
                          dateProfile: e.dateProfile,
                          tDateProfile: e.tDateProfile,
                          nowDate: e.nowDate,
                          todayRange: e.todayRange,
                          nextDayThreshold: t.options.nextDayThreshold,
                          businessHours: s.businessHours || e.fallbackBusinessHours,
                          innerHeight: r[o] || "",
                          timelineCoords: e.slatCoords,
                          onHeightChange: e.onRowHeightChange
                      }))
                  }
                  return null
              }
              )))
          }
      }
      class hu extends jn {
          constructor() {
              super(...arguments),
              this.rootElRef = {
                  current: null
              },
              this.rowElRefs = new Mo
          }
          render() {
              let {props: e, context: t} = this;
              return y("table", {
                  ref: this.rootElRef,
                  "aria-hidden": !0,
                  className: "fc-scrollgrid-sync-table " + t.theme.getClass("table"),
                  style: {
                      minWidth: e.tableMinWidth,
                      width: e.clientWidth,
                      height: e.minHeight
                  }
              }, y(uu, {
                  rowElRefs: this.rowElRefs,
                  rowNodes: e.rowNodes,
                  dateProfile: e.dateProfile,
                  tDateProfile: e.tDateProfile,
                  nowDate: e.nowDate,
                  todayRange: e.todayRange,
                  splitProps: e.splitProps,
                  fallbackBusinessHours: e.fallbackBusinessHours,
                  slatCoords: e.slatCoords,
                  innerHeights: e.innerHeights,
                  onRowHeightChange: e.onRowHeightChange
              }))
          }
          componentDidMount() {
              this.updateCoords()
          }
          componentDidUpdate() {
              this.updateCoords()
          }
          componentWillUnmount() {
              this.props.onRowCoords && this.props.onRowCoords(null)
          }
          updateCoords() {
              let {props: e} = this;
              var t;
              e.onRowCoords && null !== e.clientWidth && this.props.onRowCoords(new Fi(this.rootElRef.current,(t = this.rowElRefs.currentMap,
              e.rowNodes.map((e=>t[e.id]))),!1,!0))
          }
      }
      class fu extends Zi {
          constructor() {
              super(...arguments),
              this.computeHasResourceBusinessHours = zt(pu),
              this.resourceSplitter = new Nc,
              this.bgSlicer = new tc,
              this.slatsRef = {
                  current: null
              },
              this.state = {
                  slatCoords: null
              },
              this.handleEl = e=>{
                  e ? this.context.registerInteractiveComponent(this, {
                      el: e
                  }) : this.context.unregisterInteractiveComponent(this)
              }
              ,
              this.handleSlatCoords = e=>{
                  this.setState({
                      slatCoords: e
                  }),
                  this.props.onSlatCoords && this.props.onSlatCoords(e)
              }
              ,
              this.handleRowCoords = e=>{
                  this.rowCoords = e,
                  this.props.onRowCoords && this.props.onRowCoords(e)
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , {dateProfile: r, tDateProfile: i} = e
                , o = bt(i.slotDuration).unit
                , s = this.computeHasResourceBusinessHours(e.rowNodes)
                , a = this.resourceSplitter.splitProps(e)
                , l = a[""]
                , d = this.bgSlicer.sliceProps(l, r, i.isTimeScale ? null : e.nextDayThreshold, n, r, n.dateProfileGenerator, i, n.dateEnv)
                , c = t.slatCoords && t.slatCoords.dateProfile === e.dateProfile ? t.slatCoords : null;
              return y("div", {
                  ref: this.handleEl,
                  className: ["fc-timeline-body", e.expandRows ? "fc-timeline-body-expandrows" : ""].join(" "),
                  style: {
                      minWidth: e.tableMinWidth
                  }
              }, y(po, {
                  unit: o
              }, ((t,o)=>y(w, null, y(Jd, {
                  ref: this.slatsRef,
                  dateProfile: r,
                  tDateProfile: i,
                  nowDate: t,
                  todayRange: o,
                  clientWidth: e.clientWidth,
                  tableColGroupNode: e.tableColGroupNode,
                  tableMinWidth: e.tableMinWidth,
                  onCoords: this.handleSlatCoords,
                  onScrollLeftRequest: e.onScrollLeftRequest
              }), y(ec, {
                  businessHourSegs: s ? null : d.businessHourSegs,
                  bgEventSegs: d.bgEventSegs,
                  timelineCoords: c,
                  eventResizeSegs: d.eventResize ? d.eventResize.segs : [],
                  dateSelectionSegs: d.dateSelectionSegs,
                  nowDate: t,
                  todayRange: o
              }), y(hu, {
                  rowNodes: e.rowNodes,
                  dateProfile: r,
                  tDateProfile: e.tDateProfile,
                  nowDate: t,
                  todayRange: o,
                  splitProps: a,
                  fallbackBusinessHours: s ? e.businessHours : null,
                  clientWidth: e.clientWidth,
                  minHeight: e.expandRows ? e.clientHeight : "",
                  tableMinWidth: e.tableMinWidth,
                  innerHeights: e.rowInnerHeights,
                  slatCoords: c,
                  onRowCoords: this.handleRowCoords,
                  onRowHeightChange: e.onRowHeightChange
              }), n.options.nowIndicator && c && c.isDateInRange(t) && y("div", {
                  className: "fc-timeline-now-indicator-container"
              }, y(Zo, {
                  elClasses: ["fc-timeline-now-indicator-line"],
                  elStyle: Yd(c.dateToCoord(t), n.isRtl),
                  isAxis: !1,
                  date: t
              }))))))
          }
          queryHit(e, t) {
              let n = this.rowCoords
                , r = n.topToIndex(t);
              if (null != r) {
                  let t = this.props.rowNodes[r].resource;
                  if (t) {
                      let i = this.slatsRef.current.positionToHit(e);
                      if (i)
                          return {
                              dateProfile: this.props.dateProfile,
                              dateSpan: {
                                  range: i.dateSpan.range,
                                  allDay: i.dateSpan.allDay,
                                  resourceId: t.id
                              },
                              rect: {
                                  left: i.left,
                                  right: i.right,
                                  top: n.tops[r],
                                  bottom: n.bottoms[r]
                              },
                              dayEl: i.dayEl,
                              layer: 0
                          }
                  }
              }
              return null
          }
      }
      function pu(e) {
          for (let t of e) {
              let e = t.resource;
              if (e && e.businessHours)
                  return !0
          }
          return !1
      }
      class gu extends jn {
          constructor() {
              super(...arguments),
              this.scrollGridRef = {
                  current: null
              },
              this.timeBodyScrollerElRef = {
                  current: null
              },
              this.spreadsheetHeaderChunkElRef = {
                  current: null
              },
              this.rootElRef = {
                  current: null
              },
              this.ensureScrollGridResizeId = 0,
              this.state = {
                  resourceAreaWidthOverride: null
              },
              this.ensureScrollGridResize = ()=>{
                  this.ensureScrollGridResizeId && clearTimeout(this.ensureScrollGridResizeId),
                  this.ensureScrollGridResizeId = setTimeout((()=>{
                      this.scrollGridRef.current.handleSizing(!1)
                  }
                  ), io.SCROLLGRID_RESIZE_INTERVAL + 1)
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , {options: r} = n
                , i = !e.forPrint && Go(r)
                , o = !e.forPrint && Fo(r)
                , s = [{
                  type: "header",
                  key: "header",
                  syncRowHeights: !0,
                  isSticky: i,
                  chunks: [{
                      key: "datagrid",
                      elRef: this.spreadsheetHeaderChunkElRef,
                      tableClassName: "fc-datagrid-header",
                      rowContent: e.spreadsheetHeaderRows
                  }, {
                      key: "divider",
                      outerContent: y("td", {
                          role: "presentation",
                          className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                      })
                  }, {
                      key: "timeline",
                      content: e.timeHeaderContent
                  }]
              }, {
                  type: "body",
                  key: "body",
                  syncRowHeights: !0,
                  liquid: !0,
                  expandRows: Boolean(r.expandRows),
                  chunks: [{
                      key: "datagrid",
                      tableClassName: "fc-datagrid-body",
                      rowContent: e.spreadsheetBodyRows
                  }, {
                      key: "divider",
                      outerContent: y("td", {
                          role: "presentation",
                          className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                      })
                  }, {
                      key: "timeline",
                      scrollerElRef: this.timeBodyScrollerElRef,
                      content: e.timeBodyContent
                  }]
              }];
              o && s.push({
                  type: "footer",
                  key: "footer",
                  isSticky: !0,
                  chunks: [{
                      key: "datagrid",
                      content: Uo
                  }, {
                      key: "divider",
                      outerContent: y("td", {
                          role: "presentation",
                          className: "fc-resource-timeline-divider " + n.theme.getClass("tableCellShaded")
                      })
                  }, {
                      key: "timeline",
                      content: Uo
                  }]
              });
              let a = null != t.resourceAreaWidthOverride ? t.resourceAreaWidthOverride : r.resourceAreaWidth;
              return y(wd, {
                  ref: this.scrollGridRef,
                  elRef: this.rootElRef,
                  liquid: !e.isHeightAuto && !e.forPrint,
                  forPrint: e.forPrint,
                  collapsibleWidth: !1,
                  colGroups: [{
                      cols: e.spreadsheetCols,
                      width: a
                  }, {
                      cols: []
                  }, {
                      cols: e.timeCols
                  }],
                  sections: s
              })
          }
          forceTimeScroll(e) {
              this.scrollGridRef.current.forceScrollLeft(2, e)
          }
          forceResourceScroll(e) {
              this.scrollGridRef.current.forceScrollTop(1, e)
          }
          getResourceScroll() {
              return this.timeBodyScrollerElRef.current.scrollTop
          }
          componentDidMount() {
              this.initSpreadsheetResizing()
          }
          componentWillUnmount() {
              this.destroySpreadsheetResizing()
          }
          initSpreadsheetResizing() {
              let {isRtl: e, pluginHooks: t} = this.context
                , n = t.elementDraggingImpl
                , r = this.spreadsheetHeaderChunkElRef.current;
              if (n) {
                  let t, i, o = this.rootElRef.current, s = this.spreadsheetResizerDragging = new n(o,".fc-resource-timeline-divider");
                  s.emitter.on("dragstart", (()=>{
                      t = r.getBoundingClientRect().width,
                      i = o.getBoundingClientRect().width
                  }
                  )),
                  s.emitter.on("dragmove", (n=>{
                      let r = t + n.deltaX * (e ? -1 : 1);
                      r = Math.max(r, 30),
                      r = Math.min(r, i - 30),
                      this.setState({
                          resourceAreaWidthOverride: r
                      }, this.ensureScrollGridResize)
                  }
                  )),
                  s.setAutoScrollEnabled(!1)
              }
          }
          destroySpreadsheetResizing() {
              this.spreadsheetResizerDragging && this.spreadsheetResizerDragging.destroy()
          }
      }
      class mu extends jn {
          constructor(e, t) {
              super(e, t),
              this.processColOptions = zt(wu),
              this.buildTimelineDateProfile = zt(Od),
              this.hasNesting = zt(bu),
              this.buildRowNodes = zt(_c),
              this.layoutRef = {
                  current: null
              },
              this.rowNodes = [],
              this.renderedRowNodes = [],
              this.buildRowIndex = zt(vu),
              this.handleSlatCoords = e=>{
                  this.setState({
                      slatCoords: e
                  })
              }
              ,
              this.handleRowCoords = e=>{
                  this.rowCoords = e,
                  this.scrollResponder.update(!1)
              }
              ,
              this.handleMaxCushionWidth = e=>{
                  this.setState({
                      slotCushionMaxWidth: Math.ceil(e)
                  })
              }
              ,
              this.handleScrollLeftRequest = e=>{
                  this.layoutRef.current.forceTimeScroll(e)
              }
              ,
              this.handleScrollRequest = e=>{
                  let {rowCoords: t} = this
                    , n = this.layoutRef.current
                    , r = e.rowId || e.resourceId;
                  if (t) {
                      if (r) {
                          let i = this.buildRowIndex(this.renderedRowNodes)[r];
                          if (null != i) {
                              let r = null != e.fromBottom ? t.bottoms[i] - e.fromBottom : t.tops[i];
                              n.forceResourceScroll(r)
                          }
                      }
                      return !0
                  }
                  return null
              }
              ,
              this.handleColWidthChange = e=>{
                  this.setState({
                      spreadsheetColWidths: e
                  })
              }
              ,
              this.state = {
                  resourceAreaWidth: t.options.resourceAreaWidth,
                  spreadsheetColWidths: []
              }
          }
          render() {
              let {props: e, state: t, context: n} = this
                , {options: r, viewSpec: i} = n
                , {superHeaderRendering: o, groupSpecs: s, orderSpecs: a, isVGrouping: l, colSpecs: d} = this.processColOptions(n.options)
                , c = this.buildTimelineDateProfile(e.dateProfile, n.dateEnv, r, n.dateProfileGenerator)
                , u = this.rowNodes = this.buildRowNodes(e.resourceStore, s, a, l, e.resourceEntityExpansions, r.resourcesInitiallyExpanded)
                , {slotMinWidth: h} = r
                , f = ac(c, h || this.computeFallbackSlotMinWidth(c));
              return y(Qn, {
                  elClasses: ["fc-resource-timeline", !this.hasNesting(u) && "fc-resource-timeline-flat", "fc-timeline", !1 === r.eventOverlap ? "fc-timeline-overlap-disabled" : "fc-timeline-overlap-enabled"],
                  viewSpec: i
              }, y(gu, {
                  ref: this.layoutRef,
                  forPrint: e.forPrint,
                  isHeightAuto: e.isHeightAuto,
                  spreadsheetCols: yu(d, t.spreadsheetColWidths, ""),
                  spreadsheetHeaderRows: e=>y(lu, {
                      superHeaderRendering: o,
                      colSpecs: d,
                      onColWidthChange: this.handleColWidthChange,
                      rowInnerHeights: e.rowSyncHeights
                  }),
                  spreadsheetBodyRows: e=>y(w, null, this.renderSpreadsheetRows(u, d, e.rowSyncHeights)),
                  timeCols: f,
                  timeHeaderContent: n=>y(Zd, {
                      clientWidth: n.clientWidth,
                      clientHeight: n.clientHeight,
                      tableMinWidth: n.tableMinWidth,
                      tableColGroupNode: n.tableColGroupNode,
                      dateProfile: e.dateProfile,
                      tDateProfile: c,
                      slatCoords: t.slatCoords,
                      rowInnerHeights: n.rowSyncHeights,
                      onMaxCushionWidth: h ? null : this.handleMaxCushionWidth
                  }),
                  timeBodyContent: t=>y(fu, {
                      dateProfile: e.dateProfile,
                      clientWidth: t.clientWidth,
                      clientHeight: t.clientHeight,
                      tableMinWidth: t.tableMinWidth,
                      tableColGroupNode: t.tableColGroupNode,
                      expandRows: t.expandRows,
                      tDateProfile: c,
                      rowNodes: u,
                      businessHours: e.businessHours,
                      dateSelection: e.dateSelection,
                      eventStore: e.eventStore,
                      eventUiBases: e.eventUiBases,
                      eventSelection: e.eventSelection,
                      eventDrag: e.eventDrag,
                      eventResize: e.eventResize,
                      resourceStore: e.resourceStore,
                      nextDayThreshold: n.options.nextDayThreshold,
                      rowInnerHeights: t.rowSyncHeights,
                      onSlatCoords: this.handleSlatCoords,
                      onRowCoords: this.handleRowCoords,
                      onScrollLeftRequest: this.handleScrollLeftRequest,
                      onRowHeightChange: t.reportRowHeightChange
                  })
              }))
          }
          renderSpreadsheetRows(e, t, n) {
              return e.map(((e,r)=>e.group ? y(su, {
                  key: e.id,
                  id: e.id,
                  spreadsheetColCnt: t.length,
                  isExpanded: e.isExpanded,
                  group: e.group,
                  innerHeight: n[r] || ""
              }) : e.resource ? y(ou, {
                  key: e.id,
                  colSpecs: t,
                  rowSpans: e.rowSpans,
                  depth: e.depth,
                  isExpanded: e.isExpanded,
                  hasChildren: e.hasChildren,
                  resource: e.resource,
                  innerHeight: n[r] || ""
              }) : null))
          }
          componentDidMount() {
              this.renderedRowNodes = this.rowNodes,
              this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
          }
          getSnapshotBeforeUpdate() {
              return this.props.forPrint ? {} : {
                  resourceScroll: this.queryResourceScroll()
              }
          }
          componentDidUpdate(e, t, n) {
              this.renderedRowNodes = this.rowNodes,
              this.scrollResponder.update(e.dateProfile !== this.props.dateProfile),
              n.resourceScroll && this.handleScrollRequest(n.resourceScroll)
          }
          componentWillUnmount() {
              this.scrollResponder.detach()
          }
          computeFallbackSlotMinWidth(e) {
              return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel)
          }
          queryResourceScroll() {
              let {rowCoords: e, renderedRowNodes: t} = this;
              if (e) {
                  let n = this.layoutRef.current
                    , r = e.bottoms
                    , i = n.getResourceScroll()
                    , o = {};
                  for (let e = 0; e < r.length; e += 1) {
                      let n = t[e]
                        , s = r[e] - i;
                      if (s > 0) {
                          o.rowId = n.id,
                          o.fromBottom = s;
                          break
                      }
                  }
                  return o
              }
              return null
          }
      }
      function vu(e) {
          let t = {};
          for (let n = 0; n < e.length; n += 1)
              t[e[n].id] = n;
          return t
      }
      function yu(e, t, n="") {
          return e.map(((e,r)=>({
              className: e.isMain ? "fc-main-col" : "",
              width: t[r] || e.width || n
          })))
      }
      function bu(e) {
          for (let t of e) {
              if (t.group)
                  return !0;
              if (t.resource && t.hasChildren)
                  return !0
          }
          return !1
      }
      function wu(e) {
          let t = e.resourceAreaColumns || []
            , n = null;
          t.length ? e.resourceAreaHeaderContent && (n = {
              headerClassNames: e.resourceAreaHeaderClassNames,
              headerContent: e.resourceAreaHeaderContent,
              headerDidMount: e.resourceAreaHeaderDidMount,
              headerWillUnmount: e.resourceAreaHeaderWillUnmount
          }) : t.push({
              headerClassNames: e.resourceAreaHeaderClassNames,
              headerContent: e.resourceAreaHeaderContent,
              headerDefault: ()=>"Resources",
              headerDidMount: e.resourceAreaHeaderDidMount,
              headerWillUnmount: e.resourceAreaHeaderWillUnmount
          });
          let r = []
            , i = []
            , o = []
            , s = !1;
          for (let n of t)
              n.group ? i.push(Object.assign(Object.assign({}, n), {
                  cellClassNames: n.cellClassNames || e.resourceGroupLabelClassNames,
                  cellContent: n.cellContent || e.resourceGroupLabelContent,
                  cellDidMount: n.cellDidMount || e.resourceGroupLabelDidMount,
                  cellWillUnmount: n.cellWillUnmount || e.resourceGroupLaneWillUnmount
              })) : r.push(n);
          let a = r[0];
          if (a.isMain = !0,
          a.cellClassNames = a.cellClassNames || e.resourceLabelClassNames,
          a.cellContent = a.cellContent || e.resourceLabelContent,
          a.cellDidMount = a.cellDidMount || e.resourceLabelDidMount,
          a.cellWillUnmount = a.cellWillUnmount || e.resourceLabelWillUnmount,
          i.length)
              o = i,
              s = !0;
          else {
              let t = e.resourceGroupField;
              t && o.push({
                  field: t,
                  labelClassNames: e.resourceGroupLabelClassNames,
                  labelContent: e.resourceGroupLabelContent,
                  labelDidMount: e.resourceGroupLabelDidMount,
                  labelWillUnmount: e.resourceGroupLabelWillUnmount,
                  laneClassNames: e.resourceGroupLaneClassNames,
                  laneContent: e.resourceGroupLaneContent,
                  laneDidMount: e.resourceGroupLaneDidMount,
                  laneWillUnmount: e.resourceGroupLaneWillUnmount
              })
          }
          let l = e.resourceOrder || gc
            , d = [];
          for (let e of l) {
              let t = !1;
              for (let n of o)
                  if (n.field === e.field) {
                      n.order = e.order,
                      t = !0;
                      break
                  }
              t || d.push(e)
          }
          return {
              superHeaderRendering: n,
              isVGrouping: s,
              groupSpecs: o,
              colSpecs: i.concat(r),
              orderSpecs: d
          }
      }
      mu.addStateEquality({
          spreadsheetColWidths: wt
      });
      var Su = bs({
          name: "@fullcalendar/resource-timeline",
          premiumReleaseDate: "2023-11-29",
          deps: [cd, Jc, lc],
          initialView: "resourceTimelineDay",
          views: {
              resourceTimeline: {
                  type: "timeline",
                  component: mu,
                  needsResourceData: !0,
                  resourceAreaWidth: "30%",
                  resourcesInitiallyExpanded: !0,
                  eventResizableFromStart: !0
              },
              resourceTimelineDay: {
                  type: "resourceTimeline",
                  duration: {
                      days: 1
                  }
              },
              resourceTimelineWeek: {
                  type: "resourceTimeline",
                  duration: {
                      weeks: 1
                  }
              },
              resourceTimelineMonth: {
                  type: "resourceTimeline",
                  duration: {
                      months: 1
                  }
              },
              resourceTimelineYear: {
                  type: "resourceTimeline",
                  duration: {
                      years: 1
                  }
              }
          }
      });
      class xu extends Tc {
          transformSeg(e, t, n) {
              return t.computeColRanges(e.firstCol, e.lastCol, n).map((t=>Object.assign(Object.assign(Object.assign({}, e), t), {
                  isStart: e.isStart && t.isStart,
                  isEnd: e.isEnd && t.isEnd
              })))
          }
      }
      class Eu extends Zi {
          constructor() {
              super(...arguments),
              this.splitter = new Ac,
              this.slicers = {},
              this.joiner = new xu,
              this.tableRef = {
                  current: null
              },
              this.isHitComboAllowed = (e,t)=>1 === this.props.resourceDayTableModel.dayTableModel.colCnt || e.dateSpan.resourceId === t.dateSpan.resourceId
          }
          render() {
              let {props: e, context: t} = this
                , {resourceDayTableModel: n, nextDayThreshold: r, dateProfile: i} = e
                , o = this.splitter.splitProps(e);
              this.slicers = bn(o, ((e,t)=>this.slicers[t] || new Oa));
              let s = bn(this.slicers, ((e,s)=>e.sliceProps(o[s], i, r, t, n.dayTableModel)));
              return y(Ha, Object.assign({
                  forPrint: e.forPrint,
                  ref: this.tableRef
              }, this.joiner.joinProps(s, n), {
                  cells: n.cells,
                  dateProfile: i,
                  colGroupNode: e.colGroupNode,
                  tableMinWidth: e.tableMinWidth,
                  renderRowIntro: e.renderRowIntro,
                  dayMaxEvents: e.dayMaxEvents,
                  dayMaxEventRows: e.dayMaxEventRows,
                  showWeekNumbers: e.showWeekNumbers,
                  expandRows: e.expandRows,
                  headerAlignElRef: e.headerAlignElRef,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  isHitComboAllowed: this.isHitComboAllowed
              }))
          }
      }
      class Du extends Tc {
          transformSeg(e, t, n) {
              return [Object.assign(Object.assign({}, e), {
                  col: t.computeCol(e.col, n)
              })]
          }
      }
      class Cu extends Zi {
          constructor() {
              super(...arguments),
              this.buildDayRanges = zt(ml),
              this.splitter = new Ac,
              this.slicers = {},
              this.joiner = new Du,
              this.timeColsRef = {
                  current: null
              },
              this.isHitComboAllowed = (e,t)=>1 === this.dayRanges.length || e.dateSpan.resourceId === t.dateSpan.resourceId
          }
          render() {
              let {props: e, context: t} = this
                , {dateEnv: n, options: r} = t
                , {dateProfile: i, resourceDayTableModel: o} = e
                , s = this.dayRanges = this.buildDayRanges(o.dayTableModel, i, n)
                , a = this.splitter.splitProps(e);
              this.slicers = bn(a, ((e,t)=>this.slicers[t] || new pl));
              let l = bn(this.slicers, ((e,n)=>e.sliceProps(a[n], i, null, t, s)));
              return y(po, {
                  unit: r.nowIndicator ? "minute" : "day"
              }, ((t,n)=>y(hl, Object.assign({
                  ref: this.timeColsRef
              }, this.joiner.joinProps(l, o), {
                  dateProfile: i,
                  axis: e.axis,
                  slotDuration: e.slotDuration,
                  slatMetas: e.slatMetas,
                  cells: o.cells[0],
                  tableColGroupNode: e.tableColGroupNode,
                  tableMinWidth: e.tableMinWidth,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  expandRows: e.expandRows,
                  nowDate: t,
                  nowIndicatorSegs: r.nowIndicator && this.buildNowIndicatorSegs(t),
                  todayRange: n,
                  onScrollTopRequest: e.onScrollTopRequest,
                  forPrint: e.forPrint,
                  onSlatCoords: e.onSlatCoords,
                  isHitComboAllowed: this.isHitComboAllowed
              }))))
          }
          buildNowIndicatorSegs(e) {
              let t = this.slicers[""].sliceNowDate(e, this.props.dateProfile, this.context.options.nextDayThreshold, this.context, this.dayRanges);
              return this.joiner.expandSegs(this.props.resourceDayTableModel, t)
          }
      }
      function Ru(e, t, n, r, i) {
          let o = bl(e, t);
          return r ? new Cc(o,n,i) : new Dc(o,n,i)
      }
      var Tu = bs({
          name: "@fullcalendar/resource-timegrid",
          premiumReleaseDate: "2023-11-29",
          deps: [cd, Jc, wl],
          initialView: "resourceTimeGridDay",
          views: {
              resourceTimeGrid: {
                  type: "timeGrid",
                  component: class extends qa {
                      constructor() {
                          super(...arguments),
                          this.flattenResources = zt(kc),
                          this.buildResourceTimeColsModel = zt(Ru),
                          this.buildSlatMetas = zt(yl)
                      }
                      render() {
                          let {props: e, context: t} = this
                            , {options: n, dateEnv: r} = t
                            , {dateProfile: i} = e
                            , o = this.allDaySplitter.splitProps(e)
                            , s = n.resourceOrder || gc
                            , a = this.flattenResources(e.resourceStore, s)
                            , l = this.buildResourceTimeColsModel(i, t.dateProfileGenerator, a, n.datesAboveResources, t)
                            , d = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, n.slotLabelInterval, n.slotDuration, r)
                            , {dayMinWidth: c} = n
                            , u = !c
                            , h = c
                            , f = n.dayHeaders && y(wc, {
                              resources: a,
                              dates: l.dayTableModel.headerDates,
                              dateProfile: i,
                              datesRepDistinctDays: !0,
                              renderIntro: u ? this.renderHeadAxis : null
                          })
                            , p = !1 !== n.allDaySlot && (t=>y(Eu, Object.assign({}, o.allDay, {
                              dateProfile: i,
                              resourceDayTableModel: l,
                              nextDayThreshold: n.nextDayThreshold,
                              tableMinWidth: t.tableMinWidth,
                              colGroupNode: t.tableColGroupNode,
                              renderRowIntro: u ? this.renderTableRowAxis : null,
                              showWeekNumbers: !1,
                              expandRows: !1,
                              headerAlignElRef: this.headerElRef,
                              clientWidth: t.clientWidth,
                              clientHeight: t.clientHeight,
                              forPrint: e.forPrint
                          }, this.getAllDayMaxEventProps())))
                            , g = t=>y(Cu, Object.assign({}, o.timed, {
                              dateProfile: i,
                              axis: u,
                              slotDuration: n.slotDuration,
                              slatMetas: d,
                              resourceDayTableModel: l,
                              tableColGroupNode: t.tableColGroupNode,
                              tableMinWidth: t.tableMinWidth,
                              clientWidth: t.clientWidth,
                              clientHeight: t.clientHeight,
                              onSlatCoords: this.handleSlatCoords,
                              expandRows: t.expandRows,
                              forPrint: e.forPrint,
                              onScrollTopRequest: this.handleScrollTopRequest
                          }));
                          return h ? this.renderHScrollLayout(f, p, g, l.colCnt, c, d, this.state.slatCoords) : this.renderSimpleLayout(f, p, g)
                      }
                  }
                  ,
                  needsResourceData: !0
              },
              resourceTimeGridDay: {
                  type: "resourceTimeGrid",
                  duration: {
                      days: 1
                  }
              },
              resourceTimeGridWeek: {
                  type: "resourceTimeGrid",
                  duration: {
                      weeks: 1
                  }
              }
          }
      });
      class Au extends Zi {
          constructor() {
              super(...arguments),
              this.buildDayTableModel = zt(Pa),
              this.slicer = new Oa,
              this.state = {
                  labelId: Fe()
              }
          }
          render() {
              const {props: e, state: t, context: n} = this
                , {dateProfile: r, forPrint: i} = e
                , {options: o} = n
                , s = this.buildDayTableModel(r, n.dateProfileGenerator)
                , a = this.slicer.sliceProps(e, r, o.nextDayThreshold, n, s)
                , l = null != e.tableWidth ? e.tableWidth / o.aspectRatio : null
                , d = s.cells.length
                , c = null != l ? l / d : null;
              return y("div", {
                  ref: e.elRef,
                  "data-date": e.isoDateStr,
                  className: "fc-multimonth-month",
                  style: {
                      width: e.width
                  },
                  role: "grid",
                  "aria-labelledby": t.labelId
              }, y("div", {
                  className: "fc-multimonth-header",
                  style: {
                      marginBottom: c
                  },
                  role: "presentation"
              }, y("div", {
                  className: "fc-multimonth-title",
                  id: t.labelId
              }, n.dateEnv.format(e.dateProfile.currentRange.start, e.titleFormat)), y("table", {
                  className: ["fc-multimonth-header-table", n.theme.getClass("table")].join(" "),
                  role: "presentation"
              }, y("thead", {
                  role: "rowgroup"
              }, y(mo, {
                  dateProfile: e.dateProfile,
                  dates: s.headerDates,
                  datesRepDistinctDays: !1
              })))), y("div", {
                  className: ["fc-multimonth-daygrid", "fc-daygrid", "fc-daygrid-body", !i && "fc-daygrid-body-balanced", i && "fc-daygrid-body-unbalanced", i && "fc-daygrid-body-natural"].join(" "),
                  style: {
                      marginTop: -c
                  }
              }, y("table", {
                  className: ["fc-multimonth-daygrid-table", n.theme.getClass("table")].join(" "),
                  style: {
                      height: i ? "" : l
                  },
                  role: "presentation"
              }, y("tbody", {
                  role: "rowgroup"
              }, y(Ma, Object.assign({}, a, {
                  dateProfile: r,
                  cells: s.cells,
                  eventSelection: e.eventSelection,
                  dayMaxEvents: !i,
                  dayMaxEventRows: !i,
                  showWeekNumbers: o.weekNumbers,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  forPrint: i
              }))))))
          }
      }
      const ku = ut(1, "month");
      function _u(e, t, n, r, i) {
          const {start: o, end: s} = t.currentRange;
          let a = o;
          const l = [];
          for (; a.valueOf() < s.valueOf(); ) {
              const o = n.add(a, ku)
                , s = {
                  start: e.skipHiddenDays(a),
                  end: e.skipHiddenDays(o, -1, !0)
              };
              let d = Wa({
                  currentRange: s,
                  snapToWeek: !0,
                  fixedWeekCount: r,
                  dateEnv: n
              });
              d = {
                  start: e.skipHiddenDays(d.start),
                  end: e.skipHiddenDays(d.end, -1, !0)
              };
              const c = t.activeRange ? Jn(t.activeRange, i ? d : s) : null;
              l.push({
                  currentDate: t.currentDate,
                  isValid: t.isValid,
                  validRange: t.validRange,
                  renderRange: d,
                  activeRange: c,
                  currentRange: s,
                  currentRangeUnit: "month",
                  isRangeAllDay: !0,
                  dateIncrement: t.dateIncrement,
                  slotMinTime: t.slotMaxTime,
                  slotMaxTime: t.slotMinTime
              }),
              a = o
          }
          return l
      }
      const Mu = rn({
          year: "numeric",
          month: "long"
      })
        , Iu = rn({
          month: "long"
      });
      function Hu(e, t) {
          return e || (t[0].currentRange.start.getUTCFullYear() !== t[t.length - 1].currentRange.start.getUTCFullYear() ? Mu : Iu)
      }
      const Ou = {
          multiMonthTitleFormat: rn,
          multiMonthMaxColumns: Number,
          multiMonthMinWidth: Number
      };
      _e(".fc .fc-multimonth{border:1px solid var(--fc-border-color);display:flex;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto}.fc .fc-multimonth-title{font-size:1.2em;font-weight:700;padding:1em 0;text-align:center}.fc .fc-multimonth-daygrid{background:var(--fc-page-bg-color)}.fc .fc-multimonth-daygrid-table,.fc .fc-multimonth-header-table{table-layout:fixed;width:100%}.fc .fc-multimonth-daygrid-table{border-top-style:hidden!important}.fc .fc-multimonth-singlecol .fc-multimonth{position:relative}.fc .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:relative;top:0;z-index:2}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid{position:relative;z-index:1}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid-table,.fc .fc-multimonth-singlecol .fc-multimonth-header-table{border-left-style:hidden;border-right-style:hidden}.fc .fc-multimonth-singlecol .fc-multimonth-month:last-child .fc-multimonth-daygrid-table{border-bottom-style:hidden}.fc .fc-multimonth-multicol{line-height:1}.fc .fc-multimonth-multicol .fc-multimonth-month{padding:0 1.2em 1.2em}.fc .fc-multimonth-multicol .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);display:block;float:none;padding:1px}.fc .fc-multimonth-compact{line-height:1}.fc .fc-multimonth-compact .fc-multimonth-daygrid-table,.fc .fc-multimonth-compact .fc-multimonth-header-table{font-size:.9em}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{position:sticky}.fc-media-print .fc-multimonth{overflow:visible}");
      var Nu = bs({
          name: "@fullcalendar/multimonth",
          initialView: "multiMonthYear",
          optionRefiners: Ou,
          views: {
              multiMonth: {
                  component: class extends Zi {
                      constructor() {
                          super(...arguments),
                          this.splitDateProfileByMonth = zt(_u),
                          this.buildMonthFormat = zt(Hu),
                          this.scrollElRef = {
                              current: null
                          },
                          this.firstMonthElRef = {
                              current: null
                          },
                          this.needsScrollReset = !1,
                          this.handleSizing = e=>{
                              e && this.updateSize()
                          }
                      }
                      render() {
                          const {context: e, props: t, state: n} = this
                            , {options: r} = e
                            , {clientWidth: i, clientHeight: o} = n
                            , s = n.monthHPadding || 0
                            , a = Math.min(null != i ? Math.floor(i / (r.multiMonthMinWidth + s)) : 1, r.multiMonthMaxColumns) || 1
                            , l = 100 / a + "%"
                            , d = null == i ? null : i / a - s
                            , c = null != i && 1 === a
                            , u = this.splitDateProfileByMonth(e.dateProfileGenerator, t.dateProfile, e.dateEnv, !c && r.fixedWeekCount, r.showNonCurrentDates)
                            , h = this.buildMonthFormat(r.multiMonthTitleFormat, u)
                            , f = ["fc-multimonth", c ? "fc-multimonth-singlecol" : "fc-multimonth-multicol", null != d && d < 400 ? "fc-multimonth-compact" : ""];
                          return y(Qn, {
                              elRef: this.scrollElRef,
                              elClasses: f,
                              viewSpec: e.viewSpec
                          }, u.map(((e,n)=>{
                              const r = Wt(e.currentRange.start);
                              return y(Au, Object.assign({}, t, {
                                  key: r,
                                  isoDateStr: r,
                                  elRef: 0 === n ? this.firstMonthElRef : void 0,
                                  titleFormat: h,
                                  dateProfile: e,
                                  width: l,
                                  tableWidth: d,
                                  clientWidth: i,
                                  clientHeight: o
                              }))
                          }
                          )))
                      }
                      componentDidMount() {
                          this.updateSize(),
                          this.context.addResizeHandler(this.handleSizing),
                          this.requestScrollReset()
                      }
                      componentDidUpdate(e) {
                          xn(e, this.props) || this.handleSizing(!1),
                          e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset()
                      }
                      componentWillUnmount() {
                          this.context.removeResizeHandler(this.handleSizing)
                      }
                      updateSize() {
                          const e = this.scrollElRef.current
                            , t = this.firstMonthElRef.current;
                          e && this.setState({
                              clientWidth: e.clientWidth,
                              clientHeight: e.clientHeight
                          }),
                          t && e && null == this.state.monthHPadding && this.setState({
                              monthHPadding: e.clientWidth - t.firstChild.offsetWidth
                          })
                      }
                      requestScrollReset() {
                          this.needsScrollReset = !0,
                          this.flushScrollReset()
                      }
                      flushScrollReset() {
                          if (this.needsScrollReset && null != this.state.monthHPadding) {
                              const {currentDate: e} = this.props.dateProfile
                                , t = this.scrollElRef.current
                                , n = t.querySelector(`[data-date="${Wt(e)}"]`);
                              t.scrollTop = n.getBoundingClientRect().top - this.firstMonthElRef.current.getBoundingClientRect().top,
                              this.needsScrollReset = !1
                          }
                      }
                      shouldComponentUpdate() {
                          return !0
                      }
                  }
                  ,
                  dateProfileGeneratorClass: La,
                  multiMonthMinWidth: 350,
                  multiMonthMaxColumns: 3
              },
              multiMonthYear: {
                  type: "multiMonth",
                  duration: {
                      years: 1
                  },
                  fixedWeekCount: !0,
                  showNonCurrentDates: !1
              }
          }
      });
      class Pu extends Mn {
      }
      Pu.prototype.classes = {
          root: "fc-theme-bootstrap5",
          tableCellShaded: "fc-theme-bootstrap5-shaded",
          buttonGroup: "btn-group",
          button: "btn btn-primary",
          buttonActive: "active",
          popover: "popover",
          popoverHeader: "popover-header",
          popoverContent: "popover-body"
      },
      Pu.prototype.baseIconClass = "bi",
      Pu.prototype.iconClasses = {
          close: "bi-x-lg",
          prev: "bi-chevron-left",
          next: "bi-chevron-right",
          prevYear: "bi-chevron-double-left",
          nextYear: "bi-chevron-double-right"
      },
      Pu.prototype.rtlIconClasses = {
          prev: "bi-chevron-right",
          next: "bi-chevron-left",
          prevYear: "bi-chevron-double-right",
          nextYear: "bi-chevron-double-left"
      },
      Pu.prototype.iconOverrideOption = "buttonIcons",
      Pu.prototype.iconOverrideCustomButtonOption = "icon",
      Pu.prototype.iconOverridePrefix = "bi-",
      _e(".fc-theme-bootstrap5 a:not([href]){color:inherit;text-decoration:inherit}.fc-theme-bootstrap5 .fc-list,.fc-theme-bootstrap5 .fc-scrollgrid,.fc-theme-bootstrap5 td,.fc-theme-bootstrap5 th{border:1px solid var(--bs-gray-400)}.fc-theme-bootstrap5 .fc-scrollgrid{border-bottom-width:0;border-right-width:0}.fc-theme-bootstrap5-shaded{background-color:var(--bs-gray-200)}");
      var Lu = bs({
          name: "@fullcalendar/bootstrap5",
          themeClasses: {
              bootstrap5: Pu
          }
      });
      let Wu = {}
        , ju = {}
        , zu = 0;
      function Bu(e, t) {
          if (ju[e])
              t();
          else {
              let n = document.querySelector(`link[href="${e}"]`);
              n ? (Wu[e] = n,
              ju[e] = !0,
              t()) : (n = document.createElement("link"),
              n.setAttribute("rel", "stylesheet"),
              n.setAttribute("href", e),
              document.querySelector("head").appendChild(n),
              Wu[e] = n,
              function(e, t) {
                  var n = !1;
                  function r() {
                      n || (n = !0,
                      t())
                  }
                  e.onload = r,
                  setTimeout(r, 2e3)
              }(n, (function() {
                  ju[e] = !0,
                  t()
              }
              )))
          }
      }
      function Uu(e) {
          let t = Wu[e];
          t && (t.parentNode.removeChild(t),
          delete Wu[e],
          delete ju[e])
      }
      let Gu;
      const Fu = [class extends Kl {
          title = "Drag-n-Drop Events";
          controlHtml = "\n    <p>Drag these onto the calendar:</p>\n    <div class='fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable'>Event 1</div>\n    <div class='fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable'>Event 2</div>\n    <p><a href='/docs/external-dragging' class='more-link'>More info</a></p>\n  ";
          init(e, t, n) {
              let r = new Xl(e,{
                  itemSelector: ".fc-event",
                  eventData: function(e) {
                      return {
                          title: e.innerText.trim()
                      }
                  }
              })
                , i = new ua(n,{
                  timeZone: "UTC",
                  plugins: [Jl, ja, wl, kl],
                  headerToolbar: {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                  },
                  navLinks: !0,
                  editable: !0,
                  dayMaxEvents: !0,
                  events: "/api/demo-feeds/events.json?overload-day"
              });
              i.render(),
              this.draggable = r,
              this.calendar = i
          }
          destroy() {
              this.draggable.destroy(),
              this.calendar.destroy()
          }
      }
      , class extends Kl {
          title = "Resource Timeline";
          controlHtml = "\n    <span class='badge'>Premium</span>\n    <p>\n      Display resources as rows.\n      The exact time interval is configurable.\n      <a href='/docs/timeline-view' class='more-link'>Learn more</a>\n    </p>\n  ";
          init(e, t, n) {
              return new ua(n,{
                  plugins: [Jl, Su],
                  timeZone: "UTC",
                  initialView: "resourceTimelineDay",
                  aspectRatio: 1.5,
                  headerToolbar: {
                      left: "prev,next",
                      center: "title",
                      right: "resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth"
                  },
                  editable: !0,
                  resourceAreaHeaderContent: "Rooms",
                  resources: "/api/demo-feeds/resources.json?with-nesting&with-colors",
                  events: "/api/demo-feeds/events.json?single-day&for-resource-timeline"
              })
          }
      }
      , class extends Kl {
          title = "Resource Time Grid";
          controlHtml = "\n    <span class='badge'>Premium</span>\n    <p>\n      Display resources as columns.\n      <a href='/docs/vertical-resource-view' class='more-link'>Learn more</a>\n    </p>\n  ";
          init(e, t, n) {
              return new ua(n,{
                  plugins: [Jl, Tu],
                  timeZone: "UTC",
                  initialView: "resourceTimeGridDay",
                  resources: [{
                      id: "a",
                      title: "Room A"
                  }, {
                      id: "b",
                      title: "Room B"
                  }, {
                      id: "c",
                      title: "Room C"
                  }, {
                      id: "d",
                      title: "Room D"
                  }],
                  editable: !0,
                  events: "/api/demo-feeds/events.json?with-resources=4&single-day"
              })
          }
      }
      , class extends Kl {
          title = "Year Views";
          controlHtml = "\n    <p>\n      Display an entire year\n      <a href='/docs/multimonth-grid' class='more-link'>Learn more</a>\n    </p>\n  ";
          init(e, t, n) {
              return new ua(n,{
                  plugins: [Jl, ja, Nu],
                  timeZone: "UTC",
                  initialView: "multiMonthYearGrid",
                  headerToolbar: {
                      left: "prev,next today",
                      center: "title",
                      right: "multiMonthYearGrid,multiMonthYearStack,dayGridYear"
                  },
                  views: {
                      multiMonthYearGrid: {
                          type: "multiMonthYear",
                          buttonText: "Grid"
                      },
                      multiMonthYearStack: {
                          type: "multiMonthYear",
                          buttonText: "Stack",
                          multiMonthMaxColumns: 1
                      },
                      dayGridYear: {
                          buttonText: "Continuous"
                      }
                  },
                  editable: !0,
                  events: "/api/demo-feeds/events.json"
              })
          }
      }
      , class extends Kl {
          title = "Selectable Dates";
          controlHtml = "\n    <p>\n      Click and drag your pointer over some dates.\n      You will be asked to create an event via the API.\n      <a href='/docs/date-clicking-selecting' class='more-link'>Learn more</a>\n    </p>\n  ";
          init(e, t, n) {
              let r = new ua(n,{
                  timeZone: "UTC",
                  plugins: [Jl, ja, wl],
                  headerToolbar: {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay"
                  },
                  navLinks: !0,
                  dayMaxEvents: !0,
                  editable: !0,
                  selectable: !0,
                  selectMirror: !0,
                  select(e) {
                      let t = prompt("Create an event from " + e.startStr + " to " + e.endStr + " (excl).\nEnter a title:");
                      (t || e.view.type.match(/^timeGrid/)) && r.unselect(),
                      t && r.addEvent({
                          title: t,
                          start: e.start,
                          end: e.end
                      })
                  }
              });
              return r
          }
      }
      , class extends Kl {
          title = "Background Events";
          controlHtml = "\n    <p>\n      Display <a href='/docs/background-events'>background events</a>.\n    </p>\n    <p>\n      Also, control where events are\n      <a href='/docs/eventOverlap'>allowed to go</a>\n      (the <span style='color:#83ef70'>green areas</span> are prohibited).\n    </p>\n  ";
          init(e, t, n) {
              let r = (new Date).toISOString().match(/^\d\d\d\d-\d\d/)[0];
              return new ua(n,{
                  plugins: [Jl, wl, ja],
                  headerToolbar: {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek"
                  },
                  initialView: "dayGridMonth",
                  initialDate: r + "-12",
                  businessHours: !0,
                  editable: !0,
                  events: [{
                      title: "Meeting",
                      start: r + "-03T16:00:00",
                      constraint: "businessHours"
                  }, {
                      title: "Meeting",
                      start: r + "-16T09:00:00"
                  }, {
                      title: "Conference Call",
                      start: r + "-20T08:00:00"
                  }, {
                      title: "Party",
                      start: r + "-29T20:00:00"
                  }, {
                      start: r + "-24",
                      end: r + "-28",
                      overlap: !1,
                      display: "background"
                  }, {
                      start: r + "-06",
                      end: r + "-08",
                      overlap: !1,
                      display: "background"
                  }, {
                      daysOfWeek: [3, 4],
                      startTime: "10:00",
                      endTime: "16:00",
                      overlap: !1,
                      display: "background"
                  }]
              })
          }
      }
      , class extends Kl {
          title = "Theming";
          controlHtml = "\n    <p><label for='theme-select'>Change the theme:</label></p>\n    <p>\n    <select id='theme-select' name='theme'>\n      <option value='fullcalendar'>Default FullCalendar Theme</option>\n      <option value='bootstrap5' selected>Default Bootstrap Theme</option>\n      <option value='cerulean'>Cerulean</option>\n      <option value='cosmo'>Cosmo</option>\n      <option value='cyborg'>Cyborg</option>\n      <option value='darkly'>Darkly</option>\n      <option value='flatly'>Flatly</option>\n      <option value='journal'>Journal</option>\n      <option value='litera'>Litera</option>\n      <option value='lumen'>Lumen</option>\n      <option value='lux'>Lux</option>\n      <option value='materia'>Materia</option>\n      <option value='minty'>Minty</option>\n      <option value='pulse'>Pulse</option>\n      <option value='sandstone'>Sandstone</option>\n      <option value='simplex'>Simplex</option>\n      <option value='sketchy'>Sketchy</option>\n      <option value='slate'>Slate</option>\n      <option value='solar'>Solar</option>\n      <option value='spacelab'>Spacelab</option>\n      <option value='superhero'>Superhero</option>\n      <option value='united'>United</option>\n      <option value='yeti'>Yeti</option>\n    </select>\n    </p>\n    <p><a href='/docs/theming' class='more-link'>More info</a></p>\n  ";
          contentHtml = "\n    <iframe src='about:blank' class='demos__main-iframe'></iframe>\n  ";
          init(e, n) {
              let r = n.querySelector("iframe").contentWindow
                , i = r.document
                , o = !1;
              i.open(),
              i.write(`\n<!DOCTYPE html>\n<head>\n<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\n<script>isCalendarThemeRender = true<\/script>\n${t('link[rel="stylesheet"]').map((function(e) {
                  return e.getAttribute("href")
              }
              )).map((function(e) {
                  return `<link rel="stylesheet" href="${e}" />`
              }
              )).join("\n")}\n ${t("script[src]").map((function(e) {
                  return e.getAttribute("src")
              }
              )).filter(td).map((function(e) {
                  return `<script src="${e}"><\/script>`
              }
              )).join("\n")}\n<style>\nbody, html { margin: 0; padding: 0; overflow: hidden }\n</style>\n</head>\n<body>\n<div id='calendar' class='demo-calendar'></div>\n</body>\n</html>\n`),
              i.close(),
              i.addEventListener("DOMContentLoaded", a),
              r.onload = a,
              setTimeout(a, 2e3);
              let s = e.querySelector('select[name="theme"]');
              function a() {
                  o || (o = !0,
                  l())
              }
              function l() {
                  let e, t, n = s.value;
                  "fullcalendar" === n ? (e = "standard",
                  t = "") : (e = "bootstrap5",
                  t = "bootstrap5" === n ? "" : n),
                  r.renderCalendarTheme(e, t)
              }
              s.addEventListener("change", l)
          }
      }
      , class extends Kl {
          title = "Locales";
          controlHtml = "\n    <p>\n      <label for='locale-select'>\n        Select a new locale:\n      </lable>\n    </p>\n    <p><select id='locale-select'></select></p>\n    <p><a href='/docs/localization' class='more-link'>More info</a></p>\n  ";
          init(e, t, n) {
              let r = e.querySelector("select")
                , i = new ua(n,{
                  plugins: [Jl, ja, wl, kl],
                  headerToolbar: {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                  },
                  locales: ad,
                  locale: "bg",
                  buttonIcons: !1,
                  weekNumbers: !0,
                  navLinks: !0,
                  editable: !0,
                  dayMaxEvents: !0,
                  events: "/api/demo-feeds/events.json?overload-day"
              });
              return i.getAvailableLocaleCodes().forEach((function(e) {
                  let t = document.createElement("option");
                  t.value = e,
                  t.selected = "bg" == e,
                  t.innerText = e,
                  r.appendChild(t)
              }
              )),
              r.addEventListener("change", (function() {
                  this.value && i.setOption("locale", this.value)
              }
              )),
              i
          }
      }
      , class extends Kl {
          title = "Time Zones";
          controlHtml = "\n    <p>\n      <label for='time-zone-select'>\n        Select a different time zone:\n      </label>\n    </p>\n    <p>\n      <select>\n        <option value='UTC'>UTC</option>\n      </select>\n    </p>\n    <p><a href='/docs/timeZone' class='more-link'>More info</a></p>\n  ";
          init(e, t, n) {
              let r = e.querySelector("select")
                , i = new ua(n,{
                  plugins: [Jl, ja, wl, kl],
                  initialView: "timeGridWeek",
                  timeZone: nd,
                  headerToolbar: {
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                  },
                  navLinks: !0,
                  editable: !0,
                  selectable: !0,
                  dayMaxEvents: !0,
                  events: "/api/demo-feeds/events.json",
                  loading: function(e) {},
                  eventTimeFormat: {
                      hour: "numeric",
                      minute: "2-digit",
                      timeZoneName: "short"
                  }
              });
              return fetch("/api/demo-feeds/timezones.json").then((e=>{
                  e.ok && e.json().then((e=>{
                      e.forEach((function(e) {
                          if ("UTC" !== e) {
                              let t = document.createElement("option");
                              t.value = e,
                              t.innerText = e,
                              r.appendChild(t),
                              r.value = nd
                          }
                      }
                      ))
                  }
                  ))
              }
              )),
              r.addEventListener("change", (function() {
                  i.setOption("timeZone", this.value)
              }
              )),
              i
          }
      }
      ];
      window.isCalendarThemeRender ? window.renderCalendarTheme = function(e, t, n) {
          !function(e) {
              let t = e.callback || function() {}
                , n = e.loadingCallback || function() {}
                , r = ["https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"]
                , i = function(e, t) {
                  if ("bootstrap5" === e)
                      return t ? "https://bootswatch.com/5/" + t + "/bootstrap.min.css" : "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              }(e.themeSystemName, e.themeName);
              i && r.push(i),
              n(!0),
              function(e, t) {
                  let n = ++zu
                    , r = 0;
                  for (let t of e)
                      Bu(t, i);
                  function i() {
                      if (r++,
                      r === e.length && n === zu) {
                          for (let t in Wu)
                              -1 === e.indexOf(t) && Uu(t);
                          t()
                      }
                  }
              }(r, (function() {
                  n(!1),
                  t()
              }
              ))
          }({
              themeSystemName: e,
              themeName: t,
              callback() {
                  Gu ? Gu.setOption("themeSystem", e) : (Gu = function() {
                      let e = document.getElementById("calendar");
                      return new ua(e,{
                          timeZone: "UTC",
                          plugins: [ja, wl, kl, Lu],
                          themeSystem: "bootstrap5",
                          headerToolbar: {
                              left: "prev,next today",
                              center: "title",
                              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                          },
                          navLinks: !0,
                          dayMaxEvents: !0,
                          events: "/api/demo-feeds/events.json?overload-day"
                      })
                  }(),
                  Gu.render()),
                  n && n()
              }
          })
      }
      : document.addEventListener("DOMContentLoaded", (function() {
          let e = document.getElementById("demo-accordion")
            , t = document.getElementById("demo-content");
          new Vu(e,t),
          document.getElementById("demos-nav-item").classList.add("topbar__nav-item--selected")
      }
      ));
      class Vu {
          constructor(e, t) {
              this.accordionEl = e,
              this.contentEl = t,
              this.demos = Fu.map((e=>new e)),
              this.renderAccordion()
          }
          runDemo(e) {
              e !== this.demoIndex && (null != this.demoIndex && this.destroyDemo(this.demoIndex),
              this.demoIndex = e,
              this.initDemo(e))
          }
          initDemo(e) {
              let t = this.demos[e]
                , n = this.panelEls[e].querySelector(".accordion__panel-content")
                , {contentEl: r} = this;
              r.innerHTML = t.contentHtml;
              let i = r.querySelector(".demo-calendar");
              t.initSafely(n, r, i)
          }
          destroyDemo(e) {
              let t = this.demos[e]
                , n = this.panelEls[e].querySelector(".accordion__panel-content");
              t.destroy(),
              n.innerHTML = t.controlHtml
          }
          renderAccordion() {
              let {accordionEl: n} = this;
              n.innerHTML = this.renderAccordionHtml(),
              this.panelEls = t(".accordion__panel", n),
              n.classList.add("snap"),
              this.panelEls[0].classList.add("accordion__panel--open"),
              new e.Accordion(n,{
                  openClass: "accordion__panel--open",
                  closeClass: "accordion__panel--closed",
                  modal: !0,
                  onToggle: (e,t)=>{
                      t && this.runDemo(e.index)
                  }
              }),
              setTimeout((()=>{
                  n.classList.remove("snap")
              }
              ), 0),
              this.runDemo(0)
          }
          renderAccordionHtml() {
              let e = "";
              for (let t of this.demos)
                  e += '<div class="accordion__panel"><div class="accordion__panel-title"><span class="fc-icon"></span>' + r(t.title) + '</div><div class="accordion__panel-content">' + t.controlHtml + "</div></div>";
              return e
          }
      }
  }
  )()
}
)();
