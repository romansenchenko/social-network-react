(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{340:function(e,t,n){"use strict";n.r(t);var a=n(20);var r=n(0),c=n.n(r),u=n(9),l=n(138),i=function(){var e=Object(u.c)();return Object(r.useEffect)(function(){return e(Object(l.c)()),function(){e(Object(l.d)())}},[]),c.a.createElement("div",null,c.a.createElement(o,null),c.a.createElement(s,null))},o=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(u.d)(function(e){return e.chat.messages});return c.a.createElement("div",{style:{height:"600px",overflowY:"auto"}},t.map(function(e,t){return c.a.createElement(m,{key:t,message:e})}))},m=function(e){var t=e.message;return c.a.createElement("div",null,c.a.createElement("img",{src:t.photo,style:{width:"40px"}})," ",c.a.createElement("b",null,t.userName),c.a.createElement("br",null),t.message,c.a.createElement("hr",null))},s=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)("pending"),m=Object(a.a)(o,2),s=(m[0],m[1],Object(u.c)());Object(u.d)(function(e){return e.chat.status});return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("textarea",{onChange:function(e){return i(e.currentTarget.value)},value:n})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){n&&(s(Object(l.b)(n)),i(""))}},"Send")))};t.default=function(){return c.a.createElement("div",null,c.a.createElement(i,null))}}}]);
//# sourceMappingURL=3.7ae6b341.chunk.js.map