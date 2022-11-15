"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[3574],{15439:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(15671),a=n(43144),s=n(97326),i=n(60136),c=n(82963),o=n(61120),l=n(4942),p=n(37699),u=n(45697),f=n.n(u),d=n(14659),h=n(93379),v=n.n(h),y=n(7795),m=n.n(y),b=n(90569),S=n.n(b),Z=n(3565),g=n.n(Z),O=n(19216),P=n.n(O),j=n(44589),w=n.n(j),E=n(59141),C={};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}C.styleTagTransform=w(),C.setAttributes=g(),C.insert=S().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=P(),v()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals;var N=function(e){(0,i.Z)(f,e);var t,n,u=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),t=u.call(this,e),(0,l.Z)((0,s.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(R({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(f,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(p.Component);N.propTypes={data:f().object};const k=N},85602:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(15671),a=n(43144),s=n(97326),i=n(60136),c=n(82963),o=n(61120),l=n(4942),p=n(37699),u=n(9900),f=n(88550),d=n(81182),h=n(46748),v=n(15439);const y=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"steps":{"type":"PropTypes.array","desc":"The render content of step."},"activatedStep":{"type":"PropTypes.number","desc":"Sets the step as active.","default":"0"},"finishedStep":{"type":"PropTypes.number","desc":"The final step.","default":"0"},"showFinishedStepIcon":{"type":"PropTypes.bool","default":"true"},"finishedStepIconCls":{"type":"PropTypes.string","default":"fas fa-check"},"disabled":{"type":"PropTypes.bool","default":"false"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when step change."}}');var m=n(93379),b=n.n(m),S=n(7795),Z=n.n(S),g=n(90569),O=n.n(g),P=n(3565),j=n.n(P),w=n(19216),E=n.n(w),C=n(44589),x=n.n(C),R=n(79517),N={};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}N.styleTagTransform=x(),N.setAttributes=j(),N.insert=O().bind(null,"head"),N.domAPI=Z(),N.insertStyleElement=E(),b()(R.Z,N),R.Z&&R.Z.locals&&R.Z.locals;var T=function(e){(0,i.Z)(b,e);var t,n,m=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function b(e){var t;return(0,r.Z)(this,b),t=m.call(this,e),(0,l.Z)((0,s.Z)(t),"updateStep",(function(e){t.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))})),(0,l.Z)((0,s.Z)(t),"prev",(function(){t.setState({activatedStep:t.state.activatedStep-1})})),(0,l.Z)((0,s.Z)(t),"next",(function(){var e=t.state.activatedStep+1,n=t.state.finishedStep>e?t.state.finishedStep:e;t.setState({activatedStep:e,finishedStep:n})})),(0,l.Z)((0,s.Z)(t),"reset",(function(){t.setState({activatedStep:0,finishedStep:0})})),t.state={activatedStep:0,finishedStep:0},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this.state,t=e.activatedStep,n=e.finishedStep,r=[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"},{title:"Step 4"}];return p.createElement("div",{className:"example point-step-examples"},p.createElement("h2",{className:"example-title"},"PointStep"),p.createElement("p",null,"A ",p.createElement("span",null,"PointStep")," is an interface for users to show linear steps or for navigation.It just provides views, not handling logic (when the step is active, or when the step is completed, or how to move to the next step)."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(d.Z,null,p.createElement(h.Z,{className:"example-header",title:"PointStep Example"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("p",null,"A simple ",p.createElement("code",null,"PointStep")," example."),p.createElement(u.Z,{steps:r,activatedStep:t,finishedStep:n,onChange:this.updateStep}),p.createElement("div",{className:"step-ctrls"},p.createElement(f.Z,{value:"Prev",iconCls:"fas fa-angle-left",disabled:t<=0,onClick:this.prev}),p.createElement(f.Z,{value:t<r.length-1?"Next":"Finish",rightIconCls:t<r.length-1?"fas fa-angle-right":"",disabled:t>=r.length,onClick:this.next}),p.createElement(f.Z,{value:"Reset",iconCls:"fas fa-undo",onClick:this.reset}))))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(v.Z,{data:y}))}}]),b}(p.Component);const D=T},9900:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(15671),a=n(43144),s=n(97326),i=n(60136),c=n(82963),o=n(61120),l=n(4942),p=n(37699),u=n(45697),f=n.n(u),d=n(41844),h=n.n(d);var v=function(e){(0,i.Z)(f,e);var t,n,u=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,r.Z)(this,f);for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return t=u.call.apply(u,[this,e].concat(a)),(0,l.Z)((0,s.Z)(t),"getRightBarClassName",(function(){var e=t.props,n=e.activatedStep,r=e.finishedStep,a=e.index;return r>a||n>a?" full":n===a||r===a?"":" hidden"})),(0,l.Z)((0,s.Z)(t),"handleClick",(function(e){var n=t.props,r=n.activatedStep,a=n.finishedStep,s=n.index,i=n.disabled,c=n.onClick;!i&&r!==s&&a>=s&&c&&c(s,e)})),t}return(0,a.Z)(f,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.activatedStep,a=e.finishedStep,s=e.index,i=e.value,c=e.isFirst,o=e.isLast,u=e.disabled;return p.createElement("div",{className:h()("point-step-item",r==s?" activated":a>=s?" finished":"",(0,l.Z)({first:c,last:o,disabled:u},t,t)),style:n},p.createElement("div",{className:"bg-bar"}),p.createElement("div",{className:"bg-round"}),p.createElement("div",{className:"round",onClick:this.handleClick}),p.createElement("div",{className:"title"},i.title))}}]),f}(p.Component);v.propTypes={className:f().string,style:f().object,activatedStep:f().number,finishedStep:f().number,index:f().number,value:f().object,isFirst:f().bool,isLast:f().bool,disabled:f().bool,onClick:f().func},v.defaultProps={activatedStep:0,finishedStep:0,index:0,value:{},isFirst:!0,isLast:!1,disabled:!1};const y=v;var m=n(62013);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){(0,i.Z)(f,e);var t,n,u=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,r.Z)(this,f);for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return t=u.call.apply(u,[this,e].concat(a)),(0,l.Z)((0,s.Z)(t),"handleClick",(function(e){var n=t.props.onChange;t.setState({activatedStep:e},(function(){n&&n({activatedStep:e,finishedStep:t.state.finishedStep})}))})),t.state={activatedStep:e.activatedStep,finishedStep:e.finishedStep},t}return(0,a.Z)(f,[{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,a=t.steps,s=t.showFinishedStepIcon,i=t.finishedStepIconCls,c=t.disabled,o=this.state,u=o.activatedStep,f=o.finishedStep;return p.createElement("div",{className:h()("point-step",(0,l.Z)({},n,n)),style:r},a&&a.map((function(t,n){return p.createElement(y,{key:n,index:n,className:t.className,style:S(S({},t.style),{},{width:"".concat(100/a.length,"%"),zIndex:a.length-n}),activatedStep:u,finishedStep:f,value:t,isFirst:0===n,isLast:n===a.length-1,showFinishedStepIcon:s,finishedStepIconCls:i,disabled:c,onClick:e.handleClick})})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,activatedStep:m.Z.getDerivedState(e,t,"activatedStep"),finishedStep:m.Z.getDerivedState(e,t,"finishedStep")}}}]),f}(p.Component);Z.propTypes={className:f().string,style:f().object,steps:f().arrayOf(f().shape({className:f().string,style:f().object,title:f().string})).isRequired,activatedStep:f().number,finishedStep:f().number,showFinishedStepIcon:f().bool,finishedStepIconCls:f().string,disabled:f().bool,onChange:f().func},Z.defaultProps={activatedStep:0,finishedStep:0,showFinishedStepIcon:!0,finishedStepIconCls:"fas fa-check",disabled:!1};const g=Z},59141:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8081),a=n.n(r),s=n(23645),i=n.n(s)()(a());i.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const c=i},79517:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8081),a=n.n(r),s=n(23645),i=n.n(s)()(a());i.push([e.id,".point-step-examples .step-ctrls{margin:30px 0 10px 0}.point-step-examples .step-ctrls .raised-button{margin-right:30px}",""]);const c=i}}]);