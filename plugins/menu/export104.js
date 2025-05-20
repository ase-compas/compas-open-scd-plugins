import { property as er, LitElement as Sr } from "lit-element";
import { NodePart as Cr, AttributePart as Ur, directive as Br } from "lit-html";
var G = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}, E = [], y = [], vr = typeof Uint8Array < "u" ? Uint8Array : Array, V = !1;
function tr() {
  V = !0;
  for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, e = t.length; r < e; ++r)
    E[r] = t[r], y[t.charCodeAt(r)] = r;
  y[45] = 62, y[95] = 63;
}
function Pr(t) {
  V || tr();
  var r, e, n, i, o, s, a = t.length;
  if (a % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  o = t[a - 2] === "=" ? 2 : t[a - 1] === "=" ? 1 : 0, s = new vr(a * 3 / 4 - o), n = o > 0 ? a - 4 : a;
  var c = 0;
  for (r = 0, e = 0; r < n; r += 4, e += 3)
    i = y[t.charCodeAt(r)] << 18 | y[t.charCodeAt(r + 1)] << 12 | y[t.charCodeAt(r + 2)] << 6 | y[t.charCodeAt(r + 3)], s[c++] = i >> 16 & 255, s[c++] = i >> 8 & 255, s[c++] = i & 255;
  return o === 2 ? (i = y[t.charCodeAt(r)] << 2 | y[t.charCodeAt(r + 1)] >> 4, s[c++] = i & 255) : o === 1 && (i = y[t.charCodeAt(r)] << 10 | y[t.charCodeAt(r + 1)] << 4 | y[t.charCodeAt(r + 2)] >> 2, s[c++] = i >> 8 & 255, s[c++] = i & 255), s;
}
function br(t) {
  return E[t >> 18 & 63] + E[t >> 12 & 63] + E[t >> 6 & 63] + E[t & 63];
}
function Dr(t, r, e) {
  for (var n, i = [], o = r; o < e; o += 3)
    n = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2], i.push(br(n));
  return i.join("");
}
function z(t) {
  V || tr();
  for (var r, e = t.length, n = e % 3, i = "", o = [], s = 16383, a = 0, c = e - n; a < c; a += s)
    o.push(Dr(t, a, a + s > c ? c : a + s));
  return n === 1 ? (r = t[e - 1], i += E[r >> 2], i += E[r << 4 & 63], i += "==") : n === 2 && (r = (t[e - 2] << 8) + t[e - 1], i += E[r >> 10], i += E[r >> 4 & 63], i += E[r << 2 & 63], i += "="), o.push(i), o.join("");
}
function N(t, r, e, n, i) {
  var o, s, a = i * 8 - n - 1, c = (1 << a) - 1, l = c >> 1, h = -7, f = e ? i - 1 : 0, d = e ? -1 : 1, p = t[r + f];
  for (f += d, o = p & (1 << -h) - 1, p >>= -h, h += a; h > 0; o = o * 256 + t[r + f], f += d, h -= 8)
    ;
  for (s = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; s = s * 256 + t[r + f], f += d, h -= 8)
    ;
  if (o === 0)
    o = 1 - l;
  else {
    if (o === c)
      return s ? NaN : (p ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, n), o = o - l;
  }
  return (p ? -1 : 1) * s * Math.pow(2, o - n);
}
function nr(t, r, e, n, i, o) {
  var s, a, c, l = o * 8 - i - 1, h = (1 << l) - 1, f = h >> 1, d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1, g = n ? 1 : -1, m = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (a = isNaN(r) ? 1 : 0, s = h) : (s = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), s + f >= 1 ? r += d / c : r += d * Math.pow(2, 1 - f), r * c >= 2 && (s++, c /= 2), s + f >= h ? (a = 0, s = h) : s + f >= 1 ? (a = (r * c - 1) * Math.pow(2, i), s = s + f) : (a = r * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[e + p] = a & 255, p += g, a /= 256, i -= 8)
    ;
  for (s = s << i | a, l += i; l > 0; t[e + p] = s & 255, p += g, s /= 256, l -= 8)
    ;
  t[e + p - g] |= m * 128;
}
var Nr = {}.toString, ir = Array.isArray || function(t) {
  return Nr.call(t) == "[object Array]";
}, Or = 50;
u.TYPED_ARRAY_SUPPORT = G.TYPED_ARRAY_SUPPORT !== void 0 ? G.TYPED_ARRAY_SUPPORT : !0;
b();
function b() {
  return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function A(t, r) {
  if (b() < r)
    throw new RangeError("Invalid typed array length");
  return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r), t.__proto__ = u.prototype) : (t === null && (t = new u(r)), t.length = r), t;
}
function u(t, r, e) {
  if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u))
    return new u(t, r, e);
  if (typeof t == "number") {
    if (typeof r == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return J(this, t);
  }
  return or(this, t, r, e);
}
u.poolSize = 8192;
u._augment = function(t) {
  return t.__proto__ = u.prototype, t;
};
function or(t, r, e, n) {
  if (typeof r == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && r instanceof ArrayBuffer ? qr(t, r, e, n) : typeof r == "string" ? Lr(t, r, e) : Mr(t, r);
}
u.from = function(t, r, e) {
  return or(null, t, r, e);
};
u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && u[Symbol.species]);
function sr(t) {
  if (typeof t != "number")
    throw new TypeError('"size" argument must be a number');
  if (t < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Yr(t, r, e, n) {
  return sr(r), r <= 0 ? A(t, r) : e !== void 0 ? typeof n == "string" ? A(t, r).fill(e, n) : A(t, r).fill(e) : A(t, r);
}
u.alloc = function(t, r, e) {
  return Yr(null, t, r, e);
};
function J(t, r) {
  if (sr(r), t = A(t, r < 0 ? 0 : W(r) | 0), !u.TYPED_ARRAY_SUPPORT)
    for (var e = 0; e < r; ++e)
      t[e] = 0;
  return t;
}
u.allocUnsafe = function(t) {
  return J(null, t);
};
u.allocUnsafeSlow = function(t) {
  return J(null, t);
};
function Lr(t, r, e) {
  if ((typeof e != "string" || e === "") && (e = "utf8"), !u.isEncoding(e))
    throw new TypeError('"encoding" must be a valid string encoding');
  var n = ur(r, e) | 0;
  t = A(t, n);
  var i = t.write(r, e);
  return i !== n && (t = t.slice(0, i)), t;
}
function k(t, r) {
  var e = r.length < 0 ? 0 : W(r.length) | 0;
  t = A(t, e);
  for (var n = 0; n < e; n += 1)
    t[n] = r[n] & 255;
  return t;
}
function qr(t, r, e, n) {
  if (r.byteLength, e < 0 || r.byteLength < e)
    throw new RangeError("'offset' is out of bounds");
  if (r.byteLength < e + (n || 0))
    throw new RangeError("'length' is out of bounds");
  return e === void 0 && n === void 0 ? r = new Uint8Array(r) : n === void 0 ? r = new Uint8Array(r, e) : r = new Uint8Array(r, e, n), u.TYPED_ARRAY_SUPPORT ? (t = r, t.__proto__ = u.prototype) : t = k(t, r), t;
}
function Mr(t, r) {
  if (_(r)) {
    var e = W(r.length) | 0;
    return t = A(t, e), t.length === 0 || r.copy(t, 0, 0, e), t;
  }
  if (r) {
    if (typeof ArrayBuffer < "u" && r.buffer instanceof ArrayBuffer || "length" in r)
      return typeof r.length != "number" || oe(r.length) ? A(t, 0) : k(t, r);
    if (r.type === "Buffer" && ir(r.data))
      return k(t, r.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function W(t) {
  if (t >= b())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + b().toString(16) + " bytes");
  return t | 0;
}
u.isBuffer = S;
function _(t) {
  return !!(t != null && t._isBuffer);
}
u.compare = function(r, e) {
  if (!_(r) || !_(e))
    throw new TypeError("Arguments must be Buffers");
  if (r === e) return 0;
  for (var n = r.length, i = e.length, o = 0, s = Math.min(n, i); o < s; ++o)
    if (r[o] !== e[o]) {
      n = r[o], i = e[o];
      break;
    }
  return n < i ? -1 : i < n ? 1 : 0;
};
u.isEncoding = function(r) {
  switch (String(r).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1;
  }
};
u.concat = function(r, e) {
  if (!ir(r))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (r.length === 0)
    return u.alloc(0);
  var n;
  if (e === void 0)
    for (e = 0, n = 0; n < r.length; ++n)
      e += r[n].length;
  var i = u.allocUnsafe(e), o = 0;
  for (n = 0; n < r.length; ++n) {
    var s = r[n];
    if (!_(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    s.copy(i, o), o += s.length;
  }
  return i;
};
function ur(t, r) {
  if (_(t))
    return t.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
    return t.byteLength;
  typeof t != "string" && (t = "" + t);
  var e = t.length;
  if (e === 0) return 0;
  for (var n = !1; ; )
    switch (r) {
      case "ascii":
      case "latin1":
      case "binary":
        return e;
      case "utf8":
      case "utf-8":
      case void 0:
        return D(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return e * 2;
      case "hex":
        return e >>> 1;
      case "base64":
        return dr(t).length;
      default:
        if (n) return D(t).length;
        r = ("" + r).toLowerCase(), n = !0;
    }
}
u.byteLength = ur;
function kr(t, r, e) {
  var n = !1;
  if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, r >>>= 0, e <= r))
    return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return Kr(this, r, e);
      case "utf8":
      case "utf-8":
        return cr(this, r, e);
      case "ascii":
        return Gr(this, r, e);
      case "latin1":
      case "binary":
        return zr(this, r, e);
      case "base64":
        return jr(this, r, e);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Xr(this, r, e);
      default:
        if (n) throw new TypeError("Unknown encoding: " + t);
        t = (t + "").toLowerCase(), n = !0;
    }
}
u.prototype._isBuffer = !0;
function R(t, r, e) {
  var n = t[r];
  t[r] = t[e], t[e] = n;
}
u.prototype.swap16 = function() {
  var r = this.length;
  if (r % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var e = 0; e < r; e += 2)
    R(this, e, e + 1);
  return this;
};
u.prototype.swap32 = function() {
  var r = this.length;
  if (r % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var e = 0; e < r; e += 4)
    R(this, e, e + 3), R(this, e + 1, e + 2);
  return this;
};
u.prototype.swap64 = function() {
  var r = this.length;
  if (r % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var e = 0; e < r; e += 8)
    R(this, e, e + 7), R(this, e + 1, e + 6), R(this, e + 2, e + 5), R(this, e + 3, e + 4);
  return this;
};
u.prototype.toString = function() {
  var r = this.length | 0;
  return r === 0 ? "" : arguments.length === 0 ? cr(this, 0, r) : kr.apply(this, arguments);
};
u.prototype.equals = function(r) {
  if (!_(r)) throw new TypeError("Argument must be a Buffer");
  return this === r ? !0 : u.compare(this, r) === 0;
};
u.prototype.inspect = function() {
  var r = "", e = Or;
  return this.length > 0 && (r = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (r += " ... ")), "<Buffer " + r + ">";
};
u.prototype.compare = function(r, e, n, i, o) {
  if (!_(r))
    throw new TypeError("Argument must be a Buffer");
  if (e === void 0 && (e = 0), n === void 0 && (n = r ? r.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), e < 0 || n > r.length || i < 0 || o > this.length)
    throw new RangeError("out of range index");
  if (i >= o && e >= n)
    return 0;
  if (i >= o)
    return -1;
  if (e >= n)
    return 1;
  if (e >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === r) return 0;
  for (var s = o - i, a = n - e, c = Math.min(s, a), l = this.slice(i, o), h = r.slice(e, n), f = 0; f < c; ++f)
    if (l[f] !== h[f]) {
      s = l[f], a = h[f];
      break;
    }
  return s < a ? -1 : a < s ? 1 : 0;
};
function fr(t, r, e, n, i) {
  if (t.length === 0) return -1;
  if (typeof e == "string" ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
    if (i) return -1;
    e = t.length - 1;
  } else if (e < 0)
    if (i) e = 0;
    else return -1;
  if (typeof r == "string" && (r = u.from(r, n)), _(r))
    return r.length === 0 ? -1 : K(t, r, e, n, i);
  if (typeof r == "number")
    return r = r & 255, u.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : K(t, [r], e, n, i);
  throw new TypeError("val must be string, number or Buffer");
}
function K(t, r, e, n, i) {
  var o = 1, s = t.length, a = r.length;
  if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
    if (t.length < 2 || r.length < 2)
      return -1;
    o = 2, s /= 2, a /= 2, e /= 2;
  }
  function c(p, g) {
    return o === 1 ? p[g] : p.readUInt16BE(g * o);
  }
  var l;
  if (i) {
    var h = -1;
    for (l = e; l < s; l++)
      if (c(t, l) === c(r, h === -1 ? 0 : l - h)) {
        if (h === -1 && (h = l), l - h + 1 === a) return h * o;
      } else
        h !== -1 && (l -= l - h), h = -1;
  } else
    for (e + a > s && (e = s - a), l = e; l >= 0; l--) {
      for (var f = !0, d = 0; d < a; d++)
        if (c(t, l + d) !== c(r, d)) {
          f = !1;
          break;
        }
      if (f) return l;
    }
  return -1;
}
u.prototype.includes = function(r, e, n) {
  return this.indexOf(r, e, n) !== -1;
};
u.prototype.indexOf = function(r, e, n) {
  return fr(this, r, e, n, !0);
};
u.prototype.lastIndexOf = function(r, e, n) {
  return fr(this, r, e, n, !1);
};
function $r(t, r, e, n) {
  e = Number(e) || 0;
  var i = t.length - e;
  n ? (n = Number(n), n > i && (n = i)) : n = i;
  var o = r.length;
  if (o % 2 !== 0) throw new TypeError("Invalid hex string");
  n > o / 2 && (n = o / 2);
  for (var s = 0; s < n; ++s) {
    var a = parseInt(r.substr(s * 2, 2), 16);
    if (isNaN(a)) return s;
    t[e + s] = a;
  }
  return s;
}
function Vr(t, r, e, n) {
  return L(D(r, t.length - e), t, e, n);
}
function ar(t, r, e, n) {
  return L(ne(r), t, e, n);
}
function Jr(t, r, e, n) {
  return ar(t, r, e, n);
}
function Wr(t, r, e, n) {
  return L(dr(r), t, e, n);
}
function Hr(t, r, e, n) {
  return L(ie(r, t.length - e), t, e, n);
}
u.prototype.write = function(r, e, n, i) {
  if (e === void 0)
    i = "utf8", n = this.length, e = 0;
  else if (n === void 0 && typeof e == "string")
    i = e, n = this.length, e = 0;
  else if (isFinite(e))
    e = e | 0, isFinite(n) ? (n = n | 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var o = this.length - e;
  if ((n === void 0 || n > o) && (n = o), r.length > 0 && (n < 0 || e < 0) || e > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  i || (i = "utf8");
  for (var s = !1; ; )
    switch (i) {
      case "hex":
        return $r(this, r, e, n);
      case "utf8":
      case "utf-8":
        return Vr(this, r, e, n);
      case "ascii":
        return ar(this, r, e, n);
      case "latin1":
      case "binary":
        return Jr(this, r, e, n);
      case "base64":
        return Wr(this, r, e, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Hr(this, r, e, n);
      default:
        if (s) throw new TypeError("Unknown encoding: " + i);
        i = ("" + i).toLowerCase(), s = !0;
    }
};
u.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function jr(t, r, e) {
  return r === 0 && e === t.length ? z(t) : z(t.slice(r, e));
}
function cr(t, r, e) {
  e = Math.min(t.length, e);
  for (var n = [], i = r; i < e; ) {
    var o = t[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
    if (i + a <= e) {
      var c, l, h, f;
      switch (a) {
        case 1:
          o < 128 && (s = o);
          break;
        case 2:
          c = t[i + 1], (c & 192) === 128 && (f = (o & 31) << 6 | c & 63, f > 127 && (s = f));
          break;
        case 3:
          c = t[i + 1], l = t[i + 2], (c & 192) === 128 && (l & 192) === 128 && (f = (o & 15) << 12 | (c & 63) << 6 | l & 63, f > 2047 && (f < 55296 || f > 57343) && (s = f));
          break;
        case 4:
          c = t[i + 1], l = t[i + 2], h = t[i + 3], (c & 192) === 128 && (l & 192) === 128 && (h & 192) === 128 && (f = (o & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | h & 63, f > 65535 && f < 1114112 && (s = f));
      }
    }
    s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
  }
  return Qr(n);
}
var X = 4096;
function Qr(t) {
  var r = t.length;
  if (r <= X)
    return String.fromCharCode.apply(String, t);
  for (var e = "", n = 0; n < r; )
    e += String.fromCharCode.apply(
      String,
      t.slice(n, n += X)
    );
  return e;
}
function Gr(t, r, e) {
  var n = "";
  e = Math.min(t.length, e);
  for (var i = r; i < e; ++i)
    n += String.fromCharCode(t[i] & 127);
  return n;
}
function zr(t, r, e) {
  var n = "";
  e = Math.min(t.length, e);
  for (var i = r; i < e; ++i)
    n += String.fromCharCode(t[i]);
  return n;
}
function Kr(t, r, e) {
  var n = t.length;
  (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
  for (var i = "", o = r; o < e; ++o)
    i += te(t[o]);
  return i;
}
function Xr(t, r, e) {
  for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2)
    i += String.fromCharCode(n[o] + n[o + 1] * 256);
  return i;
}
u.prototype.slice = function(r, e) {
  var n = this.length;
  r = ~~r, e = e === void 0 ? n : ~~e, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < r && (e = r);
  var i;
  if (u.TYPED_ARRAY_SUPPORT)
    i = this.subarray(r, e), i.__proto__ = u.prototype;
  else {
    var o = e - r;
    i = new u(o, void 0);
    for (var s = 0; s < o; ++s)
      i[s] = this[s + r];
  }
  return i;
};
function w(t, r, e) {
  if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + r > e) throw new RangeError("Trying to access beyond buffer length");
}
u.prototype.readUIntLE = function(r, e, n) {
  r = r | 0, e = e | 0, n || w(r, e, this.length);
  for (var i = this[r], o = 1, s = 0; ++s < e && (o *= 256); )
    i += this[r + s] * o;
  return i;
};
u.prototype.readUIntBE = function(r, e, n) {
  r = r | 0, e = e | 0, n || w(r, e, this.length);
  for (var i = this[r + --e], o = 1; e > 0 && (o *= 256); )
    i += this[r + --e] * o;
  return i;
};
u.prototype.readUInt8 = function(r, e) {
  return e || w(r, 1, this.length), this[r];
};
u.prototype.readUInt16LE = function(r, e) {
  return e || w(r, 2, this.length), this[r] | this[r + 1] << 8;
};
u.prototype.readUInt16BE = function(r, e) {
  return e || w(r, 2, this.length), this[r] << 8 | this[r + 1];
};
u.prototype.readUInt32LE = function(r, e) {
  return e || w(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
};
u.prototype.readUInt32BE = function(r, e) {
  return e || w(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
};
u.prototype.readIntLE = function(r, e, n) {
  r = r | 0, e = e | 0, n || w(r, e, this.length);
  for (var i = this[r], o = 1, s = 0; ++s < e && (o *= 256); )
    i += this[r + s] * o;
  return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i;
};
u.prototype.readIntBE = function(r, e, n) {
  r = r | 0, e = e | 0, n || w(r, e, this.length);
  for (var i = e, o = 1, s = this[r + --i]; i > 0 && (o *= 256); )
    s += this[r + --i] * o;
  return o *= 128, s >= o && (s -= Math.pow(2, 8 * e)), s;
};
u.prototype.readInt8 = function(r, e) {
  return e || w(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
};
u.prototype.readInt16LE = function(r, e) {
  e || w(r, 2, this.length);
  var n = this[r] | this[r + 1] << 8;
  return n & 32768 ? n | 4294901760 : n;
};
u.prototype.readInt16BE = function(r, e) {
  e || w(r, 2, this.length);
  var n = this[r + 1] | this[r] << 8;
  return n & 32768 ? n | 4294901760 : n;
};
u.prototype.readInt32LE = function(r, e) {
  return e || w(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
};
u.prototype.readInt32BE = function(r, e) {
  return e || w(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
};
u.prototype.readFloatLE = function(r, e) {
  return e || w(r, 4, this.length), N(this, r, !0, 23, 4);
};
u.prototype.readFloatBE = function(r, e) {
  return e || w(r, 4, this.length), N(this, r, !1, 23, 4);
};
u.prototype.readDoubleLE = function(r, e) {
  return e || w(r, 8, this.length), N(this, r, !0, 52, 8);
};
u.prototype.readDoubleBE = function(r, e) {
  return e || w(r, 8, this.length), N(this, r, !1, 52, 8);
};
function x(t, r, e, n, i, o) {
  if (!_(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (r > i || r < o) throw new RangeError('"value" argument is out of bounds');
  if (e + n > t.length) throw new RangeError("Index out of range");
}
u.prototype.writeUIntLE = function(r, e, n, i) {
  if (r = +r, e = e | 0, n = n | 0, !i) {
    var o = Math.pow(2, 8 * n) - 1;
    x(this, r, e, n, o, 0);
  }
  var s = 1, a = 0;
  for (this[e] = r & 255; ++a < n && (s *= 256); )
    this[e + a] = r / s & 255;
  return e + n;
};
u.prototype.writeUIntBE = function(r, e, n, i) {
  if (r = +r, e = e | 0, n = n | 0, !i) {
    var o = Math.pow(2, 8 * n) - 1;
    x(this, r, e, n, o, 0);
  }
  var s = n - 1, a = 1;
  for (this[e + s] = r & 255; --s >= 0 && (a *= 256); )
    this[e + s] = r / a & 255;
  return e + n;
};
u.prototype.writeUInt8 = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), this[e] = r & 255, e + 1;
};
function O(t, r, e, n) {
  r < 0 && (r = 65535 + r + 1);
  for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i)
    t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> (n ? i : 1 - i) * 8;
}
u.prototype.writeUInt16LE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = r & 255, this[e + 1] = r >>> 8) : O(this, r, e, !0), e + 2;
};
u.prototype.writeUInt16BE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 8, this[e + 1] = r & 255) : O(this, r, e, !1), e + 2;
};
function Y(t, r, e, n) {
  r < 0 && (r = 4294967295 + r + 1);
  for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i)
    t[e + i] = r >>> (n ? i : 3 - i) * 8 & 255;
}
u.prototype.writeUInt32LE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = r >>> 24, this[e + 2] = r >>> 16, this[e + 1] = r >>> 8, this[e] = r & 255) : Y(this, r, e, !0), e + 4;
};
u.prototype.writeUInt32BE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = r & 255) : Y(this, r, e, !1), e + 4;
};
u.prototype.writeIntLE = function(r, e, n, i) {
  if (r = +r, e = e | 0, !i) {
    var o = Math.pow(2, 8 * n - 1);
    x(this, r, e, n, o - 1, -o);
  }
  var s = 0, a = 1, c = 0;
  for (this[e] = r & 255; ++s < n && (a *= 256); )
    r < 0 && c === 0 && this[e + s - 1] !== 0 && (c = 1), this[e + s] = (r / a >> 0) - c & 255;
  return e + n;
};
u.prototype.writeIntBE = function(r, e, n, i) {
  if (r = +r, e = e | 0, !i) {
    var o = Math.pow(2, 8 * n - 1);
    x(this, r, e, n, o - 1, -o);
  }
  var s = n - 1, a = 1, c = 0;
  for (this[e + s] = r & 255; --s >= 0 && (a *= 256); )
    r < 0 && c === 0 && this[e + s + 1] !== 0 && (c = 1), this[e + s] = (r / a >> 0) - c & 255;
  return e + n;
};
u.prototype.writeInt8 = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (r = Math.floor(r)), r < 0 && (r = 255 + r + 1), this[e] = r & 255, e + 1;
};
u.prototype.writeInt16LE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = r & 255, this[e + 1] = r >>> 8) : O(this, r, e, !0), e + 2;
};
u.prototype.writeInt16BE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 8, this[e + 1] = r & 255) : O(this, r, e, !1), e + 2;
};
u.prototype.writeInt32LE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = r & 255, this[e + 1] = r >>> 8, this[e + 2] = r >>> 16, this[e + 3] = r >>> 24) : Y(this, r, e, !0), e + 4;
};
u.prototype.writeInt32BE = function(r, e, n) {
  return r = +r, e = e | 0, n || x(this, r, e, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = r >>> 24, this[e + 1] = r >>> 16, this[e + 2] = r >>> 8, this[e + 3] = r & 255) : Y(this, r, e, !1), e + 4;
};
function lr(t, r, e, n, i, o) {
  if (e + n > t.length) throw new RangeError("Index out of range");
  if (e < 0) throw new RangeError("Index out of range");
}
function hr(t, r, e, n, i) {
  return i || lr(t, r, e, 4), nr(t, r, e, n, 23, 4), e + 4;
}
u.prototype.writeFloatLE = function(r, e, n) {
  return hr(this, r, e, !0, n);
};
u.prototype.writeFloatBE = function(r, e, n) {
  return hr(this, r, e, !1, n);
};
function pr(t, r, e, n, i) {
  return i || lr(t, r, e, 8), nr(t, r, e, n, 52, 8), e + 8;
}
u.prototype.writeDoubleLE = function(r, e, n) {
  return pr(this, r, e, !0, n);
};
u.prototype.writeDoubleBE = function(r, e, n) {
  return pr(this, r, e, !1, n);
};
u.prototype.copy = function(r, e, n, i) {
  if (n || (n = 0), !i && i !== 0 && (i = this.length), e >= r.length && (e = r.length), e || (e = 0), i > 0 && i < n && (i = n), i === n || r.length === 0 || this.length === 0) return 0;
  if (e < 0)
    throw new RangeError("targetStart out of bounds");
  if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
  if (i < 0) throw new RangeError("sourceEnd out of bounds");
  i > this.length && (i = this.length), r.length - e < i - n && (i = r.length - e + n);
  var o = i - n, s;
  if (this === r && n < e && e < i)
    for (s = o - 1; s >= 0; --s)
      r[s + e] = this[s + n];
  else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
    for (s = 0; s < o; ++s)
      r[s + e] = this[s + n];
  else
    Uint8Array.prototype.set.call(
      r,
      this.subarray(n, n + o),
      e
    );
  return o;
};
u.prototype.fill = function(r, e, n, i) {
  if (typeof r == "string") {
    if (typeof e == "string" ? (i = e, e = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), r.length === 1) {
      var o = r.charCodeAt(0);
      o < 256 && (r = o);
    }
    if (i !== void 0 && typeof i != "string")
      throw new TypeError("encoding must be a string");
    if (typeof i == "string" && !u.isEncoding(i))
      throw new TypeError("Unknown encoding: " + i);
  } else typeof r == "number" && (r = r & 255);
  if (e < 0 || this.length < e || this.length < n)
    throw new RangeError("Out of range index");
  if (n <= e)
    return this;
  e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
  var s;
  if (typeof r == "number")
    for (s = e; s < n; ++s)
      this[s] = r;
  else {
    var a = _(r) ? r : D(new u(r, i).toString()), c = a.length;
    for (s = 0; s < n - e; ++s)
      this[s + e] = a[s % c];
  }
  return this;
};
var Zr = /[^+\/0-9A-Za-z-_]/g;
function re(t) {
  if (t = ee(t).replace(Zr, ""), t.length < 2) return "";
  for (; t.length % 4 !== 0; )
    t = t + "=";
  return t;
}
function ee(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function te(t) {
  return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function D(t, r) {
  r = r || 1 / 0;
  for (var e, n = t.length, i = null, o = [], s = 0; s < n; ++s) {
    if (e = t.charCodeAt(s), e > 55295 && e < 57344) {
      if (!i) {
        if (e > 56319) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        } else if (s + 1 === n) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = e;
        continue;
      }
      if (e < 56320) {
        (r -= 3) > -1 && o.push(239, 191, 189), i = e;
        continue;
      }
      e = (i - 55296 << 10 | e - 56320) + 65536;
    } else i && (r -= 3) > -1 && o.push(239, 191, 189);
    if (i = null, e < 128) {
      if ((r -= 1) < 0) break;
      o.push(e);
    } else if (e < 2048) {
      if ((r -= 2) < 0) break;
      o.push(
        e >> 6 | 192,
        e & 63 | 128
      );
    } else if (e < 65536) {
      if ((r -= 3) < 0) break;
      o.push(
        e >> 12 | 224,
        e >> 6 & 63 | 128,
        e & 63 | 128
      );
    } else if (e < 1114112) {
      if ((r -= 4) < 0) break;
      o.push(
        e >> 18 | 240,
        e >> 12 & 63 | 128,
        e >> 6 & 63 | 128,
        e & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return o;
}
function ne(t) {
  for (var r = [], e = 0; e < t.length; ++e)
    r.push(t.charCodeAt(e) & 255);
  return r;
}
function ie(t, r) {
  for (var e, n, i, o = [], s = 0; s < t.length && !((r -= 2) < 0); ++s)
    e = t.charCodeAt(s), n = e >> 8, i = e % 256, o.push(i), o.push(n);
  return o;
}
function dr(t) {
  return Pr(re(t));
}
function L(t, r, e, n) {
  for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i)
    r[i + e] = t[i];
  return i;
}
function oe(t) {
  return t !== t;
}
function S(t) {
  return t != null && (!!t._isBuffer || gr(t) || se(t));
}
function gr(t) {
  return !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
function se(t) {
  return typeof t.readFloatLE == "function" && typeof t.slice == "function" && gr(t.slice(0, 0));
}
const ue = 46, fe = /\\(\\)?/g, ae = RegExp(
  // Match anything that isn't a dot or bracket.
  `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
  "g"
), ce = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, le = /^\w*$/, he = function(t) {
  return Object.prototype.toString.call(t);
}, wr = function(t) {
  const r = typeof t;
  return r === "symbol" || r === "object" && t && he(t) === "[object Symbol]";
}, pe = function(t, r) {
  if (Array.isArray(t))
    return !1;
  const e = typeof t;
  return e === "number" || e === "symbol" || e === "boolean" || !t || wr(t) ? !0 : le.test(t) || !ce.test(t) || r != null && t in Object(r);
}, de = function(t) {
  const r = [];
  return t.charCodeAt(0) === ue && r.push(""), t.replace(ae, function(e, n, i, o) {
    let s = e;
    i ? s = o.replace(fe, "$1") : n && (s = n.trim()), r.push(s);
  }), r;
}, ge = function(t, r) {
  return Array.isArray(t) ? t : pe(t, r) ? [t] : de(t);
}, we = function(t) {
  if (typeof t == "string" || wr(t)) return t;
  const r = `${t}`;
  return r == "0" && 1 / t == -INFINITY ? "-0" : r;
}, me = function(t, r) {
  r = ge(r, t);
  let e = 0;
  const n = r.length;
  for (; t != null && e < n; )
    t = t[we(r[e++])];
  return e && e === n ? t : void 0;
}, xe = function(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}, mr = function(t) {
  if (t == null)
    return [void 0, void 0];
  if (typeof t != "object")
    return [Error('Invalid option "columns": expect an array or an object')];
  if (Array.isArray(t)) {
    const r = [];
    for (const e of t)
      if (typeof e == "string")
        r.push({
          key: e,
          header: e
        });
      else if (typeof e == "object" && e !== null && !Array.isArray(e)) {
        if (!e.key)
          return [
            Error('Invalid column definition: property "key" is required')
          ];
        e.header === void 0 && (e.header = e.key), r.push(e);
      } else
        return [
          Error("Invalid column definition: expect a string or an object")
        ];
    t = r;
  } else {
    const r = [];
    for (const e in t)
      r.push({
        key: e,
        header: t[e]
      });
    t = r;
  }
  return [void 0, t];
};
class C extends Error {
  constructor(r, e, ...n) {
    Array.isArray(e) && (e = e.join(" ")), super(e), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, C), this.code = r;
    for (const i of n)
      for (const o in i) {
        const s = i[o];
        this[o] = S(s) ? s.toString() : s == null ? s : JSON.parse(JSON.stringify(s));
      }
  }
}
const ye = function(t) {
  return t.replace(/([A-Z])/g, function(r, e) {
    return "_" + e.toLowerCase();
  });
}, xr = function(t) {
  const r = {};
  for (const i in t)
    r[ye(i)] = t[i];
  if (r.bom === void 0 || r.bom === null || r.bom === !1)
    r.bom = !1;
  else if (r.bom !== !0)
    return [
      new C("CSV_OPTION_BOOLEAN_INVALID_TYPE", [
        "option `bom` is optional and must be a boolean value,",
        `got ${JSON.stringify(r.bom)}`
      ])
    ];
  if (r.delimiter === void 0 || r.delimiter === null)
    r.delimiter = ",";
  else if (S(r.delimiter))
    r.delimiter = r.delimiter.toString();
  else if (typeof r.delimiter != "string")
    return [
      new C("CSV_OPTION_DELIMITER_INVALID_TYPE", [
        "option `delimiter` must be a buffer or a string,",
        `got ${JSON.stringify(r.delimiter)}`
      ])
    ];
  if (r.quote === void 0 || r.quote === null)
    r.quote = '"';
  else if (r.quote === !0)
    r.quote = '"';
  else if (r.quote === !1)
    r.quote = "";
  else if (S(r.quote))
    r.quote = r.quote.toString();
  else if (typeof r.quote != "string")
    return [
      new C("CSV_OPTION_QUOTE_INVALID_TYPE", [
        "option `quote` must be a boolean, a buffer or a string,",
        `got ${JSON.stringify(r.quote)}`
      ])
    ];
  if ((r.quoted === void 0 || r.quoted === null) && (r.quoted = !1), r.escape_formulas === void 0 || r.escape_formulas === null)
    r.escape_formulas = !1;
  else if (typeof r.escape_formulas != "boolean")
    return [
      new C("CSV_OPTION_ESCAPE_FORMULAS_INVALID_TYPE", [
        "option `escape_formulas` must be a boolean,",
        `got ${JSON.stringify(r.escape_formulas)}`
      ])
    ];
  if ((r.quoted_empty === void 0 || r.quoted_empty === null) && (r.quoted_empty = void 0), r.quoted_match === void 0 || r.quoted_match === null || r.quoted_match === !1 ? r.quoted_match = null : Array.isArray(r.quoted_match) || (r.quoted_match = [r.quoted_match]), r.quoted_match)
    for (const i of r.quoted_match) {
      const o = typeof i == "string", s = i instanceof RegExp;
      if (!o && !s)
        return [
          Error(
            `Invalid Option: quoted_match must be a string or a regex, got ${JSON.stringify(i)}`
          )
        ];
    }
  if ((r.quoted_string === void 0 || r.quoted_string === null) && (r.quoted_string = !1), (r.eof === void 0 || r.eof === null) && (r.eof = !0), r.escape === void 0 || r.escape === null)
    r.escape = '"';
  else if (S(r.escape))
    r.escape = r.escape.toString();
  else if (typeof r.escape != "string")
    return [
      Error(
        `Invalid Option: escape must be a buffer or a string, got ${JSON.stringify(r.escape)}`
      )
    ];
  if (r.escape.length > 1)
    return [
      Error(
        `Invalid Option: escape must be one character, got ${r.escape.length} characters`
      )
    ];
  (r.header === void 0 || r.header === null) && (r.header = !1);
  const [e, n] = mr(r.columns);
  if (e !== void 0) return [e];
  if (r.columns = n, (r.quoted === void 0 || r.quoted === null) && (r.quoted = !1), (r.cast === void 0 || r.cast === null) && (r.cast = {}), (r.cast.bigint === void 0 || r.cast.bigint === null) && (r.cast.bigint = (i) => "" + i), (r.cast.boolean === void 0 || r.cast.boolean === null) && (r.cast.boolean = (i) => i ? "1" : ""), (r.cast.date === void 0 || r.cast.date === null) && (r.cast.date = (i) => "" + i.getTime()), (r.cast.number === void 0 || r.cast.number === null) && (r.cast.number = (i) => "" + i), (r.cast.object === void 0 || r.cast.object === null) && (r.cast.object = (i) => JSON.stringify(i)), (r.cast.string === void 0 || r.cast.string === null) && (r.cast.string = function(i) {
    return i;
  }), r.on_record !== void 0 && typeof r.on_record != "function")
    return [Error('Invalid Option: "on_record" must be a function.')];
  if (r.record_delimiter === void 0 || r.record_delimiter === null)
    r.record_delimiter = `
`;
  else if (S(r.record_delimiter))
    r.record_delimiter = r.record_delimiter.toString();
  else if (typeof r.record_delimiter != "string")
    return [
      Error(
        `Invalid Option: record_delimiter must be a buffer or a string, got ${JSON.stringify(r.record_delimiter)}`
      )
    ];
  switch (r.record_delimiter) {
    case "unix":
      r.record_delimiter = `
`;
      break;
    case "mac":
      r.record_delimiter = "\r";
      break;
    case "windows":
      r.record_delimiter = `\r
`;
      break;
    case "ascii":
      r.record_delimiter = "";
      break;
    case "unicode":
      r.record_delimiter = "\u2028";
      break;
  }
  return [void 0, r];
}, Ee = u.from([239, 187, 191]), _e = function(t, r, e) {
  return {
    options: t,
    state: r,
    info: e,
    __transform: function(n, i) {
      if (!Array.isArray(n) && typeof n != "object")
        return Error(
          `Invalid Record: expect an array or an object, got ${JSON.stringify(n)}`
        );
      if (this.info.records === 0) {
        if (Array.isArray(n)) {
          if (this.options.header === !0 && this.options.columns === void 0)
            return Error(
              "Undiscoverable Columns: header option requires column option or object records"
            );
        } else if (this.options.columns === void 0) {
          const [a, c] = mr(Object.keys(n));
          if (a) return;
          this.options.columns = c;
        }
      }
      if (this.info.records === 0) {
        this.bom(i);
        const a = this.headers(i);
        if (a) return a;
      }
      try {
        this.options.on_record && this.options.on_record(n, this.info.records);
      } catch (a) {
        return a;
      }
      let o, s;
      if (this.options.eof) {
        if ([o, s] = this.stringify(n), o) return o;
        if (s === void 0)
          return;
        s = s + this.options.record_delimiter;
      } else {
        if ([o, s] = this.stringify(n), o) return o;
        if (s === void 0)
          return;
        (this.options.header || this.info.records) && (s = this.options.record_delimiter + s);
      }
      this.info.records++, i(s);
    },
    stringify: function(n, i = !1) {
      if (typeof n != "object")
        return [void 0, n];
      const { columns: o } = this.options, s = [];
      if (Array.isArray(n)) {
        o && n.splice(o.length);
        for (let c = 0; c < n.length; c++) {
          const l = n[c], [h, f] = this.__cast(l, {
            index: c,
            column: c,
            records: this.info.records,
            header: i
          });
          if (h) return [h];
          s[c] = [f, l];
        }
      } else
        for (let c = 0; c < o.length; c++) {
          const l = me(n, o[c].key), [h, f] = this.__cast(l, {
            index: c,
            column: o[c].key,
            records: this.info.records,
            header: i
          });
          if (h) return [h];
          s[c] = [f, l];
        }
      let a = "";
      for (let c = 0; c < s.length; c++) {
        let l, h, [f, d] = s[c];
        if (typeof f == "string")
          l = this.options;
        else if (xe(f)) {
          if (l = f, f = l.value, delete l.value, typeof f != "string" && f !== void 0 && f !== null && h)
            return [
              Error(
                `Invalid Casting Value: returned value must return a string, null or undefined, got ${JSON.stringify(f)}`
              )
            ];
          if (l = { ...this.options, ...l }, [h, l] = xr(l), h !== void 0)
            return [h];
        } else if (f == null)
          l = this.options;
        else
          return [
            Error(
              `Invalid Casting Value: returned value must return a string, an object, null or undefined, got ${JSON.stringify(f)}`
            )
          ];
        const {
          delimiter: p,
          escape: g,
          quote: m,
          quoted: j,
          quoted_empty: B,
          quoted_string: q,
          quoted_match: v,
          record_delimiter: Fr,
          escape_formulas: Ir
        } = l;
        if (f === "" && d === "") {
          let T = v && v.filter((U) => typeof U == "string" ? f.indexOf(U) !== -1 : U.test(f));
          T = T && T.length > 0, (T || B === !0 || q === !0 && B !== !1) === !0 && (f = m + f + m), a += f;
        } else if (f) {
          if (typeof f != "string")
            return [
              Error(
                `Formatter must return a string, null or undefined, got ${JSON.stringify(f)}`
              )
            ];
          const T = p.length && f.indexOf(p) >= 0, M = m !== "" && f.indexOf(m) >= 0, U = f.indexOf(g) >= 0 && g !== m, Rr = f.indexOf(Fr) >= 0, Tr = q && typeof d == "string";
          let P = v && v.filter((I) => typeof I == "string" ? f.indexOf(I) !== -1 : I.test(f));
          if (P = P && P.length > 0, Ir)
            switch (f[0]) {
              case "=":
              case "+":
              case "-":
              case "@":
              case "	":
              case "\r":
              case "＝":
              // Unicode '='
              case "＋":
              // Unicode '+'
              case "－":
              // Unicode '-'
              case "＠":
                f = `'${f}`;
                break;
            }
          const Q = M === !0 || T || Rr || j || Tr || P;
          if (Q === !0 && U === !0) {
            const I = g === "\\" ? new RegExp(g + g, "g") : new RegExp(g, "g");
            f = f.replace(I, g + g);
          }
          if (M === !0) {
            const I = new RegExp(m, "g");
            f = f.replace(I, g + m);
          }
          Q === !0 && (f = m + f + m), a += f;
        } else (B === !0 || d === "" && q === !0 && B !== !1) && (a += m + m);
        c !== s.length - 1 && (a += p);
      }
      return [void 0, a];
    },
    bom: function(n) {
      this.options.bom === !0 && n(Ee);
    },
    headers: function(n) {
      if (this.options.header === !1 || this.options.columns === void 0)
        return;
      let i, o = this.options.columns.map((s) => s.header);
      if (this.options.eof ? ([i, o] = this.stringify(o, !0), o += this.options.record_delimiter) : [i, o] = this.stringify(o), i) return i;
      n(o);
    },
    __cast: function(n, i) {
      const o = typeof n;
      try {
        return o === "string" ? [void 0, this.options.cast.string(n, i)] : o === "bigint" ? [void 0, this.options.cast.bigint(n, i)] : o === "number" ? [void 0, this.options.cast.number(n, i)] : o === "boolean" ? [void 0, this.options.cast.boolean(n, i)] : n instanceof Date ? [void 0, this.options.cast.date(n, i)] : o === "object" && n !== null ? [void 0, this.options.cast.object(n, i)] : [void 0, n, n];
      } catch (s) {
        return [s];
      }
    }
  };
}, Ae = function(t, r = {}) {
  const e = [], [n, i] = xr(r);
  if (n !== void 0) throw n;
  const a = _e(i, {
    stop: !1
  }, {
    records: 0
  });
  for (const c of t) {
    const l = a.__transform(c, function(h) {
      e.push(h);
    });
    if (l !== void 0) throw l;
  }
  if (e.length === 0) {
    a.bom((l) => {
      e.push(l);
    });
    const c = a.headers((l) => {
      e.push(l);
    });
    if (c !== void 0) throw c;
  }
  return e.join("");
};
function Z(t, r) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...r,
    detail: { ...t, ...r?.detail }
  });
}
const Fe = 1e3 * 60, rr = "langChanged";
function Ie(t, r, e) {
  return Object.entries($(r || {})).reduce((n, [i, o]) => n.replace(new RegExp(`{{[  ]*${i}[  ]*}}`, "gm"), String($(o))), t);
}
function Re(t, r) {
  const e = t.split(".");
  let n = r.strings;
  for (; n != null && e.length > 0; )
    n = n[e.shift()];
  return n != null ? n.toString() : null;
}
function $(t) {
  return typeof t == "function" ? t() : t;
}
const Te = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: Re,
  interpolate: Ie,
  translationCache: {}
});
let Se = Te();
function Ce(t, r) {
  const e = (n) => t(n.detail);
  return window.addEventListener(rr, e, r), () => window.removeEventListener(rr, e);
}
function F(t, r, e = Se) {
  let n = e.translationCache[t] || (e.translationCache[t] = e.lookup(t, e) || e.empty(t, e));
  return r = r != null ? $(r) : null, r != null ? e.interpolate(n, r, e) : n;
}
function yr(t) {
  return t instanceof Cr ? t.startNode.isConnected : t instanceof Ur ? t.committer.element.isConnected : t.element.isConnected;
}
function Ue(t) {
  for (const [r] of t)
    yr(r) || t.delete(r);
}
function Be(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function ve(t, r) {
  setInterval(() => Be(() => Ue(t)), r);
}
const H = /* @__PURE__ */ new Map();
function Pe() {
  Ce((t) => {
    for (const [r, e] of H)
      yr(r) && Er(r, e, t);
  });
}
Pe();
ve(H, Fe);
function Er(t, r, e) {
  const n = r(e);
  t.value !== n && (t.setValue(n), t.commit());
}
Br((t) => (r) => {
  H.set(r, t), Er(r, t);
});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
`${String(Math.random()).slice(2)}`;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t });
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
let be = !1;
(() => {
  try {
    const t = {
      get capture() {
        return be = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
typeof window < "u" && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.4.1");
const De = "IEC_60870_5_104", Ne = `Private[type="${De}"]`;
function Oe(t) {
  const r = [], e = [];
  return t.querySelectorAll(`${Ne} > Address`).forEach((i) => {
    const o = Ye(i, t);
    o.error ? e.push(o.error) : r.push(o.signal);
  }), { signals: r, errors: e };
}
function Ye(t, r) {
  const e = t.getAttribute("ti"), n = t.getAttribute("ioa");
  if (e === null || n === null || n.length < 4)
    return { signal: null, error: F("protocol104.export.errors.tiOrIoaInvalid", { ti: e ?? "", ioa: n ?? "" }) };
  const { signalNumber: i, bayName: o } = qe(n), s = Le(e);
  if (s === 2)
    return { signal: null, error: F("protocol104.export.errors.unknownSignalType", { ti: e ?? "", ioa: n ?? "" }) };
  const a = s === 0;
  t.parentElement;
  const c = t.closest("DOI");
  if (!c)
    return { signal: null, error: F("protocol104.export.errors.noDoi", { ioa: n ?? "" }) };
  const l = c.getAttribute("desc"), h = `:root > Substation > VoltageLevel > Bay[name="${o}"]`, f = r.querySelector(h);
  if (!f)
    return { signal: null, error: F("protocol104.export.errors.noBay", { bayName: o, ioa: n ?? "" }) };
  const d = f.closest("VoltageLevel");
  if (!d)
    return { signal: null, error: F("protocol104.export.errors.noVoltageLevel", { bayName: o, ioa: n ?? "" }) };
  const p = d.getAttribute("name"), g = d.closest("Substation");
  return g ? {
    signal: {
      name: `${g.getAttribute("name")}${p}${o}${l}`,
      signalNumber: i,
      isMonitorSignal: a,
      ti: e,
      ioa: n
    }
  } : { signal: null, error: F("protocol104.export.errors.noSubstation", { voltageLevelName: p ?? "", ioa: n ?? "" }) };
}
function Le(t) {
  const r = parseInt(t);
  return isNaN(r) ? 2 : r >= 1 && r <= 21 || r >= 30 && r <= 40 ? 0 : r >= 45 && r <= 51 || r >= 58 && r <= 64 ? 1 : 2;
}
function qe(t) {
  const r = t.slice(-4), e = `V${t.slice(0, -4)}`;
  return { signalNumber: r, bayName: e };
}
var Me = Object.defineProperty, _r = (t, r, e, n) => {
  for (var i = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (i = s(r, e, i) || i);
  return i && Me(r, e, i), i;
};
class Ar extends Sr {
  constructor() {
    super(...arguments), this.csvHeaders = [
      "Id",
      "Name",
      "Signal Number",
      "mIOA",
      "cIOA"
    ];
  }
  async run() {
    const { signals: r, errors: e } = Oe(this.doc);
    if (e.forEach((s) => this.logWarning(s)), r.length === 0) {
      this.dispatchEvent(Z({
        kind: "info",
        title: F("protocol104.export.noSignalsFound")
      }));
      return;
    }
    const n = this.generateCsvLines(r), i = Ae(n, {
      header: !0,
      columns: this.csvHeaders
    }), o = new Blob([i], {
      type: "text/csv"
    });
    this.downloadCsv(o);
  }
  logWarning(r) {
    this.dispatchEvent(Z({
      kind: "warning",
      title: F("protocol104.export.invalidSignalWarning"),
      message: r
    }));
  }
  generateCsvLines(r) {
    const e = [];
    for (const n of r) {
      const i = [
        "",
        n.name ?? "",
        n.signalNumber ?? ""
      ];
      n.isMonitorSignal ? i.push(n.ioa ?? "", "") : i.push("", n.ioa ?? ""), e.push(i);
    }
    return e;
  }
  downloadCsv(r) {
    const e = document.createElement("a");
    e.download = this.docName + "-104-signals.csv", e.href = URL.createObjectURL(r), e.dataset.downloadurl = ["text/csv", e.download, e.href].join(":"), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e), URL.revokeObjectURL(e.href);
  }
}
_r([
  er({ attribute: !1 })
], Ar.prototype, "doc");
_r([
  er()
], Ar.prototype, "docName");
export {
  Ar as default
};
