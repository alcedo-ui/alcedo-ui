"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6037],{59141:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const l=a},67383:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".example-content .dialog-button{width:120px}.popover-dialog-content-scroller{width:1000px;height:1000px}",""]);const l=a},1116:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(15671),a=n(43144),l=n(97326),o=n(60136),s=n(82963),i=n(61120),c=n(4942),u=n(37699),p=n(45697),d=n.n(p),f=n(82996),h=n(93379),m=n.n(h),y=n(7795),g=n.n(y),v=n(90569),b=n.n(v),Z=n(3565),T=n.n(Z),C=n(19216),P=n.n(C),F=n(44589),E=n.n(F),O=n(59141),w={};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}w.styleTagTransform=E(),w.setAttributes=T(),w.insert=b().bind(null,"head"),w.domAPI=g(),w.insertStyleElement=P(),m()(O.Z,w),O.Z&&O.Z.locals&&O.Z.locals;var M=function(e){(0,o.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),t=p.call(this,e),(0,c.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(R({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(d,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(u.Component);M.propTypes={data:d().object};const A=M},18032:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(15671),a=n(43144),l=n(97326),o=n(60136),s=n(82963),i=n(61120),c=n(4942),u=n(37699),p=n(30693),d=n(24471),f=n(50704),h=n(22944),m=n(65460),y=n(1116);const g=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"popupClassName":{"type":"PropTypes.string","desc":"The CSS class name of the popup element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"popupStyle":{"type":"PropTypes.object","desc":"Override the styles of the popup element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"position":{"type":"PropTypes.oneOf"},"name":{"type":"PropTypes.string","desc":"The name of the auto complete.","default":""},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the field.","default":""},"label":{"type":"PropTypes.any","default":""},"data":{"type":"PropTypes.oneOf","desc":"Children passed into the List.","default":"[]"},"disabled":{"type":"PropTypes.bool","desc":"If true, the auto complete will be disabled.","default":"false"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"autoClose":{"type":"PropTypes.bool","desc":"If true, the popup list automatically closed after selection.","default":"false"},"minFilterLength":{"type":"PropTypes.number","default":"1"},"filterCallback":{"type":"PropTypes.func","desc":"Callback function fired when filter changed."},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.","default":""},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.","default":"fas fa-search"},"noMatchedPopupVisible":{"type":"PropTypes.bool","desc":"The visiblity of no matched popup.","default":"true"},"noMatchedMsg":{"type":"PropTypes.string","desc":"The message of no matched value.","default":""},"isGrouped":{"type":"PropTypes.bool","desc":"If true,the list data will be grouped.","default":"false"},"isLabelAnimated":{"type":"PropTypes.bool","default":"true"},"filterInitValue":{"type":"PropTypes.string","default":""},"value":{"type":"PropTypes.any"},"popupChildren":{"type":"PropTypes.any"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onFilterChange":{"type":"PropTypes.func","desc":"The function that trigger when filter changes."},"onFilterPressEnter":{"type":"PropTypes.func","desc":"The function that trigger when press enter."},"onFilterClear":{"type":"PropTypes.func","desc":"The function that trigger when filter cleared."},"onChange":{"type":"PropTypes.func","desc":"The function that trigger when value changed."},"onItemClick":{"type":"PropTypes.func","desc":"The function that trigger when touch-tap the list items."},"onFocus":{"type":"PropTypes.func","desc":"Callback function fired when AutoCompleteFilter get focus."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when AutoCompleteFilter lose focus."},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"}}');var v=n(93379),b=n.n(v),Z=n(7795),T=n.n(Z),C=n(90569),P=n.n(C),F=n(3565),E=n.n(F),O=n(19216),w=n.n(O),N=n(44589),R=n.n(N),M=n(67383),A={};A.styleTagTransform=R(),A.setAttributes=E(),A.insert=P().bind(null,"head"),A.domAPI=T(),A.insertStyleElement=w(),b()(M.Z,A),M.Z&&M.Z.locals&&M.Z.locals;var x=function(e){(0,o.Z)(b,e);var t,n,v=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function b(e){var t;return(0,r.Z)(this,b),t=v.call(this,e),(0,c.Z)((0,l.Z)(t),"show",(function(e){var n=t.state.MaterialAutoCompleteFilterVisible;n[e]=!0,t.setState({MaterialAutoCompleteFilterVisible:n})})),(0,c.Z)((0,l.Z)(t),"hide",(function(e){var n=t.state.MaterialAutoCompleteFilterVisible;n[e]=!1,t.setState({MaterialAutoCompleteFilterVisible:n})})),(0,c.Z)((0,l.Z)(t),"onChange",(function(e){console.log("select item: ",e)})),(0,c.Z)((0,l.Z)(t),"filterPressEnterHandle",(function(e){console.log("filter value: ",e)})),(0,c.Z)((0,l.Z)(t),"filterClearHandle",(function(){console.log("filter cleared")})),t.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],t.state={MaterialAutoCompleteFilterVisible:{}},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this,t=this.state.MaterialAutoCompleteFilterVisible;return u.createElement("div",{className:"example material-auto-complete-examples"},u.createElement("h2",{className:"example-title"},"MaterialAutoCompleteFilter"),u.createElement("p",null,"A ",u.createElement("span",null,"MaterialAutoCompleteFilter")," is an interface to help users to complete their input."),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(d.Z,null,u.createElement(f.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"MaterialAutoCompleteFilter")," simple example."),u.createElement(p.Z,{theme:p.Z.Theme.HIGHLIGHT,filterInitValue:"test",data:this.data,label:"Label",placeholder:"Please select ...",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandle,onFilterClear:this.filterClearHandle}))))),u.createElement(d.Z,null,u.createElement(f.Z,{className:"example-header",title:"In Dialog"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"MaterialAutoCompleteFilter")," simple example."),u.createElement(h.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),u.createElement(m.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return u.createElement("div",{className:"popover-dialog-content-scroller"},u.createElement(p.Z,{theme:p.Z.Theme.HIGHLIGHT,filterInitValue:"test",data:e.data,label:"Label",placeholder:"Please select ...",parentEl:t,onChange:e.onChange,onFilterPressEnter:e.filterPressEnterHandle,onFilterClear:e.filterClearHandle}))})))))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(y.Z,{data:g}))}}]),b}(u.Component);const I=x},30693:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(87462),a=n(45987),l=n(15671),o=n(43144),s=n(97326),i=n(60136),c=n(82963),u=n(61120),p=n(4942),d=n(37699),f=n(45697),h=n.n(f),m=n(41844),y=n.n(m),g=n(39080),v=n(20645),b=n(87712),Z=n(65248),T=n(81540),C=n(19605),P=["className","style","theme","label","isLabelAnimated","popupClassName"];var F=function(e){(0,i.Z)(h,e);var t,n,f=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){var t;(0,l.Z)(this,h);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t=f.call.apply(f,[this,e].concat(r)),(0,p.Z)((0,s.Z)(t),"handleTriggerFocus",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.setState({isFocus:!0},(function(){var e=t.props.onFocus;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,s.Z)(t),"handleTriggerBlur",(function(){""===t.state.filter&&t.setState({isFocus:!1});var e=t.props.onBlur;e&&e.apply(void 0,arguments)})),(0,p.Z)((0,s.Z)(t),"handlePopupClosed",(function(){t.setState({isFocus:!1})})),(0,p.Z)((0,s.Z)(t),"handleTriggerFilterChange",(function(e){t.setState({filter:e},(function(){var n=t.props.onFilterChange;n&&n(e)}))})),(0,p.Z)((0,s.Z)(t),"handleTriggerChange",(function(e){t.setState({value:e},(function(){var n=t.props.onChange;n&&n(e)}))})),(0,p.Z)((0,s.Z)(t),"handleTriggerMouseOver",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.setState({isHover:!0},(function(){var e=t.props.onMouseOver;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,s.Z)(t),"handleTriggerMouseOut",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.setState({isHover:!1},(function(){var e=t.props.onMouseOut;e&&e.apply(void 0,n)}))})),(0,p.Z)((0,s.Z)(t),"closePopup",(function(){t.autoCompleteInstance&&t.autoCompleteInstance.closePopup()})),t.autoComplete=(0,d.createRef)(),t.state={value:e.value,filter:e.filterInitValue,isFocus:!1,isHover:!1},t}return(0,o.Z)(h,[{key:"componentDidMount",value:function(){this.autoCompleteInstance=this.autoComplete&&this.autoComplete.current}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,l=e.theme,o=e.label,s=e.isLabelAnimated,i=e.popupClassName,c=(0,a.Z)(e,P),u=this.state,f=u.isFocus,h=u.isHover,m=u.value,b=u.filter;return d.createElement("div",{className:y()("material-auto-complete-filter",(0,p.Z)({animated:s,"has-label":o,"has-value":b,focused:f},t,t)),style:n},o?d.createElement("div",{className:"material-auto-complete-filter-label"},o):null,d.createElement(g.Z,(0,r.Z)({},c,{ref:this.autoComplete,popupClassName:y()("material-auto-complete-filter-popup",(0,p.Z)({},i,i)),theme:l,value:m,onFocus:this.handleTriggerFocus,onBlur:this.handleTriggerBlur,onPopupClosed:this.handlePopupClosed,onMouseOver:this.handleTriggerMouseOver,onMouseOut:this.handleTriggerMouseOut,onFilterChange:this.handleTriggerFilterChange,onChange:this.handleTriggerChange})),d.createElement(v.Z,{theme:l,isHover:h,isFocus:f}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:C.Z.getDerivedState(e,t,"value")}}}]),h}(d.Component);(0,p.Z)(F,"Theme",b.Z),(0,p.Z)(F,"Position",Z.Z),F.propTypes={className:h().string,popupClassName:h().string,style:h().object,popupStyle:h().object,theme:h().oneOf(T.Z.enumerateValue(b.Z)),position:h().oneOf(T.Z.enumerateValue(Z.Z)),name:h().string,placeholder:h().string,label:h().any,data:h().oneOfType([h().arrayOf(h().oneOfType([h().shape({className:h().string,style:h().object,theme:h().oneOf(T.Z.enumerateValue(b.Z)),value:h().oneOfType([h().string,h().number]),desc:h().oneOfType([h().string,h().number]),disabled:h().bool,isLoading:h().bool,disableTouchRipple:h().bool,iconCls:h().string,rightIconCls:h().string,itemRenderer:h().func,onClick:h().func}),h().string,h().number])),h().array]).isRequired,disabled:h().bool,valueField:h().string,displayField:h().string,descriptionField:h().string,autoClose:h().bool,minFilterLength:h().number,filterCallback:h().func,iconCls:h().string,rightIconCls:h().string,noMatchedPopupVisible:h().bool,noMatchedMsg:h().string,isGrouped:h().bool,isLabelAnimated:h().bool,filterInitValue:h().string,value:h().any,popupChildren:h().any,renderer:h().func,onFilterChange:h().func,onFilterPressEnter:h().func,onFilterClear:h().func,onChange:h().func,onItemClick:h().func,onFocus:h().func,onBlur:h().func,onMouseOver:h().func,onMouseOut:h().func},F.defaultProps={theme:b.Z.DEFAULT,name:"",placeholder:"",label:"",isLabelAnimated:!0,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!1,minFilterLength:1,iconCls:"",rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,noMatchedMsg:"",isGrouped:!1,filterInitValue:""};const E=F},20645:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(15671),a=n(43144),l=n(60136),o=n(82963),s=n(61120),i=n(4942),c=n(37699),u=n(45697),p=n.n(u),d=n(41844),f=n.n(d),h=n(87712),m=n(81540);var y=function(e){(0,l.Z)(p,e);var t,n,u=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){(0,r.Z)(this,p);for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return u.call.apply(u,[this,e].concat(n))}return(0,a.Z)(p,[{key:"render",value:function(){var e=this.props,t=e.theme,n=e.isHover,r=e.isFocus,a=e.disabled;return c.createElement("div",{className:f()("material-field-separator",(0,i.Z)({hover:n,focused:r},"theme-".concat(t),t)),disabled:a},c.createElement("div",{className:"material-field-separator-hover"}),c.createElement("div",{className:"material-field-separator-focus"}))}}]),p}(c.Component);(0,i.Z)(y,"Theme",h.Z),y.propTypes={className:p().string,style:p().object,theme:p().oneOf(m.Z.enumerateValue(h.Z)),isHover:p().bool,isFocus:p().bool,disabled:p().bool},y.defaultProps={theme:h.Z.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};const g=y}}]);