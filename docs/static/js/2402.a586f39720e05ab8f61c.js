(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[2402],{29250:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(23645),n=a.n(l)()((function(e){return e[1]}));n.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const c=n},31236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(23645),n=a.n(l)()((function(e){return e[1]}));n.push([e.id,"/**\n * @file List examples style\n * @author liangxiaojun(liangxiaojun@derbysoft.com)\n */\n.list-examples .paper {\n  border: 1px solid #e4eaf2;\n  overflow: hidden; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n  .popover-dialog-content-scroller .paper {\n    width: 300px; }\n\n.facebook-tip .tip-content {\n  color: #38b1eb; }\n",""]);const c=n},22356:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var l=a(6610),n=a(5991),c=a(63349),r=a(10379),s=a(46070),i=a(77608),o=a(96156),d=a(37699),p=a(45697),m=a.n(p),u=a(82996),f=a(93379),h=a.n(f),y=a(29250);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}h()(y.Z,{insert:"head",singleton:!1}),y.Z.locals;var E=function(e){(0,r.Z)(m,e);var t,a,p=(t=m,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,i.Z)(t);if(a){var n=(0,i.Z)(this).constructor;e=Reflect.construct(l,arguments,n)}else e=l.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;return(0,l.Z)(this,m),t=p.call(this,e),(0,o.Z)((0,c.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(g({name:a},t.props.data[a]));return e})),t}return(0,n.Z)(m,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(u.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),m}(d.Component);E.propTypes={data:m().object};const v=E},27491:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var l=a(6610),n=a(5991),c=a(63349),r=a(10379),s=a(46070),i=a(77608),o=a(96156),d=a(37699),p=a(35720),m=a(24471),u=a(50704),f=a(11253),h=a(22944),y=a(65460),b=a(22356);const g=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the list item.","default":"Theme.DEFAULT"},"activatedTheme":{"type":"PropTypes.oneOf","desc":"The theme of the list item activated.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the list item select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.array","desc":"Children passed into the ListItem."},"value":{"type":"PropTypes.any"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the list will be disabled.","default":"false"},"itemDisabled":{"type":"PropTypes.bool","desc":"List item disabled callback.","default":"false"},"disableTouchRipple":{"type":"PropTypes.bool","desc":"If true,the element\'s ripple effect will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the list will be at loading status."},"autoSelect":{"type":"PropTypes.bool","desc":"Whether select when item clicked.","default":"true"},"itemHeight":{"type":"PropTypes.number"},"parentEl":{"type":"PropTypes.object"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the list-item touch tap."},"onItemSelect":{"type":"PropTypes.func","desc":"Callback function fired when the list-item select."},"onItemDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the list-item deselect."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the list changed."},"indeterminateCallback":{"type":"PropTypes.func"}}');var E=a(93379),v=a.n(E),C=a(31236);v()(C.Z,{insert:"head",singleton:!1}),C.Z.locals;const T=function(e){(0,r.Z)(v,e);var t,a,E=(t=v,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,i.Z)(t);if(a){var n=(0,i.Z)(this).constructor;e=Reflect.construct(l,arguments,n)}else e=l.apply(this,arguments);return(0,s.Z)(this,e)});function v(e){var t;return(0,l.Z)(this,v),t=E.call(this,e),(0,o.Z)((0,c.Z)(t),"show",(function(e){var a=t.state.ListVisible;a[e]=!0,t.setState({ListVisible:a})})),(0,o.Z)((0,c.Z)(t),"hide",(function(e){var a=t.state.ListVisible;a[e]=!1,t.setState({ListVisible:a})})),(0,o.Z)((0,c.Z)(t),"changeHandler",(function(e){console.log("changed::",e)})),(0,o.Z)((0,c.Z)(t),"itemClickHandler",(function(e){console.log("clicked::",e)})),(0,o.Z)((0,c.Z)(t),"itemSelectHandler",(function(e){console.log("selected::",e)})),(0,o.Z)((0,c.Z)(t),"itemDeselectHandler",(function(e){console.log("deselected::",e)})),t.listData=[{iconCls:"fab fa-facebook",value:"Facebook",text:"Facebook",tipClassName:"facebook-tip",tip:"Facebook"},{iconCls:"fab fa-twitter",value:"Twitter",text:"Twitter",tip:"Twitter"},{iconCls:"fab fa-google-plus-g",value:"Google+",text:"Google+",tip:"Google+"}],t.disabledListData=[{iconCls:"fab fa-firefox",value:"Firefox",text:"Firefox",disabled:function(e,t,a){return!0}},{iconCls:"fab fa-chrome",value:"Chrome",text:"Chrome"},{iconCls:"fab fa-safari",value:"Safari",text:"Safari",disabled:!0}],t.themeListData=[{value:"Success",text:"Success",theme:"success",rightIconCls:"fas fa-check-circle"},{value:"Error",text:"Error",theme:"error",rightIconCls:"far fa-times-circle"},{value:"Warning",text:"Warning",theme:"warning",rightIconCls:"fas fa-exclamation-triangle"},{value:"Primary",text:"Primary",theme:"primary",rightIconCls:"fab fa-gratipay"}],t.descListData=[{iconCls:"fab fa-facebook",value:"Facebook",text:"Facebook",desc:"Here is a Facebook Desc."},{iconCls:"fab fa-twitter",value:"Twitter",text:"Twitter",desc:"Here is a Twitter Desc."},{iconCls:"fab fa-google-plus-g",value:"Google+",text:"Google+",desc:"Here is a Google+ Desc."}],t.customizedListData=[{radioUncheckedIconCls:"fab fa-facebook",radioCheckedIconCls:"fab fa-facebook",value:"Facebook",text:"Facebook"},{radioUncheckedIconCls:"fab fa-twitter",radioCheckedIconCls:"fab fa-twitter",value:"Twitter",text:"Twitter"},{radioUncheckedIconCls:"fab fa-google-plus-g",radioCheckedIconCls:"fab fa-google-plus-g",value:"Google+",text:"Google+"}],t.state={ListVisible:{}},t}return(0,n.Z)(v,[{key:"render",value:function(){var e=this,t=this.state.ListVisible;return d.createElement("div",{className:"example list-examples"},d.createElement("h2",{className:"example-title"},"List"),d.createElement("p",null,d.createElement("span",null,"List"),"are used to present multiple items vertically as a single continuous element. They can be configured for many uses such as a contacts list, nested lists, etc."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(m.Z,null,d.createElement(u.Z,{className:"example-header",title:"Basic"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"A ",d.createElement("code",null,"List")," simple example with left icons."),d.createElement(f.Z,null,d.createElement(p.Z,{data:this.listData,onChange:this.changeHandler,onItemClick:this.itemClickHandler,onItemSelect:this.itemSelectHandler,onItemDeselect:this.itemDeselectHandler})))))),d.createElement(m.Z,null,d.createElement(u.Z,{className:"example-header",title:"With disabled"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Set the ",d.createElement("code",null,"disabled")," property to true for disabled items."),d.createElement(f.Z,null,d.createElement(p.Z,{data:this.disabledListData,itemDisabled:function(e,t,a){return e&&"Chrome"===e.value}})))))),d.createElement(m.Z,null,d.createElement(u.Z,{className:"example-header",title:"With theme and rightIconCls"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"Set the ",d.createElement("code",null,"theme"),' property to "success","error","warning","primary" and set the ',d.createElement("code",null,"rightIconCls")," property to get rightIcons."),d.createElement(f.Z,null,d.createElement(p.Z,{data:this.themeListData})))))),d.createElement(m.Z,null,d.createElement(u.Z,{className:"example-header",title:"With desc"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"A ",d.createElement("code",null,"List")," with desc."),d.createElement(f.Z,{style:{width:240}},d.createElement(p.Z,{style:{width:240},data:this.descListData,onChange:this.changeHandler,onItemClick:this.itemClickHandler})))))),d.createElement(m.Z,null,d.createElement(u.Z,{className:"example-header",title:"Select Mode"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"A ",d.createElement("code",null,"List")," with select mode.Can be ",d.createElement("code",null,"SINGLE_SELECT"),", ",d.createElement("code",null,"MULTI_SELECT"),"."),d.createElement(f.Z,{style:{width:240,marginTop:20}},d.createElement(p.Z,{style:{width:240},selectMode:p.Z.SelectMode.MULTI_SELECT,data:this.descListData,onChange:this.changeHandler,onItemClick:this.itemClickHandler,onItemSelect:this.itemSelectHandler,onItemDeselect:this.itemDeselectHandler})),d.createElement(f.Z,{style:{width:240,marginTop:20}},d.createElement(p.Z,{style:{width:240},selectTheme:p.Z.Theme.HIGHLIGHT,data:this.customizedListData,onChange:this.changeHandler,onItemClick:this.itemClickHandler,onItemSelect:this.itemSelectHandler,onItemDeselect:this.itemDeselectHandler})))))),d.createElement(m.Z,null,d.createElement(u.Z,{className:"example-header",title:"Select only when click checkbox"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement(f.Z,{style:{width:240,marginTop:20}},d.createElement(p.Z,{style:{width:240},selectMode:p.Z.SelectMode.MULTI_SELECT,data:this.descListData,autoSelect:!1,disableTouchRipple:!0,onChange:this.changeHandler,onItemClick:this.itemClickHandler,onItemSelect:this.itemSelectHandler,onItemDeselect:this.itemDeselectHandler})))))),d.createElement(m.Z,null,d.createElement(u.Z,{className:"example-header",title:"In Dialog"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"A ",d.createElement("code",null,"List")," simple example with left icons."),d.createElement(h.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),d.createElement(y.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(t){return d.createElement("div",{className:"popover-dialog-content-scroller"},d.createElement(f.Z,null,d.createElement(p.Z,{data:e.listData,parentEl:t,onChange:e.changeHandler,onItemClick:e.itemClickHandler,onItemSelect:e.itemSelectHandler,onItemDeselect:e.itemDeselectHandler})))})))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(b.Z,{data:g}))}}]),v}(d.Component)}}]);