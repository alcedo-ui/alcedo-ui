(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5146],{59141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const s=a},82331:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".dynamic-render-list-examples .paper{border:1px solid #e4eaf2;overflow:hidden}",""]);const s=a},1116:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(6610),a=n(5991),s=n(63349),l=n(10379),c=n(46070),o=n(77608),i=n(96156),d=n(37699),p=n(45697),u=n.n(p),f=n(82996),h=n(93379),y=n.n(h),m=n(7795),b=n.n(m),T=n(20695),v=n.n(T),g=n(19216),P=n.n(g),C=n(59141),Z={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=v()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Z.domAPI=b(),Z.insertStyleElement=P(),y()(C.Z,Z),C.Z&&C.Z.locals&&C.Z.locals;var x=function(e){(0,l.Z)(u,e);var t,n,p=(t=u,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function u(e){var t;return(0,r.Z)(this,u),t=p.call(this,e),(0,i.Z)((0,s.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(w({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(u,[{key:"render",value:function(){return d.createElement("div",{className:"prop-type-desc-table-wrapper"},d.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(d.Component);x.propTypes={data:u().object};const k=x},43234:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>k});var r=n(6610),a=n(5991),s=n(63349),l=n(10379),c=n(46070),o=n(77608),i=n(96156),d=n(37699),p=n(62457),u=n(24471),f=n(50704),h=n(11253),y=n(1116);const m=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the list item.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the list item select radio or checkbox.","default":"Theme.DEFAULT"},"data":{"type":"PropTypes.array","desc":"Children passed into the ListItem.","default":"[]"},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the list will be disabled.","default":"false"},"itemDisabled":{"type":"PropTypes.bool","desc":"List item disabled callback.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the list will be at loading status."},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of listItem.Can be normal,checkbox.","default":"SelectMode.SINGLE_SELECT"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string","default":"far fa-square"},"checkboxCheckedIconCls":{"type":"PropTypes.string","default":"fas fa-check-square"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string","default":"fas fa-minus-square"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onItemClick":{"type":"PropTypes.func","desc":"Callback function fired when the list-item touch tap."},"onItemSelect":{"type":"PropTypes.func","desc":"Callback function fired when the list-item select."},"onItemDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the list-item deselect."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the list changed."},"onRenderItemChange":{"type":"PropTypes.func"},"onScroll":{"type":"PropTypes.func"},"listHeight":{"type":"PropTypes.number","default":"200"},"itemHeight":{"type":"PropTypes.number","default":"40"},"scrollBuffer":{"type":"PropTypes.number","default":"8"}}');var b=n(93379),T=n.n(b),v=n(7795),g=n.n(v),P=n(20695),C=n.n(P),Z=n(19216),E=n.n(Z),w=n(82331),x={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=n.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=C()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};x.domAPI=g(),x.insertStyleElement=E(),T()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;const k=function(e){(0,l.Z)(T,e);var t,n,b=(t=T,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,o.Z)(t);if(n){var a=(0,o.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function T(e){var t;(0,r.Z)(this,T),t=b.call(this,e),(0,i.Z)((0,s.Z)(t),"changeHandler",(function(e){console.log("onChange: ",e)})),(0,i.Z)((0,s.Z)(t),"renderItemChangeHandler",(function(e){console.log("onRenderItemChange: ",e)})),t.listData=[];for(var n=0;n<1e4;n++)t.listData.push({id:n,value:n});return t}return(0,a.Z)(T,[{key:"render",value:function(){return d.createElement("div",{className:"example dynamic-render-list-examples"},d.createElement("h2",{className:"example-title"},"DynamicRenderList"),d.createElement("p",null,d.createElement("span",null,"DynamicRenderList"),"are used to present multiple items vertically as a single continuous element. They can be configured for many uses such as a contacts list, nested lists, etc."),d.createElement("h2",{className:"example-title"},"Examples"),d.createElement(u.Z,null,d.createElement(f.Z,{className:"example-header",title:"Basic"}),d.createElement("div",{className:"widget-content"},d.createElement("div",{className:"example-content"},d.createElement("div",{className:"examples-wrapper"},d.createElement("p",null,"A ",d.createElement("code",null,"DynamicRenderList")," simple example with checkbox."),d.createElement(h.Z,null,d.createElement(p.Z,{data:this.listData,selectMode:p.Z.SelectMode.MULTI_SELECT,onChange:this.changeHandler,onRenderItemChange:this.renderItemChangeHandler})))))),d.createElement("h2",{className:"example-title"},"Properties"),d.createElement(y.Z,{data:m}))}}]),T}(d.Component)}}]);