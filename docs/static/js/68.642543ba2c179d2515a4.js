(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{424:function(e,t,a){(e.exports=a(184)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},425:function(e,t,a){var l=a(424);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(183)(l,r);l.locals&&(e.exports=l.locals)},426:function(e,t,a){"use strict";var l=a(10),r=a.n(l),n=a(112),s=a.n(n),i=a(111),o=a.n(i),p=a(110),u=a.n(p),c=a(109),d=a.n(c),f=a(108),m=a.n(f),h=a(0),v=a.n(h),y=a(427),g=(a(425),function(e){function t(e){o()(this,t);var a=d()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return m()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(h.Component));g.defaultProps={data:null},t.a=g},435:function(e,t,a){"use strict";var l,r,n=a(405),s=a.n(n),i=a(112),o=a.n(i),p=a(111),u=a.n(p),c=a(110),d=a.n(c),f=a(109),m=a.n(f),h=a(108),v=a.n(h),y=a(0),g=a.n(y),C=a(421),b=a.n(C),F=a(423),T=(a(422),r=l=function(e){function t(e){var a;u()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];return m()(this,(a=t.__proto__||o()(t)).call.apply(a,[this,e].concat(r)))}return v()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.theme,a=e.isHover,l=e.isFocus,r=e.disabled,n=b()("material-field-separator",s()({hover:a,focused:l},"theme-"+t,t));return g.a.createElement("div",{className:n,disabled:r},g.a.createElement("div",{className:"material-field-separator-hover"}),g.a.createElement("div",{className:"material-field-separator-focus"}))}}]),t}(y.Component),l.Theme=F.a,r);T.defaultProps={theme:F.a.DEFAULT,isHover:!1,isFocus:!1,disabled:!1};var P=T;a.d(t,"a",function(){return P})},439:function(e,t,a){"use strict";var l=a(10),r=a.n(l),n=a(405),s=a.n(n),i=a(406),o=a.n(i),p=a(112),u=a.n(p),c=a(111),d=a.n(c),f=a(110),m=a.n(f),h=a(109),v=a.n(h),y=a(108),g=a.n(y),C=a(0),b=a.n(C),F=a(421),T=a.n(F),P=a(435),E=a(423),N=(a(422),function(e){function t(e){var a;d()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=v()(this,(a=t.__proto__||u()(t)).call.apply(a,[this,e].concat(r)));return s.setFocused=function(e){s.setState({isFocus:e})},s.setHovered=function(e){s.setState({isHover:e})},s.state={isHover:!1,isFocus:!1},s}return g()(t,e),m()(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.children,l=t.className,n=t.theme,i=t.label,p=t.isLabelAnimate,u=t.hasValue,c=t.disabled,d=t.required,f=t.useSeparator,m=o()(t,["children","className","theme","label","isLabelAnimate","hasValue","disabled","required","useSeparator"]),h=this.state,v=h.isHover,y=h.isFocus,g=T()("material-provider",s()({"has-label":i,"has-value":u,"has-separator":f,animated:p,focused:y},l,l));return b.a.createElement("div",r()({},m,{className:g,disabled:c}),b.a.createElement("div",{className:"material-provider-label-wrapper"},b.a.createElement("span",{className:"material-provider-label"},i),d?b.a.createElement("div",{className:"material-provider-required-dot"}):null),C.Children.map(a,function(t){var a=t.props,l=a.triggerClassName,n=a.placeholderClassName,i=o()(a,["triggerClassName","placeholderClassName"]),p=r()({},i,{className:T()("material-provider-field",s()({},i.className,i.className)),onFocus:function(){i.onFocus&&i.onFocus.apply(i,arguments),e.setFocused(!0)},onBlur:function(){i.onBlur&&i.onBlur.apply(i,arguments),e.setFocused(!1)},onMouseOver:function(){i.onMouseOver&&i.onMouseOver.apply(i,arguments),e.setHovered(!0)},onMouseOut:function(){i.onMouseOut&&i.onMouseOut.apply(i,arguments),e.setHovered(!1)}});return"string"!=typeof t.type&&(p.triggerClassName=T()("material-provider-field-trigger",s()({},l,l)),p.placeholderClassName=T()("material-provider-field-placeholder",s()({},n,n))),Object(C.cloneElement)(t,p)}),f?b.a.createElement(P.a,{theme:n,isHover:v,isFocus:y,disabled:c}):null)}}]),t}(C.Component));N.defaultProps={theme:E.a.DEFAULT,isLabelAnimate:!0,hasValue:!1,disabled:!1,required:!1,useSeparator:!0};var D=N;a.d(t,"a",function(){return D})},476:function(e,t,a){"use strict";var l,r,n=a(10),s=a.n(n),i=a(185),o=a.n(i),p=a(405),u=a.n(p),c=a(406),d=a.n(c),f=a(113),m=a.n(f),h=a(112),v=a.n(h),y=a(111),g=a.n(y),C=a(110),b=a.n(C),F=a(109),T=a.n(F),P=a(108),E=a.n(P),N=a(0),D=a.n(N),H=a(68),S=a(421),A=a.n(S),L=a(411),w=a.n(L),x=a(433),I=a(436),k=a(442),V=a(453),M=a(423),_=a(422),O=a(446),B=a(455),U=a(431),R=a(451),q=a(443),j=(r=l=function(e){function t(e){var a;g()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=T()(this,(a=t.__proto__||v()(t)).call.apply(a,[this,e].concat(r)));return s.filterData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.state.filter,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.props.data,a=s.props.minFilterLength;if(!e||e.length<a)return t;var l=s.props,r=l.valueField,n=l.displayField,i=l.renderer,o=l.filterCallback;return o?o(e,t):t&&t.filter(function(t){if(!t)return!1;if(i)return i(t).toString().toUpperCase().includes(e.toUpperCase());if("object"===(void 0===t?"undefined":m()(t))){var a=_.a.getTextByDisplayField(t,n,r);if(a)return a.toString().toUpperCase().includes(e.toUpperCase())}return t.toString().toUpperCase().includes(e.toUpperCase())})},s.filterFocusHandler=function(){if(!s.props.disabled){var e=s.props,t=e.minFilterLength,a=e.onFocus,l=s.state,r=l.filter,n=l.listData,i={filterFocused:!0};a&&a.apply(void 0,arguments),null!==r&&r.length>=t&&(i.popupVisible=!0,i.tempSelectIndex=n.length>0?0:null),s.setState(i)}},s.filterBlurHandler=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];s.setState({filterFocused:!1},function(){var e=s.props.onBlur;e&&e.apply(void 0,t)})},s.filterKeyDownHandler=function(e){var t=s.props.useDynamicRenderList,a=s.state,l=a.tempSelectIndex,r=a.listData,n=t?s.refs.dynamicRenderList:s.refs.list,i=l;38===e.keyCode?i--:40===e.keyCode&&i++;var o=O.a.range(i,0,r.length-1);s.setState({tempSelectIndex:o},function(){var t=s.props.onFilterKeyDown;t&&t(e),n&&n.adjustScroll()})},s.filterPressEnterHandler=function(e,t){var a={};s.props.autoClose&&(a.popupVisible=!1),s.setState(a,function(){var e=s.props.onFilterPressEnter;e&&e(t),s.update()})},s.filterChangeHandler=function(e){var t=s.props,a=t.data,l=t.minFilterLength,r={filter:e,popupVisible:null!==e&&e.length>=l};e?(r.listData=s.filterData(e),r.tempSelectIndex=r.listData.length>0?0:null):(r.listData=a,r.value=null,r.tempSelectIndex=null),s.setState(r,function(){var t=s.props.onFilterChange;t&&t(e),s.refs.popup&&s.refs.popup.resetPosition()})},s.closePopup=function(){s.setState({popupVisible:!1},function(){var e=s.props.onPopupClosed;e&&e()})},s.popupRenderHandler=function(e){var t=B.a.isAbove(s.localAutoCompleteEl,s.triggerEl,Object(H.findDOMNode)(e));t!==s.state.isAbove&&s.setState({isAbove:t})},s.itemClickHandler=function(e){var t=s.props,a=t.autoClose,l=t.valueField,r=t.displayField,n=t.renderer,i=n?n(e):_.a.getTextByDisplayField(e,r,l),o={tempSelectIndex:null,value:e,filter:i,listData:s.filterData(i)},p=s.state.value!=e;a&&(o.popupVisible=!1),s.setState(o,function(){var t=s.props,a=t.onItemClick,l=t.onChange;a&&a(e),p&&l&&l(e)})},s.update=function(){var e=s.props,t=e.displayField,a=e.valueField,l=e.renderer,r=s.state,n=r.filter,i=r.tempSelectIndex,o=r.listData,p=null;if(n&&o&&o.length>0){p={};var u=w()(i)?i:0;p.value=o[u],p.filter=l?l(p.value):_.a.getTextByDisplayField(p.value,t,a),p.listData=s.filterData(p.filter)}s.setState(p,function(){if(p){var e=s.props,t=e.onFilterChange,a=e.onChange;t&&t(p.filter),a&&a(p.value)}})},s.mouseDownHandler=function(e){!s.state.filterFocused||R.a.isParent(e.target,s.localAutoCompleteEl)||R.a.isParent(e.target,Object(H.findDOMNode)(s.refs.popup))||s.update()},s.triggerEl=null,s.state={tempSelectIndex:null,value:e.value,filter:e.filterInitValue,filterFocused:!1,popupVisible:!1,isAbove:!1,listData:s.filterData(e.filterInitValue)},s}return E()(t,e),b()(t,[{key:"componentDidMount",value:function(){this.localAutoCompleteEl=this.refs.localAutoComplete,this.triggerEl=Object(H.findDOMNode)(this.refs.trigger),U.a.addEvent(document,"mousedown",this.mouseDownHandler)}},{key:"componentWillUnmount",value:function(){U.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.triggerClassName,l=e.popupClassName,r=e.style,n=e.popupStyle,i=e.popupTheme,p=e.name,c=e.valueField,f=e.displayField,m=e.descriptionField,h=e.noMatchedPopupVisible,v=e.noMatchedMsg,y=e.popupChildren,g=e.renderer,C=e.useDynamicRenderList,b=e.listHeight,F=e.itemHeight,T=e.scrollBuffer,P=e.onFilterClear,E=(e.data,e.filterInitValue,e.minFilterLength,e.autoClose,e.onFilterPressEnter,d()(e,["className","triggerClassName","popupClassName","style","popupStyle","popupTheme","name","valueField","displayField","descriptionField","noMatchedPopupVisible","noMatchedMsg","popupChildren","renderer","useDynamicRenderList","listHeight","itemHeight","scrollBuffer","onFilterClear","data","filterInitValue","minFilterLength","autoClose","onFilterPressEnter"])),N=this.state,H=N.isAbove,S=N.tempSelectIndex,L=N.value,w=N.filter,M=N.popupVisible,O=N.listData,B=[{itemRenderer:function(){return D.a.createElement("div",{className:"no-matched-list-item"},v||D.a.createElement("span",null,D.a.createElement("i",{className:"fas fa-exclamation-triangle no-matched-list-item-icon"}),"No matched value."))},disableTouchRipple:!0}],U=O.length<1,R=A()("local-auto-complete",u()({},t,t)),q=A()("local-auto-complete-trigger",U&&!h?"":M?" activated":"",H?" above":" blow",u()({},a,a)),j=A()("local-auto-complete-popup",H?" above":" blow",u()({},l,l)),G=o()({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},n);return D.a.createElement("div",{ref:"localAutoComplete",className:R,style:r},p?D.a.createElement("input",{type:"hidden",name:p,value:_.a.getValueByValueField(L,c,f)}):null,D.a.createElement(x.a,s()({},E,{ref:"trigger",className:q,value:w,onFocus:this.filterFocusHandler,onBlur:this.filterBlurHandler,onChange:this.filterChangeHandler,onKeyDown:this.filterKeyDownHandler,onPressEnter:this.filterPressEnterHandler,onClear:P,onRightIconClick:this.filterPressEnterHandler})),U&&!h?null:D.a.createElement(I.a,{ref:"popup",className:j,style:G,theme:i,visible:M,triggerEl:this.triggerEl,hasTriangle:!1,position:H?I.a.Position.TOP_LEFT:I.a.Position.BOTTOM_LEFT,onRender:this.popupRenderHandler,onRequestClose:this.closePopup},U?D.a.createElement(k.a,{className:"local-auto-complete-list",theme:i,data:B}):C?D.a.createElement(V.a,{ref:"dynamicRenderList",className:"local-auto-complete-list",theme:i,data:O,value:O[S],valueField:c,displayField:f,descriptionField:m,renderer:g,listHeight:b,itemHeight:F,scrollBuffer:T,onItemClick:this.itemClickHandler}):D.a.createElement(k.a,{ref:"list",className:"local-auto-complete-list",theme:i,data:O,value:O[S],valueField:c,displayField:f,descriptionField:m,renderer:g,onItemClick:this.itemClickHandler}),y))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:q.a.getDerivedState(e,t,"value")}}}]),t}(N.Component),l.Theme=M.a,r);j.defaultProps={theme:M.a.DEFAULT,popupTheme:M.a.DEFAULT,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!0,minFilterLength:1,rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,filterInitValue:"",useDynamicRenderList:!1};var G=j;a.d(t,"a",function(){return G})},530:function(e,t,a){"use strict";var l,r,n=a(10),s=a.n(n),i=a(405),o=a.n(i),p=a(406),u=a.n(p),c=a(112),d=a.n(c),f=a(111),m=a.n(f),h=a(110),v=a.n(h),y=a(109),g=a.n(y),C=a(108),b=a.n(C),F=a(0),T=a.n(F),P=a(421),E=a.n(P),N=a(476),D=a(439),H=a(423),S=(a(422),a(443)),A=(r=l=function(e){function t(e){var a;m()(this,t);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=g()(this,(a=t.__proto__||d()(t)).call.apply(a,[this,e].concat(r)));return s.triggerFilterChangeHandler=function(e){s.setState({filter:e},function(){var t=s.props.onFilterChange;t&&t(e)})},s.triggerChangeHandler=function(e){s.setState({value:e},function(){var t=s.props.onChange;t&&t(e)})},s.closePopup=function(){s.refs.localAutoComplete&&s.refs.localAutoComplete.closePopup()},s.state={value:e.value,filter:e.filterInitValue},s}return b()(t,e),v()(t,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,l=e.theme,r=e.label,n=e.isLabelAnimate,i=e.popupClassName,p=e.disabled,c=e.required,d=u()(e,["className","style","theme","label","isLabelAnimate","popupClassName","disabled","required"]),f=this.state,m=f.value,h=f.filter,v=E()("material-local-auto-complete",o()({},t,t)),y=E()("material-local-auto-complete-popup",o()({},i,i));return T.a.createElement(D.a,{className:v,style:a,theme:l,label:r,isLabelAnimate:n,hasValue:!!h,disabled:p,required:c},T.a.createElement(N.a,s()({},d,{ref:"localAutoComplete",popupClassName:y,theme:l,value:m,disabled:p,onFilterChange:this.triggerFilterChangeHandler,onChange:this.triggerChangeHandler})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:S.a.getDerivedState(e,t,"value")}}}]),t}(F.Component),l.Theme=H.a,r);A.defaultProps={theme:H.a.DEFAULT,name:"",placeholder:"",label:"",isLabelAnimate:!0,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!1,minFilterLength:1,iconCls:"",rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,noMatchedMsg:"",isGrouped:!1,required:!1,filterInitValue:""};var L=A;a.d(t,"a",function(){return L})},711:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},name:{type:"PropTypes.string",desc:"The name of the auto complete.",default:""},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field.",default:""},label:{type:"PropTypes.any",default:""},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"false"},minFilterLength:{type:"PropTypes.number",default:"1"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:""},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value.",default:""},isGrouped:{type:"PropTypes.bool",desc:"If true,the list data will be grouped.",default:"false"},required:{type:"PropTypes.bool",default:"false"},isLabelAnimate:{type:"PropTypes.bool",default:"true"},filterInitValue:{type:"PropTypes.string",default:""},popupChildren:{type:"PropTypes.any"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemClick:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},895:function(e,t,a){"use strict";a.r(t);var l=a(112),r=a.n(l),n=a(111),s=a.n(n),i=a(110),o=a.n(i),p=a(109),u=a.n(p),c=a(108),d=a.n(c),f=a(0),m=a.n(f),h=a(530),v=a(428),y=a(429),g=a(426),C=a(711),b=function(e){function t(e){s()(this,t);var a=u()(this,(t.__proto__||r()(t)).call(this,e));return a.onChange=function(e){console.log("select item: ",e)},a.filterPressEnterHandle=function(e){console.log("filter value: ",e)},a.filterClearHandle=function(){console.log("filter cleared")},a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a}return d()(t,e),o()(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"example auto-complete-examples"},m.a.createElement("h2",{className:"example-title"},"LocalAutoComplete"),m.a.createElement("p",null,"A ",m.a.createElement("span",null,"LocalAutoComplete")," is an interface to help users to complete their input."),m.a.createElement("h2",{className:"example-title"},"Examples"),m.a.createElement(v.a,null,m.a.createElement(y.a,{className:"example-header",title:"Basic"}),m.a.createElement("div",{className:"widget-content"},m.a.createElement("div",{className:"example-content"},m.a.createElement("div",{className:"examples-wrapper"},m.a.createElement("p",null,m.a.createElement("code",null,"LocalAutoComplete")," simple example."),m.a.createElement(h.a,{theme:h.a.Theme.HIGHLIGHT,filterInitValue:"test",data:this.data,label:"Label",placeholder:"Please select ...",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandle,onFilterClear:this.filterClearHandle}))))),m.a.createElement("h2",{className:"example-title"},"Properties"),m.a.createElement(g.a,{data:C}))}}]),t}(f.Component);t.default=b}}]);