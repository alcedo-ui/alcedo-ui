(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5336],{59141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const s=a},58711:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".group-grid-examples .paper{border:1px solid #e4eaf2;overflow:hidden}",""]);const s=a},1116:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(6610),a=r(5991),s=r(63349),c=r(10379),o=r(46070),l=r(77608),i=r(96156),d=r(37699),u=r(45697),p=r.n(u),f=r(82996),h=r(93379),m=r.n(h),y=r(7795),b=r.n(y),v=r(20695),g=r.n(v),T=r(19216),Z=r.n(T),C=r(59141),k={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=g()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}k.domAPI=b(),k.insertStyleElement=Z(),m()(C.Z,k),C.Z&&C.Z.locals&&C.Z.locals;var x=function(e){(0,c.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;return(0,n.Z)(this,p),t=u.call(this,e),(0,i.Z)((0,s.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(P({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(p,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),p}(d.Component);x.propTypes={data:p().object};const O=x},20270:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>O});var n=r(6610),a=r(5991),s=r(63349),c=r(10379),o=r(46070),l=r(77608),i=r(96156),d=r(37699),u=r(23350),p=r(24471),f=r(50704),h=r(11253),m=r(1116);const y=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the list item select radio or checkbox.","default":"Theme.DEFAULT"},"data":{"type":"PropTypes.array","desc":"Children passed into the ListItem.","default":"[]"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the list will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the list will be at loading status."},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.Can be normal,checkbox.","default":"SelectMode.SINGLE_SELECT"},"radioUncheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check"},"radioCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the list-item select."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the list changed."}}');var b=r(93379),v=r.n(b),g=r(7795),T=r.n(g),Z=r(20695),C=r.n(Z),k=r(19216),E=r.n(k),P=r(58711),x={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=C()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};x.domAPI=T(),x.insertStyleElement=E(),v()(P.Z,x),P.Z&&P.Z.locals&&P.Z.locals;const O=function(e){(0,c.Z)(v,e);var t,r,b=(t=v,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function v(e){var t;return(0,n.Z)(this,v),t=b.call(this,e),(0,i.Z)((0,s.Z)(t),"changeHandler",(function(e){console.log(e)})),t.listData=[{name:"socialNetwork",children:[{iconCls:"fab fa-facebook",value:"Facebook",text:"Facebook",desc:"Here is a Facebook Desc.",checked:"true"},{iconCls:"fab fa-twitter",value:"Twitter",text:"Twitter",desc:"Here is a Twitter Desc."},{iconCls:"fab fa-google-plus-g",value:"Google+",text:"Google+",desc:"Here is a Google+ Desc."}]},{name:"device",children:[{iconCls:"fab fa-android",value:"Android",text:"Android",desc:"Here is a Android Desc."},{iconCls:"fab fa-apple",value:"Apple",text:"Apple",desc:"Here is a Apple Desc."},{iconCls:"fab fa-windows",value:"Windows",text:"Windows",desc:"Here is a Windows Desc."}]}],t}return(0,a.Z)(v,[{key:"render",value:function(){return d.createElement("div",{className:"example group-grid-examples"},d.createElement("h2",{className:"example-title"},"GroupGrid"),d.createElement("p",null,d.createElement("span",null,"GroupGrid")," are used to present multiple items vertically as a single continuous element. They can be configured for many uses such as a contacts list, nested lists, etc."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(p.Z,null,d.createElement(f.Z,{className:"example-header",title:"Basic"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"A ",d.createElement("code",null,"GroupGrid")," with isGrouped."),d.createElement(h.Z,null,d.createElement(u.Z,{selectMode:u.Z.SelectMode.MULTI_SELECT,data:this.listData,onChange:this.changeHandler})))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(m.Z,{data:y}))}}]),v}(d.Component)},23350:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(22122),a=r(81253),s=r(6610),c=r(5991),o=r(10379),l=r(46070),i=r(77608),d=r(96156),u=r(37699),p=r(45697),f=r.n(p),h=r(74259),m=r(96509),y=r(87712),b=r(59448),v=r(41844),g=r.n(v),T=r(81540),Z=r(57949),C=r(19605),k=["children","className","style","data","disabled"];var E=function(e){(0,o.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,i.Z)(t);if(r){var a=(0,i.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,l.Z)(this,e)});function f(e){var t;(0,s.Z)(this,f);for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return(t=p.call.apply(p,[this,e].concat(n))).state={value:Z.Z.getInitValue(e)},t}return(0,c.Z)(f,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,s=e.style,c=e.data,o=e.disabled,l=(0,a.Z)(e,k),i=this.state.value;return u.createElement("div",{className:g()("group-grid",(0,d.Z)({},r,r)),style:s,disabled:o},c&&c.map((function(e,t){return u.createElement("div",{key:t},u.createElement("div",{className:"group-grid-group-title"},e.name),u.createElement(h.Z,(0,n.Z)({},l,{data:e.children,value:i})))})),t)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:Z.Z.getInitValue({value:C.Z.getDerivedState(e,t,"value"),selectMode:e.selectMode})}}}]),f}(u.Component);(0,d.Z)(E,"SelectMode",b.Z),(0,d.Z)(E,"Theme",y.Z),E.propTypes={children:f().any,className:f().string,style:f().object,theme:f().oneOf(T.Z.enumerateValue(y.Z)),selectTheme:f().oneOf(T.Z.enumerateValue(y.Z)),data:f().arrayOf(f().oneOfType([f().shape({name:f().oneOfType([f().string,f().number]),children:f().arrayOf(f().oneOfType([f().shape({className:f().string,style:f().object,theme:f().oneOf(T.Z.enumerateValue(y.Z)),value:f().oneOfType([f().string,f().number]),text:f().oneOfType([f().string,f().number]),desc:f().oneOfType([f().string,f().number]),disabled:f().bool,isLoading:f().bool,disableTouchRipple:f().bool,iconCls:f().string,rightIconCls:f().string,tip:f().string,tipPosition:f().oneOf(T.Z.enumerateValue(m.Z.Position)),rippleDisplayCenter:f().bool,itemRenderer:f().func,onClick:f().func}),f().string,f().number]))}),f().symbol])).isRequired,idField:f().string,valueField:f().string,displayField:f().string,descriptionField:f().string,disabled:f().bool,isLoading:f().bool,selectMode:f().oneOf(T.Z.enumerateValue(b.Z)),radioUncheckedIconCls:f().string,radioCheckedIconCls:f().string,checkboxUncheckedIconCls:f().string,checkboxCheckedIconCls:f().string,checkboxIndeterminateIconCls:f().string,renderer:f().func,onItemClick:f().func,onChange:f().func},E.defaultProps={theme:y.Z.DEFAULT,selectTheme:y.Z.DEFAULT,data:[],idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,selectMode:b.Z.SINGLE_SELECT,radioUncheckedIconCls:"fas fa-check",radioCheckedIconCls:"fas fa-check",checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square"};const P=E}}]);