(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[9468],{59141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const c=a},1116:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(6610),a=r(5991),c=r(63349),o=r(10379),l=r(46070),s=r(77608),i=r(96156),u=r(37699),p=r(45697),f=r.n(p),d=r(82996),m=r(93379),h=r.n(m),y=r(7795),v=r.n(y),Z=r(20695),T=r.n(Z),b=r(19216),E=r.n(b),R=r(59141),x={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=T()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}x.domAPI=v(),x.insertStyleElement=E(),h()(R.Z,x),R.Z&&R.Z.locals&&R.Z.locals;var O=function(e){(0,o.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function f(e){var t;return(0,n.Z)(this,f),t=p.call(this,e),(0,i.Z)((0,c.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(g({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(f,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(u.Component);O.propTypes={data:f().object};const w=O},210:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var n=r(6610),a=r(5991),c=r(10379),o=r(46070),l=r(77608),s=r(37699),i=r(43882),u=r(24471),p=r(50704),f=r(1116);const d=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"data":{"type":"PropTypes.array","desc":"The items data."}}');const m=function(e){(0,c.Z)(h,e);var t,r,m=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function h(e){var t;return(0,n.Z)(this,h),(t=m.call(this,e)).data=[{type:"header",headerText:"Now"},{theme:i.Z.Theme.PRIMARY,type:"title",contentText:"just a title.",hasBorder:!1,date:"2017-05-03 15:16:34"},{theme:i.Z.Theme.HIGHLIGHT,type:"title",hasBorder:!0,contentText:"just a title.",date:"2017-05-03 15:16:34"},{theme:i.Z.Theme.SUCCESS,type:"title",contentText:"just a title.",hasBorder:!0,date:"2017-05-03 15:16:34"},{theme:i.Z.Theme.WARNING,type:"title",hasBorder:!0,contentText:"example content.",date:"2017-05-06 12:52:12"},{theme:i.Z.Theme.ERROR,type:"title",hasBorder:!0,contentText:"welcome to China.",date:"2017-05-03 15:16:34"},{type:"header",headerText:"2016"}],t}return(0,a.Z)(h,[{key:"render",value:function(){return s.createElement("div",{className:"example time-line-examples"},s.createElement("h2",{className:"example-title"},"TimeLine"),s.createElement("p",null,"The TimeLine is used to display time flow information vertically."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(u.Z,null,s.createElement(p.Z,{className:"example-header",title:"TimeLine Example"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("p",null,"A simple TimeLine example."),s.createElement(i.Z,{data:this.data})))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(f.Z,{data:d}))}}]),h}(s.Component)},43882:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var n=r(6610),a=r(5991),c=r(10379),o=r(46070),l=r(77608),s=r(96156),i=r(37699),u=r(45697),p=r.n(u),f=r(41844),d=r.n(f);var m=function(e){(0,c.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){(0,n.Z)(this,p);for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return u.call.apply(u,[this,e].concat(r))}return(0,a.Z)(p,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.date,n=e.theme,a=e.type,c=e.headerText,o=e.contentText,l=e.hasBorder,u=e.style;return i.createElement("li",{className:d()("time-line-item",(0,s.Z)({},t,t)),style:u},a&&"header"==a?i.createElement("div",{className:"time-line-item-header"},c):a&&"title"==a?i.createElement("div",{className:"time-line-item-title time-line-item-title-".concat(n)},i.createElement("span",{className:"tl-date"},r),l?i.createElement("div",{className:"tl-content panel panel-".concat(n)},i.createElement("span",{className:"triangle triangle-".concat(n)}),i.createElement("span",{className:"tag tag-".concat(n)}),i.createElement("div",null,o)):i.createElement("div",{className:"tl-content"},o)):null)}}]),p}(i.Component);(0,s.Z)(m,"Type",{HEADER:"header",TITLE:"title"}),m.propTypes={className:p().string,style:p().object};const h=m;var y=r(87712),v=r(81540);var Z=function(e){(0,c.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){(0,n.Z)(this,p);for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];return u.call.apply(u,[this,e].concat(r))}return(0,a.Z)(p,[{key:"render",value:function(){var e=this.props,t=e.data,r=e.style,n=e.className;return i.createElement("ul",{className:d()("time-line",(0,s.Z)({},n,n)),style:r},t&&t.map((function(e,t){return i.createElement(h,{key:t,theme:e.theme,type:e.type,title:e.title,date:e.date,hasBorder:e.hasBorder,contentText:e.contentText,headerText:e.headerText})})))}}]),p}(i.Component);(0,s.Z)(Z,"Type",h.Type),(0,s.Z)(Z,"Theme",y.Z),Z.propTypes={className:p().string,style:p().object,data:p().arrayOf(p().shape({theme:p().oneOf(v.Z.enumerateValue(y.Z)),type:p().string,headerText:p().string,date:p().string,hasBorder:p().bool,contentText:p().string})).isRequired},Z.defaultProps={hasBorder:!0,title:"",type:""};const T=Z}}]);