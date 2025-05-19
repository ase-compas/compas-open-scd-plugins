import { LitElement as I, query as v, property as n, state as m, html as d, css as R, customElement as _, queryAsync as vt, eventOptions as ei, queryAssignedNodes as ti, unsafeCSS as ii } from "lit-element";
import { NodePart as ki, AttributePart as Si, directive as ri, nothing as si } from "lit-html";
import "@material/mwc-button";
import "@material/mwc-dialog";
import { TextField as wi } from "@material/mwc-textfield";
import { Select as Ei } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-formfield";
import { List as Ci } from "@material/mwc-list";
import "@material/mwc-icon";
const Ai = 1e3 * 60, Dt = "langChanged";
function Ii(i, e, t) {
  return Object.entries(Ye(e || {})).reduce((r, [s, c]) => r.replace(new RegExp(`{{[  ]*${s}[  ]*}}`, "gm"), String(Ye(c))), i);
}
function Ri(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function Ye(i) {
  return typeof i == "function" ? i() : i;
}
const Ti = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: Ri,
  interpolate: Ii,
  translationCache: {}
});
let Li = Ti();
function Di(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(Dt, t, e), () => window.removeEventListener(Dt, t);
}
function G(i, e, t = Li) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? Ye(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function ci(i) {
  return i instanceof ki ? i.startNode.isConnected : i instanceof Si ? i.committer.element.isConnected : i.element.isConnected;
}
function Fi(i) {
  for (const [e] of i)
    ci(e) || i.delete(e);
}
function $i(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function Oi(i, e) {
  setInterval(() => $i(() => Fi(i)), e);
}
const yt = /* @__PURE__ */ new Map();
function Ni() {
  Di((i) => {
    for (const [e, t] of yt)
      ci(e) && ai(e, t, i);
  });
}
Ni();
Oi(yt, Ai);
function ai(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
const Pi = ri((i) => (e) => {
  yt.set(e, i), ai(e, i);
}), f = (i, e, t) => Pi(() => G(i, e, t));
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
const oi = /* @__PURE__ */ new WeakMap(), Ve = (i) => (...e) => {
  const t = i(...e);
  return oi.set(t, !0), t;
}, et = (i) => typeof i == "function" && oi.has(i);
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
const Ft = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Mi = (i, e, t = null, r = null) => {
  for (; e !== t; ) {
    const s = e.nextSibling;
    i.insertBefore(e, r), e = s;
  }
}, ni = (i, e, t = null) => {
  for (; e !== t; ) {
    const r = e.nextSibling;
    i.removeChild(e), e = r;
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
const Se = {}, $t = {};
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
const _t = `{{lit-${String(Math.random()).slice(2)}}}`, Ui = `<!--${_t}-->`, zi = "$lit$", Bi = (i) => i.index !== -1, le = () => document.createComment(""), Hi = (
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
class Ot {
  constructor(e, t, r) {
    this.__parts = [], this.template = e, this.processor = t, this.options = r;
  }
  update(e) {
    let t = 0;
    for (const r of this.__parts)
      r !== void 0 && r.setValue(e[t]), t++;
    for (const r of this.__parts)
      r !== void 0 && r.commit();
  }
  _clone() {
    const e = Ft ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, s = document.createTreeWalker(e, 133, null, !1);
    let c = 0, a = 0, l, p = s.nextNode();
    for (; c < r.length; ) {
      if (l = r[c], !Bi(l)) {
        this.__parts.push(void 0), c++;
        continue;
      }
      for (; a < l.index; )
        a++, p.nodeName === "TEMPLATE" && (t.push(p), s.currentNode = p.content), (p = s.nextNode()) === null && (s.currentNode = t.pop(), p = s.nextNode());
      if (l.type === "node") {
        const u = this.processor.handleTextExpression(this.options);
        u.insertAfterNode(p.previousSibling), this.__parts.push(u);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(p, l.name, l.strings, this.options));
      c++;
    }
    return Ft && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Nt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), Vi = ` ${_t} `;
class qi {
  constructor(e, t, r, s) {
    this.strings = e, this.values = t, this.type = r, this.processor = s;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", r = !1;
    for (let s = 0; s < e; s++) {
      const c = this.strings[s], a = c.lastIndexOf("<!--");
      r = (a > -1 || r) && c.indexOf("-->", a + 1) === -1;
      const l = Hi.exec(c);
      l === null ? t += c + (r ? Vi : Ui) : t += c.substr(0, l.index) + l[1] + l[2] + zi + l[3] + _t;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Nt !== void 0 && (t = Nt.createHTML(t)), e.innerHTML = t, e;
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
const di = (i) => i === null || !(typeof i == "object" || typeof i == "function"), Gi = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class qe {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Se && (!di(e) || e !== this.value) && (this.value = e, et(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; et(this.value); ) {
      const e = this.value;
      this.value = Se, e(this);
    }
    this.value !== Se && this.committer.commit();
  }
}
class Ge {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(le()), this.endNode = e.appendChild(le());
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
    e.__insert(this.startNode = le()), e.__insert(this.endNode = le());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = le()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; et(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = Se, t(this);
    }
    const e = this.__pendingValue;
    e !== Se && (di(e) ? e !== this.value && this.__commitText(e) : e instanceof qi ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Gi(e) ? this.__commitIterable(e) : e === $t ? (this.value = $t, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const t = this.startNode.nextSibling;
    e = e ?? "";
    const r = typeof e == "string" ? e : String(e);
    t === this.endNode.previousSibling && t.nodeType === 3 ? t.data = r : this.__commitNode(document.createTextNode(r)), this.value = e;
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof Ot && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new Ot(t, e.processor, this.options), s = r._clone();
      r.update(e.values), this.__commitNode(s), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, s;
    for (const c of e)
      s = t[r], s === void 0 && (s = new Ge(this.options), t.push(s), r === 0 ? s.appendIntoPart(this) : s.insertAfterPart(t[r - 1])), s.setValue(c), s.commit(), r++;
    r < t.length && (t.length = r, this.clear(s && s.endNode));
  }
  clear(e = this.startNode) {
    ni(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class li extends qe {
}
let Wi = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Wi = !0, !1;
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
function ze(i, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: i, ...e?.detail }
  });
}
function ke(i, e) {
  let t = "", r = "";
  return e || (e = "	"), i.split(/>\s*</).forEach(function(s) {
    s.match(/^\/\w/) && (r = r.substring(e.length)), t += r + "<" + s + `>\r
`, s.match(/^<?\w[^>]*[^/]$/) && (r += e);
  }), t.substring(1, t.length - 3);
}
function ji(i, e) {
  if (i) {
    const t = new Blob(
      [ke(new XMLSerializer().serializeToString(i))],
      {
        type: "application/xml"
      }
    ), r = document.createElement("a");
    r.download = e, r.href = URL.createObjectURL(t), r.dataset.downloadurl = ["application/xml", r.download, r.href].join(":"), r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(function() {
      URL.revokeObjectURL(r.href);
    }, 5e3);
  }
}
var tt = function(i, e) {
  return tt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
  }, tt(i, e);
};
function pi(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  tt(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var pe = function() {
  return pe = Object.assign || function(e) {
    for (var t, r = 1, s = arguments.length; r < s; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, pe.apply(this, arguments);
};
function o(i, e, t, r) {
  var s = arguments.length, c = s < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(i, e, t, r);
  else for (var l = i.length - 1; l >= 0; l--) (a = i[l]) && (c = (s < 3 ? a(c) : s > 3 ? a(e, t, c) : a(e, t)) || c);
  return s > 3 && c && Object.defineProperty(e, t, c), c;
}
function $e(i) {
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
function Xi(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ki = (i) => i.nodeType === Node.ELEMENT_NODE;
function Zi(i) {
  return {
    addClass: (e) => {
      i.classList.add(e);
    },
    removeClass: (e) => {
      i.classList.remove(e);
    },
    hasClass: (e) => i.classList.contains(e)
  };
}
const mi = () => {
}, Ji = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", mi, Ji);
document.removeEventListener("x", mi);
const hi = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, Qi = (i) => {
  const e = hi();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let s = [];
  const c = (a) => {
    s = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", c), t.dispatchEvent(r), document.body.removeEventListener("check-if-focused", c), s.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class xt extends I {
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
var kt = (
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
var Yi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, er = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Pt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function tr(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, s = e.y, c = r + t.left, a = s + t.top, l, p;
  if (i.type === "touchstart") {
    var u = i;
    l = u.changedTouches[0].pageX - c, p = u.changedTouches[0].pageY - a;
  } else {
    var b = i;
    l = b.pageX - c, p = b.pageY - a;
  }
  return { x: l, y: p };
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
var Mt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ut = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Oe = [], ir = (
  /** @class */
  function(i) {
    pi(e, i);
    function e(t) {
      var r = i.call(this, pe(pe({}, e.defaultAdapter), t)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(s) {
        r.activateImpl(s);
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
        return Yi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return er;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Pt;
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
        var s = e.cssClasses, c = s.ROOT, a = s.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(c), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, s = r.ROOT, c = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(s), t.adapter.removeClass(c), t.removeCssVars();
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
      var r, s;
      if (t) {
        try {
          for (var c = $e(Mt), a = c.next(); !a.done; a = c.next()) {
            var l = a.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            a && !a.done && (s = c.return) && s.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var r, s;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var c = $e(Ut), a = c.next(); !a.done; a = c.next()) {
            var l = a.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            a && !a.done && (s = c.return) && s.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var s = $e(Mt), c = s.next(); !c.done; c = s.next()) {
          var a = c.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (l) {
        t = { error: l };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var s = $e(Ut), c = s.next(); !c.done; c = s.next()) {
          var a = c.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (l) {
        t = { error: l };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, s = Object.keys(r);
      s.forEach(function(c) {
        c.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[c], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var s = this.activationState;
        if (!s.isActivated) {
          var c = this.previousActivationEvent, a = c && t !== void 0 && c.type !== t.type;
          if (!a) {
            s.isActivated = !0, s.isProgrammatic = t === void 0, s.activationEvent = t, s.wasActivatedByPointer = s.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var l = t !== void 0 && Oe.length > 0 && Oe.some(function(p) {
              return r.adapter.containsEventTarget(p);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Oe.push(t.target), this.registerDeactivationHandlers(t)), s.wasElementMadeActive = this.checkElementMadeActive(t), s.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Oe = [], !s.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (s.wasElementMadeActive = r.checkElementMadeActive(t), s.wasElementMadeActive && r.animateActivation()), s.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, s = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, a = e.cssClasses, l = a.FG_DEACTIVATION, p = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var b = "", V = "";
      if (!this.adapter.isUnbounded()) {
        var O = this.getFgTranslationCoordinates(), g = O.startPoint, x = O.endPoint;
        b = g.x + "px, " + g.y + "px", V = x.x + "px, " + x.y + "px";
      }
      this.adapter.updateCssVariable(s, b), this.adapter.updateCssVariable(c, V), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(p), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, s = t.wasActivatedByPointer, c;
      s ? c = tr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, c = {
        x: c.x - this.initialSize / 2,
        y: c.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: c, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, s = this.activationState, c = s.hasDeactivationUXRun, a = s.isActivated, l = c || !a;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, Pt.FG_DEACTIVATION_MS));
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
        var s = pe({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(s);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(s), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var r = t.wasActivatedByPointer, s = t.wasElementMadeActive;
      (r || s) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), s = function() {
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : s();
      var c = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && c % 2 !== 0 ? this.initialSize = c - 1 : this.initialSize = c, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, s = t.VAR_LEFT, c = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(s, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(c, this.unboundedCoords.top + "px"));
    }, e;
  }(kt)
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
class rr {
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
const zt = /* @__PURE__ */ new WeakMap(), ye = Ve((i) => (e) => {
  if (!(e instanceof qe) || e instanceof li || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let s = zt.get(e);
  s === void 0 && (r.setAttribute("class", t.strings.join(" ")), zt.set(e, s = /* @__PURE__ */ new Set()));
  const c = r.classList || new rr(r);
  s.forEach((a) => {
    a in i || (c.remove(a), s.delete(a));
  });
  for (const a in i) {
    const l = i[a];
    l != s.has(a) && (l ? (c.add(a), s.add(a)) : (c.remove(a), s.delete(a)));
  }
  typeof c.commit == "function" && c.commit();
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
const Bt = /* @__PURE__ */ new WeakMap(), sr = Ve((i) => (e) => {
  if (!(e instanceof qe) || e instanceof li || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let s = Bt.get(e);
  s === void 0 && (r.cssText = t.strings.join(" "), Bt.set(e, s = /* @__PURE__ */ new Set())), s.forEach((c) => {
    c in i || (s.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in i)
    s.add(c), c.indexOf("-") === -1 ? r[c] = i[c] : r.setProperty(c, i[c]);
});
class S extends xt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = ir;
  }
  get isActive() {
    return Xi(this.parentElement || this, ":active");
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
    return d`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ye(r)}"
          style="${sr({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
o([
  v(".mdc-ripple-surface")
], S.prototype, "mdcRoot", void 0);
o([
  n({ type: Boolean })
], S.prototype, "primary", void 0);
o([
  n({ type: Boolean })
], S.prototype, "accent", void 0);
o([
  n({ type: Boolean })
], S.prototype, "unbounded", void 0);
o([
  n({ type: Boolean })
], S.prototype, "disabled", void 0);
o([
  n({ type: Boolean })
], S.prototype, "activated", void 0);
o([
  n({ type: Boolean })
], S.prototype, "selected", void 0);
o([
  n({ type: Boolean })
], S.prototype, "internalUseStateLayerCustomProperties", void 0);
o([
  m()
], S.prototype, "hovering", void 0);
o([
  m()
], S.prototype, "bgFocused", void 0);
o([
  m()
], S.prototype, "fgActivation", void 0);
o([
  m()
], S.prototype, "fgDeactivation", void 0);
o([
  m()
], S.prototype, "fgScale", void 0);
o([
  m()
], S.prototype, "fgSize", void 0);
o([
  m()
], S.prototype, "translateStart", void 0);
o([
  m()
], S.prototype, "translateEnd", void 0);
o([
  m()
], S.prototype, "leftPos", void 0);
o([
  m()
], S.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const cr = R`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let it = class extends S {
};
it.styles = [cr];
it = o([
  _("mwc-ripple")
], it);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const j = (i) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, t) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (s, c) => e.constructor._observers.set(c, s)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(s) {
        r.call(this, s), s.forEach((c, a) => {
          const p = this.constructor._observers.get(a);
          p !== void 0 && p.call(this, this[a], c);
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
class St {
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
class w extends I {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new St(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), t = this.graphic ? this.renderGraphic() : d``, r = this.hasMeta ? this.renderMeta() : d``;
    return d`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? d`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? d`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return d`
      <span class="mdc-deprecated-list-item__graphic material-icons ${ye(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return d`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return d`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return d`<slot></slot>`;
  }
  renderTwoline() {
    return d`
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
o([
  v("slot")
], w.prototype, "slotElement", void 0);
o([
  vt("mwc-ripple")
], w.prototype, "ripple", void 0);
o([
  n({ type: String })
], w.prototype, "value", void 0);
o([
  n({ type: String, reflect: !0 })
], w.prototype, "group", void 0);
o([
  n({ type: Number, reflect: !0 })
], w.prototype, "tabindex", void 0);
o([
  n({ type: Boolean, reflect: !0 }),
  j(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], w.prototype, "disabled", void 0);
o([
  n({ type: Boolean, reflect: !0 })
], w.prototype, "twoline", void 0);
o([
  n({ type: Boolean, reflect: !0 })
], w.prototype, "activated", void 0);
o([
  n({ type: String, reflect: !0 })
], w.prototype, "graphic", void 0);
o([
  n({ type: Boolean })
], w.prototype, "multipleGraphics", void 0);
o([
  n({ type: Boolean })
], w.prototype, "hasMeta", void 0);
o([
  n({ type: Boolean, reflect: !0 }),
  j(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], w.prototype, "noninteractive", void 0);
o([
  n({ type: Boolean, reflect: !0 }),
  j(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], w.prototype, "selected", void 0);
o([
  m()
], w.prototype, "shouldRenderRipple", void 0);
o([
  m()
], w.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wt = R`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let rt = class extends w {
};
rt.styles = [wt];
rt = o([
  _("mwc-list-item")
], rt);
var ar = Object.defineProperty, or = Object.getOwnPropertyDescriptor, H = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? or(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && ar(e, t, s), s;
};
let P = class extends wi {
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(G("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? d`<div style="position:relative;">
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
      </div>` : d``;
  }
  renderMulplierList() {
    return d`${this.multipliers.map(
      (i) => d`<mwc-list-item ?selected=${i === this.multiplier}
          >${i === null ? G("textfield.noMultiplier") : i}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
H([
  n({ type: Boolean })
], P.prototype, "nullable", 2);
H([
  n({ type: Array })
], P.prototype, "multipliers", 2);
H([
  n({ type: String })
], P.prototype, "multiplier", 1);
H([
  n({ type: String })
], P.prototype, "unit", 2);
H([
  m()
], P.prototype, "null", 1);
H([
  n({ type: String })
], P.prototype, "maybeValue", 1);
H([
  n({ type: String })
], P.prototype, "defaultValue", 2);
H([
  n({ type: Array })
], P.prototype, "reservedValues", 2);
H([
  v("mwc-switch")
], P.prototype, "nullSwitch", 2);
H([
  v("mwc-menu")
], P.prototype, "multiplierMenu", 2);
H([
  v("mwc-icon-button")
], P.prototype, "multiplierButton", 2);
P = H([
  _("wizard-textfield")
], P);
var nr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, ue = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? dr(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && nr(e, t, s), s;
};
let se = class extends Ei {
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
ue([
  n({ type: Boolean })
], se.prototype, "nullable", 2);
ue([
  m()
], se.prototype, "null", 1);
ue([
  n({ type: String })
], se.prototype, "maybeValue", 1);
ue([
  n({ type: String })
], se.prototype, "defaultValue", 2);
ue([
  n({ type: Array })
], se.prototype, "reservedValues", 2);
ue([
  v("mwc-switch")
], se.prototype, "nullSwitch", 2);
se = ue([
  _("wizard-select")
], se);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function lr(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const l = `__${e}`;
    if (t = r.getPropertyDescriptor(e, l), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const s = t;
  let c = "";
  if (!s.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(l) {
      c === "" && (c = r.getPropertyOptions(e).attribute), this.hasAttribute(c) && this.removeAttribute(c), s.set.call(this, l);
    }
  };
  return s.get && (a.get = function() {
    return s.get.call(this);
  }), a;
}
function Te(i, e, t) {
  if (e !== void 0)
    return lr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Et extends xt {
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
Et.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const Xe = /* @__PURE__ */ new WeakMap(), q = Ve((i) => (e) => {
  const t = Xe.get(e);
  if (i === void 0 && e instanceof qe) {
    if (t !== void 0 || !Xe.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  Xe.set(e, i);
});
class E extends Et {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new St(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), s = e.get("disabled");
    if (t !== void 0 || r !== void 0 || s !== void 0) {
      const c = this.calculateAnimationStateName(!!r, !!t, !!s), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${c}-${a}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, t, r) {
    return r ? "disabled" : t ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`<mwc-ripple
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
    return d`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${ye(t)}">
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
o([
  v(".mdc-checkbox")
], E.prototype, "mdcRoot", void 0);
o([
  v("input")
], E.prototype, "formElement", void 0);
o([
  n({ type: Boolean, reflect: !0 })
], E.prototype, "checked", void 0);
o([
  n({ type: Boolean })
], E.prototype, "indeterminate", void 0);
o([
  n({ type: Boolean, reflect: !0 })
], E.prototype, "disabled", void 0);
o([
  n({ type: String, reflect: !0 })
], E.prototype, "name", void 0);
o([
  n({ type: String })
], E.prototype, "value", void 0);
o([
  Te,
  n({ type: String, attribute: "aria-label" })
], E.prototype, "ariaLabel", void 0);
o([
  Te,
  n({ type: String, attribute: "aria-labelledby" })
], E.prototype, "ariaLabelledBy", void 0);
o([
  Te,
  n({ type: String, attribute: "aria-describedby" })
], E.prototype, "ariaDescribedBy", void 0);
o([
  n({ type: Boolean })
], E.prototype, "reducedTouchTarget", void 0);
o([
  m()
], E.prototype, "animationClass", void 0);
o([
  m()
], E.prototype, "shouldRenderRipple", void 0);
o([
  m()
], E.prototype, "focused", void 0);
o([
  m()
], E.prototype, "useStateLayerCustomProperties", void 0);
o([
  vt("mwc-ripple")
], E.prototype, "ripple", void 0);
o([
  ei({ passive: !0 })
], E.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const pr = R`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let st = class extends E {
};
st.styles = [pr];
st = o([
  _("mwc-checkbox")
], st);
var mr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, M = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? hr(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && mr(e, t, s), s;
};
let F = class extends I {
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
    return this.nullable ? d`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : d``;
  }
  render() {
    return d`
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
M([
  n({ type: String })
], F.prototype, "label", 2);
M([
  n({ type: String })
], F.prototype, "helper", 2);
M([
  n({ type: Boolean })
], F.prototype, "nullable", 2);
M([
  n({ type: Boolean })
], F.prototype, "defaultChecked", 2);
M([
  n({ type: String })
], F.prototype, "maybeValue", 1);
M([
  n({ type: Boolean })
], F.prototype, "disabled", 2);
M([
  m()
], F.prototype, "null", 1);
M([
  m()
], F.prototype, "checked", 1);
M([
  m()
], F.prototype, "deactivateCheckbox", 2);
M([
  m()
], F.prototype, "formfieldLabel", 1);
M([
  v("mwc-switch")
], F.prototype, "nullSwitch", 2);
M([
  v("mwc-checkbox")
], F.prototype, "checkbox", 2);
F = M([
  _("wizard-checkbox")
], F);
function ur(i, e) {
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: null, ...e?.detail }
  });
}
const fr = [
  "TransformerWinding",
  "ConductingEquipment"
], br = [
  "GeneralEquipment",
  "PowerTransformer",
  ...fr
], gr = ["Substation", "VoltageLevel", "Bay"], vr = ["Process", "Line"], yr = ["EqSubFunction", "EqFunction"], _r = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...br,
  ...gr,
  ...vr,
  ...yr
], xr = ["ConnectivityNode", ..._r], kr = ["GOOSESecurity", "SMVSecurity"], Sr = ["SubNetwork", ...kr, ...xr], wr = ["BDA", "DA"], Er = ["SampledValueControl", "GSEControl"], Cr = ["LogControl", "ReportControl"], Ar = [...Er, ...Cr], Ir = ["GSE", "SMV"], Rr = [
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
  ...Ar,
  ...Ir,
  ...wr
], Tr = ["LN0", "LN"], Lr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Dr = ["Subject", "IssuerName"], Fr = ["MinTime", "MaxTime"], $r = ["LNodeType", "DOType", "DAType", "EnumType"], Or = [
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
], Nr = ["DynDataSet", "ConfDataSet"], Pr = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Nr
], Mr = ["ConfLogControl", "ConfSigRef"], Ur = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], zr = ["SCL", ...Sr, ...Rr, ...$r], Br = [
  ...zr,
  ...Lr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Dr,
  ...Fr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Tr,
  ...Or,
  "DynAssociation",
  "SettingGroups",
  ...Pr,
  ...Mr,
  ...Ur,
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
new Set(Br);
ri((i) => (e) => {
  Object.keys(i).length ? e.setValue(i) : e.setValue("");
});
const Hr = 99;
Array(Hr).fill(1).map((i, e) => `${e + 1}`);
var Vr = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, ui = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? qr(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && Vr(e, t, s), s;
};
function J() {
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
    setCompasSetting(i, e) {
      localStorage.setItem(i, e);
    },
    getCompasSetting(i) {
      return localStorage.getItem(i) ?? this.defaultSettings[i];
    }
  };
}
let Be = class extends I {
  get compasSettings() {
    return J().compasSettings;
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
    return this.valid() ? (J().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), J().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), J().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), J().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), J().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), J().setCompasSetting(
      "useWebsockets",
      this.getUseWebsockets().checked ? "on" : "off"
    ), !0) : !1;
  }
  reset() {
    return Object.keys(this.compasSettings).forEach(
      (i) => localStorage.removeItem(i)
    ), !0;
  }
  close() {
    this.dispatchEvent(ur());
  }
  render() {
    return d` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${f("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${f("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${f("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${f("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${f("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${f("compas.settings.useWebsockets")}">
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
        ${f("reset")}
      </mwc-button>`;
  }
};
Be.styles = R`
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
ui([
  n()
], Be.prototype, "compasSettings", 1);
Be = ui([
  _("compas-settings")
], Be);
function Ct(i, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...i, ...e?.detail }
  });
}
const fi = "NotFoundError", bi = "ApplicationError", At = "ServerError", Ht = "https://www.lfenergy.org/compas/commons/v1";
async function X(i) {
  if (!i.ok) {
    let e = bi;
    return i.status === 404 ? e = fi : i.status >= 500 && (e = At), Promise.reject({
      type: e,
      status: i.status,
      message: await Gr(i)
    });
  }
  return Promise.resolve(i.text());
}
async function Gr(i) {
  const e = await i.text(), t = await Q(e);
  return gi(t) ?? i.statusText;
}
function gi(i) {
  const e = Array.from(
    i.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let t = "";
    return e.forEach((r, s) => {
      const c = r.getElementsByTagNameNS(Ht, "Code").item(0).textContent, a = r.getElementsByTagNameNS(Ht, "Message").item(0).textContent;
      s > 0 && (t += ", "), t += a, c && (t += " (" + c + ")");
    }), t;
  }
}
function Q(i) {
  return Promise.resolve(
    new DOMParser().parseFromString(i, "application/xml")
  );
}
function te(i) {
  const e = i.querySelectorAll("SclData").item(0).textContent ?? "", t = new DOMParser().parseFromString(
    e,
    "application/xml"
  );
  return Promise.resolve(t);
}
function K(i) {
  return Promise.reject({ type: At, message: i.message });
}
function ct(i, e) {
  let t = e.message;
  e.status && (t += " (" + e.status + ")"), i && i.dispatchEvent(
    Ct({
      kind: "error",
      title: G("compas.error.server"),
      message: G("compas.error.serverDetails", {
        type: e.type,
        message: t
      })
    })
  );
}
function Ne(i) {
  return i.startsWith("http://") || i.startsWith("https://") ? i.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + Wr() + i;
}
function Wr() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function Pe(i, e, t, r) {
  let s;
  function c(l) {
    return new Promise((p) => setTimeout(p, l));
  }
  async function a() {
    for (; s !== void 0; )
      await c(250);
  }
  return new Promise((l, p) => {
    s = new WebSocket(t), s.onopen = () => {
      s?.send(r);
    }, s.onmessage = (u) => {
      Q(u.data).then((b) => {
        if (b.documentElement.localName === "ErrorResponse") {
          const V = gi(b);
          p({ type: bi, message: V });
        } else
          l(b);
        s?.close();
      }).catch((b) => {
        p(b), s?.close();
      });
    }, s.onerror = () => {
      p({
        type: At,
        message: `Websocket Error in service "${e}"`
      }), s?.close();
    }, s.onclose = () => {
      s = void 0;
    }, i.dispatchEvent(ze(a()));
  });
}
const A = "https://www.lfenergy.org/compas/SclDataService/v1";
var we = /* @__PURE__ */ ((i) => (i.MAJOR = "MAJOR", i.MINOR = "MINOR", i.PATCH = "PATCH", i))(we || {});
function me() {
  function i() {
    return J().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return J().useWebsockets();
  }
  function t() {
    const r = i() + "/common/v1/type/list";
    return fetch(r).catch(K).then(X).then(Q);
  }
  return {
    listOrderedSclTypes() {
      return t().then((r) => Array.from(r.querySelectorAll("*|Type") ?? []).sort(
        (s, c) => {
          const a = s.getElementsByTagNameNS(A, "Description").item(0).textContent ?? "", l = c.getElementsByTagNameNS(A, "Description").item(0).textContent ?? "";
          return a.localeCompare(l);
        }
      ));
    },
    listScls(r) {
      const s = i() + "/scl/v1/" + r + "/list";
      return fetch(s).catch(K).then(X).then(Q);
    },
    listSclVersions(r, s) {
      const c = i() + "/scl/v1/" + r + "/" + s + "/versions";
      return fetch(c).catch(K).then(X).then(Q);
    },
    getSclDocument(r, s, c) {
      if (e()) {
        const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${A}">
           <sds:Id>${c}</sds:Id>
         </sds:GetWsRequest>`, p = i() + "/scl-ws/v1/" + s + "/get";
        return Pe(
          r,
          "CompasSclDataService",
          Ne(p),
          l
        ).then(te);
      }
      const a = i() + "/scl/v1/" + s + "/" + c;
      return fetch(a).catch(K).then(X).then(Q).then(te);
    },
    getSclDocumentVersion(r, s, c, a) {
      if (e()) {
        const p = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${A}">
           <sds:Id>${c}</sds:Id>
           <sds:Version>${a}</sds:Version>
         </sds:GetVersionWsRequest>`, u = i() + "/scl-ws/v1/" + s + "/get-version";
        return Pe(
          r,
          "CompasSclDataService",
          Ne(u),
          p
        ).then(te);
      }
      const l = i() + "/scl/v1/" + s + "/" + c + "/" + a;
      return fetch(l).catch(K).then(X).then(Q).then(te);
    },
    deleteSclDocumentVersion(r, s, c) {
      const a = i() + "/scl/v1/" + r + "/" + s + "/" + c;
      return fetch(a, { method: "DELETE" }).catch(K).then(X);
    },
    deleteSclDocument(r, s) {
      const c = i() + "/scl/v1/" + r + "/" + s;
      return fetch(c, { method: "DELETE" }).catch(K).then(X);
    },
    addSclDocument(r, s, c) {
      if (e()) {
        const p = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${A}">
           <sds:Name>${c.sclName}</sds:Name>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ke(
          new XMLSerializer().serializeToString(c.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, u = i() + "/scl-ws/v1/" + s + "/create";
        return Pe(
          r,
          "CompasSclDataService",
          Ne(u),
          p
        ).then(te);
      }
      const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${A}">
            <sds:Name>${c.sclName}</sds:Name>
            <sds:Comment>${c.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${ke(
        new XMLSerializer().serializeToString(c.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, l = i() + "/scl/v1/" + s;
      return fetch(l, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: a
      }).catch(K).then(X).then(Q).then(te);
    },
    updateSclDocument(r, s, c, a) {
      if (e()) {
        const u = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${A}">
           <sds:Id>${c}</sds:Id>
           <sds:ChangeSet>${a.changeSet}</sds:ChangeSet>
           <sds:Comment>${a.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ke(
          new XMLSerializer().serializeToString(a.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, b = i() + "/scl-ws/v1/" + s + "/update";
        return Pe(
          r,
          "CompasSclDataService",
          Ne(b),
          u
        ).then(te);
      }
      const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${A}">
           <sds:ChangeSet>${a.changeSet}</sds:ChangeSet>
           <sds:Comment>${a.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ke(
        new XMLSerializer().serializeToString(a.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, p = i() + "/scl/v1/" + s + "/" + c;
      return fetch(p, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: l
      }).catch(K).then(X).then(Q).then(te);
    }
  };
}
var jr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, vi = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Xr(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && jr(e, t, s), s;
};
let He = class extends I {
  render() {
    return d` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? d`<h4 class="header">${this.header}</h4>` : d``;
  }
  renderSeparator() {
    return d`<div role="separator"></div>`;
  }
};
He.styles = R`
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
vi([
  n({
    type: String
  })
], He.prototype, "header", 2);
He = vi([
  _("wizard-divider")
], He);
var Kr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, yi = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Zr(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && Kr(e, t, s), s;
};
function Jr(i) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: i }
  });
}
let at = class extends I {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    me().listOrderedSclTypes().then((i) => this.sclTypes = i);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? d` <mwc-list>
        <mwc-list-item><i>${f("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : d` <mwc-list>
      ${this.sclTypes.map((i) => {
      const e = i.getElementsByTagNameNS(A, "Code").item(0).textContent ?? "", t = i.getElementsByTagNameNS(A, "Description").item(0).textContent ?? "";
      return d`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(Jr(e))}
        >
          <span>${t} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : d` <compas-loading></compas-loading> `;
  }
};
yi([
  n()
], at.prototype, "sclTypes", 2);
at = yi([
  _("compas-scltype-list")
], at);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Le extends w {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, s = this.hasMeta && this.left ? this.renderMeta() : d``, c = this.renderRipple();
    return d`
      ${c}
      ${r}
      ${this.left ? "" : t}
      <span class=${ye(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? t : ""}
      ${s}`;
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
o([
  v("slot")
], Le.prototype, "slotElement", void 0);
o([
  v("mwc-checkbox")
], Le.prototype, "checkboxElement", void 0);
o([
  n({ type: Boolean })
], Le.prototype, "left", void 0);
o([
  n({ type: String, reflect: !0 })
], Le.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _i = R`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ge = class extends Le {
};
ge.styles = [wt, _i];
ge = o([
  _("mwc-check-list-item")
], ge);
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
var h = {
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
}, T = /* @__PURE__ */ new Set();
T.add(h.BACKSPACE);
T.add(h.ENTER);
T.add(h.SPACEBAR);
T.add(h.PAGE_UP);
T.add(h.PAGE_DOWN);
T.add(h.END);
T.add(h.HOME);
T.add(h.ARROW_LEFT);
T.add(h.ARROW_UP);
T.add(h.ARROW_RIGHT);
T.add(h.ARROW_DOWN);
T.add(h.DELETE);
T.add(h.ESCAPE);
T.add(h.TAB);
var $ = {
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
}, L = /* @__PURE__ */ new Map();
L.set($.BACKSPACE, h.BACKSPACE);
L.set($.ENTER, h.ENTER);
L.set($.SPACEBAR, h.SPACEBAR);
L.set($.PAGE_UP, h.PAGE_UP);
L.set($.PAGE_DOWN, h.PAGE_DOWN);
L.set($.END, h.END);
L.set($.HOME, h.HOME);
L.set($.ARROW_LEFT, h.ARROW_LEFT);
L.set($.ARROW_UP, h.ARROW_UP);
L.set($.ARROW_RIGHT, h.ARROW_RIGHT);
L.set($.ARROW_DOWN, h.ARROW_DOWN);
L.set($.DELETE, h.DELETE);
L.set($.ESCAPE, h.ESCAPE);
L.set($.TAB, h.TAB);
var oe = /* @__PURE__ */ new Set();
oe.add(h.PAGE_UP);
oe.add(h.PAGE_DOWN);
oe.add(h.END);
oe.add(h.HOME);
oe.add(h.ARROW_LEFT);
oe.add(h.ARROW_UP);
oe.add(h.ARROW_RIGHT);
oe.add(h.ARROW_DOWN);
function ie(i) {
  var e = i.key;
  if (T.has(e))
    return e;
  var t = L.get(i.keyCode);
  return t || h.UNKNOWN;
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
var re, Z, y = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
re = {}, re["" + y.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", re["" + y.LIST_ITEM_CLASS] = "mdc-list-item", re["" + y.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", re["" + y.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", re["" + y.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", re["" + y.ROOT] = "mdc-list";
var be = (Z = {}, Z["" + y.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Z["" + y.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Z["" + y.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Z["" + y.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Z["" + y.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Z["" + y.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Z["" + y.ROOT] = "mdc-deprecated-list", Z), Me = {
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
    .` + y.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + y.LIST_ITEM_CLASS + ` a,
    .` + be[y.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + be[y.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + y.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + y.LIST_ITEM_CLASS + ` a,
    .` + y.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + y.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + be[y.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + be[y.LIST_ITEM_CLASS] + ` a,
    .` + be[y.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + be[y.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, D = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ot = (i, e) => i - e, Qr = (i, e) => {
  const t = Array.from(i), r = Array.from(e), s = { added: [], removed: [] }, c = t.sort(ot), a = r.sort(ot);
  let l = 0, p = 0;
  for (; l < c.length || p < a.length; ) {
    const u = c[l], b = a[p];
    if (u === b) {
      l++, p++;
      continue;
    }
    if (u !== void 0 && (b === void 0 || u < b)) {
      s.removed.push(u), l++;
      continue;
    }
    if (b !== void 0 && (u === void 0 || b < u)) {
      s.added.push(b), p++;
      continue;
    }
  }
  return s;
}, Yr = ["input", "button", "textarea", "select"];
function Ee(i) {
  return i instanceof Set;
}
const Ke = (i) => {
  const e = i === D.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return Ee(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class It extends kt {
  constructor(e) {
    super(Object.assign(Object.assign({}, It.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = D.UNSET_INDEX, this.focusedItemIndex_ = D.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Me;
  }
  static get numbers() {
    return D;
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
    const t = this.selectedIndex_;
    if (e) {
      if (!Ee(t)) {
        const r = t === D.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Ee(t))
      if (t.size) {
        const r = Array.from(t).sort(ot);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = D.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Ke(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, t) {
    t >= 0 && this.adapter.setTabIndexForElementIndex(t, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, t, r) {
    const s = ie(e) === "ArrowLeft", c = ie(e) === "ArrowUp", a = ie(e) === "ArrowRight", l = ie(e) === "ArrowDown", p = ie(e) === "Home", u = ie(e) === "End", b = ie(e) === "Enter", V = ie(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      c || u ? (e.preventDefault(), this.focusLastElement()) : (l || p) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let O = this.adapter.getFocusedElementIndex();
    if (O === -1 && (O = r, O < 0))
      return;
    let g;
    if (this.isVertical_ && l || !this.isVertical_ && a)
      this.preventDefaultEvent(e), g = this.focusNextElement(O);
    else if (this.isVertical_ && c || !this.isVertical_ && s)
      this.preventDefaultEvent(e), g = this.focusPrevElement(O);
    else if (p)
      this.preventDefaultEvent(e), g = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(e), g = this.focusLastElement();
    else if ((b || V) && t) {
      const x = e.target;
      if (x && x.tagName === "A" && b)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(O, !0);
    }
    this.focusedItemIndex_ = O, g !== void 0 && (this.setTabindexAtIndex_(g), this.focusedItemIndex_ = g);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, r) {
    e !== D.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const t = this.adapter.getListItemCount();
    let r = e + 1;
    if (r >= t)
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
    let t = e - 1;
    if (t < 0)
      if (this.wrapFocus_)
        t = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(t), t;
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
  setEnabled(e, t) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !t);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const r = `${e.target.tagName}`.toLowerCase();
    Yr.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== D.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const r = Ke(this.selectedIndex_), s = Qr(r, e);
    if (!(!s.removed.length && !s.added.length)) {
      for (const c of s.removed)
        t && this.adapter.setSelectedStateForElementIndex(c, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(c, !1);
      for (const c of s.added)
        t && this.adapter.setSelectedStateForElementIndex(c, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(c, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, s);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === D.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Me.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, r = t ? Me.ARIA_CURRENT : Me.ARIA_SELECTED;
    this.selectedIndex_ !== D.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const s = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, s);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === D.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== D.UNSET_INDEX ? e = this.selectedIndex_ : Ee(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let t = !1;
        for (const r of e)
          if (t = this.isIndexInRange_(r), t)
            break;
        return t;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === D.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const t = this.adapter.getListItemCount();
    return e >= 0 && e < t;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, t, r) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let s = e;
    this.isMulti_ && (s = /* @__PURE__ */ new Set([e])), this.isIndexValid_(s) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, t) : t || r ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(D.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, r = !0) {
    let s = !1;
    t === void 0 ? s = !this.adapter.getSelectedStateForElementIndex(e) : s = t;
    const c = Ke(this.selectedIndex_);
    s ? c.add(e) : c.delete(e), this.setMultiSelectionAtIndex_(c, r);
  }
}
function es(i, e = 50) {
  let t;
  return function(r = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(r);
    }, e);
  };
}
const Ue = (i) => i.hasAttribute("mwc-list-item");
function ts() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class U extends xt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = It, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = es(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      ts.call(this), e(t);
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [], r = [];
    for (const a of t)
      Ue(a) && (r.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = r;
    const s = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, l) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && s.add(l);
    }), this.multi)
      this.select(s);
    else {
      const a = s.size ? s.entries().next().value[1] : -1;
      this.select(a);
    }
    const c = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(c);
  }
  get selected() {
    const e = this.index;
    if (!Ee(e))
      return e === -1 ? null : this.items[e];
    const t = [];
    for (const r of e)
      t.push(this.items[r]);
    return t;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, t = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, r = this.rootTabbable ? "0" : "-1";
    return d`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${q(e)}"
          aria-label="${q(t)}"
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
    const t = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && t.length === 0 ? d`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, t);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, t);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const t = this.getIndexOfTarget(e), r = e.target, s = Ue(r);
      this.mdcFoundation.handleKeydown(e, s, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const s = e.detail.selected, c = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, c === "interaction", s), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, r = e.composedPath();
    for (const s of r) {
      let c = -1;
      if (Ki(s) && Ue(s) && (c = t.indexOf(s)), c !== -1)
        return c;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, t) => {
        if (!this.mdcRoot)
          return "";
        const s = this.items[e];
        return s ? s.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, r) => {
        if (!this.mdcRoot)
          return;
        const s = this.items[e];
        s && s.setAttribute(t, r);
      },
      focusItemAtIndex: (e) => {
        const t = this.items[e];
        t && t.focus();
      },
      setTabIndexForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.tabindex = t);
      },
      notifyAction: (e) => {
        const t = { bubbles: !0, composed: !0 };
        t.detail = { index: e };
        const r = new CustomEvent("action", t);
        this.dispatchEvent(r);
      },
      notifySelected: (e, t) => {
        const r = { bubbles: !0, composed: !0 };
        r.detail = { index: e, diff: t };
        const s = new CustomEvent("selected", r);
        this.dispatchEvent(s);
      },
      isFocusInsideList: () => Qi(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.disabled = t);
      },
      getDisabledStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.selected = t);
      },
      getSelectedStateForElementIndex: (e) => {
        const t = this.items[e];
        return t ? t.selected : !1;
      },
      setActivatedStateForElementIndex: (e, t) => {
        const r = this.items[e];
        r && (r.activated = t);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, t = !1) {
    const r = this.items[e];
    r && (r.selected = !0, r.activated = t);
  }
  deselectUi(e) {
    const t = this.items[e];
    t && (t.selected = !1, t.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, t) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, t);
  }
  onListItemConnected(e) {
    const t = e.target;
    this.layout(this.items.indexOf(t) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const t = this.items[0];
    for (const r of this.items)
      r.tabindex = -1;
    t && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = t) : t.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = hi();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t];
      if (Ue(r))
        return this.items.indexOf(r);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const t of this.items)
      if (t.tabindex === 0) {
        t.tabindex = -1;
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
o([
  n({ type: String })
], U.prototype, "emptyMessage", void 0);
o([
  v(".mdc-deprecated-list")
], U.prototype, "mdcRoot", void 0);
o([
  ti("", !0, "*")
], U.prototype, "assignedElements", void 0);
o([
  ti("", !0, '[tabindex="0"]')
], U.prototype, "tabbableElements", void 0);
o([
  n({ type: Boolean }),
  j(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], U.prototype, "activatable", void 0);
o([
  n({ type: Boolean }),
  j(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], U.prototype, "multi", void 0);
o([
  n({ type: Boolean }),
  j(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], U.prototype, "wrapFocus", void 0);
o([
  n({ type: String }),
  j(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], U.prototype, "itemRoles", void 0);
o([
  n({ type: String })
], U.prototype, "innerRole", void 0);
o([
  n({ type: String })
], U.prototype, "innerAriaLabel", void 0);
o([
  n({ type: Boolean })
], U.prototype, "rootTabbable", void 0);
o([
  n({ type: Boolean, reflect: !0 }),
  j(function(i) {
    var e, t;
    if (i) {
      const r = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], U.prototype, "noninteractive", void 0);
var is = Object.defineProperty, rs = Object.getOwnPropertyDescriptor, fe = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? rs(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && is(e, t, s), s;
};
function nt(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof B ? i : nt(i.parentElement);
}
function ss(i, e) {
  const t = i.innerText + `
`, r = Array.from(i.children).map((l) => l.innerText).join(`
`), s = i.value, c = (t + r + s).toUpperCase(), a = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((l) => new RegExp(
    `*${l}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(c)) ? nt(i).classList.remove("hidden") : nt(i).classList.add("hidden");
}
let B = class extends U {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((i) => i instanceof ge);
  }
  get isAllSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof ge).every((i) => i.selected);
  }
  get isSomeSelected() {
    return this.items.filter((i) => !i.disabled).filter((i) => i instanceof ge).some((i) => i.selected);
  }
  onCheckAll() {
    const i = !this.isAllSelected;
    this.items.filter((e) => !e.disabled && !e.classList.contains("hidden")).forEach((e) => e.selected = i);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (i) => ss(i, this.searchField.value)
    );
  }
  onListItemConnected(i) {
    super.onListItemConnected(i), this.requestUpdate();
  }
  update(i) {
    super.update(i), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? d`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : d``;
  }
  render() {
    return d`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? G("filter")}"
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
B.styles = R`
    ${ii(Ci.styles)}

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
fe([
  n({ type: String })
], B.prototype, "searchFieldLabel", 2);
fe([
  n({ type: Boolean })
], B.prototype, "disableCheckAll", 2);
fe([
  m()
], B.prototype, "existCheckListItem", 1);
fe([
  m()
], B.prototype, "isAllSelected", 1);
fe([
  m()
], B.prototype, "isSomeSelected", 1);
fe([
  v("mwc-textfield")
], B.prototype, "searchField", 2);
B = fe([
  _("filtered-list")
], B);
var cs = Object.defineProperty, as = Object.getOwnPropertyDescriptor, De = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? as(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && cs(e, t, s), s;
};
let he = class extends B {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const i = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => i.push(e.value)) : i.push(this.selected.value), this.dispatchEvent(os(i)));
  }
  render() {
    return d`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : G("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${G("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
he.styles = R`
    ${ii(B.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
De([
  n()
], he.prototype, "header", 2);
De([
  n()
], he.prototype, "icon", 2);
De([
  n({ type: Boolean })
], he.prototype, "disabled", 2);
De([
  v("#filterDialog")
], he.prototype, "filterDialog", 2);
he = De([
  _("oscd-filter-button")
], he);
function os(i, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: i, ...e?.detail }
  });
}
var ns = Object.defineProperty, ds = Object.getOwnPropertyDescriptor, _e = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ds(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && ns(e, t, s), s;
};
function ls(i) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: i }
  });
}
let ce = class extends I {
  constructor() {
    super(...arguments), this.labels = [], this.selectedLabels = [];
  }
  get filteredItems() {
    if (this.items)
      return this.labels.length === this.selectedLabels.length ? this.items : this.items.filter((i) => Array.from(i.querySelectorAll("Label") ?? []).map((t) => t.textContent).filter((t) => !!t).filter((t) => this.selectedLabels.includes(t)).length > 0);
  }
  firstUpdated() {
    this.fetchData();
  }
  updated(i) {
    super.updated(i), i.has("type") && (this.items = void 0, this.labels = [], this.selectedLabels = [], this.fetchData());
  }
  fetchData() {
    this.type && me().listScls(this.type).then((i) => {
      this.items = Array.from(i.querySelectorAll("Item") ?? []), this.labels = Array.from(
        new Set(
          Array.from(i.querySelectorAll("Label") ?? []).map((e) => e.textContent).filter((e) => !!e).sort((e, t) => e.localeCompare(t))
        )
      ), this.selectedLabels = this.labels;
    });
  }
  render() {
    if (!this.items)
      return d` <compas-loading></compas-loading> `;
    if (this.items?.length <= 0)
      return d` <mwc-list>
        <mwc-list-item><i>${f("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    const i = this.filteredItems;
    return d`
      <div class="filters">
        <span>${f("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${f("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems, this.requestUpdate("items"), this.requestUpdate("filteredItems"), this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((e) => d` <mwc-check-list-item
              value="${e}"
              ?selected="${this.selectedLabels.includes(e)}"
            >
              ${e}
            </mwc-check-list-item>`)}
        </oscd-filter-button>
      </div>
      ${i && i.length > 0 ? d` <filtered-list>
            ${i.map((e) => {
      const t = e.getElementsByTagNameNS(A, "Id").item(0).textContent ?? "";
      let r = e.getElementsByTagNameNS(A, "Name").item(0).textContent ?? "";
      r === "" && (r = t);
      const s = e.getElementsByTagNameNS(A, "Version").item(0).textContent ?? "";
      return d` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(ls(t))}
              >
                ${r} (${s})
              </mwc-list-item>`;
    })}
          </filtered-list>` : d` <mwc-list>
            <mwc-list-item>
              <i>${f("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
ce.styles = R`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
_e([
  n()
], ce.prototype, "type", 2);
_e([
  m()
], ce.prototype, "items", 2);
_e([
  m()
], ce.prototype, "labels", 2);
_e([
  m()
], ce.prototype, "selectedLabels", 2);
_e([
  m()
], ce.prototype, "filteredItems", 1);
ce = _e([
  _("compas-scl-list")
], ce);
function ps(i, e, t) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { doc: i, docName: e, ...t?.detail }
  });
}
const ms = "http://www.iec.ch/61850/2003/SCL", Ce = "https://www.lfenergy.org/compas/extension/v1", dt = "compas", ve = "compas_scl", Vt = 20;
function Ae(i, e) {
  return i.querySelector(`:scope > Private[type="${e}"]`);
}
function hs(i, e) {
  const t = i.ownerDocument.createElementNS(
    ms,
    "Private"
  );
  return t.setAttribute("type", e), t;
}
function lt(i) {
  return i?.querySelector(":scope > SclName") ?? null;
}
function us(i, e) {
  if (i && e) {
    const t = lt(i), r = lt(e);
    r && t ? r.textContent = t.textContent : r && (r.textContent = "");
  }
}
function pt(i) {
  return i?.querySelector(":scope > SclFileType") ?? null;
}
function fs(i, e) {
  if (i && e) {
    const t = pt(i), r = pt(e);
    r && t ? r.textContent = t.textContent : r && (r.textContent = "");
  }
}
function mt(i) {
  return Array.from(i.querySelectorAll(":scope > Labels")).find(
    (e) => e.namespaceURI === Ce
  ) ?? null;
}
function bs(i) {
  return ys(
    i,
    Ce,
    dt
  ), i.ownerDocument.createElementNS(
    Ce,
    dt + ":Labels"
  );
}
function gs(i, e) {
  const t = i.ownerDocument.createElementNS(
    Ce,
    dt + ":Label"
  );
  return t.textContent = e, i.append(t), t;
}
function vs(i, e) {
  if (i && e) {
    const t = mt(i), r = mt(e);
    r && e.removeChild(r), t && e.appendChild(
      e.ownerDocument.adoptNode(t.cloneNode(!0))
    );
  }
}
function ys(i, e, t) {
  const r = i.ownerDocument.firstElementChild;
  r.hasAttribute("xmlns:" + t) || r.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:" + t,
    e
  );
}
const ht = 3;
function ut(i) {
  if (i.lastIndexOf(".") == i.length - (ht + 1))
    return i.substring(i.lastIndexOf(".") + 1).toUpperCase();
  throw new Error(G("compas.error.type"));
}
function qt(i) {
  let e = i;
  return e.length > ht && e.lastIndexOf(".") == e.length - (ht + 1) && (e = e.substring(0, e.lastIndexOf("."))), e;
}
function xi(i) {
  const e = i.querySelector(":scope > Header"), t = Ae(i, ve), r = e?.getAttribute("version") ?? "", s = lt(t)?.textContent ?? "", c = pt(t)?.textContent ?? "SCD";
  let a = s;
  return a === "" && (a = e?.getAttribute("id") ?? ""), a += "-" + r + "." + c?.toLowerCase(), a;
}
function _s(i, e, t) {
  const s = e.querySelector(":root > Header")?.getAttribute("id") ?? "";
  i.dispatchEvent(Ct({ kind: "reset" })), i.dispatchEvent(
    ps(
      e,
      xi(e.documentElement),
      { detail: { docId: s } }
    )
  );
}
var xs = Object.defineProperty, ks = Object.getOwnPropertyDescriptor, We = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ks(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && xs(e, t, s), s;
};
function Gt(i, e, t, r) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: i, doc: e, docName: t, docId: r }
  });
}
let Ie = class extends I {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(i) {
    const e = await me().getSclDocument(this, this.selectedType ?? "", i ?? "").catch((t) => ct(this, t));
    if (e instanceof Document) {
      const t = xi(e.documentElement);
      this.dispatchEvent(Gt(!1, e, t, i));
    }
  }
  async getSclFile(i) {
    const e = i.target?.files?.item(0) ?? !1;
    if (!e) return;
    const t = await e.text(), r = e.name, s = new DOMParser().parseFromString(t, "application/xml");
    this.dispatchEvent(Gt(!0, s, r));
  }
  renderFileSelect() {
    return d`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(i) => this.dispatchEvent(ze(this.getSclFile(i)))}
      />

      <mwc-button
        label="${f("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "", this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return d`
      <p>${f("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(i) => this.selectedType = i.detail.type}
      />
    `;
  }
  renderSclList() {
    return d`
      <p>${f("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(i) => this.dispatchEvent(
      ze(
        this.getSclDocument(i.detail.docId)
      )
    )}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${f("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return d`
      ${this.allowLocalFile ? d`<wizard-divider></wizard-divider>
            <section>
              <h3>${f("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : si}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${f("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
We([
  n()
], Ie.prototype, "selectedType", 2);
We([
  n()
], Ie.prototype, "allowLocalFile", 2);
We([
  v("#scl-file")
], Ie.prototype, "sclFileUI", 2);
Ie = We([
  _("compas-open")
], Ie);
var Ss = Object.defineProperty, Ze = (i, e, t, r) => {
  for (var s = void 0, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = a(e, t, s) || s);
  return s && Ss(e, t, s), s;
};
function ws(i) {
  class e extends i {
    firstUpdated() {
      this.checkExistInCompas();
    }
    updated(r) {
      super.updated(r), r.has("docId") && (this.existInCompas = void 0, this.checkExistInCompas());
    }
    callService(r, s) {
      return me().listSclVersions(r, s);
    }
    checkExistInCompas() {
      if (this.docId) {
        const r = ut(this.docName);
        this.callService(r, this.docId).then(() => this.existInCompas = !0).catch((s) => {
          s.type === fi && (this.existInCompas = !1);
        });
      } else
        this.existInCompas = !1;
    }
  }
  return Ze([
    n()
  ], e.prototype, "docName"), Ze([
    n()
  ], e.prototype, "docId"), Ze([
    m()
  ], e.prototype, "existInCompas"), e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Wt = Symbol("selection controller");
class Es {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class Rt {
  constructor(e) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (t) => {
      this.keyDownHandler(t);
    }), e.addEventListener("mousedown", () => {
      this.mousedownHandler();
    }), e.addEventListener("mouseup", () => {
      this.mouseupHandler();
    });
  }
  /**
   * Get a controller for the given element. If no controller exists, one will
   * be created. Defaults to getting the controller scoped to the element's root
   * node shadow root unless `element.global` is true. Then, it will get a
   * `window.document`-scoped controller.
   *
   * @param element Element from which to get / create a SelectionController. If
   *     `element.global` is true, it gets a selection controller scoped to
   *     `window.document`.
   */
  static getController(e) {
    const r = !("global" in e) || "global" in e && e.global ? document : e.getRootNode();
    let s = r[Wt];
    return s === void 0 && (s = new Rt(r), r[Wt] = s), s;
  }
  keyDownHandler(e) {
    const t = e.target;
    "checked" in t && this.has(t) && (e.key == "ArrowRight" || e.key == "ArrowDown" ? this.selectNext(t) : (e.key == "ArrowLeft" || e.key == "ArrowUp") && this.selectPrevious(t));
  }
  mousedownHandler() {
    this.mouseIsDown = !0;
  }
  mouseupHandler() {
    this.mouseIsDown = !1;
  }
  /**
   * Whether or not the controller controls  the given element.
   *
   * @param element element to check
   */
  has(e) {
    return this.getSet(e.name).set.has(e);
  }
  /**
   * Selects and returns the controlled element previous to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which preceding element is fetched
   */
  selectPrevious(e) {
    const t = this.getOrdered(e), r = t.indexOf(e), s = t[r - 1] || t[t.length - 1];
    return this.select(s), s;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(e) {
    const t = this.getOrdered(e), r = t.indexOf(e), s = t[r + 1] || t[0];
    return this.select(s), s;
  }
  select(e) {
    e.click();
  }
  /**
   * Focuses the selected element in the given element's selection set. User's
   * mouse selection will override this focus.
   *
   * @param element Element from which selection set is derived and subsequently
   *     focused.
   * @deprecated update() method now handles focus management by setting
   *     appropriate tabindex to form element.
   */
  focus(e) {
    if (this.mouseIsDown)
      return;
    const t = this.getSet(e.name), r = this.focusedSet;
    this.focusedSet = t, r != t && t.selected && t.selected != e && t.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(e) {
    const t = this.getSet(e.name);
    for (const r of t.set)
      if (r.checked)
        return !0;
    return !1;
  }
  /**
   * Returns the elements in the given element's selection set in document
   * position order.
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element Element from which selection set is derived and subsequently
   *     ordered.
   */
  getOrdered(e) {
    const t = this.getSet(e.name);
    return t.ordered || (t.ordered = Array.from(t.set), t.ordered.sort((r, s) => r.compareDocumentPosition(s) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), t.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new Es()), this.sets[e];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(e) {
    const t = e.name || e.getAttribute("name") || "", r = this.getSet(t);
    r.set.add(e), r.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(e) {
    const t = this.getSet(e.name);
    t.set.delete(e), t.ordered = null, t.selected == e && (t.selected = null);
  }
  /**
   * Unselects other elements in element's set if element is checked. Noop
   * otherwise.
   *
   * @param element Element from which to calculate selection controller update.
   */
  update(e) {
    if (this.updating)
      return;
    this.updating = !0;
    const t = this.getSet(e.name);
    if (e.checked) {
      for (const r of t.set)
        r != e && (r.checked = !1);
      t.selected = e;
    }
    if (this.isAnySelected(e))
      for (const r of t.set) {
        if (r.formElementTabIndex === void 0)
          break;
        r.formElementTabIndex = r.checked ? 0 : -1;
      }
    this.updating = !1;
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
var Cs = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, As = {
  DISABLED: "mdc-radio--disabled",
  ROOT: "mdc-radio"
};
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
var Is = (
  /** @class */
  function(i) {
    pi(e, i);
    function e(t) {
      return i.call(this, pe(pe({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return As;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Cs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setDisabled = function(t) {
      var r = e.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(t), t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e;
  }(kt)
);
class C extends Et {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = Is, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new St(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
      this.rippleElement = e;
    }), this.ripple));
  }
  get checked() {
    return this._checked;
  }
  /**
   * We define our own getter/setter for `checked` because we need to track
   * changes to it synchronously.
   *
   * The order in which the `checked` property is set across radio buttons
   * within the same group is very important. However, we can't rely on
   * UpdatingElement's `updated` callback to observe these changes (which is
   * also what the `@observer` decorator uses), because it batches changes to
   * all properties.
   *
   * Consider:
   *
   *   radio1.disabled = true;
   *   radio2.checked = true;
   *   radio1.checked = true;
   *
   * In this case we'd first see all changes for radio1, and then for radio2,
   * and we couldn't tell that radio1 was the most recently checked.
   */
  set checked(e) {
    var t, r;
    const s = this._checked;
    e !== s && (this._checked = e, this.formElement && (this.formElement.checked = e), (t = this._selectionController) === null || t === void 0 || t.update(this), e === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", s), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(e) {
    this.formElement.value = e;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? d`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = Rt.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Zi(this.mdcRoot)), { setNativeControlDisabled: (e) => {
      this.formElement.disabled = e;
    } });
  }
  handleFocus() {
    this.focused = !0, this.handleRippleFocus();
  }
  handleClick() {
    this.formElement.focus();
  }
  handleBlur() {
    this.focused = !1, this.formElement.blur(), this.rippleHandlers.endFocus();
  }
  /**
   * @soyTemplate
   * @soyAttributes radioAttributes: input
   * @soyClasses radioClasses: .mdc-radio
   */
  render() {
    const e = {
      "mdc-radio--touch": !this.reducedTouchTarget,
      "mdc-ripple-upgraded--background-focused": this.focused,
      "mdc-radio--disabled": this.disabled
    };
    return d`
      <div class="mdc-radio ${ye(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${q(this.ariaLabel)}"
          aria-labelledby="${q(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`;
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
o([
  v(".mdc-radio")
], C.prototype, "mdcRoot", void 0);
o([
  v("input")
], C.prototype, "formElement", void 0);
o([
  m()
], C.prototype, "useStateLayerCustomProperties", void 0);
o([
  n({ type: Boolean })
], C.prototype, "global", void 0);
o([
  n({ type: Boolean, reflect: !0 })
], C.prototype, "checked", null);
o([
  n({ type: Boolean }),
  j(function(i) {
    this.mdcFoundation.setDisabled(i);
  })
], C.prototype, "disabled", void 0);
o([
  n({ type: String }),
  j(function(i) {
    this._handleUpdatedValue(i);
  })
], C.prototype, "value", void 0);
o([
  n({ type: String })
], C.prototype, "name", void 0);
o([
  n({ type: Boolean })
], C.prototype, "reducedTouchTarget", void 0);
o([
  n({ type: Number })
], C.prototype, "formElementTabIndex", void 0);
o([
  m()
], C.prototype, "focused", void 0);
o([
  m()
], C.prototype, "shouldRenderRipple", void 0);
o([
  vt("mwc-ripple")
], C.prototype, "ripple", void 0);
o([
  Te,
  n({ attribute: "aria-label" })
], C.prototype, "ariaLabel", void 0);
o([
  Te,
  n({ attribute: "aria-labelledby" })
], C.prototype, "ariaLabelledBy", void 0);
o([
  ei({ passive: !0 })
], C.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Rs = R`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let ft = class extends C {
};
ft.styles = [Rs];
ft = o([
  _("mwc-radio")
], ft);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fe extends w {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, s = this.hasMeta && this.left ? this.renderMeta() : d``, c = this.renderRipple();
    return d`
      ${c}
      ${r}
      ${this.left ? "" : t}
      <mwc-radio
          global
          class=${ye(e)}
          tabindex=${this.tabindex}
          name=${q(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? t : ""}
      ${s}`;
  }
  onClick() {
    this._changeFromClick = !0, super.onClick();
  }
  async onChange(e) {
    const t = e.target;
    this.selected === t.checked || (this._skipPropRequest = !0, this.selected = t.checked, await this.updateComplete, this._skipPropRequest = !1, this._changeFromClick || this.fireRequestSelected(this.selected, "interaction")), this._changeFromClick = !1;
  }
}
o([
  v("slot")
], Fe.prototype, "slotElement", void 0);
o([
  v("mwc-radio")
], Fe.prototype, "radioElement", void 0);
o([
  n({ type: Boolean })
], Fe.prototype, "left", void 0);
o([
  n({ type: String, reflect: !0 })
], Fe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let bt = class extends Fe {
};
bt.styles = [wt, _i];
bt = o([
  _("mwc-radio-list-item")
], bt);
var Ts = Object.getOwnPropertyDescriptor, Ls = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ts(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = a(s) || s);
  return s;
};
const Ds = /* @__PURE__ */ new Map([
  [we.MAJOR, { translationKey: "compas.changeset.major" }],
  [we.MINOR, { translationKey: "compas.changeset.minor" }],
  [we.PATCH, { translationKey: "compas.changeset.patch" }]
]);
let jt = class extends I {
  getSelectedListItem() {
    return this.shadowRoot.querySelector("mwc-list").selected;
  }
  getSelectedValue() {
    const i = this.getSelectedListItem();
    return i ? i.value : null;
  }
  valid() {
    return this.getSelectedListItem() !== null;
  }
  render() {
    return d`
      <mwc-list activatable>
        ${Object.values(we).map(
      (i) => d`<mwc-radio-list-item value="${i}" left>
                          ${f(Ds.get(i).translationKey)}
                        </mwc-radio-list-item>`
    )}
      </mwc-list>
    `;
  }
};
jt = Ls([
  _("compas-changeset-radiogroup")
], jt);
var Fs = Object.getOwnPropertyDescriptor, $s = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Fs(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = a(s) || s);
  return s;
};
let gt = class extends I {
  getCommentField() {
    return this.shadowRoot.querySelector('wizard-textfield[id="comment"]');
  }
  set value(i) {
    const e = this.getCommentField();
    e.maybeValue = i;
  }
  get value() {
    return this.getCommentField().maybeValue;
  }
  valid() {
    return this.getCommentField().checkValidity();
  }
  render() {
    return d`
      <wizard-textfield
        id="comment"
        label="${f("compas.comment")}"
        .maybeValue=${null}
        nullable
      >
      </wizard-textfield>
    `;
  }
};
gt.styles = R`
    wizard-textfield {
      width: 100%;
    }
  `;
gt = $s([
  _("compas-comment")
], gt);
var Os = Object.defineProperty, Ns = Object.getOwnPropertyDescriptor, xe = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ns(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && Os(e, t, s), s;
};
let ae = class extends I {
  constructor() {
    super(...arguments), this.originalLabelsElement = null;
  }
  set privateElement(i) {
    this.originalLabelsElement = mt(i), this.originalLabelsElement ? this.newLabelsElement = this.originalLabelsElement.cloneNode(!0) : this.newLabelsElement = bs(i);
  }
  get labels() {
    return Array.from(
      this.newLabelsElement?.querySelectorAll(":scope > Label") ?? []
    ).filter((i) => i.namespaceURI === Ce).sort(
      (i, e) => (i.textContent ?? "").localeCompare(e.textContent ?? "")
    );
  }
  addLabel() {
    if (this.newLabelField.checkValidity()) {
      const i = this.newLabelField.value;
      gs(this.newLabelsElement, i), this.newLabelField.value = "", this.requestUpdate("labels");
    }
  }
  removeLabel(i) {
    this.newLabelsElement.removeChild(i), this.requestUpdate("labels");
  }
  updateLabelsInPrivateElement(i) {
    this.originalLabelsElement && i?.removeChild(this.originalLabelsElement), i?.append(this.newLabelsElement), this.originalLabelsElement = this.newLabelsElement;
  }
  render() {
    const i = this.labels;
    return d`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <wizard-textfield
            id="newLabel"
            label="${f("compas.newLabel")}"
            ?disabled="${i.length >= Vt}"
            .maybeValue=${null}
            pattern="[A-Za-z][0-9A-Za-z_-]*"
            required
          >
          </wizard-textfield>
        </div>
        <div style="display: flex; align-items: center; height: 56px;">
          <mwc-icon-button
            icon="new_label"
            ?disabled="${i.length >= Vt}"
            @click=${() => {
      this.addLabel();
    }}
          ></mwc-icon-button>
        </div>
      </div>
      <mwc-list>
        ${i.map((e) => {
      const t = e.textContent;
      return d` <mwc-list-item hasMeta graphic="icon">
            <span>${t}</span>
            <mwc-icon slot="graphic">label</mwc-icon>
            <mwc-icon-button
              icon="delete"
              slot="meta"
              @click=${() => {
        this.removeLabel(e);
      }}
            ></mwc-icon-button>
          </mwc-list-item>`;
    })}
      </mwc-list>
    `;
  }
};
ae.styles = R`
    wizard-textfield {
      width: 100%;
    }

    mwc-list-item {
      --mdc-list-item-meta-size: 48px;
    }

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }
  `;
xe([
  n()
], ae.prototype, "privateElement", 1);
xe([
  n()
], ae.prototype, "originalLabelsElement", 2);
xe([
  n()
], ae.prototype, "newLabelsElement", 2);
xe([
  m()
], ae.prototype, "labels", 1);
xe([
  v("wizard-textfield#newLabel")
], ae.prototype, "newLabelField", 2);
ae = xe([
  _("compas-labels-field")
], ae);
var Ps = Object.getOwnPropertyDescriptor, Ms = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ps(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = a(s) || s);
  return s;
};
let Xt = class extends I {
  render() {
    return d`
      <mwc-list>
        <mwc-list-item><i>${f("compas.loading")}</i></mwc-list-item>
      </mwc-list>
    `;
  }
};
Xt = Ms([
  _("compas-loading")
], Xt);
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
const Kt = (i, e) => {
  const t = i.startNode.parentNode, r = e === void 0 ? i.endNode : e.startNode, s = t.insertBefore(le(), r);
  t.insertBefore(le(), r);
  const c = new Ge(i.options);
  return c.insertAfterNode(s), c;
}, de = (i, e) => (i.setValue(e), i.commit(), i), Je = (i, e, t) => {
  const r = i.startNode.parentNode, s = t ? t.startNode : i.endNode, c = e.endNode.nextSibling;
  c !== s && Mi(r, e.startNode, c, s);
}, Qe = (i) => {
  ni(i.startNode.parentNode, i.startNode, i.endNode.nextSibling);
}, Zt = (i, e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (let s = e; s <= t; s++)
    r.set(i[s], s);
  return r;
}, Jt = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), Us = Ve((i, e, t) => {
  let r;
  return t === void 0 ? t = e : e !== void 0 && (r = e), (s) => {
    if (!(s instanceof Ge))
      throw new Error("repeat can only be used in text bindings");
    const c = Jt.get(s) || [], a = Qt.get(s) || [], l = [], p = [], u = [];
    let b = 0;
    for (const z of i)
      u[b] = r ? r(z, b) : b, p[b] = t(z, b), b++;
    let V, O, g = 0, x = c.length - 1, k = 0, N = p.length - 1;
    for (; g <= x && k <= N; )
      if (c[g] === null)
        g++;
      else if (c[x] === null)
        x--;
      else if (a[g] === u[k])
        l[k] = de(c[g], p[k]), g++, k++;
      else if (a[x] === u[N])
        l[N] = de(c[x], p[N]), x--, N--;
      else if (a[g] === u[N])
        l[N] = de(c[g], p[N]), Je(s, c[g], l[N + 1]), g++, N--;
      else if (a[x] === u[k])
        l[k] = de(c[x], p[k]), Je(s, c[x], c[g]), x--, k++;
      else if (V === void 0 && (V = Zt(u, k, N), O = Zt(a, g, x)), !V.has(a[g]))
        Qe(c[g]), g++;
      else if (!V.has(a[x]))
        Qe(c[x]), x--;
      else {
        const z = O.get(u[k]), je = z !== void 0 ? c[z] : null;
        if (je === null) {
          const Lt = Kt(s, c[g]);
          de(Lt, p[k]), l[k] = Lt;
        } else
          l[k] = de(je, p[k]), Je(s, je, c[g]), c[z] = null;
        k++;
      }
    for (; k <= N; ) {
      const z = Kt(s, l[N + 1]);
      de(z, p[k]), l[k++] = z;
    }
    for (; g <= x; ) {
      const z = c[g++];
      z !== null && Qe(z);
    }
    Jt.set(s, l), Qt.set(s, u);
  };
});
var zs = Object.defineProperty, Bs = Object.getOwnPropertyDescriptor, Tt = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Bs(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && zs(e, t, s), s;
};
let Re = class extends I {
  constructor() {
    super(...arguments), this.value = "";
  }
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    me().listOrderedSclTypes().then((i) => this.sclTypes = i);
  }
  getSelectedValue() {
    return this.shadowRoot.querySelector("mwc-select")?.selected?.value ?? null;
  }
  valid() {
    return !!this.getSelectedValue();
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? d` <mwc-list>
        <mwc-list-item><i>${f("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : d` <mwc-select
      fixedMenuPosition
      naturalMenuWidth="true"
      label="${f("compas.sclType")}"
    >
      ${Us(
      this.sclTypes,
      (i) => i.getElementsByTagNameNS(A, "Code").item(0).textContent ?? "",
      (i) => {
        const e = i.getElementsByTagNameNS(A, "Code").item(0).textContent ?? "", t = i.getElementsByTagNameNS(A, "Description").item(0).textContent ?? "";
        return d`<mwc-list-item
            value="${e}"
            ?selected="${e === this.value}"
          >
            <span>${t} (${e})</span>
          </mwc-list-item>`;
      }
    )}
    </mwc-select>` : d` <compas-loading></compas-loading> `;
  }
};
Re.styles = R`
    mwc-select {
      width: 100%;
    }
  `;
Tt([
  n()
], Re.prototype, "value", 2);
Tt([
  n()
], Re.prototype, "sclTypes", 2);
Re = Tt([
  _("compas-scltype-select")
], Re);
var Hs = Object.defineProperty, Vs = Object.getOwnPropertyDescriptor, ne = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Vs(e, t) : e, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = (r ? a(e, t, s) : a(s)) || s);
  return r && s && Hs(e, t, s), s;
};
function Yt() {
  return new CustomEvent("doc-saved", {
    bubbles: !0,
    composed: !0
  });
}
let W = class extends ws(I) {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  updated(i) {
    super.updated(i), i.has("doc") && this.commentField && (this.commentField.value = null);
  }
  valid() {
    return this.existInCompas ? this.changeSetRadiogroup.valid() : this.nameField.checkValidity() && this.sclTypeRadioGroup.valid();
  }
  getCleanFileName() {
    return qt(this.docName);
  }
  updateLabels() {
    const i = this.doc.documentElement, e = Ae(i, ve);
    this.labelsField.updateLabelsInPrivateElement(e);
  }
  processUpdatedDocument(i, e) {
    _s(this, i), this.dispatchEvent(
      Ct({
        kind: "info",
        title: G(e)
      })
    ), this.dispatchEvent(Yt());
  }
  async addSclToCompas(i) {
    const e = qt(this.nameField.value), t = this.commentField.value, r = this.sclTypeRadioGroup.getSelectedValue() ?? "";
    await me().addSclDocument(this, r, {
      sclName: e,
      comment: t,
      doc: i
    }).then((s) => {
      this.processUpdatedDocument(s, "compas.save.addSuccess");
    }).catch((s) => ct(this, s));
  }
  async updateSclInCompas(i, e, t) {
    const r = this.changeSetRadiogroup.getSelectedValue(), s = this.commentField.value, c = ut(e);
    await me().updateSclDocument(this, c, i, {
      changeSet: r,
      comment: s,
      doc: t
    }).then((a) => {
      this.processUpdatedDocument(a, "compas.save.updateSuccess");
    }).catch((a) => ct(this, a));
  }
  async saveToCompas() {
    this.updateLabels(), !this.docId || !this.existInCompas ? await this.addSclToCompas(this.doc) : await this.updateSclInCompas(this.docId, this.docName, this.doc);
  }
  renderSaveFilePart() {
    return d`
      <mwc-button
        label="${f("compas.save.saveFileButton")}"
        @click=${() => {
      this.updateLabels(), ji(this.doc, this.docName), this.dispatchEvent(Yt());
    }}
      >
      </mwc-button>
    `;
  }
  renderSaveCompasPart() {
    return this.existInCompas === void 0 ? d` <compas-loading></compas-loading> ` : this.existInCompas ? d`
      <div id="content">
        <compas-changeset-radiogroup></compas-changeset-radiogroup>
        <compas-comment></compas-comment>
      </div>
    ` : d`
        <div id="content">
          <mwc-textfield
            dialogInitialFocus
            id="name"
            label="${f("scl.name")}"
            value="${this.getCleanFileName()}"
            required
          >
          </mwc-textfield>

          <compas-scltype-select
            .value="${ut(this.docName)}"
          ></compas-scltype-select>
          <compas-comment></compas-comment>
        </div>
      `;
  }
  renderLabelsPart() {
    const i = this.doc.documentElement;
    let e = Ae(i, ve);
    return e || (e = hs(i, ve), i.prepend(e)), d`<compas-labels-field
      .privateElement="${e}"
    ></compas-labels-field>`;
  }
  render() {
    return d`
      ${this.allowLocalFile ? d` <wizard-divider></wizard-divider>
            <section>
              <h3>${f("compas.save.localTitle")}</h3>
              ${this.renderSaveFilePart()}
            </section>` : si}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${f("compas.save.compasTitle")}</h3>
        ${this.renderSaveCompasPart()}
      </section>
      <wizard-divider></wizard-divider>
      <section>
        <h3>${f("compas.save.labelsTitle")}</h3>
        ${this.renderLabelsPart()}
      </section>
    `;
  }
};
W.styles = R`
    #content > * {
      display: block;
      margin-top: 16px;
    }

    h3 {
      color: var(--mdc-theme-on-surface);
    }
  `;
ne([
  n()
], W.prototype, "doc", 2);
ne([
  n()
], W.prototype, "allowLocalFile", 2);
ne([
  v("mwc-textfield#name")
], W.prototype, "nameField", 2);
ne([
  v("compas-scltype-select")
], W.prototype, "sclTypeRadioGroup", 2);
ne([
  v("compas-changeset-radiogroup")
], W.prototype, "changeSetRadiogroup", 2);
ne([
  v("compas-comment")
], W.prototype, "commentField", 2);
ne([
  v("compas-labels-field")
], W.prototype, "labelsField", 2);
W = ne([
  _("compas-save")
], W);
var qs = Object.defineProperty, Y = (i, e, t, r) => {
  for (var s = void 0, c = i.length - 1, a; c >= 0; c--)
    (a = i[c]) && (s = a(e, t, s) || s);
  return s && qs(e, t, s), s;
};
class ee extends I {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  async run() {
    this.saveToDoc = void 0, this.saveToDocName = void 0, this.saveToDocId = void 0, this.compasSaveElement && await this.compasSaveElement.requestUpdate(), this.compasOpenElement && await this.compasOpenElement.requestUpdate(), this.dialog.show();
  }
  /**
   * To prevent problem with double SCL Filenames, we will retrieve the CoMPAS Private for SCL Element from the
   * selected document, to which the current document will be added as new version, and copy the CoMPAS SCL Private
   * Elements to the current document.
   */
  copyCompasPrivates() {
    if (this.saveToDoc) {
      const e = Ae(
        this.doc.documentElement,
        ve
      ), t = Ae(
        this.saveToDoc.documentElement,
        ve
      );
      us(t, e), fs(t, e), vs(t, e);
    }
  }
  render() {
    return d` <mwc-dialog
      id="compas-save-as-version-dlg"
      heading="${f("compas.save.saveAsVersionTitle")}"
    >
      ${!this.doc || !this.docName ? d` <compas-loading></compas-loading>` : !this.saveToDoc || !this.saveToDocId ? d`
            <compas-open
              .allowLocalFile="${!1}"
              @doc-retrieved=${(e) => {
      this.saveToDoc = e.detail.doc, this.saveToDocName = e.detail.docName, this.saveToDocId = e.detail.docId, this.copyCompasPrivates();
    }}
            ></compas-open>
          ` : d` <compas-save
              .doc="${this.doc}"
              .docName="${this.saveToDocName}"
              .docId="${this.saveToDocId}"
              .allowLocalFile="${!1}"
              .editCount=${this.editCount}
              @doc-saved=${() => {
      this.dialog.close();
    }}
            ></compas-save>
            <mwc-button
              slot="primaryAction"
              icon="save"
              trailingIcon
              label="${f("save")}"
              @click=${() => {
      this.compasSaveElement && this.compasSaveElement.valid() && this.dispatchEvent(
        ze(this.compasSaveElement.saveToCompas())
      );
    }}
            ></mwc-button>`}
      <mwc-button
        slot="secondaryAction"
        icon=""
        label="${f("close")}"
        dialogAction="close"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      >
      </mwc-button>
    </mwc-dialog>`;
  }
  static {
    this.styles = R`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
  }
}
Y([
  n()
], ee.prototype, "doc");
Y([
  n()
], ee.prototype, "docName");
Y([
  n({ type: Number })
], ee.prototype, "editCount");
Y([
  m()
], ee.prototype, "saveToDoc");
Y([
  m()
], ee.prototype, "saveToDocName");
Y([
  m()
], ee.prototype, "saveToDocId");
Y([
  v("mwc-dialog#compas-save-as-version-dlg")
], ee.prototype, "dialog");
Y([
  v("compas-save")
], ee.prototype, "compasSaveElement");
Y([
  v("compas-open")
], ee.prototype, "compasOpenElement");
export {
  ee as default
};
