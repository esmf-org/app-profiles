(this.webpackJsonptemp=this.webpackJsonptemp||[]).push([[0],{63:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);c(63);var n,s,i=c(0),a=c.n(i),r=c(19),l=c.n(r),o=c(8),d=c(18),j=c(7),b=c(35),O=c(36),x=c(41),m=c(39),h=c(16),u=c(17),v=c(1),g=u.a.div(n||(n=Object(h.a)(["\n  overflow: auto;\n  min-height: 75vh;\n  margin: 25px;\n"]))),f=function(e){Object(x.a)(c,e);var t=Object(m.a)(c);function c(){return Object(b.a)(this,c),t.apply(this,arguments)}return Object(O.a)(c,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"col-xl-12 col-lg-12",children:[Object(v.jsx)("div",{className:" card-header py-3 d-flex flex-row align-items-center bg-white justify-content-between ",children:Object(v.jsx)("h6",{className:"m-0 text-dark",children:"Load Balance"})}),Object(v.jsx)(g,{children:Object(v.jsx)("div",{className:"chart-area",children:this.props.children})})]})}}]),c}(a.a.Component),p=c(62),N=c(3),k=c(28),y=c.n(k),S=c(52),w=c.n(S),C=c(53),E=c.n(C),P=c(38),T=c(57),A=c(46),L=c(85),I=c(83),M=c(84);u.a.div(s||(s=Object(h.a)(["\n  padding: 0px;\n"])));var F,z=function(e){return Object(v.jsx)(L.a,{variant:"danger",children:Object(v.jsx)(I.a,{children:Object(v.jsx)(M.a,{children:e.message})})})};E()(y.a);var B=u.a.div(F||(F=Object(h.a)([""]))),D={chart:{type:"column",zoomType:"xy"},title:{text:"PET Timings"},credits:{enabled:!1},xAxis:{categories:[1,2,3],title:{text:"PET Number"}},yAxis:{min:0,allowDecimals:!0,title:{text:"Time (s)"}},legend:{reversed:!0,itemStyle:{fontSize:"12pt"}},plotOptions:{series:{stacking:"normal"}},series:[1,2,3,4],navigation:{menuStyle:{background:"#E0E0E0"}}};var J,_,K=function(e){var t=Object(i.useState)(e.options),c=Object(j.a)(t,2),n=c[0],s=c[1],a=Object(i.useState)(["/TOP"]),r=Object(j.a)(a,2),l=r[0],o=r[1],d=Object(i.useState)(""),b=Object(j.a)(d,2),O=b[0],x=b[1],m=Object(i.useState)(["/TOP"]),h=Object(j.a)(m,2),u=h[0],g=h[1];Object(i.useEffect)((function(){f()}),[l]);var f=function(){if(console.debug("updateLevel()"),l.join){var t=l.join("/");if(!t in e.options||void 0==e.options[t])return o(l.slice(0,l.length-1)),void x("No additional timing detail");if(!1 in e.options[t]||!1 in e.options[t])return console.log(O),o(u),void x("You've reached the tree limit");var c={title:{text:t},xAxis:{categories:e.options[t].xvals},series:e.options[t].yvals};s(Object(N.a)(Object(N.a)(Object(N.a)({},D),c),S)),g(u+l)}},k=function(e){console.debug("toggleAllSeries(".concat(e,")")),s({plotOptions:{series:{visible:e}}})},S={plotOptions:{series:{stacking:"normal",events:{click:function(e){C(this.name)}}}}},C=function(e){console.debug("clickLevel(".concat(e,")")),x("");var t=l.indexOf(e);console.log("Position is ".concat(t)),o(-1===t?function(){return[].concat(Object(p.a)(l),[e])}:function(){return l.slice(0,t+1)}),console.log(l)};return Object(v.jsxs)(B,{children:[O&&Object(v.jsx)(z,{message:O}),Object(v.jsx)(A.a,{children:(console.debug("ChartCrumbs()"),l.map?l.map((function(e,t){return Object(v.jsx)(A.a.Item,{onClick:function(){return C(e)},href:"",children:e},t)})):"")}),Object(v.jsx)(w.a,{highcharts:y.a,options:n}),Object(v.jsxs)(T.a,{size:"sm",className:"me-2",children:[Object(v.jsx)(P.a,{onClick:function(){return k(!0)},className:"m-1",children:"Select All"}),Object(v.jsx)(P.a,{onClick:function(){return k(!1)},className:"m-1",children:"Select None"})]})]})},Y=c(61),q=c(20),G=c(59),H=c(25);u.a.div(J||(J=Object(h.a)(["\n  text-decoration: none;\n  font-size: 1.1rem;\n  padding: 1.5rem 1rem;\n  text-align: center;\n  letter-spacing: 0.05rem;\n"]))),u.a.div(_||(_=Object(h.a)(["\n  width: 10px;\n"])));function Q(){var e=Object(i.useState)(!0),t=Object(j.a)(e,2),c=t[0],n=t[1];return Object(v.jsxs)(a.a.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)(Y.a,{className:"flex-column",bg:"gradient-dark",children:Object(v.jsxs)("ul",{"data-toggle":"collapse",className:"navbar-nav bg-gradient-dark sidebar sidebar-dark accordion ".concat(c?"":"toggled"),id:"accordionSidebar",children:[Object(v.jsx)("div",{className:"sidebar-brand d-flex align-items-center justify-content-center",children:Object(v.jsxs)("div",{className:"sidebar-brand-text",children:["ESMF Profiler"," ",Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"https://img.shields.io/badge/version-0.1.0-success"})})]})}),Object(v.jsx)("hr",{className:"sidebar-divider my-10"}),Object(v.jsx)("div",{className:"sidebar-heading",children:"Application Info"}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(v.jsx)(q.a,{icon:H.a}),Object(v.jsx)("span",{children:" Component Configuration"})]})}),Object(v.jsx)("hr",{className:"sidebar-divider"}),Object(v.jsx)("div",{className:"sidebar-heading",children:"Timing"}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(v.jsx)(q.a,{icon:H.c}),Object(v.jsx)("span",{children:" Timing Summary"})]})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)(d.b,{className:"nav-link",to:"/",children:[Object(v.jsx)(q.a,{icon:H.b}),Object(v.jsx)("span",{children:" Load Balance"})]})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(v.jsx)(q.a,{icon:H.e}),Object(v.jsx)("span",{children:" MPI Profile"})]})}),Object(v.jsx)("hr",{className:"sidebar-divider"}),Object(v.jsx)("div",{className:"sidebar-heading",children:" Memory"}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(v.jsx)(q.a,{icon:G.a}),Object(v.jsx)("span",{children:" Memory Profile"})]})}),Object(v.jsx)("div",{className:"sidebar-heading",children:"I/O"}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsxs)(d.b,{className:"nav-link text-muted",to:"/",children:[Object(v.jsx)(q.a,{icon:H.d}),Object(v.jsx)("span",{children:" NetCDF Profile"})]})}),Object(v.jsx)("hr",{className:"sidebar-divider d-none d-md-block"}),Object(v.jsx)("div",{className:"text-center d-none d-md-inline",children:Object(v.jsx)("button",{className:"rounded-circle border-0",id:"sidebarToggle",onClick:function(){c||document.body.classList.add("sidebar-toggled"),document.body.classList.remove("sidebar-toggled"),n(!c),console.log("CLICK")}})})]})})]})}a.a.Component;var R=c(31);var U=function(){var e=Object(i.useState)(),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(i.useState)(),a=Object(j.a)(s,2),r=a[0],l=a[1];return Object(i.useEffect)((function(){fetch("data/load_balance.json").then((function(e){return e.json()})).then((function(e){n(e)})).catch((function(e){console.log(e,"Error loading data/load_balance.json")})),fetch("data/site.json").then((function(e){return e.json()})).then((function(e){l(e.name+" - ESMF Profiler")})).catch((function(e){console.log(e,"Error loading data/site.json")}))}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(R.a,{title:r}),Object(v.jsxs)("div",{id:"wrapper",children:[Object(v.jsx)(Q,{}),Object(v.jsx)("div",{id:"content-wrapper",className:"d-flex flex-column",children:Object(v.jsx)("div",{id:"content",children:Object(v.jsxs)("div",{className:"container-fluid bg-white",children:[Object(v.jsx)("div",{className:"d-sm-flex align-items-center justify-content-between mb-4",children:Object(v.jsx)("h1",{className:"h3 mb-0 text-gray-800"})}),Object(v.jsx)("div",{className:"row",children:c?Object(v.jsx)(f,{children:Object(v.jsx)(K,{options:c})}):Object(v.jsx)("div",{children:c})})]})})})]})]})};function V(){return Object(v.jsx)("div",{children:Object(v.jsxs)(R.b,{children:[Object(v.jsxs)(R.a,{children:[Object(v.jsx)("title",{children:"ESMF Profiler"}),Object(v.jsx)("link",{rel:"canonical",href:"https://earthsystemmodeling.org/"})]}),Object(v.jsx)(o.c,{children:Object(v.jsx)(o.a,{path:"/",children:Object(v.jsx)(U,{})})})]})})}l.a.render(Object(v.jsx)(d.a,{children:Object(v.jsx)(V,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.320d0b24.chunk.js.map