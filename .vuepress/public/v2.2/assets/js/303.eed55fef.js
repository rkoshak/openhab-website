(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{604:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("AddonLogo"),a("p",[t._v("The "),a("a",{attrs:{href:"http://garadget.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Garadget"),a("OutboundLink")],1),t._v(' is cloud-based device that "futurizes" your existing garage door opener, letting you open and close your garage door from anywhere, including via openHAB with this binding.  Remote access is made possible with the '),a("a",{attrs:{href:"https://www.particle.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("particle.io"),a("OutboundLink")],1),t._v(" REST API.")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("The syntax for the Garadget binding configuration string is explained below.")]),t._m(6),t._m(7),t._m(8),t._m(9),a("blockquote",[a("p",[a("em",[t._v("Where can I find my device identifier?")]),t._v("\nA device identifier is a long decimal number.  One way to find the number is to login to "),a("a",{attrs:{href:"http://garag.io/my/",target:"_blank",rel:"noopener noreferrer"}},[t._v("garag.io"),a("OutboundLink")],1),t._v(" and read the URL you were taken to in the browser's address bar:\n"),a("a",{attrs:{href:"http://garag.io/my/settings.php?id=270041234567343432313031",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://garag.io/my/settings.php?id=270041234567343432313031"),a("OutboundLink")],1),t._v("\nThe final component of the URL is your device identifier.")])]),t._m(10),a("p",[t._v("Here are some examples of valid binding configuration strings, as you would define in your .items file.  Change the device identifiers below to match your Garadget(s).")]),t._m(11),a("DocPreviousVersions"),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"garadget-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#garadget-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Garadget Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://watou.github.io/images/garadget-1.png",alt:"garadget"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/garadget.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),a("th",[t._v("Default")]),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),a("th",[t._v("Description")])])]),a("tbody",[a("tr",[a("td",[t._v("refresh")]),a("td",[t._v("180000")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("refresh interval (defaults to three minutes)")])]),a("tr",[a("td",[t._v("username")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("username for accessing your account")])]),a("tr",[a("td",[t._v("password")]),a("td"),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),a("td",[t._v("password for accessing your account. it is your responsbility to ensure that no one can access your username or password")])]),a("tr",[a("td",[t._v("granularity")]),a("td",[t._v("5000")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("rate at which to check if poll is to run, in milliseconds")])]),a("tr",[a("td",[t._v("timeout")]),a("td",[t._v("5000")]),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),a("td",[t._v("time in milliseonds to allow an API request to complete")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Garadget bindings start with a "),a("code",[t._v("<")]),t._v(" or "),a("code",[t._v(">")]),t._v(", to indicate if the item receives values from the API (in binding) or sends values to the API (out binding), respectively.  A single "),a("code",[t._v("garadget=")]),t._v(" binding string can contain multiple in and out bindings separated by commas, so that a single openHAB item can be used to send commands to your Garadget device(s) as well as receive state updates.  The Garadget binding suppresses auto-updates of items that are sent commands, so that the actual state reported back from Garadget is used.  See the "),a("code",[t._v("doorState")]),t._v(" example item below.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("The first character ("),a("code",[t._v("<")]),t._v(" or "),a("code",[t._v(">")]),t._v(") is then followed by a section between square brackets ("),a("code",[t._v("[")]),t._v(" and "),a("code",[t._v("]")]),t._v(" characters):")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("[<device>#<property>]\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Where "),s("code",[this._v("<device>")]),this._v(" is a device identifier and "),s("code",[this._v("<property>")]),this._v(" is either a device field or variable (in binding) or function (out binding).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Garadget")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("UI")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("name")]),t._v("               "),a("span",{attrs:{class:"token string"}},[t._v('"Garage Door [%s]"')]),t._v("             "),a("span",{attrs:{class:"token function"}},[t._v(" <rollershutter>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget,UI)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#name]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// A Contact item supports open and closed, but a Garadget doorStatus_status can be: ")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// closed, open, closing, opening, stopped")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// (as documented here: https://github.com/Garadget/firmware#door-states-status)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorStatus_status")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Status [%s]"')]),t._v("                     "),a("span",{attrs:{class:"token function"}},[t._v(" <garagedoor>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget,UI)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorStatus_status]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorStatus_time")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Last Change [%s ago]"')]),t._v("                 "),a("span",{attrs:{class:"token function"}},[t._v(" <clock>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget,UI)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorStatus_time]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v('// Send the doorState item commands like ZERO, HUNDRED, UP, DOWN, ON, OFF, STOP, or "open", "closed" or "stop".')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorState")]),t._v("   "),a("span",{attrs:{class:"token string"}},[t._v('"Control"')]),t._v("                      "),a("span",{attrs:{class:"token function"}},[t._v(" <rollershutter>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget,UI)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('">[270041234567343432313031#setState],<[270041234567343432313031#doorStatus_status]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorStatus_sensor")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Reflection [%d %%]"')]),t._v("                     "),a("span",{attrs:{class:"token function"}},[t._v(" <sun>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget,UI)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorStatus_sensor]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_srt")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Threshold [%d %%]"')]),t._v("                  "),a("span",{attrs:{class:"token function"}},[t._v(" <battery>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget,UI)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_srt]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorStatus_signal")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Signal [%d dB]"')]),t._v("                     "),a("span",{attrs:{class:"token function"}},[t._v(" <battery>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget,UI)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorStatus_signal]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("last_app")]),t._v("           "),a("span",{attrs:{class:"token string"}},[t._v('"Last App [%s]"')]),t._v("                                "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#last_app]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("last_ip_address")]),t._v("    "),a("span",{attrs:{class:"token string"}},[t._v('"Last IP Address [%s]"')]),t._v("                         "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#last_ip_address]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("last_heard")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Last Heard [%1$tm/%1$td %1$tH:%1$tM]"')]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v(" <clock>")]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#last_heard]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("product_id")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Product ID [%d]"')]),t._v("                              "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#product_id]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("connected")]),t._v("          "),a("span",{attrs:{class:"token string"}},[t._v('"Connected [%s]"')]),t._v("                               "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#connected]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorStatus")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Door Status [%s]"')]),t._v("                             "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorStatus]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig")]),t._v("         "),a("span",{attrs:{class:"token string"}},[t._v('"Door Config [%s]"')]),t._v("                             "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_ver")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Version [%.1f]"')]),t._v("                               "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_ver]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_rdt")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Sensor Scan Interval [%d ms]"')]),t._v("                 "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_rdt]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_mtt")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Door Moving Time [%d ms]"')]),t._v("                     "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_mtt]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_rlt")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Button Press Time [%d ms]"')]),t._v("                    "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_rlt]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_rlp")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Delay betw Presses [%d ms]"')]),t._v("                   "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_rlp]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_srr")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Sensor reads [%d]"')]),t._v("                            "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_srr]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_aot")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Open Timeout Alert [%d min]"')]),t._v("                  "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_aot]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_ans")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Night time alert start [%d min from midnight]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_ans]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("doorConfig_ane")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Night time alert end [%d min from midnight]"')]),t._v("  "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#doorConfig_ane]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("netConfig")]),t._v("          "),a("span",{attrs:{class:"token string"}},[t._v('"Net Config [%s]"')]),t._v("                              "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#netConfig]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("netConfig_ip")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"IP Address [%s]"')]),t._v("                              "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#netConfig_ip]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("netConfig_snet")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Subnet [%s]"')]),t._v("                                  "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#netConfig_snet]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("netConfig_gway")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Gateway [%s]"')]),t._v("                                 "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#netConfig_gway]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("netConfig_mac")]),t._v("      "),a("span",{attrs:{class:"token string"}},[t._v('"MAC address [%s]"')]),t._v("                             "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#netConfig_mac]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("netConfig_ssid")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"SSID [%s]"')]),t._v("                                    "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<[270041234567343432313031#netConfig_ssid]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v('// send the setConfig item commands like "ans=1200|ane=420" to set night time alert to 8pm-7am, for example.')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("setConfig")]),t._v("          "),a("span",{attrs:{class:"token string"}},[t._v('"Workshop Garage Door Config [%s]"')]),t._v("             "),a("span",{attrs:{class:"token tag"}},[t._v(" (Garadget)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" garadget"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('">[270041234567343432313031#setConfig],<[270040001747343432313031#doorConfig]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);