(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6849],{59141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(23645),l=r.n(n)()((function(e){return e[1]}));l.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const i=l},89602:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(23645),l=r.n(n)()((function(e){return e[1]}));l.push([e.id,".draggable-tree-examples .tree-wrapper{border:1px solid #e4eaf2;overflow:hidden}",""]);const i=l},1116:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(6610),l=r(5991),i=r(63349),a=r(10379),o=r(46070),c=r(77608),d=r(96156),s=r(37699),u=r(45697),p=r.n(u),f=r(82996),h=r(93379),y=r.n(h),v=r(7795),m=r.n(v),g=r(20695),b=r.n(g),C=r(19216),T=r.n(C),Z=r(59141),P={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=b()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}P.domAPI=m(),P.insertStyleElement=T(),y()(Z.Z,P),Z.Z&&Z.Z.locals&&Z.Z.locals;var x=function(e){(0,a.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(r){var l=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;return(0,n.Z)(this,p),t=u.call(this,e),(0,d.Z)((0,i.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(w({name:r},t.props.data[r]));return e})),t}return(0,l.Z)(p,[{key:"render",value:function(){return s.createElement("div",{className:"prop-type-desc-table-wrapper"},s.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),p}(s.Component);x.propTypes={data:p().object};const E=x},74948:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var n=r(6610),l=r(5991),i=r(63349),a=r(10379),o=r(46070),c=r(77608),d=r(96156),s=r(37699),u=r(36790),p=r(11253),f=r(24471),h=r(50704),y=r(1116);const v=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of tree node.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.oneOf","desc":"Children passed into the tree node."},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the tree will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the tree will be at loading status.","default":"false"},"readOnly":{"type":"PropTypes.bool","default":"false"},"isSelectRecursive":{"type":"PropTypes.bool","default":"false"},"allowCollapse":{"type":"PropTypes.bool","default":"true"},"collapsed":{"type":"PropTypes.bool","default":"false"},"collapsedIconCls":{"type":"PropTypes.string"},"expandedIconCls":{"type":"PropTypes.string"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string"},"checkboxCheckedIconCls":{"type":"PropTypes.string"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onNodeClick":{"type":"PropTypes.func","desc":"Callback function fired when the tree node touch tap."},"onNodeSelect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node selected."},"onNodeDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node deselected."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the tree changed."},"onWheel":{"type":"PropTypes.func","desc":"Callback function fired when wrapper wheeled."},"isNodeCollapsed":{"type":"PropTypes.func"},"beforeNodeToggle":{"type":"PropTypes.func"},"onNodeDragStart":{"type":"PropTypes.func"},"onNodeDragEnd":{"type":"PropTypes.func"},"onSequenceChange":{"type":"PropTypes.func"}}');var m=r(93379),g=r.n(m),b=r(7795),C=r.n(b),T=r(20695),Z=r.n(T),P=r(19216),O=r.n(P),w=r(89602),x={styleTagTransform:function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},setAttributes:function(e){var t=r.nc;t&&e.setAttribute("nonce",t)},insert:function(e){var t=Z()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}};x.domAPI=C(),x.insertStyleElement=O(),g()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals;const E=function(e){(0,a.Z)(g,e);var t,r,m=(t=g,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(r){var l=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function g(e){var t;return(0,n.Z)(this,g),t=m.call(this,e),(0,d.Z)((0,i.Z)(t),"sequenceChangeHandler",(function(e){console.log("Sequence Changed:",e)})),(0,d.Z)((0,i.Z)(t),"changeHandler",(function(e){console.log("Value Changed:",e)})),t.data={id:"0",text:"Root",desc:"Root",tip:"Root",children:[{id:"00",text:"Children 0 - 0",desc:"Children 0 - 0",tip:"Children 0 - 0"},{id:"01",text:"Children 0 - 1",desc:"Children 0 - 1",tip:"Children 0 - 1",children:[{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0",tip:"Children 0 - 1 - 0"},{id:"011",text:"Children 0 - 1 - 1",desc:"Children 0 - 1 - 1",tip:"Children 0 - 1 - 1"},{id:"012",text:"Children 0 - 1 - 2",desc:"Children 0 - 1 - 2",tip:"Children 0 - 1 - 2"}]},{id:"02",text:"Children 0 - 2",desc:"Children 0 - 2",tip:"Children 0 - 2"}]},t}return(0,l.Z)(g,[{key:"render",value:function(){return s.createElement("div",{className:"example draggable-tree-examples"},s.createElement("h2",{className:"example-title"},"DraggableTree"),s.createElement("p",null,s.createElement("span",null,"DraggableTree"),"is a list of elements that allow you to move elements with the mouse."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(f.Z,null,s.createElement(h.Z,{className:"example-header",title:"Draggable"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"A multiple-choice ",s.createElement("code",null,"DraggableTree")," example."),s.createElement(p.Z,{className:"tree-wrapper"},s.createElement(u.Z,{data:this.data,isNodeCollapsed:function(e){return"01"===e.id},onChange:this.changeHandler,onSequenceChange:this.sequenceChangeHandler})))))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(y.Z,{data:v}))}}]),g}(s.Component)},13103:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>v});var n=r(96156),l=r(43226),i=r(1469),a=r.n(i),o=r(81540),c=r(57949);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t,r,n){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(e&&!(e.length<1)&&t){var i=r.valueField,a=r.displayField;if(o.Z.getValueByValueField(e,i,a)===o.Z.getValueByValueField(t,i,a))return n?[{node:e,index:l}]:null;if(e.children&&e.children.length>0)for(var c=0,d=e.children.length;c<d;c++){var s=p(e.children[c],t,r,e,c);if(s)return n?(s.unshift({node:e,index:l}),s):s}}}function f(e,t,r,i){if(!e||!t)return e;var a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),c=i&&"function"==typeof i?i(e,t,r):function(e,t,r){var n,i;if(e[l.Z])return!0;var a=o.Z.getTextByDisplayField(e,r&&r.displayField||void 0,r&&r.valueField||void 0);return null==a||null===(n=a.toString())||void 0===n||null===(i=n.toUpperCase())||void 0===i?void 0:i.includes(null==t?void 0:t.toUpperCase())}(e,t,r);if((null==r||!r.dropMatchedNodeUnmatchedChildren)&&c)return a;var u=!1;if(e.children&&e.children.length>0){a.children=[];var p,h=s(e.children);try{for(h.s();!(p=h.n()).done;){var y=f(p.value,t,r,i);y&&a.children.push(y)}}catch(e){h.e(e)}finally{h.f()}a.children&&a.children.length>0&&(u=!0)}return c||u?a:null}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!r.isSelectRecursive)return c.Z.isItemChecked(e,t,r);var n=!0;return o.Z.preOrderTraverse(e,(function(e){if(e&&(!e.children||e.children.length<1)&&!c.Z.isItemChecked(e,t,r))return n=!1,!1})),n}function y(e,t,r){if(!r.isSelectRecursive)return c.Z.isItemIndeterminate(e,t,r);var n=0,l=0;return o.Z.preOrderTraverse(e,(function(e){e&&(!e.children||e.children.length<1)&&(n++,c.Z.isItemChecked(e,t,r)&&l++)})),l>0&&l<n}const v={calDepth:function(e,t){var r=e,n=0;if(!e||!t)return 0;var l,i=s(t);try{for(i.s();!(l=i.n()).done;){var a=l.value;if(!(a.index in r))return n;r=r[a.index].children,n++}}catch(e){i.e(e)}finally{i.f()}return r&&r.length>0?n+1:n},calPath:function(e,t,r){if(e&&t)return p(t,e,r,null)},findNodeById:function e(t,r,n){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t){if(""+t.id==""+r)return n&&n(t,l,i),!0;if(t.children&&t.children.length>0)for(var a=0,o=t.children.length;a<o;a++)if(e(t.children[a],r,n,a,t))return}},addRecursiveValue:function e(t,r,n){if(t&&r&&(c.Z.isItemChecked(t,r,n)||r.push(t),t.children&&!(t.children.length<1))){var l,i=s(t.children);try{for(i.s();!(l=i.n()).done;)e(l.value,r,n)}catch(e){i.e(e)}finally{i.f()}}},updateValue:function(e,t){var r,i=t.data,c=t.valueField,d=t.displayField,s=[];return o.Z.postOrderTraverse(a()(i)?(r={},(0,n.Z)(r,l.Z,!0),(0,n.Z)(r,"children",i),r):i,(function(t){l.Z in t||(!t.children||t.children.length<1?e.findIndex((function(e){return o.Z.getValueByValueField(e,c,d)===o.Z.getValueByValueField(t,c,d)}))>-1&&s.push(t):t.children.every((function(e){return s.findIndex((function(t){return o.Z.getValueByValueField(t,c,d)===o.Z.getValueByValueField(e,c,d)}))>-1}))&&s.push(t))})),s},getTotalCount:function(e){var t;if(!e)return 0;var r=0;return o.Z.preOrderTraverse(a()(e)?(t={},(0,n.Z)(t,l.Z,!0),(0,n.Z)(t,"children",e),t):e,(function(e){l.Z in e||r++})),r},filterData:function(e,t,r,i){var o;if(!t||!e||e.length<1)return e;var c=a()(e),d=f(c?(o={},(0,n.Z)(o,l.Z,!0),(0,n.Z)(o,"children",e),o):e,t,r,i);return c?(null==d?void 0:d.children)||[]:d||null},isCheckedAll:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(!e||!t||t.length<1)&&h({children:a()(e)?e:[e]},t,r)},isCheckedIndeterminate:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(!e||!t||t.length<1)&&y({children:a()(e)?e:[e]},t,r)},isNodeChecked:h,isNodeCheckedIndeterminate:y,removeAllNode:function(e,t){var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!t)return t;var c=i.valueField,d=i.displayField;return o.Z.preOrderTraverse(a()(e)?(r={},(0,n.Z)(r,l.Z,!0),(0,n.Z)(r,"children",e),r):e,(function(e){if(!(l.Z in e)){var r=t.findIndex((function(t){return o.Z.isValueEqual(e,t,c,d)}));-1!==r&&t.splice(r,1)}})),t},removeRecursiveValue:function e(t,r,n){if(t&&r){var l=c.Z.getMultiSelectItemIndex(t,r,n);if(l>-1&&r.splice(l,1),t.children&&!(t.children.length<1)){var i,a=s(t.children);try{for(a.s();!(i=a.n()).done;)e(i.value,r,n)}catch(e){a.e(e)}finally{a.f()}}}}}}}]);