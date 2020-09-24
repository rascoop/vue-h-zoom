module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "98e7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "98e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("fd8b")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5b5dab8e-vue-loader-template"}!/usr/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/lib/node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!/usr/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib??vue-loader-options!./src/libs/VueHZoom.vue?vue&type=template&id=6dd7da88&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue-h-zoom"},[_c('div',{ref:"thumbnail",staticClass:"thumbnail-area",style:(_vm.thumbnailStyle),on:{"mouseenter":_vm.mouseEnter,"mouseleave":_vm.mouseLeave,"mousemove":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.followMouse($event)}}},[(_vm.visibleZoom)?_c('div',{style:(_vm.pointerBoxStyle),on:{"mouseenter":_vm.mouseEnter,"mousemove":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.followMouse($event)}}}):_vm._e()]),(_vm.visibleZoom)?_c('div',{staticClass:"img-zoom-container",style:(_vm.containerStyle)},[_c('div',{style:(_vm.zoomStyle)})]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/libs/VueHZoom.vue?vue&type=template&id=6dd7da88&scoped=true&

// CONCATENATED MODULE: ./src/libs/vue-h-zoom.js?vue&type=script&lang=js&
/* harmony default export */ var vue_h_zoomvue_type_script_lang_js_ = ({
  name: 'vue-h-zoom',
  props: {
    image: {
      type: String,
      required: true
    },
    imageFull: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    zoomLevel: {
      type: Number,
      default: 4
    },
    zoomWindowSize: {
      type: Number,
      default: 2
    },
    zoomWindowX: {
      type: Number,
      default: 300
    },
    zoomWindowY: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      visibleZoom: false,
      pointer: {
        x: 0,
        y: 0
      },
      thumbnailPos: {}
    }
  },
  methods: {
    toPx: function (v) {
      return v + 'px'
    },
    mouseEnter: function () {
      this.updateThumbnailPos()
      this.visibleZoom = true
    },
    mouseLeave: function () {
      this.visibleZoom = false
    },
    followMouse: function (e) {
      this.$refs.thumbnail.offsetTopLeft
      this.pointer = {
        x: e.pageX - this.$refs.thumbnail.getBoundingClientRect().left - window.scrollX,
        y: e.pageY - this.$refs.thumbnail.getBoundingClientRect().top - window.scrollY
      }
    },
    updateThumbnailPos: function () {
      const el = this.$refs.thumbnail
      // this.thumbnailPos = {
      //   top: el.offsetTop,
      //   left: el.offsetLeft
      // }
      this.thumbnailPos = {
        top: 0,
        left: 0
      }
    }
  },
  computed: {
    zoomWidth: function () {
      return this.zoomWindowSize * this.width
    },
    zoomHeight: function () {
      return this.zoomWindowSize * this.height
    },
    thumbnailStyle: function () {
      return {
        'background-image': `url(${this.image})`,
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        height: this.toPx(this.height),
        width: this.toPx(this.width)
      }
    },
    containerStyle: function () {
      return {
        height: this.toPx(this.zoomHeight),
        width: this.toPx(this.zoomWidth),
        left: this.toPx(this.zoomWindowX),
        top: this.toPx(this.zoomWindowY),
        position: 'absolute',
        overflow: 'hidden',
        border: '1px solid #ccc'
      }
    },
    zoomPosX: function () {
      const xPad = this.width / 2
      const posX = -(this.pointer.x - this.thumbnailPos.left - xPad) * this.zoomWindowSize

      if (posX > this.pointerEdgeX) return this.pointerEdgeX
      if (posX < (this.pointerEdgeX * -1)) return (this.pointerEdgeX * -1)
      return posX
    },
    zoomPosY: function () {
      const yPad = (this.height / 2)
      const posY = -(this.pointer.y - this.thumbnailPos.top - yPad) * this.zoomWindowSize
      if (posY > this.pointerEdgeY) return this.pointerEdgeY
      if (posY < (this.pointerEdgeY * -1)) return (this.pointerEdgeY * -1)
      return posY
    },
    zoomStyle: function () {
      return {
        'background-image': `url(${this.largeImage})`,
        'background-repeat': 'no-repeat',
        'background-position': this.toPx(this.zoomPosX) + ' ' + this.toPx(this.zoomPosY),
        'background-size': 'contain',
        width: '100%',
        height: '100%',
        '-webkit-transform': `scale(${this.zoomLevel})`,
        transform: `scale(${this.zoomLevel})`
      }
    },
    pointerWidth: function () {
      return this.width / this.zoomLevel
    },
    pointerHeight: function () {
      return this.height / this.zoomLevel
    },
    pointerOffsetTop: function () {
      const top = this.pointer.y - (this.pointerHeight / 2) - this.thumbnailPos.top
      if (top < 0) return 0
      if (top > (this.height - this.pointerHeight)) return (this.height - this.pointerHeight)
      return top
    },
    pointerOffsetLeft: function () {
      const left = this.pointer.x - (this.pointerWidth / 2) - this.thumbnailPos.left
      if (left < 0) return 0
      if (left > (this.width - this.pointerWidth)) return (this.width - this.pointerWidth)
      
      return left
    },
    pointerEdgeX: function () {
      // you have to bound it within the reduced with from pointerwidth multiplied by half zoom window size
      return (this.width - this.pointerWidth) * (this.zoomWindowSize / 2)
    },
    pointerEdgeY: function () {
      return (this.height - this.pointerHeight) * (this.zoomWindowSize / 2)
    },
    pointerBoxStyle: function () {
      return {
        position: 'absolute',
        'z-index': '999',
        transform: 'translateZ(0px)',
        top: this.toPx(this.pointerOffsetTop),
        left: this.toPx(this.pointerOffsetLeft),
        width: this.toPx(this.pointerWidth),
        height: this.toPx(this.pointerHeight),
        background: 'gray',
        opacity: 0.5,
        border: '1px solid white',
        cursor: 'crosshair'
      }
    },
    largeImage: function () {
      return this.imageFull || this.image
    }
  }
});

// CONCATENATED MODULE: ./src/libs/vue-h-zoom.js?vue&type=script&lang=js&
 /* harmony default export */ var libs_vue_h_zoomvue_type_script_lang_js_ = (vue_h_zoomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/libs/VueHZoom.vue?vue&type=style&index=0&id=6dd7da88&scoped=true&lang=css&
var VueHZoomvue_type_style_index_0_id_6dd7da88_scoped_true_lang_css_ = __webpack_require__("dd23");

// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/libs/VueHZoom.vue






/* normalize component */

var component = normalizeComponent(
  libs_vue_h_zoomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6dd7da88",
  null
  
)

/* harmony default export */ var VueHZoom = (component.exports);
// CONCATENATED MODULE: /usr/lib/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VueHZoom);



/***/ }),

/***/ "dd23":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _usr_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueHZoom_vue_vue_type_style_index_0_id_6dd7da88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f96f");
/* harmony import */ var _usr_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueHZoom_vue_vue_type_style_index_0_id_6dd7da88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_usr_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueHZoom_vue_vue_type_style_index_0_id_6dd7da88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_usr_lib_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_usr_lib_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_loaders_stylePostLoader_js_usr_lib_node_modules_vue_cli_service_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_usr_lib_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_usr_lib_node_modules_vue_cli_service_node_modules_vue_loader_lib_index_js_vue_loader_options_VueHZoom_vue_vue_type_style_index_0_id_6dd7da88_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f96f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fd8b":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-h-zoom.common.js.map