import { LitElement as ie, query as F, property as d, state as w, html as l, css as te, customElement as B, queryAsync as xi, eventOptions as or, queryAssignedNodes as _i, unsafeCSS as ki } from "lit-element";
import { NodePart as lr, AttributePart as dr, directive as Ai, nothing as pr, svg as Rt } from "lit-html";
import "@material/mwc-button";
import { TextField as ur } from "@material/mwc-textfield";
import { Select as mr } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-formfield";
import { List as hr } from "@material/mwc-list";
import "@material/mwc-icon";
import "@material/mwc-dialog";
const fr = 1e3 * 60, qt = "langChanged";
function gr(t, e, i) {
  return Object.entries(St(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(St(s))), t);
}
function br(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function St(t) {
  return typeof t == "function" ? t() : t;
}
const yr = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: br,
  interpolate: gr,
  translationCache: {}
});
let vr = yr();
function Sr(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(qt, i, e), () => window.removeEventListener(qt, i);
}
function L(t, e, i = vr) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? St(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function wi(t) {
  return t instanceof lr ? t.startNode.isConnected : t instanceof dr ? t.committer.element.isConnected : t.element.isConnected;
}
function xr(t) {
  for (const [e] of t)
    wi(e) || t.delete(e);
}
function _r(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function kr(t, e) {
  setInterval(() => _r(() => xr(t)), e);
}
const Nt = /* @__PURE__ */ new Map();
function Ar() {
  Sr((t) => {
    for (const [e, i] of Nt)
      wi(e) && Ci(e, i, t);
  });
}
Ar();
kr(Nt, fr);
function Ci(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
const wr = Ai((t) => (e) => {
  Nt.set(e, t), Ci(e, t);
}), N = (t, e, i) => wr(() => L(t, e, i));
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
const Ii = /* @__PURE__ */ new WeakMap(), nt = (t) => (...e) => {
  const i = t(...e);
  return Ii.set(i, !0), i;
}, xt = (t) => typeof t == "function" && Ii.has(t);
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
const zt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Cr = (t, e, i = null, r = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.insertBefore(e, r), e = n;
  }
}, Ei = (t, e, i = null) => {
  for (; e !== i; ) {
    const r = e.nextSibling;
    t.removeChild(e), e = r;
  }
};
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
const Fe = {}, Gt = {};
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
const Ft = `{{lit-${String(Math.random()).slice(2)}}}`, Ir = `<!--${Ft}-->`, Er = "$lit$", $r = (t) => t.index !== -1, Ae = () => document.createComment(""), Dr = (
  // eslint-disable-next-line no-control-regex
  /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
);
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
class jt {
  constructor(e, i, r) {
    this.__parts = [], this.template = e, this.processor = i, this.options = r;
  }
  update(e) {
    let i = 0;
    for (const r of this.__parts)
      r !== void 0 && r.setValue(e[i]), i++;
    for (const r of this.__parts)
      r !== void 0 && r.commit();
  }
  _clone() {
    const e = zt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, c = 0, a, o = n.nextNode();
    for (; s < r.length; ) {
      if (a = r[s], !$r(a)) {
        this.__parts.push(void 0), s++;
        continue;
      }
      for (; c < a.index; )
        c++, o.nodeName === "TEMPLATE" && (i.push(o), n.currentNode = o.content), (o = n.nextNode()) === null && (n.currentNode = i.pop(), o = n.nextNode());
      if (a.type === "node") {
        const p = this.processor.handleTextExpression(this.options);
        p.insertAfterNode(o.previousSibling), this.__parts.push(p);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(o, a.name, a.strings, this.options));
      s++;
    }
    return zt && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
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
const Wt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), Tr = ` ${Ft} `;
class Lr {
  constructor(e, i, r, n) {
    this.strings = e, this.values = i, this.type = r, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let i = "", r = !1;
    for (let n = 0; n < e; n++) {
      const s = this.strings[n], c = s.lastIndexOf("<!--");
      r = (c > -1 || r) && s.indexOf("-->", c + 1) === -1;
      const a = Dr.exec(s);
      a === null ? i += s + (r ? Tr : Ir) : i += s.substr(0, a.index) + a[1] + a[2] + Er + a[3] + Ft;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return Wt !== void 0 && (i = Wt.createHTML(i)), e.innerHTML = i, e;
  }
}
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
const $i = (t) => t === null || !(typeof t == "object" || typeof t == "function"), Rr = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class st {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Fe && (!$i(e) || e !== this.value) && (this.value = e, xt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; xt(this.value); ) {
      const e = this.value;
      this.value = Fe, e(this);
    }
    this.value !== Fe && this.committer.commit();
  }
}
class ct {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(Ae()), this.endNode = e.appendChild(Ae());
  }
  /**
   * Inserts this part after the `ref` node (between `ref` and `ref`'s next
   * sibling). Both `ref` and its next sibling must be static, unchanging nodes
   * such as those that appear in a literal section of a template.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterNode(e) {
    this.startNode = e, this.endNode = e.nextSibling;
  }
  /**
   * Appends this part into a parent part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendIntoPart(e) {
    e.__insert(this.startNode = Ae()), e.__insert(this.endNode = Ae());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = Ae()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; xt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Fe, i(this);
    }
    const e = this.__pendingValue;
    e !== Fe && ($i(e) ? e !== this.value && this.__commitText(e) : e instanceof Lr ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Rr(e) ? this.__commitIterable(e) : e === Gt ? (this.value = Gt, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const i = this.startNode.nextSibling;
    e = e ?? "";
    const r = typeof e == "string" ? e : String(e);
    i === this.endNode.previousSibling && i.nodeType === 3 ? i.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
  }
  __commitTemplateResult(e) {
    const i = this.options.templateFactory(e);
    if (this.value instanceof jt && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new jt(i, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const s of e)
      n = i[r], n === void 0 && (n = new ct(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(s), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    Ei(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class Di extends st {
}
let Nr = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Nr = !0, !1;
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
function Ye(t, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: t, ...e?.detail }
  });
}
function Be(t, e) {
  let i = "", r = "";
  return e || (e = "	"), t.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (r = r.substring(e.length)), i += r + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (r += e);
  }), i.substring(1, i.length - 3);
}
var _t = function(t, e) {
  return _t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, _t(t, e);
};
function Fr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _t(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Pe = function() {
  return Pe = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Pe.apply(this, arguments);
};
function m(t, e, i, r) {
  var n = arguments.length, s = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, i, r);
  else for (var a = t.length - 1; a >= 0; a--) (c = t[a]) && (s = (n < 3 ? c(s) : n > 3 ? c(e, i, s) : c(e, i)) || s);
  return n > 3 && s && Object.defineProperty(e, i, s), s;
}
function qe(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, i = e && t[e], r = 0;
  if (i) return i.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
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
function Pr(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Or = (t) => t.nodeType === Node.ELEMENT_NODE, Ti = () => {
}, Mr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Ti, Mr);
document.removeEventListener("x", Ti);
const Li = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Vr = (t) => {
  const e = Li();
  if (!e.length)
    return !1;
  const i = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const s = (c) => {
    n = c.composedPath();
  };
  return document.body.addEventListener("check-if-focused", s), i.dispatchEvent(r), document.body.removeEventListener("check-if-focused", s), n.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Pt extends ie {
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
var Ri = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
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
var Ur = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Hr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Xt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Br(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + i.left, c = n + i.top, a, o;
  if (t.type === "touchstart") {
    var p = t;
    a = p.changedTouches[0].pageX - s, o = p.changedTouches[0].pageY - c;
  } else {
    var h = t;
    a = h.pageX - s, o = h.pageY - c;
  }
  return { x: a, y: o };
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
var Kt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Zt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ze = [], qr = (
  /** @class */
  function(t) {
    Fr(e, t);
    function e(i) {
      var r = t.call(this, Pe(Pe({}, e.defaultAdapter), i)) || this;
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
        return Ur;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Xt;
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
      var i = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var n = e.cssClasses, s = n.ROOT, c = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(s), i.adapter.isUnbounded() && (i.adapter.addClass(c), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, s = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(s), i.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(i) {
      this.activateImpl(i);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var i = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        i.layoutInternal(), i.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(i) {
      var r = e.cssClasses.UNBOUNDED;
      i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var i = this;
      requestAnimationFrame(function() {
        return i.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(i) {
      var r, n;
      if (i) {
        try {
          for (var s = qe(Kt), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            c && !c.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(i) {
      var r, n;
      if (i.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var s = qe(Zt), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (o) {
          r = { error: o };
        } finally {
          try {
            c && !c.done && (n = s.return) && n.call(s);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = qe(Kt), s = n.next(); !s.done; s = n.next()) {
          var c = s.value;
          this.adapter.deregisterInteractionHandler(c, this.activateHandler);
        }
      } catch (a) {
        i = { error: a };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = qe(Zt), s = n.next(); !s.done; s = n.next()) {
          var c = s.value;
          this.adapter.deregisterDocumentInteractionHandler(c, this.deactivateHandler);
        }
      } catch (a) {
        i = { error: a };
      } finally {
        try {
          s && !s.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(s) {
        s.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[s], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var s = this.previousActivationEvent, c = s && i !== void 0 && s.type !== i.type;
          if (!c) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var a = i !== void 0 && ze.length > 0 && ze.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (ze.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ze = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, c = e.cssClasses, a = c.FG_DEACTIVATION, o = c.FG_ACTIVATION, p = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", u = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), y = b.startPoint, v = b.endPoint;
        h = y.x + "px, " + y.y + "px", u = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(s, u), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, p);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, s;
      n ? s = Br(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, s = {
        x: s.x - this.initialSize / 2,
        y: s.y - this.initialSize / 2
      };
      var c = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: s, endPoint: c };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, s = n.hasDeactivationUXRun, c = n.isActivated, a = s || !c;
      a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, Xt.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var i = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(i), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var i = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return i.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var i = this, r = this.activationState;
      if (r.isActivated) {
        var n = Pe({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          i.animateDeactivation(n);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          i.activationState.hasDeactivationUXRun = !0, i.animateDeactivation(n), i.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(i) {
      var r = i.wasActivatedByPointer, n = i.wasElementMadeActive;
      (r || n) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var i = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), n = function() {
        var c = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return c + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var s = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && s % 2 !== 0 ? this.initialSize = s - 1 : this.initialSize = s, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, s = i.VAR_TOP, c = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(c, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(s, this.unboundedCoords.top + "px"));
    }, e;
  }(Ri)
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
class zr {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const i = (e.getAttribute("class") || "").split(/\s+/);
    for (const r of i)
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
      this.classes.forEach((i) => e += i + " "), this.element.setAttribute("class", e);
    }
  }
}
const Jt = /* @__PURE__ */ new WeakMap(), at = nt((t) => (e) => {
  if (!(e instanceof st) || e instanceof Di || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Jt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Jt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new zr(r);
  n.forEach((c) => {
    c in t || (s.remove(c), n.delete(c));
  });
  for (const c in t) {
    const a = t[c];
    a != n.has(c) && (a ? (s.add(c), n.add(c)) : (s.remove(c), n.delete(c)));
  }
  typeof s.commit == "function" && s.commit();
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
const Qt = /* @__PURE__ */ new WeakMap(), Gr = nt((t) => (e) => {
  if (!(e instanceof st) || e instanceof Di || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Qt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Qt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in t || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in t)
    n.add(s), s.indexOf("-") === -1 ? r[s] = t[s] : r.setProperty(s, t[s]);
});
class R extends Pt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = qr;
  }
  get isActive() {
    return Pr(this.parentElement || this, ":active");
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
      updateCssVariable: (e, i) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = i;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = i;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = i;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = i;
            break;
          case "--mdc-ripple-left":
            this.leftPos = i;
            break;
          case "--mdc-ripple-top":
            this.topPos = i;
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
    const e = this.activated && (this.primary || !this.accent), i = this.selected && (this.primary || !this.accent), r = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": i,
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
    return l`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${at(r)}"
          style="${Gr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
m([
  F(".mdc-ripple-surface")
], R.prototype, "mdcRoot", void 0);
m([
  d({ type: Boolean })
], R.prototype, "primary", void 0);
m([
  d({ type: Boolean })
], R.prototype, "accent", void 0);
m([
  d({ type: Boolean })
], R.prototype, "unbounded", void 0);
m([
  d({ type: Boolean })
], R.prototype, "disabled", void 0);
m([
  d({ type: Boolean })
], R.prototype, "activated", void 0);
m([
  d({ type: Boolean })
], R.prototype, "selected", void 0);
m([
  d({ type: Boolean })
], R.prototype, "internalUseStateLayerCustomProperties", void 0);
m([
  w()
], R.prototype, "hovering", void 0);
m([
  w()
], R.prototype, "bgFocused", void 0);
m([
  w()
], R.prototype, "fgActivation", void 0);
m([
  w()
], R.prototype, "fgDeactivation", void 0);
m([
  w()
], R.prototype, "fgScale", void 0);
m([
  w()
], R.prototype, "fgSize", void 0);
m([
  w()
], R.prototype, "translateStart", void 0);
m([
  w()
], R.prototype, "translateEnd", void 0);
m([
  w()
], R.prototype, "leftPos", void 0);
m([
  w()
], R.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const jr = te`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let kt = class extends R {
};
kt.styles = [jr];
kt = m([
  B("mwc-ripple")
], kt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ye = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, s) => e.constructor._observers.set(s, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((s, c) => {
          const o = this.constructor._observers.get(c);
          o !== void 0 && o.call(this, this[c], s);
        });
      };
    }
    e.constructor._observers.set(i, t);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ni {
  constructor(e) {
    this.startPress = (i) => {
      e().then((r) => {
        r && r.startPress(i);
      });
    }, this.endPress = () => {
      e().then((i) => {
        i && i.endPress();
      });
    }, this.startFocus = () => {
      e().then((i) => {
        i && i.startFocus();
      });
    }, this.endFocus = () => {
      e().then((i) => {
        i && i.endFocus();
      });
    }, this.startHover = () => {
      e().then((i) => {
        i && i.startHover();
      });
    }, this.endHover = () => {
      e().then((i) => {
        i && i.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class O extends ie {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ni(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
          const i = e.type;
          this.onDown(i === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : l``, r = this.hasMeta ? this.renderMeta() : l``;
    return l`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? l`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? l`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return l`
      <span class="mdc-deprecated-list-item__graphic material-icons ${at(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return l`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return l`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return l`<slot></slot>`;
  }
  renderTwoline() {
    return l`
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
  onDown(e, i) {
    const r = () => {
      window.removeEventListener(e, r), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, r), this.rippleHandlers.startPress(i);
  }
  fireRequestSelected(e, i) {
    if (this.noninteractive)
      return;
    const r = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: i, selected: e } });
    this.dispatchEvent(r);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const i of e.eventNames)
        e.target.addEventListener(i, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const i of e.eventNames)
        e.target.removeEventListener(i, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
m([
  F("slot")
], O.prototype, "slotElement", void 0);
m([
  xi("mwc-ripple")
], O.prototype, "ripple", void 0);
m([
  d({ type: String })
], O.prototype, "value", void 0);
m([
  d({ type: String, reflect: !0 })
], O.prototype, "group", void 0);
m([
  d({ type: Number, reflect: !0 })
], O.prototype, "tabindex", void 0);
m([
  d({ type: Boolean, reflect: !0 }),
  ye(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], O.prototype, "disabled", void 0);
m([
  d({ type: Boolean, reflect: !0 })
], O.prototype, "twoline", void 0);
m([
  d({ type: Boolean, reflect: !0 })
], O.prototype, "activated", void 0);
m([
  d({ type: String, reflect: !0 })
], O.prototype, "graphic", void 0);
m([
  d({ type: Boolean })
], O.prototype, "multipleGraphics", void 0);
m([
  d({ type: Boolean })
], O.prototype, "hasMeta", void 0);
m([
  d({ type: Boolean, reflect: !0 }),
  ye(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], O.prototype, "noninteractive", void 0);
m([
  d({ type: Boolean, reflect: !0 }),
  ye(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], O.prototype, "selected", void 0);
m([
  w()
], O.prototype, "shouldRenderRipple", void 0);
m([
  w()
], O.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Fi = te`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let At = class extends O {
};
At.styles = [Fi];
At = m([
  B("mwc-list-item")
], At);
var Wr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, Y = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Xr(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Wr(e, i, n), n;
};
let K = class extends ur {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(t) {
    const e = this.multipliers.indexOf(t);
    e >= 0 && (this.multiplierIndex = e), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.value = t);
  }
  selectMultiplier(t) {
    this.multiplier = this.multipliers[t.detail.index];
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(L("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? l`<div style="position:relative;">
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
      </div>` : l``;
  }
  renderMulplierList() {
    return l`${this.multipliers.map(
      (t) => l`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? L("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? l`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : l``;
  }
  render() {
    return l`
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
Y([
  d({ type: Boolean })
], K.prototype, "nullable", 2);
Y([
  d({ type: Array })
], K.prototype, "multipliers", 2);
Y([
  d({ type: String })
], K.prototype, "multiplier", 1);
Y([
  d({ type: String })
], K.prototype, "unit", 2);
Y([
  w()
], K.prototype, "null", 1);
Y([
  d({ type: String })
], K.prototype, "maybeValue", 1);
Y([
  d({ type: String })
], K.prototype, "defaultValue", 2);
Y([
  d({ type: Array })
], K.prototype, "reservedValues", 2);
Y([
  F("mwc-switch")
], K.prototype, "nullSwitch", 2);
Y([
  F("mwc-menu")
], K.prototype, "multiplierMenu", 2);
Y([
  F("mwc-icon-button")
], K.prototype, "multiplierButton", 2);
K = Y([
  B("wizard-textfield")
], K);
var Kr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, Ee = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Zr(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Kr(e, i, n), n;
};
let ge = class extends mr {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.value = t);
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
    return this.nullable ? l`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : l``;
  }
  render() {
    return l`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Ee([
  d({ type: Boolean })
], ge.prototype, "nullable", 2);
Ee([
  w()
], ge.prototype, "null", 1);
Ee([
  d({ type: String })
], ge.prototype, "maybeValue", 1);
Ee([
  d({ type: String })
], ge.prototype, "defaultValue", 2);
Ee([
  d({ type: Array })
], ge.prototype, "reservedValues", 2);
Ee([
  F("mwc-switch")
], ge.prototype, "nullSwitch", 2);
ge = Ee([
  B("wizard-select")
], ge);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Jr(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const a = `__${e}`;
    if (i = r.getPropertyDescriptor(e, a), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let s = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const c = {
    configurable: !0,
    enumerable: !0,
    set(a) {
      s === "" && (s = r.getPropertyOptions(e).attribute), this.hasAttribute(s) && this.removeAttribute(s), n.set.call(this, a);
    }
  };
  return n.get && (c.get = function() {
    return n.get.call(this);
  }), c;
}
function Ot(t, e, i) {
  if (e !== void 0)
    return Jr(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Pi extends Pt {
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
Pi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const ft = /* @__PURE__ */ new WeakMap(), we = nt((t) => (e) => {
  const i = ft.get(e);
  if (t === void 0 && e instanceof st) {
    if (i !== void 0 || !ft.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  ft.set(e, t);
});
class P extends Pi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ni(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const s = this.calculateAnimationStateName(!!r, !!i, !!n), c = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${s}-${c}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? l`<mwc-ripple
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
    const e = this.indeterminate || this.checked, i = {
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
    return l`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${at(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${we(this.name)}"
              aria-checked="${we(r)}"
              aria-label="${we(this.ariaLabel)}"
              aria-labelledby="${we(this.ariaLabelledBy)}"
              aria-describedby="${we(this.ariaDescribedBy)}"
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
    const i = () => {
      window.removeEventListener("mouseup", i), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", i), this.rippleHandlers.startPress(e);
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
m([
  F(".mdc-checkbox")
], P.prototype, "mdcRoot", void 0);
m([
  F("input")
], P.prototype, "formElement", void 0);
m([
  d({ type: Boolean, reflect: !0 })
], P.prototype, "checked", void 0);
m([
  d({ type: Boolean })
], P.prototype, "indeterminate", void 0);
m([
  d({ type: Boolean, reflect: !0 })
], P.prototype, "disabled", void 0);
m([
  d({ type: String, reflect: !0 })
], P.prototype, "name", void 0);
m([
  d({ type: String })
], P.prototype, "value", void 0);
m([
  Ot,
  d({ type: String, attribute: "aria-label" })
], P.prototype, "ariaLabel", void 0);
m([
  Ot,
  d({ type: String, attribute: "aria-labelledby" })
], P.prototype, "ariaLabelledBy", void 0);
m([
  Ot,
  d({ type: String, attribute: "aria-describedby" })
], P.prototype, "ariaDescribedBy", void 0);
m([
  d({ type: Boolean })
], P.prototype, "reducedTouchTarget", void 0);
m([
  w()
], P.prototype, "animationClass", void 0);
m([
  w()
], P.prototype, "shouldRenderRipple", void 0);
m([
  w()
], P.prototype, "focused", void 0);
m([
  w()
], P.prototype, "useStateLayerCustomProperties", void 0);
m([
  xi("mwc-ripple")
], P.prototype, "ripple", void 0);
m([
  or({ passive: !0 })
], P.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Qr = te`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let wt = class extends P {
};
wt.styles = [Qr];
wt = m([
  B("mwc-checkbox")
], wt);
var Yr = Object.defineProperty, en = Object.getOwnPropertyDescriptor, Z = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? en(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Yr(e, i, n), n;
};
let j = class extends ie {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(t) {
    t === null ? this.null = !0 : (this.null = !1, this.checked = t === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(t) {
    !this.nullable || t === this.isNull || (this.isNull = t, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(t) {
    this.checkbox ? this.checkbox.checked = t : this.initChecked = t;
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
    return this.nullable ? l`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : l``;
  }
  render() {
    return l`
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
Z([
  d({ type: String })
], j.prototype, "label", 2);
Z([
  d({ type: String })
], j.prototype, "helper", 2);
Z([
  d({ type: Boolean })
], j.prototype, "nullable", 2);
Z([
  d({ type: Boolean })
], j.prototype, "defaultChecked", 2);
Z([
  d({ type: String })
], j.prototype, "maybeValue", 1);
Z([
  d({ type: Boolean })
], j.prototype, "disabled", 2);
Z([
  w()
], j.prototype, "null", 1);
Z([
  w()
], j.prototype, "checked", 1);
Z([
  w()
], j.prototype, "deactivateCheckbox", 2);
Z([
  w()
], j.prototype, "formfieldLabel", 1);
Z([
  F("mwc-switch")
], j.prototype, "nullSwitch", 2);
Z([
  F("mwc-checkbox")
], j.prototype, "checkbox", 2);
j = Z([
  B("wizard-checkbox")
], j);
function tn(t, e) {
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: null, ...e?.detail }
  });
}
function rn(t) {
  const e = t.getAttribute("name");
  return e || void 0;
}
function H(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const D = ":not(*)";
function nn(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function sn(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? D : `${t}[version="${i}"][revision="${r}"]`;
}
function Yt(t) {
  return E(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function ei(t, e) {
  const [i, r] = H(e), n = T[t].parents.flatMap(
    (s) => M(s, i).split(",")
  );
  return U(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((s) => s.join("")).join(",");
}
function cn(t) {
  const [e, i, r, n, s, c] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((a) => t.getAttribute(a));
  return e === "None" ? `${E(t.parentElement)}>(${n} ${c} ${s})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${s ?? ""}`;
}
function an(t, e) {
  if (e.endsWith(")")) {
    const [b, y] = H(e), [v, x, A] = y.substring(1, y.length - 1).split(" ");
    if (!v || !x) return D;
    const C = T[t].parents.flatMap(
      (V) => M(V, b).split(",")
    );
    return U(
      C,
      [">"],
      [`${t}[iedName="None"][lnClass="${v}"][lnType="${x}"][lnInst="${A}"]`]
    ).map((V) => V.join("")).join(",");
  }
  const [i, r, n, s, c] = e.split(/[ /]/);
  if (!i || !r || !s) return D;
  const [
    a,
    o,
    p,
    h,
    u
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return U(
    [t],
    a,
    o,
    p,
    h,
    u
  ).map((b) => b.join("")).join(",");
}
function on(t) {
  return `${E(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function ln(t, e) {
  const [i, r] = H(e), [n, s] = r.split(" ");
  return `${M(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${s}"]`;
}
function dn(t) {
  return `${E(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function pn(t, e) {
  const [i, r] = H(e);
  return r ? `${M(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : D;
}
function un(t) {
  return `${E(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function mn(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : D;
}
function hn(t) {
  const e = t.textContent, [i, r, n, s, c] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${E(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${c ?? ""}`;
}
function fn(t, e) {
  const [i, r] = H(e), [n, s, c, a, o, p] = r.split(/[ /]/), [
    h,
    u,
    b,
    y,
    v,
    x
  ] = [
    T[t].parents.flatMap(
      (A) => M(A, i).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return U(
    h,
    [">"],
    [t],
    u,
    b,
    y,
    v,
    x
  ).map((A) => A.join("")).join(",");
}
function gn(t) {
  const [e, i, r, n, s, c, a, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), p = `${e}/${i ?? ""} ${r} ${n ?? ""}.${s} ${c || ""}`;
  return `${E(t.parentElement)}>${p} (${a}${o ? " [" + o + "]" : ""})`;
}
function bn(t, e) {
  const [i, r] = H(e), [n, s, c, a] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), p = o && o[1] ? o[1] : "", h = o && o[2] ? o[2] : "", u = r.match(/\(([A-Z]{2})/), b = r.match(/ \[([0-9]{1,2})\]/), y = u && u[1] ? u[1] : "", v = b && b[1] ? b[1] : "", [
    x,
    A,
    C,
    V,
    de,
    pt,
    ut,
    mt,
    ht
  ] = [
    T[t].parents.flatMap(
      (Re) => M(Re, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${p}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    v ? [`[ix="${v}"]`] : [":not([ix])", '[ix=""]']
  ];
  return U(
    x,
    [">"],
    [t],
    A,
    C,
    V,
    de,
    pt,
    ut,
    mt,
    ht
  ).map((Re) => Re.join("")).join(",");
}
function yn(t) {
  if (!t.parentElement) return NaN;
  const e = E(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    s,
    c,
    a,
    o,
    p,
    h,
    u,
    b,
    y,
    v,
    x,
    A
  ] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "serviceType",
    "srcLDInst",
    "srcPrefix",
    "srcLNClass",
    "srcLNInst",
    "srcCBName"
  ].map((de) => t.getAttribute(de)), C = A ? `${u}:${A} ${b ?? ""}/${y ?? ""} ${v ?? ""} ${x ?? ""}` : "", V = `${i} ${s}/${c ?? ""} ${a} ${o ?? ""} ${p} ${h || ""}`;
  return `${e}>${C ? C + " " : ""}${V}${r ? `@${r}` : ""}`;
}
function vn(t, e) {
  const [i, r] = H(e), n = T[t].parents.flatMap(
    (Ne) => M(Ne, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Ne] = r.split("["), cr = [`[intAddr="${Ne}"]`];
    return U(n, [">"], [t], cr).map((ar) => ar.join("")).join(",");
  }
  let s, c, a, o, p, h, u, b, y, v, x, A, C, V;
  !r.includes(":") && !r.includes("@") ? [s, c, a, o, p, h, u] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    b,
    y,
    v,
    x,
    A,
    C,
    s,
    c,
    a,
    o,
    p,
    h,
    u
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, c, a, o, p, h, u, V] = r.split(/[ /@]/) : [
    b,
    y,
    v,
    x,
    A,
    C,
    s,
    c,
    a,
    o,
    p,
    h,
    u,
    V
  ] = r.split(/[ /:@]/);
  const [
    de,
    pt,
    ut,
    mt,
    ht,
    Re,
    Qi,
    Yi,
    er,
    tr,
    ir,
    rr,
    nr,
    sr
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    u ? [`[daName="${u}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    v ? [`[srcLDInst="${v}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    x ? [`[srcPrefix="${x}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    A ? [`[srcLNClass="${A}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    C ? [`[srcLNInst="${C}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    V ? [`[intAddr="${V}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return U(
    n,
    [">"],
    [t],
    de,
    pt,
    ut,
    mt,
    ht,
    Re,
    Qi,
    Yi,
    er,
    tr,
    ir,
    rr,
    nr,
    sr
  ).map((Ne) => Ne.join("")).join(",");
}
function Sn(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${E(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function xn(t, e) {
  const [i, r] = H(e), n = T[t].parents.flatMap(
    (u) => M(u, i).split(",")
  ), [s, c, a] = r.split(" ");
  if (!c) return D;
  const [o, p, h] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    [`[inst="${a}"]`]
  ];
  return U(
    n,
    [">"],
    [t],
    o,
    p,
    h
  ).map((u) => u.join("")).join(",");
}
function _n(t) {
  const [e, i, r, n, s, c] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${E(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${s} ${c}`;
}
function kn(t, e) {
  const [i, r] = H(e), n = T[t].parents.flatMap(
    (C) => M(C, i).split(",")
  ), [s, c, a, o, p, h] = r.split(/[ /]/), [
    u,
    b,
    y,
    v,
    x,
    A
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return U(
    n,
    [">"],
    [t],
    u,
    b,
    y,
    v,
    x,
    A
  ).map((C) => C.join("")).join(",");
}
function ti(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${E(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function Ct(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = H(e), [s, c, a, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!c) return D;
  if (i === 0) return `${t}[name="${c}"]`;
  const p = T[t].parents.flatMap(
    (b) => b === "SDI" ? Ct(b, r, i - 1).split(",") : M(b, r).split(",")
  ).filter((b) => !b.startsWith(D));
  if (p.length === 0) return D;
  const [h, u] = [
    [`[name="${c}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return U(
    p,
    [">"],
    [t],
    h,
    u
  ).map((b) => b.join("")).join(",");
}
function An(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${E(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function wn(t, e) {
  const [i, r] = H(e), [n, s] = r.split(" "), c = parseFloat(s), a = T[t].parents.flatMap(
    (h) => M(h, i).split(",")
  ), [o, p] = [
    n ? [`[sGroup="${n}"]`] : [""],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return U(
    a,
    [">"],
    [t],
    o,
    p
  ).map((h) => h.join("")).join(",");
}
function Cn(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function In(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? D : `${t}[iedName="${i}"][apName="${r}"]`;
}
function ii(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function ri(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? D : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function En(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${E(t.parentElement)}>${e}`;
}
function $n(t, e) {
  const [i, r] = H(e), [n, s] = [
    T[t].parents.flatMap(
      (c) => M(c, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return U(n, [">"], [t], s).map((c) => c.join("")).join(",");
}
function Dn(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${E(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${E(t.parentElement)}>${i} [${r}]`;
}
function Tn(t, e) {
  const [i, r] = H(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [c, a, o] = [
    T[t].parents.flatMap(
      (p) => M(p, i).split(",")
    ),
    [`[type="${n}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return U(
    c,
    [">"],
    [t],
    a,
    o
  ).map((p) => p.join("")).join(",");
}
function Ln(t) {
  return `${E(t.parentElement)}>${t.getAttribute("ord")}`;
}
function Rn(t, e) {
  const [i, r] = H(e);
  return `${M("EnumType", i)}>${t}[ord="${r}"]`;
}
function Nn(t) {
  return `${E(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function Fn(t, e) {
  const [i, r] = H(e), [n, s] = r.split("	"), [c] = [
    T[t].parents.flatMap(
      (a) => M(a, i).split(",")
    )
  ];
  return U(
    c,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [s]
  ).map((a) => a.join("")).join(",");
}
function Pn() {
  return "";
}
function On() {
  return ":root";
}
function k(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${E(t.parentElement)}>${t.getAttribute("name")}`;
}
function _(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = H(e);
  if (!n) return D;
  if (i === 0) return `${t}[name="${n}"]`;
  const s = T[t].parents;
  if (!s) return D;
  const c = s.flatMap(
    (a) => T[a].selector === T.Substation.selector ? _(a, r, i - 1).split(",") : M(a, r).split(",")
  ).filter((a) => !a.startsWith(D));
  return c.length === 0 ? D : U(c, [">"], [t], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function f(t) {
  return E(t.parentElement).toString();
}
function g(t, e) {
  const i = T[t].parents;
  if (!i) return D;
  const r = i.flatMap((n) => M(n, e).split(",")).filter((n) => !n.startsWith(D));
  return r.length === 0 ? D : U(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Ge(t) {
  return `#${t.id}`;
}
function je(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : D;
}
const Oi = [
  "TransformerWinding",
  "ConductingEquipment"
], Mi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Oi
], It = ["Substation", "VoltageLevel", "Bay"], Vi = ["Process", "Line"], Ui = ["EqSubFunction", "EqFunction"], Mn = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Mi,
  ...It,
  ...Vi,
  ...Ui
], Hi = ["ConnectivityNode", ...Mn], Vn = ["GOOSESecurity", "SMVSecurity"], Un = ["SubNetwork", ...Vn, ...Hi], Hn = ["BDA", "DA"], Bn = ["SampledValueControl", "GSEControl"], qn = ["LogControl", "ReportControl"], zn = [...Bn, ...qn], Gn = ["GSE", "SMV"], jn = [
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
  ...zn,
  ...Gn,
  ...Hn
], ke = ["LN0", "LN"], Wn = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Xn = ["Subject", "IssuerName"], Kn = ["MinTime", "MaxTime"], Zn = ["LNodeType", "DOType", "DAType", "EnumType"], Jn = [
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
], Qn = ["DynDataSet", "ConfDataSet"], Yn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Qn
], es = ["ConfLogControl", "ConfSigRef"], ts = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], is = ["SCL", ...Un, ...jn, ...Zn], Bi = [
  ...is,
  ...Wn,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Xn,
  ...Kn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ke,
  ...Jn,
  "DynAssociation",
  "SettingGroups",
  ...Yn,
  ...es,
  ...ts,
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
], rs = new Set(Bi);
function Mt(t) {
  return rs.has(t);
}
const ot = ["Text", "Private"], he = [...ot], $ = [...ot], We = [...ot], ni = [...$, "Val"], qi = [...he, "LNode"], fe = [...qi], Et = [...fe], gt = [
  ...fe,
  "PowerTransformer",
  "GeneralEquipment"
], si = [
  ...Et,
  "Terminal"
], ci = [...$, "Address"], zi = [...he], ai = [...zi, "IEDName"], oi = [
  ...$,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], li = [
  ...fe,
  "GeneralEquipment",
  "Function"
], di = [...zi, "TrgOps"], pi = [
  ...fe,
  "GeneralEquipment",
  "EqSubFunction"
], T = {
  AccessControl: {
    identity: f,
    selector: g,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: k,
    selector: _,
    parents: ["IED"],
    children: [
      ...he,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: f,
    selector: g,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: dn,
    selector: pn,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: f,
    selector: g,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: k,
    selector: _,
    parents: ["DAType"],
    children: [...ni]
  },
  BitRate: {
    identity: f,
    selector: g,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: k,
    selector: _,
    parents: ["VoltageLevel"],
    children: [
      ...gt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: _n,
    selector: kn,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: f,
    selector: g,
    parents: ["SCL"],
    children: [...$, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: k,
    selector: _,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...si,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: f,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Cn,
    selector: In,
    parents: ["SubNetwork"],
    children: [...$, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: k,
    selector: _,
    parents: ["Bay", "Line"],
    children: [...qi]
  },
  DA: {
    identity: k,
    selector: _,
    parents: ["DOType"],
    children: [...ni]
  },
  DAI: {
    identity: ti,
    selector: Ct,
    parents: ["DOI", "SDI"],
    children: [...$, "Val"]
  },
  DAType: {
    identity: Ge,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "BDA", "ProtNs"]
  },
  DO: {
    identity: k,
    selector: _,
    parents: ["LNodeType"],
    children: [...$]
  },
  DOI: {
    identity: k,
    selector: _,
    parents: [...ke],
    children: [...$, "SDI", "DAI"]
  },
  DOType: {
    identity: Ge,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: k,
    selector: _,
    parents: [...ke],
    children: [...he, "FCDA"]
  },
  DataSetDirectory: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: f,
    selector: g,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ge,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "EnumVal"]
  },
  EnumVal: {
    identity: Ln,
    selector: Rn,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: k,
    selector: _,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...pi]
  },
  EqSubFunction: {
    identity: k,
    selector: _,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...pi]
  },
  ExtRef: {
    identity: yn,
    selector: vn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: gn,
    selector: bn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: k,
    selector: _,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...fe,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: k,
    selector: _,
    parents: [
      "SubFunction",
      "Function",
      ...Vi,
      ...Ui,
      ...It
    ],
    children: [...Et, "EqFunction"]
  },
  GetCBValues: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: k,
    selector: _,
    parents: ["AccessPoint"],
    children: [...he, "Subject", "IssuerName"]
  },
  GSE: {
    identity: ii,
    selector: ri,
    parents: ["ConnectedAP"],
    children: [...ci, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: k,
    selector: _,
    parents: ["LN0"],
    children: [...ai, "Protocol"]
  },
  GSESettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: f,
    selector: g,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: f,
    selector: g,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: nn,
    selector: sn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: k,
    selector: _,
    parents: ["SCL"],
    children: [...$, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: hn,
    selector: fn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: f,
    selector: g,
    parents: [...ke],
    children: [...$, "ExtRef"]
  },
  IssuerName: {
    identity: f,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: on,
    selector: ln,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: un,
    selector: mn,
    parents: ["Server"],
    children: [...$, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Sn,
    selector: xn,
    parents: ["AccessPoint", "LDevice"],
    children: [...oi]
  },
  LN0: {
    identity: f,
    selector: g,
    parents: ["LDevice"],
    children: [
      ...oi,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: cn,
    selector: an,
    parents: [...Hi],
    children: [...$]
  },
  LNodeType: {
    identity: Ge,
    selector: je,
    parents: ["DataTypeTemplates"],
    children: [...We, "DO"]
  },
  Line: {
    identity: k,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...li,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: k,
    selector: _,
    parents: [...ke],
    children: [...$]
  },
  LogControl: {
    identity: k,
    selector: _,
    parents: [...ke],
    children: [...di]
  },
  LogSettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: f,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: f,
    selector: g,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: f,
    selector: g,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Yt,
    selector: ei,
    parents: ["TransformerWinding"],
    children: [...$]
  },
  OptFields: {
    identity: f,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Dn,
    selector: Tn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: En,
    selector: $n,
    parents: ["ConnectedAP"],
    children: [...$, "P"]
  },
  PowerTransformer: {
    identity: k,
    selector: _,
    parents: [...It],
    children: [
      ...Et,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => D,
    parents: [],
    children: []
  },
  Process: {
    identity: k,
    selector: _,
    parents: ["Process", "SCL"],
    children: [
      ...li,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Nn,
    selector: Fn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: f,
    selector: g,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: k,
    selector: _,
    parents: [...ke],
    children: [...di, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: f,
    selector: g,
    parents: ["ReportControl"],
    children: [...$, "ClientLN"]
  },
  SamplesPerSec: {
    identity: f,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: k,
    selector: _,
    parents: ["LN0"],
    children: [...ai, "SmvOpts"]
  },
  SecPerSamples: {
    identity: f,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Pn,
    selector: On,
    parents: [],
    children: [
      ...ot,
      "Header",
      "Substation",
      "Communication",
      "IED",
      "DataTypeTemplates",
      "Line",
      "Process"
    ]
  },
  SDI: {
    identity: ti,
    selector: Ct,
    parents: ["DOI", "SDI"],
    children: [...$, "SDI", "DAI"]
  },
  SDO: {
    identity: k,
    selector: _,
    parents: ["DOType"],
    children: [...he]
  },
  Server: {
    identity: f,
    selector: g,
    parents: ["AccessPoint"],
    children: [
      ...$,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: f,
    selector: g,
    parents: ["AccessPoint"],
    children: [...$]
  },
  Services: {
    identity: f,
    selector: g,
    parents: ["IED", "AccessPoint"],
    children: [
      "DynAssociation",
      "SettingGroups",
      "GetDirectory",
      "GetDataObjectDefinition",
      "DataObjectDirectory",
      "GetDataSetValue",
      "SetDataSetValue",
      "DataSetDirectory",
      "ConfDataSet",
      "DynDataSet",
      "ReadWrite",
      "TimerActivatedControl",
      "ConfReportControl",
      "GetCBValues",
      "ConfLogControl",
      "ReportSettings",
      "LogSettings",
      "GSESettings",
      "SMVSettings",
      "GSEDir",
      "GOOSE",
      "GSSE",
      "SMVsc",
      "FileHandling",
      "ConfLNs",
      "ClientServices",
      "ConfLdName",
      "SupSubscription",
      "ConfSigRef",
      "ValueHandling",
      "RedProt",
      "TimeSyncProt",
      "CommProt"
    ]
  },
  SetDataSetValue: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: f,
    selector: g,
    parents: ["LN0"],
    children: [...$]
  },
  SettingGroups: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: f,
    selector: g,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: f,
    selector: g,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: ii,
    selector: ri,
    parents: ["ConnectedAP"],
    children: [...ci]
  },
  SmvOpts: {
    identity: f,
    selector: g,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: k,
    selector: _,
    parents: ["AccessPoint"],
    children: [...he, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: k,
    selector: _,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Oi
    ],
    children: [...fe, "EqFunction"]
  },
  SubFunction: {
    identity: k,
    selector: _,
    parents: ["SubFunction", "Function"],
    children: [
      ...fe,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: k,
    selector: _,
    parents: ["Communication"],
    children: [...he, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: f,
    selector: g,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: k,
    selector: _,
    parents: ["SCL"],
    children: [...gt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: k,
    selector: _,
    parents: ["TransformerWinding"],
    children: [...fe, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Yt,
    selector: ei,
    parents: [...Mi],
    children: [...$]
  },
  Text: {
    identity: f,
    selector: g,
    parents: Bi.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: f,
    selector: g,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: k,
    selector: _,
    parents: ["PowerTransformer"],
    children: [
      ...si,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: f,
    selector: g,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: An,
    selector: wn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: f,
    selector: g,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: f,
    selector: g,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: k,
    selector: _,
    parents: ["Substation"],
    children: [...gt, "Voltage", "Bay", "Function"]
  }
};
function M(t, e) {
  return typeof e != "string" ? D : Mt(t) ? T[t].selector(t, e) : t;
}
function ns(t, e, i) {
  if (typeof i != "string" || !Mt(e)) return null;
  const r = t.querySelector(T[e].selector(e, i));
  return r === null || et(r) ? r : Array.from(
    t.querySelectorAll(T[e].selector(e, i))
  ).find(et) ?? null;
}
function E(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Mt(e) ? T[e].identity(t) : NaN;
}
Ai((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function ui(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function U(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function et(t) {
  return !t.closest("Private");
}
const ss = 99;
Array(ss).fill(1).map((t, e) => `${e + 1}`);
var cs = Object.defineProperty, as = Object.getOwnPropertyDescriptor, Gi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? as(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && cs(e, i, n), n;
};
function ce() {
  return {
    /** Current [[`CompasSettings`]] in `localStorage`, default to [[`defaults`]]. */
    get compasSettings() {
      return {
        sclDataServiceUrl: this.getCompasSetting("sclDataServiceUrl"),
        sclValidatorServiceUrl: this.getCompasSetting("sclValidatorServiceUrl"),
        cimMappingServiceUrl: this.getCompasSetting("cimMappingServiceUrl"),
        sclAutoAlignmentServiceUrl: this.getCompasSetting(
          "sclAutoAlignmentServiceUrl"
        ),
        sitipeServiceUrl: this.getCompasSetting("sitipeServiceUrl"),
        useWebsockets: this.getCompasSetting("useWebsockets")
      };
    },
    get defaultSettings() {
      return {
        sclDataServiceUrl: "/compas-scl-data-service",
        sclValidatorServiceUrl: "/compas-scl-validator",
        cimMappingServiceUrl: "/compas-cim-mapping",
        sclAutoAlignmentServiceUrl: "/compas-scl-auto-alignment",
        sitipeServiceUrl: "/compas-sitipe-service",
        useWebsockets: "on"
      };
    },
    useWebsockets() {
      return this.compasSettings.useWebsockets === "on";
    },
    /** Update the `value` of `setting`, storing to `localStorage`. */
    setCompasSetting(t, e) {
      localStorage.setItem(t, e);
    },
    getCompasSetting(t) {
      return localStorage.getItem(t) ?? this.defaultSettings[t];
    }
  };
}
let tt = class extends ie {
  get compasSettings() {
    return ce().compasSettings;
  }
  getSclDataServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sclDataServiceUrl"]');
  }
  getSclValidatorServiceUrlField() {
    return this.shadowRoot.querySelector(
      'mwc-textfield[id="sclValidatorServiceUrl"]'
    );
  }
  getCimMappingServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="cimMappingServiceUrl"]');
  }
  getSclAutoAlignmentServiceUrlField() {
    return this.shadowRoot.querySelector(
      'mwc-textfield[id="sclAutoAlignmentServiceUrl"]'
    );
  }
  getSitipeServiceUrlField() {
    return this.shadowRoot.querySelector('mwc-textfield[id="sitipeServiceUrl"]');
  }
  getUseWebsockets() {
    return this.shadowRoot.querySelector('mwc-switch[id="useWebsockets"]');
  }
  valid() {
    return this.getSclDataServiceUrlField().checkValidity() && this.getSclValidatorServiceUrlField().checkValidity() && this.getCimMappingServiceUrlField().checkValidity() && this.getSclAutoAlignmentServiceUrlField().checkValidity() && this.getSitipeServiceUrlField().checkValidity();
  }
  save() {
    return this.valid() ? (ce().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), ce().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), ce().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), ce().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), ce().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), ce().setCompasSetting(
      "useWebsockets",
      this.getUseWebsockets().checked ? "on" : "off"
    ), !0) : !1;
  }
  reset() {
    return Object.keys(this.compasSettings).forEach(
      (t) => localStorage.removeItem(t)
    ), !0;
  }
  close() {
    this.dispatchEvent(tn());
  }
  render() {
    return l` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${N("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${N("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${N("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${N("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${N("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${N("compas.settings.useWebsockets")}">
        <mwc-switch
          id="useWebsockets"
          ?checked=${this.compasSettings.useWebsockets === "on"}
        >
        </mwc-switch>
      </mwc-formfield>

      <mwc-button
        @click=${() => {
      this.reset() && this.close();
    }}
      >
        ${N("reset")}
      </mwc-button>`;
  }
};
tt.styles = te`
    :host {
      width: 20vw;
    }

    mwc-textfield,
    mwc-formfield {
      margin: 10px;
      width: 100%;
    }

    mwc-button {
      --mdc-theme-primary: var(--mdc-theme-error);
    }
  `;
Gi([
  d()
], tt.prototype, "compasSettings", 1);
tt = Gi([
  B("compas-settings")
], tt);
function os(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
const ls = "NotFoundError", ji = "ApplicationError", Vt = "ServerError", mi = "https://www.lfenergy.org/compas/commons/v1";
async function re(t) {
  if (!t.ok) {
    let e = ji;
    return t.status === 404 ? e = ls : t.status >= 500 && (e = Vt), Promise.reject({
      type: e,
      status: t.status,
      message: await ds(t)
    });
  }
  return Promise.resolve(t.text());
}
async function ds(t) {
  const e = await t.text(), i = await ae(e);
  return Wi(i) ?? t.statusText;
}
function Wi(t) {
  const e = Array.from(
    t.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let i = "";
    return e.forEach((r, n) => {
      const s = r.getElementsByTagNameNS(mi, "Code").item(0).textContent, c = r.getElementsByTagNameNS(mi, "Message").item(0).textContent;
      n > 0 && (i += ", "), i += c, s && (i += " (" + s + ")");
    }), i;
  }
}
function ae(t) {
  return Promise.resolve(
    new DOMParser().parseFromString(t, "application/xml")
  );
}
function pe(t) {
  const e = t.querySelectorAll("SclData").item(0).textContent ?? "", i = new DOMParser().parseFromString(
    e,
    "application/xml"
  );
  return Promise.resolve(i);
}
function ne(t) {
  return Promise.reject({ type: Vt, message: t.message });
}
function ps(t, e) {
  let i = e.message;
  e.status && (i += " (" + e.status + ")"), t && t.dispatchEvent(
    os({
      kind: "error",
      title: L("compas.error.server"),
      message: L("compas.error.serverDetails", {
        type: e.type,
        message: i
      })
    })
  );
}
function Xe(t) {
  return t.startsWith("http://") || t.startsWith("https://") ? t.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + us() + t;
}
function us() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function Ke(t, e, i, r) {
  let n;
  function s(a) {
    return new Promise((o) => setTimeout(o, a));
  }
  async function c() {
    for (; n !== void 0; )
      await s(250);
  }
  return new Promise((a, o) => {
    n = new WebSocket(i), n.onopen = () => {
      n?.send(r);
    }, n.onmessage = (p) => {
      ae(p.data).then((h) => {
        if (h.documentElement.localName === "ErrorResponse") {
          const u = Wi(h);
          o({ type: ji, message: u });
        } else
          a(h);
        n?.close();
      }).catch((h) => {
        o(h), n?.close();
      });
    }, n.onerror = () => {
      o({
        type: Vt,
        message: `Websocket Error in service "${e}"`
      }), n?.close();
    }, n.onclose = () => {
      n = void 0;
    }, t.dispatchEvent(Ye(c()));
  });
}
const X = "https://www.lfenergy.org/compas/SclDataService/v1";
function Ut() {
  function t() {
    return ce().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return ce().useWebsockets();
  }
  function i() {
    const r = t() + "/common/v1/type/list";
    return fetch(r).catch(ne).then(re).then(ae);
  }
  return {
    listOrderedSclTypes() {
      return i().then((r) => Array.from(r.querySelectorAll("*|Type") ?? []).sort(
        (n, s) => {
          const c = n.getElementsByTagNameNS(X, "Description").item(0).textContent ?? "", a = s.getElementsByTagNameNS(X, "Description").item(0).textContent ?? "";
          return c.localeCompare(a);
        }
      ));
    },
    listScls(r) {
      const n = t() + "/scl/v1/" + r + "/list";
      return fetch(n).catch(ne).then(re).then(ae);
    },
    listSclVersions(r, n) {
      const s = t() + "/scl/v1/" + r + "/" + n + "/versions";
      return fetch(s).catch(ne).then(re).then(ae);
    },
    getSclDocument(r, n, s) {
      if (e()) {
        const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
         </sds:GetWsRequest>`, o = t() + "/scl-ws/v1/" + n + "/get";
        return Ke(
          r,
          "CompasSclDataService",
          Xe(o),
          a
        ).then(pe);
      }
      const c = t() + "/scl/v1/" + n + "/" + s;
      return fetch(c).catch(ne).then(re).then(ae).then(pe);
    },
    getSclDocumentVersion(r, n, s, c) {
      if (e()) {
        const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
           <sds:Version>${c}</sds:Version>
         </sds:GetVersionWsRequest>`, p = t() + "/scl-ws/v1/" + n + "/get-version";
        return Ke(
          r,
          "CompasSclDataService",
          Xe(p),
          o
        ).then(pe);
      }
      const a = t() + "/scl/v1/" + n + "/" + s + "/" + c;
      return fetch(a).catch(ne).then(re).then(ae).then(pe);
    },
    deleteSclDocumentVersion(r, n, s) {
      const c = t() + "/scl/v1/" + r + "/" + n + "/" + s;
      return fetch(c, { method: "DELETE" }).catch(ne).then(re);
    },
    deleteSclDocument(r, n) {
      const s = t() + "/scl/v1/" + r + "/" + n;
      return fetch(s, { method: "DELETE" }).catch(ne).then(re);
    },
    addSclDocument(r, n, s) {
      if (e()) {
        const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${X}">
           <sds:Name>${s.sclName}</sds:Name>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Be(
          new XMLSerializer().serializeToString(s.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, p = t() + "/scl-ws/v1/" + n + "/create";
        return Ke(
          r,
          "CompasSclDataService",
          Xe(p),
          o
        ).then(pe);
      }
      const c = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${X}">
            <sds:Name>${s.sclName}</sds:Name>
            <sds:Comment>${s.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${Be(
        new XMLSerializer().serializeToString(s.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, a = t() + "/scl/v1/" + n;
      return fetch(a, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: c
      }).catch(ne).then(re).then(ae).then(pe);
    },
    updateSclDocument(r, n, s, c) {
      if (e()) {
        const p = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
           <sds:ChangeSet>${c.changeSet}</sds:ChangeSet>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Be(
          new XMLSerializer().serializeToString(c.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, h = t() + "/scl-ws/v1/" + n + "/update";
        return Ke(
          r,
          "CompasSclDataService",
          Xe(h),
          p
        ).then(pe);
      }
      const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${X}">
           <sds:ChangeSet>${c.changeSet}</sds:ChangeSet>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Be(
        new XMLSerializer().serializeToString(c.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, o = t() + "/scl/v1/" + n + "/" + s;
      return fetch(o, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: a
      }).catch(ne).then(re).then(ae).then(pe);
    }
  };
}
var ms = Object.defineProperty, hs = Object.getOwnPropertyDescriptor, Xi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? hs(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && ms(e, i, n), n;
};
let it = class extends ie {
  render() {
    return l` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? l`<h4 class="header">${this.header}</h4>` : l``;
  }
  renderSeparator() {
    return l`<div role="separator"></div>`;
  }
};
it.styles = te`
    div {
      height: 0px;
      margin: 10px 0px 10px 0px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-image: initial;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  `;
Xi([
  d({
    type: String
  })
], it.prototype, "header", 2);
it = Xi([
  B("wizard-divider")
], it);
var fs = Object.defineProperty, gs = Object.getOwnPropertyDescriptor, Ki = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? gs(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && fs(e, i, n), n;
};
function bs(t) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: t }
  });
}
let $t = class extends ie {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    Ut().listOrderedSclTypes().then((t) => this.sclTypes = t);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? l` <mwc-list>
        <mwc-list-item><i>${N("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : l` <mwc-list>
      ${this.sclTypes.map((t) => {
      const e = t.getElementsByTagNameNS(X, "Code").item(0).textContent ?? "", i = t.getElementsByTagNameNS(X, "Description").item(0).textContent ?? "";
      return l`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(bs(e))}
        >
          <span>${i} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : l` <compas-loading></compas-loading> `;
  }
};
Ki([
  d()
], $t.prototype, "sclTypes", 2);
$t = Ki([
  B("compas-scltype-list")
], $t);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ve extends O {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : l``, n = this.hasMeta && this.left ? this.renderMeta() : l``, s = this.renderRipple();
    return l`
      ${s}
      ${r}
      ${this.left ? "" : i}
      <span class=${at(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? i : ""}
      ${n}`;
  }
  async onChange(e) {
    const i = e.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
m([
  F("slot")
], Ve.prototype, "slotElement", void 0);
m([
  F("mwc-checkbox")
], Ve.prototype, "checkboxElement", void 0);
m([
  d({ type: Boolean })
], Ve.prototype, "left", void 0);
m([
  d({ type: String, reflect: !0 })
], Ve.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ys = te`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Te = class extends Ve {
};
Te.styles = [Fi, ys];
Te = m([
  B("mwc-check-list-item")
], Te);
/**
 * @license
 * Copyright 2020 Google Inc.
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
var S = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, q = /* @__PURE__ */ new Set();
q.add(S.BACKSPACE);
q.add(S.ENTER);
q.add(S.SPACEBAR);
q.add(S.PAGE_UP);
q.add(S.PAGE_DOWN);
q.add(S.END);
q.add(S.HOME);
q.add(S.ARROW_LEFT);
q.add(S.ARROW_UP);
q.add(S.ARROW_RIGHT);
q.add(S.ARROW_DOWN);
q.add(S.DELETE);
q.add(S.ESCAPE);
q.add(S.TAB);
var W = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, z = /* @__PURE__ */ new Map();
z.set(W.BACKSPACE, S.BACKSPACE);
z.set(W.ENTER, S.ENTER);
z.set(W.SPACEBAR, S.SPACEBAR);
z.set(W.PAGE_UP, S.PAGE_UP);
z.set(W.PAGE_DOWN, S.PAGE_DOWN);
z.set(W.END, S.END);
z.set(W.HOME, S.HOME);
z.set(W.ARROW_LEFT, S.ARROW_LEFT);
z.set(W.ARROW_UP, S.ARROW_UP);
z.set(W.ARROW_RIGHT, S.ARROW_RIGHT);
z.set(W.ARROW_DOWN, S.ARROW_DOWN);
z.set(W.DELETE, S.DELETE);
z.set(W.ESCAPE, S.ESCAPE);
z.set(W.TAB, S.TAB);
var ve = /* @__PURE__ */ new Set();
ve.add(S.PAGE_UP);
ve.add(S.PAGE_DOWN);
ve.add(S.END);
ve.add(S.HOME);
ve.add(S.ARROW_LEFT);
ve.add(S.ARROW_UP);
ve.add(S.ARROW_RIGHT);
ve.add(S.ARROW_DOWN);
function ue(t) {
  var e = t.key;
  if (q.has(e))
    return e;
  var i = z.get(t.keyCode);
  return i || S.UNKNOWN;
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
var me, se, I = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
me = {}, me["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", me["" + I.LIST_ITEM_CLASS] = "mdc-list-item", me["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", me["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", me["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", me["" + I.ROOT] = "mdc-list";
var De = (se = {}, se["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", se["" + I.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", se["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", se["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", se["" + I.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", se["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", se["" + I.ROOT] = "mdc-deprecated-list", se), Ze = {
  ACTION_EVENT: "MDCList:action",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + I.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` a,
    .` + De[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + De[I.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + I.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` a,
    .` + I.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + De[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + De[I.LIST_ITEM_CLASS] + ` a,
    .` + De[I.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + De[I.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, G = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Dt = (t, e) => t - e, vs = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, s = i.sort(Dt), c = r.sort(Dt);
  let a = 0, o = 0;
  for (; a < s.length || o < c.length; ) {
    const p = s[a], h = c[o];
    if (p === h) {
      a++, o++;
      continue;
    }
    if (p !== void 0 && (h === void 0 || p < h)) {
      n.removed.push(p), a++;
      continue;
    }
    if (h !== void 0 && (p === void 0 || h < p)) {
      n.added.push(h), o++;
      continue;
    }
  }
  return n;
}, Ss = ["input", "button", "textarea", "select"];
function Oe(t) {
  return t instanceof Set;
}
const bt = (t) => {
  const e = t === G.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Oe(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Ht extends Ri {
  constructor(e) {
    super(Object.assign(Object.assign({}, Ht.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = G.UNSET_INDEX, this.focusedItemIndex_ = G.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Ze;
  }
  static get numbers() {
    return G;
  }
  static get defaultAdapter() {
    return {
      focusItemAtIndex: () => {
      },
      getFocusedElementIndex: () => 0,
      getListItemCount: () => 0,
      isFocusInsideList: () => !1,
      isRootFocused: () => !1,
      notifyAction: () => {
      },
      notifySelected: () => {
      },
      getSelectedStateForElementIndex: () => !1,
      setDisabledStateForElementIndex: () => {
      },
      getDisabledStateForElementIndex: () => !1,
      setSelectedStateForElementIndex: () => {
      },
      setActivatedStateForElementIndex: () => {
      },
      setTabIndexForElementIndex: () => {
      },
      setAttributeForElementIndex: () => {
      },
      getAttributeForElementIndex: () => null
    };
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setWrapFocus(e) {
    this.wrapFocus_ = e;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(e) {
    this.isMulti_ = e;
    const i = this.selectedIndex_;
    if (e) {
      if (!Oe(i)) {
        const r = i === G.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Oe(i))
      if (i.size) {
        const r = Array.from(i).sort(Dt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = G.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(e) {
    this.isVertical_ = e;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(e) {
    this.useActivatedClass_ = e;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(e) {
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(bt(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, i) {
    i >= 0 && this.adapter.setTabIndexForElementIndex(i, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, i, r) {
    const n = ue(e) === "ArrowLeft", s = ue(e) === "ArrowUp", c = ue(e) === "ArrowRight", a = ue(e) === "ArrowDown", o = ue(e) === "Home", p = ue(e) === "End", h = ue(e) === "Enter", u = ue(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || p ? (e.preventDefault(), this.focusLastElement()) : (a || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = r, b < 0))
      return;
    let y;
    if (this.isVertical_ && a || !this.isVertical_ && c)
      this.preventDefaultEvent(e), y = this.focusNextElement(b);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), y = this.focusPrevElement(b);
    else if (o)
      this.preventDefaultEvent(e), y = this.focusFirstElement();
    else if (p)
      this.preventDefaultEvent(e), y = this.focusLastElement();
    else if ((h || u) && i) {
      const v = e.target;
      if (v && v.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== G.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const i = this.adapter.getListItemCount();
    let r = e + 1;
    if (r >= i)
      if (this.wrapFocus_)
        r = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(r), r;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    let i = e - 1;
    if (i < 0)
      if (this.wrapFocus_)
        i = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(i), i;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const e = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(e), e;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(e, i) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !i);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const r = `${e.target.tagName}`.toLowerCase();
    Ss.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== G.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = bt(this.selectedIndex_), n = vs(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const s of n.removed)
        i && this.adapter.setSelectedStateForElementIndex(s, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !1);
      for (const s of n.added)
        i && this.adapter.setSelectedStateForElementIndex(s, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(s, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === G.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Ze.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? Ze.ARIA_CURRENT : Ze.ARIA_SELECTED;
    this.selectedIndex_ !== G.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === G.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== G.UNSET_INDEX ? e = this.selectedIndex_ : Oe(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let i = !1;
        for (const r of e)
          if (i = this.isIndexInRange_(r), i)
            break;
        return i;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === G.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const i = this.adapter.getListItemCount();
    return e >= 0 && e < i;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, i, r) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(G.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const s = bt(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function xs(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const Je = (t) => t.hasAttribute("mwc-list-item");
function _s() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class J extends Pt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Ht, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = xs(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      _s.call(this), e(i);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const e = await super.getUpdateComplete();
    return await this.itemsReady, e;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var e;
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [], r = [];
    for (const c of i)
      Je(c) && (r.push(c), c._managingList = this), c.hasAttribute("divider") && !c.hasAttribute("role") && c.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((c, a) => {
      this.itemRoles ? c.setAttribute("role", this.itemRoles) : c.removeAttribute("role"), c.selected && n.add(a);
    }), this.multi)
      this.select(n);
    else {
      const c = n.size ? n.entries().next().value[1] : -1;
      this.select(c);
    }
    const s = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(s);
  }
  get selected() {
    const e = this.index;
    if (!Oe(e))
      return e === -1 ? null : this.items[e];
    const i = [];
    for (const r of e)
      i.push(this.items[r]);
    return i;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, i = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return l`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${we(e)}"
          aria-label="${we(i)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `;
  }
  renderPlaceholder() {
    var e;
    const i = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && i.length === 0 ? l`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, i);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, i);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const i = this.getIndexOfTarget(e), r = e.target, n = Je(r);
      this.mdcFoundation.handleKeydown(e, n, i);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let i = this.getIndexOfTarget(e);
      if (i === -1 && (this.layout(), i = this.getIndexOfTarget(e), i === -1) || this.items[i].disabled)
        return;
      const n = e.detail.selected, s = e.detail.source;
      this.mdcFoundation.handleSingleSelection(i, s === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const i = this.items, r = e.composedPath();
    for (const n of r) {
      let s = -1;
      if (Or(n) && Je(n) && (s = i.indexOf(n)), s !== -1)
        return s;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, i) => {
        if (!this.mdcRoot)
          return "";
        const n = this.items[e];
        return n ? n.getAttribute(i) : "";
      },
      setAttributeForElementIndex: (e, i, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(i, r);
      },
      focusItemAtIndex: (e) => {
        const i = this.items[e];
        i && i.focus();
      },
      setTabIndexForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.tabindex = i);
      },
      notifyAction: (e) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: e };
        const r = new CustomEvent("action", i);
        this.dispatchEvent(r);
      },
      notifySelected: (e, i) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: e, diff: i };
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => Vr(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.disabled = i);
      },
      getDisabledStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.selected = i);
      },
      getSelectedStateForElementIndex: (e) => {
        const i = this.items[e];
        return i ? i.selected : !1;
      },
      setActivatedStateForElementIndex: (e, i) => {
        const r = this.items[e];
        r && (r.activated = i);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, i = !1) {
    const r = this.items[e];
    r && (r.selected = !0, r.activated = i);
  }
  deselectUi(e) {
    const i = this.items[e];
    i && (i.selected = !1, i.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, i) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, i);
  }
  onListItemConnected(e) {
    const i = e.target;
    this.layout(this.items.indexOf(i) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const i = this.items[0];
    for (const r of this.items)
      r.tabindex = -1;
    i && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = i) : i.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Li();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (Je(r))
        return this.items.indexOf(r);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const i of this.items)
      if (i.tabindex === 0) {
        i.tabindex = -1;
        break;
      }
    this.items[e].tabindex = 0, this.items[e].focus();
  }
  focus() {
    const e = this.mdcRoot;
    e && e.focus();
  }
  blur() {
    const e = this.mdcRoot;
    e && e.blur();
  }
}
m([
  d({ type: String })
], J.prototype, "emptyMessage", void 0);
m([
  F(".mdc-deprecated-list")
], J.prototype, "mdcRoot", void 0);
m([
  _i("", !0, "*")
], J.prototype, "assignedElements", void 0);
m([
  _i("", !0, '[tabindex="0"]')
], J.prototype, "tabbableElements", void 0);
m([
  d({ type: Boolean }),
  ye(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], J.prototype, "activatable", void 0);
m([
  d({ type: Boolean }),
  ye(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], J.prototype, "multi", void 0);
m([
  d({ type: Boolean }),
  ye(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], J.prototype, "wrapFocus", void 0);
m([
  d({ type: String }),
  ye(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], J.prototype, "itemRoles", void 0);
m([
  d({ type: String })
], J.prototype, "innerRole", void 0);
m([
  d({ type: String })
], J.prototype, "innerAriaLabel", void 0);
m([
  d({ type: Boolean })
], J.prototype, "rootTabbable", void 0);
m([
  d({ type: Boolean, reflect: !0 }),
  ye(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], J.prototype, "noninteractive", void 0);
var ks = Object.defineProperty, As = Object.getOwnPropertyDescriptor, $e = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? As(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && ks(e, i, n), n;
};
function Tt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof Q ? t : Tt(t.parentElement);
}
function ws(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((a) => a.innerText).join(`
`), n = t.value, s = (i + r + n).toUpperCase(), c = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  c.length === 1 && c[0] === "" || c.every((a) => new RegExp(
    `*${a}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? Tt(t).classList.remove("hidden") : Tt(t).classList.add("hidden");
}
let Q = class extends J {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Te);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Te).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Te).some((t) => t.selected);
  }
  onCheckAll() {
    const t = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = t);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (t) => ws(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? l`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : l``;
  }
  render() {
    return l`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? L("filter")}"
          ><mwc-textfield
            label="${this.searchFieldLabel ?? ""}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      ${super.render()}`;
  }
};
Q.styles = te`
    ${ki(hr.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
$e([
  d({ type: String })
], Q.prototype, "searchFieldLabel", 2);
$e([
  d({ type: Boolean })
], Q.prototype, "disableCheckAll", 2);
$e([
  w()
], Q.prototype, "existCheckListItem", 1);
$e([
  w()
], Q.prototype, "isAllSelected", 1);
$e([
  w()
], Q.prototype, "isSomeSelected", 1);
$e([
  F("mwc-textfield")
], Q.prototype, "searchField", 2);
Q = $e([
  B("filtered-list")
], Q);
var Cs = Object.defineProperty, Is = Object.getOwnPropertyDescriptor, Ue = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Is(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Cs(e, i, n), n;
};
let Ie = class extends Q {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const t = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => t.push(e.value)) : t.push(this.selected.value), this.dispatchEvent(Es(t)));
  }
  render() {
    return l`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : L("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${L("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
Ie.styles = te`
    ${ki(Q.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
Ue([
  d()
], Ie.prototype, "header", 2);
Ue([
  d()
], Ie.prototype, "icon", 2);
Ue([
  d({ type: Boolean })
], Ie.prototype, "disabled", 2);
Ue([
  F("#filterDialog")
], Ie.prototype, "filterDialog", 2);
Ie = Ue([
  B("oscd-filter-button")
], Ie);
function Es(t, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: t, ...e?.detail }
  });
}
var $s = Object.defineProperty, Ds = Object.getOwnPropertyDescriptor, Le = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ds(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && $s(e, i, n), n;
};
function Ts(t) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: t }
  });
}
let be = class extends ie {
  constructor() {
    super(...arguments), this.labels = [], this.selectedLabels = [];
  }
  get filteredItems() {
    if (this.items)
      return this.labels.length === this.selectedLabels.length ? this.items : this.items.filter((t) => Array.from(t.querySelectorAll("Label") ?? []).map((i) => i.textContent).filter((i) => !!i).filter((i) => this.selectedLabels.includes(i)).length > 0);
  }
  firstUpdated() {
    this.fetchData();
  }
  updated(t) {
    super.updated(t), t.has("type") && (this.items = void 0, this.labels = [], this.selectedLabels = [], this.fetchData());
  }
  fetchData() {
    this.type && Ut().listScls(this.type).then((t) => {
      this.items = Array.from(t.querySelectorAll("Item") ?? []), this.labels = Array.from(
        new Set(
          Array.from(t.querySelectorAll("Label") ?? []).map((e) => e.textContent).filter((e) => !!e).sort((e, i) => e.localeCompare(i))
        )
      ), this.selectedLabels = this.labels;
    });
  }
  render() {
    if (!this.items)
      return l` <compas-loading></compas-loading> `;
    if (this.items?.length <= 0)
      return l` <mwc-list>
        <mwc-list-item><i>${N("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    const t = this.filteredItems;
    return l`
      <div class="filters">
        <span>${N("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${N("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems, this.requestUpdate("items"), this.requestUpdate("filteredItems"), this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((e) => l` <mwc-check-list-item
              value="${e}"
              ?selected="${this.selectedLabels.includes(e)}"
            >
              ${e}
            </mwc-check-list-item>`)}
        </oscd-filter-button>
      </div>
      ${t && t.length > 0 ? l` <filtered-list>
            ${t.map((e) => {
      const i = e.getElementsByTagNameNS(X, "Id").item(0).textContent ?? "";
      let r = e.getElementsByTagNameNS(X, "Name").item(0).textContent ?? "";
      r === "" && (r = i);
      const n = e.getElementsByTagNameNS(X, "Version").item(0).textContent ?? "";
      return l` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(Ts(i))}
              >
                ${r} (${n})
              </mwc-list-item>`;
    })}
          </filtered-list>` : l` <mwc-list>
            <mwc-list-item>
              <i>${N("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
be.styles = te`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
Le([
  d()
], be.prototype, "type", 2);
Le([
  w()
], be.prototype, "items", 2);
Le([
  w()
], be.prototype, "labels", 2);
Le([
  w()
], be.prototype, "selectedLabels", 2);
Le([
  w()
], be.prototype, "filteredItems", 1);
be = Le([
  B("compas-scl-list")
], be);
const Ls = "compas_scl";
function Rs(t, e) {
  return t.querySelector(`:scope > Private[type="${e}"]`);
}
function Ns(t) {
  return t?.querySelector(":scope > SclName") ?? null;
}
function Fs(t) {
  return t?.querySelector(":scope > SclFileType") ?? null;
}
function Ps(t) {
  const e = t.querySelector(":scope > Header"), i = Rs(t, Ls), r = e?.getAttribute("version") ?? "", n = Ns(i)?.textContent ?? "", s = Fs(i)?.textContent ?? "SCD";
  let c = n;
  return c === "" && (c = e?.getAttribute("id") ?? ""), c += "-" + r + "." + s?.toLowerCase(), c;
}
var Os = Object.defineProperty, Ms = Object.getOwnPropertyDescriptor, lt = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ms(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Os(e, i, n), n;
};
function hi(t, e, i, r) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: t, doc: e, docName: i, docId: r }
  });
}
let Me = class extends ie {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(t) {
    const e = await Ut().getSclDocument(this, this.selectedType ?? "", t ?? "").catch((i) => ps(this, i));
    if (e instanceof Document) {
      const i = Ps(e.documentElement);
      this.dispatchEvent(hi(!1, e, i, t));
    }
  }
  async getSclFile(t) {
    const e = t.target?.files?.item(0) ?? !1;
    if (!e) return;
    const i = await e.text(), r = e.name, n = new DOMParser().parseFromString(i, "application/xml");
    this.dispatchEvent(hi(!0, n, r));
  }
  renderFileSelect() {
    return l`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(t) => this.dispatchEvent(Ye(this.getSclFile(t)))}
      />

      <mwc-button
        label="${N("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "", this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return l`
      <p>${N("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(t) => this.selectedType = t.detail.type}
      />
    `;
  }
  renderSclList() {
    return l`
      <p>${N("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(t) => this.dispatchEvent(
      Ye(
        this.getSclDocument(t.detail.docId)
      )
    )}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${N("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return l`
      ${this.allowLocalFile ? l`<wizard-divider></wizard-divider>
            <section>
              <h3>${N("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : pr}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${N("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
lt([
  d()
], Me.prototype, "selectedType", 2);
lt([
  d()
], Me.prototype, "allowLocalFile", 2);
lt([
  F("#scl-file")
], Me.prototype, "sclFileUI", 2);
Me = lt([
  B("compas-open")
], Me);
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
const fi = (t, e) => {
  const i = t.startNode.parentNode, r = e === void 0 ? t.endNode : e.startNode, n = i.insertBefore(Ae(), r);
  i.insertBefore(Ae(), r);
  const s = new ct(t.options);
  return s.insertAfterNode(n), s;
}, _e = (t, e) => (t.setValue(e), t.commit(), t), yt = (t, e, i) => {
  const r = t.startNode.parentNode, n = i ? i.startNode : t.endNode, s = e.endNode.nextSibling;
  s !== n && Cr(r, e.startNode, s, n);
}, vt = (t) => {
  Ei(t.startNode.parentNode, t.startNode, t.endNode.nextSibling);
}, gi = (t, e, i) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= i; n++)
    r.set(t[n], n);
  return r;
}, bi = /* @__PURE__ */ new WeakMap(), yi = /* @__PURE__ */ new WeakMap(), Qe = nt((t, e, i) => {
  let r;
  return i === void 0 ? i = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof ct))
      throw new Error("repeat can only be used in text bindings");
    const s = bi.get(n) || [], c = yi.get(n) || [], a = [], o = [], p = [];
    let h = 0;
    for (const C of t)
      p[h] = r ? r(C, h) : h, o[h] = i(C, h), h++;
    let u, b, y = 0, v = s.length - 1, x = 0, A = o.length - 1;
    for (; y <= v && x <= A; )
      if (s[y] === null)
        y++;
      else if (s[v] === null)
        v--;
      else if (c[y] === p[x])
        a[x] = _e(s[y], o[x]), y++, x++;
      else if (c[v] === p[A])
        a[A] = _e(s[v], o[A]), v--, A--;
      else if (c[y] === p[A])
        a[A] = _e(s[y], o[A]), yt(n, s[y], a[A + 1]), y++, A--;
      else if (c[v] === p[x])
        a[x] = _e(s[v], o[x]), yt(n, s[v], s[y]), v--, x++;
      else if (u === void 0 && (u = gi(p, x, A), b = gi(c, y, v)), !u.has(c[y]))
        vt(s[y]), y++;
      else if (!u.has(c[v]))
        vt(s[v]), v--;
      else {
        const C = b.get(p[x]), V = C !== void 0 ? s[C] : null;
        if (V === null) {
          const de = fi(n, s[y]);
          _e(de, o[x]), a[x] = de;
        } else
          a[x] = _e(V, o[x]), yt(n, V, s[y]), s[C] = null;
        x++;
      }
    for (; x <= A; ) {
      const C = fi(n, a[A + 1]);
      _e(C, o[x]), a[x++] = C;
    }
    for (; y <= v; ) {
      const C = s[y++];
      C !== null && vt(C);
    }
    bi.set(n, a), yi.set(n, p);
  };
}), Vs = Rt`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H15V9H11V11H15V13H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Us = Rt`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, Hs = Rt`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ce = /* @__PURE__ */ new Map();
Ce.set("Attribute", Us);
Ce.set("Content", Hs);
Ce.set("Element", Vs);
function rt(t, e, i) {
  const r = e === t ? ":scope" : Object.keys(i).find(
    (n) => Array.from(
      e.querySelectorAll(n)
    ).includes(t)
  );
  return r ? i[r] : void 0;
}
function Lt(t, e) {
  if (!e || !e.full)
    return !1;
  const i = e.full;
  return typeof i == "boolean" ? i : i(t);
}
function Bs(t, e, i) {
  if (!i || !i.attributes || !i.attributes[e])
    return !1;
  const r = i.attributes[e];
  return typeof r == "boolean" ? r : r(t);
}
function vi(t) {
  const e = E(t);
  return typeof e == "string" ? e : L("unidentifiable");
}
function qs(t, e, i, r) {
  const n = [], s = t.textContent?.trim() ?? "", c = e.textContent?.trim() ?? "";
  t.childElementCount === 0 && e.childElementCount === 0 && s !== c && (Lt(
    t,
    rt(
      t,
      r,
      i
    )
  ) || n.push([
    "value",
    { type: "Content", newValue: s, oldValue: c }
  ]));
  const a = new Set(
    e.getAttributeNames().concat(t.getAttributeNames())
  );
  for (const o of a)
    !Bs(
      t,
      o,
      rt(
        t,
        r,
        i
      )
    ) && e.getAttribute(o) !== t.getAttribute(o) && n.push([
      o,
      {
        type: "Attribute",
        newValue: t.getAttribute(o),
        oldValue: e.getAttribute(o)
      }
    ]);
  return n;
}
function Si(t) {
  let e = E(t);
  return typeof e == "string" && (e = e.split(">").pop() ?? ""), e;
}
function zs(t, e) {
  return t.tagName === e.tagName && Si(t) === Si(e);
}
function Gs(t, e, i, r, n) {
  const s = [], c = Array.from(t.children), a = Array.from(e.children);
  return c.forEach((o) => {
    if (!o.closest("Private") && !Lt(
      o,
      rt(
        o,
        r,
        i
      )
    )) {
      const h = a.findIndex(
        (b) => zs(o, b)
      ), u = h > -1 ? a[h] : null;
      u ? (a.splice(h, 1), s.push({
        type: "Element",
        newValue: o,
        oldValue: u
      })) : s.push({
        type: "Element",
        newValue: o,
        oldValue: null
      });
    }
  }), a.forEach((o) => {
    o.closest("Private") || Lt(
      o,
      rt(
        o,
        n,
        i
      )
    ) || s.push({
      type: "Element",
      newValue: null,
      oldValue: o
    });
  }), s;
}
function Zi(t, e, i = {}) {
  return js(
    t,
    e,
    i,
    t,
    e
  );
}
function js(t, e, i = {}, r, n) {
  let s = E(t).toString();
  s === "NaN" && (s = void 0), r = r || t, n = n || e;
  const c = qs(
    t,
    e,
    i,
    r
  ), a = Gs(
    t,
    e,
    i,
    r,
    n
  ), o = [], p = [];
  a.forEach((u) => {
    !u.oldValue || !u.newValue ? o.push(u) : p.push(u);
  });
  const h = p.map((u) => Zi(u.newValue, u.oldValue, i)).filter((u) => u !== null);
  return h.length > 0 || c.length > 0 || o.length > 0 ? l` ${c.length > 0 || o.length > 0 ? l`<div class="container container--alt">
          <div class="list__container list__container--left">
            <mwc-list multi right nonInteractive>
              ${Qe(
    c,
    (u) => u,
    ([u, b]) => l`<mwc-list-item right twoLine graphic="icon">
                    ${b.oldValue !== null ? l`
                          <span>
                            ${u}:
                            ${b.oldValue === "" ? '""' : b.oldValue}
                          </span>
                          <span slot="secondary">${s}</span>
                          <mwc-icon slot="graphic">
                            ${Ce.get(b.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${Qe(
    o,
    (u) => u,
    (u) => l` <mwc-list-item right twoLine graphic="icon">
                    ${u.oldValue ? l`
                          <span>${u.oldValue.tagName}</span>
                          <span slot="secondary">
                            ${vi(u.oldValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${Ce.get(u.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
          <div class="list__container">
            <mwc-list multi left nonInteractive>
              ${Qe(
    c,
    (u) => u,
    ([u, b]) => l` <mwc-list-item left twoLine graphic="icon">
                    ${b.newValue !== null ? l`
                          <span>
                            ${u}:
                            ${b.newValue === "" ? '""' : b.newValue}
                          </span>
                          <span slot="secondary">${s}</span>
                          <mwc-icon slot="graphic">
                            ${Ce.get(b.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${Qe(
    o,
    (u) => u,
    (u) => l` <mwc-list-item left twoLine graphic="icon">
                    ${u.newValue ? l`
                          <span>${u.newValue.tagName}</span>
                          <span slot="secondary">
                            ${vi(u.newValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${Ce.get(u.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
        </div>` : ""}
    ${h}` : null;
}
var Ws = Object.defineProperty, Xs = Object.getOwnPropertyDescriptor, oe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Xs(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Ws(e, i, n), n;
};
let ee = class extends ie {
  constructor() {
    super(...arguments), this.leftHandTitle = "", this.rightHandTitle = "", this.leftHandSubtitle = "", this.rightHandSubtitle = "", this.filterMutables = !0;
  }
  render() {
    return l`
      ${this.renderFilterCheckbox()}
      <div class="container container--alt">
        <div class="list__container list__container--left">
          <h3 class="mdc-dialog__title">${this.leftHandTitle}</h3>
          ${this.leftHandSubtitle && this.leftHandSubtitle.length > 0 ? l`<h5 class="mdc-dialog__title">${this.leftHandSubtitle}</h5> ` : ""}
        </div>
        <div class="list__container">
          <h3 class="mdc-dialog__title">${this.rightHandTitle}</h3>
          ${this.rightHandSubtitle && this.rightHandSubtitle.length > 0 ? l`<h5 class="mdc-dialog__title">
                ${this.rightHandSubtitle}
              </h5> ` : ""}
        </div>
      </div>
      ${this.leftHandObject && this.rightHandObject ? l`
            ${Zi(
      this.rightHandObject,
      this.leftHandObject,
      this.filterMutables ? this.filterToIgnore : {}
    )}
          ` : ""}
    `;
  }
  renderFilterCheckbox() {
    return this.filterToIgnore ? l`
        <div class="container">
          <div class="flex"></div>
          <mwc-formfield label="${L("compare.filterMutables")}">
            <mwc-checkbox
              ?checked=${this.filterMutables}
              @change=${() => this.filterMutables = !this.filterMutables}
            >
            </mwc-checkbox>
          </mwc-formfield>
        </div>
      ` : l``;
  }
};
ee.styles = te`
    mwc-list-item {
      --mdc-list-item-graphic-margin: 0;
    }

    .mdc-dialog__title {
      padding: 0 16px;
    }

    .container {
      display: flex;
      gap: 4px;
    }

    .container--alt {
      background: var(--base2);
    }

    .list__container {
      width: 50%;
      background: var(--base3);
    }
    .list__container--left {
      text-align: right;
    }
    .flex {
      flex: 1;
    }

    mwc-list-item[right] {
      text-align: right;
      direction: rtl;
    }
  `;
oe([
  d({ type: String })
], ee.prototype, "leftHandTitle", 2);
oe([
  d({ type: String })
], ee.prototype, "rightHandTitle", 2);
oe([
  d({ type: Object })
], ee.prototype, "leftHandObject", 2);
oe([
  d({ type: Object })
], ee.prototype, "rightHandObject", 2);
oe([
  d({ type: Object })
], ee.prototype, "filterToIgnore", 2);
oe([
  d({ type: String })
], ee.prototype, "leftHandSubtitle", 2);
oe([
  d({ type: String })
], ee.prototype, "rightHandSubtitle", 2);
oe([
  w()
], ee.prototype, "filterMutables", 2);
ee = oe([
  B("plain-compare-list")
], ee);
var Ks = Object.defineProperty, Se = (t, e, i, r) => {
  for (var n = void 0, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = c(e, i, n) || n);
  return n && Ks(e, i, n), n;
};
const dt = "LN[lnClass='TCTR']", Bt = "LN[lnClass='TVTR']", He = "SDI[name='setMag'] Val", Ji = "DAI[name='setVal'] Val", xe = {
  ":scope": {
    attributes: {
      name: !0
    }
  },
  P: {
    full: !0
  }
};
xe[`${dt} DOI[name='Rat'] ${He}`] = {
  full: !0
};
xe[`${dt} DOI[name='ARtg'] ${He}`] = {
  full: !0
};
xe[`${dt} DOI[name='ARtgNom'] ${He}`] = {
  full: !0
};
xe[`${dt} DOI[name='ARtgSec'] ${Ji}`] = {
  full: !0
};
xe[`${Bt} DOI[name='VRtg'] ${He}`] = {
  full: !0
};
xe[`${Bt} DOI[name='Rat'] ${He}`] = {
  full: !0
};
xe[`${Bt} DOI[name='VRtgSec'] ${Ji}`] = {
  full: !0
};
class le extends ie {
  constructor() {
    super(...arguments), this.editCount = -1, this.templateDocName = "";
  }
  get ieds() {
    return this.doc ? Array.from(this.doc.querySelectorAll("IED")).filter(et).sort(ui) : [];
  }
  get templateIeds() {
    return this.templateDoc ? Array.from(this.templateDoc.querySelectorAll("IED")).filter(et).sort(ui) : [];
  }
  async run() {
    this.dialog.open = !0;
  }
  onClosed() {
    this.templateDoc = void 0, this.selectedProjectIed = void 0, this.selectedTemplateIed = void 0;
  }
  getSelectedListItem(e, i) {
    const n = this.shadowRoot.querySelector(`mwc-list[id='${i}']`).selected?.value;
    if (n)
      return ns(e, "IED", n) ?? void 0;
  }
  async getTemplateFile(e) {
    const i = e.target?.files?.item(0) ?? !1;
    if (!i) return;
    this.templateDocName = i.name;
    const r = await i.text();
    this.templateDoc = new DOMParser().parseFromString(
      r,
      "application/xml"
    ), this.templateFileUI.onchange = null;
  }
  renderSelectIedButton() {
    return l`<mwc-button
      slot="primaryAction"
      icon="arrow_back"
      trailingIcon
      label="${L("compare-ied.selectIedButton")}"
      @click=${() => {
      this.selectedProjectIed = void 0, this.selectedTemplateIed = void 0;
    }}
    ></mwc-button>`;
  }
  renderCompareButton() {
    return l`<mwc-button
      slot="primaryAction"
      icon="compare_arrows"
      trailingIcon
      label="${L("compare.compareButton")}"
      @click=${() => {
      this.selectedProjectIed = this.getSelectedListItem(
        this.doc,
        "currentDocument"
      ), this.selectedTemplateIed = this.getSelectedListItem(
        this.templateDoc,
        "currentTemplate"
      );
    }}
    ></mwc-button>`;
  }
  renderCloseButton() {
    return l`<mwc-button
      slot="secondaryAction"
      dialogAction="close"
      label="${L("close")}"
      style="--mdc-theme-primary: var(--mdc-theme-error)"
    ></mwc-button>`;
  }
  renderCompare() {
    const e = E(this.selectedProjectIed), i = E(this.selectedTemplateIed);
    return l`<plain-compare-list
        .leftHandObject=${this.selectedProjectIed}
        .rightHandObject=${this.selectedTemplateIed}
        .leftHandTitle=${typeof e == "number" ? "" : e}
        .rightHandTitle=${typeof i == "number" ? "" : i}
        .leftHandSubtitle=${this.docName}
        .rightHandSubtitle=${this.templateDocName}
        .filterToIgnore=${xe}
      ></plain-compare-list>
      ${this.renderSelectIedButton()} ${this.renderCloseButton()}`;
  }
  renderIEDList(e, i) {
    return l`<mwc-list id="${i}" activatable>
      ${e.map((r) => {
      const n = rn(r);
      return l`<mwc-list-item value="${E(r)}" left>
          <span>${n}</span>
        </mwc-list-item>`;
    })}
    </mwc-list>`;
  }
  renderIEDLists() {
    return l`<div class="splitContainer">
        <div>
          <div>${L("compare-ied.projectIedTitle")}</div>
          <div class="iedList">
            ${this.renderIEDList(this.ieds, "currentDocument")}
          </div>
        </div>
        <div>
          <div>${L("compare-ied.templateIedTitle")}</div>
          <div class="iedList">
            ${this.renderIEDList(this.templateIeds, "currentTemplate")}
          </div>
        </div>
      </div>
      ${this.renderCompareButton()} ${this.renderCloseButton()}`;
  }
  renderSelectTemplateFile() {
    return l`<div>
        <input
          id="template-file"
          accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
          type="file"
          hidden
          required
          @change=${(e) => this.dispatchEvent(Ye(this.getTemplateFile(e)))}
        />

        <mwc-button
          label="${L("compare-ied.selectTemplateButton")}"
          @click=${() => {
      this.shadowRoot.querySelector("#template-file")?.click();
    }}
        ></mwc-button>
      </div>
      ${this.renderCloseButton()}`;
  }
  renderDialog(e, i) {
    return l`<mwc-dialog heading="${i}" @closed=${this.onClosed}>
      ${e}
    </mwc-dialog>`;
  }
  render() {
    return this.doc ? this.selectedProjectIed && this.selectedTemplateIed ? this.renderDialog(
      this.renderCompare(),
      L("compare-ied.resultTitle")
    ) : this.templateDoc ? this.renderDialog(
      this.renderIEDLists(),
      L("compare-ied.selectIedTitle")
    ) : this.renderDialog(
      this.renderSelectTemplateFile(),
      L("compare-ied.selectProjectTitle")
    ) : l``;
  }
  static {
    this.styles = te`
    mwc-dialog {
      --mdc-dialog-min-width: 64vw;
    }

    .splitContainer {
      display: flex;
      padding: 8px 6px 16px;
      height: 64vh;
    }

    .iedList {
      flex: 50%;
      margin: 0px 6px 0px;
      min-width: 300px;
      height: 100%;
      overflow-y: auto;
    }

    .resultTitle {
      font-weight: bold;
    }
  `;
  }
}
Se([
  d({ attribute: !1 })
], le.prototype, "doc");
Se([
  d({ type: Number })
], le.prototype, "editCount");
Se([
  d({ attribute: !1 })
], le.prototype, "templateDoc");
Se([
  d({ attribute: !1 })
], le.prototype, "selectedProjectIed");
Se([
  d({ attribute: !1 })
], le.prototype, "selectedTemplateIed");
Se([
  F("mwc-dialog")
], le.prototype, "dialog");
Se([
  F("#template-file")
], le.prototype, "templateFileUI");
Se([
  d({ attribute: !1 })
], le.prototype, "docName");
class uc extends le {
  /**
   * Overwriting the render function for opening the template project.
   * Now it will also be possible to select the template project from the CoMPAS Data Service.
   *
   * @override
   */
  renderSelectTemplateFile() {
    return l`<compas-open
        @doc-retrieved=${(e) => {
      this.templateDoc = e.detail.doc;
    }}
      ></compas-open>
      ${this.renderCloseButton()}`;
  }
}
export {
  uc as default
};
