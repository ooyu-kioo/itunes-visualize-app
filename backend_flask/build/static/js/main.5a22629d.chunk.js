(this.webpackJsonpfrontend_react=this.webpackJsonpfrontend_react||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},46:function(e,t,a){e.exports=a(75)},51:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),r=a.n(o),l=(a(51),a(20)),i=a(16),s=a(21),u=a(22),m=a(23),p=a(42),h=a(18),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),t}(c.a.Component),b=a(40),f=a.n(b),E=a(103),j=a(95),v=a(98),O=a(102),w=a(101),k=a(99),g=a(100),y=a(97),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){f.a.get("http://localhost:3000/api/home",{headers:{Accept:"Application/json"}}).then((function(e){a.setState({rows:e.data})})).catch(console.error)},a.state={rows:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(j.a)({root:{width:"100%",overflowX:"auto"},table:{minWidth:650}});return c.a.createElement("div",null,c.a.createElement(E.a,{variant:"contained",color:"primary",onClick:this.handleClick},"Default"),c.a.createElement(y.a,{className:e.root},c.a.createElement(v.a,{className:e.table,"aria-label":"simple table"},c.a.createElement(k.a,null,c.a.createElement(g.a,null,c.a.createElement(w.a,null,"\u30a2\u30eb\u30d0\u30e0"))),c.a.createElement(O.a,null,this.state.rows.map((function(e,t){return c.a.createElement(g.a,{key:t},c.a.createElement(w.a,null,e.Album))}))))))}}]),t}(c.a.Component),C=a(41),N=a.n(C),W=(a(72),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:N.a,className:"App-logo",alt:"logo"}),c.a.createElement("p",null,"React App on Flask !!")),c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(h.a,{path:"/top",component:d}),c.a.createElement(h.a,{path:"/visual",component:A}))))}}]),t}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.5a22629d.chunk.js.map