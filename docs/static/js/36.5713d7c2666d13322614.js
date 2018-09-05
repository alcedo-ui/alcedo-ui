(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{384:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(80),l=a.n(i),s=a(81),o=a.n(s),d=a(82),p=a.n(d),u=a(83),c=a.n(u),f=a(84),m=a.n(f),h=a(11),g=a.n(h),v=a(0),y=a.n(v),x=a(388),E=(a(385),function(e){function t(e){var a,n;return l()(this,t),(n=p()(this,c()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=g()(g()(n)),n.generateData).bind(a),n}return m()(t,e),o()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(x.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(v.Component));E.defaultProps={data:null},t.a=E},385:function(e,t,a){var n=a(386);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(150)(n,r);n.locals&&(e.exports=n.locals)},386:function(e,t,a){(e.exports=a(149)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},430:function(e,t,a){"use strict";var n=a(80),r=a.n(n),i=a(81),l=a.n(i),s=a(82),o=a.n(s),d=a(83),p=a.n(d),u=a(84),c=a.n(u),f=a(11),m=a.n(f),h=a(20),g=a.n(h),v=a(0),y=a.n(v),x=a(381),E=a.n(x),w=a(371),b=a.n(w),T=a(436),S=a(398),C=a(391),N=function(e){function t(e){var a,n;r()(this,t);for(var i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];return n=o()(this,(a=p()(t)).call.apply(a,[this,e].concat(l))),g()(m()(m()(n)),"triggerElement",function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1}),g()(m()(m()(n)),"onInputChange",function(e){n.setState({changeText:e})}),g()(m()(m()(n)),"showInput",function(e){n.setState({hide:!1},function(){n.refs.textField.refs.input.focus(),n.props.onEditStart&&n.props.onEditStart(e)})}),g()(m()(m()(n)),"downHandle",function(e){var t=e||event;!1!==n.state.hide||n.triggerElement(t.target,n.refs.editableField)||n.finishEdit(e)}),g()(m()(m()(n)),"finishEdit",function(e){var t=n.state.text!==n.state.changeText;t&&n.props.beforeChange&&!1===n.props.beforeChange(n.state.changeText)?e.preventDefault():n.setState({hide:!0,text:b()(n.state.changeText),changeText:b()(n.state.changeText)},function(){n.props.onEditEnd&&n.props.onEditEnd(e),t&&n.props.onChange&&n.props.onChange(n.state.text)})}),g()(m()(m()(n)),"keyDownHandle",function(e){var t=n.props.regExp;return t&&!t.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&n.finishEdit(e),!0)}),n.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},n}return c()(t,e),l()(t,[{key:"componentDidMount",value:function(){C.a.addEvent(document,"mousedown",this.downHandle),C.a.addEvent(document,"keydown",this.keyDownHandle)}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.value!==this.state.text&&this.setState({text:e.value,changeText:e.value}),!0===e.disabled&&e.disabled!==this.props.disabled&&this.setState({hide:!0,changeText:this.state.text},function(){t.props.onEditEnd&&t.props.onEditEnd()})}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.refs.editableFieldText&&this.refs.editableFieldText.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){C.a.removeEvent(document,"mousedown",this.downHandle),C.a.removeEvent(document,"keydown",this.keyDownHandle)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=e.style,r=e.name,i=e.disabled,l=e.tip,s=e.tipPosition,o=e.title,d=e.onMouseDown,p=e.onClick,u=e.showModal,c=e.maxLength,f=e.autoWidth,m=this.state,h=m.changeText,v=m.text,x=m.hide,w=m.inputAutoWidth,b=E()("editable-field",g()({},a,a)),C=f&&"number"==typeof w?{width:parseInt(w)+42}:{};return y.a.createElement(S.a,{text:l,position:s},y.a.createElement("div",{ref:"editableField",className:b,style:n,title:"".concat(i?"":o),onMouseDown:d,onClick:p},y.a.createElement("span",{className:"editable-field-hidden-text",ref:"editableFieldText",disabled:i},h),y.a.createElement("span",{className:"editable-field-text",disabled:i},v),!0===x?y.a.createElement("span",{className:"editable-field-span",onClick:this.showInput},v,y.a.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):y.a.createElement(T.a,{ref:"textField",style:C,className:"editable-field-input",maxLength:c,value:h,onChange:this.onInputChange}),y.a.createElement("input",{type:"hidden",value:v,readOnly:!0,name:r}),u&&!x?y.a.createElement("div",{className:"editable-modal",ref:"editableModal",onClick:this.finishEdit}):null,t))}}]),t}(v.Component);N.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};var I=N;a.d(t,"a",function(){return I})},454:function(e,t,a){"use strict";var n=100,r={};function i(e,t){return e&&t?e in r?r[e]:(t.innerHTML=e.repeat(n),r[e]=t.getBoundingClientRect().width/n):0}t.a={calculateCharWidth:i,calculateStringWidth:function(e,t){if(!e||!t)return 0;var a=0,n=!0,r=!1,l=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0)a+=i(s.value,t)}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}}},488:function(e,t,a){"use strict";var n=a(369),r=a.n(n),i=a(80),l=a.n(i),s=a(81),o=a.n(s),d=a(82),p=a.n(d),u=a(83),c=a.n(u),f=a(84),m=a.n(f),h=a(11),g=a.n(h),v=a(20),y=a.n(v),x=a(0),E=a.n(x),w=a(381),b=a.n(w),T=a(371),S=a.n(T),C=a(430),N=a(401),I=a(382),P=a(409),H=a(454),D=a(391),W=a(399),k=a(403),F=function(e){function t(e){var a,n;l()(this,t);for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return n=p()(this,(a=c()(t)).call.apply(a,[this,e].concat(s))),y()(g()(g()(n)),"getIndex",function(){var e=n.props,t=e.data,a=e.listHeight,r=e.itemHeight,i=e.scrollBuffer,l=e.column,s=n.state.scrollTop;return n.displayIndex=k.a.displayIndexByScrollTopMulColumns(t,a,r,l,s,i)}),y()(g()(g()(n)),"scrollHandler",function(e){n.setState({scrollTop:n.wrapperEl.scrollTop},function(){var t=n.props.onScroll;t&&t(e)})}),y()(g()(g()(n)),"getSeparators",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators;return e&&e.length>0?e:DEFAULT_SEPARATORS}),y()(g()(g()(n)),"generateSeparatorReg",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.separators,t=n.getSeparators(e);return new RegExp("\\s*".concat(t?t.map(function(e){return"\\".concat(e)}).join("|"):"","\\s*"),"g")}),y()(g()(g()(n)),"removeItem",function(e){var t=n.state.data;t&&!(t.length<1)&&e in t&&(t.splice(e,1),n.setState({data:t},function(){var e=n.props.onChange;e&&e(t)}))}),y()(g()(g()(n)),"calInputIndex",function(e){for(var t=n.refs.wrapper,a=P.a.getOffset(t).left,r=a+t.getBoundingClientRect().width,i=e.clientX,l=e.clientY,s=-1;i>=a;){var o=document.elementFromPoint(i,l),d=P.a.findParentByClassName(o,"tag-field-item-wrapper");if(d){s=+d.dataset.index+1;break}i--}if(s<0)for(;i<=r;){var p=document.elementFromPoint(i,l),u=P.a.findParentByClassName(p,"tag-field-item-wrapper");if(u){s=+u.dataset.index;break}i++}return s<0?n.state.data.length:s}),y()(g()(g()(n)),"mouseDownHandler",function(e){if(!(n.props.disabled||P.a.findParentByClassName(e.target,"tag-field-item-wrapper")||P.a.hasClass(e.target,"tag-field-input"))){var t=function(e){var t=this;return function(){if(P.a.findParentByClassName(e.target,"dynamic-tag-field")!=t.refs.wrapper||t.state.itemEditing)t.setState({inputIndex:t.state.data.length});else{var a=e.clientX,n=e.clientY;if(a&&n){var r=t.refs.wrapper;if(P.a.getOffset(r)){t.calInputIndex(e);setTimeout(function(){t.refs.input.focus()},0)}}}}}.bind(g()(g()(n)))(e);n.state.inputValue?n.insertInputValue(t):t()}}),y()(g()(g()(n)),"inputChangeHandler",function(e){if(!n.props.disabled){var t=S()(e.target.value),a=t?t.replace(/\r?\n/gm,n.getSeparators()[0]):t;n.setState({inputValue:a},function(){var e=n.props.onInputChange,t=H.a.calculateStringWidth(a,n.refs.test),r=n.refs.inputWrapper,i=n.refs.input;r&&(r.style.width="".concat(t+9,"px")),i&&(i.style.height=Math.max(i.scrollHeight,24)+"px"),e&&e(a)})}}),y()(g()(g()(n)),"inputKeyDownHandler",function(e){n.props.disabled||13===e.keyCode&&n.insertInputValue()}),y()(g()(g()(n)),"insertInputValue",function(e){if(!n.props.disabled){var t=n.state,a=t.data,i=t.inputValue,l=t.inputIndex;if(i){var s=S()(i).split(n.generateSeparatorReg()).filter(function(e){return!!e});a.splice.apply(a,[l,0].concat(r()(s))),n.setState({data:a,inputValue:"",inputIndex:l+s.length},function(){n.refs.inputWrapper.style.width="9px",n.refs.input&&(n.refs.input.style.height="24px");var t=n.props.onChange;t&&t(a),e&&e()})}}}),y()(g()(g()(n)),"itemChangeHandler",function(e,t){if(!n.props.disabled){var a=n.state.data;if(e){var i=e.split(n.generateSeparatorReg()).filter(function(e){return e});a.splice.apply(a,[t,1].concat(r()(i)))}else a.splice(t,1);n.setState({data:a},function(){var e=n.props.onChange;e&&e(a)})}}),y()(g()(g()(n)),"itemEditStartHandler",function(e){n.props.disabled||n.setState({itemEditing:!0,editingItemIndex:e})}),y()(g()(g()(n)),"itemEditEndHandler",function(){n.props.disabled||n.setState({itemEditing:!1})}),n.inputSymbol=Symbol("input"),n.lastDisplayIndex=null,n.displayIndex=null,n.state={scrollTop:0,wrapperWidth:"auto",data:e.data,inputValue:e.inputValue,inputIndex:e.data.length,itemEditing:!1,editingItemIndex:-1},n}return m()(t,e),o()(t,[{key:"componentDidMount",value:function(){D.a.addEvent(document,"mousedown",this.mouseDownHandler),this.wrapperEl=this.refs.wrapper,this.setState({wrapperWidth:this.wrapperEl?this.wrapperEl.clientWidth:"auto"})}},{key:"componentWillUnmount",value:function(){D.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,r=t.valueField,i=t.displayField,l=t.disabled,s=t.placeholder,o=t.isTagAutoWidth,d=t.tagRemoveIconCls,p=t.itemHeight,u=t.column,c=this.state,f=c.wrapperWidth,m=c.data,h=c.inputValue,g=c.inputIndex,v=(c.itemEditing,c.editingItemIndex,b()("dynamic-tag-field",y()({},a,a))),x=this.getIndex(),w=m&&x?m.slice(x.startWithBuffer,x.stopWithBuffer+1):m,T=I.a.genIndexArray(w.length),S={height:Math.ceil(m.length/u)*p};return T.splice(g,0,this.inputSymbol),E.a.createElement("div",{ref:"wrapper",className:v,style:n,disabled:l,onScroll:this.scrollHandler,onWheel:function(t){return D.a.wheelHandler(t,e.props)}},E.a.createElement("div",{className:"dynamic-render-list-scroller",style:S},E.a.createElement("div",{className:"dynamic-render-tag-field-transform",style:{transform:"translateY(".concat(x.startWithBuffer*p/u,"px)"),height:T.length>1?"auto":"108px"}},T&&T.map(function(t){return t===e.inputSymbol?null:E.a.createElement("span",{key:t,"data-index":t,className:b()("tag-field-item-wrapper",y()({},w[t].className,w[t].className))},E.a.createElement(C.a,{className:"tag-field-item-field",value:I.a.getTextByDisplayField(w[t],i,r),autoWidth:o,onChange:function(a){return e.itemChangeHandler(a,t+x.startWithBuffer)},onEditStart:function(){return e.itemEditStartHandler(t+x.startWithBuffer)},onEditEnd:e.itemEditEndHandler},E.a.createElement(N.a,{className:"tag-field-item-field-delete-button",iconCls:d,onClick:function(){return e.removeItem(t+x.startWithBuffer)}})))}))),E.a.createElement("div",{key:"input",ref:"inputWrapper",className:"tag-field-input-wrapper"},E.a.createElement("textarea",{ref:"input",className:"tag-field-input",style:{width:f},autoFocus:"true",value:h,placeholder:w.length<1&&s?s:"",onChange:this.inputChangeHandler,onKeyDown:this.inputKeyDownHandler})),E.a.createElement("div",{ref:"test",className:"tag-field-test-container"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,data:W.a.getDerivedState(e,t,"data"),inputValue:W.a.getDerivedState(e,t,"inputValue")}}}]),t}(x.Component);y()(F,"DEFAULT_SEPARATORS",[","]),F.defaultProps={data:[],inputValue:"",valueField:"value",displayField:"text",separators:F.DEFAULT_SEPARATORS,disabled:!1,placeholder:"",shouldPreventContainerScroll:!0,isTagAutoWidth:!0,tagRemoveIconCls:"fas fa-times",listHeight:200,itemHeight:34,scrollBuffer:24,column:4};var A=F;a.d(t,"a",function(){return A})},531:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},data:{type:"PropTypes.array",default:"[]"},inputValue:{type:"PropTypes.number",default:""},valueField:{type:"PropTypes.string",default:"value"},displayField:{type:"PropTypes.string",default:"text"},separators:{type:"PropTypes.array",default:"TagField.DEFAULT_SEPARATORS"},disabled:{type:"PropTypes.bool",default:"false"},placeholder:{type:"PropTypes.string",default:""},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},isTagAutoWidth:{type:"PropTypes.bool",default:"true"},tagRemoveIconCls:{type:"PropTypes.string",default:"fas fa-times"},onChange:{type:"PropTypes.func"},onInputChange:{type:"PropTypes.func"},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},647:function(e,t,a){var n=a(648);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(150)(n,r);n.locals&&(e.exports=n.locals)},648:function(e,t,a){(e.exports=a(149)(!1)).push([e.i,".dynamic-render-tag-field-examples .tag-field-item-wrapper.duplicate .editable-field-text {\n  color: #2196f3; }\n\n.dynamic-render-tag-field-examples .tag-field-item-wrapper.unfound .editable-field-text {\n  color: #d8534e; }\n",""])},828:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a.n(n),i=a(81),l=a.n(i),s=a(82),o=a.n(s),d=a(83),p=a.n(d),u=a(84),c=a.n(u),f=a(0),m=a.n(f),h=a(488),g=a(390),v=a(389),y=a(384),x=a(531),E=(a(647),function(e){function t(e){var a;return r()(this,t),(a=o()(this,p()(t).call(this,e))).data=[{text:"Hotelcode1"},{text:"Hotelcode2"},{className:"duplicate",text:"Hotelcode3"},{className:"duplicate",text:"Hotelcode4"},{text:"Hotelcode5"},{className:"unfound",text:"Hotelcode6"},{className:"unfound",value:"Hotelcode7"}],a}return c()(t,e),l()(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"example dynamic-render-tag-field-examples"},m.a.createElement("h2",{className:"example-title"},"DynamicRenderTagField"),m.a.createElement("p",null,m.a.createElement("span",null,"DynamicRenderTagField")," allow users to input text."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(g.a,null,m.a.createElement(v.a,{className:"example-header",title:"With type"}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("div",{className:"examples-wrapper"},m.a.createElement("p",null,m.a.createElement("code",null,"DynamicRenderTagField")),m.a.createElement(h.a,{style:{height:100},data:[],placeholder:"Please input ...",separators:[",",";","|"],onChange:function(e){return console.log(e)}}))))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(y.a,{data:x}))}}]),t}(f.Component));t.default=E}}]);