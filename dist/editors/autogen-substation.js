import { property as u, LitElement as S } from "lit-element";
import { NodePart as v, AttributePart as x, directive as $ } from "lit-html";
function P(t, e = "user", n) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...n,
    detail: { action: t, initiator: e, ...n?.detail }
  });
}
function l(t, e, n) {
  const r = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(n).filter(([s, i]) => i !== null).forEach(([s, i]) => r.setAttribute(s, i)), r;
}
function q(t, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...t, ...e?.detail }
  });
}
const w = 1e3 * 60, A = "langChanged";
function D(t, e, n) {
  return Object.entries(f(e || {})).reduce((r, [s, i]) => r.replace(new RegExp(`{{[  ]*${s}[  ]*}}`, "gm"), String(f(i))), t);
}
function I(t, e) {
  const n = t.split(".");
  let r = e.strings;
  for (; r != null && n.length > 0; )
    r = r[n.shift()];
  return r != null ? r.toString() : null;
}
function f(t) {
  return typeof t == "function" ? t() : t;
}
const T = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: I,
  interpolate: D,
  translationCache: {}
});
let _ = T();
function M(t, e) {
  const n = (r) => t(r.detail);
  return window.addEventListener(A, n, e), () => window.removeEventListener(A, n);
}
function h(t, e, n = _) {
  let r = n.translationCache[t] || (n.translationCache[t] = n.lookup(t, n) || n.empty(t, n));
  return e = e != null ? f(e) : null, e != null ? n.interpolate(r, e, n) : r;
}
function L(t) {
  return t instanceof v ? t.startNode.isConnected : t instanceof x ? t.committer.element.isConnected : t.element.isConnected;
}
function V(t) {
  for (const [e] of t)
    L(e) || t.delete(e);
}
function B(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function O(t, e) {
  setInterval(() => B(() => V(t)), e);
}
const b = /* @__PURE__ */ new Map();
function W() {
  M((t) => {
    for (const [e, n] of b)
      L(e) && N(e, n, t);
  });
}
W();
O(b, w);
function N(t, e, n) {
  const r = e(n);
  t.value !== r && (t.setValue(r), t.commit());
}
$((t) => (e) => {
  b.set(e, t), N(e, t);
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
let G = !1;
(() => {
  try {
    const t = {
      get capture() {
        return G = !0, !1;
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
var R = Object.defineProperty, c = (t, e, n, r) => {
  for (var s = void 0, i = t.length - 1, m; i >= 0; i--)
    (m = t[i]) && (s = m(e, n, s) || s);
  return s && R(e, n, s), s;
};
let H = 1, k = 1;
function X(t, e) {
  return e.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ).forEach((n) => {
    t.appendChild(
      l(e.ownerDocument, "LNode", {
        iedName: n.parentElement?.parentElement?.parentElement?.parentElement?.getAttribute(
          "name"
        ) ?? null,
        ldInst: e.parentElement?.getAttribute("inst") ?? null,
        prefix: n.getAttribute("prefix"),
        lnClass: n.getAttribute("lnClass"),
        lnInst: n.getAttribute("inst")
      })
    );
  }), t;
}
function C(t) {
  return t.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function F(t) {
  return t.getAttribute("prefix") && t.getAttribute("inst") ? t.getAttribute("prefix") + t.getAttribute("inst") : t.getAttribute("inst") && C(t) === "CBR" ? "QA" + H++ : "QB" + k++;
}
function Q(t, e) {
  if (Array.from(
    t.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((r) => e.includes(r.innerHTML.trim())).length)
    return !0;
  const n = t.ownerDocument;
  return Array.from(
    n.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${t.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((r) => r.getAttribute("type")).flatMap(
    (r) => Array.from(
      n.querySelectorAll(
        `DOType[id="${r}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((r) => e.includes(r.innerHTML.trim())).length > 0;
}
function U(t) {
  return Array.from(
    t.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function j(t, e) {
  return t.parentElement ? U(t).filter((n) => Q(n, e)) : [];
}
class d extends S {
  constructor() {
    super(...arguments), this.substationNameLength = 5, this.voltageLevelNameLength = 3, this.iedStartChar = "A";
  }
  async run() {
    const e = this.extractNames(
      Array.from(this.doc.querySelectorAll("LNode")).map(
        (r) => r.getAttribute("iedName") || ""
      )
    );
    this.iedNames = Array.from(this.doc.querySelectorAll("IED")).map((r) => r.getAttribute("name") || "").filter((r) => !e.includes(r));
    const n = this.extractNames(
      this.iedNames.filter(
        (r) => !r?.substring(this.substationNameLength)?.startsWith("A00") && !r?.substring(this.substationNameLength)?.includes("_")
      ).map(
        (r) => r?.substring(0, this.substationNameLength).replace(/_/g, "")
      )
    );
    this.createLog(
      n.length == 0 ? 1 : 0,
      h("compas.autogensubstation.substationAmount", {
        amount: n.length
      })
    ), this.createSubstations(n);
  }
  /**
   * Creating substations based on the list of names. First check if a substation with that name already exists.
   * If the substation element doesn't exist yet, a substation element will be created with the given name and a default
   * description.
   *
   * The created substation element with its name and optional underscore seperators will be used to create voltageLevels as child elements to the substations.
   * Afterwards the substation elements will be added to the document.
   */
  createSubstations(e) {
    e.forEach(async (n) => {
      if (this.doc.querySelector(`Substation[name=${n}]`) === null) {
        const s = l(this.doc, "Substation", {
          name: n,
          desc: "Substation generated by CoMPAS"
        });
        await this.createVoltageLevels(
          s,
          n + "_".repeat(this.substationNameLength - n.length)
        ), this.dispatchEvent(
          P({
            new: {
              parent: this.doc.querySelector("SCL"),
              element: s
            }
          })
        ), this.createLog(
          0,
          h("compas.autogensubstation.substationGen", {
            substationname: n
          })
        );
      }
    });
  }
  /**
   * The name-content of the child elements will be extracted by getting the substring after the substationNameLength of characters.
   * VoltageLevel elements will be created by getting the first voltageLevelNameLength characters of each element in the name content.
   * The elements will be created based on the name and some default values.
   *
   * Afterwards the first voltageLevelNameLength of characters will be filtered out of the name content and the remaining content
   * will be used to create bay elements.
   * The elements will be appended to the substation element
   * @param substation substation(parent) element
   * @param substationName name of the substation
   */
  createVoltageLevels(e, n) {
    const r = this.iedNames.filter((i) => i.includes(n)).map((i) => i?.substring(this.substationNameLength)), s = this.extractNames(
      r.map(
        (i) => i?.substring(0, this.voltageLevelNameLength)
      )
    ).filter((i) => !i.startsWith("A00"));
    this.createLog(
      s.length == 0 ? 1 : 0,
      h("compas.autogensubstation.voltagelevelAmount", {
        amount: s.length,
        substationname: n.replace(/_/g, "")
      })
    ), s.length != 0 && s.forEach((i) => {
      const o = l(
        e.ownerDocument,
        "VoltageLevel",
        {
          name: i,
          desc: "Voltage Level generated by CoMPAS",
          nomFreq: "50.0",
          numPhases: "3"
        }
      ), p = r.filter((a) => a?.startsWith(i)).map(
        (a) => a?.substring(this.voltageLevelNameLength, a.length)
      );
      this.createBays(o, p, n + i), e.appendChild(o);
    });
  }
  /**
   * Bay elements will be created by getting the characters before the IED start character of each element in the remaining name content.
   * Afterwards the IED names that contain in the bay will be determined by filtering out the Voltage Level content that start with the bayname.
   * The IED element will be found by doing a query with the full IED name (substationVoltageLevelName + IED name).
   * The IED element will be used the create LNode elements. The guessLNodes will create elements based on if the IED contains switchgear.
   * If the element doesn't contain switchgear a deafult LNode element will be created as child and appended to the bay.
   *
   * @param voltageLevel voltageLevel(parent) element
   * @param voltageLevelContent remaining content extracted from the IEDs (name without substation name and voltageLevel name)
   * @param substationVoltageLevelName The name of the substation + voltageLevel
   */
  createBays(e, n, r) {
    const s = this.extractNames(
      n.map((i) => i.split(this.iedStartChar)[0])
    );
    this.createLog(
      s.length == 0 ? 1 : 0,
      h("compas.autogensubstation.bayAmount", {
        amount: s.length,
        voltagelevelname: r.substring(
          this.substationNameLength
        )
      })
    ), s.forEach((i) => {
      const g = l(e.ownerDocument, "Bay", {
        name: i,
        desc: "Bay generated by CoMPAS"
      });
      n.filter(
        (o) => o.startsWith(i)
      ).forEach((o) => {
        const p = this.doc.querySelector(
          `IED[name=${r + o}]`
        ), a = this.createLNodeElements(p, [
          "sbo-with-enhanced-security"
        ]);
        a ? a.forEach((E) => g.appendChild(E)) : g.prepend(this.addDefaultLNodes(p));
      }), e.appendChild(g);
    });
  }
  /**
   * Create ConductingEquipment with LNode children based on whether the IED contains switchgear
   * @param ied
   * @param ctlModelList
   * @returns ConductingEquipment with LNode child elements or null
   */
  createLNodeElements(e, n) {
    const r = j(e, n);
    return r.length ? r.map((i) => X(
      l(e.ownerDocument, "ConductingEquipment", {
        name: F(i),
        type: C(i)
      }),
      i
    )) : null;
  }
  /**
   * Create default LNode element with default values
   * @param currentIed
   * @returns LNode element
   */
  addDefaultLNodes(e) {
    const n = e.querySelector("LN0");
    return l(e.ownerDocument, "LNode", {
      iedName: e.getAttribute("name"),
      ldInst: e.parentElement?.getAttribute("inst") ?? null,
      prefix: n?.getAttribute("prefix") ?? null,
      lnClass: n?.getAttribute("lnClass") ?? null,
      lnInst: n?.getAttribute("inst") ?? null
    });
  }
  /**
   * Helper function to filter out empty and duplicate elements
   * @param content
   * @returns filtered content
   */
  extractNames(e) {
    return e.filter(
      (n, r) => n && e.indexOf(n) === r
    );
  }
  createLog(e, n) {
    this.dispatchEvent(
      q({
        kind: e == 0 ? "info" : "error",
        title: n
      })
    );
  }
}
c([
  u()
], d.prototype, "doc");
c([
  u()
], d.prototype, "iedNames");
c([
  u()
], d.prototype, "substationNameLength");
c([
  u()
], d.prototype, "voltageLevelNameLength");
c([
  u()
], d.prototype, "iedStartChar");
export {
  d as default
};
