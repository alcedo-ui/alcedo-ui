(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5309],{59141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(23645),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}\n",""]);const i=l},65280:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(23645),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,".example-content .dialog-button{width:120px}.popover-dialog-content-scroller{width:1000px;height:1000px}\n",""]);const i=l},1116:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(6610),l=n(5991),i=n(63349),r=n(10379),o=n(46070),s=n(77608),c=n(96156),d=n(37699),u=n(45697),p=n.n(u),h=n(82996),f=n(93379),m=n.n(f),b=n(59141);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}m()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;var y=function(e){(0,r.Z)(p,e);var t,n,u=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var l=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;return(0,a.Z)(this,p),t=u.call(this,e),(0,c.Z)((0,i.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(E({name:n},t.props.data[n]));return e})),t}return(0,l.Z)(p,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(h.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),p}(d.Component);y.propTypes={data:p().object};const g=y},33530:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var a=n(6610),l=n(5991),i=n(63349),r=n(10379),o=n(46070),s=n(77608),c=n(96156),d=n(37699),u=n(17185),p=n(24471),h=n(50704),f=n(22944),m=n(65460),b=n(1116);const v=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"value":{"type":"PropTypes.string","desc":"The value of the editableField.","default":"text"},"name":{"type":"PropTypes.string","desc":"The name of the editableField.","default":""},"title":{"type":"PropTypes.string","desc":"The title of the editableField.","default":""},"maxLength":{"type":"PropTypes.number","desc":"The maximum length of editableField to enter."},"tip":{"type":"PropTypes.string","desc":"The tip of the editableField."},"tipPosition":{"type":"PropTypes.string","desc":"The tipPosition of the editableField."},"regExp":{"type":"PropTypes.object","desc":"The regular expression of the input."},"disabled":{"type":"PropTypes.bool","desc":"If true, the input is disabled.","default":"false"},"showModal":{"type":"PropTypes.bool","desc":"If true, the shadow is under the input.","default":"false"},"autoWidth":{"type":"PropTypes.bool","desc":"If true, the input will be auto width.","default":"false"},"parentEl":{"type":"PropTypes.object"},"onMouseDown":{"type":"PropTypes.func"},"onClick":{"type":"PropTypes.func","desc":"Callback function when touch the editableField."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when the editableField blur."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the editableField change."},"onEditStart":{"type":"PropTypes.func","desc":"Callback function fired when start editableField change."},"onEditEnd":{"type":"PropTypes.func","desc":"Callback function fired when end editableField change."},"beforeChange":{"type":"PropTypes.func","desc":"Callback function fired when before editableField change."}}');var E=n(93379),y=n.n(E),g=n(65280);y()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const Z=function(e){(0,r.Z)(y,e);var t,n,E=(t=y,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var l=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function y(e){var t;return(0,a.Z)(this,y),t=E.call(this,e),(0,c.Z)((0,i.Z)(t),"show",(function(e){var n=t.state.EditableFieldSelectVisible;n[e]=!0,t.setState({EditableFieldSelectVisible:n})})),(0,c.Z)((0,i.Z)(t),"hide",(function(e){var n=t.state.EditableFieldSelectVisible;n[e]=!1,t.setState({EditableFieldSelectVisible:n})})),(0,c.Z)((0,i.Z)(t),"onClick",(function(e){e&&e.stopPropagation?e.stopPropagation():window.event.cancelBubble=!0})),(0,c.Z)((0,i.Z)(t),"onChange",(function(e){console.log(e),"123"===e&&t.setState({disabled:!0,value:"text111"})})),(0,c.Z)((0,i.Z)(t),"onEditEnd",(function(){console.log("end")})),(0,c.Z)((0,i.Z)(t),"onEditStart",(function(){console.log("start")})),(0,c.Z)((0,i.Z)(t),"beforeChange",(function(e){return"123"!=e})),t.state={value:"text",disabled:!1,EditableFieldSelectVisible:{}},t}return(0,l.Z)(y,[{key:"render",value:function(){var e=this,t=this.state.EditableFieldSelectVisible;return d.createElement("div",{className:"example editable-field-examples"},d.createElement("h2",{className:"example-title"},"Editable Field"),d.createElement("p",null,"An ",d.createElement("span",null,"Editable Field")," is an editable text display area."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(p.Z,null,d.createElement(h.Z,{className:"example-header",title:"Basic"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"Editable Field")," simple example."),d.createElement(u.Z,{value:this.state.value,onBlur:this.onBlur,title:"Click to Edit"}),", ",d.createElement(u.Z,{value:this.state.value,autoWidth:!0,onBlur:this.onBlur,disabled:this.state.disabled,onChange:this.onChange,onEditStart:this.onEditStart,beforeChange:this.beforeChange,onClick:this.onClick,showModal:!0}),", ",d.createElement(u.Z,{value:this.state.value,onBlur:this.onBlur,title:"Click to edit"}),", ",d.createElement(u.Z,{value:this.state.value,onBlur:this.onBlur}),", ",d.createElement(u.Z,{value:this.state.value,onBlur:this.onBlur}),", ",d.createElement(u.Z,{value:this.state.value,onBlur:this.onBlur}),", ",d.createElement(u.Z,{value:this.state.value,onBlur:this.onBlur,onEditStart:this.onEditStart,onEditEnd:this.onEditEnd}))))),d.createElement(p.Z,null,d.createElement(h.Z,{className:"example-header",title:"Tip"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"Editable Field")," simple example."),d.createElement(u.Z,{value:this.state.value,onBlur:this.onBlur,maxLength:5,tip:"this is a tip"}))))),d.createElement(p.Z,null,d.createElement(h.Z,{className:"example-header",title:"In Dialog"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,d.createElement("code",null,"Editable Field")," simple example."),d.createElement(f.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),d.createElement(m.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return d.createElement("div",{className:"popover-dialog-content-scroller"},d.createElement(u.Z,{value:e.state.value,onBlur:e.onBlur,maxLength:5,parentEl:t,tip:"this is a tip"}))})))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(b.Z,{data:v}))}}]),y}(d.Component)},17185:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var a=n(6610),l=n(5991),i=n(63349),r=n(10379),o=n(46070),s=n(77608),c=n(96156),d=n(37699),u=n(45697),p=n.n(u),h=n(58776),f=n(88787),m=n(41844),b=n.n(m),v=n(92742),E=n.n(v),y=n(72),g=n(19605);var Z=function(e){(0,r.Z)(p,e);var t,n,u=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,s.Z)(t);if(n){var l=(0,s.Z)(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;(0,a.Z)(this,p);for(var n=arguments.length,l=new Array(n>1?n-1:0),r=1;r<n;r++)l[r-1]=arguments[r];return t=u.call.apply(u,[this,e].concat(l)),(0,c.Z)((0,i.Z)(t),"triggerElement",(function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1})),(0,c.Z)((0,i.Z)(t),"handleInputChange",(function(e){t.setState({changeText:e})})),(0,c.Z)((0,i.Z)(t),"showInput",(function(e){t.setState({hide:!1},(function(){t.textField&&t.textField.current&&t.textField.current.focus(),t.props.onEditStart&&t.props.onEditStart(e)}))})),(0,c.Z)((0,i.Z)(t),"handleDown",(function(e){var n=e||event;!1!==t.state.hide||t.triggerElement(n.target,t.editableFieldEl)||t.finishEdit(e)})),(0,c.Z)((0,i.Z)(t),"finishEdit",(function(e){var n=t.state.text!==t.state.changeText;n&&t.props.beforeChange&&!1===t.props.beforeChange(t.state.changeText)?e.preventDefault():t.setState({hide:!0,text:E()(t.state.changeText),changeText:E()(t.state.changeText)},(function(){t.props.onEditEnd&&t.props.onEditEnd(e),n&&t.props.onChange&&t.props.onChange(t.state.text)}))})),(0,c.Z)((0,i.Z)(t),"handleKeyDown",(function(e){var n=t.props.regExp;return n&&!n.test(e.key)?(event.preventDefault(),!1):(13===e.keyCode&&t.finishEdit(e),!0)})),t.editableField=(0,d.createRef)(),t.editableFieldEl=null,t.editableFieldText=(0,d.createRef)(),t.editableFieldTextEl=null,t.textField=(0,d.createRef)(),t.state={hide:!0,text:e.value,changeText:e.value,inputAutoWidth:0},t}return(0,l.Z)(p,[{key:"componentDidMount",value:function(){this.editableFieldEl=this.editableField&&this.editableField.current,this.editableFieldTextEl=this.editableFieldText&&this.editableFieldText.current,y.Z.addEvent(document,"mousedown",this.handleDown),y.Z.addEvent(document,"keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var e=this.state.inputAutoWidth,t=this.editableFieldTextEl&&this.editableFieldTextEl.offsetWidth;e!==t&&this.setState({inputAutoWidth:t})}},{key:"componentWillUnmount",value:function(){y.Z.removeEvent(document,"mousedown",this.handleDown),y.Z.removeEvent(document,"keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,l=e.name,i=e.disabled,r=e.tip,o=e.tipPosition,s=e.title,u=e.onMouseDown,p=e.onClick,m=e.showModal,v=e.maxLength,E=e.autoWidth,y=e.parentEl,g=this.state,Z=g.changeText,x=g.text,w=g.hide,T=g.inputAutoWidth,C=E&&"number"==typeof T?{width:parseInt(T)+42}:{};return d.createElement(f.Z,{tipContent:r,parentEl:y,position:o},d.createElement("div",{ref:this.editableField,className:b()("editable-field",(0,c.Z)({},n,n)),style:a,title:"".concat(i?"":s),onMouseDown:u,onClick:p},d.createElement("span",{className:"editable-field-hidden-text",ref:this.editableFieldText,disabled:i},Z),d.createElement("span",{className:"editable-field-text",disabled:i},x),!0===w?d.createElement("span",{className:"editable-field-span",onClick:this.showInput},x,d.createElement("i",{className:"fas fa-pencil-alt editable-field-icon","aria-hidden":"true"})):d.createElement(h.Z,{ref:this.textField,style:C,className:"editable-field-input",maxLength:v,value:Z,onChange:this.handleInputChange}),d.createElement("input",{type:"hidden",value:x,readOnly:!0,name:l}),m&&!w?d.createElement("div",{className:"editable-modal",onClick:this.finishEdit}):null,t))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n,a={prevProps:e},l=g.Z.getDerivedState(e,t,"value","text");return l!==t.text&&(a.text=l,a.changeText=l),!0===e.disabled&&e.disabled!==(null===(n=t.prevProps)||void 0===n?void 0:n.disabled)&&(a.hide=!0),a}}]),p}(d.Component);Z.propTypes={children:p().any,className:p().string,style:p().object,value:p().string,name:p().string,title:p().string,maxLength:p().number,tip:p().string,tipPosition:p().string,regExp:p().object,disabled:p().bool,showModal:p().bool,autoWidth:p().bool,parentEl:p().object,onMouseDown:p().func,onClick:p().func,onBlur:p().func,onChange:p().func,onEditStart:p().func,onEditEnd:p().func,beforeChange:p().func},Z.defaultProps={title:"",value:"text",name:"",disabled:!1,showModal:!1,autoWidth:!1};const x=Z}}]);