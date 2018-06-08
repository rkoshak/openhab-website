(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{467:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("This binding reads values from 1-wire devices connected to an "),e("a",{attrs:{href:"http://www.embeddeddatasystems.com/OW-SERVER-1-Wire-to-Ethernet-Server-Revision-2_p_152.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("OW-SERVER"),e("OutboundLink")],1),t._v(" (both Rev. 1 and 2).")]),e("p",[t._v("It does not write values to these devices.  See "),e("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/wiki/Samples-Binding-Config#how-to-turn-onoff-a-switch-from-ow-server-via-http-binding",target:"_blank",rel:"noopener noreferrer"}},[t._v("this wiki page"),e("OutboundLink")],1),t._v(" for how to send commands to a 1-wire device via OW-SERVER.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),e("p",[t._v("The syntax accepted is:")]),t._m(8),e("p",[t._v("where:")]),t._m(9),t._m(10),e("p",[t._v("Like: "),e("a",{attrs:{href:"http://192.168.1.23/details.xml",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://192.168.1.23/details.xml"),e("OutboundLink")],1)]),t._m(11),t._m(12),e("p",[t._v("items")]),t._m(13),t._m(14),t._m(15),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"owserver-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#owserver-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" OWServer Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/owserver.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),e("th",[t._v("Default")]),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("code",[t._v("<serverId1>")]),t._v(".host")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),e("td",[t._v("the IP address of the first OW-SERVER to control")])]),e("tr",[e("td",[e("code",[t._v("<serverId1>")]),t._v(".user")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[t._v('if you enabled "Require name / password for all pages" in the web interface under '),e("code",[t._v("System Configuration \\| Network")])]),e("td",[t._v("the user name to access the web interface of the first OW-SERVER to control")])]),e("tr",[e("td",[e("code",[t._v("<serverId1>")]),t._v(".password")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[t._v('if you enabled "Require name / password for all pages" in the web interface under '),e("code",[t._v("System Configuration \\| Network")])]),e("td",[t._v("the password to access the web interface of the first OW-SERVER to control")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("where "),s("code",[this._v("<serverId1>")]),this._v(" is a name you choose for this specific OW-SERVER, and must consist only of letters and numbers.  You can repeat the set of properties for different servers.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("ow1.host=192.168.1.23\now1.user=admin\now1.password=eds\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('owserver="<<serverId1>:<ROMId>:<value-name>:<refreshInterval>"\n')])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("the "),e("code",[t._v("<")]),t._v(" in front of "),e("code",[t._v("<serverId1>")]),t._v(" tells the binding to "),e("em",[t._v("read")]),t._v(" the following value.")]),e("li",[e("code",[t._v("<serverId1>")]),t._v(" corresponds to the device which is introduced in the binding configuration. This value must match the value in the binding configuration.")]),e("li",[e("code",[t._v("<ROMId>")]),t._v(" corresponds to the ROM-ID of the OneWire-device you want to query.")]),e("li",[e("code",[t._v("<value-name>")]),t._v(" corresponds to the value you want to query.")]),e("li",[e("code",[t._v("<refreshInterval>")]),t._v(" is the interval in milliseconds to refresh the data.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can find the "),s("code",[this._v("<ROMid>")]),this._v(" and the "),s("code",[this._v("<value-name>")]),this._v(" in the "),s("code",[this._v("details.xml")]),this._v(" from the web interface.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[t._v("[..]\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("owd_EDS0068")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("Description")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Temperature, Humidity, Barometric Pressure and Light Sensor"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Name")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("EDS0068"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Name")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Family")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("7E"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Family")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ROMId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("C200100000XXXXXX"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ROMId")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  [..]\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Temperature")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("Units")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Centigrade"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("31.8750"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Temperature")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Humidity")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("Units")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("PercentRelativeHumidity"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("37.6875"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Humidity")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n[..]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("bath_temp")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v("  "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" owserver"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"<ow1:C200100000XXXXXX:Temperature:60000"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("bath_humidity")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Humidity [%.1f %%]"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" owserver"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"<ow1:C200100000XXXXXX:Humidity:60000"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("It is only possible to read values.")]),s("li",[this._v("The binding does only read values from the "),s("code",[this._v("details.xml")]),this._v(".  That means it is limited to 23 1-wire devices per OW-SERVER.")])])}],!1,null,null,null);s.default=n.exports}}]);