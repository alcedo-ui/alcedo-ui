(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{292:function(e,t,n){"use strict";var o=n(61),a=n.n(o),r=n(62),i=n.n(r),s=n(63),l=n.n(s),u=n(64),p=n.n(u),c=n(21),d=n.n(c),g=n(65),m=n.n(g),f=n(9),b=n.n(f),h=n(0),v=n.n(h),T=n(287),O=n.n(T),E=n(299);n(293);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(e){var n;return a()(this,t),n=l()(this,p()(t).call(this,e)),b()(d()(n),"generateData",(function(){var e=[];if(!n.props.data)return[];for(var t in n.props.data)e.push(C({name:t},n.props.data[t]));return e})),n}return m()(t,e),i()(t,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(h.Component);w.propTypes={data:O.a.object},t.a=w},293:function(e,t,n){var o=n(294);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(114)(o,a);o.locals&&(e.exports=o.locals)},294:function(e,t,n){(t=n(113)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},300:function(e,t,n){"use strict";var o=n(267),a=n.n(o),r=n(268),i=n.n(r),s=n(61),l=n.n(s),u=n(62),p=n.n(u),c=n(63),d=n.n(c),g=n(64),m=n.n(g),f=n(21),b=n.n(f),h=n(65),v=n.n(h),T=n(9),O=n.n(T),E=n(0),y=n.n(E),C=n(287),w=n.n(C),M=n(288),B=n.n(M),N=n(311),P=n(303),k=n(290),x=n(291),D=n(289),R=function(e){function t(e){var n,o;l()(this,t);for(var a=arguments.length,r=new Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];return o=d()(this,(n=m()(t)).call.apply(n,[this,e].concat(r))),O()(b()(o),"startRipple",(function(e,t){o.buttonInstance&&o.buttonInstance.startRipple(e,t)})),O()(b()(o),"endRipple",(function(){o.buttonInstance&&o.buttonInstance.endRipple()})),O()(b()(o),"triggerRipple",(function(e,t){o.buttonInstance&&o.buttonInstance.triggerRipple(e,t)})),o.button=Object(E.createRef)(),o.buttonInstance=null,o}return v()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.buttonInstance=this.button&&this.button.current}},{key:"render",value:function(){var e=this.props,t=e.className,n=i()(e,["className"]);return y.a.createElement(N.a,a()({},n,{ref:this.button,className:B()("flat-button",O()({},t,t))}))}}]),t}(E.Component);O()(R,"Theme",k.a),O()(R,"TipPosition",x.a),R.propTypes={className:w.a.string,style:w.a.object,theme:w.a.oneOf(D.a.enumerateValue(k.a)),isRounded:w.a.bool,isCircular:w.a.bool,title:w.a.string,value:w.a.any,type:w.a.string,disabled:w.a.bool,isLoading:w.a.bool,disableTouchRipple:w.a.bool,iconCls:w.a.string,rightIconCls:w.a.string,rippleDisplayCenter:w.a.bool,tip:w.a.string,tipPosition:w.a.oneOf(D.a.enumerateValue(P.a.Position)),renderer:w.a.func,onClick:w.a.func},R.defaultProps={theme:k.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:P.a.Position.BOTTOM};var j=R;n.d(t,"a",(function(){return j}))},301:function(e,t,n){"use strict";var o=n(267),a=n.n(o),r=n(268),i=n.n(r),s=n(61),l=n.n(s),u=n(62),p=n.n(u),c=n(63),d=n.n(c),g=n(64),m=n.n(g),f=n(21),b=n.n(f),h=n(65),v=n.n(h),T=n(9),O=n.n(T),E=n(0),y=n.n(E),C=n(287),w=n.n(C),M=n(288),B=n.n(M),N=n(302),P=n(307),k=n(300),x=n(295),D=n(304),R=n(290),j=n(291),L=n(289),I=n(314),S=function(e){function t(e){var n,o;l()(this,t);for(var a=arguments.length,r=new Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];return o=d()(this,(n=m()(t)).call.apply(n,[this,e].concat(r))),O()(b()(o),"getEl",(function(){return o.pop&&o.pop.current&&o.pop.current.getEl()})),O()(b()(o),"handleOkButtonClick",(function(){var e=o.props,t=e.visible,n=e.onOKButtonClick;t&&n&&n((function(){o.setState({visible:!1},(function(){var e=o.props.onRequestClose;e&&e()}))}))})),O()(b()(o),"handleCancelButtonClick",(function(){var e=o.props,t=e.onCancelButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},(function(){n&&n()}))})),O()(b()(o),"handleCloseButtonClick",(function(){var e=o.props,t=e.onCloseButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},(function(){n&&n()}))})),O()(b()(o),"handleRender",(function(){I.a.push(b()(o),{shouldLockBody:o.props.showModal});var e=o.props.onRender;e&&e.apply(void 0,arguments)})),O()(b()(o),"handleDestroy",(function(){I.a.pop(b()(o));var e=o.props.onDestroy;e&&e.apply(void 0,arguments)})),o.pop=Object(E.createRef)(),o}return v()(t,e),p()(t,[{key:"componentWillUnmount",value:function(){I.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,r=t.modalClassName,s=t.position,l=t.disabled,u=t.showModal,p=t.title,c=t.buttons,d=t.isLoading,g=t.visible,m=t.okButtonVisible,f=t.okButtonText,b=t.okButtonIconCls,h=t.okButtonTheme,v=t.okButtonDisabled,T=t.okButtonIsLoading,C=t.cancelButtonVisible,w=t.cancelButtonText,M=t.cancelButtonIconCls,R=t.cancelButtonDisabled,j=t.cancelButtonIsLoading,L=t.cancelButtonTheme,I=t.closeButtonVisible,S=t.closeIconCls,_=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,i()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"]));return y.a.createElement(N.a,a()({},_,{ref:this.pop,className:B()("dialog",O()({},o,o)),position:s,visible:g,container:y.a.createElement(P.a,{depth:6}),showModal:u,modalClassName:r,onRender:this.handleRender,onDestroy:this.handleDestroy}),(function(t){return y.a.createElement(E.Fragment,null,y.a.createElement("div",{className:"dialog-title"},p,I?y.a.createElement(D.a,{className:"dialog-title-close-button",iconCls:S,disabled:l,onClick:e.handleCloseButtonClick}):null),y.a.createElement("div",{className:"dialog-content"},"function"==typeof n?n(t&&t.querySelector(".dialog-content"),t):n),y.a.createElement("div",{className:"dialog-buttons"},c?E.Children.map(c,(function(e){return Object(E.cloneElement)(e,{isLoading:d,disabled:l})})):null,!c&&m?y.a.createElement(x.a,{className:"ok-button",value:f,iconCls:b,theme:h,disabled:v,isLoading:d||T,disableTouchRipple:!0,onClick:e.handleOkButtonClick}):null,!c&&C?y.a.createElement(k.a,{className:"cancel-button",value:w,iconCls:M,theme:L,disabled:R,isLoading:d||j,disableTouchRipple:!0,onClick:e.handleCancelButtonClick}):null))}))}}]),t}(E.Component);O()(S,"ButtonTheme",R.a),O()(S,"Position",j.a),S.propTypes={children:w.a.any,className:w.a.string,modalClassName:w.a.string,style:w.a.object,parentEl:w.a.object,position:w.a.oneOf(L.a.enumerateValue(j.a)),disabled:w.a.bool,visible:w.a.bool,showModal:w.a.bool,title:w.a.any,isBlurClose:w.a.bool,isLoading:w.a.bool,okButtonVisible:w.a.bool,okButtonText:w.a.string,okButtonIconCls:w.a.string,okButtonDisabled:w.a.bool,okButtonIsLoading:w.a.bool,okButtonTheme:w.a.oneOf(L.a.enumerateValue(R.a)),cancelButtonVisible:w.a.bool,cancelButtonText:w.a.string,cancelButtonIconCls:w.a.string,cancelButtonDisabled:w.a.bool,cancelButtonIsLoading:w.a.bool,cancelButtonTheme:w.a.oneOf(L.a.enumerateValue(R.a)),closeButtonVisible:w.a.bool,closeIconCls:w.a.string,isEscClose:w.a.bool,buttons:w.a.any,onRender:w.a.func,onRequestClose:w.a.func,onOKButtonClick:w.a.func,onCancelButtonClick:w.a.func,onCloseButtonClick:w.a.func,onDestroy:w.a.func,onModalMouseDown:w.a.func,onModalMouseMove:w.a.func,onModalMouseUp:w.a.func,onModalMouseEnter:w.a.func,onModalMouseLeave:w.a.func,onModalClick:w.a.func},S.defaultProps={parentEl:document.body,position:j.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:R.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:R.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var _=S;n.d(t,"a",(function(){return _}))},302:function(e,t,n){"use strict";var o=n(267),a=n.n(o),r=n(268),i=n.n(r),s=n(61),l=n.n(s),u=n(62),p=n.n(u),c=n(63),d=n.n(c),g=n(64),m=n.n(g),f=n(21),b=n.n(f),h=n(65),v=n.n(h),T=n(9),O=n.n(T),E=n(0),y=n.n(E),C=n(287),w=n.n(C),M=n(288),B=n.n(M),N=n(316),P=n(290),k=n(291),x=n(289);n(305);function D(e){return(window.innerWidth-e.offsetWidth)/2}function R(e){return(window.innerHeight-e.offsetHeight)/2}function j(e,t,n){if(t){var o={};switch(n){case k.a.TOP_LEFT:o.left=0,o.top=0;break;case k.a.TOP:o.left=D(t),o.top=0;break;case k.a.TOP_RIGHT:o.right=0,o.top=0;break;case k.a.BOTTOM_LEFT:o.left=0,o.bottom=0;break;case k.a.BOTTOM:o.left=D(t),o.bottom=0;break;case k.a.BOTTOM_RIGHT:o.right=0,o.bottom=0;break;case k.a.LEFT_TOP:o.left=0,o.top=0;break;case k.a.LEFT:o.left=0,o.top=R(t);break;case k.a.LEFT_BOTTOM:o.left=0,o.bottom=0;break;case k.a.RIGHT_TOP:o.right=0,o.top=0;break;case k.a.RIGHT:o.right=0,o.top=R(t);break;case k.a.RIGHT_BOTTOM:o.right=0,o.bottom=0;break;case k.a.CENTER:o.left=D(t),o.top=R(t)}return o}}var L={getStyle:j,setStyle:function(e,t,n){var o=j(0,t,n);if(o)for(var a in t.style.left=t.style.right=t.style.top=t.style.bottom=null,o)t.style[a]=o[a]+"px"}},I=function(e){function t(e){var n,o;l()(this,t);for(var a=arguments.length,r=new Array(a>1?a-1:0),i=1;i<a;i++)r[i-1]=arguments[i];return o=d()(this,(n=m()(t)).call.apply(n,[this,e].concat(r))),O()(b()(o),"getEl",(function(){return o.pop&&o.pop.current&&o.pop.current.getEl()})),O()(b()(o),"resetPosition",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.getEl(),t=o.props,n=t.parentEl,a=t.position;L.setStyle(n,e,a)})),o.pop=Object(E.createRef)(),o}return v()(t,e),p()(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,o=t.container,r=t.className,s=t.theme,l=t.position,u=t.isAnimated,p=(t.isEscClose,t.isBlurClose,i()(t,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose"]));return y.a.createElement(N.a,a()({},p,{ref:this.pop,className:B()("position-pop",(e={},O()(e,"theme-".concat(s),s),O()(e,"position-pop-".concat(l),l),O()(e,"position-pop-animated",u),O()(e,r,r),e)),container:o,isAnimated:u,resetPosition:this.resetPosition}),(function(e){return"function"==typeof n?n(e):n}))}}]),t}(E.Component);O()(I,"Position",k.a),O()(I,"Theme",P.a),I.propTypes={children:w.a.any,className:w.a.string,style:w.a.object,visible:w.a.bool,theme:w.a.oneOf(x.a.enumerateValue(P.a)),parentEl:w.a.object,position:w.a.oneOf(x.a.enumerateValue(k.a)),isAnimated:w.a.bool,depth:w.a.number,isBlurClose:w.a.bool,isEscClose:w.a.bool,container:w.a.node,showModal:w.a.bool,modalClassName:w.a.string,onRender:w.a.func,onRendered:w.a.func,onDestroy:w.a.func,onDestroyed:w.a.func,onWheel:w.a.func,onModalMouseDown:w.a.func,onModalMouseMove:w.a.func,onModalMouseUp:w.a.func,onModalMouseEnter:w.a.func,onModalMouseLeave:w.a.func,onModalClick:w.a.func},I.defaultProps={parentEl:document.body,depth:2,visible:!1,theme:P.a.DEFAULT,position:k.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,container:y.a.createElement("div",null),showModal:!1};var S=I;n.d(t,"a",(function(){return S}))},334:function(e,t,n){var o=n(335);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(114)(o,a);o.locals&&(e.exports=o.locals)},335:function(e,t,n){(t=n(113)(!1)).push([e.i,".pop-examples .material-text-field {\n  margin-top: 24px; }\n\n.pop-examples .trigger-button {\n  width: 160px;\n  height: 50px;\n  margin: 0; }\n\n.pop-examples .button-group-wrapper {\n  position: relative;\n  width: 500px;\n  height: 280px;\n  margin-top: 32px; }\n  .pop-examples .button-group-wrapper .button-group .trigger-position-button {\n    width: 120px; }\n  .pop-examples .button-group-wrapper .button-group.top {\n    position: absolute;\n    left: 50px; }\n    .pop-examples .button-group-wrapper .button-group.top .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.left {\n    position: absolute;\n    top: 60px;\n    left: 0; }\n    .pop-examples .button-group-wrapper .button-group.left .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.right {\n    position: absolute;\n    top: 60px;\n    right: 0; }\n    .pop-examples .button-group-wrapper .button-group.right .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.bottom {\n    position: absolute;\n    left: 50px;\n    bottom: 0; }\n    .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.center {\n    position: absolute;\n    left: 190px;\n    top: 120px; }\n    .pop-examples .button-group-wrapper .button-group.center .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child {\n        margin-left: 0; }\n",""]),e.exports=t},649:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"contentClassName":{"type":"PropTypes.string","desc":"The CSS class name of the content element."},"modalClassName":{"type":"PropTypes.string"},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The popover theme.Can be primary,highlight,success,warning,error.","default":"Theme.DARK"},"parentEl":{"type":"PropTypes.object","default":"document.body"},"triggerEl":{"type":"PropTypes.object","desc":"This is the DOM element that will be used to set the position of the popover."},"visible":{"type":"PropTypes.bool","desc":"If true,the popover is visible.","default":"false"},"hasTriangle":{"type":"PropTypes.bool","desc":"If true,the popover will have a triangle on the top of the DOM element.","default":"true"},"triangle":{"type":"PropTypes.element"},"position":{"type":"PropTypes.oneOf","desc":"The popover alignment.","default":"Position.BOTTOM"},"isAnimated":{"type":"PropTypes.bool","desc":"If true, menu will have animation effects.","default":"true"},"depth":{"type":"PropTypes.number","desc":"The depth of Paper component."},"shouldFollowScroll":{"type":"PropTypes.bool","default":"false"},"scrollEl":{"type":"PropTypes.object"},"resetPositionWait":{"type":"PropTypes.number","default":"250"},"showModal":{"type":"PropTypes.bool","default":"false"},"onRender":{"type":"PropTypes.func","desc":"The function of tip render."},"onRendered":{"type":"PropTypes.func","desc":"The function of tip rendered."},"onDestroy":{"type":"PropTypes.func","desc":"The function of tip destroy."},"onDestroyed":{"type":"PropTypes.func","desc":"The function of tip destroyed."},"onWheel":{"type":"PropTypes.func","desc":"Callback function fired when wrapper wheeled."}}')},650:function(e,t,n){var o=n(651);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};n(114)(o,a);o.locals&&(e.exports=o.locals)},651:function(e,t,n){(t=n(113)(!1)).push([e.i,".customized-tip .customized-tip-triangle {\n  position: relative;\n  top: -4px; }\n\n.customized-tip .tip-content {\n  border: 1px solid #e7e7e7; }\n\n.tip-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .tip-dialog-content-scroller .dialog-trigger-button {\n    display: block;\n    width: auto;\n    margin-bottom: 16px; }\n",""]),e.exports=t},825:function(e,t,n){"use strict";n.r(t);var o=n(61),a=n.n(o),r=n(62),i=n.n(r),s=n(63),l=n.n(s),u=n(64),p=n.n(u),c=n(21),d=n.n(c),g=n(65),m=n.n(g),f=n(9),b=n.n(f),h=n(0),v=n.n(h),T=n(28),O=n(295),E=n(315),y=n(303),C=n(296),w=n(297),M=n(290),B=n(301),N=n(292),P=n(649);n(334),n(650);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){function t(e){var n;return a()(this,t),n=l()(this,p()(t).call(this,e)),b()(d()(n),"show",(function(e){var t=x({},n.state.popVisible);t[e]=!0,n.setState({popVisible:t})})),b()(d()(n),"hide",(function(e){var t=x({},n.state.popVisible);t[e]=!1,n.setState({popVisible:t})})),n.state={popVisible:{}},n}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.state.popVisible;return v.a.createElement("div",{className:"example pop-examples tip-examples"},v.a.createElement("h2",{className:"example-title"},"Tip"),v.a.createElement("p",null,"A ",v.a.createElement("span",null,"Tip")," can be used as an alternative to a Drop Down Tip that can contain elements inside."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(C.a,null,v.a.createElement(w.a,{className:"example-header",title:"With value"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"popup-example-wrapper"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"value")," property to show different position of ",v.a.createElement("code",null,"Tip"),"."),v.a.createElement("div",{className:"button-group-wrapper"},v.a.createElement("div",{className:"button-group top"},v.a.createElement(O.a,{ref:function(t){return e.trigger3=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Top Left",onMouseOver:function(){return e.show(3)},onMouseOut:function(){return e.hide(3)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger4=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Top",onMouseOver:function(){return e.show(4)},onMouseOut:function(){return e.hide(4)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger5=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Top right",onMouseOver:function(){return e.show(5)},onMouseOut:function(){return e.hide(5)}})),v.a.createElement("div",{className:"button-group right"},v.a.createElement(O.a,{ref:function(t){return e.trigger9=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Right Top",onMouseOver:function(){return e.show(9)},onMouseOut:function(){return e.hide(9)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger10=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Right",onMouseOver:function(){return e.show(10)},onMouseOut:function(){return e.hide(10)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger11=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){return e.show(11)},onMouseOut:function(){return e.hide(11)}})),v.a.createElement("div",{className:"button-group bottom"},v.a.createElement(O.a,{ref:function(t){return e.trigger0=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){return e.show(0)},onMouseOut:function(){return e.hide(0)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger1=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom",onMouseOver:function(){return e.show(1)},onMouseOut:function(){return e.hide(1)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger2=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){return e.show(2)},onMouseOut:function(){return e.hide(2)}})),v.a.createElement("div",{className:"button-group left"},v.a.createElement(O.a,{ref:function(t){return e.trigger6=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Left Top",onMouseOver:function(){return e.show(6)},onMouseOut:function(){return e.hide(6)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger7=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Left",onMouseOver:function(){return e.show(7)},onMouseOut:function(){return e.hide(7)}}),v.a.createElement(O.a,{ref:function(t){return e.trigger8=Object(T.findDOMNode)(t)},className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){return e.show(8)},onMouseOut:function(){return e.hide(8)}}))),v.a.createElement(E.a,{visible:t[0],triggerEl:this.trigger0,position:E.a.Position.BOTTOM_LEFT},"Tip Content"),v.a.createElement(E.a,{visible:t[1],triggerEl:this.trigger1,position:E.a.Position.BOTTOM},"Tip Content"),v.a.createElement(E.a,{visible:t[2],triggerEl:this.trigger2,position:E.a.Position.BOTTOM_RIGHT},"Tip Content"),v.a.createElement(E.a,{visible:t[3],triggerEl:this.trigger3,position:E.a.Position.TOP_LEFT},"Tip Content"),v.a.createElement(E.a,{visible:t[4],triggerEl:this.trigger4,position:E.a.Position.TOP},"Tip Content"),v.a.createElement(E.a,{visible:t[5],triggerEl:this.trigger5,position:E.a.Position.TOP_RIGHT},"Tip Content"),v.a.createElement(E.a,{visible:t[6],triggerEl:this.trigger6,position:E.a.Position.LEFT_TOP},"Tip Content"),v.a.createElement(E.a,{visible:t[7],triggerEl:this.trigger7,position:E.a.Position.LEFT},"Tip Content"),v.a.createElement(E.a,{visible:t[8],triggerEl:this.trigger8,position:E.a.Position.LEFT_BOTTOM},"Tip Content"),v.a.createElement(E.a,{visible:t[9],triggerEl:this.trigger9,position:E.a.Position.RIGHT_TOP},"Tip Content"),v.a.createElement(E.a,{visible:t[10],triggerEl:this.trigger10,position:E.a.Position.RIGHT},"Tip Content"),v.a.createElement(E.a,{visible:t[11],triggerEl:this.trigger11,position:E.a.Position.RIGHT_BOTTOM},"Tip Content"))))),v.a.createElement(C.a,null,v.a.createElement(w.a,{className:"example-header",title:"Customized Tip Triangle"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"popup-example-wrapper"},v.a.createElement(O.a,{ref:function(t){return e.trigger12=Object(T.findDOMNode)(t)},className:"trigger-button",value:"Show Tip",onMouseOver:function(){return e.show(12)},onMouseOut:function(){return e.hide(12)}}),v.a.createElement(E.a,{className:"customized-tip",theme:M.a.DEFAULT,visible:t[12],triggerEl:this.trigger12,triangle:v.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-tip-triangle",width:"17",height:"7"},v.a.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}}))},"Tip Content"))))),v.a.createElement(C.a,null,v.a.createElement(w.a,{className:"example-header",title:"Use Tip Provider"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"popup-example-wrapper"},v.a.createElement(y.a,{tipContent:"Tip Content"},v.a.createElement(O.a,{className:"trigger-button",value:"Show Tip",onMouseOver:function(){return console.log("onMouseOver")},onMouseOut:function(){return console.log("onMouseOut")}})))))),v.a.createElement(C.a,null,v.a.createElement(w.a,{className:"example-header",title:"Tip in Dialog"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"popup-example-wrapper"},v.a.createElement(O.a,{className:"trigger-button",value:"Show Dialog",onClick:function(){return e.show(13)}}),v.a.createElement(B.a,{visible:t[13],onRequestClose:function(){return e.hide(13)}},(function(n){return v.a.createElement("div",{className:"tip-dialog-content-scroller"},v.a.createElement(O.a,{ref:function(t){return e.trigger14=Object(T.findDOMNode)(t)},className:"dialog-trigger-button",value:"Toggle Tip",onMouseOver:function(){return e.show(14)},onMouseOut:function(){return e.hide(14)}}),v.a.createElement(E.a,{position:E.a.Position.BOTTOM_LEFT,visible:t[14],triggerEl:e.trigger14,parentEl:n},"Tip Content"),v.a.createElement(y.a,{tipContent:"Tip Content",parentEl:n,position:y.a.Position.BOTTOM_LEFT},v.a.createElement(O.a,{className:"dialog-trigger-button",value:"Toggle TipProvider"})),v.a.createElement(O.a,{ref:function(t){return e.trigger15=Object(T.findDOMNode)(t)},className:"dialog-trigger-button",value:"Toggle Tip",onMouseOver:function(){return e.show(15)},onMouseOut:function(){return e.hide(15)}}),v.a.createElement(E.a,{position:E.a.Position.BOTTOM_LEFT,visible:t[15],triggerEl:e.trigger15,shouldFollowScroll:!0},"Tip Content"),v.a.createElement(y.a,{tipContent:"Tip Content",position:y.a.Position.BOTTOM_LEFT,shouldFollowScroll:!0},v.a.createElement(O.a,{className:"dialog-trigger-button",value:"Toggle TipProvider"})))})))))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(N.a,{data:P}))}}]),t}(h.Component);t.default=D}}]);