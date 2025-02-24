var shadow$provide = {};
(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var h,
    aa = this || self;
  function p(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function ba(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function ca(a) {
    return (
      (Object.prototype.hasOwnProperty.call(a, da) && a[da]) || (a[da] = ++ea)
    );
  }
  var da = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    ea = 0;
  function fa(a) {
    let b = 0;
    return function (c) {
      aa.clearTimeout(b);
      const d = arguments;
      b = aa.setTimeout(function () {
        a.apply(void 0, d);
      }, 10);
    };
  }
  function ha(a) {
    const b = [];
    let c = 0;
    for (const d in a) b[c++] = d;
    return b;
  }
  function t(a, b) {
    return null !== a && b in a ? a[b] : void 0;
  }
  function ia(a, b) {
    a.sort(b || ja);
  }
  function ka(a, b) {
    const c = Array(a.length);
    for (let e = 0; e < a.length; e++) c[e] = { index: e, value: a[e] };
    const d = b || ja;
    ia(c, function (e, f) {
      return d(e.value, f.value) || e.index - f.index;
    });
    for (b = 0; b < a.length; b++) a[b] = c[b].value;
  }
  function ja(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  var la;
  a: {
    const a = aa.navigator;
    if (a) {
      const b = a.userAgent;
      if (b) {
        la = b;
        break a;
      }
    }
    la = "";
  }
  let ma = la;
  function oa(a) {
    return -1 != ma.indexOf(a);
  }
  function pa() {
    return oa("Firefox") || oa("FxiOS");
  }
  function qa() {
    return (oa("Chrome") || oa("CriOS")) && !oa("Edge");
  }
  function ra(a, b) {
    null != a && this.append.apply(this, arguments);
  }
  h = ra.prototype;
  h.Ha = "";
  h.set = function (a) {
    this.Ha = "" + a;
  };
  h.append = function (a, b, c) {
    this.Ha += String(a);
    if (null != b)
      for (let d = 1; d < arguments.length; d++) this.Ha += arguments[d];
    return this;
  };
  h.clear = function () {
    this.Ha = "";
  };
  h.toString = function () {
    return this.Ha;
  };
  var sa = {},
    ta = {},
    ua,
    u = {},
    va = null;
  function xa() {
    return new w(null, 5, [ya, !0, za, !0, Aa, !1, Ba, !1, Ca, null], null);
  }
  function x(a) {
    return null != a && !1 !== a;
  }
  function Da(a) {
    return null == a;
  }
  function Ea(a) {
    return a instanceof Array;
  }
  function Fa(a) {
    return null == a ? !0 : !1 === a ? !0 : !1;
  }
  function Ga(a) {
    return null != a ? a.constructor === Object : !1;
  }
  function y(a, b) {
    return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : !1;
  }
  function Ha(a) {
    return null == a ? null : a.constructor;
  }
  function z(a, b) {
    var c = Ha(b);
    return Error(
      [
        "No protocol method ",
        a,
        " defined for type ",
        x(x(c) ? c.Pb : c) ? c.Ab : p(b),
        ": ",
        b,
      ].join("")
    );
  }
  function Ia(a) {
    var b = a.Ab;
    return x(b) ? b : A.h(a);
  }
  var Ja =
    "undefined" !== typeof Symbol && "function" === p(Symbol)
      ? Symbol.iterator
      : "@@iterator";
  function Ka(a) {
    for (var b = a.length, c = Array(b), d = 0; ;)
      if (d < b) (c[d] = a[d]), (d += 1);
      else break;
    return c;
  }
  function La(a) {
    function b(d, e) {
      d.push(e);
      return d;
    }
    var c = [];
    return Ma ? Ma(b, c, a) : Na.call(null, b, c, a);
  }
  function Oa() { }
  function Pa() { }
  function Qa(a) {
    if (null != a && null != a.P) a = a.P(a);
    else {
      var b = Qa[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Qa._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("ICounted.-count", a);
    }
    return a;
  }
  function Ra() { }
  function Sa(a) {
    if (null != a && null != a.Y) a = a.Y(a);
    else {
      var b = Sa[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Sa._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IEmptyableCollection.-empty", a);
    }
    return a;
  }
  function Ta() { }
  function Ua(a, b) {
    if (null != a && null != a.aa) a = a.aa(a, b);
    else {
      var c = Ua[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = Ua._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("ICollection.-conj", a);
    }
    return a;
  }
  function Va() { }
  var Xa = (function () {
    function a(d, e, f) {
      var g = Wa[p(null == d ? null : d)];
      if (null != g) return g.j ? g.j(d, e, f) : g.call(null, d, e, f);
      g = Wa._;
      if (null != g) return g.j ? g.j(d, e, f) : g.call(null, d, e, f);
      throw z("IIndexed.-nth", d);
    }
    function b(d, e) {
      var f = Wa[p(null == d ? null : d)];
      if (null != f) return f.g ? f.g(d, e) : f.call(null, d, e);
      f = Wa._;
      if (null != f) return f.g ? f.g(d, e) : f.call(null, d, e);
      throw z("IIndexed.-nth", d);
    }
    var c = null;
    c = function (d, e, f) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, e);
        case 3:
          return a.call(this, d, e, f);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.g = b;
    c.j = a;
    return c;
  })(),
    Wa = function Wa(a) {
      switch (arguments.length) {
        case 2:
          return Wa.g(arguments[0], arguments[1]);
        case 3:
          return Wa.j(arguments[0], arguments[1], arguments[2]);
        default:
          throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
      }
    };
  Wa.g = function (a, b) {
    return null != a && null != a.H ? a.H(a, b) : Xa(a, b);
  };
  Wa.j = function (a, b, c) {
    return null != a && null != a.oa ? a.oa(a, b, c) : Xa(a, b, c);
  };
  Wa.J = 3;
  function Ya() { }
  function D(a) {
    if (null != a && null != a.da) a = a.da(a);
    else {
      var b = D[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = D._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("ISeq.-first", a);
    }
    return a;
  }
  function Za(a) {
    if (null != a && null != a.ga) a = a.ga(a);
    else {
      var b = Za[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Za._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("ISeq.-rest", a);
    }
    return a;
  }
  function $a() { }
  function ab() { }
  var cb = (function () {
    function a(d, e, f) {
      var g = bb[p(null == d ? null : d)];
      if (null != g) return g.j ? g.j(d, e, f) : g.call(null, d, e, f);
      g = bb._;
      if (null != g) return g.j ? g.j(d, e, f) : g.call(null, d, e, f);
      throw z("ILookup.-lookup", d);
    }
    function b(d, e) {
      var f = bb[p(null == d ? null : d)];
      if (null != f) return f.g ? f.g(d, e) : f.call(null, d, e);
      f = bb._;
      if (null != f) return f.g ? f.g(d, e) : f.call(null, d, e);
      throw z("ILookup.-lookup", d);
    }
    var c = null;
    c = function (d, e, f) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, e);
        case 3:
          return a.call(this, d, e, f);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.g = b;
    c.j = a;
    return c;
  })(),
    bb = function bb(a) {
      switch (arguments.length) {
        case 2:
          return bb.g(arguments[0], arguments[1]);
        case 3:
          return bb.j(arguments[0], arguments[1], arguments[2]);
        default:
          throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
      }
    };
  bb.g = function (a, b) {
    return null != a && null != a.na ? a.na(a, b) : cb(a, b);
  };
  bb.j = function (a, b, c) {
    return null != a && null != a.O ? a.O(a, b, c) : cb(a, b, c);
  };
  bb.J = 3;
  function db() { }
  function eb(a, b) {
    if (null != a && null != a.$a) a = a.$a(a, b);
    else {
      var c = eb[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = eb._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IAssociative.-contains-key?", a);
    }
    return a;
  }
  function fb(a, b, c) {
    if (null != a && null != a.Da) a = a.Da(a, b, c);
    else {
      var d = fb[p(null == a ? null : a)];
      if (null != d) a = d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else if (((d = fb._), null != d))
        a = d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else throw z("IAssociative.-assoc", a);
    }
    return a;
  }
  function gb(a, b) {
    if (null != a && null != a.kb) a = a.kb(a, b);
    else {
      var c = gb[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = gb._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IFind.-find", a);
    }
    return a;
  }
  function hb() { }
  function ib(a, b) {
    if (null != a && null != a.Hb) a = a.Hb(a, b);
    else {
      var c = ib[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = ib._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IMap.-dissoc", a);
    }
    return a;
  }
  function jb(a) {
    if (null != a && null != a.ac) a = a.key;
    else {
      var b = jb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = jb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IMapEntry.-key", a);
    }
    return a;
  }
  function kb(a) {
    if (null != a && null != a.bc) a = a.U;
    else {
      var b = kb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = kb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IMapEntry.-val", a);
    }
    return a;
  }
  function lb() { }
  function mb(a) {
    if (null != a && null != a.mb) a = a.mb(a);
    else {
      var b = mb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = mb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IStack.-peek", a);
    }
    return a;
  }
  function ob(a) {
    if (null != a && null != a.nb) a = a.nb(a);
    else {
      var b = ob[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = ob._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IStack.-pop", a);
    }
    return a;
  }
  function pb() { }
  function E(a) {
    if (null != a && null != a.Gb) a = a.Gb(a);
    else {
      var b = E[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = E._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IDeref.-deref", a);
    }
    return a;
  }
  function qb() { }
  function rb(a) {
    if (null != a && null != a.W) a = a.W(a);
    else {
      var b = rb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = rb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IMeta.-meta", a);
    }
    return a;
  }
  function sb(a, b) {
    if (null != a && null != a.X) a = a.X(a, b);
    else {
      var c = sb[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = sb._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IWithMeta.-with-meta", a);
    }
    return a;
  }
  function tb() { }
  var vb = (function () {
    function a(d, e, f) {
      var g = ub[p(null == d ? null : d)];
      if (null != g) return g.j ? g.j(d, e, f) : g.call(null, d, e, f);
      g = ub._;
      if (null != g) return g.j ? g.j(d, e, f) : g.call(null, d, e, f);
      throw z("IReduce.-reduce", d);
    }
    function b(d, e) {
      var f = ub[p(null == d ? null : d)];
      if (null != f) return f.g ? f.g(d, e) : f.call(null, d, e);
      f = ub._;
      if (null != f) return f.g ? f.g(d, e) : f.call(null, d, e);
      throw z("IReduce.-reduce", d);
    }
    var c = null;
    c = function (d, e, f) {
      switch (arguments.length) {
        case 2:
          return b.call(this, d, e);
        case 3:
          return a.call(this, d, e, f);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    c.g = b;
    c.j = a;
    return c;
  })(),
    ub = function ub(a) {
      switch (arguments.length) {
        case 2:
          return ub.g(arguments[0], arguments[1]);
        case 3:
          return ub.j(arguments[0], arguments[1], arguments[2]);
        default:
          throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
      }
    };
  ub.g = function (a, b) {
    return null != a && null != a.ea ? a.ea(a, b) : vb(a, b);
  };
  ub.j = function (a, b, c) {
    return null != a && null != a.fa ? a.fa(a, b, c) : vb(a, b, c);
  };
  ub.J = 3;
  function wb() { }
  function xb(a, b) {
    if (null != a && null != a.yb) a = a.yb(a, b, !0);
    else {
      var c = xb[p(null == a ? null : a)];
      if (null != c) a = c.j ? c.j(a, b, !0) : c.call(null, a, b, !0);
      else if (((c = xb._), null != c))
        a = c.j ? c.j(a, b, !0) : c.call(null, a, b, !0);
      else throw z("IKVReduce.-kv-reduce", a);
    }
    return a;
  }
  function yb(a, b) {
    if (null != a && null != a.S) a = a.S(a, b);
    else {
      var c = yb[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = yb._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IEquiv.-equiv", a);
    }
    return a;
  }
  function zb(a) {
    if (null != a && null != a.V) a = a.V(a);
    else {
      var b = zb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = zb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IHash.-hash", a);
    }
    return a;
  }
  function Ab() { }
  function Bb(a) {
    if (null != a && null != a.R) a = a.R(a);
    else {
      var b = Bb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Bb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("ISeqable.-seq", a);
    }
    return a;
  }
  function Cb() { }
  function Db() { }
  function Eb() { }
  function Fb() { }
  function Gb(a) {
    if (null != a && null != a.zb) a = a.zb(a);
    else {
      var b = Gb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Gb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IReversible.-rseq", a);
    }
    return a;
  }
  function Hb(a, b) {
    if (null != a && null != a.Ob) a = a.Ob(a, b);
    else {
      var c = Hb[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = Hb._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IWriter.-write", a);
    }
    return a;
  }
  function Ib() { }
  function Jb(a, b, c) {
    if (null != a && null != a.T) a = a.T(a, b, c);
    else {
      var d = Jb[p(null == a ? null : a)];
      if (null != d) a = d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else if (((d = Jb._), null != d))
        a = d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else throw z("IPrintWithWriter.-pr-writer", a);
    }
    return a;
  }
  function Kb(a) {
    var b = Lb,
      c = Mb;
    if (null != a && null != a.Nb) a.Nb(a, b, c);
    else {
      var d = Kb[p(null == a ? null : a)];
      if (null != d) d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else if (((d = Kb._), null != d))
        d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else throw z("IWatchable.-add-watch", a);
    }
  }
  function Nb(a) {
    if (null != a && null != a.bb) a = a.bb(a);
    else {
      var b = Nb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Nb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IEditableCollection.-as-transient", a);
    }
    return a;
  }
  function Ob(a, b) {
    if (null != a && null != a.fb) a = a.fb(a, b);
    else {
      var c = Ob[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = Ob._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("ITransientCollection.-conj!", a);
    }
    return a;
  }
  function Pb(a) {
    if (null != a && null != a.ob) a = a.ob(a);
    else {
      var b = Pb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Pb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("ITransientCollection.-persistent!", a);
    }
    return a;
  }
  function Qb(a, b, c) {
    if (null != a && null != a.eb) a = a.eb(a, b, c);
    else {
      var d = Qb[p(null == a ? null : a)];
      if (null != d) a = d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else if (((d = Qb._), null != d))
        a = d.j ? d.j(a, b, c) : d.call(null, a, b, c);
      else throw z("ITransientAssociative.-assoc!", a);
    }
    return a;
  }
  function Rb() { }
  function Sb(a, b) {
    if (null != a && null != a.ab) a = a.ab(a, b);
    else {
      var c = Sb[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = Sb._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IComparable.-compare", a);
    }
    return a;
  }
  function Tb(a) {
    if (null != a && null != a.Fb) a = a.Fb(a);
    else {
      var b = Tb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Tb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IChunk.-drop-first", a);
    }
    return a;
  }
  function Ub(a) {
    if (null != a && null != a.ib) a = a.ib(a);
    else {
      var b = Ub[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Ub._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IChunkedSeq.-chunked-first", a);
    }
    return a;
  }
  function Vb(a) {
    if (null != a && null != a.Ea) a = a.Ea(a);
    else {
      var b = Vb[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Vb._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IChunkedSeq.-chunked-rest", a);
    }
    return a;
  }
  function Wb(a, b) {
    if (null != a && null != a.fc) a = a.fc(a, b);
    else {
      var c = Wb[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = Wb._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IReset.-reset!", a);
    }
    return a;
  }
  var Yb = (function () {
    function a(f, g, k, l, m) {
      var n = Xb[p(null == f ? null : f)];
      if (null != n)
        return n.Z ? n.Z(f, g, k, l, m) : n.call(null, f, g, k, l, m);
      n = Xb._;
      if (null != n)
        return n.Z ? n.Z(f, g, k, l, m) : n.call(null, f, g, k, l, m);
      throw z("ISwap.-swap!", f);
    }
    function b(f, g, k, l) {
      var m = Xb[p(null == f ? null : f)];
      if (null != m) return m.v ? m.v(f, g, k, l) : m.call(null, f, g, k, l);
      m = Xb._;
      if (null != m) return m.v ? m.v(f, g, k, l) : m.call(null, f, g, k, l);
      throw z("ISwap.-swap!", f);
    }
    function c(f, g, k) {
      var l = Xb[p(null == f ? null : f)];
      if (null != l) return l.j ? l.j(f, g, k) : l.call(null, f, g, k);
      l = Xb._;
      if (null != l) return l.j ? l.j(f, g, k) : l.call(null, f, g, k);
      throw z("ISwap.-swap!", f);
    }
    function d(f, g) {
      var k = Xb[p(null == f ? null : f)];
      if (null != k) return k.g ? k.g(f, g) : k.call(null, f, g);
      k = Xb._;
      if (null != k) return k.g ? k.g(f, g) : k.call(null, f, g);
      throw z("ISwap.-swap!", f);
    }
    var e = null;
    e = function (f, g, k, l, m) {
      switch (arguments.length) {
        case 2:
          return d.call(this, f, g);
        case 3:
          return c.call(this, f, g, k);
        case 4:
          return b.call(this, f, g, k, l);
        case 5:
          return a.call(this, f, g, k, l, m);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    e.g = d;
    e.j = c;
    e.v = b;
    e.Z = a;
    return e;
  })(),
    Xb = function Xb(a) {
      switch (arguments.length) {
        case 2:
          return Xb.g(arguments[0], arguments[1]);
        case 3:
          return Xb.j(arguments[0], arguments[1], arguments[2]);
        case 4:
          return Xb.v(arguments[0], arguments[1], arguments[2], arguments[3]);
        case 5:
          return Xb.Z(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3],
            arguments[4]
          );
        default:
          throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
      }
    };
  Xb.g = function (a, b) {
    return null != a && null != a.ic ? a.ic(a, b) : Yb(a, b);
  };
  Xb.j = function (a, b, c) {
    return null != a && null != a.jc ? a.jc(a, b, c) : Yb(a, b, c);
  };
  Xb.v = function (a, b, c, d) {
    return null != a && null != a.kc ? a.kc(a, b, c, d) : Yb(a, b, c, d);
  };
  Xb.Z = function (a, b, c, d, e) {
    return null != a && null != a.lc ? a.lc(a, b, c, d, e) : Yb(a, b, c, d, e);
  };
  Xb.J = 5;
  function Zb() { }
  function $b(a) {
    if (null != a && null != a.qa) a = a.qa(a);
    else {
      var b = $b[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = $b._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IIterable.-iterator", a);
    }
    return a;
  }
  function ac(a) {
    this.oc = a;
    this.m = 1073741824;
    this.D = 0;
  }
  ac.prototype.Ob = function (a, b) {
    return this.oc.append(b);
  };
  function bc(a) {
    var b = new ra();
    a.T(null, new ac(b), xa());
    return A.h(b);
  }
  var cc =
    "undefined" !== typeof Math && "undefined" !== typeof Math.imul
      ? function (a, b) {
        return Math.imul(a, b);
      }
      : function (a, b) {
        var c = a & 65535,
          d = b & 65535;
        return (
          (c * d +
            (((((a >>> 16) & 65535) * d + c * ((b >>> 16) & 65535)) << 16) >>>
              0)) |
          0
        );
      };
  function dc(a) {
    a = cc(a | 0, -862048943);
    return cc((a << 15) | (a >>> -15), 461845907);
  }
  function ec(a, b) {
    a = (a | 0) ^ (b | 0);
    return (cc((a << 13) | (a >>> -13), 5) + -430675100) | 0;
  }
  function fc(a, b) {
    a = (a | 0) ^ b;
    a = cc(a ^ (a >>> 16), -2048144789);
    a = cc(a ^ (a >>> 13), -1028477387);
    return a ^ (a >>> 16);
  }
  function gc(a) {
    a: {
      var b = 1;
      for (var c = 0; ;)
        if (b < a.length)
          (c = ec(c, dc(a.charCodeAt(b - 1) | (a.charCodeAt(b) << 16)))),
            (b += 2);
        else {
          b = c;
          break a;
        }
    }
    return fc(
      1 === (a.length & 1) ? b ^ dc(a.charCodeAt(a.length - 1)) : b,
      cc(2, a.length)
    );
  }
  var hc = {},
    ic = 0;
  function jc(a) {
    255 < ic && ((hc = {}), (ic = 0));
    if (null == a) return 0;
    var b = hc[a];
    if ("number" === typeof b) a = b;
    else {
      a: if (null != a)
        if (((b = a.length), 0 < b))
          for (var c = 0, d = 0; ;)
            if (c < b) (d = cc(31, d) + a.charCodeAt(c)), (c += 1);
            else {
              b = d;
              break a;
            }
        else b = 0;
      else b = 0;
      hc[a] = b;
      ic += 1;
      a = b;
    }
    return a;
  }
  function kc(a) {
    if (null != a && (a.m & 4194304 || u === a.uc)) return a.V(null) ^ 0;
    if ("number" === typeof a) {
      if (isFinite(a)) return Math.floor(a) % 2147483647;
      switch (a) {
        case Infinity:
          return 2146435072;
        case -Infinity:
          return -1048576;
        default:
          return 2146959360;
      }
    } else
      return (
        !0 === a
          ? (a = 1231)
          : !1 === a
            ? (a = 1237)
            : "string" === typeof a
              ? ((a = jc(a)), (a = 0 === a ? a : fc(ec(0, dc(a)), 4)))
              : (a =
                a instanceof Date ? a.valueOf() ^ 0 : null == a ? 0 : zb(a) ^ 0),
        a
      );
  }
  function lc(a, b) {
    return a ^ (b + 2654435769 + (a << 6) + (a >> 2));
  }
  function mc(a, b) {
    if (a.za === b.za) return 0;
    var c = Fa(a.ma);
    if (x(c ? b.ma : c)) return -1;
    if (x(a.ma)) {
      if (Fa(b.ma)) return 1;
      c = ja(a.ma, b.ma);
      return 0 === c ? ja(a.name, b.name) : c;
    }
    return ja(a.name, b.name);
  }
  function nc(a, b, c, d, e) {
    this.ma = a;
    this.name = b;
    this.za = c;
    this.Za = d;
    this.ya = e;
    this.m = 2154168321;
    this.D = 4096;
  }
  h = nc.prototype;
  h.toString = function () {
    return this.za;
  };
  h.S = function (a, b) {
    return b instanceof nc ? this.za === b.za : !1;
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return F.g ? F.g(a, this) : F.call(null, a, this);
  };
  h.g = function (a, b) {
    return F.j ? F.j(a, this, b) : F.call(null, a, this, b);
  };
  h.W = function () {
    return this.ya;
  };
  h.X = function (a, b) {
    return new nc(this.ma, this.name, this.za, this.Za, b);
  };
  h.V = function () {
    var a = this.Za;
    return null != a ? a : (this.Za = a = lc(gc(this.name), jc(this.ma)));
  };
  h.T = function (a, b) {
    return Hb(b, this.za);
  };
  var oc = function oc(a) {
    switch (arguments.length) {
      case 1:
        return oc.h(arguments[0]);
      case 2:
        return oc.g(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  };
  oc.h = function (a) {
    for (; ;) {
      if (a instanceof nc) return a;
      if ("string" === typeof a) {
        var b = a.indexOf("/");
        return 1 > b
          ? oc.g(null, a)
          : oc.g(a.substring(0, b), a.substring(b + 1, a.length));
      }
      if (a instanceof H) a = a.sa;
      else throw Error("no conversion to symbol");
    }
  };
  oc.g = function (a, b) {
    var c = null != a ? [A.h(a), "/", A.h(b)].join("") : b;
    return new nc(a, b, c, null, null);
  };
  oc.J = 2;
  function pc(a) {
    return null != a
      ? a.D & 131072 || u === a.vc
        ? !0
        : a.D
          ? !1
          : y(Zb, a)
      : y(Zb, a);
  }
  function I(a) {
    if (null == a) return null;
    if (null != a && (a.m & 8388608 || u === a.hc)) return a.R(null);
    if (Ea(a) || "string" === typeof a)
      return 0 === a.length ? null : new qc(a, 0, null);
    if (null != a && null != a[Ja])
      return (a = t(a, Ja).call(a)), rc.h ? rc.h(a) : rc.call(null, a);
    if (y(Ab, a)) return Bb(a);
    throw Error([A.h(a), " is not ISeqable"].join(""));
  }
  function J(a) {
    if (null == a) return null;
    if (null != a && (a.m & 64 || u === a.cb)) return a.da(null);
    a = I(a);
    return null == a ? null : D(a);
  }
  function sc(a) {
    return null != a
      ? null != a && (a.m & 64 || u === a.cb)
        ? a.ga(null)
        : (a = I(a))
          ? a.ga(null)
          : tc
      : tc;
  }
  function K(a) {
    return null == a
      ? null
      : null != a && (a.m & 128 || u === a.lb)
        ? a.ba()
        : I(sc(a));
  }
  var M = function M(a) {
    switch (arguments.length) {
      case 1:
        return M.h(arguments[0]);
      case 2:
        return M.g(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return M.s(arguments[0], arguments[1], new qc(c.slice(2), 0, null));
    }
  };
  M.h = function () {
    return !0;
  };
  M.g = function (a, b) {
    return null == a ? null == b : a === b || yb(a, b);
  };
  M.s = function (a, b, c) {
    for (; ;)
      if (M.g(a, b))
        if (K(c)) (a = b), (b = J(c)), (c = K(c));
        else return M.g(b, J(c));
      else return !1;
  };
  M.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    c = K(c);
    return this.s(b, a, c);
  };
  M.J = 2;
  function uc(a) {
    this.F = a;
  }
  uc.prototype.next = function () {
    if (null != this.F) {
      var a = J(this.F);
      this.F = K(this.F);
      return { value: a, done: !1 };
    }
    return { value: null, done: !0 };
  };
  function vc(a) {
    return new uc(I(a));
  }
  function wc(a, b) {
    this.value = a;
    this.hb = b;
    this.Cb = null;
    this.m = 8388672;
    this.D = 0;
  }
  wc.prototype.R = function () {
    return this;
  };
  wc.prototype.da = function () {
    return this.value;
  };
  wc.prototype.ga = function () {
    null == this.Cb &&
      (this.Cb = rc.h ? rc.h(this.hb) : rc.call(null, this.hb));
    return this.Cb;
  };
  function rc(a) {
    var b = a.next();
    return x(b.done) ? null : new wc(b.value, a);
  }
  function xc(a) {
    var b = 0,
      c = 1;
    for (a = I(a); ;)
      if (null != a) (b += 1), (c = (cc(31, c) + kc(J(a))) | 0), (a = K(a));
      else return fc(ec(0, dc(c)), b);
  }
  var yc = fc(ec(0, dc(1)), 0);
  function zc(a) {
    var b = 0,
      c = 0;
    for (a = I(a); ;)
      if (null != a) (b += 1), (c = (c + kc(J(a))) | 0), (a = K(a));
      else return fc(ec(0, dc(c)), b);
  }
  var Ac = fc(ec(0, dc(0)), 0);
  Pa["null"] = !0;
  Qa["null"] = function () {
    return 0;
  };
  Date.prototype.S = function (a, b) {
    return b instanceof Date && this.valueOf() === b.valueOf();
  };
  Date.prototype.jb = u;
  Date.prototype.ab = function (a, b) {
    if (b instanceof Date) return ja(this.valueOf(), b.valueOf());
    throw Error(["Cannot compare ", A.h(this), " to ", A.h(b)].join(""));
  };
  yb.number = function (a, b) {
    return a === b;
  };
  Oa["function"] = !0;
  qb["function"] = !0;
  rb["function"] = function () {
    return null;
  };
  zb._ = function (a) {
    return ca(a);
  };
  function Bc(a) {
    this.U = a;
    this.m = 32768;
    this.D = 0;
  }
  Bc.prototype.Gb = function () {
    return this.U;
  };
  function Cc(a) {
    return a instanceof Bc;
  }
  function Dc(a) {
    return E(a);
  }
  function Ec(a, b) {
    var c = a.P(null);
    if (0 === c) return b.B ? b.B() : b.call(null);
    for (var d = a.H(null, 0), e = 1; ;)
      if (e < c) {
        var f = a.H(null, e);
        d = b.g ? b.g(d, f) : b.call(null, d, f);
        if (Cc(d)) return E(d);
        e += 1;
      } else return d;
  }
  function Fc(a, b) {
    var c = a.length;
    if (0 === a.length) return b.B ? b.B() : b.call(null);
    for (var d = a[0], e = 1; ;)
      if (e < c) {
        var f = a[e];
        d = b.g ? b.g(d, f) : b.call(null, d, f);
        if (Cc(d)) return E(d);
        e += 1;
      } else return d;
  }
  function Gc(a, b, c) {
    var d = a.length,
      e = c;
    for (c = 0; ;)
      if (c < d) {
        var f = a[c];
        e = b.g ? b.g(e, f) : b.call(null, e, f);
        if (Cc(e)) return E(e);
        c += 1;
      } else return e;
  }
  function Hc(a, b, c, d) {
    for (var e = a.length; ;)
      if (d < e) {
        var f = a[d];
        c = b.g ? b.g(c, f) : b.call(null, c, f);
        if (Cc(c)) return E(c);
        d += 1;
      } else return c;
  }
  function Ic(a) {
    return null != a
      ? a.m & 2 || u === a.Tb
        ? !0
        : a.m
          ? !1
          : y(Pa, a)
      : y(Pa, a);
  }
  function Jc(a) {
    return null != a
      ? a.m & 16 || u === a.Lb
        ? !0
        : a.m
          ? !1
          : y(Va, a)
      : y(Va, a);
  }
  function N(a, b, c) {
    var d = O.h ? O.h(a) : O.call(null, a);
    if (c >= d) return -1;
    !(0 < c) && 0 > c && ((c += d), (c = 0 > c ? 0 : c));
    for (; ;)
      if (c < d) {
        if (M.g(Kc ? Kc(a, c) : Lc.call(null, a, c), b)) return c;
        c += 1;
      } else return -1;
  }
  function P(a, b, c) {
    var d = O.h ? O.h(a) : O.call(null, a);
    if (0 === d) return -1;
    0 < c ? (--d, (c = d < c ? d : c)) : (c = 0 > c ? d + c : c);
    for (; ;)
      if (0 <= c) {
        if (M.g(Kc ? Kc(a, c) : Lc.call(null, a, c), b)) return c;
        --c;
      } else return -1;
  }
  function Mc(a, b) {
    this.i = a;
    this.o = b;
  }
  Mc.prototype.ia = function () {
    return this.o < this.i.length;
  };
  Mc.prototype.next = function () {
    var a = this.i[this.o];
    this.o += 1;
    return a;
  };
  function qc(a, b, c) {
    this.i = a;
    this.o = b;
    this.u = c;
    this.m = 166592766;
    this.D = 139264;
  }
  h = qc.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O.h ? O.h(this) : O.call(null, this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.H = function (a, b) {
    a = b + this.o;
    if (0 <= a && a < this.i.length) return this.i[a];
    throw Error("Index out of bounds");
  };
  h.oa = function (a, b, c) {
    a = b + this.o;
    return 0 <= a && a < this.i.length ? this.i[a] : c;
  };
  h.qa = function () {
    return new Mc(this.i, this.o);
  };
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return this.o + 1 < this.i.length ? new qc(this.i, this.o + 1, null) : null;
  };
  h.P = function () {
    var a = this.i.length - this.o;
    return 0 > a ? 0 : a;
  };
  h.zb = function () {
    var a = this.P(null);
    return 0 < a ? new Nc(this, a - 1, null) : null;
  };
  h.V = function () {
    return xc(this);
  };
  h.S = function (a, b) {
    return Oc.g ? Oc.g(this, b) : Oc.call(null, this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Hc(this.i, b, this.i[this.o], this.o + 1);
  };
  h.fa = function (a, b, c) {
    return Hc(this.i, b, c, this.o);
  };
  h.da = function () {
    return this.i[this.o];
  };
  h.ga = function () {
    return this.o + 1 < this.i.length ? new qc(this.i, this.o + 1, null) : tc;
  };
  h.R = function () {
    return this.o < this.i.length ? this : null;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new qc(this.i, this.o, b);
  };
  h.aa = function (a, b) {
    return Pc.g ? Pc.g(b, this) : Pc.call(null, b, this);
  };
  qc.prototype[Ja] = function () {
    return vc(this);
  };
  function R(a) {
    return 0 < a.length ? new qc(a, 0, null) : null;
  }
  function Nc(a, b, c) {
    this.wb = a;
    this.o = b;
    this.u = c;
    this.m = 32374990;
    this.D = 8192;
  }
  h = Nc.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O.h ? O.h(this) : O.call(null, this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return 0 < this.o ? new Nc(this.wb, this.o - 1, null) : null;
  };
  h.P = function () {
    return this.o + 1;
  };
  h.V = function () {
    return xc(this);
  };
  h.S = function (a, b) {
    return Oc.g ? Oc.g(this, b) : Oc.call(null, this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc ? Qc(b, this) : Rc.call(null, b, this);
  };
  h.fa = function (a, b, c) {
    return Sc ? Sc(b, c, this) : Rc.call(null, b, c, this);
  };
  h.da = function () {
    return Wa(this.wb, this.o);
  };
  h.ga = function () {
    return 0 < this.o ? new Nc(this.wb, this.o - 1, null) : tc;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new Nc(this.wb, this.o, b);
  };
  h.aa = function (a, b) {
    return Pc.g ? Pc.g(b, this) : Pc.call(null, b, this);
  };
  Nc.prototype[Ja] = function () {
    return vc(this);
  };
  function Tc(a) {
    for (; ;) {
      var b = K(a);
      if (null != b) a = b;
      else return J(a);
    }
  }
  yb._ = function (a, b) {
    return a === b;
  };
  var Uc = function Uc(a) {
    switch (arguments.length) {
      case 0:
        return Uc.B();
      case 1:
        return Uc.h(arguments[0]);
      case 2:
        return Uc.g(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return Uc.s(arguments[0], arguments[1], new qc(c.slice(2), 0, null));
    }
  };
  Uc.B = function () {
    return Vc;
  };
  Uc.h = function (a) {
    return a;
  };
  Uc.g = function (a, b) {
    return null != a ? Ua(a, b) : new Wc(null, b, null, 1, null);
  };
  Uc.s = function (a, b, c) {
    for (; ;)
      if (x(c)) (a = Uc.g(a, b)), (b = J(c)), (c = K(c));
      else return Uc.g(a, b);
  };
  Uc.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    c = K(c);
    return this.s(b, a, c);
  };
  Uc.J = 2;
  function Xc(a) {
    return null == a
      ? null
      : null != a && (a.m & 4 || u === a.Vb)
        ? a.Y(null)
        : (null != a ? a.m & 4 || u === a.Vb || (a.m ? 0 : y(Ra, a)) : y(Ra, a))
          ? Sa(a)
          : null;
  }
  function O(a) {
    if (null != a)
      if (null != a && (a.m & 2 || u === a.Tb)) a = a.P(null);
      else if (Ea(a)) a = a.length;
      else if ("string" === typeof a) a = a.length;
      else if (null != a && (a.m & 8388608 || u === a.hc))
        a: {
          a = I(a);
          for (var b = 0; ;) {
            if (Ic(a)) {
              a = b + Qa(a);
              break a;
            }
            a = K(a);
            b += 1;
          }
        }
      else a = Qa(a);
    else a = 0;
    return a;
  }
  function Yc(a, b, c) {
    for (; ;) {
      if (null == a) return c;
      if (0 === b) return I(a) ? J(a) : c;
      if (Jc(a)) return Wa(a, b, c);
      if (I(a)) (a = K(a)), --b;
      else return c;
    }
  }
  function Lc(a) {
    switch (arguments.length) {
      case 2:
        return Kc(arguments[0], arguments[1]);
      case 3:
        return S(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  function Kc(a, b) {
    if ("number" !== typeof b)
      throw Error("Index argument to nth must be a number");
    if (null == a) return a;
    if (null != a && (a.m & 16 || u === a.Lb)) return a.H(null, b);
    if (Ea(a)) {
      if (-1 < b && b < a.length) return a[b | 0];
      throw Error("Index out of bounds");
    }
    if ("string" === typeof a) {
      if (-1 < b && b < a.length) return a.charAt(b | 0);
      throw Error("Index out of bounds");
    }
    if (
      (null != a && (a.m & 64 || u === a.cb)) ||
      (null != a && (a.m & 16777216 || u === a.Mb))
    ) {
      if (0 > b) throw Error("Index out of bounds");
      a: for (; ;) {
        if (null == a) throw Error("Index out of bounds");
        if (0 === b) {
          if (I(a)) {
            a = J(a);
            break a;
          }
          throw Error("Index out of bounds");
        }
        if (Jc(a)) {
          a = Wa(a, b);
          break a;
        }
        if (I(a)) (a = K(a)), --b;
        else throw Error("Index out of bounds");
      }
      return a;
    }
    if (y(Va, a)) return Wa(a, b);
    throw Error(["nth not supported on this type ", A.h(Ia(Ha(a)))].join(""));
  }
  function S(a, b, c) {
    if ("number" !== typeof b)
      throw Error("Index argument to nth must be a number.");
    if (null == a) return c;
    if (null != a && (a.m & 16 || u === a.Lb)) return a.oa(null, b, c);
    if (Ea(a)) return -1 < b && b < a.length ? a[b | 0] : c;
    if ("string" === typeof a)
      return -1 < b && b < a.length ? a.charAt(b | 0) : c;
    if (
      (null != a && (a.m & 64 || u === a.cb)) ||
      (null != a && (a.m & 16777216 || u === a.Mb))
    )
      return 0 > b ? c : Yc(a, b, c);
    if (y(Va, a)) return Wa(a, b, c);
    throw Error(["nth not supported on this type ", A.h(Ia(Ha(a)))].join(""));
  }
  var F = function F(a) {
    switch (arguments.length) {
      case 2:
        return F.g(arguments[0], arguments[1]);
      case 3:
        return F.j(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  };
  F.g = function (a, b) {
    return null == a
      ? null
      : null != a && (a.m & 256 || u === a.$b)
        ? a.na(null, b)
        : Ea(a)
          ? null != b && b < a.length
            ? a[b | 0]
            : null
          : "string" === typeof a
            ? null != b && -1 < b && b < a.length
              ? a.charAt(b | 0)
              : null
            : y(ab, a)
              ? bb(a, b)
              : null;
  };
  F.j = function (a, b, c) {
    return null != a
      ? null != a && (a.m & 256 || u === a.$b)
        ? a.O(null, b, c)
        : Ea(a)
          ? null != b && -1 < b && b < a.length
            ? a[b | 0]
            : c
          : "string" === typeof a
            ? null != b && -1 < b && b < a.length
              ? a.charAt(b | 0)
              : c
            : y(ab, a)
              ? bb(a, b, c)
              : c
      : c;
  };
  F.J = 3;
  var U = function U(a) {
    switch (arguments.length) {
      case 3:
        return U.j(arguments[0], arguments[1], arguments[2]);
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return U.s(
          arguments[0],
          arguments[1],
          arguments[2],
          new qc(c.slice(3), 0, null)
        );
    }
  };
  U.j = function (a, b, c) {
    return null != a && (a.m & 512 || u === a.Sb)
      ? a.Da(null, b, c)
      : null != a
        ? fb(a, b, c)
        : Zc([b, c]);
  };
  U.s = function (a, b, c, d) {
    for (; ;)
      if (((a = U.j(a, b, c)), x(d))) (b = J(d)), (c = J(K(d))), (d = K(K(d)));
      else return a;
  };
  U.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    var d = K(c);
    c = J(d);
    d = K(d);
    return this.s(b, a, c, d);
  };
  U.J = 3;
  var $c = function $c(a) {
    switch (arguments.length) {
      case 1:
        return $c.h(arguments[0]);
      case 2:
        return $c.g(arguments[0], arguments[1]);
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return $c.s(arguments[0], arguments[1], new qc(c.slice(2), 0, null));
    }
  };
  $c.h = function (a) {
    return a;
  };
  $c.g = function (a, b) {
    return null == a ? null : ib(a, b);
  };
  $c.s = function (a, b, c) {
    for (; ;) {
      if (null == a) return null;
      a = $c.g(a, b);
      if (x(c)) (b = J(c)), (c = K(c));
      else return a;
    }
  };
  $c.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    c = K(c);
    return this.s(b, a, c);
  };
  $c.J = 2;
  function ad(a) {
    var b = "function" === typeof a;
    return b
      ? b
      : null != a
        ? u === a.Rb
          ? !0
          : a.Jb
            ? !1
            : y(Oa, a)
        : y(Oa, a);
  }
  function bd(a, b) {
    this.A = a;
    this.u = b;
    this.m = 393217;
    this.D = 0;
  }
  h = bd.prototype;
  h.W = function () {
    return this.u;
  };
  h.X = function (a, b) {
    return new bd(this.A, b);
  };
  h.Rb = u;
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 0:
        return this.B();
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      case 3:
        return this.j(arguments[1], arguments[2], arguments[3]);
      case 4:
        return this.v(arguments[1], arguments[2], arguments[3], arguments[4]);
      case 5:
        return this.Z(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5]
        );
      case 6:
        return this.ra(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6]
        );
      case 7:
        return this.Ta(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7]
        );
      case 8:
        return this.Ua(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8]
        );
      case 9:
        return this.Va(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9]
        );
      case 10:
        return this.Ia(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10]
        );
      case 11:
        return this.Ja(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11]
        );
      case 12:
        return this.Ka(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12]
        );
      case 13:
        return this.La(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13]
        );
      case 14:
        return this.Ma(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14]
        );
      case 15:
        return this.Na(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15]
        );
      case 16:
        return this.Oa(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16]
        );
      case 17:
        return this.Pa(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17]
        );
      case 18:
        return this.Qa(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18]
        );
      case 19:
        return this.Ra(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18],
          arguments[19]
        );
      case 20:
        return this.Sa(
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          arguments[7],
          arguments[8],
          arguments[9],
          arguments[10],
          arguments[11],
          arguments[12],
          arguments[13],
          arguments[14],
          arguments[15],
          arguments[16],
          arguments[17],
          arguments[18],
          arguments[19],
          arguments[20]
        );
      case 21:
        var b = arguments[1],
          c = arguments[2],
          d = arguments[3],
          e = arguments[4],
          f = arguments[5],
          g = arguments[6],
          k = arguments[7],
          l = arguments[8],
          m = arguments[9],
          n = arguments[10],
          q = arguments[11],
          r = arguments[12],
          v = arguments[13],
          C = arguments[14],
          B = arguments[15],
          G = arguments[16],
          Q = arguments[17],
          T = arguments[18],
          X = arguments[19],
          na = arguments[20],
          wa = arguments[21];
        return cd.Zb
          ? cd.Zb(
            this.A,
            b,
            c,
            d,
            e,
            f,
            g,
            k,
            l,
            m,
            n,
            q,
            r,
            v,
            C,
            B,
            G,
            Q,
            T,
            X,
            na,
            wa
          )
          : cd.call(
            null,
            this.A,
            b,
            c,
            d,
            e,
            f,
            g,
            k,
            l,
            m,
            n,
            q,
            r,
            v,
            C,
            B,
            G,
            Q,
            T,
            X,
            na,
            wa
          );
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.B = function () {
    return this.A.B ? this.A.B() : this.A.call(null);
  };
  h.h = function (a) {
    return this.A.h ? this.A.h(a) : this.A.call(null, a);
  };
  h.g = function (a, b) {
    return this.A.g ? this.A.g(a, b) : this.A.call(null, a, b);
  };
  h.j = function (a, b, c) {
    return this.A.j ? this.A.j(a, b, c) : this.A.call(null, a, b, c);
  };
  h.v = function (a, b, c, d) {
    return this.A.v ? this.A.v(a, b, c, d) : this.A.call(null, a, b, c, d);
  };
  h.Z = function (a, b, c, d, e) {
    return this.A.Z
      ? this.A.Z(a, b, c, d, e)
      : this.A.call(null, a, b, c, d, e);
  };
  h.ra = function (a, b, c, d, e, f) {
    return this.A.ra
      ? this.A.ra(a, b, c, d, e, f)
      : this.A.call(null, a, b, c, d, e, f);
  };
  h.Ta = function (a, b, c, d, e, f, g) {
    return this.A.Ta
      ? this.A.Ta(a, b, c, d, e, f, g)
      : this.A.call(null, a, b, c, d, e, f, g);
  };
  h.Ua = function (a, b, c, d, e, f, g, k) {
    return this.A.Ua
      ? this.A.Ua(a, b, c, d, e, f, g, k)
      : this.A.call(null, a, b, c, d, e, f, g, k);
  };
  h.Va = function (a, b, c, d, e, f, g, k, l) {
    return this.A.Va
      ? this.A.Va(a, b, c, d, e, f, g, k, l)
      : this.A.call(null, a, b, c, d, e, f, g, k, l);
  };
  h.Ia = function (a, b, c, d, e, f, g, k, l, m) {
    return this.A.Ia
      ? this.A.Ia(a, b, c, d, e, f, g, k, l, m)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m);
  };
  h.Ja = function (a, b, c, d, e, f, g, k, l, m, n) {
    return this.A.Ja
      ? this.A.Ja(a, b, c, d, e, f, g, k, l, m, n)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n);
  };
  h.Ka = function (a, b, c, d, e, f, g, k, l, m, n, q) {
    return this.A.Ka
      ? this.A.Ka(a, b, c, d, e, f, g, k, l, m, n, q)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n, q);
  };
  h.La = function (a, b, c, d, e, f, g, k, l, m, n, q, r) {
    return this.A.La
      ? this.A.La(a, b, c, d, e, f, g, k, l, m, n, q, r)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n, q, r);
  };
  h.Ma = function (a, b, c, d, e, f, g, k, l, m, n, q, r, v) {
    return this.A.Ma
      ? this.A.Ma(a, b, c, d, e, f, g, k, l, m, n, q, r, v)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n, q, r, v);
  };
  h.Na = function (a, b, c, d, e, f, g, k, l, m, n, q, r, v, C) {
    return this.A.Na
      ? this.A.Na(a, b, c, d, e, f, g, k, l, m, n, q, r, v, C)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n, q, r, v, C);
  };
  h.Oa = function (a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B) {
    return this.A.Oa
      ? this.A.Oa(a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B);
  };
  h.Pa = function (a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G) {
    return this.A.Pa
      ? this.A.Pa(a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G);
  };
  h.Qa = function (a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q) {
    return this.A.Qa
      ? this.A.Qa(a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q)
      : this.A.call(null, a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q);
  };
  h.Ra = function (a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T) {
    return this.A.Ra
      ? this.A.Ra(a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T)
      : this.A.call(
        null,
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        k,
        l,
        m,
        n,
        q,
        r,
        v,
        C,
        B,
        G,
        Q,
        T
      );
  };
  h.Sa = function (a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T, X) {
    return this.A.Sa
      ? this.A.Sa(a, b, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T, X)
      : this.A.call(
        null,
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        k,
        l,
        m,
        n,
        q,
        r,
        v,
        C,
        B,
        G,
        Q,
        T,
        X
      );
  };
  function dd(a, b) {
    return "function" === typeof a ? new bd(a, b) : null == a ? null : sb(a, b);
  }
  function ed(a) {
    var b = null != a;
    return (
      b
        ? null != a
          ? a.m & 131072 || u === a.cc || (a.m ? 0 : y(qb, a))
          : y(qb, a)
        : b
    )
      ? rb(a)
      : null;
  }
  function fd(a) {
    return null == a
      ? !1
      : null != a
        ? a.m & 8 || u === a.sc
          ? !0
          : a.m
            ? !1
            : y(Ta, a)
        : y(Ta, a);
  }
  function gd(a) {
    return null == a
      ? !1
      : null != a
        ? a.m & 4096 || u === a.Cc
          ? !0
          : a.m
            ? !1
            : y(lb, a)
        : y(lb, a);
  }
  function hd(a) {
    return null != a
      ? a.m & 16777216 || u === a.Mb
        ? !0
        : a.m
          ? !1
          : y(Cb, a)
      : y(Cb, a);
  }
  function id(a) {
    return null == a
      ? !1
      : null != a
        ? a.m & 1024 || u === a.yc
          ? !0
          : a.m
            ? !1
            : y(hb, a)
        : y(hb, a);
  }
  function jd(a) {
    return null != a
      ? a.m & 67108864 || u === a.Ac
        ? !0
        : a.m
          ? !1
          : y(Eb, a)
      : y(Eb, a);
  }
  function kd(a) {
    return null != a
      ? a.m & 16384 || u === a.Dc
        ? !0
        : a.m
          ? !1
          : y(pb, a)
      : y(pb, a);
  }
  function ld(a) {
    return null != a ? (a.D & 512 || u === a.rc ? !0 : !1) : !1;
  }
  function md(a, b, c, d, e) {
    for (; ;) {
      if (0 === e) return c;
      c[d] = a[b];
      d += 1;
      --e;
      b += 1;
    }
  }
  var nd = {};
  function od(a) {
    return !1 === a;
  }
  function pd(a) {
    return !0 === a || !1 === a;
  }
  function qd(a) {
    return null == a ? !1 : !1 === a ? !1 : !0;
  }
  function rd(a) {
    return (
      "number" === typeof a &&
      !isNaN(a) &&
      Infinity !== a &&
      parseFloat(a) === parseInt(a, 10)
    );
  }
  function sd(a, b) {
    return null != a && (a.m & 512 || u === a.Sb)
      ? a.$a(null, b)
      : y(db, a)
        ? eb(a, b)
        : F.j(a, b, nd) === nd
          ? !1
          : !0;
  }
  function td(a, b) {
    if (a === b) return 0;
    if (null == a) return -1;
    if (null == b) return 1;
    if ("number" === typeof a) {
      if ("number" === typeof b) return ja(a, b);
      throw Error(["Cannot compare ", A.h(a), " to ", A.h(b)].join(""));
    }
    if (null != a ? a.D & 2048 || u === a.jb || (a.D ? 0 : y(Rb, a)) : y(Rb, a))
      return Sb(a, b);
    if (
      ("string" !== typeof a && !Ea(a) && !0 !== a && !1 !== a) ||
      Ha(a) !== Ha(b)
    )
      throw Error(["Cannot compare ", A.h(a), " to ", A.h(b)].join(""));
    return ja(a, b);
  }
  function ud(a, b) {
    var c = O(a),
      d = O(b);
    if (c < d) a = -1;
    else if (c > d) a = 1;
    else if (0 === c) a = 0;
    else
      a: for (d = 0; ;) {
        var e = td(Kc(a, d), Kc(b, d));
        if (0 === e && d + 1 < c) d += 1;
        else {
          a = e;
          break a;
        }
      }
    return a;
  }
  function vd(a) {
    return M.g(a, td)
      ? td
      : function (b, c) {
        var d = a.g ? a.g(b, c) : a.call(null, b, c);
        return "number" === typeof d
          ? d
          : x(d)
            ? -1
            : x(a.g ? a.g(c, b) : a.call(null, c, b))
              ? 1
              : 0;
      };
  }
  function wd(a, b) {
    if (I(b)) {
      var c = xd.h ? xd.h(b) : xd.call(null, b);
      ka(c, vd(a));
      return dd(I(c), ed(b));
    }
    return tc;
  }
  function yd(a) {
    var b = zd;
    return wd(function (c, d) {
      c = b.h ? b.h(c) : b.call(null, c);
      d = b.h ? b.h(d) : b.call(null, d);
      var e = vd(td);
      return e.g ? e.g(c, d) : e.call(null, c, d);
    }, a);
  }
  function Rc(a) {
    switch (arguments.length) {
      case 2:
        return Qc(arguments[0], arguments[1]);
      case 3:
        return Sc(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  function Qc(a, b) {
    var c = I(b);
    return c
      ? ((b = J(c)), (c = K(c)), Ma ? Ma(a, b, c) : Na.call(null, a, b, c))
      : a.B
        ? a.B()
        : a.call(null);
  }
  function Sc(a, b, c) {
    for (c = I(c); ;)
      if (c) {
        var d = J(c);
        b = a.g ? a.g(b, d) : a.call(null, b, d);
        if (Cc(b)) return E(b);
        c = K(c);
      } else return b;
  }
  function Ad(a, b) {
    a = $b(a);
    if (x(a.ia()))
      for (var c = a.next(); ;)
        if (a.ia()) {
          var d = a.next();
          c = b.g ? b.g(c, d) : b.call(null, c, d);
          if (Cc(c)) return E(c);
        } else return c;
    else return b.B ? b.B() : b.call(null);
  }
  function Bd(a, b, c) {
    for (a = $b(a); ;)
      if (a.ia()) {
        var d = a.next();
        c = b.g ? b.g(c, d) : b.call(null, c, d);
        if (Cc(c)) return E(c);
      } else return c;
  }
  function Na(a) {
    switch (arguments.length) {
      case 2:
        return Cd(arguments[0], arguments[1]);
      case 3:
        return Ma(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  function Cd(a, b) {
    return null != b && (b.m & 524288 || u === b.ec)
      ? b.ea(null, a)
      : Ea(b)
        ? Fc(b, a)
        : "string" === typeof b
          ? Fc(b, a)
          : y(tb, b)
            ? ub(b, a)
            : pc(b)
              ? Ad(b, a)
              : Qc(a, b);
  }
  function Ma(a, b, c) {
    return null != c && (c.m & 524288 || u === c.ec)
      ? c.fa(null, a, b)
      : Ea(c)
        ? Gc(c, a, b)
        : "string" === typeof c
          ? Gc(c, a, b)
          : y(tb, c)
            ? ub(c, a, b)
            : pc(c)
              ? Bd(c, a, b)
              : Sc(a, b, c);
  }
  function Dd(a, b) {
    return null != b ? xb(b, a) : !0;
  }
  function Ed(a) {
    return a;
  }
  function Fd(a, b, c, d) {
    a = a.h ? a.h(b) : a.call(null, b);
    c = Ma(a, c, d);
    return a.h ? a.h(c) : a.call(null, c);
  }
  function Gd(a) {
    a = (a - (a % 2)) / 2;
    return 0 <= a ? Math.floor(a) : Math.ceil(a);
  }
  function Hd(a) {
    a -= (a >> 1) & 1431655765;
    a = (a & 858993459) + ((a >> 2) & 858993459);
    return (16843009 * ((a + (a >> 4)) & 252645135)) >> 24;
  }
  var A = function A(a) {
    switch (arguments.length) {
      case 0:
        return A.B();
      case 1:
        return A.h(arguments[0]);
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return A.s(arguments[0], new qc(c.slice(1), 0, null));
    }
  };
  A.B = function () {
    return "";
  };
  A.h = function (a) {
    return null == a ? "" : [a].join("");
  };
  A.s = function (a, b) {
    for (a = new ra(A.h(a)); ;)
      if (x(b)) (a = a.append(A.h(J(b)))), (b = K(b));
      else return a.toString();
  };
  A.I = function (a) {
    var b = J(a);
    a = K(a);
    return this.s(b, a);
  };
  A.J = 1;
  function Oc(a, b) {
    if (hd(b))
      if (Ic(a) && Ic(b) && O(a) !== O(b)) a = !1;
      else
        a: for (a = I(a), b = I(b); ;) {
          if (null == a) {
            a = null == b;
            break a;
          }
          if (null != b && M.g(J(a), J(b))) (a = K(a)), (b = K(b));
          else {
            a = !1;
            break a;
          }
        }
    else a = null;
    return qd(a);
  }
  function Wc(a, b, c, d, e) {
    this.u = a;
    this.first = b;
    this.Ca = c;
    this.count = d;
    this.C = e;
    this.m = 65937646;
    this.D = 8192;
  }
  h = Wc.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, this.count);
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return 1 === this.count ? null : this.Ca;
  };
  h.P = function () {
    return this.count;
  };
  h.mb = function () {
    return this.first;
  };
  h.nb = function () {
    return this.ga(null);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return sb(tc, this.u);
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return this.first;
  };
  h.ga = function () {
    return 1 === this.count ? tc : this.Ca;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.u
      ? this
      : new Wc(b, this.first, this.Ca, this.count, this.C);
  };
  h.aa = function (a, b) {
    return new Wc(this.u, b, this, this.count + 1, null);
  };
  Wc.prototype[Ja] = function () {
    return vc(this);
  };
  function Id(a) {
    this.u = a;
    this.m = 65937614;
    this.D = 8192;
  }
  h = Id.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return null;
  };
  h.P = function () {
    return 0;
  };
  h.mb = function () {
    return null;
  };
  h.nb = function () {
    throw Error("Can't pop empty list");
  };
  h.V = function () {
    return yc;
  };
  h.S = function (a, b) {
    return (null != b
      ? b.m & 33554432 || u === b.xc || (b.m ? 0 : y(Db, b))
      : y(Db, b)) || hd(b)
      ? null == I(b)
      : !1;
  };
  h.Y = function () {
    return this;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return null;
  };
  h.ga = function () {
    return tc;
  };
  h.R = function () {
    return null;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new Id(b);
  };
  h.aa = function (a, b) {
    return new Wc(this.u, b, null, 1, null);
  };
  var tc = new Id(null);
  Id.prototype[Ja] = function () {
    return vc(this);
  };
  function Jd(a) {
    return (
      null != a
        ? a.m & 134217728 || u === a.Bc || (a.m ? 0 : y(Fb, a))
        : y(Fb, a)
    )
      ? (a = Gb(a))
        ? a
        : tc
      : Ma(Uc, tc, a);
  }
  function Kd(a, b, c, d) {
    this.u = a;
    this.first = b;
    this.Ca = c;
    this.C = d;
    this.m = 65929452;
    this.D = 8192;
  }
  h = Kd.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return null == this.Ca ? null : I(this.Ca);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return this.first;
  };
  h.ga = function () {
    return null == this.Ca ? tc : this.Ca;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new Kd(b, this.first, this.Ca, this.C);
  };
  h.aa = function (a, b) {
    return new Kd(null, b, this, null);
  };
  Kd.prototype[Ja] = function () {
    return vc(this);
  };
  function Pc(a, b) {
    return null == b
      ? new Wc(null, a, null, 1, null)
      : null != b && (b.m & 64 || u === b.cb)
        ? new Kd(null, a, b, null)
        : new Kd(null, a, I(b), null);
  }
  function Ld(a, b) {
    if (a.sa === b.sa) return 0;
    var c = Fa(a.ma);
    if (x(c ? b.ma : c)) return -1;
    if (x(a.ma)) {
      if (Fa(b.ma)) return 1;
      c = ja(a.ma, b.ma);
      return 0 === c ? ja(a.name, b.name) : c;
    }
    return ja(a.name, b.name);
  }
  function H(a, b, c, d) {
    this.ma = a;
    this.name = b;
    this.sa = c;
    this.Za = d;
    this.m = 2153775105;
    this.D = 4096;
  }
  h = H.prototype;
  h.toString = function () {
    return [":", A.h(this.sa)].join("");
  };
  h.S = function (a, b) {
    return b instanceof H ? this.sa === b.sa : !1;
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return F.g(a, this);
  };
  h.g = function (a, b) {
    return F.j(a, this, b);
  };
  h.V = function () {
    var a = this.Za;
    return null != a
      ? a
      : (this.Za = a = (lc(gc(this.name), jc(this.ma)) + 2654435769) | 0);
  };
  h.T = function (a, b) {
    return Hb(b, [":", A.h(this.sa)].join(""));
  };
  function Md(a) {
    if (null != a && (a.D & 4096 || u === a.dc)) return a.ma;
    throw Error(["Doesn't support namespace: ", A.h(a)].join(""));
  }
  var Nd = function Nd(a) {
    switch (arguments.length) {
      case 1:
        return Nd.h(arguments[0]);
      case 2:
        return Nd.g(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  };
  Nd.h = function (a) {
    if (a instanceof H) return a;
    if (a instanceof nc)
      return new H(Md(a), Od.h ? Od.h(a) : Od.call(null, a), a.za, null);
    if (M.g("/", a)) return new H(null, a, a, null);
    if ("string" === typeof a) {
      var b = a.split("/");
      return 2 === b.length
        ? new H(b[0], b[1], a, null)
        : new H(null, b[0], a, null);
    }
    return null;
  };
  Nd.g = function (a, b) {
    a =
      a instanceof H
        ? Od.h
          ? Od.h(a)
          : Od.call(null, a)
        : a instanceof nc
          ? Od.h
            ? Od.h(a)
            : Od.call(null, a)
          : a;
    b =
      b instanceof H
        ? Od.h
          ? Od.h(b)
          : Od.call(null, b)
        : b instanceof nc
          ? Od.h
            ? Od.h(b)
            : Od.call(null, b)
          : b;
    return new H(
      a,
      b,
      [x(a) ? [A.h(a), "/"].join("") : null, A.h(b)].join(""),
      null
    );
  };
  Nd.J = 2;
  function Pd(a, b, c) {
    this.u = a;
    this.pb = b;
    this.F = null;
    this.C = c;
    this.m = 32374988;
    this.D = 1;
  }
  h = Pd.prototype;
  h.toString = function () {
    return bc(this);
  };
  function Qd(a) {
    null != a.pb &&
      ((a.F = a.pb.B ? a.pb.B() : a.pb.call(null)), (a.pb = null));
    return a.F;
  }
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    this.R(null);
    return null == this.F ? null : K(this.F);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return sb(tc, this.u);
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    this.R(null);
    return null == this.F ? null : J(this.F);
  };
  h.ga = function () {
    this.R(null);
    return null != this.F ? sc(this.F) : tc;
  };
  h.R = function () {
    Qd(this);
    if (null == this.F) return null;
    for (var a = this.F; ;)
      if (a instanceof Pd) a = Qd(a);
      else return (this.F = a), I(this.F);
  };
  h.X = function (a, b) {
    var c = this;
    return b === this.u
      ? c
      : new Pd(
        b,
        function () {
          return c.R(null);
        },
        this.C
      );
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  Pd.prototype[Ja] = function () {
    return vc(this);
  };
  function Rd(a) {
    this.Eb = a;
    this.end = 0;
    this.m = 2;
    this.D = 0;
  }
  Rd.prototype.add = function (a) {
    this.Eb[this.end] = a;
    return (this.end += 1);
  };
  Rd.prototype.N = function () {
    var a = new Sd(this.Eb, 0, this.end);
    this.Eb = null;
    return a;
  };
  Rd.prototype.P = function () {
    return this.end;
  };
  function Td(a) {
    return new Rd(Array(a));
  }
  function Sd(a, b, c) {
    this.i = a;
    this.ha = b;
    this.end = c;
    this.m = 524306;
    this.D = 0;
  }
  h = Sd.prototype;
  h.P = function () {
    return this.end - this.ha;
  };
  h.H = function (a, b) {
    return this.i[this.ha + b];
  };
  h.oa = function (a, b, c) {
    return 0 <= b && b < this.end - this.ha ? this.i[this.ha + b] : c;
  };
  h.Fb = function () {
    if (this.ha === this.end) throw Error("-drop-first of empty chunk");
    return new Sd(this.i, this.ha + 1, this.end);
  };
  h.ea = function (a, b) {
    return Hc(this.i, b, this.i[this.ha], this.ha + 1);
  };
  h.fa = function (a, b, c) {
    return Hc(this.i, b, c, this.ha);
  };
  function Ud(a, b, c, d) {
    this.N = a;
    this.va = b;
    this.u = c;
    this.C = d;
    this.m = 31850732;
    this.D = 1536;
  }
  h = Ud.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return 1 < Qa(this.N)
      ? new Ud(Tb(this.N), this.va, null, null)
      : null == this.va
        ? null
        : Bb(this.va);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.da = function () {
    return Wa(this.N, 0);
  };
  h.ga = function () {
    return 1 < Qa(this.N)
      ? new Ud(Tb(this.N), this.va, null, null)
      : null == this.va
        ? tc
        : this.va;
  };
  h.R = function () {
    return this;
  };
  h.ib = function () {
    return this.N;
  };
  h.Ea = function () {
    return null == this.va ? tc : this.va;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new Ud(this.N, this.va, b, this.C);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  h.xb = function () {
    return null == this.va ? null : this.va;
  };
  Ud.prototype[Ja] = function () {
    return vc(this);
  };
  function Vd(a, b) {
    return 0 === Qa(a) ? b : new Ud(a, b, null, null);
  }
  function Wd(a, b) {
    a.add(b);
  }
  function xd(a) {
    var b = [];
    for (a = I(a); ;)
      if (null != a) b.push(J(a)), (a = K(a));
      else return b;
  }
  function Xd(a, b) {
    if (Ic(b)) return O(b);
    var c = 0;
    for (b = I(b); ;)
      if (null != b && c < a) (c += 1), (b = K(b));
      else return c;
  }
  var Yd = function Yd(a) {
    if (null == a) return null;
    var c = K(a);
    return null == c ? I(J(a)) : Pc(J(a), Yd.h ? Yd.h(c) : Yd.call(null, c));
  },
    Zd = function Zd(a) {
      switch (arguments.length) {
        case 0:
          return Zd.B();
        case 1:
          return Zd.h(arguments[0]);
        case 2:
          return Zd.g(arguments[0], arguments[1]);
        default:
          for (var c = [], d = arguments.length, e = 0; ;)
            if (e < d) c.push(arguments[e]), (e += 1);
            else break;
          return Zd.s(arguments[0], arguments[1], new qc(c.slice(2), 0, null));
      }
    };
  Zd.B = function () {
    return new Pd(
      null,
      function () {
        return null;
      },
      null
    );
  };
  Zd.h = function (a) {
    return new Pd(
      null,
      function () {
        return a;
      },
      null
    );
  };
  Zd.g = function (a, b) {
    return new Pd(
      null,
      function () {
        var c = I(a);
        return c
          ? ld(c)
            ? Vd(Ub(c), Zd.g(Vb(c), b))
            : Pc(J(c), Zd.g(sc(c), b))
          : b;
      },
      null
    );
  };
  Zd.s = function (a, b, c) {
    return (function g(e, f) {
      return new Pd(
        null,
        function () {
          var k = I(e);
          return k
            ? ld(k)
              ? Vd(Ub(k), g(Vb(k), f))
              : Pc(J(k), g(sc(k), f))
            : x(f)
              ? g(J(f), K(f))
              : null;
        },
        null
      );
    })(Zd.g(a, b), c);
  };
  Zd.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    c = K(c);
    return this.s(b, a, c);
  };
  Zd.J = 2;
  function $d(a, b, c) {
    var d = I(c);
    if (0 === b) return a.B ? a.B() : a.call(null);
    c = D(d);
    var e = Za(d);
    if (1 === b) return a.h ? a.h(c) : a.call(null, c);
    d = D(e);
    var f = Za(e);
    if (2 === b) return a.g ? a.g(c, d) : a.call(null, c, d);
    e = D(f);
    var g = Za(f);
    if (3 === b) return a.j ? a.j(c, d, e) : a.call(null, c, d, e);
    f = D(g);
    var k = Za(g);
    if (4 === b) return a.v ? a.v(c, d, e, f) : a.call(null, c, d, e, f);
    g = D(k);
    var l = Za(k);
    if (5 === b) return a.Z ? a.Z(c, d, e, f, g) : a.call(null, c, d, e, f, g);
    k = D(l);
    var m = Za(l);
    if (6 === b)
      return a.ra ? a.ra(c, d, e, f, g, k) : a.call(null, c, d, e, f, g, k);
    l = D(m);
    var n = Za(m);
    if (7 === b)
      return a.Ta
        ? a.Ta(c, d, e, f, g, k, l)
        : a.call(null, c, d, e, f, g, k, l);
    m = D(n);
    var q = Za(n);
    if (8 === b)
      return a.Ua
        ? a.Ua(c, d, e, f, g, k, l, m)
        : a.call(null, c, d, e, f, g, k, l, m);
    n = D(q);
    var r = Za(q);
    if (9 === b)
      return a.Va
        ? a.Va(c, d, e, f, g, k, l, m, n)
        : a.call(null, c, d, e, f, g, k, l, m, n);
    q = D(r);
    var v = Za(r);
    if (10 === b)
      return a.Ia
        ? a.Ia(c, d, e, f, g, k, l, m, n, q)
        : a.call(null, c, d, e, f, g, k, l, m, n, q);
    r = D(v);
    var C = Za(v);
    if (11 === b)
      return a.Ja
        ? a.Ja(c, d, e, f, g, k, l, m, n, q, r)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r);
    v = D(C);
    var B = Za(C);
    if (12 === b)
      return a.Ka
        ? a.Ka(c, d, e, f, g, k, l, m, n, q, r, v)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r, v);
    C = D(B);
    var G = Za(B);
    if (13 === b)
      return a.La
        ? a.La(c, d, e, f, g, k, l, m, n, q, r, v, C)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r, v, C);
    B = D(G);
    var Q = Za(G);
    if (14 === b)
      return a.Ma
        ? a.Ma(c, d, e, f, g, k, l, m, n, q, r, v, C, B)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r, v, C, B);
    G = D(Q);
    var T = Za(Q);
    if (15 === b)
      return a.Na
        ? a.Na(c, d, e, f, g, k, l, m, n, q, r, v, C, B, G)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G);
    Q = D(T);
    var X = Za(T);
    if (16 === b)
      return a.Oa
        ? a.Oa(c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q);
    T = D(X);
    var na = Za(X);
    if (17 === b)
      return a.Pa
        ? a.Pa(c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T);
    X = D(na);
    var wa = Za(na);
    if (18 === b)
      return a.Qa
        ? a.Qa(c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T, X)
        : a.call(null, c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T, X);
    na = D(wa);
    wa = Za(wa);
    if (19 === b)
      return a.Ra
        ? a.Ra(c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T, X, na)
        : a.call(
          null,
          c,
          d,
          e,
          f,
          g,
          k,
          l,
          m,
          n,
          q,
          r,
          v,
          C,
          B,
          G,
          Q,
          T,
          X,
          na
        );
    var nb = D(wa);
    Za(wa);
    if (20 === b)
      return a.Sa
        ? a.Sa(c, d, e, f, g, k, l, m, n, q, r, v, C, B, G, Q, T, X, na, nb)
        : a.call(
          null,
          c,
          d,
          e,
          f,
          g,
          k,
          l,
          m,
          n,
          q,
          r,
          v,
          C,
          B,
          G,
          Q,
          T,
          X,
          na,
          nb
        );
    throw Error("Only up to 20 arguments supported on functions");
  }
  function ae(a) {
    return null != a && (a.m & 128 || u === a.lb) ? a.ba() : I(sc(a));
  }
  function be(a, b, c) {
    return null == c ? (a.h ? a.h(b) : a.call(a, b)) : ce(a, b, D(c), ae(c));
  }
  function ce(a, b, c, d) {
    return null == d
      ? a.g
        ? a.g(b, c)
        : a.call(a, b, c)
      : de(a, b, c, D(d), ae(d));
  }
  function de(a, b, c, d, e) {
    return null == e
      ? a.j
        ? a.j(b, c, d)
        : a.call(a, b, c, d)
      : ee(a, b, c, d, D(e), ae(e));
  }
  function ee(a, b, c, d, e, f) {
    if (null == f) return a.v ? a.v(b, c, d, e) : a.call(a, b, c, d, e);
    var g = D(f),
      k = K(f);
    if (null == k) return a.Z ? a.Z(b, c, d, e, g) : a.call(a, b, c, d, e, g);
    f = D(k);
    var l = K(k);
    if (null == l)
      return a.ra ? a.ra(b, c, d, e, g, f) : a.call(a, b, c, d, e, g, f);
    k = D(l);
    var m = K(l);
    if (null == m)
      return a.Ta ? a.Ta(b, c, d, e, g, f, k) : a.call(a, b, c, d, e, g, f, k);
    l = D(m);
    var n = K(m);
    if (null == n)
      return a.Ua
        ? a.Ua(b, c, d, e, g, f, k, l)
        : a.call(a, b, c, d, e, g, f, k, l);
    m = D(n);
    var q = K(n);
    if (null == q)
      return a.Va
        ? a.Va(b, c, d, e, g, f, k, l, m)
        : a.call(a, b, c, d, e, g, f, k, l, m);
    n = D(q);
    var r = K(q);
    if (null == r)
      return a.Ia
        ? a.Ia(b, c, d, e, g, f, k, l, m, n)
        : a.call(a, b, c, d, e, g, f, k, l, m, n);
    q = D(r);
    var v = K(r);
    if (null == v)
      return a.Ja
        ? a.Ja(b, c, d, e, g, f, k, l, m, n, q)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q);
    r = D(v);
    var C = K(v);
    if (null == C)
      return a.Ka
        ? a.Ka(b, c, d, e, g, f, k, l, m, n, q, r)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r);
    v = D(C);
    var B = K(C);
    if (null == B)
      return a.La
        ? a.La(b, c, d, e, g, f, k, l, m, n, q, r, v)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r, v);
    C = D(B);
    var G = K(B);
    if (null == G)
      return a.Ma
        ? a.Ma(b, c, d, e, g, f, k, l, m, n, q, r, v, C)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r, v, C);
    B = D(G);
    var Q = K(G);
    if (null == Q)
      return a.Na
        ? a.Na(b, c, d, e, g, f, k, l, m, n, q, r, v, C, B)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r, v, C, B);
    G = D(Q);
    var T = K(Q);
    if (null == T)
      return a.Oa
        ? a.Oa(b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G);
    Q = D(T);
    var X = K(T);
    if (null == X)
      return a.Pa
        ? a.Pa(b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q);
    T = D(X);
    var na = K(X);
    if (null == na)
      return a.Qa
        ? a.Qa(b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q, T)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q, T);
    X = D(na);
    var wa = K(na);
    if (null == wa)
      return a.Ra
        ? a.Ra(b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q, T, X)
        : a.call(a, b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q, T, X);
    na = D(wa);
    wa = K(wa);
    if (null == wa)
      return a.Sa
        ? a.Sa(b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q, T, X, na)
        : a.call(
          a,
          b,
          c,
          d,
          e,
          g,
          f,
          k,
          l,
          m,
          n,
          q,
          r,
          v,
          C,
          B,
          G,
          Q,
          T,
          X,
          na
        );
    b = [b, c, d, e, g, f, k, l, m, n, q, r, v, C, B, G, Q, T, X, na];
    for (c = wa; ;)
      if (c) b.push(D(c)), (c = K(c));
      else break;
    return a.apply(a, b);
  }
  function cd(a) {
    switch (arguments.length) {
      case 2:
        return fe(arguments[0], arguments[1]);
      case 3:
        return ge(arguments[0], arguments[1], arguments[2]);
      case 4:
        return he(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return ie(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4]
        );
      default:
        for (var b = [], c = arguments.length, d = 0; ;)
          if (d < c) b.push(arguments[d]), (d += 1);
          else break;
        return ke(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          new qc(b.slice(5), 0, null)
        );
    }
  }
  function fe(a, b) {
    if (a.I) {
      var c = a.J,
        d = Xd(c + 1, b);
      return d <= c ? $d(a, d, b) : a.I(b);
    }
    b = I(b);
    return null == b ? (a.B ? a.B() : a.call(a)) : be(a, D(b), ae(b));
  }
  function ge(a, b, c) {
    if (a.I) {
      b = Pc(b, c);
      var d = a.J;
      c = Xd(d, c) + 1;
      return c <= d ? $d(a, c, b) : a.I(b);
    }
    return be(a, b, I(c));
  }
  function he(a, b, c, d) {
    return a.I
      ? ((b = Pc(b, Pc(c, d))),
        (c = a.J),
        (d = 2 + Xd(c - 1, d)),
        d <= c ? $d(a, d, b) : a.I(b))
      : ce(a, b, c, I(d));
  }
  function ie(a, b, c, d, e) {
    return a.I
      ? ((b = Pc(b, Pc(c, Pc(d, e)))),
        (c = a.J),
        (e = 3 + Xd(c - 2, e)),
        e <= c ? $d(a, e, b) : a.I(b))
      : de(a, b, c, d, I(e));
  }
  function ke(a, b, c, d, e, f) {
    return a.I
      ? ((f = Yd(f)),
        (b = Pc(b, Pc(c, Pc(d, Pc(e, f))))),
        (c = a.J),
        (f = 4 + Xd(c - 3, f)),
        f <= c ? $d(a, f, b) : a.I(b))
      : ee(a, b, c, d, e, Yd(f));
  }
  function V(a) {
    return null != a && (a.m & 64 || u === a.cb)
      ? K(a)
        ? Zc(xd(a))
        : I(a)
          ? J(a)
          : le
      : a;
  }
  function me(a, b) {
    return !M.g(a, b);
  }
  function ne() {
    if (
      "undefined" === typeof sa ||
      "undefined" === typeof ta ||
      "undefined" === typeof ua
    )
      (ua = function (a) {
        this.nc = a;
        this.m = 393216;
        this.D = 0;
      }),
        (ua.prototype.X = function (a, b) {
          return new ua(b);
        }),
        (ua.prototype.W = function () {
          return this.nc;
        }),
        (ua.prototype.ia = function () {
          return !1;
        }),
        (ua.prototype.next = function () {
          return Error("No such element");
        }),
        (ua.prototype.remove = function () {
          return Error("Unsupported operation");
        }),
        (ua.Pb = !0),
        (ua.Ab = "cljs.core/t_cljs$core6516"),
        (ua.mc = function (a) {
          return Hb(a, "cljs.core/t_cljs$core6516");
        });
    return new ua(le);
  }
  function oe(a, b) {
    for (; ;) {
      if (null == I(b)) return !0;
      var c = J(b);
      c = a.h ? a.h(c) : a.call(null, c);
      if (x(c)) b = K(b);
      else return !1;
    }
  }
  function pe(a, b) {
    for (; ;)
      if ((b = I(b))) {
        var c = J(b);
        c = a.h ? a.h(c) : a.call(null, c);
        if (x(c)) return c;
        b = K(b);
      } else return null;
  }
  function qe(a) {
    return (function () {
      function b(g, k) {
        return Fa(a.g ? a.g(g, k) : a.call(null, g, k));
      }
      function c(g) {
        return Fa(a.h ? a.h(g) : a.call(null, g));
      }
      function d() {
        return Fa(a.B ? a.B() : a.call(null));
      }
      var e = null,
        f = (function () {
          function g(l, m, n) {
            var q = null;
            if (2 < arguments.length) {
              q = 0;
              for (var r = Array(arguments.length - 2); q < r.length;)
                (r[q] = arguments[q + 2]), ++q;
              q = new qc(r, 0, null);
            }
            return k.call(this, l, m, q);
          }
          function k(l, m, n) {
            return Fa(he(a, l, m, n));
          }
          g.J = 2;
          g.I = function (l) {
            var m = J(l);
            l = K(l);
            var n = J(l);
            l = sc(l);
            return k(m, n, l);
          };
          g.s = k;
          return g;
        })();
      e = function (g, k, l) {
        switch (arguments.length) {
          case 0:
            return d.call(this);
          case 1:
            return c.call(this, g);
          case 2:
            return b.call(this, g, k);
          default:
            var m = null;
            if (2 < arguments.length) {
              m = 0;
              for (var n = Array(arguments.length - 2); m < n.length;)
                (n[m] = arguments[m + 2]), ++m;
              m = new qc(n, 0, null);
            }
            return f.s(g, k, m);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      e.J = 2;
      e.I = f.I;
      e.B = d;
      e.h = c;
      e.g = b;
      e.s = f.s;
      return e;
    })();
  }
  function re(a, b) {
    return (function () {
      function c(l, m, n) {
        return a.v ? a.v(b, l, m, n) : a.call(null, b, l, m, n);
      }
      function d(l, m) {
        return a.j ? a.j(b, l, m) : a.call(null, b, l, m);
      }
      function e(l) {
        return a.g ? a.g(b, l) : a.call(null, b, l);
      }
      function f() {
        return a.h ? a.h(b) : a.call(null, b);
      }
      var g = null,
        k = (function () {
          function l(n, q, r, v) {
            var C = null;
            if (3 < arguments.length) {
              C = 0;
              for (var B = Array(arguments.length - 3); C < B.length;)
                (B[C] = arguments[C + 3]), ++C;
              C = new qc(B, 0, null);
            }
            return m.call(this, n, q, r, C);
          }
          function m(n, q, r, v) {
            return ke(a, b, n, q, r, R([v]));
          }
          l.J = 3;
          l.I = function (n) {
            var q = J(n);
            n = K(n);
            var r = J(n);
            n = K(n);
            var v = J(n);
            n = sc(n);
            return m(q, r, v, n);
          };
          l.s = m;
          return l;
        })();
      g = function (l, m, n, q) {
        switch (arguments.length) {
          case 0:
            return f.call(this);
          case 1:
            return e.call(this, l);
          case 2:
            return d.call(this, l, m);
          case 3:
            return c.call(this, l, m, n);
          default:
            var r = null;
            if (3 < arguments.length) {
              r = 0;
              for (var v = Array(arguments.length - 3); r < v.length;)
                (v[r] = arguments[r + 3]), ++r;
              r = new qc(v, 0, null);
            }
            return k.s(l, m, n, r);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.J = 3;
      g.I = k.I;
      g.B = f;
      g.h = e;
      g.g = d;
      g.j = c;
      g.s = k.s;
      return g;
    })();
  }
  function se(a) {
    var b = te;
    return (function () {
      function c(l, m, n) {
        return b.Z ? b.Z(a, null, l, m, n) : b.call(null, a, null, l, m, n);
      }
      function d(l, m) {
        return b.v ? b.v(a, null, l, m) : b.call(null, a, null, l, m);
      }
      function e(l) {
        return b.j ? b.j(a, null, l) : b.call(null, a, null, l);
      }
      function f() {
        return b.g ? b.g(a, null) : b.call(null, a, null);
      }
      var g = null,
        k = (function () {
          function l(n, q, r, v) {
            var C = null;
            if (3 < arguments.length) {
              C = 0;
              for (var B = Array(arguments.length - 3); C < B.length;)
                (B[C] = arguments[C + 3]), ++C;
              C = new qc(B, 0, null);
            }
            return m.call(this, n, q, r, C);
          }
          function m(n, q, r, v) {
            return ke(b, a, null, n, q, R([r, v]));
          }
          l.J = 3;
          l.I = function (n) {
            var q = J(n);
            n = K(n);
            var r = J(n);
            n = K(n);
            var v = J(n);
            n = sc(n);
            return m(q, r, v, n);
          };
          l.s = m;
          return l;
        })();
      g = function (l, m, n, q) {
        switch (arguments.length) {
          case 0:
            return f.call(this);
          case 1:
            return e.call(this, l);
          case 2:
            return d.call(this, l, m);
          case 3:
            return c.call(this, l, m, n);
          default:
            var r = null;
            if (3 < arguments.length) {
              r = 0;
              for (var v = Array(arguments.length - 3); r < v.length;)
                (v[r] = arguments[r + 3]), ++r;
              r = new qc(v, 0, null);
            }
            return k.s(l, m, n, r);
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      g.J = 3;
      g.I = k.I;
      g.B = f;
      g.h = e;
      g.g = d;
      g.j = c;
      g.s = k.s;
      return g;
    })();
  }
  function ue(a, b) {
    return (function f(d, e) {
      return new Pd(
        null,
        function () {
          var g = I(e);
          if (g) {
            if (ld(g)) {
              for (var k = Ub(g), l = O(k), m = Td(l), n = 0; ;)
                if (n < l)
                  Wd(
                    m,
                    (function () {
                      var q = d + n,
                        r = Wa(k, n);
                      return a.g ? a.g(q, r) : a.call(null, q, r);
                    })()
                  ),
                    (n += 1);
                else break;
              return Vd(m.N(), f(d + l, Vb(g)));
            }
            return Pc(
              (function () {
                var q = J(g);
                return a.g ? a.g(d, q) : a.call(null, d, q);
              })(),
              f(d + 1, sc(g))
            );
          }
          return null;
        },
        null
      );
    })(0, b);
  }
  function ve(a) {
    this.state = a;
    this.Bb = this.qc = this.u = null;
    this.D = 16386;
    this.m = 6455296;
  }
  h = ve.prototype;
  h.S = function (a, b) {
    return this === b;
  };
  h.Gb = function () {
    return this.state;
  };
  h.W = function () {
    return this.u;
  };
  h.Nb = function (a, b, c) {
    this.Bb = U.j(this.Bb, b, c);
    return this;
  };
  h.V = function () {
    return ca(this);
  };
  function we(a, b) {
    if (a instanceof ve) {
      var c = a.qc;
      if (null != c && !x(c.h ? c.h(b) : c.call(null, b)))
        throw Error("Validator rejected reference state");
      c = a.state;
      a.state = b;
      if (null != a.Bb)
        a: for (var d = I(a.Bb), e = null, f = 0, g = 0; ;)
          if (g < f) {
            var k = e.H(null, g),
              l = S(k, 0, null);
            k = S(k, 1, null);
            k.v ? k.v(l, a, c, b) : k.call(null, l, a, c, b);
            g += 1;
          } else if ((d = I(d)))
            ld(d)
              ? ((e = Ub(d)), (d = Vb(d)), (l = e), (f = O(e)), (e = l))
              : ((e = J(d)),
                (l = S(e, 0, null)),
                (k = S(e, 1, null)),
                k.v ? k.v(l, a, c, b) : k.call(null, l, a, c, b),
                (d = K(d)),
                (e = null),
                (f = 0)),
              (g = 0);
          else break a;
      return b;
    }
    return Wb(a, b);
  }
  var W = function W(a) {
    switch (arguments.length) {
      case 2:
        return W.g(arguments[0], arguments[1]);
      case 3:
        return W.j(arguments[0], arguments[1], arguments[2]);
      case 4:
        return W.v(arguments[0], arguments[1], arguments[2], arguments[3]);
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return W.s(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          new qc(c.slice(4), 0, null)
        );
    }
  };
  W.g = function (a, b) {
    if (a instanceof ve) {
      var c = a.state;
      b = b.h ? b.h(c) : b.call(null, c);
      a = we(a, b);
    } else a = Xb(a, b);
    return a;
  };
  W.j = function (a, b, c) {
    if (a instanceof ve) {
      var d = a.state;
      b = b.g ? b.g(d, c) : b.call(null, d, c);
      a = we(a, b);
    } else a = Xb(a, b, c);
    return a;
  };
  W.v = function (a, b, c, d) {
    if (a instanceof ve) {
      var e = a.state;
      b = b.j ? b.j(e, c, d) : b.call(null, e, c, d);
      a = we(a, b);
    } else a = Xb(a, b, c, d);
    return a;
  };
  W.s = function (a, b, c, d, e) {
    return a instanceof ve ? we(a, ie(b, a.state, c, d, e)) : Xb(a, b, c, d, e);
  };
  W.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    var d = K(c);
    c = J(d);
    var e = K(d);
    d = J(e);
    e = K(e);
    return this.s(b, a, c, d, e);
  };
  W.J = 4;
  var Y = function Y(a) {
    switch (arguments.length) {
      case 1:
        return Y.h(arguments[0]);
      case 2:
        return Y.g(arguments[0], arguments[1]);
      case 3:
        return Y.j(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Y.v(arguments[0], arguments[1], arguments[2], arguments[3]);
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return Y.s(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          new qc(c.slice(4), 0, null)
        );
    }
  };
  Y.h = function (a) {
    return function (b) {
      return (function () {
        function c(k, l) {
          l = a.h ? a.h(l) : a.call(null, l);
          return b.g ? b.g(k, l) : b.call(null, k, l);
        }
        function d(k) {
          return b.h ? b.h(k) : b.call(null, k);
        }
        function e() {
          return b.B ? b.B() : b.call(null);
        }
        var f = null,
          g = (function () {
            function k(m, n, q) {
              var r = null;
              if (2 < arguments.length) {
                r = 0;
                for (var v = Array(arguments.length - 2); r < v.length;)
                  (v[r] = arguments[r + 2]), ++r;
                r = new qc(v, 0, null);
              }
              return l.call(this, m, n, r);
            }
            function l(m, n, q) {
              n = ge(a, n, q);
              return b.g ? b.g(m, n) : b.call(null, m, n);
            }
            k.J = 2;
            k.I = function (m) {
              var n = J(m);
              m = K(m);
              var q = J(m);
              m = sc(m);
              return l(n, q, m);
            };
            k.s = l;
            return k;
          })();
        f = function (k, l, m) {
          switch (arguments.length) {
            case 0:
              return e.call(this);
            case 1:
              return d.call(this, k);
            case 2:
              return c.call(this, k, l);
            default:
              var n = null;
              if (2 < arguments.length) {
                n = 0;
                for (var q = Array(arguments.length - 2); n < q.length;)
                  (q[n] = arguments[n + 2]), ++n;
                n = new qc(q, 0, null);
              }
              return g.s(k, l, n);
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        f.J = 2;
        f.I = g.I;
        f.B = e;
        f.h = d;
        f.g = c;
        f.s = g.s;
        return f;
      })();
    };
  };
  Y.g = function (a, b) {
    return new Pd(
      null,
      function () {
        var c = I(b);
        if (c) {
          if (ld(c)) {
            for (var d = Ub(c), e = O(d), f = Td(e), g = 0; ;)
              if (g < e)
                Wd(
                  f,
                  (function () {
                    var k = Wa(d, g);
                    return a.h ? a.h(k) : a.call(null, k);
                  })()
                ),
                  (g += 1);
              else break;
            return Vd(f.N(), Y.g(a, Vb(c)));
          }
          return Pc(
            (function () {
              var k = J(c);
              return a.h ? a.h(k) : a.call(null, k);
            })(),
            Y.g(a, sc(c))
          );
        }
        return null;
      },
      null
    );
  };
  Y.j = function (a, b, c) {
    return new Pd(
      null,
      function () {
        var d = I(b),
          e = I(c);
        if (d && e) {
          var f = J(d);
          var g = J(e);
          f = a.g ? a.g(f, g) : a.call(null, f, g);
          d = Pc(f, Y.j(a, sc(d), sc(e)));
        } else d = null;
        return d;
      },
      null
    );
  };
  Y.v = function (a, b, c, d) {
    return new Pd(
      null,
      function () {
        var e = I(b),
          f = I(c),
          g = I(d);
        if (e && f && g) {
          var k = J(e);
          var l = J(f),
            m = J(g);
          k = a.j ? a.j(k, l, m) : a.call(null, k, l, m);
          e = Pc(k, Y.v(a, sc(e), sc(f), sc(g)));
        } else e = null;
        return e;
      },
      null
    );
  };
  Y.s = function (a, b, c, d, e) {
    return Y.g(
      function (f) {
        return fe(a, f);
      },
      (function k(g) {
        return new Pd(
          null,
          function () {
            var l = Y.g(I, g);
            return oe(Ed, l) ? Pc(Y.g(J, l), k(Y.g(sc, l))) : null;
          },
          null
        );
      })(Uc.s(e, d, R([c, b])))
    );
  };
  Y.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    var d = K(c);
    c = J(d);
    var e = K(d);
    d = J(e);
    e = K(e);
    return this.s(b, a, c, d, e);
  };
  Y.J = 4;
  function xe(a, b) {
    return new Pd(
      null,
      function () {
        if (0 < a) {
          var c = I(b);
          return c ? Pc(J(c), xe(a - 1, sc(c))) : null;
        }
        return null;
      },
      null
    );
  }
  function ye(a) {
    return new Pd(
      null,
      function () {
        a: for (var b = 2, c = a; ;)
          if (((c = I(c)), 0 < b && c)) --b, (c = sc(c));
          else break a;
        return c;
      },
      null
    );
  }
  function ze(a) {
    return Y.j(
      function (b) {
        return b;
      },
      a,
      ye(a)
    );
  }
  function Ae(a) {
    return new Pd(
      null,
      function () {
        return Pc(a.B ? a.B() : a.call(null), Ae(a));
      },
      null
    );
  }
  function Be(a, b) {
    return new Pd(
      null,
      function () {
        var c = I(b);
        if (c) {
          if (ld(c)) {
            for (var d = Ub(c), e = O(d), f = Td(e), g = 0; ;)
              if (g < e) {
                var k = Wa(d, g);
                k = a.h ? a.h(k) : a.call(null, k);
                x(k) && ((k = Wa(d, g)), f.add(k));
                g += 1;
              } else break;
            return Vd(f.N(), Be(a, Vb(c)));
          }
          d = J(c);
          c = sc(c);
          return x(a.h ? a.h(d) : a.call(null, d)) ? Pc(d, Be(a, c)) : Be(a, c);
        }
        return null;
      },
      null
    );
  }
  function Ce(a, b) {
    return Be(qe(a), b);
  }
  function De(a) {
    return (function d(c) {
      return new Pd(
        null,
        function () {
          if (x(hd.h ? hd.h(c) : hd.call(null, c))) {
            var e = R([I.h ? I.h(c) : I.call(null, c)]);
            e = fe(Zd, ge(Y, d, e));
          } else e = null;
          return Pc(c, e);
        },
        null
      );
    })(a);
  }
  function Ee(a) {
    return Be(function (b) {
      return !hd(b);
    }, sc(De(a)));
  }
  function Fe(a, b) {
    return null != a
      ? null != a && (a.D & 4 || u === a.Ub)
        ? sb(Pb(Ma(Ob, Nb(a), b)), ed(a))
        : Ma(Ua, a, b)
      : Ma(Uc, a, b);
  }
  function Ge(a, b, c) {
    if (null != a && (a.D & 4 || u === a.Ub)) {
      var d = ed(a);
      return Fd(
        b,
        (function () {
          function e(g) {
            return sb(Pb(g), d);
          }
          var f = null;
          f = function (g, k) {
            switch (arguments.length) {
              case 1:
                return e.call(this, g);
              case 2:
                return Ob(g, k);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          f.h = e;
          f.g = function (g, k) {
            return Ob(g, k);
          };
          return f;
        })(),
        Nb(a),
        c
      );
    }
    return Fd(b, Uc, a, c);
  }
  function He(a, b) {
    return Ma(F, a, b);
  }
  var Ie = function Ie(a, b, c) {
    var e = I(b);
    b = J(e);
    var f = K(e);
    if (f) {
      e = U.j;
      var g = F.g(a, b);
      c = Ie.j ? Ie.j(g, f, c) : Ie.call(null, g, f, c);
      a = e.call(U, a, b, c);
    } else a = U.j(a, b, c);
    return a;
  },
    Je = function Je(a) {
      switch (arguments.length) {
        case 3:
          return Je.j(arguments[0], arguments[1], arguments[2]);
        case 4:
          return Je.v(arguments[0], arguments[1], arguments[2], arguments[3]);
        case 5:
          return Je.Z(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3],
            arguments[4]
          );
        case 6:
          return Je.ra(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3],
            arguments[4],
            arguments[5]
          );
        default:
          for (var c = [], d = arguments.length, e = 0; ;)
            if (e < d) c.push(arguments[e]), (e += 1);
            else break;
          return Je.s(
            arguments[0],
            arguments[1],
            arguments[2],
            arguments[3],
            arguments[4],
            arguments[5],
            new qc(c.slice(6), 0, null)
          );
      }
    };
  Je.j = function (a, b, c) {
    var d = I(b);
    b = J(d);
    if ((d = K(d))) a = U.j(a, b, Je.j(F.g(a, b), d, c));
    else {
      d = U.j;
      var e = F.g(a, b);
      c = c.h ? c.h(e) : c.call(null, e);
      a = d.call(U, a, b, c);
    }
    return a;
  };
  Je.v = function (a, b, c, d) {
    var e = I(b);
    b = J(e);
    if ((e = K(e))) a = U.j(a, b, Je.v(F.g(a, b), e, c, d));
    else {
      e = U.j;
      var f = F.g(a, b);
      c = c.g ? c.g(f, d) : c.call(null, f, d);
      a = e.call(U, a, b, c);
    }
    return a;
  };
  Je.Z = function (a, b, c, d, e) {
    var f = I(b);
    b = J(f);
    if ((f = K(f))) a = U.j(a, b, Je.Z(F.g(a, b), f, c, d, e));
    else {
      f = U.j;
      var g = F.g(a, b);
      c = c.j ? c.j(g, d, e) : c.call(null, g, d, e);
      a = f.call(U, a, b, c);
    }
    return a;
  };
  Je.ra = function (a, b, c, d, e, f) {
    var g = I(b);
    b = J(g);
    if ((g = K(g))) a = U.j(a, b, Je.ra(F.g(a, b), g, c, d, e, f));
    else {
      g = U.j;
      var k = F.g(a, b);
      c = c.v ? c.v(k, d, e, f) : c.call(null, k, d, e, f);
      a = g.call(U, a, b, c);
    }
    return a;
  };
  Je.s = function (a, b, c, d, e, f, g) {
    var k = I(b);
    b = J(k);
    return (k = K(k))
      ? U.j(a, b, ke(Je, F.g(a, b), k, c, d, R([e, f, g])))
      : U.j(a, b, ke(c, F.g(a, b), d, e, f, R([g])));
  };
  Je.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    var d = K(c);
    c = J(d);
    var e = K(d);
    d = J(e);
    var f = K(e);
    e = J(f);
    var g = K(f);
    f = J(g);
    g = K(g);
    return this.s(b, a, c, d, e, f, g);
  };
  Je.J = 6;
  var Ke = function Ke(a) {
    switch (arguments.length) {
      case 3:
        return Ke.j(arguments[0], arguments[1], arguments[2]);
      case 4:
        return Ke.v(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return Ke.Z(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4]
        );
      case 6:
        return Ke.ra(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5]
        );
      default:
        for (var c = [], d = arguments.length, e = 0; ;)
          if (e < d) c.push(arguments[e]), (e += 1);
          else break;
        return Ke.s(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          new qc(c.slice(6), 0, null)
        );
    }
  };
  Ke.j = function (a, b, c) {
    var d = U.j,
      e = F.g(a, b);
    c = c.h ? c.h(e) : c.call(null, e);
    return d.call(U, a, b, c);
  };
  Ke.v = function (a, b, c, d) {
    var e = U.j,
      f = F.g(a, b);
    c = c.g ? c.g(f, d) : c.call(null, f, d);
    return e.call(U, a, b, c);
  };
  Ke.Z = function (a, b, c, d, e) {
    var f = U.j,
      g = F.g(a, b);
    c = c.j ? c.j(g, d, e) : c.call(null, g, d, e);
    return f.call(U, a, b, c);
  };
  Ke.ra = function (a, b, c, d, e, f) {
    var g = U.j,
      k = F.g(a, b);
    c = c.v ? c.v(k, d, e, f) : c.call(null, k, d, e, f);
    return g.call(U, a, b, c);
  };
  Ke.s = function (a, b, c, d, e, f, g) {
    return U.j(a, b, ke(c, F.g(a, b), d, e, f, R([g])));
  };
  Ke.I = function (a) {
    var b = J(a),
      c = K(a);
    a = J(c);
    var d = K(c);
    c = J(d);
    var e = K(d);
    d = J(e);
    var f = K(e);
    e = J(f);
    var g = K(f);
    f = J(g);
    g = K(g);
    return this.s(b, a, c, d, e, f, g);
  };
  Ke.J = 6;
  function Le(a, b) {
    this.K = a;
    this.i = b;
  }
  function Me(a) {
    return new Le(a, [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  }
  function Ne(a) {
    return new Le(a.K, Ka(a.i));
  }
  function Oe(a) {
    a = a.l;
    return 32 > a ? 0 : ((a - 1) >>> 5) << 5;
  }
  function Pe(a, b, c) {
    for (; ;) {
      if (0 === b) return c;
      var d = Me(a);
      d.i[0] = c;
      c = d;
      b -= 5;
    }
  }
  var Qe = function Qe(a, b, c, d) {
    var f = Ne(c),
      g = ((a.l - 1) >>> b) & 31;
    5 === b
      ? (f.i[g] = d)
      : ((c = c.i[g]),
        null != c
          ? ((b -= 5),
            (a = Qe.v ? Qe.v(a, b, c, d) : Qe.call(null, a, b, c, d)))
          : (a = Pe(null, b - 5, d)),
        (f.i[g] = a));
    return f;
  };
  function Re(a, b) {
    if (b >= Oe(a)) return a.la;
    var c = a.root;
    for (a = a.shift; ;)
      if (0 < a) {
        var d = a - 5;
        c = c.i[(b >>> a) & 31];
        a = d;
      } else return c.i;
  }
  function Se(a, b) {
    if (0 <= b && b < a.l) b = Re(a, b);
    else
      throw (
        ((a = a.l),
          Error(["No item ", A.h(b), " in vector of length ", A.h(a)].join("")))
      );
    return b;
  }
  var Te = function Te(a, b, c, d, e) {
    var g = Ne(c);
    if (0 === b) g.i[d & 31] = e;
    else {
      var k = (d >>> b) & 31;
      b -= 5;
      c = c.i[k];
      a = Te.Z ? Te.Z(a, b, c, d, e) : Te.call(null, a, b, c, d, e);
      g.i[k] = a;
    }
    return g;
  },
    Ue = function Ue(a, b, c) {
      var e = ((a.l - 2) >>> b) & 31;
      if (5 < b) {
        b -= 5;
        var f = c.i[e];
        a = Ue.j ? Ue.j(a, b, f) : Ue.call(null, a, b, f);
        if (null == a && 0 === e) return null;
        c = Ne(c);
        c.i[e] = a;
        return c;
      }
      if (0 === e) return null;
      c = Ne(c);
      c.i[e] = null;
      return c;
    };
  function Ve(a, b, c) {
    this.Db = this.o = 0;
    this.i = a;
    this.pc = b;
    this.start = 0;
    this.end = c;
  }
  Ve.prototype.ia = function () {
    return this.o < this.end;
  };
  Ve.prototype.next = function () {
    32 === this.o - this.Db &&
      ((this.i = Re(this.pc, this.o)), (this.Db += 32));
    var a = this.i[this.o & 31];
    this.o += 1;
    return a;
  };
  function We(a, b, c, d) {
    return c < d ? Xe(a, b, Kc(a, c), c + 1, d) : b.B ? b.B() : b.call(null);
  }
  function Xe(a, b, c, d, e) {
    var f = c;
    c = d;
    for (d = Re(a, d); ;)
      if (c < e) {
        var g = c & 31;
        d = 0 === g ? Re(a, c) : d;
        g = d[g];
        f = b.g ? b.g(f, g) : b.call(null, f, g);
        if (Cc(f)) return E(f);
        c += 1;
      } else return f;
  }
  function Z(a, b, c, d, e, f) {
    this.u = a;
    this.l = b;
    this.shift = c;
    this.root = d;
    this.la = e;
    this.C = f;
    this.m = 167666463;
    this.D = 139268;
  }
  h = Z.prototype;
  h.kb = function (a, b) {
    return 0 <= b && b < this.l ? new Ye(b, Re(this, b)[b & 31]) : null;
  };
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.na = function (a, b) {
    return this.O(null, b, null);
  };
  h.O = function (a, b, c) {
    return "number" === typeof b ? this.oa(null, b, c) : c;
  };
  h.yb = function (a, b, c) {
    a = 0;
    for (var d = c; ;)
      if (a < this.l) {
        var e = Re(this, a);
        c = e.length;
        a: for (var f = 0; ;)
          if (f < c) {
            var g = f + a,
              k = e[f];
            d = b.j ? b.j(d, g, k) : b.call(null, d, g, k);
            if (Cc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        if (Cc(e)) return E(e);
        a += c;
        d = e;
      } else return d;
  };
  h.H = function (a, b) {
    return Se(this, b)[b & 31];
  };
  h.oa = function (a, b, c) {
    return 0 <= b && b < this.l ? Re(this, b)[b & 31] : c;
  };
  h.Ib = function (a, b) {
    if (0 <= a && a < this.l) {
      if (Oe(this) <= a) {
        var c = Ka(this.la);
        c[a & 31] = b;
        return new Z(this.u, this.l, this.shift, this.root, c, null);
      }
      return new Z(
        this.u,
        this.l,
        this.shift,
        Te(this, this.shift, this.root, a, b),
        this.la,
        null
      );
    }
    if (a === this.l) return this.aa(null, b);
    throw Error(
      ["Index ", A.h(a), " out of bounds  [0,", A.h(this.l), "]"].join("")
    );
  };
  h.qa = function () {
    var a = this.l;
    return new Ve(0 < O(this) ? Re(this, 0) : null, this, a);
  };
  h.W = function () {
    return this.u;
  };
  h.P = function () {
    return this.l;
  };
  h.mb = function () {
    return 0 < this.l ? this.H(null, this.l - 1) : null;
  };
  h.nb = function () {
    if (0 === this.l) throw Error("Can't pop empty vector");
    if (1 === this.l) return sb(Vc, this.u);
    if (1 < this.l - Oe(this))
      return new Z(
        this.u,
        this.l - 1,
        this.shift,
        this.root,
        this.la.slice(0, -1),
        null
      );
    var a = Re(this, this.l - 2),
      b = Ue(this, this.shift, this.root);
    b = null == b ? Ze : b;
    var c = this.l - 1;
    return 5 < this.shift && null == b.i[1]
      ? new Z(this.u, c, this.shift - 5, b.i[0], a, null)
      : new Z(this.u, c, this.shift, b, a, null);
  };
  h.zb = function () {
    return 0 < this.l ? new Nc(this, this.l - 1, null) : null;
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    if (b instanceof Z)
      if (this.l === O(b))
        for (a = this.qa(null), b = b.qa(null); ;)
          if (a.ia()) {
            var c = a.next(),
              d = b.next();
            if (!M.g(c, d)) return !1;
          } else return !0;
      else return !1;
    else return Oc(this, b);
  };
  h.bb = function () {
    return new $e(
      this.l,
      this.shift,
      af.h ? af.h(this.root) : af.call(null, this.root),
      cf.h ? cf.h(this.la) : cf.call(null, this.la)
    );
  };
  h.Y = function () {
    return sb(Vc, this.u);
  };
  h.ea = function (a, b) {
    return We(this, b, 0, this.l);
  };
  h.fa = function (a, b, c) {
    a = 0;
    for (var d = c; ;)
      if (a < this.l) {
        var e = Re(this, a);
        c = e.length;
        a: for (var f = 0; ;)
          if (f < c) {
            var g = e[f];
            d = b.g ? b.g(d, g) : b.call(null, d, g);
            if (Cc(d)) {
              e = d;
              break a;
            }
            f += 1;
          } else {
            e = d;
            break a;
          }
        if (Cc(e)) return E(e);
        a += c;
        d = e;
      } else return d;
  };
  h.Da = function (a, b, c) {
    if ("number" === typeof b) return this.Ib(b, c);
    throw Error("Vector's key for assoc must be a number.");
  };
  h.$a = function (a, b) {
    return rd(b) ? 0 <= b && b < this.l : !1;
  };
  h.R = function () {
    if (0 === this.l) return null;
    if (32 >= this.l) return new qc(this.la, 0, null);
    a: {
      var a = this.root;
      for (var b = this.shift; ;)
        if (0 < b) (b -= 5), (a = a.i[0]);
        else {
          a = a.i;
          break a;
        }
    }
    return df ? df(this, a, 0, 0) : ef.call(null, this, a, 0, 0);
  };
  h.X = function (a, b) {
    return b === this.u
      ? this
      : new Z(b, this.l, this.shift, this.root, this.la, this.C);
  };
  h.aa = function (a, b) {
    if (32 > this.l - Oe(this)) {
      a = this.la.length;
      for (var c = Array(a + 1), d = 0; ;)
        if (d < a) (c[d] = this.la[d]), (d += 1);
        else break;
      c[a] = b;
      return new Z(this.u, this.l + 1, this.shift, this.root, c, null);
    }
    a = (c = this.l >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
    c
      ? ((c = Me(null)),
        (c.i[0] = this.root),
        (d = Pe(null, this.shift, new Le(null, this.la))),
        (c.i[1] = d))
      : (c = Qe(this, this.shift, this.root, new Le(null, this.la)));
    return new Z(this.u, this.l + 1, a, c, [b], null);
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    if ("number" === typeof a) return this.H(null, a);
    throw Error("Key must be integer");
  };
  var Ze = new Le(null, [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]),
    Vc = new Z(null, 0, 5, Ze, [], yc);
  Z.prototype[Ja] = function () {
    return vc(this);
  };
  function ff(a) {
    if (x(gf.h ? gf.h(a) : gf.call(null, a)))
      a = new Z(
        null,
        2,
        5,
        Ze,
        [hf.h ? hf.h(a) : hf.call(null, a), jf.h ? jf.h(a) : jf.call(null, a)],
        null
      );
    else if (kd(a)) a = dd(a, null);
    else if (Ea(a))
      a: {
        var b = a.length;
        if (32 > b) a = new Z(null, b, 5, Ze, a, null);
        else
          for (
            var c = 32,
            d = new Z(null, 32, 5, Ze, a.slice(0, 32), null).bb(null);
            ;

          )
            if (c < b) {
              var e = c + 1;
              d = Ob(d, a[c]);
              c = e;
            } else {
              a = Pb(d);
              break a;
            }
      }
    else a = Pb(Ma(Ob, Nb(Vc), a));
    return a;
  }
  function kf(a, b, c, d, e) {
    this.pa = a;
    this.node = b;
    this.o = c;
    this.ha = d;
    this.u = e;
    this.C = null;
    this.m = 32375020;
    this.D = 1536;
  }
  h = kf.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    if (this.ha + 1 < this.node.length) {
      var a = this.pa;
      var b = this.node,
        c = this.o,
        d = this.ha + 1;
      a = df ? df(a, b, c, d) : ef.call(null, a, b, c, d);
      return null == a ? null : a;
    }
    return this.xb();
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return We(this.pa, b, this.o + this.ha, O(this.pa));
  };
  h.fa = function (a, b, c) {
    return Xe(this.pa, b, c, this.o + this.ha, O(this.pa));
  };
  h.da = function () {
    return this.node[this.ha];
  };
  h.ga = function () {
    if (this.ha + 1 < this.node.length) {
      var a = this.pa;
      var b = this.node,
        c = this.o,
        d = this.ha + 1;
      a = df ? df(a, b, c, d) : ef.call(null, a, b, c, d);
      return null == a ? tc : a;
    }
    return this.Ea(null);
  };
  h.R = function () {
    return this;
  };
  h.ib = function () {
    var a = this.node;
    return new Sd(a, this.ha, a.length);
  };
  h.Ea = function () {
    var a = this.o + this.node.length;
    if (a < Qa(this.pa)) {
      var b = this.pa,
        c = Re(this.pa, a);
      return df ? df(b, c, a, 0) : ef.call(null, b, c, a, 0);
    }
    return tc;
  };
  h.X = function (a, b) {
    return b === this.u
      ? this
      : lf
        ? lf(this.pa, this.node, this.o, this.ha, b)
        : ef.call(null, this.pa, this.node, this.o, this.ha, b);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  h.xb = function () {
    var a = this.o + this.node.length;
    if (a < Qa(this.pa)) {
      var b = this.pa,
        c = Re(this.pa, a);
      return df ? df(b, c, a, 0) : ef.call(null, b, c, a, 0);
    }
    return null;
  };
  kf.prototype[Ja] = function () {
    return vc(this);
  };
  function ef(a) {
    switch (arguments.length) {
      case 3:
        var b = arguments[0],
          c = arguments[1],
          d = arguments[2];
        return new kf(b, Se(b, c), c, d, null);
      case 4:
        return df(arguments[0], arguments[1], arguments[2], arguments[3]);
      case 5:
        return lf(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4]
        );
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  function df(a, b, c, d) {
    return new kf(a, b, c, d, null);
  }
  function lf(a, b, c, d, e) {
    return new kf(a, b, c, d, e);
  }
  function mf(a, b) {
    return a === b.K ? b : new Le(a, Ka(b.i));
  }
  function af(a) {
    return new Le({}, Ka(a.i));
  }
  function cf(a) {
    var b = [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ];
    md(a, 0, b, 0, a.length);
    return b;
  }
  var nf = function nf(a, b, c, d) {
    c = mf(a.root.K, c);
    var f = ((a.l - 1) >>> b) & 31;
    if (5 === b) a = d;
    else {
      var g = c.i[f];
      null != g
        ? ((b -= 5), (a = nf.v ? nf.v(a, b, g, d) : nf.call(null, a, b, g, d)))
        : (a = Pe(a.root.K, b - 5, d));
    }
    c.i[f] = a;
    return c;
  };
  function $e(a, b, c, d) {
    this.l = a;
    this.shift = b;
    this.root = c;
    this.la = d;
    this.D = 88;
    this.m = 275;
  }
  h = $e.prototype;
  h.fb = function (a, b) {
    if (this.root.K) {
      if (32 > this.l - Oe(this)) this.la[this.l & 31] = b;
      else {
        a = new Le(this.root.K, this.la);
        var c = [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ];
        c[0] = b;
        this.la = c;
        this.l >>> 5 > 1 << this.shift
          ? ((b = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ]),
            (c = this.shift + 5),
            (b[0] = this.root),
            (b[1] = Pe(this.root.K, this.shift, a)),
            (this.root = new Le(this.root.K, b)),
            (this.shift = c))
          : (this.root = nf(this, this.shift, this.root, a));
      }
      this.l += 1;
      return this;
    }
    throw Error("conj! after persistent!");
  };
  h.ob = function () {
    if (this.root.K) {
      this.root.K = null;
      var a = this.l - Oe(this),
        b = Array(a);
      md(this.la, 0, b, 0, a);
      return new Z(null, this.l, this.shift, this.root, b, null);
    }
    throw Error("persistent! called twice");
  };
  h.eb = function (a, b, c) {
    if ("number" === typeof b) return of(this, b, c);
    throw Error("TransientVector's key for assoc! must be a number.");
  };
  function of(a, b, c) {
    if (a.root.K) {
      if (0 <= b && b < a.l) {
        if (Oe(a) <= b) a.la[b & 31] = c;
        else {
          var d = (function k(f, g) {
            g = mf(a.root.K, g);
            if (0 === f) g.i[b & 31] = c;
            else {
              var l = (b >>> f) & 31;
              f = k(f - 5, g.i[l]);
              g.i[l] = f;
            }
            return g;
          })(a.shift, a.root);
          a.root = d;
        }
        return a;
      }
      if (b === a.l) return a.fb(null, c);
      throw Error(
        [
          "Index ",
          A.h(b),
          " out of bounds for TransientVector of length",
          A.h(a.l),
        ].join("")
      );
    }
    throw Error("assoc! after persistent!");
  }
  h.P = function () {
    if (this.root.K) return this.l;
    throw Error("count after persistent!");
  };
  h.H = function (a, b) {
    if (this.root.K) return Se(this, b)[b & 31];
    throw Error("nth after persistent!");
  };
  h.oa = function (a, b, c) {
    return 0 <= b && b < this.l ? this.H(null, b) : c;
  };
  h.na = function (a, b) {
    return this.O(null, b, null);
  };
  h.O = function (a, b, c) {
    if (this.root.K) return "number" === typeof b ? this.oa(null, b, c) : c;
    throw Error("lookup after persistent!");
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return this.na(null, a);
  };
  h.g = function (a, b) {
    return this.O(null, a, b);
  };
  function pf() {
    this.m = 2097152;
    this.D = 0;
  }
  pf.prototype.S = function () {
    return !1;
  };
  var qf = new pf();
  function rf(a, b) {
    return qd(
      id(b) && !jd(b)
        ? O(a) === O(b)
          ? (
            null != a
              ? a.m & 1048576 || u === a.wc || (a.m ? 0 : y(wb, a))
              : y(wb, a)
          )
            ? Dd(function (c, d, e) {
              return M.g(F.j(b, d, qf), e) ? !0 : new Bc(!1);
            }, a)
            : oe(function (c) {
              return M.g(F.j(b, J(c), qf), J(K(c)));
            }, a)
          : null
        : null
    );
  }
  function sf(a) {
    this.F = a;
  }
  sf.prototype.next = function () {
    if (null != this.F) {
      var a = J(this.F),
        b = S(a, 0, null);
      a = S(a, 1, null);
      this.F = K(this.F);
      return { value: [b, a], done: !1 };
    }
    return { value: null, done: !0 };
  };
  function tf(a) {
    this.F = a;
  }
  tf.prototype.next = function () {
    if (null != this.F) {
      var a = J(this.F);
      this.F = K(this.F);
      return { value: [a, a], done: !1 };
    }
    return { value: null, done: !0 };
  };
  function uf(a, b) {
    if (b instanceof H)
      a: {
        var c = a.length;
        b = b.sa;
        for (var d = 0; ;) {
          if (c <= d) {
            a = -1;
            break a;
          }
          if (a[d] instanceof H && b === a[d].sa) {
            a = d;
            break a;
          }
          d += 2;
        }
      }
    else if ("string" === typeof b || "number" === typeof b)
      a: for (c = a.length, d = 0; ;) {
        if (c <= d) {
          a = -1;
          break a;
        }
        if (b === a[d]) {
          a = d;
          break a;
        }
        d += 2;
      }
    else if (b instanceof nc)
      a: for (c = a.length, b = b.za, d = 0; ;) {
        if (c <= d) {
          a = -1;
          break a;
        }
        if (a[d] instanceof nc && b === a[d].za) {
          a = d;
          break a;
        }
        d += 2;
      }
    else if (null == b)
      a: for (b = a.length, c = 0; ;) {
        if (b <= c) {
          a = -1;
          break a;
        }
        if (null == a[c]) {
          a = c;
          break a;
        }
        c += 2;
      }
    else
      a: for (c = a.length, d = 0; ;) {
        if (c <= d) {
          a = -1;
          break a;
        }
        if (M.g(b, a[d])) {
          a = d;
          break a;
        }
        d += 2;
      }
    return a;
  }
  function Ye(a, b) {
    this.key = a;
    this.U = b;
    this.C = null;
    this.m = 166619935;
    this.D = 0;
  }
  h = Ye.prototype;
  h.kb = function (a, b) {
    switch (b) {
      case 0:
        return new Ye(0, this.key);
      case 1:
        return new Ye(1, this.U);
      default:
        return null;
    }
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.na = function (a, b) {
    return this.oa(null, b, null);
  };
  h.O = function (a, b, c) {
    return this.oa(null, b, c);
  };
  h.H = function (a, b) {
    if (0 === b) return this.key;
    if (1 === b) return this.U;
    throw Error("Index out of bounds");
  };
  h.oa = function (a, b, c) {
    return 0 === b ? this.key : 1 === b ? this.U : c;
  };
  h.Ib = function (a, b) {
    return new Z(null, 2, 5, Ze, [this.key, this.U], null).Ib(a, b);
  };
  h.W = function () {
    return null;
  };
  h.P = function () {
    return 2;
  };
  h.ac = function () {
    return this.key;
  };
  h.bc = function () {
    return this.U;
  };
  h.mb = function () {
    return this.U;
  };
  h.nb = function () {
    return new Z(null, 1, 5, Ze, [this.key], null);
  };
  h.zb = function () {
    return new qc([this.U, this.key], 0, null);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return null;
  };
  h.ea = function (a, b) {
    return Ec(this, b);
  };
  h.fa = function (a, b, c) {
    a: {
      a = this.P(null);
      var d = c;
      for (c = 0; ;)
        if (c < a) {
          var e = this.H(null, c);
          d = b.g ? b.g(d, e) : b.call(null, d, e);
          if (Cc(d)) {
            b = E(d);
            break a;
          }
          c += 1;
        } else {
          b = d;
          break a;
        }
    }
    return b;
  };
  h.Da = function (a, b, c) {
    return U.j(new Z(null, 2, 5, Ze, [this.key, this.U], null), b, c);
  };
  h.$a = function (a, b) {
    return 0 === b || 1 === b;
  };
  h.R = function () {
    return new qc([this.key, this.U], 0, null);
  };
  h.X = function (a, b) {
    return dd(new Z(null, 2, 5, Ze, [this.key, this.U], null), b);
  };
  h.aa = function (a, b) {
    return new Z(null, 3, 5, Ze, [this.key, this.U, b], null);
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return this.H(null, a);
  };
  h.g = function (a, b) {
    return this.oa(null, a, b);
  };
  function gf(a) {
    return null != a ? (a.m & 2048 || u === a.zc ? !0 : !1) : !1;
  }
  function vf(a, b, c) {
    this.i = a;
    this.o = b;
    this.ya = c;
    this.m = 32374990;
    this.D = 0;
  }
  h = vf.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.ya;
  };
  h.ba = function () {
    return this.o < this.i.length - 2 ? new vf(this.i, this.o + 2, null) : null;
  };
  h.P = function () {
    return (this.i.length - this.o) / 2;
  };
  h.V = function () {
    return xc(this);
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return new Ye(this.i[this.o], this.i[this.o + 1]);
  };
  h.ga = function () {
    return this.o < this.i.length - 2 ? new vf(this.i, this.o + 2, null) : tc;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.ya ? this : new vf(this.i, this.o, b);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  vf.prototype[Ja] = function () {
    return vc(this);
  };
  function wf(a, b) {
    this.i = a;
    this.o = 0;
    this.l = b;
  }
  wf.prototype.ia = function () {
    return this.o < this.l;
  };
  wf.prototype.next = function () {
    var a = new Ye(this.i[this.o], this.i[this.o + 1]);
    this.o += 2;
    return a;
  };
  function w(a, b, c, d) {
    this.u = a;
    this.l = b;
    this.i = c;
    this.C = d;
    this.m = 16647951;
    this.D = 139268;
  }
  h = w.prototype;
  h.kb = function (a, b) {
    a = uf(this.i, b);
    return -1 === a ? null : new Ye(this.i[a], this.i[a + 1]);
  };
  h.toString = function () {
    return bc(this);
  };
  h.keys = function () {
    return vc(xf.h ? xf.h(this) : xf.call(null, this));
  };
  h.entries = function () {
    return new sf(I(I(this)));
  };
  h.values = function () {
    return vc(yf.h ? yf.h(this) : yf.call(null, this));
  };
  h.has = function (a) {
    return sd(this, a);
  };
  h.get = function (a, b) {
    return this.O(null, a, b);
  };
  h.forEach = function (a) {
    for (var b = I(this), c = null, d = 0, e = 0; ;)
      if (e < d) {
        var f = c.H(null, e),
          g = S(f, 0, null);
        f = S(f, 1, null);
        a.g ? a.g(f, g) : a.call(null, f, g);
        e += 1;
      } else if ((b = I(b)))
        ld(b)
          ? ((c = Ub(b)), (b = Vb(b)), (g = c), (d = O(c)), (c = g))
          : ((c = J(b)),
            (g = S(c, 0, null)),
            (f = S(c, 1, null)),
            a.g ? a.g(f, g) : a.call(null, f, g),
            (b = K(b)),
            (c = null),
            (d = 0)),
          (e = 0);
      else return null;
  };
  h.na = function (a, b) {
    return this.O(null, b, null);
  };
  h.O = function (a, b, c) {
    a = uf(this.i, b);
    return -1 === a ? c : this.i[a + 1];
  };
  h.yb = function (a, b, c) {
    a = this.i.length;
    for (var d = 0; ;)
      if (d < a) {
        var e = this.i[d],
          f = this.i[d + 1];
        c = b.j ? b.j(c, e, f) : b.call(null, c, e, f);
        if (Cc(c)) return E(c);
        d += 2;
      } else return c;
  };
  h.qa = function () {
    return new wf(this.i, 2 * this.l);
  };
  h.W = function () {
    return this.u;
  };
  h.P = function () {
    return this.l;
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = zc(this));
  };
  h.S = function (a, b) {
    if (id(b) && !jd(b))
      if (((a = this.i.length), this.l === b.P(null)))
        for (var c = 0; ;)
          if (c < a) {
            var d = b.O(null, this.i[c], nd);
            if (d !== nd)
              if (M.g(this.i[c + 1], d)) c += 2;
              else return !1;
            else return !1;
          } else return !0;
      else return !1;
    else return !1;
  };
  h.bb = function () {
    return new zf(this.i.length, Ka(this.i));
  };
  h.Y = function () {
    return sb(le, this.u);
  };
  h.ea = function (a, b) {
    return Ad(this, b);
  };
  h.fa = function (a, b, c) {
    return Bd(this, b, c);
  };
  h.Hb = function (a, b) {
    if (0 <= uf(this.i, b)) {
      a = this.i.length;
      var c = a - 2;
      if (0 === c) return this.Y(null);
      c = Array(c);
      for (var d = 0, e = 0; ;) {
        if (d >= a) return new w(this.u, this.l - 1, c, null);
        M.g(b, this.i[d])
          ? (d += 2)
          : ((c[e] = this.i[d]),
            (c[e + 1] = this.i[d + 1]),
            (e += 2),
            (d += 2));
      }
    } else return this;
  };
  h.Da = function (a, b, c) {
    a = uf(this.i, b);
    if (-1 === a) {
      if (this.l < Af) {
        a = this.i;
        for (var d = a.length, e = Array(d + 2), f = 0; ;)
          if (f < d) (e[f] = a[f]), (f += 1);
          else break;
        e[d] = b;
        e[d + 1] = c;
        return new w(this.u, this.l + 1, e, null);
      }
      return sb(fb(Fe(Bf, this), b, c), this.u);
    }
    if (c === this.i[a + 1]) return this;
    b = Ka(this.i);
    b[a + 1] = c;
    return new w(this.u, this.l, b, null);
  };
  h.$a = function (a, b) {
    return -1 !== uf(this.i, b);
  };
  h.R = function () {
    var a = this.i;
    return 0 <= a.length - 2 ? new vf(a, 0, null) : null;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new w(b, this.l, this.i, this.C);
  };
  h.aa = function (a, b) {
    if (kd(b)) return this.Da(null, Wa(b, 0), Wa(b, 1));
    a = this;
    for (b = I(b); ;) {
      if (null == b) return a;
      var c = J(b);
      if (kd(c)) (a = fb(a, Wa(c, 0), Wa(c, 1))), (b = K(b));
      else
        throw Error(
          "conj on a map takes map entries or seqables of map entries"
        );
    }
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return this.na(null, a);
  };
  h.g = function (a, b) {
    return this.O(null, a, b);
  };
  var le = new w(null, 0, [], Ac),
    Af = 8;
  function Cf(a, b) {
    return a === b
      ? !0
      : a === b || (a instanceof H && b instanceof H && a.sa === b.sa)
        ? !0
        : M.g(a, b);
  }
  function Df(a) {
    for (var b = 0, c = 0; ;)
      if (b < a.length) {
        var d;
        a: for (d = 0; ;)
          if (d < b) {
            var e = Cf(a[b], a[d]);
            if (e) {
              d = e;
              break a;
            }
            d = 2 + d;
          } else {
            d = !1;
            break a;
          }
        c = d ? c : c + 2;
        b = 2 + b;
      } else return c;
  }
  function Ef(a, b) {
    var c = a.length - 1,
      d = I(b);
    b = Array(c + 2 * O(d));
    a = md(a, 0, b, 0, c);
    for (b = c; ;)
      if (d) {
        var e = J(d);
        a[b] = jb(e);
        a[b + 1] = kb(e);
        b = 2 + c;
        d = K(d);
      } else return a;
  }
  function Zc(a) {
    var b = a.length,
      c = 1 === (b & 1),
      d;
    if (!(d = c))
      a: for (d = 0; ;)
        if (d < a.length) {
          var e;
          b: for (e = 0; ;)
            if (e < d) {
              var f = Cf(a[d], a[e]);
              if (f) {
                e = f;
                break b;
              }
              e = 2 + e;
            } else {
              e = !1;
              break b;
            }
          if (e) {
            d = e;
            break a;
          }
          d = 2 + d;
        } else {
          d = !1;
          break a;
        }
    return d ? Ff(a, c) : new w(null, b / 2, a, null);
  }
  function Ff(a, b) {
    var c = b ? Ef(a, Fe(le, a[a.length - 1])) : a;
    a = Df(c);
    var d = c.length;
    if (a < d) {
      a = Array(a);
      for (var e = 0, f = 0; ;)
        if (e < d)
          (function () {
            for (var g = 0; ;)
              if (g < f) {
                var k = Cf(c[e], c[g]);
                if (k) return k;
                g = 2 + g;
              } else return !1;
          })()
            ? ((b = f), (e = 2 + e), (f = b))
            : ((b = (function () {
              for (var g = d - 2; ;)
                if (g >= e) {
                  if (Cf(c[e], c[g])) return g;
                  g -= 2;
                } else return g;
            })()),
              (a[f] = c[e]),
              (a[f + 1] = c[b + 1]),
              (b = 2 + f),
              (e = 2 + e),
              (f = b));
        else break;
      return new w(null, a.length / 2, a, null);
    }
    return new w(null, c.length / 2, c, null);
  }
  w.prototype[Ja] = function () {
    return vc(this);
  };
  function zf(a, b) {
    this.gb = {};
    this.Xa = a;
    this.i = b;
    this.m = 259;
    this.D = 56;
  }
  h = zf.prototype;
  h.P = function () {
    if (this.gb) return Gd(this.Xa);
    throw Error("count after persistent!");
  };
  h.na = function (a, b) {
    return this.O(null, b, null);
  };
  h.O = function (a, b, c) {
    if (this.gb) return (a = uf(this.i, b)), -1 === a ? c : this.i[a + 1];
    throw Error("lookup after persistent!");
  };
  h.fb = function (a, b) {
    if (this.gb) {
      if (gf(b))
        return this.eb(
          null,
          hf.h ? hf.h(b) : hf.call(null, b),
          jf.h ? jf.h(b) : jf.call(null, b)
        );
      if (kd(b))
        return this.eb(
          null,
          b.h ? b.h(0) : b.call(null, 0),
          b.h ? b.h(1) : b.call(null, 1)
        );
      a = I(b);
      for (b = this; ;) {
        var c = J(a);
        if (x(c))
          (a = K(a)),
            (b = Qb(
              b,
              hf.h ? hf.h(c) : hf.call(null, c),
              jf.h ? jf.h(c) : jf.call(null, c)
            ));
        else return b;
      }
    } else throw Error("conj! after persistent!");
  };
  h.ob = function () {
    if (this.gb) return (this.gb = !1), new w(null, Gd(this.Xa), this.i, null);
    throw Error("persistent! called twice");
  };
  h.eb = function (a, b, c) {
    if (this.gb) {
      a = uf(this.i, b);
      if (-1 === a) {
        if (this.Xa + 2 <= 2 * Af)
          return (this.Xa += 2), this.i.push(b), this.i.push(c), this;
        a = Gf.g ? Gf.g(this.Xa, this.i) : Gf.call(null, this.Xa, this.i);
        return Qb(a, b, c);
      }
      c !== this.i[a + 1] && (this.i[a + 1] = c);
      return this;
    }
    throw Error("assoc! after persistent!");
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return this.O(null, a, null);
  };
  h.g = function (a, b) {
    return this.O(null, a, b);
  };
  function Gf(a, b) {
    for (var c = Nb(Bf), d = 0; ;)
      if (d < a) (c = Qb(c, b[d], b[d + 1])), (d += 2);
      else return c;
  }
  function Hf() {
    this.U = !1;
  }
  function If(a, b, c) {
    a = Ka(a);
    a[b] = c;
    return a;
  }
  function Jf(a, b) {
    var c = Array(a.length - 2);
    md(a, 0, c, 0, 2 * b);
    md(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
    return c;
  }
  function Kf(a, b, c, d) {
    a = a.Wa(b);
    a.i[c] = d;
    return a;
  }
  function Lf(a, b, c) {
    for (var d = a.length, e = 0, f = c; ;)
      if (e < d) {
        c = a[e];
        if (null != c) {
          var g = a[e + 1];
          c = b.j ? b.j(f, c, g) : b.call(null, f, c, g);
        } else (c = a[e + 1]), (c = null != c ? c.ub(b, f) : f);
        if (Cc(c)) return c;
        e += 2;
        f = c;
      } else return f;
  }
  function Mf(a) {
    this.i = a;
    this.o = 0;
    this.wa = this.vb = null;
  }
  Mf.prototype.advance = function () {
    for (var a = this.i.length; ;)
      if (this.o < a) {
        var b = this.i[this.o],
          c = this.i[this.o + 1];
        null != b
          ? (b = this.vb = new Ye(b, c))
          : null != c
            ? ((b = $b(c)), (b = b.ia() ? (this.wa = b) : !1))
            : (b = !1);
        this.o += 2;
        if (b) return !0;
      } else return !1;
  };
  Mf.prototype.ia = function () {
    var a = null != this.vb;
    return a ? a : (a = null != this.wa) ? a : this.advance();
  };
  Mf.prototype.next = function () {
    if (null != this.vb) {
      var a = this.vb;
      this.vb = null;
      return a;
    }
    if (null != this.wa)
      return (a = this.wa.next()), this.wa.ia() || (this.wa = null), a;
    if (this.advance()) return this.next();
    throw Error("No such element");
  };
  Mf.prototype.remove = function () {
    return Error("Unsupported operation");
  };
  function Nf(a, b, c) {
    this.K = a;
    this.M = b;
    this.i = c;
    this.D = 131072;
    this.m = 0;
  }
  h = Nf.prototype;
  h.Wa = function (a) {
    if (a === this.K) return this;
    var b = Hd(this.M),
      c = Array(0 > b ? 4 : 2 * (b + 1));
    md(this.i, 0, c, 0, 2 * b);
    return new Nf(a, this.M, c);
  };
  h.sb = function () {
    return Of ? Of(this.i) : Pf.call(null, this.i);
  };
  h.ub = function (a, b) {
    return Lf(this.i, a, b);
  };
  h.Ga = function (a, b, c, d) {
    var e = 1 << ((b >>> a) & 31);
    if (0 === (this.M & e)) return d;
    var f = Hd(this.M & (e - 1));
    e = this.i[2 * f];
    f = this.i[2 * f + 1];
    return null == e ? f.Ga(a + 5, b, c, d) : Cf(c, e) ? f : d;
  };
  h.ua = function (a, b, c, d, e, f) {
    var g = 1 << ((c >>> b) & 31),
      k = Hd(this.M & (g - 1));
    if (0 === (this.M & g)) {
      var l = Hd(this.M);
      if (2 * l < this.i.length) {
        a = this.Wa(a);
        b = a.i;
        f.U = !0;
        c = 2 * (l - k);
        f = 2 * k + (c - 1);
        for (l = 2 * (k + 1) + (c - 1); 0 !== c;) (b[l] = b[f]), --l, --c, --f;
        b[2 * k] = d;
        b[2 * k + 1] = e;
        a.M |= g;
        return a;
      }
      if (16 <= l) {
        k = [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ];
        k[(c >>> b) & 31] = Qf.ua(a, b + 5, c, d, e, f);
        for (e = d = 0; ;)
          if (32 > d)
            0 === ((this.M >>> d) & 1)
              ? (d += 1)
              : ((k[d] =
                null != this.i[e]
                  ? Qf.ua(
                    a,
                    b + 5,
                    kc(this.i[e]),
                    this.i[e],
                    this.i[e + 1],
                    f
                  )
                  : this.i[e + 1]),
                (e += 2),
                (d += 1));
          else break;
        return new Rf(a, l + 1, k);
      }
      b = Array(2 * (l + 4));
      md(this.i, 0, b, 0, 2 * k);
      b[2 * k] = d;
      b[2 * k + 1] = e;
      md(this.i, 2 * k, b, 2 * (k + 1), 2 * (l - k));
      f.U = !0;
      a = this.Wa(a);
      a.i = b;
      a.M |= g;
      return a;
    }
    l = this.i[2 * k];
    g = this.i[2 * k + 1];
    if (null == l)
      return (
        (l = g.ua(a, b + 5, c, d, e, f)),
        l === g ? this : Kf(this, a, 2 * k + 1, l)
      );
    if (Cf(d, l)) return e === g ? this : Kf(this, a, 2 * k + 1, e);
    f.U = !0;
    f = b + 5;
    d = Sf ? Sf(a, f, l, g, c, d, e) : Tf.call(null, a, f, l, g, c, d, e);
    e = 2 * k;
    k = 2 * k + 1;
    a = this.Wa(a);
    a.i[e] = null;
    a.i[k] = d;
    return a;
  };
  h.ta = function (a, b, c, d, e) {
    var f = 1 << ((b >>> a) & 31),
      g = Hd(this.M & (f - 1));
    if (0 === (this.M & f)) {
      var k = Hd(this.M);
      if (16 <= k) {
        g = [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ];
        g[(b >>> a) & 31] = Qf.ta(a + 5, b, c, d, e);
        for (d = c = 0; ;)
          if (32 > c)
            0 === ((this.M >>> c) & 1)
              ? (c += 1)
              : ((g[c] =
                null != this.i[d]
                  ? Qf.ta(a + 5, kc(this.i[d]), this.i[d], this.i[d + 1], e)
                  : this.i[d + 1]),
                (d += 2),
                (c += 1));
          else break;
        return new Rf(null, k + 1, g);
      }
      a = Array(2 * (k + 1));
      md(this.i, 0, a, 0, 2 * g);
      a[2 * g] = c;
      a[2 * g + 1] = d;
      md(this.i, 2 * g, a, 2 * (g + 1), 2 * (k - g));
      e.U = !0;
      return new Nf(null, this.M | f, a);
    }
    var l = this.i[2 * g];
    f = this.i[2 * g + 1];
    if (null == l)
      return (
        (k = f.ta(a + 5, b, c, d, e)),
        k === f ? this : new Nf(null, this.M, If(this.i, 2 * g + 1, k))
      );
    if (Cf(c, l))
      return d === f ? this : new Nf(null, this.M, If(this.i, 2 * g + 1, d));
    e.U = !0;
    e = this.M;
    k = this.i;
    a += 5;
    a = Uf ? Uf(a, l, f, b, c, d) : Tf.call(null, a, l, f, b, c, d);
    c = 2 * g;
    g = 2 * g + 1;
    d = Ka(k);
    d[c] = null;
    d[g] = a;
    return new Nf(null, e, d);
  };
  h.rb = function (a, b, c, d) {
    var e = 1 << ((b >>> a) & 31);
    if (0 === (this.M & e)) return d;
    var f = Hd(this.M & (e - 1));
    e = this.i[2 * f];
    f = this.i[2 * f + 1];
    return null == e ? f.rb(a + 5, b, c, d) : Cf(c, e) ? new Ye(e, f) : d;
  };
  h.tb = function (a, b, c) {
    var d = 1 << ((b >>> a) & 31);
    if (0 === (this.M & d)) return this;
    var e = Hd(this.M & (d - 1)),
      f = this.i[2 * e],
      g = this.i[2 * e + 1];
    return null == f
      ? ((a = g.tb(a + 5, b, c)),
        a === g
          ? this
          : null != a
            ? new Nf(null, this.M, If(this.i, 2 * e + 1, a))
            : this.M === d
              ? null
              : new Nf(null, this.M ^ d, Jf(this.i, e)))
      : Cf(c, f)
        ? this.M === d
          ? null
          : new Nf(null, this.M ^ d, Jf(this.i, e))
        : this;
  };
  h.qa = function () {
    return new Mf(this.i);
  };
  var Qf = new Nf(null, 0, []);
  function Vf(a) {
    this.i = a;
    this.o = 0;
    this.wa = null;
  }
  Vf.prototype.ia = function () {
    for (var a = this.i.length; ;) {
      if (null != this.wa && this.wa.ia()) return !0;
      if (this.o < a) {
        var b = this.i[this.o];
        this.o += 1;
        null != b && (this.wa = $b(b));
      } else return !1;
    }
  };
  Vf.prototype.next = function () {
    if (this.ia()) return this.wa.next();
    throw Error("No such element");
  };
  Vf.prototype.remove = function () {
    return Error("Unsupported operation");
  };
  function Rf(a, b, c) {
    this.K = a;
    this.l = b;
    this.i = c;
    this.D = 131072;
    this.m = 0;
  }
  h = Rf.prototype;
  h.Wa = function (a) {
    return a === this.K ? this : new Rf(a, this.l, Ka(this.i));
  };
  h.sb = function () {
    return Wf ? Wf(this.i) : Xf.call(null, this.i);
  };
  h.ub = function (a, b) {
    for (var c = this.i.length, d = 0; ;)
      if (d < c) {
        var e = this.i[d];
        if (null != e) {
          b = e.ub(a, b);
          if (Cc(b)) return b;
          d += 1;
        } else d += 1;
      } else return b;
  };
  h.Ga = function (a, b, c, d) {
    var e = this.i[(b >>> a) & 31];
    return null != e ? e.Ga(a + 5, b, c, d) : d;
  };
  h.ua = function (a, b, c, d, e, f) {
    var g = (c >>> b) & 31,
      k = this.i[g];
    if (null == k)
      return (a = Kf(this, a, g, Qf.ua(a, b + 5, c, d, e, f))), (a.l += 1), a;
    b = k.ua(a, b + 5, c, d, e, f);
    return b === k ? this : Kf(this, a, g, b);
  };
  h.ta = function (a, b, c, d, e) {
    var f = (b >>> a) & 31,
      g = this.i[f];
    if (null == g)
      return new Rf(null, this.l + 1, If(this.i, f, Qf.ta(a + 5, b, c, d, e)));
    a = g.ta(a + 5, b, c, d, e);
    return a === g ? this : new Rf(null, this.l, If(this.i, f, a));
  };
  h.rb = function (a, b, c, d) {
    var e = this.i[(b >>> a) & 31];
    return null != e ? e.rb(a + 5, b, c, d) : d;
  };
  h.tb = function (a, b, c) {
    var d = (b >>> a) & 31,
      e = this.i[d];
    if (null != e) {
      a = e.tb(a + 5, b, c);
      if (a === e) d = this;
      else if (null == a)
        if (8 >= this.l)
          a: {
            e = this.i;
            a = e.length;
            b = Array(2 * (this.l - 1));
            c = 0;
            for (var f = 1, g = 0; ;)
              if (c < a)
                c !== d && null != e[c]
                  ? ((b[f] = e[c]), (f += 2), (g |= 1 << c), (c += 1))
                  : (c += 1);
              else {
                d = new Nf(null, g, b);
                break a;
              }
          }
        else d = new Rf(null, this.l - 1, If(this.i, d, a));
      else d = new Rf(null, this.l, If(this.i, d, a));
      return d;
    }
    return this;
  };
  h.qa = function () {
    return new Vf(this.i);
  };
  function Yf(a, b, c) {
    b *= 2;
    for (var d = 0; ;)
      if (d < b) {
        if (Cf(c, a[d])) return d;
        d += 2;
      } else return -1;
  }
  function Zf(a, b, c, d) {
    this.K = a;
    this.Ba = b;
    this.l = c;
    this.i = d;
    this.D = 131072;
    this.m = 0;
  }
  h = Zf.prototype;
  h.Wa = function (a) {
    if (a === this.K) return this;
    var b = Array(2 * (this.l + 1));
    md(this.i, 0, b, 0, 2 * this.l);
    return new Zf(a, this.Ba, this.l, b);
  };
  h.sb = function () {
    return Of ? Of(this.i) : Pf.call(null, this.i);
  };
  h.ub = function (a, b) {
    return Lf(this.i, a, b);
  };
  h.Ga = function (a, b, c, d) {
    a = Yf(this.i, this.l, c);
    return 0 > a ? d : Cf(c, this.i[a]) ? this.i[a + 1] : d;
  };
  h.ua = function (a, b, c, d, e, f) {
    if (c === this.Ba) {
      b = Yf(this.i, this.l, d);
      if (-1 === b) {
        if (this.i.length > 2 * this.l)
          return (
            (b = 2 * this.l),
            (c = 2 * this.l + 1),
            (a = this.Wa(a)),
            (a.i[b] = d),
            (a.i[c] = e),
            (f.U = !0),
            (a.l += 1),
            a
          );
        c = this.i.length;
        b = Array(c + 2);
        md(this.i, 0, b, 0, c);
        b[c] = d;
        b[c + 1] = e;
        f.U = !0;
        d = this.l + 1;
        a === this.K
          ? ((this.i = b), (this.l = d), (a = this))
          : (a = new Zf(this.K, this.Ba, d, b));
        return a;
      }
      return this.i[b + 1] === e ? this : Kf(this, a, b + 1, e);
    }
    return new Nf(a, 1 << ((this.Ba >>> b) & 31), [null, this, null, null]).ua(
      a,
      b,
      c,
      d,
      e,
      f
    );
  };
  h.ta = function (a, b, c, d, e) {
    return b === this.Ba
      ? ((a = Yf(this.i, this.l, c)),
        -1 === a
          ? ((a = 2 * this.l),
            (b = Array(a + 2)),
            md(this.i, 0, b, 0, a),
            (b[a] = c),
            (b[a + 1] = d),
            (e.U = !0),
            new Zf(null, this.Ba, this.l + 1, b))
          : M.g(this.i[a + 1], d)
            ? this
            : new Zf(null, this.Ba, this.l, If(this.i, a + 1, d)))
      : new Nf(null, 1 << ((this.Ba >>> a) & 31), [null, this]).ta(
        a,
        b,
        c,
        d,
        e
      );
  };
  h.rb = function (a, b, c, d) {
    a = Yf(this.i, this.l, c);
    return 0 > a ? d : Cf(c, this.i[a]) ? new Ye(this.i[a], this.i[a + 1]) : d;
  };
  h.tb = function (a, b, c) {
    a = Yf(this.i, this.l, c);
    return -1 === a
      ? this
      : 1 === this.l
        ? null
        : new Zf(null, this.Ba, this.l - 1, Jf(this.i, Gd(a)));
  };
  h.qa = function () {
    return new Mf(this.i);
  };
  function Tf(a) {
    switch (arguments.length) {
      case 6:
        return Uf(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5]
        );
      case 7:
        return Sf(
          arguments[0],
          arguments[1],
          arguments[2],
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6]
        );
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  function Uf(a, b, c, d, e, f) {
    var g = kc(b);
    if (g === d) return new Zf(null, g, 2, [b, c, e, f]);
    var k = new Hf();
    return Qf.ta(a, g, b, c, k).ta(a, d, e, f, k);
  }
  function Sf(a, b, c, d, e, f, g) {
    var k = kc(c);
    if (k === e) return new Zf(null, k, 2, [c, d, f, g]);
    var l = new Hf();
    return Qf.ua(a, b, k, c, d, l).ua(a, b, e, f, g, l);
  }
  function $f(a, b, c, d, e) {
    this.u = a;
    this.xa = b;
    this.o = c;
    this.F = d;
    this.C = e;
    this.m = 32374988;
    this.D = 0;
  }
  h = $f.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    if (null == this.F) {
      var a = this.xa,
        b = this.o + 2;
      return ag ? ag(a, b, null) : Pf.call(null, a, b, null);
    }
    a = this.xa;
    b = this.o;
    var c = K(this.F);
    return ag ? ag(a, b, c) : Pf.call(null, a, b, c);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return null == this.F
      ? new Ye(this.xa[this.o], this.xa[this.o + 1])
      : J(this.F);
  };
  h.ga = function () {
    var a = this,
      b =
        null == a.F
          ? (function () {
            var c = a.xa,
              d = a.o + 2;
            return ag ? ag(c, d, null) : Pf.call(null, c, d, null);
          })()
          : (function () {
            var c = a.xa,
              d = a.o,
              e = K(a.F);
            return ag ? ag(c, d, e) : Pf.call(null, c, d, e);
          })();
    return null != b ? b : tc;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new $f(b, this.xa, this.o, this.F, this.C);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  $f.prototype[Ja] = function () {
    return vc(this);
  };
  function Pf(a) {
    switch (arguments.length) {
      case 1:
        return Of(arguments[0]);
      case 3:
        return ag(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  function Of(a) {
    return ag(a, 0, null);
  }
  function ag(a, b, c) {
    if (null == c)
      for (c = a.length; ;)
        if (b < c) {
          if (null != a[b]) return new $f(null, a, b, null, null);
          var d = a[b + 1];
          if (x(d) && ((d = d.sb()), x(d)))
            return new $f(null, a, b + 2, d, null);
          b += 2;
        } else return null;
    else return new $f(null, a, b, c, null);
  }
  function bg(a, b, c, d, e) {
    this.u = a;
    this.xa = b;
    this.o = c;
    this.F = d;
    this.C = e;
    this.m = 32374988;
    this.D = 0;
  }
  h = bg.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    var a = this.xa,
      b = this.o,
      c = K(this.F);
    return cg ? cg(a, b, c) : Xf.call(null, a, b, c);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return J(this.F);
  };
  h.ga = function () {
    var a = this.xa;
    var b = this.o,
      c = K(this.F);
    a = cg ? cg(a, b, c) : Xf.call(null, a, b, c);
    return null != a ? a : tc;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.u ? this : new bg(b, this.xa, this.o, this.F, this.C);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  bg.prototype[Ja] = function () {
    return vc(this);
  };
  function Xf(a) {
    switch (arguments.length) {
      case 1:
        return Wf(arguments[0]);
      case 3:
        return cg(arguments[0], arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  function Wf(a) {
    return cg(a, 0, null);
  }
  function cg(a, b, c) {
    if (null == c)
      for (c = a.length; ;)
        if (b < c) {
          var d = a[b];
          if (x(d) && ((d = d.sb()), x(d)))
            return new bg(null, a, b + 1, d, null);
          b += 1;
        } else return null;
    else return new bg(null, a, b, c, null);
  }
  function dg(a, b) {
    this.ka = a;
    this.Qb = b;
    this.Kb = !1;
  }
  dg.prototype.ia = function () {
    return !this.Kb || this.Qb.ia();
  };
  dg.prototype.next = function () {
    if (this.Kb) return this.Qb.next();
    this.Kb = !0;
    return new Ye(null, this.ka);
  };
  dg.prototype.remove = function () {
    return Error("Unsupported operation");
  };
  function eg(a, b, c, d, e, f) {
    this.u = a;
    this.l = b;
    this.root = c;
    this.ja = d;
    this.ka = e;
    this.C = f;
    this.m = 16123663;
    this.D = 139268;
  }
  h = eg.prototype;
  h.kb = function (a, b) {
    return null == b
      ? this.ja
        ? new Ye(null, this.ka)
        : null
      : null == this.root
        ? null
        : this.root.rb(0, kc(b), b, null);
  };
  h.toString = function () {
    return bc(this);
  };
  h.keys = function () {
    return vc(xf.h ? xf.h(this) : xf.call(null, this));
  };
  h.entries = function () {
    return new sf(I(I(this)));
  };
  h.values = function () {
    return vc(yf.h ? yf.h(this) : yf.call(null, this));
  };
  h.has = function (a) {
    return sd(this, a);
  };
  h.get = function (a, b) {
    return this.O(null, a, b);
  };
  h.forEach = function (a) {
    for (var b = I(this), c = null, d = 0, e = 0; ;)
      if (e < d) {
        var f = c.H(null, e),
          g = S(f, 0, null);
        f = S(f, 1, null);
        a.g ? a.g(f, g) : a.call(null, f, g);
        e += 1;
      } else if ((b = I(b)))
        ld(b)
          ? ((c = Ub(b)), (b = Vb(b)), (g = c), (d = O(c)), (c = g))
          : ((c = J(b)),
            (g = S(c, 0, null)),
            (f = S(c, 1, null)),
            a.g ? a.g(f, g) : a.call(null, f, g),
            (b = K(b)),
            (c = null),
            (d = 0)),
          (e = 0);
      else return null;
  };
  h.na = function (a, b) {
    return this.O(null, b, null);
  };
  h.O = function (a, b, c) {
    return null == b
      ? this.ja
        ? this.ka
        : c
      : null == this.root
        ? c
        : this.root.Ga(0, kc(b), b, c);
  };
  h.yb = function (a, b, c) {
    a = this.ja
      ? b.j
        ? b.j(c, null, this.ka)
        : b.call(null, c, null, this.ka)
      : c;
    Cc(a)
      ? (b = E(a))
      : null != this.root
        ? ((b = this.root.ub(b, a)),
          (b = Cc(b) ? (Dc.h ? Dc.h(b) : Dc.call(null, b)) : b))
        : (b = a);
    return b;
  };
  h.qa = function () {
    var a = this.root ? $b(this.root) : ne();
    return this.ja ? new dg(this.ka, a) : a;
  };
  h.W = function () {
    return this.u;
  };
  h.P = function () {
    return this.l;
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = zc(this));
  };
  h.S = function (a, b) {
    return rf(this, b);
  };
  h.bb = function () {
    return new fg(this.root, this.l, this.ja, this.ka);
  };
  h.Y = function () {
    return sb(Bf, this.u);
  };
  h.Hb = function (a, b) {
    if (null == b)
      return this.ja
        ? new eg(this.u, this.l - 1, this.root, !1, null, null)
        : this;
    if (null == this.root) return this;
    a = this.root.tb(0, kc(b), b);
    return a === this.root
      ? this
      : new eg(this.u, this.l - 1, a, this.ja, this.ka, null);
  };
  h.Da = function (a, b, c) {
    if (null == b)
      return this.ja && c === this.ka
        ? this
        : new eg(this.u, this.ja ? this.l : this.l + 1, this.root, !0, c, null);
    a = new Hf();
    b = (null == this.root ? Qf : this.root).ta(0, kc(b), b, c, a);
    return b === this.root
      ? this
      : new eg(this.u, a.U ? this.l + 1 : this.l, b, this.ja, this.ka, null);
  };
  h.$a = function (a, b) {
    return null == b
      ? this.ja
      : null == this.root
        ? !1
        : this.root.Ga(0, kc(b), b, nd) !== nd;
  };
  h.R = function () {
    if (0 < this.l) {
      var a = null != this.root ? this.root.sb() : null;
      return this.ja ? Pc(new Ye(null, this.ka), a) : a;
    }
    return null;
  };
  h.X = function (a, b) {
    return b === this.u
      ? this
      : new eg(b, this.l, this.root, this.ja, this.ka, this.C);
  };
  h.aa = function (a, b) {
    if (kd(b)) return this.Da(null, Wa(b, 0), Wa(b, 1));
    a = this;
    for (b = I(b); ;) {
      if (null == b) return a;
      var c = J(b);
      if (kd(c)) (a = fb(a, Wa(c, 0), Wa(c, 1))), (b = K(b));
      else
        throw Error(
          "conj on a map takes map entries or seqables of map entries"
        );
    }
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return this.na(null, a);
  };
  h.g = function (a, b) {
    return this.O(null, a, b);
  };
  var Bf = new eg(null, 0, null, !1, null, Ac);
  function gg(a, b) {
    for (var c = a.length, d = 0, e = Nb(Bf); ;)
      if (d < c) {
        if (b.length <= d)
          throw Error(["No value supplied for key: ", A.h(a[d])].join(""));
        var f = d + 1;
        e = Qb(e, a[d], b[d]);
        d = f;
      } else return Pb(e);
  }
  eg.prototype[Ja] = function () {
    return vc(this);
  };
  function fg(a, b, c, d) {
    this.K = {};
    this.root = a;
    this.count = b;
    this.ja = c;
    this.ka = d;
    this.m = 259;
    this.D = 56;
  }
  function hg(a, b, c) {
    if (a.K) {
      if (null == b)
        a.ka !== c && (a.ka = c), a.ja || ((a.count += 1), (a.ja = !0));
      else {
        var d = new Hf();
        b = (null == a.root ? Qf : a.root).ua(a.K, 0, kc(b), b, c, d);
        b !== a.root && (a.root = b);
        d.U && (a.count += 1);
      }
      return a;
    }
    throw Error("assoc! after persistent!");
  }
  h = fg.prototype;
  h.P = function () {
    if (this.K) return this.count;
    throw Error("count after persistent!");
  };
  h.na = function (a, b) {
    return null == b
      ? this.ja
        ? this.ka
        : null
      : null == this.root
        ? null
        : this.root.Ga(0, kc(b), b);
  };
  h.O = function (a, b, c) {
    return null == b
      ? this.ja
        ? this.ka
        : c
      : null == this.root
        ? c
        : this.root.Ga(0, kc(b), b, c);
  };
  h.fb = function (a, b) {
    a: if (this.K)
      if (gf(b))
        a = hg(
          this,
          hf.h ? hf.h(b) : hf.call(null, b),
          jf.h ? jf.h(b) : jf.call(null, b)
        );
      else if (kd(b))
        a = hg(
          this,
          b.h ? b.h(0) : b.call(null, 0),
          b.h ? b.h(1) : b.call(null, 1)
        );
      else
        for (a = I(b), b = this; ;) {
          var c = J(a);
          if (x(c))
            (a = K(a)),
              (b = hg(
                b,
                hf.h ? hf.h(c) : hf.call(null, c),
                jf.h ? jf.h(c) : jf.call(null, c)
              ));
          else {
            a = b;
            break a;
          }
        }
    else throw Error("conj! after persistent");
    return a;
  };
  h.ob = function () {
    if (this.K) {
      this.K = null;
      var a = new eg(null, this.count, this.root, this.ja, this.ka, null);
    } else throw Error("persistent! called twice");
    return a;
  };
  h.eb = function (a, b, c) {
    return hg(this, b, c);
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return this.na(null, a);
  };
  h.g = function (a, b) {
    return this.O(null, a, b);
  };
  var ig = function ig(a) {
    for (var c = [], d = arguments.length, e = 0; ;)
      if (e < d) c.push(arguments[e]), (e += 1);
      else break;
    return ig.s(0 < c.length ? new qc(c.slice(0), 0, null) : null);
  };
  ig.s = function (a) {
    a = a instanceof qc && 0 === a.o ? a.i : La(a);
    var b = a.length;
    if (!rd(b)) throw Error(["Argument must be an integer: ", A.h(b)].join(""));
    if (0 !== (b & 1))
      throw Error(["No value supplied for key: ", A.h(Tc(a))].join(""));
    return Zc(a);
  };
  ig.J = 0;
  ig.I = function (a) {
    return this.s(I(a));
  };
  function jg(a, b) {
    this.G = a;
    this.ya = b;
    this.m = 32374988;
    this.D = 0;
  }
  h = jg.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.ya;
  };
  h.ba = function () {
    var a = (
      null != this.G
        ? this.G.m & 128 || u === this.G.lb || (this.G.m ? 0 : y($a, this.G))
        : y($a, this.G)
    )
      ? this.G.ba()
      : K(this.G);
    return null == a ? null : new jg(a, null);
  };
  h.V = function () {
    return xc(this);
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return this.G.da(null).key;
  };
  h.ga = function () {
    var a = (
      null != this.G
        ? this.G.m & 128 || u === this.G.lb || (this.G.m ? 0 : y($a, this.G))
        : y($a, this.G)
    )
      ? this.G.ba()
      : K(this.G);
    return null != a ? new jg(a, null) : tc;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.ya ? this : new jg(this.G, b);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  jg.prototype[Ja] = function () {
    return vc(this);
  };
  function xf(a) {
    return (a = I(a)) ? new jg(a, null) : null;
  }
  function hf(a) {
    return jb(a);
  }
  function kg(a, b) {
    this.G = a;
    this.ya = b;
    this.m = 32374988;
    this.D = 0;
  }
  h = kg.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.W = function () {
    return this.ya;
  };
  h.ba = function () {
    var a = (
      null != this.G
        ? this.G.m & 128 || u === this.G.lb || (this.G.m ? 0 : y($a, this.G))
        : y($a, this.G)
    )
      ? this.G.ba()
      : K(this.G);
    return null == a ? null : new kg(a, null);
  };
  h.V = function () {
    return xc(this);
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    return Sc(b, c, this);
  };
  h.da = function () {
    return this.G.da(null).U;
  };
  h.ga = function () {
    var a = (
      null != this.G
        ? this.G.m & 128 || u === this.G.lb || (this.G.m ? 0 : y($a, this.G))
        : y($a, this.G)
    )
      ? this.G.ba()
      : K(this.G);
    return null != a ? new kg(a, null) : tc;
  };
  h.R = function () {
    return this;
  };
  h.X = function (a, b) {
    return b === this.ya ? this : new kg(this.G, b);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  kg.prototype[Ja] = function () {
    return vc(this);
  };
  function yf(a) {
    return (a = I(a)) ? new kg(a, null) : null;
  }
  function jf(a) {
    return kb(a);
  }
  var lg = function lg(a) {
    for (var c = [], d = arguments.length, e = 0; ;)
      if (e < d) c.push(arguments[e]), (e += 1);
      else break;
    return lg.s(0 < c.length ? new qc(c.slice(0), 0, null) : null);
  };
  lg.s = function (a) {
    return x(pe(Ed, a))
      ? Cd(function (b, c) {
        return Uc.g(x(b) ? b : le, c);
      }, a)
      : null;
  };
  lg.J = 0;
  lg.I = function (a) {
    return this.s(I(a));
  };
  function mg(a, b) {
    var c = le;
    for (b = I(b); ;)
      if (b) {
        var d = J(b),
          e = F.j(a, d, ng);
        c = me(e, ng) ? U.j(c, d, e) : c;
        b = K(b);
      } else return sb(c, ed(a));
  }
  function og(a) {
    this.hb = a;
  }
  og.prototype.ia = function () {
    return this.hb.ia();
  };
  og.prototype.next = function () {
    if (this.hb.ia()) return this.hb.next().key;
    throw Error("No such element");
  };
  og.prototype.remove = function () {
    return Error("Unsupported operation");
  };
  function pg(a, b, c) {
    this.u = a;
    this.Fa = b;
    this.C = c;
    this.m = 15077647;
    this.D = 139268;
  }
  h = pg.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.keys = function () {
    return vc(I(this));
  };
  h.entries = function () {
    return new tf(I(I(this)));
  };
  h.values = function () {
    return vc(I(this));
  };
  h.has = function (a) {
    return sd(this, a);
  };
  h.forEach = function (a) {
    for (var b = I(this), c = null, d = 0, e = 0; ;)
      if (e < d) {
        var f = c.H(null, e),
          g = S(f, 0, null);
        f = S(f, 1, null);
        a.g ? a.g(f, g) : a.call(null, f, g);
        e += 1;
      } else if ((b = I(b)))
        ld(b)
          ? ((c = Ub(b)), (b = Vb(b)), (g = c), (d = O(c)), (c = g))
          : ((c = J(b)),
            (g = S(c, 0, null)),
            (f = S(c, 1, null)),
            a.g ? a.g(f, g) : a.call(null, f, g),
            (b = K(b)),
            (c = null),
            (d = 0)),
          (e = 0);
      else return null;
  };
  h.na = function (a, b) {
    return this.O(null, b, null);
  };
  h.O = function (a, b, c) {
    a = gb(this.Fa, b);
    return x(a) ? jb(a) : c;
  };
  h.qa = function () {
    return new og($b(this.Fa));
  };
  h.W = function () {
    return this.u;
  };
  h.P = function () {
    return Qa(this.Fa);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = zc(this));
  };
  h.S = function (a, b) {
    if ((a = gd(b)))
      if ((a = O(this) === O(b)))
        try {
          return Dd(function (c, d) {
            return (c = sd(b, d)) ? c : new Bc(!1);
          }, this.Fa);
        } catch (c) {
          if (c instanceof Error) return !1;
          throw c;
        }
      else return a;
    else return a;
  };
  h.bb = function () {
    return new qg(Nb(this.Fa));
  };
  h.Y = function () {
    return sb(rg, this.u);
  };
  h.R = function () {
    return xf(this.Fa);
  };
  h.X = function (a, b) {
    return b === this.u ? this : new pg(b, this.Fa, this.C);
  };
  h.aa = function (a, b) {
    return new pg(this.u, U.j(this.Fa, b, null), null);
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return this.na(null, a);
  };
  h.g = function (a, b) {
    return this.O(null, a, b);
  };
  var rg = new pg(null, le, Ac);
  pg.prototype[Ja] = function () {
    return vc(this);
  };
  function qg(a) {
    this.Ya = a;
    this.D = 136;
    this.m = 259;
  }
  h = qg.prototype;
  h.fb = function (a, b) {
    this.Ya = Qb(this.Ya, b, null);
    return this;
  };
  h.ob = function () {
    return new pg(null, Pb(this.Ya), null);
  };
  h.P = function () {
    return O(this.Ya);
  };
  h.na = function (a, b) {
    return this.O(null, b, null);
  };
  h.O = function (a, b, c) {
    return bb(this.Ya, b, nd) === nd ? c : b;
  };
  h.call = function (a) {
    switch (arguments.length - 1) {
      case 1:
        return this.h(arguments[1]);
      case 2:
        return this.g(arguments[1], arguments[2]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length - 1)].join(""));
    }
  };
  h.apply = function (a, b) {
    return this.call.apply(this, [this].concat(Ka(b)));
  };
  h.h = function (a) {
    return bb(this.Ya, a, nd) === nd ? null : a;
  };
  h.g = function (a, b) {
    return bb(this.Ya, a, nd) === nd ? b : a;
  };
  function sg(a) {
    if (gd(a)) return dd(a, null);
    a = I(a);
    if (null == a) return rg;
    if (a instanceof qc && 0 === a.o) {
      a = a.i;
      for (var b = a.length, c = Nb(rg), d = 0; ;)
        if (d < b) Ob(c, a[d]), (d += 1);
        else break;
      return Pb(c);
    }
    for (c = Nb(rg); ;)
      if (null != a) (b = K(a)), (c = Ob(c, D(a))), (a = b);
      else return Pb(c);
  }
  function Od(a) {
    if (null != a && (a.D & 4096 || u === a.dc)) return a.name;
    if ("string" === typeof a) return a;
    throw Error(["Doesn't support name: ", A.h(a)].join(""));
  }
  function tg(a, b) {
    var c = Nb(le);
    a = I(a);
    for (b = I(b); ;)
      if (a && b) {
        var d = J(a),
          e = J(b);
        c = Qb(c, d, e);
        a = K(a);
        b = K(b);
      } else return Pb(c);
  }
  function ug(a, b, c) {
    this.start = a;
    this.step = b;
    this.count = c;
    this.m = 82;
    this.D = 0;
  }
  h = ug.prototype;
  h.P = function () {
    return this.count;
  };
  h.da = function () {
    return this.start;
  };
  h.H = function (a, b) {
    return this.start + b * this.step;
  };
  h.oa = function (a, b, c) {
    return 0 <= b && b < this.count ? this.start + b * this.step : c;
  };
  h.Fb = function () {
    if (1 >= this.count) throw Error("-drop-first of empty chunk");
    return new ug(this.start + this.step, this.step, this.count - 1);
  };
  function vg(a, b, c) {
    this.o = a;
    this.end = b;
    this.step = c;
  }
  vg.prototype.ia = function () {
    return 0 < this.step ? this.o < this.end : this.o > this.end;
  };
  vg.prototype.next = function () {
    var a = this.o;
    this.o += this.step;
    return a;
  };
  function wg(a, b, c, d, e, f, g) {
    this.u = a;
    this.start = b;
    this.end = c;
    this.step = d;
    this.N = e;
    this.Aa = f;
    this.C = g;
    this.m = 32375006;
    this.D = 140800;
  }
  h = wg.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.qb = function () {
    if (null == this.N) {
      var a = this.P(null);
      32 < a
        ? ((this.Aa = new wg(
          null,
          this.start + 32 * this.step,
          this.end,
          this.step,
          null,
          null,
          null
        )),
          (this.N = new ug(this.start, this.step, 32)))
        : (this.N = new ug(this.start, this.step, a));
    }
  };
  h.H = function (a, b) {
    if (0 <= b && b < this.P(null)) return this.start + b * this.step;
    if (0 <= b && this.start > this.end && 0 === this.step) return this.start;
    throw Error("Index out of bounds");
  };
  h.oa = function (a, b, c) {
    return 0 <= b && b < this.P(null)
      ? this.start + b * this.step
      : 0 <= b && this.start > this.end && 0 === this.step
        ? this.start
        : c;
  };
  h.qa = function () {
    return new vg(this.start, this.end, this.step);
  };
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return 0 < this.step
      ? this.start + this.step < this.end
        ? new wg(
          null,
          this.start + this.step,
          this.end,
          this.step,
          null,
          null,
          null
        )
        : null
      : this.start + this.step > this.end
        ? new wg(
          null,
          this.start + this.step,
          this.end,
          this.step,
          null,
          null,
          null
        )
        : null;
  };
  h.P = function () {
    return Math.ceil((this.end - this.start) / this.step);
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Ec(this, b);
  };
  h.fa = function (a, b, c) {
    for (a = this.start; ;)
      if (0 < this.step ? a < this.end : a > this.end) {
        c = b.g ? b.g(c, a) : b.call(null, c, a);
        if (Cc(c)) return E(c);
        a += this.step;
      } else return c;
  };
  h.da = function () {
    return this.start;
  };
  h.ga = function () {
    var a = this.ba();
    return null == a ? tc : a;
  };
  h.R = function () {
    return this;
  };
  h.ib = function () {
    this.qb();
    return this.N;
  };
  h.Ea = function () {
    this.qb();
    return null == this.Aa ? tc : this.Aa;
  };
  h.X = function (a, b) {
    return b === this.u
      ? this
      : new wg(b, this.start, this.end, this.step, this.N, this.Aa, this.C);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  h.xb = function () {
    return I(this.Ea(null));
  };
  wg.prototype[Ja] = function () {
    return vc(this);
  };
  function xg(a, b, c, d, e, f, g) {
    this.u = a;
    this.start = b;
    this.end = c;
    this.step = d;
    this.N = e;
    this.Aa = f;
    this.C = g;
    this.D = 140800;
    this.m = 32374988;
  }
  h = xg.prototype;
  h.toString = function () {
    return bc(this);
  };
  h.indexOf = (function () {
    var a = null;
    a = function (b, c) {
      switch (arguments.length) {
        case 1:
          return N(this, b, 0);
        case 2:
          return N(this, b, c);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    a.h = function (b) {
      return N(this, b, 0);
    };
    a.g = function (b, c) {
      return N(this, b, c);
    };
    return a;
  })();
  h.lastIndexOf = (function () {
    function a(c) {
      return P(this, c, O(this));
    }
    var b = null;
    b = function (c, d) {
      switch (arguments.length) {
        case 1:
          return a.call(this, c);
        case 2:
          return P(this, c, d);
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.h = a;
    b.g = function (c, d) {
      return P(this, c, d);
    };
    return b;
  })();
  h.qb = function () {
    if (null == this.N) {
      var a = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ];
      a: {
        var b = 0;
        for (var c = this.start; ;)
          if (32 > b) {
            if (
              ((a[b] = c),
                (b += 1),
                (c += this.step),
                !(0 < this.step ? c < this.end : c > this.end))
            ) {
              b = this.N = new Sd(a, 0, b);
              break a;
            }
          } else {
            b = c;
            break a;
          }
      }
      null == this.N &&
        ((this.N = new Sd(a, 0, 32)),
          (0 < this.step ? b < this.end : b > this.end) &&
          (this.Aa = new xg(null, b, this.end, this.step, null, null, null)));
    }
  };
  h.qa = function () {
    return new vg(this.start, this.end, this.step);
  };
  h.W = function () {
    return this.u;
  };
  h.ba = function () {
    return 0 < this.step
      ? this.start + this.step < this.end
        ? new xg(
          null,
          this.start + this.step,
          this.end,
          this.step,
          null,
          null,
          null
        )
        : null
      : this.start + this.step > this.end
        ? new xg(
          null,
          this.start + this.step,
          this.end,
          this.step,
          null,
          null,
          null
        )
        : null;
  };
  h.V = function () {
    var a = this.C;
    return null != a ? a : (this.C = a = xc(this));
  };
  h.S = function (a, b) {
    return Oc(this, b);
  };
  h.Y = function () {
    return tc;
  };
  h.ea = function (a, b) {
    return Qc(b, this);
  };
  h.fa = function (a, b, c) {
    for (a = this.start; ;)
      if (0 < this.step ? a < this.end : a > this.end) {
        c = b.g ? b.g(c, a) : b.call(null, c, a);
        if (Cc(c)) return E(c);
        a += this.step;
      } else return c;
  };
  h.da = function () {
    return this.start;
  };
  h.ga = function () {
    var a = this.ba();
    return null == a ? tc : a;
  };
  h.R = function () {
    return this;
  };
  h.ib = function () {
    this.qb();
    return this.N;
  };
  h.Ea = function () {
    this.qb();
    return null == this.Aa ? tc : this.Aa;
  };
  h.X = function (a, b) {
    return b === this.u
      ? this
      : new xg(b, this.start, this.end, this.step, this.N, this.Aa, this.C);
  };
  h.aa = function (a, b) {
    return Pc(b, this);
  };
  h.xb = function () {
    return I(this.Ea(null));
  };
  xg.prototype[Ja] = function () {
    return vc(this);
  };
  function yg() {
    var a = O(zg);
    return Ag(0, a);
  }
  function Ag(a, b) {
    return b <= a
      ? tc
      : rd(a) && rd(b) && rd(1)
        ? new wg(null, a, b, 1, null, null, null)
        : new xg(null, a, b, 1, null, null, null);
  }
  function Bg(a) {
    a: for (var b = a; ;)
      if ((b = I(b))) b = K(b);
      else break a;
    return a;
  }
  function Cg(a, b, c, d, e, f, g) {
    var k = va;
    va = null == va ? null : va - 1;
    try {
      if (null != va && 0 > va) return Hb(a, "#");
      Hb(a, c);
      if (0 === Ca.h(f))
        I(g) &&
          Hb(
            a,
            (function () {
              var v = Fg.h(f);
              return x(v) ? v : "...";
            })()
          );
      else {
        if (I(g)) {
          var l = J(g);
          b.j ? b.j(l, a, f) : b.call(null, l, a, f);
        }
        for (var m = K(g), n = Ca.h(f) - 1; ;)
          if (!m || (null != n && 0 === n)) {
            I(m) &&
              0 === n &&
              (Hb(a, d),
                Hb(
                  a,
                  (function () {
                    var v = Fg.h(f);
                    return x(v) ? v : "...";
                  })()
                ));
            break;
          } else {
            Hb(a, d);
            var q = J(m);
            c = a;
            g = f;
            b.j ? b.j(q, c, g) : b.call(null, q, c, g);
            var r = K(m);
            c = n - 1;
            m = r;
            n = c;
          }
      }
      return Hb(a, e);
    } finally {
      va = k;
    }
  }
  function Gg(a, b) {
    b = I(b);
    for (var c = null, d = 0, e = 0; ;)
      if (e < d) {
        var f = c.H(null, e);
        Hb(a, f);
        e += 1;
      } else if ((b = I(b)))
        (c = b),
          ld(c)
            ? ((b = Ub(c)), (d = Vb(c)), (c = b), (f = O(b)), (b = d), (d = f))
            : ((f = J(c)), Hb(a, f), (b = K(c)), (c = null), (d = 0)),
          (e = 0);
      else return null;
  }
  var Hg = {
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
  };
  function Ig(a) {
    return [
      '"',
      A.h(
        a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function (b) {
          return Hg[b];
        })
      ),
      '"',
    ].join("");
  }
  function Jg(a, b) {
    return (a = qd(F.g(a, Aa)))
      ? (a = null != b ? (b.m & 131072 || u === b.cc ? !0 : !1) : !1)
        ? null != ed(b)
        : a
      : a;
  }
  function Kg(a, b, c) {
    if (null == a) return Hb(b, "nil");
    if (Jg(c, a)) {
      Hb(b, "^");
      var d = ed(a);
      Lg.j ? Lg.j(d, b, c) : Lg.call(null, d, b, c);
      Hb(b, " ");
    }
    if (a.Pb) return a.mc(b);
    if (
      null != a
        ? a.m & 2147483648 || u === a.ca || (a.m ? 0 : y(Ib, a))
        : y(Ib, a)
    )
      return Jb(a, b, c);
    if (!0 === a || !1 === a) return Hb(b, A.h(a));
    if ("number" === typeof a)
      return Hb(
        b,
        isNaN(a)
          ? "##NaN"
          : a === Number.POSITIVE_INFINITY
            ? "##Inf"
            : a === Number.NEGATIVE_INFINITY
              ? "##-Inf"
              : A.h(a)
      );
    if (Ga(a))
      return (
        Hb(b, "#js "),
        (d = Y.g(function (f) {
          var g = /[A-Za-z_\*\+\?!\-'][\w\*\+\?!\-']*/;
          if ("string" === typeof f)
            (g = g.exec(f)),
              (g =
                null != g && M.g(g[0], f)
                  ? 1 === g.length
                    ? g[0]
                    : ff(g)
                  : null);
          else throw new TypeError("re-matches must match against a string.");
          return new Ye(null != g ? Nd.h(f) : f, a[f]);
        }, ha(a))),
        Mg.v ? Mg.v(d, Lg, b, c) : Mg.call(null, d, Lg, b, c)
      );
    if (Ea(a)) return Cg(b, Lg, "#js [", " ", "]", c, a);
    if ("string" === typeof a) return x(za.h(c)) ? Hb(b, Ig(a)) : Hb(b, a);
    if ("function" === typeof a) {
      var e = a.name;
      c = x(
        (function () {
          var f = null == e;
          return f ? f : /^[\s\xa0]*$/.test(e);
        })()
      )
        ? "Function"
        : e;
      return Gg(
        b,
        R(["#object[", c, x(!1) ? [' "', A.h(a), '"'].join("") : "", "]"])
      );
    }
    if (a instanceof Date)
      return (
        (c = function (f, g) {
          for (f = A.h(f); ;)
            if (f.length < g) f = ["0", f].join("");
            else return f;
        }),
        Gg(
          b,
          R([
            '#inst "',
            c(a.getUTCFullYear(), 4),
            "-",
            c(a.getUTCMonth() + 1, 2),
            "-",
            c(a.getUTCDate(), 2),
            "T",
            c(a.getUTCHours(), 2),
            ":",
            c(a.getUTCMinutes(), 2),
            ":",
            c(a.getUTCSeconds(), 2),
            ".",
            c(a.getUTCMilliseconds(), 3),
            "-",
            '00:00"',
          ])
        )
      );
    if (a instanceof RegExp) return Gg(b, R(['#"', a.source, '"']));
    if (
      "symbol" === p(a) ||
      ("undefined" !== typeof Symbol && a instanceof Symbol)
    )
      return Gg(b, R(["#object[", a.toString(), "]"]));
    if (
      x(
        (function () {
          var f = null == a ? null : a.constructor;
          return null == f ? null : f.Ab;
        })()
      )
    )
      return Gg(
        b,
        R(["#object[", a.constructor.Ab.replace(RegExp("/", "g"), "."), "]"])
      );
    e = (function () {
      var f = null == a ? null : a.constructor;
      return null == f ? null : f.name;
    })();
    c = x(
      (function () {
        var f = null == e;
        return f ? f : /^[\s\xa0]*$/.test(e);
      })()
    )
      ? "Object"
      : e;
    return null == a.constructor
      ? Gg(b, R(["#object[", c, "]"]))
      : Gg(b, R(["#object[", c, " ", A.h(a), "]"]));
  }
  function Lg(a, b, c) {
    var d = Ng.h(c);
    return x(d)
      ? ((c = U.j(c, Og, Kg)), d.j ? d.j(a, b, c) : d.call(null, a, b, c))
      : Kg(a, b, c);
  }
  function Pg(a) {
    var b = xa();
    if (null == a || Fa(I(a))) b = "";
    else {
      var c = A,
        d = c.h,
        e = new ra(),
        f = new ac(e);
      Lg(J(a), f, b);
      a = I(K(a));
      for (var g = null, k = 0, l = 0; ;)
        if (l < k) {
          var m = g.H(null, l);
          Hb(f, " ");
          Lg(m, f, b);
          l += 1;
        } else if ((a = I(a)))
          (g = a),
            ld(g)
              ? ((a = Ub(g)),
                (k = Vb(g)),
                (g = a),
                (m = O(a)),
                (a = k),
                (k = m))
              : ((m = J(g)),
                Hb(f, " "),
                Lg(m, f, b),
                (a = K(g)),
                (g = null),
                (k = 0)),
            (l = 0);
        else break;
      b = d.call(c, e);
    }
    return b;
  }
  function Qg(a) {
    return a instanceof nc ? oc.g(null, Od(a)) : Nd.g(null, Od(a));
  }
  function Rg(a) {
    if (x(!1)) {
      var b = I(a),
        c = I(b),
        d = J(c);
      K(c);
      S(d, 0, null);
      S(d, 1, null);
      c = Xc(a);
      for (a = null; ;) {
        d = a;
        b = I(b);
        a = J(b);
        var e = K(b),
          f = a;
        a = S(f, 0, null);
        b = S(f, 1, null);
        if (x(f))
          if (a instanceof H || a instanceof nc)
            if (x(d))
              if (M.g(d, Md(a))) (c = U.j(c, Qg(a), b)), (a = d), (b = e);
              else return null;
            else if (((d = Md(a)), x(d)))
              (c = U.j(c, Qg(a), b)), (a = d), (b = e);
            else return null;
          else return null;
        else return new Z(null, 2, 5, Ze, [d, c], null);
      }
    } else return null;
  }
  function Sg(a, b, c, d, e) {
    return Cg(
      d,
      function (f, g, k) {
        var l = jb(f);
        c.j ? c.j(l, g, k) : c.call(null, l, g, k);
        Hb(g, " ");
        f = kb(f);
        return c.j ? c.j(f, g, k) : c.call(null, f, g, k);
      },
      [A.h(a), "{"].join(""),
      ", ",
      "}",
      e,
      I(b)
    );
  }
  function Mg(a, b, c, d) {
    var e = id(a) ? Rg(a) : null,
      f = S(e, 0, null);
    e = S(e, 1, null);
    return x(f)
      ? Sg(["#:", A.h(f)].join(""), e, b, c, d)
      : Sg(null, a, b, c, d);
  }
  qc.prototype.ca = u;
  qc.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  Pd.prototype.ca = u;
  Pd.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  Ye.prototype.ca = u;
  Ye.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "[", " ", "]", c, this);
  };
  $f.prototype.ca = u;
  $f.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  vf.prototype.ca = u;
  vf.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  wc.prototype.ca = u;
  wc.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  kf.prototype.ca = u;
  kf.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  Kd.prototype.ca = u;
  Kd.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  Nc.prototype.ca = u;
  Nc.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  wg.prototype.ca = u;
  wg.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  eg.prototype.ca = u;
  eg.prototype.T = function (a, b, c) {
    return Mg(this, Lg, b, c);
  };
  bg.prototype.ca = u;
  bg.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  pg.prototype.ca = u;
  pg.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "#{", " ", "}", c, this);
  };
  Ud.prototype.ca = u;
  Ud.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  ve.prototype.ca = u;
  ve.prototype.T = function (a, b, c) {
    Hb(b, "#object[cljs.core.Atom ");
    Lg(new w(null, 1, [Tg, this.state], null), b, c);
    return Hb(b, "]");
  };
  kg.prototype.ca = u;
  kg.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  Z.prototype.ca = u;
  Z.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "[", " ", "]", c, this);
  };
  Id.prototype.ca = u;
  Id.prototype.T = function (a, b) {
    return Hb(b, "()");
  };
  w.prototype.ca = u;
  w.prototype.T = function (a, b, c) {
    return Mg(this, Lg, b, c);
  };
  xg.prototype.ca = u;
  xg.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  jg.prototype.ca = u;
  jg.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  Wc.prototype.ca = u;
  Wc.prototype.T = function (a, b, c) {
    return Cg(b, Lg, "(", " ", ")", c, this);
  };
  nc.prototype.jb = u;
  nc.prototype.ab = function (a, b) {
    if (b instanceof nc) return mc(this, b);
    throw Error(["Cannot compare ", A.h(this), " to ", A.h(b)].join(""));
  };
  H.prototype.jb = u;
  H.prototype.ab = function (a, b) {
    if (b instanceof H) return Ld(this, b);
    throw Error(["Cannot compare ", A.h(this), " to ", A.h(b)].join(""));
  };
  Z.prototype.jb = u;
  Z.prototype.ab = function (a, b) {
    if (kd(b)) return ud(this, b);
    throw Error(["Cannot compare ", A.h(this), " to ", A.h(b)].join(""));
  };
  Ye.prototype.jb = u;
  Ye.prototype.ab = function (a, b) {
    if (kd(b)) return ud(this, b);
    throw Error(["Cannot compare ", A.h(this), " to ", A.h(b)].join(""));
  };
  function Ug() { }
  function Vg(a) {
    if (null != a && null != a.Yb) a = a.Yb(a);
    else {
      var b = Vg[p(null == a ? null : a)];
      if (null != b) a = b.h ? b.h(a) : b.call(null, a);
      else if (((b = Vg._), null != b)) a = b.h ? b.h(a) : b.call(null, a);
      else throw z("IEncodeJS.-clj-\x3ejs", a);
    }
    return a;
  }
  function Wg(a, b) {
    return (null != a ? u === a.Xb || (a.Jb ? 0 : y(Ug, a)) : y(Ug, a))
      ? Vg(a)
      : "string" === typeof a ||
        "number" === typeof a ||
        a instanceof H ||
        a instanceof nc
        ? b.h
          ? b.h(a)
          : b.call(null, a)
        : Pg(R([a]));
  }
  var Xg = function Xg(a) {
    for (var c = [], d = arguments.length, e = 0; ;)
      if (e < d) c.push(arguments[e]), (e += 1);
      else break;
    return Xg.s(
      arguments[0],
      1 < c.length ? new qc(c.slice(1), 0, null) : null
    );
  };
  Xg.s = function (a, b) {
    b = V(b);
    var c = F.j(b, Yg, Od),
      d = function g(f) {
        if (null == f) return null;
        if (null != f ? u === f.Xb || (f.Jb ? 0 : y(Ug, f)) : y(Ug, f))
          return Vg(f);
        if (f instanceof H) return c.h ? c.h(f) : c.call(null, f);
        if (f instanceof nc) return A.h(f);
        if (id(f)) {
          var k = {};
          f = I(f);
          for (var l = null, m = 0, n = 0; ;)
            if (n < m) {
              var q = l.H(null, n),
                r = S(q, 0, null);
              q = S(q, 1, null);
              r = Wg(r, d);
              q = g(q);
              k[r] = q;
              n += 1;
            } else if ((f = I(f)))
              ld(f)
                ? ((m = Ub(f)), (f = Vb(f)), (l = m), (m = O(m)))
                : ((m = J(f)),
                  (l = S(m, 0, null)),
                  (m = S(m, 1, null)),
                  (l = Wg(l, d)),
                  (m = g(m)),
                  (k[l] = m),
                  (f = K(f)),
                  (l = null),
                  (m = 0)),
                (n = 0);
            else break;
          return k;
        }
        if (fd(f)) {
          k = [];
          f = I(Y.g(g, f));
          l = null;
          for (n = m = 0; ;)
            if (n < m) (r = l.H(null, n)), k.push(r), (n += 1);
            else if ((f = I(f)))
              (l = f),
                ld(l)
                  ? ((f = Ub(l)), (n = Vb(l)), (l = f), (m = O(f)), (f = n))
                  : ((f = J(l)), k.push(f), (f = K(l)), (l = null), (m = 0)),
                (n = 0);
            else break;
          return k;
        }
        return f;
      };
    return d(a);
  };
  Xg.J = 1;
  Xg.I = function (a) {
    var b = J(a);
    a = K(a);
    return this.s(b, a);
  };
  function Zg() { }
  function $g(a, b) {
    if (null != a && null != a.Wb) a = a.Wb(a, b);
    else {
      var c = $g[p(null == a ? null : a)];
      if (null != c) a = c.g ? c.g(a, b) : c.call(null, a, b);
      else if (((c = $g._), null != c))
        a = c.g ? c.g(a, b) : c.call(null, a, b);
      else throw z("IEncodeClojure.-js-\x3eclj", a);
    }
    return a;
  }
  function ah(a) {
    return bh(a, R([ch, !1]));
  }
  function bh(a, b) {
    var c = V(b);
    c = F.g(c, ch);
    var d = x(c) ? Nd : A;
    return (function g(f) {
      return (null != f ? u === f.tc || (f.Jb ? 0 : y(Zg, f)) : y(Zg, f))
        ? $g(f, fe(ig, b))
        : (
          null == f
            ? 0
            : null != f
              ? f.m & 64 || u === f.cb || (f.m ? 0 : y(Ya, f))
              : y(Ya, f)
        )
          ? Bg(Y.g(g, f))
          : gf(f)
            ? new Ye(g(jb(f)), g(kb(f)))
            : fd(f)
              ? Ge(Xc(f), Y.h(g), f)
              : Ea(f)
                ? Pb(
                  Ma(
                    function (k, l) {
                      l = g(l);
                      return Ob(k, l);
                    },
                    Nb(Vc),
                    f
                  )
                )
                : Ha(f) === Object
                  ? Pb(
                    Ma(
                      function (k, l) {
                        var m = d.h ? d.h(l) : d.call(null, l);
                        l = g(t(f, l));
                        return Qb(k, m, l);
                      },
                      Nb(le),
                      ha(f)
                    )
                  )
                  : f;
    })(a);
  }
  var dh = new H(null, "show-notation", "show-notation", -1070729314),
    eh = new H(null, "new-html", "new-html", 1747475686),
    fh = new H(null, "center-left-pct", "center-left-pct", -1698591085),
    gh = new H(null, "NotationFiles", "NotationFiles", 1523281785),
    hh = new H(null, "angle", "angle", 1622094254),
    ih = new H(null, "coord", "coord", -1453656639),
    jh = new H(null, "center-left", "center-left", 49172678),
    kh = new H(null, "onMousedownSquare", "onMousedownSquare", -262263630),
    lh = new H(null, "items-container-id", "items-container-id", 1710847349),
    Tg = new H(null, "val", "val", 128701612),
    Lb = new H(null, "on-change", "on-change", -732046149),
    mh = new H(null, "size", "size", 1098693007),
    nh = new H(null, "start-x", "start-x", -193941684),
    oh = new H(null, "start-y", "start-y", -771244577),
    ph = new H(null, "rank-idx", "rank-idx", 1726637510),
    qh = new H(null, "valid-fn", "valid-fn", -1326082256),
    rh = new H(null, "remove-el", "remove-el", 1434219205),
    sh = new H(null, "left", "left", -399115937),
    th = new H(null, "capture?", "capture?", -741966441),
    Aa = new H(null, "meta", "meta", 1499536964),
    uh = new H(null, "square-\x3epiece-id", "square-\x3epiece-id", -1820965360),
    vh = new H(null, "top", "top", -1856271961),
    wh = new H(
      null,
      "dragging-starting-square",
      "dragging-starting-square",
      -13619411
    ),
    xh = new H(null, "right", "right", -452581833),
    yh = new H(null, "mouseDraggable", "mouseDraggable", 2079819797),
    zh = new H(null, "from", "from", 1815293044),
    Ah = new H(null, "data", "data", -232669377),
    Bh = new H(null, "html", "html", -998796897),
    Ch = new H(null, "animate-speed-ms", "animate-speed-ms", -110361176),
    Dh = new H(null, "dragging-el", "dragging-el", -211205166),
    Eh = new H(null, "source", "source", -433931539),
    Fh = new H(null, "items", "items", 1031954938),
    Gh = new H(null, "animate", "animate", 1850194573),
    Hh = new H(null, "dragging-piece-id", "dragging-piece-id", 1842910239),
    Ih = new H(null, "defer-fn", "defer-fn", 2016113287),
    Jh = new H(null, "start", "start", -355208981),
    Kh = new H(null, "num-cols", "num-cols", -911042386),
    Lh = new H(null, "onMouseupSquare", "onMouseupSquare", -1366293260),
    Mh = new H(null, "capture-piece-id", "capture-piece-id", 789635268),
    Nh = new H(null, "instant?", "instant?", -2019232077),
    Oh = new H(null, "coords", "coords", -599429112),
    Ph = new H(null, "left-pct", "left-pct", 1200460558),
    Qh = new H(null, "piece-square-pct", "piece-square-pct", 514902445),
    Rh = new H(null, "color", "color", 1011675173),
    Sh = new H(
      null,
      "square-mouse-is-currently-hovering-over",
      "square-mouse-is-currently-hovering-over",
      -326215771
    ),
    Th = new H(null, "NotationRanks", "NotationRanks", -1316137666),
    Uh = new H(null, "onDrop", "onDrop", 41220475),
    Ng = new H(null, "alt-impl", "alt-impl", 670969595),
    Vh = new H(null, "opacity", "opacity", 397153780),
    Wh = new H(null, "piece", "piece", 1396691784),
    Xh = new H(null, "duration-ms", "duration-ms", 1993555055),
    Yh = new H(null, "root-el", "root-el", 1068654895),
    Zh = new H(null, "arrow-width", "arrow-width", 1926673833),
    zd = new H(null, "distance", "distance", -1671893894),
    $h = new H(null, "dragging?", "dragging?", -995941410),
    ai = new H(null, "hidden?", "hidden?", 1339691380),
    ng = new H("cljs.core", "not-found", "cljs.core/not-found", -1572889185),
    bi = new H(null, "show?", "show?", 1543842127),
    ci = new H(
      null,
      "dragging-starting-piece",
      "dragging-starting-piece",
      1374747404
    ),
    di = new H(
      null,
      "delete-square-\x3epiece",
      "delete-square-\x3epiece",
      -1933366978
    ),
    ei = new H(
      null,
      "animation-end-callbacks",
      "animation-end-callbacks",
      -1844258358
    ),
    fi = new H(null, "destination", "destination", -253872483),
    Ba = new H(null, "dup", "dup", 556298533),
    gi = new H(null, "default-val", "default-val", 1110970409),
    hi = new H(null, "square", "square", 812434677),
    Ca = new H(null, "print-length", "print-length", 1931866356),
    ii = new H(null, "Squares", "Squares", 946930677),
    ya = new H(null, "flush-on-newline", "flush-on-newline", -151457939),
    ji = new H(null, "animateSpeed", "animateSpeed", -261442538),
    ki = new H(null, "onComplete", "onComplete", -661010670),
    li = new H(null, "touchMove", "touchMove", -1767817390),
    mi = new H(
      null,
      "squares-container-id",
      "squares-container-id",
      2018754960
    ),
    ni = new H(null, "onDragStart", "onDragStart", -2108300997),
    oi = new H(null, "show-notation?", "show-notation?", -192510961),
    pi = new H(null, "fade-out-piece", "fade-out-piece", -367103352),
    ch = new H(null, "keywordize-keys", "keywordize-keys", 1310784252),
    qi = new H(null, "show-coords?", "show-coords?", -351670346),
    ri = new H(null, "touchDraggable", "touchDraggable", -2032933022),
    si = new H(null, "onTouchSquare", "onTouchSquare", 1002083556),
    ti = new H(null, "to", "to", 192099007),
    ui = new H(null, "arrow-height", "arrow-height", 110204050),
    vi = new H(null, "y", "y", -1757859776),
    wi = new H(null, "file-idx", "file-idx", 2008975387),
    xi = new H(null, "x", "x", 2099068185),
    yi = new H(null, "head-width", "head-width", -652130664),
    zi = new H(null, "bottom", "bottom", -1550509018),
    Ai = new H(null, "onSnapEnd", "onSnapEnd", -1317688335),
    Bi = new H(null, "container-id", "container-id", 1274665684),
    Ci = new H(null, "onMouseenterSquare", "onMouseenterSquare", 1147925211),
    Di = new H(null, "onDragMove", "onDragMove", 810982990),
    Ei = new H(null, "onChange", "onChange", -312891301),
    Fi = new H(null, "position", "position", -2011731912),
    Og = new H(null, "fallback-impl", "fallback-impl", -1501286995),
    Gi = new H(null, "num-rows", "num-rows", 406644986),
    Hi = new H(null, "html-str", "html-str", 494765866),
    Ii = new H(
      null,
      "square-\x3esquare-ids",
      "square-\x3esquare-ids",
      768519898
    ),
    Ji = new H(null, "height", "height", 1025178622),
    Ki = new H(null, "fen-code", "fen-code", -498385731),
    Li = new H(null, "orientation", "orientation", 623557579),
    za = new H(null, "readably", "readably", 1129599760),
    Yg = new H(null, "keyword-fn", "keyword-fn", -64566675),
    Mi = new H(null, "on-finish", "on-finish", 743031869),
    Ni = new H(null, "board-width", "board-width", -1036611769),
    Oi = new H(null, "id", "id", -1388402092),
    Pi = new H(null, "center-top", "center-top", 1455140316),
    Qi = new H(null, "width", "width", -384071477),
    Ri = new H(null, "board-height", "board-height", -2028928684),
    Si = new H(null, "draggable", "draggable", 1676206163),
    Ti = new H(null, "end", "end", -268185958),
    Ui = new H(null, "className", "className", -1983287057),
    Vi = new H(null, "dropOffBoard", "dropOffBoard", 673565619),
    Wi = new H(null, "line-width", "line-width", -906934988),
    Xi = new H(null, "_color", "_color", -343016222),
    Yi = new H(
      null,
      "new-square-\x3epiece",
      "new-square-\x3epiece",
      -2093972477
    ),
    Zi = new H(null, "onMouseleaveSquare", "onMouseleaveSquare", 1699519615),
    $i = new H(null, "center-top-pct", "center-top-pct", 978561977),
    aj = new H(null, "top-pct", "top-pct", 48769222),
    cj = new H(null, "base-offset", "base-offset", 643283679),
    dj = new H(null, "type", "type", 1174270348),
    Fg = new H(null, "more-marker", "more-marker", -14717935),
    ej = new H(null, "board-orientation", "board-orientation", 1715600461);
  function fj(a, b, c) {
    var d = x(b.ignoreCase) ? "gi" : "g";
    d = x(b.multiline) ? [d, "m"].join("") : d;
    return a.replace(
      new RegExp(b.source, x(b.unicode) ? [d, "u"].join("") : d),
      c
    );
  }
  function gj(a) {
    return (function () {
      function b(d) {
        var e = null;
        if (0 < arguments.length) {
          e = 0;
          for (var f = Array(arguments.length - 0); e < f.length;)
            (f[e] = arguments[e + 0]), ++e;
          e = new qc(f, 0, null);
        }
        return c.call(this, e);
      }
      function c(d) {
        d = ze(d);
        if (M.g(O(d), 1)) return (d = J(d)), a.h ? a.h(d) : a.call(null, d);
        d = ff(d);
        return a.h ? a.h(d) : a.call(null, d);
      }
      b.J = 0;
      b.I = function (d) {
        d = I(d);
        return c(d);
      };
      b.s = c;
      return b;
    })();
  }
  function hj(a, b, c) {
    if ("string" === typeof b)
      return a.replace(
        new RegExp(
          String(b)
            .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
            .replace(/\x08/g, "\\x08"),
          "g"
        ),
        c
      );
    if (b instanceof RegExp)
      return "string" === typeof c ? fj(a, b, c) : fj(a, b, gj(c));
    throw ["Invalid match arg: ", A.h(b)].join("");
  }
  function ij(a) {
    var b = new ra();
    for (a = I(a); ;)
      if (null != a)
        b.append(A.h(J(a))), (a = K(a)), null != a && b.append(", ");
      else return b.toString();
  }
  var jj = gg(
    "bB wP wK wR bN bQ bK bR wQ wB wN bP".split(" "),
    '\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#000" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zm6-4c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/\x3e\x3cpath d\x3d"M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/\x3e\x3c/g\x3e\x3cpath d\x3d"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke\x3d"#fff" stroke-linecap\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cpath d\x3d"M22.5 9a4 4 0 0 0-4 4c0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38a4 4 0 0 0-4-4z" fill\x3d"#fff" stroke\x3d"#000" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linecap\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22.5 11.63V6"/\x3e\x3cpath d\x3d"M20 8h5"/\x3e\x3c/g\x3e\x3cpath d\x3d"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-width\x3d"1.5" fill\x3d"#fff"/\x3e\x3cg stroke-width\x3d"1.5" stroke-linecap\x3d"round" stroke-linejoin\x3d"round"\x3e\x3cpath d\x3d"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill\x3d"#fff"/\x3e\x3cpath d\x3d"M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"#fff" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 39h27v-3H9v3z"/\x3e\x3cpath d\x3d"M12 36v-4h21v4H12z"/\x3e\x3cpath d\x3d"M11 14V9h4v2h5V9h5v2h5V9h4v5" stroke-linecap\x3d"butt"/\x3e\x3cpath d\x3d"M34 14l-3 3H14l-3-3" stroke-linecap\x3d"round"/\x3e\x3c/g\x3e\x3cpath d\x3d"M31 17v12.5H14V17" stroke-linecap\x3d"butt" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3cg stroke-linecap\x3d"round"\x3e\x3cpath d\x3d"M31 29.5l1.5 2.5h-20l1.5-2.5" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M11 14h23" fill\x3d"none" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#000" stroke-linecap\x3d"round" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/\x3e\x3cpath d\x3d"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/\x3e\x3c/g\x3e\x3cg fill\x3d"#fff"\x3e\x3cpath d\x3d"M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75c-.414.717-.944 1.187-1.183 1.049s-.097-.832.317-1.549.944-1.187 1.183-1.049.097.832-.317 1.549z" stroke-linejoin\x3d"round" stroke-width\x3d"1.5" stroke\x3d"#fff"/\x3e\x3cpath d\x3d"M24.55 10.4l-.45 1.45.5.15c3.15 1 5.65 2.49 7.9 6.75S35.75 29.06 35.25 39l-.05.5h2.25l.05-.5c.5-10.06-.88-16.85-3.25-21.34s-5.79-6.64-9.19-7.16l-.51-.1z" stroke\x3d"none"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/\x3e\x3cpath d\x3d"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/\x3e\x3cpath d\x3d"M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" stroke-linecap\x3d"round"/\x3e\x3ccircle cx\x3d"6" cy\x3d"12" r\x3d"2"/\x3e\x3ccircle cx\x3d"14" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"22.5" cy\x3d"8" r\x3d"2"/\x3e\x3ccircle cx\x3d"31" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"39" cy\x3d"12" r\x3d"2"/\x3e\x3cpath d\x3d"M11 38.5a35 35 1 0 0 23 0" stroke-linecap\x3d"butt" fill\x3d"none"/\x3e\x3c/g\x3e\x3cpath d\x3d"M11 29a35 35 1 0 1 23 0m-21.5 2.5h20m-21 3a35 35 1 0 0 22 0m-23 3a35 35 1 0 0 24 0" fill\x3d"none" stroke\x3d"#fff" stroke-linecap\x3d"round" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22.5 11.63V6" stroke-linecap\x3d"round"/\x3e\x3cpath d\x3d"M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" stroke-linecap\x3d"butt" fill\x3d"#000"/\x3e\x3c/g\x3e\x3cg stroke-linecap\x3d"round"\x3e\x3cpath d\x3d"M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7" fill\x3d"#000" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M20 8h5" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M32 29.5s8.5-4 6.03-9.65C34.15 14 25 18 22.5 24.5v2.1-2.1C20 18 10.85 14 6.97 19.85 4.5 25.5 13 29.5 13 29.5m-.5.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0" stroke-width\x3d"1.5" stroke-linejoin\x3d"round" stroke\x3d"#fff"/\x3e\x3c/g\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 39h27v-3H9v3zm3.5-7l1.5-2.5h17l1.5 2.5h-20z"/\x3e\x3cpath d\x3d"M12 36v-4h21v4H12z"/\x3e\x3c/g\x3e\x3cpath d\x3d"M14 29.5v-13h17v13H14z" stroke-linejoin\x3d"miter" stroke-width\x3d"1.5"/\x3e\x3cg stroke-linejoin\x3d"round"\x3e\x3cpath d\x3d"M14 16.5L11 14h23l-3 2.5H14z" stroke-width\x3d"1.5"/\x3e\x3cpath d\x3d"M11 14V9h4v2h5V9h5v2h5V9h4v5H11z" stroke-width\x3d"1.5"/\x3e\x3c/g\x3e\x3cpath d\x3d"M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23" stroke-linejoin\x3d"miter" fill\x3d"none" stroke\x3d"#fff" stroke-width\x3d"1" stroke-linecap\x3d"round"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"#fff" stroke\x3d"#000" stroke-linejoin\x3d"round" stroke-width\x3d"1.5" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cpath d\x3d"M9 26c8.5-1.5 21-1.5 27 0l2.5-12.5L31 25l-.3-14.1-5.2 13.6-3-14.5-3 14.5-5.2-13.6L14 25 6.5 13.5 9 26z"/\x3e\x3cpath d\x3d"M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1 2.5-1 2.5-1.5 1.5 0 2.5 0 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/\x3e\x3cpath d\x3d"M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill\x3d"none"/\x3e\x3ccircle cx\x3d"6" cy\x3d"12" r\x3d"2"/\x3e\x3ccircle cx\x3d"14" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"22.5" cy\x3d"8" r\x3d"2"/\x3e\x3ccircle cx\x3d"31" cy\x3d"9" r\x3d"2"/\x3e\x3ccircle cx\x3d"39" cy\x3d"12" r\x3d"2"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill\x3d"none" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#fff" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2zm6-4c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/\x3e\x3cpath d\x3d"M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/\x3e\x3c/g\x3e\x3cpath d\x3d"M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linecap\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" fill-rule\x3d"evenodd" stroke\x3d"#000" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cg fill\x3d"#fff" stroke-linecap\x3d"round" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"\x3e\x3cpath d\x3d"M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/\x3e\x3cpath d\x3d"M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"/\x3e\x3c/g\x3e\x3cpath d\x3d"M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zm5.433-9.75c-.414.717-.944 1.187-1.183 1.049s-.097-.832.317-1.549.944-1.187 1.183-1.049.097.832-.317 1.549z" stroke-linejoin\x3d"round" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e;\x3csvg xmlns\x3d"http://www.w3.org/2000/svg" width\x3d"45" height\x3d"45" xmlns:v\x3d"https://vecta.io/nano"\x3e\x3cpath d\x3d"M22.5 9a4 4 0 0 0-4 4c0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38a4 4 0 0 0-4-4z" stroke\x3d"#000" stroke-width\x3d"1.5"/\x3e\x3c/svg\x3e'.split(
      ";"
    )
  );
  function kj() {
    return fe(
      A,
      xe(
        12,
        Ae(function () {
          var a = O(
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
          );
          return Kc(
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
            Math.floor(Math.random() * a)
          );
        })
      )
    );
  }
  var lj = sg("rnbqkpRNBQKP".split("")),
    mj = ff("abcdefgh".split(""));
  function nj(a) {
    return hj(
      hj(
        hj(
          hj(
            hj(hj(hj(a, "8", "11111111"), "7", "1111111"), "6", "111111"),
            "5",
            "11111"
          ),
          "4",
          "1111"
        ),
        "3",
        "111"
      ),
      "2",
      "11"
    );
  }
  function oj(a) {
    a = nj(hj(a, / .+$/, ""));
    a = Jd(a.split("/"));
    a = Ee(
      ue(function (b, c) {
        return ue(function (d, e) {
          return new w(null, 3, [ph, b, wi, d, Ki, e], null);
        }, c);
      }, a)
    );
    return Ma(
      function (b, c) {
        c = V(c);
        var d = F.g(c, wi),
          e = F.g(c, ph);
        c = F.g(c, Ki);
        return sd(lj, c)
          ? ((d = [A.h(Kc(mj, d)), A.h(e + 1)].join("")),
            (e = U.j),
            (c = M.g(c, c.toLowerCase())
              ? ["b", c.toUpperCase()].join("")
              : ["w", c.toUpperCase()].join("")),
            e.call(U, b, d, c))
          : b;
      },
      le,
      a
    );
  }
  function pj(a) {
    var b = Ag(0, 8),
      c = Ag(1, 9),
      d = (function () {
        return (function g(f) {
          return new Pd(
            null,
            function () {
              for (var k = f; ;) {
                var l = I(k);
                if (l) {
                  var m = l,
                    n = J(m);
                  if (
                    (l = I(
                      (function (q, r, v, C, B, G) {
                        return function X(T) {
                          return new Pd(
                            null,
                            (function (na, wa) {
                              return function () {
                                for (; ;) {
                                  var nb = I(T);
                                  if (nb) {
                                    if (ld(nb)) {
                                      var bf = Ub(nb),
                                        bj = O(bf),
                                        je = Td(bj);
                                      a: for (var Dg = 0; ;)
                                        if (Dg < bj) {
                                          var Eg = Wa(bf, Dg);
                                          Eg = [A.h(Eg), A.h(wa)].join("");
                                          je.add(Eg);
                                          Dg += 1;
                                        } else {
                                          bf = !0;
                                          break a;
                                        }
                                      return bf
                                        ? Vd(je.N(), X(Vb(nb)))
                                        : Vd(je.N(), null);
                                    }
                                    je = J(nb);
                                    return Pc(
                                      [A.h(je), A.h(wa)].join(""),
                                      X(sc(nb))
                                    );
                                  }
                                  return null;
                                }
                              };
                            })(q, r, v, C, B, G),
                            null
                          );
                        };
                      })(
                        k,
                        n,
                        m,
                        l,
                        b,
                        c
                      )(Y.g(mj, b))
                    ))
                  )
                    return Zd.g(l, g(sc(k)));
                  k = sc(k);
                } else return null;
              }
            },
            null
          );
        })(Jd(c));
      })();
    d = Ma(
      function (e, f) {
        e = A.h(e);
        var g = F.g(a, f);
        if (x(g)) {
          g =
            "/(?:)/" === A.h("")
              ? Uc.g(ff(Pc("", Y.g(A, I(g)))), "")
              : ff(A.h(g).split(""));
          if (1 < O(g))
            a: for (; ;)
              if ("" === (null == g ? null : mb(g)))
                g = null == g ? null : ob(g);
              else break a;
          g = M.g(J(g), "w") ? J(K(g)).toUpperCase() : J(K(g)).toLowerCase();
        } else g = "1";
        return [e, g, -1 != f.indexOf("h") && me(f, "h1") ? "/" : null].join(
          ""
        );
      },
      "",
      d
    );
    return hj(
      hj(
        hj(
          hj(
            hj(hj(hj(d, "11111111", "8"), "1111111", "7"), "111111", "6"),
            "11111",
            "5"
          ),
          "1111",
          "4"
        ),
        "111",
        "3"
      ),
      "11",
      "2"
    );
  }
  function qj(a) {
    return M.g(8, O(a)) && M.g(-1, a.search(/[^kqrnbpKQRNBP1]/));
  }
  function rj(a) {
    if ("string" !== typeof a) return !1;
    a = nj(hj(a, / .+$/, "")).split("/");
    return M.g(8, O(a)) && oe(qj, a);
  }
  var sj = new w(
    null,
    8,
    ["8", 0, "7", 1, "6", 2, "5", 3, "4", 4, "3", 5, "2", 6, "1", 7],
    null
  );
  oj("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  var tj = new w(
    null,
    8,
    ["1", 0, "2", 1, "3", 2, "4", 3, "5", 4, "6", 5, "7", 6, "8", 7],
    null
  ),
    uj = new w(
      null,
      8,
      ["a", 7, "b", 6, "c", 5, "d", 4, "e", 3, "f", 2, "g", 1, "h", 0],
      null
    ),
    zg = ff("abcdefghijklmnopqrstuvwxyz".split("")),
    vj = tg(zg, yg());
  tg(Jd(zg), yg());
  function wj() {
    return (function c(b) {
      return new Pd(
        null,
        function () {
          for (var d = b; ;) {
            var e = I(d);
            if (e) {
              var f = e,
                g = J(f);
              if (
                (e = I(
                  (function (k, l, m, n) {
                    return function v(r) {
                      return new Pd(
                        null,
                        (function (C, B) {
                          return function () {
                            for (; ;) {
                              var G = I(r);
                              if (G) {
                                if (ld(G)) {
                                  var Q = Ub(G),
                                    T = O(Q),
                                    X = Td(T);
                                  a: for (var na = 0; ;)
                                    if (na < T) {
                                      var wa = Wa(Q, na);
                                      wa = [A.h(Kc(zg, B)), A.h(wa + 1)].join(
                                        ""
                                      );
                                      X.add(wa);
                                      na += 1;
                                    } else {
                                      Q = !0;
                                      break a;
                                    }
                                  return Q
                                    ? Vd(X.N(), v(Vb(G)))
                                    : Vd(X.N(), null);
                                }
                                X = J(G);
                                return Pc(
                                  [A.h(Kc(zg, B)), A.h(X + 1)].join(""),
                                  v(sc(G))
                                );
                              }
                              return null;
                            }
                          };
                        })(k, l, m, n),
                        null
                      );
                    };
                  })(
                    d,
                    g,
                    f,
                    e
                  )(Ag(0, 8))
                ))
              )
                return Zd.g(e, c(sc(d)));
              d = sc(d);
            } else return null;
          }
        },
        null
      );
    })(Ag(0, 8));
  }
  function xj() {
    return Ma(
      function (a, b) {
        return U.j(a, b, ["square-", A.h(kj())].join(""));
      },
      le,
      wj()
    );
  }
  function yj(a, b) {
    var c = a.split("");
    a = c[0];
    c = c[1];
    return M.g(b, "white")
      ? new w(null, 2, [xi, F.g(vj, a), vi, F.g(sj, c)], null)
      : new w(null, 2, [xi, F.g(uj, a), vi, F.g(tj, c)], null);
  }
  function zj(a, b, c) {
    a = yj(a, c);
    a = V(a);
    c = F.g(a, xi);
    var d = F.g(a, vi);
    a = b / 8;
    c *= a;
    d *= a;
    var e = c + a / 2;
    a = d + a / 2;
    return new w(
      null,
      8,
      [
        jh,
        e,
        Pi,
        a,
        sh,
        c,
        vh,
        d,
        fh,
        (e / b) * 100,
        $i,
        (a / b) * 100,
        Ph,
        (c / b) * 100,
        aj,
        (d / b) * 100,
      ],
      null
    );
  }
  function Aj(a, b) {
    return Ma(
      function (c, d) {
        var e = S(d, 0, null);
        d = S(d, 1, null);
        e = ["{", Od(e), "}"].join("");
        return hj(c, e, A.h(d));
      },
      a,
      b
    );
  }
  function Bj() {
    return oa("iPhone") && !oa("iPod") && !oa("iPad");
  }
  function Cj() {
    Bj() || oa("iPad") || oa("iPod");
  }
  oa("Opera");
  oa("Trident") || oa("MSIE");
  oa("Edge");
  var Dj =
    oa("Gecko") &&
    !(-1 != ma.toLowerCase().indexOf("webkit") && !oa("Edge")) &&
    !(oa("Trident") || oa("MSIE")) &&
    !oa("Edge"),
    Ej = -1 != ma.toLowerCase().indexOf("webkit") && !oa("Edge");
  Ej && oa("Mobile");
  oa("Macintosh");
  oa("Windows");
  oa("Linux") || oa("CrOS");
  var Fj = aa.navigator || null;
  Fj && (Fj.appVersion || "").indexOf("X11");
  oa("Android");
  Bj();
  oa("iPad");
  oa("iPod");
  Cj();
  ma.toLowerCase().indexOf("kaios");
  pa();
  Bj() || oa("iPod");
  oa("iPad");
  !oa("Android") || qa() || pa() || oa("Opera") || oa("Silk");
  qa();
  !oa("Safari") ||
    qa() ||
    oa("Coast") ||
    oa("Opera") ||
    oa("Edge") ||
    oa("Edg/") ||
    oa("OPR") ||
    pa() ||
    oa("Silk") ||
    oa("Android") ||
    Cj();
  var Gj = {},
    Hj = null,
    Ij = Dj || Ej || "function" == typeof aa.btoa;
  function Jj() {
    return fe(
      A,
      Y.g(function (a) {
        return [
          "\x3cdiv class\x3d'file-44ae4'\x3e",
          A.h(Kc(zg, a)),
          "\x3c/div\x3e",
        ].join("");
      }, Ag(0, 8))
    );
  }
  function Kj() {
    return fe(
      A,
      Y.g(function (a) {
        return [
          "\x3cdiv class\x3d'rank-3d54c'\x3e",
          A.h(a),
          "\x3c/div\x3e",
        ].join("");
      }, Ag(0, 8))
    );
  }
  function Lj(a) {
    var b = V(a),
      c = F.g(b, Ni);
    a = F.g(b, Rh);
    var d = F.g(b, Oi),
      e = F.g(b, Vh),
      f = F.g(b, Li),
      g = F.g(b, mh);
    b = F.g(b, hi);
    f = zj(b, c, f);
    var k = (c / 8) * g;
    g = (k / c) * 100;
    b = ((jh.h(f) - k / 2) / c) * 100;
    c = ((Pi.h(f) - k / 2) / c) * 100;
    return Aj(
      "\x3cdiv class\x3d'item-18a5b circle-a0266' id\x3d'{id}'style\x3d'background-color:{color};height:{height}%;left:{left}%;opacity:{opacity};top:{top}%;width:{width}%;'\x3e\x3c/div\x3e",
      new w(null, 7, [Rh, a, Ji, g, Oi, d, sh, b, Vh, e, vh, c, Qi, g], null)
    );
  }
  function Mj(a) {
    var b = V(a);
    a = F.g(b, Rh);
    var c = F.g(b, Oi),
      d = F.g(b, Vh);
    b = V(b);
    var e = F.g(b, Ni),
      f = F.g(b, Ti),
      g = F.g(b, Li),
      k = F.g(b, mh);
    b = F.g(b, Jh);
    b = zj(b, e, g);
    var l = V(b);
    b = F.g(l, fh);
    l = F.g(l, $i);
    e = zj(f, e, g);
    f = V(e);
    e = F.g(f, fh);
    f = F.g(f, $i);
    e -= b;
    f -= l;
    k *= 12.5;
    g = k / 6;
    var m = Math.sqrt(Math.pow(f, 2) + Math.pow(e, 2)) + g + k / 6,
      n = (80 * k) / m;
    return Aj(
      "\x3cdiv class\x3d'item-18a5b arrow-bc3c7' id\x3d'{id}'style\x3d'top:{start-y}%;left:{start-x}%;opacity:{opacity};transform:translateY(-50%)rotate({angle}rad);width:{arrow-width}%;height:{arrow-height}%;'\x3e\x3cdiv class\x3d'arrow-line-a8dce' style\x3d'background-color:{color};width:{line-width}%;margin-left:{base-offset}%;'\x3e\x3c/div\x3e\x3cdiv class\x3d'arrow-head-38dfa' style\x3d'background-color:{color};width:{head-width}%;'\x3e\x3c/div\x3e\x3c/div\x3e",
      lg.s(
        R([
          new w(
            null,
            8,
            [
              hh,
              Math.atan(f / e) + (0 > e ? Math.PI : 0),
              ui,
              k,
              Zh,
              m,
              cj,
              (100 * -g) / m,
              yi,
              n,
              Wi,
              100 - n,
              nh,
              b,
              oh,
              l,
            ],
            null
          ),
          new w(null, 3, [Rh, a, Oi, c, Vh, d], null),
        ])
      )
    );
  }
  function Nj(a) {
    var b = F.g(jj, Od(a));
    if (Ij) a = aa.btoa(b);
    else {
      a = [];
      for (var c = 0, d = 0; d < b.length; d++) {
        var e = b.charCodeAt(d);
        255 < e && ((a[c++] = e & 255), (e >>= 8));
        a[c++] = e;
      }
      b = void 0;
      void 0 === b && (b = 0);
      if (!Hj)
        for (
          Hj = {},
          c =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
            ""
          ),
          d = ["+/\x3d", "+/", "-_\x3d", "-_.", "-_"],
          e = 0;
          5 > e;
          e++
        ) {
          var f = c.concat(d[e].split(""));
          Gj[e] = f;
          for (var g = 0; g < f.length; g++) {
            var k = f[g];
            void 0 === Hj[k] && (Hj[k] = g);
          }
        }
      b = Gj[b];
      c = Array(Math.floor(a.length / 3));
      d = b[64] || "";
      for (e = f = 0; f < a.length - 2; f += 3) {
        var l = a[f],
          m = a[f + 1];
        k = a[f + 2];
        g = b[l >> 2];
        l = b[((l & 3) << 4) | (m >> 4)];
        m = b[((m & 15) << 2) | (k >> 6)];
        k = b[k & 63];
        c[e++] = "" + g + l + m + k;
      }
      g = 0;
      k = d;
      switch (a.length - f) {
        case 2:
          (g = a[f + 1]), (k = b[(g & 15) << 2] || d);
        case 1:
          (a = a[f]),
            (c[e] = "" + b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + k + d);
      }
      a = c.join("");
    }
    return a;
  }
  function Oj(a) {
    var b = V(a),
      c = F.g(b, ej),
      d = F.g(b, Ni);
    F.g(b, Xi);
    a = F.g(b, Oi);
    var e = F.g(b, ai),
      f = F.g(b, Wh),
      g = F.g(b, Qh);
    b = F.g(b, hi);
    c = zj(b, d, c);
    b = V(c);
    c = F.g(b, Ph);
    b = F.g(b, aj);
    g *= 100;
    d = (d / 8 / d) * 100;
    return [
      "\x3cdiv class\x3d'piece-349f8' id\x3d'",
      A.h(a),
      "' style\x3d'left:",
      A.h(c),
      "%;top:",
      A.h(b),
      "%;height:",
      A.h(d),
      "%;width:",
      A.h(d),
      "%;",
      x(e) ? "opacity:0;" : null,
      "'\x3e\x3cimg src\x3d'data:image/svg+xml;base64,",
      A.h(Nj(f)),
      "' alt\x3d'' style\x3d'height:",
      A.h(g),
      "%;width:",
      A.h(g),
      "%;' /\x3e\x3c/div\x3e",
    ].join("");
  }
  function Pj(a) {
    var b = V(a);
    a = F.g(b, Rh);
    var c = F.g(b, ih);
    b = F.g(b, Oi);
    return [
      "\x3cdiv class\x3d'",
      ["square-4b72b ", M.g(a, "white") ? "white-3b784" : "black-b7cb6"].join(
        ""
      ),
      "' id\x3d'",
      A.h(b),
      "' data-square-coord\x3d'",
      A.h(c),
      "'\x3e\x3c/div\x3e",
    ].join("");
  }
  function Qj(a) {
    setTimeout(function () {
      return a.B ? a.B() : a.call(null);
    }, 1);
  }
  function Rj(a) {
    ad(t(a, "preventDefault")) && a.preventDefault();
  }
  function Sj(a) {
    var b = document;
    b = "string" === typeof a ? b.getElementById(a) : a;
    if (x(b)) return b;
    a = document.querySelector(a);
    return x(a) ? a : null;
  }
  function Tj(a, b, c) {
    t(Sj(a), "style")[b] = c;
  }
  function Uj(a, b) {
    Sj(a).insertAdjacentHTML("beforeend", b);
  }
  function Vj(a, b) {
    t(Sj(a), "classList").add(b);
  }
  function Wj(a, b) {
    t(Sj(a), "classList").remove(b);
  }
  function Xj(a) {
    (a = Sj(a)) && a.parentNode && a.parentNode.removeChild(a);
  }
  function Yj(a, b) {
    var c = Sj(a);
    x(c) &&
      (Tj(c, "transition", ""),
        c.addEventListener("transitionend", function () {
          Xj(c);
          return ad(null) ? (null.B ? null.B() : null.call(null)) : null;
        }),
        Qj(function () {
          Tj(c, "transition", ["all ", A.h(b), "ms"].join(""));
          return Tj(c, "opacity", "0");
        }));
  }
  function Zj() {
    return ["piece-", A.h(kj())].join("");
  }
  function ak(a, b) {
    var c = V(a);
    a = F.g(c, Xh);
    var d = F.g(c, Nh),
      e = F.g(c, Mi),
      f = F.g(c, Wh);
    c = F.g(c, hi);
    var g = E(b),
      k = V(g);
    g = F.g(k, Ch);
    var l = F.g(k, Ni),
      m = F.g(k, Li);
    k = F.g(k, Qh);
    var n = Zj();
    f = Oj(
      new w(
        null,
        8,
        [Ni, l, ej, m, Oi, n, ai, !0, Wh, f, Qh, k, hi, c, Qi, l / 8],
        null
      )
    );
    var q = !0 === d ? 0 : x(a) ? a : g;
    return new w(
      null,
      3,
      [
        eh,
        f,
        Ih,
        function () {
          Tj(n, "transition", ["all ", A.h(q), "ms"].join(""));
          Tj(n, "opacity", "100%");
          return ad(e)
            ? W.v(b, Ie, new Z(null, 2, 5, Ze, [ei, n], null), function () {
              return e.B ? e.B() : e.call(null);
            })
            : null;
        },
        Yi,
        gg([c], [n]),
      ],
      null
    );
  }
  function bk(a, b) {
    var c = V(a);
    a = F.g(c, th);
    var d = F.g(c, fi),
      e = F.g(c, Xh),
      f = F.g(c, Nh),
      g = F.g(c, Mi),
      k = F.g(c, Wh);
    c = F.g(c, Eh);
    var l = E(b),
      m = V(l);
    l = F.g(m, Ch);
    var n = F.g(m, Ni),
      q = F.g(m, Li),
      r = F.g(m, Qh);
    m = F.g(m, uh);
    var v = F.g(m, c),
      C = Zj();
    k = Oj(
      new w(
        null,
        8,
        [Ni, n, ej, q, Oi, C, ai, !1, Wh, k, Qh, r, hi, c, Qi, n / 8],
        null
      )
    );
    var B = zj(d, n, q),
      G = !0 === f ? 0 : x(e) ? e : l;
    return lg.s(
      R([
        new w(
          null,
          6,
          [
            eh,
            k,
            Ih,
            function () {
              Tj(C, "transition", ["all ", A.h(G), "ms"].join(""));
              Tj(C, "left", [A.h(Ph.h(B)), "%"].join(""));
              Tj(C, "top", [A.h(aj.h(B)), "%"].join(""));
              return ad(g)
                ? W.v(b, Ie, new Z(null, 2, 5, Ze, [ei, C], null), function () {
                  return g.B ? g.B() : g.call(null);
                })
                : null;
            },
            Xh,
            G,
            rh,
            v,
            Yi,
            gg([d], [C]),
            di,
            c,
          ],
          null
        ),
        x(a) ? new w(null, 1, [Mh, F.g(m, d)], null) : null,
      ])
    );
  }
  function ck(a, b) {
    var c = V(a);
    a = F.g(c, Xh);
    var d = F.g(c, Nh),
      e = F.g(c, Mi);
    c = F.g(c, hi);
    var f = E(b),
      g = V(f);
    f = F.g(g, Ch);
    g = F.g(g, uh);
    var k = F.g(g, c);
    return lg.s(
      R([
        new w(null, 3, [di, c, Xh, !0 === d ? 0 : x(a) ? a : f, pi, k], null),
        ad(e)
          ? new w(
            null,
            1,
            [
              Ih,
              function () {
                return W.v(
                  b,
                  Ie,
                  new Z(null, 2, 5, Ze, [ei, k], null),
                  function () {
                    return e.B ? e.B() : e.call(null);
                  }
                );
              },
            ],
            null
          )
          : null,
      ])
    );
  }
  function dk(a, b) {
    switch (dj.h(a)) {
      case "ANIMATION_ADD":
        return ak(a, b);
      case "ANIMATION_MOVE":
        return bk(a, b);
      case "ANIMATION_CLEAR":
        return ck(a, b);
      default:
        return console.warn("Unknown animation type:", dj.h(a));
    }
  }
  var ek = (function (a) {
    var b = new ve(le);
    return (function () {
      function c(e) {
        var f = null;
        if (0 < arguments.length) {
          f = 0;
          for (var g = Array(arguments.length - 0); f < g.length;)
            (g[f] = arguments[f + 0]), ++f;
          f = new qc(g, 0, null);
        }
        return d.call(this, f);
      }
      function d(e) {
        var f = F.j(E(b), e, nd);
        return f === nd ? ((f = fe(a, e)), W.v(b, U, e, f), f) : f;
      }
      c.J = 0;
      c.I = function (e) {
        e = I(e);
        return d(e);
      };
      c.s = d;
      return c;
    })();
  })(function (a) {
    var b = Y.g(function (c) {
      if (M.g(c, a)) var d = 0;
      else {
        var e = yj(c, "white"),
          f = yj(a, "white");
        d = Math.abs(xi.h(e) - xi.h(f));
        e = Math.abs(vi.h(e) - vi.h(f));
        d = d >= e ? d : e;
      }
      return new w(null, 2, [zd, d, hi, c], null);
    }, wj());
    b = yd(b);
    b = Y.g(hi, b);
    return sc(b);
  });
  function fk(a, b, c) {
    c = ek(c);
    return J(
      Be(function (d) {
        return M.g(b, F.g(a, d));
      }, c)
    );
  }
  function gk(a, b) {
    var c = Ma(
      function (l, m) {
        return M.g(F.g(a, m), F.g(b, m)) ? Uc.g(l, m) : l;
      },
      rg,
      xf(b)
    ),
      d = new ve(ge($c, a, c)),
      e = new ve(ge($c, b, c));
    c = Ma(
      function (l, m) {
        var n = S(m, 0, null),
          q = S(m, 1, null);
        m = fk(E(d), q, n);
        return x(m)
          ? ((q = new w(
            null,
            4,
            [dj, "ANIMATION_MOVE", Eh, m, fi, n, Wh, q],
            null
          )),
            W.j(d, $c, m),
            W.j(e, $c, n),
            Uc.g(l, q))
          : l;
      },
      Vc,
      wd(td, ff(E(e)))
    );
    var f = sg(Y.g(fi, c));
    c = Y.g(function (l) {
      l = V(l);
      var m = F.g(l, fi);
      return U.j(l, th, sd(E(d), m));
    }, c);
    var g = Ma(
      function (l, m) {
        var n = S(m, 0, null);
        m = S(m, 1, null);
        return Uc.g(
          l,
          new w(null, 3, [dj, "ANIMATION_ADD", hi, n, Wh, m], null)
        );
      },
      Vc,
      wd(td, ff(E(e)))
    ),
      k = Ma(
        function (l, m) {
          var n = S(m, 0, null);
          m = S(m, 1, null);
          return sd(f, n)
            ? l
            : Uc.g(
              l,
              new w(null, 3, [dj, "ANIMATION_CLEAR", hi, n, Wh, m], null)
            );
        },
        Vc,
        wd(td, ff(E(d)))
      );
    return ff(Zd.s(c, g, R([k])));
  }
  function hk(a) {
    var b = { z: Nb(le) };
    a.forEach(function (c, d) {
      c = Qb(t(b, "z"), d, c);
      b.z = c;
    });
    return Pb(t(b, "z"));
  }
  function ik(a) {
    var b = new Map();
    a = I(a);
    for (var c = null, d = 0, e = 0; ;)
      if (e < d) {
        var f = c.H(null, e),
          g = S(f, 0, null);
        f = S(f, 1, null);
        b.set(Xg(g), Xg(f));
        e += 1;
      } else if ((a = I(a)))
        ld(a)
          ? ((d = Ub(a)), (a = Vb(a)), (c = d), (d = O(d)))
          : ((d = J(a)),
            (c = S(d, 0, null)),
            (d = S(d, 1, null)),
            b.set(Xg(c), Xg(d)),
            (a = K(a)),
            (c = null),
            (d = 0)),
          (e = 0);
      else break;
    return b;
  }
  function jk(a, b) {
    switch (b) {
      case "object":
        return Xg(a);
      case "map":
        return ik(a);
      default:
        return Xg(ff(yf(a)));
    }
  }
  function kk(a) {
    return "string" === typeof a && M.g("map", a.toLowerCase());
  }
  function lk(a) {
    return "string" === typeof a && M.g("fen", a.toLowerCase());
  }
  function mk(a) {
    return "string" === typeof a && M.g("start", a.toLowerCase());
  }
  function nk(a) {
    return "string" === typeof a && me(-1, a.search(/^[bw][KQRNBP]$/));
  }
  function ok(a) {
    return "string" === typeof a && me(-1, a.search(/^[a-h][1-8]$/));
  }
  function pk(a) {
    return id(a) && oe(ok, xf(a)) && oe(nk, yf(a));
  }
  function qk(a) {
    var b = Ga(a);
    return b ? ((a = ah(a)), oe(ok, xf(a)) && oe(nk, yf(a))) : b;
  }
  function rk(a) {
    var b = a instanceof Map;
    return b ? ((a = hk(a)), oe(ok, xf(a)) && oe(nk, yf(a))) : b;
  }
  function sk(a) {
    var b = "string" === typeof a;
    return b
      ? ((a = a.split("-")),
        M.g(O(a), 2) && me(a[0], a[1]) && ok(a[0]) && ok(a[1]))
      : b;
  }
  function tk(a) {
    return M.g("CHESSBOARD_ARROW", dj.h(a));
  }
  function uk(a) {
    return M.g("CHESSBOARD_CIRCLE", dj.h(a));
  }
  function vk(a) {
    return "string" === typeof a ? a.toLowerCase() : null;
  }
  function wk(a) {
    return "string" === typeof a ? a.toLowerCase() : a;
  }
  var xk = gg(
    [ri, si, Li, Di, Ai, kh, li, Si, Vi, Lh, yh, Fi, Ei, ni, Uh, Ci, Zi],
    [
      new w(null, 2, [gi, !1, qh, pd], null),
      new w(null, 1, [qh, ad], null),
      new w(
        null,
        2,
        [
          gi,
          "white",
          qh,
          function (a) {
            return M.g(a, "white") || M.g(a, "black");
          },
        ],
        null
      ),
      new w(null, 1, [qh, ad], null),
      new w(null, 1, [qh, ad], null),
      new w(null, 1, [qh, ad], null),
      new w(null, 2, [gi, !1, qh, pd], null),
      new w(null, 2, [gi, !1, qh, pd], null),
      new w(
        null,
        2,
        [
          gi,
          "snapback",
          qh,
          function (a) {
            return sd(
              new pg(
                null,
                new w(null, 2, ["remove", null, "snapback", null], null),
                null
              ),
              a
            );
          },
        ],
        null
      ),
      new w(null, 1, [qh, ad], null),
      new w(null, 2, [gi, !1, qh, pd], null),
      new w(null, 2, [gi, le, qh, pk], null),
      new w(null, 1, [qh, ad], null),
      new w(null, 1, [qh, ad], null),
      new w(null, 1, [qh, ad], null),
      new w(null, 1, [qh, ad], null),
      new w(null, 1, [qh, ad], null),
    ]
  );
  Ma(
    function (a, b) {
      var c = S(b, 0, null);
      b = S(b, 1, null);
      b = V(b);
      b = F.g(b, gi);
      return U.j(a, c, b);
    },
    le,
    xk
  );
  var yk = sg(xf(xk)),
    zk = sg(Y.g(Od, yk));
  function Ak(a) {
    return Ma(
      function (b, c) {
        var d = S(c, 0, null);
        c = S(c, 1, null);
        var e = V(c);
        c = F.g(e, gi);
        var f = F.g(e, qh);
        e = F.g(a, d);
        f = f.h ? f.h(e) : f.call(null, e);
        return x(f) ? U.j(b, d, e) : U.j(b, d, c);
      },
      le,
      xk
    );
  }
  var Bk = oj("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"),
    Ck = new w(
      null,
      6,
      [
        "superfast",
        40,
        "super fast",
        40,
        "fast",
        80,
        "slow",
        300,
        "superslow",
        800,
        "super slow",
        800,
      ],
      null
    ),
    Dk = sg(xf(Ck));
  function Ek(a, b) {
    var c = E(a);
    c = V(c);
    c = F.g(c, lh);
    var d = Y.g(rh, b);
    d = I(d);
    for (var e = null, f = 0, g = 0; ;)
      if (g < f) {
        var k = e.H(null, g);
        x(k) && Xj(k);
        g += 1;
      } else if ((d = I(d)))
        (e = d),
          ld(e)
            ? ((d = Ub(e)), (g = Vb(e)), (e = d), (f = O(d)), (d = g))
            : ((d = J(e)), x(d) && Xj(d), (d = K(e)), (e = null), (f = 0)),
          (g = 0);
      else break;
    d = fe(A, Y.g(eh, b));
    Uj(c, d);
    Qj(function () {
      for (var q = I(b), r = null, v = 0, C = 0; ;)
        if (C < v) {
          var B = r.H(null, C);
          B = V(B);
          B = F.g(B, Ih);
          ad(B) && (B.B ? B.B() : B.call(null));
          C += 1;
        } else if ((q = I(q)))
          ld(q)
            ? ((v = Ub(q)), (q = Vb(q)), (r = v), (v = O(v)))
            : ((r = J(q)),
              (r = V(r)),
              (B = F.g(r, Ih)),
              ad(B) && (B.B ? B.B() : B.call(null)),
              (q = K(q)),
              (r = null),
              (v = 0)),
            (C = 0);
        else return null;
    });
    c = I(b);
    d = null;
    for (f = e = 0; ;)
      if (f < e) {
        g = d.H(null, f);
        var l = V(g);
        g = F.g(l, Xh);
        k = F.g(l, Mh);
        l = F.g(l, pi);
        x(l) && Yj(l, g);
        x(k) && Yj(k, g);
        f += 1;
      } else if ((c = I(c)))
        ld(c)
          ? ((e = Ub(c)), (c = Vb(c)), (d = e), (e = O(e)))
          : ((d = J(c)),
            (f = V(d)),
            (d = F.g(f, Xh)),
            (e = F.g(f, Mh)),
            (f = F.g(f, pi)),
            x(f) && Yj(f, d),
            x(e) && Yj(e, d),
            (c = K(c)),
            (d = null),
            (e = 0)),
          (f = 0);
      else break;
    var m = Y.g(di, b),
      n = Y.g(Yi, b);
    W.v(a, Ke, uh, function (q) {
      q = ge($c, q, m);
      return ge(lg, q, n);
    });
  }
  function Fk(a) {
    return [A.h(a), "-", A.h(kj())].join("");
  }
  function Gk(a) {
    return fe(console.error, Uc.g(a, "[Chessboard2]"));
  }
  function Hk(a) {
    return fe(console.warn, Uc.g(a, "[Chessboard2]"));
  }
  function Ik(a, b) {
    a = a.split("-");
    switch (b) {
      case "ARROW_FORMAT":
        return new w(null, 2, [Jh, a[0], Ti, a[1]], null);
      case "MOVE_FORMAT":
        return new w(null, 2, [zh, a[0], ti, a[1]], null);
      default:
        return null;
    }
  }
  function Jk(a, b) {
    var c = V(b);
    b = F.g(c, zh);
    c = F.g(c, ti);
    if (x(F.g(a, b))) {
      var d = F.g(a, b);
      return U.j($c.g(a, b), c, d);
    }
    return a;
  }
  function Kk(a, b) {
    a = Be(function (c) {
      return M.g(b, dj.h(c));
    }, yf(Fh.h(E(a))));
    return tg(Y.g(Oi, a), a);
  }
  function Lk(a) {
    var b = Y.g(Oi, Be(tk, yf(Fh.h(E(a))))),
      c = Y.g(function (d) {
        return new w(null, 1, [rh, d], null);
      }, b);
    Ek(a, c);
    W.v(a, Je, new Z(null, 1, 5, Ze, [Fh], null), function (d) {
      return ge($c, d, b);
    });
    return null;
  }
  function Mk(a, b) {
    var c = E(a),
      d = Fi.h(c),
      e = Ch.h(c);
    c = Ma(Jk, d, b);
    var f = Xg(d),
      g = Xg(c);
    d = gk(d, c);
    var k = tg(Y.g(zh, b), b);
    d = Y.g(function (m) {
      m = V(m);
      var n = F.g(m, Eh);
      n = F.g(k, n);
      var q = V(n);
      n = F.g(q, Gh);
      var r = U.j,
        v = V(q);
      q = F.g(v, Gh);
      v = F.g(v, ji);
      q =
        !1 === q
          ? 0
          : "number" === typeof v
            ? v
            : x(F.g(Ck, v))
              ? F.g(Ck, v)
              : e;
      m = r.call(U, m, Xh, q);
      return !1 === n ? U.j(m, Nh, !0) : m;
    }, d);
    var l = Ma(
      function (m, n) {
        n = V(n);
        n = F.g(n, Eh);
        m[n] = null;
        return m;
      },
      {},
      d
    );
    b = Ma(
      function (m, n) {
        n = V(n);
        var q = F.g(n, Eh);
        return Uc.g(
          m,
          new Promise(function (r) {
            l[q] = r;
          })
        );
      },
      Vc,
      d
    );
    d = Y.g(function (m) {
      m = V(m);
      var n = F.g(m, Xh),
        q = F.g(m, Eh),
        r = F.g(m, fi),
        v = F.g(m, Wh);
      return U.j(m, Mi, function () {
        var C = {
          afterPosition: g,
          beforePosition: f,
          duration: n,
          from: q,
          to: r,
          piece: v,
        },
          B = He(k, new Z(null, 2, 5, Ze, [q, ki], null));
        x(B) && ad(B) && (B.h ? B.h(C) : B.call(null, C));
        B = t(l, q);
        return x(B) ? (ad(B) ? (B.h ? B.h(C) : B.call(null, C)) : null) : null;
      });
    }, d);
    d = Y.g(function (m) {
      return dk(m, a);
    }, d);
    Ek(a, d);
    W.v(a, U, Fi, c);
    return b;
  }
  function Nk(a, b, c) {
    var d = E(a),
      e = V(d);
    d = F.g(e, Ch);
    e = F.g(e, lh);
    e = Sj(e);
    if (x(e)) {
      e = F.g(E(a), Fi);
      var f = gk(e, b),
        g = ji.h(c),
        k =
          !1 === Gh.h(c)
            ? 0
            : "number" === typeof g
              ? g
              : x(F.g(Ck, g))
                ? F.g(Ck, g)
                : d;
      d = Y.g(function (q) {
        q = U.j(q, Xh, k);
        return !1 === Gh.h(c) ? U.j(q, Nh, !0) : q;
      }, f);
      var l = {};
      f = new Promise(function (q) {
        l.$ = q;
      });
      e = Xg(e);
      var m = { afterPosition: Xg(b), beforePosition: e, duration: k },
        n = function () {
          var q = ki.h(c);
          x(q) && ad(q) && (q.h ? q.h(m) : q.call(null, m));
          q = t(l, "$");
          return x(q) ? (q.h ? q.h(m) : q.call(null, m)) : null;
        };
      Ek(
        a,
        ue(function (q, r) {
          return 0 === q ? dk(U.j(r, Mi, n), a) : dk(r, a);
        }, d)
      );
      W.v(a, U, Fi, b);
      return f;
    }
    return null;
  }
  function Ok(a, b) {
    var c = E(a),
      d = Ni.h(c),
      e = Li.h(c),
      f = Ma(
        function (g, k) {
          k = V(k);
          k = F.g(k, Oi);
          g[k] = null;
          return g;
        },
        {},
        b
      );
    c = Ma(
      function (g, k) {
        k = V(k);
        var l = F.g(k, Oi);
        return Uc.g(
          g,
          new Promise(function (m) {
            f[l] = m;
          })
        );
      },
      Vc,
      b
    );
    b = Y.g(function (g) {
      g = V(g);
      var k = F.g(g, Oi),
        l = F.g(g, ti);
      return U.j(g, Mi, function () {
        var m = { to: l, id: k },
          n = t(f, k);
        return x(n) ? (ad(n) ? (n.h ? n.h(m) : n.call(null, m)) : null) : null;
      });
    }, b);
    b = Y.g(function (g) {
      g = V(g);
      var k = F.g(g, Oi),
        l = F.g(g, Mi);
      g = F.g(g, ti);
      var m = zj(g, d, e);
      return new w(
        null,
        2,
        [
          Ih,
          function () {
            Tj(k, "transition", ["all ", A.h(800), "ms"].join(""));
            Tj(k, "left", [A.h(sh.h(m)), "px"].join(""));
            Tj(k, "top", [A.h(vh.h(m)), "px"].join(""));
            return ad(l)
              ? W.v(a, Ie, new Z(null, 2, 5, Ze, [ei, k], null), function () {
                return l.B ? l.B() : l.call(null);
              })
              : null;
          },
          Xh,
          800,
        ],
        null
      );
    }, b);
    Ek(a, b);
    return c;
  }
  function Pk(a) {
    var b = E(a);
    b = V(b);
    var c = F.g(b, Bi),
      d = F.g(b, lh);
    b = F.g(b, mi);
    c = Sj(c);
    var e = Sj(d);
    x(x(c) ? e : c) &&
      (Tj(c, "width", ""),
        (d = t(c.getBoundingClientRect(), "width")),
        (e = t(e.getBoundingClientRect(), "width")),
        W.s(a, U, Ni, e, R([Ri, e])),
        Tj(b, "height", [A.h(e), "px"].join("")),
        Tj(c, "width", [A.h(d), "px"].join("")));
    return null;
  }
  function Qk(a) {
    var b = E(a);
    b = V(b);
    b = F.g(b, Yh);
    x(b) && (Sj(b).innerHTML = "");
    we(a, null);
    return null;
  }
  function Rk(a, b) {
    b = $c.g(b, Fi);
    b = Ma(
      function (c, d) {
        var e = S(d, 0, null);
        d = S(d, 1, null);
        if (sd(yk, e)) {
          var f = He(xk, new Z(null, 2, 5, Ze, [e, qh], null));
          f = f.h ? f.h(d) : f.call(null, d);
          return Fa(f)
            ? (Hk(
              R([
                [
                  'Invalid value for config property "',
                  Od(e),
                  '": ',
                  A.h(d),
                ].join(""),
              ])
            ),
              c)
            : U.j(c, e, d);
        }
        0 == Od(e).lastIndexOf("closure_uid", 0) ||
          Hk(R(["Invalid config property:", Od(e)]));
        return c;
      },
      le,
      b
    );
    W.j(a, lg, b);
  }
  function Sk(a) {
    var b = ah(a),
      c = bh(a, R([ch, !0]));
    return mk(a)
      ? new w(null, 1, [Fi, Bk], null)
      : rj(a)
        ? new w(null, 1, [Fi, oj(a)], null)
        : pk(b)
          ? new w(null, 1, [Fi, b], null)
          : id(b)
            ? ((a = mg(c, yk)),
              (b = F.g(b, "position")),
              (a = mk(b) ? U.j(a, Fi, Bk) : a),
              (a = rj(b) ? U.j(a, Fi, oj(b)) : a),
              pk(b) ? U.j(a, Fi, b) : a)
            : le;
  }
  var Tk = new pg(
    null,
    new w(null, 5, [Gh, null, ki, null, zh, null, ji, null, ti, null], null),
    null
  ),
    Uk = new pg(
      null,
      new w(null, 3, [Gh, null, ki, null, ji, null], null),
      null
    );
  function Vk(a) {
    return ((rd(a) || !1) && 0 < a) || sd(Dk, a);
  }
  function Wk(a) {
    return sk(a)
      ? Ik(a, "MOVE_FORMAT")
      : Ga(a) && ok(t(a, "from")) && ok(t(a, "to"))
        ? bh(a, R([ch, !0]))
        : null;
  }
  function Xk(a) {
    return mg(a, Tk);
  }
  function Yk(a) {
    var b = pe(od, a),
      c = Tc(Be(ad, a)),
      d = Y.g(wk, a),
      e = Tc(Be(Vk, d));
    return Y.g(function (f) {
      var g = lg.s,
        k = le,
        l = x(b) ? new w(null, 1, [Gh, !1], null) : null;
      if (x(e)) {
        var m = F.g(Ck, vk(e));
        x(m) || (m = (m = (rd(e) || !1) && 0 < e) ? e : m);
        m = new w(null, 1, [ji, m], null);
      } else m = null;
      return g.call(
        lg,
        R([k, l, m, x(c) ? new w(null, 1, [ki, c], null) : null, f])
      );
    }, Y.g(Xk, Ce(Da, Y.g(Wk, a))));
  }
  function Zk(a) {
    return mg(a, Uk);
  }
  function $k(a) {
    return !1 === a
      ? new w(null, 1, [Gh, !1], null)
      : ad(a)
        ? new w(null, 1, [ki, a], null)
        : Vk(a)
          ? new w(null, 1, [ji, a], null)
          : Ga(a)
            ? bh(a, R([ch, !0]))
            : le;
  }
  function al(a) {
    a = fe(lg, Y.g(Zk, Y.g($k, a)));
    return x(a) ? a : le;
  }
  function bl(a) {
    for (var b = [], c = arguments.length, d = 0; ;)
      if (d < c) b.push(arguments[d]), (d += 1);
      else break;
    b.shift();
    b = Yk(b);
    b = Mk(a, b);
    return M.g(1, O(b)) ? Xg(J(b)) : Xg(b);
  }
  function cl(a, b) {
    a = F.g(E(a), Fi);
    return kk(b) ? ik(a) : lk(b) ? pj(a) : Xg(a);
  }
  function dl(a) {
    for (var b = [], c = arguments.length, d = 0; ;)
      if (d < c) b.push(arguments[d]), (d += 1);
      else break;
    b.shift();
    c = b[0];
    b = al(b);
    return mk(c)
      ? Nk(a, Bk, b)
      : rj(c)
        ? Nk(a, oj(c), b)
        : qk(c)
          ? Nk(a, ah(c), b)
          : rk(c)
            ? Nk(a, hk(c), b)
            : Hk(R(["Invalid position passed to setPosition():", c]));
  }
  function el(a) {
    for (var b = [], c = arguments.length, d = 0; ;)
      if (d < c) b.push(arguments[d]), (d += 1);
      else break;
    b.shift();
    c = b[0];
    d = b.length;
    b = al(b);
    return 0 === d
      ? cl(a, null)
      : lk(c)
        ? cl(a, c)
        : kk(c)
          ? cl(a, c)
          : mk(c)
            ? Nk(a, Bk, b)
            : rj(c)
              ? Nk(a, oj(c), b)
              : qk(c)
                ? Nk(a, ah(c), b)
                : rk(c)
                  ? Nk(a, hk(c), b)
                  : Hk(R(["Invalid value passed to position():", c]));
  }
  function fl(a) {
    for (var b = [], c = arguments.length, d = 0; ;)
      if (d < c) b.push(arguments[d]), (d += 1);
      else break;
    b.shift();
    b = al(b);
    return Nk(a, le, b);
  }
  function gl(a) {
    for (var b = [], c = arguments.length, d = 0; ;)
      if (d < c) b.push(arguments[d]), (d += 1);
      else break;
    b.shift();
    b = al(b);
    return Nk(a, Bk, b);
  }
  function hl(a) {
    for (var b = [], c = arguments.length, d = 0; ;)
      if (d < c) b.push(arguments[d]), (d += 1);
      else break;
    b.shift();
    c = b[0];
    b = al(b);
    return rj(c) ? Nk(a, oj(c), b) : cl(a, "fen");
  }
  function il(a, b) {
    var c = bh(b, R([ch, !0]));
    b = V(c);
    var d = F.g(b, Ui),
      e = F.g(b, Ah),
      f = F.g(b, Bh),
      g = F.g(b, hi),
      k = F.g(b, dj);
    b = Fk(k);
    e = new w(null, 3, [Oi, b, dj, k, Ah, e], null);
    "string" !== typeof f &&
      (ad(f)
        ? ((c = Xg(e)), (f = f.h ? f.h(c) : f.call(null, c)))
        : (Hk(R(["Invalid html property of custom Item:", Pg(R([c]))])),
          (f = "")));
    c = V(new w(null, 4, [Ui, d, Hi, f, Oi, b, hi, g], null));
    d = F.g(c, Ui);
    g = F.g(c, Hi);
    f = F.g(c, Oi);
    k = F.g(c, hi);
    c = E(a);
    c = V(c);
    var l = F.g(c, Ni),
      m = F.g(c, Li);
    c = F.g(c, Qh);
    k = zj(k, l, m);
    m = l / 8;
    l = c * m;
    c *= m;
    d = Aj(
      [
        "\x3cdiv class\x3d'item-18a5b {className}' id\x3d'{id}'style\x3d'height:{height}px;left:{left}px;top:{top}px;width:{width}px;'\x3e",
        A.h(g),
        "\x3c/div\x3e",
      ].join(""),
      new w(
        null,
        6,
        [Ui, d, Ji, l, Oi, f, sh, jh.h(k) - c / 2, vh, Pi.h(k) - l / 2, Qi, c],
        null
      )
    );
    Ek(a, new Z(null, 1, 5, Ze, [new w(null, 1, [eh, d], null)], null));
    W.v(a, Ie, new Z(null, 2, 5, Ze, [Fh, b], null), e);
    return b;
  }
  function jl(a, b) {
    Ek(a, new Z(null, 1, 5, Ze, [new w(null, 1, [rh, b], null)], null));
    W.s(a, Je, new Z(null, 1, 5, Ze, [Fh], null), $c, R([b]));
    return null;
  }
  function kl(a, b) {
    a = Ok(a, new Z(null, 1, 5, Ze, [bh(b, R([ch, !0]))], null));
    return M.g(1, O(a)) ? Xg(J(a)) : Xg(a);
  }
  function ll(a) {
    return Xg(mg(E(a), yk));
  }
  function ml(a, b, c) {
    return sd(zk, b)
      ? (Rk(a, Zc([Nd.h(b), c])), ll(a))
      : x(ba(b))
        ? (Rk(a, bh(b, R([ch, !0]))), ll(a))
        : Hk(R(["Invalid args passed to setConfig():", b, c]));
  }
  function nl(a) {
    for (var b = [], c = arguments.length, d = 0; ;)
      if (d < c) b.push(arguments[d]), (d += 1);
      else break;
    b.shift();
    c = b[0];
    b = b[1];
    return Fa(c)
      ? ll(a)
      : "string" === typeof c
        ? ml(a, c, b)
        : x(ba(c))
          ? ml(a, c, null)
          : Hk(R(["Invalid args passed to config():", c, b]));
  }
  function ol(a, b, c) {
    c = ij(
      Y.g(function (d) {
        return ["#", A.h(d)].join("");
      }, yf(c))
    );
    return Ma(
      function (d, e) {
        var f = e.getBoundingClientRect();
        d = t(f, "left");
        var g = t(f, "width"),
          k = t(f, "height");
        f = t(f, "top");
        return a >= d && a < d + g && b >= f && b < f + k
          ? new Bc(t(t(e, "dataset"), "squareCoord"))
          : null;
      },
      null,
      document.querySelectorAll(c)
    );
  }
  function pl(a, b, c, d, e) {
    var f = E(a),
      g = V(f);
    f = F.g(g, Hh);
    var k = F.g(g, ni),
      l = F.g(g, Li),
      m = F.g(g, Qh),
      n = F.g(g, Fi);
    g = F.g(g, uh);
    if (ad(k)) {
      n = Xg(n);
      try {
        l = { orientation: l, piece: c, position: n, square: b };
        var q = k.h ? k.h(l) : k.call(null, l);
      } catch (r) {
        if (r instanceof Error)
          Gk(R(["Runtime error with provided onDragStart function:", r])),
            (q = null);
        else throw r;
      }
    } else q = null;
    !1 !== q &&
      ((q = F.g(g, b)),
        (q = Sj(q)),
        (k = t(q.getBoundingClientRect(), "height")),
        (l = t(q.getBoundingClientRect(), "width")),
        x(Sj(f)) ||
        ((q = window.document.body),
          (n = V(
            new w(
              null,
              7,
              [Ji, k, Oi, f, Wh, c, Qh, m, Qi, l, xi, d, vi, e],
              null
            )
          )),
          (d = F.g(n, Ji)),
          (e = F.g(n, Oi)),
          (m = F.g(n, Wh)),
          (g = F.g(n, Qh)),
          (k = F.g(n, Qi)),
          (l = F.g(n, xi)),
          (n = F.g(n, vi)),
          (g *= 100),
          (d = Aj(
            [
              "\x3cdiv id\x3d'{id}' class\x3d'dragging-4a6c1' style\x3d'left:{left}px;top:{top}px;height:{height}px;width:{width}px;'\x3e\x3cimg src\x3d'data:image/svg+xml;base64,",
              A.h(Nj.h ? Nj.h(m) : Nj.call(null, m)),
              "' alt\x3d'' style\x3d'height:",
              A.h(g),
              "%;width:",
              A.h(g),
              "%;' /\x3e\x3c/div\x3e",
            ].join(""),
            new w(null, 5, [Ji, d, Oi, e, sh, l, vh, n, Qi, k], null)
          )),
          Uj(q, d)),
        W.s(a, U, $h, !0, R([Dh, Sj(f), wh, b, ci, c])));
  }
  function ql(a, b, c) {
    return window.requestAnimationFrame(function () {
      Tj(a, "left", [A.h(b), "px"].join(""));
      return Tj(a, "top", [A.h(c), "px"].join(""));
    });
  }
  function rl(a, b, c) {
    var d = E(a),
      e = V(d);
    d = F.g(e, Dh);
    var f = F.g(e, ci),
      g = F.g(e, wh),
      k = F.g(e, Vi),
      l = F.g(e, Uh),
      m = F.g(e, Li),
      n = F.g(e, Fi);
    e = F.g(e, Ii);
    e = ol(b, c, e);
    var q = x(e) ? e : "offboard";
    if (ad(l))
      try {
        b = { orientation: m, piece: f, source: g, target: q, x: b, y: c };
        var r = l.h ? l.h(b) : l.call(null, b);
      } catch (v) {
        if (v instanceof Error)
          Gk(R(["Runtime error with provided onDrop function:", v])),
            (r = null);
        else throw v;
      }
    else r = null;
    return M.g(r, "snapback")
      ? (Xj(d), W.s(a, $c, $h, Dh, R([ci, wh])))
      : M.g(r, "remove")
        ? ((g = $c.g(n, g)),
          Xj(d),
          Nk(a, g, new w(null, 1, [Gh, !1], null)),
          W.s(a, $c, $h, Dh, R([ci, wh])))
        : x(e)
          ? (Xj(d),
            Mk(
              a,
              new Z(
                null,
                1,
                5,
                Ze,
                [new w(null, 3, [Gh, !1, zh, g, ti, e], null)],
                null
              )
            ),
            W.s(a, $c, $h, Dh, R([ci, wh])))
          : M.g(q, "offboard") && M.g(k, "snapback")
            ? (Xj(d), W.s(a, $c, $h, Dh, R([ci, wh])))
            : M.g(q, "offboard") && M.g(k, "remove")
              ? ((g = $c.g(n, g)),
                Xj(d),
                Nk(a, g, new w(null, 1, [Gh, !1], null)),
                W.s(a, $c, $h, Dh, R([ci, wh])))
              : null;
  }
  function sl(a, b) {
    window.addEventListener("mousemove", function (c) {
      var d = E(b),
        e = V(d);
      d = F.g(e, $h);
      e = F.g(e, Dh);
      return x(d) ? ql(e, t(c, "clientX"), t(c, "clientY")) : null;
    });
    window.addEventListener("mouseup", function (c) {
      var d = E(b);
      d = V(d);
      d = F.g(d, $h);
      return x(d) ? rl(b, t(c, "clientX"), t(c, "clientY")) : null;
    });
    window.addEventListener("touchend", function (c) {
      var d = E(b);
      d = V(d);
      d = F.g(d, $h);
      c = t(c, "changedTouches");
      c = null == c ? null : c[0];
      return x(x(d) ? c : d) ? rl(b, t(c, "clientX"), t(c, "clientY")) : null;
    });
    window.addEventListener("touchmove", function (c) {
      var d = E(b),
        e = V(d);
      d = F.g(e, $h);
      e = F.g(e, Dh);
      c = t(c, "touches");
      c = null == c ? null : c[0];
      return x(x(d) ? c : d) ? ql(e, t(c, "clientX"), t(c, "clientY")) : null;
    });
    window.addEventListener(
      "resize",
      fa(function () {
        return Pk(b);
      })
    );
    a.addEventListener("mouseleave", function () {
      return W.v(b, U, Sh, null);
    });
    a.addEventListener("mousemove", function (c) {
      var d = t(c, "clientX"),
        e = t(c, "clientY"),
        f = E(b),
        g = V(f),
        k = F.g(g, Li);
      f = F.g(g, Ci);
      var l = F.g(g, Zi),
        m = F.g(g, Fi),
        n = F.g(g, Ii);
      g = F.g(g, Sh);
      d = ol(d, e, n);
      M.g(d, g)
        ? (c = null)
        : (W.v(b, U, Sh, d),
          x(x(g) ? ad(l) : g) &&
          ((e = F.g(m, g)),
            (e = {
              orientation: k,
              piece: e,
              position: Xg(m),
              square: g,
              toSquare: x(d) ? d : "off-board",
            }),
            l.g ? l.g(e, c) : l.call(null, e, c)),
          x(x(d) ? ad(f) : d)
            ? ((l = F.g(m, d)),
              (k = {
                orientation: k,
                piece: l,
                position: Xg(m),
                square: d,
                fromSquare: x(g) ? g : "off-board",
              }),
              (c = f.g ? f.g(k, c) : f.call(null, k, c)))
            : (c = null));
      return c;
    });
    a.addEventListener("mousedown", function (c) {
      if (c.button === 0) return; //ESTO EVITA QUE LAS FLECHAS SE PUEDAN HACER CON CLICK IZQUIERDO
      Rj(c);
      var d = E(b),
        e = V(d);
      d = F.g(e, Si);
      var f = F.g(e, yh),
        g = F.g(e, kh),
        k = F.g(e, Li),
        l = F.g(e, Fi),
        m = F.g(e, Ii);
      F.g(e, li);
      e = t(c, "clientX");
      var n = t(c, "clientY");
      m = ol(e, n, m);
      var q = F.g(l, m);
      ad(g) &&
        ((k = { orientation: k, piece: q, position: Xg(l), square: m }),
          g.g ? g.g(k, c) : g.call(null, k, c));
      x(x(q) ? !0 === d || !0 === f : q) && pl(b, m, q, e, n);
      return null;
    });
    a.addEventListener("mouseup", function (c) {
      if (c.button === 0) return; //ESTO EVITA QUE LAS FLECHAS SE PUEDAN HACER CON CLICK IZQUIERDO
      var d = E(b),
        e = V(d);
      d = F.g(e, Lh);
      var f = F.g(e, Li),
        g = F.g(e, Fi);
      e = F.g(e, Ii);
      e = ol(t(c, "clientX"), t(c, "clientY"), e);
      var k = F.g(g, e);
      ad(d)
        ? ((f = { orientation: f, piece: k, position: Xg(g), square: e }),
          (c = d.g ? d.g(f, c) : d.call(null, f, c)))
        : (c = null);
      return c;
    });
    a.addEventListener("touchstart", function (c) {
      Rj(c);
      var d = E(b),
        e = V(d);
      d = F.g(e, Si);
      var f = F.g(e, si),
        g = F.g(e, Li),
        k = F.g(e, Fi),
        l = F.g(e, Ii),
        m = F.g(e, ri);
      F.g(e, li);
      e = t(c, "touches")[0];
      c = t(e, "clientX");
      e = t(e, "clientY");
      l = ol(c, e, l);
      var n = F.g(k, l);
      ad(f) &&
        ((g = { orientation: g, position: Xg(k) }),
          f.j ? f.j(l, n, g) : f.call(null, l, n, g));
      x(x(n) ? !0 === d || !0 === m : n) && pl(b, l, n, c, e);
      return null;
    });
    a.addEventListener("transitionend", function (c) {
      c = t(t(c, "target"), "id");
      var d = He(E(b), new Z(null, 2, 5, Ze, [ei, c], null));
      x(d)
        ? (d.B ? d.B() : d.call(null),
          (c = W.s(b, Je, new Z(null, 1, 5, Ze, [ei], null), $c, R([c]))))
        : (c = null);
      return c;
    });
  }
  function tl(a) {
    return M.g(a, "white") ? "black" : "white";
  }
  function ul(a) {
    var b = E(a),
      c = V(b);
    b = F.g(c, Ni);
    var d = F.g(c, Fh),
      e = F.g(c, lh),
      f = F.g(c, Li),
      g = F.g(c, Qh),
      k = F.g(c, Fi),
      l = F.g(c, uh);
    c = new ve("");
    for (var m = I(xf(d)), n = null, q = 0, r = 0; ;)
      if (r < q) {
        var v = n.H(null, r);
        Xj(v);
        r += 1;
      } else if ((m = I(m)))
        (n = m),
          ld(n)
            ? ((m = Ub(n)), (r = Vb(n)), (n = m), (q = O(m)), (m = r))
            : ((m = J(n)), Xj(m), (m = K(n)), (n = null), (q = 0)),
          (r = 0);
      else break;
    l = I(yf(l));
    m = null;
    for (q = n = 0; ;)
      if (q < n) (r = m.H(null, q)), Xj(r), (q += 1);
      else if ((l = I(l)))
        (m = l),
          ld(m)
            ? ((l = Ub(m)), (q = Vb(m)), (m = l), (n = O(l)), (l = q))
            : ((l = J(m)), Xj(l), (l = K(m)), (m = null), (n = 0)),
          (q = 0);
      else break;
    W.v(a, U, uh, le);
    k = I(k);
    l = null;
    for (n = m = 0; ;)
      if (n < m)
        (r = l.H(null, n)),
          (q = S(r, 0, null)),
          (r = S(r, 1, null)),
          (v = Zj()),
          W.j(
            c,
            A,
            Oj(
              new w(
                null,
                8,
                [ej, f, Ni, b, Oi, v, ai, !1, Wh, r, Qh, g, hi, q, Qi, b / 8],
                null
              )
            )
          ),
          W.v(a, Ie, new Z(null, 2, 5, Ze, [uh, q], null), v),
          (n += 1);
      else if ((k = I(k)))
        ld(k)
          ? ((m = Ub(k)), (k = Vb(k)), (l = m), (m = O(m)))
          : ((m = J(k)),
            (l = S(m, 0, null)),
            (m = S(m, 1, null)),
            (n = Zj()),
            W.j(
              c,
              A,
              Oj(
                new w(
                  null,
                  8,
                  [ej, f, Ni, b, Oi, n, ai, !1, Wh, m, Qh, g, hi, l, Qi, b / 8],
                  null
                )
              )
            ),
            W.v(a, Ie, new Z(null, 2, 5, Ze, [uh, l], null), n),
            (k = K(k)),
            (l = null),
            (m = 0)),
          (n = 0);
      else break;
    a = I(yf(d));
    d = null;
    for (k = g = 0; ;)
      if (k < g)
        (l = d.H(null, k)),
          tk(l)
            ? W.j(c, A, Mj(lg.s(R([l, new w(null, 2, [Ni, b, Li, f], null)]))))
            : uk(l)
              ? W.j(c, A, Lj(lg.s(R([l, new w(null, 2, [Ni, b, Li, f], null)]))))
              : console.warn(
                "draw-items-instant! Unrecognized Item type:",
                Pg(R([l]))
              ),
          (k += 1);
      else if ((a = I(a)))
        (d = a),
          ld(d)
            ? ((a = Ub(d)), (k = Vb(d)), (d = a), (g = O(a)), (a = k))
            : ((a = J(d)),
              tk(a)
                ? W.j(
                  c,
                  A,
                  Mj(lg.s(R([a, new w(null, 2, [Ni, b, Li, f], null)])))
                )
                : uk(a)
                  ? W.j(
                    c,
                    A,
                    Lj(lg.s(R([a, new w(null, 2, [Ni, b, Li, f], null)])))
                  )
                  : console.warn(
                    "draw-items-instant! Unrecognized Item type:",
                    Pg(R([a]))
                  ),
              (a = K(d)),
              (d = null),
              (g = 0)),
          (k = 0);
      else break;
    Uj(e, E(c));
  }
  function vl(a) {
    a = Be(uk, yf(Fh.h(E(a))));
    return tg(Y.g(hi, a), a);
  }
  function wl(a, b) {
    return jk(Kk(a, "CHESSBOARD_CIRCLE"), vk(b));
  }
  function xl(a, b) {
    Ek(a, new Z(null, 1, 5, Ze, [new w(null, 1, [rh, b], null)], null));
    return W.s(a, Je, new Z(null, 1, 5, Ze, [Fh], null), $c, R([b]));
  }
  function yl(a, b) {
    if (ok(b)) {
      var c = vl(a);
      b = F.g(c, b);
      a = x(b) ? xl(a, Oi.h(b)) : null;
    } else a = xl(a, b);
    return a;
  }
  function zl(a) {
    var b = Y.g(Oi, Be(uk, yf(Fh.h(E(a))))),
      c = Y.g(function (d) {
        return new w(null, 1, [rh, d], null);
      }, b);
    Ek(a, c);
    W.v(a, Je, new Z(null, 1, 5, Ze, [Fh], null), function (d) {
      return ge($c, d, b);
    });
    return null;
  }
  function Al(a, b) {
    var c = V(b);
    b = F.g(c, Rh);
    var d = F.g(c, Oi),
      e = F.g(c, Vh),
      f = F.g(c, mh);
    c = F.g(c, hi);
    var g = E(a),
      k = V(g);
    g = F.g(k, Ni);
    k = F.g(k, Li);
    d = x(d) ? d : Fk("item");
    var l = Bl.h ? Bl.h(f) : Bl.call(null, f);
    f = new w(
      null,
      6,
      [Rh, b, Oi, d, Vh, e, mh, l, hi, c, dj, "CHESSBOARD_CIRCLE"],
      null
    );
    b = Lj(
      new w(null, 7, [Ni, g, Rh, b, Oi, d, Vh, e, Li, k, mh, l, hi, c], null)
    );
    Ek(a, new Z(null, 1, 5, Ze, [new w(null, 1, [eh, b], null)], null));
    W.v(a, Ie, new Z(null, 2, 5, Ze, [Fh, d], null), f);
    return d;
  }
  var Cl = new w(null, 3, [Rh, "#d56129;", Vh, 1, mh, "small"], null);
  function Dl(a) {
    var b = sd(El, a);
    return b ? b : Fl.h ? Fl.h(a) : Fl.call(null, a);
  }
  function Gl(a, b, c, d) {
    var e = ok(b) ? lg.s(R([Cl, new w(null, 1, [hi, b], null)])) : Cl;
    e =
      "string" === typeof c && Fa(Dl(c))
        ? lg.s(R([e, new w(null, 1, [Rh, c], null)]))
        : e;
    c = x(Dl(c)) ? lg.s(R([e, new w(null, 1, [mh, c], null)])) : e;
    d = x(Dl(d)) ? lg.s(R([c, new w(null, 1, [mh, d], null)])) : c;
    b = Ga(b) && ok(t(b, "square")) ? lg.s(R([d, bh(b, R([ch, !0]))])) : d;
    ok(hi.h(b))
      ? ((b = V(b)),
        (d = F.g(b, hi)),
        (c = vl(a)),
        (d = F.g(c, d)),
        x(d)
          ? (xl(a, Oi.h(d)), (a = Al(a, U.j(b, Oi, Oi.h(d)))))
          : (a = Al(a, b)))
      : (a = Hk(R(["Invalid square passed to .addCircle() method:", hi.h(b)])));
    return a;
  }
  var Hl = new w(null, 3, [Rh, "#d56129;", Vh, 1, mh, "large"], null),
    El = new pg(
      null,
      new w(null, 3, ["small", null, "medium", null, "large", null], null),
      null
    );
  function Fl(a) {
    return "number" === typeof a && 0 <= a;
  }
  function Il(a) {
    return sd(El, a) || Fl(a);
  }
  function Bl(a) {
    var b = vk(a);
    return M.g(b, "small")
      ? 0.4
      : M.g(b, "medium")
        ? 0.7
        : M.g(b, "large")
          ? 0.9
          : "number" === typeof a
            ? a
            : 0.9;
  }
  function Jl(a, b) {
    Ek(a, new Z(null, 1, 5, Ze, [new w(null, 1, [rh, b], null)], null));
    return W.s(a, Je, new Z(null, 1, 5, Ze, [Fh], null), $c, R([b]));
  }
  function Kl(a, b) {
    b = V(b);
    var c = F.g(b, Jh),
      d = F.g(b, Ti);
    return Ma(
      function (e, f) {
        var g = S(f, 0, null);
        f = S(f, 1, null);
        return M.g(dj.h(f), "CHESSBOARD_ARROW") &&
          M.g(Jh.h(f), c) &&
          M.g(Ti.h(f), d)
          ? U.j(e, g, f)
          : e;
      },
      le,
      Fh.h(E(a))
    );
  }
  function Ll(a, b) {
    if (sk(b)) {
      b = Kl(a, Ik(b, "ARROW_FORMAT"));
      b = I(xf(b));
      for (var c = null, d = 0, e = 0; ;)
        if (e < d) {
          var f = c.H(null, e);
          Jl(a, f);
          e += 1;
        } else if ((b = I(b)))
          (c = b),
            ld(c)
              ? ((b = Ub(c)),
                (d = Vb(c)),
                (c = b),
                (f = O(b)),
                (b = d),
                (d = f))
              : ((f = J(c)), Jl(a, f), (b = K(c)), (c = null), (d = 0)),
            (e = 0);
        else return null;
    } else
      return (
        (c = He(E(a), new Z(null, 2, 5, Ze, [Fh, b], null))),
        x(c)
          ? Jl(a, b)
          : Hk(R(["Invalid argument passed to removeArrow():", b]))
      );
  }
  function Ml(a, b, c, d) {
    var e = sk(b) ? lg.s(R([Hl, Ik(b, "ARROW_FORMAT")])) : Hl;
    e =
      "string" !== typeof c || Il(c)
        ? e
        : lg.s(R([e, new w(null, 1, [Rh, c], null)]));
    c = Il(c) ? lg.s(R([e, new w(null, 1, [mh, c], null)])) : e;
    d = Il(d) ? lg.s(R([c, new w(null, 1, [mh, d], null)])) : c;
    b =
      Ga(b) && ok(t(b, "start")) && ok(t(b, "end"))
        ? lg.s(R([d, bh(b, R([ch, !0]))]))
        : d;
    e = V(b);
    b = F.g(e, Rh);
    d = F.g(e, Ti);
    c = F.g(e, Vh);
    var f = F.g(e, mh);
    e = F.g(e, Jh);
    var g = E(a),
      k = V(g);
    g = F.g(k, Ni);
    var l = F.g(k, Li);
    k = Fk("item");
    var m = Bl(f);
    f = new w(
      null,
      7,
      [Oi, k, Rh, b, Ti, d, Vh, c, mh, m, Jh, e, dj, "CHESSBOARD_ARROW"],
      null
    );
    b = Mj(
      new w(
        null,
        8,
        [Ni, g, Rh, b, Ti, d, Oi, k, Vh, c, Li, l, mh, m, Jh, e],
        null
      )
    );
    Ek(a, new Z(null, 1, 5, Ze, [new w(null, 1, [eh, b], null)], null));
    W.v(a, Ie, new Z(null, 2, 5, Ze, [Fh, k], null), f);
    return k;
  }
  function Nl(a, b) {
    return jk(Kk(a, "CHESSBOARD_ARROW"), vk(b));
  }
  function Ol(a, b) {
    return jk(Fh.h(E(a)), vk(b));
  }
  var te = function te(a) {
    switch (arguments.length) {
      case 1:
        return te.h(arguments[0]);
      case 2:
        return te.g(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  };
  te.h = function (a) {
    return te.g(a, null);
  };
  te.g = function (a, b) {
    b = vk(b);
    return M.g(b, "white")
      ? (W.v(a, U, Li, "white"), "white")
      : M.g(b, "black")
        ? (W.v(a, U, Li, "black"), "black")
        : M.g(b, "flip")
          ? (W.v(a, Ke, Li, tl),
            (b = Li.h(E(a))),
            M.g(b, "white") ? W.v(a, U, Li, "white") : W.v(a, U, Li, "black"),
            b)
          : Li.h(E(a));
  };
  te.J = 2;
  function Pl(a, b) {
    return jk(Kk(a, "CHESSBOARD_PIECE"), vk(b));
  }
  function Ql(a) {
    return W.v(a, U, qi, !1);
  }
  function Rl(a) {
    return W.v(a, U, qi, !0);
  }
  function Sl(a) {
    return W.v(a, Ke, qi, Fa);
  }
  function Tl(a) {
    var b = E(a),
      c = V(b);
    b = F.g(c, Yh);
    var d = V(c);
    c = F.g(d, Bi);
    var e = F.g(d, Li),
      f = F.g(d, oi),
      g = F.g(d, lh),
      k = F.g(d, mi);
    e = [
      "\x3cdiv class\x3d'chessboard-21da3{show-notation}' id\x3d'{container-id}'\x3e\x3cdiv class\x3dboard-container-41a68\x3e\x3cdiv id\x3d'{items-container-id}' class\x3d'items-container-c9182'\x3e\x3c/div\x3e\x3cdiv id\x3d'{squares-container-id}' class\x3d'squares-2dea6 ",
      M.g(e, "white") ? "orientation-white-4de03" : "orientation-black-a8276",
      "' style\x3d'height:0'\x3e{Squares}\x3c/div\x3e\x3cdiv class\x3d'notation-files-c3c0a'\x3e{NotationFiles}\x3c/div\x3e\x3cdiv class\x3d'notation-ranks-d3f97'\x3e{NotationRanks}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e",
    ].join("");
    var l = Jj(),
      m = Kj();
    f = x(f) ? "" : " hide-notation-cbe71";
    var n = V(d),
      q = F.g(n, Gi);
    d = F.g(n, Kh);
    n = F.g(n, Ii);
    var r = new ve(""),
      v = new ve(!0);
    q = I(Jd(Ag(0, q)));
    for (var C = null, B = 0, G = 0; ;)
      if (G < B) {
        var Q = C.H(null, G);
        W.j(
          r,
          A,
          [
            "\x3cdiv class\x3d'rank-98fa8' data-rank-idx\x3d'",
            A.h(Q + 1),
            "'\x3e",
          ].join("")
        );
        for (var T = I(Ag(0, d)), X = null, na = 0, wa = 0; ;)
          if (wa < na) {
            var nb = X.H(null, wa);
            nb = [A.h(Kc(zg, nb)), A.h(Q + 1)].join("");
            W.j(
              r,
              A,
              Pj(
                new w(
                  null,
                  3,
                  [ih, nb, Rh, x(E(v)) ? "white" : "black", Oi, F.g(n, nb)],
                  null
                )
              )
            );
            W.g(v, Fa);
            wa += 1;
          } else if ((T = I(T)))
            ld(T)
              ? ((na = Ub(T)), (T = Vb(T)), (X = na), (na = O(na)))
              : ((X = J(T)),
                (X = [A.h(Kc(zg, X)), A.h(Q + 1)].join("")),
                W.j(
                  r,
                  A,
                  Pj(
                    new w(
                      null,
                      3,
                      [ih, X, Rh, x(E(v)) ? "white" : "black", Oi, F.g(n, X)],
                      null
                    )
                  )
                ),
                W.g(v, Fa),
                (T = K(T)),
                (X = null),
                (na = 0)),
              (wa = 0);
          else break;
        W.j(r, A, "\x3c/div\x3e");
        W.g(v, Fa);
        G += 1;
      } else if ((q = I(q))) {
        if (ld(q)) (B = Ub(q)), (q = Vb(q)), (C = B), (B = O(B));
        else {
          C = J(q);
          W.j(
            r,
            A,
            [
              "\x3cdiv class\x3d'rank-98fa8' data-rank-idx\x3d'",
              A.h(C + 1),
              "'\x3e",
            ].join("")
          );
          B = I(Ag(0, d));
          G = null;
          for (T = Q = 0; ;)
            if (T < Q)
              (X = G.H(null, T)),
                (X = [A.h(Kc(zg, X)), A.h(C + 1)].join("")),
                W.j(
                  r,
                  A,
                  Pj(
                    new w(
                      null,
                      3,
                      [ih, X, Rh, x(E(v)) ? "white" : "black", Oi, F.g(n, X)],
                      null
                    )
                  )
                ),
                W.g(v, Fa),
                (T += 1);
            else if ((B = I(B)))
              ld(B)
                ? ((Q = Ub(B)), (B = Vb(B)), (G = Q), (Q = O(Q)))
                : ((G = J(B)),
                  (G = [A.h(Kc(zg, G)), A.h(C + 1)].join("")),
                  W.j(
                    r,
                    A,
                    Pj(
                      new w(
                        null,
                        3,
                        [ih, G, Rh, x(E(v)) ? "white" : "black", Oi, F.g(n, G)],
                        null
                      )
                    )
                  ),
                  W.g(v, Fa),
                  (B = K(B)),
                  (G = null),
                  (Q = 0)),
                (T = 0);
            else break;
          W.j(r, A, "\x3c/div\x3e");
          W.g(v, Fa);
          q = K(q);
          C = null;
          B = 0;
        }
        G = 0;
      } else break;
    d = E(r);
    c = Aj(
      e,
      new w(null, 7, [Bi, c, lh, g, gh, l, Th, m, dh, f, ii, d, mi, k], null)
    );
    Sj(b).innerHTML = c;
    Pk(a);
  }
  var Ul = new w(
    null,
    4,
    [
      zi,
      new w(null, 3, [Fi, "outside", bi, !1, dj, "letters"], null),
      sh,
      new w(null, 3, [Fi, "outside", bi, !1, dj, "numbers"], null),
      xh,
      new w(null, 3, [Fi, "outside", bi, !1, dj, "numbers"], null),
      vh,
      new w(null, 3, [Fi, "outside", bi, !1, dj, "letters"], null),
    ],
    null
  );
  function Mb(a, b, c, d) {
    return x(d) &&
      (M.g(Li.h(c), Li.h(d)) ||
        (M.g("white", Li.h(d))
          ? ((a = ["#", A.h(Bi.h(E(b))), " .squares-2dea6"].join("")),
            (a = Sj(a)),
            Wj(a, "orientation-black-a8276"),
            Vj(a, "orientation-white-4de03"))
          : ((a = ["#", A.h(Bi.h(E(b))), " .squares-2dea6"].join("")),
            (a = Sj(a)),
            Wj(a, "orientation-white-4de03"),
            Vj(a, "orientation-black-a8276")),
          ul(b)),
        M.g(qi.h(c), qi.h(d)) ||
        (x(qi.h(d))
          ? Wj(Sj(Bi.h(d)), "hide-notation-cbe71")
          : Vj(Sj(Bi.h(d)), "hide-notation-cbe71")),
        (b = Ei.h(d)),
        (c = Fi.h(c)),
        (d = Fi.h(d)),
        ad(b) && me(c, d))
      ? ((c = Xg(c)), (d = Xg(d)), b.g ? b.g(c, d) : b.call(null, c, d))
      : null;
  }
  function Vl(a, b) {
    var c = Fk("container"),
      d = Fk("items-container"),
      e = Fk("squares-container"),
      f = Fk("dragging-piece");
    b = Sk(b);
    b = Ak(b);
    var g = xj();
    c = U.s(
      b,
      Ch,
      80,
      R([
        ei,
        le,
        Bi,
        c,
        Oh,
        Ul,
        Hh,
        f,
        Fh,
        le,
        lh,
        d,
        Kh,
        8,
        Gi,
        8,
        Qh,
        0.95,
        Yh,
        a,
        qi,
        !0,
        uh,
        le,
        Ii,
        g,
        mi,
        e,
      ])
    );
    var k = new ve(c);
    Kb(k);
    Tl(k);
    sl(a, k);
    ul(k);
    return {
      getCircles: re(wl, k),
      setConfig: re(ml, k),
      getOrientation: se(k),
      clearPieces: re(fl, k),
      pieces: re(Pl, k),
      addItem: re(il, k),
      removeItem: re(jl, k),
      config: re(nl, k),
      setPosition: re(dl, k),
      clearArrows: re(Lk, k),
      showCoordinates: re(Rl, k),
      getPosition: re(cl, k),
      toggleCoordinates: re(Sl, k),
      clearCircles: re(zl, k),
      hideCoordinates: re(Ql, k),
      flip: function () {
        return te.g(k, "flip");
      },
      coordinates: function () {
        return tc;
      },
      arrows: re(Nl, k),
      getArrows: re(Nl, k),
      position: re(el, k),
      setCoordinates: function () {
        return tc;
      },
      items: re(Ol, k),
      destroy: re(Qk, k),
      getItems: re(Ol, k),
      start: re(gl, k),
      clearItems: function () {
        return tc;
      },
      move: re(bl, k),
      getPieces: re(Pl, k),
      setOrientation: re(te, k),
      getCoordinates: function () {
        return tc;
      },
      fen: re(hl, k),
      resize: re(Pk, k),
      clear: re(fl, k),
      removeArrow: re(Ll, k),
      getConfig: re(ll, k),
      circles: re(wl, k),
      addCircle: re(Gl, k),
      orientation: re(te, k),
      addArrow: re(Ml, k),
      removeCircle: re(yl, k),
      moveItem: re(kl, k),
    };
  }
  function Wl(a) {
    switch (arguments.length) {
      case 0:
        return Wl.B();
      case 1:
        return Wl.h(arguments[0]);
      case 2:
        return Wl.g(arguments[0], arguments[1]);
      default:
        throw Error(["Invalid arity: ", A.h(arguments.length)].join(""));
    }
  }
  Wl.B = function () {
    return Gk(
      R([
        "Please pass a DOM element, element ID, or query selector as the first argument to the Chessboard2() function.",
      ])
    );
  };
  Wl.h = function (a) {
    return Wl.g(a, le);
  };
  Wl.g = function (a, b) {
    var c = Sj(a);
    return Fa(c) ? Gk(R(["Unable to find DOM element:", a])) : Vl(c, b);
  };
  Wl.J = 2;
  "undefined" === typeof window ||
    ad(t(window, "Chessboard2")) ||
    (window.Chessboard2 = Wl);
  "undefined" !== typeof exports &&
    me(Ha(t(exports, "nodeName")), "string") &&
    (exports.Chessboard2 = Wl);
}).call(this);
export default Chessboard2;
