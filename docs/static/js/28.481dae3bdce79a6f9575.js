(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{357:function(e,t,n){"use strict";var o=n(6),a=n.n(o),l=n(77),s=n.n(l),i=n(78),r=n.n(i),c=n(79),u=n.n(c),p=n(80),d=n.n(p),m=n(81),f=n.n(m),b=n(11),h=n.n(b),g=n(0),y=n.n(g),C=n(1),B=n.n(C),v=n(362),T=(n(358),function(e){function t(e){var n,o;return s()(this,t),(o=u()(this,d()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],o.generateData=(n=h()(h()(o)),o.generateData).bind(n),o}return f()(t,e),r()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(a()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(v.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(g.Component));T.propTypes={data:B.a.object},T.defaultProps={data:null},t.a=T},358:function(e,t,n){var o=n(359);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(142)(o,a);o.locals&&(e.exports=o.locals)},359:function(e,t,n){(e.exports=n(141)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},376:function(e,t,n){"use strict";var o=n(360),a=n.n(o),l=n(342),s=n.n(l),i=n(77),r=n.n(i),c=n(78),u=n.n(c),p=n(79),d=n.n(p),m=n(80),f=n.n(m),b=n(81),h=n.n(b),g=n(11),y=n.n(g),C=n(20),B=n.n(C),v=n(0),T=n.n(v),k=n(1),E=n.n(k),w=n(354),x=n.n(w),N=n(388),P=n(368),D=n(356),R=n(361),I=n(355),O=function(e){function t(e){var n,o;r()(this,t);for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];return o=d()(this,(n=f()(t)).call.apply(n,[this,e].concat(l))),B()(y()(y()(o)),"startRipple",function(e,t){o.refs.baseButton&&o.refs.baseButton.startRipple(e,t)}),B()(y()(y()(o)),"endRipple",function(){o.refs.baseButton&&o.refs.baseButton.endRipple()}),B()(y()(y()(o)),"triggerRipple",function(e,t){o.refs.baseButton&&o.refs.baseButton.triggerRipple(e,t)}),o}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=s()(e,["children","className"]),l=x()("flat-button",B()({},n,n));return T.a.createElement(N.a,a()({},o,{ref:"baseButton",className:l}),t)}}]),t}(v.Component);B()(O,"Theme",D.a),B()(O,"TipPosition",R.a),O.propTypes={className:E.a.string,style:E.a.object,theme:E.a.oneOf(I.a.enumerateValue(D.a)),isRounded:E.a.bool,isCircular:E.a.bool,title:E.a.string,value:E.a.any,type:E.a.string,disabled:E.a.bool,isLoading:E.a.bool,disableTouchRipple:E.a.bool,iconCls:E.a.string,rightIconCls:E.a.string,rippleDisplayCenter:E.a.bool,tip:E.a.string,tipPosition:E.a.oneOf(I.a.enumerateValue(P.a.Position)),renderer:E.a.func,onClick:E.a.func},O.defaultProps={theme:D.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:P.a.Position.BOTTOM};var H=O;n.d(t,"a",function(){return H})},384:function(e,t,n){"use strict";var o=n(6),a=n.n(o),l=n(342),s=n.n(l),i=n(77),r=n.n(i),c=n(78),u=n.n(c),p=n(79),d=n.n(p),m=n(80),f=n.n(m),b=n(81),h=n.n(b),g=n(11),y=n.n(g),C=n(20),B=n.n(C),v=n(0),T=n.n(v),k=n(1),E=n.n(k),w=n(344),x=n.n(w),N=n(405),P=n.n(N),D=n(354),R=n.n(D),I=n(402),O=n(356),H=n(361),V=n(365),L=n(355);n(380);function S(e){return(window.innerWidth-e.offsetWidth)/2}function M(e){return(window.innerHeight-e.offsetHeight)/2}function K(e,t,n){if(t){var o={};switch(n){case H.a.TOP_LEFT:o.left=0,o.top=0;break;case H.a.TOP:o.left=S(t),o.top=0;break;case H.a.TOP_RIGHT:o.right=0,o.top=0;break;case H.a.BOTTOM_LEFT:o.left=0,o.bottom=0;break;case H.a.BOTTOM:o.left=S(t),o.bottom=0;break;case H.a.BOTTOM_RIGHT:o.right=0,o.bottom=0;break;case H.a.LEFT_TOP:o.left=0,o.top=0;break;case H.a.LEFT:o.left=0,o.top=M(t);break;case H.a.LEFT_BOTTOM:o.left=0,o.bottom=0;break;case H.a.RIGHT_TOP:o.right=0,o.top=0;break;case H.a.RIGHT:o.right=0,o.top=M(t);break;case H.a.RIGHT_BOTTOM:o.right=0,o.bottom=0;break;case H.a.CENTER:o.left=S(t),o.top=M(t)}return o}}var q={getStyle:K,setStyle:function(e,t,n){var o=K(0,t,n);if(o)for(var a in t.style.left=t.style.right=t.style.top=t.style.bottom=null,o)t.style[a]=o[a]+"px"}},A=function(e){function t(e){var n,o;r()(this,t);for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];return o=d()(this,(n=f()(t)).call.apply(n,[this,e].concat(l))),B()(y()(y()(o)),"enterHandler",function(e){o.transitionEl=e,o.resetPosition(),o.setState({enter:!0},function(){var t=o.props.onRender;t&&t(e)})}),B()(y()(y()(o)),"enteredHandler",function(e){var t=o.props.onRendered;t&&t(e)}),B()(y()(y()(o)),"exitHandler",function(e){o.setState({enter:!1},function(){var t=o.props.onDestroy;t&&t(e)})}),B()(y()(y()(o)),"exitedHandler",function(e){o.setState({exited:!0},function(){var t=o.props.onDestroyed;t&&t(e)})}),B()(y()(y()(o)),"resizeHandler",x()(function(){o.resetPosition()},250)),B()(y()(y()(o)),"getEl",function(){return o.transitionEl}),B()(y()(y()(o)),"resetPosition",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.props;q.setStyle(e.parentEl,o.transitionEl,e.position)}),o.state={enter:!1,exited:!0},o}return h()(t,e),u()(t,[{key:"componentDidMount",value:function(){V.a.addEvent(window,"resize",this.resizeHandler)}},{key:"componentWillReceiveProps",value:function(e){e.visible&&this.setState({exited:!1}),e.position!==this.props.position&&this.resetPosition(e)}},{key:"componentWillUnmount",value:function(){V.a.removeEvent(window,"resize",this.resizeHandler)}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.className,l=n.theme,i=n.parentEl,r=n.position,c=n.isAnimated,u=n.visible,p=n.container,d=n.showModal,m=n.modalClassName,f=(n.isEscClose,n.isBlurClose,n.shouldPreventContainerScroll,n.onRender,n.onRendered,n.onDestroy,n.onDestroyed,s()(n,["className","theme","parentEl","position","isAnimated","visible","container","showModal","modalClassName","isEscClose","isBlurClose","shouldPreventContainerScroll","onRender","onRendered","onDestroy","onDestroyed"])),b=this.state,h=b.enter,g=b.exited,y=R()("position-pop-modal",B()({hidden:!h,"position-pop-modal-animated":c},m,m)),C=R()("position-pop",(e={hidden:!h},B()(e,"theme-".concat(l),l),B()(e,"position-pop-".concat(r),r),B()(e,"position-pop-animated",c),B()(e,o,o),e));return T.a.createElement(I.a,{visible:!g,parentEl:i},d?T.a.createElement(P.a,{appear:!0,in:u,timeout:250},T.a.createElement("div",{className:y})):null,T.a.createElement(P.a,{appear:!0,in:u,timeout:250,onEnter:this.enterHandler,onEntered:this.enteredHandler,onExit:this.exitHandler,onExited:this.exitedHandler},Object(v.cloneElement)(p,a()({},f,{className:C,onWheel:function(e){return V.a.wheelHandler(e,t.props)}}))))}}]),t}(v.Component);B()(A,"Position",H.a),B()(A,"Theme",O.a),A.propTypes={className:E.a.string,style:E.a.object,visible:E.a.bool,theme:E.a.oneOf(L.a.enumerateValue(O.a)),parentEl:E.a.object,position:E.a.oneOf(L.a.enumerateValue(H.a)),isAnimated:E.a.bool,depth:E.a.number,isBlurClose:E.a.bool,isEscClose:E.a.bool,shouldPreventContainerScroll:E.a.bool,container:E.a.node,showModal:E.a.bool,modalClassName:E.a.string,onRender:E.a.func,onRendered:E.a.func,onDestroy:E.a.func,onDestroyed:E.a.func,onWheel:E.a.func},A.defaultProps={parentEl:document.body,depth:6,visible:!1,theme:O.a.DEFAULT,position:H.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldPreventContainerScroll:!0,container:T.a.createElement("div",null),showModal:!1};var j=A;n.d(t,"a",function(){return j})},391:function(e,t,n){"use strict";var o=n(360),a=n.n(o),l=n(342),s=n.n(l),i=n(77),r=n.n(i),c=n(78),u=n.n(c),p=n(79),d=n.n(p),m=n(80),f=n.n(m),b=n(81),h=n.n(b),g=n(11),y=n.n(g),C=n(20),B=n.n(C),v=n(0),T=n.n(v),k=n(1),E=n.n(k),w=n(354),x=n.n(w),N=n(384),P=n(381),D=n(376),R=n(369),I=n(374),O=n(356),H=n(361),V=n(355),L=n(398),S=function(e){function t(e){var n,o;r()(this,t);for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];return o=d()(this,(n=f()(t)).call.apply(n,[this,e].concat(l))),B()(y()(y()(o)),"okButtonClickHandler",function(){var e=o.props,t=e.visible,n=e.onOKButtonClick;t&&n&&n(function(){o.setState({visible:!1},function(){var e=o.props.onRequestClose;e&&e()})})}),B()(y()(y()(o)),"cancelButtonClickHandler",function(){var e=o.props,t=e.onCancelButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},function(){n&&n()})}),B()(y()(y()(o)),"closeButtonClickHandler",function(){var e=o.props,t=e.onCloseButtonClick,n=e.onRequestClose;t&&t(),o.setState({visible:!1},function(){n&&n()})}),B()(y()(y()(o)),"renderHandler",function(){L.a.push(y()(y()(o)),{shouldLockBody:o.props.showModal});var e=o.props.onRender;e&&e.apply(void 0,arguments)}),B()(y()(y()(o)),"destroyHandler",function(){L.a.pop(y()(y()(o)));var e=o.props.onDestroy;e&&e.apply(void 0,arguments)}),o}return h()(t,e),u()(t,[{key:"componentWillUnmount",value:function(){L.a.pop(this)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,o=e.modalClassName,l=e.position,i=e.disabled,r=e.showModal,c=e.title,u=e.buttons,p=e.isLoading,d=e.visible,m=e.okButtonVisible,f=e.okButtonText,b=e.okButtonIconCls,h=e.okButtonTheme,g=e.okButtonDisabled,y=e.okButtonIsLoading,C=e.cancelButtonVisible,k=e.cancelButtonText,E=e.cancelButtonIconCls,w=e.cancelButtonDisabled,O=e.cancelButtonIsLoading,H=e.cancelButtonTheme,V=e.closeButtonVisible,L=e.closeIconCls,S=(e.isBlurClose,e.isEscClose,e.onRequestClose,e.onOKButtonClick,e.onCloseButtonClick,e.onCancelButtonClick,s()(e,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"])),M=x()("dialog",B()({},n,n));return T.a.createElement(N.a,a()({},S,{className:M,position:l,visible:d,container:T.a.createElement(P.a,{depth:6}),showModal:r,modalClassName:o,onRender:this.renderHandler,onDestroy:this.destroyHandler}),T.a.createElement("div",{className:"dialog-title"},c,V?T.a.createElement(I.a,{className:"dialog-title-close-button",iconCls:L,disabled:i,onClick:this.closeButtonClickHandler}):null),T.a.createElement("div",{className:"dialog-content"},t),T.a.createElement("div",{className:"dialog-buttons"},u?v.Children.map(u,function(e){return Object(v.cloneElement)(e,{isLoading:p,disabled:i})}):null,!u&&m?T.a.createElement(R.a,{className:"ok-button",value:f,iconCls:b,theme:h,disabled:g,isLoading:p||y,disableTouchRipple:!0,onClick:this.okButtonClickHandler}):null,!u&&C?T.a.createElement(D.a,{className:"cancel-button",value:k,iconCls:E,theme:H,disabled:w,isLoading:p||O,disableTouchRipple:!0,onClick:this.cancelButtonClickHandler}):null))}}]),t}(v.Component);B()(S,"ButtonTheme",O.a),B()(S,"Position",H.a),S.propTypes={className:E.a.string,modalClassName:E.a.string,style:E.a.object,parentEl:E.a.object,position:E.a.oneOf(V.a.enumerateValue(H.a)),disabled:E.a.bool,visible:E.a.bool,showModal:E.a.bool,title:E.a.any,isBlurClose:E.a.bool,isLoading:E.a.bool,okButtonVisible:E.a.bool,okButtonText:E.a.string,okButtonIconCls:E.a.string,okButtonDisabled:E.a.bool,okButtonIsLoading:E.a.bool,okButtonTheme:E.a.oneOf(V.a.enumerateValue(O.a)),cancelButtonVisible:E.a.bool,cancelButtonText:E.a.string,cancelButtonIconCls:E.a.string,cancelButtonDisabled:E.a.bool,cancelButtonIsLoading:E.a.bool,cancelButtonTheme:E.a.oneOf(V.a.enumerateValue(O.a)),closeButtonVisible:E.a.bool,closeIconCls:E.a.string,isEscClose:E.a.bool,buttons:E.a.any,onRender:E.a.func,onRequestClose:E.a.func,onOKButtonClick:E.a.func,onCancelButtonClick:E.a.func,onCloseButtonClick:E.a.func},S.defaultProps={parentEl:document.body,position:H.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:O.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:O.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var M=S;n.d(t,"a",function(){return M})},671:function(e){e.exports={className:{type:"PropTypes.string",desc:"The css class name of the root element."},modalClassName:{type:"PropTypes.string",desc:"The css class name of the modal."},style:{type:"PropTypes.object",desc:"The styles of the root element."},parentEl:{type:"PropTypes.object",default:"document.body"},position:{type:"PropTypes.oneOf",desc:"The dialog alignment.",default:"Position.CENTER"},disabled:{type:"PropTypes.bool",desc:"If true,the element will disabled.",default:"false"},visible:{type:"PropTypes.bool",desc:"If true,dialog box will display.",default:"false"},showModal:{type:"PropTypes.bool",desc:"If true,the pop-up box will be displayed in the mask layer, or the pop-up box will appear below the element.",default:"true"},title:{type:"PropTypes.any",desc:"Set the title of dialog."},isBlurClose:{type:"PropTypes.bool",desc:"If true,when press down mouse the pop-up box will closed.",default:"false"},isLoading:{type:"PropTypes.bool",default:"false"},okButtonVisible:{type:"PropTypes.bool",desc:"If true, the OK button will display.",default:"true"},okButtonText:{type:"PropTypes.string",desc:"Set the text value of the OK button.",default:"OK"},okButtonIconCls:{type:"PropTypes.string",desc:"Set the icon class of the OK button."},okButtonDisabled:{type:"PropTypes.bool",desc:"If true, the OK button will disabled.",default:"false"},okButtonIsLoading:{type:"PropTypes.bool",desc:"If true, the ok button will have loading effect.",default:"false"},okButtonTheme:{type:"PropTypes.oneOf",desc:"Set theme of OK button.",default:"Theme.SUCCESS"},cancelButtonVisible:{type:"PropTypes.bool",desc:"If true, the cancel button will display.",default:"true"},cancelButtonText:{type:"PropTypes.string",desc:"Set the text value of the cancel button.",default:"Cancel"},cancelButtonIconCls:{type:"PropTypes.string",desc:"Set the icon class of the cancel button."},cancelButtonDisabled:{type:"PropTypes.bool",desc:"If true, the cancel button will disabled.",default:"false"},cancelButtonIsLoading:{type:"PropTypes.bool",desc:"If true, the cancel button will have loading effect.",default:"false"},cancelButtonTheme:{type:"PropTypes.oneOf",desc:"Set theme of cancel button.",default:"Theme.DEFAULT"},closeButtonVisible:{type:"PropTypes.bool",desc:"If true, the close button in title will display.",default:"true"},closeIconCls:{type:"PropTypes.string",default:"fas fa-times"},isEscClose:{type:"PropTypes.bool",default:"true"},buttons:{type:"PropTypes.any",desc:"The buttons of Dialog."},onRender:{type:"PropTypes.func",desc:"The function of dialog render."},onRequestClose:{type:"PropTypes.func",desc:"The function that trigger when click submit."},onOKButtonClick:{type:"PropTypes.func",desc:"Callback function fired when click the ok button."},onCancelButtonClick:{type:"PropTypes.func",desc:"Callback function fired when click the cancel button."},onCloseButtonClick:{type:"PropTypes.func",desc:"Callback function fired when click the close button."}}},672:function(e,t,n){var o=n(673);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(142)(o,a);o.locals&&(e.exports=o.locals)},673:function(e,t,n){(e.exports=n(141)(!1)).push([e.i,".dialog-example-content {\n  width: 1000px;\n  height: 1000px; }\n\n.blur-modal {\n  background: rgba(255, 255, 255, 0.8); }\n",""])},844:function(e,t,n){"use strict";n.r(t);var o=n(77),a=n.n(o),l=n(78),s=n.n(l),i=n(79),r=n.n(i),c=n(80),u=n.n(c),p=n(81),d=n.n(p),m=n(11),f=n.n(m),b=n(20),h=n.n(b),g=n(0),y=n.n(g),C=n(369),B=n(391),v=n(364),T=n(363),k=n(357),E=n(671),w=(n(672),function(e){function t(e){var n;return a()(this,t),n=r()(this,u()(t).call(this,e)),h()(f()(f()(n)),"openDialog",function(e){n.setState(h()({},"dialogVisible".concat(e),!0),function(){2===e&&(document.querySelector(".app").style.filter="blur(10px)")})}),h()(f()(f()(n)),"closeDialog",function(e){n.setState(h()({},"dialogVisible".concat(e),!1),function(){document.querySelector(".app").style.filter=""})}),h()(f()(f()(n)),"okHandler",function(e){console.log("OK button clicked"),e()}),h()(f()(f()(n)),"cancelHandler",function(){console.log("Cancel button clicked")}),h()(f()(f()(n)),"closeHandler",function(){console.log("Close button clicked")}),n.state={dialogVisible1:!1,dialogVisible2:!1,dialogVisible3:!1,dialogVisible4:!1},n}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.dialogVisible1,o=t.dialogVisible2,a=t.dialogVisible3,l=t.dialogVisible4;return y.a.createElement("div",{className:"example dialog-examples"},y.a.createElement("h2",{className:"example-title"},"Dialog"),y.a.createElement("p",null,y.a.createElement("span",null,"Dialogs"),"contain text and UI controls focused on a specific task.They inform users about critical information require users to make decisions."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(v.a,null,y.a.createElement(T.a,{className:"example-header",title:"Basic"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"popup-example-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"Dialog")," example use basic properties."),y.a.createElement(C.a,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(1)}}),y.a.createElement(B.a,{visible:n,title:"Dialog",okButtonTheme:B.a.ButtonTheme.PRIMARY,isBlurClose:!0,showModal:!1,onRequestClose:function(){return e.closeDialog(1)},onOKButtonClick:this.okHandler,onCancelButtonClick:this.cancelHandler,onCloseButtonClick:this.closeHandler},y.a.createElement("div",{className:"dialog-example-content"},"Content")))))),y.a.createElement(v.a,null,y.a.createElement(T.a,{className:"example-header",title:"Blur Modal"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"popup-example-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"Dialog")," example use modal."),y.a.createElement(C.a,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(2)}}),y.a.createElement(B.a,{modalClassName:"blur-modal",visible:o,title:"Dialog",okButtonTheme:B.a.ButtonTheme.PRIMARY,okButtonText:"OK",okButtonIconCls:"fas fa-check",cancelButtonVisible:!0,cancelButtonText:"CANCEL",cancelButtonIconCls:"fas fa-times",cancelButtonTheme:"error",onRequestClose:function(){return e.closeDialog(2)},onOKButtonClick:this.okHandler,onCancelButtonClick:this.cancelHandler,onCloseButtonClick:this.closeHandler},y.a.createElement("div",{className:"dialog-example-content"},"Content")))))),y.a.createElement(v.a,null,y.a.createElement(T.a,{className:"example-header",title:"Nexted Dialogs"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"popup-example-wrapper"},y.a.createElement(C.a,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(3)}}),y.a.createElement(B.a,{visible:a,title:"Dialog",onRequestClose:function(){return e.closeDialog(3)}},y.a.createElement("div",{className:"dialog-example-content"},y.a.createElement(C.a,{className:"trigger-button",value:"Toggle Dialog",style:{width:"120px"},onClick:function(){return e.openDialog(4)}}),y.a.createElement(B.a,{visible:l,title:"Dialog",onRequestClose:function(){return e.closeDialog(4)}},y.a.createElement("div",{className:"dialog-example-content"},"Content")))))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(k.a,{data:E}))}}]),t}(g.Component));t.default=w}}]);