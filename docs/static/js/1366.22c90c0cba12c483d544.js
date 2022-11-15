"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[1366],{15439:(e,t,n)=>{n.d(t,{Z:()=>B});var r=n(15671),a=n(43144),l=n(97326),c=n(60136),o=n(82963),s=n(61120),u=n(4942),i=n(37699),p=n(45697),m=n.n(p),d=n(14659),f=n(93379),h=n.n(f),b=n(7795),v=n.n(b),y=n(90569),Z=n.n(y),x=n(3565),E=n.n(x),g=n(19216),P=n.n(g),T=n(44589),k=n.n(T),N=n(59141),R={};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}R.styleTagTransform=k(),R.setAttributes=E(),R.insert=Z().bind(null,"head"),R.domAPI=v(),R.insertStyleElement=P(),h()(N.Z,R),N.Z&&N.Z.locals&&N.Z.locals;var C=function(e){(0,c.Z)(m,e);var t,n,p=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function m(e){var t;return(0,r.Z)(this,m),t=p.call(this,e),(0,u.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(w({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(m,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),m}(i.Component);C.propTypes={data:m().object};const B=C},75570:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(15671),a=n(43144),l=n(60136),c=n(82963),o=n(61120),s=n(37699),u=n(83035),i=n(81182),p=n(46748),m=n(15439);const d=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The ButtonCheckbox theme.","default":"Theme.DEFAULT"},"activatedTheme":{"type":"PropTypes.oneOf","desc":"The ButtonCheckbox activated theme.","default":"Theme.PRIMARY"},"title":{"type":"PropTypes.string","desc":"The title of the ButtonCheckbox."},"text":{"type":"PropTypes.string","desc":"The text of the button."},"value":{"type":"PropTypes.bool","desc":"If true,the button will be in active status.","default":"false"},"disabled":{"type":"PropTypes.bool","desc":"Disables the button if set to true.","default":"false"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."}}');var f=n(93379),h=n.n(f),b=n(7795),v=n.n(b),y=n(90569),Z=n.n(y),x=n(3565),E=n.n(x),g=n(19216),P=n.n(g),T=n(44589),k=n.n(T),N=n(99885),R={};R.styleTagTransform=k(),R.setAttributes=E(),R.insert=Z().bind(null,"head"),R.domAPI=v(),R.insertStyleElement=P(),h()(N.Z,R),N.Z&&N.Z.locals&&N.Z.locals;var O=function(e){(0,l.Z)(h,e);var t,n,f=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){return(0,r.Z)(this,h),f.call(this,e)}return(0,a.Z)(h,[{key:"render",value:function(){return s.createElement("div",{className:"example button-checkbox-examples"},s.createElement("h2",{className:"example-title"},"ButtonCheckbox"),s.createElement("p",null,s.createElement("span",null,"ButtonCheckbox")," is a checkbox use button style."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(i.Z,null,s.createElement(p.Z,{className:"example-header",title:"Basic"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,s.createElement("code",null,"ButtonCheckbox")," simple example."),s.createElement("label",null,"Number"),s.createElement(u.Z,{text:"1"}),s.createElement(u.Z,{text:"2"}),s.createElement(u.Z,{text:"3"}),s.createElement(u.Z,{text:"4"}),s.createElement(u.Z,{text:"5"}))))),s.createElement(i.Z,null,s.createElement(p.Z,{className:"example-header",title:"With value"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"Set the ",s.createElement("code",null,"value")," property to true for ButtonCheckbox using active status."),s.createElement("label",null,"Number"),s.createElement(u.Z,{text:"1",value:!0}),s.createElement(u.Z,{text:"2",value:!0}),s.createElement(u.Z,{text:"3",value:!0}),s.createElement(u.Z,{text:"4",value:!0}),s.createElement(u.Z,{text:"5",value:!0}))))),s.createElement(i.Z,null,s.createElement(p.Z,{className:"example-header",title:"With disabled"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"Set the ",s.createElement("code",null,"disabled")," property to true for disabling the ButtonCheckbox."),s.createElement("label",null,"Number"),s.createElement(u.Z,{text:"one",value:!0,disabled:!0}),s.createElement(u.Z,{text:"two",disabled:!0}),s.createElement(u.Z,{text:"three",value:!0}),s.createElement(u.Z,{text:"four",disabled:!0}),s.createElement(u.Z,{text:"five",value:!0}))))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(m.Z,{data:d}))}}]),h}(s.Component);const w=O},83035:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(87462),a=n(45987),l=n(15671),c=n(43144),o=n(97326),s=n(60136),u=n(82963),i=n(61120),p=n(4942),m=n(37699),d=n(45697),f=n.n(d),h=n(41844),b=n.n(h),v=n(88550),y=n(32371),Z=n(64997),x=n(62013),E=["className","theme","activatedTheme","text"];var g=function(e){(0,s.Z)(f,e);var t,n,d=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function f(e){var t;(0,l.Z)(this,f);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t=d.call.apply(d,[this,e].concat(r)),(0,p.Z)((0,o.Z)(t),"handleClick",(function(){var e=!t.state.value;t.setState({value:e},(function(){var n=t.props,r=n.disabled,a=n.onChange;!r&&a&&a(e)}))})),t.state={value:!!e.value},t}return(0,c.Z)(f,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.theme,l=e.activatedTheme,c=e.text,o=(0,a.Z)(e,E),s=this.state.value;return m.createElement(v.Z,(0,r.Z)({},o,{className:b()("button-checkbox",(0,p.Z)({activated:s},t,t)),value:c,isRounded:!0,theme:s?l:n,onClick:this.handleClick}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:x.Z.getDerivedState(e,t,"value")}}}]),f}(m.Component);(0,p.Z)(g,"Theme",y.Z),g.propTypes={className:f().string,style:f().object,theme:f().oneOf(Z.ZP.enumerateValue(y.Z)),activatedTheme:f().oneOf(Z.ZP.enumerateValue(y.Z)),title:f().string,text:f().string,value:f().bool,disabled:f().bool,onChange:f().func},g.defaultProps={theme:y.Z.DEFAULT,activatedTheme:y.Z.PRIMARY,value:!1,disabled:!1};const P=g},59141:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),a=n.n(r),l=n(23645),c=n.n(l)()(a());c.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=c},99885:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),a=n.n(r),l=n(23645),c=n.n(l)()(a());c.push([e.id,'.button-checkbox-examples label{margin-right:10px}.button-checkbox-examples .base-button{margin:0 10px 10px 0}.button-checkbox-examples .field-group{float:none}.button-checkbox-examples .field-group::before,.button-checkbox-examples .field-group::after{display:table;content:""}.button-checkbox-examples .field-group::after{clear:both}',""]);const o=c}}]);