import { LitElement as ce, query as $, property as d, state as x, html as u, css as ee, customElement as H, queryAsync as Kt, eventOptions as Ri, queryAssignedNodes as Zt, unsafeCSS as Jt } from "lit-element";
import { NodePart as Ni, AttributePart as Fi, directive as Qt, nothing as Pi } from "lit-html";
import "@material/mwc-button";
import "@material/mwc-formfield";
import { TextField as Oi } from "@material/mwc-textfield";
import { List as Mi } from "@material/mwc-list";
import { Select as Ui } from "@material/mwc-select";
import "@material/mwc-icon-button";
import "@material/mwc-menu";
import "@material/mwc-switch";
import "@material/mwc-icon";
import "@material/mwc-dialog";
const qi = 1e3 * 60, wt = "langChanged";
function Bi(t, e, i) {
  return Object.entries(at(e || {})).reduce((r, [n, s]) => r.replace(new RegExp(`{{[  ]*${n}[  ]*}}`, "gm"), String(at(s))), t);
}
function zi(t, e) {
  const i = t.split(".");
  let r = e.strings;
  for (; r != null && i.length > 0; )
    r = r[i.shift()];
  return r != null ? r.toString() : null;
}
function at(t) {
  return typeof t == "function" ? t() : t;
}
const Vi = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: zi,
  interpolate: Bi,
  translationCache: {}
});
let Gi = Vi();
function Hi(t, e) {
  const i = (r) => t(r.detail);
  return window.addEventListener(wt, i, e), () => window.removeEventListener(wt, i);
}
function V(t, e, i = Gi) {
  let r = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? at(e) : null, e != null ? i.interpolate(r, e, i) : r;
}
function Yt(t) {
  return t instanceof Ni ? t.startNode.isConnected : t instanceof Fi ? t.committer.element.isConnected : t.element.isConnected;
}
function Wi(t) {
  for (const [e] of t)
    Yt(e) || t.delete(e);
}
function ji(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function Xi(t, e) {
  setInterval(() => ji(() => Wi(t)), e);
}
const vt = /* @__PURE__ */ new Map();
function Ki() {
  Hi((t) => {
    for (const [e, i] of vt)
      Yt(e) && ei(e, i, t);
  });
}
Ki();
Xi(vt, qi);
function ei(t, e, i) {
  const r = e(i);
  t.value !== r && (t.setValue(r), t.commit());
}
const Zi = Qt((t) => (e) => {
  vt.set(e, t), ei(e, t);
}), w = (t, e, i) => Zi(() => V(t, e, i));
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
const ti = /* @__PURE__ */ new WeakMap(), St = (t) => (...e) => {
  const i = t(...e);
  return ti.set(i, !0), i;
}, It = (t) => typeof t == "function" && ti.has(t);
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
const rt = {};
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
const Ji = (t) => t === null || !(typeof t == "object" || typeof t == "function");
class Ke {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== rt && (!Ji(e) || e !== this.value) && (this.value = e, It(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; It(this.value); ) {
      const e = this.value;
      this.value = rt, e(this);
    }
    this.value !== rt && this.committer.commit();
  }
}
class ii extends Ke {
}
let Qi = !1;
(() => {
  try {
    const t = {
      get capture() {
        return Qi = !0, !1;
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
var ot = function(t, e) {
  return ot = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (i[n] = r[n]);
  }, ot(t, e);
};
function Yi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ot(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var $e = function() {
  return $e = Object.assign || function(e) {
    for (var i, r = 1, n = arguments.length; r < n; r++) {
      i = arguments[r];
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
    return e;
  }, $e.apply(this, arguments);
};
function l(t, e, i, r) {
  var n = arguments.length, s = n < 3 ? e : r === null ? r = Object.getOwnPropertyDescriptor(e, i) : r, c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, i, r);
  else for (var a = t.length - 1; a >= 0; a--) (c = t[a]) && (s = (n < 3 ? c(s) : n > 3 ? c(e, i, s) : c(e, i)) || s);
  return n > 3 && s && Object.defineProperty(e, i, s), s;
}
function Pe(t) {
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
function er(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const tr = (t) => t.nodeType === Node.ELEMENT_NODE, ri = () => {
}, ir = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", ri, ir);
document.removeEventListener("x", ri);
const ni = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, rr = (t) => {
  const e = ni();
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
class xt extends ce {
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
var si = (
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
var nr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, sr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Dt = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function cr(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, n = e.y, s = r + i.left, c = n + i.top, a, o;
  if (t.type === "touchstart") {
    var f = t;
    a = f.changedTouches[0].pageX - s, o = f.changedTouches[0].pageY - c;
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
var $t = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Tt = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Oe = [], ar = (
  /** @class */
  function(t) {
    Yi(e, t);
    function e(i) {
      var r = t.call(this, $e($e({}, e.defaultAdapter), i)) || this;
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
        return sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dt;
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
          for (var s = Pe($t), c = s.next(); !c.done; c = s.next()) {
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
          for (var s = Pe(Tt), c = s.next(); !c.done; c = s.next()) {
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
        for (var n = Pe($t), s = n.next(); !s.done; s = n.next()) {
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
        for (var n = Pe(Tt), s = n.next(); !s.done; s = n.next()) {
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
            var a = i !== void 0 && Oe.length > 0 && Oe.some(function(o) {
              return r.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && (Oe.push(i.target), this.registerDeactivationHandlers(i)), n.wasElementMadeActive = this.checkElementMadeActive(i), n.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Oe = [], !n.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (n.wasElementMadeActive = r.checkElementMadeActive(i), n.wasElementMadeActive && r.animateActivation()), n.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, r = e.strings, n = r.VAR_FG_TRANSLATE_START, s = r.VAR_FG_TRANSLATE_END, c = e.cssClasses, a = c.FG_DEACTIVATION, o = c.FG_ACTIVATION, f = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var h = "", y = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), _ = b.startPoint, A = b.endPoint;
        h = _.x + "px, " + _.y + "px", y = A.x + "px, " + A.y + "px";
      }
      this.adapter.updateCssVariable(n, h), this.adapter.updateCssVariable(s, y), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, f);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, r = i.activationEvent, n = i.wasActivatedByPointer, s;
      n ? s = cr(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      }, Dt.FG_DEACTIVATION_MS));
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
        var n = $e({}, r);
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
  }(si)
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
class or {
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
const Lt = /* @__PURE__ */ new WeakMap(), Ze = St((t) => (e) => {
  if (!(e instanceof Ke) || e instanceof ii || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: r } = i;
  let n = Lt.get(e);
  n === void 0 && (r.setAttribute("class", i.strings.join(" ")), Lt.set(e, n = /* @__PURE__ */ new Set()));
  const s = r.classList || new or(r);
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
const Rt = /* @__PURE__ */ new WeakMap(), lr = St((t) => (e) => {
  if (!(e instanceof Ke) || e instanceof ii || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: r } = i.element;
  let n = Rt.get(e);
  n === void 0 && (r.cssText = i.strings.join(" "), Rt.set(e, n = /* @__PURE__ */ new Set())), n.forEach((s) => {
    s in t || (n.delete(s), s.indexOf("-") === -1 ? r[s] = null : r.removeProperty(s));
  });
  for (const s in t)
    n.add(s), s.indexOf("-") === -1 ? r[s] = t[s] : r.setProperty(s, t[s]);
});
class T extends xt {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = ar;
  }
  get isActive() {
    return er(this.parentElement || this, ":active");
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
    return u`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ze(r)}"
          style="${lr({
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
  $(".mdc-ripple-surface")
], T.prototype, "mdcRoot", void 0);
l([
  d({ type: Boolean })
], T.prototype, "primary", void 0);
l([
  d({ type: Boolean })
], T.prototype, "accent", void 0);
l([
  d({ type: Boolean })
], T.prototype, "unbounded", void 0);
l([
  d({ type: Boolean })
], T.prototype, "disabled", void 0);
l([
  d({ type: Boolean })
], T.prototype, "activated", void 0);
l([
  d({ type: Boolean })
], T.prototype, "selected", void 0);
l([
  d({ type: Boolean })
], T.prototype, "internalUseStateLayerCustomProperties", void 0);
l([
  x()
], T.prototype, "hovering", void 0);
l([
  x()
], T.prototype, "bgFocused", void 0);
l([
  x()
], T.prototype, "fgActivation", void 0);
l([
  x()
], T.prototype, "fgDeactivation", void 0);
l([
  x()
], T.prototype, "fgScale", void 0);
l([
  x()
], T.prototype, "fgSize", void 0);
l([
  x()
], T.prototype, "translateStart", void 0);
l([
  x()
], T.prototype, "translateEnd", void 0);
l([
  x()
], T.prototype, "leftPos", void 0);
l([
  x()
], T.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const dr = ee`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let lt = class extends T {
};
lt.styles = [dr];
lt = l([
  H("mwc-ripple")
], lt);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function pr(t, e, i) {
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
function _t(t, e, i) {
  if (e !== void 0)
    return pr(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ci extends xt {
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
ci.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ai {
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
const nt = /* @__PURE__ */ new WeakMap(), ge = St((t) => (e) => {
  const i = nt.get(e);
  if (t === void 0 && e instanceof Ke) {
    if (i !== void 0 || !nt.has(e)) {
      const r = e.committer.name;
      e.committer.element.removeAttribute(r);
    }
  } else t !== i && e.setValue(t);
  nt.set(e, t);
});
class L extends ci {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new ai(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
    return this.shouldRenderRipple ? u`<mwc-ripple
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
    return u`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ze(i)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${ge(this.name)}"
              aria-checked="${ge(r)}"
              aria-label="${ge(this.ariaLabel)}"
              aria-labelledby="${ge(this.ariaLabelledBy)}"
              aria-describedby="${ge(this.ariaDescribedBy)}"
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
  $(".mdc-checkbox")
], L.prototype, "mdcRoot", void 0);
l([
  $("input")
], L.prototype, "formElement", void 0);
l([
  d({ type: Boolean, reflect: !0 })
], L.prototype, "checked", void 0);
l([
  d({ type: Boolean })
], L.prototype, "indeterminate", void 0);
l([
  d({ type: Boolean, reflect: !0 })
], L.prototype, "disabled", void 0);
l([
  d({ type: String, reflect: !0 })
], L.prototype, "name", void 0);
l([
  d({ type: String })
], L.prototype, "value", void 0);
l([
  _t,
  d({ type: String, attribute: "aria-label" })
], L.prototype, "ariaLabel", void 0);
l([
  _t,
  d({ type: String, attribute: "aria-labelledby" })
], L.prototype, "ariaLabelledBy", void 0);
l([
  _t,
  d({ type: String, attribute: "aria-describedby" })
], L.prototype, "ariaDescribedBy", void 0);
l([
  d({ type: Boolean })
], L.prototype, "reducedTouchTarget", void 0);
l([
  x()
], L.prototype, "animationClass", void 0);
l([
  x()
], L.prototype, "shouldRenderRipple", void 0);
l([
  x()
], L.prototype, "focused", void 0);
l([
  x()
], L.prototype, "useStateLayerCustomProperties", void 0);
l([
  Kt("mwc-ripple")
], L.prototype, "ripple", void 0);
l([
  Ri({ passive: !0 })
], L.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const mr = ee`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let dt = class extends L {
};
dt.styles = [mr];
dt = l([
  H("mwc-checkbox")
], dt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const he = (t) => (
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
class N extends ce {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new ai(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
    const e = this.renderText(), i = this.graphic ? this.renderGraphic() : u``, r = this.hasMeta ? this.renderMeta() : u``;
    return u`
      ${this.renderRipple()}
      ${i}
      ${e}
      ${r}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? u`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? u`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const e = {
      multi: this.multipleGraphics
    };
    return u`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ze(e)}">
        <slot name="graphic"></slot>
      </span>`;
  }
  renderMeta() {
    return u`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`;
  }
  renderText() {
    const e = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return u`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`;
  }
  renderSingleLine() {
    return u`<slot></slot>`;
  }
  renderTwoline() {
    return u`
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
  $("slot")
], N.prototype, "slotElement", void 0);
l([
  Kt("mwc-ripple")
], N.prototype, "ripple", void 0);
l([
  d({ type: String })
], N.prototype, "value", void 0);
l([
  d({ type: String, reflect: !0 })
], N.prototype, "group", void 0);
l([
  d({ type: Number, reflect: !0 })
], N.prototype, "tabindex", void 0);
l([
  d({ type: Boolean, reflect: !0 }),
  he(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], N.prototype, "disabled", void 0);
l([
  d({ type: Boolean, reflect: !0 })
], N.prototype, "twoline", void 0);
l([
  d({ type: Boolean, reflect: !0 })
], N.prototype, "activated", void 0);
l([
  d({ type: String, reflect: !0 })
], N.prototype, "graphic", void 0);
l([
  d({ type: Boolean })
], N.prototype, "multipleGraphics", void 0);
l([
  d({ type: Boolean })
], N.prototype, "hasMeta", void 0);
l([
  d({ type: Boolean, reflect: !0 }),
  he(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], N.prototype, "noninteractive", void 0);
l([
  d({ type: Boolean, reflect: !0 }),
  he(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], N.prototype, "selected", void 0);
l([
  x()
], N.prototype, "shouldRenderRipple", void 0);
l([
  x()
], N.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Re extends N {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), r = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : u``, n = this.hasMeta && this.left ? this.renderMeta() : u``, s = this.renderRipple();
    return u`
      ${s}
      ${r}
      ${this.left ? "" : i}
      <span class=${Ze(e)}>
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
  $("slot")
], Re.prototype, "slotElement", void 0);
l([
  $("mwc-checkbox")
], Re.prototype, "checkboxElement", void 0);
l([
  d({ type: Boolean })
], Re.prototype, "left", void 0);
l([
  d({ type: String, reflect: !0 })
], Re.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ur = ee`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const oi = ee`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ke = class extends Re {
};
ke.styles = [oi, ur];
ke = l([
  H("mwc-check-list-item")
], ke);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let pt = class extends N {
};
pt.styles = [oi];
pt = l([
  H("mwc-list-item")
], pt);
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
var g = {
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
q.add(g.BACKSPACE);
q.add(g.ENTER);
q.add(g.SPACEBAR);
q.add(g.PAGE_UP);
q.add(g.PAGE_DOWN);
q.add(g.END);
q.add(g.HOME);
q.add(g.ARROW_LEFT);
q.add(g.ARROW_UP);
q.add(g.ARROW_RIGHT);
q.add(g.ARROW_DOWN);
q.add(g.DELETE);
q.add(g.ESCAPE);
q.add(g.TAB);
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
}, B = /* @__PURE__ */ new Map();
B.set(W.BACKSPACE, g.BACKSPACE);
B.set(W.ENTER, g.ENTER);
B.set(W.SPACEBAR, g.SPACEBAR);
B.set(W.PAGE_UP, g.PAGE_UP);
B.set(W.PAGE_DOWN, g.PAGE_DOWN);
B.set(W.END, g.END);
B.set(W.HOME, g.HOME);
B.set(W.ARROW_LEFT, g.ARROW_LEFT);
B.set(W.ARROW_UP, g.ARROW_UP);
B.set(W.ARROW_RIGHT, g.ARROW_RIGHT);
B.set(W.ARROW_DOWN, g.ARROW_DOWN);
B.set(W.DELETE, g.DELETE);
B.set(W.ESCAPE, g.ESCAPE);
B.set(W.TAB, g.TAB);
var fe = /* @__PURE__ */ new Set();
fe.add(g.PAGE_UP);
fe.add(g.PAGE_DOWN);
fe.add(g.END);
fe.add(g.HOME);
fe.add(g.ARROW_LEFT);
fe.add(g.ARROW_UP);
fe.add(g.ARROW_RIGHT);
fe.add(g.ARROW_DOWN);
function ae(t) {
  var e = t.key;
  if (q.has(e))
    return e;
  var i = B.get(t.keyCode);
  return i || g.UNKNOWN;
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
var oe, te, k = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
oe = {}, oe["" + k.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", oe["" + k.LIST_ITEM_CLASS] = "mdc-list-item", oe["" + k.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", oe["" + k.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", oe["" + k.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", oe["" + k.ROOT] = "mdc-list";
var _e = (te = {}, te["" + k.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", te["" + k.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", te["" + k.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", te["" + k.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", te["" + k.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", te["" + k.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", te["" + k.ROOT] = "mdc-deprecated-list", te), Me = {
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
    .` + k.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + k.LIST_ITEM_CLASS + ` a,
    .` + _e[k.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _e[k.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + k.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + k.LIST_ITEM_CLASS + ` a,
    .` + k.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + k.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + _e[k.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _e[k.LIST_ITEM_CLASS] + ` a,
    .` + _e[k.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + _e[k.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, z = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const mt = (t, e) => t - e, hr = (t, e) => {
  const i = Array.from(t), r = Array.from(e), n = { added: [], removed: [] }, s = i.sort(mt), c = r.sort(mt);
  let a = 0, o = 0;
  for (; a < s.length || o < c.length; ) {
    const f = s[a], h = c[o];
    if (f === h) {
      a++, o++;
      continue;
    }
    if (f !== void 0 && (h === void 0 || f < h)) {
      n.removed.push(f), a++;
      continue;
    }
    if (h !== void 0 && (f === void 0 || h < f)) {
      n.added.push(h), o++;
      continue;
    }
  }
  return n;
}, fr = ["input", "button", "textarea", "select"];
function Te(t) {
  return t instanceof Set;
}
const st = (t) => {
  const e = t === z.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return Te(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class kt extends si {
  constructor(e) {
    super(Object.assign(Object.assign({}, kt.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = z.UNSET_INDEX, this.focusedItemIndex_ = z.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Me;
  }
  static get numbers() {
    return z;
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
      if (!Te(i)) {
        const r = i === z.UNSET_INDEX;
        this.selectedIndex_ = r ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (Te(i))
      if (i.size) {
        const r = Array.from(i).sort(mt);
        this.selectedIndex_ = r[0];
      } else
        this.selectedIndex_ = z.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(st(e)) : this.setSingleSelectionAtIndex_(e));
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
    const n = ae(e) === "ArrowLeft", s = ae(e) === "ArrowUp", c = ae(e) === "ArrowRight", a = ae(e) === "ArrowDown", o = ae(e) === "Home", f = ae(e) === "End", h = ae(e) === "Enter", y = ae(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      s || f ? (e.preventDefault(), this.focusLastElement()) : (a || o) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = r, b < 0))
      return;
    let _;
    if (this.isVertical_ && a || !this.isVertical_ && c)
      this.preventDefaultEvent(e), _ = this.focusNextElement(b);
    else if (this.isVertical_ && s || !this.isVertical_ && n)
      this.preventDefaultEvent(e), _ = this.focusPrevElement(b);
    else if (o)
      this.preventDefaultEvent(e), _ = this.focusFirstElement();
    else if (f)
      this.preventDefaultEvent(e), _ = this.focusLastElement();
    else if ((h || y) && i) {
      const A = e.target;
      if (A && A.tagName === "A" && h)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, _ !== void 0 && (this.setTabindexAtIndex_(_), this.focusedItemIndex_ = _);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, r) {
    e !== z.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, r), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    fr.indexOf(r) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== z.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const r = st(this.selectedIndex_), n = hr(r, e);
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
    this.selectedIndex_ === z.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Me.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, r = i ? Me.ARIA_CURRENT : Me.ARIA_SELECTED;
    this.selectedIndex_ !== z.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, r, "false");
    const n = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, r, n);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === z.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== z.UNSET_INDEX ? e = this.selectedIndex_ : Te(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === z.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (n = /* @__PURE__ */ new Set([e])), this.isIndexValid_(n) && (this.isMulti_ ? this.toggleMultiAtIndex(e, r, i) : i || r ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(z.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, r = !0) {
    let n = !1;
    i === void 0 ? n = !this.adapter.getSelectedStateForElementIndex(e) : n = i;
    const s = st(this.selectedIndex_);
    n ? s.add(e) : s.delete(e), this.setMultiSelectionAtIndex_(s, r);
  }
}
function br(t, e = 50) {
  let i;
  return function(r = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(r);
    }, e);
  };
}
const Ue = (t) => t.hasAttribute("mwc-list-item");
function gr() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class K extends xt {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = kt, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = br(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      gr.call(this), e(i);
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
      Ue(c) && (r.push(c), c._managingList = this), c.hasAttribute("divider") && !c.hasAttribute("role") && c.setAttribute("role", "separator");
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
    if (!Te(e))
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
    return u`
      <!-- @ts-ignore -->
      <ul
          tabindex=${r}
          role="${ge(e)}"
          aria-label="${ge(i)}"
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
    return this.emptyMessage !== void 0 && i.length === 0 ? u`
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
      const i = this.getIndexOfTarget(e), r = e.target, n = Ue(r);
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
      if (tr(n) && Ue(n) && (s = i.indexOf(n)), s !== -1)
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
      isFocusInsideList: () => rr(this),
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
    const e = ni();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const r = e[i];
      if (Ue(r))
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
l([
  d({ type: String })
], K.prototype, "emptyMessage", void 0);
l([
  $(".mdc-deprecated-list")
], K.prototype, "mdcRoot", void 0);
l([
  Zt("", !0, "*")
], K.prototype, "assignedElements", void 0);
l([
  Zt("", !0, '[tabindex="0"]')
], K.prototype, "tabbableElements", void 0);
l([
  d({ type: Boolean }),
  he(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], K.prototype, "activatable", void 0);
l([
  d({ type: Boolean }),
  he(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], K.prototype, "multi", void 0);
l([
  d({ type: Boolean }),
  he(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], K.prototype, "wrapFocus", void 0);
l([
  d({ type: String }),
  he(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], K.prototype, "itemRoles", void 0);
l([
  d({ type: String })
], K.prototype, "innerRole", void 0);
l([
  d({ type: String })
], K.prototype, "innerAriaLabel", void 0);
l([
  d({ type: Boolean })
], K.prototype, "rootTabbable", void 0);
l([
  d({ type: Boolean, reflect: !0 }),
  he(function(t) {
    var e, i;
    if (t) {
      const r = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = r, r && r.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], K.prototype, "noninteractive", void 0);
var yr = Object.defineProperty, vr = Object.getOwnPropertyDescriptor, Se = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? vr(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && yr(e, i, n), n;
};
function ut(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof Q ? t : ut(t.parentElement);
}
function Sr(t, e) {
  const i = t.innerText + `
`, r = Array.from(t.children).map((a) => a.innerText).join(`
`), n = t.value, s = (i + r + n).toUpperCase(), c = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  c.length === 1 && c[0] === "" || c.every((a) => new RegExp(
    `*${a}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(s)) ? ut(t).classList.remove("hidden") : ut(t).classList.add("hidden");
}
let Q = class extends K {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof ke);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ke).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof ke).some((t) => t.selected);
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
      (t) => Sr(t, this.searchField.value)
    );
  }
  onListItemConnected(t) {
    super.onListItemConnected(t), this.requestUpdate();
  }
  update(t) {
    super.update(t), this.onFilterInput();
  }
  renderCheckAll() {
    return this.existCheckListItem && !this.disableCheckAll ? u`<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
      this.onCheckAll();
    }}
          ></mwc-checkbox
        ></mwc-formfield>` : u``;
  }
  render() {
    return u`<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? V("filter")}"
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
Q.styles = ee`
    ${Jt(Mi.styles)}

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
Se([
  d({ type: String })
], Q.prototype, "searchFieldLabel", 2);
Se([
  d({ type: Boolean })
], Q.prototype, "disableCheckAll", 2);
Se([
  x()
], Q.prototype, "existCheckListItem", 1);
Se([
  x()
], Q.prototype, "isAllSelected", 1);
Se([
  x()
], Q.prototype, "isSomeSelected", 1);
Se([
  $("mwc-textfield")
], Q.prototype, "searchField", 2);
Q = Se([
  H("filtered-list")
], Q);
function li(t, e, i) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([n, s]) => s !== null).forEach(([n, s]) => r.setAttribute(n, s)), r;
}
var xr = Object.defineProperty, _r = Object.getOwnPropertyDescriptor, Y = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? _r(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && xr(e, i, n), n;
};
let X = class extends Oi {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(V("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
  }
  renderUnitSelector() {
    return this.multipliers.length && this.unit ? u`<div style="position:relative;">
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
      </div>` : u``;
  }
  renderMulplierList() {
    return u`${this.multipliers.map(
      (t) => u`<mwc-list-item ?selected=${t === this.multiplier}
          >${t === null ? V("textfield.noMultiplier") : t}</mwc-list-item
        >`
    )}`;
  }
  renderSwitch() {
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
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
], X.prototype, "nullable", 2);
Y([
  d({ type: Array })
], X.prototype, "multipliers", 2);
Y([
  d({ type: String })
], X.prototype, "multiplier", 1);
Y([
  d({ type: String })
], X.prototype, "unit", 2);
Y([
  x()
], X.prototype, "null", 1);
Y([
  d({ type: String })
], X.prototype, "maybeValue", 1);
Y([
  d({ type: String })
], X.prototype, "defaultValue", 2);
Y([
  d({ type: Array })
], X.prototype, "reservedValues", 2);
Y([
  $("mwc-switch")
], X.prototype, "nullSwitch", 2);
Y([
  $("mwc-menu")
], X.prototype, "multiplierMenu", 2);
Y([
  $("mwc-icon-button")
], X.prototype, "multiplierButton", 2);
X = Y([
  H("wizard-textfield")
], X);
var kr = Object.defineProperty, Ar = Object.getOwnPropertyDescriptor, xe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Ar(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && kr(e, i, n), n;
};
let me = class extends Ui {
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
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
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
  d({ type: Boolean })
], me.prototype, "nullable", 2);
xe([
  x()
], me.prototype, "null", 1);
xe([
  d({ type: String })
], me.prototype, "maybeValue", 1);
xe([
  d({ type: String })
], me.prototype, "defaultValue", 2);
xe([
  d({ type: Array })
], me.prototype, "reservedValues", 2);
xe([
  $("mwc-switch")
], me.prototype, "nullSwitch", 2);
me = xe([
  H("wizard-select")
], me);
var Er = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, Z = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Cr(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Er(e, i, n), n;
};
let G = class extends ce {
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
    return this.nullable ? u`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
      this.null = !this.nullSwitch.checked;
    }}
      ></mwc-switch>` : u``;
  }
  render() {
    return u`
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
], G.prototype, "label", 2);
Z([
  d({ type: String })
], G.prototype, "helper", 2);
Z([
  d({ type: Boolean })
], G.prototype, "nullable", 2);
Z([
  d({ type: Boolean })
], G.prototype, "defaultChecked", 2);
Z([
  d({ type: String })
], G.prototype, "maybeValue", 1);
Z([
  d({ type: Boolean })
], G.prototype, "disabled", 2);
Z([
  x()
], G.prototype, "null", 1);
Z([
  x()
], G.prototype, "checked", 1);
Z([
  x()
], G.prototype, "deactivateCheckbox", 2);
Z([
  x()
], G.prototype, "formfieldLabel", 1);
Z([
  $("mwc-switch")
], G.prototype, "nullSwitch", 2);
Z([
  $("mwc-checkbox")
], G.prototype, "checkbox", 2);
G = Z([
  H("wizard-checkbox")
], G);
function wr(t, e) {
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: null, ...e?.detail }
  });
}
function O(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const C = ":not(*)";
function Ir(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Dr(t, e) {
  const [i, r] = e.split("	");
  return !i || !r ? C : `${t}[version="${i}"][revision="${r}"]`;
}
function Nt(t) {
  return D(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Ft(t, e) {
  const [i, r] = O(e), n = I[t].parents.flatMap(
    (s) => F(s, i).split(",")
  );
  return P(
    n,
    [">"],
    [`${t}[connectivityNode="${r}"]`]
  ).map((s) => s.join("")).join(",");
}
function $r(t) {
  const [e, i, r, n, s, c] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((a) => t.getAttribute(a));
  return e === "None" ? `${D(t.parentElement)}>(${n} ${c} ${s})` : `${e} ${i || "(Client)"}/${r ?? ""} ${n} ${s ?? ""}`;
}
function Tr(t, e) {
  if (e.endsWith(")")) {
    const [b, _] = O(e), [A, M, R] = _.substring(1, _.length - 1).split(" ");
    if (!A || !M) return C;
    const U = I[t].parents.flatMap(
      (J) => F(J, b).split(",")
    );
    return P(
      U,
      [">"],
      [`${t}[iedName="None"][lnClass="${A}"][lnType="${M}"][lnInst="${R}"]`]
    ).map((J) => J.join("")).join(",");
  }
  const [i, r, n, s, c] = e.split(/[ /]/);
  if (!i || !r || !s) return C;
  const [
    a,
    o,
    f,
    h,
    y
  ] = [
    [`[iedName="${i}"]`],
    r === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${r}"]`],
    n ? [`[prefix="${n}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${s}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return P(
    [t],
    a,
    o,
    f,
    h,
    y
  ).map((b) => b.join("")).join(",");
}
function Lr(t) {
  return `${D(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Rr(t, e) {
  const [i, r] = O(e), [n, s] = r.split(" ");
  return `${F(
    "IED",
    i
  )}>${t}[iedName="${n}"][apName="${s}"]`;
}
function Nr(t) {
  return `${D(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Fr(t, e) {
  const [i, r] = O(e);
  return r ? `${F(
    "Server",
    i
  )}>${t}[associationID="${r}"]` : C;
}
function Pr(t) {
  return `${D(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Or(t, e) {
  const [i, r] = e.split(">>");
  return r ? `IED[name="${i}"] ${t}[inst="${r}"]` : C;
}
function Mr(t) {
  const e = t.textContent, [i, r, n, s, c] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${D(t.parentElement)}>${e} ${i || ""} ${r || ""}/${n ?? ""} ${s ?? ""} ${c ?? ""}`;
}
function Ur(t, e) {
  const [i, r] = O(e), [n, s, c, a, o, f] = r.split(/[ /]/), [
    h,
    y,
    b,
    _,
    A,
    M
  ] = [
    I[t].parents.flatMap(
      (R) => F(R, i).split(",")
    ),
    [`${n}`],
    s ? [`[apRef="${s}"]`] : [":not([apRef])", '[apRef=""]'],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    f ? [`[lnInst="${f}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return P(
    h,
    [">"],
    [t],
    y,
    b,
    _,
    A,
    M
  ).map((R) => R.join("")).join(",");
}
function qr(t) {
  const [e, i, r, n, s, c, a, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((h) => t.getAttribute(h)), f = `${e}/${i ?? ""} ${r} ${n ?? ""}.${s} ${c || ""}`;
  return `${D(t.parentElement)}>${f} (${a}${o ? " [" + o + "]" : ""})`;
}
function Br(t, e) {
  const [i, r] = O(e), [n, s, c, a] = r.split(/[ /.]/), o = r.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), f = o && o[1] ? o[1] : "", h = o && o[2] ? o[2] : "", y = r.match(/\(([A-Z]{2})/), b = r.match(/ \[([0-9]{1,2})\]/), _ = y && y[1] ? y[1] : "", A = b && b[1] ? b[1] : "", [
    M,
    R,
    U,
    J,
    Ce,
    Ye,
    et,
    tt,
    it
  ] = [
    I[t].parents.flatMap(
      (we) => F(we, i).split(",")
    ),
    [`[ldInst="${n}"]`],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${f}"]`],
    h ? [`[daName="${h}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${_}"]`],
    A ? [`[ix="${A}"]`] : [":not([ix])", '[ix=""]']
  ];
  return P(
    M,
    [">"],
    [t],
    R,
    U,
    J,
    Ce,
    Ye,
    et,
    tt,
    it
  ).map((we) => we.join("")).join(",");
}
function zr(t) {
  if (!t.parentElement) return NaN;
  const e = D(t.parentElement), i = t.getAttribute("iedName"), r = t.getAttribute("intAddr"), n = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${r}"]`)
  ).indexOf(t);
  if (r) return `${e}>${r}[${n}]`;
  const [
    s,
    c,
    a,
    o,
    f,
    h,
    y,
    b,
    _,
    A,
    M,
    R
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
  ].map((Ce) => t.getAttribute(Ce)), U = R ? `${y}:${R} ${b ?? ""}/${_ ?? ""} ${A ?? ""} ${M ?? ""}` : "", J = `${i} ${s}/${c ?? ""} ${a} ${o ?? ""} ${f} ${h || ""}`;
  return `${e}>${U ? U + " " : ""}${J}${r ? `@${r}` : ""}`;
}
function Vr(t, e) {
  const [i, r] = O(e), n = I[t].parents.flatMap(
    (Ie) => F(Ie, i).split(",")
  );
  if (r.endsWith("]")) {
    const [Ie] = r.split("["), Ti = [`[intAddr="${Ie}"]`];
    return P(n, [">"], [t], Ti).map((Li) => Li.join("")).join(",");
  }
  let s, c, a, o, f, h, y, b, _, A, M, R, U, J;
  !r.includes(":") && !r.includes("@") ? [s, c, a, o, f, h, y] = r.split(/[ /]/) : r.includes(":") && !r.includes("@") ? [
    b,
    _,
    A,
    M,
    R,
    U,
    s,
    c,
    a,
    o,
    f,
    h,
    y
  ] = r.split(/[ /:]/) : !r.includes(":") && r.includes("@") ? [s, c, a, o, f, h, y, J] = r.split(/[ /@]/) : [
    b,
    _,
    A,
    M,
    R,
    U,
    s,
    c,
    a,
    o,
    f,
    h,
    y,
    J
  ] = r.split(/[ /:@]/);
  const [
    Ce,
    Ye,
    et,
    tt,
    it,
    we,
    ki,
    Ai,
    Ei,
    Ci,
    wi,
    Ii,
    Di,
    $i
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])"],
    c ? [`[ldInst="${c}"]`] : [":not([ldInst])", '[ldInst=""]'],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    o ? [`[lnClass="${o}"]`] : [":not([lnClass])"],
    f ? [`[lnInst="${f}"]`] : [":not([lnInst])", '[lnInst=""]'],
    h ? [`[doName="${h}"]`] : [":not([doName])"],
    y ? [`[daName="${y}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    _ ? [`[srcCBName="${_}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    A ? [`[srcLDInst="${A}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    M ? [`[srcPrefix="${M}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    R ? [`[srcLNClass="${R}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    U ? [`[srcLNInst="${U}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    J ? [`[intAddr="${J}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return P(
    n,
    [">"],
    [t],
    Ce,
    Ye,
    et,
    tt,
    it,
    we,
    ki,
    Ai,
    Ei,
    Ci,
    wi,
    Ii,
    Di,
    $i
  ).map((Ie) => Ie.join("")).join(",");
}
function Gr(t) {
  const [e, i, r] = ["prefix", "lnClass", "inst"].map(
    (n) => t.getAttribute(n)
  );
  return `${D(t.parentElement)}>${e ?? ""} ${i} ${r}`;
}
function Hr(t, e) {
  const [i, r] = O(e), n = I[t].parents.flatMap(
    (y) => F(y, i).split(",")
  ), [s, c, a] = r.split(" ");
  if (!c) return C;
  const [o, f, h] = [
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    [`[inst="${a}"]`]
  ];
  return P(
    n,
    [">"],
    [t],
    o,
    f,
    h
  ).map((y) => y.join("")).join(",");
}
function Wr(t) {
  const [e, i, r, n, s, c] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return `${D(t.parentElement)}>${i} ${e || ""} ${r}/${n ?? ""} ${s} ${c}`;
}
function jr(t, e) {
  const [i, r] = O(e), n = I[t].parents.flatMap(
    (U) => F(U, i).split(",")
  ), [s, c, a, o, f, h] = r.split(/[ /]/), [
    y,
    b,
    _,
    A,
    M,
    R
  ] = [
    s ? [`[iedName="${s}"]`] : [":not([iedName])", '[iedName=""]'],
    c ? [`[apRef="${c}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${f}"]`],
    h ? [`[lnInst="${h}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return P(
    n,
    [">"],
    [t],
    y,
    b,
    _,
    A,
    M,
    R
  ).map((U) => U.join("")).join(",");
}
function Pt(t) {
  const [e, i] = ["name", "ix"].map((r) => t.getAttribute(r));
  return `${D(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function ht(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = O(e), [s, c, a, o] = n.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!c) return C;
  if (i === 0) return `${t}[name="${c}"]`;
  const f = I[t].parents.flatMap(
    (b) => b === "SDI" ? ht(b, r, i - 1).split(",") : F(b, r).split(",")
  ).filter((b) => !b.startsWith(C));
  if (f.length === 0) return C;
  const [h, y] = [
    [`[name="${c}"]`],
    o ? [`[ix="${o}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return P(
    f,
    [">"],
    [t],
    h,
    y
  ).map((b) => b.join("")).join(",");
}
function Xr(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((r) => r.getAttribute("sGroup") === e).findIndex((r) => r.isSameNode(t));
  return `${D(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function Kr(t, e) {
  const [i, r] = O(e), [n, s] = r.split(" "), c = parseFloat(s), a = I[t].parents.flatMap(
    (h) => F(h, i).split(",")
  ), [o, f] = [
    n ? [`[sGroup="${n}"]`] : [""],
    c ? [`:nth-child(${c + 1})`] : [""]
  ];
  return P(
    a,
    [">"],
    [t],
    o,
    f
  ).map((h) => h.join("")).join(",");
}
function Zr(t) {
  const [e, i] = ["iedName", "apName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Jr(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? C : `${t}[iedName="${i}"][apName="${r}"]`;
}
function Ot(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (r) => t.getAttribute(r)
  );
  return `${e} ${i}`;
}
function Mt(t, e) {
  const [i, r] = e.split(" ");
  return !i || !r ? C : `${t}[ldInst="${i}"][cbName="${r}"]`;
}
function Qr(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${D(t.parentElement)}>${e}`;
}
function Yr(t, e) {
  const [i, r] = O(e), [n, s] = [
    I[t].parents.flatMap(
      (c) => F(c, i).split(",")
    ),
    r ? [`[type="${r}"]`] : [""]
  ];
  return P(n, [">"], [t], s).map((c) => c.join("")).join(",");
}
function en(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${D(t.parentElement)}>${i}`;
  const r = Array.from(t.parentElement.children).filter((n) => n.getAttribute("type") === i).findIndex((n) => n.isSameNode(t));
  return `${D(t.parentElement)}>${i} [${r}]`;
}
function tn(t, e) {
  const [i, r] = O(e), [n] = r.split(" "), s = r && r.match(/\[([0-9]+)\]/) && r.match(/\[([0-9]+)\]/)[1] ? parseFloat(r.match(/\[([0-9]+)\]/)[1]) : NaN, [c, a, o] = [
    I[t].parents.flatMap(
      (f) => F(f, i).split(",")
    ),
    [`[type="${n}"]`],
    s ? [`:nth-child(${s + 1})`] : [""]
  ];
  return P(
    c,
    [">"],
    [t],
    a,
    o
  ).map((f) => f.join("")).join(",");
}
function rn(t) {
  return `${D(t.parentElement)}>${t.getAttribute("ord")}`;
}
function nn(t, e) {
  const [i, r] = O(e);
  return `${F("EnumType", i)}>${t}[ord="${r}"]`;
}
function sn(t) {
  return `${D(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function cn(t, e) {
  const [i, r] = O(e), [n, s] = r.split("	"), [c] = [
    I[t].parents.flatMap(
      (a) => F(a, i).split(",")
    )
  ];
  return P(
    c,
    [">"],
    [t],
    [`[type="${n}"]`],
    [">"],
    [s]
  ).map((a) => a.join("")).join(",");
}
function an() {
  return "";
}
function on() {
  return ":root";
}
function S(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${D(t.parentElement)}>${t.getAttribute("name")}`;
}
function v(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [r, n] = O(e);
  if (!n) return C;
  if (i === 0) return `${t}[name="${n}"]`;
  const s = I[t].parents;
  if (!s) return C;
  const c = s.flatMap(
    (a) => I[a].selector === I.Substation.selector ? v(a, r, i - 1).split(",") : F(a, r).split(",")
  ).filter((a) => !a.startsWith(C));
  return c.length === 0 ? C : P(c, [">"], [t], [`[name="${n}"]`]).map((a) => a.join("")).join(",");
}
function p(t) {
  return D(t.parentElement).toString();
}
function m(t, e) {
  const i = I[t].parents;
  if (!i) return C;
  const r = i.flatMap((n) => F(n, e).split(",")).filter((n) => !n.startsWith(C));
  return r.length === 0 ? C : P(r, [">"], [t]).map((n) => n.join("")).join(",");
}
function qe(t) {
  return `#${t.id}`;
}
function Be(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : C;
}
const di = [
  "TransformerWinding",
  "ConductingEquipment"
], pi = [
  "GeneralEquipment",
  "PowerTransformer",
  ...di
], ft = ["Substation", "VoltageLevel", "Bay"], mi = ["Process", "Line"], ui = ["EqSubFunction", "EqFunction"], ln = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...pi,
  ...ft,
  ...mi,
  ...ui
], hi = ["ConnectivityNode", ...ln], dn = ["GOOSESecurity", "SMVSecurity"], pn = ["SubNetwork", ...dn, ...hi], mn = ["BDA", "DA"], un = ["SampledValueControl", "GSEControl"], hn = ["LogControl", "ReportControl"], fn = [...un, ...hn], bn = ["GSE", "SMV"], gn = [
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
  ...fn,
  ...bn,
  ...mn
], be = ["LN0", "LN"], yn = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], vn = ["Subject", "IssuerName"], Sn = ["MinTime", "MaxTime"], xn = ["LNodeType", "DOType", "DAType", "EnumType"], _n = [
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
], kn = ["DynDataSet", "ConfDataSet"], An = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...kn
], En = ["ConfLogControl", "ConfSigRef"], Cn = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], wn = ["SCL", ...pn, ...gn, ...xn], fi = [
  ...wn,
  ...yn,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...vn,
  ...Sn,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...be,
  ..._n,
  "DynAssociation",
  "SettingGroups",
  ...An,
  ...En,
  ...Cn,
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
], In = new Set(fi);
function At(t) {
  return In.has(t);
}
const Je = ["Text", "Private"], de = [...Je], E = [...Je], ze = [...Je], Ut = [...E, "Val"], bi = [...de, "LNode"], pe = [...bi], bt = [...pe], ct = [
  ...pe,
  "PowerTransformer",
  "GeneralEquipment"
], qt = [
  ...bt,
  "Terminal"
], Bt = [...E, "Address"], gi = [...de], zt = [...gi, "IEDName"], Vt = [
  ...E,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Gt = [
  ...pe,
  "GeneralEquipment",
  "Function"
], Ht = [...gi, "TrgOps"], Wt = [
  ...pe,
  "GeneralEquipment",
  "EqSubFunction"
], I = {
  AccessControl: {
    identity: p,
    selector: m,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: S,
    selector: v,
    parents: ["IED"],
    children: [
      ...de,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: p,
    selector: m,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Nr,
    selector: Fr,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: p,
    selector: m,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: S,
    selector: v,
    parents: ["DAType"],
    children: [...Ut]
  },
  BitRate: {
    identity: p,
    selector: m,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: S,
    selector: v,
    parents: ["VoltageLevel"],
    children: [
      ...ct,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Wr,
    selector: jr,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: p,
    selector: m,
    parents: ["SCL"],
    children: [...E, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: S,
    selector: v,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...qt,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: p,
    selector: m,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Zr,
    selector: Jr,
    parents: ["SubNetwork"],
    children: [...E, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: S,
    selector: v,
    parents: ["Bay", "Line"],
    children: [...bi]
  },
  DA: {
    identity: S,
    selector: v,
    parents: ["DOType"],
    children: [...Ut]
  },
  DAI: {
    identity: Pt,
    selector: ht,
    parents: ["DOI", "SDI"],
    children: [...E, "Val"]
  },
  DAType: {
    identity: qe,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...ze, "BDA", "ProtNs"]
  },
  DO: {
    identity: S,
    selector: v,
    parents: ["LNodeType"],
    children: [...E]
  },
  DOI: {
    identity: S,
    selector: v,
    parents: [...be],
    children: [...E, "SDI", "DAI"]
  },
  DOType: {
    identity: qe,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...ze, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: S,
    selector: v,
    parents: [...be],
    children: [...de, "FCDA"]
  },
  DataSetDirectory: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: p,
    selector: m,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: qe,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...ze, "EnumVal"]
  },
  EnumVal: {
    identity: rn,
    selector: nn,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: S,
    selector: v,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Wt]
  },
  EqSubFunction: {
    identity: S,
    selector: v,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Wt]
  },
  ExtRef: {
    identity: zr,
    selector: Vr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: qr,
    selector: Br,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: S,
    selector: v,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...pe,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: S,
    selector: v,
    parents: [
      "SubFunction",
      "Function",
      ...mi,
      ...ui,
      ...ft
    ],
    children: [...bt, "EqFunction"]
  },
  GetCBValues: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: S,
    selector: v,
    parents: ["AccessPoint"],
    children: [...de, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Ot,
    selector: Mt,
    parents: ["ConnectedAP"],
    children: [...Bt, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: S,
    selector: v,
    parents: ["LN0"],
    children: [...zt, "Protocol"]
  },
  GSESettings: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: p,
    selector: m,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: p,
    selector: m,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Ir,
    selector: Dr,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: S,
    selector: v,
    parents: ["SCL"],
    children: [...E, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Mr,
    selector: Ur,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: p,
    selector: m,
    parents: [...be],
    children: [...E, "ExtRef"]
  },
  IssuerName: {
    identity: p,
    selector: m,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Lr,
    selector: Rr,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Pr,
    selector: Or,
    parents: ["Server"],
    children: [...E, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Gr,
    selector: Hr,
    parents: ["AccessPoint", "LDevice"],
    children: [...Vt]
  },
  LN0: {
    identity: p,
    selector: m,
    parents: ["LDevice"],
    children: [
      ...Vt,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: $r,
    selector: Tr,
    parents: [...hi],
    children: [...E]
  },
  LNodeType: {
    identity: qe,
    selector: Be,
    parents: ["DataTypeTemplates"],
    children: [...ze, "DO"]
  },
  Line: {
    identity: S,
    selector: v,
    parents: ["Process", "SCL"],
    children: [
      ...Gt,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: S,
    selector: v,
    parents: [...be],
    children: [...E]
  },
  LogControl: {
    identity: S,
    selector: v,
    parents: [...be],
    children: [...Ht]
  },
  LogSettings: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: p,
    selector: m,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: p,
    selector: m,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: p,
    selector: m,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Nt,
    selector: Ft,
    parents: ["TransformerWinding"],
    children: [...E]
  },
  OptFields: {
    identity: p,
    selector: m,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: en,
    selector: tn,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Qr,
    selector: Yr,
    parents: ["ConnectedAP"],
    children: [...E, "P"]
  },
  PowerTransformer: {
    identity: S,
    selector: v,
    parents: [...ft],
    children: [
      ...bt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => C,
    parents: [],
    children: []
  },
  Process: {
    identity: S,
    selector: v,
    parents: ["Process", "SCL"],
    children: [
      ...Gt,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: sn,
    selector: cn,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: p,
    selector: m,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: S,
    selector: v,
    parents: [...be],
    children: [...Ht, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: p,
    selector: m,
    parents: ["ReportControl"],
    children: [...E, "ClientLN"]
  },
  SamplesPerSec: {
    identity: p,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: S,
    selector: v,
    parents: ["LN0"],
    children: [...zt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: p,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: an,
    selector: on,
    parents: [],
    children: [
      ...Je,
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
    identity: Pt,
    selector: ht,
    parents: ["DOI", "SDI"],
    children: [...E, "SDI", "DAI"]
  },
  SDO: {
    identity: S,
    selector: v,
    parents: ["DOType"],
    children: [...de]
  },
  Server: {
    identity: p,
    selector: m,
    parents: ["AccessPoint"],
    children: [
      ...E,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: p,
    selector: m,
    parents: ["AccessPoint"],
    children: [...E]
  },
  Services: {
    identity: p,
    selector: m,
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
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: p,
    selector: m,
    parents: ["LN0"],
    children: [...E]
  },
  SettingGroups: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: p,
    selector: m,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: p,
    selector: m,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Ot,
    selector: Mt,
    parents: ["ConnectedAP"],
    children: [...Bt]
  },
  SmvOpts: {
    identity: p,
    selector: m,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: S,
    selector: v,
    parents: ["AccessPoint"],
    children: [...de, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: S,
    selector: v,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...di
    ],
    children: [...pe, "EqFunction"]
  },
  SubFunction: {
    identity: S,
    selector: v,
    parents: ["SubFunction", "Function"],
    children: [
      ...pe,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: S,
    selector: v,
    parents: ["Communication"],
    children: [...de, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: p,
    selector: m,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: S,
    selector: v,
    parents: ["SCL"],
    children: [...ct, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: S,
    selector: v,
    parents: ["TransformerWinding"],
    children: [...pe, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Nt,
    selector: Ft,
    parents: [...pi],
    children: [...E]
  },
  Text: {
    identity: p,
    selector: m,
    parents: fi.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: p,
    selector: m,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: S,
    selector: v,
    parents: ["PowerTransformer"],
    children: [
      ...qt,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: p,
    selector: m,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Xr,
    selector: Kr,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: p,
    selector: m,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: p,
    selector: m,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: S,
    selector: v,
    parents: ["Substation"],
    children: [...ct, "Voltage", "Bay", "Function"]
  }
};
function F(t, e) {
  return typeof e != "string" ? C : At(t) ? I[t].selector(t, e) : t;
}
function Dn(t, e, i) {
  if (typeof i != "string" || !At(e)) return null;
  const r = t.querySelector(I[e].selector(e, i));
  return r === null || We(r) ? r : Array.from(
    t.querySelectorAll(I[e].selector(e, i))
  ).find(We) ?? null;
}
function D(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return At(e) ? I[e].identity(t) : NaN;
}
Qt((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
function P(...t) {
  return t.reduce(
    (e, i) => e.flatMap((r) => i.map((n) => [r, n].flat())),
    [[]]
  );
}
function We(t) {
  return !t.closest("Private");
}
const $n = 99;
Array($n).fill(1).map((t, e) => `${e + 1}`);
function Tn(t, e = "user", i) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...i,
    detail: { action: t, initiator: e, ...i?.detail }
  });
}
function De(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
var Ln = Object.defineProperty, Ne = (t, e, i, r) => {
  for (var n = void 0, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = c(e, i, n) || n);
  return n && Ln(e, i, n), n;
};
function Rn(t, e) {
  const [i, r] = ["manufacturer", "type"].map(
    (a) => e.getAttribute(a)?.replace(/[^A-Za-z0-9_]/g, "")
  ), n = i || r ? `${i ?? ""}${r ? "_" + r : ""}` : "TEMPLATE_IED", s = Array.from(t.querySelectorAll("IED")).filter(We).map((a) => a.getAttribute("name") ?? a.tagName);
  if (!s.length) return n + "_001";
  let c = "";
  for (let a = 0; a < s.length + 1; a++) {
    const o = (a + 1).toString().padStart(3, "0");
    if (c = n + "_" + o, !s.includes(c)) return c;
  }
  return c;
}
function Nn(t, e) {
  Array.prototype.slice.call(e.attributes).filter((i) => i.name.startsWith("xmlns:")).filter((i) => !t.hasAttribute(i.name)).forEach((i) => {
    t.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      i.name,
      i.value
    );
  });
}
function Fn(t, e) {
  const i = t.find(
    (r) => r.getAttribute("name") === e.getAttribute("name")
  );
  return i || e.cloneNode(!1);
}
function Pn(t, e) {
  const i = [], r = e.querySelector(":root > Communication"), n = r || li(e, "Communication", {});
  r || i.push({
    new: {
      parent: e.querySelector(":root"),
      element: n
    }
  });
  const s = Array.from(
    t.ownerDocument.querySelectorAll(
      `:root > Communication > SubNetwork > ConnectedAP[iedName="${t.getAttribute(
        "name"
      )}"]`
    )
  ), c = [];
  return s.forEach((a) => {
    const o = a.parentElement, f = n.querySelector(
      `:root > Communication > SubNetwork[name="${o.getAttribute(
        "name"
      )}"]`
    ), h = f || Fn(c, o), y = a.cloneNode(!0);
    !f && !c.includes(h) && (i.push({
      new: {
        parent: n,
        element: h
      }
    }), c.push(h)), i.push({
      new: {
        parent: h,
        element: y
      }
    });
  }), i;
}
function ye(t, e) {
  const i = t.parentElement, r = t.getAttribute("id");
  return !i || !r ? !1 : t.tagName === "EnumType" ? Array.from(
    i.querySelectorAll(
      `DOType > DA[type="${r}"],DAType > BDA[type="${r}"]`
    )
  ).some((n) => ye(n.parentElement, e)) : t.tagName === "DAType" ? Array.from(
    i.querySelectorAll(
      `DOType > DA[type="${r}"],DAType > BDA[type="${r}"]`
    )
  ).some((n) => ye(n.parentElement, e)) : t.tagName === "DOType" ? Array.from(
    i.querySelectorAll(
      `LNodeType > DO[type="${r}"], DOType > SDO[type="${r}"]`
    )
  ).some((n) => ye(n.parentElement, e)) : Array.from(e.getElementsByTagName("LN0")).concat(Array.from(e.getElementsByTagName("LN"))).some((n) => n.getAttribute("lnType") === r);
}
function On(t, e, i) {
  if (!ye(e, t)) return;
  const r = i.querySelector(
    `EnumType[id="${e.getAttribute("id")}"]`
  );
  if (!(r && e.isEqualNode(r))) {
    if (r) {
      const n = e.parentElement, s = e.getAttribute("id"), c = t.getAttribute("name") + s;
      e.setAttribute("id", c), n.querySelectorAll(
        `DOType > DA[type="${s}"],DAType > BDA[type="${s}"]`
      ).forEach((a) => a.setAttribute("type", c));
    }
    return {
      new: {
        parent: i,
        element: e
      }
    };
  }
}
function Mn(t, e, i) {
  if (!ye(e, t)) return;
  const r = i.querySelector(
    `DAType[id="${e.getAttribute("id")}"]`
  );
  if (!(r && e.isEqualNode(r))) {
    if (r) {
      const n = e.parentElement, s = e.getAttribute("id"), c = t.getAttribute("name") + s;
      e.setAttribute("id", c), n.querySelectorAll(
        `DOType > DA[type="${s}"],DAType > BDA[type="${s}"]`
      ).forEach((a) => a.setAttribute("type", c));
    }
    return {
      new: {
        parent: i,
        element: e
      }
    };
  }
}
function Un(t, e, i) {
  if (!ye(e, t)) return;
  const r = i.querySelector(
    `DOType[id="${e.getAttribute("id")}"]`
  );
  if (!(r && e.isEqualNode(r))) {
    if (r) {
      const n = e.parentElement, s = e.getAttribute("id"), c = t.getAttribute("name") + s;
      e.setAttribute("id", c), n.querySelectorAll(
        `LNodeType > DO[type="${s}"], DOType > SDO[type="${s}"]`
      ).forEach((a) => a.setAttribute("type", c));
    }
    return {
      new: {
        parent: i,
        element: e
      }
    };
  }
}
function qn(t, e, i) {
  if (!ye(e, t)) return;
  const r = i.querySelector(
    `LNodeType[id="${e.getAttribute("id")}"]`
  );
  if (!(r && e.isEqualNode(r))) {
    if (r) {
      const n = e.getAttribute("id"), s = t.getAttribute("name").concat(n);
      e.setAttribute("id", s), Array.from(
        t.querySelectorAll(`LN0[lnType="${n}"],LN[lnType="${n}"]`)
      ).filter(We).forEach((c) => c.setAttribute("lnType", s));
    }
    return {
      new: {
        parent: i,
        element: e
      }
    };
  }
}
function Bn(t, e) {
  const i = [], r = e.querySelector(":root > DataTypeTemplates") ? e.querySelector(":root > DataTypeTemplates") : li(e, "DataTypeTemplates", {});
  return r.parentElement || i.push({
    new: {
      parent: e.querySelector("SCL"),
      element: r
    }
  }), t.ownerDocument.querySelectorAll(":root > DataTypeTemplates > LNodeType").forEach(
    (n) => i.push(qn(t, n, r))
  ), t.ownerDocument.querySelectorAll(":root > DataTypeTemplates > DOType").forEach(
    (n) => i.push(Un(t, n, r))
  ), t.ownerDocument.querySelectorAll(":root > DataTypeTemplates > DAType").forEach(
    (n) => i.push(Mn(t, n, r))
  ), t.ownerDocument.querySelectorAll(":root > DataTypeTemplates > EnumType").forEach(
    (n) => i.push(On(t, n, r))
  ), i.filter((n) => n !== void 0);
}
function zn(t, e) {
  const i = Array.from(e.querySelectorAll(":root > IED")).map(
    (n) => n.getAttribute("name")
  ), r = t.getAttribute("name");
  return !i.includes(r);
}
class Ae extends ce {
  constructor() {
    super(...arguments), this.editCount = -1, this.iedSelection = [];
  }
  async run() {
    this.iedSelection = [], this.pluginFileUI.click();
  }
  async docUpdate() {
    await this.updateComplete;
  }
  importIED(e) {
    if (e.getAttribute("name") === "TEMPLATE") {
      const s = Rn(this.doc, e);
      e.setAttribute("name", s), Array.from(
        e.ownerDocument.querySelectorAll(
          ':root > Communication > SubNetwork > ConnectedAP[iedName="TEMPLATE"]'
        )
      ).forEach((c) => c.setAttribute("iedName", s));
    }
    if (!zn(e, this.doc)) {
      this.dispatchEvent(
        De({
          kind: "error",
          title: V("import.log.nouniqueied", {
            name: e.getAttribute("name")
          })
        })
      );
      return;
    }
    Nn(
      this.doc.documentElement,
      e.ownerDocument.documentElement
    );
    const i = Bn(e, this.doc), n = Pn(e, this.doc).concat(i);
    n.push({
      new: {
        parent: this.doc.querySelector(":root"),
        element: e
      }
    }), this.dispatchEvent(
      Tn({
        title: V("editing.import", { name: e.getAttribute("name") }),
        actions: n
      })
    );
  }
  async importIEDs(e, i) {
    const r = this.shadowRoot.querySelector(
      `mwc-dialog[data-file="${i}"]`
    ), s = r.querySelector("filtered-list").selected.map((c) => Dn(e, "IED", c.value)).filter((c) => c);
    r.close();
    for (const c of s)
      this.importIED(c), await this.docUpdate();
  }
  async prepareImport(e, i) {
    if (!e) {
      this.dispatchEvent(
        De({
          kind: "error",
          title: V("import.log.loaderror")
        })
      );
      return;
    }
    if (e.querySelector("parsererror")) {
      this.dispatchEvent(
        De({
          kind: "error",
          title: V("import.log.parsererror")
        })
      );
      return;
    }
    const r = Array.from(e.querySelectorAll(":root > IED"));
    if (r.length === 0) {
      this.dispatchEvent(
        De({
          kind: "error",
          title: V("import.log.missingied")
        })
      );
      return;
    }
    if (r.length === 1)
      return this.importIED(r[0]), await this.docUpdate();
    this.buildIedSelection(e, i), await this.requestUpdate();
    const n = this.shadowRoot.querySelector(`mwc-dialog[data-file="${i}"]`);
    n.show(), await new Promise((s) => {
      n.addEventListener("closed", function c(a) {
        a.target?.removeEventListener("closed", c), s();
      });
    });
  }
  /** Loads the file `event.target.files[0]` into [[`src`]] as a `blob:...`. */
  async onLoadFiles(e) {
    const r = Array.from(
      e.target?.files ?? []
    ).map((n) => ({
      text: n.text().then(
        (s) => new DOMParser().parseFromString(s, "application/xml")
      ),
      name: n.name
    }));
    for await (const n of r)
      await this.prepareImport(await n.text, n.name);
  }
  renderInput() {
    return u`<input multiple @change=${(e) => {
      this.onLoadFiles(e), e.target.value = "";
    }} id="importied-plugin-input" accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd" type="file"></input>`;
  }
  buildIedSelection(e, i) {
    this.iedSelection.push(u`<mwc-dialog data-file="${i}">
      <filtered-list hasSlot multi>
        ${Array.from(e?.querySelectorAll(":root > IED") ?? []).map(
      (r) => u`<mwc-check-list-item value="${D(r)}"
              >${r.getAttribute("name")}</mwc-check-list-item
            >`
    )}
        <mwc-icon-button slot="meta" icon="edit"></mwc-icon-button>
      </filtered-list>
      <mwc-button
        dialogAction="close"
        label="${V("close")}"
        slot="secondaryAction"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      ></mwc-button>
      <mwc-button
        label="IEDs"
        slot="primaryAction"
        icon="add"
        @click=${() => this.importIEDs(e, i)}
      ></mwc-button>
    </mwc-dialog>`);
  }
  render() {
    return u`${this.iedSelection}${this.renderInput()}`;
  }
  static {
    this.styles = ee`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
  }
}
Ne([
  d({ attribute: !1 })
], Ae.prototype, "doc");
Ne([
  d({ type: Number })
], Ae.prototype, "editCount");
Ne([
  x()
], Ae.prototype, "iedSelection");
Ne([
  $("#importied-plugin-input")
], Ae.prototype, "pluginFileUI");
Ne([
  $("mwc-dialog")
], Ae.prototype, "dialog");
function gt(t, e) {
  return new CustomEvent("pending-state", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { promise: t, ...e?.detail }
  });
}
function Ve(t, e) {
  let i = "", r = "";
  return e || (e = "	"), t.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (r = r.substring(e.length)), i += r + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (r += e);
  }), i.substring(1, i.length - 3);
}
var Vn = Object.defineProperty, Gn = Object.getOwnPropertyDescriptor, yi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Gn(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Vn(e, i, n), n;
};
function ne() {
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
let je = class extends ce {
  get compasSettings() {
    return ne().compasSettings;
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
    return this.valid() ? (ne().setCompasSetting(
      "sclDataServiceUrl",
      this.getSclDataServiceUrlField().value
    ), ne().setCompasSetting(
      "sclValidatorServiceUrl",
      this.getSclValidatorServiceUrlField().value
    ), ne().setCompasSetting(
      "cimMappingServiceUrl",
      this.getCimMappingServiceUrlField().value
    ), ne().setCompasSetting(
      "sclAutoAlignmentServiceUrl",
      this.getSclAutoAlignmentServiceUrlField().value
    ), ne().setCompasSetting(
      "sitipeServiceUrl",
      this.getSitipeServiceUrlField().value
    ), ne().setCompasSetting(
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
    this.dispatchEvent(wr());
  }
  render() {
    return u` <mwc-textfield
        dialogInitialFocus
        id="sclDataServiceUrl"
        label="${w("compas.settings.sclDataServiceUrl")}"
        value="${this.compasSettings.sclDataServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        dialogInitialFocus
        id="sclValidatorServiceUrl"
        label="${w("compas.settings.sclValidatorServiceUrl")}"
        value="${this.compasSettings.sclValidatorServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="cimMappingServiceUrl"
        label="${w("compas.settings.cimMappingServiceUrl")}"
        value="${this.compasSettings.cimMappingServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sclAutoAlignmentServiceUrl"
        label="${w("compas.settings.sclAutoAlignmentServiceUrl")}"
        value="${this.compasSettings.sclAutoAlignmentServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-textfield
        id="sitipeServiceUrl"
        label="${w("compas.settings.sitipeServiceUrl")}"
        value="${this.compasSettings.sitipeServiceUrl}"
        required
      >
      </mwc-textfield>
      <mwc-formfield label="${w("compas.settings.useWebsockets")}">
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
        ${w("reset")}
      </mwc-button>`;
  }
};
je.styles = ee`
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
yi([
  d()
], je.prototype, "compasSettings", 1);
je = yi([
  H("compas-settings")
], je);
const Hn = "NotFoundError", vi = "ApplicationError", Et = "ServerError", jt = "https://www.lfenergy.org/compas/commons/v1";
async function ie(t) {
  if (!t.ok) {
    let e = vi;
    return t.status === 404 ? e = Hn : t.status >= 500 && (e = Et), Promise.reject({
      type: e,
      status: t.status,
      message: await Wn(t)
    });
  }
  return Promise.resolve(t.text());
}
async function Wn(t) {
  const e = await t.text(), i = await se(e);
  return Si(i) ?? t.statusText;
}
function Si(t) {
  const e = Array.from(
    t.querySelectorAll("ErrorResponse > ErrorMessage") ?? []
  );
  if (e.length > 0) {
    let i = "";
    return e.forEach((r, n) => {
      const s = r.getElementsByTagNameNS(jt, "Code").item(0).textContent, c = r.getElementsByTagNameNS(jt, "Message").item(0).textContent;
      n > 0 && (i += ", "), i += c, s && (i += " (" + s + ")");
    }), i;
  }
}
function se(t) {
  return Promise.resolve(
    new DOMParser().parseFromString(t, "application/xml")
  );
}
function le(t) {
  const e = t.querySelectorAll("SclData").item(0).textContent ?? "", i = new DOMParser().parseFromString(
    e,
    "application/xml"
  );
  return Promise.resolve(i);
}
function re(t) {
  return Promise.reject({ type: Et, message: t.message });
}
function jn(t, e) {
  let i = e.message;
  e.status && (i += " (" + e.status + ")"), t && t.dispatchEvent(
    De({
      kind: "error",
      title: V("compas.error.server"),
      message: V("compas.error.serverDetails", {
        type: e.type,
        message: i
      })
    })
  );
}
function Ge(t) {
  return t.startsWith("http://") || t.startsWith("https://") ? t.replace("http://", "ws://").replace("https://", "wss://") : (document.location.protocol == "http:" ? "ws://" : "wss://") + document.location.hostname + ":" + Xn() + t;
}
function Xn() {
  return document.location.port === "" ? document.location.protocol == "http:" ? "80" : "443" : document.location.port;
}
function He(t, e, i, r) {
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
    }, n.onmessage = (f) => {
      se(f.data).then((h) => {
        if (h.documentElement.localName === "ErrorResponse") {
          const y = Si(h);
          o({ type: vi, message: y });
        } else
          a(h);
        n?.close();
      }).catch((h) => {
        o(h), n?.close();
      });
    }, n.onerror = () => {
      o({
        type: Et,
        message: `Websocket Error in service "${e}"`
      }), n?.close();
    }, n.onclose = () => {
      n = void 0;
    }, t.dispatchEvent(gt(c()));
  });
}
const j = "https://www.lfenergy.org/compas/SclDataService/v1";
function Ct() {
  function t() {
    return ne().compasSettings.sclDataServiceUrl;
  }
  function e() {
    return ne().useWebsockets();
  }
  function i() {
    const r = t() + "/common/v1/type/list";
    return fetch(r).catch(re).then(ie).then(se);
  }
  return {
    listOrderedSclTypes() {
      return i().then((r) => Array.from(r.querySelectorAll("*|Type") ?? []).sort(
        (n, s) => {
          const c = n.getElementsByTagNameNS(j, "Description").item(0).textContent ?? "", a = s.getElementsByTagNameNS(j, "Description").item(0).textContent ?? "";
          return c.localeCompare(a);
        }
      ));
    },
    listScls(r) {
      const n = t() + "/scl/v1/" + r + "/list";
      return fetch(n).catch(re).then(ie).then(se);
    },
    listSclVersions(r, n) {
      const s = t() + "/scl/v1/" + r + "/" + n + "/versions";
      return fetch(s).catch(re).then(ie).then(se);
    },
    getSclDocument(r, n, s) {
      if (e()) {
        const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetWsRequest xmlns:sds="${j}">
           <sds:Id>${s}</sds:Id>
         </sds:GetWsRequest>`, o = t() + "/scl-ws/v1/" + n + "/get";
        return He(
          r,
          "CompasSclDataService",
          Ge(o),
          a
        ).then(le);
      }
      const c = t() + "/scl/v1/" + n + "/" + s;
      return fetch(c).catch(re).then(ie).then(se).then(le);
    },
    getSclDocumentVersion(r, n, s, c) {
      if (e()) {
        const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:GetVersionWsRequest xmlns:sds="${j}">
           <sds:Id>${s}</sds:Id>
           <sds:Version>${c}</sds:Version>
         </sds:GetVersionWsRequest>`, f = t() + "/scl-ws/v1/" + n + "/get-version";
        return He(
          r,
          "CompasSclDataService",
          Ge(f),
          o
        ).then(le);
      }
      const a = t() + "/scl/v1/" + n + "/" + s + "/" + c;
      return fetch(a).catch(re).then(ie).then(se).then(le);
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
        const o = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateWsRequest xmlns:sds="${j}">
           <sds:Name>${s.sclName}</sds:Name>
           <sds:Comment>${s.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Ve(
          new XMLSerializer().serializeToString(s.doc.documentElement)
        )}]]></sds:SclData>
         </sds:CreateWsRequest>`, f = t() + "/scl-ws/v1/" + n + "/create";
        return He(
          r,
          "CompasSclDataService",
          Ge(f),
          o
        ).then(le);
      }
      const c = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:CreateRequest xmlns:sds="${j}">
            <sds:Name>${s.sclName}</sds:Name>
            <sds:Comment>${s.comment ?? ""}</sds:Comment>
            <sds:SclData><![CDATA[${Ve(
        new XMLSerializer().serializeToString(s.doc.documentElement)
      )}]]></sds:SclData>
         </sds:CreateRequest>`, a = t() + "/scl/v1/" + n;
      return fetch(a, {
        method: "POST",
        headers: {
          "Content-Type": "application/xml"
        },
        body: c
      }).catch(re).then(ie).then(se).then(le);
    },
    updateSclDocument(r, n, s, c) {
      if (e()) {
        const f = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateWsRequest xmlns:sds="${j}">
           <sds:Id>${s}</sds:Id>
           <sds:ChangeSet>${c.changeSet}</sds:ChangeSet>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Ve(
          new XMLSerializer().serializeToString(c.doc.documentElement)
        )}]]></sds:SclData>
         </sds:UpdateWsRequest>`, h = t() + "/scl-ws/v1/" + n + "/update";
        return He(
          r,
          "CompasSclDataService",
          Ge(h),
          f
        ).then(le);
      }
      const a = `<?xml version="1.0" encoding="UTF-8"?>
         <sds:UpdateRequest xmlns:sds="${j}">
           <sds:ChangeSet>${c.changeSet}</sds:ChangeSet>
           <sds:Comment>${c.comment ?? ""}</sds:Comment>
           <sds:SclData><![CDATA[${Ve(
        new XMLSerializer().serializeToString(c.doc.documentElement)
      )}]]></sds:SclData>
         </sds:UpdateRequest>`, o = t() + "/scl/v1/" + n + "/" + s;
      return fetch(o, {
        method: "PUT",
        headers: {
          "Content-Type": "application/xml"
        },
        body: a
      }).catch(re).then(ie).then(se).then(le);
    }
  };
}
var Kn = Object.defineProperty, Zn = Object.getOwnPropertyDescriptor, xi = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Zn(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Kn(e, i, n), n;
};
let Xe = class extends ce {
  render() {
    return u` ${this.renderHeader()} ${this.renderSeparator()}`;
  }
  renderHeader() {
    return this.header ? u`<h4 class="header">${this.header}</h4>` : u``;
  }
  renderSeparator() {
    return u`<div role="separator"></div>`;
  }
};
Xe.styles = ee`
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
xi([
  d({
    type: String
  })
], Xe.prototype, "header", 2);
Xe = xi([
  H("wizard-divider")
], Xe);
var Jn = Object.defineProperty, Qn = Object.getOwnPropertyDescriptor, _i = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? Qn(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && Jn(e, i, n), n;
};
function Yn(t) {
  return new CustomEvent("typeSelected", {
    bubbles: !0,
    composed: !0,
    detail: { type: t }
  });
}
let yt = class extends ce {
  firstUpdated() {
    this.fetchData();
  }
  fetchData() {
    Ct().listOrderedSclTypes().then((t) => this.sclTypes = t);
  }
  render() {
    return this.sclTypes ? this.sclTypes.length <= 0 ? u` <mwc-list>
        <mwc-list-item><i>${w("compas.noSclTypes")}</i></mwc-list-item>
      </mwc-list>` : u` <mwc-list>
      ${this.sclTypes.map((t) => {
      const e = t.getElementsByTagNameNS(j, "Code").item(0).textContent ?? "", i = t.getElementsByTagNameNS(j, "Description").item(0).textContent ?? "";
      return u`<mwc-list-item
          tabindex="0"
          @click=${() => this.dispatchEvent(Yn(e))}
        >
          <span>${i} (${e})</span>
        </mwc-list-item>`;
    })}
    </mwc-list>` : u` <compas-loading></compas-loading> `;
  }
};
_i([
  d()
], yt.prototype, "sclTypes", 2);
yt = _i([
  H("compas-scltype-list")
], yt);
var es = Object.defineProperty, ts = Object.getOwnPropertyDescriptor, Fe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ts(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && es(e, i, n), n;
};
let ve = class extends Q {
  constructor() {
    super(...arguments), this.disabled = !1;
  }
  toggleList() {
    this.filterDialog.show();
  }
  onClosing() {
    const t = [];
    this.selected && (this.selected instanceof Array ? this.selected.forEach((e) => t.push(e.value)) : t.push(this.selected.value), this.dispatchEvent(is(t)));
  }
  render() {
    return u`
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : V("filter")}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${V("close")}
        </mwc-button>
      </mwc-dialog>
    `;
  }
};
ve.styles = ee`
    ${Jt(Q.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
Fe([
  d()
], ve.prototype, "header", 2);
Fe([
  d()
], ve.prototype, "icon", 2);
Fe([
  d({ type: Boolean })
], ve.prototype, "disabled", 2);
Fe([
  $("#filterDialog")
], ve.prototype, "filterDialog", 2);
ve = Fe([
  H("oscd-filter-button")
], ve);
function is(t, e) {
  return new CustomEvent("selected-items-changed", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { selectedItems: t, ...e?.detail }
  });
}
var rs = Object.defineProperty, ns = Object.getOwnPropertyDescriptor, Ee = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ns(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && rs(e, i, n), n;
};
function ss(t) {
  return new CustomEvent("scl-selected", {
    bubbles: !0,
    composed: !0,
    detail: { docId: t }
  });
}
let ue = class extends ce {
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
    this.type && Ct().listScls(this.type).then((t) => {
      this.items = Array.from(t.querySelectorAll("Item") ?? []), this.labels = Array.from(
        new Set(
          Array.from(t.querySelectorAll("Label") ?? []).map((e) => e.textContent).filter((e) => !!e).sort((e, i) => e.localeCompare(i))
        )
      ), this.selectedLabels = this.labels;
    });
  }
  render() {
    if (!this.items)
      return u` <compas-loading></compas-loading> `;
    if (this.items?.length <= 0)
      return u` <mwc-list>
        <mwc-list-item><i>${w("compas.noScls")}</i></mwc-list-item>
      </mwc-list>`;
    const t = this.filteredItems;
    return u`
      <div class="filters">
        <span>${w("compas.sclFilter")}</span>
        <oscd-filter-button
          id="labelsFilter"
          multi="true"
          ?disabled="${this.labels.length <= 0}"
          .header=${w("compas.label.selectLabels")}
          @selected-items-changed="${(e) => {
      this.selectedLabels = e.detail.selectedItems, this.requestUpdate("items"), this.requestUpdate("filteredItems"), this.requestUpdate("selectedLabels");
    }}"
        >
          <span slot="icon">
            <mwc-icon>
              ${this.labels.length != this.selectedLabels.length ? "label" : "label_off"}
            </mwc-icon>
          </span>
          ${this.labels.map((e) => u` <mwc-check-list-item
              value="${e}"
              ?selected="${this.selectedLabels.includes(e)}"
            >
              ${e}
            </mwc-check-list-item>`)}
        </oscd-filter-button>
      </div>
      ${t && t.length > 0 ? u` <filtered-list>
            ${t.map((e) => {
      const i = e.getElementsByTagNameNS(j, "Id").item(0).textContent ?? "";
      let r = e.getElementsByTagNameNS(j, "Name").item(0).textContent ?? "";
      r === "" && (r = i);
      const n = e.getElementsByTagNameNS(j, "Version").item(0).textContent ?? "";
      return u` <mwc-list-item
                tabindex="0"
                @click=${() => this.dispatchEvent(ss(i))}
              >
                ${r} (${n})
              </mwc-list-item>`;
    })}
          </filtered-list>` : u` <mwc-list>
            <mwc-list-item>
              <i>${w("compas.noFilteredScls")}</i>
            </mwc-list-item>
          </mwc-list>`}
    `;
  }
};
ue.styles = ee`
    .filters {
      padding-left: var(--mdc-list-side-padding, 16px);
      display: flex;
    }

    .filters > span {
      line-height: 48px;
    }
  `;
Ee([
  d()
], ue.prototype, "type", 2);
Ee([
  x()
], ue.prototype, "items", 2);
Ee([
  x()
], ue.prototype, "labels", 2);
Ee([
  x()
], ue.prototype, "selectedLabels", 2);
Ee([
  x()
], ue.prototype, "filteredItems", 1);
ue = Ee([
  H("compas-scl-list")
], ue);
const cs = "compas_scl";
function as(t, e) {
  return t.querySelector(`:scope > Private[type="${e}"]`);
}
function os(t) {
  return t?.querySelector(":scope > SclName") ?? null;
}
function ls(t) {
  return t?.querySelector(":scope > SclFileType") ?? null;
}
function ds(t) {
  const e = t.querySelector(":scope > Header"), i = as(t, cs), r = e?.getAttribute("version") ?? "", n = os(i)?.textContent ?? "", s = ls(i)?.textContent ?? "SCD";
  let c = n;
  return c === "" && (c = e?.getAttribute("id") ?? ""), c += "-" + r + "." + s?.toLowerCase(), c;
}
var ps = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, Qe = (t, e, i, r) => {
  for (var n = r > 1 ? void 0 : r ? ms(e, i) : e, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = (r ? c(e, i, n) : c(n)) || n);
  return r && n && ps(e, i, n), n;
};
function Xt(t, e, i, r) {
  return new CustomEvent("doc-retrieved", {
    bubbles: !0,
    composed: !0,
    detail: { localFile: t, doc: e, docName: i, docId: r }
  });
}
let Le = class extends ce {
  constructor() {
    super(...arguments), this.allowLocalFile = !0;
  }
  async getSclDocument(t) {
    const e = await Ct().getSclDocument(this, this.selectedType ?? "", t ?? "").catch((i) => jn(this, i));
    if (e instanceof Document) {
      const i = ds(e.documentElement);
      this.dispatchEvent(Xt(!1, e, i, t));
    }
  }
  async getSclFile(t) {
    const e = t.target?.files?.item(0) ?? !1;
    if (!e) return;
    const i = await e.text(), r = e.name, n = new DOMParser().parseFromString(i, "application/xml");
    this.dispatchEvent(Xt(!0, n, r));
  }
  renderFileSelect() {
    return u`
      <input
        id="scl-file"
        accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd"
        type="file"
        hidden
        required
        @change=${(t) => this.dispatchEvent(gt(this.getSclFile(t)))}
      />

      <mwc-button
        label="${w("compas.open.selectFileButton")}"
        @click=${() => {
      this.sclFileUI.value = "", this.sclFileUI.click();
    }}
      >
      </mwc-button>
    `;
  }
  renderSclTypeList() {
    return u`
      <p>${w("compas.open.listSclTypes")}</p>
      <compas-scltype-list
        @typeSelected=${(t) => this.selectedType = t.detail.type}
      />
    `;
  }
  renderSclList() {
    return u`
      <p>${w("compas.open.listScls", {
      type: this.selectedType ?? ""
    })}</p>
      <compas-scl-list .type=${this.selectedType}
                       @scl-selected=${(t) => this.dispatchEvent(
      gt(
        this.getSclDocument(t.detail.docId)
      )
    )}/>
      </compas-scl-list>
      <mwc-button id="reselect-type"
                  label="${w("compas.open.otherTypeButton")}"
                  icon="arrow_back"
                  @click=${() => {
      this.selectedType = void 0;
    }}>
      </mwc-button>
    `;
  }
  render() {
    return u`
      ${this.allowLocalFile ? u`<wizard-divider></wizard-divider>
            <section>
              <h3>${w("compas.open.localTitle")}</h3>
              ${this.renderFileSelect()}
            </section>` : Pi}
      <wizard-divider></wizard-divider>
      <section>
        <h3>${w("compas.open.compasTitle")}</h3>
        ${this.selectedType ? this.renderSclList() : this.renderSclTypeList()}
      </section>
    `;
  }
};
Qe([
  d()
], Le.prototype, "selectedType", 2);
Qe([
  d()
], Le.prototype, "allowLocalFile", 2);
Qe([
  $("#scl-file")
], Le.prototype, "sclFileUI", 2);
Le = Qe([
  H("compas-open")
], Le);
var us = Object.defineProperty, hs = (t, e, i, r) => {
  for (var n = void 0, s = t.length - 1, c; s >= 0; s--)
    (c = t[s]) && (n = c(e, i, n) || n);
  return n && us(e, i, n), n;
};
class fs extends Ae {
  renderInput() {
    return u`<mwc-dialog
      id="compas-import-ieds-dlg"
      heading="${w("compas.open.title")}"
    >
      <compas-open
        @doc-retrieved=${(e) => {
      this.onLoadCompasFiles(e);
    }}
      >
      </compas-open>
      <mwc-button
        slot="secondaryAction"
        icon=""
        label="${w("close")}"
        dialogAction="close"
        style="--mdc-theme-primary: var(--mdc-theme-error)"
      >
      </mwc-button>
    </mwc-dialog>`;
  }
  onLoadCompasFiles(e) {
    this.prepareImport(e.detail.doc, e.detail.docName), this.compasOpen.close();
  }
  async run() {
    this.compasOpen.show();
  }
}
hs([
  $("mwc-dialog#compas-import-ieds-dlg")
], fs.prototype, "compasOpen");
export {
  fs as default
};
