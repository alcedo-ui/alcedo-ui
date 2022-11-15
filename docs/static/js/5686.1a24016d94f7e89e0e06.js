"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5686],{15439:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(15671),a=n(43144),l=n(97326),c=n(60136),o=n(82963),s=n(61120),i=n(4942),p=n(37699),m=n(45697),u=n.n(m),d=n(14659),f=n(93379),h=n.n(f),g=n(7795),y=n.n(g),E=n(90569),Z=n.n(E),v=n(3565),b=n.n(v),x=n(19216),w=n.n(x),N=n(44589),O=n.n(N),R=n(59141),C={};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}C.styleTagTransform=O(),C.setAttributes=b(),C.insert=Z().bind(null,"head"),C.domAPI=y(),C.insertStyleElement=w(),h()(R.Z,C),R.Z&&R.Z.locals&&R.Z.locals;var P=function(e){(0,c.Z)(u,e);var t,n,m=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function u(e){var t;return(0,r.Z)(this,u),t=m.call(this,e),(0,i.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(T({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(u,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(p.Component);P.propTypes={data:u().object};const L=P},19174:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var r=n(15671),a=n(43144),l=n(60136),c=n(82963),o=n(61120),s=n(37699),i=n(745),p=n(81182),m=n(46748),u=n(15439);const d=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"size":{"type":"PropTypes.oneOf","desc":"Set the size of loading,can use small or large.","default":"CircularLoading.Size.DEFAULT"},"theme":{"type":"PropTypes.oneOf","desc":"Set the theme of loading,can use highlight,success,error,warning.","default":""},"weight":{"type":"PropTypes.number","desc":"Set the CircularLoading border-width."},"type":{"type":"PropTypes.string","desc":"Set the border style of CircularLoading,can use solid,dotted.","default":"solid"}}');var f=n(93379),h=n.n(f),g=n(7795),y=n.n(g),E=n(90569),Z=n.n(E),v=n(3565),b=n.n(v),x=n(19216),w=n.n(x),N=n(44589),O=n.n(N),R=n(24427),C={};C.styleTagTransform=O(),C.setAttributes=b(),C.insert=Z().bind(null,"head"),C.domAPI=y(),C.insertStyleElement=w(),h()(R.Z,C),R.Z&&R.Z.locals&&R.Z.locals;var S=function(e){(0,l.Z)(h,e);var t,n,f=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){return(0,r.Z)(this,h),f.call(this,e)}return(0,a.Z)(h,[{key:"render",value:function(){return s.createElement("div",{className:"example circular-loading-examples"},s.createElement("h2",{className:"example-title"},"CircularLoading"),s.createElement("p",null,s.createElement("span",null,"CircularLoading"),"use to show pages and blocks loading status."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(p.Z,null,s.createElement(m.Z,{className:"example-header",title:"CircularLoading Example"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("p",null,"A simple CircularLoading example."),s.createElement(i.Z,{spanning:!0})))),s.createElement(p.Z,null,s.createElement(m.Z,{className:"example-header",title:"CircularLoading Size Example"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("p",null,"Set the size property to small or large for different size CircularLoading."),s.createElement(i.Z,{spanning:!0,size:"small"}),s.createElement(i.Z,{spanning:!0}),s.createElement(i.Z,{spanning:!0,size:"large"})))),s.createElement(p.Z,null,s.createElement(m.Z,{className:"example-header",title:"CircularLoading Theme Example"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("p",null,"Set the theme property for different theme CircularLoading."),s.createElement(i.Z,{spanning:!0}),s.createElement(i.Z,{spanning:!0,theme:i.Z.Theme.SUCCESS}),s.createElement(i.Z,{spanning:!0,theme:i.Z.Theme.ERROR}),s.createElement(i.Z,{spanning:!0,theme:i.Z.Theme.WARNING}),s.createElement(i.Z,{spanning:!0,theme:i.Z.Theme.HIGHLIGHT})))),s.createElement(p.Z,null,s.createElement(m.Z,{className:"example-header",title:"CircularLoading Type Example"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("p",null,"Set the type property for different border-style CircularLoading."),s.createElement(i.Z,{spanning:!0}),s.createElement(i.Z,{spanning:!0,type:"dotted"})))),s.createElement(p.Z,null,s.createElement(m.Z,{className:"example-header",title:"CircularLoading Weight Example"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("p",null,"Set the weight property for different border-width CircularLoading."),s.createElement(i.Z,{spanning:!0,weight:4,size:i.Z.Size.LARGE}),s.createElement(i.Z,{spanning:!0,weight:2,type:"dotted"})))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(u.Z,{data:d}))}}]),h}(s.Component);const T=S},59141:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),a=n.n(r),l=n(23645),c=n.n(l)()(a());c.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=c},24427:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),a=n.n(r),l=n(23645),c=n.n(l)()(a());c.push([e.id,".circular-loading-examples .circular-loading{margin-right:25px}",""]);const o=c}}]);