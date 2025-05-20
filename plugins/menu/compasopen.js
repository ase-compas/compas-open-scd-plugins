import { LitElement as $e, query as X, property as F, state as ee, html as T, css as _e, customElement as le, queryAsync as kn, eventOptions as Ir, queryAssignedNodes as Tr, unsafeCSS as Rr, queryAll as Mr, TemplateResult as Os, svg as me } from "lit-element";
import { NodePart as Ps, AttributePart as Fs, directive as Dr, nothing as Bs, html as yi, render as Un } from "lit-html";
import "@material/mwc-button";
import { Dialog as Hs } from "@material/mwc-dialog";
import { TextField as zs } from "@material/mwc-textfield";
import { Select as An } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-formfield";
import { List as _n } from "@material/mwc-list";
import "@material/mwc-icon";
import "@material/mwc-linear-progress";
import "@material/mwc-tab";
import "@material/mwc-tab-bar";
import "@material/mwc-top-app-bar-fixed";
import "@material/mwc-icon-button-toggle";
import { nothing as Nr } from "lit";
const Vs = 1e3 * 60, rn = "langChanged";
function Ws(t, e, a) {
  return Object.entries(sn(e || {})).reduce((d, [u, o]) => d.replace(new RegExp(`{{[  ]*${u}[  ]*}}`, "gm"), String(sn(o))), t);
}
function Us(t, e) {
  const a = t.split(".");
  let d = e.strings;
  for (; d != null && a.length > 0; )
    d = d[a.shift()];
  return d != null ? d.toString() : null;
}
function sn(t) {
  return typeof t == "function" ? t() : t;
}
const Gs = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: Us,
  interpolate: Ws,
  translationCache: {}
});
let si = Gs();
function Or(t) {
  return si = Object.assign(Object.assign({}, si), t);
}
function Ks(t) {
  window.dispatchEvent(new CustomEvent(rn, { detail: t }));
}
function js(t, e, a = si) {
  Ks({
    previousStrings: a.strings,
    previousLang: a.lang,
    lang: a.lang = t,
    strings: a.strings = e
  });
}
function qs(t, e) {
  const a = (d) => t(d.detail);
  return window.addEventListener(rn, a, e), () => window.removeEventListener(rn, a);
}
async function on(t, e = si) {
  const a = await e.loader(t, e);
  e.translationCache = {}, js(t, a, e);
}
function G(t, e, a = si) {
  let d = a.translationCache[t] || (a.translationCache[t] = a.lookup(t, a) || a.empty(t, a));
  return e = e != null ? sn(e) : null, e != null ? a.interpolate(d, e, a) : d;
}
function Pr(t) {
  return t instanceof Ps ? t.startNode.isConnected : t instanceof Fs ? t.committer.element.isConnected : t.element.isConnected;
}
function Xs(t) {
  for (const [e] of t)
    Pr(e) || t.delete(e);
}
function Zs(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Ys(t, e) {
  setInterval(() => Zs(() => Xs(t)), e);
}
const En = /* @__PURE__ */ new Map();
function Qs() {
  qs((t) => {
    for (const [e, a] of En)
      Pr(e) && Fr(e, a, t);
  });
}
Qs();
Ys(En, Vs);
function Fr(t, e, a) {
  const d = e(a);
  t.value !== d && (t.setValue(d), t.commit());
}
const Js = Dr((t) => (e) => {
  En.set(e, t), Fr(e, t);
}), Ce = (t, e, a) => Js(() => G(t, e, a));
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
const Br = /* @__PURE__ */ new WeakMap(), zi = (t) => (...e) => {
  const a = t(...e);
  return Br.set(a, !0), a;
}, oi = (t) => typeof t == "function" && Br.has(t);
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
const Gn = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, eo = (t, e, a = null) => {
  for (; e !== a; ) {
    const d = e.nextSibling;
    t.removeChild(e), e = d;
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
const ot = {}, Kn = {};
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
const Ln = `{{lit-${String(Math.random()).slice(2)}}}`, to = `<!--${Ln}-->`, io = "$lit$", no = (t) => t.index !== -1, ti = () => document.createComment(""), ro = (
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
class jn {
  constructor(e, a, d) {
    this.__parts = [], this.template = e, this.processor = a, this.options = d;
  }
  update(e) {
    let a = 0;
    for (const d of this.__parts)
      d !== void 0 && d.setValue(e[a]), a++;
    for (const d of this.__parts)
      d !== void 0 && d.commit();
  }
  _clone() {
    const e = Gn ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), a = [], d = this.template.parts, u = document.createTreeWalker(e, 133, null, !1);
    let o = 0, s = 0, h, n = u.nextNode();
    for (; o < d.length; ) {
      if (h = d[o], !no(h)) {
        this.__parts.push(void 0), o++;
        continue;
      }
      for (; s < h.index; )
        s++, n.nodeName === "TEMPLATE" && (a.push(n), u.currentNode = n.content), (n = u.nextNode()) === null && (u.currentNode = a.pop(), n = u.nextNode());
      if (h.type === "node") {
        const i = this.processor.handleTextExpression(this.options);
        i.insertAfterNode(n.previousSibling), this.__parts.push(i);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(n, h.name, h.strings, this.options));
      o++;
    }
    return Gn && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const qn = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), so = ` ${Ln} `;
class oo {
  constructor(e, a, d, u) {
    this.strings = e, this.values = a, this.type = d, this.processor = u;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */
  getHTML() {
    const e = this.strings.length - 1;
    let a = "", d = !1;
    for (let u = 0; u < e; u++) {
      const o = this.strings[u], s = o.lastIndexOf("<!--");
      d = (s > -1 || d) && o.indexOf("-->", s + 1) === -1;
      const h = ro.exec(o);
      h === null ? a += o + (d ? so : to) : a += o.substr(0, h.index) + h[1] + h[2] + io + h[3] + Ln;
    }
    return a += this.strings[e], a;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let a = this.getHTML();
    return qn !== void 0 && (a = qn.createHTML(a)), e.innerHTML = a, e;
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
const Hr = (t) => t === null || !(typeof t == "object" || typeof t == "function"), ao = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
let Yt = class {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== ot && (!Hr(e) || e !== this.value) && (this.value = e, oi(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; oi(this.value); ) {
      const e = this.value;
      this.value = ot, e(this);
    }
    this.value !== ot && this.committer.commit();
  }
};
class Vi {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(ti()), this.endNode = e.appendChild(ti());
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
    e.__insert(this.startNode = ti()), e.__insert(this.endNode = ti());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = ti()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; oi(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = ot, a(this);
    }
    const e = this.__pendingValue;
    e !== ot && (Hr(e) ? e !== this.value && this.__commitText(e) : e instanceof oo ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : ao(e) ? this.__commitIterable(e) : e === Kn ? (this.value = Kn, this.clear()) : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), this.value = e);
  }
  __commitText(e) {
    const a = this.startNode.nextSibling;
    e = e ?? "";
    const d = typeof e == "string" ? e : String(e);
    a === this.endNode.previousSibling && a.nodeType === 3 ? a.data = d : this.__commitNode(document.createTextNode(d)), this.value = e;
  }
  __commitTemplateResult(e) {
    const a = this.options.templateFactory(e);
    if (this.value instanceof jn && this.value.template === a)
      this.value.update(e.values);
    else {
      const d = new jn(a, e.processor, this.options), u = d._clone();
      d.update(e.values), this.__commitNode(u), this.value = d;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const a = this.value;
    let d = 0, u;
    for (const o of e)
      u = a[d], u === void 0 && (u = new Vi(this.options), a.push(u), d === 0 ? u.appendIntoPart(this) : u.insertAfterPart(a[d - 1])), u.setValue(o), u.commit(), d++;
    d < a.length && (a.length = d, this.clear(u && u.endNode));
  }
  clear(e = this.startNode) {
    eo(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
let zr = class {
  constructor(e, a, d) {
    if (this.value = void 0, this.__pendingValue = void 0, d.length !== 2 || d[0] !== "" || d[1] !== "")
      throw new Error("Boolean attributes can only contain a single expression");
    this.element = e, this.name = a, this.strings = d;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; oi(this.__pendingValue); ) {
      const a = this.__pendingValue;
      this.__pendingValue = ot, a(this);
    }
    if (this.__pendingValue === ot)
      return;
    const e = !!this.__pendingValue;
    this.value !== e && (e ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = e), this.__pendingValue = ot;
  }
};
class ci extends Yt {
}
let Vr = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Vr = !0, !1;
      }
    };
    window.addEventListener("test", t, t), window.removeEventListener("test", t, t);
  } catch {
  }
})();
let Wr = class {
  constructor(e, a, d) {
    this.value = void 0, this.__pendingValue = void 0, this.element = e, this.eventName = a, this.eventContext = d, this.__boundHandleEvent = (u) => this.handleEvent(u);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; oi(this.__pendingValue); ) {
      const o = this.__pendingValue;
      this.__pendingValue = ot, o(this);
    }
    if (this.__pendingValue === ot)
      return;
    const e = this.__pendingValue, a = this.value, d = e == null || a != null && (e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive), u = e != null && (a == null || d);
    d && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), u && (this.__options = lo(e), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = e, this.__pendingValue = ot;
  }
  handleEvent(e) {
    typeof this.value == "function" ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e);
  }
};
const lo = (t) => t && (Vr ? { capture: t.capture, passive: t.passive, once: t.once } : t.capture);
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
function Ct(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function In(t, e, a) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...a,
    detail: { doc: t, docName: e, ...a?.detail }
  });
}
function at(t, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: t, ...e?.detail }
  });
}
const co = "compas_scl";
function ho(t, e) {
  return t.querySelector(`:scope > Private[type="${e}"]`);
}
function uo(t) {
  return t?.querySelector(":scope > SclName") ?? null;
}
function mo(t) {
  return t?.querySelector(":scope > SclFileType") ?? null;
}
function Ur(t) {
  const e = t.querySelector(":scope > Header"), a = ho(t, co), d = e?.getAttribute("version") ?? "", u = uo(a)?.textContent ?? "", o = mo(a)?.textContent ?? "SCD";
  let s = u;
  return s === "" && (s = e?.getAttribute("id") ?? ""), s += "-" + d + "." + o?.toLowerCase(), s;
}
function fo(t, e, a) {
  const u = e.querySelector(":root > Header")?.getAttribute("id") ?? "";
  t.dispatchEvent(Ct({ kind: "reset" })), t.dispatchEvent(
    In(
      e,
      a || Ur(e.documentElement),
      { detail: { docId: u } }
    )
  );
}
function Si(t, e) {
  let a = "", d = "";
  return e || (e = "	"), t.split(/>\s*</).forEach(function(u) {
    u.match(/^\/\w/) && (d = d.substring(e.length)), a += d + "<" + u + `>\r
`, u.match(/^<?\w[^>]*[^/]$/) && (d += e);
  }), a.substring(1, a.length - 3);
}
function po(t, e) {
  let a = "", d = "";
  return e || (e = "	"), t.split(/>\s*</).forEach(function(u) {
    u.match(/^\/\w/) && (d = d.substring(e.length)), a += d + "<" + u + `>\r
`, u.match(/^<?\w[^>]*[^/]$/) && (d += e);
  }), a.substring(1, a.length - 3);
}
var an = function(t, e) {
  return an = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, d) {
    a.__proto__ = d;
  } || function(a, d) {
    for (var u in d) Object.prototype.hasOwnProperty.call(d, u) && (a[u] = d[u]);
  }, an(t, e);
};
function di(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  an(t, e);
  function a() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (a.prototype = e.prototype, new a());
}
var lt = function() {
  return lt = Object.assign || function(e) {
    for (var a, d = 1, u = arguments.length; d < u; d++) {
      a = arguments[d];
      for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }
    return e;
  }, lt.apply(this, arguments);
};
function H(t, e, a, d) {
  var u = arguments.length, o = u < 3 ? e : d === null ? d = Object.getOwnPropertyDescriptor(e, a) : d, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, a, d);
  else for (var h = t.length - 1; h >= 0; h--) (s = t[h]) && (o = (u < 3 ? s(o) : u > 3 ? s(e, a, o) : s(e, a)) || o);
  return u > 3 && o && Object.defineProperty(e, a, o), o;
}
function Ci(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, a = e && t[e], d = 0;
  if (a) return a.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && d >= t.length && (t = void 0), { value: t && t[d++], done: !t };
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
function go(t, e) {
  var a = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return a.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const vo = (t) => t.nodeType === Node.ELEMENT_NODE;
function Tn(t) {
  return {
    addClass: (e) => {
      t.classList.add(e);
    },
    removeClass: (e) => {
      t.classList.remove(e);
    },
    hasClass: (e) => t.classList.contains(e)
  };
}
const Gr = () => {
}, bo = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Gr, bo);
document.removeEventListener("x", Gr);
const Kr = (t = window.document) => {
  let e = t.activeElement;
  const a = [];
  if (!e)
    return a;
  for (; e && (a.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return a;
}, wo = (t) => {
  const e = Kr();
  if (!e.length)
    return !1;
  const a = e[e.length - 1], d = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let u = [];
  const o = (s) => {
    u = s.composedPath();
  };
  return document.body.addEventListener("check-if-focused", o), a.dispatchEvent(d), document.body.removeEventListener("check-if-focused", o), u.indexOf(t) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class hi extends $e {
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
var ui = (
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
var yo = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, So = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Xn = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Co(t, e, a) {
  if (!t)
    return { x: 0, y: 0 };
  var d = e.x, u = e.y, o = d + a.left, s = u + a.top, h, n;
  if (t.type === "touchstart") {
    var i = t;
    h = i.changedTouches[0].pageX - o, n = i.changedTouches[0].pageY - s;
  } else {
    var r = t;
    h = r.pageX - o, n = r.pageY - s;
  }
  return { x: h, y: n };
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
var Zn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Yn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], xi = [], xo = (
  /** @class */
  function(t) {
    di(e, t);
    function e(a) {
      var d = t.call(this, lt(lt({}, e.defaultAdapter), a)) || this;
      return d.activationAnimationHasEnded = !1, d.activationTimer = 0, d.fgDeactivationRemovalTimer = 0, d.fgScale = "0", d.frame = { width: 0, height: 0 }, d.initialSize = 0, d.layoutFrame = 0, d.maxRadius = 0, d.unboundedCoords = { left: 0, top: 0 }, d.activationState = d.defaultActivationState(), d.activationTimerCallback = function() {
        d.activationAnimationHasEnded = !0, d.runDeactivationUXLogicIfReady();
      }, d.activateHandler = function(u) {
        d.activateImpl(u);
      }, d.deactivateHandler = function() {
        d.deactivateImpl();
      }, d.focusHandler = function() {
        d.handleFocus();
      }, d.blurHandler = function() {
        d.handleBlur();
      }, d.resizeHandler = function() {
        d.layout();
      }, d;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return So;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Xn;
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
      var a = this, d = this.supportsPressRipple();
      if (this.registerRootHandlers(d), d) {
        var u = e.cssClasses, o = u.ROOT, s = u.UNBOUNDED;
        requestAnimationFrame(function() {
          a.adapter.addClass(o), a.adapter.isUnbounded() && (a.adapter.addClass(s), a.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var a = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var d = e.cssClasses, u = d.ROOT, o = d.UNBOUNDED;
        requestAnimationFrame(function() {
          a.adapter.removeClass(u), a.adapter.removeClass(o), a.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(a) {
      this.activateImpl(a);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var a = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        a.layoutInternal(), a.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(a) {
      var d = e.cssClasses.UNBOUNDED;
      a ? this.adapter.addClass(d) : this.adapter.removeClass(d);
    }, e.prototype.handleFocus = function() {
      var a = this;
      requestAnimationFrame(function() {
        return a.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var a = this;
      requestAnimationFrame(function() {
        return a.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(a) {
      var d, u;
      if (a) {
        try {
          for (var o = Ci(Zn), s = o.next(); !s.done; s = o.next()) {
            var h = s.value;
            this.adapter.registerInteractionHandler(h, this.activateHandler);
          }
        } catch (n) {
          d = { error: n };
        } finally {
          try {
            s && !s.done && (u = o.return) && u.call(o);
          } finally {
            if (d) throw d.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(a) {
      var d, u;
      if (a.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var o = Ci(Yn), s = o.next(); !s.done; s = o.next()) {
            var h = s.value;
            this.adapter.registerDocumentInteractionHandler(h, this.deactivateHandler);
          }
        } catch (n) {
          d = { error: n };
        } finally {
          try {
            s && !s.done && (u = o.return) && u.call(o);
          } finally {
            if (d) throw d.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var a, d;
      try {
        for (var u = Ci(Zn), o = u.next(); !o.done; o = u.next()) {
          var s = o.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (h) {
        a = { error: h };
      } finally {
        try {
          o && !o.done && (d = u.return) && d.call(u);
        } finally {
          if (a) throw a.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var a, d;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var u = Ci(Yn), o = u.next(); !o.done; o = u.next()) {
          var s = o.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (h) {
        a = { error: h };
      } finally {
        try {
          o && !o.done && (d = u.return) && d.call(u);
        } finally {
          if (a) throw a.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var a = this, d = e.strings, u = Object.keys(d);
      u.forEach(function(o) {
        o.indexOf("VAR_") === 0 && a.adapter.updateCssVariable(d[o], null);
      });
    }, e.prototype.activateImpl = function(a) {
      var d = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var u = this.activationState;
        if (!u.isActivated) {
          var o = this.previousActivationEvent, s = o && a !== void 0 && o.type !== a.type;
          if (!s) {
            u.isActivated = !0, u.isProgrammatic = a === void 0, u.activationEvent = a, u.wasActivatedByPointer = u.isProgrammatic ? !1 : a !== void 0 && (a.type === "mousedown" || a.type === "touchstart" || a.type === "pointerdown");
            var h = a !== void 0 && xi.length > 0 && xi.some(function(n) {
              return d.adapter.containsEventTarget(n);
            });
            if (h) {
              this.resetActivationState();
              return;
            }
            a !== void 0 && (xi.push(a.target), this.registerDeactivationHandlers(a)), u.wasElementMadeActive = this.checkElementMadeActive(a), u.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              xi = [], !u.wasElementMadeActive && a !== void 0 && (a.key === " " || a.keyCode === 32) && (u.wasElementMadeActive = d.checkElementMadeActive(a), u.wasElementMadeActive && d.animateActivation()), u.wasElementMadeActive || (d.activationState = d.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(a) {
      return a !== void 0 && a.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var a = this, d = e.strings, u = d.VAR_FG_TRANSLATE_START, o = d.VAR_FG_TRANSLATE_END, s = e.cssClasses, h = s.FG_DEACTIVATION, n = s.FG_ACTIVATION, i = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var r = "", l = "";
      if (!this.adapter.isUnbounded()) {
        var c = this.getFgTranslationCoordinates(), f = c.startPoint, b = c.endPoint;
        r = f.x + "px, " + f.y + "px", l = b.x + "px, " + b.y + "px";
      }
      this.adapter.updateCssVariable(u, r), this.adapter.updateCssVariable(o, l), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(h), this.adapter.computeBoundingRect(), this.adapter.addClass(n), this.activationTimer = setTimeout(function() {
        a.activationTimerCallback();
      }, i);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var a = this.activationState, d = a.activationEvent, u = a.wasActivatedByPointer, o;
      u ? o = Co(d, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, o = {
        x: o.x - this.initialSize / 2,
        y: o.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: o, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var a = this, d = e.cssClasses.FG_DEACTIVATION, u = this.activationState, o = u.hasDeactivationUXRun, s = u.isActivated, h = o || !s;
      h && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(d), this.fgDeactivationRemovalTimer = setTimeout(function() {
        a.adapter.removeClass(d);
      }, Xn.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var a = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(a), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var a = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return a.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var a = this, d = this.activationState;
      if (d.isActivated) {
        var u = lt({}, d);
        d.isProgrammatic ? (requestAnimationFrame(function() {
          a.animateDeactivation(u);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          a.activationState.hasDeactivationUXRun = !0, a.animateDeactivation(u), a.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(a) {
      var d = a.wasActivatedByPointer, u = a.wasElementMadeActive;
      (d || u) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var a = this;
      this.frame = this.adapter.computeBoundingRect();
      var d = Math.max(this.frame.height, this.frame.width), u = function() {
        var s = Math.sqrt(Math.pow(a.frame.width, 2) + Math.pow(a.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? d : u();
      var o = Math.floor(d * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var a = e.strings, d = a.VAR_FG_SIZE, u = a.VAR_LEFT, o = a.VAR_TOP, s = a.VAR_FG_SCALE;
      this.adapter.updateCssVariable(d, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(u, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, e;
  }(ui)
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
class $o {
  constructor(e) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = e;
    const a = (e.getAttribute("class") || "").split(/\s+/);
    for (const d of a)
      this.classes.add(d);
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
      this.classes.forEach((a) => e += a + " "), this.element.setAttribute("class", e);
    }
  }
}
const Qn = /* @__PURE__ */ new WeakMap(), $t = zi((t) => (e) => {
  if (!(e instanceof Yt) || e instanceof ci || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: a } = e, { element: d } = a;
  let u = Qn.get(e);
  u === void 0 && (d.setAttribute("class", a.strings.join(" ")), Qn.set(e, u = /* @__PURE__ */ new Set()));
  const o = d.classList || new $o(d);
  u.forEach((s) => {
    s in t || (o.remove(s), u.delete(s));
  });
  for (const s in t) {
    const h = t[s];
    h != u.has(s) && (h ? (o.add(s), u.add(s)) : (o.remove(s), u.delete(s)));
  }
  typeof o.commit == "function" && o.commit();
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
const Jn = /* @__PURE__ */ new WeakMap(), ko = zi((t) => (e) => {
  if (!(e instanceof Yt) || e instanceof ci || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: a } = e, { style: d } = a.element;
  let u = Jn.get(e);
  u === void 0 && (d.cssText = a.strings.join(" "), Jn.set(e, u = /* @__PURE__ */ new Set())), u.forEach((o) => {
    o in t || (u.delete(o), o.indexOf("-") === -1 ? d[o] = null : d.removeProperty(o));
  });
  for (const o in t)
    u.add(o), o.indexOf("-") === -1 ? d[o] = t[o] : d.setProperty(o, t[o]);
});
class Ee extends hi {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = xo;
  }
  get isActive() {
    return go(this.parentElement || this, ":active");
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
      updateCssVariable: (e, a) => {
        switch (e) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = a;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = a;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = a;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = a;
            break;
          case "--mdc-ripple-left":
            this.leftPos = a;
            break;
          case "--mdc-ripple-top":
            this.topPos = a;
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
    const e = this.activated && (this.primary || !this.accent), a = this.selected && (this.primary || !this.accent), d = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": e,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": a,
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
    return T`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${$t(d)}"
          style="${ko({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
H([
  X(".mdc-ripple-surface")
], Ee.prototype, "mdcRoot", void 0);
H([
  F({ type: Boolean })
], Ee.prototype, "primary", void 0);
H([
  F({ type: Boolean })
], Ee.prototype, "accent", void 0);
H([
  F({ type: Boolean })
], Ee.prototype, "unbounded", void 0);
H([
  F({ type: Boolean })
], Ee.prototype, "disabled", void 0);
H([
  F({ type: Boolean })
], Ee.prototype, "activated", void 0);
H([
  F({ type: Boolean })
], Ee.prototype, "selected", void 0);
H([
  F({ type: Boolean })
], Ee.prototype, "internalUseStateLayerCustomProperties", void 0);
H([
  ee()
], Ee.prototype, "hovering", void 0);
H([
  ee()
], Ee.prototype, "bgFocused", void 0);
H([
  ee()
], Ee.prototype, "fgActivation", void 0);
H([
  ee()
], Ee.prototype, "fgDeactivation", void 0);
H([
  ee()
], Ee.prototype, "fgScale", void 0);
H([
  ee()
], Ee.prototype, "fgSize", void 0);
H([
  ee()
], Ee.prototype, "translateStart", void 0);
H([
  ee()
], Ee.prototype, "translateEnd", void 0);
H([
  ee()
], Ee.prototype, "leftPos", void 0);
H([
  ee()
], Ee.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ao = _e`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let ln = class extends Ee {
};
ln.styles = [Ao];
ln = H([
  le("mwc-ripple")
], ln);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const je = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, a) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const d = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), d.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (u, o) => e.constructor._observers.set(o, u)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const d = e.updated;
      e.updated = function(u) {
        d.call(this, u), u.forEach((o, s) => {
          const n = this.constructor._observers.get(s);
          n !== void 0 && n.call(this, this[s], o);
        });
      };
    }
    e.constructor._observers.set(a, t);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Rn {
  constructor(e) {
    this.startPress = (a) => {
      e().then((d) => {
        d && d.startPress(a);
      });
    }, this.endPress = () => {
      e().then((a) => {
        a && a.endPress();
      });
    }, this.startFocus = () => {
      e().then((a) => {
        a && a.startFocus();
      });
    }, this.endFocus = () => {
      e().then((a) => {
        a && a.endFocus();
      });
    }, this.startHover = () => {
      e().then((a) => {
        a && a.startHover();
      });
    }, this.endHover = () => {
      e().then((a) => {
        a && a.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ie extends $e {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Rn(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
          const a = e.type;
          this.onDown(a === "mousedown" ? "mouseup" : "touchend", e);
        }
      }
    ];
  }
  get text() {
    const e = this.textContent;
    return e ? e.trim() : "";
  }
  render() {
    const e = this.renderText(), a = this.graphic ? this.renderGraphic() : T``, d = this.hasMeta ? this.renderMeta() : T``;
    return T`
      ${this.renderRipple()}
      ${a}
      ${e}
      ${d}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? T`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? T`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return T`
      <span class="mdc-deprecated-list-item__graphic material-icons ${$t(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return T`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return T`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return T`<slot></slot>`;
  }
  renderTwoline() {
    return T`
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
  onDown(e, a) {
    const d = () => {
      window.removeEventListener(e, d), this.rippleHandlers.endPress();
    };
    window.addEventListener(e, d), this.rippleHandlers.startPress(a);
  }
  fireRequestSelected(e, a) {
    if (this.noninteractive)
      return;
    const d = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: a, selected: e } });
    this.dispatchEvent(d);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const e of this.listeners)
      for (const a of e.eventNames)
        e.target.addEventListener(a, e.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const e of this.listeners)
      for (const a of e.eventNames)
        e.target.removeEventListener(a, e.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const e = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
}
H([
  X("slot")
], Ie.prototype, "slotElement", void 0);
H([
  kn("mwc-ripple")
], Ie.prototype, "ripple", void 0);
H([
  F({ type: String })
], Ie.prototype, "value", void 0);
H([
  F({ type: String, reflect: !0 })
], Ie.prototype, "group", void 0);
H([
  F({ type: Number, reflect: !0 })
], Ie.prototype, "tabindex", void 0);
H([
  F({ type: Boolean, reflect: !0 }),
  je(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], Ie.prototype, "disabled", void 0);
H([
  F({ type: Boolean, reflect: !0 })
], Ie.prototype, "twoline", void 0);
H([
  F({ type: Boolean, reflect: !0 })
], Ie.prototype, "activated", void 0);
H([
  F({ type: String, reflect: !0 })
], Ie.prototype, "graphic", void 0);
H([
  F({ type: Boolean })
], Ie.prototype, "multipleGraphics", void 0);
H([
  F({ type: Boolean })
], Ie.prototype, "hasMeta", void 0);
H([
  F({ type: Boolean, reflect: !0 }),
  je(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], Ie.prototype, "noninteractive", void 0);
H([
  F({ type: Boolean, reflect: !0 }),
  je(function(t) {
    const e = this.getAttribute("role"), a = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (a && t ? this.setAttribute("aria-selected", "true") : a && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], Ie.prototype, "selected", void 0);
H([
  ee()
], Ie.prototype, "shouldRenderRipple", void 0);
H([
  ee()
], Ie.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Mn = _e`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let cn = class extends Ie {
};
cn.styles = [Mn];
cn = H([
  le("mwc-list-item")
], cn);
var _o = Object.defineProperty, Eo = Object.getOwnPropertyDescriptor, st = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Eo(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && _o(e, a, u), u;
};
let Fe = class extends zs {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(G("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? T`<div style="position:relative;">
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
      </div>` : T``;
  }
  renderMulplierList() {
    return T`${this.multipliers.map(
      (t) => T`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? G("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? T`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : T``;
  }
  render() {
    return T`
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
st([
  F({ type: Boolean })
], Fe.prototype, "nullable", 2);
st([
  F({ type: Array })
], Fe.prototype, "multipliers", 2);
st([
  F({ type: String })
], Fe.prototype, "multiplier", 1);
st([
  F({ type: String })
], Fe.prototype, "unit", 2);
st([
  ee()
], Fe.prototype, "null", 1);
st([
  F({ type: String })
], Fe.prototype, "maybeValue", 1);
st([
  F({ type: String })
], Fe.prototype, "defaultValue", 2);
st([
  F({ type: Array })
], Fe.prototype, "reservedValues", 2);
st([
  X("mwc-switch")
], Fe.prototype, "nullSwitch", 2);
st([
  X("mwc-menu")
], Fe.prototype, "multiplierMenu", 2);
st([
  X("mwc-icon-button")
], Fe.prototype, "multiplierButton", 2);
Fe = st([
  le("wizard-textfield")
], Fe);
var Lo = Object.defineProperty, Io = Object.getOwnPropertyDescriptor, Bt = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Io(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Lo(e, a, u), u;
};
let Rt = class extends An {
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
    return this.nullable ? T`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : T``;
  }
  render() {
    return T`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">${super.render()}</div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
Bt([
  F({ type: Boolean })
], Rt.prototype, "nullable", 2);
Bt([
  ee()
], Rt.prototype, "null", 1);
Bt([
  F({ type: String })
], Rt.prototype, "maybeValue", 1);
Bt([
  F({ type: String })
], Rt.prototype, "defaultValue", 2);
Bt([
  F({ type: Array })
], Rt.prototype, "reservedValues", 2);
Bt([
  X("mwc-switch")
], Rt.prototype, "nullSwitch", 2);
Rt = Bt([
  le("wizard-select")
], Rt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function To(t, e, a) {
  const d = t.constructor;
  if (!a) {
    const h = `__${e}`;
    if (a = d.getPropertyDescriptor(e, h), !a)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const u = a;
  let o = "";
  if (!u.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const s = {
    configurable: !0,
    enumerable: !0,
    set(h) {
      o === "" && (o = d.getPropertyOptions(e).attribute), this.hasAttribute(o) && this.removeAttribute(o), u.set.call(this, h);
    }
  };
  return u.get && (s.get = function() {
    return u.get.call(this);
  }), s;
}
function mi(t, e, a) {
  if (e !== void 0)
    return To(t, e, a);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Dn extends hi {
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
Dn.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const qi = /* @__PURE__ */ new WeakMap(), ue = zi((t) => (e) => {
  const a = qi.get(e);
  if (t === void 0 && e instanceof Yt) {
    if (a !== void 0 || !qi.has(e)) {
      const d = e.committer.name;
      e.committer.element.removeAttribute(d);
    }
  } else t !== a && e.setValue(t);
  qi.set(e, t);
});
class Te extends Dn {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Rn(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const a = e.get("indeterminate"), d = e.get("checked"), u = e.get("disabled");
    if (a !== void 0 || d !== void 0 || u !== void 0) {
      const o = this.calculateAnimationStateName(!!d, !!a, !!u), s = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${o}-${s}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, a, d) {
    return d ? "disabled" : a ? "indeterminate" : e ? "checked" : "unchecked";
  }
  // TODO(dfreedm): Make this use selected as a param after Polymer/internal#739
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? T`<mwc-ripple
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
    const e = this.indeterminate || this.checked, a = {
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
    }, d = this.indeterminate ? "mixed" : void 0;
    return T`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${$t(a)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ue(this.name)}"
              aria-checked="${ue(d)}"
              aria-label="${ue(this.ariaLabel)}"
              aria-labelledby="${ue(this.ariaLabelledBy)}"
              aria-describedby="${ue(this.ariaDescribedBy)}"
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
    const a = () => {
      window.removeEventListener("mouseup", a), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", a), this.rippleHandlers.startPress(e);
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
H([
  X(".mdc-checkbox")
], Te.prototype, "mdcRoot", void 0);
H([
  X("input")
], Te.prototype, "formElement", void 0);
H([
  F({ type: Boolean, reflect: !0 })
], Te.prototype, "checked", void 0);
H([
  F({ type: Boolean })
], Te.prototype, "indeterminate", void 0);
H([
  F({ type: Boolean, reflect: !0 })
], Te.prototype, "disabled", void 0);
H([
  F({ type: String, reflect: !0 })
], Te.prototype, "name", void 0);
H([
  F({ type: String })
], Te.prototype, "value", void 0);
H([
  mi,
  F({ type: String, attribute: "aria-label" })
], Te.prototype, "ariaLabel", void 0);
H([
  mi,
  F({ type: String, attribute: "aria-labelledby" })
], Te.prototype, "ariaLabelledBy", void 0);
H([
  mi,
  F({ type: String, attribute: "aria-describedby" })
], Te.prototype, "ariaDescribedBy", void 0);
H([
  F({ type: Boolean })
], Te.prototype, "reducedTouchTarget", void 0);
H([
  ee()
], Te.prototype, "animationClass", void 0);
H([
  ee()
], Te.prototype, "shouldRenderRipple", void 0);
H([
  ee()
], Te.prototype, "focused", void 0);
H([
  ee()
], Te.prototype, "useStateLayerCustomProperties", void 0);
H([
  kn("mwc-ripple")
], Te.prototype, "ripple", void 0);
H([
  Ir({ passive: !0 })
], Te.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ro = _e`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let dn = class extends Te {
};
dn.styles = [Ro];
dn = H([
  le("mwc-checkbox")
], dn);
var Mo = Object.defineProperty, Do = Object.getOwnPropertyDescriptor, et = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Do(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Mo(e, a, u), u;
};
let Ke = class extends $e {
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
    return this.nullable ? T`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : T``;
  }
  render() {
    return T`
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
et([
  F({ type: String })
], Ke.prototype, "label", 2);
et([
  F({ type: String })
], Ke.prototype, "helper", 2);
et([
  F({ type: Boolean })
], Ke.prototype, "nullable", 2);
et([
  F({ type: Boolean })
], Ke.prototype, "defaultChecked", 2);
et([
  F({ type: String })
], Ke.prototype, "maybeValue", 1);
et([
  F({ type: Boolean })
], Ke.prototype, "disabled", 2);
et([
  ee()
], Ke.prototype, "null", 1);
et([
  ee()
], Ke.prototype, "checked", 1);
et([
  ee()
], Ke.prototype, "deactivateCheckbox", 2);
et([
  ee()
], Ke.prototype, "formfieldLabel", 1);
et([
  X("mwc-switch")
], Ke.prototype, "nullSwitch", 2);
et([
  X("mwc-checkbox")
], Ke.prototype, "checkbox", 2);
Ke = et([
  le("wizard-checkbox")
], Ke);
const jr = "wizard-textfield, mwc-textfield, ace-editor, mwc-select, wizard-select, wizard-checkbox";
function qr(t) {
  return typeof t == "function";
}
function Xr(t) {
  return t instanceof Fe || t instanceof An ? t.checkValidity() : !0;
}
function er(t) {
  return t instanceof Fe || t instanceof An ? t.reportValidity() : !0;
}
function Di(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const a = qr(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: a, ...e?.detail }
  });
}
function Pe(t) {
  const e = t.split(">"), a = e.pop() ?? "";
  return [e.join(">"), a];
}
const ye = ":not(*)";
function No(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Oo(t, e) {
  const [a, d] = e.split("	");
  return !a || !d ? ye : `${t}[version="${a}"][revision="${d}"]`;
}
function tr(t) {
  return xe(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function ir(t, e) {
  const [a, d] = Pe(e), u = Ae[t].parents.flatMap(
    (o) => Me(o, a).split(",")
  );
  return Ne(
    u,
    [">"],
    [`${t}[connectivityNode="${d}"]`]
  ).map((o) => o.join("")).join(",");
}
function Po(t) {
  const [e, a, d, u, o, s] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((h) => t.getAttribute(h));
  return e === "None" ? `${xe(t.parentElement)}>(${u} ${s} ${o})` : `${e} ${a || "(Client)"}/${d ?? ""} ${u} ${o ?? ""}`;
}
function Fo(t, e) {
  if (e.endsWith(")")) {
    const [c, f] = Pe(e), [b, y, x] = f.substring(1, f.length - 1).split(" ");
    if (!b || !y) return ye;
    const k = Ae[t].parents.flatMap(
      (S) => Me(S, c).split(",")
    );
    return Ne(
      k,
      [">"],
      [`${t}[iedName="None"][lnClass="${b}"][lnType="${y}"][lnInst="${x}"]`]
    ).map((S) => S.join("")).join(",");
  }
  const [a, d, u, o, s] = e.split(/[ /]/);
  if (!a || !d || !o) return ye;
  const [
    h,
    n,
    i,
    r,
    l
  ] = [
    [`[iedName="${a}"]`],
    d === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${d}"]`],
    u ? [`[prefix="${u}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Ne(
    [t],
    h,
    n,
    i,
    r,
    l
  ).map((c) => c.join("")).join(",");
}
function Bo(t) {
  return `${xe(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Ho(t, e) {
  const [a, d] = Pe(e), [u, o] = d.split(" ");
  return `${Me(
    "IED",
    a
  )}>${t}[iedName="${u}"][apName="${o}"]`;
}
function zo(t) {
  return `${xe(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Vo(t, e) {
  const [a, d] = Pe(e);
  return d ? `${Me(
    "Server",
    a
  )}>${t}[associationID="${d}"]` : ye;
}
function Wo(t) {
  return `${xe(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Uo(t, e) {
  const [a, d] = e.split(">>");
  return d ? `IED[name="${a}"] ${t}[inst="${d}"]` : ye;
}
function Go(t) {
  const e = t.textContent, [a, d, u, o, s] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((h) => t.getAttribute(h));
  return `${xe(t.parentElement)}>${e} ${a || ""} ${d || ""}/${u ?? ""} ${o ?? ""} ${s ?? ""}`;
}
function Ko(t, e) {
  const [a, d] = Pe(e), [u, o, s, h, n, i] = d.split(/[ /]/), [
    r,
    l,
    c,
    f,
    b,
    y
  ] = [
    Ae[t].parents.flatMap(
      (x) => Me(x, a).split(",")
    ),
    [`${u}`],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    h ? [`[prefix="${h}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${n}"]`],
    i ? [`[lnInst="${i}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Ne(
    r,
    [">"],
    [t],
    l,
    c,
    f,
    b,
    y
  ).map((x) => x.join("")).join(",");
}
function jo(t) {
  const [e, a, d, u, o, s, h, n] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((r) => t.getAttribute(r)), i = `${e}/${a ?? ""} ${d} ${u ?? ""}.${o} ${s || ""}`;
  return `${xe(t.parentElement)}>${i} (${h}${n ? " [" + n + "]" : ""})`;
}
function qo(t, e) {
  const [a, d] = Pe(e), [u, o, s, h] = d.split(/[ /.]/), n = d.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), i = n && n[1] ? n[1] : "", r = n && n[2] ? n[2] : "", l = d.match(/\(([A-Z]{2})/), c = d.match(/ \[([0-9]{1,2})\]/), f = l && l[1] ? l[1] : "", b = c && c[1] ? c[1] : "", [
    y,
    x,
    k,
    S,
    m,
    v,
    $,
    g,
    w
  ] = [
    Ae[t].parents.flatMap(
      (p) => Me(p, a).split(",")
    ),
    [`[ldInst="${u}"]`],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${i}"]`],
    r ? [`[daName="${r}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${f}"]`],
    b ? [`[ix="${b}"]`] : [":not([ix])", '[ix=""]']
  ];
  return Ne(
    y,
    [">"],
    [t],
    x,
    k,
    S,
    m,
    v,
    $,
    g,
    w
  ).map((p) => p.join("")).join(",");
}
function Xo(t) {
  if (!t.parentElement) return NaN;
  const e = xe(t.parentElement), a = t.getAttribute("iedName"), d = t.getAttribute("intAddr"), u = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${d}"]`)
  ).indexOf(t);
  if (d) return `${e}>${d}[${u}]`;
  const [
    o,
    s,
    h,
    n,
    i,
    r,
    l,
    c,
    f,
    b,
    y,
    x
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
  ].map((m) => t.getAttribute(m)), k = x ? `${l}:${x} ${c ?? ""}/${f ?? ""} ${b ?? ""} ${y ?? ""}` : "", S = `${a} ${o}/${s ?? ""} ${h} ${n ?? ""} ${i} ${r || ""}`;
  return `${e}>${k ? k + " " : ""}${S}${d ? `@${d}` : ""}`;
}
function Zo(t, e) {
  const [a, d] = Pe(e), u = Ae[t].parents.flatMap(
    (N) => Me(N, a).split(",")
  );
  if (d.endsWith("]")) {
    const [N] = d.split("["), O = [`[intAddr="${N}"]`];
    return Ne(u, [">"], [t], O).map((P) => P.join("")).join(",");
  }
  let o, s, h, n, i, r, l, c, f, b, y, x, k, S;
  !d.includes(":") && !d.includes("@") ? [o, s, h, n, i, r, l] = d.split(/[ /]/) : d.includes(":") && !d.includes("@") ? [
    c,
    f,
    b,
    y,
    x,
    k,
    o,
    s,
    h,
    n,
    i,
    r,
    l
  ] = d.split(/[ /:]/) : !d.includes(":") && d.includes("@") ? [o, s, h, n, i, r, l, S] = d.split(/[ /@]/) : [
    c,
    f,
    b,
    y,
    x,
    k,
    o,
    s,
    h,
    n,
    i,
    r,
    l,
    S
  ] = d.split(/[ /:@]/);
  const [
    m,
    v,
    $,
    g,
    w,
    p,
    C,
    A,
    _,
    E,
    I,
    L,
    D,
    R
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])"],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    h ? [`[prefix="${h}"]`] : [":not([prefix])", '[prefix=""]'],
    n ? [`[lnClass="${n}"]`] : [":not([lnClass])"],
    i ? [`[lnInst="${i}"]`] : [":not([lnInst])", '[lnInst=""]'],
    r ? [`[doName="${r}"]`] : [":not([doName])"],
    l ? [`[daName="${l}"]`] : [":not([daName])", '[daName=""]'],
    c ? [`[serviceType="${c}"]`] : [":not([serviceType])", '[serviceType=""]'],
    f ? [`[srcCBName="${f}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    b ? [`[srcLDInst="${b}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    y ? [`[srcPrefix="${y}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    x ? [`[srcLNClass="${x}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    k ? [`[srcLNInst="${k}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    S ? [`[intAddr="${S}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return Ne(
    u,
    [">"],
    [t],
    m,
    v,
    $,
    g,
    w,
    p,
    C,
    A,
    _,
    E,
    I,
    L,
    D,
    R
  ).map((N) => N.join("")).join(",");
}
function Yo(t) {
  const [e, a, d] = ["prefix", "lnClass", "inst"].map(
    (u) => t.getAttribute(u)
  );
  return `${xe(t.parentElement)}>${e ?? ""} ${a} ${d}`;
}
function Qo(t, e) {
  const [a, d] = Pe(e), u = Ae[t].parents.flatMap(
    (l) => Me(l, a).split(",")
  ), [o, s, h] = d.split(" ");
  if (!s) return ye;
  const [n, i, r] = [
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    [`[inst="${h}"]`]
  ];
  return Ne(
    u,
    [">"],
    [t],
    n,
    i,
    r
  ).map((l) => l.join("")).join(",");
}
function Jo(t) {
  const [e, a, d, u, o, s] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((h) => t.getAttribute(h));
  return `${xe(t.parentElement)}>${a} ${e || ""} ${d}/${u ?? ""} ${o} ${s}`;
}
function ea(t, e) {
  const [a, d] = Pe(e), u = Ae[t].parents.flatMap(
    (k) => Me(k, a).split(",")
  ), [o, s, h, n, i, r] = d.split(/[ /]/), [
    l,
    c,
    f,
    b,
    y,
    x
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])", '[iedName=""]'],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    h ? [`[ldInst="${h}"]`] : [":not([ldInst])", '[ldInst=""]'],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${i}"]`],
    r ? [`[lnInst="${r}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return Ne(
    u,
    [">"],
    [t],
    l,
    c,
    f,
    b,
    y,
    x
  ).map((k) => k.join("")).join(",");
}
function nr(t) {
  const [e, a] = ["name", "ix"].map((d) => t.getAttribute(d));
  return `${xe(t.parentElement)}>${e}${a ? "[" + a + "]" : ""}`;
}
function hn(t, e, a = -1) {
  a === -1 && (a = e.split(">").length);
  const [d, u] = Pe(e), [o, s, h, n] = u.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!s) return ye;
  if (a === 0) return `${t}[name="${s}"]`;
  const i = Ae[t].parents.flatMap(
    (c) => c === "SDI" ? hn(c, d, a - 1).split(",") : Me(c, d).split(",")
  ).filter((c) => !c.startsWith(ye));
  if (i.length === 0) return ye;
  const [r, l] = [
    [`[name="${s}"]`],
    n ? [`[ix="${n}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return Ne(
    i,
    [">"],
    [t],
    r,
    l
  ).map((c) => c.join("")).join(",");
}
function ta(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), a = Array.from(t.parentElement.children).filter((d) => d.getAttribute("sGroup") === e).findIndex((d) => d.isSameNode(t));
  return `${xe(t.parentElement)}>${e ? e + "." : ""} ${a}`;
}
function ia(t, e) {
  const [a, d] = Pe(e), [u, o] = d.split(" "), s = parseFloat(o), h = Ae[t].parents.flatMap(
    (r) => Me(r, a).split(",")
  ), [n, i] = [
    u ? [`[sGroup="${u}"]`] : [""],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return Ne(
    h,
    [">"],
    [t],
    n,
    i
  ).map((r) => r.join("")).join(",");
}
function na(t) {
  const [e, a] = ["iedName", "apName"].map(
    (d) => t.getAttribute(d)
  );
  return `${e} ${a}`;
}
function ra(t, e) {
  const [a, d] = e.split(" ");
  return !a || !d ? ye : `${t}[iedName="${a}"][apName="${d}"]`;
}
function rr(t) {
  const [e, a] = ["ldInst", "cbName"].map(
    (d) => t.getAttribute(d)
  );
  return `${e} ${a}`;
}
function sr(t, e) {
  const [a, d] = e.split(" ");
  return !a || !d ? ye : `${t}[ldInst="${a}"][cbName="${d}"]`;
}
function sa(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${xe(t.parentElement)}>${e}`;
}
function oa(t, e) {
  const [a, d] = Pe(e), [u, o] = [
    Ae[t].parents.flatMap(
      (s) => Me(s, a).split(",")
    ),
    d ? [`[type="${d}"]`] : [""]
  ];
  return Ne(u, [">"], [t], o).map((s) => s.join("")).join(",");
}
function aa(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, a = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${xe(t.parentElement)}>${a}`;
  const d = Array.from(t.parentElement.children).filter((u) => u.getAttribute("type") === a).findIndex((u) => u.isSameNode(t));
  return `${xe(t.parentElement)}>${a} [${d}]`;
}
function la(t, e) {
  const [a, d] = Pe(e), [u] = d.split(" "), o = d && d.match(/\[([0-9]+)\]/) && d.match(/\[([0-9]+)\]/)[1] ? parseFloat(d.match(/\[([0-9]+)\]/)[1]) : NaN, [s, h, n] = [
    Ae[t].parents.flatMap(
      (i) => Me(i, a).split(",")
    ),
    [`[type="${u}"]`],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return Ne(
    s,
    [">"],
    [t],
    h,
    n
  ).map((i) => i.join("")).join(",");
}
function ca(t) {
  return `${xe(t.parentElement)}>${t.getAttribute("ord")}`;
}
function da(t, e) {
  const [a, d] = Pe(e);
  return `${Me("EnumType", a)}>${t}[ord="${d}"]`;
}
function ha(t) {
  return `${xe(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function ua(t, e) {
  const [a, d] = Pe(e), [u, o] = d.split("	"), [s] = [
    Ae[t].parents.flatMap(
      (h) => Me(h, a).split(",")
    )
  ];
  return Ne(
    s,
    [">"],
    [t],
    [`[type="${u}"]`],
    [">"],
    [o]
  ).map((h) => h.join("")).join(",");
}
function ma() {
  return "";
}
function fa() {
  return ":root";
}
function re(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${xe(t.parentElement)}>${t.getAttribute("name")}`;
}
function ne(t, e, a = -1) {
  a === -1 && (a = e.split(">").length);
  const [d, u] = Pe(e);
  if (!u) return ye;
  if (a === 0) return `${t}[name="${u}"]`;
  const o = Ae[t].parents;
  if (!o) return ye;
  const s = o.flatMap(
    (h) => Ae[h].selector === Ae.Substation.selector ? ne(h, d, a - 1).split(",") : Me(h, d).split(",")
  ).filter((h) => !h.startsWith(ye));
  return s.length === 0 ? ye : Ne(s, [">"], [t], [`[name="${u}"]`]).map((h) => h.join("")).join(",");
}
function K(t) {
  return xe(t.parentElement).toString();
}
function j(t, e) {
  const a = Ae[t].parents;
  if (!a) return ye;
  const d = a.flatMap((u) => Me(u, e).split(",")).filter((u) => !u.startsWith(ye));
  return d.length === 0 ? ye : Ne(d, [">"], [t]).map((u) => u.join("")).join(",");
}
function $i(t) {
  return `#${t.id}`;
}
function ki(t, e) {
  const a = e.replace(/^#/, "");
  return a ? `${t}[id="${a}"]` : ye;
}
const Zr = [
  "TransformerWinding",
  "ConductingEquipment"
], Yr = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Zr
], un = ["Substation", "VoltageLevel", "Bay"], Qr = ["Process", "Line"], Jr = ["EqSubFunction", "EqFunction"], pa = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Yr,
  ...un,
  ...Qr,
  ...Jr
], es = ["ConnectivityNode", ...pa], ga = ["GOOSESecurity", "SMVSecurity"], va = ["SubNetwork", ...ga, ...es], ba = ["BDA", "DA"], wa = ["SampledValueControl", "GSEControl"], ya = ["LogControl", "ReportControl"], Sa = [...wa, ...ya], Ca = ["GSE", "SMV"], xa = [
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
  ...Sa,
  ...Ca,
  ...ba
], Ot = ["LN0", "LN"], $a = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], ka = ["Subject", "IssuerName"], Aa = ["MinTime", "MaxTime"], _a = ["LNodeType", "DOType", "DAType", "EnumType"], Ea = [
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
], La = ["DynDataSet", "ConfDataSet"], Ia = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...La
], Ta = ["ConfLogControl", "ConfSigRef"], Ra = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Ma = ["SCL", ...va, ...xa, ..._a], ts = [
  ...Ma,
  ...$a,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...ka,
  ...Aa,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...Ot,
  ...Ea,
  "DynAssociation",
  "SettingGroups",
  ...Ia,
  ...Ta,
  ...Ra,
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
], Da = new Set(ts);
function Nn(t) {
  return Da.has(t);
}
const Wi = ["Text", "Private"], It = [...Wi], we = [...Wi], Ai = [...Wi], or = [...we, "Val"], is = [...It, "LNode"], Tt = [...is], mn = [...Tt], Xi = [
  ...Tt,
  "PowerTransformer",
  "GeneralEquipment"
], ar = [
  ...mn,
  "Terminal"
], lr = [...we, "Address"], ns = [...It], cr = [...ns, "IEDName"], dr = [
  ...we,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], hr = [
  ...Tt,
  "GeneralEquipment",
  "Function"
], ur = [...ns, "TrgOps"], mr = [
  ...Tt,
  "GeneralEquipment",
  "EqSubFunction"
], Ae = {
  AccessControl: {
    identity: K,
    selector: j,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: re,
    selector: ne,
    parents: ["IED"],
    children: [
      ...It,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: K,
    selector: j,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: zo,
    selector: Vo,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: K,
    selector: j,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: re,
    selector: ne,
    parents: ["DAType"],
    children: [...or]
  },
  BitRate: {
    identity: K,
    selector: j,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: re,
    selector: ne,
    parents: ["VoltageLevel"],
    children: [
      ...Xi,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Jo,
    selector: ea,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: K,
    selector: j,
    parents: ["SCL"],
    children: [...we, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: re,
    selector: ne,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ar,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: K,
    selector: j,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: na,
    selector: ra,
    parents: ["SubNetwork"],
    children: [...we, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: re,
    selector: ne,
    parents: ["Bay", "Line"],
    children: [...is]
  },
  DA: {
    identity: re,
    selector: ne,
    parents: ["DOType"],
    children: [...or]
  },
  DAI: {
    identity: nr,
    selector: hn,
    parents: ["DOI", "SDI"],
    children: [...we, "Val"]
  },
  DAType: {
    identity: $i,
    selector: ki,
    parents: ["DataTypeTemplates"],
    children: [...Ai, "BDA", "ProtNs"]
  },
  DO: {
    identity: re,
    selector: ne,
    parents: ["LNodeType"],
    children: [...we]
  },
  DOI: {
    identity: re,
    selector: ne,
    parents: [...Ot],
    children: [...we, "SDI", "DAI"]
  },
  DOType: {
    identity: $i,
    selector: ki,
    parents: ["DataTypeTemplates"],
    children: [...Ai, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: re,
    selector: ne,
    parents: [...Ot],
    children: [...It, "FCDA"]
  },
  DataSetDirectory: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: K,
    selector: j,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: $i,
    selector: ki,
    parents: ["DataTypeTemplates"],
    children: [...Ai, "EnumVal"]
  },
  EnumVal: {
    identity: ca,
    selector: da,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: re,
    selector: ne,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...mr]
  },
  EqSubFunction: {
    identity: re,
    selector: ne,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...mr]
  },
  ExtRef: {
    identity: Xo,
    selector: Zo,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: jo,
    selector: qo,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: re,
    selector: ne,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Tt,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: re,
    selector: ne,
    parents: [
      "SubFunction",
      "Function",
      ...Qr,
      ...Jr,
      ...un
    ],
    children: [...mn, "EqFunction"]
  },
  GetCBValues: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: re,
    selector: ne,
    parents: ["AccessPoint"],
    children: [...It, "Subject", "IssuerName"]
  },
  GSE: {
    identity: rr,
    selector: sr,
    parents: ["ConnectedAP"],
    children: [...lr, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: re,
    selector: ne,
    parents: ["LN0"],
    children: [...cr, "Protocol"]
  },
  GSESettings: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: K,
    selector: j,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: K,
    selector: j,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: No,
    selector: Oo,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: re,
    selector: ne,
    parents: ["SCL"],
    children: [...we, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Go,
    selector: Ko,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: K,
    selector: j,
    parents: [...Ot],
    children: [...we, "ExtRef"]
  },
  IssuerName: {
    identity: K,
    selector: j,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Bo,
    selector: Ho,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Wo,
    selector: Uo,
    parents: ["Server"],
    children: [...we, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Yo,
    selector: Qo,
    parents: ["AccessPoint", "LDevice"],
    children: [...dr]
  },
  LN0: {
    identity: K,
    selector: j,
    parents: ["LDevice"],
    children: [
      ...dr,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Po,
    selector: Fo,
    parents: [...es],
    children: [...we]
  },
  LNodeType: {
    identity: $i,
    selector: ki,
    parents: ["DataTypeTemplates"],
    children: [...Ai, "DO"]
  },
  Line: {
    identity: re,
    selector: ne,
    parents: ["Process", "SCL"],
    children: [
      ...hr,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: re,
    selector: ne,
    parents: [...Ot],
    children: [...we]
  },
  LogControl: {
    identity: re,
    selector: ne,
    parents: [...Ot],
    children: [...ur]
  },
  LogSettings: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: K,
    selector: j,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: K,
    selector: j,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: K,
    selector: j,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: tr,
    selector: ir,
    parents: ["TransformerWinding"],
    children: [...we]
  },
  OptFields: {
    identity: K,
    selector: j,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: aa,
    selector: la,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: sa,
    selector: oa,
    parents: ["ConnectedAP"],
    children: [...we, "P"]
  },
  PowerTransformer: {
    identity: re,
    selector: ne,
    parents: [...un],
    children: [
      ...mn,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => ye,
    parents: [],
    children: []
  },
  Process: {
    identity: re,
    selector: ne,
    parents: ["Process", "SCL"],
    children: [
      ...hr,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: ha,
    selector: ua,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: K,
    selector: j,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: re,
    selector: ne,
    parents: [...Ot],
    children: [...ur, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: K,
    selector: j,
    parents: ["ReportControl"],
    children: [...we, "ClientLN"]
  },
  SamplesPerSec: {
    identity: K,
    selector: j,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: re,
    selector: ne,
    parents: ["LN0"],
    children: [...cr, "SmvOpts"]
  },
  SecPerSamples: {
    identity: K,
    selector: j,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: ma,
    selector: fa,
    parents: [],
    children: [
      ...Wi,
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
    identity: nr,
    selector: hn,
    parents: ["DOI", "SDI"],
    children: [...we, "SDI", "DAI"]
  },
  SDO: {
    identity: re,
    selector: ne,
    parents: ["DOType"],
    children: [...It]
  },
  Server: {
    identity: K,
    selector: j,
    parents: ["AccessPoint"],
    children: [
      ...we,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: K,
    selector: j,
    parents: ["AccessPoint"],
    children: [...we]
  },
  Services: {
    identity: K,
    selector: j,
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
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: K,
    selector: j,
    parents: ["LN0"],
    children: [...we]
  },
  SettingGroups: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: K,
    selector: j,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: K,
    selector: j,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: rr,
    selector: sr,
    parents: ["ConnectedAP"],
    children: [...lr]
  },
  SmvOpts: {
    identity: K,
    selector: j,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: re,
    selector: ne,
    parents: ["AccessPoint"],
    children: [...It, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: re,
    selector: ne,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Zr
    ],
    children: [...Tt, "EqFunction"]
  },
  SubFunction: {
    identity: re,
    selector: ne,
    parents: ["SubFunction", "Function"],
    children: [
      ...Tt,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: re,
    selector: ne,
    parents: ["Communication"],
    children: [...It, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: K,
    selector: j,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: re,
    selector: ne,
    parents: ["SCL"],
    children: [...Xi, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: re,
    selector: ne,
    parents: ["TransformerWinding"],
    children: [...Tt, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: tr,
    selector: ir,
    parents: [...Yr],
    children: [...we]
  },
  Text: {
    identity: K,
    selector: j,
    parents: ts.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: K,
    selector: j,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: re,
    selector: ne,
    parents: ["PowerTransformer"],
    children: [
      ...ar,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: K,
    selector: j,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: ta,
    selector: ia,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: K,
    selector: j,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: K,
    selector: j,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: re,
    selector: ne,
    parents: ["Substation"],
    children: [...Xi, "Voltage", "Bay", "Function"]
  }
};
function rs(t, e) {
  const a = t.tagName, d = Array.from(t.children);
  if (a === "Services" || a === "SettingGroups" || !Nn(a))
    return d.find((h) => h.tagName === e) ?? null;
  const u = Ae[a]?.children ?? [];
  let o = u.findIndex((h) => h === e);
  if (o < 0) return null;
  let s;
  for (; o < u.length && !s; )
    s = d.find((h) => h.tagName === u[o]), o++;
  return s ?? null;
}
function Me(t, e) {
  return typeof e != "string" ? ye : Nn(t) ? Ae[t].selector(t, e) : t;
}
function xe(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Nn(e) ? Ae[e].identity(t) : NaN;
}
Dr((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function Ne(...t) {
  return t.reduce(
    (e, a) => e.flatMap((d) => a.map((u) => [d, u].flat())),
    [[]]
  );
}
const Na = 99;
Array(Na).fill(1).map((t, e) => `${e + 1}`);
var Oa = Object.defineProperty, Pa = Object.getOwnPropertyDescriptor, ss = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Pa(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Oa(e, a, u), u;
};
function wt() {
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
let Oi = class extends $e {
  get compasSettings() {
    return wt().compasSettings;
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
    return this.valid() ? (wt().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), wt().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), wt().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), wt().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), wt().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), wt().setCompasSetting(
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
    this.dispatchEvent(Di());
  }
  render() {
    return T` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${Ce("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${Ce("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${Ce("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${Ce("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${Ce("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${Ce("compas.settings.useWebsockets")}">
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
        ${Ce("reset")}
      </mwc-button>`;
  }
};
Oi.styles = _e`
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
ss([
  F()
], Oi.prototype, "compasSettings", 1);
Oi = ss([
  le("compas-settings")
], Oi);
const Fa = "NotFoundError", os = "ApplicationError", On = "ServerError", fr = "https://www.lfenergy.org/compas/commons/v1";
async function pt(t) {
  if (!t.ok) {
    let e = os;
    return t.status === 404 ? e = Fa : t.status >= 500 && (e = On), Promise.reject({
      type: e,
      status: t.status,
      message: await Ba(t)
    });
  }
  return Promise.resolve(t.text());
}
async function Ba(t) {
  const e = await t.text(), a = await yt(e);
  return as(a) ?? t.statusText;
}
function as(t) {
  const e = Array.from(
    t.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let a = "";
    return e.forEach((d, u) => {
      const o = d.getElementsByTagNameNS(fr, "Code").item(0).textContent, s = d.getElementsByTagNameNS(fr, "Message").item(0).textContent;
      u > 0 && (a += ", "), a += s, o && (a += " (" + o + ")");
    }), a;
  }
}
function yt(t) {
  return Promise.resolve(
    new DOMParser().parseFromString(t, "application/xml")
  );
}
function At(t) {
  const e = t.querySelectorAll("SclData").item(0).textContent ?? "", a = new DOMParser().parseFromString(
    e,
    "application/xml"
  );
  return Promise.resolve(a);
}
function gt(t) {
  return Promise.reject({ type: On, message: t.message });
}
function Ha(t, e) {
  let a = e.message;
  e.status && (a += " (" + e.status + ")"), t && t.dispatchEvent(
    Ct({
      kind: "error",
      title: G("compas.error.server"),
      message: G("compas.error.serverDetails", {
        type: e.type,
        message: a
      })
    })
  );
}
function _i(t) {
  return t.startsWith("http://") || t.startsWith("https://") ? t.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + za() + t;
}
function za() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function Ei(t, e, a, d) {
  let u;
  function o(h) {
    return new Promise((n) => setTimeout(n, h));
  }
  async function s() {
    for (; u !== void 0; )
      await o(250);
  }
  return new Promise((h, n) => {
    u = new WebSocket(a), u.onopen = () => {
      u?.send(d);
    }, u.onmessage = (i) => {
      yt(i.data).then((r) => {
        if (r.documentElement.localName === "ErrorResponse") {
          const l = as(r);
          n({ type: os, message: l });
        } else
          h(r);
        u?.close();
      }).catch((r) => {
        n(r), u?.close();
      });
    }, u.onerror = () => {
      n({
        type: On,
        message: `Websocket Error in service "${e}"`
      }), u?.close();
    }, u.onclose = () => {
      u = void 0;
    }, t.dispatchEvent(at(s()));
  });
}
const Qe = "https://www.lfenergy.org/compas/SclDataService/v1";
function Pn() {
  function t() {
    return wt().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return wt().useWebsockets();
  }
  function a() {
    const d = t() + "/common/v1/type/list";
    return fetch(d).catch(gt).then(pt).then(yt);
  }
  return {
    listOrderedSclTypes() {
      return a().then((d) => Array.from(d.querySelectorAll("*|Type") ?? []).sort(
        (u, o) => {
          const s = u.getElementsByTagNameNS(Qe, "Description").item(0).textContent ?? "", h = o.getElementsByTagNameNS(Qe, "Description").item(0).textContent ?? "";
          return s.localeCompare(h);
        }
      ));
    },
    listScls(d) {
      const u = t() + "/scl/v1/" + d + "/list";
      return fetch(u).catch(gt).then(pt).then(yt);
    },
    listSclVersions(d, u) {
      const o = t() + "/scl/v1/" + d + "/" + u + "/versions";
      return fetch(o).catch(gt).then(pt).then(yt);
    },
    getSclDocument(d, u, o) {
      if (e()) {
        const h = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${Qe}">
           <sds:Id>${o}</sds:Id>
         </sds:GetWsRequest>`, n = t() + "/scl-ws/v1/" + u + "/get";
        return Ei(
          d,
          "CompasSclDataService",
          _i(n),
          h
        ).then(At);
      }
      const s = t() + "/scl/v1/" + u + "/" + o;
      return fetch(s).catch(gt).then(pt).then(yt).then(At);
    },
    getSclDocumentVersion(d, u, o, s) {
      if (e()) {
        const n = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${Qe}">
           <sds:Id>${o}</sds:Id>
           <sds:Version>${s}</sds:Version>
         </sds:GetVersionWsRequest>`, i = t() + "/scl-ws/v1/" + u + "/get-version";
        return Ei(
          d,
          "CompasSclDataService",
          _i(i),
          n
        ).then(At);
      }
      const h = t() + "/scl/v1/" + u + "/" + o + "/" + s;
      return fetch(h).catch(gt).then(pt).then(yt).then(At);
    },
    deleteSclDocumentVersion(d, u, o) {
      const s = t() + "/scl/v1/" + d + "/" + u + "/" + o;
      return fetch(s, { method: "DELETE" }).catch(gt).then(pt);
    },
    deleteSclDocument(d, u) {
      const o = t() + "/scl/v1/" + d + "/" + u;
      return fetch(o, { method: "DELETE" }).catch(gt).then(pt);
    },
    addSclDocument(d, u, o) {
      if (e()) {
        const n = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${Qe}">
           <sds:Name>${o.sclName}</sds:Name>
           <sds:Comment>${o.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Si(
          new XMLSerializer().serializeToString(o.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, i = t() + "/scl-ws/v1/" + u + "/create";
        return Ei(
          d,
          "CompasSclDataService",
          _i(i),
          n
        ).then(At);
      }
      const s = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${Qe}">
            <sds:Name>${o.sclName}</sds:Name>
            <sds:Comment>${o.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${Si(
        new XMLSerializer().serializeToString(o.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, h = t() + "/scl/v1/" + u;
      return fetch(h, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: s
      }).catch(gt).then(pt).then(yt).then(At);
    },
    updateSclDocument(d, u, o, s) {
      if (e()) {
        const i = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${Qe}">
           <sds:Id>${o}</sds:Id>
           <sds:ChangeSet>${s.changeSet}</sds:ChangeSet>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Si(
          new XMLSerializer().serializeToString(s.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, r = t() + "/scl-ws/v1/" + u + "/update";
        return Ei(
          d,
          "CompasSclDataService",
          _i(r),
          i
        ).then(At);
      }
      const h = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${Qe}">
           <sds:ChangeSet>${s.changeSet}</sds:ChangeSet>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Si(
        new XMLSerializer().serializeToString(s.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, n = t() + "/scl/v1/" + u + "/" + o;
      return fetch(n, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: h
      }).catch(gt).then(pt).then(yt).then(At);
    }
  };
}
var Va = Object.defineProperty, Wa = Object.getOwnPropertyDescriptor, ls = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Wa(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Va(e, a, u), u;
};
let Pi = class extends $e {
  render() {
    return T` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? T`<h4 class="header">${this.header}</h4>` : T``;
  }
  renderSeparator() {
    return T`<div role="separator"></div>`;
  }
};
Pi.styles = _e`
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
ls([
  F({
    type: String
  })
], Pi.prototype, "header", 2);
Pi = ls([
  le("wizard-divider")
], Pi);
var Ua = Object.defineProperty, Ga = Object.getOwnPropertyDescriptor, cs = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Ga(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Ua(e, a, u), u;
};
function Ka(t) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: t }
  });
}
let fn = class extends $e {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    Pn().listOrderedSclTypes().then((t) => this.sclTypes = t);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? T` <mwc-list>
        <mwc-list-item><i>${Ce("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : T` <mwc-list>
      ${this.sclTypes.map((t) => {
      const e = t.getElementsByTagNameNS(Qe, "Code").item(0).textContent ?? "", a = t.getElementsByTagNameNS(Qe, "Description").item(0).textContent ?? "";
      return T`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(Ka(e))}
        >
          <span>${a} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : T` <compas-loading></compas-loading> `;
  }
};
cs([
  F()
], fn.prototype, "sclTypes", 2);
fn = cs([
  le("compas-scltype-list")
], fn);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class fi extends Ie {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, a = this.renderText(), d = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : T``, u = this.hasMeta && this.left ? this.renderMeta() : T``, o = this.renderRipple();
    return T`
      ${o}
      ${d}
      ${this.left ? "" : a}
      <span class=${$t(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? a : ""}
      ${u}`;
  }
  async onChange(e) {
    const a = e.target;
    this.selected === a.checked || (this._skipPropRequest = !0, this.selected = a.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
H([
  X("slot")
], fi.prototype, "slotElement", void 0);
H([
  X("mwc-checkbox")
], fi.prototype, "checkboxElement", void 0);
H([
  F({ type: Boolean })
], fi.prototype, "left", void 0);
H([
  F({ type: String, reflect: !0 })
], fi.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ds = _e`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Kt = class extends fi {
};
Kt.styles = [Mn, ds];
Kt = H([
  le("mwc-check-list-item")
], Kt);
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
var ie = {
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
}, He = /* @__PURE__ */ new Set();
He.add(ie.BACKSPACE);
He.add(ie.ENTER);
He.add(ie.SPACEBAR);
He.add(ie.PAGE_UP);
He.add(ie.PAGE_DOWN);
He.add(ie.END);
He.add(ie.HOME);
He.add(ie.ARROW_LEFT);
He.add(ie.ARROW_UP);
He.add(ie.ARROW_RIGHT);
He.add(ie.ARROW_DOWN);
He.add(ie.DELETE);
He.add(ie.ESCAPE);
He.add(ie.TAB);
var qe = {
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
}, ze = /* @__PURE__ */ new Map();
ze.set(qe.BACKSPACE, ie.BACKSPACE);
ze.set(qe.ENTER, ie.ENTER);
ze.set(qe.SPACEBAR, ie.SPACEBAR);
ze.set(qe.PAGE_UP, ie.PAGE_UP);
ze.set(qe.PAGE_DOWN, ie.PAGE_DOWN);
ze.set(qe.END, ie.END);
ze.set(qe.HOME, ie.HOME);
ze.set(qe.ARROW_LEFT, ie.ARROW_LEFT);
ze.set(qe.ARROW_UP, ie.ARROW_UP);
ze.set(qe.ARROW_RIGHT, ie.ARROW_RIGHT);
ze.set(qe.ARROW_DOWN, ie.ARROW_DOWN);
ze.set(qe.DELETE, ie.DELETE);
ze.set(qe.ESCAPE, ie.ESCAPE);
ze.set(qe.TAB, ie.TAB);
var Dt = /* @__PURE__ */ new Set();
Dt.add(ie.PAGE_UP);
Dt.add(ie.PAGE_DOWN);
Dt.add(ie.END);
Dt.add(ie.HOME);
Dt.add(ie.ARROW_LEFT);
Dt.add(ie.ARROW_UP);
Dt.add(ie.ARROW_RIGHT);
Dt.add(ie.ARROW_DOWN);
function _t(t) {
  var e = t.key;
  if (He.has(e))
    return e;
  var a = ze.get(t.keyCode);
  return a || ie.UNKNOWN;
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
var Et, vt, fe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Et = {}, Et["" + fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Et["" + fe.LIST_ITEM_CLASS] = "mdc-list-item", Et["" + fe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Et["" + fe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Et["" + fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Et["" + fe.ROOT] = "mdc-list";
var Ut = (vt = {}, vt["" + fe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", vt["" + fe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", vt["" + fe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", vt["" + fe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", vt["" + fe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", vt["" + fe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", vt["" + fe.ROOT] = "mdc-deprecated-list", vt), Li = {
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
    .` + fe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + fe.LIST_ITEM_CLASS + ` a,
    .` + Ut[fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ut[fe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + fe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + fe.LIST_ITEM_CLASS + ` a,
    .` + fe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + fe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ut[fe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ut[fe.LIST_ITEM_CLASS] + ` a,
    .` + Ut[fe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ut[fe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Ge = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const pn = (t, e) => t - e, ja = (t, e) => {
  const a = Array.from(t), d = Array.from(e), u = { added: [], removed: [] }, o = a.sort(pn), s = d.sort(pn);
  let h = 0, n = 0;
  for (; h < o.length || n < s.length; ) {
    const i = o[h], r = s[n];
    if (i === r) {
      h++, n++;
      continue;
    }
    if (i !== void 0 && (r === void 0 || i < r)) {
      u.removed.push(i), h++;
      continue;
    }
    if (r !== void 0 && (i === void 0 || r < i)) {
      u.added.push(r), n++;
      continue;
    }
  }
  return u;
}, qa = ["input", "button", "textarea", "select"];
function ri(t) {
  return t instanceof Set;
}
const Zi = (t) => {
  const e = t === Ge.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return ri(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class Fn extends ui {
  constructor(e) {
    super(Object.assign(Object.assign({}, Fn.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = Ge.UNSET_INDEX, this.focusedItemIndex_ = Ge.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Li;
  }
  static get numbers() {
    return Ge;
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
    const a = this.selectedIndex_;
    if (e) {
      if (!ri(a)) {
        const d = a === Ge.UNSET_INDEX;
        this.selectedIndex_ = d ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([a]);
      }
    } else if (ri(a))
      if (a.size) {
        const d = Array.from(a).sort(pn);
        this.selectedIndex_ = d[0];
      } else
        this.selectedIndex_ = Ge.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(Zi(e)) : this.setSingleSelectionAtIndex_(e));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(e, a) {
    a >= 0 && this.adapter.setTabIndexForElementIndex(a, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(e, a) {
    a >= 0 && this.adapter.setTabIndexForElementIndex(a, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(e, a, d) {
    const u = _t(e) === "ArrowLeft", o = _t(e) === "ArrowUp", s = _t(e) === "ArrowRight", h = _t(e) === "ArrowDown", n = _t(e) === "Home", i = _t(e) === "End", r = _t(e) === "Enter", l = _t(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || i ? (e.preventDefault(), this.focusLastElement()) : (h || n) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let c = this.adapter.getFocusedElementIndex();
    if (c === -1 && (c = d, c < 0))
      return;
    let f;
    if (this.isVertical_ && h || !this.isVertical_ && s)
      this.preventDefaultEvent(e), f = this.focusNextElement(c);
    else if (this.isVertical_ && o || !this.isVertical_ && u)
      this.preventDefaultEvent(e), f = this.focusPrevElement(c);
    else if (n)
      this.preventDefaultEvent(e), f = this.focusFirstElement();
    else if (i)
      this.preventDefaultEvent(e), f = this.focusLastElement();
    else if ((r || l) && a) {
      const b = e.target;
      if (b && b.tagName === "A" && r)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(c, !0);
    }
    this.focusedItemIndex_ = c, f !== void 0 && (this.setTabindexAtIndex_(f), this.focusedItemIndex_ = f);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, a, d) {
    e !== Ge.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, a, d), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(e) {
    const a = this.adapter.getListItemCount();
    let d = e + 1;
    if (d >= a)
      if (this.wrapFocus_)
        d = 0;
      else
        return e;
    return this.adapter.focusItemAtIndex(d), d;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(e) {
    let a = e - 1;
    if (a < 0)
      if (this.wrapFocus_)
        a = this.adapter.getListItemCount() - 1;
      else
        return e;
    return this.adapter.focusItemAtIndex(a), a;
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
  setEnabled(e, a) {
    this.isIndexValid_(e) && this.adapter.setDisabledStateForElementIndex(e, !a);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(e) {
    const d = `${e.target.tagName}`.toLowerCase();
    qa.indexOf(d) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, a = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== Ge.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), a && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, a = !0) {
    const d = Zi(this.selectedIndex_), u = ja(d, e);
    if (!(!u.removed.length && !u.added.length)) {
      for (const o of u.removed)
        a && this.adapter.setSelectedStateForElementIndex(o, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !1);
      for (const o of u.added)
        a && this.adapter.setSelectedStateForElementIndex(o, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !0);
      this.selectedIndex_ = e, this.adapter.notifySelected(e, u);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(e) {
    this.selectedIndex_ === Ge.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Li.ARIA_CURRENT));
    const a = this.ariaCurrentAttrValue_ !== null, d = a ? Li.ARIA_CURRENT : Li.ARIA_SELECTED;
    this.selectedIndex_ !== Ge.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, d, "false");
    const u = a ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, d, u);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === Ge.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== Ge.UNSET_INDEX ? e = this.selectedIndex_ : ri(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
  }
  isIndexValid_(e) {
    if (e instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (e.size === 0)
        return !0;
      {
        let a = !1;
        for (const d of e)
          if (a = this.isIndexInRange_(d), a)
            break;
        return a;
      }
    } else if (typeof e == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + e);
      return e === Ge.UNSET_INDEX || this.isIndexInRange_(e);
    } else
      return !1;
  }
  isIndexInRange_(e) {
    const a = this.adapter.getListItemCount();
    return e >= 0 && e < a;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(e, a, d) {
    if (this.adapter.getDisabledStateForElementIndex(e))
      return;
    let u = e;
    this.isMulti_ && (u = /* @__PURE__ */ new Set([e])), this.isIndexValid_(u) && (this.isMulti_ ? this.toggleMultiAtIndex(e, d, a) : a || d ? this.setSingleSelectionAtIndex_(e, a) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(Ge.UNSET_INDEX), a && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, a, d = !0) {
    let u = !1;
    a === void 0 ? u = !this.adapter.getSelectedStateForElementIndex(e) : u = a;
    const o = Zi(this.selectedIndex_);
    u ? o.add(e) : o.delete(e), this.setMultiSelectionAtIndex_(o, d);
  }
}
function Xa(t, e = 50) {
  let a;
  return function(d = !0) {
    clearTimeout(a), a = setTimeout(() => {
      t(d);
    }, e);
  };
}
const Ii = (t) => t.hasAttribute("mwc-list-item");
function Za() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class tt extends hi {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Fn, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Xa(this.layout.bind(this));
    this.debouncedLayout = (a = !0) => {
      Za.call(this), e(a);
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
    const a = (e = this.assignedElements) !== null && e !== void 0 ? e : [], d = [];
    for (const s of a)
      Ii(s) && (d.push(s), s._managingList = this), s.hasAttribute("divider") && !s.hasAttribute("role") && s.setAttribute("role", "separator");
    this.items_ = d;
    const u = /* @__PURE__ */ new Set();
    if (this.items_.forEach((s, h) => {
      this.itemRoles ? s.setAttribute("role", this.itemRoles) : s.removeAttribute("role"), s.selected && u.add(h);
    }), this.multi)
      this.select(u);
    else {
      const s = u.size ? u.entries().next().value[1] : -1;
      this.select(s);
    }
    const o = new Event("items-updated", { bubbles: !0, composed: !0 });
    this.dispatchEvent(o);
  }
  get selected() {
    const e = this.index;
    if (!ri(e))
      return e === -1 ? null : this.items[e];
    const a = [];
    for (const d of e)
      a.push(this.items[d]);
    return a;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const e = this.innerRole === null ? void 0 : this.innerRole, a = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, d = this.rootTabbable ? "0" : "-1";
    return T`
      <!-- @ts-ignore -->
      <ul
          tabindex=${d}
          role="${ue(e)}"
          aria-label="${ue(a)}"
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
    const a = (e = this.assignedElements) !== null && e !== void 0 ? e : [];
    return this.emptyMessage !== void 0 && a.length === 0 ? T`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const a = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusIn(e, a);
    }
  }
  onFocusOut(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const a = this.getIndexOfTarget(e);
      this.mdcFoundation.handleFocusOut(e, a);
    }
  }
  onKeydown(e) {
    if (this.mdcFoundation && this.mdcRoot) {
      const a = this.getIndexOfTarget(e), d = e.target, u = Ii(d);
      this.mdcFoundation.handleKeydown(e, u, a);
    }
  }
  onRequestSelected(e) {
    if (this.mdcFoundation) {
      let a = this.getIndexOfTarget(e);
      if (a === -1 && (this.layout(), a = this.getIndexOfTarget(e), a === -1) || this.items[a].disabled)
        return;
      const u = e.detail.selected, o = e.detail.source;
      this.mdcFoundation.handleSingleSelection(a, o === "interaction", u), e.stopPropagation();
    }
  }
  getIndexOfTarget(e) {
    const a = this.items, d = e.composedPath();
    for (const u of d) {
      let o = -1;
      if (vo(u) && Ii(u) && (o = a.indexOf(u)), o !== -1)
        return o;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (e, a) => {
        if (!this.mdcRoot)
          return "";
        const u = this.items[e];
        return u ? u.getAttribute(a) : "";
      },
      setAttributeForElementIndex: (e, a, d) => {
        if (!this.mdcRoot)
          return;
        const u = this.items[e];
        u && u.setAttribute(a, d);
      },
      focusItemAtIndex: (e) => {
        const a = this.items[e];
        a && a.focus();
      },
      setTabIndexForElementIndex: (e, a) => {
        const d = this.items[e];
        d && (d.tabindex = a);
      },
      notifyAction: (e) => {
        const a = { bubbles: !0, composed: !0 };
        a.detail = { index: e };
        const d = new CustomEvent("action", a);
        this.dispatchEvent(d);
      },
      notifySelected: (e, a) => {
        const d = { bubbles: !0, composed: !0 };
        d.detail = { index: e, diff: a };
        const u = new CustomEvent("selected", d);
        this.dispatchEvent(u);
      },
      isFocusInsideList: () => wo(this),
      isRootFocused: () => {
        const e = this.mdcRoot;
        return e.getRootNode().activeElement === e;
      },
      setDisabledStateForElementIndex: (e, a) => {
        const d = this.items[e];
        d && (d.disabled = a);
      },
      getDisabledStateForElementIndex: (e) => {
        const a = this.items[e];
        return a ? a.disabled : !1;
      },
      setSelectedStateForElementIndex: (e, a) => {
        const d = this.items[e];
        d && (d.selected = a);
      },
      getSelectedStateForElementIndex: (e) => {
        const a = this.items[e];
        return a ? a.selected : !1;
      },
      setActivatedStateForElementIndex: (e, a) => {
        const d = this.items[e];
        d && (d.activated = a);
      }
    }, this.mdcAdapter;
  }
  selectUi(e, a = !1) {
    const d = this.items[e];
    d && (d.selected = !0, d.activated = a);
  }
  deselectUi(e) {
    const a = this.items[e];
    a && (a.selected = !1, a.activated = !1);
  }
  select(e) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(e);
  }
  toggle(e, a) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(e, a);
  }
  onListItemConnected(e) {
    const a = e.target;
    this.layout(this.items.indexOf(a) === -1);
  }
  layout(e = !0) {
    e && this.updateItems();
    const a = this.items[0];
    for (const d of this.items)
      d.tabindex = -1;
    a && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = a) : a.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const e = Kr();
    if (!e.length)
      return -1;
    for (let a = e.length - 1; a >= 0; a--) {
      const d = e[a];
      if (Ii(d))
        return this.items.indexOf(d);
    }
    return -1;
  }
  focusItemAtIndex(e) {
    for (const a of this.items)
      if (a.tabindex === 0) {
        a.tabindex = -1;
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
H([
  F({ type: String })
], tt.prototype, "emptyMessage", void 0);
H([
  X(".mdc-deprecated-list")
], tt.prototype, "mdcRoot", void 0);
H([
  Tr("", !0, "*")
], tt.prototype, "assignedElements", void 0);
H([
  Tr("", !0, '[tabindex="0"]')
], tt.prototype, "tabbableElements", void 0);
H([
  F({ type: Boolean }),
  je(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], tt.prototype, "activatable", void 0);
H([
  F({ type: Boolean }),
  je(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], tt.prototype, "multi", void 0);
H([
  F({ type: Boolean }),
  je(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], tt.prototype, "wrapFocus", void 0);
H([
  F({ type: String }),
  je(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], tt.prototype, "itemRoles", void 0);
H([
  F({ type: String })
], tt.prototype, "innerRole", void 0);
H([
  F({ type: String })
], tt.prototype, "innerAriaLabel", void 0);
H([
  F({ type: Boolean })
], tt.prototype, "rootTabbable", void 0);
H([
  F({ type: Boolean, reflect: !0 }),
  je(function(t) {
    var e, a;
    if (t) {
      const d = (a = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && a !== void 0 ? a : null;
      this.previousTabindex = d, d && d.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], tt.prototype, "noninteractive", void 0);
var Ya = Object.defineProperty, Qa = Object.getOwnPropertyDescriptor, Ht = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Qa(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Ya(e, a, u), u;
};
function gn(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof nt ? t : gn(t.parentElement);
}
function Ja(t, e) {
  const a = t.innerText + `
`, d = Array.from(t.children).map((h) => h.innerText).join(`
`), u = t.value, o = (a + d + u).toUpperCase(), s = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  s.length === 1 && s[0] === "" || s.every((h) => new RegExp(
    `*${h}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(o)) ? gn(t).classList.remove("hidden") : gn(t).classList.add("hidden");
}
let nt = class extends tt {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof Kt);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Kt).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof Kt).some((t) => t.selected);
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
      (t) => Ja(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? T`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : T``;
  }
  render() {
    return T`<div id="tfcontainer">
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
nt.styles = _e`
    ${Rr(_n.styles)}

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
Ht([
  F({ type: String })
], nt.prototype, "searchFieldLabel", 2);
Ht([
  F({ type: Boolean })
], nt.prototype, "disableCheckAll", 2);
Ht([
  ee()
], nt.prototype, "existCheckListItem", 1);
Ht([
  ee()
], nt.prototype, "isAllSelected", 1);
Ht([
  ee()
], nt.prototype, "isSomeSelected", 1);
Ht([
  X("mwc-textfield")
], nt.prototype, "searchField", 2);
nt = Ht([
  le("filtered-list")
], nt);
var el = Object.defineProperty, tl = Object.getOwnPropertyDescriptor, pi = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? tl(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && el(e, a, u), u;
};
let Ft = class extends nt {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const t = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => t.push(e.value)) : t.push(this.selected.value), this.dispatchEvent(il(t)));
  }
  render() {
    return T`
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
Ft.styles = _e`
    ${Rr(nt.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
pi([
  F()
], Ft.prototype, "header", 2);
pi([
  F()
], Ft.prototype, "icon", 2);
pi([
  F({ type: Boolean })
], Ft.prototype, "disabled", 2);
pi([
  X("#filterDialog")
], Ft.prototype, "filterDialog", 2);
Ft = pi([
  le("oscd-filter-button")
], Ft);
function il(t, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: t, ...e?.detail }
  });
}
var nl = Object.defineProperty, rl = Object.getOwnPropertyDescriptor, Qt = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? rl(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && nl(e, a, u), u;
};
function sl(t) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: t }
  });
}
let Mt = class extends $e {
  constructor() {
    super(...arguments), this.labels = [], this.selectedLabels = [];
  }
  get filteredItems() {
    if (this.items)
      return this.labels.length === this.selectedLabels.length ? this.items : this.items.filter((t) => Array.from(t.querySelectorAll("Label") ?? []).map((a) => a.textContent).filter((a) => !!a).filter((a) => this.selectedLabels.includes(a)).length > 0);
  }
  firstUpdated() {
    this.fetchData();
  }
  updated(t) {
    super.updated(t), t.has("type") && (this.items = void 0, this.labels = [], this.selectedLabels = [], this.fetchData());
  }
  fetchData() {
    this.type && Pn().listScls(this.type).then((t) => {
      this.items = Array.from(t.querySelectorAll("Item") ?? []), this.labels = Array.from(
        new Set(
          Array.from(t.querySelectorAll("Label") ?? []).map((e) => e.textContent).filter((e) => !!e).sort((e, a) => e.localeCompare(a))
        )
      ), this.selectedLabels = this.labels;
    });
  }
  render() {
    if (!this.items)
      return T` <compas-loading></compas-loading> `;
    if (this.items?.length <= 0)
      return T` <mwc-list>
        <mwc-list-item><i>${Ce("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    const t = this.filteredItems;
    return T`
      <div class="filters">
        <span>${Ce("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${Ce("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems, this.requestUpdate("items"), this.requestUpdate("filteredItems"), this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((e) => T` <mwc-check-list-item
              value="${e}"
              ?selected="${this.selectedLabels.includes(e)}"
            >
              ${e}
            </mwc-check-list-item>`)}
        </oscd-filter-button>
      </div>
      ${t && t.length > 0 ? T` <filtered-list>
            ${t.map((e) => {
      const a = e.getElementsByTagNameNS(Qe, "Id").item(0).textContent ?? "";
      let d = e.getElementsByTagNameNS(Qe, "Name").item(0).textContent ?? "";
      d === "" && (d = a);
      const u = e.getElementsByTagNameNS(Qe, "Version").item(0).textContent ?? "";
      return T` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(sl(a))}
              >
                ${d} (${u})
              </mwc-list-item>`;
    })}
          </filtered-list>` : T` <mwc-list>
            <mwc-list-item>
              <i>${Ce("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
Mt.styles = _e`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
Qt([
  F()
], Mt.prototype, "type", 2);
Qt([
  ee()
], Mt.prototype, "items", 2);
Qt([
  ee()
], Mt.prototype, "labels", 2);
Qt([
  ee()
], Mt.prototype, "selectedLabels", 2);
Qt([
  ee()
], Mt.prototype, "filteredItems", 1);
Mt = Qt([
  le("compas-scl-list")
], Mt);
var ol = Object.defineProperty, al = Object.getOwnPropertyDescriptor, Ui = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? al(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && ol(e, a, u), u;
};
function pr(t, e, a, d) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: t, doc: e, docName: a, docId: d }
  });
}
let ai = class extends $e {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(t) {
    const e = await Pn().getSclDocument(this, this.selectedType ?? "", t ?? "").catch((a) => Ha(this, a));
    if (e instanceof Document) {
      const a = Ur(e.documentElement);
      this.dispatchEvent(pr(!1, e, a, t));
    }
  }
  async getSclFile(t) {
    const e = t.target?.files?.item(0) ?? !1;
    if (!e) return;
    const a = await e.text(), d = e.name, u = new DOMParser().parseFromString(a, "application/xml");
    this.dispatchEvent(pr(!0, u, d));
  }
  renderFileSelect() {
    return T`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(t) => this.dispatchEvent(at(this.getSclFile(t)))}
      />

      <mwc-button
        label="${Ce("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "", this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return T`
      <p>${Ce("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(t) => this.selectedType = t.detail.type}
      />
    `;
  }
  renderSclList() {
    return T`
      <p>${Ce("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(t) => this.dispatchEvent(
      at(
        this.getSclDocument(t.detail.docId)
      )
    )}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${Ce("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return T`
      ${this.allowLocalFile ? T`<wizard-divider></wizard-divider>
            <section>
              <h3>${Ce("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : Bs}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${Ce("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
Ui([
  F()
], ai.prototype, "selectedType", 2);
Ui([
  F()
], ai.prototype, "allowLocalFile", 2);
Ui([
  X("#scl-file")
], ai.prototype, "sclFileUI", 2);
ai = Ui([
  le("compas-open")
], ai);
function ll(t, e) {
  return new CustomEvent("load-nsdoc", {
    bubbles: !0,
    composed: !0,
    detail: { nsdoc: t, filename: e }
  });
}
function hs(t, e) {
  return new CustomEvent("oscd-settings", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: {
      show: t,
      ...e?.detail
    }
  });
}
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
  var t, e, a;
  const d = Symbol(), u = Symbol(), o = Symbol(), s = Symbol(), h = Symbol(), n = Symbol(), i = Symbol(), r = Symbol(), l = Symbol(), c = Symbol(), f = Symbol(), b = Symbol(), y = Symbol();
  class x {
    constructor() {
      this[t] = [], this[e] = [], this[a] = /* @__PURE__ */ new Set();
    }
    destructor() {
      this[l](this[o]);
      const S = this;
      S[d] = null, S[o] = null, S[u] = null;
    }
    get top() {
      const S = this[d];
      return S[S.length - 1] || null;
    }
    push(S) {
      !S || S === this.top || (this.remove(S), this[n](S), this[d].push(S));
    }
    remove(S) {
      const m = this[d].indexOf(S);
      return m === -1 ? !1 : (this[d].splice(m, 1), m === this[d].length && this[n](this.top), !0);
    }
    pop() {
      const S = this.top;
      return S && this.remove(S), S;
    }
    has(S) {
      return this[d].indexOf(S) !== -1;
    }
    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */
    [(t = d, e = o, a = u, n)](S) {
      const m = this[u], v = this[o];
      if (!S) {
        this[l](v), m.clear(), this[o] = [];
        return;
      }
      const $ = this[c](S);
      if ($[$.length - 1].parentNode !== document.body)
        throw Error("Non-connected element cannot be a blocking element");
      this[o] = $;
      const g = this[f](S);
      if (!v.length) {
        this[r]($, g, m);
        return;
      }
      let w = v.length - 1, p = $.length - 1;
      for (; w > 0 && p > 0 && v[w] === $[p]; )
        w--, p--;
      v[w] !== $[p] && this[i](v[w], $[p]), w > 0 && this[l](v.slice(0, w)), p > 0 && this[r]($.slice(0, p), g, null);
    }
    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [i](S, m) {
      const v = S[s];
      this[b](S) && !S.inert && (S.inert = !0, v.add(S)), v.has(m) && (m.inert = !1, v.delete(m)), m[h] = S[h], m[s] = v, S[h] = void 0, S[s] = void 0;
    }
    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [l](S) {
      for (const m of S) {
        m[h].disconnect(), m[h] = void 0;
        const $ = m[s];
        for (const g of $)
          g.inert = !1;
        m[s] = void 0;
      }
    }
    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    [r](S, m, v) {
      for (const $ of S) {
        const g = $.parentNode, w = g.children, p = /* @__PURE__ */ new Set();
        for (let E = 0; E < w.length; E++) {
          const I = w[E];
          I === $ || !this[b](I) || m && m.has(I) || (v && I.inert ? v.add(I) : (I.inert = !0, p.add(I)));
        }
        $[s] = p;
        const C = new MutationObserver(this[y].bind(this));
        $[h] = C;
        let A = g;
        const _ = A;
        _.__shady && _.host && (A = _.host), C.observe(A, {
          childList: !0
        });
      }
    }
    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */
    [y](S) {
      const m = this[o], v = this[u];
      for (const $ of S) {
        const g = $.target.host || $.target, w = g === document.body ? m.length : m.indexOf(g), p = m[w - 1], C = p[s];
        for (let A = 0; A < $.removedNodes.length; A++) {
          const _ = $.removedNodes[A];
          if (_ === p) {
            console.info("Detected removal of the top Blocking Element."), this.pop();
            return;
          }
          C.has(_) && (_.inert = !1, C.delete(_));
        }
        for (let A = 0; A < $.addedNodes.length; A++) {
          const _ = $.addedNodes[A];
          this[b](_) && (v && _.inert ? v.add(_) : (_.inert = !0, C.add(_)));
        }
      }
    }
    /**
     * Returns if the element is inertable.
     */
    [b](S) {
      return /^(style|template|script)$/.test(S.localName) === !1;
    }
    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */
    [c](S) {
      const m = [];
      let v = S;
      for (; v && v !== document.body; ) {
        if (v.nodeType === Node.ELEMENT_NODE && m.push(v), v.assignedSlot) {
          for (; v = v.assignedSlot; )
            m.push(v);
          v = m.pop();
          continue;
        }
        v = v.parentNode || v.host;
      }
      return m;
    }
    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */
    [f](S) {
      const m = S.shadowRoot;
      if (!m)
        return null;
      const v = /* @__PURE__ */ new Set();
      let $, g, w;
      const p = m.querySelectorAll("slot");
      if (p.length && p[0].assignedNodes)
        for ($ = 0; $ < p.length; $++)
          for (w = p[$].assignedNodes({
            flatten: !0
          }), g = 0; g < w.length; g++)
            w[g].nodeType === Node.ELEMENT_NODE && v.add(w[g]);
      return v;
    }
  }
  document.$blockingElements = new x();
})();
var gr = {}, vr;
function cl() {
  if (vr) return gr;
  vr = 1;
  var t = /* @__PURE__ */ function() {
    function a(d, u) {
      for (var o = 0; o < u.length; o++) {
        var s = u[o];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(d, s.key, s);
      }
    }
    return function(d, u, o) {
      return u && a(d.prototype, u), o && a(d, o), d;
    };
  }();
  function e(a, d) {
    if (!(a instanceof d))
      throw new TypeError("Cannot call a class as a function");
  }
  return function() {
    if (typeof window > "u" || typeof Element > "u")
      return;
    var a = Array.prototype.slice, d = Element.prototype.matches || Element.prototype.msMatchesSelector, u = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "details", "summary", "iframe", "object", "embed", "video", "[contenteditable]"].join(","), o = function() {
      function l(c, f) {
        e(this, l), this._inertManager = f, this._rootElement = c, this._managedNodes = /* @__PURE__ */ new Set(), this._rootElement.hasAttribute("aria-hidden") ? this._savedAriaHidden = this._rootElement.getAttribute("aria-hidden") : this._savedAriaHidden = null, this._rootElement.setAttribute("aria-hidden", "true"), this._makeSubtreeUnfocusable(this._rootElement), this._observer = new MutationObserver(this._onMutation.bind(this)), this._observer.observe(this._rootElement, { attributes: !0, childList: !0, subtree: !0 });
      }
      return t(l, [{
        key: "destructor",
        value: function() {
          this._observer.disconnect(), this._rootElement && (this._savedAriaHidden !== null ? this._rootElement.setAttribute("aria-hidden", this._savedAriaHidden) : this._rootElement.removeAttribute("aria-hidden")), this._managedNodes.forEach(function(f) {
            this._unmanageNode(f.node);
          }, this), this._observer = /** @type {?} */
          null, this._rootElement = /** @type {?} */
          null, this._managedNodes = /** @type {?} */
          null, this._inertManager = /** @type {?} */
          null;
        }
        /**
         * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
         */
      }, {
        key: "_makeSubtreeUnfocusable",
        /**
         * @param {!Node} startNode
         */
        value: function(f) {
          var b = this;
          n(f, function(S) {
            return b._visitNode(S);
          });
          var y = document.activeElement;
          if (!document.body.contains(f)) {
            for (var x = f, k = void 0; x; ) {
              if (x.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                k = /** @type {!ShadowRoot} */
                x;
                break;
              }
              x = x.parentNode;
            }
            k && (y = k.activeElement);
          }
          f.contains(y) && (y.blur(), y === document.activeElement && document.body.focus());
        }
        /**
         * @param {!Node} node
         */
      }, {
        key: "_visitNode",
        value: function(f) {
          if (f.nodeType === Node.ELEMENT_NODE) {
            var b = (
              /** @type {!HTMLElement} */
              f
            );
            b !== this._rootElement && b.hasAttribute("inert") && this._adoptInertRoot(b), (d.call(b, u) || b.hasAttribute("tabindex")) && this._manageNode(b);
          }
        }
        /**
         * Register the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_manageNode",
        value: function(f) {
          var b = this._inertManager.register(f, this);
          this._managedNodes.add(b);
        }
        /**
         * Unregister the given node with this InertRoot and with InertManager.
         * @param {!Node} node
         */
      }, {
        key: "_unmanageNode",
        value: function(f) {
          var b = this._inertManager.deregister(f, this);
          b && this._managedNodes.delete(b);
        }
        /**
         * Unregister the entire subtree starting at `startNode`.
         * @param {!Node} startNode
         */
      }, {
        key: "_unmanageSubtree",
        value: function(f) {
          var b = this;
          n(f, function(y) {
            return b._unmanageNode(y);
          });
        }
        /**
         * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
         * @param {!HTMLElement} node
         */
      }, {
        key: "_adoptInertRoot",
        value: function(f) {
          var b = this._inertManager.getInertRoot(f);
          b || (this._inertManager.setInert(f, !0), b = this._inertManager.getInertRoot(f)), b.managedNodes.forEach(function(y) {
            this._manageNode(y.node);
          }, this);
        }
        /**
         * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_onMutation",
        value: function(f, b) {
          f.forEach(function(y) {
            var x = (
              /** @type {!HTMLElement} */
              y.target
            );
            if (y.type === "childList")
              a.call(y.addedNodes).forEach(function(S) {
                this._makeSubtreeUnfocusable(S);
              }, this), a.call(y.removedNodes).forEach(function(S) {
                this._unmanageSubtree(S);
              }, this);
            else if (y.type === "attributes") {
              if (y.attributeName === "tabindex")
                this._manageNode(x);
              else if (x !== this._rootElement && y.attributeName === "inert" && x.hasAttribute("inert")) {
                this._adoptInertRoot(x);
                var k = this._inertManager.getInertRoot(x);
                this._managedNodes.forEach(function(S) {
                  x.contains(S.node) && k._manageNode(S.node);
                });
              }
            }
          }, this);
        }
      }, {
        key: "managedNodes",
        get: function() {
          return new Set(this._managedNodes);
        }
        /** @return {boolean} */
      }, {
        key: "hasSavedAriaHidden",
        get: function() {
          return this._savedAriaHidden !== null;
        }
        /** @param {?string} ariaHidden */
      }, {
        key: "savedAriaHidden",
        set: function(f) {
          this._savedAriaHidden = f;
        },
        get: function() {
          return this._savedAriaHidden;
        }
      }]), l;
    }(), s = function() {
      function l(c, f) {
        e(this, l), this._node = c, this._overrodeFocusMethod = !1, this._inertRoots = /* @__PURE__ */ new Set([f]), this._savedTabIndex = null, this._destroyed = !1, this.ensureUntabbable();
      }
      return t(l, [{
        key: "destructor",
        value: function() {
          if (this._throwIfDestroyed(), this._node && this._node.nodeType === Node.ELEMENT_NODE) {
            var f = (
              /** @type {!HTMLElement} */
              this._node
            );
            this._savedTabIndex !== null ? f.setAttribute("tabindex", this._savedTabIndex) : f.removeAttribute("tabindex"), this._overrodeFocusMethod && delete f.focus;
          }
          this._node = /** @type {?} */
          null, this._inertRoots = /** @type {?} */
          null, this._destroyed = !0;
        }
        /**
         * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
         * If the object has been destroyed, any attempt to access it will cause an exception.
         */
      }, {
        key: "_throwIfDestroyed",
        /**
         * Throw if user tries to access destroyed InertNode.
         */
        value: function() {
          if (this.destroyed)
            throw new Error("Trying to access destroyed InertNode");
        }
        /** @return {boolean} */
      }, {
        key: "ensureUntabbable",
        /** Save the existing tabindex value and make the node untabbable and unfocusable */
        value: function() {
          if (this.node.nodeType === Node.ELEMENT_NODE) {
            var f = (
              /** @type {!HTMLElement} */
              this.node
            );
            if (d.call(f, u)) {
              if (
                /** @type {!HTMLElement} */
                f.tabIndex === -1 && this.hasSavedTabIndex
              )
                return;
              f.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
              f.tabIndex), f.setAttribute("tabindex", "-1"), f.nodeType === Node.ELEMENT_NODE && (f.focus = function() {
              }, this._overrodeFocusMethod = !0);
            } else f.hasAttribute("tabindex") && (this._savedTabIndex = /** @type {!HTMLElement} */
            f.tabIndex, f.removeAttribute("tabindex"));
          }
        }
        /**
         * Add another inert root to this inert node's set of managing inert roots.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "addInertRoot",
        value: function(f) {
          this._throwIfDestroyed(), this._inertRoots.add(f);
        }
        /**
         * Remove the given inert root from this inert node's set of managing inert roots.
         * If the set of managing inert roots becomes empty, this node is no longer inert,
         * so the object should be destroyed.
         * @param {!InertRoot} inertRoot
         */
      }, {
        key: "removeInertRoot",
        value: function(f) {
          this._throwIfDestroyed(), this._inertRoots.delete(f), this._inertRoots.size === 0 && this.destructor();
        }
      }, {
        key: "destroyed",
        get: function() {
          return (
            /** @type {!InertNode} */
            this._destroyed
          );
        }
      }, {
        key: "hasSavedTabIndex",
        get: function() {
          return this._savedTabIndex !== null;
        }
        /** @return {!Node} */
      }, {
        key: "node",
        get: function() {
          return this._throwIfDestroyed(), this._node;
        }
        /** @param {?number} tabIndex */
      }, {
        key: "savedTabIndex",
        set: function(f) {
          this._throwIfDestroyed(), this._savedTabIndex = f;
        },
        get: function() {
          return this._throwIfDestroyed(), this._savedTabIndex;
        }
      }]), l;
    }(), h = function() {
      function l(c) {
        if (e(this, l), !c)
          throw new Error("Missing required argument; InertManager needs to wrap a document.");
        this._document = c, this._managedNodes = /* @__PURE__ */ new Map(), this._inertRoots = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._watchForInert.bind(this)), i(c.head || c.body || c.documentElement), c.readyState === "loading" ? c.addEventListener("DOMContentLoaded", this._onDocumentLoaded.bind(this)) : this._onDocumentLoaded();
      }
      return t(l, [{
        key: "setInert",
        value: function(f, b) {
          if (b) {
            if (this._inertRoots.has(f))
              return;
            var y = new o(f, this);
            if (f.setAttribute("inert", ""), this._inertRoots.set(f, y), !this._document.body.contains(f))
              for (var x = f.parentNode; x; )
                x.nodeType === 11 && i(x), x = x.parentNode;
          } else {
            if (!this._inertRoots.has(f))
              return;
            var k = this._inertRoots.get(f);
            k.destructor(), this._inertRoots.delete(f), f.removeAttribute("inert");
          }
        }
        /**
         * Get the InertRoot object corresponding to the given inert root element, if any.
         * @param {!Node} element
         * @return {!InertRoot|undefined}
         */
      }, {
        key: "getInertRoot",
        value: function(f) {
          return this._inertRoots.get(f);
        }
        /**
         * Register the given InertRoot as managing the given node.
         * In the case where the node has a previously existing inert root, this inert root will
         * be added to its set of inert roots.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {!InertNode} inertNode
         */
      }, {
        key: "register",
        value: function(f, b) {
          var y = this._managedNodes.get(f);
          return y !== void 0 ? y.addInertRoot(b) : y = new s(f, b), this._managedNodes.set(f, y), y;
        }
        /**
         * De-register the given InertRoot as managing the given inert node.
         * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
         * node from the InertManager's set of managed nodes if it is destroyed.
         * If the node is not currently managed, this is essentially a no-op.
         * @param {!Node} node
         * @param {!InertRoot} inertRoot
         * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
         */
      }, {
        key: "deregister",
        value: function(f, b) {
          var y = this._managedNodes.get(f);
          return y ? (y.removeInertRoot(b), y.destroyed && this._managedNodes.delete(f), y) : null;
        }
        /**
         * Callback used when document has finished loading.
         */
      }, {
        key: "_onDocumentLoaded",
        value: function() {
          var f = a.call(this._document.querySelectorAll("[inert]"));
          f.forEach(function(b) {
            this.setInert(b, !0);
          }, this), this._observer.observe(this._document.body || this._document.documentElement, { attributes: !0, subtree: !0, childList: !0 });
        }
        /**
         * Callback used when mutation observer detects attribute changes.
         * @param {!Array<!MutationRecord>} records
         * @param {!MutationObserver} self
         */
      }, {
        key: "_watchForInert",
        value: function(f, b) {
          var y = this;
          f.forEach(function(x) {
            switch (x.type) {
              case "childList":
                a.call(x.addedNodes).forEach(function(m) {
                  if (m.nodeType === Node.ELEMENT_NODE) {
                    var v = a.call(m.querySelectorAll("[inert]"));
                    d.call(m, "[inert]") && v.unshift(m), v.forEach(function($) {
                      this.setInert($, !0);
                    }, y);
                  }
                }, y);
                break;
              case "attributes":
                if (x.attributeName !== "inert")
                  return;
                var k = (
                  /** @type {!HTMLElement} */
                  x.target
                ), S = k.hasAttribute("inert");
                y.setInert(k, S);
                break;
            }
          }, this);
        }
      }]), l;
    }();
    function n(l, c, f) {
      if (l.nodeType == Node.ELEMENT_NODE) {
        var b = (
          /** @type {!HTMLElement} */
          l
        );
        c && c(b);
        var y = (
          /** @type {!HTMLElement} */
          b.shadowRoot
        );
        if (y) {
          n(y, c);
          return;
        }
        if (b.localName == "content") {
          for (var x = (
            /** @type {!HTMLContentElement} */
            b
          ), k = x.getDistributedNodes ? x.getDistributedNodes() : [], S = 0; S < k.length; S++)
            n(k[S], c);
          return;
        }
        if (b.localName == "slot") {
          for (var m = (
            /** @type {!HTMLSlotElement} */
            b
          ), v = m.assignedNodes ? m.assignedNodes({ flatten: !0 }) : [], $ = 0; $ < v.length; $++)
            n(v[$], c);
          return;
        }
      }
      for (var g = l.firstChild; g != null; )
        n(g, c), g = g.nextSibling;
    }
    function i(l) {
      if (!l.querySelector("style#inert-style, link#inert-style")) {
        var c = document.createElement("style");
        c.setAttribute("id", "inert-style"), c.textContent = `
[inert] {
  pointer-events: none;
  cursor: default;
}

[inert], [inert] * {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`, l.appendChild(c);
      }
    }
    if (!HTMLElement.prototype.hasOwnProperty("inert")) {
      var r = new h(document);
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        /** @this {!HTMLElement} */
        get: function() {
          return this.hasAttribute("inert");
        },
        /** @this {!HTMLElement} */
        set: function(c) {
          r.setInert(this, c);
        }
      });
    }
  }(), gr;
}
cl();
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
var Ue = {
  ANIMATE: "mdc-drawer--animate",
  CLOSING: "mdc-drawer--closing",
  DISMISSIBLE: "mdc-drawer--dismissible",
  MODAL: "mdc-drawer--modal",
  OPEN: "mdc-drawer--open",
  OPENING: "mdc-drawer--opening",
  ROOT: "mdc-drawer"
}, vn = {
  APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
  CLOSE_EVENT: "MDCDrawer:closed",
  OPEN_EVENT: "MDCDrawer:opened",
  SCRIM_SELECTOR: ".mdc-drawer-scrim",
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  LIST_ITEM_ACTIVATED_SELECTOR: ".mdc-list-item--activated,.mdc-deprecated-list-item--activated"
};
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
var us = (
  /** @class */
  function(t) {
    di(e, t);
    function e(a) {
      var d = t.call(this, lt(lt({}, e.defaultAdapter), a)) || this;
      return d.animationFrame = 0, d.animationTimer = 0, d;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ue;
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
          hasClass: function() {
            return !1;
          },
          elementHasClass: function() {
            return !1;
          },
          notifyClose: function() {
          },
          notifyOpen: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          focusActiveNavigationItem: function() {
          },
          trapFocus: function() {
          },
          releaseFocus: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.animationFrame && cancelAnimationFrame(this.animationFrame), this.animationTimer && clearTimeout(this.animationTimer);
    }, e.prototype.open = function() {
      var a = this;
      this.isOpen() || this.isOpening() || this.isClosing() || (this.adapter.addClass(Ue.OPEN), this.adapter.addClass(Ue.ANIMATE), this.runNextAnimationFrame(function() {
        a.adapter.addClass(Ue.OPENING);
      }), this.adapter.saveFocus());
    }, e.prototype.close = function() {
      !this.isOpen() || this.isOpening() || this.isClosing() || this.adapter.addClass(Ue.CLOSING);
    }, e.prototype.isOpen = function() {
      return this.adapter.hasClass(Ue.OPEN);
    }, e.prototype.isOpening = function() {
      return this.adapter.hasClass(Ue.OPENING) || this.adapter.hasClass(Ue.ANIMATE);
    }, e.prototype.isClosing = function() {
      return this.adapter.hasClass(Ue.CLOSING);
    }, e.prototype.handleKeydown = function(a) {
      var d = a.keyCode, u = a.key, o = u === "Escape" || d === 27;
      o && this.close();
    }, e.prototype.handleTransitionEnd = function(a) {
      var d = Ue.OPENING, u = Ue.CLOSING, o = Ue.OPEN, s = Ue.ANIMATE, h = Ue.ROOT, n = this.isElement(a.target) && this.adapter.elementHasClass(a.target, h);
      n && (this.isClosing() ? (this.adapter.removeClass(o), this.closed(), this.adapter.restoreFocus(), this.adapter.notifyClose()) : (this.adapter.focusActiveNavigationItem(), this.opened(), this.adapter.notifyOpen()), this.adapter.removeClass(s), this.adapter.removeClass(d), this.adapter.removeClass(u));
    }, e.prototype.opened = function() {
    }, e.prototype.closed = function() {
    }, e.prototype.runNextAnimationFrame = function(a) {
      var d = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        d.animationFrame = 0, clearTimeout(d.animationTimer), d.animationTimer = setTimeout(a, 0);
      });
    }, e.prototype.isElement = function(a) {
      return !!a.classList;
    }, e;
  }(ui)
);
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
var br = (
  /** @class */
  function(t) {
    di(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.handleScrimClick = function() {
      this.close();
    }, e.prototype.opened = function() {
      this.adapter.trapFocus();
    }, e.prototype.closed = function() {
      this.adapter.releaseFocus();
    }, e;
  }(us)
);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const wr = document.$blockingElements;
class Jt extends hi {
  constructor() {
    super(...arguments), this._previousFocus = null, this.open = !1, this.hasHeader = !1, this.type = "";
  }
  get mdcFoundationClass() {
    return this.type === "modal" ? br : us;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Tn(this.mdcRoot)), { elementHasClass: (e, a) => e.classList.contains(a), saveFocus: () => {
      this._previousFocus = this.getRootNode().activeElement;
    }, restoreFocus: () => {
      this._previousFocus && this._previousFocus.focus && this._previousFocus.focus();
    }, notifyClose: () => {
      this.open = !1, this.dispatchEvent(new Event(vn.CLOSE_EVENT, { bubbles: !0, cancelable: !0 }));
    }, notifyOpen: () => {
      this.open = !0, this.dispatchEvent(new Event(vn.OPEN_EVENT, { bubbles: !0, cancelable: !0 }));
    }, focusActiveNavigationItem: () => {
    }, trapFocus: () => {
      wr.push(this), this.appContent.inert = !0;
    }, releaseFocus: () => {
      wr.remove(this), this.appContent.inert = !1;
    } });
  }
  _handleScrimClick() {
    this.mdcFoundation instanceof br && this.mdcFoundation.handleScrimClick();
  }
  render() {
    const e = this.type === "dismissible" || this.type === "modal", a = this.type === "modal", d = this.hasHeader ? T`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      ` : "";
    return T`
      <aside class="mdc-drawer ${$t({
      "mdc-drawer--dismissible": e,
      "mdc-drawer--modal": a
    })}">
        ${d}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${a ? T`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>` : ""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `;
  }
  // note, we avoid calling `super.firstUpdated()` to control when
  // `createFoundation()` is called.
  firstUpdated() {
    this.mdcRoot.addEventListener("keydown", (e) => this.mdcFoundation.handleKeydown(e)), this.mdcRoot.addEventListener("transitionend", (e) => this.mdcFoundation.handleTransitionEnd(e));
  }
  updated(e) {
    e.has("type") && this.createFoundation();
  }
}
H([
  X(".mdc-drawer")
], Jt.prototype, "mdcRoot", void 0);
H([
  X(".mdc-drawer-app-content")
], Jt.prototype, "appContent", void 0);
H([
  je(function(t) {
    this.type !== "" && (t ? this.mdcFoundation.open() : this.mdcFoundation.close());
  }),
  F({ type: Boolean, reflect: !0 })
], Jt.prototype, "open", void 0);
H([
  F({ type: Boolean })
], Jt.prototype, "hasHeader", void 0);
H([
  F({ reflect: !0 })
], Jt.prototype, "type", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const dl = _e`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;
let bn = class extends Jt {
};
bn.styles = [dl];
bn = H([
  le("mwc-drawer")
], bn);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yr = Symbol("selection controller");
class hl {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class Bn {
  constructor(e) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (a) => {
      this.keyDownHandler(a);
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
    const d = !("global" in e) || "global" in e && e.global ? document : e.getRootNode();
    let u = d[yr];
    return u === void 0 && (u = new Bn(d), d[yr] = u), u;
  }
  keyDownHandler(e) {
    const a = e.target;
    "checked" in a && this.has(a) && (e.key == "ArrowRight" || e.key == "ArrowDown" ? this.selectNext(a) : (e.key == "ArrowLeft" || e.key == "ArrowUp") && this.selectPrevious(a));
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
    const a = this.getOrdered(e), d = a.indexOf(e), u = a[d - 1] || a[a.length - 1];
    return this.select(u), u;
  }
  /**
   * Selects and returns the controlled element next to the given element in
   * document position order. See
   * [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition).
   *
   * @param element element relative from which following element is fetched
   */
  selectNext(e) {
    const a = this.getOrdered(e), d = a.indexOf(e), u = a[d + 1] || a[0];
    return this.select(u), u;
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
    const a = this.getSet(e.name), d = this.focusedSet;
    this.focusedSet = a, d != a && a.selected && a.selected != e && a.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(e) {
    const a = this.getSet(e.name);
    for (const d of a.set)
      if (d.checked)
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
    const a = this.getSet(e.name);
    return a.ordered || (a.ordered = Array.from(a.set), a.ordered.sort((d, u) => d.compareDocumentPosition(u) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), a.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new hl()), this.sets[e];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(e) {
    const a = e.name || e.getAttribute("name") || "", d = this.getSet(a);
    d.set.add(e), d.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(e) {
    const a = this.getSet(e.name);
    a.set.delete(e), a.ordered = null, a.selected == e && (a.selected = null);
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
    const a = this.getSet(e.name);
    if (e.checked) {
      for (const d of a.set)
        d != e && (d.checked = !1);
      a.selected = e;
    }
    if (this.isAnySelected(e))
      for (const d of a.set) {
        if (d.formElementTabIndex === void 0)
          break;
        d.formElementTabIndex = d.checked ? 0 : -1;
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
var ul = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, ml = {
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
var fl = (
  /** @class */
  function(t) {
    di(e, t);
    function e(a) {
      return t.call(this, lt(lt({}, e.defaultAdapter), a)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ml;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ul;
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
    }), e.prototype.setDisabled = function(a) {
      var d = e.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(a), a ? this.adapter.addClass(d) : this.adapter.removeClass(d);
    }, e;
  }(ui)
);
class De extends Dn {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = fl, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new Rn(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
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
    var a, d;
    const u = this._checked;
    e !== u && (this._checked = e, this.formElement && (this.formElement.checked = e), (a = this._selectionController) === null || a === void 0 || a.update(this), e === !1 && ((d = this.formElement) === null || d === void 0 || d.blur()), this.requestUpdate("checked", u), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
  }
  _handleUpdatedValue(e) {
    this.formElement.value = e;
  }
  /** @soyTemplate */
  renderRipple() {
    return this.shouldRenderRipple ? T`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>` : "";
  }
  get isRippleActive() {
    var e;
    return ((e = this.rippleElement) === null || e === void 0 ? void 0 : e.isActive) || !1;
  }
  connectedCallback() {
    super.connectedCallback(), this._selectionController = Bn.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Tn(this.mdcRoot)), { setNativeControlDisabled: (e) => {
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
    return T`
      <div class="mdc-radio ${$t(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${ue(this.ariaLabel)}"
          aria-labelledby="${ue(this.ariaLabelledBy)}"
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
    const a = () => {
      window.removeEventListener("mouseup", a), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", a), this.rippleHandlers.startPress(e);
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
H([
  X(".mdc-radio")
], De.prototype, "mdcRoot", void 0);
H([
  X("input")
], De.prototype, "formElement", void 0);
H([
  ee()
], De.prototype, "useStateLayerCustomProperties", void 0);
H([
  F({ type: Boolean })
], De.prototype, "global", void 0);
H([
  F({ type: Boolean, reflect: !0 })
], De.prototype, "checked", null);
H([
  F({ type: Boolean }),
  je(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], De.prototype, "disabled", void 0);
H([
  F({ type: String }),
  je(function(t) {
    this._handleUpdatedValue(t);
  })
], De.prototype, "value", void 0);
H([
  F({ type: String })
], De.prototype, "name", void 0);
H([
  F({ type: Boolean })
], De.prototype, "reducedTouchTarget", void 0);
H([
  F({ type: Number })
], De.prototype, "formElementTabIndex", void 0);
H([
  ee()
], De.prototype, "focused", void 0);
H([
  ee()
], De.prototype, "shouldRenderRipple", void 0);
H([
  kn("mwc-ripple")
], De.prototype, "ripple", void 0);
H([
  mi,
  F({ attribute: "aria-label" })
], De.prototype, "ariaLabel", void 0);
H([
  mi,
  F({ attribute: "aria-labelledby" })
], De.prototype, "ariaLabelledBy", void 0);
H([
  Ir({ passive: !0 })
], De.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const pl = _e`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let wn = class extends De {
};
wn.styles = [pl];
wn = H([
  le("mwc-radio")
], wn);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class gi extends Ie {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, a = this.renderText(), d = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : T``, u = this.hasMeta && this.left ? this.renderMeta() : T``, o = this.renderRipple();
    return T`
      ${o}
      ${d}
      ${this.left ? "" : a}
      <mwc-radio
          global
          class=${$t(e)}
          tabindex=${this.tabindex}
          name=${ue(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? a : ""}
      ${u}`;
  }
  onClick() {
    this._changeFromClick = !0, super.onClick();
  }
  async onChange(e) {
    const a = e.target;
    this.selected === a.checked || (this._skipPropRequest = !0, this.selected = a.checked, await this.updateComplete, this._skipPropRequest = !1, this._changeFromClick || this.fireRequestSelected(this.selected, "interaction")), this._changeFromClick = !1;
  }
}
H([
  X("slot")
], gi.prototype, "slotElement", void 0);
H([
  X("mwc-radio")
], gi.prototype, "radioElement", void 0);
H([
  F({ type: Boolean })
], gi.prototype, "left", void 0);
H([
  F({ type: String, reflect: !0 })
], gi.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let yn = class extends gi {
};
yn.styles = [Mn, ds];
yn = H([
  le("mwc-radio-list-item")
], yn);
function gl(t) {
  return document.body.style.cssText = vl[t], T`
    ${bl[t]}
    <style>
      * {
        --primary: var(--cyan);
        --secondary: var(--violet);
        --mdc-theme-primary: var(--primary);
        --mdc-theme-secondary: var(--secondary);
        --mdc-theme-background: var(--base3);
        --mdc-theme-surface: var(--base3);
        --mdc-theme-on-primary: var(--base2);
        --mdc-theme-on-secondary: var(--base2);
        --mdc-theme-on-background: var(--base00);
        --mdc-theme-on-surface: var(--base00);
        --mdc-theme-text-primary-on-background: var(--base01);
        --mdc-theme-text-secondary-on-background: var(--base00);
        --mdc-theme-text-icon-on-background: var(--base00);
        --mdc-theme-error: var(--red);

        --mdc-button-disabled-ink-color: var(--base1);

        --mdc-drawer-heading-ink-color: var(--base00);

        --mdc-text-field-fill-color: var(--base2);
        --mdc-text-field-disabled-fill-color: var(--base3);
        --mdc-text-field-ink-color: var(--base00);
        --mdc-text-field-label-ink-color: var(--base00);

        --mdc-select-fill-color: var(--base2);
        --mdc-select-disabled-fill-color: var(--base3);
        --mdc-select-ink-color: var(--base00);

        --mdc-dialog-heading-ink-color: var(--base00);

        --mdc-icon-font: 'Material Icons Outlined';

        --oscd-primary: var(--oscd-theme-primary, var(--cyan));
        --oscd-secondary: var(--oscd-theme-secondary, var(--violet));
        --oscd-error: var(--oscd-theme-error, var(--red));

        --oscd-base03: var(--oscd-theme-base03, var(--base03));
        --oscd-base02: var(--oscd-theme-base02, var(--base02));
        --oscd-base01: var(--oscd-theme-base01, var(--base01));
        --oscd-base00: var(--oscd-theme-base00, var(--base00));
        --oscd-base0: var(--oscd-theme-base0, var(--base0));
        --oscd-base1: var(--oscd-theme-base1, var(--base1));
        --oscd-base2: var(--oscd-theme-base2, var(--base2));
        --oscd-base3: var(--oscd-theme-base3, var(--base3));

        --oscd-text-font: var(--oscd-theme-text-font, 'Roboto');
        --oscd-icon-font: var(--oscd-theme-icon-font, 'Material Icons');
      }

      .mdc-drawer span.mdc-drawer__title {
        color: var(--mdc-theme-text-primary-on-background) !important;
      }

      abbr {
        text-decoration: none;
        border-bottom: none;
      }

      mwc-textfield[iconTrailing='search'] {
        --mdc-shape-small: 28px;
      }
    </style>
  `;
}
const vl = {
  dark: "background: #073642",
  light: "background: #eee8d5"
}, bl = {
  light: T`
    <style>
      * {
        --base03: #002b36;
        --base02: #073642;
        --base01: #586e75;
        --base00: #657b83;
        --base0: #839496;
        --base1: #93a1a1;
        --base2: #eee8d5;
        --base3: #fdf6e3;
        --yellow: #b58900;
        --orange: #cb4b16;
        --red: #dc322f;
        --magenta: #d33682;
        --violet: #6c71c4;
        --blue: #268bd2;
        --cyan: #2aa198;
        --green: #859900;
      }
    </style>
  `,
  dark: T`
    <style>
      * {
        --base03: #fdf6e3;
        --base02: #eee8d5;
        --base01: #93a1a1;
        --base00: #839496;
        --base0: #657b83;
        --base1: #586e75;
        --base2: #073642;
        --base3: #002b36;
        --yellow: #b58900;
        --orange: #cb4b16;
        --red: #dc322f;
        --magenta: #d33682;
        --violet: #6c71c4;
        --blue: #268bd2;
        --cyan: #2aa198;
        --green: #859900;
      }
    </style>
  `
}, wl = {
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
}, yl = {
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
}, Sn = { en: yl, de: wl };
async function ms(t) {
  return Object.keys(Sn).includes(t) ? Sn[t] : {};
}
const fs = fetch("public/xml/IEC_61850-7-4_2007B3.nsd").then((t) => t.text()).then((t) => new DOMParser().parseFromString(t, "application/xml")), ps = fetch("public/xml/IEC_61850-7-3_2007B3.nsd").then((t) => t.text()).then((t) => new DOMParser().parseFromString(t, "application/xml")), gs = fetch("public/xml/IEC_61850-7-2_2007B3.nsd").then((t) => t.text()).then((t) => new DOMParser().parseFromString(t, "application/xml")), vs = fetch("public/xml/IEC_61850-8-1_2003A2.nsd").then((t) => t.text()).then((t) => new DOMParser().parseFromString(t, "application/xml")), [Sl, ii, Yi, Qi] = await Promise.all([gs, ps, fs, vs]);
let Ji, ni, Ti, Ri;
function Ni() {
  [Ji, ni, Ti, Ri] = [
    localStorage.getItem("IEC 61850-7-2") ? new DOMParser().parseFromString(localStorage.getItem("IEC 61850-7-2"), "application/xml") : void 0,
    localStorage.getItem("IEC 61850-7-3") ? new DOMParser().parseFromString(localStorage.getItem("IEC 61850-7-3"), "application/xml") : void 0,
    localStorage.getItem("IEC 61850-7-4") ? new DOMParser().parseFromString(localStorage.getItem("IEC 61850-7-4"), "application/xml") : void 0,
    localStorage.getItem("IEC 61850-8-1") ? new DOMParser().parseFromString(localStorage.getItem("IEC 61850-8-1"), "application/xml") : void 0
  ];
  const t = {
    LN: {
      getDataDescription: e
    },
    LN0: {
      getDataDescription: e
    },
    DO: {
      getDataDescription: a
    },
    SDO: {
      getDataDescription: d
    },
    DOI: {
      getDataDescription: a
    },
    DA: {
      getDataDescription: u
    },
    BDA: {
      getDataDescription: o
    },
    DAI: {
      getDataDescription: u
    }
  };
  function e(n) {
    const i = n.getAttribute("lnClass"), r = Yi.querySelector(`NS > LNClasses > LNClass[name="${i}"]`), l = Lt(Ti, r?.getAttribute("titleID"));
    return {
      label: l ? l + " (" + i + ")" : i
    };
  }
  function a(n) {
    const i = n.getAttribute("name"), r = Yi.querySelector(`NS > LNClasses > LNClass[name="${n.parentElement?.getAttribute("lnClass")}"]`), l = r?.getAttribute("base"), c = r?.querySelector(`DataObject[name="${i}"]`) ?? h(l, i);
    return {
      label: Lt(Ti, c?.getAttribute("descID")) ?? i
    };
  }
  function d(n) {
    const i = n.getAttribute("name"), r = ii.querySelector(`CDCs > CDC[name="${n.parentElement?.getAttribute("cdc")}"] > SubDataObject[name="${i}"]`);
    return {
      label: Lt(ni, r?.getAttribute("descID")) ?? i
    };
  }
  function u(n) {
    const i = n.getAttribute("name"), r = n.closest("DOType").getAttribute("cdc"), l = Qi.querySelector(`ServiceCDCs > ServiceCDC[cdc="${r}"] > ServiceDataAttribute[name="${i}"]`);
    if (l) {
      const c = l?.getAttribute("descID") ?? Qi.querySelector(`ServiceConstructedAttributes > ServiceConstructedAttribute[name="${i}"]`)?.getAttribute("titleID") ?? "";
      return {
        label: Lt(Ri, c) ?? i
      };
    } else {
      const c = ii.querySelector(`NS > CDCs > CDC[name="${r}"] > DataAttribute[name="${i}"]`);
      return {
        label: Lt(ni, c?.getAttribute("descID")) ?? i
      };
    }
  }
  function o(n, i) {
    const r = n.getAttribute("name"), l = i?.filter((f) => f.tagName === "DA")[0], c = Qi.querySelector(`ServiceConstructedAttributes > ServiceConstructedAttribute[name="${l.getAttribute("name")}"]`);
    if (c) {
      if (c.querySelector(`SubDataAttribute[name="${i[0].getAttribute("name")}"]`)?.getAttribute("type") == "Originator") {
        const f = Sl.querySelector(`ConstructedAttributes > ConstructedAttribute[name="Originator"] > SubDataAttribute[name="${r}"]`);
        return {
          label: Lt(Ji, f?.getAttribute("descID")) ?? r
        };
      }
      return {
        label: Lt(
          Ri,
          c.querySelector(`SubDataAttribute[name="${r}"]`)?.getAttribute("descID")
        ) ?? r
      };
    } else {
      const f = ii.querySelector(`NS > CDCs > CDC[name="${l.closest("DOType")?.getAttribute("cdc")}"] >
        DataAttribute[name="${l.getAttribute("name")}"]`);
      return {
        label: Lt(ni, s(f, r)?.getAttribute("descID")) ?? r
      };
    }
  }
  function s(n, i) {
    return n ? ii.querySelector(`ConstructedAttributes > ConstructedAttribute[name="${n?.getAttribute("type")}"] > SubDataAttribute[name="${i}"]`) ?? s(ii.querySelector(`ConstructedAttributes > ConstructedAttribute[name="${n?.getAttribute("type")}"] > SubDataAttribute`), i) : null;
  }
  function h(n, i) {
    if (!n) return null;
    const r = Yi.querySelector(`NS > LNClasses > AbstractLNClass[name="${n}"]`), l = r?.getAttribute("base");
    return r?.querySelector(`DataObject[name="${i}"]`) ?? h(l, i);
  }
  return {
    nsdoc72: Ji,
    nsdoc73: ni,
    nsdoc74: Ti,
    nsdoc81: Ri,
    getDataDescription: function(i, r) {
      return t[i.tagName].getDataDescription(i, r);
    }
  };
}
function Lt(t, e) {
  return t?.querySelector(`NSDoc > Doc[id="${e ?? ""}"]`)?.textContent;
}
var Cl = Object.defineProperty, xl = Object.getOwnPropertyDescriptor, ct = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? xl(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Cl(e, a, u), u;
};
const $l = {
  language: "en",
  theme: "light",
  mode: "safe",
  showieds: "off",
  "IEC 61850-7-2": void 0,
  "IEC 61850-7-3": void 0,
  "IEC 61850-7-4": void 0,
  "IEC 61850-8-1": void 0
};
let Je = class extends $e {
  constructor() {
    super(), this.nsdoc = Ni(), this.nsdUploadButton = !0, Or({ loader: ms, empty: (t) => t }), on(this.settings.language);
  }
  get settings() {
    return {
      language: this.getSetting("language"),
      theme: this.getSetting("theme"),
      mode: this.getSetting("mode"),
      showieds: this.getSetting("showieds"),
      "IEC 61850-7-2": this.getSetting("IEC 61850-7-2"),
      "IEC 61850-7-3": this.getSetting("IEC 61850-7-3"),
      "IEC 61850-7-4": this.getSetting("IEC 61850-7-4"),
      "IEC 61850-8-1": this.getSetting("IEC 61850-8-1")
    };
  }
  /**
   * Get the versions of the current OpenSCD NSD files.
   * @returns Current version, revision and release for all current OpenSCD NSD files.
   */
  async nsdVersions() {
    const [t, e, a, d] = await Promise.all([
      gs,
      ps,
      fs,
      vs
    ]), [u, o, s, h] = [
      t.querySelector("NS"),
      e.querySelector("NS"),
      a.querySelector("NS"),
      d.querySelector("ServiceNS")
    ];
    return {
      "IEC 61850-7-2": {
        version: u?.getAttribute("version") ?? void 0,
        revision: u?.getAttribute("revision") ?? void 0,
        release: u?.getAttribute("release") ?? void 0
      },
      "IEC 61850-7-3": {
        version: o?.getAttribute("version") ?? void 0,
        revision: o?.getAttribute("revision") ?? void 0,
        release: o?.getAttribute("release") ?? void 0
      },
      "IEC 61850-7-4": {
        version: s?.getAttribute("version") ?? void 0,
        revision: s?.getAttribute("revision") ?? void 0,
        release: s?.getAttribute("release") ?? void 0
      },
      "IEC 61850-8-1": {
        version: h?.getAttribute("version") ?? void 0,
        revision: h?.getAttribute("revision") ?? void 0,
        release: h?.getAttribute("release") ?? void 0
      }
    };
  }
  getSetting(t) {
    return localStorage.getItem(t) ?? $l[t];
  }
  /** Update the `value` of `setting`, storing to `localStorage`. */
  setSetting(t, e) {
    localStorage.setItem(t, e), this.shadowRoot?.querySelector("wizard-dialog")?.requestUpdate(), this.requestUpdate();
  }
  /** Remove the `setting` in `localStorage`. */
  removeSetting(t) {
    localStorage.removeItem(t), this.shadowRoot?.querySelector("wizard-dialog")?.requestUpdate(), this.requestUpdate(), this.nsdoc = Ni();
  }
  onClosing(t) {
    t.detail?.action === "reset" ? (Object.keys(this.settings).forEach((e) => localStorage.removeItem(e)), this.requestUpdate("settings")) : t.detail?.action === "save" && (this.setSetting("language", this.languageUI.value), this.setSetting("theme", this.darkThemeUI.checked ? "dark" : "light"), this.setSetting("mode", this.modeUI.checked ? "pro" : "safe"), this.setSetting("showieds", this.showiedsUI.checked ? "on" : "off"), this.requestUpdate("settings"));
  }
  updated(t) {
    super.updated(t), t.has("settings") && on(this.settings.language);
  }
  renderFileSelect() {
    return T`
      <input
        id="nsdoc-file"
        accept=".nsdoc"
        type="file"
        hidden
        required
        multiple
        @change="${(t) => this.uploadNsdocFile(t)}}"
      />
      <mwc-button
        label="${G("settings.selectFileButton")}"
        id="selectFileButton"
        @click=${() => {
      this.shadowRoot.querySelector("#nsdoc-file")?.click();
    }}
      >
      </mwc-button>
    `;
  }
  async uploadNsdocFile(t) {
    const e = Array.from(
      t.target?.files ?? []
    );
    if (e.length != 0) {
      for (const a of e) {
        const d = await a.text();
        this.dispatchEvent(ll(d, a.name));
      }
      this.nsdocFileUI.value = "", this.requestUpdate();
    }
  }
  async onLoadNsdoc(t) {
    const e = this.parseToXmlObject(
      t.detail.nsdoc
    ).querySelector("NSDoc"), a = e?.getAttribute("id");
    if (!a) {
      this.dispatchEvent(
        Ct({
          kind: "error",
          title: G("settings.invalidFileNoIdFound", {
            filename: t.detail.filename
          })
        })
      );
      return;
    }
    const u = (await this.nsdVersions())[a], o = {
      version: e.getAttribute("version") ?? "",
      revision: e.getAttribute("revision") ?? "",
      release: e.getAttribute("release") ?? ""
    };
    if (!this.isEqual(u, o)) {
      this.dispatchEvent(
        Ct({
          kind: "error",
          title: G("settings.invalidNsdocVersion", {
            id: a,
            filename: t.detail.filename,
            nsdVersion: `${u.version}${u.revision}${u.release}`,
            nsdocVersion: `${o.version}${o.revision}${o.release}`
          })
        })
      );
      return;
    }
    this.setSetting(a, t.detail.nsdoc), this.nsdoc = Ni();
  }
  /**
   * Check the equality of two NsdVersions.
   * @param versionA - First version to compare.
   * @param versionB - Second version to compare.
   * @returns Are they equal or not.
   */
  isEqual(t, e) {
    return t.version == e.version && t.revision == e.revision && t.release == e.release;
  }
  /**
   * Render one .nsdoc item in the Settings wizard
   * @param key - The key of the nsdoc file in the settings.
   * @returns a .nsdoc item for the Settings wizard
   */
  renderNsdocItem(t) {
    const e = this.settings[t];
    let a, d, u;
    if (e) {
      const o = this.parseToXmlObject(e).querySelector("NSDoc");
      a = o?.getAttribute("version"), d = o?.getAttribute("revision"), u = o?.getAttribute("release");
    }
    return T`<mwc-list-item
      id=${t}
      graphic="avatar"
      hasMeta
      twoline
      .disabled=${!e}
    >
      <span>${t}</span>
      ${e ? T`<span slot="secondary"
            >${a}${d}${u}</span
          >` : T``}
      ${e ? T`<mwc-icon slot="graphic" style="color:green;">done</mwc-icon>` : T`<mwc-icon slot="graphic" style="color:red;">close</mwc-icon>`}
      ${e ? T`<mwc-icon
            id="deleteNsdocItem"
            slot="meta"
            @click=${() => {
      this.removeSetting(t);
    }}
            >delete</mwc-icon
          >` : T``}
    </mwc-list-item>`;
  }
  parseToXmlObject(t) {
    return new DOMParser().parseFromString(t, "application/xml");
  }
  connectedCallback() {
    super.connectedCallback(), this.host && (this.host.addEventListener("oscd-settings", (t) => {
      t.detail.show ? this.settingsUI.show() : this.settingsUI.close();
    }), this.host.addEventListener(
      "load-nsdoc",
      (t) => this.onLoadNsdoc(t)
    ));
  }
  render() {
    return T`<mwc-dialog
        id="settings"
        heading="${G("settings.title")}"
        @closing=${this.onClosing}
      >
        <form>
          <mwc-select
            fixedMenuPosition
            id="language"
            icon="language"
            label="${G("settings.language")}"
          >
            ${Object.keys(Sn).map(
      (t) => T`<mwc-list-item
                  graphic="icon"
                  value="${t}"
                  ?selected=${t === this.settings.language}
                  >${G(`settings.languages.${t}`)}</mwc-list-item
                >`
    )}
          </mwc-select>
          <mwc-formfield label="${G("settings.dark")}">
            <mwc-switch
              id="dark"
              ?checked=${this.settings.theme === "dark"}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield label="${G("settings.mode")}">
            <mwc-switch
              id="mode"
              ?checked=${this.settings.mode === "pro"}
            ></mwc-switch>
          </mwc-formfield>
          <mwc-formfield label="${G("settings.showieds")}">
            <mwc-switch
              id="showieds"
              ?checked=${this.settings.showieds === "on"}
            ></mwc-switch>
          </mwc-formfield>
        </form>
        <wizard-divider></wizard-divider>
        ${this.nsdUploadButton ? T`<section id="shownsdbutton">
              <h3>${G("settings.loadNsdTranslations")}</h3>
              ${this.renderFileSelect()}
            </section>` : T``}
        <mwc-list id="nsdocList">
          ${this.renderNsdocItem("IEC 61850-7-2")}
          ${this.renderNsdocItem("IEC 61850-7-3")}
          ${this.renderNsdocItem("IEC 61850-7-4")}
          ${this.renderNsdocItem("IEC 61850-8-1")}
        </mwc-list>
        <mwc-button slot="secondaryAction" dialogAction="close">
          ${G("cancel")}
        </mwc-button>
        <mwc-button
          style="--mdc-theme-primary: var(--mdc-theme-error)"
          slot="secondaryAction"
          dialogAction="reset"
        >
          ${G("reset")}
        </mwc-button>
        <mwc-button
          icon="save"
          trailingIcon
          slot="primaryAction"
          dialogAction="save"
        >
          ${G("save")}
        </mwc-button>
      </mwc-dialog>
      <slot></slot>
      ${gl(this.settings.theme)}`;
  }
};
Je.styles = _e`
    mwc-top-app-bar-fixed {
      --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
    } /* hack to fix disabled icon buttons rendering black */

    mwc-tab {
      background-color: var(--primary);
      --mdc-theme-primary: var(--mdc-theme-on-primary);
    }

    input[type='file'] {
      display: none;
    }

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }

    mwc-linear-progress {
      position: fixed;
      --mdc-linear-progress-buffer-color: var(--primary);
      --mdc-theme-primary: var(--secondary);
      left: 0px;
      top: 0px;
      width: 100%;
      pointer-events: none;
      z-index: 1000;
    }

    tt {
      font-family: 'Roboto Mono', monospace;
      font-weight: 300;
    }

    .landing {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .landing_icon:hover {
      box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
        0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
    }

    .landing_icon {
      margin: 12px;
      border-radius: 16px;
      width: 160px;
      height: 140px;
      text-align: center;
      color: var(--mdc-theme-on-secondary);
      background: var(--secondary);
      --mdc-icon-button-size: 100px;
      --mdc-icon-size: 100px;
      --mdc-ripple-color: rgba(0, 0, 0, 0);
      box-shadow: rgb(0 0 0 / 14%) 0px 6px 10px 0px,
        rgb(0 0 0 / 12%) 0px 1px 18px 0px, rgb(0 0 0 / 20%) 0px 3px 5px -1px;
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .landing_label {
      width: 160px;
      height: 50px;
      margin-top: 100px;
      margin-left: -30px;
      font-family: 'Roboto', sans-serif;
    }

    .plugin.menu {
      display: flex;
    }

    .plugin.validator {
      display: flex;
    }
  `;
ct([
  F()
], Je.prototype, "settings", 1);
ct([
  F({ attribute: !1 })
], Je.prototype, "nsdoc", 2);
ct([
  F({
    type: Object
  })
], Je.prototype, "host", 2);
ct([
  F({ type: Boolean })
], Je.prototype, "nsdUploadButton", 2);
ct([
  X("#settings")
], Je.prototype, "settingsUI", 2);
ct([
  X("#language")
], Je.prototype, "languageUI", 2);
ct([
  X("#dark")
], Je.prototype, "darkThemeUI", 2);
ct([
  X("#mode")
], Je.prototype, "modeUI", 2);
ct([
  X("#showieds")
], Je.prototype, "showiedsUI", 2);
ct([
  X("#nsdoc-file")
], Je.prototype, "nsdocFileUI", 2);
Je = ct([
  le("oscd-settings")
], Je);
var kl = Object.defineProperty, Al = Object.getOwnPropertyDescriptor, bs = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Al(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && kl(e, a, u), u;
};
let Cn = class extends $e {
  constructor() {
    super(), this.waiting = !1, this.work = /* @__PURE__ */ new Set(), this.workDone = Promise.allSettled(this.work), this.onPendingState = this.onPendingState.bind(this);
  }
  async onPendingState(t) {
    this.waiting = !0, this.work.add(t.detail.promise), this.workDone = Promise.allSettled(this.work), await t.detail.promise.catch((e) => console.warn(e)), this.work.delete(t.detail.promise), this.waiting = this.work.size > 0;
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("pending-state", this.onPendingState);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("pending-state", this.onPendingState);
  }
  render() {
    return T`<slot></slot>
      <mwc-linear-progress
        .closed=${!this.waiting}
        indeterminate
      ></mwc-linear-progress>`;
  }
};
bs([
  F({ type: Boolean })
], Cn.prototype, "waiting", 2);
Cn = bs([
  le("oscd-waiter")
], Cn);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function it(t, e, a, d) {
  var u = arguments.length, o = u < 3 ? e : d, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(t, e, a, d);
  else for (var h = t.length - 1; h >= 0; h--) (s = t[h]) && (o = (u < 3 ? s(o) : u > 3 ? s(e, a, o) : s(e, a)) || o);
  return u > 3 && o && Object.defineProperty(e, a, o), o;
}
(function() {
  var t = "ace", e = /* @__PURE__ */ function() {
    return this;
  }();
  !e && typeof window < "u" && (e = window);
  var a = function(n, i, r) {
    if (typeof n != "string") {
      a.original ? a.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace());
      return;
    }
    arguments.length == 2 && (r = i), a.modules[n] || (a.payloads[n] = r, a.modules[n] = null);
  };
  a.modules = {}, a.payloads = {};
  var d = function(n, i, r) {
    if (typeof i == "string") {
      var l = s(n, i);
      if (l != null)
        return r && r(), l;
    } else if (Object.prototype.toString.call(i) === "[object Array]") {
      for (var c = [], f = 0, b = i.length; f < b; ++f) {
        var y = s(n, i[f]);
        if (y == null && u.original)
          return;
        c.push(y);
      }
      return r && r.apply(null, c) || !0;
    }
  }, u = function(n, i) {
    var r = d("", n, i);
    return r == null && u.original ? u.original.apply(this, arguments) : r;
  }, o = function(n, i) {
    if (i.indexOf("!") !== -1) {
      var r = i.split("!");
      return o(n, r[0]) + "!" + o(n, r[1]);
    }
    if (i.charAt(0) == ".") {
      var l = n.split("/").slice(0, -1).join("/");
      for (i = l + "/" + i; i.indexOf(".") !== -1 && c != i; ) {
        var c = i;
        i = i.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
      }
    }
    return i;
  }, s = function(n, i) {
    i = o(n, i);
    var r = a.modules[i];
    if (!r) {
      if (r = a.payloads[i], typeof r == "function") {
        var l = {}, c = {
          id: i,
          uri: "",
          exports: l,
          packaged: !0
        }, f = function(y, x) {
          return d(i, y, x);
        }, b = r(f, l, c);
        l = b || c.exports, a.modules[i] = l, delete a.payloads[i];
      }
      r = a.modules[i] = l || r;
    }
    return r;
  };
  function h(n) {
    var i = e;
    e[n] || (e[n] = {}), i = e[n], (!i.define || !i.define.packaged) && (a.original = i.define, i.define = a, i.define.packaged = !0), (!i.require || !i.require.packaged) && (u.original = i.require, i.require = u, i.require.packaged = !0);
  }
  h(t);
})();
ace.define("ace/lib/fixoldbrowsers", ["require", "exports", "module"], function(t, e, a) {
  typeof Element < "u" && !Element.prototype.remove && Object.defineProperty(Element.prototype, "remove", {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: function() {
      this.parentNode && this.parentNode.removeChild(this);
    }
  });
});
ace.define("ace/lib/useragent", ["require", "exports", "module"], function(t, e, a) {
  e.OS = {
    LINUX: "LINUX",
    MAC: "MAC",
    WINDOWS: "WINDOWS"
  }, e.getOS = function() {
    return e.isMac ? e.OS.MAC : e.isLinux ? e.OS.LINUX : e.OS.WINDOWS;
  };
  var d = typeof navigator == "object" ? navigator : {}, u = (/mac|win|linux/i.exec(d.platform) || ["other"])[0].toLowerCase(), o = d.userAgent || "", s = d.appName || "";
  e.isWin = u == "win", e.isMac = u == "mac", e.isLinux = u == "linux", e.isIE = s == "Microsoft Internet Explorer" || s.indexOf("MSAppHost") >= 0 ? parseFloat((o.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((o.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), e.isOldIE = e.isIE && e.isIE < 9, e.isGecko = e.isMozilla = o.match(/ Gecko\/\d+/), e.isOpera = typeof opera == "object" && Object.prototype.toString.call(window.opera) == "[object Opera]", e.isWebKit = parseFloat(o.split("WebKit/")[1]) || void 0, e.isChrome = parseFloat(o.split(" Chrome/")[1]) || void 0, e.isEdge = parseFloat(o.split(" Edge/")[1]) || void 0, e.isAIR = o.indexOf("AdobeAIR") >= 0, e.isAndroid = o.indexOf("Android") >= 0, e.isChromeOS = o.indexOf(" CrOS ") >= 0, e.isIOS = /iPad|iPhone|iPod/.test(o) && !window.MSStream, e.isIOS && (e.isMac = !0), e.isMobile = e.isIOS || e.isAndroid;
});
ace.define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function(t, e, a) {
  var d = t("./useragent"), u = "http://www.w3.org/1999/xhtml";
  if (e.buildDom = function s(h, n, i) {
    if (typeof h == "string" && h) {
      var r = document.createTextNode(h);
      return n && n.appendChild(r), r;
    }
    if (!Array.isArray(h))
      return h && h.appendChild && n && n.appendChild(h), h;
    if (typeof h[0] != "string" || !h[0]) {
      for (var l = [], c = 0; c < h.length; c++) {
        var f = s(h[c], n, i);
        f && l.push(f);
      }
      return l;
    }
    var b = document.createElement(h[0]), y = h[1], x = 1;
    y && typeof y == "object" && !Array.isArray(y) && (x = 2);
    for (var c = x; c < h.length; c++)
      s(h[c], b, i);
    return x == 2 && Object.keys(y).forEach(function(k) {
      var S = y[k];
      k === "class" ? b.className = Array.isArray(S) ? S.join(" ") : S : typeof S == "function" || k == "value" || k[0] == "$" ? b[k] = S : k === "ref" ? i && (i[S] = b) : S != null && b.setAttribute(k, S);
    }), n && n.appendChild(b), b;
  }, e.getDocumentHead = function(s) {
    return s || (s = document), s.head || s.getElementsByTagName("head")[0] || s.documentElement;
  }, e.createElement = function(s, h) {
    return document.createElementNS ? document.createElementNS(h || u, s) : document.createElement(s);
  }, e.removeChildren = function(s) {
    s.innerHTML = "";
  }, e.createTextNode = function(s, h) {
    var n = h ? h.ownerDocument : document;
    return n.createTextNode(s);
  }, e.createFragment = function(s) {
    var h = s ? s.ownerDocument : document;
    return h.createDocumentFragment();
  }, e.hasCssClass = function(s, h) {
    var n = (s.className + "").split(/\s+/g);
    return n.indexOf(h) !== -1;
  }, e.addCssClass = function(s, h) {
    e.hasCssClass(s, h) || (s.className += " " + h);
  }, e.removeCssClass = function(s, h) {
    for (var n = s.className.split(/\s+/g); ; ) {
      var i = n.indexOf(h);
      if (i == -1)
        break;
      n.splice(i, 1);
    }
    s.className = n.join(" ");
  }, e.toggleCssClass = function(s, h) {
    for (var n = s.className.split(/\s+/g), i = !0; ; ) {
      var r = n.indexOf(h);
      if (r == -1)
        break;
      i = !1, n.splice(r, 1);
    }
    return i && n.push(h), s.className = n.join(" "), i;
  }, e.setCssClass = function(s, h, n) {
    n ? e.addCssClass(s, h) : e.removeCssClass(s, h);
  }, e.hasCssString = function(s, h) {
    var n = 0, i;
    if (h = h || document, i = h.querySelectorAll("style")) {
      for (; n < i.length; )
        if (i[n++].id === s)
          return !0;
    }
  }, e.importCssString = function(h, n, i) {
    var r = i;
    !i || !i.getRootNode ? r = document : (r = i.getRootNode(), (!r || r == i) && (r = document));
    var l = r.ownerDocument || r;
    if (n && e.hasCssString(n, r))
      return null;
    n && (h += `
/*# sourceURL=ace/css/` + n + " */");
    var c = e.createElement("style");
    c.appendChild(l.createTextNode(h)), n && (c.id = n), r == l && (r = e.getDocumentHead(l)), r.insertBefore(c, r.firstChild);
  }, e.importCssStylsheet = function(s, h) {
    e.buildDom(["link", { rel: "stylesheet", href: s }], e.getDocumentHead(h));
  }, e.scrollbarWidth = function(s) {
    var h = e.createElement("ace_inner");
    h.style.width = "100%", h.style.minWidth = "0px", h.style.height = "200px", h.style.display = "block";
    var n = e.createElement("ace_outer"), i = n.style;
    i.position = "absolute", i.left = "-10000px", i.overflow = "hidden", i.width = "200px", i.minWidth = "0px", i.height = "150px", i.display = "block", n.appendChild(h);
    var r = s.documentElement;
    r.appendChild(n);
    var l = h.offsetWidth;
    i.overflow = "scroll";
    var c = h.offsetWidth;
    return l == c && (c = n.clientWidth), r.removeChild(n), l - c;
  }, typeof document > "u" && (e.importCssString = function() {
  }), e.computedStyle = function(s, h) {
    return window.getComputedStyle(s, "") || {};
  }, e.setStyle = function(s, h, n) {
    s[h] !== n && (s[h] = n);
  }, e.HAS_CSS_ANIMATION = !1, e.HAS_CSS_TRANSFORMS = !1, e.HI_DPI = d.isWin ? typeof window < "u" && window.devicePixelRatio >= 1.5 : !0, typeof document < "u") {
    var o = document.createElement("div");
    e.HI_DPI && o.style.transform !== void 0 && (e.HAS_CSS_TRANSFORMS = !0), !d.isEdge && typeof o.style.animationName < "u" && (e.HAS_CSS_ANIMATION = !0), o = null;
  }
  e.HAS_CSS_TRANSFORMS ? e.translate = function(s, h, n) {
    s.style.transform = "translate(" + Math.round(h) + "px, " + Math.round(n) + "px)";
  } : e.translate = function(s, h, n) {
    s.style.top = Math.round(n) + "px", s.style.left = Math.round(h) + "px";
  };
});
ace.define("ace/lib/oop", ["require", "exports", "module"], function(t, e, a) {
  e.inherits = function(d, u) {
    d.super_ = u, d.prototype = Object.create(u.prototype, {
      constructor: {
        value: d,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  }, e.mixin = function(d, u) {
    for (var o in u)
      d[o] = u[o];
    return d;
  }, e.implement = function(d, u) {
    e.mixin(d, u);
  };
});
ace.define("ace/lib/keys", ["require", "exports", "module", "ace/lib/oop"], function(t, e, a) {
  var d = t("./oop"), u = function() {
    var o = {
      MODIFIER_KEYS: {
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        224: "Meta",
        91: "MetaLeft",
        92: "MetaRight",
        93: "ContextMenu"
      },
      KEY_MODS: {
        ctrl: 1,
        alt: 2,
        option: 2,
        shift: 4,
        super: 8,
        meta: 8,
        command: 8,
        cmd: 8,
        control: 1
      },
      FUNCTION_KEYS: {
        8: "Backspace",
        9: "Tab",
        13: "Return",
        19: "Pause",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "Print",
        45: "Insert",
        46: "Delete",
        96: "Numpad0",
        97: "Numpad1",
        98: "Numpad2",
        99: "Numpad3",
        100: "Numpad4",
        101: "Numpad5",
        102: "Numpad6",
        103: "Numpad7",
        104: "Numpad8",
        105: "Numpad9",
        "-13": "NumpadEnter",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "Numlock",
        145: "Scrolllock"
      },
      PRINTABLE_KEYS: {
        32: " ",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        61: "=",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        107: "+",
        109: "-",
        110: ".",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        111: "/",
        106: "*"
      }
    }, s, h;
    for (h in o.FUNCTION_KEYS)
      s = o.FUNCTION_KEYS[h].toLowerCase(), o[s] = parseInt(h, 10);
    for (h in o.PRINTABLE_KEYS)
      s = o.PRINTABLE_KEYS[h].toLowerCase(), o[s] = parseInt(h, 10);
    return d.mixin(o, o.MODIFIER_KEYS), d.mixin(o, o.PRINTABLE_KEYS), d.mixin(o, o.FUNCTION_KEYS), o.enter = o.return, o.escape = o.esc, o.del = o.delete, o[173] = "-", function() {
      for (var n = ["cmd", "ctrl", "alt", "shift"], i = Math.pow(2, n.length); i--; )
        o.KEY_MODS[i] = n.filter(function(r) {
          return i & o.KEY_MODS[r];
        }).join("-") + "-";
    }(), o.KEY_MODS[0] = "", o.KEY_MODS[-1] = "input-", o;
  }();
  d.mixin(e, u), e.keyCodeToString = function(o) {
    var s = u[o];
    return typeof s != "string" && (s = String.fromCharCode(o)), s.toLowerCase();
  };
});
ace.define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(t, e, a) {
  var d = t("./keys"), u = t("./useragent"), o = null, s = 0, h;
  function n() {
    h = !1;
    try {
      document.createComment("").addEventListener("test", function() {
      }, {
        get passive() {
          h = { passive: !1 };
        }
      });
    } catch {
    }
  }
  function i() {
    return h == null && n(), h;
  }
  function r(k, S, m) {
    this.elem = k, this.type = S, this.callback = m;
  }
  r.prototype.destroy = function() {
    c(this.elem, this.type, this.callback), this.elem = this.type = this.callback = void 0;
  };
  var l = e.addListener = function(k, S, m, v) {
    k.addEventListener(S, m, i()), v && v.$toDestroy.push(new r(k, S, m));
  }, c = e.removeListener = function(k, S, m) {
    k.removeEventListener(S, m, i());
  };
  e.stopEvent = function(k) {
    return e.stopPropagation(k), e.preventDefault(k), !1;
  }, e.stopPropagation = function(k) {
    k.stopPropagation && k.stopPropagation();
  }, e.preventDefault = function(k) {
    k.preventDefault && k.preventDefault();
  }, e.getButton = function(k) {
    return k.type == "dblclick" ? 0 : k.type == "contextmenu" || u.isMac && k.ctrlKey && !k.altKey && !k.shiftKey ? 2 : k.button;
  }, e.capture = function(k, S, m) {
    var v = k && k.ownerDocument || document;
    function $(g) {
      S && S(g), m && m(g), c(v, "mousemove", S), c(v, "mouseup", $), c(v, "dragstart", $);
    }
    return l(v, "mousemove", S), l(v, "mouseup", $), l(v, "dragstart", $), $;
  }, e.addMouseWheelListener = function(k, S, m) {
    "onmousewheel" in k ? l(k, "mousewheel", function(v) {
      var $ = 8;
      v.wheelDeltaX !== void 0 ? (v.wheelX = -v.wheelDeltaX / $, v.wheelY = -v.wheelDeltaY / $) : (v.wheelX = 0, v.wheelY = -v.wheelDelta / $), S(v);
    }, m) : "onwheel" in k ? l(k, "wheel", function(v) {
      var $ = 0.35;
      switch (v.deltaMode) {
        case v.DOM_DELTA_PIXEL:
          v.wheelX = v.deltaX * $ || 0, v.wheelY = v.deltaY * $ || 0;
          break;
        case v.DOM_DELTA_LINE:
        case v.DOM_DELTA_PAGE:
          v.wheelX = (v.deltaX || 0) * 5, v.wheelY = (v.deltaY || 0) * 5;
          break;
      }
      S(v);
    }, m) : l(k, "DOMMouseScroll", function(v) {
      v.axis && v.axis == v.HORIZONTAL_AXIS ? (v.wheelX = (v.detail || 0) * 5, v.wheelY = 0) : (v.wheelX = 0, v.wheelY = (v.detail || 0) * 5), S(v);
    }, m);
  }, e.addMultiMouseDownListener = function(k, S, m, v, $) {
    var g = 0, w, p, C, A = {
      2: "dblclick",
      3: "tripleclick",
      4: "quadclick"
    };
    function _(E) {
      if (e.getButton(E) !== 0 ? g = 0 : E.detail > 1 ? (g++, g > 4 && (g = 1)) : g = 1, u.isIE) {
        var I = Math.abs(E.clientX - w) > 5 || Math.abs(E.clientY - p) > 5;
        (!C || I) && (g = 1), C && clearTimeout(C), C = setTimeout(function() {
          C = null;
        }, S[g - 1] || 600), g == 1 && (w = E.clientX, p = E.clientY);
      }
      if (E._clicks = g, m[v]("mousedown", E), g > 4)
        g = 0;
      else if (g > 1)
        return m[v](A[g], E);
    }
    Array.isArray(k) || (k = [k]), k.forEach(function(E) {
      l(E, "mousedown", _, $);
    });
  };
  var f = function(k) {
    return 0 | (k.ctrlKey ? 1 : 0) | (k.altKey ? 2 : 0) | (k.shiftKey ? 4 : 0) | (k.metaKey ? 8 : 0);
  };
  e.getModifierString = function(k) {
    return d.KEY_MODS[f(k)];
  };
  function b(k, S, m) {
    var v = f(S);
    if (!u.isMac && o) {
      if (S.getModifierState && (S.getModifierState("OS") || S.getModifierState("Win")) && (v |= 8), o.altGr)
        if ((3 & v) != 3)
          o.altGr = 0;
        else
          return;
      if (m === 18 || m === 17) {
        var $ = "location" in S ? S.location : S.keyLocation;
        if (m === 17 && $ === 1)
          o[m] == 1 && (s = S.timeStamp);
        else if (m === 18 && v === 3 && $ === 2) {
          var g = S.timeStamp - s;
          g < 50 && (o.altGr = !0);
        }
      }
    }
    if (m in d.MODIFIER_KEYS && (m = -1), !v && m === 13) {
      var $ = "location" in S ? S.location : S.keyLocation;
      if ($ === 3 && (k(S, v, -m), S.defaultPrevented))
        return;
    }
    if (u.isChromeOS && v & 8) {
      if (k(S, v, m), S.defaultPrevented)
        return;
      v &= -9;
    }
    return !v && !(m in d.FUNCTION_KEYS) && !(m in d.PRINTABLE_KEYS) ? !1 : k(S, v, m);
  }
  e.addCommandKeyListener = function(k, S, m) {
    if (u.isOldGecko || u.isOpera && !("KeyboardEvent" in window)) {
      var v = null;
      l(k, "keydown", function(g) {
        v = g.keyCode;
      }, m), l(k, "keypress", function(g) {
        return b(S, g, v);
      }, m);
    } else {
      var $ = null;
      l(k, "keydown", function(g) {
        o[g.keyCode] = (o[g.keyCode] || 0) + 1;
        var w = b(S, g, g.keyCode);
        return $ = g.defaultPrevented, w;
      }, m), l(k, "keypress", function(g) {
        $ && (g.ctrlKey || g.altKey || g.shiftKey || g.metaKey) && (e.stopEvent(g), $ = null);
      }, m), l(k, "keyup", function(g) {
        o[g.keyCode] = null;
      }, m), o || (y(), l(window, "focus", y));
    }
  };
  function y() {
    o = /* @__PURE__ */ Object.create(null);
  }
  if (typeof window == "object" && window.postMessage && !u.isOldIE) {
    var x = 1;
    e.nextTick = function(k, S) {
      S = S || window;
      var m = "zero-timeout-message-" + x++, v = function($) {
        $.data == m && (e.stopPropagation($), c(S, "message", v), k());
      };
      l(S, "message", v), S.postMessage(m, "*");
    };
  }
  e.$idleBlocked = !1, e.onIdle = function(k, S) {
    return setTimeout(function m() {
      e.$idleBlocked ? setTimeout(m, 100) : k();
    }, S);
  }, e.$idleBlockId = null, e.blockIdle = function(k) {
    e.$idleBlockId && clearTimeout(e.$idleBlockId), e.$idleBlocked = !0, e.$idleBlockId = setTimeout(function() {
      e.$idleBlocked = !1;
    }, k || 100);
  }, e.nextFrame = typeof window == "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), e.nextFrame ? e.nextFrame = e.nextFrame.bind(window) : e.nextFrame = function(k) {
    setTimeout(k, 17);
  };
});
ace.define("ace/range", ["require", "exports", "module"], function(t, e, a) {
  var d = function(o, s) {
    return o.row - s.row || o.column - s.column;
  }, u = function(o, s, h, n) {
    this.start = {
      row: o,
      column: s
    }, this.end = {
      row: h,
      column: n
    };
  };
  (function() {
    this.isEqual = function(o) {
      return this.start.row === o.start.row && this.end.row === o.end.row && this.start.column === o.start.column && this.end.column === o.end.column;
    }, this.toString = function() {
      return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]";
    }, this.contains = function(o, s) {
      return this.compare(o, s) == 0;
    }, this.compareRange = function(o) {
      var s, h = o.end, n = o.start;
      return s = this.compare(h.row, h.column), s == 1 ? (s = this.compare(n.row, n.column), s == 1 ? 2 : s == 0 ? 1 : 0) : s == -1 ? -2 : (s = this.compare(n.row, n.column), s == -1 ? -1 : s == 1 ? 42 : 0);
    }, this.comparePoint = function(o) {
      return this.compare(o.row, o.column);
    }, this.containsRange = function(o) {
      return this.comparePoint(o.start) == 0 && this.comparePoint(o.end) == 0;
    }, this.intersects = function(o) {
      var s = this.compareRange(o);
      return s == -1 || s == 0 || s == 1;
    }, this.isEnd = function(o, s) {
      return this.end.row == o && this.end.column == s;
    }, this.isStart = function(o, s) {
      return this.start.row == o && this.start.column == s;
    }, this.setStart = function(o, s) {
      typeof o == "object" ? (this.start.column = o.column, this.start.row = o.row) : (this.start.row = o, this.start.column = s);
    }, this.setEnd = function(o, s) {
      typeof o == "object" ? (this.end.column = o.column, this.end.row = o.row) : (this.end.row = o, this.end.column = s);
    }, this.inside = function(o, s) {
      return this.compare(o, s) == 0 ? !(this.isEnd(o, s) || this.isStart(o, s)) : !1;
    }, this.insideStart = function(o, s) {
      return this.compare(o, s) == 0 ? !this.isEnd(o, s) : !1;
    }, this.insideEnd = function(o, s) {
      return this.compare(o, s) == 0 ? !this.isStart(o, s) : !1;
    }, this.compare = function(o, s) {
      return !this.isMultiLine() && o === this.start.row ? s < this.start.column ? -1 : s > this.end.column ? 1 : 0 : o < this.start.row ? -1 : o > this.end.row ? 1 : this.start.row === o ? s >= this.start.column ? 0 : -1 : this.end.row === o ? s <= this.end.column ? 0 : 1 : 0;
    }, this.compareStart = function(o, s) {
      return this.start.row == o && this.start.column == s ? -1 : this.compare(o, s);
    }, this.compareEnd = function(o, s) {
      return this.end.row == o && this.end.column == s ? 1 : this.compare(o, s);
    }, this.compareInside = function(o, s) {
      return this.end.row == o && this.end.column == s ? 1 : this.start.row == o && this.start.column == s ? -1 : this.compare(o, s);
    }, this.clipRows = function(o, s) {
      if (this.end.row > s)
        var h = { row: s + 1, column: 0 };
      else if (this.end.row < o)
        var h = { row: o, column: 0 };
      if (this.start.row > s)
        var n = { row: s + 1, column: 0 };
      else if (this.start.row < o)
        var n = { row: o, column: 0 };
      return u.fromPoints(n || this.start, h || this.end);
    }, this.extend = function(o, s) {
      var h = this.compare(o, s);
      if (h == 0)
        return this;
      if (h == -1)
        var n = { row: o, column: s };
      else
        var i = { row: o, column: s };
      return u.fromPoints(n || this.start, i || this.end);
    }, this.isEmpty = function() {
      return this.start.row === this.end.row && this.start.column === this.end.column;
    }, this.isMultiLine = function() {
      return this.start.row !== this.end.row;
    }, this.clone = function() {
      return u.fromPoints(this.start, this.end);
    }, this.collapseRows = function() {
      return this.end.column == 0 ? new u(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0) : new u(this.start.row, 0, this.end.row, 0);
    }, this.toScreenRange = function(o) {
      var s = o.documentToScreenPosition(this.start), h = o.documentToScreenPosition(this.end);
      return new u(
        s.row,
        s.column,
        h.row,
        h.column
      );
    }, this.moveBy = function(o, s) {
      this.start.row += o, this.start.column += s, this.end.row += o, this.end.column += s;
    };
  }).call(u.prototype), u.fromPoints = function(o, s) {
    return new u(o.row, o.column, s.row, s.column);
  }, u.comparePoints = d, u.comparePoints = function(o, s) {
    return o.row - s.row || o.column - s.column;
  }, e.Range = u;
});
ace.define("ace/lib/lang", ["require", "exports", "module"], function(t, e, a) {
  e.last = function(o) {
    return o[o.length - 1];
  }, e.stringReverse = function(o) {
    return o.split("").reverse().join("");
  }, e.stringRepeat = function(o, s) {
    for (var h = ""; s > 0; )
      s & 1 && (h += o), (s >>= 1) && (o += o);
    return h;
  };
  var d = /^\s\s*/, u = /\s\s*$/;
  e.stringTrimLeft = function(o) {
    return o.replace(d, "");
  }, e.stringTrimRight = function(o) {
    return o.replace(u, "");
  }, e.copyObject = function(o) {
    var s = {};
    for (var h in o)
      s[h] = o[h];
    return s;
  }, e.copyArray = function(o) {
    for (var s = [], h = 0, n = o.length; h < n; h++)
      o[h] && typeof o[h] == "object" ? s[h] = this.copyObject(o[h]) : s[h] = o[h];
    return s;
  }, e.deepCopy = function o(s) {
    if (typeof s != "object" || !s)
      return s;
    var h;
    if (Array.isArray(s)) {
      h = [];
      for (var n = 0; n < s.length; n++)
        h[n] = o(s[n]);
      return h;
    }
    if (Object.prototype.toString.call(s) !== "[object Object]")
      return s;
    h = {};
    for (var n in s)
      h[n] = o(s[n]);
    return h;
  }, e.arrayToMap = function(o) {
    for (var s = {}, h = 0; h < o.length; h++)
      s[o[h]] = 1;
    return s;
  }, e.createMap = function(o) {
    var s = /* @__PURE__ */ Object.create(null);
    for (var h in o)
      s[h] = o[h];
    return s;
  }, e.arrayRemove = function(o, s) {
    for (var h = 0; h <= o.length; h++)
      s === o[h] && o.splice(h, 1);
  }, e.escapeRegExp = function(o) {
    return o.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
  }, e.escapeHTML = function(o) {
    return ("" + o).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
  }, e.getMatchOffsets = function(o, s) {
    var h = [];
    return o.replace(s, function(n) {
      h.push({
        offset: arguments[arguments.length - 2],
        length: n.length
      });
    }), h;
  }, e.deferredCall = function(o) {
    var s = null, h = function() {
      s = null, o();
    }, n = function(i) {
      return n.cancel(), s = setTimeout(h, i || 0), n;
    };
    return n.schedule = n, n.call = function() {
      return this.cancel(), o(), n;
    }, n.cancel = function() {
      return clearTimeout(s), s = null, n;
    }, n.isPending = function() {
      return s;
    }, n;
  }, e.delayedCall = function(o, s) {
    var h = null, n = function() {
      h = null, o();
    }, i = function(r) {
      h == null && (h = setTimeout(n, r || s));
    };
    return i.delay = function(r) {
      h && clearTimeout(h), h = setTimeout(n, r || s);
    }, i.schedule = i, i.call = function() {
      this.cancel(), o();
    }, i.cancel = function() {
      h && clearTimeout(h), h = null;
    }, i.isPending = function() {
      return h;
    }, i;
  };
});
ace.define("ace/clipboard", ["require", "exports", "module"], function(t, e, a) {
  var d;
  a.exports = {
    lineMode: !1,
    pasteCancelled: function() {
      return d && d > Date.now() - 50 ? !0 : d = !1;
    },
    cancel: function() {
      d = Date.now();
    }
  };
});
ace.define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/clipboard", "ace/lib/keys"], function(t, e, a) {
  var d = t("../lib/event"), u = t("../lib/useragent"), o = t("../lib/dom"), s = t("../lib/lang"), h = t("../clipboard"), n = u.isChrome < 18, i = u.isIE, r = u.isChrome > 63, l = 400, c = t("../lib/keys"), f = c.KEY_MODS, b = u.isIOS, y = b ? /\s/ : /\n/, x = u.isMobile, k = function(S, m) {
    var v = o.createElement("textarea");
    v.className = "ace_text-input", v.setAttribute("wrap", "off"), v.setAttribute("autocorrect", "off"), v.setAttribute("autocapitalize", "off"), v.setAttribute("spellcheck", !1), v.style.opacity = "0", S.insertBefore(v, S.firstChild);
    var $ = !1, g = !1, w = !1, p = !1, C = "";
    x || (v.style.fontSize = "1px");
    var A = !1, _ = !1, E = "", I = 0, L = 0, D = 0;
    try {
      var R = document.activeElement === v;
    } catch {
    }
    d.addListener(v, "blur", function(W) {
      _ || (m.onBlur(W), R = !1);
    }, m), d.addListener(v, "focus", function(W) {
      if (!_) {
        if (R = !0, u.isEdge)
          try {
            if (!document.hasFocus())
              return;
          } catch {
          }
        m.onFocus(W), u.isEdge ? setTimeout(N) : N();
      }
    }, m), this.$focusScroll = !1, this.focus = function() {
      if (C || r || this.$focusScroll == "browser")
        return v.focus({ preventScroll: !0 });
      var W = v.style.top;
      v.style.position = "fixed", v.style.top = "0px";
      try {
        var Z = v.getBoundingClientRect().top != 0;
      } catch {
        return;
      }
      var J = [];
      if (Z)
        for (var ae = v.parentElement; ae && ae.nodeType == 1; )
          J.push(ae), ae.setAttribute("ace_nocontext", !0), !ae.parentElement && ae.getRootNode ? ae = ae.getRootNode().host : ae = ae.parentElement;
      v.focus({ preventScroll: !0 }), Z && J.forEach(function(de) {
        de.removeAttribute("ace_nocontext");
      }), setTimeout(function() {
        v.style.position = "", v.style.top == "0px" && (v.style.top = W);
      }, 0);
    }, this.blur = function() {
      v.blur();
    }, this.isFocused = function() {
      return R;
    }, m.on("beforeEndOperation", function() {
      var W = m.curOp, Z = W && W.command && W.command.name;
      if (Z != "insertstring") {
        var J = Z && (W.docChanged || W.selectionChanged);
        w && J && (E = v.value = "", We()), N();
      }
    });
    var N = b ? function(W) {
      if (!(!R || $ && !W || p)) {
        W || (W = "");
        var Z = `
 ab` + W + `cde fg
`;
        Z != v.value && (v.value = E = Z);
        var J = 4, ae = 4 + (W.length || (m.selection.isEmpty() ? 0 : 1));
        (I != J || L != ae) && v.setSelectionRange(J, ae), I = J, L = ae;
      }
    } : function() {
      if (!(w || p) && !(!R && !M)) {
        w = !0;
        var W = 0, Z = 0, J = "";
        if (m.session) {
          var ae = m.selection, de = ae.getRange(), ve = ae.cursor.row;
          if (W = de.start.column, Z = de.end.column, J = m.session.getLine(ve), de.start.row != ve) {
            var Se = m.session.getLine(ve - 1);
            W = de.start.row < ve - 1 ? 0 : W, Z += Se.length + 1, J = Se + `
` + J;
          } else if (de.end.row != ve) {
            var be = m.session.getLine(ve + 1);
            Z = de.end.row > ve + 1 ? be.length : Z, Z += J.length + 1, J = J + `
` + be;
          } else x && ve > 0 && (J = `
` + J, Z += 1, W += 1);
          J.length > l && (W < l && Z < l ? J = J.slice(0, l) : (J = `
`, W == Z ? W = Z = 0 : (W = 0, Z = 1)));
        }
        var he = J + `

`;
        if (he != E && (v.value = E = he, I = L = he.length), M && (I = v.selectionStart, L = v.selectionEnd), L != Z || I != W || v.selectionEnd != L)
          try {
            v.setSelectionRange(W, Z), I = W, L = Z;
          } catch {
          }
        w = !1;
      }
    };
    this.resetSelection = N, R && m.onFocus();
    var O = function(W) {
      return W.selectionStart === 0 && W.selectionEnd >= E.length && W.value === E && E && W.selectionEnd !== L;
    }, P = function(W) {
      w || ($ ? $ = !1 : O(v) ? (m.selectAll(), N()) : x && v.selectionStart != I && N());
    }, z = null;
    this.setInputHandler = function(W) {
      z = W;
    }, this.getInputHandler = function() {
      return z;
    };
    var M = !1, B = function(W, Z) {
      if (M && (M = !1), g)
        return N(), W && m.onPaste(W), g = !1, "";
      for (var J = v.selectionStart, ae = v.selectionEnd, de = I, ve = E.length - L, Se = W, be = W.length - J, he = W.length - ae, ce = 0; de > 0 && E[ce] == W[ce]; )
        ce++, de--;
      for (Se = Se.slice(ce), ce = 1; ve > 0 && E.length - ce > I - 1 && E[E.length - ce] == W[W.length - ce]; )
        ce++, ve--;
      be -= ce - 1, he -= ce - 1;
      var ht = Se.length - ce + 1;
      if (ht < 0 && (de = -ht, ht = 0), Se = Se.slice(0, ht), !Z && !Se && !be && !de && !ve && !he)
        return "";
      p = !0;
      var wi = !1;
      return u.isAndroid && Se == ". " && (Se = "  ", wi = !0), Se && !de && !ve && !be && !he || A ? m.onTextInput(Se) : m.onTextInput(Se, {
        extendLeft: de,
        extendRight: ve,
        restoreStart: be,
        restoreEnd: he
      }), p = !1, E = W, I = J, L = ae, D = he, wi ? `
` : Se;
    }, V = function(W) {
      if (w)
        return ge();
      if (W && W.inputType) {
        if (W.inputType == "historyUndo") return m.execCommand("undo");
        if (W.inputType == "historyRedo") return m.execCommand("redo");
      }
      var Z = v.value, J = B(Z, !0);
      (Z.length > l + 100 || y.test(J) || x && I < 1 && I == L) && N();
    }, U = function(W, Z, J) {
      var ae = W.clipboardData || window.clipboardData;
      if (!(!ae || n)) {
        var de = i || J ? "Text" : "text/plain";
        try {
          return Z ? ae.setData(de, Z) !== !1 : ae.getData(de);
        } catch (ve) {
          if (!J)
            return U(ve, Z, !0);
        }
      }
    }, q = function(W, Z) {
      var J = m.getCopyText();
      if (!J)
        return d.preventDefault(W);
      U(W, J) ? (b && (N(J), $ = J, setTimeout(function() {
        $ = !1;
      }, 10)), Z ? m.onCut() : m.onCopy(), d.preventDefault(W)) : ($ = !0, v.value = J, v.select(), setTimeout(function() {
        $ = !1, N(), Z ? m.onCut() : m.onCopy();
      }));
    }, Y = function(W) {
      q(W, !0);
    }, te = function(W) {
      q(W, !1);
    }, Q = function(W) {
      var Z = U(W);
      h.pasteCancelled() || (typeof Z == "string" ? (Z && m.onPaste(Z, W), u.isIE && setTimeout(N), d.preventDefault(W)) : (v.value = "", g = !0));
    };
    d.addCommandKeyListener(v, m.onCommandKey.bind(m), m), d.addListener(v, "select", P, m), d.addListener(v, "input", V, m), d.addListener(v, "cut", Y, m), d.addListener(v, "copy", te, m), d.addListener(v, "paste", Q, m), (!("oncut" in v) || !("oncopy" in v) || !("onpaste" in v)) && d.addListener(S, "keydown", function(W) {
      if (!(u.isMac && !W.metaKey || !W.ctrlKey))
        switch (W.keyCode) {
          case 67:
            te(W);
            break;
          case 86:
            Q(W);
            break;
          case 88:
            Y(W);
            break;
        }
    }, m);
    var oe = function(W) {
      if (!(w || !m.onCompositionStart || m.$readOnly) && (w = {}, !A)) {
        W.data && (w.useTextareaForIME = !1), setTimeout(ge, 0), m._signal("compositionStart"), m.on("mousedown", ke);
        var Z = m.getSelectionRange();
        Z.end.row = Z.start.row, Z.end.column = Z.start.column, w.markerRange = Z, w.selectionStart = I, m.onCompositionStart(w), w.useTextareaForIME ? (E = v.value = "", I = 0, L = 0) : (v.msGetInputContext && (w.context = v.msGetInputContext()), v.getInputContext && (w.context = v.getInputContext()));
      }
    }, ge = function() {
      if (!(!w || !m.onCompositionUpdate || m.$readOnly)) {
        if (A)
          return ke();
        if (w.useTextareaForIME)
          m.onCompositionUpdate(v.value);
        else {
          var W = v.value;
          B(W), w.markerRange && (w.context && (w.markerRange.start.column = w.selectionStart = w.context.compositionStartOffset), w.markerRange.end.column = w.markerRange.start.column + L - w.selectionStart + D);
        }
      }
    }, We = function(W) {
      !m.onCompositionEnd || m.$readOnly || (w = !1, m.onCompositionEnd(), m.off("mousedown", ke), W && V());
    };
    function ke() {
      _ = !0, v.blur(), v.focus(), _ = !1;
    }
    var pe = s.delayedCall(ge, 50).schedule.bind(null, null);
    function Ye(W) {
      W.keyCode == 27 && v.value.length < v.selectionStart && (w || (E = v.value), I = L = -1, N()), pe();
    }
    d.addListener(v, "compositionstart", oe, m), d.addListener(v, "compositionupdate", ge, m), d.addListener(v, "keyup", Ye, m), d.addListener(v, "keydown", pe, m), d.addListener(v, "compositionend", We, m), this.getElement = function() {
      return v;
    }, this.setCommandMode = function(W) {
      A = W, v.readOnly = !1;
    }, this.setReadOnly = function(W) {
      A || (v.readOnly = W);
    }, this.setCopyWithEmptySelection = function(W) {
    }, this.onContextMenu = function(W) {
      M = !0, N(), m._emit("nativecontextmenu", { target: m, domEvent: W }), this.moveToMouse(W, !0);
    }, this.moveToMouse = function(W, Z) {
      C || (C = v.style.cssText), v.style.cssText = (Z ? "z-index:100000;" : "") + (u.isIE ? "opacity:0.1;" : "") + "text-indent: -" + (I + L) * m.renderer.characterWidth * 0.5 + "px;";
      var J = m.container.getBoundingClientRect(), ae = o.computedStyle(m.container), de = J.top + (parseInt(ae.borderTopWidth) || 0), ve = J.left + (parseInt(J.borderLeftWidth) || 0), Se = J.bottom - de - v.clientHeight - 2, be = function(he) {
        o.translate(v, he.clientX - ve - 2, Math.min(he.clientY - de - 2, Se));
      };
      be(W), W.type == "mousedown" && (m.renderer.$isMousePressed = !0, clearTimeout(Wt), u.isWin && d.capture(m.container, be, ft));
    }, this.onContextMenuClose = ft;
    var Wt;
    function ft() {
      clearTimeout(Wt), Wt = setTimeout(function() {
        C && (v.style.cssText = C, C = ""), m.renderer.$isMousePressed = !1, m.renderer.$keepTextAreaAtCursor && m.renderer.$moveTextAreaToCursor();
      }, 0);
    }
    var ji = function(W) {
      m.textInput.onContextMenu(W), ft();
    };
    d.addListener(v, "mouseup", ji, m), d.addListener(v, "mousedown", function(W) {
      W.preventDefault(), ft();
    }, m), d.addListener(m.renderer.scroller, "contextmenu", ji, m), d.addListener(v, "contextmenu", ji, m), b && Ns(S, m, v);
    function Ns(W, Z, J) {
      var ae = null, de = !1;
      J.addEventListener("keydown", function(Se) {
        ae && clearTimeout(ae), de = !0;
      }, !0), J.addEventListener("keyup", function(Se) {
        ae = setTimeout(function() {
          de = !1;
        }, 100);
      }, !0);
      var ve = function(Se) {
        if (document.activeElement === J && !(de || w || Z.$mouseHandler.isMousePressed) && !$) {
          var be = J.selectionStart, he = J.selectionEnd, ce = null, ht = 0;
          if (be == 0 ? ce = c.up : be == 1 ? ce = c.home : he > L && E[he] == `
` ? ce = c.end : be < I && E[be - 1] == " " ? (ce = c.left, ht = f.option) : be < I || be == I && L != I && be == he ? ce = c.left : he > L && E.slice(0, he).split(`
`).length > 2 ? ce = c.down : he > L && E[he - 1] == " " ? (ce = c.right, ht = f.option) : (he > L || he == L && L != I && be == he) && (ce = c.right), be !== he && (ht |= f.shift), ce) {
            var wi = Z.onCommandKey({}, ht, ce);
            if (!wi && Z.commands) {
              ce = c.keyCodeToString(ce);
              var Wn = Z.commands.findKeyCommand(ht, ce);
              Wn && Z.execCommand(Wn);
            }
            I = be, L = he, N("");
          }
        }
      };
      document.addEventListener("selectionchange", ve), Z.on("destroy", function() {
        document.removeEventListener("selectionchange", ve);
      });
    }
  };
  e.TextInput = k, e.$setUserAgentForTests = function(S, m) {
    x = S, b = m;
  };
});
ace.define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function(t, e, a) {
  var d = t("../lib/useragent"), u = 0, o = 550;
  function s(i) {
    i.$clickSelection = null;
    var r = i.editor;
    r.setDefaultHandler("mousedown", this.onMouseDown.bind(i)), r.setDefaultHandler("dblclick", this.onDoubleClick.bind(i)), r.setDefaultHandler("tripleclick", this.onTripleClick.bind(i)), r.setDefaultHandler("quadclick", this.onQuadClick.bind(i)), r.setDefaultHandler("mousewheel", this.onMouseWheel.bind(i));
    var l = [
      "select",
      "startSelect",
      "selectEnd",
      "selectAllEnd",
      "selectByWordsEnd",
      "selectByLinesEnd",
      "dragWait",
      "dragWaitEnd",
      "focusWait"
    ];
    l.forEach(function(c) {
      i[c] = this[c];
    }, this), i.selectByLines = this.extendSelectionBy.bind(i, "getLineRange"), i.selectByWords = this.extendSelectionBy.bind(i, "getWordRange");
  }
  (function() {
    this.onMouseDown = function(i) {
      var r = i.inSelection(), l = i.getDocumentPosition();
      this.mousedownEvent = i;
      var c = this.editor, f = i.getButton();
      if (f !== 0) {
        var b = c.getSelectionRange(), y = b.isEmpty();
        (y || f == 1) && c.selection.moveToPosition(l), f == 2 && (c.textInput.onContextMenu(i.domEvent), d.isMozilla || i.preventDefault());
        return;
      }
      if (this.mousedownEvent.time = Date.now(), r && !c.isFocused() && (c.focus(), this.$focusTimeout && !this.$clickSelection && !c.inMultiSelectMode)) {
        this.setState("focusWait"), this.captureMouse(i);
        return;
      }
      return this.captureMouse(i), this.startSelect(l, i.domEvent._clicks > 1), i.preventDefault();
    }, this.startSelect = function(i, r) {
      i = i || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
      var l = this.editor;
      this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? l.selection.selectToPosition(i) : r || l.selection.moveToPosition(i), r || this.select(), l.renderer.scroller.setCapture && l.renderer.scroller.setCapture(), l.setStyle("ace_selecting"), this.setState("select"));
    }, this.select = function() {
      var i, r = this.editor, l = r.renderer.screenToTextCoordinates(this.x, this.y);
      if (this.$clickSelection) {
        var c = this.$clickSelection.comparePoint(l);
        if (c == -1)
          i = this.$clickSelection.end;
        else if (c == 1)
          i = this.$clickSelection.start;
        else {
          var f = n(this.$clickSelection, l);
          l = f.cursor, i = f.anchor;
        }
        r.selection.setSelectionAnchor(i.row, i.column);
      }
      r.selection.selectToPosition(l), r.renderer.scrollCursorIntoView();
    }, this.extendSelectionBy = function(i) {
      var r, l = this.editor, c = l.renderer.screenToTextCoordinates(this.x, this.y), f = l.selection[i](c.row, c.column);
      if (this.$clickSelection) {
        var b = this.$clickSelection.comparePoint(f.start), y = this.$clickSelection.comparePoint(f.end);
        if (b == -1 && y <= 0)
          r = this.$clickSelection.end, (f.end.row != c.row || f.end.column != c.column) && (c = f.start);
        else if (y == 1 && b >= 0)
          r = this.$clickSelection.start, (f.start.row != c.row || f.start.column != c.column) && (c = f.end);
        else if (b == -1 && y == 1)
          c = f.end, r = f.start;
        else {
          var x = n(this.$clickSelection, c);
          c = x.cursor, r = x.anchor;
        }
        l.selection.setSelectionAnchor(r.row, r.column);
      }
      l.selection.selectToPosition(c), l.renderer.scrollCursorIntoView();
    }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
      this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture();
    }, this.focusWait = function() {
      var i = h(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y), r = Date.now();
      (i > u || r - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition());
    }, this.onDoubleClick = function(i) {
      var r = i.getDocumentPosition(), l = this.editor, c = l.session, f = c.getBracketRange(r);
      f ? (f.isEmpty() && (f.start.column--, f.end.column++), this.setState("select")) : (f = l.selection.getWordRange(r.row, r.column), this.setState("selectByWords")), this.$clickSelection = f, this.select();
    }, this.onTripleClick = function(i) {
      var r = i.getDocumentPosition(), l = this.editor;
      this.setState("selectByLines");
      var c = l.getSelectionRange();
      c.isMultiLine() && c.contains(r.row, r.column) ? (this.$clickSelection = l.selection.getLineRange(c.start.row), this.$clickSelection.end = l.selection.getLineRange(c.end.row).end) : this.$clickSelection = l.selection.getLineRange(r.row), this.select();
    }, this.onQuadClick = function(i) {
      var r = this.editor;
      r.selectAll(), this.$clickSelection = r.getSelectionRange(), this.setState("selectAll");
    }, this.onMouseWheel = function(i) {
      if (!i.getAccelKey()) {
        i.getShiftKey() && i.wheelY && !i.wheelX && (i.wheelX = i.wheelY, i.wheelY = 0);
        var r = this.editor;
        this.$lastScroll || (this.$lastScroll = { t: 0, vx: 0, vy: 0, allowed: 0 });
        var l = this.$lastScroll, c = i.domEvent.timeStamp, f = c - l.t, b = f ? i.wheelX / f : l.vx, y = f ? i.wheelY / f : l.vy;
        f < o && (b = (b + l.vx) / 2, y = (y + l.vy) / 2);
        var x = Math.abs(b / y), k = !1;
        if (x >= 1 && r.renderer.isScrollableBy(i.wheelX * i.speed, 0) && (k = !0), x <= 1 && r.renderer.isScrollableBy(0, i.wheelY * i.speed) && (k = !0), k)
          l.allowed = c;
        else if (c - l.allowed < o) {
          var S = Math.abs(b) <= 1.5 * Math.abs(l.vx) && Math.abs(y) <= 1.5 * Math.abs(l.vy);
          S ? (k = !0, l.allowed = c) : l.allowed = 0;
        }
        if (l.t = c, l.vx = b, l.vy = y, k)
          return r.renderer.scrollBy(i.wheelX * i.speed, i.wheelY * i.speed), i.stop();
      }
    };
  }).call(s.prototype), e.DefaultHandlers = s;
  function h(i, r, l, c) {
    return Math.sqrt(Math.pow(l - i, 2) + Math.pow(c - r, 2));
  }
  function n(i, r) {
    if (i.start.row == i.end.row)
      var l = 2 * r.column - i.start.column - i.end.column;
    else if (i.start.row == i.end.row - 1 && !i.start.column && !i.end.column)
      var l = r.column - 4;
    else
      var l = 2 * r.row - i.start.row - i.end.row;
    return l < 0 ? { cursor: i.start, anchor: i.end } : { cursor: i.end, anchor: i.start };
  }
});
ace.define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function(t, e, a) {
  t("./lib/oop");
  var d = t("./lib/dom");
  function u(o) {
    this.isOpen = !1, this.$element = null, this.$parentNode = o;
  }
  (function() {
    this.$init = function() {
      return this.$element = d.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element;
    }, this.getElement = function() {
      return this.$element || this.$init();
    }, this.setText = function(o) {
      this.getElement().textContent = o;
    }, this.setHtml = function(o) {
      this.getElement().innerHTML = o;
    }, this.setPosition = function(o, s) {
      this.getElement().style.left = o + "px", this.getElement().style.top = s + "px";
    }, this.setClassName = function(o) {
      d.addCssClass(this.getElement(), o);
    }, this.show = function(o, s, h) {
      o != null && this.setText(o), s != null && h != null && this.setPosition(s, h), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0);
    }, this.hide = function() {
      this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1);
    }, this.getHeight = function() {
      return this.getElement().offsetHeight;
    }, this.getWidth = function() {
      return this.getElement().offsetWidth;
    }, this.destroy = function() {
      this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element);
    };
  }).call(u.prototype), e.Tooltip = u;
});
ace.define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function(t, e, a) {
  var d = t("../lib/dom"), u = t("../lib/oop"), o = t("../lib/event"), s = t("../tooltip").Tooltip;
  function h(i) {
    var r = i.editor, l = r.renderer.$gutterLayer, c = new n(r.container);
    i.editor.setDefaultHandler("guttermousedown", function(m) {
      if (!(!r.isFocused() || m.getButton() != 0)) {
        var v = l.getRegion(m);
        if (v != "foldWidgets") {
          var $ = m.getDocumentPosition().row, g = r.session.selection;
          if (m.getShiftKey())
            g.selectTo($, 0);
          else {
            if (m.domEvent.detail == 2)
              return r.selectAll(), m.preventDefault();
            i.$clickSelection = r.selection.getLineRange($);
          }
          return i.setState("selectByLines"), i.captureMouse(m), m.preventDefault();
        }
      }
    });
    var f, b, y;
    function x() {
      var m = b.getDocumentPosition().row, v = l.$annotations[m];
      if (!v)
        return k();
      var $ = r.session.getLength();
      if (m == $) {
        var g = r.renderer.pixelToScreenCoordinates(0, b.y).row, w = b.$pos;
        if (g > r.session.documentToScreenRow(w.row, w.column))
          return k();
      }
      if (y != v)
        if (y = v.text.join("<br/>"), c.setHtml(y), c.show(), r._signal("showGutterTooltip", c), r.on("mousewheel", k), i.$tooltipFollowsMouse)
          S(b);
        else {
          var p = b.domEvent.target, C = p.getBoundingClientRect(), A = c.getElement().style;
          A.left = C.right + "px", A.top = C.bottom + "px";
        }
    }
    function k() {
      f && (f = clearTimeout(f)), y && (c.hide(), y = null, r._signal("hideGutterTooltip", c), r.off("mousewheel", k));
    }
    function S(m) {
      c.setPosition(m.x, m.y);
    }
    i.editor.setDefaultHandler("guttermousemove", function(m) {
      var v = m.domEvent.target || m.domEvent.srcElement;
      if (d.hasCssClass(v, "ace_fold-widget"))
        return k();
      y && i.$tooltipFollowsMouse && S(m), b = m, !f && (f = setTimeout(function() {
        f = null, b && !i.isMousePressed ? x() : k();
      }, 50));
    }), o.addListener(r.renderer.$gutter, "mouseout", function(m) {
      b = null, !(!y || f) && (f = setTimeout(function() {
        f = null, k();
      }, 50));
    }, r), r.on("changeSession", k);
  }
  function n(i) {
    s.call(this, i);
  }
  u.inherits(n, s), function() {
    this.setPosition = function(i, r) {
      var l = window.innerWidth || document.documentElement.clientWidth, c = window.innerHeight || document.documentElement.clientHeight, f = this.getWidth(), b = this.getHeight();
      i += 15, r += 15, i + f > l && (i -= i + f - l), r + b > c && (r -= 20 + b), s.prototype.setPosition.call(this, i, r);
    };
  }.call(n.prototype), e.GutterHandler = h;
});
ace.define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(t, e, a) {
  var d = t("../lib/event"), u = t("../lib/useragent"), o = e.MouseEvent = function(s, h) {
    this.domEvent = s, this.editor = h, this.x = this.clientX = s.clientX, this.y = this.clientY = s.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1;
  };
  (function() {
    this.stopPropagation = function() {
      d.stopPropagation(this.domEvent), this.propagationStopped = !0;
    }, this.preventDefault = function() {
      d.preventDefault(this.domEvent), this.defaultPrevented = !0;
    }, this.stop = function() {
      this.stopPropagation(), this.preventDefault();
    }, this.getDocumentPosition = function() {
      return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos);
    }, this.inSelection = function() {
      if (this.$inSelection !== null)
        return this.$inSelection;
      var s = this.editor, h = s.getSelectionRange();
      if (h.isEmpty())
        this.$inSelection = !1;
      else {
        var n = this.getDocumentPosition();
        this.$inSelection = h.contains(n.row, n.column);
      }
      return this.$inSelection;
    }, this.getButton = function() {
      return d.getButton(this.domEvent);
    }, this.getShiftKey = function() {
      return this.domEvent.shiftKey;
    }, this.getAccelKey = u.isMac ? function() {
      return this.domEvent.metaKey;
    } : function() {
      return this.domEvent.ctrlKey;
    };
  }).call(o.prototype);
});
ace.define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(t, e, a) {
  var d = t("../lib/dom"), u = t("../lib/event"), o = t("../lib/useragent"), s = 200, h = 200, n = 5;
  function i(l) {
    var c = l.editor, f = d.createElement("img");
    f.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", o.isOpera && (f.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
    var b = ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"];
    b.forEach(function(M) {
      l[M] = this[M];
    }, this), c.on("mousedown", this.onMouseDown.bind(l));
    var y = c.container, x, k, S, m, v, $, g = 0, w, p, C, A, _;
    this.onDragStart = function(M) {
      if (this.cancelDrag || !y.draggable) {
        var B = this;
        return setTimeout(function() {
          B.startSelect(), B.captureMouse(M);
        }, 0), M.preventDefault();
      }
      v = c.getSelectionRange();
      var V = M.dataTransfer;
      V.effectAllowed = c.getReadOnly() ? "copy" : "copyMove", o.isOpera && (c.container.appendChild(f), f.scrollTop = 0), V.setDragImage && V.setDragImage(f, 0, 0), o.isOpera && c.container.removeChild(f), V.clearData(), V.setData("Text", c.session.getTextRange()), p = !0, this.setState("drag");
    }, this.onDragEnd = function(M) {
      if (y.draggable = !1, p = !1, this.setState(null), !c.getReadOnly()) {
        var B = M.dataTransfer.dropEffect;
        !w && B == "move" && c.session.remove(c.getSelectionRange()), c.$resetCursorStyle();
      }
      this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("");
    }, this.onDragEnter = function(M) {
      if (!(c.getReadOnly() || !P(M.dataTransfer)))
        return k = M.clientX, S = M.clientY, x || D(), g++, M.dataTransfer.dropEffect = w = z(M), u.preventDefault(M);
    }, this.onDragOver = function(M) {
      if (!(c.getReadOnly() || !P(M.dataTransfer)))
        return k = M.clientX, S = M.clientY, x || (D(), g++), N !== null && (N = null), M.dataTransfer.dropEffect = w = z(M), u.preventDefault(M);
    }, this.onDragLeave = function(M) {
      if (g--, g <= 0 && x)
        return R(), w = null, u.preventDefault(M);
    }, this.onDrop = function(M) {
      if ($) {
        var B = M.dataTransfer;
        if (p)
          switch (w) {
            case "move":
              v.contains($.row, $.column) ? v = {
                start: $,
                end: $
              } : v = c.moveText(v, $);
              break;
            case "copy":
              v = c.moveText(v, $, !0);
              break;
          }
        else {
          var V = B.getData("Text");
          v = {
            start: $,
            end: c.session.insert($, V)
          }, c.focus(), w = null;
        }
        return R(), u.preventDefault(M);
      }
    }, u.addListener(y, "dragstart", this.onDragStart.bind(l), c), u.addListener(y, "dragend", this.onDragEnd.bind(l), c), u.addListener(y, "dragenter", this.onDragEnter.bind(l), c), u.addListener(y, "dragover", this.onDragOver.bind(l), c), u.addListener(y, "dragleave", this.onDragLeave.bind(l), c), u.addListener(y, "drop", this.onDrop.bind(l), c);
    function E(M, B) {
      var V = Date.now(), U = !B || M.row != B.row, q = !B || M.column != B.column;
      if (!A || U || q)
        c.moveCursorToPosition(M), A = V, _ = { x: k, y: S };
      else {
        var Y = r(_.x, _.y, k, S);
        Y > n ? A = null : V - A >= h && (c.renderer.scrollCursorIntoView(), A = null);
      }
    }
    function I(M, B) {
      var V = Date.now(), U = c.renderer.layerConfig.lineHeight, q = c.renderer.layerConfig.characterWidth, Y = c.renderer.scroller.getBoundingClientRect(), te = {
        x: {
          left: k - Y.left,
          right: Y.right - k
        },
        y: {
          top: S - Y.top,
          bottom: Y.bottom - S
        }
      }, Q = Math.min(te.x.left, te.x.right), oe = Math.min(te.y.top, te.y.bottom), ge = { row: M.row, column: M.column };
      Q / q <= 2 && (ge.column += te.x.left < te.x.right ? -3 : 2), oe / U <= 1 && (ge.row += te.y.top < te.y.bottom ? -1 : 1);
      var We = M.row != ge.row, ke = M.column != ge.column, pe = !B || M.row != B.row;
      We || ke && !pe ? C ? V - C >= s && c.renderer.scrollCursorIntoView(ge) : C = V : C = null;
    }
    function L() {
      var M = $;
      $ = c.renderer.screenToTextCoordinates(k, S), E($, M), I($, M);
    }
    function D() {
      v = c.selection.toOrientedRange(), x = c.session.addMarker(v, "ace_selection", c.getSelectionStyle()), c.clearSelection(), c.isFocused() && c.renderer.$cursorLayer.setBlinking(!1), clearInterval(m), L(), m = setInterval(L, 20), g = 0, u.addListener(document, "mousemove", O);
    }
    function R() {
      clearInterval(m), c.session.removeMarker(x), x = null, c.selection.fromOrientedRange(v), c.isFocused() && !p && c.$resetCursorStyle(), v = null, $ = null, g = 0, C = null, A = null, u.removeListener(document, "mousemove", O);
    }
    var N = null;
    function O() {
      N == null && (N = setTimeout(function() {
        N != null && x && R();
      }, 20));
    }
    function P(M) {
      var B = M.types;
      return !B || Array.prototype.some.call(B, function(V) {
        return V == "text/plain" || V == "Text";
      });
    }
    function z(M) {
      var B = ["copy", "copymove", "all", "uninitialized"], V = ["move", "copymove", "linkmove", "all", "uninitialized"], U = o.isMac ? M.altKey : M.ctrlKey, q = "uninitialized";
      try {
        q = M.dataTransfer.effectAllowed.toLowerCase();
      } catch {
      }
      var Y = "none";
      return U && B.indexOf(q) >= 0 ? Y = "copy" : V.indexOf(q) >= 0 ? Y = "move" : B.indexOf(q) >= 0 && (Y = "copy"), Y;
    }
  }
  (function() {
    this.dragWait = function() {
      var l = Date.now() - this.mousedownEvent.time;
      l > this.editor.getDragDelay() && this.startDrag();
    }, this.dragWaitEnd = function() {
      var l = this.editor.container;
      l.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd();
    }, this.dragReadyEnd = function(l) {
      this.editor.$resetCursorStyle(), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd();
    }, this.startDrag = function() {
      this.cancelDrag = !1;
      var l = this.editor, c = l.container;
      c.draggable = !0, l.renderer.$cursorLayer.setBlinking(!1), l.setStyle("ace_dragging");
      var f = o.isWin ? "default" : "move";
      l.renderer.setCursorStyle(f), this.setState("dragReady");
    }, this.onMouseDrag = function(l) {
      var c = this.editor.container;
      if (o.isIE && this.state == "dragReady") {
        var f = r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
        f > 3 && c.dragDrop();
      }
      if (this.state === "dragWait") {
        var f = r(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y);
        f > 0 && (c.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()));
      }
    }, this.onMouseDown = function(l) {
      if (this.$dragEnabled) {
        this.mousedownEvent = l;
        var c = this.editor, f = l.inSelection(), b = l.getButton(), y = l.domEvent.detail || 1;
        if (y === 1 && b === 0 && f) {
          if (l.editor.inMultiSelectMode && (l.getAccelKey() || l.getShiftKey()))
            return;
          this.mousedownEvent.time = Date.now();
          var x = l.domEvent.target || l.domEvent.srcElement;
          if ("unselectable" in x && (x.unselectable = "on"), c.getDragDelay()) {
            if (o.isWebKit) {
              this.cancelDrag = !0;
              var k = c.container;
              k.draggable = !0;
            }
            this.setState("dragWait");
          } else
            this.startDrag();
          this.captureMouse(l, this.onMouseDrag.bind(this)), l.defaultPrevented = !0;
        }
      }
    };
  }).call(i.prototype);
  function r(l, c, f, b) {
    return Math.sqrt(Math.pow(f - l, 2) + Math.pow(b - c, 2));
  }
  e.DragdropHandler = i;
});
ace.define("ace/mouse/touch_handler", ["require", "exports", "module", "ace/mouse/mouse_event", "ace/lib/event", "ace/lib/dom"], function(t, e, a) {
  var d = t("./mouse_event").MouseEvent, u = t("../lib/event"), o = t("../lib/dom");
  e.addTouchListeners = function(s, h) {
    var n = "scroll", i, r, l, c, f, b, y = 0, x, k = 0, S = 0, m = 0, v, $;
    function g() {
      var E = window.navigator && window.navigator.clipboard, I = !1, L = function() {
        var R = h.getCopyText(), N = h.session.getUndoManager().hasUndo();
        $.replaceChild(
          o.buildDom(I ? [
            "span",
            !R && ["span", { class: "ace_mobile-button", action: "selectall" }, "Select All"],
            R && ["span", { class: "ace_mobile-button", action: "copy" }, "Copy"],
            R && ["span", { class: "ace_mobile-button", action: "cut" }, "Cut"],
            E && ["span", { class: "ace_mobile-button", action: "paste" }, "Paste"],
            N && ["span", { class: "ace_mobile-button", action: "undo" }, "Undo"],
            ["span", { class: "ace_mobile-button", action: "find" }, "Find"],
            ["span", { class: "ace_mobile-button", action: "openCommandPallete" }, "Pallete"]
          ] : ["span"]),
          $.firstChild
        );
      }, D = function(R) {
        var N = R.target.getAttribute("action");
        if (N == "more" || !I)
          return I = !I, L();
        N == "paste" ? E.readText().then(function(O) {
          h.execCommand(N, O);
        }) : N && ((N == "cut" || N == "copy") && (E ? E.writeText(h.getCopyText()) : document.execCommand("copy")), h.execCommand(N)), $.firstChild.style.display = "none", I = !1, N != "openCommandPallete" && h.focus();
      };
      $ = o.buildDom([
        "div",
        {
          class: "ace_mobile-menu",
          ontouchstart: function(R) {
            n = "menu", R.stopPropagation(), R.preventDefault(), h.textInput.focus();
          },
          ontouchend: function(R) {
            R.stopPropagation(), R.preventDefault(), D(R);
          },
          onclick: D
        },
        ["span"],
        ["span", { class: "ace_mobile-button", action: "more" }, "..."]
      ], h.container);
    }
    function w() {
      $ || g();
      var E = h.selection.cursor, I = h.renderer.textToScreenCoordinates(E.row, E.column), L = h.renderer.textToScreenCoordinates(0, 0).pageX, D = h.renderer.scrollLeft, R = h.container.getBoundingClientRect();
      $.style.top = I.pageY - R.top - 3 + "px", I.pageX - R.left < R.width - 70 ? ($.style.left = "", $.style.right = "10px") : ($.style.right = "", $.style.left = L + D - R.left + "px"), $.style.display = "", $.firstChild.style.display = "none", h.on("input", p);
    }
    function p(E) {
      $ && ($.style.display = "none"), h.off("input", p);
    }
    function C() {
      f = null, clearTimeout(f);
      var E = h.selection.getRange(), I = E.contains(x.row, x.column);
      (E.isEmpty() || !I) && (h.selection.moveToPosition(x), h.selection.selectWord()), n = "wait", w();
    }
    function A() {
      f = null, clearTimeout(f), h.selection.moveToPosition(x);
      var E = k >= 2 ? h.selection.getLineRange(x.row) : h.session.getBracketRange(x);
      E && !E.isEmpty() ? h.selection.setRange(E) : h.selection.selectWord(), n = "wait";
    }
    u.addListener(s, "contextmenu", function(E) {
      if (v) {
        var I = h.textInput.getElement();
        I.focus();
      }
    }, h), u.addListener(s, "touchstart", function(E) {
      var I = E.touches;
      if (f || I.length > 1) {
        clearTimeout(f), f = null, l = -1, n = "zoom";
        return;
      }
      v = h.$mouseHandler.isMousePressed = !0;
      var L = h.renderer.layerConfig.lineHeight, D = h.renderer.layerConfig.lineHeight, R = E.timeStamp;
      c = R;
      var N = I[0], O = N.clientX, P = N.clientY;
      Math.abs(i - O) + Math.abs(r - P) > L && (l = -1), i = E.clientX = O, r = E.clientY = P, S = m = 0;
      var z = new d(E, h);
      if (x = z.getDocumentPosition(), R - l < 500 && I.length == 1 && !y)
        k++, E.preventDefault(), E.button = 0, A();
      else {
        k = 0;
        var M = h.selection.cursor, B = h.selection.isEmpty() ? M : h.selection.anchor, V = h.renderer.$cursorLayer.getPixelPosition(M, !0), U = h.renderer.$cursorLayer.getPixelPosition(B, !0), q = h.renderer.scroller.getBoundingClientRect(), Y = h.renderer.layerConfig.offset, te = h.renderer.scrollLeft, Q = function(We, ke) {
          return We = We / D, ke = ke / L - 0.75, We * We + ke * ke;
        };
        if (E.clientX < q.left) {
          n = "zoom";
          return;
        }
        var oe = Q(
          E.clientX - q.left - V.left + te,
          E.clientY - q.top - V.top + Y
        ), ge = Q(
          E.clientX - q.left - U.left + te,
          E.clientY - q.top - U.top + Y
        );
        oe < 3.5 && ge < 3.5 && (n = oe > ge ? "cursor" : "anchor"), ge < 3.5 ? n = "anchor" : oe < 3.5 ? n = "cursor" : n = "scroll", f = setTimeout(C, 450);
      }
      l = R;
    }, h), u.addListener(s, "touchend", function(E) {
      v = h.$mouseHandler.isMousePressed = !1, b && clearInterval(b), n == "zoom" ? (n = "", y = 0) : f ? (h.selection.moveToPosition(x), y = 0, w()) : n == "scroll" ? (_(), p()) : w(), clearTimeout(f), f = null;
    }, h), u.addListener(s, "touchmove", function(E) {
      f && (clearTimeout(f), f = null);
      var I = E.touches;
      if (!(I.length > 1 || n == "zoom")) {
        var L = I[0], D = i - L.clientX, R = r - L.clientY;
        if (n == "wait")
          if (D * D + R * R > 4)
            n = "cursor";
          else
            return E.preventDefault();
        i = L.clientX, r = L.clientY, E.clientX = L.clientX, E.clientY = L.clientY;
        var N = E.timeStamp, O = N - c;
        if (c = N, n == "scroll") {
          var P = new d(E, h);
          P.speed = 1, P.wheelX = D, P.wheelY = R, 10 * Math.abs(D) < Math.abs(R) && (D = 0), 10 * Math.abs(R) < Math.abs(D) && (R = 0), O != 0 && (S = D / O, m = R / O), h._emit("mousewheel", P), P.propagationStopped || (S = m = 0);
        } else {
          var z = new d(E, h), M = z.getDocumentPosition();
          n == "cursor" ? h.selection.moveCursorToPosition(M) : n == "anchor" && h.selection.setSelectionAnchor(M.row, M.column), h.renderer.scrollCursorIntoView(M), E.preventDefault();
        }
      }
    }, h);
    function _() {
      y += 60, b = setInterval(function() {
        y-- <= 0 && (clearInterval(b), b = null), Math.abs(S) < 0.01 && (S = 0), Math.abs(m) < 0.01 && (m = 0), y < 20 && (S = 0.9 * S), y < 20 && (m = 0.9 * m);
        var E = h.session.getScrollTop();
        h.renderer.scrollBy(10 * S, 10 * m), E == h.session.getScrollTop() && (y = 0);
      }, 10);
    }
  };
});
ace.define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(t, e, a) {
  var d = t("./dom");
  e.get = function(u, o) {
    var s = new XMLHttpRequest();
    s.open("GET", u, !0), s.onreadystatechange = function() {
      s.readyState === 4 && o(s.responseText);
    }, s.send(null);
  }, e.loadScript = function(u, o) {
    var s = d.getDocumentHead(), h = document.createElement("script");
    h.src = u, s.appendChild(h), h.onload = h.onreadystatechange = function(n, i) {
      (i || !h.readyState || h.readyState == "loaded" || h.readyState == "complete") && (h = h.onload = h.onreadystatechange = null, i || o());
    };
  }, e.qualifyURL = function(u) {
    var o = document.createElement("a");
    return o.href = u, o.href;
  };
});
ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function(t, e, a) {
  var d = {}, u = function() {
    this.propagationStopped = !0;
  }, o = function() {
    this.defaultPrevented = !0;
  };
  d._emit = d._dispatchEvent = function(s, h) {
    this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
    var n = this._eventRegistry[s] || [], i = this._defaultHandlers[s];
    if (!(!n.length && !i)) {
      (typeof h != "object" || !h) && (h = {}), h.type || (h.type = s), h.stopPropagation || (h.stopPropagation = u), h.preventDefault || (h.preventDefault = o), n = n.slice();
      for (var r = 0; r < n.length && (n[r](h, this), !h.propagationStopped); r++)
        ;
      if (i && !h.defaultPrevented)
        return i(h, this);
    }
  }, d._signal = function(s, h) {
    var n = (this._eventRegistry || {})[s];
    if (n) {
      n = n.slice();
      for (var i = 0; i < n.length; i++)
        n[i](h, this);
    }
  }, d.once = function(s, h) {
    var n = this;
    if (this.on(s, function i() {
      n.off(s, i), h.apply(null, arguments);
    }), !h)
      return new Promise(function(i) {
        h = i;
      });
  }, d.setDefaultHandler = function(s, h) {
    var n = this._defaultHandlers;
    if (n || (n = this._defaultHandlers = { _disabled_: {} }), n[s]) {
      var i = n[s], r = n._disabled_[s];
      r || (n._disabled_[s] = r = []), r.push(i);
      var l = r.indexOf(h);
      l != -1 && r.splice(l, 1);
    }
    n[s] = h;
  }, d.removeDefaultHandler = function(s, h) {
    var n = this._defaultHandlers;
    if (n) {
      var i = n._disabled_[s];
      if (n[s] == h)
        i && this.setDefaultHandler(s, i.pop());
      else if (i) {
        var r = i.indexOf(h);
        r != -1 && i.splice(r, 1);
      }
    }
  }, d.on = d.addEventListener = function(s, h, n) {
    this._eventRegistry = this._eventRegistry || {};
    var i = this._eventRegistry[s];
    return i || (i = this._eventRegistry[s] = []), i.indexOf(h) == -1 && i[n ? "unshift" : "push"](h), h;
  }, d.off = d.removeListener = d.removeEventListener = function(s, h) {
    this._eventRegistry = this._eventRegistry || {};
    var n = this._eventRegistry[s];
    if (n) {
      var i = n.indexOf(h);
      i !== -1 && n.splice(i, 1);
    }
  }, d.removeAllListeners = function(s) {
    s || (this._eventRegistry = this._defaultHandlers = void 0), this._eventRegistry && (this._eventRegistry[s] = void 0), this._defaultHandlers && (this._defaultHandlers[s] = void 0);
  }, e.EventEmitter = d;
});
ace.define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(t, e, a) {
  "no use strict";
  var d = t("./oop"), u = t("./event_emitter").EventEmitter, o = {
    setOptions: function(i) {
      Object.keys(i).forEach(function(r) {
        this.setOption(r, i[r]);
      }, this);
    },
    getOptions: function(i) {
      var r = {};
      if (i)
        Array.isArray(i) || (r = i, i = Object.keys(r));
      else {
        var l = this.$options;
        i = Object.keys(l).filter(function(c) {
          return !l[c].hidden;
        });
      }
      return i.forEach(function(c) {
        r[c] = this.getOption(c);
      }, this), r;
    },
    setOption: function(i, r) {
      if (this["$" + i] !== r) {
        var l = this.$options[i];
        if (!l)
          return s('misspelled option "' + i + '"');
        if (l.forwardTo)
          return this[l.forwardTo] && this[l.forwardTo].setOption(i, r);
        l.handlesSet || (this["$" + i] = r), l && l.set && l.set.call(this, r);
      }
    },
    getOption: function(i) {
      var r = this.$options[i];
      return r ? r.forwardTo ? this[r.forwardTo] && this[r.forwardTo].getOption(i) : r && r.get ? r.get.call(this) : this["$" + i] : s('misspelled option "' + i + '"');
    }
  };
  function s(i) {
    typeof console < "u" && console.warn && console.warn.apply(console, arguments);
  }
  function h(i, r) {
    var l = new Error(i);
    l.data = r, typeof console == "object" && console.error && console.error(l), setTimeout(function() {
      throw l;
    });
  }
  var n = function() {
    this.$defaultOptions = {};
  };
  (function() {
    d.implement(this, u), this.defineOptions = function(i, r, l) {
      return i.$options || (this.$defaultOptions[r] = i.$options = {}), Object.keys(l).forEach(function(c) {
        var f = l[c];
        typeof f == "string" && (f = { forwardTo: f }), f.name || (f.name = c), i.$options[f.name] = f, "initialValue" in f && (i["$" + f.name] = f.initialValue);
      }), d.implement(i, o), this;
    }, this.resetOptions = function(i) {
      Object.keys(i.$options).forEach(function(r) {
        var l = i.$options[r];
        "value" in l && i.setOption(r, l.value);
      });
    }, this.setDefaultValue = function(i, r, l) {
      if (!i) {
        for (i in this.$defaultOptions)
          if (this.$defaultOptions[i][r])
            break;
        if (!this.$defaultOptions[i][r])
          return !1;
      }
      var c = this.$defaultOptions[i] || (this.$defaultOptions[i] = {});
      c[r] && (c.forwardTo ? this.setDefaultValue(c.forwardTo, r, l) : c[r].value = l);
    }, this.setDefaultValues = function(i, r) {
      Object.keys(r).forEach(function(l) {
        this.setDefaultValue(i, l, r[l]);
      }, this);
    }, this.warn = s, this.reportError = h;
  }).call(n.prototype), e.AppConfig = n;
});
ace.define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function(t, e, a) {
  "no use strict";
  var d = t("./lib/lang");
  t("./lib/oop");
  var u = t("./lib/net"), o = t("./lib/app_config").AppConfig;
  a.exports = e = new o();
  var s = /* @__PURE__ */ function() {
    return this || typeof window < "u" && window;
  }(), h = {
    packaged: !1,
    workerPath: null,
    modePath: null,
    themePath: null,
    basePath: "",
    suffix: ".js",
    $moduleUrls: {},
    loadWorkerFromBlob: !0,
    sharedPopups: !1
  };
  e.get = function(l) {
    if (!h.hasOwnProperty(l))
      throw new Error("Unknown config key: " + l);
    return h[l];
  }, e.set = function(l, c) {
    if (h.hasOwnProperty(l))
      h[l] = c;
    else if (this.setDefaultValue("", l, c) == !1)
      throw new Error("Unknown config key: " + l);
  }, e.all = function() {
    return d.copyObject(h);
  }, e.$modes = {}, e.moduleUrl = function(l, c) {
    if (h.$moduleUrls[l])
      return h.$moduleUrls[l];
    var f = l.split("/");
    c = c || f[f.length - 2] || "";
    var b = c == "snippets" ? "/" : "-", y = f[f.length - 1];
    if (c == "worker" && b == "-") {
      var x = new RegExp("^" + c + "[\\-_]|[\\-_]" + c + "$", "g");
      y = y.replace(x, "");
    }
    (!y || y == c) && f.length > 1 && (y = f[f.length - 2]);
    var k = h[c + "Path"];
    return k == null ? k = h.basePath : b == "/" && (c = b = ""), k && k.slice(-1) != "/" && (k += "/"), k + c + b + y + this.get("suffix");
  }, e.setModuleUrl = function(l, c) {
    return h.$moduleUrls[l] = c;
  }, e.$loading = {}, e.loadModule = function(l, c) {
    var f, b;
    Array.isArray(l) && (b = l[0], l = l[1]);
    try {
      f = t(l);
    } catch {
    }
    if (f && !e.$loading[l])
      return c && c(f);
    if (e.$loading[l] || (e.$loading[l] = []), e.$loading[l].push(c), !(e.$loading[l].length > 1)) {
      var y = function() {
        t([l], function(x) {
          e._emit("load.module", { name: l, module: x });
          var k = e.$loading[l];
          e.$loading[l] = null, k.forEach(function(S) {
            S && S(x);
          });
        });
      };
      if (!e.get("packaged"))
        return y();
      u.loadScript(e.moduleUrl(l, b), y), n();
    }
  };
  var n = function() {
    !h.basePath && !h.workerPath && !h.modePath && !h.themePath && !Object.keys(h.$moduleUrls).length && (console.error(
      "Unable to infer path to ace from script src,",
      "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes",
      "or with webpack use ace/webpack-resolver"
    ), n = function() {
    });
  };
  i(!0);
  function i(l) {
    if (!(!s || !s.document)) {
      h.packaged = l || t.packaged || a.packaged || s.define && define.packaged;
      for (var c = {}, f = "", b = document.currentScript || document._currentScript, y = b && b.ownerDocument || document, x = y.getElementsByTagName("script"), k = 0; k < x.length; k++) {
        var S = x[k], m = S.src || S.getAttribute("src");
        if (m) {
          for (var v = S.attributes, $ = 0, g = v.length; $ < g; $++) {
            var w = v[$];
            w.name.indexOf("data-ace-") === 0 && (c[r(w.name.replace(/^data-ace-/, ""))] = w.value);
          }
          var p = m.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
          p && (f = p[1]);
        }
      }
      f && (c.base = c.base || f, c.packaged = !0), c.basePath = c.base, c.workerPath = c.workerPath || c.base, c.modePath = c.modePath || c.base, c.themePath = c.themePath || c.base, delete c.base;
      for (var C in c)
        typeof c[C] < "u" && e.set(C, c[C]);
    }
  }
  e.init = i;
  function r(l) {
    return l.replace(/-(.)/g, function(c, f) {
      return f.toUpperCase();
    });
  }
  e.version = "1.4.12";
});
ace.define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/mouse/touch_handler", "ace/config"], function(t, e, a) {
  var d = t("../lib/event"), u = t("../lib/useragent"), o = t("./default_handlers").DefaultHandlers, s = t("./default_gutter_handler").GutterHandler, h = t("./mouse_event").MouseEvent, n = t("./dragdrop_handler").DragdropHandler, i = t("./touch_handler").addTouchListeners, r = t("../config"), l = function(c) {
    var f = this;
    this.editor = c, new o(this), new s(this), new n(this);
    var b = function(k) {
      var S = !document.hasFocus || !document.hasFocus() || !c.isFocused() && document.activeElement == (c.textInput && c.textInput.getElement());
      S && window.focus(), c.focus();
    }, y = c.renderer.getMouseEventTarget();
    d.addListener(y, "click", this.onMouseEvent.bind(this, "click"), c), d.addListener(y, "mousemove", this.onMouseMove.bind(this, "mousemove"), c), d.addMultiMouseDownListener([
      y,
      c.renderer.scrollBarV && c.renderer.scrollBarV.inner,
      c.renderer.scrollBarH && c.renderer.scrollBarH.inner,
      c.textInput && c.textInput.getElement()
    ].filter(Boolean), [400, 300, 250], this, "onMouseEvent", c), d.addMouseWheelListener(c.container, this.onMouseWheel.bind(this, "mousewheel"), c), i(c.container, c);
    var x = c.renderer.$gutter;
    d.addListener(x, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), c), d.addListener(x, "click", this.onMouseEvent.bind(this, "gutterclick"), c), d.addListener(x, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), c), d.addListener(x, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), c), d.addListener(y, "mousedown", b, c), d.addListener(x, "mousedown", b, c), u.isIE && c.renderer.scrollBarV && (d.addListener(c.renderer.scrollBarV.element, "mousedown", b, c), d.addListener(c.renderer.scrollBarH.element, "mousedown", b, c)), c.on("mousemove", function(k) {
      if (!(f.state || f.$dragDelay || !f.$dragEnabled)) {
        var S = c.renderer.screenToTextCoordinates(k.x, k.y), m = c.session.selection.getRange(), v = c.renderer;
        !m.isEmpty() && m.insideStart(S.row, S.column) ? v.setCursorStyle("default") : v.setCursorStyle("");
      }
    }, c);
  };
  (function() {
    this.onMouseEvent = function(c, f) {
      this.editor._emit(c, new h(f, this.editor));
    }, this.onMouseMove = function(c, f) {
      var b = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
      !b || !b.length || this.editor._emit(c, new h(f, this.editor));
    }, this.onMouseWheel = function(c, f) {
      var b = new h(f, this.editor);
      b.speed = this.$scrollSpeed * 2, b.wheelX = f.wheelX, b.wheelY = f.wheelY, this.editor._emit(c, b);
    }, this.setState = function(c) {
      this.state = c;
    }, this.captureMouse = function(c, f) {
      this.x = c.x, this.y = c.y, this.isMousePressed = !0;
      var b = this.editor, y = this.editor.renderer;
      y.$isMousePressed = !0;
      var x = this, k = function(g) {
        if (g) {
          if (u.isWebKit && !g.which && x.releaseMouse)
            return x.releaseMouse();
          x.x = g.clientX, x.y = g.clientY, f && f(g), x.mouseEvent = new h(g, x.editor), x.$mouseMoved = !0;
        }
      }, S = function(g) {
        b.off("beforeEndOperation", v), clearInterval($), m(), x[x.state + "End"] && x[x.state + "End"](g), x.state = "", x.isMousePressed = y.$isMousePressed = !1, y.$keepTextAreaAtCursor && y.$moveTextAreaToCursor(), x.$onCaptureMouseMove = x.releaseMouse = null, g && x.onMouseEvent("mouseup", g), b.endOperation();
      }, m = function() {
        x[x.state] && x[x.state](), x.$mouseMoved = !1;
      };
      if (u.isOldIE && c.domEvent.type == "dblclick")
        return setTimeout(function() {
          S(c);
        });
      var v = function(g) {
        x.releaseMouse && b.curOp.command.name && b.curOp.selectionChanged && (x[x.state + "End"] && x[x.state + "End"](), x.state = "", x.releaseMouse());
      };
      b.on("beforeEndOperation", v), b.startOperation({ command: { name: "mouse" } }), x.$onCaptureMouseMove = k, x.releaseMouse = d.capture(this.editor.container, k, S);
      var $ = setInterval(m, 20);
    }, this.releaseMouse = null, this.cancelContextMenu = function() {
      var c = function(f) {
        f && f.domEvent && f.domEvent.type != "contextmenu" || (this.editor.off("nativecontextmenu", c), f && f.domEvent && d.stopEvent(f.domEvent));
      }.bind(this);
      setTimeout(c, 10), this.editor.on("nativecontextmenu", c);
    }, this.destroy = function() {
      this.releaseMouse && this.releaseMouse();
    };
  }).call(l.prototype), r.defineOptions(l.prototype, "mouseHandler", {
    scrollSpeed: { initialValue: 2 },
    dragDelay: { initialValue: u.isMac ? 150 : 0 },
    dragEnabled: { initialValue: !0 },
    focusTimeout: { initialValue: 0 },
    tooltipFollowsMouse: { initialValue: !0 }
  }), e.MouseHandler = l;
});
ace.define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function(t, e, a) {
  var d = t("../lib/dom");
  function u(o) {
    o.on("click", function(s) {
      var h = s.getDocumentPosition(), n = o.session, i = n.getFoldAt(h.row, h.column, 1);
      i && (s.getAccelKey() ? n.removeFold(i) : n.expandFold(i), s.stop());
      var r = s.domEvent && s.domEvent.target;
      r && d.hasCssClass(r, "ace_inline_button") && d.hasCssClass(r, "ace_toggle_wrap") && (n.setOption("wrap", !n.getUseWrapMode()), o.renderer.scrollCursorIntoView());
    }), o.on("gutterclick", function(s) {
      var h = o.renderer.$gutterLayer.getRegion(s);
      if (h == "foldWidgets") {
        var n = s.getDocumentPosition().row, i = o.session;
        i.foldWidgets && i.foldWidgets[n] && o.session.onFoldWidgetClick(n, s), o.isFocused() || o.focus(), s.stop();
      }
    }), o.on("gutterdblclick", function(s) {
      var h = o.renderer.$gutterLayer.getRegion(s);
      if (h == "foldWidgets") {
        var n = s.getDocumentPosition().row, i = o.session, r = i.getParentFoldRangeData(n, !0), l = r.range || r.firstRange;
        if (l) {
          n = l.start.row;
          var c = i.getFoldAt(n, i.getLine(n).length, 1);
          c ? i.removeFold(c) : (i.addFold("...", l), o.renderer.scrollCursorIntoView({ row: l.start.row, column: 0 }));
        }
        s.stop();
      }
    });
  }
  e.FoldHandler = u;
});
ace.define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(t, e, a) {
  var d = t("../lib/keys"), u = t("../lib/event"), o = function(s) {
    this.$editor = s, this.$data = { editor: s }, this.$handlers = [], this.setDefaultHandler(s.commands);
  };
  (function() {
    this.setDefaultHandler = function(s) {
      this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = s, this.addKeyboardHandler(s, 0);
    }, this.setKeyboardHandler = function(s) {
      var h = this.$handlers;
      if (h[h.length - 1] != s) {
        for (; h[h.length - 1] && h[h.length - 1] != this.$defaultHandler; )
          this.removeKeyboardHandler(h[h.length - 1]);
        this.addKeyboardHandler(s, 1);
      }
    }, this.addKeyboardHandler = function(s, h) {
      if (s) {
        typeof s == "function" && !s.handleKeyboard && (s.handleKeyboard = s);
        var n = this.$handlers.indexOf(s);
        n != -1 && this.$handlers.splice(n, 1), h == null ? this.$handlers.push(s) : this.$handlers.splice(h, 0, s), n == -1 && s.attach && s.attach(this.$editor);
      }
    }, this.removeKeyboardHandler = function(s) {
      var h = this.$handlers.indexOf(s);
      return h == -1 ? !1 : (this.$handlers.splice(h, 1), s.detach && s.detach(this.$editor), !0);
    }, this.getKeyboardHandler = function() {
      return this.$handlers[this.$handlers.length - 1];
    }, this.getStatusText = function() {
      var s = this.$data, h = s.editor;
      return this.$handlers.map(function(n) {
        return n.getStatusText && n.getStatusText(h, s) || "";
      }).filter(Boolean).join(" ");
    }, this.$callKeyboardHandlers = function(s, h, n, i) {
      for (var r, l = !1, c = this.$editor.commands, f = this.$handlers.length; f-- && (r = this.$handlers[f].handleKeyboard(
        this.$data,
        s,
        h,
        n,
        i
      ), !(!(!r || !r.command) && (r.command == "null" ? l = !0 : l = c.exec(r.command, this.$editor, r.args, i), l && i && s != -1 && r.passEvent != !0 && r.command.passEvent != !0 && u.stopEvent(i), l))); )
        ;
      return !l && s == -1 && (r = { command: "insertstring" }, l = c.exec("insertstring", this.$editor, h)), l && this.$editor._signal && this.$editor._signal("keyboardActivity", r), l;
    }, this.onCommandKey = function(s, h, n) {
      var i = d.keyCodeToString(n);
      return this.$callKeyboardHandlers(h, i, n, s);
    }, this.onTextInput = function(s) {
      return this.$callKeyboardHandlers(-1, s);
    };
  }).call(o.prototype), e.KeyBinding = o;
});
ace.define("ace/lib/bidiutil", ["require", "exports", "module"], function(t, e, a) {
  var d = 0, u = 0, o = !1, s = !1, h = !1, n = [
    [0, 3, 0, 1, 0, 0, 0],
    [0, 3, 0, 1, 2, 2, 0],
    [0, 3, 0, 17, 2, 0, 1],
    [0, 3, 5, 5, 4, 1, 0],
    [0, 3, 21, 21, 4, 0, 1],
    [0, 3, 5, 5, 4, 2, 0]
  ], i = [
    [2, 0, 1, 1, 0, 1, 0],
    [2, 0, 1, 1, 0, 2, 0],
    [2, 0, 2, 1, 3, 2, 0],
    [2, 0, 2, 33, 3, 1, 1]
  ], r = 0, l = 1, c = 0, f = 1, b = 2, y = 3, x = 4, k = 5, S = 6, m = 7, v = 8, $ = 9, g = 10, w = 11, p = 12, C = 13, A = 14, _ = 15, E = 16, I = 17, L = 18, D = [
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    S,
    k,
    S,
    v,
    k,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    k,
    k,
    k,
    S,
    v,
    x,
    x,
    w,
    w,
    w,
    x,
    x,
    x,
    x,
    x,
    g,
    $,
    g,
    $,
    $,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    b,
    $,
    x,
    x,
    x,
    x,
    x,
    x,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    x,
    x,
    x,
    x,
    x,
    x,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    c,
    x,
    x,
    x,
    x,
    L,
    L,
    L,
    L,
    L,
    L,
    k,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    L,
    $,
    x,
    w,
    w,
    w,
    w,
    x,
    x,
    x,
    x,
    c,
    x,
    x,
    L,
    x,
    x,
    w,
    w,
    b,
    b,
    x,
    c,
    x,
    x,
    x,
    b,
    c,
    x,
    x,
    x,
    x,
    x
  ], R = [
    v,
    v,
    v,
    v,
    v,
    v,
    v,
    v,
    v,
    v,
    v,
    L,
    L,
    L,
    c,
    f,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    v,
    k,
    C,
    A,
    _,
    E,
    I,
    $,
    w,
    w,
    w,
    w,
    w,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    $,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    x,
    v
  ];
  function N(M, B, V, U) {
    var q = d ? i : n, Y = null, te = null, Q = null, oe = 0, ge = null, We = null, ke = -1, pe = null, Ye = null, Wt = [];
    if (!U)
      for (pe = 0, U = []; pe < V; pe++)
        U[pe] = z(M[pe]);
    for (u = d, o = !1, s = !1, h = !1, Ye = 0; Ye < V; Ye++) {
      if (Y = oe, Wt[Ye] = te = P(M, U, Wt, Ye), oe = q[Y][te], ge = oe & 240, oe &= 15, B[Ye] = Q = q[oe][5], ge > 0)
        if (ge == 16) {
          for (pe = ke; pe < Ye; pe++)
            B[pe] = 1;
          ke = -1;
        } else
          ke = -1;
      if (We = q[oe][6], We)
        ke == -1 && (ke = Ye);
      else if (ke > -1) {
        for (pe = ke; pe < Ye; pe++)
          B[pe] = Q;
        ke = -1;
      }
      U[Ye] == k && (B[Ye] = 0), u |= Q;
    }
    if (h) {
      for (pe = 0; pe < V; pe++)
        if (U[pe] == S) {
          B[pe] = d;
          for (var ft = pe - 1; ft >= 0 && U[ft] == v; ft--)
            B[ft] = d;
        }
    }
  }
  function O(M, B, V) {
    if (!(u < M)) {
      if (M == 1 && d == l && !s) {
        V.reverse();
        return;
      }
      for (var U = V.length, q = 0, Y, te, Q, oe; q < U; ) {
        if (B[q] >= M) {
          for (Y = q + 1; Y < U && B[Y] >= M; )
            Y++;
          for (te = q, Q = Y - 1; te < Q; te++, Q--)
            oe = V[te], V[te] = V[Q], V[Q] = oe;
          q = Y;
        }
        q++;
      }
    }
  }
  function P(M, B, V, U) {
    var q = B[U], Y, te, Q, oe;
    switch (q) {
      case c:
      case f:
        o = !1;
      case x:
      case y:
        return q;
      case b:
        return o ? y : b;
      case m:
        return o = !0, f;
      case v:
        return x;
      case $:
        return U < 1 || U + 1 >= B.length || (Y = V[U - 1]) != b && Y != y || (te = B[U + 1]) != b && te != y ? x : (o && (te = y), te == Y ? te : x);
      case g:
        return Y = U > 0 ? V[U - 1] : k, Y == b && U + 1 < B.length && B[U + 1] == b ? b : x;
      case w:
        if (U > 0 && V[U - 1] == b)
          return b;
        if (o)
          return x;
        for (oe = U + 1, Q = B.length; oe < Q && B[oe] == w; )
          oe++;
        return oe < Q && B[oe] == b ? b : x;
      case p:
        for (Q = B.length, oe = U + 1; oe < Q && B[oe] == p; )
          oe++;
        if (oe < Q) {
          var ge = M[U], We = ge >= 1425 && ge <= 2303 || ge == 64286;
          if (Y = B[oe], We && (Y == f || Y == m))
            return f;
        }
        return U < 1 || (Y = B[U - 1]) == k ? x : V[U - 1];
      case k:
        return o = !1, s = !0, d;
      case S:
        return h = !0, x;
      case C:
      case A:
      case E:
      case I:
      case _:
        o = !1;
      case L:
        return x;
    }
  }
  function z(M) {
    var B = M.charCodeAt(0), V = B >> 8;
    return V == 0 ? B > 191 ? c : D[B] : V == 5 ? /[\u0591-\u05f4]/.test(M) ? f : c : V == 6 ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(M) ? p : /[\u0660-\u0669\u066b-\u066c]/.test(M) ? y : B == 1642 ? w : /[\u06f0-\u06f9]/.test(M) ? b : m : V == 32 && B <= 8287 ? R[B & 255] : V == 254 && B >= 65136 ? m : x;
  }
  e.L = c, e.R = f, e.EN = b, e.ON_R = 3, e.AN = 4, e.R_H = 5, e.B = 6, e.RLE = 7, e.DOT = "·", e.doBidiReorder = function(M, B, V) {
    if (M.length < 2)
      return {};
    var U = M.split(""), q = new Array(U.length), Y = new Array(U.length), te = [];
    d = V ? l : r, N(U, te, U.length, B);
    for (var Q = 0; Q < q.length; q[Q] = Q, Q++) ;
    O(2, te, q), O(1, te, q);
    for (var Q = 0; Q < q.length - 1; Q++)
      B[Q] === y ? te[Q] = e.AN : te[Q] === f && (B[Q] > m && B[Q] < C || B[Q] === x || B[Q] === L) ? te[Q] = e.ON_R : Q > 0 && U[Q - 1] === "ل" && /\u0622|\u0623|\u0625|\u0627/.test(U[Q]) && (te[Q - 1] = te[Q] = e.R_H, Q++);
    U[U.length - 1] === e.DOT && (te[U.length - 1] = e.B), U[0] === "‫" && (te[0] = e.RLE);
    for (var Q = 0; Q < q.length; Q++)
      Y[Q] = te[q[Q]];
    return { logicalFromVisual: q, bidiLevels: Y };
  }, e.hasBidiCharacters = function(M, B) {
    for (var V = !1, U = 0; U < M.length; U++)
      B[U] = z(M.charAt(U)), !V && (B[U] == f || B[U] == m || B[U] == y) && (V = !0);
    return V;
  }, e.getVisualFromLogicalIdx = function(M, B) {
    for (var V = 0; V < B.logicalFromVisual.length; V++)
      if (B.logicalFromVisual[V] == M)
        return V;
    return 0;
  };
});
ace.define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function(t, e, a) {
  var d = t("./lib/bidiutil"), u = t("./lib/lang"), o = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/, s = function(h) {
    this.session = h, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = d, this.charWidths = [], this.EOL = "¬", this.showInvisibles = !0, this.isRtlDir = !1, this.$isRtl = !1, this.line = "", this.wrapIndent = 0, this.EOF = "¶", this.RLE = "‫", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = o.test(h.getValue());
  };
  (function() {
    this.isBidiRow = function(h, n, i) {
      return this.seenBidi ? (h !== this.currentRow && (this.currentRow = h, this.updateRowLine(n, i), this.updateBidiMap()), this.bidiMap.bidiLevels) : !1;
    }, this.onChange = function(h) {
      this.seenBidi ? this.currentRow = null : h.action == "insert" && o.test(h.lines.join(`
`)) && (this.seenBidi = !0, this.currentRow = null);
    }, this.getDocumentRow = function() {
      var h = 0, n = this.session.$screenRowCache;
      if (n.length) {
        var i = this.session.$getRowCacheIndex(n, this.currentRow);
        i >= 0 && (h = this.session.$docRowCache[i]);
      }
      return h;
    }, this.getSplitIndex = function() {
      var h = 0, n = this.session.$screenRowCache;
      if (n.length)
        for (var i, r = this.session.$getRowCacheIndex(n, this.currentRow); this.currentRow - h > 0 && (i = this.session.$getRowCacheIndex(n, this.currentRow - h - 1), i === r); )
          r = i, h++;
      else
        h = this.currentRow;
      return h;
    }, this.updateRowLine = function(h, n) {
      h === void 0 && (h = this.getDocumentRow());
      var i = h === this.session.getLength() - 1, r = i ? this.EOF : this.EOL;
      if (this.wrapIndent = 0, this.line = this.session.getLine(h), this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
        var l = this.session.$wrapData[h];
        l && (n === void 0 && (n = this.getSplitIndex()), n > 0 && l.length ? (this.wrapIndent = l.indent, this.wrapOffset = this.wrapIndent * this.charWidths[d.L], this.line = n < l.length ? this.line.substring(l[n - 1], l[n]) : this.line.substring(l[l.length - 1])) : this.line = this.line.substring(0, l[n])), n == l.length && (this.line += this.showInvisibles ? r : d.DOT);
      } else
        this.line += this.showInvisibles ? r : d.DOT;
      var c = this.session, f = 0, b;
      this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(y, x) {
        return y === "	" || c.isFullWidth(y.charCodeAt(0)) ? (b = y === "	" ? c.getScreenTabSize(x + f) : 2, f += b - 1, u.stringRepeat(d.DOT, b)) : y;
      }), this.isRtlDir && (this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == d.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width);
    }, this.updateBidiMap = function() {
      var h = [];
      d.hasBidiCharacters(this.line, h) || this.isRtlDir ? this.bidiMap = d.doBidiReorder(this.line, h, this.isRtlDir) : this.bidiMap = {};
    }, this.markAsDirty = function() {
      this.currentRow = null;
    }, this.updateCharacterWidths = function(h) {
      if (this.characterWidth !== h.$characterSize.width) {
        this.fontMetrics = h;
        var n = this.characterWidth = h.$characterSize.width, i = h.$measureCharWidth("ה");
        this.charWidths[d.L] = this.charWidths[d.EN] = this.charWidths[d.ON_R] = n, this.charWidths[d.R] = this.charWidths[d.AN] = i, this.charWidths[d.R_H] = i * 0.45, this.charWidths[d.B] = this.charWidths[d.RLE] = 0, this.currentRow = null;
      }
    }, this.setShowInvisibles = function(h) {
      this.showInvisibles = h, this.currentRow = null;
    }, this.setEolChar = function(h) {
      this.EOL = h;
    }, this.setContentWidth = function(h) {
      this.contentWidth = h;
    }, this.isRtlLine = function(h) {
      return this.$isRtl ? !0 : h != null ? this.session.getLine(h).charAt(0) == this.RLE : this.isRtlDir;
    }, this.setRtlDirection = function(h, n) {
      for (var i = h.getCursorPosition(), r = h.selection.getSelectionAnchor().row; r <= i.row; r++)
        !n && h.session.getLine(r).charAt(0) === h.session.$bidiHandler.RLE ? h.session.doc.removeInLine(r, 0, 1) : n && h.session.getLine(r).charAt(0) !== h.session.$bidiHandler.RLE && h.session.doc.insert({ column: 0, row: r }, h.session.$bidiHandler.RLE);
    }, this.getPosLeft = function(h) {
      h -= this.wrapIndent;
      var n = this.line.charAt(0) === this.RLE ? 1 : 0, i = h > n ? this.session.getOverwrite() ? h : h - 1 : n, r = d.getVisualFromLogicalIdx(i, this.bidiMap), l = this.bidiMap.bidiLevels, c = 0;
      !this.session.getOverwrite() && h <= n && l[r] % 2 !== 0 && r++;
      for (var f = 0; f < r; f++)
        c += this.charWidths[l[f]];
      return !this.session.getOverwrite() && h > n && l[r] % 2 === 0 && (c += this.charWidths[l[r]]), this.wrapIndent && (c += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (c += this.rtlLineOffset), c;
    }, this.getSelections = function(h, n) {
      var i = this.bidiMap, r = i.bidiLevels, l, c = [], f = 0, b = Math.min(h, n) - this.wrapIndent, y = Math.max(h, n) - this.wrapIndent, x = !1, k = !1, S = 0;
      this.wrapIndent && (f += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
      for (var m, v = 0; v < r.length; v++)
        m = i.logicalFromVisual[v], l = r[v], x = m >= b && m < y, x && !k ? S = f : !x && k && c.push({ left: S, width: f - S }), f += this.charWidths[l], k = x;
      if (x && v === r.length && c.push({ left: S, width: f - S }), this.isRtlDir)
        for (var $ = 0; $ < c.length; $++)
          c[$].left += this.rtlLineOffset;
      return c;
    }, this.offsetToCol = function(i) {
      this.isRtlDir && (i -= this.rtlLineOffset);
      var n = 0, i = Math.max(i, 0), r = 0, l = 0, c = this.bidiMap.bidiLevels, f = this.charWidths[c[l]];
      for (this.wrapIndent && (i -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); i > r + f / 2; ) {
        if (r += f, l === c.length - 1) {
          f = 0;
          break;
        }
        f = this.charWidths[c[++l]];
      }
      return l > 0 && c[l - 1] % 2 !== 0 && c[l] % 2 === 0 ? (i < r && l--, n = this.bidiMap.logicalFromVisual[l]) : l > 0 && c[l - 1] % 2 === 0 && c[l] % 2 !== 0 ? n = 1 + (i > r ? this.bidiMap.logicalFromVisual[l] : this.bidiMap.logicalFromVisual[l - 1]) : this.isRtlDir && l === c.length - 1 && f === 0 && c[l - 1] % 2 === 0 || !this.isRtlDir && l === 0 && c[l] % 2 !== 0 ? n = 1 + this.bidiMap.logicalFromVisual[l] : (l > 0 && c[l - 1] % 2 !== 0 && f !== 0 && l--, n = this.bidiMap.logicalFromVisual[l]), n === 0 && this.isRtlDir && n++, n + this.wrapIndent;
    };
  }).call(s.prototype), e.BidiHandler = s;
});
ace.define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(t, e, a) {
  var d = t("./lib/oop"), u = t("./lib/lang"), o = t("./lib/event_emitter").EventEmitter, s = t("./range").Range, h = function(n) {
    this.session = n, this.doc = n.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
    var i = this;
    this.cursor.on("change", function(r) {
      i.$cursorChanged = !0, i.$silent || i._emit("changeCursor"), !i.$isEmpty && !i.$silent && i._emit("changeSelection"), !i.$keepDesiredColumnOnChange && r.old.column != r.value.column && (i.$desiredColumn = null);
    }), this.anchor.on("change", function() {
      i.$anchorChanged = !0, !i.$isEmpty && !i.$silent && i._emit("changeSelection");
    });
  };
  (function() {
    d.implement(this, o), this.isEmpty = function() {
      return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
    }, this.isMultiLine = function() {
      return !this.$isEmpty && this.anchor.row != this.cursor.row;
    }, this.getCursor = function() {
      return this.lead.getPosition();
    }, this.setSelectionAnchor = function(n, i) {
      this.$isEmpty = !1, this.anchor.setPosition(n, i);
    }, this.getAnchor = this.getSelectionAnchor = function() {
      return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition();
    }, this.getSelectionLead = function() {
      return this.lead.getPosition();
    }, this.isBackwards = function() {
      var n = this.anchor, i = this.lead;
      return n.row > i.row || n.row == i.row && n.column > i.column;
    }, this.getRange = function() {
      var n = this.anchor, i = this.lead;
      return this.$isEmpty ? s.fromPoints(i, i) : this.isBackwards() ? s.fromPoints(i, n) : s.fromPoints(n, i);
    }, this.clearSelection = function() {
      this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"));
    }, this.selectAll = function() {
      this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
    }, this.setRange = this.setSelectionRange = function(n, i) {
      var r = i ? n.end : n.start, l = i ? n.start : n.end;
      this.$setSelection(r.row, r.column, l.row, l.column);
    }, this.$setSelection = function(n, i, r, l) {
      if (!this.$silent) {
        var c = this.$isEmpty, f = this.inMultiSelectMode;
        this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(n, i), this.cursor.setPosition(r, l), this.$isEmpty = !s.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || c != this.$isEmpty || f) && this._emit("changeSelection");
      }
    }, this.$moveSelection = function(n) {
      var i = this.lead;
      this.$isEmpty && this.setSelectionAnchor(i.row, i.column), n.call(this);
    }, this.selectTo = function(n, i) {
      this.$moveSelection(function() {
        this.moveCursorTo(n, i);
      });
    }, this.selectToPosition = function(n) {
      this.$moveSelection(function() {
        this.moveCursorToPosition(n);
      });
    }, this.moveTo = function(n, i) {
      this.clearSelection(), this.moveCursorTo(n, i);
    }, this.moveToPosition = function(n) {
      this.clearSelection(), this.moveCursorToPosition(n);
    }, this.selectUp = function() {
      this.$moveSelection(this.moveCursorUp);
    }, this.selectDown = function() {
      this.$moveSelection(this.moveCursorDown);
    }, this.selectRight = function() {
      this.$moveSelection(this.moveCursorRight);
    }, this.selectLeft = function() {
      this.$moveSelection(this.moveCursorLeft);
    }, this.selectLineStart = function() {
      this.$moveSelection(this.moveCursorLineStart);
    }, this.selectLineEnd = function() {
      this.$moveSelection(this.moveCursorLineEnd);
    }, this.selectFileEnd = function() {
      this.$moveSelection(this.moveCursorFileEnd);
    }, this.selectFileStart = function() {
      this.$moveSelection(this.moveCursorFileStart);
    }, this.selectWordRight = function() {
      this.$moveSelection(this.moveCursorWordRight);
    }, this.selectWordLeft = function() {
      this.$moveSelection(this.moveCursorWordLeft);
    }, this.getWordRange = function(n, i) {
      if (typeof i > "u") {
        var r = n || this.lead;
        n = r.row, i = r.column;
      }
      return this.session.getWordRange(n, i);
    }, this.selectWord = function() {
      this.setSelectionRange(this.getWordRange());
    }, this.selectAWord = function() {
      var n = this.getCursor(), i = this.session.getAWordRange(n.row, n.column);
      this.setSelectionRange(i);
    }, this.getLineRange = function(n, i) {
      var r = typeof n == "number" ? n : this.lead.row, l, c = this.session.getFoldLine(r);
      return c ? (r = c.start.row, l = c.end.row) : l = r, i === !0 ? new s(r, 0, l, this.session.getLine(l).length) : new s(r, 0, l + 1, 0);
    }, this.selectLine = function() {
      this.setSelectionRange(this.getLineRange());
    }, this.moveCursorUp = function() {
      this.moveCursorBy(-1, 0);
    }, this.moveCursorDown = function() {
      this.moveCursorBy(1, 0);
    }, this.wouldMoveIntoSoftTab = function(n, i, r) {
      var l = n.column, c = n.column + i;
      return r < 0 && (l = n.column - i, c = n.column), this.session.isTabStop(n) && this.doc.getLine(n.row).slice(l, c).split(" ").length - 1 == i;
    }, this.moveCursorLeft = function() {
      var n = this.lead.getPosition(), i;
      if (i = this.session.getFoldAt(n.row, n.column, -1))
        this.moveCursorTo(i.start.row, i.start.column);
      else if (n.column === 0)
        n.row > 0 && this.moveCursorTo(n.row - 1, this.doc.getLine(n.row - 1).length);
      else {
        var r = this.session.getTabSize();
        this.wouldMoveIntoSoftTab(n, r, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -r) : this.moveCursorBy(0, -1);
      }
    }, this.moveCursorRight = function() {
      var n = this.lead.getPosition(), i;
      if (i = this.session.getFoldAt(n.row, n.column, 1))
        this.moveCursorTo(i.end.row, i.end.column);
      else if (this.lead.column == this.doc.getLine(this.lead.row).length)
        this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
      else {
        var r = this.session.getTabSize(), n = this.lead;
        this.wouldMoveIntoSoftTab(n, r, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, r) : this.moveCursorBy(0, 1);
      }
    }, this.moveCursorLineStart = function() {
      var n = this.lead.row, i = this.lead.column, r = this.session.documentToScreenRow(n, i), l = this.session.screenToDocumentPosition(r, 0), c = this.session.getDisplayLine(
        n,
        null,
        l.row,
        l.column
      ), f = c.match(/^\s*/);
      f[0].length != i && !this.session.$useEmacsStyleLineStart && (l.column += f[0].length), this.moveCursorToPosition(l);
    }, this.moveCursorLineEnd = function() {
      var n = this.lead, i = this.session.getDocumentLastRowColumnPosition(n.row, n.column);
      if (this.lead.column == i.column) {
        var r = this.session.getLine(i.row);
        if (i.column == r.length) {
          var l = r.search(/\s+$/);
          l > 0 && (i.column = l);
        }
      }
      this.moveCursorTo(i.row, i.column);
    }, this.moveCursorFileEnd = function() {
      var n = this.doc.getLength() - 1, i = this.doc.getLine(n).length;
      this.moveCursorTo(n, i);
    }, this.moveCursorFileStart = function() {
      this.moveCursorTo(0, 0);
    }, this.moveCursorLongWordRight = function() {
      var n = this.lead.row, i = this.lead.column, r = this.doc.getLine(n), l = r.substring(i);
      this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
      var c = this.session.getFoldAt(n, i, 1);
      if (c) {
        this.moveCursorTo(c.end.row, c.end.column);
        return;
      }
      if (this.session.nonTokenRe.exec(l) && (i += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, l = r.substring(i)), i >= r.length) {
        this.moveCursorTo(n, r.length), this.moveCursorRight(), n < this.doc.getLength() - 1 && this.moveCursorWordRight();
        return;
      }
      this.session.tokenRe.exec(l) && (i += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(n, i);
    }, this.moveCursorLongWordLeft = function() {
      var n = this.lead.row, i = this.lead.column, r;
      if (r = this.session.getFoldAt(n, i, -1)) {
        this.moveCursorTo(r.start.row, r.start.column);
        return;
      }
      var l = this.session.getFoldStringAt(n, i, -1);
      l == null && (l = this.doc.getLine(n).substring(0, i));
      var c = u.stringReverse(l);
      if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(c) && (i -= this.session.nonTokenRe.lastIndex, c = c.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), i <= 0) {
        this.moveCursorTo(n, 0), this.moveCursorLeft(), n > 0 && this.moveCursorWordLeft();
        return;
      }
      this.session.tokenRe.exec(c) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(n, i);
    }, this.$shortWordEndIndex = function(n) {
      var i = 0, r, l = /\s/, c = this.session.tokenRe;
      if (c.lastIndex = 0, this.session.tokenRe.exec(n))
        i = this.session.tokenRe.lastIndex;
      else {
        for (; (r = n[i]) && l.test(r); )
          i++;
        if (i < 1) {
          for (c.lastIndex = 0; (r = n[i]) && !c.test(r); )
            if (c.lastIndex = 0, i++, l.test(r))
              if (i > 2) {
                i--;
                break;
              } else {
                for (; (r = n[i]) && l.test(r); )
                  i++;
                if (i > 2)
                  break;
              }
        }
      }
      return c.lastIndex = 0, i;
    }, this.moveCursorShortWordRight = function() {
      var n = this.lead.row, i = this.lead.column, r = this.doc.getLine(n), l = r.substring(i), c = this.session.getFoldAt(n, i, 1);
      if (c)
        return this.moveCursorTo(c.end.row, c.end.column);
      if (i == r.length) {
        var f = this.doc.getLength();
        do
          n++, l = this.doc.getLine(n);
        while (n < f && /^\s*$/.test(l));
        /^\s+/.test(l) || (l = ""), i = 0;
      }
      var b = this.$shortWordEndIndex(l);
      this.moveCursorTo(n, i + b);
    }, this.moveCursorShortWordLeft = function() {
      var n = this.lead.row, i = this.lead.column, r;
      if (r = this.session.getFoldAt(n, i, -1))
        return this.moveCursorTo(r.start.row, r.start.column);
      var l = this.session.getLine(n).substring(0, i);
      if (i === 0) {
        do
          n--, l = this.doc.getLine(n);
        while (n > 0 && /^\s*$/.test(l));
        i = l.length, /\s+$/.test(l) || (l = "");
      }
      var c = u.stringReverse(l), f = this.$shortWordEndIndex(c);
      return this.moveCursorTo(n, i - f);
    }, this.moveCursorWordRight = function() {
      this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight();
    }, this.moveCursorWordLeft = function() {
      this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft();
    }, this.moveCursorBy = function(n, i) {
      var r = this.session.documentToScreenPosition(
        this.lead.row,
        this.lead.column
      ), l;
      if (i === 0 && (n !== 0 && (this.session.$bidiHandler.isBidiRow(r.row, this.lead.row) ? (l = this.session.$bidiHandler.getPosLeft(r.column), r.column = Math.round(l / this.session.$bidiHandler.charWidths[0])) : l = r.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? r.column = this.$desiredColumn : this.$desiredColumn = r.column), n != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
        var c = this.session.lineWidgets[this.lead.row];
        n < 0 ? n -= c.rowsAbove || 0 : n > 0 && (n += c.rowCount - (c.rowsAbove || 0));
      }
      var f = this.session.screenToDocumentPosition(r.row + n, r.column, l);
      n !== 0 && i === 0 && f.row === this.lead.row && (f.column, this.lead.column), this.moveCursorTo(f.row, f.column + i, i === 0);
    }, this.moveCursorToPosition = function(n) {
      this.moveCursorTo(n.row, n.column);
    }, this.moveCursorTo = function(n, i, r) {
      var l = this.session.getFoldAt(n, i, 1);
      l && (n = l.start.row, i = l.start.column), this.$keepDesiredColumnOnChange = !0;
      var c = this.session.getLine(n);
      /[\uDC00-\uDFFF]/.test(c.charAt(i)) && c.charAt(i - 1) && (this.lead.row == n && this.lead.column == i + 1 ? i = i - 1 : i = i + 1), this.lead.setPosition(n, i), this.$keepDesiredColumnOnChange = !1, r || (this.$desiredColumn = null);
    }, this.moveCursorToScreen = function(n, i, r) {
      var l = this.session.screenToDocumentPosition(n, i);
      this.moveCursorTo(l.row, l.column, r);
    }, this.detach = function() {
      this.lead.detach(), this.anchor.detach(), this.session = this.doc = null;
    }, this.fromOrientedRange = function(n) {
      this.setSelectionRange(n, n.cursor == n.start), this.$desiredColumn = n.desiredColumn || this.$desiredColumn;
    }, this.toOrientedRange = function(n) {
      var i = this.getRange();
      return n ? (n.start.column = i.start.column, n.start.row = i.start.row, n.end.column = i.end.column, n.end.row = i.end.row) : n = i, n.cursor = this.isBackwards() ? n.start : n.end, n.desiredColumn = this.$desiredColumn, n;
    }, this.getRangeOfMovements = function(n) {
      var i = this.getCursor();
      try {
        n(this);
        var r = this.getCursor();
        return s.fromPoints(i, r);
      } catch {
        return s.fromPoints(i, i);
      } finally {
        this.moveCursorToPosition(i);
      }
    }, this.toJSON = function() {
      if (this.rangeCount)
        var n = this.ranges.map(function(i) {
          var r = i.clone();
          return r.isBackwards = i.cursor == i.start, r;
        });
      else {
        var n = this.getRange();
        n.isBackwards = this.isBackwards();
      }
      return n;
    }, this.fromJSON = function(n) {
      if (n.start == null)
        if (this.rangeList && n.length > 1) {
          this.toSingleRange(n[0]);
          for (var i = n.length; i--; ) {
            var r = s.fromPoints(n[i].start, n[i].end);
            n[i].isBackwards && (r.cursor = r.start), this.addRange(r, !0);
          }
          return;
        } else
          n = n[0];
      this.rangeList && this.toSingleRange(n), this.setSelectionRange(n, n.isBackwards);
    }, this.isEqual = function(n) {
      if ((n.length || this.rangeCount) && n.length != this.rangeCount)
        return !1;
      if (!n.length || !this.ranges)
        return this.getRange().isEqual(n);
      for (var i = this.ranges.length; i--; )
        if (!this.ranges[i].isEqual(n[i]))
          return !1;
      return !0;
    };
  }).call(h.prototype), e.Selection = h;
});
ace.define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function(t, e, a) {
  var d = t("./config"), u = 2e3, o = function(s) {
    this.states = s, this.regExps = {}, this.matchMappings = {};
    for (var h in this.states) {
      for (var n = this.states[h], i = [], r = 0, l = this.matchMappings[h] = { defaultToken: "text" }, c = "g", f = [], b = 0; b < n.length; b++) {
        var y = n[b];
        if (y.defaultToken && (l.defaultToken = y.defaultToken), y.caseInsensitive && (c = "gi"), y.regex != null) {
          y.regex instanceof RegExp && (y.regex = y.regex.toString().slice(1, -1));
          var x = y.regex, k = new RegExp("(?:(" + x + ")|(.))").exec("a").length - 2;
          Array.isArray(y.token) ? y.token.length == 1 || k == 1 ? y.token = y.token[0] : k - 1 != y.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
            rule: y,
            groupCount: k - 1
          }), y.token = y.token[0]) : (y.tokenArray = y.token, y.token = null, y.onMatch = this.$arrayTokens) : typeof y.token == "function" && !y.onMatch && (k > 1 ? y.onMatch = this.$applyToken : y.onMatch = y.token), k > 1 && (/\\\d/.test(y.regex) ? x = y.regex.replace(/\\([0-9]+)/g, function(S, m) {
            return "\\" + (parseInt(m, 10) + r + 1);
          }) : (k = 1, x = this.removeCapturingGroups(y.regex)), !y.splitRegex && typeof y.token != "string" && f.push(y)), l[r] = b, r += k, i.push(x), y.onMatch || (y.onMatch = null);
        }
      }
      i.length || (l[0] = 0, i.push("$")), f.forEach(function(S) {
        S.splitRegex = this.createSplitterRegexp(S.regex, c);
      }, this), this.regExps[h] = new RegExp("(" + i.join(")|(") + ")|($)", c);
    }
  };
  (function() {
    this.$setMaxTokenCount = function(s) {
      u = s | 0;
    }, this.$applyToken = function(s) {
      var h = this.splitRegex.exec(s).slice(1), n = this.token.apply(this, h);
      if (typeof n == "string")
        return [{ type: n, value: s }];
      for (var i = [], r = 0, l = n.length; r < l; r++)
        h[r] && (i[i.length] = {
          type: n[r],
          value: h[r]
        });
      return i;
    }, this.$arrayTokens = function(s) {
      if (!s)
        return [];
      var h = this.splitRegex.exec(s);
      if (!h)
        return "text";
      for (var n = [], i = this.tokenArray, r = 0, l = i.length; r < l; r++)
        h[r + 1] && (n[n.length] = {
          type: i[r],
          value: h[r + 1]
        });
      return n;
    }, this.removeCapturingGroups = function(s) {
      var h = s.replace(
        /\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g,
        function(n, i) {
          return i ? "(?:" : n;
        }
      );
      return h;
    }, this.createSplitterRegexp = function(s, h) {
      if (s.indexOf("(?=") != -1) {
        var n = 0, i = !1, r = {};
        s.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(l, c, f, b, y, x) {
          return i ? i = y != "]" : y ? i = !0 : b ? (n == r.stack && (r.end = x + 1, r.stack = -1), n--) : f && (n++, f.length != 1 && (r.stack = n, r.start = x)), l;
        }), r.end != null && /^\)*$/.test(s.substr(r.end)) && (s = s.substring(0, r.start) + s.substr(r.end));
      }
      return s.charAt(0) != "^" && (s = "^" + s), s.charAt(s.length - 1) != "$" && (s += "$"), new RegExp(s, (h || "").replace("g", ""));
    }, this.getLineTokens = function(s, h) {
      if (h && typeof h != "string") {
        var n = h.slice(0);
        h = n[0], h === "#tmp" && (n.shift(), h = n.shift());
      } else
        var n = [];
      var i = h || "start", r = this.states[i];
      r || (i = "start", r = this.states[i]);
      var l = this.matchMappings[i], c = this.regExps[i];
      c.lastIndex = 0;
      for (var f, b = [], y = 0, x = 0, k = { type: null, value: "" }; f = c.exec(s); ) {
        var S = l.defaultToken, m = null, v = f[0], $ = c.lastIndex;
        if ($ - v.length > y) {
          var g = s.substring(y, $ - v.length);
          k.type == S ? k.value += g : (k.type && b.push(k), k = { type: S, value: g });
        }
        for (var w = 0; w < f.length - 2; w++)
          if (f[w + 1] !== void 0) {
            m = r[l[w]], m.onMatch ? S = m.onMatch(v, i, n, s) : S = m.token, m.next && (typeof m.next == "string" ? i = m.next : i = m.next(i, n), r = this.states[i], r || (this.reportError("state doesn't exist", i), i = "start", r = this.states[i]), l = this.matchMappings[i], y = $, c = this.regExps[i], c.lastIndex = $), m.consumeLineEnd && (y = $);
            break;
          }
        if (v) {
          if (typeof S == "string")
            (!m || m.merge !== !1) && k.type === S ? k.value += v : (k.type && b.push(k), k = { type: S, value: v });
          else if (S) {
            k.type && b.push(k), k = { type: null, value: "" };
            for (var w = 0; w < S.length; w++)
              b.push(S[w]);
          }
        }
        if (y == s.length)
          break;
        if (y = $, x++ > u) {
          for (x > 2 * s.length && this.reportError("infinite loop with in ace tokenizer", {
            startState: h,
            line: s
          }); y < s.length; )
            k.type && b.push(k), k = {
              value: s.substring(y, y += 500),
              type: "overflow"
            };
          i = "start", n = [];
          break;
        }
      }
      return k.type && b.push(k), n.length > 1 && n[0] !== i && n.unshift("#tmp", i), {
        tokens: b,
        state: n.length ? n : i
      };
    }, this.reportError = d.reportError;
  }).call(o.prototype), e.Tokenizer = o;
});
ace.define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function(t, e, a) {
  var d = t("../lib/lang"), u = function() {
    this.$rules = {
      start: [{
        token: "empty_line",
        regex: "^$"
      }, {
        defaultToken: "text"
      }]
    };
  };
  (function() {
    this.addRules = function(h, n) {
      if (!n) {
        for (var i in h)
          this.$rules[i] = h[i];
        return;
      }
      for (var i in h) {
        for (var r = h[i], l = 0; l < r.length; l++) {
          var c = r[l];
          (c.next || c.onMatch) && (typeof c.next == "string" && c.next.indexOf(n) !== 0 && (c.next = n + c.next), c.nextState && c.nextState.indexOf(n) !== 0 && (c.nextState = n + c.nextState));
        }
        this.$rules[n + i] = r;
      }
    }, this.getRules = function() {
      return this.$rules;
    }, this.embedRules = function(h, n, i, r, l) {
      var c = typeof h == "function" ? new h().getRules() : h;
      if (r)
        for (var f = 0; f < r.length; f++)
          r[f] = n + r[f];
      else {
        r = [];
        for (var b in c)
          r.push(n + b);
      }
      if (this.addRules(c, n), i)
        for (var y = Array.prototype[l ? "push" : "unshift"], f = 0; f < r.length; f++)
          y.apply(this.$rules[r[f]], d.deepCopy(i));
      this.$embeds || (this.$embeds = []), this.$embeds.push(n);
    }, this.getEmbeds = function() {
      return this.$embeds;
    };
    var o = function(h, n) {
      return (h != "start" || n.length) && n.unshift(this.nextState, h), this.nextState;
    }, s = function(h, n) {
      return n.shift(), n.shift() || "start";
    };
    this.normalizeRules = function() {
      var h = 0, n = this.$rules;
      function i(r) {
        var l = n[r];
        l.processed = !0;
        for (var c = 0; c < l.length; c++) {
          var f = l[c], b = null;
          Array.isArray(f) && (b = f, f = {}), !f.regex && f.start && (f.regex = f.start, f.next || (f.next = []), f.next.push({
            defaultToken: f.token
          }, {
            token: f.token + ".end",
            regex: f.end || f.start,
            next: "pop"
          }), f.token = f.token + ".start", f.push = !0);
          var y = f.next || f.push;
          if (y && Array.isArray(y)) {
            var x = f.stateName;
            x || (x = f.token, typeof x != "string" && (x = x[0] || ""), n[x] && (x += h++)), n[x] = y, f.next = x, i(x);
          } else y == "pop" && (f.next = s);
          if (f.push && (f.nextState = f.next || f.push, f.next = o, delete f.push), f.rules)
            for (var k in f.rules)
              n[k] ? n[k].push && n[k].push.apply(n[k], f.rules[k]) : n[k] = f.rules[k];
          var S = typeof f == "string" ? f : f.include;
          if (S && (Array.isArray(S) ? b = S.map(function(v) {
            return n[v];
          }) : b = n[S]), b) {
            var m = [c, 1].concat(b);
            f.noEscape && (m = m.filter(function(v) {
              return !v.next;
            })), l.splice.apply(l, m), c--;
          }
          f.keywordMap && (f.token = this.createKeywordMapper(
            f.keywordMap,
            f.defaultToken || "text",
            f.caseInsensitive
          ), delete f.defaultToken);
        }
      }
      Object.keys(n).forEach(i, this);
    }, this.createKeywordMapper = function(h, n, i, r) {
      var l = /* @__PURE__ */ Object.create(null);
      return this.$keywordList = [], Object.keys(h).forEach(function(c) {
        for (var f = h[c], b = f.split(r || "|"), y = b.length; y--; ) {
          var x = b[y];
          this.$keywordList.push(x), i && (x = x.toLowerCase()), l[x] = c;
        }
      }, this), h = null, i ? function(c) {
        return l[c.toLowerCase()] || n;
      } : function(c) {
        return l[c] || n;
      };
    }, this.getKeywords = function() {
      return this.$keywords;
    };
  }).call(u.prototype), e.TextHighlightRules = u;
});
ace.define("ace/mode/behaviour", ["require", "exports", "module"], function(t, e, a) {
  var d = function() {
    this.$behaviours = {};
  };
  (function() {
    this.add = function(u, o, s) {
      switch (void 0) {
        case this.$behaviours:
          this.$behaviours = {};
        case this.$behaviours[u]:
          this.$behaviours[u] = {};
      }
      this.$behaviours[u][o] = s;
    }, this.addBehaviours = function(u) {
      for (var o in u)
        for (var s in u[o])
          this.add(o, s, u[o][s]);
    }, this.remove = function(u) {
      this.$behaviours && this.$behaviours[u] && delete this.$behaviours[u];
    }, this.inherit = function(u, o) {
      if (typeof u == "function")
        var s = new u().getBehaviours(o);
      else
        var s = u.getBehaviours(o);
      this.addBehaviours(s);
    }, this.getBehaviours = function(u) {
      if (u) {
        for (var o = {}, s = 0; s < u.length; s++)
          this.$behaviours[u[s]] && (o[u[s]] = this.$behaviours[u[s]]);
        return o;
      } else
        return this.$behaviours;
    };
  }).call(d.prototype), e.Behaviour = d;
});
ace.define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function(t, e, a) {
  var d = t("./range").Range, u = function(o, s, h) {
    this.$session = o, this.$row = s, this.$rowTokens = o.getTokens(s);
    var n = o.getTokenAt(s, h);
    this.$tokenIndex = n ? n.index : -1;
  };
  (function() {
    this.stepBackward = function() {
      for (this.$tokenIndex -= 1; this.$tokenIndex < 0; ) {
        if (this.$row -= 1, this.$row < 0)
          return this.$row = 0, null;
        this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1;
      }
      return this.$rowTokens[this.$tokenIndex];
    }, this.stepForward = function() {
      this.$tokenIndex += 1;
      for (var o; this.$tokenIndex >= this.$rowTokens.length; ) {
        if (this.$row += 1, o || (o = this.$session.getLength()), this.$row >= o)
          return this.$row = o - 1, null;
        this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0;
      }
      return this.$rowTokens[this.$tokenIndex];
    }, this.getCurrentToken = function() {
      return this.$rowTokens[this.$tokenIndex];
    }, this.getCurrentTokenRow = function() {
      return this.$row;
    }, this.getCurrentTokenColumn = function() {
      var o = this.$rowTokens, s = this.$tokenIndex, h = o[s].start;
      if (h !== void 0)
        return h;
      for (h = 0; s > 0; )
        s -= 1, h += o[s].value.length;
      return h;
    }, this.getCurrentTokenPosition = function() {
      return { row: this.$row, column: this.getCurrentTokenColumn() };
    }, this.getCurrentTokenRange = function() {
      var o = this.$rowTokens[this.$tokenIndex], s = this.getCurrentTokenColumn();
      return new d(this.$row, s, this.$row, s + o.value.length);
    };
  }).call(u.prototype), e.TokenIterator = u;
});
ace.define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(t, e, a) {
  var d = t("../../lib/oop"), u = t("../behaviour").Behaviour, o = t("../../token_iterator").TokenIterator, s = t("../../lib/lang"), h = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator"], n = ["text", "paren.rparen", "rparen", "paren", "punctuation.operator", "comment"], i, r = {}, l = { '"': '"', "'": "'" }, c = function(y) {
    var x = -1;
    if (y.multiSelect && (x = y.selection.index, r.rangeCount != y.multiSelect.rangeCount && (r = { rangeCount: y.multiSelect.rangeCount })), r[x])
      return i = r[x];
    i = r[x] = {
      autoInsertedBrackets: 0,
      autoInsertedRow: -1,
      autoInsertedLineEnd: "",
      maybeInsertedBrackets: 0,
      maybeInsertedRow: -1,
      maybeInsertedLineStart: "",
      maybeInsertedLineEnd: ""
    };
  }, f = function(y, x, k, S) {
    var m = y.end.row - y.start.row;
    return {
      text: k + x + S,
      selection: [
        0,
        y.start.column + 1,
        m,
        y.end.column + (m ? 0 : 1)
      ]
    };
  }, b = function(y) {
    this.add("braces", "insertion", function(x, k, S, m, v) {
      var $ = S.getCursorPosition(), g = m.doc.getLine($.row);
      if (v == "{") {
        c(S);
        var w = S.getSelectionRange(), p = m.doc.getTextRange(w);
        if (p !== "" && p !== "{" && S.getWrapBehavioursEnabled())
          return f(w, p, "{", "}");
        if (b.isSaneInsertion(S, m))
          return /[\]\}\)]/.test(g[$.column]) || S.inMultiSelectMode || y && y.braces ? (b.recordAutoInsert(S, m, "}"), {
            text: "{}",
            selection: [1, 1]
          }) : (b.recordMaybeInsert(S, m, "{"), {
            text: "{",
            selection: [1, 1]
          });
      } else if (v == "}") {
        c(S);
        var C = g.substring($.column, $.column + 1);
        if (C == "}") {
          var A = m.$findOpeningBracket("}", { column: $.column + 1, row: $.row });
          if (A !== null && b.isAutoInsertedClosing($, g, v))
            return b.popAutoInsertedClosing(), {
              text: "",
              selection: [1, 1]
            };
        }
      } else if (v == `
` || v == `\r
`) {
        c(S);
        var _ = "";
        b.isMaybeInsertedClosing($, g) && (_ = s.stringRepeat("}", i.maybeInsertedBrackets), b.clearMaybeInsertedClosing());
        var C = g.substring($.column, $.column + 1);
        if (C === "}") {
          var E = m.findMatchingBracket({ row: $.row, column: $.column + 1 }, "}");
          if (!E)
            return null;
          var I = this.$getIndent(m.getLine(E.row));
        } else if (_)
          var I = this.$getIndent(g);
        else {
          b.clearMaybeInsertedClosing();
          return;
        }
        var L = I + m.getTabString();
        return {
          text: `
` + L + `
` + I + _,
          selection: [1, L.length, 1, L.length]
        };
      } else
        b.clearMaybeInsertedClosing();
    }), this.add("braces", "deletion", function(x, k, S, m, v) {
      var $ = m.doc.getTextRange(v);
      if (!v.isMultiLine() && $ == "{") {
        c(S);
        var g = m.doc.getLine(v.start.row), w = g.substring(v.end.column, v.end.column + 1);
        if (w == "}")
          return v.end.column++, v;
        i.maybeInsertedBrackets--;
      }
    }), this.add("parens", "insertion", function(x, k, S, m, v) {
      if (v == "(") {
        c(S);
        var $ = S.getSelectionRange(), g = m.doc.getTextRange($);
        if (g !== "" && S.getWrapBehavioursEnabled())
          return f($, g, "(", ")");
        if (b.isSaneInsertion(S, m))
          return b.recordAutoInsert(S, m, ")"), {
            text: "()",
            selection: [1, 1]
          };
      } else if (v == ")") {
        c(S);
        var w = S.getCursorPosition(), p = m.doc.getLine(w.row), C = p.substring(w.column, w.column + 1);
        if (C == ")") {
          var A = m.$findOpeningBracket(")", { column: w.column + 1, row: w.row });
          if (A !== null && b.isAutoInsertedClosing(w, p, v))
            return b.popAutoInsertedClosing(), {
              text: "",
              selection: [1, 1]
            };
        }
      }
    }), this.add("parens", "deletion", function(x, k, S, m, v) {
      var $ = m.doc.getTextRange(v);
      if (!v.isMultiLine() && $ == "(") {
        c(S);
        var g = m.doc.getLine(v.start.row), w = g.substring(v.start.column + 1, v.start.column + 2);
        if (w == ")")
          return v.end.column++, v;
      }
    }), this.add("brackets", "insertion", function(x, k, S, m, v) {
      if (v == "[") {
        c(S);
        var $ = S.getSelectionRange(), g = m.doc.getTextRange($);
        if (g !== "" && S.getWrapBehavioursEnabled())
          return f($, g, "[", "]");
        if (b.isSaneInsertion(S, m))
          return b.recordAutoInsert(S, m, "]"), {
            text: "[]",
            selection: [1, 1]
          };
      } else if (v == "]") {
        c(S);
        var w = S.getCursorPosition(), p = m.doc.getLine(w.row), C = p.substring(w.column, w.column + 1);
        if (C == "]") {
          var A = m.$findOpeningBracket("]", { column: w.column + 1, row: w.row });
          if (A !== null && b.isAutoInsertedClosing(w, p, v))
            return b.popAutoInsertedClosing(), {
              text: "",
              selection: [1, 1]
            };
        }
      }
    }), this.add("brackets", "deletion", function(x, k, S, m, v) {
      var $ = m.doc.getTextRange(v);
      if (!v.isMultiLine() && $ == "[") {
        c(S);
        var g = m.doc.getLine(v.start.row), w = g.substring(v.start.column + 1, v.start.column + 2);
        if (w == "]")
          return v.end.column++, v;
      }
    }), this.add("string_dquotes", "insertion", function(x, k, S, m, v) {
      var $ = m.$mode.$quotes || l;
      if (v.length == 1 && $[v]) {
        if (this.lineCommentStart && this.lineCommentStart.indexOf(v) != -1)
          return;
        c(S);
        var g = v, w = S.getSelectionRange(), p = m.doc.getTextRange(w);
        if (p !== "" && (p.length != 1 || !$[p]) && S.getWrapBehavioursEnabled())
          return f(w, p, g, g);
        if (!p) {
          var C = S.getCursorPosition(), A = m.doc.getLine(C.row), _ = A.substring(C.column - 1, C.column), E = A.substring(C.column, C.column + 1), I = m.getTokenAt(C.row, C.column), L = m.getTokenAt(C.row, C.column + 1);
          if (_ == "\\" && I && /escape/.test(I.type))
            return null;
          var D = I && /string|escape/.test(I.type), R = !L || /string|escape/.test(L.type), N;
          if (E == g)
            N = D !== R, N && /string\.end/.test(L.type) && (N = !1);
          else {
            if (D && !R || D && R)
              return null;
            var O = m.$mode.tokenRe;
            O.lastIndex = 0;
            var P = O.test(_);
            O.lastIndex = 0;
            var z = O.test(_);
            if (P || z || E && !/[\s;,.})\]\\]/.test(E))
              return null;
            var M = A[C.column - 2];
            if (_ == g && (M == g || O.test(M)))
              return null;
            N = !0;
          }
          return {
            text: N ? g + g : "",
            selection: [1, 1]
          };
        }
      }
    }), this.add("string_dquotes", "deletion", function(x, k, S, m, v) {
      var $ = m.$mode.$quotes || l, g = m.doc.getTextRange(v);
      if (!v.isMultiLine() && $.hasOwnProperty(g)) {
        c(S);
        var w = m.doc.getLine(v.start.row), p = w.substring(v.start.column + 1, v.start.column + 2);
        if (p == g)
          return v.end.column++, v;
      }
    });
  };
  b.isSaneInsertion = function(y, x) {
    var k = y.getCursorPosition(), S = new o(x, k.row, k.column);
    if (!this.$matchTokenType(S.getCurrentToken() || "text", h)) {
      if (/[)}\]]/.test(y.session.getLine(k.row)[k.column]))
        return !0;
      var m = new o(x, k.row, k.column + 1);
      if (!this.$matchTokenType(m.getCurrentToken() || "text", h))
        return !1;
    }
    return S.stepForward(), S.getCurrentTokenRow() !== k.row || this.$matchTokenType(S.getCurrentToken() || "text", n);
  }, b.$matchTokenType = function(y, x) {
    return x.indexOf(y.type || y) > -1;
  }, b.recordAutoInsert = function(y, x, k) {
    var S = y.getCursorPosition(), m = x.doc.getLine(S.row);
    this.isAutoInsertedClosing(S, m, i.autoInsertedLineEnd[0]) || (i.autoInsertedBrackets = 0), i.autoInsertedRow = S.row, i.autoInsertedLineEnd = k + m.substr(S.column), i.autoInsertedBrackets++;
  }, b.recordMaybeInsert = function(y, x, k) {
    var S = y.getCursorPosition(), m = x.doc.getLine(S.row);
    this.isMaybeInsertedClosing(S, m) || (i.maybeInsertedBrackets = 0), i.maybeInsertedRow = S.row, i.maybeInsertedLineStart = m.substr(0, S.column) + k, i.maybeInsertedLineEnd = m.substr(S.column), i.maybeInsertedBrackets++;
  }, b.isAutoInsertedClosing = function(y, x, k) {
    return i.autoInsertedBrackets > 0 && y.row === i.autoInsertedRow && k === i.autoInsertedLineEnd[0] && x.substr(y.column) === i.autoInsertedLineEnd;
  }, b.isMaybeInsertedClosing = function(y, x) {
    return i.maybeInsertedBrackets > 0 && y.row === i.maybeInsertedRow && x.substr(y.column) === i.maybeInsertedLineEnd && x.substr(0, y.column) == i.maybeInsertedLineStart;
  }, b.popAutoInsertedClosing = function() {
    i.autoInsertedLineEnd = i.autoInsertedLineEnd.substr(1), i.autoInsertedBrackets--;
  }, b.clearMaybeInsertedClosing = function() {
    i && (i.maybeInsertedBrackets = 0, i.maybeInsertedRow = -1);
  }, d.inherits(b, u), e.CstyleBehaviour = b;
});
ace.define("ace/unicode", ["require", "exports", "module"], function(t, e, a) {
  for (var d = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], u = 0, o = [], s = 0; s < d.length; s += 2)
    o.push(u += d[s]), d[s + 1] && o.push(45, u += d[s + 1]);
  e.wordChars = String.fromCharCode.apply(null, o);
});
ace.define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(t, e, a) {
  var d = t("../config"), u = t("../tokenizer").Tokenizer, o = t("./text_highlight_rules").TextHighlightRules, s = t("./behaviour/cstyle").CstyleBehaviour, h = t("../unicode"), n = t("../lib/lang"), i = t("../token_iterator").TokenIterator, r = t("../range").Range, l = function() {
    this.HighlightRules = o;
  };
  (function() {
    this.$defaultBehaviour = new s(), this.tokenRe = new RegExp("^[" + h.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + h.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
      return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new u(this.$highlightRules.getRules())), this.$tokenizer;
    }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(c, f, b, y) {
      var x = f.doc, k = !0, S = !0, m = 1 / 0, v = f.getTabSize(), $ = !1;
      if (this.lineCommentStart) {
        if (Array.isArray(this.lineCommentStart))
          var p = this.lineCommentStart.map(n.escapeRegExp).join("|"), g = this.lineCommentStart[0];
        else
          var p = n.escapeRegExp(this.lineCommentStart), g = this.lineCommentStart;
        p = new RegExp("^(\\s*)(?:" + p + ") ?"), $ = f.getUseSoftTabs();
        var _ = function(z, M) {
          var B = z.match(p);
          if (B) {
            var V = B[1].length, U = B[0].length;
            !L(z, V, U) && B[0][U - 1] == " " && U--, x.removeInLine(M, V, U);
          }
        }, I = g + " ", A = function(z, M) {
          (!k || /\S/.test(z)) && (L(z, m, m) ? x.insertInLine({ row: M, column: m }, I) : x.insertInLine({ row: M, column: m }, g));
        }, E = function(z, M) {
          return p.test(z);
        }, L = function(z, M, B) {
          for (var V = 0; M-- && z.charAt(M) == " "; )
            V++;
          if (V % v != 0)
            return !1;
          for (var V = 0; z.charAt(B++) == " "; )
            V++;
          return v > 2 ? V % v != v - 1 : V % v == 0;
        };
      } else {
        if (!this.blockComment)
          return !1;
        var g = this.blockComment.start, w = this.blockComment.end, p = new RegExp("^(\\s*)(?:" + n.escapeRegExp(g) + ")"), C = new RegExp("(?:" + n.escapeRegExp(w) + ")\\s*$"), A = function(N, O) {
          E(N, O) || (!k || /\S/.test(N)) && (x.insertInLine({ row: O, column: N.length }, w), x.insertInLine({ row: O, column: m }, g));
        }, _ = function(N, O) {
          var P;
          (P = N.match(C)) && x.removeInLine(O, N.length - P[0].length, N.length), (P = N.match(p)) && x.removeInLine(O, P[1].length, P[0].length);
        }, E = function(N, O) {
          if (p.test(N))
            return !0;
          for (var P = f.getTokens(O), z = 0; z < P.length; z++)
            if (P[z].type === "comment")
              return !0;
        };
      }
      function D(N) {
        for (var O = b; O <= y; O++)
          N(x.getLine(O), O);
      }
      var R = 1 / 0;
      D(function(N, O) {
        var P = N.search(/\S/);
        P !== -1 ? (P < m && (m = P), S && !E(N, O) && (S = !1)) : R > N.length && (R = N.length);
      }), m == 1 / 0 && (m = R, k = !1, S = !1), $ && m % v != 0 && (m = Math.floor(m / v) * v), D(S ? _ : A);
    }, this.toggleBlockComment = function(c, f, b, y) {
      var x = this.blockComment;
      if (x) {
        !x.start && x[0] && (x = x[0]);
        var k = new i(f, y.row, y.column), S = k.getCurrentToken();
        f.selection;
        var m = f.selection.toOrientedRange(), v, $;
        if (S && /comment/.test(S.type)) {
          for (var g, w; S && /comment/.test(S.type); ) {
            var p = S.value.indexOf(x.start);
            if (p != -1) {
              var C = k.getCurrentTokenRow(), A = k.getCurrentTokenColumn() + p;
              g = new r(C, A, C, A + x.start.length);
              break;
            }
            S = k.stepBackward();
          }
          for (var k = new i(f, y.row, y.column), S = k.getCurrentToken(); S && /comment/.test(S.type); ) {
            var p = S.value.indexOf(x.end);
            if (p != -1) {
              var C = k.getCurrentTokenRow(), A = k.getCurrentTokenColumn() + p;
              w = new r(C, A, C, A + x.end.length);
              break;
            }
            S = k.stepForward();
          }
          w && f.remove(w), g && (f.remove(g), v = g.start.row, $ = -x.start.length);
        } else
          $ = x.start.length, v = b.start.row, f.insert(b.end, x.end), f.insert(b.start, x.start);
        m.start.row == v && (m.start.column += $), m.end.row == v && (m.end.column += $), f.selection.fromOrientedRange(m);
      }
    }, this.getNextLineIndent = function(c, f, b) {
      return this.$getIndent(f);
    }, this.checkOutdent = function(c, f, b) {
      return !1;
    }, this.autoOutdent = function(c, f, b) {
    }, this.$getIndent = function(c) {
      return c.match(/^\s*/)[0];
    }, this.createWorker = function(c) {
      return null;
    }, this.createModeDelegates = function(c) {
      this.$embeds = [], this.$modes = {};
      for (var f in c)
        if (c[f]) {
          var b = c[f], y = b.prototype.$id, x = d.$modes[y];
          x || (d.$modes[y] = x = new b()), d.$modes[f] || (d.$modes[f] = x), this.$embeds.push(f), this.$modes[f] = x;
        }
      for (var k = [
        "toggleBlockComment",
        "toggleCommentLines",
        "getNextLineIndent",
        "checkOutdent",
        "autoOutdent",
        "transformAction",
        "getCompletions"
      ], f = 0; f < k.length; f++)
        (function(m) {
          var v = k[f], $ = m[v];
          m[k[f]] = function() {
            return this.$delegator(v, arguments, $);
          };
        })(this);
    }, this.$delegator = function(c, f, b) {
      var y = f[0] || "start";
      if (typeof y != "string") {
        if (Array.isArray(y[2])) {
          var x = y[2][y[2].length - 1], k = this.$modes[x];
          if (k)
            return k[c].apply(k, [y[1]].concat([].slice.call(f, 1)));
        }
        y = y[0] || "start";
      }
      for (var S = 0; S < this.$embeds.length; S++)
        if (this.$modes[this.$embeds[S]]) {
          var m = y.split(this.$embeds[S]);
          if (!m[0] && m[1]) {
            f[0] = m[1];
            var k = this.$modes[this.$embeds[S]];
            return k[c].apply(k, f);
          }
        }
      var v = b.apply(this, f);
      return b ? v : void 0;
    }, this.transformAction = function(c, f, b, y, x) {
      if (this.$behaviour) {
        var k = this.$behaviour.getBehaviours();
        for (var S in k)
          if (k[S][f]) {
            var m = k[S][f].apply(this, arguments);
            if (m)
              return m;
          }
      }
    }, this.getKeywords = function(c) {
      if (!this.completionKeywords) {
        var f = this.$tokenizer.rules, b = [];
        for (var y in f)
          for (var x = f[y], k = 0, S = x.length; k < S; k++)
            if (typeof x[k].token == "string")
              /keyword|support|storage/.test(x[k].token) && b.push(x[k].regex);
            else if (typeof x[k].token == "object") {
              for (var m = 0, v = x[k].token.length; m < v; m++)
                if (/keyword|support|storage/.test(x[k].token[m])) {
                  var y = x[k].regex.match(/\(.+?\)/g)[m];
                  b.push(y.substr(1, y.length - 2));
                }
            }
        this.completionKeywords = b;
      }
      return c ? b.concat(this.$keywordList || []) : this.$keywordList;
    }, this.$createKeywordList = function() {
      return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || [];
    }, this.getCompletions = function(c, f, b, y) {
      var x = this.$keywordList || this.$createKeywordList();
      return x.map(function(k) {
        return {
          name: k,
          value: k,
          score: 0,
          meta: "keyword"
        };
      });
    }, this.$id = "ace/mode/text";
  }).call(l.prototype), e.Mode = l;
});
ace.define("ace/apply_delta", ["require", "exports", "module"], function(t, e, a) {
  e.applyDelta = function(d, u, o) {
    var s = u.start.row, h = u.start.column, n = d[s] || "";
    switch (u.action) {
      case "insert":
        var i = u.lines;
        if (i.length === 1)
          d[s] = n.substring(0, h) + u.lines[0] + n.substring(h);
        else {
          var r = [s, 1].concat(u.lines);
          d.splice.apply(d, r), d[s] = n.substring(0, h) + d[s], d[s + u.lines.length - 1] += n.substring(h);
        }
        break;
      case "remove":
        var l = u.end.column, c = u.end.row;
        s === c ? d[s] = n.substring(0, h) + n.substring(l) : d.splice(
          s,
          c - s + 1,
          n.substring(0, h) + d[c].substring(l)
        );
        break;
    }
  };
});
ace.define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(t, e, a) {
  var d = t("./lib/oop"), u = t("./lib/event_emitter").EventEmitter, o = e.Anchor = function(s, h, n) {
    this.$onChange = this.onChange.bind(this), this.attach(s), typeof n > "u" ? this.setPosition(h.row, h.column) : this.setPosition(h, n);
  };
  (function() {
    d.implement(this, u), this.getPosition = function() {
      return this.$clipPositionToDocument(this.row, this.column);
    }, this.getDocument = function() {
      return this.document;
    }, this.$insertRight = !1, this.onChange = function(n) {
      if (!(n.start.row == n.end.row && n.start.row != this.row) && !(n.start.row > this.row)) {
        var i = h(n, { row: this.row, column: this.column }, this.$insertRight);
        this.setPosition(i.row, i.column, !0);
      }
    };
    function s(n, i, r) {
      var l = r ? n.column <= i.column : n.column < i.column;
      return n.row < i.row || n.row == i.row && l;
    }
    function h(n, i, r) {
      var l = n.action == "insert", c = (l ? 1 : -1) * (n.end.row - n.start.row), f = (l ? 1 : -1) * (n.end.column - n.start.column), b = n.start, y = l ? b : n.end;
      return s(i, b, r) ? {
        row: i.row,
        column: i.column
      } : s(y, i, !r) ? {
        row: i.row + c,
        column: i.column + (i.row == y.row ? f : 0)
      } : {
        row: b.row,
        column: b.column
      };
    }
    this.setPosition = function(n, i, r) {
      var l;
      if (r ? l = {
        row: n,
        column: i
      } : l = this.$clipPositionToDocument(n, i), !(this.row == l.row && this.column == l.column)) {
        var c = {
          row: this.row,
          column: this.column
        };
        this.row = l.row, this.column = l.column, this._signal("change", {
          old: c,
          value: l
        });
      }
    }, this.detach = function() {
      this.document.off("change", this.$onChange);
    }, this.attach = function(n) {
      this.document = n || this.document, this.document.on("change", this.$onChange);
    }, this.$clipPositionToDocument = function(n, i) {
      var r = {};
      return n >= this.document.getLength() ? (r.row = Math.max(0, this.document.getLength() - 1), r.column = this.document.getLine(r.row).length) : n < 0 ? (r.row = 0, r.column = 0) : (r.row = n, r.column = Math.min(this.document.getLine(r.row).length, Math.max(0, i))), i < 0 && (r.column = 0), r;
    };
  }).call(o.prototype);
});
ace.define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(t, e, a) {
  var d = t("./lib/oop"), u = t("./apply_delta").applyDelta, o = t("./lib/event_emitter").EventEmitter, s = t("./range").Range, h = t("./anchor").Anchor, n = function(i) {
    this.$lines = [""], i.length === 0 ? this.$lines = [""] : Array.isArray(i) ? this.insertMergedLines({ row: 0, column: 0 }, i) : this.insert({ row: 0, column: 0 }, i);
  };
  (function() {
    d.implement(this, o), this.setValue = function(i) {
      var r = this.getLength() - 1;
      this.remove(new s(0, 0, r, this.getLine(r).length)), this.insert({ row: 0, column: 0 }, i);
    }, this.getValue = function() {
      return this.getAllLines().join(this.getNewLineCharacter());
    }, this.createAnchor = function(i, r) {
      return new h(this, i, r);
    }, "aaa".split(/a/).length === 0 ? this.$split = function(i) {
      return i.replace(/\r\n|\r/g, `
`).split(`
`);
    } : this.$split = function(i) {
      return i.split(/\r\n|\r|\n/);
    }, this.$detectNewLine = function(i) {
      var r = i.match(/^.*?(\r\n|\r|\n)/m);
      this.$autoNewLine = r ? r[1] : `
`, this._signal("changeNewLineMode");
    }, this.getNewLineCharacter = function() {
      switch (this.$newLineMode) {
        case "windows":
          return `\r
`;
        case "unix":
          return `
`;
        default:
          return this.$autoNewLine || `
`;
      }
    }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function(i) {
      this.$newLineMode !== i && (this.$newLineMode = i, this._signal("changeNewLineMode"));
    }, this.getNewLineMode = function() {
      return this.$newLineMode;
    }, this.isNewLine = function(i) {
      return i == `\r
` || i == "\r" || i == `
`;
    }, this.getLine = function(i) {
      return this.$lines[i] || "";
    }, this.getLines = function(i, r) {
      return this.$lines.slice(i, r + 1);
    }, this.getAllLines = function() {
      return this.getLines(0, this.getLength());
    }, this.getLength = function() {
      return this.$lines.length;
    }, this.getTextRange = function(i) {
      return this.getLinesForRange(i).join(this.getNewLineCharacter());
    }, this.getLinesForRange = function(i) {
      var r;
      if (i.start.row === i.end.row)
        r = [this.getLine(i.start.row).substring(i.start.column, i.end.column)];
      else {
        r = this.getLines(i.start.row, i.end.row), r[0] = (r[0] || "").substring(i.start.column);
        var l = r.length - 1;
        i.end.row - i.start.row == l && (r[l] = r[l].substring(0, i.end.column));
      }
      return r;
    }, this.insertLines = function(i, r) {
      return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(i, r);
    }, this.removeLines = function(i, r) {
      return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(i, r);
    }, this.insertNewLine = function(i) {
      return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(i, ["", ""]);
    }, this.insert = function(i, r) {
      return this.getLength() <= 1 && this.$detectNewLine(r), this.insertMergedLines(i, this.$split(r));
    }, this.insertInLine = function(i, r) {
      var l = this.clippedPos(i.row, i.column), c = this.pos(i.row, i.column + r.length);
      return this.applyDelta({
        start: l,
        end: c,
        action: "insert",
        lines: [r]
      }, !0), this.clonePos(c);
    }, this.clippedPos = function(i, r) {
      var l = this.getLength();
      i === void 0 ? i = l : i < 0 ? i = 0 : i >= l && (i = l - 1, r = void 0);
      var c = this.getLine(i);
      return r == null && (r = c.length), r = Math.min(Math.max(r, 0), c.length), { row: i, column: r };
    }, this.clonePos = function(i) {
      return { row: i.row, column: i.column };
    }, this.pos = function(i, r) {
      return { row: i, column: r };
    }, this.$clipPosition = function(i) {
      var r = this.getLength();
      return i.row >= r ? (i.row = Math.max(0, r - 1), i.column = this.getLine(r - 1).length) : (i.row = Math.max(0, i.row), i.column = Math.min(Math.max(i.column, 0), this.getLine(i.row).length)), i;
    }, this.insertFullLines = function(i, r) {
      i = Math.min(Math.max(i, 0), this.getLength());
      var l = 0;
      i < this.getLength() ? (r = r.concat([""]), l = 0) : (r = [""].concat(r), i--, l = this.$lines[i].length), this.insertMergedLines({ row: i, column: l }, r);
    }, this.insertMergedLines = function(i, r) {
      var l = this.clippedPos(i.row, i.column), c = {
        row: l.row + r.length - 1,
        column: (r.length == 1 ? l.column : 0) + r[r.length - 1].length
      };
      return this.applyDelta({
        start: l,
        end: c,
        action: "insert",
        lines: r
      }), this.clonePos(c);
    }, this.remove = function(i) {
      var r = this.clippedPos(i.start.row, i.start.column), l = this.clippedPos(i.end.row, i.end.column);
      return this.applyDelta({
        start: r,
        end: l,
        action: "remove",
        lines: this.getLinesForRange({ start: r, end: l })
      }), this.clonePos(r);
    }, this.removeInLine = function(i, r, l) {
      var c = this.clippedPos(i, r), f = this.clippedPos(i, l);
      return this.applyDelta({
        start: c,
        end: f,
        action: "remove",
        lines: this.getLinesForRange({ start: c, end: f })
      }, !0), this.clonePos(c);
    }, this.removeFullLines = function(i, r) {
      i = Math.min(Math.max(0, i), this.getLength() - 1), r = Math.min(Math.max(0, r), this.getLength() - 1);
      var l = r == this.getLength() - 1 && i > 0, c = r < this.getLength() - 1, f = l ? i - 1 : i, b = l ? this.getLine(f).length : 0, y = c ? r + 1 : r, x = c ? 0 : this.getLine(y).length, k = new s(f, b, y, x), S = this.$lines.slice(i, r + 1);
      return this.applyDelta({
        start: k.start,
        end: k.end,
        action: "remove",
        lines: this.getLinesForRange(k)
      }), S;
    }, this.removeNewLine = function(i) {
      i < this.getLength() - 1 && i >= 0 && this.applyDelta({
        start: this.pos(i, this.getLine(i).length),
        end: this.pos(i + 1, 0),
        action: "remove",
        lines: ["", ""]
      });
    }, this.replace = function(i, r) {
      if (i instanceof s || (i = s.fromPoints(i.start, i.end)), r.length === 0 && i.isEmpty())
        return i.start;
      if (r == this.getTextRange(i))
        return i.end;
      this.remove(i);
      var l;
      return r ? l = this.insert(i.start, r) : l = i.start, l;
    }, this.applyDeltas = function(i) {
      for (var r = 0; r < i.length; r++)
        this.applyDelta(i[r]);
    }, this.revertDeltas = function(i) {
      for (var r = i.length - 1; r >= 0; r--)
        this.revertDelta(i[r]);
    }, this.applyDelta = function(i, r) {
      var l = i.action == "insert";
      (l ? i.lines.length <= 1 && !i.lines[0] : !s.comparePoints(i.start, i.end)) || (l && i.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(i, 2e4) : (u(this.$lines, i, r), this._signal("change", i)));
    }, this.$safeApplyDelta = function(i) {
      var r = this.$lines.length;
      (i.action == "remove" && i.start.row < r && i.end.row < r || i.action == "insert" && i.start.row <= r) && this.applyDelta(i);
    }, this.$splitAndapplyLargeDelta = function(i, r) {
      for (var l = i.lines, c = l.length - r + 1, f = i.start.row, b = i.start.column, y = 0, x = 0; y < c; y = x) {
        x += r - 1;
        var k = l.slice(y, x);
        k.push(""), this.applyDelta({
          start: this.pos(f + y, b),
          end: this.pos(f + x, b = 0),
          action: i.action,
          lines: k
        }, !0);
      }
      i.lines = l.slice(y), i.start.row = f + y, i.start.column = b, this.applyDelta(i, !0);
    }, this.revertDelta = function(i) {
      this.$safeApplyDelta({
        start: this.clonePos(i.start),
        end: this.clonePos(i.end),
        action: i.action == "insert" ? "remove" : "insert",
        lines: i.lines.slice()
      });
    }, this.indexToPosition = function(i, r) {
      for (var l = this.$lines || this.getAllLines(), c = this.getNewLineCharacter().length, f = r || 0, b = l.length; f < b; f++)
        if (i -= l[f].length + c, i < 0)
          return { row: f, column: i + l[f].length + c };
      return { row: b - 1, column: i + l[b - 1].length + c };
    }, this.positionToIndex = function(i, r) {
      for (var l = this.$lines || this.getAllLines(), c = this.getNewLineCharacter().length, f = 0, b = Math.min(i.row, l.length), y = r || 0; y < b; ++y)
        f += l[y].length + c;
      return f + i.column;
    };
  }).call(n.prototype), e.Document = n;
});
ace.define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(t, e, a) {
  var d = t("./lib/oop"), u = t("./lib/event_emitter").EventEmitter, o = function(s, h) {
    this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = s;
    var n = this;
    this.$worker = function() {
      if (n.running) {
        for (var i = /* @__PURE__ */ new Date(), r = n.currentLine, l = -1, c = n.doc, f = r; n.lines[r]; )
          r++;
        var b = c.getLength(), y = 0;
        for (n.running = !1; r < b; ) {
          n.$tokenizeRow(r), l = r;
          do
            r++;
          while (n.lines[r]);
          if (y++, y % 5 === 0 && /* @__PURE__ */ new Date() - i > 20) {
            n.running = setTimeout(n.$worker, 20);
            break;
          }
        }
        n.currentLine = r, l == -1 && (l = r), f <= l && n.fireUpdateEvent(f, l);
      }
    };
  };
  (function() {
    d.implement(this, u), this.setTokenizer = function(s) {
      this.tokenizer = s, this.lines = [], this.states = [], this.start(0);
    }, this.setDocument = function(s) {
      this.doc = s, this.lines = [], this.states = [], this.stop();
    }, this.fireUpdateEvent = function(s, h) {
      var n = {
        first: s,
        last: h
      };
      this._signal("update", { data: n });
    }, this.start = function(s) {
      this.currentLine = Math.min(s || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700);
    }, this.scheduleStart = function() {
      this.running || (this.running = setTimeout(this.$worker, 700));
    }, this.$updateOnChange = function(s) {
      var h = s.start.row, n = s.end.row - h;
      if (n === 0)
        this.lines[h] = null;
      else if (s.action == "remove")
        this.lines.splice(h, n + 1, null), this.states.splice(h, n + 1, null);
      else {
        var i = Array(n + 1);
        i.unshift(h, 1), this.lines.splice.apply(this.lines, i), this.states.splice.apply(this.states, i);
      }
      this.currentLine = Math.min(h, this.currentLine, this.doc.getLength()), this.stop();
    }, this.stop = function() {
      this.running && clearTimeout(this.running), this.running = !1;
    }, this.getTokens = function(s) {
      return this.lines[s] || this.$tokenizeRow(s);
    }, this.getState = function(s) {
      return this.currentLine == s && this.$tokenizeRow(s), this.states[s] || "start";
    }, this.$tokenizeRow = function(s) {
      var h = this.doc.getLine(s), n = this.states[s - 1], i = this.tokenizer.getLineTokens(h, n, s);
      return this.states[s] + "" != i.state + "" ? (this.states[s] = i.state, this.lines[s + 1] = null, this.currentLine > s + 1 && (this.currentLine = s + 1)) : this.currentLine == s && (this.currentLine = s + 1), this.lines[s] = i.tokens;
    };
  }).call(o.prototype), e.BackgroundTokenizer = o;
});
ace.define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(t, e, a) {
  var d = t("./lib/lang");
  t("./lib/oop");
  var u = t("./range").Range, o = function(s, h, n) {
    this.setRegexp(s), this.clazz = h, this.type = n || "text";
  };
  (function() {
    this.MAX_RANGES = 500, this.setRegexp = function(s) {
      this.regExp + "" != s + "" && (this.regExp = s, this.cache = []);
    }, this.update = function(s, h, n, i) {
      if (this.regExp)
        for (var r = i.firstRow, l = i.lastRow, c = r; c <= l; c++) {
          var f = this.cache[c];
          f == null && (f = d.getMatchOffsets(n.getLine(c), this.regExp), f.length > this.MAX_RANGES && (f = f.slice(0, this.MAX_RANGES)), f = f.map(function(y) {
            return new u(c, y.offset, c, y.offset + y.length);
          }), this.cache[c] = f.length ? f : "");
          for (var b = f.length; b--; )
            h.drawSingleLineMarker(
              s,
              f[b].toScreenRange(n),
              this.clazz,
              i
            );
        }
    };
  }).call(o.prototype), e.SearchHighlight = o;
});
ace.define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(t, e, a) {
  var d = t("../range").Range;
  function u(o, s) {
    this.foldData = o, Array.isArray(s) ? this.folds = s : s = this.folds = [s];
    var h = s[s.length - 1];
    this.range = new d(
      s[0].start.row,
      s[0].start.column,
      h.end.row,
      h.end.column
    ), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(n) {
      n.setFoldLine(this);
    }, this);
  }
  (function() {
    this.shiftRow = function(o) {
      this.start.row += o, this.end.row += o, this.folds.forEach(function(s) {
        s.start.row += o, s.end.row += o;
      });
    }, this.addFold = function(o) {
      if (o.sameRow) {
        if (o.start.row < this.startRow || o.endRow > this.endRow)
          throw new Error("Can't add a fold to this FoldLine as it has no connection");
        this.folds.push(o), this.folds.sort(function(s, h) {
          return -s.range.compareEnd(h.start.row, h.start.column);
        }), this.range.compareEnd(o.start.row, o.start.column) > 0 ? (this.end.row = o.end.row, this.end.column = o.end.column) : this.range.compareStart(o.end.row, o.end.column) < 0 && (this.start.row = o.start.row, this.start.column = o.start.column);
      } else if (o.start.row == this.end.row)
        this.folds.push(o), this.end.row = o.end.row, this.end.column = o.end.column;
      else if (o.end.row == this.start.row)
        this.folds.unshift(o), this.start.row = o.start.row, this.start.column = o.start.column;
      else
        throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
      o.foldLine = this;
    }, this.containsRow = function(o) {
      return o >= this.start.row && o <= this.end.row;
    }, this.walk = function(o, s, h) {
      var n = 0, i = this.folds, r, l, c, f = !0;
      s == null && (s = this.end.row, h = this.end.column);
      for (var b = 0; b < i.length; b++) {
        if (r = i[b], l = r.range.compareStart(s, h), l == -1) {
          o(null, s, h, n, f);
          return;
        }
        if (c = o(null, r.start.row, r.start.column, n, f), c = !c && o(r.placeholder, r.start.row, r.start.column, n), c || l === 0)
          return;
        f = !r.sameRow, n = r.end.column;
      }
      o(null, s, h, n, f);
    }, this.getNextFoldTo = function(o, s) {
      for (var h, n, i = 0; i < this.folds.length; i++) {
        if (h = this.folds[i], n = h.range.compareEnd(o, s), n == -1)
          return {
            fold: h,
            kind: "after"
          };
        if (n === 0)
          return {
            fold: h,
            kind: "inside"
          };
      }
      return null;
    }, this.addRemoveChars = function(o, s, h) {
      var n = this.getNextFoldTo(o, s), i, r;
      if (n) {
        if (i = n.fold, n.kind == "inside" && i.start.column != s && i.start.row != o)
          window.console && window.console.log(o, s, i);
        else if (i.start.row == o) {
          r = this.folds;
          var l = r.indexOf(i);
          for (l === 0 && (this.start.column += h), l; l < r.length; l++) {
            if (i = r[l], i.start.column += h, !i.sameRow)
              return;
            i.end.column += h;
          }
          this.end.column += h;
        }
      }
    }, this.split = function(o, s) {
      var h = this.getNextFoldTo(o, s);
      if (!h || h.kind == "inside")
        return null;
      var n = h.fold, i = this.folds, r = this.foldData, l = i.indexOf(n), c = i[l - 1];
      this.end.row = c.end.row, this.end.column = c.end.column, i = i.splice(l, i.length - l);
      var f = new u(r, i);
      return r.splice(r.indexOf(this) + 1, 0, f), f;
    }, this.merge = function(o) {
      for (var s = o.folds, h = 0; h < s.length; h++)
        this.addFold(s[h]);
      var n = this.foldData;
      n.splice(n.indexOf(o), 1);
    }, this.toString = function() {
      var o = [this.range.toString() + ": ["];
      return this.folds.forEach(function(s) {
        o.push("  " + s.toString());
      }), o.push("]"), o.join(`
`);
    }, this.idxToPosition = function(o) {
      for (var s = 0, h = 0; h < this.folds.length; h++) {
        var n = this.folds[h];
        if (o -= n.start.column - s, o < 0)
          return {
            row: n.start.row,
            column: n.start.column + o
          };
        if (o -= n.placeholder.length, o < 0)
          return n.start;
        s = n.end.column;
      }
      return {
        row: this.end.row,
        column: this.end.column + o
      };
    };
  }).call(u.prototype), e.FoldLine = u;
});
ace.define("ace/range_list", ["require", "exports", "module", "ace/range"], function(t, e, a) {
  var d = t("./range").Range, u = d.comparePoints, o = function() {
    this.ranges = [], this.$bias = 1;
  };
  (function() {
    this.comparePoints = u, this.pointIndex = function(s, h, n) {
      for (var i = this.ranges, r = n || 0; r < i.length; r++) {
        var l = i[r], c = u(s, l.end);
        if (!(c > 0)) {
          var f = u(s, l.start);
          return c === 0 ? h && f !== 0 ? -r - 2 : r : f > 0 || f === 0 && !h ? r : -r - 1;
        }
      }
      return -r - 1;
    }, this.add = function(s) {
      var h = !s.isEmpty(), n = this.pointIndex(s.start, h);
      n < 0 && (n = -n - 1);
      var i = this.pointIndex(s.end, h, n);
      return i < 0 ? i = -i - 1 : i++, this.ranges.splice(n, i - n, s);
    }, this.addList = function(s) {
      for (var h = [], n = s.length; n--; )
        h.push.apply(h, this.add(s[n]));
      return h;
    }, this.substractPoint = function(s) {
      var h = this.pointIndex(s);
      if (h >= 0)
        return this.ranges.splice(h, 1);
    }, this.merge = function() {
      var s = [], h = this.ranges;
      h = h.sort(function(c, f) {
        return u(c.start, f.start);
      });
      for (var n = h[0], i, r = 1; r < h.length; r++) {
        i = n, n = h[r];
        var l = u(i.end, n.start);
        l < 0 || l == 0 && !i.isEmpty() && !n.isEmpty() || (u(i.end, n.end) < 0 && (i.end.row = n.end.row, i.end.column = n.end.column), h.splice(r, 1), s.push(n), n = i, r--);
      }
      return this.ranges = h, s;
    }, this.contains = function(s, h) {
      return this.pointIndex({ row: s, column: h }) >= 0;
    }, this.containsPoint = function(s) {
      return this.pointIndex(s) >= 0;
    }, this.rangeAtPoint = function(s) {
      var h = this.pointIndex(s);
      if (h >= 0)
        return this.ranges[h];
    }, this.clipRows = function(s, h) {
      var n = this.ranges;
      if (n[0].start.row > h || n[n.length - 1].start.row < s)
        return [];
      var i = this.pointIndex({ row: s, column: 0 });
      i < 0 && (i = -i - 1);
      var r = this.pointIndex({ row: h, column: 0 }, i);
      r < 0 && (r = -r - 1);
      for (var l = [], c = i; c < r; c++)
        l.push(n[c]);
      return l;
    }, this.removeAll = function() {
      return this.ranges.splice(0, this.ranges.length);
    }, this.attach = function(s) {
      this.session && this.detach(), this.session = s, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange);
    }, this.detach = function() {
      this.session && (this.session.removeListener("change", this.onChange), this.session = null);
    }, this.$onChange = function(s) {
      for (var h = s.start, n = s.end, i = h.row, r = n.row, l = this.ranges, c = 0, f = l.length; c < f; c++) {
        var b = l[c];
        if (b.end.row >= i)
          break;
      }
      if (s.action == "insert")
        for (var y = r - i, x = -h.column + n.column; c < f; c++) {
          var b = l[c];
          if (b.start.row > i)
            break;
          if (b.start.row == i && b.start.column >= h.column && (b.start.column == h.column && this.$bias <= 0 || (b.start.column += x, b.start.row += y)), b.end.row == i && b.end.column >= h.column) {
            if (b.end.column == h.column && this.$bias < 0)
              continue;
            b.end.column == h.column && x > 0 && c < f - 1 && b.end.column > b.start.column && b.end.column == l[c + 1].start.column && (b.end.column -= x), b.end.column += x, b.end.row += y;
          }
        }
      else
        for (var y = i - r, x = h.column - n.column; c < f; c++) {
          var b = l[c];
          if (b.start.row > r)
            break;
          b.end.row < r && (i < b.end.row || i == b.end.row && h.column < b.end.column) ? (b.end.row = i, b.end.column = h.column) : b.end.row == r ? b.end.column <= n.column ? (y || b.end.column > h.column) && (b.end.column = h.column, b.end.row = h.row) : (b.end.column += x, b.end.row += y) : b.end.row > r && (b.end.row += y), b.start.row < r && (i < b.start.row || i == b.start.row && h.column < b.start.column) ? (b.start.row = i, b.start.column = h.column) : b.start.row == r ? b.start.column <= n.column ? (y || b.start.column > h.column) && (b.start.column = h.column, b.start.row = h.row) : (b.start.column += x, b.start.row += y) : b.start.row > r && (b.start.row += y);
        }
      if (y != 0 && c < f)
        for (; c < f; c++) {
          var b = l[c];
          b.start.row += y, b.end.row += y;
        }
    };
  }).call(o.prototype), e.RangeList = o;
});
ace.define("ace/edit_session/fold", ["require", "exports", "module", "ace/range_list", "ace/lib/oop"], function(t, e, a) {
  var d = t("../range_list").RangeList, u = t("../lib/oop"), o = e.Fold = function(r, l) {
    this.foldLine = null, this.placeholder = l, this.range = r, this.start = r.start, this.end = r.end, this.sameRow = r.start.row == r.end.row, this.subFolds = this.ranges = [];
  };
  u.inherits(o, d), function() {
    this.toString = function() {
      return '"' + this.placeholder + '" ' + this.range.toString();
    }, this.setFoldLine = function(r) {
      this.foldLine = r, this.subFolds.forEach(function(l) {
        l.setFoldLine(r);
      });
    }, this.clone = function() {
      var r = this.range.clone(), l = new o(r, this.placeholder);
      return this.subFolds.forEach(function(c) {
        l.subFolds.push(c.clone());
      }), l.collapseChildren = this.collapseChildren, l;
    }, this.addSubFold = function(r) {
      if (!this.range.isEqual(r)) {
        h(r, this.start);
        for (var y = r.start.row, x = r.start.column, l = 0, c = -1; l < this.subFolds.length && (c = this.subFolds[l].range.compare(y, x), c == 1); l++)
          ;
        var f = this.subFolds[l], b = 0;
        if (c == 0) {
          if (f.range.containsRange(r))
            return f.addSubFold(r);
          b = 1;
        }
        for (var y = r.range.end.row, x = r.range.end.column, k = l, c = -1; k < this.subFolds.length && (c = this.subFolds[k].range.compare(y, x), c == 1); k++)
          ;
        c == 0 && k++;
        for (var S = this.subFolds.splice(l, k - l, r), m = c == 0 ? S.length - 1 : S.length, v = b; v < m; v++)
          r.addSubFold(S[v]);
        return r.setFoldLine(this.foldLine), r;
      }
    }, this.restoreRange = function(r) {
      return i(r, this.start);
    };
  }.call(o.prototype);
  function s(r, l) {
    r.row -= l.row, r.row == 0 && (r.column -= l.column);
  }
  function h(r, l) {
    s(r.start, l), s(r.end, l);
  }
  function n(r, l) {
    r.row == 0 && (r.column += l.column), r.row += l.row;
  }
  function i(r, l) {
    n(r.start, l), n(r.end, l);
  }
});
ace.define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function(t, e, a) {
  var d = t("../range").Range, u = t("./fold_line").FoldLine, o = t("./fold").Fold, s = t("../token_iterator").TokenIterator;
  function h() {
    this.getFoldAt = function(n, i, r) {
      var l = this.getFoldLine(n);
      if (!l)
        return null;
      for (var c = l.folds, f = 0; f < c.length; f++) {
        var b = c[f].range;
        if (b.contains(n, i)) {
          if (r == 1 && b.isEnd(n, i) && !b.isEmpty())
            continue;
          if (r == -1 && b.isStart(n, i) && !b.isEmpty())
            continue;
          return c[f];
        }
      }
    }, this.getFoldsInRange = function(n) {
      var i = n.start, r = n.end, l = this.$foldData, c = [];
      i.column += 1, r.column -= 1;
      for (var f = 0; f < l.length; f++) {
        var b = l[f].range.compareRange(n);
        if (b != 2) {
          if (b == -2)
            break;
          for (var y = l[f].folds, x = 0; x < y.length; x++) {
            var k = y[x];
            if (b = k.range.compareRange(n), b == -2)
              break;
            if (b == 2)
              continue;
            if (b == 42)
              break;
            c.push(k);
          }
        }
      }
      return i.column -= 1, r.column += 1, c;
    }, this.getFoldsInRangeList = function(n) {
      if (Array.isArray(n)) {
        var i = [];
        n.forEach(function(r) {
          i = i.concat(this.getFoldsInRange(r));
        }, this);
      } else
        var i = this.getFoldsInRange(n);
      return i;
    }, this.getAllFolds = function() {
      for (var n = [], i = this.$foldData, r = 0; r < i.length; r++)
        for (var l = 0; l < i[r].folds.length; l++)
          n.push(i[r].folds[l]);
      return n;
    }, this.getFoldStringAt = function(n, i, r, l) {
      if (l = l || this.getFoldLine(n), !l)
        return null;
      for (var c = {
        end: { column: 0 }
      }, f, b, y = 0; y < l.folds.length; y++) {
        b = l.folds[y];
        var x = b.range.compareEnd(n, i);
        if (x == -1) {
          f = this.getLine(b.start.row).substring(c.end.column, b.start.column);
          break;
        } else if (x === 0)
          return null;
        c = b;
      }
      return f || (f = this.getLine(b.start.row).substring(c.end.column)), r == -1 ? f.substring(0, i - c.end.column) : r == 1 ? f.substring(i - c.end.column) : f;
    }, this.getFoldLine = function(n, i) {
      var r = this.$foldData, l = 0;
      for (i && (l = r.indexOf(i)), l == -1 && (l = 0), l; l < r.length; l++) {
        var c = r[l];
        if (c.start.row <= n && c.end.row >= n)
          return c;
        if (c.end.row > n)
          return null;
      }
      return null;
    }, this.getNextFoldLine = function(n, i) {
      var r = this.$foldData, l = 0;
      for (i && (l = r.indexOf(i)), l == -1 && (l = 0), l; l < r.length; l++) {
        var c = r[l];
        if (c.end.row >= n)
          return c;
      }
      return null;
    }, this.getFoldedRowCount = function(n, i) {
      for (var r = this.$foldData, l = i - n + 1, c = 0; c < r.length; c++) {
        var f = r[c], b = f.end.row, y = f.start.row;
        if (b >= i) {
          y < i && (y >= n ? l -= i - y : l = 0);
          break;
        } else b >= n && (y >= n ? l -= b - y : l -= b - n + 1);
      }
      return l;
    }, this.$addFoldLine = function(n) {
      return this.$foldData.push(n), this.$foldData.sort(function(i, r) {
        return i.start.row - r.start.row;
      }), n;
    }, this.addFold = function(n, i) {
      var r = this.$foldData, l = !1, c;
      n instanceof o ? c = n : (c = new o(i, n), c.collapseChildren = i.collapseChildren), this.$clipRangeToDocument(c.range);
      var f = c.start.row, b = c.start.column, y = c.end.row, x = c.end.column, k = this.getFoldAt(f, b, 1), S = this.getFoldAt(y, x, -1);
      if (k && S == k)
        return k.addSubFold(c);
      k && !k.range.isStart(f, b) && this.removeFold(k), S && !S.range.isEnd(y, x) && this.removeFold(S);
      var m = this.getFoldsInRange(c.range);
      m.length > 0 && (this.removeFolds(m), c.collapseChildren || m.forEach(function(w) {
        c.addSubFold(w);
      }));
      for (var v = 0; v < r.length; v++) {
        var $ = r[v];
        if (y == $.start.row) {
          $.addFold(c), l = !0;
          break;
        } else if (f == $.end.row) {
          if ($.addFold(c), l = !0, !c.sameRow) {
            var g = r[v + 1];
            if (g && g.start.row == y) {
              $.merge(g);
              break;
            }
          }
          break;
        } else if (y <= $.start.row)
          break;
      }
      return l || ($ = this.$addFoldLine(new u(this.$foldData, c))), this.$useWrapMode ? this.$updateWrapData($.start.row, $.start.row) : this.$updateRowLengthCache($.start.row, $.start.row), this.$modified = !0, this._signal("changeFold", { data: c, action: "add" }), c;
    }, this.addFolds = function(n) {
      n.forEach(function(i) {
        this.addFold(i);
      }, this);
    }, this.removeFold = function(n) {
      var i = n.foldLine, r = i.start.row, l = i.end.row, c = this.$foldData, f = i.folds;
      if (f.length == 1)
        c.splice(c.indexOf(i), 1);
      else if (i.range.isEnd(n.end.row, n.end.column))
        f.pop(), i.end.row = f[f.length - 1].end.row, i.end.column = f[f.length - 1].end.column;
      else if (i.range.isStart(n.start.row, n.start.column))
        f.shift(), i.start.row = f[0].start.row, i.start.column = f[0].start.column;
      else if (n.sameRow)
        f.splice(f.indexOf(n), 1);
      else {
        var b = i.split(n.start.row, n.start.column);
        f = b.folds, f.shift(), b.start.row = f[0].start.row, b.start.column = f[0].start.column;
      }
      this.$updating || (this.$useWrapMode ? this.$updateWrapData(r, l) : this.$updateRowLengthCache(r, l)), this.$modified = !0, this._signal("changeFold", { data: n, action: "remove" });
    }, this.removeFolds = function(n) {
      for (var i = [], r = 0; r < n.length; r++)
        i.push(n[r]);
      i.forEach(function(l) {
        this.removeFold(l);
      }, this), this.$modified = !0;
    }, this.expandFold = function(n) {
      this.removeFold(n), n.subFolds.forEach(function(i) {
        n.restoreRange(i), this.addFold(i);
      }, this), n.collapseChildren > 0 && this.foldAll(n.start.row + 1, n.end.row, n.collapseChildren - 1), n.subFolds = [];
    }, this.expandFolds = function(n) {
      n.forEach(function(i) {
        this.expandFold(i);
      }, this);
    }, this.unfold = function(n, i) {
      var r, l;
      if (n == null ? (r = new d(0, 0, this.getLength(), 0), i == null && (i = !0)) : typeof n == "number" ? r = new d(n, 0, n, this.getLine(n).length) : "row" in n ? r = d.fromPoints(n, n) : r = n, l = this.getFoldsInRangeList(r), i != !1 ? this.removeFolds(l) : this.expandFolds(l), l.length)
        return l;
    }, this.isRowFolded = function(n, i) {
      return !!this.getFoldLine(n, i);
    }, this.getRowFoldEnd = function(n, i) {
      var r = this.getFoldLine(n, i);
      return r ? r.end.row : n;
    }, this.getRowFoldStart = function(n, i) {
      var r = this.getFoldLine(n, i);
      return r ? r.start.row : n;
    }, this.getFoldDisplayLine = function(n, i, r, l, c) {
      l == null && (l = n.start.row), c == null && (c = 0), i == null && (i = n.end.row), r == null && (r = this.getLine(i).length);
      var f = this.doc, b = "";
      return n.walk(function(y, x, k, S) {
        if (!(x < l)) {
          if (x == l) {
            if (k < c)
              return;
            S = Math.max(c, S);
          }
          y != null ? b += y : b += f.getLine(x).substring(S, k);
        }
      }, i, r), b;
    }, this.getDisplayLine = function(n, i, r, l) {
      var c = this.getFoldLine(n);
      if (c)
        return this.getFoldDisplayLine(
          c,
          n,
          i,
          r,
          l
        );
      var f;
      return f = this.doc.getLine(n), f.substring(l || 0, i || f.length);
    }, this.$cloneFoldData = function() {
      var n = [];
      return n = this.$foldData.map(function(i) {
        var r = i.folds.map(function(l) {
          return l.clone();
        });
        return new u(n, r);
      }), n;
    }, this.toggleFold = function(n) {
      var i = this.selection, r = i.getRange(), l, c;
      if (r.isEmpty()) {
        var f = r.start;
        if (l = this.getFoldAt(f.row, f.column), l) {
          this.expandFold(l);
          return;
        } else (c = this.findMatchingBracket(f)) ? r.comparePoint(c) == 1 ? r.end = c : (r.start = c, r.start.column++, r.end.column--) : (c = this.findMatchingBracket({ row: f.row, column: f.column + 1 })) ? (r.comparePoint(c) == 1 ? r.end = c : r.start = c, r.start.column++) : r = this.getCommentFoldRange(f.row, f.column) || r;
      } else {
        var b = this.getFoldsInRange(r);
        if (n && b.length) {
          this.expandFolds(b);
          return;
        } else b.length == 1 && (l = b[0]);
      }
      if (l || (l = this.getFoldAt(r.start.row, r.start.column)), l && l.range.toString() == r.toString()) {
        this.expandFold(l);
        return;
      }
      var y = "...";
      if (!r.isMultiLine()) {
        if (y = this.getTextRange(r), y.length < 4)
          return;
        y = y.trim().substring(0, 2) + "..";
      }
      this.addFold(y, r);
    }, this.getCommentFoldRange = function(n, i, r) {
      var l = new s(this, n, i), c = l.getCurrentToken(), f = c && c.type;
      if (c && /^comment|string/.test(f)) {
        f = f.match(/comment|string/)[0], f == "comment" && (f += "|doc-start");
        var b = new RegExp(f), y = new d();
        if (r != 1) {
          do
            c = l.stepBackward();
          while (c && b.test(c.type));
          l.stepForward();
        }
        if (y.start.row = l.getCurrentTokenRow(), y.start.column = l.getCurrentTokenColumn() + 2, l = new s(this, n, i), r != -1) {
          var x = -1;
          do
            if (c = l.stepForward(), x == -1) {
              var k = this.getState(l.$row);
              b.test(k) || (x = l.$row);
            } else if (l.$row > x)
              break;
          while (c && b.test(c.type));
          c = l.stepBackward();
        } else
          c = l.getCurrentToken();
        return y.end.row = l.getCurrentTokenRow(), y.end.column = l.getCurrentTokenColumn() + c.value.length - 2, y;
      }
    }, this.foldAll = function(n, i, r, l) {
      r == null && (r = 1e5);
      var c = this.foldWidgets;
      if (c) {
        i = i || this.getLength(), n = n || 0;
        for (var f = n; f < i; f++)
          if (c[f] == null && (c[f] = this.getFoldWidget(f)), c[f] == "start" && !(l && !l(f))) {
            var b = this.getFoldWidgetRange(f);
            b && b.isMultiLine() && b.end.row <= i && b.start.row >= n && (f = b.end.row, b.collapseChildren = r, this.addFold("...", b));
          }
      }
    }, this.foldToLevel = function(n) {
      for (this.foldAll(); n-- > 0; )
        this.unfold(null, !1);
    }, this.foldAllComments = function() {
      var n = this;
      this.foldAll(null, null, null, function(i) {
        for (var r = n.getTokens(i), l = 0; l < r.length; l++) {
          var c = r[l];
          if (!(c.type == "text" && /^\s+$/.test(c.value)))
            return !!/comment/.test(c.type);
        }
      });
    }, this.$foldStyles = {
      manual: 1,
      markbegin: 1,
      markbeginend: 1
    }, this.$foldStyle = "markbegin", this.setFoldStyle = function(n) {
      if (!this.$foldStyles[n])
        throw new Error("invalid fold style: " + n + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
      if (this.$foldStyle != n) {
        this.$foldStyle = n, n == "manual" && this.unfold();
        var i = this.$foldMode;
        this.$setFolding(null), this.$setFolding(i);
      }
    }, this.$setFolding = function(n) {
      if (this.$foldMode != n) {
        if (this.$foldMode = n, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), !n || this.$foldStyle == "manual") {
          this.foldWidgets = null;
          return;
        }
        this.foldWidgets = [], this.getFoldWidget = n.getFoldWidget.bind(n, this, this.$foldStyle), this.getFoldWidgetRange = n.getFoldWidgetRange.bind(n, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
      }
    }, this.getParentFoldRangeData = function(n, i) {
      var r = this.foldWidgets;
      if (!r || i && r[n])
        return {};
      for (var l = n - 1, c; l >= 0; ) {
        var f = r[l];
        if (f == null && (f = r[l] = this.getFoldWidget(l)), f == "start") {
          var b = this.getFoldWidgetRange(l);
          if (c || (c = b), b && b.end.row >= n)
            break;
        }
        l--;
      }
      return {
        range: l !== -1 && b,
        firstRange: c
      };
    }, this.onFoldWidgetClick = function(n, i) {
      i = i.domEvent;
      var r = {
        children: i.shiftKey,
        all: i.ctrlKey || i.metaKey,
        siblings: i.altKey
      }, l = this.$toggleFoldWidget(n, r);
      if (!l) {
        var c = i.target || i.srcElement;
        c && /ace_fold-widget/.test(c.className) && (c.className += " ace_invalid");
      }
    }, this.$toggleFoldWidget = function(n, i) {
      if (this.getFoldWidget) {
        var r = this.getFoldWidget(n), l = this.getLine(n), c = r === "end" ? -1 : 1, f = this.getFoldAt(n, c === -1 ? 0 : l.length, c);
        if (f)
          return i.children || i.all ? this.removeFold(f) : this.expandFold(f), f;
        var b = this.getFoldWidgetRange(n, !0);
        if (b && !b.isMultiLine() && (f = this.getFoldAt(b.start.row, b.start.column, 1), f && b.isEqual(f.range)))
          return this.removeFold(f), f;
        if (i.siblings) {
          var y = this.getParentFoldRangeData(n);
          if (y.range)
            var x = y.range.start.row + 1, k = y.range.end.row;
          this.foldAll(x, k, i.all ? 1e4 : 0);
        } else i.children ? (k = b ? b.end.row : this.getLength(), this.foldAll(n + 1, k, i.all ? 1e4 : 0)) : b && (i.all && (b.collapseChildren = 1e4), this.addFold("...", b));
        return b;
      }
    }, this.toggleFoldWidget = function(n) {
      var i = this.selection.getCursor().row;
      i = this.getRowFoldStart(i);
      var r = this.$toggleFoldWidget(i, {});
      if (!r) {
        var l = this.getParentFoldRangeData(i, !0);
        if (r = l.range || l.firstRange, r) {
          i = r.start.row;
          var c = this.getFoldAt(i, this.getLine(i).length, 1);
          c ? this.removeFold(c) : this.addFold("...", r);
        }
      }
    }, this.updateFoldWidgets = function(n) {
      var i = n.start.row, r = n.end.row - i;
      if (r === 0)
        this.foldWidgets[i] = null;
      else if (n.action == "remove")
        this.foldWidgets.splice(i, r + 1, null);
      else {
        var l = Array(r + 1);
        l.unshift(i, 1), this.foldWidgets.splice.apply(this.foldWidgets, l);
      }
    }, this.tokenizerUpdateFoldWidgets = function(n) {
      var i = n.data;
      i.first != i.last && this.foldWidgets.length > i.first && this.foldWidgets.splice(i.first, this.foldWidgets.length);
    };
  }
  e.Folding = h;
});
ace.define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(t, e, a) {
  var d = t("../token_iterator").TokenIterator, u = t("../range").Range;
  function o() {
    this.findMatchingBracket = function(s, h) {
      if (s.column == 0) return null;
      var n = h || this.getLine(s.row).charAt(s.column - 1);
      if (n == "") return null;
      var i = n.match(/([\(\[\{])|([\)\]\}])/);
      return i ? i[1] ? this.$findClosingBracket(i[1], s) : this.$findOpeningBracket(i[2], s) : null;
    }, this.getBracketRange = function(s) {
      var h = this.getLine(s.row), n = !0, i, r = h.charAt(s.column - 1), l = r && r.match(/([\(\[\{])|([\)\]\}])/);
      if (l || (r = h.charAt(s.column), s = { row: s.row, column: s.column + 1 }, l = r && r.match(/([\(\[\{])|([\)\]\}])/), n = !1), !l)
        return null;
      if (l[1]) {
        var c = this.$findClosingBracket(l[1], s);
        if (!c)
          return null;
        i = u.fromPoints(s, c), n || (i.end.column++, i.start.column--), i.cursor = i.end;
      } else {
        var c = this.$findOpeningBracket(l[2], s);
        if (!c)
          return null;
        i = u.fromPoints(c, s), n || (i.start.column++, i.end.column--), i.cursor = i.start;
      }
      return i;
    }, this.getMatchingBracketRanges = function(s) {
      var h = this.getLine(s.row), n = h.charAt(s.column - 1), i = n && n.match(/([\(\[\{])|([\)\]\}])/);
      if (i || (n = h.charAt(s.column), s = { row: s.row, column: s.column + 1 }, i = n && n.match(/([\(\[\{])|([\)\]\}])/)), !i)
        return null;
      var r = new u(s.row, s.column - 1, s.row, s.column), l = i[1] ? this.$findClosingBracket(i[1], s) : this.$findOpeningBracket(i[2], s);
      if (!l)
        return [r];
      var c = new u(l.row, l.column, l.row, l.column + 1);
      return [r, c];
    }, this.$brackets = {
      ")": "(",
      "(": ")",
      "]": "[",
      "[": "]",
      "{": "}",
      "}": "{",
      "<": ">",
      ">": "<"
    }, this.$findOpeningBracket = function(s, h, n) {
      var i = this.$brackets[s], r = 1, l = new d(this, h.row, h.column), c = l.getCurrentToken();
      if (c || (c = l.stepForward()), !!c) {
        n || (n = new RegExp(
          "(\\.?" + c.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"
        ));
        for (var f = h.column - l.getCurrentTokenColumn() - 2, b = c.value; ; ) {
          for (; f >= 0; ) {
            var y = b.charAt(f);
            if (y == i) {
              if (r -= 1, r == 0)
                return {
                  row: l.getCurrentTokenRow(),
                  column: f + l.getCurrentTokenColumn()
                };
            } else y == s && (r += 1);
            f -= 1;
          }
          do
            c = l.stepBackward();
          while (c && !n.test(c.type));
          if (c == null)
            break;
          b = c.value, f = b.length - 1;
        }
        return null;
      }
    }, this.$findClosingBracket = function(s, h, n) {
      var i = this.$brackets[s], r = 1, l = new d(this, h.row, h.column), c = l.getCurrentToken();
      if (c || (c = l.stepForward()), !!c) {
        n || (n = new RegExp(
          "(\\.?" + c.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"
        ));
        for (var f = h.column - l.getCurrentTokenColumn(); ; ) {
          for (var b = c.value, y = b.length; f < y; ) {
            var x = b.charAt(f);
            if (x == i) {
              if (r -= 1, r == 0)
                return {
                  row: l.getCurrentTokenRow(),
                  column: f + l.getCurrentTokenColumn()
                };
            } else x == s && (r += 1);
            f += 1;
          }
          do
            c = l.stepForward();
          while (c && !n.test(c.type));
          if (c == null)
            break;
          f = 0;
        }
        return null;
      }
    };
  }
  e.BracketMatch = o;
});
ace.define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(t, e, a) {
  var d = t("./lib/oop"), u = t("./lib/lang"), o = t("./bidihandler").BidiHandler, s = t("./config"), h = t("./lib/event_emitter").EventEmitter, n = t("./selection").Selection, i = t("./mode/text").Mode, r = t("./range").Range, l = t("./document").Document, c = t("./background_tokenizer").BackgroundTokenizer, f = t("./search_highlight").SearchHighlight, b = function(y, x) {
    this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++b.$uid, this.$foldData.toString = function() {
      return this.join(`
`);
    }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), (typeof y != "object" || !y.getLine) && (y = new l(y)), this.setDocument(y), this.selection = new n(this), this.$bidiHandler = new o(this), s.resetOptions(this), this.setMode(x), s._signal("session", this);
  };
  b.$uid = 0, function() {
    d.implement(this, h), this.setDocument = function(p) {
      this.doc && this.doc.removeListener("change", this.$onChange), this.doc = p, p.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches();
    }, this.getDocument = function() {
      return this.doc;
    }, this.$resetRowCache = function(p) {
      if (!p) {
        this.$docRowCache = [], this.$screenRowCache = [];
        return;
      }
      var C = this.$docRowCache.length, A = this.$getRowCacheIndex(this.$docRowCache, p) + 1;
      C > A && (this.$docRowCache.splice(A, C), this.$screenRowCache.splice(A, C));
    }, this.$getRowCacheIndex = function(p, C) {
      for (var A = 0, _ = p.length - 1; A <= _; ) {
        var E = A + _ >> 1, I = p[E];
        if (C > I)
          A = E + 1;
        else if (C < I)
          _ = E - 1;
        else
          return E;
      }
      return A - 1;
    }, this.resetCaches = function() {
      this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0);
    }, this.onChangeFold = function(p) {
      var C = p.data;
      this.$resetRowCache(C.start.row);
    }, this.onChange = function(p) {
      this.$modified = !0, this.$bidiHandler.onChange(p), this.$resetRowCache(p.start.row);
      var C = this.$updateInternalDataOnChange(p);
      !this.$fromUndo && this.$undoManager && (C && C.length && (this.$undoManager.add({
        action: "removeFolds",
        folds: C
      }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(p, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(p), this._signal("change", p);
    }, this.setValue = function(p) {
      this.doc.setValue(p), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset();
    }, this.getValue = this.toString = function() {
      return this.doc.getValue();
    }, this.getSelection = function() {
      return this.selection;
    }, this.getState = function(p) {
      return this.bgTokenizer.getState(p);
    }, this.getTokens = function(p) {
      return this.bgTokenizer.getTokens(p);
    }, this.getTokenAt = function(p, C) {
      var A = this.bgTokenizer.getTokens(p), _, E = 0;
      if (C == null) {
        var I = A.length - 1;
        E = this.getLine(p).length;
      } else
        for (var I = 0; I < A.length && (E += A[I].value.length, !(E >= C)); I++)
          ;
      return _ = A[I], _ ? (_.index = I, _.start = E - _.value.length, _) : null;
    }, this.setUndoManager = function(p) {
      if (this.$undoManager = p, this.$informUndoManager && this.$informUndoManager.cancel(), p) {
        var C = this;
        p.addSession(this), this.$syncInformUndoManager = function() {
          C.$informUndoManager.cancel(), C.mergeUndoDeltas = !1;
        }, this.$informUndoManager = u.delayedCall(this.$syncInformUndoManager);
      } else
        this.$syncInformUndoManager = function() {
        };
    }, this.markUndoGroup = function() {
      this.$syncInformUndoManager && this.$syncInformUndoManager();
    }, this.$defaultUndoManager = {
      undo: function() {
      },
      redo: function() {
      },
      hasUndo: function() {
      },
      hasRedo: function() {
      },
      reset: function() {
      },
      add: function() {
      },
      addSelection: function() {
      },
      startNewGroup: function() {
      },
      addSession: function() {
      }
    }, this.getUndoManager = function() {
      return this.$undoManager || this.$defaultUndoManager;
    }, this.getTabString = function() {
      return this.getUseSoftTabs() ? u.stringRepeat(" ", this.getTabSize()) : "	";
    }, this.setUseSoftTabs = function(p) {
      this.setOption("useSoftTabs", p);
    }, this.getUseSoftTabs = function() {
      return this.$useSoftTabs && !this.$mode.$indentWithTabs;
    }, this.setTabSize = function(p) {
      this.setOption("tabSize", p);
    }, this.getTabSize = function() {
      return this.$tabSize;
    }, this.isTabStop = function(p) {
      return this.$useSoftTabs && p.column % this.$tabSize === 0;
    }, this.setNavigateWithinSoftTabs = function(p) {
      this.setOption("navigateWithinSoftTabs", p);
    }, this.getNavigateWithinSoftTabs = function() {
      return this.$navigateWithinSoftTabs;
    }, this.$overwrite = !1, this.setOverwrite = function(p) {
      this.setOption("overwrite", p);
    }, this.getOverwrite = function() {
      return this.$overwrite;
    }, this.toggleOverwrite = function() {
      this.setOverwrite(!this.$overwrite);
    }, this.addGutterDecoration = function(p, C) {
      this.$decorations[p] || (this.$decorations[p] = ""), this.$decorations[p] += " " + C, this._signal("changeBreakpoint", {});
    }, this.removeGutterDecoration = function(p, C) {
      this.$decorations[p] = (this.$decorations[p] || "").replace(" " + C, ""), this._signal("changeBreakpoint", {});
    }, this.getBreakpoints = function() {
      return this.$breakpoints;
    }, this.setBreakpoints = function(p) {
      this.$breakpoints = [];
      for (var C = 0; C < p.length; C++)
        this.$breakpoints[p[C]] = "ace_breakpoint";
      this._signal("changeBreakpoint", {});
    }, this.clearBreakpoints = function() {
      this.$breakpoints = [], this._signal("changeBreakpoint", {});
    }, this.setBreakpoint = function(p, C) {
      C === void 0 && (C = "ace_breakpoint"), C ? this.$breakpoints[p] = C : delete this.$breakpoints[p], this._signal("changeBreakpoint", {});
    }, this.clearBreakpoint = function(p) {
      delete this.$breakpoints[p], this._signal("changeBreakpoint", {});
    }, this.addMarker = function(p, C, A, _) {
      var E = this.$markerId++, I = {
        range: p,
        type: A || "line",
        renderer: typeof A == "function" ? A : null,
        clazz: C,
        inFront: !!_,
        id: E
      };
      return _ ? (this.$frontMarkers[E] = I, this._signal("changeFrontMarker")) : (this.$backMarkers[E] = I, this._signal("changeBackMarker")), E;
    }, this.addDynamicMarker = function(p, C) {
      if (p.update) {
        var A = this.$markerId++;
        return p.id = A, p.inFront = !!C, C ? (this.$frontMarkers[A] = p, this._signal("changeFrontMarker")) : (this.$backMarkers[A] = p, this._signal("changeBackMarker")), p;
      }
    }, this.removeMarker = function(p) {
      var C = this.$frontMarkers[p] || this.$backMarkers[p];
      if (C) {
        var A = C.inFront ? this.$frontMarkers : this.$backMarkers;
        delete A[p], this._signal(C.inFront ? "changeFrontMarker" : "changeBackMarker");
      }
    }, this.getMarkers = function(p) {
      return p ? this.$frontMarkers : this.$backMarkers;
    }, this.highlight = function(p) {
      if (!this.$searchHighlight) {
        var C = new f(null, "ace_selected-word", "text");
        this.$searchHighlight = this.addDynamicMarker(C);
      }
      this.$searchHighlight.setRegexp(p);
    }, this.highlightLines = function(p, C, A, _) {
      typeof C != "number" && (A = C, C = p), A || (A = "ace_step");
      var E = new r(p, 0, C, 1 / 0);
      return E.id = this.addMarker(E, A, "fullLine", _), E;
    }, this.setAnnotations = function(p) {
      this.$annotations = p, this._signal("changeAnnotation", {});
    }, this.getAnnotations = function() {
      return this.$annotations || [];
    }, this.clearAnnotations = function() {
      this.setAnnotations([]);
    }, this.$detectNewLine = function(p) {
      var C = p.match(/^.*?(\r?\n)/m);
      C ? this.$autoNewLine = C[1] : this.$autoNewLine = `
`;
    }, this.getWordRange = function(p, C) {
      var A = this.getLine(p), _ = !1;
      if (C > 0 && (_ = !!A.charAt(C - 1).match(this.tokenRe)), _ || (_ = !!A.charAt(C).match(this.tokenRe)), _)
        var E = this.tokenRe;
      else if (/^\s+$/.test(A.slice(C - 1, C + 1)))
        var E = /\s/;
      else
        var E = this.nonTokenRe;
      var I = C;
      if (I > 0) {
        do
          I--;
        while (I >= 0 && A.charAt(I).match(E));
        I++;
      }
      for (var L = C; L < A.length && A.charAt(L).match(E); )
        L++;
      return new r(p, I, p, L);
    }, this.getAWordRange = function(p, C) {
      for (var A = this.getWordRange(p, C), _ = this.getLine(A.end.row); _.charAt(A.end.column).match(/[ \t]/); )
        A.end.column += 1;
      return A;
    }, this.setNewLineMode = function(p) {
      this.doc.setNewLineMode(p);
    }, this.getNewLineMode = function() {
      return this.doc.getNewLineMode();
    }, this.setUseWorker = function(p) {
      this.setOption("useWorker", p);
    }, this.getUseWorker = function() {
      return this.$useWorker;
    }, this.onReloadTokenizer = function(p) {
      var C = p.data;
      this.bgTokenizer.start(C.first), this._signal("tokenizerUpdate", p);
    }, this.$modes = s.$modes, this.$mode = null, this.$modeId = null, this.setMode = function(p, C) {
      if (p && typeof p == "object") {
        if (p.getTokenizer)
          return this.$onChangeMode(p);
        var A = p, _ = A.path;
      } else
        _ = p || "ace/mode/text";
      if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new i()), this.$modes[_] && !A) {
        this.$onChangeMode(this.$modes[_]), C && C();
        return;
      }
      this.$modeId = _, s.loadModule(["mode", _], function(E) {
        if (this.$modeId !== _)
          return C && C();
        this.$modes[_] && !A ? this.$onChangeMode(this.$modes[_]) : E && E.Mode && (E = new E.Mode(A), A || (this.$modes[_] = E, E.$id = _), this.$onChangeMode(E)), C && C();
      }.bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0);
    }, this.$onChangeMode = function(p, C) {
      if (C || (this.$modeId = p.$id), this.$mode !== p) {
        var A = this.$mode;
        this.$mode = p, this.$stopWorker(), this.$useWorker && this.$startWorker();
        var _ = p.getTokenizer();
        if (_.on !== void 0) {
          var E = this.onReloadTokenizer.bind(this);
          _.on("update", E);
        }
        if (this.bgTokenizer)
          this.bgTokenizer.setTokenizer(_);
        else {
          this.bgTokenizer = new c(_);
          var I = this;
          this.bgTokenizer.on("update", function(L) {
            I._signal("tokenizerUpdate", L);
          });
        }
        this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = p.tokenRe, this.nonTokenRe = p.nonTokenRe, C || (p.attachToSession && p.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(p.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode", { oldMode: A, mode: p }));
      }
    }, this.$stopWorker = function() {
      this.$worker && (this.$worker.terminate(), this.$worker = null);
    }, this.$startWorker = function() {
      try {
        this.$worker = this.$mode.createWorker(this);
      } catch (p) {
        s.warn("Could not load worker", p), this.$worker = null;
      }
    }, this.getMode = function() {
      return this.$mode;
    }, this.$scrollTop = 0, this.setScrollTop = function(p) {
      this.$scrollTop === p || isNaN(p) || (this.$scrollTop = p, this._signal("changeScrollTop", p));
    }, this.getScrollTop = function() {
      return this.$scrollTop;
    }, this.$scrollLeft = 0, this.setScrollLeft = function(p) {
      this.$scrollLeft === p || isNaN(p) || (this.$scrollLeft = p, this._signal("changeScrollLeft", p));
    }, this.getScrollLeft = function() {
      return this.$scrollLeft;
    }, this.getScreenWidth = function() {
      return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth;
    }, this.getLineWidgetMaxWidth = function() {
      if (this.lineWidgetsWidth != null) return this.lineWidgetsWidth;
      var p = 0;
      return this.lineWidgets.forEach(function(C) {
        C && C.screenWidth > p && (p = C.screenWidth);
      }), this.lineWidgetWidth = p;
    }, this.$computeWidth = function(p) {
      if (this.$modified || p) {
        if (this.$modified = !1, this.$useWrapMode)
          return this.screenWidth = this.$wrapLimit;
        for (var C = this.doc.getAllLines(), A = this.$rowLengthCache, _ = 0, E = 0, I = this.$foldData[E], L = I ? I.start.row : 1 / 0, D = C.length, R = 0; R < D; R++) {
          if (R > L) {
            if (R = I.end.row + 1, R >= D)
              break;
            I = this.$foldData[E++], L = I ? I.start.row : 1 / 0;
          }
          A[R] == null && (A[R] = this.$getStringScreenWidth(C[R])[0]), A[R] > _ && (_ = A[R]);
        }
        this.screenWidth = _;
      }
    }, this.getLine = function(p) {
      return this.doc.getLine(p);
    }, this.getLines = function(p, C) {
      return this.doc.getLines(p, C);
    }, this.getLength = function() {
      return this.doc.getLength();
    }, this.getTextRange = function(p) {
      return this.doc.getTextRange(p || this.selection.getRange());
    }, this.insert = function(p, C) {
      return this.doc.insert(p, C);
    }, this.remove = function(p) {
      return this.doc.remove(p);
    }, this.removeFullLines = function(p, C) {
      return this.doc.removeFullLines(p, C);
    }, this.undoChanges = function(p, C) {
      if (p.length) {
        this.$fromUndo = !0;
        for (var A = p.length - 1; A != -1; A--) {
          var _ = p[A];
          _.action == "insert" || _.action == "remove" ? this.doc.revertDelta(_) : _.folds && this.addFolds(_.folds);
        }
        !C && this.$undoSelect && (p.selectionBefore ? this.selection.fromJSON(p.selectionBefore) : this.selection.setRange(this.$getUndoSelection(p, !0))), this.$fromUndo = !1;
      }
    }, this.redoChanges = function(p, C) {
      if (p.length) {
        this.$fromUndo = !0;
        for (var A = 0; A < p.length; A++) {
          var _ = p[A];
          (_.action == "insert" || _.action == "remove") && this.doc.$safeApplyDelta(_);
        }
        !C && this.$undoSelect && (p.selectionAfter ? this.selection.fromJSON(p.selectionAfter) : this.selection.setRange(this.$getUndoSelection(p, !1))), this.$fromUndo = !1;
      }
    }, this.setUndoSelect = function(p) {
      this.$undoSelect = p;
    }, this.$getUndoSelection = function(p, C) {
      function A(D) {
        return C ? D.action !== "insert" : D.action === "insert";
      }
      for (var _, E, I = 0; I < p.length; I++) {
        var L = p[I];
        if (L.start) {
          if (!_) {
            A(L) ? _ = r.fromPoints(L.start, L.end) : _ = r.fromPoints(L.start, L.start);
            continue;
          }
          A(L) ? (E = L.start, _.compare(E.row, E.column) == -1 && _.setStart(E), E = L.end, _.compare(E.row, E.column) == 1 && _.setEnd(E)) : (E = L.start, _.compare(E.row, E.column) == -1 && (_ = r.fromPoints(L.start, L.start)));
        }
      }
      return _;
    }, this.replace = function(p, C) {
      return this.doc.replace(p, C);
    }, this.moveText = function(p, C, A) {
      var _ = this.getTextRange(p), E = this.getFoldsInRange(p), I = r.fromPoints(C, C);
      if (!A) {
        this.remove(p);
        var L = p.start.row - p.end.row, D = L ? -p.end.column : p.start.column - p.end.column;
        D && (I.start.row == p.end.row && I.start.column > p.end.column && (I.start.column += D), I.end.row == p.end.row && I.end.column > p.end.column && (I.end.column += D)), L && I.start.row >= p.end.row && (I.start.row += L, I.end.row += L);
      }
      if (I.end = this.insert(I.start, _), E.length) {
        var R = p.start, N = I.start, L = N.row - R.row, D = N.column - R.column;
        this.addFolds(E.map(function(z) {
          return z = z.clone(), z.start.row == R.row && (z.start.column += D), z.end.row == R.row && (z.end.column += D), z.start.row += L, z.end.row += L, z;
        }));
      }
      return I;
    }, this.indentRows = function(p, C, A) {
      A = A.replace(/\t/g, this.getTabString());
      for (var _ = p; _ <= C; _++)
        this.doc.insertInLine({ row: _, column: 0 }, A);
    }, this.outdentRows = function(p) {
      for (var C = p.collapseRows(), A = new r(0, 0, 0, 0), _ = this.getTabSize(), E = C.start.row; E <= C.end.row; ++E) {
        var I = this.getLine(E);
        A.start.row = E, A.end.row = E;
        for (var L = 0; L < _ && I.charAt(L) == " "; ++L)
          ;
        L < _ && I.charAt(L) == "	" ? (A.start.column = L, A.end.column = L + 1) : (A.start.column = 0, A.end.column = L), this.remove(A);
      }
    }, this.$moveLines = function(p, C, A) {
      if (p = this.getRowFoldStart(p), C = this.getRowFoldEnd(C), A < 0) {
        var _ = this.getRowFoldStart(p + A);
        if (_ < 0) return 0;
        var E = _ - p;
      } else if (A > 0) {
        var _ = this.getRowFoldEnd(C + A);
        if (_ > this.doc.getLength() - 1) return 0;
        var E = _ - C;
      } else {
        p = this.$clipRowToDocument(p), C = this.$clipRowToDocument(C);
        var E = C - p + 1;
      }
      var I = new r(p, 0, C, Number.MAX_VALUE), L = this.getFoldsInRange(I).map(function(R) {
        return R = R.clone(), R.start.row += E, R.end.row += E, R;
      }), D = A == 0 ? this.doc.getLines(p, C) : this.doc.removeFullLines(p, C);
      return this.doc.insertFullLines(p + E, D), L.length && this.addFolds(L), E;
    }, this.moveLinesUp = function(p, C) {
      return this.$moveLines(p, C, -1);
    }, this.moveLinesDown = function(p, C) {
      return this.$moveLines(p, C, 1);
    }, this.duplicateLines = function(p, C) {
      return this.$moveLines(p, C, 0);
    }, this.$clipRowToDocument = function(p) {
      return Math.max(0, Math.min(p, this.doc.getLength() - 1));
    }, this.$clipColumnToRow = function(p, C) {
      return C < 0 ? 0 : Math.min(this.doc.getLine(p).length, C);
    }, this.$clipPositionToDocument = function(p, C) {
      if (C = Math.max(0, C), p < 0)
        p = 0, C = 0;
      else {
        var A = this.doc.getLength();
        p >= A ? (p = A - 1, C = this.doc.getLine(A - 1).length) : C = Math.min(this.doc.getLine(p).length, C);
      }
      return {
        row: p,
        column: C
      };
    }, this.$clipRangeToDocument = function(p) {
      p.start.row < 0 ? (p.start.row = 0, p.start.column = 0) : p.start.column = this.$clipColumnToRow(
        p.start.row,
        p.start.column
      );
      var C = this.doc.getLength() - 1;
      return p.end.row > C ? (p.end.row = C, p.end.column = this.doc.getLine(C).length) : p.end.column = this.$clipColumnToRow(
        p.end.row,
        p.end.column
      ), p;
    }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
      min: null,
      max: null
    }, this.setUseWrapMode = function(p) {
      if (p != this.$useWrapMode) {
        if (this.$useWrapMode = p, this.$modified = !0, this.$resetRowCache(0), p) {
          var C = this.getLength();
          this.$wrapData = Array(C), this.$updateWrapData(0, C - 1);
        }
        this._signal("changeWrapMode");
      }
    }, this.getUseWrapMode = function() {
      return this.$useWrapMode;
    }, this.setWrapLimitRange = function(p, C) {
      (this.$wrapLimitRange.min !== p || this.$wrapLimitRange.max !== C) && (this.$wrapLimitRange = { min: p, max: C }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"));
    }, this.adjustWrapLimit = function(p, C) {
      var A = this.$wrapLimitRange;
      A.max < 0 && (A = { min: C, max: C });
      var _ = this.$constrainWrapLimit(p, A.min, A.max);
      return _ != this.$wrapLimit && _ > 1 ? (this.$wrapLimit = _, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0) : !1;
    }, this.$constrainWrapLimit = function(p, C, A) {
      return C && (p = Math.max(C, p)), A && (p = Math.min(A, p)), p;
    }, this.getWrapLimit = function() {
      return this.$wrapLimit;
    }, this.setWrapLimit = function(p) {
      this.setWrapLimitRange(p, p);
    }, this.getWrapLimitRange = function() {
      return {
        min: this.$wrapLimitRange.min,
        max: this.$wrapLimitRange.max
      };
    }, this.$updateInternalDataOnChange = function(p) {
      var C = this.$useWrapMode, A = p.action, _ = p.start, E = p.end, I = _.row, L = E.row, D = L - I, R = null;
      if (this.$updating = !0, D != 0)
        if (A === "remove") {
          this[C ? "$wrapData" : "$rowLengthCache"].splice(I, D);
          var N = this.$foldData;
          R = this.getFoldsInRange(p), this.removeFolds(R);
          var O = this.getFoldLine(E.row), P = 0;
          if (O) {
            O.addRemoveChars(E.row, E.column, _.column - E.column), O.shiftRow(-D);
            var z = this.getFoldLine(I);
            z && z !== O && (z.merge(O), O = z), P = N.indexOf(O) + 1;
          }
          for (P; P < N.length; P++) {
            var O = N[P];
            O.start.row >= E.row && O.shiftRow(-D);
          }
          L = I;
        } else {
          var M = Array(D);
          M.unshift(I, 0);
          var B = C ? this.$wrapData : this.$rowLengthCache;
          B.splice.apply(B, M);
          var N = this.$foldData, O = this.getFoldLine(I), P = 0;
          if (O) {
            var V = O.range.compareInside(_.row, _.column);
            V == 0 ? (O = O.split(_.row, _.column), O && (O.shiftRow(D), O.addRemoveChars(L, 0, E.column - _.column))) : V == -1 && (O.addRemoveChars(I, 0, E.column - _.column), O.shiftRow(D)), P = N.indexOf(O) + 1;
          }
          for (P; P < N.length; P++) {
            var O = N[P];
            O.start.row >= I && O.shiftRow(D);
          }
        }
      else {
        D = Math.abs(p.start.column - p.end.column), A === "remove" && (R = this.getFoldsInRange(p), this.removeFolds(R), D = -D);
        var O = this.getFoldLine(I);
        O && O.addRemoveChars(I, _.column, D);
      }
      return C && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, C ? this.$updateWrapData(I, L) : this.$updateRowLengthCache(I, L), R;
    }, this.$updateRowLengthCache = function(p, C, A) {
      this.$rowLengthCache[p] = null, this.$rowLengthCache[C] = null;
    }, this.$updateWrapData = function(p, C) {
      var A = this.doc.getAllLines(), _ = this.getTabSize(), E = this.$wrapData, I = this.$wrapLimit, L, D, R = p;
      for (C = Math.min(C, A.length - 1); R <= C; )
        D = this.getFoldLine(R, D), D ? (L = [], D.walk(
          function(N, O, P, z) {
            var M;
            if (N != null) {
              M = this.$getDisplayTokens(
                N,
                L.length
              ), M[0] = k;
              for (var B = 1; B < M.length; B++)
                M[B] = S;
            } else
              M = this.$getDisplayTokens(
                A[O].substring(z, P),
                L.length
              );
            L = L.concat(M);
          }.bind(this),
          D.end.row,
          A[D.end.row].length + 1
        ), E[D.start.row] = this.$computeWrapSplits(L, I, _), R = D.end.row + 1) : (L = this.$getDisplayTokens(A[R]), E[R] = this.$computeWrapSplits(L, I, _), R++);
    };
    var y = 1, x = 2, k = 3, S = 4, m = 9, v = 10, $ = 11, g = 12;
    this.$computeWrapSplits = function(p, C, A) {
      if (p.length == 0)
        return [];
      var _ = [], E = p.length, I = 0, L = 0, D = this.$wrapAsCode, R = this.$indentedSoftWrap, N = C <= Math.max(2 * A, 8) || R === !1 ? 0 : Math.floor(C / 2);
      function O() {
        var V = 0;
        if (N === 0)
          return V;
        if (R)
          for (var U = 0; U < p.length; U++) {
            var q = p[U];
            if (q == v)
              V += 1;
            else if (q == $)
              V += A;
            else {
              if (q == g)
                continue;
              break;
            }
          }
        return D && R !== !1 && (V += A), Math.min(V, N);
      }
      function P(V) {
        for (var U = V - I, q = I; q < V; q++) {
          var Y = p[q];
          (Y === 12 || Y === 2) && (U -= 1);
        }
        _.length || (z = O(), _.indent = z), L += U, _.push(L), I = V;
      }
      for (var z = 0; E - I > C - z; ) {
        var M = I + C - z;
        if (p[M - 1] >= v && p[M] >= v) {
          P(M);
          continue;
        }
        if (p[M] == k || p[M] == S) {
          for (M; M != I - 1 && p[M] != k; M--)
            ;
          if (M > I) {
            P(M);
            continue;
          }
          for (M = I + C, M; M < p.length && p[M] == S; M++)
            ;
          if (M == p.length)
            break;
          P(M);
          continue;
        }
        for (var B = Math.max(M - (C - (C >> 2)), I - 1); M > B && p[M] < k; )
          M--;
        if (D) {
          for (; M > B && p[M] < k; )
            M--;
          for (; M > B && p[M] == m; )
            M--;
        } else
          for (; M > B && p[M] < v; )
            M--;
        if (M > B) {
          P(++M);
          continue;
        }
        M = I + C, p[M] == x && M--, P(M - z);
      }
      return _;
    }, this.$getDisplayTokens = function(p, C) {
      var A = [], _;
      C = C || 0;
      for (var E = 0; E < p.length; E++) {
        var I = p.charCodeAt(E);
        if (I == 9) {
          _ = this.getScreenTabSize(A.length + C), A.push($);
          for (var L = 1; L < _; L++)
            A.push(g);
        } else I == 32 ? A.push(v) : I > 39 && I < 48 || I > 57 && I < 64 ? A.push(m) : I >= 4352 && w(I) ? A.push(y, x) : A.push(y);
      }
      return A;
    }, this.$getStringScreenWidth = function(p, C, A) {
      if (C == 0)
        return [0, 0];
      C == null && (C = 1 / 0), A = A || 0;
      var _, E;
      for (E = 0; E < p.length && (_ = p.charCodeAt(E), _ == 9 ? A += this.getScreenTabSize(A) : _ >= 4352 && w(_) ? A += 2 : A += 1, !(A > C)); E++)
        ;
      return [A, E];
    }, this.lineWidgets = null, this.getRowLength = function(p) {
      var C = 1;
      return this.lineWidgets && (C += this.lineWidgets[p] && this.lineWidgets[p].rowCount || 0), !this.$useWrapMode || !this.$wrapData[p] ? C : this.$wrapData[p].length + C;
    }, this.getRowLineCount = function(p) {
      return !this.$useWrapMode || !this.$wrapData[p] ? 1 : this.$wrapData[p].length + 1;
    }, this.getRowWrapIndent = function(p) {
      if (this.$useWrapMode) {
        var C = this.screenToDocumentPosition(p, Number.MAX_VALUE), A = this.$wrapData[C.row];
        return A.length && A[0] < C.column ? A.indent : 0;
      } else
        return 0;
    }, this.getScreenLastRowColumn = function(p) {
      var C = this.screenToDocumentPosition(p, Number.MAX_VALUE);
      return this.documentToScreenColumn(C.row, C.column);
    }, this.getDocumentLastRowColumn = function(p, C) {
      var A = this.documentToScreenRow(p, C);
      return this.getScreenLastRowColumn(A);
    }, this.getDocumentLastRowColumnPosition = function(p, C) {
      var A = this.documentToScreenRow(p, C);
      return this.screenToDocumentPosition(A, Number.MAX_VALUE / 10);
    }, this.getRowSplitData = function(p) {
      if (this.$useWrapMode)
        return this.$wrapData[p];
    }, this.getScreenTabSize = function(p) {
      return this.$tabSize - (p % this.$tabSize | 0);
    }, this.screenToDocumentRow = function(p, C) {
      return this.screenToDocumentPosition(p, C).row;
    }, this.screenToDocumentColumn = function(p, C) {
      return this.screenToDocumentPosition(p, C).column;
    }, this.screenToDocumentPosition = function(p, C, A) {
      if (p < 0)
        return { row: 0, column: 0 };
      var _, E = 0, I = 0, L, D = 0, R = 0, N = this.$screenRowCache, O = this.$getRowCacheIndex(N, p), P = N.length;
      if (P && O >= 0)
        var D = N[O], E = this.$docRowCache[O], z = p > N[P - 1];
      else
        var z = !P;
      for (var M = this.getLength() - 1, B = this.getNextFoldLine(E), V = B ? B.start.row : 1 / 0; D <= p && (R = this.getRowLength(E), !(D + R > p || E >= M)); )
        D += R, E++, E > V && (E = B.end.row + 1, B = this.getNextFoldLine(E, B), V = B ? B.start.row : 1 / 0), z && (this.$docRowCache.push(E), this.$screenRowCache.push(D));
      if (B && B.start.row <= E)
        _ = this.getFoldDisplayLine(B), E = B.start.row;
      else {
        if (D + R <= p || E > M)
          return {
            row: M,
            column: this.getLine(M).length
          };
        _ = this.getLine(E), B = null;
      }
      var U = 0, q = Math.floor(p - D);
      if (this.$useWrapMode) {
        var Y = this.$wrapData[E];
        Y && (L = Y[q], q > 0 && Y.length && (U = Y.indent, I = Y[q - 1] || Y[Y.length - 1], _ = _.substring(I)));
      }
      return A !== void 0 && this.$bidiHandler.isBidiRow(D + q, E, q) && (C = this.$bidiHandler.offsetToCol(A)), I += this.$getStringScreenWidth(_, C - U)[1], this.$useWrapMode && I >= L && (I = L - 1), B ? B.idxToPosition(I) : { row: E, column: I };
    }, this.documentToScreenPosition = function(p, C) {
      if (typeof C > "u")
        var A = this.$clipPositionToDocument(p.row, p.column);
      else
        A = this.$clipPositionToDocument(p, C);
      p = A.row, C = A.column;
      var _ = 0, E = null, I = null;
      I = this.getFoldAt(p, C, 1), I && (p = I.start.row, C = I.start.column);
      var L, D = 0, R = this.$docRowCache, N = this.$getRowCacheIndex(R, p), O = R.length;
      if (O && N >= 0)
        var D = R[N], _ = this.$screenRowCache[N], P = p > R[O - 1];
      else
        var P = !O;
      for (var z = this.getNextFoldLine(D), M = z ? z.start.row : 1 / 0; D < p; ) {
        if (D >= M) {
          if (L = z.end.row + 1, L > p)
            break;
          z = this.getNextFoldLine(L, z), M = z ? z.start.row : 1 / 0;
        } else
          L = D + 1;
        _ += this.getRowLength(D), D = L, P && (this.$docRowCache.push(D), this.$screenRowCache.push(_));
      }
      var B = "";
      z && D >= M ? (B = this.getFoldDisplayLine(z, p, C), E = z.start.row) : (B = this.getLine(p).substring(0, C), E = p);
      var V = 0;
      if (this.$useWrapMode) {
        var U = this.$wrapData[E];
        if (U) {
          for (var q = 0; B.length >= U[q]; )
            _++, q++;
          B = B.substring(
            U[q - 1] || 0,
            B.length
          ), V = q > 0 ? U.indent : 0;
        }
      }
      return this.lineWidgets && this.lineWidgets[D] && this.lineWidgets[D].rowsAbove && (_ += this.lineWidgets[D].rowsAbove), {
        row: _,
        column: V + this.$getStringScreenWidth(B)[0]
      };
    }, this.documentToScreenColumn = function(p, C) {
      return this.documentToScreenPosition(p, C).column;
    }, this.documentToScreenRow = function(p, C) {
      return this.documentToScreenPosition(p, C).row;
    }, this.getScreenLength = function() {
      var p = 0, C = null;
      if (this.$useWrapMode)
        for (var E = this.$wrapData.length, I = 0, _ = 0, C = this.$foldData[_++], L = C ? C.start.row : 1 / 0; I < E; ) {
          var D = this.$wrapData[I];
          p += D ? D.length + 1 : 1, I++, I > L && (I = C.end.row + 1, C = this.$foldData[_++], L = C ? C.start.row : 1 / 0);
        }
      else {
        p = this.getLength();
        for (var A = this.$foldData, _ = 0; _ < A.length; _++)
          C = A[_], p -= C.end.row - C.start.row;
      }
      return this.lineWidgets && (p += this.$getWidgetScreenLength()), p;
    }, this.$setFontMetrics = function(p) {
      this.$enableVarChar && (this.$getStringScreenWidth = function(C, A, _) {
        if (A === 0)
          return [0, 0];
        A || (A = 1 / 0), _ = _ || 0;
        var E, I;
        for (I = 0; I < C.length && (E = C.charAt(I), E === "	" ? _ += this.getScreenTabSize(_) : _ += p.getCharacterWidth(E), !(_ > A)); I++)
          ;
        return [_, I];
      });
    }, this.destroy = function() {
      this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker(), this.removeAllListeners(), this.selection.detach();
    }, this.isFullWidth = w;
    function w(p) {
      return p < 4352 ? !1 : p >= 4352 && p <= 4447 || p >= 4515 && p <= 4519 || p >= 4602 && p <= 4607 || p >= 9001 && p <= 9002 || p >= 11904 && p <= 11929 || p >= 11931 && p <= 12019 || p >= 12032 && p <= 12245 || p >= 12272 && p <= 12283 || p >= 12288 && p <= 12350 || p >= 12353 && p <= 12438 || p >= 12441 && p <= 12543 || p >= 12549 && p <= 12589 || p >= 12593 && p <= 12686 || p >= 12688 && p <= 12730 || p >= 12736 && p <= 12771 || p >= 12784 && p <= 12830 || p >= 12832 && p <= 12871 || p >= 12880 && p <= 13054 || p >= 13056 && p <= 19903 || p >= 19968 && p <= 42124 || p >= 42128 && p <= 42182 || p >= 43360 && p <= 43388 || p >= 44032 && p <= 55203 || p >= 55216 && p <= 55238 || p >= 55243 && p <= 55291 || p >= 63744 && p <= 64255 || p >= 65040 && p <= 65049 || p >= 65072 && p <= 65106 || p >= 65108 && p <= 65126 || p >= 65128 && p <= 65131 || p >= 65281 && p <= 65376 || p >= 65504 && p <= 65510;
    }
  }.call(b.prototype), t("./edit_session/folding").Folding.call(b.prototype), t("./edit_session/bracket_match").BracketMatch.call(b.prototype), s.defineOptions(b.prototype, "session", {
    wrap: {
      set: function(y) {
        if (!y || y == "off" ? y = !1 : y == "free" ? y = !0 : y == "printMargin" ? y = -1 : typeof y == "string" && (y = parseInt(y, 10) || !1), this.$wrap != y)
          if (this.$wrap = y, !y)
            this.setUseWrapMode(!1);
          else {
            var x = typeof y == "number" ? y : null;
            this.setWrapLimitRange(x, x), this.setUseWrapMode(!0);
          }
      },
      get: function() {
        return this.getUseWrapMode() ? this.$wrap == -1 ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off";
      },
      handlesSet: !0
    },
    wrapMethod: {
      set: function(y) {
        y = y == "auto" ? this.$mode.type != "text" : y != "text", y != this.$wrapAsCode && (this.$wrapAsCode = y, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)));
      },
      initialValue: "auto"
    },
    indentedSoftWrap: {
      set: function() {
        this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0));
      },
      initialValue: !0
    },
    firstLineNumber: {
      set: function() {
        this._signal("changeBreakpoint");
      },
      initialValue: 1
    },
    useWorker: {
      set: function(y) {
        this.$useWorker = y, this.$stopWorker(), y && this.$startWorker();
      },
      initialValue: !0
    },
    useSoftTabs: { initialValue: !0 },
    tabSize: {
      set: function(y) {
        y = parseInt(y), y > 0 && this.$tabSize !== y && (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = y, this._signal("changeTabSize"));
      },
      initialValue: 4,
      handlesSet: !0
    },
    navigateWithinSoftTabs: { initialValue: !1 },
    foldStyle: {
      set: function(y) {
        this.setFoldStyle(y);
      },
      handlesSet: !0
    },
    overwrite: {
      set: function(y) {
        this._signal("changeOverwrite");
      },
      initialValue: !1
    },
    newLineMode: {
      set: function(y) {
        this.doc.setNewLineMode(y);
      },
      get: function() {
        return this.doc.getNewLineMode();
      },
      handlesSet: !0
    },
    mode: {
      set: function(y) {
        this.setMode(y);
      },
      get: function() {
        return this.$modeId;
      },
      handlesSet: !0
    }
  }), e.EditSession = b;
});
ace.define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(t, e, a) {
  var d = t("./lib/lang"), u = t("./lib/oop"), o = t("./range").Range, s = function() {
    this.$options = {};
  };
  (function() {
    this.set = function(n) {
      return u.mixin(this.$options, n), this;
    }, this.getOptions = function() {
      return d.copyObject(this.$options);
    }, this.setOptions = function(n) {
      this.$options = n;
    }, this.find = function(n) {
      var i = this.$options, r = this.$matchIterator(n, i);
      if (!r)
        return !1;
      var l = null;
      return r.forEach(function(c, f, b, y) {
        return l = new o(c, f, b, y), f == y && i.start && i.start.start && i.skipCurrent != !1 && l.isEqual(i.start) ? (l = null, !1) : !0;
      }), l;
    }, this.findAll = function(n) {
      var i = this.$options;
      if (!i.needle)
        return [];
      this.$assembleRegExp(i);
      var r = i.range, l = r ? n.getLines(r.start.row, r.end.row) : n.doc.getAllLines(), c = [], f = i.re;
      if (i.$isMultiLine) {
        var b = f.length, y = l.length - b, x;
        e: for (var k = f.offset || 0; k <= y; k++) {
          for (var S = 0; S < b; S++)
            if (l[k + S].search(f[S]) == -1)
              continue e;
          var m = l[k], v = l[k + b - 1], $ = m.length - m.match(f[0])[0].length, g = v.match(f[b - 1])[0].length;
          x && x.end.row === k && x.end.column > $ || (c.push(x = new o(
            k,
            $,
            k + b - 1,
            g
          )), b > 2 && (k = k + b - 2));
        }
      } else
        for (var w = 0; w < l.length; w++)
          for (var p = d.getMatchOffsets(l[w], f), S = 0; S < p.length; S++) {
            var C = p[S];
            c.push(new o(w, C.offset, w, C.offset + C.length));
          }
      if (r) {
        for (var A = r.start.column, _ = r.start.column, w = 0, S = c.length - 1; w < S && c[w].start.column < A && c[w].start.row == r.start.row; )
          w++;
        for (; w < S && c[S].end.column > _ && c[S].end.row == r.end.row; )
          S--;
        for (c = c.slice(w, S + 1), w = 0, S = c.length; w < S; w++)
          c[w].start.row += r.start.row, c[w].end.row += r.start.row;
      }
      return c;
    }, this.replace = function(n, i) {
      var r = this.$options, l = this.$assembleRegExp(r);
      if (r.$isMultiLine)
        return i;
      if (l) {
        var c = l.exec(n);
        if (!c || c[0].length != n.length)
          return null;
        if (i = n.replace(l, i), r.preserveCase) {
          i = i.split("");
          for (var f = Math.min(n.length, n.length); f--; ) {
            var b = n[f];
            b && b.toLowerCase() != b ? i[f] = i[f].toUpperCase() : i[f] = i[f].toLowerCase();
          }
          i = i.join("");
        }
        return i;
      }
    }, this.$assembleRegExp = function(n, i) {
      if (n.needle instanceof RegExp)
        return n.re = n.needle;
      var r = n.needle;
      if (!n.needle)
        return n.re = !1;
      n.regExp || (r = d.escapeRegExp(r)), n.wholeWord && (r = h(r, n));
      var l = n.caseSensitive ? "gm" : "gmi";
      if (n.$isMultiLine = !i && /[\n\r]/.test(r), n.$isMultiLine)
        return n.re = this.$assembleMultilineRegExp(r, l);
      try {
        var c = new RegExp(r, l);
      } catch {
        c = !1;
      }
      return n.re = c;
    }, this.$assembleMultilineRegExp = function(n, i) {
      for (var r = n.replace(/\r\n|\r|\n/g, `$
^`).split(`
`), l = [], c = 0; c < r.length; c++) try {
        l.push(new RegExp(r[c], i));
      } catch {
        return !1;
      }
      return l;
    }, this.$matchIterator = function(n, i) {
      var r = this.$assembleRegExp(i);
      if (!r)
        return !1;
      var l = i.backwards == !0, c = i.skipCurrent != !1, f = i.range, b = i.start;
      b || (b = f ? f[l ? "end" : "start"] : n.selection.getRange()), b.start && (b = b[c != l ? "end" : "start"]);
      var y = f ? f.start.row : 0, x = f ? f.end.row : n.getLength() - 1;
      if (l)
        var k = function(v) {
          var $ = b.row;
          if (!m($, b.column, v)) {
            for ($--; $ >= y; $--)
              if (m($, Number.MAX_VALUE, v))
                return;
            if (i.wrap != !1) {
              for ($ = x, y = b.row; $ >= y; $--)
                if (m($, Number.MAX_VALUE, v))
                  return;
            }
          }
        };
      else
        var k = function($) {
          var g = b.row;
          if (!m(g, b.column, $)) {
            for (g = g + 1; g <= x; g++)
              if (m(g, 0, $))
                return;
            if (i.wrap != !1) {
              for (g = y, x = b.row; g <= x; g++)
                if (m(g, 0, $))
                  return;
            }
          }
        };
      if (i.$isMultiLine)
        var S = r.length, m = function(v, $, g) {
          var w = l ? v - S + 1 : v;
          if (!(w < 0)) {
            var p = n.getLine(w), C = p.search(r[0]);
            if (!(!l && C < $ || C === -1)) {
              for (var A = 1; A < S; A++)
                if (p = n.getLine(w + A), p.search(r[A]) == -1)
                  return;
              var _ = p.match(r[S - 1])[0].length;
              if (!(l && _ > $) && g(w, C, w + S - 1, _))
                return !0;
            }
          }
        };
      else if (l)
        var m = function($, g, w) {
          var p = n.getLine($), C = [], A, _ = 0;
          for (r.lastIndex = 0; A = r.exec(p); ) {
            var E = A[0].length;
            if (_ = A.index, !E) {
              if (_ >= p.length) break;
              r.lastIndex = _ += 1;
            }
            if (A.index + E > g)
              break;
            C.push(A.index, E);
          }
          for (var I = C.length - 1; I >= 0; I -= 2) {
            var L = C[I - 1], E = C[I];
            if (w($, L, $, L + E))
              return !0;
          }
        };
      else
        var m = function($, g, w) {
          var p = n.getLine($), C, A;
          for (r.lastIndex = g; A = r.exec(p); ) {
            var _ = A[0].length;
            if (C = A.index, w($, C, $, C + _))
              return !0;
            if (!_ && (r.lastIndex = C += 1, C >= p.length))
              return !1;
          }
        };
      return { forEach: k };
    };
  }).call(s.prototype);
  function h(n, i) {
    function r(l) {
      return /\w/.test(l) || i.regExp ? "\\b" : "";
    }
    return r(n[0]) + n + r(n[n.length - 1]);
  }
  e.Search = s;
});
ace.define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(t, e, a) {
  var d = t("../lib/keys"), u = t("../lib/useragent"), o = d.KEY_MODS;
  function s(n, i) {
    this.platform = i || (u.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(n), this.$singleCommand = !0;
  }
  function h(n, i) {
    s.call(this, n, i), this.$singleCommand = !1;
  }
  h.prototype = s.prototype, function() {
    this.addCommand = function(i) {
      this.commands[i.name] && this.removeCommand(i), this.commands[i.name] = i, i.bindKey && this._buildKeyHash(i);
    }, this.removeCommand = function(i, r) {
      var l = i && (typeof i == "string" ? i : i.name);
      i = this.commands[l], r || delete this.commands[l];
      var c = this.commandKeyBinding;
      for (var f in c) {
        var b = c[f];
        if (b == i)
          delete c[f];
        else if (Array.isArray(b)) {
          var y = b.indexOf(i);
          y != -1 && (b.splice(y, 1), b.length == 1 && (c[f] = b[0]));
        }
      }
    }, this.bindKey = function(i, r, l) {
      if (typeof i == "object" && i && (l == null && (l = i.position), i = i[this.platform]), !!i) {
        if (typeof r == "function")
          return this.addCommand({ exec: r, bindKey: i, name: r.name || i });
        i.split("|").forEach(function(c) {
          var f = "";
          if (c.indexOf(" ") != -1) {
            var b = c.split(/\s+/);
            c = b.pop(), b.forEach(function(k) {
              var S = this.parseKeys(k), m = o[S.hashId] + S.key;
              f += (f ? " " : "") + m, this._addCommandToBinding(f, "chainKeys");
            }, this), f += " ";
          }
          var y = this.parseKeys(c), x = o[y.hashId] + y.key;
          this._addCommandToBinding(f + x, r, l);
        }, this);
      }
    };
    function n(i) {
      return typeof i == "object" && i.bindKey && i.bindKey.position || (i.isDefault ? -100 : 0);
    }
    this._addCommandToBinding = function(i, r, l) {
      var c = this.commandKeyBinding, f;
      if (!r)
        delete c[i];
      else if (!c[i] || this.$singleCommand)
        c[i] = r;
      else {
        Array.isArray(c[i]) ? (f = c[i].indexOf(r)) != -1 && c[i].splice(f, 1) : c[i] = [c[i]], typeof l != "number" && (l = n(r));
        var b = c[i];
        for (f = 0; f < b.length; f++) {
          var y = b[f], x = n(y);
          if (x > l)
            break;
        }
        b.splice(f, 0, r);
      }
    }, this.addCommands = function(i) {
      i && Object.keys(i).forEach(function(r) {
        var l = i[r];
        if (l) {
          if (typeof l == "string")
            return this.bindKey(l, r);
          typeof l == "function" && (l = { exec: l }), typeof l == "object" && (l.name || (l.name = r), this.addCommand(l));
        }
      }, this);
    }, this.removeCommands = function(i) {
      Object.keys(i).forEach(function(r) {
        this.removeCommand(i[r]);
      }, this);
    }, this.bindKeys = function(i) {
      Object.keys(i).forEach(function(r) {
        this.bindKey(r, i[r]);
      }, this);
    }, this._buildKeyHash = function(i) {
      this.bindKey(i.bindKey, i);
    }, this.parseKeys = function(i) {
      var r = i.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(x) {
        return x;
      }), l = r.pop(), c = d[l];
      if (d.FUNCTION_KEYS[c])
        l = d.FUNCTION_KEYS[c].toLowerCase();
      else if (r.length) {
        if (r.length == 1 && r[0] == "shift")
          return { key: l.toUpperCase(), hashId: -1 };
      } else return { key: l, hashId: -1 };
      for (var f = 0, b = r.length; b--; ) {
        var y = d.KEY_MODS[r[b]];
        if (y == null)
          return typeof console < "u" && console.error("invalid modifier " + r[b] + " in " + i), !1;
        f |= y;
      }
      return { key: l, hashId: f };
    }, this.findKeyCommand = function(r, l) {
      var c = o[r] + l;
      return this.commandKeyBinding[c];
    }, this.handleKeyboard = function(i, r, l, c) {
      if (!(c < 0)) {
        var f = o[r] + l, b = this.commandKeyBinding[f];
        return i.$keyChain && (i.$keyChain += " " + f, b = this.commandKeyBinding[i.$keyChain] || b), b && (b == "chainKeys" || b[b.length - 1] == "chainKeys") ? (i.$keyChain = i.$keyChain || f, { command: "null" }) : (i.$keyChain && ((!r || r == 4) && l.length == 1 ? i.$keyChain = i.$keyChain.slice(0, -f.length - 1) : (r == -1 || c > 0) && (i.$keyChain = "")), { command: b });
      }
    }, this.getStatusText = function(i, r) {
      return r.$keyChain || "";
    };
  }.call(s.prototype), e.HashHandler = s, e.MultiHashHandler = h;
});
ace.define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(t, e, a) {
  var d = t("../lib/oop"), u = t("../keyboard/hash_handler").MultiHashHandler, o = t("../lib/event_emitter").EventEmitter, s = function(h, n) {
    u.call(this, n, h), this.byName = this.commands, this.setDefaultHandler("exec", function(i) {
      return i.command.exec(i.editor, i.args || {});
    });
  };
  d.inherits(s, u), function() {
    d.implement(this, o), this.exec = function(h, n, i) {
      if (Array.isArray(h)) {
        for (var r = h.length; r--; )
          if (this.exec(h[r], n, i)) return !0;
        return !1;
      }
      if (typeof h == "string" && (h = this.commands[h]), !h || n && n.$readOnly && !h.readOnly || this.$checkCommandState != !1 && h.isAvailable && !h.isAvailable(n))
        return !1;
      var l = { editor: n, command: h, args: i };
      return l.returnValue = this._emit("exec", l), this._signal("afterExec", l), l.returnValue !== !1;
    }, this.toggleRecording = function(h) {
      if (!this.$inReplay)
        return h && h._emit("changeStatus"), this.recording ? (this.macro.pop(), this.off("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = function(n) {
          this.macro.push([n.command, n.args]);
        }.bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0);
    }, this.replay = function(h) {
      if (!(this.$inReplay || !this.macro)) {
        if (this.recording)
          return this.toggleRecording(h);
        try {
          this.$inReplay = !0, this.macro.forEach(function(n) {
            typeof n == "string" ? this.exec(n, h) : this.exec(n[0], h, n[1]);
          }, this);
        } finally {
          this.$inReplay = !1;
        }
      }
    }, this.trimMacro = function(h) {
      return h.map(function(n) {
        return typeof n[0] != "string" && (n[0] = n[0].name), n[1] || (n = n[0]), n;
      });
    };
  }.call(s.prototype), e.CommandManager = s;
});
ace.define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(t, e, a) {
  var d = t("../lib/lang"), u = t("../config"), o = t("../range").Range;
  function s(n, i) {
    return { win: n, mac: i };
  }
  e.commands = [
    {
      name: "showSettingsMenu",
      bindKey: s("Ctrl-,", "Command-,"),
      exec: function(n) {
        u.loadModule("ace/ext/settings_menu", function(i) {
          i.init(n), n.showSettingsMenu();
        });
      },
      readOnly: !0
    },
    {
      name: "goToNextError",
      bindKey: s("Alt-E", "F4"),
      exec: function(n) {
        u.loadModule("./ext/error_marker", function(i) {
          i.showErrorMarker(n, 1);
        });
      },
      scrollIntoView: "animate",
      readOnly: !0
    },
    {
      name: "goToPreviousError",
      bindKey: s("Alt-Shift-E", "Shift-F4"),
      exec: function(n) {
        u.loadModule("./ext/error_marker", function(i) {
          i.showErrorMarker(n, -1);
        });
      },
      scrollIntoView: "animate",
      readOnly: !0
    },
    {
      name: "selectall",
      description: "Select all",
      bindKey: s("Ctrl-A", "Command-A"),
      exec: function(n) {
        n.selectAll();
      },
      readOnly: !0
    },
    {
      name: "centerselection",
      description: "Center selection",
      bindKey: s(null, "Ctrl-L"),
      exec: function(n) {
        n.centerSelection();
      },
      readOnly: !0
    },
    {
      name: "gotoline",
      description: "Go to line...",
      bindKey: s("Ctrl-L", "Command-L"),
      exec: function(n, i) {
        typeof i == "number" && !isNaN(i) && n.gotoLine(i), n.prompt({ $type: "gotoLine" });
      },
      readOnly: !0
    },
    {
      name: "fold",
      bindKey: s("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
      exec: function(n) {
        n.session.toggleFold(!1);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "unfold",
      bindKey: s("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
      exec: function(n) {
        n.session.toggleFold(!0);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "toggleFoldWidget",
      bindKey: s("F2", "F2"),
      exec: function(n) {
        n.session.toggleFoldWidget();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "toggleParentFoldWidget",
      bindKey: s("Alt-F2", "Alt-F2"),
      exec: function(n) {
        n.session.toggleFoldWidget(!0);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "foldall",
      description: "Fold all",
      bindKey: s(null, "Ctrl-Command-Option-0"),
      exec: function(n) {
        n.session.foldAll();
      },
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "foldAllComments",
      description: "Fold all comments",
      bindKey: s(null, "Ctrl-Command-Option-0"),
      exec: function(n) {
        n.session.foldAllComments();
      },
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "foldOther",
      description: "Fold other",
      bindKey: s("Alt-0", "Command-Option-0"),
      exec: function(n) {
        n.session.foldAll(), n.session.unfold(n.selection.getAllRanges());
      },
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "unfoldall",
      description: "Unfold all",
      bindKey: s("Alt-Shift-0", "Command-Option-Shift-0"),
      exec: function(n) {
        n.session.unfold();
      },
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "findnext",
      description: "Find next",
      bindKey: s("Ctrl-K", "Command-G"),
      exec: function(n) {
        n.findNext();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "findprevious",
      description: "Find previous",
      bindKey: s("Ctrl-Shift-K", "Command-Shift-G"),
      exec: function(n) {
        n.findPrevious();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "center",
      readOnly: !0
    },
    {
      name: "selectOrFindNext",
      description: "Select or find next",
      bindKey: s("Alt-K", "Ctrl-G"),
      exec: function(n) {
        n.selection.isEmpty() ? n.selection.selectWord() : n.findNext();
      },
      readOnly: !0
    },
    {
      name: "selectOrFindPrevious",
      description: "Select or find previous",
      bindKey: s("Alt-Shift-K", "Ctrl-Shift-G"),
      exec: function(n) {
        n.selection.isEmpty() ? n.selection.selectWord() : n.findPrevious();
      },
      readOnly: !0
    },
    {
      name: "find",
      description: "Find",
      bindKey: s("Ctrl-F", "Command-F"),
      exec: function(n) {
        u.loadModule("ace/ext/searchbox", function(i) {
          i.Search(n);
        });
      },
      readOnly: !0
    },
    {
      name: "overwrite",
      description: "Overwrite",
      bindKey: "Insert",
      exec: function(n) {
        n.toggleOverwrite();
      },
      readOnly: !0
    },
    {
      name: "selecttostart",
      description: "Select to start",
      bindKey: s("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
      exec: function(n) {
        n.getSelection().selectFileStart();
      },
      multiSelectAction: "forEach",
      readOnly: !0,
      scrollIntoView: "animate",
      aceCommandGroup: "fileJump"
    },
    {
      name: "gotostart",
      description: "Go to start",
      bindKey: s("Ctrl-Home", "Command-Home|Command-Up"),
      exec: function(n) {
        n.navigateFileStart();
      },
      multiSelectAction: "forEach",
      readOnly: !0,
      scrollIntoView: "animate",
      aceCommandGroup: "fileJump"
    },
    {
      name: "selectup",
      description: "Select up",
      bindKey: s("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
      exec: function(n) {
        n.getSelection().selectUp();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "golineup",
      description: "Go line up",
      bindKey: s("Up", "Up|Ctrl-P"),
      exec: function(n, i) {
        n.navigateUp(i.times);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selecttoend",
      description: "Select to end",
      bindKey: s("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
      exec: function(n) {
        n.getSelection().selectFileEnd();
      },
      multiSelectAction: "forEach",
      readOnly: !0,
      scrollIntoView: "animate",
      aceCommandGroup: "fileJump"
    },
    {
      name: "gotoend",
      description: "Go to end",
      bindKey: s("Ctrl-End", "Command-End|Command-Down"),
      exec: function(n) {
        n.navigateFileEnd();
      },
      multiSelectAction: "forEach",
      readOnly: !0,
      scrollIntoView: "animate",
      aceCommandGroup: "fileJump"
    },
    {
      name: "selectdown",
      description: "Select down",
      bindKey: s("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
      exec: function(n) {
        n.getSelection().selectDown();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "golinedown",
      description: "Go line down",
      bindKey: s("Down", "Down|Ctrl-N"),
      exec: function(n, i) {
        n.navigateDown(i.times);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selectwordleft",
      description: "Select word left",
      bindKey: s("Ctrl-Shift-Left", "Option-Shift-Left"),
      exec: function(n) {
        n.getSelection().selectWordLeft();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "gotowordleft",
      description: "Go to word left",
      bindKey: s("Ctrl-Left", "Option-Left"),
      exec: function(n) {
        n.navigateWordLeft();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selecttolinestart",
      description: "Select to line start",
      bindKey: s("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
      exec: function(n) {
        n.getSelection().selectLineStart();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "gotolinestart",
      description: "Go to line start",
      bindKey: s("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
      exec: function(n) {
        n.navigateLineStart();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selectleft",
      description: "Select left",
      bindKey: s("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
      exec: function(n) {
        n.getSelection().selectLeft();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "gotoleft",
      description: "Go to left",
      bindKey: s("Left", "Left|Ctrl-B"),
      exec: function(n, i) {
        n.navigateLeft(i.times);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selectwordright",
      description: "Select word right",
      bindKey: s("Ctrl-Shift-Right", "Option-Shift-Right"),
      exec: function(n) {
        n.getSelection().selectWordRight();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "gotowordright",
      description: "Go to word right",
      bindKey: s("Ctrl-Right", "Option-Right"),
      exec: function(n) {
        n.navigateWordRight();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selecttolineend",
      description: "Select to line end",
      bindKey: s("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
      exec: function(n) {
        n.getSelection().selectLineEnd();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "gotolineend",
      description: "Go to line end",
      bindKey: s("Alt-Right|End", "Command-Right|End|Ctrl-E"),
      exec: function(n) {
        n.navigateLineEnd();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selectright",
      description: "Select right",
      bindKey: s("Shift-Right", "Shift-Right"),
      exec: function(n) {
        n.getSelection().selectRight();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "gotoright",
      description: "Go to right",
      bindKey: s("Right", "Right|Ctrl-F"),
      exec: function(n, i) {
        n.navigateRight(i.times);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selectpagedown",
      description: "Select page down",
      bindKey: "Shift-PageDown",
      exec: function(n) {
        n.selectPageDown();
      },
      readOnly: !0
    },
    {
      name: "pagedown",
      description: "Page down",
      bindKey: s(null, "Option-PageDown"),
      exec: function(n) {
        n.scrollPageDown();
      },
      readOnly: !0
    },
    {
      name: "gotopagedown",
      description: "Go to page down",
      bindKey: s("PageDown", "PageDown|Ctrl-V"),
      exec: function(n) {
        n.gotoPageDown();
      },
      readOnly: !0
    },
    {
      name: "selectpageup",
      description: "Select page up",
      bindKey: "Shift-PageUp",
      exec: function(n) {
        n.selectPageUp();
      },
      readOnly: !0
    },
    {
      name: "pageup",
      description: "Page up",
      bindKey: s(null, "Option-PageUp"),
      exec: function(n) {
        n.scrollPageUp();
      },
      readOnly: !0
    },
    {
      name: "gotopageup",
      description: "Go to page up",
      bindKey: "PageUp",
      exec: function(n) {
        n.gotoPageUp();
      },
      readOnly: !0
    },
    {
      name: "scrollup",
      description: "Scroll up",
      bindKey: s("Ctrl-Up", null),
      exec: function(n) {
        n.renderer.scrollBy(0, -2 * n.renderer.layerConfig.lineHeight);
      },
      readOnly: !0
    },
    {
      name: "scrolldown",
      description: "Scroll down",
      bindKey: s("Ctrl-Down", null),
      exec: function(n) {
        n.renderer.scrollBy(0, 2 * n.renderer.layerConfig.lineHeight);
      },
      readOnly: !0
    },
    {
      name: "selectlinestart",
      description: "Select line start",
      bindKey: "Shift-Home",
      exec: function(n) {
        n.getSelection().selectLineStart();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "selectlineend",
      description: "Select line end",
      bindKey: "Shift-End",
      exec: function(n) {
        n.getSelection().selectLineEnd();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "togglerecording",
      description: "Toggle recording",
      bindKey: s("Ctrl-Alt-E", "Command-Option-E"),
      exec: function(n) {
        n.commands.toggleRecording(n);
      },
      readOnly: !0
    },
    {
      name: "replaymacro",
      description: "Replay macro",
      bindKey: s("Ctrl-Shift-E", "Command-Shift-E"),
      exec: function(n) {
        n.commands.replay(n);
      },
      readOnly: !0
    },
    {
      name: "jumptomatching",
      description: "Jump to matching",
      bindKey: s("Ctrl-\\|Ctrl-P", "Command-\\"),
      exec: function(n) {
        n.jumpToMatching();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "animate",
      readOnly: !0
    },
    {
      name: "selecttomatching",
      description: "Select to matching",
      bindKey: s("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
      exec: function(n) {
        n.jumpToMatching(!0);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "animate",
      readOnly: !0
    },
    {
      name: "expandToMatching",
      description: "Expand to matching",
      bindKey: s("Ctrl-Shift-M", "Ctrl-Shift-M"),
      exec: function(n) {
        n.jumpToMatching(!0, !0);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "animate",
      readOnly: !0
    },
    {
      name: "passKeysToBrowser",
      description: "Pass keys to browser",
      bindKey: s(null, null),
      exec: function() {
      },
      passEvent: !0,
      readOnly: !0
    },
    {
      name: "copy",
      description: "Copy",
      exec: function(n) {
      },
      readOnly: !0
    },
    {
      name: "cut",
      description: "Cut",
      exec: function(n) {
        var i = n.$copyWithEmptySelection && n.selection.isEmpty(), r = i ? n.selection.getLineRange() : n.selection.getRange();
        n._emit("cut", r), r.isEmpty() || n.session.remove(r), n.clearSelection();
      },
      scrollIntoView: "cursor",
      multiSelectAction: "forEach"
    },
    {
      name: "paste",
      description: "Paste",
      exec: function(n, i) {
        n.$handlePaste(i);
      },
      scrollIntoView: "cursor"
    },
    {
      name: "removeline",
      description: "Remove line",
      bindKey: s("Ctrl-D", "Command-D"),
      exec: function(n) {
        n.removeLines();
      },
      scrollIntoView: "cursor",
      multiSelectAction: "forEachLine"
    },
    {
      name: "duplicateSelection",
      description: "Duplicate selection",
      bindKey: s("Ctrl-Shift-D", "Command-Shift-D"),
      exec: function(n) {
        n.duplicateSelection();
      },
      scrollIntoView: "cursor",
      multiSelectAction: "forEach"
    },
    {
      name: "sortlines",
      description: "Sort lines",
      bindKey: s("Ctrl-Alt-S", "Command-Alt-S"),
      exec: function(n) {
        n.sortLines();
      },
      scrollIntoView: "selection",
      multiSelectAction: "forEachLine"
    },
    {
      name: "togglecomment",
      description: "Toggle comment",
      bindKey: s("Ctrl-/", "Command-/"),
      exec: function(n) {
        n.toggleCommentLines();
      },
      multiSelectAction: "forEachLine",
      scrollIntoView: "selectionPart"
    },
    {
      name: "toggleBlockComment",
      description: "Toggle block comment",
      bindKey: s("Ctrl-Shift-/", "Command-Shift-/"),
      exec: function(n) {
        n.toggleBlockComment();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "selectionPart"
    },
    {
      name: "modifyNumberUp",
      description: "Modify number up",
      bindKey: s("Ctrl-Shift-Up", "Alt-Shift-Up"),
      exec: function(n) {
        n.modifyNumber(1);
      },
      scrollIntoView: "cursor",
      multiSelectAction: "forEach"
    },
    {
      name: "modifyNumberDown",
      description: "Modify number down",
      bindKey: s("Ctrl-Shift-Down", "Alt-Shift-Down"),
      exec: function(n) {
        n.modifyNumber(-1);
      },
      scrollIntoView: "cursor",
      multiSelectAction: "forEach"
    },
    {
      name: "replace",
      description: "Replace",
      bindKey: s("Ctrl-H", "Command-Option-F"),
      exec: function(n) {
        u.loadModule("ace/ext/searchbox", function(i) {
          i.Search(n, !0);
        });
      }
    },
    {
      name: "undo",
      description: "Undo",
      bindKey: s("Ctrl-Z", "Command-Z"),
      exec: function(n) {
        n.undo();
      }
    },
    {
      name: "redo",
      description: "Redo",
      bindKey: s("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
      exec: function(n) {
        n.redo();
      }
    },
    {
      name: "copylinesup",
      description: "Copy lines up",
      bindKey: s("Alt-Shift-Up", "Command-Option-Up"),
      exec: function(n) {
        n.copyLinesUp();
      },
      scrollIntoView: "cursor"
    },
    {
      name: "movelinesup",
      description: "Move lines up",
      bindKey: s("Alt-Up", "Option-Up"),
      exec: function(n) {
        n.moveLinesUp();
      },
      scrollIntoView: "cursor"
    },
    {
      name: "copylinesdown",
      description: "Copy lines down",
      bindKey: s("Alt-Shift-Down", "Command-Option-Down"),
      exec: function(n) {
        n.copyLinesDown();
      },
      scrollIntoView: "cursor"
    },
    {
      name: "movelinesdown",
      description: "Move lines down",
      bindKey: s("Alt-Down", "Option-Down"),
      exec: function(n) {
        n.moveLinesDown();
      },
      scrollIntoView: "cursor"
    },
    {
      name: "del",
      description: "Delete",
      bindKey: s("Delete", "Delete|Ctrl-D|Shift-Delete"),
      exec: function(n) {
        n.remove("right");
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "backspace",
      description: "Backspace",
      bindKey: s(
        "Shift-Backspace|Backspace",
        "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"
      ),
      exec: function(n) {
        n.remove("left");
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "cut_or_delete",
      description: "Cut or delete",
      bindKey: s("Shift-Delete", null),
      exec: function(n) {
        if (n.selection.isEmpty())
          n.remove("left");
        else
          return !1;
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "removetolinestart",
      description: "Remove to line start",
      bindKey: s("Alt-Backspace", "Command-Backspace"),
      exec: function(n) {
        n.removeToLineStart();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "removetolineend",
      description: "Remove to line end",
      bindKey: s("Alt-Delete", "Ctrl-K|Command-Delete"),
      exec: function(n) {
        n.removeToLineEnd();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "removetolinestarthard",
      description: "Remove to line start hard",
      bindKey: s("Ctrl-Shift-Backspace", null),
      exec: function(n) {
        var i = n.selection.getRange();
        i.start.column = 0, n.session.remove(i);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "removetolineendhard",
      description: "Remove to line end hard",
      bindKey: s("Ctrl-Shift-Delete", null),
      exec: function(n) {
        var i = n.selection.getRange();
        i.end.column = Number.MAX_VALUE, n.session.remove(i);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "removewordleft",
      description: "Remove word left",
      bindKey: s("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
      exec: function(n) {
        n.removeWordLeft();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "removewordright",
      description: "Remove word right",
      bindKey: s("Ctrl-Delete", "Alt-Delete"),
      exec: function(n) {
        n.removeWordRight();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "outdent",
      description: "Outdent",
      bindKey: s("Shift-Tab", "Shift-Tab"),
      exec: function(n) {
        n.blockOutdent();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "selectionPart"
    },
    {
      name: "indent",
      description: "Indent",
      bindKey: s("Tab", "Tab"),
      exec: function(n) {
        n.indent();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "selectionPart"
    },
    {
      name: "blockoutdent",
      description: "Block outdent",
      bindKey: s("Ctrl-[", "Ctrl-["),
      exec: function(n) {
        n.blockOutdent();
      },
      multiSelectAction: "forEachLine",
      scrollIntoView: "selectionPart"
    },
    {
      name: "blockindent",
      description: "Block indent",
      bindKey: s("Ctrl-]", "Ctrl-]"),
      exec: function(n) {
        n.blockIndent();
      },
      multiSelectAction: "forEachLine",
      scrollIntoView: "selectionPart"
    },
    {
      name: "insertstring",
      description: "Insert string",
      exec: function(n, i) {
        n.insert(i);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "inserttext",
      description: "Insert text",
      exec: function(n, i) {
        n.insert(d.stringRepeat(i.text || "", i.times || 1));
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "splitline",
      description: "Split line",
      bindKey: s(null, "Ctrl-O"),
      exec: function(n) {
        n.splitLine();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "transposeletters",
      description: "Transpose letters",
      bindKey: s("Alt-Shift-X", "Ctrl-T"),
      exec: function(n) {
        n.transposeLetters();
      },
      multiSelectAction: function(n) {
        n.transposeSelections(1);
      },
      scrollIntoView: "cursor"
    },
    {
      name: "touppercase",
      description: "To uppercase",
      bindKey: s("Ctrl-U", "Ctrl-U"),
      exec: function(n) {
        n.toUpperCase();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "tolowercase",
      description: "To lowercase",
      bindKey: s("Ctrl-Shift-U", "Ctrl-Shift-U"),
      exec: function(n) {
        n.toLowerCase();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "autoindent",
      description: "Auto Indent",
      bindKey: s(null, null),
      exec: function(n) {
        n.autoIndent();
      },
      multiSelectAction: "forEachLine",
      scrollIntoView: "animate"
    },
    {
      name: "expandtoline",
      description: "Expand to line",
      bindKey: s("Ctrl-Shift-L", "Command-Shift-L"),
      exec: function(n) {
        var i = n.selection.getRange();
        i.start.column = i.end.column = 0, i.end.row++, n.selection.setRange(i, !1);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor",
      readOnly: !0
    },
    {
      name: "joinlines",
      description: "Join lines",
      bindKey: s(null, null),
      exec: function(n) {
        for (var i = n.selection.isBackwards(), r = i ? n.selection.getSelectionLead() : n.selection.getSelectionAnchor(), l = i ? n.selection.getSelectionAnchor() : n.selection.getSelectionLead(), c = n.session.doc.getLine(r.row).length, f = n.session.doc.getTextRange(n.selection.getRange()), b = f.replace(/\n\s*/, " ").length, y = n.session.doc.getLine(r.row), x = r.row + 1; x <= l.row + 1; x++) {
          var k = d.stringTrimLeft(d.stringTrimRight(n.session.doc.getLine(x)));
          k.length !== 0 && (k = " " + k), y += k;
        }
        l.row + 1 < n.session.doc.getLength() - 1 && (y += n.session.doc.getNewLineCharacter()), n.clearSelection(), n.session.doc.replace(new o(r.row, 0, l.row + 2, 0), y), b > 0 ? (n.selection.moveCursorTo(r.row, r.column), n.selection.selectTo(r.row, r.column + b)) : (c = n.session.doc.getLine(r.row).length > c ? c + 1 : c, n.selection.moveCursorTo(r.row, c));
      },
      multiSelectAction: "forEach",
      readOnly: !0
    },
    {
      name: "invertSelection",
      description: "Invert selection",
      bindKey: s(null, null),
      exec: function(n) {
        var i = n.session.doc.getLength() - 1, r = n.session.doc.getLine(i).length, l = n.selection.rangeList.ranges, c = [];
        l.length < 1 && (l = [n.selection.getRange()]);
        for (var f = 0; f < l.length; f++)
          f == l.length - 1 && (l[f].end.row === i && l[f].end.column === r || c.push(new o(l[f].end.row, l[f].end.column, i, r))), f === 0 ? l[f].start.row === 0 && l[f].start.column === 0 || c.push(new o(0, 0, l[f].start.row, l[f].start.column)) : c.push(new o(l[f - 1].end.row, l[f - 1].end.column, l[f].start.row, l[f].start.column));
        n.exitMultiSelectMode(), n.clearSelection();
        for (var f = 0; f < c.length; f++)
          n.selection.addRange(c[f], !1);
      },
      readOnly: !0,
      scrollIntoView: "none"
    },
    {
      name: "addLineAfter",
      exec: function(n) {
        n.selection.clearSelection(), n.navigateLineEnd(), n.insert(`
`);
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "addLineBefore",
      exec: function(n) {
        n.selection.clearSelection();
        var i = n.getCursorPosition();
        n.selection.moveTo(i.row - 1, Number.MAX_VALUE), n.insert(`
`), i.row === 0 && n.navigateUp();
      },
      multiSelectAction: "forEach",
      scrollIntoView: "cursor"
    },
    {
      name: "openCommandPallete",
      description: "Open command pallete",
      bindKey: s("F1", "F1"),
      exec: function(n) {
        n.prompt({ $type: "commands" });
      },
      readOnly: !0
    },
    {
      name: "modeSelect",
      description: "Change language mode...",
      bindKey: s(null, null),
      exec: function(n) {
        n.prompt({ $type: "modes" });
      },
      readOnly: !0
    }
  ];
  for (var h = 1; h < 9; h++)
    e.commands.push({
      name: "foldToLevel" + h,
      description: "Fold To Level " + h,
      level: h,
      exec: function(n) {
        n.session.foldToLevel(this.level);
      },
      scrollIntoView: "center",
      readOnly: !0
    });
});
ace.define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/clipboard"], function(t, e, a) {
  t("./lib/fixoldbrowsers");
  var d = t("./lib/oop"), u = t("./lib/dom"), o = t("./lib/lang"), s = t("./lib/useragent"), h = t("./keyboard/textinput").TextInput, n = t("./mouse/mouse_handler").MouseHandler, i = t("./mouse/fold_handler").FoldHandler, r = t("./keyboard/keybinding").KeyBinding, l = t("./edit_session").EditSession, c = t("./search").Search, f = t("./range").Range, b = t("./lib/event_emitter").EventEmitter, y = t("./commands/command_manager").CommandManager, x = t("./commands/default_commands").commands, k = t("./config"), S = t("./token_iterator").TokenIterator, m = t("./clipboard"), v = function(g, w, p) {
    this.$toDestroy = [];
    var C = g.getContainerElement();
    this.container = C, this.renderer = g, this.id = "editor" + ++v.$uid, this.commands = new y(s.isMac ? "mac" : "win", x), typeof document == "object" && (this.textInput = new h(g.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new n(this), new i(this)), this.keyBinding = new r(this), this.$search = new c().set({
      wrap: !0
    }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = o.delayedCall(function() {
      this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart();
    }.bind(this)), this.on("change", function(A, _) {
      _._$emitInputEvent.schedule(31);
    }), this.setSession(w || p && p.session || new l("")), k.resetOptions(this), p && this.setOptions(p), k._signal("editor", this);
  };
  v.$uid = 0, function() {
    d.implement(this, b), this.$initOperationListeners = function() {
      this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = o.delayedCall(this.endOperation.bind(this, !0)), this.on("change", function() {
        this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.docChanged = !0;
      }.bind(this), !0), this.on("changeSelection", function() {
        this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.selectionChanged = !0;
      }.bind(this), !0);
    }, this.curOp = null, this.prevOp = {}, this.startOperation = function(g) {
      if (this.curOp) {
        if (!g || this.curOp.command)
          return;
        this.prevOp = this.curOp;
      }
      g || (this.previousCommand = null, g = {}), this.$opResetTimer.schedule(), this.curOp = this.session.curOp = {
        command: g.command || {},
        args: g.args,
        scrollTop: this.renderer.scrollTop
      }, this.curOp.selectionBefore = this.selection.toJSON();
    }, this.endOperation = function(g) {
      if (this.curOp && this.session) {
        if (g && g.returnValue === !1 || !this.session)
          return this.curOp = null;
        if (g == !0 && this.curOp.command && this.curOp.command.name == "mouse" || (this._signal("beforeEndOperation"), !this.curOp)) return;
        var w = this.curOp.command, p = w && w.scrollIntoView;
        if (p) {
          switch (p) {
            case "center-animate":
              p = "animate";
            case "center":
              this.renderer.scrollCursorIntoView(null, 0.5);
              break;
            case "animate":
            case "cursor":
              this.renderer.scrollCursorIntoView();
              break;
            case "selectionPart":
              var C = this.selection.getRange(), A = this.renderer.layerConfig;
              (C.start.row >= A.lastRow || C.end.row <= A.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
              break;
          }
          p == "animate" && this.renderer.animateScrolling(this.curOp.scrollTop);
        }
        var _ = this.selection.toJSON();
        this.curOp.selectionAfter = _, this.$lastSel = this.selection.toJSON(), this.session.getUndoManager().addSelection(_), this.prevOp = this.curOp, this.curOp = null;
      }
    }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function(g) {
      if (this.$mergeUndoDeltas) {
        var w = this.prevOp, p = this.$mergeableCommands, C = w.command && g.command.name == w.command.name;
        if (g.command.name == "insertstring") {
          var A = g.args;
          this.mergeNextCommand === void 0 && (this.mergeNextCommand = !0), C = C && this.mergeNextCommand && (!/\s/.test(A) || /\s/.test(w.args)), this.mergeNextCommand = !0;
        } else
          C = C && p.indexOf(g.command.name) !== -1;
        this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2e3 && (C = !1), C ? this.session.mergeUndoDeltas = !0 : p.indexOf(g.command.name) !== -1 && (this.sequenceStartTime = Date.now());
      }
    }, this.setKeyboardHandler = function(g, w) {
      if (g && typeof g == "string" && g != "ace") {
        this.$keybindingId = g;
        var p = this;
        k.loadModule(["keybinding", g], function(C) {
          p.$keybindingId == g && p.keyBinding.setKeyboardHandler(C && C.handler), w && w();
        });
      } else
        this.$keybindingId = null, this.keyBinding.setKeyboardHandler(g), w && w();
    }, this.getKeyboardHandler = function() {
      return this.keyBinding.getKeyboardHandler();
    }, this.setSession = function(g) {
      if (this.session != g) {
        this.curOp && this.endOperation(), this.curOp = {};
        var w = this.session;
        if (w) {
          this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
          var p = this.session.getSelection();
          p.off("changeCursor", this.$onCursorChange), p.off("changeSelection", this.$onSelectionChange);
        }
        this.session = g, g ? (this.$onDocumentChange = this.onDocumentChange.bind(this), g.on("change", this.$onDocumentChange), this.renderer.setSession(g), this.$onChangeMode = this.onChangeMode.bind(this), g.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), g.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), g.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), g.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), g.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), g.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = g.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(g)), this._signal("changeSession", {
          session: g,
          oldSession: w
        }), this.curOp = null, w && w._signal("changeEditor", { oldEditor: this }), g && g._signal("changeEditor", { editor: this }), g && g.bgTokenizer && g.bgTokenizer.scheduleStart();
      }
    }, this.getSession = function() {
      return this.session;
    }, this.setValue = function(g, w) {
      return this.session.doc.setValue(g), w ? w == 1 ? this.navigateFileEnd() : w == -1 && this.navigateFileStart() : this.selectAll(), g;
    }, this.getValue = function() {
      return this.session.getValue();
    }, this.getSelection = function() {
      return this.selection;
    }, this.resize = function(g) {
      this.renderer.onResize(g);
    }, this.setTheme = function(g, w) {
      this.renderer.setTheme(g, w);
    }, this.getTheme = function() {
      return this.renderer.getTheme();
    }, this.setStyle = function(g) {
      this.renderer.setStyle(g);
    }, this.unsetStyle = function(g) {
      this.renderer.unsetStyle(g);
    }, this.getFontSize = function() {
      return this.getOption("fontSize") || u.computedStyle(this.container).fontSize;
    }, this.setFontSize = function(g) {
      this.setOption("fontSize", g);
    }, this.$highlightBrackets = function() {
      if (!this.$highlightPending) {
        var g = this;
        this.$highlightPending = !0, setTimeout(function() {
          g.$highlightPending = !1;
          var w = g.session;
          if (!(!w || !w.bgTokenizer)) {
            w.$bracketHighlight && (w.$bracketHighlight.markerIds.forEach(function(A) {
              w.removeMarker(A);
            }), w.$bracketHighlight = null);
            var p = w.getMatchingBracketRanges(g.getCursorPosition());
            if (!p && w.$mode.getMatching && (p = w.$mode.getMatching(g.session)), !!p) {
              var C = "ace_bracket";
              Array.isArray(p) ? p.length == 1 && (C = "ace_error_bracket") : p = [p], p.length == 2 && (f.comparePoints(p[0].end, p[1].start) == 0 ? p = [f.fromPoints(p[0].start, p[1].end)] : f.comparePoints(p[0].start, p[1].end) == 0 && (p = [f.fromPoints(p[1].start, p[0].end)])), w.$bracketHighlight = {
                ranges: p,
                markerIds: p.map(function(A) {
                  return w.addMarker(A, C, "text");
                })
              };
            }
          }
        }, 50);
      }
    }, this.$highlightTags = function() {
      if (!this.$highlightTagPending) {
        var g = this;
        this.$highlightTagPending = !0, setTimeout(function() {
          g.$highlightTagPending = !1;
          var w = g.session;
          if (!(!w || !w.bgTokenizer)) {
            var p = g.getCursorPosition(), C = new S(g.session, p.row, p.column), A = C.getCurrentToken();
            if (!A || !/\b(?:tag-open|tag-name)/.test(A.type)) {
              w.removeMarker(w.$tagHighlight), w.$tagHighlight = null;
              return;
            }
            if (!(A.type.indexOf("tag-open") !== -1 && (A = C.stepForward(), !A))) {
              var _ = A.value, E = A.value, I = 0, L = C.stepBackward();
              if (L.value === "<")
                do
                  L = A, A = C.stepForward(), A && (A.type.indexOf("tag-name") !== -1 ? (E = A.value, _ === E && (L.value === "<" ? I++ : L.value === "</" && I--)) : _ === E && A.value === "/>" && I--);
                while (A && I >= 0);
              else {
                do
                  if (A = L, L = C.stepBackward(), A) {
                    if (A.type.indexOf("tag-name") !== -1)
                      _ === A.value && (L.value === "<" ? I++ : L.value === "</" && I--);
                    else if (A.value === "/>") {
                      for (var D = 0, R = L; R; ) {
                        if (R.type.indexOf("tag-name") !== -1 && R.value === _) {
                          I--;
                          break;
                        } else if (R.value === "<")
                          break;
                        R = C.stepBackward(), D++;
                      }
                      for (var N = 0; N < D; N++)
                        C.stepForward();
                    }
                  }
                while (L && I <= 0);
                C.stepForward();
              }
              if (!A) {
                w.removeMarker(w.$tagHighlight), w.$tagHighlight = null;
                return;
              }
              var O = C.getCurrentTokenRow(), P = C.getCurrentTokenColumn(), z = new f(O, P, O, P + A.value.length), M = w.$backMarkers[w.$tagHighlight];
              w.$tagHighlight && M != null && z.compareRange(M.range) !== 0 && (w.removeMarker(w.$tagHighlight), w.$tagHighlight = null), w.$tagHighlight || (w.$tagHighlight = w.addMarker(z, "ace_bracket", "text"));
            }
          }
        }, 50);
      }
    }, this.focus = function() {
      var g = this;
      setTimeout(function() {
        g.isFocused() || g.textInput.focus();
      }), this.textInput.focus();
    }, this.isFocused = function() {
      return this.textInput.isFocused();
    }, this.blur = function() {
      this.textInput.blur();
    }, this.onFocus = function(g) {
      this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", g));
    }, this.onBlur = function(g) {
      this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", g));
    }, this.$cursorChange = function() {
      this.renderer.updateCursor(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine();
    }, this.onDocumentChange = function(g) {
      var w = this.session.$useWrapMode, p = g.start.row == g.end.row ? g.end.row : 1 / 0;
      this.renderer.updateLines(g.start.row, p, w), this._signal("change", g), this.$cursorChange();
    }, this.onTokenizerUpdate = function(g) {
      var w = g.data;
      this.renderer.updateLines(w.first, w.last);
    }, this.onScrollTopChange = function() {
      this.renderer.scrollToY(this.session.getScrollTop());
    }, this.onScrollLeftChange = function() {
      this.renderer.scrollToX(this.session.getScrollLeft());
    }, this.onCursorChange = function() {
      this.$cursorChange(), this._signal("changeSelection");
    }, this.$updateHighlightActiveLine = function() {
      var g = this.getSession(), w;
      if (this.$highlightActiveLine && ((this.$selectionStyle != "line" || !this.selection.isMultiLine()) && (w = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (w = !1), this.renderer.$maxLines && this.session.getLength() === 1 && !(this.renderer.$minLines > 1) && (w = !1)), g.$highlightLineMarker && !w)
        g.removeMarker(g.$highlightLineMarker.id), g.$highlightLineMarker = null;
      else if (!g.$highlightLineMarker && w) {
        var p = new f(w.row, w.column, w.row, 1 / 0);
        p.id = g.addMarker(p, "ace_active-line", "screenLine"), g.$highlightLineMarker = p;
      } else w && (g.$highlightLineMarker.start.row = w.row, g.$highlightLineMarker.end.row = w.row, g.$highlightLineMarker.start.column = w.column, g._signal("changeBackMarker"));
    }, this.onSelectionChange = function(g) {
      var w = this.session;
      if (w.$selectionMarker && w.removeMarker(w.$selectionMarker), w.$selectionMarker = null, this.selection.isEmpty())
        this.$updateHighlightActiveLine();
      else {
        var p = this.selection.getRange(), C = this.getSelectionStyle();
        w.$selectionMarker = w.addMarker(p, "ace_selection", C);
      }
      var A = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
      this.session.highlight(A), this._signal("changeSelection");
    }, this.$getSelectionHighLightRegexp = function() {
      var g = this.session, w = this.getSelectionRange();
      if (!(w.isEmpty() || w.isMultiLine())) {
        var p = w.start.column, C = w.end.column, A = g.getLine(w.start.row), _ = A.substring(p, C);
        if (!(_.length > 5e3 || !/[\w\d]/.test(_))) {
          var E = this.$search.$assembleRegExp({
            wholeWord: !0,
            caseSensitive: !0,
            needle: _
          }), I = A.substring(p - 1, C + 1);
          if (E.test(I))
            return E;
        }
      }
    }, this.onChangeFrontMarker = function() {
      this.renderer.updateFrontMarkers();
    }, this.onChangeBackMarker = function() {
      this.renderer.updateBackMarkers();
    }, this.onChangeBreakpoint = function() {
      this.renderer.updateBreakpoints();
    }, this.onChangeAnnotation = function() {
      this.renderer.setAnnotations(this.session.getAnnotations());
    }, this.onChangeMode = function(g) {
      this.renderer.updateText(), this._emit("changeMode", g);
    }, this.onChangeWrapLimit = function() {
      this.renderer.updateFull();
    }, this.onChangeWrapMode = function() {
      this.renderer.onResize(!0);
    }, this.onChangeFold = function() {
      this.$updateHighlightActiveLine(), this.renderer.updateFull();
    }, this.getSelectedText = function() {
      return this.session.getTextRange(this.getSelectionRange());
    }, this.getCopyText = function() {
      var g = this.getSelectedText(), w = this.session.doc.getNewLineCharacter(), p = !1;
      if (!g && this.$copyWithEmptySelection) {
        p = !0;
        for (var C = this.selection.getAllRanges(), A = 0; A < C.length; A++) {
          var _ = C[A];
          A && C[A - 1].start.row == _.start.row || (g += this.session.getLine(_.start.row) + w);
        }
      }
      var E = { text: g };
      return this._signal("copy", E), m.lineMode = p ? E.text : "", E.text;
    }, this.onCopy = function() {
      this.commands.exec("copy", this);
    }, this.onCut = function() {
      this.commands.exec("cut", this);
    }, this.onPaste = function(g, w) {
      var p = { text: g, event: w };
      this.commands.exec("paste", this, p);
    }, this.$handlePaste = function(g) {
      typeof g == "string" && (g = { text: g }), this._signal("paste", g);
      var w = g.text, p = w == m.lineMode, C = this.session;
      if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
        p ? C.insert({ row: this.selection.lead.row, column: 0 }, w) : this.insert(w);
      else if (p)
        this.selection.rangeList.ranges.forEach(function(D) {
          C.insert({ row: D.start.row, column: 0 }, w);
        });
      else {
        var A = w.split(/\r\n|\r|\n/), _ = this.selection.rangeList.ranges, E = A.length == 2 && (!A[0] || !A[1]);
        if (A.length != _.length || E)
          return this.commands.exec("insertstring", this, w);
        for (var I = _.length; I--; ) {
          var L = _[I];
          L.isEmpty() || C.remove(L), C.insert(L.start, A[I]);
        }
      }
    }, this.execCommand = function(g, w) {
      return this.commands.exec(g, this, w);
    }, this.insert = function(g, w) {
      var p = this.session, C = p.getMode(), A = this.getCursorPosition();
      if (this.getBehavioursEnabled() && !w) {
        var _ = C.transformAction(p.getState(A.row), "insertion", this, p, g);
        _ && (g !== _.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), g = _.text);
      }
      if (g == "	" && (g = this.session.getTabString()), this.selection.isEmpty()) {
        if (this.session.getOverwrite() && g.indexOf(`
`) == -1) {
          var E = new f.fromPoints(A, A);
          E.end.column += g.length, this.session.remove(E);
        }
      } else {
        var E = this.getSelectionRange();
        A = this.session.remove(E), this.clearSelection();
      }
      if (g == `
` || g == `\r
`) {
        var R = p.getLine(A.row);
        if (A.column > R.search(/\S|$/)) {
          var I = R.substr(A.column).search(/\S|$/);
          p.doc.removeInLine(A.row, A.column, A.column + I);
        }
      }
      this.clearSelection();
      var L = A.column, D = p.getState(A.row), R = p.getLine(A.row), N = C.checkOutdent(D, R, g);
      if (p.insert(A, g), _ && _.selection && (_.selection.length == 2 ? this.selection.setSelectionRange(
        new f(
          A.row,
          L + _.selection[0],
          A.row,
          L + _.selection[1]
        )
      ) : this.selection.setSelectionRange(
        new f(
          A.row + _.selection[0],
          _.selection[1],
          A.row + _.selection[2],
          _.selection[3]
        )
      )), this.$enableAutoIndent) {
        if (p.getDocument().isNewLine(g)) {
          var O = C.getNextLineIndent(D, R.slice(0, A.column), p.getTabString());
          p.insert({ row: A.row + 1, column: 0 }, O);
        }
        N && C.autoOutdent(D, p, A.row);
      }
    }, this.autoIndent = function() {
      var g = this.session, w = g.getMode(), p, C;
      if (this.selection.isEmpty())
        p = 0, C = g.doc.getLength() - 1;
      else {
        var A = this.getSelectionRange();
        p = A.start.row, C = A.end.row;
      }
      for (var _ = "", E = "", I = "", L, D, R, N = g.getTabString(), O = p; O <= C; O++)
        O > 0 && (_ = g.getState(O - 1), E = g.getLine(O - 1), I = w.getNextLineIndent(_, E, N)), L = g.getLine(O), D = w.$getIndent(L), I !== D && (D.length > 0 && (R = new f(O, 0, O, D.length), g.remove(R)), I.length > 0 && g.insert({ row: O, column: 0 }, I)), w.autoOutdent(_, g, O);
    }, this.onTextInput = function(g, w) {
      if (!w)
        return this.keyBinding.onTextInput(g);
      this.startOperation({ command: { name: "insertstring" } });
      var p = this.applyComposition.bind(this, g, w);
      this.selection.rangeCount ? this.forEachSelection(p) : p(), this.endOperation();
    }, this.applyComposition = function(g, w) {
      if (w.extendLeft || w.extendRight) {
        var p = this.selection.getRange();
        p.start.column -= w.extendLeft, p.end.column += w.extendRight, p.start.column < 0 && (p.start.row--, p.start.column += this.session.getLine(p.start.row).length + 1), this.selection.setRange(p), !g && !p.isEmpty() && this.remove();
      }
      if ((g || !this.selection.isEmpty()) && this.insert(g, !0), w.restoreStart || w.restoreEnd) {
        var p = this.selection.getRange();
        p.start.column -= w.restoreStart, p.end.column -= w.restoreEnd, this.selection.setRange(p);
      }
    }, this.onCommandKey = function(g, w, p) {
      return this.keyBinding.onCommandKey(g, w, p);
    }, this.setOverwrite = function(g) {
      this.session.setOverwrite(g);
    }, this.getOverwrite = function() {
      return this.session.getOverwrite();
    }, this.toggleOverwrite = function() {
      this.session.toggleOverwrite();
    }, this.setScrollSpeed = function(g) {
      this.setOption("scrollSpeed", g);
    }, this.getScrollSpeed = function() {
      return this.getOption("scrollSpeed");
    }, this.setDragDelay = function(g) {
      this.setOption("dragDelay", g);
    }, this.getDragDelay = function() {
      return this.getOption("dragDelay");
    }, this.setSelectionStyle = function(g) {
      this.setOption("selectionStyle", g);
    }, this.getSelectionStyle = function() {
      return this.getOption("selectionStyle");
    }, this.setHighlightActiveLine = function(g) {
      this.setOption("highlightActiveLine", g);
    }, this.getHighlightActiveLine = function() {
      return this.getOption("highlightActiveLine");
    }, this.setHighlightGutterLine = function(g) {
      this.setOption("highlightGutterLine", g);
    }, this.getHighlightGutterLine = function() {
      return this.getOption("highlightGutterLine");
    }, this.setHighlightSelectedWord = function(g) {
      this.setOption("highlightSelectedWord", g);
    }, this.getHighlightSelectedWord = function() {
      return this.$highlightSelectedWord;
    }, this.setAnimatedScroll = function(g) {
      this.renderer.setAnimatedScroll(g);
    }, this.getAnimatedScroll = function() {
      return this.renderer.getAnimatedScroll();
    }, this.setShowInvisibles = function(g) {
      this.renderer.setShowInvisibles(g);
    }, this.getShowInvisibles = function() {
      return this.renderer.getShowInvisibles();
    }, this.setDisplayIndentGuides = function(g) {
      this.renderer.setDisplayIndentGuides(g);
    }, this.getDisplayIndentGuides = function() {
      return this.renderer.getDisplayIndentGuides();
    }, this.setShowPrintMargin = function(g) {
      this.renderer.setShowPrintMargin(g);
    }, this.getShowPrintMargin = function() {
      return this.renderer.getShowPrintMargin();
    }, this.setPrintMarginColumn = function(g) {
      this.renderer.setPrintMarginColumn(g);
    }, this.getPrintMarginColumn = function() {
      return this.renderer.getPrintMarginColumn();
    }, this.setReadOnly = function(g) {
      this.setOption("readOnly", g);
    }, this.getReadOnly = function() {
      return this.getOption("readOnly");
    }, this.setBehavioursEnabled = function(g) {
      this.setOption("behavioursEnabled", g);
    }, this.getBehavioursEnabled = function() {
      return this.getOption("behavioursEnabled");
    }, this.setWrapBehavioursEnabled = function(g) {
      this.setOption("wrapBehavioursEnabled", g);
    }, this.getWrapBehavioursEnabled = function() {
      return this.getOption("wrapBehavioursEnabled");
    }, this.setShowFoldWidgets = function(g) {
      this.setOption("showFoldWidgets", g);
    }, this.getShowFoldWidgets = function() {
      return this.getOption("showFoldWidgets");
    }, this.setFadeFoldWidgets = function(g) {
      this.setOption("fadeFoldWidgets", g);
    }, this.getFadeFoldWidgets = function() {
      return this.getOption("fadeFoldWidgets");
    }, this.remove = function(g) {
      this.selection.isEmpty() && (g == "left" ? this.selection.selectLeft() : this.selection.selectRight());
      var w = this.getSelectionRange();
      if (this.getBehavioursEnabled()) {
        var p = this.session, C = p.getState(w.start.row), A = p.getMode().transformAction(C, "deletion", this, p, w);
        if (w.end.column === 0) {
          var _ = p.getTextRange(w);
          if (_[_.length - 1] == `
`) {
            var E = p.getLine(w.end.row);
            /^\s+$/.test(E) && (w.end.column = E.length);
          }
        }
        A && (w = A);
      }
      this.session.remove(w), this.clearSelection();
    }, this.removeWordRight = function() {
      this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection();
    }, this.removeWordLeft = function() {
      this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
    }, this.removeToLineStart = function() {
      this.selection.isEmpty() && this.selection.selectLineStart(), this.selection.isEmpty() && this.selection.selectLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection();
    }, this.removeToLineEnd = function() {
      this.selection.isEmpty() && this.selection.selectLineEnd();
      var g = this.getSelectionRange();
      g.start.column == g.end.column && g.start.row == g.end.row && (g.end.column = 0, g.end.row++), this.session.remove(g), this.clearSelection();
    }, this.splitLine = function() {
      this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
      var g = this.getCursorPosition();
      this.insert(`
`), this.moveCursorToPosition(g);
    }, this.transposeLetters = function() {
      if (this.selection.isEmpty()) {
        var g = this.getCursorPosition(), w = g.column;
        if (w !== 0) {
          var p = this.session.getLine(g.row), C, A;
          w < p.length ? (C = p.charAt(w) + p.charAt(w - 1), A = new f(g.row, w - 1, g.row, w + 1)) : (C = p.charAt(w - 1) + p.charAt(w - 2), A = new f(g.row, w - 2, g.row, w)), this.session.replace(A, C), this.session.selection.moveToPosition(A.end);
        }
      }
    }, this.toLowerCase = function() {
      var g = this.getSelectionRange();
      this.selection.isEmpty() && this.selection.selectWord();
      var w = this.getSelectionRange(), p = this.session.getTextRange(w);
      this.session.replace(w, p.toLowerCase()), this.selection.setSelectionRange(g);
    }, this.toUpperCase = function() {
      var g = this.getSelectionRange();
      this.selection.isEmpty() && this.selection.selectWord();
      var w = this.getSelectionRange(), p = this.session.getTextRange(w);
      this.session.replace(w, p.toUpperCase()), this.selection.setSelectionRange(g);
    }, this.indent = function() {
      var g = this.session, w = this.getSelectionRange();
      if (w.start.row < w.end.row) {
        var p = this.$getSelectedRows();
        g.indentRows(p.first, p.last, "	");
        return;
      } else if (w.start.column < w.end.column) {
        var C = g.getTextRange(w);
        if (!/^\s+$/.test(C)) {
          var p = this.$getSelectedRows();
          g.indentRows(p.first, p.last, "	");
          return;
        }
      }
      var A = g.getLine(w.start.row), _ = w.start, E = g.getTabSize(), I = g.documentToScreenColumn(_.row, _.column);
      if (this.session.getUseSoftTabs())
        var L = E - I % E, D = o.stringRepeat(" ", L);
      else {
        for (var L = I % E; A[w.start.column - 1] == " " && L; )
          w.start.column--, L--;
        this.selection.setSelectionRange(w), D = "	";
      }
      return this.insert(D);
    }, this.blockIndent = function() {
      var g = this.$getSelectedRows();
      this.session.indentRows(g.first, g.last, "	");
    }, this.blockOutdent = function() {
      var g = this.session.getSelection();
      this.session.outdentRows(g.getRange());
    }, this.sortLines = function() {
      for (var g = this.$getSelectedRows(), w = this.session, p = [], C = g.first; C <= g.last; C++)
        p.push(w.getLine(C));
      p.sort(function(E, I) {
        return E.toLowerCase() < I.toLowerCase() ? -1 : E.toLowerCase() > I.toLowerCase() ? 1 : 0;
      });
      for (var A = new f(0, 0, 0, 0), C = g.first; C <= g.last; C++) {
        var _ = w.getLine(C);
        A.start.row = C, A.end.row = C, A.end.column = _.length, w.replace(A, p[C - g.first]);
      }
    }, this.toggleCommentLines = function() {
      var g = this.session.getState(this.getCursorPosition().row), w = this.$getSelectedRows();
      this.session.getMode().toggleCommentLines(g, this.session, w.first, w.last);
    }, this.toggleBlockComment = function() {
      var g = this.getCursorPosition(), w = this.session.getState(g.row), p = this.getSelectionRange();
      this.session.getMode().toggleBlockComment(w, this.session, p, g);
    }, this.getNumberAt = function(g, w) {
      var p = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
      p.lastIndex = 0;
      for (var C = this.session.getLine(g); p.lastIndex < w; ) {
        var A = p.exec(C);
        if (A.index <= w && A.index + A[0].length >= w) {
          var _ = {
            value: A[0],
            start: A.index,
            end: A.index + A[0].length
          };
          return _;
        }
      }
      return null;
    }, this.modifyNumber = function(g) {
      var w = this.selection.getCursor().row, p = this.selection.getCursor().column, C = new f(w, p - 1, w, p), A = this.session.getTextRange(C);
      if (!isNaN(parseFloat(A)) && isFinite(A)) {
        var _ = this.getNumberAt(w, p);
        if (_) {
          var E = _.value.indexOf(".") >= 0 ? _.start + _.value.indexOf(".") + 1 : _.end, I = _.start + _.value.length - E, L = parseFloat(_.value);
          L *= Math.pow(10, I), E !== _.end && p < E ? g *= Math.pow(10, _.end - p - 1) : g *= Math.pow(10, _.end - p), L += g, L /= Math.pow(10, I);
          var D = L.toFixed(I), R = new f(w, _.start, w, _.end);
          this.session.replace(R, D), this.moveCursorTo(w, Math.max(_.start + 1, p + D.length - _.value.length));
        }
      } else
        this.toggleWord();
    }, this.$toggleWordPairs = [
      ["first", "last"],
      ["true", "false"],
      ["yes", "no"],
      ["width", "height"],
      ["top", "bottom"],
      ["right", "left"],
      ["on", "off"],
      ["x", "y"],
      ["get", "set"],
      ["max", "min"],
      ["horizontal", "vertical"],
      ["show", "hide"],
      ["add", "remove"],
      ["up", "down"],
      ["before", "after"],
      ["even", "odd"],
      ["in", "out"],
      ["inside", "outside"],
      ["next", "previous"],
      ["increase", "decrease"],
      ["attach", "detach"],
      ["&&", "||"],
      ["==", "!="]
    ], this.toggleWord = function() {
      var g = this.selection.getCursor().row, w = this.selection.getCursor().column;
      this.selection.selectWord();
      var p = this.getSelectedText(), C = this.selection.getWordRange().start.column, A = p.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/), _ = w - C - 1;
      _ < 0 && (_ = 0);
      var E = 0, I = 0, L = this;
      p.match(/[A-Za-z0-9_]+/) && A.forEach(function(V, U) {
        I = E + V.length, _ >= E && _ <= I && (p = V, L.selection.clearSelection(), L.moveCursorTo(g, E + C), L.selection.selectTo(g, I + C)), E = I;
      });
      for (var D = this.$toggleWordPairs, R, N = 0; N < D.length; N++)
        for (var O = D[N], P = 0; P <= 1; P++) {
          var z = +!P, M = p.match(new RegExp("^\\s?_?(" + o.escapeRegExp(O[P]) + ")\\s?$", "i"));
          if (M) {
            var B = p.match(new RegExp("([_]|^|\\s)(" + o.escapeRegExp(M[1]) + ")($|\\s)", "g"));
            B && (R = p.replace(new RegExp(o.escapeRegExp(O[P]), "i"), function(V) {
              var U = O[z];
              return V.toUpperCase() == V ? U = U.toUpperCase() : V.charAt(0).toUpperCase() == V.charAt(0) && (U = U.substr(0, 0) + O[z].charAt(0).toUpperCase() + U.substr(1)), U;
            }), this.insert(R), R = "");
          }
        }
    }, this.removeLines = function() {
      var g = this.$getSelectedRows();
      this.session.removeFullLines(g.first, g.last), this.clearSelection();
    }, this.duplicateSelection = function() {
      var g = this.selection, w = this.session, p = g.getRange(), C = g.isBackwards();
      if (p.isEmpty()) {
        var A = p.start.row;
        w.duplicateLines(A, A);
      } else {
        var _ = C ? p.start : p.end, E = w.insert(_, w.getTextRange(p), !1);
        p.start = _, p.end = E, g.setSelectionRange(p, C);
      }
    }, this.moveLinesDown = function() {
      this.$moveLines(1, !1);
    }, this.moveLinesUp = function() {
      this.$moveLines(-1, !1);
    }, this.moveText = function(g, w, p) {
      return this.session.moveText(g, w, p);
    }, this.copyLinesUp = function() {
      this.$moveLines(-1, !0);
    }, this.copyLinesDown = function() {
      this.$moveLines(1, !0);
    }, this.$moveLines = function(g, w) {
      var p, C, A = this.selection;
      if (!A.inMultiSelectMode || this.inVirtualSelectionMode) {
        var _ = A.toOrientedRange();
        p = this.$getSelectedRows(_), C = this.session.$moveLines(p.first, p.last, w ? 0 : g), w && g == -1 && (C = 0), _.moveBy(C, 0), A.fromOrientedRange(_);
      } else {
        var E = A.rangeList.ranges;
        A.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
        for (var I = 0, L = 0, D = E.length, R = 0; R < D; R++) {
          var N = R;
          E[R].moveBy(I, 0), p = this.$getSelectedRows(E[R]);
          for (var O = p.first, P = p.last; ++R < D; ) {
            L && E[R].moveBy(L, 0);
            var z = this.$getSelectedRows(E[R]);
            if (w && z.first != P)
              break;
            if (!w && z.first > P + 1)
              break;
            P = z.last;
          }
          for (R--, I = this.session.$moveLines(O, P, w ? 0 : g), w && g == -1 && (N = R + 1); N <= R; )
            E[N].moveBy(I, 0), N++;
          w || (I = 0), L += I;
        }
        A.fromOrientedRange(A.ranges[0]), A.rangeList.attach(this.session), this.inVirtualSelectionMode = !1;
      }
    }, this.$getSelectedRows = function(g) {
      return g = (g || this.getSelectionRange()).collapseRows(), {
        first: this.session.getRowFoldStart(g.start.row),
        last: this.session.getRowFoldEnd(g.end.row)
      };
    }, this.onCompositionStart = function(g) {
      this.renderer.showComposition(g);
    }, this.onCompositionUpdate = function(g) {
      this.renderer.setCompositionText(g);
    }, this.onCompositionEnd = function() {
      this.renderer.hideComposition();
    }, this.getFirstVisibleRow = function() {
      return this.renderer.getFirstVisibleRow();
    }, this.getLastVisibleRow = function() {
      return this.renderer.getLastVisibleRow();
    }, this.isRowVisible = function(g) {
      return g >= this.getFirstVisibleRow() && g <= this.getLastVisibleRow();
    }, this.isRowFullyVisible = function(g) {
      return g >= this.renderer.getFirstFullyVisibleRow() && g <= this.renderer.getLastFullyVisibleRow();
    }, this.$getVisibleRowCount = function() {
      return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
    }, this.$moveByPage = function(g, w) {
      var p = this.renderer, C = this.renderer.layerConfig, A = g * Math.floor(C.height / C.lineHeight);
      w === !0 ? this.selection.$moveSelection(function() {
        this.moveCursorBy(A, 0);
      }) : w === !1 && (this.selection.moveCursorBy(A, 0), this.selection.clearSelection());
      var _ = p.scrollTop;
      p.scrollBy(0, A * C.lineHeight), w != null && p.scrollCursorIntoView(null, 0.5), p.animateScrolling(_);
    }, this.selectPageDown = function() {
      this.$moveByPage(1, !0);
    }, this.selectPageUp = function() {
      this.$moveByPage(-1, !0);
    }, this.gotoPageDown = function() {
      this.$moveByPage(1, !1);
    }, this.gotoPageUp = function() {
      this.$moveByPage(-1, !1);
    }, this.scrollPageDown = function() {
      this.$moveByPage(1);
    }, this.scrollPageUp = function() {
      this.$moveByPage(-1);
    }, this.scrollToRow = function(g) {
      this.renderer.scrollToRow(g);
    }, this.scrollToLine = function(g, w, p, C) {
      this.renderer.scrollToLine(g, w, p, C);
    }, this.centerSelection = function() {
      var g = this.getSelectionRange(), w = {
        row: Math.floor(g.start.row + (g.end.row - g.start.row) / 2),
        column: Math.floor(g.start.column + (g.end.column - g.start.column) / 2)
      };
      this.renderer.alignCursor(w, 0.5);
    }, this.getCursorPosition = function() {
      return this.selection.getCursor();
    }, this.getCursorPositionScreen = function() {
      return this.session.documentToScreenPosition(this.getCursorPosition());
    }, this.getSelectionRange = function() {
      return this.selection.getRange();
    }, this.selectAll = function() {
      this.selection.selectAll();
    }, this.clearSelection = function() {
      this.selection.clearSelection();
    }, this.moveCursorTo = function(g, w) {
      this.selection.moveCursorTo(g, w);
    }, this.moveCursorToPosition = function(g) {
      this.selection.moveCursorToPosition(g);
    }, this.jumpToMatching = function(g, w) {
      var p = this.getCursorPosition(), C = new S(this.session, p.row, p.column), A = C.getCurrentToken(), _ = A || C.stepForward();
      if (_) {
        var E, I = !1, L = {}, D = p.column - _.start, R, N = {
          ")": "(",
          "(": "(",
          "]": "[",
          "[": "[",
          "{": "{",
          "}": "{"
        };
        do {
          if (_.value.match(/[{}()\[\]]/g)) {
            for (; D < _.value.length && !I; D++)
              if (N[_.value[D]])
                switch (R = N[_.value[D]] + "." + _.type.replace("rparen", "lparen"), isNaN(L[R]) && (L[R] = 0), _.value[D]) {
                  case "(":
                  case "[":
                  case "{":
                    L[R]++;
                    break;
                  case ")":
                  case "]":
                  case "}":
                    L[R]--, L[R] === -1 && (E = "bracket", I = !0);
                    break;
                }
          } else _.type.indexOf("tag-name") !== -1 && (isNaN(L[_.value]) && (L[_.value] = 0), A.value === "<" ? L[_.value]++ : A.value === "</" && L[_.value]--, L[_.value] === -1 && (E = "tag", I = !0));
          I || (A = _, _ = C.stepForward(), D = 0);
        } while (_ && !I);
        if (E) {
          var O, P;
          if (E === "bracket")
            O = this.session.getBracketRange(p), O || (O = new f(
              C.getCurrentTokenRow(),
              C.getCurrentTokenColumn() + D - 1,
              C.getCurrentTokenRow(),
              C.getCurrentTokenColumn() + D - 1
            ), P = O.start, (w || P.row === p.row && Math.abs(P.column - p.column) < 2) && (O = this.session.getBracketRange(P)));
          else if (E === "tag") {
            if (_ && _.type.indexOf("tag-name") !== -1)
              var z = _.value;
            else
              return;
            if (O = new f(
              C.getCurrentTokenRow(),
              C.getCurrentTokenColumn() - 2,
              C.getCurrentTokenRow(),
              C.getCurrentTokenColumn() - 2
            ), O.compare(p.row, p.column) === 0) {
              I = !1;
              do
                _ = A, A = C.stepBackward(), A && (A.type.indexOf("tag-close") !== -1 && O.setEnd(C.getCurrentTokenRow(), C.getCurrentTokenColumn() + 1), _.value === z && _.type.indexOf("tag-name") !== -1 && (A.value === "<" ? L[z]++ : A.value === "</" && L[z]--, L[z] === 0 && (I = !0)));
              while (A && !I);
            }
            _ && _.type.indexOf("tag-name") && (P = O.start, P.row == p.row && Math.abs(P.column - p.column) < 2 && (P = O.end));
          }
          P = O && O.cursor || P, P && (g ? O && w ? this.selection.setRange(O) : O && O.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(P.row, P.column) : this.selection.moveTo(P.row, P.column));
        }
      }
    }, this.gotoLine = function(g, w, p) {
      this.selection.clearSelection(), this.session.unfold({ row: g - 1, column: w || 0 }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(g - 1, w || 0), this.isRowFullyVisible(g - 1) || this.scrollToLine(g - 1, !0, p);
    }, this.navigateTo = function(g, w) {
      this.selection.moveTo(g, w);
    }, this.navigateUp = function(g) {
      if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
        var w = this.selection.anchor.getPosition();
        return this.moveCursorToPosition(w);
      }
      this.selection.clearSelection(), this.selection.moveCursorBy(-g || -1, 0);
    }, this.navigateDown = function(g) {
      if (this.selection.isMultiLine() && this.selection.isBackwards()) {
        var w = this.selection.anchor.getPosition();
        return this.moveCursorToPosition(w);
      }
      this.selection.clearSelection(), this.selection.moveCursorBy(g || 1, 0);
    }, this.navigateLeft = function(g) {
      if (this.selection.isEmpty())
        for (g = g || 1; g--; )
          this.selection.moveCursorLeft();
      else {
        var w = this.getSelectionRange().start;
        this.moveCursorToPosition(w);
      }
      this.clearSelection();
    }, this.navigateRight = function(g) {
      if (this.selection.isEmpty())
        for (g = g || 1; g--; )
          this.selection.moveCursorRight();
      else {
        var w = this.getSelectionRange().end;
        this.moveCursorToPosition(w);
      }
      this.clearSelection();
    }, this.navigateLineStart = function() {
      this.selection.moveCursorLineStart(), this.clearSelection();
    }, this.navigateLineEnd = function() {
      this.selection.moveCursorLineEnd(), this.clearSelection();
    }, this.navigateFileEnd = function() {
      this.selection.moveCursorFileEnd(), this.clearSelection();
    }, this.navigateFileStart = function() {
      this.selection.moveCursorFileStart(), this.clearSelection();
    }, this.navigateWordRight = function() {
      this.selection.moveCursorWordRight(), this.clearSelection();
    }, this.navigateWordLeft = function() {
      this.selection.moveCursorWordLeft(), this.clearSelection();
    }, this.replace = function(g, w) {
      w && this.$search.set(w);
      var p = this.$search.find(this.session), C = 0;
      return p && (this.$tryReplace(p, g) && (C = 1), this.selection.setSelectionRange(p), this.renderer.scrollSelectionIntoView(p.start, p.end)), C;
    }, this.replaceAll = function(g, w) {
      w && this.$search.set(w);
      var p = this.$search.findAll(this.session), C = 0;
      if (!p.length)
        return C;
      var A = this.getSelectionRange();
      this.selection.moveTo(0, 0);
      for (var _ = p.length - 1; _ >= 0; --_)
        this.$tryReplace(p[_], g) && C++;
      return this.selection.setSelectionRange(A), C;
    }, this.$tryReplace = function(g, w) {
      var p = this.session.getTextRange(g);
      return w = this.$search.replace(p, w), w !== null ? (g.end = this.session.replace(g, w), g) : null;
    }, this.getLastSearchOptions = function() {
      return this.$search.getOptions();
    }, this.find = function(g, w, p) {
      w || (w = {}), typeof g == "string" || g instanceof RegExp ? w.needle = g : typeof g == "object" && d.mixin(w, g);
      var C = this.selection.getRange();
      w.needle == null && (g = this.session.getTextRange(C) || this.$search.$options.needle, g || (C = this.session.getWordRange(C.start.row, C.start.column), g = this.session.getTextRange(C)), this.$search.set({ needle: g })), this.$search.set(w), w.start || this.$search.set({ start: C });
      var A = this.$search.find(this.session);
      if (w.preventScroll)
        return A;
      if (A)
        return this.revealRange(A, p), A;
      w.backwards ? C.start = C.end : C.end = C.start, this.selection.setRange(C);
    }, this.findNext = function(g, w) {
      this.find({ skipCurrent: !0, backwards: !1 }, g, w);
    }, this.findPrevious = function(g, w) {
      this.find(g, { skipCurrent: !0, backwards: !0 }, w);
    }, this.revealRange = function(g, w) {
      this.session.unfold(g), this.selection.setSelectionRange(g);
      var p = this.renderer.scrollTop;
      this.renderer.scrollSelectionIntoView(g.start, g.end, 0.5), w !== !1 && this.renderer.animateScrolling(p);
    }, this.undo = function() {
      this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
    }, this.redo = function() {
      this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, 0.5);
    }, this.destroy = function() {
      this.$toDestroy && (this.$toDestroy.forEach(function(g) {
        g.destroy();
      }), this.$toDestroy = null), this.$mouseHandler && this.$mouseHandler.destroy(), this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy(), this._$emitInputEvent && this._$emitInputEvent.cancel(), this.removeAllListeners();
    }, this.setAutoScrollEditorIntoView = function(g) {
      if (g) {
        var w, p = this, C = !1;
        this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
        var A = this.$scrollAnchor;
        A.style.cssText = "position:absolute", this.container.insertBefore(A, this.container.firstChild);
        var _ = this.on("changeSelection", function() {
          C = !0;
        }), E = this.renderer.on("beforeRender", function() {
          C && (w = p.renderer.container.getBoundingClientRect());
        }), I = this.renderer.on("afterRender", function() {
          if (C && w && (p.isFocused() || p.searchBox && p.searchBox.isFocused())) {
            var L = p.renderer, D = L.$cursorLayer.$pixelPos, R = L.layerConfig, N = D.top - R.offset;
            D.top >= 0 && N + w.top < 0 ? C = !0 : D.top < R.height && D.top + w.top + R.lineHeight > window.innerHeight ? C = !1 : C = null, C != null && (A.style.top = N + "px", A.style.left = D.left + "px", A.style.height = R.lineHeight + "px", A.scrollIntoView(C)), C = w = null;
          }
        });
        this.setAutoScrollEditorIntoView = function(L) {
          L || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", _), this.renderer.off("afterRender", I), this.renderer.off("beforeRender", E));
        };
      }
    }, this.$resetCursorStyle = function() {
      var g = this.$cursorStyle || "ace", w = this.renderer.$cursorLayer;
      w && (w.setSmoothBlinking(/smooth/.test(g)), w.isBlinking = !this.$readOnly && g != "wide", u.setCssClass(w.element, "ace_slim-cursors", /slim/.test(g)));
    }, this.prompt = function(g, w, p) {
      var C = this;
      k.loadModule("./ext/prompt", function(A) {
        A.prompt(C, g, w, p);
      });
    };
  }.call(v.prototype), k.defineOptions(v.prototype, "editor", {
    selectionStyle: {
      set: function(g) {
        this.onSelectionChange(), this._signal("changeSelectionStyle", { data: g });
      },
      initialValue: "line"
    },
    highlightActiveLine: {
      set: function() {
        this.$updateHighlightActiveLine();
      },
      initialValue: !0
    },
    highlightSelectedWord: {
      set: function(g) {
        this.$onSelectionChange();
      },
      initialValue: !0
    },
    readOnly: {
      set: function(g) {
        this.textInput.setReadOnly(g), this.$resetCursorStyle();
      },
      initialValue: !1
    },
    copyWithEmptySelection: {
      set: function(g) {
        this.textInput.setCopyWithEmptySelection(g);
      },
      initialValue: !1
    },
    cursorStyle: {
      set: function(g) {
        this.$resetCursorStyle();
      },
      values: ["ace", "slim", "smooth", "wide"],
      initialValue: "ace"
    },
    mergeUndoDeltas: {
      values: [!1, !0, "always"],
      initialValue: !0
    },
    behavioursEnabled: { initialValue: !0 },
    wrapBehavioursEnabled: { initialValue: !0 },
    enableAutoIndent: { initialValue: !0 },
    autoScrollEditorIntoView: {
      set: function(g) {
        this.setAutoScrollEditorIntoView(g);
      }
    },
    keyboardHandler: {
      set: function(g) {
        this.setKeyboardHandler(g);
      },
      get: function() {
        return this.$keybindingId;
      },
      handlesSet: !0
    },
    value: {
      set: function(g) {
        this.session.setValue(g);
      },
      get: function() {
        return this.getValue();
      },
      handlesSet: !0,
      hidden: !0
    },
    session: {
      set: function(g) {
        this.setSession(g);
      },
      get: function() {
        return this.session;
      },
      handlesSet: !0,
      hidden: !0
    },
    showLineNumbers: {
      set: function(g) {
        this.renderer.$gutterLayer.setShowLineNumbers(g), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), g && this.$relativeLineNumbers ? $.attach(this) : $.detach(this);
      },
      initialValue: !0
    },
    relativeLineNumbers: {
      set: function(g) {
        this.$showLineNumbers && g ? $.attach(this) : $.detach(this);
      }
    },
    placeholder: {
      set: function(g) {
        this.$updatePlaceholder || (this.$updatePlaceholder = function() {
          var w = this.session && (this.renderer.$composition || this.getValue());
          if (w && this.renderer.placeholderNode)
            this.renderer.off("afterRender", this.$updatePlaceholder), u.removeCssClass(this.container, "ace_hasPlaceholder"), this.renderer.placeholderNode.remove(), this.renderer.placeholderNode = null;
          else if (!w && !this.renderer.placeholderNode) {
            this.renderer.on("afterRender", this.$updatePlaceholder), u.addCssClass(this.container, "ace_hasPlaceholder");
            var p = u.createElement("div");
            p.className = "ace_placeholder", p.textContent = this.$placeholder || "", this.renderer.placeholderNode = p, this.renderer.content.appendChild(this.renderer.placeholderNode);
          } else !w && this.renderer.placeholderNode && (this.renderer.placeholderNode.textContent = this.$placeholder || "");
        }.bind(this), this.on("input", this.$updatePlaceholder)), this.$updatePlaceholder();
      }
    },
    hScrollBarAlwaysVisible: "renderer",
    vScrollBarAlwaysVisible: "renderer",
    highlightGutterLine: "renderer",
    animatedScroll: "renderer",
    showInvisibles: "renderer",
    showPrintMargin: "renderer",
    printMarginColumn: "renderer",
    printMargin: "renderer",
    fadeFoldWidgets: "renderer",
    showFoldWidgets: "renderer",
    displayIndentGuides: "renderer",
    showGutter: "renderer",
    fontSize: "renderer",
    fontFamily: "renderer",
    maxLines: "renderer",
    minLines: "renderer",
    scrollPastEnd: "renderer",
    fixedWidthGutter: "renderer",
    theme: "renderer",
    hasCssTransforms: "renderer",
    maxPixelHeight: "renderer",
    useTextareaForIME: "renderer",
    scrollSpeed: "$mouseHandler",
    dragDelay: "$mouseHandler",
    dragEnabled: "$mouseHandler",
    focusTimeout: "$mouseHandler",
    tooltipFollowsMouse: "$mouseHandler",
    firstLineNumber: "session",
    overwrite: "session",
    newLineMode: "session",
    useWorker: "session",
    useSoftTabs: "session",
    navigateWithinSoftTabs: "session",
    tabSize: "session",
    wrap: "session",
    indentedSoftWrap: "session",
    foldStyle: "session",
    mode: "session"
  });
  var $ = {
    getText: function(g, w) {
      return (Math.abs(g.selection.lead.row - w) || w + 1 + (w < 9 ? "·" : "")) + "";
    },
    getWidth: function(g, w, p) {
      return Math.max(
        w.toString().length,
        (p.lastRow + 1).toString().length,
        2
      ) * p.characterWidth;
    },
    update: function(g, w) {
      w.renderer.$loop.schedule(w.renderer.CHANGE_GUTTER);
    },
    attach: function(g) {
      g.renderer.$gutterLayer.$renderer = this, g.on("changeSelection", this.update), this.update(null, g);
    },
    detach: function(g) {
      g.renderer.$gutterLayer.$renderer == this && (g.renderer.$gutterLayer.$renderer = null), g.off("changeSelection", this.update), this.update(null, g);
    }
  };
  e.Editor = v;
});
ace.define("ace/undomanager", ["require", "exports", "module", "ace/range"], function(t, e, a) {
  var d = function() {
    this.$maxRev = 0, this.$fromUndo = !1, this.reset();
  };
  (function() {
    this.addSession = function(m) {
      this.$session = m;
    }, this.add = function(m, v, $) {
      this.$fromUndo || m != this.$lastDelta && (this.$keepRedoStack || (this.$redoStack.length = 0), (v === !1 || !this.lastDeltas) && (this.lastDeltas = [], this.$undoStack.push(this.lastDeltas), m.id = this.$rev = ++this.$maxRev), (m.action == "remove" || m.action == "insert") && (this.$lastDelta = m), this.lastDeltas.push(m));
    }, this.addSelection = function(m, v) {
      this.selections.push({
        value: m,
        rev: v || this.$rev
      });
    }, this.startNewGroup = function() {
      return this.lastDeltas = null, this.$rev;
    }, this.markIgnored = function(m, v) {
      v == null && (v = this.$rev + 1);
      for (var $ = this.$undoStack, g = $.length; g--; ) {
        var w = $[g][0];
        if (w.id <= m)
          break;
        w.id < v && (w.ignore = !0);
      }
      this.lastDeltas = null;
    }, this.getSelection = function(m, v) {
      for (var $ = this.selections, g = $.length; g--; ) {
        var w = $[g];
        if (w.rev < m)
          return v && (w = $[g + 1]), w;
      }
    }, this.getRevision = function() {
      return this.$rev;
    }, this.getDeltas = function(m, v) {
      v == null && (v = this.$rev + 1);
      for (var $ = this.$undoStack, g = null, w = 0, p = $.length; p--; ) {
        var C = $[p][0];
        if (C.id < v && !g && (g = p + 1), C.id <= m) {
          w = p + 1;
          break;
        }
      }
      return $.slice(w, g);
    }, this.getChangedRanges = function(m, v) {
      v == null && (v = this.$rev + 1);
    }, this.getChangedLines = function(m, v) {
      v == null && (v = this.$rev + 1);
    }, this.undo = function(m, v) {
      this.lastDeltas = null;
      var $ = this.$undoStack;
      if (u($, $.length)) {
        m || (m = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
        var g = $.pop(), w = null;
        return g && (w = m.undoChanges(g, v), this.$redoStack.push(g), this.$syncRev()), this.$fromUndo = !1, w;
      }
    }, this.redo = function(m, v) {
      if (this.lastDeltas = null, m || (m = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
        var $ = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
        S(this.$redoStack, $), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function(p) {
          p[0].id = ++this.$maxRev;
        }, this);
      }
      var g = this.$redoStack.pop(), w = null;
      return g && (w = m.redoChanges(g, v), this.$undoStack.push(g), this.$syncRev()), this.$fromUndo = !1, w;
    }, this.$syncRev = function() {
      var m = this.$undoStack, v = m[m.length - 1], $ = v && v[0].id || 0;
      this.$redoStackBaseRev = $, this.$rev = $;
    }, this.reset = function() {
      this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = [];
    }, this.canUndo = function() {
      return this.$undoStack.length > 0;
    }, this.canRedo = function() {
      return this.$redoStack.length > 0;
    }, this.bookmark = function(m) {
      m == null && (m = this.$rev), this.mark = m;
    }, this.isAtBookmark = function() {
      return this.$rev === this.mark;
    }, this.toJSON = function() {
    }, this.fromJSON = function() {
    }, this.hasUndo = this.canUndo, this.hasRedo = this.canRedo, this.isClean = this.isAtBookmark, this.markClean = this.bookmark, this.$prettyPrint = function(m) {
      return m ? i(m) : i(this.$undoStack) + `
---
` + i(this.$redoStack);
    };
  }).call(d.prototype);
  function u(m, v) {
    for (var $ = v; $--; ) {
      var g = m[$];
      if (g && !g[0].ignore) {
        for (; $ < v - 1; ) {
          var w = c(m[$], m[$ + 1]);
          m[$] = w[0], m[$ + 1] = w[1], $++;
        }
        return !0;
      }
    }
  }
  var o = t("./range").Range, s = o.comparePoints;
  o.comparePoints;
  function h(m) {
    return { row: m.row, column: m.column };
  }
  function n(m) {
    return {
      start: h(m.start),
      end: h(m.end),
      action: m.action,
      lines: m.lines.slice()
    };
  }
  function i(m) {
    if (m = m || this, Array.isArray(m))
      return m.map(i).join(`
`);
    var v = "";
    return m.action ? (v = m.action == "insert" ? "+" : "-", v += "[" + m.lines + "]") : m.value && (Array.isArray(m.value) ? v = m.value.map(r).join(`
`) : v = r(m.value)), m.start && (v += r(m)), (m.id || m.rev) && (v += "	(" + (m.id || m.rev) + ")"), v;
  }
  function r(m) {
    return m.start.row + ":" + m.start.column + "=>" + m.end.row + ":" + m.end.column;
  }
  function l(m, v) {
    var $ = m.action == "insert", g = v.action == "insert";
    if ($ && g)
      if (s(v.start, m.end) >= 0)
        b(v, m, -1);
      else if (s(v.start, m.start) <= 0)
        b(m, v, 1);
      else
        return null;
    else if ($ && !g)
      if (s(v.start, m.end) >= 0)
        b(v, m, -1);
      else if (s(v.end, m.start) <= 0)
        b(m, v, -1);
      else
        return null;
    else if (!$ && g)
      if (s(v.start, m.start) >= 0)
        b(v, m, 1);
      else if (s(v.start, m.start) <= 0)
        b(m, v, 1);
      else
        return null;
    else if (!$ && !g)
      if (s(v.start, m.start) >= 0)
        b(v, m, 1);
      else if (s(v.end, m.start) <= 0)
        b(m, v, -1);
      else
        return null;
    return [v, m];
  }
  function c(m, v) {
    for (var $ = m.length; $--; )
      for (var g = 0; g < v.length; g++)
        if (!l(m[$], v[g])) {
          for (; $ < m.length; ) {
            for (; g--; )
              l(v[g], m[$]);
            g = v.length, $++;
          }
          return [m, v];
        }
    return m.selectionBefore = v.selectionBefore = m.selectionAfter = v.selectionAfter = null, [v, m];
  }
  function f(m, v) {
    var $ = m.action == "insert", g = v.action == "insert";
    if ($ && g)
      s(m.start, v.start) < 0 ? b(v, m, 1) : b(m, v, 1);
    else if ($ && !g)
      s(m.start, v.end) >= 0 ? b(m, v, -1) : (s(m.start, v.start) <= 0 || b(m, o.fromPoints(v.start, m.start), -1), b(v, m, 1));
    else if (!$ && g)
      s(v.start, m.end) >= 0 ? b(v, m, -1) : (s(v.start, m.start) <= 0 || b(v, o.fromPoints(m.start, v.start), -1), b(m, v, 1));
    else if (!$ && !g)
      if (s(v.start, m.end) >= 0)
        b(v, m, -1);
      else if (s(v.end, m.start) <= 0)
        b(m, v, -1);
      else {
        var w, p;
        return s(m.start, v.start) < 0 && (w = m, m = x(m, v.start)), s(m.end, v.end) > 0 && (p = x(m, v.end)), y(v.end, m.start, m.end, -1), p && !w && (m.lines = p.lines, m.start = p.start, m.end = p.end, p = m), [v, w, p].filter(Boolean);
      }
    return [v, m];
  }
  function b(m, v, $) {
    y(m.start, v.start, v.end, $), y(m.end, v.start, v.end, $);
  }
  function y(m, v, $, g) {
    m.row == (g == 1 ? v : $).row && (m.column += g * ($.column - v.column)), m.row += g * ($.row - v.row);
  }
  function x(m, v) {
    var $ = m.lines, g = m.end;
    m.end = h(v);
    var w = m.end.row - m.start.row, p = $.splice(w, $.length), C = w ? v.column : v.column - m.start.column;
    $.push(p[0].substring(0, C)), p[0] = p[0].substr(C);
    var A = {
      start: h(v),
      end: g,
      lines: p,
      action: m.action
    };
    return A;
  }
  function k(m, v) {
    v = n(v);
    for (var $ = m.length; $--; ) {
      for (var g = m[$], w = 0; w < g.length; w++) {
        var p = g[w], C = f(p, v);
        v = C[0], C.length != 2 && (C[2] ? (g.splice(w + 1, 1, C[1], C[2]), w++) : C[1] || (g.splice(w, 1), w--));
      }
      g.length || m.splice($, 1);
    }
    return m;
  }
  function S(m, v) {
    for (var $ = 0; $ < v.length; $++)
      for (var g = v[$], w = 0; w < g.length; w++)
        k(m, g[w]);
  }
  e.UndoManager = d;
});
ace.define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function(t, e, a) {
  var d = t("../lib/dom"), u = function(o, s) {
    this.element = o, this.canvasHeight = s || 5e5, this.element.style.height = this.canvasHeight * 2 + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0;
  };
  (function() {
    this.moveContainer = function(o) {
      d.translate(this.element, 0, -(o.firstRowScreen * o.lineHeight % this.canvasHeight) - o.offset * this.$offsetCoefficient);
    }, this.pageChanged = function(o, s) {
      return Math.floor(o.firstRowScreen * o.lineHeight / this.canvasHeight) !== Math.floor(s.firstRowScreen * s.lineHeight / this.canvasHeight);
    }, this.computeLineTop = function(o, s, h) {
      var n = s.firstRowScreen * s.lineHeight, i = Math.floor(n / this.canvasHeight), r = h.documentToScreenRow(o, 0) * s.lineHeight;
      return r - i * this.canvasHeight;
    }, this.computeLineHeight = function(o, s, h) {
      return s.lineHeight * h.getRowLineCount(o);
    }, this.getLength = function() {
      return this.cells.length;
    }, this.get = function(o) {
      return this.cells[o];
    }, this.shift = function() {
      this.$cacheCell(this.cells.shift());
    }, this.pop = function() {
      this.$cacheCell(this.cells.pop());
    }, this.push = function(o) {
      if (Array.isArray(o)) {
        this.cells.push.apply(this.cells, o);
        for (var s = d.createFragment(this.element), h = 0; h < o.length; h++)
          s.appendChild(o[h].element);
        this.element.appendChild(s);
      } else
        this.cells.push(o), this.element.appendChild(o.element);
    }, this.unshift = function(o) {
      if (Array.isArray(o)) {
        this.cells.unshift.apply(this.cells, o);
        for (var s = d.createFragment(this.element), h = 0; h < o.length; h++)
          s.appendChild(o[h].element);
        this.element.firstChild ? this.element.insertBefore(s, this.element.firstChild) : this.element.appendChild(s);
      } else
        this.cells.unshift(o), this.element.insertAdjacentElement("afterbegin", o.element);
    }, this.last = function() {
      return this.cells.length ? this.cells[this.cells.length - 1] : null;
    }, this.$cacheCell = function(o) {
      o && (o.element.remove(), this.cellCache.push(o));
    }, this.createCell = function(o, s, h, n) {
      var i = this.cellCache.pop();
      if (!i) {
        var r = d.createElement("div");
        n && n(r), this.element.appendChild(r), i = {
          element: r,
          text: "",
          row: o
        };
      }
      return i.row = o, i;
    };
  }).call(u.prototype), e.Lines = u;
});
ace.define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines"], function(t, e, a) {
  var d = t("../lib/dom"), u = t("../lib/oop"), o = t("../lib/lang"), s = t("../lib/event_emitter").EventEmitter, h = t("./lines").Lines, n = function(r) {
    this.element = d.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", r.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new h(this.element), this.$lines.$offsetCoefficient = 1;
  };
  (function() {
    u.implement(this, s), this.setSession = function(r) {
      this.session && this.session.off("change", this.$updateAnnotations), this.session = r, r && r.on("change", this.$updateAnnotations);
    }, this.addGutterDecoration = function(r, l) {
      window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(r, l);
    }, this.removeGutterDecoration = function(r, l) {
      window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(r, l);
    }, this.setAnnotations = function(r) {
      this.$annotations = [];
      for (var l = 0; l < r.length; l++) {
        var c = r[l], f = c.row, b = this.$annotations[f];
        b || (b = this.$annotations[f] = { text: [] });
        var y = c.text;
        y = y ? o.escapeHTML(y) : c.html || "", b.text.indexOf(y) === -1 && b.text.push(y);
        var x = c.type;
        x == "error" ? b.className = " ace_error" : x == "warning" && b.className != " ace_error" ? b.className = " ace_warning" : x == "info" && !b.className && (b.className = " ace_info");
      }
    }, this.$updateAnnotations = function(r) {
      if (this.$annotations.length) {
        var l = r.start.row, c = r.end.row - l;
        if (c !== 0) if (r.action == "remove")
          this.$annotations.splice(l, c + 1, null);
        else {
          var f = new Array(c + 1);
          f.unshift(l, 1), this.$annotations.splice.apply(this.$annotations, f);
        }
      }
    }, this.update = function(r) {
      this.config = r;
      var l = this.session, c = r.firstRow, f = Math.min(
        r.lastRow + r.gutterOffset,
        // needed to compensate for hor scollbar
        l.getLength() - 1
      );
      this.oldLastRow = f, this.config = r, this.$lines.moveContainer(r), this.$updateCursorRow();
      for (var b = l.getNextFoldLine(c), y = b ? b.start.row : 1 / 0, x = null, k = -1, S = c; ; ) {
        if (S > y && (S = b.end.row + 1, b = l.getNextFoldLine(S, b), y = b ? b.start.row : 1 / 0), S > f) {
          for (; this.$lines.getLength() > k + 1; )
            this.$lines.pop();
          break;
        }
        x = this.$lines.get(++k), x ? x.row = S : (x = this.$lines.createCell(S, r, this.session, i), this.$lines.push(x)), this.$renderCell(x, r, b, S), S++;
      }
      this._signal("afterRender"), this.$updateGutterWidth(r);
    }, this.$updateGutterWidth = function(r) {
      var l = this.session, c = l.gutterRenderer || this.$renderer, f = l.$firstLineNumber, b = this.$lines.last() ? this.$lines.last().text : "";
      (this.$fixedWidth || l.$useWrapMode) && (b = l.getLength() + f - 1);
      var y = c ? c.getWidth(l, b, r) : b.toString().length * r.characterWidth, x = this.$padding || this.$computePadding();
      y += x.left + x.right, y !== this.gutterWidth && !isNaN(y) && (this.gutterWidth = y, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", y));
    }, this.$updateCursorRow = function() {
      if (this.$highlightGutterLine) {
        var r = this.session.selection.getCursor();
        this.$cursorRow !== r.row && (this.$cursorRow = r.row);
      }
    }, this.updateLineHighlight = function() {
      if (this.$highlightGutterLine) {
        var r = this.session.selection.cursor.row;
        if (this.$cursorRow = r, !(this.$cursorCell && this.$cursorCell.row == r)) {
          this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
          var l = this.$lines.cells;
          this.$cursorCell = null;
          for (var c = 0; c < l.length; c++) {
            var f = l[c];
            if (f.row >= this.$cursorRow) {
              if (f.row > this.$cursorRow) {
                var b = this.session.getFoldLine(this.$cursorRow);
                if (c > 0 && b && b.start.row == l[c - 1].row)
                  f = l[c - 1];
                else
                  break;
              }
              f.element.className = "ace_gutter-active-line " + f.element.className, this.$cursorCell = f;
              break;
            }
          }
        }
      }
    }, this.scrollLines = function(r) {
      var l = this.config;
      if (this.config = r, this.$updateCursorRow(), this.$lines.pageChanged(l, r))
        return this.update(r);
      this.$lines.moveContainer(r);
      var c = Math.min(
        r.lastRow + r.gutterOffset,
        // needed to compensate for hor scollbar
        this.session.getLength() - 1
      ), f = this.oldLastRow;
      if (this.oldLastRow = c, !l || f < r.firstRow)
        return this.update(r);
      if (c < l.firstRow)
        return this.update(r);
      if (l.firstRow < r.firstRow)
        for (var b = this.session.getFoldedRowCount(l.firstRow, r.firstRow - 1); b > 0; b--)
          this.$lines.shift();
      if (f > c)
        for (var b = this.session.getFoldedRowCount(c + 1, f); b > 0; b--)
          this.$lines.pop();
      r.firstRow < l.firstRow && this.$lines.unshift(this.$renderLines(r, r.firstRow, l.firstRow - 1)), c > f && this.$lines.push(this.$renderLines(r, f + 1, c)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(r);
    }, this.$renderLines = function(r, l, c) {
      for (var f = [], b = l, y = this.session.getNextFoldLine(b), x = y ? y.start.row : 1 / 0; b > x && (b = y.end.row + 1, y = this.session.getNextFoldLine(b, y), x = y ? y.start.row : 1 / 0), !(b > c); ) {
        var k = this.$lines.createCell(b, r, this.session, i);
        this.$renderCell(k, r, y, b), f.push(k), b++;
      }
      return f;
    }, this.$renderCell = function(r, l, c, f) {
      var b = r.element, y = this.session, x = b.childNodes[0], k = b.childNodes[1], S = y.$firstLineNumber, m = y.$breakpoints, v = y.$decorations, $ = y.gutterRenderer || this.$renderer, g = this.$showFoldWidgets && y.foldWidgets, w = c ? c.start.row : Number.MAX_VALUE, p = "ace_gutter-cell ";
      if (this.$highlightGutterLine && (f == this.$cursorRow || c && f < this.$cursorRow && f >= w && this.$cursorRow <= c.end.row) && (p += "ace_gutter-active-line ", this.$cursorCell != r && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = r)), m[f] && (p += m[f]), v[f] && (p += v[f]), this.$annotations[f] && (p += this.$annotations[f].className), b.className != p && (b.className = p), g) {
        var C = g[f];
        C == null && (C = g[f] = y.getFoldWidget(f));
      }
      if (C) {
        var p = "ace_fold-widget ace_" + C;
        C == "start" && f == w && f < c.end.row ? p += " ace_closed" : p += " ace_open", k.className != p && (k.className = p);
        var A = l.lineHeight + "px";
        d.setStyle(k.style, "height", A), d.setStyle(k.style, "display", "inline-block");
      } else
        k && d.setStyle(k.style, "display", "none");
      var _ = ($ ? $.getText(y, f) : f + S).toString();
      return _ !== x.data && (x.data = _), d.setStyle(r.element.style, "height", this.$lines.computeLineHeight(f, l, y) + "px"), d.setStyle(r.element.style, "top", this.$lines.computeLineTop(f, l, y) + "px"), r.text = _, r;
    }, this.$fixedWidth = !1, this.$highlightGutterLine = !0, this.$renderer = "", this.setHighlightGutterLine = function(r) {
      this.$highlightGutterLine = r;
    }, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function(r) {
      this.$renderer = !r && {
        getWidth: function() {
          return 0;
        },
        getText: function() {
          return "";
        }
      };
    }, this.getShowLineNumbers = function() {
      return this.$showLineNumbers;
    }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function(r) {
      r ? d.addCssClass(this.element, "ace_folding-enabled") : d.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = r, this.$padding = null;
    }, this.getShowFoldWidgets = function() {
      return this.$showFoldWidgets;
    }, this.$computePadding = function() {
      if (!this.element.firstChild)
        return { left: 0, right: 0 };
      var r = d.computedStyle(this.element.firstChild);
      return this.$padding = {}, this.$padding.left = (parseInt(r.borderLeftWidth) || 0) + (parseInt(r.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(r.borderRightWidth) || 0) + (parseInt(r.paddingRight) || 0), this.$padding;
    }, this.getRegion = function(r) {
      var l = this.$padding || this.$computePadding(), c = this.element.getBoundingClientRect();
      if (r.x < l.left + c.left)
        return "markers";
      if (this.$showFoldWidgets && r.x > c.right - l.right)
        return "foldWidgets";
    };
  }).call(n.prototype);
  function i(r) {
    var l = document.createTextNode("");
    r.appendChild(l);
    var c = d.createElement("span");
    return r.appendChild(c), r;
  }
  e.Gutter = n;
});
ace.define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(t, e, a) {
  var d = t("../range").Range, u = t("../lib/dom"), o = function(s) {
    this.element = u.createElement("div"), this.element.className = "ace_layer ace_marker-layer", s.appendChild(this.element);
  };
  (function() {
    this.$padding = 0, this.setPadding = function(h) {
      this.$padding = h;
    }, this.setSession = function(h) {
      this.session = h;
    }, this.setMarkers = function(h) {
      this.markers = h;
    }, this.elt = function(h, n) {
      var i = this.i != -1 && this.element.childNodes[this.i];
      i ? this.i++ : (i = document.createElement("div"), this.element.appendChild(i), this.i = -1), i.style.cssText = n, i.className = h;
    }, this.update = function(h) {
      if (h) {
        this.config = h, this.i = 0;
        var n;
        for (var i in this.markers) {
          var r = this.markers[i];
          if (!r.range) {
            r.update(n, this, this.session, h);
            continue;
          }
          var l = r.range.clipRows(h.firstRow, h.lastRow);
          if (!l.isEmpty())
            if (l = l.toScreenRange(this.session), r.renderer) {
              var c = this.$getTop(l.start.row, h), f = this.$padding + l.start.column * h.characterWidth;
              r.renderer(n, l, f, c, h);
            } else r.type == "fullLine" ? this.drawFullLineMarker(n, l, r.clazz, h) : r.type == "screenLine" ? this.drawScreenLineMarker(n, l, r.clazz, h) : l.isMultiLine() ? r.type == "text" ? this.drawTextMarker(n, l, r.clazz, h) : this.drawMultiLineMarker(n, l, r.clazz, h) : this.drawSingleLineMarker(n, l, r.clazz + " ace_start ace_br15", h);
        }
        if (this.i != -1)
          for (; this.i < this.element.childElementCount; )
            this.element.removeChild(this.element.lastChild);
      }
    }, this.$getTop = function(h, n) {
      return (h - n.firstRowScreen) * n.lineHeight;
    };
    function s(h, n, i, r) {
      return (h ? 1 : 0) | (n ? 2 : 0) | (i ? 4 : 0) | (r ? 8 : 0);
    }
    this.drawTextMarker = function(h, n, i, r, l) {
      for (var c = this.session, f = n.start.row, b = n.end.row, y = f, x = 0, k = 0, S = c.getScreenLastRowColumn(y), m = new d(y, n.start.column, y, k); y <= b; y++)
        m.start.row = m.end.row = y, m.start.column = y == f ? n.start.column : c.getRowWrapIndent(y), m.end.column = S, x = k, k = S, S = y + 1 < b ? c.getScreenLastRowColumn(y + 1) : y == b ? 0 : n.end.column, this.drawSingleLineMarker(
          h,
          m,
          i + (y == f ? " ace_start" : "") + " ace_br" + s(y == f || y == f + 1 && n.start.column, x < k, k > S, y == b),
          r,
          y == b ? 0 : 1,
          l
        );
    }, this.drawMultiLineMarker = function(h, n, i, r, l) {
      var c = this.$padding, f = r.lineHeight, b = this.$getTop(n.start.row, r), y = c + n.start.column * r.characterWidth;
      if (l = l || "", this.session.$bidiHandler.isBidiRow(n.start.row)) {
        var x = n.clone();
        x.end.row = x.start.row, x.end.column = this.session.getLine(x.start.row).length, this.drawBidiSingleLineMarker(h, x, i + " ace_br1 ace_start", r, null, l);
      } else
        this.elt(
          i + " ace_br1 ace_start",
          "height:" + f + "px;right:0;top:" + b + "px;left:" + y + "px;" + (l || "")
        );
      if (this.session.$bidiHandler.isBidiRow(n.end.row)) {
        var x = n.clone();
        x.start.row = x.end.row, x.start.column = 0, this.drawBidiSingleLineMarker(h, x, i + " ace_br12", r, null, l);
      } else {
        b = this.$getTop(n.end.row, r);
        var k = n.end.column * r.characterWidth;
        this.elt(
          i + " ace_br12",
          "height:" + f + "px;width:" + k + "px;top:" + b + "px;left:" + c + "px;" + (l || "")
        );
      }
      if (f = (n.end.row - n.start.row - 1) * r.lineHeight, !(f <= 0)) {
        b = this.$getTop(n.start.row + 1, r);
        var S = (n.start.column ? 1 : 0) | (n.end.column ? 0 : 8);
        this.elt(
          i + (S ? " ace_br" + S : ""),
          "height:" + f + "px;right:0;top:" + b + "px;left:" + c + "px;" + (l || "")
        );
      }
    }, this.drawSingleLineMarker = function(h, n, i, r, l, c) {
      if (this.session.$bidiHandler.isBidiRow(n.start.row))
        return this.drawBidiSingleLineMarker(h, n, i, r, l, c);
      var f = r.lineHeight, b = (n.end.column + (l || 0) - n.start.column) * r.characterWidth, y = this.$getTop(n.start.row, r), x = this.$padding + n.start.column * r.characterWidth;
      this.elt(
        i,
        "height:" + f + "px;width:" + b + "px;top:" + y + "px;left:" + x + "px;" + (c || "")
      );
    }, this.drawBidiSingleLineMarker = function(h, n, i, r, l, c) {
      var f = r.lineHeight, b = this.$getTop(n.start.row, r), y = this.$padding, x = this.session.$bidiHandler.getSelections(n.start.column, n.end.column);
      x.forEach(function(k) {
        this.elt(
          i,
          "height:" + f + "px;width:" + k.width + (l || 0) + "px;top:" + b + "px;left:" + (y + k.left) + "px;" + (c || "")
        );
      }, this);
    }, this.drawFullLineMarker = function(h, n, i, r, l) {
      var c = this.$getTop(n.start.row, r), f = r.lineHeight;
      n.start.row != n.end.row && (f += this.$getTop(n.end.row, r) - c), this.elt(
        i,
        "height:" + f + "px;top:" + c + "px;left:0;right:0;" + (l || "")
      );
    }, this.drawScreenLineMarker = function(h, n, i, r, l) {
      var c = this.$getTop(n.start.row, r), f = r.lineHeight;
      this.elt(
        i,
        "height:" + f + "px;top:" + c + "px;left:0;right:0;" + (l || "")
      );
    };
  }).call(o.prototype), e.Marker = o;
});
ace.define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter"], function(t, e, a) {
  var d = t("../lib/oop"), u = t("../lib/dom"), o = t("../lib/lang"), s = t("./lines").Lines, h = t("../lib/event_emitter").EventEmitter, n = function(i) {
    this.dom = u, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", i.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new s(this.element);
  };
  (function() {
    d.implement(this, h), this.EOF_CHAR = "¶", this.EOL_CHAR_LF = "¬", this.EOL_CHAR_CRLF = "¤", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "—", this.SPACE_CHAR = "·", this.$padding = 0, this.MAX_LINE_LENGTH = 1e4, this.$updateEolChar = function() {
      var i = this.session.doc, r = i.getNewLineCharacter() == `
` && i.getNewLineMode() != "windows", l = r ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
      if (this.EOL_CHAR != l)
        return this.EOL_CHAR = l, !0;
    }, this.setPadding = function(i) {
      this.$padding = i, this.element.style.margin = "0 " + i + "px";
    }, this.getLineHeight = function() {
      return this.$fontMetrics.$characterSize.height || 0;
    }, this.getCharacterWidth = function() {
      return this.$fontMetrics.$characterSize.width || 0;
    }, this.$setFontMetrics = function(i) {
      this.$fontMetrics = i, this.$fontMetrics.on("changeCharacterSize", function(r) {
        this._signal("changeCharacterSize", r);
      }.bind(this)), this.$pollSizeChanges();
    }, this.checkForSizeChanges = function() {
      this.$fontMetrics.checkForSizeChanges();
    }, this.$pollSizeChanges = function() {
      return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
    }, this.setSession = function(i) {
      this.session = i, i && this.$computeTabString();
    }, this.showInvisibles = !1, this.showSpaces = !1, this.showTabs = !1, this.showEOL = !1, this.setShowInvisibles = function(i) {
      return this.showInvisibles == i ? !1 : (this.showInvisibles = i, typeof i == "string" ? (this.showSpaces = /tab/i.test(i), this.showTabs = /space/i.test(i), this.showEOL = /eol/i.test(i)) : this.showSpaces = this.showTabs = this.showEOL = i, this.$computeTabString(), !0);
    }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function(i) {
      return this.displayIndentGuides == i ? !1 : (this.displayIndentGuides = i, this.$computeTabString(), !0);
    }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function() {
      var i = this.session.getTabSize();
      this.tabSize = i;
      for (var r = this.$tabStrings = [0], l = 1; l < i + 1; l++)
        if (this.showTabs) {
          var c = this.dom.createElement("span");
          c.className = "ace_invisible ace_invisible_tab", c.textContent = o.stringRepeat(this.TAB_CHAR, l), r.push(c);
        } else
          r.push(this.dom.createTextNode(o.stringRepeat(" ", l), this.element));
      if (this.displayIndentGuides) {
        this.$indentGuideRe = /\s\S| \t|\t |\s$/;
        var f = "ace_indent-guide", b = this.showSpaces ? " ace_invisible ace_invisible_space" : "", y = this.showSpaces ? o.stringRepeat(this.SPACE_CHAR, this.tabSize) : o.stringRepeat(" ", this.tabSize), x = this.showTabs ? " ace_invisible ace_invisible_tab" : "", k = this.showTabs ? o.stringRepeat(this.TAB_CHAR, this.tabSize) : y, c = this.dom.createElement("span");
        c.className = f + b, c.textContent = y, this.$tabStrings[" "] = c;
        var c = this.dom.createElement("span");
        c.className = f + x, c.textContent = k, this.$tabStrings["	"] = c;
      }
    }, this.updateLines = function(i, r, l) {
      if (this.config.lastRow != i.lastRow || this.config.firstRow != i.firstRow)
        return this.update(i);
      this.config = i;
      for (var c = Math.max(r, i.firstRow), f = Math.min(l, i.lastRow), b = this.element.childNodes, y = 0, k = i.firstRow; k < c; k++) {
        var S = this.session.getFoldLine(k);
        if (S)
          if (S.containsRow(c)) {
            c = S.start.row;
            break;
          } else
            k = S.end.row;
        y++;
      }
      for (var x = !1, k = c, S = this.session.getNextFoldLine(k), m = S ? S.start.row : 1 / 0; k > m && (k = S.end.row + 1, S = this.session.getNextFoldLine(k, S), m = S ? S.start.row : 1 / 0), !(k > f); ) {
        var v = b[y++];
        if (v) {
          this.dom.removeChildren(v), this.$renderLine(
            v,
            k,
            k == m ? S : !1
          ), x && (v.style.top = this.$lines.computeLineTop(k, i, this.session) + "px");
          var $ = i.lineHeight * this.session.getRowLength(k) + "px";
          v.style.height != $ && (x = !0, v.style.height = $);
        }
        k++;
      }
      if (x)
        for (; y < this.$lines.cells.length; ) {
          var g = this.$lines.cells[y++];
          g.element.style.top = this.$lines.computeLineTop(g.row, i, this.session) + "px";
        }
    }, this.scrollLines = function(i) {
      var r = this.config;
      if (this.config = i, this.$lines.pageChanged(r, i))
        return this.update(i);
      this.$lines.moveContainer(i);
      var l = i.lastRow, c = r ? r.lastRow : -1;
      if (!r || c < i.firstRow)
        return this.update(i);
      if (l < r.firstRow)
        return this.update(i);
      if (!r || r.lastRow < i.firstRow)
        return this.update(i);
      if (i.lastRow < r.firstRow)
        return this.update(i);
      if (r.firstRow < i.firstRow)
        for (var f = this.session.getFoldedRowCount(r.firstRow, i.firstRow - 1); f > 0; f--)
          this.$lines.shift();
      if (r.lastRow > i.lastRow)
        for (var f = this.session.getFoldedRowCount(i.lastRow + 1, r.lastRow); f > 0; f--)
          this.$lines.pop();
      i.firstRow < r.firstRow && this.$lines.unshift(this.$renderLinesFragment(i, i.firstRow, r.firstRow - 1)), i.lastRow > r.lastRow && this.$lines.push(this.$renderLinesFragment(i, r.lastRow + 1, i.lastRow));
    }, this.$renderLinesFragment = function(i, r, l) {
      for (var c = [], f = r, b = this.session.getNextFoldLine(f), y = b ? b.start.row : 1 / 0; f > y && (f = b.end.row + 1, b = this.session.getNextFoldLine(f, b), y = b ? b.start.row : 1 / 0), !(f > l); ) {
        var x = this.$lines.createCell(f, i, this.session), k = x.element;
        this.dom.removeChildren(k), u.setStyle(k.style, "height", this.$lines.computeLineHeight(f, i, this.session) + "px"), u.setStyle(k.style, "top", this.$lines.computeLineTop(f, i, this.session) + "px"), this.$renderLine(k, f, f == y ? b : !1), this.$useLineGroups() ? k.className = "ace_line_group" : k.className = "ace_line", c.push(x), f++;
      }
      return c;
    }, this.update = function(i) {
      this.$lines.moveContainer(i), this.config = i;
      for (var r = i.firstRow, l = i.lastRow, c = this.$lines; c.getLength(); )
        c.pop();
      c.push(this.$renderLinesFragment(i, r, l));
    }, this.$textToken = {
      text: !0,
      rparen: !0,
      lparen: !0
    }, this.$renderToken = function(i, r, l, c) {
      for (var f = this, b = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, y = this.dom.createFragment(this.element), x, k = 0; x = b.exec(c); ) {
        var S = x[1], m = x[2], v = x[3], $ = x[4], g = x[5];
        if (!(!f.showSpaces && m)) {
          var w = k != x.index ? c.slice(k, x.index) : "";
          if (k = x.index + x[0].length, w && y.appendChild(this.dom.createTextNode(w, this.element)), S) {
            var p = f.session.getScreenTabSize(r + x.index);
            y.appendChild(f.$tabStrings[p].cloneNode(!0)), r += p - 1;
          } else if (m)
            if (f.showSpaces) {
              var C = this.dom.createElement("span");
              C.className = "ace_invisible ace_invisible_space", C.textContent = o.stringRepeat(f.SPACE_CHAR, m.length), y.appendChild(C);
            } else
              y.appendChild(this.com.createTextNode(m, this.element));
          else if (v) {
            var C = this.dom.createElement("span");
            C.className = "ace_invisible ace_invisible_space ace_invalid", C.textContent = o.stringRepeat(f.SPACE_CHAR, v.length), y.appendChild(C);
          } else if ($) {
            r += 1;
            var C = this.dom.createElement("span");
            C.style.width = f.config.characterWidth * 2 + "px", C.className = f.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", C.textContent = f.showSpaces ? f.SPACE_CHAR : $, y.appendChild(C);
          } else if (g) {
            r += 1;
            var C = this.dom.createElement("span");
            C.style.width = f.config.characterWidth * 2 + "px", C.className = "ace_cjk", C.textContent = g, y.appendChild(C);
          }
        }
      }
      if (y.appendChild(this.dom.createTextNode(k ? c.slice(k) : c, this.element)), this.$textToken[l.type])
        i.appendChild(y);
      else {
        var A = "ace_" + l.type.replace(/\./g, " ace_"), C = this.dom.createElement("span");
        l.type == "fold" && (C.style.width = l.value.length * this.config.characterWidth + "px"), C.className = A, C.appendChild(y), i.appendChild(C);
      }
      return r + c.length;
    }, this.renderIndentGuide = function(i, r, l) {
      var c = r.search(this.$indentGuideRe);
      if (c <= 0 || c >= l)
        return r;
      if (r[0] == " ") {
        c -= c % this.tabSize;
        for (var f = c / this.tabSize, b = 0; b < f; b++)
          i.appendChild(this.$tabStrings[" "].cloneNode(!0));
        return r.substr(c);
      } else if (r[0] == "	") {
        for (var b = 0; b < c; b++)
          i.appendChild(this.$tabStrings["	"].cloneNode(!0));
        return r.substr(c);
      }
      return r;
    }, this.$createLineElement = function(i) {
      var r = this.dom.createElement("div");
      return r.className = "ace_line", r.style.height = this.config.lineHeight + "px", r;
    }, this.$renderWrappedLine = function(i, r, l) {
      var c = 0, f = 0, b = l[0], y = 0, x = this.$createLineElement();
      i.appendChild(x);
      for (var k = 0; k < r.length; k++) {
        var S = r[k], m = S.value;
        if (k == 0 && this.displayIndentGuides) {
          if (c = m.length, m = this.renderIndentGuide(x, m, b), !m)
            continue;
          c -= m.length;
        }
        if (c + m.length < b)
          y = this.$renderToken(x, y, S, m), c += m.length;
        else {
          for (; c + m.length >= b; )
            y = this.$renderToken(
              x,
              y,
              S,
              m.substring(0, b - c)
            ), m = m.substring(b - c), c = b, x = this.$createLineElement(), i.appendChild(x), x.appendChild(this.dom.createTextNode(o.stringRepeat(" ", l.indent), this.element)), f++, y = 0, b = l[f] || Number.MAX_VALUE;
          m.length != 0 && (c += m.length, y = this.$renderToken(
            x,
            y,
            S,
            m
          ));
        }
      }
      l[l.length - 1] > this.MAX_LINE_LENGTH && this.$renderOverflowMessage(x, y, null, "", !0);
    }, this.$renderSimpleLine = function(i, r) {
      var l = 0, c = r[0], f = c.value;
      this.displayIndentGuides && (f = this.renderIndentGuide(i, f)), f && (l = this.$renderToken(i, l, c, f));
      for (var b = 1; b < r.length; b++) {
        if (c = r[b], f = c.value, l + f.length > this.MAX_LINE_LENGTH)
          return this.$renderOverflowMessage(i, l, c, f);
        l = this.$renderToken(i, l, c, f);
      }
    }, this.$renderOverflowMessage = function(i, r, l, c, f) {
      l && this.$renderToken(
        i,
        r,
        l,
        c.slice(0, this.MAX_LINE_LENGTH - r)
      );
      var b = this.dom.createElement("span");
      b.className = "ace_inline_button ace_keyword ace_toggle_wrap", b.textContent = f ? "<hide>" : "<click to see more...>", i.appendChild(b);
    }, this.$renderLine = function(i, r, l) {
      if (!l && l != !1 && (l = this.session.getFoldLine(r)), l)
        var c = this.$getFoldLineTokens(r, l);
      else
        var c = this.session.getTokens(r);
      var f = i;
      if (c.length) {
        var b = this.session.getRowSplitData(r);
        if (b && b.length) {
          this.$renderWrappedLine(i, c, b);
          var f = i.lastChild;
        } else {
          var f = i;
          this.$useLineGroups() && (f = this.$createLineElement(), i.appendChild(f)), this.$renderSimpleLine(f, c);
        }
      } else this.$useLineGroups() && (f = this.$createLineElement(), i.appendChild(f));
      if (this.showEOL && f) {
        l && (r = l.end.row);
        var y = this.dom.createElement("span");
        y.className = "ace_invisible ace_invisible_eol", y.textContent = r == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, f.appendChild(y);
      }
    }, this.$getFoldLineTokens = function(i, r) {
      var l = this.session, c = [];
      function f(y, x, k) {
        for (var S = 0, m = 0; m + y[S].value.length < x; )
          if (m += y[S].value.length, S++, S == y.length)
            return;
        if (m != x) {
          var v = y[S].value.substring(x - m);
          v.length > k - x && (v = v.substring(0, k - x)), c.push({
            type: y[S].type,
            value: v
          }), m = x + v.length, S += 1;
        }
        for (; m < k && S < y.length; ) {
          var v = y[S].value;
          v.length + m > k ? c.push({
            type: y[S].type,
            value: v.substring(0, k - m)
          }) : c.push(y[S]), m += v.length, S += 1;
        }
      }
      var b = l.getTokens(i);
      return r.walk(function(y, x, k, S, m) {
        y != null ? c.push({
          type: "fold",
          value: y
        }) : (m && (b = l.getTokens(x)), b.length && f(b, S, k));
      }, r.end.row, this.session.getLine(r.end.row).length), c;
    }, this.$useLineGroups = function() {
      return this.session.getUseWrapMode();
    }, this.destroy = function() {
    };
  }).call(n.prototype), e.Text = n;
});
ace.define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(t, e, a) {
  var d = t("../lib/dom"), u = function(o) {
    this.element = d.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", o.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), d.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this);
  };
  (function() {
    this.$updateOpacity = function(o) {
      for (var s = this.cursors, h = s.length; h--; )
        d.setStyle(s[h].style, "opacity", o ? "" : "0");
    }, this.$startCssAnimation = function() {
      for (var o = this.cursors, s = o.length; s--; )
        o[s].style.animationDuration = this.blinkInterval + "ms";
      setTimeout(function() {
        d.addCssClass(this.element, "ace_animate-blinking");
      }.bind(this));
    }, this.$stopCssAnimation = function() {
      d.removeCssClass(this.element, "ace_animate-blinking");
    }, this.$padding = 0, this.setPadding = function(o) {
      this.$padding = o;
    }, this.setSession = function(o) {
      this.session = o;
    }, this.setBlinking = function(o) {
      o != this.isBlinking && (this.isBlinking = o, this.restartTimer());
    }, this.setBlinkInterval = function(o) {
      o != this.blinkInterval && (this.blinkInterval = o, this.restartTimer());
    }, this.setSmoothBlinking = function(o) {
      o != this.smoothBlinking && (this.smoothBlinking = o, d.setCssClass(this.element, "ace_smooth-blinking", o), this.$updateCursors(!0), this.restartTimer());
    }, this.addCursor = function() {
      var o = d.createElement("div");
      return o.className = "ace_cursor", this.element.appendChild(o), this.cursors.push(o), o;
    }, this.removeCursor = function() {
      if (this.cursors.length > 1) {
        var o = this.cursors.pop();
        return o.parentNode.removeChild(o), o;
      }
    }, this.hideCursor = function() {
      this.isVisible = !1, d.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
    }, this.showCursor = function() {
      this.isVisible = !0, d.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer();
    }, this.restartTimer = function() {
      var o = this.$updateCursors;
      if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && d.removeCssClass(this.element, "ace_smooth-blinking"), o(!0), !this.isBlinking || !this.blinkInterval || !this.isVisible) {
        this.$stopCssAnimation();
        return;
      }
      if (this.smoothBlinking && setTimeout(function() {
        d.addCssClass(this.element, "ace_smooth-blinking");
      }.bind(this)), d.HAS_CSS_ANIMATION)
        this.$startCssAnimation();
      else {
        var s = function() {
          this.timeoutId = setTimeout(function() {
            o(!1);
          }, 0.6 * this.blinkInterval);
        }.bind(this);
        this.intervalId = setInterval(function() {
          o(!0), s();
        }, this.blinkInterval), s();
      }
    }, this.getPixelPosition = function(o, s) {
      if (!this.config || !this.session)
        return { left: 0, top: 0 };
      o || (o = this.session.selection.getCursor());
      var h = this.session.documentToScreenPosition(o), n = this.$padding + (this.session.$bidiHandler.isBidiRow(h.row, o.row) ? this.session.$bidiHandler.getPosLeft(h.column) : h.column * this.config.characterWidth), i = (h.row - (s ? this.config.firstRowScreen : 0)) * this.config.lineHeight;
      return { left: n, top: i };
    }, this.isCursorInView = function(o, s) {
      return o.top >= 0 && o.top < s.maxHeight;
    }, this.update = function(o) {
      this.config = o;
      var s = this.session.$selectionMarkers, h = 0, n = 0;
      (s === void 0 || s.length === 0) && (s = [{ cursor: null }]);
      for (var h = 0, i = s.length; h < i; h++) {
        var r = this.getPixelPosition(s[h].cursor, !0);
        if (!((r.top > o.height + o.offset || r.top < 0) && h > 1)) {
          var l = this.cursors[n++] || this.addCursor(), c = l.style;
          this.drawCursor ? this.drawCursor(l, r, o, s[h], this.session) : this.isCursorInView(r, o) ? (d.setStyle(c, "display", "block"), d.translate(l, r.left, r.top), d.setStyle(c, "width", Math.round(o.characterWidth) + "px"), d.setStyle(c, "height", o.lineHeight + "px")) : d.setStyle(c, "display", "none");
        }
      }
      for (; this.cursors.length > n; )
        this.removeCursor();
      var f = this.session.getOverwrite();
      this.$setOverwrite(f), this.$pixelPos = r, this.restartTimer();
    }, this.drawCursor = null, this.$setOverwrite = function(o) {
      o != this.overwrite && (this.overwrite = o, o ? d.addCssClass(this.element, "ace_overwrite-cursors") : d.removeCssClass(this.element, "ace_overwrite-cursors"));
    }, this.destroy = function() {
      clearInterval(this.intervalId), clearTimeout(this.timeoutId);
    };
  }).call(u.prototype), e.Cursor = u;
});
ace.define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(t, e, a) {
  var d = t("./lib/oop"), u = t("./lib/dom"), o = t("./lib/event"), s = t("./lib/event_emitter").EventEmitter, h = 32768, n = function(l) {
    this.element = u.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = u.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.inner.textContent = " ", this.element.appendChild(this.inner), l.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, o.addListener(this.element, "scroll", this.onScroll.bind(this)), o.addListener(this.element, "mousedown", o.preventDefault);
  };
  (function() {
    d.implement(this, s), this.setVisible = function(l) {
      this.element.style.display = l ? "" : "none", this.isVisible = l, this.coeff = 1;
    };
  }).call(n.prototype);
  var i = function(l, c) {
    n.call(this, l), this.scrollTop = 0, this.scrollHeight = 0, c.$scrollbarWidth = this.width = u.scrollbarWidth(l.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0;
  };
  d.inherits(i, n), function() {
    this.classSuffix = "-v", this.onScroll = function() {
      if (!this.skipEvent) {
        if (this.scrollTop = this.element.scrollTop, this.coeff != 1) {
          var l = this.element.clientHeight / this.scrollHeight;
          this.scrollTop = this.scrollTop * (1 - l) / (this.coeff - l);
        }
        this._emit("scroll", { data: this.scrollTop });
      }
      this.skipEvent = !1;
    }, this.getWidth = function() {
      return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
    }, this.setHeight = function(l) {
      this.element.style.height = l + "px";
    }, this.setInnerHeight = this.setScrollHeight = function(l) {
      this.scrollHeight = l, l > h ? (this.coeff = h / l, l = h) : this.coeff != 1 && (this.coeff = 1), this.inner.style.height = l + "px";
    }, this.setScrollTop = function(l) {
      this.scrollTop != l && (this.skipEvent = !0, this.scrollTop = l, this.element.scrollTop = l * this.coeff);
    };
  }.call(i.prototype);
  var r = function(l, c) {
    n.call(this, l), this.scrollLeft = 0, this.height = c.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px";
  };
  d.inherits(r, n), function() {
    this.classSuffix = "-h", this.onScroll = function() {
      this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", { data: this.scrollLeft })), this.skipEvent = !1;
    }, this.getHeight = function() {
      return this.isVisible ? this.height : 0;
    }, this.setWidth = function(l) {
      this.element.style.width = l + "px";
    }, this.setInnerWidth = function(l) {
      this.inner.style.width = l + "px";
    }, this.setScrollWidth = function(l) {
      this.inner.style.width = l + "px";
    }, this.setScrollLeft = function(l) {
      this.scrollLeft != l && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = l);
    };
  }.call(r.prototype), e.ScrollBar = i, e.ScrollBarV = i, e.ScrollBarH = r, e.VScrollBar = i, e.HScrollBar = r;
});
ace.define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(t, e, a) {
  var d = t("./lib/event"), u = function(o, s) {
    this.onRender = o, this.pending = !1, this.changes = 0, this.$recursionLimit = 2, this.window = s || window;
    var h = this;
    this._flush = function(n) {
      h.pending = !1;
      var i = h.changes;
      if (i && (d.blockIdle(100), h.changes = 0, h.onRender(i)), h.changes) {
        if (h.$recursionLimit-- < 0) return;
        h.schedule();
      } else
        h.$recursionLimit = 2;
    };
  };
  (function() {
    this.schedule = function(o) {
      this.changes = this.changes | o, this.changes && !this.pending && (d.nextFrame(this._flush), this.pending = !0);
    }, this.clear = function(o) {
      var s = this.changes;
      return this.changes = 0, s;
    };
  }).call(u.prototype), e.RenderLoop = u;
});
ace.define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function(t, e, a) {
  var d = t("../lib/oop"), u = t("../lib/dom"), o = t("../lib/lang"), s = t("../lib/event"), h = t("../lib/useragent"), n = t("../lib/event_emitter").EventEmitter, i = 256, r = typeof ResizeObserver == "function", l = 200, c = e.FontMetrics = function(f) {
    this.el = u.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = u.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = u.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), f.appendChild(this.el), this.$measureNode.textContent = o.stringRepeat("X", i), this.$characterSize = { width: 0, height: 0 }, r ? this.$addObserver() : this.checkForSizeChanges();
  };
  (function() {
    d.implement(this, n), this.$characterSize = { width: 0, height: 0 }, this.$setMeasureNodeStyles = function(f, b) {
      f.width = f.height = "auto", f.left = f.top = "0px", f.visibility = "hidden", f.position = "absolute", f.whiteSpace = "pre", h.isIE < 8 ? f["font-family"] = "inherit" : f.font = "inherit", f.overflow = b ? "hidden" : "visible";
    }, this.checkForSizeChanges = function(f) {
      if (f === void 0 && (f = this.$measureSizes()), f && (this.$characterSize.width !== f.width || this.$characterSize.height !== f.height)) {
        this.$measureNode.style.fontWeight = "bold";
        var b = this.$measureSizes();
        this.$measureNode.style.fontWeight = "", this.$characterSize = f, this.charSizes = /* @__PURE__ */ Object.create(null), this.allowBoldFonts = b && b.width === f.width && b.height === f.height, this._emit("changeCharacterSize", { data: f });
      }
    }, this.$addObserver = function() {
      var f = this;
      this.$observer = new window.ResizeObserver(function(b) {
        f.checkForSizeChanges();
      }), this.$observer.observe(this.$measureNode);
    }, this.$pollSizeChanges = function() {
      if (this.$pollSizeChangesTimer || this.$observer)
        return this.$pollSizeChangesTimer;
      var f = this;
      return this.$pollSizeChangesTimer = s.onIdle(function b() {
        f.checkForSizeChanges(), s.onIdle(b, 500);
      }, 500);
    }, this.setPolling = function(f) {
      f ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0);
    }, this.$measureSizes = function(f) {
      var b = {
        height: (f || this.$measureNode).clientHeight,
        width: (f || this.$measureNode).clientWidth / i
      };
      return b.width === 0 || b.height === 0 ? null : b;
    }, this.$measureCharWidth = function(f) {
      this.$main.textContent = o.stringRepeat(f, i);
      var b = this.$main.getBoundingClientRect();
      return b.width / i;
    }, this.getCharacterWidth = function(f) {
      var b = this.charSizes[f];
      return b === void 0 && (b = this.charSizes[f] = this.$measureCharWidth(f) / this.$characterSize.width), b;
    }, this.destroy = function() {
      clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el);
    }, this.$getZoom = function f(b) {
      return !b || !b.parentElement ? 1 : (window.getComputedStyle(b).zoom || 1) * f(b.parentElement);
    }, this.$initTransformMeasureNodes = function() {
      var f = function(b, y) {
        return ["div", {
          style: "position: absolute;top:" + b + "px;left:" + y + "px;"
        }];
      };
      this.els = u.buildDom([f(0, 0), f(l, 0), f(0, l), f(l, l)], this.el);
    }, this.transformCoordinates = function(f, b) {
      if (f) {
        var y = this.$getZoom(this.el);
        f = m(1 / y, f);
      }
      function x(N, O, P) {
        var z = N[1] * O[0] - N[0] * O[1];
        return [
          (-O[1] * P[0] + O[0] * P[1]) / z,
          (+N[1] * P[0] - N[0] * P[1]) / z
        ];
      }
      function k(N, O) {
        return [N[0] - O[0], N[1] - O[1]];
      }
      function S(N, O) {
        return [N[0] + O[0], N[1] + O[1]];
      }
      function m(N, O) {
        return [N * O[0], N * O[1]];
      }
      this.els || this.$initTransformMeasureNodes();
      function v(N) {
        var O = N.getBoundingClientRect();
        return [O.left, O.top];
      }
      var $ = v(this.els[0]), g = v(this.els[1]), w = v(this.els[2]), p = v(this.els[3]), C = x(k(p, g), k(p, w), k(S(g, w), S(p, $))), A = m(1 + C[0], k(g, $)), _ = m(1 + C[1], k(w, $));
      if (b) {
        var E = b, I = C[0] * E[0] / l + C[1] * E[1] / l + 1, L = S(m(E[0], A), m(E[1], _));
        return S(m(1 / I / l, L), $);
      }
      var D = k(f, $), R = x(k(A, m(C[0], D)), k(_, m(C[1], D)), D);
      return m(l, R);
    };
  }).call(c.prototype);
});
ace.define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/lib/useragent"], function(t, e, a) {
  var d = t("./lib/oop"), u = t("./lib/dom"), o = t("./config"), s = t("./layer/gutter").Gutter, h = t("./layer/marker").Marker, n = t("./layer/text").Text, i = t("./layer/cursor").Cursor, r = t("./scrollbar").HScrollBar, l = t("./scrollbar").VScrollBar, c = t("./renderloop").RenderLoop, f = t("./layer/font_metrics").FontMetrics, b = t("./lib/event_emitter").EventEmitter, y = `.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}`, x = t("./lib/useragent"), k = x.isIE;
  u.importCssString(y, "ace_editor.css");
  var S = function(m, v) {
    var $ = this;
    this.container = m || u.createElement("div"), u.addCssClass(this.container, "ace_editor"), u.HI_DPI && u.addCssClass(this.container, "ace_hidpi"), this.setTheme(v), this.$gutter = u.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = u.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = u.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new s(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new h(this.content);
    var g = this.$textLayer = new n(this.content);
    this.canvas = g.element, this.$markerFront = new h(this.content), this.$cursorLayer = new i(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new l(this.container, this), this.scrollBarH = new r(this.container, this), this.scrollBarV.on("scroll", function(w) {
      $.$scrollAnimation || $.session.setScrollTop(w.data - $.scrollMargin.top);
    }), this.scrollBarH.on("scroll", function(w) {
      $.$scrollAnimation || $.session.setScrollLeft(w.data - $.scrollMargin.left);
    }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
      row: 0,
      column: 0
    }, this.$fontMetrics = new f(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.on("changeCharacterSize", function(w) {
      $.updateCharacterSize(), $.onResize(!0, $.gutterWidth, $.$size.width, $.$size.height), $._signal("changeCharacterSize", w);
    }), this.$size = {
      width: 0,
      height: 0,
      scrollerHeight: 0,
      scrollerWidth: 0,
      $dirty: !0
    }, this.layerConfig = {
      width: 1,
      padding: 0,
      firstRow: 0,
      firstRowScreen: 0,
      lastRow: 0,
      lineHeight: 0,
      characterWidth: 0,
      minHeight: 1,
      maxHeight: 1,
      offset: 0,
      height: 1,
      gutterOffset: 1
    }, this.scrollMargin = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      v: 0,
      h: 0
    }, this.margin = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      v: 0,
      h: 0
    }, this.$keepTextAreaAtCursor = !x.isIOS, this.$loop = new c(
      this.$renderChanges.bind(this),
      this.container.ownerDocument.defaultView
    ), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), o.resetOptions(this), o._signal("renderer", this);
  };
  (function() {
    this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, d.implement(this, b), this.updateCharacterSize = function() {
      this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin(), u.setStyle(this.scroller.style, "line-height", this.lineHeight + "px");
    }, this.setSession = function(m) {
      this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = m, m && this.scrollMargin.top && m.getScrollTop() <= 0 && m.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(m), this.$markerBack.setSession(m), this.$markerFront.setSession(m), this.$gutterLayer.setSession(m), this.$textLayer.setSession(m), m && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode));
    }, this.updateLines = function(m, v, $) {
      if (v === void 0 && (v = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > m && (this.$changedLines.firstRow = m), this.$changedLines.lastRow < v && (this.$changedLines.lastRow = v)) : this.$changedLines = {
        firstRow: m,
        lastRow: v
      }, this.$changedLines.lastRow < this.layerConfig.firstRow)
        if ($)
          this.$changedLines.lastRow = this.layerConfig.lastRow;
        else
          return;
      this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES);
    }, this.onChangeNewLineMode = function() {
      this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
    }, this.onChangeTabSize = function() {
      this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize();
    }, this.updateText = function() {
      this.$loop.schedule(this.CHANGE_TEXT);
    }, this.updateFull = function(m) {
      m ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL);
    }, this.updateFontSize = function() {
      this.$textLayer.checkForSizeChanges();
    }, this.$changes = 0, this.$updateSizeAsync = function() {
      this.$loop.pending ? this.$size.$dirty = !0 : this.onResize();
    }, this.onResize = function(m, v, $, g) {
      if (!(this.resizing > 2)) {
        this.resizing > 0 ? this.resizing++ : this.resizing = m ? 1 : 0;
        var w = this.container;
        g || (g = w.clientHeight || w.scrollHeight), $ || ($ = w.clientWidth || w.scrollWidth);
        var p = this.$updateCachedSize(m, v, $, g);
        if (!this.$size.scrollerHeight || !$ && !g)
          return this.resizing = 0;
        m && (this.$gutterLayer.$padding = null), m ? this.$renderChanges(p | this.$changes, !0) : this.$loop.schedule(p | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null;
      }
    }, this.$updateCachedSize = function(m, v, $, g) {
      g -= this.$extraHeight || 0;
      var w = 0, p = this.$size, C = {
        width: p.width,
        height: p.height,
        scrollerHeight: p.scrollerHeight,
        scrollerWidth: p.scrollerWidth
      };
      if (g && (m || p.height != g) && (p.height = g, w |= this.CHANGE_SIZE, p.scrollerHeight = p.height, this.$horizScroll && (p.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", w = w | this.CHANGE_SCROLL), $ && (m || p.width != $)) {
        w |= this.CHANGE_SIZE, p.width = $, v == null && (v = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = v, u.setStyle(this.scrollBarH.element.style, "left", v + "px"), u.setStyle(this.scroller.style, "left", v + this.margin.left + "px"), p.scrollerWidth = Math.max(0, $ - v - this.scrollBarV.getWidth() - this.margin.h), u.setStyle(this.$gutter.style, "left", this.margin.left + "px");
        var A = this.scrollBarV.getWidth() + "px";
        u.setStyle(this.scrollBarH.element.style, "right", A), u.setStyle(this.scroller.style, "right", A), u.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || m) && (w |= this.CHANGE_FULL);
      }
      return p.$dirty = !$ || !g, w && this._signal("resize", C), w;
    }, this.onGutterResize = function(m) {
      var v = this.$showGutter ? m : 0;
      v != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, v, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig();
    }, this.adjustWrapLimit = function() {
      var m = this.$size.scrollerWidth - this.$padding * 2, v = Math.floor(m / this.characterWidth);
      return this.session.adjustWrapLimit(v, this.$showPrintMargin && this.$printMarginColumn);
    }, this.setAnimatedScroll = function(m) {
      this.setOption("animatedScroll", m);
    }, this.getAnimatedScroll = function() {
      return this.$animatedScroll;
    }, this.setShowInvisibles = function(m) {
      this.setOption("showInvisibles", m), this.session.$bidiHandler.setShowInvisibles(m);
    }, this.getShowInvisibles = function() {
      return this.getOption("showInvisibles");
    }, this.getDisplayIndentGuides = function() {
      return this.getOption("displayIndentGuides");
    }, this.setDisplayIndentGuides = function(m) {
      this.setOption("displayIndentGuides", m);
    }, this.setShowPrintMargin = function(m) {
      this.setOption("showPrintMargin", m);
    }, this.getShowPrintMargin = function() {
      return this.getOption("showPrintMargin");
    }, this.setPrintMarginColumn = function(m) {
      this.setOption("printMarginColumn", m);
    }, this.getPrintMarginColumn = function() {
      return this.getOption("printMarginColumn");
    }, this.getShowGutter = function() {
      return this.getOption("showGutter");
    }, this.setShowGutter = function(m) {
      return this.setOption("showGutter", m);
    }, this.getFadeFoldWidgets = function() {
      return this.getOption("fadeFoldWidgets");
    }, this.setFadeFoldWidgets = function(m) {
      this.setOption("fadeFoldWidgets", m);
    }, this.setHighlightGutterLine = function(m) {
      this.setOption("highlightGutterLine", m);
    }, this.getHighlightGutterLine = function() {
      return this.getOption("highlightGutterLine");
    }, this.$updatePrintMargin = function() {
      if (!(!this.$showPrintMargin && !this.$printMarginEl)) {
        if (!this.$printMarginEl) {
          var m = u.createElement("div");
          m.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = u.createElement("div"), this.$printMarginEl.className = "ace_print-margin", m.appendChild(this.$printMarginEl), this.content.insertBefore(m, this.content.firstChild);
        }
        var v = this.$printMarginEl.style;
        v.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", v.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && this.session.$wrap == -1 && this.adjustWrapLimit();
      }
    }, this.getContainerElement = function() {
      return this.container;
    }, this.getMouseEventTarget = function() {
      return this.scroller;
    }, this.getTextAreaContainer = function() {
      return this.container;
    }, this.$moveTextAreaToCursor = function() {
      if (!this.$isMousePressed) {
        var m = this.textarea.style, v = this.$composition;
        if (!this.$keepTextAreaAtCursor && !v) {
          u.translate(this.textarea, -100, 0);
          return;
        }
        var $ = this.$cursorLayer.$pixelPos;
        if ($) {
          v && v.markerRange && ($ = this.$cursorLayer.getPixelPosition(v.markerRange.start, !0));
          var g = this.layerConfig, w = $.top, p = $.left;
          w -= g.offset;
          var C = v && v.useTextareaForIME ? this.lineHeight : k ? 0 : 1;
          if (w < 0 || w > g.height - C) {
            u.translate(this.textarea, 0, 0);
            return;
          }
          var A = 1, _ = this.$size.height - C;
          if (!v)
            w += this.lineHeight;
          else if (v.useTextareaForIME) {
            var E = this.textarea.value;
            A = this.characterWidth * this.session.$getStringScreenWidth(E)[0];
          } else
            w += this.lineHeight + 2;
          p -= this.scrollLeft, p > this.$size.scrollerWidth - A && (p = this.$size.scrollerWidth - A), p += this.gutterWidth + this.margin.left, u.setStyle(m, "height", C + "px"), u.setStyle(m, "width", A + "px"), u.translate(this.textarea, Math.min(p, this.$size.scrollerWidth - A), Math.min(w, _));
        }
      }
    }, this.getFirstVisibleRow = function() {
      return this.layerConfig.firstRow;
    }, this.getFirstFullyVisibleRow = function() {
      return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
    }, this.getLastFullyVisibleRow = function() {
      var m = this.layerConfig, v = m.lastRow, $ = this.session.documentToScreenRow(v, 0) * m.lineHeight;
      return $ - this.session.getScrollTop() > m.height - m.lineHeight ? v - 1 : v;
    }, this.getLastVisibleRow = function() {
      return this.layerConfig.lastRow;
    }, this.$padding = null, this.setPadding = function(m) {
      this.$padding = m, this.$textLayer.setPadding(m), this.$cursorLayer.setPadding(m), this.$markerFront.setPadding(m), this.$markerBack.setPadding(m), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin();
    }, this.setScrollMargin = function(m, v, $, g) {
      var w = this.scrollMargin;
      w.top = m | 0, w.bottom = v | 0, w.right = g | 0, w.left = $ | 0, w.v = w.top + w.bottom, w.h = w.left + w.right, w.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-w.top), this.updateFull();
    }, this.setMargin = function(m, v, $, g) {
      var w = this.margin;
      w.top = m | 0, w.bottom = v | 0, w.right = g | 0, w.left = $ | 0, w.v = w.top + w.bottom, w.h = w.left + w.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull();
    }, this.getHScrollBarAlwaysVisible = function() {
      return this.$hScrollBarAlwaysVisible;
    }, this.setHScrollBarAlwaysVisible = function(m) {
      this.setOption("hScrollBarAlwaysVisible", m);
    }, this.getVScrollBarAlwaysVisible = function() {
      return this.$vScrollBarAlwaysVisible;
    }, this.setVScrollBarAlwaysVisible = function(m) {
      this.setOption("vScrollBarAlwaysVisible", m);
    }, this.$updateScrollBarV = function() {
      var m = this.layerConfig.maxHeight, v = this.$size.scrollerHeight;
      !this.$maxLines && this.$scrollPastEnd && (m -= (v - this.lineHeight) * this.$scrollPastEnd, this.scrollTop > m - v && (m = this.scrollTop + v, this.scrollBarV.scrollTop = null)), this.scrollBarV.setScrollHeight(m + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
    }, this.$updateScrollBarH = function() {
      this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
    }, this.$frozen = !1, this.freeze = function() {
      this.$frozen = !0;
    }, this.unfreeze = function() {
      this.$frozen = !1;
    }, this.$renderChanges = function(m, v) {
      if (this.$changes && (m |= this.$changes, this.$changes = 0), !this.session || !this.container.offsetWidth || this.$frozen || !m && !v) {
        this.$changes |= m;
        return;
      }
      if (this.$size.$dirty)
        return this.$changes |= m, this.onResize(!0);
      this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender", m), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
      var $ = this.layerConfig;
      if (m & this.CHANGE_FULL || m & this.CHANGE_SIZE || m & this.CHANGE_TEXT || m & this.CHANGE_LINES || m & this.CHANGE_SCROLL || m & this.CHANGE_H_SCROLL) {
        if (m |= this.$computeLayerConfig() | this.$loop.clear(), $.firstRow != this.layerConfig.firstRow && $.firstRowScreen == this.layerConfig.firstRowScreen) {
          var g = this.scrollTop + ($.firstRow - this.layerConfig.firstRow) * this.lineHeight;
          g > 0 && (this.scrollTop = g, m = m | this.CHANGE_SCROLL, m |= this.$computeLayerConfig() | this.$loop.clear());
        }
        $ = this.layerConfig, this.$updateScrollBarV(), m & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), u.translate(this.content, -this.scrollLeft, -$.offset);
        var w = $.width + 2 * this.$padding + "px", p = $.minHeight + "px";
        u.setStyle(this.content.style, "width", w), u.setStyle(this.content.style, "height", p);
      }
      if (m & this.CHANGE_H_SCROLL && (u.translate(this.content, -this.scrollLeft, -$.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), m & this.CHANGE_FULL) {
        this.$changedLines = null, this.$textLayer.update($), this.$showGutter && this.$gutterLayer.update($), this.$markerBack.update($), this.$markerFront.update($), this.$cursorLayer.update($), this.$moveTextAreaToCursor(), this._signal("afterRender", m);
        return;
      }
      if (m & this.CHANGE_SCROLL) {
        this.$changedLines = null, m & this.CHANGE_TEXT || m & this.CHANGE_LINES ? this.$textLayer.update($) : this.$textLayer.scrollLines($), this.$showGutter && (m & this.CHANGE_GUTTER || m & this.CHANGE_LINES ? this.$gutterLayer.update($) : this.$gutterLayer.scrollLines($)), this.$markerBack.update($), this.$markerFront.update($), this.$cursorLayer.update($), this.$moveTextAreaToCursor(), this._signal("afterRender", m);
        return;
      }
      m & this.CHANGE_TEXT ? (this.$changedLines = null, this.$textLayer.update($), this.$showGutter && this.$gutterLayer.update($)) : m & this.CHANGE_LINES ? (this.$updateLines() || m & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update($) : m & this.CHANGE_TEXT || m & this.CHANGE_GUTTER ? this.$showGutter && this.$gutterLayer.update($) : m & this.CHANGE_CURSOR && this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight($), m & this.CHANGE_CURSOR && (this.$cursorLayer.update($), this.$moveTextAreaToCursor()), m & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update($), m & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update($), this._signal("afterRender", m);
    }, this.$autosize = function() {
      var m = this.session.getScreenLength() * this.lineHeight, v = this.$maxLines * this.lineHeight, $ = Math.min(
        v,
        Math.max((this.$minLines || 1) * this.lineHeight, m)
      ) + this.scrollMargin.v + (this.$extraHeight || 0);
      this.$horizScroll && ($ += this.scrollBarH.getHeight()), this.$maxPixelHeight && $ > this.$maxPixelHeight && ($ = this.$maxPixelHeight);
      var g = $ <= 2 * this.lineHeight, w = !g && m > v;
      if ($ != this.desiredHeight || this.$size.height != this.desiredHeight || w != this.$vScroll) {
        w != this.$vScroll && (this.$vScroll = w, this.scrollBarV.setVisible(w));
        var p = this.container.clientWidth;
        this.container.style.height = $ + "px", this.$updateCachedSize(!0, this.$gutterWidth, p, $), this.desiredHeight = $, this._signal("autosize");
      }
    }, this.$computeLayerConfig = function() {
      var m = this.session, v = this.$size, $ = v.height <= 2 * this.lineHeight, g = this.session.getScreenLength(), w = g * this.lineHeight, p = this.$getLongestLine(), C = !$ && (this.$hScrollBarAlwaysVisible || v.scrollerWidth - p - 2 * this.$padding < 0), A = this.$horizScroll !== C;
      A && (this.$horizScroll = C, this.scrollBarH.setVisible(C));
      var _ = this.$vScroll;
      this.$maxLines && this.lineHeight > 1 && this.$autosize();
      var E = v.scrollerHeight + this.lineHeight, I = !this.$maxLines && this.$scrollPastEnd ? (v.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
      w += I;
      var L = this.scrollMargin;
      this.session.setScrollTop(Math.max(
        -L.top,
        Math.min(this.scrollTop, w - v.scrollerHeight + L.bottom)
      )), this.session.setScrollLeft(Math.max(-L.left, Math.min(
        this.scrollLeft,
        p + 2 * this.$padding - v.scrollerWidth + L.right
      )));
      var D = !$ && (this.$vScrollBarAlwaysVisible || v.scrollerHeight - w + I < 0 || this.scrollTop > L.top), R = _ !== D;
      R && (this.$vScroll = D, this.scrollBarV.setVisible(D));
      var N = this.scrollTop % this.lineHeight, O = Math.ceil(E / this.lineHeight) - 1, P = Math.max(0, Math.round((this.scrollTop - N) / this.lineHeight)), z = P + O, M, B, V = this.lineHeight;
      P = m.screenToDocumentRow(P, 0);
      var U = m.getFoldLine(P);
      U && (P = U.start.row), M = m.documentToScreenRow(P, 0), B = m.getRowLength(P) * V, z = Math.min(m.screenToDocumentRow(z, 0), m.getLength() - 1), E = v.scrollerHeight + m.getRowLength(z) * V + B, N = this.scrollTop - M * V;
      var q = 0;
      return (this.layerConfig.width != p || A) && (q = this.CHANGE_H_SCROLL), (A || R) && (q |= this.$updateCachedSize(!0, this.gutterWidth, v.width, v.height), this._signal("scrollbarVisibilityChanged"), R && (p = this.$getLongestLine())), this.layerConfig = {
        width: p,
        padding: this.$padding,
        firstRow: P,
        firstRowScreen: M,
        lastRow: z,
        lineHeight: V,
        characterWidth: this.characterWidth,
        minHeight: E,
        maxHeight: w,
        offset: N,
        gutterOffset: V ? Math.max(0, Math.ceil((N + v.height - v.scrollerHeight) / V)) : 0,
        height: this.$size.scrollerHeight
      }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(p - this.$padding), q;
    }, this.$updateLines = function() {
      if (this.$changedLines) {
        var m = this.$changedLines.firstRow, v = this.$changedLines.lastRow;
        this.$changedLines = null;
        var $ = this.layerConfig;
        if (!(m > $.lastRow + 1) && !(v < $.firstRow)) {
          if (v === 1 / 0) {
            this.$showGutter && this.$gutterLayer.update($), this.$textLayer.update($);
            return;
          }
          return this.$textLayer.updateLines($, m, v), !0;
        }
      }
    }, this.$getLongestLine = function() {
      var m = this.session.getScreenWidth();
      return this.showInvisibles && !this.session.$useWrapMode && (m += 1), this.$textLayer && m > this.$textLayer.MAX_LINE_LENGTH && (m = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(m * this.characterWidth));
    }, this.updateFrontMarkers = function() {
      this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT);
    }, this.updateBackMarkers = function() {
      this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK);
    }, this.addGutterDecoration = function(m, v) {
      this.$gutterLayer.addGutterDecoration(m, v);
    }, this.removeGutterDecoration = function(m, v) {
      this.$gutterLayer.removeGutterDecoration(m, v);
    }, this.updateBreakpoints = function(m) {
      this.$loop.schedule(this.CHANGE_GUTTER);
    }, this.setAnnotations = function(m) {
      this.$gutterLayer.setAnnotations(m), this.$loop.schedule(this.CHANGE_GUTTER);
    }, this.updateCursor = function() {
      this.$loop.schedule(this.CHANGE_CURSOR);
    }, this.hideCursor = function() {
      this.$cursorLayer.hideCursor();
    }, this.showCursor = function() {
      this.$cursorLayer.showCursor();
    }, this.scrollSelectionIntoView = function(m, v, $) {
      this.scrollCursorIntoView(m, $), this.scrollCursorIntoView(v, $);
    }, this.scrollCursorIntoView = function(m, v, $) {
      if (this.$size.scrollerHeight !== 0) {
        var g = this.$cursorLayer.getPixelPosition(m), w = g.left, p = g.top, C = $ && $.top || 0, A = $ && $.bottom || 0, _ = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
        _ + C > p ? (v && _ + C > p + this.lineHeight && (p -= v * this.$size.scrollerHeight), p === 0 && (p = -this.scrollMargin.top), this.session.setScrollTop(p)) : _ + this.$size.scrollerHeight - A < p + this.lineHeight && (v && _ + this.$size.scrollerHeight - A < p - this.lineHeight && (p += v * this.$size.scrollerHeight), this.session.setScrollTop(p + this.lineHeight + A - this.$size.scrollerHeight));
        var E = this.scrollLeft;
        E > w ? (w < this.$padding + 2 * this.layerConfig.characterWidth && (w = -this.scrollMargin.left), this.session.setScrollLeft(w)) : E + this.$size.scrollerWidth < w + this.characterWidth ? this.session.setScrollLeft(Math.round(w + this.characterWidth - this.$size.scrollerWidth)) : E <= this.$padding && w - E < this.characterWidth && this.session.setScrollLeft(0);
      }
    }, this.getScrollTop = function() {
      return this.session.getScrollTop();
    }, this.getScrollLeft = function() {
      return this.session.getScrollLeft();
    }, this.getScrollTopRow = function() {
      return this.scrollTop / this.lineHeight;
    }, this.getScrollBottomRow = function() {
      return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
    }, this.scrollToRow = function(m) {
      this.session.setScrollTop(m * this.lineHeight);
    }, this.alignCursor = function(m, v) {
      typeof m == "number" && (m = { row: m, column: 0 });
      var $ = this.$cursorLayer.getPixelPosition(m), g = this.$size.scrollerHeight - this.lineHeight, w = $.top - g * (v || 0);
      return this.session.setScrollTop(w), w;
    }, this.STEPS = 8, this.$calcSteps = function(m, v) {
      var $ = 0, g = this.STEPS, w = [], p = function(C, A, _) {
        return _ * (Math.pow(C - 1, 3) + 1) + A;
      };
      for ($ = 0; $ < g; ++$)
        w.push(p($ / this.STEPS, m, v - m));
      return w;
    }, this.scrollToLine = function(m, v, $, g) {
      var w = this.$cursorLayer.getPixelPosition({ row: m, column: 0 }), p = w.top;
      v && (p -= this.$size.scrollerHeight / 2);
      var C = this.scrollTop;
      this.session.setScrollTop(p), $ !== !1 && this.animateScrolling(C, g);
    }, this.animateScrolling = function(m, v) {
      var $ = this.scrollTop;
      if (this.$animatedScroll) {
        var g = this;
        if (m != $) {
          if (this.$scrollAnimation) {
            var w = this.$scrollAnimation.steps;
            if (w.length && (m = w[0], m == $))
              return;
          }
          var p = g.$calcSteps(m, $);
          this.$scrollAnimation = { from: m, to: $, steps: p }, clearInterval(this.$timer), g.session.setScrollTop(p.shift()), g.session.$scrollTop = $, this.$timer = setInterval(function() {
            if (!g.session)
              return clearInterval(g.$timer);
            p.length ? (g.session.setScrollTop(p.shift()), g.session.$scrollTop = $) : $ != null ? (g.session.$scrollTop = -1, g.session.setScrollTop($), $ = null) : (g.$timer = clearInterval(g.$timer), g.$scrollAnimation = null, v && v());
          }, 10);
        }
      }
    }, this.scrollToY = function(m) {
      this.scrollTop !== m && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = m);
    }, this.scrollToX = function(m) {
      this.scrollLeft !== m && (this.scrollLeft = m), this.$loop.schedule(this.CHANGE_H_SCROLL);
    }, this.scrollTo = function(m, v) {
      this.session.setScrollTop(v), this.session.setScrollLeft(v);
    }, this.scrollBy = function(m, v) {
      v && this.session.setScrollTop(this.session.getScrollTop() + v), m && this.session.setScrollLeft(this.session.getScrollLeft() + m);
    }, this.isScrollableBy = function(m, v) {
      if (v < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || v > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || m < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || m > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right)
        return !0;
    }, this.pixelToScreenCoordinates = function(m, v) {
      var $;
      if (this.$hasCssTransforms) {
        $ = { top: 0, left: 0 };
        var g = this.$fontMetrics.transformCoordinates([m, v]);
        m = g[1] - this.gutterWidth - this.margin.left, v = g[0];
      } else
        $ = this.scroller.getBoundingClientRect();
      var w = m + this.scrollLeft - $.left - this.$padding, p = w / this.characterWidth, C = Math.floor((v + this.scrollTop - $.top) / this.lineHeight), A = this.$blockCursor ? Math.floor(p) : Math.round(p);
      return { row: C, column: A, side: p - A > 0 ? 1 : -1, offsetX: w };
    }, this.screenToTextCoordinates = function(m, v) {
      var $;
      if (this.$hasCssTransforms) {
        $ = { top: 0, left: 0 };
        var g = this.$fontMetrics.transformCoordinates([m, v]);
        m = g[1] - this.gutterWidth - this.margin.left, v = g[0];
      } else
        $ = this.scroller.getBoundingClientRect();
      var w = m + this.scrollLeft - $.left - this.$padding, p = w / this.characterWidth, C = this.$blockCursor ? Math.floor(p) : Math.round(p), A = Math.floor((v + this.scrollTop - $.top) / this.lineHeight);
      return this.session.screenToDocumentPosition(A, Math.max(C, 0), w);
    }, this.textToScreenCoordinates = function(m, v) {
      var $ = this.scroller.getBoundingClientRect(), g = this.session.documentToScreenPosition(m, v), w = this.$padding + (this.session.$bidiHandler.isBidiRow(g.row, m) ? this.session.$bidiHandler.getPosLeft(g.column) : Math.round(g.column * this.characterWidth)), p = g.row * this.lineHeight;
      return {
        pageX: $.left + w - this.scrollLeft,
        pageY: $.top + p - this.scrollTop
      };
    }, this.visualizeFocus = function() {
      u.addCssClass(this.container, "ace_focus");
    }, this.visualizeBlur = function() {
      u.removeCssClass(this.container, "ace_focus");
    }, this.showComposition = function(m) {
      this.$composition = m, m.cssText || (m.cssText = this.textarea.style.cssText), m.useTextareaForIME == null && (m.useTextareaForIME = this.$useTextareaForIME), this.$useTextareaForIME ? (u.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : m.markerId = this.session.addMarker(m.markerRange, "ace_composition_marker", "text");
    }, this.setCompositionText = function(m) {
      var v = this.session.selection.cursor;
      this.addToken(m, "composition_placeholder", v.row, v.column), this.$moveTextAreaToCursor();
    }, this.hideComposition = function() {
      if (this.$composition) {
        this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), u.removeCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = this.$composition.cssText;
        var m = this.session.selection.cursor;
        this.removeExtraToken(m.row, m.column), this.$composition = null, this.$cursorLayer.element.style.display = "";
      }
    }, this.addToken = function(m, v, $, g) {
      var w = this.session;
      w.bgTokenizer.lines[$] = null;
      var p = { type: v, value: m }, C = w.getTokens($);
      if (g == null)
        C.push(p);
      else
        for (var A = 0, _ = 0; _ < C.length; _++) {
          var E = C[_];
          if (A += E.value.length, g <= A) {
            var I = E.value.length - (A - g), L = E.value.slice(0, I), D = E.value.slice(I);
            C.splice(_, 1, { type: E.type, value: L }, p, { type: E.type, value: D });
            break;
          }
        }
      this.updateLines($, $);
    }, this.removeExtraToken = function(m, v) {
      this.updateLines(m, m);
    }, this.setTheme = function(m, v) {
      var $ = this;
      if (this.$themeId = m, $._dispatchEvent("themeChange", { theme: m }), !m || typeof m == "string") {
        var g = m || this.$options.theme.initialValue;
        o.loadModule(["theme", g], w);
      } else
        w(m);
      function w(p) {
        if ($.$themeId != m)
          return v && v();
        if (!p || !p.cssClass)
          throw new Error("couldn't load module " + m + " or it didn't call define");
        p.$id && ($.$themeId = p.$id), u.importCssString(
          p.cssText,
          p.cssClass,
          $.container
        ), $.theme && u.removeCssClass($.container, $.theme.cssClass);
        var C = "padding" in p ? p.padding : "padding" in ($.theme || {}) ? 4 : $.$padding;
        $.$padding && C != $.$padding && $.setPadding(C), $.$theme = p.cssClass, $.theme = p, u.addCssClass($.container, p.cssClass), u.setCssClass($.container, "ace_dark", p.isDark), $.$size && ($.$size.width = 0, $.$updateSizeAsync()), $._dispatchEvent("themeLoaded", { theme: p }), v && v();
      }
    }, this.getTheme = function() {
      return this.$themeId;
    }, this.setStyle = function(m, v) {
      u.setCssClass(this.container, m, v !== !1);
    }, this.unsetStyle = function(m) {
      u.removeCssClass(this.container, m);
    }, this.setCursorStyle = function(m) {
      u.setStyle(this.scroller.style, "cursor", m);
    }, this.setMouseCursor = function(m) {
      u.setStyle(this.scroller.style, "cursor", m);
    }, this.attachToShadowRoot = function() {
      u.importCssString(y, "ace_editor.css", this.container);
    }, this.destroy = function() {
      this.freeze(), this.$fontMetrics.destroy(), this.$cursorLayer.destroy(), this.removeAllListeners(), this.container.textContent = "";
    };
  }).call(S.prototype), o.defineOptions(S.prototype, "renderer", {
    animatedScroll: { initialValue: !1 },
    showInvisibles: {
      set: function(m) {
        this.$textLayer.setShowInvisibles(m) && this.$loop.schedule(this.CHANGE_TEXT);
      },
      initialValue: !1
    },
    showPrintMargin: {
      set: function() {
        this.$updatePrintMargin();
      },
      initialValue: !0
    },
    printMarginColumn: {
      set: function() {
        this.$updatePrintMargin();
      },
      initialValue: 80
    },
    printMargin: {
      set: function(m) {
        typeof m == "number" && (this.$printMarginColumn = m), this.$showPrintMargin = !!m, this.$updatePrintMargin();
      },
      get: function() {
        return this.$showPrintMargin && this.$printMarginColumn;
      }
    },
    showGutter: {
      set: function(m) {
        this.$gutter.style.display = m ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize();
      },
      initialValue: !0
    },
    fadeFoldWidgets: {
      set: function(m) {
        u.setCssClass(this.$gutter, "ace_fade-fold-widgets", m);
      },
      initialValue: !1
    },
    showFoldWidgets: {
      set: function(m) {
        this.$gutterLayer.setShowFoldWidgets(m), this.$loop.schedule(this.CHANGE_GUTTER);
      },
      initialValue: !0
    },
    displayIndentGuides: {
      set: function(m) {
        this.$textLayer.setDisplayIndentGuides(m) && this.$loop.schedule(this.CHANGE_TEXT);
      },
      initialValue: !0
    },
    highlightGutterLine: {
      set: function(m) {
        this.$gutterLayer.setHighlightGutterLine(m), this.$loop.schedule(this.CHANGE_GUTTER);
      },
      initialValue: !0
    },
    hScrollBarAlwaysVisible: {
      set: function(m) {
        (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
      },
      initialValue: !1
    },
    vScrollBarAlwaysVisible: {
      set: function(m) {
        (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL);
      },
      initialValue: !1
    },
    fontSize: {
      set: function(m) {
        typeof m == "number" && (m = m + "px"), this.container.style.fontSize = m, this.updateFontSize();
      },
      initialValue: 12
    },
    fontFamily: {
      set: function(m) {
        this.container.style.fontFamily = m, this.updateFontSize();
      }
    },
    maxLines: {
      set: function(m) {
        this.updateFull();
      }
    },
    minLines: {
      set: function(m) {
        this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull();
      }
    },
    maxPixelHeight: {
      set: function(m) {
        this.updateFull();
      },
      initialValue: 0
    },
    scrollPastEnd: {
      set: function(m) {
        m = +m || 0, this.$scrollPastEnd != m && (this.$scrollPastEnd = m, this.$loop.schedule(this.CHANGE_SCROLL));
      },
      initialValue: 0,
      handlesSet: !0
    },
    fixedWidthGutter: {
      set: function(m) {
        this.$gutterLayer.$fixedWidth = !!m, this.$loop.schedule(this.CHANGE_GUTTER);
      }
    },
    theme: {
      set: function(m) {
        this.setTheme(m);
      },
      get: function() {
        return this.$themeId || this.theme;
      },
      initialValue: "./theme/textmate",
      handlesSet: !0
    },
    hasCssTransforms: {},
    useTextareaForIME: {
      initialValue: !x.isMobile && !x.isIE
    }
  }), e.VirtualRenderer = S;
});
ace.define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(t, e, a) {
  var d = t("../lib/oop"), u = t("../lib/net"), o = t("../lib/event_emitter").EventEmitter, s = t("../config");
  function h(l) {
    var c = "importScripts('" + u.qualifyURL(l) + "');";
    try {
      return new Blob([c], { type: "application/javascript" });
    } catch {
      var f = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, b = new f();
      return b.append(c), b.getBlob("application/javascript");
    }
  }
  function n(l) {
    if (typeof Worker > "u")
      return { postMessage: function() {
      }, terminate: function() {
      } };
    if (s.get("loadWorkerFromBlob")) {
      var c = h(l), f = window.URL || window.webkitURL, b = f.createObjectURL(c);
      return new Worker(b);
    }
    return new Worker(l);
  }
  var i = function(l) {
    l.postMessage || (l = this.$createWorkerFromOldConfig.apply(this, arguments)), this.$worker = l, this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage;
  };
  (function() {
    d.implement(this, o), this.$createWorkerFromOldConfig = function(l, c, f, b, y) {
      if (t.nameToUrl && !t.toUrl && (t.toUrl = t.nameToUrl), s.get("packaged") || !t.toUrl)
        b = b || s.moduleUrl(c, "worker");
      else {
        var x = this.$normalizePath;
        b = b || x(t.toUrl("ace/worker/worker.js", null, "_"));
        var k = {};
        l.forEach(function(S) {
          k[S] = x(t.toUrl(S, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
        });
      }
      return this.$worker = n(b), y && this.send("importScripts", y), this.$worker.postMessage({
        init: !0,
        tlns: k,
        module: c,
        classname: f
      }), this.$worker;
    }, this.onMessage = function(l) {
      var c = l.data;
      switch (c.type) {
        case "event":
          this._signal(c.name, { data: c.data });
          break;
        case "call":
          var f = this.callbacks[c.id];
          f && (f(c.data), delete this.callbacks[c.id]);
          break;
        case "error":
          this.reportError(c.data);
          break;
        case "log":
          window.console && console.log && console.log.apply(console, c.data);
          break;
      }
    }, this.reportError = function(l) {
      window.console && console.error && console.error(l);
    }, this.$normalizePath = function(l) {
      return u.qualifyURL(l);
    }, this.terminate = function() {
      this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null;
    }, this.send = function(l, c) {
      this.$worker.postMessage({ command: l, args: c });
    }, this.call = function(l, c, f) {
      if (f) {
        var b = this.callbackId++;
        this.callbacks[b] = f, c.push(b);
      }
      this.send(l, c);
    }, this.emit = function(l, c) {
      try {
        c.data && c.data.err && (c.data.err = { message: c.data.err.message, stack: c.data.err.stack, code: c.data.err.code }), this.$worker.postMessage({ event: l, data: { data: c.data } });
      } catch (f) {
        console.error(f.stack);
      }
    }, this.attachToDocument = function(l) {
      this.$doc && this.terminate(), this.$doc = l, this.call("setValue", [l.getValue()]), l.on("change", this.changeListener);
    }, this.changeListener = function(l) {
      this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), l.action == "insert" ? this.deltaQueue.push(l.start, l.lines) : this.deltaQueue.push(l.start, l.end);
    }, this.$sendDeltaQueue = function() {
      var l = this.deltaQueue;
      l && (this.deltaQueue = null, l.length > 50 && l.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", { data: l }));
    };
  }).call(i.prototype);
  var r = function(l, c, f) {
    var b = null, y = !1, x = Object.create(o), k = [], S = new i({
      messageBuffer: k,
      terminate: function() {
      },
      postMessage: function(v) {
        k.push(v), b && (y ? setTimeout(m) : m());
      }
    });
    S.setEmitSync = function(v) {
      y = v;
    };
    var m = function() {
      var v = k.shift();
      v.command ? b[v.command].apply(b, v.args) : v.event && x._signal(v.event, v.data);
    };
    return x.postMessage = function(v) {
      S.onMessage({ data: v });
    }, x.callback = function(v, $) {
      this.postMessage({ type: "call", id: $, data: v });
    }, x.emit = function(v, $) {
      this.postMessage({ type: "event", name: v, data: $ });
    }, s.loadModule(["worker", c], function(v) {
      for (b = new v[f](x); k.length; )
        m();
    }), S;
  };
  e.UIWorkerClient = r, e.WorkerClient = i, e.createWorker = n;
});
ace.define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(t, e, a) {
  var d = t("./range").Range, u = t("./lib/event_emitter").EventEmitter, o = t("./lib/oop"), s = function(h, n, i, r, l, c) {
    var f = this;
    this.length = n, this.session = h, this.doc = h.getDocument(), this.mainClass = l, this.othersClass = c, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = r, this.$onCursorChange = function() {
      setTimeout(function() {
        f.onCursorChange();
      });
    }, this.$pos = i;
    var b = h.getUndoManager().$undoStack || h.getUndoManager().$undostack || { length: -1 };
    this.$undoStackDepth = b.length, this.setup(), h.selection.on("changeCursor", this.$onCursorChange);
  };
  (function() {
    o.implement(this, u), this.setup = function() {
      var h = this, n = this.doc, i = this.session;
      this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = n.createAnchor(this.$pos.row, this.$pos.column);
      var r = this.pos;
      r.$insertRight = !0, r.detach(), r.markerId = i.addMarker(new d(r.row, r.column, r.row, r.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function(l) {
        var c = n.createAnchor(l.row, l.column);
        c.$insertRight = !0, c.detach(), h.others.push(c);
      }), i.setUndoSelect(!1);
    }, this.showOtherMarkers = function() {
      if (!this.othersActive) {
        var h = this.session, n = this;
        this.othersActive = !0, this.others.forEach(function(i) {
          i.markerId = h.addMarker(new d(i.row, i.column, i.row, i.column + n.length), n.othersClass, null, !1);
        });
      }
    }, this.hideOtherMarkers = function() {
      if (this.othersActive) {
        this.othersActive = !1;
        for (var h = 0; h < this.others.length; h++)
          this.session.removeMarker(this.others[h].markerId);
      }
    }, this.onUpdate = function(h) {
      if (this.$updating)
        return this.updateAnchors(h);
      var n = h;
      if (n.start.row === n.end.row && n.start.row === this.pos.row) {
        this.$updating = !0;
        var i = h.action === "insert" ? n.end.column - n.start.column : n.start.column - n.end.column, r = n.start.column >= this.pos.column && n.start.column <= this.pos.column + this.length + 1, l = n.start.column - this.pos.column;
        if (this.updateAnchors(h), r && (this.length += i), r && !this.session.$fromUndo) {
          if (h.action === "insert")
            for (var c = this.others.length - 1; c >= 0; c--) {
              var f = this.others[c], b = { row: f.row, column: f.column + l };
              this.doc.insertMergedLines(b, h.lines);
            }
          else if (h.action === "remove")
            for (var c = this.others.length - 1; c >= 0; c--) {
              var f = this.others[c], b = { row: f.row, column: f.column + l };
              this.doc.remove(new d(b.row, b.column, b.row, b.column - i));
            }
        }
        this.$updating = !1, this.updateMarkers();
      }
    }, this.updateAnchors = function(h) {
      this.pos.onChange(h);
      for (var n = this.others.length; n--; )
        this.others[n].onChange(h);
      this.updateMarkers();
    }, this.updateMarkers = function() {
      if (!this.$updating) {
        var h = this, n = this.session, i = function(l, c) {
          n.removeMarker(l.markerId), l.markerId = n.addMarker(new d(l.row, l.column, l.row, l.column + h.length), c, null, !1);
        };
        i(this.pos, this.mainClass);
        for (var r = this.others.length; r--; )
          i(this.others[r], this.othersClass);
      }
    }, this.onCursorChange = function(h) {
      if (!(this.$updating || !this.session)) {
        var n = this.session.selection.getCursor();
        n.row === this.pos.row && n.column >= this.pos.column && n.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", h)) : (this.hideOtherMarkers(), this._emit("cursorLeave", h));
      }
    }, this.detach = function() {
      this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.off("change", this.$onUpdate), this.session.selection.off("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null;
    }, this.cancel = function() {
      if (this.$undoStackDepth !== -1) {
        for (var h = this.session.getUndoManager(), n = (h.$undoStack || h.$undostack).length - this.$undoStackDepth, i = 0; i < n; i++)
          h.undo(this.session, !0);
        this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore);
      }
    };
  }).call(s.prototype), e.PlaceHolder = s;
});
ace.define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(t, e, a) {
  var d = t("../lib/event"), u = t("../lib/useragent");
  function o(h, n) {
    return h.row == n.row && h.column == n.column;
  }
  function s(h) {
    var n = h.domEvent, i = n.altKey, r = n.shiftKey, l = n.ctrlKey, c = h.getAccelKey(), f = h.getButton();
    if (l && u.isMac && (f = n.button), h.editor.inMultiSelectMode && f == 2) {
      h.editor.textInput.onContextMenu(h.domEvent);
      return;
    }
    if (!l && !i && !c) {
      f === 0 && h.editor.inMultiSelectMode && h.editor.exitMultiSelectMode();
      return;
    }
    if (f === 0) {
      var b = h.editor, y = b.selection, x = b.inMultiSelectMode, k = h.getDocumentPosition(), S = y.getCursor(), m = h.inSelection() || y.isEmpty() && o(k, S), v = h.x, $ = h.y, g = function(P) {
        v = P.clientX, $ = P.clientY;
      }, w = b.session, p = b.renderer.pixelToScreenCoordinates(v, $), C = p, A;
      if (b.$mouseHandler.$enableJumpToDef)
        l && i || c && i ? A = r ? "block" : "add" : i && b.$blockSelectEnabled && (A = "block");
      else if (c && !i) {
        if (A = "add", !x && r)
          return;
      } else i && b.$blockSelectEnabled && (A = "block");
      if (A && u.isMac && n.ctrlKey && b.$mouseHandler.cancelContextMenu(), A == "add") {
        if (!x && m)
          return;
        if (!x) {
          var _ = y.toOrientedRange();
          b.addSelectionMarker(_);
        }
        var E = y.rangeList.rangeAtPoint(k);
        b.inVirtualSelectionMode = !0, r && (E = null, _ = y.ranges[0] || _, b.removeSelectionMarker(_)), b.once("mouseup", function() {
          var P = y.toOrientedRange();
          E && P.isEmpty() && o(E.cursor, P.cursor) ? y.substractPoint(P.cursor) : (r ? y.substractPoint(_.cursor) : _ && (b.removeSelectionMarker(_), y.addRange(_)), y.addRange(P)), b.inVirtualSelectionMode = !1;
        });
      } else if (A == "block") {
        h.stop(), b.inVirtualSelectionMode = !0;
        var I, L = [], D = function() {
          var P = b.renderer.pixelToScreenCoordinates(v, $), z = w.screenToDocumentPosition(P.row, P.column, P.offsetX);
          o(C, P) && o(z, y.lead) || (C = P, b.selection.moveToPosition(z), b.renderer.scrollCursorIntoView(), b.removeSelectionMarkers(L), L = y.rectangularRangeBlock(C, p), b.$mouseHandler.$clickSelection && L.length == 1 && L[0].isEmpty() && (L[0] = b.$mouseHandler.$clickSelection.clone()), L.forEach(b.addSelectionMarker, b), b.updateSelectionMarkers());
        };
        x && !c ? y.toSingleRange() : !x && c && (I = y.toOrientedRange(), b.addSelectionMarker(I)), r ? p = w.documentToScreenPosition(y.lead) : y.moveToPosition(k), C = { row: -1, column: -1 };
        var R = function(P) {
          D(), clearInterval(O), b.removeSelectionMarkers(L), L.length || (L = [y.toOrientedRange()]), I && (b.removeSelectionMarker(I), y.toSingleRange(I));
          for (var z = 0; z < L.length; z++)
            y.addRange(L[z]);
          b.inVirtualSelectionMode = !1, b.$mouseHandler.$clickSelection = null;
        }, N = D;
        d.capture(b.container, g, R);
        var O = setInterval(function() {
          N();
        }, 20);
        return h.preventDefault();
      }
    }
  }
  e.onMouseDown = s;
});
ace.define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(t, e, a) {
  e.defaultCommands = [{
    name: "addCursorAbove",
    description: "Add cursor above",
    exec: function(u) {
      u.selectMoreLines(-1);
    },
    bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "addCursorBelow",
    description: "Add cursor below",
    exec: function(u) {
      u.selectMoreLines(1);
    },
    bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "addCursorAboveSkipCurrent",
    description: "Add cursor above (skip current)",
    exec: function(u) {
      u.selectMoreLines(-1, !0);
    },
    bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "addCursorBelowSkipCurrent",
    description: "Add cursor below (skip current)",
    exec: function(u) {
      u.selectMoreLines(1, !0);
    },
    bindKey: { win: "Ctrl-Alt-Shift-Down", mac: "Ctrl-Alt-Shift-Down" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "selectMoreBefore",
    description: "Select more before",
    exec: function(u) {
      u.selectMore(-1);
    },
    bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "selectMoreAfter",
    description: "Select more after",
    exec: function(u) {
      u.selectMore(1);
    },
    bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "selectNextBefore",
    description: "Select next before",
    exec: function(u) {
      u.selectMore(-1, !0);
    },
    bindKey: { win: "Ctrl-Alt-Shift-Left", mac: "Ctrl-Alt-Shift-Left" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "selectNextAfter",
    description: "Select next after",
    exec: function(u) {
      u.selectMore(1, !0);
    },
    bindKey: { win: "Ctrl-Alt-Shift-Right", mac: "Ctrl-Alt-Shift-Right" },
    scrollIntoView: "cursor",
    readOnly: !0
  }, {
    name: "toggleSplitSelectionIntoLines",
    description: "Split into lines",
    exec: function(u) {
      u.multiSelect.rangeCount > 1 ? u.multiSelect.joinSelections() : u.multiSelect.splitIntoLines();
    },
    bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
    readOnly: !0
  }, {
    name: "splitSelectionIntoLines",
    description: "Split into lines",
    exec: function(u) {
      u.multiSelect.splitIntoLines();
    },
    readOnly: !0
  }, {
    name: "alignCursors",
    description: "Align cursors",
    exec: function(u) {
      u.alignCursors();
    },
    bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
    scrollIntoView: "cursor"
  }, {
    name: "findAll",
    description: "Find all",
    exec: function(u) {
      u.findAll();
    },
    bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
    scrollIntoView: "cursor",
    readOnly: !0
  }], e.multiSelectCommands = [{
    name: "singleSelection",
    description: "Single selection",
    bindKey: "esc",
    exec: function(u) {
      u.exitMultiSelectMode();
    },
    scrollIntoView: "cursor",
    readOnly: !0,
    isAvailable: function(u) {
      return u && u.inMultiSelectMode;
    }
  }];
  var d = t("../keyboard/hash_handler").HashHandler;
  e.keyboardHandler = new d(e.multiSelectCommands);
});
ace.define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(t, e, a) {
  var d = t("./range_list").RangeList, u = t("./range").Range, o = t("./selection").Selection, s = t("./mouse/multi_select_handler").onMouseDown, h = t("./lib/event"), n = t("./lib/lang"), i = t("./commands/multi_select_commands");
  e.commands = i.defaultCommands.concat(i.multiSelectCommands);
  var r = t("./search").Search, l = new r();
  function c(S, m, v) {
    return l.$options.wrap = !0, l.$options.needle = m, l.$options.backwards = v == -1, l.find(S);
  }
  var f = t("./edit_session").EditSession;
  (function() {
    this.getSelectionMarkers = function() {
      return this.$selectionMarkers;
    };
  }).call(f.prototype), function() {
    this.ranges = null, this.rangeList = null, this.addRange = function(S, m) {
      if (S) {
        if (!this.inMultiSelectMode && this.rangeCount === 0) {
          var v = this.toOrientedRange();
          if (this.rangeList.add(v), this.rangeList.add(S), this.rangeList.ranges.length != 2)
            return this.rangeList.removeAll(), m || this.fromOrientedRange(S);
          this.rangeList.removeAll(), this.rangeList.add(v), this.$onAddRange(v);
        }
        S.cursor || (S.cursor = S.end);
        var $ = this.rangeList.add(S);
        return this.$onAddRange(S), $.length && this.$onRemoveRange($), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), m || this.fromOrientedRange(S);
      }
    }, this.toSingleRange = function(S) {
      S = S || this.ranges[0];
      var m = this.rangeList.removeAll();
      m.length && this.$onRemoveRange(m), S && this.fromOrientedRange(S);
    }, this.substractPoint = function(S) {
      var m = this.rangeList.substractPoint(S);
      if (m)
        return this.$onRemoveRange(m), m[0];
    }, this.mergeOverlappingRanges = function() {
      var S = this.rangeList.merge();
      S.length && this.$onRemoveRange(S);
    }, this.$onAddRange = function(S) {
      this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(S), this._signal("addRange", { range: S });
    }, this.$onRemoveRange = function(S) {
      if (this.rangeCount = this.rangeList.ranges.length, this.rangeCount == 1 && this.inMultiSelectMode) {
        var m = this.rangeList.ranges.pop();
        S.push(m), this.rangeCount = 0;
      }
      for (var v = S.length; v--; ) {
        var $ = this.ranges.indexOf(S[v]);
        this.ranges.splice($, 1);
      }
      this._signal("removeRange", { ranges: S }), this.rangeCount === 0 && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), m = m || this.ranges[0], m && !m.isEqual(this.getRange()) && this.fromOrientedRange(m);
    }, this.$initRangeList = function() {
      this.rangeList || (this.rangeList = new d(), this.ranges = [], this.rangeCount = 0);
    }, this.getAllRanges = function() {
      return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()];
    }, this.splitIntoLines = function() {
      for (var S = this.ranges.length ? this.ranges : [this.getRange()], m = [], v = 0; v < S.length; v++) {
        var $ = S[v], g = $.start.row, w = $.end.row;
        if (g === w)
          m.push($.clone());
        else {
          for (m.push(new u(g, $.start.column, g, this.session.getLine(g).length)); ++g < w; )
            m.push(this.getLineRange(g, !0));
          m.push(new u(w, 0, w, $.end.column));
        }
        v == 0 && !this.isBackwards() && (m = m.reverse());
      }
      this.toSingleRange();
      for (var v = m.length; v--; )
        this.addRange(m[v]);
    }, this.joinSelections = function() {
      var S = this.rangeList.ranges, m = S[S.length - 1], v = u.fromPoints(S[0].start, m.end);
      this.toSingleRange(), this.setSelectionRange(v, m.cursor == m.start);
    }, this.toggleBlockSelection = function() {
      if (this.rangeCount > 1) {
        var S = this.rangeList.ranges, m = S[S.length - 1], v = u.fromPoints(S[0].start, m.end);
        this.toSingleRange(), this.setSelectionRange(v, m.cursor == m.start);
      } else {
        var $ = this.session.documentToScreenPosition(this.cursor), g = this.session.documentToScreenPosition(this.anchor), w = this.rectangularRangeBlock($, g);
        w.forEach(this.addRange, this);
      }
    }, this.rectangularRangeBlock = function(S, m, v) {
      var $ = [], g = S.column < m.column;
      if (g)
        var w = S.column, p = m.column, C = S.offsetX, A = m.offsetX;
      else
        var w = m.column, p = S.column, C = m.offsetX, A = S.offsetX;
      var _ = S.row < m.row;
      if (_)
        var E = S.row, I = m.row;
      else
        var E = m.row, I = S.row;
      w < 0 && (w = 0), E < 0 && (E = 0), E == I && (v = !0);
      for (var L, D = E; D <= I; D++) {
        var R = u.fromPoints(
          this.session.screenToDocumentPosition(D, w, C),
          this.session.screenToDocumentPosition(D, p, A)
        );
        if (R.isEmpty()) {
          if (L && y(R.end, L))
            break;
          L = R.end;
        }
        R.cursor = g ? R.start : R.end, $.push(R);
      }
      if (_ && $.reverse(), !v) {
        for (var N = $.length - 1; $[N].isEmpty() && N > 0; )
          N--;
        if (N > 0)
          for (var O = 0; $[O].isEmpty(); )
            O++;
        for (var P = N; P >= O; P--)
          $[P].isEmpty() && $.splice(P, 1);
      }
      return $;
    };
  }.call(o.prototype);
  var b = t("./editor").Editor;
  (function() {
    this.updateSelectionMarkers = function() {
      this.renderer.updateCursor(), this.renderer.updateBackMarkers();
    }, this.addSelectionMarker = function(S) {
      S.cursor || (S.cursor = S.end);
      var m = this.getSelectionStyle();
      return S.marker = this.session.addMarker(S, "ace_selection", m), this.session.$selectionMarkers.push(S), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, S;
    }, this.removeSelectionMarker = function(S) {
      if (S.marker) {
        this.session.removeMarker(S.marker);
        var m = this.session.$selectionMarkers.indexOf(S);
        m != -1 && this.session.$selectionMarkers.splice(m, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
      }
    }, this.removeSelectionMarkers = function(S) {
      for (var m = this.session.$selectionMarkers, v = S.length; v--; ) {
        var $ = S[v];
        if ($.marker) {
          this.session.removeMarker($.marker);
          var g = m.indexOf($);
          g != -1 && m.splice(g, 1);
        }
      }
      this.session.selectionMarkerCount = m.length;
    }, this.$onAddRange = function(S) {
      this.addSelectionMarker(S.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
    }, this.$onRemoveRange = function(S) {
      this.removeSelectionMarkers(S.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
    }, this.$onMultiSelect = function(S) {
      this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(i.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers());
    }, this.$onSingleSelect = function(S) {
      this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(i.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"));
    }, this.$onMultiSelectExec = function(S) {
      var m = S.command, v = S.editor;
      if (v.multiSelect) {
        if (m.multiSelectAction)
          m.multiSelectAction == "forEach" ? $ = v.forEachSelection(m, S.args) : m.multiSelectAction == "forEachLine" ? $ = v.forEachSelection(m, S.args, !0) : m.multiSelectAction == "single" ? (v.exitMultiSelectMode(), $ = m.exec(v, S.args || {})) : $ = m.multiSelectAction(v, S.args || {});
        else {
          var $ = m.exec(v, S.args || {});
          v.multiSelect.addRange(v.multiSelect.toOrientedRange()), v.multiSelect.mergeOverlappingRanges();
        }
        return $;
      }
    }, this.forEachSelection = function(S, m, v) {
      if (!this.inVirtualSelectionMode) {
        var $ = v && v.keepOrder, g = v == !0 || v && v.$byLines, w = this.session, p = this.selection, C = p.rangeList, A = ($ ? p : C).ranges, _;
        if (!A.length)
          return S.exec ? S.exec(this, m || {}) : S(this, m || {});
        var E = p._eventRegistry;
        p._eventRegistry = {};
        var I = new o(w);
        this.inVirtualSelectionMode = !0;
        for (var L = A.length; L--; ) {
          if (g)
            for (; L > 0 && A[L].start.row == A[L - 1].end.row; )
              L--;
          I.fromOrientedRange(A[L]), I.index = L, this.selection = w.selection = I;
          var D = S.exec ? S.exec(this, m || {}) : S(this, m || {});
          !_ && D !== void 0 && (_ = D), I.toOrientedRange(A[L]);
        }
        I.detach(), this.selection = w.selection = p, this.inVirtualSelectionMode = !1, p._eventRegistry = E, p.mergeOverlappingRanges(), p.ranges[0] && p.fromOrientedRange(p.ranges[0]);
        var R = this.renderer.$scrollAnimation;
        return this.onCursorChange(), this.onSelectionChange(), R && R.from == R.to && this.renderer.animateScrolling(R.from), _;
      }
    }, this.exitMultiSelectMode = function() {
      !this.inMultiSelectMode || this.inVirtualSelectionMode || this.multiSelect.toSingleRange();
    }, this.getSelectedText = function() {
      var S = "";
      if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
        for (var m = this.multiSelect.rangeList.ranges, v = [], $ = 0; $ < m.length; $++)
          v.push(this.session.getTextRange(m[$]));
        var g = this.session.getDocument().getNewLineCharacter();
        S = v.join(g), S.length == (v.length - 1) * g.length && (S = "");
      } else this.selection.isEmpty() || (S = this.session.getTextRange(this.getSelectionRange()));
      return S;
    }, this.$checkMultiselectChange = function(S, m) {
      if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
        var v = this.multiSelect.ranges[0];
        if (this.multiSelect.isEmpty() && m == this.multiSelect.anchor)
          return;
        var $ = m == this.multiSelect.anchor ? v.cursor == v.start ? v.end : v.start : v.cursor;
        $.row != m.row || this.session.$clipPositionToDocument($.row, $.column).column != m.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges();
      }
    }, this.findAll = function(S, m, v) {
      if (m = m || {}, m.needle = S || m.needle, m.needle == null) {
        var $ = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
        m.needle = this.session.getTextRange($);
      }
      this.$search.set(m);
      var g = this.$search.findAll(this.session);
      if (!g.length)
        return 0;
      var w = this.multiSelect;
      v || w.toSingleRange(g[0]);
      for (var p = g.length; p--; )
        w.addRange(g[p], !0);
      return $ && w.rangeList.rangeAtPoint($.start) && w.addRange($, !0), g.length;
    }, this.selectMoreLines = function(S, m) {
      var v = this.selection.toOrientedRange(), $ = v.cursor == v.end, g = this.session.documentToScreenPosition(v.cursor);
      this.selection.$desiredColumn && (g.column = this.selection.$desiredColumn);
      var w = this.session.screenToDocumentPosition(g.row + S, g.column);
      if (v.isEmpty())
        var C = w;
      else
        var p = this.session.documentToScreenPosition($ ? v.end : v.start), C = this.session.screenToDocumentPosition(p.row + S, p.column);
      if ($) {
        var A = u.fromPoints(w, C);
        A.cursor = A.start;
      } else {
        var A = u.fromPoints(C, w);
        A.cursor = A.end;
      }
      if (A.desiredColumn = g.column, !this.selection.inMultiSelectMode)
        this.selection.addRange(v);
      else if (m)
        var _ = v.cursor;
      this.selection.addRange(A), _ && this.selection.substractPoint(_);
    }, this.transposeSelections = function(S) {
      for (var m = this.session, v = m.multiSelect, $ = v.ranges, g = $.length; g--; ) {
        var w = $[g];
        if (w.isEmpty()) {
          var p = m.getWordRange(w.start.row, w.start.column);
          w.start.row = p.start.row, w.start.column = p.start.column, w.end.row = p.end.row, w.end.column = p.end.column;
        }
      }
      v.mergeOverlappingRanges();
      for (var C = [], g = $.length; g--; ) {
        var w = $[g];
        C.unshift(m.getTextRange(w));
      }
      S < 0 ? C.unshift(C.pop()) : C.push(C.shift());
      for (var g = $.length; g--; ) {
        var w = $[g], p = w.clone();
        m.replace(w, C[g]), w.start.row = p.start.row, w.start.column = p.start.column;
      }
      v.fromOrientedRange(v.ranges[0]);
    }, this.selectMore = function(S, m, v) {
      var $ = this.session, g = $.multiSelect, w = g.toOrientedRange();
      if (!(w.isEmpty() && (w = $.getWordRange(w.start.row, w.start.column), w.cursor = S == -1 ? w.start : w.end, this.multiSelect.addRange(w), v))) {
        var p = $.getTextRange(w), C = c($, p, S);
        C && (C.cursor = S == -1 ? C.start : C.end, this.session.unfold(C), this.multiSelect.addRange(C), this.renderer.scrollCursorIntoView(null, 0.5)), m && this.multiSelect.substractPoint(w.cursor);
      }
    }, this.alignCursors = function() {
      var S = this.session, m = S.multiSelect, v = m.ranges, $ = -1, g = v.filter(function(N) {
        if (N.cursor.row == $)
          return !0;
        $ = N.cursor.row;
      });
      if (!v.length || g.length == v.length - 1) {
        var w = this.selection.getRange(), p = w.start.row, C = w.end.row, A = p == C;
        if (A) {
          var _ = this.session.getLength(), E;
          do
            E = this.session.getLine(C);
          while (/[=:]/.test(E) && ++C < _);
          do
            E = this.session.getLine(p);
          while (/[=:]/.test(E) && --p > 0);
          p < 0 && (p = 0), C >= _ && (C = _ - 1);
        }
        var I = this.session.removeFullLines(p, C);
        I = this.$reAlignText(I, A), this.session.insert({ row: p, column: 0 }, I.join(`
`) + `
`), A || (w.start.column = 0, w.end.column = I[I.length - 1].length), this.selection.setRange(w);
      } else {
        g.forEach(function(N) {
          m.substractPoint(N.cursor);
        });
        var L = 0, D = 1 / 0, R = v.map(function(N) {
          var O = N.cursor, P = S.getLine(O.row), z = P.substr(O.column).search(/\S/g);
          return z == -1 && (z = 0), O.column > L && (L = O.column), z < D && (D = z), z;
        });
        v.forEach(function(N, O) {
          var P = N.cursor, z = L - P.column, M = R[O] - D;
          z > M ? S.insert(P, n.stringRepeat(" ", z - M)) : S.remove(new u(P.row, P.column, P.row, P.column - z + M)), N.start.column = N.end.column = L, N.start.row = N.end.row = P.row, N.cursor = N.end;
        }), m.fromOrientedRange(v[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers();
      }
    }, this.$reAlignText = function(S, m) {
      var v = !0, $ = !0, g, w, p;
      return S.map(function(I) {
        var L = I.match(/(\s*)(.*?)(\s*)([=:].*)/);
        return L ? g == null ? (g = L[1].length, w = L[2].length, p = L[3].length, L) : (g + w + p != L[1].length + L[2].length + L[3].length && ($ = !1), g != L[1].length && (v = !1), g > L[1].length && (g = L[1].length), w < L[2].length && (w = L[2].length), p > L[3].length && (p = L[3].length), L) : [I];
      }).map(m ? A : v ? $ ? _ : A : E);
      function C(I) {
        return n.stringRepeat(" ", I);
      }
      function A(I) {
        return I[2] ? C(g) + I[2] + C(w - I[2].length + p) + I[4].replace(/^([=:])\s+/, "$1 ") : I[0];
      }
      function _(I) {
        return I[2] ? C(g + w - I[2].length) + I[2] + C(p) + I[4].replace(/^([=:])\s+/, "$1 ") : I[0];
      }
      function E(I) {
        return I[2] ? C(g) + I[2] + C(p) + I[4].replace(/^([=:])\s+/, "$1 ") : I[0];
      }
    };
  }).call(b.prototype);
  function y(S, m) {
    return S.row == m.row && S.column == m.column;
  }
  e.onSessionChange = function(S) {
    var m = S.session;
    m && !m.multiSelect && (m.$selectionMarkers = [], m.selection.$initRangeList(), m.multiSelect = m.selection), this.multiSelect = m && m.multiSelect;
    var v = S.oldSession;
    v && (v.multiSelect.off("addRange", this.$onAddRange), v.multiSelect.off("removeRange", this.$onRemoveRange), v.multiSelect.off("multiSelect", this.$onMultiSelect), v.multiSelect.off("singleSelect", this.$onSingleSelect), v.multiSelect.lead.off("change", this.$checkMultiselectChange), v.multiSelect.anchor.off("change", this.$checkMultiselectChange)), m && (m.multiSelect.on("addRange", this.$onAddRange), m.multiSelect.on("removeRange", this.$onRemoveRange), m.multiSelect.on("multiSelect", this.$onMultiSelect), m.multiSelect.on("singleSelect", this.$onSingleSelect), m.multiSelect.lead.on("change", this.$checkMultiselectChange), m.multiSelect.anchor.on("change", this.$checkMultiselectChange)), m && this.inMultiSelectMode != m.selection.inMultiSelectMode && (m.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect());
  };
  function x(S) {
    S.$multiselectOnSessionChange || (S.$onAddRange = S.$onAddRange.bind(S), S.$onRemoveRange = S.$onRemoveRange.bind(S), S.$onMultiSelect = S.$onMultiSelect.bind(S), S.$onSingleSelect = S.$onSingleSelect.bind(S), S.$multiselectOnSessionChange = e.onSessionChange.bind(S), S.$checkMultiselectChange = S.$checkMultiselectChange.bind(S), S.$multiselectOnSessionChange(S), S.on("changeSession", S.$multiselectOnSessionChange), S.on("mousedown", s), S.commands.addCommands(i.defaultCommands), k(S));
  }
  function k(S) {
    if (!S.textInput) return;
    var m = S.textInput.getElement(), v = !1;
    h.addListener(m, "keydown", function(g) {
      var w = g.keyCode == 18 && !(g.ctrlKey || g.shiftKey || g.metaKey);
      S.$blockSelectEnabled && w ? v || (S.renderer.setMouseCursor("crosshair"), v = !0) : v && $();
    }, S), h.addListener(m, "keyup", $, S), h.addListener(m, "blur", $, S);
    function $(g) {
      v && (S.renderer.setMouseCursor(""), v = !1);
    }
  }
  e.MultiSelect = x, t("./config").defineOptions(b.prototype, "editor", {
    enableMultiselect: {
      set: function(S) {
        x(this), S ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", s)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", s));
      },
      value: !0
    },
    enableBlockSelect: {
      set: function(S) {
        this.$blockSelectEnabled = S;
      },
      value: !0
    }
  });
});
ace.define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(t, e, a) {
  var d = t("../../range").Range, u = e.FoldMode = function() {
  };
  (function() {
    this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(o, s, h) {
      var n = o.getLine(h);
      return this.foldingStartMarker.test(n) ? "start" : s == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : "";
    }, this.getFoldWidgetRange = function(o, s, h) {
      return null;
    }, this.indentationBlock = function(o, s, h) {
      var n = /\S/, i = o.getLine(s), r = i.search(n);
      if (r != -1) {
        for (var l = h || i.length, c = o.getLength(), f = s, b = s; ++s < c; ) {
          var y = o.getLine(s).search(n);
          if (y != -1) {
            if (y <= r) {
              var x = o.getTokenAt(s, 0);
              if (!x || x.type !== "string")
                break;
            }
            b = s;
          }
        }
        if (b > f) {
          var k = o.getLine(b).length;
          return new d(f, l, b, k);
        }
      }
    }, this.openingBracketBlock = function(o, s, h, n, i) {
      var r = { row: h, column: n + 1 }, l = o.$findClosingBracket(s, r, i);
      if (l) {
        var c = o.foldWidgets[l.row];
        return c == null && (c = o.getFoldWidget(l.row)), c == "start" && l.row > r.row && (l.row--, l.column = o.getLine(l.row).length), d.fromPoints(r, l);
      }
    }, this.closingBracketBlock = function(o, s, h, n, i) {
      var r = { row: h, column: n }, l = o.$findOpeningBracket(s, r);
      if (l)
        return l.column++, r.column--, d.fromPoints(l, r);
    };
  }).call(u.prototype);
});
ace.define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function(t, e, a) {
  e.isDark = !1, e.cssClass = "ace-tm", e.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', e.$id = "ace/theme/textmate";
  var d = t("../lib/dom");
  d.importCssString(e.cssText, e.cssClass);
});
ace.define("ace/line_widgets", ["require", "exports", "module", "ace/lib/dom"], function(t, e, a) {
  var d = t("./lib/dom");
  function u(o) {
    this.session = o, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor);
  }
  (function() {
    this.getRowLength = function(o) {
      var s;
      return this.lineWidgets ? s = this.lineWidgets[o] && this.lineWidgets[o].rowCount || 0 : s = 0, !this.$useWrapMode || !this.$wrapData[o] ? 1 + s : this.$wrapData[o].length + 1 + s;
    }, this.$getWidgetScreenLength = function() {
      var o = 0;
      return this.lineWidgets.forEach(function(s) {
        s && s.rowCount && !s.hidden && (o += s.rowCount);
      }), o;
    }, this.$onChangeEditor = function(o) {
      this.attach(o.editor);
    }, this.attach = function(o) {
      o && o.widgetManager && o.widgetManager != this && o.widgetManager.detach(), this.editor != o && (this.detach(), this.editor = o, o && (o.widgetManager = this, o.renderer.on("beforeRender", this.measureWidgets), o.renderer.on("afterRender", this.renderWidgets)));
    }, this.detach = function(o) {
      var s = this.editor;
      if (s) {
        this.editor = null, s.widgetManager = null, s.renderer.off("beforeRender", this.measureWidgets), s.renderer.off("afterRender", this.renderWidgets);
        var h = this.session.lineWidgets;
        h && h.forEach(function(n) {
          n && n.el && n.el.parentNode && (n._inDocument = !1, n.el.parentNode.removeChild(n.el));
        });
      }
    }, this.updateOnFold = function(o, s) {
      var h = s.lineWidgets;
      if (!(!h || !o.action)) {
        for (var n = o.data, i = n.start.row, r = n.end.row, l = o.action == "add", c = i + 1; c < r; c++)
          h[c] && (h[c].hidden = l);
        h[r] && (l ? h[i] ? h[r].hidden = l : h[i] = h[r] : (h[i] == h[r] && (h[i] = void 0), h[r].hidden = l));
      }
    }, this.updateOnChange = function(o) {
      var s = this.session.lineWidgets;
      if (s) {
        var h = o.start.row, n = o.end.row - h;
        if (n !== 0) if (o.action == "remove") {
          var i = s.splice(h + 1, n);
          !s[h] && i[i.length - 1] && (s[h] = i.pop()), i.forEach(function(l) {
            l && this.removeLineWidget(l);
          }, this), this.$updateRows();
        } else {
          var r = new Array(n);
          s[h] && s[h].column != null && o.start.column > s[h].column && h++, r.unshift(h, 0), s.splice.apply(s, r), this.$updateRows();
        }
      }
    }, this.$updateRows = function() {
      var o = this.session.lineWidgets;
      if (o) {
        var s = !0;
        o.forEach(function(h, n) {
          if (h)
            for (s = !1, h.row = n; h.$oldWidget; )
              h.$oldWidget.row = n, h = h.$oldWidget;
        }), s && (this.session.lineWidgets = null);
      }
    }, this.$registerLineWidget = function(o) {
      this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
      var s = this.session.lineWidgets[o.row];
      return s && (o.$oldWidget = s, s.el && s.el.parentNode && (s.el.parentNode.removeChild(s.el), s._inDocument = !1)), this.session.lineWidgets[o.row] = o, o;
    }, this.addLineWidget = function(o) {
      if (this.$registerLineWidget(o), o.session = this.session, !this.editor) return o;
      var s = this.editor.renderer;
      o.html && !o.el && (o.el = d.createElement("div"), o.el.innerHTML = o.html), o.el && (d.addCssClass(o.el, "ace_lineWidgetContainer"), o.el.style.position = "absolute", o.el.style.zIndex = 5, s.container.appendChild(o.el), o._inDocument = !0, o.coverGutter || (o.el.style.zIndex = 3), o.pixelHeight == null && (o.pixelHeight = o.el.offsetHeight)), o.rowCount == null && (o.rowCount = o.pixelHeight / s.layerConfig.lineHeight);
      var h = this.session.getFoldAt(o.row, 0);
      if (o.$fold = h, h) {
        var n = this.session.lineWidgets;
        o.row == h.end.row && !n[h.start.row] ? n[h.start.row] = o : o.hidden = !0;
      }
      return this.session._emit("changeFold", { data: { start: { row: o.row } } }), this.$updateRows(), this.renderWidgets(null, s), this.onWidgetChanged(o), o;
    }, this.removeLineWidget = function(o) {
      if (o._inDocument = !1, o.session = null, o.el && o.el.parentNode && o.el.parentNode.removeChild(o.el), o.editor && o.editor.destroy) try {
        o.editor.destroy();
      } catch {
      }
      if (this.session.lineWidgets) {
        var s = this.session.lineWidgets[o.row];
        if (s == o)
          this.session.lineWidgets[o.row] = o.$oldWidget, o.$oldWidget && this.onWidgetChanged(o.$oldWidget);
        else
          for (; s; ) {
            if (s.$oldWidget == o) {
              s.$oldWidget = o.$oldWidget;
              break;
            }
            s = s.$oldWidget;
          }
      }
      this.session._emit("changeFold", { data: { start: { row: o.row } } }), this.$updateRows();
    }, this.getWidgetsAtRow = function(o) {
      for (var s = this.session.lineWidgets, h = s && s[o], n = []; h; )
        n.push(h), h = h.$oldWidget;
      return n;
    }, this.onWidgetChanged = function(o) {
      this.session._changedWidgets.push(o), this.editor && this.editor.renderer.updateFull();
    }, this.measureWidgets = function(o, s) {
      var h = this.session._changedWidgets, n = s.layerConfig;
      if (!(!h || !h.length)) {
        for (var i = 1 / 0, r = 0; r < h.length; r++) {
          var l = h[r];
          if (!(!l || !l.el) && l.session == this.session) {
            if (!l._inDocument) {
              if (this.session.lineWidgets[l.row] != l)
                continue;
              l._inDocument = !0, s.container.appendChild(l.el);
            }
            l.h = l.el.offsetHeight, l.fixedWidth || (l.w = l.el.offsetWidth, l.screenWidth = Math.ceil(l.w / n.characterWidth));
            var c = l.h / n.lineHeight;
            l.coverLine && (c -= this.session.getRowLineCount(l.row), c < 0 && (c = 0)), l.rowCount != c && (l.rowCount = c, l.row < i && (i = l.row));
          }
        }
        i != 1 / 0 && (this.session._emit("changeFold", { data: { start: { row: i } } }), this.session.lineWidgetWidth = null), this.session._changedWidgets = [];
      }
    }, this.renderWidgets = function(o, s) {
      var h = s.layerConfig, n = this.session.lineWidgets;
      if (n) {
        for (var i = Math.min(this.firstRow, h.firstRow), r = Math.max(this.lastRow, h.lastRow, n.length); i > 0 && !n[i]; )
          i--;
        this.firstRow = h.firstRow, this.lastRow = h.lastRow, s.$cursorLayer.config = h;
        for (var l = i; l <= r; l++) {
          var c = n[l];
          if (!(!c || !c.el)) {
            if (c.hidden) {
              c.el.style.top = -100 - (c.pixelHeight || 0) + "px";
              continue;
            }
            c._inDocument || (c._inDocument = !0, s.container.appendChild(c.el));
            var f = s.$cursorLayer.getPixelPosition({ row: l, column: 0 }, !0).top;
            c.coverLine || (f += h.lineHeight * this.session.getRowLineCount(c.row)), c.el.style.top = f - h.offset + "px";
            var b = c.coverGutter ? 0 : s.gutterWidth;
            c.fixedWidth || (b -= s.scrollLeft), c.el.style.left = b + "px", c.fullWidth && c.screenWidth && (c.el.style.minWidth = h.width + 2 * h.padding + "px"), c.fixedWidth ? c.el.style.right = s.scrollBar.getWidth() + "px" : c.el.style.right = "";
          }
        }
      }
    };
  }).call(u.prototype), e.LineWidgets = u;
});
ace.define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function(t, e, a) {
  var d = t("../line_widgets").LineWidgets, u = t("../lib/dom"), o = t("../range").Range;
  function s(n, i, r) {
    for (var l = 0, c = n.length - 1; l <= c; ) {
      var f = l + c >> 1, b = r(i, n[f]);
      if (b > 0)
        l = f + 1;
      else if (b < 0)
        c = f - 1;
      else
        return f;
    }
    return -(l + 1);
  }
  function h(n, i, r) {
    var l = n.getAnnotations().sort(o.comparePoints);
    if (l.length) {
      var c = s(l, { row: i, column: -1 }, o.comparePoints);
      c < 0 && (c = -c - 1), c >= l.length ? c = r > 0 ? 0 : l.length - 1 : c === 0 && r < 0 && (c = l.length - 1);
      var f = l[c];
      if (!(!f || !r)) {
        if (f.row === i) {
          do
            f = l[c += r];
          while (f && f.row === i);
          if (!f)
            return l.slice();
        }
        var b = [];
        i = f.row;
        do
          b[r < 0 ? "unshift" : "push"](f), f = l[c += r];
        while (f && f.row == i);
        return b.length && b;
      }
    }
  }
  e.showErrorMarker = function(n, i) {
    var r = n.session;
    r.widgetManager || (r.widgetManager = new d(r), r.widgetManager.attach(n));
    var l = n.getCursorPosition(), c = l.row, f = r.widgetManager.getWidgetsAtRow(c).filter(function(g) {
      return g.type == "errorMarker";
    })[0];
    f ? f.destroy() : c -= i;
    var b = h(r, c, i), y;
    if (b) {
      var x = b[0];
      l.column = (x.pos && typeof x.column != "number" ? x.pos.sc : x.column) || 0, l.row = x.row, y = n.renderer.$gutterLayer.$annotations[l.row];
    } else {
      if (f)
        return;
      y = {
        text: ["Looks good!"],
        className: "ace_ok"
      };
    }
    n.session.unfold(l.row), n.selection.moveToPosition(l);
    var k = {
      row: l.row,
      fixedWidth: !0,
      coverGutter: !0,
      el: u.createElement("div"),
      type: "errorMarker"
    }, S = k.el.appendChild(u.createElement("div")), m = k.el.appendChild(u.createElement("div"));
    m.className = "error_widget_arrow " + y.className;
    var v = n.renderer.$cursorLayer.getPixelPosition(l).left;
    m.style.left = v + n.renderer.gutterWidth - 5 + "px", k.el.className = "error_widget_wrapper", S.className = "error_widget " + y.className, S.innerHTML = y.text.join("<br>"), S.appendChild(u.createElement("div"));
    var $ = function(g, w, p) {
      if (w === 0 && (p === "esc" || p === "return"))
        return k.destroy(), { command: "null" };
    };
    k.destroy = function() {
      n.$mouseHandler.isMousePressed || (n.keyBinding.removeKeyboardHandler($), r.widgetManager.removeLineWidget(k), n.off("changeSelection", k.destroy), n.off("changeSession", k.destroy), n.off("mouseup", k.destroy), n.off("change", k.destroy));
    }, n.keyBinding.addKeyboardHandler($), n.on("changeSelection", k.destroy), n.on("changeSession", k.destroy), n.on("mouseup", k.destroy), n.on("change", k.destroy), n.session.widgetManager.addLineWidget(k), k.el.onmousedown = n.focus.bind(n), n.renderer.scrollCursorIntoView(null, 0.5, { bottom: k.el.offsetHeight });
  }, u.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "");
});
ace.define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function(t, e, a) {
  t("./lib/fixoldbrowsers");
  var d = t("./lib/dom"), u = t("./lib/event"), o = t("./range").Range, s = t("./editor").Editor, h = t("./edit_session").EditSession, n = t("./undomanager").UndoManager, i = t("./virtual_renderer").VirtualRenderer;
  t("./worker/worker_client"), t("./keyboard/hash_handler"), t("./placeholder"), t("./multi_select"), t("./mode/folding/fold_mode"), t("./theme/textmate"), t("./ext/error_marker"), e.config = t("./config"), e.require = t, typeof define == "function" && (e.define = define), e.edit = function(r, l) {
    if (typeof r == "string") {
      var c = r;
      if (r = document.getElementById(c), !r)
        throw new Error("ace.edit can't find div #" + c);
    }
    if (r && r.env && r.env.editor instanceof s)
      return r.env.editor;
    var f = "";
    if (r && /input|textarea/i.test(r.tagName)) {
      var b = r;
      f = b.value, r = d.createElement("pre"), b.parentNode.replaceChild(r, b);
    } else r && (f = r.textContent, r.innerHTML = "");
    var y = e.createEditSession(f), x = new s(new i(r), y, l), k = {
      document: y,
      editor: x,
      onResize: x.resize.bind(x, null)
    };
    return b && (k.textarea = b), u.addListener(window, "resize", k.onResize), x.on("destroy", function() {
      u.removeListener(window, "resize", k.onResize), k.editor.container.env = null;
    }), x.container.env = x.env = k, x;
  }, e.createEditSession = function(r, l) {
    var c = new h(r, l);
    return c.setUndoManager(new n()), c;
  }, e.Range = o, e.Editor = s, e.EditSession = h, e.UndoManager = n, e.VirtualRenderer = i, e.version = e.config.version;
});
(function() {
  ace.require(["ace/ace"], function(t) {
    t && (t.config.init(!0), t.define = ace.define), window.ace || (window.ace = t);
    for (var e in t) t.hasOwnProperty(e) && (window.ace[e] = t[e]);
    window.ace.default = window.ace, typeof module == "object" && typeof exports == "object" && module && (module.exports = window.ace);
  });
})();
function Hn(t) {
  return t.replace(/[A-Z]+/g, (e) => `-${e}`).replace(/^-/, "").toLowerCase();
}
function vi(t) {
  return function(e, a) {
    const d = Hn(a);
    e.addObservedAttribute && e.addObservedAttribute(d), Object.defineProperty(e, a, {
      get() {
        return this.getAttribute(d);
      },
      set(u) {
        u == null ? this.removeAttribute(d) : this.setAttribute(d, u), this.notifyPropertyChanged(a);
      },
      enumerable: !0,
      configurable: !0
    });
  };
}
function zt(t) {
  return function(e, a) {
    const d = Hn(a);
    e.addObservedAttribute && e.addObservedAttribute(d), Object.defineProperty(e, a, {
      get() {
        return this.hasAttribute(d);
      },
      set(u) {
        u ? this.setAttribute(d, "") : this.removeAttribute(d), this.notifyPropertyChanged(a);
      },
      enumerable: !0,
      configurable: !0
    });
  };
}
function _l(t) {
  return function(e, a) {
    const d = Hn(a);
    e.addObservedAttribute && e.addObservedAttribute(d), Object.defineProperty(e, a, {
      get() {
        const u = Number(this.getAttribute(d));
        if (!isNaN(u))
          return u;
      },
      set(u) {
        u == null ? this.removeAttribute(d) : this.setAttribute(d, u), this.notifyPropertyChanged(a);
      },
      enumerable: !0,
      configurable: !0
    });
  };
}
var El = "ace-builds", Ll = "1.4.12", Il = "ace-custom-element", Tl = "1.6.5";
function Sr(t, e = 0) {
  let a;
  return function(...d) {
    window.clearTimeout(a);
    const u = function() {
      return a = void 0, t(...d);
    };
    return new Promise((o) => {
      a = window.setTimeout(() => {
        const s = u();
        o(s);
      }, e);
    });
  };
}
var Fi;
(function(t) {
  t.start = "start", t.end = "end", t.select = "select";
})(Fi || (Fi = {}));
function Rl(t) {
  return t === Fi.start ? -1 : t === Fi.end ? 1 : 0;
}
class Le extends HTMLElement {
  constructor() {
    super(...arguments), this.initializeEditor = Sr(() => {
      const e = this.basePath || import.meta.url.replace(/[^\/]+$/, "ace/");
      ace.config.set("basePath", e);
      const a = this._editor || ace.edit(this);
      this.appendStyles(), a.session.setMode(this.mode || "ace/mode/javascript"), a.setTheme(this.theme || "ace/theme/eclipse"), (a.getValue() || "") !== this.value && a.setValue(this.value || "", Rl(this.valueUpdateMode)), a.getSession().setTabSize(this.tabSize || 2), a.getSession().setUseSoftTabs(!!this.softTabs), a.renderer.setShowGutter(!this.hideGutter), a.renderer.setShowPrintMargin(!this.hidePrintMargin), a.setHighlightActiveLine(!this.hideActiveLineHighlight), a.setHighlightGutterLine(!this.hideGutterLineHighlight), a.setReadOnly(!!this.readonly), this.readonly && (a.setHighlightActiveLine(!this.readonly), a.setHighlightGutterLine(!this.readonly)), a.getSession().setUseWrapMode(!!this.wrap), a.off("change", this.handleChange), a.on("change", this.handleChange), a.off("blur", this.handleBlur), a.on("blur", this.handleBlur), this.resize(), this._editor = a;
    }), this.handleChange = Sr(() => {
      var e;
      const a = ((e = this._editor) === null || e === void 0 ? void 0 : e.getValue()) || "";
      a !== this.value && (a ? this.setAttribute("value", a) : this.removeAttribute("value"), this.dispatch("change", a));
    }), this.handleBlur = () => {
      this.dispatchEvent(new FocusEvent("blur"));
    };
  }
  get editor() {
    return this._editor;
  }
  get version() {
    return {
      [Il]: Tl,
      [El]: Ll
    };
  }
  static get observedAttributes() {
    return Le._observedAttributes;
  }
  /**
   * Registers an attribute to be observed.
   *
   * @param name Attribute name to observe.
   * @internal
   */
  addObservedAttribute(e) {
    Le._observedAttributes.push(e);
  }
  dispatch(e, a) {
    this.dispatchEvent(new CustomEvent(e, {
      bubbles: !0,
      cancelable: !1,
      detail: a
    }));
  }
  appendStyles() {
    var e, a;
    const d = this.getRootNode(), u = "ace_editor.css", o = "ace-custom-element-style";
    if (d) {
      if (!(!((e = d.getElementById) === null || e === void 0) && e.call(d, o))) {
        const s = document.createElement("style");
        s.id = o, s.type = "text/css", s.innerHTML = `
        ace-editor {
          display: block;
          width: 100%;
          height: 250px;
        }
        `, d instanceof Document && d.head ? d.head.appendChild(s) : d.appendChild(s);
      }
      if (!(!((a = d.getElementById) === null || a === void 0) && a.call(d, u))) {
        const s = document.getElementById(u);
        s && (d instanceof Document && d.head ? d.head.appendChild(s.cloneNode(!0)) : d.appendChild(s.cloneNode(!0)));
      }
    }
  }
  connectedCallback() {
    this.initializeEditor().then(() => {
      this.dispatch("ready", {
        editor: this.editor
      });
    });
  }
  disconnectedCallback() {
    this._editor && (this._editor.off("change", this.handleChange), this._editor.off("blur", this.handleBlur));
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attributeChangedCallback(e) {
    this.initializeEditor();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  notifyPropertyChanged(e) {
    this.initializeEditor();
  }
  resize() {
    var e;
    (e = this._editor) === null || e === void 0 || e.resize();
  }
}
Le._observedAttributes = [];
it([
  vi()
], Le.prototype, "value", void 0);
it([
  vi()
], Le.prototype, "mode", void 0);
it([
  vi()
], Le.prototype, "theme", void 0);
it([
  _l()
], Le.prototype, "tabSize", void 0);
it([
  zt()
], Le.prototype, "readonly", void 0);
it([
  zt()
], Le.prototype, "softTabs", void 0);
it([
  zt()
], Le.prototype, "wrap", void 0);
it([
  vi()
], Le.prototype, "valueUpdateMode", void 0);
it([
  zt()
], Le.prototype, "hideActiveLineHighlight", void 0);
it([
  zt()
], Le.prototype, "hideGutter", void 0);
it([
  zt()
], Le.prototype, "hideGutterLineHighlight", void 0);
it([
  zt()
], Le.prototype, "hidePrintMargin", void 0);
it([
  vi()
], Le.prototype, "basePath", void 0);
customElements.define("ace-editor", Le);
function Ml(t) {
  return t.old === void 0 && t.new?.parent !== void 0 && t.new?.element !== void 0;
}
function Dl(t) {
  return t.old?.parent !== void 0 && t.old?.element !== void 0 && t.new === void 0;
}
function Nl(t) {
  return t.old?.parent !== void 0 && t.old?.element !== void 0 && t.new?.parent !== void 0 && t.new?.element == null;
}
function Ol(t) {
  return t.old?.parent === void 0 && t.old?.element !== void 0 && t.new?.parent === void 0 && t.new?.element !== void 0;
}
function Pl(t) {
  return t.old === void 0 && t.new === void 0 && t.element !== void 0 && t.newAttributes !== void 0 && t.oldAttributes !== void 0;
}
function Fl(t) {
  return !(t.actions instanceof Array);
}
function Bl(t, e = "user", a) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...a,
    detail: { action: t, initiator: e, ...a?.detail }
  });
}
var Hl = Object.defineProperty, zl = Object.getOwnPropertyDescriptor, Vt = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? zl(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Hl(e, a, u), u;
};
function Vl(t) {
  return t instanceof Os ? t : t.kind === "Checkbox" ? T`<wizard-checkbox
      ?nullable=${t.nullable}
      ?defaultChecked=${t.default}
      ?dialogInitialFocus=${t.dialogInitialFocus}
      label="${t.label}"
      helper="${ue(t.helper)}"
      .maybeValue=${t.maybeValue}
    ></wizard-checkbox>` : t.kind === "Select" ? T`<wizard-select
      ?nullable=${t.nullable}
      ?dialogInitialFocus=${t.dialogInitialFocus}
      label="${t.label}"
      helper="${ue(t.helper)}"
      defaultValue="${ue(t.default)}"
      validationMessage="${ue(t.valadationMessage)}"
      .maybeValue=${t.maybeValue}
      >${t.values.map(
    (e) => T`<mwc-list-item value="${e}">${e}</mwc-list-item>`
  )}</wizard-select
    >` : T`<wizard-textfield
    ?nullable=${t.nullable}
    ?required=${t.required}
    ?disabled=${t.disabled}
    ?dialogInitialFocus=${t.dialogInitialFocus}
    label="${t.label}"
    defaultValue="${ue(t.default)}"
    helper="${ue(t.helper)}"
    validationMessage="${ue(t.helper)}"
    unit="${ue(t.unit)}"
    .multipliers=${t.multipliers ?? []}
    .multiplier=${t.multiplier ?? null}
    suffix="${ue(t.suffix)}"
    .maybeValue=${t.maybeValue}
    pattern="${ue(t.pattern)}"
    minLength="${ue(t.minLength)}"
    maxLength="${ue(t.maxLength)}"
    type="${ue(t.type)}"
    min="${ue(t.min)}"
    max="${ue(t.max)}"
  ></wizard-textfield>`;
}
function ws(t) {
  return Array.from(t?.querySelectorAll(jr) ?? []);
}
function en(t) {
  return ws(t).every(Xr);
}
function Wl(t) {
  return (e) => {
    const a = e[0].value;
    if (!a || !t.parentElement) return [];
    const d = {
      parent: t.parentElement,
      reference: t.nextSibling,
      element: t
    }, u = {
      old: d,
      checkValidity: () => !0
    }, o = {
      new: {
        ...d,
        element: new DOMParser().parseFromString(a, "application/xml").documentElement
      },
      checkValidity: () => !0
    };
    return [
      {
        actions: [u, o],
        title: G("code.log", {
          id: xe(t)
        })
      }
    ];
  };
}
let xt = class extends $e {
  constructor() {
    super(), this.wizard = [], this.pageIndex = 0, this.act = this.act.bind(this), this.renderPage = this.renderPage.bind(this);
  }
  /** The `Dialog` showing the active [[`WizardPage`]]. */
  get dialog() {
    return this.dialogs[this.pageIndex];
  }
  get code() {
    return (this.dialog?.querySelector("mwc-icon-button-toggle")?.on ?? !1) && localStorage.getItem("mode") === "pro";
  }
  /** Checks the inputs of all [[`WizardPage`]]s for validity. */
  checkValidity() {
    return Array.from(this.inputs).every(Xr);
  }
  get firstInvalidPage() {
    return Array.from(this.dialogs).findIndex((t) => !en(t));
  }
  prev() {
    this.pageIndex <= 0 || (this.pageIndex--, this.dialog?.show());
  }
  async next() {
    en(this.dialog) ? (this.wizard.length > this.pageIndex + 1 && this.pageIndex++, this.dialog?.show()) : (this.dialog?.show(), await this.dialog?.updateComplete, ws(this.dialog).map(er));
  }
  /** Commits `action` if all inputs are valid, reports validity otherwise. */
  async act(t, e = !0) {
    if (t === void 0) return !1;
    const a = Array.from(this.inputs), d = this.dialog?.querySelector("filtered-list,mwc-list");
    if (!this.checkValidity())
      return this.pageIndex = this.firstInvalidPage, a.map(er), !1;
    const u = t(a, this, d);
    return u.length > 0 && (e ? this.wizard[this.pageIndex].primary = void 0 : this.wizard[this.pageIndex].secondary = void 0, this.dispatchEvent(Di())), u.forEach(
      (o) => qr(o) ? this.dispatchEvent(Di(o)) : this.dispatchEvent(Bl(o))
    ), !0;
  }
  /** Triggers menu action callback */
  async menuAct(t) {
    t && t(this);
  }
  onClosed(t) {
    t.target instanceof Hs && t.detail?.action && (t.detail.action === "close" ? this.dispatchEvent(Di()) : t.detail.action === "prev" ? this.prev() : t.detail.action === "next" && this.next());
  }
  updated(t) {
    if (t.has("wizard")) {
      for (this.pageIndex = 0; this.wizard.findIndex((e) => e.initial) > this.pageIndex && en(this.dialog); )
        this.dialog?.close(), this.next();
      this.dialog?.show();
    }
    this.wizard[this.pageIndex]?.primary?.auto && this.updateComplete.then(
      () => this.act(this.wizard[this.pageIndex].primary.action)
    ), this.actionsMenu && (this.actionsMenu.anchor = this.menuButton);
  }
  renderMenu(t) {
    const e = t.menuActions?.some(
      (a) => a.icon
    );
    return T` <mwc-icon-button
        icon="more_vert"
        @click=${() => {
      this.actionsMenu.open ? this.actionsMenu.close() : this.actionsMenu.show();
    }}
      ></mwc-icon-button>
      <mwc-menu class="actions-menu" corner="BOTTOM_RIGHT" menuCorner="END">
        ${t.menuActions.map(
      (a) => T`<mwc-list-item
              .graphic=${e ? "icon" : null}
              @click=${() => this.menuAct(a.action)}
            >
              <span>${a.label}</span>
              ${a.icon ? T`<mwc-icon slot="graphic">${a.icon}</mwc-icon>` : T``}
            </mwc-list-item>`
    )}
      </mwc-menu>`;
  }
  renderPage(t, e) {
    const a = localStorage.getItem("mode") === "pro", u = !!t.element && a;
    let o = 0;
    return u && t.menuActions ? o = 96 : u || t.menuActions ? o = 48 : o = 0, T`<mwc-dialog
      defaultAction="next"
      heading=${t.title}
      @closed=${this.onClosed}
      style="--mdc-dialog-min-width:calc(100% + ${o}px)"
    >
      ${u || t.menuActions ? T`<nav>
            ${u ? T`<mwc-icon-button-toggle
                  onicon="code"
                  officon="code_off"
                  @click=${() => this.requestUpdate()}
                ></mwc-icon-button-toggle>` : ""}
            ${t.menuActions ? this.renderMenu(t) : ""}
          </nav>` : ""}
      <div id="wizard-content">
        ${this.code && t.element ? T`<ace-editor
              base-path="/public/ace"
              wrap
              soft-tabs
              style="width: 80vw; height: calc(100vh - 240px);"
              theme="ace/theme/solarized_${localStorage.getItem("theme")}"
              mode="ace/mode/xml"
              value="${po(
      new XMLSerializer().serializeToString(t.element)
    )}"
            ></ace-editor>` : t.content?.map(Vl)}
      </div>
      ${e > 0 ? T`<mwc-button
            slot="secondaryAction"
            dialogAction="prev"
            icon="navigate_before"
            label=${this.wizard?.[e - 1].title}
          ></mwc-button>` : T``}
      ${t.secondary ? T`<mwc-button
            slot="secondaryAction"
            @click=${() => this.act(t.secondary?.action, !1)}
            icon="${t.secondary.icon}"
            label="${t.secondary.label}"
          ></mwc-button>` : T`<mwc-button
            slot="secondaryAction"
            dialogAction="close"
            label="${G("close")}"
            style="--mdc-theme-primary: var(--mdc-theme-error)"
          ></mwc-button>`}
      ${this.code && t.element ? T`<mwc-button
            slot="primaryAction"
            @click=${() => this.act(Wl(t.element))}
            icon="code"
            label="${G("save")}"
            trailingIcon
          ></mwc-button>` : t.primary ? T`<mwc-button
            slot="primaryAction"
            @click=${() => this.act(t.primary?.action)}
            icon="${t.primary.icon}"
            label="${t.primary.label}"
            trailingIcon
          ></mwc-button>` : e + 1 < (this.wizard?.length ?? 0) ? T`<mwc-button
            slot="primaryAction"
            dialogAction="next"
            icon="navigate_next"
            label=${this.wizard?.[e + 1].title}
            trailingicon
          ></mwc-button>` : T``}
    </mwc-dialog>`;
  }
  render() {
    return T`${this.wizard.map(this.renderPage)}`;
  }
};
xt.styles = _e`
    mwc-dialog {
      --mdc-dialog-max-width: 92vw;
    }

    mwc-dialog > nav {
      position: absolute;
      top: 8px;
      right: 14px;
      color: var(--base00);
    }

    mwc-dialog > nav > mwc-icon-button-toggle[on] {
      color: var(--mdc-theme-primary);
    }

    #wizard-content {
      display: flex;
      flex-direction: column;
    }

    #wizard-content > * {
      display: block;
      margin-top: 16px;
    }

    *[iconTrailing='search'] {
      --mdc-shape-small: 28px;
    }
  `;
Vt([
  F({ type: Array })
], xt.prototype, "wizard", 2);
Vt([
  ee()
], xt.prototype, "pageIndex", 2);
Vt([
  Mr("mwc-dialog")
], xt.prototype, "dialogs", 2);
Vt([
  Mr(jr)
], xt.prototype, "inputs", 2);
Vt([
  X(".actions-menu")
], xt.prototype, "actionsMenu", 2);
Vt([
  X('mwc-icon-button[icon="more_vert"]')
], xt.prototype, "menuButton", 2);
xt = Vt([
  le("wizard-dialog")
], xt);
var Ul = Object.defineProperty, Gl = Object.getOwnPropertyDescriptor, Gi = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Gl(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Ul(e, a, u), u;
};
let li = class extends $e {
  constructor() {
    super(...arguments), this.workflow = [];
  }
  onWizard(t) {
    const e = t.detail.wizard;
    e === null ? this.workflow.shift() : t.detail.subwizard ? this.workflow.unshift(e) : this.workflow.push(e), this.requestUpdate("workflow"), this.updateComplete.then(
      () => this.wizardUI.updateComplete.then(
        () => this.wizardUI.dialog?.updateComplete.then(
          () => this.wizardUI.dialog?.focus()
        )
      )
    );
  }
  connectedCallback() {
    super.connectedCallback(), this.host.addEventListener("wizard", this.onWizard.bind(this)), this.host.addEventListener(
      "editor-action",
      () => this.wizardUI.requestUpdate()
    );
  }
  render() {
    return T`<slot></slot>
      <wizard-dialog .wizard=${this.workflow[0]?.() ?? []}></wizard-dialog>`;
  }
};
Gi([
  F({
    type: Object
  })
], li.prototype, "host", 2);
Gi([
  ee()
], li.prototype, "workflow", 2);
Gi([
  X("wizard-dialog")
], li.prototype, "wizardUI", 2);
li = Gi([
  le("oscd-wizards")
], li);
function ys(t) {
  return t instanceof Array;
}
function Ss(t) {
  return t.parent !== void 0;
}
function Kl(t) {
  return t !== null && typeof t != "string";
}
function Cs(t) {
  return t.element !== void 0;
}
function xs(t) {
  return t.parent === void 0 && t.node !== void 0;
}
function jl(t, e = "user") {
  return new CustomEvent("oscd-edit", {
    composed: !0,
    bubbles: !0,
    detail: {
      edit: t,
      initiator: e
    }
  });
}
function Gt(t) {
  return t instanceof Array;
}
function $s(t) {
  return t.element !== void 0 && t.textContent !== void 0;
}
function ks(t) {
  return t.parent === void 0 && t.node !== void 0;
}
function As(t) {
  return t.element !== void 0 && t.attributes !== void 0 && t.attributesNS !== void 0;
}
function _s(t) {
  return t.parent !== void 0 && t.node !== void 0 && t.reference !== void 0;
}
function Bi(t, e) {
  return new CustomEvent("oscd-edit-v2", {
    composed: !0,
    bubbles: !0,
    detail: { ...e, edit: t }
  });
}
function ql({
  element: t,
  textContent: e
}) {
  const { childNodes: a } = t, d = Array.from(a).map((o) => ({
    parent: t,
    node: o,
    reference: null
  }));
  return t.textContent = e, [{ element: t, textContent: "" }, ...d];
}
function Xl(t, e) {
  let a = 1;
  const d = Array.from(t.attributes), u = (h) => h.prefix === `ens${a}` && h.namespaceURI !== e, o = /* @__PURE__ */ new Set([null, e]), s = (h) => !o.has(t.lookupNamespaceURI(h));
  for (; s(`ens${a}`) || d.find(u); )
    a += 1;
  return `ens${a}`;
}
const Zl = /^(?!xml|Xml|xMl|xmL|XMl|xML|XmL|XML)[A-Za-z_][A-Za-z0-9-_.]*(:[A-Za-z_][A-Za-z0-9-_.]*)?$/;
function tn(t) {
  return Zl.test(t);
}
function Yl({
  element: t,
  attributes: e,
  attributesNS: a
}) {
  const d = { ...e }, u = { ...a };
  Object.keys(e).reverse().forEach((o) => {
    d[o] = t.getAttribute(o);
  });
  for (const o of Object.entries(e))
    try {
      const [s, h] = o;
      h === null ? t.removeAttribute(s) : t.setAttribute(s, h);
    } catch {
      delete d[o[0]];
    }
  Object.entries(a).forEach(([o, s]) => {
    Object.keys(s).filter(tn).reverse().forEach((h) => {
      u[o] = {
        ...u[o],
        [h]: t.getAttributeNS(o, h.split(":").pop())
      };
    }), Object.keys(s).filter((h) => !tn(h)).forEach((h) => {
      delete u[o][h];
    });
  });
  for (const o of Object.entries(a)) {
    const [s, h] = o;
    for (const n of Object.entries(h).filter(
      ([i]) => tn(i)
    ))
      try {
        const [i, r] = n;
        if (r === null)
          t.removeAttributeNS(s, i.split(":").pop());
        else {
          let l = i;
          if (!l.includes(":")) {
            let c = t.lookupPrefix(s);
            c || (c = Xl(t, s)), l = `${c}:${i}`;
          }
          t.setAttributeNS(s, l, r);
        }
      } catch {
        delete u[s][n[0]];
      }
  }
  return {
    element: t,
    attributes: d,
    attributesNS: u
  };
}
function Ql({ node: t }) {
  const { parentNode: e, nextSibling: a } = t;
  return t.parentNode?.removeChild(t), e ? {
    node: t,
    parent: e,
    reference: a
  } : [];
}
function Jl({
  parent: t,
  node: e,
  reference: a
}) {
  try {
    const { parentNode: d, nextSibling: u } = e;
    return t.contains(a) || (a = null), t.insertBefore(e, a), d ? {
      node: e,
      parent: d,
      reference: u
    } : { node: e };
  } catch {
    return [];
  }
}
function Es(t) {
  return _s(t) ? Jl(t) : ks(t) ? Ql(t) : As(t) ? Yl(t) : $s(t) ? ql(t) : Gt(t) ? t.map((e) => Es(e)).reverse() : [];
}
function Cr(t) {
  return new CustomEvent("validate", {
    bubbles: !0,
    composed: !0,
    ...t
  });
}
function ec(t) {
  return Fl(t) ? xr(t) : t.actions.map(xr);
}
function xr(t) {
  if (Ml(t))
    return tc(t);
  if (Dl(t))
    return ic(t);
  if (Pl(t))
    return nc(t);
  if (Nl(t))
    return rc(t);
  if (Ol(t))
    return sc(t);
  throw new Error("Unknown action type");
}
function tc(t) {
  let e = null;
  return t.new.reference === void 0 && t.new.element instanceof Element && t.new.parent instanceof Element ? e = rs(
    t.new.parent,
    t.new.element.tagName
  ) : e = t.new.reference ?? null, {
    parent: t.new.parent,
    node: t.new.element,
    reference: e
  };
}
function ic(t) {
  return {
    node: t.old.element
  };
}
function nc(t) {
  const e = {};
  Array.from(t.element.attributes).forEach((d) => {
    e[d.name] = null;
  });
  const a = {
    ...e,
    ...t.newAttributes
  };
  return {
    element: t.element,
    attributes: a
  };
}
function rc(t) {
  return t.new.reference === void 0 && (t.new.reference = rs(
    t.new.parent,
    t.old.element.tagName
  )), {
    parent: t.new.parent,
    node: t.old.element,
    reference: t.new.reference ?? null
  };
}
function sc(t) {
  const e = t.old.element.children, a = Array.from(e).map((n) => n.cloneNode(!0)), d = t.new.element.cloneNode(!0);
  d.append(...Array.from(a));
  const u = t.old.element.parentElement;
  if (!u)
    throw new Error("Replace action called without parent in old element");
  const o = t.old.element.nextSibling;
  return [
    { node: t.old.element },
    {
      parent: u,
      node: d,
      reference: o
    }
  ];
}
function xn(t) {
  if (ys(t))
    return t.map(xn);
  if (xs(t))
    return t;
  if (Ss(t))
    return t;
  if (Cs(t))
    return oc(t);
  throw new Error("Unknown edit type");
}
function oc(t) {
  const e = {}, a = {};
  return Object.entries(t.attributes).forEach(([d, u]) => {
    if (Kl(u)) {
      const o = u.namespaceURI;
      if (!o) return;
      a[o] || (a[o] = {}), a[o][d] = u.value;
    } else e[d] = u;
  }), { element: t.element, attributes: e, attributesNS: a };
}
var ac = Object.defineProperty, lc = Object.getOwnPropertyDescriptor, bi = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? lc(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && ac(e, a, u), u;
};
let qt = class extends $e {
  constructor() {
    super(...arguments), this.doc = null, this.docName = "", this.docId = "";
  }
  getLogText(t) {
    if (_s(t)) {
      const e = t.node instanceof Element ? t.node.tagName : G("editing.node");
      return { title: G("editing.created", { name: e }) };
    } else if (As(t) || $s(t)) {
      const e = t.element.tagName;
      return { title: G("editing.updated", { name: e }) };
    } else if (ks(t)) {
      const e = t.node instanceof Element ? t.node.tagName : G("editing.node");
      return { title: G("editing.deleted", { name: e }) };
    } else if (Gt(t)) {
      const e = t.map((a) => this.getLogText(a)).map(({ title: a }) => a).join(", ");
      return { title: G("editing.complex"), message: e };
    }
    return { title: "" };
  }
  onAction(t) {
    const e = ec(t.detail.action), a = xn(e);
    this.host.dispatchEvent(Bi(a));
  }
  handleEditEvent(t) {
    cc(t) && (t = dc(t));
    const e = t.detail.edit, a = xn(e);
    this.host.dispatchEvent(Bi(a));
  }
  /**
   *
   * @deprecated [Move to handleOpenDoc instead]
   */
  async onOpenDoc(t) {
    this.doc = t.detail.doc, this.docName = t.detail.docName, this.docId = t.detail.docId ?? "", await this.updateComplete, this.dispatchEvent(Cr()), this.dispatchEvent(
      Ct({
        kind: "info",
        title: G("openSCD.loaded", { name: this.docName })
      })
    );
  }
  handleOpenDoc({ detail: { docName: t, doc: e } }) {
    this.doc = e, this.docName = t;
  }
  connectedCallback() {
    super.connectedCallback(), this.host.addEventListener("editor-action", this.onAction.bind(this)), this.host.addEventListener("oscd-edit", (t) => this.handleEditEvent(t)), this.host.addEventListener("oscd-edit-v2", (t) => this.handleEditEventV2(t)), this.host.addEventListener("open-doc", this.onOpenDoc), this.host.addEventListener("oscd-open", this.handleOpenDoc);
  }
  render() {
    return T`<slot></slot>`;
  }
  async handleEditEventV2(t) {
    const e = t.detail.edit, a = Es(e);
    if (t.detail.createHistoryEntry !== !1) {
      const { title: u, message: o } = this.getLogText(e);
      this.dispatchEvent(Ct({
        kind: "action",
        title: t.detail.title ?? u,
        message: o,
        redo: e,
        undo: a,
        squash: t.detail.squash
      }));
    }
    await this.updateComplete, this.dispatchEvent(Cr());
  }
};
bi([
  F({ attribute: !1 })
], qt.prototype, "doc", 2);
bi([
  F({ type: String })
], qt.prototype, "docName", 2);
bi([
  F({ type: String })
], qt.prototype, "docId", 2);
bi([
  F({
    type: Object
  })
], qt.prototype, "host", 2);
qt = bi([
  le("oscd-editor")
], qt);
function cc(t) {
  const e = t.detail;
  return ys(e) || Ss(e) || Cs(e) || xs(e);
}
function dc(t) {
  const e = t.detail;
  return jl(e);
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
var St = {
  CLOSING: "mdc-snackbar--closing",
  OPEN: "mdc-snackbar--open",
  OPENING: "mdc-snackbar--opening"
}, zn = {
  ACTION_SELECTOR: ".mdc-snackbar__action",
  ARIA_LIVE_LABEL_TEXT_ATTR: "data-mdc-snackbar-label-text",
  CLOSED_EVENT: "MDCSnackbar:closed",
  CLOSING_EVENT: "MDCSnackbar:closing",
  DISMISS_SELECTOR: ".mdc-snackbar__dismiss",
  LABEL_SELECTOR: ".mdc-snackbar__label",
  OPENED_EVENT: "MDCSnackbar:opened",
  OPENING_EVENT: "MDCSnackbar:opening",
  REASON_ACTION: "action",
  REASON_DISMISS: "dismiss",
  SURFACE_SELECTOR: ".mdc-snackbar__surface"
}, bt = {
  DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5e3,
  INDETERMINATE: -1,
  MAX_AUTO_DISMISS_TIMEOUT_MS: 1e4,
  MIN_AUTO_DISMISS_TIMEOUT_MS: 4e3,
  // These variables need to be kept in sync with the values in _variables.scss.
  SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
  SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
  /**
   * Number of milliseconds to wait between temporarily clearing the label text
   * in the DOM and subsequently restoring it. This is necessary to force IE 11
   * to pick up the `aria-live` content change and announce it to the user.
   */
  ARIA_LIVE_DELAY_MS: 1e3
};
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
var $r = St.OPENING, kr = St.OPEN, Ar = St.CLOSING, hc = zn.REASON_ACTION, nn = zn.REASON_DISMISS, Vn = (
  /** @class */
  function(t) {
    di(e, t);
    function e(a) {
      var d = t.call(this, lt(lt({}, e.defaultAdapter), a)) || this;
      return d.opened = !1, d.animationFrame = 0, d.animationTimer = 0, d.autoDismissTimer = 0, d.autoDismissTimeoutMs = bt.DEFAULT_AUTO_DISMISS_TIMEOUT_MS, d.closeOnEscape = !0, d;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return St;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          announce: function() {
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          removeClass: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.clearAutoDismissTimer(), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = 0, this.adapter.removeClass($r), this.adapter.removeClass(kr), this.adapter.removeClass(Ar);
    }, e.prototype.open = function() {
      var a = this;
      this.clearAutoDismissTimer(), this.opened = !0, this.adapter.notifyOpening(), this.adapter.removeClass(Ar), this.adapter.addClass($r), this.adapter.announce(), this.runNextAnimationFrame(function() {
        a.adapter.addClass(kr), a.animationTimer = setTimeout(function() {
          var d = a.getTimeoutMs();
          a.handleAnimationTimerEnd(), a.adapter.notifyOpened(), d !== bt.INDETERMINATE && (a.autoDismissTimer = setTimeout(function() {
            a.close(nn);
          }, d));
        }, bt.SNACKBAR_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(a) {
      var d = this;
      a === void 0 && (a = ""), this.opened && (cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, this.clearAutoDismissTimer(), this.opened = !1, this.adapter.notifyClosing(a), this.adapter.addClass(St.CLOSING), this.adapter.removeClass(St.OPEN), this.adapter.removeClass(St.OPENING), clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        d.handleAnimationTimerEnd(), d.adapter.notifyClosed(a);
      }, bt.SNACKBAR_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.isOpen = function() {
      return this.opened;
    }, e.prototype.getTimeoutMs = function() {
      return this.autoDismissTimeoutMs;
    }, e.prototype.setTimeoutMs = function(a) {
      var d = bt.MIN_AUTO_DISMISS_TIMEOUT_MS, u = bt.MAX_AUTO_DISMISS_TIMEOUT_MS, o = bt.INDETERMINATE;
      if (a === bt.INDETERMINATE || a <= u && a >= d)
        this.autoDismissTimeoutMs = a;
      else
        throw new Error(`
        timeoutMs must be an integer in the range ` + d + "–" + u + `
        (or ` + o + " to disable), but got '" + a + "'");
    }, e.prototype.getCloseOnEscape = function() {
      return this.closeOnEscape;
    }, e.prototype.setCloseOnEscape = function(a) {
      this.closeOnEscape = a;
    }, e.prototype.handleKeyDown = function(a) {
      var d = a.key === "Escape" || a.keyCode === 27;
      d && this.getCloseOnEscape() && this.close(nn);
    }, e.prototype.handleActionButtonClick = function(a) {
      this.close(hc);
    }, e.prototype.handleActionIconClick = function(a) {
      this.close(nn);
    }, e.prototype.clearAutoDismissTimer = function() {
      clearTimeout(this.autoDismissTimer), this.autoDismissTimer = 0;
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(St.OPENING), this.adapter.removeClass(St.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(a) {
      var d = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        d.animationFrame = 0, clearTimeout(d.animationTimer), d.animationTimer = setTimeout(a, 0);
      });
    }, e;
  }(ui)
);
/**
 * @license
 * Copyright (c) 2021 The Polymer Project Authors. All rights reserved.
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
const Xt = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5
};
class uc {
  constructor(e) {
    this.type = Xt.CHILD, this.options = e.options, this.legacyPart = e;
  }
  get parentNode() {
    return this.legacyPart.startNode.parentNode;
  }
  get startNode() {
    return this.legacyPart.startNode;
  }
  get endNode() {
    return this.legacyPart.endNode;
  }
}
class mc {
  constructor(e) {
    this.legacyPart = e, this.type = e instanceof ci ? Xt.PROPERTY : Xt.ATTRIBUTE;
  }
  get options() {
  }
  get name() {
    return this.legacyPart.committer.name;
  }
  get element() {
    return this.legacyPart.committer.element;
  }
  /**
   * If this attribute part represents an interpolation, this contains the
   * static strings of the interpolation. For single-value, complete bindings,
   * this is undefined.
   */
  get strings() {
    return this.legacyPart.committer.strings;
  }
  get tagName() {
    return this.element.tagName;
  }
}
class fc {
  constructor(e) {
    this.type = Xt.BOOLEAN_ATTRIBUTE, this.legacyPart = e;
  }
  get options() {
  }
  get name() {
    return this.legacyPart.name;
  }
  get element() {
    return this.legacyPart.element;
  }
  /**
   * If this attribute part represents an interpolation, this contains the
   * static strings of the interpolation. For single-value, complete bindings,
   * this is undefined.
   */
  get strings() {
    return this.legacyPart.strings;
  }
  get tagName() {
    return this.element.tagName;
  }
}
class pc {
  constructor(e) {
    this.type = Xt.EVENT, this.legacyPart = e;
  }
  get options() {
  }
  get name() {
    return this.legacyPart.eventName;
  }
  get element() {
    return this.legacyPart.element;
  }
  /**
   * If this attribute part represents an interpolation, this contains the
   * static strings of the interpolation. For single-value, complete bindings,
   * this is undefined.
   */
  get strings() {
  }
  get tagName() {
    return this.element.tagName;
  }
  handleEvent(e) {
    this.legacyPart.handleEvent(e);
  }
}
function gc(t) {
  if (t instanceof Vi)
    return new uc(t);
  if (t instanceof Wr)
    return new pc(t);
  if (t instanceof zr)
    return new fc(t);
  if (t instanceof ci || t instanceof Yt)
    return new mc(t);
  throw new Error("Unknown part type");
}
class vc {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(e) {
  }
  update(e, a) {
    return this.render(...a);
  }
}
function bc(t) {
  const e = /* @__PURE__ */ new WeakMap();
  return zi((...d) => (u) => {
    const o = e.get(u);
    let s, h;
    o === void 0 ? (s = gc(u), h = new t(s), e.set(u, [s, h])) : (s = o[0], h = o[1]), u.setValue(h.update(s, d)), u.commit();
  });
}
/**
 * @license
 * Copyright (c) 2021 The Polymer Project Authors. All rights reserved.
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
class wc extends vc {
  constructor(e) {
    super(e), this._renderedYet = !1, this._legacyPart = e.legacyPart;
  }
  _legacyGetNode() {
    if (this._legacyPart instanceof Vi)
      return this._legacyPart.startNode;
    if (this._legacyPart instanceof Wr)
      return this._legacyPart.element;
    if (this._legacyPart instanceof zr)
      return this._legacyPart.element;
    if (this._legacyPart instanceof ci || this._legacyPart instanceof Yt)
      return this._legacyPart.committer.element;
  }
  _shouldRender() {
    if (!this._renderedYet)
      return this._renderedYet = !0, !0;
    const e = this._legacyGetNode();
    return !!e?.isConnected;
  }
  setValue(e) {
    this._shouldRender() && (this._legacyPart.setValue(e), this._legacyPart.commit());
  }
  /**
   * User callback for implementing logic to release any
   * resources/subscriptions that may have been retained by this directive.
   * Since directives may also be re-connected, `reconnected` should also be
   * implemented to restore the working state of the directive prior to the next
   * render.
   *
   * NOTE: In lit-html 1.x, the `disconnected` and `reconnected` callbacks WILL
   * NOT BE CALLED. The interface is provided here for forward-compatible
   * directive authoring only.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnected() {
  }
  /**
   * User callback to restore the working state of the directive prior to the
   * next render. This should generally re-do the work that was undone in
   * `disconnected`.
   *
   * NOTE: In lit-html 1.x, the `disconnected` and `reconnected` callbacks WILL
   * NOT BE CALLED. The interface is provided here for forward-compatible
   * directive authoring only.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  reconnected() {
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const { ARIA_LIVE_DELAY_MS: yc } = Vn.numbers;
class Sc extends wc {
  constructor(e) {
    if (super(e), this.labelEl = null, this.timerId = null, this.previousPart = null, e.type !== Xt.CHILD)
      throw new Error("AccessibleSnackbarLabel only supports child parts.");
  }
  update(e, [a, d]) {
    var u;
    if (!d)
      return;
    if (this.labelEl === null) {
      const h = document.createElement("div"), n = yi`<div class="mdc-snackbar__label" role="status" aria-live="polite">${a}</div>`;
      Un(n, h);
      const i = h.firstElementChild;
      return (u = e.endNode) === null || u === void 0 || u.parentNode.insertBefore(i, e.endNode), this.labelEl = i, i;
    }
    const o = this.labelEl;
    o.setAttribute("aria-live", "off"), o.textContent = "";
    const s = yi`<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>`;
    return Un(s, o), o.setAttribute("data-mdc-snackbar-label-text", a), this.timerId !== null && clearTimeout(this.timerId), this.timerId = window.setTimeout(() => {
      this.timerId = null, o.setAttribute("aria-live", "polite"), o.removeAttribute("data-mdc-snackbar-label-text"), o.textContent = a, this.setValue(this.labelEl);
    }, yc), o;
  }
  render(e, a) {
    return a ? yi`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${e}</div>` : yi``;
  }
}
const Cc = bc(Sc), { OPENING_EVENT: xc, OPENED_EVENT: $c, CLOSING_EVENT: kc, CLOSED_EVENT: Ac } = Vn.strings;
class kt extends hi {
  constructor() {
    super(...arguments), this.mdcFoundationClass = Vn, this.open = !1, this.timeoutMs = 5e3, this.closeOnEscape = !1, this.labelText = "", this.stacked = !1, this.leading = !1, this.reason = "";
  }
  render() {
    const e = {
      "mdc-snackbar--stacked": this.stacked,
      "mdc-snackbar--leading": this.leading
    };
    return T`
      <div class="mdc-snackbar ${$t(e)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${Cc(this.labelText, this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`;
  }
  createAdapter() {
    return Object.assign(Object.assign({}, Tn(this.mdcRoot)), { announce: () => {
    }, notifyClosed: (e) => {
      this.dispatchEvent(new CustomEvent(Ac, { bubbles: !0, cancelable: !0, detail: { reason: e } }));
    }, notifyClosing: (e) => {
      this.open = !1, this.dispatchEvent(new CustomEvent(kc, { bubbles: !0, cancelable: !0, detail: { reason: e } }));
    }, notifyOpened: () => {
      this.dispatchEvent(new CustomEvent($c, { bubbles: !0, cancelable: !0 }));
    }, notifyOpening: () => {
      this.open = !0, this.dispatchEvent(new CustomEvent(xc, { bubbles: !0, cancelable: !0 }));
    } });
  }
  /** @export */
  show() {
    this.open = !0;
  }
  /** @export */
  close(e = "") {
    this.reason = e, this.open = !1;
  }
  firstUpdated() {
    super.firstUpdated(), this.open && this.mdcFoundation.open();
  }
  _handleKeydown(e) {
    this.mdcFoundation.handleKeyDown(e);
  }
  _handleActionClick(e) {
    this.mdcFoundation.handleActionButtonClick(e);
  }
  _handleDismissClick(e) {
    this.mdcFoundation.handleActionIconClick(e);
  }
}
H([
  X(".mdc-snackbar")
], kt.prototype, "mdcRoot", void 0);
H([
  X(".mdc-snackbar__label")
], kt.prototype, "labelElement", void 0);
H([
  F({ type: Boolean, reflect: !0 }),
  je(function(t) {
    this.mdcFoundation && (t ? this.mdcFoundation.open() : (this.mdcFoundation.close(this.reason), this.reason = ""));
  })
], kt.prototype, "open", void 0);
H([
  je(function(t) {
    this.mdcFoundation.setTimeoutMs(t);
  }),
  F({ type: Number })
], kt.prototype, "timeoutMs", void 0);
H([
  je(function(t) {
    this.mdcFoundation.setCloseOnEscape(t);
  }),
  F({ type: Boolean })
], kt.prototype, "closeOnEscape", void 0);
H([
  F({ type: String })
], kt.prototype, "labelText", void 0);
H([
  F({ type: Boolean })
], kt.prototype, "stacked", void 0);
H([
  F({ type: Boolean })
], kt.prototype, "leading", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _c = _e`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover::before,.mdc-snackbar__action.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;
let $n = class extends kt {
};
$n.styles = [_c];
$n = H([
  le("mwc-snackbar")
], $n);
T`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <path
    d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const ei = {
  action: me`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: me`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: me`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: me`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: me`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: me`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: me`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: me`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: me`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: me`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: me`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: me`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
me`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ei.gooseIcon}</svg>`;
me`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ei.reportIcon}</svg>`;
me`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ei.smvIcon}</svg>`;
me`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ei.logIcon}</svg>`;
me`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
me`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
me`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Hi = {
  dAIcon: {
    width: 26.5,
    height: 24
  },
  dOIcon: {
    width: 26.5,
    height: 24
  },
  enumIcon: {
    width: 26.5,
    height: 24
  },
  lNIcon: {
    width: 26.5,
    height: 24
  }
};
Mi("dAIcon"), Mi("dOIcon"), Mi("enumIcon"), Mi("lNIcon");
const _r = {
  info: "--cyan",
  warning: "--yellow",
  error: "--red",
  action: "--blue"
};
function Mi(t) {
  if (t === "reset") return T``;
  const e = Hi[t]?.height ?? 24, a = Hi[t]?.width ?? 24;
  return T`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${a} ${e}"
    width="${a}"
  >
    ${ei[t]}
  </svg> `;
}
function Er(t, e) {
  if (t === "reset") return T``;
  const a = Hi[t]?.height ?? 24, d = Hi[t]?.width ?? 24;
  return T`<svg
    slot="${e ? "onIcon" : "offIcon"}"
    xmlns="http://www.w3.org/2000/svg"
    height="${a}"
    viewBox="0 0 ${d} ${a}"
    width="${d}"
  >
    ${ei[t]}
  </svg> `;
}
T`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  width="25px"
  height="25px"
  style="margin-bottom:0px;"
>
  <rect
    width="8"
    height="8"
    x="8.5"
    y="2"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="2.5"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="15"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <line
    x1="2"
    y1="12.5"
    x2="23"
    y2="12.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="12.5"
    y1="10"
    x2="12.5"
    y2="12.5"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="6.5"
    y1="12.5"
    x2="6.5"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="19"
    y1="12.5"
    x2="19"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
</svg>`;
T`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="transparent"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="currentColor"
  />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: currentColor;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M11.13,20.06L3.63,6.93c-.27-.48-.11-1.09.37-1.36h0c.48-.27,1.09-.11,1.36.37l6.64,11.61,6.64-11.61c.27-.48.88-.65,1.36-.37h0c.48.27.65.88.37,1.36l-7.5,13.13c-.38.67-1.35.67-1.74,0Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M7.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M12.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M17.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M20,4H4c-1.1,0-2,.9-2,2v4c0,1.1.9,2,2,2v-6h16v6c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2Z"
  />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M14,6h-1v-3c0-.55-.45-1-1-1s-1,.45-1,1v3h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M13.41,7l1.29-1.29c.39-.39.39-1.02,0-1.41s-1.02-.39-1.41,0l-1.29,1.29-1.29-1.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l1.29,1.29-1.29,1.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l1.29-1.29,1.29,1.29c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02,0-1.41l-1.29-1.29Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M19,12c0-3.53-2.61-6.43-6-6.92v-2.08c0-.55-.45-1-1-1s-1,.45-1,1v2.08c-3.39.49-6,3.39-6,6.92s2.61,6.43,6,6.92v2.08c0,.55.45,1,1,1s1-.45,1-1v-2.08c3.39-.49,6-3.39,6-6.92ZM7,12c0-2.42,1.72-4.44,4-4.9v9.8c-2.28-.46-4-2.48-4-4.9ZM13,16.9V7.1c2.28.46,4,2.48,4,4.9s-1.72,4.44-4,4.9Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M17,10c0-2.42-1.72-4.44-4-4.9v-2.1s0-1-1-1-1,1-1,1v2.1c-2.28.46-4,2.48-4,4.9,0,.71.15,1.39.42,2-.27.61-.42,1.29-.42,2,0,2.42,1.72,4.44,4,4.9v1.1h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1h-1v-1.1c2.28-.46,4-2.48,4-4.9,0-.71-.15-1.39-.42-2,.27-.61.42-1.29.42-2ZM12,7c1.66,0,3,1.34,3,3,0,0,0,.01,0,.02-.84-.63-1.87-1.02-3-1.02s-2.16.39-3,1.02c0,0,0-.01,0-.02,0-1.66,1.34-3,3-3ZM14.22,12c-.55.61-1.34,1-2.22,1s-1.67-.39-2.22-1c.55-.61,1.34-1,2.22-1s1.67.39,2.22,1ZM12,17c-1.66,0-3-1.34-3-3,0,0,0-.01,0-.02.84.63,1.87,1.02,3,1.02s2.16-.39,3-1.02c0,0,0,.01,0,.02,0,1.66-1.34,3-3,3Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M13,20h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M15,16h-2v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33L5.91,3.5c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59h-2c-.55,0-1,.45-1,1s.45,1,1,1h6c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M10,4h4c.55,0,1-.45,1-1s-.45-1-1-1h-4c-.55,0-1,.45-1,1s.45,1,1,1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`;
T`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M20.41,3.59c-.78-.78-2.05-.78-2.83,0-.59.59-.73,1.47-.43,2.19l-1.49,1.49c-1.02-.79-2.29-1.27-3.67-1.27-3.31,0-6,2.69-6,6,0,1.38.48,2.66,1.27,3.67l-1.49,1.49c-.73-.31-1.6-.17-2.19.43-.78.78-.78,2.05,0,2.83.78.78,2.05.78,2.83,0,.59-.59.73-1.47.43-2.19l1.49-1.49c1.02.79,2.29,1.27,3.67,1.27,3.31,0,6-2.69,6-6,0-1.38-.48-2.66-1.27-3.67l1.49-1.49c.73.31,1.6.17,2.19-.43.78-.78.78-2.05,0-2.83ZM12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"
  />
</svg>`;
T`<svg
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    stroke="currentColor"
    fill="currentColor"
    stroke-width="1"
    cx="12.5"
    cy="12.5"
    r="5"
  />
</svg>`;
T`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="10"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="15"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="20"
    x2="12.5"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
T` <svg
  xmlns="http://www.w3.org/2000/svg"
  style="width:100px;height:100px"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="#eee8d5"
    stroke="#6c71c4"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="#2aa198"
  />
</svg>`;
me`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
me`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
me`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19.3,7.94l-6-5.14c-.75-.64-1.85-.65-2.6,0l-6,5.14c-.44.38-.7.93-.7,1.52v9.54c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-9.54c0-.58-.25-1.14-.7-1.52ZM18,19H6v-9.54l6-5.14,6,5.14v9.54Z"/>
  <path class="cls-1" d="M11.57,7.74l-3,5c-.09.15-.09.35,0,.5.09.16.26.25.44.25h2v3.5c0,.22.15.42.37.48.04.01.09.02.13.02.17,0,.34-.09.43-.24l3-5c.09-.15.09-.35,0-.5-.09-.16-.26-.25-.44-.25h-2v-3.5c0-.22-.15-.42-.37-.48-.22-.06-.45.03-.56.22Z"/>
</g>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
me`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M14.39,11.93l-1.39.58v-1.84l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54l-1.39.58V3c0-.55-.45-1-1-1s-1,.45-1,1v6.33l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v1.84l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v5.5c0,.55.45,1,1,1s1-.45,1-1v-6.33l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54Z"/>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
me`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M18.71,15.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l.29.29h-5.59c0-1.1-.9-2-2-2h-2c-1.01,0-1.84.76-1.97,1.74-.61-.34-1.03-.99-1.03-1.74,0-1.1.9-2,2-2h5c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2v-.14c1.72-.45,3-2,3-3.86,0-2.21-1.79-4-4-4h-5c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5c1.1,0,2,.9,2,2,0,.75-.42,1.39-1.03,1.74-.13-.98-.96-1.74-1.97-1.74h-2c-1.1,0-2,.9-2,2h-5c-2.21,0-4,1.79-4,4,0,1.86,1.28,3.41,3,3.86v.14c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5.59l-.29.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l2-2c.39-.39.39-1.02,0-1.41l-2-2ZM8,7v-2h2v2s-2,0-2,0ZM14,11h2v2s-2,0-2,0v-2ZM8,19v-2h2v2s-2,0-2,0Z"/>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
me`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19,20h-2c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h1.89c.55,0,1-.45,1-1s-.45-1-1-1h-1.83c-2.09,0-3.95,1.53-4.15,3.61-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.23,2.39,1.64,4.39,3.98,4.39h2c.55,0,1-.45,1-1s-.45-1-1-1Z"/>
  <path class="cls-1" d="M10.98,6.39c.23-2.39-1.64-4.39-3.98-4.39h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1s.42.96.95.99c-.04,0-.08.01-.12.01h.17c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1,0,.28.11.53.29.71.17.17.4.27.65.28h0s.03.01.05.01c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h-1.89c-.55,0-1,.45-1,1s.45,1,1,1h1.83c2.09,0,3.95-1.53,4.15-3.61.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59Z"/>
  <path class="cls-1" d="M6.83,16h.17s-.03,0-.05-.01c-.04,0-.08.01-.12.01Z"/>
</g>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
var Ec = Object.defineProperty, Lc = Object.getOwnPropertyDescriptor, Xe = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Lc(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Ec(e, a, u), u;
};
const Ls = "history-state";
function Ic(t) {
  return new CustomEvent(Ls, { detail: t });
}
const Lr = {
  info: "info",
  warning: "warning",
  error: "report"
};
function Tc(t) {
  let e = localStorage.getItem("plugins");
  e || (e = "[]");
  const d = JSON.parse(e).find((o) => o.src === t);
  if (!d)
    return `pluginnotfound: ${t} in ${e}`;
  const u = d.name;
  return u || `pluginhasnoname:${t}`;
}
var Pt = /* @__PURE__ */ ((t) => (t.log = "log", t.history = "history", t.diagnostic = "diagnostic", t))(Pt || {});
function jt(t, e, a) {
  return new CustomEvent("history-dialog-ui", {
    bubbles: !0,
    composed: !0,
    ...a,
    detail: {
      show: t,
      kind: e,
      ...a?.detail
    }
  });
}
function Is(t, e) {
  return new CustomEvent("empty-issues", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { pluginSrc: t, ...e?.detail }
  });
}
function Ts() {
  return new CustomEvent("undo", { bubbles: !0, composed: !0 });
}
function Rs() {
  return new CustomEvent("redo", { bubbles: !0, composed: !0 });
}
let Be = class extends $e {
  constructor() {
    super(), this.log = [], this.history = [], this.editCount = -1, this.diagnoses = /* @__PURE__ */ new Map(), this.undo = this.undo.bind(this), this.redo = this.redo.bind(this), this.onLog = this.onLog.bind(this), this.onIssue = this.onIssue.bind(this), this.historyUIHandler = this.historyUIHandler.bind(this), this.emptyIssuesHandler = this.emptyIssuesHandler.bind(this), this.handleKeyPress = this.handleKeyPress.bind(this), this.dispatchHistoryStateEvent = this.dispatchHistoryStateEvent.bind(this), document.onkeydown = this.handleKeyPress;
  }
  get canUndo() {
    return this.editCount >= 0;
  }
  get canRedo() {
    return this.nextAction >= 0;
  }
  get previousAction() {
    return this.canUndo ? this.history.slice(0, this.editCount).map((t) => t.kind == "action").lastIndexOf(!0) : -1;
  }
  get nextAction() {
    let t = this.history.slice(this.editCount + 1).findIndex((e) => e.kind == "action");
    return t >= 0 && (t += this.editCount + 1), t;
  }
  onIssue(t) {
    const e = this.diagnoses.get(t.detail.validatorId);
    e ? e?.push(t.detail) : this.diagnoses.set(t.detail.validatorId, [t.detail]), this.latestIssue = t.detail, this.issueUI.close(), this.issueUI.show();
  }
  undo() {
    if (!this.canUndo) return !1;
    const t = this.history[this.editCount].undo;
    return this.host.dispatchEvent(Bi(t, { createHistoryEntry: !1 })), this.setEditCount(this.previousAction), !0;
  }
  redo() {
    if (!this.canRedo) return !1;
    const t = this.history[this.nextAction].redo;
    return this.host.dispatchEvent(Bi(t, { createHistoryEntry: !1 })), this.setEditCount(this.nextAction), !0;
  }
  onHistory(t) {
    const e = {
      time: /* @__PURE__ */ new Date(),
      ...t
    };
    this.nextAction !== -1 && this.history.splice(this.nextAction), this.addHistoryEntry(e), this.setEditCount(this.history.length - 1), this.requestUpdate("history", []);
  }
  addHistoryEntry(t) {
    if (!!t.squash && this.history.length > 0) {
      const a = this.history.pop(), d = this.squashHistoryEntries(t, a);
      this.history.push(d);
    } else
      this.history.push(t);
  }
  squashHistoryEntries(t, e) {
    const a = this.squashUndo(t.undo, e.undo), d = this.squashRedo(t.redo, e.redo);
    return {
      ...t,
      undo: a,
      redo: d
    };
  }
  squashUndo(t, e) {
    const a = Gt(t), u = Gt(e) ? e : [e];
    return [
      ...a ? t : [t],
      ...u
    ];
  }
  squashRedo(t, e) {
    const a = Gt(t), u = Gt(e) ? e : [e], o = a ? t : [t];
    return [
      ...u,
      ...o
    ];
  }
  onReset() {
    this.log = [], this.history = [], this.setEditCount(-1);
  }
  setEditCount(t) {
    this.editCount = t, this.dispatchHistoryStateEvent();
  }
  dispatchHistoryStateEvent() {
    this.host.dispatchEvent(
      Ic({
        editCount: this.editCount,
        canUndo: this.canUndo,
        canRedo: this.canRedo
      })
    );
  }
  onInfo(t) {
    const e = {
      time: /* @__PURE__ */ new Date(),
      ...t
    };
    if (this.log.push(e), !this.logUI.open) {
      const a = {
        error: this.errorUI,
        warning: this.warningUI,
        info: this.infoUI
      }[t.kind];
      a.close(), a.show();
    }
    t.kind == "error" && (this.errorUI.close(), this.errorUI.show()), this.requestUpdate("log", []);
  }
  onLog(t) {
    switch (t.detail.kind) {
      case "reset":
        this.onReset();
        break;
      case "action":
        this.onHistory(t.detail);
        break;
      default:
        this.onInfo(t.detail);
        break;
    }
  }
  historyUIHandler(t) {
    const e = {
      log: this.logUI,
      history: this.historyUI,
      diagnostic: this.diagnosticUI
    }[t.detail.kind];
    t.detail.show ? e.show() : e.close();
  }
  emptyIssuesHandler(t) {
    this.diagnoses.get(t.detail.pluginSrc) && (this.diagnoses.get(t.detail.pluginSrc).length = 0);
  }
  handleKeyPress(t) {
    const e = (a) => t.key === a && t.ctrlKey;
    e("y") && this.redo(), e("z") && this.undo(), e("l") && (this.logUI.open ? this.logUI.close() : this.logUI.show()), e("d") && (this.diagnosticUI.open ? this.diagnosticUI.close() : this.diagnosticUI.show());
  }
  connectedCallback() {
    super.connectedCallback(), this.host.addEventListener("log", this.onLog), this.host.addEventListener("issue", this.onIssue), this.host.addEventListener("history-dialog-ui", this.historyUIHandler), this.host.addEventListener("empty-issues", this.emptyIssuesHandler), this.host.addEventListener("undo", this.undo), this.host.addEventListener("redo", this.redo), this.diagnoses.clear();
  }
  renderLogEntry(t, e, a) {
    return T` <abbr title="${t.title}">
      <mwc-list-item
        class="${t.kind}"
        graphic="icon"
        ?twoline=${!!t.message}
        ?activated=${this.editCount == a.length - e - 1}
      >
        <span>
          <!-- FIXME: replace tt with mwc-chip asap -->
          <tt>${t.time?.toLocaleString()}</tt>
          ${t.title}</span
        >
        <span slot="secondary">${t.message}</span>
        <mwc-icon
          slot="graphic"
          style="--mdc-theme-text-icon-on-background:var(${_r[t.kind]})"
          >${Lr[t.kind]}</mwc-icon
        >
      </mwc-list-item></abbr
    >`;
  }
  renderHistoryEntry(t, e, a) {
    return T` <abbr title="${t.title}">
      <mwc-list-item
        class="${t.kind}"
        graphic="icon"
        ?twoline=${!!t.message}
        ?activated=${this.editCount == a.length - e - 1}
      >
        <span>
          <!-- FIXME: replace tt with mwc-chip asap -->
          <tt>${t.time?.toLocaleString()}</tt>
          ${t.title}</span
        >
        <span slot="secondary">${t.message}</span>
        <mwc-icon
          slot="graphic"
          style="--mdc-theme-text-icon-on-background:var(${_r[t.kind]})"
          >history</mwc-icon
        >
      </mwc-list-item></abbr
    >`;
  }
  renderLog() {
    return this.log.length > 0 ? this.log.slice().reverse().map(this.renderLogEntry, this) : T`<mwc-list-item disabled graphic="icon">
        <span>${G("log.placeholder")}</span>
        <mwc-icon slot="graphic">info</mwc-icon>
      </mwc-list-item>`;
  }
  renderHistory() {
    return this.history.length > 0 ? this.history.slice().reverse().map(this.renderHistoryEntry, this) : T`<mwc-list-item disabled graphic="icon">
        <span>${G("history.placeholder")}</span>
        <mwc-icon slot="graphic">info</mwc-icon>
      </mwc-list-item>`;
  }
  renderIssueEntry(t) {
    return T` <abbr title="${t.title + `
` + t.message}"
      ><mwc-list-item ?twoline=${!!t.message}>
        <span> ${t.title}</span>
        <span slot="secondary">${t.message}</span>
      </mwc-list-item></abbr
    >`;
  }
  renderValidatorsIssues(t) {
    return t.length === 0 ? [T``] : [
      T`
        <mwc-list-item noninteractive>
          ${Tc(t[0].validatorId)}
        </mwc-list-item>
      `,
      T`<li divider padded role="separator"></li>`,
      ...t.map((e) => this.renderIssueEntry(e))
    ];
  }
  renderIssues() {
    const t = [];
    return this.diagnoses.forEach((e) => {
      this.renderValidatorsIssues(e).forEach(
        (a) => t.push(a)
      );
    }), t.length ? t : T`<mwc-list-item disabled graphic="icon">
          <span>${G("diag.placeholder")}</span>
          <mwc-icon slot="graphic">info</mwc-icon>
        </mwc-list-item>`;
  }
  renderFilterButtons() {
    return Object.keys(Lr).map(
      (t) => T`<mwc-icon-button-toggle id="${t}filter" on
        >${Er(t, !1)}
        ${Er(t, !0)}</mwc-icon-button-toggle
      >`
    );
  }
  renderLogDialog() {
    return T` <mwc-dialog id="log" heading="${G("log.name")}">
      ${this.renderFilterButtons()}
      <mwc-list id="content" wrapFocus>${this.renderLog()}</mwc-list>
      <mwc-button slot="primaryAction" dialogaction="close"
        >${G("close")}</mwc-button
      >
    </mwc-dialog>`;
  }
  renderHistoryUI() {
    return T` <mwc-dialog id="history" heading="${G("history.name")}">
      <mwc-list id="content" wrapFocus>${this.renderHistory()}</mwc-list>
      <mwc-button
        icon="undo"
        label="${G("undo")}"
        ?disabled=${!this.canUndo}
        @click=${this.undo}
        slot="secondaryAction"
      ></mwc-button>
      <mwc-button
        icon="redo"
        label="${G("redo")}"
        ?disabled=${!this.canRedo}
        @click=${this.redo}
        slot="secondaryAction"
      ></mwc-button>
      <mwc-button slot="primaryAction" dialogaction="close"
        >${G("close")}</mwc-button
      >
    </mwc-dialog>`;
  }
  render() {
    return T`<slot></slot>
      <style>
        #log > mwc-icon-button-toggle {
          position: absolute;
          top: 8px;
          right: 14px;
        }
        #log > mwc-icon-button-toggle:nth-child(2) {
          right: 62px;
        }
        #log > mwc-icon-button-toggle:nth-child(3) {
          right: 110px;
        }
        #log > mwc-icon-button-toggle:nth-child(4) {
          right: 158px;
        }
        #content mwc-list-item.info,
        #content mwc-list-item.warning,
        #content mwc-list-item.error {
          display: none;
        }
        #infofilter[on] ~ #content mwc-list-item.info {
          display: flex;
        }
        #warningfilter[on] ~ #content mwc-list-item.warning {
          display: flex;
        }
        #errorfilter[on] ~ #content mwc-list-item.error {
          display: flex;
        }

        #infofilter[on] {
          color: var(--cyan);
        }

        #warningfilter[on] {
          color: var(--yellow);
        }

        #errorfilter[on] {
          color: var(--red);
        }

        #actionfilter[on] {
          color: var(--blue);
        }

        #log,
        #history {
          --mdc-dialog-min-width: 92vw;
        }

        #log > #filterContainer {
          position: absolute;
          top: 14px;
          right: 14px;
        }
      </style>
      ${this.renderLogDialog()} ${this.renderHistoryUI()}
      <mwc-dialog id="diagnostic" heading="${G("diag.name")}">
        <filtered-list id="content" wrapFocus>
          ${this.renderIssues()}
        </filtered-list>
        <mwc-button slot="primaryAction" dialogaction="close">
          ${G("close")}
        </mwc-button>
      </mwc-dialog>

      <mwc-snackbar
        id="info"
        timeoutMs="4000"
        labelText="${this.log.slice().reverse().find((t) => t.kind === "info")?.title ?? G("log.snackbar.placeholder")}"
      >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <mwc-snackbar
        id="warning"
        timeoutMs="6000"
        labelText="${this.log.slice().reverse().find((t) => t.kind === "warning")?.title ?? G("log.snackbar.placeholder")}"
      >
        <mwc-button
          slot="action"
          icon="history"
          @click=${() => this.logUI.show()}
          >${G("log.snackbar.show")}</mwc-button
        >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <mwc-snackbar
        id="error"
        timeoutMs="10000"
        labelText="${this.log.slice().reverse().find((t) => t.kind === "error")?.title ?? G("log.snackbar.placeholder")}"
      >
        <mwc-button
          slot="action"
          icon="history"
          @click=${() => this.logUI.show()}
          >${G("log.snackbar.show")}</mwc-button
        >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
      <mwc-snackbar
        id="issue"
        timeoutMs="10000"
        labelText="${this.latestIssue?.title ?? G("log.snackbar.placeholder")}"
      >
        <mwc-button
          slot="action"
          icon="rule"
          @click=${() => this.diagnosticUI.show()}
          >${G("log.snackbar.show")}</mwc-button
        >
        <mwc-icon-button icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>`;
  }
};
Xe([
  F({ type: Array })
], Be.prototype, "log", 2);
Xe([
  F({ type: Array })
], Be.prototype, "history", 2);
Xe([
  F({ type: Number })
], Be.prototype, "editCount", 2);
Xe([
  F()
], Be.prototype, "diagnoses", 2);
Xe([
  F({
    type: Object
  })
], Be.prototype, "host", 2);
Xe([
  ee()
], Be.prototype, "latestIssue", 2);
Xe([
  X("#log")
], Be.prototype, "logUI", 2);
Xe([
  X("#history")
], Be.prototype, "historyUI", 2);
Xe([
  X("#diagnostic")
], Be.prototype, "diagnosticUI", 2);
Xe([
  X("#error")
], Be.prototype, "errorUI", 2);
Xe([
  X("#warning")
], Be.prototype, "warningUI", 2);
Xe([
  X("#info")
], Be.prototype, "infoUI", 2);
Xe([
  X("#issue")
], Be.prototype, "issueUI", 2);
Be = Xe([
  le("oscd-history")
], Be);
var Rc = Object.defineProperty, Mc = Object.getOwnPropertyDescriptor, Ki = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Mc(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Rc(e, a, u), u;
};
let Zt = class extends $e {
  constructor() {
    super(...arguments), this.plugins = [];
  }
  render() {
    return T`
        <mwc-dialog
          stacked
          id="plugin-manager-root"
          heading="${G("plugins.heading")}"
        >
          <mwc-list
            id="pluginList"
            multi
            @selected=${(t) => {
      const e = this.pluginList.items.filter((a, d) => t.detail.index.has(d)).map((a) => a.plugin);
      this.dispatchEvent(Kc(e));
    }}
          >
            <mwc-list-item graphic="avatar" noninteractive>
              <strong>${G("plugins.editor")}</strong>
              <mwc-icon slot="graphic" class="inverted">
                ${ut.editor}
              </mwc-icon>
            </mwc-list-item>

            <li divider role="separator"></li>

            ${this.generateEditorListItems()}

            <mwc-list-item graphic="avatar" noninteractive>
              <strong>${G("plugins.menu")}</strong>
              <mwc-icon slot="graphic" class="inverted">
                <strong>${ut.menu}</strong></mwc-icon>
              </mwc-list-item>
            <li divider role="separator"></li>

            ${this.generateMenuListItems("top")}

            <li divider role="separator" inset></li>

            ${this.generateValidatorListItems()}

            <li divider role="separator" inset></li>

            ${this.generateMenuListItems("middle")}

            <li divider role="separator" inset></li>

            ${this.generateMenuListItems("bottom")}

          </mwc-list>
          <mwc-button
            slot="secondaryAction"
            icon="refresh"
            label="${G("reset")}"
            @click=${async () => {
      this.dispatchEvent(Uc()), this.requestUpdate();
    }}
            style="--mdc-theme-primary: var(--mdc-theme-error)"
          >
          </mwc-button>
          <mwc-button
            slot="secondaryAction"
            icon=""
            label="${G("close")}"
            dialogAction="close">
          </mwc-button>
          <mwc-button
            outlined
            trailingIcon
            slot="primaryAction"
            icon="library_add"
            label="${G("plugins.add.heading")}&hellip;"
            @click=${() => this.dispatchOpenCustomPluginDialogEvent()}>
          </mwc-button>
        </mwc-dialog>
      `;
  }
  show() {
    this.root.show();
  }
  generateEditorListItems() {
    return this.plugins.filter((t) => t.kind === "editor").map(this.renderPluginListItem);
  }
  generateMenuListItems(t) {
    return this.plugins.filter((e) => e.kind === "menu" && e.position === t).map(this.renderPluginListItem);
  }
  generateValidatorListItems() {
    return this.plugins.filter((t) => t.kind === "validator").map(this.renderPluginListItem);
  }
  dispatchOpenCustomPluginDialogEvent() {
    const t = new CustomEvent("open-plugin-download", {
      bubbles: !0,
      composed: !0
    });
    this.dispatchEvent(t);
  }
  renderPluginListItem(t) {
    return t ? T`
      <mwc-check-list-item
          class="${t.official ? "official" : "external"}"
          value="${t.src}"
          .plugin=${t}
          ?selected=${t.active}
          @request-selected=${(e) => {
      if (e.detail.source !== "interaction")
        return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1;
    }}
          hasMeta
          left
        >
          <mwc-icon slot="meta">
            ${t.icon || ut[t.kind]}
          </mwc-icon>
          ${t.name}
        </mwc-check-list-item>

    ` : T``;
  }
};
Zt.styles = _e`
    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }
  `;
Ki([
  F({ type: Array })
], Zt.prototype, "plugins", 2);
Ki([
  X("#plugin-manager-root")
], Zt.prototype, "root", 2);
Ki([
  X("#pluginList")
], Zt.prototype, "pluginList", 2);
Zt = Ki([
  le("oscd-plugin-manager")
], Zt);
const Dc = ["top", "middle", "bottom"];
var Nc = Object.defineProperty, Oc = Object.getOwnPropertyDescriptor, Nt = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Oc(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Nc(e, a, u), u;
};
let mt = class extends $e {
  render() {
    return T`
      <mwc-dialog id="dialog" heading="${G("plugins.add.heading")}">
        <div style="display: flex; flex-direction: column; row-gap: 8px;">
          <p style="color:var(--mdc-theme-error);">
            ${G("plugins.add.warning")}
          </p>
          <mwc-textfield
            label="${G("plugins.add.name")}"
            helper="${G("plugins.add.nameHelper")}"
            required
            id="pluginNameInput"
          ></mwc-textfield>
          <mwc-list id="pluginKindList">
            <mwc-radio-list-item
              id="editor"
              value="editor"
              hasMeta
              selected
              left
            >
              ${G("plugins.editor")}
              <mwc-icon slot="meta">
                ${ut.editor}
              </mwc-icon>
            </mwc-radio-list-item>
            <mwc-radio-list-item value="menu" hasMeta left>
              ${G("plugins.menu")}
            <mwc-icon slot="meta">
              ${ut.menu}
            </mwc-icon>
            </mwc-radio-list-item>
            <div id="menudetails">
              <mwc-formfield
                id="enabledefault"
                label="${G("plugins.requireDoc")}"
              >
                <mwc-switch id="requireDoc" checked></mwc-switch>
              </mwc-formfield>
              <mwc-select id="positionList" value="middle" fixedpositionList>
                ${Object.values(Dc).map(
      (t) => T`<mwc-list-item value="${t}"
                      >${G("plugins." + t)}</mwc-list-item
                    >`
    )}
              </mwc-select>
            </div>
            <style>
              #menudetails {
                display: none;
                padding: 20px;
                padding-left: 50px;
              }
              #pluginKindList [value="menu"][selected] ~ #menudetails {
                display: grid;
              }
              #enabledefault {
                padding-bottom: 20px;
              }
              #positionList {
                max-width: 250px;
              }
            </style>
            <mwc-radio-list-item id="validator" value="validator" hasMeta left>
              ${G("plugins.validator")}
              <mwc-icon slot="meta">
                ${ut.validator}
              </mwc-icon>
            </mwc-radio-list-item>
          </mwc-list>
          <mwc-textfield
            label="${G("plugins.add.src")}"
            helper="${G("plugins.add.srcHelper")}"
            placeholder="http://example.com/plugin.js"
            type="url"
            required
            id="pluginSrcInput">
          </mwc-textfield>
        </div>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close"
          label="${G("cancel")}">
        </mwc-button>
        <mwc-button
          id="addButton"
          slot="primaryAction"
          icon="add"
          label="${G("add")}"
          trailingIcon
          @click=${() => this.handleAddPlugin()}>
        </mwc-button>
      </mwc-dialog>
    `;
  }
  close() {
    this.dialog.close();
  }
  show() {
    this.dialog.show();
  }
  get open() {
    return this.dialog.open;
  }
  handleAddPlugin() {
    this.pluginSrcInput.checkValidity() && this.pluginNameInput.checkValidity() && this.pluginKindList.selected && this.requireDoc && this.positionList.selected && (this.dispatchEvent(
      Gc({
        src: this.pluginSrcInput.value,
        name: this.pluginNameInput.value,
        kind: this.pluginKindList.selected.value,
        requireDoc: this.requireDoc.checked,
        position: this.positionList.value,
        active: !0,
        // this is an added plugin and will be remove by reset either way
        activeByDefault: !1
      })
    ), this.requestUpdate(), this.dialog.close());
  }
};
mt.styles = _e`

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }
  `;
Nt([
  X("#dialog")
], mt.prototype, "dialog", 2);
Nt([
  X("#pluginSrcInput")
], mt.prototype, "pluginSrcInput", 2);
Nt([
  X("#pluginNameInput")
], mt.prototype, "pluginNameInput", 2);
Nt([
  X("#pluginKindList")
], mt.prototype, "pluginKindList", 2);
Nt([
  X("#requireDoc")
], mt.prototype, "requireDoc", 2);
Nt([
  X("#positionList")
], mt.prototype, "positionList", 2);
Nt([
  X("#addButton")
], mt.prototype, "addButton", 2);
mt = Nt([
  le("oscd-custom-plugin-dialog")
], mt);
var Pc = Object.defineProperty, Fc = Object.getOwnPropertyDescriptor, Ze = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Fc(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Pc(e, a, u), u;
};
let Oe = class extends $e {
  constructor() {
    super(...arguments), this.doc = null, this.docName = "", this.editCount = -1, this.activeTab = 0, this.plugins = [], this.validated = Promise.resolve(), this.shouldValidate = !1;
  }
  render() {
    return T`
      <div
        @open-plugin-download=${() => this.pluginDownloadUI.show()}
        @oscd-activate-editor=${this.handleActivateEditorByEvent}
        @oscd-run-menu=${this.handleRunMenuByEvent}
      >
        <slot></slot>
        ${this.renderHeader()} ${this.renderAside()} ${this.renderContent()}
        ${this.renderLanding()} ${this.renderPlugging()}
      </div>
    `;
  }
  renderPlugging() {
    return T` ${this.renderPluginUI()} ${this.renderDownloadUI()} `;
  }
  /** Renders the "Add Custom Plug-in" UI*/
  renderDownloadUI() {
    return T`
      <oscd-custom-plugin-dialog id="pluginAdd"></oscd-custom-plugin-dialog>
    `;
  }
  /**
   * Renders the plug-in management UI (turning plug-ins on/off)
   */
  renderPluginUI() {
    return T`
      <oscd-plugin-manager id="pluginManager" .plugins=${this.plugins}></oscd-plugin-manager>
    `;
  }
  // Computed properties
  get validators() {
    return this.plugins.filter(
      (t) => t.active && t.kind === "validator"
    );
  }
  get menuEntries() {
    return this.plugins.filter(
      (t) => t.active && t.kind === "menu"
    );
  }
  get topMenu() {
    return this.menuEntries.filter((t) => t.position === "top");
  }
  get middleMenu() {
    return this.menuEntries.filter((t) => t.position === "middle");
  }
  get bottomMenu() {
    return this.menuEntries.filter((t) => t.position === "bottom");
  }
  get menu() {
    const t = this.generateMenu(this.topMenu, "top"), e = this.generateMenu(this.middleMenu, "middle"), a = this.generateMenu(this.bottomMenu, "bottom"), d = this.generateValidatorMenus(this.validators);
    return e.length > 0 && e.push("divider"), a.length > 0 && a.push("divider"), [
      "divider",
      ...t,
      "divider",
      {
        icon: "undo",
        name: "undo",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(Ts());
        },
        disabled: () => !this.historyState.canUndo,
        kind: "static",
        content: () => T``
      },
      {
        icon: "redo",
        name: "redo",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(Rs());
        },
        disabled: () => !this.historyState.canRedo,
        kind: "static",
        content: () => T``
      },
      ...d,
      {
        icon: "list",
        name: "menu.viewLog",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(jt(!0, Pt.log));
        },
        kind: "static",
        content: () => T``
      },
      {
        icon: "history",
        name: "menu.viewHistory",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(jt(!0, Pt.history));
        },
        kind: "static",
        content: () => T``
      },
      {
        icon: "rule",
        name: "menu.viewDiag",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(jt(!0, Pt.diagnostic));
        },
        kind: "static",
        content: () => T``
      },
      "divider",
      ...e,
      {
        icon: "settings",
        name: "settings.title",
        action: () => {
          this.dispatchEvent(hs(!0));
        },
        kind: "static",
        content: () => T``
      },
      ...a,
      {
        icon: "extension",
        name: "plugins.heading",
        action: () => this.pluginUI.show(),
        kind: "static",
        content: () => T``
      }
    ];
  }
  get editors() {
    return this.plugins.filter(
      (t) => t.active && t.kind === "editor"
    );
  }
  // Keyboard Shortcuts
  handleKeyPress(t) {
    if (!t.ctrlKey)
      return;
    const a = {
      m: () => this.menuUI.open = !this.menuUI.open,
      o: () => this.menuUI.querySelector('mwc-list-item[iconid="folder_open"]')?.click(),
      O: () => this.menuUI.querySelector('mwc-list-item[iconid="create_new_folder"]')?.click(),
      s: () => this.menuUI.querySelector('mwc-list-item[iconid="save"]')?.click(),
      P: () => this.pluginUI.show()
    }[t.key];
    a && (t.preventDefault(), a());
  }
  connectedCallback() {
    super.connectedCallback(), this.host.addEventListener("close-drawer", async () => {
      this.menuUI.open = !1;
    }), this.host.addEventListener("validate", async () => {
      this.shouldValidate = !0, await this.validated, this.shouldValidate && (this.shouldValidate = !1, this.validated = Promise.allSettled(
        this.menuUI.querySelector("mwc-list").items.filter((t) => t.className === "validator").map(
          (t) => t.nextElementSibling.validate()
        )
      ).then(), this.dispatchEvent(at(this.validated)));
    }), this.handleKeyPress = this.handleKeyPress.bind(this), document.onkeydown = this.handleKeyPress, document.addEventListener("open-plugin-download", () => {
      this.pluginDownloadUI.show();
    });
  }
  generateMenu(t, e) {
    return t.map((a) => ({
      icon: a.icon || ut.menu,
      name: a.name,
      action: (d) => {
        this.dispatchEvent(
          at(
            d.target.items[d.detail.index].nextElementSibling.run()
          )
        );
      },
      disabled: () => a.requireDoc && this.doc === null,
      content: () => a.content ? a.content() : T``,
      kind: e
    }));
  }
  generateValidatorMenus(t) {
    return t.map((e) => ({
      icon: e.icon || ut.validator,
      name: e.name,
      action: (a) => {
        this.dispatchEvent(Is(e.src)), this.dispatchEvent(
          at(
            a.target.items[a.detail.index].nextElementSibling.validate()
          )
        );
      },
      disabled: () => this.doc === null,
      content: e.content ?? (() => T``),
      kind: "validator"
    }));
  }
  renderMenuItem(t) {
    const e = t !== "divider" && t.actionItem;
    return Bc(t) ? T`<li divider padded role="separator"></li>` : e ? T`` : T`
      <mwc-list-item
        class="${t.kind}"
        iconid="${t.icon}"
        graphic="icon"
        data-name="${t.name}"
        .disabled=${t.disabled?.() || !t.action}
        ><mwc-icon slot="graphic">${t.icon}</mwc-icon>
        <span>${G(t.name)}</span>
        ${t.hint ? T`<span slot="secondary"><tt>${t.hint}</tt></span>` : ""}
      </mwc-list-item>
      ${t.content ? t.content() : Nr}
    `;
  }
  renderActionItem(t) {
    return t === "divider" || !t.actionItem ? T`` : T`
    <mwc-icon-button
      slot="actionItems"
      icon="${t.icon}"
      label="${t.name}"
      ?disabled=${t.disabled?.() || !t.action}
      @click=${t.action}
    ></mwc-icon-button>`;
  }
  renderEditorTab({ name: t, icon: e }) {
    return T`<mwc-tab label=${t} icon=${e || "edit"}> </mwc-tab>`;
  }
  /** Renders top bar which features icon buttons for undo, redo, log, scl history and diagnostics*/
  renderHeader() {
    return T`<mwc-top-app-bar-fixed>
      <mwc-icon-button
        icon="menu"
        label="Menu"
        slot="navigationIcon"
        @click=${() => this.menuUI.open = !0}
      ></mwc-icon-button>
      <div slot="title" id="title">${this.docName}</div>
      ${this.menu.map(this.renderActionItem)}
    </mwc-top-app-bar-fixed>`;
  }
  /**
   * Renders a drawer toolbar featuring the scl filename, enabled menu plugins,
   * settings, help, scl history and plug-ins management
   */
  renderAside() {
    return T`
      <mwc-drawer class="mdc-theme--surface" hasheader type="modal" id="menu">
        <span slot="title">${G("menu.title")}</span>
          ${t(this.docName)}
        <mwc-list
          wrapFocus
          @action=${e(this.menu)}
        >
          ${this.menu.map(this.renderMenuItem)}
        </mwc-list>
      </mwc-drawer>
    `;
    function t(a) {
      return a ? T`<span slot="subtitle">${a}</span>` : T``;
    }
    function e(a) {
      return function(u) {
        u.target instanceof _n && a.filter(
          (o) => o !== "divider" && !o.actionItem
        )[u.detail.index]?.action?.(u);
      };
    }
  }
  calcActiveEditors() {
    const t = !!this.doc;
    return this.editors.filter((e) => e.requireDoc === !1 || t);
  }
  /** Renders the enabled editor plugins and a tab bar to switch between them*/
  renderContent() {
    const t = this.calcActiveEditors().map(this.renderEditorTab);
    if (!(t.length > 0))
      return T``;
    return T`
      <mwc-tab-bar
        @MDCTabBar:activated=${this.handleActivatedEditorTabByUser}
        activeIndex=${this.activeTab}
      >
        ${t}
      </mwc-tab-bar>
      ${a(this.editors, this.activeTab, this.doc)}
    `;
    function a(d, u, o) {
      const s = d[u];
      if (s?.requireDoc && !o)
        return T``;
      const n = s?.content;
      return n ? T`${n()}` : T``;
    }
  }
  handleActivatedEditorTabByUser(t) {
    const e = t.detail.index;
    this.activateTab(e);
  }
  handleActivateEditorByEvent(t) {
    const { name: e, src: a } = t.detail, u = this.calcActiveEditors().findIndex((o) => o.name === e || o.src === a);
    u < 0 || this.activateTab(u);
  }
  activateTab(t) {
    this.activeTab = t;
  }
  handleRunMenuByEvent(t) {
    this.menuUI.open = !0;
    const a = this.menuUI.querySelector(`[data-name="${t.detail.name}"]`).nextElementSibling;
    a && a.run();
  }
  /**
   * Renders the landing buttons (open project and new project)
   * it no document loaded we display the menu item that are in the position
   * 'top' and are not disabled
   *
   * To enable replacement of this part we have to convert it to either an addon
   * or a plugin
   */
  renderLanding() {
    if (this.doc)
      return T``;
    return T`
      <div class="landing">
        ${t(this.menu, this.menuUI)}
      </div>`;
    function t(e, a) {
      return e.filter((o) => o !== "divider").map((o, s) => o.kind !== "top" || o.disabled?.() ? T`` : T`
              <mwc-icon-button
                class="landing_icon"
                icon="${o.icon}"
                @click="${() => u(s)}"
              >
                <div class="landing_label">${o.name}</div>
              </mwc-icon-button>
            `);
      function u(o) {
        a.querySelector("mwc-list").items[o].click();
      }
    }
  }
};
Oe.styles = _e`
    mwc-drawer {
      position: absolute;
      top: 0;
    }

    mwc-top-app-bar-fixed {
      --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
    } /* hack to fix disabled icon buttons rendering black */

    mwc-tab {
      background-color: var(--primary);
      --mdc-theme-primary: var(--mdc-theme-on-primary);
    }

    input[type='file'] {
      display: none;
    }

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }

    mwc-linear-progress {
      position: fixed;
      --mdc-linear-progress-buffer-color: var(--primary);
      --mdc-theme-primary: var(--secondary);
      left: 0px;
      top: 0px;
      width: 100%;
      pointer-events: none;
      z-index: 1000;
    }

    tt {
      font-family: 'Roboto Mono', monospace;
      font-weight: 300;
    }

    .landing {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .landing_icon:hover {
      box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
        0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
    }

    .landing_icon {
      margin: 12px;
      border-radius: 16px;
      width: 160px;
      height: 140px;
      text-align: center;
      color: var(--mdc-theme-on-secondary);
      background: var(--secondary);
      --mdc-icon-button-size: 100px;
      --mdc-icon-size: 100px;
      --mdc-ripple-color: rgba(0, 0, 0, 0);
      box-shadow: rgb(0 0 0 / 14%) 0px 6px 10px 0px,
        rgb(0 0 0 / 12%) 0px 1px 18px 0px, rgb(0 0 0 / 20%) 0px 3px 5px -1px;
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .landing_label {
      width: 160px;
      height: 50px;
      margin-top: 100px;
      margin-left: -30px;
      font-family: 'Roboto', sans-serif;
    }

    .plugin.menu {
      display: flex;
    }

    .plugin.validator {
      display: flex;
    }
  `;
Ze([
  F({ attribute: !1 })
], Oe.prototype, "doc", 2);
Ze([
  F({ type: String })
], Oe.prototype, "docName", 2);
Ze([
  F({ type: Number })
], Oe.prototype, "editCount", 2);
Ze([
  F({ type: Number })
], Oe.prototype, "activeTab", 2);
Ze([
  F({ type: Array })
], Oe.prototype, "plugins", 2);
Ze([
  F({ type: Object })
], Oe.prototype, "host", 2);
Ze([
  F({ type: Object })
], Oe.prototype, "historyState", 2);
Ze([
  ee()
], Oe.prototype, "validated", 2);
Ze([
  ee()
], Oe.prototype, "shouldValidate", 2);
Ze([
  X("#menu")
], Oe.prototype, "menuUI", 2);
Ze([
  X("#pluginManager")
], Oe.prototype, "pluginUI", 2);
Ze([
  X("#pluginList")
], Oe.prototype, "pluginList", 2);
Ze([
  X("#pluginAdd")
], Oe.prototype, "pluginDownloadUI", 2);
Oe = Ze([
  le("oscd-layout")
], Oe);
function Bc(t) {
  return t === "divider";
}
function se(t) {
  return location.origin + location.pathname + t;
}
const Hc = [
  {
    name: "IED",
    src: se("plugins/src/editors/IED.js"),
    icon: "developer_board",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Substation",
    src: se("plugins/src/editors/Substation.js"),
    icon: "margin",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Single Line Diagram",
    src: se("plugins/src/editors/SingleLineDiagram.js"),
    icon: "edit",
    activeByDefault: !1,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Subscriber Message Binding (GOOSE)",
    src: se("plugins/src/editors/GooseSubscriberMessageBinding.js"),
    icon: "link",
    activeByDefault: !1,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Subscriber Data Binding (GOOSE)",
    src: se("plugins/src/editors/GooseSubscriberDataBinding.js"),
    icon: "link",
    activeByDefault: !1,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Subscriber Later Binding (GOOSE)",
    src: se("plugins/src/editors/GooseSubscriberLaterBinding.js"),
    icon: "link",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Subscriber Message Binding (SMV)",
    src: se("plugins/src/editors/SMVSubscriberMessageBinding.js"),
    icon: "link",
    activeByDefault: !1,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Subscriber Data Binding (SMV)",
    src: se("plugins/src/editors/SMVSubscriberDataBinding.js"),
    icon: "link",
    activeByDefault: !1,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Subscriber Later Binding (SMV)",
    src: se("plugins/src/editors/SMVSubscriberLaterBinding.js"),
    icon: "link",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Communication",
    src: se("plugins/src/editors/Communication.js"),
    icon: "settings_ethernet",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "104",
    src: se("plugins/src/editors/Protocol104.js"),
    icon: "settings_ethernet",
    activeByDefault: !1,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Templates",
    src: se("plugins/src/editors/Templates.js"),
    icon: "copy_all",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Publisher",
    src: se("external-plugins/oscd-publisher/oscd-publisher.js"),
    icon: "publish",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Communication Explorer",
    src: se("external-plugins/oscd-plugins/communication-explorer/0.0.31/index.js"),
    icon: "lan",
    activeByDefault: !0,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Cleanup",
    src: se("plugins/src/editors/Cleanup.js"),
    icon: "cleaning_services",
    activeByDefault: !1,
    kind: "editor",
    requireDoc: !0
  },
  {
    name: "Open project",
    src: se("plugins/src/menu/OpenProject.js"),
    icon: "folder_open",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !1,
    position: "top"
  },
  {
    name: "New project",
    src: se("plugins/src/menu/NewProject.js"),
    icon: "create_new_folder",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !1,
    position: "top"
  },
  {
    name: "Plugin Store (Beta)",
    src: "https://sprinteins.github.io/oscd-plugin-store/index.js",
    icon: "shopping_bag",
    activeByDefault: !1,
    kind: "menu",
    requireDoc: !1,
    position: "bottom"
  },
  {
    name: "Save project",
    src: se("plugins/src/menu/SaveProject.js"),
    icon: "save",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !0,
    position: "top"
  },
  {
    name: "Validate Schema",
    src: se("plugins/src/validators/ValidateSchema.js"),
    icon: "rule_folder",
    activeByDefault: !0,
    kind: "validator"
  },
  {
    name: "Validate Templates",
    src: se("plugins/src/validators/ValidateTemplates.js"),
    icon: "rule_folder",
    activeByDefault: !0,
    kind: "validator"
  },
  {
    name: "Import IEDs",
    src: se("plugins/src/menu/ImportIEDs.js"),
    icon: "snippet_folder",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Create Virtual IED",
    src: se("plugins/src/menu/VirtualTemplateIED.js"),
    icon: "developer_board",
    activeByDefault: !1,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Subscriber Update",
    src: se("plugins/src/menu/SubscriberInfo.js"),
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Update desc (ABB)",
    src: se("plugins/src/menu/UpdateDescriptionABB.js"),
    activeByDefault: !1,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Update desc (SEL)",
    src: se("plugins/src/menu/UpdateDescriptionSEL.js"),
    activeByDefault: !1,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Merge Project",
    src: se("plugins/src/menu/Merge.js"),
    icon: "merge_type",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Update Substation",
    src: se("plugins/src/menu/UpdateSubstation.js"),
    icon: "merge_type",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Compare IED",
    src: se("plugins/src/menu/CompareIED.js"),
    icon: "compare_arrows",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  },
  {
    name: "Show SCL History",
    src: se("plugins/src/menu/SclHistory.js"),
    icon: "history_toggle_off",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !0,
    position: "bottom"
  },
  {
    name: "Help",
    src: se("plugins/src/menu/Help.js"),
    icon: "help",
    activeByDefault: !0,
    kind: "menu",
    requireDoc: !1,
    position: "bottom"
  },
  {
    name: "Export Communication Section",
    src: se("plugins/src/menu/ExportCommunication.js"),
    icon: "sim_card_download",
    activeByDefault: !1,
    kind: "menu",
    requireDoc: !0,
    position: "middle"
  }
];
function zc(t, e, a) {
  return new CustomEvent("oscd-configure-plugin", {
    bubbles: !0,
    composed: !0,
    detail: { name: t, kind: e, config: a }
  });
}
var Vc = Object.defineProperty, Wc = Object.getOwnPropertyDescriptor, dt = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Wc(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Vc(e, a, u), u;
};
let rt = class extends $e {
  constructor() {
    super(...arguments), this.doc = null, this.docName = "", this.docId = "", this.historyState = {
      editCount: -1,
      canRedo: !1,
      canUndo: !1
    }, this.nsdoc = Ni(), this.currentSrc = "", this.storedPlugins = [], this.plugins = { menu: [], editor: [] }, this.loadedPlugins = /* @__PURE__ */ new Set(), this.pluginTags = /* @__PURE__ */ new Map();
  }
  render() {
    return T`<oscd-waiter>
      <oscd-settings .host=${this}>
        <oscd-wizards .host=${this}>
          <oscd-history .host=${this} .editCount=${this.historyState.editCount}>
            <oscd-editor
              .doc=${this.doc}
              .docName=${this.docName}
              .docId=${this.docId}
              .host=${this}
              .editCount=${this.historyState.editCount}
            >
              <oscd-layout
                @add-external-plugin=${this.handleAddExternalPlugin}
                @oscd-configure-plugin=${this.handleConfigurationPluginEvent}
                @set-plugins=${(t) => this.setPlugins(t.detail.selectedPlugins)}
                .host=${this}
                .doc=${this.doc}
                .docName=${this.docName}
                .editCount=${this.historyState.editCount}
                .historyState=${this.historyState}
                .plugins=${this.storedPlugins}
              >
              </oscd-layout>
            </oscd-editor>
          </oscd-history>
        </oscd-wizards>
      </oscd-settings>
    </oscd-waiter>`;
  }
  get src() {
    return this.currentSrc;
  }
  set src(t) {
    this.currentSrc = t, this.dispatchEvent(at(this.loadDoc(t)));
  }
  /** Loads and parses an `XMLDocument` after [[`src`]] has changed. */
  async loadDoc(t) {
    const a = await (await fetch(t)).text();
    if (!a) return;
    const d = new DOMParser().parseFromString(a, "application/xml"), u = t;
    this.dispatchEvent(In(d, u)), t.startsWith("blob:") && URL.revokeObjectURL(t);
  }
  /**
   *
   * @deprecated Use `handleConfigurationPluginEvent` instead
   */
  handleAddExternalPlugin(t) {
    this.addExternalPlugin(t.detail.plugin);
    const { name: e, kind: a } = t.detail.plugin, d = zc(e, a, t.detail.plugin);
    this.handleConfigurationPluginEvent(d);
  }
  handleConfigurationPluginEvent(t) {
    const { name: e, kind: a, config: d } = t.detail, u = this.hasPlugin(e, a), o = d !== null, s = u && o, h = u && !o, n = !u && o;
    if (s && d)
      this.changePlugin(d);
    else if (h)
      this.removePlugin(e, a);
    else if (n && d)
      this.addPlugin(d);
    else {
      const i = Ct({
        kind: "error",
        title: "Invalid plugin configuration event",
        message: JSON.stringify({ name: e, kind: a, config: d })
      });
      this.dispatchEvent(i);
    }
  }
  connectedCallback() {
    super.connectedCallback(), this.loadPlugins(), this.addEventListener("reset-plugins", this.resetPlugins), this.addEventListener(Ls, (t) => {
      this.historyState = t.detail, this.requestUpdate();
    });
  }
  /**
   *
   * @param name
   * @param kind
   * @returns the index of the plugin in the stored plugin list
   */
  findPluginIndex(t, e) {
    return this.storedPlugins.findIndex((a) => a.name === t && a.kind === e);
  }
  hasPlugin(t, e) {
    return this.findPluginIndex(t, e) > -1;
  }
  removePlugin(t, e) {
    const a = this.storedPlugins.filter(
      (d) => d.name !== t || d.kind !== e
    );
    this.updateStoredPlugins(a);
  }
  addPlugin(t) {
    const e = [...this.storedPlugins, t];
    this.updateStoredPlugins(e);
  }
  /**
   *
   * @param plugin
   * @throws if the plugin is not found
   */
  changePlugin(t) {
    const e = this.storedPlugins, { name: a, kind: d } = t, u = this.findPluginIndex(a, d);
    if (u < 0) {
      const n = Ct({
        kind: "error",
        title: "Plugin not found, stopping change process",
        message: JSON.stringify({ name: a, kind: d })
      });
      this.dispatchEvent(n);
      return;
    }
    const s = { ...e[u], ...t }, h = [...e];
    h.splice(u, 1, s), this.updateStoredPlugins(h);
  }
  resetPlugins() {
    const a = [...this.getBuiltInPlugins(), ...this.parsedPlugins].map((d) => ({
      ...d,
      active: d.activeByDefault ?? !1
    }));
    this.storePlugins(a);
  }
  get parsedPlugins() {
    const t = this.plugins.menu.map((d) => {
      let u = d.position;
      return typeof d.position == "number" && (u = void 0), {
        ...d,
        position: u,
        kind: "menu",
        active: d.active ?? !1
      };
    }), e = this.plugins.editor.map((d) => ({
      ...d,
      position: void 0,
      kind: "editor",
      active: d.active ?? !1
    }));
    return [...t, ...e];
  }
  updateStoredPlugins(t) {
    const a = t.map((d) => d.src && d.active ? this.addContent(d) : d).map((d) => d?.official ? d : {
      ...[...this.getBuiltInPlugins(), ...this.parsedPlugins].find((s) => s.src === d.src),
      ...d
    });
    this.storePlugins(a);
  }
  storePlugins(t) {
    this.storedPlugins = t;
    const e = JSON.stringify(t.map(qc));
    localStorage.setItem("plugins", e);
  }
  getPluginConfigsFromLocalStorage() {
    const t = localStorage.getItem("plugins") ?? "[]";
    return JSON.parse(t);
  }
  get locale() {
    return navigator.language || "en-US";
  }
  get docs() {
    const t = {};
    return this.doc && (t[this.docName] = this.doc), t;
  }
  setPlugins(t) {
    const e = this.storedPlugins.map((a) => {
      const d = t.some((u) => u.name === a.name && u.src === a.src);
      return {
        ...a,
        active: d
      };
    });
    this.updateStoredPlugins(e);
  }
  loadPlugins() {
    const t = this.getPluginConfigsFromLocalStorage(), e = t.filter((o) => this.getBuiltInPlugins().some((s) => s.src === o.src)), a = t.filter((o) => !this.getBuiltInPlugins().some((s) => s.src === o.src)), u = [...this.getBuiltInPlugins().map((o) => {
      let s = e.find((n) => n.src === o.src);
      return {
        ...o,
        ...s,
        active: s?.active ?? o.activeByDefault
      };
    }), ...a];
    this.updateStoredPlugins(u);
  }
  async addExternalPlugin(t) {
    if (this.storedPlugins.some((a) => a.src === t.src)) return;
    const e = this.storedPlugins;
    e.push(t), this.storePlugins(e);
  }
  getBuiltInPlugins() {
    return Hc;
  }
  addContent(t) {
    const e = this.pluginTag(t.src);
    return this.loadedPlugins.has(e) || (this.loadedPlugins.add(e), import(t.src).then((a) => {
      customElements.define(e, a.default);
    })), {
      ...t,
      content: () => jc`<${e}
            .doc=${this.doc}
            .docName=${this.docName}
            .editCount=${this.historyState.editCount}
            .plugins=${this.storedPlugins}
            .docId=${this.docId}
            .pluginId=${t.src}
            .nsdoc=${this.nsdoc}
            .docs=${this.docs}
            .locale=${this.locale}
            class="${$t({
        plugin: !0,
        menu: t.kind === "menu",
        validator: t.kind === "validator",
        editor: t.kind === "editor"
      })}"
          ></${e}>`
    };
  }
  /**
   * Hashes `uri` using cyrb64 analogous to
   * https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js .
   * @returns a valid customElement tagName containing the URI hash.
   */
  pluginTag(t) {
    if (!this.pluginTags.has(t)) {
      let e = 3735928559, a = 1103547991;
      for (let d = 0, u; d < t.length; d++)
        u = t.charCodeAt(d), e = Math.imul(e ^ u, 2654435761), a = Math.imul(a ^ u, 1597334677);
      e = Math.imul(e ^ e >>> 16, 2246822507) ^ Math.imul(a ^ a >>> 13, 3266489909), a = Math.imul(a ^ a >>> 16, 2246822507) ^ Math.imul(e ^ e >>> 13, 3266489909), this.pluginTags.set(
        t,
        "oscd-plugin" + ((a >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0"))
      );
    }
    return this.pluginTags.get(t);
  }
};
dt([
  F({ attribute: !1 })
], rt.prototype, "doc", 2);
dt([
  F({ type: String })
], rt.prototype, "docName", 2);
dt([
  F({ type: String })
], rt.prototype, "docId", 2);
dt([
  ee()
], rt.prototype, "historyState", 2);
dt([
  F({ attribute: !1 })
], rt.prototype, "nsdoc", 2);
dt([
  F({ type: String })
], rt.prototype, "src", 1);
dt([
  ee()
], rt.prototype, "storedPlugins", 2);
dt([
  F({ type: Object })
], rt.prototype, "plugins", 2);
dt([
  ee()
], rt.prototype, "loadedPlugins", 2);
dt([
  ee()
], rt.prototype, "pluginTags", 2);
rt = dt([
  le("original-open-scd")
], rt);
function Uc() {
  return new CustomEvent("reset-plugins", { bubbles: !0, composed: !0 });
}
function Gc(t) {
  return new CustomEvent("add-external-plugin", {
    bubbles: !0,
    composed: !0,
    detail: { plugin: t }
  });
}
function Kc(t) {
  return new CustomEvent("set-plugins", {
    bubbles: !0,
    composed: !0,
    detail: { selectedPlugins: t }
  });
}
function jc(t, ...e) {
  const a = [...e], d = a.shift(), u = a.pop();
  if (d !== u)
    throw new Error(
      `Opening tag <${d}> does not match closing tag </${u}>.`
    );
  const o = [...t], s = o.shift(), h = o.shift(), n = o.pop(), i = o.pop();
  return o.unshift(`${s}${d}${h}`), o.push(`${i}${u}${n}`), T(o, ...a);
}
function qc(t) {
  return { ...t, content: void 0 };
}
const ut = {
  editor: "tab",
  menu: "play_circle",
  validator: "rule_folder",
  top: "play_circle",
  middle: "play_circle",
  bottom: "play_circle"
};
var Xc = Object.defineProperty, Zc = Object.getOwnPropertyDescriptor, Ve = (t, e, a, d) => {
  for (var u = d > 1 ? void 0 : d ? Zc(e, a) : e, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = (d ? s(e, a, u) : s(u)) || u);
  return d && u && Xc(e, a, u), u;
};
function Yc() {
  return new CustomEvent("open-drawer", { bubbles: !0, composed: !0 });
}
let Re = class extends $e {
  constructor() {
    super(...arguments), this.doc = null, this.docName = "", this.editCount = -1, this.activeTab = 0, this.plugins = [], this.validated = Promise.resolve(), this.shouldValidate = !1;
  }
  render() {
    return T`
      <div
        @open-plugin-download=${() => this.pluginDownloadUI.show()}
        @oscd-activate-editor=${this.handleActivateEditorByEvent}
        @oscd-run-menu=${this.handleRunMenuByEvent}
      >
        <slot></slot>
        ${this.renderHeader()} ${this.renderAside()} ${this.renderContent()}
        ${this.renderLanding()} ${this.renderPlugging()}
      </div>
    `;
  }
  renderPlugging() {
    return T` ${this.renderPluginUI()} ${this.renderDownloadUI()} `;
  }
  /** Renders the "Add Custom Plug-in" UI*/
  renderDownloadUI() {
    return T`
      <oscd-custom-plugin-dialog id="pluginAdd"></oscd-custom-plugin-dialog>
    `;
  }
  /**
   * Renders the plug-in management UI (turning plug-ins on/off)
   */
  renderPluginUI() {
    return T`
      <oscd-plugin-manager id="pluginManager" .plugins=${this.plugins}></oscd-plugin-manager>
    `;
  }
  // Computed properties
  get validators() {
    return this.plugins.filter(
      (t) => t.active && t.kind === "validator"
    );
  }
  get menuEntries() {
    return this.plugins.filter(
      (t) => t.active && t.kind === "menu"
    );
  }
  get topMenu() {
    return this.menuEntries.filter((t) => t.position === "top");
  }
  get middleMenu() {
    return this.menuEntries.filter((t) => t.position === "middle");
  }
  get bottomMenu() {
    return this.menuEntries.filter((t) => t.position === "bottom");
  }
  get menu() {
    const t = this.generateMenu(this.topMenu, "top"), e = this.generateMenu(this.middleMenu, "middle"), a = this.generateMenu(this.bottomMenu, "bottom"), d = this.generateValidatorMenus(this.validators);
    return e.length > 0 && e.push("divider"), a.length > 0 && a.push("divider"), [
      "divider",
      ...t,
      "divider",
      {
        icon: "undo",
        name: "undo",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(Ts());
        },
        disabled: () => !this.historyState.canUndo,
        kind: "static",
        content: () => T``
      },
      {
        icon: "redo",
        name: "redo",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(Rs());
        },
        disabled: () => !this.historyState.canRedo,
        kind: "static",
        content: () => T``
      },
      ...d,
      {
        icon: "list",
        name: "menu.viewLog",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(jt(!0, Pt.log));
        },
        kind: "static",
        content: () => T``
      },
      {
        icon: "history",
        name: "menu.viewHistory",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(jt(!0, Pt.history));
        },
        kind: "static",
        content: () => T``
      },
      {
        icon: "rule",
        name: "menu.viewDiag",
        actionItem: !0,
        action: () => {
          this.dispatchEvent(jt(!0, Pt.diagnostic));
        },
        kind: "static",
        content: () => T``
      },
      "divider",
      ...e,
      {
        icon: "settings",
        name: "settings.title",
        action: () => {
          this.dispatchEvent(hs(!0));
        },
        kind: "static",
        content: () => T``
      },
      ...a,
      {
        icon: "extension",
        name: "plugins.heading",
        action: () => this.pluginUI.show(),
        kind: "static",
        content: () => T``
      }
    ];
  }
  get editors() {
    return this.plugins.filter(
      (t) => t.active && t.kind === "editor"
    );
  }
  // Keyboard Shortcuts
  handleKeyPress(t) {
    if (!t.ctrlKey)
      return;
    const a = {
      m: () => this.menuUI.open = !this.menuUI.open,
      o: () => this.menuUI.querySelector('mwc-list-item[iconid="folder_open"]')?.click(),
      O: () => this.menuUI.querySelector('mwc-list-item[iconid="create_new_folder"]')?.click(),
      s: () => this.menuUI.querySelector('mwc-list-item[iconid="save"]')?.click(),
      P: () => this.pluginUI.show()
    }[t.key];
    a && (t.preventDefault(), a());
  }
  connectedCallback() {
    super.connectedCallback(), this.host.addEventListener("open-drawer", () => {
      this.menuUI.open = !0;
    }), this.host.addEventListener("close-drawer", async () => {
      this.menuUI.open = !1;
    }), this.host.addEventListener("validate", async () => {
      this.shouldValidate = !0, await this.validated, this.shouldValidate && (this.shouldValidate = !1, this.validated = Promise.allSettled(
        this.menuUI.querySelector("mwc-list").items.filter((t) => t.className === "validator").map(
          (t) => t.nextElementSibling.validate()
        )
      ).then(), this.dispatchEvent(at(this.validated)));
    }), this.handleKeyPress = this.handleKeyPress.bind(this), document.onkeydown = this.handleKeyPress, document.addEventListener("open-plugin-download", () => {
      this.pluginDownloadUI.show();
    }), this.onUserInfo = this.onUserInfo.bind(this), this.host.addEventListener("userinfo", this.onUserInfo);
  }
  generateMenu(t, e) {
    return t.map((a) => ({
      icon: a.icon || ut.menu,
      name: a.name,
      action: (d) => {
        this.dispatchEvent(
          at(
            d.target.items[d.detail.index].nextElementSibling.run()
          )
        );
      },
      disabled: () => a.requireDoc && this.doc === null,
      content: () => a.content ? a.content() : T``,
      kind: e
    }));
  }
  generateValidatorMenus(t) {
    return t.map((e) => ({
      icon: e.icon || ut.validator,
      name: e.name,
      action: (a) => {
        this.dispatchEvent(Is(e.src)), this.dispatchEvent(
          at(
            a.target.items[a.detail.index].nextElementSibling.validate()
          )
        );
      },
      disabled: () => this.doc === null,
      content: e.content ?? (() => T``),
      kind: "validator"
    }));
  }
  onUserInfo(t) {
    this.username = t.detail.name;
  }
  renderMenuItem(t) {
    const e = t !== "divider" && t.actionItem;
    return Qc(t) ? T`<li divider padded role="separator"></li>` : e ? T`` : T`
      <mwc-list-item
        class="${t.kind}"
        iconid="${t.icon}"
        graphic="icon"
        data-name="${t.name}"
        .disabled=${t.disabled?.() || !t.action}
        ><mwc-icon slot="graphic">${t.icon}</mwc-icon>
        <span>${G(t.name)}</span>
        ${t.hint ? T`<span slot="secondary"><tt>${t.hint}</tt></span>` : ""}
      </mwc-list-item>
      ${t.content ? t.content() : Nr}
    `;
  }
  renderActionItem(t) {
    return t === "divider" || !t.actionItem ? T`` : T`
      <mwc-icon-button
        slot="actionItems"
        icon="${t.icon}"
        label="${t.name}"
        ?disabled=${t.disabled?.() || !t.action}
        @click=${t.action}
      ></mwc-icon-button>`;
  }
  renderEditorTab({ name: t, icon: e }) {
    return T`<mwc-tab label=${t} icon=${e || "edit"}> </mwc-tab>`;
  }
  /** Renders top bar which features icon buttons for undo, redo, log, scl history and diagnostics*/
  renderHeader() {
    return T`<mwc-top-app-bar-fixed>
      <mwc-icon-button
        icon="menu"
        label="Menu"
        slot="navigationIcon"
        @click=${() => this.menuUI.open = !0}
      ></mwc-icon-button>
      <div slot="title" id="title">${this.docName}</div>
      ${this.username != null ? T`<span
                  id="userField"
                  slot="actionItems"
                  style="font-family:Roboto"
                  >${G("userinfo.loggedInAs", {
      name: this.username
    })}</span
                >` : ""}
      ${this.menu.map(this.renderActionItem)}
    </mwc-top-app-bar-fixed>`;
  }
  /**
   * Renders a drawer toolbar featuring the scl filename, enabled menu plugins,
   * settings, help, scl history and plug-ins management
   */
  renderAside() {
    return T`
      <mwc-drawer class="mdc-theme--surface" hasheader type="modal" id="menu">
        <span slot="title">${G("menu.title")}</span>
        ${t(this.docName)}
        <mwc-list
          wrapFocus
          @action=${e(this.menu)}
        >
          ${this.menu.map(this.renderMenuItem)}
        </mwc-list>
      </mwc-drawer>
    `;
    function t(a) {
      return a ? T`<span slot="subtitle">${a}</span>` : T``;
    }
    function e(a) {
      return function(u) {
        u.target instanceof _n && a.filter(
          (o) => o !== "divider" && !o.actionItem
        )[u.detail.index]?.action?.(u);
      };
    }
  }
  calcActiveEditors() {
    const t = !!this.doc;
    return this.editors.filter((e) => e.requireDoc === !1 || t);
  }
  /** Renders the enabled editor plugins and a tab bar to switch between them*/
  renderContent() {
    const t = this.calcActiveEditors().map(this.renderEditorTab);
    if (!(t.length > 0))
      return T``;
    return T`
      <mwc-tab-bar
        @MDCTabBar:activated=${this.handleActivatedEditorTabByUser}
        activeIndex=${this.activeTab}
      >
        ${t}
      </mwc-tab-bar>
      ${a(this.editors, this.activeTab, this.doc)}
    `;
    function a(d, u, o) {
      const s = d[u];
      if (s?.requireDoc && !o)
        return T``;
      const n = s?.content;
      return n ? T`${n()}` : T``;
    }
  }
  handleActivatedEditorTabByUser(t) {
    const e = t.detail.index;
    this.activateTab(e);
  }
  handleActivateEditorByEvent(t) {
    const { name: e, src: a } = t.detail, u = this.calcActiveEditors().findIndex((o) => o.name === e || o.src === a);
    u < 0 || this.activateTab(u);
  }
  activateTab(t) {
    this.activeTab = t;
  }
  handleRunMenuByEvent(t) {
    this.menuUI.open = !0;
    const a = this.menuUI.querySelector(`[data-name="${t.detail.name}"]`).nextElementSibling;
    a && a.run();
  }
  /**
   * Renders the landing buttons (open project and new project)
   * it no document loaded we display the menu item that are in the position
   * 'top' and are not disabled
   *
   * To enable replacement of this part we have to convert it to either an addon
   * or a plugin
   */
  renderLanding() {
    if (this.doc)
      return T``;
    return T`
      <div class="landing">
        ${t(this.menu, this.menuUI)}
      </div>`;
    function t(e, a) {
      return e.filter((o) => o !== "divider").map((o, s) => o.kind !== "top" || o.disabled?.() ? T`` : T`
              <mwc-icon-button
                class="landing_icon"
                icon="${o.icon}"
                @click="${() => u(s)}"
              >
                <div class="landing_label">${o.name}</div>
              </mwc-icon-button>
            `);
      function u(o) {
        a.querySelector("mwc-list").items[o].click();
      }
    }
  }
};
Re.styles = _e`
    mwc-drawer {
      position: absolute;
      top: 0;
    }

    mwc-top-app-bar-fixed {
      --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
    } /* hack to fix disabled icon buttons rendering black */

    mwc-tab {
      background-color: var(--primary);
      --mdc-theme-primary: var(--mdc-theme-on-primary);
    }

    input[type='file'] {
      display: none;
    }

    mwc-dialog {
      --mdc-dialog-max-width: 98vw;
    }

    mwc-dialog > form {
      display: flex;
      flex-direction: column;
    }

    mwc-dialog > form > * {
      display: block;
      margin-top: 16px;
    }

    mwc-linear-progress {
      position: fixed;
      --mdc-linear-progress-buffer-color: var(--primary);
      --mdc-theme-primary: var(--secondary);
      left: 0px;
      top: 0px;
      width: 100%;
      pointer-events: none;
      z-index: 1000;
    }

    tt {
      font-family: 'Roboto Mono', monospace;
      font-weight: 300;
    }

    .landing {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .landing_icon:hover {
      box-shadow: 0 12px 17px 2px rgba(0, 0, 0, 0.14),
        0 5px 22px 4px rgba(0, 0, 0, 0.12), 0 7px 8px -4px rgba(0, 0, 0, 0.2);
    }

    .landing_icon {
      margin: 12px;
      border-radius: 16px;
      width: 160px;
      height: 140px;
      text-align: center;
      color: var(--mdc-theme-on-secondary);
      background: var(--secondary);
      --mdc-icon-button-size: 100px;
      --mdc-icon-size: 100px;
      --mdc-ripple-color: rgba(0, 0, 0, 0);
      box-shadow: rgb(0 0 0 / 14%) 0px 6px 10px 0px,
        rgb(0 0 0 / 12%) 0px 1px 18px 0px, rgb(0 0 0 / 20%) 0px 3px 5px -1px;
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .landing_label {
      width: 160px;
      height: 50px;
      margin-top: 100px;
      margin-left: -30px;
      font-family: 'Roboto', sans-serif;
    }

    .plugin.menu {
      display: flex;
    }

    .plugin.validator {
      display: flex;
    }
  `;
Ve([
  F({ attribute: !1 })
], Re.prototype, "doc", 2);
Ve([
  F({ type: String })
], Re.prototype, "docName", 2);
Ve([
  F({ type: Number })
], Re.prototype, "editCount", 2);
Ve([
  F({ type: Number })
], Re.prototype, "activeTab", 2);
Ve([
  F({ type: Array })
], Re.prototype, "plugins", 2);
Ve([
  F({ type: Object })
], Re.prototype, "host", 2);
Ve([
  F({ type: Object })
], Re.prototype, "historyState", 2);
Ve([
  F({ type: String })
], Re.prototype, "username", 2);
Ve([
  ee()
], Re.prototype, "validated", 2);
Ve([
  ee()
], Re.prototype, "shouldValidate", 2);
Ve([
  X("#menu")
], Re.prototype, "menuUI", 2);
Ve([
  X("#pluginManager")
], Re.prototype, "pluginUI", 2);
Ve([
  X("#pluginList")
], Re.prototype, "pluginList", 2);
Ve([
  X("#pluginAdd")
], Re.prototype, "pluginDownloadUI", 2);
Re = Ve([
  le("compas-layout")
], Re);
function Qc(t) {
  return t === "divider";
}
Or({ loader: ms, empty: (t) => t });
const Jc = localStorage.getItem("language") || "en";
on(Jc);
var ed = Object.defineProperty, Ms = (t, e, a, d) => {
  for (var u = void 0, o = t.length - 1, s; o >= 0; o--)
    (s = t[o]) && (u = s(e, a, u) || u);
  return u && ed(e, a, u), u;
};
class Ds extends $e {
  async run() {
    this.compasOpenElement.selectedType = void 0, await this.compasOpenElement.requestUpdate(), this.dispatchEvent(Yc()), this.dialog.show();
  }
  async openDoc(e) {
    e.detail.localFile ? (this.dispatchEvent(Ct({ kind: "reset" })), this.dispatchEvent(
      In(e.detail.doc, e.detail.docName, {
        detail: { docId: void 0 }
      })
    )) : fo(this, e.detail.doc, e.detail.docName), this.dialog.close();
  }
  render() {
    return T`<mwc-dialog
      id="compas-open-dlg"
      heading="${Ce("compas.open.title")}"
    >
      <compas-open
        @doc-retrieved=${(e) => {
      this.dispatchEvent(at(this.openDoc(e)));
    }}
      >
      </compas-open>
      <mwc-button
        slot="secondaryAction"
        icon=""
        label="${Ce("close")}"
        dialogAction="close"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      >
      </mwc-button>
    </mwc-dialog>`;
  }
  static {
    this.styles = _e`
    mwc-dialog {
      --mdc-dialog-min-width: 23vw;
      --mdc-dialog-max-width: 92vw;
    }
  `;
  }
}
Ms([
  X("mwc-dialog#compas-open-dlg")
], Ds.prototype, "dialog");
Ms([
  X("compas-open")
], Ds.prototype, "compasOpenElement");
export {
  Ds as default
};
