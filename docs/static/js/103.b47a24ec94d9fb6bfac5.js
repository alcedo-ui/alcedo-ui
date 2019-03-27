(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{366:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(81),l=a.n(r),o=a(82),s=a.n(o),d=a(83),p=a.n(d),u=a(84),c=a.n(u),f=a(21),m=a.n(f),h=a(85),g=a.n(h),v=a(1),y=a.n(v),E=a(2),x=a.n(E),b=a(373),w=(a(367),function(e){function t(e){var a,n;return l()(this,t),(n=p()(this,c()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=m()(n),n.generateData).bind(a),n}return g()(t,e),s()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(v.Component));w.propTypes={data:x.a.object},w.defaultProps={data:null},t.a=w},367:function(e,t,a){var n=a(368);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,i);n.locals&&(e.exports=n.locals)},368:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},416:function(e,t,a){"use strict";var n=a(81),i=a.n(n),r=a(82),l=a.n(r),o=a(83),s=a.n(o),d=a(84),p=a.n(d),u=a(21),c=a.n(u),f=a(85),m=a.n(f),h=a(22),g=a.n(h),v=a(1),y=a.n(v),E=a(2),x=a.n(E),b=a(361),w=a.n(b),C=a(350),T=a.n(C),S=a(419),N=a(377),P=a(372),I=function(e){function t(e){var a,n;i()(this,t);for(var r=arguments.length,l=new Array(r>1?r-1:0),o=1;o<r;o++)l[o-1]=arguments[o];return n=s()(this,(a=p()(t)).call.apply(a,[this,e].concat(l))),g()(c()(n),"triggerElement",function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}),g()(c()(n),"onInputChange",function(e){n.setState({changeText:e})}),g()(c()(n),"showInput",function(e){n.setState({hide:!1},function(){n.refs.textField.refs.input.focus(),n.props.onEditStart&&n.props.onEditStart(e)})}),g()(c()(n),"downHandle",function(e){var t=e||event;!1!==n.state.hide||n.triggerElement(t.target,n.refs.editableField)||n.finishEdit(e)}),g()(c()(n),"finishEdit",function(e){var t=n.state.text!==n.state.changeText;t&&n.props.beforeChange&&!1===n.props.beforeChange(n.state.changeText)?e.preventDefault():n.setState({hide:!0,text:T()(n.state.changeText),changeText:T()(n.state.changeText)},function(){n.props.onEditEnd&&n.props.onEditEnd(e),t&&n.props.onChange&&n.props.onChange(n.state.text)})}),g()(c()(n),"keyDownHandle",function(e){var t=n.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&n.finishEdit(e),!0)}),n.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){P.a.addEvent(document,"mousedown",this.downHandle),P.a.addEvent(document,"keydown",this.keyDownHandle)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},function(){t.props.onEditEnd&&t.props.onEditEnd()})}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.refs.editableFieldText&&this.refs.editableFieldText.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){P.a.removeEvent(document,"mousedown",this.downHandle),P.a.removeEvent(document,"keydown",this.keyDownHandle)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,i=e.name,r=e.disabled,l=e.tip,o=e.tipPosition,s=e.title,d=e.onMouseDown,p=e.onClick,u=e.showModal,c=e.maxLength,f=e.autoWidth,m=e.parentEl,h=this.state,v=h.changeText,E=h.text,x=h.hide,b=h.inputAutoWidth,C=w()("editable-field",g()({},a,a)),T=f&&"number"==typeof b?{width:parseInt(b)+42}:{};return y.a.createElement(N.a,{tipContent:l,parentEl:m,position:o},y.a.createElement("div",{ref:"editableField",className:C,style:n,title:"".concat(r?"":s),onMouseDown:d,onClick:p},y.a.createElement("span",{className:"editable-field-hidden-text",ref:"editableFieldText",disabled:r},v),y.a.createElement("span",{className:"editable-field-text",disabled:r},E),!0===x?y.a.createElement("span",{className:"editable-field-span",onClick:this.showInput},E,y.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):y.a.createElement(S.a,{ref:"textField",style:T,className:"editable-field-input",maxLength:c,value:v,onChange:this.onInputChange}),y.a.createElement("input",{type:"hidden",value:E,readOnly:!0,name:i}),u&&!x?y.a.createElement("div",{className:"editable-modal",ref:"editableModal",onClick:this.finishEdit}):null,t))}}]),t}(v.Component);I.propTypes={className:x.a.string,style:x.a.object,value:x.a.string,name:x.a.string,title:x.a.string,maxLength:x.a.number,tip:x.a.string,tipPosition:x.a.string,regExp:x.a.object,disabled:x.a.bool,showModal:x.a.bool,autoWidth:x.a.bool,onMouseDown:x.a.func,onClick:x.a.func,onBlur:x.a.func,onChange:x.a.func,onEditStart:x.a.func,onEditEnd:x.a.func,beforeChange:x.a.func},I.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var k=I;a.d(t,"a",function(){return k})},432:function(e,t,a){"use strict";var n=100,i={};function r(e,t){return e&&t?e in i?i[e]:(t.innerHTML=e.repeat(n),i[e]=t.getBoundingClientRect().width/n):0}t.a={calculateCharWidth:r,calculateStringWidth:function(e,t){if(!e||!t)return 0;var a=0,n=!0,i=!1,l=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)a+=r(o.value,t)}catch(e){i=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw l}}return a}}},478:function(e,t,a){"use strict";var n=a(349),i=a.n(n),r=a(81),l=a.n(r),o=a(82),s=a.n(o),d=a(83),p=a.n(d),u=a(84),c=a.n(u),f=a(21),m=a.n(f),h=a(85),g=a.n(h),v=a(22),y=a.n(v),E=a(1),x=a.n(E),b=a(2),w=a.n(b),C=a(361),T=a.n(C),S=a(350),N=a.n(S),P=a(416),I=a(378),k=a(362),D=a(380),W=a(432),H=a(372),F=a(379),A=function(e){function t(e){var a,n;l()(this,t);for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return n=p()(this,(a=c()(t)).call.apply(a,[this,e].concat(o))),y()(m()(n),"getSeparators",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators;return e&&e.length>0?e:DEFAULT_SEPARATORS}),y()(m()(n),"generateSeparatorReg",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators,t=n.getSeparators(e);return new RegExp("\\s*".concat(t?t.map(function(e){return"\\".concat(e)}).join("|"):"","\\s*"),"g")}),y()(m()(n),"removeItem",function(e){var t=n.state.data;t&&!(t.length<1)&&e in t&&(t.splice(e,1),n.setState({data:t},function(){var e=n.props.onChange;e&&e(t)}))}),y()(m()(n),"calInputIndex",function(e){for(var t=n.refs.wrapper,a=D.a.getOffset(t).left,i=a+t.getBoundingClientRect().width,r=e.clientX,l=e.clientY,o=-1;r>=a;){var s=document.elementFromPoint(r,l),d=D.a.findParentByClassName(s,"tag-field-item-wrapper");if(d){o=+d.dataset.index+1;break}r--}if(o<0)for(;r<=i;){var p=document.elementFromPoint(r,l),u=D.a.findParentByClassName(p,"tag-field-item-wrapper");if(u){o=+u.dataset.index;break}r++}return o<0?n.state.data.length:o}),y()(m()(n),"mouseDownHandler",function(e){if(!(n.props.disabled||D.a.findParentByClassName(e.target,"tag-field-item-wrapper")||D.a.hasClass(e.target,"tag-field-input"))){var t=function(e){var t=this;return function(){if(D.a.findParentByClassName(e.target,"tag-field")!=t.refs.wrapper||t.state.itemEditing)t.setState({inputIndex:t.state.data.length});else{var a=e.clientX,n=e.clientY;if(a&&n){var i=t.refs.wrapper;if(D.a.getOffset(i)){var r=t.calInputIndex(e);t.setState({inputIndex:r},function(){setTimeout(function(){t.refs.input.focus()},0)})}}}}}.bind(m()(n))(e);n.state.inputValue?n.insertInputValue(t):t()}}),y()(m()(n),"inputChangeHandler",function(e){if(!n.props.disabled){var t=N()(e.target.value),a=t?t.replace(/\r?\n/gm,n.getSeparators()[0]):t;n.setState({inputValue:a},function(){var e=n.props.onInputChange,t=W.a.calculateStringWidth(a,n.refs.test),i=n.refs.inputWrapper,r=n.refs.input;i&&(i.style.width="".concat(t+9,"px")),r&&(r.style.height=Math.max(r.scrollHeight,24)+"px"),e&&e(a)})}}),y()(m()(n),"inputKeyDownHandler",function(e){n.props.disabled||13===e.keyCode&&n.insertInputValue()}),y()(m()(n),"insertInputValue",function(e){if(!n.props.disabled){var t=n.state,a=t.data,r=t.inputValue,l=t.inputIndex;if(r){var o=N()(r).split(n.generateSeparatorReg()).filter(function(e){return!!e});a.splice.apply(a,[l,0].concat(i()(o))),n.setState({data:a,inputValue:"",inputIndex:l+o.length},function(){n.refs.inputWrapper.style.width="9px";var t=n.props.onChange;t&&t(a),e&&e()})}}}),y()(m()(n),"itemChangeHandler",function(e,t){if(!n.props.disabled){var a=n.state.data;if(e){var r=e.split(n.generateSeparatorReg()).filter(function(e){return e});a.splice.apply(a,[t,1].concat(i()(r)))}else a.splice(t,1);n.setState({data:a},function(){var e=n.props.onChange;e&&e(a)})}}),y()(m()(n),"itemEditStartHandler",function(e){n.props.disabled||n.setState({itemEditing:!0,editingItemIndex:e})}),y()(m()(n),"itemEditEndHandler",function(){n.props.disabled||n.setState({itemEditing:!1})}),n.inputSymbol=Symbol("input"),n.state={wrapperWidth:"auto",data:e.data,inputValue:e.inputValue,inputIndex:e.data.length,itemEditing:!1,editingItemIndex:-1},n}return g()(t,e),s()(t,[{key:"componentDidMount",value:function(){H.a.addEvent(document,"mousedown",this.mouseDownHandler),this.wrapperEl=this.refs.wrapper,this.setState({wrapperWidth:this.wrapperEl?this.wrapperEl.clientWidth:"auto"})}},{key:"componentWillUnmount",value:function(){H.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,i=t.valueField,r=t.displayField,l=t.disabled,o=t.placeholder,s=t.isTagAutoWidth,d=t.tagRemoveIconCls,p=this.state,u=p.wrapperWidth,c=p.data,f=p.inputValue,m=p.inputIndex,h=p.itemEditing,g=p.editingItemIndex,v=T()("tag-field",y()({},a,a)),E=k.a.genIndexArray(c.length);return E.splice(m,0,this.inputSymbol),x.a.createElement("div",{ref:"wrapper",className:v,style:n,disabled:l,onWheel:function(t){return H.a.wheelHandler(t,e.props)}},E&&E.map(function(t){return t===e.inputSymbol?l?null:x.a.createElement("div",{key:"input",ref:"inputWrapper",className:"tag-field-input-wrapper"},x.a.createElement("textarea",{ref:"input",className:"tag-field-input",style:{width:u},autoFocus:"true",value:f,placeholder:c.length<1&&o?o:"",onChange:e.inputChangeHandler,onKeyDown:e.inputKeyDownHandler})):x.a.createElement("span",{key:t,"data-index":t,className:T()("tag-field-item-wrapper",y()({},c[t].className,c[t].className))},x.a.createElement(P.a,{className:"tag-field-item-field",value:k.a.getTextByDisplayField(c[t],r,i),disabled:l||h&&t!==g,autoWidth:s,onChange:function(a){return e.itemChangeHandler(a,t)},onEditStart:function(){return e.itemEditStartHandler(t)},onEditEnd:e.itemEditEndHandler},x.a.createElement(I.a,{className:"tag-field-item-field-delete-button",iconCls:d,disabled:l||h&&t!==g,onClick:function(){return e.removeItem(t)}})))}),x.a.createElement("div",{ref:"test",className:"tag-field-test-container"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,data:F.a.getDerivedState(e,t,"data"),inputValue:F.a.getDerivedState(e,t,"inputValue")}}}]),t}(E.Component);y()(A,"DEFAULT_SEPARATORS",[","]),A.propTypes={className:w.a.string,style:w.a.object,data:w.a.array,inputValue:w.a.oneOfType([w.a.string,w.a.number]),valueField:w.a.string,displayField:w.a.string,separators:w.a.array,disabled:w.a.bool,placeholder:w.a.string,shouldPreventContainerScroll:w.a.bool,isTagAutoWidth:w.a.bool,tagRemoveIconCls:w.a.string,onChange:w.a.func,onInputChange:w.a.func,onWheel:w.a.func},A.defaultProps={data:[],inputValue:"",valueField:"value",displayField:"text",separators:A.DEFAULT_SEPARATORS,disabled:!1,placeholder:"",shouldPreventContainerScroll:!0,isTagAutoWidth:!0,tagRemoveIconCls:"fas fa-times"};var R=A;a.d(t,"a",function(){return R})},519:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},data:{type:"PropTypes.array",default:"[]"},inputValue:{type:"PropTypes.number",default:""},valueField:{type:"PropTypes.string",default:"value"},displayField:{type:"PropTypes.string",default:"text"},separators:{type:"PropTypes.array",default:"TagField.DEFAULT_SEPARATORS"},disabled:{type:"PropTypes.bool",default:"false"},placeholder:{type:"PropTypes.string",default:""},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},isTagAutoWidth:{type:"PropTypes.bool",default:"true"},tagRemoveIconCls:{type:"PropTypes.string",default:"fas fa-times"},onChange:{type:"PropTypes.func"},onInputChange:{type:"PropTypes.func"},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},657:function(e,t,a){var n=a(658);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,i);n.locals&&(e.exports=n.locals)},658:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".tag-field-examples .tag-field-item-wrapper.duplicate .editable-field-text {\n  color: #2196f3; }\n\n.tag-field-examples .tag-field-item-wrapper.unfound .editable-field-text {\n  color: #d8534e; }\n",""])},859:function(e,t,a){"use strict";a.r(t);var n=a(81),i=a.n(n),r=a(82),l=a.n(r),o=a(83),s=a.n(o),d=a(84),p=a.n(d),u=a(85),c=a.n(u),f=a(1),m=a.n(f),h=a(478),g=a(371),v=a(370),y=a(366),E=a(519),x=(a(657),function(e){function t(e){var a;return i()(this,t),(a=s()(this,p()(t).call(this,e))).data=[{text:"Hotelcode1"},{text:"Hotelcode2"},{className:"duplicate",text:"Hotelcode3"},{className:"duplicate",text:"Hotelcode4"},{text:"Hotelcode5"},{className:"unfound",text:"Hotelcode6"},{className:"unfound",value:"Hotelcode7"}],a}return c()(t,e),l()(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"example tag-field-examples"},m.a.createElement("h2",{className:"example-title"},"TagField"),m.a.createElement("p",null,m.a.createElement("span",null,"TagField")," allow users to input text."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(g.a,null,m.a.createElement(v.a,{className:"example-header",title:"With type"}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("div",{className:"examples-wrapper"},m.a.createElement("p",null,m.a.createElement("code",null,"TagField")),m.a.createElement(h.a,{style:{height:100},data:[],placeholder:"Please input ...",separators:[",",";","|"],onChange:function(e){return console.log(e)}}))))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(y.a,{data:E}))}}]),t}(f.Component));t.default=x}}]);