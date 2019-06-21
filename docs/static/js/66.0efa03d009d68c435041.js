(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{282:function(e,t,a){"use strict";var n=a(4),l=a.n(n),o=a(51),r=a.n(o),s=a(52),c=a.n(s),p=a(53),i=a.n(p),d=a(54),u=a.n(d),m=a(19),h=a.n(m),f=a(55),y=a.n(f),g=a(18),v=a.n(g),T=a(0),E=a.n(T),C=a(276),P=a.n(C),b=a(288),x=(a(283),function(e){function t(e){var a;return r()(this,t),a=i()(this,u()(t).call(this,e)),v()(h()(a),"generateData",function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(l()({name:t},a.props.data[t]));return e}),a}return y()(t,e),c()(t,[{key:"render",value:function(){return E.a.createElement("div",{className:"prop-type-desc-table-wrapper"},E.a.createElement(b.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(T.Component));x.propTypes={data:P.a.object},t.a=x},283:function(e,t,a){var n=a(284);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(107)(n,l);n.locals&&(e.exports=n.locals)},284:function(e,t,a){(e.exports=a(106)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},540:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},triggerClassName:{type:"PropTypes.string",desc:"The CSS class name of the trigger element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},popupTheme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},position:{type:"PropTypes.oneOf"},name:{type:"PropTypes.string",desc:"The name of the auto complete."},title:{type:"PropTypes.string",desc:"The title of the auto complete."},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field."},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},value:{type:"PropTypes.any",desc:"The value of LocalAutoComplete."},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"true"},minFilterLength:{type:"PropTypes.number",default:"1"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon."},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value."},popupChildren:{type:"PropTypes.any"},filter:{type:"PropTypes.string",default:""},useDynamicRenderList:{type:"PropTypes.bool",default:"false"},resetPopPositionWait:{type:"PropTypes.number",default:"250"},listHeight:{type:"PropTypes.number"},itemHeight:{type:"PropTypes.number"},scrollBuffer:{type:"PropTypes.number"},parentEl:{type:"PropTypes.object"},filterInitValue:{type:"PropTypes.string"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterKeyDown:{type:"PropTypes.func",desc:"The function that trigger when filter key down."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemClick:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when LocalAutoComplete lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"},onNoMatch:{type:"PropTypes.func"},onPopupClosed:{type:"PropTypes.func"}}},541:function(e,t,a){var n=a(542);"string"==typeof n&&(n=[[e.i,n,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a(107)(n,l);n.locals&&(e.exports=n.locals)},542:function(e,t,a){(e.exports=a(106)(!1)).push([e.i,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""])},769:function(e,t,a){"use strict";a.r(t);var n=a(108),l=a.n(n),o=a(51),r=a.n(o),s=a(52),c=a.n(s),p=a(53),i=a.n(p),d=a(54),u=a.n(d),m=a(19),h=a.n(m),f=a(55),y=a.n(f),g=a(18),v=a.n(g),T=a(0),E=a.n(T),C=a(358),P=a(287),b=a(286),x=a(285),w=a(290),N=a(282),S=a(540),L=(a(541),function(e){function t(e){var a;return r()(this,t),a=i()(this,u()(t).call(this,e)),v()(h()(a),"show",function(e){var t=a.state.LocalAutoCompleteVisible;t[e]=!0,a.setState({LocalAutoCompleteVisible:t})}),v()(h()(a),"hide",function(e){var t=a.state.LocalAutoCompleteVisible;t[e]=!1,a.setState({LocalAutoCompleteVisible:t})}),v()(h()(a),"onChange",function(e){console.log("Changed Value: ",e)}),v()(h()(a),"filterChangeHander",function(e){console.log("Filter Changed Value: ",e),a.setState({filter:e})}),v()(h()(a),"onChangeHandler",function(e){console.log("Changed Value: ",e),a.setState({value:e})}),v()(h()(a),"filterPressEnterHandler",function(e){console.log("Filter Value: ",e)}),v()(h()(a),"filterClearHandler",function(){console.log("Filter Cleared")}),v()(h()(a),"filterUniqueData",function(e,t){return a.data.filter(function(a){return-1===e.findIndex(function(e,n){return n!==t&&e==a})})}),v()(h()(a),"noMatchHandler",function(e){var t=a.state.value;a.setState({filter:t?"object"===l()(t)?t.text:t:""})}),v()(h()(a),"onUniqueChange",function(e,t){var n=a.state.uniqueData;n[e]=t,a.setState({uniqueData:n})}),a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a.state={filter:"",value:null,uniqueData:[],LocalAutoCompleteVisible:{}},a}return y()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.filter,n=t.value,o=t.uniqueData,r=t.LocalAutoCompleteVisible;return E.a.createElement("div",{className:"example"},E.a.createElement("h2",{className:"example-title"},"LocalAutoComplete"),E.a.createElement("p",null,"A ",E.a.createElement("span",null,"LocalAutoComplete")," is an interface to help users to complete their input."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(P.a,null,E.a.createElement(b.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,E.a.createElement("code",null,"LocalAutoComplete")," simple example."),E.a.createElement(C.a,{data:this.data,filter:a,value:n,placeholder:"Please select ...",minFilterLength:0,onChange:this.onChangeHandler,onFilterPressEnter:this.filterPressEnterHandler,onFilterClear:this.filterClearHandler,onFilterChange:this.filterChangeHander,onNoMatch:this.noMatchHandler}))))),E.a.createElement(P.a,null,E.a.createElement(b.a,{className:"example-header",title:"With mode"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,E.a.createElement("code",null,"LocalAutoComplete")," with default select mode, ",E.a.createElement("code",null," normal"),", ",E.a.createElement("code",null,"checkbox"),", ",E.a.createElement("code",null,"radio")," applied."),E.a.createElement(C.a,{popupStyle:{maxHeight:300},data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),E.a.createElement(P.a,null,E.a.createElement(b.a,{className:"example-header",title:"Disabled"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the ",E.a.createElement("code",null,"disabled")," property to true,the ",E.a.createElement("code",null,"LocalAutoComplete"),"will disabled."),E.a.createElement(C.a,{popupStyle:{maxHeight:300},disabled:!0,data:this.data,placeholder:"Please select ...",onChange:this.onChange}))))),E.a.createElement(P.a,null,E.a.createElement(b.a,{className:"example-header",title:"Custom No Matched Message"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the ",E.a.createElement("code",null,"noMatchedMsg")," property for no matched message."),E.a.createElement(C.a,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:this.data,renderer:function(e){return e&&"object"===l()(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},placeholder:"Please select ...",onChange:this.onChange}))))),E.a.createElement(P.a,null,E.a.createElement(b.a,{className:"example-header",title:"Unique"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement(C.a,{popupStyle:{maxHeight:300},data:this.filterUniqueData(o,0),value:o[0]||null,placeholder:"Please select ...",minFilterLength:0,onChange:function(t){return e.onUniqueChange(0,t)}}),E.a.createElement(C.a,{popupStyle:{maxHeight:300},data:this.filterUniqueData(o,1),value:o[1]||null,placeholder:"Please select ...",minFilterLength:0,onChange:function(t){return e.onUniqueChange(1,t)}}),E.a.createElement(C.a,{popupStyle:{maxHeight:300},data:this.filterUniqueData(o,2),value:o[2]||null,placeholder:"Please select ...",minFilterLength:0,onChange:function(t){return e.onUniqueChange(2,t)}}))))),E.a.createElement(P.a,null,E.a.createElement(b.a,{className:"example-header",title:"In Dialog"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the ",E.a.createElement("code",null,"noMatchedMsg")," property for no matched message."),E.a.createElement(x.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),E.a.createElement(w.a,{visible:r[1],onRequestClose:function(){return e.hide(1)}},function(t){return E.a.createElement("div",{className:"popover-dialog-content-scroller"},E.a.createElement(C.a,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:e.data,renderer:function(e){return e&&"object"===l()(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},parentEl:t,placeholder:"Please select ...",onChange:e.onChange}))}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(N.a,{data:S}))}}]),t}(T.Component));t.default=L}}]);