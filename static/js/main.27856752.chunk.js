(this["webpackJsonpbulletin-board"]=this["webpackJsonpbulletin-board"]||[]).push([[0],{14:function(e,t,n){e.exports=n(28)},19:function(e,t,n){},20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),r=n.n(i),c=(n(19),n(6)),l=n(7),u=(n(20),n(12)),s=n.n(u),m=n(30),d=n(13),f=n.n(d);function b(){var e=o.a.useState(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=o.a.useState(JSON.parse(localStorage.getItem("items"))||[]),r=Object(l.a)(i,2),u=r[0],d=r[1],b=function(){if(""!==n.trim()){var e={id:Object(m.a)(),item:n,color:f()({luminosity:"light"}),defaultPos:{x:100,y:0}};d((function(t){return[].concat(Object(c.a)(t),[e])})),a("")}else alert("Enter a item"),a("")};o.a.useEffect((function(){localStorage.setItem("items",JSON.stringify(u))}),[u]);return o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:"new-item"},o.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter something...",onKeyPress:function(e){var t;13===((t=e).keyCode||t.which)&&b()}}),o.a.createElement("button",{onClick:b},"ENTER")),u.map((function(e,t){return o.a.createElement(s.a,{key:e.id,defaultPosition:e.defaultPos,onStop:function(e,n){!function(e,t){var n=Object(c.a)(u);n[t].defaultPos={x:e.x,y:e.y},d(n)}(n,t)}},o.a.createElement("div",{style:{backgroundColor:e.color},className:"box"},"".concat(e.item),o.a.createElement("button",{id:"delete",onClick:function(t){return n=e.id,void d(u.filter((function(e){return e.id!==n})));var n}},"X")))})))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.27856752.chunk.js.map