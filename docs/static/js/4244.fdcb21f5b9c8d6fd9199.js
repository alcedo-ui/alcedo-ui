(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[4244],{59141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const r=a},83970:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,'.text-field-examples .field-group{margin:10px auto;float:none}.text-field-examples .field-group::before,.text-field-examples .field-group::after{display:table;content:""}.text-field-examples .field-group::after{clear:both}.text-field-examples .field-group .text-field-label,.text-field-examples .field-group .text-field{float:left}.text-field-examples .field-group .text-field-label{font-size:14px;line-height:40px;margin-right:20px;width:80px}.example-content .dialog-button{width:120px}.popover-dialog-content-scroller{width:1000px;height:1000px}.popover-dialog-content-scroller .field-group{margin:10px auto}',""]);const r=a},1116:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var l=n(6610),a=n(5991),r=n(63349),i=n(10379),c=n(46070),s=n(77608),o=n(96156),d=n(37699),p=n(45697),u=n.n(p),m=n(82996),f=n(93379),h=n.n(f),y=n(7795),g=n.n(y),E=n(20695),v=n.n(E),b=n(19216),T=n.n(b),x=n(59141),N={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=v()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}N.domAPI=g(),N.insertStyleElement=T(),h()(x.Z,N),x.Z&&x.Z.locals&&x.Z.locals;var P=function(e){(0,i.Z)(u,e);var t,n,p=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,c.Z)(this,e)});function u(e){var t;return(0,l.Z)(this,u),t=p.call(this,e),(0,o.Z)((0,r.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(C({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(u,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(d.Component);P.propTypes={data:u().object};const w=P},15666:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var l=n(6610),a=n(5991),r=n(63349),i=n(10379),c=n(46070),s=n(77608),o=n(96156),d=n(37699),p=n(11669),u=n(38075),m=n(24471),f=n(50704),h=n(22944),y=n(65460),g=n(1116);const E=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"triggerClassName":{"type":"PropTypes.string","desc":"The CSS class name of the input element."},"placeholderClassName":{"type":"PropTypes.string","desc":"The CSS class name of the placeholder element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The TextField theme.","default":"Theme.DEFAULT"},"type":{"type":"PropTypes.oneOf","desc":"Specifies the type of input to display such as \\"password\\" or \\"text\\".","default":"text"},"name":{"type":"PropTypes.string","desc":"The name of the text field."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the text field."},"value":{"type":"PropTypes.number","desc":"The value of the TextField.Type can be string or number."},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon."},"disabled":{"type":"PropTypes.bool","desc":"Disables the textField if set to true.","default":"false"},"readOnly":{"type":"PropTypes.bool","desc":"If true,the textField will can\'t editable.","default":"false"},"autoFocus":{"type":"PropTypes.bool","desc":"If true,the textField will autoFocus.","default":"false"},"infoMsg":{"type":"PropTypes.string","desc":"The message of the textField."},"isFocusedSelectAll":{"type":"PropTypes.bool","default":"false"},"clearButtonVisible":{"type":"PropTypes.bool","desc":"If true,clearButton will display when the textField is not empty.","default":"true"},"clearButtonIconCls":{"type":"PropTypes.string","default":"fas fa-times-circle"},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon."},"passwordButtonVisible":{"type":"PropTypes.bool","desc":"If true, passwordButton will display.","default":"true"},"required":{"type":"PropTypes.bool","desc":"If true,the textField must be required.","default":"false"},"maxLength":{"type":"PropTypes.number","desc":"The maximum length of textField to enter."},"max":{"type":"PropTypes.number","desc":"Maximum number of textField that can be entered."},"min":{"type":"PropTypes.number","desc":"Minimum number of textField that can be entered."},"pattern":{"type":"PropTypes.object","desc":"The matching rule of textField."},"patternInvalidMsg":{"type":"PropTypes.string","desc":"The invalid message of textField."},"isStrictMaxLength":{"type":"PropTypes.bool","default":"true"},"fieldMsgVisible":{"type":"PropTypes.bool","default":"false"},"parentEl":{"type":"PropTypes.object"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"Position.BOTTOM"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the textField is changed."},"onKeyDown":{"type":"PropTypes.func","desc":"Callback function fired when key down."},"onPressEnter":{"type":"PropTypes.func","desc":"Callback function fired when press enter."},"onValid":{"type":"PropTypes.func","desc":"Callback function fired when textField valid."},"onInvalid":{"type":"PropTypes.func","desc":"Callback function fired when textField invalid."},"onFocus":{"type":"PropTypes.func","desc":"Callback function fired when textField focus."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when textField blur."},"onClear":{"type":"PropTypes.func","desc":"Callback function fired when textField clear."},"onPasswordVisible":{"type":"PropTypes.func","desc":"Callback function fired when password visible."},"onPasswordInvisible":{"type":"PropTypes.func","desc":"Callback function fired when password invisible."},"onIconClick":{"type":"PropTypes.func"},"onRightIconClick":{"type":"PropTypes.func"},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"}}');var v=n(93379),b=n.n(v),T=n(7795),x=n.n(T),N=n(20695),Z=n.n(N),C=n(19216),P=n.n(C),w=n(83970),I={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=Z()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};I.domAPI=x(),I.insertStyleElement=P(),b()(w.Z,I),w.Z&&w.Z.locals&&w.Z.locals;const R=function(e){(0,i.Z)(b,e);var t,n,v=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,c.Z)(this,e)});function b(e){var t;return(0,l.Z)(this,b),t=v.call(this,e),(0,o.Z)((0,r.Z)(t),"show",(function(e){var n=t.state.TextFieldVisible;n[e]=!0,t.setState({TextFieldVisible:n})})),(0,o.Z)((0,r.Z)(t),"hide",(function(e){var n=t.state.TextFieldVisible;n[e]=!1,t.setState({TextFieldVisible:n})})),(0,o.Z)((0,r.Z)(t),"changeHandler",(function(e,n){var l=t.state.value;l[n]=e,t.setState({value:l},(function(){console.log("value changed::",e)}))})),t.state={value:{},TextFieldVisible:{}},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this,t=this.state,n=t.value,l=t.TextFieldVisible;return d.createElement("div",{className:"example text-field-examples"},d.createElement("h2",{className:"example-title"},"TextField"),d.createElement("p",null,d.createElement("span",null,"TextField"),"allow users to input text."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"With type"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"TextField")," using the",d.createElement("code",null,"type"),' property to set the type of input to display such as "password" or "text".'),d.createElement("div",{className:"field-group"},d.createElement("label",{className:"text-field-label"},"Default"),d.createElement(p.Z,{value:n[0]||"",maxLength:20,onChange:function(t){return e.changeHandler(t,0)}})),d.createElement("div",{className:"field-group"},d.createElement("label",{className:"text-field-label"},"Password"),d.createElement(p.Z,{type:"password",rightIconCls:"fas fa-lock",value:n[1]||"",onChange:function(t){return e.changeHandler(t,1)}})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"With rightIconCls"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"TextField")," using the",d.createElement("code",null,"rightIconCls")," property to set a icon display at right."),d.createElement("div",{className:"field-group"},d.createElement("label",{className:"text-field-label"},"Search"),d.createElement(p.Z,{rightIconCls:"fas fa-search",theme:p.Z.Theme.PRIMARY,value:n[2]||"",onRightIconClick:function(){return console.log("Search Icon Clicked.")},onChange:function(t){return e.changeHandler(t,2)}})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"With icon"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"TextField")," using the",d.createElement("code",null,"iconCls")," property to set the icon of TextField to display at left."),d.createElement("div",{className:"field-group"},d.createElement("label",{className:"text-field-label"},"Username"),d.createElement(p.Z,{iconCls:"fas fa-user",theme:p.Z.Theme.HIGHLIGHT,value:n[3]||"",onChange:function(t){return e.changeHandler(t,3)}})),d.createElement("div",{className:"field-group"},d.createElement("label",{className:"text-field-label"},"Password"),d.createElement(p.Z,{iconCls:"fas fa-lock",type:"password",theme:p.Z.Theme.HIGHLIGHT,value:n[4]||"",onChange:function(t){return e.changeHandler(t,4)}})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"TextFieldGroup without label"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"TextFieldGroup")," without",d.createElement("code",null,"label")," element and",d.createElement("code",null,"disabled")," props applied."),d.createElement(u.Z,null,d.createElement(p.Z,{iconCls:"fas fa-user",placeholder:"username",value:n[5]||"",onChange:function(t){return e.changeHandler(t,5)}}),d.createElement(p.Z,{iconCls:"fas fa-lock",type:p.Z.Type.PASSWORD,placeholder:"password",value:n[6]||"",onChange:function(t){return e.changeHandler(t,6)}})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"Valid"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"TextField")," with",d.createElement("code",null,"pattern")," and",d.createElement("code",null,"patternInvalidMsg")," applied."),d.createElement("div",null,"Required"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{required:!0,clearButtonVisible:!1,fieldMsgVisible:!0,value:n[7]||"",onChange:function(t){return e.changeHandler(t,7)}})),d.createElement("div",null,"NUMBER"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NUMBER,fieldMsgVisible:!0,value:n[8]||"",onChange:function(t){return e.changeHandler(t,8)}})),d.createElement("div",null,"Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.INTEGER,fieldMsgVisible:!0,value:n[9]||"",onChange:function(t){return e.changeHandler(t,9)}})),d.createElement("div",null,"Positive Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.POSITIVE_INTEGER,fieldMsgVisible:!0,value:n[10]||"",onChange:function(t){return e.changeHandler(t,10)}})),d.createElement("div",null,"Nonnegative Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NONNEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[11]||"",onChange:function(t){return e.changeHandler(t,11)}})),d.createElement("div",null,"Negative Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[12]||"",onChange:function(t){return e.changeHandler(t,12)}})),d.createElement("div",null,"Nonpositive Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NONPOSITIVE_INTEGER,fieldMsgVisible:!0,value:n[13]||"",onChange:function(t){return e.changeHandler(t,13)}})),d.createElement("div",null,"Min / Max"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NUMBER,min:0,max:100,fieldMsgVisible:!0,value:n[14]||"",onChange:function(t){return e.changeHandler(t,14)}})),d.createElement("div",null,"Self Defined Pattern (Only a, b, c is allowed)"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{pattern:/^[abc]*$/,patternInvalidMsg:"Only a, b, c is allowed",fieldMsgVisible:!0,value:n[15]||"",onChange:function(t){return e.changeHandler(t,15)}})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"Disabled"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("div",{className:"field-group"},d.createElement(p.Z,{rightIconCls:"fas fa-search",value:"Disabled",theme:p.Z.Theme.PRIMARY,disabled:!0,onChange:function(t){return e.changeHandler(t,16)}})))))),d.createElement(m.Z,null,d.createElement(f.Z,{className:"example-header",title:"Valid In Dialog"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"TextField")," with",d.createElement("code",null,"pattern")," and",d.createElement("code",null,"patternInvalidMsg")," applied."),d.createElement(h.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),d.createElement(y.Z,{visible:l[1],onRequestClose:function(){return e.hide(1)}},(function(t){return d.createElement("div",{className:"popover-dialog-content-scroller"},d.createElement("div",null,"Required"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{required:!0,clearButtonVisible:!1,fieldMsgVisible:!0,value:n[7]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,7)}})),d.createElement("div",null,"NUMBER"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NUMBER,fieldMsgVisible:!0,value:n[8]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,8)}})),d.createElement("div",null,"Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.INTEGER,fieldMsgVisible:!0,value:n[9]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,9)}})),d.createElement("div",null,"Positive Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.POSITIVE_INTEGER,fieldMsgVisible:!0,value:n[10]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,10)}})),d.createElement("div",null,"Nonnegative Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NONNEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[11]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,11)}})),d.createElement("div",null,"Negative Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NEGATIVE_INTEGER,fieldMsgVisible:!0,value:n[12]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,12)}})),d.createElement("div",null,"Nonpositive Integer"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NONPOSITIVE_INTEGER,fieldMsgVisible:!0,value:n[13]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,13)}})),d.createElement("div",null,"Min / Max"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{type:p.Z.Type.NUMBER,min:0,max:100,fieldMsgVisible:!0,value:n[14]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,14)}})),d.createElement("div",null,"Self Defined Pattern (Only a, b, c is allowed)"),d.createElement("div",{className:"field-group"},d.createElement(p.Z,{pattern:/^[abc]*$/,patternInvalidMsg:"Only a, b, c is allowed",fieldMsgVisible:!0,value:n[15]||"",parentEl:t,onChange:function(t){return e.changeHandler(t,15)}})))})))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(g.Z,{data:E}))}}]),b}(d.Component)},38075:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var l=n(96156),a=n(6610),r=n(5991),i=n(10379),c=n(46070),s=n(77608),o=n(37699),d=n(45697),p=n.n(d),u=n(41844),m=n.n(u);var f=function(e){(0,i.Z)(p,e);var t,n,d=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,c.Z)(this,e)});function p(e){(0,a.Z)(this,p);for(var t=arguments.length,n=new Array(t>1?t-1:0),l=1;l<t;l++)n[l-1]=arguments[l];return d.call.apply(d,[this,e].concat(n))}return(0,r.Z)(p,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style;return o.createElement("div",{className:m()("text-field-group",(0,l.Z)({},n,n)),style:a},t)}}]),p}(o.Component);f.propTypes={children:p().any,className:p().string,style:p().object};const h=f}}]);