import { LitElement as K, query as I, property as m, state as g, html as f, css as ge, customElement as H, queryAsync as Ne, eventOptions as xt } from "lit-element";
import { NodePart as kt, AttributePart as _t, directive as Oe } from "lit-html";
import { Select as wt } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as At } from "@material/mwc-textfield";
import "@material/mwc-formfield";
var Ce = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}, P = [], F = [], St = typeof Uint8Array < "u" ? Uint8Array : Array, be = !1;
function ze() {
  be = !0;
  for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, t = r.length; e < t; ++e)
    P[e] = r[e], F[r.charCodeAt(e)] = e;
  F[45] = 62, F[95] = 63;
}
function Ct(r) {
  be || ze();
  var e, t, i, a, n, c, o = r.length;
  if (o % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  n = r[o - 2] === "=" ? 2 : r[o - 1] === "=" ? 1 : 0, c = new St(o * 3 / 4 - n), i = n > 0 ? o - 4 : o;
  var d = 0;
  for (e = 0, t = 0; e < i; e += 4, t += 3)
    a = F[r.charCodeAt(e)] << 18 | F[r.charCodeAt(e + 1)] << 12 | F[r.charCodeAt(e + 2)] << 6 | F[r.charCodeAt(e + 3)], c[d++] = a >> 16 & 255, c[d++] = a >> 8 & 255, c[d++] = a & 255;
  return n === 2 ? (a = F[r.charCodeAt(e)] << 2 | F[r.charCodeAt(e + 1)] >> 4, c[d++] = a & 255) : n === 1 && (a = F[r.charCodeAt(e)] << 10 | F[r.charCodeAt(e + 1)] << 4 | F[r.charCodeAt(e + 2)] >> 2, c[d++] = a >> 8 & 255, c[d++] = a & 255), c;
}
function Rt(r) {
  return P[r >> 18 & 63] + P[r >> 12 & 63] + P[r >> 6 & 63] + P[r & 63];
}
function Et(r, e, t) {
  for (var i, a = [], n = e; n < t; n += 3)
    i = (r[n] << 16) + (r[n + 1] << 8) + r[n + 2], a.push(Rt(i));
  return a.join("");
}
function Re(r) {
  be || ze();
  for (var e, t = r.length, i = t % 3, a = "", n = [], c = 16383, o = 0, d = t - i; o < d; o += c)
    n.push(Et(r, o, o + c > d ? d : o + c));
  return i === 1 ? (e = r[t - 1], a += P[e >> 2], a += P[e << 4 & 63], a += "==") : i === 2 && (e = (r[t - 2] << 8) + r[t - 1], a += P[e >> 10], a += P[e >> 4 & 63], a += P[e << 2 & 63], a += "="), n.push(a), n.join("");
}
function ee(r, e, t, i, a) {
  var n, c, o = a * 8 - i - 1, d = (1 << o) - 1, p = d >> 1, h = -7, l = t ? a - 1 : 0, x = t ? -1 : 1, b = r[e + l];
  for (l += x, n = b & (1 << -h) - 1, b >>= -h, h += o; h > 0; n = n * 256 + r[e + l], l += x, h -= 8)
    ;
  for (c = n & (1 << -h) - 1, n >>= -h, h += i; h > 0; c = c * 256 + r[e + l], l += x, h -= 8)
    ;
  if (n === 0)
    n = 1 - p;
  else {
    if (n === d)
      return c ? NaN : (b ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, i), n = n - p;
  }
  return (b ? -1 : 1) * c * Math.pow(2, n - i);
}
function $e(r, e, t, i, a, n) {
  var c, o, d, p = n * 8 - a - 1, h = (1 << p) - 1, l = h >> 1, x = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = i ? 0 : n - 1, y = i ? 1 : -1, C = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, c = h) : (c = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -c)) < 1 && (c--, d *= 2), c + l >= 1 ? e += x / d : e += x * Math.pow(2, 1 - l), e * d >= 2 && (c++, d /= 2), c + l >= h ? (o = 0, c = h) : c + l >= 1 ? (o = (e * d - 1) * Math.pow(2, a), c = c + l) : (o = e * Math.pow(2, l - 1) * Math.pow(2, a), c = 0)); a >= 8; r[t + b] = o & 255, b += y, o /= 256, a -= 8)
    ;
  for (c = c << a | o, p += a; p > 0; r[t + b] = c & 255, b += y, c /= 256, p -= 8)
    ;
  r[t + b - y] |= C * 128;
}
var Ft = {}.toString, He = Array.isArray || function(r) {
  return Ft.call(r) == "[object Array]";
}, Dt = 50;
s.TYPED_ARRAY_SUPPORT = Ce.TYPED_ARRAY_SUPPORT !== void 0 ? Ce.TYPED_ARRAY_SUPPORT : !0;
Z();
function Z() {
  return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function T(r, e) {
  if (Z() < e)
    throw new RangeError("Invalid typed array length");
  return s.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e), r.__proto__ = s.prototype) : (r === null && (r = new s(e)), r.length = e), r;
}
function s(r, e, t) {
  if (!s.TYPED_ARRAY_SUPPORT && !(this instanceof s))
    return new s(r, e, t);
  if (typeof r == "number") {
    if (typeof e == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return ye(this, r);
  }
  return Ve(this, r, e, t);
}
s.poolSize = 8192;
s._augment = function(r) {
  return r.__proto__ = s.prototype, r;
};
function Ve(r, e, t, i) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? It(r, e, t, i) : typeof e == "string" ? Lt(r, e, t) : Tt(r, e);
}
s.from = function(r, e, t) {
  return Ve(null, r, e, t);
};
s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && s[Symbol.species]);
function qe(r) {
  if (typeof r != "number")
    throw new TypeError('"size" argument must be a number');
  if (r < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Pt(r, e, t, i) {
  return qe(e), e <= 0 ? T(r, e) : t !== void 0 ? typeof i == "string" ? T(r, e).fill(t, i) : T(r, e).fill(t) : T(r, e);
}
s.alloc = function(r, e, t) {
  return Pt(null, r, e, t);
};
function ye(r, e) {
  if (qe(e), r = T(r, e < 0 ? 0 : ve(e) | 0), !s.TYPED_ARRAY_SUPPORT)
    for (var t = 0; t < e; ++t)
      r[t] = 0;
  return r;
}
s.allocUnsafe = function(r) {
  return ye(null, r);
};
s.allocUnsafeSlow = function(r) {
  return ye(null, r);
};
function Lt(r, e, t) {
  if ((typeof t != "string" || t === "") && (t = "utf8"), !s.isEncoding(t))
    throw new TypeError('"encoding" must be a valid string encoding');
  var i = Ge(e, t) | 0;
  r = T(r, i);
  var a = r.write(e, t);
  return a !== i && (r = r.slice(0, a)), r;
}
function de(r, e) {
  var t = e.length < 0 ? 0 : ve(e.length) | 0;
  r = T(r, t);
  for (var i = 0; i < t; i += 1)
    r[i] = e[i] & 255;
  return r;
}
function It(r, e, t, i) {
  if (e.byteLength, t < 0 || e.byteLength < t)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < t + (i || 0))
    throw new RangeError("'length' is out of bounds");
  return t === void 0 && i === void 0 ? e = new Uint8Array(e) : i === void 0 ? e = new Uint8Array(e, t) : e = new Uint8Array(e, t, i), s.TYPED_ARRAY_SUPPORT ? (r = e, r.__proto__ = s.prototype) : r = de(r, e), r;
}
function Tt(r, e) {
  if (L(e)) {
    var t = ve(e.length) | 0;
    return r = T(r, t), r.length === 0 || e.copy(r, 0, 0, t), r;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || Kt(e.length) ? T(r, 0) : de(r, e);
    if (e.type === "Buffer" && He(e.data))
      return de(r, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function ve(r) {
  if (r >= Z())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Z().toString(16) + " bytes");
  return r | 0;
}
s.isBuffer = z;
function L(r) {
  return !!(r != null && r._isBuffer);
}
s.compare = function(e, t) {
  if (!L(e) || !L(t))
    throw new TypeError("Arguments must be Buffers");
  if (e === t) return 0;
  for (var i = e.length, a = t.length, n = 0, c = Math.min(i, a); n < c; ++n)
    if (e[n] !== t[n]) {
      i = e[n], a = t[n];
      break;
    }
  return i < a ? -1 : a < i ? 1 : 0;
};
s.isEncoding = function(e) {
  switch (String(e).toLowerCase()) {
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
s.concat = function(e, t) {
  if (!He(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return s.alloc(0);
  var i;
  if (t === void 0)
    for (t = 0, i = 0; i < e.length; ++i)
      t += e[i].length;
  var a = s.allocUnsafe(t), n = 0;
  for (i = 0; i < e.length; ++i) {
    var c = e[i];
    if (!L(c))
      throw new TypeError('"list" argument must be an Array of Buffers');
    c.copy(a, n), n += c.length;
  }
  return a;
};
function Ge(r, e) {
  if (L(r))
    return r.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(r) || r instanceof ArrayBuffer))
    return r.byteLength;
  typeof r != "string" && (r = "" + r);
  var t = r.length;
  if (t === 0) return 0;
  for (var i = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return Q(r).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return Qe(r).length;
      default:
        if (i) return Q(r).length;
        e = ("" + e).toLowerCase(), i = !0;
    }
}
s.byteLength = Ge;
function Bt(r, e, t) {
  var i = !1;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
    return "";
  for (r || (r = "utf8"); ; )
    switch (r) {
      case "hex":
        return Gt(this, e, t);
      case "utf8":
      case "utf-8":
        return We(this, e, t);
      case "ascii":
        return Vt(this, e, t);
      case "latin1":
      case "binary":
        return qt(this, e, t);
      case "base64":
        return $t(this, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return jt(this, e, t);
      default:
        if (i) throw new TypeError("Unknown encoding: " + r);
        r = (r + "").toLowerCase(), i = !0;
    }
}
s.prototype._isBuffer = !0;
function M(r, e, t) {
  var i = r[e];
  r[e] = r[t], r[t] = i;
}
s.prototype.swap16 = function() {
  var e = this.length;
  if (e % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var t = 0; t < e; t += 2)
    M(this, t, t + 1);
  return this;
};
s.prototype.swap32 = function() {
  var e = this.length;
  if (e % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var t = 0; t < e; t += 4)
    M(this, t, t + 3), M(this, t + 1, t + 2);
  return this;
};
s.prototype.swap64 = function() {
  var e = this.length;
  if (e % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var t = 0; t < e; t += 8)
    M(this, t, t + 7), M(this, t + 1, t + 6), M(this, t + 2, t + 5), M(this, t + 3, t + 4);
  return this;
};
s.prototype.toString = function() {
  var e = this.length | 0;
  return e === 0 ? "" : arguments.length === 0 ? We(this, 0, e) : Bt.apply(this, arguments);
};
s.prototype.equals = function(e) {
  if (!L(e)) throw new TypeError("Argument must be a Buffer");
  return this === e ? !0 : s.compare(this, e) === 0;
};
s.prototype.inspect = function() {
  var e = "", t = Dt;
  return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
};
s.prototype.compare = function(e, t, i, a, n) {
  if (!L(e))
    throw new TypeError("Argument must be a Buffer");
  if (t === void 0 && (t = 0), i === void 0 && (i = e ? e.length : 0), a === void 0 && (a = 0), n === void 0 && (n = this.length), t < 0 || i > e.length || a < 0 || n > this.length)
    throw new RangeError("out of range index");
  if (a >= n && t >= i)
    return 0;
  if (a >= n)
    return -1;
  if (t >= i)
    return 1;
  if (t >>>= 0, i >>>= 0, a >>>= 0, n >>>= 0, this === e) return 0;
  for (var c = n - a, o = i - t, d = Math.min(c, o), p = this.slice(a, n), h = e.slice(t, i), l = 0; l < d; ++l)
    if (p[l] !== h[l]) {
      c = p[l], o = h[l];
      break;
    }
  return c < o ? -1 : o < c ? 1 : 0;
};
function je(r, e, t, i, a) {
  if (r.length === 0) return -1;
  if (typeof t == "string" ? (i = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = a ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
    if (a) return -1;
    t = r.length - 1;
  } else if (t < 0)
    if (a) t = 0;
    else return -1;
  if (typeof e == "string" && (e = s.from(e, i)), L(e))
    return e.length === 0 ? -1 : Ee(r, e, t, i, a);
  if (typeof e == "number")
    return e = e & 255, s.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? a ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : Ee(r, [e], t, i, a);
  throw new TypeError("val must be string, number or Buffer");
}
function Ee(r, e, t, i, a) {
  var n = 1, c = r.length, o = e.length;
  if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
    if (r.length < 2 || e.length < 2)
      return -1;
    n = 2, c /= 2, o /= 2, t /= 2;
  }
  function d(b, y) {
    return n === 1 ? b[y] : b.readUInt16BE(y * n);
  }
  var p;
  if (a) {
    var h = -1;
    for (p = t; p < c; p++)
      if (d(r, p) === d(e, h === -1 ? 0 : p - h)) {
        if (h === -1 && (h = p), p - h + 1 === o) return h * n;
      } else
        h !== -1 && (p -= p - h), h = -1;
  } else
    for (t + o > c && (t = c - o), p = t; p >= 0; p--) {
      for (var l = !0, x = 0; x < o; x++)
        if (d(r, p + x) !== d(e, x)) {
          l = !1;
          break;
        }
      if (l) return p;
    }
  return -1;
}
s.prototype.includes = function(e, t, i) {
  return this.indexOf(e, t, i) !== -1;
};
s.prototype.indexOf = function(e, t, i) {
  return je(this, e, t, i, !0);
};
s.prototype.lastIndexOf = function(e, t, i) {
  return je(this, e, t, i, !1);
};
function Ut(r, e, t, i) {
  t = Number(t) || 0;
  var a = r.length - t;
  i ? (i = Number(i), i > a && (i = a)) : i = a;
  var n = e.length;
  if (n % 2 !== 0) throw new TypeError("Invalid hex string");
  i > n / 2 && (i = n / 2);
  for (var c = 0; c < i; ++c) {
    var o = parseInt(e.substr(c * 2, 2), 16);
    if (isNaN(o)) return c;
    r[t + c] = o;
  }
  return c;
}
function Mt(r, e, t, i) {
  return ie(Q(e, r.length - t), r, t, i);
}
function Ye(r, e, t, i) {
  return ie(Zt(e), r, t, i);
}
function Nt(r, e, t, i) {
  return Ye(r, e, t, i);
}
function Ot(r, e, t, i) {
  return ie(Qe(e), r, t, i);
}
function zt(r, e, t, i) {
  return ie(Qt(e, r.length - t), r, t, i);
}
s.prototype.write = function(e, t, i, a) {
  if (t === void 0)
    a = "utf8", i = this.length, t = 0;
  else if (i === void 0 && typeof t == "string")
    a = t, i = this.length, t = 0;
  else if (isFinite(t))
    t = t | 0, isFinite(i) ? (i = i | 0, a === void 0 && (a = "utf8")) : (a = i, i = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var n = this.length - t;
  if ((i === void 0 || i > n) && (i = n), e.length > 0 && (i < 0 || t < 0) || t > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  a || (a = "utf8");
  for (var c = !1; ; )
    switch (a) {
      case "hex":
        return Ut(this, e, t, i);
      case "utf8":
      case "utf-8":
        return Mt(this, e, t, i);
      case "ascii":
        return Ye(this, e, t, i);
      case "latin1":
      case "binary":
        return Nt(this, e, t, i);
      case "base64":
        return Ot(this, e, t, i);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return zt(this, e, t, i);
      default:
        if (c) throw new TypeError("Unknown encoding: " + a);
        a = ("" + a).toLowerCase(), c = !0;
    }
};
s.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function $t(r, e, t) {
  return e === 0 && t === r.length ? Re(r) : Re(r.slice(e, t));
}
function We(r, e, t) {
  t = Math.min(r.length, t);
  for (var i = [], a = e; a < t; ) {
    var n = r[a], c = null, o = n > 239 ? 4 : n > 223 ? 3 : n > 191 ? 2 : 1;
    if (a + o <= t) {
      var d, p, h, l;
      switch (o) {
        case 1:
          n < 128 && (c = n);
          break;
        case 2:
          d = r[a + 1], (d & 192) === 128 && (l = (n & 31) << 6 | d & 63, l > 127 && (c = l));
          break;
        case 3:
          d = r[a + 1], p = r[a + 2], (d & 192) === 128 && (p & 192) === 128 && (l = (n & 15) << 12 | (d & 63) << 6 | p & 63, l > 2047 && (l < 55296 || l > 57343) && (c = l));
          break;
        case 4:
          d = r[a + 1], p = r[a + 2], h = r[a + 3], (d & 192) === 128 && (p & 192) === 128 && (h & 192) === 128 && (l = (n & 15) << 18 | (d & 63) << 12 | (p & 63) << 6 | h & 63, l > 65535 && l < 1114112 && (c = l));
      }
    }
    c === null ? (c = 65533, o = 1) : c > 65535 && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | c & 1023), i.push(c), a += o;
  }
  return Ht(i);
}
var Fe = 4096;
function Ht(r) {
  var e = r.length;
  if (e <= Fe)
    return String.fromCharCode.apply(String, r);
  for (var t = "", i = 0; i < e; )
    t += String.fromCharCode.apply(
      String,
      r.slice(i, i += Fe)
    );
  return t;
}
function Vt(r, e, t) {
  var i = "";
  t = Math.min(r.length, t);
  for (var a = e; a < t; ++a)
    i += String.fromCharCode(r[a] & 127);
  return i;
}
function qt(r, e, t) {
  var i = "";
  t = Math.min(r.length, t);
  for (var a = e; a < t; ++a)
    i += String.fromCharCode(r[a]);
  return i;
}
function Gt(r, e, t) {
  var i = r.length;
  (!e || e < 0) && (e = 0), (!t || t < 0 || t > i) && (t = i);
  for (var a = "", n = e; n < t; ++n)
    a += Jt(r[n]);
  return a;
}
function jt(r, e, t) {
  for (var i = r.slice(e, t), a = "", n = 0; n < i.length; n += 2)
    a += String.fromCharCode(i[n] + i[n + 1] * 256);
  return a;
}
s.prototype.slice = function(e, t) {
  var i = this.length;
  e = ~~e, t = t === void 0 ? i : ~~t, e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), t < e && (t = e);
  var a;
  if (s.TYPED_ARRAY_SUPPORT)
    a = this.subarray(e, t), a.__proto__ = s.prototype;
  else {
    var n = t - e;
    a = new s(n, void 0);
    for (var c = 0; c < n; ++c)
      a[c] = this[c + e];
  }
  return a;
};
function k(r, e, t) {
  if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
  if (r + e > t) throw new RangeError("Trying to access beyond buffer length");
}
s.prototype.readUIntLE = function(e, t, i) {
  e = e | 0, t = t | 0, i || k(e, t, this.length);
  for (var a = this[e], n = 1, c = 0; ++c < t && (n *= 256); )
    a += this[e + c] * n;
  return a;
};
s.prototype.readUIntBE = function(e, t, i) {
  e = e | 0, t = t | 0, i || k(e, t, this.length);
  for (var a = this[e + --t], n = 1; t > 0 && (n *= 256); )
    a += this[e + --t] * n;
  return a;
};
s.prototype.readUInt8 = function(e, t) {
  return t || k(e, 1, this.length), this[e];
};
s.prototype.readUInt16LE = function(e, t) {
  return t || k(e, 2, this.length), this[e] | this[e + 1] << 8;
};
s.prototype.readUInt16BE = function(e, t) {
  return t || k(e, 2, this.length), this[e] << 8 | this[e + 1];
};
s.prototype.readUInt32LE = function(e, t) {
  return t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
s.prototype.readUInt32BE = function(e, t) {
  return t || k(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
s.prototype.readIntLE = function(e, t, i) {
  e = e | 0, t = t | 0, i || k(e, t, this.length);
  for (var a = this[e], n = 1, c = 0; ++c < t && (n *= 256); )
    a += this[e + c] * n;
  return n *= 128, a >= n && (a -= Math.pow(2, 8 * t)), a;
};
s.prototype.readIntBE = function(e, t, i) {
  e = e | 0, t = t | 0, i || k(e, t, this.length);
  for (var a = t, n = 1, c = this[e + --a]; a > 0 && (n *= 256); )
    c += this[e + --a] * n;
  return n *= 128, c >= n && (c -= Math.pow(2, 8 * t)), c;
};
s.prototype.readInt8 = function(e, t) {
  return t || k(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
};
s.prototype.readInt16LE = function(e, t) {
  t || k(e, 2, this.length);
  var i = this[e] | this[e + 1] << 8;
  return i & 32768 ? i | 4294901760 : i;
};
s.prototype.readInt16BE = function(e, t) {
  t || k(e, 2, this.length);
  var i = this[e + 1] | this[e] << 8;
  return i & 32768 ? i | 4294901760 : i;
};
s.prototype.readInt32LE = function(e, t) {
  return t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
s.prototype.readInt32BE = function(e, t) {
  return t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
s.prototype.readFloatLE = function(e, t) {
  return t || k(e, 4, this.length), ee(this, e, !0, 23, 4);
};
s.prototype.readFloatBE = function(e, t) {
  return t || k(e, 4, this.length), ee(this, e, !1, 23, 4);
};
s.prototype.readDoubleLE = function(e, t) {
  return t || k(e, 8, this.length), ee(this, e, !0, 52, 8);
};
s.prototype.readDoubleBE = function(e, t) {
  return t || k(e, 8, this.length), ee(this, e, !1, 52, 8);
};
function S(r, e, t, i, a, n) {
  if (!L(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > a || e < n) throw new RangeError('"value" argument is out of bounds');
  if (t + i > r.length) throw new RangeError("Index out of range");
}
s.prototype.writeUIntLE = function(e, t, i, a) {
  if (e = +e, t = t | 0, i = i | 0, !a) {
    var n = Math.pow(2, 8 * i) - 1;
    S(this, e, t, i, n, 0);
  }
  var c = 1, o = 0;
  for (this[t] = e & 255; ++o < i && (c *= 256); )
    this[t + o] = e / c & 255;
  return t + i;
};
s.prototype.writeUIntBE = function(e, t, i, a) {
  if (e = +e, t = t | 0, i = i | 0, !a) {
    var n = Math.pow(2, 8 * i) - 1;
    S(this, e, t, i, n, 0);
  }
  var c = i - 1, o = 1;
  for (this[t + c] = e & 255; --c >= 0 && (o *= 256); )
    this[t + c] = e / o & 255;
  return t + i;
};
s.prototype.writeUInt8 = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = e & 255, t + 1;
};
function te(r, e, t, i) {
  e < 0 && (e = 65535 + e + 1);
  for (var a = 0, n = Math.min(r.length - t, 2); a < n; ++a)
    r[t + a] = (e & 255 << 8 * (i ? a : 1 - a)) >>> (i ? a : 1 - a) * 8;
}
s.prototype.writeUInt16LE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : te(this, e, t, !0), t + 2;
};
s.prototype.writeUInt16BE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : te(this, e, t, !1), t + 2;
};
function re(r, e, t, i) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var a = 0, n = Math.min(r.length - t, 4); a < n; ++a)
    r[t + a] = e >>> (i ? a : 3 - a) * 8 & 255;
}
s.prototype.writeUInt32LE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255) : re(this, e, t, !0), t + 4;
};
s.prototype.writeUInt32BE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : re(this, e, t, !1), t + 4;
};
s.prototype.writeIntLE = function(e, t, i, a) {
  if (e = +e, t = t | 0, !a) {
    var n = Math.pow(2, 8 * i - 1);
    S(this, e, t, i, n - 1, -n);
  }
  var c = 0, o = 1, d = 0;
  for (this[t] = e & 255; ++c < i && (o *= 256); )
    e < 0 && d === 0 && this[t + c - 1] !== 0 && (d = 1), this[t + c] = (e / o >> 0) - d & 255;
  return t + i;
};
s.prototype.writeIntBE = function(e, t, i, a) {
  if (e = +e, t = t | 0, !a) {
    var n = Math.pow(2, 8 * i - 1);
    S(this, e, t, i, n - 1, -n);
  }
  var c = i - 1, o = 1, d = 0;
  for (this[t + c] = e & 255; --c >= 0 && (o *= 256); )
    e < 0 && d === 0 && this[t + c + 1] !== 0 && (d = 1), this[t + c] = (e / o >> 0) - d & 255;
  return t + i;
};
s.prototype.writeInt8 = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
};
s.prototype.writeInt16LE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : te(this, e, t, !0), t + 2;
};
s.prototype.writeInt16BE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : te(this, e, t, !1), t + 2;
};
s.prototype.writeInt32LE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : re(this, e, t, !0), t + 4;
};
s.prototype.writeInt32BE = function(e, t, i) {
  return e = +e, t = t | 0, i || S(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : re(this, e, t, !1), t + 4;
};
function Xe(r, e, t, i, a, n) {
  if (t + i > r.length) throw new RangeError("Index out of range");
  if (t < 0) throw new RangeError("Index out of range");
}
function Je(r, e, t, i, a) {
  return a || Xe(r, e, t, 4), $e(r, e, t, i, 23, 4), t + 4;
}
s.prototype.writeFloatLE = function(e, t, i) {
  return Je(this, e, t, !0, i);
};
s.prototype.writeFloatBE = function(e, t, i) {
  return Je(this, e, t, !1, i);
};
function Ze(r, e, t, i, a) {
  return a || Xe(r, e, t, 8), $e(r, e, t, i, 52, 8), t + 8;
}
s.prototype.writeDoubleLE = function(e, t, i) {
  return Ze(this, e, t, !0, i);
};
s.prototype.writeDoubleBE = function(e, t, i) {
  return Ze(this, e, t, !1, i);
};
s.prototype.copy = function(e, t, i, a) {
  if (i || (i = 0), !a && a !== 0 && (a = this.length), t >= e.length && (t = e.length), t || (t = 0), a > 0 && a < i && (a = i), a === i || e.length === 0 || this.length === 0) return 0;
  if (t < 0)
    throw new RangeError("targetStart out of bounds");
  if (i < 0 || i >= this.length) throw new RangeError("sourceStart out of bounds");
  if (a < 0) throw new RangeError("sourceEnd out of bounds");
  a > this.length && (a = this.length), e.length - t < a - i && (a = e.length - t + i);
  var n = a - i, c;
  if (this === e && i < t && t < a)
    for (c = n - 1; c >= 0; --c)
      e[c + t] = this[c + i];
  else if (n < 1e3 || !s.TYPED_ARRAY_SUPPORT)
    for (c = 0; c < n; ++c)
      e[c + t] = this[c + i];
  else
    Uint8Array.prototype.set.call(
      e,
      this.subarray(i, i + n),
      t
    );
  return n;
};
s.prototype.fill = function(e, t, i, a) {
  if (typeof e == "string") {
    if (typeof t == "string" ? (a = t, t = 0, i = this.length) : typeof i == "string" && (a = i, i = this.length), e.length === 1) {
      var n = e.charCodeAt(0);
      n < 256 && (e = n);
    }
    if (a !== void 0 && typeof a != "string")
      throw new TypeError("encoding must be a string");
    if (typeof a == "string" && !s.isEncoding(a))
      throw new TypeError("Unknown encoding: " + a);
  } else typeof e == "number" && (e = e & 255);
  if (t < 0 || this.length < t || this.length < i)
    throw new RangeError("Out of range index");
  if (i <= t)
    return this;
  t = t >>> 0, i = i === void 0 ? this.length : i >>> 0, e || (e = 0);
  var c;
  if (typeof e == "number")
    for (c = t; c < i; ++c)
      this[c] = e;
  else {
    var o = L(e) ? e : Q(new s(e, a).toString()), d = o.length;
    for (c = 0; c < i - t; ++c)
      this[c + t] = o[c % d];
  }
  return this;
};
var Yt = /[^+\/0-9A-Za-z-_]/g;
function Wt(r) {
  if (r = Xt(r).replace(Yt, ""), r.length < 2) return "";
  for (; r.length % 4 !== 0; )
    r = r + "=";
  return r;
}
function Xt(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}
function Jt(r) {
  return r < 16 ? "0" + r.toString(16) : r.toString(16);
}
function Q(r, e) {
  e = e || 1 / 0;
  for (var t, i = r.length, a = null, n = [], c = 0; c < i; ++c) {
    if (t = r.charCodeAt(c), t > 55295 && t < 57344) {
      if (!a) {
        if (t > 56319) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        } else if (c + 1 === i) {
          (e -= 3) > -1 && n.push(239, 191, 189);
          continue;
        }
        a = t;
        continue;
      }
      if (t < 56320) {
        (e -= 3) > -1 && n.push(239, 191, 189), a = t;
        continue;
      }
      t = (a - 55296 << 10 | t - 56320) + 65536;
    } else a && (e -= 3) > -1 && n.push(239, 191, 189);
    if (a = null, t < 128) {
      if ((e -= 1) < 0) break;
      n.push(t);
    } else if (t < 2048) {
      if ((e -= 2) < 0) break;
      n.push(
        t >> 6 | 192,
        t & 63 | 128
      );
    } else if (t < 65536) {
      if ((e -= 3) < 0) break;
      n.push(
        t >> 12 | 224,
        t >> 6 & 63 | 128,
        t & 63 | 128
      );
    } else if (t < 1114112) {
      if ((e -= 4) < 0) break;
      n.push(
        t >> 18 | 240,
        t >> 12 & 63 | 128,
        t >> 6 & 63 | 128,
        t & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return n;
}
function Zt(r) {
  for (var e = [], t = 0; t < r.length; ++t)
    e.push(r.charCodeAt(t) & 255);
  return e;
}
function Qt(r, e) {
  for (var t, i, a, n = [], c = 0; c < r.length && !((e -= 2) < 0); ++c)
    t = r.charCodeAt(c), i = t >> 8, a = t % 256, n.push(a), n.push(i);
  return n;
}
function Qe(r) {
  return Ct(Wt(r));
}
function ie(r, e, t, i) {
  for (var a = 0; a < i && !(a + t >= e.length || a >= r.length); ++a)
    e[a + t] = r[a];
  return a;
}
function Kt(r) {
  return r !== r;
}
function z(r) {
  return r != null && (!!r._isBuffer || Ke(r) || er(r));
}
function Ke(r) {
  return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
function er(r) {
  return typeof r.readFloatLE == "function" && typeof r.slice == "function" && Ke(r.slice(0, 0));
}
const tr = 46, rr = /\\(\\)?/g, ir = RegExp(
  // Match anything that isn't a dot or bracket.
  `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
  "g"
), ar = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, nr = /^\w*$/, cr = function(r) {
  return Object.prototype.toString.call(r);
}, et = function(r) {
  const e = typeof r;
  return e === "symbol" || e === "object" && r && cr(r) === "[object Symbol]";
}, or = function(r, e) {
  if (Array.isArray(r))
    return !1;
  const t = typeof r;
  return t === "number" || t === "symbol" || t === "boolean" || !r || et(r) ? !0 : nr.test(r) || !ar.test(r) || e != null && r in Object(e);
}, sr = function(r) {
  const e = [];
  return r.charCodeAt(0) === tr && e.push(""), r.replace(ir, function(t, i, a, n) {
    let c = t;
    a ? c = n.replace(rr, "$1") : i && (c = i.trim()), e.push(c);
  }), e;
}, dr = function(r, e) {
  return Array.isArray(r) ? r : or(r, e) ? [r] : sr(r);
}, lr = function(r) {
  if (typeof r == "string" || et(r)) return r;
  const e = `${r}`;
  return e == "0" && 1 / r == -INFINITY ? "-0" : e;
}, pr = function(r, e) {
  e = dr(e, r);
  let t = 0;
  const i = e.length;
  for (; r != null && t < i; )
    r = r[lr(e[t++])];
  return t && t === i ? r : void 0;
}, ur = function(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}, tt = function(r) {
  if (r == null)
    return [void 0, void 0];
  if (typeof r != "object")
    return [Error('Invalid option "columns": expect an array or an object')];
  if (Array.isArray(r)) {
    const e = [];
    for (const t of r)
      if (typeof t == "string")
        e.push({
          key: t,
          header: t
        });
      else if (typeof t == "object" && t !== null && !Array.isArray(t)) {
        if (!t.key)
          return [
            Error('Invalid column definition: property "key" is required')
          ];
        t.header === void 0 && (t.header = t.key), e.push(t);
      } else
        return [
          Error("Invalid column definition: expect a string or an object")
        ];
    r = e;
  } else {
    const e = [];
    for (const t in r)
      e.push({
        key: t,
        header: r[t]
      });
    r = e;
  }
  return [void 0, r];
};
class $ extends Error {
  constructor(e, t, ...i) {
    Array.isArray(t) && (t = t.join(" ")), super(t), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, $), this.code = e;
    for (const a of i)
      for (const n in a) {
        const c = a[n];
        this[n] = z(c) ? c.toString() : c == null ? c : JSON.parse(JSON.stringify(c));
      }
  }
}
const hr = function(r) {
  return r.replace(/([A-Z])/g, function(e, t) {
    return "_" + t.toLowerCase();
  });
}, rt = function(r) {
  const e = {};
  for (const a in r)
    e[hr(a)] = r[a];
  if (e.bom === void 0 || e.bom === null || e.bom === !1)
    e.bom = !1;
  else if (e.bom !== !0)
    return [
      new $("CSV_OPTION_BOOLEAN_INVALID_TYPE", [
        "option `bom` is optional and must be a boolean value,",
        `got ${JSON.stringify(e.bom)}`
      ])
    ];
  if (e.delimiter === void 0 || e.delimiter === null)
    e.delimiter = ",";
  else if (z(e.delimiter))
    e.delimiter = e.delimiter.toString();
  else if (typeof e.delimiter != "string")
    return [
      new $("CSV_OPTION_DELIMITER_INVALID_TYPE", [
        "option `delimiter` must be a buffer or a string,",
        `got ${JSON.stringify(e.delimiter)}`
      ])
    ];
  if (e.quote === void 0 || e.quote === null)
    e.quote = '"';
  else if (e.quote === !0)
    e.quote = '"';
  else if (e.quote === !1)
    e.quote = "";
  else if (z(e.quote))
    e.quote = e.quote.toString();
  else if (typeof e.quote != "string")
    return [
      new $("CSV_OPTION_QUOTE_INVALID_TYPE", [
        "option `quote` must be a boolean, a buffer or a string,",
        `got ${JSON.stringify(e.quote)}`
      ])
    ];
  if ((e.quoted === void 0 || e.quoted === null) && (e.quoted = !1), e.escape_formulas === void 0 || e.escape_formulas === null)
    e.escape_formulas = !1;
  else if (typeof e.escape_formulas != "boolean")
    return [
      new $("CSV_OPTION_ESCAPE_FORMULAS_INVALID_TYPE", [
        "option `escape_formulas` must be a boolean,",
        `got ${JSON.stringify(e.escape_formulas)}`
      ])
    ];
  if ((e.quoted_empty === void 0 || e.quoted_empty === null) && (e.quoted_empty = void 0), e.quoted_match === void 0 || e.quoted_match === null || e.quoted_match === !1 ? e.quoted_match = null : Array.isArray(e.quoted_match) || (e.quoted_match = [e.quoted_match]), e.quoted_match)
    for (const a of e.quoted_match) {
      const n = typeof a == "string", c = a instanceof RegExp;
      if (!n && !c)
        return [
          Error(
            `Invalid Option: quoted_match must be a string or a regex, got ${JSON.stringify(a)}`
          )
        ];
    }
  if ((e.quoted_string === void 0 || e.quoted_string === null) && (e.quoted_string = !1), (e.eof === void 0 || e.eof === null) && (e.eof = !0), e.escape === void 0 || e.escape === null)
    e.escape = '"';
  else if (z(e.escape))
    e.escape = e.escape.toString();
  else if (typeof e.escape != "string")
    return [
      Error(
        `Invalid Option: escape must be a buffer or a string, got ${JSON.stringify(e.escape)}`
      )
    ];
  if (e.escape.length > 1)
    return [
      Error(
        `Invalid Option: escape must be one character, got ${e.escape.length} characters`
      )
    ];
  (e.header === void 0 || e.header === null) && (e.header = !1);
  const [t, i] = tt(e.columns);
  if (t !== void 0) return [t];
  if (e.columns = i, (e.quoted === void 0 || e.quoted === null) && (e.quoted = !1), (e.cast === void 0 || e.cast === null) && (e.cast = {}), (e.cast.bigint === void 0 || e.cast.bigint === null) && (e.cast.bigint = (a) => "" + a), (e.cast.boolean === void 0 || e.cast.boolean === null) && (e.cast.boolean = (a) => a ? "1" : ""), (e.cast.date === void 0 || e.cast.date === null) && (e.cast.date = (a) => "" + a.getTime()), (e.cast.number === void 0 || e.cast.number === null) && (e.cast.number = (a) => "" + a), (e.cast.object === void 0 || e.cast.object === null) && (e.cast.object = (a) => JSON.stringify(a)), (e.cast.string === void 0 || e.cast.string === null) && (e.cast.string = function(a) {
    return a;
  }), e.on_record !== void 0 && typeof e.on_record != "function")
    return [Error('Invalid Option: "on_record" must be a function.')];
  if (e.record_delimiter === void 0 || e.record_delimiter === null)
    e.record_delimiter = `
`;
  else if (z(e.record_delimiter))
    e.record_delimiter = e.record_delimiter.toString();
  else if (typeof e.record_delimiter != "string")
    return [
      Error(
        `Invalid Option: record_delimiter must be a buffer or a string, got ${JSON.stringify(e.record_delimiter)}`
      )
    ];
  switch (e.record_delimiter) {
    case "unix":
      e.record_delimiter = `
`;
      break;
    case "mac":
      e.record_delimiter = "\r";
      break;
    case "windows":
      e.record_delimiter = `\r
`;
      break;
    case "ascii":
      e.record_delimiter = "";
      break;
    case "unicode":
      e.record_delimiter = "\u2028";
      break;
  }
  return [void 0, e];
}, mr = s.from([239, 187, 191]), fr = function(r, e, t) {
  return {
    options: r,
    state: e,
    info: t,
    __transform: function(i, a) {
      if (!Array.isArray(i) && typeof i != "object")
        return Error(
          `Invalid Record: expect an array or an object, got ${JSON.stringify(i)}`
        );
      if (this.info.records === 0) {
        if (Array.isArray(i)) {
          if (this.options.header === !0 && this.options.columns === void 0)
            return Error(
              "Undiscoverable Columns: header option requires column option or object records"
            );
        } else if (this.options.columns === void 0) {
          const [o, d] = tt(Object.keys(i));
          if (o) return;
          this.options.columns = d;
        }
      }
      if (this.info.records === 0) {
        this.bom(a);
        const o = this.headers(a);
        if (o) return o;
      }
      try {
        this.options.on_record && this.options.on_record(i, this.info.records);
      } catch (o) {
        return o;
      }
      let n, c;
      if (this.options.eof) {
        if ([n, c] = this.stringify(i), n) return n;
        if (c === void 0)
          return;
        c = c + this.options.record_delimiter;
      } else {
        if ([n, c] = this.stringify(i), n) return n;
        if (c === void 0)
          return;
        (this.options.header || this.info.records) && (c = this.options.record_delimiter + c);
      }
      this.info.records++, a(c);
    },
    stringify: function(i, a = !1) {
      if (typeof i != "object")
        return [void 0, i];
      const { columns: n } = this.options, c = [];
      if (Array.isArray(i)) {
        n && i.splice(n.length);
        for (let d = 0; d < i.length; d++) {
          const p = i[d], [h, l] = this.__cast(p, {
            index: d,
            column: d,
            records: this.info.records,
            header: a
          });
          if (h) return [h];
          c[d] = [l, p];
        }
      } else
        for (let d = 0; d < n.length; d++) {
          const p = pr(i, n[d].key), [h, l] = this.__cast(p, {
            index: d,
            column: n[d].key,
            records: this.info.records,
            header: a
          });
          if (h) return [h];
          c[d] = [l, p];
        }
      let o = "";
      for (let d = 0; d < c.length; d++) {
        let p, h, [l, x] = c[d];
        if (typeof l == "string")
          p = this.options;
        else if (ur(l)) {
          if (p = l, l = p.value, delete p.value, typeof l != "string" && l !== void 0 && l !== null && h)
            return [
              Error(
                `Invalid Casting Value: returned value must return a string, null or undefined, got ${JSON.stringify(l)}`
              )
            ];
          if (p = { ...this.options, ...p }, [h, p] = rt(p), h !== void 0)
            return [h];
        } else if (l == null)
          p = this.options;
        else
          return [
            Error(
              `Invalid Casting Value: returned value must return a string, an object, null or undefined, got ${JSON.stringify(l)}`
            )
          ];
        const {
          delimiter: b,
          escape: y,
          quote: C,
          quoted: ft,
          quoted_empty: j,
          quoted_string: ne,
          quoted_match: Y,
          record_delimiter: gt,
          escape_formulas: bt
        } = p;
        if (l === "" && x === "") {
          let O = Y && Y.filter((V) => typeof V == "string" ? l.indexOf(V) !== -1 : V.test(l));
          O = O && O.length > 0, (O || j === !0 || ne === !0 && j !== !1) === !0 && (l = C + l + C), o += l;
        } else if (l) {
          if (typeof l != "string")
            return [
              Error(
                `Formatter must return a string, null or undefined, got ${JSON.stringify(l)}`
              )
            ];
          const O = b.length && l.indexOf(b) >= 0, ce = C !== "" && l.indexOf(C) >= 0, V = l.indexOf(y) >= 0 && y !== C, yt = l.indexOf(gt) >= 0, vt = ne && typeof x == "string";
          let W = Y && Y.filter((U) => typeof U == "string" ? l.indexOf(U) !== -1 : U.test(l));
          if (W = W && W.length > 0, bt)
            switch (l[0]) {
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
                l = `'${l}`;
                break;
            }
          const Se = ce === !0 || O || yt || ft || vt || W;
          if (Se === !0 && V === !0) {
            const U = y === "\\" ? new RegExp(y + y, "g") : new RegExp(y, "g");
            l = l.replace(U, y + y);
          }
          if (ce === !0) {
            const U = new RegExp(C, "g");
            l = l.replace(U, y + C);
          }
          Se === !0 && (l = C + l + C), o += l;
        } else (j === !0 || x === "" && ne === !0 && j !== !1) && (o += C + C);
        d !== c.length - 1 && (o += b);
      }
      return [void 0, o];
    },
    bom: function(i) {
      this.options.bom === !0 && i(mr);
    },
    headers: function(i) {
      if (this.options.header === !1 || this.options.columns === void 0)
        return;
      let a, n = this.options.columns.map((c) => c.header);
      if (this.options.eof ? ([a, n] = this.stringify(n, !0), n += this.options.record_delimiter) : [a, n] = this.stringify(n), a) return a;
      i(n);
    },
    __cast: function(i, a) {
      const n = typeof i;
      try {
        return n === "string" ? [void 0, this.options.cast.string(i, a)] : n === "bigint" ? [void 0, this.options.cast.bigint(i, a)] : n === "number" ? [void 0, this.options.cast.number(i, a)] : n === "boolean" ? [void 0, this.options.cast.boolean(i, a)] : i instanceof Date ? [void 0, this.options.cast.date(i, a)] : n === "object" && i !== null ? [void 0, this.options.cast.object(i, a)] : [void 0, i, i];
      } catch (c) {
        return [c];
      }
    }
  };
}, gr = function(r, e = {}) {
  const t = [], [i, a] = rt(e);
  if (i !== void 0) throw i;
  const o = fr(a, {
    stop: !1
  }, {
    records: 0
  });
  for (const d of r) {
    const p = o.__transform(d, function(h) {
      t.push(h);
    });
    if (p !== void 0) throw p;
  }
  if (t.length === 0) {
    o.bom((p) => {
      t.push(p);
    });
    const d = o.headers((p) => {
      t.push(p);
    });
    if (d !== void 0) throw d;
  }
  return t.join("");
}, br = 1e3 * 60, De = "langChanged";
function yr(r, e, t) {
  return Object.entries(le(e || {})).reduce((i, [a, n]) => i.replace(new RegExp(`{{[  ]*${a}[  ]*}}`, "gm"), String(le(n))), r);
}
function vr(r, e) {
  const t = r.split(".");
  let i = e.strings;
  for (; i != null && t.length > 0; )
    i = i[t.shift()];
  return i != null ? i.toString() : null;
}
function le(r) {
  return typeof r == "function" ? r() : r;
}
const xr = () => ({
  loader: () => Promise.resolve({}),
  empty: (r) => `[${r}]`,
  lookup: vr,
  interpolate: yr,
  translationCache: {}
});
let kr = xr();
function _r(r, e) {
  const t = (i) => r(i.detail);
  return window.addEventListener(De, t, e), () => window.removeEventListener(De, t);
}
function pe(r, e, t = kr) {
  let i = t.translationCache[r] || (t.translationCache[r] = t.lookup(r, t) || t.empty(r, t));
  return e = e != null ? le(e) : null, e != null ? t.interpolate(i, e, t) : i;
}
function it(r) {
  return r instanceof kt ? r.startNode.isConnected : r instanceof _t ? r.committer.element.isConnected : r.element.isConnected;
}
function wr(r) {
  for (const [e] of r)
    it(e) || r.delete(e);
}
function Ar(r) {
  "requestIdleCallback" in window ? window.requestIdleCallback(r) : setTimeout(r);
}
function Sr(r, e) {
  setInterval(() => Ar(() => wr(r)), e);
}
const xe = /* @__PURE__ */ new Map();
function Cr() {
  _r((r) => {
    for (const [e, t] of xe)
      it(e) && at(e, t, r);
  });
}
Cr();
Sr(xe, br);
function at(r, e, t) {
  const i = e(t);
  r.value !== i && (r.setValue(i), r.commit());
}
Oe((r) => (e) => {
  xe.set(e, r), at(e, r);
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
const nt = /* @__PURE__ */ new WeakMap(), ke = (r) => (...e) => {
  const t = r(...e);
  return nt.set(t, !0), t;
}, Pe = (r) => typeof r == "function" && nt.has(r);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
const oe = {};
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
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (r) => r });
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
const Rr = (r) => r === null || !(typeof r == "object" || typeof r == "function");
class ae {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== oe && (!Rr(e) || e !== this.value) && (this.value = e, Pe(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Pe(this.value); ) {
      const e = this.value;
      this.value = oe, e(this);
    }
    this.value !== oe && this.committer.commit();
  }
}
class ct extends ae {
}
let Er = !1;
(() => {
  try {
    const r = {
      get capture() {
        return Er = !0, !1;
      }
    };
    window.addEventListener("test", r, r), window.removeEventListener("test", r, r);
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
var ue = function(r, e) {
  return ue = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
  }, ue(r, e);
};
function Fr(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ue(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var G = function() {
  return G = Object.assign || function(e) {
    for (var t, i = 1, a = arguments.length; i < a; i++) {
      t = arguments[i];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, G.apply(this, arguments);
};
function u(r, e, t, i) {
  var a = arguments.length, n = a < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") n = Reflect.decorate(r, e, t, i);
  else for (var o = r.length - 1; o >= 0; o--) (c = r[o]) && (n = (a < 3 ? c(n) : a > 3 ? c(e, t, n) : c(e, t)) || n);
  return a > 3 && n && Object.defineProperty(e, t, n), n;
}
function X(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Dr(r, e) {
  var t = r.matches || r.webkitMatchesSelector || r.msMatchesSelector;
  return t.call(r, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ot = () => {
}, Pr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", ot, Pr);
document.removeEventListener("x", ot);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class st extends K {
  click() {
    if (this.mdcRoot) {
      this.mdcRoot.focus(), this.mdcRoot.click();
      return;
    }
    super.click();
  }
  /**
   * Create and attach the MDC Foundation to the instance
   */
  createFoundation() {
    this.mdcFoundation !== void 0 && this.mdcFoundation.destroy(), this.mdcFoundationClass && (this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter()), this.mdcFoundation.init());
  }
  firstUpdated() {
    this.createFoundation();
  }
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Lr = (
  /** @class */
  function() {
    function r(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(r, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.init = function() {
    }, r.prototype.destroy = function() {
    }, r;
  }()
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ir = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Tr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Le = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Br(r, e, t) {
  if (!r)
    return { x: 0, y: 0 };
  var i = e.x, a = e.y, n = i + t.left, c = a + t.top, o, d;
  if (r.type === "touchstart") {
    var p = r;
    o = p.changedTouches[0].pageX - n, d = p.changedTouches[0].pageY - c;
  } else {
    var h = r;
    o = h.pageX - n, d = h.pageY - c;
  }
  return { x: o, y: d };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ie = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Te = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], J = [], Ur = (
  /** @class */
  function(r) {
    Fr(e, r);
    function e(t) {
      var i = r.call(this, G(G({}, e.defaultAdapter), t)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(a) {
        i.activateImpl(a);
      }, i.deactivateHandler = function() {
        i.deactivateImpl();
      }, i.focusHandler = function() {
        i.handleFocus();
      }, i.blurHandler = function() {
        i.handleBlur();
      }, i.resizeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Le;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var a = e.cssClasses, n = a.ROOT, c = a.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(n), t.adapter.isUnbounded() && (t.adapter.addClass(c), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, a = i.ROOT, n = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(a), t.adapter.removeClass(n), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(t) {
      var i, a;
      if (t) {
        try {
          for (var n = X(Ie), c = n.next(); !c.done; c = n.next()) {
            var o = c.value;
            this.adapter.registerInteractionHandler(o, this.activateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            c && !c.done && (a = n.return) && a.call(n);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, a;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var n = X(Te), c = n.next(); !c.done; c = n.next()) {
            var o = c.value;
            this.adapter.registerDocumentInteractionHandler(o, this.deactivateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            c && !c.done && (a = n.return) && a.call(n);
          } finally {
            if (i) throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var a = X(Ie), n = a.next(); !n.done; n = a.next()) {
          var c = n.value;
          this.adapter.deregisterInteractionHandler(c, this.activateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          n && !n.done && (i = a.return) && i.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var a = X(Te), n = a.next(); !n.done; n = a.next()) {
          var c = n.value;
          this.adapter.deregisterDocumentInteractionHandler(c, this.deactivateHandler);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          n && !n.done && (i = a.return) && i.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, a = Object.keys(i);
      a.forEach(function(n) {
        n.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[n], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var a = this.activationState;
        if (!a.isActivated) {
          var n = this.previousActivationEvent, c = n && t !== void 0 && n.type !== t.type;
          if (!c) {
            a.isActivated = !0, a.isProgrammatic = t === void 0, a.activationEvent = t, a.wasActivatedByPointer = a.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var o = t !== void 0 && J.length > 0 && J.some(function(d) {
              return i.adapter.containsEventTarget(d);
            });
            if (o) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (J.push(t.target), this.registerDeactivationHandlers(t)), a.wasElementMadeActive = this.checkElementMadeActive(t), a.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              J = [], !a.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (a.wasElementMadeActive = i.checkElementMadeActive(t), a.wasElementMadeActive && i.animateActivation()), a.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, a = i.VAR_FG_TRANSLATE_START, n = i.VAR_FG_TRANSLATE_END, c = e.cssClasses, o = c.FG_DEACTIVATION, d = c.FG_ACTIVATION, p = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var x = this.getFgTranslationCoordinates(), b = x.startPoint, y = x.endPoint;
        h = b.x + "px, " + b.y + "px", l = y.x + "px, " + y.y + "px";
      }
      this.adapter.updateCssVariable(a, h), this.adapter.updateCssVariable(n, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(o), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, p);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, a = t.wasActivatedByPointer, n;
      a ? n = Br(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : n = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, n = {
        x: n.x - this.initialSize / 2,
        y: n.y - this.initialSize / 2
      };
      var c = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: n, endPoint: c };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, a = this.activationState, n = a.hasDeactivationUXRun, c = a.isActivated, o = n || !c;
      o && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, Le.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var a = G({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(a);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(a), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, a = t.wasElementMadeActive;
      (i || a) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), a = function() {
        var c = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return c + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : a();
      var n = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && n % 2 !== 0 ? this.initialSize = n - 1 : this.initialSize = n, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, a = t.VAR_LEFT, n = t.VAR_TOP, c = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(c, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(a, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(n, this.unboundedCoords.top + "px"));
    }, e;
  }(Lr)
);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
class Mr {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const i of t)
      this.classes.add(i);
  }
  add(e) {
    this.classes.add(e), this.changed = !0;
  }
  remove(e) {
    this.classes.delete(e), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let e = "";
      this.classes.forEach((t) => e += t + " "), this.element.setAttribute("class", e);
    }
  }
}
const Be = /* @__PURE__ */ new WeakMap(), _e = ke((r) => (e) => {
  if (!(e instanceof ae) || e instanceof ct || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: i } = t;
  let a = Be.get(e);
  a === void 0 && (i.setAttribute("class", t.strings.join(" ")), Be.set(e, a = /* @__PURE__ */ new Set()));
  const n = i.classList || new Mr(i);
  a.forEach((c) => {
    c in r || (n.remove(c), a.delete(c));
  });
  for (const c in r) {
    const o = r[c];
    o != a.has(c) && (o ? (n.add(c), a.add(c)) : (n.remove(c), a.delete(c)));
  }
  typeof n.commit == "function" && n.commit();
});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
const Ue = /* @__PURE__ */ new WeakMap(), Nr = ke((r) => (e) => {
  if (!(e instanceof ae) || e instanceof ct || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: i } = t.element;
  let a = Ue.get(e);
  a === void 0 && (i.cssText = t.strings.join(" "), Ue.set(e, a = /* @__PURE__ */ new Set())), a.forEach((n) => {
    n in r || (a.delete(n), n.indexOf("-") === -1 ? i[n] = null : i.removeProperty(n));
  });
  for (const n in r)
    a.add(n), n.indexOf("-") === -1 ? i[n] = r[n] : i.setProperty(n, r[n]);
});
class v extends st {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Ur;
  }
  get isActive() {
    return Dr(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !0;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !0;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !0;
            break;
        }
      },
      removeClass: (e) => {
        switch (e) {
          case "mdc-ripple-upgraded--background-focused":
            this.bgFocused = !1;
            break;
          case "mdc-ripple-upgraded--foreground-activation":
            this.fgActivation = !1;
            break;
          case "mdc-ripple-upgraded--foreground-deactivation":
            this.fgDeactivation = !1;
            break;
        }
      },
      containsEventTarget: () => !0,
      registerInteractionHandler: () => {
      },
      deregisterInteractionHandler: () => {
      },
      registerDocumentInteractionHandler: () => {
      },
      deregisterDocumentInteractionHandler: () => {
      },
      registerResizeHandler: () => {
      },
      deregisterResizeHandler: () => {
      },
      updateCssVariable: (e, t) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = t;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = t;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = t;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = t;
            break;
          case "--mdc-ripple-left":
            this.leftPos = t;
            break;
          case "--mdc-ripple-top":
            this.topPos = t;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(e) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(e);
    });
  }
  endPress() {
    this.waitForFoundation(() => {
      this.mdcFoundation.deactivate();
    });
  }
  startFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleFocus();
    });
  }
  endFocus() {
    this.waitForFoundation(() => {
      this.mdcFoundation.handleBlur();
    });
  }
  startHover() {
    this.hovering = !0;
  }
  endHover() {
    this.hovering = !1;
  }
  /**
   * Wait for the MDCFoundation to be created by `firstUpdated`
   */
  waitForFoundation(e) {
    this.mdcFoundation ? e() : this.updateComplete.then(e);
  }
  update(e) {
    e.has("disabled") && this.disabled && this.endHover(), super.update(e);
  }
  /** @soyTemplate */
  render() {
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), i = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": t,
      "mdc-ripple-surface--accent--selected": this.accent && this.selected,
      "mdc-ripple-surface--disabled": this.disabled,
      "mdc-ripple-surface--hover": this.hovering,
      "mdc-ripple-surface--primary": this.primary,
      "mdc-ripple-surface--selected": this.selected,
      "mdc-ripple-upgraded--background-focused": this.bgFocused,
      "mdc-ripple-upgraded--foreground-activation": this.fgActivation,
      "mdc-ripple-upgraded--foreground-deactivation": this.fgDeactivation,
      "mdc-ripple-upgraded--unbounded": this.unbounded,
      "mdc-ripple-surface--internal-use-state-layer-custom-properties": this.internalUseStateLayerCustomProperties
    };
    return f`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${_e(i)}"
          style="${Nr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
u([
  I(".mdc-ripple-surface")
], v.prototype, "mdcRoot", void 0);
u([
  m({ type: Boolean })
], v.prototype, "primary", void 0);
u([
  m({ type: Boolean })
], v.prototype, "accent", void 0);
u([
  m({ type: Boolean })
], v.prototype, "unbounded", void 0);
u([
  m({ type: Boolean })
], v.prototype, "disabled", void 0);
u([
  m({ type: Boolean })
], v.prototype, "activated", void 0);
u([
  m({ type: Boolean })
], v.prototype, "selected", void 0);
u([
  m({ type: Boolean })
], v.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  g()
], v.prototype, "hovering", void 0);
u([
  g()
], v.prototype, "bgFocused", void 0);
u([
  g()
], v.prototype, "fgActivation", void 0);
u([
  g()
], v.prototype, "fgDeactivation", void 0);
u([
  g()
], v.prototype, "fgScale", void 0);
u([
  g()
], v.prototype, "fgSize", void 0);
u([
  g()
], v.prototype, "translateStart", void 0);
u([
  g()
], v.prototype, "translateEnd", void 0);
u([
  g()
], v.prototype, "leftPos", void 0);
u([
  g()
], v.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Or = ge`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let he = class extends v {
};
he.styles = [Or];
he = u([
  H("mwc-ripple")
], he);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const we = (r) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const i = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), i.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (a, n) => e.constructor._observers.set(n, a)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const i = e.updated;
      e.updated = function(a) {
        i.call(this, a), a.forEach((n, c) => {
          const d = this.constructor._observers.get(c);
          d !== void 0 && d.call(this, this[c], n);
        });
      };
    }
    e.constructor._observers.set(t, r);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class dt {
  constructor(e) {
    this.startPress = (t) => {
      e().then((i) => {
        i && i.startPress(t);
      });
    }, this.endPress = () => {
      e().then((t) => {
        t && t.endPress();
      });
    }, this.startFocus = () => {
      e().then((t) => {
        t && t.startFocus();
      });
    }, this.endFocus = () => {
      e().then((t) => {
        t && t.endFocus();
      });
    }, this.startHover = () => {
      e().then((t) => {
        t && t.startHover();
      });
    }, this.endHover = () => {
      e().then((t) => {
        t && t.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class w extends K {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new dt(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
      {
        target: this,
        eventNames: ["click"],
        cb: () => {
          this.onClick();
        }
      },
      {
        target: this,
        eventNames: ["mouseenter"],
        cb: this.rippleHandlers.startHover
      },
      {
        target: this,
        eventNames: ["mouseleave"],
        cb: this.rippleHandlers.endHover
      },
      {
        target: this,
        eventNames: ["focus"],
        cb: this.rippleHandlers.startFocus
      },
      {
        target: this,
        eventNames: ["blur"],
        cb: this.rippleHandlers.endFocus
      },
      {
        target: this,
        eventNames: ["mousedown", "touchstart"],
        cb: (e) => {
          const t = e.type;
          this.onDown(t === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : f``, i = this.hasMeta ? this.renderMeta() : f``;
    return f`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? f`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? f`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return f`
      <span class="mdc-deprecated-list-item__graphic material-icons ${_e(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return f`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return f`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return f`<slot></slot>`;
  }
  renderTwoline() {
    return f`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `;
  }
  onClick() {
    this.fireRequestSelected(!this.selected, "interaction");
  }
  onDown(e, t) {
    const i = () => {
      window.removeEventListener(e, i), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, i), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const i = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(i);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.addEventListener(t, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const t of e.eventNames)
        e.target.removeEventListener(t, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
u([
  I("slot")
], w.prototype, "slotElement", void 0);
u([
  Ne("mwc-ripple")
], w.prototype, "ripple", void 0);
u([
  m({ type: String })
], w.prototype, "value", void 0);
u([
  m({ type: String, reflect: !0 })
], w.prototype, "group", void 0);
u([
  m({ type: Number, reflect: !0 })
], w.prototype, "tabindex", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  we(function(r) {
    r ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], w.prototype, "disabled", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], w.prototype, "twoline", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], w.prototype, "activated", void 0);
u([
  m({ type: String, reflect: !0 })
], w.prototype, "graphic", void 0);
u([
  m({ type: Boolean })
], w.prototype, "multipleGraphics", void 0);
u([
  m({ type: Boolean })
], w.prototype, "hasMeta", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  we(function(r) {
    r ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], w.prototype, "noninteractive", void 0);
u([
  m({ type: Boolean, reflect: !0 }),
  we(function(r) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && r ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(r, "property");
  })
], w.prototype, "selected", void 0);
u([
  g()
], w.prototype, "shouldRenderRipple", void 0);
u([
  g()
], w.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const zr = ge`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let me = class extends w {
};
me.styles = [zr];
me = u([
  H("mwc-list-item")
], me);
var $r = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, D = (r, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? Hr(e, t) : e, n = r.length - 1, c; n >= 0; n--)
    (c = r[n]) && (a = (i ? c(e, t, a) : c(a)) || a);
  return i && a && $r(e, t, a), a;
};
let R = class extends At {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(r) {
    const e = this.multipliers.indexOf(r);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(r) {
    !this.nullable || r === this.isNull || (this.isNull = r, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(r) {
    r === null ? this.null = !0 : (this.null = !1, this.value = r);
  }
  selectMultiplier(r) {
    this.multiplier = this.multipliers[r.detail.index];
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.helperPersistent = !1, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.helperPersistent = !0, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated(), this.multiplierMenu && (this.multiplierMenu.anchor = this.multiplierButton ?? null);
  }
  checkValidity() {
    return this.reservedValues && this.reservedValues.some((r) => r === this.value) ? (this.setCustomValidity(pe("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? f`<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => this.multiplierMenu?.show()}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${this.multiplierButton ?? null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>` : f``;
  }
  renderMulplierList() {
    return f`${this.multipliers.map(
      (r) => f`<mwc-list-item ?selected=${r === this.multiplier}
          >${r === null ? pe("textfield.noMultiplier") : r}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? f`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : f``;
  }
  render() {
    return f`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        ${this.renderUnitSelector()}
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
D([
  m({ type: Boolean })
], R.prototype, "nullable", 2);
D([
  m({ type: Array })
], R.prototype, "multipliers", 2);
D([
  m({ type: String })
], R.prototype, "multiplier", 1);
D([
  m({ type: String })
], R.prototype, "unit", 2);
D([
  g()
], R.prototype, "null", 1);
D([
  m({ type: String })
], R.prototype, "maybeValue", 1);
D([
  m({ type: String })
], R.prototype, "defaultValue", 2);
D([
  m({ type: Array })
], R.prototype, "reservedValues", 2);
D([
  I("mwc-switch")
], R.prototype, "nullSwitch", 2);
D([
  I("mwc-menu")
], R.prototype, "multiplierMenu", 2);
D([
  I("mwc-icon-button")
], R.prototype, "multiplierButton", 2);
R = D([
  H("wizard-textfield")
], R);
var Vr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, N = (r, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? qr(e, t) : e, n = r.length - 1, c; n >= 0; n--)
    (c = r[n]) && (a = (i ? c(e, t, a) : c(a)) || a);
  return i && a && Vr(e, t, a), a;
};
let B = class extends wt {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(r) {
    !this.nullable || r === this.isNull || (this.isNull = r, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(r) {
    r === null ? this.null = !0 : (this.null = !1, this.value = r);
  }
  enable() {
    this.nulled !== null && (this.value = this.nulled, this.nulled = null, this.disabled = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.value, this.value = this.defaultValue, this.disabled = !0);
  }
  async firstUpdated() {
    await super.firstUpdated();
  }
  checkValidity() {
    return this.nullable && !this.nullSwitch?.checked ? !0 : super.checkValidity();
  }
  renderSwitch() {
    return this.nullable ? f`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : f``;
  }
  render() {
    return f`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
N([
  m({ type: Boolean })
], B.prototype, "nullable", 2);
N([
  g()
], B.prototype, "null", 1);
N([
  m({ type: String })
], B.prototype, "maybeValue", 1);
N([
  m({ type: String })
], B.prototype, "defaultValue", 2);
N([
  m({ type: Array })
], B.prototype, "reservedValues", 2);
N([
  I("mwc-switch")
], B.prototype, "nullSwitch", 2);
B = N([
  H("wizard-select")
], B);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Gr(r, e, t) {
  const i = r.constructor;
  if (!t) {
    const o = `__${e}`;
    if (t = i.getPropertyDescriptor(e, o), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const a = t;
  let n = "";
  if (!a.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const c = {
    configurable: !0,
    enumerable: !0,
    set(o) {
      n === "" && (n = i.getPropertyOptions(e).attribute), this.hasAttribute(n) && this.removeAttribute(n), a.set.call(this, o);
    }
  };
  return a.get && (c.get = function() {
    return a.get.call(this);
  }), c;
}
function Ae(r, e, t) {
  if (e !== void 0)
    return Gr(r, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class lt extends st {
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(e) {
    this.formElement && this.formElement.setAttribute("aria-label", e);
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (e) => {
      this.dispatchEvent(new Event("change", e));
    });
  }
}
lt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
const se = /* @__PURE__ */ new WeakMap(), q = ke((r) => (e) => {
  const t = se.get(e);
  if (r === void 0 && e instanceof ae) {
    if (t !== void 0 || !se.has(e)) {
      const i = e.committer.name;
      e.committer.element.removeAttribute(i);
    }
  } else r !== t && e.setValue(r);
  se.set(e, r);
});
class _ extends lt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new dt(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), i = e.get("checked"), a = e.get("disabled");
    if (t !== void 0 || i !== void 0 || a !== void 0) {
      const n = this.calculateAnimationStateName(!!i, !!t, !!a), c = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${n}-${c}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, i) {
    return i ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? f`<mwc-ripple
        .disabled="${this.disabled}"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        unbounded></mwc-ripple>` : "";
  }
  /**
   * @soyTemplate
   * @soyAttributes checkboxAttributes: input
   * @soyClasses checkboxClasses: .mdc-checkbox
   */
  render() {
    const e = this.indeterminate || this.checked, t = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": e,
      "mdc-checkbox--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      // transition animiation classes
      "mdc-checkbox--anim-checked-indeterminate": this.animationClass == "checked-indeterminate",
      "mdc-checkbox--anim-checked-unchecked": this.animationClass == "checked-unchecked",
      "mdc-checkbox--anim-indeterminate-checked": this.animationClass == "indeterminate-checked",
      "mdc-checkbox--anim-indeterminate-unchecked": this.animationClass == "indeterminate-unchecked",
      "mdc-checkbox--anim-unchecked-checked": this.animationClass == "unchecked-checked",
      "mdc-checkbox--anim-unchecked-indeterminate": this.animationClass == "unchecked-indeterminate"
    }, i = this.indeterminate ? "mixed" : void 0;
    return f`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${_e(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${q(this.name)}"
              aria-checked="${q(i)}"
              aria-label="${q(this.ariaLabel)}"
              aria-labelledby="${q(this.ariaLabelledBy)}"
              aria-describedby="${q(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate ? "true" : "false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleBlur() {
    this.focused = !1, this.handleRippleBlur();
  }
  handleRippleMouseDown(e) {
    const t = () => {
      window.removeEventListener("mouseup", t), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", t), this.rippleHandlers.startPress(e);
  }
  handleRippleTouchStart(e) {
    this.rippleHandlers.startPress(e);
  }
  handleRippleDeactivate() {
    this.rippleHandlers.endPress();
  }
  handleRippleMouseEnter() {
    this.rippleHandlers.startHover();
  }
  handleRippleMouseLeave() {
    this.rippleHandlers.endHover();
  }
  handleRippleFocus() {
    this.rippleHandlers.startFocus();
  }
  handleRippleBlur() {
    this.rippleHandlers.endFocus();
  }
  handleChange() {
    this.checked = this.formElement.checked, this.indeterminate = this.formElement.indeterminate;
  }
  resetAnimationClass() {
    this.animationClass = "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
}
u([
  I(".mdc-checkbox")
], _.prototype, "mdcRoot", void 0);
u([
  I("input")
], _.prototype, "formElement", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], _.prototype, "checked", void 0);
u([
  m({ type: Boolean })
], _.prototype, "indeterminate", void 0);
u([
  m({ type: Boolean, reflect: !0 })
], _.prototype, "disabled", void 0);
u([
  m({ type: String, reflect: !0 })
], _.prototype, "name", void 0);
u([
  m({ type: String })
], _.prototype, "value", void 0);
u([
  Ae,
  m({ type: String, attribute: "aria-label" })
], _.prototype, "ariaLabel", void 0);
u([
  Ae,
  m({ type: String, attribute: "aria-labelledby" })
], _.prototype, "ariaLabelledBy", void 0);
u([
  Ae,
  m({ type: String, attribute: "aria-describedby" })
], _.prototype, "ariaDescribedBy", void 0);
u([
  m({ type: Boolean })
], _.prototype, "reducedTouchTarget", void 0);
u([
  g()
], _.prototype, "animationClass", void 0);
u([
  g()
], _.prototype, "shouldRenderRipple", void 0);
u([
  g()
], _.prototype, "focused", void 0);
u([
  g()
], _.prototype, "useStateLayerCustomProperties", void 0);
u([
  Ne("mwc-ripple")
], _.prototype, "ripple", void 0);
u([
  xt({ passive: !0 })
], _.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const jr = ge`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let fe = class extends _ {
};
fe.styles = [jr];
fe = u([
  H("mwc-checkbox")
], fe);
var Yr = Object.defineProperty, Wr = Object.getOwnPropertyDescriptor, E = (r, e, t, i) => {
  for (var a = i > 1 ? void 0 : i ? Wr(e, t) : e, n = r.length - 1, c; n >= 0; n--)
    (c = r[n]) && (a = (i ? c(e, t, a) : c(a)) || a);
  return i && a && Yr(e, t, a), a;
};
let A = class extends K {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(r) {
    r === null ? this.null = !0 : (this.null = !1, this.checked = r === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(r) {
    !this.nullable || r === this.isNull || (this.isNull = r, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(r) {
    this.checkbox ? this.checkbox.checked = r : this.initChecked = r;
  }
  get formfieldLabel() {
    return this.helper ? `${this.helper} (${this.label})` : this.label;
  }
  enable() {
    this.nulled !== null && (this.checked = this.nulled, this.nulled = null, this.deactivateCheckbox = !1);
  }
  disable() {
    this.nulled === null && (this.nulled = this.checked, this.checked = this.defaultChecked, this.deactivateCheckbox = !0);
  }
  firstUpdated() {
    this.requestUpdate();
  }
  renderSwitch() {
    return this.nullable ? f`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : f``;
  }
  render() {
    return f`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-formfield
            label="${this.formfieldLabel}"
            style="${this.deactivateCheckbox || this.disabled ? "--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.38)" : ""}"
            ><mwc-checkbox
              ?checked=${this.initChecked}
              ?disabled=${this.deactivateCheckbox || this.disabled}
            ></mwc-checkbox
          ></mwc-formfield>
        </div>
        <div style="display: flex; align-items: center;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
E([
  m({ type: String })
], A.prototype, "label", 2);
E([
  m({ type: String })
], A.prototype, "helper", 2);
E([
  m({ type: Boolean })
], A.prototype, "nullable", 2);
E([
  m({ type: Boolean })
], A.prototype, "defaultChecked", 2);
E([
  m({ type: String })
], A.prototype, "maybeValue", 1);
E([
  m({ type: Boolean })
], A.prototype, "disabled", 2);
E([
  g()
], A.prototype, "null", 1);
E([
  g()
], A.prototype, "checked", 1);
E([
  g()
], A.prototype, "deactivateCheckbox", 2);
E([
  g()
], A.prototype, "formfieldLabel", 1);
E([
  I("mwc-switch")
], A.prototype, "nullSwitch", 2);
E([
  I("mwc-checkbox")
], A.prototype, "checkbox", 2);
A = E([
  H("wizard-checkbox")
], A);
const Xr = [
  "TransformerWinding",
  "ConductingEquipment"
], Jr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Xr
], Zr = ["Substation", "VoltageLevel", "Bay"], Qr = ["Process", "Line"], Kr = ["EqSubFunction", "EqFunction"], ei = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Jr,
  ...Zr,
  ...Qr,
  ...Kr
], ti = ["ConnectivityNode", ...ei], ri = ["GOOSESecurity", "SMVSecurity"], ii = ["SubNetwork", ...ri, ...ti], ai = ["BDA", "DA"], ni = ["SampledValueControl", "GSEControl"], ci = ["LogControl", "ReportControl"], oi = [...ni, ...ci], si = ["GSE", "SMV"], di = [
  "ConnectedAP",
  "PhysConn",
  "SDO",
  "DO",
  "DAI",
  "SDI",
  "DOI",
  "Inputs",
  "RptEnabled",
  "Server",
  "ServerAt",
  "SettingControl",
  "Communication",
  "Log",
  "LDevice",
  "DataSet",
  "AccessPoint",
  "IED",
  "NeutralPoint",
  ...oi,
  ...si,
  ...ai
], li = ["LN0", "LN"], pi = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], ui = ["Subject", "IssuerName"], hi = ["MinTime", "MaxTime"], mi = ["LNodeType", "DOType", "DAType", "EnumType"], fi = [
  "FileHandling",
  "TimeSyncProt",
  "CommProt",
  "SGEdit",
  "ConfSG",
  "GetDirectory",
  "GetDataObjectDefinition",
  "DataObjectDirectory",
  "GetDataSetValue",
  "SetDataSetValue",
  "DataSetDirectory",
  "ReadWrite",
  "TimerActivatedControl",
  "GetCBValues",
  "GSEDir",
  "ConfLdName"
], gi = ["DynDataSet", "ConfDataSet"], bi = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...gi
], yi = ["ConfLogControl", "ConfSigRef"], vi = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], xi = ["SCL", ...ii, ...di, ...mi], ki = [
  ...xi,
  ...pi,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...ui,
  ...hi,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...li,
  ...fi,
  "DynAssociation",
  "SettingGroups",
  ...bi,
  ...yi,
  ...vi,
  "ConfLNs",
  "ClientServices",
  "SupSubscription",
  "ValueHandling",
  "RedProt",
  "McSecurity",
  "KDC",
  "Address",
  "P",
  "ProtNs",
  "EnumVal",
  "Terminal",
  "BitRate",
  "Authentication",
  "DataTypeTemplates",
  "History",
  "OptFields",
  "SmvOpts",
  "TrgOps",
  "SamplesPerSec",
  "SmpRate",
  "SecPerSamples"
];
new Set(ki);
Oe((r) => (e) => {
  Object.keys(r).length ? e.setValue(r) : e.setValue("");
});
function _i(r, e) {
  return typeof r == "string" && typeof e == "string" ? r.localeCompare(e) : typeof r == "object" && typeof e == "string" ? (r.getAttribute("name") ?? "").localeCompare(e) : typeof r == "string" && typeof e == "object" ? r.localeCompare(e.getAttribute("name")) : typeof r == "object" && typeof e == "object" ? (r.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
const wi = 99;
Array(wi).fill(1).map((r, e) => `${e + 1}`);
const Me = 3;
function Ai(r) {
  let e = r;
  return e.length > Me && e.lastIndexOf(".") == e.length - (Me + 1) && (e = e.substring(0, e.lastIndexOf("."))), e;
}
var Si = Object.defineProperty, pt = (r, e, t, i) => {
  for (var a = void 0, n = r.length - 1, c; n >= 0; n--)
    (c = r[n]) && (a = c(e, t, a) || a);
  return a && Si(e, t, a), a;
};
class ut extends K {
  get ieds() {
    return Array.from(this.doc.querySelectorAll("IED"));
  }
  getSelector(e, t) {
    return e.replace(/{{\s*iedName\s*}}/, t);
  }
  /**
   * Find the DO/DA/BDA element with the passed name defined below the type element passed.
   * Depending on the type of Type element the query will search for the DO/DA/BDA element.
   *
   * @param dataTypeTemplate - The type element, this can be a LNodeType, DOType or DAType element.
   * @param name             - The name of the element to search for below the type element.
   */
  getDataTypeChildElement(e, t) {
    return e.tagName === "LNodeType" ? e.querySelector(`:scope > DO[name="${t}"]`) : e.tagName === "DOType" ? e.querySelector(
      `:scope > SDO[name="${t}"], :scope > DA[name="${t}"]`
    ) : e.querySelector(`:scope > BDA[name="${t}"]`);
  }
  /**
   * Retrieve the value that will be added to the CSV file. If an attribute name is passed the value of the
   * attribute is returned. Otherwise, the textContent of the element is returned.
   * @param element       - The element to retrieve the value from.
   * @param attributeName - Optional the name of the attribute.
   */
  getValue(e, t) {
    return t ? e.getAttribute(t) ?? "" : e.textContent ?? "";
  }
  /**
   * Use the DO/SDO/DA/BDA data element to search for the type element. In case of the DO/SDO a DOType is search
   * for and otherwise a DAType is searched for if the data element is a struct type.
   *
   * @param leafElement - The data element to retrieve its type definition.
   */
  getDataTypeTemplateElement(e) {
    if (e) {
      if (["DO", "SDO"].includes(e.tagName)) {
        const t = e.getAttribute("type") ?? "";
        return this.doc.querySelector(`DOType[id="${t}"]`);
      } else if ((e.getAttribute("bType") ?? "") === "Struct") {
        const i = e.getAttribute("type") ?? "";
        return this.doc.querySelector(`DAType[id="${i}"]`);
      }
    }
    return null;
  }
  /**
   * Search for the DO/SDO/DA/BDA element in the Template section of the document using the path array passed.
   * The LN element is the starting point for the search in the Template section.
   *
   * @param lnElement         - The LN Element used as starting point in the Template section.
   * @param dataAttributePath - The list of elements to search for, the names of the elements.
   */
  getDataAttributeTemplateValue(e, t) {
    if (["LN", "LN0"].includes(e.tagName) && t.length >= 2) {
      const i = e.getAttribute("lnType");
      let a = this.doc.querySelector(`LNodeType[id="${i}"]`), n = null;
      if (t.forEach((c) => {
        a && (n = this.getDataTypeChildElement(a, c), a = this.getDataTypeTemplateElement(n));
      }), n)
        return n.querySelector("Val")?.textContent?.trim() ?? null;
    }
    return null;
  }
  /**
   * Search for the DAI element below the LN element using the path passed. The list of names is converted
   * to a CSS Selector to search for the DAI Element and its Val Element.
   *
   * @param lnElement         - The LN Element used as starting point for the search.
   * @param dataAttributePath - The names of the DOI/SDI/DAI Elements to search for.
   */
  getDataAttributeInstanceValue(e, t) {
    if (["LN", "LN0"].includes(e.tagName) && t.length >= 2) {
      const i = t.map((n, c) => c === 0 ? `DOI[name="${n}"]` : c === t.length - 1 ? `DAI[name="${n}"]` : `SDI[name="${n}"]`).join(" > ");
      return e.querySelector(i + " Val")?.textContent?.trim() ?? null;
    }
    return null;
  }
  /**
   * First check if there is an instance element found (DAI) found, otherwise search in the Template section.
   *
   * @param lnElement         - The LN Element used as starting point for the search.
   * @param dataAttributePath - The names of the DO(I)/SD(I)/DA(I) Elements to search for.
   */
  getDataAttributeValue(e, t) {
    let i = this.getDataAttributeInstanceValue(
      e,
      t
    );
    return i || (i = this.getDataAttributeTemplateValue(e, t)), i ?? "";
  }
  /**
   * Retrieve the list of elements found by the selector or if no selector defined the IED element.
   *
   * @param iedElement       - The IED element that will be used to search below if useOwnerDocument is false.
   * @param selector         - If passed the CSS selector to search for the elements.
   * @param useOwnerDocument - If false will use the IED element to search below, otherwise the full document.
   */
  getElements(e, t, i) {
    let a = [e];
    if (t) {
      const n = e.getAttribute("name") ?? "", c = this.getSelector(t, n);
      i ? a = Array.from(
        e.ownerDocument.querySelectorAll(c)
      ) : a = Array.from(e.querySelectorAll(c));
    }
    return a;
  }
  /**
   * Create a single line of values for the CSV File.
   *
   * @param configuration - The configuration with values to retrieve.
   * @param iedElement    - The IED Element for which to retrieve the values.
   */
  cvsLine(e, t) {
    return e.columns.map((i) => this.getElements(
      t,
      i.selector,
      i.useOwnerDocument ?? !1
    ).map((n) => i.dataAttributePath ? this.getDataAttributeValue(
      n,
      i.dataAttributePath
    ) : this.getValue(n, i.attributeName)).filter((n) => n).join(" / "));
  }
  /**
   * Create the full content of the CSV file, for each IED found a line of values is returned.
   *
   * @param configuration - The configuration of the values to retrieve.
   */
  cvsLines(e) {
    const t = this.ieds;
    return t.length > 0 ? t.sort(_i).map((i) => this.cvsLine(e, i)) : [[pe("compas.exportIEDParams.noIEDs")]];
  }
  /**
   * Return the headers values from the configuration.
   *
   * @param configuration - The configuration containing the header names.
   */
  columnHeaders(e) {
    return e.columns.map((t) => t.header);
  }
  /**
   * Read the configuration file.
   */
  async getConfiguration() {
    return await Promise.resolve().then(() => Ri).then(
      (e) => e.default
    );
  }
  async run() {
    const e = await this.getConfiguration(), t = gr(this.cvsLines(e), {
      header: !0,
      columns: this.columnHeaders(e)
    }), i = new Blob([t], {
      type: "text/csv"
    }), a = document.createElement("a");
    a.download = Ai(this.docName) + "-ied-params.csv", a.href = URL.createObjectURL(i), a.dataset.downloadurl = ["text/csv", a.download, a.href].join(":"), a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a), setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 5e3);
  }
}
pt([
  m()
], ut.prototype, "doc");
pt([
  m()
], ut.prototype, "docName");
const ht = ["This file contains the configuration for exporting IED Information to a CSV File.", 'Each column can be defined below in the section "columns".', 'A Column must at least have a "header" defined.', "", "A selector can be defined to search for a Element, if no selector is defined, the IED Element is used.", "If the useOwnerDocument is set to true, the selector will be used on the whole document, otherwise on the IED Element", "There is a variable 'iedName' being replaced before executing the selector, put this between '{{' an '}}'.", "If a dataAttributePath is defined, the selector should return a LN(0) Element and the path is then used to search for a DAI/DA Element.", "The dataAttributePath should at least contain 2 names, because the minimum is always a DO(I) followed by a DA(I) element.", "", "If a attributeName is defined that attribute will be retrieved from the elements found by the selector.", "Otherwise the text content of the elements is retrieved."], mt = [{ header: "IED Name", attributeName: "name" }, { header: "IP address", selector: 'Communication > SubNetwork > ConnectedAP[iedName="{{ iedName }}"] > Address:first-child > P[type="IP"]', useOwnerDocument: !0 }, { header: "Subnetmask", selector: 'Communication > SubNetwork > ConnectedAP[iedName="{{ iedName }}"] > Address:first-child > P[type="IP-SUBNET"]', useOwnerDocument: !0 }, { header: "IED Description", attributeName: "desc" }, { header: "IL1 Primary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="IL1"][lnClass="TCTR"]', dataAttributePath: ["ARtg", "setMag", "f"] }, { header: "IL1 Network Nominal Current", selector: 'AccessPoint > Server > LDevice > LN[prefix="IL1"][lnClass="TCTR"]', dataAttributePath: ["ARtgNom", "setMag", "f"] }, { header: "IL1 Secondary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="IL1"][lnClass="TCTR"]', dataAttributePath: ["ARtgSec", "setVal"] }, { header: "RES Primary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TCTR"]', dataAttributePath: ["ARtg", "setMag", "f"] }, { header: "RES Network Nominal Current", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TCTR"]', dataAttributePath: ["ARtgNom", "setMag", "f"] }, { header: "RES Secondary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TCTR"]', dataAttributePath: ["ARtgSec", "setVal"] }, { header: "UL1 Primary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="UL1"][lnClass="TVTR"]', dataAttributePath: ["VRtg", "setMag", "f"] }, { header: "UL1 Secondary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="UL1"][lnClass="TVTR"]', dataAttributePath: ["VRtgSec", "setVal"] }, { header: "UL1 Devision ratio", selector: 'AccessPoint > Server > LDevice > LN[prefix="UL1"][lnClass="TVTR"]', dataAttributePath: ["Rat", "setMag", "f"] }, { header: "RES Primary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TVTR"]', dataAttributePath: ["VRtg", "setMag", "f"] }, { header: "RES Secondary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TVTR"]', dataAttributePath: ["VRtgSec", "setVal"] }, { header: "RES Devision ratio", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TVTR"]', dataAttributePath: ["Rat", "setMag", "f"] }, { header: "Vendor", selector: 'AccessPoint > Server > LDevice > LN[lnClass="LPHD"]', dataAttributePath: ["PhyNam", "vendor"] }, { header: "Model", selector: 'AccessPoint > Server > LDevice > LN[lnClass="LPHD"]', dataAttributePath: ["PhyNam", "model"] }], Ci = {
  comments: ht,
  columns: mt
}, Ri = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  columns: mt,
  comments: ht,
  default: Ci
}, Symbol.toStringTag, { value: "Module" }));
export {
  ut as default
};
