(this["webpackJsonpreact-share-demo"]=this["webpackJsonpreact-share-demo"]||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),l=(n(24),n(5)),i=n(2),m=n(7),u=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){fetch("data/cocktails.json").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),c.a.createElement("ul",null,n&&n.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(l.b,{to:"/cocktail/".concat(e.id)},e.name))})))},s=n(16),h=function(){return c.a.createElement("div",null,c.a.createElement("a",{href:"http://twitter.com/intent/tweet?text=https://dsolovieva.github.io/react-share-demo/#/cocktail/1"},"Twitter"),c.a.createElement("a",{href:"http://www.facebook.com/sharer.php?u=https://dsolovieva.github.io/react-share-demo/#/cocktail/1"},"Facebook"))},f=function(){var e=Object(i.f)().cocktailId,t=Object(a.useState)({}),n=Object(m.a)(t,2),o=n[0],r=n[1];return Object(a.useEffect)((function(){fetch("data/cocktails/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){r(e)}))}),[e]),o?c.a.createElement("div",null,c.a.createElement(s.a,null,c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{property:"og:title",content:o.name}),c.a.createElement("meta",{property:"og:description",content:o.description}),c.a.createElement("meta",{property:"og:image",content:o.image})),c.a.createElement("h1",null,o.name),c.a.createElement("img",{src:o.image,alt:o.name}),c.a.createElement("p",null,o.description),c.a.createElement(h,null)):null};n(29);var p=function(){return c.a.createElement(l.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:u}),c.a.createElement(i.a,{path:"/cocktail/:cocktailId",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.3f214ad8.chunk.js.map