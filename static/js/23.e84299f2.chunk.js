/*! For license information please see 23.e84299f2.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[23],{102:function(t,e,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var r=typeof i;if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)){if(i.length){var s=c.apply(null,i);s&&t.push(s)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var a in i)n.call(i,a)&&i[a]&&t.push(a);else t.push(i.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(i=function(){return c}.apply(e,[]))||(t.exports=i)}()},122:function(t,e,n){"use strict";var i=n(51),c=n(2),r={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};e.a=function(t){var e=Object(c.useState)(!1),n=Object(i.a)(e,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){t.current&&new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(a(!0),n.unobserve(t.current))}))}),r).observe(t.current)}),[t]),s}},204:function(t,e,n){"use strict";var i=n(2),c=n(101);e.a=function(t,e,n){if(!c.a)return[e,function(){}];var r=Object(i.useState)((function(){try{var i=sessionStorage.getItem(t);return"string"!==typeof i?(sessionStorage.setItem(t,n?String(e):JSON.stringify(e)),e):n?i:JSON.parse(i||"null")}catch(r){return e}})),s=r[0],a=r[1];return Object(i.useEffect)((function(){try{var e=n?String(s):JSON.stringify(s);sessionStorage.setItem(t,e)}catch(r){}})),[s,a]}},205:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(1),c=n(0);function r(t){var e,n;if(Object(c.a)(1,arguments),t&&"function"===typeof t.forEach)e=t;else{if("object"!==typeof t||null===t)return new Date(NaN);e=Array.prototype.slice.call(t)}return e.forEach((function(t){var e=Object(i.a)(t);(void 0===n||n<e||isNaN(Number(e)))&&(n=e)})),n||new Date(NaN)}},255:function(t,e,n){"use strict";n.r(e);var i=n(107),c=n(51),r=n(10),s=n(122),a=n(25),o=n(104),l=n(102),d=n.n(l),u=n(77),j=n(205),b=n(2),O=n(141),f=n(294),v=n(5),h=n(204),m=n(118),p=n(20),x=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(1),n.e(20)]).then(n.bind(null,217))}))})),g=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(9).then(n.bind(null,150))}))})),y=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(33).then(n.bind(null,165))}))})),N=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(38).then(n.bind(null,166))}))})),k=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(2),n.e(7),n.e(6)]).then(n.bind(null,234))}))})),S=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(34).then(n.bind(null,167))}))})),w=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(1),n.e(3),n.e(26)]).then(n.bind(null,168))}))})),C=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(8).then(n.bind(null,236))}))})),M=Object(b.lazy)((function(){return Object(a.k)((function(){return Promise.all([n.e(2),n.e(36)]).then(n.bind(null,235))}))})),D=Object(b.lazy)((function(){return Object(a.k)((function(){return n.e(24).then(n.bind(null,183))}))}));function I(){var t,e,n,l,I,z=Object(f.a)().t,R=Object(v.i)().stateCode.toUpperCase(),H=Object(h.a)("mapStatistic","active"),U=Object(c.a)(H,2),E=U[0],P=U[1],J=Object(b.useState)(!1),A=Object(c.a)(J,2),G=A[0],F=A[1],T=Object(b.useState)({stateCode:R,districtName:null}),V=Object(c.a)(T,2),W=V[0],B=V[1],L=Object(b.useState)(!1),q=Object(c.a)(L,2),K=q[0],Q=q[1];Object(b.useEffect)((function(){W.stateCode!==R&&(B({stateCode:R,districtName:null}),F(!1))}),[W.stateCode,R]);var X=Object(m.a)("".concat(r.d,"/timeseries-").concat(R,".min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}),Y=X.data,Z=X.error,$=Object(m.a)("".concat(r.d,"/data.min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,_=null===$||void 0===$?void 0:$[R],tt=Object(b.useMemo)((function(){if(_){var t=window.innerWidth>=540?3:2,e=(null===_||void 0===_?void 0:_.districts)?Object.keys(_.districts).filter((function(t){return"Unknown"!==t})).length:0;return Math.ceil(e/t)}}),[_]),et=Object(b.useRef)(),nt=Object(s.a)(et),it=Object(b.useMemo)((function(){var t=[];return[0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),ct=G?window.innerWidth>=540?10:8:6,rt=Object(b.useMemo)((function(){var t,e,n,i,c,r=[null===_||void 0===_||null===(t=_.meta)||void 0===t?void 0:t.date,null===_||void 0===_||null===(e=_.meta)||void 0===e||null===(n=e.tested)||void 0===n?void 0:n.date,null===_||void 0===_||null===(i=_.meta)||void 0===i||null===(c=i.vaccinated)||void 0===c?void 0:c.date].filter((function(t){return t}));return r.length>0?Object(u.a)(Object(j.a)(r.map((function(t){return Object(a.j)(t)}))),{representation:"date"}):null}),[_]),st=r.o.includes(E)?E:"confirmed",at=Object(b.useMemo)((function(){var t;return!!((null===_||void 0===_?void 0:_.districts)&&(null===(t=_.districts)||void 0===t?void 0:t[r.G])&&r.t.every((function(t){return Object(a.h)(_,"total",t)===Object(a.h)(_.districts[r.G],"total",t)})))}),[_]),ot=r.y[st],lt=(null===W||void 0===W?void 0:W.districtName)&&W.districtName!==r.G&&at,dt=Object.keys((!at||!ot.hasPrimary)&&(null===_||void 0===_?void 0:_.districts)||{});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(O.a,{children:[Object(p.jsxs)("title",{children:["Coronavirus Outbreak in ",r.x[R]," - covid19india.org"]}),Object(p.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(r.x[R],": Latest Map and Case Count")})]}),Object(p.jsxs)("div",{className:"State",children:[Object(p.jsxs)("div",{className:"state-left",children:[Object(p.jsx)(C,{data:_,stateCode:R}),Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsx)(S,{mapStatistic:E,setMapStatistic:P}),Object(p.jsx)(y,{data:_}),Object(p.jsx)(w,{timeseries:null===Y||void 0===Y||null===(t=Y[R])||void 0===t?void 0:t.dates,stateCode:R,forceRender:!!Z})]}),(null===_||void 0===_||null===(e=_.total)||void 0===e?void 0:e.vaccinated1)&&Object(p.jsx)(N,{data:_}),$&&Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{style:{minHeight:"50rem"}}),children:Object(p.jsx)(k,{stateCode:R,data:$,regionHighlighted:W,setRegionHighlighted:B,mapStatistic:E,setMapStatistic:P,lastDataDate:rt,delta7Mode:K,setDelta7Mode:Q,noRegionHighlightedDistrictData:lt,noDistrictData:at})}),Object(p.jsx)("span",{ref:et}),nt&&$&&Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(M,{stateCode:R,data:$,timeseries:null===Y||void 0===Y||null===(n=Y[R])||void 0===n?void 0:n.dates})})]}),Object(p.jsx)("div",{className:"state-right",children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"district-bar",children:[Object(p.jsxs)("div",{className:d()("district-bar-top",{expanded:G}),children:[Object(p.jsxs)("div",{className:"district-bar-left",children:[Object(p.jsx)("h2",{className:d()(st,"fadeInUp"),style:it[0],children:z("Top districts")}),Object(p.jsx)("div",{className:"districts fadeInUp ".concat(G?"is-grid":""),style:G?Object(i.a)({gridTemplateRows:"repeat(".concat(tt,", 2rem)")},it[1]):it[1],children:dt.filter((function(t){return"Unknown"!==t})).sort((function(t,e){return function(t,e){var n=_.districts[t],i=_.districts[e];return Object(a.h)(i,"total",E)-Object(a.h)(n,"total",E)}(t,e)})).slice(0,G?void 0:5).map((function(t){var e=Object(a.h)(_.districts[t],"total",st),n=Object(a.h)(_.districts[t],"delta",st);return Object(p.jsxs)("div",{className:"district",children:[Object(p.jsx)("h2",{children:Object(a.e)(e)}),Object(p.jsx)("h5",{children:z(t)}),"active"!==st&&Object(p.jsx)("div",{className:"delta",children:Object(p.jsx)("h6",{className:st,children:n>0?"\u2191"+Object(a.e)(n):""})})]},t)}))})]}),Object(p.jsxs)("div",{className:"district-bar-right fadeInUp",style:it[2],children:[Y&&("confirmed"===st||"deceased"===st)&&Object(p.jsx)("div",{className:"happy-sign",children:Object.keys((null===(l=Y[R])||void 0===l?void 0:l.dates)||{}).slice(-ct).every((function(t){return 0===Object(a.h)(Y[R].dates[t],"delta",st)}))&&Object(p.jsxs)("div",{className:"alert ".concat("confirmed"===st?"is-green":""),children:[Object(p.jsx)(o.w,{}),Object(p.jsxs)("div",{className:"alert-right",children:["No new ",st," cases in the past five days"]})]})}),Object(p.jsx)(x,{timeseries:null===Y||void 0===Y||null===(I=Y[R])||void 0===I?void 0:I.dates,statistic:st,stateCode:R,lookback:ct,forceRender:!!Z})]})]}),Object(p.jsx)("div",{className:"district-bar-bottom",children:dt.length>5?Object(p.jsx)("button",{className:"button fadeInUp",onClick:function(){F(!G)},style:it[3],children:Object(p.jsx)("span",{children:z(G?"View less":"View all")})}):Object(p.jsx)("div",{style:{height:"3.75rem",flexBasis:"15%"}})})]}),Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(D,{stateCode:R,timeseries:Y,regionHighlighted:W,setRegionHighlighted:B,noRegionHighlightedDistrictData:lt,forceRender:!!Z})})]})})]}),Object(p.jsx)(g,{})]})}e.default=Object(b.memo)(I)}}]);
//# sourceMappingURL=23.e84299f2.chunk.js.map