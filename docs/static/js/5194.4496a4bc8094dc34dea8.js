"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5194],{59141:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const l=a},33541:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".badge-examples .examples-wrapper .badge-wrapper{margin-right:16px}.badge-examples .examples-wrapper .icon-button{font-size:20px}",""]);const l=a},1116:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(15671),a=r(43144),l=r(97326),c=r(60136),o=r(82963),s=r(61120),p=r(4942),u=r(37699),i=r(45697),f=r.n(i),m=r(82996),d=r(93379),y=r.n(d),v=r(7795),Z=r.n(v),h=r(90569),E=r.n(h),b=r(3565),R=r.n(b),w=r(19216),N=r.n(w),g=r(44589),T=r.n(g),O=r(59141),x={};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}x.styleTagTransform=T(),x.setAttributes=R(),x.insert=E().bind(null,"head"),x.domAPI=Z(),x.insertStyleElement=N(),y()(O.Z,x),O.Z&&O.Z.locals&&O.Z.locals;var C=function(e){(0,c.Z)(f,e);var t,r,i=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function f(e){var t;return(0,n.Z)(this,f),t=i.call(this,e),(0,p.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(B({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(f,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(u.Component);C.propTypes={data:f().object};const j=C},26430:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var n=r(15671),a=r(43144),l=r(60136),c=r(82963),o=r(61120),s=r(37699),p=r(56932),u=r(96453),i=r(24471),f=r(50704),m=r(1116);const d=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"visible":{"type":"PropTypes.bool","default":"true"},"type":{"type":"PropTypes.oneOf","default":"BadgeType.DOT"},"value":{"type":"PropTypes.number"},"overflowValue":{"type":"PropTypes.number"},"overflowRenderer":{"type":"PropTypes.any"}}');var y=r(93379),v=r.n(y),Z=r(7795),h=r.n(Z),E=r(90569),b=r.n(E),R=r(3565),w=r.n(R),N=r(19216),g=r.n(N),T=r(44589),O=r.n(T),x=r(33541),P={};P.styleTagTransform=O(),P.setAttributes=w(),P.insert=b().bind(null,"head"),P.domAPI=h(),P.insertStyleElement=g(),v()(x.Z,P),x.Z&&x.Z.locals&&x.Z.locals;const B=function(e){(0,l.Z)(v,e);var t,r,y=(t=v,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function v(e){return(0,n.Z)(this,v),y.call(this,e)}return(0,a.Z)(v,[{key:"render",value:function(){return s.createElement("div",{className:"example badge-examples"},s.createElement("h2",{className:"example-title"},"Badge"),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(i.Z,null,s.createElement(f.Z,{className:"example-header",title:"Dot"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement(p.Z,null,s.createElement(u.Z,{iconCls:"far fa-bell"})),s.createElement(p.Z,null,s.createElement(u.Z,{iconCls:"fas fa-bullhorn"})),s.createElement(p.Z,null,s.createElement(u.Z,{iconCls:"far fa-envelope"})),s.createElement(p.Z,null,s.createElement(u.Z,{iconCls:"fas fa-inbox"})),s.createElement(p.Z,null,s.createElement(u.Z,{iconCls:"fas fa-phone"})))))),s.createElement(i.Z,null,s.createElement(f.Z,{className:"example-header",title:"Number"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:0},s.createElement(u.Z,{iconCls:"far fa-bell"})),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:9},s.createElement(u.Z,{iconCls:"fas fa-bullhorn"})),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:99},s.createElement(u.Z,{iconCls:"far fa-envelope"})),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:999},s.createElement(u.Z,{iconCls:"fas fa-inbox"})),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:9999,overflowValue:999},s.createElement(u.Z,{iconCls:"fas fa-phone"})))))),s.createElement(i.Z,null,s.createElement(f.Z,{className:"example-header",title:"Use Badge Only"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:0}),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:9}),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:99}),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:999}),s.createElement(p.Z,{type:p.Z.Type.NUMBER,value:9999,overflowValue:999}))))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(m.Z,{data:d}))}}]),v}(s.Component)},56932:(e,t,r)=>{r.d(t,{Z:()=>R});var n=r(87462),a=r(45987),l=r(15671),c=r(43144),o=r(97326),s=r(60136),p=r(82963),u=r(61120),i=r(4942),f=r(37699),m=r(45697),d=r.n(m);const y={DOT:"dot",NUMBER:"number"};var v=r(41844),Z=r.n(v),h=r(81540),E=["children","className","style","visible","type","value","overflowValue","overflowRenderer"];var b=function(e){(0,s.Z)(d,e);var t,r,m=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,p.Z)(this,e)});function d(e){var t;(0,l.Z)(this,d);for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return t=m.call.apply(m,[this,e].concat(n)),(0,i.Z)((0,o.Z)(t),"handleOverflow",(function(){var e=t.props,r=e.value,n=e.overflowValue,a=e.overflowRenderer;return a?"function"==typeof a?null==a?void 0:a(r,n):a:"".concat(n,"+")})),(0,i.Z)((0,o.Z)(t),"handleValue",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value,r=t.props,n=r.type,a=r.overflowValue;return n!==y.NUMBER?null:null==a||e<=a?e:t.handleOverflow()})),t}return(0,c.Z)(d,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,l=e.style,c=e.visible,o=e.type,s=(e.value,e.overflowValue,e.overflowRenderer,(0,a.Z)(e,E));return f.createElement("span",(0,n.Z)({},s,{className:Z()("badge-wrapper",(0,i.Z)({"no-child":!t},r,r)),style:l}),t,c?f.createElement("sup",{className:Z()("badge","badge-".concat(o))},this.handleValue()):null)}}]),d}(f.Component);(0,i.Z)(b,"Type",y),b.propTypes={children:d().any,className:d().string,style:d().object,visible:d().bool,type:d().oneOf(h.Z.enumerateValue(y)),value:d().number,overflowValue:d().number,overflowRenderer:d().any},b.defaultProps={visible:!0,type:y.DOT};const R=b}}]);