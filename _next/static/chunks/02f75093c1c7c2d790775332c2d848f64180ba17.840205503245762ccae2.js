(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/h46":function(e,n,t){t("cHUd")("Map")},LX0d:function(e,n,t){e.exports=t("UDep")},Lnxd:function(e,n,t){"use strict";var o=t("q1tI"),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.createContext&&o.createContext(r),a=function(){return(a=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)},s=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&(t[o[r]]=e[o[r]])}return t};function l(e){return function(n){return o.createElement(d,a({attr:a({},e.attr)},n),function e(n){return n&&n.map((function(n,t){return o.createElement(n.tag,a({key:t},n.attr),e(n.child))}))}(e.child))}}function d(e){var n=function(n){var t,r=e.size||n.size||"1em";n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className);var i=e.attr,l=e.title,d=s(e,["attr","title"]);return o.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,d,{className:t,style:a({color:e.color||n.color},n.style,e.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),e.children)};return void 0!==i?o.createElement(i.Consumer,null,(function(e){return n(e)})):n(r)}t.d(n,"a",(function(){return l}))},UDep:function(e,n,t){t("wgeU"),t("FlQf"),t("bBy9"),t("g33z"),t("XLbu"),t("/h46"),t("dVTT"),e.exports=t("WEpk").Map},XLbu:function(e,n,t){var o=t("Y7ZC");o(o.P+o.R,"Map",{toJSON:t("8iia")("Map")})},YFqc:function(e,n,t){e.exports=t("cTJO")},bgFo:function(e,n,t){"use strict";var o=t("vOnD"),r=(o.b.a.withConfig({displayName:"Button",componentId:"sc-1vzjm29-0"})(["font-size:1.6rem;padding:15px 20px;background:",";box-shadow:2px 4px 10px rgba(0,0,0,0.2);border-radius:5px;margin:3vh 20px;color:",";transition:all 0.1s ease;display:inline-block;&:hover{box-shadow:0px 4px 20px rgba(0,0,0,0.2);transform:scale(1.07);}@media (max-width:768px){padding:10px 20px;margin:10px 5px;}"],(function(e){return e.primary?"#2D16A4":"#fff"}),(function(e){return e.primary?"#fff":"#2D16A4"})),o.b.div.withConfig({displayName:"Button__CallToAction",componentId:"sc-1vzjm29-1"})(["margin:0 auto;text-align:center;"]),t("q1tI")),i=t.n(r),a=t("8Kt/"),s=t.n(a),l=i.a.createElement,d=function(e){var n=e.title;e.transparent;return l(i.a.Fragment,null,l(s.a,null,l("title",null,"WebAssembly Summit",n?": ".concat(n):"")))},c=(o.b.div.withConfig({displayName:"Header__Spacer",componentId:"sc-19396pz-0"})(["width:75px;@media screen and (max-width:768px){width:30px;}"]),o.b.div.withConfig({displayName:"Header__Headline",componentId:"sc-19396pz-1"})(["display:flex;flex-direction:row;justify-content:flex-start;align-items:center;background-color:#1b1d6e;border-bottom:4px solid hsl(256,91%,10%);box-shadow:inset 0px 5px 20px hsla(256,91%,10%,0.8);"]),o.b.h1.withConfig({displayName:"Header__Heading",componentId:"sc-19396pz-2"})(["flex:1;font-size:2em;font-weight:700;margin:0;padding:3vh 10px 3vh 6%;text-shadow:1px 4px 10px rgba(0,0,0,0.5);color:rgb(180,180,255);@media screen and (max-width:768px){font-size:1.5em;}"]),t("YFqc")),p=t.n(c),f=t("nOHt"),u=t("ma3e"),m=t("IdFE"),h=t("Lnxd"),g=function(e){return Object(h.a)({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"}}]})(e)};g.displayName="GoPerson";var x="up",b=i.a.createElement,w=function(e){var n=e.title,t=e.bottom,o=e.backgroundColor,a=Object(r.useState)(!1),s=a[0],l=a[1],c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.initialDirection,t=void 0===n?x:n,o=e.thresholdPixels,i=void 0===o?10:o,a=e.off,s=void 0!==a&&a,l=Object(r.useState)(t),d=l[0],c=l[1];return Object(r.useEffect)((function(){var e=i||0,n=window.pageYOffset,o=!1,r=function(){var t=window.pageYOffset;Math.abs(t-n)<e?o=!1:(c(t>n?"down":x),n=t>0?t:0,o=!1)},a=function(){o||(window.requestAnimationFrame(r),o=!0)};return s?c(t):window.addEventListener("scroll",a),function(){return window.removeEventListener("scroll",a)}}),[t,i,s]),d}(),u=Object(f.useRouter)().pathname,h=t?j:O;return b(i.a.Fragment,null,b(h,{backgroundColor:o,style:{transform:c==x?"none":"translateY(100%)",transition:"150ms"}},b(p.a,{href:"/",as:"/",passHref:!0},b("a",null,b(_,null,b(v,{src:"/webassembly-logo.svg",alt:"WebAssembly Summit Logo"}),b(d,{title:n}),b(k,{active:"/"===u},"WebAssembly Summit")))),b(T,null),b(C,null,y.map((function(e,n){var t=e.Icon,o=e.label,r=e.url,i=e.external;return i?b("a",{key:r,href:r,target:i&&"_blank",rel:"noreferrer"},b(B,null,b(t,{size:24,style:{margin:8}})," ",b(z,null,o))):u&&u===r?b(p.a,{key:r,href:r,as:r,passHref:!0},b("a",null,b(N,null,b(t,{size:24,style:{margin:8}})," ",b(z,null,o)))):r?b(p.a,{key:r,href:r,as:r,passHref:!0},b("a",null,b(B,null,b(t,{size:24,style:{margin:8}})," ",b(z,null,o)))):b("a",{key:n},b(B,null,b(t,{size:24,style:{margin:8}})," ",b(z,null,o)))}))),b(A,null),b(E,null,b("a",{onClick:function(){return l(!s)}},b(s?m.a:m.b,{size:35})))),b(S,{open:s,backgroundColor:o},y.map((function(e,n){var t=e.label,o=e.url,r=e.Icon;return e.external?b("a",{key:o,href:o},b(H,null,b(r,{size:30,style:{margin:10}}),b(I,null,t))):o?b(p.a,{key:o,href:o,as:o,passHref:!0},b("a",null,b(H,null,b(r,{size:30,style:{margin:10}}),b(I,null,t)))):b("a",{key:n},b(H,null,b(r,{size:30,style:{margin:10}}),b(I,null,t)))}))))},v=o.b.img.withConfig({displayName:"NavBar__Logo",componentId:"sc-1nwcdbn-0"})(["width:27px;box-shadow:1px 2px 10px rgba(0,0,0,0.2);margin:0 15px;"]),y=[{Icon:g,label:"Speakers",url:"/speakers"},{Icon:u.e,label:"Schedule",url:"/schedule"},{Icon:u.d,label:"About",url:"/about"},{Icon:u.c,label:"Venue",url:"https://goo.gl/maps/uvivRUCkjAmC5Jqo6",external:!0},{Icon:u.f,label:"Twitter",url:"https://twitter.com/search?q=%23WasmSummit&src=typed_query",external:!0}],_=o.b.div.withConfig({displayName:"NavBar__HomeButton",componentId:"sc-1nwcdbn-1"})(["display:flex;flex:1;align-items:center;justify-content:center;padding-left:2vw;&:hover{color:white;}@media screen and (max-width:799px){padding-left:8vw;}@media screen and (max-width:500px){padding-left:15px;}@media screen and (display-mode:standalone){padding-bottom:10px;}"]),k=o.b.div.withConfig({displayName:"NavBar__WebAssemblySummit",componentId:"sc-1nwcdbn-2"})(["display:flex;text-shadow:1px 2px 5px rgba(0,0,0,0.2);text-align:center;letter-spacing:1px;white-space:nowrap;color:",";transition:150ms;padding:0 15px;font-size:1em;font-size:0.95em;&:hover{color:rgba(255,255,255,1);}@media screen and (max-width:1080px){display:none;}"],(function(e){return e.active?"rgba(255, 255, 255, 1)":"rgba(200, 200, 240, 0.8)"})),C=o.b.div.withConfig({displayName:"NavBar__NavItems",componentId:"sc-1nwcdbn-3"})(["display:flex;flex:1;flex-basis:900px;flex-direction:row;justify-content:space-evenly;align-items:center;margin:0 5px;height:100%;@media screen and (max-width:374px){display:none;}"]),N=o.b.div.withConfig({displayName:"NavBar__ActiveButton",componentId:"sc-1nwcdbn-4"})(["display:flex;align-items:center;justify-content:center;margin-left:-1;padding:0 2vw 5px 1.5vw;height:60px;transition:150ms;border-top:2px solid white;color:white;cursor:pointer;font-size:0.95em;@media screen and (display-mode:standalone){padding-bottom:10px;}"]),z=o.b.span.withConfig({displayName:"NavBar__ButtonText",componentId:"sc-1nwcdbn-5"})(["color:rgba(220,220,255,1);margin-left:10px;&:hover{color:rgba(255,255,255,1);}@media screen and (max-width:800px){display:none;}"]),I=o.b.span.withConfig({displayName:"NavBar__PopupButtonText",componentId:"sc-1nwcdbn-6"})(["color:rgba(220,220,255,1);font-size:1em;&:hover{color:rgba(255,255,255,1);}"]),B=o.b.div.withConfig({displayName:"NavBar__Button",componentId:"sc-1nwcdbn-7"})(["display:flex;align-items:center;justify-content:center;padding:0 2vw 5px 1.5vw;height:60px;transition:150ms;border-top:2px solid transparent;color:rgba(255,255,255,0.8);cursor:pointer;font-size:0.95em;&:hover{color:rgba(255,255,255,1);border-top:2px solid white;}@media screen and (display-mode:standalone){padding-bottom:10px;}"]),j=o.b.div.withConfig({displayName:"NavBar__BottomBox",componentId:"sc-1nwcdbn-8"})(["display:flex;z-index:1;background:rgb(20,20,20);align-items:center;flex-direction:row;justify-content:flex-start;position:fixed;left:0;right:0;bottom:0;overflow-x:scroll;overflow-y:hidden;box-shadow:inset 0px 5px 5px hsla(256,91%,10%,0.35);background-color:",";a{font-size:1.2em;}@media screen and (max-width:749px){box-shadow:inset 0px 5px 5px hsla(256,91%,10%,0.2);justify-content:center;}"],(function(e){return e&&e.backgroundColor?e.backgroundColor:void 0})),O=o.b.div.withConfig({displayName:"NavBar__TopBox",componentId:"sc-1nwcdbn-9"})(["display:flex;z-index:1;align-items:center;flex-direction:row;justify-content:flex-start;position:sticky;left:0;right:0;top:0;box-shadow:inset 0px 5px 20px hsla(256,0%,0%,0.3);background-color:",";a{font-size:1.2em;}"],(function(e){return e&&e.backgroundColor?e.backgroundColor:void 0})),E=o.b.div.withConfig({displayName:"NavBar__BurgerButton",componentId:"sc-1nwcdbn-10"})(["flex:1;display:flex;flex-direction:row;justify-content:flex-end;padding:10px 20px;cursor:pointer;@media screen and (min-width:375px){display:none;}"]),S=o.b.div.withConfig({displayName:"NavBar__Popup",componentId:"sc-1nwcdbn-11"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,1fr));position:fixed;justify-items:center;align-items:center;bottom:0;left:0;right:0;transition:150ms;z-index:0;padding-bottom:58px;font-size:1em;transform:",";background-color:",";"],(function(e){return e.open?"translateY(0)":"translateY(100%)"}),(function(e){return e&&e.backgroundColor?e.backgroundColor:void 0})),H=o.b.div.withConfig({displayName:"NavBar__PopupButton",componentId:"sc-1nwcdbn-12"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:30px 2%;transition:150ms;width:100%;border-top:2px solid transparent;text-align:center;color:white;"]),T=o.b.div.withConfig({displayName:"NavBar__LeftSpacer",componentId:"sc-1nwcdbn-13"})(["flex:2;"]),A=o.b.div.withConfig({displayName:"NavBar__RightSpacer",componentId:"sc-1nwcdbn-14"})(["flex:5;"]),L=o.b.div.withConfig({displayName:"SpeakerCard__SpeakerSummary",componentId:"sc-1bb28a2-0"})(["padding:15px 30px 30px 30px;background:hsl(239,50%,25%);height:140px;line-height:1.8;font-size:1em;p{color:rgba(255,255,255,0.5);margin:0;margin-bottom:5px;font-weight:normal;font-size:1.8em;padding:0;}@media (max-width:1280px){padding:15px 25px;height:150px;line-height:1.6;}color:rgba(255,255,255,0.8);"]),U=o.b.span.withConfig({displayName:"SpeakerCard__Company",componentId:"sc-1bb28a2-1"})(["color:white;font-size:1em;margin:0;padding:0;"]),M=o.b.div.withConfig({displayName:"SpeakerCard__SpeakerName",componentId:"sc-1bb28a2-2"})(["font-size:1.4em;color:white;margin:0;margin:0;padding:10px 15px;font-weight:",";background-color:",";@media (max-width:500px){font-size:1.2em;}"],(function(e){return e.bold?700:"normal"}),"hsl(257,60%,50%)"),P=o.b.div.withConfig({displayName:"SpeakerCard",componentId:"sc-1bb28a2-3"})(["font-size:1em;margin:2.5% 1%;color:black;font-weight:",";box-shadow:5px 5px 20px rgba(0,0,0,0.5);border-radius:20px;overflow:hidden;width:390px;img{width:100%;margin-bottom:-5px;}transition:300ms;&:hover{transform:scale(1.02);}@media (max-width:1280px){width:310px;}@media screen and (max-width:663px){width:390px;}@media screen and (max-width:450px){width:310px;}"],(function(e){return e.bold?700:"normal"})),W=o.b.h2.withConfig({displayName:"SpeakerCard__Title",componentId:"sc-1bb28a2-4"})(["font-size:1.5em;line-height:1.4;font-weight:normal;margin:0px 0;padding:0;color:rgba(255,255,255,0.85);@media screen and (max-width:1280px){font-size:1.27em;}@media screen and (max-width:663px){font-size:1.5em;}@media screen and (max-width:450px){font-size:1.27em;}"]),q=(o.b.div.withConfig({displayName:"SpeakerCard__Subtitle",componentId:"sc-1bb28a2-5"})(["font-size:1.5em;line-height:1.2;font-weight:bold;margin:5px 0;padding:0;color:rgba(255,255,255,0.9);@media screen and (max-width:1024px){font-size:1.5em;}"]),P);t.d(n,"g",(function(){return"hsl(239, 61%, 27%)"})),t.d(n,"b",(function(){return w})),t.d(n,"c",(function(){return q})),t.d(n,"e",(function(){return L})),t.d(n,"a",(function(){return U})),t.d(n,"d",(function(){return M})),t.d(n,"f",(function(){return W}))},cTJO:function(e,n,t){"use strict";var o=t("/HRN"),r=t("WaGi"),i=t("ZDA2"),a=t("/+P4"),s=t("N9n2"),l=t("5Uuq"),d=t("KI45");n.__esModule=!0,n.default=void 0;var c,p=d(t("LX0d")),f=t("QmWs"),u=l(t("q1tI")),m=d(t("nOHt")),h=t("g/15");function g(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var x=new p.default,b=window.IntersectionObserver,w={};function v(){return c||(b?c=new b((function(e){e.forEach((function(e){if(x.has(e.target)){var n=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),x.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var y=function(e){function n(e){var t;return o(this,n),(t=i(this,a(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,o=null;return function(r,i){if(o&&r===n&&i===t)return o;var a=e(r,i);return n=r,t=i,o=a,a}}((function(e,n){return{href:g(e),as:n?g(n):n}})),t.linkClicked=function(e){var n=e.currentTarget,o=n.nodeName,r=n.target;if("A"!==o||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,s=i.as;if(function(e){var n=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(a)){var l=window.location.pathname;a=(0,f.resolve)(l,a),s=s?(0,f.resolve)(l,s):a,e.preventDefault();var d=t.props.scroll;null==d&&(d=s.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](a,s,{shallow:t.props.shallow}).then((function(e){e&&d&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return s(n,e),r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href;return(0,f.resolve)(e,n)}},{key:"handleRef",value:function(e){var n=this,t=w[this.getHref()];this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),t||(this.cleanUpListeners=function(e,n){var t=v();return t?(t.observe(e),x.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}x.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();m.default.prefetch(e),w[e]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,o=this.formatUrls(this.props.href,this.props.as),r=o.href,i=o.as;"string"===typeof n&&(n=u.default.createElement("a",null,n));var a=u.Children.only(n),s={ref:function(n){e.handleRef(n),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(n):"object"===typeof a.ref&&(a.ref.current=n))},onMouseEnter:function(n){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(n),e.prefetch()},onClick:function(n){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=i||r);var l=t("P5f7").rewriteUrlForNextExport;return s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=l(s.href)),u.default.cloneElement(a,s)}}]),n}(u.Component);n.default=y},dVTT:function(e,n,t){t("aPfg")("Map")},g33z:function(e,n,t){"use strict";var o=t("Wu5q"),r=t("n3ko");e.exports=t("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var n=o.getEntry(r(this,"Map"),e);return n&&n.v},set:function(e,n){return o.def(r(this,"Map"),0===e?0:e,n)}},o,!0)}}]);