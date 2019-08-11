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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/TypeScript/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/TypeScript/_Domain/tabuleiro.ts":
/*!*********************************************!*\
  !*** ./web/TypeScript/_Domain/tabuleiro.ts ***!
  \*********************************************/
/*! exports provided: Tabuleiro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tabuleiro\", function() { return Tabuleiro; });\n/* harmony import */ var _tabuleiroItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabuleiroItem */ \"./web/TypeScript/_Domain/tabuleiroItem.ts\");\n/* harmony import */ var _ObjectValue_celulasTabuleiro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_ObjectValue/celulasTabuleiro */ \"./web/TypeScript/_ObjectValue/celulasTabuleiro.ts\");\n/* harmony import */ var _Pecas_Peao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_Pecas/Peao */ \"./web/TypeScript/_Pecas/Peao.ts\");\n\r\n\r\n\r\nvar Tabuleiro = /** @class */ (function () {\r\n    function Tabuleiro() {\r\n        this.num_campos = 64;\r\n        this.campos = [];\r\n        this.CelulasIds = _ObjectValue_celulasTabuleiro__WEBPACK_IMPORTED_MODULE_1__[\"CelulasIdsValue\"];\r\n        this.carregarCamposr();\r\n        this.carregarPeoes();\r\n    }\r\n    Tabuleiro.prototype.carregarCamposr = function () {\r\n        for (var i = 0; i < this.num_campos; i++) {\r\n            var celulaDom = this.RecuperarReferenciaReferencia(i + 1);\r\n            this.campos[i] = new _tabuleiroItem__WEBPACK_IMPORTED_MODULE_0__[\"TabuleiroItem\"](i, celulaDom.id);\r\n        }\r\n    };\r\n    Tabuleiro.prototype.RemoverSelecaoItens = function () {\r\n        var elements = document.getElementsByClassName('item-ative');\r\n        for (var i = 0; i < elements.length; i++) {\r\n            var element = elements.item(i);\r\n            var classAtributes = element.getAttribute('class');\r\n            element.setAttribute('class', classAtributes.replace(' item-ative', ''));\r\n        }\r\n    };\r\n    Tabuleiro.prototype.itemSelect = function (element) {\r\n        this.RemoverSelecaoItens();\r\n        var classAtributes = element.getAttribute('class');\r\n        classAtributes += \" item-ative\";\r\n        console.log(classAtributes);\r\n        element.setAttribute('class', classAtributes);\r\n        var idItemCelula = element.dataset.idcelula;\r\n        var tabuleiroItem = this.RecuperaItemTabuleiro(idItemCelula);\r\n        var camposMovimento = tabuleiroItem.GetPeca().verificarCamposMovimento(tabuleiroItem.GetCelulaDom());\r\n        this.itensMovimentos(camposMovimento);\r\n        this.itemSelectDOM = element;\r\n    };\r\n    Tabuleiro.prototype.itensMovimentos = function (celulaIds) {\r\n        var _this = this;\r\n        celulaIds.forEach(function (celula) {\r\n            var element = document.querySelectorAll(\"[data-idcelula='\" + celula + \"']\")[0];\r\n            _this.SetClass(element, 'item-possivel-movimento');\r\n        });\r\n    };\r\n    Tabuleiro.prototype.SetClass = function (element, classe) {\r\n        var classAtributes = element.getAttribute('class') + (\" \" + classe);\r\n        element.setAttribute('class', classAtributes);\r\n    };\r\n    Tabuleiro.prototype.RemoveClass = function (element, classe) {\r\n        var classAtributes = element.getAttribute('class');\r\n        element.setAttribute('class', classAtributes.replace(\" \" + classe + \" \", ''));\r\n    };\r\n    Tabuleiro.prototype.RecuperaItemTabuleiro = function (celulaId) {\r\n        var celulaRefere = this.RecuperarReferenciaId(celulaId);\r\n        return this.campos[celulaRefere.referencia - 1];\r\n    };\r\n    Tabuleiro.prototype.RecuperarReferenciaId = function (celulaId) {\r\n        try {\r\n            return this.CelulasIds.celula.filter(function (e) { return e.id == celulaId; })[0];\r\n        }\r\n        catch (error) {\r\n            throw new Error(\"N\\u00E3o foi possivel localizar a celula escolhida\");\r\n        }\r\n    };\r\n    Tabuleiro.prototype.RecuperarReferenciaReferencia = function (referencia) {\r\n        try {\r\n            return this.CelulasIds.celula.filter(function (e) { return e.referencia == referencia; })[0];\r\n        }\r\n        catch (error) {\r\n            throw new Error(\"N\\u00E3o foi possivel localizar a celula escolhida\");\r\n        }\r\n    };\r\n    Tabuleiro.prototype.carregarPeoes = function () {\r\n        var item = this.campos[26];\r\n        item.SetPeca(new _Pecas_Peao__WEBPACK_IMPORTED_MODULE_2__[\"Peao\"]());\r\n        item.SetDisplay();\r\n    };\r\n    return Tabuleiro;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9fRG9tYWluL3RhYnVsZWlyby50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYi9UeXBlU2NyaXB0L19Eb21haW4vdGFidWxlaXJvLnRzPzIyN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFidWxlaXJvSXRlbSB9IGZyb20gXCIuL3RhYnVsZWlyb0l0ZW1cIjtcbmltcG9ydCB7IENlbHVsYXNJZHNWYWx1ZSwgQ2VsdWxhc0lkcywgQ2VsdWxhSWQgfSBmcm9tIFwiLi4vX09iamVjdFZhbHVlL2NlbHVsYXNUYWJ1bGVpcm9cIjtcbmltcG9ydCB7IFBlYW8gfSBmcm9tIFwiLi4vX1BlY2FzL1BlYW9cIjtcblxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJ1bGVpcm8ge1xuICAgIGl0ZW1TZWxlY3RET006IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY2FtcG9zOiBUYWJ1bGVpcm9JdGVtW107XG4gICAgbm9tZTogc3RyaW5nO1xuICAgIGl0ZW1TZWxlY3QoZWxlbWVudDogRWxlbWVudCk6IHZvaWQ7XG4gICAgUmVjdXBlcmFyUmVmZXJlbmNpYUlkKGNlbHVsYUlkOiBzdHJpbmcpOiBDZWx1bGFJZDtcbiAgICBSZWN1cGVyYXJSZWZlcmVuY2lhUmVmZXJlbmNpYShyZWZlcmVuY2lhOiBudW1iZXIpOiBDZWx1bGFJZDtcbn1cblxuXG5leHBvcnQgY2xhc3MgVGFidWxlaXJvIGltcGxlbWVudHMgSVRhYnVsZWlybyB7XG5cblxuICAgIHByaXZhdGUgbnVtX2NhbXBvcyA9IDY0O1xuXG4gICAgaXRlbVNlbGVjdERPTTogSFRNTElucHV0RWxlbWVudDtcbiAgICBjYW1wb3M6IFRhYnVsZWlyb0l0ZW1bXSA9IFtdO1xuICAgIG5vbWU6IHN0cmluZztcbiAgICBDZWx1bGFzSWRzOiBDZWx1bGFzSWRzID0gQ2VsdWxhc0lkc1ZhbHVlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2FycmVnYXJDYW1wb3NyKCk7XG4gICAgICAgIHRoaXMuY2FycmVnYXJQZW9lcygpO1xuICAgIH1cblxuICAgIGNhcnJlZ2FyQ2FtcG9zcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bV9jYW1wb3M7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbHVsYURvbSA9IHRoaXMuUmVjdXBlcmFyUmVmZXJlbmNpYVJlZmVyZW5jaWEoaSArIDEpO1xuXG4gICAgICAgICAgICB0aGlzLmNhbXBvc1tpXSA9IG5ldyBUYWJ1bGVpcm9JdGVtKGksIGNlbHVsYURvbS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIFJlbW92ZXJTZWxlY2FvSXRlbnMoKTogdm9pZCB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2l0ZW0tYXRpdmUnKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZWxlbWVudHMuaXRlbShpKTtcbiAgICAgICAgICAgIGxldCBjbGFzc0F0cmlidXRlcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjbGFzc0F0cmlidXRlcy5yZXBsYWNlKCcgaXRlbS1hdGl2ZScsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGl0ZW1TZWxlY3QoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuUmVtb3ZlclNlbGVjYW9JdGVucygpO1xuXG4gICAgICAgIGxldCBjbGFzc0F0cmlidXRlcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICBjbGFzc0F0cmlidXRlcyArPSBgIGl0ZW0tYXRpdmVgO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGNsYXNzQXRyaWJ1dGVzKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NBdHJpYnV0ZXMpO1xuXG4gICAgICAgIGxldCBpZEl0ZW1DZWx1bGEgPSBlbGVtZW50LmRhdGFzZXQuaWRjZWx1bGFcbiAgICAgICAgbGV0IHRhYnVsZWlyb0l0ZW0gPSB0aGlzLlJlY3VwZXJhSXRlbVRhYnVsZWlybyhpZEl0ZW1DZWx1bGEpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNhbXBvc01vdmltZW50byA9IHRhYnVsZWlyb0l0ZW0uR2V0UGVjYSgpLnZlcmlmaWNhckNhbXBvc01vdmltZW50byh0YWJ1bGVpcm9JdGVtLkdldENlbHVsYURvbSgpKTtcblxuICAgICAgICB0aGlzLml0ZW5zTW92aW1lbnRvcyhjYW1wb3NNb3ZpbWVudG8pO1xuXG4gICAgICAgIHRoaXMuaXRlbVNlbGVjdERPTSA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpdGVuc01vdmltZW50b3MoY2VsdWxhSWRzOnN0cmluZ1tdKSA6IHZvaWQge1xuICAgICAgICBjZWx1bGFJZHMuZm9yRWFjaCggY2VsdWxhID0+IHtcbiAgICAgICAgICAgbGV0IGVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZGNlbHVsYT1cXCcke2NlbHVsYX1cXCddYClbMF07XG5cbiAgICAgICAgICAgdGhpcy5TZXRDbGFzcyhlbGVtZW50ICwgJ2l0ZW0tcG9zc2l2ZWwtbW92aW1lbnRvJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgU2V0Q2xhc3MoZWxlbWVudDpIVE1MSW5wdXRFbGVtZW50ICwgY2xhc3NlOnN0cmluZyApIDogdm9pZCB7XG4gICAgICAgIGxldCBjbGFzc0F0cmlidXRlcyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpICsgYCAke2NsYXNzZX1gO1xuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycgLCBjbGFzc0F0cmlidXRlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBSZW1vdmVDbGFzcyhlbGVtZW50OkhUTUxJbnB1dEVsZW1lbnQgLCBjbGFzc2U6c3RyaW5nKSA6IHZvaWQge1xuICAgICAgICBsZXQgY2xhc3NBdHJpYnV0ZXMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcblxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnICwgY2xhc3NBdHJpYnV0ZXMucmVwbGFjZShgICR7Y2xhc3NlfSBgICwgJycpKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgUmVjdXBlcmFJdGVtVGFidWxlaXJvKGNlbHVsYUlkOnN0cmluZykgOiBUYWJ1bGVpcm9JdGVtIHtcbiAgICAgICAgbGV0IGNlbHVsYVJlZmVyZSA9IHRoaXMuUmVjdXBlcmFyUmVmZXJlbmNpYUlkKGNlbHVsYUlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNhbXBvc1tjZWx1bGFSZWZlcmUucmVmZXJlbmNpYSAtIDFdO1xuICAgIFxuICAgIH1cblxuICAgIFJlY3VwZXJhclJlZmVyZW5jaWFJZChjZWx1bGFJZDogc3RyaW5nKTogQ2VsdWxhSWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2VsdWxhc0lkcy5jZWx1bGEuZmlsdGVyKGUgPT4gZS5pZCA9PSBjZWx1bGFJZClbMF07XG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTsOjbyBmb2kgcG9zc2l2ZWwgbG9jYWxpemFyIGEgY2VsdWxhIGVzY29saGlkYWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgUmVjdXBlcmFyUmVmZXJlbmNpYVJlZmVyZW5jaWEocmVmZXJlbmNpYTogbnVtYmVyKTogQ2VsdWxhSWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ2VsdWxhc0lkcy5jZWx1bGEuZmlsdGVyKGUgPT4gZS5yZWZlcmVuY2lhID09IHJlZmVyZW5jaWEpWzBdO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE7Do28gZm9pIHBvc3NpdmVsIGxvY2FsaXphciBhIGNlbHVsYSBlc2NvbGhpZGFgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FycmVnYXJQZW9lcygpOiB2b2lkIHtcbiAgICAgICAgbGV0IGl0ZW06IFRhYnVsZWlyb0l0ZW0gPSB0aGlzLmNhbXBvc1syNl07XG5cbiAgICAgICAgaXRlbS5TZXRQZWNhKG5ldyBQZWFvKCkpO1xuICAgICAgICBpdGVtLlNldERpc3BsYXkoKTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFhQTtBQVVBO0FBUEE7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/TypeScript/_Domain/tabuleiro.ts\n");

/***/ }),

/***/ "./web/TypeScript/_Domain/tabuleiroItem.ts":
/*!*************************************************!*\
  !*** ./web/TypeScript/_Domain/tabuleiroItem.ts ***!
  \*************************************************/
/*! exports provided: TabuleiroItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TabuleiroItem\", function() { return TabuleiroItem; });\nvar TabuleiroItem = /** @class */ (function () {\r\n    function TabuleiroItem(celulaId, celulaDom) {\r\n        this.celulaId = celulaId;\r\n        this.celulaDom = celulaDom;\r\n        this.isEmpyt = true;\r\n    }\r\n    TabuleiroItem.prototype.IsEmpyt = function () {\r\n        return this.isEmpyt;\r\n    };\r\n    TabuleiroItem.prototype.GetCelulaDom = function () {\r\n        return this.celulaDom;\r\n    };\r\n    TabuleiroItem.prototype.SetPeca = function (peca) {\r\n        this.item = peca;\r\n        this.isEmpyt = false;\r\n    };\r\n    TabuleiroItem.prototype.GetPeca = function () {\r\n        return this.item;\r\n    };\r\n    TabuleiroItem.prototype.RemovePeca = function () {\r\n        this.item = null;\r\n        this.isEmpyt = true;\r\n    };\r\n    TabuleiroItem.prototype.movimentoPeca = function () {\r\n    };\r\n    TabuleiroItem.prototype.SetDisplay = function () {\r\n        var element = document.querySelectorAll(\"[data-idcelula='\" + this.celulaDom + \"']\")[0];\r\n        var pElement = element.children[0];\r\n        pElement.innerHTML = this.item.image;\r\n        console.log(pElement);\r\n    };\r\n    return TabuleiroItem;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9fRG9tYWluL3RhYnVsZWlyb0l0ZW0udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvVHlwZVNjcmlwdC9fRG9tYWluL3RhYnVsZWlyb0l0ZW0udHM/Nzc4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZWNhQmFzZSB9IGZyb20gXCIuLi9fUGVjYXMvUGVjYUJhc2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhYnVsZWlyb0l0ZW0ge1xyXG4gICAgaXNBbGlhZG86Ym9vbGVhbjtcclxuXHJcbiAgICBTZXRQZWNhKHBlY2E6UGVjYUJhc2UpOnZvaWQ7XHJcbiAgICBHZXRQZWNhKCkgOiBQZWNhQmFzZTtcclxuICAgIFJlbW92ZVBlY2EoKTogdm9pZDtcclxuICAgIG1vdmltZW50b1BlY2EoKSA6dm9pZDtcclxuICAgIElzRW1weXQoKSA6IGJvb2xlYW47XHJcbiAgICBTZXREaXNwbGF5KCkgOiB2b2lkO1xyXG4gICAgR2V0Q2VsdWxhRG9tKCk6c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFidWxlaXJvSXRlbSBpbXBsZW1lbnRzIElUYWJ1bGVpcm9JdGVtIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBpdGVtOlBlY2FCYXNlO1xyXG4gICAgcHJpdmF0ZSBpc0VtcHl0OmJvb2xlYW47XHJcbiAgICBwcml2YXRlIGNlbHVsYURvbTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNlbHVsYUlkOiBudW1iZXI7XHJcblxyXG4gICAgaXNBbGlhZG86Ym9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjZWx1bGFJZDpudW1iZXIgLCBjZWx1bGFEb206c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2VsdWxhSWQgPSBjZWx1bGFJZDtcclxuICAgICAgICB0aGlzLmNlbHVsYURvbSA9IGNlbHVsYURvbTtcclxuICAgICAgICB0aGlzLmlzRW1weXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIElzRW1weXQoKSA6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzRW1weXQ7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2VsdWxhRG9tKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNlbHVsYURvbTtcclxuICAgIH1cclxuXHJcbiAgICBTZXRQZWNhKHBlY2E6UGVjYUJhc2UpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gcGVjYTtcclxuICAgICAgICB0aGlzLmlzRW1weXQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRQZWNhKCk6IFBlY2FCYXNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIFJlbW92ZVBlY2EoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pdGVtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlzRW1weXQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmltZW50b1BlY2EoKSA6dm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFNldERpc3BsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS1pZGNlbHVsYT1cXCcke3RoaXMuY2VsdWxhRG9tfVxcJ11gKVswXTtcclxuXHJcbiAgICAgICAgdmFyIHBFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZWxlbWVudC5jaGlsZHJlblswXTtcclxuICAgICAgICBcclxuICAgICAgICBwRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLml0ZW0uaW1hZ2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2cocEVsZW1lbnQpO1xyXG4gICAgfVxyXG59Il0sIm1hcHBpbmdzIjoiQUFjQTtBQUFBO0FBQUE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./web/TypeScript/_Domain/tabuleiroItem.ts\n");

/***/ }),

/***/ "./web/TypeScript/_ObjectValue/celulasTabuleiro.ts":
/*!*********************************************************!*\
  !*** ./web/TypeScript/_ObjectValue/celulasTabuleiro.ts ***!
  \*********************************************************/
/*! exports provided: CelulasIds, CelulasIdsValue, letras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CelulasIds\", function() { return CelulasIds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CelulasIdsValue\", function() { return CelulasIdsValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"letras\", function() { return letras; });\nvar CelulasIds = /** @class */ (function () {\r\n    function CelulasIds() {\r\n    }\r\n    return CelulasIds;\r\n}());\r\n\r\nvar letras = [\"A\", \"B\", \"C\", \"D\", \"E\", \"F\", \"G\", \"H\"];\r\nvar numColumns = letras.length;\r\nvar CelulasIdsValue = new CelulasIds();\r\nCelulasIdsValue.celula = [];\r\nvar contadorCelula = 1;\r\nfor (var row = 1; row <= letras.length; row++)\r\n    for (var col = 1; col <= numColumns; col++) {\r\n        CelulasIdsValue.celula.push({ id: \"\" + letras[row - 1] + col, referencia: contadorCelula });\r\n        contadorCelula++;\r\n    }\r\nconsole.log(CelulasIdsValue);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9fT2JqZWN0VmFsdWUvY2VsdWxhc1RhYnVsZWlyby50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYi9UeXBlU2NyaXB0L19PYmplY3RWYWx1ZS9jZWx1bGFzVGFidWxlaXJvLnRzP2JmNWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDZWx1bGFJZCB7XHJcbiAgICBpZDpzdHJpbmc7XHJcbiAgICByZWZlcmVuY2lhOm51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENlbHVsYXNJZHMge1xyXG4gICAgY2VsdWxhOkNlbHVsYUlkW107XHJcbn0gXHJcblxyXG5jb25zdCBsZXRyYXMgPSBbIFwiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiLCBcIkVcIiwgXCJGXCIsIFwiR1wiLCBcIkhcIiBdO1xyXG5jb25zdCBudW1Db2x1bW5zID0gbGV0cmFzLmxlbmd0aDtcclxuXHJcbnZhciBDZWx1bGFzSWRzVmFsdWU6Q2VsdWxhc0lkcyA9IG5ldyBDZWx1bGFzSWRzKCk7XHJcblxyXG5cclxuQ2VsdWxhc0lkc1ZhbHVlLmNlbHVsYSA9IFtdO1xyXG5sZXQgY29udGFkb3JDZWx1bGEgPSAxO1xyXG5cclxuZm9yKGxldCByb3cgPSAxIDsgcm93IDw9IGxldHJhcy5sZW5ndGggOyByb3crKylcclxuICAgIGZvcihsZXQgY29sID0gMTsgY29sIDw9IG51bUNvbHVtbnMgOyBjb2wrKyl7XHJcblxyXG4gICAgICAgIENlbHVsYXNJZHNWYWx1ZS5jZWx1bGEucHVzaCh7IGlkOiBgJHtsZXRyYXNbcm93IC0gMSBdfSR7Y29sfWAgLCByZWZlcmVuY2lhIDogY29udGFkb3JDZWx1bGEgfSk7XHJcbiAgICAgICAgY29udGFkb3JDZWx1bGErKztcclxuICAgIH1cclxuXHJcbmNvbnNvbGUubG9nKENlbHVsYXNJZHNWYWx1ZSk7XHJcblxyXG5cclxuZXhwb3J0IHsgQ2VsdWxhc0lkc1ZhbHVlICwgbGV0cmFzIH0iXSwibWFwcGluZ3MiOiJBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/TypeScript/_ObjectValue/celulasTabuleiro.ts\n");

/***/ }),

/***/ "./web/TypeScript/_ObjectValue/imagePecas.enum.ts":
/*!********************************************************!*\
  !*** ./web/TypeScript/_ObjectValue/imagePecas.enum.ts ***!
  \********************************************************/
/*! exports provided: eImagePecas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eImagePecas\", function() { return eImagePecas; });\nvar eImagePecas;\r\n(function (eImagePecas) {\r\n    eImagePecas[\"PEAO\"] = \"&#9823;\";\r\n})(eImagePecas || (eImagePecas = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9fT2JqZWN0VmFsdWUvaW1hZ2VQZWNhcy5lbnVtLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd2ViL1R5cGVTY3JpcHQvX09iamVjdFZhbHVlL2ltYWdlUGVjYXMuZW51bS50cz83M2ExIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGVudW0gZUltYWdlUGVjYXMge1xyXG4gICAgUEVBTyA9IFwiJiM5ODIzO1wiLFxyXG59Il0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/TypeScript/_ObjectValue/imagePecas.enum.ts\n");

/***/ }),

/***/ "./web/TypeScript/_Pecas/Peao.ts":
/*!***************************************!*\
  !*** ./web/TypeScript/_Pecas/Peao.ts ***!
  \***************************************/
/*! exports provided: Peao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Peao\", function() { return Peao; });\n/* harmony import */ var _PecaBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PecaBase */ \"./web/TypeScript/_Pecas/PecaBase.ts\");\n/* harmony import */ var _ObjectValue_imagePecas_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_ObjectValue/imagePecas.enum */ \"./web/TypeScript/_ObjectValue/imagePecas.enum.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar Peao = /** @class */ (function (_super) {\r\n    __extends(Peao, _super);\r\n    function Peao() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.formulasMovimentoEspecial = [\r\n            \"+2Y\"\r\n        ];\r\n        _this.formulasMovimento = [\r\n            \"+2Y\"\r\n        ];\r\n        _this.image = _ObjectValue_imagePecas_enum__WEBPACK_IMPORTED_MODULE_1__[\"eImagePecas\"].PEAO;\r\n        return _this;\r\n    }\r\n    Peao.prototype.movimento = function () {\r\n        throw new Error(\"Method not implemented.\");\r\n    };\r\n    Peao.prototype.IsPossibilidadeCaptura = function () {\r\n        throw new Error(\"Method not implemented.\");\r\n    };\r\n    return Peao;\r\n}(_PecaBase__WEBPACK_IMPORTED_MODULE_0__[\"PecaBase\"]));\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9fUGVjYXMvUGVhby50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dlYi9UeXBlU2NyaXB0L19QZWNhcy9QZWFvLnRzPzY4NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVjYUJhc2UgfSBmcm9tIFwiLi9QZWNhQmFzZVwiO1xyXG5pbXBvcnQgeyBlSW1hZ2VQZWNhcyB9IGZyb20gXCIuLi9fT2JqZWN0VmFsdWUvaW1hZ2VQZWNhcy5lbnVtXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBlYW8gZXh0ZW5kcyBQZWNhQmFzZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGZvcm11bGFzTW92aW1lbnRvRXNwZWNpYWw6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwiKzJZXCJcclxuICAgIF07XHJcbiAgICBwcm90ZWN0ZWQgZm9ybXVsYXNNb3ZpbWVudG9DYXB0dXJhOiBzdHJpbmdbXTtcclxuICAgIHByb3RlY3RlZCBmb3JtdWxhc01vdmltZW50bzogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCIrMllcIlxyXG4gICAgXTtcclxuXHJcbiAgICBpbWFnZTplSW1hZ2VQZWNhcyA9IGVJbWFnZVBlY2FzLlBFQU87ICAgIFxyXG4gICAgXHJcblxyXG4gICAgbW92aW1lbnRvKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgSXNQb3NzaWJpbGlkYWRlQ2FwdHVyYSgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVdBO0FBUkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/TypeScript/_Pecas/Peao.ts\n");

/***/ }),

/***/ "./web/TypeScript/_Pecas/PecaBase.ts":
/*!*******************************************!*\
  !*** ./web/TypeScript/_Pecas/PecaBase.ts ***!
  \*******************************************/
/*! exports provided: PecaBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PecaBase\", function() { return PecaBase; });\n/* harmony import */ var _ObjectValue_celulasTabuleiro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_ObjectValue/celulasTabuleiro */ \"./web/TypeScript/_ObjectValue/celulasTabuleiro.ts\");\n\r\nvar PecaBase = /** @class */ (function () {\r\n    function PecaBase() {\r\n    }\r\n    PecaBase.prototype.verificarCamposMovimento = function (celulaId) {\r\n        var _this = this;\r\n        this.pilhaMovimento = this.formulasMovimento;\r\n        var response = [];\r\n        this.pilhaMovimento.forEach(function (agrMovimento) {\r\n            var yTop = _this.movimentoEixoYTop(agrMovimento, celulaId);\r\n            //let yBottom:string[];\r\n            //let xLeft:string[];\r\n            //let xRight:string[];\r\n            //let yxTopLeft:string[];\r\n            //let yxbottomLeft:string[];\r\n            //let yxTopRight:string[];\r\n            //let yxbottomRight:string[];\r\n            response.push.apply(response, yTop);\r\n        });\r\n        return response;\r\n    };\r\n    /**\r\n     * Verificar campos disponiveis no eixo Y TOP\r\n     * @param expressaoMovimento\r\n     * @param celulaId\r\n     */\r\n    PecaBase.prototype.movimentoEixoYTop = function (expressaoMovimento, celulaId) {\r\n        var oper = expressaoMovimento[0];\r\n        var mov = expressaoMovimento[1];\r\n        var Eixo = expressaoMovimento[2];\r\n        var response = [];\r\n        if (oper == \"+\" && Eixo == \"Y\") {\r\n            var row = celulaId[0];\r\n            var col = parseInt(mov);\r\n            var indexofRow = _ObjectValue_celulasTabuleiro__WEBPACK_IMPORTED_MODULE_0__[\"letras\"].indexOf(row);\r\n            var novoEixoY = (indexofRow - col) > 0 ? (indexofRow - col) : 0;\r\n            for (var i = indexofRow; indexofRow > novoEixoY; indexofRow--) {\r\n                response.push(\"\" + _ObjectValue_celulasTabuleiro__WEBPACK_IMPORTED_MODULE_0__[\"letras\"][indexofRow - 1] + celulaId[1]);\r\n            }\r\n        }\r\n        return response;\r\n    };\r\n    return PecaBase;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9fUGVjYXMvUGVjYUJhc2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIvVHlwZVNjcmlwdC9fUGVjYXMvUGVjYUJhc2UudHM/N2Y1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlSW1hZ2VQZWNhcyB9IGZyb20gXCIuLi9fT2JqZWN0VmFsdWUvaW1hZ2VQZWNhcy5lbnVtXCI7XHJcbmltcG9ydCB7IGxldHJhcyB9IGZyb20gXCIuLi9fT2JqZWN0VmFsdWUvY2VsdWxhc1RhYnVsZWlyb1wiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZWNhQmFzZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBwaWxoYU1vdmltZW50bzpzdHJpbmdbXTtcclxuXHJcbiAgICBub21lOnN0cmluZztcclxuXHJcbiAgICBhYnN0cmFjdCBpbWFnZTplSW1hZ2VQZWNhcztcclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9ybXVsYXNNb3ZpbWVudG86c3RyaW5nW107XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZm9ybXVsYXNNb3ZpbWVudG9Fc3BlY2lhbDpzdHJpbmdbXTtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBmb3JtdWxhc01vdmltZW50b0NhcHR1cmE6c3RyaW5nW107XHJcblxyXG4gICAgYWJzdHJhY3QgbW92aW1lbnRvKCkgOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgSXNQb3NzaWJpbGlkYWRlQ2FwdHVyYSgpIDogbnVtYmVyW107XHJcblxyXG4gICAgdmVyaWZpY2FyQ2FtcG9zTW92aW1lbnRvKGNlbHVsYUlkOnN0cmluZykgOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgdGhpcy5waWxoYU1vdmltZW50byA9IHRoaXMuZm9ybXVsYXNNb3ZpbWVudG87XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZTpzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucGlsaGFNb3ZpbWVudG8uZm9yRWFjaCggYWdyTW92aW1lbnRvID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCB5VG9wOnN0cmluZ1tdID0gdGhpcy5tb3ZpbWVudG9FaXhvWVRvcChhZ3JNb3ZpbWVudG8gLCBjZWx1bGFJZCk7XHJcbiAgICAgICAgICAgIC8vbGV0IHlCb3R0b206c3RyaW5nW107XHJcbiAgICAgICAgICAgIC8vbGV0IHhMZWZ0OnN0cmluZ1tdO1xyXG4gICAgICAgICAgICAvL2xldCB4UmlnaHQ6c3RyaW5nW107XHJcbiAgICAgICAgICAgIC8vbGV0IHl4VG9wTGVmdDpzdHJpbmdbXTtcclxuICAgICAgICAgICAgLy9sZXQgeXhib3R0b21MZWZ0OnN0cmluZ1tdO1xyXG4gICAgICAgICAgICAvL2xldCB5eFRvcFJpZ2h0OnN0cmluZ1tdO1xyXG4gICAgICAgICAgICAvL2xldCB5eGJvdHRvbVJpZ2h0OnN0cmluZ1tdO1xyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2UucHVzaCguLi4geVRvcCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVmVyaWZpY2FyIGNhbXBvcyBkaXNwb25pdmVpcyBubyBlaXhvIFkgVE9QXHJcbiAgICAgKiBAcGFyYW0gZXhwcmVzc2FvTW92aW1lbnRvIFxyXG4gICAgICogQHBhcmFtIGNlbHVsYUlkIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbW92aW1lbnRvRWl4b1lUb3AoZXhwcmVzc2FvTW92aW1lbnRvOiBzdHJpbmcgLCBjZWx1bGFJZDpzdHJpbmcpIDogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBvcGVyOnN0cmluZyA9IGV4cHJlc3Nhb01vdmltZW50b1swXTtcclxuICAgICAgICBsZXQgbW92ID0gZXhwcmVzc2FvTW92aW1lbnRvWzFdO1xyXG4gICAgICAgIGxldCBFaXhvOnN0cmluZyA9IGV4cHJlc3Nhb01vdmltZW50b1syXTtcclxuICAgICAgICBsZXQgcmVzcG9uc2U6c3RyaW5nW10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBpZihvcGVyID09IFwiK1wiICYmIEVpeG8gPT0gXCJZXCIpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJvdyA9IGNlbHVsYUlkWzBdO1xyXG4gICAgICAgICAgICBsZXQgY29sID0gcGFyc2VJbnQobW92KTtcclxuICAgICAgICAgICAgbGV0IGluZGV4b2ZSb3cgPSBsZXRyYXMuaW5kZXhPZihyb3cpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBub3ZvRWl4b1kgPSAoaW5kZXhvZlJvdyAtIGNvbCkgPiAwID8gKGluZGV4b2ZSb3cgLSBjb2wpIDogMDtcclxuICAgIFxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBpbmRleG9mUm93IDsgaW5kZXhvZlJvdyA+IG5vdm9FaXhvWSA7IGluZGV4b2ZSb3ctLSApIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnB1c2goYCR7bGV0cmFzW2luZGV4b2ZSb3cgLSAxXX0ke2NlbHVsYUlkWzFdfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUErREE7QUFoREE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./web/TypeScript/_Pecas/PecaBase.ts\n");

/***/ }),

/***/ "./web/TypeScript/main.js":
/*!********************************!*\
  !*** ./web/TypeScript/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./program */ \"./web/TypeScript/program.ts\");\n\n\n\nglobalThis.AppXadrez = _program__WEBPACK_IMPORTED_MODULE_0__[\"AppXadrez\"];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd2ViL1R5cGVTY3JpcHQvbWFpbi5qcz8yYTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFhhZHJleiAgfSBmcm9tICcuL3Byb2dyYW0nO1xuXG5cbmdsb2JhbFRoaXMuQXBwWGFkcmV6ID0gQXBwWGFkcmV6OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./web/TypeScript/main.js\n");

/***/ }),

/***/ "./web/TypeScript/program.ts":
/*!***********************************!*\
  !*** ./web/TypeScript/program.ts ***!
  \***********************************/
/*! exports provided: AppXadrez */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppXadrez\", function() { return AppXadrez; });\n/* harmony import */ var _Domain_tabuleiro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Domain/tabuleiro */ \"./web/TypeScript/_Domain/tabuleiro.ts\");\n\r\nvar _AppXadrez = /** @class */ (function () {\r\n    function _AppXadrez() {\r\n        this.tabuleiro = new _Domain_tabuleiro__WEBPACK_IMPORTED_MODULE_0__[\"Tabuleiro\"]();\r\n    }\r\n    return _AppXadrez;\r\n}());\r\nvar AppXadrez = new _AppXadrez();\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93ZWIvVHlwZVNjcmlwdC9wcm9ncmFtLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vd2ViL1R5cGVTY3JpcHQvcHJvZ3JhbS50cz80MzZiIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBUYWJ1bGVpcm8gLCBJVGFidWxlaXJvfSBmcm9tICcuL19Eb21haW4vdGFidWxlaXJvJztcclxuXHJcbmNsYXNzIF9BcHBYYWRyZXoge1xyXG4gICAgdGFidWxlaXJvOklUYWJ1bGVpcm87XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy50YWJ1bGVpcm8gPSBuZXcgVGFidWxlaXJvKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG52YXIgQXBwWGFkcmV6ID0gbmV3IF9BcHBYYWRyZXooKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBBcHBYYWRyZXpcclxufSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./web/TypeScript/program.ts\n");

/***/ })

/******/ });