module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=5)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/Page"]},,,function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),c=o(1),i=o(2),u=o.n(i);r.a.initializers.add("zaptech-cookie-consent",function(){Object(c.extend)(u.a.prototype,"init",function(){var e=r.a.forum.attribute("cookie-consent.ccTheme"),t=r.a.forum.attribute("cookie-consent.backgroundColor"),o=r.a.forum.attribute("cookie-consent.consentText"),n=r.a.forum.attribute("cookie-consent.buttonText"),c=r.a.forum.attribute("cookie-consent.buttonBackgroundColor"),i=r.a.forum.attribute("cookie-consent.learnMoreLinkText"),u=r.a.forum.attribute("cookie-consent.learnMoreLinkUrl");$("head").prepend('<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"><\/script><script>window.addEventListener("load", function(){window.cookieconsent.initialise({"palette":{"popup":{"background": "'+t+'"}, "button":{"background": "'+c+'"}}, "theme": "'+e+'", "content":{"message": "'+o+'", "dismiss": "'+n+'", "link": "'+i+'", "href": "'+u+'"}})});<\/script>')})})}]);
//# sourceMappingURL=forum.js.map