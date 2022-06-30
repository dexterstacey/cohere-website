// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utilities.js":[function(require,module,exports) {
"use strict";
/**
 * Display message in UI
 * @param {String} message
 * @param {DomElement} element
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMessage = void 0;

var loadMessage = function loadMessage(message, element) {
  element.innerHTML = "";
  var html;
  html = "<p style=\"color:white; text-align:center;\">".concat(message, "</p>");
  element.insertAdjacentHTML("afterbegin", html);
};

exports.loadMessage = loadMessage;
},{}],"js/fetchBlogs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchBlogs = void 0;

var _utilities = require("./utilities.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchBlogs = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var element,
        response,
        data,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            element = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            (0, _utilities.loadMessage)("Loading...🚀", element);
            _context.prev = 2;
            _context.next = 5;
            return fetch("https://calm-inlet-18337.herokuapp.com/");

          case 5:
            response = _context.sent;

            if (response.ok) {
              _context.next = 8;
              break;
            }

            throw new Error("Couldn't fetch blogs'");

          case 8:
            _context.next = 10;
            return response.json();

          case 10:
            data = _context.sent;
            return _context.abrupt("return", {
              success: true,
              data: data
            });

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", {
              success: false,
              message: _context.t0.message
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));

  return function fetchBlogs() {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchBlogs = fetchBlogs;
},{"./utilities.js":"js/utilities.js"}],"js/renderBlogs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderBlogs = void 0;

var _fetchBlogs = require("./fetchBlogs.js");

var _utilities = require("./utilities.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var renderBlogs = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var element,
        html,
        colors,
        blogs,
        data,
        firstThreeArticles,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            element = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
            html = "";
            _context.next = 4;
            return (0, _fetchBlogs.fetchBlogs)(element);

          case 4:
            blogs = _context.sent;

            if (blogs.success) {
              _context.next = 8;
              break;
            }

            (0, _utilities.loadMessage)("".concat(blogs.message, "  \uD83D\uDEA9"), element);
            return _context.abrupt("return");

          case 8:
            data = blogs.data.results.data; // Limit to only 3 articles

            if (element.classList.contains("c-news")) {
              firstThreeArticles = filterArr(data, "news");
              colors = ["#ff9343", "#72ccca", "#ff6865"];
            } else if (element.classList.contains("c-jobs")) {
              firstThreeArticles = filterArr(data, "jobs");
              colors = ["#282828", "#ff6865", "#72ccca"];
            }

            firstThreeArticles.forEach(function (el, index) {
              // reset colors after every 3 blogs
              if (index > colors.length - 1) index = 0;
              html += "\n        <div class=\"news__item\" style=\"background-color: ".concat(colors[index], ";\">\n          <div style=\"font-size: 1.6rem; font-weight: bold; display: inline-block; white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; ").concat(colors[index] === "#282828" ? "color: white" : "", "\">").concat(el.name, "</div>\n          <a href=\"https://news.wearecohere.org").concat(el.permalink, "\"><img style=\"height: 20rem; width: 100%;\"\n          data-src=\"../images/blog-placeholder.jpg\"\n           src=\"").concat(el.image, "\" referrerpolicy=\"no-referrer\"></a>\n        </div>\n        ");
            });
            element.innerHTML = ""; // insert blogs under the news div

            element.insertAdjacentHTML("afterbegin", html);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderBlogs() {
    return _ref.apply(this, arguments);
  };
}();

exports.renderBlogs = renderBlogs;

var filterArr = function filterArr(arr, category) {
  var returnedArray = arr.filter(function (blog) {
    return blog.category.includes(category);
  }).slice(0, 3);
  return returnedArray;
};
},{"./fetchBlogs.js":"js/fetchBlogs.js","./utilities.js":"js/utilities.js"}],"js/lazyLoading.js":[function(require,module,exports) {
"use strict"; //-------------------
// Lazy Load Sections

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgObserver = exports.sectionObserver = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var revealSection = function revealSection(entries, observer) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

var sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1
}); //-------------------
// Lazy Load Images

exports.sectionObserver = sectionObserver;

var loadImage = function loadImage(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src; // unobserve

      observer.unobserve(entry.target);
    }
  });
};

var imgObserver = new IntersectionObserver(loadImage, {
  // play around with this
  threshold: 0.5
});
exports.imgObserver = imgObserver;
},{}],"js/script.js":[function(require,module,exports) {
"use strict";

var _renderBlogs = require("./renderBlogs.js");

var _lazyLoading = require("./lazyLoading.js");

//DOM ELEMENTS
var newsBlog = document.querySelectorAll(".news__blog");
var imgTargets = document.querySelectorAll("img[data-src]");
var allSections = document.querySelectorAll(".section"); // LAZY LOADING IMAGES SECTION

imgTargets.forEach(function (img) {
  _lazyLoading.imgObserver.observe(img);
}); // REVEAL SECTIONS

allSections.forEach(function (section) {
  _lazyLoading.sectionObserver.observe(section); // section.classList.add("section--hidden");

}); // READ BLOGS SECTION

if (newsBlog) {
  newsBlog.forEach(function (news) {
    (0, _renderBlogs.renderBlogs)(news);
  });
}
},{"./renderBlogs.js":"js/renderBlogs.js","./lazyLoading.js":"js/lazyLoading.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58803" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map