"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[9737],{15439:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(15671),r=n(43144),l=n(97326),o=n(60136),s=n(82963),i=n(61120),c=n(4942),p=n(37699),u=n(45697),d=n.n(u),m=n(14659),g=n(93379),h=n.n(g),f=n(7795),y=n.n(f),b=n(90569),x=n.n(b),Z=n(3565),v=n.n(Z),k=n(19216),E=n.n(k),N=n(44589),P=n.n(N),O=n(59141),w={};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}w.styleTagTransform=P(),w.setAttributes=v(),w.insert=x().bind(null,"head"),w.domAPI=y(),w.insertStyleElement=E(),h()(O.Z,w),O.Z&&O.Z.locals&&O.Z.locals;var D=function(e){(0,o.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,a.Z)(this,d),t=u.call(this,e),(0,c.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(R({name:n},t.props.data[n]));return e})),t}return(0,r.Z)(d,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(p.Component);D.propTypes={data:d().object};const C=D},88563:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(15671),r=n(43144),l=n(60136),o=n(82963),s=n(61120),i=n(37699),c=n(17803),p=n(81182),u=n(46748),d=n(46058),m=n(15439);const g=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"size":{"type":"PropTypes.number"},"animationDuration":{"type":"PropTypes.number","default":"1600"},"highlightColor":{"type":"PropTypes.string"},"highlightDegree":{"type":"PropTypes.number","default":"100"},"highlightTransparency":{"type":"PropTypes.number","default":"0.4"},"isCircular":{"type":"PropTypes.bool","default":"false"},"isAnimated":{"type":"PropTypes.bool","default":"true"}}');var h=n(93379),f=n.n(h),y=n(7795),b=n.n(y),x=n(90569),Z=n.n(x),v=n(3565),k=n.n(v),E=n(19216),N=n.n(E),P=n(44589),O=n.n(P),w=n(43836),j={};j.styleTagTransform=O(),j.setAttributes=k(),j.insert=Z().bind(null,"head"),j.domAPI=b(),j.insertStyleElement=N(),f()(w.Z,j),w.Z&&w.Z.locals&&w.Z.locals;var R=function(e){(0,l.Z)(f,e);var t,n,h=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function f(e){return(0,a.Z)(this,f),h.call(this,e)}return(0,r.Z)(f,[{key:"render",value:function(){return i.createElement("div",{className:"example skeleton-loading-examples"},i.createElement("h2",{className:"example-title"},"SkeletonLoading"),i.createElement("p",null,i.createElement("span",null,"SkeletonLoading"),"  use to show pages and blocks loading status."),i.createElement("h2",{className:"example-title"},"Examples"),i.createElement(p.Z,null,i.createElement(u.Z,{className:"example-header",title:"Basic"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("p",null,"A simple SkeletonLoading example."),i.createElement(c.Z,null)))),i.createElement(p.Z,null,i.createElement(u.Z,{className:"example-header",title:"Circle"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("p",null,"A circle SkeletonLoading example."),i.createElement(c.Z,{isCircular:!0,animationDuration:800})))),i.createElement(p.Z,null,i.createElement(u.Z,{className:"example-header",title:"Customized highlight"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("p",null,"Primary Color"),i.createElement(c.Z,{className:"skeleton-loading-examples-customized-highlight",highlightColor:"#506379",highlightDegree:120,highlightTransparency:.8}),i.createElement("p",null,"Highlight Color"),i.createElement(c.Z,{className:"skeleton-loading-examples-customized-highlight",highlightColor:"#38b1eb",highlightDegree:120,highlightTransparency:.8})))),i.createElement(p.Z,null,i.createElement(u.Z,{className:"example-header",title:"Card Loading"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement(d.Z,{className:"skeleton-loading-examples-card",depth:2},i.createElement(c.Z,{className:"skeleton-loading-examples-card-image"}),i.createElement("div",{className:"skeleton-loading-examples-card-content"},i.createElement("div",{className:"skeleton-loading-examples-card-user"},i.createElement(c.Z,{className:"skeleton-loading-examples-card-avatar",isCircular:!0}),i.createElement(c.Z,{className:"skeleton-loading-examples-card-name"})),i.createElement(c.Z,{className:"skeleton-loading-examples-card-paragraph"}),i.createElement(c.Z,{className:"skeleton-loading-examples-card-paragraph"}),i.createElement(c.Z,{className:"skeleton-loading-examples-card-paragraph"})))))),i.createElement("h2",{className:"example-title"},"Properties"),i.createElement(m.Z,{data:g}))}}]),f}(i.Component);const D=R},17803:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(4942),r=n(15671),l=n(43144),o=n(60136),s=n(82963),i=n(61120),c=n(37699),p=n(45697),u=n.n(p),d=n(41844),m=n.n(d),g=n(87943);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){(0,o.Z)(u,e);var t,n,p=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,i.Z)(t);if(n){var r=(0,i.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function u(e){(0,r.Z)(this,u);for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return p.call.apply(p,[this,e].concat(n))}return(0,l.Z)(u,[{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.style,l=t.size,o=t.animationDuration,s=t.highlightColor,i=t.highlightDegree,p=t.highlightTransparency,u=t.isCircular,d=t.isAnimated,h=(null===(e=(0,g.wK)(s))||void 0===e?void 0:e.join(","))||"255,255,255";return c.createElement("div",{className:m()("skeleton-loading",(0,a.Z)({circular:u,animated:d},n,n)),style:f(f({},r),{},{width:isNaN(l)?null:u?l:null,height:isNaN(l)?null:l,backgroundImage:isNaN(i)&&!h&&isNaN(p)?null:"linear-gradient(".concat(i,"deg, rgba(").concat(h,", 0) 40%, rgba(").concat(h,", ").concat(p,") 50%, rgba(").concat(h,", 0) 60%)"),animationDuration:isNaN(o)?null:"".concat(o,"ms")})})}}]),u}(c.Component);y.propTypes={className:u().string,style:u().object,size:u().number,animationDuration:u().number,highlightColor:u().string,highlightDegree:u().number,highlightTransparency:u().number,isCircular:u().bool,isAnimated:u().bool},y.defaultProps={animationDuration:1600,highlightDegree:100,highlightColorRgb:"#fff",highlightTransparency:.4,isCircular:!1,isAnimated:!0};const b=y},87943:(e,t,n)=>{n.d(t,{ZP:()=>s,wK:()=>o});var a=n(42982),r=n(70885),l=n(3682);function o(e){if(l.ZP.isHex(e)){var t="#"===e[0]?e.slice(1):e;return 3===t.length?t.split("").map((function(e){return parseInt("".concat(e).concat(e),16)})):[t.slice(0,2),t.slice(2,4),t.slice(4,6)].map((function(e){return parseInt(e,16)}))}}const s={hue2rgb:function(e){if(l.ZP.isDeg(e)){var t=e/360,n=Math.floor(6*t),a=Math.round(255*(6*t-n)),r=function(e){var t=[[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];return l.ZP.isPerCent(e)?t[Math.floor(6*e)]:t[0]}(t);return r[(2*n+1)%3]+=a*(l.ZP.isOdd(n)?-1:1),r}},rgb2hsb:function(e){if(!l.ZP.isRGB(e))return null;var t=(0,r.Z)(e,3),n=t[0],o=t[1],s=t[2],i=Math.max.apply(Math,(0,a.Z)(e)),c=Math.min.apply(Math,(0,a.Z)(e)),p=0;return i===n&&o>=s?p=60*(o-s)/(i-c):i===n&&o<s?p=60*(o-s)/(i-c)+360:i===o?p=60*(s-n)/(i-c)+120:i===s&&(p=60*(n-o)/(i-c)+240),[p?Math.round(p):p,0===i?0:(i-c)/i,i/255]},hsb2rgb:function(e){if(!l.ZP.isHSB(e))return null;var t=(0,r.Z)(e,3),n=t[0],a=t[1],o=t[2];n=360===n?0:n;var s=Math.floor(n/60)%6,i=n/60-s,c=o*(1-a),p=o*(1-i*a),u=o*(1-(1-i)*a),d=0,m=0,g=0;switch(s){case 0:d=o,m=u,g=c;break;case 1:d=p,m=o,g=c;break;case 2:d=c,m=o,g=u;break;case 3:d=c,m=p,g=o;break;case 4:d=u,m=c,g=o;break;case 5:d=o,m=c,g=p}return[Math.round(255*d),Math.round(255*m),Math.round(255*g)]},rgb2hex:function(e){if(e&&l.ZP.isRGB(e))return e.map((function(e){var t=e.toString(16);return t.length<2?"0".concat(t):t})).join("")},hex2rgb:o}},59141:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const s=o},43836:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(8081),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,".skeleton-loading-examples .skeleton-loading-examples-customized-highlight{margin-bottom:24px}.skeleton-loading-examples .skeleton-loading-examples-card{width:320px;border-radius:4px;overflow:hidden}.skeleton-loading-examples .skeleton-loading-examples-card .skeleton-loading-examples-card-image{height:160px;border-radius:0}.skeleton-loading-examples .skeleton-loading-examples-card .skeleton-loading-examples-card-content{padding:16px}.skeleton-loading-examples .skeleton-loading-examples-card .skeleton-loading-examples-card-content .skeleton-loading-examples-card-user{display:flex;align-items:center}.skeleton-loading-examples .skeleton-loading-examples-card .skeleton-loading-examples-card-content .skeleton-loading-examples-card-user .skeleton-loading-examples-card-avatar{width:48px;height:48px;margin-right:16px}.skeleton-loading-examples .skeleton-loading-examples-card .skeleton-loading-examples-card-content .skeleton-loading-examples-card-user .skeleton-loading-examples-card-name{flex:1}.skeleton-loading-examples .skeleton-loading-examples-card .skeleton-loading-examples-card-content .skeleton-loading-examples-card-paragraph{margin-top:16px}",""]);const s=o}}]);