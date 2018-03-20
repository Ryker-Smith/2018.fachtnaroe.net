canvasWebpackJsonp([105],{"1Y62h3eT2s":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({inputHeightSmall:"1.75rem",inputHeightMedium:"2.375rem",inputHeightLarge:"3rem"})},"3ClX7LJPFp":function(e,t,r){"use strict";var n,o,u=r("VERG79fKyH"),i=r("aHQ8IeWt6V"),a=1459707606518,s=6;e.exports=function(e){var t="",r=Math.floor(.001*(Date.now()-a));return r===o?n++:(n=0,o=r),t+=u(i.lookup,s),t+=u(i.lookup,e),n>0&&(t+=u(i.lookup,n)),t+=u(i.lookup,r)}},"4Bs+VgWWjP":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(){var e={};return[].concat(Array.prototype.slice.call(arguments)).forEach(function(t){e=function e(t,r){if(u(r)){var n=[].concat(o(Object.keys(r)),o(Object.getOwnPropertySymbols(r))),a=Object.assign({},t);return n.forEach(function(n){u(t[n])&&u(r[n])?a[n]=e(t[n],r[n]):i(r[n])&&i(t[n])?a[n]=[].concat(o(new Set([].concat(o(t[n]),o(r[n]))))):i(t[n])?a[n]=[].concat(o(new Set([].concat(o(t[n]),[r[n]])))):a[n]=r[n]}),a}return Object.assign({},t)}(e,t)}),e};function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function u(e){return e&&("object"===(void 0===e?"undefined":n(e))||"function"==typeof e)&&!Array.isArray(e)}function i(e){return e&&Array.isArray(e)}},"9HcErlrWg/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setDefaultTheme=void 0,t.getRegistry=d,t.setRegistry=m,t.clearRegistry=function(){m(l())},t.getDefaultThemeKey=h,t.registerTheme=function(e){var t=d(),r=e.key||(0,i.default)();t.themes[r]=e,t.registered.push(r)},t.makeTheme=function(e){var t=e.theme,r=e.a11y;return Object.assign({},t,{use:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.accessible,u=e.overrides;n?((0,o.default)(r,"[themeable] No accessible theme provided for "+t.key+"."),b(r.key,null,!0)):((0,o.default)(t,"Invalid theme."),b(t.key,u,!1))}})},t.registerComponentTheme=function(e,t){var r=d();if("function"!=typeof t)return;r.components[s][e]=t,Object.keys(t).forEach(function(n){r.components.hasOwnProperty(n)||(r.components[n]={}),r.components[n][e]=y(t,n)})},t.generateTheme=function(e,t){var r=d();(0,o.default)(r.registered.length>0,"[themeable] No themes have been registered. Import a theme from @instructure/ui-themes or register a custom theme with registerTheme (see @instructure/ui-themeable/lib/registry.js).");var n=O(e),u={},i=v(e,t);return Object.getOwnPropertySymbols(n).forEach(function(e){u[e]=n[e](i)}),u},t.getTheme=function(e){return p(e,{}).variables||{}},t.generateComponentTheme=function(e,t,r){var n=v(t),u=t||h(),i=O(u)[e],a={};if("function"==typeof i)try{a=i(n)}catch(e){0}var s=p(u,{});return r&&Object.keys(r).length>0&&s.immutable?((0,o.default)(!1,"[themeable] Theme '%s' is immutable. Cannot apply overrides for '%s': %o",u,e.toString(),r),a):Object.assign({},a,r||{})},t.getRegisteredThemes=function(){return d().themes};var n=a(r("Pygke12TKE")),o=a(r("nz+zoxswY4")),u=a(r("4Bs+VgWWjP")),i=a(r("QAxNMv7vw0"));function a(e){return e&&e.__esModule?e:{default:e}}var s="@@themeableDefaultTheme",l=function(){return{defaultThemeKey:null,components:(e={},t=s,r={},t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e),themes:{},registered:[]};var e,t,r},c=l(),f=function(e){var t=!0,r=l();return Object.keys(r).forEach(function(r){e&&void 0!==e[r]||(t=!1)}),(0,o.default)(t,"[themeable] Inavlid theme registry."),e};function d(){return n.default?(window.GLOBAL_THEME_REGISTRY||(window.GLOBAL_THEME_REGISTRY=c),f(window.GLOBAL_THEME_REGISTRY)):c}function m(e){c=e,n.default&&(window.GLOBAL_THEME_REGISTRY=c)}function h(){var e=d(),t=e.defaultThemeKey,r=e.registered;return t||r[0]||s}var b=t.setDefaultTheme=function(e,t,r){var n=d(),u=n.themes[e];return(0,o.default)(u,"[themeable] Could not find theme: '"+e+"' in the registry."),u=Object.assign({},u,{immutable:r}),n.themes[e]=u,n.defaultThemeKey=e,n.overrides=t,u};var p=function(e,t){var r=d().themes[e];return t||(0,o.default)(r,"[themeable] Could not find theme: '"+e+"' in the registry."),r||t},g=function(e,t){var r=p(e,{}),n={};return t&&Object.keys(t).length>0&&r.immutable?((0,o.default)(!1,"[themeable] Theme, '%s', is immutable. Cannot apply overrides: %o",e,t),n=r.variables):n=(0,u.default)(r.variables,t),n},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=d().overrides||{},n=h();return g(n,e?g(e,t):(0,u.default)(r,t))},y=function(e,t){return function(r){var n={};return"function"==typeof e&&(n=e(r)),"function"==typeof e[t]&&(n=Object.assign({},n,e[t](r))),n}};var O=function(e){var t=d(),r=e||h();return Object.assign({},t.components[s],t.components[r])}},"9tMAv4lQI2":function(e,t,r){"use strict";var n=r("aHQ8IeWt6V");e.exports=function(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=n.characters(),r=e.length,o=0;o<r;o++)if(-1===t.indexOf(e[o]))return!1;return!0}},A051HVpetd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("9HcErlrWg/"),o=i(r("VfnPWtOxDI")),u=i(r("Qwg4WMdjCp"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.makeTheme)({theme:o.default,a11y:u.default})},AueD11u85v:function(e,t,r){"use strict";var n,o=r("Gu7Tm2+Aas"),u=(n=o,n&&n.__esModule?n:{default:n});if(!("require"in window)){var i=r("mOY9BNujNR"),a={jquery:function(){return i},i18nObj:function(){return new Promise(function(e){e()}).then(r.bind(null,"36QOWIB4+W"))},underscore:function(){return new Promise(function(e){e()}).then(r.bind(null,"iBw8ZGM6v8"))},"jsx/course_wizard/ListItems":function(){return new Promise(function(e){r.e(20).then(function(t){e(r("bzx8AghjTc"))}.bind(null,r)).catch(r.oe)})}},s=function(e){if(e in a)return a[e]();if(/^(https?:)?\/\//.test(e))return i.getScript(e);throw new Error("Cannot load "+e+", use your own RequireJS or something else to load this script")};window.require=function(e,t){console.warn("`require`-ing internal Canvas modules comes with no warranty, things can change in any release and you are responsible for making sure your custom JavaScript that uses it continues to work."),e.includes("jquery")&&console.error("You don't need to `require(['jquery...`, just use the global `$` variable directly."),Promise.all(e.map(s)).then(function(e){t&&t.apply(void 0,(0,u.default)(e))})}}},FolejTnWvn:function(e,t,r){"use strict";var n=1;e.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(e){n=e}}},GfsekNpohF:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({brand:"#0770A3",electric:"#0770A3",shamrock:"#127A1B",barney:"#B8309E",crimson:"#D01A19",fire:"#C23C0D",licorice:"#2D3B45",oxford:"#394B58",slate:"#556572",ash:"#556572",tiara:"#556572",porcelain:"#FFFFFF",white:"#FFFFFF"})},"I/UqtyMvZw":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({depth1:"0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2), 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)",depth2:"0 0.1875rem 0.375rem rgba(0, 0, 0, 0.1), 0 0.1875rem 0.375rem rgba(0, 0, 0, 0.16)",depth3:"0 0.375rem 0.4375rem rgba(0, 0, 0, 0.1), 0 0.625rem 1.75rem rgba(0, 0, 0, 0.25)"})},Kg7ZcBTIYp:function(e,t,r){"use strict";var n=r("aHQ8IeWt6V"),o=(r("VERG79fKyH"),r("PIIviKoVY7")),u=r("3ClX7LJPFp"),i=r("9tMAv4lQI2"),a=r("sSHNCQMa/t")||0;function s(){return u(a)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return a=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.decode=o,e.exports.isValid=i},"L/Ji3F6A4a":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({topmost:9999,above:1,below:-1,deepest:-9999})},PIIviKoVY7:function(e,t,r){"use strict";var n=r("aHQ8IeWt6V");e.exports=function(e){var t=n.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}},Pygke12TKE:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=!("undefined"==typeof window||!window.document||!window.document.createElement)},QAxNMv7vw0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("Z8esYiOkv1"),u=(n=o,n&&n.__esModule?n:{default:n});t.default=u.default.generate},Qwg4WMdjCp:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("9HcErlrWg/"),o=a(r("o5O6uYWuQQ")),u=a(r("GfsekNpohF")),i=a(r("VfnPWtOxDI"));function a(e){return e&&e.__esModule?e:{default:e}}var s={key:o.default.CANVAS_HIGH_CONTRAST,immutable:!0,description:"This theme meets WCAG 2.0 AA rules for color contrast.",variables:Object.assign({},i.default.variables,{colors:u.default})};(0,n.registerTheme)(s),t.default=(0,n.makeTheme)({theme:s})},T7MAAnqGwx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({brand:"#008EE2",electric:"#008EE2",shamrock:"#00AC18",barney:"#BF32A4",crimson:"#EE0612",fire:"#FC5E13",licorice:"#2D3B45",oxford:"#394B58",slate:"#73818C",ash:"#8B969E",tiara:"#C7CDD1",porcelain:"#F5F5F5",white:"#FFFFFF"})},VERG79fKyH:function(e,t,r){"use strict";var n=r("Zkn8s5hxTg");e.exports=function(e,t){for(var r,o=0,u="";!r;)u+=e(t>>4*o&15|n()),r=t<Math.pow(16,o+1),o++;return u}},VfnPWtOxDI:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.brandVariables=void 0;var n=r("9HcErlrWg/"),o=h(r("o5O6uYWuQQ")),u=h(r("aqnp7+ruGG")),i=h(r("T7MAAnqGwx")),a=h(r("omxlES1/1+")),s=h(r("iYPl8rblUq")),l=h(r("1Y62h3eT2s")),c=h(r("eoBv0CU+Ie")),f=h(r("hog7jFXZ8p")),d=h(r("I/UqtyMvZw")),m=h(r("L/Ji3F6A4a"));function h(e){return e&&e.__esModule?e:{default:e}}var b=o.default.CANVAS,p={borders:u.default,colors:i.default,typography:a.default,spacing:s.default,forms:l.default,media:c.default,breakpoints:f.default,shadows:d.default,stacking:m.default},g=t.brandVariables={"ic-brand-primary":i.default.brand,"ic-brand-font-color-dark":i.default.licorice,"ic-link-color":i.default.brand,"ic-brand-button--primary-bgd":i.default.brand,"ic-brand-button--primary-text":i.default.white,"ic-brand-button--secondary-bgd":i.default.licorice,"ic-brand-button--secondary-text":i.default.white},v={key:b,variables:p};(0,n.registerTheme)({key:b,variables:Object.assign({},p,g)}),t.default=(0,n.makeTheme)({theme:v})},Z8esYiOkv1:function(e,t,r){"use strict";e.exports=r("Kg7ZcBTIYp")},Zkn8s5hxTg:function(e,t,r){"use strict";var n="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=function(){if(!n||!n.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return n.getRandomValues(e),48&e[0]}},aHQ8IeWt6V:function(e,t,r){"use strict";var n,o,u,i=r("FolejTnWvn"),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){u=!1}function l(e){if(e){if(e!==n){if(e.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,s()}}else n!==a&&(n=a,s())}function c(){return u||(u=function(){n||l(a);for(var e,t=n.split(""),r=[],o=i.nextValue();t.length>0;)o=i.nextValue(),e=Math.floor(o*t.length),r.push(t.splice(e,1)[0]);return r.join("")}())}e.exports={characters:function(e){return l(e),n},seed:function(e){i.seed(e),o!==e&&(s(),o=e)},lookup:function(e){return c()[e]},shuffled:c}},"aqnp7+ruGG":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({radiusSmall:"0.125rem",radiusMedium:"0.25rem",radiusLarge:"0.5rem",widthSmall:"0.0625rem",widthMedium:"0.125rem",widthLarge:"0.25rem",style:"solid"})},elVCKX8GNs:function(e,t,r){"use strict";var n=i(r("A051HVpetd")),o=i(r("PJh52PO9+b")),u=i(r("1IKDY5pCFs"));r("AueD11u85v");function i(e){return e&&e.__esModule?e:{default:e}}if((0,o.default)().locale(ENV.MOMENT_LOCALE),"undefined"!=typeof ENV&&(ENV.TIMEZONE&&u.default.changeZone(ENV.TIMEZONE),ENV.CONTEXT_TIMEZONE&&u.default.preload(ENV.CONTEXT_TIMEZONE),ENV.BIGEASY_LOCALE&&u.default.changeLocale(ENV.BIGEASY_LOCALE,ENV.MOMENT_LOCALE)),ENV.use_high_contrast)n.default.use({accessible:!0});else{var a=window.CANVAS_ACTIVE_BRAND_VARIABLES||{};n.default.use({overrides:a})}},"eoBv0CU+Ie":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("hog7jFXZ8p"),u=(n=o,n&&n.__esModule?n:{default:n});t.default=Object.freeze({mediumMin:"min-width: "+u.default.medium,largeMin:"min-width: "+u.default.large,xLargeMin:"min-width: "+u.default.xLarge})},hog7jFXZ8p:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=8,o=16,u=30,i=48,a=62,s=75;t.default=Object.freeze({xxSmall:n+"em",xSmall:o+"em",small:u+"em",medium:i+"em",large:a+"em",xLarge:s+"em",maxWidth:a-.0625+"em"})},iYPl8rblUq:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({xxxSmall:"0.125rem",xxSmall:"0.375rem",xSmall:"0.5rem",small:"0.75rem",medium:"1.5rem",large:"2.25rem",xLarge:"3rem",xxLarge:"3.75rem"})},"nz+zoxswY4":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){{}}},o5O6uYWuQQ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={CANVAS:"canvas",CANVAS_A11Y:"canvas-a11y",CANVAS_HIGH_CONTRAST:"canvas-high-contrast"}},"omxlES1/1+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=Object.freeze({fontFamily:'LatoWeb, Lato, "Helvetica Neue", Helvetica, Arial, sans-serif',fontFamilyMonospace:"monospace",fontSizeXSmall:"0.75rem",fontSizeSmall:"0.875rem",fontSizeMedium:"1rem",fontSizeLarge:"1.375rem",fontSizeXLarge:"1.75rem",fontSizeXXLarge:"2.25rem",fontWeightLight:300,fontWeightNormal:400,fontWeightBold:700,lineHeight:1.4,lineHeightFit:1.125,lineHeightCondensed:1.25,lineHeightDouble:2,letterSpacingNormal:0,letterSpacingCondensed:"-0.0625rem",letterSpacingExpanded:"0.0625rem"})},"sSHNCQMa/t":function(e,t,r){"use strict";e.exports=0}},["elVCKX8GNs"]);
//# sourceMappingURL=appBootstrap.bundle-c0d4e1fc6b.js.105-c0d4e1fc6b.sourcemap