(this.webpackJsonpstylesconference=this.webpackJsonpstylesconference||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(2),o=n.n(r),i=n(15),a=n.n(i),u=(n(21),n(6)),s=n(3),j=(n(22),function(t){var e=t.note,n=t.toggleImportance,r=e.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[e.content,Object(c.jsx)("button",{onClick:n,children:r})]})}),l=n(4),f=n.n(l),b="/api/notes",d=function(){return f.a.get(b).then((function(t){return t.data}))},O=function(t){return f.a.post(b,t).then((function(t){return t.data}))},m=function(t,e){return f.a.put("".concat(b,"/").concat(t),e).then((function(t){return t.data}))},h=function(t){var e=t.message;return null===e?null:Object(c.jsx)("div",{className:"error",children:e})},p=function(){return Object(c.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(c.jsx)("br",{}),Object(c.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},v=function(t){var e=Object(r.useState)([]),n=Object(s.a)(e,2),o=n[0],i=n[1],a=Object(r.useState)(""),l=Object(s.a)(a,2),f=l[0],b=l[1],v=Object(r.useState)(!0),x=Object(s.a)(v,2),g=x[0],S=x[1],y=Object(r.useState)(null),k=Object(s.a)(y,2),w=k[0],N=k[1];Object(r.useEffect)((function(){d().then((function(t){i(t)}))}),[]);var C=g?o:o.filter((function(t){return!0===t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(h,{message:w}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return S(!g)},children:["show ",g?"important":"all"]})}),Object(c.jsx)("ul",{children:C.map((function(t,e){return Object(c.jsx)(j,{note:t,toggleImportance:function(){!function(t){var e=o.find((function(e){return e.id===t})),n=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});m(t,n).then((function(e){i(o.map((function(n){return n.id!==t?n:e})))})).catch((function(n){N("Note '".concat(e.content,"' was already removed from the server")),setTimeout((function(){N(null)}),5e3),i(o.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()<.5};O(e).then((function(t){i(o.concat(t)),b("")}))},children:[Object(c.jsx)("input",{value:f,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]}),Object(c.jsx)(p,{})]})};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1858eb00.chunk.js.map