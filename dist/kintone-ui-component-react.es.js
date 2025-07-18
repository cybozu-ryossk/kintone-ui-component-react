import $s, { useRef as vh, useEffect as Pg, Children as Q2, isValidElement as L2 } from "react";
import OS from "react-dom";
import { Text as Z2, Dialog as $2, Attachment as J2 } from "kintone-ui-component";
var vv = { exports: {} }, rp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iS;
function K2() {
  if (iS) return rp;
  iS = 1;
  var T = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function R(b, B, J) {
    var W = null;
    if (J !== void 0 && (W = "" + J), B.key !== void 0 && (W = "" + B.key), "key" in B) {
      J = {};
      for (var ce in B)
        ce !== "key" && (J[ce] = B[ce]);
    } else J = B;
    return B = J.ref, {
      $$typeof: T,
      type: b,
      key: W,
      ref: B !== void 0 ? B : null,
      props: J
    };
  }
  return rp.Fragment = p, rp.jsx = R, rp.jsxs = R, rp;
}
var dp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cS;
function k2() {
  return cS || (cS = 1, process.env.NODE_ENV !== "production" && function() {
    function T(Y) {
      if (Y == null) return null;
      if (typeof Y == "function")
        return Y.$$typeof === St ? null : Y.displayName || Y.name || null;
      if (typeof Y == "string") return Y;
      switch (Y) {
        case pl:
          return "Fragment";
        case ut:
          return "Profiler";
        case dt:
          return "StrictMode";
        case Gl:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case fe:
          return "Activity";
      }
      if (typeof Y == "object")
        switch (typeof Y.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), Y.$$typeof) {
          case Me:
            return "Portal";
          case xt:
            return (Y.displayName || "Context") + ".Provider";
          case ga:
            return (Y._context.displayName || "Context") + ".Consumer";
          case vl:
            var ie = Y.render;
            return Y = Y.displayName, Y || (Y = ie.displayName || ie.name || "", Y = Y !== "" ? "ForwardRef(" + Y + ")" : "ForwardRef"), Y;
          case Ze:
            return ie = Y.displayName || null, ie !== null ? ie : T(Y.type) || "Memo";
          case Zt:
            ie = Y._payload, Y = Y._init;
            try {
              return T(Y(ie));
            } catch {
            }
        }
      return null;
    }
    function p(Y) {
      return "" + Y;
    }
    function R(Y) {
      try {
        p(Y);
        var ie = !1;
      } catch {
        ie = !0;
      }
      if (ie) {
        ie = console;
        var I = ie.error, me = typeof Symbol == "function" && Symbol.toStringTag && Y[Symbol.toStringTag] || Y.constructor.name || "Object";
        return I.call(
          ie,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          me
        ), p(Y);
      }
    }
    function b(Y) {
      if (Y === pl) return "<>";
      if (typeof Y == "object" && Y !== null && Y.$$typeof === Zt)
        return "<...>";
      try {
        var ie = T(Y);
        return ie ? "<" + ie + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function B() {
      var Y = We.A;
      return Y === null ? null : Y.getOwner();
    }
    function J() {
      return Error("react-stack-top-frame");
    }
    function W(Y) {
      if (Ee.call(Y, "key")) {
        var ie = Object.getOwnPropertyDescriptor(Y, "key").get;
        if (ie && ie.isReactWarning) return !1;
      }
      return Y.key !== void 0;
    }
    function ce(Y, ie) {
      function I() {
        qt || (qt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ie
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(Y, "key", {
        get: I,
        configurable: !0
      });
    }
    function w() {
      var Y = T(this.type);
      return O[Y] || (O[Y] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), Y = this.props.ref, Y !== void 0 ? Y : null;
    }
    function de(Y, ie, I, me, Ne, ct, je, Uu) {
      return I = ct.ref, Y = {
        $$typeof: Se,
        type: Y,
        key: ie,
        props: ct,
        _owner: Ne
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(Y, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(Y, "ref", { enumerable: !1, value: null }), Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(Y, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(Y, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: je
      }), Object.defineProperty(Y, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Uu
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    }
    function te(Y, ie, I, me, Ne, ct, je, Uu) {
      var Tt = ie.children;
      if (Tt !== void 0)
        if (me)
          if ($t(Tt)) {
            for (me = 0; me < Tt.length; me++)
              le(Tt[me]);
            Object.freeze && Object.freeze(Tt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else le(Tt);
      if (Ee.call(ie, "key")) {
        Tt = T(Y);
        var al = Object.keys(ie).filter(function(Ai) {
          return Ai !== "key";
        });
        me = 0 < al.length ? "{key: someKey, " + al.join(": ..., ") + ": ...}" : "{key: someKey}", ye[Tt + me] || (al = 0 < al.length ? "{" + al.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          me,
          Tt,
          al,
          Tt
        ), ye[Tt + me] = !0);
      }
      if (Tt = null, I !== void 0 && (R(I), Tt = "" + I), W(ie) && (R(ie.key), Tt = "" + ie.key), "key" in ie) {
        I = {};
        for (var ba in ie)
          ba !== "key" && (I[ba] = ie[ba]);
      } else I = ie;
      return Tt && ce(
        I,
        typeof Y == "function" ? Y.displayName || Y.name || "Unknown" : Y
      ), de(
        Y,
        Tt,
        ct,
        Ne,
        B(),
        I,
        je,
        Uu
      );
    }
    function le(Y) {
      typeof Y == "object" && Y !== null && Y.$$typeof === Se && Y._store && (Y._store.validated = 1);
    }
    var he = $s, Se = Symbol.for("react.transitional.element"), Me = Symbol.for("react.portal"), pl = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), ut = Symbol.for("react.profiler"), ga = Symbol.for("react.consumer"), xt = Symbol.for("react.context"), vl = Symbol.for("react.forward_ref"), Gl = Symbol.for("react.suspense"), Ct = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), St = Symbol.for("react.client.reference"), We = he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ee = Object.prototype.hasOwnProperty, $t = Array.isArray, Dl = console.createTask ? console.createTask : function() {
      return null;
    };
    he = {
      "react-stack-bottom-frame": function(Y) {
        return Y();
      }
    };
    var qt, O = {}, $ = he["react-stack-bottom-frame"].bind(
      he,
      J
    )(), k = Dl(b(J)), ye = {};
    dp.Fragment = pl, dp.jsx = function(Y, ie, I, me, Ne) {
      var ct = 1e4 > We.recentlyCreatedOwnerStacks++;
      return te(
        Y,
        ie,
        I,
        !1,
        me,
        Ne,
        ct ? Error("react-stack-top-frame") : $,
        ct ? Dl(b(Y)) : k
      );
    }, dp.jsxs = function(Y, ie, I, me, Ne) {
      var ct = 1e4 > We.recentlyCreatedOwnerStacks++;
      return te(
        Y,
        ie,
        I,
        !0,
        me,
        Ne,
        ct ? Error("react-stack-top-frame") : $,
        ct ? Dl(b(Y)) : k
      );
    };
  }()), dp;
}
var oS;
function W2() {
  return oS || (oS = 1, process.env.NODE_ENV === "production" ? vv.exports = K2() : vv.exports = k2()), vv.exports;
}
var Fo = W2();
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F2 = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), fS = /* @__PURE__ */ new WeakMap(), sS = (T, p, R, b, B) => {
  const J = B?.[p];
  J === void 0 ? (T[p] = R, R == null && p in HTMLElement.prototype && T.removeAttribute(p)) : R !== b && ((W, ce, w) => {
    let de = fS.get(W);
    de === void 0 && fS.set(W, de = /* @__PURE__ */ new Map());
    let te = de.get(ce);
    w !== void 0 ? te === void 0 ? (de.set(ce, te = { handleEvent: w }), W.addEventListener(ce, te)) : te.handleEvent = w : te !== void 0 && (de.delete(ce), W.removeEventListener(ce, te));
  })(T, J, R);
}, zv = ({ react: T, tagName: p, elementClass: R, events: b, displayName: B }) => {
  const J = new Set(Object.keys(b ?? {})), W = T.forwardRef((ce, w) => {
    const de = T.useRef(/* @__PURE__ */ new Map()), te = T.useRef(null), le = {}, he = {};
    for (const [Se, Me] of Object.entries(ce)) F2.has(Se) ? le[Se === "className" ? "class" : Se] = Me : J.has(Se) || Se in R.prototype ? he[Se] = Me : le[Se] = Me;
    return T.useLayoutEffect(() => {
      if (te.current === null) return;
      const Se = /* @__PURE__ */ new Map();
      for (const Me in he) sS(te.current, Me, ce[Me], de.current.get(Me), b), de.current.delete(Me), Se.set(Me, ce[Me]);
      for (const [Me, pl] of de.current) sS(te.current, Me, void 0, pl, b);
      de.current = Se;
    }), T.useLayoutEffect(() => {
      te.current?.removeAttribute("defer-hydration");
    }, []), le.suppressHydrationWarning = !0, T.createElement(p, { ...le, ref: T.useCallback((Se) => {
      te.current = Se, typeof w == "function" ? w(Se) : w !== null && (w.current = Se);
    }, [w]) });
  });
  return W.displayName = B ?? R.name, W;
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Sv = globalThis, l1 = Sv.ShadowRoot && (Sv.ShadyCSS === void 0 || Sv.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, MS = Symbol(), rS = /* @__PURE__ */ new WeakMap();
let I2 = class {
  constructor(p, R, b) {
    if (this._$cssResult$ = !0, b !== MS) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = p, this.t = R;
  }
  get styleSheet() {
    let p = this.o;
    const R = this.t;
    if (l1 && p === void 0) {
      const b = R !== void 0 && R.length === 1;
      b && (p = rS.get(R)), p === void 0 && ((this.o = p = new CSSStyleSheet()).replaceSync(this.cssText), b && rS.set(R, p));
    }
    return p;
  }
  toString() {
    return this.cssText;
  }
};
const P2 = (T) => new I2(typeof T == "string" ? T : T + "", void 0, MS), eT = (T, p) => {
  if (l1) T.adoptedStyleSheets = p.map((R) => R instanceof CSSStyleSheet ? R : R.styleSheet);
  else for (const R of p) {
    const b = document.createElement("style"), B = Sv.litNonce;
    B !== void 0 && b.setAttribute("nonce", B), b.textContent = R.cssText, T.appendChild(b);
  }
}, dS = l1 ? (T) => T : (T) => T instanceof CSSStyleSheet ? ((p) => {
  let R = "";
  for (const b of p.cssRules) R += b.cssText;
  return P2(R);
})(T) : T;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: tT, defineProperty: lT, getOwnPropertyDescriptor: aT, getOwnPropertyNames: nT, getOwnPropertySymbols: uT, getPrototypeOf: iT } = Object, Dv = globalThis, hS = Dv.trustedTypes, cT = hS ? hS.emptyScript : "", oT = Dv.reactiveElementPolyfillSupport, pp = (T, p) => T, Ev = { toAttribute(T, p) {
  switch (p) {
    case Boolean:
      T = T ? cT : null;
      break;
    case Object:
    case Array:
      T = T == null ? T : JSON.stringify(T);
  }
  return T;
}, fromAttribute(T, p) {
  let R = T;
  switch (p) {
    case Boolean:
      R = T !== null;
      break;
    case Number:
      R = T === null ? null : Number(T);
      break;
    case Object:
    case Array:
      try {
        R = JSON.parse(T);
      } catch {
        R = null;
      }
  }
  return R;
} }, a1 = (T, p) => !tT(T, p), yS = { attribute: !0, type: String, converter: Ev, reflect: !1, useDefault: !1, hasChanged: a1 };
Symbol.metadata ??= Symbol("metadata"), Dv.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let ph = class extends HTMLElement {
  static addInitializer(p) {
    this._$Ei(), (this.l ??= []).push(p);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(p, R = yS) {
    if (R.state && (R.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(p) && ((R = Object.create(R)).wrapped = !0), this.elementProperties.set(p, R), !R.noAccessor) {
      const b = Symbol(), B = this.getPropertyDescriptor(p, b, R);
      B !== void 0 && lT(this.prototype, p, B);
    }
  }
  static getPropertyDescriptor(p, R, b) {
    const { get: B, set: J } = aT(this.prototype, p) ?? { get() {
      return this[R];
    }, set(W) {
      this[R] = W;
    } };
    return { get: B, set(W) {
      const ce = B?.call(this);
      J?.call(this, W), this.requestUpdate(p, ce, b);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(p) {
    return this.elementProperties.get(p) ?? yS;
  }
  static _$Ei() {
    if (this.hasOwnProperty(pp("elementProperties"))) return;
    const p = iT(this);
    p.finalize(), p.l !== void 0 && (this.l = [...p.l]), this.elementProperties = new Map(p.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(pp("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(pp("properties"))) {
      const R = this.properties, b = [...nT(R), ...uT(R)];
      for (const B of b) this.createProperty(B, R[B]);
    }
    const p = this[Symbol.metadata];
    if (p !== null) {
      const R = litPropertyMetadata.get(p);
      if (R !== void 0) for (const [b, B] of R) this.elementProperties.set(b, B);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [R, b] of this.elementProperties) {
      const B = this._$Eu(R, b);
      B !== void 0 && this._$Eh.set(B, R);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(p) {
    const R = [];
    if (Array.isArray(p)) {
      const b = new Set(p.flat(1 / 0).reverse());
      for (const B of b) R.unshift(dS(B));
    } else p !== void 0 && R.push(dS(p));
    return R;
  }
  static _$Eu(p, R) {
    const b = R.attribute;
    return b === !1 ? void 0 : typeof b == "string" ? b : typeof p == "string" ? p.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((p) => this.enableUpdating = p), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((p) => p(this));
  }
  addController(p) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(p), this.renderRoot !== void 0 && this.isConnected && p.hostConnected?.();
  }
  removeController(p) {
    this._$EO?.delete(p);
  }
  _$E_() {
    const p = /* @__PURE__ */ new Map(), R = this.constructor.elementProperties;
    for (const b of R.keys()) this.hasOwnProperty(b) && (p.set(b, this[b]), delete this[b]);
    p.size > 0 && (this._$Ep = p);
  }
  createRenderRoot() {
    const p = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return eT(p, this.constructor.elementStyles), p;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((p) => p.hostConnected?.());
  }
  enableUpdating(p) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((p) => p.hostDisconnected?.());
  }
  attributeChangedCallback(p, R, b) {
    this._$AK(p, b);
  }
  _$ET(p, R) {
    const b = this.constructor.elementProperties.get(p), B = this.constructor._$Eu(p, b);
    if (B !== void 0 && b.reflect === !0) {
      const J = (b.converter?.toAttribute !== void 0 ? b.converter : Ev).toAttribute(R, b.type);
      this._$Em = p, J == null ? this.removeAttribute(B) : this.setAttribute(B, J), this._$Em = null;
    }
  }
  _$AK(p, R) {
    const b = this.constructor, B = b._$Eh.get(p);
    if (B !== void 0 && this._$Em !== B) {
      const J = b.getPropertyOptions(B), W = typeof J.converter == "function" ? { fromAttribute: J.converter } : J.converter?.fromAttribute !== void 0 ? J.converter : Ev;
      this._$Em = B;
      const ce = W.fromAttribute(R, J.type);
      this[B] = ce ?? this._$Ej?.get(B) ?? ce, this._$Em = null;
    }
  }
  requestUpdate(p, R, b) {
    if (p !== void 0) {
      const B = this.constructor, J = this[p];
      if (b ??= B.getPropertyOptions(p), !((b.hasChanged ?? a1)(J, R) || b.useDefault && b.reflect && J === this._$Ej?.get(p) && !this.hasAttribute(B._$Eu(p, b)))) return;
      this.C(p, R, b);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(p, R, { useDefault: b, reflect: B, wrapped: J }, W) {
    b && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(p) && (this._$Ej.set(p, W ?? R ?? this[p]), J !== !0 || W !== void 0) || (this._$AL.has(p) || (this.hasUpdated || b || (R = void 0), this._$AL.set(p, R)), B === !0 && this._$Em !== p && (this._$Eq ??= /* @__PURE__ */ new Set()).add(p));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (R) {
      Promise.reject(R);
    }
    const p = this.scheduleUpdate();
    return p != null && await p, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [B, J] of this._$Ep) this[B] = J;
        this._$Ep = void 0;
      }
      const b = this.constructor.elementProperties;
      if (b.size > 0) for (const [B, J] of b) {
        const { wrapped: W } = J, ce = this[B];
        W !== !0 || this._$AL.has(B) || ce === void 0 || this.C(B, void 0, J, ce);
      }
    }
    let p = !1;
    const R = this._$AL;
    try {
      p = this.shouldUpdate(R), p ? (this.willUpdate(R), this._$EO?.forEach((b) => b.hostUpdate?.()), this.update(R)) : this._$EM();
    } catch (b) {
      throw p = !1, this._$EM(), b;
    }
    p && this._$AE(R);
  }
  willUpdate(p) {
  }
  _$AE(p) {
    this._$EO?.forEach((R) => R.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(p)), this.updated(p);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(p) {
    return !0;
  }
  update(p) {
    this._$Eq &&= this._$Eq.forEach((R) => this._$ET(R, this[R])), this._$EM();
  }
  updated(p) {
  }
  firstUpdated(p) {
  }
};
ph.elementStyles = [], ph.shadowRootOptions = { mode: "open" }, ph[pp("elementProperties")] = /* @__PURE__ */ new Map(), ph[pp("finalized")] = /* @__PURE__ */ new Map(), oT?.({ ReactiveElement: ph }), (Dv.reactiveElementVersions ??= []).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n1 = globalThis, Rv = n1.trustedTypes, mS = Rv ? Rv.createPolicy("lit-html", { createHTML: (T) => T }) : void 0, US = "$lit$", Wo = `lit$${Math.random().toFixed(9).slice(2)}$`, xS = "?" + Wo, fT = `<${xS}>`, Ls = document, gp = () => Ls.createComment(""), bp = (T) => T === null || typeof T != "object" && typeof T != "function", u1 = Array.isArray, sT = (T) => u1(T) || typeof T?.[Symbol.iterator] == "function", Wg = `[ 	
\f\r]`, hp = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, pS = /-->/g, vS = />/g, js = RegExp(`>|${Wg}(?:([^\\s"'>=/]+)(${Wg}*=${Wg}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), gS = /'/g, bS = /"/g, CS = /^(?:script|style|textarea|title)$/i, rT = (T) => (p, ...R) => ({ _$litType$: T, strings: p, values: R }), dT = rT(1), Zs = Symbol.for("lit-noChange"), ll = Symbol.for("lit-nothing"), SS = /* @__PURE__ */ new WeakMap(), Qs = Ls.createTreeWalker(Ls, 129);
function HS(T, p) {
  if (!u1(T) || !T.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return mS !== void 0 ? mS.createHTML(p) : p;
}
const hT = (T, p) => {
  const R = T.length - 1, b = [];
  let B, J = p === 2 ? "<svg>" : p === 3 ? "<math>" : "", W = hp;
  for (let ce = 0; ce < R; ce++) {
    const w = T[ce];
    let de, te, le = -1, he = 0;
    for (; he < w.length && (W.lastIndex = he, te = W.exec(w), te !== null); ) he = W.lastIndex, W === hp ? te[1] === "!--" ? W = pS : te[1] !== void 0 ? W = vS : te[2] !== void 0 ? (CS.test(te[2]) && (B = RegExp("</" + te[2], "g")), W = js) : te[3] !== void 0 && (W = js) : W === js ? te[0] === ">" ? (W = B ?? hp, le = -1) : te[1] === void 0 ? le = -2 : (le = W.lastIndex - te[2].length, de = te[1], W = te[3] === void 0 ? js : te[3] === '"' ? bS : gS) : W === bS || W === gS ? W = js : W === pS || W === vS ? W = hp : (W = js, B = void 0);
    const Se = W === js && T[ce + 1].startsWith("/>") ? " " : "";
    J += W === hp ? w + fT : le >= 0 ? (b.push(de), w.slice(0, le) + US + w.slice(le) + Wo + Se) : w + Wo + (le === -2 ? ce : Se);
  }
  return [HS(T, J + (T[R] || "<?>") + (p === 2 ? "</svg>" : p === 3 ? "</math>" : "")), b];
};
class Sp {
  constructor({ strings: p, _$litType$: R }, b) {
    let B;
    this.parts = [];
    let J = 0, W = 0;
    const ce = p.length - 1, w = this.parts, [de, te] = hT(p, R);
    if (this.el = Sp.createElement(de, b), Qs.currentNode = this.el.content, R === 2 || R === 3) {
      const le = this.el.content.firstChild;
      le.replaceWith(...le.childNodes);
    }
    for (; (B = Qs.nextNode()) !== null && w.length < ce; ) {
      if (B.nodeType === 1) {
        if (B.hasAttributes()) for (const le of B.getAttributeNames()) if (le.endsWith(US)) {
          const he = te[W++], Se = B.getAttribute(le).split(Wo), Me = /([.?@])?(.*)/.exec(he);
          w.push({ type: 1, index: J, name: Me[2], strings: Se, ctor: Me[1] === "." ? mT : Me[1] === "?" ? pT : Me[1] === "@" ? vT : Ov }), B.removeAttribute(le);
        } else le.startsWith(Wo) && (w.push({ type: 6, index: J }), B.removeAttribute(le));
        if (CS.test(B.tagName)) {
          const le = B.textContent.split(Wo), he = le.length - 1;
          if (he > 0) {
            B.textContent = Rv ? Rv.emptyScript : "";
            for (let Se = 0; Se < he; Se++) B.append(le[Se], gp()), Qs.nextNode(), w.push({ type: 2, index: ++J });
            B.append(le[he], gp());
          }
        }
      } else if (B.nodeType === 8) if (B.data === xS) w.push({ type: 2, index: J });
      else {
        let le = -1;
        for (; (le = B.data.indexOf(Wo, le + 1)) !== -1; ) w.push({ type: 7, index: J }), le += Wo.length - 1;
      }
      J++;
    }
  }
  static createElement(p, R) {
    const b = Ls.createElement("template");
    return b.innerHTML = p, b;
  }
}
function gh(T, p, R = T, b) {
  if (p === Zs) return p;
  let B = b !== void 0 ? R._$Co?.[b] : R._$Cl;
  const J = bp(p) ? void 0 : p._$litDirective$;
  return B?.constructor !== J && (B?._$AO?.(!1), J === void 0 ? B = void 0 : (B = new J(T), B._$AT(T, R, b)), b !== void 0 ? (R._$Co ??= [])[b] = B : R._$Cl = B), B !== void 0 && (p = gh(T, B._$AS(T, p.values), B, b)), p;
}
class yT {
  constructor(p, R) {
    this._$AV = [], this._$AN = void 0, this._$AD = p, this._$AM = R;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(p) {
    const { el: { content: R }, parts: b } = this._$AD, B = (p?.creationScope ?? Ls).importNode(R, !0);
    Qs.currentNode = B;
    let J = Qs.nextNode(), W = 0, ce = 0, w = b[0];
    for (; w !== void 0; ) {
      if (W === w.index) {
        let de;
        w.type === 2 ? de = new Tp(J, J.nextSibling, this, p) : w.type === 1 ? de = new w.ctor(J, w.name, w.strings, this, p) : w.type === 6 && (de = new gT(J, this, p)), this._$AV.push(de), w = b[++ce];
      }
      W !== w?.index && (J = Qs.nextNode(), W++);
    }
    return Qs.currentNode = Ls, B;
  }
  p(p) {
    let R = 0;
    for (const b of this._$AV) b !== void 0 && (b.strings !== void 0 ? (b._$AI(p, b, R), R += b.strings.length - 2) : b._$AI(p[R])), R++;
  }
}
class Tp {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(p, R, b, B) {
    this.type = 2, this._$AH = ll, this._$AN = void 0, this._$AA = p, this._$AB = R, this._$AM = b, this.options = B, this._$Cv = B?.isConnected ?? !0;
  }
  get parentNode() {
    let p = this._$AA.parentNode;
    const R = this._$AM;
    return R !== void 0 && p?.nodeType === 11 && (p = R.parentNode), p;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(p, R = this) {
    p = gh(this, p, R), bp(p) ? p === ll || p == null || p === "" ? (this._$AH !== ll && this._$AR(), this._$AH = ll) : p !== this._$AH && p !== Zs && this._(p) : p._$litType$ !== void 0 ? this.$(p) : p.nodeType !== void 0 ? this.T(p) : sT(p) ? this.k(p) : this._(p);
  }
  O(p) {
    return this._$AA.parentNode.insertBefore(p, this._$AB);
  }
  T(p) {
    this._$AH !== p && (this._$AR(), this._$AH = this.O(p));
  }
  _(p) {
    this._$AH !== ll && bp(this._$AH) ? this._$AA.nextSibling.data = p : this.T(Ls.createTextNode(p)), this._$AH = p;
  }
  $(p) {
    const { values: R, _$litType$: b } = p, B = typeof b == "number" ? this._$AC(p) : (b.el === void 0 && (b.el = Sp.createElement(HS(b.h, b.h[0]), this.options)), b);
    if (this._$AH?._$AD === B) this._$AH.p(R);
    else {
      const J = new yT(B, this), W = J.u(this.options);
      J.p(R), this.T(W), this._$AH = J;
    }
  }
  _$AC(p) {
    let R = SS.get(p.strings);
    return R === void 0 && SS.set(p.strings, R = new Sp(p)), R;
  }
  k(p) {
    u1(this._$AH) || (this._$AH = [], this._$AR());
    const R = this._$AH;
    let b, B = 0;
    for (const J of p) B === R.length ? R.push(b = new Tp(this.O(gp()), this.O(gp()), this, this.options)) : b = R[B], b._$AI(J), B++;
    B < R.length && (this._$AR(b && b._$AB.nextSibling, B), R.length = B);
  }
  _$AR(p = this._$AA.nextSibling, R) {
    for (this._$AP?.(!1, !0, R); p !== this._$AB; ) {
      const b = p.nextSibling;
      p.remove(), p = b;
    }
  }
  setConnected(p) {
    this._$AM === void 0 && (this._$Cv = p, this._$AP?.(p));
  }
}
class Ov {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(p, R, b, B, J) {
    this.type = 1, this._$AH = ll, this._$AN = void 0, this.element = p, this.name = R, this._$AM = B, this.options = J, b.length > 2 || b[0] !== "" || b[1] !== "" ? (this._$AH = Array(b.length - 1).fill(new String()), this.strings = b) : this._$AH = ll;
  }
  _$AI(p, R = this, b, B) {
    const J = this.strings;
    let W = !1;
    if (J === void 0) p = gh(this, p, R, 0), W = !bp(p) || p !== this._$AH && p !== Zs, W && (this._$AH = p);
    else {
      const ce = p;
      let w, de;
      for (p = J[0], w = 0; w < J.length - 1; w++) de = gh(this, ce[b + w], R, w), de === Zs && (de = this._$AH[w]), W ||= !bp(de) || de !== this._$AH[w], de === ll ? p = ll : p !== ll && (p += (de ?? "") + J[w + 1]), this._$AH[w] = de;
    }
    W && !B && this.j(p);
  }
  j(p) {
    p === ll ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, p ?? "");
  }
}
class mT extends Ov {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(p) {
    this.element[this.name] = p === ll ? void 0 : p;
  }
}
class pT extends Ov {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(p) {
    this.element.toggleAttribute(this.name, !!p && p !== ll);
  }
}
class vT extends Ov {
  constructor(p, R, b, B, J) {
    super(p, R, b, B, J), this.type = 5;
  }
  _$AI(p, R = this) {
    if ((p = gh(this, p, R, 0) ?? ll) === Zs) return;
    const b = this._$AH, B = p === ll && b !== ll || p.capture !== b.capture || p.once !== b.once || p.passive !== b.passive, J = p !== ll && (b === ll || B);
    B && this.element.removeEventListener(this.name, this, b), J && this.element.addEventListener(this.name, this, p), this._$AH = p;
  }
  handleEvent(p) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, p) : this._$AH.handleEvent(p);
  }
}
class gT {
  constructor(p, R, b) {
    this.element = p, this.type = 6, this._$AN = void 0, this._$AM = R, this.options = b;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(p) {
    gh(this, p);
  }
}
const bT = n1.litHtmlPolyfillSupport;
bT?.(Sp, Tp), (n1.litHtmlVersions ??= []).push("3.3.1");
const ST = (T, p, R) => {
  const b = R?.renderBefore ?? p;
  let B = b._$litPart$;
  if (B === void 0) {
    const J = R?.renderBefore ?? null;
    b._$litPart$ = B = new Tp(p.insertBefore(gp(), J), J, void 0, R ?? {});
  }
  return B._$AI(T), B;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i1 = globalThis;
let vp = class extends ph {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    const p = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= p.firstChild, p;
  }
  update(p) {
    const R = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(p), this._$Do = ST(R, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(!0);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(!1);
  }
  render() {
    return Zs;
  }
};
vp._$litElement$ = !0, vp.finalized = !0, i1.litElementHydrateSupport?.({ LitElement: vp });
const TT = i1.litElementPolyfillSupport;
TT?.({ LitElement: vp });
(i1.litElementVersions ??= []).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const AT = { attribute: !0, type: String, converter: Ev, reflect: !1, hasChanged: a1 }, ET = (T = AT, p, R) => {
  const { kind: b, metadata: B } = R;
  let J = globalThis.litPropertyMetadata.get(B);
  if (J === void 0 && globalThis.litPropertyMetadata.set(B, J = /* @__PURE__ */ new Map()), b === "setter" && ((T = Object.create(T)).wrapped = !0), J.set(R.name, T), b === "accessor") {
    const { name: W } = R;
    return { set(ce) {
      const w = p.get.call(this);
      p.set.call(this, ce), this.requestUpdate(W, w, T);
    }, init(ce) {
      return ce !== void 0 && this.C(W, void 0, T, ce), ce;
    } };
  }
  if (b === "setter") {
    const { name: W } = R;
    return function(ce) {
      const w = this[W];
      p.call(this, ce), this.requestUpdate(W, w, T);
    };
  }
  throw Error("Unsupported decorator location: " + b);
};
function ws(T) {
  return (p, R) => typeof R == "object" ? ET(T, p, R) : ((b, B, J) => {
    const W = B.hasOwnProperty(J);
    return B.constructor.createProperty(J, b), W ? Object.getOwnPropertyDescriptor(B, J) : void 0;
  })(T, p, R);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const RT = { CHILD: 2 }, zT = (T) => (...p) => ({ _$litDirective$: T, values: p });
class DT {
  constructor(p) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(p, R, b) {
    this._$Ct = p, this._$AM = R, this._$Ci = b;
  }
  _$AS(p, R) {
    return this.update(p, R);
  }
  update(p, R) {
    return this.render(...R);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e1 = class extends DT {
  constructor(p) {
    if (super(p), this.it = ll, p.type !== RT.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(p) {
    if (p === ll || p == null) return this._t = void 0, this.it = p;
    if (p === Zs) return p;
    if (typeof p != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (p === this.it) return this._t;
    this.it = p;
    const R = [p];
    return R.raw = R, this._t = { _$litType$: this.constructor.resultType, strings: R, values: [] };
  }
};
e1.directiveName = "unsafeHTML", e1.resultType = 1;
const OT = zT(e1), MT = {
  fromAttribute(T) {
    return T === null;
  },
  toAttribute(T) {
    return T ? null : "";
  }
}, UT = (T) => T instanceof HTMLElement ? T : OT(T);
class xT extends vp {
  createRenderRoot() {
    return this;
  }
  async throwErrorAfterUpdateComplete(p) {
    throw await this.updateComplete, new Error(p);
  }
}
const CT = (T, p, R) => {
  const b = new CustomEvent(p, {
    detail: R,
    bubbles: !0,
    composed: !0
  });
  return T.dispatchEvent(b);
}, HT = (T) => {
  const p = "kuc-style-1-21-0";
  let R = document.getElementById(p);
  R || (R = document.createElement("style"), R.id = p, document.head.appendChild(R)), R.appendChild(document.createTextNode(T));
};
function _T(T) {
  if (!T || typeof T != "object")
    return {};
  const p = { ...T };
  for (const R in p)
    Object.prototype.hasOwnProperty.call(p, R) && p[R] === void 0 && delete p[R];
  return p;
}
const NT = `
  kuc-button-1-21-0,
  kuc-button-1-21-0 *,
  kuc-button-1-21-0:lang(en),
  kuc-button-1-21-0:lang(en) * {
    font-family: sans-serif;
  }
  kuc-button-1-21-0:lang(es),
  kuc-button-1-21-0:lang(es) * {
    font-family: sans-serif;
  }
  kuc-button-1-21-0:lang(ja),
  kuc-button-1-21-0:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-button-1-21-0:lang(zh),
  kuc-button-1-21-0:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti, Hei,
      "Heiti SC", sans-serif;
  }
  kuc-button-1-21-0:lang(zh-TW),
  kuc-button-1-21-0:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-button-1-21-0 {
    display: inline-block;
    vertical-align: top;
  }
  kuc-button-1-21-0[hidden] {
    display: none;
  }
  .kuc-button-1-21-0__button {
    display: grid;
    align-items: center;
    align-content: center;
    font-size: var(--kuc-button-font-size, 16px);
    width: var(--kuc-button-width, "auto");
    height: var(--kuc-button-height, 48px);
    min-width: var(--kuc-button-width, 163px);
    padding: 0px 16px;
    user-select: none;
    white-space: nowrap;
  }
  .kuc-button-1-21-0__button--normal {
    background-color: var(--kuc-button-background-color, #f7f9fa);
    color: var(--kuc-button-text-color, #3498db);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-21-0__button--normal:hover,
  .kuc-button-1-21-0__button--normal:focus-visible,
  .kuc-button-1-21-0__button--normal:active {
    cursor: pointer;
  }
  .kuc-button-1-21-0__button--normal:hover {
    background-color: var(--kuc-button-background-color-hover, #c8d6dd);
  }
  .kuc-button-1-21-0__button--normal:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #c8d6dd);
  }
  .kuc-button-1-21-0__button--normal:active {
    background-color: var(--kuc-button-background-color-active, #c8d6dd);
  }
  .kuc-button-1-21-0__button--submit {
    background-color: var(--kuc-button-background-color, #3498db);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-21-0__button--submit:hover,
  .kuc-button-1-21-0__button--submit:focus-visible,
  .kuc-button-1-21-0__button--submit:active {
    cursor: pointer;
  }
  .kuc-button-1-21-0__button--submit:hover {
    background-color: var(--kuc-button-background-color-hover, #1d6fa5);
  }
  .kuc-button-1-21-0__button--submit:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #1d6fa5);
  }
  .kuc-button-1-21-0__button--submit:active {
    background-color: var(--kuc-button-background-color-active, #1d6fa5);
  }
  .kuc-button-1-21-0__button--alert {
    background-color: var(--kuc-button-background-color, #e74c3c);
    color: var(--kuc-button-text-color, #ffffff);
    border: 1px solid #e3e7e8;
  }
  .kuc-button-1-21-0__button--alert:hover,
  .kuc-button-1-21-0__button--alert:focus-visible,
  .kuc-button-1-21-0__button--alert:active {
    cursor: pointer;
  }
  .kuc-button-1-21-0__button--alert:hover {
    background-color: var(--kuc-button-background-color-hover, #bf2718);
  }
  .kuc-button-1-21-0__button--alert:focus-visible {
    background-color: var(--kuc-button-background-color-focus, #bf2718);
  }
  .kuc-button-1-21-0__button--alert:active {
    background-color: var(--kuc-button-background-color-active, #bf2718);
  }
  .kuc-button-1-21-0__button:disabled {
    background-color: #d4d7d7;
    border: 1px solid #e3e7e8;
    color: #888888;
    cursor: not-allowed;
  }
  .kuc-button-1-21-0__button--normal:focus-visible,
  .kuc-button-1-21-0__button--submit:focus-visible,
  .kuc-button-1-21-0__button--alert:focus-visible {
    outline: 1px solid #3498db;
  }
`;
var Xs = function(T, p, R, b) {
  var B = arguments.length, J = B < 3 ? p : b === null ? b = Object.getOwnPropertyDescriptor(p, R) : b, W;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") J = Reflect.decorate(T, p, R, b);
  else for (var ce = T.length - 1; ce >= 0; ce--) (W = T[ce]) && (J = (B < 3 ? W(J) : B > 3 ? W(p, R, J) : W(p, R)) || J);
  return B > 3 && J && Object.defineProperty(p, R, J), J;
};
let Tv;
(() => {
  if (Tv = window.customElements.get("kuc-button-1-21-0"), Tv)
    return;
  class T extends xT {
    constructor(R) {
      super(), this.className = "", this.id = "", this.text = "", this.type = "normal", this.content = "", this.disabled = !1, this.visible = !0;
      const b = _T(R);
      Object.assign(this, b);
    }
    _handleClickButton(R) {
      R.stopPropagation(), CT(this, "click");
    }
    _getButtonColorType() {
      return this.type === "normal" || this.type === "submit" || this.type === "alert" ? this.type : "normal";
    }
    render() {
      return dT`
        <button
          type="button"
          class="kuc-button-1-21-0__button kuc-button-1-21-0__button--${this._getButtonColorType()}"
          ?disabled="${this.disabled}"
          @click="${this._handleClickButton}"
        >
          ${this.content ? UT(this.content) : this.text}
        </button>
      `;
    }
  }
  Xs([
    ws({ type: String, reflect: !0, attribute: "class" })
  ], T.prototype, "className", void 0), Xs([
    ws({ type: String, reflect: !0, attribute: "id" })
  ], T.prototype, "id", void 0), Xs([
    ws({ type: String })
  ], T.prototype, "text", void 0), Xs([
    ws({ type: String })
  ], T.prototype, "type", void 0), Xs([
    ws()
  ], T.prototype, "content", void 0), Xs([
    ws({ type: Boolean })
  ], T.prototype, "disabled", void 0), Xs([
    ws({
      type: Boolean,
      attribute: "hidden",
      reflect: !0,
      converter: MT
    })
  ], T.prototype, "visible", void 0), window.customElements.define("kuc-button-1-21-0", T), HT(NT), Tv = T;
})();
const BT = Tv;
var gv = { exports: {} }, yp = {}, bv = { exports: {} }, Fg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var TS;
function qT() {
  return TS || (TS = 1, function(T) {
    function p(O, $) {
      var k = O.length;
      O.push($);
      e: for (; 0 < k; ) {
        var ye = k - 1 >>> 1, Y = O[ye];
        if (0 < B(Y, $))
          O[ye] = $, O[k] = Y, k = ye;
        else break e;
      }
    }
    function R(O) {
      return O.length === 0 ? null : O[0];
    }
    function b(O) {
      if (O.length === 0) return null;
      var $ = O[0], k = O.pop();
      if (k !== $) {
        O[0] = k;
        e: for (var ye = 0, Y = O.length, ie = Y >>> 1; ye < ie; ) {
          var I = 2 * (ye + 1) - 1, me = O[I], Ne = I + 1, ct = O[Ne];
          if (0 > B(me, k))
            Ne < Y && 0 > B(ct, me) ? (O[ye] = ct, O[Ne] = k, ye = Ne) : (O[ye] = me, O[I] = k, ye = I);
          else if (Ne < Y && 0 > B(ct, k))
            O[ye] = ct, O[Ne] = k, ye = Ne;
          else break e;
        }
      }
      return $;
    }
    function B(O, $) {
      var k = O.sortIndex - $.sortIndex;
      return k !== 0 ? k : O.id - $.id;
    }
    if (T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var J = performance;
      T.unstable_now = function() {
        return J.now();
      };
    } else {
      var W = Date, ce = W.now();
      T.unstable_now = function() {
        return W.now() - ce;
      };
    }
    var w = [], de = [], te = 1, le = null, he = 3, Se = !1, Me = !1, pl = !1, dt = !1, ut = typeof setTimeout == "function" ? setTimeout : null, ga = typeof clearTimeout == "function" ? clearTimeout : null, xt = typeof setImmediate < "u" ? setImmediate : null;
    function vl(O) {
      for (var $ = R(de); $ !== null; ) {
        if ($.callback === null) b(de);
        else if ($.startTime <= O)
          b(de), $.sortIndex = $.expirationTime, p(w, $);
        else break;
        $ = R(de);
      }
    }
    function Gl(O) {
      if (pl = !1, vl(O), !Me)
        if (R(w) !== null)
          Me = !0, Ct || (Ct = !0, Ee());
        else {
          var $ = R(de);
          $ !== null && qt(Gl, $.startTime - O);
        }
    }
    var Ct = !1, Ze = -1, Zt = 5, fe = -1;
    function St() {
      return dt ? !0 : !(T.unstable_now() - fe < Zt);
    }
    function We() {
      if (dt = !1, Ct) {
        var O = T.unstable_now();
        fe = O;
        var $ = !0;
        try {
          e: {
            Me = !1, pl && (pl = !1, ga(Ze), Ze = -1), Se = !0;
            var k = he;
            try {
              t: {
                for (vl(O), le = R(w); le !== null && !(le.expirationTime > O && St()); ) {
                  var ye = le.callback;
                  if (typeof ye == "function") {
                    le.callback = null, he = le.priorityLevel;
                    var Y = ye(
                      le.expirationTime <= O
                    );
                    if (O = T.unstable_now(), typeof Y == "function") {
                      le.callback = Y, vl(O), $ = !0;
                      break t;
                    }
                    le === R(w) && b(w), vl(O);
                  } else b(w);
                  le = R(w);
                }
                if (le !== null) $ = !0;
                else {
                  var ie = R(de);
                  ie !== null && qt(
                    Gl,
                    ie.startTime - O
                  ), $ = !1;
                }
              }
              break e;
            } finally {
              le = null, he = k, Se = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? Ee() : Ct = !1;
        }
      }
    }
    var Ee;
    if (typeof xt == "function")
      Ee = function() {
        xt(We);
      };
    else if (typeof MessageChannel < "u") {
      var $t = new MessageChannel(), Dl = $t.port2;
      $t.port1.onmessage = We, Ee = function() {
        Dl.postMessage(null);
      };
    } else
      Ee = function() {
        ut(We, 0);
      };
    function qt(O, $) {
      Ze = ut(function() {
        O(T.unstable_now());
      }, $);
    }
    T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, T.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zt = 0 < O ? Math.floor(1e3 / O) : 5;
    }, T.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, T.unstable_next = function(O) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = he;
      }
      var k = he;
      he = $;
      try {
        return O();
      } finally {
        he = k;
      }
    }, T.unstable_requestPaint = function() {
      dt = !0;
    }, T.unstable_runWithPriority = function(O, $) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var k = he;
      he = O;
      try {
        return $();
      } finally {
        he = k;
      }
    }, T.unstable_scheduleCallback = function(O, $, k) {
      var ye = T.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? ye + k : ye) : k = ye, O) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return Y = k + Y, O = {
        id: te++,
        callback: $,
        priorityLevel: O,
        startTime: k,
        expirationTime: Y,
        sortIndex: -1
      }, k > ye ? (O.sortIndex = k, p(de, O), R(w) === null && O === R(de) && (pl ? (ga(Ze), Ze = -1) : pl = !0, qt(Gl, k - ye))) : (O.sortIndex = Y, p(w, O), Me || Se || (Me = !0, Ct || (Ct = !0, Ee()))), O;
    }, T.unstable_shouldYield = St, T.unstable_wrapCallback = function(O) {
      var $ = he;
      return function() {
        var k = he;
        he = $;
        try {
          return O.apply(this, arguments);
        } finally {
          he = k;
        }
      };
    };
  }(Fg)), Fg;
}
var Ig = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AS;
function YT() {
  return AS || (AS = 1, function(T) {
    process.env.NODE_ENV !== "production" && function() {
      function p() {
        if (Gl = !1, fe) {
          var O = T.unstable_now();
          Ee = O;
          var $ = !0;
          try {
            e: {
              xt = !1, vl && (vl = !1, Ze(St), St = -1), ga = !0;
              var k = ut;
              try {
                t: {
                  for (W(O), dt = b(Se); dt !== null && !(dt.expirationTime > O && w()); ) {
                    var ye = dt.callback;
                    if (typeof ye == "function") {
                      dt.callback = null, ut = dt.priorityLevel;
                      var Y = ye(
                        dt.expirationTime <= O
                      );
                      if (O = T.unstable_now(), typeof Y == "function") {
                        dt.callback = Y, W(O), $ = !0;
                        break t;
                      }
                      dt === b(Se) && B(Se), W(O);
                    } else B(Se);
                    dt = b(Se);
                  }
                  if (dt !== null) $ = !0;
                  else {
                    var ie = b(Me);
                    ie !== null && de(
                      ce,
                      ie.startTime - O
                    ), $ = !1;
                  }
                }
                break e;
              } finally {
                dt = null, ut = k, ga = !1;
              }
              $ = void 0;
            }
          } finally {
            $ ? $t() : fe = !1;
          }
        }
      }
      function R(O, $) {
        var k = O.length;
        O.push($);
        e: for (; 0 < k; ) {
          var ye = k - 1 >>> 1, Y = O[ye];
          if (0 < J(Y, $))
            O[ye] = $, O[k] = Y, k = ye;
          else break e;
        }
      }
      function b(O) {
        return O.length === 0 ? null : O[0];
      }
      function B(O) {
        if (O.length === 0) return null;
        var $ = O[0], k = O.pop();
        if (k !== $) {
          O[0] = k;
          e: for (var ye = 0, Y = O.length, ie = Y >>> 1; ye < ie; ) {
            var I = 2 * (ye + 1) - 1, me = O[I], Ne = I + 1, ct = O[Ne];
            if (0 > J(me, k))
              Ne < Y && 0 > J(ct, me) ? (O[ye] = ct, O[Ne] = k, ye = Ne) : (O[ye] = me, O[I] = k, ye = I);
            else if (Ne < Y && 0 > J(ct, k))
              O[ye] = ct, O[Ne] = k, ye = Ne;
            else break e;
          }
        }
        return $;
      }
      function J(O, $) {
        var k = O.sortIndex - $.sortIndex;
        return k !== 0 ? k : O.id - $.id;
      }
      function W(O) {
        for (var $ = b(Me); $ !== null; ) {
          if ($.callback === null) B(Me);
          else if ($.startTime <= O)
            B(Me), $.sortIndex = $.expirationTime, R(Se, $);
          else break;
          $ = b(Me);
        }
      }
      function ce(O) {
        if (vl = !1, W(O), !xt)
          if (b(Se) !== null)
            xt = !0, fe || (fe = !0, $t());
          else {
            var $ = b(Me);
            $ !== null && de(
              ce,
              $.startTime - O
            );
          }
      }
      function w() {
        return Gl ? !0 : !(T.unstable_now() - Ee < We);
      }
      function de(O, $) {
        St = Ct(function() {
          O(T.unstable_now());
        }, $);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), T.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var te = performance;
        T.unstable_now = function() {
          return te.now();
        };
      } else {
        var le = Date, he = le.now();
        T.unstable_now = function() {
          return le.now() - he;
        };
      }
      var Se = [], Me = [], pl = 1, dt = null, ut = 3, ga = !1, xt = !1, vl = !1, Gl = !1, Ct = typeof setTimeout == "function" ? setTimeout : null, Ze = typeof clearTimeout == "function" ? clearTimeout : null, Zt = typeof setImmediate < "u" ? setImmediate : null, fe = !1, St = -1, We = 5, Ee = -1;
      if (typeof Zt == "function")
        var $t = function() {
          Zt(p);
        };
      else if (typeof MessageChannel < "u") {
        var Dl = new MessageChannel(), qt = Dl.port2;
        Dl.port1.onmessage = p, $t = function() {
          qt.postMessage(null);
        };
      } else
        $t = function() {
          Ct(p, 0);
        };
      T.unstable_IdlePriority = 5, T.unstable_ImmediatePriority = 1, T.unstable_LowPriority = 4, T.unstable_NormalPriority = 3, T.unstable_Profiling = null, T.unstable_UserBlockingPriority = 2, T.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, T.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : We = 0 < O ? Math.floor(1e3 / O) : 5;
      }, T.unstable_getCurrentPriorityLevel = function() {
        return ut;
      }, T.unstable_next = function(O) {
        switch (ut) {
          case 1:
          case 2:
          case 3:
            var $ = 3;
            break;
          default:
            $ = ut;
        }
        var k = ut;
        ut = $;
        try {
          return O();
        } finally {
          ut = k;
        }
      }, T.unstable_requestPaint = function() {
        Gl = !0;
      }, T.unstable_runWithPriority = function(O, $) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var k = ut;
        ut = O;
        try {
          return $();
        } finally {
          ut = k;
        }
      }, T.unstable_scheduleCallback = function(O, $, k) {
        var ye = T.unstable_now();
        switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? ye + k : ye) : k = ye, O) {
          case 1:
            var Y = -1;
            break;
          case 2:
            Y = 250;
            break;
          case 5:
            Y = 1073741823;
            break;
          case 4:
            Y = 1e4;
            break;
          default:
            Y = 5e3;
        }
        return Y = k + Y, O = {
          id: pl++,
          callback: $,
          priorityLevel: O,
          startTime: k,
          expirationTime: Y,
          sortIndex: -1
        }, k > ye ? (O.sortIndex = k, R(Me, O), b(Se) === null && O === b(Me) && (vl ? (Ze(St), St = -1) : vl = !0, de(ce, k - ye))) : (O.sortIndex = Y, R(Se, O), xt || ga || (xt = !0, fe || (fe = !0, $t()))), O;
      }, T.unstable_shouldYield = w, T.unstable_wrapCallback = function(O) {
        var $ = ut;
        return function() {
          var k = ut;
          ut = $;
          try {
            return O.apply(this, arguments);
          } finally {
            ut = k;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Ig)), Ig;
}
var ES;
function _S() {
  return ES || (ES = 1, process.env.NODE_ENV === "production" ? bv.exports = qT() : bv.exports = YT()), bv.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var RS;
function GT() {
  if (RS) return yp;
  RS = 1;
  var T = _S(), p = $s, R = OS;
  function b(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function B(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function J(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function W(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ce(l) {
    if (J(l) !== l)
      throw Error(b(188));
  }
  function w(l) {
    var n = l.alternate;
    if (!n) {
      if (n = J(l), n === null) throw Error(b(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ce(s), l;
          if (r === c) return ce(s), n;
          r = r.sibling;
        }
        throw Error(b(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var y = !1, m = s.child; m; ) {
          if (m === u) {
            y = !0, u = s, c = r;
            break;
          }
          if (m === c) {
            y = !0, c = s, u = r;
            break;
          }
          m = m.sibling;
        }
        if (!y) {
          for (m = r.child; m; ) {
            if (m === u) {
              y = !0, u = r, c = s;
              break;
            }
            if (m === c) {
              y = !0, c = r, u = s;
              break;
            }
            m = m.sibling;
          }
          if (!y) throw Error(b(189));
        }
      }
      if (u.alternate !== c) throw Error(b(190));
    }
    if (u.tag !== 3) throw Error(b(188));
    return u.stateNode.current === u ? l : n;
  }
  function de(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = de(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var te = Object.assign, le = Symbol.for("react.element"), he = Symbol.for("react.transitional.element"), Se = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), pl = Symbol.for("react.strict_mode"), dt = Symbol.for("react.profiler"), ut = Symbol.for("react.provider"), ga = Symbol.for("react.consumer"), xt = Symbol.for("react.context"), vl = Symbol.for("react.forward_ref"), Gl = Symbol.for("react.suspense"), Ct = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), fe = Symbol.for("react.activity"), St = Symbol.for("react.memo_cache_sentinel"), We = Symbol.iterator;
  function Ee(l) {
    return l === null || typeof l != "object" ? null : (l = We && l[We] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var $t = Symbol.for("react.client.reference");
  function Dl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === $t ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Me:
        return "Fragment";
      case dt:
        return "Profiler";
      case pl:
        return "StrictMode";
      case Gl:
        return "Suspense";
      case Ct:
        return "SuspenseList";
      case fe:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Se:
          return "Portal";
        case xt:
          return (l.displayName || "Context") + ".Provider";
        case ga:
          return (l._context.displayName || "Context") + ".Consumer";
        case vl:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ze:
          return n = l.displayName || null, n !== null ? n : Dl(l.type) || "Memo";
        case Zt:
          n = l._payload, l = l._init;
          try {
            return Dl(l(n));
          } catch {
          }
      }
    return null;
  }
  var qt = Array.isArray, O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ye = [], Y = -1;
  function ie(l) {
    return { current: l };
  }
  function I(l) {
    0 > Y || (l.current = ye[Y], ye[Y] = null, Y--);
  }
  function me(l, n) {
    Y++, ye[Y] = l.current, l.current = n;
  }
  var Ne = ie(null), ct = ie(null), je = ie(null), Uu = ie(null);
  function Tt(l, n) {
    switch (me(je, n), me(ct, l), me(Ne, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? gu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = gu(n), l = Do(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    I(Ne), me(Ne, l);
  }
  function al() {
    I(Ne), I(ct), I(je);
  }
  function ba(l) {
    l.memoizedState !== null && me(Uu, l);
    var n = Ne.current, u = Do(n, l.type);
    n !== u && (me(ct, l), me(Ne, u));
  }
  function Ai(l) {
    ct.current === l && (I(Ne), I(ct)), Uu.current === l && (I(Uu), Pl._currentValue = k);
  }
  var Js = Object.prototype.hasOwnProperty, Ei = T.unstable_scheduleCallback, bh = T.unstable_cancelCallback, Uv = T.unstable_shouldYield, Ri = T.unstable_requestPaint, ta = T.unstable_now, Io = T.unstable_getCurrentPriorityLevel, Ap = T.unstable_ImmediatePriority, Sh = T.unstable_UserBlockingPriority, Po = T.unstable_NormalPriority, Th = T.unstable_LowPriority, Hc = T.unstable_IdlePriority, xv = T.log, Ep = T.unstable_setDisableYieldValue, _c = null, Ol = null;
  function kn(l) {
    if (typeof xv == "function" && Ep(l), Ol && typeof Ol.setStrictMode == "function")
      try {
        Ol.setStrictMode(_c, l);
      } catch {
      }
  }
  var Vl = Math.clz32 ? Math.clz32 : Cv, Ah = Math.log, Rp = Math.LN2;
  function Cv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Ah(l) / Rp | 0) | 0;
  }
  var Nc = 256, Wn = 4194304;
  function la(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function xu(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var m = c & 134217727;
    return m !== 0 ? (c = m & ~r, c !== 0 ? s = la(c) : (y &= m, y !== 0 ? s = la(y) : u || (u = m & ~l, u !== 0 && (s = la(u))))) : (m = c & ~r, m !== 0 ? s = la(m) : y !== 0 ? s = la(y) : u || (u = c & ~l, u !== 0 && (s = la(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function nn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Jt(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cu() {
    var l = Nc;
    return Nc <<= 1, (Nc & 4194048) === 0 && (Nc = 256), l;
  }
  function zi() {
    var l = Wn;
    return Wn <<= 1, (Wn & 62914560) === 0 && (Wn = 4194304), l;
  }
  function Hu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Di(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function zp(l, n, u, c, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var m = l.entanglements, S = l.expirationTimes, x = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var Q = 31 - Vl(u), Z = 1 << Q;
      m[Q] = 0, S[Q] = -1;
      var H = x[Q];
      if (H !== null)
        for (x[Q] = null, Q = 0; Q < H.length; Q++) {
          var N = H[Q];
          N !== null && (N.lane &= -536870913);
        }
      u &= ~Z;
    }
    c !== 0 && ef(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function ef(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Vl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function tf(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Vl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function Va(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Ks(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Dp() {
    var l = $.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Dm(l.type));
  }
  function Hv(l, n) {
    var u = $.p;
    try {
      return $.p = l, n();
    } finally {
      $.p = u;
    }
  }
  var Yt = Math.random().toString(36).slice(2), Kt = "__reactFiber$" + Yt, Ml = "__reactProps$" + Yt, Bc = "__reactContainer$" + Yt, ks = "__reactEvents$" + Yt, Op = "__reactListeners$" + Yt, Ws = "__reactHandles$" + Yt, Mp = "__reactResources$" + Yt, ae = "__reactMarker$" + Yt;
  function lf(l) {
    delete l[Kt], delete l[Ml], delete l[ks], delete l[Op], delete l[Ws];
  }
  function nl(l) {
    var n = l[Kt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Bc] || u[Kt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = rl(l); l !== null; ) {
            if (u = l[Kt]) return u;
            l = rl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Oi(l) {
    if (l = l[Kt] || l[Bc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function af(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(b(33));
  }
  function Fn(l) {
    var n = l[Mp];
    return n || (n = l[Mp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Gt(l) {
    l[ae] = !0;
  }
  var nf = /* @__PURE__ */ new Set(), aa = {};
  function _u(l, n) {
    Nu(l, n), Nu(l + "Capture", n);
  }
  function Nu(l, n) {
    for (aa[l] = n, l = 0; l < n.length; l++)
      nf.add(n[l]);
  }
  var Up = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fs = {}, Eh = {};
  function xp(l) {
    return Js.call(Eh, l) ? !0 : Js.call(Fs, l) ? !1 : Up.test(l) ? Eh[l] = !0 : (Fs[l] = !0, !1);
  }
  function In(l, n, u) {
    if (xp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function uf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function un(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var Is, Rh;
  function Mi(l) {
    if (Is === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Is = n && n[1] || "", Rh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Is + l + Rh;
  }
  var Ul = !1;
  function Bu(l, n) {
    if (!l || Ul) return "";
    Ul = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var Z = function() {
                throw Error();
              };
              if (Object.defineProperty(Z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Z, []);
                } catch (N) {
                  var H = N;
                }
                Reflect.construct(l, [], Z);
              } else {
                try {
                  Z.call();
                } catch (N) {
                  H = N;
                }
                l.call(Z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                H = N;
              }
              (Z = l()) && typeof Z.catch == "function" && Z.catch(function() {
              });
            }
          } catch (N) {
            if (N && H && typeof N.stack == "string")
              return [N.stack, H.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), y = r[0], m = r[1];
      if (y && m) {
        var S = y.split(`
`), x = m.split(`
`);
        for (s = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < x.length && !x[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === S.length || s === x.length)
          for (c = S.length - 1, s = x.length - 1; 1 <= c && 0 <= s && S[c] !== x[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (S[c] !== x[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || S[c] !== x[s]) {
                  var Q = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", l.displayName)), Q;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      Ul = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Mi(u) : "";
  }
  function Ui(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Mi(l.type);
      case 16:
        return Mi("Lazy");
      case 13:
        return Mi("Suspense");
      case 19:
        return Mi("SuspenseList");
      case 0:
      case 15:
        return Bu(l.type, !1);
      case 11:
        return Bu(l.type.render, !1);
      case 1:
        return Bu(l.type, !0);
      case 31:
        return Mi("Activity");
      default:
        return "";
    }
  }
  function zh(l) {
    try {
      var n = "";
      do
        n += Ui(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function gl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function cf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Dh(l) {
    var n = cf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          c = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function qu(l) {
    l._valueTracker || (l._valueTracker = Dh(l));
  }
  function xi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = cf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function qc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var _v = /[\n"\\]/g;
  function Sa(l) {
    return l.replace(
      _v,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ps(l, n, u, c, s, r, y, m) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + gl(n)) : l.value !== "" + gl(n) && (l.value = "" + gl(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? of(l, y, gl(n)) : u != null ? of(l, y, gl(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.name = "" + gl(m) : l.removeAttribute("name");
  }
  function er(l, n, u, c, s, r, y, m) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + gl(u) : "", n = n != null ? "" + gl(n) : u, m || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = m ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function of(l, n, u) {
    n === "number" && qc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Ci(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + gl(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Oh(l, n, u) {
    if (n != null && (n = "" + gl(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + gl(u) : "";
  }
  function Mh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(b(92));
        if (qt(c)) {
          if (1 < c.length) throw Error(b(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = gl(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Yc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Cp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function tr(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Cp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function ff(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(b(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && tr(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && tr(l, r, n[r]);
  }
  function Hi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Nv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Hp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function sf(l) {
    return Hp.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var _i = null;
  function lr(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Gc = null, Vc = null;
  function _p(l) {
    var n = Oi(l);
    if (n && (l = n.stateNode)) {
      var u = l[Ml] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Ps(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Sa(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[Ml] || null;
                if (!s) throw Error(b(90));
                Ps(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && xi(c);
          }
          break e;
        case "textarea":
          Oh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Ci(l, !!u.multiple, n, !1);
      }
    }
  }
  var Uh = !1;
  function jc(l, n, u) {
    if (Uh) return l(n, u);
    Uh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Uh = !1, (Gc !== null || Vc !== null) && (rc(), Gc && (n = Gc, l = Vc, Vc = Gc = null, _p(n), l)))
        for (n = 0; n < l.length; n++) _p(l[n]);
    }
  }
  function Ni(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Ml] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        b(231, n, typeof u)
      );
    return u;
  }
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ar = !1;
  if (cn)
    try {
      var Pn = {};
      Object.defineProperty(Pn, "passive", {
        get: function() {
          ar = !0;
        }
      }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
    } catch {
      ar = !1;
    }
  var eu = null, wc = null, Bi = null;
  function xh() {
    if (Bi) return Bi;
    var l, n = wc, u = n.length, c, s = "value" in eu ? eu.value : eu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === s[r - c]; c++) ;
    return Bi = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function ul(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function nr() {
    return !0;
  }
  function ur() {
    return !1;
  }
  function xl(l) {
    function n(u, c, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var m in l)
        l.hasOwnProperty(m) && (u = l[m], this[m] = u ? u(r) : r[m]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? nr : ur, this.isPropagationStopped = ur, this;
    }
    return te(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = nr);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = nr);
      },
      persist: function() {
      },
      isPersistent: nr
    }), n;
  }
  var Yu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ir = xl(Yu), rf = te({}, Yu, { view: 0, detail: 0 }), Np = xl(rf), Ch, cr, df, qi = te({}, rf, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== df && (df && l.type === "mousemove" ? (Ch = l.screenX - df.screenX, cr = l.screenY - df.screenY) : cr = Ch = 0, df = l), Ch);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cr;
    }
  }), Hh = xl(qi), Bp = te({}, qi, { dataTransfer: 0 }), qp = xl(Bp), Bv = te({}, rf, { relatedTarget: 0 }), _h = xl(Bv), qv = te({}, Yu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yv = xl(qv), Gv = te({}, Yu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), hf = xl(Gv), Yp = te({}, Yu, { data: 0 }), Nh = xl(Yp), Gp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Vp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
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
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Bh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jp(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Bh[l]) ? !!n[l] : !1;
  }
  function tu() {
    return jp;
  }
  var Yi = te({}, rf, {
    key: function(l) {
      if (l.key) {
        var n = Gp[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = ul(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Vp[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tu,
    charCode: function(l) {
      return l.type === "keypress" ? ul(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ul(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), ja = xl(Yi), na = te({}, qi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), yf = xl(na), or = te({}, rf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu
  }), qh = xl(or), jl = te({}, Yu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wp = xl(jl), fr = te({}, qi, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gi = xl(fr), Yh = te({}, Yu, {
    newState: 0,
    oldState: 0
  }), Xp = xl(Yh), Qp = [9, 13, 27, 32], mf = cn && "CompositionEvent" in window, pf = null;
  cn && "documentMode" in document && (pf = document.documentMode);
  var Gh = cn && "TextEvent" in window && !pf, on = cn && (!mf || pf && 8 < pf && 11 >= pf), Vh = " ", sr = !1;
  function vf(l, n) {
    switch (l) {
      case "keyup":
        return Qp.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Vu = !1;
  function jh(l, n) {
    switch (l) {
      case "compositionend":
        return Gu(n);
      case "keypress":
        return n.which !== 32 ? null : (sr = !0, Vh);
      case "textInput":
        return l = n.data, l === Vh && sr ? null : l;
      default:
        return null;
    }
  }
  function Vi(l, n) {
    if (Vu)
      return l === "compositionend" || !mf && vf(l, n) ? (l = xh(), Bi = wc = eu = null, Vu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return on && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Lp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function rr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Lp[l.type] : n === "textarea";
  }
  function dr(l, n, u, c) {
    Gc ? Vc ? Vc.push(c) : Vc = [c] : Gc = c, n = zo(n, "onChange"), 0 < n.length && (u = new ir(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var wa = null, Xa = null;
  function wh(l) {
    mc(l, 0);
  }
  function fn(l) {
    var n = af(l);
    if (xi(n)) return l;
  }
  function Xh(l, n) {
    if (l === "change") return n;
  }
  var Qh = !1;
  if (cn) {
    var ji;
    if (cn) {
      var wi = "oninput" in document;
      if (!wi) {
        var Lh = document.createElement("div");
        Lh.setAttribute("oninput", "return;"), wi = typeof Lh.oninput == "function";
      }
      ji = wi;
    } else ji = !1;
    Qh = ji && (!document.documentMode || 9 < document.documentMode);
  }
  function Xc() {
    wa && (wa.detachEvent("onpropertychange", Zh), Xa = wa = null);
  }
  function Zh(l) {
    if (l.propertyName === "value" && fn(Xa)) {
      var n = [];
      dr(
        n,
        Xa,
        l,
        lr(l)
      ), jc(wh, n);
    }
  }
  function hr(l, n, u) {
    l === "focusin" ? (Xc(), wa = n, Xa = u, wa.attachEvent("onpropertychange", Zh)) : l === "focusout" && Xc();
  }
  function ju(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return fn(Xa);
  }
  function lu(l, n) {
    if (l === "click") return fn(n);
  }
  function $h(l, n) {
    if (l === "input" || l === "change")
      return fn(n);
  }
  function Jh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var il = typeof Object.is == "function" ? Object.is : Jh;
  function wu(l, n) {
    if (il(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Js.call(n, s) || !il(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Xu(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ft(l, n) {
    var u = Xu(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Xu(u);
    }
  }
  function gf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? gf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Kh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = qc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = qc(l.document);
    }
    return n;
  }
  function bf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Xi = cn && "documentMode" in document && 11 >= document.documentMode, sn = null, Qa = null, Qu = null, Qi = !1;
  function yr(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Qi || sn == null || sn !== qc(c) || (c = sn, "selectionStart" in c && bf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Qu && wu(Qu, c) || (Qu = c, c = zo(Qa, "onSelect"), 0 < c.length && (n = new ir(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = sn)));
  }
  function au(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Li = {
    animationend: au("Animation", "AnimationEnd"),
    animationiteration: au("Animation", "AnimationIteration"),
    animationstart: au("Animation", "AnimationStart"),
    transitionrun: au("Transition", "TransitionRun"),
    transitionstart: au("Transition", "TransitionStart"),
    transitioncancel: au("Transition", "TransitionCancel"),
    transitionend: au("Transition", "TransitionEnd")
  }, Ta = {}, La = {};
  cn && (La = document.createElement("div").style, "AnimationEvent" in window || (delete Li.animationend.animation, delete Li.animationiteration.animation, delete Li.animationstart.animation), "TransitionEvent" in window || delete Li.transitionend.transition);
  function rn(l) {
    if (Ta[l]) return Ta[l];
    if (!Li[l]) return l;
    var n = Li[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in La)
        return Ta[l] = n[u];
    return l;
  }
  var Zp = rn("animationend"), kh = rn("animationiteration"), $p = rn("animationstart"), Wh = rn("transitionrun"), mr = rn("transitionstart"), Jp = rn("transitioncancel"), Fh = rn("transitionend"), Ih = /* @__PURE__ */ new Map(), Qc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Qc.push("scrollEnd");
  function Aa(l, n) {
    Ih.set(l, n), _u(n, [l]);
  }
  var Ph = /* @__PURE__ */ new WeakMap();
  function ua(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Ph.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: zh(n)
      }, Ph.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: zh(n)
    };
  }
  var wl = [], Lu = 0, dn = 0;
  function Za() {
    for (var l = Lu, n = dn = Lu = 0; n < l; ) {
      var u = wl[n];
      wl[n++] = null;
      var c = wl[n];
      wl[n++] = null;
      var s = wl[n];
      wl[n++] = null;
      var r = wl[n];
      if (wl[n++] = null, c !== null && s !== null) {
        var y = c.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), c.pending = s;
      }
      r !== 0 && Zc(u, s, r);
    }
  }
  function Zu(l, n, u, c) {
    wl[Lu++] = l, wl[Lu++] = n, wl[Lu++] = u, wl[Lu++] = c, dn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Lc(l, n, u, c) {
    return Zu(l, n, u, c), Sf(l);
  }
  function hn(l, n) {
    return Zu(l, null, null, n), Sf(l);
  }
  function Zc(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Vl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Sf(l) {
    if (50 < bo)
      throw bo = 0, Py = null, Error(b(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $c = {};
  function Kp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xl(l, n, u, c) {
    return new Kp(l, n, u, c);
  }
  function Tf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function $a(l, n) {
    var u = l.alternate;
    return u === null ? (u = Xl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Ce(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function K(l, n, u, c, s, r) {
    var y = 0;
    if (c = l, typeof l == "function") Tf(l) && (y = 1);
    else if (typeof l == "string")
      y = M0(
        l,
        u,
        Ne.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case fe:
          return l = Xl(31, u, n, s), l.elementType = fe, l.lanes = r, l;
        case Me:
          return Ea(u.children, s, r, n);
        case pl:
          y = 8, s |= 24;
          break;
        case dt:
          return l = Xl(12, u, n, s | 2), l.elementType = dt, l.lanes = r, l;
        case Gl:
          return l = Xl(13, u, n, s), l.elementType = Gl, l.lanes = r, l;
        case Ct:
          return l = Xl(19, u, n, s), l.elementType = Ct, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ut:
              case xt:
                y = 10;
                break e;
              case ga:
                y = 9;
                break e;
              case vl:
                y = 11;
                break e;
              case Ze:
                y = 14;
                break e;
              case Zt:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            b(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Xl(y, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function Ea(l, n, u, c) {
    return l = Xl(7, l, c, n), l.lanes = u, l;
  }
  function Jc(l, n, u) {
    return l = Xl(6, l, null, n), l.lanes = u, l;
  }
  function vt(l, n, u) {
    return n = Xl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var $u = [], Ju = 0, Af = null, Kc = 0, Ra = [], Ql = 0, nu = null, Ja = 1, At = "";
  function we(l, n) {
    $u[Ju++] = Kc, $u[Ju++] = Af, Af = l, Kc = n;
  }
  function pr(l, n, u) {
    Ra[Ql++] = Ja, Ra[Ql++] = At, Ra[Ql++] = nu, nu = l;
    var c = Ja;
    l = At;
    var s = 32 - Vl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Vl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (c & (1 << y) - 1).toString(32), c >>= y, s -= y, Ja = 1 << 32 - Vl(n) + s | u << s | c, At = r + l;
    } else
      Ja = 1 << r | u << s | c, At = l;
  }
  function Zi(l) {
    l.return !== null && (we(l, 1), pr(l, 1, 0));
  }
  function yn(l) {
    for (; l === Af; )
      Af = $u[--Ju], $u[Ju] = null, Kc = $u[--Ju], $u[Ju] = null;
    for (; l === nu; )
      nu = Ra[--Ql], Ra[Ql] = null, At = Ra[--Ql], Ra[Ql] = null, Ja = Ra[--Ql], Ra[Ql] = null;
  }
  var Ht = null, $e = null, Le = !1, za = null, Da = !1, $i = Error(b(519));
  function uu(l) {
    var n = Error(b(418, ""));
    throw Fc(ua(n, l)), $i;
  }
  function Ef(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Kt] = l, n[Ml] = c, u) {
      case "dialog":
        ze("cancel", n), ze("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ze("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < os.length; u++)
          ze(os[u], n);
        break;
      case "source":
        ze("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ze("error", n), ze("load", n);
        break;
      case "details":
        ze("toggle", n);
        break;
      case "input":
        ze("invalid", n), er(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), qu(n);
        break;
      case "select":
        ze("invalid", n);
        break;
      case "textarea":
        ze("invalid", n), Mh(n, c.value, c.defaultValue, c.children), qu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || hm(n.textContent, u) ? (c.popover != null && (ze("beforetoggle", n), ze("toggle", n)), c.onScroll != null && ze("scroll", n), c.onScrollEnd != null && ze("scrollend", n), c.onClick != null && (n.onclick = Dd), n = !0) : n = !1, n || uu(l);
  }
  function ey(l) {
    for (Ht = l.return; Ht; )
      switch (Ht.tag) {
        case 5:
        case 13:
          Da = !1;
          return;
        case 27:
        case 3:
          Da = !0;
          return;
        default:
          Ht = Ht.return;
      }
  }
  function kc(l) {
    if (l !== Ht) return !1;
    if (!Le) return ey(l), Le = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Nn(l.type, l.memoizedProps)), u = !u), u && $e && uu(l), ey(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(b(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                $e = Pa(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        $e = null;
      }
    } else
      n === 27 ? (n = $e, ri(l.type) ? (l = di, di = null, $e = l) : $e = n) : $e = Ht ? Pa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Wc() {
    $e = Ht = null, Le = !1;
  }
  function ty() {
    var l = za;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), za = null), l;
  }
  function Fc(l) {
    za === null ? za = [l] : za.push(l);
  }
  var Rf = ie(null), iu = null, Ka = null;
  function cu(l, n, u) {
    me(Rf, n._currentValue), n._currentValue = u;
  }
  function mn(l) {
    l._currentValue = Rf.current, I(Rf);
  }
  function vr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function ly(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var m = r;
          r = s;
          for (var S = 0; S < n.length; S++)
            if (m.context === n[S]) {
              r.lanes |= u, m = r.alternate, m !== null && (m.lanes |= u), vr(
                r.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          r = m.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(b(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), vr(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function Ic(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(b(387));
        if (y = y.memoizedProps, y !== null) {
          var m = s.type;
          il(s.pendingProps.value, y.value) || (l !== null ? l.push(m) : l = [m]);
        }
      } else if (s === Uu.current) {
        if (y = s.alternate, y === null) throw Error(b(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Pl) : l = [Pl]);
      }
      s = s.return;
    }
    l !== null && ly(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function zf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!il(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ku(l) {
    iu = l, Ka = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function kt(l) {
    return ay(iu, l);
  }
  function Df(l, n) {
    return iu === null && Ku(l), ay(l, n);
  }
  function ay(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Ka === null) {
      if (l === null) throw Error(b(308));
      Ka = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Ka = Ka.next = n;
    return u;
  }
  var Pc = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, gr = T.unstable_scheduleCallback, kp = T.unstable_NormalPriority, Vt = {
    $$typeof: xt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function eo() {
    return {
      controller: new Pc(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pn(l) {
    l.refCount--, l.refCount === 0 && gr(kp, function() {
      l.controller.abort();
    });
  }
  var ku = null, Of = 0, Oa = 0, jt = null;
  function br(l, n) {
    if (ku === null) {
      var u = ku = [];
      Of = 0, Oa = yc(), jt = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Of++, n.then(Sr, Sr), n;
  }
  function Sr() {
    if (--Of === 0 && ku !== null) {
      jt !== null && (jt.status = "fulfilled");
      var l = ku;
      ku = null, Oa = 0, jt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Wp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Tr = O.S;
  O.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && br(l, n), Tr !== null && Tr(l, n);
  };
  var vn = ie(null);
  function Mf() {
    var l = vn.current;
    return l !== null ? l : it.pooledCache;
  }
  function Ji(l, n) {
    n === null ? me(vn, vn.current) : me(vn, n.pool);
  }
  function Ar() {
    var l = Mf();
    return l === null ? null : { parent: Vt._currentValue, pool: l };
  }
  var Wu = Error(b(460)), Er = Error(b(474)), Uf = Error(b(542)), Rr = { then: function() {
  } };
  function zr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function xf() {
  }
  function ny(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(xf, xf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, iy(l), l;
      default:
        if (typeof n.status == "string") n.then(xf, xf);
        else {
          if (l = it, l !== null && 100 < l.shellSuspendCounter)
            throw Error(b(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, iy(l), l;
        }
        throw Ki = n, Wu;
    }
  }
  var Ki = null;
  function uy() {
    if (Ki === null) throw Error(b(459));
    var l = Ki;
    return Ki = null, l;
  }
  function iy(l) {
    if (l === Wu || l === Uf)
      throw Error(b(483));
  }
  var gn = !1;
  function Dr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Or(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ll(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (Ie & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Sf(l), Zc(l, null, u), n;
    }
    return Zu(l, c, n, u), Sf(l);
  }
  function ki(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, tf(l, u);
    }
  }
  function cy(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var oy = !1;
  function to() {
    if (oy) {
      var l = jt;
      if (l !== null) throw l;
    }
  }
  function ou(l, n, u, c) {
    oy = !1;
    var s = l.updateQueue;
    gn = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var S = m, x = S.next;
      S.next = null, y === null ? r = x : y.next = x, y = S;
      var Q = l.alternate;
      Q !== null && (Q = Q.updateQueue, m = Q.lastBaseUpdate, m !== y && (m === null ? Q.firstBaseUpdate = x : m.next = x, Q.lastBaseUpdate = S));
    }
    if (r !== null) {
      var Z = s.baseState;
      y = 0, Q = x = S = null, m = r;
      do {
        var H = m.lane & -536870913, N = H !== m.lane;
        if (N ? (Ye & H) === H : (c & H) === H) {
          H !== 0 && H === Oa && (oy = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var se = l, re = m;
            H = n;
            var Ke = u;
            switch (re.tag) {
              case 1:
                if (se = re.payload, typeof se == "function") {
                  Z = se.call(Ke, Z, H);
                  break e;
                }
                Z = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = re.payload, H = typeof se == "function" ? se.call(Ke, Z, H) : se, H == null) break e;
                Z = te({}, Z, H);
                break e;
              case 2:
                gn = !0;
            }
          }
          H = m.callback, H !== null && (l.flags |= 64, N && (l.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [H] : N.push(H));
        } else
          N = {
            lane: H,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, Q === null ? (x = Q = N, S = Z) : Q = Q.next = N, y |= H;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null)
            break;
          N = m, m = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      Q === null && (S = Z), s.baseState = S, s.firstBaseUpdate = x, s.lastBaseUpdate = Q, r === null && (s.shared.lanes = 0), mu |= y, l.lanes = y, l.memoizedState = Z;
    }
  }
  function Mr(l, n) {
    if (typeof l != "function")
      throw Error(b(191, l));
    l.call(n);
  }
  function Cf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Mr(u[l], n);
  }
  var Wi = ie(null), Hf = ie(0);
  function Wt(l, n) {
    l = yu, me(Hf, l), me(Wi, n), yu = l | n.baseLanes;
  }
  function lo() {
    me(Hf, yu), me(Wi, Wi.current);
  }
  function ao() {
    yu = Hf.current, I(Wi), I(Hf);
  }
  var Ma = 0, Re = null, Fe = null, gt = null, _f = !1, ia = !1, Fu = !1, ka = 0, ca = 0, fu = null, fy = 0;
  function bt() {
    throw Error(b(321));
  }
  function Ur(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!il(l[u], n[u])) return !1;
    return !0;
  }
  function xr(l, n, u, c, s, r) {
    return Ma = r, Re = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Ry : zy, Fu = !1, r = u(c, s), Fu = !1, ia && (r = sy(
      n,
      u,
      c,
      s
    )), Iu(l), r;
  }
  function Iu(l) {
    O.H = Jr;
    var n = Fe !== null && Fe.next !== null;
    if (Ma = 0, gt = Fe = Re = null, _f = !1, ca = 0, fu = null, n) throw Error(b(300));
    l === null || wt || (l = l.dependencies, l !== null && zf(l) && (wt = !0));
  }
  function sy(l, n, u, c) {
    Re = l;
    var s = 0;
    do {
      if (ia && (fu = null), ca = 0, ia = !1, 25 <= s) throw Error(b(301));
      if (s += 1, gt = Fe = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      O.H = su, r = n(u, c);
    } while (ia);
    return r;
  }
  function Fp() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Bf(n) : n, l = l.useState()[0], (Fe !== null ? Fe.memoizedState : null) !== l && (Re.flags |= 1024), n;
  }
  function Cr() {
    var l = ka !== 0;
    return ka = 0, l;
  }
  function no(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Hr(l) {
    if (_f) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      _f = !1;
    }
    Ma = 0, gt = Fe = Re = null, ia = !1, ca = ka = 0, fu = null;
  }
  function bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return gt === null ? Re.memoizedState = gt = l : gt = gt.next = l, gt;
  }
  function Et() {
    if (Fe === null) {
      var l = Re.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Fe.next;
    var n = gt === null ? Re.memoizedState : gt.next;
    if (n !== null)
      gt = n, Fe = l;
    else {
      if (l === null)
        throw Re.alternate === null ? Error(b(467)) : Error(b(310));
      Fe = l, l = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null
      }, gt === null ? Re.memoizedState = gt = l : gt = gt.next = l;
    }
    return gt;
  }
  function Nf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Bf(l) {
    var n = ca;
    return ca += 1, fu === null && (fu = []), l = ny(fu, l, n), n = Re, (gt === null ? n.memoizedState : gt.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Ry : zy), l;
  }
  function _t(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Bf(l);
      if (l.$$typeof === xt) return kt(l);
    }
    throw Error(b(438, String(l)));
  }
  function _r(l) {
    var n = null, u = Re.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Re.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Nf(), Re.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = St;
    return n.index++, u;
  }
  function Sn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function qf(l) {
    var n = Et();
    return Nr(n, Fe, l);
  }
  function Nr(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(b(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var m = y = null, S = null, x = n, Q = !1;
      do {
        var Z = x.lane & -536870913;
        if (Z !== x.lane ? (Ye & Z) === Z : (Ma & Z) === Z) {
          var H = x.revertLane;
          if (H === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), Z === Oa && (Q = !0);
          else if ((Ma & H) === H) {
            x = x.next, H === Oa && (Q = !0);
            continue;
          } else
            Z = {
              lane: 0,
              revertLane: x.revertLane,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, S === null ? (m = S = Z, y = r) : S = S.next = Z, Re.lanes |= H, mu |= H;
          Z = x.action, Fu && u(r, Z), r = x.hasEagerState ? x.eagerState : u(r, Z);
        } else
          H = {
            lane: Z,
            revertLane: x.revertLane,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, S === null ? (m = S = H, y = r) : S = S.next = H, Re.lanes |= Z, mu |= Z;
        x = x.next;
      } while (x !== null && x !== n);
      if (S === null ? y = r : S.next = m, !il(r, l.memoizedState) && (wt = !0, Q && (u = jt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = S, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Br(l) {
    var n = Et(), u = n.queue;
    if (u === null) throw Error(b(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      il(r, n.memoizedState) || (wt = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function Yf(l, n, u) {
    var c = Re, s = Et(), r = Le;
    if (r) {
      if (u === void 0) throw Error(b(407));
      u = u();
    } else u = n();
    var y = !il(
      (Fe || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, wt = !0), s = s.queue;
    var m = dy.bind(null, c, s, l);
    if (lt(2048, 8, m, [l]), s.getSnapshot !== n || y || gt !== null && gt.memoizedState.tag & 1) {
      if (c.flags |= 2048, Zl(
        9,
        jf(),
        ry.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), it === null) throw Error(b(349));
      r || (Ma & 124) !== 0 || qr(c, n, u);
    }
    return u;
  }
  function qr(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Re.updateQueue, n === null ? (n = Nf(), Re.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ry(l, n, u, c) {
    n.value = u, n.getSnapshot = c, hy(n) && Yr(l);
  }
  function dy(l, n, u) {
    return u(function() {
      hy(n) && Yr(l);
    });
  }
  function hy(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !il(l, u);
    } catch {
      return !0;
    }
  }
  function Yr(l) {
    var n = hn(l, 2);
    n !== null && sa(n, l, 2);
  }
  function Gf(l) {
    var n = bl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Fu) {
        kn(!0);
        try {
          u();
        } finally {
          kn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sn,
      lastRenderedState: l
    }, n;
  }
  function Gr(l, n, u, c) {
    return l.baseState = u, Nr(
      l,
      Fe,
      typeof c == "function" ? c : Sn
    );
  }
  function Ip(l, n, u, c, s) {
    if (ec(l)) throw Error(b(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      O.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Vr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Vr(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = O.T, y = {};
      O.T = y;
      try {
        var m = u(s, c), S = O.S;
        S !== null && S(y, m), Vf(l, n, m);
      } catch (x) {
        wr(l, n, x);
      } finally {
        O.T = r;
      }
    } else
      try {
        r = u(s, c), Vf(l, n, r);
      } catch (x) {
        wr(l, n, x);
      }
  }
  function Vf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        jr(l, n, c);
      },
      function(c) {
        return wr(l, n, c);
      }
    ) : jr(l, n, u);
  }
  function jr(l, n, u) {
    n.status = "fulfilled", n.value = u, yy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Vr(l, u)));
  }
  function wr(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, yy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function yy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Xr(l, n) {
    return n;
  }
  function my(l, n) {
    if (Le) {
      var u = it.formState;
      if (u !== null) {
        e: {
          var c = Re;
          if (Le) {
            if ($e) {
              t: {
                for (var s = $e, r = Da; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Pa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                $e = Pa(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            uu(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = bl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: n
    }, u.queue = c, u = Ay.bind(
      null,
      Re,
      c
    ), c.dispatch = u, c = Gf(!1), r = Qf.bind(
      null,
      Re,
      !1,
      c.queue
    ), c = bl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Ip.bind(
      null,
      Re,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Tn(l) {
    var n = Et();
    return Qr(n, Fe, l);
  }
  function Qr(l, n, u) {
    if (n = Nr(
      l,
      n,
      Xr
    )[0], l = qf(Sn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Bf(n);
      } catch (y) {
        throw y === Wu ? Uf : y;
      }
    else c = n;
    n = Et();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Re.flags |= 2048, Zl(
      9,
      jf(),
      Vv.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function Vv(l, n) {
    l.action = n;
  }
  function Lr(l) {
    var n = Et(), u = Fe;
    if (u !== null)
      return Qr(n, u, l);
    Et(), n = n.memoizedState, u = Et();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Zl(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Re.updateQueue, n === null && (n = Nf(), Re.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function jf() {
    return { destroy: void 0, resource: void 0 };
  }
  function wf() {
    return Et().memoizedState;
  }
  function Pu(l, n, u, c) {
    var s = bl();
    c = c === void 0 ? null : c, Re.flags |= l, s.memoizedState = Zl(
      1 | n,
      jf(),
      u,
      c
    );
  }
  function lt(l, n, u, c) {
    var s = Et();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Fe !== null && c !== null && Ur(c, Fe.memoizedState.deps) ? s.memoizedState = Zl(n, r, u, c) : (Re.flags |= l, s.memoizedState = Zl(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Pp(l, n) {
    Pu(8390656, 8, l, n);
  }
  function e0(l, n) {
    lt(2048, 8, l, n);
  }
  function py(l, n) {
    return lt(4, 2, l, n);
  }
  function Wa(l, n) {
    return lt(4, 4, l, n);
  }
  function vy(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Zr(l, n, u) {
    u = u != null ? u.concat([l]) : null, lt(4, 4, vy.bind(null, n, l), u);
  }
  function Fi() {
  }
  function Ii(l, n) {
    var u = Et();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Ur(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function gy(l, n) {
    var u = Et();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Ur(n, c[1]))
      return c[0];
    if (c = l(), Fu) {
      kn(!0);
      try {
        l();
      } finally {
        kn(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Xf(l, n, u) {
    return u === void 0 || (Ma & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = em(), Re.lanes |= l, mu |= l, u);
  }
  function by(l, n, u, c) {
    return il(u, n) ? u : Wi.current !== null ? (l = Xf(l, u, c), il(l, n) || (wt = !0), l) : (Ma & 42) === 0 ? (wt = !0, l.memoizedState = u) : (l = em(), Re.lanes |= l, mu |= l, n);
  }
  function t0(l, n, u, c, s) {
    var r = $.p;
    $.p = r !== 0 && 8 > r ? r : 8;
    var y = O.T, m = {};
    O.T = m, Qf(l, !1, n, u);
    try {
      var S = s(), x = O.S;
      if (x !== null && x(m, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var Q = Wp(
          S,
          c
        );
        Pi(
          l,
          n,
          Q,
          fa(l)
        );
      } else
        Pi(
          l,
          n,
          c,
          fa(l)
        );
    } catch (Z) {
      Pi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: Z },
        fa()
      );
    } finally {
      $.p = r, O.T = y;
    }
  }
  function jv() {
  }
  function $r(l, n, u, c) {
    if (l.tag !== 5) throw Error(b(476));
    var s = l0(l).queue;
    t0(
      l,
      s,
      n,
      k,
      u === null ? jv : function() {
        return uo(l), u(c);
      }
    );
  }
  function l0(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: k,
      baseState: k,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: k
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function uo(l) {
    var n = l0(l).next.queue;
    Pi(l, n, {}, fa());
  }
  function Ua() {
    return kt(Pl);
  }
  function Sy() {
    return Et().memoizedState;
  }
  function a0() {
    return Et().memoizedState;
  }
  function n0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = fa();
          l = Ll(u);
          var c = bn(n, l, u);
          c !== null && (sa(c, n, u), ki(c, n, u)), n = { cache: eo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Ty(l, n, u) {
    var c = fa();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ec(l) ? u0(n, u) : (u = Lc(l, n, u, c), u !== null && (sa(u, l, c), Ey(u, n, c)));
  }
  function Ay(l, n, u) {
    var c = fa();
    Pi(l, n, u, c);
  }
  function Pi(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ec(l)) u0(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, m = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = m, il(m, y))
            return Zu(l, n, s, 0), it === null && Za(), !1;
        } catch {
        } finally {
        }
      if (u = Lc(l, n, s, c), u !== null)
        return sa(u, l, c), Ey(u, n, c), !0;
    }
    return !1;
  }
  function Qf(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: yc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ec(l)) {
      if (n) throw Error(b(479));
    } else
      n = Lc(
        l,
        u,
        c,
        2
      ), n !== null && sa(n, l, 2);
  }
  function ec(l) {
    var n = l.alternate;
    return l === Re || n !== null && n === Re;
  }
  function u0(l, n) {
    ia = _f = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ey(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, tf(l, u);
    }
  }
  var Jr = {
    readContext: kt,
    use: _t,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useLayoutEffect: bt,
    useInsertionEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useSyncExternalStore: bt,
    useId: bt,
    useHostTransitionStatus: bt,
    useFormState: bt,
    useActionState: bt,
    useOptimistic: bt,
    useMemoCache: bt,
    useCacheRefresh: bt
  }, Ry = {
    readContext: kt,
    use: _t,
    useCallback: function(l, n) {
      return bl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: kt,
    useEffect: Pp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Pu(
        4194308,
        4,
        vy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Pu(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Pu(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = bl();
      n = n === void 0 ? null : n;
      var c = l();
      if (Fu) {
        kn(!0);
        try {
          l();
        } finally {
          kn(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = bl();
      if (u !== void 0) {
        var s = u(n);
        if (Fu) {
          kn(!0);
          try {
            u(n);
          } finally {
            kn(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Ty.bind(
        null,
        Re,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = bl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Gf(l);
      var n = l.queue, u = Ay.bind(null, Re, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, n) {
      var u = bl();
      return Xf(u, l, n);
    },
    useTransition: function() {
      var l = Gf(!1);
      return l = t0.bind(
        null,
        Re,
        l.queue,
        !0,
        !1
      ), bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Re, s = bl();
      if (Le) {
        if (u === void 0)
          throw Error(b(407));
        u = u();
      } else {
        if (u = n(), it === null)
          throw Error(b(349));
        (Ye & 124) !== 0 || qr(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Pp(dy.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, Zl(
        9,
        jf(),
        ry.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = bl(), n = it.identifierPrefix;
      if (Le) {
        var u = At, c = Ja;
        u = (c & ~(1 << 32 - Vl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = ka++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = fy++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ua,
    useFormState: my,
    useActionState: my,
    useOptimistic: function(l) {
      var n = bl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Qf.bind(
        null,
        Re,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: _r,
    useCacheRefresh: function() {
      return bl().memoizedState = n0.bind(
        null,
        Re
      );
    }
  }, zy = {
    readContext: kt,
    use: _t,
    useCallback: Ii,
    useContext: kt,
    useEffect: e0,
    useImperativeHandle: Zr,
    useInsertionEffect: py,
    useLayoutEffect: Wa,
    useMemo: gy,
    useReducer: qf,
    useRef: wf,
    useState: function() {
      return qf(Sn);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, n) {
      var u = Et();
      return by(
        u,
        Fe.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = qf(Sn)[0], n = Et().memoizedState;
      return [
        typeof l == "boolean" ? l : Bf(l),
        n
      ];
    },
    useSyncExternalStore: Yf,
    useId: Sy,
    useHostTransitionStatus: Ua,
    useFormState: Tn,
    useActionState: Tn,
    useOptimistic: function(l, n) {
      var u = Et();
      return Gr(u, Fe, l, n);
    },
    useMemoCache: _r,
    useCacheRefresh: a0
  }, su = {
    readContext: kt,
    use: _t,
    useCallback: Ii,
    useContext: kt,
    useEffect: e0,
    useImperativeHandle: Zr,
    useInsertionEffect: py,
    useLayoutEffect: Wa,
    useMemo: gy,
    useReducer: Br,
    useRef: wf,
    useState: function() {
      return Br(Sn);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, n) {
      var u = Et();
      return Fe === null ? Xf(u, l, n) : by(
        u,
        Fe.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Br(Sn)[0], n = Et().memoizedState;
      return [
        typeof l == "boolean" ? l : Bf(l),
        n
      ];
    },
    useSyncExternalStore: Yf,
    useId: Sy,
    useHostTransitionStatus: Ua,
    useFormState: Lr,
    useActionState: Lr,
    useOptimistic: function(l, n) {
      var u = Et();
      return Fe !== null ? Gr(u, Fe, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: _r,
    useCacheRefresh: a0
  }, tc = null, io = 0;
  function Kr(l) {
    var n = io;
    return io += 1, tc === null && (tc = []), ny(tc, l, n);
  }
  function lc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Sl(l, n) {
    throw n.$$typeof === le ? Error(b(525)) : (l = Object.prototype.toString.call(n), Error(
      b(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Dy(l) {
    var n = l._init;
    return n(l._payload);
  }
  function $l(l) {
    function n(M, D) {
      if (l) {
        var U = M.deletions;
        U === null ? (M.deletions = [D], M.flags |= 16) : U.push(D);
      }
    }
    function u(M, D) {
      if (!l) return null;
      for (; D !== null; )
        n(M, D), D = D.sibling;
      return null;
    }
    function c(M) {
      for (var D = /* @__PURE__ */ new Map(); M !== null; )
        M.key !== null ? D.set(M.key, M) : D.set(M.index, M), M = M.sibling;
      return D;
    }
    function s(M, D) {
      return M = $a(M, D), M.index = 0, M.sibling = null, M;
    }
    function r(M, D, U) {
      return M.index = U, l ? (U = M.alternate, U !== null ? (U = U.index, U < D ? (M.flags |= 67108866, D) : U) : (M.flags |= 67108866, D)) : (M.flags |= 1048576, D);
    }
    function y(M) {
      return l && M.alternate === null && (M.flags |= 67108866), M;
    }
    function m(M, D, U, L) {
      return D === null || D.tag !== 6 ? (D = Jc(U, M.mode, L), D.return = M, D) : (D = s(D, U), D.return = M, D);
    }
    function S(M, D, U, L) {
      var ee = U.type;
      return ee === Me ? Q(
        M,
        D,
        U.props.children,
        L,
        U.key
      ) : D !== null && (D.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Zt && Dy(ee) === D.type) ? (D = s(D, U.props), lc(D, U), D.return = M, D) : (D = K(
        U.type,
        U.key,
        U.props,
        null,
        M.mode,
        L
      ), lc(D, U), D.return = M, D);
    }
    function x(M, D, U, L) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== U.containerInfo || D.stateNode.implementation !== U.implementation ? (D = vt(U, M.mode, L), D.return = M, D) : (D = s(D, U.children || []), D.return = M, D);
    }
    function Q(M, D, U, L, ee) {
      return D === null || D.tag !== 7 ? (D = Ea(
        U,
        M.mode,
        L,
        ee
      ), D.return = M, D) : (D = s(D, U), D.return = M, D);
    }
    function Z(M, D, U) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = Jc(
          "" + D,
          M.mode,
          U
        ), D.return = M, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case he:
            return U = K(
              D.type,
              D.key,
              D.props,
              null,
              M.mode,
              U
            ), lc(U, D), U.return = M, U;
          case Se:
            return D = vt(
              D,
              M.mode,
              U
            ), D.return = M, D;
          case Zt:
            var L = D._init;
            return D = L(D._payload), Z(M, D, U);
        }
        if (qt(D) || Ee(D))
          return D = Ea(
            D,
            M.mode,
            U,
            null
          ), D.return = M, D;
        if (typeof D.then == "function")
          return Z(M, Kr(D), U);
        if (D.$$typeof === xt)
          return Z(
            M,
            Df(M, D),
            U
          );
        Sl(M, D);
      }
      return null;
    }
    function H(M, D, U, L) {
      var ee = D !== null ? D.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return ee !== null ? null : m(M, D, "" + U, L);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case he:
            return U.key === ee ? S(M, D, U, L) : null;
          case Se:
            return U.key === ee ? x(M, D, U, L) : null;
          case Zt:
            return ee = U._init, U = ee(U._payload), H(M, D, U, L);
        }
        if (qt(U) || Ee(U))
          return ee !== null ? null : Q(M, D, U, L, null);
        if (typeof U.then == "function")
          return H(
            M,
            D,
            Kr(U),
            L
          );
        if (U.$$typeof === xt)
          return H(
            M,
            D,
            Df(M, U),
            L
          );
        Sl(M, U);
      }
      return null;
    }
    function N(M, D, U, L, ee) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return M = M.get(U) || null, m(D, M, "" + L, ee);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case he:
            return M = M.get(
              L.key === null ? U : L.key
            ) || null, S(D, M, L, ee);
          case Se:
            return M = M.get(
              L.key === null ? U : L.key
            ) || null, x(D, M, L, ee);
          case Zt:
            var He = L._init;
            return L = He(L._payload), N(
              M,
              D,
              U,
              L,
              ee
            );
        }
        if (qt(L) || Ee(L))
          return M = M.get(U) || null, Q(D, M, L, ee, null);
        if (typeof L.then == "function")
          return N(
            M,
            D,
            U,
            Kr(L),
            ee
          );
        if (L.$$typeof === xt)
          return N(
            M,
            D,
            U,
            Df(D, L),
            ee
          );
        Sl(D, L);
      }
      return null;
    }
    function se(M, D, U, L) {
      for (var ee = null, He = null, oe = D, ve = D = 0, Pt = null; oe !== null && ve < U.length; ve++) {
        oe.index > ve ? (Pt = oe, oe = null) : Pt = oe.sibling;
        var Qe = H(
          M,
          oe,
          U[ve],
          L
        );
        if (Qe === null) {
          oe === null && (oe = Pt);
          break;
        }
        l && oe && Qe.alternate === null && n(M, oe), D = r(Qe, D, ve), He === null ? ee = Qe : He.sibling = Qe, He = Qe, oe = Pt;
      }
      if (ve === U.length)
        return u(M, oe), Le && we(M, ve), ee;
      if (oe === null) {
        for (; ve < U.length; ve++)
          oe = Z(M, U[ve], L), oe !== null && (D = r(
            oe,
            D,
            ve
          ), He === null ? ee = oe : He.sibling = oe, He = oe);
        return Le && we(M, ve), ee;
      }
      for (oe = c(oe); ve < U.length; ve++)
        Pt = N(
          oe,
          M,
          ve,
          U[ve],
          L
        ), Pt !== null && (l && Pt.alternate !== null && oe.delete(
          Pt.key === null ? ve : Pt.key
        ), D = r(
          Pt,
          D,
          ve
        ), He === null ? ee = Pt : He.sibling = Pt, He = Pt);
      return l && oe.forEach(function(vi) {
        return n(M, vi);
      }), Le && we(M, ve), ee;
    }
    function re(M, D, U, L) {
      if (U == null) throw Error(b(151));
      for (var ee = null, He = null, oe = D, ve = D = 0, Pt = null, Qe = U.next(); oe !== null && !Qe.done; ve++, Qe = U.next()) {
        oe.index > ve ? (Pt = oe, oe = null) : Pt = oe.sibling;
        var vi = H(M, oe, Qe.value, L);
        if (vi === null) {
          oe === null && (oe = Pt);
          break;
        }
        l && oe && vi.alternate === null && n(M, oe), D = r(vi, D, ve), He === null ? ee = vi : He.sibling = vi, He = vi, oe = Pt;
      }
      if (Qe.done)
        return u(M, oe), Le && we(M, ve), ee;
      if (oe === null) {
        for (; !Qe.done; ve++, Qe = U.next())
          Qe = Z(M, Qe.value, L), Qe !== null && (D = r(Qe, D, ve), He === null ? ee = Qe : He.sibling = Qe, He = Qe);
        return Le && we(M, ve), ee;
      }
      for (oe = c(oe); !Qe.done; ve++, Qe = U.next())
        Qe = N(oe, M, ve, Qe.value, L), Qe !== null && (l && Qe.alternate !== null && oe.delete(Qe.key === null ? ve : Qe.key), D = r(Qe, D, ve), He === null ? ee = Qe : He.sibling = Qe, He = Qe);
      return l && oe.forEach(function(Iv) {
        return n(M, Iv);
      }), Le && we(M, ve), ee;
    }
    function Ke(M, D, U, L) {
      if (typeof U == "object" && U !== null && U.type === Me && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case he:
            e: {
              for (var ee = U.key; D !== null; ) {
                if (D.key === ee) {
                  if (ee = U.type, ee === Me) {
                    if (D.tag === 7) {
                      u(
                        M,
                        D.sibling
                      ), L = s(
                        D,
                        U.props.children
                      ), L.return = M, M = L;
                      break e;
                    }
                  } else if (D.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Zt && Dy(ee) === D.type) {
                    u(
                      M,
                      D.sibling
                    ), L = s(D, U.props), lc(L, U), L.return = M, M = L;
                    break e;
                  }
                  u(M, D);
                  break;
                } else n(M, D);
                D = D.sibling;
              }
              U.type === Me ? (L = Ea(
                U.props.children,
                M.mode,
                L,
                U.key
              ), L.return = M, M = L) : (L = K(
                U.type,
                U.key,
                U.props,
                null,
                M.mode,
                L
              ), lc(L, U), L.return = M, M = L);
            }
            return y(M);
          case Se:
            e: {
              for (ee = U.key; D !== null; ) {
                if (D.key === ee)
                  if (D.tag === 4 && D.stateNode.containerInfo === U.containerInfo && D.stateNode.implementation === U.implementation) {
                    u(
                      M,
                      D.sibling
                    ), L = s(D, U.children || []), L.return = M, M = L;
                    break e;
                  } else {
                    u(M, D);
                    break;
                  }
                else n(M, D);
                D = D.sibling;
              }
              L = vt(U, M.mode, L), L.return = M, M = L;
            }
            return y(M);
          case Zt:
            return ee = U._init, U = ee(U._payload), Ke(
              M,
              D,
              U,
              L
            );
        }
        if (qt(U))
          return se(
            M,
            D,
            U,
            L
          );
        if (Ee(U)) {
          if (ee = Ee(U), typeof ee != "function") throw Error(b(150));
          return U = ee.call(U), re(
            M,
            D,
            U,
            L
          );
        }
        if (typeof U.then == "function")
          return Ke(
            M,
            D,
            Kr(U),
            L
          );
        if (U.$$typeof === xt)
          return Ke(
            M,
            D,
            Df(M, U),
            L
          );
        Sl(M, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, D !== null && D.tag === 6 ? (u(M, D.sibling), L = s(D, U), L.return = M, M = L) : (u(M, D), L = Jc(U, M.mode, L), L.return = M, M = L), y(M)) : u(M, D);
    }
    return function(M, D, U, L) {
      try {
        io = 0;
        var ee = Ke(
          M,
          D,
          U,
          L
        );
        return tc = null, ee;
      } catch (oe) {
        if (oe === Wu || oe === Uf) throw oe;
        var He = Xl(29, oe, null, M.mode);
        return He.lanes = L, He.return = M, He;
      } finally {
      }
    };
  }
  var ac = $l(!0), An = $l(!1), oa = ie(null), Tl = null;
  function ru(l) {
    var n = l.alternate;
    me(at, at.current & 1), me(oa, l), Tl === null && (n === null || Wi.current !== null || n.memoizedState !== null) && (Tl = l);
  }
  function En(l) {
    if (l.tag === 22) {
      if (me(at, at.current), me(oa, l), Tl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Tl = l);
      }
    } else Rn();
  }
  function Rn() {
    me(at, at.current), me(oa, oa.current);
  }
  function Fa(l) {
    I(oa), Tl === l && (Tl = null), I(at);
  }
  var at = ie(0);
  function Lf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || hs(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ei(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : te({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var kr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = fa(), s = Ll(c);
      s.payload = n, u != null && (s.callback = u), n = bn(l, s, c), n !== null && (sa(n, l, c), ki(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = fa(), s = Ll(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = bn(l, s, c), n !== null && (sa(n, l, c), ki(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = fa(), c = Ll(u);
      c.tag = 2, n != null && (c.callback = n), n = bn(l, c, u), n !== null && (sa(n, l, u), ki(n, l, u));
    }
  };
  function co(l, n, u, c, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, y) : n.prototype && n.prototype.isPureReactComponent ? !wu(u, c) || !wu(s, r) : !0;
  }
  function nc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && kr.enqueueReplaceState(n, n.state, null);
  }
  function ti(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = te({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Zf = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function oo(l) {
    Zf(l);
  }
  function Oy(l) {
    console.error(l);
  }
  function $f(l) {
    Zf(l);
  }
  function Jf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function My(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Uy(l, n, u) {
    return u = Ll(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Jf(l, n);
    }, u;
  }
  function xy(l) {
    return l = Ll(l), l.tag = 3, l;
  }
  function Jl(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        My(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      My(n, u, c), typeof s != "function" && (ui === null ? ui = /* @__PURE__ */ new Set([this]) : ui.add(this));
      var m = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function i0(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Ic(
        n,
        u,
        s,
        !0
      ), u = oa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Tl === null ? hc() : u.alternate === null && Ot === 0 && (Ot = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Rr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Td(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Rr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Td(l, c, s)), !1;
        }
        throw Error(b(435, u.tag));
      }
      return Td(l, c, s), hc(), !1;
    }
    if (Le)
      return n = oa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== $i && (l = Error(b(422), { cause: c }), Fc(ua(l, u)))) : (c !== $i && (n = Error(b(423), {
        cause: c
      }), Fc(
        ua(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = ua(c, u), s = Uy(
        l.stateNode,
        c,
        s
      ), cy(l, s), Ot !== 4 && (Ot = 2)), !1;
    var r = Error(b(520), { cause: c });
    if (r = ua(r, u), po === null ? po = [r] : po.push(r), Ot !== 4 && (Ot = 2), n === null) return !0;
    c = ua(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Uy(u.stateNode, c, l), cy(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ui === null || !ui.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = xy(s), Jl(
              s,
              l,
              u,
              c
            ), cy(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Rt = Error(b(461)), wt = !1;
  function Ft(l, n, u, c) {
    n.child = l === null ? An(n, null, u, c) : ac(
      n,
      l.child,
      u,
      c
    );
  }
  function c0(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var m in c)
        m !== "ref" && (y[m] = c[m]);
    } else y = c;
    return Ku(n), c = xr(
      l,
      n,
      u,
      y,
      r,
      s
    ), m = Cr(), l !== null && !wt ? (no(l, n, s), zn(l, n, s)) : (Le && m && Zi(n), n.flags |= 1, Ft(l, n, c, s), n.child);
  }
  function du(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Tf(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, uc(
        l,
        n,
        r,
        c,
        s
      )) : (l = K(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !ud(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : wu, u(y, c) && l.ref === n.ref)
        return zn(l, n, s);
    }
    return n.flags |= 1, l = $a(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function uc(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (wu(r, c) && l.ref === n.ref)
        if (wt = !1, n.pendingProps = c = r, ud(l, s))
          (l.flags & 131072) !== 0 && (wt = !0);
        else
          return n.lanes = l.lanes, zn(l, n, s);
    }
    return Fr(
      l,
      n,
      u,
      c,
      s
    );
  }
  function Wr(l, n, u) {
    var c = n.pendingProps, s = c.children, r = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~c;
        } else n.childLanes = 0, n.child = null;
        return ic(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ji(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Wt(n, r) : lo(), En(n);
      else
        return n.lanes = n.childLanes = 536870912, ic(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (Ji(n, r.cachePool), Wt(n, r), Rn(), n.memoizedState = null) : (l !== null && Ji(n, null), lo(), Rn());
    return Ft(l, n, s, u), n.child;
  }
  function ic(l, n, u, c) {
    var s = Mf();
    return s = s === null ? null : { parent: Vt._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Ji(n, null), lo(), En(n), l !== null && Ic(l, n, c, !0), null;
  }
  function Kf(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(b(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Fr(l, n, u, c, s) {
    return Ku(n), u = xr(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = Cr(), l !== null && !wt ? (no(l, n, s), zn(l, n, s)) : (Le && c && Zi(n), n.flags |= 1, Ft(l, n, u, s), n.child);
  }
  function Cy(l, n, u, c, s, r) {
    return Ku(n), n.updateQueue = null, u = sy(
      n,
      c,
      u,
      s
    ), Iu(l), c = Cr(), l !== null && !wt ? (no(l, n, r), zn(l, n, r)) : (Le && c && Zi(n), n.flags |= 1, Ft(l, n, u, r), n.child);
  }
  function Ir(l, n, u, c, s) {
    if (Ku(n), n.stateNode === null) {
      var r = $c, y = u.contextType;
      typeof y == "object" && y !== null && (r = kt(y)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = kr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Dr(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? kt(y) : $c, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (ei(
        n,
        u,
        y,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && kr.enqueueReplaceState(r, r.state, null), ou(n, c, r, s), to(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var m = n.memoizedProps, S = ti(u, m);
      r.props = S;
      var x = r.context, Q = u.contextType;
      y = $c, typeof Q == "object" && Q !== null && (y = kt(Q));
      var Z = u.getDerivedStateFromProps;
      Q = typeof Z == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = n.pendingProps !== m, Q || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || x !== y) && nc(
        n,
        r,
        c,
        y
      ), gn = !1;
      var H = n.memoizedState;
      r.state = H, ou(n, c, r, s), to(), x = n.memoizedState, m || H !== x || gn ? (typeof Z == "function" && (ei(
        n,
        u,
        Z,
        c
      ), x = n.memoizedState), (S = gn || co(
        n,
        u,
        S,
        c,
        H,
        x,
        y
      )) ? (Q || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = x), r.props = c, r.state = x, r.context = y, c = S) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Or(l, n), y = n.memoizedProps, Q = ti(u, y), r.props = Q, Z = n.pendingProps, H = r.context, x = u.contextType, S = $c, typeof x == "object" && x !== null && (S = kt(x)), m = u.getDerivedStateFromProps, (x = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== Z || H !== S) && nc(
        n,
        r,
        c,
        S
      ), gn = !1, H = n.memoizedState, r.state = H, ou(n, c, r, s), to();
      var N = n.memoizedState;
      y !== Z || H !== N || gn || l !== null && l.dependencies !== null && zf(l.dependencies) ? (typeof m == "function" && (ei(
        n,
        u,
        m,
        c
      ), N = n.memoizedState), (Q = gn || co(
        n,
        u,
        Q,
        c,
        H,
        N,
        S
      ) || l !== null && l.dependencies !== null && zf(l.dependencies)) ? (x || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, N, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        N,
        S
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = N), r.props = c, r.state = N, r.context = S, c = Q) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && H === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && H === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, Kf(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = ac(
      n,
      l.child,
      null,
      s
    ), n.child = ac(
      n,
      null,
      u,
      s
    )) : Ft(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = zn(
      l,
      n,
      s
    ), l;
  }
  function Pr(l, n, u, c) {
    return Wc(), n.flags |= 256, Ft(l, n, u, c), n.child;
  }
  var ed = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hy(l) {
    return { baseLanes: l, cachePool: Ar() };
  }
  function _y(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ha), l;
  }
  function Ny(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (at.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (Le) {
        if (s ? ru(n) : Rn(), Le) {
          var m = $e, S;
          if (S = m) {
            e: {
              for (S = m, m = Da; S.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (S = Pa(
                  S.nextSibling
                ), S === null) {
                  m = null;
                  break e;
                }
              }
              m = S;
            }
            m !== null ? (n.memoizedState = {
              dehydrated: m,
              treeContext: nu !== null ? { id: Ja, overflow: At } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = Xl(
              18,
              null,
              null,
              0
            ), S.stateNode = m, S.return = n, n.child = S, Ht = n, $e = null, S = !0) : S = !1;
          }
          S || uu(n);
        }
        if (m = n.memoizedState, m !== null && (m = m.dehydrated, m !== null))
          return hs(m) ? n.lanes = 32 : n.lanes = 536870912, null;
        Fa(n);
      }
      return m = c.children, c = c.fallback, s ? (Rn(), s = n.mode, m = ld(
        { mode: "hidden", children: m },
        s
      ), c = Ea(
        c,
        s,
        u,
        null
      ), m.return = n, c.return = n, m.sibling = c, n.child = m, s = n.child, s.memoizedState = Hy(u), s.childLanes = _y(
        l,
        y,
        u
      ), n.memoizedState = ed, c) : (ru(n), td(n, m));
    }
    if (S = l.memoizedState, S !== null && (m = S.dehydrated, m !== null)) {
      if (r)
        n.flags & 256 ? (ru(n), n.flags &= -257, n = li(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Rn(), n.child = l.child, n.flags |= 128, n = null) : (Rn(), s = c.fallback, m = n.mode, c = ld(
          { mode: "visible", children: c.children },
          m
        ), s = Ea(
          s,
          m,
          u,
          null
        ), s.flags |= 2, c.return = n, s.return = n, c.sibling = s, n.child = c, ac(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = Hy(u), c.childLanes = _y(
          l,
          y,
          u
        ), n.memoizedState = ed, n = s);
      else if (ru(n), hs(m)) {
        if (y = m.nextSibling && m.nextSibling.dataset, y) var x = y.dgst;
        y = x, c = Error(b(419)), c.stack = "", c.digest = y, Fc({ value: c, source: null, stack: null }), n = li(
          l,
          n,
          u
        );
      } else if (wt || Ic(l, n, u, !1), y = (u & l.childLanes) !== 0, wt || y) {
        if (y = it, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Va(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, hn(l, c), sa(y, l, c), Rt;
        m.data === "$?" || hc(), n = li(
          l,
          n,
          u
        );
      } else
        m.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, $e = Pa(
          m.nextSibling
        ), Ht = n, Le = !0, za = null, Da = !1, l !== null && (Ra[Ql++] = Ja, Ra[Ql++] = At, Ra[Ql++] = nu, Ja = l.id, At = l.overflow, nu = n), n = td(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Rn(), s = c.fallback, m = n.mode, S = l.child, x = S.sibling, c = $a(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, x !== null ? s = $a(x, s) : (s = Ea(
      s,
      m,
      u,
      null
    ), s.flags |= 2), s.return = n, c.return = n, c.sibling = s, n.child = c, c = s, s = n.child, m = l.child.memoizedState, m === null ? m = Hy(u) : (S = m.cachePool, S !== null ? (x = Vt._currentValue, S = S.parent !== x ? { parent: x, pool: x } : S) : S = Ar(), m = {
      baseLanes: m.baseLanes | u,
      cachePool: S
    }), s.memoizedState = m, s.childLanes = _y(
      l,
      y,
      u
    ), n.memoizedState = ed, c) : (ru(n), u = l.child, l = u.sibling, u = $a(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function td(l, n) {
    return n = ld(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ld(l, n) {
    return l = Xl(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function li(l, n, u) {
    return ac(n, l.child, null, u), l = td(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function kf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), vr(l.return, n, u);
  }
  function ad(l, n, u, c, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = c, r.tail = u, r.tailMode = s);
  }
  function nd(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    if (Ft(l, n, c.children, u), c = at.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && kf(l, u, n);
          else if (l.tag === 19)
            kf(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (me(at, c), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && Lf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ad(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && Lf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ad(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        ad(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function zn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), mu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Ic(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(b(153));
    if (n.child !== null) {
      for (l = n.child, u = $a(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = $a(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ud(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && zf(l)));
  }
  function o0(l, n, u) {
    switch (n.tag) {
      case 3:
        Tt(n, n.stateNode.containerInfo), cu(n, Vt, l.memoizedState.cache), Wc();
        break;
      case 27:
      case 5:
        ba(n);
        break;
      case 4:
        Tt(n, n.stateNode.containerInfo);
        break;
      case 10:
        cu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (ru(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ny(l, n, u) : (ru(n), l = zn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        ru(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Ic(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return nd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), me(at, at.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Wr(l, n, u);
      case 24:
        cu(n, Vt, l.memoizedState.cache);
    }
    return zn(l, n, u);
  }
  function f0(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        wt = !0;
      else {
        if (!ud(l, u) && (n.flags & 128) === 0)
          return wt = !1, o0(
            l,
            n,
            u
          );
        wt = (l.flags & 131072) !== 0;
      }
    else
      wt = !1, Le && (n.flags & 1048576) !== 0 && pr(n, Kc, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, s = c._init;
          if (c = s(c._payload), n.type = c, typeof c == "function")
            Tf(c) ? (l = ti(c, l), n.tag = 1, n = Ir(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = Fr(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (s = c.$$typeof, s === vl) {
                n.tag = 11, n = c0(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (s === Ze) {
                n.tag = 14, n = du(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Dl(c) || c, Error(b(306, n, ""));
          }
        }
        return n;
      case 0:
        return Fr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = ti(
          c,
          n.pendingProps
        ), Ir(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Tt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(b(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Or(l, n), ou(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, cu(n, Vt, c), c !== r.cache && ly(
            n,
            [Vt],
            u,
            !0
          ), to(), c = y.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Pr(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = ua(
                Error(b(424)),
                n
              ), Fc(s), n = Pr(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for ($e = Pa(l.firstChild), Ht = n, Le = !0, za = null, Da = !0, u = An(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Wc(), c === s) {
              n = zn(
                l,
                n,
                u
              );
              break e;
            }
            Ft(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Kf(l, n), l === null ? (u = z0(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : Le || (u = n.type, l = n.pendingProps, c = Na(
          je.current
        ).createElement(u), c[Kt] = n, c[Ml] = l, ge(c, u, l), Gt(c), n.stateNode = c) : n.memoizedState = z0(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ba(n), l === null && Le && (c = n.stateNode = P(
          n.type,
          n.pendingProps,
          je.current
        ), Ht = n, Da = !0, s = $e, ri(n.type) ? (di = s, $e = Pa(
          c.firstChild
        )) : $e = s), Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), Kf(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && Le && ((s = c = $e) && (c = Mo(
          c,
          n.type,
          n.pendingProps,
          Da
        ), c !== null ? (n.stateNode = c, Ht = n, $e = Pa(
          c.firstChild
        ), Da = !1, s = !0) : s = !1), s || uu(n)), ba(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = r.children, Nn(s, r) ? c = null : y !== null && Nn(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = xr(
          l,
          n,
          Fp,
          null,
          null,
          u
        ), Pl._currentValue = s), Kf(l, n), Ft(l, n, c, u), n.child;
      case 6:
        return l === null && Le && ((l = u = $e) && (u = kv(
          u,
          n.pendingProps,
          Da
        ), u !== null ? (n.stateNode = u, Ht = n, $e = null, l = !0) : l = !1), l || uu(n)), null;
      case 13:
        return Ny(l, n, u);
      case 4:
        return Tt(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = ac(
          n,
          null,
          c,
          u
        ) : Ft(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return c0(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ft(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, cu(n, n.type, c.value), Ft(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Ku(n), s = kt(s), c = c(s), n.flags |= 1, Ft(l, n, c, u), n.child;
      case 14:
        return du(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return uc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return nd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = ld(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = $a(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return Wr(l, n, u);
      case 24:
        return Ku(n), c = kt(Vt), l === null ? (s = Mf(), s === null && (s = it, r = eo(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: c,
          cache: s
        }, Dr(n), cu(n, Vt, s)) : ((l.lanes & u) !== 0 && (Or(l, n), ou(n, null, null, u), to()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), cu(n, Vt, c)) : (c = r.cache, cu(n, Vt, c), c !== s.cache && ly(
          n,
          [Vt],
          u,
          !0
        ))), Ft(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(b(156, n.tag));
  }
  function Dn(l) {
    l.flags |= 4;
  }
  function fo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !vm(n)) {
      if (n = oa.current, n !== null && ((Ye & 4194048) === Ye ? Tl !== null : (Ye & 62914560) !== Ye && (Ye & 536870912) === 0 || n !== Tl))
        throw Ki = Rr, Er;
      l.flags |= 8192;
    }
  }
  function Wf(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? zi() : 536870912, l.lanes |= n, mo |= n);
  }
  function so(l, n) {
    if (!Le)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function pe(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function By(l, n, u) {
    var c = n.pendingProps;
    switch (yn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return pe(n), null;
      case 1:
        return pe(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), mn(Vt), al(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (kc(n) ? Dn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ty())), pe(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Dn(n), u !== null ? (pe(n), fo(n, u)) : (pe(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Dn(n), pe(n), fo(n, u)) : (pe(n), n.flags &= -16777217) : (l.memoizedProps !== c && Dn(n), pe(n), n.flags &= -16777217), null;
      case 27:
        Ai(n), u = je.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return pe(n), null;
          }
          l = Ne.current, kc(n) ? Ef(n) : (l = P(s, c, u), n.stateNode = l, Dn(n));
        }
        return pe(n), null;
      case 5:
        if (Ai(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(b(166));
            return pe(n), null;
          }
          if (l = Ne.current, kc(n))
            Ef(n);
          else {
            switch (s = Na(
              je.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? s.createElement("select", { is: c.is }) : s.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? s.createElement(u, { is: c.is }) : s.createElement(u);
                }
            }
            l[Kt] = n, l[Ml] = c;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (ge(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Dn(n);
          }
        }
        return pe(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Dn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(b(166));
          if (l = je.current, kc(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Ht, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Kt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || hm(l.nodeValue, u)), l || uu(n);
          } else
            l = Na(l).createTextNode(
              c
            ), l[Kt] = n, n.stateNode = l;
        }
        return pe(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = kc(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(b(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(b(317));
              s[Kt] = n;
            } else
              Wc(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            pe(n), s = !1;
          } else
            s = ty(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Fa(n), n) : (Fa(n), null);
        }
        if (Fa(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool);
          var r = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), Wf(n, n.updateQueue), pe(n), null;
      case 4:
        return al(), l === null && rm(n.stateNode.containerInfo), pe(n), null;
      case 10:
        return mn(n.type), pe(n), null;
      case 19:
        if (I(at), s = n.memoizedState, s === null) return pe(n), null;
        if (c = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (c) so(s, !1);
          else {
            if (Ot !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = Lf(l), r !== null) {
                  for (n.flags |= 128, so(s, !1), l = r.updateQueue, n.updateQueue = l, Wf(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Ce(u, l), u = u.sibling;
                  return me(
                    at,
                    at.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && ta() > yd && (n.flags |= 128, c = !0, so(s, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = Lf(r), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, Wf(n, l), so(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !Le)
                return pe(n), null;
            } else
              2 * ta() - s.renderingStartTime > yd && u !== 536870912 && (n.flags |= 128, c = !0, so(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = ta(), n.sibling = null, l = at.current, me(at, c ? l & 1 | 2 : l & 1), n) : (pe(n), null);
      case 22:
      case 23:
        return Fa(n), ao(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (pe(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : pe(n), u = n.updateQueue, u !== null && Wf(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && I(vn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), mn(Vt), pe(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, n.tag));
  }
  function wv(l, n) {
    switch (yn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return mn(Vt), al(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ai(n), null;
      case 13:
        if (Fa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(b(340));
          Wc();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return I(at), null;
      case 4:
        return al(), null;
      case 10:
        return mn(n.type), null;
      case 22:
      case 23:
        return Fa(n), ao(), l !== null && I(vn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return mn(Vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qy(l, n) {
    switch (yn(n), n.tag) {
      case 3:
        mn(Vt), al();
        break;
      case 26:
      case 27:
      case 5:
        Ai(n);
        break;
      case 4:
        al();
        break;
      case 13:
        Fa(n);
        break;
      case 19:
        I(at);
        break;
      case 10:
        mn(n.type);
        break;
      case 22:
      case 23:
        Fa(n), ao(), l !== null && I(vn);
        break;
      case 24:
        mn(Vt);
    }
  }
  function Ff(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, y = u.inst;
            c = r(), y.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (m) {
      et(n, n.return, m);
    }
  }
  function ai(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, m = y.destroy;
            if (m !== void 0) {
              y.destroy = void 0, s = n;
              var S = u, x = m;
              try {
                x();
              } catch (Q) {
                et(
                  s,
                  S,
                  Q
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (Q) {
      et(n, n.return, Q);
    }
  }
  function id(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Cf(n, u);
      } catch (c) {
        et(l, l.return, c);
      }
    }
  }
  function Yy(l, n, u) {
    u.props = ti(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      et(l, n, c);
    }
  }
  function ro(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      et(l, n, s);
    }
  }
  function Ia(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          et(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          et(l, n, s);
        }
      else u.current = null;
  }
  function ho(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      et(l, l.return, s);
    }
  }
  function Gy(l, n, u) {
    try {
      var c = l.stateNode;
      $v(c, l.type, u, n), c[Ml] = n;
    } catch (s) {
      et(l, l.return, s);
    }
  }
  function s0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ri(l.type) || l.tag === 4;
  }
  function xa(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || s0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ri(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function cc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Dd));
    else if (c !== 4 && (c === 27 && ri(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (cc(l, n, u), l = l.sibling; l !== null; )
        cc(l, n, u), l = l.sibling;
  }
  function cd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && ri(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (cd(l, n, u), l = l.sibling; l !== null; )
        cd(l, n, u), l = l.sibling;
  }
  function od(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      ge(n, c, u), n[Kt] = l, n[Ml] = u;
    } catch (r) {
      et(l, l.return, r);
    }
  }
  var On = !1, zt = !1, fd = !1, sd = typeof WeakSet == "function" ? WeakSet : Set, Xt = null;
  function Vy(l, n) {
    if (l = l.containerInfo, ss = ps, l = Kh(l), bf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, m = -1, S = -1, x = 0, Q = 0, Z = l, H = null;
            t: for (; ; ) {
              for (var N; Z !== u || s !== 0 && Z.nodeType !== 3 || (m = y + s), Z !== r || c !== 0 && Z.nodeType !== 3 || (S = y + c), Z.nodeType === 3 && (y += Z.nodeValue.length), (N = Z.firstChild) !== null; )
                H = Z, Z = N;
              for (; ; ) {
                if (Z === l) break t;
                if (H === u && ++x === s && (m = y), H === r && ++Q === c && (S = y), (N = Z.nextSibling) !== null) break;
                Z = H, H = Z.parentNode;
              }
              Z = N;
            }
            u = m === -1 || S === -1 ? null : { start: m, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (rs = { focusedElem: l, selectionRange: u }, ps = !1, Xt = n; Xt !== null; )
      if (n = Xt, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, Xt = l;
      else
        for (; Xt !== null; ) {
          switch (n = Xt, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var se = ti(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    se,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (re) {
                  et(
                    u,
                    u.return,
                    re
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  ds(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ds(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(b(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Xt = l;
            break;
          }
          Xt = n.return;
        }
  }
  function jy(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Un(l, u), c & 4 && Ff(5, u);
        break;
      case 1:
        if (Un(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              et(u, u.return, y);
            }
          else {
            var s = ti(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              et(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && id(u), c & 512 && ro(u, u.return);
        break;
      case 3:
        if (Un(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Cf(l, n);
          } catch (y) {
            et(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && od(u);
      case 26:
      case 5:
        Un(l, u), n === null && c & 4 && ho(u), c & 512 && ro(u, u.return);
        break;
      case 12:
        Un(l, u);
        break;
      case 13:
        Un(l, u), c & 4 && rd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Xv.bind(
          null,
          u
        ), Wv(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || On, !c) {
          n = n !== null && n.memoizedState !== null || zt, s = On;
          var r = zt;
          On = c, (zt = n) && !r ? ni(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Un(l, u), On = s, zt = r;
        }
        break;
      case 30:
        break;
      default:
        Un(l, u);
    }
  }
  function wy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, wy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && lf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ht = null, cl = !1;
  function Mn(l, n, u) {
    for (u = u.child; u !== null; )
      Be(l, n, u), u = u.sibling;
  }
  function Be(l, n, u) {
    if (Ol && typeof Ol.onCommitFiberUnmount == "function")
      try {
        Ol.onCommitFiberUnmount(_c, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        zt || Ia(u, n), Mn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        zt || Ia(u, n);
        var c = ht, s = cl;
        ri(u.type) && (ht = u.stateNode, cl = !1), Mn(
          l,
          n,
          u
        ), Fl(u.stateNode), ht = c, cl = s;
        break;
      case 5:
        zt || Ia(u, n);
      case 6:
        if (c = ht, s = cl, ht = null, Mn(
          l,
          n,
          u
        ), ht = c, cl = s, ht !== null)
          if (cl)
            try {
              (ht.nodeType === 9 ? ht.body : ht.nodeName === "HTML" ? ht.ownerDocument.body : ht).removeChild(u.stateNode);
            } catch (r) {
              et(
                u,
                n,
                r
              );
            }
          else
            try {
              ht.removeChild(u.stateNode);
            } catch (r) {
              et(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        ht !== null && (cl ? (l = ht, Md(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Yn(l)) : Md(ht, u.stateNode));
        break;
      case 4:
        c = ht, s = cl, ht = u.stateNode.containerInfo, cl = !0, Mn(
          l,
          n,
          u
        ), ht = c, cl = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        zt || ai(2, u, n), zt || ai(4, u, n), Mn(
          l,
          n,
          u
        );
        break;
      case 1:
        zt || (Ia(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Yy(
          u,
          n,
          c
        )), Mn(
          l,
          n,
          u
        );
        break;
      case 21:
        Mn(
          l,
          n,
          u
        );
        break;
      case 22:
        zt = (c = zt) || u.memoizedState !== null, Mn(
          l,
          n,
          u
        ), zt = c;
        break;
      default:
        Mn(
          l,
          n,
          u
        );
    }
  }
  function rd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Yn(l);
      } catch (u) {
        et(n, n.return, u);
      }
  }
  function Xy(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new sd()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new sd()), n;
      default:
        throw Error(b(435, l.tag));
    }
  }
  function dd(l, n) {
    var u = Xy(l);
    n.forEach(function(c) {
      var s = Qv.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(s, s));
    });
  }
  function Cl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, y = n, m = y;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (ri(m.type)) {
                ht = m.stateNode, cl = !1;
                break e;
              }
              break;
            case 5:
              ht = m.stateNode, cl = !1;
              break e;
            case 3:
            case 4:
              ht = m.stateNode.containerInfo, cl = !0;
              break e;
          }
          m = m.return;
        }
        if (ht === null) throw Error(b(160));
        Be(r, y, s), ht = null, cl = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        If(n, l), n = n.sibling;
  }
  var Hl = null;
  function If(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Cl(n, l), It(l), c & 4 && (ai(3, l, l.return), Ff(3, l), ai(5, l, l.return));
        break;
      case 1:
        Cl(n, l), It(l), c & 512 && (zt || u === null || Ia(u, u.return)), c & 64 && On && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Hl;
        if (Cl(n, l), It(l), c & 512 && (zt || u === null || Ia(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[ae] || r[Kt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), ge(r, c, u), r[Kt] = l, Gt(r), c = r;
                      break e;
                    case "link":
                      var y = mm(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), ge(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = mm(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), ge(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(b(468, c));
                  }
                  r[Kt] = l, Gt(r), c = r;
                }
                l.stateNode = c;
              } else
                pm(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = O0(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? pm(
              s,
              l.type,
              l.stateNode
            ) : O0(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && Gy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Cl(n, l), It(l), c & 512 && (zt || u === null || Ia(u, u.return)), u !== null && c & 4 && Gy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Cl(n, l), It(l), c & 512 && (zt || u === null || Ia(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Yc(s, "");
          } catch (N) {
            et(l, l.return, N);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, Gy(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (fd = !0);
        break;
      case 6:
        if (Cl(n, l), It(l), c & 4) {
          if (l.stateNode === null)
            throw Error(b(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (N) {
            et(l, l.return, N);
          }
        }
        break;
      case 3:
        if (mi = null, s = Hl, Hl = Ud(n.containerInfo), Cl(n, l), Hl = s, It(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Yn(n.containerInfo);
          } catch (N) {
            et(l, l.return, N);
          }
        fd && (fd = !1, Qy(l));
        break;
      case 4:
        c = Hl, Hl = Ud(
          l.stateNode.containerInfo
        ), Cl(n, l), It(l), Hl = c;
        break;
      case 12:
        Cl(n, l), It(l);
        break;
      case 13:
        Cl(n, l), It(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Fy = ta()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, x = On, Q = zt;
        if (On = x || s, zt = Q || S, Cl(n, l), zt = Q, On = x, It(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || S || On || zt || yt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (r = S.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    m = S.stateNode;
                    var Z = S.memoizedProps.style, H = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                    m.style.display = H == null || typeof H == "boolean" ? "" : ("" + H).trim();
                  }
                } catch (N) {
                  et(S, S.return, N);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = s ? "" : S.memoizedProps;
                } catch (N) {
                  et(S, S.return, N);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, dd(l, u))));
        break;
      case 19:
        Cl(n, l), It(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, dd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Cl(n, l), It(l);
    }
  }
  function It(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (s0(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(b(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = xa(l);
            cd(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Yc(y, ""), u.flags &= -33);
            var m = xa(l);
            cd(l, m, y);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, x = xa(l);
            cc(
              l,
              x,
              S
            );
            break;
          default:
            throw Error(b(161));
        }
      } catch (Q) {
        et(l, l.return, Q);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Qy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Qy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Un(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        jy(l, n.alternate, n), n = n.sibling;
  }
  function yt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ai(4, n, n.return), yt(n);
          break;
        case 1:
          Ia(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Yy(
            n,
            n.return,
            u
          ), yt(n);
          break;
        case 27:
          Fl(n.stateNode);
        case 26:
        case 5:
          Ia(n, n.return), yt(n);
          break;
        case 22:
          n.memoizedState === null && yt(n);
          break;
        case 30:
          yt(n);
          break;
        default:
          yt(n);
      }
      l = l.sibling;
    }
  }
  function ni(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ni(
            s,
            r,
            u
          ), Ff(4, r);
          break;
        case 1:
          if (ni(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (x) {
              et(c, c.return, x);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var m = c.stateNode;
            try {
              var S = s.shared.hiddenCallbacks;
              if (S !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)
                  Mr(S[s], m);
            } catch (x) {
              et(c, c.return, x);
            }
          }
          u && y & 64 && id(r), ro(r, r.return);
          break;
        case 27:
          od(r);
        case 26:
        case 5:
          ni(
            s,
            r,
            u
          ), u && c === null && y & 4 && ho(r), ro(r, r.return);
          break;
        case 12:
          ni(
            s,
            r,
            u
          );
          break;
        case 13:
          ni(
            s,
            r,
            u
          ), u && y & 4 && rd(s, r);
          break;
        case 22:
          r.memoizedState === null && ni(
            s,
            r,
            u
          ), ro(r, r.return);
          break;
        case 30:
          break;
        default:
          ni(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ca(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && pn(u));
  }
  function hd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l));
  }
  function ol(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Ly(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Ly(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ol(
          l,
          n,
          u,
          c
        ), s & 2048 && Ff(9, n);
        break;
      case 1:
        ol(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        ol(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l)));
        break;
      case 12:
        if (s & 2048) {
          ol(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, m = r.onPostCommit;
            typeof m == "function" && m(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            et(n, n.return, S);
          }
        } else
          ol(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        ol(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? ol(
          l,
          n,
          u,
          c
        ) : Je(l, n) : r._visibility & 2 ? ol(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, hu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && Ca(y, n);
        break;
      case 24:
        ol(
          l,
          n,
          u,
          c
        ), s & 2048 && hd(n.alternate, n);
        break;
      default:
        ol(
          l,
          n,
          u,
          c
        );
    }
  }
  function hu(l, n, u, c, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, m = u, S = c, x = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          hu(
            r,
            y,
            m,
            S,
            s
          ), Ff(8, y);
          break;
        case 23:
          break;
        case 22:
          var Q = y.stateNode;
          y.memoizedState !== null ? Q._visibility & 2 ? hu(
            r,
            y,
            m,
            S,
            s
          ) : Je(
            r,
            y
          ) : (Q._visibility |= 2, hu(
            r,
            y,
            m,
            S,
            s
          )), s && x & 2048 && Ca(
            y.alternate,
            y
          );
          break;
        case 24:
          hu(
            r,
            y,
            m,
            S,
            s
          ), s && x & 2048 && hd(y.alternate, y);
          break;
        default:
          hu(
            r,
            y,
            m,
            S,
            s
          );
      }
      n = n.sibling;
    }
  }
  function Je(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            Je(u, c), s & 2048 && Ca(
              c.alternate,
              c
            );
            break;
          case 24:
            Je(u, c), s & 2048 && hd(c.alternate, c);
            break;
          default:
            Je(u, c);
        }
        n = n.sibling;
      }
  }
  var oc = 8192;
  function Dt(l) {
    if (l.subtreeFlags & oc)
      for (l = l.child; l !== null; )
        r0(l), l = l.sibling;
  }
  function r0(l) {
    switch (l.tag) {
      case 26:
        Dt(l), l.flags & oc && l.memoizedState !== null && x0(
          Hl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Dt(l);
        break;
      case 3:
      case 4:
        var n = Hl;
        Hl = Ud(l.stateNode.containerInfo), Dt(l), Hl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = oc, oc = 16777216, Dt(l), oc = n) : Dt(l));
        break;
      default:
        Dt(l);
    }
  }
  function Zy(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function fc(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Xt = c, Jy(
            c,
            l
          );
        }
      Zy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        $y(l), l = l.sibling;
  }
  function $y(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fc(l), l.flags & 2048 && ai(9, l, l.return);
        break;
      case 3:
        fc(l);
        break;
      case 12:
        fc(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, _l(l)) : fc(l);
        break;
      default:
        fc(l);
    }
  }
  function _l(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Xt = c, Jy(
            c,
            l
          );
        }
      Zy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, n, n.return), _l(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, _l(n));
          break;
        default:
          _l(n);
      }
      l = l.sibling;
    }
  }
  function Jy(l, n) {
    for (; Xt !== null; ) {
      var u = Xt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          pn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Xt = c;
      else
        e: for (u = l; Xt !== null; ) {
          c = Xt;
          var s = c.sibling, r = c.return;
          if (wy(c), c === u) {
            Xt = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Xt = s;
            break e;
          }
          Xt = r;
        }
    }
  }
  var Ky = {
    getCacheForType: function(l) {
      var n = kt(Vt), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, d0 = typeof WeakMap == "function" ? WeakMap : Map, Ie = 0, it = null, qe = null, Ye = 0, Pe = 0, Kl = null, xn = !1, yo = !1, ky = !1, yu = 0, Ot = 0, mu = 0, sc = 0, Cn = 0, Ha = 0, mo = 0, po = null, kl = null, Wy = !1, Fy = 0, yd = 1 / 0, vo = null, ui = null, fl = 0, Hn = null, go = null, sl = 0, md = 0, pd = null, Iy = null, bo = 0, Py = null;
  function fa() {
    if ((Ie & 2) !== 0 && Ye !== 0)
      return Ye & -Ye;
    if (O.T !== null) {
      var l = Oa;
      return l !== 0 ? l : yc();
    }
    return Dp();
  }
  function em() {
    Ha === 0 && (Ha = (Ye & 536870912) === 0 || Le ? Cu() : 536870912);
    var l = oa.current;
    return l !== null && (l.flags |= 32), Ha;
  }
  function sa(l, n, u) {
    (l === it && (Pe === 2 || Pe === 9) || l.cancelPendingCommit !== null) && (_n(l, 0), pu(
      l,
      Ye,
      Ha,
      !1
    )), Di(l, u), ((Ie & 2) === 0 || l !== it) && (l === it && ((Ie & 2) === 0 && (sc |= u), Ot === 4 && pu(
      l,
      Ye,
      Ha,
      !1
    )), Wl(l));
  }
  function So(l, n, u) {
    if ((Ie & 6) !== 0) throw Error(b(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || nn(l, n), s = c ? lm(l, n) : vd(l, n, !0), r = c;
    do {
      if (s === 0) {
        yo && !c && pu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !h0(u)) {
          s = vd(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var m = l;
              s = po;
              var S = m.current.memoizedState.isDehydrated;
              if (S && (_n(m, y).flags |= 256), y = vd(
                m,
                y,
                !1
              ), y !== 2) {
                if (ky && !S) {
                  m.errorRecoveryDisabledLanes |= r, sc |= r, s = 4;
                  break e;
                }
                r = kl, kl = s, r !== null && (kl === null ? kl = r : kl.push.apply(
                  kl,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          _n(l, 0), pu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(b(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pu(
                c,
                n,
                Ha,
                !xn
              );
              break e;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(b(329));
          }
          if ((n & 62914560) === n && (s = Fy + 300 - ta(), 10 < s)) {
            if (pu(
              c,
              n,
              Ha,
              !xn
            ), xu(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Od(
              Pf.bind(
                null,
                c,
                u,
                kl,
                vo,
                Wy,
                n,
                Ha,
                sc,
                mo,
                xn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Pf(
            c,
            u,
            kl,
            vo,
            Wy,
            n,
            Ha,
            sc,
            mo,
            xn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Wl(l);
  }
  function Pf(l, n, u, c, s, r, y, m, S, x, Q, Z, H, N) {
    if (l.timeoutHandle = -1, Z = n.subtreeFlags, (Z & 8192 || (Z & 16785408) === 16785408) && (Ho = { stylesheets: null, count: 0, unsuspend: U0 }, r0(n), Z = gm(), Z !== null)) {
      l.cancelPendingCommit = Z(
        p0.bind(
          null,
          l,
          n,
          r,
          u,
          c,
          s,
          y,
          m,
          S,
          Q,
          1,
          H,
          N
        )
      ), pu(l, r, y, !x);
      return;
    }
    p0(
      l,
      n,
      r,
      u,
      c,
      s,
      y,
      m,
      S
    );
  }
  function h0(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!il(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pu(l, n, u, c) {
    n &= ~Cn, n &= ~sc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Vl(s), y = 1 << r;
      c[r] = -1, s &= ~y;
    }
    u !== 0 && ef(l, u, n);
  }
  function rc() {
    return (Ie & 6) === 0 ? (as(0), !1) : !0;
  }
  function ii() {
    if (qe !== null) {
      if (Pe === 0)
        var l = qe.return;
      else
        l = qe, Ka = iu = null, Hr(l), tc = null, io = 0, l = qe;
      for (; l !== null; )
        qy(l.alternate, l), l = l.return;
      qe = null;
    }
  }
  function _n(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Jv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ii(), it = l, qe = u = $a(l.current, null), Ye = n, Pe = 0, Kl = null, xn = !1, yo = nn(l, n), ky = !1, mo = Ha = Cn = sc = mu = Ot = 0, kl = po = null, Wy = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Vl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return yu = n, Za(), u;
  }
  function tm(l, n) {
    Re = null, O.H = Jr, n === Wu || n === Uf ? (n = uy(), Pe = 3) : n === Er ? (n = uy(), Pe = 4) : Pe = n === Rt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Kl = n, qe === null && (Ot = 1, Jf(
      l,
      ua(n, l.current)
    ));
  }
  function y0() {
    var l = O.H;
    return O.H = Jr, l === null ? Jr : l;
  }
  function dc() {
    var l = O.A;
    return O.A = Ky, l;
  }
  function hc() {
    Ot = 4, xn || (Ye & 4194048) !== Ye && oa.current !== null || (yo = !0), (mu & 134217727) === 0 && (sc & 134217727) === 0 || it === null || pu(
      it,
      Ye,
      Ha,
      !1
    );
  }
  function vd(l, n, u) {
    var c = Ie;
    Ie |= 2;
    var s = y0(), r = dc();
    (it !== l || Ye !== n) && (vo = null, _n(l, n)), n = !1;
    var y = Ot;
    e: do
      try {
        if (Pe !== 0 && qe !== null) {
          var m = qe, S = Kl;
          switch (Pe) {
            case 8:
              ii(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              oa.current === null && (n = !0);
              var x = Pe;
              if (Pe = 0, Kl = null, To(l, m, S, x), u && yo) {
                y = 0;
                break e;
              }
              break;
            default:
              x = Pe, Pe = 0, Kl = null, To(l, m, S, x);
          }
        }
        gd(), y = Ot;
        break;
      } catch (Q) {
        tm(l, Q);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Ka = iu = null, Ie = c, O.H = s, O.A = r, qe === null && (it = null, Ye = 0, Za()), y;
  }
  function gd() {
    for (; qe !== null; ) nm(qe);
  }
  function lm(l, n) {
    var u = Ie;
    Ie |= 2;
    var c = y0(), s = dc();
    it !== l || Ye !== n ? (vo = null, yd = ta() + 500, _n(l, n)) : yo = nn(
      l,
      n
    );
    e: do
      try {
        if (Pe !== 0 && qe !== null) {
          n = qe;
          var r = Kl;
          t: switch (Pe) {
            case 1:
              Pe = 0, Kl = null, To(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (zr(r)) {
                Pe = 0, Kl = null, um(n);
                break;
              }
              n = function() {
                Pe !== 2 && Pe !== 9 || it !== l || (Pe = 7), Wl(l);
              }, r.then(n, n);
              break e;
            case 3:
              Pe = 7;
              break e;
            case 4:
              Pe = 5;
              break e;
            case 7:
              zr(r) ? (Pe = 0, Kl = null, um(n)) : (Pe = 0, Kl = null, To(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (qe.tag) {
                case 26:
                  y = qe.memoizedState;
                case 5:
                case 27:
                  var m = qe;
                  if (!y || vm(y)) {
                    Pe = 0, Kl = null;
                    var S = m.sibling;
                    if (S !== null) qe = S;
                    else {
                      var x = m.return;
                      x !== null ? (qe = x, es(x)) : qe = null;
                    }
                    break t;
                  }
              }
              Pe = 0, Kl = null, To(l, n, r, 5);
              break;
            case 6:
              Pe = 0, Kl = null, To(l, n, r, 6);
              break;
            case 8:
              ii(), Ot = 6;
              break e;
            default:
              throw Error(b(462));
          }
        }
        am();
        break;
      } catch (Q) {
        tm(l, Q);
      }
    while (!0);
    return Ka = iu = null, O.H = c, O.A = s, Ie = u, qe !== null ? 0 : (it = null, Ye = 0, Za(), Ot);
  }
  function am() {
    for (; qe !== null && !Uv(); )
      nm(qe);
  }
  function nm(l) {
    var n = f0(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, n === null ? es(l) : qe = n;
  }
  function um(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Cy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ye
        );
        break;
      case 11:
        n = Cy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ye
        );
        break;
      case 5:
        Hr(n);
      default:
        qy(u, n), n = qe = Ce(n, yu), n = f0(u, n, yu);
    }
    l.memoizedProps = l.pendingProps, n === null ? es(l) : qe = n;
  }
  function To(l, n, u, c) {
    Ka = iu = null, Hr(n), tc = null, io = 0;
    var s = n.return;
    try {
      if (i0(
        l,
        s,
        n,
        u,
        Ye
      )) {
        Ot = 1, Jf(
          l,
          ua(u, l.current)
        ), qe = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw qe = s, r;
      Ot = 1, Jf(
        l,
        ua(u, l.current)
      ), qe = null;
      return;
    }
    n.flags & 32768 ? (Le || c === 1 ? l = !0 : yo || (Ye & 536870912) !== 0 ? l = !1 : (xn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = oa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), m0(n, l)) : es(n);
  }
  function es(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        m0(
          n,
          xn
        );
        return;
      }
      l = n.return;
      var u = By(
        n.alternate,
        n,
        yu
      );
      if (u !== null) {
        qe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        qe = n;
        return;
      }
      qe = n = l;
    } while (n !== null);
    Ot === 0 && (Ot = 5);
  }
  function m0(l, n) {
    do {
      var u = wv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, qe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        qe = l;
        return;
      }
      qe = l = u;
    } while (l !== null);
    Ot = 6, qe = null;
  }
  function p0(l, n, u, c, s, r, y, m, S) {
    l.cancelPendingCommit = null;
    do
      Sd();
    while (fl !== 0);
    if ((Ie & 6) !== 0) throw Error(b(327));
    if (n !== null) {
      if (n === l.current) throw Error(b(177));
      if (r = n.lanes | n.childLanes, r |= dn, zp(
        l,
        u,
        r,
        y,
        m,
        S
      ), l === it && (qe = it = null, Ye = 0), go = n, Hn = l, sl = u, md = r, pd = s, Iy = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Lv(Po, function() {
        return im(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = O.T, O.T = null, s = $.p, $.p = 2, y = Ie, Ie |= 4;
        try {
          Vy(l, n, u);
        } finally {
          Ie = y, $.p = s, O.T = c;
        }
      }
      fl = 1, v0(), ts(), bd();
    }
  }
  function v0() {
    if (fl === 1) {
      fl = 0;
      var l = Hn, n = go, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var c = $.p;
        $.p = 2;
        var s = Ie;
        Ie |= 4;
        try {
          If(n, l);
          var r = rs, y = Kh(l.containerInfo), m = r.focusedElem, S = r.selectionRange;
          if (y !== m && m && m.ownerDocument && gf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (S !== null && bf(m)) {
              var x = S.start, Q = S.end;
              if (Q === void 0 && (Q = x), "selectionStart" in m)
                m.selectionStart = x, m.selectionEnd = Math.min(
                  Q,
                  m.value.length
                );
              else {
                var Z = m.ownerDocument || document, H = Z && Z.defaultView || window;
                if (H.getSelection) {
                  var N = H.getSelection(), se = m.textContent.length, re = Math.min(S.start, se), Ke = S.end === void 0 ? re : Math.min(S.end, se);
                  !N.extend && re > Ke && (y = Ke, Ke = re, re = y);
                  var M = ft(
                    m,
                    re
                  ), D = ft(
                    m,
                    Ke
                  );
                  if (M && D && (N.rangeCount !== 1 || N.anchorNode !== M.node || N.anchorOffset !== M.offset || N.focusNode !== D.node || N.focusOffset !== D.offset)) {
                    var U = Z.createRange();
                    U.setStart(M.node, M.offset), N.removeAllRanges(), re > Ke ? (N.addRange(U), N.extend(D.node, D.offset)) : (U.setEnd(D.node, D.offset), N.addRange(U));
                  }
                }
              }
            }
            for (Z = [], N = m; N = N.parentNode; )
              N.nodeType === 1 && Z.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < Z.length; m++) {
              var L = Z[m];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          ps = !!ss, rs = ss = null;
        } finally {
          Ie = s, $.p = c, O.T = u;
        }
      }
      l.current = n, fl = 2;
    }
  }
  function ts() {
    if (fl === 2) {
      fl = 0;
      var l = Hn, n = go, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var c = $.p;
        $.p = 2;
        var s = Ie;
        Ie |= 4;
        try {
          jy(l, n.alternate, n);
        } finally {
          Ie = s, $.p = c, O.T = u;
        }
      }
      fl = 3;
    }
  }
  function bd() {
    if (fl === 4 || fl === 3) {
      fl = 0, Ri();
      var l = Hn, n = go, u = sl, c = Iy;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? fl = 5 : (fl = 0, go = Hn = null, g0(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (ui = null), Ks(u), n = n.stateNode, Ol && typeof Ol.onCommitFiberRoot == "function")
        try {
          Ol.onCommitFiberRoot(
            _c,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = O.T, s = $.p, $.p = 2, O.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < c.length; y++) {
            var m = c[y];
            r(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          O.T = n, $.p = s;
        }
      }
      (sl & 3) !== 0 && Sd(), Wl(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === Py ? bo++ : (bo = 0, Py = l) : bo = 0, as(0);
    }
  }
  function g0(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, pn(n)));
  }
  function Sd(l) {
    return v0(), ts(), bd(), im();
  }
  function im() {
    if (fl !== 5) return !1;
    var l = Hn, n = md;
    md = 0;
    var u = Ks(sl), c = O.T, s = $.p;
    try {
      $.p = 32 > u ? 32 : u, O.T = null, u = pd, pd = null;
      var r = Hn, y = sl;
      if (fl = 0, go = Hn = null, sl = 0, (Ie & 6) !== 0) throw Error(b(331));
      var m = Ie;
      if (Ie |= 4, $y(r.current), Ly(
        r,
        r.current,
        y,
        u
      ), Ie = m, as(0, !1), Ol && typeof Ol.onPostCommitFiberRoot == "function")
        try {
          Ol.onPostCommitFiberRoot(_c, r);
        } catch {
        }
      return !0;
    } finally {
      $.p = s, O.T = c, g0(l, n);
    }
  }
  function cm(l, n, u) {
    n = ua(u, n), n = Uy(l.stateNode, n, 2), l = bn(l, n, 2), l !== null && (Di(l, 2), Wl(l));
  }
  function et(l, n, u) {
    if (l.tag === 3)
      cm(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          cm(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ui === null || !ui.has(c))) {
            l = ua(u, l), u = xy(2), c = bn(n, u, 2), c !== null && (Jl(
              u,
              c,
              n,
              l
            ), Di(c, 2), Wl(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Td(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new d0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (ky = !0, s.add(u), l = om.bind(null, l, n, u), n.then(l, l));
  }
  function om(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, it === l && (Ye & u) === u && (Ot === 4 || Ot === 3 && (Ye & 62914560) === Ye && 300 > ta() - Fy ? (Ie & 2) === 0 && _n(l, 0) : Cn |= u, mo === Ye && (mo = 0)), Wl(l);
  }
  function fm(l, n) {
    n === 0 && (n = zi()), l = hn(l, n), l !== null && (Di(l, n), Wl(l));
  }
  function Xv(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), fm(l, u);
  }
  function Qv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(b(314));
    }
    c !== null && c.delete(n), fm(l, u);
  }
  function Lv(l, n) {
    return Ei(l, n);
  }
  var Ad = null, ci = null, ls = !1, Ao = !1, Ed = !1, oi = 0;
  function Wl(l) {
    l !== ci && l.next === null && (ci === null ? Ad = ci = l : ci = ci.next = l), Ao = !0, ls || (ls = !0, T0());
  }
  function as(l, n) {
    if (!Ed && Ao) {
      Ed = !0;
      do
        for (var u = !1, c = Ad; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = c.suspendedLanes, m = c.pingedLanes;
              r = (1 << 31 - Vl(42 | l) + 1) - 1, r &= s & ~(y & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, us(c, r));
          } else
            r = Ye, r = xu(
              c,
              c === it ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || nn(c, r) || (u = !0, us(c, r));
          c = c.next;
        }
      while (u);
      Ed = !1;
    }
  }
  function b0() {
    ns();
  }
  function ns() {
    Ao = ls = !1;
    var l = 0;
    oi !== 0 && (bu() && (l = oi), oi = 0);
    for (var n = ta(), u = null, c = Ad; c !== null; ) {
      var s = c.next, r = sm(c, n);
      r === 0 ? (c.next = null, u === null ? Ad = s : u.next = s, s === null && (ci = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Ao = !0)), c = s;
    }
    as(l);
  }
  function sm(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Vl(r), m = 1 << y, S = s[y];
      S === -1 ? ((m & u) === 0 || (m & c) !== 0) && (s[y] = Jt(m, n)) : S <= n && (l.expiredLanes |= m), r &= ~m;
    }
    if (n = it, u = Ye, u = xu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Pe === 2 || Pe === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && bh(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || nn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && bh(c), Ks(u)) {
        case 2:
        case 8:
          u = Sh;
          break;
        case 32:
          u = Po;
          break;
        case 268435456:
          u = Hc;
          break;
        default:
          u = Po;
      }
      return c = S0.bind(null, l), u = Ei(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && bh(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function S0(l, n) {
    if (fl !== 0 && fl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Sd() && l.callbackNode !== u)
      return null;
    var c = Ye;
    return c = xu(
      l,
      l === it ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (So(l, c, n), sm(l, ta()), l.callbackNode != null && l.callbackNode === u ? S0.bind(null, l) : null);
  }
  function us(l, n) {
    if (Sd()) return null;
    So(l, n, !0);
  }
  function T0() {
    Kv(function() {
      (Ie & 6) !== 0 ? Ei(
        Ap,
        b0
      ) : ns();
    });
  }
  function yc() {
    return oi === 0 && (oi = Cu()), oi;
  }
  function Rd(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : sf("" + l);
  }
  function is(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function A0(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Rd(
        (s[Ml] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Ml] || null) ? Rd(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var m = new ir(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (oi !== 0) {
                  var S = y ? is(s, y) : new FormData(s);
                  $r(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: s.method,
                      action: r
                    },
                    null,
                    S
                  );
                }
              } else
                typeof r == "function" && (m.preventDefault(), S = y ? is(s, y) : new FormData(s), $r(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: s.method,
                    action: r
                  },
                  r,
                  S
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Mt = 0; Mt < Qc.length; Mt++) {
    var cs = Qc[Mt], Zv = cs.toLowerCase(), xe = cs[0].toUpperCase() + cs.slice(1);
    Aa(
      Zv,
      "on" + xe
    );
  }
  Aa(Zp, "onAnimationEnd"), Aa(kh, "onAnimationIteration"), Aa($p, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Wh, "onTransitionRun"), Aa(mr, "onTransitionStart"), Aa(Jp, "onTransitionCancel"), Aa(Fh, "onTransitionEnd"), Nu("onMouseEnter", ["mouseout", "mouseover"]), Nu("onMouseLeave", ["mouseout", "mouseover"]), Nu("onPointerEnter", ["pointerout", "pointerover"]), Nu("onPointerLeave", ["pointerout", "pointerover"]), _u(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), _u(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), _u("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), _u(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), _u(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), _u(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var os = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fi = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(os)
  );
  function mc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var m = c[y], S = m.instance, x = m.currentTarget;
            if (m = m.listener, S !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = x;
            try {
              r(s);
            } catch (Q) {
              Zf(Q);
            }
            s.currentTarget = null, r = S;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (m = c[y], S = m.instance, x = m.currentTarget, m = m.listener, S !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = x;
            try {
              r(s);
            } catch (Q) {
              Zf(Q);
            }
            s.currentTarget = null, r = S;
          }
      }
    }
  }
  function ze(l, n) {
    var u = n[ks];
    u === void 0 && (u = n[ks] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (zd(n, l, 2, !1), u.add(c));
  }
  function Eo(l, n, u) {
    var c = 0;
    n && (c |= 4), zd(
      u,
      l,
      c,
      n
    );
  }
  var Ro = "_reactListening" + Math.random().toString(36).slice(2);
  function rm(l) {
    if (!l[Ro]) {
      l[Ro] = !0, nf.forEach(function(u) {
        u !== "selectionchange" && (fi.has(u) || Eo(u, !1, l), Eo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ro] || (n[Ro] = !0, Eo("selectionchange", !1, n));
    }
  }
  function zd(l, n, u, c) {
    switch (Dm(n)) {
      case 2:
        var s = C0;
        break;
      case 8:
        s = H0;
        break;
      default:
        s = Rm;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ar || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function _a(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var m = c.stateNode.containerInfo;
          if (m === s) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; m !== null; ) {
            if (y = nl(m), y === null) return;
            if (S = y.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = r = y;
              continue e;
            }
            m = m.parentNode;
          }
        }
        c = c.return;
      }
    jc(function() {
      var x = r, Q = lr(u), Z = [];
      e: {
        var H = Ih.get(l);
        if (H !== void 0) {
          var N = ir, se = l;
          switch (l) {
            case "keypress":
              if (ul(u) === 0) break e;
            case "keydown":
            case "keyup":
              N = ja;
              break;
            case "focusin":
              se = "focus", N = _h;
              break;
            case "focusout":
              se = "blur", N = _h;
              break;
            case "beforeblur":
            case "afterblur":
              N = _h;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = qp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = qh;
              break;
            case Zp:
            case kh:
            case $p:
              N = Yv;
              break;
            case Fh:
              N = wp;
              break;
            case "scroll":
            case "scrollend":
              N = Np;
              break;
            case "wheel":
              N = Gi;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = hf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = yf;
              break;
            case "toggle":
            case "beforetoggle":
              N = Xp;
          }
          var re = (n & 4) !== 0, Ke = !re && (l === "scroll" || l === "scrollend"), M = re ? H !== null ? H + "Capture" : null : H;
          re = [];
          for (var D = x, U; D !== null; ) {
            var L = D;
            if (U = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || U === null || M === null || (L = Ni(D, M), L != null && re.push(
              vu(D, L, U)
            )), Ke) break;
            D = D.return;
          }
          0 < re.length && (H = new N(
            H,
            se,
            null,
            u,
            Q
          ), Z.push({ event: H, listeners: re }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = l === "mouseover" || l === "pointerover", N = l === "mouseout" || l === "pointerout", H && u !== _i && (se = u.relatedTarget || u.fromElement) && (nl(se) || se[Bc]))
            break e;
          if ((N || H) && (H = Q.window === Q ? Q : (H = Q.ownerDocument) ? H.defaultView || H.parentWindow : window, N ? (se = u.relatedTarget || u.toElement, N = x, se = se ? nl(se) : null, se !== null && (Ke = J(se), re = se.tag, se !== Ke || re !== 5 && re !== 27 && re !== 6) && (se = null)) : (N = null, se = x), N !== se)) {
            if (re = Hh, L = "onMouseLeave", M = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (re = yf, L = "onPointerLeave", M = "onPointerEnter", D = "pointer"), Ke = N == null ? H : af(N), U = se == null ? H : af(se), H = new re(
              L,
              D + "leave",
              N,
              u,
              Q
            ), H.target = Ke, H.relatedTarget = U, L = null, nl(Q) === x && (re = new re(
              M,
              D + "enter",
              se,
              u,
              Q
            ), re.target = U, re.relatedTarget = Ke, L = re), Ke = L, N && se)
              t: {
                for (re = N, M = se, D = 0, U = re; U; U = si(U))
                  D++;
                for (U = 0, L = M; L; L = si(L))
                  U++;
                for (; 0 < D - U; )
                  re = si(re), D--;
                for (; 0 < U - D; )
                  M = si(M), U--;
                for (; D--; ) {
                  if (re === M || M !== null && re === M.alternate)
                    break t;
                  re = si(re), M = si(M);
                }
                re = null;
              }
            else re = null;
            N !== null && fs(
              Z,
              H,
              N,
              re,
              !1
            ), se !== null && Ke !== null && fs(
              Z,
              Ke,
              se,
              re,
              !0
            );
          }
        }
        e: {
          if (H = x ? af(x) : window, N = H.nodeName && H.nodeName.toLowerCase(), N === "select" || N === "input" && H.type === "file")
            var ee = Xh;
          else if (rr(H))
            if (Qh)
              ee = $h;
            else {
              ee = ju;
              var He = hr;
            }
          else
            N = H.nodeName, !N || N.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? x && Hi(x.elementType) && (ee = Xh) : ee = lu;
          if (ee && (ee = ee(l, x))) {
            dr(
              Z,
              ee,
              u,
              Q
            );
            break e;
          }
          He && He(l, H, x), l === "focusout" && x && H.type === "number" && x.memoizedProps.value != null && of(H, "number", H.value);
        }
        switch (He = x ? af(x) : window, l) {
          case "focusin":
            (rr(He) || He.contentEditable === "true") && (sn = He, Qa = x, Qu = null);
            break;
          case "focusout":
            Qu = Qa = sn = null;
            break;
          case "mousedown":
            Qi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qi = !1, yr(Z, u, Q);
            break;
          case "selectionchange":
            if (Xi) break;
          case "keydown":
          case "keyup":
            yr(Z, u, Q);
        }
        var oe;
        if (mf)
          e: {
            switch (l) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          Vu ? vf(l, u) && (ve = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ve = "onCompositionStart");
        ve && (on && u.locale !== "ko" && (Vu || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && Vu && (oe = xh()) : (eu = Q, wc = "value" in eu ? eu.value : eu.textContent, Vu = !0)), He = zo(x, ve), 0 < He.length && (ve = new Nh(
          ve,
          l,
          null,
          u,
          Q
        ), Z.push({ event: ve, listeners: He }), oe ? ve.data = oe : (oe = Gu(u), oe !== null && (ve.data = oe)))), (oe = Gh ? jh(l, u) : Vi(l, u)) && (ve = zo(x, "onBeforeInput"), 0 < ve.length && (He = new Nh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Q
        ), Z.push({
          event: He,
          listeners: ve
        }), He.data = oe)), A0(
          Z,
          l,
          x,
          u,
          Q
        );
      }
      mc(Z, n);
    });
  }
  function vu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function zo(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Ni(l, u), s != null && c.unshift(
        vu(l, s, r)
      ), s = Ni(l, n), s != null && c.push(
        vu(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function si(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function fs(l, n, u, c, s) {
    for (var r = n._reactName, y = []; u !== null && u !== c; ) {
      var m = u, S = m.alternate, x = m.stateNode;
      if (m = m.tag, S !== null && S === c) break;
      m !== 5 && m !== 26 && m !== 27 || x === null || (S = x, s ? (x = Ni(u, r), x != null && y.unshift(
        vu(u, x, S)
      )) : s || (x = Ni(u, r), x != null && y.push(
        vu(u, x, S)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var ra = /\r\n?/g, dm = /\u0000|\uFFFD/g;
  function E0(l) {
    return (typeof l == "string" ? l : "" + l).replace(ra, `
`).replace(dm, "");
  }
  function hm(l, n) {
    return n = E0(n), E0(l) === n;
  }
  function Dd() {
  }
  function Te(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Yc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Yc(l, "" + c);
        break;
      case "className":
        uf(l, "class", c);
        break;
      case "tabIndex":
        uf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        uf(l, u, c);
        break;
      case "style":
        ff(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          uf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = sf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Te(l, n, "name", s.name, s, null), Te(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Te(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Te(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Te(l, n, "encType", s.encType, s, null), Te(l, n, "method", s.method, s, null), Te(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = sf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Dd);
        break;
      case "onScroll":
        c != null && ze("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ze("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(b(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = sf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        ze("beforetoggle", l), ze("toggle", l), In(l, "popover", c);
        break;
      case "xlinkActuate":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        In(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Nv.get(u) || u, In(l, u, c));
    }
  }
  function q(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        ff(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(b(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Yc(l, c) : (typeof c == "number" || typeof c == "bigint") && Yc(l, "" + c);
        break;
      case "onScroll":
        c != null && ze("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ze("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Dd);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!aa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Ml] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : In(l, u, c);
          }
    }
  }
  function ge(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ze("error", l), ze("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(b(137, n));
                default:
                  Te(l, n, r, y, u, null);
              }
          }
        s && Te(l, n, "srcSet", u.srcSet, u, null), c && Te(l, n, "src", u.src, u, null);
        return;
      case "input":
        ze("invalid", l);
        var m = r = y = s = null, S = null, x = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var Q = u[c];
            if (Q != null)
              switch (c) {
                case "name":
                  s = Q;
                  break;
                case "type":
                  y = Q;
                  break;
                case "checked":
                  S = Q;
                  break;
                case "defaultChecked":
                  x = Q;
                  break;
                case "value":
                  r = Q;
                  break;
                case "defaultValue":
                  m = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(b(137, n));
                  break;
                default:
                  Te(l, n, c, Q, u, null);
              }
          }
        er(
          l,
          r,
          m,
          S,
          x,
          y,
          s,
          !1
        ), qu(l);
        return;
      case "select":
        ze("invalid", l), c = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (m = u[s], m != null))
            switch (s) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                y = m;
                break;
              case "multiple":
                c = m;
              default:
                Te(l, n, s, m, u, null);
            }
        n = r, u = y, l.multiple = !!c, n != null ? Ci(l, !!c, n, !1) : u != null && Ci(l, !!c, u, !0);
        return;
      case "textarea":
        ze("invalid", l), r = s = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (m = u[y], m != null))
            switch (y) {
              case "value":
                c = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(b(91));
                break;
              default:
                Te(l, n, y, m, u, null);
            }
        Mh(l, c, s, r), qu(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Te(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        ze("beforetoggle", l), ze("toggle", l), ze("cancel", l), ze("close", l);
        break;
      case "iframe":
      case "object":
        ze("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < os.length; c++)
          ze(os[c], l);
        break;
      case "image":
        ze("error", l), ze("load", l);
        break;
      case "details":
        ze("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ze("error", l), ze("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in u)
          if (u.hasOwnProperty(x) && (c = u[x], c != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, n));
              default:
                Te(l, n, x, c, u, null);
            }
        return;
      default:
        if (Hi(n)) {
          for (Q in u)
            u.hasOwnProperty(Q) && (c = u[Q], c !== void 0 && q(
              l,
              n,
              Q,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (m in u)
      u.hasOwnProperty(m) && (c = u[m], c != null && Te(l, n, m, c, u, null));
  }
  function $v(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, y = null, m = null, S = null, x = null, Q = null;
        for (N in u) {
          var Z = u[N];
          if (u.hasOwnProperty(N) && Z != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = Z;
              default:
                c.hasOwnProperty(N) || Te(l, n, N, null, c, Z);
            }
        }
        for (var H in c) {
          var N = c[H];
          if (Z = u[H], c.hasOwnProperty(H) && (N != null || Z != null))
            switch (H) {
              case "type":
                r = N;
                break;
              case "name":
                s = N;
                break;
              case "checked":
                x = N;
                break;
              case "defaultChecked":
                Q = N;
                break;
              case "value":
                y = N;
                break;
              case "defaultValue":
                m = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(b(137, n));
                break;
              default:
                N !== Z && Te(
                  l,
                  n,
                  H,
                  N,
                  c,
                  Z
                );
            }
        }
        Ps(
          l,
          y,
          m,
          S,
          x,
          Q,
          r,
          s
        );
        return;
      case "select":
        N = y = m = H = null;
        for (r in u)
          if (S = u[r], u.hasOwnProperty(r) && S != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                N = S;
              default:
                c.hasOwnProperty(r) || Te(
                  l,
                  n,
                  r,
                  null,
                  c,
                  S
                );
            }
        for (s in c)
          if (r = c[s], S = u[s], c.hasOwnProperty(s) && (r != null || S != null))
            switch (s) {
              case "value":
                H = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== S && Te(
                  l,
                  n,
                  s,
                  r,
                  c,
                  S
                );
            }
        n = m, u = y, c = N, H != null ? Ci(l, !!u, H, !1) : !!c != !!u && (n != null ? Ci(l, !!u, n, !0) : Ci(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        N = H = null;
        for (m in u)
          if (s = u[m], u.hasOwnProperty(m) && s != null && !c.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Te(l, n, m, null, c, s);
            }
        for (y in c)
          if (s = c[y], r = u[y], c.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                H = s;
                break;
              case "defaultValue":
                N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(b(91));
                break;
              default:
                s !== r && Te(l, n, y, s, c, r);
            }
        Oh(l, H, N);
        return;
      case "option":
        for (var se in u)
          if (H = u[se], u.hasOwnProperty(se) && H != null && !c.hasOwnProperty(se))
            switch (se) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Te(
                  l,
                  n,
                  se,
                  null,
                  c,
                  H
                );
            }
        for (S in c)
          if (H = c[S], N = u[S], c.hasOwnProperty(S) && H !== N && (H != null || N != null))
            switch (S) {
              case "selected":
                l.selected = H && typeof H != "function" && typeof H != "symbol";
                break;
              default:
                Te(
                  l,
                  n,
                  S,
                  H,
                  c,
                  N
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var re in u)
          H = u[re], u.hasOwnProperty(re) && H != null && !c.hasOwnProperty(re) && Te(l, n, re, null, c, H);
        for (x in c)
          if (H = c[x], N = u[x], c.hasOwnProperty(x) && H !== N && (H != null || N != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(b(137, n));
                break;
              default:
                Te(
                  l,
                  n,
                  x,
                  H,
                  c,
                  N
                );
            }
        return;
      default:
        if (Hi(n)) {
          for (var Ke in u)
            H = u[Ke], u.hasOwnProperty(Ke) && H !== void 0 && !c.hasOwnProperty(Ke) && q(
              l,
              n,
              Ke,
              void 0,
              c,
              H
            );
          for (Q in c)
            H = c[Q], N = u[Q], !c.hasOwnProperty(Q) || H === N || H === void 0 && N === void 0 || q(
              l,
              n,
              Q,
              H,
              c,
              N
            );
          return;
        }
    }
    for (var M in u)
      H = u[M], u.hasOwnProperty(M) && H != null && !c.hasOwnProperty(M) && Te(l, n, M, null, c, H);
    for (Z in c)
      H = c[Z], N = u[Z], !c.hasOwnProperty(Z) || H === N || H == null && N == null || Te(l, n, Z, H, c, N);
  }
  var ss = null, rs = null;
  function Na(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function gu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Do(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Nn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Oo = null;
  function bu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Oo ? !1 : (Oo = l, !0) : (Oo = null, !1);
  }
  var Od = typeof setTimeout == "function" ? setTimeout : void 0, Jv = typeof clearTimeout == "function" ? clearTimeout : void 0, R0 = typeof Promise == "function" ? Promise : void 0, Kv = typeof queueMicrotask == "function" ? queueMicrotask : typeof R0 < "u" ? function(l) {
    return R0.resolve(null).then(l).catch(Bn);
  } : Od;
  function Bn(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ri(l) {
    return l === "head";
  }
  function Md(l, n) {
    var u = n, c = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && Fl(y.documentElement), u & 2 && Fl(y.body), u & 4)
              for (u = y.head, Fl(u), y = u.firstChild; y; ) {
                var m = y.nextSibling, S = y.nodeName;
                y[ae] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = m;
              }
          }
          if (s === 0) {
            l.removeChild(r), Yn(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = r;
    } while (u);
    Yn(n);
  }
  function ds(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ds(u), lf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Mo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[ae])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Pa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function kv(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Pa(l.nextSibling), l === null)) return null;
    return l;
  }
  function hs(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Wv(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Pa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var di = null;
  function rl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function P(l, n, u) {
    switch (n = Na(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(b(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(b(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(b(454));
        return l;
      default:
        throw Error(b(451));
    }
  }
  function Fl(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    lf(l);
  }
  var Ut = /* @__PURE__ */ new Map(), Al = /* @__PURE__ */ new Set();
  function Ud(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Su = $.d;
  $.d = {
    f: xd,
    r: Cd,
    D: Tu,
    C: Hd,
    L: hi,
    m: El,
    X: yi,
    S: Il,
    M: ym
  };
  function xd() {
    var l = Su.f(), n = rc();
    return l || n;
  }
  function Cd(l) {
    var n = Oi(l);
    n !== null && n.tag === 5 && n.type === "form" ? uo(n) : Su.r(l);
  }
  var dl = typeof document > "u" ? null : document;
  function en(l, n, u) {
    var c = dl;
    if (c && typeof n == "string" && n) {
      var s = Sa(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Al.has(s) || (Al.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), ge(n, "link", l), Gt(n), c.head.appendChild(n)));
    }
  }
  function Tu(l) {
    Su.D(l), en("dns-prefetch", l, null);
  }
  function Hd(l, n) {
    Su.C(l, n), en("preconnect", l, n);
  }
  function hi(l, n, u) {
    Su.L(l, n, u);
    var c = dl;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + Sa(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + Sa(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + Sa(
        u.imageSizes
      ) + '"]')) : s += '[href="' + Sa(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Uo(l);
          break;
        case "script":
          r = Ba(l);
      }
      Ut.has(r) || (l = te(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ut.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(xo(r)) || n === "script" && c.querySelector(pc(r)) || (n = c.createElement("link"), ge(n, "link", l), Gt(n), c.head.appendChild(n)));
    }
  }
  function El(l, n) {
    Su.m(l, n);
    var u = dl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + Sa(c) + '"][href="' + Sa(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ba(l);
      }
      if (!Ut.has(r) && (l = te({ rel: "modulepreload", href: l }, n), Ut.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(pc(r)))
              return;
        }
        c = u.createElement("link"), ge(c, "link", l), Gt(c), u.head.appendChild(c);
      }
    }
  }
  function Il(l, n, u) {
    Su.S(l, n, u);
    var c = dl;
    if (c && l) {
      var s = Fn(c).hoistableStyles, r = Uo(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var m = { loading: 0, preload: null };
        if (y = c.querySelector(
          xo(r)
        ))
          m.loading = 5;
        else {
          l = te(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ut.get(r)) && Nd(l, u);
          var S = y = c.createElement("link");
          Gt(S), ge(S, "link", l), S._p = new Promise(function(x, Q) {
            S.onload = x, S.onerror = Q;
          }), S.addEventListener("load", function() {
            m.loading |= 1;
          }), S.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, _d(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: m
        }, s.set(r, y);
      }
    }
  }
  function yi(l, n) {
    Su.X(l, n);
    var u = dl;
    if (u && l) {
      var c = Fn(u).hoistableScripts, s = Ba(l), r = c.get(s);
      r || (r = u.querySelector(pc(s)), r || (l = te({ src: l, async: !0 }, n), (n = Ut.get(s)) && Bd(l, n), r = u.createElement("script"), Gt(r), ge(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function ym(l, n) {
    Su.M(l, n);
    var u = dl;
    if (u && l) {
      var c = Fn(u).hoistableScripts, s = Ba(l), r = c.get(s);
      r || (r = u.querySelector(pc(s)), r || (l = te({ src: l, async: !0, type: "module" }, n), (n = Ut.get(s)) && Bd(l, n), r = u.createElement("script"), Gt(r), ge(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function z0(l, n, u, c) {
    var s = (s = je.current) ? Ud(s) : null;
    if (!s) throw Error(b(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Uo(u.href), u = Fn(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Uo(u.href);
          var r = Fn(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            xo(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), Ut.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ut.set(l, u), r || D0(
            s,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(b(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(b(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ba(u), u = Fn(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(b(444, l));
    }
  }
  function Uo(l) {
    return 'href="' + Sa(l) + '"';
  }
  function xo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Co(l) {
    return te({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function D0(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), ge(n, "link", u), Gt(n), l.head.appendChild(n));
  }
  function Ba(l) {
    return '[src="' + Sa(l) + '"]';
  }
  function pc(l) {
    return "script[async]" + l;
  }
  function O0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Sa(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Gt(c), c;
          var s = te({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Gt(c), ge(c, "style", s), _d(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = Uo(u.href);
          var r = l.querySelector(
            xo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Gt(r), r;
          c = Co(u), (s = Ut.get(s)) && Nd(c, s), r = (l.ownerDocument || l).createElement("link"), Gt(r);
          var y = r;
          return y._p = new Promise(function(m, S) {
            y.onload = m, y.onerror = S;
          }), ge(r, "link", c), n.state.loading |= 4, _d(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ba(u.src), (s = l.querySelector(
            pc(r)
          )) ? (n.instance = s, Gt(s), s) : (c = u, (s = Ut.get(r)) && (c = te({}, u), Bd(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Gt(s), ge(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(b(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, _d(c, u.precedence, l));
    return n.instance;
  }
  function _d(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, y = 0; y < c.length; y++) {
      var m = c[y];
      if (m.dataset.precedence === n) r = m;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Nd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Bd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var mi = null;
  function mm(l, n, u) {
    if (mi === null) {
      var c = /* @__PURE__ */ new Map(), s = mi = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = mi, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[ae] || r[Kt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var m = c.get(y);
        m ? m.push(r) : c.set(y, [r]);
      }
    }
    return c;
  }
  function pm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function M0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function vm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Ho = null;
  function U0() {
  }
  function x0(l, n, u) {
    if (Ho === null) throw Error(b(475));
    var c = Ho;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Uo(u.href), r = l.querySelector(
          xo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = ys.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = r, Gt(r);
          return;
        }
        r = l.ownerDocument || l, u = Co(u), (s = Ut.get(s)) && Nd(u, s), r = r.createElement("link"), Gt(r);
        var y = r;
        y._p = new Promise(function(m, S) {
          y.onload = m, y.onerror = S;
        }), ge(r, "link", u), n.instance = r;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = ys.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function gm() {
    if (Ho === null) throw Error(b(475));
    var l = Ho;
    return l.stylesheets && l.count === 0 && ms(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && ms(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function ys() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) ms(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var _o = null;
  function ms(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, _o = /* @__PURE__ */ new Map(), n.forEach(da, l), _o = null, ys.call(l));
  }
  function da(l, n) {
    if (!(n.state.loading & 4)) {
      var u = _o.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), _o.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || c, r === c && u.set(null, s), u.set(y, s), this.count++, c = ys.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Pl = {
    $$typeof: xt,
    Provider: null,
    Consumer: null,
    _currentValue: k,
    _currentValue2: k,
    _threadCount: 0
  };
  function Fv(l, n, u, c, s, r, y, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Hu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hu(0), this.hiddenUpdates = Hu(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function bm(l, n, u, c, s, r, y, m, S, x, Q, Z) {
    return l = new Fv(
      l,
      n,
      u,
      y,
      m,
      S,
      x,
      Z
    ), n = 1, r === !0 && (n |= 24), r = Xl(3, null, null, n), l.current = r, r.stateNode = l, n = eo(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Dr(r), l;
  }
  function Sm(l) {
    return l ? (l = $c, l) : $c;
  }
  function Tm(l, n, u, c, s, r) {
    s = Sm(s), c.context === null ? c.context = s : c.pendingContext = s, c = Ll(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = bn(l, c, n), u !== null && (sa(u, l, n), ki(u, l, n));
  }
  function Am(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function qd(l, n) {
    Am(l, n), (l = l.alternate) && Am(l, n);
  }
  function Em(l) {
    if (l.tag === 13) {
      var n = hn(l, 67108864);
      n !== null && sa(n, l, 67108864), qd(l, 67108864);
    }
  }
  var ps = !0;
  function C0(l, n, u, c) {
    var s = O.T;
    O.T = null;
    var r = $.p;
    try {
      $.p = 2, Rm(l, n, u, c);
    } finally {
      $.p = r, O.T = s;
    }
  }
  function H0(l, n, u, c) {
    var s = O.T;
    O.T = null;
    var r = $.p;
    try {
      $.p = 8, Rm(l, n, u, c);
    } finally {
      $.p = r, O.T = s;
    }
  }
  function Rm(l, n, u, c) {
    if (ps) {
      var s = Yd(c);
      if (s === null)
        _a(
          l,
          n,
          c,
          Gd,
          u
        ), vc(l, c);
      else if (N0(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (vc(l, c), n & 4 && -1 < _0.indexOf(l)) {
        for (; s !== null; ) {
          var r = Oi(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = la(r.pendingLanes);
                  if (y !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Vl(y);
                      m.entanglements[1] |= S, y &= ~S;
                    }
                    Wl(r), (Ie & 6) === 0 && (yd = ta() + 500, as(0));
                  }
                }
                break;
              case 13:
                m = hn(r, 2), m !== null && sa(m, r, 2), rc(), qd(r, 2);
            }
          if (r = Yd(c), r === null && _a(
            l,
            n,
            c,
            Gd,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        _a(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Yd(l) {
    return l = lr(l), zm(l);
  }
  var Gd = null;
  function zm(l) {
    if (Gd = null, l = nl(l), l !== null) {
      var n = J(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = W(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Gd = l, null;
  }
  function Dm(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Io()) {
          case Ap:
            return 2;
          case Sh:
            return 8;
          case Po:
          case Th:
            return 32;
          case Hc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var No = !1, qn = null, Au = null, Eu = null, vs = /* @__PURE__ */ new Map(), gs = /* @__PURE__ */ new Map(), pi = [], _0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function vc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Au = null;
        break;
      case "mouseover":
      case "mouseout":
        Eu = null;
        break;
      case "pointerover":
      case "pointerout":
        vs.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gs.delete(n.pointerId);
    }
  }
  function gc(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Oi(n), n !== null && Em(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function N0(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return qn = gc(
          qn,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Au = gc(
          Au,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Eu = gc(
          Eu,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return vs.set(
          r,
          gc(
            vs.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, gs.set(
          r,
          gc(
            gs.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Om(l) {
    var n = nl(l.target);
    if (n !== null) {
      var u = J(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = W(u), n !== null) {
            l.blockedOn = n, Hv(l.priority, function() {
              if (u.tag === 13) {
                var c = fa();
                c = Va(c);
                var s = hn(u, c);
                s !== null && sa(s, u, c), qd(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function bs(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Yd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        _i = c, u.target.dispatchEvent(c), _i = null;
      } else
        return n = Oi(u), n !== null && Em(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Ss(l, n, u) {
    bs(l) && u.delete(n);
  }
  function Bo() {
    No = !1, qn !== null && bs(qn) && (qn = null), Au !== null && bs(Au) && (Au = null), Eu !== null && bs(Eu) && (Eu = null), vs.forEach(Ss), gs.forEach(Ss);
  }
  function Vd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, No || (No = !0, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      Bo
    )));
  }
  var bc = null;
  function Mm(l) {
    bc !== l && (bc = l, T.unstable_scheduleCallback(
      T.unstable_NormalPriority,
      function() {
        bc === l && (bc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (zm(c || u) === null)
              continue;
            break;
          }
          var r = Oi(u);
          r !== null && (l.splice(n, 3), n -= 3, $r(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Yn(l) {
    function n(S) {
      return Vd(S, l);
    }
    qn !== null && Vd(qn, l), Au !== null && Vd(Au, l), Eu !== null && Vd(Eu, l), vs.forEach(n), gs.forEach(n);
    for (var u = 0; u < pi.length; u++) {
      var c = pi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < pi.length && (u = pi[0], u.blockedOn === null); )
      Om(u), u.blockedOn === null && pi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], y = s[Ml] || null;
        if (typeof r == "function")
          y || Mm(u);
        else if (y) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[Ml] || null)
              m = y.formAction;
            else if (zm(s) !== null) continue;
          } else m = y.action;
          typeof m == "function" ? u[c + 1] = m : (u.splice(c, 3), c -= 3), Mm(u);
        }
      }
  }
  function Um(l) {
    this._internalRoot = l;
  }
  jd.prototype.render = Um.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(b(409));
    var u = n.current, c = fa();
    Tm(u, c, l, n, null, null);
  }, jd.prototype.unmount = Um.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Tm(l.current, 2, null, l, null, null), rc(), n[Bc] = null;
    }
  };
  function jd(l) {
    this._internalRoot = l;
  }
  jd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Dp();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < pi.length && n !== 0 && n < pi[u].priority; u++) ;
      pi.splice(u, 0, l), u === 0 && Om(l);
    }
  };
  var xm = p.version;
  if (xm !== "19.1.0")
    throw Error(
      b(
        527,
        xm,
        "19.1.0"
      )
    );
  $.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(b(188)) : (l = Object.keys(l).join(","), Error(b(268, l)));
    return l = w(n), l = l !== null ? de(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Nl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ts = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ts.isDisabled && Ts.supportsFiber)
      try {
        _c = Ts.inject(
          Nl
        ), Ol = Ts;
      } catch {
      }
  }
  return yp.createRoot = function(l, n) {
    if (!B(l)) throw Error(b(299));
    var u = !1, c = "", s = oo, r = Oy, y = $f, m = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (m = n.unstable_transitionCallbacks)), n = bm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      s,
      r,
      y,
      m,
      null
    ), l[Bc] = n.current, rm(l), new Um(n);
  }, yp.hydrateRoot = function(l, n, u) {
    if (!B(l)) throw Error(b(299));
    var c = !1, s = "", r = oo, y = Oy, m = $f, S = null, x = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (m = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (x = u.formState)), n = bm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      r,
      y,
      m,
      S,
      x
    ), n.context = Sm(null), u = n.current, c = fa(), c = Va(c), s = Ll(c), s.callback = null, bn(u, s, c), u = c, n.current.lanes = u, Di(n, u), Wl(n), l[Bc] = n.current, rm(l), new jd(n);
  }, yp.version = "19.1.0", yp;
}
var mp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zS;
function VT() {
  return zS || (zS = 1, process.env.NODE_ENV !== "production" && function() {
    function T(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function p(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Te(e) ? e.slice() : xe({}, e);
      return f[o] = p(e[o], t, a + 1, i), f;
    }
    function R(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return b(e, t, a, 0);
      }
    }
    function b(e, t, a, i) {
      var o = t[i], f = Te(e) ? e.slice() : xe({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Te(f) ? f.splice(o, 1) : delete f[o]) : f[o] = b(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function B(e, t, a) {
      var i = t[a], o = Te(e) ? e.slice() : xe({}, e);
      return a + 1 === t.length ? (Te(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = B(e[i], t, a + 1), o);
    }
    function J() {
      return !1;
    }
    function W() {
      return null;
    }
    function ce() {
    }
    function w() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function de() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function te() {
    }
    function le(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function he(e, t, a, i) {
      return new pf(e, t, a, i);
    }
    function Se(e, t) {
      e.context === qo && (et(e.current, 2, t, e, null, null), uc());
    }
    function Me(e, t) {
      if (Vn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, fo(), mf(
          e.current,
          t,
          a
        ), uc();
      }
    }
    function pl(e) {
      Vn = e;
    }
    function dt(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ut(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function ga(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function xt(e) {
      if (ut(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function vl(e) {
      var t = e.alternate;
      if (!t) {
        if (t = ut(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return xt(o), e;
            if (f === i) return xt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Gl(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Gl(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Ct(e) {
      return e === null || typeof e != "object" ? null : (e = hm && e[hm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Ze(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Dd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ze:
          return "Fragment";
        case Ro:
          return "Profiler";
        case Eo:
          return "StrictMode";
        case zo:
          return "Suspense";
        case si:
          return "SuspenseList";
        case dm:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case mc:
            return "Portal";
          case _a:
            return (e.displayName || "Context") + ".Provider";
          case zd:
            return (e._context.displayName || "Context") + ".Consumer";
          case vu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case fs:
            return t = e.displayName || null, t !== null ? t : Ze(e.type) || "Memo";
          case ra:
            t = e._payload, e = e._init;
            try {
              return Ze(e(t));
            } catch {
            }
        }
      return null;
    }
    function Zt(e) {
      return typeof e.tag == "number" ? fe(e) : typeof e.name == "string" ? e.name : null;
    }
    function fe(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ze(t);
        case 8:
          return t === Eo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return fe(e.return);
      }
      return null;
    }
    function St(e) {
      return { current: e };
    }
    function We(e, t) {
      0 > Na ? console.error("Unexpected pop.") : (t !== rs[Na] && console.error("Unexpected Fiber popped."), e.current = ss[Na], ss[Na] = null, rs[Na] = null, Na--);
    }
    function Ee(e, t, a) {
      Na++, ss[Na] = e.current, rs[Na] = a, e.current = t;
    }
    function $t(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Dl(e, t) {
      Ee(Nn, t, e), Ee(Do, e, e), Ee(gu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Pe(t) : Uc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Pe(t), t = Kl(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = yh;
                break;
              case "math":
                t = sv;
                break;
              default:
                t = Uc;
            }
      }
      a = a.toLowerCase(), a = Oh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, We(gu, e), Ee(gu, a, e);
    }
    function qt(e) {
      We(gu, e), We(Do, e), We(Nn, e);
    }
    function O() {
      return $t(gu.current);
    }
    function $(e) {
      e.memoizedState !== null && Ee(Oo, e, e);
      var t = $t(gu.current), a = e.type, i = Kl(t.context, a);
      a = Oh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ee(Do, e, e), Ee(gu, i, e));
    }
    function k(e) {
      Do.current === e && (We(gu, e), We(Do, e)), Oo.current === e && (We(Oo, e), op._currentValue = Vs);
    }
    function ye(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function Y(e) {
      try {
        return ie(e), !1;
      } catch {
        return !0;
      }
    }
    function ie(e) {
      return "" + e;
    }
    function I(e, t) {
      if (Y(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ye(e)
        ), ie(e);
    }
    function me(e, t) {
      if (Y(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ye(e)
        ), ie(e);
    }
    function Ne(e) {
      if (Y(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ye(e)
        ), ie(e);
    }
    function ct(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        di = t.inject(e), rl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function je(e) {
      if (typeof Wv == "function" && Pa(e), rl && typeof rl.setStrictMode == "function")
        try {
          rl.setStrictMode(di, e);
        } catch (t) {
          Fl || (Fl = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Uu(e) {
      P = e;
    }
    function Tt() {
      P !== null && typeof P.markCommitStopped == "function" && P.markCommitStopped();
    }
    function al(e) {
      P !== null && typeof P.markComponentRenderStarted == "function" && P.markComponentRenderStarted(e);
    }
    function ba() {
      P !== null && typeof P.markComponentRenderStopped == "function" && P.markComponentRenderStopped();
    }
    function Ai(e) {
      P !== null && typeof P.markRenderStarted == "function" && P.markRenderStarted(e);
    }
    function Js() {
      P !== null && typeof P.markRenderStopped == "function" && P.markRenderStopped();
    }
    function Ei(e, t) {
      P !== null && typeof P.markStateUpdateScheduled == "function" && P.markStateUpdateScheduled(e, t);
    }
    function bh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Ud(e) / Su | 0) | 0;
    }
    function Uv(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Ri(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function ta(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ri(i) : (d &= h, d !== 0 ? o = Ri(d) : a || (a = h & ~e, a !== 0 && (o = Ri(a))))) : (h = i & ~f, h !== 0 ? o = Ri(h) : d !== 0 ? o = Ri(d) : a || (a = i & ~e, a !== 0 && (o = Ri(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function Io(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ap(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Sh() {
      var e = xd;
      return xd <<= 1, (xd & 4194048) === 0 && (xd = 256), e;
    }
    function Po() {
      var e = Cd;
      return Cd <<= 1, (Cd & 62914560) === 0 && (Cd = 4194304), e;
    }
    function Th(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Hc(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function xv(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, v = e.expirationTimes, g = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var _ = 31 - Al(a), V = 1 << _;
        h[_] = 0, v[_] = -1;
        var C = g[_];
        if (C !== null)
          for (g[_] = null, _ = 0; _ < C.length; _++) {
            var j = C[_];
            j !== null && (j.lane &= -536870913);
          }
        a &= ~V;
      }
      i !== 0 && Ep(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Ep(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Al(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function _c(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Al(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Ol(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function kn(e, t, a) {
      if (Ut)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Al(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Vl(e, t) {
      if (Ut)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Al(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Ah(e) {
      return e &= -e, dl < e ? en < e ? (e & 134217727) !== 0 ? Tu : Hd : en : dl;
    }
    function Rp() {
      var e = ge.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Tu : Ed(e.type));
    }
    function Cv(e, t) {
      var a = ge.p;
      try {
        return ge.p = e, t();
      } finally {
        ge.p = a;
      }
    }
    function Nc(e) {
      delete e[El], delete e[Il], delete e[ym], delete e[z0], delete e[Uo];
    }
    function Wn(e) {
      var t = e[El];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yi] || a[El]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = bo(e); e !== null; ) {
              if (a = e[El])
                return a;
              e = bo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function la(e) {
      if (e = e[El] || e[yi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function xu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function nn(e) {
      var t = e[xo];
      return t || (t = e[xo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Jt(e) {
      e[Co] = !0;
    }
    function Cu(e, t) {
      zi(e, t), zi(e + "Capture", t);
    }
    function zi(e, t) {
      Ba[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ba[e] = t;
      var a = e.toLowerCase();
      for (pc[a] = e, e === "onDoubleClick" && (pc.ondblclick = e), e = 0; e < t.length; e++)
        D0.add(t[e]);
    }
    function Hu(e, t) {
      O0[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Di(e) {
      return bu.call(Bd, e) ? !0 : bu.call(Nd, e) ? !1 : _d.test(e) ? Bd[e] = !0 : (Nd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function zp(e, t, a) {
      if (Di(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (I(a, t), e === "" + a ? a : e);
      }
    }
    function ef(e, t, a) {
      if (Di(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          I(a, t), e.setAttribute(t, "" + a);
        }
    }
    function tf(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        I(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Va(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        I(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Ks() {
    }
    function Dp() {
      if (mi === 0) {
        mm = console.log, pm = console.info, M0 = console.warn, vm = console.error, Ho = console.group, U0 = console.groupCollapsed, x0 = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ks,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      mi++;
    }
    function Hv() {
      if (mi--, mi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: xe({}, e, { value: mm }),
          info: xe({}, e, { value: pm }),
          warn: xe({}, e, { value: M0 }),
          error: xe({}, e, { value: vm }),
          group: xe({}, e, { value: Ho }),
          groupCollapsed: xe({}, e, { value: U0 }),
          groupEnd: xe({}, e, { value: x0 })
        });
      }
      0 > mi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function Yt(e) {
      if (gm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          gm = t && t[1] || "", ys = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + gm + e + ys;
    }
    function Kt(e, t) {
      if (!e || _o) return "";
      var a = ms.get(e);
      if (a !== void 0) return a;
      _o = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = q.H, q.H = null, Dp();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var C = function() {
                  throw Error();
                };
                if (Object.defineProperty(C.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(C, []);
                  } catch (ne) {
                    var j = ne;
                  }
                  Reflect.construct(e, [], C);
                } else {
                  try {
                    C.call();
                  } catch (ne) {
                    j = ne;
                  }
                  e.call(C.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ne) {
                  j = ne;
                }
                (C = e()) && typeof C.catch == "function" && C.catch(function() {
                });
              }
            } catch (ne) {
              if (ne && j && typeof ne.stack == "string")
                return [ne.stack, j.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], v = d[1];
        if (h && v) {
          var g = h.split(`
`), _ = v.split(`
`);
          for (d = f = 0; f < g.length && !g[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < _.length && !_[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === g.length || d === _.length)
            for (f = g.length - 1, d = _.length - 1; 1 <= f && 0 <= d && g[f] !== _[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (g[f] !== _[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || g[f] !== _[d]) {
                    var V = `
` + g[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", e.displayName)), typeof e == "function" && ms.set(e, V), V;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        _o = !1, q.H = i, Hv(), Error.prepareStackTrace = a;
      }
      return g = (g = e ? e.displayName || e.name : "") ? Yt(g) : "", typeof e == "function" && ms.set(e, g), g;
    }
    function Ml(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Bc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Yt(e.type);
        case 16:
          return Yt("Lazy");
        case 13:
          return Yt("Suspense");
        case 19:
          return Yt("SuspenseList");
        case 0:
        case 15:
          return Kt(e.type, !1);
        case 11:
          return Kt(e.type.render, !1);
        case 1:
          return Kt(e.type, !0);
        case 31:
          return Yt("Activity");
        default:
          return "";
      }
    }
    function ks(e) {
      try {
        var t = "";
        do {
          t += Bc(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = Yt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (v) {
        return `
Error generating stack: ` + v.message + `
` + v.stack;
      }
    }
    function Op(e) {
      return (e = e ? e.displayName || e.name : "") ? Yt(e) : "";
    }
    function Ws() {
      if (da === null) return null;
      var e = da._debugOwner;
      return e != null ? Zt(e) : null;
    }
    function Mp() {
      if (da === null) return "";
      var e = da;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += Yt(e.type);
            break;
          case 13:
            t += Yt("Suspense");
            break;
          case 19:
            t += Yt("SuspenseList");
            break;
          case 31:
            t += Yt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += Op(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += Op(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Ml(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Ml(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function ae(e, t, a, i, o, f, d) {
      var h = da;
      lf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        lf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function lf(e) {
      q.getCurrentStack = e === null ? null : Mp, Pl = !1, da = e;
    }
    function nl(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ne(e), e;
        default:
          return "";
      }
    }
    function Oi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function af(e) {
      var t = Oi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Ne(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Ne(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            Ne(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Fn(e) {
      e._valueTracker || (e._valueTracker = af(e));
    }
    function Gt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Oi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function nf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function aa(e) {
      return e.replace(
        Fv,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function _u(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Sm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ws() || "A component",
        t.type
      ), Sm = !0), t.value === void 0 || t.defaultValue === void 0 || bm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ws() || "A component",
        t.type
      ), bm = !0);
    }
    function Nu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (I(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + nl(t)) : e.value !== "" + nl(t) && (e.value = "" + nl(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Fs(e, d, nl(t)) : a != null ? Fs(e, d, nl(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (I(h, "name"), e.name = "" + nl(h)) : e.removeAttribute("name");
    }
    function Up(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (I(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + nl(a) : "", t = t != null ? "" + nl(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (I(d, "name"), e.name = d);
    }
    function Fs(e, t, a) {
      t === "number" && nf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Eh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? cs.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Am || (Am = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || qd || (qd = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Tm || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Tm = !0);
    }
    function xp() {
      var e = Ws();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function In(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + nl(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function uf(e, t) {
      for (e = 0; e < ps.length; e++) {
        var a = ps[e];
        if (t[a] != null) {
          var i = Te(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            xp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            xp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Em || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Em = !0);
    }
    function un(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || C0 || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        Ws() || "A component"
      ), C0 = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Is(e, t, a) {
      if (t != null && (t = "" + nl(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + nl(a) : "";
    }
    function Rh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Te(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = nl(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Mi(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Mi(e.children[0], t) : e;
    }
    function Ul(e) {
      return "  " + "  ".repeat(e);
    }
    function Bu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Ui(e) {
      return "- " + "  ".repeat(e);
    }
    function zh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function gl(e, t) {
      return H0.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function cf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Bu(a) + gl(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Bu(a) + gl(e, i) + `
` + Ui(a) + gl(t, i) + `
`;
      }
      return Ul(a) + gl(e, i) + `
`;
    }
    function Dh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function qu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Te(e)) return "[...]";
          if (e.$$typeof === fi)
            return (t = Ze(e.type)) ? "<" + t + ">" : "<...>";
          var a = Dh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = qu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function xi(e, t) {
      return typeof e != "string" || H0.test(e) ? "{" + qu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function qc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = xi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function _v(e, t, a) {
      var i = "", o = xe({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = qu(e[f], d);
          t.hasOwnProperty(f) ? (d = qu(t[f], d), i += Bu(a) + f + ": " + h + `
`, i += Ui(a) + f + ": " + d + `
`) : i += Bu(a) + f + ": " + h + `
`;
        }
      for (var v in o)
        o.hasOwnProperty(v) && (e = qu(
          o[v],
          120 - 2 * a - v.length - 2
        ), i += Ui(a) + v + ": " + e + `
`);
      return i;
    }
    function Sa(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (g in a)
        a.hasOwnProperty(g) && f.set(
          g.toLowerCase(),
          g
        );
      if (f.size === 1 && f.has("children"))
        o += qc(
          e,
          t,
          Ul(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, v = f.get(d.toLowerCase());
            if (v !== void 0) {
              f.delete(d.toLowerCase());
              var g = t[d];
              v = a[v];
              var _ = xi(
                g,
                h
              );
              h = xi(
                v,
                h
              ), typeof g == "object" && g !== null && typeof v == "object" && v !== null && Dh(g) === "Object" && Dh(v) === "Object" && (2 < Object.keys(g).length || 2 < Object.keys(v).length || -1 < _.indexOf("...") || -1 < h.indexOf("...")) ? o += Ul(i + 1) + d + `={{
` + _v(
                g,
                v,
                i + 2
              ) + Ul(i + 1) + `}}
` : (o += Bu(i + 1) + d + "=" + _ + `
`, o += Ui(i + 1) + d + "=" + h + `
`);
            } else
              o += Ul(i + 1) + d + "=" + xi(t[d], h) + `
`;
          }
        f.forEach(function(V) {
          if (V !== "children") {
            var C = 120 - 2 * (i + 1) - V.length - 1;
            o += Ui(i + 1) + V + "=" + xi(a[V], C) + `
`;
          }
        }), o = o === "" ? Ul(i) + "<" + e + `>
` : Ul(i) + "<" + e + `
` + o + Ul(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += cf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + cf("" + t, null, i + 1) : o + cf("" + t, void 0, i + 1)), o;
    }
    function Ps(e, t) {
      var a = zh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Ps(e, t), e = e.sibling;
        return a;
      }
      return Ul(t) + "<" + a + `>
`;
    }
    function er(e, t) {
      var a = Mi(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ul(t) + `...
` + er(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ul(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = cf(o, e.serverProps, t), t++;
      else if (f = zh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (g in o)
            if (o.hasOwnProperty(g) && g !== "children") {
              var v = xi(o[g], 15);
              if (d -= g.length + v.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + g + "=" + v;
            }
          i = Ul(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = qc(
            f,
            o,
            Bu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Sa(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var g = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (g += er(d, t), f++) : g += Ps(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (g += Ul(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], g = typeof f == "string" ? g + (Ui(t) + gl(f, 120 - 2 * t) + `
`) : g + qc(
          f.type,
          f.props,
          Ui(t)
        );
      return a + i + g;
    }
    function of(e) {
      try {
        return `

` + er(e, 0);
      } catch {
        return "";
      }
    }
    function Ci(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? of(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Oh(e, t) {
      var a = xe({}, e || Dm), i = { tag: t };
      return Yd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Gd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Rm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Mh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return zm.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Yc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Cp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function tr(e, t) {
      t = t || Dm;
      var a = t.current;
      if (t = (a = Mh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Yc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, No[t]) return !1;
      No[t] = !0;
      var o = (t = da) ? Cp(t.return, i) : null, f = t !== null && o !== null ? Ci(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ae(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function ff(e, t, a) {
      if (a || Mh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, No[a]) return !1;
      No[a] = !0;
      var i = (a = da) ? Cp(a, t) : null;
      return a = a !== null && i !== null ? Ci(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Hi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Nv(e) {
      return e.replace(pi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Hp(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? vc.hasOwnProperty(t) && vc[t] || (vc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Nv(t.replace(gs, "ms-"))
      )) : vs.test(t) ? vc.hasOwnProperty(t) && vc[t] || (vc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !_0.test(a) || gc.hasOwnProperty(a) && gc[a] || (gc[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(_0, "")
      )), typeof a == "number" && (isNaN(a) ? N0 || (N0 = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Om || (Om = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || bs.has(t) ? t === "float" ? e.cssFloat = a : (me(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function sf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = qn[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = qn[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var v in t)
            for (o = qn[v] || [v], f = 0; f < o.length; f++)
              h[o[f]] = v;
          v = {};
          for (var g in i)
            if (o = i[g], (f = h[g]) && o !== f && (d = o + "," + f, !v[d])) {
              v[d] = !0, d = console;
              var _ = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                _ == null || typeof _ == "boolean" || _ === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var V in a)
          !a.hasOwnProperty(V) || t != null && t.hasOwnProperty(V) || (V.indexOf("--") === 0 ? e.setProperty(V, "") : V === "float" ? e.cssFloat = "" : e[V] = "");
        for (var C in t)
          g = t[C], t.hasOwnProperty(C) && a[C] !== g && Hp(e, C, g);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Hp(e, i, t[i]);
    }
    function _i(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function lr(e) {
      return Vd.get(e) || e;
    }
    function Gc(e, t) {
      if (bu.call(Yn, t) && Yn[t])
        return !0;
      if (jd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Mm.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Yn[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Yn[t] = !0;
      }
      if (Um.test(t)) {
        if (e = t.toLowerCase(), e = Mm.hasOwnProperty(e) ? e : null, e == null) return Yn[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Yn[t] = !0);
      }
      return !0;
    }
    function Vc(e, t) {
      var a = [], i;
      for (i in t)
        Gc(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function _p(e, t, a, i) {
      if (bu.call(Nl, t) && Nl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Nl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Nl[t] = !0;
        if (Ts.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Nl[t] = !0;
      } else if (Ts.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Nl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Nl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Nl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Nl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Nl[t] = !0;
      if (bc.hasOwnProperty(o)) {
        if (o = bc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Nl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Nl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Nl[t] = !0);
          }
        case "function":
        case "symbol":
          return Nl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Nl[t] = !0;
          }
      }
      return !0;
    }
    function Uh(e, t, a) {
      var i = [], o;
      for (o in t)
        _p(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function jc(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ni(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function cn(e) {
      var t = la(e);
      if (t && (e = t.stateNode)) {
        var a = e[Il] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Nu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (I(t, "name"), a = a.querySelectorAll(
                'input[name="' + aa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Il] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Nu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Gt(i);
            }
            break e;
          case "textarea":
            Is(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && In(e, !!a.multiple, t, !1);
        }
      }
    }
    function ar(e, t, a) {
      if (m) return e(t, a);
      m = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (m = !1, (r !== null || y !== null) && (uc(), r && (t = r, e = y, y = r = null, cn(t), e)))
          for (t = 0; t < e.length; t++) cn(e[t]);
      }
    }
    function Pn(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Il] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function eu() {
      if (N) return N;
      var e, t = H, a = t.length, i, o = "value" in Z ? Z.value : Z.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return N = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function wc(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Bi() {
      return !0;
    }
    function xh() {
      return !1;
    }
    function ul(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Bi : xh, this.isPropagationStopped = xh, this;
      }
      return xe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Bi);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Bi);
        },
        persist: function() {
        },
        isPersistent: Bi
      }), t;
    }
    function nr(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = LS[e]) ? !!t[e] : !1;
    }
    function ur() {
      return nr;
    }
    function xl(e, t) {
      switch (e) {
        case "keyup":
          return l2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== s1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Yu(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function ir(e, t) {
      switch (e) {
        case "compositionend":
          return Yu(t);
        case "keypress":
          return t.which !== d1 ? null : (y1 = !0, h1);
        case "textInput":
          return e = t.data, e === h1 && y1 ? null : e;
        default:
          return null;
      }
    }
    function rf(e, t) {
      if (wd)
        return e === "compositionend" || !Pv && xl(e, t) ? (e = eu(), N = H = Z = null, wd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return r1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Np(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!n2[e.type] : t === "textarea";
    }
    function Ch(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function cr(e, t, a, i) {
      r ? y ? y.push(i) : y = [i] : r = i, t = If(t, "onChange"), 0 < t.length && (a = new re(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function df(e) {
      Mn(e, 0);
    }
    function qi(e) {
      var t = xu(e);
      if (Gt(t)) return e;
    }
    function Hh(e, t) {
      if (e === "change") return t;
    }
    function Bp() {
      Hm && (Hm.detachEvent("onpropertychange", qp), _m = Hm = null);
    }
    function qp(e) {
      if (e.propertyName === "value" && qi(_m)) {
        var t = [];
        cr(
          t,
          _m,
          e,
          Ni(e)
        ), ar(df, t);
      }
    }
    function Bv(e, t, a) {
      e === "focusin" ? (Bp(), Hm = t, _m = a, Hm.attachEvent("onpropertychange", qp)) : e === "focusout" && Bp();
    }
    function _h(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return qi(_m);
    }
    function qv(e, t) {
      if (e === "click") return qi(t);
    }
    function Yv(e, t) {
      if (e === "input" || e === "change")
        return qi(t);
    }
    function Gv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function hf(e, t) {
      if (ha(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!bu.call(t, o) || !ha(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Yp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Nh(e, t) {
      var a = Yp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Yp(a);
      }
    }
    function Gp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Vp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = nf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = nf(e.document);
      }
      return t;
    }
    function Bh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function jp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      tg || Xd == null || Xd !== nf(i) || (i = Xd, "selectionStart" in i && Bh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Nm && hf(Nm, i) || (Nm = i, i = If(eg, "onSelect"), 0 < i.length && (t = new re(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Xd)));
    }
    function tu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Yi(e) {
      if (lg[e]) return lg[e];
      if (!Qd[e]) return e;
      var t = Qd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in p1)
          return lg[e] = t[a];
      return e;
    }
    function ja(e, t) {
      T1.set(e, t), Cu(t, [e]);
    }
    function na(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = ng.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: ks(t)
        }, ng.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ks(t)
      };
    }
    function yf() {
      for (var e = Ld, t = ug = Ld = 0; t < e; ) {
        var a = Gn[t];
        Gn[t++] = null;
        var i = Gn[t];
        Gn[t++] = null;
        var o = Gn[t];
        Gn[t++] = null;
        var f = Gn[t];
        if (Gn[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && wp(a, o, f);
      }
    }
    function or(e, t, a, i) {
      Gn[Ld++] = e, Gn[Ld++] = t, Gn[Ld++] = a, Gn[Ld++] = i, ug |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function qh(e, t, a, i) {
      return or(e, t, a, i), fr(e);
    }
    function jl(e, t) {
      return or(e, null, null, t), fr(e);
    }
    function wp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & B0 || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Al(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function fr(e) {
      if (lp > O2)
        throw Ns = lp = 0, ap = Bg = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Ns > M2 && (Ns = 0, ap = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Ia(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Ia(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Gi(e) {
      if (Vn === null) return e;
      var t = Vn(e);
      return t === void 0 ? e : t.current;
    }
    function Yh(e) {
      if (Vn === null) return e;
      var t = Vn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Gi(e.render), e.render !== t) ? (t = { $$typeof: vu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Xp(e, t) {
      if (Vn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ra) && (i = !0);
          break;
        case 11:
          (o === vu || o === ra) && (i = !0);
          break;
        case 14:
        case 15:
          (o === fs || o === ra) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Vn(a), e !== void 0 && e === Vn(t)));
    }
    function Qp(e) {
      Vn !== null && typeof WeakSet == "function" && (Zd === null && (Zd = /* @__PURE__ */ new WeakSet()), Zd.add(e));
    }
    function mf(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, v = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          v = h;
          break;
        case 11:
          v = h.render;
      }
      if (Vn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var g = !1;
      h = !1, v !== null && (v = Vn(v), v !== void 0 && (a.has(v) ? h = !0 : t.has(v) && (d === 1 ? h = !0 : g = !0))), Zd !== null && (Zd.has(e) || i !== null && Zd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || g) && (i = jl(e, 2), i !== null && Rt(i, e, 2)), o === null || h || mf(
        o,
        t,
        a
      ), f !== null && mf(
        f,
        t,
        a
      );
    }
    function pf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, E1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Gh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function on(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = he(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Gi(e.type);
          break;
        case 1:
          a.type = Gi(e.type);
          break;
        case 11:
          a.type = Yh(e.type);
      }
      return a;
    }
    function Vh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function sr(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Gh(e) && (d = 1), h = Gi(h);
      else if (typeof e == "string")
        d = O(), d = To(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case dm:
            return t = he(31, a, t, o), t.elementType = dm, t.lanes = f, t;
          case ze:
            return Gu(
              a.children,
              o,
              f,
              t
            );
          case Eo:
            d = 8, o |= ea, o |= Ru;
            break;
          case Ro:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = he(12, e, t, i | Bl), t.elementType = Ro, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case zo:
            return t = he(13, a, t, o), t.elementType = zo, t.lanes = f, t;
          case si:
            return t = he(19, a, t, o), t.elementType = si, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case rm:
                case _a:
                  d = 10;
                  break e;
                case zd:
                  d = 9;
                  break e;
                case vu:
                  d = 11, h = Yh(h);
                  break e;
                case fs:
                  d = 14;
                  break e;
                case ra:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Te(e) ? a = "array" : e !== void 0 && e.$$typeof === fi ? (a = "<" + (Ze(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Zt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = he(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function vf(e, t, a) {
      return t = sr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Gu(e, t, a, i) {
      return e = he(7, e, i, t), e.lanes = a, e;
    }
    function Vu(e, t, a) {
      return e = he(6, e, null, t), e.lanes = a, e;
    }
    function jh(e, t, a) {
      return t = he(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Vi(e, t) {
      wa(), $d[Jd++] = Y0, $d[Jd++] = q0, q0 = e, Y0 = t;
    }
    function Lp(e, t, a) {
      wa(), jn[wn++] = Tc, jn[wn++] = Ac, jn[wn++] = As, As = e;
      var i = Tc;
      e = Ac;
      var o = 32 - Al(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Al(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Tc = 1 << 32 - Al(t) + o | a << o | i, Ac = f + e;
      } else
        Tc = 1 << f | a << o | i, Ac = e;
    }
    function rr(e) {
      wa(), e.return !== null && (Vi(e, 1), Lp(e, 1, 0));
    }
    function dr(e) {
      for (; e === q0; )
        q0 = $d[--Jd], $d[Jd] = null, Y0 = $d[--Jd], $d[Jd] = null;
      for (; e === As; )
        As = jn[--wn], jn[wn] = null, Ac = jn[--wn], jn[wn] = null, Tc = jn[--wn], jn[wn] = null;
    }
    function wa() {
      ke || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Xa(e, t) {
      if (e.return === null) {
        if (Xn === null)
          Xn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Xn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Xn.distanceFromLeaf > t && (Xn.distanceFromLeaf = t);
        }
        return Xn;
      }
      var a = Xa(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function wh(e, t) {
      Ec || (e = Xa(e, 0), e.serverProps = null, t !== null && (t = md(t), e.serverTail.push(t)));
    }
    function fn(e) {
      var t = "", a = Xn;
      throw a !== null && (Xn = null, t = of(a)), Xc(
        na(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), ig;
    }
    function Xh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[El] = e, t[Il] = i, Un(a, i), a) {
        case "dialog":
          Be("cancel", t), Be("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Be("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < np.length; a++)
            Be(np[a], t);
          break;
        case "source":
          Be("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Be("error", t), Be("load", t);
          break;
        case "details":
          Be("toggle", t);
          break;
        case "input":
          Hu("input", i), Be("invalid", t), _u(t, i), Up(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), Fn(t);
          break;
        case "option":
          Eh(t, i);
          break;
        case "select":
          Hu("select", i), Be("invalid", t), uf(t, i);
          break;
        case "textarea":
          Hu("textarea", i), Be("invalid", t), un(t, i), Rh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), Fn(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Ly(t.textContent, a) ? (i.popover != null && (Be("beforetoggle", t), Be("toggle", t)), i.onScroll != null && Be("scroll", t), i.onScrollEnd != null && Be("scrollend", t), i.onClick != null && (t.onclick = hu), t = !0) : t = !1, t || fn(e);
    }
    function Qh(e) {
      for (ya = e.return; ya; )
        switch (ya.tag) {
          case 5:
          case 13:
            gi = !1;
            return;
          case 27:
          case 3:
            gi = !0;
            return;
          default:
            ya = ya.return;
        }
    }
    function ji(e) {
      if (e !== ya) return !1;
      if (!ke)
        return Qh(e), ke = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || xn(e.type, e.memoizedProps)), a = !a), a && Nt) {
        for (a = Nt; a; ) {
          var i = Xa(e, 0), o = md(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Iy(a) : sl(a.nextSibling);
        }
        fn(e);
      }
      if (Qh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Nt = Iy(e);
      } else
        t === 27 ? (t = Nt, Cn(e.type) ? (e = Jg, Jg = null, Nt = e) : Nt = t) : Nt = ya ? sl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function wi() {
      Nt = ya = null, Ec = ke = !1;
    }
    function Lh() {
      var e = Es;
      return e !== null && (va === null ? va = e : va.push.apply(
        va,
        e
      ), Es = null), e;
    }
    function Xc(e) {
      Es === null ? Es = [e] : Es.push(e);
    }
    function Zh() {
      var e = Xn;
      if (e !== null) {
        Xn = null;
        for (var t = of(e); 0 < e.children.length; )
          e = e.children[0];
        ae(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function hr() {
      Kd = G0 = null, kd = !1;
    }
    function ju(e, t, a) {
      Ee(cg, t._currentValue, e), t._currentValue = a, Ee(og, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== O1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = O1;
    }
    function lu(e, t) {
      e._currentValue = cg.current;
      var a = og.current;
      We(og, t), e._currentRenderer = a, We(cg, t);
    }
    function $h(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Jh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var v = 0; v < t.length; v++)
              if (h.context === t[v]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), $h(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), $h(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function il(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            ha(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Oo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(op) : e = [op]);
        }
        o = o.return;
      }
      e !== null && Jh(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function wu(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!ha(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Xu(e) {
      G0 = e, Kd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function ft(e) {
      return kd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Kh(G0, e);
    }
    function gf(e, t) {
      return G0 === null && Xu(e), Kh(e, t);
    }
    function Kh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Kd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Kd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Kd = Kd.next = t;
      return a;
    }
    function bf() {
      return {
        controller: new d2(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Xi(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function sn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && h2(y2, function() {
        e.controller.abort();
      });
    }
    function Qa() {
      var e = Rs;
      return Rs = 0, e;
    }
    function Qu(e) {
      var t = Rs;
      return Rs = e, t;
    }
    function Qi(e) {
      var t = Rs;
      return Rs += e, t;
    }
    function yr(e) {
      qa = Wd(), 0 > e.actualStartTime && (e.actualStartTime = qa);
    }
    function au(e) {
      if (0 <= qa) {
        var t = Wd() - qa;
        e.actualDuration += t, e.selfBaseDuration = t, qa = -1;
      }
    }
    function Li(e) {
      if (0 <= qa) {
        var t = Wd() - qa;
        e.actualDuration += t, qa = -1;
      }
    }
    function Ta() {
      if (0 <= qa) {
        var e = Wd() - qa;
        qa = -1, Rs += e;
      }
    }
    function La() {
      qa = Wd();
    }
    function rn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Zp(e, t) {
      if (Bm === null) {
        var a = Bm = [];
        fg = 0, zs = Vy(), Fd = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return fg++, t.then(kh, kh), t;
    }
    function kh() {
      if (--fg === 0 && Bm !== null) {
        Fd !== null && (Fd.status = "fulfilled");
        var e = Bm;
        Bm = null, zs = 0, Fd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function $p(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function Wh() {
      var e = Ds.current;
      return e !== null ? e : st.pooledCache;
    }
    function mr(e, t) {
      t === null ? Ee(Ds, Ds.current, e) : Ee(Ds, t.pool, e);
    }
    function Jp() {
      var e = Wh();
      return e === null ? null : { parent: hl._currentValue, pool: e };
    }
    function Fh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Ih(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Qc() {
    }
    function Aa(e, t, a) {
      q.actQueue !== null && (q.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Qc, Qc), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, ua(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Qc, Qc);
          else {
            if (e = st, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, ua(e), e;
          }
          throw Qm = t, L0 = !0, Xm;
      }
    }
    function Ph() {
      if (Qm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Qm;
      return Qm = null, L0 = !1, e;
    }
    function ua(e) {
      if (e === Xm || e === Q0)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function wl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Lu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function dn(e) {
      return {
        lane: e,
        tag: H1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Za(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, dg === i && !B1) {
        var o = fe(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), B1 = !0;
      }
      return (tt & pa) !== tn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = fr(e), wp(e, null, a), t) : (or(e, i, t, a), fr(e));
    }
    function Zu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, _c(e, a);
      }
    }
    function Lc(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function hn() {
      if (hg) {
        var e = Fd;
        if (e !== null) throw e;
      }
    }
    function Zc(e, t, a, i) {
      hg = !1;
      var o = e.updateQueue;
      Yo = !1, dg = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var v = h, g = v.next;
        v.next = null, d === null ? f = g : d.next = g, d = v;
        var _ = e.alternate;
        _ !== null && (_ = _.updateQueue, h = _.lastBaseUpdate, h !== d && (h === null ? _.firstBaseUpdate = g : h.next = g, _.lastBaseUpdate = v));
      }
      if (f !== null) {
        var V = o.baseState;
        d = 0, _ = g = v = null, h = f;
        do {
          var C = h.lane & -536870913, j = C !== h.lane;
          if (j ? (Ve & C) === C : (i & C) === C) {
            C !== 0 && C === zs && (hg = !0), _ !== null && (_ = _.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              C = e;
              var ne = h, be = t, rt = a;
              switch (ne.tag) {
                case _1:
                  if (ne = ne.payload, typeof ne == "function") {
                    kd = !0;
                    var Xe = ne.call(
                      rt,
                      V,
                      be
                    );
                    if (C.mode & ea) {
                      je(!0);
                      try {
                        ne.call(rt, V, be);
                      } finally {
                        je(!1);
                      }
                    }
                    kd = !1, V = Xe;
                    break e;
                  }
                  V = ne;
                  break e;
                case rg:
                  C.flags = C.flags & -65537 | 128;
                case H1:
                  if (Xe = ne.payload, typeof Xe == "function") {
                    if (kd = !0, ne = Xe.call(
                      rt,
                      V,
                      be
                    ), C.mode & ea) {
                      je(!0);
                      try {
                        Xe.call(rt, V, be);
                      } finally {
                        je(!1);
                      }
                    }
                    kd = !1;
                  } else ne = Xe;
                  if (ne == null) break e;
                  V = xe({}, V, ne);
                  break e;
                case N1:
                  Yo = !0;
              }
            }
            C = h.callback, C !== null && (e.flags |= 64, j && (e.flags |= 8192), j = o.callbacks, j === null ? o.callbacks = [C] : j.push(C));
          } else
            j = {
              lane: C,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, _ === null ? (g = _ = j, v = V) : _ = _.next = j, d |= C;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            j = h, h = j.next, j.next = null, o.lastBaseUpdate = j, o.shared.pending = null;
          }
        } while (!0);
        _ === null && (v = V), o.baseState = v, o.firstBaseUpdate = g, o.lastBaseUpdate = _, f === null && (o.shared.lanes = 0), wo |= d, e.lanes = d, e.memoizedState = V;
      }
      dg = null;
    }
    function Sf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function $c(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Sf(a[e], t);
    }
    function Kp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Sf(a[e], t);
    }
    function Xl(e, t) {
      var a = Ti;
      Ee(Z0, a, e), Ee(Id, t, e), Ti = a | t.baseLanes;
    }
    function Tf(e) {
      Ee(Z0, Ti, e), Ee(
        Id,
        Id.current,
        e
      );
    }
    function $a(e) {
      Ti = Z0.current, We(Id, e), We(Z0, e);
    }
    function Ce() {
      var e = G;
      Zn === null ? Zn = [e] : Zn.push(e);
    }
    function K() {
      var e = G;
      if (Zn !== null && (zc++, Zn[zc] !== e)) {
        var t = fe(Ae);
        if (!q1.has(t) && (q1.add(t), Zn !== null)) {
          for (var a = "", i = 0; i <= zc; i++) {
            var o = Zn[i], f = i === zc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Ea(e) {
      e == null || Te(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        G,
        typeof e
      );
    }
    function Jc() {
      var e = fe(Ae);
      G1.has(e) || (G1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function vt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function $u(e, t) {
      if (Zm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          G
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        G,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ha(e[a], t[a])) return !1;
      return !0;
    }
    function Ju(e, t, a, i, o, f) {
      Go = f, Ae = t, Zn = e !== null ? e._debugHookTypes : null, zc = -1, Zm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = fe(Ae), yg.has(f) || (yg.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e !== null && e.memoizedState !== null ? pg : Zn !== null ? V1 : mg, Ms = f = (t.mode & ea) !== mt;
      var d = vg(a, i, o);
      if (Ms = !1, eh && (d = Kc(
        t,
        a,
        i,
        o
      )), f) {
        je(!0);
        try {
          d = Kc(
            t,
            a,
            i,
            o
          );
        } finally {
          je(!1);
        }
      }
      return Af(e, t), d;
    }
    function Af(e, t) {
      t._debugHookTypes = Zn, t.dependencies === null ? Rc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Rc
      }) : t.dependencies._debugThenableState = Rc, q.H = K0;
      var a = ot !== null && ot.next !== null;
      if (Go = 0, Zn = G = el = ot = Ae = null, zc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), $0 = !1, Lm = 0, Rc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Rl || (e = e.dependencies, e !== null && wu(e) && (Rl = !0)), L0 ? (L0 = !1, e = !0) : e = !1, e && (t = fe(t) || "Unknown", Y1.has(t) || yg.has(t) || (Y1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Kc(e, t, a, i) {
      Ae = e;
      var o = 0;
      do {
        if (eh && (Rc = null), Lm = 0, eh = !1, o >= p2)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Zm = !1, el = ot = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        zc = -1, q.H = j1, f = vg(t, a, i);
      } while (eh);
      return f;
    }
    function Ra() {
      var e = q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Zi(t) : t, e = e.useState()[0], (ot !== null ? ot.memoizedState : null) !== e && (Ae.flags |= 1024), t;
    }
    function Ql() {
      var e = J0 !== 0;
      return J0 = 0, e;
    }
    function nu(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ru) !== mt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ja(e) {
      if ($0) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        $0 = !1;
      }
      Go = 0, Zn = el = ot = Ae = null, zc = -1, G = null, eh = !1, Lm = J0 = 0, Rc = null;
    }
    function At() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return el === null ? Ae.memoizedState = el = e : el = el.next = e, el;
    }
    function we() {
      if (ot === null) {
        var e = Ae.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = ot.next;
      var t = el === null ? Ae.memoizedState : el.next;
      if (t !== null)
        el = t, ot = e;
      else {
        if (e === null)
          throw Ae.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        ot = e, e = {
          memoizedState: ot.memoizedState,
          baseState: ot.baseState,
          baseQueue: ot.baseQueue,
          queue: ot.queue,
          next: null
        }, el === null ? Ae.memoizedState = el = e : el = el.next = e;
      }
      return el;
    }
    function pr() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Zi(e) {
      var t = Lm;
      return Lm += 1, Rc === null && (Rc = Fh()), e = Aa(Rc, e, t), t = Ae, (el === null ? t.memoizedState : el.next) === null && (t = t.alternate, q.H = t !== null && t.memoizedState !== null ? pg : mg), e;
    }
    function yn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Zi(e);
        if (e.$$typeof === _a) return ft(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ht(e) {
      var t = null, a = Ae.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ae.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = pr(), Ae.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Zm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = E0;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function $e(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Le(e, t, a) {
      var i = At();
      if (a !== void 0) {
        var o = a(t);
        if (Ms) {
          je(!0);
          try {
            a(t);
          } finally {
            je(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = oy.bind(
        null,
        Ae,
        e
      ), [i.memoizedState, e];
    }
    function za(e) {
      var t = we();
      return Da(t, ot, e);
    }
    function Da(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, v = null, g = t, _ = !1;
        do {
          var V = g.lane & -536870913;
          if (V !== g.lane ? (Ve & V) === V : (Go & V) === V) {
            var C = g.revertLane;
            if (C === 0)
              v !== null && (v = v.next = {
                lane: 0,
                revertLane: 0,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null
              }), V === zs && (_ = !0);
            else if ((Go & C) === C) {
              g = g.next, C === zs && (_ = !0);
              continue;
            } else
              V = {
                lane: 0,
                revertLane: g.revertLane,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null
              }, v === null ? (h = v = V, d = f) : v = v.next = V, Ae.lanes |= C, wo |= C;
            V = g.action, Ms && a(f, V), f = g.hasEagerState ? g.eagerState : a(f, V);
          } else
            C = {
              lane: V,
              revertLane: g.revertLane,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            }, v === null ? (h = v = C, d = f) : v = v.next = C, Ae.lanes |= V, wo |= V;
          g = g.next;
        } while (g !== null && g !== t);
        if (v === null ? d = f : v.next = h, !ha(f, e.memoizedState) && (Rl = !0, _ && (a = Fd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = v, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function $i(e) {
      var t = we(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        ha(f, t.memoizedState) || (Rl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function uu(e, t, a) {
      var i = Ae, o = At();
      if (ke) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Pd || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0);
      } else {
        if (f = t(), Pd || (a = t(), ha(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0)), st === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Ve & 124) !== 0 || ey(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, br(
        Wc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, pn(
        Ln | yl,
        ku(),
        kc.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Ef(e, t, a) {
      var i = Ae, o = we(), f = ke;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Pd) {
        var d = t();
        ha(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Pd = !0);
      }
      (d = !ha(
        (ot || o).memoizedState,
        a
      )) && (o.memoizedState = a, Rl = !0), o = o.queue;
      var h = Wc.bind(null, i, o, e);
      if (jt(2048, yl, h, [e]), o.getSnapshot !== t || d || el !== null && el.memoizedState.tag & Ln) {
        if (i.flags |= 2048, pn(
          Ln | yl,
          ku(),
          kc.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), st === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Go & 124) !== 0 || ey(i, t, a);
      }
      return a;
    }
    function ey(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ae.updateQueue, t === null ? (t = pr(), Ae.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function kc(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ty(t) && Fc(e);
    }
    function Wc(e, t, a) {
      return a(function() {
        ty(t) && Fc(e);
      });
    }
    function ty(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !ha(e, a);
      } catch {
        return !0;
      }
    }
    function Fc(e) {
      var t = jl(e, 2);
      t !== null && Rt(t, e, 2);
    }
    function Rf(e) {
      var t = At();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Ms) {
          je(!0);
          try {
            a();
          } finally {
            je(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $e,
        lastRenderedState: e
      }, t;
    }
    function iu(e) {
      e = Rf(e);
      var t = e.queue, a = to.bind(null, Ae, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Ka(e) {
      var t = At();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Mr.bind(
        null,
        Ae,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function cu(e, t) {
      var a = we();
      return mn(a, ot, e, t);
    }
    function mn(e, t, a, i) {
      return e.baseState = a, Da(
        e,
        ot,
        typeof i == "function" ? i : $e
      );
    }
    function vr(e, t) {
      var a = we();
      return ot !== null ? mn(a, ot, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function ly(e, t, a, i, o) {
      if (Cf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        q.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, Ic(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Ic(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = q.T, d = {};
        q.T = d, q.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), v = q.S;
          v !== null && v(d, h), zf(e, t, h);
        } catch (g) {
          kt(e, t, g);
        } finally {
          q.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), zf(e, t, d);
        } catch (g) {
          kt(e, t, g);
        }
    }
    function zf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          Ku(e, t, i);
        },
        function(i) {
          return kt(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Ku(e, t, a);
    }
    function Ku(e, t, a) {
      t.status = "fulfilled", t.value = a, Df(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ic(e, a)));
    }
    function kt(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Df(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Df(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ay(e, t) {
      return t;
    }
    function Pc(e, t) {
      if (ke) {
        var a = st.formState;
        if (a !== null) {
          e: {
            var i = Ae;
            if (ke) {
              if (Nt) {
                t: {
                  for (var o = Nt, f = gi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = sl(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === Qg || f === Gb ? o : null;
                }
                if (o) {
                  Nt = sl(
                    o.nextSibling
                  ), i = o.data === Qg;
                  break e;
                }
              }
              fn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = At(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ay,
        lastRenderedState: t
      }, a.queue = i, a = to.bind(
        null,
        Ae,
        i
      ), i.dispatch = a, i = Rf(!1), f = Mr.bind(
        null,
        Ae,
        !1,
        i.queue
      ), i = At(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = ly.bind(
        null,
        Ae,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function gr(e) {
      var t = we();
      return kp(t, ot, e);
    }
    function kp(e, t, a) {
      if (t = Da(
        e,
        t,
        ay
      )[0], e = za($e)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Zi(t);
        } catch (d) {
          throw d === Xm ? Q0 : d;
        }
      else i = t;
      t = we();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ae.flags |= 2048, pn(
        Ln | yl,
        ku(),
        Vt.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Vt(e, t) {
      e.action = t;
    }
    function eo(e) {
      var t = we(), a = ot;
      if (a !== null)
        return kp(t, a, e);
      we(), t = t.memoizedState, a = we();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function pn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = Ae.updateQueue, t === null && (t = pr(), Ae.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function ku() {
      return { destroy: void 0, resource: void 0 };
    }
    function Of(e) {
      var t = At();
      return e = { current: e }, t.memoizedState = e;
    }
    function Oa(e, t, a, i) {
      var o = At();
      i = i === void 0 ? null : i, Ae.flags |= e, o.memoizedState = pn(
        Ln | t,
        ku(),
        a,
        i
      );
    }
    function jt(e, t, a, i) {
      var o = we();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      ot !== null && i !== null && $u(i, ot.memoizedState.deps) ? o.memoizedState = pn(t, f, a, i) : (Ae.flags |= e, o.memoizedState = pn(
        Ln | t,
        f,
        a,
        i
      ));
    }
    function br(e, t) {
      (Ae.mode & Ru) !== mt && (Ae.mode & A1) === mt ? Oa(276826112, yl, e, t) : Oa(8390656, yl, e, t);
    }
    function Sr(e, t) {
      var a = 4194308;
      return (Ae.mode & Ru) !== mt && (a |= 134217728), Oa(a, ql, e, t);
    }
    function Wp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Tr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ae.mode & Ru) !== mt && (i |= 134217728), Oa(
        i,
        ql,
        Wp.bind(null, t, e),
        a
      );
    }
    function vn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, jt(
        4,
        ql,
        Wp.bind(null, t, e),
        a
      );
    }
    function Mf(e, t) {
      return At().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Ji(e, t) {
      var a = we();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && $u(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Ar(e, t) {
      var a = At();
      t = t === void 0 ? null : t;
      var i = e();
      if (Ms) {
        je(!0);
        try {
          e();
        } finally {
          je(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Wu(e, t) {
      var a = we();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && $u(t, i[1]))
        return i[0];
      if (i = e(), Ms) {
        je(!0);
        try {
          e();
        } finally {
          je(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Er(e, t) {
      var a = At();
      return zr(a, e, t);
    }
    function Uf(e, t) {
      var a = we();
      return xf(
        a,
        ot.memoizedState,
        e,
        t
      );
    }
    function Rr(e, t) {
      var a = we();
      return ot === null ? zr(a, e, t) : xf(
        a,
        ot.memoizedState,
        e,
        t
      );
    }
    function zr(e, t, a) {
      return a === void 0 || (Go & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = i0(), Ae.lanes |= e, wo |= e, a);
    }
    function xf(e, t, a, i) {
      return ha(a, t) ? a : Id.current !== null ? (e = zr(e, a, i), ha(e, t) || (Rl = !0), e) : (Go & 42) === 0 ? (Rl = !0, e.memoizedState = a) : (e = i0(), Ae.lanes |= e, wo |= e, t);
    }
    function ny(e, t, a, i, o) {
      var f = ge.p;
      ge.p = f !== 0 && f < en ? f : en;
      var d = q.T, h = {};
      q.T = h, Mr(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var v = o(), g = q.S;
        if (g !== null && g(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
          var _ = $p(
            v,
            i
          );
          ou(
            e,
            t,
            _,
            Jl(e)
          );
        } else
          ou(
            e,
            t,
            i,
            Jl(e)
          );
      } catch (V) {
        ou(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: V },
          Jl(e)
        );
      } finally {
        ge.p = f, q.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Ki(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = uy(e).queue;
      ny(
        e,
        o,
        t,
        Vs,
        a === null ? te : function() {
          return iy(e), a(i);
        }
      );
    }
    function uy(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Vs,
        baseState: Vs,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $e,
          lastRenderedState: Vs
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $e,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function iy(e) {
      q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = uy(e).next.queue;
      ou(
        e,
        t,
        {},
        Jl(e)
      );
    }
    function gn() {
      var e = Rf(!1);
      return e = ny.bind(
        null,
        Ae,
        e.queue,
        !0,
        !1
      ), At().memoizedState = e, [!1, e];
    }
    function Dr() {
      var e = za($e)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : Zi(e),
        t
      ];
    }
    function Or() {
      var e = $i($e)[0], t = we().memoizedState;
      return [
        typeof e == "boolean" ? e : Zi(e),
        t
      ];
    }
    function Ll() {
      return ft(op);
    }
    function bn() {
      var e = At(), t = st.identifierPrefix;
      if (ke) {
        var a = Ac, i = Tc;
        a = (i & ~(1 << 32 - Al(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = J0++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = m2++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function ki() {
      return At().memoizedState = cy.bind(
        null,
        Ae
      );
    }
    function cy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = Jl(a);
            e = dn(i);
            var o = Za(a, e, i);
            o !== null && (Rt(o, a, i), Zu(o, a, i)), a = bf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function oy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Jl(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Cf(e) ? Wi(t, o) : (o = qh(e, t, o, i), o !== null && (Rt(o, e, i), Hf(o, t, i))), Ei(e, i);
    }
    function to(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = Jl(e), ou(e, t, a, i), Ei(e, i);
    }
    function ou(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Cf(e)) Wi(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = q.H;
          q.H = Du;
          try {
            var h = t.lastRenderedState, v = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = v, ha(v, h))
              return or(e, t, o, 0), st === null && yf(), !1;
          } catch {
          } finally {
            q.H = d;
          }
        }
        if (a = qh(e, t, o, i), a !== null)
          return Rt(a, e, i), Hf(a, t, i), !0;
      }
      return !1;
    }
    function Mr(e, t, a, i) {
      if (q.T === null && zs === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Vy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Cf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = qh(
          e,
          a,
          i,
          2
        ), t !== null && Rt(t, e, 2);
      Ei(e, 2);
    }
    function Cf(e) {
      var t = e.alternate;
      return e === Ae || t !== null && t === Ae;
    }
    function Wi(e, t) {
      eh = $0 = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Hf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, _c(e, a);
      }
    }
    function Wt(e) {
      var t = _e;
      return e != null && (_e = t === null ? e : t.concat(e)), t;
    }
    function lo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = vf(e, a.mode, 0), t._debugInfo = _e, t.return = a), ae(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function ao(e) {
      var t = $m;
      return $m += 1, th === null && (th = Fh()), Aa(th, e, t);
    }
    function Ma(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Re(e, t) {
      throw t.$$typeof === os ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Fe(e, t) {
      var a = fe(e) || "Component";
      tb[a] || (tb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function gt(e, t) {
      var a = fe(e) || "Component";
      lb[a] || (lb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function _f(e) {
      function t(A, E) {
        if (e) {
          var z = A.deletions;
          z === null ? (A.deletions = [E], A.flags |= 16) : z.push(E);
        }
      }
      function a(A, E) {
        if (!e) return null;
        for (; E !== null; )
          t(A, E), E = E.sibling;
        return null;
      }
      function i(A) {
        for (var E = /* @__PURE__ */ new Map(); A !== null; )
          A.key !== null ? E.set(A.key, A) : E.set(A.index, A), A = A.sibling;
        return E;
      }
      function o(A, E) {
        return A = on(A, E), A.index = 0, A.sibling = null, A;
      }
      function f(A, E, z) {
        return A.index = z, e ? (z = A.alternate, z !== null ? (z = z.index, z < E ? (A.flags |= 67108866, E) : z) : (A.flags |= 67108866, E)) : (A.flags |= 1048576, E);
      }
      function d(A) {
        return e && A.alternate === null && (A.flags |= 67108866), A;
      }
      function h(A, E, z, X) {
        return E === null || E.tag !== 6 ? (E = Vu(
          z,
          A.mode,
          X
        ), E.return = A, E._debugOwner = A, E._debugTask = A._debugTask, E._debugInfo = _e, E) : (E = o(E, z), E.return = A, E._debugInfo = _e, E);
      }
      function v(A, E, z, X) {
        var F = z.type;
        return F === ze ? (E = _(
          A,
          E,
          z.props.children,
          X,
          z.key
        ), lo(z, E, A), E) : E !== null && (E.elementType === F || Xp(E, z) || typeof F == "object" && F !== null && F.$$typeof === ra && Vo(F) === E.type) ? (E = o(E, z.props), Ma(E, z), E.return = A, E._debugOwner = z._owner, E._debugInfo = _e, E) : (E = vf(z, A.mode, X), Ma(E, z), E.return = A, E._debugInfo = _e, E);
      }
      function g(A, E, z, X) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = jh(z, A.mode, X), E.return = A, E._debugInfo = _e, E) : (E = o(E, z.children || []), E.return = A, E._debugInfo = _e, E);
      }
      function _(A, E, z, X, F) {
        return E === null || E.tag !== 7 ? (E = Gu(
          z,
          A.mode,
          X,
          F
        ), E.return = A, E._debugOwner = A, E._debugTask = A._debugTask, E._debugInfo = _e, E) : (E = o(E, z), E.return = A, E._debugInfo = _e, E);
      }
      function V(A, E, z) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = Vu(
            "" + E,
            A.mode,
            z
          ), E.return = A, E._debugOwner = A, E._debugTask = A._debugTask, E._debugInfo = _e, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case fi:
              return z = vf(
                E,
                A.mode,
                z
              ), Ma(z, E), z.return = A, A = Wt(E._debugInfo), z._debugInfo = _e, _e = A, z;
            case mc:
              return E = jh(
                E,
                A.mode,
                z
              ), E.return = A, E._debugInfo = _e, E;
            case ra:
              var X = Wt(E._debugInfo);
              return E = Vo(E), A = V(A, E, z), _e = X, A;
          }
          if (Te(E) || Ct(E))
            return z = Gu(
              E,
              A.mode,
              z,
              null
            ), z.return = A, z._debugOwner = A, z._debugTask = A._debugTask, A = Wt(E._debugInfo), z._debugInfo = _e, _e = A, z;
          if (typeof E.then == "function")
            return X = Wt(E._debugInfo), A = V(
              A,
              ao(E),
              z
            ), _e = X, A;
          if (E.$$typeof === _a)
            return V(
              A,
              gf(A, E),
              z
            );
          Re(A, E);
        }
        return typeof E == "function" && Fe(A, E), typeof E == "symbol" && gt(A, E), null;
      }
      function C(A, E, z, X) {
        var F = E !== null ? E.key : null;
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
          return F !== null ? null : h(A, E, "" + z, X);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case fi:
              return z.key === F ? (F = Wt(z._debugInfo), A = v(
                A,
                E,
                z,
                X
              ), _e = F, A) : null;
            case mc:
              return z.key === F ? g(A, E, z, X) : null;
            case ra:
              return F = Wt(z._debugInfo), z = Vo(z), A = C(
                A,
                E,
                z,
                X
              ), _e = F, A;
          }
          if (Te(z) || Ct(z))
            return F !== null ? null : (F = Wt(z._debugInfo), A = _(
              A,
              E,
              z,
              X,
              null
            ), _e = F, A);
          if (typeof z.then == "function")
            return F = Wt(z._debugInfo), A = C(
              A,
              E,
              ao(z),
              X
            ), _e = F, A;
          if (z.$$typeof === _a)
            return C(
              A,
              E,
              gf(A, z),
              X
            );
          Re(A, z);
        }
        return typeof z == "function" && Fe(A, z), typeof z == "symbol" && gt(A, z), null;
      }
      function j(A, E, z, X, F) {
        if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
          return A = A.get(z) || null, h(E, A, "" + X, F);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case fi:
              return z = A.get(
                X.key === null ? z : X.key
              ) || null, A = Wt(X._debugInfo), E = v(
                E,
                z,
                X,
                F
              ), _e = A, E;
            case mc:
              return A = A.get(
                X.key === null ? z : X.key
              ) || null, g(E, A, X, F);
            case ra:
              var De = Wt(X._debugInfo);
              return X = Vo(X), E = j(
                A,
                E,
                z,
                X,
                F
              ), _e = De, E;
          }
          if (Te(X) || Ct(X))
            return z = A.get(z) || null, A = Wt(X._debugInfo), E = _(
              E,
              z,
              X,
              F,
              null
            ), _e = A, E;
          if (typeof X.then == "function")
            return De = Wt(X._debugInfo), E = j(
              A,
              E,
              z,
              ao(X),
              F
            ), _e = De, E;
          if (X.$$typeof === _a)
            return j(
              A,
              E,
              z,
              gf(E, X),
              F
            );
          Re(E, X);
        }
        return typeof X == "function" && Fe(E, X), typeof X == "symbol" && gt(E, X), null;
      }
      function ne(A, E, z, X) {
        if (typeof z != "object" || z === null) return X;
        switch (z.$$typeof) {
          case fi:
          case mc:
            ce(A, E, z);
            var F = z.key;
            if (typeof F != "string") break;
            if (X === null) {
              X = /* @__PURE__ */ new Set(), X.add(F);
              break;
            }
            if (!X.has(F)) {
              X.add(F);
              break;
            }
            ae(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                F
              );
            });
            break;
          case ra:
            z = Vo(z), ne(A, E, z, X);
        }
        return X;
      }
      function be(A, E, z, X) {
        for (var F = null, De = null, ue = null, Oe = E, Ue = E = 0, pt = null; Oe !== null && Ue < z.length; Ue++) {
          Oe.index > Ue ? (pt = Oe, Oe = null) : pt = Oe.sibling;
          var Lt = C(
            A,
            Oe,
            z[Ue],
            X
          );
          if (Lt === null) {
            Oe === null && (Oe = pt);
            break;
          }
          F = ne(
            A,
            Lt,
            z[Ue],
            F
          ), e && Oe && Lt.alternate === null && t(A, Oe), E = f(Lt, E, Ue), ue === null ? De = Lt : ue.sibling = Lt, ue = Lt, Oe = pt;
        }
        if (Ue === z.length)
          return a(A, Oe), ke && Vi(A, Ue), De;
        if (Oe === null) {
          for (; Ue < z.length; Ue++)
            Oe = V(A, z[Ue], X), Oe !== null && (F = ne(
              A,
              Oe,
              z[Ue],
              F
            ), E = f(
              Oe,
              E,
              Ue
            ), ue === null ? De = Oe : ue.sibling = Oe, ue = Oe);
          return ke && Vi(A, Ue), De;
        }
        for (Oe = i(Oe); Ue < z.length; Ue++)
          pt = j(
            Oe,
            A,
            Ue,
            z[Ue],
            X
          ), pt !== null && (F = ne(
            A,
            pt,
            z[Ue],
            F
          ), e && pt.alternate !== null && Oe.delete(
            pt.key === null ? Ue : pt.key
          ), E = f(
            pt,
            E,
            Ue
          ), ue === null ? De = pt : ue.sibling = pt, ue = pt);
        return e && Oe.forEach(function(Cc) {
          return t(A, Cc);
        }), ke && Vi(A, Ue), De;
      }
      function rt(A, E, z, X) {
        if (z == null)
          throw Error("An iterable object provided no iterator.");
        for (var F = null, De = null, ue = E, Oe = E = 0, Ue = null, pt = null, Lt = z.next(); ue !== null && !Lt.done; Oe++, Lt = z.next()) {
          ue.index > Oe ? (Ue = ue, ue = null) : Ue = ue.sibling;
          var Cc = C(A, ue, Lt.value, X);
          if (Cc === null) {
            ue === null && (ue = Ue);
            break;
          }
          pt = ne(
            A,
            Cc,
            Lt.value,
            pt
          ), e && ue && Cc.alternate === null && t(A, ue), E = f(Cc, E, Oe), De === null ? F = Cc : De.sibling = Cc, De = Cc, ue = Ue;
        }
        if (Lt.done)
          return a(A, ue), ke && Vi(A, Oe), F;
        if (ue === null) {
          for (; !Lt.done; Oe++, Lt = z.next())
            ue = V(A, Lt.value, X), ue !== null && (pt = ne(
              A,
              ue,
              Lt.value,
              pt
            ), E = f(
              ue,
              E,
              Oe
            ), De === null ? F = ue : De.sibling = ue, De = ue);
          return ke && Vi(A, Oe), F;
        }
        for (ue = i(ue); !Lt.done; Oe++, Lt = z.next())
          Ue = j(
            ue,
            A,
            Oe,
            Lt.value,
            X
          ), Ue !== null && (pt = ne(
            A,
            Ue,
            Lt.value,
            pt
          ), e && Ue.alternate !== null && ue.delete(
            Ue.key === null ? Oe : Ue.key
          ), E = f(
            Ue,
            E,
            Oe
          ), De === null ? F = Ue : De.sibling = Ue, De = Ue);
        return e && ue.forEach(function(X2) {
          return t(A, X2);
        }), ke && Vi(A, Oe), F;
      }
      function Xe(A, E, z, X) {
        if (typeof z == "object" && z !== null && z.type === ze && z.key === null && (lo(z, null, A), z = z.props.children), typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case fi:
              var F = Wt(z._debugInfo);
              e: {
                for (var De = z.key; E !== null; ) {
                  if (E.key === De) {
                    if (De = z.type, De === ze) {
                      if (E.tag === 7) {
                        a(
                          A,
                          E.sibling
                        ), X = o(
                          E,
                          z.props.children
                        ), X.return = A, X._debugOwner = z._owner, X._debugInfo = _e, lo(z, X, A), A = X;
                        break e;
                      }
                    } else if (E.elementType === De || Xp(
                      E,
                      z
                    ) || typeof De == "object" && De !== null && De.$$typeof === ra && Vo(De) === E.type) {
                      a(
                        A,
                        E.sibling
                      ), X = o(E, z.props), Ma(X, z), X.return = A, X._debugOwner = z._owner, X._debugInfo = _e, A = X;
                      break e;
                    }
                    a(A, E);
                    break;
                  } else t(A, E);
                  E = E.sibling;
                }
                z.type === ze ? (X = Gu(
                  z.props.children,
                  A.mode,
                  X,
                  z.key
                ), X.return = A, X._debugOwner = A, X._debugTask = A._debugTask, X._debugInfo = _e, lo(z, X, A), A = X) : (X = vf(
                  z,
                  A.mode,
                  X
                ), Ma(X, z), X.return = A, X._debugInfo = _e, A = X);
              }
              return A = d(A), _e = F, A;
            case mc:
              e: {
                for (F = z, z = F.key; E !== null; ) {
                  if (E.key === z)
                    if (E.tag === 4 && E.stateNode.containerInfo === F.containerInfo && E.stateNode.implementation === F.implementation) {
                      a(
                        A,
                        E.sibling
                      ), X = o(
                        E,
                        F.children || []
                      ), X.return = A, A = X;
                      break e;
                    } else {
                      a(A, E);
                      break;
                    }
                  else t(A, E);
                  E = E.sibling;
                }
                X = jh(
                  F,
                  A.mode,
                  X
                ), X.return = A, A = X;
              }
              return d(A);
            case ra:
              return F = Wt(z._debugInfo), z = Vo(z), A = Xe(
                A,
                E,
                z,
                X
              ), _e = F, A;
          }
          if (Te(z))
            return F = Wt(z._debugInfo), A = be(
              A,
              E,
              z,
              X
            ), _e = F, A;
          if (Ct(z)) {
            if (F = Wt(z._debugInfo), De = Ct(z), typeof De != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ue = De.call(z);
            return ue === z ? (A.tag !== 0 || Object.prototype.toString.call(A.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ue) !== "[object Generator]") && (P1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), P1 = !0) : z.entries !== De || bg || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), bg = !0), A = rt(
              A,
              E,
              ue,
              X
            ), _e = F, A;
          }
          if (typeof z.then == "function")
            return F = Wt(z._debugInfo), A = Xe(
              A,
              E,
              ao(z),
              X
            ), _e = F, A;
          if (z.$$typeof === _a)
            return Xe(
              A,
              E,
              gf(A, z),
              X
            );
          Re(A, z);
        }
        return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (F = "" + z, E !== null && E.tag === 6 ? (a(
          A,
          E.sibling
        ), X = o(E, F), X.return = A, A = X) : (a(A, E), X = Vu(
          F,
          A.mode,
          X
        ), X.return = A, X._debugOwner = A, X._debugTask = A._debugTask, X._debugInfo = _e, A = X), d(A)) : (typeof z == "function" && Fe(A, z), typeof z == "symbol" && gt(A, z), a(A, E));
      }
      return function(A, E, z, X) {
        var F = _e;
        _e = null;
        try {
          $m = 0;
          var De = Xe(
            A,
            E,
            z,
            X
          );
          return th = null, De;
        } catch (pt) {
          if (pt === Xm || pt === Q0) throw pt;
          var ue = he(29, pt, null, A.mode);
          ue.lanes = X, ue.return = A;
          var Oe = ue._debugInfo = _e;
          if (ue._debugOwner = A._debugOwner, ue._debugTask = A._debugTask, Oe != null) {
            for (var Ue = Oe.length - 1; 0 <= Ue; Ue--)
              if (typeof Oe[Ue].stack == "string") {
                ue._debugOwner = Oe[Ue], ue._debugTask = Oe[Ue].debugTask;
                break;
              }
          }
          return ue;
        } finally {
          _e = F;
        }
      };
    }
    function ia(e) {
      var t = e.alternate;
      Ee(
        ml,
        ml.current & ah,
        e
      ), Ee($n, e, e), Si === null && (t === null || Id.current !== null || t.memoizedState !== null) && (Si = e);
    }
    function Fu(e) {
      if (e.tag === 22) {
        if (Ee(ml, ml.current, e), Ee($n, e, e), Si === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Si = e);
        }
      } else ka(e);
    }
    function ka(e) {
      Ee(ml, ml.current, e), Ee(
        $n,
        $n.current,
        e
      );
    }
    function ca(e) {
      We($n, e), Si === e && (Si = null), We(ml, e);
    }
    function fu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Mc || Hn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function fy(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        yb.has(t) || (yb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function bt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & ea) {
        je(!0);
        try {
          f = a(i, o);
        } finally {
          je(!1);
        }
      }
      f === void 0 && (t = Ze(t) || "Component", sb.has(t) || (sb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : xe({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Ur(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & ea) {
          je(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            je(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Ze(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !hf(a, i) || !hf(o, f) : !0;
    }
    function xr(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = fe(e) || "Component", ub.has(e) || (ub.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Sg.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Iu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = xe({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function sy(e) {
      Tg(e), console.warn(
        `%s

%s
`,
        nh ? "An error occurred in the <" + nh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Fp(e) {
      var t = nh ? "The above error occurred in the <" + nh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((Ag || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          $b + e[0],
          Jb,
          hv + i + hv,
          Kb
        ) : e.splice(
          0,
          0,
          $b,
          Jb,
          hv + i + hv,
          Kb
        ), e.unshift(console), i = j2.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Cr(e) {
      Tg(e);
    }
    function no(e, t) {
      try {
        nh = t.source ? fe(t.source) : null, Ag = null;
        var a = t.value;
        if (q.actQueue !== null)
          q.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Hr(e, t, a) {
      try {
        nh = a.source ? fe(a.source) : null, Ag = fe(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function bl(e, t, a) {
      return a = dn(a), a.tag = rg, a.payload = { element: null }, a.callback = function() {
        ae(t.source, no, e, t);
      }, a;
    }
    function Et(e) {
      return e = dn(e), e.tag = rg, e;
    }
    function Nf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Qp(a), ae(
            i.source,
            Hr,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Qp(a), ae(
          i.source,
          Hr,
          t,
          a,
          i
        ), typeof o != "function" && (Qo === null ? Qo = /* @__PURE__ */ new Set([this]) : Qo.add(this)), v2(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          fe(a) || "Unknown"
        );
      });
    }
    function Bf(e, t, a, i, o) {
      if (a.flags |= 32768, Ut && ho(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && il(
          t,
          a,
          o,
          !0
        ), ke && (Ec = !0), a = $n.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Si === null ? Ir() : a.alternate === null && Bt === Oc && (Bt = Dg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === sg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), By(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === sg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), By(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return By(e, i, o), Ir(), !1;
      }
      if (ke)
        return Ec = !0, t = $n.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== ig && Xc(
          na(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== ig && Xc(
          na(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = na(i, a), o = bl(
          e.stateNode,
          i,
          o
        ), Lc(e, o), Bt !== Us && (Bt = oh)), !1;
      var f = na(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (ep === null ? ep = [f] : ep.push(f), Bt !== Us && (Bt = oh), t === null) return !0;
      i = na(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = bl(
              a.stateNode,
              i,
              e
            ), Lc(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Qo === null || !Qo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Et(o), Nf(
                o,
                e,
                a,
                i
              ), Lc(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function _t(e, t, a, i) {
      t.child = e === null ? ab(t, null, a, i) : lh(
        t,
        e.child,
        a,
        i
      );
    }
    function _r(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Xu(t), al(t), i = Ju(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Ql(), ba(), e !== null && !Rl ? (nu(e, t, o), Tn(e, t, o)) : (ke && h && rr(t), t.flags |= 1, _t(e, t, i, o), t.child);
    }
    function Sn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Gh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Gi(f), t.tag = 15, t.type = a, Yr(t, f), qf(
          e,
          t,
          a,
          i,
          o
        )) : (e = sr(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Qr(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : hf, a(d, i) && e.ref === t.ref)
          return Tn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = on(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function qf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (hf(f, i) && e.ref === t.ref && t.type === e.type)
          if (Rl = !1, t.pendingProps = i = f, Qr(e, o))
            (e.flags & 131072) !== 0 && (Rl = !0);
          else
            return t.lanes = e.lanes, Tn(e, t, o);
      }
      return qr(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Nr(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Br(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && mr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Xl(t, f) : Tf(t), Fu(t);
        else
          return t.lanes = t.childLanes = 536870912, Br(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (mr(t, f.cachePool), Xl(t, f), ka(t), t.memoizedState = null) : (e !== null && mr(t, null), Tf(t), ka(t));
      return _t(e, t, o, a), t.child;
    }
    function Br(e, t, a, i) {
      var o = Wh();
      return o = o === null ? null : {
        parent: hl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && mr(t, null), Tf(t), Fu(t), e !== null && il(e, t, i, !0), null;
    }
    function Yf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function qr(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Ze(a) || "Unknown";
        pb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), pb[f] = !0);
      }
      return t.mode & ea && zu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Yr(t, t.type), a.contextTypes && (f = Ze(a) || "Unknown", gb[f] || (gb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Xu(t), al(t), a = Ju(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Ql(), ba(), e !== null && !Rl ? (nu(e, t, o), Tn(e, t, o)) : (ke && i && rr(t), t.flags |= 1, _t(e, t, a, o), t.child);
    }
    function ry(e, t, a, i, o, f) {
      return Xu(t), al(t), zc = -1, Zm = e !== null && e.type !== t.type, t.updateQueue = null, a = Kc(
        t,
        i,
        a,
        o
      ), Af(e, t), i = Ql(), ba(), e !== null && !Rl ? (nu(e, t, f), Tn(e, t, f)) : (ke && i && rr(t), t.flags |= 1, _t(e, t, a, f), t.child);
    }
    function dy(e, t, a, i, o) {
      switch (W(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = st, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Et(h), Nf(
            h,
            d,
            t,
            na(f, t)
          ), Lc(t, h);
      }
      if (Xu(t), t.stateNode === null) {
        if (d = qo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== _a) && !hb.has(a) && (hb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === zd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Ze(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = ft(f)), f = new a(i, d), t.mode & ea) {
          je(!0);
          try {
            f = new a(i, d);
          } finally {
            je(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Sg, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = nb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Ze(a) || "Component", ib.has(d) || (ib.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var v = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? v = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (v = "UNSAFE_componentWillUpdate"), d !== null || h !== null || v !== null) {
            f = Ze(a) || "Component";
            var g = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ob.has(f) || (ob.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              g,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              v !== null ? `
  ` + v : ""
            ));
          }
        }
        f = t.stateNode, d = Ze(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !db.has(a) && (db.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !rb.has(a) && (rb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Ze(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || cb.has(a) || (cb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Ze(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Te(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, wl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? ft(d) : qo, f.state === i && (d = Ze(a) || "Component", fb.has(d) || (fb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & ea && zu.recordLegacyContextWarning(
          t,
          f
        ), zu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (bt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          fe(t) || "Component"
        ), Sg.enqueueReplaceState(
          f,
          f.state,
          null
        )), Zc(t, i, f, o), hn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== mt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var _ = t.memoizedProps;
        h = Iu(a, _), f.props = h;
        var V = f.context;
        v = a.contextType, d = qo, typeof v == "object" && v !== null && (d = ft(v)), g = a.getDerivedStateFromProps, v = typeof g == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, v || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || V !== d) && xr(
          t,
          f,
          i,
          d
        ), Yo = !1;
        var C = t.memoizedState;
        f.state = C, Zc(t, i, f, o), hn(), V = t.memoizedState, _ || C !== V || Yo ? (typeof g == "function" && (bt(
          t,
          a,
          g,
          i
        ), V = t.memoizedState), (h = Yo || Ur(
          t,
          a,
          h,
          i,
          C,
          V,
          d
        )) ? (v || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== mt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== mt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== mt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Lu(e, t), d = t.memoizedProps, v = Iu(a, d), f.props = v, g = t.pendingProps, C = f.context, V = a.contextType, h = qo, typeof V == "object" && V !== null && (h = ft(V)), _ = a.getDerivedStateFromProps, (V = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== g || C !== h) && xr(
          t,
          f,
          i,
          h
        ), Yo = !1, C = t.memoizedState, f.state = C, Zc(t, i, f, o), hn();
        var j = t.memoizedState;
        d !== g || C !== j || Yo || e !== null && e.dependencies !== null && wu(e.dependencies) ? (typeof _ == "function" && (bt(
          t,
          a,
          _,
          i
        ), j = t.memoizedState), (v = Yo || Ur(
          t,
          a,
          v,
          i,
          C,
          j,
          h
        ) || e !== null && e.dependencies !== null && wu(e.dependencies)) ? (V || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, j, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          j,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = j), f.props = i, f.state = j, f.context = h, f = v) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Yf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, lf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, qa = -1;
        else {
          if (al(t), a = Q1(h), t.mode & ea) {
            je(!0);
            try {
              Q1(h);
            } finally {
              je(!1);
            }
          }
          ba();
        }
        t.flags |= 1, e !== null && d ? (t.child = lh(
          t,
          e.child,
          null,
          o
        ), t.child = lh(
          t,
          null,
          a,
          o
        )) : _t(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Tn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (uh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        fe(t) || "a component"
      ), uh = !0), e;
    }
    function hy(e, t, a, i) {
      return wi(), t.flags |= 256, _t(e, t, a, i), t.child;
    }
    function Yr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Ze(t) || "Unknown", bb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), bb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Ze(t) || "Unknown", vb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), vb[t] = !0));
    }
    function Gf(e) {
      return { baseLanes: e, cachePool: Jp() };
    }
    function Gr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= an), e;
    }
    function Ip(e, t, a) {
      var i, o = t.pendingProps;
      J(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (ml.current & Jm) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (ke) {
          if (f ? ia(t) : ka(t), ke) {
            var h = Nt, v;
            if (!(v = !h)) {
              e: {
                var g = h;
                for (v = gi; g.nodeType !== 8; ) {
                  if (!v) {
                    v = null;
                    break e;
                  }
                  if (g = sl(g.nextSibling), g === null) {
                    v = null;
                    break e;
                  }
                }
                v = g;
              }
              v !== null ? (wa(), t.memoizedState = {
                dehydrated: v,
                treeContext: As !== null ? { id: Tc, overflow: Ac } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, g = he(18, null, null, mt), g.stateNode = v, g.return = t, t.child = g, ya = t, Nt = null, v = !0) : v = !1, v = !v;
            }
            v && (wh(
              t,
              h
            ), fn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Hn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ca(t);
        }
        return h = o.children, o = o.fallback, f ? (ka(t), f = t.mode, h = Vf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Gu(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = Gf(a), f.childLanes = Gr(
          e,
          i,
          a
        ), t.memoizedState = Rg, o) : (ia(t), Vr(
          t,
          h
        ));
      }
      var _ = e.memoizedState;
      if (_ !== null && (h = _.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ia(t), t.flags &= -257, t = jr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (ka(t), t.child = e.child, t.flags |= 128, t = null) : (ka(t), f = o.fallback, h = t.mode, o = Vf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Gu(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, lh(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = Gf(a), o.childLanes = Gr(
            e,
            i,
            a
          ), t.memoizedState = Rg, t = f);
        else if (ia(t), ke && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Hn(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            v = i.dgst;
            var V = i.msg;
            g = i.stck;
            var C = i.cstck;
          }
          h = V, i = v, o = g, v = f = C, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = v === void 0 ? null : v, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && ng.set(
            f,
            o
          ), Xc(o), t = jr(
            e,
            t,
            a
          );
        } else if (Rl || il(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Rl || i) {
          if (i = st, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Ol(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== _.retryLane))
            throw _.retryLane = o, jl(
              e,
              o
            ), Rt(
              i,
              e,
              o
            ), mb;
          h.data === Mc || Ir(), t = jr(
            e,
            t,
            a
          );
        } else
          h.data === Mc ? (t.flags |= 192, t.child = e.child, t = null) : (e = _.treeContext, Nt = sl(
            h.nextSibling
          ), ya = t, ke = !0, Es = null, Ec = !1, Xn = null, gi = !1, e !== null && (wa(), jn[wn++] = Tc, jn[wn++] = Ac, jn[wn++] = As, Tc = e.id, Ac = e.overflow, As = t), t = Vr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (ka(t), f = o.fallback, h = t.mode, v = e.child, g = v.sibling, o = on(
        v,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = v.subtreeFlags & 65011712, g !== null ? f = on(
        g,
        f
      ) : (f = Gu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = Gf(a) : (v = h.cachePool, v !== null ? (g = hl._currentValue, v = v.parent !== g ? { parent: g, pool: g } : v) : v = Jp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: v
      }), f.memoizedState = h, f.childLanes = Gr(
        e,
        i,
        a
      ), t.memoizedState = Rg, o) : (ia(t), a = e.child, e = a.sibling, a = on(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Vr(e, t) {
      return t = Vf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Vf(e, t) {
      return e = he(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: B0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function jr(e, t, a) {
      return lh(t, e.child, null, a), e = Vr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function wr(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), $h(
        e.return,
        t,
        a
      );
    }
    function yy(e, t) {
      var a = Te(e);
      return e = !a && typeof Ct(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Xr(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function my(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !Sb[o])
        if (Sb[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || Eg[f] || (f !== "collapsed" && f !== "hidden" ? (Eg[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (Eg[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Te(i)) {
          for (var d = 0; d < i.length; d++)
            if (!yy(i[d], d)) break e;
        } else if (d = Ct(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), v = 0; !h.done; h = d.next()) {
              if (!yy(h.value, v)) break e;
              v++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (_t(e, t, i, a), i = ml.current, (i & Jm) !== 0)
        i = i & ah | Jm, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && wr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              wr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= ah;
      }
      switch (Ee(ml, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && fu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Xr(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && fu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Xr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Xr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Tn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), qa = -1, wo |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (il(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = on(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = on(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Qr(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && wu(e)));
    }
    function Vv(e, t, a) {
      switch (t.tag) {
        case 3:
          Dl(
            t,
            t.stateNode.containerInfo
          ), ju(
            t,
            hl,
            e.memoizedState.cache
          ), wi();
          break;
        case 27:
        case 5:
          $(t);
          break;
        case 4:
          Dl(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ju(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (ia(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Ip(
              e,
              t,
              a
            ) : (ia(t), e = Tn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ia(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (il(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return my(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ee(
            ml,
            ml.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, Nr(e, t, a);
        case 24:
          ju(
            t,
            hl,
            e.memoizedState.cache
          );
      }
      return Tn(e, t, a);
    }
    function Lr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = sr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Rl = !0;
        else {
          if (!Qr(e, a) && (t.flags & 128) === 0)
            return Rl = !1, Vv(
              e,
              t,
              a
            );
          Rl = (e.flags & 131072) !== 0;
        }
      else
        Rl = !1, (i = ke) && (wa(), i = (t.flags & 1048576) !== 0), i && (i = t.index, wa(), Lp(t, Y0, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Vo(t.elementType), t.type = e, typeof e == "function")
            Gh(e) ? (i = Iu(
              e,
              i
            ), t.tag = 1, t.type = e = Gi(e), t = dy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Yr(t, e), t.type = e = Gi(e), t = qr(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === vu) {
                t.tag = 11, t.type = e = Yh(e), t = _r(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === fs) {
                t.tag = 14, t = Sn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ra && (t = " Did you wrap a component in React.lazy() more than once?"), e = Ze(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return qr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Iu(
            i,
            t.pendingProps
          ), dy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Dl(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Lu(e, t), Zc(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, ju(t, hl, i), i !== f.cache && Jh(
              t,
              [hl],
              a,
              !0
            ), hn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = hy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = na(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Xc(o), t = hy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Nt = sl(e.firstChild), ya = t, ke = !0, Es = null, Ec = !1, Xn = null, gi = !0, e = ab(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (wi(), i === o) {
                t = Tn(
                  e,
                  t,
                  a
                );
                break e;
              }
              _t(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Yf(e, t), e === null ? (e = pu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : ke || (e = t.type, a = t.pendingProps, i = $t(
            Nn.current
          ), i = Ye(
            i
          ).createElement(e), i[El] = t, i[Il] = a, Dt(i, e, a), Jt(i), t.stateNode = i) : t.memoizedState = pu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return $(t), e === null && ke && (i = $t(Nn.current), o = O(), i = t.stateNode = em(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Ec || (o = it(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Xa(t, 0).serverProps = o)), ya = t, gi = !0, o = Nt, Cn(t.type) ? (Jg = o, Nt = sl(
            i.firstChild
          )) : Nt = o), _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), Yf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && ke && (f = O(), i = tr(
            t.type,
            f.ancestorInfo
          ), o = Nt, (d = !o) || (d = ui(
            o,
            t.type,
            t.pendingProps,
            gi
          ), d !== null ? (t.stateNode = d, Ec || (f = it(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Xa(t, 0).serverProps = f)), ya = t, Nt = sl(
            d.firstChild
          ), gi = !1, f = !0) : f = !1, d = !f), d && (i && wh(t, o), fn(t))), $(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, xn(o, f) ? i = null : d !== null && xn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = Ju(
            e,
            t,
            Ra,
            null,
            null,
            a
          ), op._currentValue = o), Yf(e, t), _t(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && ke && (e = t.pendingProps, a = O(), i = a.ancestorInfo.current, e = i != null ? ff(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Nt, (i = !a) || (i = fl(
            a,
            t.pendingProps,
            gi
          ), i !== null ? (t.stateNode = i, ya = t, Nt = null, i = !0) : i = !1, i = !i), i && (e && wh(t, a), fn(t))), null;
        case 13:
          return Ip(e, t, a);
        case 4:
          return Dl(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = lh(
            t,
            null,
            i,
            a
          ) : _t(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return _r(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return _t(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Tb || (Tb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ju(t, i, f), _t(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Xu(t), o = ft(o), al(t), i = vg(
            i,
            o,
            void 0
          ), ba(), t.flags |= 1, _t(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Sn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return qf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return my(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Vf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = on(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return Nr(e, t, a);
        case 24:
          return Xu(t), i = ft(hl), e === null ? (o = Wh(), o === null && (o = st, f = bf(), o.pooledCache = f, Xi(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, wl(t), ju(t, hl, o)) : ((e.lanes & a) !== 0 && (Lu(e, t), Zc(t, null, null, a), hn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ju(t, hl, i)) : (i = f.cache, ju(t, hl, i), i !== o.cache && Jh(
            t,
            [hl],
            a,
            !0
          ))), _t(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Zl(e) {
      e.flags |= 4;
    }
    function jf(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Jn) !== Gs)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !es(t)) {
        if (t = $n.current, t !== null && ((Ve & 4194048) === Ve ? Si !== null : (Ve & 62914560) !== Ve && (Ve & 536870912) === 0 || t !== Si))
          throw Qm = sg, C1;
        e.flags |= 8192;
      }
    }
    function wf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Po() : 536870912, e.lanes |= t, Hs |= t);
    }
    function Pu(e, t) {
      if (!ke)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function lt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Bl) !== mt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Bl) !== mt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Pp(e, t, a) {
      var i = t.pendingProps;
      switch (dr(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return lt(t), null;
        case 1:
          return lt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), lu(hl, t), qt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ji(t) ? (Zh(), Zl(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Lh())), lt(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Zl(t), a !== null ? (lt(t), jf(
            t,
            a
          )) : (lt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Zl(t), lt(t), jf(
            t,
            a
          )) : (lt(t), t.flags &= -16777217) : (e.memoizedProps !== i && Zl(t), lt(t), t.flags &= -16777217), null;
        case 27:
          k(t), a = $t(Nn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && Zl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return lt(t), null;
            }
            e = O(), ji(t) ? Xh(t) : (e = em(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Zl(t));
          }
          return lt(t), null;
        case 5:
          if (k(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Zl(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return lt(t), null;
            }
            if (o = O(), ji(t))
              Xh(t);
            else {
              switch (e = $t(Nn.current), tr(a, o.ancestorInfo), o = o.context, e = Ye(e), o) {
                case yh:
                  e = e.createElementNS(Bo, a);
                  break;
                case sv:
                  e = e.createElementNS(
                    Ss,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Bo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        Ss,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || bu.call(
                        jb,
                        a
                      ) || (jb[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[El] = t, e[Il] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Dt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Zl(t);
            }
          }
          return lt(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Zl(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = $t(Nn.current), a = O(), ji(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Ec, i = null;
              var f = ya;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = pd(
                      e,
                      a,
                      i
                    ), o !== null && (Xa(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = pd(
                      e,
                      a,
                      i
                    ), o !== null && (Xa(
                      t,
                      0
                    ).serverProps = o));
                }
              e[El] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Ly(e.nodeValue, a)), e || fn(t);
            } else
              o = a.ancestorInfo.current, o != null && ff(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Ye(e).createTextNode(
                i
              ), e[El] = t, t.stateNode = e;
          }
          return lt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = ji(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[El] = t, lt(t), (t.mode & Bl) !== mt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Zh(), wi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, lt(t), (t.mode & Bl) !== mt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Lh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ca(t), t) : (ca(t), null);
          }
          return ca(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Bl) !== mt && rn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), wf(t, t.updateQueue), lt(t), (t.mode & Bl) !== mt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return qt(t), e === null && Xy(
            t.stateNode.containerInfo
          ), lt(t), null;
        case 10:
          return lu(t.type, t), lt(t), null;
        case 19:
          if (We(ml, t), o = t.memoizedState, o === null) return lt(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) Pu(o, !1);
            else {
              if (Bt !== Oc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = fu(e), f !== null) {
                    for (t.flags |= 128, Pu(o, !1), e = f.updateQueue, t.updateQueue = e, wf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Vh(a, e), a = a.sibling;
                    return Ee(
                      ml,
                      ml.current & ah | Jm,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && Bn() > I0 && (t.flags |= 128, i = !0, Pu(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = fu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, wf(t, e), Pu(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !ke)
                  return lt(t), null;
              } else
                2 * Bn() - o.renderingStartTime > I0 && a !== 536870912 && (t.flags |= 128, i = !0, Pu(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = Bn(), e.sibling = null, a = ml.current, a = i ? a & ah | Jm : a & ah, Ee(ml, a, t), e) : (lt(t), null);
        case 22:
        case 23:
          return ca(t), $a(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), a = t.updateQueue, a !== null && wf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && We(Ds, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), lu(hl, t), lt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function e0(e, t) {
      switch (dr(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Bl) !== mt && rn(t), t) : null;
        case 3:
          return lu(hl, t), qt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return k(t), null;
        case 13:
          if (ca(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            wi();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Bl) !== mt && rn(t), t) : null;
        case 19:
          return We(ml, t), null;
        case 4:
          return qt(t), null;
        case 10:
          return lu(t.type, t), null;
        case 22:
        case 23:
          return ca(t), $a(t), e !== null && We(Ds, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Bl) !== mt && rn(t), t) : null;
        case 24:
          return lu(hl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function py(e, t) {
      switch (dr(t), t.tag) {
        case 3:
          lu(hl, t), qt(t);
          break;
        case 26:
        case 27:
        case 5:
          k(t);
          break;
        case 4:
          qt(t);
          break;
        case 13:
          ca(t);
          break;
        case 19:
          We(ml, t);
          break;
        case 10:
          lu(t.type, t);
          break;
        case 22:
        case 23:
          ca(t), $a(t), e !== null && We(Ds, t);
          break;
        case 24:
          lu(hl, t);
      }
    }
    function Wa(e) {
      return (e.mode & Bl) !== mt;
    }
    function vy(e, t) {
      Wa(e) ? (La(), Fi(t, e), Ta()) : Fi(t, e);
    }
    function Zr(e, t, a) {
      Wa(e) ? (La(), Ii(
        a,
        e,
        t
      ), Ta()) : Ii(
        a,
        e,
        t
      );
    }
    function Fi(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & yl) !== Qn ? P !== null && typeof P.markComponentPassiveEffectMountStarted == "function" && P.markComponentPassiveEffectMountStarted(
              t
            ) : (e & ql) !== Qn && P !== null && typeof P.markComponentLayoutEffectMountStarted == "function" && P.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & ma) !== Qn && (dh = !0), i = ae(
              t,
              g2,
              a
            ), (e & ma) !== Qn && (dh = !1), (e & yl) !== Qn ? P !== null && typeof P.markComponentPassiveEffectMountStopped == "function" && P.markComponentPassiveEffectMountStopped() : (e & ql) !== Qn && P !== null && typeof P.markComponentLayoutEffectMountStopped == "function" && P.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & ql) !== 0 ? "useLayoutEffect" : (a.tag & ma) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ae(
                t,
                function(h, v) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    v
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        pe(t, t.return, h);
      }
    }
    function Ii(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & yl) !== Qn ? P !== null && typeof P.markComponentPassiveEffectUnmountStarted == "function" && P.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & ql) !== Qn && P !== null && typeof P.markComponentLayoutEffectUnmountStarted == "function" && P.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & ma) !== Qn && (dh = !0), o = t, ae(
                o,
                b2,
                o,
                a,
                h
              ), (e & ma) !== Qn && (dh = !1), (e & yl) !== Qn ? P !== null && typeof P.markComponentPassiveEffectUnmountStopped == "function" && P.markComponentPassiveEffectUnmountStopped() : (e & ql) !== Qn && P !== null && typeof P.markComponentLayoutEffectUnmountStopped == "function" && P.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (v) {
        pe(t, t.return, v);
      }
    }
    function gy(e, t) {
      Wa(e) ? (La(), Fi(t, e), Ta()) : Fi(t, e);
    }
    function Xf(e, t, a) {
      Wa(e) ? (La(), Ii(
        a,
        e,
        t
      ), Ta()) : Ii(
        a,
        e,
        t
      );
    }
    function by(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || uh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          fe(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          fe(e) || "instance"
        ));
        try {
          ae(
            e,
            Kp,
            t,
            a
          );
        } catch (i) {
          pe(e, e.return, i);
        }
      }
    }
    function t0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function jv(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || uh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        fe(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        fe(e) || "instance"
      ));
      try {
        var o = Iu(
          e.type,
          a,
          e.elementType === e.type
        ), f = ae(
          e,
          t0,
          t,
          o,
          i
        );
        a = Ab, f !== void 0 || a.has(e.type) || (a.add(e.type), ae(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            fe(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        pe(e, e.return, d);
      }
    }
    function $r(e, t, a) {
      a.props = Iu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Wa(e) ? (La(), ae(
        e,
        k1,
        e,
        t,
        a
      ), Ta()) : ae(
        e,
        k1,
        e,
        t,
        a
      );
    }
    function l0(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Wa(e))
            try {
              La(), e.refCleanup = t(a);
            } finally {
              Ta();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            fe(e)
          ), t.current = a;
      }
    }
    function uo(e, t) {
      try {
        ae(e, l0, e);
      } catch (a) {
        pe(e, t, a);
      }
    }
    function Ua(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Wa(e))
              try {
                La(), ae(e, i);
              } finally {
                Ta(e);
              }
            else ae(e, i);
          } catch (o) {
            pe(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Wa(e))
              try {
                La(), ae(e, a, null);
              } finally {
                Ta(e);
              }
            else ae(e, a, null);
          } catch (o) {
            pe(e, t, o);
          }
        else a.current = null;
    }
    function Sy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", j0 && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function a0(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", j0 && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function n0(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ae(
          e,
          yu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        pe(e, e.return, o);
      }
    }
    function Ty(e, t, a) {
      try {
        ae(
          e,
          Ot,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        pe(e, e.return, i);
      }
    }
    function Ay(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Cn(e.type) || e.tag === 4;
    }
    function Pi(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ay(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Cn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hu));
      else if (i !== 4 && (i === 27 && Cn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Qf(e, t, a), e = e.sibling; e !== null; )
          Qf(e, t, a), e = e.sibling;
    }
    function ec(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Cn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (ec(e, t, a), e = e.sibling; e !== null; )
          ec(e, t, a), e = e.sibling;
    }
    function u0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ay(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Pi(e), ec(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (mu(a), t.flags &= -33), t = Pi(e), ec(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Pi(e), Qf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Ey(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ae(
          e,
          sa,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        pe(e, e.return, i);
      }
    }
    function Jr(e, t) {
      if (e = e.containerInfo, Lg = yv, e = Vp(e), Bh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, v = -1, g = 0, _ = 0, V = e, C = null;
              t: for (; ; ) {
                for (var j; V !== a || o !== 0 && V.nodeType !== 3 || (h = d + o), V !== f || i !== 0 && V.nodeType !== 3 || (v = d + i), V.nodeType === 3 && (d += V.nodeValue.length), (j = V.firstChild) !== null; )
                  C = V, V = j;
                for (; ; ) {
                  if (V === e) break t;
                  if (C === a && ++g === o && (h = d), C === f && ++_ === i && (v = d), (j = V.nextSibling) !== null) break;
                  V = C, C = V.parentNode;
                }
                V = j;
              }
              a = h === -1 || v === -1 ? null : { start: h, end: v };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (Zg = {
        focusedElem: e,
        selectionRange: a
      }, yv = !1, zl = t; zl !== null; )
        if (t = zl, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, zl = e;
        else
          for (; zl !== null; ) {
            switch (e = t = zl, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && jv(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    vo(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        vo(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, zl = e;
              break;
            }
            zl = t.return;
          }
    }
    function Ry(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          An(e, a), i & 4 && vy(a, ql | Ln);
          break;
        case 1:
          if (An(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || uh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                fe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                fe(a) || "instance"
              )), Wa(a) ? (La(), ae(
                a,
                gg,
                a,
                e
              ), Ta()) : ae(
                a,
                gg,
                a,
                e
              );
            else {
              var o = Iu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || uh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                fe(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                fe(a) || "instance"
              )), Wa(a) ? (La(), ae(
                a,
                $1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Ta()) : ae(
                a,
                $1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && by(a), i & 512 && uo(a, a.return);
          break;
        case 3:
          if (t = Qa(), An(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              ae(
                a,
                Kp,
                i,
                o
              );
            } catch (d) {
              pe(a, a.return, d);
            }
          }
          e.effectDuration += Qu(t);
          break;
        case 27:
          t === null && i & 4 && Ey(a);
        case 26:
        case 5:
          An(e, a), t === null && i & 4 && n0(a), i & 512 && uo(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = Qa(), An(e, a), e = a.stateNode, e.effectDuration += Qi(i);
            try {
              ae(
                a,
                Sy,
                a,
                t,
                V0,
                e.effectDuration
              );
            } catch (d) {
              pe(a, a.return, d);
            }
          } else An(e, a);
          break;
        case 13:
          An(e, a), i & 4 && io(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Ff.bind(
            null,
            a
          ), go(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || Dc, !i) {
            t = t !== null && t.memoizedState !== null || Qt, o = Dc;
            var f = Qt;
            Dc = i, (Qt = t) && !f ? En(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : An(e, a), Dc = o, Qt = f;
          }
          break;
        case 30:
          break;
        default:
          An(e, a);
      }
    }
    function zy(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Nc(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function su(e, t, a) {
      for (a = a.child; a !== null; )
        tc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function tc(e, t, a) {
      if (rl && typeof rl.onCommitFiberUnmount == "function")
        try {
          rl.onCommitFiberUnmount(di, a);
        } catch (f) {
          Fl || (Fl = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          Qt || Ua(a, t), su(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Qt || Ua(a, t);
          var i = tl, o = Ya;
          Cn(a.type) && (tl = a.stateNode, Ya = !1), su(
            e,
            t,
            a
          ), ae(
            a,
            So,
            a.stateNode
          ), tl = i, Ya = o;
          break;
        case 5:
          Qt || Ua(a, t);
        case 6:
          if (i = tl, o = Ya, tl = null, su(
            e,
            t,
            a
          ), tl = i, Ya = o, tl !== null)
            if (Ya)
              try {
                ae(
                  a,
                  mo,
                  tl,
                  a.stateNode
                );
              } catch (f) {
                pe(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                ae(
                  a,
                  Ha,
                  tl,
                  a.stateNode
                );
              } catch (f) {
                pe(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          tl !== null && (Ya ? (e = tl, po(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), yc(e)) : po(tl, a.stateNode));
          break;
        case 4:
          i = tl, o = Ya, tl = a.stateNode.containerInfo, Ya = !0, su(
            e,
            t,
            a
          ), tl = i, Ya = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Qt || Ii(
            ma,
            a,
            t
          ), Qt || Zr(
            a,
            t,
            ql
          ), su(
            e,
            t,
            a
          );
          break;
        case 1:
          Qt || (Ua(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && $r(
            a,
            t,
            i
          )), su(
            e,
            t,
            a
          );
          break;
        case 21:
          su(
            e,
            t,
            a
          );
          break;
        case 22:
          Qt = (i = Qt) || a.memoizedState !== null, su(
            e,
            t,
            a
          ), Qt = i;
          break;
        default:
          su(
            e,
            t,
            a
          );
      }
    }
    function io(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ae(
            t,
            fa,
            e
          );
        } catch (a) {
          pe(t, t.return, a);
        }
    }
    function Kr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Eb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Eb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function lc(e, t) {
      var a = Kr(e);
      t.forEach(function(i) {
        var o = ai.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), Ut)
            if (ih !== null && ch !== null)
              ho(ch, ih);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function Sl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Cn(h.type)) {
                  tl = h.stateNode, Ya = !1;
                  break e;
                }
                break;
              case 5:
                tl = h.stateNode, Ya = !1;
                break e;
              case 3:
              case 4:
                tl = h.stateNode.containerInfo, Ya = !0;
                break e;
            }
            h = h.return;
          }
          if (tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          tc(o, f, d), tl = null, Ya = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Dy(t, e), t = t.sibling;
    }
    function Dy(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(t, e), $l(e), i & 4 && (Ii(
            ma | Ln,
            e,
            e.return
          ), Fi(ma | Ln, e), Zr(
            e,
            e.return,
            ql | Ln
          ));
          break;
        case 1:
          Sl(t, e), $l(e), i & 512 && (Qt || a === null || Ua(a, a.return)), i & 64 && Dc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ou;
          if (Sl(t, e), $l(e), i & 512 && (Qt || a === null || Ua(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Co] || o[El] || o.namespaceURI === Bo || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Dt(o, i, a), o[El] = e, Jt(o), i = o;
                        break e;
                      case "link":
                        var f = nm(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Dt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = nm(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], I(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Dt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[El] = e, Jt(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  um(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = vd(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? um(
                o,
                e.type,
                e.stateNode
              ) : vd(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Ty(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          Sl(t, e), $l(e), i & 512 && (Qt || a === null || Ua(a, a.return)), a !== null && i & 4 && Ty(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (Sl(t, e), $l(e), i & 512 && (Qt || a === null || Ua(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              ae(e, mu, t);
            } catch (_) {
              pe(e, e.return, _);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Ty(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (zg = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Sl(t, e), $l(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              ae(
                e,
                sc,
                t,
                a,
                i
              );
            } catch (_) {
              pe(e, e.return, _);
            }
          }
          break;
        case 3:
          if (o = Qa(), rv = null, f = Ou, Ou = Pf(t.containerInfo), Sl(t, e), Ou = f, $l(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              ae(
                e,
                Py,
                t.containerInfo
              );
            } catch (_) {
              pe(e, e.return, _);
            }
          zg && (zg = !1, ac(e)), t.effectDuration += Qu(o);
          break;
        case 4:
          i = Ou, Ou = Pf(
            e.stateNode.containerInfo
          ), Sl(t, e), $l(e), Ou = i;
          break;
        case 12:
          i = Qa(), Sl(t, e), $l(e), e.stateNode.effectDuration += Qi(i);
          break;
        case 13:
          Sl(t, e), $l(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Cg = Bn()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, lc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, v = Dc, g = Qt;
          if (Dc = v || o, Qt = g || h, Sl(t, e), Qt = g, Dc = v, $l(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~B0 : t._visibility | B0, o && (a === null || h || Dc || Qt || Tl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? ae(h, kl, f) : ae(
                      h,
                      Fy,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (_) {
                    pe(h, h.return, _);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? ae(h, Wy, d) : ae(
                      h,
                      yd,
                      d,
                      h.memoizedProps
                    );
                  } catch (_) {
                    pe(h, h.return, _);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, lc(e, a))));
          break;
        case 19:
          Sl(t, e), $l(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, lc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Sl(t, e), $l(e);
      }
    }
    function $l(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ae(e, u0, e);
        } catch (a) {
          pe(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ac(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ac(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function An(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Ry(e, t.alternate, t), t = t.sibling;
    }
    function oa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zr(
            e,
            e.return,
            ql
          ), Tl(e);
          break;
        case 1:
          Ua(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && $r(
            e,
            e.return,
            t
          ), Tl(e);
          break;
        case 27:
          ae(
            e,
            So,
            e.stateNode
          );
        case 26:
        case 5:
          Ua(e, e.return), Tl(e);
          break;
        case 22:
          e.memoizedState === null && Tl(e);
          break;
        case 30:
          Tl(e);
          break;
        default:
          Tl(e);
      }
    }
    function Tl(e) {
      for (e = e.child; e !== null; )
        oa(e), e = e.sibling;
    }
    function ru(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(
            e,
            a,
            i
          ), vy(a, ql);
          break;
        case 1:
          if (En(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ae(
            a,
            gg,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ae(
                a,
                $c,
                t,
                e
              );
            } catch (f) {
              pe(a, a.return, f);
            }
          }
          i && o & 64 && by(a), uo(a, a.return);
          break;
        case 27:
          Ey(a);
        case 26:
        case 5:
          En(
            e,
            a,
            i
          ), i && t === null && o & 4 && n0(a), uo(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = Qa(), En(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Qi(o);
            try {
              ae(
                a,
                Sy,
                a,
                t,
                V0,
                i.effectDuration
              );
            } catch (f) {
              pe(a, a.return, f);
            }
          } else
            En(
              e,
              a,
              i
            );
          break;
        case 13:
          En(
            e,
            a,
            i
          ), i && o & 4 && io(e, a);
          break;
        case 22:
          a.memoizedState === null && En(
            e,
            a,
            i
          ), uo(a, a.return);
          break;
        case 30:
          break;
        default:
          En(
            e,
            a,
            i
          );
      }
    }
    function En(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        ru(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Rn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Xi(e), a != null && sn(a));
    }
    function Fa(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Xi(t), e != null && sn(e));
    }
    function at(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          Lf(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function Lf(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          at(
            e,
            t,
            a,
            i
          ), o & 2048 && gy(t, yl | Ln);
          break;
        case 1:
          at(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = Qa();
          at(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Xi(t), a != null && sn(a))), e.passiveEffectDuration += Qu(f);
          break;
        case 12:
          if (o & 2048) {
            o = Qa(), at(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += Qi(o);
            try {
              ae(
                t,
                a0,
                t,
                t.alternate,
                V0,
                e.passiveEffectDuration
              );
            } catch (h) {
              pe(t, t.return, h);
            }
          } else
            at(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          at(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & Sc ? at(
            e,
            t,
            a,
            i
          ) : co(
            e,
            t
          ) : f._visibility & Sc ? at(
            e,
            t,
            a,
            i
          ) : (f._visibility |= Sc, ei(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Rn(d, t);
          break;
        case 24:
          at(
            e,
            t,
            a,
            i
          ), o & 2048 && Fa(t.alternate, t);
          break;
        default:
          at(
            e,
            t,
            a,
            i
          );
      }
    }
    function ei(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        kr(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function kr(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ei(
            e,
            t,
            a,
            i,
            o
          ), gy(t, yl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & Sc ? ei(
            e,
            t,
            a,
            i,
            o
          ) : co(
            e,
            t
          ) : (d._visibility |= Sc, ei(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Rn(
            t.alternate,
            t
          );
          break;
        case 24:
          ei(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && Fa(t.alternate, t);
          break;
        default:
          ei(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function co(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              co(
                a,
                i
              ), o & 2048 && Rn(
                i.alternate,
                i
              );
              break;
            case 24:
              co(
                a,
                i
              ), o & 2048 && Fa(
                i.alternate,
                i
              );
              break;
            default:
              co(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function nc(e) {
      if (e.subtreeFlags & Km)
        for (e = e.child; e !== null; )
          ti(e), e = e.sibling;
    }
    function ti(e) {
      switch (e.tag) {
        case 26:
          nc(e), e.flags & Km && e.memoizedState !== null && p0(
            Ou,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          nc(e);
          break;
        case 3:
        case 4:
          var t = Ou;
          Ou = Pf(
            e.stateNode.containerInfo
          ), nc(e), Ou = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Km, Km = 16777216, nc(e), Km = t) : nc(e));
          break;
        default:
          nc(e);
      }
    }
    function Zf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function oo(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            zl = i, My(
              i,
              e
            );
          }
        Zf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Oy(e), e = e.sibling;
    }
    function Oy(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          oo(e), e.flags & 2048 && Xf(
            e,
            e.return,
            yl | Ln
          );
          break;
        case 3:
          var t = Qa();
          oo(e), e.stateNode.passiveEffectDuration += Qu(t);
          break;
        case 12:
          t = Qa(), oo(e), e.stateNode.passiveEffectDuration += Qi(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & Sc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~Sc, $f(e)) : oo(e);
          break;
        default:
          oo(e);
      }
    }
    function $f(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            zl = i, My(
              i,
              e
            );
          }
        Zf(e);
      }
      for (e = e.child; e !== null; )
        Jf(e), e = e.sibling;
    }
    function Jf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Xf(
            e,
            e.return,
            yl
          ), $f(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & Sc && (t._visibility &= ~Sc, $f(e));
          break;
        default:
          $f(e);
      }
    }
    function My(e, t) {
      for (; zl !== null; ) {
        var a = zl, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Xf(
              i,
              t,
              yl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && Xi(i));
            break;
          case 24:
            sn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, zl = i;
        else
          e: for (a = e; zl !== null; ) {
            i = zl;
            var o = i.sibling, f = i.return;
            if (zy(i), i === a) {
              zl = null;
              break e;
            }
            if (o !== null) {
              o.return = f, zl = o;
              break e;
            }
            zl = f;
          }
      }
    }
    function Uy() {
      T2.forEach(function(e) {
        return e();
      });
    }
    function xy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Jl(e) {
      if ((tt & pa) !== tn && Ve !== 0)
        return Ve & -Ve;
      var t = q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = zs, e !== 0 ? e : Vy()) : Rp();
    }
    function i0() {
      an === 0 && (an = (Ve & 536870912) === 0 || ke ? Sh() : 536870912);
      var e = $n.current;
      return e !== null && (e.flags |= 32), an;
    }
    function Rt(e, t, a) {
      if (dh && console.error("useInsertionEffect must not schedule updates."), qg && (P0 = !0), (e === st && (nt === xs || nt === Cs) || e.cancelPendingCommit !== null) && (ic(e, 0), du(
        e,
        Ve,
        an,
        !1
      )), Hc(e, a), (tt & pa) !== 0 && e === st) {
        if (Pl)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Ge && fe(Ge) || "Unknown", _b.has(e) || (_b.add(e), t = fe(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              Hb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), Hb = !0);
          }
      } else
        Ut && kn(e, t, a), s0(t), e === st && ((tt & pa) === tn && (Xo |= a), Bt === Us && du(
          e,
          Ve,
          an,
          !1
        )), xa(e);
    }
    function wt(e, t, a) {
      if ((tt & (pa | Mu)) !== tn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Io(e, t), o = i ? Hy(e, t) : Pr(e, t, !0), f = i;
      do {
        if (o === Oc) {
          sh && !i && du(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !c0(a)) {
            o = Pr(e, t, !1), f = !1;
            continue;
          }
          if (o === oh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = ep;
                var v = o.current.memoizedState.isDehydrated;
                if (v && (ic(
                  o,
                  h
                ).flags |= 256), h = Pr(
                  o,
                  h,
                  !1
                ), h !== oh) {
                  if (Ug && !v) {
                    o.errorRecoveryDisabledLanes |= f, Xo |= f, o = Us;
                    break e;
                  }
                  o = va, va = d, o !== null && (va === null ? va = o : va.push.apply(
                    va,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== oh) continue;
            }
          }
          if (o === Wm) {
            ic(e, 0), du(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Oc:
              case Wm:
                throw Error("Root did not complete. This is a bug in React.");
              case Us:
                if ((t & 4194048) !== t) break;
              case W0:
                du(
                  i,
                  t,
                  an,
                  !jo
                );
                break e;
              case oh:
                va = null;
                break;
              case Dg:
              case Rb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (q.actQueue !== null)
              nd(
                i,
                a,
                t,
                va,
                tp,
                F0,
                an,
                Xo,
                Hs
              );
            else {
              if ((t & 62914560) === t && (f = Cg + Db - Bn(), 10 < f)) {
                if (du(
                  i,
                  t,
                  an,
                  !jo
                ), ta(i, 0, !0) !== 0) break e;
                i.timeoutHandle = wb(
                  Ft.bind(
                    null,
                    i,
                    a,
                    va,
                    tp,
                    F0,
                    t,
                    an,
                    Xo,
                    Hs,
                    jo,
                    o,
                    z2,
                    M1,
                    0
                  ),
                  f
                );
                break e;
              }
              Ft(
                i,
                a,
                va,
                tp,
                F0,
                t,
                an,
                Xo,
                Hs,
                jo,
                o,
                E2,
                M1,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      xa(e);
    }
    function Ft(e, t, a, i, o, f, d, h, v, g, _, V, C, j) {
      if (e.timeoutHandle = Ys, V = t.subtreeFlags, (V & 8192 || (V & 16785408) === 16785408) && (cp = { stylesheets: null, count: 0, unsuspend: m0 }, ti(t), V = v0(), V !== null)) {
        e.cancelPendingCommit = V(
          nd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            v,
            _,
            R2,
            C,
            j
          )
        ), du(
          e,
          f,
          d,
          !g
        );
        return;
      }
      nd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        v
      );
    }
    function c0(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!ha(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function du(e, t, a, i) {
      t &= ~xg, t &= ~Xo, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Al(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Ep(e, a, t);
    }
    function uc() {
      return (tt & (pa | Mu)) === tn ? (cc(0), !1) : !0;
    }
    function Wr() {
      if (Ge !== null) {
        if (nt === Ga)
          var e = Ge.return;
        else
          e = Ge, hr(), Ja(e), th = null, $m = 0, e = Ge;
        for (; e !== null; )
          py(e.alternate, e), e = e.return;
        Ge = null;
      }
    }
    function ic(e, t) {
      var a = e.timeoutHandle;
      a !== Ys && (e.timeoutHandle = Ys, G2(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Wr(), st = e, Ge = a = on(e.current, null), Ve = t, nt = Ga, ln = null, jo = !1, sh = Io(e, t), Ug = !1, Bt = Oc, Hs = an = xg = Xo = wo = 0, va = ep = null, F0 = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Al(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return Ti = t, yf(), t = D1(), 1e3 < t - z1 && (q.recentlyCreatedOwnerStacks = 0, z1 = t), zu.discardPendingWarnings(), a;
    }
    function Kf(e, t) {
      Ae = null, q.H = K0, q.getCurrentStack = null, Pl = !1, da = null, t === Xm || t === Q0 ? (t = Ph(), nt = Im) : t === C1 ? (t = Ph(), nt = zb) : nt = t === mb ? Mg : t !== null && typeof t == "object" && typeof t.then == "function" ? fh : Fm, ln = t;
      var a = Ge;
      if (a === null)
        Bt = Wm, no(
          e,
          na(t, e.current)
        );
      else
        switch (a.mode & Bl && au(a), ba(), nt) {
          case Fm:
            P !== null && typeof P.markComponentErrored == "function" && P.markComponentErrored(
              a,
              t,
              Ve
            );
            break;
          case xs:
          case Cs:
          case Im:
          case fh:
          case Pm:
            P !== null && typeof P.markComponentSuspended == "function" && P.markComponentSuspended(
              a,
              t,
              Ve
            );
        }
    }
    function Fr() {
      var e = q.H;
      return q.H = K0, e === null ? K0 : e;
    }
    function Cy() {
      var e = q.A;
      return q.A = S2, e;
    }
    function Ir() {
      Bt = Us, jo || (Ve & 4194048) !== Ve && $n.current !== null || (sh = !0), (wo & 134217727) === 0 && (Xo & 134217727) === 0 || st === null || du(
        st,
        Ve,
        an,
        !1
      );
    }
    function Pr(e, t, a) {
      var i = tt;
      tt |= pa;
      var o = Fr(), f = Cy();
      if (st !== e || Ve !== t) {
        if (Ut) {
          var d = e.memoizedUpdaters;
          0 < d.size && (ho(e, Ve), d.clear()), Vl(e, t);
        }
        tp = null, ic(e, t);
      }
      Ai(t), t = !1, d = Bt;
      e: do
        try {
          if (nt !== Ga && Ge !== null) {
            var h = Ge, v = ln;
            switch (nt) {
              case Mg:
                Wr(), d = W0;
                break e;
              case Im:
              case xs:
              case Cs:
              case fh:
                $n.current === null && (t = !0);
                var g = nt;
                if (nt = Ga, ln = null, li(e, h, v, g), a && sh) {
                  d = Oc;
                  break e;
                }
                break;
              default:
                g = nt, nt = Ga, ln = null, li(e, h, v, g);
            }
          }
          ed(), d = Bt;
          break;
        } catch (_) {
          Kf(e, _);
        }
      while (!0);
      return t && e.shellSuspendCounter++, hr(), tt = i, q.H = o, q.A = f, Js(), Ge === null && (st = null, Ve = 0, yf()), d;
    }
    function ed() {
      for (; Ge !== null; ) Ny(Ge);
    }
    function Hy(e, t) {
      var a = tt;
      tt |= pa;
      var i = Fr(), o = Cy();
      if (st !== e || Ve !== t) {
        if (Ut) {
          var f = e.memoizedUpdaters;
          0 < f.size && (ho(e, Ve), f.clear()), Vl(e, t);
        }
        tp = null, I0 = Bn() + Ob, ic(e, t);
      } else
        sh = Io(
          e,
          t
        );
      Ai(t);
      e: do
        try {
          if (nt !== Ga && Ge !== null)
            t: switch (t = Ge, f = ln, nt) {
              case Fm:
                nt = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  Fm
                );
                break;
              case xs:
              case Cs:
                if (Ih(f)) {
                  nt = Ga, ln = null, td(t);
                  break;
                }
                t = function() {
                  nt !== xs && nt !== Cs || st !== e || (nt = Pm), xa(e);
                }, f.then(t, t);
                break e;
              case Im:
                nt = Pm;
                break e;
              case zb:
                nt = Og;
                break e;
              case Pm:
                Ih(f) ? (nt = Ga, ln = null, td(t)) : (nt = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  Pm
                ));
                break;
              case Og:
                var d = null;
                switch (Ge.tag) {
                  case 26:
                    d = Ge.memoizedState;
                  case 5:
                  case 27:
                    var h = Ge;
                    if (!d || es(d)) {
                      nt = Ga, ln = null;
                      var v = h.sibling;
                      if (v !== null) Ge = v;
                      else {
                        var g = h.return;
                        g !== null ? (Ge = g, kf(g)) : Ge = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                nt = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  Og
                );
                break;
              case fh:
                nt = Ga, ln = null, li(
                  e,
                  t,
                  f,
                  fh
                );
                break;
              case Mg:
                Wr(), Bt = W0;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          q.actQueue !== null ? ed() : _y();
          break;
        } catch (_) {
          Kf(e, _);
        }
      while (!0);
      return hr(), q.H = i, q.A = o, tt = a, Ge !== null ? (P !== null && typeof P.markRenderYielded == "function" && P.markRenderYielded(), Oc) : (Js(), st = null, Ve = 0, yf(), Bt);
    }
    function _y() {
      for (; Ge !== null && !R0(); )
        Ny(Ge);
    }
    function Ny(e) {
      var t = e.alternate;
      (e.mode & Bl) !== mt ? (yr(e), t = ae(
        e,
        Lr,
        t,
        e,
        Ti
      ), au(e)) : t = ae(
        e,
        Lr,
        t,
        e,
        Ti
      ), e.memoizedProps = e.pendingProps, t === null ? kf(e) : Ge = t;
    }
    function td(e) {
      var t = ae(e, ld, e);
      e.memoizedProps = e.pendingProps, t === null ? kf(e) : Ge = t;
    }
    function ld(e) {
      var t = e.alternate, a = (e.mode & Bl) !== mt;
      switch (a && yr(e), e.tag) {
        case 15:
        case 0:
          t = ry(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Ve
          );
          break;
        case 11:
          t = ry(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Ve
          );
          break;
        case 5:
          Ja(e);
        default:
          py(t, e), e = Ge = Vh(e, Ti), t = Lr(t, e, Ti);
      }
      return a && au(e), t;
    }
    function li(e, t, a, i) {
      hr(), Ja(t), th = null, $m = 0;
      var o = t.return;
      try {
        if (Bf(
          e,
          o,
          t,
          a,
          Ve
        )) {
          Bt = Wm, no(
            e,
            na(a, e.current)
          ), Ge = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Ge = o, f;
        Bt = Wm, no(
          e,
          na(a, e.current)
        ), Ge = null;
        return;
      }
      t.flags & 32768 ? (ke || i === Fm ? e = !0 : sh || (Ve & 536870912) !== 0 ? e = !1 : (jo = e = !0, (i === xs || i === Cs || i === Im || i === fh) && (i = $n.current, i !== null && i.tag === 13 && (i.flags |= 16384))), ad(t, e)) : kf(t);
    }
    function kf(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          ad(
            t,
            jo
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, yr(t), a = ae(
          t,
          Pp,
          a,
          t,
          Ti
        ), (t.mode & Bl) !== mt && Li(t), a !== null) {
          Ge = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Ge = t;
          return;
        }
        Ge = t = e;
      } while (t !== null);
      Bt === Oc && (Bt = Rb);
    }
    function ad(e, t) {
      do {
        var a = e0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Ge = a;
          return;
        }
        if ((e.mode & Bl) !== mt) {
          Li(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Ge = e;
          return;
        }
        Ge = e = a;
      } while (e !== null);
      Bt = W0, Ge = null;
    }
    function nd(e, t, a, i, o, f, d, h, v) {
      e.cancelPendingCommit = null;
      do
        fo();
      while (Yl !== _s);
      if (zu.flushLegacyContextWarning(), zu.flushPendingUnsafeLifecycleWarnings(), (tt & (pa | Mu)) !== tn)
        throw Error("Should not already be working.");
      if (P !== null && typeof P.markCommitStarted == "function" && P.markCommitStarted(a), t === null) Tt();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= ug, xv(
          e,
          a,
          f,
          d,
          h,
          v
        ), e === st && (Ge = st = null, Ve = 0), rh = t, Lo = e, Zo = a, _g = f, Ng = o, Cb = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gy(Mo, function() {
          return Wf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), V0 = Wd(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null, o = ge.p, ge.p = dl, d = tt, tt |= Mu;
          try {
            Jr(e, t, a);
          } finally {
            tt = d, ge.p = o, q.T = i;
          }
        }
        Yl = Mb, zn(), ud(), o0();
      }
    }
    function zn() {
      if (Yl === Mb) {
        Yl = _s;
        var e = Lo, t = rh, a = Zo, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null;
          var o = ge.p;
          ge.p = dl;
          var f = tt;
          tt |= Mu;
          try {
            ih = a, ch = e, Dy(t, e), ch = ih = null, a = Zg;
            var d = Vp(e.containerInfo), h = a.focusedElem, v = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Gp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (v !== null && Bh(h)) {
                var g = v.start, _ = v.end;
                if (_ === void 0 && (_ = g), "selectionStart" in h)
                  h.selectionStart = g, h.selectionEnd = Math.min(
                    _,
                    h.value.length
                  );
                else {
                  var V = h.ownerDocument || document, C = V && V.defaultView || window;
                  if (C.getSelection) {
                    var j = C.getSelection(), ne = h.textContent.length, be = Math.min(
                      v.start,
                      ne
                    ), rt = v.end === void 0 ? be : Math.min(v.end, ne);
                    !j.extend && be > rt && (d = rt, rt = be, be = d);
                    var Xe = Nh(
                      h,
                      be
                    ), A = Nh(
                      h,
                      rt
                    );
                    if (Xe && A && (j.rangeCount !== 1 || j.anchorNode !== Xe.node || j.anchorOffset !== Xe.offset || j.focusNode !== A.node || j.focusOffset !== A.offset)) {
                      var E = V.createRange();
                      E.setStart(Xe.node, Xe.offset), j.removeAllRanges(), be > rt ? (j.addRange(E), j.extend(A.node, A.offset)) : (E.setEnd(A.node, A.offset), j.addRange(E));
                    }
                  }
                }
              }
              for (V = [], j = h; j = j.parentNode; )
                j.nodeType === 1 && V.push({
                  element: j,
                  left: j.scrollLeft,
                  top: j.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < V.length; h++) {
                var z = V[h];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            yv = !!Lg, Zg = Lg = null;
          } finally {
            tt = f, ge.p = o, q.T = i;
          }
        }
        e.current = t, Yl = Ub;
      }
    }
    function ud() {
      if (Yl === Ub) {
        Yl = _s;
        var e = Lo, t = rh, a = Zo, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = q.T, q.T = null;
          var o = ge.p;
          ge.p = dl;
          var f = tt;
          tt |= Mu;
          try {
            P !== null && typeof P.markLayoutEffectsStarted == "function" && P.markLayoutEffectsStarted(a), ih = a, ch = e, Ry(
              e,
              t.alternate,
              t
            ), ch = ih = null, P !== null && typeof P.markLayoutEffectsStopped == "function" && P.markLayoutEffectsStopped();
          } finally {
            tt = f, ge.p = o, q.T = i;
          }
        }
        Yl = xb;
      }
    }
    function o0() {
      if (Yl === D2 || Yl === xb) {
        Yl = _s, Kv();
        var e = Lo, t = rh, a = Zo, i = Cb, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? Yl = Hg : (Yl = _s, rh = Lo = null, Dn(e, e.pendingLanes), Ns = 0, ap = null);
        var f = e.pendingLanes;
        if (f === 0 && (Qo = null), o || ro(e), o = Ah(a), t = t.stateNode, rl && typeof rl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case dl:
                var h = Md;
                break;
              case en:
                h = ds;
                break;
              case Tu:
                h = Mo;
                break;
              case Hd:
                h = hs;
                break;
              default:
                h = Mo;
            }
            rl.onCommitFiberRoot(
              di,
              t,
              h,
              d
            );
          } catch (V) {
            Fl || (Fl = !0, console.error(
              "React instrumentation encountered an error: %s",
              V
            ));
          }
        if (Ut && e.memoizedUpdaters.clear(), Uy(), i !== null) {
          d = q.T, h = ge.p, ge.p = dl, q.T = null;
          try {
            var v = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var g = i[t], _ = f0(g.stack);
              ae(
                g.source,
                v,
                g.value,
                _
              );
            }
          } finally {
            q.T = d, ge.p = h;
          }
        }
        (Zo & 3) !== 0 && fo(), xa(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (w0 = !0, e === Bg ? lp++ : (lp = 0, Bg = e)) : lp = 0, cc(0), Tt();
      }
    }
    function f0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Dn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sn(t)));
    }
    function fo(e) {
      return zn(), ud(), o0(), Wf();
    }
    function Wf() {
      if (Yl !== Hg) return !1;
      var e = Lo, t = _g;
      _g = 0;
      var a = Ah(Zo), i = Tu > a ? Tu : a;
      a = q.T;
      var o = ge.p;
      try {
        ge.p = i, q.T = null, i = Ng, Ng = null;
        var f = Lo, d = Zo;
        if (Yl = _s, rh = Lo = null, Zo = 0, (tt & (pa | Mu)) !== tn)
          throw Error("Cannot flush passive effects while already rendering.");
        qg = !0, P0 = !1, P !== null && typeof P.markPassiveEffectsStarted == "function" && P.markPassiveEffectsStarted(d);
        var h = tt;
        if (tt |= Mu, Oy(f.current), Lf(
          f,
          f.current,
          d,
          i
        ), P !== null && typeof P.markPassiveEffectsStopped == "function" && P.markPassiveEffectsStopped(), ro(f), tt = h, cc(0, !1), P0 ? f === ap ? Ns++ : (Ns = 0, ap = f) : Ns = 0, P0 = qg = !1, rl && typeof rl.onPostCommitFiberRoot == "function")
          try {
            rl.onPostCommitFiberRoot(di, f);
          } catch (g) {
            Fl || (Fl = !0, console.error(
              "React instrumentation encountered an error: %s",
              g
            ));
          }
        var v = f.current.stateNode;
        return v.effectDuration = 0, v.passiveEffectDuration = 0, !0;
      } finally {
        ge.p = o, q.T = a, Dn(e, t);
      }
    }
    function so(e, t, a) {
      t = na(a, t), t = bl(e.stateNode, t, 2), e = Za(e, t, 2), e !== null && (Hc(e, 2), xa(e));
    }
    function pe(e, t, a) {
      if (dh = !1, e.tag === 3)
        so(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            so(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Qo === null || !Qo.has(i))) {
              e = na(a, e), a = Et(2), i = Za(t, a, 2), i !== null && (Nf(
                a,
                i,
                t,
                e
              ), Hc(i, 2), xa(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function By(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new A2();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (Ug = !0, o.add(a), i = wv.bind(null, e, t, a), Ut && ho(e, a), t.then(i, i));
    }
    function wv(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, xy() && q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), st === e && (Ve & a) === a && (Bt === Us || Bt === Dg && (Ve & 62914560) === Ve && Bn() - Cg < Db ? (tt & pa) === tn && ic(e, 0) : xg |= a, Hs === Ve && (Hs = 0)), xa(e);
    }
    function qy(e, t) {
      t === 0 && (t = Po()), e = jl(e, t), e !== null && (Hc(e, t), xa(e));
    }
    function Ff(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), qy(e, a);
    }
    function ai(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), qy(e, a);
    }
    function id(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Eo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ae(
            o,
            Yy,
            i,
            o,
            (o.mode & A1) === mt
          ) : id(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ae(
            o,
            Yy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ae(
            o,
            id,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Yy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      je(!0);
      try {
        oa(t), a && Jf(t), ru(e, t.alternate, t, !1), a && kr(e, t, 0, null, !1, 0);
      } finally {
        je(!1);
      }
    }
    function ro(e) {
      var t = !0;
      e.current.mode & (ea | Ru) || (t = !1), id(
        e,
        e.current,
        t
      );
    }
    function Ia(e) {
      if ((tt & pa) === tn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = fe(e) || "ReactComponent", ev !== null) {
            if (ev.has(t)) return;
            ev.add(t);
          } else ev = /* @__PURE__ */ new Set([t]);
          ae(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function ho(e, t) {
      Ut && e.memoizedUpdaters.forEach(function(a) {
        kn(e, a, t);
      });
    }
    function Gy(e, t) {
      var a = q.actQueue;
      return a !== null ? (a.push(t), U2) : Od(e, t);
    }
    function s0(e) {
      xy() && q.actQueue === null && ae(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          fe(e)
        );
      });
    }
    function xa(e) {
      e !== hh && e.next === null && (hh === null ? tv = hh = e : hh = hh.next = e), lv = !0, q.actQueue !== null ? Gg || (Gg = !0, Xt()) : Yg || (Yg = !0, Xt());
    }
    function cc(e, t) {
      if (!Vg && lv) {
        Vg = !0;
        do
          for (var a = !1, i = tv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Al(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, fd(i, f));
            } else
              f = Ve, f = ta(
                i,
                i === st ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ys
              ), (f & 3) === 0 || Io(i, f) || (a = !0, fd(i, f));
            i = i.next;
          }
        while (a);
        Vg = !1;
      }
    }
    function cd() {
      od();
    }
    function od() {
      lv = Gg = Yg = !1;
      var e = 0;
      Bs !== 0 && (yo() && (e = Bs), Bs = 0);
      for (var t = Bn(), a = null, i = tv; i !== null; ) {
        var o = i.next, f = On(i, t);
        f === 0 ? (i.next = null, a === null ? tv = o : a.next = o, o === null && (hh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (lv = !0)), i = o;
      }
      cc(e);
    }
    function On(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Al(f), h = 1 << d, v = o[d];
        v === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Ap(h, t)) : v <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = st, a = Ve, a = ta(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ys
      ), i = e.callbackNode, a === 0 || e === t && (nt === xs || nt === Cs) || e.cancelPendingCommit !== null)
        return i !== null && sd(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || Io(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || q.actQueue !== null && i !== jg)
          sd(i);
        else return t;
        switch (Ah(a)) {
          case dl:
          case en:
            a = ds;
            break;
          case Tu:
            a = Mo;
            break;
          case Hd:
            a = hs;
            break;
          default:
            a = Mo;
        }
        return i = zt.bind(null, e), q.actQueue !== null ? (q.actQueue.push(i), a = jg) : a = Od(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && sd(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function zt(e, t) {
      if (w0 = j0 = !1, Yl !== _s && Yl !== Hg)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (fo() && e.callbackNode !== a)
        return null;
      var i = Ve;
      return i = ta(
        e,
        e === st ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ys
      ), i === 0 ? null : (wt(
        e,
        i,
        t
      ), On(e, Bn()), e.callbackNode != null && e.callbackNode === a ? zt.bind(null, e) : null);
    }
    function fd(e, t) {
      if (fo()) return null;
      j0 = w0, w0 = !1, wt(e, t, !0);
    }
    function sd(e) {
      e !== jg && e !== null && Jv(e);
    }
    function Xt() {
      q.actQueue !== null && q.actQueue.push(function() {
        return od(), null;
      }), V2(function() {
        (tt & (pa | Mu)) !== tn ? Od(
          Md,
          cd
        ) : od();
      });
    }
    function Vy() {
      return Bs === 0 && (Bs = Sh()), Bs;
    }
    function jy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (I(e, "action"), jc("" + e));
    }
    function wy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ht(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = jy(
          (o[Il] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Il] || null) ? jy(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new re(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Bs !== 0) {
                    var v = d ? wy(
                      o,
                      d
                    ) : new FormData(o), g = {
                      pending: !0,
                      data: v,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(g), Ki(
                      a,
                      g,
                      null,
                      v
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), v = d ? wy(
                    o,
                    d
                  ) : new FormData(o), g = {
                    pending: !0,
                    data: v,
                    method: o.method,
                    action: f
                  }, Object.freeze(g), Ki(
                    a,
                    g,
                    f,
                    v
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function cl(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        Tg(i);
      }
      e.currentTarget = null;
    }
    function Mn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], v = h.instance, g = h.currentTarget;
              if (h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? ae(
                v,
                cl,
                f,
                h,
                g
              ) : cl(f, h, g), o = v;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], v = h.instance, g = h.currentTarget, h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? ae(
                v,
                cl,
                f,
                h,
                g
              ) : cl(f, h, g), o = v;
            }
        }
      }
    }
    function Be(e, t) {
      wg.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[ym];
      a === void 0 && (a = t[ym] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (dd(t, e, 2, !1), a.add(i));
    }
    function rd(e, t, a) {
      wg.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), dd(
        a,
        e,
        i,
        t
      );
    }
    function Xy(e) {
      if (!e[av]) {
        e[av] = !0, D0.forEach(function(a) {
          a !== "selectionchange" && (wg.has(a) || rd(a, !1, e), rd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[av] || (t[av] = !0, rd("selectionchange", !1, t));
      }
    }
    function dd(e, t, a, i) {
      switch (Ed(t)) {
        case dl:
          var o = Lv;
          break;
        case en:
          o = Ad;
          break;
        default:
          o = ci;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !x || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Cl(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var v = d.tag;
                if ((v === 3 || v === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Wn(h), d === null) return;
              if (v = d.tag, v === 5 || v === 6 || v === 26 || v === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      ar(function() {
        var g = f, _ = Ni(a), V = [];
        e: {
          var C = T1.get(e);
          if (C !== void 0) {
            var j = re, ne = e;
            switch (e) {
              case "keypress":
                if (wc(a) === 0) break e;
              case "keydown":
              case "keyup":
                j = $S;
                break;
              case "focusin":
                ne = "focus", j = Qe;
                break;
              case "focusout":
                ne = "blur", j = Qe;
                break;
              case "beforeblur":
              case "afterblur":
                j = Qe;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                j = He;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                j = ve;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                j = kS;
                break;
              case v1:
              case g1:
              case b1:
                j = Iv;
                break;
              case S1:
                j = FS;
                break;
              case "scroll":
              case "scrollend":
                j = M;
                break;
              case "wheel":
                j = PS;
                break;
              case "copy":
              case "cut":
              case "paste":
                j = VS;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                j = f1;
                break;
              case "toggle":
              case "beforetoggle":
                j = t2;
            }
            var be = (t & 4) !== 0, rt = !be && (e === "scroll" || e === "scrollend"), Xe = be ? C !== null ? C + "Capture" : null : C;
            be = [];
            for (var A = g, E; A !== null; ) {
              var z = A;
              if (E = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || E === null || Xe === null || (z = Pn(A, Xe), z != null && be.push(
                Hl(
                  A,
                  z,
                  E
                )
              )), rt) break;
              A = A.return;
            }
            0 < be.length && (C = new j(
              C,
              ne,
              null,
              a,
              _
            ), V.push({
              event: C,
              listeners: be
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (C = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", C && a !== s && (ne = a.relatedTarget || a.fromElement) && (Wn(ne) || ne[yi]))
              break e;
            if ((j || C) && (C = _.window === _ ? _ : (C = _.ownerDocument) ? C.defaultView || C.parentWindow : window, j ? (ne = a.relatedTarget || a.toElement, j = g, ne = ne ? Wn(ne) : null, ne !== null && (rt = ut(ne), be = ne.tag, ne !== rt || be !== 5 && be !== 27 && be !== 6) && (ne = null)) : (j = null, ne = g), j !== ne)) {
              if (be = He, z = "onMouseLeave", Xe = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (be = f1, z = "onPointerLeave", Xe = "onPointerEnter", A = "pointer"), rt = j == null ? C : xu(j), E = ne == null ? C : xu(ne), C = new be(
                z,
                A + "leave",
                j,
                a,
                _
              ), C.target = rt, C.relatedTarget = E, z = null, Wn(_) === g && (be = new be(
                Xe,
                A + "enter",
                ne,
                a,
                _
              ), be.target = E, be.relatedTarget = rt, z = be), rt = z, j && ne)
                t: {
                  for (be = j, Xe = ne, A = 0, E = be; E; E = It(E))
                    A++;
                  for (E = 0, z = Xe; z; z = It(z))
                    E++;
                  for (; 0 < A - E; )
                    be = It(be), A--;
                  for (; 0 < E - A; )
                    Xe = It(Xe), E--;
                  for (; A--; ) {
                    if (be === Xe || Xe !== null && be === Xe.alternate)
                      break t;
                    be = It(be), Xe = It(Xe);
                  }
                  be = null;
                }
              else be = null;
              j !== null && Qy(
                V,
                C,
                j,
                be,
                !1
              ), ne !== null && rt !== null && Qy(
                V,
                rt,
                ne,
                be,
                !0
              );
            }
          }
          e: {
            if (C = g ? xu(g) : window, j = C.nodeName && C.nodeName.toLowerCase(), j === "select" || j === "input" && C.type === "file")
              var X = Hh;
            else if (Np(C))
              if (m1)
                X = Yv;
              else {
                X = _h;
                var F = Bv;
              }
            else
              j = C.nodeName, !j || j.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? g && _i(g.elementType) && (X = Hh) : X = qv;
            if (X && (X = X(e, g))) {
              cr(
                V,
                X,
                a,
                _
              );
              break e;
            }
            F && F(e, C, g), e === "focusout" && g && C.type === "number" && g.memoizedProps.value != null && Fs(C, "number", C.value);
          }
          switch (F = g ? xu(g) : window, e) {
            case "focusin":
              (Np(F) || F.contentEditable === "true") && (Xd = F, eg = g, Nm = null);
              break;
            case "focusout":
              Nm = eg = Xd = null;
              break;
            case "mousedown":
              tg = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              tg = !1, jp(
                V,
                a,
                _
              );
              break;
            case "selectionchange":
              if (u2) break;
            case "keydown":
            case "keyup":
              jp(
                V,
                a,
                _
              );
          }
          var De;
          if (Pv)
            e: {
              switch (e) {
                case "compositionstart":
                  var ue = "onCompositionStart";
                  break e;
                case "compositionend":
                  ue = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ue = "onCompositionUpdate";
                  break e;
              }
              ue = void 0;
            }
          else
            wd ? xl(e, a) && (ue = "onCompositionEnd") : e === "keydown" && a.keyCode === s1 && (ue = "onCompositionStart");
          ue && (r1 && a.locale !== "ko" && (wd || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && wd && (De = eu()) : (Z = _, H = "value" in Z ? Z.value : Z.textContent, wd = !0)), F = If(
            g,
            ue
          ), 0 < F.length && (ue = new o1(
            ue,
            e,
            null,
            a,
            _
          ), V.push({
            event: ue,
            listeners: F
          }), De ? ue.data = De : (De = Yu(a), De !== null && (ue.data = De)))), (De = a2 ? ir(e, a) : rf(e, a)) && (ue = If(
            g,
            "onBeforeInput"
          ), 0 < ue.length && (F = new wS(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            _
          ), V.push({
            event: F,
            listeners: ue
          }), F.data = De)), ht(
            V,
            e,
            g,
            a,
            _
          );
        }
        Mn(V, t);
      });
    }
    function Hl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function If(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Pn(e, a), o != null && i.unshift(
          Hl(e, o, f)
        ), o = Pn(e, t), o != null && i.push(
          Hl(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function It(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Qy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, v = h.alternate, g = h.stateNode;
        if (h = h.tag, v !== null && v === i) break;
        h !== 5 && h !== 26 && h !== 27 || g === null || (v = g, o ? (g = Pn(a, f), g != null && d.unshift(
          Hl(a, g, v)
        )) : o || (g = Pn(a, f), g != null && d.push(
          Hl(a, g, v)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Un(e, t) {
      Vc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || xm || (xm = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ba,
        possibleRegistrationNames: pc
      };
      _i(e) || typeof t.is == "string" || Uh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function yt(e, t, a, i) {
      t !== a && (a = ol(a), ol(t) !== a && (i[e] = t));
    }
    function ni(e, t, a) {
      t.forEach(function(i) {
        a[Zy(i)] = i === "style" ? fc(e) : e.getAttribute(i);
      });
    }
    function Ca(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function hd(e, t) {
      return e = e.namespaceURI === Ss || e.namespaceURI === Bo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function ol(e) {
      return Y(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ye(e)
      ), ie(e)), (typeof e == "string" ? e : "" + e).replace(x2, `
`).replace(C2, "");
    }
    function Ly(e, t) {
      return t = ol(t), ol(e) === t;
    }
    function hu() {
    }
    function Je(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (ff(i, t, !1), t === "body" || t === "textarea" && i === "" || Hi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (ff("" + i, t, !1), t !== "body" && Hi(e, "" + i));
          break;
        case "className":
          tf(e, "class", i);
          break;
        case "tabIndex":
          tf(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          tf(e, a, i);
          break;
        case "style":
          sf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            tf(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          I(i, a), i = jc("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || iv || (iv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || uv || (uv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || nv ? t !== "button" || o.type == null || o.type === "submit" || nv ? typeof i == "function" && (o.name == null || qb || (qb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || iv || (iv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || uv || (uv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (nv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (nv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Je(e, t, "name", o.name, o, null), Je(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Je(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Je(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Je(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Je(e, t, "method", o.method, o, null), Je(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          I(i, a), i = jc("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ca(a, i), e.onclick = hu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ca(a, i), Be("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ca(a, i), Be("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          I(i, a), a = jc("" + i), e.setAttributeNS(qs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (I(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || cv[a] || (cv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (I(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (I(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (I(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Be("beforetoggle", e), Be("toggle", e), ef(e, "popover", i);
          break;
        case "xlinkActuate":
          Va(
            e,
            qs,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Va(
            e,
            qs,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Va(
            e,
            qs,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Va(
            e,
            qs,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Va(
            e,
            qs,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Va(
            e,
            qs,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Va(
            e,
            Xg,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Va(
            e,
            Xg,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Va(
            e,
            Xg,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), ef(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          Yb || i == null || typeof i != "object" || (Yb = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = lr(a), ef(e, a, i)) : Ba.hasOwnProperty(a) && i != null && typeof i != "function" && Ca(a, i);
      }
    }
    function oc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          sf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Hi(e, i) : (typeof i == "number" || typeof i == "bigint") && Hi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ca(a, i), Be("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ca(a, i), Be("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ca(a, i), e.onclick = hu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Ba.hasOwnProperty(a))
            i != null && typeof i != "function" && Ca(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Il] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : ef(e, a, i);
            }
      }
    }
    function Dt(e, t, a) {
      switch (Un(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Be("error", e), Be("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Je(e, t, f, d, a, null);
                }
            }
          o && Je(e, t, "srcSet", a.srcSet, a, null), i && Je(e, t, "src", a.src, a, null);
          return;
        case "input":
          Hu("input", a), Be("invalid", e);
          var h = f = d = o = null, v = null, g = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var _ = a[i];
              if (_ != null)
                switch (i) {
                  case "name":
                    o = _;
                    break;
                  case "type":
                    d = _;
                    break;
                  case "checked":
                    v = _;
                    break;
                  case "defaultChecked":
                    g = _;
                    break;
                  case "value":
                    f = _;
                    break;
                  case "defaultValue":
                    h = _;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_ != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Je(e, t, i, _, a, null);
                }
            }
          _u(e, a), Up(
            e,
            f,
            h,
            v,
            g,
            d,
            o,
            !1
          ), Fn(e);
          return;
        case "select":
          Hu("select", a), Be("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Je(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          uf(e, a), t = f, a = d, e.multiple = !!i, t != null ? In(e, !!i, t, !1) : a != null && In(e, !!i, a, !0);
          return;
        case "textarea":
          Hu("textarea", a), Be("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Je(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          un(e, a), Rh(e, i, o, f), Fn(e);
          return;
        case "option":
          Eh(e, a);
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  Je(e, t, v, i, a, null);
              }
          return;
        case "dialog":
          Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
          break;
        case "iframe":
        case "object":
          Be("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < np.length; i++)
            Be(np[i], e);
          break;
        case "image":
          Be("error", e), Be("load", e);
          break;
        case "details":
          Be("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Be("error", e), Be("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (g in a)
            if (a.hasOwnProperty(g) && (i = a[g], i != null))
              switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Je(e, t, g, i, a, null);
              }
          return;
        default:
          if (_i(t)) {
            for (_ in a)
              a.hasOwnProperty(_) && (i = a[_], i !== void 0 && oc(
                e,
                t,
                _,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Je(e, t, h, i, a, null));
    }
    function r0(e, t, a, i) {
      switch (Un(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, v = null, g = null, _ = null;
          for (j in a) {
            var V = a[j];
            if (a.hasOwnProperty(j) && V != null)
              switch (j) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  v = V;
                default:
                  i.hasOwnProperty(j) || Je(
                    e,
                    t,
                    j,
                    null,
                    i,
                    V
                  );
              }
          }
          for (var C in i) {
            var j = i[C];
            if (V = a[C], i.hasOwnProperty(C) && (j != null || V != null))
              switch (C) {
                case "type":
                  f = j;
                  break;
                case "name":
                  o = j;
                  break;
                case "checked":
                  g = j;
                  break;
                case "defaultChecked":
                  _ = j;
                  break;
                case "value":
                  d = j;
                  break;
                case "defaultValue":
                  h = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  j !== V && Je(
                    e,
                    t,
                    C,
                    j,
                    i,
                    V
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || Bb || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Bb = !0), !t || i || Nb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Nb = !0), Nu(
            e,
            d,
            h,
            v,
            g,
            _,
            f,
            o
          );
          return;
        case "select":
          j = d = h = C = null;
          for (f in a)
            if (v = a[f], a.hasOwnProperty(f) && v != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  j = v;
                default:
                  i.hasOwnProperty(f) || Je(
                    e,
                    t,
                    f,
                    null,
                    i,
                    v
                  );
              }
          for (o in i)
            if (f = i[o], v = a[o], i.hasOwnProperty(o) && (f != null || v != null))
              switch (o) {
                case "value":
                  C = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== v && Je(
                    e,
                    t,
                    o,
                    f,
                    i,
                    v
                  );
              }
          i = h, t = d, a = j, C != null ? In(e, !!t, C, !1) : !!a != !!t && (i != null ? In(e, !!t, i, !0) : In(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          j = C = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Je(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  C = o;
                  break;
                case "defaultValue":
                  j = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Je(e, t, d, o, i, f);
              }
          Is(e, C, j);
          return;
        case "option":
          for (var ne in a)
            if (C = a[ne], a.hasOwnProperty(ne) && C != null && !i.hasOwnProperty(ne))
              switch (ne) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  Je(
                    e,
                    t,
                    ne,
                    null,
                    i,
                    C
                  );
              }
          for (v in i)
            if (C = i[v], j = a[v], i.hasOwnProperty(v) && C !== j && (C != null || j != null))
              switch (v) {
                case "selected":
                  e.selected = C && typeof C != "function" && typeof C != "symbol";
                  break;
                default:
                  Je(
                    e,
                    t,
                    v,
                    C,
                    i,
                    j
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var be in a)
            C = a[be], a.hasOwnProperty(be) && C != null && !i.hasOwnProperty(be) && Je(
              e,
              t,
              be,
              null,
              i,
              C
            );
          for (g in i)
            if (C = i[g], j = a[g], i.hasOwnProperty(g) && C !== j && (C != null || j != null))
              switch (g) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (C != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Je(
                    e,
                    t,
                    g,
                    C,
                    i,
                    j
                  );
              }
          return;
        default:
          if (_i(t)) {
            for (var rt in a)
              C = a[rt], a.hasOwnProperty(rt) && C !== void 0 && !i.hasOwnProperty(rt) && oc(
                e,
                t,
                rt,
                void 0,
                i,
                C
              );
            for (_ in i)
              C = i[_], j = a[_], !i.hasOwnProperty(_) || C === j || C === void 0 && j === void 0 || oc(
                e,
                t,
                _,
                C,
                i,
                j
              );
            return;
          }
      }
      for (var Xe in a)
        C = a[Xe], a.hasOwnProperty(Xe) && C != null && !i.hasOwnProperty(Xe) && Je(e, t, Xe, null, i, C);
      for (V in i)
        C = i[V], j = a[V], !i.hasOwnProperty(V) || C === j || C == null && j == null || Je(e, t, V, C, i, j);
    }
    function Zy(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function fc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function $y(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (me(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || bs.has(f) ? (me(d, f), i += o + f.replace(Au, "-$1").toLowerCase().replace(Eu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Au, "-$1").toLowerCase().replace(Eu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = ol(i), ol(t) !== i && (a.style = fc(e)));
      }
    }
    function _l(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (I(i, t), e === "" + i)
              return;
        }
      yt(t, e, i, f);
    }
    function Jy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      yt(t, e, i, f);
    }
    function Ky(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (I(i, a), e === "" + i)
              return;
        }
      yt(t, e, i, f);
    }
    function d0(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (I(i, t), e === "" + i))
              return;
        }
      yt(t, e, i, f);
    }
    function Ie(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (I(i, t), a = jc("" + i), e === a)
              return;
        }
      yt(t, e, i, f);
    }
    function it(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (_i(t)) {
        for (var v in a)
          if (a.hasOwnProperty(v)) {
            var g = a[v];
            if (g != null) {
              if (Ba.hasOwnProperty(v))
                typeof g != "function" && Ca(v, g);
              else if (a.suppressHydrationWarning !== !0)
                switch (v) {
                  case "children":
                    typeof g != "string" && typeof g != "number" || yt(
                      "children",
                      e.textContent,
                      g,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, g = g ? g.__html : void 0, g != null && (g = hd(e, g), yt(
                      v,
                      d,
                      g,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(v), $y(e, g, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(v.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      v
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = zp(
                      e,
                      "class",
                      g
                    ), yt(
                      "className",
                      d,
                      g,
                      o
                    );
                    continue;
                  default:
                    i.context === Uc && t !== "svg" && t !== "math" ? f.delete(v.toLowerCase()) : f.delete(v), d = zp(
                      e,
                      v,
                      g
                    ), yt(
                      v,
                      d,
                      g,
                      o
                    );
                }
            }
          }
      } else
        for (g in a)
          if (a.hasOwnProperty(g) && (v = a[g], v != null)) {
            if (Ba.hasOwnProperty(g))
              typeof v != "function" && Ca(g, v);
            else if (a.suppressHydrationWarning !== !0)
              switch (g) {
                case "children":
                  typeof v != "string" && typeof v != "number" || yt(
                    "children",
                    e.textContent,
                    v,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = hd(e, v), d !== v && (o[g] = { __html: d }));
                  continue;
                case "className":
                  _l(
                    e,
                    g,
                    "class",
                    v,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  _l(
                    e,
                    g,
                    "tabindex",
                    v,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(g), $y(e, v, o);
                  continue;
                case "multiple":
                  f.delete(g), yt(
                    g,
                    e.multiple,
                    v,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(g), yt(
                    g,
                    e.muted,
                    v,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), yt(
                    g,
                    e.autofocus,
                    v,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(g), d = e.getAttribute("data"), yt(
                      g,
                      d,
                      v,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(v !== "" || t === "a" && g === "href" || t === "object" && g === "data")) {
                    console.error(
                      g === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      g,
                      g
                    );
                    continue;
                  }
                  Ie(
                    e,
                    g,
                    g,
                    v,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(g), typeof v == "function") {
                    f.delete(g.toLowerCase()), g === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === H2) {
                    f.delete(g.toLowerCase()), yt(
                      g,
                      "function",
                      v,
                      o
                    );
                    continue;
                  }
                  Ie(
                    e,
                    g,
                    g.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Ie(
                    e,
                    g,
                    "xlink:href",
                    v,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Ky(
                    e,
                    g,
                    "contenteditable",
                    v,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Ky(
                    e,
                    g,
                    "spellcheck",
                    v,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Ky(
                    e,
                    g,
                    g,
                    v,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Jy(
                    e,
                    g,
                    g.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var _ = d = g, V = o;
                    if (f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (v === !1) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (v === !0 && h === "") break e;
                          break;
                        default:
                          if (I(v, d), h === "" + v)
                            break e;
                      }
                    yt(
                      d,
                      h,
                      v,
                      V
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, _ = d = g, V = o, f.delete(_), h = h.getAttribute(_), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(v) || 1 > v) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(v) || 1 > v) && (I(v, d), h === "" + v))
                            break e;
                      }
                    yt(
                      d,
                      h,
                      v,
                      V
                    );
                  }
                  continue;
                case "rowSpan":
                  d0(
                    e,
                    g,
                    "rowspan",
                    v,
                    f,
                    o
                  );
                  continue;
                case "start":
                  d0(
                    e,
                    g,
                    g,
                    v,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  _l(
                    e,
                    g,
                    "x-height",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  _l(
                    e,
                    g,
                    "xlink:actuate",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  _l(
                    e,
                    g,
                    "xlink:arcrole",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  _l(
                    e,
                    g,
                    "xlink:role",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  _l(
                    e,
                    g,
                    "xlink:show",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  _l(
                    e,
                    g,
                    "xlink:title",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  _l(
                    e,
                    g,
                    "xlink:type",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  _l(
                    e,
                    g,
                    "xml:base",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  _l(
                    e,
                    g,
                    "xml:lang",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  _l(
                    e,
                    g,
                    "xml:space",
                    v,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  v !== "" || cv[g] || (cv[g] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    g
                  )), Jy(
                    e,
                    g,
                    g,
                    v,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < g.length) || g[0] !== "o" && g[0] !== "O" || g[1] !== "n" && g[1] !== "N") {
                    h = lr(g), d = !1, i.context === Uc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (_ = g.toLowerCase(), _ = bc.hasOwnProperty(
                      _
                    ) && bc[_] || null, _ !== null && _ !== g && (d = !0, f.delete(_)), f.delete(h));
                    e: if (_ = e, V = h, h = v, Di(V))
                      if (_.hasAttribute(V))
                        _ = _.getAttribute(
                          V
                        ), I(
                          h,
                          V
                        ), h = _ === "" + h ? h : _;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (_ = V.toLowerCase().slice(0, 5), _ !== "data-" && _ !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || yt(
                      g,
                      h,
                      v,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && ni(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function qe(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ye(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Pe(e) {
      switch (e) {
        case Bo:
          return yh;
        case Ss:
          return sv;
        default:
          return Uc;
      }
    }
    function Kl(e, t) {
      if (e === Uc)
        switch (t) {
          case "svg":
            return yh;
          case "math":
            return sv;
          default:
            return Uc;
        }
      return e === yh && t === "foreignObject" ? Uc : e;
    }
    function xn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function yo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === $g ? !1 : ($g = e, !0) : ($g = null, !1);
    }
    function ky(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function yu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Ot(e, t, a, i) {
      r0(e, t, a, i), e[Il] = i;
    }
    function mu(e) {
      Hi(e, "");
    }
    function sc(e, t, a) {
      e.nodeValue = a;
    }
    function Cn(e) {
      return e === "head";
    }
    function Ha(e, t) {
      e.removeChild(t);
    }
    function mo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function po(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === fv) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & N2 && So(d.documentElement), a & B2 && So(d.body), a & q2)
                for (a = d.head, So(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, v = d.nodeName;
                  d[Co] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), yc(t);
              return;
            }
            o--;
          } else
            a === ov || a === Mc || a === up ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      yc(t);
    }
    function kl(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Wy(e) {
      e.nodeValue = "";
    }
    function Fy(e, t) {
      t = t[Y2], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function yd(e, t) {
      e.nodeValue = t;
    }
    function vo(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            vo(a), Nc(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function ui(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Co])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          I(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = sl(e.nextSibling), e === null) break;
      }
      return null;
    }
    function fl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = sl(e.nextSibling), e === null)) return null;
      return e;
    }
    function Hn(e) {
      return e.data === up || e.data === Mc && e.ownerDocument.readyState === Vb;
    }
    function go(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Mc || a.readyState === Vb)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function sl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === ov || t === up || t === Mc || t === Qg || t === Gb)
            break;
          if (t === fv) return null;
        }
      }
      return e;
    }
    function md(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Zy(f.name)] = f.name.toLowerCase() === "style" ? fc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function pd(e, t, a) {
      return a === null || a[_2] !== !0 ? (e.nodeValue === t ? e = null : (t = ol(t), e = ol(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Iy(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === fv) {
            if (t === 0)
              return sl(e.nextSibling);
            t--;
          } else
            a !== ov && a !== up && a !== Mc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function bo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === ov || a === up || a === Mc) {
            if (t === 0) return e;
            t--;
          } else a === fv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Py(e) {
      yc(e);
    }
    function fa(e) {
      yc(e);
    }
    function em(e, t, a, i, o) {
      switch (o && tr(e, i.ancestorInfo), t = Ye(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function sa(e, t, a, i) {
      if (!a[yi] && la(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Dt(a, e, t), a[El] = i, a[Il] = t;
    }
    function So(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Nc(e);
    }
    function Pf(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function h0(e, t, a) {
      var i = mh;
      if (i && typeof t == "string" && t) {
        var o = aa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), Zb.has(o) || (Zb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Dt(t, "link", e), Jt(t), i.head.appendChild(t)));
      }
    }
    function pu(e, t, a, i) {
      var o = (o = Nn.current) ? Pf(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = ii(a.href), t = nn(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = ii(a.href);
            var f = nn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Gs, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              _n(e)
            )) && !f._p && (d.instance = f, d.state.loading = ip | Jn), !Kn.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              Kn.set(e, h), f || y0(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + rc(t) + `
  + ` + rc(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + rc(t) + `
  + ` + rc(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = dc(a), t = nn(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function rc(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : bu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : bu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : bu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function ii(e) {
      return 'href="' + aa(e) + '"';
    }
    function _n(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function tm(e) {
      return xe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function y0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = ip : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= ip;
      }), t.addEventListener("error", function() {
        return i.loading |= Qb;
      }), Dt(t, "link", a), Jt(t), e.head.appendChild(t));
    }
    function dc(e) {
      return '[src="' + aa(e) + '"]';
    }
    function hc(e) {
      return "script[async]" + e;
    }
    function vd(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + aa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Jt(i), i;
            var o = xe({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Jt(i), Dt(i, "style", o), gd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = ii(a.href);
            var f = e.querySelector(
              _n(o)
            );
            if (f)
              return t.state.loading |= Jn, t.instance = f, Jt(f), f;
            i = tm(a), (o = Kn.get(o)) && lm(i, o), f = (e.ownerDocument || e).createElement("link"), Jt(f);
            var d = f;
            return d._p = new Promise(function(h, v) {
              d.onload = h, d.onerror = v;
            }), Dt(f, "link", i), t.state.loading |= Jn, gd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = dc(a.src), (o = e.querySelector(
              hc(f)
            )) ? (t.instance = o, Jt(o), o) : (i = a, (o = Kn.get(f)) && (i = xe({}, a), am(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), Jt(o), Dt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Jn) === Gs && (i = t.instance, t.state.loading |= Jn, gd(i, a.precedence, e));
      return t.instance;
    }
    function gd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function lm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function am(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function nm(e, t, a) {
      if (rv === null) {
        var i = /* @__PURE__ */ new Map(), o = rv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = rv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Co] || f[El] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Bo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function um(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function To(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === yh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = qe(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function es(e) {
      return !(e.type === "stylesheet" && (e.state.loading & Lb) === Gs);
    }
    function m0() {
    }
    function p0(e, t, a) {
      if (cp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = cp;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Jn) === Gs) {
        if (t.instance === null) {
          var o = ii(a.href), f = e.querySelector(
            _n(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = ts.bind(i), e.then(i, i)), t.state.loading |= Jn, t.instance = f, Jt(f);
            return;
          }
          f = e.ownerDocument || e, a = tm(a), (o = Kn.get(o)) && lm(a, o), f = f.createElement("link"), Jt(f);
          var d = f;
          d._p = new Promise(function(h, v) {
            d.onload = h, d.onerror = v;
          }), Dt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & Lb) === Gs && (i.count++, t = ts.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function v0() {
      if (cp === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = cp;
      return e.stylesheets && e.count === 0 && bd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && bd(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function ts() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          bd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function bd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, dv = /* @__PURE__ */ new Map(), t.forEach(g0, e), dv = null, ts.call(e));
    }
    function g0(e, t) {
      if (!(t.state.loading & Jn)) {
        var a = dv.get(e);
        if (a) var i = a.get(Kg);
        else {
          a = /* @__PURE__ */ new Map(), dv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(Kg, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(Kg, o), a.set(d, o), this.count++, i = ts.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Jn;
      }
    }
    function Sd(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ys, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Th(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Th(0), this.hiddenUpdates = Th(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function im(e, t, a, i, o, f, d, h, v, g, _, V) {
      return e = new Sd(
        e,
        t,
        a,
        d,
        h,
        v,
        g,
        V
      ), t = f2, f === !0 && (t |= ea | Ru), Ut && (t |= Bl), f = he(3, null, null, t), e.current = f, f.stateNode = e, t = bf(), Xi(t), e.pooledCache = t, Xi(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, wl(f), e;
    }
    function cm(e) {
      return e ? (e = qo, e) : qo;
    }
    function et(e, t, a, i, o, f) {
      if (rl && typeof rl.onScheduleFiberRoot == "function")
        try {
          rl.onScheduleFiberRoot(di, i, a);
        } catch (d) {
          Fl || (Fl = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      P !== null && typeof P.markRenderScheduled == "function" && P.markRenderScheduled(t), o = cm(o), i.context === null ? i.context = o : i.pendingContext = o, Pl && da !== null && !kb && (kb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        fe(da) || "Unknown"
      )), i = dn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Za(e, i, t), a !== null && (Rt(a, e, t), Zu(a, e, t));
    }
    function Td(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function om(e, t) {
      Td(e, t), (e = e.alternate) && Td(e, t);
    }
    function fm(e) {
      if (e.tag === 13) {
        var t = jl(e, 67108864);
        t !== null && Rt(t, e, 67108864), om(e, 67108864);
      }
    }
    function Xv() {
      return da;
    }
    function Qv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = Uv(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Lv(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = ge.p;
      try {
        ge.p = dl, ci(e, t, a, i);
      } finally {
        ge.p = f, q.T = o;
      }
    }
    function Ad(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = ge.p;
      try {
        ge.p = en, ci(e, t, a, i);
      } finally {
        ge.p = f, q.T = o;
      }
    }
    function ci(e, t, a, i) {
      if (yv) {
        var o = ls(i);
        if (o === null)
          Cl(
            e,
            t,
            i,
            mv,
            a
          ), oi(e, i);
        else if (as(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (oi(e, i), t & 4 && -1 < w2.indexOf(e)) {
          for (; o !== null; ) {
            var f = la(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ri(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var v = 1 << 31 - Al(d);
                        h.entanglements[1] |= v, d &= ~v;
                      }
                      xa(f), (tt & (pa | Mu)) === tn && (I0 = Bn() + Ob, cc(0));
                    }
                  }
                  break;
                case 13:
                  h = jl(f, 2), h !== null && Rt(h, f, 2), uc(), om(f, 2);
              }
            if (f = ls(i), f === null && Cl(
              e,
              t,
              i,
              mv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Cl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function ls(e) {
      return e = Ni(e), Ao(e);
    }
    function Ao(e) {
      if (mv = null, e = Wn(e), e !== null) {
        var t = ut(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = ga(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return mv = e, null;
    }
    function Ed(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return dl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return en;
        case "message":
          switch (ri()) {
            case Md:
              return dl;
            case ds:
              return en;
            case Mo:
            case kv:
              return Tu;
            case hs:
              return Hd;
            default:
              return Tu;
          }
        default:
          return Tu;
      }
    }
    function oi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          $o = null;
          break;
        case "dragenter":
        case "dragleave":
          Jo = null;
          break;
        case "mouseover":
        case "mouseout":
          Ko = null;
          break;
        case "pointerover":
        case "pointerout":
          fp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          sp.delete(t.pointerId);
      }
    }
    function Wl(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = la(t), t !== null && fm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function as(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return $o = Wl(
            $o,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return Jo = Wl(
            Jo,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Ko = Wl(
            Ko,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return fp.set(
            f,
            Wl(
              fp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, sp.set(
            f,
            Wl(
              sp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function b0(e) {
      var t = Wn(e.target);
      if (t !== null) {
        var a = ut(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = ga(a), t !== null) {
              e.blockedOn = t, Cv(e.priority, function() {
                if (a.tag === 13) {
                  var i = Jl(a);
                  i = Ol(i);
                  var o = jl(
                    a,
                    i
                  );
                  o !== null && Rt(o, a, i), om(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ns(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = ls(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(i), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = la(a), t !== null && fm(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function sm(e, t, a) {
      ns(e) && a.delete(t);
    }
    function S0() {
      kg = !1, $o !== null && ns($o) && ($o = null), Jo !== null && ns(Jo) && (Jo = null), Ko !== null && ns(Ko) && (Ko = null), fp.forEach(sm), sp.forEach(sm);
    }
    function us(e, t) {
      e.blockedOn === t && (e.blockedOn = null, kg || (kg = !0, Mt.unstable_scheduleCallback(
        Mt.unstable_NormalPriority,
        S0
      )));
    }
    function T0(e) {
      pv !== e && (pv = e, Mt.unstable_scheduleCallback(
        Mt.unstable_NormalPriority,
        function() {
          pv === e && (pv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Ao(i || a) === null)
                continue;
              break;
            }
            var f = la(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), Ki(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function yc(e) {
      function t(v) {
        return us(v, e);
      }
      $o !== null && us($o, e), Jo !== null && us(Jo, e), Ko !== null && us(Ko, e), fp.forEach(t), sp.forEach(t);
      for (var a = 0; a < ko.length; a++) {
        var i = ko[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < ko.length && (a = ko[0], a.blockedOn === null); )
        b0(a), a.blockedOn === null && ko.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Il] || null;
          if (typeof f == "function")
            d || T0(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Il] || null)
                h = d.formAction;
              else if (Ao(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), T0(a);
          }
        }
    }
    function Rd(e) {
      this._internalRoot = e;
    }
    function is(e) {
      this._internalRoot = e;
    }
    function A0(e) {
      e[yi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Mt = _S(), cs = $s, Zv = OS, xe = Object.assign, os = Symbol.for("react.element"), fi = Symbol.for("react.transitional.element"), mc = Symbol.for("react.portal"), ze = Symbol.for("react.fragment"), Eo = Symbol.for("react.strict_mode"), Ro = Symbol.for("react.profiler"), rm = Symbol.for("react.provider"), zd = Symbol.for("react.consumer"), _a = Symbol.for("react.context"), vu = Symbol.for("react.forward_ref"), zo = Symbol.for("react.suspense"), si = Symbol.for("react.suspense_list"), fs = Symbol.for("react.memo"), ra = Symbol.for("react.lazy"), dm = Symbol.for("react.activity"), E0 = Symbol.for("react.memo_cache_sentinel"), hm = Symbol.iterator, Dd = Symbol.for("react.client.reference"), Te = Array.isArray, q = cs.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = Zv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $v = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), ss = [], rs = [], Na = -1, gu = St(null), Do = St(null), Nn = St(null), Oo = St(null), bu = Object.prototype.hasOwnProperty, Od = Mt.unstable_scheduleCallback, Jv = Mt.unstable_cancelCallback, R0 = Mt.unstable_shouldYield, Kv = Mt.unstable_requestPaint, Bn = Mt.unstable_now, ri = Mt.unstable_getCurrentPriorityLevel, Md = Mt.unstable_ImmediatePriority, ds = Mt.unstable_UserBlockingPriority, Mo = Mt.unstable_NormalPriority, kv = Mt.unstable_LowPriority, hs = Mt.unstable_IdlePriority, Wv = Mt.log, Pa = Mt.unstable_setDisableYieldValue, di = null, rl = null, P = null, Fl = !1, Ut = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Al = Math.clz32 ? Math.clz32 : bh, Ud = Math.log, Su = Math.LN2, xd = 256, Cd = 4194304, dl = 2, en = 8, Tu = 32, Hd = 268435456, hi = Math.random().toString(36).slice(2), El = "__reactFiber$" + hi, Il = "__reactProps$" + hi, yi = "__reactContainer$" + hi, ym = "__reactEvents$" + hi, z0 = "__reactListeners$" + hi, Uo = "__reactHandles$" + hi, xo = "__reactResources$" + hi, Co = "__reactMarker$" + hi, D0 = /* @__PURE__ */ new Set(), Ba = {}, pc = {}, O0 = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, _d = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Nd = {}, Bd = {}, mi = 0, mm, pm, M0, vm, Ho, U0, x0;
    Ks.__reactDisabledLog = !0;
    var gm, ys, _o = !1, ms = new (typeof WeakMap == "function" ? WeakMap : Map)(), da = null, Pl = !1, Fv = /[\n"\\]/g, bm = !1, Sm = !1, Tm = !1, Am = !1, qd = !1, Em = !1, ps = ["value", "defaultValue"], C0 = !1, H0 = /["'&<>\n\t]|^\s|\s$/, Rm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Yd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Gd = Yd.concat(["button"]), zm = "dd dt li option optgroup p rp rt".split(" "), Dm = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, No = {}, qn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Au = /([A-Z])/g, Eu = /^ms-/, vs = /^(?:webkit|moz|o)[A-Z]/, gs = /^-ms-/, pi = /-(.)/g, _0 = /;\s*$/, vc = {}, gc = {}, N0 = !1, Om = !1, bs = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Ss = "http://www.w3.org/1998/Math/MathML", Bo = "http://www.w3.org/2000/svg", Vd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), bc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Mm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Yn = {}, Um = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), jd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), xm = !1, Nl = {}, Ts = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, y = null, m = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), x = !1;
    if (S)
      try {
        var Q = {};
        Object.defineProperty(Q, "passive", {
          get: function() {
            x = !0;
          }
        }), window.addEventListener("test", Q, Q), window.removeEventListener("test", Q, Q);
      } catch {
        x = !1;
      }
    var Z = null, H = null, N = null, se = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, re = ul(se), Ke = xe({}, se, { view: 0, detail: 0 }), M = ul(Ke), D, U, L, ee = xe({}, Ke, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ur,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== L && (L && e.type === "mousemove" ? (D = e.screenX - L.screenX, U = e.screenY - L.screenY) : U = D = 0, L = e), D);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : U;
      }
    }), He = ul(ee), oe = xe({}, ee, { dataTransfer: 0 }), ve = ul(oe), Pt = xe({}, Ke, { relatedTarget: 0 }), Qe = ul(Pt), vi = xe({}, se, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Iv = ul(vi), GS = xe({}, se, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), VS = ul(GS), jS = xe({}, se, { data: 0 }), o1 = ul(
      jS
    ), wS = o1, XS = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, QS = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
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
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, LS = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, ZS = xe({}, Ke, {
      key: function(e) {
        if (e.key) {
          var t = XS[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = wc(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? QS[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ur,
      charCode: function(e) {
        return e.type === "keypress" ? wc(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? wc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), $S = ul(ZS), JS = xe({}, ee, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), f1 = ul(JS), KS = xe({}, Ke, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ur
    }), kS = ul(KS), WS = xe({}, se, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), FS = ul(WS), IS = xe({}, ee, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), PS = ul(IS), e2 = xe({}, se, {
      newState: 0,
      oldState: 0
    }), t2 = ul(e2), l2 = [9, 13, 27, 32], s1 = 229, Pv = S && "CompositionEvent" in window, Cm = null;
    S && "documentMode" in document && (Cm = document.documentMode);
    var a2 = S && "TextEvent" in window && !Cm, r1 = S && (!Pv || Cm && 8 < Cm && 11 >= Cm), d1 = 32, h1 = String.fromCharCode(d1), y1 = !1, wd = !1, n2 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, Hm = null, _m = null, m1 = !1;
    S && (m1 = Ch("input") && (!document.documentMode || 9 < document.documentMode));
    var ha = typeof Object.is == "function" ? Object.is : Gv, u2 = S && "documentMode" in document && 11 >= document.documentMode, Xd = null, eg = null, Nm = null, tg = !1, Qd = {
      animationend: tu("Animation", "AnimationEnd"),
      animationiteration: tu("Animation", "AnimationIteration"),
      animationstart: tu("Animation", "AnimationStart"),
      transitionrun: tu("Transition", "TransitionRun"),
      transitionstart: tu("Transition", "TransitionStart"),
      transitioncancel: tu("Transition", "TransitionCancel"),
      transitionend: tu("Transition", "TransitionEnd")
    }, lg = {}, p1 = {};
    S && (p1 = document.createElement("div").style, "AnimationEvent" in window || (delete Qd.animationend.animation, delete Qd.animationiteration.animation, delete Qd.animationstart.animation), "TransitionEvent" in window || delete Qd.transitionend.transition);
    var v1 = Yi("animationend"), g1 = Yi("animationiteration"), b1 = Yi("animationstart"), i2 = Yi("transitionrun"), c2 = Yi("transitionstart"), o2 = Yi("transitioncancel"), S1 = Yi("transitionend"), T1 = /* @__PURE__ */ new Map(), ag = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    ag.push("scrollEnd");
    var ng = /* @__PURE__ */ new WeakMap(), B0 = 1, Sc = 2, Gn = [], Ld = 0, ug = 0, qo = {};
    Object.freeze(qo);
    var Vn = null, Zd = null, mt = 0, f2 = 1, Bl = 2, ea = 8, Ru = 16, A1 = 64, E1 = !1;
    try {
      var R1 = Object.preventExtensions({});
    } catch {
      E1 = !0;
    }
    var $d = [], Jd = 0, q0 = null, Y0 = 0, jn = [], wn = 0, As = null, Tc = 1, Ac = "", ya = null, Nt = null, ke = !1, Ec = !1, Xn = null, Es = null, gi = !1, ig = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), z1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var s2 = performance, D1 = function() {
        return s2.now();
      };
    else {
      var r2 = Date;
      D1 = function() {
        return r2.now();
      };
    }
    var cg = St(null), og = St(null), O1 = {}, G0 = null, Kd = null, kd = !1, d2 = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, h2 = Mt.unstable_scheduleCallback, y2 = Mt.unstable_NormalPriority, hl = {
      $$typeof: _a,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Wd = Mt.unstable_now, M1 = -0, V0 = -0, qa = -1.1, Rs = -0, j0 = !1, w0 = !1, Bm = null, fg = 0, zs = 0, Fd = null, U1 = q.S;
    q.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Zp(e, t), U1 !== null && U1(e, t);
    };
    var Ds = St(null), zu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, qm = [], Ym = [], Gm = [], Vm = [], jm = [], wm = [], Os = /* @__PURE__ */ new Set();
    zu.recordUnsafeLifecycleWarnings = function(e, t) {
      Os.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && qm.push(e), e.mode & ea && typeof t.UNSAFE_componentWillMount == "function" && Ym.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Gm.push(e), e.mode & ea && typeof t.UNSAFE_componentWillReceiveProps == "function" && Vm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jm.push(e), e.mode & ea && typeof t.UNSAFE_componentWillUpdate == "function" && wm.push(e));
    }, zu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < qm.length && (qm.forEach(function(h) {
        e.add(
          fe(h) || "Component"
        ), Os.add(h.type);
      }), qm = []);
      var t = /* @__PURE__ */ new Set();
      0 < Ym.length && (Ym.forEach(function(h) {
        t.add(
          fe(h) || "Component"
        ), Os.add(h.type);
      }), Ym = []);
      var a = /* @__PURE__ */ new Set();
      0 < Gm.length && (Gm.forEach(function(h) {
        a.add(
          fe(h) || "Component"
        ), Os.add(h.type);
      }), Gm = []);
      var i = /* @__PURE__ */ new Set();
      0 < Vm.length && (Vm.forEach(
        function(h) {
          i.add(
            fe(h) || "Component"
          ), Os.add(h.type);
        }
      ), Vm = []);
      var o = /* @__PURE__ */ new Set();
      0 < jm.length && (jm.forEach(function(h) {
        o.add(
          fe(h) || "Component"
        ), Os.add(h.type);
      }), jm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < wm.length && (wm.forEach(function(h) {
        f.add(
          fe(h) || "Component"
        ), Os.add(h.type);
      }), wm = []), 0 < t.size) {
        var d = le(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = le(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = le(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = le(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = le(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = le(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var X0 = /* @__PURE__ */ new Map(), x1 = /* @__PURE__ */ new Set();
    zu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & ea && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !x1.has(e.type) && (i = X0.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], X0.set(a, i)), i.push(e));
    }, zu.flushLegacyContextWarning = function() {
      X0.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(fe(o) || "Component"), x1.add(o.type);
          });
          var i = le(a);
          ae(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, zu.discardPendingWarnings = function() {
      qm = [], Ym = [], Gm = [], Vm = [], jm = [], wm = [], X0 = /* @__PURE__ */ new Map();
    };
    var Xm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), C1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Q0 = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), sg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Qm = null, L0 = !1, Qn = 0, Ln = 1, ma = 2, ql = 4, yl = 8, H1 = 0, _1 = 1, N1 = 2, rg = 3, Yo = !1, B1 = !1, dg = null, hg = !1, Id = St(null), Z0 = St(0), Pd, q1 = /* @__PURE__ */ new Set(), Y1 = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), G1 = /* @__PURE__ */ new Set(), Go = 0, Ae = null, ot = null, el = null, $0 = !1, eh = !1, Ms = !1, J0 = 0, Lm = 0, Rc = null, m2 = 0, p2 = 25, G = null, Zn = null, zc = -1, Zm = !1, K0 = {
      readContext: ft,
      use: yn,
      useCallback: vt,
      useContext: vt,
      useEffect: vt,
      useImperativeHandle: vt,
      useLayoutEffect: vt,
      useInsertionEffect: vt,
      useMemo: vt,
      useReducer: vt,
      useRef: vt,
      useState: vt,
      useDebugValue: vt,
      useDeferredValue: vt,
      useTransition: vt,
      useSyncExternalStore: vt,
      useId: vt,
      useHostTransitionStatus: vt,
      useFormState: vt,
      useActionState: vt,
      useOptimistic: vt,
      useMemoCache: vt,
      useCacheRefresh: vt
    }, mg = null, V1 = null, pg = null, j1 = null, bi = null, Du = null, k0 = null;
    mg = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return G = "useCallback", Ce(), Ea(t), Mf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", Ce(), ft(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", Ce(), Ea(t), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", Ce(), Ea(a), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", Ce(), Ea(t), Oa(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", Ce(), Ea(t), Sr(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", Ce(), Ea(t);
        var a = q.H;
        q.H = bi;
        try {
          return Ar(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", Ce();
        var i = q.H;
        q.H = bi;
        try {
          return Le(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", Ce(), Of(e);
      },
      useState: function(e) {
        G = "useState", Ce();
        var t = q.H;
        q.H = bi;
        try {
          return iu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", Ce();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", Ce(), Er(e, t);
      },
      useTransition: function() {
        return G = "useTransition", Ce(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", Ce(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", Ce(), bn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", Ce(), Jc(), Pc(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", Ce(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", Ce(), Ka(e);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ce(), ki();
      }
    }, V1 = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return G = "useCallback", K(), Mf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", K(), ft(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", K(), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", K(), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", K(), Oa(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", K(), Sr(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", K();
        var a = q.H;
        q.H = bi;
        try {
          return Ar(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", K();
        var i = q.H;
        q.H = bi;
        try {
          return Le(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", K(), Of(e);
      },
      useState: function(e) {
        G = "useState", K();
        var t = q.H;
        q.H = bi;
        try {
          return iu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", K(), Er(e, t);
      },
      useTransition: function() {
        return G = "useTransition", K(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", K(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", K(), bn();
      },
      useActionState: function(e, t) {
        return G = "useActionState", K(), Pc(e, t);
      },
      useFormState: function(e, t) {
        return G = "useFormState", K(), Jc(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", K(), Ka(e);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", K(), ki();
      }
    }, pg = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return G = "useCallback", K(), Ji(e, t);
      },
      useContext: function(e) {
        return G = "useContext", K(), ft(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", K(), jt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", K(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", K(), jt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", K(), jt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", K();
        var a = q.H;
        q.H = Du;
        try {
          return Wu(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", K();
        var i = q.H;
        q.H = Du;
        try {
          return za(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", K(), we().memoizedState;
      },
      useState: function() {
        G = "useState", K();
        var e = q.H;
        q.H = Du;
        try {
          return za($e);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", K(), Uf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", K(), Dr();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", K(), Ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", K(), we().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", K(), Jc(), gr(e);
      },
      useActionState: function(e) {
        return G = "useActionState", K(), gr(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", K(), cu(e, t);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", K(), we().memoizedState;
      }
    }, j1 = {
      readContext: function(e) {
        return ft(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return G = "useCallback", K(), Ji(e, t);
      },
      useContext: function(e) {
        return G = "useContext", K(), ft(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", K(), jt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", K(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", K(), jt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", K(), jt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", K();
        var a = q.H;
        q.H = k0;
        try {
          return Wu(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", K();
        var i = q.H;
        q.H = k0;
        try {
          return $i(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", K(), we().memoizedState;
      },
      useState: function() {
        G = "useState", K();
        var e = q.H;
        q.H = k0;
        try {
          return $i($e);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", K();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", K(), Rr(e, t);
      },
      useTransition: function() {
        return G = "useTransition", K(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", K(), Ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", K(), we().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", K(), Jc(), eo(e);
      },
      useActionState: function(e) {
        return G = "useActionState", K(), eo(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", K(), vr(e, t);
      },
      useHostTransitionStatus: Ll,
      useMemoCache: Ht,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", K(), we().memoizedState;
      }
    }, bi = {
      readContext: function(e) {
        return de(), ft(e);
      },
      use: function(e) {
        return w(), yn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", w(), Ce(), Mf(e, t);
      },
      useContext: function(e) {
        return G = "useContext", w(), Ce(), ft(e);
      },
      useEffect: function(e, t) {
        return G = "useEffect", w(), Ce(), br(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", w(), Ce(), Tr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        G = "useInsertionEffect", w(), Ce(), Oa(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", w(), Ce(), Sr(e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", w(), Ce();
        var a = q.H;
        q.H = bi;
        try {
          return Ar(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", w(), Ce();
        var i = q.H;
        q.H = bi;
        try {
          return Le(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return G = "useRef", w(), Ce(), Of(e);
      },
      useState: function(e) {
        G = "useState", w(), Ce();
        var t = q.H;
        q.H = bi;
        try {
          return iu(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", w(), Ce();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", w(), Ce(), Er(e, t);
      },
      useTransition: function() {
        return G = "useTransition", w(), Ce(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", w(), Ce(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", w(), Ce(), bn();
      },
      useFormState: function(e, t) {
        return G = "useFormState", w(), Ce(), Pc(e, t);
      },
      useActionState: function(e, t) {
        return G = "useActionState", w(), Ce(), Pc(e, t);
      },
      useOptimistic: function(e) {
        return G = "useOptimistic", w(), Ce(), Ka(e);
      },
      useMemoCache: function(e) {
        return w(), Ht(e);
      },
      useHostTransitionStatus: Ll,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", Ce(), ki();
      }
    }, Du = {
      readContext: function(e) {
        return de(), ft(e);
      },
      use: function(e) {
        return w(), yn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", w(), K(), Ji(e, t);
      },
      useContext: function(e) {
        return G = "useContext", w(), K(), ft(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", w(), K(), jt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", w(), K(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", w(), K(), jt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", w(), K(), jt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", w(), K();
        var a = q.H;
        q.H = Du;
        try {
          return Wu(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", w(), K();
        var i = q.H;
        q.H = Du;
        try {
          return za(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", w(), K(), we().memoizedState;
      },
      useState: function() {
        G = "useState", w(), K();
        var e = q.H;
        q.H = Du;
        try {
          return za($e);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", w(), K();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", w(), K(), Uf(e, t);
      },
      useTransition: function() {
        return G = "useTransition", w(), K(), Dr();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", w(), K(), Ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", w(), K(), we().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", w(), K(), gr(e);
      },
      useActionState: function(e) {
        return G = "useActionState", w(), K(), gr(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", w(), K(), cu(e, t);
      },
      useMemoCache: function(e) {
        return w(), Ht(e);
      },
      useHostTransitionStatus: Ll,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", K(), we().memoizedState;
      }
    }, k0 = {
      readContext: function(e) {
        return de(), ft(e);
      },
      use: function(e) {
        return w(), yn(e);
      },
      useCallback: function(e, t) {
        return G = "useCallback", w(), K(), Ji(e, t);
      },
      useContext: function(e) {
        return G = "useContext", w(), K(), ft(e);
      },
      useEffect: function(e, t) {
        G = "useEffect", w(), K(), jt(2048, yl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return G = "useImperativeHandle", w(), K(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return G = "useInsertionEffect", w(), K(), jt(4, ma, e, t);
      },
      useLayoutEffect: function(e, t) {
        return G = "useLayoutEffect", w(), K(), jt(4, ql, e, t);
      },
      useMemo: function(e, t) {
        G = "useMemo", w(), K();
        var a = q.H;
        q.H = Du;
        try {
          return Wu(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        G = "useReducer", w(), K();
        var i = q.H;
        q.H = Du;
        try {
          return $i(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return G = "useRef", w(), K(), we().memoizedState;
      },
      useState: function() {
        G = "useState", w(), K();
        var e = q.H;
        q.H = Du;
        try {
          return $i($e);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        G = "useDebugValue", w(), K();
      },
      useDeferredValue: function(e, t) {
        return G = "useDeferredValue", w(), K(), Rr(e, t);
      },
      useTransition: function() {
        return G = "useTransition", w(), K(), Or();
      },
      useSyncExternalStore: function(e, t, a) {
        return G = "useSyncExternalStore", w(), K(), Ef(
          e,
          t,
          a
        );
      },
      useId: function() {
        return G = "useId", w(), K(), we().memoizedState;
      },
      useFormState: function(e) {
        return G = "useFormState", w(), K(), eo(e);
      },
      useActionState: function(e) {
        return G = "useActionState", w(), K(), eo(e);
      },
      useOptimistic: function(e, t) {
        return G = "useOptimistic", w(), K(), vr(e, t);
      },
      useMemoCache: function(e) {
        return w(), Ht(e);
      },
      useHostTransitionStatus: Ll,
      useCacheRefresh: function() {
        return G = "useCacheRefresh", K(), we().memoizedState;
      }
    };
    var w1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = Pl;
        Pl = !0;
        try {
          return e(t, a);
        } finally {
          Pl = i;
        }
      }
    }, vg = w1["react-stack-bottom-frame"].bind(w1), X1 = {
      "react-stack-bottom-frame": function(e) {
        var t = Pl;
        Pl = !0;
        try {
          return e.render();
        } finally {
          Pl = t;
        }
      }
    }, Q1 = X1["react-stack-bottom-frame"].bind(X1), L1 = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          pe(e, e.return, a);
        }
      }
    }, gg = L1["react-stack-bottom-frame"].bind(L1), Z1 = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          pe(e, e.return, f);
        }
      }
    }, $1 = Z1["react-stack-bottom-frame"].bind(Z1), J1 = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, v2 = J1["react-stack-bottom-frame"].bind(J1), K1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          pe(e, t, i);
        }
      }
    }, k1 = K1["react-stack-bottom-frame"].bind(K1), W1 = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, g2 = W1["react-stack-bottom-frame"].bind(W1), F1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          pe(e, t, i);
        }
      }
    }, b2 = F1["react-stack-bottom-frame"].bind(F1), I1 = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Vo = I1["react-stack-bottom-frame"].bind(I1), th = null, $m = 0, _e = null, bg, P1 = bg = !1, eb = {}, tb = {}, lb = {};
    ce = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = fe(e), o = i || "null";
        if (!eb[o]) {
          eb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = fe(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = fe(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ae(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var lh = _f(!0), ab = _f(!1), $n = St(null), Si = null, ah = 1, Jm = 2, ml = St(0), nb = {}, ub = /* @__PURE__ */ new Set(), ib = /* @__PURE__ */ new Set(), cb = /* @__PURE__ */ new Set(), ob = /* @__PURE__ */ new Set(), fb = /* @__PURE__ */ new Set(), sb = /* @__PURE__ */ new Set(), rb = /* @__PURE__ */ new Set(), db = /* @__PURE__ */ new Set(), hb = /* @__PURE__ */ new Set(), yb = /* @__PURE__ */ new Set();
    Object.freeze(nb);
    var Sg = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = dn(i);
        o.payload = t, a != null && (fy(a), o.callback = a), t = Za(e, o, i), t !== null && (Rt(t, e, i), Zu(t, e, i)), Ei(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = Jl(e), o = dn(i);
        o.tag = _1, o.payload = t, a != null && (fy(a), o.callback = a), t = Za(e, o, i), t !== null && (Rt(t, e, i), Zu(t, e, i)), Ei(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Jl(e), i = dn(a);
        i.tag = N1, t != null && (fy(t), i.callback = t), t = Za(e, i, a), t !== null && (Rt(t, e, a), Zu(t, e, a)), P !== null && typeof P.markForceUpdateScheduled == "function" && P.markForceUpdateScheduled(e, a);
      }
    }, Tg = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, nh = null, Ag = null, mb = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Rl = !1, pb = {}, vb = {}, gb = {}, bb = {}, uh = !1, Sb = {}, Eg = {}, Rg = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Tb = !1, Ab = null;
    Ab = /* @__PURE__ */ new Set();
    var Dc = !1, Qt = !1, zg = !1, Eb = typeof WeakSet == "function" ? WeakSet : Set, zl = null, ih = null, ch = null, tl = null, Ya = !1, Ou = null, Km = 8192, S2 = {
      getCacheForType: function(e) {
        var t = ft(hl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return da;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var km = Symbol.for;
      km("selector.component"), km("selector.has_pseudo_class"), km("selector.role"), km("selector.test_id"), km("selector.text");
    }
    var T2 = [], A2 = typeof WeakMap == "function" ? WeakMap : Map, tn = 0, pa = 2, Mu = 4, Oc = 0, Wm = 1, oh = 2, Dg = 3, Us = 4, W0 = 6, Rb = 5, tt = tn, st = null, Ge = null, Ve = 0, Ga = 0, Fm = 1, xs = 2, Im = 3, zb = 4, Og = 5, fh = 6, Pm = 7, Mg = 8, Cs = 9, nt = Ga, ln = null, jo = !1, sh = !1, Ug = !1, Ti = 0, Bt = Oc, wo = 0, Xo = 0, xg = 0, an = 0, Hs = 0, ep = null, va = null, F0 = !1, Cg = 0, Db = 300, I0 = 1 / 0, Ob = 500, tp = null, Qo = null, E2 = 0, R2 = 1, z2 = 2, _s = 0, Mb = 1, Ub = 2, xb = 3, D2 = 4, Hg = 5, Yl = 0, Lo = null, rh = null, Zo = 0, _g = 0, Ng = null, Cb = null, O2 = 50, lp = 0, Bg = null, qg = !1, P0 = !1, M2 = 50, Ns = 0, ap = null, dh = !1, ev = null, Hb = !1, _b = /* @__PURE__ */ new Set(), U2 = {}, tv = null, hh = null, Yg = !1, Gg = !1, lv = !1, Vg = !1, Bs = 0, jg = {};
    (function() {
      for (var e = 0; e < ag.length; e++) {
        var t = ag[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), ja(a, "on" + t);
      }
      ja(v1, "onAnimationEnd"), ja(g1, "onAnimationIteration"), ja(b1, "onAnimationStart"), ja("dblclick", "onDoubleClick"), ja("focusin", "onFocus"), ja("focusout", "onBlur"), ja(i2, "onTransitionRun"), ja(c2, "onTransitionStart"), ja(o2, "onTransitionCancel"), ja(S1, "onTransitionEnd");
    })(), zi("onMouseEnter", ["mouseout", "mouseover"]), zi("onMouseLeave", ["mouseout", "mouseover"]), zi("onPointerEnter", ["pointerout", "pointerover"]), zi("onPointerLeave", ["pointerout", "pointerover"]), Cu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Cu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Cu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Cu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Cu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Cu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var np = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), wg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(np)
    ), av = "_reactListening" + Math.random().toString(36).slice(2), Nb = !1, Bb = !1, nv = !1, qb = !1, uv = !1, iv = !1, Yb = !1, cv = {}, x2 = /\r\n?/g, C2 = /\u0000|\uFFFD/g, qs = "http://www.w3.org/1999/xlink", Xg = "http://www.w3.org/XML/1998/namespace", H2 = "javascript:throw new Error('React form unexpectedly submitted.')", _2 = "suppressHydrationWarning", ov = "$", fv = "/$", Mc = "$?", up = "$!", N2 = 1, B2 = 2, q2 = 4, Qg = "F!", Gb = "F", Vb = "complete", Y2 = "style", Uc = 0, yh = 1, sv = 2, Lg = null, Zg = null, jb = { dialog: !0, webview: !0 }, $g = null, wb = typeof setTimeout == "function" ? setTimeout : void 0, G2 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ys = -1, Xb = typeof Promise == "function" ? Promise : void 0, V2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xb < "u" ? function(e) {
      return Xb.resolve(null).then(e).catch(ky);
    } : wb, Jg = null, Gs = 0, ip = 1, Qb = 2, Lb = 3, Jn = 4, Kn = /* @__PURE__ */ new Map(), Zb = /* @__PURE__ */ new Set(), xc = ge.d;
    ge.d = {
      f: function() {
        var e = xc.f(), t = uc();
        return e || t;
      },
      r: function(e) {
        var t = la(e);
        t !== null && t.tag === 5 && t.type === "form" ? iy(t) : xc.r(e);
      },
      D: function(e) {
        xc.D(e), h0("dns-prefetch", e, null);
      },
      C: function(e, t) {
        xc.C(e, t), h0("preconnect", e, t);
      },
      L: function(e, t, a) {
        xc.L(e, t, a);
        var i = mh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + aa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + aa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + aa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + aa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = ii(e);
              break;
            case "script":
              f = dc(e);
          }
          Kn.has(f) || (e = xe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), Kn.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            _n(f)
          ) || t === "script" && i.querySelector(hc(f)) || (t = i.createElement("link"), Dt(t, "link", e), Jt(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        xc.m(e, t);
        var a = mh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + aa(i) + '"][href="' + aa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = dc(e);
          }
          if (!Kn.has(f) && (e = xe({ rel: "modulepreload", href: e }, t), Kn.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(hc(f)))
                  return;
            }
            i = a.createElement("link"), Dt(i, "link", e), Jt(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        xc.X(e, t);
        var a = mh;
        if (a && e) {
          var i = nn(a).hoistableScripts, o = dc(e), f = i.get(o);
          f || (f = a.querySelector(
            hc(o)
          ), f || (e = xe({ src: e, async: !0 }, t), (t = Kn.get(o)) && am(e, t), f = a.createElement("script"), Jt(f), Dt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        xc.S(e, t, a);
        var i = mh;
        if (i && e) {
          var o = nn(i).hoistableStyles, f = ii(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Gs, preload: null };
            if (d = i.querySelector(
              _n(f)
            ))
              h.loading = ip | Jn;
            else {
              e = xe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = Kn.get(f)) && lm(e, a);
              var v = d = i.createElement("link");
              Jt(v), Dt(v, "link", e), v._p = new Promise(function(g, _) {
                v.onload = g, v.onerror = _;
              }), v.addEventListener("load", function() {
                h.loading |= ip;
              }), v.addEventListener("error", function() {
                h.loading |= Qb;
              }), h.loading |= Jn, gd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        xc.M(e, t);
        var a = mh;
        if (a && e) {
          var i = nn(a).hoistableScripts, o = dc(e), f = i.get(o);
          f || (f = a.querySelector(
            hc(o)
          ), f || (e = xe({ src: e, async: !0, type: "module" }, t), (t = Kn.get(o)) && am(e, t), f = a.createElement("script"), Jt(f), Dt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var mh = typeof document > "u" ? null : document, rv = null, cp = null, Kg = null, dv = null, Vs = $v, op = {
      $$typeof: _a,
      Provider: null,
      Consumer: null,
      _currentValue: Vs,
      _currentValue2: Vs,
      _threadCount: 0
    }, $b = "%c%s%c ", Jb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", Kb = "", hv = " ", j2 = Function.prototype.bind, kb = !1, Wb = null, Fb = null, Ib = null, Pb = null, eS = null, tS = null, lS = null, aS = null, nS = null;
    Wb = function(e, t, a, i) {
      t = T(e, t), t !== null && (a = p(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = xe({}, e.memoizedProps), a = jl(e, 2), a !== null && Rt(a, e, 2));
    }, Fb = function(e, t, a) {
      t = T(e, t), t !== null && (a = B(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = xe({}, e.memoizedProps), a = jl(e, 2), a !== null && Rt(a, e, 2));
    }, Ib = function(e, t, a, i) {
      t = T(e, t), t !== null && (a = R(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = xe({}, e.memoizedProps), a = jl(e, 2), a !== null && Rt(a, e, 2));
    }, Pb = function(e, t, a) {
      e.pendingProps = p(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = jl(e, 2), t !== null && Rt(t, e, 2);
    }, eS = function(e, t) {
      e.pendingProps = B(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = jl(e, 2), t !== null && Rt(t, e, 2);
    }, tS = function(e, t, a) {
      e.pendingProps = R(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = jl(e, 2), t !== null && Rt(t, e, 2);
    }, lS = function(e) {
      var t = jl(e, 2);
      t !== null && Rt(t, e, 2);
    }, aS = function(e) {
      W = e;
    }, nS = function(e) {
      J = e;
    };
    var yv = !0, mv = null, kg = !1, $o = null, Jo = null, Ko = null, fp = /* @__PURE__ */ new Map(), sp = /* @__PURE__ */ new Map(), ko = [], w2 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), pv = null;
    if (is.prototype.render = Rd.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : dt(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = Jl(i);
      et(i, o, a, t, null, null);
    }, is.prototype.unmount = Rd.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (tt & (pa | Mu)) !== tn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), et(e.current, 2, null, e, null, null), uc(), t[yi] = null;
      }
    }, is.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Rp();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ko.length && t !== 0 && t < ko[a].priority; a++) ;
        ko.splice(a, 0, e), a === 0 && b0(e);
      }
    }, function() {
      var e = cs.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), ge.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = vl(t), e = e !== null ? Gl(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: q,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = Wb, e.overrideHookStateDeletePath = Fb, e.overrideHookStateRenamePath = Ib, e.overrideProps = Pb, e.overridePropsDeletePath = eS, e.overridePropsRenamePath = tS, e.scheduleUpdate = lS, e.setErrorHandler = aS, e.setSuspenseHandler = nS, e.scheduleRefresh = Me, e.scheduleRoot = Se, e.setRefreshHandler = pl, e.getCurrentFiber = Xv, e.getLaneLabelMap = Qv, e.injectProfilingHooks = Uu, ct(e);
    }() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var uS = window.location.protocol;
      /^(https?|file):$/.test(uS) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (uS === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    mp.createRoot = function(e, t) {
      if (!dt(e))
        throw Error("Target container is not a DOM element.");
      A0(e);
      var a = !1, i = "", o = sy, f = Fp, d = Cr, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === fi && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = im(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[yi] = t.current, Xy(e), new Rd(t);
    }, mp.hydrateRoot = function(e, t, a) {
      if (!dt(e))
        throw Error("Target container is not a DOM element.");
      A0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = sy, d = Fp, h = Cr, v = null, g = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (v = a.unstable_transitionCallbacks), a.formState !== void 0 && (g = a.formState)), t = im(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        v,
        g
      ), t.context = cm(null), a = t.current, i = Jl(a), i = Ol(i), o = dn(i), o.callback = null, Za(a, o, i), a = i, t.current.lanes = a, Hc(t, a), xa(t), e[yi] = t.current, Xy(e), new is(t);
    }, mp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), mp;
}
var DS;
function jT() {
  if (DS) return gv.exports;
  DS = 1;
  function T() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (p) {
        console.error(p);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (T(), gv.exports = GT()) : gv.exports = VT(), gv.exports;
}
var wT = jT();
const Av = (T, p) => {
  const R = document.createElement("div");
  return wT.createRoot(R).render(/* @__PURE__ */ Fo.jsx("div", { ref: T, children: p })), R;
};
var t1 = { d: (T, p) => {
  for (var R in p) t1.o(p, R) && !t1.o(T, R) && Object.defineProperty(T, R, { enumerable: !0, get: p[R] });
}, o: (T, p) => Object.prototype.hasOwnProperty.call(T, p) }, NS = {};
t1.d(NS, { r: () => XT });
const XT = "1.21.0", QT = NS.r, LT = QT.replace(/\./g, "-"), Mv = (T) => `kuc-${T}-${LT}`, ZT = zv({
  react: $s,
  tagName: Mv("button"),
  elementClass: BT,
  events: {
    onClick: "click"
  }
});
function aA({ children: T, ...p }) {
  const R = vh(null), b = vh(null);
  return Pg(() => {
    const B = R.current;
    B && (B.content = Av(b, T));
  }, [b, T]), /* @__PURE__ */ Fo.jsx(ZT, { ...p, ref: R });
}
const $T = zv({
  react: $s,
  tagName: Mv("text"),
  elementClass: Z2,
  events: {
    onChange: "change",
    onFocus: "focus",
    onInput: "input"
  }
});
function nA(T) {
  return /* @__PURE__ */ Fo.jsx(
    $T,
    {
      ...T,
      value: "",
      onChange: (p) => {
        T.onChange?.(p);
      },
      onFocus: (p) => {
        T.onFocus?.(p);
      },
      onInput: (p) => {
        T.onInput?.(p);
      }
    }
  );
}
const JT = zv({
  react: $s,
  tagName: Mv("dialog"),
  elementClass: $2,
  events: {
    onClose: "close"
  }
});
function BS({ children: T }) {
  return /* @__PURE__ */ Fo.jsx("div", { children: T });
}
function qS({ children: T }) {
  return /* @__PURE__ */ Fo.jsx("div", { children: T });
}
function YS({ children: T }) {
  return /* @__PURE__ */ Fo.jsx("div", { children: T });
}
function KT(T) {
  return L2(T) && typeof T.type == "function";
}
function c1({ open: T, children: p, ...R }) {
  const b = vh(null), B = vh(null), J = vh(null), W = vh(null);
  return Pg(() => {
    T ? b.current?.open() : b.current?.close();
  }, [T]), Pg(() => {
    const ce = b.current;
    if (ce) {
      let w = null, de = null, te = null;
      Q2.forEach(p, (le) => {
        KT(le) ? le.type === YS ? de = le.props.children : le.type === qS ? w = le.props.children : le.type === BS ? te = le.props.children : w = le : w = le;
      }), te && (ce.header = Av(W, te)), w && (ce.content = Av(B, w)), de && (ce.footer = Av(J, de));
    }
  }, [p]), /* @__PURE__ */ Fo.jsx(JT, { ...R, ref: b });
}
c1.Header = BS;
c1.Content = qS;
c1.Footer = YS;
const kT = zv({
  react: $s,
  tagName: Mv("attachment"),
  elementClass: J2,
  events: {
    onChange: "change"
  }
});
function uA(T) {
  return /* @__PURE__ */ Fo.jsx(
    kT,
    {
      ...T,
      onChange: (p) => {
        T.onChange?.(p);
      }
    }
  );
}
export {
  uA as KucAttachment,
  aA as KucButton,
  c1 as KucDialog,
  nA as KucText
};
