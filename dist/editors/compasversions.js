import { LitElement as Z, query as L, property as p, state as S, html as d, css as K, customElement as z, queryAsync as yt, eventOptions as pi } from "lit-element";
import { NodePart as Qi, AttributePart as Yi, directive as mi, svg as xt } from "lit-html";
import "@material/mwc-dialog";
import "@material/mwc-fab";
import "@material/mwc-icon";
import "@material/mwc-icon-button";
import "@material/mwc-list";
import { Select as er } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as tr } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@material/mwc-button";
const ir = 1e3 * 60, Nt = "langChanged";
function rr(t, e, i) {
  return Object.entries(ct(e || {})).reduce((r, [n, c]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(ct(c))), t);
}
function nr(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function ct(t) {
  return typeof t == "function" ? t() : t;
}
const cr = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: nr,
  interpolate: rr,
  translationCache: {}
});
let or = cr();
function sr(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(Nt, i, e), () => window.removeEventListener(Nt, i);
}
function C(t, e, i = or) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? ct(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function ui(t) {
  return t instanceof Qi ? t.startNode.isConnected : t instanceof Yi ? t.committer.element.isConnected : t.element.isConnected;
}
function ar(t) {
  for (const [e] of t)
    ui(e) || t.delete(e);
}
function lr(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function dr(t, e) {
  setInterval(() => lr(() => ar(t)), e);
}
const kt = /* @__PURE__ */ new Map();
function pr() {
  sr((t) => {
    for (const [e, i] of kt)
      ui(e) && hi(e, i, t);
  });
}
pr();
dr(kt, ir);
function hi(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
const mr = mi((t) => (e) => {
  kt.set(e, t), hi(e, t);
}), $ = (t, e, i) => mr(() => C(t, e, i));
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
const fi = /* @__PURE__ */ new WeakMap(), je = (t) => (...e) => {
  const i = t(...e);
  return fi.set(i, !0), i;
}, ot = (t) => typeof t == "function" && fi.has(t);
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
const It = typeof window < "u" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== void 0, ur = (t, e, i = null, r = null) => {
  for (; e !== i; ) {
    const n = e.nextSibling;
    t.insertBefore(e, r), e = n;
  }
}, bi = (t, e, i = null) => {
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
const Ae = {}, Rt = {};
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
const St = `{{lit-${String(Math.random()).slice(2)}}}`, hr = `<!--${St}-->`, fr = "$lit$", br = (t) => t.index !== -1, fe = () => document.createComment(""), gr = (
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
class Lt {
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
    const e = It ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), i = [], r = this.template.parts, n = document.createTreeWalker(e, 133, null, !1);
    let c = 0, o = 0, s, a = n.nextNode();
    for (; c < r.length; ) {
      if (s = r[c], !br(s)) {
        this.__parts.push(void 0), c++;
        continue;
      }
      for (; o < s.index; )
        o++, a.nodeName === "TEMPLATE" && (i.push(a), n.currentNode = a.content), (a = n.nextNode()) === null && (n.currentNode = i.pop(), a = n.nextNode());
      if (s.type === "node") {
        const u = this.processor.handleTextExpression(this.options);
        u.insertAfterNode(a.previousSibling), this.__parts.push(u);
      } else
        this.__parts.push(...this.processor.handleAttributeExpressions(a, s.name, s.strings, this.options));
      c++;
    }
    return It && (document.adoptNode(e), customElements.upgrade(e)), e;
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
const Ft = window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t }), vr = ` ${St} `;
class yr {
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
      const c = this.strings[n], o = c.lastIndexOf("<!--");
      r = (o > -1 || r) && c.indexOf("-->", o + 1) === -1;
      const s = gr.exec(c);
      s === null ? i += c + (r ? vr : hr) : i += c.substr(0, s.index) + s[1] + s[2] + fr + s[3] + St;
    }
    return i += this.strings[e], i;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    let i = this.getHTML();
    return Ft !== void 0 && (i = Ft.createHTML(i)), e.innerHTML = i, e;
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
const gi = (t) => t === null || !(typeof t == "object" || typeof t == "function"), xr = (t) => Array.isArray(t) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
!!(t && t[Symbol.iterator]);
class We {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== Ae && (!gi(e) || e !== this.value) && (this.value = e, ot(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; ot(this.value); ) {
      const e = this.value;
      this.value = Ae, e(this);
    }
    this.value !== Ae && this.committer.commit();
  }
}
class Xe {
  constructor(e) {
    this.value = void 0, this.__pendingValue = void 0, this.options = e;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  appendInto(e) {
    this.startNode = e.appendChild(fe()), this.endNode = e.appendChild(fe());
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
    e.__insert(this.startNode = fe()), e.__insert(this.endNode = fe());
  }
  /**
   * Inserts this part after the `ref` part.
   *
   * This part must be empty, as its contents are not automatically moved.
   */
  insertAfterPart(e) {
    e.__insert(this.startNode = fe()), this.endNode = e.endNode, e.endNode = this.startNode;
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    if (this.startNode.parentNode === null)
      return;
    for (; ot(this.__pendingValue); ) {
      const i = this.__pendingValue;
      this.__pendingValue = Ae, i(this);
    }
    const e = this.__pendingValue;
    e !== Ae && (gi(e) ? e !== this.value && this.__commitText(e) : e instanceof yr ? this.__commitTemplateResult(e) : e instanceof Node ? this.__commitNode(e) : xr(e) ? this.__commitIterable(e) : e === Rt ? (this.value = Rt, this.clear()) : this.__commitText(e));
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
    if (this.value instanceof Lt && this.value.template === i)
      this.value.update(e.values);
    else {
      const r = new Lt(i, e.processor, this.options), n = r._clone();
      r.update(e.values), this.__commitNode(n), this.value = r;
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || (this.value = [], this.clear());
    const i = this.value;
    let r = 0, n;
    for (const c of e)
      n = i[r], n === void 0 && (n = new Xe(this.options), i.push(n), r === 0 ? n.appendIntoPart(this) : n.insertAfterPart(i[r - 1])), n.setValue(c), n.commit(), r++;
    r < i.length && (i.length = r, this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    bi(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class vi extends We {
}
let kr = !1;
(() => {
  try {
    const t = {
      get capture() {
        return kr = !0, !1;
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
var st = function(t, e) {
  return st = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, st(t, e);
};
function yi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  st(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var ve = function() {
  return ve = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    }
    return e;
  }, ve.apply(this, arguments);
};
function l(t, e, i, r) {
  var n = arguments.length, c = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(t, e, i, r);
  else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (c = (n < 3 ? o(c) : n > 3 ? o(e, i, c) : o(e, i)) || c);
  return n > 3 && c && Object.defineProperty(e, i, c), c;
}
function Fe(t) {
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
function Sr(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function _r(t) {
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
const xi = () => {
}, wr = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", xi, wr);
document.removeEventListener("x", xi);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ki extends Z {
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
var Si = (
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
var Cr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, $r = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Vt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function Ar(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, c = r + i.left, o = n + i.top, s, a;
  if (t.type === "touchstart") {
    var u = t;
    s = u.changedTouches[0].pageX - c, a = u.changedTouches[0].pageY - o;
  } else {
    var b = t;
    s = b.pageX - c, a = b.pageY - o;
  }
  return { x: s, y: a };
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
var Pt = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Tt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ve = [], Er = (
  /** @class */
  function(t) {
    yi(e, t);
    function e(i) {
      var r = t.call(this, ve(ve({}, e.defaultAdapter), i)) || this;
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
        return Cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vt;
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
        var n = e.cssClasses, c = n.ROOT, o = n.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.addClass(c), i.adapter.isUnbounded() && (i.adapter.addClass(o), i.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var i = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, n = r.ROOT, c = r.UNBOUNDED;
        requestAnimationFrame(function() {
          i.adapter.removeClass(n), i.adapter.removeClass(c), i.removeCssVars();
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
          for (var c = Fe(Pt), o = c.next(); !o.done; o = c.next()) {
            var s = o.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (a) {
          r = { error: a };
        } finally {
          try {
            o && !o.done && (n = c.return) && n.call(c);
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
          for (var c = Fe(Tt), o = c.next(); !o.done; o = c.next()) {
            var s = o.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (a) {
          r = { error: a };
        } finally {
          try {
            o && !o.done && (n = c.return) && n.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var i, r;
      try {
        for (var n = Fe(Pt), c = n.next(); !c.done; c = n.next()) {
          var o = c.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var i, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var n = Fe(Tt), c = n.next(); !c.done; c = n.next()) {
          var o = c.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (s) {
        i = { error: s };
      } finally {
        try {
          c && !c.done && (r = n.return) && r.call(n);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var i = this, r = e.strings, n = Object.keys(r);
      n.forEach(function(c) {
        c.indexOf("VAR_") === 0 && i.adapter.updateCssVariable(r[c], null);
      });
    }, e.prototype.activateImpl = function(i) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var n = this.activationState;
        if (!n.isActivated) {
          var c = this.previousActivationEvent, o = c && i !== void 0 && c.type !== i.type;
          if (!o) {
            n.isActivated = !0, n.isProgrammatic = i === void 0, n.activationEvent = i, n.wasActivatedByPointer = n.isProgrammatic ? !1 : i !== void 0 && (i.type === "mousedown" || i.type === "touchstart" || i.type === "pointerdown");
            var s = i !== void 0 && Ve.length > 0 && Ve.some(function(a) {
              return r.adapter.containsEventTarget(a);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Ve.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ve = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, c = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, s = o.FG_DEACTIVATION, a = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var b = "", m = "";
      if (!this.adapter.isUnbounded()) {
        var g = this.getFgTranslationCoordinates(), v = g.startPoint, y = g.endPoint;
        b = v.x + "px, " + v.y + "px", m = y.x + "px, " + y.y + "px";
      }
      this.adapter.updateCssVariable(n, b), this.adapter.updateCssVariable(c, m), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(a), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, c;
      n ? c = Ar(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : c = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, c = {
        x: c.x - this.initialSize / 2,
        y: c.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: c, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var i = this, r = e.cssClasses.FG_DEACTIVATION, n = this.activationState, c = n.hasDeactivationUXRun, o = n.isActivated, s = c || !o;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        i.adapter.removeClass(r);
      }, Vt.FG_DEACTIVATION_MS));
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
        var n = ve({}, r);
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
        var o = Math.sqrt(Math.pow(i.frame.width, 2) + Math.pow(i.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : n();
      var c = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && c % 2 !== 0 ? this.initialSize = c - 1 : this.initialSize = c, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var i = e.strings, r = i.VAR_FG_SIZE, n = i.VAR_LEFT, c = i.VAR_TOP, o = i.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(n, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(c, this.unboundedCoords.top + "px"));
    }, e;
  }(Si)
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
class Dr {
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
const Mt = /* @__PURE__ */ new WeakMap(), Se = je((t) => (e) => {
  if (!(e instanceof We) || e instanceof vi || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Mt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Mt.set(e, n = /* @__PURE__ */ new Set()));
  const c = r.classList || new Dr(r);
  n.forEach((o) => {
    o in t || (c.remove(o), n.delete(o));
  });
  for (const o in t) {
    const s = t[o];
    s != n.has(o) && (s ? (c.add(o), n.add(o)) : (c.remove(o), n.delete(o)));
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
const Ot = /* @__PURE__ */ new WeakMap(), Nr = je((t) => (e) => {
  if (!(e instanceof We) || e instanceof vi || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Ot.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Ot.set(e, n = /* @__PURE__ */ new Set())), n.forEach((c) => {
    c in t || (n.delete(c), c.indexOf("-") === -1 ? r[c] = null : r.removeProperty(c));
  });
  for (const c in t)
    n.add(c), c.indexOf("-") === -1 ? r[c] = t[c] : r.setProperty(c, t[c]);
});
class I extends ki {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Er;
  }
  get isActive() {
    return Sr(this.parentElement || this, ":active");
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
    return d`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Se(r)}"
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
l([
  L(".mdc-ripple-surface")
], I.prototype, "mdcRoot", void 0);
l([
  p({ type: Boolean })
], I.prototype, "primary", void 0);
l([
  p({ type: Boolean })
], I.prototype, "accent", void 0);
l([
  p({ type: Boolean })
], I.prototype, "unbounded", void 0);
l([
  p({ type: Boolean })
], I.prototype, "disabled", void 0);
l([
  p({ type: Boolean })
], I.prototype, "activated", void 0);
l([
  p({ type: Boolean })
], I.prototype, "selected", void 0);
l([
  p({ type: Boolean })
], I.prototype, "internalUseStateLayerCustomProperties", void 0);
l([
  S()
], I.prototype, "hovering", void 0);
l([
  S()
], I.prototype, "bgFocused", void 0);
l([
  S()
], I.prototype, "fgActivation", void 0);
l([
  S()
], I.prototype, "fgDeactivation", void 0);
l([
  S()
], I.prototype, "fgScale", void 0);
l([
  S()
], I.prototype, "fgSize", void 0);
l([
  S()
], I.prototype, "translateStart", void 0);
l([
  S()
], I.prototype, "translateEnd", void 0);
l([
  S()
], I.prototype, "leftPos", void 0);
l([
  S()
], I.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Ir = K`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let at = class extends I {
};
at.styles = [Ir];
at = l([
  z("mwc-ripple")
], at);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ne = (t) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e, i) => {
    if (e.constructor._observers) {
      if (!e.constructor.hasOwnProperty("_observers")) {
        const r = e.constructor._observers;
        e.constructor._observers = /* @__PURE__ */ new Map(), r.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (n, c) => e.constructor._observers.set(c, n)
        );
      }
    } else {
      e.constructor._observers = /* @__PURE__ */ new Map();
      const r = e.updated;
      e.updated = function(n) {
        r.call(this, n), n.forEach((c, o) => {
          const a = this.constructor._observers.get(o);
          a !== void 0 && a.call(this, this[o], c);
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
class _t {
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
class F extends Z {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new _t(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : d``, r = this.hasMeta ? this.renderMeta() : d``;
    return d`
      ${this.renderRipple()}
      ${i}
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${Se(e)}">
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
l([
  L("slot")
], F.prototype, "slotElement", void 0);
l([
  yt("mwc-ripple")
], F.prototype, "ripple", void 0);
l([
  p({ type: String })
], F.prototype, "value", void 0);
l([
  p({ type: String, reflect: !0 })
], F.prototype, "group", void 0);
l([
  p({ type: Number, reflect: !0 })
], F.prototype, "tabindex", void 0);
l([
  p({ type: Boolean, reflect: !0 }),
  Ne(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], F.prototype, "disabled", void 0);
l([
  p({ type: Boolean, reflect: !0 })
], F.prototype, "twoline", void 0);
l([
  p({ type: Boolean, reflect: !0 })
], F.prototype, "activated", void 0);
l([
  p({ type: String, reflect: !0 })
], F.prototype, "graphic", void 0);
l([
  p({ type: Boolean })
], F.prototype, "multipleGraphics", void 0);
l([
  p({ type: Boolean })
], F.prototype, "hasMeta", void 0);
l([
  p({ type: Boolean, reflect: !0 }),
  Ne(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], F.prototype, "noninteractive", void 0);
l([
  p({ type: Boolean, reflect: !0 }),
  Ne(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], F.prototype, "selected", void 0);
l([
  S()
], F.prototype, "shouldRenderRipple", void 0);
l([
  S()
], F.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wt = K`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let lt = class extends F {
};
lt.styles = [wt];
lt = l([
  z("mwc-list-item")
], lt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function Rr(t, e, i) {
  const r = t.constructor;
  if (!i) {
    const s = `__${e}`;
    if (i = r.getPropertyDescriptor(e, s), !i)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const n = i;
  let c = "";
  if (!n.set)
    throw new Error(`@ariaProperty requires a setter for ${e}`);
  const o = {
    configurable: !0,
    enumerable: !0,
    set(s) {
      c === "" && (c = r.getPropertyOptions(e).attribute), this.hasAttribute(c) && this.removeAttribute(c), n.set.call(this, s);
    }
  };
  return n.get && (o.get = function() {
    return n.get.call(this);
  }), o;
}
function Ie(t, e, i) {
  if (e !== void 0)
    return Rr(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ct extends ki {
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
Ct.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const et = /* @__PURE__ */ new WeakMap(), ae = je((t) => (e) => {
  const i = et.get(e);
  if (t === void 0 && e instanceof We) {
    if (i !== void 0 || !et.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  et.set(e, t);
});
class V extends Ct {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new _t(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(e) {
    const i = e.get("indeterminate"), r = e.get("checked"), n = e.get("disabled");
    if (i !== void 0 || r !== void 0 || n !== void 0) {
      const c = this.calculateAnimationStateName(!!r, !!i, !!n), o = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${c}-${o}`;
    }
    super.update(e);
  }
  calculateAnimationStateName(e, i, r) {
    return r ? "disabled" : i ? "indeterminate" : e ? "checked" : "unchecked";
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
    return d`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Se(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ae(this.name)}"
              aria-checked="${ae(r)}"
              aria-label="${ae(this.ariaLabel)}"
              aria-labelledby="${ae(this.ariaLabelledBy)}"
              aria-describedby="${ae(this.ariaDescribedBy)}"
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
l([
  L(".mdc-checkbox")
], V.prototype, "mdcRoot", void 0);
l([
  L("input")
], V.prototype, "formElement", void 0);
l([
  p({ type: Boolean, reflect: !0 })
], V.prototype, "checked", void 0);
l([
  p({ type: Boolean })
], V.prototype, "indeterminate", void 0);
l([
  p({ type: Boolean, reflect: !0 })
], V.prototype, "disabled", void 0);
l([
  p({ type: String, reflect: !0 })
], V.prototype, "name", void 0);
l([
  p({ type: String })
], V.prototype, "value", void 0);
l([
  Ie,
  p({ type: String, attribute: "aria-label" })
], V.prototype, "ariaLabel", void 0);
l([
  Ie,
  p({ type: String, attribute: "aria-labelledby" })
], V.prototype, "ariaLabelledBy", void 0);
l([
  Ie,
  p({ type: String, attribute: "aria-describedby" })
], V.prototype, "ariaDescribedBy", void 0);
l([
  p({ type: Boolean })
], V.prototype, "reducedTouchTarget", void 0);
l([
  S()
], V.prototype, "animationClass", void 0);
l([
  S()
], V.prototype, "shouldRenderRipple", void 0);
l([
  S()
], V.prototype, "focused", void 0);
l([
  S()
], V.prototype, "useStateLayerCustomProperties", void 0);
l([
  yt("mwc-ripple")
], V.prototype, "ripple", void 0);
l([
  pi({ passive: !0 })
], V.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Lr = K`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let dt = class extends V {
};
dt.styles = [Lr];
dt = l([
  z("mwc-checkbox")
], dt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Re extends F {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, n = this.hasMeta && this.left ? this.renderMeta() : d``, c = this.renderRipple();
    return d`
      ${c}
      ${r}
      ${this.left ? "" : i}
      <span class=${Se(e)}>
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
l([
  L("slot")
], Re.prototype, "slotElement", void 0);
l([
  L("mwc-checkbox")
], Re.prototype, "checkboxElement", void 0);
l([
  p({ type: Boolean })
], Re.prototype, "left", void 0);
l([
  p({ type: String, reflect: !0 })
], Re.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const _i = K`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let pt = class extends Re {
};
pt.styles = [wt, _i];
pt = l([
  z("mwc-check-list-item")
], pt);
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
const zt = (t, e) => {
  const i = t.startNode.parentNode, r = e === void 0 ? t.endNode : e.startNode, n = i.insertBefore(fe(), r);
  i.insertBefore(fe(), r);
  const c = new Xe(t.options);
  return c.insertAfterNode(n), c;
}, me = (t, e) => (t.setValue(e), t.commit(), t), tt = (t, e, i) => {
  const r = t.startNode.parentNode, n = i ? i.startNode : t.endNode, c = e.endNode.nextSibling;
  c !== n && ur(r, e.startNode, c, n);
}, it = (t) => {
  bi(t.startNode.parentNode, t.startNode, t.endNode.nextSibling);
}, Ht = (t, e, i) => {
  const r = /* @__PURE__ */ new Map();
  for (let n = e; n <= i; n++)
    r.set(t[n], n);
  return r;
}, qt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Pe = je((t, e, i) => {
  let r;
  return i === void 0 ? i = e : e !== void 0 && (r = e), (n) => {
    if (!(n instanceof Xe))
      throw new Error("repeat can only be used in text bindings");
    const c = qt.get(n) || [], o = Ut.get(n) || [], s = [], a = [], u = [];
    let b = 0;
    for (const A of t)
      u[b] = r ? r(A, b) : b, a[b] = i(A, b), b++;
    let m, g, v = 0, y = c.length - 1, x = 0, w = a.length - 1;
    for (; v <= y && x <= w; )
      if (c[v] === null)
        v++;
      else if (c[y] === null)
        y--;
      else if (o[v] === u[x])
        s[x] = me(c[v], a[x]), v++, x++;
      else if (o[y] === u[w])
        s[w] = me(c[y], a[w]), y--, w--;
      else if (o[v] === u[w])
        s[w] = me(c[v], a[w]), tt(n, c[v], s[w + 1]), v++, w--;
      else if (o[y] === u[x])
        s[x] = me(c[y], a[x]), tt(n, c[y], c[v]), y--, x++;
      else if (m === void 0 && (m = Ht(u, x, w), g = Ht(o, v, y)), !m.has(o[v]))
        it(c[v]), v++;
      else if (!m.has(o[y]))
        it(c[y]), y--;
      else {
        const A = g.get(u[x]), M = A !== void 0 ? c[A] : null;
        if (M === null) {
          const ce = zt(n, c[v]);
          me(ce, a[x]), s[x] = ce;
        } else
          s[x] = me(M, a[x]), tt(n, M, c[v]), c[A] = null;
        x++;
      }
    for (; x <= w; ) {
      const A = zt(n, s[w + 1]);
      me(A, a[x]), s[x++] = A;
    }
    for (; v <= y; ) {
      const A = c[v++];
      A !== null && it(A);
    }
    qt.set(n, s), Ut.set(n, u);
  };
});
function Fr(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([r, n]) => {
    n === null ? i.removeAttribute(r) : i.setAttribute(r, n);
  }), i;
}
var Vr = Object.defineProperty, Pr = Object.getOwnPropertyDescriptor, W = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Pr(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = (r ? o(e, i, n) : o(n)) || n);
  return r && n && Vr(e, i, n), n;
};
let G = class extends tr {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(C("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (t) => d`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? C("textfield.noMultiplier") : t}</mwc-list-item
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
W([
  p({ type: Boolean })
], G.prototype, "nullable", 2);
W([
  p({ type: Array })
], G.prototype, "multipliers", 2);
W([
  p({ type: String })
], G.prototype, "multiplier", 1);
W([
  p({ type: String })
], G.prototype, "unit", 2);
W([
  S()
], G.prototype, "null", 1);
W([
  p({ type: String })
], G.prototype, "maybeValue", 1);
W([
  p({ type: String })
], G.prototype, "defaultValue", 2);
W([
  p({ type: Array })
], G.prototype, "reservedValues", 2);
W([
  L("mwc-switch")
], G.prototype, "nullSwitch", 2);
W([
  L("mwc-menu")
], G.prototype, "multiplierMenu", 2);
W([
  L("mwc-icon-button")
], G.prototype, "multiplierButton", 2);
G = W([
  z("wizard-textfield")
], G);
var Tr = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, xe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Mr(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = (r ? o(e, i, n) : o(n)) || n);
  return r && n && Tr(e, i, n), n;
};
let re = class extends er {
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
xe([
  p({ type: Boolean })
], re.prototype, "nullable", 2);
xe([
  S()
], re.prototype, "null", 1);
xe([
  p({ type: String })
], re.prototype, "maybeValue", 1);
xe([
  p({ type: String })
], re.prototype, "defaultValue", 2);
xe([
  p({ type: Array })
], re.prototype, "reservedValues", 2);
xe([
  L("mwc-switch")
], re.prototype, "nullSwitch", 2);
re = xe([
  z("wizard-select")
], re);
var Or = Object.defineProperty, zr = Object.getOwnPropertyDescriptor, j = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? zr(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = (r ? o(e, i, n) : o(n)) || n);
  return r && n && Or(e, i, n), n;
};
let U = class extends Z {
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
j([
  p({ type: String })
], U.prototype, "label", 2);
j([
  p({ type: String })
], U.prototype, "helper", 2);
j([
  p({ type: Boolean })
], U.prototype, "nullable", 2);
j([
  p({ type: Boolean })
], U.prototype, "defaultChecked", 2);
j([
  p({ type: String })
], U.prototype, "maybeValue", 1);
j([
  p({ type: Boolean })
], U.prototype, "disabled", 2);
j([
  S()
], U.prototype, "null", 1);
j([
  S()
], U.prototype, "checked", 1);
j([
  S()
], U.prototype, "deactivateCheckbox", 2);
j([
  S()
], U.prototype, "formfieldLabel", 1);
j([
  L("mwc-switch")
], U.prototype, "nullSwitch", 2);
j([
  L("mwc-checkbox")
], U.prototype, "checkbox", 2);
U = j([
  z("wizard-checkbox")
], U);
function Hr(t) {
  return typeof t == "function";
}
function qr(t) {
  return t instanceof G || t instanceof re || t instanceof U ? t.maybeValue : t.value ?? null;
}
function B(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Hr(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function H(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const N = ":not(*)";
function Ur(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Gr(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? N : `${t}[version="${i}"][revision="${r}"]`;
}
function Gt(t) {
  return E(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Bt(t, e) {
  const [i, r] = H(e), n = R[t].parents.flatMap(
    (c) => P(c, i).split(",")
  );
  return O(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((c) => c.join("")).join(",");
}
function Br(t) {
  const [e, i, r, n, c, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => t.getAttribute(s));
  return e === "None" ? `${E(t.parentElement)}>(${n} ${o} ${c})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${c ?? ""}`;
}
function jr(t, e) {
  if (e.endsWith(")")) {
    const [g, v] = H(e), [y, x, w] = v.substring(1, v.length - 1).split(" ");
    if (!y || !x) return N;
    const A = R[t].parents.flatMap(
      (M) => P(M, g).split(",")
    );
    return O(
      A,
      [">"],
      [`${t}[iedName="None"][lnClass="${y}"][lnType="${x}"][lnInst="${w}"]`]
    ).map((M) => M.join("")).join(",");
  }
  const [i, r, n, c, o] = e.split(/[ /]/);
  if (!i || !r || !c) return N;
  const [
    s,
    a,
    u,
    b,
    m
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return O(
    [t],
    s,
    a,
    u,
    b,
    m
  ).map((g) => g.join("")).join(",");
}
function Wr(t) {
  return `${E(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Xr(t, e) {
  const [i, r] = H(e), [n, c] = r.split(" ");
  return `${P(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${c}"]`;
}
function Zr(t) {
  return `${E(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Kr(t, e) {
  const [i, r] = H(e);
  return r ? `${P(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : N;
}
function Jr(t) {
  return `${E(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Qr(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : N;
}
function Yr(t) {
  const e = t.textContent, [i, r, n, c, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${E(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${c ?? ""} ${o ?? ""}`;
}
function en(t, e) {
  const [i, r] = H(e), [n, c, o, s, a, u] = r.split(/[ /]/), [
    b,
    m,
    g,
    v,
    y,
    x
  ] = [
    R[t].parents.flatMap(
      (w) => P(w, i).split(",")
    ),
    [`${n}`],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return O(
    b,
    [">"],
    [t],
    m,
    g,
    v,
    y,
    x
  ).map((w) => w.join("")).join(",");
}
function tn(t) {
  const [e, i, r, n, c, o, s, a] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((b) => t.getAttribute(b)), u = `${e}/${i ?? ""} ${r} ${n ?? ""}.${c} ${o || ""}`;
  return `${E(t.parentElement)}>${u} (${s}${a ? " [" + a + "]" : ""})`;
}
function rn(t, e) {
  const [i, r] = H(e), [n, c, o, s] = r.split(/[ /.]/), a = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = a && a[1] ? a[1] : "", b = a && a[2] ? a[2] : "", m = r.match(/\(([A-Z]{2})/), g = r.match(/ \[([0-9]{1,2})\]/), v = m && m[1] ? m[1] : "", y = g && g[1] ? g[1] : "", [
    x,
    w,
    A,
    M,
    ce,
    Ke,
    Je,
    Qe,
    Ye
  ] = [
    R[t].parents.flatMap(
      (we) => P(we, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    b ? [`[daName="${b}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    y ? [`[ix="${y}"]`] : [":not([ix])", '[ix=""]']
  ];
  return O(
    x,
    [">"],
    [t],
    w,
    A,
    M,
    ce,
    Ke,
    Je,
    Qe,
    Ye
  ).map((we) => we.join("")).join(",");
}
function nn(t) {
  if (!t.parentElement) return NaN;
  const e = E(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    c,
    o,
    s,
    a,
    u,
    b,
    m,
    g,
    v,
    y,
    x,
    w
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
  ].map((ce) => t.getAttribute(ce)), A = w ? `${m}:${w} ${g ?? ""}/${v ?? ""} ${y ?? ""} ${x ?? ""}` : "", M = `${i} ${c}/${o ?? ""} ${s} ${a ?? ""} ${u} ${b || ""}`;
  return `${e}>${A ? A + " " : ""}${M}${r ? `@${r}` : ""}`;
}
function cn(t, e) {
  const [i, r] = H(e), n = R[t].parents.flatMap(
    (Ce) => P(Ce, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Ce] = r.split("["), Ki = [`[intAddr="${Ce}"]`];
    return O(n, [">"], [t], Ki).map((Ji) => Ji.join("")).join(",");
  }
  let c, o, s, a, u, b, m, g, v, y, x, w, A, M;
  !r.includes(":") && !r.includes("@") ? [c, o, s, a, u, b, m] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    g,
    v,
    y,
    x,
    w,
    A,
    c,
    o,
    s,
    a,
    u,
    b,
    m
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [c, o, s, a, u, b, m, M] = r.split(/[ /@]/) : [
    g,
    v,
    y,
    x,
    w,
    A,
    c,
    o,
    s,
    a,
    u,
    b,
    m,
    M
  ] = r.split(/[ /:@]/);
  const [
    ce,
    Ke,
    Je,
    Qe,
    Ye,
    we,
    qi,
    Ui,
    Gi,
    Bi,
    ji,
    Wi,
    Xi,
    Zi
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    a ? [`[lnClass="${a}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    b ? [`[doName="${b}"]`] : [":not([doName])"],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    g ? [`[serviceType="${g}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    y ? [`[srcLDInst="${y}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    x ? [`[srcPrefix="${x}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    w ? [`[srcLNClass="${w}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    M ? [`[intAddr="${M}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return O(
    n,
    [">"],
    [t],
    ce,
    Ke,
    Je,
    Qe,
    Ye,
    we,
    qi,
    Ui,
    Gi,
    Bi,
    ji,
    Wi,
    Xi,
    Zi
  ).map((Ce) => Ce.join("")).join(",");
}
function on(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${E(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function sn(t, e) {
  const [i, r] = H(e), n = R[t].parents.flatMap(
    (m) => P(m, i).split(",")
  ), [c, o, s] = r.split(" ");
  if (!o) return N;
  const [a, u, b] = [
    c ? [`[prefix="${c}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${s}"]`]
  ];
  return O(
    n,
    [">"],
    [t],
    a,
    u,
    b
  ).map((m) => m.join("")).join(",");
}
function an(t) {
  const [e, i, r, n, c, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${E(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${c} ${o}`;
}
function ln(t, e) {
  const [i, r] = H(e), n = R[t].parents.flatMap(
    (A) => P(A, i).split(",")
  ), [c, o, s, a, u, b] = r.split(/[ /]/), [
    m,
    g,
    v,
    y,
    x,
    w
  ] = [
    c ? [`[iedName="${c}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    b ? [`[lnInst="${b}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return O(
    n,
    [">"],
    [t],
    m,
    g,
    v,
    y,
    x,
    w
  ).map((A) => A.join("")).join(",");
}
function jt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${E(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function mt(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = H(e), [c, o, s, a] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return N;
  if (i === 0) return `${t}[name="${o}"]`;
  const u = R[t].parents.flatMap(
    (g) => g === "SDI" ? mt(g, r, i - 1).split(",") : P(g, r).split(",")
  ).filter((g) => !g.startsWith(N));
  if (u.length === 0) return N;
  const [b, m] = [
    [`[name="${o}"]`],
    a ? [`[ix="${a}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return O(
    u,
    [">"],
    [t],
    b,
    m
  ).map((g) => g.join("")).join(",");
}
function dn(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${E(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function pn(t, e) {
  const [i, r] = H(e), [n, c] = r.split(" "), o = parseFloat(c), s = R[t].parents.flatMap(
    (b) => P(b, i).split(",")
  ), [a, u] = [
    n ? [`[sGroup="${n}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return O(
    s,
    [">"],
    [t],
    a,
    u
  ).map((b) => b.join("")).join(",");
}
function mn(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function un(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? N : `${t}[iedName="${i}"][apName="${r}"]`;
}
function Wt(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Xt(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? N : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function hn(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${E(t.parentElement)}>${e}`;
}
function fn(t, e) {
  const [i, r] = H(e), [n, c] = [
    R[t].parents.flatMap(
      (o) => P(o, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return O(n, [">"], [t], c).map((o) => o.join("")).join(",");
}
function bn(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${E(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${E(t.parentElement)}>${i} [${r}]`;
}
function gn(t, e) {
  const [i, r] = H(e), [n] = r.split(" "), c = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [o, s, a] = [
    R[t].parents.flatMap(
      (u) => P(u, i).split(",")
    ),
    [`[type="${n}"]`],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return O(
    o,
    [">"],
    [t],
    s,
    a
  ).map((u) => u.join("")).join(",");
}
function vn(t) {
  return `${E(t.parentElement)}>${t.getAttribute("ord")}`;
}
function yn(t, e) {
  const [i, r] = H(e);
  return `${P("EnumType", i)}>${t}[ord="${r}"]`;
}
function xn(t) {
  return `${E(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function kn(t, e) {
  const [i, r] = H(e), [n, c] = r.split("	"), [o] = [
    R[t].parents.flatMap(
      (s) => P(s, i).split(",")
    )
  ];
  return O(
    o,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [c]
  ).map((s) => s.join("")).join(",");
}
function Sn() {
  return "";
}
function _n() {
  return ":root";
}
function _(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${E(t.parentElement)}>${t.getAttribute("name")}`;
}
function k(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = H(e);
  if (!n) return N;
  if (i === 0) return `${t}[name="${n}"]`;
  const c = R[t].parents;
  if (!c) return N;
  const o = c.flatMap(
    (s) => R[s].selector === R.Substation.selector ? k(s, r, i - 1).split(",") : P(s, r).split(",")
  ).filter((s) => !s.startsWith(N));
  return o.length === 0 ? N : O(o, [">"], [t], [`[name="${n}"]`]).map((s) => s.join("")).join(",");
}
function h(t) {
  return E(t.parentElement).toString();
}
function f(t, e) {
  const i = R[t].parents;
  if (!i) return N;
  const r = i.flatMap((n) => P(n, e).split(",")).filter((n) => !n.startsWith(N));
  return r.length === 0 ? N : O(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function Te(t) {
  return `#${t.id}`;
}
function Me(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : N;
}
const wi = [
  "TransformerWinding",
  "ConductingEquipment"
], Ci = [
  "GeneralEquipment",
  "PowerTransformer",
  ...wi
], ut = ["Substation", "VoltageLevel", "Bay"], $i = ["Process", "Line"], Ai = ["EqSubFunction", "EqFunction"], wn = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ci,
  ...ut,
  ...$i,
  ...Ai
], Ei = ["ConnectivityNode", ...wn], Cn = ["GOOSESecurity", "SMVSecurity"], $n = ["SubNetwork", ...Cn, ...Ei], An = ["BDA", "DA"], En = ["SampledValueControl", "GSEControl"], Dn = ["LogControl", "ReportControl"], Nn = [...En, ...Dn], In = ["GSE", "SMV"], Rn = [
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
  ...Nn,
  ...In,
  ...An
], he = ["LN0", "LN"], Ln = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Fn = ["Subject", "IssuerName"], Vn = ["MinTime", "MaxTime"], Pn = ["LNodeType", "DOType", "DAType", "EnumType"], Tn = [
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
], Mn = ["DynDataSet", "ConfDataSet"], On = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Mn
], zn = ["ConfLogControl", "ConfSigRef"], Hn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], qn = ["SCL", ...$n, ...Rn, ...Pn], Di = [
  ...qn,
  ...Ln,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Fn,
  ...Vn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...he,
  ...Tn,
  "DynAssociation",
  "SettingGroups",
  ...On,
  ...zn,
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
], Un = new Set(Di);
function Ni(t) {
  return Un.has(t);
}
const Ze = ["Text", "Private"], se = [...Ze], D = [...Ze], Oe = [...Ze], Zt = [...D, "Val"], Ii = [...se, "LNode"], de = [...Ii], ht = [...de], rt = [
  ...de,
  "PowerTransformer",
  "GeneralEquipment"
], Kt = [
  ...ht,
  "Terminal"
], Jt = [...D, "Address"], Ri = [...se], Qt = [...Ri, "IEDName"], Yt = [
  ...D,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], ei = [
  ...de,
  "GeneralEquipment",
  "Function"
], ti = [...Ri, "TrgOps"], ii = [
  ...de,
  "GeneralEquipment",
  "EqSubFunction"
], R = {
  AccessControl: {
    identity: h,
    selector: f,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: _,
    selector: k,
    parents: ["IED"],
    children: [
      ...se,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: h,
    selector: f,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Zr,
    selector: Kr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: h,
    selector: f,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: _,
    selector: k,
    parents: ["DAType"],
    children: [...Zt]
  },
  BitRate: {
    identity: h,
    selector: f,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: _,
    selector: k,
    parents: ["VoltageLevel"],
    children: [
      ...rt,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: an,
    selector: ln,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: [...D, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: _,
    selector: k,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...Kt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: h,
    selector: f,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: mn,
    selector: un,
    parents: ["SubNetwork"],
    children: [...D, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: _,
    selector: k,
    parents: ["Bay", "Line"],
    children: [...Ii]
  },
  DA: {
    identity: _,
    selector: k,
    parents: ["DOType"],
    children: [...Zt]
  },
  DAI: {
    identity: jt,
    selector: mt,
    parents: ["DOI", "SDI"],
    children: [...D, "Val"]
  },
  DAType: {
    identity: Te,
    selector: Me,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "BDA", "ProtNs"]
  },
  DO: {
    identity: _,
    selector: k,
    parents: ["LNodeType"],
    children: [...D]
  },
  DOI: {
    identity: _,
    selector: k,
    parents: [...he],
    children: [...D, "SDI", "DAI"]
  },
  DOType: {
    identity: Te,
    selector: Me,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: _,
    selector: k,
    parents: [...he],
    children: [...se, "FCDA"]
  },
  DataSetDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Te,
    selector: Me,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "EnumVal"]
  },
  EnumVal: {
    identity: vn,
    selector: yn,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: _,
    selector: k,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...ii]
  },
  EqSubFunction: {
    identity: _,
    selector: k,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...ii]
  },
  ExtRef: {
    identity: nn,
    selector: cn,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: tn,
    selector: rn,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: _,
    selector: k,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...de,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: _,
    selector: k,
    parents: [
      "SubFunction",
      "Function",
      ...$i,
      ...Ai,
      ...ut
    ],
    children: [...ht, "EqFunction"]
  },
  GetCBValues: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: _,
    selector: k,
    parents: ["AccessPoint"],
    children: [...se, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Wt,
    selector: Xt,
    parents: ["ConnectedAP"],
    children: [...Jt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: _,
    selector: k,
    parents: ["LN0"],
    children: [...Qt, "Protocol"]
  },
  GSESettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: h,
    selector: f,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Ur,
    selector: Gr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: _,
    selector: k,
    parents: ["SCL"],
    children: [...D, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Yr,
    selector: en,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: h,
    selector: f,
    parents: [...he],
    children: [...D, "ExtRef"]
  },
  IssuerName: {
    identity: h,
    selector: f,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Wr,
    selector: Xr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Jr,
    selector: Qr,
    parents: ["Server"],
    children: [...D, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: on,
    selector: sn,
    parents: ["AccessPoint", "LDevice"],
    children: [...Yt]
  },
  LN0: {
    identity: h,
    selector: f,
    parents: ["LDevice"],
    children: [
      ...Yt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Br,
    selector: jr,
    parents: [...Ei],
    children: [...D]
  },
  LNodeType: {
    identity: Te,
    selector: Me,
    parents: ["DataTypeTemplates"],
    children: [...Oe, "DO"]
  },
  Line: {
    identity: _,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...ei,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: _,
    selector: k,
    parents: [...he],
    children: [...D]
  },
  LogControl: {
    identity: _,
    selector: k,
    parents: [...he],
    children: [...ti]
  },
  LogSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: h,
    selector: f,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: h,
    selector: f,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: h,
    selector: f,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Gt,
    selector: Bt,
    parents: ["TransformerWinding"],
    children: [...D]
  },
  OptFields: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: bn,
    selector: gn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: hn,
    selector: fn,
    parents: ["ConnectedAP"],
    children: [...D, "P"]
  },
  PowerTransformer: {
    identity: _,
    selector: k,
    parents: [...ut],
    children: [
      ...ht,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => N,
    parents: [],
    children: []
  },
  Process: {
    identity: _,
    selector: k,
    parents: ["Process", "SCL"],
    children: [
      ...ei,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: xn,
    selector: kn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: h,
    selector: f,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: _,
    selector: k,
    parents: [...he],
    children: [...ti, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: [...D, "ClientLN"]
  },
  SamplesPerSec: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: _,
    selector: k,
    parents: ["LN0"],
    children: [...Qt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Sn,
    selector: _n,
    parents: [],
    children: [
      ...Ze,
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
    identity: jt,
    selector: mt,
    parents: ["DOI", "SDI"],
    children: [...D, "SDI", "DAI"]
  },
  SDO: {
    identity: _,
    selector: k,
    parents: ["DOType"],
    children: [...se]
  },
  Server: {
    identity: h,
    selector: f,
    parents: ["AccessPoint"],
    children: [
      ...D,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: h,
    selector: f,
    parents: ["AccessPoint"],
    children: [...D]
  },
  Services: {
    identity: h,
    selector: f,
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
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: h,
    selector: f,
    parents: ["LN0"],
    children: [...D]
  },
  SettingGroups: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: h,
    selector: f,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Wt,
    selector: Xt,
    parents: ["ConnectedAP"],
    children: [...Jt]
  },
  SmvOpts: {
    identity: h,
    selector: f,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: _,
    selector: k,
    parents: ["AccessPoint"],
    children: [...se, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: _,
    selector: k,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...wi
    ],
    children: [...de, "EqFunction"]
  },
  SubFunction: {
    identity: _,
    selector: k,
    parents: ["SubFunction", "Function"],
    children: [
      ...de,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: _,
    selector: k,
    parents: ["Communication"],
    children: [...se, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: h,
    selector: f,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: _,
    selector: k,
    parents: ["SCL"],
    children: [...rt, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: _,
    selector: k,
    parents: ["TransformerWinding"],
    children: [...de, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Gt,
    selector: Bt,
    parents: [...Ci],
    children: [...D]
  },
  Text: {
    identity: h,
    selector: f,
    parents: Di.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: h,
    selector: f,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: _,
    selector: k,
    parents: ["PowerTransformer"],
    children: [
      ...Kt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: dn,
    selector: pn,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: h,
    selector: f,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: _,
    selector: k,
    parents: ["Substation"],
    children: [...rt, "Voltage", "Bay", "Function"]
  }
};
function P(t, e) {
  return typeof e != "string" ? N : Ni(t) ? R[t].selector(t, e) : t;
}
function E(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Ni(e) ? R[e].identity(t) : NaN;
}
mi((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function O(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
const Gn = 99;
Array(Gn).fill(1).map((t, e) => `${e + 1}`);
const Bn = xt`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H15V9H11V11H15V13H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, jn = xt`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, Wn = xt`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, ge = /* @__PURE__ */ new Map();
ge.set("Attribute", jn);
ge.set("Content", Wn);
ge.set("Element", Bn);
function Ue(t, e, i) {
  const r = e === t ? ":scope" : Object.keys(i).find(
    (n) => Array.from(
      e.querySelectorAll(n)
    ).includes(t)
  );
  return r ? i[r] : void 0;
}
function ft(t, e) {
  if (!e || !e.full)
    return !1;
  const i = e.full;
  return typeof i == "boolean" ? i : i(t);
}
function Xn(t, e, i) {
  if (!i || !i.attributes || !i.attributes[e])
    return !1;
  const r = i.attributes[e];
  return typeof r == "boolean" ? r : r(t);
}
function ri(t) {
  const e = E(t);
  return typeof e == "string" ? e : C("unidentifiable");
}
function Zn(t, e, i, r) {
  const n = [], c = t.textContent?.trim() ?? "", o = e.textContent?.trim() ?? "";
  t.childElementCount === 0 && e.childElementCount === 0 && c !== o && (ft(
    t,
    Ue(
      t,
      r,
      i
    )
  ) || n.push([
    "value",
    { type: "Content", newValue: c, oldValue: o }
  ]));
  const s = new Set(
    e.getAttributeNames().concat(t.getAttributeNames())
  );
  for (const a of s)
    !Xn(
      t,
      a,
      Ue(
        t,
        r,
        i
      )
    ) && e.getAttribute(a) !== t.getAttribute(a) && n.push([
      a,
      {
        type: "Attribute",
        newValue: t.getAttribute(a),
        oldValue: e.getAttribute(a)
      }
    ]);
  return n;
}
function ni(t) {
  let e = E(t);
  return typeof e == "string" && (e = e.split(">").pop() ?? ""), e;
}
function Kn(t, e) {
  return t.tagName === e.tagName && ni(t) === ni(e);
}
function Jn(t, e, i, r, n) {
  const c = [], o = Array.from(t.children), s = Array.from(e.children);
  return o.forEach((a) => {
    if (!a.closest("Private") && !ft(
      a,
      Ue(
        a,
        r,
        i
      )
    )) {
      const b = s.findIndex(
        (g) => Kn(a, g)
      ), m = b > -1 ? s[b] : null;
      m ? (s.splice(b, 1), c.push({
        type: "Element",
        newValue: a,
        oldValue: m
      })) : c.push({
        type: "Element",
        newValue: a,
        oldValue: null
      });
    }
  }), s.forEach((a) => {
    a.closest("Private") || ft(
      a,
      Ue(
        a,
        n,
        i
      )
    ) || c.push({
      type: "Element",
      newValue: null,
      oldValue: a
    });
  }), c;
}
function Li(t, e, i = {}) {
  return Qn(
    t,
    e,
    i,
    t,
    e
  );
}
function Qn(t, e, i = {}, r, n) {
  let c = E(t).toString();
  c === "NaN" && (c = void 0), r = r || t, n = n || e;
  const o = Zn(
    t,
    e,
    i,
    r
  ), s = Jn(
    t,
    e,
    i,
    r,
    n
  ), a = [], u = [];
  s.forEach((m) => {
    !m.oldValue || !m.newValue ? a.push(m) : u.push(m);
  });
  const b = u.map((m) => Li(m.newValue, m.oldValue, i)).filter((m) => m !== null);
  return b.length > 0 || o.length > 0 || a.length > 0 ? d` ${o.length > 0 || a.length > 0 ? d`<div class="container container--alt">
          <div class="list__container list__container--left">
            <mwc-list multi right nonInteractive>
              ${Pe(
    o,
    (m) => m,
    ([m, g]) => d`<mwc-list-item right twoLine graphic="icon">
                    ${g.oldValue !== null ? d`
                          <span>
                            ${m}:
                            ${g.oldValue === "" ? '""' : g.oldValue}
                          </span>
                          <span slot="secondary">${c}</span>
                          <mwc-icon slot="graphic">
                            ${ge.get(g.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${Pe(
    a,
    (m) => m,
    (m) => d` <mwc-list-item right twoLine graphic="icon">
                    ${m.oldValue ? d`
                          <span>${m.oldValue.tagName}</span>
                          <span slot="secondary">
                            ${ri(m.oldValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${ge.get(m.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
          <div class="list__container">
            <mwc-list multi left nonInteractive>
              ${Pe(
    o,
    (m) => m,
    ([m, g]) => d` <mwc-list-item left twoLine graphic="icon">
                    ${g.newValue !== null ? d`
                          <span>
                            ${m}:
                            ${g.newValue === "" ? '""' : g.newValue}
                          </span>
                          <span slot="secondary">${c}</span>
                          <mwc-icon slot="graphic">
                            ${ge.get(g.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
              ${Pe(
    a,
    (m) => m,
    (m) => d` <mwc-list-item left twoLine graphic="icon">
                    ${m.newValue ? d`
                          <span>${m.newValue.tagName}</span>
                          <span slot="secondary">
                            ${ri(m.newValue)}
                          </span>
                          <mwc-icon slot="graphic">
                            ${ge.get(m.type)}
                          </mwc-icon>
                        ` : ""}
                  </mwc-list-item>`
  )}
            </mwc-list>
          </div>
        </div>` : ""}
    ${b}` : null;
}
var Yn = Object.defineProperty, ec = Object.getOwnPropertyDescriptor, ne = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ec(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = (r ? o(e, i, n) : o(n)) || n);
  return r && n && Yn(e, i, n), n;
};
let X = class extends Z {
  constructor() {
    super(...arguments), this.leftHandTitle = "", this.rightHandTitle = "", this.leftHandSubtitle = "", this.rightHandSubtitle = "", this.filterMutables = !0;
  }
  render() {
    return d`
      ${this.renderFilterCheckbox()}
      <div class="container container--alt">
        <div class="list__container list__container--left">
          <h3 class="mdc-dialog__title">${this.leftHandTitle}</h3>
          ${this.leftHandSubtitle && this.leftHandSubtitle.length > 0 ? d`<h5 class="mdc-dialog__title">${this.leftHandSubtitle}</h5> ` : ""}
        </div>
        <div class="list__container">
          <h3 class="mdc-dialog__title">${this.rightHandTitle}</h3>
          ${this.rightHandSubtitle && this.rightHandSubtitle.length > 0 ? d`<h5 class="mdc-dialog__title">
                ${this.rightHandSubtitle}
              </h5> ` : ""}
        </div>
      </div>
      ${this.leftHandObject && this.rightHandObject ? d`
            ${Li(
      this.rightHandObject,
      this.leftHandObject,
      this.filterMutables ? this.filterToIgnore : {}
    )}
          ` : ""}
    `;
  }
  renderFilterCheckbox() {
    return this.filterToIgnore ? d`
        <div class="container">
          <div class="flex"></div>
          <mwc-formfield label="${C("compare.filterMutables")}">
            <mwc-checkbox
              ?checked=${this.filterMutables}
              @change=${() => this.filterMutables = !this.filterMutables}
            >
            </mwc-checkbox>
          </mwc-formfield>
        </div>
      ` : d``;
  }
};
X.styles = K`
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
ne([
  p({ type: String })
], X.prototype, "leftHandTitle", 2);
ne([
  p({ type: String })
], X.prototype, "rightHandTitle", 2);
ne([
  p({ type: Object })
], X.prototype, "leftHandObject", 2);
ne([
  p({ type: Object })
], X.prototype, "rightHandObject", 2);
ne([
  p({ type: Object })
], X.prototype, "filterToIgnore", 2);
ne([
  p({ type: String })
], X.prototype, "leftHandSubtitle", 2);
ne([
  p({ type: String })
], X.prototype, "rightHandSubtitle", 2);
ne([
  S()
], X.prototype, "filterMutables", 2);
X = ne([
  z("plain-compare-list")
], X);
function ke(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
function Fi(t, e, i) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { doc: t, docName: e, ...i?.detail }
  });
}
function ze(t, e) {
  let i = "", r = "";
  return e || (e = "	"), t.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (r = r.substring(e.length)), i += r + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (r += e);
  }), i.substring(1, i.length - 3);
}
var tc = Object.defineProperty, ic = Object.getOwnPropertyDescriptor, Vi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ic(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = (r ? o(e, i, n) : o(n)) || n);
  return r && n && tc(e, i, n), n;
};
function te() {
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
let Ge = class extends Z {
  get compasSettings() {
    return te().compasSettings;
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
    return this.valid() ? (te().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), te().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), te().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), te().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), te().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), te().setCompasSetting(
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
    this.dispatchEvent(B());
  }
  render() {
    return d` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${$("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${$("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${$("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${$("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${$("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${$("compas.settings.useWebsockets")}">
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
        ${$("reset")}
      </mwc-button>`;
  }
};
Ge.styles = K`
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
Vi([
  p()
], Ge.prototype, "compasSettings", 1);
Ge = Vi([
  z("compas-settings")
], Ge);
const Pi = "NotFoundError", Ti = "ApplicationError", $t = "ServerError", ci = "https://www.lfenergy.org/compas/commons/v1";
async function Y(t) {
  if (!t.ok) {
    let e = Ti;
    return t.status === 404 ? e = Pi : t.status >= 500 && (e = $t), Promise.reject({
      type: e,
      status: t.status,
      message: await rc(t)
    });
  }
  return Promise.resolve(t.text());
}
async function rc(t) {
  const e = await t.text(), i = await ie(e);
  return Mi(i) ?? t.statusText;
}
function Mi(t) {
  const e = Array.from(
    t.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let i = "";
    return e.forEach((r, n) => {
      const c = r.getElementsByTagNameNS(ci, "Code").item(0).textContent, o = r.getElementsByTagNameNS(ci, "Message").item(0).textContent;
      n > 0 && (i += ", "), i += o, c && (i += " (" + c + ")");
    }), i;
  }
}
function ie(t) {
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
function ee(t) {
  return Promise.reject({ type: $t, message: t.message });
}
function $e(t, e) {
  let i = e.message;
  e.status && (i += " (" + e.status + ")"), t && t.dispatchEvent(
    ke({
      kind: "error",
      title: C("compas.error.server"),
      message: C("compas.error.serverDetails", {
        type: e.type,
        message: i
      })
    })
  );
}
function He(t) {
  return t.startsWith("http://") || t.startsWith("https://") ? t.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + nc() + t;
}
function nc() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function Oi(t, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: t, ...e?.detail }
  });
}
function qe(t, e, i, r) {
  let n;
  function c(s) {
    return new Promise((a) => setTimeout(a, s));
  }
  async function o() {
    for (; n !== void 0; )
      await c(250);
  }
  return new Promise((s, a) => {
    n = new WebSocket(i), n.onopen = () => {
      n?.send(r);
    }, n.onmessage = (u) => {
      ie(u.data).then((b) => {
        if (b.documentElement.localName === "ErrorResponse") {
          const m = Mi(b);
          a({ type: Ti, message: m });
        } else
          s(b);
        n?.close();
      }).catch((b) => {
        a(b), n?.close();
      });
    }, n.onerror = () => {
      a({
        type: $t,
        message: `Websocket Error in service "${e}"`
      }), n?.close();
    }, n.onclose = () => {
      n = void 0;
    }, t.dispatchEvent(Oi(o()));
  });
}
const q = "https://www.lfenergy.org/compas/SclDataService/v1";
var Ee = /* @__PURE__ */ ((t) => (t.MAJOR = "MAJOR", t.MINOR = "MINOR", t.PATCH = "PATCH", t))(Ee || {});
function be() {
  function t() {
    return te().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return te().useWebsockets();
  }
  function i() {
    const r = t() + "/common/v1/type/list";
    return fetch(r).catch(ee).then(Y).then(ie);
  }
  return {
    listOrderedSclTypes() {
      return i().then((r) => Array.from(r.querySelectorAll("*|Type") ?? []).sort(
        (n, c) => {
          const o = n.getElementsByTagNameNS(q, "Description").item(0).textContent ?? "", s = c.getElementsByTagNameNS(q, "Description").item(0).textContent ?? "";
          return o.localeCompare(s);
        }
      ));
    },
    listScls(r) {
      const n = t() + "/scl/v1/" + r + "/list";
      return fetch(n).catch(ee).then(Y).then(ie);
    },
    listSclVersions(r, n) {
      const c = t() + "/scl/v1/" + r + "/" + n + "/versions";
      return fetch(c).catch(ee).then(Y).then(ie);
    },
    getSclDocument(r, n, c) {
      if (e()) {
        const s = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${q}">
           <sds:Id>${c}</sds:Id>
         </sds:GetWsRequest>`, a = t() + "/scl-ws/v1/" + n + "/get";
        return qe(
          r,
          "CompasSclDataService",
          He(a),
          s
        ).then(oe);
      }
      const o = t() + "/scl/v1/" + n + "/" + c;
      return fetch(o).catch(ee).then(Y).then(ie).then(oe);
    },
    getSclDocumentVersion(r, n, c, o) {
      if (e()) {
        const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${q}">
           <sds:Id>${c}</sds:Id>
           <sds:Version>${o}</sds:Version>
         </sds:GetVersionWsRequest>`, u = t() + "/scl-ws/v1/" + n + "/get-version";
        return qe(
          r,
          "CompasSclDataService",
          He(u),
          a
        ).then(oe);
      }
      const s = t() + "/scl/v1/" + n + "/" + c + "/" + o;
      return fetch(s).catch(ee).then(Y).then(ie).then(oe);
    },
    deleteSclDocumentVersion(r, n, c) {
      const o = t() + "/scl/v1/" + r + "/" + n + "/" + c;
      return fetch(o, { method: "DELETE" }).catch(ee).then(Y);
    },
    deleteSclDocument(r, n) {
      const c = t() + "/scl/v1/" + r + "/" + n;
      return fetch(c, { method: "DELETE" }).catch(ee).then(Y);
    },
    addSclDocument(r, n, c) {
      if (e()) {
        const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${q}">
           <sds:Name>${c.sclName}</sds:Name>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ze(
          new XMLSerializer().serializeToString(c.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, u = t() + "/scl-ws/v1/" + n + "/create";
        return qe(
          r,
          "CompasSclDataService",
          He(u),
          a
        ).then(oe);
      }
      const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${q}">
            <sds:Name>${c.sclName}</sds:Name>
            <sds:Comment>${c.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${ze(
        new XMLSerializer().serializeToString(c.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, s = t() + "/scl/v1/" + n;
      return fetch(s, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: o
      }).catch(ee).then(Y).then(ie).then(oe);
    },
    updateSclDocument(r, n, c, o) {
      if (e()) {
        const u = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${q}">
           <sds:Id>${c}</sds:Id>
           <sds:ChangeSet>${o.changeSet}</sds:ChangeSet>
           <sds:Comment>${o.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ze(
          new XMLSerializer().serializeToString(o.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, b = t() + "/scl-ws/v1/" + n + "/update";
        return qe(
          r,
          "CompasSclDataService",
          He(b),
          u
        ).then(oe);
      }
      const s = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${q}">
           <sds:ChangeSet>${o.changeSet}</sds:ChangeSet>
           <sds:Comment>${o.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${ze(
        new XMLSerializer().serializeToString(o.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, a = t() + "/scl/v1/" + n + "/" + c;
      return fetch(a, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: s
      }).catch(ee).then(Y).then(ie).then(oe);
    }
  };
}
const cc = "http://www.iec.ch/61850/2003/SCL", ye = "https://www.lfenergy.org/compas/extension/v1", De = "compas", Be = "compas_scl", oi = 20;
function At(t, e) {
  return t.querySelector(`:scope > Private[type="${e}"]`);
}
function oc(t, e) {
  const i = t.ownerDocument.createElementNS(
    cc,
    "Private"
  );
  return i.setAttribute("type", e), i;
}
function Et(t) {
  return t?.querySelector(":scope > SclName") ?? null;
}
function sc(t, e) {
  zi(t, ye, De);
  const i = t.ownerDocument.createElementNS(
    ye,
    De + ":SclName"
  );
  return i.textContent = e, i;
}
function ac(t) {
  return t?.querySelector(":scope > SclFileType") ?? null;
}
function lc(t) {
  return Array.from(t.querySelectorAll(":scope > Labels")).find(
    (e) => e.namespaceURI === ye
  ) ?? null;
}
function dc(t) {
  return zi(
    t,
    ye,
    De
  ), t.ownerDocument.createElementNS(
    ye,
    De + ":Labels"
  );
}
function pc(t, e) {
  const i = t.ownerDocument.createElementNS(
    ye,
    De + ":Label"
  );
  return i.textContent = e, t.append(i), i;
}
function zi(t, e, i) {
  const r = t.ownerDocument.firstElementChild;
  r.hasAttribute("xmlns:" + i) || r.setAttributeNS(
    "http://www.w3.org/2000/xmlns/",
    "xmlns:" + i,
    e
  );
}
const mc = 3;
function le(t) {
  if (t.lastIndexOf(".") == t.length - (mc + 1))
    return t.substring(t.lastIndexOf(".") + 1).toUpperCase();
  throw new Error(C("compas.error.type"));
}
function uc(t) {
  const e = t.querySelector(":scope > Header"), i = At(t, Be), r = e?.getAttribute("version") ?? "", n = Et(i)?.textContent ?? "", c = ac(i)?.textContent ?? "SCD";
  let o = n;
  return o === "" && (o = e?.getAttribute("id") ?? ""), o += "-" + r + "." + c?.toLowerCase(), o;
}
function Hi(t, e, i) {
  const n = e.querySelector(":root > Header")?.getAttribute("id") ?? "";
  t.dispatchEvent(ke({ kind: "reset" })), t.dispatchEvent(
    Fi(
      e,
      uc(e.documentElement),
      { detail: { docId: n } }
    )
  );
}
function hc(t, e) {
  function i(o, s) {
    const a = parseInt(o), u = parseInt(s);
    return isNaN(a) || isNaN(u) ? 0 : a < u ? -1 : a > u ? 1 : 0;
  }
  if (t.localeCompare(e) == 0)
    return 0;
  const r = t.split("."), n = e.split(".");
  if (r.length != 3 && n.length != 3)
    return 0;
  let c = i(r[0], n[0]);
  return c === 0 && (c = i(r[1], n[1]), c === 0 && (c = i(r[2], n[2]))), c;
}
var fc = Object.defineProperty, nt = (t, e, i, r) => {
  for (var n = void 0, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = o(e, i, n) || n);
  return n && fc(e, i, n), n;
};
function bc(t) {
  class e extends t {
    firstUpdated() {
      this.checkExistInCompas();
    }
    updated(r) {
      super.updated(r), r.has("docId") && (this.existInCompas = void 0, this.checkExistInCompas());
    }
    callService(r, n) {
      return be().listSclVersions(r, n);
    }
    checkExistInCompas() {
      if (this.docId) {
        const r = le(this.docName);
        this.callService(r, this.docId).then(() => this.existInCompas = !0).catch((n) => {
          n.type === Pi && (this.existInCompas = !1);
        });
      } else
        this.existInCompas = !1;
    }
  }
  return nt([
    p()
  ], e.prototype, "docName"), nt([
    p()
  ], e.prototype, "docId"), nt([
    S()
  ], e.prototype, "existInCompas"), e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const si = Symbol("selection controller");
class gc {
  constructor() {
    this.selected = null, this.ordered = null, this.set = /* @__PURE__ */ new Set();
  }
}
class Dt {
  constructor(e) {
    this.sets = {}, this.focusedSet = null, this.mouseIsDown = !1, this.updating = !1, e.addEventListener("keydown", (i) => {
      this.keyDownHandler(i);
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
    let n = r[si];
    return n === void 0 && (n = new Dt(r), r[si] = n), n;
  }
  keyDownHandler(e) {
    const i = e.target;
    "checked" in i && this.has(i) && (e.key == "ArrowRight" || e.key == "ArrowDown" ? this.selectNext(i) : (e.key == "ArrowLeft" || e.key == "ArrowUp") && this.selectPrevious(i));
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
    const i = this.getOrdered(e), r = i.indexOf(e), n = i[r - 1] || i[i.length - 1];
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
    const i = this.getOrdered(e), r = i.indexOf(e), n = i[r + 1] || i[0];
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
    const i = this.getSet(e.name), r = this.focusedSet;
    this.focusedSet = i, r != i && i.selected && i.selected != e && i.selected.focus();
  }
  /**
   * @return Returns true if atleast one radio is selected in the radio group.
   */
  isAnySelected(e) {
    const i = this.getSet(e.name);
    for (const r of i.set)
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
    const i = this.getSet(e.name);
    return i.ordered || (i.ordered = Array.from(i.set), i.ordered.sort((r, n) => r.compareDocumentPosition(n) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0)), i.ordered;
  }
  /**
   * Gets the selection set of the given name and creates one if it does not yet
   * exist.
   *
   * @param name Name of set
   */
  getSet(e) {
    return this.sets[e] || (this.sets[e] = new gc()), this.sets[e];
  }
  /**
   * Register the element in the selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  register(e) {
    const i = e.name || e.getAttribute("name") || "", r = this.getSet(i);
    r.set.add(e), r.ordered = null;
  }
  /**
   * Unregister the element from selection controller.
   *
   * @param element Element to register. Registers in set of `element.name`.
   */
  unregister(e) {
    const i = this.getSet(e.name);
    i.set.delete(e), i.ordered = null, i.selected == e && (i.selected = null);
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
    const i = this.getSet(e.name);
    if (e.checked) {
      for (const r of i.set)
        r != e && (r.checked = !1);
      i.selected = e;
    }
    if (this.isAnySelected(e))
      for (const r of i.set) {
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
var vc = {
  NATIVE_CONTROL_SELECTOR: ".mdc-radio__native-control"
}, yc = {
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
var xc = (
  /** @class */
  function(t) {
    yi(e, t);
    function e(i) {
      return t.call(this, ve(ve({}, e.defaultAdapter), i)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vc;
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
    }), e.prototype.setDisabled = function(i) {
      var r = e.cssClasses.DISABLED;
      this.adapter.setNativeControlDisabled(i), i ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e;
  }(Si)
);
class T extends Ct {
  constructor() {
    super(...arguments), this._checked = !1, this.useStateLayerCustomProperties = !1, this.global = !1, this.disabled = !1, this.value = "", this.name = "", this.reducedTouchTarget = !1, this.mdcFoundationClass = xc, this.formElementTabIndex = 0, this.focused = !1, this.shouldRenderRipple = !1, this.rippleElement = null, this.rippleHandlers = new _t(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => {
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
    var i, r;
    const n = this._checked;
    e !== n && (this._checked = e, this.formElement && (this.formElement.checked = e), (i = this._selectionController) === null || i === void 0 || i.update(this), e === !1 && ((r = this.formElement) === null || r === void 0 || r.blur()), this.requestUpdate("checked", n), this.dispatchEvent(new Event("checked", { bubbles: !0, composed: !0 })));
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
    super.connectedCallback(), this._selectionController = Dt.getController(this), this._selectionController.register(this), this._selectionController.update(this);
  }
  disconnectedCallback() {
    this._selectionController.unregister(this), this._selectionController = void 0;
  }
  focus() {
    this.formElement.focus();
  }
  createAdapter() {
    return Object.assign(Object.assign({}, _r(this.mdcRoot)), { setNativeControlDisabled: (e) => {
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
      <div class="mdc-radio ${Se(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${ae(this.ariaLabel)}"
          aria-labelledby="${ae(this.ariaLabelledBy)}"
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
  changeHandler() {
    this.checked = this.formElement.checked;
  }
}
l([
  L(".mdc-radio")
], T.prototype, "mdcRoot", void 0);
l([
  L("input")
], T.prototype, "formElement", void 0);
l([
  S()
], T.prototype, "useStateLayerCustomProperties", void 0);
l([
  p({ type: Boolean })
], T.prototype, "global", void 0);
l([
  p({ type: Boolean, reflect: !0 })
], T.prototype, "checked", null);
l([
  p({ type: Boolean }),
  Ne(function(t) {
    this.mdcFoundation.setDisabled(t);
  })
], T.prototype, "disabled", void 0);
l([
  p({ type: String }),
  Ne(function(t) {
    this._handleUpdatedValue(t);
  })
], T.prototype, "value", void 0);
l([
  p({ type: String })
], T.prototype, "name", void 0);
l([
  p({ type: Boolean })
], T.prototype, "reducedTouchTarget", void 0);
l([
  p({ type: Number })
], T.prototype, "formElementTabIndex", void 0);
l([
  S()
], T.prototype, "focused", void 0);
l([
  S()
], T.prototype, "shouldRenderRipple", void 0);
l([
  yt("mwc-ripple")
], T.prototype, "ripple", void 0);
l([
  Ie,
  p({ attribute: "aria-label" })
], T.prototype, "ariaLabel", void 0);
l([
  Ie,
  p({ attribute: "aria-labelledby" })
], T.prototype, "ariaLabelledBy", void 0);
l([
  pi({ passive: !0 })
], T.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const kc = K`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;
let bt = class extends T {
};
bt.styles = [kc];
bt = l([
  z("mwc-radio")
], bt);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Le extends F {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control", this._changeFromClick = !1;
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, n = this.hasMeta && this.left ? this.renderMeta() : d``, c = this.renderRipple();
    return d`
      ${c}
      ${r}
      ${this.left ? "" : i}
      <mwc-radio
          global
          class=${Se(e)}
          tabindex=${this.tabindex}
          name=${ae(this.group === null ? void 0 : this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left ? i : ""}
      ${n}`;
  }
  onClick() {
    this._changeFromClick = !0, super.onClick();
  }
  async onChange(e) {
    const i = e.target;
    this.selected === i.checked || (this._skipPropRequest = !0, this.selected = i.checked, await this.updateComplete, this._skipPropRequest = !1, this._changeFromClick || this.fireRequestSelected(this.selected, "interaction")), this._changeFromClick = !1;
  }
}
l([
  L("slot")
], Le.prototype, "slotElement", void 0);
l([
  L("mwc-radio")
], Le.prototype, "radioElement", void 0);
l([
  p({ type: Boolean })
], Le.prototype, "left", void 0);
l([
  p({ type: String, reflect: !0 })
], Le.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let gt = class extends Le {
};
gt.styles = [wt, _i];
gt = l([
  z("mwc-radio-list-item")
], gt);
var Sc = Object.getOwnPropertyDescriptor, _c = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Sc(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = o(n) || n);
  return n;
};
const wc = /* @__PURE__ */ new Map([
  [Ee.MAJOR, { translationKey: "compas.changeset.major" }],
  [Ee.MINOR, { translationKey: "compas.changeset.minor" }],
  [Ee.PATCH, { translationKey: "compas.changeset.patch" }]
]);
let ai = class extends Z {
  getSelectedListItem() {
    return this.shadowRoot.querySelector("mwc-list").selected;
  }
  getSelectedValue() {
    const t = this.getSelectedListItem();
    return t ? t.value : null;
  }
  valid() {
    return this.getSelectedListItem() !== null;
  }
  render() {
    return d`
      <mwc-list activatable>
        ${Object.values(Ee).map(
      (t) => d`<mwc-radio-list-item value="${t}" left>
                          ${$(wc.get(t).translationKey)}
                        </mwc-radio-list-item>`
    )}
      </mwc-list>
    `;
  }
};
ai = _c([
  z("compas-changeset-radiogroup")
], ai);
var Cc = Object.getOwnPropertyDescriptor, $c = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Cc(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = o(n) || n);
  return n;
};
let vt = class extends Z {
  getCommentField() {
    return this.shadowRoot.querySelector('wizard-textfield[id="comment"]');
  }
  set value(t) {
    const e = this.getCommentField();
    e.maybeValue = t;
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
        label="${$("compas.comment")}"
        .maybeValue=${null}
        nullable
      >
      </wizard-textfield>
    `;
  }
};
vt.styles = K`
    wizard-textfield {
      width: 100%;
    }
  `;
vt = $c([
  z("compas-comment")
], vt);
var Ac = Object.getOwnPropertyDescriptor, Ec = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ac(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = o(n) || n);
  return n;
};
let li = class extends Z {
  render() {
    return d`
      <mwc-list>
        <mwc-list-item><i>${$("compas.loading")}</i></mwc-list-item>
      </mwc-list>
    `;
  }
};
li = Ec([
  z("compas-loading")
], li);
var Dc = Object.getOwnPropertyDescriptor, Nc = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Dc(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = o(n) || n);
  return n;
};
let di = class extends bc(Z) {
  getSclFileField() {
    return this.shadowRoot.querySelector('input[id="scl-file"]');
  }
  getSclFilenameField() {
    return this.shadowRoot.querySelector('wizard-textfield[id="filename"]');
  }
  getChangeSetRadiogroup() {
    return this.shadowRoot.querySelector("compas-changeset-radiogroup");
  }
  getCommentField() {
    return this.shadowRoot.querySelector("compas-comment");
  }
  valid() {
    return this.getChangeSetRadiogroup().valid() && this.getSclFileField().checkValidity() && this.getSclFilenameField().checkValidity();
  }
  processAddDocument(t) {
    Hi(this, t), this.dispatchEvent(
      ke({
        kind: "info",
        title: C("compas.uploadVersion.updateSuccess")
      })
    ), this.dispatchEvent(B());
  }
  async updateDocumentInCompas() {
    const t = this.getChangeSetRadiogroup().getSelectedValue(), e = this.getCommentField().value, i = le(this.docName), r = this.getSclFileField()?.files?.item(0) ?? !1;
    if (!r) return;
    const n = await r.text(), c = new DOMParser().parseFromString(n, "application/xml");
    await be().updateSclDocument(this, i, this.docId, {
      changeSet: t,
      comment: e,
      doc: c
    }).then((o) => {
      this.processAddDocument(o);
    }).catch((o) => $e(this, o));
  }
  render() {
    if (this.existInCompas === void 0)
      return d` <compas-loading></compas-loading> `;
    if (!this.existInCompas)
      return d`
        <mwc-list>
          <mwc-list-item>${$("compas.notExists")}</mwc-list-item>
        </mwc-list>
      `;
    const t = le(this.docName);
    return d`
      <input
        id="scl-file"
        accept=".${t.toLowerCase()}"
        type="file"
        hidden
        required
        @change=${() => {
      const e = this.getSclFileField()?.files?.item(0), i = this.getSclFilenameField();
      i.value = e?.name ?? "";
    }}
      />
      <wizard-textfield
        id="filename"
        required
        readonly
        label="${$("compas.uploadVersion.filename")}"
      >
      </wizard-textfield>

      <mwc-button
        label="${$("compas.uploadVersion.selectButton")}"
        @click=${() => {
      this.shadowRoot.querySelector("#scl-file")?.click();
    }}
      >
      </mwc-button>

      <compas-changeset-radiogroup></compas-changeset-radiogroup>
      <compas-comment></compas-comment>
    `;
  }
};
di = Nc([
  z("compas-upload-version")
], di);
function Ic(t) {
  function e() {
    return function(i, r) {
      const n = r.shadowRoot.querySelector("compas-upload-version");
      return n.valid() ? (n.dispatchEvent(
        Oi(
          n.updateDocumentInCompas()
        )
      ), []) : [];
    };
  }
  return [
    {
      title: C("compas.uploadVersion.title"),
      primary: {
        icon: "save",
        label: C("save"),
        action: e()
      },
      content: [
        d`
          <compas-upload-version
            .docName="${t.docName}"
            .docId="${t.docId}"
          />
        `
      ]
    }
  ];
}
function ue(t, e, i) {
  const r = t.getElementsByTagNameNS(e, i);
  return r.length > 0 ? r.item(0) : null;
}
const Rc = K`
  :host(.moving) section {
    opacity: 0.3;
  }

  section {
    background-color: var(--mdc-theme-surface);
    transition: all 200ms linear;
    outline-color: var(--mdc-theme-primary);
    outline-style: solid;
    outline-width: 0px;
    opacity: 1;
  }

  h1 {
    color: var(--mdc-theme-on-surface);
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0px;
    line-height: 48px;
    padding-left: 0.3em;
    transition: background-color 150ms linear;
  }
`;
var Lc = Object.defineProperty, Fc = Object.getOwnPropertyDescriptor, _e = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Fc(e, i) : e, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = (r ? o(e, i, n) : o(n)) || n);
  return r && n && Lc(e, i, n), n;
};
let pe = class extends Z {
  constructor() {
    super(...arguments), this.originalLabelsElement = null;
  }
  set privateElement(t) {
    this.originalLabelsElement = lc(t), this.originalLabelsElement ? this.newLabelsElement = this.originalLabelsElement.cloneNode(!0) : this.newLabelsElement = dc(t);
  }
  get labels() {
    return Array.from(
      this.newLabelsElement?.querySelectorAll(":scope > Label") ?? []
    ).filter((t) => t.namespaceURI === ye).sort(
      (t, e) => (t.textContent ?? "").localeCompare(e.textContent ?? "")
    );
  }
  addLabel() {
    if (this.newLabelField.checkValidity()) {
      const t = this.newLabelField.value;
      pc(this.newLabelsElement, t), this.newLabelField.value = "", this.requestUpdate("labels");
    }
  }
  removeLabel(t) {
    this.newLabelsElement.removeChild(t), this.requestUpdate("labels");
  }
  updateLabelsInPrivateElement(t) {
    this.originalLabelsElement && t?.removeChild(this.originalLabelsElement), t?.append(this.newLabelsElement), this.originalLabelsElement = this.newLabelsElement;
  }
  render() {
    const t = this.labels;
    return d`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <wizard-textfield
            id="newLabel"
            label="${$("compas.newLabel")}"
            ?disabled="${t.length >= oi}"
            .maybeValue=${null}
            pattern="[A-Za-z][0-9A-Za-z_-]*"
            required
          >
          </wizard-textfield>
        </div>
        <div style="display: flex; align-items: center; height: 56px;">
          <mwc-icon-button
            icon="new_label"
            ?disabled="${t.length >= oi}"
            @click=${() => {
      this.addLabel();
    }}
          ></mwc-icon-button>
        </div>
      </div>
      <mwc-list>
        ${t.map((e) => {
      const i = e.textContent;
      return d` <mwc-list-item hasMeta graphic="icon">
            <span>${i}</span>
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
pe.styles = K`
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
_e([
  p()
], pe.prototype, "privateElement", 1);
_e([
  p()
], pe.prototype, "originalLabelsElement", 2);
_e([
  p()
], pe.prototype, "newLabelsElement", 2);
_e([
  S()
], pe.prototype, "labels", 1);
_e([
  L("wizard-textfield#newLabel")
], pe.prototype, "newLabelField", 2);
pe = _e([
  z("compas-labels-field")
], pe);
function Vc(t) {
  return (e, i) => {
    const r = qr(e.find((a) => a.label === "filename")), n = i.shadowRoot.querySelector("compas-labels-field"), c = At(t, Be), o = Et(c), s = {
      actions: [],
      title: C("compas.scl.updateAction")
    };
    if (o) {
      const a = o.textContent;
      if (r !== a) {
        const u = Fr(o, {});
        u.textContent = r, s.actions.push({
          old: { element: o },
          new: { element: u }
        });
      }
    } else {
      const a = sc(t, r);
      s.actions.push({
        new: { parent: c, element: a }
      });
    }
    return n.originalLabelsElement && s.actions.push({
      old: {
        parent: c,
        element: n.originalLabelsElement
      }
    }), s.actions.push({
      new: { parent: c, element: n.newLabelsElement }
    }), [s];
  };
}
function Pc(t) {
  let e = At(t, Be);
  e || (e = oc(t, Be), t.prepend(e));
  const r = Et(e)?.textContent ?? "";
  return [
    d`<wizard-textfield
      label="filename"
      .maybeValue=${r}
      helper="${$("compas.scl.filenameHelper")}"
      required
      validationMessage="${$("textfield.required")}"
      dialogInitialFocus
    >
    </wizard-textfield>`,
    d`<h3 style="color: var(--mdc-theme-on-surface);">
        ${$("compas.scl.labelsTitle")}
      </h3>
      <compas-labels-field
        .privateElement="${e}"
      ></compas-labels-field>`
  ];
}
function Tc(t) {
  return [
    {
      title: C("compas.scl.wizardTitle"),
      element: t,
      primary: {
        icon: "edit",
        label: C("save"),
        action: Vc(t)
      },
      content: Pc(t)
    }
  ];
}
var Mc = Object.defineProperty, J = (t, e, i, r) => {
  for (var n = void 0, c = t.length - 1, o; c >= 0; c--)
    (o = t[c]) && (n = o(e, i, n) || n);
  return n && Mc(e, i, n), n;
};
class Q extends Z {
  constructor() {
    super(...arguments), this.selectedVersionsOnCompasVersionsEditor = /* @__PURE__ */ new Set();
  }
  updated(e) {
    super.updated(e), e.has("doc") && (this.selectedVersionsOnCompasVersionsEditor = /* @__PURE__ */ new Set(), this.docId ? this.fetchData() : this.historyItem = []);
  }
  fetchData() {
    if (this.historyItem = void 0, !this.docId)
      this.historyItem = [];
    else {
      const e = le(this.docName);
      be().listSclVersions(e, this.docId).then((i) => {
        this.historyItem = Array.from(
          i.querySelectorAll("HistoryItem") ?? []
        );
      }).catch(() => {
        this.historyItem = [];
      });
    }
  }
  addVersionWizard() {
    return Ic({
      docId: this.docId,
      docName: this.docName
    });
  }
  confirmRestoreVersionWizard(e) {
    function i(r) {
      function n(c) {
        Hi(r, c), r.dispatchEvent(
          ke({
            kind: "info",
            title: C("compas.versions.restoreVersionSuccess", {
              version: e
            })
          })
        );
      }
      return function() {
        const c = le(r.docName);
        return be().getSclDocumentVersion(r, c, r.docId, e).then(n).catch((o) => $e(r, o)), r.dispatchEvent(B()), [];
      };
    }
    return [
      {
        title: C("compas.versions.confirmRestoreTitle"),
        primary: {
          icon: "",
          label: C("compas.versions.confirmButton"),
          action: i(this)
        },
        content: [
          d`<span
            >${$("compas.versions.confirmRestore", {
            version: e
          })}</span
          >`
        ]
      }
    ];
  }
  confirmDeleteProjectWizard() {
    function e(i) {
      return function() {
        const r = le(i.docName);
        return be().deleteSclDocument(r, i.docId).then(() => {
          i.fetchData(), i.dispatchEvent(
            Fi(i.doc, i.docName, {
              detail: { docId: "" }
            })
          ), i.dispatchEvent(
            ke({
              kind: "info",
              title: C("compas.versions.deleteSuccess")
            })
          );
        }).catch((n) => $e(i, n)), i.dispatchEvent(B()), [];
      };
    }
    return [
      {
        title: C("compas.versions.confirmDeleteTitle"),
        primary: {
          icon: "",
          label: C("compas.versions.confirmButton"),
          action: e(this)
        },
        content: [
          d`<span>${$("compas.versions.confirmDelete")}</span>`
        ]
      }
    ];
  }
  confirmDeleteVersionWizard(e) {
    function i(r) {
      return function() {
        const n = le(r.docName);
        return be().deleteSclDocumentVersion(n, r.docId, e).then(() => {
          r.fetchData(), r.dispatchEvent(
            ke({
              kind: "info",
              title: C("compas.versions.deleteVersionSuccess", {
                version: e
              })
            })
          );
        }).catch((c) => $e(r, c)), r.dispatchEvent(B()), [];
      };
    }
    return [
      {
        title: C("compas.versions.confirmDeleteVersionTitle"),
        primary: {
          icon: "",
          label: C("compas.versions.confirmButton"),
          action: i(this)
        },
        content: [
          d`<span
            >${$("compas.versions.confirmDeleteVersion", {
            version: e
          })}</span
          >`
        ]
      }
    ];
  }
  getSelectedVersions() {
    const e = [], i = this.shadowRoot.querySelectorAll("mwc-check-list-item");
    return this.selectedVersionsOnCompasVersionsEditor.forEach((r) => {
      e.push(i.item(r).value);
    }), e;
  }
  async compareCurrentVersion() {
    const e = this.getSelectedVersions();
    e.length === 1 ? (this.compareLeftTitle = e[0], this.compareLeftElement = await this.getVersion(this.compareLeftTitle) ?? void 0, this.compareRightTitle = "Latest", this.compareRightElement = this.doc.documentElement, this.compareDialogTitle = C("compas.compare.titleCurrent", {
      oldVersion: this.compareLeftTitle
    }), this.compareDialog.open = !0) : this.dispatchEvent(
      B(
        this.showMessageWizard(
          C("compas.versions.selectOneVersionsTitle"),
          C("compas.versions.selectOneVersionsMessage", {
            size: e.length
          })
        )
      )
    );
  }
  async compareVersions() {
    const e = this.getSelectedVersions();
    if (e.length === 2) {
      const i = e.slice().sort(hc);
      this.compareLeftTitle = i[0], this.compareLeftElement = await this.getVersion(this.compareLeftTitle) ?? void 0, this.compareRightTitle = i[1], this.compareRightElement = await this.getVersion(this.compareRightTitle) ?? void 0, this.compareDialogTitle = C("compas.compare.title", {
        oldVersion: this.compareLeftTitle,
        newVersion: this.compareRightTitle
      }), this.compareDialog.open = !0;
    } else
      this.dispatchEvent(
        B(
          this.showMessageWizard(
            C("compas.versions.selectTwoVersionsTitle"),
            C("compas.versions.selectTwoVersionsMessage", {
              size: e.length
            })
          )
        )
      );
  }
  onClosedCompareDialog() {
    this.compareDialogTitle = void 0, this.compareLeftElement = void 0, this.compareRightElement = void 0;
  }
  renderCompareDialog() {
    return d`<mwc-dialog
      id="compareDialog"
      heading="${this.compareDialogTitle}"
      @closed=${this.onClosedCompareDialog}
    >
      ${this.compareLeftElement && this.compareRightElement ? d`<plain-compare-list
            .leftHandObject=${this.compareLeftElement}
            .rightHandObject=${this.compareRightElement}
            .leftHandTitle=${this.compareLeftTitle ?? ""}
            .rightHandTitle=${this.compareRightTitle ?? ""}
          ></plain-compare-list>` : d``}
      <mwc-button
        slot="secondaryAction"
        dialogAction="close"
        label="${$("close")}"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      ></mwc-button>
    </mwc-dialog>`;
  }
  showMessageWizard(e, i) {
    return [
      {
        title: e,
        content: [d`<span>${i}</span>`]
      }
    ];
  }
  async getVersion(e) {
    const i = le(this.docName);
    return be().getSclDocumentVersion(this, i, this.docId, e).then((r) => Promise.resolve(r.documentElement)).catch((r) => {
      $e(this, r);
    });
  }
  openEditWizard() {
    const e = Tc(this.doc.documentElement);
    e && this.dispatchEvent(B(e));
  }
  getCurrentVersion() {
    return this.doc.querySelector("Header")?.getAttribute("version") ?? "unknown";
  }
  getCurrentName() {
    return this.doc.querySelector(
      'SCL > Private[type="compas_scl"] > SclName'
    )?.textContent ?? "unknown";
  }
  renderLineInfo(e) {
    let i = ue(e, q, "Name");
    i === null && (i = ue(e, q, "Id"));
    const r = i.textContent ?? "", n = ue(e, q, "Version").textContent ?? "", c = ue(e, q, "Who").textContent ?? "", o = ue(e, q, "When").textContent ?? "", s = ue(e, q, "What").textContent ?? "";
    return d`<span>${r} (Version: ${n})</span>
      <span slot="secondary">
        Who: "${c || "-"}", When: "${o || "-"}", What:
        "${s || "-"}"
      </span>`;
  }
  render() {
    return this.historyItem ? this.historyItem.length <= 0 ? d` <mwc-list>
        <mwc-list-item id="no-scl-versions">
          <span>${$("compas.noSclVersions")}</span>
        </mwc-list-item>
      </mwc-list>` : d` <h1>
        ${$("compas.versions.sclInfo", {
      name: this.getCurrentName(),
      version: this.getCurrentVersion()
    })}
        <nav>
          <abbr title="${$("compas.versions.addVersionButton")}">
            <mwc-icon-button
              icon="playlist_add"
              @click=${() => {
      this.dispatchEvent(B(this.addVersionWizard()));
    }}
            ></mwc-icon-button>
          </abbr>
        </nav>
        <nav>
          <abbr title="${$("compas.versions.deleteProjectButton")}">
            <mwc-icon-button
              icon="delete_forever"
              @click=${() => {
      this.dispatchEvent(
        B(this.confirmDeleteProjectWizard())
      );
    }}
            ></mwc-icon-button>
          </abbr>
        </nav>
        <nav>
          <abbr title="${$("edit")}">
            <mwc-icon-button
              icon="edit"
              @click=${() => this.openEditWizard()}
            ></mwc-icon-button>
          </abbr>
        </nav>
      </h1>
      <div id="containerCompasVersions">
        <section tabindex="0">
          <h1>${$("compas.versions.title")}</h1>
          <mwc-list
            multi
            @selected=${(e) => {
      this.selectedVersionsOnCompasVersionsEditor = e.detail.index;
    }}
          >
            ${this.historyItem.map((e, i, r) => {
      const n = ue(e, q, "Version").textContent ?? "";
      return r.length - 1 === i ? d`<mwc-check-list-item
                  value="${n}"
                  tabindex="0"
                  graphic="icon"
                  twoline
                  .selected=${this.selectedVersionsOnCompasVersionsEditor.has(
        i
      )}
                >
                  ${this.renderLineInfo(e)}
                  <span slot="graphic">
                    <mwc-icon
                      @click=${() => {
        this.dispatchEvent(
          B(
            this.confirmRestoreVersionWizard(n)
          )
        );
      }}
                      >restore</mwc-icon
                    >
                  </span>
                </mwc-check-list-item>` : d`<mwc-check-list-item
                value="${n}"
                tabindex="0"
                graphic="icon"
                twoline
                .selected=${this.selectedVersionsOnCompasVersionsEditor.has(
        i
      )}
              >
                ${this.renderLineInfo(e)}
                <span slot="graphic">
                  <mwc-icon
                    @click=${() => {
        this.dispatchEvent(
          B(
            this.confirmRestoreVersionWizard(n)
          )
        );
      }}
                    >restore</mwc-icon
                  >
                  <mwc-icon
                    @click=${() => {
        this.dispatchEvent(
          B(this.confirmDeleteVersionWizard(n))
        );
      }}
                    >delete</mwc-icon
                  >
                </span>
              </mwc-check-list-item>`;
    })}
          </mwc-list>
        </section>
        <mwc-fab
          extended
          icon="compare"
          label="${$("compas.versions.compareCurrentButton")}"
          @click=${this.compareCurrentVersion}
        ></mwc-fab>
        <mwc-fab
          extended
          icon="compare"
          label="${$("compas.versions.compareButton")}"
          @click=${this.compareVersions}
        ></mwc-fab>
      </div>
      ${this.renderCompareDialog()}` : d` <compas-loading></compas-loading> `;
  }
  static {
    this.styles = K`
    ${Rc}

    mwc-dialog {
      --mdc-dialog-min-width: 64vw;
    }

    mwc-list-item#no-scl-versions > span {
      color: var(--base1);
    }

    :host {
      width: 100vw;
    }

    h1 > nav,
    h1 > abbr > mwc-icon-button {
      float: right;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    #containerCompasVersions {
      padding: 16px 12px 16px 12px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #containerCompasVersions {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }

    mwc-check-list-item {
      padding-left: 60px;
    }

    mwc-check-list-item > span {
      width: 90px;
      text-align: left;
    }

    mwc-fab {
      float: right;
      margin: 5px 5px 5px 5px;
    }
  `;
  }
}
J([
  p()
], Q.prototype, "doc");
J([
  p({ type: String })
], Q.prototype, "docId");
J([
  p({ type: String })
], Q.prototype, "docName");
J([
  p()
], Q.prototype, "historyItem");
J([
  S()
], Q.prototype, "compareDialogTitle");
J([
  S()
], Q.prototype, "compareLeftElement");
J([
  S()
], Q.prototype, "compareLeftTitle");
J([
  S()
], Q.prototype, "compareRightElement");
J([
  S()
], Q.prototype, "compareRightTitle");
J([
  L("mwc-dialog#compareDialog")
], Q.prototype, "compareDialog");
export {
  Q as default
};
