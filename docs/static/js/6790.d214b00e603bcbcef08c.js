(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6790],{36790:(e,n,t)=>{"use strict";t.d(n,{Z:()=>W});var o=t(34575),l=t.n(o),a=t(93913),r=t.n(a),c=t(81506),i=t.n(c),d=t(2205),s=t.n(d),u=t(78585),p=t.n(u),g=t(29754),h=t.n(g),f=t(59713),C=t.n(f),v=t(37699),b=t(45697),m=t.n(b),y=t(2782),I=t(41844),k=t.n(I),N=t(1469),E=t.n(N),Z=t(67154),S=t.n(Z),T=t(65059),x=t(88787),O=t(96453),D=t(8628),F=t(45580),L=t(87712),R=t(65248),M=t(59448),V=t(43226),w=t(81540),P=t(57949);function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){C()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=function(e){s()(a,e);var n,t,o=(n=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=h()(n);if(t){var l=h()(this).constructor;e=Reflect.construct(o,arguments,l)}else e=o.apply(this,arguments);return p()(this,e)});function a(e){var n;l()(this,a);for(var t=arguments.length,r=new Array(t>1?t-1:0),c=1;c<t;c++)r[c-1]=arguments[c];return n=o.call.apply(o,[this,e].concat(r)),C()(i()(n),"isCollapsed",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props,t=e.data,o=e.isNodeCollapsed,l=e.collapsed,a=e.index,r=e.depth,c=e.path;return(!t||!t[V.Z])&&(o?"function"==typeof o?o(t,a,r,c):!!o:l)})),C()(i()(n),"toggleTreeNode",(function(e){e&&e.stopPropagation();var t=n.props.onNodeToggleStart;t&&t(),n.setState({collapsed:!n.state.collapsed},(function(){var e=n.props.onNodeToggleEnd;e&&e()}))})),C()(i()(n),"handleCheckboxChange",(function(e){var t=n.props,o=t.data,l=t.path,a=t.value,r=t.onSelect,c=t.onDeselect;P.Z.isItemChecked(o,a,n.props)?c&&c(o,l,e):r&&r(o,l,e)})),C()(i()(n),"handleRadioChange",(function(e){var t=n.props,o=t.data,l=t.path,a=t.onSelect;a&&a(o,l,e)})),C()(i()(n),"handleClick",(function(e){e.preventDefault();var t=n.props,o=t.data,l=t.path,a=t.disabled,r=t.isLoading,c=t.readOnly;if(!(a||r||c||o.disabled||o.isLoading||o.readOnly)){var i=n.props.onClick;switch(i&&i(o,l,e),n.props.selectMode){case M.Z.MULTI_SELECT:return void n.handleCheckboxChange(e);case M.Z.SINGLE_SELECT:return void n.handleRadioChange(e)}}})),n.state={collapsed:n.isCollapsed(e)},n}return r()(a,[{key:"render",value:function(){var e=this,n=this.props,t=n.index,o=n.depth,l=(n.path,n.theme),r=n.selectTheme,c=n.selectMode,i=n.data,d=n.value,s=n.disabled,u=n.isLoading,p=n.readOnly,g=n.allowCollapse,h=n.isSelectRecursive,f=n.valueField,b=n.displayField,m=n.descriptionField,I=n.collapsedIconCls,N=n.expandedIconCls,E=n.radioUncheckedIconCls,Z=n.radioCheckedIconCls,L=n.checkboxUncheckedIconCls,R=n.checkboxCheckedIconCls,U=n.checkboxIndeterminateIconCls,A=n.renderer,_=n.onMouseEnter,B=n.onMouseLeave,q=n.isDragging,G=n.isNodeToggling,z=this.state.collapsed,H=P.Z.isItemChecked(i,d,this.props),K=i.isLoading||u,W=i.disabled||s||K,$=V.Z in i,J=i.rightIconCls&&!i.iconCls?"right":"left";return v.createElement(y.bK,{droppableId:""+i.id,type:i.id,key:i.id},(function(n){var d;return v.createElement("div",S()({ref:n.innerRef,className:"draggable-tree-node-wrapper"},n.droppableProps),$?null:v.createElement(x.Z,{tipContent:i.tip,position:i.tipPosition},v.createElement("div",{className:k()("draggable-tree-node",(d={},C()(d,"theme-".concat(l),l),C()(d,"dragging",q),C()(d,i.className,i.className),d)),style:j(j({},i.style),{},{paddingLeft:20*(o+1)}),disabled:W,readOnly:p,onClick:e.handleClick,onMouseEnter:_,onMouseLeave:B},v.createElement("div",{className:"draggable-tree-node-inner"},g&&i.children&&i.children.length>0?v.createElement(O.Z,{className:"draggable-tree-node-collapse-icon",iconCls:z?i.collapsedIconCls||I:i.expandedIconCls||N,onClick:e.toggleTreeNode}):null,c===M.Z.SINGLE_SELECT&&(E||Z)?v.createElement(D.Z,{className:"draggable-tree-node-select",theme:r,checked:H,disabled:W,uncheckedIconCls:i.radioUncheckedIconCls||E,checkedIconCls:i.radioCheckedIconCls||Z,disableTouchRipple:!0}):null,c===M.Z.MULTI_SELECT?v.createElement(F.Z,{className:"draggable-tree-node-select",theme:r,checked:H,indeterminate:!!h&&indeterminate,disabled:W,uncheckedIconCls:i.checkboxUncheckedIconCls||L,checkedIconCls:i.checkboxCheckedIconCls||R,indeterminateIconCls:i.checkboxIndeterminateIconCls||U,disableTouchRipple:!0}):null,K&&"left"===J?v.createElement("div",{className:"button-icon button-icon-left"},v.createElement(T.Z,{className:"button-loading-icon",size:"small"})):i.iconCls?v.createElement("i",{className:"button-icon button-icon-left ".concat(i.iconCls),"aria-hidden":"true"}):null,i.itemRenderer&&"function"==typeof i.itemRenderer?i.itemRenderer(i,t):A&&"function"==typeof A?A(i,t):i[m]?v.createElement("div",{className:"draggable-tree-node-content"},v.createElement("span",{className:"draggable-tree-node-content-value"},w.Z.getTextByDisplayField(i,b,f)),v.createElement("span",{className:"draggable-tree-node-content-desc"},i[m])):w.Z.getTextByDisplayField(i,b,f),K&&"right"===J?v.createElement(T.Z,{className:"button-icon button-icon-right button-loading-icon",size:"small"}):i.rightIconCls?v.createElement("i",{className:"button-icon button-icon-right ".concat(i.rightIconCls),"aria-hidden":"true"}):null))),i.children&&i.children.length>0?v.createElement("div",{className:"draggable-tree-node-children"+(z?" collapsed":"")},i.children.map((function(n,t){var l=l?[].concat(l,[{index:t,node:n}]):[{index:t,node:n}];return v.createElement(y._l,{key:n.id,draggableId:""+n.id,type:i.id,disableInteractiveElementBlocking:!1,isDragDisabled:G||W,index:t},(function(r,c){return v.createElement("div",null,v.createElement("div",S()({ref:r.innerRef,style:r.draggableStyle},r.draggableProps,r.dragHandleProps),v.createElement(a,S()({},e.props,{key:t,data:n,index:t,depth:o+($?0:1),path:l,isDragging:c.isDragging}))))}))}))):null,n.placeholder)}))}}]),a}(v.Component);C()(A,"SelectMode",M.Z),C()(A,"Theme",L.Z),A.propTypes={index:m().number,depth:m().number,path:m().array,theme:m().oneOf(w.Z.enumerateValue(L.Z)),selectTheme:m().oneOf(w.Z.enumerateValue(L.Z)),selectMode:m().oneOf(w.Z.enumerateValue(M.Z)),data:m().object,value:m().any,idField:m().string,valueField:m().string,displayField:m().string,descriptionField:m().string,disabled:m().bool,isLoading:m().bool,readOnly:m().bool,allowCollapse:m().bool,collapsed:m().bool,isNodeToggling:m().bool,isSelectRecursive:m().bool,renderer:m().func,collapsedIconCls:m().string,expandedIconCls:m().string,radioUncheckedIconCls:m().string,radioCheckedIconCls:m().string,checkboxUncheckedIconCls:m().string,checkboxCheckedIconCls:m().string,checkboxIndeterminateIconCls:m().string,onClick:m().func,onSelect:m().func,onDeselect:m().func,onMouseEnter:m().func,onMouseLeave:m().func,onNodeToggleStart:m().func,onNodeToggleEnd:m().func,isDragging:m().bool},A.defaultProps={index:0,depth:0,theme:L.Z.DEFAULT,selectTheme:L.Z.DEFAULT,selectMode:M.Z.SINGLE_SELECT,idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,allowCollapse:!0,collapsed:!1,isNodeToggling:!1,isSelectRecursive:!1,tipPosition:R.Z.BOTTOM,collapsedIconCls:"fas fa-caret-right",expandedIconCls:"fas fa-caret-down",checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square",isDragging:!1};const _=A;var B=t(96509),q=t(13103),G=t(19605);function z(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return H(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?H(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return r=e.done,e},e:function(e){c=!0,a=e},f:function(){try{r||null==t.return||t.return()}finally{if(c)throw a}}}}function H(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var K=function(e){s()(a,e);var n,t,o=(n=a,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=h()(n);if(t){var l=h()(this).constructor;e=Reflect.construct(o,arguments,l)}else e=o.apply(this,arguments);return p()(this,e)});function a(e){var n;l()(this,a);for(var t=arguments.length,r=new Array(t>1?t-1:0),c=1;c<t;c++)r[c-1]=arguments[c];return n=o.call.apply(o,[this,e].concat(r)),C()(i()(n),"addRecursiveValue",(function(e,t){if(e&&t&&(P.Z.isItemChecked(e,t,n.props)||t.push(e),e.children&&!(e.children.length<1))){var o,l=z(e.children);try{for(l.s();!(o=l.n()).done;){var a=o.value;n.addRecursiveValue(a,t)}}catch(e){l.e(e)}finally{l.f()}}})),C()(i()(n),"removeRecursiveValue",(function(e,t){if(e&&t){var o=P.Z.getMultiSelectItemIndex(e,t,n.props);if(o>-1&&t.splice(o,1),e.children&&!(e.children.length<1)){var l,a=z(e.children);try{for(a.s();!(l=a.n()).done;){var r=l.value;n.removeRecursiveValue(r,t)}}catch(e){a.e(e)}finally{a.f()}}}})),C()(i()(n),"updateValue",(function(e){var t,o=n.props,l=o.data,a=o.valueField,r=o.displayField,c=[];return w.Z.postOrderTraverse(E()(l)?(t={},C()(t,V.Z,!0),C()(t,"children",l),t):l,(function(n){V.Z in n||(!n.children||n.children.length<1?e.findIndex((function(e){return w.Z.getValueByValueField(e,a,r)===w.Z.getValueByValueField(n,a,r)}))>-1&&c.push(n):n.children.every((function(e){return c.findIndex((function(n){return w.Z.getValueByValueField(n,a,r)===w.Z.getValueByValueField(e,a,r)}))>-1}))&&c.push(n))})),c})),C()(i()(n),"handleTreeNodeSelect",(function(e,t,o){if(e){var l=n.props,a=l.selectMode,r=l.isSelectRecursive,c=n.state.value;a===M.Z.MULTI_SELECT?(c&&E()(c)||(c=[]),r?(n.addRecursiveValue(e,c),c=n.updateValue(c)):c.push(e)):a===M.Z.SINGLE_SELECT&&(c=e),n.setState({value:c},(function(){var l=n.props,a=l.onNodeSelect,r=l.onChange;a&&a(e,t,o),r&&r(c,o)}))}})),C()(i()(n),"handleTreeNodeDeselect",(function(e,t,o){if(n.props.selectMode===M.Z.MULTI_SELECT){var l=n.props.isSelectRecursive,a=n.state.value;if(a&&E()(a))if(l)n.removeRecursiveValue(node,a),a=n.updateValue(a);else{var r=P.Z.getMultiSelectItemIndex(node,a,n.props);r>-1&&a.splice(r,1)}else a=[];n.setState({value:a},(function(){var e=n.props,l=e.onNodeDeselect,r=e.onChange;l&&l(node,t,o),r&&r(a,o)}))}})),C()(i()(n),"handleNodeToggleStart",(function(){var e=n.props.beforeNodeToggle;e&&!1===e()||n.setState({isNodeToggling:!0})})),C()(i()(n),"handleNodeToggleEnd",(function(){n.setState({isNodeToggling:!1})})),C()(i()(n),"onNodeDragStart",(function(e){var t=n.props.onNodeDragStart;t&&t(e)})),C()(i()(n),"onNodeDragEnd",(function(e){var t;if(e&&"draggableId"in e&&e.source&&"index"in e.source&&e.destination&&"index"in e.destination){var o=n.state.data,l=e.source.index,a=e.destination.index;q.Z.findNodeById(E()(o)?(t={},C()(t,V.Z,!0),C()(t,"children",o),t):o,e.draggableId,(function(t,r,c){c.children&&l in c.children&&a in c.children&&(w.Z.reorder(c.children,l,a),n.setState({data:o},(function(){var t=n.props,l=t.onNodeDragEnd,a=t.onSequenceChange;l&&l(e),a&&a(o)})))}))}})),n.state={data:e.data,value:P.Z.getInitValue(e),isNodeToggling:!1},n}return r()(a,[{key:"render",value:function(){var e,n=this.props,t=n.children,o=n.className,l=n.style,a=n.theme,r=n.allowCollapse,c=n.collapsed,i=n.collapsedIconCls,d=n.expandedIconCls,s=n.radioUncheckedIconCls,u=n.radioCheckedIconCls,p=n.checkboxUncheckedIconCls,g=n.checkboxCheckedIconCls,h=n.checkboxIndeterminateIconCls,f=n.idField,b=n.valueField,m=n.displayField,I=n.descriptionField,N=n.disabled,Z=n.isLoading,S=n.readOnly,T=n.selectMode,x=n.renderer,O=n.onNodeClick,D=n.isNodeCollapsed,F=this.state,L=F.data,R=F.value,M=F.isNodeToggling;return v.createElement(y.Z5,{onDragStart:this.onNodeDragStart,onDragEnd:this.onNodeDragEnd},v.createElement("div",{className:k()("draggable-tree",C()({},o,o)),disabled:N,style:l},v.createElement(_,{data:E()(L)?(e={},C()(e,V.Z,!0),C()(e,"children",L),e):L,value:R,theme:a,idField:f,valueField:b,displayField:m,descriptionField:I,disabled:N,isLoading:Z,readOnly:S,selectMode:T,renderer:x,allowCollapse:r,collapsed:c,collapsedIconCls:i,expandedIconCls:d,radioUncheckedIconCls:s,radioCheckedIconCls:u,checkboxUncheckedIconCls:p,checkboxCheckedIconCls:g,checkboxIndeterminateIconCls:h,isNodeToggling:M,isNodeCollapsed:D,onClick:function(){return O&&O.apply(void 0,arguments)},onNodeToggleStart:this.handleNodeToggleStart,onNodeToggleEnd:this.handleNodeToggleEnd,onSelect:this.handleTreeNodeSelect,onDeselect:this.handleTreeNodeDeselect}),t))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return{prevProps:e,data:G.Z.getDerivedState(e,n,"data"),value:P.Z.getInitValue({value:G.Z.getDerivedState(e,n,"value"),selectMode:e.selectMode})}}}]),a}(v.Component);C()(K,"SelectMode",M.Z),C()(K,"Theme",L.Z),K.propTypes={children:m().any,className:m().string,style:m().object,theme:m().oneOf(w.Z.enumerateValue(L.Z)),selectTheme:m().oneOf(w.Z.enumerateValue(L.Z)),selectMode:m().oneOf(w.Z.enumerateValue(M.Z)),data:m().oneOfType([m().shape({className:m().string,style:m().object,theme:m().oneOf(w.Z.enumerateValue(L.Z)),value:m().oneOfType([m().string,m().number]),text:m().oneOfType([m().string,m().number]),desc:m().oneOfType([m().string,m().number]),disabled:m().bool,isLoading:m().bool,iconCls:m().string,rightIconCls:m().string,tip:m().string,tipPosition:m().oneOf(w.Z.enumerateValue(B.Z.Position)),children:m().array,itemRenderer:m().func,onClick:m().func}),m().array]),idField:m().string,valueField:m().string,displayField:m().string,descriptionField:m().string,disabled:m().bool,isLoading:m().bool,readOnly:m().bool,isSelectRecursive:m().bool,allowCollapse:m().bool,collapsed:m().bool,collapsedIconCls:m().string,expandedIconCls:m().string,radioUncheckedIconCls:m().string,radioCheckedIconCls:m().string,checkboxUncheckedIconCls:m().string,checkboxCheckedIconCls:m().string,checkboxIndeterminateIconCls:m().string,renderer:m().func,onNodeClick:m().func,onNodeSelect:m().func,onNodeDeselect:m().func,onChange:m().func,onWheel:m().func,isNodeCollapsed:m().func,beforeNodeToggle:m().func,onNodeDragStart:m().func,onNodeDragEnd:m().func,onSequenceChange:m().func},K.defaultProps={theme:L.Z.DEFAULT,selectTheme:L.Z.DEFAULT,selectMode:M.Z.SINGLE_SELECT,idField:"id",valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,isSelectRecursive:!1,allowCollapse:!0,collapsed:!1};const W=K}}]);