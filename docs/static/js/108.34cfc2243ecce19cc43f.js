(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{367:function(e,t,n){"use strict";var o=n(6),a=n.n(o),i=n(79),r=n.n(i),s=n(80),l=n.n(s),p=n(81),u=n.n(p),c=n(82),d=n.n(c),m=n(83),g=n.n(m),f=n(11),b=n.n(f),h=n(0),v=n.n(h),T=n(1),E=n.n(T),C=n(374),y=(n(368),function(e){function t(e){var n,o;return r()(this,t),(o=u()(this,d()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],o.generateData=(n=b()(b()(o)),o.generateData).bind(n),o}return g()(t,e),l()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(a()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(C.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(h.Component));y.propTypes={data:E.a.object},y.defaultProps={data:null},t.a=y},368:function(e,t,n){var o=n(369);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(147)(o,a);o.locals&&(e.exports=o.locals)},369:function(e,t,n){(e.exports=n(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},375:function(e,t,n){"use strict";var o=n(365),a=n.n(o),i=n(349),r=n.n(i),s=n(79),l=n.n(s),p=n(80),u=n.n(p),c=n(81),d=n.n(c),m=n(82),g=n.n(m),f=n(83),b=n.n(f),h=n(11),v=n.n(h),T=n(21),E=n.n(T),C=n(0),y=n.n(C),O=n(1),B=n.n(O),w=n(362),N=n.n(w),x=n(377),k=n(383),P=n(376),M=n(370),D=n(379),R=n(364),L=n(366),I=n(363),S=n(389),V=function(e){function t(e){var n,o;l()(this,t);for(var a=arguments.length,i=new Array(a>1?a-1:0),r=1;r<a;r++)i[r-1]=arguments[r];return o=d()(this,(n=g()(t)).call.apply(n,[this,e].concat(i))),E()(v()(v()(o)),"getEl",function(){return o.refs.pop&&o.refs.pop.getEl()}),E()(v()(v()(o)),"okButtonClickHandler",function(){var e=o.props,t=e.visible,n=e.onOKButtonClick;t&&n&&n(function(){o.setState({visible:!1},function(){var e=o.props.onRequestClose;e&&e()})})}),E()(v()(v()(o)),"cancelButtonClickHandler",function(){var e=o.props,t=e.onCancelButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},function(){n&&n()})}),E()(v()(v()(o)),"closeButtonClickHandler",function(){var e=o.props,t=e.onCloseButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},function(){n&&n()})}),E()(v()(v()(o)),"renderHandler",function(){S.a.push(v()(v()(o)),{shouldLockBody:o.props.showModal});var e=o.props.onRender;e&&e.apply(void 0,arguments)}),E()(v()(v()(o)),"destroyHandler",function(){S.a.pop(v()(v()(o)));var e=o.props.onDestroy;e&&e.apply(void 0,arguments)}),o}return b()(t,e),u()(t,[{key:"componentWillUnmount",value:function(){S.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.className,i=t.modalClassName,s=t.position,l=t.disabled,p=t.showModal,u=t.title,c=t.buttons,d=t.isLoading,m=t.visible,g=t.okButtonVisible,f=t.okButtonText,b=t.okButtonIconCls,h=t.okButtonTheme,v=t.okButtonDisabled,T=t.okButtonIsLoading,O=t.cancelButtonVisible,B=t.cancelButtonText,w=t.cancelButtonIconCls,R=t.cancelButtonDisabled,L=t.cancelButtonIsLoading,I=t.cancelButtonTheme,S=t.closeButtonVisible,V=t.closeIconCls,j=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,r()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"])),H=N()("dialog",E()({},o,o));return y.a.createElement(x.a,a()({},j,{ref:"pop",className:H,position:s,visible:m,container:y.a.createElement(k.a,{depth:6}),showModal:p,modalClassName:i,onRender:this.renderHandler,onDestroy:this.destroyHandler}),function(t){return y.a.createElement(C.Fragment,null,y.a.createElement("div",{className:"dialog-title"},u,S?y.a.createElement(D.a,{className:"dialog-title-close-button",iconCls:V,disabled:l,onClick:e.closeButtonClickHandler}):null),y.a.createElement("div",{className:"dialog-content"},"function"==typeof n?n(t&&t.querySelector(".dialog-content"),t):n),y.a.createElement("div",{className:"dialog-buttons"},c?C.Children.map(c,function(e){return Object(C.cloneElement)(e,{isLoading:d,disabled:l})}):null,!c&&g?y.a.createElement(M.a,{className:"ok-button",value:f,iconCls:b,theme:h,disabled:v,isLoading:d||T,disableTouchRipple:!0,onClick:e.okButtonClickHandler}):null,!c&&O?y.a.createElement(P.a,{className:"cancel-button",value:B,iconCls:w,theme:I,disabled:R,isLoading:d||L,disableTouchRipple:!0,onClick:e.cancelButtonClickHandler}):null))})}}]),t}(C.Component);E()(V,"ButtonTheme",R.a),E()(V,"Position",L.a),V.propTypes={className:B.a.string,modalClassName:B.a.string,style:B.a.object,parentEl:B.a.object,position:B.a.oneOf(I.a.enumerateValue(L.a)),disabled:B.a.bool,visible:B.a.bool,showModal:B.a.bool,title:B.a.any,isBlurClose:B.a.bool,isLoading:B.a.bool,okButtonVisible:B.a.bool,okButtonText:B.a.string,okButtonIconCls:B.a.string,okButtonDisabled:B.a.bool,okButtonIsLoading:B.a.bool,okButtonTheme:B.a.oneOf(I.a.enumerateValue(R.a)),cancelButtonVisible:B.a.bool,cancelButtonText:B.a.string,cancelButtonIconCls:B.a.string,cancelButtonDisabled:B.a.bool,cancelButtonIsLoading:B.a.bool,cancelButtonTheme:B.a.oneOf(I.a.enumerateValue(R.a)),closeButtonVisible:B.a.bool,closeIconCls:B.a.string,isEscClose:B.a.bool,buttons:B.a.any,onRender:B.a.func,onRequestClose:B.a.func,onOKButtonClick:B.a.func,onCancelButtonClick:B.a.func,onCloseButtonClick:B.a.func},V.defaultProps={parentEl:document.body,position:L.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:R.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:R.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var j=V;n.d(t,"a",function(){return j})},376:function(e,t,n){"use strict";var o=n(365),a=n.n(o),i=n(349),r=n.n(i),s=n(79),l=n.n(s),p=n(80),u=n.n(p),c=n(81),d=n.n(c),m=n(82),g=n.n(m),f=n(83),b=n.n(f),h=n(11),v=n.n(h),T=n(21),E=n.n(T),C=n(0),y=n.n(C),O=n(1),B=n.n(O),w=n(362),N=n.n(w),x=n(385),k=n(378),P=n(364),M=n(366),D=n(363),R=function(e){function t(e){var n,o;l()(this,t);for(var a=arguments.length,i=new Array(a>1?a-1:0),r=1;r<a;r++)i[r-1]=arguments[r];return o=d()(this,(n=g()(t)).call.apply(n,[this,e].concat(i))),E()(v()(v()(o)),"startRipple",function(e,t){o.refs.baseButton&&o.refs.baseButton.startRipple(e,t)}),E()(v()(v()(o)),"endRipple",function(){o.refs.baseButton&&o.refs.baseButton.endRipple()}),E()(v()(v()(o)),"triggerRipple",function(e,t){o.refs.baseButton&&o.refs.baseButton.triggerRipple(e,t)}),o}return b()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=r()(e,["children","className"]),i=N()("flat-button",E()({},n,n));return y.a.createElement(x.a,a()({},o,{ref:"baseButton",className:i}),t)}}]),t}(C.Component);E()(R,"Theme",P.a),E()(R,"TipPosition",M.a),R.propTypes={className:B.a.string,style:B.a.object,theme:B.a.oneOf(D.a.enumerateValue(P.a)),isRounded:B.a.bool,isCircular:B.a.bool,title:B.a.string,value:B.a.any,type:B.a.string,disabled:B.a.bool,isLoading:B.a.bool,disableTouchRipple:B.a.bool,iconCls:B.a.string,rightIconCls:B.a.string,rippleDisplayCenter:B.a.bool,tip:B.a.string,tipPosition:B.a.oneOf(D.a.enumerateValue(k.a.Position)),renderer:B.a.func,onClick:B.a.func},R.defaultProps={theme:P.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:k.a.Position.BOTTOM};var L=R;n.d(t,"a",function(){return L})},377:function(e,t,n){"use strict";var o=n(365),a=n.n(o),i=n(349),r=n.n(i),s=n(79),l=n.n(s),p=n(80),u=n.n(p),c=n(81),d=n.n(c),m=n(82),g=n.n(m),f=n(83),b=n.n(f),h=n(11),v=n.n(h),T=n(21),E=n.n(T),C=n(0),y=n.n(C),O=n(1),B=n.n(O),w=n(362),N=n.n(w),x=n(391),k=n(364),P=n(366),M=n(373),D=n(363);n(381);function R(e){return(window.innerWidth-e.offsetWidth)/2}function L(e){return(window.innerHeight-e.offsetHeight)/2}function I(e,t,n){if(t){var o={};switch(n){case P.a.TOP_LEFT:o.left=0,o.top=0;break;case P.a.TOP:o.left=R(t),o.top=0;break;case P.a.TOP_RIGHT:o.right=0,o.top=0;break;case P.a.BOTTOM_LEFT:o.left=0,o.bottom=0;break;case P.a.BOTTOM:o.left=R(t),o.bottom=0;break;case P.a.BOTTOM_RIGHT:o.right=0,o.bottom=0;break;case P.a.LEFT_TOP:o.left=0,o.top=0;break;case P.a.LEFT:o.left=0,o.top=L(t);break;case P.a.LEFT_BOTTOM:o.left=0,o.bottom=0;break;case P.a.RIGHT_TOP:o.right=0,o.top=0;break;case P.a.RIGHT:o.right=0,o.top=L(t);break;case P.a.RIGHT_BOTTOM:o.right=0,o.bottom=0;break;case P.a.CENTER:o.left=R(t),o.top=L(t)}return o}}var S={getStyle:I,setStyle:function(e,t,n){var o=I(0,t,n);if(o)for(var a in t.style.left=t.style.right=t.style.top=t.style.bottom=null,o)t.style[a]=o[a]+"px"}},V=function(e){function t(e){var n,o;l()(this,t);for(var a=arguments.length,i=new Array(a>1?a-1:0),r=1;r<a;r++)i[r-1]=arguments[r];return o=d()(this,(n=g()(t)).call.apply(n,[this,e].concat(i))),E()(v()(v()(o)),"getEl",function(){return o.refs.pop&&o.refs.pop.getEl()}),E()(v()(v()(o)),"resetPosition",function(e){var t=o.props,n=t.parentEl,a=t.position;S.setStyle(n,e,a)}),o}return b()(t,e),u()(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n.children,i=n.container,s=n.className,l=n.theme,p=n.position,u=n.isAnimated,c=(n.isEscClose,n.isBlurClose,n.shouldPreventContainerScroll,r()(n,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose","shouldPreventContainerScroll"])),d=N()("position-pop",(e={},E()(e,"theme-".concat(l),l),E()(e,"position-pop-".concat(p),p),E()(e,"position-pop-animated",u),E()(e,s,s),e));return y.a.createElement(x.a,a()({},c,{ref:"pop",className:d,container:i,isAnimated:u,onWheel:function(e){return M.a.wheelHandler(e,t.props)},resetPosition:this.resetPosition}),function(e){return"function"==typeof o?o(e):o})}}]),t}(C.Component);E()(V,"Position",P.a),E()(V,"Theme",k.a),V.propTypes={className:B.a.string,style:B.a.object,visible:B.a.bool,theme:B.a.oneOf(D.a.enumerateValue(k.a)),parentEl:B.a.object,position:B.a.oneOf(D.a.enumerateValue(P.a)),isAnimated:B.a.bool,depth:B.a.number,isBlurClose:B.a.bool,isEscClose:B.a.bool,shouldPreventContainerScroll:B.a.bool,container:B.a.node,showModal:B.a.bool,modalClassName:B.a.string,onRender:B.a.func,onRendered:B.a.func,onDestroy:B.a.func,onDestroyed:B.a.func,onWheel:B.a.func},V.defaultProps={parentEl:document.body,depth:6,visible:!1,theme:k.a.DEFAULT,position:P.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldPreventContainerScroll:!0,container:y.a.createElement("div",null),showModal:!1};var j=V;n.d(t,"a",function(){return j})},408:function(e,t,n){var o=n(409);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(147)(o,a);o.locals&&(e.exports=o.locals)},409:function(e,t,n){(e.exports=n(146)(!1)).push([e.i,".pop-examples .material-text-field {\n  margin-top: 24px; }\n\n.pop-examples .trigger-button {\n  width: 160px;\n  height: 50px;\n  margin: 0; }\n\n.pop-examples .button-group-wrapper {\n  position: relative;\n  width: 500px;\n  height: 280px;\n  margin-top: 32px; }\n  .pop-examples .button-group-wrapper .button-group .trigger-position-button {\n    width: 120px; }\n  .pop-examples .button-group-wrapper .button-group.top {\n    position: absolute;\n    left: 50px; }\n    .pop-examples .button-group-wrapper .button-group.top .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.left {\n    position: absolute;\n    top: 60px;\n    left: 0; }\n    .pop-examples .button-group-wrapper .button-group.left .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.right {\n    position: absolute;\n    top: 60px;\n    right: 0; }\n    .pop-examples .button-group-wrapper .button-group.right .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.bottom {\n    position: absolute;\n    left: 50px;\n    bottom: 0; }\n    .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.center {\n    position: absolute;\n    left: 190px;\n    top: 120px; }\n    .pop-examples .button-group-wrapper .button-group.center .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child {\n        margin-left: 0; }\n",""])},720:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},contentClassName:{type:"PropTypes.string",desc:"The CSS class name of the content element."},modalClassName:{type:"PropTypes.string"},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The popover theme.Can be primary,highlight,success,warning,error.",default:"Theme.DARK"},parentEl:{type:"PropTypes.object",default:"document.body"},triggerEl:{type:"PropTypes.object",desc:"This is the DOM element that will be used to set the position of the popover."},visible:{type:"PropTypes.bool",desc:"If true,the popover is visible.",default:"false"},hasTriangle:{type:"PropTypes.bool",desc:"If true,the popover will have a triangle on the top of the DOM element.",default:"true"},triangle:{type:"PropTypes.element"},position:{type:"PropTypes.oneOf",desc:"The popover alignment.",default:"Position.BOTTOM"},isAnimated:{type:"PropTypes.bool",desc:"If true, menu will have animation effects.",default:"true"},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},depth:{type:"PropTypes.number",desc:"The depth of Paper component."},isTriggerPositionFixed:{type:"PropTypes.bool",default:"false"},resetPositionWait:{type:"PropTypes.number",default:"250"},showModal:{type:"PropTypes.bool",default:"false"},onRender:{type:"PropTypes.func",desc:"The function of tip render."},onRendered:{type:"PropTypes.func",desc:"The function of tip rendered."},onDestroy:{type:"PropTypes.func",desc:"The function of tip destroy."},onDestroyed:{type:"PropTypes.func",desc:"The function of tip destroyed."},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},721:function(e,t,n){var o=n(722);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(147)(o,a);o.locals&&(e.exports=o.locals)},722:function(e,t,n){(e.exports=n(146)(!1)).push([e.i,".customized-tip .customized-tip-triangle {\n  position: relative;\n  top: -4px; }\n\n.customized-tip .tip-content {\n  border: 1px solid #e7e7e7; }\n\n.tip-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .tip-dialog-content-scroller .dialog-trigger-button {\n    display: block;\n    width: auto;\n    margin-bottom: 16px; }\n",""])},891:function(e,t,n){"use strict";n.r(t);var o=n(6),a=n.n(o),i=n(79),r=n.n(i),s=n(80),l=n.n(s),p=n(81),u=n.n(p),c=n(82),d=n.n(c),m=n(83),g=n.n(m),f=n(11),b=n.n(f),h=n(21),v=n.n(h),T=n(0),E=n.n(T),C=n(50),y=n(370),O=n(390),B=n(378),w=n(372),N=n(371),x=n(364),k=n(375),P=n(367),M=n(720),D=(n(408),n(721),function(e){function t(e){var n;return r()(this,t),n=u()(this,d()(t).call(this,e)),v()(b()(b()(n)),"show",function(e){var t=a()({},n.state.popVisible);t[e]=!0,n.setState({popVisible:t})}),v()(b()(b()(n)),"hide",function(e){var t=a()({},n.state.popVisible);t[e]=!1,n.setState({popVisible:t})}),n.state={popVisible:{}},n}return g()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.state.popVisible;return E.a.createElement("div",{className:"example pop-examples tip-examples"},E.a.createElement("h2",{className:"example-title"},"Tip"),E.a.createElement("p",null,"A ",E.a.createElement("span",null,"Tip")," can be used as an alternative to a Drop Down Tip that can contain elements inside."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(w.a,null,E.a.createElement(N.a,{className:"example-header",title:"With value"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"popup-example-wrapper"},E.a.createElement("p",null,"Set the ",E.a.createElement("code",null,"value")," property to show different position of ",E.a.createElement("code",null,"Tip"),"."),E.a.createElement("div",{className:"button-group-wrapper"},E.a.createElement("div",{className:"button-group top"},E.a.createElement(y.a,{ref:function(t){return e.trigger3=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Top Left",onMouseOver:function(){return e.show(3)},onMouseOut:function(){return e.hide(3)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger4=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Top",onMouseOver:function(){return e.show(4)},onMouseOut:function(){return e.hide(4)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger5=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Top right",onMouseOver:function(){return e.show(5)},onMouseOut:function(){return e.hide(5)}})),E.a.createElement("div",{className:"button-group right"},E.a.createElement(y.a,{ref:function(t){return e.trigger9=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Right Top",onMouseOver:function(){return e.show(9)},onMouseOut:function(){return e.hide(9)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger10=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Right",onMouseOver:function(){return e.show(10)},onMouseOut:function(){return e.hide(10)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger11=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){return e.show(11)},onMouseOut:function(){return e.hide(11)}})),E.a.createElement("div",{className:"button-group bottom"},E.a.createElement(y.a,{ref:function(t){return e.trigger0=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){return e.show(0)},onMouseOut:function(){return e.hide(0)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger1=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom",onMouseOver:function(){return e.show(1)},onMouseOut:function(){return e.hide(1)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger2=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){return e.show(2)},onMouseOut:function(){return e.hide(2)}})),E.a.createElement("div",{className:"button-group left"},E.a.createElement(y.a,{ref:function(t){return e.trigger6=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Left Top",onMouseOver:function(){return e.show(6)},onMouseOut:function(){return e.hide(6)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger7=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Left",onMouseOver:function(){return e.show(7)},onMouseOut:function(){return e.hide(7)}}),E.a.createElement(y.a,{ref:function(t){return e.trigger8=Object(C.findDOMNode)(t)},className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){return e.show(8)},onMouseOut:function(){return e.hide(8)}}))),E.a.createElement(O.a,{visible:t[0],triggerEl:this.trigger0,position:O.a.Position.BOTTOM_LEFT},"Tip Content"),E.a.createElement(O.a,{visible:t[1],triggerEl:this.trigger1,position:O.a.Position.BOTTOM},"Tip Content"),E.a.createElement(O.a,{visible:t[2],triggerEl:this.trigger2,position:O.a.Position.BOTTOM_RIGHT},"Tip Content"),E.a.createElement(O.a,{visible:t[3],triggerEl:this.trigger3,position:O.a.Position.TOP_LEFT},"Tip Content"),E.a.createElement(O.a,{visible:t[4],triggerEl:this.trigger4,position:O.a.Position.TOP},"Tip Content"),E.a.createElement(O.a,{visible:t[5],triggerEl:this.trigger5,position:O.a.Position.TOP_RIGHT},"Tip Content"),E.a.createElement(O.a,{visible:t[6],triggerEl:this.trigger6,position:O.a.Position.LEFT_TOP},"Tip Content"),E.a.createElement(O.a,{visible:t[7],triggerEl:this.trigger7,position:O.a.Position.LEFT},"Tip Content"),E.a.createElement(O.a,{visible:t[8],triggerEl:this.trigger8,position:O.a.Position.LEFT_BOTTOM},"Tip Content"),E.a.createElement(O.a,{visible:t[9],triggerEl:this.trigger9,position:O.a.Position.RIGHT_TOP},"Tip Content"),E.a.createElement(O.a,{visible:t[10],triggerEl:this.trigger10,position:O.a.Position.RIGHT},"Tip Content"),E.a.createElement(O.a,{visible:t[11],triggerEl:this.trigger11,position:O.a.Position.RIGHT_BOTTOM},"Tip Content"))))),E.a.createElement(w.a,null,E.a.createElement(N.a,{className:"example-header",title:"Customized Tip Triangle"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"popup-example-wrapper"},E.a.createElement(y.a,{ref:function(t){return e.trigger12=Object(C.findDOMNode)(t)},className:"trigger-button",value:"Show Tip",onMouseOver:function(){return e.show(12)},onMouseOut:function(){return e.hide(12)}}),E.a.createElement(O.a,{className:"customized-tip",theme:x.a.DEFAULT,visible:t[12],triggerEl:this.trigger12,triangle:E.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-tip-triangle",width:"17",height:"7"},E.a.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}}))},"Tip Content"))))),E.a.createElement(w.a,null,E.a.createElement(N.a,{className:"example-header",title:"Use Tip Provider"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"popup-example-wrapper"},E.a.createElement(B.a,{tipContent:"Tip Content"},E.a.createElement(y.a,{className:"trigger-button",value:"Show Tip",onMouseOver:function(){return console.log("onMouseOver")},onMouseOut:function(){return console.log("onMouseOut")}})))))),E.a.createElement(w.a,null,E.a.createElement(N.a,{className:"example-header",title:"Tip in Dialog"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"popup-example-wrapper"},E.a.createElement(y.a,{className:"trigger-button",value:"Show Dialog",onClick:function(){return e.show(13)}}),E.a.createElement(k.a,{visible:t[13],onRequestClose:function(){return e.hide(13)}},function(n){return E.a.createElement("div",{className:"tip-dialog-content-scroller"},E.a.createElement(y.a,{ref:function(t){return e.trigger14=Object(C.findDOMNode)(t)},className:"dialog-trigger-button",value:"Left Bottom",onMouseOver:function(){return e.show(14)},onMouseOut:function(){return e.hide(14)}}),E.a.createElement(O.a,{visible:t[14],triggerEl:e.trigger14,parentEl:n,position:O.a.Position.BOTTOM_LEFT},"Tip Content"),E.a.createElement(B.a,{tipContent:"Tip Content",parentEl:n,position:B.a.Position.BOTTOM_LEFT},E.a.createElement(y.a,{className:"dialog-trigger-button",value:"Show Tip"})))}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(P.a,{data:M}))}}]),t}(T.Component));t.default=D}}]);