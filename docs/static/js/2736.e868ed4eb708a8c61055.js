(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[2736],{12736:(e,n,t)=>{"use strict";t.d(n,{Z:()=>w});var l=t(6610),r=t(5991),o=t(63349),i=t(10379),c=t(46070),a=t(77608),d=t(96156),s=t(37699),u=t(45697),h=t.n(u),p=t(22122),f=t(87329),v=t(65059),g=t(96453),C=t(8628),Z=t(45580),b=t(87712),m=t(59448),y=t(43226),I=t(41844),k=t.n(I),N=t(81540),T=t(13103);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E=function(e){(0,i.Z)(h,e);var n,t,u=(n=h,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,a.Z)(n);if(t){var r=(0,a.Z)(this).constructor;e=Reflect.construct(l,arguments,r)}else e=l.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){var n;(0,l.Z)(this,h);for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return n=u.call.apply(u,[this,e].concat(r)),(0,d.Z)((0,o.Z)(n),"isNodeDisabled",(function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(null===(e=n.props.data)||void 0===e?void 0:e.isLoading)||n.props.isLoading,l=n.props,r=l.data,o=l.value,i=l.treeData,c=l.disabled,a=l.nodeDisabled;return r.disabled||c||t||null!=a&&("function"==typeof a?a(r,o,i):a)})),(0,d.Z)((0,o.Z)(n),"isCollapsed",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props,t=e.data,l=e.isNodeCollapsed,r=e.collapsed,o=e.index,i=e.depth,c=e.path;return(!t||!t[y.Z])&&(l?"function"==typeof l?l(t,o,i,c):!!l:r)})),(0,d.Z)((0,o.Z)(n),"toggleTreeNode",(function(e){e&&e.stopPropagation();var t=n.props.onNodeToggleStart;t&&t(),n.setState({collapsed:!n.state.collapsed},(function(){var e=n.props.onNodeToggleEnd;e&&e()}))})),(0,d.Z)((0,o.Z)(n),"handleCheckboxChange",(function(e){var t=n.props,l=t.data,r=t.path,o=t.value,i=t.onSelect,c=t.onDeselect;T.ZP.isNodeChecked(l,o,n.props)?c&&c(l,r,e):i&&i(l,r,e)})),(0,d.Z)((0,o.Z)(n),"handleRadioChange",(function(e){var t=n.props,l=t.data,r=t.path,o=t.onSelect;o&&o(l,r,e)})),(0,d.Z)((0,o.Z)(n),"handleClick",(function(e){var t=n.props,l=t.data,r=t.path;if(!(t.readOnly||l.readOnly||n.isNodeDisabled())){var o=n.props,i=o.selectMode,c=o.onClick;switch(c&&c(l,r,e),i){case m.Z.MULTI_SELECT:return void n.handleCheckboxChange(e);case m.Z.SINGLE_SELECT:return void n.handleRadioChange(e)}}})),(0,d.Z)((0,o.Z)(n),"renderChildren",(function(){var e=n.props,t=e.depth,l=e.path,r=e.data,o=n.state.collapsed,i=y.Z in r;return!o&&r.children&&r.children.length>0?s.createElement(s.Fragment,null,r.children.map((function(e,r){return s.createElement(h,(0,p.Z)({},n.props,{key:r,data:e,index:r,depth:t+(i?0:1),path:l?[].concat((0,f.Z)(l),[{index:r,node:e}]):[{index:r,node:e}]}))}))):null})),n.state={collapsed:n.isCollapsed(e)},n}return(0,r.Z)(h,[{key:"render",value:function(){var e,n=this.props.data;if(y.Z in n)return this.renderChildren();var t=this.props,l=t.index,r=t.depth,o=t.theme,i=t.selectTheme,c=t.selectMode,a=t.value,u=t.isLoading,h=t.allowCollapse,p=t.isSelectRecursive,f=t.indentWidth,b=t.valueField,I=t.displayField,O=t.descriptionField,E=t.collapsedIconCls,x=t.expandedIconCls,F=t.radioUncheckedIconCls,D=t.radioCheckedIconCls,L=t.checkboxUncheckedIconCls,R=t.checkboxCheckedIconCls,P=t.checkboxIndeterminateIconCls,w=t.renderer,j=t.onMouseEnter,V=t.onMouseLeave,M=this.state.collapsed,U=T.ZP.isNodeChecked(n,a,this.props),A=T.ZP.isNodeCheckedIndeterminate(n,a,this.props),B=n.isLoading||u,_=this.isNodeDisabled(B),W=n.rightIconCls&&!n.iconCls?"right":"left";return s.createElement(s.Fragment,null,s.createElement("div",{className:k()("tree-node",(e={},(0,d.Z)(e,"theme-".concat(o),o),(0,d.Z)(e,n.className,n.className),e)),style:S(S({},n.style),{},{paddingLeft:(r+1)*f}),title:n.title,disabled:_,onClick:this.handleClick,onMouseEnter:j,onMouseLeave:V},s.createElement("div",{className:"tree-node-inner"},h&&n.children&&n.children.length>0?s.createElement(g.Z,{className:"tree-node-collapse-icon",iconCls:M?n.collapsedIconCls||E:n.expandedIconCls||x,onClick:this.toggleTreeNode}):null,c===m.Z.SINGLE_SELECT&&(F||D)?s.createElement(C.Z,{className:"tree-node-select",theme:i,checked:U,disabled:_,uncheckedIconCls:n.radioUncheckedIconCls||F,checkedIconCls:n.radioCheckedIconCls||D,disableTouchRipple:!0}):null,c===m.Z.MULTI_SELECT?s.createElement(Z.Z,{className:"tree-node-select",theme:i,checked:U,indeterminate:!!p&&A,disabled:_,uncheckedIconCls:n.checkboxUncheckedIconCls||L,checkedIconCls:n.checkboxCheckedIconCls||R,indeterminateIconCls:n.checkboxIndeterminateIconCls||P,disableTouchRipple:!0}):null,B&&"left"===W?s.createElement("div",{className:"button-icon button-icon-left"},s.createElement(v.Z,{className:"button-loading-icon",size:"small"})):n.iconCls?s.createElement("i",{className:"button-icon button-icon-left ".concat(n.iconCls),"aria-hidden":"true"}):null,n.itemRenderer&&"function"==typeof n.itemRenderer?n.itemRenderer(n,l):w&&"function"==typeof w?w(n,l,r):n[O]?s.createElement("div",{className:"tree-node-content"},s.createElement("span",{className:"tree-node-content-value"},N.Z.getTextByDisplayField(n,I,b)),s.createElement("span",{className:"tree-node-content-desc"},n[O])):N.Z.getTextByDisplayField(n,I,b),B&&"right"===W?s.createElement(v.Z,{className:"button-icon button-icon-right button-loading-icon",size:"small"}):n.rightIconCls?s.createElement("i",{className:"button-icon button-icon-right ".concat(n.rightIconCls),"aria-hidden":"true"}):null)),this.renderChildren())}}]),h}(s.Component);(0,d.Z)(E,"SelectMode",m.Z),(0,d.Z)(E,"Theme",b.Z),E.propTypes={index:h().number,depth:h().number,path:h().array,theme:h().oneOf(N.Z.enumerateValue(b.Z)),selectTheme:h().oneOf(N.Z.enumerateValue(b.Z)),selectMode:h().oneOf(N.Z.enumerateValue(m.Z)),data:h().object,treeData:h().object,value:h().any,valueField:h().string,displayField:h().string,descriptionField:h().string,disabled:h().bool,nodeDisabled:h().oneOfType([h().bool,h().func]),isLoading:h().bool,readOnly:h().bool,allowCollapse:h().bool,collapsed:h().bool,isNodeToggling:h().bool,isSelectRecursive:h().bool,indentWidth:h().number,renderer:h().func,collapsedIconCls:h().string,expandedIconCls:h().string,radioUncheckedIconCls:h().string,radioCheckedIconCls:h().string,checkboxUncheckedIconCls:h().string,checkboxCheckedIconCls:h().string,checkboxIndeterminateIconCls:h().string,onClick:h().func,onSelect:h().func,onDeselect:h().func,onMouseEnter:h().func,onMouseLeave:h().func,onNodeToggleStart:h().func,onNodeToggleEnd:h().func},E.defaultProps={index:0,depth:0,theme:b.Z.DEFAULT,selectTheme:b.Z.DEFAULT,selectMode:m.Z.SINGLE_SELECT,valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,allowCollapse:!0,collapsed:!1,isNodeToggling:!1,isSelectRecursive:!1,indentWidth:20,collapsedIconCls:"fas fa-caret-right",expandedIconCls:"fas fa-caret-down",checkboxUncheckedIconCls:"far fa-square",checkboxCheckedIconCls:"fas fa-check-square",checkboxIndeterminateIconCls:"fas fa-minus-square"};const x=E;var F=t(1469),D=t.n(F),L=t(57949),R=t(19605);var P=function(e){(0,i.Z)(h,e);var n,t,u=(n=h,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,a.Z)(n);if(t){var r=(0,a.Z)(this).constructor;e=Reflect.construct(l,arguments,r)}else e=l.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){var n;(0,l.Z)(this,h);for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return n=u.call.apply(u,[this,e].concat(r)),(0,d.Z)((0,o.Z)(n),"handleTreeNodeSelect",(function(e,t,l){if(e){var r=n.props,o=r.selectMode,i=r.isSelectRecursive,c=n.state.value,a={};if(o===m.Z.MULTI_SELECT){var d=c&&D()(c)?c.slice():[];i?(T.ZP.addRecursiveValue(e,d,n.props),d=T.ZP.updateValue(d,n.props)):d.push(e),a.value=d}else o===m.Z.SINGLE_SELECT&&(a.value=e);n.setState(a,(function(){var r=n.props,o=r.onNodeSelect,i=r.onChange;o&&o(e,t,l),i&&i(a.value,l)}))}})),(0,d.Z)((0,o.Z)(n),"handleTreeNodeDeselect",(function(e,t,l){var r=n.props.selectMode;if(e&&r===m.Z.MULTI_SELECT){var o=n.props.isSelectRecursive,i=n.state.value,c=i?i.slice():i;if(c&&D()(c))if(o)T.ZP.removeRecursiveValue(e,c,n.props),c=T.ZP.updateValue(c,n.props);else{var a=L.Z.getMultiSelectItemIndex(e,c,n.props);a>-1&&c.splice(a,1)}else c=[];n.setState({value:c},(function(){var r=n.props,o=r.onNodeDeselect,i=r.onChange;o&&o(e,t,l),i&&i(c,l)}))}})),(0,d.Z)((0,o.Z)(n),"handleNodeToggleStart",(function(){var e=n.props.beforeNodeToggle;e&&!1===e()||n.setState({isNodeToggling:!0})})),(0,d.Z)((0,o.Z)(n),"handleNodeToggleEnd",(function(){n.setState({isNodeToggling:!1})})),n.state={value:L.Z.getInitValue(e),isNodeToggling:!1},n}return(0,r.Z)(h,[{key:"render",value:function(){var e,n=this.props,t=n.children,l=n.className,r=n.style,o=n.theme,i=n.data,c=n.allowCollapse,a=n.collapsed,u=n.indentWidth,h=n.collapsedIconCls,p=n.expandedIconCls,f=n.radioUncheckedIconCls,v=n.radioCheckedIconCls,g=n.checkboxUncheckedIconCls,C=n.checkboxCheckedIconCls,Z=n.checkboxIndeterminateIconCls,b=n.valueField,m=n.displayField,I=n.descriptionField,N=n.disabled,T=n.nodeDisabled,O=n.isLoading,S=n.readOnly,E=n.selectMode,F=n.isSelectRecursive,L=n.renderer,R=n.onNodeClick,P=n.isNodeCollapsed,w=this.state,j=w.value,V=w.isNodeToggling,M=D()(i)?(e={},(0,d.Z)(e,y.Z,!0),(0,d.Z)(e,"children",i),e):i;return s.createElement("div",{className:k()("tree",(0,d.Z)({},l,l)),disabled:N,style:r},s.createElement(x,{data:M,treeData:M,value:j,theme:o,valueField:b,displayField:m,descriptionField:I,disabled:N,nodeDisabled:T,isLoading:O,readOnly:S,selectMode:E,renderer:L,allowCollapse:c,collapsed:a,indentWidth:u,collapsedIconCls:h,expandedIconCls:p,radioUncheckedIconCls:f,radioCheckedIconCls:v,checkboxUncheckedIconCls:g,checkboxCheckedIconCls:C,checkboxIndeterminateIconCls:Z,isNodeToggling:V,isSelectRecursive:F,onClick:function(){return R&&R.apply(void 0,arguments)},onNodeToggleStart:this.handleNodeToggleStart,onNodeToggleEnd:this.handleNodeToggleEnd,onSelect:this.handleTreeNodeSelect,onDeselect:this.handleTreeNodeDeselect,isNodeCollapsed:P}),t)}}],[{key:"getDerivedStateFromProps",value:function(e,n){return{prevProps:e,value:L.Z.getInitValue({value:R.Z.getDerivedState(e,n,"value"),selectMode:e.selectMode})}}}]),h}(s.Component);(0,d.Z)(P,"SelectMode",m.Z),(0,d.Z)(P,"Theme",b.Z),P.propTypes={children:h().any,className:h().string,style:h().object,theme:h().oneOf(N.Z.enumerateValue(b.Z)),selectTheme:h().oneOf(N.Z.enumerateValue(b.Z)),selectMode:h().oneOf(N.Z.enumerateValue(m.Z)),data:h().oneOfType([h().shape({className:h().string,style:h().object,theme:h().oneOf(N.Z.enumerateValue(b.Z)),value:h().oneOfType([h().string,h().number]),text:h().oneOfType([h().string,h().number]),desc:h().oneOfType([h().string,h().number]),disabled:h().bool,isLoading:h().bool,iconCls:h().string,rightIconCls:h().string,title:h().string,children:h().array,itemRenderer:h().func,onClick:h().func}),h().array]),valueField:h().string,displayField:h().string,descriptionField:h().string,disabled:h().bool,nodeDisabled:h().oneOfType([h().bool,h().func]),isLoading:h().bool,readOnly:h().bool,isSelectRecursive:h().bool,allowCollapse:h().bool,collapsed:h().bool,indentWidth:h().number,collapsedIconCls:h().string,expandedIconCls:h().string,radioUncheckedIconCls:h().string,radioCheckedIconCls:h().string,checkboxUncheckedIconCls:h().string,checkboxCheckedIconCls:h().string,checkboxIndeterminateIconCls:h().string,renderer:h().func,onNodeClick:h().func,onNodeSelect:h().func,onNodeDeselect:h().func,onChange:h().func,isNodeCollapsed:h().func,beforeNodeToggle:h().func},P.defaultProps={theme:b.Z.DEFAULT,selectTheme:b.Z.DEFAULT,selectMode:m.Z.SINGLE_SELECT,valueField:"value",displayField:"text",descriptionField:"desc",disabled:!1,isLoading:!1,readOnly:!1,isSelectRecursive:!1,allowCollapse:!0,collapsed:!1,indentWidth:20};const w=P},13103:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>g});var l=t(96156),r=t(43226),o=t(1469),i=t.n(o),c=t(81540),a=t(57949);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var l=0,r=function(){};return{s:r,n:function(){return l>=e.length?{done:!0}:{done:!1,value:e[l++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw o}}}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,l=new Array(n);t<n;t++)l[t]=e[t];return l}function h(e,n,t,l){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;if(e&&!(e.length<1)&&n){var o=t.valueField,i=t.displayField;if(c.Z.getValueByValueField(e,o,i)===c.Z.getValueByValueField(n,o,i))return l?[{node:e,index:r}]:null;if(e.children&&e.children.length>0)for(var a=0,d=e.children.length;a<d;a++){var s=h(e.children[a],n,t,e,a);if(s)return l?(s.unshift({node:e,index:r}),s):s}}}function p(e,n,t,o){if(!e||!n)return e;var i=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e),a=o&&"function"==typeof o?o(e,n,t):function(e,n,t){var l,o;if(e[r.Z])return!0;var i=c.Z.getTextByDisplayField(e,t&&t.displayField||void 0,t&&t.valueField||void 0);return null==i||null===(l=i.toString())||void 0===l||null===(o=l.toUpperCase())||void 0===o?void 0:o.includes(null==n?void 0:n.toUpperCase())}(e,n,t);if((null==t||!t.dropMatchedNodeUnmatchedChildren)&&a)return i;var u=!1;if(e.children&&e.children.length>0){i.children=[];var h,f=s(e.children);try{for(f.s();!(h=f.n()).done;){var v=p(h.value,n,t,o);v&&i.children.push(v)}}catch(e){f.e(e)}finally{f.f()}i.children&&i.children.length>0&&(u=!0)}return a||u?i:null}function f(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.isSelectRecursive)return a.Z.isItemChecked(e,n,t);var l=!0;return c.Z.preOrderTraverse(e,(function(e){if(e&&(!e.children||e.children.length<1)&&!a.Z.isItemChecked(e,n,t))return l=!1,!1})),l}function v(e,n,t){if(!t.isSelectRecursive)return a.Z.isItemIndeterminate(e,n,t);var l=0,r=0;return c.Z.preOrderTraverse(e,(function(e){e&&(!e.children||e.children.length<1)&&(l++,a.Z.isItemChecked(e,n,t)&&r++)})),r>0&&r<l}const g={calDepth:function(e,n){var t=e,l=0;if(!e||!n)return 0;var r,o=s(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;if(!(i.index in t))return l;t=t[i.index].children,l++}}catch(e){o.e(e)}finally{o.f()}return t&&t.length>0?l+1:l},calPath:function(e,n,t){if(e&&n)return h(n,e,t,null)},findNodeById:function e(n,t,l){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(n){if(""+n.id==""+t)return l&&l(n,r,o),!0;if(n.children&&n.children.length>0)for(var i=0,c=n.children.length;i<c;i++)if(e(n.children[i],t,l,i,n))return}},addRecursiveValue:function e(n,t,l){if(n&&t&&(a.Z.isItemChecked(n,t,l)||t.push(n),n.children&&!(n.children.length<1))){var r,o=s(n.children);try{for(o.s();!(r=o.n()).done;)e(r.value,t,l)}catch(e){o.e(e)}finally{o.f()}}},updateValue:function(e,n){var t,o=n.data,a=n.valueField,d=n.displayField,s=[];return c.Z.postOrderTraverse(i()(o)?(t={},(0,l.Z)(t,r.Z,!0),(0,l.Z)(t,"children",o),t):o,(function(n){r.Z in n||(!n.children||n.children.length<1?e.findIndex((function(e){return c.Z.getValueByValueField(e,a,d)===c.Z.getValueByValueField(n,a,d)}))>-1&&s.push(n):n.children.every((function(e){return s.findIndex((function(n){return c.Z.getValueByValueField(n,a,d)===c.Z.getValueByValueField(e,a,d)}))>-1}))&&s.push(n))})),s},getTotalCount:function(e){var n;if(!e)return 0;var t=0;return c.Z.preOrderTraverse(i()(e)?(n={},(0,l.Z)(n,r.Z,!0),(0,l.Z)(n,"children",e),n):e,(function(e){r.Z in e||t++})),t},filterData:function(e,n,t,o){var c;if(!n||!e||e.length<1)return e;var a=i()(e),d=p(a?(c={},(0,l.Z)(c,r.Z,!0),(0,l.Z)(c,"children",e),c):e,n,t,o);return a?(null==d?void 0:d.children)||[]:d||null},isCheckedAll:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(!e||!n||n.length<1)&&f({children:i()(e)?e:[e]},n,t)},isCheckedIndeterminate:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return!(!e||!n||n.length<1)&&v({children:i()(e)?e:[e]},n,t)},isNodeChecked:f,isNodeCheckedIndeterminate:v,removeAllNode:function(e,n){var t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!n)return n;var a=o.valueField,d=o.displayField;return c.Z.preOrderTraverse(i()(e)?(t={},(0,l.Z)(t,r.Z,!0),(0,l.Z)(t,"children",e),t):e,(function(e){if(!(r.Z in e)){var t=n.findIndex((function(n){return c.Z.isValueEqual(e,n,a,d)}));-1!==t&&n.splice(t,1)}})),n},removeRecursiveValue:function e(n,t,l){if(n&&t){var r=a.Z.getMultiSelectItemIndex(n,t,l);if(r>-1&&t.splice(r,1),n.children&&!(n.children.length<1)){var o,i=s(n.children);try{for(i.s();!(o=i.n()).done;)e(o.value,t,l)}catch(e){i.e(e)}finally{i.f()}}}}}}}]);