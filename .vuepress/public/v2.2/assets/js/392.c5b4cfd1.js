(window.webpackJsonp=window.webpackJsonp||[]).push([[392],{737:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[this._m(0),s("p",[this._v("With the Astro actions, you can calculate sunrise and sunset DataTime values in rules.")]),this._m(1),this._m(2),this._m(3),s("DocPreviousVersions"),s("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"astro-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#astro-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Astro Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Important:")]),this._v(" The action also requires the installation of the corresponding Astro 1.x binding.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rules"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token class-name"}},[t._v("Date")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Astro Action Example"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" current "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDate\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("double")]),t._v(" lat "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxxxx\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("double")]),t._v(" lon "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" xx"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxxxxx\n\n\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"sunRiseStart: "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("getAstroSunriseStart")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lat"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lon"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"sunRiseEnd: "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("getAstroSunriseEnd")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lat"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lon"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"sunSetStart: "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("getAstroSunsetStart")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lat"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lon"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token function"}},[t._v("logInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"sunSetEnd: "')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DateTimeType")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("getAstroSunsetEnd")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lat"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lon"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);s.default=o.exports}}]);