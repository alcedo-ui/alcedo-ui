(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[9246],{59141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}\n",""]);const r=a},44479:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(23645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".example-content .dialog-button{width:120px}.popover-dialog-content-scroller{width:1000px;height:1000px}\n",""]);const r=a},1116:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var l=n(6610),a=n(5991),r=n(63349),o=n(10379),s=n(46070),c=n(77608),p=n(96156),i=n(37699),u=n(45697),d=n.n(u),m=n(82996),h=n(93379),f=n.n(h),y=n(59141);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}f()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var E=function(e){(0,o.Z)(d,e);var t,n,u=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,c.Z)(t);if(n){var a=(0,c.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,s.Z)(this,e)});function d(e){var t;return(0,l.Z)(this,d),t=u.call(this,e),(0,p.Z)((0,r.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(v({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(d,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(i.Component);E.propTypes={data:d().object};const P=E},47070:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var l=n(90484),a=n(6610),r=n(5991),o=n(63349),s=n(10379),c=n(46070),p=n(77608),i=n(96156),u=n(37699),d=n(39080),m=n(24471),h=n(50704),f=n(22944),y=n(65460),g=n(1116);const v=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"popupClassName":{"type":"PropTypes.string","desc":"The CSS class name of the popup element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"popupStyle":{"type":"PropTypes.object","desc":"Override the styles of the popup element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"popupTheme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"position":{"type":"PropTypes.oneOf"},"name":{"type":"PropTypes.string","desc":"The name of the auto complete."},"placeholder":{"type":"PropTypes.string","desc":"The placeholder of the field."},"data":{"type":"PropTypes.oneOf","desc":"Children passed into the List.","default":"[]"},"value":{"type":"PropTypes.any"},"disabled":{"type":"PropTypes.bool","desc":"If true, the auto complete will be disabled.","default":"false"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"autoClose":{"type":"PropTypes.bool","desc":"If true, the popup list automatically closed after selection.","default":"false"},"minFilterLength":{"type":"PropTypes.number","default":"1"},"filterCallback":{"type":"PropTypes.func","desc":"Callback function fired when filter changed."},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.","default":"null"},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.","default":"fas fa-search"},"noMatchedPopupVisible":{"type":"PropTypes.bool","desc":"The visiblity of no matched popup.","default":"true"},"noMatchedMsg":{"type":"PropTypes.string","desc":"The message of no matched value."},"parentEl":{"type":"PropTypes.object"},"popupChildren":{"type":"PropTypes.any"},"filterInitValue":{"type":"PropTypes.string","default":""},"useDynamicRenderList":{"type":"PropTypes.bool","default":"false"},"resetPopPositionWait":{"type":"PropTypes.number","default":"250"},"listHeight":{"type":"PropTypes.number"},"itemHeight":{"type":"PropTypes.number"},"scrollBuffer":{"type":"PropTypes.number"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onFilterChange":{"type":"PropTypes.func","desc":"The function that trigger when filter changes."},"onFilterPressEnter":{"type":"PropTypes.func","desc":"The function that trigger when press enter."},"onFilterClear":{"type":"PropTypes.func","desc":"The function that trigger when filter cleared."},"onChange":{"type":"PropTypes.func","desc":"The function that trigger when value changed."},"onItemClick":{"type":"PropTypes.func","desc":"The function that trigger when touch-tap the list items."},"onFocus":{"type":"PropTypes.func","desc":"Callback function fired when AutoCompleteFilter get focus."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when AutoCompleteFilter lose focus."},"onMouseOver":{"type":"PropTypes.func"},"onMouseOut":{"type":"PropTypes.func"},"onPopupClosed":{"type":"PropTypes.func"},"onFilterKeyDown":{"type":"PropTypes.func"}}');var E=n(93379),P=n.n(E),T=n(44479);P()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;const b=function(e){(0,s.Z)(P,e);var t,n,E=(t=P,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,p.Z)(t);if(n){var a=(0,p.Z)(this).constructor;e=Reflect.construct(l,arguments,a)}else e=l.apply(this,arguments);return(0,c.Z)(this,e)});function P(e){var t;return(0,a.Z)(this,P),t=E.call(this,e),(0,i.Z)((0,o.Z)(t),"show",(function(e){var n=t.state.AutoCompleteFilterVisible;n[e]=!0,t.setState({AutoCompleteFilterVisible:n})})),(0,i.Z)((0,o.Z)(t),"hide",(function(e){var n=t.state.AutoCompleteFilterVisible;n[e]=!1,t.setState({AutoCompleteFilterVisible:n})})),(0,i.Z)((0,o.Z)(t),"handleChange",(function(e){console.log("select item: ",e)})),(0,i.Z)((0,o.Z)(t),"handleFilterPressEnter",(function(e){console.log("filter value: ",e)})),(0,i.Z)((0,o.Z)(t),"handleFilterClear",(function(){console.log("filter cleared")})),t.data=["test0","test1",{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],t.state={AutoCompleteFilterVisible:{}},t}return(0,r.Z)(P,[{key:"render",value:function(){var e=this,t=this.state.AutoCompleteFilterVisible;return u.createElement("div",{className:"example"},u.createElement("h2",{className:"example-title"},"AutoCompleteFilter"),u.createElement("p",null,"A ",u.createElement("span",null,"AutoCompleteFilter")," is an interface to help users to complete their input."),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(m.Z,null,u.createElement(h.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"AutoCompleteFilter")," simple example."),u.createElement(d.Z,{data:this.data,placeholder:"Please select ...",filterInitValue:"test",onChange:this.handleChange,onFilterPressEnter:this.handleFilterPressEnter,onFilterClear:this.handleFilterClear}))))),u.createElement(m.Z,null,u.createElement(h.Z,{className:"example-header",title:"With mode"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"AutoCompleteFilter")," with default select mode, ",u.createElement("code",null," normal"),", ",u.createElement("code",null,"checkbox"),", ",u.createElement("code",null,"radio")," applied."),u.createElement(d.Z,{popupStyle:{maxHeight:300},data:this.data,placeholder:"Please select ...",minFilterLength:2,onFilterPressEnter:this.handleFilterPressEnter,onChange:this.handleChange}))))),u.createElement(m.Z,null,u.createElement(h.Z,{className:"example-header",title:"With mode"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,"Set the ",u.createElement("code",null,"disabled")," property to true,the ",u.createElement("code",null,"AutoCompleteFilter"),"will disabled."),u.createElement(d.Z,{popupStyle:{maxHeight:300},disabled:!0,data:this.data,placeholder:"Please select ...",handleChange:this.handleChange}))))),u.createElement(m.Z,null,u.createElement(h.Z,{className:"example-header",title:"With mode"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,"Set the ",u.createElement("code",null,"noMatchedMsg")," property for no matched message."),u.createElement(d.Z,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:this.data,renderer:function(e){return e&&"object"===(0,l.Z)(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},placeholder:"Please select ...",handleChange:this.handleChange}))))),u.createElement(m.Z,null,u.createElement(h.Z,{className:"example-header",title:"In Dialog"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"AutoCompleteFilter")," simple example."),u.createElement(f.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),u.createElement(y.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return u.createElement("div",{className:"popover-dialog-content-scroller"},u.createElement(d.Z,{popupStyle:{maxHeight:300},noMatchedMsg:"There have no matched value.",data:e.data,renderer:function(e){return e&&"object"===(0,l.Z)(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},placeholder:"Please select ...",parentEl:t,handleChange:e.handleChange}))})))))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(g.Z,{data:v}))}}]),P}(u.Component)}}]);