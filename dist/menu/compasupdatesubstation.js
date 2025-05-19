import { LitElement as ee, query as P, property as m, state as A, html as f, css as te, customElement as W, queryAsync as pi, eventOptions as Yi, queryAssignedNodes as mi, unsafeCSS as ui } from "lit-element";
import { NodePart as er, AttributePart as tr, directive as hi, nothing as ir } from "lit-html";
import { Select as rr } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as nr } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import { List as sr } from "@material/mwc-list";
import "@material/mwc-button";
import "@material/mwc-dialog";
const cr = 1e3 * 60, Nt = "langChanged";
function ar(t, e, i) {
  return Object.entries(pt(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(pt(s))), t);
}
function or(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function pt(t) {
  return typeof t == "function" ? t() : t;
}
const lr = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: or,
  interpolate: ar,
  translationCache: {}
});
let dr = lr();
function pr(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Nt, i, e), () => window.removeEventListener(Nt, i);
}
function B(t, e, i = dr) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? pt(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function fi(t) {
  return t instanceof er ? t.startNode.isConnected : t instanceof tr ? t.committer.element.isConnected : t.element.isConnected;
}
function mr(t) {
  for (const [e] of t)
    fi(e) || t.delete(e);
}
function ur(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function hr(t, e) {
  setInterval(() => ur(() => mr(t)), e);
}
const Ct = /* @__PURE__ */ new Map();
function fr() {
  pr((t) => {
    for (const [e, i] of Ct)
      fi(e) && gi(e, i, t);
  });
}
fr();
hr(Ct, cr);
function gi(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
const gr = hi((t) => (e) => {
  Ct.set(e, t), gi(e, t);
}), L = (t, e, i) => gr(() => B(t, e, i));
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
const bi = /* @__PURE__ */ new WeakMap(), Ze = (t) => (...e) => {
  const i = t(...e);
  return bi.set(i, !0), i;
}, mt = (t) => typeof t == "function" && bi.has(t);
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
const Lt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, br = (t, e, i = null, r = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.insertBefore(e, r), e = n;
  }
}, vi = (t, e, i = null) => {
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
const Te = {}, Rt = {};
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
const At = `{{lit-${String(Math.random()).slice(2)}}}`, vr = `<!--${At}-->`, yr = "$lit$", xr = (t) => t.index !== -1, xe = () => document.createComment(""), Sr = (
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
class Ft {
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
    const e = Lt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let s = 0, c = 0, a, l = n.nextNode();
    for (; s < r.length; ) {
      if (a = r[s], !xr(a)) {
        this.__parts.push(void 0), s++;
        continue;
      }
      for (; c < a.index; )
        c++, l.nodeName === "TEMPLATE" && (i.push(l), n.currentNode = l.content), (l = n.nextNode()) === null && (n.currentNode = i.pop(), l = n.nextNode());
      if (a.type === "node") {
        const d = this.processor.handleTextExpression(this.options);
        d.insertAfterNode(l.previousSibling), this.__parts.push(d);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(l, a.name, a.strings, this.options));
      s++;
    }
    return Lt && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Pt = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), _r = ` ${At} `;
class kr {
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
      const a = Sr.exec(s);
      a === null ? i += s + (r ? _r : vr) : i += s.substr(0, a.index) + a[1] + a[2] + yr + a[3] + At;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return Pt !== void 0 && (i = Pt.createHTML(i)), e.innerHTML = i, e;
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
const yi = (t) => t === null || !(typeof t == "object" || typeof t == "function"), Cr = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class Je {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Te && (!yi(e) || e !== this.value) && (this.value = e, mt(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; mt(this.value); ) {
      const e = this.value;
      this.value = Te, e(this);
    }
    this.value !== Te && this.committer.commit();
  }
}
class Qe {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(xe()), this.endNode = e.appendChild(xe());
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
    e.__insert(this.startNode = xe()), e.__insert(this.endNode = xe());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = xe()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; mt(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Te, i(this);
    }
    const e = this.__pendingValue;
    e !== Te && (yi(e) ? e !== this.value && this.__commitText(e) : e instanceof kr ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Cr(e) ? this.__commitIterable(e) : e === Rt ? (this.value = Rt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Ft && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new Ft(i, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const s of e)
      n = i[r], n === void 0 && (n = new Qe(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(s), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    vi(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class xi extends Je {
}
let Ar = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Ar = !0, !1;
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
var ut = function(t, e) {
  return ut = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, ut(t, e);
};
function Er(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ut(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var Ne = function() {
  return Ne = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, Ne.apply(this, arguments);
};
function p(t, e, i, r) {
  var n = arguments.length, s = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, i, r);
  else for (var a = t.length - 1; a >= 0; a--) (c = t[a]) && (s = (n < 3 ? c(s) : n > 3 ? c(e, i, s) : c(e, i)) || s);
  return n > 3 && s && Object.defineProperty(e, i, s), s;
}
function Oe(t) {
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
function wr(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ir = (t) => t.nodeType === Node.ELEMENT_NODE, Si = () => {
}, $r = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Si, $r);
document.removeEventListener("x", Si);
const _i = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, Dr = (t) => {
  const e = _i();
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
class Et extends ee {
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
var ki = (
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
var Tr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Nr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ot = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Lr(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + i.left, c = n + i.top, a, l;
  if (t.type === "touchstart") {
    var d = t;
    a = d.changedTouches[0].pageX - s, l = d.changedTouches[0].pageY - c;
  } else {
    var o = t;
    a = o.pageX - s, l = o.pageY - c;
  }
  return { x: a, y: l };
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
], Me = [], Rr = (
  /** @class */
  function(t) {
    Er(e, t);
    function e(i) {
      var r = t.call(this, Ne(Ne({}, e.defaultAdapter), i)) || this;
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
        return Tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Nr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ot;
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
          for (var s = Oe(Mt), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
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
          for (var s = Oe(Ut), c = s.next(); !c.done; c = s.next()) {
            var a = c.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
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
        for (var n = Oe(Mt), s = n.next(); !s.done; s = n.next()) {
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
        for (var n = Oe(Ut), s = n.next(); !s.done; s = n.next()) {
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
            var a = i !== void 0 && Me.length > 0 && Me.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Me.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Me = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, c = e.cssClasses, a = c.FG_DEACTIVATION, l = c.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var o = "", b = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), y = v.startPoint, g = v.endPoint;
        o = y.x + "px, " + y.y + "px", b = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(n, o), this.adapter.updateCssVariable(s, b), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, d);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, s;
      n ? s = Lr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      }, Ot.FG_DEACTIVATION_MS));
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
        var n = Ne({}, r);
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
  }(ki)
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
class Fr {
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
const Vt = /* @__PURE__ */ new WeakMap(), Ye = Ze((t) => (e) => {
  if (!(e instanceof Je) || e instanceof xi || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Vt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Vt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new Fr(r);
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
const Bt = /* @__PURE__ */ new WeakMap(), Pr = Ze((t) => (e) => {
  if (!(e instanceof Je) || e instanceof xi || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Bt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Bt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in t || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in t)
    n.add(s), s.indexOf("-") === -1 ? r[s] = t[s] : r.setProperty(s, t[s]);
});
class N extends Et {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Rr;
  }
  get isActive() {
    return wr(this.parentElement || this, ":active");
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
    return f`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ye(r)}"
          style="${Pr({
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
  P(".mdc-ripple-surface")
], N.prototype, "mdcRoot", void 0);
p([
  m({ type: Boolean })
], N.prototype, "primary", void 0);
p([
  m({ type: Boolean })
], N.prototype, "accent", void 0);
p([
  m({ type: Boolean })
], N.prototype, "unbounded", void 0);
p([
  m({ type: Boolean })
], N.prototype, "disabled", void 0);
p([
  m({ type: Boolean })
], N.prototype, "activated", void 0);
p([
  m({ type: Boolean })
], N.prototype, "selected", void 0);
p([
  m({ type: Boolean })
], N.prototype, "internalUseStateLayerCustomProperties", void 0);
p([
  A()
], N.prototype, "hovering", void 0);
p([
  A()
], N.prototype, "bgFocused", void 0);
p([
  A()
], N.prototype, "fgActivation", void 0);
p([
  A()
], N.prototype, "fgDeactivation", void 0);
p([
  A()
], N.prototype, "fgScale", void 0);
p([
  A()
], N.prototype, "fgSize", void 0);
p([
  A()
], N.prototype, "translateStart", void 0);
p([
  A()
], N.prototype, "translateEnd", void 0);
p([
  A()
], N.prototype, "leftPos", void 0);
p([
  A()
], N.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Or = te`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ht = class extends N {
};
ht.styles = [Or];
ht = p([
  W("mwc-ripple")
], ht);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ge = (t) => (
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
          const l = this.constructor._observers.get(c);
          l !== void 0 && l.call(this, this[c], s);
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
class Ci {
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
class O extends ee {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Ci(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : f``, r = this.hasMeta ? this.renderMeta() : f``;
    return f`
      ${this.renderRipple()}
      ${i}
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ye(e)}">
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
p([
  P("slot")
], O.prototype, "slotElement", void 0);
p([
  pi("mwc-ripple")
], O.prototype, "ripple", void 0);
p([
  m({ type: String })
], O.prototype, "value", void 0);
p([
  m({ type: String, reflect: !0 })
], O.prototype, "group", void 0);
p([
  m({ type: Number, reflect: !0 })
], O.prototype, "tabindex", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  ge(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], O.prototype, "disabled", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], O.prototype, "twoline", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], O.prototype, "activated", void 0);
p([
  m({ type: String, reflect: !0 })
], O.prototype, "graphic", void 0);
p([
  m({ type: Boolean })
], O.prototype, "multipleGraphics", void 0);
p([
  m({ type: Boolean })
], O.prototype, "hasMeta", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  ge(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], O.prototype, "noninteractive", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  ge(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], O.prototype, "selected", void 0);
p([
  A()
], O.prototype, "shouldRenderRipple", void 0);
p([
  A()
], O.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ai = te`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ft = class extends O {
};
ft.styles = [Ai];
ft = p([
  W("mwc-list-item")
], ft);
var Mr = Object.defineProperty, Ur = Object.getOwnPropertyDescriptor, Y = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ur(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Mr(e, i, n), n;
};
let K = class extends nr {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(B("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (t) => f`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? B("textfield.noMultiplier") : t}</mwc-list-item
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
Y([
  m({ type: Boolean })
], K.prototype, "nullable", 2);
Y([
  m({ type: Array })
], K.prototype, "multipliers", 2);
Y([
  m({ type: String })
], K.prototype, "multiplier", 1);
Y([
  m({ type: String })
], K.prototype, "unit", 2);
Y([
  A()
], K.prototype, "null", 1);
Y([
  m({ type: String })
], K.prototype, "maybeValue", 1);
Y([
  m({ type: String })
], K.prototype, "defaultValue", 2);
Y([
  m({ type: Array })
], K.prototype, "reservedValues", 2);
Y([
  P("mwc-switch")
], K.prototype, "nullSwitch", 2);
Y([
  P("mwc-menu")
], K.prototype, "multiplierMenu", 2);
Y([
  P("mwc-icon-button")
], K.prototype, "multiplierButton", 2);
K = Y([
  W("wizard-textfield")
], K);
var Vr = Object.defineProperty, Br = Object.getOwnPropertyDescriptor, ke = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Br(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Vr(e, i, n), n;
};
let he = class extends rr {
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
ke([
  m({ type: Boolean })
], he.prototype, "nullable", 2);
ke([
  A()
], he.prototype, "null", 1);
ke([
  m({ type: String })
], he.prototype, "maybeValue", 1);
ke([
  m({ type: String })
], he.prototype, "defaultValue", 2);
ke([
  m({ type: Array })
], he.prototype, "reservedValues", 2);
ke([
  P("mwc-switch")
], he.prototype, "nullSwitch", 2);
he = ke([
  W("wizard-select")
], he);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function zr(t, e, i) {
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
function wt(t, e, i) {
  if (e !== void 0)
    return zr(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ei extends Et {
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
Ei.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const ct = /* @__PURE__ */ new WeakMap(), Se = Ze((t) => (e) => {
  const i = ct.get(e);
  if (t === void 0 && e instanceof Je) {
    if (i !== void 0 || !ct.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  ct.set(e, t);
});
class F extends Ei {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Ci(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return f`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ye(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Se(this.name)}"
              aria-checked="${Se(r)}"
              aria-label="${Se(this.ariaLabel)}"
              aria-labelledby="${Se(this.ariaLabelledBy)}"
              aria-describedby="${Se(this.ariaDescribedBy)}"
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
p([
  P(".mdc-checkbox")
], F.prototype, "mdcRoot", void 0);
p([
  P("input")
], F.prototype, "formElement", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], F.prototype, "checked", void 0);
p([
  m({ type: Boolean })
], F.prototype, "indeterminate", void 0);
p([
  m({ type: Boolean, reflect: !0 })
], F.prototype, "disabled", void 0);
p([
  m({ type: String, reflect: !0 })
], F.prototype, "name", void 0);
p([
  m({ type: String })
], F.prototype, "value", void 0);
p([
  wt,
  m({ type: String, attribute: "aria-label" })
], F.prototype, "ariaLabel", void 0);
p([
  wt,
  m({ type: String, attribute: "aria-labelledby" })
], F.prototype, "ariaLabelledBy", void 0);
p([
  wt,
  m({ type: String, attribute: "aria-describedby" })
], F.prototype, "ariaDescribedBy", void 0);
p([
  m({ type: Boolean })
], F.prototype, "reducedTouchTarget", void 0);
p([
  A()
], F.prototype, "animationClass", void 0);
p([
  A()
], F.prototype, "shouldRenderRipple", void 0);
p([
  A()
], F.prototype, "focused", void 0);
p([
  A()
], F.prototype, "useStateLayerCustomProperties", void 0);
p([
  pi("mwc-ripple")
], F.prototype, "ripple", void 0);
p([
  Yi({ passive: !0 })
], F.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qr = te`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let gt = class extends F {
};
gt.styles = [qr];
gt = p([
  W("mwc-checkbox")
], gt);
var Gr = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, Z = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Hr(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Gr(e, i, n), n;
};
let H = class extends ee {
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
Z([
  m({ type: String })
], H.prototype, "label", 2);
Z([
  m({ type: String })
], H.prototype, "helper", 2);
Z([
  m({ type: Boolean })
], H.prototype, "nullable", 2);
Z([
  m({ type: Boolean })
], H.prototype, "defaultChecked", 2);
Z([
  m({ type: String })
], H.prototype, "maybeValue", 1);
Z([
  m({ type: Boolean })
], H.prototype, "disabled", 2);
Z([
  A()
], H.prototype, "null", 1);
Z([
  A()
], H.prototype, "checked", 1);
Z([
  A()
], H.prototype, "deactivateCheckbox", 2);
Z([
  A()
], H.prototype, "formfieldLabel", 1);
Z([
  P("mwc-switch")
], H.prototype, "nullSwitch", 2);
Z([
  P("mwc-checkbox")
], H.prototype, "checkbox", 2);
H = Z([
  W("wizard-checkbox")
], H);
function Wr(t) {
  return typeof t == "function";
}
function we(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Wr(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function V(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const D = ":not(*)";
function jr(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Xr(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? D : `${t}[version="${i}"][revision="${r}"]`;
}
function zt(t) {
  return w(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function qt(t, e) {
  const [i, r] = V(e), n = T[t].parents.flatMap(
    (s) => M(s, i).split(",")
  );
  return R(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((s) => s.join("")).join(",");
}
function Kr(t) {
  const [e, i, r, n, s, c] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((a) => t.getAttribute(a));
  return e === "None" ? `${w(t.parentElement)}>(${n} ${c} ${s})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${s ?? ""}`;
}
function Zr(t, e) {
  if (e.endsWith(")")) {
    const [v, y] = V(e), [g, x, _] = y.substring(1, y.length - 1).split(" ");
    if (!g || !x) return D;
    const E = T[t].parents.flatMap(
      (U) => M(U, v).split(",")
    );
    return R(
      E,
      [">"],
      [`${t}[iedName="None"][lnClass="${g}"][lnType="${x}"][lnInst="${_}"]`]
    ).map((U) => U.join("")).join(",");
  }
  const [i, r, n, s, c] = e.split(/[ /]/);
  if (!i || !r || !s) return D;
  const [
    a,
    l,
    d,
    o,
    b
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return R(
    [t],
    a,
    l,
    d,
    o,
    b
  ).map((v) => v.join("")).join(",");
}
function Jr(t) {
  return `${w(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Qr(t, e) {
  const [i, r] = V(e), [n, s] = r.split(" ");
  return `${M(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${s}"]`;
}
function Yr(t) {
  return `${w(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function en(t, e) {
  const [i, r] = V(e);
  return r ? `${M(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : D;
}
function tn(t) {
  return `${w(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function rn(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : D;
}
function nn(t) {
  const e = t.textContent, [i, r, n, s, c] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${w(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${c ?? ""}`;
}
function sn(t, e) {
  const [i, r] = V(e), [n, s, c, a, l, d] = r.split(/[ /]/), [
    o,
    b,
    v,
    y,
    g,
    x
  ] = [
    T[t].parents.flatMap(
      (_) => M(_, i).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${l}"]`],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return R(
    o,
    [">"],
    [t],
    b,
    v,
    y,
    g,
    x
  ).map((_) => _.join("")).join(",");
}
function cn(t) {
  const [e, i, r, n, s, c, a, l] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((o) => t.getAttribute(o)), d = `${e}/${i ?? ""} ${r} ${n ?? ""}.${s} ${c || ""}`;
  return `${w(t.parentElement)}>${d} (${a}${l ? " [" + l + "]" : ""})`;
}
function an(t, e) {
  const [i, r] = V(e), [n, s, c, a] = r.split(/[ /.]/), l = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), d = l && l[1] ? l[1] : "", o = l && l[2] ? l[2] : "", b = r.match(/\(([A-Z]{2})/), v = r.match(/ \[([0-9]{1,2})\]/), y = b && b[1] ? b[1] : "", g = v && v[1] ? v[1] : "", [
    x,
    _,
    E,
    U,
    ae,
    it,
    rt,
    nt,
    st
  ] = [
    T[t].parents.flatMap(
      ($e) => M($e, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${d}"]`],
    o ? [`[daName="${o}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    g ? [`[ix="${g}"]`] : [":not([ix])", '[ix=""]']
  ];
  return R(
    x,
    [">"],
    [t],
    _,
    E,
    U,
    ae,
    it,
    rt,
    nt,
    st
  ).map(($e) => $e.join("")).join(",");
}
function on(t) {
  if (!t.parentElement) return NaN;
  const e = w(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    s,
    c,
    a,
    l,
    d,
    o,
    b,
    v,
    y,
    g,
    x,
    _
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
  ].map((ae) => t.getAttribute(ae)), E = _ ? `${b}:${_} ${v ?? ""}/${y ?? ""} ${g ?? ""} ${x ?? ""}` : "", U = `${i} ${s}/${c ?? ""} ${a} ${l ?? ""} ${d} ${o || ""}`;
  return `${e}>${E ? E + " " : ""}${U}${r ? `@${r}` : ""}`;
}
function ln(t, e) {
  const [i, r] = V(e), n = T[t].parents.flatMap(
    (De) => M(De, i).split(",")
  );
  if (r.endsWith("]")) {
    const [De] = r.split("["), Ji = [`[intAddr="${De}"]`];
    return R(n, [">"], [t], Ji).map((Qi) => Qi.join("")).join(",");
  }
  let s, c, a, l, d, o, b, v, y, g, x, _, E, U;
  !r.includes(":") && !r.includes("@") ? [s, c, a, l, d, o, b] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    v,
    y,
    g,
    x,
    _,
    E,
    s,
    c,
    a,
    l,
    d,
    o,
    b
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, c, a, l, d, o, b, U] = r.split(/[ /@]/) : [
    v,
    y,
    g,
    x,
    _,
    E,
    s,
    c,
    a,
    l,
    d,
    o,
    b,
    U
  ] = r.split(/[ /:@]/);
  const [
    ae,
    it,
    rt,
    nt,
    st,
    $e,
    qi,
    Gi,
    Hi,
    Wi,
    ji,
    Xi,
    Ki,
    Zi
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    l ? [`[lnClass="${l}"]`] : [":not([lnClass])"],
    d ? [`[lnInst="${d}"]`] : [":not([lnInst])", '[lnInst=""]'],
    o ? [`[doName="${o}"]`] : [":not([doName])"],
    b ? [`[daName="${b}"]`] : [":not([daName])", '[daName=""]'],
    v ? [`[serviceType="${v}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    g ? [`[srcLDInst="${g}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    x ? [`[srcPrefix="${x}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    _ ? [`[srcLNClass="${_}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    E ? [`[srcLNInst="${E}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    U ? [`[intAddr="${U}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return R(
    n,
    [">"],
    [t],
    ae,
    it,
    rt,
    nt,
    st,
    $e,
    qi,
    Gi,
    Hi,
    Wi,
    ji,
    Xi,
    Ki,
    Zi
  ).map((De) => De.join("")).join(",");
}
function dn(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${w(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function pn(t, e) {
  const [i, r] = V(e), n = T[t].parents.flatMap(
    (b) => M(b, i).split(",")
  ), [s, c, a] = r.split(" ");
  if (!c) return D;
  const [l, d, o] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    [`[inst="${a}"]`]
  ];
  return R(
    n,
    [">"],
    [t],
    l,
    d,
    o
  ).map((b) => b.join("")).join(",");
}
function mn(t) {
  const [e, i, r, n, s, c] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${w(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${s} ${c}`;
}
function un(t, e) {
  const [i, r] = V(e), n = T[t].parents.flatMap(
    (E) => M(E, i).split(",")
  ), [s, c, a, l, d, o] = r.split(/[ /]/), [
    b,
    v,
    y,
    g,
    x,
    _
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return R(
    n,
    [">"],
    [t],
    b,
    v,
    y,
    g,
    x,
    _
  ).map((E) => E.join("")).join(",");
}
function Gt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${w(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function bt(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = V(e), [s, c, a, l] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!c) return D;
  if (i === 0) return `${t}[name="${c}"]`;
  const d = T[t].parents.flatMap(
    (v) => v === "SDI" ? bt(v, r, i - 1).split(",") : M(v, r).split(",")
  ).filter((v) => !v.startsWith(D));
  if (d.length === 0) return D;
  const [o, b] = [
    [`[name="${c}"]`],
    l ? [`[ix="${l}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return R(
    d,
    [">"],
    [t],
    o,
    b
  ).map((v) => v.join("")).join(",");
}
function hn(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${w(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function fn(t, e) {
  const [i, r] = V(e), [n, s] = r.split(" "), c = parseFloat(s), a = T[t].parents.flatMap(
    (o) => M(o, i).split(",")
  ), [l, d] = [
    n ? [`[sGroup="${n}"]`] : [""],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return R(
    a,
    [">"],
    [t],
    l,
    d
  ).map((o) => o.join("")).join(",");
}
function gn(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function bn(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? D : `${t}[iedName="${i}"][apName="${r}"]`;
}
function Ht(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Wt(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? D : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function vn(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${w(t.parentElement)}>${e}`;
}
function yn(t, e) {
  const [i, r] = V(e), [n, s] = [
    T[t].parents.flatMap(
      (c) => M(c, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return R(n, [">"], [t], s).map((c) => c.join("")).join(",");
}
function xn(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${w(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${w(t.parentElement)}>${i} [${r}]`;
}
function Sn(t, e) {
  const [i, r] = V(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [c, a, l] = [
    T[t].parents.flatMap(
      (d) => M(d, i).split(",")
    ),
    [`[type="${n}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return R(
    c,
    [">"],
    [t],
    a,
    l
  ).map((d) => d.join("")).join(",");
}
function _n(t) {
  return `${w(t.parentElement)}>${t.getAttribute("ord")}`;
}
function kn(t, e) {
  const [i, r] = V(e);
  return `${M("EnumType", i)}>${t}[ord="${r}"]`;
}
function Cn(t) {
  return `${w(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function An(t, e) {
  const [i, r] = V(e), [n, s] = r.split("	"), [c] = [
    T[t].parents.flatMap(
      (a) => M(a, i).split(",")
    )
  ];
  return R(
    c,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [s]
  ).map((a) => a.join("")).join(",");
}
function En() {
  return "";
}
function wn() {
  return ":root";
}
function C(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${w(t.parentElement)}>${t.getAttribute("name")}`;
}
function k(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = V(e);
  if (!n) return D;
  if (i === 0) return `${t}[name="${n}"]`;
  const s = T[t].parents;
  if (!s) return D;
  const c = s.flatMap(
    (a) => T[a].selector === T.Substation.selector ? k(a, r, i - 1).split(",") : M(a, r).split(",")
  ).filter((a) => !a.startsWith(D));
  return c.length === 0 ? D : R(c, [">"], [t], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function u(t) {
  return w(t.parentElement).toString();
}
function h(t, e) {
  const i = T[t].parents;
  if (!i) return D;
  const r = i.flatMap((n) => M(n, e).split(",")).filter((n) => !n.startsWith(D));
  return r.length === 0 ? D : R(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Ue(t) {
  return `#${t.id}`;
}
function Ve(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : D;
}
const wi = [
  "TransformerWinding",
  "ConductingEquipment"
], Ii = [
  "GeneralEquipment",
  "PowerTransformer",
  ...wi
], vt = ["Substation", "VoltageLevel", "Bay"], $i = ["Process", "Line"], Di = ["EqSubFunction", "EqFunction"], In = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ii,
  ...vt,
  ...$i,
  ...Di
], Ti = ["ConnectivityNode", ...In], $n = ["GOOSESecurity", "SMVSecurity"], Dn = ["SubNetwork", ...$n, ...Ti], Tn = ["BDA", "DA"], Nn = ["SampledValueControl", "GSEControl"], Ln = ["LogControl", "ReportControl"], Rn = [...Nn, ...Ln], Fn = ["GSE", "SMV"], Pn = [
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
  ...Rn,
  ...Fn,
  ...Tn
], ye = ["LN0", "LN"], On = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Mn = ["Subject", "IssuerName"], Un = ["MinTime", "MaxTime"], Vn = ["LNodeType", "DOType", "DAType", "EnumType"], Bn = [
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
], zn = ["DynDataSet", "ConfDataSet"], qn = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...zn
], Gn = ["ConfLogControl", "ConfSigRef"], Hn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Wn = ["SCL", ...Dn, ...Pn, ...Vn], Ni = [
  ...Wn,
  ...On,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Mn,
  ...Un,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ye,
  ...Bn,
  "DynAssociation",
  "SettingGroups",
  ...qn,
  ...Gn,
  ...Hn,
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
], jn = new Set(Ni);
function It(t) {
  return jn.has(t);
}
const et = ["Text", "Private"], pe = [...et], $ = [...et], Be = [...et], jt = [...$, "Val"], Li = [...pe, "LNode"], ue = [...Li], yt = [...ue], at = [
  ...ue,
  "PowerTransformer",
  "GeneralEquipment"
], Xt = [
  ...yt,
  "Terminal"
], Kt = [...$, "Address"], Ri = [...pe], Zt = [...Ri, "IEDName"], Jt = [
  ...$,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Qt = [
  ...ue,
  "GeneralEquipment",
  "Function"
], Yt = [...Ri, "TrgOps"], ei = [
  ...ue,
  "GeneralEquipment",
  "EqSubFunction"
], T = {
  AccessControl: {
    identity: u,
    selector: h,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: C,
    selector: k,
    parents: ["IED"],
    children: [
      ...pe,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: u,
    selector: h,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Yr,
    selector: en,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: u,
    selector: h,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: C,
    selector: k,
    parents: ["DAType"],
    children: [...jt]
  },
  BitRate: {
    identity: u,
    selector: h,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: C,
    selector: k,
    parents: ["VoltageLevel"],
    children: [
      ...at,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: mn,
    selector: un,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: u,
    selector: h,
    parents: ["SCL"],
    children: [...$, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: C,
    selector: k,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Xt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: u,
    selector: h,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: gn,
    selector: bn,
    parents: ["SubNetwork"],
    children: [...$, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: C,
    selector: k,
    parents: ["Bay", "Line"],
    children: [...Li]
  },
  DA: {
    identity: C,
    selector: k,
    parents: ["DOType"],
    children: [...jt]
  },
  DAI: {
    identity: Gt,
    selector: bt,
    parents: ["DOI", "SDI"],
    children: [...$, "Val"]
  },
  DAType: {
    identity: Ue,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...Be, "BDA", "ProtNs"]
  },
  DO: {
    identity: C,
    selector: k,
    parents: ["LNodeType"],
    children: [...$]
  },
  DOI: {
    identity: C,
    selector: k,
    parents: [...ye],
    children: [...$, "SDI", "DAI"]
  },
  DOType: {
    identity: Ue,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...Be, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: C,
    selector: k,
    parents: [...ye],
    children: [...pe, "FCDA"]
  },
  DataSetDirectory: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: u,
    selector: h,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ue,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...Be, "EnumVal"]
  },
  EnumVal: {
    identity: _n,
    selector: kn,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: C,
    selector: k,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...ei]
  },
  EqSubFunction: {
    identity: C,
    selector: k,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...ei]
  },
  ExtRef: {
    identity: on,
    selector: ln,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: cn,
    selector: an,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: C,
    selector: k,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...ue,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: C,
    selector: k,
    parents: [
      "SubFunction",
      "Function",
      ...$i,
      ...Di,
      ...vt
    ],
    children: [...yt, "EqFunction"]
  },
  GetCBValues: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: C,
    selector: k,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Ht,
    selector: Wt,
    parents: ["ConnectedAP"],
    children: [...Kt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: C,
    selector: k,
    parents: ["LN0"],
    children: [...Zt, "Protocol"]
  },
  GSESettings: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: u,
    selector: h,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: u,
    selector: h,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: jr,
    selector: Xr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: C,
    selector: k,
    parents: ["SCL"],
    children: [...$, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: nn,
    selector: sn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: u,
    selector: h,
    parents: [...ye],
    children: [...$, "ExtRef"]
  },
  IssuerName: {
    identity: u,
    selector: h,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Jr,
    selector: Qr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: tn,
    selector: rn,
    parents: ["Server"],
    children: [...$, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: dn,
    selector: pn,
    parents: ["AccessPoint", "LDevice"],
    children: [...Jt]
  },
  LN0: {
    identity: u,
    selector: h,
    parents: ["LDevice"],
    children: [
      ...Jt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Kr,
    selector: Zr,
    parents: [...Ti],
    children: [...$]
  },
  LNodeType: {
    identity: Ue,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...Be, "DO"]
  },
  Line: {
    identity: C,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...Qt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: C,
    selector: k,
    parents: [...ye],
    children: [...$]
  },
  LogControl: {
    identity: C,
    selector: k,
    parents: [...ye],
    children: [...Yt]
  },
  LogSettings: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: u,
    selector: h,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: u,
    selector: h,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: u,
    selector: h,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: zt,
    selector: qt,
    parents: ["TransformerWinding"],
    children: [...$]
  },
  OptFields: {
    identity: u,
    selector: h,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: xn,
    selector: Sn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: vn,
    selector: yn,
    parents: ["ConnectedAP"],
    children: [...$, "P"]
  },
  PowerTransformer: {
    identity: C,
    selector: k,
    parents: [...vt],
    children: [
      ...yt,
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
    identity: C,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...Qt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Cn,
    selector: An,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: u,
    selector: h,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: C,
    selector: k,
    parents: [...ye],
    children: [...Yt, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: u,
    selector: h,
    parents: ["ReportControl"],
    children: [...$, "ClientLN"]
  },
  SamplesPerSec: {
    identity: u,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: C,
    selector: k,
    parents: ["LN0"],
    children: [...Zt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: u,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: En,
    selector: wn,
    parents: [],
    children: [
      ...et,
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
    identity: Gt,
    selector: bt,
    parents: ["DOI", "SDI"],
    children: [...$, "SDI", "DAI"]
  },
  SDO: {
    identity: C,
    selector: k,
    parents: ["DOType"],
    children: [...pe]
  },
  Server: {
    identity: u,
    selector: h,
    parents: ["AccessPoint"],
    children: [
      ...$,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: u,
    selector: h,
    parents: ["AccessPoint"],
    children: [...$]
  },
  Services: {
    identity: u,
    selector: h,
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
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: u,
    selector: h,
    parents: ["LN0"],
    children: [...$]
  },
  SettingGroups: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: u,
    selector: h,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: u,
    selector: h,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Ht,
    selector: Wt,
    parents: ["ConnectedAP"],
    children: [...Kt]
  },
  SmvOpts: {
    identity: u,
    selector: h,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: C,
    selector: k,
    parents: ["AccessPoint"],
    children: [...pe, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: C,
    selector: k,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...wi
    ],
    children: [...ue, "EqFunction"]
  },
  SubFunction: {
    identity: C,
    selector: k,
    parents: ["SubFunction", "Function"],
    children: [
      ...ue,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: C,
    selector: k,
    parents: ["Communication"],
    children: [...pe, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: u,
    selector: h,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: C,
    selector: k,
    parents: ["SCL"],
    children: [...at, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: C,
    selector: k,
    parents: ["TransformerWinding"],
    children: [...ue, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: zt,
    selector: qt,
    parents: [...Ii],
    children: [...$]
  },
  Text: {
    identity: u,
    selector: h,
    parents: Ni.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: u,
    selector: h,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: C,
    selector: k,
    parents: ["PowerTransformer"],
    children: [
      ...Xt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: u,
    selector: h,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: hn,
    selector: fn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: u,
    selector: h,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: u,
    selector: h,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: C,
    selector: k,
    parents: ["Substation"],
    children: [...at, "Voltage", "Bay", "Function"]
  }
};
function M(t, e) {
  return typeof e != "string" ? D : It(t) ? T[t].selector(t, e) : t;
}
function ti(t, e, i) {
  if (typeof i != "string" || !It(e)) return null;
  const r = t.querySelector(T[e].selector(e, i));
  return r === null || ii(r) ? r : Array.from(
    t.querySelectorAll(T[e].selector(e, i))
  ).find(ii) ?? null;
}
function w(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return It(e) ? T[e].identity(t) : NaN;
}
function Fi(t, e) {
  return t.tagName === "Private" ? Fi(t.parentElement, e.parentElement) && t.isEqualNode(e) : t.tagName === e.tagName && w(t) === w(e);
}
function je(t, e) {
  if (t.closest("Private") || e.closest("Private")) return t.isEqualNode(e);
  const i = new Set(
    t.getAttributeNames().concat(e.getAttributeNames())
  );
  for (const s of i)
    if (t.getAttribute(s) !== e.getAttribute(s)) return !1;
  if (t.childElementCount === 0)
    return e.childElementCount === 0 && t.textContent?.trim() === e.textContent?.trim();
  const r = Array.from(t.children), n = Array.from(e.children);
  for (const s of r) {
    const c = n.findIndex((a) => je(s, a));
    if (c === -1) return !1;
    n.splice(c, 1);
  }
  for (const s of n)
    if (!r.find((c) => je(s, c))) return !1;
  return !0;
}
hi((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function R(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function ii(t) {
  return !t.closest("Private");
}
const Xn = 99;
Array(Xn).fill(1).map((t, e) => `${e + 1}`);
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
const ri = (t, e) => {
  const i = t.startNode.parentNode, r = e === void 0 ? t.endNode : e.startNode, n = i.insertBefore(xe(), r);
  i.insertBefore(xe(), r);
  const s = new Qe(t.options);
  return s.insertAfterNode(n), s;
}, ve = (t, e) => (t.setValue(e), t.commit(), t), ot = (t, e, i) => {
  const r = t.startNode.parentNode, n = i ? i.startNode : t.endNode, s = e.endNode.nextSibling;
  s !== n && br(r, e.startNode, s, n);
}, lt = (t) => {
  vi(t.startNode.parentNode, t.startNode, t.endNode.nextSibling);
}, ni = (t, e, i) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= i; n++)
    r.set(t[n], n);
  return r;
}, si = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), ai = Ze((t, e, i) => {
  let r;
  return i === void 0 ? i = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof Qe))
      throw new Error("repeat can only be used in text bindings");
    const s = si.get(n) || [], c = ci.get(n) || [], a = [], l = [], d = [];
    let o = 0;
    for (const E of t)
      d[o] = r ? r(E, o) : o, l[o] = i(E, o), o++;
    let b, v, y = 0, g = s.length - 1, x = 0, _ = l.length - 1;
    for (; y <= g && x <= _; )
      if (s[y] === null)
        y++;
      else if (s[g] === null)
        g--;
      else if (c[y] === d[x])
        a[x] = ve(s[y], l[x]), y++, x++;
      else if (c[g] === d[_])
        a[_] = ve(s[g], l[_]), g--, _--;
      else if (c[y] === d[_])
        a[_] = ve(s[y], l[_]), ot(n, s[y], a[_ + 1]), y++, _--;
      else if (c[g] === d[x])
        a[x] = ve(s[g], l[x]), ot(n, s[g], s[y]), g--, x++;
      else if (b === void 0 && (b = ni(d, x, _), v = ni(c, y, g)), !b.has(c[y]))
        lt(s[y]), y++;
      else if (!b.has(c[g]))
        lt(s[g]), g--;
      else {
        const E = v.get(d[x]), U = E !== void 0 ? s[E] : null;
        if (U === null) {
          const ae = ri(n, s[y]);
          ve(ae, l[x]), a[x] = ae;
        } else
          a[x] = ve(U, l[x]), ot(n, U, s[y]), s[E] = null;
        x++;
      }
    for (; x <= _; ) {
      const E = ri(n, a[_ + 1]);
      ve(E, l[x]), a[x++] = E;
    }
    for (; y <= g; ) {
      const E = s[y++];
      E !== null && lt(E);
    }
    si.set(n, a), ci.set(n, d);
  };
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Fe extends O {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : f``, n = this.hasMeta && this.left ? this.renderMeta() : f``, s = this.renderRipple();
    return f`
      ${s}
      ${r}
      ${this.left ? "" : i}
      <span class=${Ye(e)}>
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
p([
  P("slot")
], Fe.prototype, "slotElement", void 0);
p([
  P("mwc-checkbox")
], Fe.prototype, "checkboxElement", void 0);
p([
  m({ type: Boolean })
], Fe.prototype, "left", void 0);
p([
  m({ type: String, reflect: !0 })
], Fe.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Kn = te`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ee = class extends Fe {
};
Ee.styles = [Ai, Kn];
Ee = p([
  W("mwc-check-list-item")
], Ee);
function me(t) {
  const e = w(t);
  return typeof e == "string" ? e.replace(/^>/, "") : B("unidentifiable");
}
function Zn(t, e, i, r, n) {
  return (s, c) => {
    const a = [], l = c.shadowRoot.querySelector("mwc-list"), d = l.selected.filter((g) => g.classList.contains("attr")).map((g) => t[g.value]), o = i.cloneNode(!1), b = d.length ? o : i;
    if (d.length) {
      i.childElementCount === 0 && (o.textContent = i.textContent);
      for (const [g, x] of d)
        g === "value" ? o.textContent = x.theirs : x.theirs === null ? o.removeAttribute(g) : o.setAttribute(g, x.theirs);
      a.push({ old: { element: i }, new: { element: o } });
    }
    let v = !1;
    const y = l.selected.filter((g) => g.classList.contains("child")).map((g) => e[g.value]);
    if (y.length)
      for (const g of y)
        g.ours ? g.theirs ? (v = !0, c.dispatchEvent(
          we(
            Pi(g.ours, g.theirs, {
              ...n,
              title: void 0
            })
          )
        )) : a.push({
          old: {
            parent: b,
            element: g.ours,
            reference: g.ours.nextSibling
          }
        }) : a.push({
          new: { parent: b, element: g.theirs }
        });
    return a.length === 0 && !v && c.dispatchEvent(we()), [
      {
        actions: a,
        title: B("merge.log", {
          sink: me(i),
          source: me(r),
          tag: i.tagName
        })
      }
    ];
  };
}
function Pi(t, e, i) {
  const r = [], n = t.textContent ?? "", s = e.textContent ?? "";
  t.childElementCount === 0 && e.childElementCount === 0 && s !== n && r.push(["value", { ours: n, theirs: s }]);
  const c = new Set(
    e.getAttributeNames().concat(t.getAttributeNames())
  );
  for (const o of c)
    e.getAttribute(o) !== t.getAttribute(o) && r.push([
      o,
      {
        theirs: e.getAttribute(o),
        ours: t.getAttribute(o)
      }
    ]);
  const a = [], l = Array.from(t.children);
  return Array.from(e.children).forEach((o) => {
    const b = l.findIndex(
      (y) => Fi(o, y)
    ), v = b > -1 ? l[b] : null;
    v && l.splice(b, 1), !(v && je(o, v)) && (!v || !je(o, v)) && a.push({ theirs: o, ours: v });
  }), l.forEach((o) => a.push({ theirs: null, ours: o })), [
    {
      title: i?.title ?? B("merge.defaultTitle", {
        sink: me(t),
        source: me(e),
        tag: t.tagName
      }),
      primary: {
        label: B("merge.title"),
        icon: "merge_type",
        action: Zn(r, a, t, e, i),
        auto: i?.auto?.(t, e) ?? !1
      },
      content: [
        f`
          <mwc-list multi>
            ${ai(
          r,
          (o) => o,
          ([o, b], v) => f`<mwc-check-list-item
                  value=${v}
                  class="attr"
                  twoline
                  left
                  hasMeta
                  .selected=${i?.selected?.(b) ?? !1}
                  .disabled=${i?.disabled?.(b) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${b.ours ? b.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${o}</span>
                  <span slot="secondary"
                    >${b.ours ?? ""}
                    ${b.ours && b.theirs ? f`&cularr;` : " "}
                    ${b.theirs ?? ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${b.ours ? b.theirs ? "edit" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
            ${a.length ? f`<mwc-list-item noninteractive
                    >${B("merge.children")}</mwc-list-item
                  >
                  <li padded divider role="separator"></li>` : ""}
            ${ai(
          a,
          (o) => o,
          (o, b) => f`<mwc-check-list-item
                  value=${b}
                  class="child"
                  twoline
                  left
                  hasMeta
                  .selected=${i?.selected?.(o) ?? !1}
                  .disabled=${i?.disabled?.(o) ?? !1}
                  style="--mdc-checkbox-checked-color: var(--mdc-theme-${o.ours ? o.theirs ? "secondary" : "error" : "primary"});"
                >
                  <span>${o.ours?.tagName ?? o.theirs?.tagName}</span>
                  <span slot="secondary"
                    >${o.ours ? me(o.ours) : ""}
                    ${o.ours && o.theirs && me(o.ours) + me(o.theirs) ? f`&cularr;` : " "}
                    ${o.theirs ? me(o.theirs) : ""}</span
                  >
                  <mwc-icon slot="meta"
                    >${o.ours ? o.theirs ? "merge_type" : "delete" : "add"}</mwc-icon
                  >
                </mwc-check-list-item>`
        )}
          </mwc-list>
        `
      ]
    }
  ];
}
var Jn = Object.defineProperty, Qn = (t, e, i, r) => {
  for (var n = void 0, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = c(e, i, n) || n);
  return n && Jn(e, i, n), n;
};
function oi(t, e) {
  if (typeof e != "string") return !1;
  const [i, r, n, s, c] = e.split(/[ /]/);
  if (!i || !s) return !1;
  if (r === "(Client)") {
    const [
      v,
      y,
      g,
      x
    ] = [
      [`IED[name="${i}"]`],
      n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
      [`LN[lnClass="${s}"]`],
      c ? [`[inst="${c}"]`] : [":not([inst])", '[inst=""]']
    ];
    return t.querySelector(
      R(
        v,
        [">AccessPoint>"],
        g,
        y,
        x
      ).map((_) => _.join("")).join(",")
    ) !== null;
  }
  const [
    a,
    l,
    d,
    o,
    b
  ] = [
    [`IED[name="${i}"]`],
    [`LDevice[inst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    s === "LLN0" ? ["LN0"] : [`LN[lnClass="${s}"]`],
    c ? [`[inst="${c}"]`] : [":not([inst])", '[inst=""]']
  ];
  return t.querySelector(
    R(
      a,
      [" "],
      l,
      [">"],
      o,
      d,
      b
    ).map((v) => v.join("")).join(",")
  ) !== null;
}
function Oi(t, e, i) {
  t.dispatchEvent(
    we(
      Pi(
        // FIXME: doesn't work with multiple Substations!
        e.documentElement,
        i.documentElement,
        {
          title: B("updatesubstation.title"),
          selected: (r) => r.theirs instanceof Element ? r.theirs.tagName === "LNode" ? ti(e, "LNode", w(r.theirs)) === null && oi(i, w(r.theirs)) : r.theirs.tagName === "Substation" || !T.SCL.children.includes(r.theirs.tagName) : r.theirs !== null,
          disabled: (r) => r.theirs instanceof Element && r.theirs.tagName === "LNode" && (ti(e, "LNode", w(r.theirs)) !== null || !oi(i, w(r.theirs))),
          auto: () => !0
        }
      )
    )
  );
}
class Yn extends ee {
  async updateSubstation(e) {
    const i = e.target?.files?.item(0) ?? !1;
    if (!i)
      return;
    const r = await i.text(), n = new DOMParser().parseFromString(r, "application/xml");
    Oi(this, this.doc, n), this.pluginFileUI.onchange = null;
  }
  async run() {
    this.pluginFileUI.click();
  }
  render() {
    return f`<input @click=${(e) => e.target.value = ""}
                       @change=${this.updateSubstation}
                       id="update-substation-plugin-input" accept=".sed,.scd,.ssd,.iid,.cid" type="file"></input>`;
  }
  static {
    this.styles = te`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
  }
}
Qn([
  P("#update-substation-plugin-input")
], Yn.prototype, "pluginFileUI");
function xt(t, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: t, ...e?.detail }
  });
}
function ze(t, e) {
  let i = "", r = "";
  return e || (e = "	"), t.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (r = r.substring(e.length)), i += r + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (r += e);
  }), i.substring(1, i.length - 3);
}
var es = Object.defineProperty, ts = Object.getOwnPropertyDescriptor, Mi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ts(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && es(e, i, n), n;
};
function se() {
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
let Xe = class extends ee {
  get compasSettings() {
    return se().compasSettings;
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
    return this.valid() ? (se().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), se().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), se().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), se().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), se().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), se().setCompasSetting(
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
    this.dispatchEvent(we());
  }
  render() {
    return f` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${L("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${L("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${L("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${L("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${L("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${L("compas.settings.useWebsockets")}">
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
        ${L("reset")}
      </mwc-button>`;
  }
};
Xe.styles = te`
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
Mi([
  m()
], Xe.prototype, "compasSettings", 1);
Xe = Mi([
  W("compas-settings")
], Xe);
function is(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
const rs = "NotFoundError", Ui = "ApplicationError", $t = "ServerError", li = "https://www.lfenergy.org/compas/commons/v1";
async function ie(t) {
  if (!t.ok) {
    let e = Ui;
    return t.status === 404 ? e = rs : t.status >= 500 && (e = $t), Promise.reject({
      type: e,
      status: t.status,
      message: await ns(t)
    });
  }
  return Promise.resolve(t.text());
}
async function ns(t) {
  const e = await t.text(), i = await ce(e);
  return Vi(i) ?? t.statusText;
}
function Vi(t) {
  const e = Array.from(
    t.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let i = "";
    return e.forEach((r, n) => {
      const s = r.getElementsByTagNameNS(li, "Code").item(0).textContent, c = r.getElementsByTagNameNS(li, "Message").item(0).textContent;
      n > 0 && (i += ", "), i += c, s && (i += " (" + s + ")");
    }), i;
  }
}
function ce(t) {
  return Promise.resolve(
    new DOMParser().parseFromString(t, "application/xml")
  );
}
function oe(t) {
  const e = t.querySelectorAll("SclData").item(0).textContent ?? "", i = new DOMParser().parseFromString(
    e,
    "application/xml"
  );
  return Promise.resolve(i);
}
function re(t) {
  return Promise.reject({ type: $t, message: t.message });
}
function ss(t, e) {
  let i = e.message;
  e.status && (i += " (" + e.status + ")"), t && t.dispatchEvent(
    is({
      kind: "error",
      title: B("compas.error.server"),
      message: B("compas.error.serverDetails", {
        type: e.type,
        message: i
      })
    })
  );
}
function qe(t) {
  return t.startsWith("http://") || t.startsWith("https://") ? t.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + cs() + t;
}
function cs() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function Ge(t, e, i, r) {
  let n;
  function s(a) {
    return new Promise((l) => setTimeout(l, a));
  }
  async function c() {
    for (; n !== void 0; )
      await s(250);
  }
  return new Promise((a, l) => {
    n = new WebSocket(i), n.onopen = () => {
      n?.send(r);
    }, n.onmessage = (d) => {
      ce(d.data).then((o) => {
        if (o.documentElement.localName === "ErrorResponse") {
          const b = Vi(o);
          l({ type: Ui, message: b });
        } else
          a(o);
        n?.close();
      }).catch((o) => {
        l(o), n?.close();
      });
    }, n.onerror = () => {
      l({
        type: $t,
        message: `Websocket Error in service "${e}"`
      }), n?.close();
    }, n.onclose = () => {
      n = void 0;
    }, t.dispatchEvent(xt(c()));
  });
}
const X = "https://www.lfenergy.org/compas/SclDataService/v1";
function Dt() {
  function t() {
    return se().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return se().useWebsockets();
  }
  function i() {
    const r = t() + "/common/v1/type/list";
    return fetch(r).catch(re).then(ie).then(ce);
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
      return fetch(n).catch(re).then(ie).then(ce);
    },
    listSclVersions(r, n) {
      const s = t() + "/scl/v1/" + r + "/" + n + "/versions";
      return fetch(s).catch(re).then(ie).then(ce);
    },
    getSclDocument(r, n, s) {
      if (e()) {
        const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
         </sds:GetWsRequest>`, l = t() + "/scl-ws/v1/" + n + "/get";
        return Ge(
          r,
          "CompasSclDataService",
          qe(l),
          a
        ).then(oe);
      }
      const c = t() + "/scl/v1/" + n + "/" + s;
      return fetch(c).catch(re).then(ie).then(ce).then(oe);
    },
    getSclDocumentVersion(r, n, s, c) {
      if (e()) {
        const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
           <sds:Version>${c}</sds:Version>
         </sds:GetVersionWsRequest>`, d = t() + "/scl-ws/v1/" + n + "/get-version";
        return Ge(
          r,
          "CompasSclDataService",
          qe(d),
          l
        ).then(oe);
      }
      const a = t() + "/scl/v1/" + n + "/" + s + "/" + c;
      return fetch(a).catch(re).then(ie).then(ce).then(oe);
    },
    deleteSclDocumentVersion(r, n, s) {
      const c = t() + "/scl/v1/" + r + "/" + n + "/" + s;
      return fetch(c, { method: "DELETE" }).catch(re).then(ie);
    },
    deleteSclDocument(r, n) {
      const s = t() + "/scl/v1/" + r + "/" + n;
      return fetch(s, { method: "DELETE" }).catch(re).then(ie);
    },
    addSclDocument(r, n, s) {
      if (e()) {
        const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${X}">
           <sds:Name>${s.sclName}</sds:Name>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ze(
          new XMLSerializer().serializeToString(s.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, d = t() + "/scl-ws/v1/" + n + "/create";
        return Ge(
          r,
          "CompasSclDataService",
          qe(d),
          l
        ).then(oe);
      }
      const c = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${X}">
            <sds:Name>${s.sclName}</sds:Name>
            <sds:Comment>${s.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${ze(
        new XMLSerializer().serializeToString(s.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, a = t() + "/scl/v1/" + n;
      return fetch(a, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: c
      }).catch(re).then(ie).then(ce).then(oe);
    },
    updateSclDocument(r, n, s, c) {
      if (e()) {
        const d = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${X}">
           <sds:Id>${s}</sds:Id>
           <sds:ChangeSet>${c.changeSet}</sds:ChangeSet>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ze(
          new XMLSerializer().serializeToString(c.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, o = t() + "/scl-ws/v1/" + n + "/update";
        return Ge(
          r,
          "CompasSclDataService",
          qe(o),
          d
        ).then(oe);
      }
      const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${X}">
           <sds:ChangeSet>${c.changeSet}</sds:ChangeSet>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ze(
        new XMLSerializer().serializeToString(c.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, l = t() + "/scl/v1/" + n + "/" + s;
      return fetch(l, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: a
      }).catch(re).then(ie).then(ce).then(oe);
    }
  };
}
var as = Object.defineProperty, os = Object.getOwnPropertyDescriptor, Bi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? os(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && as(e, i, n), n;
};
let Ke = class extends ee {
  render() {
    return f` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? f`<h4 class="header">${this.header}</h4>` : f``;
  }
  renderSeparator() {
    return f`<div role="separator"></div>`;
  }
};
Ke.styles = te`
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
Bi([
  m({
    type: String
  })
], Ke.prototype, "header", 2);
Ke = Bi([
  W("wizard-divider")
], Ke);
var ls = Object.defineProperty, ds = Object.getOwnPropertyDescriptor, zi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ds(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && ls(e, i, n), n;
};
function ps(t) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: t }
  });
}
let St = class extends ee {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    Dt().listOrderedSclTypes().then((t) => this.sclTypes = t);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? f` <mwc-list>
        <mwc-list-item><i>${L("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : f` <mwc-list>
      ${this.sclTypes.map((t) => {
      const e = t.getElementsByTagNameNS(X, "Code").item(0).textContent ?? "", i = t.getElementsByTagNameNS(X, "Description").item(0).textContent ?? "";
      return f`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(ps(e))}
        >
          <span>${i} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : f` <compas-loading></compas-loading> `;
  }
};
zi([
  m()
], St.prototype, "sclTypes", 2);
St = zi([
  W("compas-scltype-list")
], St);
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
}, z = /* @__PURE__ */ new Set();
z.add(S.BACKSPACE);
z.add(S.ENTER);
z.add(S.SPACEBAR);
z.add(S.PAGE_UP);
z.add(S.PAGE_DOWN);
z.add(S.END);
z.add(S.HOME);
z.add(S.ARROW_LEFT);
z.add(S.ARROW_UP);
z.add(S.ARROW_RIGHT);
z.add(S.ARROW_DOWN);
z.add(S.DELETE);
z.add(S.ESCAPE);
z.add(S.TAB);
var j = {
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
}, q = /* @__PURE__ */ new Map();
q.set(j.BACKSPACE, S.BACKSPACE);
q.set(j.ENTER, S.ENTER);
q.set(j.SPACEBAR, S.SPACEBAR);
q.set(j.PAGE_UP, S.PAGE_UP);
q.set(j.PAGE_DOWN, S.PAGE_DOWN);
q.set(j.END, S.END);
q.set(j.HOME, S.HOME);
q.set(j.ARROW_LEFT, S.ARROW_LEFT);
q.set(j.ARROW_UP, S.ARROW_UP);
q.set(j.ARROW_RIGHT, S.ARROW_RIGHT);
q.set(j.ARROW_DOWN, S.ARROW_DOWN);
q.set(j.DELETE, S.DELETE);
q.set(j.ESCAPE, S.ESCAPE);
q.set(j.TAB, S.TAB);
var be = /* @__PURE__ */ new Set();
be.add(S.PAGE_UP);
be.add(S.PAGE_DOWN);
be.add(S.END);
be.add(S.HOME);
be.add(S.ARROW_LEFT);
be.add(S.ARROW_UP);
be.add(S.ARROW_RIGHT);
be.add(S.ARROW_DOWN);
function le(t) {
  var e = t.key;
  if (z.has(e))
    return e;
  var i = q.get(t.keyCode);
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
var de, ne, I = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
de = {}, de["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", de["" + I.LIST_ITEM_CLASS] = "mdc-list-item", de["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", de["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", de["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", de["" + I.ROOT] = "mdc-list";
var Ae = (ne = {}, ne["" + I.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ne["" + I.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ne["" + I.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ne["" + I.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ne["" + I.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ne["" + I.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ne["" + I.ROOT] = "mdc-deprecated-list", ne), He = {
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
    .` + Ae[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ae[I.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + I.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` a,
    .` + I.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + I.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ae[I.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ae[I.LIST_ITEM_CLASS] + ` a,
    .` + Ae[I.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ae[I.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
const _t = (t, e) => t - e, ms = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, s = i.sort(_t), c = r.sort(_t);
  let a = 0, l = 0;
  for (; a < s.length || l < c.length; ) {
    const d = s[a], o = c[l];
    if (d === o) {
      a++, l++;
      continue;
    }
    if (d !== void 0 && (o === void 0 || d < o)) {
      n.removed.push(d), a++;
      continue;
    }
    if (o !== void 0 && (d === void 0 || o < d)) {
      n.added.push(o), l++;
      continue;
    }
  }
  return n;
}, us = ["input", "button", "textarea", "select"];
function Le(t) {
  return t instanceof Set;
}
const dt = (t) => {
  const e = t === G.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Le(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Tt extends ki {
  constructor(e) {
    super(Object.assign(Object.assign({}, Tt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = G.UNSET_INDEX, this.focusedItemIndex_ = G.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return He;
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
      if (!Le(i)) {
        const r = i === G.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Le(i))
      if (i.size) {
        const r = Array.from(i).sort(_t);
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(dt(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = le(e) === "ArrowLeft", s = le(e) === "ArrowUp", c = le(e) === "ArrowRight", a = le(e) === "ArrowDown", l = le(e) === "Home", d = le(e) === "End", o = le(e) === "Enter", b = le(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || d ? (e.preventDefault(), this.focusLastElement()) : (a || l) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let v = this.adapter.getFocusedElementIndex();
    if (v === -1 && (v = r, v < 0))
      return;
    let y;
    if (this.isVertical_ && a || !this.isVertical_ && c)
      this.preventDefaultEvent(e), y = this.focusNextElement(v);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), y = this.focusPrevElement(v);
    else if (l)
      this.preventDefaultEvent(e), y = this.focusFirstElement();
    else if (d)
      this.preventDefaultEvent(e), y = this.focusLastElement();
    else if ((o || b) && i) {
      const g = e.target;
      if (g && g.tagName === "A" && o)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(v, !0);
    }
    this.focusedItemIndex_ = v, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
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
    us.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== G.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = dt(this.selectedIndex_), n = ms(r, e);
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
    this.selectedIndex_ === G.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, He.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? He.ARIA_CURRENT : He.ARIA_SELECTED;
    this.selectedIndex_ !== G.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === G.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== G.UNSET_INDEX ? e = this.selectedIndex_ : Le(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
    const s = dt(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function hs(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const We = (t) => t.hasAttribute("mwc-list-item");
function fs() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class J extends Et {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Tt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = hs(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      fs.call(this), e(i);
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
      We(c) && (r.push(c), c._managingList = this), c.hasAttribute("divider") && !c.hasAttribute("role") && c.setAttribute("role", "separator");
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
    if (!Le(e))
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
    return f`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${Se(e)}"
          aria-label="${Se(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? f`
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
      const i = this.getIndexOfTarget(e), r = e.target, n = We(r);
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
      if (Ir(n) && We(n) && (s = i.indexOf(n)), s !== -1)
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
      isFocusInsideList: () => Dr(this),
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
    const e = _i();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (We(r))
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
p([
  m({ type: String })
], J.prototype, "emptyMessage", void 0);
p([
  P(".mdc-deprecated-list")
], J.prototype, "mdcRoot", void 0);
p([
  mi("", !0, "*")
], J.prototype, "assignedElements", void 0);
p([
  mi("", !0, '[tabindex="0"]')
], J.prototype, "tabbableElements", void 0);
p([
  m({ type: Boolean }),
  ge(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], J.prototype, "activatable", void 0);
p([
  m({ type: Boolean }),
  ge(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], J.prototype, "multi", void 0);
p([
  m({ type: Boolean }),
  ge(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], J.prototype, "wrapFocus", void 0);
p([
  m({ type: String }),
  ge(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], J.prototype, "itemRoles", void 0);
p([
  m({ type: String })
], J.prototype, "innerRole", void 0);
p([
  m({ type: String })
], J.prototype, "innerAriaLabel", void 0);
p([
  m({ type: Boolean })
], J.prototype, "rootTabbable", void 0);
p([
  m({ type: Boolean, reflect: !0 }),
  ge(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], J.prototype, "noninteractive", void 0);
var gs = Object.defineProperty, bs = Object.getOwnPropertyDescriptor, Ce = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? bs(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && gs(e, i, n), n;
};
function kt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof Q ? t : kt(t.parentElement);
}
function vs(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((a) => a.innerText).join(`
`), n = t.value, s = (i + r + n).toUpperCase(), c = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  c.length === 1 && c[0] === "" || c.every((a) => new RegExp(
    `*${a}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? kt(t).classList.remove("hidden") : kt(t).classList.add("hidden");
}
let Q = class extends J {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Ee);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ee).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Ee).some((t) => t.selected);
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
      (t) => vs(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? f`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : f``;
  }
  render() {
    return f`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? B("filter")}"
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
    ${ui(sr.styles)}

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
Ce([
  m({ type: String })
], Q.prototype, "searchFieldLabel", 2);
Ce([
  m({ type: Boolean })
], Q.prototype, "disableCheckAll", 2);
Ce([
  A()
], Q.prototype, "existCheckListItem", 1);
Ce([
  A()
], Q.prototype, "isAllSelected", 1);
Ce([
  A()
], Q.prototype, "isSomeSelected", 1);
Ce([
  P("mwc-textfield")
], Q.prototype, "searchField", 2);
Q = Ce([
  W("filtered-list")
], Q);
var ys = Object.defineProperty, xs = Object.getOwnPropertyDescriptor, Pe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? xs(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && ys(e, i, n), n;
};
let _e = class extends Q {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const t = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => t.push(e.value)) : t.push(this.selected.value), this.dispatchEvent(Ss(t)));
  }
  render() {
    return f`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : B("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${B("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
_e.styles = te`
    ${ui(Q.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
Pe([
  m()
], _e.prototype, "header", 2);
Pe([
  m()
], _e.prototype, "icon", 2);
Pe([
  m({ type: Boolean })
], _e.prototype, "disabled", 2);
Pe([
  P("#filterDialog")
], _e.prototype, "filterDialog", 2);
_e = Pe([
  W("oscd-filter-button")
], _e);
function Ss(t, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: t, ...e?.detail }
  });
}
var _s = Object.defineProperty, ks = Object.getOwnPropertyDescriptor, Ie = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ks(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && _s(e, i, n), n;
};
function Cs(t) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: t }
  });
}
let fe = class extends ee {
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
    this.type && Dt().listScls(this.type).then((t) => {
      this.items = Array.from(t.querySelectorAll("Item") ?? []), this.labels = Array.from(
        new Set(
          Array.from(t.querySelectorAll("Label") ?? []).map((e) => e.textContent).filter((e) => !!e).sort((e, i) => e.localeCompare(i))
        )
      ), this.selectedLabels = this.labels;
    });
  }
  render() {
    if (!this.items)
      return f` <compas-loading></compas-loading> `;
    if (this.items?.length <= 0)
      return f` <mwc-list>
        <mwc-list-item><i>${L("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    const t = this.filteredItems;
    return f`
      <div class="filters">
        <span>${L("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${L("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems, this.requestUpdate("items"), this.requestUpdate("filteredItems"), this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((e) => f` <mwc-check-list-item
              value="${e}"
              ?selected="${this.selectedLabels.includes(e)}"
            >
              ${e}
            </mwc-check-list-item>`)}
        </oscd-filter-button>
      </div>
      ${t && t.length > 0 ? f` <filtered-list>
            ${t.map((e) => {
      const i = e.getElementsByTagNameNS(X, "Id").item(0).textContent ?? "";
      let r = e.getElementsByTagNameNS(X, "Name").item(0).textContent ?? "";
      r === "" && (r = i);
      const n = e.getElementsByTagNameNS(X, "Version").item(0).textContent ?? "";
      return f` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(Cs(i))}
              >
                ${r} (${n})
              </mwc-list-item>`;
    })}
          </filtered-list>` : f` <mwc-list>
            <mwc-list-item>
              <i>${L("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
fe.styles = te`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
Ie([
  m()
], fe.prototype, "type", 2);
Ie([
  A()
], fe.prototype, "items", 2);
Ie([
  A()
], fe.prototype, "labels", 2);
Ie([
  A()
], fe.prototype, "selectedLabels", 2);
Ie([
  A()
], fe.prototype, "filteredItems", 1);
fe = Ie([
  W("compas-scl-list")
], fe);
const As = "compas_scl";
function Es(t, e) {
  return t.querySelector(`:scope > Private[type="${e}"]`);
}
function ws(t) {
  return t?.querySelector(":scope > SclName") ?? null;
}
function Is(t) {
  return t?.querySelector(":scope > SclFileType") ?? null;
}
function $s(t) {
  const e = t.querySelector(":scope > Header"), i = Es(t, As), r = e?.getAttribute("version") ?? "", n = ws(i)?.textContent ?? "", s = Is(i)?.textContent ?? "SCD";
  let c = n;
  return c === "" && (c = e?.getAttribute("id") ?? ""), c += "-" + r + "." + s?.toLowerCase(), c;
}
var Ds = Object.defineProperty, Ts = Object.getOwnPropertyDescriptor, tt = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ts(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Ds(e, i, n), n;
};
function di(t, e, i, r) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: t, doc: e, docName: i, docId: r }
  });
}
let Re = class extends ee {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(t) {
    const e = await Dt().getSclDocument(this, this.selectedType ?? "", t ?? "").catch((i) => ss(this, i));
    if (e instanceof Document) {
      const i = $s(e.documentElement);
      this.dispatchEvent(di(!1, e, i, t));
    }
  }
  async getSclFile(t) {
    const e = t.target?.files?.item(0) ?? !1;
    if (!e) return;
    const i = await e.text(), r = e.name, n = new DOMParser().parseFromString(i, "application/xml");
    this.dispatchEvent(di(!0, n, r));
  }
  renderFileSelect() {
    return f`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(t) => this.dispatchEvent(xt(this.getSclFile(t)))}
      />

      <mwc-button
        label="${L("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "", this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return f`
      <p>${L("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(t) => this.selectedType = t.detail.type}
      />
    `;
  }
  renderSclList() {
    return f`
      <p>${L("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(t) => this.dispatchEvent(
      xt(
        this.getSclDocument(t.detail.docId)
      )
    )}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${L("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return f`
      ${this.allowLocalFile ? f`<wizard-divider></wizard-divider>
            <section>
              <h3>${L("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : ir}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${L("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
tt([
  m()
], Re.prototype, "selectedType", 2);
tt([
  m()
], Re.prototype, "allowLocalFile", 2);
tt([
  P("#scl-file")
], Re.prototype, "sclFileUI", 2);
Re = tt([
  W("compas-open")
], Re);
class Xs extends ee {
  substationCompasWizard() {
    return [
      {
        title: B("compas.updateSubstation.title"),
        content: [
          f`<compas-open
            @doc-retrieved=${(e) => {
            Oi(this, this.doc, e.detail.doc), this.dispatchEvent(we());
          }}
          >
          </compas-open> `
        ]
      }
    ];
  }
  firstUpdated() {
    this.parent = this.parentElement;
  }
  async run() {
    this.dispatchEvent(we(this.substationCompasWizard()));
  }
}
export {
  Xs as default
};
