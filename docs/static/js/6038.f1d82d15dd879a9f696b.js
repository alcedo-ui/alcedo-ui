"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6038],{59141:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(8081),a=r.n(n),l=r(23645),c=r.n(l)()(a());c.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const p=c},68466:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(8081),a=r.n(n),l=r(23645),c=r.n(l)()(a());c.push([e.id,'.paper-examples .examples-wrapper::before,.paper-examples .examples-wrapper::after{display:table;content:""}.paper-examples .examples-wrapper::after{clear:both}.paper-examples .examples-wrapper .paper{width:80px;height:80px;float:left;margin:0 20px 20px 0}',""]);const p=c},1116:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(15671),a=r(43144),l=r(97326),c=r(60136),p=r(82963),o=r(61120),s=r(4942),d=r(37699),u=r(45697),i=r.n(u),m=r(82996),f=r(93379),h=r.n(f),y=r(7795),E=r.n(y),Z=r(90569),b=r.n(Z),v=r(3565),x=r.n(v),R=r(19216),w=r.n(R),P=r(44589),g=r.n(P),N=r(59141),O={};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}O.styleTagTransform=g(),O.setAttributes=x(),O.insert=b().bind(null,"head"),O.domAPI=E(),O.insertStyleElement=w(),h()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;var j=function(e){(0,c.Z)(i,e);var t,r,u=(t=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,p.Z)(this,e)});function i(e){var t;return(0,n.Z)(this,i),t=u.call(this,e),(0,s.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(T({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(i,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),i}(d.Component);j.propTypes={data:i().object};const D=j},25411:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var n=r(15671),a=r(43144),l=r(60136),c=r(82963),p=r(61120),o=r(37699),s=r(11253),d=r(24471),u=r(50704),i=r(1116);const m=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"Theme of the root element.","default":"Theme.DEFAULT"},"depth":{"type":"PropTypes.number","desc":"This number represents the zDepth of the paper shadow.","default":"1"},"nonRounded":{"type":"PropTypes.bool","desc":"If true,the paper container will have no border radius.","default":"false"},"isCircular":{"type":"PropTypes.bool","desc":"If true,the paper shape is circle.","default":"false"}}');var f=r(93379),h=r.n(f),y=r(7795),E=r.n(y),Z=r(90569),b=r.n(Z),v=r(3565),x=r.n(v),R=r(19216),w=r.n(R),P=r(44589),g=r.n(P),N=r(68466),O={};O.styleTagTransform=g(),O.setAttributes=x(),O.insert=b().bind(null,"head"),O.domAPI=E(),O.insertStyleElement=w(),h()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;var C=function(e){(0,l.Z)(h,e);var t,r,f=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,p.Z)(t);if(r){var a=(0,p.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){return(0,n.Z)(this,h),f.call(this,e)}return(0,a.Z)(h,[{key:"render",value:function(){return o.createElement("div",{className:"example paper-examples"},o.createElement("h2",{className:"example-title"},"Paper"),o.createElement("p",null,"A ",o.createElement("span",null,"Paper")," element is a basic container that can give depth to the page."),o.createElement("h2",{className:"example-title"},"Examples"),o.createElement(d.Z,null,o.createElement(u.Z,{className:"example-header",title:"Paper Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("div",{className:"examples-wrapper"},o.createElement("p",null,"Paper examples showing the range of zDepth."),o.createElement(s.Z,{depth:0}),o.createElement(s.Z,{depth:1}),o.createElement(s.Z,{depth:2}),o.createElement(s.Z,{depth:3}),o.createElement(s.Z,{depth:4}),o.createElement(s.Z,{depth:5}),o.createElement(s.Z,{depth:6}),o.createElement(s.Z,{depth:7}))))),o.createElement(d.Z,null,o.createElement(u.Z,{className:"example-header",title:"Non-Rounded Paper Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("div",{className:"examples-wrapper"},o.createElement("p",null,"Corners are rounded by default.Set the nonRounded property to true for square corners."),o.createElement(s.Z,{depth:0,nonRounded:!0}),o.createElement(s.Z,{depth:1,nonRounded:!0}),o.createElement(s.Z,{depth:2,nonRounded:!0}),o.createElement(s.Z,{depth:3,nonRounded:!0}),o.createElement(s.Z,{depth:4,nonRounded:!0}),o.createElement(s.Z,{depth:5,nonRounded:!0}),o.createElement(s.Z,{depth:6,nonRounded:!0}),o.createElement(s.Z,{depth:7,nonRounded:!0}))))),o.createElement(d.Z,null,o.createElement(u.Z,{className:"example-header",title:"Circular Paper Example"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("div",{className:"examples-wrapper"},o.createElement("p",null,"Pages are square by default. Set the isCircular property to true for round page."),o.createElement(s.Z,{depth:0,isCircular:!0}),o.createElement(s.Z,{depth:1,isCircular:!0}),o.createElement(s.Z,{depth:2,isCircular:!0}),o.createElement(s.Z,{depth:3,isCircular:!0}),o.createElement(s.Z,{depth:4,isCircular:!0}),o.createElement(s.Z,{depth:5,isCircular:!0}),o.createElement(s.Z,{depth:6,isCircular:!0}),o.createElement(s.Z,{depth:7,isCircular:!0}))))),o.createElement("h2",{className:"example-title"},"Properties"),o.createElement(i.Z,{data:m}))}}]),h}(o.Component);const T=C}}]);