function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/
  /*! no static exports found */
  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };
    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }
    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }
      return map[req];
    }
    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };
    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" [hidden]=\"!esconderNavMenu()\">\n  <div class=\"container-fluid\"> \n    \n    <!-- this button handles the responsiveness of the navbar--> \n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" \n            data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" \n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\" aria-current=\"page\" (click)=\"sair()\">Logout</a>\n        </li>                       \n      </ul>\n\n    </div>\n  </div>\n</nav> \n\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" [hidden]=\"esconderNavMenu()\">\n  <div class=\"container-fluid\">\n\n    <!-- this button handles the responsiveness of the navbar-->\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" \n            data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" \n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>    \n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"  >Home</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n            Menu\n          </a>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <li><a class=\"dropdown-item\" [routerLink]=\"['/userList']\" routerLinkActive=\"router-link-active\">List of Users</a></li>\n            <!-- \n            <li><a class=\"dropdown-item\" [routerLink]=\"['/userReport']\" routerLinkActive=\"router-link-active\">Report with Date Filter</a></li>\n            -->\n            <li><a class=\"dropdown-item\" [routerLink]=\"['/chart']\" routerLinkActive=\"router-link-active\">Salary Graph</a></li>    \n          </ul>\n        </li>          \n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\" aria-current=\"page\" (click)=\"sair()\">Logout</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n\n\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/bar-chart/bar-chart.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componente/bar-chart/bar-chart.component.html ***!
    \*****************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponenteBarChartBarChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div style=\"margin-left: 4%; margin-right: 4%; margin-top: 2%; margin-bottom: 4%;\">\n  <div class=\"chart-wrapper\">\n      <canvas baseChart \n      [datasets]=\"barChartData\"\n      [labels]=\"barChartLabels\"\n      [options]=\"barChartOptions\"\n      [plugins]=\"barChartPlugins\"\n      [legend]=\"barChartLegend\"\n      [chartType]=\"barChartType\">\n    </canvas>\n  </div>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuario/usuario-report/usuario-report.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuario/usuario-report/usuario-report.component.html ***!
    \***********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponenteUsuarioUsuarioReportUsuarioReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<h3 style=\"margin-left: 10px;\">User Report</h3>\n\n<form style=\"margin-left: 10px; width: 1200px;\" #formValidate=\"ngForm\">\n      \n\n  \n\n\n  \n\n\n  <div class=\"row\">\n    <!--  Initial Date : Report Generation    -->\n      <div class=\"col-md-3 form-group\">\n        <label for=\"dataInicio\">Initial Date</label>\n        <span style=\"color: red; font-size: 23px;\"> *</span>\n        <div class=\"input-group\">\n          <input name=\"dataInicio\" type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\"\n              ngbDatepicker #dataInicio=\"ngbDatepicker\" [(ngModel)] = \"userReport.dataInicio\"\n              id=\"dataInicio\" required=\"true\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"dataInicio.toggle()\" type=\"button\"\n            style=\"height: 40px;\"></button>\n          </div>\n        </div>\n      </div> \n\n      <!--  Final Date : Report Generation    -->\n      <div class=\"col-md-3 form-group\">\n        <label for=\"dataFim\">Final Date</label>\n        <span style=\"color: red; font-size: 23px;\"> *</span>\n        <div class=\"input-group\">\n          <input name=\"dataFim\" type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\"\n              ngbDatepicker #dataFim=\"ngbDatepicker\" [(ngModel)] = \"userReport.dataFim\"\n              id=\"dataFim\" required=\"true\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" (click)=\"dataFim.toggle()\" type=\"button\"\n            style=\"height: 40px;\"></button>\n          </div>\n        </div>\n      </div> \n  </div>   \n\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 form-group\">        \n        <button type=\"button\" class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#PdfModal\" (click)=\"imprimeRelatorio()\"  style=\"margin-left: 10px;\">Generate PDF</button>        \n    </div>\n  </div>\n</form>  \n\n<br><br><br>\n\n\n\n\n<!-- Modal : PDF Exibition - with filters-->\n<div class=\"modal fade\" id=\"PdfModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" style=\"min-width: 90%; min-height: 90%; height: 90%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <iframe id width=\"100%\" height=\"500\" frameborder=\"0\" allowtransparency=\"true\"> </iframe>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuario/usuario/usuario.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuario/usuario/usuario.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponenteUsuarioUsuarioUsuarioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n<div style=\"margin-left: 2%; margin-right: 2%; margin-top: 3%\">\n  \n  <form >\n    <div class=\"input-group mb-3\" style=\"width: 500px;\">\n        <input type=\"text\" class=\"form-control\" id=\"nome\" name=\"nome\" [(ngModel)]=\"nome\" placeholder=\"Search by name\" >\n        <button class=\"btn btn-outline-secondary\"  (click)=\"consultarUser()\" type=\"button\" >Search</button>\n        <button class=\"btn btn-outline-secondary\"  (click)=\"ngOnInit()\" type=\"button\" >List Users</button>\n        <button class=\"btn btn-outline-secondary\"  [routerLink]=\"['/usuarioAdd']\" routerLinkActive=\"router-link-active\" (click)=\"ngOnInit()\" type=\"button\" >New User</button>\n        <!-- this button call modal, to generate PDF --\n          <button (click)=\"imprimeRelatorio()\" class=\"btn btn-outline-secondary\" type=\"button\" data-bs-toggle=\"modal\" data-bs-target=\"#PdfModal\"> PDF </button> \n        -->\n      </div>\n    <br/>\n    <br/>\n  </form>\n\n  \n  \n<table class=\"table\">\n    <thead class=\"thread-dark\">\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">Nome</th>\n        <th scope=\"col\">Login</th>\n        <th scope=\"col\">Delete</th>\n        <th scope=\"col\">Editar</th>\n      </thead>\n      \n      <tbody>         \n        <tr *ngFor=\"let student of students | paginate: { itemsPerPage:5, currentPage: p, totalItems: total }; let i = index\">\n             <td>{{student.id}}</td>   \n             <td>{{student.nome}}</td> \n             <td>{{student.login}}</td>\n             <td><button class=\"btn btn-danger\" (click)=\"deletarUsuario(student.id, i)\">Delete</button></td> \n             <td><button class=\"btn btn-warning\" [routerLink]=\"['/usuarioAdd', student.id]\" routerLinkActive=\"router-link-active\" >Update</button></td> \n            </tr>\n          </tbody>\n        </table>\n        \n        <div class=\"text-center\">\n    <pagination-controls (pageChange)=\"(p = $event);\" responsive=\"true\"></pagination-controls>\n    \n  </div>\n  \n  \n  <!-- Modal : PDF Exibition-->\n  <div class=\"modal fade\" id=\"PdfModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" style=\"min-width: 90%; min-height: 90%; height: 90%;\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"modal-body\">\n          <iframe id width=\"100%\" height=\"500\" frameborder=\"0\" allowtransparency=\"true\"> </iframe>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.html ***!
    \********************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponenteUsuarioAddUsuarioAddUsuarioAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div style=\"margin-left: 2%; margin-right: 2%; margin-top: 2%\">\n  \n  <h5 style=\"margin-left: 10px;\">User Registration</h5>\n  \n  <br>\n  \n  <form style=\"margin-left: 10px; width: 1200px;\" #formValidate=\"ngForm\">\n      \n    <div class=\"row\" >\n      <div class=\"col-md-1 form-group \">\n        <label for=\"id\">ID</label>\n        <input type=\"text\" [(ngModel)]=\"usuario.id\" class=\"form-control\" id=\"id\" readonly=\"true\" name=\"id\" autocomplete=\"false\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 form-group\">\n        <label for=\"nome\">Full name: </label>\n        <span style=\"color: red; font-size: 23px;\" *ngIf=\"nomeValidate.invalid\"> *</span>\n        <input type=\"text\" [(ngModel)]=\"usuario.nome\" #nomeValidate=\"ngModel\" class=\"form-control\" id=\"nome\" required=\"true\" name=\"nome\" autocomplete=\"false\">\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6 form-group\">\n        <label for=\"login\">E-mail or login</label>\n        <span style=\"color: red; font-size: 23px;\" *ngIf=\"loginValidate.invalid\"> *</span>\n        <input type=\"text\" [(ngModel)]=\"usuario.login\" #loginValidate=\"ngModel\" class=\"form-control\" id=\"login\" name=\"login\" required=\"true\" autocomplete=\"false\">\n      </div>\n\n      \n      <div class=\"col-md-6 form-group\">\n        <label for=\"senha\">Password: </label>\n        <span style=\"color: red; font-size: 23px;\" *ngIf=\"senhaValidate.invalid\"> *</span>\n        <input type=\"password\" [(ngModel)]=\"usuario.senha\" #senhaValidate=\"ngModel\" class=\"form-control\" id=\"senha\" name=\"senha\" required=\"true\" autocomplete=\"false\">\n      </div>\n      \n    </div>\n  \n  \n    <!-- Date of Birth : old implementation \n      <div class=\"row\">\n        <div class=\"col-md-3 form-group\">\n          <label for=\"dataNascimento\">Date of birth</label>\n          <span style=\"color: red; font-size: 23px;\" *ngIf=\"dataNascimentoValidate.invalid\"> *</span>\n          \n          <input\n          name=\"dataNascimento\"\n          class=\"form-control\"\n          placeholder=\"dd/mm/yyyy\"\n          [(ngModel)]=\"usuario.dataNascimento\"\n          id=\"dataNascimento\"\n          required               \n          />\n        </div>\n      </div>\n    -->\n  \n\n\n  <!--  Date of Birth : new implementation    -->\n    <div class=\"row\">\n      <div class=\"col-md-3 form-group\">\n        <label for=\"dataNascimento\">Date of birth</label>\n        <span style=\"color: red; font-size: 23px;\"> *</span>\n        <div class=\"input-group\">\n            <input name=\"dataNascimento\" type=\"text\" class=\"form-control\" placeholder=\"dd/mm/yyyy\"\n            ngbDatepicker #dataNascimento=\"ngbDatepicker\" [(ngModel)] = \"usuario.dataNascimento\"\n            id=\"dataNascimento\" required=\"true\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\" (click)=\"dataNascimento.toggle()\" type=\"button\"\n              style=\"height: 40px;\"></button>\n            </div>\n        </div>\n      </div> \n\n      <div class=\"col-md-3 form-group\">\n          <label for=\"profissao\">Occupation</label>\n          <span style=\"color: red; font-size: 23px;\" *ngIf=\"profissaoValidate.invalid\"> *</span>\n          <select [(ngModel)]=\"usuario.profissao.id\" id=\"profissao\" name=\"profissao\"\n            #profissaoValidate=\"ngModel\" class=\"form-control\" required=\"true\">\n            <option  *ngFor=\"let p of profissoes\" [ngValue]=\"p.id\">{{p.descricao}}</option>>\n        </select>\n      </div>\n    \n      <!--Wage, not obrigatory Fiel at the Page Form (without ngIf)  \n        Professor using ngx-currency: problems with ngx and my Angular Version\n      <div class=\"col-md-3 form-group\">        \n        <label for=\"salario\">Salario</label>\n        <span style=\"color: red; font-size: 23px;\" > *</span>        <input [(ngModel)]=\"usuario.salario\" id=\"salario\" name=\"salario\" class=\"form-control\"\n              currencyMask [options]=\"{prefix : '€', thousands : '.', decimal : ','}\">\n      </div>\n      -->\n\n      <!--Wage - NATAN using Directive, working well  -->\n      <div class=\"col-md-3 form-group\">        \n        <label for=\"salario\">Wage €</label>\n        <span style=\"color: blue; font-size: 23px;\" > *</span>\n        <input [(ngModel)]=\"usuario.salario\" id=\"salario\" name=\"salario\"\n        class=\"form-control\" appNumbersOnly >\n      </div>\n      \n      \n      \n      \n    </div>\n  \n  \n    \n    <br><br>\n\n    <div class=\"card text-center\">\n      <div class=\"card-header\">PHONE(s)</div>\n    \n      <div class=\"card-body\" style=\"padding-left: 10px;\">\n        <div class=\"row\">\n          <div class=\"col-md-3 form-group\">\n            <input type=\"text\" mask=\"000 000-0000\" class=\"form-control\" [(ngModel)]=\"telefone.numero\" id=\"numero\" name=\"numero\">\n          </div>\n\n          <div class=\"col-md-1 form-group\">\n            <button (click)=\"addFone()\" class=\"btn btn-primary\">Add</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  \n\n  \n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let fone of usuario.telefones; let i= index\">\n          <td>{{fone.id}}</td>\n          <td>{{fone.numero | mask:'000 000-0000'}}</td>\n          <td> <button class=\"btn btn-danger\" (click)=\"deletarTelefone(fone.id, i)\">Delete</button></td>  \n        </tr>      \n      </tbody>    \n    </table>\n  \n    <br>\n  \n    <div class=\"row\">\n      <div class=\"col-md-6 form-group\">\n        <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/userList']\" routerLinkActive=\"router-link-active\" >Go back</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"novo()\"  style=\"margin-left: 10px;\">New</button>\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"formValidate.invalid\" (click)=\"salvarUser()\" style=\"margin-left: 10px;\">Save</button>\n      </div>\n    </div>\n\n  </form>  \n\n  <br><br><br>\n\n</div>";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div style=\"margin-left: 8%; margin-top: 3%; width: 1000px; text-align: justify;\" >\n    \n    <h4>API REST with Spring Boot MVC + Angular 8/9 + JWT Authentication</h4>\n    <br>\n    <p>This system was developed in Angular and accesses an API developed in Java with \n    Spring Boot, MVC design pattern and Spring Security (Jason Web Token Authentication). \n    Requests are sent to the API to save and retrieve data written to the database. \n    API and database are on the same server (AWS), front end is on another server. </p>\n\n    <p>It is possible to create records and associated telephone numbers, search for records\n    saved in the system and generate a comparative graph. Each record has a password that \n    allows you to log into the system. A service was created to recover the password when \n    logging into the system. This password is sent by email, however it is necessary to \n    assign a valid email address when creating a new record. The hosting server has \n    limitations and unfortunately the WAR FILE exceeded the maximum accepted limit by the \n    server and therefore a feature was removed from the system.</p>\n\n    <p>This way it is not possible to generate PDF, the jasper reports libraries caused a \n    significant increase in the size of the war file. Configurations to increase this limit \n    have already been tested, and the solution to this problem is being analyzed daily so \n    that this feature works again soon, as in tests carried out locally, where this \n    limitation does not occur. As well as improvements in the code are constantly being \n    analyzed so that problems do not occur when using the application.</p>\n\n    <p>Other technical information: Spring Tool Suite, VS Code, Postgres 15.4, \n    Bootstrap 5.0, EC2 Amanzon Tecnology, Putty, File Zilla, DBeaver.</p>\n\n    <p>\n        <a href=\"https://github.com/natanjava/demospringrestapi\">API on GitHub.</a>\n        Branch tested Locally: master. Branch used in deploy: master-deploy.\n        <br><a href=\"https://github.com/natanjava/api-spring-angular\">Angular Project on GitHub</a>\n    </p>\n\n    \n\n        \n\n    \n\n \n</div>\n\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<form >\n\n    <div class=\"mb-3\" >\n      <h3>Login</h3>\n    </div>\n  \n    <div class=\"mb-3\" >\n      <label for=\"login\" class=\"form-label\">Email: </label>\n      <input type=\"email\"  #email=\"ngModel\"  [(ngModel)] = \"usuario.login\" name =\"login\" class=\"form-control\" id=\"login\"  required>\n      <div *ngIf=\"email.invalid\" class=\"alert alert-danger\">\n        Login muss be informed\n      </div>\n    </div>\n  \n  \n    <div class=\"mb-3\">\n      <label for=\"senha\" class=\"form-label\">Password</label>\n      <input type=\"password\" #senha=\"ngModel\" [(ngModel)] = \"usuario.senha\" name=\"senha\" class=\"form-control\" id=\"senha\" required>\n    </div>\n    <div *ngIf=\"senha.invalid\" class=\"alert alert-danger\">\n      Password muss be informed\n    </div>\n  \n    <button type=\"button\" [disabled]=\"email.invalid || senha.invalid\" class=\"btn btn-primary\" (click)=\"login()\">Acess</button>\n    <button style=\"margin-left: 10px;\" type=\"button\" [disabled]=\"email.invalid\" class=\"btn btn-primary\" (click)=\"recuperar();\">Recover Access</button>\n\n  </form>\n  \n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app-constants.ts":
  /*!**********************************!*\
    !*** ./src/app/app-constants.ts ***!
    \**********************************/
  /*! exports provided: AppConstants */
  /***/
  function srcAppAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
      return AppConstants;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var AppConstants = /*#__PURE__*/function () {
      function AppConstants() {
        _classCallCheck(this, AppConstants);
      }
      _createClass(AppConstants, null, [{
        key: "baseServidor",
        get:
        /* -- local --
        public static get baseServidor(): string { return "http://localhost:8080/"}
        
        public static get baseLogin(): string  { return this.baseServidor + "demospringrestapi/login"}
        
        public static get baseUrl() : string { return this.baseServidor + "demospringrestapi/usuario/" }
        
        // acess any controller
        public static get baseUrlPath() : string {return this.baseServidor + "demospringrestapi/"}
        */
        /*  --aws--
        */
        function get() {
          return "http://16.170.235.54:8080/";
        }
      }, {
        key: "baseLogin",
        get: function get() {
          return this.baseServidor + "cursospringrestapi-0.0.1-SNAPSHOT/login";
        }
      }, {
        key: "baseUrl",
        get: function get() {
          return this.baseServidor + "cursospringrestapi-0.0.1-SNAPSHOT/usuario/";
        }
        // acess any controller
      }, {
        key: "baseUrlPath",
        get: function get() {
          return this.baseServidor + "cursospringrestapi-0.0.1-SNAPSHOT/";
        }
      }]);
      return AppConstants;
    }();
    /***/
  },
  /***/"./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _componente_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./componente/usuario/usuario/usuario.component */"./src/app/componente/usuario/usuario/usuario.component.ts");
    /* harmony import */
    var _componente_usuarioAdd_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./componente/usuarioAdd/usuario-add/usuario-add.component */"./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.ts");
    /* harmony import */
    var _service_guardiao_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./service/guardiao.guard */"./src/app/service/guardiao.guard.ts");
    /* harmony import */
    var _componente_usuario_usuario_report_usuario_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./componente/usuario/usuario-report/usuario-report.component */"./src/app/componente/usuario/usuario-report/usuario-report.component.ts");
    /* harmony import */
    var _componente_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./componente/bar-chart/bar-chart.component */"./src/app/componente/bar-chart/bar-chart.component.ts");
    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_service_guardiao_guard__WEBPACK_IMPORTED_MODULE_7__["GuardiaoGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'userList',
      component: _componente_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"],
      canActivate: [_service_guardiao_guard__WEBPACK_IMPORTED_MODULE_7__["GuardiaoGuard"]]
    }, {
      path: 'usuarioAdd',
      component: _componente_usuarioAdd_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioAddComponent"],
      canActivate: [_service_guardiao_guard__WEBPACK_IMPORTED_MODULE_7__["GuardiaoGuard"]]
    }, {
      path: 'usuarioAdd/:id',
      component: _componente_usuarioAdd_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioAddComponent"],
      canActivate: [_service_guardiao_guard__WEBPACK_IMPORTED_MODULE_7__["GuardiaoGuard"]]
    }, {
      path: 'userReport',
      component: _componente_usuario_usuario_report_usuario_report_component__WEBPACK_IMPORTED_MODULE_8__["UsuarioReportComponent"],
      canActivate: [_service_guardiao_guard__WEBPACK_IMPORTED_MODULE_7__["GuardiaoGuard"]]
    }, {
      path: 'chart',
      component: _componente_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__["BarChartComponent"],
      canActivate: [_service_guardiao_guard__WEBPACK_IMPORTED_MODULE_7__["GuardiaoGuard"]]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  },

  /***/"./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);
        this.router = router;
        this.title = 'api-spring-angular';
      }
      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('token') == null) {
            this.router.navigate(['login']);
          }
        }
      }, {
        key: "sair",
        value: function sair() {
          localStorage.clear();
          this.router.navigate(['login']);
        }
      }, {
        key: "esconderNavMenu",
        value: function esconderNavMenu() {
          if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
            return false;
          } else {
            return true;
          }
        }
      }]);
      return AppComponent;
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: options, AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "options", function () {
      return options;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ng2-charts */"./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./home/home.component */"./src/app/home/home.component.ts");
    /* harmony import */
    var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./login/login.component */"./src/app/login/login.component.ts");
    /* harmony import */
    var _service_header_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./service/header-interceptor.service */"./src/app/service/header-interceptor.service.ts");
    /* harmony import */
    var _componente_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./componente/usuario/usuario/usuario.component */"./src/app/componente/usuario/usuario/usuario.component.ts");
    /* harmony import */
    var _componente_usuarioAdd_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./componente/usuarioAdd/usuario-add/usuario-add.component */"./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.ts");
    /* harmony import */
    var ngx_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ngx-mask */"./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */
    var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ngx-pagination */"./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _numbers_only_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./numbers-only.directive */"./src/app/numbers-only.directive.ts");
    /* harmony import */
    var _componente_usuario_usuario_report_usuario_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./componente/usuario/usuario-report/usuario-report.component */"./src/app/componente/usuario/usuario-report/usuario-report.component.ts");
    /* harmony import */
    var _componente_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./componente/bar-chart/bar-chart.component */"./src/app/componente/bar-chart/bar-chart.component.ts");

    /*Requisições ajax: post, get, etc*/

    //mask

    // nao funcionou

    // inicializa variavel de maskara
    var options = {};
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _componente_usuario_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioComponent"], _componente_usuarioAdd_usuario_add_usuario_add_component__WEBPACK_IMPORTED_MODULE_12__["UsuarioAddComponent"], _numbers_only_directive__WEBPACK_IMPORTED_MODULE_17__["NumbersOnlyDirective"], _componente_usuario_usuario_report_usuario_report_component__WEBPACK_IMPORTED_MODULE_18__["UsuarioReportComponent"], _componente_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_19__["BarChartComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _service_header_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpInterceptorModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_13__["NgxMaskModule"].forRoot(options), ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbAlertModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"]],
      providers: [ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  },

  /***/"./src/app/componente/bar-chart/bar-chart.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/componente/bar-chart/bar-chart.component.css ***!
    \**************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponenteBarChartBarChartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGUvYmFyLWNoYXJ0L2Jhci1jaGFydC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/componente/bar-chart/bar-chart.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/componente/bar-chart/bar-chart.component.ts ***!
    \*************************************************************/
  /*! exports provided: BarChartComponent */
  /***/
  function srcAppComponenteBarChartBarChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BarChartComponent", function () {
      return BarChartComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_model_userChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/model/userChart */"./src/app/model/userChart.ts");
    /* harmony import */
    var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/service/usuario.service */"./src/app/service/usuario.service.ts");
    var BarChartComponent = /*#__PURE__*/function () {
      function BarChartComponent(usuarioService) {
        _classCallCheck(this, BarChartComponent);
        this.usuarioService = usuarioService;
        this.userChart = new src_app_model_userChart__WEBPACK_IMPORTED_MODULE_2__["UserChart"]();
        this.barChartOptions = {
          responsive: true
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [{
          data: [],
          label: 'User Salary'
        }];
      }
      _createClass(BarChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          this.usuarioService.carregarGrafico().subscribe(function (data) {
            _this.userChart = data;
            /*Salario*/
            _this.barChartLabels = _this.userChart.nome.split(',');
            /* Nome*/
            var arraySalario = JSON.parse('[' + _this.userChart.salario + ']');
            _this.barChartData = [{
              data: arraySalario,
              label: 'User Salary'
            }];
          });
        }
      }]);
      return BarChartComponent;
    }();
    BarChartComponent.ctorParameters = function () {
      return [{
        type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };
    BarChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bar-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./bar-chart.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/bar-chart/bar-chart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./bar-chart.component.css */"./src/app/componente/bar-chart/bar-chart.component.css"))["default"]]
    })], BarChartComponent);

    /***/
  },

  /***/"./src/app/componente/usuario/usuario-report/usuario-report.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/componente/usuario/usuario-report/usuario-report.component.css ***!
    \********************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponenteUsuarioUsuarioReportUsuarioReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGUvdXN1YXJpby91c3VhcmlvLXJlcG9ydC91c3VhcmlvLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/componente/usuario/usuario-report/usuario-report.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/componente/usuario/usuario-report/usuario-report.component.ts ***!
    \*******************************************************************************/
  /*! exports provided: FormataData, FormatDateAdapter, UsuarioReportComponent */
  /***/
  function srcAppComponenteUsuarioUsuarioReportUsuarioReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormataData", function () {
      return FormataData;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormatDateAdapter", function () {
      return FormatDateAdapter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsuarioReportComponent", function () {
      return UsuarioReportComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var src_app_model_userReport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/model/userReport */"./src/app/model/userReport.ts");
    /* harmony import */
    var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/service/usuario.service */"./src/app/service/usuario.service.ts");

    /*Pega dados do data Picker e transforma no formato aceito pelo BD */
    var FormataData = /*#__PURE__*/function (_ng_bootstrap_ng_boot) {
      _inherits(FormataData, _ng_bootstrap_ng_boot);
      var _super = _createSuper(FormataData);
      /*Pega dados do data Picker e transforma no formato aceito pelo BD */
      function FormataData() {
        var _this2;
        _classCallCheck(this, FormataData);
        _this2 = _super.apply(this, arguments);
        _this2.DELIMITER = '/'; // 18/10/2003
        return _this2;
      }
      // pega os dados do componente e transforma em Array
      _createClass(FormataData, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[0], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[2], 10)
            };
          }
          return null;
        }
        // pega o array e transforma num um formato legivel pra ser mostrado na tela
      }, {
        key: "format",
        value: function format(date) {
          return date ? ValidateDayMonth(date.day) + this.DELIMITER + ValidateDayMonth(date.month) + this.DELIMITER + date.year : '';
        }
        // converte o dado pro modelo de dados aceitavel no banco
      }, {
        key: "toModel",
        value: function toModel(date) {
          return date ? ValidateDayMonth(date.day) + this.DELIMITER + ValidateDayMonth(date.month) + this.DELIMITER + date.year : null;
        }
      }]);
      return FormataData;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"]);
    FormataData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FormataData);

    // acrscenta o 0 se for dia ou mes menor que 10: 1/1/2000 se transforma 01/01/2000
    function ValidateDayMonth(valor) {
      if (valor.toString !== '' && parseInt(valor) <= 9) {
        return '0' + valor;
      }
      return valor;
    }
    var FormatDateAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot2) {
      _inherits(FormatDateAdapter, _ng_bootstrap_ng_boot2);
      var _super2 = _createSuper(FormatDateAdapter);
      function FormatDateAdapter() {
        var _this3;
        _classCallCheck(this, FormatDateAdapter);
        _this3 = _super2.apply(this, arguments);
        _this3.DELIMITER = '/';
        return _this3;
      }
      _createClass(FormatDateAdapter, [{
        key: "fromModel",
        value: function fromModel(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[0], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[2], 10)
            };
          }
          return null;
        }
      }, {
        key: "toModel",
        value: function toModel(date) {
          return date ? ValidateDayMonth(date.day) + this.DELIMITER + ValidateDayMonth(date.month) + this.DELIMITER + date.year : null;
        }
      }]);
      return FormatDateAdapter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateAdapter"]);
    FormatDateAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FormatDateAdapter);
    var UsuarioReportComponent = /*#__PURE__*/function () {
      function UsuarioReportComponent(routeActivated, userService) {
        _classCallCheck(this, UsuarioReportComponent);
        this.routeActivated = routeActivated;
        this.userService = userService;
        this.userReport = new src_app_model_userReport__WEBPACK_IMPORTED_MODULE_4__["UserReport"]();
      }
      /* imprime Relatório */
      _createClass(UsuarioReportComponent, [{
        key: "imprimeRelatorio",
        value: function imprimeRelatorio() {
          this.userService.downloadPdfRelatorioParam(this.userReport);
        }
      }]);
      return UsuarioReportComponent;
    }();
    UsuarioReportComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
      }];
    };
    UsuarioReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usuario-report.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuario/usuario-report/usuario-report.component.html"))["default"],
      providers: [{
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"],
        useClass: FormataData
      }, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateAdapter"],
        useClass: FormatDateAdapter
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usuario-report.component.css */"./src/app/componente/usuario/usuario-report/usuario-report.component.css"))["default"]]
    })], UsuarioReportComponent);

    /***/
  },

  /***/"./src/app/componente/usuario/usuario/usuario.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/componente/usuario/usuario/usuario.component.css ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponenteUsuarioUsuarioUsuarioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGUvdXN1YXJpby91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LmNzcyJ9 */";

    /***/
  },

  /***/"./src/app/componente/usuario/usuario/usuario.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/componente/usuario/usuario/usuario.component.ts ***!
    \*****************************************************************/
  /*! exports provided: UsuarioComponent */
  /***/
  function srcAppComponenteUsuarioUsuarioUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function () {
      return UsuarioComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/service/usuario.service */"./src/app/service/usuario.service.ts");
    var UsuarioComponent = /*#__PURE__*/function () {
      function UsuarioComponent(usuarioService) {
        _classCallCheck(this, UsuarioComponent);
        this.usuarioService = usuarioService;
        this.p = 1;
      }
      _createClass(UsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;
          this.usuarioService.getStudentList().subscribe(function (data) {
            _this4.students = data; //alterado devido implementação
            //this.students = data.content;
            //this.total = data.totalElements;
          });
        }
      }, {
        key: "deletarUsuario",
        value: function deletarUsuario(id, i) {
          var _this5 = this;
          if (id != 1 && confirm('Do you really want to remove?')) {
            this.usuarioService.deletarUsuario(id).subscribe(function (data) {
              // console.log("Return of Delete Method: " +data);  // return ok
              /* reload list after deleting; useless code for Pagination
              this.usuarioService.getStudentList().subscribe(data => {
                this.students = data;
              }); */
              _this5.students.splice(i, 1); // remove from list
              location.reload(); // fixes false positioning of records in the list
            });
          } else {
            window.alert('Standard Admin can´t be removed.');
            return;
          }
        }
      }, {
        key: "consultarUser",
        value: function consultarUser() {
          var _this6 = this;
          if (this.nome == '' || this.nome.trim() === '') {
            this.usuarioService.getStudentList().subscribe(function (data) {
              _this6.students = data;
            });
          } else {
            this.usuarioService.consultarUser(this.nome).subscribe(function (data) {
              _this6.students = data;
            });
          }
          this.p = 1;
          /*
          if (this.nome === ' ') {
            this.usuarioService.getStudentList().subscribe(data => {
              this.students = data.content;
              this.total = data.totalElements;
            });
          } else {
                  this.usuarioService.consultarUser(this.nome).subscribe(data => {
              this.students = data.content;
              this.total = data.totalElements;
            });
          }
          */
        }
        /*Lazy Pagination; implementations coming soon*/
        /*
        carregarPagina(pagina) {
          
          
          if (this.nome !== '' || this.nome.trim()!== '') {
            this.usuarioService.consultarUserPoPage(this.nome, (pagina - 1)).subscribe(data => {
              this.students = data.content;
              this.total = data.totalElements;
            });
          }
          else {
            //console.info("Pagina: " +pagina);
            this.usuarioService.getStudentListPage(pagina - 1).subscribe(data => {
              //  this.students = data;    alterado devido implementação
              this.students = data.content;
              this.total = data.totalElements;
            });
          }
        }
        */
      }, {
        key: "imprimeRelatorio",
        value: function imprimeRelatorio() {
          return this.usuarioService.downloadPdfRelatorio();
        }
      }]);
      return UsuarioComponent;
    }();
    UsuarioComponent.ctorParameters = function () {
      return [{
        type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-usuario',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usuario.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuario/usuario/usuario.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usuario.component.css */"./src/app/componente/usuario/usuario/usuario.component.css"))["default"]]
    })], UsuarioComponent);

    /***/
  },

  /***/"./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.css ***!
    \*****************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponenteUsuarioAddUsuarioAddUsuarioAddComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGUvdXN1YXJpb0FkZC91c3VhcmlvLWFkZC91c3VhcmlvLWFkZC5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.ts ***!
    \****************************************************************************/
  /*! exports provided: FormataData, FormatDateAdapter, UsuarioAddComponent */
  /***/
  function srcAppComponenteUsuarioAddUsuarioAddUsuarioAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormataData", function () {
      return FormataData;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormatDateAdapter", function () {
      return FormatDateAdapter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsuarioAddComponent", function () {
      return UsuarioAddComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */"./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */
    var src_app_model_telefone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/model/telefone */"./src/app/model/telefone.ts");
    /* harmony import */
    var src_app_model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/model/user */"./src/app/model/user.ts");
    /* harmony import */
    var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! src/app/service/usuario.service */"./src/app/service/usuario.service.ts");

    /*Pega dados do data Picker e transforma no formato aceito pelo BD */
    var FormataData = /*#__PURE__*/function (_ng_bootstrap_ng_boot3) {
      _inherits(FormataData, _ng_bootstrap_ng_boot3);
      var _super3 = _createSuper(FormataData);
      /*Pega dados do data Picker e transforma no formato aceito pelo BD */
      function FormataData() {
        var _this7;
        _classCallCheck(this, FormataData);
        _this7 = _super3.apply(this, arguments);
        _this7.DELIMITER = '/'; // 18/10/2003
        return _this7;
      }
      // pega os dados do componente e transforma em Array
      _createClass(FormataData, [{
        key: "parse",
        value: function parse(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[0], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[2], 10)
            };
          }
          return null;
        }
        // pega o array e transforma num um formato legivel pra ser mostrado na tela
      }, {
        key: "format",
        value: function format(date) {
          return date ? ValidateDayMonth(date.day) + this.DELIMITER + ValidateDayMonth(date.month) + this.DELIMITER + date.year : '';
        }
        // converte o dado pro modelo de dados aceitavel no banco
      }, {
        key: "toModel",
        value: function toModel(date) {
          return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
        }
      }]);
      return FormataData;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"]);
    FormataData = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FormataData);

    // acrscenta o 0 se for dia ou mes menor que 10: 1/1/2000 se transforma 01/01/2000
    function ValidateDayMonth(valor) {
      if (valor.toString !== '' && parseInt(valor) <= 9) {
        return '0' + valor;
      }
      return valor;
    }
    var FormatDateAdapter = /*#__PURE__*/function (_ng_bootstrap_ng_boot4) {
      _inherits(FormatDateAdapter, _ng_bootstrap_ng_boot4);
      var _super4 = _createSuper(FormatDateAdapter);
      function FormatDateAdapter() {
        var _this8;
        _classCallCheck(this, FormatDateAdapter);
        _this8 = _super4.apply(this, arguments);
        _this8.DELIMITER = '/';
        return _this8;
      }
      _createClass(FormatDateAdapter, [{
        key: "fromModel",
        value: function fromModel(value) {
          if (value) {
            var date = value.split(this.DELIMITER);
            return {
              day: parseInt(date[0], 10),
              month: parseInt(date[1], 10),
              year: parseInt(date[2], 10)
            };
          }
          return null;
        }
      }, {
        key: "toModel",
        value: function toModel(date) {
          return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
        }
      }]);
      return FormatDateAdapter;
    }(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateAdapter"]);
    FormatDateAdapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FormatDateAdapter);
    var UsuarioAddComponent = /*#__PURE__*/function () {
      function UsuarioAddComponent(routeActivated, userService) {
        _classCallCheck(this, UsuarioAddComponent);
        this.routeActivated = routeActivated;
        this.userService = userService;
        this.usuario = new src_app_model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.telefone = new src_app_model_telefone__WEBPACK_IMPORTED_MODULE_4__["Telefone"]();
        this.profissoes = Array();
      }
      _createClass(UsuarioAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;
          var id = this.routeActivated.snapshot.paramMap.get('id');
          this.userService.getProfissaoList().subscribe(function (data) {
            _this9.profissoes = data;
            //console.log(this.profissoes);      
          });

          this.userService.getStudentList().subscribe(function (data) {
            _this9.students = data;
            //this.students = data.content;
            _this9.totalList = _this9.students.length;
          });
          if (id != null) {
            //console.log('Valor sendo editado: ' +id);
            this.userService.getStudent(id).subscribe(function (data) {
              /*o metodo no Back-End recuperava dados do DTO, agora não mais */
              _this9.usuario = data;
              /* implementacao de recuperacao de dados de Objeto DTO
              this.usuario.id = data.userId;
                      this.usuario.login = data.userLogin;
                      this.usuario.nome = data.userNome;
                      this.usuario.senha = data.userSenha;*/
            });
          }
        }
      }, {
        key: "salvarUser",
        value: function salvarUser() {
          var _this10 = this;
          //console.info(this.usuario);
          /*
          if (!this.validarFormatoData(this.usuario.dataNascimento.toString())) {
            alert('Você deve fornecer a data em um formato válido: dd/mm/yyyy');
            return; // Impede o envio dos dados ao backend se o formato for inválido
          }
          */
          if (this.usuario.id == 1) {
            window.alert('Standard Admin can´t be updated.');
            return;
          }
          if (this.usuario.id != null && this.usuario.id.toString().trim() != null) {
            /*Update*/
            this.userService.tualizarUsuario(this.usuario).subscribe(function (data) {
              //console.info("User atualizado :" +data);
              window.alert('User sucessfully updated.');
              _this10.novo();
            });
          } else {
            if (this.totalList < 21) {
              this.userService.salvarUsuario(this.usuario).subscribe(function (data) {
                //console.info("Salvou novo usuario: " +data);
                window.alert('New User sucessfully saved.');
                _this10.novo();
              });
            } else {
              window.alert('For technical reasons, this "Test-System" \nwas designed to only support 21 records.' + '\nIf you want to add new Registers please \ndelete some of them.');
              return;
            }
          }
        }
        /* Limpar a tela*/
      }, {
        key: "novo",
        value: function novo() {
          this.usuario = new src_app_model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
          this.telefone = new src_app_model_telefone__WEBPACK_IMPORTED_MODULE_4__["Telefone"]();
        }
      }, {
        key: "deletarTelefone",
        value: function deletarTelefone(id, i) {
          var _this11 = this;
          if (id == null) {
            this.usuario.telefones.splice(i, 1);
            return;
          }
          if (id !== null && confirm("Do you really want do remove the Phone?")) {
            this.userService.removerTelefone(id).subscribe(function (data) {
              _this11.usuario.telefones.splice(i, 1);
            });
          }
        }
      }, {
        key: "addFone",
        value: function addFone() {
          if (!this.usuario.telefones) {
            this.usuario.telefones = [];
          }
          if (this.usuario.telefones.length >= 2) {
            window.alert('Maximum number of phones: 2');
            return;
          }
          if (this.telefone.numero) {
            this.usuario.telefones.push(this.telefone);
            this.telefone = new src_app_model_telefone__WEBPACK_IMPORTED_MODULE_4__["Telefone"]();
          } else {
            // Exiba um alerta JavaScript
            window.alert('Invalid nunber.');
          }
        }
      }, {
        key: "validarFormatoData",
        value: function validarFormatoData(data) {
          // Expressão regular para verificar o formato 'dd/mm/yyyy'
          var formatoValido = /^\d{2}\/\d{2}\/\d{4}$/;
          return formatoValido.test(data);
        }
      }]);
      return UsuarioAddComponent;
    }();
    UsuarioAddComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }];
    };
    UsuarioAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./usuario-add.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.html"))["default"],
      providers: [{
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateParserFormatter"],
        useClass: FormataData
      }, {
        provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDateAdapter"],
        useClass: FormatDateAdapter
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./usuario-add.component.css */"./src/app/componente/usuarioAdd/usuario-add/usuario-add.component.css"))["default"]]
    })], UsuarioAddComponent);

    /***/
  },

  /***/"./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/
  /*! exports provided: default */
  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";

    /***/
  },

  /***/"./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HomeComponent;
    }();
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.css */"./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/
  /*! exports provided: default */
  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "form {\r\n    padding: 20% 30% 10% 30%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIHBhZGRpbmc6IDIwJSAzMCUgMTAlIDMwJTtcclxufSJdfQ== */";

    /***/
  },

  /***/"./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/
  /*! exports provided: LoginComponent */
  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _service_login_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../service/login-service.service */"./src/app/service/login-service.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(loginService, router) {
        _classCallCheck(this, LoginComponent);
        this.loginService = loginService;
        this.router = router;
        this.usuario = {
          login: 'admin',
          senha: '123'
        };
      }
      _createClass(LoginComponent, [{
        key: "login",
        value: function login() {
          //console.log("Login: " +this.usuario.login + " senha: "  +this.usuario.senha)
          this.loginService.login(this.usuario);
        }
      }, {
        key: "recuperar",
        value: function recuperar() {
          this.loginService.recuperar(this.usuario.login);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
            this.router.navigate(['home']);
          }
        }
      }]);
      return LoginComponent;
    }();
    LoginComponent.ctorParameters = function () {
      return [{
        type: _service_login_service_service__WEBPACK_IMPORTED_MODULE_2__["LoginServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./login.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./login.component.css */"./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);

    /***/
  },

  /***/"./src/app/model/profissao.ts":
  /*!************************************!*\
    !*** ./src/app/model/profissao.ts ***!
    \************************************/
  /*! exports provided: Profissao */
  /***/
  function srcAppModelProfissaoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Profissao", function () {
      return Profissao;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Profissao = /*#__PURE__*/_createClass(function Profissao() {
      _classCallCheck(this, Profissao);
    });
    /***/
  },
  /***/"./src/app/model/telefone.ts":
  /*!***********************************!*\
    !*** ./src/app/model/telefone.ts ***!
    \***********************************/
  /*! exports provided: Telefone */
  /***/
  function srcAppModelTelefoneTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "Telefone", function () {
      return Telefone;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var Telefone = /*#__PURE__*/_createClass(function Telefone() {
      _classCallCheck(this, Telefone);
    });
    /***/
  },
  /***/"./src/app/model/user.ts":
  /*!*******************************!*\
    !*** ./src/app/model/user.ts ***!
    \*******************************/
  /*! exports provided: User */
  /***/
  function srcAppModelUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _profissao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./profissao */"./src/app/model/profissao.ts");
    var User = /*#__PURE__*/_createClass(function User() {
      _classCallCheck(this, User);
      this.profissao = new _profissao__WEBPACK_IMPORTED_MODULE_1__["Profissao"]();
    });
    /***/
  },
  /***/"./src/app/model/userChart.ts":
  /*!************************************!*\
    !*** ./src/app/model/userChart.ts ***!
    \************************************/
  /*! exports provided: UserChart */
  /***/
  function srcAppModelUserChartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserChart", function () {
      return UserChart;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var UserChart = /*#__PURE__*/_createClass(function UserChart() {
      _classCallCheck(this, UserChart);
    });
    /***/
  },
  /***/"./src/app/model/userReport.ts":
  /*!*************************************!*\
    !*** ./src/app/model/userReport.ts ***!
    \*************************************/
  /*! exports provided: UserReport */
  /***/
  function srcAppModelUserReportTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UserReport", function () {
      return UserReport;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    var UserReport = /*#__PURE__*/_createClass(function UserReport() {
      _classCallCheck(this, UserReport);
    });
    /***/
  },
  /***/"./src/app/numbers-only.directive.ts":
  /*!*******************************************!*\
    !*** ./src/app/numbers-only.directive.ts ***!
    \*******************************************/
  /*! exports provided: NumbersOnlyDirective */
  /***/
  function srcAppNumbersOnlyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NumbersOnlyDirective", function () {
      return NumbersOnlyDirective;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var NumbersOnlyDirective = /*#__PURE__*/function () {
      function NumbersOnlyDirective(el) {
        _classCallCheck(this, NumbersOnlyDirective);
        this.el = el;
      }
      _createClass(NumbersOnlyDirective, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var inputElement = event.target;
          var newValue = inputElement.value.replace(/[^0-9.,]/g, ''); // Permitir números, ponto e vírgula
          // Remover múltiplas vírgulas ou pontos e manter apenas um deles
          newValue = newValue.replace(/([.,])[.,]+/g, '$1');
          // Garantir que haja no máximo duas casas decimais
          var parts = newValue.split(/[.,]/);
          if (parts[1]) {
            parts[1] = parts[1].slice(0, 2);
            newValue = parts.join('.');
          }
          inputElement.value = newValue;
        }
      }]);
      return NumbersOnlyDirective;
    }();
    NumbersOnlyDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])], NumbersOnlyDirective.prototype, "onInputChange", null);
    NumbersOnlyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appNumbersOnly]'
    })], NumbersOnlyDirective);

    /***/
  },

  /***/"./src/app/service/guardiao.guard.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/guardiao.guard.ts ***!
    \*******************************************/
  /*! exports provided: GuardiaoGuard */
  /***/
  function srcAppServiceGuardiaoGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "GuardiaoGuard", function () {
      return GuardiaoGuard;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./usuario.service */"./src/app/service/usuario.service.ts");
    var GuardiaoGuard = /*#__PURE__*/function () {
      function GuardiaoGuard(userService) {
        _classCallCheck(this, GuardiaoGuard);
        this.userService = userService;
      }
      _createClass(GuardiaoGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          console.info('guardiao sendo chamado');
          return this.userService.userAutenticado();
        }
      }]);
      return GuardiaoGuard;
    }();
    GuardiaoGuard.ctorParameters = function () {
      return [{
        type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]
      }];
    };
    GuardiaoGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], GuardiaoGuard);

    /***/
  },

  /***/"./src/app/service/header-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/service/header-interceptor.service.ts ***!
    \*******************************************************/
  /*! exports provided: HeaderInterceptorService, HttpInterceptorModule */
  /***/
  function srcAppServiceHeaderInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderInterceptorService", function () {
      return HeaderInterceptorService;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HttpInterceptorModule", function () {
      return HttpInterceptorModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var HeaderInterceptorService = /*#__PURE__*/function () {
      function HeaderInterceptorService() {
        _classCallCheck(this, HeaderInterceptorService);
      }
      _createClass(HeaderInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          //throw new Error("Not implemented yet");
          if (localStorage.getItem("token") !== null) {
            var token = 'Bearer ' + localStorage.getItem('token');
            var tokenRequest = req.clone({
              headers: req.headers.set('Authorization', token)
            });
            // return next.handle(tokenRequest);   // antes da implementação de tratamento de errors
            /*
            return next.handle(tokenRequest).pipe(
              tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                  if (event.status === 200 || event.status === 201) {
                    console.info('Sucesso na operação');
                  }
                }
              }),
              catchError(this.processaError)
            ); */
            return next.handle(tokenRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processaError));
          } else {
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.processaError));
          }
        }
      }, {
        key: "processaError",
        value: function processaError(error) {
          var errorMessage = 'Erro desconhecido';
          console.log(error);
          if (error.error instanceof ErrorEvent) {
            console.error(error.error);
            errorMessage = 'Error: ' + error.error.error;
          } else {
            if (error.status == 403) {
              errorMessage = "Access denied. Logout and login again.";
            } else {
              errorMessage = 'Codigo' + error.error.code + '\nMessage: ' + error.error.error;
            }
          }
          window.alert(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);
      return HeaderInterceptorService;
    }();
    HeaderInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HeaderInterceptorService);
    var HttpInterceptorModule = /*#__PURE__*/_createClass(function HttpInterceptorModule() {
      _classCallCheck(this, HttpInterceptorModule);
    });
    HttpInterceptorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: HeaderInterceptorService,
        multi: true
      }]
    })], HttpInterceptorModule);

    /***/
  },

  /***/"./src/app/service/login-service.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/login-service.service.ts ***!
    \**************************************************/
  /*! exports provided: LoginServiceService */
  /***/
  function srcAppServiceLoginServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "LoginServiceService", function () {
      return LoginServiceService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../app-constants */"./src/app/app-constants.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../model/user */"./src/app/model/user.ts");
    var LoginServiceService = /*#__PURE__*/function () {
      function LoginServiceService(http, router) {
        _classCallCheck(this, LoginServiceService);
        this.http = http;
        this.router = router;
      }
      _createClass(LoginServiceService, [{
        key: "recuperar",
        value: function recuperar(login) {
          var user = new _model_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
          user.login = login;
          return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrlPath + 'recuperar/', user).subscribe(function (data) {
            alert(JSON.parse(JSON.stringify(data)).error);
          }, function (error) {
            console.error("Erro ao recuperar o login");
            alert('Erro ao recuperar login');
          });
        }
      }, {
        key: "login",
        value: function login(usuario) {
          var _this12 = this;
          //console.info(JSON.stringify(usuario))
          return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseLogin, JSON.stringify(usuario)).subscribe(function (data) {
            //console.info(JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]);
            var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1];
            localStorage.setItem("token", token);
            //console.info("Toke: "+ localStorage.getItem("token")); // print TOKEN on Page Code
            _this12.router.navigate(['home']);
          }, function (error) {
            console.error("Erro ao fazer o login");
            alert('Acesso Negado');
          });
        }
      }]);
      return LoginServiceService;
    }();
    LoginServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    LoginServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], LoginServiceService);

    /***/
  },

  /***/"./src/app/service/usuario.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/usuario.service.ts ***!
    \********************************************/
  /*! exports provided: UsuarioService */
  /***/
  function srcAppServiceUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../app-constants */"./src/app/app-constants.ts");
    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(http) {
        _classCallCheck(this, UsuarioService);
        this.http = http;
      }
      _createClass(UsuarioService, [{
        key: "getStudentList",
        value: function getStudentList() {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl); /*metodo get ; uri: contexto/usuario/  */
        }
      }, {
        key: "getProfissaoList",
        value: function getProfissaoList() {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrlPath + 'profissao/');
        }
      }, {
        key: "getStudentListPage",
        value: function getStudentListPage(pagina) {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + 'page/' + pagina);
        }
      }, {
        key: "getStudent",
        value: function getStudent(id) {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + id);
        }
      }, {
        key: "deletarUsuario",
        value: function deletarUsuario(id) {
          return this.http["delete"](_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + id, {
            responseType: 'text'
          });
        }
      }, {
        key: "consultarUser",
        value: function consultarUser(nome) {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + "usuarioPorNome/" + nome);
        }
      }, {
        key: "consultarUserPoPage",
        value: function consultarUserPoPage(nome, page) {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + "usuarioPorNome/" + nome + "/page/" + page);
        }
      }, {
        key: "salvarUsuario",
        value: function salvarUsuario(user) {
          return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl, user);
        }
      }, {
        key: "tualizarUsuario",
        value: function tualizarUsuario(user) {
          return this.http.put(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl, user);
        }
      }, {
        key: "removerTelefone",
        value: function removerTelefone(id) {
          return this.http["delete"](_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + "removerTelefone/" + id, {
            responseType: 'text'
          });
        }
      }, {
        key: "userAutenticado",
        value: function userAutenticado() {
          if (localStorage.getItem('token') !== null && localStorage.getItem('token').toString().trim() !== null) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "downloadPdfRelatorio",
        value: function downloadPdfRelatorio() {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + 'relatorio', {
            responseType: 'text'
          }).subscribe(function (data) {
            // querySelector pega um componente da tela e joga a strnig base64 dentro
            document.querySelector('iframe').src = data;
          });
        }
      }, {
        key: "downloadPdfRelatorioParam",
        value: function downloadPdfRelatorioParam(userReport) {
          return this.http.post(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + 'relatorio/', userReport, {
            responseType: 'text'
          }).subscribe(function (data) {
            // querySelector pega um componente da tela e joga a strnig base64 dentro
            document.querySelector('iframe').src = data;
          });
        }
      }, {
        key: "carregarGrafico",
        value: function carregarGrafico() {
          return this.http.get(_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseUrl + 'grafico');
        }
      }]);
      return UsuarioService;
    }();
    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! hammerjs */"./node_modules/hammerjs/hammer.js");
    /* harmony import */
    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\workspace-vscode\api-spring-angular\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map