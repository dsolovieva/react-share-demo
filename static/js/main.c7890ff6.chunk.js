(this["webpackJsonpreact-share-demo"]=this["webpackJsonpreact-share-demo"]||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),l=(n(20),n(5)),i=n(1),u=n(6),s=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){fetch("data/cocktails.json").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),c.a.createElement("ul",null,n&&n.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(l.b,{to:"/cocktail/".concat(e.id)},e.name))})))},m=function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("a",{href:"http://twitter.com/intent/tweet?text=https://dsolovieva.github.io/react-share-demo/#/cocktail/1"},"Twitter")),c.a.createElement("div",null,c.a.createElement("a",{href:"http://www.facebook.com/sharer.php?u=https://dsolovieva.github.io/react-share-demo/#/cocktail/1"},"Facebook")),c.a.createElement("div",null,c.a.createElement("a",{href:"//pinterest.com/pin/create/link/?url=https://dsolovieva.github.io/react-share-demo/#/cocktail/1&media=https://static.vinepair.com/wp-content/uploads/2020/04/bloodandsand_internal.jpg&description=hello"},"Pinterest")))},h=function(){var e=Object(i.f)().cocktailId,t=Object(a.useState)({}),n=Object(u.a)(t,2),o=n[0],r=n[1];return Object(a.useEffect)((function(){fetch("data/cocktails/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){r(e)}))}),[e]),o?c.a.createElement("div",null,c.a.createElement("h1",null,o.name),c.a.createElement("img",{src:o.image,alt:o.name}),c.a.createElement("p",null,o.description),c.a.createElement(m,null)):null};n(26);var d=function(){return c.a.createElement(l.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:s}),c.a.createElement(i.a,{path:"/cocktail/:cocktailId",component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c7890ff6.chunk.js.map