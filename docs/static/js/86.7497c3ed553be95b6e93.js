(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{405:function(e,t,a){(e.exports=a(169)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},406:function(e,t,a){var l=a(405);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(168)(l,n);l.locals&&(e.exports=l.locals)},407:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(109),o=a.n(r),s=a(10),i=a.n(s),p=a(108),c=a.n(p),d=a(7),u=a.n(d),m=a(9),h=a.n(m),f=a(1),y=a.n(f),g=a(408),v=(a(406),function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||o()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));v.defaultProps={data:null},t.a=v},462:function(e,t,a){"use strict";var l,n,r=a(70),o=a.n(r),s=a(387),i=a.n(s),p=a(44),c=a.n(p),d=a(109),u=a.n(d),m=a(10),h=a.n(m),f=a(108),y=a.n(f),g=a(7),v=a.n(g),C=a(9),E=a.n(C),T=a(1),P=a.n(T),b=a(68),F=a(402),w=a.n(F),D=a(392),x=a.n(D),N=a(414),S=a(417),H=a(423),k=a(434),I=a(404),A=a(403),L=a(426),M=a(436),O=a(412),V=a(432),B=a(428),_=(n=l=function(e){function t(e){var a;h()(this,t);for(var l=arguments.length,n=Array(l>1?l-1:0),r=1;r<l;r++)n[r-1]=arguments[r];var o=v()(this,(a=t.__proto__||u()(t)).call.apply(a,[this,e].concat(n)));return o.filterData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.state.filter,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.props.data,a=o.props.minFilterLength;if(!e||e.length<a)return t;var l=o.props,n=l.valueField,r=l.displayField,s=l.renderer,i=l.filterCallback;return i?i(e,t):t&&t.filter(function(t){if(!t)return!1;if(s)return s(t).toString().toUpperCase().includes(e.toUpperCase());if("object"===(void 0===t?"undefined":c()(t))){var a=A.a.getTextByDisplayField(t,r,n);if(a)return a.toString().toUpperCase().includes(e.toUpperCase())}return t.toString().toUpperCase().includes(e.toUpperCase())})},o.filterFocusHandler=function(){if(!o.props.disabled){var e=o.props.onFocus,t=o.state,a=t.filter,l=t.listData,n={filterFocused:!0};e&&e.apply(void 0,arguments),a&&(n.popupVisible=!0,n.tempSelectIndex=l.length>0?0:null),o.setState(n)}},o.filterBlurHandler=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];o.setState({filterFocused:!1},function(){var e=o.props.onBlur;e&&e.apply(void 0,t)})},o.filterKeyDownHandler=function(e){var t=o.props.useDynamicRenderList,a=o.state,l=a.tempSelectIndex,n=a.listData,r=t?o.refs.dynamicRenderList:o.refs.list,s=l;38===e.keyCode?s--:40===e.keyCode&&s++;var i=L.a.range(s,0,n.length-1);o.setState({tempSelectIndex:i},function(){var t=o.props.onFilterKeyDown;t&&t(e),r&&r.adjustScroll()})},o.filterPressEnterHandler=function(e,t){var a={};o.props.autoClose&&(a.popupVisible=!1),o.setState(a,function(){var e=o.props.onFilterPressEnter;e&&e(t),o.update()})},o.filterChangeHandler=function(e){var t=o.props,a=t.data,l=t.minFilterLength,n={filter:e,popupVisible:!!e&&e.length>=l};e?(n.listData=o.filterData(e),n.tempSelectIndex=n.listData.length>0?0:null):(n.listData=a,n.value=null,n.tempSelectIndex=null),o.setState(n,function(){var t=o.props.onFilterChange;t&&t(e),o.refs.popup&&o.refs.popup.resetPosition()})},o.closePopup=function(){o.setState({popupVisible:!1},function(){var e=o.props.onPopupClosed;e&&e()})},o.popupRenderHandler=function(e){var t=M.a.isAbove(o.localAutoCompleteEl,o.triggerEl,Object(b.findDOMNode)(e));t!==o.state.isAbove&&o.setState({isAbove:t})},o.itemClickHandler=function(e){var t=o.props,a=t.autoClose,l=t.valueField,n=t.displayField,r=t.renderer,s=r?r(e):A.a.getTextByDisplayField(e,n,l),i={tempSelectIndex:null,value:e,filter:s,listData:o.filterData(s)},p=o.state.value!=e;a&&(i.popupVisible=!1),o.setState(i,function(){var t=o.props,a=t.onItemClick,l=t.onChange;a&&a(e),p&&l&&l(e)})},o.update=function(){var e=o.props,t=e.displayField,a=e.valueField,l=e.renderer,n=o.state,r=n.filter,s=n.tempSelectIndex,i=n.listData,p=null;if(r&&i&&i.length>0){p={};var c=x()(s)?s:0;p.value=i[c],p.filter=l?l(p.value):A.a.getTextByDisplayField(p.value,t,a),p.listData=o.filterData(p.filter)}o.setState(p,function(){if(p){var e=o.props,t=e.onFilterChange,a=e.onChange;t&&t(p.filter),a&&a(p.value)}})},o.mouseDownHandler=function(e){!o.state.filterFocused||V.a.isParent(e.target,o.localAutoCompleteEl)||V.a.isParent(e.target,Object(b.findDOMNode)(o.refs.popup))||o.update()},o.triggerEl=null,o.state={tempSelectIndex:null,value:e.value,filter:e.filterInitValue,filterFocused:!1,popupVisible:!1,isAbove:!1,listData:o.filterData(e.filterInitValue)},o}return E()(t,e),y()(t,[{key:"componentDidMount",value:function(){this.localAutoCompleteEl=this.refs.localAutoComplete,this.triggerEl=Object(b.findDOMNode)(this.refs.trigger),O.a.addEvent(document,"mousedown",this.mouseDownHandler)}},{key:"componentWillUnmount",value:function(){O.a.removeEvent(document,"mousedown",this.mouseDownHandler)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.triggerClassName,l=e.popupClassName,n=e.style,r=e.popupStyle,s=e.theme,p=e.popupTheme,c=e.name,d=e.placeholder,u=e.disabled,m=e.iconCls,h=e.rightIconCls,f=e.valueField,y=e.displayField,g=e.descriptionField,v=e.noMatchedPopupVisible,C=e.noMatchedMsg,E=e.popupChildren,T=e.renderer,b=e.useDynamicRenderList,F=e.listHeight,D=e.itemHeight,x=e.scrollBuffer,I=e.onFilterClear,L=e.onMouseOver,M=e.onMouseOut,O=this.state,V=O.isAbove,B=O.tempSelectIndex,_=O.value,R=O.filter,U=O.popupVisible,j=O.listData,K=[{itemRenderer:function(){return P.a.createElement("div",{className:"no-matched-list-item"},C||P.a.createElement("span",null,P.a.createElement("i",{className:"fas fa-exclamation-triangle no-matched-list-item-icon"}),"No matched value."))},disableTouchRipple:!0}],W=j.length<1,J=w()("local-auto-complete",i()({},t,t)),q=w()("local-auto-complete-trigger",W&&!v?"":U?" activated":"",V?" above":" blow",i()({},a,a)),Y=w()("local-auto-complete-popup",V?" above":" blow",i()({},l,l)),z=o()({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},r);return P.a.createElement("div",{ref:"localAutoComplete",className:J,style:n},c?P.a.createElement("input",{type:"hidden",name:c,value:A.a.getValueByValueField(_,f,y)}):null,P.a.createElement(N.a,{ref:"trigger",className:q,theme:s,value:R,placeholder:d,disabled:u,iconCls:m,rightIconCls:h,onFocus:this.filterFocusHandler,onBlur:this.filterBlurHandler,onMouseOver:L,onMouseOut:M,onChange:this.filterChangeHandler,onKeyDown:this.filterKeyDownHandler,onPressEnter:this.filterPressEnterHandler,onClear:I,onRightIconClick:this.filterPressEnterHandler}),W&&!v?null:P.a.createElement(S.a,{ref:"popup",className:Y,style:z,theme:p,visible:U,triggerEl:this.triggerEl,hasTriangle:!1,position:V?S.a.Position.TOP_LEFT:S.a.Position.BOTTOM_LEFT,onRender:this.popupRenderHandler,onRequestClose:this.closePopup},W?P.a.createElement(H.a,{className:"local-auto-complete-list",theme:p,data:K}):b?P.a.createElement(k.a,{ref:"dynamicRenderList",className:"local-auto-complete-list",theme:p,data:j,value:j[B],valueField:f,displayField:y,descriptionField:g,renderer:T,listHeight:F,itemHeight:D,scrollBuffer:x,onItemClick:this.itemClickHandler}):P.a.createElement(H.a,{ref:"list",className:"local-auto-complete-list",theme:p,data:j,value:j[B],valueField:f,displayField:y,descriptionField:g,renderer:T,onItemClick:this.itemClickHandler}),E))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:B.a.getDerivedState(e,t,"value")}}}]),t}(T.Component),l.Theme=I.a,n);_.defaultProps={theme:I.a.DEFAULT,popupTheme:I.a.DEFAULT,data:[],disabled:!1,valueField:"value",displayField:"text",descriptionField:"desc",autoClose:!0,minFilterLength:1,rightIconCls:"fas fa-search",noMatchedPopupVisible:!0,filterInitValue:"",useDynamicRenderList:!1};var R=_;a.d(t,"a",function(){return R})},733:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},triggerClassName:{type:"PropTypes.string",desc:"The CSS class name of the trigger element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},popupTheme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},name:{type:"PropTypes.string",desc:"The name of the auto complete."},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field."},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"true"},minFilterLength:{type:"PropTypes.number",default:"1"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon."},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value."},popupChildren:{type:"PropTypes.any"},filterInitValue:{type:"PropTypes.string",default:""},useDynamicRenderList:{type:"PropTypes.bool",default:"false"},listHeight:{type:"PropTypes.number"},itemHeight:{type:"PropTypes.number"},scrollBuffer:{type:"PropTypes.number"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterKeyDown:{type:"PropTypes.func",desc:"The function that trigger when filter key down."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemClick:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"},onPopupClosed:{type:"PropTypes.func"}}},895:function(e,t,a){"use strict";a.r(t);var l=a(44),n=a.n(l),r=a(109),o=a.n(r),s=a(10),i=a.n(s),p=a(108),c=a.n(p),d=a(7),u=a.n(d),m=a(9),h=a.n(m),f=a(1),y=a.n(f),g=a(462),v=a(410),C=a(409),E=a(407),T=a(733),P=function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||o()(t)).call(this,e));return a.onChange=function(e){console.log("changed value: ",e)},a.filterPressEnterHandler=function(e){console.log("filter value: ",e)},a.filterClearHandler=function(){console.log("filter cleared")},a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a}return h()(t,e),c()(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"example"},y.a.createElement("h2",{className:"example-title"},"LocalAutoComplete"),y.a.createElement("p",null,"A ",y.a.createElement("span",null,"LocalAutoComplete")," is an interface to help users to complete their input."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"Basic"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"LocalAutoComplete")," simple example."),y.a.createElement(g.a,{data:this.data,placeholder:"Please select ...",filterInitValue:"test",onChange:this.onChange,onFilterPressEnter:this.filterPressEnterHandler,onFilterClear:this.filterClearHandler}))))),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"With mode"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"LocalAutoComplete")," with default select mode, ",y.a.createElement("code",null," normal"),", ",y.a.createElement("code",null,"checkbox"),", ",y.a.createElement("code",null,"radio")," applied."),y.a.createElement(g.a,{popupStyle:{maxHeight:300},data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"With mode"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the ",y.a.createElement("code",null,"disabled")," property to true,the ",y.a.createElement("code",null,"LocalAutoComplete"),"will disabled."),y.a.createElement(g.a,{popupStyle:{maxHeight:300},disabled:!0,data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),y.a.createElement(v.a,null,y.a.createElement(C.a,{className:"example-header",title:"With mode"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the ",y.a.createElement("code",null,"noMatchedMsg")," property for no matched message."),y.a.createElement(g.a,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:this.data,renderer:function(e){return e&&"object"===(void 0===e?"undefined":n()(e))?e.text+" ("+e.value+")":e+" ("+e+")"},placeholder:"Please select ...",onChange:this.onChange}))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(E.a,{data:T}))}}]),t}(f.Component);t.default=P}}]);