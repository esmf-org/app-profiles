(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{106:function(e,t,c){"use strict";c.r(t);c(75);var n,a,i=c(0),s=c.n(i),r=c(18),l=c.n(r),j=c(7),d=c(17),o=c(8),b=c(59),m=c(60),O=c(74),x=c(73),u=c(19),h=c(20),f=c(1),v=h.a.div(n||(n=Object(u.a)(["\n  overflow: auto;\n  min-height: 75vh;\n  margin: 25px;\n"]))),g=function(e){Object(O.a)(c,e);var t=Object(x.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(m.a)(c,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"col-xl-12 col-lg-12",children:[Object(f.jsx)("div",{className:" card-header py-3 d-flex flex-row align-items-center bg-white justify-content-between ",children:Object(f.jsx)("h6",{className:"m-0 text-dark",children:"Load Balance"})}),Object(f.jsx)(v,{children:Object(f.jsx)("div",{className:"chart-area",children:this.props.children})})]})}}]),c}(s.a.Component),p=c(3),N=c(35),k=c(29),y=c.n(k),S=c(63),w=c.n(S),C=c(64),E=c.n(C),P=c(40),T=c(68),A=c(48),F=c(114),I=c(112),L=c(113);h.a.div(a||(a=Object(u.a)(["\n  padding: 0px;\n"])));var M=function(e){return Object(f.jsx)(F.a,{variant:"danger",children:Object(f.jsx)(I.a,{children:Object(f.jsx)(L.a,{children:e.message})})})};E()(y.a);var z,B,D=function(e){var t={chart:{type:"column",zoomType:"xy"},title:{text:"PET Timings"},credits:{enabled:!1},xAxis:{title:{text:"PET Number"}},yAxis:{min:0,allowDecimals:!0,title:{text:"Total Time (s)"}},legend:{enabled:!0,reversed:!0,itemStyle:{fontSize:"12pt"}},plotOptions:{series:{stacking:"normal",events:{click:function(){S(this.name)}}}},navigation:{menuStyle:{background:"#E0E0E0"}}},c=Object(i.useState)(""),n=Object(o.a)(c,2),a=n[0],r=n[1],l=Object(i.useState)(["/TOP"]),j=Object(o.a)(l,2),d=j[0],b=j[1],m=Object(i.useRef)(["/TOP"]),O=Object(i.useState)(t),x=Object(o.a)(O,2),u=x[0],h=x[1],v=Object(i.useRef)(null);Object(i.useEffect)((function(){m.current=d,g()}),[d]);var g=function(){r("");var t=d.join("/");if(e.options[t]){var c={xAxis:{categories:Object(N.a)(e.options[t].xvals)},series:e.options[t].yvals.map((function(e){return{name:e.name,visible:!0,data:Object(N.a)(e.data)}}))};h((function(e){return Object(p.a)(Object(p.a)({},e),c)}))}else r("No detail timing data for ".concat(t))},k=function(e){var t=v.current.chart;e?t.series.map((function(e){return e.setVisible(!0,!1)})):t.series.map((function(e){return e.setVisible(!1,!1)})),t.redraw()},S=function(t){console.debug("clickLevel(".concat(t,")")),!function(t){var c=t.join("/");return!!e.options[c]}([].concat(Object(N.a)(m.current),[t]))?r("No detail timing data for ".concat(t)):b((function(e){return[].concat(Object(N.a)(e),[t])}))};return Object(f.jsxs)(s.a.Fragment,{children:[a&&Object(f.jsx)(M,{message:a}),Object(f.jsx)(A.a,{children:(null===d||void 0===d?void 0:d.map)?d.map((function(e,t){return Object(f.jsx)(A.a.Item,{onClick:function(){return function(e,t){console.debug("clickCrumb(".concat(e,", ").concat(t,")")),b((function(t){return t.slice(0,e+1)}))}(t,e)},href:"",children:e},t)})):""}),Object(f.jsx)(w.a,{highcharts:y.a,options:u,ref:v}),Object(f.jsx)("div",{className:"d-flex justify-content-center",children:Object(f.jsxs)(T.a,{size:"sm",className:"me-2",children:[Object(f.jsx)(P.a,{onClick:function(){return k(!0)},className:"m-1",children:"Select All"}),Object(f.jsx)(P.a,{onClick:function(){return k(!1)},className:"m-1",children:"Select None"})]})})]})},J=c(72),R=c(21),V=c(70),K=c(26);h.a.div(z||(z=Object(u.a)(["\n  text-decoration: none;\n  font-size: 1.1rem;\n  padding: 1.5rem 1rem;\n  text-align: center;\n  letter-spacing: 0.05rem;\n"]))),h.a.div(B||(B=Object(u.a)(["\n  width: 10px;\n"])));function _(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(f.jsxs)(s.a.Fragment,{children:[Object(f.jsx)("br",{}),Object(f.jsx)(J.a,{className:"flex-column",bg:"gradient-dark",children:Object(f.jsxs)("ul",{"data-toggle":"collapse",className:"navbar-nav bg-gradient-dark sidebar sidebar-dark accordion ".concat(c?"":"toggled"),id:"accordionSidebar",children:[Object(f.jsx)("div",{className:"sidebar-brand d-flex align-items-center justify-content-center",children:Object(f.jsxs)("div",{className:"sidebar-brand-text",children:["ESMF Profiler"," ",Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:"https://img.shields.io/badge/version-0.1.0-success"})})]})}),Object(f.jsx)("hr",{className:"sidebar-divider my-10"}),Object(f.jsx)("div",{className:"sidebar-heading",children:"Application Info"}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(f.jsx)(R.a,{icon:K.a}),Object(f.jsx)("span",{children:" Component Configuration"})]})}),Object(f.jsx)("hr",{className:"sidebar-divider"}),Object(f.jsx)("div",{className:"sidebar-heading",children:"Timing"}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(f.jsx)(R.a,{icon:K.c}),Object(f.jsx)("span",{children:" Timing Summary"})]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(d.b,{className:"nav-link",to:"#",children:[Object(f.jsx)(R.a,{icon:K.b}),Object(f.jsx)("span",{children:" Load Balance"})]})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(f.jsx)(R.a,{icon:K.e}),Object(f.jsx)("span",{children:" MPI Profile"})]})}),Object(f.jsx)("hr",{className:"sidebar-divider"}),Object(f.jsx)("div",{className:"sidebar-heading",children:" Memory"}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(f.jsx)(R.a,{icon:V.a}),Object(f.jsx)("span",{children:" Memory Profile"})]})}),Object(f.jsx)("div",{className:"sidebar-heading",children:"I/O"}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(f.jsx)(R.a,{icon:K.d}),Object(f.jsx)("span",{children:" NetCDF Profile"})]})}),Object(f.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(f.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(f.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle",onClick:function(){c||document.body.classList.add("sidebar-toggled"),document.body.classList.remove("sidebar-toggled"),n(!c),console.log("CLICK")}})})]})})]})}var q=c(47),G=c.n(q),H=c(32);var Q=function(){var e=Object(i.useState)(void 0),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)({name:"",timestamp:""}),s=Object(o.a)(a,2),r=s[0],l=s[1];Object(i.useEffect)((function(){j(),d()}),[]);var j=function(e){G.a.get("data/load_balance.json").then((function(e){return n((function(){return e.data}))})).catch((function(e){return console.log(e)}))},d=function(e){G.a.get("data/site.json").then((function(e){return l((function(){return e.data}))})).catch((function(e){return console.log(e)}))};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(H.a,{title:"".concat(r?r.name:""," - ESMF Profiler")}),Object(f.jsxs)("div",{id:"wrapper",children:[Object(f.jsx)(_,{}),Object(f.jsx)("div",{id:"content-wrapper",className:"d-flex flex-column",children:Object(f.jsx)("div",{id:"content",children:Object(f.jsxs)("div",{className:"container-fluid bg-white",children:[Object(f.jsxs)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:[Object(f.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:r?r.name:""}),Object(f.jsx)("sup",{children:r?r.timestamp:""})]}),Object(f.jsx)("div",{className:"row",children:c&&Object(f.jsx)(g,{children:Object(f.jsx)(D,{options:c})})})]})})})]})]})};function U(){return Object(f.jsx)("div",{children:Object(f.jsxs)(H.b,{children:[Object(f.jsxs)(H.a,{children:[Object(f.jsx)("title",{children:"ESMF Profiler"}),Object(f.jsx)("link",{rel:"canonical",href:"#"})]}),Object(f.jsx)(j.c,{children:Object(f.jsx)(j.a,{path:"/",children:Object(f.jsx)(Q,{})})})]})})}l.a.render(Object(f.jsx)(d.a,{children:Object(f.jsx)(U,{})}),document.getElementById("root"))},75:function(e,t,c){}},[[106,1,2]]]);
//# sourceMappingURL=main.743a8a45.chunk.js.map