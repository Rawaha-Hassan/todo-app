(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[916],{9916:(e,t,r)=>{"use strict";var n=r(1484),o=r(5442),i=r(884),a=r(2441),u=r(8743);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});var c=r(7677),s=r(4848),d=c._(r(6540)),l=c._(r(9626)),f={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var h={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},y=function(e){i(c,e);var t,r=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=u(c);return e=t?Reflect.construct(r,arguments,u(this).constructor):r.apply(this,arguments),a(this,e)});function c(){return n(this,c),r.apply(this,arguments)}return o(c,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||f[t]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:h.error,children:[(0,s.jsx)(l.default,{children:(0,s.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:h.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,s.jsx)("h1",{className:"next-error-h1",style:h.h1,children:t}):null,(0,s.jsx)("div",{style:h.wrap,children:(0,s.jsxs)("h2",{style:h.h2,children:[this.props.title||t?n:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}]),c}(d.default.Component);y.displayName="ErrorPage",y.getInitialProps=p,y.origGetInitialProps=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7770:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(7677)._(r(6540)).default.createContext({})},1010:(e,t)=>{"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},9626:(e,t,r)=>{"use strict";var n=r(7836),o=r(7494);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return h}});var a=r(7677),u=r(544),c=r(4848),s=u._(r(6540)),d=a._(r(9005)),l=r(7770),f=r(1602),p=r(1010);function h(e){void 0===e&&(e=!1);var t=[(0,c.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,c.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function y(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(8418);var v=["name","httpEquiv","charSet","itemProp"];function b(e,t){var r,a,u,c,d=t.inAmpMode;return e.reduce(y,[]).reverse().concat(h(d).reverse()).filter((r=new Set,a=new Set,u=new Set,c={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":a.has(e.type)?t=!1:a.add(e.type);break;case"meta":for(var i=0,s=v.length;i<s;i++){var d=v[i];if(e.props.hasOwnProperty(d)){if("charSet"===d)u.has(d)?t=!1:u.add(d);else{var l=e.props[d],f=c[d]||new Set;("name"!==d||!n)&&f.has(l)?t=!1:(f.add(l),c[d]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!d&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){o(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return a["data-href"]=a.href,a.href=void 0,a["data-optimized-fonts"]=!0,s.default.cloneElement(e,a)}return s.default.cloneElement(e,{key:r})})}var g=function(e){var t=e.children,r=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(f.HeadManagerContext);return(0,c.jsx)(d.default,{reduceComponentsToState:b,headManager:n,inAmpMode:(0,p.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9005:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var n=r(6540),o=n.useLayoutEffect,i=n.useEffect;function a(e){var t=e.headManager,r=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},8418:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}}}]);