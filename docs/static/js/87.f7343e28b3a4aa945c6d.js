(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{424:function(e,t,a){(e.exports=a(184)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},425:function(e,t,a){var l=a(424);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(183)(l,n);l.locals&&(e.exports=l.locals)},426:function(e,t,a){"use strict";var l=a(10),n=a.n(l),r=a(112),s=a.n(r),o=a(111),i=a.n(o),p=a(110),c=a.n(p),d=a(109),u=a.n(d),m=a(108),h=a.n(m),f=a(0),y=a.n(f),g=a(427),v=(a(425),function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));v.defaultProps={data:null},t.a=v},477:function(e,t,a){"use strict";var l,n,r=a(10),s=a.n(r),o=a(185),i=a.n(o),p=a(405),c=a.n(p),d=a(406),u=a.n(d),m=a(113),h=a.n(m),f=a(112),y=a.n(f),g=a(111),v=a.n(g),C=a(110),E=a.n(C),T=a(109),P=a.n(T),F=a(108),b=a.n(F),D=a(0),w=a.n(D),x=a(68),N=a(421),S=a.n(N),H=a(411),k=a.n(H),L=a(433),I=a(436),A=a(442),M=a(453),V=a(423),O=a(422),B=a(446),R=a(455),_=a(431),U=a(451),j=a(443),K=(n=l=function(e){function t(e){var a;v()(this,t);for(var l=arguments.length,n=Array(l>1?l-1:0),r=1;r<l;r++)n[r-1]=arguments[r];var s=P()(this,(a=t.__proto__||y()(t)).call.apply(a,[this,e].concat(n)));return s.filterData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.state.filter,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.props.data,a=s.props.minFilterLength;if(!e||e.length<a)return t;var l=s.props,n=l.valueField,r=l.displayField,o=l.renderer,i=l.filterCallback;return i?i(e,t):t&&t.filter(function(t){if(!t)return!1;if(o)return o(t).toString().toUpperCase().includes(e.toUpperCase());if("object"===(void 0===t?"undefined":h()(t))){var a=O.a.getTextByDisplayField(t,r,n);if(a)return a.toString().toUpperCase().includes(e.toUpperCase())}return t.toString().toUpperCase().includes(e.toUpperCase())})},s.filterFocusHandler=function(){if(!s.props.disabled){var e=s.props,t=e.minFilterLength,a=e.onFocus,l=s.state,n=l.filter,r=l.listData,o={filterFocused:!0};a&&a.apply(void 0,arguments),null!==n&&n.length>=t&&(o.popupVisible=!0,o.tempSelectIndex=r.length>0?0:null),s.setState(o)}},s.filterBlurHandler=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];s.setState({filterFocused:!1},function(){var e=s.props.onBlur;e&&e.apply(void 0,t)})},s.filterKeyDownHandler=function(e){var t=s.props.useDynamicRenderList,a=s.state,l=a.tempSelectIndex,n=a.listData,r=t?s.refs.dynamicRenderList:s.refs.list,o=l;38===e.keyCode?o--:40===e.keyCode&&o++;var i=B.a.range(o,0,n.length-1);s.setState({tempSelectIndex:i},function(){var t=s.props.onFilterKeyDown;t&&t(e),r&&r.adjustScroll()})},s.filterPressEnterHandler=function(e,t){var a={};s.props.autoClose&&(a.popupVisible=!1),s.setState(a,function(){var e=s.props.onFilterPressEnter;e&&e(t),s.update()})},s.filterChangeHandler=function(e){var t=s.props,a=t.data,l=t.minFilterLength,n={filter:e,popupVisible:null!==e&&e.length>=l};e?(n.listData=s.filterData(e),n.tempSelectIndex=n.listData.length>0?0:null):(n.listData=a,n.value=null,n.tempSelectIndex=null),s.setState(n,function(){var t=s.props.onFilterChange;t&&t(e),s.refs.popup&&s.refs.popup.resetPosition()})},s.closePopup=function(){s.setState({popupVisible:!1},function(){var e=s.props.onPopupClosed;e&&e()})},s.popupRenderHandler=function(e){var t=R.a.isAbove(s.localAutoCompleteEl,s.triggerEl,Object(x.findDOMNode)(e));t!==s.state.isAbove&&s.setState({isAbove:t})},s.itemClickHandler=function(e){var t=s.props,a=t.autoClose,l=t.valueField,n=t.displayField,r=t.renderer,o=r?r(e):O.a.getTextByDisplayField(e,n,l),i={tempSelectIndex:null,value:e,filter:o,listData:s.filterData(o)},p=s.state.value!=e;a&&(i.popupVisible=!1),s.setState(i,function(){var t=s.props,a=t.onItemClick,l=t.onChange;a&&a(e),p&&l&&l(e)})},s.update=function(){var e=s.props,t=e.displayField,a=e.valueField,l=e.renderer,n=s.state,r=n.filter,o=n.tempSelectIndex,i=n.listData,p=null;if(r&&i&&i.length>0){p={};var c=k()(o)?o:0;p.value=i[c],p.filter=l?l(p.value):O.a.getTextByDisplayField(p.value,t,a),p.listData=s.filterData(p.filter)}s.setState(p,function(){if(p){var e=s.props,t=e.onFilterChange,a=e.onChange;t&&t(p.filter),a&&a(p.value)}})},s.mouseDownHandler=function(e){!s.state.filterFocused||U.a.isParent(e.target,s.localAutoCompleteEl)||U.a.isParent(e.target,Object(x.findDOMNode)(s.refs.popup))||s.update()},s.triggerEl=null,s.state={tempSelectIndex:null,value:e.value,filter:e.filterInitValue,filterFocused:!1,popupVisible:!1,isAbove:!1,listData:s.filterData(e.filterInitValue)},s}return b()(t,e),E()(t,[{key:"componentDidMount",value:function(){this.localAutoCompleteEl=this.refs.localAutoComplete,this.triggerEl=Object(x.findDOMNode)(this.refs.trigger),_.a.addEvent(document,"mousedown",this.mouseDownHandler)}},{key:"componentWillUnmount",value:function(){_.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.triggerClassName,l=e.popupClassName,n=e.style,r=e.popupStyle,o=e.popupTheme,p=e.name,d=e.valueField,m=e.displayField,h=e.descriptionField,f=e.noMatchedPopupVisible,y=e.noMatchedMsg,g=e.popupChildren,v=e.renderer,C=e.useDynamicRenderList,E=e.listHeight,T=e.itemHeight,P=e.scrollBuffer,F=e.onFilterClear,b=(e.data,e.filterInitValue,e.minFilterLength,e.autoClose,e.onFilterPressEnter,u()(e,["className","triggerClassName","popupClassName","style","popupStyle","popupTheme","name","valueField","displayField","descriptionField","noMatchedPopupVisible","noMatchedMsg","popupChildren","renderer","useDynamicRenderList","listHeight","itemHeight","scrollBuffer","onFilterClear","data","filterInitValue","minFilterLength","autoClose","onFilterPressEnter"])),D=this.state,x=D.isAbove,N=D.tempSelectIndex,H=D.value,k=D.filter,V=D.popupVisible,B=D.listData,R=[{itemRenderer:function(){return w.a.createElement("div",{className:"no-matched-list-item"},y||w.a.createElement("span",null,w.a.createElement("i",{className:"fas fa-exclamation-triangle no-matched-list-item-icon"}),"No matched value."))},disableTouchRipple:!0}],_=B.length<1,U=S()("local-auto-complete",c()({},t,t)),j=S()("local-auto-complete-trigger",_&&!f?"":V?" activated":"",x?" above":" blow",c()({},a,a)),K=S()("local-auto-complete-popup",x?" above":" blow",c()({},l,l)),W=i()({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},r);return w.a.createElement("div",{ref:"localAutoComplete",className:U,style:n},p?w.a.createElement("input",{type:"hidden",name:p,value:O.a.getValueByValueField(H,d,m)}):null,w.a.createElement(L.a,s()({},b,{ref:"trigger",className:j,value:k,onFocus:this.filterFocusHandler,onBlur:this.filterBlurHandler,onChange:this.filterChangeHandler,onKeyDown:this.filterKeyDownHandler,onPressEnter:this.filterPressEnterHandler,onClear:F,onRightIconClick:this.filterPressEnterHandler})),_&&!f?null:w.a.createElement(I.a,{ref:"popup",className:K,style:W,theme:o,visible:V,triggerEl:this.triggerEl,hasTriangle:!1,position:x?I.a.Position.TOP_LEFT:I.a.Position.BOTTOM_LEFT,onRender:this.popupRenderHandler,onRequestClose:this.closePopup},_?w.a.createElement(A.a,{className:"local-auto-complete-list",theme:o,data:R}):C?w.a.createElement(M.a,{ref:"dynamicRenderList",className:"local-auto-complete-list",theme:o,data:B,value:B[N],valueField:d,displayField:m,descriptionField:h,renderer:v,listHeight:E,itemHeight:T,scrollBuffer:P,onItemClick:this.itemClickHandler}):w.a.createElement(A.a,{ref:"list",className:"local-auto-complete-list",theme:o,data:B,value:B[N],valueField:d,displayField:m,descriptionField:h,renderer:v,onItemClick:this.itemClickHandler}),g))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:j.a.getDerivedState(e,t,"value")}}}]),t}(D.Component),l.Theme=V.a,n);K.defaultProps={theme:V.a.DEFAULT,popupTheme:V.a.DEFAULT,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!0,minFilterLength:1,rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,filterInitValue:"",useDynamicRenderList:!1};var W=K;a.d(t,"a",function(){return W})},752:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},triggerClassName:{type:"PropTypes.string",desc:"The CSS class name of the trigger element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},popupTheme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},name:{type:"PropTypes.string",desc:"The name of the auto complete."},title:{type:"PropTypes.string",desc:"The title of the auto complete."},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field."},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"true"},minFilterLength:{type:"PropTypes.number",default:"1"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon."},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value."},popupChildren:{type:"PropTypes.any"},filterInitValue:{type:"PropTypes.string",default:""},useDynamicRenderList:{type:"PropTypes.bool",default:"false"},listHeight:{type:"PropTypes.number"},itemHeight:{type:"PropTypes.number"},scrollBuffer:{type:"PropTypes.number"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterKeyDown:{type:"PropTypes.func",desc:"The function that trigger when filter key down."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemClick:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"},onPopupClosed:{type:"PropTypes.func"}}},914:function(e,t,a){"use strict";a.r(t);var l=a(113),n=a.n(l),r=a(112),s=a.n(r),o=a(111),i=a.n(o),p=a(110),c=a.n(p),d=a(109),u=a.n(d),m=a(108),h=a.n(m),f=a(0),y=a.n(f),g=a(477),v=a(428),C=a(429),E=a(426),T=a(752),P=function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||s()(t)).call(this,e));return a.onChange=function(e){console.log("changed value: ",e)},a.filterPressEnterHandler=function(e){console.log("filter value: ",e)},a.filterClearHandler=function(){console.log("filter cleared")},a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a}return h()(t,e),c()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"example"},y.a.createElement("h2",{className:"example-title"},"LocalAutoComplete"),y.a.createElement("p",null,"A ",y.a.createElement("span",null,"LocalAutoComplete")," is an interface to help users to complete their input."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"Basic"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"LocalAutoComplete")," simple example."),y.a.createElement(g.a,{data:this.data,placeholder:"Please select ...",minFilterLength:0,onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandler,onFilterClear:this.filterClearHandler}))))),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"With mode"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"LocalAutoComplete")," with default select mode, ",y.a.createElement("code",null," normal"),", ",y.a.createElement("code",null,"checkbox"),", ",y.a.createElement("code",null,"radio")," applied."),y.a.createElement(g.a,{popupStyle:{maxHeight:300},data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"With mode"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the ",y.a.createElement("code",null,"disabled")," property to true,the ",y.a.createElement("code",null,"LocalAutoComplete"),"will disabled."),y.a.createElement(g.a,{popupStyle:{maxHeight:300},disabled:!0,data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"With mode"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the ",y.a.createElement("code",null,"noMatchedMsg")," property for no matched message."),y.a.createElement(g.a,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:this.data,renderer:function(e){return e&&"object"===(void 0===e?"undefined":n()(e))?e.text+" ("+e.value+")":e+" ("+e+")"},placeholder:"Please select ...",onChange:this.onChange}))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(E.a,{data:T}))}}]),t}(f.Component);t.default=P}}]);