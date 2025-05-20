import { LitElement as ee, query as L, property as h, state as g, html as f, css as ye, customElement as U, queryAsync as Ve, eventOptions as wt } from "lit-element";
import { NodePart as St, AttributePart as _t, directive as Me } from "lit-html";
import { Select as At } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as Dt } from "@material/mwc-textfield";
import "@material/mwc-formfield";
var Ce = typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}, T = [], N = [], Et = typeof Uint8Array < "u" ? Uint8Array : Array, ve = !1;
function Ue() {
  ve = !0;
  for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, t = i.length; e < t; ++e)
    T[e] = i[e], N[i.charCodeAt(e)] = e;
  N[45] = 62, N[95] = 63;
}
function Ct(i) {
  ve || Ue();
  var e, t, r, n, a, o, c = i.length;
  if (c % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  a = i[c - 2] === "=" ? 2 : i[c - 1] === "=" ? 1 : 0, o = new Et(c * 3 / 4 - a), r = a > 0 ? c - 4 : c;
  var d = 0;
  for (e = 0, t = 0; e < r; e += 4, t += 3)
    n = N[i.charCodeAt(e)] << 18 | N[i.charCodeAt(e + 1)] << 12 | N[i.charCodeAt(e + 2)] << 6 | N[i.charCodeAt(e + 3)], o[d++] = n >> 16 & 255, o[d++] = n >> 8 & 255, o[d++] = n & 255;
  return a === 2 ? (n = N[i.charCodeAt(e)] << 2 | N[i.charCodeAt(e + 1)] >> 4, o[d++] = n & 255) : a === 1 && (n = N[i.charCodeAt(e)] << 10 | N[i.charCodeAt(e + 1)] << 4 | N[i.charCodeAt(e + 2)] >> 2, o[d++] = n >> 8 & 255, o[d++] = n & 255), o;
}
function Nt(i) {
  return T[i >> 18 & 63] + T[i >> 12 & 63] + T[i >> 6 & 63] + T[i & 63];
}
function It(i, e, t) {
  for (var r, n = [], a = e; a < t; a += 3)
    r = (i[a] << 16) + (i[a + 1] << 8) + i[a + 2], n.push(Nt(r));
  return n.join("");
}
function Ne(i) {
  ve || Ue();
  for (var e, t = i.length, r = t % 3, n = "", a = [], o = 16383, c = 0, d = t - r; c < d; c += o)
    a.push(It(i, c, c + o > d ? d : c + o));
  return r === 1 ? (e = i[t - 1], n += T[e >> 2], n += T[e << 4 & 63], n += "==") : r === 2 && (e = (i[t - 2] << 8) + i[t - 1], n += T[e >> 10], n += T[e >> 4 & 63], n += T[e << 2 & 63], n += "="), a.push(n), a.join("");
}
function te(i, e, t, r, n) {
  var a, o, c = n * 8 - r - 1, d = (1 << c) - 1, u = d >> 1, m = -7, l = t ? n - 1 : 0, k = t ? -1 : 1, b = i[e + l];
  for (l += k, a = b & (1 << -m) - 1, b >>= -m, m += c; m > 0; a = a * 256 + i[e + l], l += k, m -= 8)
    ;
  for (o = a & (1 << -m) - 1, a >>= -m, m += r; m > 0; o = o * 256 + i[e + l], l += k, m -= 8)
    ;
  if (a === 0)
    a = 1 - u;
  else {
    if (a === d)
      return o ? NaN : (b ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, r), a = a - u;
  }
  return (b ? -1 : 1) * o * Math.pow(2, a - r);
}
function Ge(i, e, t, r, n, a) {
  var o, c, d, u = a * 8 - n - 1, m = (1 << u) - 1, l = m >> 1, k = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : a - 1, y = r ? 1 : -1, D = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, o = m) : (o = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -o)) < 1 && (o--, d *= 2), o + l >= 1 ? e += k / d : e += k * Math.pow(2, 1 - l), e * d >= 2 && (o++, d /= 2), o + l >= m ? (c = 0, o = m) : o + l >= 1 ? (c = (e * d - 1) * Math.pow(2, n), o = o + l) : (c = e * Math.pow(2, l - 1) * Math.pow(2, n), o = 0)); n >= 8; i[t + b] = c & 255, b += y, c /= 256, n -= 8)
    ;
  for (o = o << n | c, u += n; u > 0; i[t + b] = o & 255, b += y, o /= 256, u -= 8)
    ;
  i[t + b - y] |= D * 128;
}
var Tt = {}.toString, qe = Array.isArray || function(i) {
  return Tt.call(i) == "[object Array]";
}, Rt = 50;
s.TYPED_ARRAY_SUPPORT = Ce.TYPED_ARRAY_SUPPORT !== void 0 ? Ce.TYPED_ARRAY_SUPPORT : !0;
J();
function J() {
  return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function z(i, e) {
  if (J() < e)
    throw new RangeError("Invalid typed array length");
  return s.TYPED_ARRAY_SUPPORT ? (i = new Uint8Array(e), i.__proto__ = s.prototype) : (i === null && (i = new s(e)), i.length = e), i;
}
function s(i, e, t) {
  if (!s.TYPED_ARRAY_SUPPORT && !(this instanceof s))
    return new s(i, e, t);
  if (typeof i == "number") {
    if (typeof e == "string")
      throw new Error(
        "If encoding is specified then the first argument must be a string"
      );
    return ke(this, i);
  }
  return $e(this, i, e, t);
}
s.poolSize = 8192;
s._augment = function(i) {
  return i.__proto__ = s.prototype, i;
};
function $e(i, e, t, r) {
  if (typeof e == "number")
    throw new TypeError('"value" argument must not be a number');
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer ? Pt(i, e, t, r) : typeof e == "string" ? zt(i, e, t) : Ft(i, e);
}
s.from = function(i, e, t) {
  return $e(null, i, e, t);
};
s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && s[Symbol.species]);
function je(i) {
  if (typeof i != "number")
    throw new TypeError('"size" argument must be a number');
  if (i < 0)
    throw new RangeError('"size" argument must not be negative');
}
function Lt(i, e, t, r) {
  return je(e), e <= 0 ? z(i, e) : t !== void 0 ? typeof r == "string" ? z(i, e).fill(t, r) : z(i, e).fill(t) : z(i, e);
}
s.alloc = function(i, e, t) {
  return Lt(null, i, e, t);
};
function ke(i, e) {
  if (je(e), i = z(i, e < 0 ? 0 : xe(e) | 0), !s.TYPED_ARRAY_SUPPORT)
    for (var t = 0; t < e; ++t)
      i[t] = 0;
  return i;
}
s.allocUnsafe = function(i) {
  return ke(null, i);
};
s.allocUnsafeSlow = function(i) {
  return ke(null, i);
};
function zt(i, e, t) {
  if ((typeof t != "string" || t === "") && (t = "utf8"), !s.isEncoding(t))
    throw new TypeError('"encoding" must be a valid string encoding');
  var r = Ke(e, t) | 0;
  i = z(i, r);
  var n = i.write(e, t);
  return n !== r && (i = i.slice(0, n)), i;
}
function le(i, e) {
  var t = e.length < 0 ? 0 : xe(e.length) | 0;
  i = z(i, t);
  for (var r = 0; r < t; r += 1)
    i[r] = e[r] & 255;
  return i;
}
function Pt(i, e, t, r) {
  if (e.byteLength, t < 0 || e.byteLength < t)
    throw new RangeError("'offset' is out of bounds");
  if (e.byteLength < t + (r || 0))
    throw new RangeError("'length' is out of bounds");
  return t === void 0 && r === void 0 ? e = new Uint8Array(e) : r === void 0 ? e = new Uint8Array(e, t) : e = new Uint8Array(e, t, r), s.TYPED_ARRAY_SUPPORT ? (i = e, i.__proto__ = s.prototype) : i = le(i, e), i;
}
function Ft(i, e) {
  if (R(e)) {
    var t = xe(e.length) | 0;
    return i = z(i, t), i.length === 0 || e.copy(i, 0, 0, t), i;
  }
  if (e) {
    if (typeof ArrayBuffer < "u" && e.buffer instanceof ArrayBuffer || "length" in e)
      return typeof e.length != "number" || ti(e.length) ? z(i, 0) : le(i, e);
    if (e.type === "Buffer" && qe(e.data))
      return le(i, e.data);
  }
  throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function xe(i) {
  if (i >= J())
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + J().toString(16) + " bytes");
  return i | 0;
}
s.isBuffer = V;
function R(i) {
  return !!(i != null && i._isBuffer);
}
s.compare = function(e, t) {
  if (!R(e) || !R(t))
    throw new TypeError("Arguments must be Buffers");
  if (e === t) return 0;
  for (var r = e.length, n = t.length, a = 0, o = Math.min(r, n); a < o; ++a)
    if (e[a] !== t[a]) {
      r = e[a], n = t[a];
      break;
    }
  return r < n ? -1 : n < r ? 1 : 0;
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
  if (!qe(e))
    throw new TypeError('"list" argument must be an Array of Buffers');
  if (e.length === 0)
    return s.alloc(0);
  var r;
  if (t === void 0)
    for (t = 0, r = 0; r < e.length; ++r)
      t += e[r].length;
  var n = s.allocUnsafe(t), a = 0;
  for (r = 0; r < e.length; ++r) {
    var o = e[r];
    if (!R(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    o.copy(n, a), a += o.length;
  }
  return n;
};
function Ke(i, e) {
  if (R(i))
    return i.length;
  if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(i) || i instanceof ArrayBuffer))
    return i.byteLength;
  typeof i != "string" && (i = "" + i);
  var t = i.length;
  if (t === 0) return 0;
  for (var r = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return t;
      case "utf8":
      case "utf-8":
      case void 0:
        return Q(i).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return t * 2;
      case "hex":
        return t >>> 1;
      case "base64":
        return et(i).length;
      default:
        if (r) return Q(i).length;
        e = ("" + e).toLowerCase(), r = !0;
    }
}
s.byteLength = Ke;
function Bt(i, e, t) {
  var r = !1;
  if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
    return "";
  for (i || (i = "utf8"); ; )
    switch (i) {
      case "hex":
        return Kt(this, e, t);
      case "utf8":
      case "utf-8":
        return Ze(this, e, t);
      case "ascii":
        return $t(this, e, t);
      case "latin1":
      case "binary":
        return jt(this, e, t);
      case "base64":
        return Gt(this, e, t);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Wt(this, e, t);
      default:
        if (r) throw new TypeError("Unknown encoding: " + i);
        i = (i + "").toLowerCase(), r = !0;
    }
}
s.prototype._isBuffer = !0;
function B(i, e, t) {
  var r = i[e];
  i[e] = i[t], i[t] = r;
}
s.prototype.swap16 = function() {
  var e = this.length;
  if (e % 2 !== 0)
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var t = 0; t < e; t += 2)
    B(this, t, t + 1);
  return this;
};
s.prototype.swap32 = function() {
  var e = this.length;
  if (e % 4 !== 0)
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var t = 0; t < e; t += 4)
    B(this, t, t + 3), B(this, t + 1, t + 2);
  return this;
};
s.prototype.swap64 = function() {
  var e = this.length;
  if (e % 8 !== 0)
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var t = 0; t < e; t += 8)
    B(this, t, t + 7), B(this, t + 1, t + 6), B(this, t + 2, t + 5), B(this, t + 3, t + 4);
  return this;
};
s.prototype.toString = function() {
  var e = this.length | 0;
  return e === 0 ? "" : arguments.length === 0 ? Ze(this, 0, e) : Bt.apply(this, arguments);
};
s.prototype.equals = function(e) {
  if (!R(e)) throw new TypeError("Argument must be a Buffer");
  return this === e ? !0 : s.compare(this, e) === 0;
};
s.prototype.inspect = function() {
  var e = "", t = Rt;
  return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
};
s.prototype.compare = function(e, t, r, n, a) {
  if (!R(e))
    throw new TypeError("Argument must be a Buffer");
  if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), a === void 0 && (a = this.length), t < 0 || r > e.length || n < 0 || a > this.length)
    throw new RangeError("out of range index");
  if (n >= a && t >= r)
    return 0;
  if (n >= a)
    return -1;
  if (t >= r)
    return 1;
  if (t >>>= 0, r >>>= 0, n >>>= 0, a >>>= 0, this === e) return 0;
  for (var o = a - n, c = r - t, d = Math.min(o, c), u = this.slice(n, a), m = e.slice(t, r), l = 0; l < d; ++l)
    if (u[l] !== m[l]) {
      o = u[l], c = m[l];
      break;
    }
  return o < c ? -1 : c < o ? 1 : 0;
};
function We(i, e, t, r, n) {
  if (i.length === 0) return -1;
  if (typeof t == "string" ? (r = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, isNaN(t) && (t = n ? 0 : i.length - 1), t < 0 && (t = i.length + t), t >= i.length) {
    if (n) return -1;
    t = i.length - 1;
  } else if (t < 0)
    if (n) t = 0;
    else return -1;
  if (typeof e == "string" && (e = s.from(e, r)), R(e))
    return e.length === 0 ? -1 : Ie(i, e, t, r, n);
  if (typeof e == "number")
    return e = e & 255, s.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? n ? Uint8Array.prototype.indexOf.call(i, e, t) : Uint8Array.prototype.lastIndexOf.call(i, e, t) : Ie(i, [e], t, r, n);
  throw new TypeError("val must be string, number or Buffer");
}
function Ie(i, e, t, r, n) {
  var a = 1, o = i.length, c = e.length;
  if (r !== void 0 && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
    if (i.length < 2 || e.length < 2)
      return -1;
    a = 2, o /= 2, c /= 2, t /= 2;
  }
  function d(b, y) {
    return a === 1 ? b[y] : b.readUInt16BE(y * a);
  }
  var u;
  if (n) {
    var m = -1;
    for (u = t; u < o; u++)
      if (d(i, u) === d(e, m === -1 ? 0 : u - m)) {
        if (m === -1 && (m = u), u - m + 1 === c) return m * a;
      } else
        m !== -1 && (u -= u - m), m = -1;
  } else
    for (t + c > o && (t = o - c), u = t; u >= 0; u--) {
      for (var l = !0, k = 0; k < c; k++)
        if (d(i, u + k) !== d(e, k)) {
          l = !1;
          break;
        }
      if (l) return u;
    }
  return -1;
}
s.prototype.includes = function(e, t, r) {
  return this.indexOf(e, t, r) !== -1;
};
s.prototype.indexOf = function(e, t, r) {
  return We(this, e, t, r, !0);
};
s.prototype.lastIndexOf = function(e, t, r) {
  return We(this, e, t, r, !1);
};
function Ht(i, e, t, r) {
  t = Number(t) || 0;
  var n = i.length - t;
  r ? (r = Number(r), r > n && (r = n)) : r = n;
  var a = e.length;
  if (a % 2 !== 0) throw new TypeError("Invalid hex string");
  r > a / 2 && (r = a / 2);
  for (var o = 0; o < r; ++o) {
    var c = parseInt(e.substr(o * 2, 2), 16);
    if (isNaN(c)) return o;
    i[t + o] = c;
  }
  return o;
}
function Ot(i, e, t, r) {
  return ne(Q(e, i.length - t), i, t, r);
}
function Ye(i, e, t, r) {
  return ne(Qt(e), i, t, r);
}
function Vt(i, e, t, r) {
  return Ye(i, e, t, r);
}
function Mt(i, e, t, r) {
  return ne(et(e), i, t, r);
}
function Ut(i, e, t, r) {
  return ne(ei(e, i.length - t), i, t, r);
}
s.prototype.write = function(e, t, r, n) {
  if (t === void 0)
    n = "utf8", r = this.length, t = 0;
  else if (r === void 0 && typeof t == "string")
    n = t, r = this.length, t = 0;
  else if (isFinite(t))
    t = t | 0, isFinite(r) ? (r = r | 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
  else
    throw new Error(
      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
    );
  var a = this.length - t;
  if ((r === void 0 || r > a) && (r = a), e.length > 0 && (r < 0 || t < 0) || t > this.length)
    throw new RangeError("Attempt to write outside buffer bounds");
  n || (n = "utf8");
  for (var o = !1; ; )
    switch (n) {
      case "hex":
        return Ht(this, e, t, r);
      case "utf8":
      case "utf-8":
        return Ot(this, e, t, r);
      case "ascii":
        return Ye(this, e, t, r);
      case "latin1":
      case "binary":
        return Vt(this, e, t, r);
      case "base64":
        return Mt(this, e, t, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return Ut(this, e, t, r);
      default:
        if (o) throw new TypeError("Unknown encoding: " + n);
        n = ("" + n).toLowerCase(), o = !0;
    }
};
s.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
function Gt(i, e, t) {
  return e === 0 && t === i.length ? Ne(i) : Ne(i.slice(e, t));
}
function Ze(i, e, t) {
  t = Math.min(i.length, t);
  for (var r = [], n = e; n < t; ) {
    var a = i[n], o = null, c = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
    if (n + c <= t) {
      var d, u, m, l;
      switch (c) {
        case 1:
          a < 128 && (o = a);
          break;
        case 2:
          d = i[n + 1], (d & 192) === 128 && (l = (a & 31) << 6 | d & 63, l > 127 && (o = l));
          break;
        case 3:
          d = i[n + 1], u = i[n + 2], (d & 192) === 128 && (u & 192) === 128 && (l = (a & 15) << 12 | (d & 63) << 6 | u & 63, l > 2047 && (l < 55296 || l > 57343) && (o = l));
          break;
        case 4:
          d = i[n + 1], u = i[n + 2], m = i[n + 3], (d & 192) === 128 && (u & 192) === 128 && (m & 192) === 128 && (l = (a & 15) << 18 | (d & 63) << 12 | (u & 63) << 6 | m & 63, l > 65535 && l < 1114112 && (o = l));
      }
    }
    o === null ? (o = 65533, c = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), r.push(o), n += c;
  }
  return qt(r);
}
var Te = 4096;
function qt(i) {
  var e = i.length;
  if (e <= Te)
    return String.fromCharCode.apply(String, i);
  for (var t = "", r = 0; r < e; )
    t += String.fromCharCode.apply(
      String,
      i.slice(r, r += Te)
    );
  return t;
}
function $t(i, e, t) {
  var r = "";
  t = Math.min(i.length, t);
  for (var n = e; n < t; ++n)
    r += String.fromCharCode(i[n] & 127);
  return r;
}
function jt(i, e, t) {
  var r = "";
  t = Math.min(i.length, t);
  for (var n = e; n < t; ++n)
    r += String.fromCharCode(i[n]);
  return r;
}
function Kt(i, e, t) {
  var r = i.length;
  (!e || e < 0) && (e = 0), (!t || t < 0 || t > r) && (t = r);
  for (var n = "", a = e; a < t; ++a)
    n += Jt(i[a]);
  return n;
}
function Wt(i, e, t) {
  for (var r = i.slice(e, t), n = "", a = 0; a < r.length; a += 2)
    n += String.fromCharCode(r[a] + r[a + 1] * 256);
  return n;
}
s.prototype.slice = function(e, t) {
  var r = this.length;
  e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
  var n;
  if (s.TYPED_ARRAY_SUPPORT)
    n = this.subarray(e, t), n.__proto__ = s.prototype;
  else {
    var a = t - e;
    n = new s(a, void 0);
    for (var o = 0; o < a; ++o)
      n[o] = this[o + e];
  }
  return n;
};
function x(i, e, t) {
  if (i % 1 !== 0 || i < 0) throw new RangeError("offset is not uint");
  if (i + e > t) throw new RangeError("Trying to access beyond buffer length");
}
s.prototype.readUIntLE = function(e, t, r) {
  e = e | 0, t = t | 0, r || x(e, t, this.length);
  for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); )
    n += this[e + o] * a;
  return n;
};
s.prototype.readUIntBE = function(e, t, r) {
  e = e | 0, t = t | 0, r || x(e, t, this.length);
  for (var n = this[e + --t], a = 1; t > 0 && (a *= 256); )
    n += this[e + --t] * a;
  return n;
};
s.prototype.readUInt8 = function(e, t) {
  return t || x(e, 1, this.length), this[e];
};
s.prototype.readUInt16LE = function(e, t) {
  return t || x(e, 2, this.length), this[e] | this[e + 1] << 8;
};
s.prototype.readUInt16BE = function(e, t) {
  return t || x(e, 2, this.length), this[e] << 8 | this[e + 1];
};
s.prototype.readUInt32LE = function(e, t) {
  return t || x(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
s.prototype.readUInt32BE = function(e, t) {
  return t || x(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
s.prototype.readIntLE = function(e, t, r) {
  e = e | 0, t = t | 0, r || x(e, t, this.length);
  for (var n = this[e], a = 1, o = 0; ++o < t && (a *= 256); )
    n += this[e + o] * a;
  return a *= 128, n >= a && (n -= Math.pow(2, 8 * t)), n;
};
s.prototype.readIntBE = function(e, t, r) {
  e = e | 0, t = t | 0, r || x(e, t, this.length);
  for (var n = t, a = 1, o = this[e + --n]; n > 0 && (a *= 256); )
    o += this[e + --n] * a;
  return a *= 128, o >= a && (o -= Math.pow(2, 8 * t)), o;
};
s.prototype.readInt8 = function(e, t) {
  return t || x(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
};
s.prototype.readInt16LE = function(e, t) {
  t || x(e, 2, this.length);
  var r = this[e] | this[e + 1] << 8;
  return r & 32768 ? r | 4294901760 : r;
};
s.prototype.readInt16BE = function(e, t) {
  t || x(e, 2, this.length);
  var r = this[e + 1] | this[e] << 8;
  return r & 32768 ? r | 4294901760 : r;
};
s.prototype.readInt32LE = function(e, t) {
  return t || x(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
s.prototype.readInt32BE = function(e, t) {
  return t || x(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
s.prototype.readFloatLE = function(e, t) {
  return t || x(e, 4, this.length), te(this, e, !0, 23, 4);
};
s.prototype.readFloatBE = function(e, t) {
  return t || x(e, 4, this.length), te(this, e, !1, 23, 4);
};
s.prototype.readDoubleLE = function(e, t) {
  return t || x(e, 8, this.length), te(this, e, !0, 52, 8);
};
s.prototype.readDoubleBE = function(e, t) {
  return t || x(e, 8, this.length), te(this, e, !1, 52, 8);
};
function A(i, e, t, r, n, a) {
  if (!R(i)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > n || e < a) throw new RangeError('"value" argument is out of bounds');
  if (t + r > i.length) throw new RangeError("Index out of range");
}
s.prototype.writeUIntLE = function(e, t, r, n) {
  if (e = +e, t = t | 0, r = r | 0, !n) {
    var a = Math.pow(2, 8 * r) - 1;
    A(this, e, t, r, a, 0);
  }
  var o = 1, c = 0;
  for (this[t] = e & 255; ++c < r && (o *= 256); )
    this[t + c] = e / o & 255;
  return t + r;
};
s.prototype.writeUIntBE = function(e, t, r, n) {
  if (e = +e, t = t | 0, r = r | 0, !n) {
    var a = Math.pow(2, 8 * r) - 1;
    A(this, e, t, r, a, 0);
  }
  var o = r - 1, c = 1;
  for (this[t + o] = e & 255; --o >= 0 && (c *= 256); )
    this[t + o] = e / c & 255;
  return t + r;
};
s.prototype.writeUInt8 = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = e & 255, t + 1;
};
function ie(i, e, t, r) {
  e < 0 && (e = 65535 + e + 1);
  for (var n = 0, a = Math.min(i.length - t, 2); n < a; ++n)
    i[t + n] = (e & 255 << 8 * (r ? n : 1 - n)) >>> (r ? n : 1 - n) * 8;
}
s.prototype.writeUInt16LE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : ie(this, e, t, !0), t + 2;
};
s.prototype.writeUInt16BE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : ie(this, e, t, !1), t + 2;
};
function re(i, e, t, r) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var n = 0, a = Math.min(i.length - t, 4); n < a; ++n)
    i[t + n] = e >>> (r ? n : 3 - n) * 8 & 255;
}
s.prototype.writeUInt32LE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255) : re(this, e, t, !0), t + 4;
};
s.prototype.writeUInt32BE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : re(this, e, t, !1), t + 4;
};
s.prototype.writeIntLE = function(e, t, r, n) {
  if (e = +e, t = t | 0, !n) {
    var a = Math.pow(2, 8 * r - 1);
    A(this, e, t, r, a - 1, -a);
  }
  var o = 0, c = 1, d = 0;
  for (this[t] = e & 255; ++o < r && (c *= 256); )
    e < 0 && d === 0 && this[t + o - 1] !== 0 && (d = 1), this[t + o] = (e / c >> 0) - d & 255;
  return t + r;
};
s.prototype.writeIntBE = function(e, t, r, n) {
  if (e = +e, t = t | 0, !n) {
    var a = Math.pow(2, 8 * r - 1);
    A(this, e, t, r, a - 1, -a);
  }
  var o = r - 1, c = 1, d = 0;
  for (this[t + o] = e & 255; --o >= 0 && (c *= 256); )
    e < 0 && d === 0 && this[t + o + 1] !== 0 && (d = 1), this[t + o] = (e / c >> 0) - d & 255;
  return t + r;
};
s.prototype.writeInt8 = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
};
s.prototype.writeInt16LE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8) : ie(this, e, t, !0), t + 2;
};
s.prototype.writeInt16BE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = e & 255) : ie(this, e, t, !1), t + 2;
};
s.prototype.writeInt32LE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : re(this, e, t, !0), t + 4;
};
s.prototype.writeInt32BE = function(e, t, r) {
  return e = +e, t = t | 0, r || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255) : re(this, e, t, !1), t + 4;
};
function Xe(i, e, t, r, n, a) {
  if (t + r > i.length) throw new RangeError("Index out of range");
  if (t < 0) throw new RangeError("Index out of range");
}
function Je(i, e, t, r, n) {
  return n || Xe(i, e, t, 4), Ge(i, e, t, r, 23, 4), t + 4;
}
s.prototype.writeFloatLE = function(e, t, r) {
  return Je(this, e, t, !0, r);
};
s.prototype.writeFloatBE = function(e, t, r) {
  return Je(this, e, t, !1, r);
};
function Qe(i, e, t, r, n) {
  return n || Xe(i, e, t, 8), Ge(i, e, t, r, 52, 8), t + 8;
}
s.prototype.writeDoubleLE = function(e, t, r) {
  return Qe(this, e, t, !0, r);
};
s.prototype.writeDoubleBE = function(e, t, r) {
  return Qe(this, e, t, !1, r);
};
s.prototype.copy = function(e, t, r, n) {
  if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0) return 0;
  if (t < 0)
    throw new RangeError("targetStart out of bounds");
  if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
  if (n < 0) throw new RangeError("sourceEnd out of bounds");
  n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
  var a = n - r, o;
  if (this === e && r < t && t < n)
    for (o = a - 1; o >= 0; --o)
      e[o + t] = this[o + r];
  else if (a < 1e3 || !s.TYPED_ARRAY_SUPPORT)
    for (o = 0; o < a; ++o)
      e[o + t] = this[o + r];
  else
    Uint8Array.prototype.set.call(
      e,
      this.subarray(r, r + a),
      t
    );
  return a;
};
s.prototype.fill = function(e, t, r, n) {
  if (typeof e == "string") {
    if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), e.length === 1) {
      var a = e.charCodeAt(0);
      a < 256 && (e = a);
    }
    if (n !== void 0 && typeof n != "string")
      throw new TypeError("encoding must be a string");
    if (typeof n == "string" && !s.isEncoding(n))
      throw new TypeError("Unknown encoding: " + n);
  } else typeof e == "number" && (e = e & 255);
  if (t < 0 || this.length < t || this.length < r)
    throw new RangeError("Out of range index");
  if (r <= t)
    return this;
  t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
  var o;
  if (typeof e == "number")
    for (o = t; o < r; ++o)
      this[o] = e;
  else {
    var c = R(e) ? e : Q(new s(e, n).toString()), d = c.length;
    for (o = 0; o < r - t; ++o)
      this[o + t] = c[o % d];
  }
  return this;
};
var Yt = /[^+\/0-9A-Za-z-_]/g;
function Zt(i) {
  if (i = Xt(i).replace(Yt, ""), i.length < 2) return "";
  for (; i.length % 4 !== 0; )
    i = i + "=";
  return i;
}
function Xt(i) {
  return i.trim ? i.trim() : i.replace(/^\s+|\s+$/g, "");
}
function Jt(i) {
  return i < 16 ? "0" + i.toString(16) : i.toString(16);
}
function Q(i, e) {
  e = e || 1 / 0;
  for (var t, r = i.length, n = null, a = [], o = 0; o < r; ++o) {
    if (t = i.charCodeAt(o), t > 55295 && t < 57344) {
      if (!n) {
        if (t > 56319) {
          (e -= 3) > -1 && a.push(239, 191, 189);
          continue;
        } else if (o + 1 === r) {
          (e -= 3) > -1 && a.push(239, 191, 189);
          continue;
        }
        n = t;
        continue;
      }
      if (t < 56320) {
        (e -= 3) > -1 && a.push(239, 191, 189), n = t;
        continue;
      }
      t = (n - 55296 << 10 | t - 56320) + 65536;
    } else n && (e -= 3) > -1 && a.push(239, 191, 189);
    if (n = null, t < 128) {
      if ((e -= 1) < 0) break;
      a.push(t);
    } else if (t < 2048) {
      if ((e -= 2) < 0) break;
      a.push(
        t >> 6 | 192,
        t & 63 | 128
      );
    } else if (t < 65536) {
      if ((e -= 3) < 0) break;
      a.push(
        t >> 12 | 224,
        t >> 6 & 63 | 128,
        t & 63 | 128
      );
    } else if (t < 1114112) {
      if ((e -= 4) < 0) break;
      a.push(
        t >> 18 | 240,
        t >> 12 & 63 | 128,
        t >> 6 & 63 | 128,
        t & 63 | 128
      );
    } else
      throw new Error("Invalid code point");
  }
  return a;
}
function Qt(i) {
  for (var e = [], t = 0; t < i.length; ++t)
    e.push(i.charCodeAt(t) & 255);
  return e;
}
function ei(i, e) {
  for (var t, r, n, a = [], o = 0; o < i.length && !((e -= 2) < 0); ++o)
    t = i.charCodeAt(o), r = t >> 8, n = t % 256, a.push(n), a.push(r);
  return a;
}
function et(i) {
  return Ct(Zt(i));
}
function ne(i, e, t, r) {
  for (var n = 0; n < r && !(n + t >= e.length || n >= i.length); ++n)
    e[n + t] = i[n];
  return n;
}
function ti(i) {
  return i !== i;
}
function V(i) {
  return i != null && (!!i._isBuffer || tt(i) || ii(i));
}
function tt(i) {
  return !!i.constructor && typeof i.constructor.isBuffer == "function" && i.constructor.isBuffer(i);
}
function ii(i) {
  return typeof i.readFloatLE == "function" && typeof i.slice == "function" && tt(i.slice(0, 0));
}
const ri = 46, ni = /\\(\\)?/g, ai = RegExp(
  // Match anything that isn't a dot or bracket.
  `[^.[\\]]+|\\[(?:([^"'][^[]*)|(["'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))`,
  "g"
), oi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ci = /^\w*$/, si = function(i) {
  return Object.prototype.toString.call(i);
}, it = function(i) {
  const e = typeof i;
  return e === "symbol" || e === "object" && i && si(i) === "[object Symbol]";
}, di = function(i, e) {
  if (Array.isArray(i))
    return !1;
  const t = typeof i;
  return t === "number" || t === "symbol" || t === "boolean" || !i || it(i) ? !0 : ci.test(i) || !oi.test(i) || e != null && i in Object(e);
}, li = function(i) {
  const e = [];
  return i.charCodeAt(0) === ri && e.push(""), i.replace(ai, function(t, r, n, a) {
    let o = t;
    n ? o = a.replace(ni, "$1") : r && (o = r.trim()), e.push(o);
  }), e;
}, ui = function(i, e) {
  return Array.isArray(i) ? i : di(i, e) ? [i] : li(i);
}, pi = function(i) {
  if (typeof i == "string" || it(i)) return i;
  const e = `${i}`;
  return e == "0" && 1 / i == -INFINITY ? "-0" : e;
}, mi = function(i, e) {
  e = ui(e, i);
  let t = 0;
  const r = e.length;
  for (; i != null && t < r; )
    i = i[pi(e[t++])];
  return t && t === r ? i : void 0;
}, hi = function(i) {
  return typeof i == "object" && i !== null && !Array.isArray(i);
}, rt = function(i) {
  if (i == null)
    return [void 0, void 0];
  if (typeof i != "object")
    return [Error('Invalid option "columns": expect an array or an object')];
  if (Array.isArray(i)) {
    const e = [];
    for (const t of i)
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
    i = e;
  } else {
    const e = [];
    for (const t in i)
      e.push({
        key: t,
        header: i[t]
      });
    i = e;
  }
  return [void 0, i];
};
class M extends Error {
  constructor(e, t, ...r) {
    Array.isArray(t) && (t = t.join(" ")), super(t), Error.captureStackTrace !== void 0 && Error.captureStackTrace(this, M), this.code = e;
    for (const n of r)
      for (const a in n) {
        const o = n[a];
        this[a] = V(o) ? o.toString() : o == null ? o : JSON.parse(JSON.stringify(o));
      }
  }
}
const fi = function(i) {
  return i.replace(/([A-Z])/g, function(e, t) {
    return "_" + t.toLowerCase();
  });
}, nt = function(i) {
  const e = {};
  for (const n in i)
    e[fi(n)] = i[n];
  if (e.bom === void 0 || e.bom === null || e.bom === !1)
    e.bom = !1;
  else if (e.bom !== !0)
    return [
      new M("CSV_OPTION_BOOLEAN_INVALID_TYPE", [
        "option `bom` is optional and must be a boolean value,",
        `got ${JSON.stringify(e.bom)}`
      ])
    ];
  if (e.delimiter === void 0 || e.delimiter === null)
    e.delimiter = ",";
  else if (V(e.delimiter))
    e.delimiter = e.delimiter.toString();
  else if (typeof e.delimiter != "string")
    return [
      new M("CSV_OPTION_DELIMITER_INVALID_TYPE", [
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
  else if (V(e.quote))
    e.quote = e.quote.toString();
  else if (typeof e.quote != "string")
    return [
      new M("CSV_OPTION_QUOTE_INVALID_TYPE", [
        "option `quote` must be a boolean, a buffer or a string,",
        `got ${JSON.stringify(e.quote)}`
      ])
    ];
  if ((e.quoted === void 0 || e.quoted === null) && (e.quoted = !1), e.escape_formulas === void 0 || e.escape_formulas === null)
    e.escape_formulas = !1;
  else if (typeof e.escape_formulas != "boolean")
    return [
      new M("CSV_OPTION_ESCAPE_FORMULAS_INVALID_TYPE", [
        "option `escape_formulas` must be a boolean,",
        `got ${JSON.stringify(e.escape_formulas)}`
      ])
    ];
  if ((e.quoted_empty === void 0 || e.quoted_empty === null) && (e.quoted_empty = void 0), e.quoted_match === void 0 || e.quoted_match === null || e.quoted_match === !1 ? e.quoted_match = null : Array.isArray(e.quoted_match) || (e.quoted_match = [e.quoted_match]), e.quoted_match)
    for (const n of e.quoted_match) {
      const a = typeof n == "string", o = n instanceof RegExp;
      if (!a && !o)
        return [
          Error(
            `Invalid Option: quoted_match must be a string or a regex, got ${JSON.stringify(n)}`
          )
        ];
    }
  if ((e.quoted_string === void 0 || e.quoted_string === null) && (e.quoted_string = !1), (e.eof === void 0 || e.eof === null) && (e.eof = !0), e.escape === void 0 || e.escape === null)
    e.escape = '"';
  else if (V(e.escape))
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
  const [t, r] = rt(e.columns);
  if (t !== void 0) return [t];
  if (e.columns = r, (e.quoted === void 0 || e.quoted === null) && (e.quoted = !1), (e.cast === void 0 || e.cast === null) && (e.cast = {}), (e.cast.bigint === void 0 || e.cast.bigint === null) && (e.cast.bigint = (n) => "" + n), (e.cast.boolean === void 0 || e.cast.boolean === null) && (e.cast.boolean = (n) => n ? "1" : ""), (e.cast.date === void 0 || e.cast.date === null) && (e.cast.date = (n) => "" + n.getTime()), (e.cast.number === void 0 || e.cast.number === null) && (e.cast.number = (n) => "" + n), (e.cast.object === void 0 || e.cast.object === null) && (e.cast.object = (n) => JSON.stringify(n)), (e.cast.string === void 0 || e.cast.string === null) && (e.cast.string = function(n) {
    return n;
  }), e.on_record !== void 0 && typeof e.on_record != "function")
    return [Error('Invalid Option: "on_record" must be a function.')];
  if (e.record_delimiter === void 0 || e.record_delimiter === null)
    e.record_delimiter = `
`;
  else if (V(e.record_delimiter))
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
}, gi = s.from([239, 187, 191]), bi = function(i, e, t) {
  return {
    options: i,
    state: e,
    info: t,
    __transform: function(r, n) {
      if (!Array.isArray(r) && typeof r != "object")
        return Error(
          `Invalid Record: expect an array or an object, got ${JSON.stringify(r)}`
        );
      if (this.info.records === 0) {
        if (Array.isArray(r)) {
          if (this.options.header === !0 && this.options.columns === void 0)
            return Error(
              "Undiscoverable Columns: header option requires column option or object records"
            );
        } else if (this.options.columns === void 0) {
          const [c, d] = rt(Object.keys(r));
          if (c) return;
          this.options.columns = d;
        }
      }
      if (this.info.records === 0) {
        this.bom(n);
        const c = this.headers(n);
        if (c) return c;
      }
      try {
        this.options.on_record && this.options.on_record(r, this.info.records);
      } catch (c) {
        return c;
      }
      let a, o;
      if (this.options.eof) {
        if ([a, o] = this.stringify(r), a) return a;
        if (o === void 0)
          return;
        o = o + this.options.record_delimiter;
      } else {
        if ([a, o] = this.stringify(r), a) return a;
        if (o === void 0)
          return;
        (this.options.header || this.info.records) && (o = this.options.record_delimiter + o);
      }
      this.info.records++, n(o);
    },
    stringify: function(r, n = !1) {
      if (typeof r != "object")
        return [void 0, r];
      const { columns: a } = this.options, o = [];
      if (Array.isArray(r)) {
        a && r.splice(a.length);
        for (let d = 0; d < r.length; d++) {
          const u = r[d], [m, l] = this.__cast(u, {
            index: d,
            column: d,
            records: this.info.records,
            header: n
          });
          if (m) return [m];
          o[d] = [l, u];
        }
      } else
        for (let d = 0; d < a.length; d++) {
          const u = mi(r, a[d].key), [m, l] = this.__cast(u, {
            index: d,
            column: a[d].key,
            records: this.info.records,
            header: n
          });
          if (m) return [m];
          o[d] = [l, u];
        }
      let c = "";
      for (let d = 0; d < o.length; d++) {
        let u, m, [l, k] = o[d];
        if (typeof l == "string")
          u = this.options;
        else if (hi(l)) {
          if (u = l, l = u.value, delete u.value, typeof l != "string" && l !== void 0 && l !== null && m)
            return [
              Error(
                `Invalid Casting Value: returned value must return a string, null or undefined, got ${JSON.stringify(l)}`
              )
            ];
          if (u = { ...this.options, ...u }, [m, u] = nt(u), m !== void 0)
            return [m];
        } else if (l == null)
          u = this.options;
        else
          return [
            Error(
              `Invalid Casting Value: returned value must return a string, an object, null or undefined, got ${JSON.stringify(l)}`
            )
          ];
        const {
          delimiter: b,
          escape: y,
          quote: D,
          quoted: bt,
          quoted_empty: K,
          quoted_string: oe,
          quoted_match: W,
          record_delimiter: yt,
          escape_formulas: vt
        } = u;
        if (l === "" && k === "") {
          let O = W && W.filter((G) => typeof G == "string" ? l.indexOf(G) !== -1 : G.test(l));
          O = O && O.length > 0, (O || K === !0 || oe === !0 && K !== !1) === !0 && (l = D + l + D), c += l;
        } else if (l) {
          if (typeof l != "string")
            return [
              Error(
                `Formatter must return a string, null or undefined, got ${JSON.stringify(l)}`
              )
            ];
          const O = b.length && l.indexOf(b) >= 0, ce = D !== "" && l.indexOf(D) >= 0, G = l.indexOf(y) >= 0 && y !== D, kt = l.indexOf(yt) >= 0, xt = oe && typeof k == "string";
          let Y = W && W.filter((F) => typeof F == "string" ? l.indexOf(F) !== -1 : F.test(l));
          if (Y = Y && Y.length > 0, vt)
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
          const Ee = ce === !0 || O || kt || bt || xt || Y;
          if (Ee === !0 && G === !0) {
            const F = y === "\\" ? new RegExp(y + y, "g") : new RegExp(y, "g");
            l = l.replace(F, y + y);
          }
          if (ce === !0) {
            const F = new RegExp(D, "g");
            l = l.replace(F, y + D);
          }
          Ee === !0 && (l = D + l + D), c += l;
        } else (K === !0 || k === "" && oe === !0 && K !== !1) && (c += D + D);
        d !== o.length - 1 && (c += b);
      }
      return [void 0, c];
    },
    bom: function(r) {
      this.options.bom === !0 && r(gi);
    },
    headers: function(r) {
      if (this.options.header === !1 || this.options.columns === void 0)
        return;
      let n, a = this.options.columns.map((o) => o.header);
      if (this.options.eof ? ([n, a] = this.stringify(a, !0), a += this.options.record_delimiter) : [n, a] = this.stringify(a), n) return n;
      r(a);
    },
    __cast: function(r, n) {
      const a = typeof r;
      try {
        return a === "string" ? [void 0, this.options.cast.string(r, n)] : a === "bigint" ? [void 0, this.options.cast.bigint(r, n)] : a === "number" ? [void 0, this.options.cast.number(r, n)] : a === "boolean" ? [void 0, this.options.cast.boolean(r, n)] : r instanceof Date ? [void 0, this.options.cast.date(r, n)] : a === "object" && r !== null ? [void 0, this.options.cast.object(r, n)] : [void 0, r, r];
      } catch (o) {
        return [o];
      }
    }
  };
}, yi = function(i, e = {}) {
  const t = [], [r, n] = nt(e);
  if (r !== void 0) throw r;
  const c = bi(n, {
    stop: !1
  }, {
    records: 0
  });
  for (const d of i) {
    const u = c.__transform(d, function(m) {
      t.push(m);
    });
    if (u !== void 0) throw u;
  }
  if (t.length === 0) {
    c.bom((u) => {
      t.push(u);
    });
    const d = c.headers((u) => {
      t.push(u);
    });
    if (d !== void 0) throw d;
  }
  return t.join("");
}, vi = 1e3 * 60, ue = "langChanged";
function ki(i, e, t) {
  return Object.entries(pe(e || {})).reduce((r, [n, a]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(pe(a))), i);
}
function xi(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function pe(i) {
  return typeof i == "function" ? i() : i;
}
const wi = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: xi,
  interpolate: ki,
  translationCache: {}
});
let j = wi();
function Si(i) {
  return j = Object.assign(Object.assign({}, j), i);
}
function _i(i) {
  window.dispatchEvent(new CustomEvent(ue, { detail: i }));
}
function Ai(i, e, t = j) {
  _i({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function Di(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(ue, t, e), () => window.removeEventListener(ue, t);
}
async function Ei(i, e = j) {
  const t = await e.loader(i, e);
  e.translationCache = {}, Ai(i, t, e);
}
function me(i, e, t = j) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? pe(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function at(i) {
  return i instanceof St ? i.startNode.isConnected : i instanceof _t ? i.committer.element.isConnected : i.element.isConnected;
}
function Ci(i) {
  for (const [e] of i)
    at(e) || i.delete(e);
}
function Ni(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function Ii(i, e) {
  setInterval(() => Ni(() => Ci(i)), e);
}
const we = /* @__PURE__ */ new Map();
function Ti() {
  Di((i) => {
    for (const [e, t] of we)
      at(e) && ot(e, t, i);
  });
}
Ti();
Ii(we, vi);
function ot(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
Me((i) => (e) => {
  we.set(e, i), ot(e, i);
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
const ct = /* @__PURE__ */ new WeakMap(), Se = (i) => (...e) => {
  const t = i(...e);
  return ct.set(t, !0), t;
}, Re = (i) => typeof i == "function" && ct.has(i);
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
const se = {};
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
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i });
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
const Ri = (i) => i === null || !(typeof i == "object" || typeof i == "function");
class ae {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== se && (!Ri(e) || e !== this.value) && (this.value = e, Re(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Re(this.value); ) {
      const e = this.value;
      this.value = se, e(this);
    }
    this.value !== se && this.committer.commit();
  }
}
class st extends ae {
}
let Li = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Li = !0, !1;
      }
    };
    window.addEventListener("test", i, i), window.removeEventListener("test", i, i);
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
var he = function(i, e) {
  return he = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, he(i, e);
};
function zi(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  he(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var $ = function() {
  return $ = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, $.apply(this, arguments);
};
function p(i, e, t, r) {
  var n = arguments.length, a = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(i, e, t, r);
  else for (var c = i.length - 1; c >= 0; c--) (o = i[c]) && (a = (n < 3 ? o(a) : n > 3 ? o(e, t, a) : o(e, t)) || a);
  return n > 3 && a && Object.defineProperty(e, t, a), a;
}
function Z(i) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && i[e], r = 0;
  if (t) return t.call(i);
  if (i && typeof i.length == "number") return {
    next: function() {
      return i && r >= i.length && (i = void 0), { value: i && i[r++], done: !i };
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
function Pi(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const dt = () => {
}, Fi = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", dt, Fi);
document.removeEventListener("x", dt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class lt extends ee {
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
var Bi = (
  /** @class */
  function() {
    function i(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(i, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(i, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), i.prototype.init = function() {
    }, i.prototype.destroy = function() {
    }, i;
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
var Hi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Oi = {
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
function Vi(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, a = r + t.left, o = n + t.top, c, d;
  if (i.type === "touchstart") {
    var u = i;
    c = u.changedTouches[0].pageX - a, d = u.changedTouches[0].pageY - o;
  } else {
    var m = i;
    c = m.pageX - a, d = m.pageY - o;
  }
  return { x: c, y: d };
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
var ze = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Pe = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], X = [], Mi = (
  /** @class */
  function(i) {
    zi(e, i);
    function e(t) {
      var r = i.call(this, $($({}, e.defaultAdapter), t)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(n) {
        r.activateImpl(n);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Hi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Oi;
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
      var t = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = e.cssClasses, a = n.ROOT, o = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(o), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(n), t.adapter.removeClass(a), t.removeCssVars();
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
      var r = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
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
      var r, n;
      if (t) {
        try {
          for (var a = Z(ze), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var r, n;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Z(Pe), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (d) {
          r = { error: d };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var n = Z(ze), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = Z(Pe), a = n.next(); !a.done; a = n.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          a && !a.done && (r = n.return) && r.call(n);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var a = this.previousActivationEvent, o = a && t !== void 0 && a.type !== t.type;
          if (!o) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var c = t !== void 0 && X.length > 0 && X.some(function(d) {
              return r.adapter.containsEventTarget(d);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (X.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              X = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, c = o.FG_DEACTIVATION, d = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var k = this.getFgTranslationCoordinates(), b = k.startPoint, y = k.endPoint;
        m = b.x + "px, " + b.y + "px", l = y.x + "px, " + y.y + "px";
      }
      this.adapter.updateCssVariable(n, m), this.adapter.updateCssVariable(a, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, a;
      n ? a = Vi(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, a = n.hasDeactivationUXRun, o = n.isActivated, c = a || !o;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
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
      var t = this, r = this.activationState;
      if (r.isActivated) {
        var n = $({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(n), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var r = t.wasActivatedByPointer, n = t.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var o = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, n = t.VAR_LEFT, a = t.VAR_TOP, o = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Bi)
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
class Ui {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const t = (e.getAttribute("class") || "").split(/\s+/);
    for (const r of t)
      this.classes.add(r);
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
const Fe = /* @__PURE__ */ new WeakMap(), _e = Se((i) => (e) => {
  if (!(e instanceof ae) || e instanceof st || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = Fe.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), Fe.set(e, n = /* @__PURE__ */ new Set()));
  const a = r.classList || new Ui(r);
  n.forEach((o) => {
    o in i || (a.remove(o), n.delete(o));
  });
  for (const o in i) {
    const c = i[o];
    c != n.has(o) && (c ? (a.add(o), n.add(o)) : (a.remove(o), n.delete(o)));
  }
  typeof a.commit == "function" && a.commit();
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
const Be = /* @__PURE__ */ new WeakMap(), Gi = Se((i) => (e) => {
  if (!(e instanceof ae) || e instanceof st || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = Be.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), Be.set(e, n = /* @__PURE__ */ new Set())), n.forEach((a) => {
    a in i || (n.delete(a), a.indexOf("-") === -1 ? r[a] = null : r.removeProperty(a));
  });
  for (const a in i)
    n.add(a), a.indexOf("-") === -1 ? r[a] = i[a] : r.setProperty(a, i[a]);
});
class v extends lt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Mi;
  }
  get isActive() {
    return Pi(this.parentElement || this, ":active");
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
    const e = this.activated && (this.primary || !this.accent), t = this.selected && (this.primary || !this.accent), r = {
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${_e(r)}"
          style="${Gi({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
p([
  L(".mdc-ripple-surface")
], v.prototype, "mdcRoot", void 0);
p([
  h({ type: Boolean })
], v.prototype, "primary", void 0);
p([
  h({ type: Boolean })
], v.prototype, "accent", void 0);
p([
  h({ type: Boolean })
], v.prototype, "unbounded", void 0);
p([
  h({ type: Boolean })
], v.prototype, "disabled", void 0);
p([
  h({ type: Boolean })
], v.prototype, "activated", void 0);
p([
  h({ type: Boolean })
], v.prototype, "selected", void 0);
p([
  h({ type: Boolean })
], v.prototype, "internalUseStateLayerCustomProperties", void 0);
p([
  g()
], v.prototype, "hovering", void 0);
p([
  g()
], v.prototype, "bgFocused", void 0);
p([
  g()
], v.prototype, "fgActivation", void 0);
p([
  g()
], v.prototype, "fgDeactivation", void 0);
p([
  g()
], v.prototype, "fgScale", void 0);
p([
  g()
], v.prototype, "fgSize", void 0);
p([
  g()
], v.prototype, "translateStart", void 0);
p([
  g()
], v.prototype, "translateEnd", void 0);
p([
  g()
], v.prototype, "leftPos", void 0);
p([
  g()
], v.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qi = ye`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let fe = class extends v {
};
fe.styles = [qi];
fe = p([
  U("mwc-ripple")
], fe);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ae = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, a) => e.constructor._observers.set(a, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((a, o) => {
          const d = this.constructor._observers.get(o);
          d !== void 0 && d.call(this, this[o], a);
        });
      };
    }
    e.constructor._observers.set(t, i);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ut {
  constructor(e) {
    this.startPress = (t) => {
      e().then((r) => {
        r && r.startPress(t);
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
class S extends ee {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new ut(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : f``, r = this.hasMeta ? this.renderMeta() : f``;
    return f`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
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
    const r = () => {
      window.removeEventListener(e, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, r), this.rippleHandlers.startPress(t);
  }
  fireRequestSelected(e, t) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: t, selected: e } });
    this.dispatchEvent(r);
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
p([
  L("slot")
], S.prototype, "slotElement", void 0);
p([
  Ve("mwc-ripple")
], S.prototype, "ripple", void 0);
p([
  h({ type: String })
], S.prototype, "value", void 0);
p([
  h({ type: String, reflect: !0 })
], S.prototype, "group", void 0);
p([
  h({ type: Number, reflect: !0 })
], S.prototype, "tabindex", void 0);
p([
  h({ type: Boolean, reflect: !0 }),
  Ae(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], S.prototype, "disabled", void 0);
p([
  h({ type: Boolean, reflect: !0 })
], S.prototype, "twoline", void 0);
p([
  h({ type: Boolean, reflect: !0 })
], S.prototype, "activated", void 0);
p([
  h({ type: String, reflect: !0 })
], S.prototype, "graphic", void 0);
p([
  h({ type: Boolean })
], S.prototype, "multipleGraphics", void 0);
p([
  h({ type: Boolean })
], S.prototype, "hasMeta", void 0);
p([
  h({ type: Boolean, reflect: !0 }),
  Ae(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], S.prototype, "noninteractive", void 0);
p([
  h({ type: Boolean, reflect: !0 }),
  Ae(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], S.prototype, "selected", void 0);
p([
  g()
], S.prototype, "shouldRenderRipple", void 0);
p([
  g()
], S.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const $i = ye`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ge = class extends S {
};
ge.styles = [$i];
ge = p([
  U("mwc-list-item")
], ge);
var ji = Object.defineProperty, Ki = Object.getOwnPropertyDescriptor, I = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Ki(e, t) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && ji(e, t, n), n;
};
let E = class extends Dt {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(i) {
    const e = this.multipliers.indexOf(i);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
  }
  selectMultiplier(i) {
    this.multiplier = this.multipliers[i.detail.index];
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(me("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (i) => f`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? me("textfield.noMultiplier") : i}</mwc-list-item
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
I([
  h({ type: Boolean })
], E.prototype, "nullable", 2);
I([
  h({ type: Array })
], E.prototype, "multipliers", 2);
I([
  h({ type: String })
], E.prototype, "multiplier", 1);
I([
  h({ type: String })
], E.prototype, "unit", 2);
I([
  g()
], E.prototype, "null", 1);
I([
  h({ type: String })
], E.prototype, "maybeValue", 1);
I([
  h({ type: String })
], E.prototype, "defaultValue", 2);
I([
  h({ type: Array })
], E.prototype, "reservedValues", 2);
I([
  L("mwc-switch")
], E.prototype, "nullSwitch", 2);
I([
  L("mwc-menu")
], E.prototype, "multiplierMenu", 2);
I([
  L("mwc-icon-button")
], E.prototype, "multiplierButton", 2);
E = I([
  U("wizard-textfield")
], E);
var Wi = Object.defineProperty, Yi = Object.getOwnPropertyDescriptor, H = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Yi(e, t) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && Wi(e, t, n), n;
};
let P = class extends At {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.value = i);
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
H([
  h({ type: Boolean })
], P.prototype, "nullable", 2);
H([
  g()
], P.prototype, "null", 1);
H([
  h({ type: String })
], P.prototype, "maybeValue", 1);
H([
  h({ type: String })
], P.prototype, "defaultValue", 2);
H([
  h({ type: Array })
], P.prototype, "reservedValues", 2);
H([
  L("mwc-switch")
], P.prototype, "nullSwitch", 2);
P = H([
  U("wizard-select")
], P);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Zi(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const c = `__${e}`;
    if (t = r.getPropertyDescriptor(e, c), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let a = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(c) {
      a === "" && (a = r.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), n.set.call(this, c);
    }
  };
  return n.get && (o.get = function() {
    return n.get.call(this);
  }), o;
}
function De(i, e, t) {
  if (e !== void 0)
    return Zi(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class pt extends lt {
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
pt.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const de = /* @__PURE__ */ new WeakMap(), q = Se((i) => (e) => {
  const t = de.get(e);
  if (i === void 0 && e instanceof ae) {
    if (t !== void 0 || !de.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  de.set(e, i);
});
class w extends pt {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new ut(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || r !== void 0 || n !== void 0) {
      const a = this.calculateAnimationStateName(!!r, !!t, !!n), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${o}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, r) {
    return r ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
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
    }, r = this.indeterminate ? "mixed" : void 0;
    return f`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${_e(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${q(this.name)}"
              aria-checked="${q(r)}"
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
p([
  L(".mdc-checkbox")
], w.prototype, "mdcRoot", void 0);
p([
  L("input")
], w.prototype, "formElement", void 0);
p([
  h({ type: Boolean, reflect: !0 })
], w.prototype, "checked", void 0);
p([
  h({ type: Boolean })
], w.prototype, "indeterminate", void 0);
p([
  h({ type: Boolean, reflect: !0 })
], w.prototype, "disabled", void 0);
p([
  h({ type: String, reflect: !0 })
], w.prototype, "name", void 0);
p([
  h({ type: String })
], w.prototype, "value", void 0);
p([
  De,
  h({ type: String, attribute: "aria-label" })
], w.prototype, "ariaLabel", void 0);
p([
  De,
  h({ type: String, attribute: "aria-labelledby" })
], w.prototype, "ariaLabelledBy", void 0);
p([
  De,
  h({ type: String, attribute: "aria-describedby" })
], w.prototype, "ariaDescribedBy", void 0);
p([
  h({ type: Boolean })
], w.prototype, "reducedTouchTarget", void 0);
p([
  g()
], w.prototype, "animationClass", void 0);
p([
  g()
], w.prototype, "shouldRenderRipple", void 0);
p([
  g()
], w.prototype, "focused", void 0);
p([
  g()
], w.prototype, "useStateLayerCustomProperties", void 0);
p([
  Ve("mwc-ripple")
], w.prototype, "ripple", void 0);
p([
  wt({ passive: !0 })
], w.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Xi = ye`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let be = class extends w {
};
be.styles = [Xi];
be = p([
  U("mwc-checkbox")
], be);
var Ji = Object.defineProperty, Qi = Object.getOwnPropertyDescriptor, C = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Qi(e, t) : e, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (n = (r ? o(e, t, n) : o(n)) || n);
  return r && n && Ji(e, t, n), n;
};
let _ = class extends ee {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(i) {
    i === null ? this.null = !0 : (this.null = !1, this.checked = i === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(i) {
    !this.nullable || i === this.isNull || (this.isNull = i, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(i) {
    this.checkbox ? this.checkbox.checked = i : this.initChecked = i;
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
C([
  h({ type: String })
], _.prototype, "label", 2);
C([
  h({ type: String })
], _.prototype, "helper", 2);
C([
  h({ type: Boolean })
], _.prototype, "nullable", 2);
C([
  h({ type: Boolean })
], _.prototype, "defaultChecked", 2);
C([
  h({ type: String })
], _.prototype, "maybeValue", 1);
C([
  h({ type: Boolean })
], _.prototype, "disabled", 2);
C([
  g()
], _.prototype, "null", 1);
C([
  g()
], _.prototype, "checked", 1);
C([
  g()
], _.prototype, "deactivateCheckbox", 2);
C([
  g()
], _.prototype, "formfieldLabel", 1);
C([
  L("mwc-switch")
], _.prototype, "nullSwitch", 2);
C([
  L("mwc-checkbox")
], _.prototype, "checkbox", 2);
_ = C([
  U("wizard-checkbox")
], _);
const er = [
  "TransformerWinding",
  "ConductingEquipment"
], tr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...er
], ir = ["Substation", "VoltageLevel", "Bay"], rr = ["Process", "Line"], nr = ["EqSubFunction", "EqFunction"], ar = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...tr,
  ...ir,
  ...rr,
  ...nr
], or = ["ConnectivityNode", ...ar], cr = ["GOOSESecurity", "SMVSecurity"], sr = ["SubNetwork", ...cr, ...or], dr = ["BDA", "DA"], lr = ["SampledValueControl", "GSEControl"], ur = ["LogControl", "ReportControl"], pr = [...lr, ...ur], mr = ["GSE", "SMV"], hr = [
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
  ...pr,
  ...mr,
  ...dr
], fr = ["LN0", "LN"], gr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], br = ["Subject", "IssuerName"], yr = ["MinTime", "MaxTime"], vr = ["LNodeType", "DOType", "DAType", "EnumType"], kr = [
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
], xr = ["DynDataSet", "ConfDataSet"], wr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...xr
], Sr = ["ConfLogControl", "ConfSigRef"], _r = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Ar = ["SCL", ...sr, ...hr, ...vr], Dr = [
  ...Ar,
  ...gr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...br,
  ...yr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...fr,
  ...kr,
  "DynAssociation",
  "SettingGroups",
  ...wr,
  ...Sr,
  ..._r,
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
new Set(Dr);
Me((i) => (e) => {
  Object.keys(i).length ? e.setValue(i) : e.setValue("");
});
function Er(i, e) {
  return typeof i == "string" && typeof e == "string" ? i.localeCompare(e) : typeof i == "object" && typeof e == "string" ? (i.getAttribute("name") ?? "").localeCompare(e) : typeof i == "string" && typeof e == "object" ? i.localeCompare(e.getAttribute("name")) : typeof i == "object" && typeof e == "object" ? (i.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
const Cr = 99;
Array(Cr).fill(1).map((i, e) => `${e + 1}`);
const He = 3;
function Nr(i) {
  let e = i;
  return e.length > He && e.lastIndexOf(".") == e.length - (He + 1) && (e = e.substring(0, e.lastIndexOf("."))), e;
}
const Ir = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Beschreibung",
    ord: "Rang",
    value: "Wert",
    EnumVal: "Enum Wert",
    EnumType: "Enum Typ",
    DA: "Datenattribut",
    DO: "Datenobjekt",
    DAType: "Datenattribut Typ",
    DOType: "Datenobjekt Typ",
    CDC: " Datenklasse nach 7-3",
    Report: "Report",
    LN: "Logischer Knoten",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Funktionale Einschränkung",
    LNodeType: "Logischer Knoten Type",
    lnClass: "Klasse logischer Knoten",
    accessControl: "Zugriffskontrolle",
    transient: "Datenpunkt transient",
    Val: "Standardwert",
    dchg: "Detenänderung ist Auslöser",
    qchg: "Qualitätsanderung ist Auslöser",
    dupd: "Datenupdate ist Auslöser",
    period: "Periodisch übertragen",
    gi: "Manuelle Abfrage",
    fixedOffs: "Fester Offset",
    securityEnable: "Aktive Sicherungsmaßnahmen",
    DataSet: "Datensatz",
    Communication: "Kommunikation",
    TrgOps: "Triggerbedingungen",
    OptFields: "Optionale felder",
    multicast: "SMV nach IEC 61850 9-2",
    smpMod: "Abtast-Art",
    smpRate: "Abtastrate",
    nofASDU: "Abtastpunkte pro Datenpacket",
    seqNum: "Sequenznummer mitschicken",
    timeStamp: "Zeitstempel mitschicken",
    dataSet: "Datensatz-Reference mitschicken",
    reasonCode: "Was hat den Report getriggert?",
    dataRef: "Beschreibung der Datensatzes",
    entryID: "Entry ID mitschicken",
    configRef: "Konfigurations-Revision mitschicken",
    bufOvfl: "Überlauf des internen Speichers signalisieren",
    indexed: "Mehrere Instanzen möglich",
    buffered: "Gepufferter Report",
    maxReport: "Anzahl Instanzen",
    bufTime: "Min. Intervall zwischen zwei Reports",
    intgPd: "Intervall zwischen zwei periodischen Reports",
    SmvOpts: "Optionale Informationen",
    refreshTime: "Zeitstempel des Abtastwertes zu Telegram hinzufügen",
    sampleRate: "Abtastrate zu Telegram hinzufügen",
    security: "Potentiel in Zukunft für z.B. digitale Signature",
    synchSourceId: "Identität der Zeitquelle zu Telegram hinzufügen",
    SampledValueControl: "Sampled Value Kontrollblock",
    iedName: "Referenziertes IED",
    ldInst: "Referenziertes logisches Gerät",
    prefix: "Präfix des logischen Knotens",
    lnInst: "Instanz des logischen Knotens",
    virtual: "Virtuell",
    phase: "Phase"
  },
  settings: {
    title: "Einstellungen",
    language: "Sprache",
    languages: { de: "Deutsch", en: "Englisch (English)" },
    dark: "Dunkles Design",
    mode: "Profimodus",
    showieds: "Zeige IEDs im Substation-Editor",
    selectFileButton: "Datei auswählen",
    loadNsdTranslations: "NSDoc-Dateien hochladen",
    invalidFileNoIdFound: "Ungültiges NSDoc ({{ filename }}); kein 'id'-Attribut in der Datei gefunden",
    invalidNsdocVersion: "Die Version {{ id }} NSD ({{ nsdVersion }}) passt nicht zu der geladenen NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "Neues projekt",
    title: "Menü",
    viewLog: "Protokoll anzeigen",
    viewDiag: "Daignose anzeigen"
  },
  wizard: {
    title: {
      select: "{{tagName}} auswählen",
      edit: "{{tagName}} bearbeiten",
      add: "{{tagName}} hinzufügen"
    }
  },
  openSCD: {
    loading: "Lade Projekt {{ name }}",
    loaded: "{{ name }} geladen",
    readError: "{{ name }} Lesefehler",
    readAbort: "{{ name }} Leseabbruch"
  },
  zeroline: {
    iedsloading: "IEDs werden geladen...",
    showieds: "IEDs im Substation-Editor anzeigen/ausblenden",
    showfunctions: "Funktionselemente in der Ansicht filtern",
    commmap: "Kommunikationszuordnung",
    reportcontrol: "Reports anzeigen",
    gsecontrol: "GOOSEs anzeigen",
    smvcontrol: "Sampled Values anzeigen"
  },
  editing: {
    node: "Benutzerdefiniertes Objekt",
    created: "{{ name }} hinzugefügt",
    deleted: "{{ name }} entfernt",
    moved: "{{ name }} verschoben",
    updated: "{{ name }} bearbeitet",
    import: "{{name}} importiert",
    complex: "Mehrere Elemente bearbeitet",
    error: {
      create: "Konnte {{ name }} nicht hinzufügen",
      update: "Konnte {{ name }} nicht bearbeiten",
      move: "Konnte {{ name }} nicht verschieben",
      duplicate: "Konnte {{name}} nicht kopieren",
      nameClash: '{{ parent }} enthält bereits ein {{ child }} Kind namens "{{ name }}"',
      idClash: 'Das Projekt enthält bereits die ID "{{ id }}"'
    }
  },
  validator: {
    schema: {
      title: "Projekt validieren",
      valid: "{{ name }} erfolgreich validiert gegen XML-Schema",
      invalid: "{{ name }} Schema-Validierung fehlgeschlagen",
      fatal: "Fataler Validierungsfehler",
      loadError: "Konnte XML-Schema {{ name }} nicht laden"
    },
    templates: {
      title: "Templates validieren",
      mandatoryChild: "{{ tag }} {{ id }} fehlt ein obligatorisches {{ childTag }}-Kind {{ childId }}",
      missingAttribute: "Das Attribut {{attr}} ist verpflichted und fehlt in {{element}}",
      incorrectAttribute: "Das Attribut {{attr}} in Element {{element}} folgt nicht der Definition.",
      missingReference: '{{tag}} "{{name}}" hat eine ungültige Referenz - es fehlt der definierte Typ'
    }
  },
  textfield: {
    required: "Pflichtfeld",
    nonempty: "Darf nicht leer sein",
    noMultiplier: "keiner",
    unique: "Darf sich nicht wiederholen"
  },
  compare: {
    compareButton: "Starte Vergleich",
    attributes: "Attribute von {{ elementName }}",
    children: "Kindelemente von {{ elementName }}",
    filterMutables: "Projektspzifische Unterschiede ausblenden"
  },
  log: {
    name: "Protokoll",
    placeholder: "Hier werden Änderungen, Fehler und andere Meldungen angezeigt.",
    snackbar: {
      show: "Anzeigen",
      placeholder: "Keine Fehler"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Keine History",
    noEntries: "Keine Einträge in der SCL History"
  },
  diag: {
    name: "Daignoseübersicht",
    zeroissues: "Es konnten keine Fehler in dem Projekt gefunden werden.",
    placeholder: "Hier werden Validierungsfehler angezeigt.",
    missingnsd: "DataTypeTemplates können nicht validiert werden. Das Projekt muss die Version 2007B3 oder höher haben."
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor",
    menu: "Menüeintrag",
    requireDoc: "Benötigt Dokument",
    top: "oben",
    middle: "mittig",
    bottom: "unten",
    validator: "Validator",
    add: {
      heading: "Benutzerdefinierte plug-in",
      warning: `Hier können Sie benutzerdefinierte plug-ins hinzufügen.
                OpenSCD übernimmt hierfür keine Gewähr.`,
      name: "Name",
      nameHelper: "Lokaler Name der plug-in (frei wählbar)",
      src: "URL",
      srcHelper: "Die plug-in-URL des Herstellers"
    }
  },
  substation: {
    name: "Schaltanlage",
    missing: "Keine Schaltanlage",
    wizard: {
      nameHelper: "Name der Schaltanlage",
      descHelper: "Beschreibung der Schaltanlage",
      title: {
        add: "Schaltanlage hinzufügen",
        edit: "Schaltanlage bearbeiten"
      }
    },
    action: {
      addvoltagelevel: "Spannungsebene hinzufügen",
      updatesubstation: 'Schaltanlage "{{name}}" bearbeitet'
    },
    clone: {
      redirect: "LNode mitnehmen",
      cloneclose: "Einmal klonen",
      cloneproc: "Mehrfach klonen",
      newname: "Klonname"
    }
  },
  iededitor: {
    iedSelector: "IED auswählen",
    lnFilter: "Filter für logische Knoten",
    missing: "Kein IED vorhanden",
    toggleChildElements: "Kindelemente umschalten",
    settings: "Services für IED or AccessPoint",
    wizard: {
      daTitle: "DA Informationen anzeigen",
      doTitle: "DO Informationen anzeigen",
      nsdocDescription: "NSDoc Beschreibung",
      doiDescription: "Beschreibung des DOI",
      daiDescription: "Beschreibung des DAI",
      ied: "IED",
      accessPoint: "Zugangspunkt",
      lDevice: "Logisches Gerät",
      lnPrefix: "LN Präfix",
      lnDescription: "LN Beschreibung",
      lnInst: "LN Instanz",
      doName: "DO Name",
      doCdc: "DO Common Data Class",
      daName: "DA Name",
      daFc: "DA Functional Constraint",
      daBType: "DA Typ",
      daValue: "DA Wert"
    }
  },
  ied: {
    wizard: {
      nameHelper: "Name des IED",
      descHelper: "Beschreibung des IED",
      title: {
        edit: "IED bearbeiten",
        delete: "IED mit Abhängigkeiten entfernen",
        references: "Gelöschte Abhängikeiten"
      }
    },
    action: {
      updateied: 'IED "{{name}}" bearbeitet',
      deleteied: 'IED "{{name}}" entfernt'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Name des Logisches Gerät",
      noNameSupportHelper: "IED unterstützt keine funktionale Benennung",
      descHelper: "Beschreibung des Logisches Gerät",
      title: {
        edit: "Logisches Gerät bearbeiten"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "LN bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      prefixHelper: "Prefix des Logical Nodes",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "LN0 bearbeiten"
      },
      descHelper: "Logical Node Beschreibung",
      lnTypeHelper: "Logical Node Typ",
      lnClassHelper: "Logical Node Klasse",
      instHelper: "Instanz"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "`Name des Leistungstransformators",
      descHelper: "Beschreibung des Leistungstransformators",
      typeHelper: "Type des Leistungstransformators",
      title: {
        add: "Leistungstransformator hinzufügen",
        edit: "Leistungstransformator bearbeiten"
      }
    }
  },
  voltagelevel: {
    name: "Spannungsebene",
    wizard: {
      nameHelper: "Name der Spannungsebene",
      descHelper: "Beschreibung der Spannungsebene",
      nomFreqHelper: "Nennfrequenz",
      numPhaseHelper: "Phasenanzahl",
      voltageHelper: "Nennspannung",
      title: {
        add: "Spannungsebene hinzufügen",
        edit: "Spannungsebene bearbeiten"
      }
    },
    action: {
      updateVoltagelevel: 'Spannungsebene "{{name}}" bearbeitet'
    }
  },
  line: {
    name: "Linie",
    wizard: {
      nameHelper: "Liniename",
      descHelper: "Beschreibung des Linies",
      typeHelper: "Type des Linies",
      title: {
        add: "Linie hinzufügen",
        edit: "Linie bearbeiten"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Processname",
      descHelper: "Beschreibung des Processes",
      typeHelper: "Type des Processes",
      title: {
        add: "Process hinzufügen",
        edit: "Process bearbeiten"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Feld",
    wizard: {
      nameHelper: "Feldname",
      descHelper: "Beschreibung des Feldes",
      title: {
        add: "Feld hinzufügen",
        edit: "Feld bearbeiten"
      }
    },
    action: {
      updateBay: 'Feld "{{name}}" bearbeitet'
    }
  },
  conductingequipment: {
    name: "Primärelement",
    wizard: {
      nameHelper: "Name des Primärelements",
      descHelper: "Beschreibung des Primärelements",
      typeHelper: "Type des Primärelements",
      title: {
        add: "Primärelement hinzufügen",
        edit: "Primärelement bearbeiten"
      }
    },
    unknownType: "Unbekannter Typ"
  },
  connectivitynode: {
    name: "Verbindungsknoten",
    wizard: {
      nameHelper: "Verbindungsknoten Name",
      pathNameHelper: "Verbindungsknoten Beschreibung",
      title: {
        add: "Verbindungsknoten hinzufügen",
        edit: "Verbindungsknoten bearbeiten"
      }
    }
  },
  terminal: {
    name: "Anschluss",
    wizard: {
      nameHelper: "Anschluss Name",
      connectivityNodeHelper: "Anschluss Verbindungsknoten",
      cNodeNameHelper: "Anschluss Verbindungsknoten Name",
      title: {
        add: "Anschlussknoten hinzufügen",
        edit: "Anschlussknoten bearbeiten"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates fehlen",
    add: "DataTypeTemplates hinzufügen"
  },
  subscription: {
    none: "Keine Verbindung vorhanden",
    connect: "Daten-Attribut verbunden",
    disconnect: "Daten-Attribute Verbindung gelöst",
    subscriber: {
      subscribed: "Verbunden",
      notSubscribed: "Nicht Verbunden",
      availableToSubscribe: "Kann verbunden werden",
      partiallySubscribed: "Teilweise verbunden",
      noControlBlockSelected: "Keine Kontrollblock ausgewählt",
      noIedSelected: "Keine IED ausgewählt"
    },
    goose: {
      publisher: {
        title: "GOOSE-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit GOOSE Meldungen",
        publisherTitle: "GOOSE Nachricht verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "SampledValue-Publizierer",
        subscriberTitle: "Verbunden mit {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Verbunden mit Sampled Values",
        publisherTitle: "Sampled Value  verbunden mit {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logische Knoten für ausgewählten Daten-Attribute",
        noSelection: "Kein Daten-Attribute ausgewählt",
        noSubscribedLNs: "Kein Verbinding zu dem ausgewählten Daten-Attribute",
        noAvailableLNs: "Keine Verbindung zu dem ausgewählten Daten-Attribute möglich"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Für Ausgewählte Daten-Attribut Verfügbare Verbindung",
        noSelection: "Kein Daten-Attribut ausgewählt",
        noSubscribedExtRefs: "Keine bestehenden Verbindungen",
        noAvailableExtRefs: "Keine verfügbaren Eingänge vorhanden"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sample Value Meldungen",
        noControlBlockFound: "Keine Sampled Values gefunden"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE-Meldungen",
        noControlBlockFound: "Keine GOOSEs gefunden"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Kindelemente umschalten",
    view: {
      valuesView: "Werte",
      networkView: "Netzwerk"
    },
    mappedCmv: 'Gemäß dem IEC 61850-80-1 Standard ist eine "{{ cdc }}" zuordnung über CMV erforderlich',
    values: {
      missing: "Kein IED mit 104 Adressen",
      removeAddresses: "Alle Adressen entfernen",
      removedAddresses: '{{ nrOfAddresses }} Addressen von DOI "{{ name }}" entfernt',
      addedAddress: '104-Addressen zu DO "{{ name }}" in LN(0) "{{ lnName }}" hinzugefügt',
      signalNames: {
        tiNumber1: "Einzelwertinformation",
        tiNumber3: "Zweipunktinformation",
        tiNumber5: "Stufenpositionsinformation",
        tiNumber7: "Bit string von 32 Bit",
        tiNumber9: "Gemessener Wert, normalisierter Wert",
        tiNumber11: "Gemessener Wert, skalierte Wert",
        tiNumber13: "Gemessener Wert, Kurz-Gleitkommazahl",
        tiNumber15: "Integrierte Summen",
        tiNumber20: "Verpackte Einzelwertinformation mit Statusänderungserkennung",
        tiNumber21: "Gemessener Wert, normalisierter Wert ohne Qualitätsbeschreibung",
        tiNumber30: "Einzelwertinformation mit Zeitstempel CP56Time2a",
        tiNumber31: "Zweipunktinformation mit Zeitstempel CP56Time2a",
        tiNumber32: "Stufenpositionsinformation mit Zeitstempel CP56Time2a",
        tiNumber33: "Bit string von 32 Bit mit Zeitstempel CP56Time2a",
        tiNumber34: "Gemessener Wert, normalisierter Wert mit Zeitstempel CP56Time2a",
        tiNumber35: "Gemessener Wert, skalierte Wert mit Zeitstempel CP56Time2a",
        tiNumber36: "Gemessener Wert, Kurz-Gleitkommazahl mit Zeitstempel CP56Time2a",
        tiNumber37: "Integrierte Summen mit Zeitstempel CP56Time2a",
        tiNumber38: "Ereignis von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber39: "Verpackte Startereignisse von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber40: "Verpackte Ausgangsschaltkreisinformationen von Schutzeinrichtung mit Zeitstempel CP56Time2a",
        tiNumber45: "Einzelbefehl",
        tiNumber46: "Doppelbefehl",
        tiNumber47: "Regelungsschritt-Befehl",
        tiNumber48: "Sollwertbefehl, normalisierter Wert",
        tiNumber49: "Sollwertbefehl, skalierte Wert",
        tiNumber50: "Sollwertbefehl, Kurz-Gleitkommazahl",
        tiNumber51: "Bit string von 32 Bit Befehl",
        tiNumber58: "Einzelbefehl mit Zeitstempel CP56Time2a",
        tiNumber59: "Doppelbefehl mit Zeitstempel CP56Time2a",
        tiNumber60: "Regelungsschritt-Befehl mit Zeitstempel CP56Time2a",
        tiNumber61: "Gemessener Wert, normalisierter Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber62: "Gemessener Wert, skalierte Wert Befehl mit Zeitstempel CP56Time2a",
        tiNumber63: "Gemessener Wert, Kurz-Gleitkommazahl Befehl mit Zeitstempel CP56Time2a",
        tiNumber64: "Bit string von 32 Bit Befehl mit Zeitstempel CP56Time2a",
        default: "Keine Beschreibung verfügbar"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "ConnectedAP bearbeiten"
          },
          redundancySwitchLabel: "Redundanz",
          redundancyGroupTitle: "Redundanzgruppen",
          noRedundancyGroupsAvailable: "Keine Redundanzgruppen verfügbar",
          addRedundancyGroup: "Redundanzruppe hinzufügen",
          stationTypeHelper: "Anlagentyp",
          ipHelper: "IP Adresse",
          ipSubnetHelper: "Subnetzmaske",
          wFactorHelper: "???",
          kFactorHelper: "???",
          timeout0Helper: "Time-out Verbindungsaufbau in Sekunden",
          timeout1Helper: "???",
          timeout2Helper: "???",
          timeout3Helper: "???"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Redundanzgruppe bearbeiten",
            add: "Redundanzgruppe hinzufügen"
          },
          redundancyGroupNumberLabel: "Redundanzgruppennummer",
          addedLRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedRedundancyGroup: '??? {{ rGNumber }} ? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          logicLinkGroupTitle: "???",
          noLogicLinksAvailable: "???",
          addLogicLink: "???"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "???",
            add: "???"
          },
          logicLinkNumberLabel: "???",
          addedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          editedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]',
          removedLogicLink: '??? SubNetwork[name="{{ subNetworkName }}"] > ConnectedAP[apName="{{ apName }}"][iedName="{{ iedName }}"]'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Information",
        addressEdit: "104-Adresse bearbeiten",
        addAddress: "104-Adresse hinzufügen"
      },
      error: {
        ioaConflict: "IOA-Konflikt innerhalb der CASDU-Nummer gefunden",
        addAddressError: 'Invalide Template Struktur, DAI kann nicht hinzugefügt werden (DO: "{{ doType }}", CDC: "{{ cdc }}", Structure: "{{ structure }}")'
      },
      casduHelper: "CASDU Wert",
      ioaHelper: "IOA Wert",
      monitorTiHelper: "TI Wert überwachen",
      monitorInverted: "???",
      monitorCheck: "???",
      controlTiHelper: "???",
      controlInverted: "???",
      controlCheck: "???",
      expectedValueHelper: "???",
      unitMultiplierHelper: "???",
      scaleMultiplierHelper: "???",
      scaleOffsetHelper: "???"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Lade IEDs aus Vorlage",
    selectIedTitle: "IEDs zum Vergleich auswählen",
    resultTitle: "Vergleiche IED mit Vorlage",
    projectIedTitle: "IEDs im Projekt",
    templateIedTitle: "IEDs aus Vorlage",
    selectIedButton: "IED auswählen",
    selectTemplateButton: "Vorlage auswählen",
    noDiff: 'Keine Unterschiede zwischen IED Projekt "{{ projectIedName }}" und IED aus Vorlage "{{ templateIedName }}" gefunden'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "EnumVal hinzufügen",
        edit: "EnumVal bearbeiten"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "EnumType hinzufügen",
        edit: "EnumType bearbeiten"
      }
    },
    action: {
      edit: 'DAType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "DAType hinzufügen",
        edit: "DAType bearbeiten"
      }
    },
    action: {
      edit: 'EnumType ID "{{oldId}}" und deren DA-Referenzen geändert zu {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "BDA hinzufügen",
        edit: "BDA bearbeiten"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Der Wert sollte vom Typ sein {{type}}",
      title: {
        create: 'DAI "{{daiName}}" hinzufügen',
        edit: 'DAI "{{daiName}}" bearbeiten'
      }
    },
    action: {
      createdai: 'DAI "{{daiName}}" hinzugefügt',
      updatedai: 'DAI "{{daiName}}" bearbeitet'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "SDO hinzufügen",
        edit: "SDO bearbeiten"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "DO hinzufügen",
        edit: "DO bearbeiten"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "DOType hinzufügen",
        edit: "DOType bearbeiten"
      },
      enums: "Standard Enumerations"
    },
    action: {
      edit: 'DOType ID "{{oldId}}" und deren DO-Referenzen geändert zu {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "LNodeType hinzufügen",
        edit: "LNodeType bearbeiten",
        select: "Data Objects auswählen"
      }
    },
    action: {
      edit: 'LNodeType ID "{{oldId}}" und deren LN-Referenzen geändert zu {{newId}} '
    },
    autoimport: "Vordefinierte OpenSCD LN Klasse verwenden",
    missinglnclass: "Vordefinierte LN Klasse fehlt"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Auswahl IEDs",
        selectLDs: "Auswahl logische Geräte",
        selectLNs: "Auswahl logische Knoten",
        selectLNodeTypes: "Auswahl logische Knoten Type"
      },
      placeholder: "Bitte laden Sie eine SCL-Datei, die IED-Elemente enthält.",
      uniquewarning: "Logische Knoten Klasse existiert bereits",
      reference: "Referenz auf bestehenden logischen Knoten erstellen",
      instance: "Referenz auf logischen Knoten Typ erstellen"
    },
    log: {
      title: "LNode vom Type {{lnClass}} kann nicht hinzugefügt werden",
      nonuniquelninst: "Keine eindeutige Instanz (lnInst)",
      uniqueln0: "Nur eine Instanz von {{lnClass}} zulässig"
    },
    tooltip: "Referenz zu logischen Knoten erstellen"
  },
  guess: {
    wizard: {
      primary: "Inhalt erraten",
      title: "Auswahl Steuerungsmodel(ctlModel)",
      description: `Schaltgeräten im Feld können oftmals bestimmten Steuerungsmodellen zugeordnet werden. 
 Damit wird die Abschätzung oftmals genauer.`
    }
  },
  merge: {
    title: "Vereinigen",
    defaultTitle: "{{ tag }} {{ source }} mit {{ sink }} vereinigen",
    log: "{{ tag }} {{ source }} mit {{ sink }} vereinigt",
    children: "Kindelemente"
  },
  import: {
    title: "IEDs importieren",
    log: {
      successful: "IED {{name}} geladen",
      parsererror: "Parser Fehler",
      loaderror: "Datei kann nicht geladen werden",
      importerror: "IED Element kann nicht importiert werden",
      missingied: "Kein IED Element in der Datei",
      nouniqueied: "IED Element {{ name }} bereits geladen"
    }
  },
  communication: {
    name: "Netzwerkkonfiguration",
    missing: "Kein Subnetzwerk"
  },
  subnetwork: {
    name: "Subnetzwerk",
    wizard: {
      nameHelper: "Name des Subnetzwerkes",
      descHelper: "Beschreibung des Subnetzwerkes",
      typeHelper: "Netzwerktyp (Bsp. 8-MMS)",
      bitrateHelper: "Übertragungsrate",
      title: {
        add: "Subnetzwerk hinzufügen",
        edit: "Subnetzwerk bearbeiten"
      }
    }
  },
  connectedap: {
    name: "Schnittstelle",
    wizard: {
      addschemainsttype: "XMLSchema-instance type hinzufügen"
    },
    action: {
      addaddress: "Adressfeld bearbeitet ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "GSE bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. GSE kann nicht hinzugefügt werden."
  },
  smv: {
    action: {
      addaddress: "SMV bearbeitet ({{identity}})"
    },
    missingaccp: "AccessPoint is nicht verbunden. SMV kann nicht hinzugefügt werden."
  },
  subscriber: {
    title: "Subscriber Update",
    description: "GOOSE Ziele aktualisieren: ",
    nonewitems: "keine neuen IEDName Elemente notwendig",
    message: "{{updatenumber}} IEDName Element(e) hinzugefügt"
  },
  commmap: {
    title: "Kommunikationszuordnung",
    connectCB: "{{cbType}} verbinden",
    connectToIED: "Verbinden mit {{iedName}}",
    sourceIED: "Quellgerät",
    sinkIED: "Zielgerät"
  },
  updatesubstation: {
    title: "Schaltanlage aktualisieren"
  },
  code: {
    log: "Element im XML Editor angepasst:  {{id}}"
  },
  updatedesc: {
    abb: "Signalbeschreibungen zu ABB IEDs hinzugefügt",
    sel: "Signalbeschreibungen zu SEL IEDs hinzugefügt"
  },
  sld: {
    substationSelector: "Schaltanlage auswählen",
    wizard: {
      xCoordinateHelper: "X-Koordinate im Einphasenersatzschaltbild",
      yCoordinateHelper: "Y-Koordinate im Einphasenersatzschaltbild"
    }
  },
  dataset: {
    fcda: { add: "Daten-Attribute hinzufügen" },
    fcd: { add: "Daten-Objekte hinzufügen" }
  },
  report: {
    wizard: { location: "Ablageort der Reports wählen" },
    rptID: "Report-Kontrolblock Kennung"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Nicht referenzierte Datensätze",
      deleteButton: "Ausgewählten Datensatz entfernen",
      tooltip: "DatenSätze ohne Verweis auf einen zugehörigen GOOSE-, Log-, Report- oder Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Steuerblöcke mit einem fehlenden oder ungültigen Kontrollblock",
      deleteButton: "Ausgewählte Kontrollblöcke entfernen",
      tooltip: "Steuerblöcke ohne Verweis auf ein vorhandenes Datensatz. Das ist kein Fehler und eher üblich for allem für Reports",
      addressDefinitionTooltip: "Für diesen Kontrollblock existiert eine Adressdefinition im Abschnitt Kommunikation",
      alsoRemoveFromCommunication: "Kommunikation SMV/GSE mit entfernen"
    },
    unreferencedDataTypes: {
      title: "Nicht referenzierte Datentypen",
      deleteButton: "Ausgewählte Datentypen entfernen",
      tooltip: "Datentypen, die nicht in einem logischen Knoten oder einem anderen verwendeten Datentyp referenziert werden",
      alsoRemoveSubTypes: "Entfernen Sie auch Untertypen",
      stackExceeded: "Maximale Aufrufe überschritten. Maximal zulässig sind {{maxStackDepth}}. Nicht alle überflüßigen Datentypen sind entfernt und das Project is potentiel beschädigt."
    }
  },
  controlblock: {
    action: {
      edit: '{{type}} "{{name}}" in IED {{iedName}} bearbeitet',
      add: '{{type}} "{{name}}" zu IED {{iedName}} hinzugefügt',
      remove: '{{type}} "{{name}}" and referenzierte Element von IED {{iedName}} entfernt'
    },
    hints: {
      source: "Quell-IED",
      missingServer: "Kein Server vorhanden",
      exist: "{{type}} mit dem Namen {{name}} existiert",
      noMatchingData: "Keine Datenübereinstimmung",
      valid: "Kann kopiert werden"
    },
    label: {
      copy: "Kopie in anderen IEDs ertellen"
    }
  },
  gsecontrol: {
    wizard: { location: "Ablageort der GOOSE wählen" }
  },
  samvpledvaluecontrol: {
    wizard: {
      location: "Ablageort des Select Sampled Value Control Block wählen"
    }
  },
  publisher: {
    selectbutton: "{{type}} auswählen",
    nodataset: "Kein verbundener Datensatz",
    smv: {
      commsetting: "Kommunikationsparameter (SMV)",
      noconnectedap: "Fehlende Verbindung zu einem Netzwerk",
      smvopts: "Optionale Felder"
    }
  },
  exportCommunication: {
    noCommunicationSection: "Die Communication-Sektion ist leer."
  },
  add: "Hinzufügen",
  new: "Neu",
  remove: "Entfernen",
  edit: "Bearbeiten",
  move: "Verschieben",
  create: "Erstellen",
  save: "Speichern",
  saveAs: "Speichern unter",
  open: "Öffnen",
  reset: "Zurücksetzen",
  cancel: "Abbrechen",
  close: "Schließen",
  filter: "Filter",
  filters: "Filters",
  undo: "Rückgängig",
  redo: "Wiederholen",
  duplicate: "Klonen",
  connect: "Verbinden",
  disconnect: "Trennen",
  next: "Weiter"
}, Tr = {
  scl: {
    id: "ID",
    name: "Name",
    desc: "Description",
    ord: "Ordinal",
    value: "Value",
    EnumVal: "Enum Value",
    EnumType: "Enum Type",
    DA: "Data attribute",
    DO: "Data object",
    DAType: "Data Attribute Type",
    DOType: "Data Object Type",
    CDC: "Common data class",
    Report: "Report",
    LN: "Logical Node",
    bType: "Basic type",
    type: "Type",
    sAddr: "Short address",
    valKind: "Value kind",
    valImport: "Import value",
    fc: "Function constraint",
    LNodeType: "Logical Node Type",
    lnClass: "Logical Node Class",
    accessControl: "Access control",
    transient: "Transient data",
    Val: "Default value",
    dchg: "Trigger on data change",
    qchg: "Trigger on quality change",
    dupd: "Trigger on data update",
    period: "Periodical Publishing",
    gi: "General Interrogation",
    fixedOffs: "Fixed offset",
    securityEnable: "Security enabled",
    DataSet: "Dataset",
    Communication: "Communication",
    TrgOps: "Trigger options",
    OptFields: "Optional fields",
    multicast: "SMV acc. to IEC 61850 9-2",
    smpMod: "Sample mode",
    smpRate: "Sample rate",
    nofASDU: "Samples per packet",
    seqNum: "Add Sequence Number",
    timeStamp: "Add Timestamp",
    dataSet: "Add DataSet Reference",
    reasonCode: "Add Trigger Reason",
    dataRef: "Add description of the payload",
    entryID: "Add Entry ID",
    configRef: "Add Configuration Revision",
    bufOvfl: "Add Buffered Overflow information",
    indexed: "Multiple instances possible",
    buffered: "Buffered Report",
    maxReport: "Number of Instances",
    bufTime: "Min. time between two Reports",
    intgPd: "Time between two periodic Reports",
    SmvOpts: "Optional Information",
    refreshTime: "Add timestamp to SMV packet",
    sampleRate: "Add sample rate to SMV packet",
    security: "Potential future use. e.g. digital signature",
    synchSourceId: "Add sync source id to SMV packet",
    SampledValueControl: "Sampled Value Control Block",
    iedName: "Referenced IED",
    ldInst: "Referenced Logical Device",
    prefix: "Prefix of the Logical Node",
    lnInst: "Instance of the Logical Node",
    virtual: "Virtual",
    phase: "Phase"
  },
  settings: {
    title: "Settings",
    language: "Language",
    languages: { de: "German (Deutsch)", en: "English" },
    dark: "Dark theme",
    mode: "Pro mode",
    showieds: "Show IEDs in substation editor",
    selectFileButton: "Select file",
    loadNsdTranslations: "Uploaded NSDoc files",
    invalidFileNoIdFound: "Invalid NSDoc ({{ filename }}); no 'id' attribute found in file",
    invalidNsdocVersion: "The version of {{ id }} NSD ({{ nsdVersion }}) does not correlate with the version of the corresponding NSDoc ({{ filename }}, {{ nsdocVersion }})"
  },
  menu: {
    new: "New project",
    title: "Menu",
    viewLog: "View log",
    viewDiag: "View diagnostics"
  },
  wizard: {
    title: {
      select: "Select {{tagName}}",
      edit: "Edit {{tagName}}",
      add: "Add {{tagName}}"
    }
  },
  openSCD: {
    loading: "Loading project {{ name }}",
    loaded: "{{ name }} loaded",
    readError: "Error reading {{ name }}",
    readAbort: "Aborted reading {{ name }}"
  },
  zeroline: {
    iedsloading: "Loading IEDs...",
    showieds: "Show/hide IEDs in substation editor",
    showfunctions: "Filter function type elements",
    commmap: "Communication mapping",
    reportcontrol: "Show all Reports",
    gsecontrol: "Show all GOOSEs",
    smvcontrol: "Show all Sampled Values"
  },
  editing: {
    node: "User defined object",
    created: "Added {{ name }}",
    deleted: "Removed {{ name }}",
    moved: "Moved {{ name }}",
    updated: "Edited {{ name }}",
    import: "Imported {{name}}",
    complex: "Multiple elements edited",
    error: {
      create: "Could not add {{ name }}",
      update: "Could not edit {{ name }}",
      move: "Could not move {{ name }}",
      duplicate: "Could not copy {{ name }}",
      nameClash: 'Parent {{ parent }} already contains a {{ child }} named "{{ name }}"',
      idClash: 'The project has already an ID "{{ id }}"'
    }
  },
  textfield: {
    required: "Required",
    nonempty: "Must not be empty",
    noMultiplier: "none",
    unique: "Must be unique"
  },
  compare: {
    compareButton: "Compare",
    attributes: "Attributes from {{ elementName }}",
    children: "Child elements from {{ elementName }}",
    filterMutables: "Filter project specific differences"
  },
  log: {
    name: "Log",
    placeholder: "Errors, warnings and other notifications will show up here.",
    snackbar: {
      show: "Show",
      placeholder: "No errors"
    }
  },
  history: {
    name: "SCL History",
    placeholder: "Edits will show up here",
    noEntries: "No SCL history entries"
  },
  diag: {
    name: "Diagnostics",
    zeroissues: "No errors found in the project",
    placeholder: "Issues found during validation will show up here",
    missingnsd: "Cannot validate DataTypeTemplates. The version of the project must be higher than or equal to 2007B3"
  },
  plugins: {
    heading: "Plug-ins",
    editor: "Editor tab",
    menu: "Menu entry",
    requireDoc: "Requires loaded document",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    validator: "Validator",
    add: {
      heading: "Add custom plug-in",
      warning: `Here you may add remote plug-ins directly from a custom URL.
                You do this at your own risk.`,
      name: "Name",
      nameHelper: "Your preferred plug-in name",
      src: "URL",
      srcHelper: "The vendor supplied plug-in URL"
    }
  },
  validator: {
    schema: {
      title: "Validate project",
      valid: "{{ name }} XML schema validation successful",
      invalid: "{{ name }} XML schema validation failed",
      fatal: "Fatal validation error",
      loadError: "Could not load XML schema {{ name }}"
    },
    templates: {
      title: "Validate templates",
      mandatoryChild: "{{ tag }} {{ id }} is missing mandatory child {{ childTag }} {{ childId }}",
      missingAttribute: "The attribute {{attr}} is required but missing in {{element}}",
      incorrectAttribute: "The attribute {{attr}} is incorrect in the element {{element}}.",
      missingReference: "{{tag}}:{{name}} has a invalid reference - type attribute cannot be connected to a template"
    }
  },
  substation: {
    name: "Substation",
    missing: "No substation",
    wizard: {
      nameHelper: "Substation name",
      descHelper: "Substation description",
      title: {
        add: "Add substation",
        edit: "Edit substation"
      }
    },
    action: {
      addvoltagelevel: "Add voltage level",
      updatesubstation: 'Edited substation "{{name}}"'
    },
    clone: {
      redirect: "Redirect LNode's",
      cloneclose: "Clone once",
      cloneproc: "Clone multiple",
      newname: "Clone Name"
    }
  },
  iededitor: {
    iedSelector: "Select IED",
    lnFilter: "Logical Node Filter",
    missing: "No IED",
    toggleChildElements: "Toggle child elements",
    settings: "Show Services the IED/AccessPoint provides",
    wizard: {
      daTitle: "Show DA Info",
      doTitle: "Show DO Info",
      nsdocDescription: "NSDoc description",
      doiDescription: "Data object description",
      daiDescription: "Data attribute description",
      ied: "IED",
      accessPoint: "Access point",
      lDevice: "Logical device",
      lnPrefix: "Logical node prefix",
      lnDescription: "Logical node description",
      lnInst: "Logical node inst",
      doName: "Data object name",
      doCdc: "Data object common data class",
      daName: "Data attribute name",
      daFc: "Data attribute functional constraint",
      daBType: "Data attribute type",
      daValue: "Data attribute value"
    }
  },
  ied: {
    wizard: {
      nameHelper: "IED name",
      descHelper: "IED description",
      title: {
        edit: "Edit IED",
        delete: "Remove IED with references",
        references: "References to be removed"
      }
    },
    action: {
      updateied: 'Edited IED "{{name}}"',
      deleteied: 'Removed IED "{{name}}"'
    }
  },
  ldevice: {
    wizard: {
      nameHelper: "Logical device name",
      noNameSupportHelper: "IED doesn't support Functional Naming",
      descHelper: "Logical device description",
      title: {
        edit: "Edit logical device"
      }
    }
  },
  ln: {
    wizard: {
      title: {
        edit: "Edit LN"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      prefixHelper: "Prefix of the logical node",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  ln0: {
    wizard: {
      title: {
        edit: "Edit LN0"
      },
      descHelper: "Logical node description",
      lnTypeHelper: "Logical node type",
      lnClassHelper: "Logical node class",
      instHelper: "Instance"
    }
  },
  powertransformer: {
    wizard: {
      nameHelper: "Power transformer name",
      descHelper: "Power transformer description",
      typeHelper: "Power transformer type",
      title: {
        add: "Add power transformer",
        edit: "Edit power transformer"
      }
    }
  },
  voltagelevel: {
    name: "Voltage level",
    wizard: {
      nameHelper: "Voltage level name",
      descHelper: "Voltage level description",
      nomFreqHelper: "Nominal frequency",
      numPhaseHelper: "Number of phases",
      voltageHelper: "Nominal voltage",
      title: {
        add: "Add voltage level",
        edit: "Edit voltage level"
      }
    },
    action: {
      updateVoltagelevel: 'Edited voltagelevel "{{name}}"'
    }
  },
  line: {
    name: "Line",
    wizard: {
      nameHelper: "Line name",
      descHelper: "Line description",
      typeHelper: "Line type",
      title: {
        add: "Add line",
        edit: "Edit line"
      }
    },
    action: {
      updateLine: 'Edited line "{{name}}"'
    }
  },
  process: {
    name: "Process",
    wizard: {
      nameHelper: "Process name",
      descHelper: "Process description",
      typeHelper: "Process type",
      title: {
        add: "Add Process",
        edit: "Edit Process"
      }
    },
    action: {
      updateProcess: 'Edited Process "{{name}}"'
    }
  },
  bay: {
    name: "Bay",
    wizard: {
      nameHelper: "Bay name",
      descHelper: "Bay description",
      title: {
        add: "Add bay",
        edit: "Edit bay"
      }
    },
    action: {
      updateBay: 'Edited bay "{{name}}"'
    }
  },
  conductingequipment: {
    name: "Conducting Equipment",
    wizard: {
      nameHelper: "Conducting equipment name",
      descHelper: "Conducting equipment description",
      typeHelper: "Conducting equipment type",
      title: {
        add: "Add conducting equipment",
        edit: "Edit conducting equipment"
      }
    },
    unknownType: "Unknown type"
  },
  connectivitynode: {
    name: "Connectivity Node",
    wizard: {
      nameHelper: "Connectivity node name",
      pathNameHelper: "Connectivity node pathname",
      title: {
        add: "Add Connectivity node",
        edit: "Edit Connectivity node"
      }
    }
  },
  terminal: {
    name: "Terminal",
    wizard: {
      nameHelper: "Terminal name",
      connectivityNodeHelper: "Terminal connectivity node",
      cNodeNameHelper: "Terminal connectivity node name",
      title: {
        add: "Add Terminal",
        edit: "Edit Terminal"
      }
    }
  },
  templates: {
    name: "Data Type Templates",
    missing: "DataTypeTemplates missing",
    add: "Add DataTypeTemplates"
  },
  subscription: {
    none: "None",
    connect: "Connect data attribute",
    disconnect: "Disconnect data attribute",
    subscriber: {
      subscribed: "Subscribed",
      notSubscribed: "Not Subscribed",
      availableToSubscribe: "Available to subscribe",
      partiallySubscribed: "Partially subscribed",
      noControlBlockSelected: "No control block selected",
      noIedSelected: "No IED selected"
    },
    goose: {
      publisher: {
        title: "GOOSE Publishers",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "GOOSE Subscribers",
        publisherTitle: "GOOSE Messages subscribed to {{selected}}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    smv: {
      publisher: {
        title: "Sampled Value Messages",
        subscriberTitle: "IEDs subscribed to {{ selected }}"
      },
      subscriber: {
        iedListTitle: "Sampled Value Subscribers",
        publisherTitle: "Sampled Value Messages subscribed to {{ selected }}"
      },
      view: {
        publisherView: "Publisher | Subscriber",
        subscriberView: "Subscriber | Publisher"
      }
    },
    binding: {
      extRefList: {
        title: "Logical nodes available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedLNs: "No subscribed logical nodes",
        noAvailableLNs: "No available logical nodes to subscribe"
      }
    },
    laterBinding: {
      extRefList: {
        title: "Inputs available for selected data attribute",
        noSelection: "No data attribute selected",
        noSubscribedExtRefs: "No subscribed inputs",
        noAvailableExtRefs: "No available inputs to subscribe"
      }
    },
    SampledValueControl: {
      controlBlockList: {
        title: "Sampled Value Messages",
        noControlBlockFound: "No Sampled Value Messages found"
      }
    },
    GSEControl: {
      controlBlockList: {
        title: "GOOSE Messages",
        noControlBlockFound: "No GOOSE Messages found"
      }
    }
  },
  protocol104: {
    toggleChildElements: "Toggle child elements",
    view: {
      valuesView: "Values",
      networkView: "Network"
    },
    mappedCmv: 'According to the IEC 61850-80-1 standard, "{{ cdc }}" mapping is required via CMV',
    values: {
      missing: "No IED with 104 Addresses",
      removeAddresses: "Remove all Addresses",
      removedAddresses: 'Removed Addresses from DOI "{{ name }}" ({{ nrOfAddresses }})',
      addedAddress: 'Added 104 Address(es) to DO "{{ name }}" on LN(0) "{{ lnName }}"',
      signalNames: {
        tiNumber1: "Single-point information",
        tiNumber3: "Double-point information",
        tiNumber5: "Step position information",
        tiNumber7: "Bit string of 32 bit",
        tiNumber9: "Measured value, normalized value",
        tiNumber11: "Measured value, scaled value",
        tiNumber13: "Measured value, short floating point number",
        tiNumber15: "Integrated totals",
        tiNumber20: "Packed single point information with status change detection",
        tiNumber21: "Measured value, normalized value without quality descriptor",
        tiNumber30: "Single-point information with time tag CP56Time2a",
        tiNumber31: "Double-point information with time tag CP56Time2a",
        tiNumber32: "Step position information with time tag CP56Time2a",
        tiNumber33: "Bit string of 32 bit with time tag CP56Time2a",
        tiNumber34: "Measured value, normalized value with time tag CP56Time2a",
        tiNumber35: "Measured value, scaled value with time tag CP56Time2a",
        tiNumber36: "Measured value, short floating point number with time tag CP56Time2a",
        tiNumber37: "Integrated totals with time tag CP56Time2a",
        tiNumber38: "Event of protection equipment with time tag CP56Time2a",
        tiNumber39: "Packed start events of protection equipment with time tag CP56Time2a",
        tiNumber40: "Packed output circuit information of protection equipment with time tag CP56Time2a",
        tiNumber45: "Single command",
        tiNumber46: "Double command",
        tiNumber47: "Regulating step command",
        tiNumber48: "Set-point Command, normalized value",
        tiNumber49: "Set-point Command, scaled value",
        tiNumber50: "Set-point Command, short floating point number",
        tiNumber51: "Bit string 32 bit command",
        tiNumber58: "Single command with time tag CP56Time2a",
        tiNumber59: "Double command with time tag CP56Time2a",
        tiNumber60: "Regulating step command with time tag CP56Time2a",
        tiNumber61: "Measured value, normalized value command with time tag CP56Time2a",
        tiNumber62: "Measured value, scaled value command with time tag CP56Time2a",
        tiNumber63: "Measured value, short floating point number command with time tag CP56Time2a",
        tiNumber64: "Bit string of 32 bit command with time tag CP56Time2a",
        default: "No description available"
      }
    },
    network: {
      connectedAp: {
        wizard: {
          title: {
            edit: "Edit ConnectedAP"
          },
          redundancySwitchLabel: "Redundancy",
          redundancyGroupTitle: "Redundancy Groups",
          noRedundancyGroupsAvailable: "No redundancy groups available",
          addRedundancyGroup: "Redundancy Group",
          stationTypeHelper: "Type of station",
          ipHelper: "IP address of the logical link",
          ipSubnetHelper: "Subnetwork mask of the IP address of the logical link",
          wFactorHelper: "W factor of the logical link",
          kFactorHelper: "K factor of the logical link",
          timeout0Helper: "Time-out in seconds of connection establishment",
          timeout1Helper: "Time-out in seconds of sent or test APDUs",
          timeout2Helper: "Time-out in seconds for acknowledges in case of no data messages",
          timeout3Helper: "Time-out in seconds for sending test frames in case of a long idle state"
        }
      },
      redundancyGroup: {
        wizard: {
          title: {
            edit: "Edit Redundancy Group",
            add: "Add Redundancy Group"
          },
          redundancyGroupNumberLabel: "Redundancy Group number",
          addedLRedundancyGroup: 'Added Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedRedundancyGroup: 'Edited Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedRedundancyGroup: 'Removed Redundancy Group {{ rGNumber }} from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          logicLinkGroupTitle: "Logic Links",
          noLogicLinksAvailable: "No Logic Links available",
          addLogicLink: "Logic Link"
        }
      },
      logicLink: {
        wizard: {
          title: {
            edit: "Edit Logic Link",
            add: "Add Logic Link"
          },
          logicLinkNumberLabel: "Logic Link number",
          addedLogicLink: 'Added Logic Link group to SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          editedLogicLink: 'Edited Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")',
          removedLogicLink: 'Removed Logic Link group from SubNetwork (name="{{ subNetworkName }}") and ConnectedAP (AccessPoint Name="{{ apName }}", IED Name="{{ iedName }}")'
        }
      }
    },
    wizard: {
      title: {
        doiInfo: "DOI Info",
        addressEdit: "Edit 104 Address",
        addAddress: "Add 104 Address"
      },
      error: {
        ioaConflict: "IOA conflict found within CASDU number",
        addAddressError: 'Invalid Template Structure, unable to create DAI Element. (DO: "{{ doType }}", CDC: "{{ cdc }}", DAI: "{{ structure }}")'
      },
      casduHelper: "CASDU Value",
      ioaHelper: "IOA Value",
      monitorTiHelper: "Monitor TI Value",
      monitorInverted: "Created Inverted Addresses (Monitor)",
      monitorCheck: "Create Check Addresses (Monitor)",
      controlTiHelper: "Control TI Value",
      controlInverted: "Created Inverted Addresses (Control)",
      controlCheck: "Create Check Addresses (Control)",
      expectedValueHelper: "Expected Value",
      unitMultiplierHelper: "Unit Multiplier",
      scaleMultiplierHelper: "Scale Multiplier",
      scaleOffsetHelper: "Scale Offset"
    }
  },
  "compare-ied": {
    selectProjectTitle: "Select template project to Compare IED with",
    selectIedTitle: "Select IED for comparison",
    resultTitle: "Compared IED with IED from template project",
    projectIedTitle: "IEDs in project",
    templateIedTitle: "IEDs in template project",
    selectIedButton: "Select IED",
    selectTemplateButton: "Select template project",
    noDiff: 'No differences between the project IED "{{ projectIedName }}" and template IED "{{ templateIedName }}"'
  },
  "enum-val": {
    wizard: {
      title: {
        add: "Add EnumVal",
        edit: "Edit EnumVal"
      }
    }
  },
  enum: {
    wizard: {
      title: {
        add: "Add EnumType",
        edit: "Edit EnumType"
      }
    },
    action: {
      edit: 'Change EnumType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  datype: {
    wizard: {
      title: {
        add: "Add DAType",
        edit: "Edit DAType"
      }
    },
    action: {
      edit: 'Change DAType ID "{{oldId}}" and its DA references to {{newId}} '
    }
  },
  bda: {
    wizard: {
      title: {
        add: "Add BDA",
        edit: "Edit BDA"
      }
    }
  },
  da: {
    wizard: {
      title: {
        add: "Add DA",
        edit: "Edit DA"
      }
    }
  },
  dai: {
    wizard: {
      valueHelper: "Value should be of type {{type}}",
      title: {
        create: 'Create DAI "{{daiName}}"',
        edit: 'Edit DAI "{{daiName}}"'
      }
    },
    action: {
      createdai: 'Created DAI "{{daiName}}"',
      updatedai: 'Edited DAI "{{daiName}}"'
    }
  },
  sdo: {
    wizard: {
      title: {
        add: "Add SDO",
        edit: "Edit SDO"
      }
    }
  },
  do: {
    wizard: {
      title: {
        add: "Add DO",
        edit: "Edit DO"
      }
    }
  },
  dotype: {
    wizard: {
      title: {
        add: "Add DOType",
        edit: "Edit DOType"
      },
      enums: "Default enumerations"
    },
    action: {
      edit: 'Change DOType ID "{{oldId}}" and its DO references to {{newId}} '
    }
  },
  lnodetype: {
    wizard: {
      title: {
        add: "Add LNodeType",
        edit: "Edit LNodeType",
        select: "Select Data Objects"
      }
    },
    action: {
      edit: 'Change LNodeType ID "{{oldId}}" and its LN references to {{newId}} '
    },
    autoimport: "Use LN class from OpenSCD template",
    missinglnclass: "Missing pre-defined LN class"
  },
  lnode: {
    wizard: {
      title: {
        selectIEDs: "Select IEDs",
        selectLDs: "Select logical devices",
        selectLNs: "Select logical nodes",
        selectLNodeTypes: "Select logical node types"
      },
      placeholder: "Please load an SCL file that contains IED elements.",
      uniquewarning: "Logical node class already exists",
      reference: "Add reference to existing logical node",
      instance: "Add reference to logical node type"
    },
    log: {
      title: "Cannot add LNode of class {{lnClass}}",
      nonuniquelninst: "Cannot find unique lnInst",
      uniqueln0: "Only one instance of {{lnClass}} allowed"
    },
    tooltip: "Create logical nodes reference"
  },
  guess: {
    wizard: {
      primary: "Guess content",
      title: "Select control model (ctlModel)",
      description: `IEDs often contain more controllable logical nodes than switchgear in the field. 
 You can select the control model(s) used specific for switchgear.`
    }
  },
  merge: {
    title: "Merge",
    defaultTitle: "Merge {{ source }} into {{ sink }} ({{ tag }})",
    log: "Merged {{ tag }} {{ source }} into {{ sink }}",
    children: "Child elements"
  },
  import: {
    title: "Import IEDs",
    log: {
      successful: "IED {{ name }} loaded",
      parsererror: "Parser error",
      loaderror: "Could not load file",
      importerror: "Could not import IED",
      missingied: "No IED element in the file",
      nouniqueied: "IED element {{ name }} already in the file"
    }
  },
  communication: {
    name: "Network Configuration",
    missing: "No subnetwork"
  },
  subnetwork: {
    name: "Subnetwork",
    wizard: {
      nameHelper: "Subnetwork name",
      descHelper: "Subnetwork description",
      typeHelper: "Network type (e.g. 8-MMS)",
      bitrateHelper: "Bit rate",
      title: {
        add: "Add subnetwork",
        edit: "Edit subnetwork"
      }
    }
  },
  connectedap: {
    name: "Connected access point",
    wizard: {
      addschemainsttype: "Add XMLSchema-instance type"
    },
    action: {
      addaddress: "Edit Address ({{iedName}} - {{apName}})"
    }
  },
  gse: {
    action: {
      addaddress: "Edit GSE ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. GSE cannot be created."
  },
  smv: {
    action: {
      addaddress: "Edit SMV ({{identity}})"
    },
    missingaccp: "AccessPoint is not connected. SMV cannot be created."
  },
  subscriber: {
    title: "Subscriber update",
    description: "Subscriber update: ",
    nonewitems: "no new IEDName elements to add",
    message: "{{updatenumber}} IEDName elements added to the project"
  },
  commmap: {
    title: "Communication mapping",
    connectCB: "Connect {{cbType}}",
    connectToIED: "Connect to {{iedName}}",
    sourceIED: "Source IED",
    sinkIED: "Sink IED"
  },
  updatesubstation: {
    title: "Update substation"
  },
  code: {
    log: "Changed element in XML editor: {{id}}"
  },
  updatedesc: {
    abb: "Added signal descriptions to ABB IEDs",
    sel: "Added signal descriptions to SEL IEDs"
  },
  sld: {
    substationSelector: "Select a substation",
    wizard: {
      xCoordinateHelper: "X-Coordinate for Single Line Diagram",
      yCoordinateHelper: "Y-Coordinate for Single Line Diagram"
    }
  },
  dataset: {
    fcda: { add: "Add Data Attributes" },
    fcd: { add: "Add Data Objects" }
  },
  report: {
    wizard: { location: "Select Report Control Location" },
    rptID: "Report control block identifier"
  },
  cleanup: {
    unreferencedDataSets: {
      title: "Unreferenced Datasets",
      deleteButton: "Remove Selected Datasets",
      tooltip: "Datasets without a reference to an associated GOOSE, Log, Report or Sampled Value Control Block"
    },
    unreferencedControls: {
      title: "Control Blocks with a Missing or Invalid Dataset",
      deleteButton: "Remove Selected Control Blocks",
      tooltip: "Control Blocks without a reference to an existing DataSet. Note that this is normal in an ICD file or for an MMS ReportControl with a dynamically allocated DataSet",
      addressDefinitionTooltip: "An address definition exists for this control block in the Communication section",
      alsoRemoveFromCommunication: "Also remove SMV/GSE Address"
    },
    unreferencedDataTypes: {
      title: "Unreferenced Data Types",
      deleteButton: "Remove Selected Data Types",
      tooltip: "Data Types which are not referenced in a Logical Node or other used Data Type",
      alsoRemoveSubTypes: "Also remove subtypes",
      stackExceeded: "Max Stack Length Exceeded. Maximum allowed is {{maxStackDepth}}. Datatype cleaning incomplete and file damage may have occurred."
    }
  },
  controlblock: {
    action: {
      edit: 'Edited {{type}} "{{name}}" in IED {{iedName}}',
      add: 'Added {{type}} "{{name}}" to IED {{iedName}}',
      remove: 'Removed {{type}} "{{name}}" and its referenced elements from IED {{iedName}}'
    },
    hints: {
      source: "Source IED",
      missingServer: "Not A Server",
      exist: "{{type}} with name {{name}} already exist",
      noMatchingData: "No matching data",
      valid: "Can be copied"
    },
    label: { copy: "Copy to other IEDs" }
  },
  gsecontrol: {
    wizard: { location: "Select GOOSE Control Block Location" }
  },
  samvpledvaluecontrol: {
    wizard: { location: "Select Sampled Value Control Block Location" }
  },
  publisher: {
    selectbutton: "Select other {{type}}",
    nodataset: "No DataSet referenced",
    smv: {
      commsetting: "Communication Settings (SMV)",
      noconnectedap: "No connection to SubNetwork",
      smvopts: "Optional Fields"
    }
  },
  exportCommunication: {
    noCommunicationSection: "No export as Communication section empty"
  },
  add: "Add",
  new: "New",
  remove: "Remove",
  edit: "Edit",
  move: "Move",
  create: "Create",
  save: "Save",
  saveAs: "Save as",
  open: "Open",
  reset: "Reset",
  cancel: "Cancel",
  close: "Close",
  filter: "Filter",
  filters: "Filters",
  undo: "Undo",
  redo: "Redo",
  duplicate: "Clone",
  connect: "Connect",
  disconnect: "Disconnect",
  next: "Next"
}, Oe = { en: Tr, de: Ir };
async function Rr(i) {
  return Object.keys(Oe).includes(i) ? Oe[i] : {};
}
Si({ loader: Rr, empty: (i) => i });
const Lr = localStorage.getItem("language") || "en";
Ei(Lr);
var zr = Object.defineProperty, mt = (i, e, t, r) => {
  for (var n = void 0, a = i.length - 1, o; a >= 0; a--)
    (o = i[a]) && (n = o(e, t, n) || n);
  return n && zr(e, t, n), n;
};
class ht extends ee {
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
        const r = e.getAttribute("type") ?? "";
        return this.doc.querySelector(`DAType[id="${r}"]`);
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
      const r = e.getAttribute("lnType");
      let n = this.doc.querySelector(`LNodeType[id="${r}"]`), a = null;
      if (t.forEach((o) => {
        n && (a = this.getDataTypeChildElement(n, o), n = this.getDataTypeTemplateElement(a));
      }), a)
        return a.querySelector("Val")?.textContent?.trim() ?? null;
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
      const r = t.map((a, o) => o === 0 ? `DOI[name="${a}"]` : o === t.length - 1 ? `DAI[name="${a}"]` : `SDI[name="${a}"]`).join(" > ");
      return e.querySelector(r + " Val")?.textContent?.trim() ?? null;
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
    let r = this.getDataAttributeInstanceValue(
      e,
      t
    );
    return r || (r = this.getDataAttributeTemplateValue(e, t)), r ?? "";
  }
  /**
   * Retrieve the list of elements found by the selector or if no selector defined the IED element.
   *
   * @param iedElement       - The IED element that will be used to search below if useOwnerDocument is false.
   * @param selector         - If passed the CSS selector to search for the elements.
   * @param useOwnerDocument - If false will use the IED element to search below, otherwise the full document.
   */
  getElements(e, t, r) {
    let n = [e];
    if (t) {
      const a = e.getAttribute("name") ?? "", o = this.getSelector(t, a);
      r ? n = Array.from(
        e.ownerDocument.querySelectorAll(o)
      ) : n = Array.from(e.querySelectorAll(o));
    }
    return n;
  }
  /**
   * Create a single line of values for the CSV File.
   *
   * @param configuration - The configuration with values to retrieve.
   * @param iedElement    - The IED Element for which to retrieve the values.
   */
  cvsLine(e, t) {
    return e.columns.map((r) => this.getElements(
      t,
      r.selector,
      r.useOwnerDocument ?? !1
    ).map((a) => r.dataAttributePath ? this.getDataAttributeValue(
      a,
      r.dataAttributePath
    ) : this.getValue(a, r.attributeName)).filter((a) => a).join(" / "));
  }
  /**
   * Create the full content of the CSV file, for each IED found a line of values is returned.
   *
   * @param configuration - The configuration of the values to retrieve.
   */
  cvsLines(e) {
    const t = this.ieds;
    return t.length > 0 ? t.sort(Er).map((r) => this.cvsLine(e, r)) : [[me("compas.exportIEDParams.noIEDs")]];
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
    return await Promise.resolve().then(() => Fr).then(
      (e) => e.default
    );
  }
  async run() {
    const e = await this.getConfiguration(), t = yi(this.cvsLines(e), {
      header: !0,
      columns: this.columnHeaders(e)
    }), r = new Blob([t], {
      type: "text/csv"
    }), n = document.createElement("a");
    n.download = Nr(this.docName) + "-ied-params.csv", n.href = URL.createObjectURL(r), n.dataset.downloadurl = ["text/csv", n.download, n.href].join(":"), n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n), setTimeout(function() {
      URL.revokeObjectURL(n.href);
    }, 5e3);
  }
}
mt([
  h()
], ht.prototype, "doc");
mt([
  h()
], ht.prototype, "docName");
const ft = ["This file contains the configuration for exporting IED Information to a CSV File.", 'Each column can be defined below in the section "columns".', 'A Column must at least have a "header" defined.', "", "A selector can be defined to search for a Element, if no selector is defined, the IED Element is used.", "If the useOwnerDocument is set to true, the selector will be used on the whole document, otherwise on the IED Element", "There is a variable 'iedName' being replaced before executing the selector, put this between '{{' an '}}'.", "If a dataAttributePath is defined, the selector should return a LN(0) Element and the path is then used to search for a DAI/DA Element.", "The dataAttributePath should at least contain 2 names, because the minimum is always a DO(I) followed by a DA(I) element.", "", "If a attributeName is defined that attribute will be retrieved from the elements found by the selector.", "Otherwise the text content of the elements is retrieved."], gt = [{ header: "IED Name", attributeName: "name" }, { header: "IP address", selector: 'Communication > SubNetwork > ConnectedAP[iedName="{{ iedName }}"] > Address:first-child > P[type="IP"]', useOwnerDocument: !0 }, { header: "Subnetmask", selector: 'Communication > SubNetwork > ConnectedAP[iedName="{{ iedName }}"] > Address:first-child > P[type="IP-SUBNET"]', useOwnerDocument: !0 }, { header: "IED Description", attributeName: "desc" }, { header: "IL1 Primary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="IL1"][lnClass="TCTR"]', dataAttributePath: ["ARtg", "setMag", "f"] }, { header: "IL1 Network Nominal Current", selector: 'AccessPoint > Server > LDevice > LN[prefix="IL1"][lnClass="TCTR"]', dataAttributePath: ["ARtgNom", "setMag", "f"] }, { header: "IL1 Secondary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="IL1"][lnClass="TCTR"]', dataAttributePath: ["ARtgSec", "setVal"] }, { header: "RES Primary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TCTR"]', dataAttributePath: ["ARtg", "setMag", "f"] }, { header: "RES Network Nominal Current", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TCTR"]', dataAttributePath: ["ARtgNom", "setMag", "f"] }, { header: "RES Secondary rated current", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TCTR"]', dataAttributePath: ["ARtgSec", "setVal"] }, { header: "UL1 Primary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="UL1"][lnClass="TVTR"]', dataAttributePath: ["VRtg", "setMag", "f"] }, { header: "UL1 Secondary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="UL1"][lnClass="TVTR"]', dataAttributePath: ["VRtgSec", "setVal"] }, { header: "UL1 Devision ratio", selector: 'AccessPoint > Server > LDevice > LN[prefix="UL1"][lnClass="TVTR"]', dataAttributePath: ["Rat", "setMag", "f"] }, { header: "RES Primary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TVTR"]', dataAttributePath: ["VRtg", "setMag", "f"] }, { header: "RES Secondary rated voltage", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TVTR"]', dataAttributePath: ["VRtgSec", "setVal"] }, { header: "RES Devision ratio", selector: 'AccessPoint > Server > LDevice > LN[prefix="RES"][lnClass="TVTR"]', dataAttributePath: ["Rat", "setMag", "f"] }, { header: "Vendor", selector: 'AccessPoint > Server > LDevice > LN[lnClass="LPHD"]', dataAttributePath: ["PhyNam", "vendor"] }, { header: "Model", selector: 'AccessPoint > Server > LDevice > LN[lnClass="LPHD"]', dataAttributePath: ["PhyNam", "model"] }], Pr = {
  comments: ft,
  columns: gt
}, Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  columns: gt,
  comments: ft,
  default: Pr
}, Symbol.toStringTag, { value: "Module" }));
export {
  ht as default
};
