(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5171],{45598:e=>{"use strict";e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"data":{"type":"PropTypes.array","default":"[]"},"inputValue":{"type":"PropTypes.number","default":""},"valueField":{"type":"PropTypes.string","default":"value"},"displayField":{"type":"PropTypes.string","default":"text"},"separators":{"type":"PropTypes.array","default":"TagField.DEFAULT_SEPARATORS"},"disabled":{"type":"PropTypes.bool","default":"false"},"placeholder":{"type":"PropTypes.string","default":""},"isTagAutoWidth":{"type":"PropTypes.bool","default":"true"},"tagRemoveIconCls":{"type":"PropTypes.string","default":"fas fa-times"},"onChange":{"type":"PropTypes.func"},"onInputChange":{"type":"PropTypes.func"}}')},29250:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]);const l=a},1086:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".dynamic-render-tag-field-examples .tag-field-item-wrapper.duplicate .editable-field-text {\n  color: #2196f3; }\n\n.dynamic-render-tag-field-examples .tag-field-item-wrapper.unfound .editable-field-text {\n  color: #d8534e; }\n",""]);const l=a},22356:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(6610),a=r(5991),l=r(63349),o=r(10379),c=r(46070),s=r(77608),p=r(96156),i=r(37699),u=r(45697),d=r.n(u),f=r(82996),y=r(93379),m=r.n(y),h=r(29250);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,p.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}m()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var g=function(e){(0,o.Z)(d,e);var t,r,u=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function d(e){var t;return(0,n.Z)(this,d),t=u.call(this,e),(0,p.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(b({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(d,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(i.Component);g.propTypes={data:d().object};const P=g},39148:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(6610),a=r(5991),l=r(10379),o=r(46070),c=r(77608),s=r(37699),p=r(62103),i=r(24471),u=r(50704),d=r(22356),f=r(45598),y=r(93379),m=r.n(y),h=r(1086);m()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;const v=function(e){(0,l.Z)(m,e);var t,r,y=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function m(e){var t;return(0,n.Z)(this,m),(t=y.call(this,e)).data=[{text:"Hotelcode1"},{text:"Hotelcode2"},{className:"duplicate",text:"Hotelcode3"},{className:"duplicate",text:"Hotelcode4"},{text:"Hotelcode5"},{className:"unfound",text:"Hotelcode6"},{className:"unfound",value:"Hotelcode7"}],t}return(0,a.Z)(m,[{key:"render",value:function(){return s.createElement("div",{className:"example dynamic-render-tag-field-examples"},s.createElement("h2",{className:"example-title"},"DynamicRenderTagField"),s.createElement("p",null,s.createElement("span",null,"DynamicRenderTagField")," allow users to input text."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(i.Z,null,s.createElement(u.Z,{className:"example-header",title:"With type"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,s.createElement("code",null,"DynamicRenderTagField")),s.createElement(p.Z,{style:{height:100},data:[],placeholder:"Please input ...",separators:[",",";","|"],onChange:function(e){return console.log(e)}}))))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(d.Z,{data:f}))}}]),m}(s.Component)}}]);