(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{545:function(e,t,r){"use strict";r.r(t);var s=r(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),r("p",[e._v("This binding can send some commands typically used by LG LCD TVs (and some used by projectors).")]),r("p",[e._v("See below for a list of supported channels.\nThe binding does not support querying the current state from the TV, as this is not possible using the serial protocol.")]),e._m(1),r("p",[e._v("Supports one TV or projector per thing, also corresponding to a unique serial port.\nThe protocol supports daisy-chaining of serial devices, but this seems unlikely for home\napplications, and this binding sends to the broadcast address.")]),r("p",[e._v('The LG serial command set [1] appears to be similar on many models, but not all commands will work on all models.\nSome TVs may have an alternative port type instead of a standard DB9 connector, and may thus require an adapter.\nThe serial port may be marked "Service only".')]),r("p",[e._v("Tested and developed for LG 55UF772V (with "),r("a",{attrs:{href:"http://www.ebay.com/itm/DB9-9-Pin-Female-To-TRS-3-5mm-Male-Stereo-Serial-Data-Converter-Cable-1-8M-6Ft-/291541959764?",target:"_blank",rel:"noopener noreferrer"}},[e._v("this cable adapter"),r("OutboundLink")],1),e._v(").")]),e._m(2),r("p",[e._v("No discovery supported, manual configuration is required.\nThe thing may be configured through the Paper UI.")]),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),r("p",[e._v("[1] "),r("a",{attrs:{href:"https://www.lg.com/us/commercial/documents/m6503ccba-owner-manual.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.lg.com/us/commercial/documents/m6503ccba-owner-manual.pdf"),r("OutboundLink")],1)]),r("p",[e._v("[2] "),r("a",{attrs:{href:"https://sites.google.com/site/brendanrobert/projects/bits-and-pieces/lg-tv-hacks",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://sites.google.com/site/brendanrobert/projects/bits-and-pieces/lg-tv-hacks"),r("OutboundLink")],1)]),r("p",[e._v("[3] "),r("a",{attrs:{href:"https://code.google.com/archive/p/lg-tv-command/source/default/source",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://code.google.com/archive/p/lg-tv-command/source/default/source"),r("OutboundLink")],1)]),r("DocPreviousVersions"),r("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"lg-tv-control-using-serial-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lg-tv-control-using-serial-protocol","aria-hidden":"true"}},[this._v("#")]),this._v(" LG TV control using serial protocol")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-things"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"thing-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("It is necessary to specify the serial port device used for communication.\nOn Linux systems, this will usually be either "),r("code",[e._v("/dev/ttyS0")]),e._v(", "),r("code",[e._v("/dev/ttyUSB0")]),e._v(" or "),r("code",[e._v("/dev/ttyACM0")]),e._v(" (or a higher  number than "),r("code",[e._v("0")]),e._v(" if multiple devices are present).\nOn Windows it will be "),r("code",[e._v("COM1")]),e._v(", "),r("code",[e._v("COM2")]),e._v(", etc.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("On/off")]),t("li",[this._v("Input: Select video input: HDMI, Component, ect.")]),t("li",[this._v("Volume")]),t("li",[this._v("Mute")]),t("li",[this._v("Backlight brightness: Supports 100 levels of brightness for LCD panels.")]),t("li",[this._v("Color temperature: Choose among 3 color temperatures, Warm, Normal and Cool.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"lg-protocol-references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lg-protocol-references","aria-hidden":"true"}},[this._v("#")]),this._v(" LG protocol references")])}],!1,null,null,null);t.default=o.exports}}]);