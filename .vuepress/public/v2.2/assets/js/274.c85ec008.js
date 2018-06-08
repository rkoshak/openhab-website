(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{560:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("The jointSPACE binding lets you control your Philips TV that is compatible with the "),e("a",{attrs:{href:"http://jointspace.sourceforge.net/projectdata/documentation/jasonApi/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("jointSPACE JSON API"),e("OutboundLink")],1),t._v(" over Ethernet.")]),e("p",[t._v("It allows you to:")]),t._m(1),t._m(2),e("ol",[e("li",[t._v("The TV has to be in the network and turned on.")]),e("li",[t._v("The TV has to be compatible with the API. This should be possible for all models since 2011, but a list of models and firmwares can be found "),e("a",{attrs:{href:"http://jointspace.sourceforge.net/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),e("li",[t._v('If the TV is compatible and the newest firmware is installed, the API has to be activated. Therefore, you have to input on the remote "5646877223" (which spells jointspace on the digits) while watching TV. A popup should appear saying that the activation was successful.')]),t._m(3)]),t._m(4),t._m(5),t._m(6),t._m(7),e("p",[t._v("All binding configurations have the structure")]),t._m(8),t._m(9),t._m(10),e("p",[t._v("Every time the binding receives such a command for that item, it executes (or forwards) the command to the TV.")]),t._m(11),t._m(12),t._m(13),t._m(14),e("p",[t._v("A full list of supported keys refer to "),e("a",{attrs:{href:"http://jointspace.sourceforge.net/projectdata/documentation/jasonApi/1/doc/API-Method-input-key-POST.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),e("p",[t._v("Ambilight has three different modes:")]),t._m(21),t._m(22),t._m(23),t._m(24),e("p",[t._v("Please refer to the examples below in order to see how to setup different ambilight pixel combination.")]),t._m(25),e("p",[t._v("The ambilight pixels are grouped in different layers, for example "),e("code",[t._v("left")]),t._v(" for all left pixels. In order to find out which layers are supported goto "),e("code",[t._v("http://<ip-adress>:1925/1/examples/ambilight/ambilight.html")]),t._v(" or refer to "),e("a",{attrs:{href:"http://jointspace.sourceforge.net/projectdata/documentation/jasonApi/1/doc/API-Method-ambilight-cached-POST.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)]),t._m(26),t._m(27),t._m(28),t._m(29),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"jointspace-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jointspace-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" jointSPACE Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Send Button commands")]),s("li",[this._v("Set and Read Volume/Mute")]),s("li",[this._v('Set and Get Colors of Ambilight "Pixels"')]),s("li",[this._v("Set and Read Source")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("To check it if everything works correctly, you can browse to "),s("code",[this._v("http://<ip-of-your-TV>:1925/1/examples/audio/volume.html")]),this._v(". There you should see a page allowing you to change the volume of the TV.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/jointspace.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),e("th",[t._v("Default")]),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("refreshInterval")]),e("td",[t._v("60000")]),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),e("td",[t._v("refresh interval, in milliseconds, of the worker thread. Polling interval for Source, Volume, Ambilight Color, ...")])]),e("tr",[e("td",[t._v("ip")]),e("td"),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),e("td",[t._v("IP address of the jointspace enabled device")])]),e("tr",[e("td",[t._v("port")]),e("td",[t._v("1925")]),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),e("td",[t._v("Port of the jointspace API.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('jointspace="<openhab-command>:<jointspace-command>"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("<openhab-command>")]),this._v(" can be for example:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("ON")]),t._v(", "),e("code",[t._v("OFF")]),t._v(" for Switch items")]),e("li",[e("code",[t._v("1,2,3,...")]),t._v(" for Number items")]),e("li",[e("code",[t._v("HSB")]),t._v(" react on HSB type commands")]),e("li",[e("code",[t._v("DEC")]),t._v(" react on all Decimal type commands")]),e("li",[e("code",[t._v("*")]),t._v(" react on all commands")]),e("li",[e("code",[t._v("POLL")]),t._v(" poll the value periodical in the worker thread")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For valid "),s("code",[this._v("<jointspace-command>")]),this._v(" refer to the separate sections and to the samples below.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"remote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote","aria-hidden":"true"}},[this._v("#")]),this._v(" Remote")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In order to send a button of the remote use "),s("code",[this._v("key.X")]),this._v(" where "),s("code",[this._v("X")]),this._v(" can be for example:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("Digit1")])]),s("li",[s("code",[this._v("VolumeUp")])]),s("li",[s("code",[this._v("Standby")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"volume"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#volume","aria-hidden":"true"}},[this._v("#")]),this._v(" Volume")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("To set the volume send a decimal type to a item configured as "),s("code",[this._v("volume")])]),s("li",[this._v("To poll the volume use "),s("code",[this._v("POLL:volume")]),this._v(" and the mute state as "),s("code",[this._v("POLL:volume.mute")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source","aria-hidden":"true"}},[this._v("#")]),this._v(" Source")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("Get the current source as a string item with "),e("code",[t._v("POLL:source")])]),e("li",[t._v("Set the current source with "),e("code",[t._v("source.X")]),t._v(" where X can be "),e("code",[t._v("hdmi1")]),t._v(", "),e("code",[t._v("tv")]),t._v(", ...")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ambilight"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ambilight","aria-hidden":"true"}},[this._v("#")]),this._v(" Ambilight")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"ambilight-mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ambilight-mode","aria-hidden":"true"}},[this._v("#")]),this._v(" Ambilight Mode")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("manual")]),this._v(": Lets you set the ambilight values directly over the API")]),s("li",[s("code",[this._v("internal")]),this._v(": Uses the colors specified from the internal algorithm based on the image shown")]),s("li",[s("code",[this._v("expert")]),this._v(": Uses the manually sets pixels as input for the algorithm. Don't know if this is really of use.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("In order to set the mode use as a jointspace-command "),s("code",[this._v("ambilight.mode.X")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"ambilight-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ambilight-color","aria-hidden":"true"}},[this._v("#")]),this._v(" Ambilight Color")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("In order to set the color, the ambilight mode has to be set to "),s("code",[this._v("manual")]),this._v(" first")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"layer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layer","aria-hidden":"true"}},[this._v("#")]),this._v(" Layer")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("/* Demo items */")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MuteSwitch")]),t._v("\t\t\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Mute"')]),e("span",{attrs:{class:"token function"}},[t._v(" <settings>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ON:key.Mute, OFF:key.Mute, POLL:volume.mute"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Taste1")]),t._v("\t\t\t\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Taste1"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ON:key.Digit1, OFF:key.Digit2"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("VolumeTV")]),t._v(" \t\t\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Volume [%d]"')]),t._v("\t"),e("span",{attrs:{class:"token function"}},[t._v("\t<slider>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"*:volume, POLL:volume"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("ActivateAmbilight")]),t._v("\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Ambilight Manipulation"')]),e("span",{attrs:{class:"token function"}},[t._v(" <settings>")]),t._v(" \t\t "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ON:ambilight.mode.manual, OFF:ambilight.mode.internal"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Ambilight_mode")]),t._v("\t\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Ambilight Mode"')]),t._v("\t   "),e("span",{attrs:{class:"token function"}},[t._v(" <settings>")]),t._v("\t "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"0:ambilight.mode.internal, 1:ambilight.mode.manual, 2:ambilight.mode.expert"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Color")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("AmbilightAll")]),t._v("\t\t\t    "),e("span",{attrs:{class:"token string"}},[t._v('"Ambilight All"')]),t._v("\t\t"),e("span",{attrs:{class:"token function"}},[t._v("\t<colorwheel>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"HSB:ambilight.color"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Color")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("AmbilightLeft")]),t._v("\t\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Ambilight Left"')]),t._v("\t"),e("span",{attrs:{class:"token function"}},[t._v("\t<colorwheel>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"HSB:ambilight[layer1[left]].color"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Color")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("AmbilightRight")]),t._v("\t\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Ambilight Right"')]),t._v("\t"),e("span",{attrs:{class:"token function"}},[t._v("\t<colorwheel>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"HSB:ambilight[layer1[right]].color"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Color")]),t._v("  "),e("span",{attrs:{class:"token class-name"}},[t._v("AmbilightPixelLeft")]),t._v("\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"Ambilight PixelLeft"')]),e("span",{attrs:{class:"token function"}},[t._v("\t<colorwheel>")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"HSB:ambilight[layer1[left[0]]].color, POLL:ambilight[layer1[left[0]]].color"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Standby")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Standby"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"*:key.Standby"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("VolumeUpDown")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"VolumeUpDown"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ON:key.VolumeUp, OFF:key.VolumeDown"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("ChannelStep")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"ChannelUpDown"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"ON:key.ChannelStepUp, OFF:key.ChannelStepDown"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("AmbilightOnOff")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"AmbilightOnOff"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"*:key.AmbilightOnOff"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Source")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Source"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"*:key.Source"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("PlayPause")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"PlayPause"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"*:key.PlayPause"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("CurrentSource")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Source"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"POLL:source"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("SetSource")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Set Source"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("jointspace"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"1:source.tv, 2:source.hdmi1, 3:source.hdmi2, 4:source.hdmi3, 5:source.hdmiside"')]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"known-limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Known Limitations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("The TV has to be on to control it. This is a limitation as the network interface is off for the TV in standby. Thus it is not possible to turn the TV on with this Binding")]),s("li",[this._v("Right now only one device with jointspace capabilities is supported")]),s("li",[this._v("Reading ambilight color values only works for specific pixels, but not for layers")]),s("li",[this._v("There is an ambilight bug in some models (including mine), that setting manual colors doesn't work for the right side")])])}],!1,null,null,null);s.default=n.exports}}]);