"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[1435],{59141:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8081),a=r.n(n),c=r(23645),s=r.n(c)()(a());s.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const i=s},16738:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(8081),a=r.n(n),c=r(23645),s=r.n(c)()(a());s.push([e.id,".list-step-examples .step-ctrls{margin:30px 0 10px 0}.list-step-examples .step-ctrls .raised-button{margin-right:30px}",""]);const i=s},1116:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(15671),a=r(43144),c=r(97326),s=r(60136),i=r(82963),o=r(61120),l=r(4942),p=r(37699),u=r(45697),f=r.n(u),d=r(82996),h=r(93379),v=r.n(h),y=r(7795),m=r.n(y),b=r(90569),S=r.n(b),Z=r(3565),g=r.n(Z),O=r(19216),P=r.n(O),j=r(44589),w=r.n(j),C=r(59141),E={};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}E.styleTagTransform=w(),E.setAttributes=g(),E.insert=S().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=P(),v()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals;var k=function(e){(0,s.Z)(f,e);var t,r,u=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function f(e){var t;return(0,n.Z)(this,f),t=u.call(this,e),(0,l.Z)((0,c.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(x({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(f,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(p.Component);k.propTypes={data:f().object};const N=k},41175:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(15671),a=r(43144),c=r(97326),s=r(60136),i=r(82963),o=r(61120),l=r(4942),p=r(37699),u=r(31291),f=r(22944),d=r(24471),h=r(50704),v=r(1116);const y=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"steps":{"type":"PropTypes.array","desc":"The render content of step.","default":"[]"},"activatedStep":{"type":"PropTypes.number","desc":"Sets the step as active.","default":"0"},"finishedStep":{"type":"PropTypes.number","desc":"The final step.","default":"0"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when step change."}}');var m=r(93379),b=r.n(m),S=r(7795),Z=r.n(S),g=r(90569),O=r.n(g),P=r(3565),j=r.n(P),w=r(19216),C=r.n(w),E=r(44589),R=r.n(E),x=r(16738),k={};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}k.styleTagTransform=R(),k.setAttributes=j(),k.insert=O().bind(null,"head"),k.domAPI=Z(),k.insertStyleElement=C(),b()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;var T=function(e){(0,s.Z)(b,e);var t,r,m=(t=b,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function b(e){var t;return(0,n.Z)(this,b),t=m.call(this,e),(0,l.Z)((0,c.Z)(t),"updateStep",(function(e){t.setState(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))})),(0,l.Z)((0,c.Z)(t),"prev",(function(){t.setState({activatedStep:t.state.activatedStep-1})})),(0,l.Z)((0,c.Z)(t),"next",(function(){var e=t.state.activatedStep+1,r=t.state.finishedStep>e?t.state.finishedStep:e;t.setState({activatedStep:e,finishedStep:r})})),(0,l.Z)((0,c.Z)(t),"reset",(function(){t.setState({activatedStep:0,finishedStep:0})})),t.state={activatedStep:0,finishedStep:0},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this.state,t=e.activatedStep,r=e.finishedStep,n=[{value:"Basic",rightIconCls:"far fa-circle"},{value:"Accounts",rightIconCls:"far fa-circle"},{value:"Hotels",rightIconCls:"far fa-circle"},{value:"Sample Files",rightIconCls:"far fa-circle"},{value:"SFTP",rightIconCls:"far fa-circle"},{value:"Confirm",rightIconCls:"far fa-circle"}];return n.map((function(e,t){return r>=t&&(e.rightIconCls="fas fa-check-circle"),e})),p.createElement("div",{className:"example list-step-examples"},p.createElement("h2",{className:"example-title"},"ListStep"),p.createElement("p",null,"A ",p.createElement("span",null,"ListStep")," is an interface for users to show list numbered steps or for navigation. It just provides views, not handling logic (when the step is active, or when the step is completed, or how to move to the next step)."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(d.Z,null,p.createElement(h.Z,{className:"example-header",title:"ListStep Example"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("p",null,"A simple ",p.createElement("code",null,"ListStep")," example."),p.createElement(u.Z,{steps:n,activatedStep:t,finishedStep:r,onChange:this.updateStep}),p.createElement("div",{className:"step-ctrls"},p.createElement(f.Z,{value:"Prev",iconCls:"fas fa-angle-left",disabled:t<=0,onClick:this.prev}),p.createElement(f.Z,{value:t<n.length-1?"Next":"Finish",rightIconCls:t<n.length-1?"fas fa-angle-right":"",disabled:t>=n.length,onClick:this.next}),p.createElement(f.Z,{value:"Reset",iconCls:"fas fa-undo",onClick:this.reset}))))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(v.Z,{data:y}))}}]),b}(p.Component);const D=T},31291:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(15671),a=r(43144),c=r(97326),s=r(60136),i=r(82963),o=r(61120),l=r(4942),p=r(37699),u=r(45697),f=r.n(u),d=r(87462),h=r(41844),v=r.n(h),y=r(22944),m=r(87712);var b=function(e){(0,s.Z)(f,e);var t,r,u=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function f(e){var t;(0,n.Z)(this,f);for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return t=u.call.apply(u,[this,e].concat(a)),(0,l.Z)((0,c.Z)(t),"handleClick",(function(){var e=t.props,r=e.activatedStep,n=e.finishedStep,a=e.index,c=e.onClick;r!==a&&n>=a&&c(a)})),t}return(0,a.Z)(f,[{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.style,a=t.activatedStep,c=t.finishedStep,s=t.index,i=t.data,o=a===s?"activated":c>=s?"finished":"";return p.createElement(y.Z,(0,d.Z)({},i,{className:v()("list-step-item",(e={},(0,l.Z)(e,o,o),(0,l.Z)(e,r,r),e)),style:n,theme:"activated"===o?m.Z.HIGHLIGHT:"finished"===o?m.Z.PRIMARY:"",value:i.value,onClick:this.handleClick}))}}]),f}(p.Component);(0,l.Z)(b,"Theme",m.Z),b.propTypes={className:f().string,style:f().object,index:f().number,activatedStep:f().number,finishedStep:f().number,data:f().object,onClick:f().func},b.defaultProps={index:0,activatedStep:0,finishedStep:0};const S=b;var Z=r(19605);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(e){(0,s.Z)(f,e);var t,r,u=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var a=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function f(e){var t;(0,n.Z)(this,f);for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return t=u.call.apply(u,[this,e].concat(a)),(0,l.Z)((0,c.Z)(t),"handleClick",(function(e){var r=t.props.onChange;t.setState({activatedStep:e},(function(){r&&r({activatedStep:e,finishedStep:t.state.finishedStep})}))})),t.state={activatedStep:e.activatedStep,finishedStep:e.finishedStep},t}return(0,a.Z)(f,[{key:"render",value:function(){var e=this,t=this.props,r=t.className,n=t.style,a=t.steps,c=this.state,s=c.activatedStep,i=c.finishedStep;return p.createElement("div",{className:v()("list-step",(0,l.Z)({},r,r)),style:n},a&&a.map((function(t,r){return p.createElement(S,{key:r,index:r,className:t.className,style:O(O({},t.style),{},{zIndex:a.length-r}),activatedStep:s,finishedStep:i,data:t,onClick:e.handleClick})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,activatedStep:Z.Z.getDerivedState(e,t,"activatedStep"),finishedStep:Z.Z.getDerivedState(e,t,"finishedStep")}}}]),f}(p.Component);P.propTypes={className:f().string,style:f().object,steps:f().arrayOf(f().shape({className:f().string,style:f().object,title:f().string})).isRequired,activatedStep:f().number,finishedStep:f().number,onChange:f().func},P.defaultProps={steps:[],activatedStep:0,finishedStep:0};const j=P}}]);