(this["webpackJsonpreact-share-demo"]=this["webpackJsonpreact-share-demo"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=(a(21),a(5)),r=a(2),i=a(7),l=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("data/cocktails.json").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),c.a.createElement("ul",null,a&&a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(o.b,{to:"/cocktail/".concat(e.id)},e.name))})))},m=a(16),s=function(){window.open("http://www.facebook.com/sharer.php?u=https://dsolovieva.github.io/react-share-demo/#/cocktail/1","pop","width=600, height=400, scrollbars=no")},p=function(){window.open("http://twitter.com/intent/tweet?text=https://dsolovieva.github.io/react-share-demo/#/cocktail/1","pop","width=600, height=400, scrollbars=no")},u=function(){window.open("http://pinterest.com/pin/create/link/?url=https://dsolovieva.github.io/react-share-demo/#/cocktail/1&media=https://static.vinepair.com/wp-content/uploads/2020/04/bloodandsand_internal.jpg&description=hello","pop","width=600, height=400, scrollbars=no")},h=function(){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("a",{href:"http://twitter.com/intent/tweet?text=https://dsolovieva.github.io/react-share-demo/#/cocktail/1"},"Twitter")),c.a.createElement("div",null,c.a.createElement("button",{onClick:p},"Twitter")),c.a.createElement("div",null,c.a.createElement("a",{href:"http://www.facebook.com/sharer.php?u=https://dsolovieva.github.io/react-share-demo/#/cocktail/1"},"Facebook")),c.a.createElement("div",null,c.a.createElement("button",{onClick:s},"Facebook")),c.a.createElement("div",null,c.a.createElement("a",{href:"http://pinterest.com/pin/create/link/?url=https://dsolovieva.github.io/react-share-demo/#/cocktail/1&media=https://static.vinepair.com/wp-content/uploads/2020/04/bloodandsand_internal.jpg&description=hello"},"Pinterest")),c.a.createElement("div",null,c.a.createElement("button",{onClick:u},"Pinterest")))},d=function(){var e=Object(r.f)().cocktailId,t=Object(n.useState)({}),a=Object(i.a)(t,2),o=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("data/cocktails/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){l(e)}))}),[e]),o?c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement("meta",{name:"twitter:card",content:"summary"}),c.a.createElement("meta",{name:"twitter:title",content:"Cocktails App"}),c.a.createElement("meta",{name:"twitter:description",content:"Let's shake it"}),c.a.createElement("meta",{name:"twitter:image",content:o.image}),c.a.createElement("meta",{property:"og:type",content:"article"}),c.a.createElement("meta",{property:"og:title",content:"Cocktails App"}),c.a.createElement("meta",{property:"og:description",content:"Let's shake it"}),c.a.createElement("meta",{property:"og:image",content:o.image})),c.a.createElement("h1",null,o.name),c.a.createElement("img",{src:o.image,alt:o.name}),c.a.createElement("p",null,o.description),c.a.createElement(h,null)):null};a(26);var E=function(){return c.a.createElement(o.a,null,c.a.createElement(r.c,null,c.a.createElement(r.a,{exact:!0,path:"/",component:l}),c.a.createElement(r.a,{path:"/cocktail/:cocktailId",component:d})))},b=a(12),f=document.getElementById("root");f.hasChildNodes()?Object(b.hydrate)(c.a.createElement(E,null),f):Object(b.render)(c.a.createElement(E,null),f)}},[[19,1,2]]]);
//# sourceMappingURL=main.b8869d87.chunk.js.map