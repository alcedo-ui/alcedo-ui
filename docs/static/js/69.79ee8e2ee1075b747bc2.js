(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{351:function(e,a,t){"use strict";var n=t(6),s=t.n(n),l=t(75),r=t.n(l),o=t(76),i=t.n(o),c=t(77),u=t.n(c),d=t(78),p=t.n(d),m=t(79),f=t.n(m),h=t(11),b=t.n(h),v=t(0),g=t.n(v),y=t(1),C=t.n(y),w=t(356),T=(t(352),function(e){function a(e){var t,n;return r()(this,a),(n=u()(this,p()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(t=b()(b()(n)),n.generateData).bind(t),n}return f()(a,e),i()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(s()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(w.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(v.Component));T.propTypes={data:C.a.object},T.defaultProps={data:null},a.a=T},352:function(e,a,t){var n=t(353);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(136)(n,s);n.locals&&(e.exports=n.locals)},353:function(e,a,t){(e.exports=t(135)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},362:function(e,a,t){"use strict";var n=t(354),s=t.n(n),l=t(6),r=t.n(l),o=t(336),i=t.n(o),c=t(75),u=t.n(c),d=t(76),p=t.n(d),m=t(77),f=t.n(m),h=t(78),b=t.n(h),v=t(79),g=t.n(v),y=t(11),C=t.n(y),w=t(19),T=t.n(w),x=t(0),E=t.n(x),V=t(1),P=t.n(V),N=t(348),F=t.n(N),I=t(365),H=t(350),M=t(349),O=function(e){function a(e){var t,n;u()(this,a);for(var s=arguments.length,l=new Array(s>1?s-1:0),r=1;r<s;r++)l[r-1]=arguments[r];return n=f()(this,(t=b()(a)).call.apply(t,[this,e].concat(l))),T()(C()(C()(n)),"setFocused",function(e){n.setState({isFocus:e})}),T()(C()(C()(n)),"setHovered",function(e){n.setState({isHover:e})}),n.state={isHover:!1,isFocus:!1},n}return g()(a,e),p()(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.children,n=a.className,l=a.theme,o=a.label,c=a.isLabelAnimate,u=a.hasValue,d=a.disabled,p=a.required,m=a.useSeparator,f=i()(a,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),h=this.state,b=h.isHover,v=h.isFocus,g=F()("material-provider",T()({"has-label":o,"has-value":u,"has-separator":m,animated:c,focused:v},n,n));return E.a.createElement("div",s()({},f,{className:g,disabled:d}),E.a.createElement("div",{className:"material-provider-label-wrapper"},E.a.createElement("span",{className:"material-provider-label"},o),p?E.a.createElement("div",{className:"material-provider-required-dot"}):null),x.Children.map(t,function(a){var t=a.props,n=t.triggerClassName,s=t.placeholderClassName,l=i()(t,["triggerClassName","placeholderClassName"]),o=r()({},l,{className:F()("material-provider-field",T()({},l.className,l.className)),onFocus:function(){l.onFocus&&l.onFocus.apply(l,arguments),e.setFocused(!0)},onBlur:function(){l.onBlur&&l.onBlur.apply(l,arguments),e.setFocused(!1)},onMouseOver:function(){l.onMouseOver&&l.onMouseOver.apply(l,arguments),e.setHovered(!0)},onMouseOut:function(){l.onMouseOut&&l.onMouseOut.apply(l,arguments),e.setHovered(!1)}});return"string"!=typeof a.type&&(o.triggerClassName=F()("material-provider-field-trigger",T()({},n,n)),o.placeholderClassName=F()("material-provider-field-placeholder",T()({},s,s))),Object(x.cloneElement)(a,o)}),m?E.a.createElement(I.a,{theme:l,isHover:b,isFocus:v,disabled:d}):null)}}]),a}(x.Component);O.propTypes={className:P.a.string,style:P.a.object,theme:P.a.oneOf(M.a.enumerateValue(H.a)),label:P.a.any,isLabelAnimate:P.a.bool,hasValue:P.a.bool,disabled:P.a.bool,required:P.a.bool,useSeparator:P.a.bool},O.defaultProps={theme:H.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var k=O;t.d(a,"a",function(){return k})},365:function(e,a,t){"use strict";var n=t(75),s=t.n(n),l=t(76),r=t.n(l),o=t(77),i=t.n(o),c=t(78),u=t.n(c),d=t(79),p=t.n(d),m=t(19),f=t.n(m),h=t(0),b=t.n(h),v=t(1),g=t.n(v),y=t(348),C=t.n(y),w=t(350),T=t(349),x=function(e){function a(e){var t;s()(this,a);for(var n=arguments.length,l=new Array(n>1?n-1:0),r=1;r<n;r++)l[r-1]=arguments[r];return i()(this,(t=u()(a)).call.apply(t,[this,e].concat(l)))}return p()(a,e),r()(a,[{key:"render",value:function(){var e=this.props,a=e.theme,t=e.isHover,n=e.isFocus,s=e.disabled,l=C()("material-field-separator",f()({hover:t,focused:n},"theme-".concat(a),a));return b.a.createElement("div",{className:l,disabled:s},b.a.createElement("div",{className:"material-field-separator-hover"}),b.a.createElement("div",{className:"material-field-separator-focus"}))}}]),a}(h.Component);f()(x,"Theme",w.a),x.propTypes={className:g.a.string,style:g.a.object,theme:g.a.oneOf(T.a.enumerateValue(w.a)),isHover:g.a.bool,isFocus:g.a.bool,disabled:g.a.bool},x.defaultProps={theme:w.a.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};var E=x;t.d(a,"a",function(){return E})},418:function(e,a,t){"use strict";var n=t(354),s=t.n(n),l=t(336),r=t.n(l),o=t(75),i=t.n(o),c=t(76),u=t.n(c),d=t(77),p=t.n(d),m=t(78),f=t.n(m),h=t(79),b=t.n(h),v=t(11),g=t.n(v),y=t(19),C=t.n(y),w=t(0),T=t.n(w),x=t(1),E=t.n(x),V=t(46),P=t(348),N=t.n(P),F=t(369),I=t(431),H=t(350),M=t(434),O=t(349),k=t(375),S=t(363),A=function(e){function a(e){var t,n;i()(this,a);for(var s=arguments.length,l=new Array(s>1?s-1:0),r=1;r<s;r++)l[r-1]=arguments[r];return n=p()(this,(t=f()(a)).call.apply(t,[this,e].concat(l))),C()(g()(g()(n)),"focus",function(){n.refs.input.focus()}),C()(g()(g()(n)),"blur",function(){n.refs.input.blur()}),C()(g()(g()(n)),"resetHeight",function(){n.props.autoHeight&&n.inputEl&&(n.inputEl.style.height=Math.max(n.inputEl.scrollHeight,n.inputElInitHeight)+"px")}),C()(g()(g()(n)),"changeHandler",function(e){var a=n.props,t=a.onValid,s=a.onInvalid,l=e.target.value,r=k.a.fieldValid(l,n.props);n.resetHeight(),n.setState({invalidMsgs:r,value:l},function(){n.props.onChange&&n.props.onChange(l,e),r.length>0?s&&s():t&&t()})}),C()(g()(g()(n)),"keyDownHandler",function(e){if(13===e.keyCode){var a=n.props.onPressEnter,t=n.state.value;a&&a(e,t)}}),C()(g()(g()(n)),"clearValue",function(){var e=n.props,a=e.disabled,t=e.clearButtonVisible,s=e.onClear,l=e.onChange,r=e.onValid,o=e.onInvalid,i=k.a.fieldValid("",n.props);!a&&t&&n.setState({invalidMsgs:i,value:""},function(){n.refs.input.focus(),s&&s(),l&&l(""),i.length>0?o&&o():r&&r()})}),C()(g()(g()(n)),"togglePasswordVisible",function(){var e=n.props,a=e.disabled,t=e.passwordButtonVisible,s=e.onPasswordVisible,l=e.onPasswordInvisible,r=!n.state.passwordVisible;!a&&t&&n.setState({passwordVisible:r},function(){n.refs.input.focus(),r?s&&s():l&&l()})}),C()(g()(g()(n)),"mouseOverHandler",function(e){n.setState({infoVisible:!0,errorVisible:!0},function(){var a=n.props.onMouseOver,t=n.state.value;a&&a(e,t)})}),C()(g()(g()(n)),"mouseOutHandler",function(e){n.setState({infoVisible:!1,errorVisible:!1},function(){var a=n.props.onMouseOut,t=n.state.value;a&&a(e,t)})}),C()(g()(g()(n)),"focusHandler",function(e){n.setState({isFocused:!0},function(){var a=n.props,t=a.isFocusedSelectAll,s=a.onFocus,l=n.state.value;s&&s(e,l),t&&n.refs.input.setSelectionRange(0,l?l.length:0)})}),C()(g()(g()(n)),"blurHandler",function(e){e.relatedTarget!=n.clearButtonEl&&n.setState({isFocused:!1},function(){var a=n.props.onBlur,t=n.state.value;a&&a(e,t)})}),C()(g()(g()(n)),"rightIconClickHandler",function(e){var a=n.props.onRightIconClick,t=n.state.value;a&&a(e,t)}),n.state={value:e.value,isFocused:!!e.autoFocus,passwordVisible:!1,infoVisible:!1,errorVisible:!1,invalidMsgs:""},n}return b()(a,e),u()(a,[{key:"componentDidMount",value:function(){this.inputEl=this.refs.input,this.inputElInitHeight=parseInt(this.inputEl.offsetHeight),this.clearButtonEl=Object(V.findDOMNode)(this.refs.clearButton),this.resetHeight(),!0===this.props.autoFocus&&this.inputEl&&this.inputEl.focus()}},{key:"render",value:function(){var e=this.props,a=e.children,t=e.className,n=e.triggerClassName,l=e.placeholderClassName,o=e.style,i=e.theme,c=e.type,u=e.iconCls,d=e.disabled,p=e.infoMsg,m=e.autoHeight,f=e.wordCountVisible,h=e.placeholder,b=e.clearButtonVisible,v=e.rightIconCls,g=e.passwordButtonVisible,y=e.fieldMsgVisible,w=e.maxLength,x=e.onIconClick,E=e.onRightIconClick,V=(e.value,e.autoFocus,e.pattern,e.patternInvalidMsg,e.isFocusedSelectAll,e.onPressEnter,e.onValid,e.onInvalid,e.onClear,e.onPasswordVisible,e.onPasswordInvisible,r()(e,["children","className","triggerClassName","placeholderClassName","style","theme","type","iconCls","disabled","infoMsg","autoHeight","wordCountVisible","placeholder","clearButtonVisible","rightIconCls","passwordButtonVisible","fieldMsgVisible","maxLength","onIconClick","onRightIconClick","value","autoFocus","pattern","patternInvalidMsg","isFocusedSelectAll","onPressEnter","onValid","onInvalid","onClear","onPasswordVisible","onPasswordInvisible"])),P=this.state,H=P.value,O=P.isFocused,S=P.passwordVisible,A=P.infoVisible,B=P.errorVisible,D=P.invalidMsgs,L=c===M.a.PASSWORD,q=(!H||H.length,N()("text-area",!H||H.length<=0?"empty":"not-empty",D.length>0?"theme-error":i?"theme-".concat(i):"",C()({password:L,"has-icon":u,"auto-height":m,focused:O,"has-right-icon":v,"has-word-count":f,"has-clear-button":b},t,t))),R=N()("text-area-left-icon",{deactivated:!x}),j=N()("text-area-placeholder",C()({},l,l)),U=N()("text-area-input",C()({},n,n)),G=N()("password-visible-icon",{hidden:!L||!g}),W=N()("clear-icon",{hidden:!b||!H||H.length<1}),J=N()("text-area-right-icon",{deactivated:!E}),K=N()("text-area-word-count",{error:H.length>w}),X=c;return X===M.a.PASSWORD?X=S?M.a.TEXT:M.a.PASSWORD:k.a.isNumberType(c)&&(X="text"),T.a.createElement("div",{className:q,style:o,disabled:d},u?T.a.createElement(F.a,{className:R,iconCls:u,disableTouchRipple:!x,onClick:x}):null,!h||H||O?null:T.a.createElement("textarea",{className:j,value:h,disabled:!0}),T.a.createElement("textarea",s()({},V,{ref:"input",className:U,type:X,value:H,onChange:this.changeHandler,onKeyDown:this.keyDownHandler,onMouseOver:this.mouseOverHandler,onMouseOut:this.mouseOutHandler,onFocus:this.focusHandler,onBlur:this.blurHandler,disabled:d})),T.a.createElement(F.a,{className:G,iconCls:S?"fas fa-eye":"far fa-eye-slash",onClick:this.togglePasswordVisible}),T.a.createElement(F.a,{ref:"clearButton",className:W,iconCls:"fas fa-times-circle",onClick:this.clearValue}),v?T.a.createElement(F.a,{className:J,rightIconCls:v,disableTouchRipple:!E,onClick:this.rightIconClickHandler}):null,T.a.createElement("div",{className:K},T.a.createElement("div",{className:"text-area-word-count-separator"}),f?"".concat(H?H.length:0).concat(w?" / ".concat(w):""):null),y&&A&&p?T.a.createElement(I.a,{type:"info",msg:p}):null,y&&B&&D.length>0?T.a.createElement(I.a,{type:"error",msg:D.join(", ")}):null,a)}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{prevProps:e,value:S.a.getDerivedState(e,a,"value")}}}]),a}(w.Component);C()(A,"Type",M.a),C()(A,"Theme",H.a),A.propTypes={className:E.a.string,triggerClassName:E.a.string,placeholderClassName:E.a.string,style:E.a.object,theme:E.a.oneOf(O.a.enumerateValue(H.a)),type:E.a.oneOf(O.a.enumerateValue(M.a)),name:E.a.string,placeholder:E.a.string,value:E.a.oneOfType([E.a.number,E.a.string]),iconCls:E.a.string,disabled:E.a.bool,readOnly:E.a.bool,autoFocus:E.a.bool,infoMsg:E.a.string,clearButtonVisible:E.a.bool,rightIconCls:E.a.string,passwordButtonVisible:E.a.bool,autoHeight:E.a.bool,wordCountVisible:E.a.bool,isFocusedSelectAll:E.a.bool,required:E.a.bool,maxLength:E.a.number,max:E.a.number,min:E.a.number,pattern:E.a.object,patternInvalidMsg:E.a.string,fieldMsgVisible:E.a.bool,onChange:E.a.func,onPressEnter:E.a.func,onValid:E.a.func,onInvalid:E.a.func,onFocus:E.a.func,onBlur:E.a.func,onClear:E.a.func,onPasswordVisible:E.a.func,onPasswordInvisible:E.a.func,onIconClick:E.a.func,onRightIconClick:E.a.func,onMouseOver:E.a.func,onMouseOut:E.a.func},A.defaultProps={theme:H.a.DEFAULT,type:"text",name:"",placeholder:"",value:"",iconCls:"",rightIconCls:"",disabled:!1,readOnly:!1,autoFocus:!1,infoMsg:"",autoHeight:!1,wordCountVisible:!1,isFocusedSelectAll:!1,clearButtonVisible:!1,passwordButtonVisible:!1,required:!1,patternInvalidMsg:"",fieldMsgVisible:!1};var B=A;t.d(a,"a",function(){return B})},475:function(e,a,t){"use strict";var n=t(354),s=t.n(n),l=t(336),r=t.n(l),o=t(75),i=t.n(o),c=t(76),u=t.n(c),d=t(77),p=t.n(d),m=t(78),f=t.n(m),h=t(79),b=t.n(h),v=t(11),g=t.n(v),y=t(19),C=t.n(y),w=t(0),T=t.n(w),x=t(1),E=t.n(x),V=t(348),P=t.n(V),N=t(418),F=t(362),I=t(350),H=t(349),M=function(e){function a(e){var t,n;i()(this,a);for(var s=arguments.length,l=new Array(s>1?s-1:0),r=1;r<s;r++)l[r-1]=arguments[r];return n=p()(this,(t=f()(a)).call.apply(t,[this,e].concat(l))),C()(g()(g()(n)),"focus",function(){n.refs.input.focus()}),C()(g()(g()(n)),"blur",function(){n.refs.input.blur()}),C()(g()(g()(n)),"triggerChangeHandler",function(e){n.setState({value:e},function(){var a=n.props.onChange;a&&a(e)})}),n.state={value:e.value},n}return b()(a,e),u()(a,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,n=e.theme,l=e.label,o=e.isLabelAnimate,i=e.wordCountVisible,c=e.disabled,u=e.required,d=r()(e,["className","style","theme","label","isLabelAnimate","wordCountVisible","disabled","required"]),p=this.state.value,m=P()("material-text-area",C()({"has-word-count":i},a,a));return T.a.createElement(F.a,{className:m,style:t,theme:n,label:l,isLabelAnimate:o,hasValue:!!p,disabled:c,required:u},T.a.createElement(N.a,s()({},d,{theme:n,value:p,disabled:c,required:u,wordCountVisible:i,onChange:this.triggerChangeHandler})))}}]),a}(w.Component);C()(M,"Type",N.a.Type),C()(M,"Theme",I.a),M.propTypes={className:E.a.string,style:E.a.object,theme:E.a.oneOf(H.a.enumerateValue(I.a)),type:E.a.oneOf(H.a.enumerateValue(N.a.Type)),name:E.a.string,label:E.a.any,isLabelAnimate:E.a.bool,placeholder:E.a.string,value:E.a.oneOfType([E.a.number,E.a.string]),iconCls:E.a.string,disabled:E.a.bool,readOnly:E.a.bool,autoFocus:E.a.bool,infoMsg:E.a.string,clearButtonVisible:E.a.bool,rightIconCls:E.a.string,passwordButtonVisible:E.a.bool,autoHeight:E.a.bool,wordCountVisible:E.a.bool,required:E.a.bool,maxLength:E.a.number,max:E.a.number,min:E.a.number,pattern:E.a.object,patternInvalidMsg:E.a.string,fieldMsgVisible:E.a.bool,onChange:E.a.func,onPressEnter:E.a.func,onValid:E.a.func,onInvalid:E.a.func,onFocus:E.a.func,onBlur:E.a.func,onClear:E.a.func,onPasswordVisible:E.a.func,onPasswordInvisible:E.a.func,onIconClick:E.a.func,onRightIconClick:E.a.func,onMouseOver:E.a.func,onMouseOut:E.a.func},M.defaultProps={theme:I.a.DEFAULT,type:"text",name:"",label:"",isLabelAnimate:!0,placeholder:"",value:"",iconCls:"",rightIconCls:"",disabled:!1,readOnly:!1,autoFocus:!1,infoMsg:"",autoHeight:!1,wordCountVisible:!1,clearButtonVisible:!1,passwordButtonVisible:!1,required:!1,patternInvalidMsg:"",fieldMsgVisible:!1};var O=M;t.d(a,"a",function(){return O})},632:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The TextArea theme.",default:"Theme.DEFAULT"},type:{type:"PropTypes.oneOf",desc:'Specifies the type of input to display such as "password" or "text".',default:"text"},name:{type:"PropTypes.string",desc:"The name of the text area.",default:""},label:{type:"PropTypes.any",desc:"The label of the text field.",default:""},isLabelAnimate:{type:"PropTypes.bool",desc:"The animate of the text field.",default:"true"},placeholder:{type:"PropTypes.string",desc:"The placeholder of the text area.",default:""},value:{type:"PropTypes.number",desc:"The value of the text area. Type can be string or number.",default:""},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},disabled:{type:"PropTypes.bool",desc:"Disables the textField if set to true.",default:"false"},readOnly:{type:"PropTypes.bool",desc:"If true,the textField will can't editable.",default:"false"},autoFocus:{type:"PropTypes.bool",desc:"If true,the textField will autoFocus.",default:"false"},infoMsg:{type:"PropTypes.string",desc:"The message of the textField.",default:""},clearButtonVisible:{type:"PropTypes.bool",desc:"If true,clearButton will display when the textField is not empty.",default:"false"},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},passwordButtonVisible:{type:"PropTypes.bool",desc:"If true, passwordButton will display.",default:"false"},autoHeight:{type:"PropTypes.bool",default:"false"},wordCountVisible:{type:"PropTypes.bool",default:"false"},required:{type:"PropTypes.bool",desc:"If true,the textField must be required.",default:"false"},maxLength:{type:"PropTypes.number",desc:"The maximum length of textField to enter."},max:{type:"PropTypes.number",desc:"Maximum number of textField that can be entered."},min:{type:"PropTypes.number",desc:"Minimum number of textField that can be entered."},pattern:{type:"PropTypes.object",desc:"The matching rule of textField."},patternInvalidMsg:{type:"PropTypes.string",desc:"The invalid message of textField.",default:""},fieldMsgVisible:{type:"PropTypes.bool",default:"false"},onChange:{type:"PropTypes.func",desc:"Callback function fired when the textField is changed."},onPressEnter:{type:"PropTypes.func",desc:"Callback function fired when the press enter."},onValid:{type:"PropTypes.func",desc:"Callback function fired when textField valid."},onInvalid:{type:"PropTypes.func",desc:"Callback function fired when textField invalid."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when textField focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when textField blur."},onClear:{type:"PropTypes.func",desc:"Callback function fired when textField clear."},onPasswordVisible:{type:"PropTypes.func",desc:"Callback function fired when password visible."},onPasswordInvisible:{type:"PropTypes.func",desc:"Callback function fired when password invisible."},onIconClick:{type:"PropTypes.func"},onRightIconClick:{type:"PropTypes.func"},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},633:function(e,a,t){var n=t(634);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(136)(n,s);n.locals&&(e.exports=n.locals)},634:function(e,a,t){(e.exports=t(135)(!1)).push([e.i,".material-text-area-examples .text-area-input {\n  height: 68px; }\n",""])},808:function(e,a,t){"use strict";t.r(a);var n=t(75),s=t.n(n),l=t(76),r=t.n(l),o=t(77),i=t.n(o),c=t(78),u=t.n(c),d=t(79),p=t.n(d),m=t(11),f=t.n(m),h=t(19),b=t.n(h),v=t(0),g=t.n(v),y=t(358),C=t(357),w=t(475),T=t(351),x=t(632),E=(t(633),function(e){function a(e){var t;return s()(this,a),t=i()(this,u()(a).call(this,e)),b()(f()(f()(t)),"onChangeHandle",function(e){t.setState({value:e})}),t}return p()(a,e),r()(a,[{key:"render",value:function(){return g.a.createElement("div",{className:"example material-text-area-examples"},g.a.createElement("h2",{className:"examples-title"},"MaterialTextArea"),g.a.createElement("p",null,g.a.createElement("span",null,"MaterialTextArea")," allow users to input text."),g.a.createElement("h2",{className:"example-title"},"Examples"),g.a.createElement(y.a,null,g.a.createElement(C.a,{className:"example-header",title:"Basic"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("p",null,g.a.createElement("code",null,"MaterialTextArea")," simple example."),g.a.createElement("div",{className:"field-group"},g.a.createElement(w.a,{theme:w.a.Theme.HIGHLIGHT,label:"Description",autoHeight:!0,wordCountVisible:!0,placeholder:"Description",maxLength:100})))))),g.a.createElement(y.a,null,g.a.createElement(C.a,{className:"example-header",title:"Required"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("div",{className:"field-group"},g.a.createElement(w.a,{theme:w.a.Theme.HIGHLIGHT,label:"Licence",placeholder:"...",required:!0})))))),g.a.createElement(y.a,null,g.a.createElement(C.a,{className:"example-header",title:"Disabled"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("div",{className:"field-group"},g.a.createElement(w.a,{label:"Licence",value:"...",disabled:!0})))))),g.a.createElement("h2",{className:"example-title"},"Properties"),g.a.createElement(T.a,{data:x}))}}]),a}(v.Component));a.default=E}}]);