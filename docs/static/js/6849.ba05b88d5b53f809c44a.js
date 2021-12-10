"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6849],{59141:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),l=n.n(r),a=n(23645),i=n.n(a)()(l());i.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=i},89602:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8081),l=n.n(r),a=n(23645),i=n.n(a)()(l());i.push([e.id,".draggable-tree-examples .tree-wrapper{border:1px solid #e4eaf2;overflow:hidden}",""]);const o=i},1116:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(15671),l=n(43144),a=n(97326),i=n(60136),o=n(82963),c=n(61120),d=n(4942),s=n(37699),u=n(45697),p=n.n(u),f=n(82996),h=n(93379),y=n.n(h),v=n(7795),m=n.n(v),g=n(90569),b=n.n(g),Z=n(3565),P=n.n(Z),T=n(19216),C=n.n(T),O=n(44589),w=n.n(O),x=n(59141),E={};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}E.styleTagTransform=w(),E.setAttributes=P(),E.insert=b().bind(null,"head"),E.domAPI=m(),E.insertStyleElement=C(),y()(x.Z,E),x.Z&&x.Z.locals&&x.Z.locals;var N=function(e){(0,i.Z)(p,e);var t,n,u=(t=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var l=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function p(e){var t;return(0,r.Z)(this,p),t=u.call(this,e),(0,d.Z)((0,a.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(I({name:n},t.props.data[n]));return e})),t}return(0,l.Z)(p,[{key:"render",value:function(){return s.createElement("div",{className:"prop-type-desc-table-wrapper"},s.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),p}(s.Component);N.propTypes={data:p().object};const j=N},68337:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(15671),l=n(43144),a=n(97326),i=n(60136),o=n(82963),c=n(61120),d=n(4942),s=n(37699),u=n(36790),p=n(11253),f=n(24471),h=n(50704),y=n(1116);const v=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of tree node.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.oneOf","desc":"Children passed into the tree node."},"idField":{"type":"PropTypes.string","desc":"The id field name in data. (default: \\"id\\")","default":"id"},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the tree will be disabled.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true, the tree will be at loading status.","default":"false"},"readOnly":{"type":"PropTypes.bool","default":"false"},"isSelectRecursive":{"type":"PropTypes.bool","default":"false"},"allowCollapse":{"type":"PropTypes.bool","default":"true"},"collapsed":{"type":"PropTypes.bool","default":"false"},"collapsedIconCls":{"type":"PropTypes.string"},"expandedIconCls":{"type":"PropTypes.string"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string"},"checkboxCheckedIconCls":{"type":"PropTypes.string"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onNodeClick":{"type":"PropTypes.func","desc":"Callback function fired when the tree node touch tap."},"onNodeSelect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node selected."},"onNodeDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node deselected."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the tree changed."},"onWheel":{"type":"PropTypes.func","desc":"Callback function fired when wrapper wheeled."},"isNodeCollapsed":{"type":"PropTypes.func"},"beforeNodeToggle":{"type":"PropTypes.func"},"onNodeDragStart":{"type":"PropTypes.func"},"onNodeDragEnd":{"type":"PropTypes.func"},"onSequenceChange":{"type":"PropTypes.func"}}');var m=n(93379),g=n.n(m),b=n(7795),Z=n.n(b),P=n(90569),T=n.n(P),C=n(3565),O=n.n(C),w=n(19216),x=n.n(w),E=n(44589),k=n.n(E),I=n(89602),N={};N.styleTagTransform=k(),N.setAttributes=O(),N.insert=T().bind(null,"head"),N.domAPI=Z(),N.insertStyleElement=x(),g()(I.Z,N),I.Z&&I.Z.locals&&I.Z.locals;var j=function(e){(0,i.Z)(g,e);var t,n,m=(t=g,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,c.Z)(t);if(n){var l=(0,c.Z)(this).constructor;e=Reflect.construct(r,arguments,l)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function g(e){var t;return(0,r.Z)(this,g),t=m.call(this,e),(0,d.Z)((0,a.Z)(t),"sequenceChangeHandler",(function(e){console.log("Sequence Changed:",e)})),(0,d.Z)((0,a.Z)(t),"changeHandler",(function(e){console.log("Value Changed:",e)})),t.data={id:"0",text:"Root",desc:"Root",tip:"Root",children:[{id:"00",text:"Children 0 - 0",desc:"Children 0 - 0",tip:"Children 0 - 0"},{id:"01",text:"Children 0 - 1",desc:"Children 0 - 1",tip:"Children 0 - 1",children:[{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0",tip:"Children 0 - 1 - 0"},{id:"011",text:"Children 0 - 1 - 1",desc:"Children 0 - 1 - 1",tip:"Children 0 - 1 - 1"},{id:"012",text:"Children 0 - 1 - 2",desc:"Children 0 - 1 - 2",tip:"Children 0 - 1 - 2"}]},{id:"02",text:"Children 0 - 2",desc:"Children 0 - 2",tip:"Children 0 - 2"}]},t}return(0,l.Z)(g,[{key:"render",value:function(){return s.createElement("div",{className:"example draggable-tree-examples"},s.createElement("h2",{className:"example-title"},"DraggableTree"),s.createElement("p",null,s.createElement("span",null,"DraggableTree"),"is a list of elements that allow you to move elements with the mouse."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(f.Z,null,s.createElement(h.Z,{className:"example-header",title:"Draggable"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"A multiple-choice ",s.createElement("code",null,"DraggableTree")," example."),s.createElement(p.Z,{className:"tree-wrapper"},s.createElement(u.Z,{data:this.data,isNodeCollapsed:function(e){return"01"===e.id},onChange:this.changeHandler,onSequenceChange:this.sequenceChangeHandler})))))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(y.Z,{data:v}))}}]),g}(s.Component);const S=j},13103:(e,t,n)=>{n.d(t,{ZP:()=>v});var r=n(4942),l=n(43226),a=n(1469),i=n.n(a),o=n(81540),c=n(57949);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n,r){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(e&&!(e.length<1)&&t){var a=n.valueField,i=n.displayField;if(o.ZP.getValueByValueField(e,a,i)===o.ZP.getValueByValueField(t,a,i))return r?[{node:e,index:l}]:null;if(e.children&&e.children.length>0)for(var c=0,d=e.children.length;c<d;c++){var s=p(e.children[c],t,n,e,c);if(s)return r?(s.unshift({node:e,index:l}),s):s}}}function f(e,t,n,a){if(!e||!t)return e;var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),c=a&&"function"==typeof a?a(e,t,n):function(e,t,n){var r,a;if(e[l.Z])return!0;var i=o.ZP.getTextByDisplayField(e,n&&n.displayField||void 0,n&&n.valueField||void 0);return null==i||null===(r=i.toString())||void 0===r||null===(a=r.toUpperCase())||void 0===a?void 0:a.includes(null==t?void 0:t.toUpperCase())}(e,t,n);if((null==n||!n.dropMatchedNodeUnmatchedChildren)&&c)return i;var u=!1;if(e.children&&e.children.length>0){i.children=[];var p,h=s(e.children);try{for(h.s();!(p=h.n()).done;){var y=f(p.value,t,n,a);y&&i.children.push(y)}}catch(e){h.e(e)}finally{h.f()}i.children&&i.children.length>0&&(u=!0)}return c||u?i:null}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.isSelectRecursive)return c.Z.isItemChecked(e,t,n);var r=!0;return o.ZP.preOrderTraverse(e,(function(e){if(e&&(!e.children||e.children.length<1)&&!c.Z.isItemChecked(e,t,n))return r=!1,!1})),r}function y(e,t,n){if(!n.isSelectRecursive)return c.Z.isItemIndeterminate(e,t,n);var r=0,l=0;return o.ZP.preOrderTraverse(e,(function(e){e&&(!e.children||e.children.length<1)&&(r++,c.Z.isItemChecked(e,t,n)&&l++)})),l>0&&l<r}const v={calDepth:function(e,t){var n=e,r=0;if(!e||!t)return 0;var l,a=s(t);try{for(a.s();!(l=a.n()).done;){var i=l.value;if(!(i.index in n))return r;n=n[i.index].children,r++}}catch(e){a.e(e)}finally{a.f()}return n&&n.length>0?r+1:r},calPath:function(e,t,n){if(e&&t)return p(t,e,n,null)},findNodeById:function e(t,n,r){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t){if(""+t.id==""+n)return r&&r(t,l,a),!0;if(t.children&&t.children.length>0)for(var i=0,o=t.children.length;i<o;i++)if(e(t.children[i],n,r,i,t))return}},addRecursiveValue:function e(t,n,r){if(t&&n&&(c.Z.isItemChecked(t,n,r)||n.push(t),t.children&&!(t.children.length<1))){var l,a=s(t.children);try{for(a.s();!(l=a.n()).done;)e(l.value,n,r)}catch(e){a.e(e)}finally{a.f()}}},updateValue:function(e,t){var n,a=t.data,c=t.valueField,d=t.displayField,s=[];return o.ZP.postOrderTraverse(i()(a)?(n={},(0,r.Z)(n,l.Z,!0),(0,r.Z)(n,"children",a),n):a,(function(t){l.Z in t||(!t.children||t.children.length<1?e.findIndex((function(e){return o.ZP.getValueByValueField(e,c,d)===o.ZP.getValueByValueField(t,c,d)}))>-1&&s.push(t):t.children.every((function(e){return s.findIndex((function(t){return o.ZP.getValueByValueField(t,c,d)===o.ZP.getValueByValueField(e,c,d)}))>-1}))&&s.push(t))})),s},getTotalCount:function(e){var t;if(!e)return 0;var n=0;return o.ZP.preOrderTraverse(i()(e)?(t={},(0,r.Z)(t,l.Z,!0),(0,r.Z)(t,"children",e),t):e,(function(e){l.Z in e||n++})),n},filterData:function(e,t,n,a){var o;if(!t||!e||e.length<1)return e;var c=i()(e),d=f(c?(o={},(0,r.Z)(o,l.Z,!0),(0,r.Z)(o,"children",e),o):e,t,n,a);return c?(null==d?void 0:d.children)||[]:d||null},isCheckedAll:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(!e||!t||t.length<1)&&h({children:i()(e)?e:[e]},t,n)},isCheckedIndeterminate:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(!e||!t||t.length<1)&&y({children:i()(e)?e:[e]},t,n)},isNodeChecked:h,isNodeCheckedIndeterminate:y,removeAllNode:function(e,t){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!t)return t;var c=a.valueField,d=a.displayField;return o.ZP.preOrderTraverse(i()(e)?(n={},(0,r.Z)(n,l.Z,!0),(0,r.Z)(n,"children",e),n):e,(function(e){if(!(l.Z in e)){var n=t.findIndex((function(t){return o.ZP.isValueEqual(e,t,c,d)}));-1!==n&&t.splice(n,1)}})),t},removeRecursiveValue:function e(t,n,r){if(t&&n){var l=c.Z.getMultiSelectItemIndex(t,n,r);if(l>-1&&n.splice(l,1),t.children&&!(t.children.length<1)){var a,i=s(t.children);try{for(i.s();!(a=i.n()).done;)e(a.value,n,r)}catch(e){i.e(e)}finally{i.f()}}}}}}}]);