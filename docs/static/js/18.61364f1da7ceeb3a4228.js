(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{366:function(e,t,a){"use strict";var l=a(7),n=a.n(l),r=a(81),s=a.n(r),o=a(82),c=a.n(o),p=a(83),i=a.n(p),d=a(84),u=a.n(d),m=a(21),h=a.n(m),f=a(85),y=a.n(f),g=a(1),E=a.n(g),v=a(2),T=a.n(v),P=a(373),b=(a(367),function(e){function t(e){var a,l;return s()(this,t),(l=i()(this,u()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],l.generateData=(a=h()(l),l.generateData).bind(a),l}return y()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return E.a.createElement("div",{className:"prop-type-desc-table-wrapper"},E.a.createElement(P.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(g.Component));b.propTypes={data:T.a.object},b.defaultProps={data:null},t.a=b},367:function(e,t,a){var l=a(368);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(147)(l,n);l.locals&&(e.exports=l.locals)},368:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},690:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},popupClassName:{type:"PropTypes.string",desc:"The CSS class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},popupTheme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},position:{type:"PropTypes.oneOf"},name:{type:"PropTypes.string",desc:"The name of the auto complete."},placeholder:{type:"PropTypes.string",desc:"The placeholder of the field."},data:{type:"PropTypes.oneOf",desc:"Children passed into the List.",default:"[]"},disabled:{type:"PropTypes.bool",desc:"If true, the auto complete will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},autoClose:{type:"PropTypes.bool",desc:"If true, the popup list automatically closed after selection.",default:"false"},minFilterLength:{type:"PropTypes.number",default:"1"},filterCallback:{type:"PropTypes.func",desc:"Callback function fired when filter changed."},iconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"null"},rightIconCls:{type:"PropTypes.string",desc:"Use this property to display an icon.",default:"fas fa-search"},noMatchedPopupVisible:{type:"PropTypes.bool",desc:"The visiblity of no matched popup.",default:"true"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matched value."},popupChildren:{type:"PropTypes.any"},filterInitValue:{type:"PropTypes.string",default:""},useDynamicRenderList:{type:"PropTypes.bool",default:"false"},resetPopPositionWait:{type:"PropTypes.number",default:"250"},listHeight:{type:"PropTypes.number"},itemHeight:{type:"PropTypes.number"},scrollBuffer:{type:"PropTypes.number"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onFilterChange:{type:"PropTypes.func",desc:"The function that trigger when filter changes."},onFilterPressEnter:{type:"PropTypes.func",desc:"The function that trigger when press enter."},onFilterClear:{type:"PropTypes.func",desc:"The function that trigger when filter cleared."},onChange:{type:"PropTypes.func",desc:"The function that trigger when value changed."},onItemClick:{type:"PropTypes.func",desc:"The function that trigger when touch-tap the list items."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when AutoCompleteFilter get focus."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when AutoCompleteFilter lose focus."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"},onPopupClosed:{type:"PropTypes.func"}}},691:function(e,t,a){var l=a(692);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(147)(l,n);l.locals&&(e.exports=l.locals)},692:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n",""])},872:function(e,t,a){"use strict";a.r(t);var l=a(148),n=a.n(l),r=a(81),s=a.n(r),o=a(82),c=a.n(o),p=a(83),i=a.n(p),d=a(84),u=a.n(d),m=a(21),h=a.n(m),f=a(85),y=a.n(f),g=a(22),E=a.n(g),v=a(1),T=a.n(v),P=a(443),b=a(371),x=a(370),C=a(369),w=a(374),N=a(366),F=a(690),H=(a(691),function(e){function t(e){var a;return s()(this,t),a=i()(this,u()(t).call(this,e)),E()(h()(a),"show",function(e){var t=a.state.AutoCompleteFilterVisible;t[e]=!0,a.setState({AutoCompleteFilterVisible:t})}),E()(h()(a),"hide",function(e){var t=a.state.AutoCompleteFilterVisible;t[e]=!1,a.setState({AutoCompleteFilterVisible:t})}),E()(h()(a),"changeHandler",function(e){console.log("select item: ",e)}),E()(h()(a),"filterPressEnterHandler",function(e){console.log("filter value: ",e)}),E()(h()(a),"filterClearHandler",function(){console.log("filter cleared")}),a.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a.state={AutoCompleteFilterVisible:{}},a}return y()(t,e),c()(t,[{key:"render",value:function(){var e=this,t=this.state.AutoCompleteFilterVisible;return T.a.createElement("div",{className:"example"},T.a.createElement("h2",{className:"example-title"},"AutoCompleteFilter"),T.a.createElement("p",null,"A ",T.a.createElement("span",null,"AutoCompleteFilter")," is an interface to help users to complete their input."),T.a.createElement("h2",{className:"example-title"},"Examples"),T.a.createElement(b.a,null,T.a.createElement(x.a,{className:"example-header",title:"Basic"}),T.a.createElement("div",{className:"widget-content"},T.a.createElement("div",{className:"example-content"},T.a.createElement("div",{className:"examples-wrapper"},T.a.createElement("p",null,T.a.createElement("code",null,"AutoCompleteFilter")," simple example."),T.a.createElement(P.a,{data:this.data,placeholder:"Please select ...",filterInitValue:"test",changeHandler:this.changeHandler,onFilterPressEnter:this.filterPressEnterHandler,onFilterClear:this.filterClearHandler}))))),T.a.createElement(b.a,null,T.a.createElement(x.a,{className:"example-header",title:"With mode"}),T.a.createElement("div",{className:"widget-content"},T.a.createElement("div",{className:"example-content"},T.a.createElement("div",{className:"examples-wrapper"},T.a.createElement("p",null,T.a.createElement("code",null,"AutoCompleteFilter")," with default select mode, ",T.a.createElement("code",null," normal"),", ",T.a.createElement("code",null,"checkbox"),", ",T.a.createElement("code",null,"radio")," applied."),T.a.createElement(P.a,{popupStyle:{maxHeight:300},data:this.data,placeholder:"Please select ...",minFilterLength:2,onFilterPressEnter:this.filterPressEnterHandler,changeHandler:this.changeHandler}))))),T.a.createElement(b.a,null,T.a.createElement(x.a,{className:"example-header",title:"With mode"}),T.a.createElement("div",{className:"widget-content"},T.a.createElement("div",{className:"example-content"},T.a.createElement("div",{className:"examples-wrapper"},T.a.createElement("p",null,"Set the ",T.a.createElement("code",null,"disabled")," property to true,the ",T.a.createElement("code",null,"AutoCompleteFilter"),"will disabled."),T.a.createElement(P.a,{popupStyle:{maxHeight:300},disabled:!0,data:this.data,placeholder:"Please select ...",changeHandler:this.changeHandler}))))),T.a.createElement(b.a,null,T.a.createElement(x.a,{className:"example-header",title:"With mode"}),T.a.createElement("div",{className:"widget-content"},T.a.createElement("div",{className:"example-content"},T.a.createElement("div",{className:"examples-wrapper"},T.a.createElement("p",null,"Set the ",T.a.createElement("code",null,"noMatchedMsg")," property for no matched message."),T.a.createElement(P.a,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:this.data,renderer:function(e){return e&&"object"===n()(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},placeholder:"Please select ...",changeHandler:this.changeHandler}))))),T.a.createElement(b.a,null,T.a.createElement(x.a,{className:"example-header",title:"In Dialog"}),T.a.createElement("div",{className:"widget-content"},T.a.createElement("div",{className:"example-content"},T.a.createElement("div",{className:"examples-wrapper"},T.a.createElement("p",null,T.a.createElement("code",null,"AutoCompleteFilter")," simple example."),T.a.createElement(C.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),T.a.createElement(w.a,{visible:t[1],onRequestClose:function(){return e.hide(1)}},function(t){return T.a.createElement("div",{className:"popover-dialog-content-scroller"},T.a.createElement(P.a,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:e.data,renderer:function(e){return e&&"object"===n()(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},placeholder:"Please select ...",parentEl:t,changeHandler:e.changeHandler}))}))))),T.a.createElement("h2",{className:"example-title"},"Properties"),T.a.createElement(N.a,{data:F}))}}]),t}(v.Component));t.default=H}}]);