(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{367:function(e,t,n){"use strict";var a=n(6),o=n.n(a),l=n(79),i=n.n(l),s=n(80),r=n.n(s),c=n(81),u=n.n(c),d=n(82),p=n.n(d),h=n(83),m=n.n(h),f=n(11),b=n.n(f),v=n(0),E=n.n(v),g=n(1),C=n.n(g),y=n(374),B=(n(368),function(e){function t(e){var n,a;return i()(this,t),(a=u()(this,p()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=(n=b()(b()(a)),a.generateData).bind(n),a}return m()(t,e),r()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(o()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return E.a.createElement("div",{className:"prop-type-desc-table-wrapper"},E.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(v.Component));B.propTypes={data:C.a.object},B.defaultProps={data:null},t.a=B},368:function(e,t,n){var a=n(369);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(147)(a,o);a.locals&&(e.exports=a.locals)},369:function(e,t,n){(e.exports=n(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},375:function(e,t,n){"use strict";var a=n(365),o=n.n(a),l=n(349),i=n.n(l),s=n(79),r=n.n(s),c=n(80),u=n.n(c),d=n(81),p=n.n(d),h=n(82),m=n.n(h),f=n(83),b=n.n(f),v=n(11),E=n.n(v),g=n(21),C=n.n(g),y=n(0),B=n.n(y),T=n(1),k=n.n(T),x=n(362),w=n.n(x),N=n(377),P=n(383),S=n(376),F=n(370),D=n(379),I=n(364),R=n(366),L=n(363),O=n(389),M=function(e){function t(e){var n,a;r()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return a=p()(this,(n=m()(t)).call.apply(n,[this,e].concat(l))),C()(E()(E()(a)),"getEl",function(){return a.refs.pop&&a.refs.pop.getEl()}),C()(E()(E()(a)),"okButtonClickHandler",function(){var e=a.props,t=e.visible,n=e.onOKButtonClick;t&&n&&n(function(){a.setState({visible:!1},function(){var e=a.props.onRequestClose;e&&e()})})}),C()(E()(E()(a)),"cancelButtonClickHandler",function(){var e=a.props,t=e.onCancelButtonClick,n=e.onRequestClose;t&&t(),a.setState({visible:!1},function(){n&&n()})}),C()(E()(E()(a)),"closeButtonClickHandler",function(){var e=a.props,t=e.onCloseButtonClick,n=e.onRequestClose;t&&t(),a.setState({visible:!1},function(){n&&n()})}),C()(E()(E()(a)),"renderHandler",function(){O.a.push(E()(E()(a)),{shouldLockBody:a.props.showModal});var e=a.props.onRender;e&&e.apply(void 0,arguments)}),C()(E()(E()(a)),"destroyHandler",function(){O.a.pop(E()(E()(a)));var e=a.props.onDestroy;e&&e.apply(void 0,arguments)}),a}return b()(t,e),u()(t,[{key:"componentWillUnmount",value:function(){O.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.className,l=t.modalClassName,s=t.position,r=t.disabled,c=t.showModal,u=t.title,d=t.buttons,p=t.isLoading,h=t.visible,m=t.okButtonVisible,f=t.okButtonText,b=t.okButtonIconCls,v=t.okButtonTheme,E=t.okButtonDisabled,g=t.okButtonIsLoading,T=t.cancelButtonVisible,k=t.cancelButtonText,x=t.cancelButtonIconCls,I=t.cancelButtonDisabled,R=t.cancelButtonIsLoading,L=t.cancelButtonTheme,O=t.closeButtonVisible,M=t.closeIconCls,V=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,i()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"])),H=w()("dialog",C()({},a,a));return B.a.createElement(N.a,o()({},V,{ref:"pop",className:H,position:s,visible:h,container:B.a.createElement(P.a,{depth:6}),showModal:c,modalClassName:l,onRender:this.renderHandler,onDestroy:this.destroyHandler}),function(t){return B.a.createElement(y.Fragment,null,B.a.createElement("div",{className:"dialog-title"},u,O?B.a.createElement(D.a,{className:"dialog-title-close-button",iconCls:M,disabled:r,onClick:e.closeButtonClickHandler}):null),B.a.createElement("div",{className:"dialog-content"},"function"==typeof n?n(t&&t.querySelector(".dialog-content"),t):n),B.a.createElement("div",{className:"dialog-buttons"},d?y.Children.map(d,function(e){return Object(y.cloneElement)(e,{isLoading:p,disabled:r})}):null,!d&&m?B.a.createElement(F.a,{className:"ok-button",value:f,iconCls:b,theme:v,disabled:E,isLoading:p||g,disableTouchRipple:!0,onClick:e.okButtonClickHandler}):null,!d&&T?B.a.createElement(S.a,{className:"cancel-button",value:k,iconCls:x,theme:L,disabled:I,isLoading:p||R,disableTouchRipple:!0,onClick:e.cancelButtonClickHandler}):null))})}}]),t}(y.Component);C()(M,"ButtonTheme",I.a),C()(M,"Position",R.a),M.propTypes={className:k.a.string,modalClassName:k.a.string,style:k.a.object,parentEl:k.a.object,position:k.a.oneOf(L.a.enumerateValue(R.a)),disabled:k.a.bool,visible:k.a.bool,showModal:k.a.bool,title:k.a.any,isBlurClose:k.a.bool,isLoading:k.a.bool,okButtonVisible:k.a.bool,okButtonText:k.a.string,okButtonIconCls:k.a.string,okButtonDisabled:k.a.bool,okButtonIsLoading:k.a.bool,okButtonTheme:k.a.oneOf(L.a.enumerateValue(I.a)),cancelButtonVisible:k.a.bool,cancelButtonText:k.a.string,cancelButtonIconCls:k.a.string,cancelButtonDisabled:k.a.bool,cancelButtonIsLoading:k.a.bool,cancelButtonTheme:k.a.oneOf(L.a.enumerateValue(I.a)),closeButtonVisible:k.a.bool,closeIconCls:k.a.string,isEscClose:k.a.bool,buttons:k.a.any,onRender:k.a.func,onRequestClose:k.a.func,onOKButtonClick:k.a.func,onCancelButtonClick:k.a.func,onCloseButtonClick:k.a.func},M.defaultProps={parentEl:document.body,position:R.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:I.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:I.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var V=M;n.d(t,"a",function(){return V})},376:function(e,t,n){"use strict";var a=n(365),o=n.n(a),l=n(349),i=n.n(l),s=n(79),r=n.n(s),c=n(80),u=n.n(c),d=n(81),p=n.n(d),h=n(82),m=n.n(h),f=n(83),b=n.n(f),v=n(11),E=n.n(v),g=n(21),C=n.n(g),y=n(0),B=n.n(y),T=n(1),k=n.n(T),x=n(362),w=n.n(x),N=n(385),P=n(378),S=n(364),F=n(366),D=n(363),I=function(e){function t(e){var n,a;r()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return a=p()(this,(n=m()(t)).call.apply(n,[this,e].concat(l))),C()(E()(E()(a)),"startRipple",function(e,t){a.refs.baseButton&&a.refs.baseButton.startRipple(e,t)}),C()(E()(E()(a)),"endRipple",function(){a.refs.baseButton&&a.refs.baseButton.endRipple()}),C()(E()(E()(a)),"triggerRipple",function(e,t){a.refs.baseButton&&a.refs.baseButton.triggerRipple(e,t)}),a}return b()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=i()(e,["children","className"]),l=w()("flat-button",C()({},n,n));return B.a.createElement(N.a,o()({},a,{ref:"baseButton",className:l}),t)}}]),t}(y.Component);C()(I,"Theme",S.a),C()(I,"TipPosition",F.a),I.propTypes={className:k.a.string,style:k.a.object,theme:k.a.oneOf(D.a.enumerateValue(S.a)),isRounded:k.a.bool,isCircular:k.a.bool,title:k.a.string,value:k.a.any,type:k.a.string,disabled:k.a.bool,isLoading:k.a.bool,disableTouchRipple:k.a.bool,iconCls:k.a.string,rightIconCls:k.a.string,rippleDisplayCenter:k.a.bool,tip:k.a.string,tipPosition:k.a.oneOf(D.a.enumerateValue(P.a.Position)),renderer:k.a.func,onClick:k.a.func},I.defaultProps={theme:S.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:P.a.Position.BOTTOM};var R=I;n.d(t,"a",function(){return R})},377:function(e,t,n){"use strict";var a=n(365),o=n.n(a),l=n(349),i=n.n(l),s=n(79),r=n.n(s),c=n(80),u=n.n(c),d=n(81),p=n.n(d),h=n(82),m=n.n(h),f=n(83),b=n.n(f),v=n(11),E=n.n(v),g=n(21),C=n.n(g),y=n(0),B=n.n(y),T=n(1),k=n.n(T),x=n(362),w=n.n(x),N=n(391),P=n(364),S=n(366),F=n(373),D=n(363);n(381);function I(e){return(window.innerWidth-e.offsetWidth)/2}function R(e){return(window.innerHeight-e.offsetHeight)/2}function L(e,t,n){if(t){var a={};switch(n){case S.a.TOP_LEFT:a.left=0,a.top=0;break;case S.a.TOP:a.left=I(t),a.top=0;break;case S.a.TOP_RIGHT:a.right=0,a.top=0;break;case S.a.BOTTOM_LEFT:a.left=0,a.bottom=0;break;case S.a.BOTTOM:a.left=I(t),a.bottom=0;break;case S.a.BOTTOM_RIGHT:a.right=0,a.bottom=0;break;case S.a.LEFT_TOP:a.left=0,a.top=0;break;case S.a.LEFT:a.left=0,a.top=R(t);break;case S.a.LEFT_BOTTOM:a.left=0,a.bottom=0;break;case S.a.RIGHT_TOP:a.right=0,a.top=0;break;case S.a.RIGHT:a.right=0,a.top=R(t);break;case S.a.RIGHT_BOTTOM:a.right=0,a.bottom=0;break;case S.a.CENTER:a.left=I(t),a.top=R(t)}return a}}var O={getStyle:L,setStyle:function(e,t,n){var a=L(0,t,n);if(a)for(var o in t.style.left=t.style.right=t.style.top=t.style.bottom=null,a)t.style[o]=a[o]+"px"}},M=function(e){function t(e){var n,a;r()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),i=1;i<o;i++)l[i-1]=arguments[i];return a=p()(this,(n=m()(t)).call.apply(n,[this,e].concat(l))),C()(E()(E()(a)),"getEl",function(){return a.refs.pop&&a.refs.pop.getEl()}),C()(E()(E()(a)),"resetPosition",function(e){var t=a.props,n=t.parentEl,o=t.position;O.setStyle(n,e,o)}),a}return b()(t,e),u()(t,[{key:"render",value:function(){var e,t=this,n=this.props,a=n.children,l=n.container,s=n.className,r=n.theme,c=n.position,u=n.isAnimated,d=(n.isEscClose,n.isBlurClose,n.shouldPreventContainerScroll,i()(n,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose","shouldPreventContainerScroll"])),p=w()("position-pop",(e={},C()(e,"theme-".concat(r),r),C()(e,"position-pop-".concat(c),c),C()(e,"position-pop-animated",u),C()(e,s,s),e));return B.a.createElement(N.a,o()({},d,{ref:"pop",className:p,container:l,isAnimated:u,onWheel:function(e){return F.a.wheelHandler(e,t.props)},resetPosition:this.resetPosition}),function(e){return"function"==typeof a?a(e):a})}}]),t}(y.Component);C()(M,"Position",S.a),C()(M,"Theme",P.a),M.propTypes={className:k.a.string,style:k.a.object,visible:k.a.bool,theme:k.a.oneOf(D.a.enumerateValue(P.a)),parentEl:k.a.object,position:k.a.oneOf(D.a.enumerateValue(S.a)),isAnimated:k.a.bool,depth:k.a.number,isBlurClose:k.a.bool,isEscClose:k.a.bool,shouldPreventContainerScroll:k.a.bool,container:k.a.node,showModal:k.a.bool,modalClassName:k.a.string,onRender:k.a.func,onRendered:k.a.func,onDestroy:k.a.func,onDestroyed:k.a.func,onWheel:k.a.func},M.defaultProps={parentEl:document.body,depth:6,visible:!1,theme:P.a.DEFAULT,position:S.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldPreventContainerScroll:!0,container:B.a.createElement("div",null),showModal:!1};var V=M;n.d(t,"a",function(){return V})},415:function(e,t,n){"use strict";var a=n(79),o=n.n(a),l=n(80),i=n.n(l),s=n(81),r=n.n(s),c=n(82),u=n.n(c),d=n(83),p=n.n(d),h=n(11),m=n.n(h),f=n(21),b=n.n(f),v=n(0),E=n.n(v),g=n(1),C=n.n(g),y=n(362),B=n.n(y),T=n(351),k=n.n(T),x=n(420),w=n(378),N=n(373),P=function(e){function t(e){var n,a;o()(this,t);for(var l=arguments.length,i=new Array(l>1?l-1:0),s=1;s<l;s++)i[s-1]=arguments[s];return a=r()(this,(n=u()(t)).call.apply(n,[this,e].concat(i))),b()(m()(m()(a)),"triggerElement",function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}),b()(m()(m()(a)),"onInputChange",function(e){a.setState({changeText:e})}),b()(m()(m()(a)),"showInput",function(e){a.setState({hide:!1},function(){a.refs.textField.refs.input.focus(),a.props.onEditStart&&a.props.onEditStart(e)})}),b()(m()(m()(a)),"downHandle",function(e){var t=e||event;!1!==a.state.hide||a.triggerElement(t.target,a.refs.editableField)||a.finishEdit(e)}),b()(m()(m()(a)),"finishEdit",function(e){var t=a.state.text!==a.state.changeText;t&&a.props.beforeChange&&!1===a.props.beforeChange(a.state.changeText)?e.preventDefault():a.setState({hide:!0,text:k()(a.state.changeText),changeText:k()(a.state.changeText)},function(){a.props.onEditEnd&&a.props.onEditEnd(e),t&&a.props.onChange&&a.props.onChange(a.state.text)})}),b()(m()(m()(a)),"keyDownHandle",function(e){var t=a.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&a.finishEdit(e),!0)}),a.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},a}return p()(t,e),i()(t,[{key:"componentDidMount",value:function(){N.a.addEvent(document,"mousedown",this.downHandle),N.a.addEvent(document,"keydown",this.keyDownHandle)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},function(){t.props.onEditEnd&&t.props.onEditEnd()})}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.refs.editableFieldText&&this.refs.editableFieldText.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){N.a.removeEvent(document,"mousedown",this.downHandle),N.a.removeEvent(document,"keydown",this.keyDownHandle)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,o=e.name,l=e.disabled,i=e.tip,s=e.tipPosition,r=e.title,c=e.onMouseDown,u=e.onClick,d=e.showModal,p=e.maxLength,h=e.autoWidth,m=e.parentEl,f=this.state,v=f.changeText,g=f.text,C=f.hide,y=f.inputAutoWidth,T=B()("editable-field",b()({},n,n)),k=h&&"number"==typeof y?{width:parseInt(y)+42}:{};return E.a.createElement(w.a,{tipContent:i,parentEl:m,position:s},E.a.createElement("div",{ref:"editableField",className:T,style:a,title:"".concat(l?"":r),onMouseDown:c,onClick:u},E.a.createElement("span",{className:"editable-field-hidden-text",ref:"editableFieldText",disabled:l},v),E.a.createElement("span",{className:"editable-field-text",disabled:l},g),!0===C?E.a.createElement("span",{className:"editable-field-span",onClick:this.showInput},g,E.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):E.a.createElement(x.a,{ref:"textField",style:k,className:"editable-field-input",maxLength:p,value:v,onChange:this.onInputChange}),E.a.createElement("input",{type:"hidden",value:g,readOnly:!0,name:o}),d&&!C?E.a.createElement("div",{className:"editable-modal",ref:"editableModal",onClick:this.finishEdit}):null,t))}}]),t}(v.Component);P.propTypes={className:C.a.string,style:C.a.object,value:C.a.string,name:C.a.string,title:C.a.string,maxLength:C.a.number,tip:C.a.string,tipPosition:C.a.string,regExp:C.a.object,disabled:C.a.bool,showModal:C.a.bool,autoWidth:C.a.bool,onMouseDown:C.a.func,onClick:C.a.func,onBlur:C.a.func,onChange:C.a.func,onEditStart:C.a.func,onEditEnd:C.a.func,beforeChange:C.a.func},P.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var S=P;n.d(t,"a",function(){return S})},649:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},value:{type:"PropTypes.string",desc:"The value of the editableField.",default:"text"},name:{type:"PropTypes.string",desc:"The name of the editableField.",default:""},title:{type:"PropTypes.string",desc:"The title of the editableField.",default:""},maxLength:{type:"PropTypes.number",desc:"The maximum length of editableField to enter."},tip:{type:"PropTypes.string",desc:"The tip of the editableField."},tipPosition:{type:"PropTypes.string",desc:"The tipPosition of the editableField."},regExp:{type:"PropTypes.object",desc:"The regular expression of the input."},disabled:{type:"PropTypes.bool",desc:"If true, the input is disabled.",default:"false"},showModal:{type:"PropTypes.bool",desc:"If true, the shadow is under the input.",default:"false"},autoWidth:{type:"PropTypes.bool",desc:"If true, the input will be auto width.",default:"false"},onMouseDown:{type:"PropTypes.func"},onClick:{type:"PropTypes.func",desc:"Callback function when touch the editableField."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when the editableField blur."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the editableField change."},onEditStart:{type:"PropTypes.func",desc:"Callback function fired when start editableField change."},onEditEnd:{type:"PropTypes.func",desc:"Callback function fired when end editableField change."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired when before editableField change."}}},650:function(e,t,n){var a=n(651);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(147)(a,o);a.locals&&(e.exports=a.locals)},651:function(e,t,n){(e.exports=n(146)(!1)).push([e.i,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""])},857:function(e,t,n){"use strict";n.r(t);var a=n(79),o=n.n(a),l=n(80),i=n.n(l),s=n(81),r=n.n(s),c=n(82),u=n.n(c),d=n(83),p=n.n(d),h=n(11),m=n.n(h),f=n(21),b=n.n(f),v=n(0),E=n.n(v),g=n(415),C=n(372),y=n(371),B=n(370),T=n(375),k=n(367),x=n(649),w=(n(650),function(e){function t(e){var n;return o()(this,t),n=r()(this,u()(t).call(this,e)),b()(m()(m()(n)),"show",function(e){var t=n.state.EditableFieldSelectVisible;t[e]=!0,n.setState({EditableFieldSelectVisible:t})}),b()(m()(m()(n)),"hide",function(e){var t=n.state.EditableFieldSelectVisible;t[e]=!1,n.setState({EditableFieldSelectVisible:t})}),b()(m()(m()(n)),"onClick",function(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0}),b()(m()(m()(n)),"onChange",function(e){console.log(e),"123"===e&&n.setState({disabled:!0,value:"text111"})}),b()(m()(m()(n)),"onEditEnd",function(){console.log("end")}),b()(m()(m()(n)),"onEditStart",function(){console.log("start")}),b()(m()(m()(n)),"beforeChange",function(e){return"123"!=e}),n.state={value:"text",disabled:!1,EditableFieldSelectVisible:{}},n}return p()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.state.EditableFieldSelectVisible;return E.a.createElement("div",{className:"example editable-field-examples"},E.a.createElement("h2",{className:"example-title"},"Editable Field"),E.a.createElement("p",null,"An ",E.a.createElement("span",null,"Editable Field")," is an editable text display area."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(C.a,null,E.a.createElement(y.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,E.a.createElement("code",null,"Editable Field")," simple example."),E.a.createElement(g.a,{value:this.state.value,onBlur:this.onBlur,title:"Click to Edit"}),", ",E.a.createElement(g.a,{value:this.state.value,autoWidth:!0,onBlur:this.onBlur,disabled:this.state.disabled,onChange:this.onChange,onEditStart:this.onEditStart,beforeChange:this.beforeChange,onClick:this.onClick,showModal:!0}),", ",E.a.createElement(g.a,{value:this.state.value,onBlur:this.onBlur,title:"Click to edit"}),", ",E.a.createElement(g.a,{value:this.state.value,onBlur:this.onBlur}),", ",E.a.createElement(g.a,{value:this.state.value,onBlur:this.onBlur}),", ",E.a.createElement(g.a,{value:this.state.value,onBlur:this.onBlur}),", ",E.a.createElement(g.a,{value:this.state.value,onBlur:this.onBlur,onEditStart:this.onEditStart,onEditEnd:this.onEditEnd}))))),E.a.createElement(C.a,null,E.a.createElement(y.a,{className:"example-header",title:"Tip"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,E.a.createElement("code",null,"Editable Field")," simple example."),E.a.createElement(g.a,{value:this.state.value,onBlur:this.onBlur,maxLength:5,tip:"this is a tip"}))))),E.a.createElement(C.a,null,E.a.createElement(y.a,{className:"example-header",title:"In Dialog"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,E.a.createElement("code",null,"Editable Field")," simple example."),E.a.createElement(B.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),E.a.createElement(T.a,{visible:t[1],onRequestClose:function(){return e.hide(1)}},function(t){return E.a.createElement("div",{className:"popover-dialog-content-scroller"},E.a.createElement(g.a,{value:e.state.value,onBlur:e.onBlur,maxLength:5,parentEl:t,tip:"this is a tip"}))}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(k.a,{data:x}))}}]),t}(v.Component));t.default=w}}]);