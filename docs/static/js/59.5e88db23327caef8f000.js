(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{292:function(e,t,n){"use strict";var a=n(61),o=n.n(a),l=n(62),i=n.n(l),s=n(63),c=n.n(s),r=n(64),u=n.n(r),p=n(21),d=n.n(p),h=n(65),m=n.n(h),b=n(9),f=n.n(b),g=n(0),y=n.n(g),C=n(287),E=n.n(C),v=n(299);n(293);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){function t(e){var n;return o()(this,t),n=c()(this,u()(t).call(this,e)),f()(d()(n),"generateData",(function(){var e=[];if(!n.props.data)return[];for(var t in n.props.data)e.push(k({name:t},n.props.data[t]));return e})),n}return m()(t,e),i()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(v.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(g.Component);B.propTypes={data:E.a.object},t.a=B},293:function(e,t,n){var a=n(294);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(114)(a,o);a.locals&&(e.exports=a.locals)},294:function(e,t,n){(t=n(113)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=t},300:function(e,t,n){"use strict";var a=n(267),o=n.n(a),l=n(268),i=n.n(l),s=n(61),c=n.n(s),r=n(62),u=n.n(r),p=n(63),d=n.n(p),h=n(64),m=n.n(h),b=n(21),f=n.n(b),g=n(65),y=n.n(g),C=n(9),E=n.n(C),v=n(0),T=n.n(v),k=n(287),B=n.n(k),N=n(288),R=n.n(N),O=n(311),w=n(303),x=n(290),P=n(291),I=n(289),M=function(e){function t(e){var n,a;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return a=d()(this,(n=m()(t)).call.apply(n,[this,e].concat(l))),E()(f()(a),"startRipple",(function(e,t){a.buttonInstance&&a.buttonInstance.startRipple(e,t)})),E()(f()(a),"endRipple",(function(){a.buttonInstance&&a.buttonInstance.endRipple()})),E()(f()(a),"triggerRipple",(function(e,t){a.buttonInstance&&a.buttonInstance.triggerRipple(e,t)})),a.button=Object(v.createRef)(),a.buttonInstance=null,a}return y()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.buttonInstance=this.button&&this.button.current}},{key:"render",value:function(){var e=this.props,t=e.className,n=i()(e,["className"]);return T.a.createElement(O.a,o()({},n,{ref:this.button,className:R()("flat-button",E()({},t,t))}))}}]),t}(v.Component);E()(M,"Theme",x.a),E()(M,"TipPosition",P.a),M.propTypes={className:B.a.string,style:B.a.object,theme:B.a.oneOf(I.a.enumerateValue(x.a)),isRounded:B.a.bool,isCircular:B.a.bool,title:B.a.string,value:B.a.any,type:B.a.string,disabled:B.a.bool,isLoading:B.a.bool,disableTouchRipple:B.a.bool,iconCls:B.a.string,rightIconCls:B.a.string,rippleDisplayCenter:B.a.bool,tip:B.a.string,tipPosition:B.a.oneOf(I.a.enumerateValue(w.a.Position)),renderer:B.a.func,onClick:B.a.func},M.defaultProps={theme:x.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:w.a.Position.BOTTOM};var L=M;n.d(t,"a",(function(){return L}))},301:function(e,t,n){"use strict";var a=n(267),o=n.n(a),l=n(268),i=n.n(l),s=n(61),c=n.n(s),r=n(62),u=n.n(r),p=n(63),d=n.n(p),h=n(64),m=n.n(h),b=n(21),f=n.n(b),g=n(65),y=n.n(g),C=n(9),E=n.n(C),v=n(0),T=n.n(v),k=n(287),B=n.n(k),N=n(288),R=n.n(N),O=n(302),w=n(307),x=n(300),P=n(295),I=n(304),M=n(290),L=n(291),D=n(289),S=n(314),A=function(e){function t(e){var n,a;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return a=d()(this,(n=m()(t)).call.apply(n,[this,e].concat(l))),E()(f()(a),"getEl",(function(){return a.pop&&a.pop.current&&a.pop.current.getEl()})),E()(f()(a),"handleOkButtonClick",(function(){var e=a.props,t=e.visible,n=e.onOKButtonClick;t&&n&&n((function(){a.setState({visible:!1},(function(){var e=a.props.onRequestClose;e&&e()}))}))})),E()(f()(a),"handleCancelButtonClick",(function(){var e=a.props,t=e.onCancelButtonClick,n=e.onRequestClose;t&&t(),a.setState({visible:!1},(function(){n&&n()}))})),E()(f()(a),"handleCloseButtonClick",(function(){var e=a.props,t=e.onCloseButtonClick,n=e.onRequestClose;t&&t(),a.setState({visible:!1},(function(){n&&n()}))})),E()(f()(a),"handleRender",(function(){S.a.push(f()(a),{shouldLockBody:a.props.showModal});var e=a.props.onRender;e&&e.apply(void 0,arguments)})),E()(f()(a),"handleDestroy",(function(){S.a.pop(f()(a));var e=a.props.onDestroy;e&&e.apply(void 0,arguments)})),a.pop=Object(v.createRef)(),a}return y()(t,e),u()(t,[{key:"componentWillUnmount",value:function(){S.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.className,l=t.modalClassName,s=t.position,c=t.disabled,r=t.showModal,u=t.title,p=t.buttons,d=t.isLoading,h=t.visible,m=t.okButtonVisible,b=t.okButtonText,f=t.okButtonIconCls,g=t.okButtonTheme,y=t.okButtonDisabled,C=t.okButtonIsLoading,k=t.cancelButtonVisible,B=t.cancelButtonText,N=t.cancelButtonIconCls,M=t.cancelButtonDisabled,L=t.cancelButtonIsLoading,D=t.cancelButtonTheme,S=t.closeButtonVisible,A=t.closeIconCls,j=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,i()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"]));return T.a.createElement(O.a,o()({},j,{ref:this.pop,className:R()("dialog",E()({},a,a)),position:s,visible:h,container:T.a.createElement(w.a,{depth:6}),showModal:r,modalClassName:l,onRender:this.handleRender,onDestroy:this.handleDestroy}),(function(t){return T.a.createElement(v.Fragment,null,T.a.createElement("div",{className:"dialog-title"},u,S?T.a.createElement(I.a,{className:"dialog-title-close-button",iconCls:A,disabled:c,onClick:e.handleCloseButtonClick}):null),T.a.createElement("div",{className:"dialog-content"},"function"==typeof n?n(t&&t.querySelector(".dialog-content"),t):n),T.a.createElement("div",{className:"dialog-buttons"},p?v.Children.map(p,(function(e){return Object(v.cloneElement)(e,{isLoading:d,disabled:c})})):null,!p&&m?T.a.createElement(P.a,{className:"ok-button",value:b,iconCls:f,theme:g,disabled:y,isLoading:d||C,disableTouchRipple:!0,onClick:e.handleOkButtonClick}):null,!p&&k?T.a.createElement(x.a,{className:"cancel-button",value:B,iconCls:N,theme:D,disabled:M,isLoading:d||L,disableTouchRipple:!0,onClick:e.handleCancelButtonClick}):null))}))}}]),t}(v.Component);E()(A,"ButtonTheme",M.a),E()(A,"Position",L.a),A.propTypes={children:B.a.any,className:B.a.string,modalClassName:B.a.string,style:B.a.object,parentEl:B.a.object,position:B.a.oneOf(D.a.enumerateValue(L.a)),disabled:B.a.bool,visible:B.a.bool,showModal:B.a.bool,title:B.a.any,isBlurClose:B.a.bool,isLoading:B.a.bool,okButtonVisible:B.a.bool,okButtonText:B.a.string,okButtonIconCls:B.a.string,okButtonDisabled:B.a.bool,okButtonIsLoading:B.a.bool,okButtonTheme:B.a.oneOf(D.a.enumerateValue(M.a)),cancelButtonVisible:B.a.bool,cancelButtonText:B.a.string,cancelButtonIconCls:B.a.string,cancelButtonDisabled:B.a.bool,cancelButtonIsLoading:B.a.bool,cancelButtonTheme:B.a.oneOf(D.a.enumerateValue(M.a)),closeButtonVisible:B.a.bool,closeIconCls:B.a.string,isEscClose:B.a.bool,buttons:B.a.any,onRender:B.a.func,onRequestClose:B.a.func,onOKButtonClick:B.a.func,onCancelButtonClick:B.a.func,onCloseButtonClick:B.a.func,onDestroy:B.a.func,onModalMouseDown:B.a.func,onModalMouseMove:B.a.func,onModalMouseUp:B.a.func,onModalMouseEnter:B.a.func,onModalMouseLeave:B.a.func,onModalClick:B.a.func},A.defaultProps={parentEl:document.body,position:L.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:M.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:M.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var j=A;n.d(t,"a",(function(){return j}))},302:function(e,t,n){"use strict";var a=n(267),o=n.n(a),l=n(268),i=n.n(l),s=n(61),c=n.n(s),r=n(62),u=n.n(r),p=n(63),d=n.n(p),h=n(64),m=n.n(h),b=n(21),f=n.n(b),g=n(65),y=n.n(g),C=n(9),E=n.n(C),v=n(0),T=n.n(v),k=n(287),B=n.n(k),N=n(288),R=n.n(N),O=n(316),w=n(290),x=n(291),P=n(289);n(305);function I(e){return(window.innerWidth-e.offsetWidth)/2}function M(e){return(window.innerHeight-e.offsetHeight)/2}function L(e,t,n){if(t){var a={};switch(n){case x.a.TOP_LEFT:a.left=0,a.top=0;break;case x.a.TOP:a.left=I(t),a.top=0;break;case x.a.TOP_RIGHT:a.right=0,a.top=0;break;case x.a.BOTTOM_LEFT:a.left=0,a.bottom=0;break;case x.a.BOTTOM:a.left=I(t),a.bottom=0;break;case x.a.BOTTOM_RIGHT:a.right=0,a.bottom=0;break;case x.a.LEFT_TOP:a.left=0,a.top=0;break;case x.a.LEFT:a.left=0,a.top=M(t);break;case x.a.LEFT_BOTTOM:a.left=0,a.bottom=0;break;case x.a.RIGHT_TOP:a.right=0,a.top=0;break;case x.a.RIGHT:a.right=0,a.top=M(t);break;case x.a.RIGHT_BOTTOM:a.right=0,a.bottom=0;break;case x.a.CENTER:a.left=I(t),a.top=M(t)}return a}}var D={getStyle:L,setStyle:function(e,t,n){var a=L(0,t,n);if(a)for(var o in t.style.left=t.style.right=t.style.top=t.style.bottom=null,a)t.style[o]=a[o]+"px"}},S=function(e){function t(e){var n,a;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return a=d()(this,(n=m()(t)).call.apply(n,[this,e].concat(l))),E()(f()(a),"getEl",(function(){return a.pop&&a.pop.current&&a.pop.current.getEl()})),E()(f()(a),"resetPosition",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.getEl(),t=a.props,n=t.parentEl,o=t.position;D.setStyle(n,e,o)})),a.pop=Object(v.createRef)(),a}return y()(t,e),u()(t,[{key:"render",value:function(){var e,t=this.props,n=t.children,a=t.container,l=t.className,s=t.theme,c=t.position,r=t.isAnimated,u=(t.isEscClose,t.isBlurClose,i()(t,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose"]));return T.a.createElement(O.a,o()({},u,{ref:this.pop,className:R()("position-pop",(e={},E()(e,"theme-".concat(s),s),E()(e,"position-pop-".concat(c),c),E()(e,"position-pop-animated",r),E()(e,l,l),e)),container:a,isAnimated:r,resetPosition:this.resetPosition}),(function(e){return"function"==typeof n?n(e):n}))}}]),t}(v.Component);E()(S,"Position",x.a),E()(S,"Theme",w.a),S.propTypes={children:B.a.any,className:B.a.string,style:B.a.object,visible:B.a.bool,theme:B.a.oneOf(P.a.enumerateValue(w.a)),parentEl:B.a.object,position:B.a.oneOf(P.a.enumerateValue(x.a)),isAnimated:B.a.bool,depth:B.a.number,isBlurClose:B.a.bool,isEscClose:B.a.bool,container:B.a.node,showModal:B.a.bool,modalClassName:B.a.string,onRender:B.a.func,onRendered:B.a.func,onDestroy:B.a.func,onDestroyed:B.a.func,onWheel:B.a.func,onModalMouseDown:B.a.func,onModalMouseMove:B.a.func,onModalMouseUp:B.a.func,onModalMouseEnter:B.a.func,onModalMouseLeave:B.a.func,onModalClick:B.a.func},S.defaultProps={parentEl:document.body,depth:2,visible:!1,theme:w.a.DEFAULT,position:x.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,container:T.a.createElement("div",null),showModal:!1};var A=S;n.d(t,"a",(function(){return A}))},347:function(e,t,n){"use strict";var a=n(267),o=n.n(a),l=n(268),i=n.n(l),s=n(61),c=n.n(s),r=n(62),u=n.n(r),p=n(63),d=n.n(p),h=n(64),m=n.n(h),b=n(21),f=n.n(b),g=n(65),y=n.n(g),C=n(9),E=n.n(C),v=n(0),T=n.n(v),k=n(287),B=n.n(k),N=n(288),R=n.n(N),O=n(355),w=n(379),x=n(303),P=n(290),I=n(289),M=function(e){function t(e){var n,a;c()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return a=d()(this,(n=m()(t)).call.apply(n,[this,e].concat(l))),E()(f()(a),"startRipple",(function(e,t){!a.props.disableTouchRipple&&a.touchRipple&&a.touchRipple.current&&a.touchRipple.current.addRipple(e,t)})),E()(f()(a),"endRipple",(function(){!a.props.disableTouchRipple&&a.touchRipple&&a.touchRipple.current&&a.touchRipple.current.removeRipple()})),E()(f()(a),"triggerRipple",(function(e,t){a.startRipple(e,t),setTimeout((function(){a.endRipple()}),250)})),E()(f()(a),"handleClick",(function(e){var t=a.props,n=t.disabled,o=t.isLoading,l=t.onClick;!n&&!o&&l&&l(e)})),a.touchRipple=Object(v.createRef)(),a}return y()(t,e),u()(t,[{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.theme,l=t.iconCls,s=t.disabled,c=t.isLoading,r=t.tip,u=t.tipPosition,p=t.disableTouchRipple,d=t.parentEl,h=i()(t,["className","theme","iconCls","disabled","isLoading","tip","tipPosition","disableTouchRipple","parentEl"]);return T.a.createElement(x.a,{tipContent:r,parentEl:d,position:u},T.a.createElement("a",o()({},h,{className:R()("icon-anchor",(e={},E()(e,"theme-".concat(a),a),E()(e,n,n),e)),disabled:s||c,onClick:this.handleClick}),c?T.a.createElement(O.a,{size:"small"}):l?T.a.createElement("i",{className:"icon-anchor-icon ".concat(l),"aria-hidden":"true"}):null,p?null:T.a.createElement(w.a,{ref:this.touchRipple,className:s||c?"hidden":"",displayCenter:!0})))}}]),t}(v.Component);E()(M,"Theme",P.a),M.propTypes={className:B.a.string,style:B.a.object,theme:B.a.oneOf(I.a.enumerateValue(P.a)),disabled:B.a.bool,isLoading:B.a.bool,iconCls:B.a.string.isRequired,href:B.a.string,target:B.a.string,alt:B.a.string,disableTouchRipple:B.a.bool,parentEl:B.a.object,tip:B.a.string,tipPosition:B.a.oneOf(I.a.enumerateValue(x.a.Position)),onClick:B.a.func},M.defaultProps={theme:P.a.DEFAULT,disabled:!1,isLoading:!1,href:"javascript:void(0)",target:"_blank",disableTouchRipple:!1,tipPosition:x.a.Position.BOTTOM};var L=M;n.d(t,"a",(function(){return L}))},533:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The button theme.Can be primary,highlight,success,warning,error.","default":"Theme.DEFAULT"},"disabled":{"type":"PropTypes.bool","desc":"Disables the button if set to true.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true,the button will be have loading effect.","default":"false"},"iconCls":{"type":"PropTypes.string","desc":"The icon within the IconAnchor is a Font Awesome component.This property is the className of the icon."},"href":{"type":"PropTypes.string","desc":"The URL to link to when the button is clicked.","default":"javascript:void(0)"},"target":{"type":"PropTypes.string","desc":"How to open the linked document.The value can be _blank,_self,_parent or _top.","default":"_blank"},"alt":{"type":"PropTypes.string"},"disableTouchRipple":{"type":"PropTypes.bool","default":"false"},"parentEl":{"type":"PropTypes.object"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"TipProvider.Position.BOTTOM"},"onClick":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."}}')},534:function(e,t,n){var a=n(535);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(114)(a,o);a.locals&&(e.exports=a.locals)},535:function(e,t,n){(t=n(113)(!1)).push([e.i,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""]),e.exports=t},774:function(e,t,n){"use strict";n.r(t);var a=n(61),o=n.n(a),l=n(62),i=n.n(l),s=n(63),c=n.n(s),r=n(64),u=n.n(r),p=n(21),d=n.n(p),h=n(65),m=n.n(h),b=n(9),f=n.n(b),g=n(0),y=n.n(g),C=n(347),E=n(296),v=n(297),T=n(295),k=n(301),B=n(292),N=n(533),R=(n(534),function(e){function t(e){var n;return o()(this,t),n=c()(this,u()(t).call(this,e)),f()(d()(n),"show",(function(e){var t=n.state.IncoAnchorVisible;t[e]=!0,n.setState({IncoAnchorVisible:t})})),f()(d()(n),"hide",(function(e){var t=n.state.IncoAnchorVisible;t[e]=!1,n.setState({IncoAnchorVisible:t})})),n.state={IncoAnchorVisible:{}},n}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.state.IncoAnchorVisible;return y.a.createElement("div",{className:"example icon-anchor-examples"},y.a.createElement("h2",{className:"example-title"},"Icon Anchor"),y.a.createElement("p",null,"An ",y.a.createElement("span",null,"Icon Anchor")," generates a button element around an icon.Also,Click the button to achieve href address jump."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(E.a,null,y.a.createElement(v.a,{className:"example-header",title:"Basic"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"Icon Anchor")," using icon specified with the ",y.a.createElement("code",null,"iconCls")," property example."),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",tip:"Github"}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",tip:"Github"}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",tip:"Github"}))))),y.a.createElement(E.a,null,y.a.createElement(v.a,{className:"example-header",title:"With theme and style"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"Icon Anchor")," using the ",y.a.createElement("code",null,"style")," property to set size and the",y.a.createElement("code",null,"theme")," property to set different theme."),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},theme:"primary",className:"github-icon",disabled:!0}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},theme:"success",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},theme:"error",className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),y.a.createElement(C.a,{iconCls:"fab fa-github",theme:"highlight",style:{fontSize:"28px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}),y.a.createElement(C.a,{iconCls:"fab fa-github",theme:"warning",style:{fontSize:"32px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),y.a.createElement(E.a,null,y.a.createElement(v.a,{className:"example-header",title:"With target"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"Icon Anchor")," using the ",y.a.createElement("code",null,"target")," property to set where to open the connection href."),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",disabled:!0}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"18px"},className:"github-icon",target:"_parent",href:"https://github.com/alcedo-ui/alcedo-ui"}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"24px"},className:"github-icon",target:"_self",href:"https://github.com/alcedo-ui/alcedo-ui"}))))),y.a.createElement(E.a,null,y.a.createElement(v.a,{className:"example-header",title:"In Dialog"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"Icon Anchor")," using icon specified with the ",y.a.createElement("code",null,"iconCls")," property example."),y.a.createElement(T.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),y.a.createElement(k.a,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(e){return y.a.createElement("div",{className:"popover-dialog-content-scroller"},y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",parentEl:e,tip:"Github"}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",parentEl:e,tip:"Github"}),y.a.createElement(C.a,{iconCls:"fab fa-github",style:{fontSize:"14px"},className:"github-icon",href:"https://github.com/alcedo-ui/alcedo-ui",parentEl:e,tip:"Github"}))})))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(B.a,{data:N}))}}]),t}(g.Component));t.default=R}}]);