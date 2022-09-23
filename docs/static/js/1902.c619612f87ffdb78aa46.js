"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[1902],{59141:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(8081),r=n.n(a),i=n(23645),l=n.n(i)()(r());l.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=l},46367:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(8081),r=n.n(a),i=n(23645),l=n.n(i)()(r());l.push([e.id,".tag-field-examples .tag-field-item-wrapper.duplicate .editable-field-text{color:#2196f3}.tag-field-examples .tag-field-item-wrapper.unfound .editable-field-text{color:#d8534e}",""]);const o=l},1116:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(15671),r=n(43144),i=n(97326),l=n(60136),o=n(82963),s=n(61120),u=n(4942),d=n(37699),c=n(45697),p=n.n(c),f=n(82996),h=n(93379),m=n.n(h),g=n(7795),y=n.n(g),v=n(90569),b=n.n(v),Z=n(3565),E=n.n(Z),x=n(19216),w=n.n(x),T=n(44589),P=n.n(T),S=n(59141),C={};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}C.styleTagTransform=P(),C.setAttributes=E(),C.insert=b().bind(null,"head"),C.domAPI=y(),C.insertStyleElement=w(),m()(S.Z,C),S.Z&&S.Z.locals&&S.Z.locals;var F=function(e){(0,l.Z)(p,e);var t,n,c=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;return(0,a.Z)(this,p),t=c.call(this,e),(0,u.Z)((0,i.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(I({name:n},t.props.data[n]));return e})),t}return(0,r.Z)(p,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),p}(d.Component);F.propTypes={data:p().object};const D=F},99995:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(15671),r=n(43144),i=n(97326),l=n(60136),o=n(82963),s=n(61120),u=n(4942),d=n(37699),c=n(29971),p=n(24471),f=n(50704),h=n(1116),m=n(1363),g=n(93379),y=n.n(g),v=n(7795),b=n.n(v),Z=n(90569),E=n.n(Z),x=n(3565),w=n.n(x),T=n(19216),P=n.n(T),S=n(44589),C=n.n(S),R=n(46367),I={};I.styleTagTransform=C(),I.setAttributes=w(),I.insert=E().bind(null,"head"),I.domAPI=b(),I.insertStyleElement=P(),y()(R.Z,I),R.Z&&R.Z.locals&&R.Z.locals;var F=function(e){(0,l.Z)(y,e);var t,n,g=(t=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function y(e){var t;return(0,a.Z)(this,y),t=g.call(this,e),(0,u.Z)((0,i.Z)(t),"handleChange",(function(e){t.setState({value:e},(function(){return console.log("value changed::",e)}))})),t.state={value:[]},t}return(0,r.Z)(y,[{key:"render",value:function(){var e=this.state.value;return d.createElement("div",{className:"example tag-field-examples"},d.createElement("h2",{className:"example-title"},"TagField"),d.createElement("p",null,d.createElement("span",null,"TagField"),"allow users to input text."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(p.Z,null,d.createElement(f.Z,{className:"example-header",title:"With type"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"TagField")),d.createElement(c.Z,{style:{height:100},data:e,placeholder:"Please input ...",separators:[",",";","|"],onChange:this.handleChange}))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(h.Z,{data:m}))}}]),y}(d.Component);const D=F},17185:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(15671),r=n(43144),i=n(97326),l=n(60136),o=n(82963),s=n(61120),u=n(4942),d=n(37699),c=n(45697),p=n.n(c),f=n(58776),h=n(88787),m=n(41844),g=n.n(m),y=n(92742),v=n.n(y),b=n(72),Z=n(19605);var E=function(e){(0,l.Z)(p,e);var t,n,c=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var r=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;(0,a.Z)(this,p);for(var n=arguments.length,r=new Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];return t=c.call.apply(c,[this,e].concat(r)),(0,u.Z)((0,i.Z)(t),"triggerElement",(function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1})),(0,u.Z)((0,i.Z)(t),"handleInputChange",(function(e){t.setState({changeText:e})})),(0,u.Z)((0,i.Z)(t),"showInput",(function(e){t.setState({hide:!1},(function(){t.textField&&t.textField.current&&t.textField.current.focus(),t.props.onEditStart&&t.props.onEditStart(e)}))})),(0,u.Z)((0,i.Z)(t),"handleDown",(function(e){var n=e||event;!1!==t.state.hide||t.triggerElement(n.target,t.editableFieldEl)||t.finishEdit(e)})),(0,u.Z)((0,i.Z)(t),"finishEdit",(function(e){var n=t.state.text!==t.state.changeText;n&&t.props.beforeChange&&!1===t.props.beforeChange(t.state.changeText)?e.preventDefault():t.setState({hide:!0,text:v()(t.state.changeText),changeText:v()(t.state.changeText)},(function(){t.props.onEditEnd&&t.props.onEditEnd(e),n&&t.props.onChange&&t.props.onChange(t.state.text)}))})),(0,u.Z)((0,i.Z)(t),"handleKeyDown",(function(e){var n=t.props.regExp;return n&&!n.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&t.finishEdit(e),!0)})),t.editableField=(0,d.createRef)(),t.editableFieldEl=null,t.editableFieldText=(0,d.createRef)(),t.editableFieldTextEl=null,t.textField=(0,d.createRef)(),t.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},t}return(0,r.Z)(p,[{key:"componentDidMount",value:function(){this.editableFieldEl=this.editableField&&this.editableField.current,this.editableFieldTextEl=this.editableFieldText&&this.editableFieldText.current,b.Z.addEvent(document,"mousedown",this.handleDown),b.Z.addEvent(document,"keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.editableFieldTextEl&&this.editableFieldTextEl.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){b.Z.removeEvent(document,"mousedown",this.handleDown),b.Z.removeEvent(document,"keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=e.name,i=e.disabled,l=e.tip,o=e.tipPosition,s=e.title,c=e.onMouseDown,p=e.onClick,m=e.showModal,y=e.maxLength,v=e.autoWidth,b=e.parentEl,Z=this.state,E=Z.changeText,x=Z.text,w=Z.hide,T=Z.inputAutoWidth,P=v&&"number"==typeof T?{width:parseInt(T)+42}:{};return d.createElement(h.Z,{tipContent:l,parentEl:b,position:o},d.createElement("div",{ref:this.editableField,className:g()("editable-field",(0,u.Z)({},n,n)),style:a,title:"".concat(i?"":s),onMouseDown:c,onClick:p},d.createElement("span",{className:"editable-field-hidden-text",ref:this.editableFieldText,disabled:i},E),d.createElement("span",{className:"editable-field-text",disabled:i},x),!0===w?d.createElement("span",{className:"editable-field-span",onClick:this.showInput},x,d.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):d.createElement(f.Z,{ref:this.textField,style:P,className:"editable-field-input",maxLength:y,value:E,onChange:this.handleInputChange}),d.createElement("input",{type:"hidden",value:x,readOnly:!0,name:r}),m&&!w?d.createElement("div",{className:"editable-modal",onClick:this.finishEdit}):null,t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,a={prevProps:e},r=Z.Z.getDerivedState(e,t,"value","text");return r!==t.text&&(a.text=r,a.changeText=r),!0===e.disabled&&e.disabled!==(null===(n=t.prevProps)||void 0===n?void 0:n.disabled)&&(a.hide=!0),a}}]),p}(d.Component);E.propTypes={children:p().any,className:p().string,style:p().object,value:p().string,name:p().string,title:p().string,maxLength:p().number,tip:p().string,tipPosition:p().string,regExp:p().object,disabled:p().bool,showModal:p().bool,autoWidth:p().bool,parentEl:p().object,onMouseDown:p().func,onClick:p().func,onBlur:p().func,onChange:p().func,onEditStart:p().func,onEditEnd:p().func,beforeChange:p().func},E.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};const x=E},29971:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(42982),r=n(15671),i=n(43144),l=n(97326),o=n(60136),s=n(82963),u=n(61120),d=n(4942),c=n(37699),p=n(45697),f=n.n(p),h=n(41844),m=n.n(h),g=n(92742),y=n.n(g),v=n(17185),b=n(96453),Z=n(81540),E=n(25299),x=n(45513),w=n(72),T=n(19605);var P=function(e){(0,o.Z)(f,e);var t,n,p=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.Z)(t);if(n){var r=(0,u.Z)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function f(e){var t;(0,r.Z)(this,f);for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t=p.call.apply(p,[this,e].concat(i)),(0,d.Z)((0,l.Z)(t),"getSeparators",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.separators;return e&&e.length>0?e:DEFAULT_SEPARATORS})),(0,d.Z)((0,l.Z)(t),"generateSeparatorReg",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.separators,n=t.getSeparators(e);return new RegExp("\\s*".concat(n?n.map((function(e){return"\\".concat(e)})).join("|"):"","\\s*"),"g")})),(0,d.Z)((0,l.Z)(t),"removeItem",(function(e){var n=t.state.data;!n||n.length<1||!(e in n)||(n.splice(e,1),t.setState({data:n},(function(){var e=t.props.onChange;e&&e(n)})))})),(0,d.Z)((0,l.Z)(t),"calInputIndex",(function(e){if(!t.wrapperEl)return-1;for(var n=E.ZP.getOffset(t.wrapperEl).left,a=n+t.wrapperEl.getBoundingClientRect().width,r=e.clientX,i=e.clientY,l=-1;r>=n;){var o=document.elementFromPoint(r,i),s=E.ZP.findParentByClassName(o,"tag-field-item-wrapper");if(s){l=+s.dataset.index+1;break}r--}if(l<0)for(;r<=a;){var u=document.elementFromPoint(r,i),d=E.ZP.findParentByClassName(u,"tag-field-item-wrapper");if(d){l=+d.dataset.index;break}r++}return l<0?t.state.data.length:l})),(0,d.Z)((0,l.Z)(t),"handleMouseDown",(function(e){if(!(t.props.disabled||E.ZP.findParentByClassName(e.target,"tag-field-item-wrapper")||E.ZP.hasClass(e.target,"tag-field-input"))){var n=function(e){var t=this;return function(){if(t.state.itemEditing||t.wrapperEl&&E.ZP.findParentByClassName(e.target,"tag-field")!=t.wrapperEl)t.setState({inputIndex:t.state.data.length});else{var n=e.clientX,a=e.clientY;if(n&&a&&t.wrapperEl&&E.ZP.getOffset(t.wrapperEl)){var r=t.calInputIndex(e);t.setState({inputIndex:r},(function(){setTimeout((function(){t.input&&t.input.current&&t.input.current.focus()}),0)}))}}}}.bind((0,l.Z)(t))(e);t.state.inputValue?t.insertInputValue(n):n()}})),(0,d.Z)((0,l.Z)(t),"handleInputChange",(function(e){if(!t.props.disabled){var n=e.target.value,a=n?n.replace(/\r?\n$/gm,"").replace(/\r?\n/gm,t.getSeparators()[0]):n;t.setState({inputValue:a},(function(){var e=t.props.onInputChange,n=x.Z.calculateStringWidth(a,t.testEl),r=t.inputWrapper&&t.inputWrapper.current,i=t.input&&t.input.current;r&&(r.style.width="".concat(n+9,"px")),i&&(i.style.height=Math.max(i.scrollHeight,24)+"px"),e&&e(a)}))}})),(0,d.Z)((0,l.Z)(t),"handleInputKeyDown",(function(e){t.props.disabled||13===e.keyCode&&t.insertInputValue()})),(0,d.Z)((0,l.Z)(t),"insertInputValue",(function(e){if(!t.props.disabled){var n=t.state,r=n.data,i=n.inputValue,l=n.inputIndex;if(i){var o=y()(i).split(t.generateSeparatorReg()).filter((function(e){return!!e}));r.splice.apply(r,[l,0].concat((0,a.Z)(o))),t.setState({data:r,inputValue:"",inputIndex:l+o.length},(function(){t.inputWrapper&&t.inputWrapper.current&&(t.inputWrapper.current.style.width="9px");var n=t.props.onChange;n&&n(r),e&&e()}))}}})),(0,d.Z)((0,l.Z)(t),"handleItemChange",(function(e,n){if(!t.props.disabled){var r=t.state.data;if(e){var i=e.split(t.generateSeparatorReg()).filter((function(e){return e}));r.splice.apply(r,[n,1].concat((0,a.Z)(i)))}else r.splice(n,1);t.setState({data:r},(function(){var e=t.props.onChange;e&&e(r)}))}})),(0,d.Z)((0,l.Z)(t),"handleItemEditStart",(function(e){t.props.disabled||t.setState({itemEditing:!0,editingItemIndex:e})})),(0,d.Z)((0,l.Z)(t),"handleItemEditEnd",(function(){t.props.disabled||t.setState({itemEditing:!1})})),t.inputSymbol=Symbol("input"),t.wrapper=(0,c.createRef)(),t.wrapperEl=null,t.inputWrapper=(0,c.createRef)(),t.input=(0,c.createRef)(),t.test=(0,c.createRef)(),t.testEl=null,t.state={wrapperWidth:"auto",data:e.data,inputValue:e.inputValue,inputIndex:e.data.length,itemEditing:!1,editingItemIndex:-1},t}return(0,i.Z)(f,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.testEl=this.test&&this.test.current,w.Z.addEvent(document,"mousedown",this.handleMouseDown),this.setState({wrapperWidth:this.wrapperEl?this.wrapperEl.clientWidth:"auto"})}},{key:"componentWillUnmount",value:function(){w.Z.removeEvent(document,"mousedown",this.handleMouseDown)}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.style,r=t.valueField,i=t.displayField,l=t.disabled,o=t.placeholder,s=t.isTagAutoWidth,u=t.tagRemoveIconCls,p=this.state,f=p.wrapperWidth,h=p.data,g=p.inputValue,y=p.inputIndex,E=p.itemEditing,x=p.editingItemIndex,w=Z.ZP.genIndexArray(h.length);return w.splice(y,0,this.inputSymbol),c.createElement("div",{ref:this.wrapper,className:m()("tag-field",(0,d.Z)({},n,n)),style:a,disabled:l},w&&w.map((function(t){return t===e.inputSymbol?l?null:c.createElement("div",{key:"input",ref:e.inputWrapper,className:"tag-field-input-wrapper"},c.createElement("textarea",{ref:e.input,className:"tag-field-input",style:{width:f},autoFocus:!0,value:g,placeholder:h.length<1&&o?o:"",onChange:e.handleInputChange,onKeyDown:e.handleInputKeyDown})):c.createElement("span",{key:t,"data-index":t,className:m()("tag-field-item-wrapper",(0,d.Z)({},h[t].className,h[t].className))},c.createElement(v.Z,{className:"tag-field-item-field",value:Z.ZP.getTextByDisplayField(h[t],i,r),disabled:l||E&&t!==x,autoWidth:s,onChange:function(n){return e.handleItemChange(n,t)},onEditStart:function(){return e.handleItemEditStart(t)},onEditEnd:e.handleItemEditEnd},c.createElement(b.Z,{className:"tag-field-item-field-delete-button",iconCls:u,disabled:l||E&&t!==x,onClick:function(){return e.removeItem(t)}})))})),c.createElement("div",{ref:this.test,className:"tag-field-test-container"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,data:T.Z.getDerivedState(e,t,"data"),inputValue:T.Z.getDerivedState(e,t,"inputValue")}}}]),f}(c.Component);(0,d.Z)(P,"DEFAULT_SEPARATORS",[","]),P.propTypes={className:f().string,style:f().object,data:f().array,inputValue:f().oneOfType([f().string,f().number]),valueField:f().string,displayField:f().string,separators:f().array,disabled:f().bool,placeholder:f().string,isTagAutoWidth:f().bool,tagRemoveIconCls:f().string,onChange:f().func,onInputChange:f().func},P.defaultProps={data:[],inputValue:"",valueField:"value",displayField:"text",separators:P.DEFAULT_SEPARATORS,disabled:!1,placeholder:"",isTagAutoWidth:!0,tagRemoveIconCls:"fas fa-times"};const S=P},45513:(e,t,n)=>{function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,{Z:()=>l});var r={};function i(e,t){return e&&t?e in r?r[e]:(t.innerHTML=e.repeat(100),r[e]=t.getBoundingClientRect().width/100):0}const l={calculateCharWidth:i,calculateStringWidth:function(e,t){if(!e||!t)return 0;var n,r=0,l=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw l}}}}(e);try{for(l.s();!(n=l.n()).done;)r+=i(n.value,t)}catch(e){l.e(e)}finally{l.f()}return r}}},1363:e=>{e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"data":{"type":"PropTypes.array","default":"[]"},"inputValue":{"type":"PropTypes.number","default":""},"valueField":{"type":"PropTypes.string","default":"value"},"displayField":{"type":"PropTypes.string","default":"text"},"separators":{"type":"PropTypes.array","default":"TagField.DEFAULT_SEPARATORS"},"disabled":{"type":"PropTypes.bool","default":"false"},"placeholder":{"type":"PropTypes.string","default":""},"isTagAutoWidth":{"type":"PropTypes.bool","default":"true"},"tagRemoveIconCls":{"type":"PropTypes.string","default":"fas fa-times"},"onChange":{"type":"PropTypes.func"},"onInputChange":{"type":"PropTypes.func"}}')}}]);