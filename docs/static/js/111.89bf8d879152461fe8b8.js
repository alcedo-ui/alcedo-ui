(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{367:function(e,a,n){"use strict";var t=n(6),l=n.n(t),o=n(79),r=n.n(o),c=n(80),s=n.n(c),d=n(81),i=n.n(d),p=n(82),u=n.n(p),h=n(20),f=n.n(h),m=n(83),g=n.n(m),C=n(0),y=n.n(C),v=n(1),b=n.n(v),T=n(374),k=(n(368),function(e){function a(e){var n,t;return r()(this,a),(t=i()(this,u()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=(n=f()(t),t.generateData).bind(n),t}return g()(a,e),s()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(l()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(T.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(C.Component));k.propTypes={data:b.a.object},k.defaultProps={data:null},a.a=k},368:function(e,a,n){var t=n(369);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(147)(t,l);t.locals&&(e.exports=t.locals)},369:function(e,a,n){(e.exports=n(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},403:function(e,a,n){"use strict";var t=Symbol("VirtualRoot");a.a=t},426:function(e,a,n){"use strict";var t=n(79),l=n.n(t),o=n(80),r=n.n(o),c=n(81),s=n.n(c),d=n(82),i=n.n(d),p=n(20),u=n.n(p),h=n(83),f=n.n(h),m=n(21),g=n.n(m),C=n(0),y=n.n(C),v=n(1),b=n.n(v),T=n(5),k=n.n(T),I=n(362),x=n.n(I),E=n(6),N=n.n(E),S=n(365),w=n.n(S),L=n(350),P=n.n(L),F=n(398),M=n(364),U=n(379),O=n(402),R=n(400),D=n(382),V=n(403),H=n(363),_=n(394),A=function(e){function a(e){var n,t;l()(this,a);for(var o=arguments.length,r=new Array(o>1?o-1:0),c=1;c<o;c++)r[c-1]=arguments[c];return t=s()(this,(n=i()(a)).call.apply(n,[this,e].concat(r))),g()(u()(t),"toggleTreeNode",function(e){e&&e.stopPropagation();var a=t.props.onNodeToggleStart;a&&a(),t.setState({collapsed:!t.state.collapsed},function(){var e=t.props.onNodeToggleEnd;e&&e()})}),g()(u()(t),"checkboxChangeHandler",function(e){var a=t.props,n=a.data,l=a.path,o=a.value,r=a.onSelect,c=a.onDeselect;_.a.isItemChecked(n,o,t.props)?c&&c(n,l,e):r&&r(n,l,e)}),g()(u()(t),"radioChangeHandler",function(e){var a=t.props,n=a.data,l=a.path,o=a.onSelect;o&&o(n,l,e)}),g()(u()(t),"clickHandler",function(e){var a=t.props,n=a.data,l=a.path,o=a.disabled,r=a.isLoading,c=a.readOnly;if(!(o||r||c||n.disabled||n.isLoading||n.readOnly)){var s=t.props.onClick;switch(s&&s(n,l,e),t.props.selectMode){case D.a.MULTI_SELECT:return void t.checkboxChangeHandler(e);case D.a.SINGLE_SELECT:return void t.radioChangeHandler(e)}}}),g()(u()(t),"renderChildren",function(){var e=t.props,n=e.depth,l=e.path,o=e.data,r=t.state.collapsed,c=V.a in o,s=x()("tree-node-children",{collapsed:r});return o.children&&o.children.length>0?y.a.createElement("div",{className:s},o.children.map(function(e,o){return y.a.createElement(a,w()({},t.props,{key:o,data:e,index:o,depth:n+(c?0:1),path:l?[].concat(P()(l),[{index:o,node:e}]):[{index:o,node:e}]}))})):null}),t.state={collapsed:(!e.data||!e.data[V.a])&&e.collapsed},t}return f()(a,e),r()(a,[{key:"render",value:function(){var e,a=this.props.data;if(V.a in a)return this.renderChildren();var n=this.props,t=n.index,l=n.depth,o=n.theme,r=n.selectTheme,c=n.selectMode,s=n.value,d=n.disabled,i=n.isLoading,p=n.readOnly,u=n.allowCollapse,h=n.isSelectRecursive,f=n.valueField,m=n.displayField,v=n.descriptionField,b=n.filter,T=n.collapsedIconCls,k=n.expandedIconCls,I=n.radioUncheckedIconCls,E=n.radioCheckedIconCls,S=n.checkboxUncheckedIconCls,w=n.checkboxCheckedIconCls,L=n.checkboxIndeterminateIconCls,P=n.renderer,M=n.onMouseEnter,A=n.onMouseLeave,B=this.state.collapsed,G=_.a.isItemChecked(a,s,this.props),j=_.a.isNodeIndeterminate(a,s,this.props),q=a.isLoading||i,W=a.disabled||d||q,z=!b||a&&m in a&&a[m].toString().toUpperCase().includes(b.toUpperCase()),J=x()("tree-node",(e={},g()(e,"theme-".concat(o),o),g()(e,a.className,a.className),e)),Y=N()({},a.style,{paddingLeft:20*(l+1)}),K=a.rightIconCls&&!a.iconCls?"right":"left";return y.a.createElement(C.Fragment,null,z?y.a.createElement("div",{className:J,style:Y,title:a.title,disabled:W,readOnly:p,onClick:this.clickHandler,onMouseEnter:M,onMouseLeave:A},y.a.createElement("div",{className:"tree-node-inner"},u&&a.children&&a.children.length>0?y.a.createElement(U.a,{className:"tree-node-collapse-icon",iconCls:B?a.collapsedIconCls||T:a.expandedIconCls||k,onClick:this.toggleTreeNode}):null,c===D.a.SINGLE_SELECT&&(I||E)?y.a.createElement(O.a,{className:"tree-node-select",theme:r,checked:G,disabled:W,uncheckedIconCls:a.radioUncheckedIconCls||I,checkedIconCls:a.radioCheckedIconCls||E,disableTouchRipple:!0}):null,c===D.a.MULTI_SELECT?y.a.createElement(R.a,{className:"tree-node-select",theme:r,checked:G,indeterminate:!!h&&j,disabled:W,uncheckedIconCls:a.checkboxUncheckedIconCls||S,checkedIconCls:a.checkboxCheckedIconCls||w,indeterminateIconCls:a.checkboxIndeterminateIconCls||L,disableTouchRipple:!0}):null,q&&"left"===K?y.a.createElement("div",{className:"button-icon button-icon-left"},y.a.createElement(F.a,{className:"button-loading-icon",size:"small"})):a.iconCls?y.a.createElement("i",{className:"button-icon button-icon-left ".concat(a.iconCls),"aria-hidden":"true"}):null,a.itemRenderer&&"function"==typeof a.itemRenderer?a.itemRenderer(a,t):P&&"function"==typeof P?P(a,t):a[v]?y.a.createElement("div",{className:"tree-node-content"},y.a.createElement("span",{className:"tree-node-content-value"},H.a.getTextByDisplayField(a,m,f)),y.a.createElement("span",{className:"tree-node-content-desc"},a[v])):H.a.getTextByDisplayField(a,m,f),q&&"right"===K?y.a.createElement(F.a,{className:"button-icon button-icon-right button-loading-icon",size:"small"}):a.rightIconCls?y.a.createElement("i",{className:"button-icon button-icon-right ".concat(a.rightIconCls),"aria-hidden":"true"}):null)):null,this.renderChildren())}}]),a}(C.Component);g()(A,"SelectMode",D.a),g()(A,"Theme",M.a),A.propTypes={index:b.a.number,depth:b.a.number,path:b.a.array,theme:b.a.oneOf(H.a.enumerateValue(M.a)),selectTheme:b.a.oneOf(H.a.enumerateValue(M.a)),selectMode:b.a.oneOf(H.a.enumerateValue(D.a)),data:b.a.object,value:b.a.any,filter:b.a.string,valueField:b.a.string,displayField:b.a.string,descriptionField:b.a.string,disabled:b.a.bool,isLoading:b.a.bool,readOnly:b.a.bool,allowCollapse:b.a.bool,collapsed:b.a.bool,isNodeToggling:b.a.bool,isSelectRecursive:b.a.bool,renderer:b.a.func,collapsedIconCls:b.a.string,expandedIconCls:b.a.string,radioUncheckedIconCls:b.a.string,radioCheckedIconCls:b.a.string,checkboxUncheckedIconCls:b.a.string,checkboxCheckedIconCls:b.a.string,checkboxIndeterminateIconCls:b.a.string,onClick:b.a.func,onSelect:b.a.func,onDeselect:b.a.func,onMouseEnter:b.a.func,onMouseLeave:b.a.func,onNodeToggleStart:b.a.func,onNodeToggleEnd:b.a.func},A.defaultProps={index:0,depth:0,theme:M.a.DEFAULT,selectTheme:M.a.DEFAULT,selectMode:D.a.SINGLE_SELECT,valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,allowCollapse:!0,collapsed:!1,isNodeToggling:!1,isSelectRecursive:!1,collapsedIconCls:"fas fa-caret-right",expandedIconCls:"fas fa-caret-down",checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square"};var B=A,G=n(373),j=n(380),q=function(e){function a(e){var n,t;l()(this,a);for(var o=arguments.length,r=new Array(o>1?o-1:0),c=1;c<o;c++)r[c-1]=arguments[c];return t=s()(this,(n=i()(a)).call.apply(n,[this,e].concat(r))),g()(u()(t),"addRecursiveValue",function(e,a){if(e&&a&&(_.a.isItemChecked(e,a,t.props)||a.push(e),e.children&&!(e.children.length<1))){var n=!0,l=!1,o=void 0;try{for(var r,c=e.children[Symbol.iterator]();!(n=(r=c.next()).done);n=!0){var s=r.value;t.addRecursiveValue(s,a)}}catch(e){l=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(l)throw o}}}}),g()(u()(t),"removeRecursiveValue",function(e,a){if(e&&a){var n=_.a.getMultiSelectItemIndex(e,a,t.props);if(n>-1&&a.splice(n,1),e.children&&!(e.children.length<1)){var l=!0,o=!1,r=void 0;try{for(var c,s=e.children[Symbol.iterator]();!(l=(c=s.next()).done);l=!0){var d=c.value;t.removeRecursiveValue(d,a)}}catch(e){o=!0,r=e}finally{try{l||null==s.return||s.return()}finally{if(o)throw r}}}}}),g()(u()(t),"updateValue",function(e){var a,n=t.props,l=n.data,o=n.valueField,r=n.displayField,c=[];return H.a.postOrderTraverse(k()(l)?(a={},g()(a,V.a,!0),g()(a,"children",l),a):l,function(a){V.a in a||(!a.children||a.children.length<1?e.findIndex(function(e){return H.a.getValueByValueField(e,o,r)===H.a.getValueByValueField(a,o,r)})>-1&&c.push(a):a.children.every(function(e){return c.findIndex(function(a){return H.a.getValueByValueField(a,o,r)===H.a.getValueByValueField(e,o,r)})>-1})&&c.push(a))}),c}),g()(u()(t),"treeNodeSelectHandler",function(e,a,n){if(e){var l=t.props,o=l.selectMode,r=l.isSelectRecursive,c=t.state.value,s={};if(o===D.a.MULTI_SELECT){var d=c?c.slice():c;d&&k()(d)||(d=[]),r?(t.addRecursiveValue(e,d),d=t.updateValue(d)):d.push(e),s.value=d}else o===D.a.SINGLE_SELECT&&(s.value=e);t.setState(s,function(){var l=t.props,o=l.onNodeSelect,r=l.onChange;o&&o(e,a,n),r&&r(s.value,n)})}}),g()(u()(t),"treeNodeDeselectHandler",function(e,a,n){if(t.props.selectMode===D.a.MULTI_SELECT){var l=t.props.isSelectRecursive,o=t.state.value,r=o?o.slice():o;if(r&&k()(r))if(l)t.removeRecursiveValue(e,r),r=t.updateValue(r);else{var c=_.a.getMultiSelectItemIndex(e,r,t.props);c>-1&&r.splice(c,1)}else r=[];t.setState({value:r},function(){var l=t.props,o=l.onNodeDeselect,c=l.onChange;o&&o(e,a,n),c&&c(r,n)})}}),g()(u()(t),"nodeToggleStartHandler",function(){var e=t.props.beforeNodeToggle;e&&!1===e()||t.setState({isNodeToggling:!0})}),g()(u()(t),"nodeToggleEndHandler",function(){t.setState({isNodeToggling:!1})}),t.state={value:_.a.getInitValue(e),isNodeToggling:!1},t}return f()(a,e),r()(a,[{key:"render",value:function(){var e,a=this,n=this.props,t=n.children,l=n.className,o=n.style,r=n.theme,c=n.data,s=n.filter,d=n.allowCollapse,i=n.collapsed,p=n.collapsedIconCls,u=n.expandedIconCls,h=n.radioUncheckedIconCls,f=n.radioCheckedIconCls,m=n.checkboxUncheckedIconCls,C=n.checkboxCheckedIconCls,v=n.checkboxIndeterminateIconCls,b=n.valueField,T=n.displayField,I=n.descriptionField,E=n.disabled,N=n.isLoading,S=n.readOnly,w=n.selectMode,L=n.isSelectRecursive,P=n.renderer,F=n.onNodeClick,M=this.state,U=M.value,O=M.isNodeToggling,R=x()("tree",g()({},l,l));return y.a.createElement("div",{className:R,disabled:E,style:o,onWheel:function(e){return G.a.wheelHandler(e,a.props)}},y.a.createElement(B,{data:k()(c)?(e={},g()(e,V.a,!0),g()(e,"children",c),e):c,value:U,theme:r,valueField:b,displayField:T,descriptionField:I,filter:s,disabled:E,isLoading:N,readOnly:S,selectMode:w,renderer:P,allowCollapse:d,collapsed:i,collapsedIconCls:p,expandedIconCls:u,radioUncheckedIconCls:h,radioCheckedIconCls:f,checkboxUncheckedIconCls:m,checkboxCheckedIconCls:C,checkboxIndeterminateIconCls:v,isNodeToggling:O,isSelectRecursive:L,onClick:function(){return F&&F.apply(void 0,arguments)},onNodeToggleStart:this.nodeToggleStartHandler,onNodeToggleEnd:this.nodeToggleEndHandler,onSelect:this.treeNodeSelectHandler,onDeselect:this.treeNodeDeselectHandler}),t)}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{prevProps:e,value:_.a.getInitValue({value:j.a.getDerivedState(e,a,"value"),selectMode:e.selectMode})}}}]),a}(C.Component);g()(q,"SelectMode",D.a),g()(q,"Theme",M.a),q.propTypes={className:b.a.string,style:b.a.object,theme:b.a.oneOf(H.a.enumerateValue(M.a)),selectTheme:b.a.oneOf(H.a.enumerateValue(M.a)),selectMode:b.a.oneOf(H.a.enumerateValue(D.a)),data:b.a.oneOfType([b.a.shape({className:b.a.string,style:b.a.object,theme:b.a.oneOf(H.a.enumerateValue(M.a)),value:b.a.oneOfType([b.a.string,b.a.number]),text:b.a.oneOfType([b.a.string,b.a.number]),desc:b.a.oneOfType([b.a.string,b.a.number]),disabled:b.a.bool,isLoading:b.a.bool,iconCls:b.a.string,rightIconCls:b.a.string,title:b.a.string,children:b.a.array,itemRenderer:b.a.func,onClick:b.a.func}),b.a.array]),valueField:b.a.string,displayField:b.a.string,descriptionField:b.a.string,filter:b.a.string,disabled:b.a.bool,isLoading:b.a.bool,readOnly:b.a.bool,shouldPreventContainerScroll:b.a.bool,isSelectRecursive:b.a.bool,allowCollapse:b.a.bool,collapsed:b.a.bool,collapsedIconCls:b.a.string,expandedIconCls:b.a.string,radioUncheckedIconCls:b.a.string,radioCheckedIconCls:b.a.string,checkboxUncheckedIconCls:b.a.string,checkboxCheckedIconCls:b.a.string,checkboxIndeterminateIconCls:b.a.string,renderer:b.a.func,onNodeClick:b.a.func,onNodeSelect:b.a.func,onNodeDeselect:b.a.func,onChange:b.a.func,onWheel:b.a.func,beforeNodeToggle:b.a.func},q.defaultProps={theme:M.a.DEFAULT,selectTheme:M.a.DEFAULT,selectMode:D.a.SINGLE_SELECT,valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,shouldPreventContainerScroll:!0,isSelectRecursive:!1,allowCollapse:!0,collapsed:!1};var W=q;n.d(a,"a",function(){return W})},775:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The theme of the tree node.",default:"Theme.DEFAULT"},selectTheme:{type:"PropTypes.oneOf",desc:"The theme of the tree node select radio or checkbox.",default:"Theme.DEFAULT"},selectMode:{type:"PropTypes.oneOf",desc:"The mode of tree node.",default:"SelectMode.SINGLE_SELECT"},data:{type:"PropTypes.oneOf",desc:"Children passed into the tree node."},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},filter:{type:"PropTypes.string"},disabled:{type:"PropTypes.bool",desc:"If true, the tree will be disabled.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true, the tree will be at loading status.",default:"false"},readOnly:{type:"PropTypes.bool",default:"false"},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},isSelectRecursive:{type:"PropTypes.bool",default:"false"},allowCollapse:{type:"PropTypes.bool",default:"true"},collapsed:{type:"PropTypes.bool",default:"false"},collapsedIconCls:{type:"PropTypes.string"},expandedIconCls:{type:"PropTypes.string"},radioUncheckedIconCls:{type:"PropTypes.string"},radioCheckedIconCls:{type:"PropTypes.string"},checkboxUncheckedIconCls:{type:"PropTypes.string"},checkboxCheckedIconCls:{type:"PropTypes.string"},checkboxIndeterminateIconCls:{type:"PropTypes.string"},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},onNodeClick:{type:"PropTypes.func",desc:"Callback function fired when the tree node touch tap."},onNodeSelect:{type:"PropTypes.func",desc:"Callback function fired when the tree node selected."},onNodeDeselect:{type:"PropTypes.func",desc:"Callback function fired when the tree node deselected."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the tree changed."},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."},beforeNodeToggle:{type:"PropTypes.func"}}},776:function(e,a,n){var t=n(777);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(147)(t,l);t.locals&&(e.exports=t.locals)},777:function(e,a,n){(e.exports=n(146)(!1)).push([e.i,".tree-examples .tree-wrapper {\n  border: 1px solid #e4eaf2;\n  overflow: hidden; }\n  .tree-examples .tree-wrapper .self-define-node {\n    display: inline-block; }\n    .tree-examples .tree-wrapper .self-define-node .self-define-node-id {\n      color: #fff;\n      background: #38b1eb;\n      border-radius: 4px;\n      padding: 0 4px; }\n    .tree-examples .tree-wrapper .self-define-node .self-define-node-text {\n      margin-left: 4px;\n      margin-right: 8px; }\n    .tree-examples .tree-wrapper .self-define-node .self-define-node-desc {\n      color: #d9d9d9; }\n",""])},910:function(e,a,n){"use strict";n.r(a);var t=n(79),l=n.n(t),o=n(80),r=n.n(o),c=n(81),s=n.n(c),d=n(82),i=n.n(d),p=n(20),u=n.n(p),h=n(83),f=n.n(h),m=n(21),g=n.n(m),C=n(0),y=n.n(C),v=n(372),b=n(371),T=n(383),k=n(426),I=n(367),x=n(775),E=(n(776),function(e){function a(e){var n;return l()(this,a),n=s()(this,i()(a).call(this,e)),g()(u()(n),"nodeClickHandler",function(e){console.log("Node Clicked::",e)}),g()(u()(n),"nodeSelectHandler",function(e,a){console.log("Node Selected::",e,a)}),g()(u()(n),"changeHandler",function(e){console.log("Changed::",e)}),n.data={id:"0",text:"Root",desc:"Root",tip:"Root",children:[{id:"00",text:"Children 0 - 0",desc:"Children 0 - 0",tip:"Children 0 - 0"},{id:"01",text:"Children 0 - 1",desc:"Children 0 - 1",tip:"Children 0 - 1",children:[{id:"010",text:"Children 0 - 1 - 0",desc:"Children 0 - 1 - 0",tip:"Children 0 - 1 - 0"},{id:"011",text:"Children 0 - 1 - 1",desc:"Children 0 - 1 - 1",tip:"Children 0 - 1 - 1"},{id:"012",text:"Children 0 - 1 - 2",desc:"Children 0 - 1 - 2",tip:"Children 0 - 1 - 2"}]},{id:"02",text:"Children 0 - 2",desc:"Children 0 - 2",tip:"Children 0 - 2"}]},n.arrayData=n.data.children,n}return f()(a,e),r()(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"example tree-examples"},y.a.createElement("h2",{className:"examples-title"},"Tree"),y.a.createElement("p",null,y.a.createElement("span",null,"Tree"),"can fully display the hierarchy, and has interactive functions such as expansion, withdrawal and selection."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(v.a,null,y.a.createElement(b.a,{className:"example-header",title:"Basic"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,y.a.createElement("code",null,"Tree"),"simple example."),y.a.createElement(T.a,{className:"tree-wrapper"},y.a.createElement(k.a,{data:this.data,onNodeClick:this.nodeClickHandler,onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),y.a.createElement(v.a,null,y.a.createElement(b.a,{className:"example-header",title:"Self Define Node Renderer"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement(T.a,{className:"tree-wrapper"},y.a.createElement(k.a,{data:this.arrayData,collapsed:!0,collapsedIconCls:"far fa-plus-square",expandedIconCls:"far fa-minus-square",renderer:function(e){return y.a.createElement("div",{className:"self-define-node"},y.a.createElement("span",{className:"self-define-node-id"},e.id),y.a.createElement("span",{className:"self-define-node-text"},e.text),y.a.createElement("span",{className:"self-define-node-desc"},e.desc))},onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),y.a.createElement(v.a,null,y.a.createElement(b.a,{className:"example-header",title:"Multi Select"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement(T.a,{className:"tree-wrapper"},y.a.createElement(k.a,{selectMode:k.a.SelectMode.MULTI_SELECT,data:this.data,isSelectRecursive:!0,checkboxUncheckedIconCls:"far fa-circle",checkboxCheckedIconCls:"fas fa-check-circle",checkboxIndeterminateIconCls:"fas fa-minus-circle",onNodeSelect:this.nodeSelectHandler,onChange:this.changeHandler})))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(I.a,{data:x}))}}]),a}(C.Component));a.default=E}}]);