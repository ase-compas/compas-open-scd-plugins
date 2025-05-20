import { LitElement as D, query as v, property as c, state as p, html as d, css as I, customElement as _, queryAsync as _t, eventOptions as ii, queryAssignedNodes as ri, unsafeCSS as ni } from "lit-element";
import { NodePart as wi, AttributePart as Ei, directive as ai, nothing as si } from "lit-html";
import "@material/mwc-button";
import "@material/mwc-dialog";
import { TextField as Ci } from "@material/mwc-textfield";
import { Select as Ai } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-formfield";
import { List as Di } from "@material/mwc-list";
import "@material/mwc-icon";
const Ii = 1e3 * 60, et = "langChanged";
function Ni(i, e, t) {
  return Object.entries(tt(e || {})).reduce((r, [n, a]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(tt(a))), i);
}
function Ti(i, e) {
  const t = i.split(".");
  let r = e.strings;
  for (; r != null && t.length > 0; )
    r = r[t.shift()];
  return r != null ? r.toString() : null;
}
function tt(i) {
  return typeof i == "function" ? i() : i;
}
const Li = () => ({
  loader: () => Promise.resolve({}),
  empty: (i) => `[${i}]`,
  lookup: Ti,
  interpolate: Ni,
  translationCache: {}
});
let Ce = Li();
function Ri(i) {
  return Ce = Object.assign(Object.assign({}, Ce), i);
}
function zi(i) {
  window.dispatchEvent(new CustomEvent(et, { detail: i }));
}
function Pi(i, e, t = Ce) {
  zi({
    previousStrings: t.strings,
    previousLang: t.lang,
    lang: t.lang = i,
    strings: t.strings = e
  });
}
function Fi(i, e) {
  const t = (r) => i(r.detail);
  return window.addEventListener(et, t, e), () => window.removeEventListener(et, t);
}
async function Oi(i, e = Ce) {
  const t = await e.loader(i, e);
  e.translationCache = {}, Pi(i, t, e);
}
function q(i, e, t = Ce) {
  let r = t.translationCache[i] || (t.translationCache[i] = t.lookup(i, t) || t.empty(i, t));
  return e = e != null ? tt(e) : null, e != null ? t.interpolate(r, e, t) : r;
}
function oi(i) {
  return i instanceof wi ? i.startNode.isConnected : i instanceof Ei ? i.committer.element.isConnected : i.element.isConnected;
}
function $i(i) {
  for (const [e] of i)
    oi(e) || i.delete(e);
}
function Mi(i) {
  "requestIdleCallback" in window ? window.requestIdleCallback(i) : setTimeout(i);
}
function Hi(i, e) {
  setInterval(() => Mi(() => $i(i)), e);
}
const kt = /* @__PURE__ */ new Map();
function Vi() {
  Fi((i) => {
    for (const [e, t] of kt)
      oi(e) && ci(e, t, i);
  });
}
Vi();
Hi(kt, Ii);
function ci(i, e, t) {
  const r = e(t);
  i.value !== r && (i.setValue(r), i.commit());
}
const Bi = ai((i) => (e) => {
  kt.set(e, i), ci(e, i);
}), f = (i, e, t) => Bi(() => q(i, e, t));
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
const di = /* @__PURE__ */ new WeakMap(), Ge = (i) => (...e) => {
  const t = i(...e);
  return di.set(t, !0), t;
}, it = (i) => typeof i == "function" && di.has(i);
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
const zt = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, Ui = (i, e, t = null, r = null) => {
  for (; e !== t; ) {
    const n = e.nextSibling;
    i.insertBefore(e, r), e = n;
  }
}, li = (i, e, t = null) => {
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
const Se = {}, Pt = {};
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
const xt = `{{lit-${String(Math.random()).slice(2)}}}`, Gi = `<!--${xt}-->`, qi = "$lit$", Wi = (i) => i.index !== -1, le = () => document.createComment(""), Ki = (
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
    const e = zt ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), t = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let a = 0, s = 0, l, m = n.nextNode();
    for (; a < r.length; ) {
      if (l = r[a], !Wi(l)) {
        this.__parts.push(void 0), a++;
        continue;
      }
      for (; s < l.index; )
        s++, m.nodeName === "TEMPLATE" && (t.push(m), n.currentNode = m.content), (m = n.nextNode()) === null && (n.currentNode = t.pop(), m = n.nextNode());
      if (l.type === "node") {
        const h = this.processor.handleTextExpression(this.options);
        h.insertAfterNode(m.previousSibling), this.__parts.push(h);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(m, l.name, l.strings, this.options));
      a++;
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
const Ot = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (i) => i }), ji = ` ${xt} `;
class Xi {
  constructor(e, t, r, n) {
    this.strings = e, this.values = t, this.type = r, this.processor = n;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let t = "", r = !1;
    for (let n = 0; n < e; n++) {
      const a = this.strings[n], s = a.lastIndexOf("<!--");
      r = (s > -1 || r) && a.indexOf("-->", s + 1) === -1;
      const l = Ki.exec(a);
      l === null ? t += a + (r ? ji : Gi) : t += a.substr(0, l.index) + l[1] + l[2] + qi + l[3] + xt;
    }
    return t += this.strings[e], t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let t = this.getHTML();
    return Ot !== void 0 && (t = Ot.createHTML(t)), e.innerHTML = t, e;
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
const mi = (i) => i === null || !(typeof i == "object" || typeof i == "function"), Zi = (i) => Array.isArray(i) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(i && i[Symbol.iterator]);
class qe {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Se && (!mi(e) || e !== this.value) && (this.value = e, it(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; it(this.value); ) {
      const e = this.value;
      this.value = Se, e(this);
    }
    this.value !== Se && this.committer.commit();
  }
}
class We {
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
    for (; it(this.__pendingValue); ) {
      const t = this.__pendingValue;
      this.__pendingValue = Se, t(this);
    }
    const e = this.__pendingValue;
    e !== Se && (mi(e) ? e !== this.value && this.__commitText(e) : e instanceof Xi ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : Zi(e) ? this.__commitIterable(e) : e === Pt ? (this.value = Pt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Ft && this.value.template === t)
      this.value.update(e.values);
    else {
      const r = new Ft(t, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const t = this.value;
    let r = 0, n;
    for (const a of e)
      n = t[r], n === void 0 && (n = new We(this.options), t.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])), n.setValue(a), n.commit(), r++;
    r < t.length && (t.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    li(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class pi extends qe {
}
let Qi = !1;
(() => {
  try {
    const i = {
      get capture() {
        return Qi = !0, !1;
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
function Ve(i, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: i, ...e?.detail }
  });
}
function xe(i, e) {
  let t = "", r = "";
  return e || (e = "	"), i.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (r = r.substring(e.length)), t += r + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (r += e);
  }), t.substring(1, t.length - 3);
}
function Ji(i, e) {
  if (i) {
    const t = new Blob(
      [xe(new XMLSerializer().serializeToString(i))],
      {
        type: "application/xml"
      }
    ), r = document.createElement("a");
    r.download = e, r.href = URL.createObjectURL(t), r.dataset.downloadurl = ["application/xml", r.download, r.href].join(":"), r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r), setTimeout(function() {
      URL.revokeObjectURL(r.href);
    }, 5e3);
  }
}
var rt = function(i, e) {
  return rt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }, rt(i, e);
};
function ui(i, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  rt(i, e);
  function t() {
    this.constructor = i;
  }
  i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var me = function() {
  return me = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, me.apply(this, arguments);
};
function o(i, e, t, r) {
  var n = arguments.length, a = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, t) : r, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(i, e, t, r);
  else for (var l = i.length - 1; l >= 0; l--) (s = i[l]) && (a = (n < 3 ? s(a) : n > 3 ? s(e, t, a) : s(e, t)) || a);
  return n > 3 && a && Object.defineProperty(e, t, a), a;
}
function Pe(i) {
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
function Yi(i, e) {
  var t = i.matches || i.webkitMatchesSelector || i.msMatchesSelector;
  return t.call(i, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const er = (i) => i.nodeType === Node.ELEMENT_NODE;
function tr(i) {
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
const hi = () => {
}, ir = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", hi, ir);
document.removeEventListener("x", hi);
const fi = (i = window.document) => {
  let e = i.activeElement;
  const t = [];
  if (!e)
    return t;
  for (; e && (t.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return t;
}, rr = (i) => {
  const e = fi();
  if (!e.length)
    return !1;
  const t = e[e.length - 1], r = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let n = [];
  const a = (s) => {
    n = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", a), t.dispatchEvent(r), document.body.removeEventListener("check-if-focused", a), n.indexOf(i) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class St extends D {
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
var wt = (
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
var nr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ar = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, $t = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function sr(i, e, t) {
  if (!i)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, a = r + t.left, s = n + t.top, l, m;
  if (i.type === "touchstart") {
    var h = i;
    l = h.changedTouches[0].pageX - a, m = h.changedTouches[0].pageY - s;
  } else {
    var b = i;
    l = b.pageX - a, m = b.pageY - s;
  }
  return { x: l, y: m };
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
], Ht = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Fe = [], or = (
  /** @class */
  function(i) {
    ui(e, i);
    function e(t) {
      var r = i.call(this, me(me({}, e.defaultAdapter), t)) || this;
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
        return nr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ar;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return $t;
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
        var n = e.cssClasses, a = n.ROOT, s = n.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
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
          for (var a = Pe(Mt), s = a.next(); !s.done; s = a.next()) {
            var l = s.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (m) {
          r = { error: m };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
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
          for (var a = Pe(Ht), s = a.next(); !s.done; s = a.next()) {
            var l = s.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (m) {
          r = { error: m };
        } finally {
          try {
            s && !s.done && (n = a.return) && n.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var n = Pe(Mt), a = n.next(); !a.done; a = n.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (l) {
        t = { error: l };
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
        for (var n = Pe(Ht), a = n.next(); !a.done; a = n.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (l) {
        t = { error: l };
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
          var a = this.previousActivationEvent, s = a && t !== void 0 && a.type !== t.type;
          if (!s) {
            n.isActivated = !0, n.isProgrammatic = t === void 0, n.activationEvent = t, n.wasActivatedByPointer = n.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var l = t !== void 0 && Fe.length > 0 && Fe.some(function(m) {
              return r.adapter.containsEventTarget(m);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Fe.push(t.target), this.registerDeactivationHandlers(t)), n.wasElementMadeActive = this.checkElementMadeActive(t), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Fe = [], !n.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(t), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, l = s.FG_DEACTIVATION, m = s.FG_ACTIVATION, h = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var b = "", U = "";
      if (!this.adapter.isUnbounded()) {
        var P = this.getFgTranslationCoordinates(), g = P.startPoint, k = P.endPoint;
        b = g.x + "px, " + g.y + "px", U = k.x + "px, " + k.y + "px";
      }
      this.adapter.updateCssVariable(n, b), this.adapter.updateCssVariable(a, U), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(m), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, h);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, n = t.wasActivatedByPointer, a;
      n ? a = sr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, a = n.hasDeactivationUXRun, s = n.isActivated, l = a || !s;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, $t.FG_DEACTIVATION_MS));
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
        var n = me({}, r);
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
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, n = t.VAR_LEFT, a = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(wt)
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
class cr {
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
const Vt = /* @__PURE__ */ new WeakMap(), ye = Ge((i) => (e) => {
  if (!(e instanceof qe) || e instanceof pi || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: t } = e, { element: r } = t;
  let n = Vt.get(e);
  n === void 0 && (r.setAttribute("class", t.strings.join(" ")), Vt.set(e, n = /* @__PURE__ */ new Set()));
  const a = r.classList || new cr(r);
  n.forEach((s) => {
    s in i || (a.remove(s), n.delete(s));
  });
  for (const s in i) {
    const l = i[s];
    l != n.has(s) && (l ? (a.add(s), n.add(s)) : (a.remove(s), n.delete(s)));
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
const Bt = /* @__PURE__ */ new WeakMap(), dr = Ge((i) => (e) => {
  if (!(e instanceof qe) || e instanceof pi || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: t } = e, { style: r } = t.element;
  let n = Bt.get(e);
  n === void 0 && (r.cssText = t.strings.join(" "), Bt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((a) => {
    a in i || (n.delete(a), a.indexOf("-") === -1 ? r[a] = null : r.removeProperty(a));
  });
  for (const a in i)
    n.add(a), a.indexOf("-") === -1 ? r[a] = i[a] : r.setProperty(a, i[a]);
});
class S extends St {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = or;
  }
  get isActive() {
    return Yi(this.parentElement || this, ":active");
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
          style="${dr({
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
  c({ type: Boolean })
], S.prototype, "primary", void 0);
o([
  c({ type: Boolean })
], S.prototype, "accent", void 0);
o([
  c({ type: Boolean })
], S.prototype, "unbounded", void 0);
o([
  c({ type: Boolean })
], S.prototype, "disabled", void 0);
o([
  c({ type: Boolean })
], S.prototype, "activated", void 0);
o([
  c({ type: Boolean })
], S.prototype, "selected", void 0);
o([
  c({ type: Boolean })
], S.prototype, "internalUseStateLayerCustomProperties", void 0);
o([
  p()
], S.prototype, "hovering", void 0);
o([
  p()
], S.prototype, "bgFocused", void 0);
o([
  p()
], S.prototype, "fgActivation", void 0);
o([
  p()
], S.prototype, "fgDeactivation", void 0);
o([
  p()
], S.prototype, "fgScale", void 0);
o([
  p()
], S.prototype, "fgSize", void 0);
o([
  p()
], S.prototype, "translateStart", void 0);
o([
  p()
], S.prototype, "translateEnd", void 0);
o([
  p()
], S.prototype, "leftPos", void 0);
o([
  p()
], S.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const lr = I`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let nt = class extends S {
};
nt.styles = [lr];
nt = o([
  _("mwc-ripple")
], nt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const K = (i) => (
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
        r.call(this, n), n.forEach((a, s) => {
          const m = this.constructor._observers.get(s);
          m !== void 0 && m.call(this, this[s], a);
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
class Et {
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
class w extends D {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
  _t("mwc-ripple")
], w.prototype, "ripple", void 0);
o([
  c({ type: String })
], w.prototype, "value", void 0);
o([
  c({ type: String, reflect: !0 })
], w.prototype, "group", void 0);
o([
  c({ type: Number, reflect: !0 })
], w.prototype, "tabindex", void 0);
o([
  c({ type: Boolean, reflect: !0 }),
  K(function(i) {
    i ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], w.prototype, "disabled", void 0);
o([
  c({ type: Boolean, reflect: !0 })
], w.prototype, "twoline", void 0);
o([
  c({ type: Boolean, reflect: !0 })
], w.prototype, "activated", void 0);
o([
  c({ type: String, reflect: !0 })
], w.prototype, "graphic", void 0);
o([
  c({ type: Boolean })
], w.prototype, "multipleGraphics", void 0);
o([
  c({ type: Boolean })
], w.prototype, "hasMeta", void 0);
o([
  c({ type: Boolean, reflect: !0 }),
  K(function(i) {
    i ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], w.prototype, "noninteractive", void 0);
o([
  c({ type: Boolean, reflect: !0 }),
  K(function(i) {
    const e = this.getAttribute("role"), t = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (t && i ? this.setAttribute("aria-selected", "true") : t && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(i, "property");
  })
], w.prototype, "selected", void 0);
o([
  p()
], w.prototype, "shouldRenderRipple", void 0);
o([
  p()
], w.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ct = I`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let at = class extends w {
};
at.styles = [Ct];
at = o([
  _("mwc-list-item")
], at);
var mr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, B = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? pr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && mr(e, t, n), n;
};
let O = class extends Ci {
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
    return this.reservedValues && this.reservedValues.some((i) => i === this.value) ? (this.setCustomValidity(q("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${i === null ? q("textfield.noMultiplier") : i}</mwc-list-item
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
B([
  c({ type: Boolean })
], O.prototype, "nullable", 2);
B([
  c({ type: Array })
], O.prototype, "multipliers", 2);
B([
  c({ type: String })
], O.prototype, "multiplier", 1);
B([
  c({ type: String })
], O.prototype, "unit", 2);
B([
  p()
], O.prototype, "null", 1);
B([
  c({ type: String })
], O.prototype, "maybeValue", 1);
B([
  c({ type: String })
], O.prototype, "defaultValue", 2);
B([
  c({ type: Array })
], O.prototype, "reservedValues", 2);
B([
  v("mwc-switch")
], O.prototype, "nullSwitch", 2);
B([
  v("mwc-menu")
], O.prototype, "multiplierMenu", 2);
B([
  v("mwc-icon-button")
], O.prototype, "multiplierButton", 2);
O = B([
  _("wizard-textfield")
], O);
var ur = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, he = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? hr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && ur(e, t, n), n;
};
let ne = class extends Ai {
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
he([
  c({ type: Boolean })
], ne.prototype, "nullable", 2);
he([
  p()
], ne.prototype, "null", 1);
he([
  c({ type: String })
], ne.prototype, "maybeValue", 1);
he([
  c({ type: String })
], ne.prototype, "defaultValue", 2);
he([
  c({ type: Array })
], ne.prototype, "reservedValues", 2);
he([
  v("mwc-switch")
], ne.prototype, "nullSwitch", 2);
ne = he([
  _("wizard-select")
], ne);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function fr(i, e, t) {
  const r = i.constructor;
  if (!t) {
    const l = `__${e}`;
    if (t = r.getPropertyDescriptor(e, l), !t)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = t;
  let a = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(l) {
      a === "" && (a = r.getPropertyOptions(e).attribute), this.hasAttribute(a) && this.removeAttribute(a), n.set.call(this, l);
    }
  };
  return n.get && (s.get = function() {
    return n.get.call(this);
  }), s;
}
function Te(i, e, t) {
  if (e !== void 0)
    return fr(i, e, t);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class At extends St {
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
At.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const Xe = /* @__PURE__ */ new WeakMap(), G = Ge((i) => (e) => {
  const t = Xe.get(e);
  if (i === void 0 && e instanceof qe) {
    if (t !== void 0 || !Xe.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else i !== t && e.setValue(i);
  Xe.set(e, i);
});
class E extends At {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const t = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (t !== void 0 || r !== void 0 || n !== void 0) {
      const a = this.calculateAnimationStateName(!!r, !!t, !!n), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${a}-${s}`;
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
              name="${G(this.name)}"
              aria-checked="${G(r)}"
              aria-label="${G(this.ariaLabel)}"
              aria-labelledby="${G(this.ariaLabelledBy)}"
              aria-describedby="${G(this.ariaDescribedBy)}"
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
  c({ type: Boolean, reflect: !0 })
], E.prototype, "checked", void 0);
o([
  c({ type: Boolean })
], E.prototype, "indeterminate", void 0);
o([
  c({ type: Boolean, reflect: !0 })
], E.prototype, "disabled", void 0);
o([
  c({ type: String, reflect: !0 })
], E.prototype, "name", void 0);
o([
  c({ type: String })
], E.prototype, "value", void 0);
o([
  Te,
  c({ type: String, attribute: "aria-label" })
], E.prototype, "ariaLabel", void 0);
o([
  Te,
  c({ type: String, attribute: "aria-labelledby" })
], E.prototype, "ariaLabelledBy", void 0);
o([
  Te,
  c({ type: String, attribute: "aria-describedby" })
], E.prototype, "ariaDescribedBy", void 0);
o([
  c({ type: Boolean })
], E.prototype, "reducedTouchTarget", void 0);
o([
  p()
], E.prototype, "animationClass", void 0);
o([
  p()
], E.prototype, "shouldRenderRipple", void 0);
o([
  p()
], E.prototype, "focused", void 0);
o([
  p()
], E.prototype, "useStateLayerCustomProperties", void 0);
o([
  _t("mwc-ripple")
], E.prototype, "ripple", void 0);
o([
  ii({ passive: !0 })
], E.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const br = I`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let st = class extends E {
};
st.styles = [br];
st = o([
  _("mwc-checkbox")
], st);
var gr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, $ = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? vr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && gr(e, t, n), n;
};
let R = class extends D {
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
$([
  c({ type: String })
], R.prototype, "label", 2);
$([
  c({ type: String })
], R.prototype, "helper", 2);
$([
  c({ type: Boolean })
], R.prototype, "nullable", 2);
$([
  c({ type: Boolean })
], R.prototype, "defaultChecked", 2);
$([
  c({ type: String })
], R.prototype, "maybeValue", 1);
$([
  c({ type: Boolean })
], R.prototype, "disabled", 2);
$([
  p()
], R.prototype, "null", 1);
$([
  p()
], R.prototype, "checked", 1);
$([
  p()
], R.prototype, "deactivateCheckbox", 2);
$([
  p()
], R.prototype, "formfieldLabel", 1);
$([
  v("mwc-switch")
], R.prototype, "nullSwitch", 2);
$([
  v("mwc-checkbox")
], R.prototype, "checkbox", 2);
R = $([
  _("wizard-checkbox")
], R);
function yr(i, e) {
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: null, ...e?.detail }
  });
}
const _r = [
  "TransformerWinding",
  "ConductingEquipment"
], kr = [
  "GeneralEquipment",
  "PowerTransformer",
  ..._r
], xr = ["Substation", "VoltageLevel", "Bay"], Sr = ["Process", "Line"], wr = ["EqSubFunction", "EqFunction"], Er = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...kr,
  ...xr,
  ...Sr,
  ...wr
], Cr = ["ConnectivityNode", ...Er], Ar = ["GOOSESecurity", "SMVSecurity"], Dr = ["SubNetwork", ...Ar, ...Cr], Ir = ["BDA", "DA"], Nr = ["SampledValueControl", "GSEControl"], Tr = ["LogControl", "ReportControl"], Lr = [...Nr, ...Tr], Rr = ["GSE", "SMV"], zr = [
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
  ...Lr,
  ...Rr,
  ...Ir
], Pr = ["LN0", "LN"], Fr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Or = ["Subject", "IssuerName"], $r = ["MinTime", "MaxTime"], Mr = ["LNodeType", "DOType", "DAType", "EnumType"], Hr = [
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
], Vr = ["DynDataSet", "ConfDataSet"], Br = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Vr
], Ur = ["ConfLogControl", "ConfSigRef"], Gr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], qr = ["SCL", ...Dr, ...zr, ...Mr], Wr = [
  ...qr,
  ...Fr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Or,
  ...$r,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Pr,
  ...Hr,
  "DynAssociation",
  "SettingGroups",
  ...Br,
  ...Ur,
  ...Gr,
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
new Set(Wr);
ai((i) => (e) => {
  Object.keys(i).length ? e.setValue(i) : e.setValue("");
});
const Kr = 99;
Array(Kr).fill(1).map((i, e) => `${e + 1}`);
var jr = Object.defineProperty, Xr = Object.getOwnPropertyDescriptor, bi = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Xr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && jr(e, t, n), n;
};
function Q() {
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
let Be = class extends D {
  get compasSettings() {
    return Q().compasSettings;
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
    return this.valid() ? (Q().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), Q().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), Q().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), Q().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), Q().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), Q().setCompasSetting(
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
    this.dispatchEvent(yr());
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
Be.styles = I`
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
bi([
  c()
], Be.prototype, "compasSettings", 1);
Be = bi([
  _("compas-settings")
], Be);
function Dt(i, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...i, ...e?.detail }
  });
}
const gi = "NotFoundError", vi = "ApplicationError", It = "ServerError", Ut = "https://www.lfenergy.org/compas/commons/v1";
async function j(i) {
  if (!i.ok) {
    let e = vi;
    return i.status === 404 ? e = gi : i.status >= 500 && (e = It), Promise.reject({
      type: e,
      status: i.status,
      message: await Zr(i)
    });
  }
  return Promise.resolve(i.text());
}
async function Zr(i) {
  const e = await i.text(), t = await J(e);
  return yi(t) ?? i.statusText;
}
function yi(i) {
  const e = Array.from(
    i.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let t = "";
    return e.forEach((r, n) => {
      const a = r.getElementsByTagNameNS(Ut, "Code").item(0).textContent, s = r.getElementsByTagNameNS(Ut, "Message").item(0).textContent;
      n > 0 && (t += ", "), t += s, a && (t += " (" + a + ")");
    }), t;
  }
}
function J(i) {
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
function X(i) {
  return Promise.reject({ type: It, message: i.message });
}
function ot(i, e) {
  let t = e.message;
  e.status && (t += " (" + e.status + ")"), i && i.dispatchEvent(
    Dt({
      kind: "error",
      title: q("compas.error.server"),
      message: q("compas.error.serverDetails", {
        type: e.type,
        message: t
      })
    })
  );
}
function Oe(i) {
  return i.startsWith("http://") || i.startsWith("https://") ? i.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + Qr() + i;
}
function Qr() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function $e(i, e, t, r) {
  let n;
  function a(l) {
    return new Promise((m) => setTimeout(m, l));
  }
  async function s() {
    for (; n !== void 0; )
      await a(250);
  }
  return new Promise((l, m) => {
    n = new WebSocket(t), n.onopen = () => {
      n?.send(r);
    }, n.onmessage = (h) => {
      J(h.data).then((b) => {
        if (b.documentElement.localName === "ErrorResponse") {
          const U = yi(b);
          m({ type: vi, message: U });
        } else
          l(b);
        n?.close();
      }).catch((b) => {
        m(b), n?.close();
      });
    }, n.onerror = () => {
      m({
        type: It,
        message: `Websocket Error in service "${e}"`
      }), n?.close();
    }, n.onclose = () => {
      n = void 0;
    }, i.dispatchEvent(Ve(s()));
  });
}
const A = "https://www.lfenergy.org/compas/SclDataService/v1";
var we = /* @__PURE__ */ ((i) => (i.MAJOR = "MAJOR", i.MINOR = "MINOR", i.PATCH = "PATCH", i))(we || {});
function pe() {
  function i() {
    return Q().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return Q().useWebsockets();
  }
  function t() {
    const r = i() + "/common/v1/type/list";
    return fetch(r).catch(X).then(j).then(J);
  }
  return {
    listOrderedSclTypes() {
      return t().then((r) => Array.from(r.querySelectorAll("*|Type") ?? []).sort(
        (n, a) => {
          const s = n.getElementsByTagNameNS(A, "Description").item(0).textContent ?? "", l = a.getElementsByTagNameNS(A, "Description").item(0).textContent ?? "";
          return s.localeCompare(l);
        }
      ));
    },
    listScls(r) {
      const n = i() + "/scl/v1/" + r + "/list";
      return fetch(n).catch(X).then(j).then(J);
    },
    listSclVersions(r, n) {
      const a = i() + "/scl/v1/" + r + "/" + n + "/versions";
      return fetch(a).catch(X).then(j).then(J);
    },
    getSclDocument(r, n, a) {
      if (e()) {
        const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${A}">
           <sds:Id>${a}</sds:Id>
         </sds:GetWsRequest>`, m = i() + "/scl-ws/v1/" + n + "/get";
        return $e(
          r,
          "CompasSclDataService",
          Oe(m),
          l
        ).then(te);
      }
      const s = i() + "/scl/v1/" + n + "/" + a;
      return fetch(s).catch(X).then(j).then(J).then(te);
    },
    getSclDocumentVersion(r, n, a, s) {
      if (e()) {
        const m = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${A}">
           <sds:Id>${a}</sds:Id>
           <sds:Version>${s}</sds:Version>
         </sds:GetVersionWsRequest>`, h = i() + "/scl-ws/v1/" + n + "/get-version";
        return $e(
          r,
          "CompasSclDataService",
          Oe(h),
          m
        ).then(te);
      }
      const l = i() + "/scl/v1/" + n + "/" + a + "/" + s;
      return fetch(l).catch(X).then(j).then(J).then(te);
    },
    deleteSclDocumentVersion(r, n, a) {
      const s = i() + "/scl/v1/" + r + "/" + n + "/" + a;
      return fetch(s, { method: "DELETE" }).catch(X).then(j);
    },
    deleteSclDocument(r, n) {
      const a = i() + "/scl/v1/" + r + "/" + n;
      return fetch(a, { method: "DELETE" }).catch(X).then(j);
    },
    addSclDocument(r, n, a) {
      if (e()) {
        const m = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${A}">
           <sds:Name>${a.sclName}</sds:Name>
           <sds:Comment>${a.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${xe(
          new XMLSerializer().serializeToString(a.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, h = i() + "/scl-ws/v1/" + n + "/create";
        return $e(
          r,
          "CompasSclDataService",
          Oe(h),
          m
        ).then(te);
      }
      const s = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${A}">
            <sds:Name>${a.sclName}</sds:Name>
            <sds:Comment>${a.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${xe(
        new XMLSerializer().serializeToString(a.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, l = i() + "/scl/v1/" + n;
      return fetch(l, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: s
      }).catch(X).then(j).then(J).then(te);
    },
    updateSclDocument(r, n, a, s) {
      if (e()) {
        const h = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${A}">
           <sds:Id>${a}</sds:Id>
           <sds:ChangeSet>${s.changeSet}</sds:ChangeSet>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${xe(
          new XMLSerializer().serializeToString(s.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, b = i() + "/scl-ws/v1/" + n + "/update";
        return $e(
          r,
          "CompasSclDataService",
          Oe(b),
          h
        ).then(te);
      }
      const l = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${A}">
           <sds:ChangeSet>${s.changeSet}</sds:ChangeSet>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${xe(
        new XMLSerializer().serializeToString(s.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, m = i() + "/scl/v1/" + n + "/" + a;
      return fetch(m, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: l
      }).catch(X).then(j).then(J).then(te);
    }
  };
}
var Jr = Object.defineProperty, Yr = Object.getOwnPropertyDescriptor, _i = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Yr(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && Jr(e, t, n), n;
};
let Ue = class extends D {
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
Ue.styles = I`
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
_i([
  c({
    type: String
  })
], Ue.prototype, "header", 2);
Ue = _i([
  _("wizard-divider")
], Ue);
var en = Object.defineProperty, tn = Object.getOwnPropertyDescriptor, ki = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? tn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && en(e, t, n), n;
};
function rn(i) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: i }
  });
}
let ct = class extends D {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    pe().listOrderedSclTypes().then((i) => this.sclTypes = i);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? d` <mwc-list>
        <mwc-list-item><i>${f("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : d` <mwc-list>
      ${this.sclTypes.map((i) => {
      const e = i.getElementsByTagNameNS(A, "Code").item(0).textContent ?? "", t = i.getElementsByTagNameNS(A, "Description").item(0).textContent ?? "";
      return d`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(rn(e))}
        >
          <span>${t} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : d` <compas-loading></compas-loading> `;
  }
};
ki([
  c()
], ct.prototype, "sclTypes", 2);
ct = ki([
  _("compas-scltype-list")
], ct);
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
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, n = this.hasMeta && this.left ? this.renderMeta() : d``, a = this.renderRipple();
    return d`
      ${a}
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
      ${n}`;
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
  c({ type: Boolean })
], Le.prototype, "left", void 0);
o([
  c({ type: String, reflect: !0 })
], Le.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const xi = I`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ge = class extends Le {
};
ge.styles = [Ct, xi];
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
var u = {
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
}, N = /* @__PURE__ */ new Set();
N.add(u.BACKSPACE);
N.add(u.ENTER);
N.add(u.SPACEBAR);
N.add(u.PAGE_UP);
N.add(u.PAGE_DOWN);
N.add(u.END);
N.add(u.HOME);
N.add(u.ARROW_LEFT);
N.add(u.ARROW_UP);
N.add(u.ARROW_RIGHT);
N.add(u.ARROW_DOWN);
N.add(u.DELETE);
N.add(u.ESCAPE);
N.add(u.TAB);
var z = {
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
}, T = /* @__PURE__ */ new Map();
T.set(z.BACKSPACE, u.BACKSPACE);
T.set(z.ENTER, u.ENTER);
T.set(z.SPACEBAR, u.SPACEBAR);
T.set(z.PAGE_UP, u.PAGE_UP);
T.set(z.PAGE_DOWN, u.PAGE_DOWN);
T.set(z.END, u.END);
T.set(z.HOME, u.HOME);
T.set(z.ARROW_LEFT, u.ARROW_LEFT);
T.set(z.ARROW_UP, u.ARROW_UP);
T.set(z.ARROW_RIGHT, u.ARROW_RIGHT);
T.set(z.ARROW_DOWN, u.ARROW_DOWN);
T.set(z.DELETE, u.DELETE);
T.set(z.ESCAPE, u.ESCAPE);
T.set(z.TAB, u.TAB);
var oe = /* @__PURE__ */ new Set();
oe.add(u.PAGE_UP);
oe.add(u.PAGE_DOWN);
oe.add(u.END);
oe.add(u.HOME);
oe.add(u.ARROW_LEFT);
oe.add(u.ARROW_UP);
oe.add(u.ARROW_RIGHT);
oe.add(u.ARROW_DOWN);
function ie(i) {
  var e = i.key;
  if (N.has(e))
    return e;
  var t = T.get(i.keyCode);
  return t || u.UNKNOWN;
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
}, L = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const dt = (i, e) => i - e, nn = (i, e) => {
  const t = Array.from(i), r = Array.from(e), n = { added: [], removed: [] }, a = t.sort(dt), s = r.sort(dt);
  let l = 0, m = 0;
  for (; l < a.length || m < s.length; ) {
    const h = a[l], b = s[m];
    if (h === b) {
      l++, m++;
      continue;
    }
    if (h !== void 0 && (b === void 0 || h < b)) {
      n.removed.push(h), l++;
      continue;
    }
    if (b !== void 0 && (h === void 0 || b < h)) {
      n.added.push(b), m++;
      continue;
    }
  }
  return n;
}, an = ["input", "button", "textarea", "select"];
function Ee(i) {
  return i instanceof Set;
}
const Ze = (i) => {
  const e = i === L.UNSET_INDEX ? /* @__PURE__ */ new Set() : i;
  return Ee(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Nt extends wt {
  constructor(e) {
    super(Object.assign(Object.assign({}, Nt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = L.UNSET_INDEX, this.focusedItemIndex_ = L.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Me;
  }
  static get numbers() {
    return L;
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
        const r = t === L.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([t]);
      }
    } else if (Ee(t))
      if (t.size) {
        const r = Array.from(t).sort(dt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = L.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Ze(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = ie(e) === "ArrowLeft", a = ie(e) === "ArrowUp", s = ie(e) === "ArrowRight", l = ie(e) === "ArrowDown", m = ie(e) === "Home", h = ie(e) === "End", b = ie(e) === "Enter", U = ie(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || h ? (e.preventDefault(), this.focusLastElement()) : (l || m) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let P = this.adapter.getFocusedElementIndex();
    if (P === -1 && (P = r, P < 0))
      return;
    let g;
    if (this.isVertical_ && l || !this.isVertical_ && s)
      this.preventDefaultEvent(e), g = this.focusNextElement(P);
    else if (this.isVertical_ && a || !this.isVertical_ && n)
      this.preventDefaultEvent(e), g = this.focusPrevElement(P);
    else if (m)
      this.preventDefaultEvent(e), g = this.focusFirstElement();
    else if (h)
      this.preventDefaultEvent(e), g = this.focusLastElement();
    else if ((b || U) && t) {
      const k = e.target;
      if (k && k.tagName === "A" && b)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(P, !0);
    }
    this.focusedItemIndex_ = P, g !== void 0 && (this.setTabindexAtIndex_(g), this.focusedItemIndex_ = g);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, t, r) {
    e !== L.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, t, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    an.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, t = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== L.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), t && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, t = !0) {
    const r = Ze(this.selectedIndex_), n = nn(r, e);
    if (!(!n.removed.length && !n.added.length)) {
      for (const a of n.removed)
        t && this.adapter.setSelectedStateForElementIndex(a, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !1);
      for (const a of n.added)
        t && this.adapter.setSelectedStateForElementIndex(a, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(a, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, n);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === L.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Me.ARIA_CURRENT));
    const t = this.ariaCurrentAttrValue_ !== null, r = t ? Me.ARIA_CURRENT : Me.ARIA_SELECTED;
    this.selectedIndex_ !== L.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = t ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === L.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== L.UNSET_INDEX ? e = this.selectedIndex_ : Ee(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === L.UNSET_INDEX || this.isIndexInRange_(e);
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
    let n = e;
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, t) : t || r ? this.setSingleSelectionAtIndex_(e, t) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(L.UNSET_INDEX), t && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, t, r = !0) {
    let n = !1;
    t === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = t;
    const a = Ze(this.selectedIndex_);
    n ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, r);
  }
}
function sn(i, e = 50) {
  let t;
  return function(r = !0) {
    clearTimeout(t), t = setTimeout(() => {
      i(r);
    }, e);
  };
}
const He = (i) => i.hasAttribute("mwc-list-item");
function on() {
  const i = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), i();
}
class M extends St {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Nt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = sn(this.layout.bind(this));
    this.debouncedLayout = (t = !0) => {
      on.call(this), e(t);
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
    for (const s of t)
      He(s) && (r.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = r;
    const n = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, l) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && n.add(l);
    }), this.multi)
      this.select(n);
    else {
      const s = n.size ? n.entries().next().value[1] : -1;
      this.select(s);
    }
    const a = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
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
          role="${G(e)}"
          aria-label="${G(t)}"
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
      const t = this.getIndexOfTarget(e), r = e.target, n = He(r);
      this.mdcFoundation.handleKeydown(e, n, t);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let t = this.getIndexOfTarget(e);
      if (t === -1 && (this.layout(), t = this.getIndexOfTarget(e), t === -1) || this.items[t].disabled)
        return;
      const n = e.detail.selected, a = e.detail.source;
      this.mdcFoundation.handleSingleSelection(t, a === "interaction", n), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const t = this.items, r = e.composedPath();
    for (const n of r) {
      let a = -1;
      if (er(n) && He(n) && (a = t.indexOf(n)), a !== -1)
        return a;
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
        const n = this.items[e];
        return n ? n.getAttribute(t) : "";
      },
      setAttributeForElementIndex: (e, t, r) => {
        if (!this.mdcRoot)
          return;
        const n = this.items[e];
        n && n.setAttribute(t, r);
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
        const n = new CustomEvent("selected", r);
        this.dispatchEvent(n);
      },
      isFocusInsideList: () => rr(this),
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
    const e = fi();
    if (!e.length)
      return -1;
    for (let t = e.length - 1; t >= 0; t--) {
      const r = e[t];
      if (He(r))
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
  c({ type: String })
], M.prototype, "emptyMessage", void 0);
o([
  v(".mdc-deprecated-list")
], M.prototype, "mdcRoot", void 0);
o([
  ri("", !0, "*")
], M.prototype, "assignedElements", void 0);
o([
  ri("", !0, '[tabindex="0"]')
], M.prototype, "tabbableElements", void 0);
o([
  c({ type: Boolean }),
  K(function(i) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(i);
  })
], M.prototype, "activatable", void 0);
o([
  c({ type: Boolean }),
  K(function(i, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(i), e !== void 0 && this.layout();
  })
], M.prototype, "multi", void 0);
o([
  c({ type: Boolean }),
  K(function(i) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(i);
  })
], M.prototype, "wrapFocus", void 0);
o([
  c({ type: String }),
  K(function(i, e) {
    e !== void 0 && this.updateItems();
  })
], M.prototype, "itemRoles", void 0);
o([
  c({ type: String })
], M.prototype, "innerRole", void 0);
o([
  c({ type: String })
], M.prototype, "innerAriaLabel", void 0);
o([
  c({ type: Boolean })
], M.prototype, "rootTabbable", void 0);
o([
  c({ type: Boolean, reflect: !0 }),
  K(function(i) {
    var e, t;
    if (i) {
      const r = (t = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && t !== void 0 ? t : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !i && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], M.prototype, "noninteractive", void 0);
var cn = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, fe = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? dn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && cn(e, t, n), n;
};
function lt(i) {
  return !i.closest("filtered-list") || !i.parentElement || i.parentElement instanceof V ? i : lt(i.parentElement);
}
function ln(i, e) {
  const t = i.innerText + `
`, r = Array.from(i.children).map((l) => l.innerText).join(`
`), n = i.value, a = (t + r + n).toUpperCase(), s = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((l) => new RegExp(
    `*${l}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? lt(i).classList.remove("hidden") : lt(i).classList.add("hidden");
}
let V = class extends M {
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
      (i) => ln(i, this.searchField.value)
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
        <abbr title="${this.searchFieldLabel ?? q("filter")}"
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
V.styles = I`
    ${ni(Di.styles)}

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
  c({ type: String })
], V.prototype, "searchFieldLabel", 2);
fe([
  c({ type: Boolean })
], V.prototype, "disableCheckAll", 2);
fe([
  p()
], V.prototype, "existCheckListItem", 1);
fe([
  p()
], V.prototype, "isAllSelected", 1);
fe([
  p()
], V.prototype, "isSomeSelected", 1);
fe([
  v("mwc-textfield")
], V.prototype, "searchField", 2);
V = fe([
  _("filtered-list")
], V);
var mn = Object.defineProperty, pn = Object.getOwnPropertyDescriptor, Re = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? pn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && mn(e, t, n), n;
};
let ue = class extends V {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const i = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => i.push(e.value)) : i.push(this.selected.value), this.dispatchEvent(un(i)));
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
        heading="${this.header ? this.header : q("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${q("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
ue.styles = I`
    ${ni(V.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
Re([
  c()
], ue.prototype, "header", 2);
Re([
  c()
], ue.prototype, "icon", 2);
Re([
  c({ type: Boolean })
], ue.prototype, "disabled", 2);
Re([
  v("#filterDialog")
], ue.prototype, "filterDialog", 2);
ue = Re([
  _("oscd-filter-button")
], ue);
function un(i, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: i, ...e?.detail }
  });
}
var hn = Object.defineProperty, fn = Object.getOwnPropertyDescriptor, _e = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? fn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && hn(e, t, n), n;
};
function bn(i) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: i }
  });
}
let ae = class extends D {
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
    this.type && pe().listScls(this.type).then((i) => {
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
      const n = e.getElementsByTagNameNS(A, "Version").item(0).textContent ?? "";
      return d` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(bn(t))}
              >
                ${r} (${n})
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
ae.styles = I`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
_e([
  c()
], ae.prototype, "type", 2);
_e([
  p()
], ae.prototype, "items", 2);
_e([
  p()
], ae.prototype, "labels", 2);
_e([
  p()
], ae.prototype, "selectedLabels", 2);
_e([
  p()
], ae.prototype, "filteredItems", 1);
ae = _e([
  _("compas-scl-list")
], ae);
function gn(i, e, t) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { doc: i, docName: e, ...t?.detail }
  });
}
const vn = "http://www.iec.ch/61850/2003/SCL", Ae = "https://www.lfenergy.org/compas/extension/v1", mt = "compas", ve = "compas_scl", Gt = 20;
function De(i, e) {
  return i.querySelector(`:scope > Private[type="${e}"]`);
}
function yn(i, e) {
  const t = i.ownerDocument.createElementNS(
    vn,
    "Private"
  );
  return t.setAttribute("type", e), t;
}
function pt(i) {
  return i?.querySelector(":scope > SclName") ?? null;
}
function _n(i, e) {
  if (i && e) {
    const t = pt(i), r = pt(e);
    r && t ? r.textContent = t.textContent : r && (r.textContent = "");
  }
}
function ut(i) {
  return i?.querySelector(":scope > SclFileType") ?? null;
}
function kn(i, e) {
  if (i && e) {
    const t = ut(i), r = ut(e);
    r && t ? r.textContent = t.textContent : r && (r.textContent = "");
  }
}
function ht(i) {
  return Array.from(i.querySelectorAll(":scope > Labels")).find(
    (e) => e.namespaceURI === Ae
  ) ?? null;
}
function xn(i) {
  return En(
    i,
    Ae,
    mt
  ), i.ownerDocument.createElementNS(
    Ae,
    mt + ":Labels"
  );
}
function Sn(i, e) {
  const t = i.ownerDocument.createElementNS(
    Ae,
    mt + ":Label"
  );
  return t.textContent = e, i.append(t), t;
}
function wn(i, e) {
  if (i && e) {
    const t = ht(i), r = ht(e);
    r && e.removeChild(r), t && e.appendChild(
      e.ownerDocument.adoptNode(t.cloneNode(!0))
    );
  }
}
function En(i, e, t) {
  const r = i.ownerDocument.firstElementChild;
  r.hasAttribute("xmlns:" + t) || r.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:" + t,
    e
  );
}
const ft = 3;
function bt(i) {
  if (i.lastIndexOf(".") == i.length - (ft + 1))
    return i.substring(i.lastIndexOf(".") + 1).toUpperCase();
  throw new Error(q("compas.error.type"));
}
function qt(i) {
  let e = i;
  return e.length > ft && e.lastIndexOf(".") == e.length - (ft + 1) && (e = e.substring(0, e.lastIndexOf("."))), e;
}
function Si(i) {
  const e = i.querySelector(":scope > Header"), t = De(i, ve), r = e?.getAttribute("version") ?? "", n = pt(t)?.textContent ?? "", a = ut(t)?.textContent ?? "SCD";
  let s = n;
  return s === "" && (s = e?.getAttribute("id") ?? ""), s += "-" + r + "." + a?.toLowerCase(), s;
}
function Cn(i, e, t) {
  const n = e.querySelector(":root > Header")?.getAttribute("id") ?? "";
  i.dispatchEvent(Dt({ kind: "reset" })), i.dispatchEvent(
    gn(
      e,
      Si(e.documentElement),
      { detail: { docId: n } }
    )
  );
}
var An = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, Ke = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Dn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && An(e, t, n), n;
};
function Wt(i, e, t, r) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: i, doc: e, docName: t, docId: r }
  });
}
let Ie = class extends D {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(i) {
    const e = await pe().getSclDocument(this, this.selectedType ?? "", i ?? "").catch((t) => ot(this, t));
    if (e instanceof Document) {
      const t = Si(e.documentElement);
      this.dispatchEvent(Wt(!1, e, t, i));
    }
  }
  async getSclFile(i) {
    const e = i.target?.files?.item(0) ?? !1;
    if (!e) return;
    const t = await e.text(), r = e.name, n = new DOMParser().parseFromString(t, "application/xml");
    this.dispatchEvent(Wt(!0, n, r));
  }
  renderFileSelect() {
    return d`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(i) => this.dispatchEvent(Ve(this.getSclFile(i)))}
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
      Ve(
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
Ke([
  c()
], Ie.prototype, "selectedType", 2);
Ke([
  c()
], Ie.prototype, "allowLocalFile", 2);
Ke([
  v("#scl-file")
], Ie.prototype, "sclFileUI", 2);
Ie = Ke([
  _("compas-open")
], Ie);
var In = Object.defineProperty, Qe = (i, e, t, r) => {
  for (var n = void 0, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = s(e, t, n) || n);
  return n && In(e, t, n), n;
};
function Nn(i) {
  class e extends i {
    firstUpdated() {
      this.checkExistInCompas();
    }
    updated(r) {
      super.updated(r), r.has("docId") && (this.existInCompas = void 0, this.checkExistInCompas());
    }
    callService(r, n) {
      return pe().listSclVersions(r, n);
    }
    checkExistInCompas() {
      if (this.docId) {
        const r = bt(this.docName);
        this.callService(r, this.docId).then(() => this.existInCompas = !0).catch((n) => {
          n.type === gi && (this.existInCompas = !1);
        });
      } else
        this.existInCompas = !1;
    }
  }
  return Qe([
    c()
  ], e.prototype, "docName"), Qe([
    c()
  ], e.prototype, "docId"), Qe([
    p()
  ], e.prototype, "existInCompas"), e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Kt = Symbol("selection controller");
class Tn {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class Tt {
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
    let n = r[Kt];
    return n === void 0 && (n = new Tt(r), r[Kt] = n), n;
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
    const t = this.getOrdered(e), r = t.indexOf(e), n = t[r - 1] || t[t.length - 1];
    return this.select(n), n;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(e) {
    const t = this.getOrdered(e), r = t.indexOf(e), n = t[r + 1] || t[0];
    return this.select(n), n;
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
    return t.ordered || (t.ordered = Array.from(t.set), t.ordered.sort((r, n) => r.compareDocumentPosition(n) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), t.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new Tn()), this.sets[e];
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
var Ln = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, Rn = {
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
var zn = (
  /** @class */
  function(i) {
    ui(e, i);
    function e(t) {
      return i.call(this, me(me({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Rn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ln;
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
  }(wt)
);
class C extends At {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = zn, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new Et(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
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
    const n = this._checked;
    e !== n && (this._checked = e, this.formElement && (this.formElement.checked = e), (t = this._selectionController) === null || t === void 0 || t.update(this), e === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", n), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
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
    super.connectedCallback(), this._selectionController = Tt.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, tr(this.mdcRoot)), { setNativeControlDisabled: (e) => {
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
          aria-label="${G(this.ariaLabel)}"
          aria-labelledby="${G(this.ariaLabelledBy)}"
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
  p()
], C.prototype, "useStateLayerCustomProperties", void 0);
o([
  c({ type: Boolean })
], C.prototype, "global", void 0);
o([
  c({ type: Boolean, reflect: !0 })
], C.prototype, "checked", null);
o([
  c({ type: Boolean }),
  K(function(i) {
    this.mdcFoundation.setDisabled(i);
  })
], C.prototype, "disabled", void 0);
o([
  c({ type: String }),
  K(function(i) {
    this._handleUpdatedValue(i);
  })
], C.prototype, "value", void 0);
o([
  c({ type: String })
], C.prototype, "name", void 0);
o([
  c({ type: Boolean })
], C.prototype, "reducedTouchTarget", void 0);
o([
  c({ type: Number })
], C.prototype, "formElementTabIndex", void 0);
o([
  p()
], C.prototype, "focused", void 0);
o([
  p()
], C.prototype, "shouldRenderRipple", void 0);
o([
  _t("mwc-ripple")
], C.prototype, "ripple", void 0);
o([
  Te,
  c({ attribute: "aria-label" })
], C.prototype, "ariaLabel", void 0);
o([
  Te,
  c({ attribute: "aria-labelledby" })
], C.prototype, "ariaLabelledBy", void 0);
o([
  ii({ passive: !0 })
], C.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Pn = I`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let gt = class extends C {
};
gt.styles = [Pn];
gt = o([
  _("mwc-radio")
], gt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ze extends w {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, t = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, n = this.hasMeta && this.left ? this.renderMeta() : d``, a = this.renderRipple();
    return d`
      ${a}
      ${r}
      ${this.left ? "" : t}
      <mwc-radio
          global
          class=${ye(e)}
          tabindex=${this.tabindex}
          name=${G(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? t : ""}
      ${n}`;
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
], ze.prototype, "slotElement", void 0);
o([
  v("mwc-radio")
], ze.prototype, "radioElement", void 0);
o([
  c({ type: Boolean })
], ze.prototype, "left", void 0);
o([
  c({ type: String, reflect: !0 })
], ze.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let vt = class extends ze {
};
vt.styles = [Ct, xi];
vt = o([
  _("mwc-radio-list-item")
], vt);
var Fn = Object.getOwnPropertyDescriptor, On = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Fn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = s(n) || n);
  return n;
};
const $n = /* @__PURE__ */ new Map([
  [we.MAJOR, { translationKey: "compas.changeset.major" }],
  [we.MINOR, { translationKey: "compas.changeset.minor" }],
  [we.PATCH, { translationKey: "compas.changeset.patch" }]
]);
let jt = class extends D {
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
                          ${f($n.get(i).translationKey)}
                        </mwc-radio-list-item>`
    )}
      </mwc-list>
    `;
  }
};
jt = On([
  _("compas-changeset-radiogroup")
], jt);
var Mn = Object.getOwnPropertyDescriptor, Hn = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Mn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = s(n) || n);
  return n;
};
let yt = class extends D {
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
yt.styles = I`
    wizard-textfield {
      width: 100%;
    }
  `;
yt = Hn([
  _("compas-comment")
], yt);
var Vn = Object.defineProperty, Bn = Object.getOwnPropertyDescriptor, ke = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Bn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && Vn(e, t, n), n;
};
let se = class extends D {
  constructor() {
    super(...arguments), this.originalLabelsElement = null;
  }
  set privateElement(i) {
    this.originalLabelsElement = ht(i), this.originalLabelsElement ? this.newLabelsElement = this.originalLabelsElement.cloneNode(!0) : this.newLabelsElement = xn(i);
  }
  get labels() {
    return Array.from(
      this.newLabelsElement?.querySelectorAll(":scope > Label") ?? []
    ).filter((i) => i.namespaceURI === Ae).sort(
      (i, e) => (i.textContent ?? "").localeCompare(e.textContent ?? "")
    );
  }
  addLabel() {
    if (this.newLabelField.checkValidity()) {
      const i = this.newLabelField.value;
      Sn(this.newLabelsElement, i), this.newLabelField.value = "", this.requestUpdate("labels");
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
            ?disabled="${i.length >= Gt}"
            .maybeValue=${null}
            pattern="[A-Za-z][0-9A-Za-z_-]*"
            required
          >
          </wizard-textfield>
        </div>
        <div style="display: flex; align-items: center; height: 56px;">
          <mwc-icon-button
            icon="new_label"
            ?disabled="${i.length >= Gt}"
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
se.styles = I`
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
ke([
  c()
], se.prototype, "privateElement", 1);
ke([
  c()
], se.prototype, "originalLabelsElement", 2);
ke([
  c()
], se.prototype, "newLabelsElement", 2);
ke([
  p()
], se.prototype, "labels", 1);
ke([
  v("wizard-textfield#newLabel")
], se.prototype, "newLabelField", 2);
se = ke([
  _("compas-labels-field")
], se);
var Un = Object.getOwnPropertyDescriptor, Gn = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Un(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = s(n) || n);
  return n;
};
let Xt = class extends D {
  render() {
    return d`
      <mwc-list>
        <mwc-list-item><i>${f("compas.loading")}</i></mwc-list-item>
      </mwc-list>
    `;
  }
};
Xt = Gn([
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
const Zt = (i, e) => {
  const t = i.startNode.parentNode, r = e === void 0 ? i.endNode : e.startNode, n = t.insertBefore(le(), r);
  t.insertBefore(le(), r);
  const a = new We(i.options);
  return a.insertAfterNode(n), a;
}, de = (i, e) => (i.setValue(e), i.commit(), i), Je = (i, e, t) => {
  const r = i.startNode.parentNode, n = t ? t.startNode : i.endNode, a = e.endNode.nextSibling;
  a !== n && Ui(r, e.startNode, a, n);
}, Ye = (i) => {
  li(i.startNode.parentNode, i.startNode, i.endNode.nextSibling);
}, Qt = (i, e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= t; n++)
    r.set(i[n], n);
  return r;
}, Jt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), qn = Ge((i, e, t) => {
  let r;
  return t === void 0 ? t = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof We))
      throw new Error("repeat can only be used in text bindings");
    const a = Jt.get(n) || [], s = Yt.get(n) || [], l = [], m = [], h = [];
    let b = 0;
    for (const H of i)
      h[b] = r ? r(H, b) : b, m[b] = t(H, b), b++;
    let U, P, g = 0, k = a.length - 1, x = 0, F = m.length - 1;
    for (; g <= k && x <= F; )
      if (a[g] === null)
        g++;
      else if (a[k] === null)
        k--;
      else if (s[g] === h[x])
        l[x] = de(a[g], m[x]), g++, x++;
      else if (s[k] === h[F])
        l[F] = de(a[k], m[F]), k--, F--;
      else if (s[g] === h[F])
        l[F] = de(a[g], m[F]), Je(n, a[g], l[F + 1]), g++, F--;
      else if (s[k] === h[x])
        l[x] = de(a[k], m[x]), Je(n, a[k], a[g]), k--, x++;
      else if (U === void 0 && (U = Qt(h, x, F), P = Qt(s, g, k)), !U.has(s[g]))
        Ye(a[g]), g++;
      else if (!U.has(s[k]))
        Ye(a[k]), k--;
      else {
        const H = P.get(h[x]), je = H !== void 0 ? a[H] : null;
        if (je === null) {
          const Rt = Zt(n, a[g]);
          de(Rt, m[x]), l[x] = Rt;
        } else
          l[x] = de(je, m[x]), Je(n, je, a[g]), a[H] = null;
        x++;
      }
    for (; x <= F; ) {
      const H = Zt(n, l[F + 1]);
      de(H, m[x]), l[x++] = H;
    }
    for (; g <= k; ) {
      const H = a[g++];
      H !== null && Ye(H);
    }
    Jt.set(n, l), Yt.set(n, h);
  };
});
var Wn = Object.defineProperty, Kn = Object.getOwnPropertyDescriptor, Lt = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Kn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && Wn(e, t, n), n;
};
let Ne = class extends D {
  constructor() {
    super(...arguments), this.value = "";
  }
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    pe().listOrderedSclTypes().then((i) => this.sclTypes = i);
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
      ${qn(
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
Ne.styles = I`
    mwc-select {
      width: 100%;
    }
  `;
Lt([
  c()
], Ne.prototype, "value", 2);
Lt([
  c()
], Ne.prototype, "sclTypes", 2);
Ne = Lt([
  _("compas-scltype-select")
], Ne);
var jn = Object.defineProperty, Xn = Object.getOwnPropertyDescriptor, ce = (i, e, t, r) => {
  for (var n = r > 1 ? void 0 : r ? Xn(e, t) : e, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = (r ? s(e, t, n) : s(n)) || n);
  return r && n && jn(e, t, n), n;
};
function ei() {
  return new CustomEvent("doc-saved", {
    bubbles: !0,
    composed: !0
  });
}
let W = class extends Nn(D) {
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
    const i = this.doc.documentElement, e = De(i, ve);
    this.labelsField.updateLabelsInPrivateElement(e);
  }
  processUpdatedDocument(i, e) {
    Cn(this, i), this.dispatchEvent(
      Dt({
        kind: "info",
        title: q(e)
      })
    ), this.dispatchEvent(ei());
  }
  async addSclToCompas(i) {
    const e = qt(this.nameField.value), t = this.commentField.value, r = this.sclTypeRadioGroup.getSelectedValue() ?? "";
    await pe().addSclDocument(this, r, {
      sclName: e,
      comment: t,
      doc: i
    }).then((n) => {
      this.processUpdatedDocument(n, "compas.save.addSuccess");
    }).catch((n) => ot(this, n));
  }
  async updateSclInCompas(i, e, t) {
    const r = this.changeSetRadiogroup.getSelectedValue(), n = this.commentField.value, a = bt(e);
    await pe().updateSclDocument(this, a, i, {
      changeSet: r,
      comment: n,
      doc: t
    }).then((s) => {
      this.processUpdatedDocument(s, "compas.save.updateSuccess");
    }).catch((s) => ot(this, s));
  }
  async saveToCompas() {
    this.updateLabels(), !this.docId || !this.existInCompas ? await this.addSclToCompas(this.doc) : await this.updateSclInCompas(this.docId, this.docName, this.doc);
  }
  renderSaveFilePart() {
    return d`
      <mwc-button
        label="${f("compas.save.saveFileButton")}"
        @click=${() => {
      this.updateLabels(), Ji(this.doc, this.docName), this.dispatchEvent(ei());
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
            .value="${bt(this.docName)}"
          ></compas-scltype-select>
          <compas-comment></compas-comment>
        </div>
      `;
  }
  renderLabelsPart() {
    const i = this.doc.documentElement;
    let e = De(i, ve);
    return e || (e = yn(i, ve), i.prepend(e)), d`<compas-labels-field
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
W.styles = I`
    #content > * {
      display: block;
      margin-top: 16px;
    }

    h3 {
      color: var(--mdc-theme-on-surface);
    }
  `;
ce([
  c()
], W.prototype, "doc", 2);
ce([
  c()
], W.prototype, "allowLocalFile", 2);
ce([
  v("mwc-textfield#name")
], W.prototype, "nameField", 2);
ce([
  v("compas-scltype-select")
], W.prototype, "sclTypeRadioGroup", 2);
ce([
  v("compas-changeset-radiogroup")
], W.prototype, "changeSetRadiogroup", 2);
ce([
  v("compas-comment")
], W.prototype, "commentField", 2);
ce([
  v("compas-labels-field")
], W.prototype, "labelsField", 2);
W = ce([
  _("compas-save")
], W);
const Zn = {
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
}, Qn = {
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
}, ti = { en: Qn, de: Zn };
async function Jn(i) {
  return Object.keys(ti).includes(i) ? ti[i] : {};
}
Ri({ loader: Jn, empty: (i) => i });
const Yn = localStorage.getItem("language") || "en";
Oi(Yn);
var ea = Object.defineProperty, Y = (i, e, t, r) => {
  for (var n = void 0, a = i.length - 1, s; a >= 0; a--)
    (s = i[a]) && (n = s(e, t, n) || n);
  return n && ea(e, t, n), n;
};
class ee extends D {
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
      const e = De(
        this.doc.documentElement,
        ve
      ), t = De(
        this.saveToDoc.documentElement,
        ve
      );
      _n(t, e), kn(t, e), wn(t, e);
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
        Ve(this.compasSaveElement.saveToCompas())
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
    this.styles = I`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
  }
}
Y([
  c()
], ee.prototype, "doc");
Y([
  c()
], ee.prototype, "docName");
Y([
  c({ type: Number })
], ee.prototype, "editCount");
Y([
  p()
], ee.prototype, "saveToDoc");
Y([
  p()
], ee.prototype, "saveToDocName");
Y([
  p()
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
