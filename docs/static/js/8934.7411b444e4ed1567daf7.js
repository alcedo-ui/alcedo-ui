"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[8934],{59141:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const l=a},98820:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".tree-examples .tree-wrapper{border:1px solid #e4eaf2;overflow:hidden}.tree-examples .tree-wrapper .self-define-node{display:inline-block}.tree-examples .tree-wrapper .self-define-node .self-define-node-id{color:#fff;background:#38b1eb;border-radius:4px;padding:0 4px}.tree-examples .tree-wrapper .self-define-node .self-define-node-text{margin-left:4px;margin-right:8px}.tree-examples .tree-wrapper .self-define-node .self-define-node-desc{color:#d9d9d9}",""]);const l=a},1116:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(15671),a=n(43144),l=n(97326),c=n(60136),o=n(82963),s=n(61120),d=n(4942),i=n(37699),p=n(45697),f=n.n(p),u=n(82996),h=n(93379),m=n.n(h),y=n(7795),b=n.n(y),C=n(90569),T=n.n(C),x=n(3565),v=n.n(x),g=n(19216),E=n.n(g),Z=n(44589),P=n.n(Z),N=n(59141),w={};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}w.styleTagTransform=P(),w.setAttributes=v(),w.insert=T().bind(null,"head"),w.domAPI=b(),w.insertStyleElement=E(),m()(N.Z,w),N.Z&&N.Z.locals&&N.Z.locals;var S=function(e){(0,c.Z)(f,e);var t,n,p=(t=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),t=p.call(this,e),(0,d.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(O({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(f,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(u.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(i.Component);S.propTypes={data:f().object};const R=S},13383:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(15671),a=n(43144),l=n(97326),c=n(60136),o=n(82963),s=n(61120),d=n(4942),i=n(37699),p=n(24471),f=n(50704),u=n(11253),h=n(12736),m=n(1116);const y=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node.","default":"Theme.DEFAULT"},"selectTheme":{"type":"PropTypes.oneOf","desc":"The theme of the tree node select radio or checkbox.","default":"Theme.DEFAULT"},"selectMode":{"type":"PropTypes.oneOf","desc":"The mode of tree node.","default":"SelectMode.SINGLE_SELECT"},"data":{"type":"PropTypes.oneOf","desc":"Children passed into the tree node."},"valueField":{"type":"PropTypes.string","desc":"The value field name in data. (default: \\"value\\")","default":"value"},"displayField":{"type":"PropTypes.string","desc":"The display field name in data. (default: \\"text\\")","default":"text"},"descriptionField":{"type":"PropTypes.string","desc":"The description field name in data. (default: \\"desc\\")","default":"desc"},"disabled":{"type":"PropTypes.bool","desc":"If true, the tree will be disabled.","default":"false"},"nodeDisabled":{"type":"PropTypes.bool","desc":"Tree node disabled callback."},"isLoading":{"type":"PropTypes.bool","desc":"If true, the tree will be at loading status.","default":"false"},"readOnly":{"type":"PropTypes.bool","default":"false"},"isSelectRecursive":{"type":"PropTypes.bool","default":"false"},"allowCollapse":{"type":"PropTypes.bool","default":"true"},"collapsed":{"type":"PropTypes.bool","default":"false"},"indentWidth":{"type":"PropTypes.number","default":"20"},"collapsedIconCls":{"type":"PropTypes.string"},"expandedIconCls":{"type":"PropTypes.string"},"radioUncheckedIconCls":{"type":"PropTypes.string"},"radioCheckedIconCls":{"type":"PropTypes.string"},"checkboxUncheckedIconCls":{"type":"PropTypes.string"},"checkboxCheckedIconCls":{"type":"PropTypes.string"},"checkboxIndeterminateIconCls":{"type":"PropTypes.string"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value and desc prop."},"onNodeClick":{"type":"PropTypes.func","desc":"Callback function fired when the tree node touch tap."},"onNodeSelect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node selected."},"onNodeDeselect":{"type":"PropTypes.func","desc":"Callback function fired when the tree node deselected."},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the tree changed."},"isNodeCollapsed":{"type":"PropTypes.func"},"beforeNodeToggle":{"type":"PropTypes.func"}}');var b=n(93379),C=n.n(b),T=n(7795),x=n.n(T),v=n(90569),g=n.n(v),E=n(3565),Z=n.n(E),P=n(19216),N=n.n(P),w=n(44589),k=n.n(w),O=n(98820),S={};S.styleTagTransform=k(),S.setAttributes=Z(),S.insert=g().bind(null,"head"),S.domAPI=x(),S.insertStyleElement=N(),C()(O.Z,S),O.Z&&O.Z.locals&&O.Z.locals;const R=function(e){(0,c.Z)(C,e);var t,n,b=(t=C,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,o.Z)(this,e)});function C(e){var t;return(0,r.Z)(this,C),t=b.call(this,e),(0,d.Z)((0,l.Z)(t),"nodeClickHandler",(function(e){console.log("Node Clicked::",e)})),(0,d.Z)((0,l.Z)(t),"nodeSelectHandler",(function(e,t){console.log("Node Selected::",e,t)})),(0,d.Z)((0,l.Z)(t),"changeHandler",(function(e){console.log("Changed::",e)})),t.data={id:"0",text:"Root",desc:"Root",tip:"Root",children:[{id:"00",text:"Children 0 - 0",desc:"Children 0 - 0",tip:"Children 0 - 0"},{id:"01",text:"Children 0 - 1",desc:"Children 0 - 1",tip:"Children 0 - 1",children:[{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0",tip:"Children 0 - 1 - 0"},{id:"011",text:"Children 0 - 1 - 1",desc:"Children 0 - 1 - 1",tip:"Children 0 - 1 - 1"},{id:"012",text:"Children 0 - 1 - 2",desc:"Children 0 - 1 - 2",tip:"Children 0 - 1 - 2"}]},{id:"02",text:"Children 0 - 2",desc:"Children 0 - 2",tip:"Children 0 - 2"}]},t.arrayData=t.data.children,t}return(0,a.Z)(C,[{key:"render",value:function(){return i.createElement("div",{className:"example tree-examples"},i.createElement("h2",{className:"examples-title"},"Tree"),i.createElement("p",null,i.createElement("span",null,"Tree"),"can fully display the hierarchy, and has interactive functions such as expansion, withdrawal and selection."),i.createElement("h2",{className:"example-title"},"Examples"),i.createElement(p.Z,null,i.createElement(f.Z,{className:"example-header",title:"Basic"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("div",{className:"examples-wrapper"},i.createElement("p",null,i.createElement("code",null,"Tree"),"simple example."),i.createElement(u.Z,{className:"tree-wrapper"},i.createElement(h.Z,{data:this.data,onNodeClick:this.nodeClickHandler,onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),i.createElement(p.Z,null,i.createElement(f.Z,{className:"example-header",title:"Self Define Node Renderer"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("div",{className:"examples-wrapper"},i.createElement(u.Z,{className:"tree-wrapper"},i.createElement(h.Z,{data:this.arrayData,collapsed:!0,collapsedIconCls:"far fa-plus-square",expandedIconCls:"far fa-minus-square",renderer:function(e){return i.createElement("div",{className:"self-define-node"},i.createElement("span",{className:"self-define-node-id"},e.id),i.createElement("span",{className:"self-define-node-text"},e.text),i.createElement("span",{className:"self-define-node-desc"},e.desc))},onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),i.createElement(p.Z,null,i.createElement(f.Z,{className:"example-header",title:"Multi Select"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("div",{className:"examples-wrapper"},i.createElement(u.Z,{className:"tree-wrapper"},i.createElement(h.Z,{selectMode:h.Z.SelectMode.MULTI_SELECT,data:this.data,isSelectRecursive:!0,checkboxUncheckedIconCls:"far fa-circle",checkboxCheckedIconCls:"fas fa-check-circle",checkboxIndeterminateIconCls:"fas fa-minus-circle",isNodeCollapsed:function(e){return"01"===e.id},nodeDisabled:function(e){return e.id.includes("2")},onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),i.createElement("h2",{className:"example-title"},"Properties"),i.createElement(m.Z,{data:y}))}}]),C}(i.Component)}}]);