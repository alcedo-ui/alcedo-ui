"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[1689],{51689:(e,t,o)=>{o.d(t,{Z:()=>O});var n=o(87462),l=o(45987),i=o(15671),s=o(43144),a=o(97326),c=o(60136),r=o(82963),u=o(61120),d=o(4942),p=o(37699),f=o(45697),b=o.n(f),Z=o(59521),h=o(46058),m=o(74324),v=o(88550),C=o(55235),B=o(32371),k=o(75717),y=o(41844),g=o.n(y),T=o(64997),R=o(2849),E=["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"];var M=function(e){(0,c.Z)(b,e);var t,o,f=(t=b,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(o){var l=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,r.Z)(this,e)});function b(e){var t;(0,i.Z)(this,b);for(var o=arguments.length,n=new Array(o>1?o-1:0),l=1;l<o;l++)n[l-1]=arguments[l];return t=f.call.apply(f,[this,e].concat(n)),(0,d.Z)((0,a.Z)(t),"getEl",(function(){var e,o,n;return null===(e=t.pop)||void 0===e||null===(o=e.current)||void 0===o||null===(n=o.getEl)||void 0===n?void 0:n.call(o)})),(0,d.Z)((0,a.Z)(t),"resetPosition",(function(){var e,o,n;null===(e=t.pop)||void 0===e||null===(o=e.current)||void 0===o||null===(n=o.resetPosition)||void 0===n||n.call(o)})),(0,d.Z)((0,a.Z)(t),"handleOkButtonClick",(function(){var e=t.props,o=e.visible,n=e.onOKButtonClick;o&&(null==n||n((function(){t.setState({visible:!1},(function(){var e,o;return null===(e=(o=t.props).onRequestClose)||void 0===e?void 0:e.call(o)}))})))})),(0,d.Z)((0,a.Z)(t),"handleCancelButtonClick",(function(){var e,o;null===(e=(o=t.props).onCancelButtonClick)||void 0===e||e.call(o),t.setState({visible:!1},(function(){var e,o;return null===(e=(o=t.props).onRequestClose)||void 0===e?void 0:e.call(o)}))})),(0,d.Z)((0,a.Z)(t),"handleCloseButtonClick",(function(){var e,o;null===(e=(o=t.props).onCloseButtonClick)||void 0===e||e.call(o),t.setState({visible:!1},(function(){var e,o;return null===(e=(o=t.props).onRequestClose)||void 0===e?void 0:e.call(o)}))})),(0,d.Z)((0,a.Z)(t),"handleRender",(function(){var e,o;R.Z.push((0,a.Z)(t),{shouldLockBody:t.props.showModal});for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];null===(e=(o=t.props).onRender)||void 0===e||e.call.apply(e,[o].concat(l))})),(0,d.Z)((0,a.Z)(t),"handleDestroy",(function(){var e,o;R.Z.pop((0,a.Z)(t));for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];null===(e=(o=t.props).onDestroy)||void 0===e||e.call.apply(e,[o].concat(l))})),t.pop=(0,p.createRef)(),t}return(0,s.Z)(b,[{key:"componentWillUnmount",value:function(){R.Z.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,o=t.children,i=t.className,s=t.modalClassName,a=t.position,c=t.disabled,r=t.showModal,u=t.title,f=t.buttons,b=t.isLoading,B=t.visible,k=t.okButtonVisible,y=t.okButtonText,T=t.okButtonIconCls,R=t.okButtonTheme,M=t.okButtonDisabled,O=t.okButtonIsLoading,I=t.cancelButtonVisible,P=t.cancelButtonText,L=t.cancelButtonIconCls,N=t.cancelButtonDisabled,D=t.cancelButtonIsLoading,w=t.cancelButtonTheme,V=t.closeButtonVisible,A=t.closeIconCls,x=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,(0,l.Z)(t,E));return p.createElement(Z.Z,(0,n.Z)({},x,{ref:this.pop,className:g()("dialog",(0,d.Z)({},i,i)),position:a,visible:B,container:p.createElement(h.Z,{depth:6}),showModal:r,modalClassName:s,onRender:this.handleRender,onDestroy:this.handleDestroy}),(function(t){return p.createElement(p.Fragment,null,p.createElement("div",{className:"dialog-title"},u,V&&p.createElement(C.Z,{className:"dialog-title-close-button",iconCls:A,disabled:c,onClick:e.handleCloseButtonClick})),p.createElement("div",{className:"dialog-content"},"function"==typeof o?o(t&&t.querySelector(".dialog-content"),t):o),p.createElement("div",{className:"dialog-buttons"},f&&p.Children.map(f,(function(e){return(0,p.cloneElement)(e,{isLoading:e.props.isLoading||b,disabled:e.props.disabled||c})})),!f&&k&&p.createElement(v.Z,{className:"ok-button",value:y,iconCls:T,theme:R,disabled:M,isLoading:b||O,disableTouchRipple:!0,onClick:e.handleOkButtonClick}),!f&&I&&p.createElement(m.Z,{className:"cancel-button",value:P,iconCls:L,theme:w,disabled:N,isLoading:b||D,disableTouchRipple:!0,onClick:e.handleCancelButtonClick})))}))}}]),b}(p.Component);(0,d.Z)(M,"ButtonTheme",B.Z),(0,d.Z)(M,"Position",k.Z),M.propTypes={children:b().any,className:b().string,modalClassName:b().string,style:b().object,parentEl:b().object,position:b().oneOf(T.ZP.enumerateValue(k.Z)),disabled:b().bool,visible:b().bool,showModal:b().bool,title:b().any,isBlurClose:b().bool,isLoading:b().bool,okButtonVisible:b().bool,okButtonText:b().string,okButtonIconCls:b().string,okButtonDisabled:b().bool,okButtonIsLoading:b().bool,okButtonTheme:b().oneOf(T.ZP.enumerateValue(B.Z)),cancelButtonVisible:b().bool,cancelButtonText:b().string,cancelButtonIconCls:b().string,cancelButtonDisabled:b().bool,cancelButtonIsLoading:b().bool,cancelButtonTheme:b().oneOf(T.ZP.enumerateValue(B.Z)),closeButtonVisible:b().bool,closeIconCls:b().string,isEscClose:b().bool,buttons:b().any,onRender:b().func,onRequestClose:b().func,onOKButtonClick:b().func,onCancelButtonClick:b().func,onCloseButtonClick:b().func,onDestroy:b().func,onModalMouseDown:b().func,onModalMouseMove:b().func,onModalMouseUp:b().func,onModalMouseEnter:b().func,onModalMouseLeave:b().func,onModalClick:b().func},M.defaultProps={parentEl:document.body,position:k.Z.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:B.Z.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:B.Z.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};const O=M},74324:(e,t,o)=>{o.d(t,{Z:()=>T});var n=o(87462),l=o(45987),i=o(15671),s=o(43144),a=o(97326),c=o(60136),r=o(82963),u=o(61120),d=o(4942),p=o(37699),f=o(45697),b=o.n(f),Z=o(41844),h=o.n(Z),m=o(3628),v=o(95857),C=o(32371),B=o(75717),k=o(64997),y=["className"];var g=function(e){(0,c.Z)(b,e);var t,o,f=(t=b,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(o){var l=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,r.Z)(this,e)});function b(e){var t;(0,i.Z)(this,b);for(var o=arguments.length,n=new Array(o>1?o-1:0),l=1;l<o;l++)n[l-1]=arguments[l];return t=f.call.apply(f,[this,e].concat(n)),(0,d.Z)((0,a.Z)(t),"startRipple",(function(e,o){t.buttonInstance&&t.buttonInstance.startRipple(e,o)})),(0,d.Z)((0,a.Z)(t),"endRipple",(function(){t.buttonInstance&&t.buttonInstance.endRipple()})),(0,d.Z)((0,a.Z)(t),"triggerRipple",(function(e,o){t.buttonInstance&&t.buttonInstance.triggerRipple(e,o)})),t.button=(0,p.createRef)(),t.buttonInstance=null,t}return(0,s.Z)(b,[{key:"componentDidMount",value:function(){this.buttonInstance=this.button&&this.button.current}},{key:"render",value:function(){var e=this.props,t=e.className,o=(0,l.Z)(e,y);return p.createElement(m.Z,(0,n.Z)({},o,{ref:this.button,className:h()("flat-button",(0,d.Z)({},t,t))}))}}]),b}(p.Component);(0,d.Z)(g,"Theme",C.Z),(0,d.Z)(g,"TipPosition",B.Z),g.propTypes={className:b().string,style:b().object,theme:b().oneOf(k.ZP.enumerateValue(C.Z)),isRounded:b().bool,isCircular:b().bool,title:b().string,value:b().any,type:b().string,disabled:b().bool,isLoading:b().bool,disableTouchRipple:b().bool,iconCls:b().string,rightIconCls:b().string,rippleDisplayCenter:b().bool,tip:b().string,tipPosition:b().oneOf(k.ZP.enumerateValue(v.Z.Position)),renderer:b().func,onClick:b().func},g.defaultProps={theme:C.Z.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:v.Z.Position.BOTTOM};const T=g},59521:(e,t,o)=>{o.d(t,{Z:()=>O});var n=o(87462),l=o(45987),i=o(15671),s=o(43144),a=o(97326),c=o(60136),r=o(82963),u=o(61120),d=o(4942),p=o(37699),f=o(45697),b=o.n(f),Z=o(33952),h=o(32371),m=o(75717),v=o(41844),C=o.n(v),B=o(64997),k=o(70885);function y(e){return(window.innerWidth-e.offsetWidth)/2}function g(e){return(window.innerHeight-e.offsetHeight)/2}function T(e,t,o){if(!t)return null;var n={};switch(o){case m.Z.TOP_LEFT:n.left=0,n.top=0;break;case m.Z.TOP:n.left=y(t),n.top=0;break;case m.Z.TOP_RIGHT:n.right=0,n.top=0;break;case m.Z.BOTTOM_LEFT:n.left=0,n.bottom=0;break;case m.Z.BOTTOM:n.left=y(t),n.bottom=0;break;case m.Z.BOTTOM_RIGHT:n.right=0,n.bottom=0;break;case m.Z.LEFT_TOP:n.left=0,n.top=0;break;case m.Z.LEFT:n.left=0,n.top=g(t);break;case m.Z.LEFT_BOTTOM:n.left=0,n.bottom=0;break;case m.Z.RIGHT_TOP:n.right=0,n.top=0;break;case m.Z.RIGHT:n.right=0,n.top=g(t);break;case m.Z.RIGHT_BOTTOM:n.right=0,n.bottom=0;break;case m.Z.CENTER:n.left=y(t),n.top=g(t)}return n}const R=function(e,t,o){if(t){var n=T(0,t,o);n&&(t.style.left=t.style.right=t.style.top=t.style.bottom="auto",Object.entries(n).forEach((function(e){var o=(0,k.Z)(e,2),n=o[0],l=o[1];return t.style[n]=l+"px"})))}};var E=["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose"];var M=function(e){(0,c.Z)(b,e);var t,o,f=(t=b,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(o){var l=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,r.Z)(this,e)});function b(e){var t;(0,i.Z)(this,b);for(var o=arguments.length,n=new Array(o>1?o-1:0),l=1;l<o;l++)n[l-1]=arguments[l];return t=f.call.apply(f,[this,e].concat(n)),(0,d.Z)((0,a.Z)(t),"getEl",(function(){var e,o,n;return(null===(e=t.pop)||void 0===e||null===(o=e.current)||void 0===o||null===(n=o.getEl)||void 0===n?void 0:n.call(o))||null})),(0,d.Z)((0,a.Z)(t),"resetPosition",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.getEl(),o=t.props,n=o.parentEl,l=o.position;R(n,e,l)})),t.pop=(0,p.createRef)(),t}return(0,s.Z)(b,[{key:"render",value:function(){var e,t=this.props,o=t.children,i=t.container,s=t.className,a=t.theme,c=t.position,r=t.isAnimated,u=(t.isEscClose,t.isBlurClose,(0,l.Z)(t,E));return p.createElement(Z.Z,(0,n.Z)({},u,{ref:this.pop,className:C()("position-pop",(e={},(0,d.Z)(e,"theme-".concat(a),a),(0,d.Z)(e,"position-pop-".concat(c),c),(0,d.Z)(e,"position-pop-animated",r),(0,d.Z)(e,s,s),e)),container:i,isAnimated:r,position:c,resetPosition:this.resetPosition}),(function(e){return"function"==typeof o?o(e):o}))}}]),b}(p.Component);(0,d.Z)(M,"Position",m.Z),(0,d.Z)(M,"Theme",h.Z),M.propTypes={children:b().any,className:b().string,style:b().object,visible:b().bool,theme:b().oneOf(B.ZP.enumerateValue(h.Z)),parentEl:b().object,position:b().oneOf(B.ZP.enumerateValue(m.Z)),isAnimated:b().bool,depth:b().number,isBlurClose:b().bool,isEscClose:b().bool,container:b().node,showModal:b().bool,modalClassName:b().string,shouldResetPosition:b().bool,onRender:b().func,onRendered:b().func,onDestroy:b().func,onDestroyed:b().func,onWheel:b().func,onModalMouseDown:b().func,onModalMouseMove:b().func,onModalMouseUp:b().func,onModalMouseEnter:b().func,onModalMouseLeave:b().func,onModalClick:b().func},M.defaultProps={parentEl:document.body,depth:2,visible:!1,theme:h.Z.DEFAULT,position:m.Z.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,container:p.createElement("div",null),showModal:!1,shouldResetPosition:!0};const O=M}}]);