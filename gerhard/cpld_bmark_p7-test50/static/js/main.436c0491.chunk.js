(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{65:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);n(65);var c,a,i=n(0),s=n.n(i),r=n(17),l=n.n(r),j=n(7),d=n(16),o=n(20),b=n.n(o),m=n(40),u=n(8),O=n(49),x=n(50),h=n(64),f=n(63),v=n(18),p=n(19),g=n(1),N=p.a.div(c||(c=Object(v.a)(["\n  overflow: auto;\n  min-height: 75vh;\n  margin: 25px;\n"]))),k=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"col-xl-12 col-lg-12",children:[Object(g.jsx)("div",{className:"\r card-header\r py-3\r d-flex\r flex-row\r align-items-center\r bg-white\r justify-content-between\r ",children:Object(g.jsx)("h6",{className:"m-0 text-dark",children:"Load Balance"})}),Object(g.jsx)(N,{children:Object(g.jsx)("div",{className:"chart-area",children:this.props.children})})]})}}]),n}(s.a.Component),y=n(3),w=n(35),S=n(29),C=n.n(S),E=n(53),P=n.n(E),T=n(54),A=n.n(T),F=n(38),I=n(58),L=n(45),M=n(89),z=n(87),B=n(88);p.a.div(a||(a=Object(v.a)(["\n  padding: 0px;\n"])));var D=function(e){return Object(g.jsx)(M.a,{variant:"danger",children:Object(g.jsx)(z.a,{children:Object(g.jsx)(B.a,{children:e.message})})})};A()(C.a);var J,R,V=function(e){var t={chart:{type:"column",zoomType:"xy"},title:{text:"PET Timings"},credits:{enabled:!1},xAxis:{title:{text:"PET Number"}},yAxis:{min:0,allowDecimals:!0,title:{text:"Total Time (s)"}},legend:{enabled:!0,reversed:!0,itemStyle:{fontSize:"12pt"}},plotOptions:{series:{stacking:"normal",events:{click:function(){N(this.name)}}}},navigation:{menuStyle:{background:"#E0E0E0"}}},n=Object(i.useState)(""),c=Object(u.a)(n,2),a=c[0],r=c[1],l=Object(i.useState)(["/TOP"]),j=Object(u.a)(l,2),d=j[0],o=j[1],b=Object(i.useRef)(["/TOP"]),m=Object(i.useState)(t),O=Object(u.a)(m,2),x=O[0],h=O[1],f=Object(i.useRef)(null);Object(i.useEffect)((function(){b.current=d,v()}),[d]);var v=function(){r("");var t=d.join("/");if(e.options[t]){var n={xAxis:{categories:Object(w.a)(e.options[t].xvals)},series:e.options[t].yvals.map((function(e){return{name:e.name,visible:!0,data:Object(w.a)(e.data)}}))};h((function(e){return Object(y.a)(Object(y.a)({},e),n)}))}else r("No detail timing data for ".concat(t))},p=function(e){var t=f.current.chart;e?t.series.map((function(e){return e.setVisible(!0,!1)})):t.series.map((function(e){return e.setVisible(!1,!1)})),t.redraw()},N=function(t){console.debug("clickLevel(".concat(t,")")),!function(t){var n=t.join("/");return!!e.options[n]}([].concat(Object(w.a)(b.current),[t]))?r("No detail timing data for ".concat(t)):o((function(e){return[].concat(Object(w.a)(e),[t])}))};return Object(g.jsxs)(s.a.Fragment,{children:[a&&Object(g.jsx)(D,{message:a}),Object(g.jsx)(L.a,{children:(null===d||void 0===d?void 0:d.map)?d.map((function(e,t){return Object(g.jsx)(L.a.Item,{onClick:function(){return function(e,t){console.debug("clickCrumb(".concat(e,", ").concat(t,")")),o((function(t){return t.slice(0,e+1)}))}(t,e)},href:"",children:e},t)})):""}),Object(g.jsx)(P.a,{highcharts:C.a,options:x,ref:f}),Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsxs)(I.a,{size:"sm",className:"me-2",children:[Object(g.jsx)(F.a,{onClick:function(){return p(!0)},className:"m-1",children:"Select All"}),Object(g.jsx)(F.a,{onClick:function(){return p(!1)},className:"m-1",children:"Select None"})]})})]})},K=n(62),_=n(21),q=n(60),G=n(26);p.a.div(J||(J=Object(v.a)(["\n  text-decoration: none;\n  font-size: 1.1rem;\n  padding: 1.5rem 1rem;\n  text-align: center;\n  letter-spacing: 0.05rem;\n"]))),p.a.div(R||(R=Object(v.a)(["\n  width: 10px;\n"])));function H(){var e=Object(i.useState)(!0),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(g.jsxs)(s.a.Fragment,{children:[Object(g.jsx)("br",{}),Object(g.jsx)(K.a,{className:"flex-column",bg:"gradient-dark",children:Object(g.jsxs)("ul",{"data-toggle":"collapse",className:"navbar-nav bg-gradient-dark sidebar sidebar-dark accordion ".concat(n?"":"toggled"),id:"accordionSidebar",children:[Object(g.jsx)("div",{className:"sidebar-brand d-flex align-items-center justify-content-center",children:Object(g.jsxs)("div",{className:"sidebar-brand-text",children:["ESMF Profiler"," ",Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:"https://img.shields.io/badge/version-0.1.0-success"})})]})}),Object(g.jsx)("hr",{className:"sidebar-divider my-10"}),Object(g.jsx)("div",{className:"sidebar-heading",children:"Application Info"}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(g.jsx)(_.a,{icon:G.a}),Object(g.jsx)("span",{children:" Component Configuration"})]})}),Object(g.jsx)("hr",{className:"sidebar-divider"}),Object(g.jsx)("div",{className:"sidebar-heading",children:"Timing"}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(g.jsx)(_.a,{icon:G.c}),Object(g.jsx)("span",{children:" Timing Summary"})]})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(d.b,{className:"nav-link",to:"/",children:[Object(g.jsx)(_.a,{icon:G.b}),Object(g.jsx)("span",{children:" Load Balance"})]})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(g.jsx)(_.a,{icon:G.e}),Object(g.jsx)("span",{children:" MPI Profile"})]})}),Object(g.jsx)("hr",{className:"sidebar-divider"}),Object(g.jsx)("div",{className:"sidebar-heading",children:" Memory"}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(g.jsx)(_.a,{icon:q.a}),Object(g.jsx)("span",{children:" Memory Profile"})]})}),Object(g.jsx)("div",{className:"sidebar-heading",children:"I/O"}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(g.jsx)(_.a,{icon:G.d}),Object(g.jsx)("span",{children:" NetCDF Profile"})]})}),Object(g.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(g.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(g.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle",onClick:function(){n||document.body.classList.add("sidebar-toggled"),document.body.classList.remove("sidebar-toggled"),c(!n),console.log("CLICK")}})})]})})]})}var Q=n(32);var U=function(){var e=Object(i.useState)(void 0),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)({name:"",timestamp:""}),s=Object(u.a)(a,2),r=s[0];s[1],Object(i.useEffect)((function(){l(),j()}),[]);var l=function(e){fetch("data/load_balance.json").then((function(e){return e.json()})).then((function(e){return c((function(){return e}))})).catch((function(e){return console.log(e)}))},j=function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("site.json").then((function(e){return e.json()})).then((function(e){return c((function(){return e}))})).catch((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(Q.a,{title:"".concat(r.name," - ESMF Profiler")}),Object(g.jsxs)("div",{id:"wrapper",children:[Object(g.jsx)(H,{}),Object(g.jsx)("div",{id:"content-wrapper",className:"d-flex flex-column",children:Object(g.jsx)("div",{id:"content",children:Object(g.jsxs)("div",{className:"container-fluid bg-white",children:[Object(g.jsxs)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:[Object(g.jsx)("h1",{className:"h3 mb-0 text-gray-800",children:r.name}),Object(g.jsx)("sup",{children:r.timestamp})]}),Object(g.jsx)("div",{className:"row",children:n&&Object(g.jsx)(k,{children:Object(g.jsx)(V,{options:n})})})]})})})]})]})};function W(){return Object(g.jsx)("div",{children:Object(g.jsxs)(Q.b,{children:[Object(g.jsxs)(Q.a,{children:[Object(g.jsx)("title",{children:"ESMF Profiler"}),Object(g.jsx)("link",{rel:"canonical",href:"#"})]}),Object(g.jsx)(j.c,{children:Object(g.jsx)(j.a,{path:"/",children:Object(g.jsx)(U,{})})})]})})}l.a.render(Object(g.jsx)(d.a,{children:Object(g.jsx)(W,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.436c0491.chunk.js.map