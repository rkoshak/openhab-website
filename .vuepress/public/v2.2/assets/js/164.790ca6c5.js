(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{395:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("This binding integrates the possibility to download and interpret Synop messages.")]),t._m(1),n("p",[t._v("The binding has no configuration options itself, all configuration is done at 'Things' level.")]),t._m(2),t._m(3),t._m(4),n("p",[t._v("Besides the Synop Station Number (as "),n("code",[t._v("synopID")]),t._v(" as a "),n("a",{attrs:{href:"http://www.ogimet.com/gsynop_nav.phtml.en",target:"_blank",rel:"noopener noreferrer"}},[t._v("StationID"),n("OutboundLink")],1),t._v(" string), the second configuration parameter is "),n("code",[t._v("refreshInterval")]),t._v(" which defines the refresh interval in minutes.\nSynop message are typically updated every hour.")]),t._m(5),n("p",[t._v("The weather information that is retrieved is available as these channels:")]),t._m(6),t._m(7),t._m(8),t._m(9),n("p",[t._v("Here is an example of thing definition :")]),t._m(10),t._m(11),t._m(12),n("DocPreviousVersions"),n("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"synop-analyzer-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synop-analyzer-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Synop Analyzer Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There is exactly one supported thing, which represents a Synop message. It has the id "),s("code",[this._v("synopanalyzer")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Channel Type ID")]),n("th",[t._v("Item Type")]),n("th",[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[t._v("temperature")]),n("td",[t._v("Number")]),n("td",[t._v("The current temperature in degrees Celsius")])]),n("tr",[n("td",[t._v("pressure")]),n("td",[t._v("Number")]),n("td",[t._v("The current pressure in millibar (mb)")])]),n("tr",[n("td",[t._v("wind-angle")]),n("td",[t._v("Number")]),n("td",[t._v("Wind angle in degrees")])]),n("tr",[n("td",[t._v("wind-direction")]),n("td",[t._v("String")]),n("td",[t._v("Wind direction")])]),n("tr",[n("td",[t._v("wind-speed-ms")]),n("td",[t._v("Number")]),n("td",[t._v("Wind speed in m/s")])]),n("tr",[n("td",[t._v("wind-speed-knots")]),n("td",[t._v("Number")]),n("td",[t._v("Wind speed in knots")])]),n("tr",[n("td",[t._v("wind-speed-beaufort")]),n("td",[t._v("Number")]),n("td",[t._v("Wind speed according to Beaufort scale")])]),n("tr",[n("td",[t._v("overcast")]),n("td",[t._v("String")]),n("td",[t._v("Appreciation of the cloud cover")])]),n("tr",[n("td",[t._v("octa")]),n("td",[t._v("Number")]),n("td",[t._v("Part of the sky covered by clouds (in 8th)")])]),n("tr",[n("td",[t._v("attenuation-factor*")]),n("td",[t._v("Number")]),n("td",[t._v("Cloud layer attenuation factor")])]),n("tr",[n("td",[t._v("time-utc")]),n("td",[t._v("DateTime")]),n("td",[t._v("Observation time of the Synop message")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("”cloud attenuation factor” (Kc) as defined by Kasten and Czeplak (1980)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#things","aria-hidden":"true"}},[this._v("#")]),this._v(" Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('synopanalyzer:synopanalyzer:orly [ stationId="07149"]\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"items"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Synop_Temperature")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),n("span",{attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"synopanalyzer:synopanalyzer:trappes:temperature"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Synop_Pressure")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Pressure [%.1f mb]"')]),n("span",{attrs:{class:"token function"}},[t._v(" <pressure>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"synopanalyzer:synopanalyzer:trappes:pressure"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Synop_Wind_Angle")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Wind Angle [%d°]"')]),n("span",{attrs:{class:"token function"}},[t._v(" <wind>")]),t._v("     "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"synopanalyzer:synopanalyzer:trappes:wind-angle"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Synop_Wind_Direction")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Direction [%s]"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"synopanalyzer:synopanalyzer:trappes:wind-direction"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Synop_Wind_Speed")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Wind Speed [%.2f m/s]"')]),n("span",{attrs:{class:"token function"}},[t._v(" <wind>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"synopanalyzer:synopanalyzer:trappes:wind-speed-ms"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Synop_Octa")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Octa [%d]/8"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"synopanalyzer:synopanalyzer:trappes:octa"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Synop_time")]),t._v("  "),n("span",{attrs:{class:"token string"}},[t._v('"Observation Time [%1$ta %1$tR]"')]),t._v("       "),n("span",{attrs:{class:"token function"}},[t._v(" <clock>")]),t._v("   "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"synopanalyzer:synopanalyzer:trappes:time-utc"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);