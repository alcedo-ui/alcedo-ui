(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5561],{18726:(t,e,n)=>{"use strict";n.d(e,{Z:()=>z});var a=n(67154),o=n.n(a),r=n(6479),s=n.n(r),i=n(34575),l=n.n(i),c=n(81506),u=n.n(c),d=n(93913),f=n.n(d),p=n(2205),h=n.n(p),b=n(78585),v=n.n(b),g=n(29754),m=n.n(g),y=n(59713),T=n.n(y),S=n(37699),C=n(45697),I=n.n(C),R=n(2782),w=n(96453),k=n(41844),O=n.n(k),E=n(47655);var x=function(t){h()(r,t);var e,n,a=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=m()(e);if(n){var o=m()(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return v()(this,t)});function r(t){var e;l()(this,r);for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return e=a.call.apply(a,[this,t].concat(o)),T()(u()(e),"handleMouseDown",(function(t){var n=e.props,a=n.data,o=n.index,r=n.onMouseDown;r&&r(a,o,t)})),T()(u()(e),"handleMouseUp",(function(t){var n=e.props,a=n.data,o=n.index,r=n.onMouseUp;r&&r(a,o,t)})),T()(u()(e),"handleClick",(function(t){var n=e.props,a=n.data,o=n.index,r=n.onClick;r&&r(a,o,t)})),e}return f()(r,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.style,a=t.index,r=t.isTabFullWidth,i=(t.data,t.activatedIndex,t.activated),l=t.draggable,c=s()(t,["className","style","index","isTabFullWidth","data","activatedIndex","activated","draggable"]),u=S.createElement(E.Z,o()({},c,{className:O()("tab-button",T()({activated:i},e,e)),style:n,container:S.createElement("div",null),disableTouchRipple:!0,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onClick:this.handleClick}));return r?u:S.createElement(R._l,{key:a,draggableId:""+a,index:a,isDragDisabled:!l},(function(t){return S.createElement("div",o()({ref:t.innerRef,className:"tab-button-wrapper",style:t.draggableStyle},t.draggableProps,t.dragHandleProps),u)}))}}]),r}(S.Component);x.propTypes={children:I().any,className:I().string,style:I().object,data:I().shape({value:I().oneOfType([I().string,I().number]),disabled:I().bool,isLoading:I().bool,disableTouchRipple:I().bool,iconCls:I().string,iconPosition:I().string,renderer:I().any,onActive:I().func}).isRequired,activatedIndex:I().number,index:I().number,activated:I().bool,isTabFullWidth:I().bool,draggable:I().bool,idField:I().string,onMouseDown:I().func,onMouseUp:I().func,onClick:I().func},x.defaultProps={activatedIndex:0,index:0,activated:!1,isTabFullWidth:!0,draggable:!1};const D=x;var B=n(65248),Z=n(5705),P=n(23279),L=n.n(P),M=n(72),N=n(33168),W=n(25681);var F=function(t){h()(r,t);var e,n,a=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=m()(e);if(n){var o=m()(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return v()(this,t)});function r(t){var e;l()(this,r);for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return e=a.call.apply(a,[this,t].concat(o)),T()(u()(e),"isTabsOverflow",(function(){if(!e.tabsEl)return!1;var t=e.tabsEl.querySelector(".tab-buttons-wrapper");return!!t&&Math.floor(e.tabsEl.offsetWidth)<Math.floor(t.offsetWidth)})),T()(u()(e),"isScrollLeftButtonDisabled",(function(t){return t<=0})),T()(u()(e),"isScrollRightButtonDisabled",(function(t){return!!e.tabsEl&&t>=e.tabsEl.scrollWidth-e.tabsEl.offsetWidth})),T()(u()(e),"getScrollerStyle",(function(){var t=N.ZP.getSize(Z.Z.HORIZONTAL);return!t||t<=0?null:{height:"calc(100% + ".concat(t,"px)"),marginBottom:-t}})),T()(u()(e),"clearTabsScrollTimeout",(function(){e.tabsScrollTimeout&&clearTimeout(e.tabsScrollTimeout)})),T()(u()(e),"handleOnTabsScroll",(function(t){e.setState({scrollLeft:t.target.scrollLeft})})),T()(u()(e),"handleTabsScroll",(function(t,n){if(e.tabsEl){var a=e.props,o=a.scrollStep,r=a.scrollInterval,s=a.keepScrollingWait;e.tabsEl.scrollLeft+=(t===B.Z.LEFT?-1:1)*o,e.setState({scrollLeft:e.tabsEl.scrollLeft}),e.clearTabsScrollTimeout(),e.tabsScrollTimeout=setTimeout((function(){e.handleTabsScroll(t,!0)}),!0===n?r:s)}})),T()(u()(e),"tabsScrollLeft",(function(t){e.handleTabsScroll(B.Z.LEFT);var n=e.props.onScrollLeftButtonMouseDown;n&&n(t)})),T()(u()(e),"tabsScrollRight",(function(t){e.handleTabsScroll(B.Z.RIGHT);var n=e.props.onScrollRightButtonMouseDown;n&&n(t)})),T()(u()(e),"handleInkBarSizeChange",(function(){if(e.tabsEl){var t=e.tabsEl.querySelectorAll(".tab-buttons .tab-button");if(t&&!(t.length<1)){var n=t[W.Z.range(e.props.activatedIndex,0,t.length-1)];n&&(n.offsetWidth!==e.state.inkBarWidth&&e.setState({inkBarWidth:n.offsetWidth}),n.offsetLeft!==e.state.inkBarOffsetLeft&&e.setState({inkBarOffsetLeft:n.offsetLeft}))}}})),T()(u()(e),"handleTabsOverflowChange",(function(){var t=e.props,n=t.isTabsOverflow,a=t.onTabsOverflowChange,o=e.isTabsOverflow();o!==n&&(o&&e.tabsEl&&e.setState({scrollLeft:e.tabsEl.scrollLeft}),a&&a(!n))})),T()(u()(e),"handleResize",L()((function(){e.handleInkBarSizeChange(),e.handleTabsOverflowChange()}),150)),e.tabs=(0,S.createRef)(),e.tabsEl=null,e.scrollLeftButton=(0,S.createRef)(),e.scrollRightButton=(0,S.createRef)(),e.tabsScrollTimeout=null,e.state={scrollLeft:0,inkBarWidth:0,inkBarOffsetLeft:0},e}return f()(r,[{key:"componentDidMount",value:function(){this.tabsEl=this.tabs&&this.tabs.current,M.Z.addEvent(window,"resize",this.handleResize),M.Z.addEvent(document,"mouseup",this.clearTabsScrollTimeout),this.handleInkBarSizeChange(),this.handleTabsOverflowChange()}},{key:"componentDidUpdate",value:function(t,e,n){this.handleInkBarSizeChange(),this.handleTabsOverflowChange()}},{key:"componentWillUnmount",value:function(){M.Z.removeEvent(window,"resize",this.handleResize),M.Z.removeEvent(document,"mouseup",this.clearTabsScrollTimeout)}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,a=t.style,r=t.isTabFullWidth,i=t.isInkBarHidden,l=t.data,c=t.activatedIndex,u=t.isTabsOverflow,d=t.draggable,f=t.idField,p=t.scrollLeftIconCls,h=t.scrollRightIconCls,b=t.onTabMouseDown,v=t.onTabMouseUp,g=t.onTabClick,m=t.onTabButtonDragStart,y=t.onTabButtonDragEnd,C=this.state,I=C.scrollLeft,k=C.inkBarWidth,E=C.inkBarOffsetLeft,x=this.getScrollerStyle();return S.createElement(R.Z5,{onDragStart:m,onDragEnd:y},S.createElement("div",{className:O()("tabs",T()({"auto-width":!r},n,n)),style:a},S.createElement("div",{ref:this.tabs,className:"tabs-scroller",style:x,onScroll:this.handleOnTabsScroll},S.createElement(R.bK,{droppableId:"droppable",direction:"horizontal"},(function(t){return S.createElement("div",o()({className:"tab-buttons-wrapper",ref:t.innerRef},t.droppableProps),S.createElement("div",{className:"tab-buttons"},l&&l.map((function(t,e){var n=t.value,a=t.renderer,i=(t.tabContentRenderer,t.onActive,s()(t,["value","renderer","tabContentRenderer","onActive"])),u=c===e;return S.createElement(D,o()({},i,{key:f&&t[f]||e,style:{width:r?"".concat(100/l.length,"%"):"auto"},data:t,value:n,index:e,isTabFullWidth:r,activated:u,draggable:d,renderer:null==a?void 0:a.bind(null,n,u),onMouseDown:b,onMouseUp:v,onClick:g}))})),t.placeholder))})),i?null:S.createElement("div",{className:"ink-bar",style:{bottom:x?0:20,width:k,transform:"translateX(".concat(E,"px)")}}),e),u?S.createElement(S.Fragment,null,S.createElement(w.Z,{ref:this.scrollLeftButton,className:"tab-button tab-scroll-left-button",iconCls:p,disabled:this.isScrollLeftButtonDisabled(I),onMouseDown:this.tabsScrollLeft}),S.createElement(w.Z,{ref:this.scrollRightButton,className:"tab-button tab-scroll-right-button",iconCls:h,disabled:this.isScrollRightButtonDisabled(I),onMouseDown:this.tabsScrollRight})):null))}}]),r}(S.Component);F.propTypes={children:I().any,className:I().string,style:I().object,data:I().arrayOf(I().shape({value:I().oneOfType([I().string,I().number]),disabled:I().bool,isLoading:I().bool,disableTouchRipple:I().bool,iconCls:I().string,iconPosition:I().string,renderer:I().any,tabContentRenderer:I().any,onActive:I().func})).isRequired,activatedIndex:I().number,isTabFullWidth:I().bool,isInkBarHidden:I().bool,isTabsOverflow:I().bool,draggable:I().bool,idField:I().string,scrollLeftIconCls:I().string,scrollRightIconCls:I().string,scrollStep:I().number,scrollInterval:I().number,keepScrollingWait:I().number,onTabClick:I().func,onTabMouseDown:I().func,onTabMouseUp:I().func,onTabsOverflowChange:I().func,onTabButtonDragStart:I().func,onTabButtonDragEnd:I().func,onScrollLeftButtonMouseDown:I().func,onScrollRightButtonMouseDown:I().func},F.defaultProps={data:[],activatedIndex:0,isTabFullWidth:!0,isInkBarHidden:!1,draggable:!1,scrollLeftIconCls:"fas fa-chevron-left",scrollRightIconCls:"fas fa-chevron-right",scrollStep:100,scrollInterval:100,keepScrollingWait:250};const j=F;var A=n(19605),U=n(81540);var q=function(t){h()(r,t);var e,n,a=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=m()(e);if(n){var o=m()(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return v()(this,t)});function r(t){var e;l()(this,r);for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return e=a.call.apply(a,[this,t].concat(o)),T()(u()(e),"getRenderer",(function(t){return t&&t.tabContentRenderer?"function"==typeof t.tabContentRenderer?t.tabContentRenderer(t):t.tabContentRenderer:null})),T()(u()(e),"handleTabClick",(function(t,n,a){var o=e.props.onTabClick;if(o&&o(t,n,a),n!==e.state.activatedIndex){var r=e.props.beforeIndexChange;r&&!1===r(n,t,a)||e.setState({activatedIndex:n},(function(){t.onActive&&t.onActive(t,n,a);var o=e.props.onIndexChange;o&&o(n,t,a)}))}})),T()(u()(e),"handleTabsOverflowChange",(function(t){e.setState({isTabsOverflow:t})})),T()(u()(e),"handleTabButtonDragEnd",(function(t){if(t&&"draggableId"in t&&t.source&&"index"in t.source&&t.destination&&"index"in t.destination){var n=e.state.tabs;U.Z.reorder(n,t.source.index,t.destination.index);var a=e.state.activatedIndex,o={tabs:n};a===t.source.index?o.activatedIndex=t.destination.index:a===t.destination.index?o.activatedIndex=t.source.index:a>t.source.index&&a<t.destination.index?o.activatedIndex=a-1:a<t.source.index&&a>t.destination.index&&(o.activatedIndex=a+1),e.setState(o,(function(){var a=e.props,o=a.onTabButtonDragEnd,r=a.onTabsSequenceChange;o&&o(t),r&&r(n)}))}})),e.state={tabs:t.tabs,activatedIndex:t.activatedIndex,isTabsOverflow:!1},e}return f()(r,null,[{key:"getDerivedStateFromProps",value:function(t,e){var n=A.Z.getDerivedState(t,e,"tabs");return{prevProps:t,tabs:n,activatedIndex:W.Z.range(A.Z.getDerivedState(t,e,"activatedIndex"),0,n.length-1)}}}]),f()(r,[{key:"render",value:function(){var t=this,e=this.props,n=e.children,a=e.tabsChildren,r=e.className,i=e.style,l=e.isAnimated,c=s()(e,["children","tabsChildren","className","style","isAnimated"]),u=this.state,d=u.tabs,f=u.activatedIndex,p=u.isTabsOverflow,h=100/d.length;return S.createElement("div",{className:O()("tab",T()({animated:l,"tabs-overflow":p},r,r)),style:i},S.createElement(j,o()({},c,{data:d,activatedIndex:f,isTabsOverflow:p,onTabClick:this.handleTabClick,onTabsOverflowChange:this.handleTabsOverflowChange,onTabButtonDragEnd:this.handleTabButtonDragEnd}),a),S.createElement("div",{className:"tab-content-wrapper"},l?S.createElement("div",{className:"tab-content-scroller",style:{width:"".concat(100*d.length,"%"),transform:"translate(".concat(-f*h,"%, 0)")}},d&&d.map((function(e,n){return S.createElement("div",{key:n,className:"tab-content",style:{width:"".concat(h,"%")}},t.getRenderer(e))}))):S.createElement("div",{className:"tab-content"},d&&this.getRenderer(d[f]))),n)}}]),r}(S.Component);q.propTypes={children:I().any,tabsChildren:I().any,className:I().string,style:I().object,tabs:I().arrayOf(I().shape({value:I().oneOfType([I().string,I().number]),disabled:I().bool,isLoading:I().bool,disableTouchRipple:I().bool,iconCls:I().string,iconPosition:I().string,renderer:I().any,tabContentRenderer:I().any,onActive:I().func})).isRequired,activatedIndex:I().number,isTabFullWidth:I().bool,isInkBarHidden:I().bool,isAnimated:I().bool,draggable:I().bool,idField:I().string,scrollLeftIconCls:I().string,scrollRightIconCls:I().string,scrollStep:I().number,scrollInterval:I().number,keepScrollingWait:I().number,beforeIndexChange:I().func,onIndexChange:I().func,onTabClick:I().func,onTabMouseDown:I().func,onTabMouseUp:I().func,onTabButtonDragStart:I().func,onTabButtonDragEnd:I().func,onTabsSequenceChange:I().func,onScrollLeftButtonMouseDown:I().func,onScrollRightButtonMouseDown:I().func},q.defaultProps={tabs:[],activatedIndex:0,isTabFullWidth:!0,isInkBarHidden:!1,isAnimated:!0,draggable:!1,scrollLeftIconCls:"fas fa-chevron-left",scrollRightIconCls:"fas fa-chevron-right",scrollStep:100,scrollInterval:100,keepScrollingWait:250};const z=q},229:(t,e,n)=>{"use strict";n.d(e,{Z:()=>G});var a=n(67154),o=n.n(a),r=n(6479),s=n.n(r),i=n(319),l=n.n(i),c=n(50008),u=n.n(c),d=n(34575),f=n.n(d),p=n(81506),h=n.n(p),b=n(93913),v=n.n(b),g=n(2205),m=n.n(g),y=n(78585),T=n.n(y),S=n(29754),C=n.n(S),I=n(59713),R=n.n(I),w=n(37699),k=n(45697),O=n.n(k),E=n(26256),x=n(79958),D=n(41844),B=n.n(D),Z=n(22944),P=n(77538),L=n(81540);var M=function(t){m()(o,t);var e,n,a=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=C()(e);if(n){var o=C()(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return T()(this,t)});function o(t){var e;f()(this,o);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return e=a.call.apply(a,[this,t].concat(r)),R()(h()(e),"getIconCls",(function(){switch(e.props.type){case P.Z.SUCCESS:return"fas fa-check-circle";case P.Z.WARNING:return"fas fa-exclamation-triangle";case P.Z.ERROR:return"fas fa-times-circle";default:return"fas fa-info-circle"}})),R()(h()(e),"handleClick",(function(t){var n=e.props,a=n.onRequestClose,o=n.toastsId;a&&a(o)})),e.unrenderTimeout=null,e.toast=(0,w.createRef)(),e.state={hidden:!0,leave:!1},e}return v()(o,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.toastsId,a=e.duration,o=e.onRequestClose;if(this.toast&&this.toast.current){var r=(0,x.findDOMNode)(this.toast.current);r.style.width=r.clientWidth+"px",r.style.height=r.clientHeight+"px"}a>0&&(this.unrenderTimeout=setTimeout((function(){t.setState({hidden:!0,leave:!0},(function(){setTimeout((function(){o&&o(n)}),500)}))}),a)),setTimeout((function(){t.setState({hidden:!1})}),0)}},{key:"componentWillUnmount",value:function(){this.unrenderTimeout&&clearTimeout(this.unrenderTimeout)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.style,a=t.type,o=t.message,r=t.iconCls,s=this.state,i=s.hidden,l=s.leave;return w.createElement(Z.Z,{ref:this.toast,className:B()("toast",R()({hidden:i,leave:l},e,e)),style:n,theme:a,iconCls:"".concat(r||this.getIconCls()," toast-icon"),value:o,onClick:this.handleClick})}}]),o}(w.Component);R()(M,"Type",P.Z),M.propTypes={className:O().string,style:O().object,toastsId:O().number,type:O().oneOf(L.Z.enumerateValue(P.Z)),message:O().any,iconCls:O().string,duration:O().number,onRequestClose:O().func},M.defaultProps={toastsId:0,type:P.Z.INFO,duration:2500};const N=M;var W=n(65248),F=n(50361),j=n.n(F),A=0;const U=function(){return A++},q=function(t){return t!==W.Z.BOTTOM_LEFT&&t!==W.Z.BOTTOM&&t!==W.Z.BOTTOM_RIGHT};function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(Object(n),!0).forEach((function(e){R()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _=function(t){m()(r,t);var e,n,a=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=C()(e);if(n){var o=C()(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return T()(this,t)});function r(t){var e;f()(this,r);for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return e=a.call.apply(a,[this,t].concat(o)),R()(h()(e),"addToast",(function(t){var n=e.state.toasts;q(e.props.position)?n.push(H(H({},t),{},{toastsId:U()})):n.unshift(H(H({},t),{},{toastsId:U()})),e.setState({toasts:n,visible:!0},(function(){e.popInstance&&e.popInstance.resetPosition()}))})),R()(h()(e),"removeToast",(function(t){var n=e.state.toasts;!n||n.length<1||(n.splice(n.findIndex((function(e){return e.toastsId===t})),1),e.setState({toasts:n},(function(){n.length<1&&e.setState({visible:!1},(function(){e.popInstance&&e.popInstance.resetPosition()}))})))})),e.pop=(0,w.createRef)(),e.popInstance=null,e.state={visible:!1,toasts:[]},e}return v()(r,null,[{key:"getDerivedStateFromProps",value:function(t,e){if(!t.toasts||t.toasts.length<1)return null;for(var n=j()(t.toasts),a=0,o=n.length;a<o;a++)"object"!==u()(n[a])&&(n[a]={message:n[a]}),n[a].toastsId=U();return{prevProps:t,toasts:n=q(t.position)?[].concat(l()(e.toasts),l()(n)):[].concat(l()(n.reverse()),l()(e.toasts)),visible:!0}}}]),v()(r,[{key:"componentDidMount",value:function(){this.popInstance=this.pop&&this.pop.current}},{key:"componentDidUpdate",value:function(t,e,n){if(this.props.toasts&&this.props.toasts.length>0){this.popInstance&&this.popInstance.resetPosition();var a=this.props.onToastPop;a&&a()}}},{key:"render",value:function(){var t,e=this,n=this.props,a=n.className,r=n.position,i=n.duration,l=(n.onToastPop,s()(n,["className","position","duration","onToastPop"])),c=this.state,u=c.toasts,d=c.visible;return w.createElement(E.Z,o()({},l,{ref:this.pop,className:B()("toaster",(t={},R()(t,"toaster-".concat(r),r),R()(t,a,a),t)),visible:d,position:r}),u&&u.map((function(t){return w.createElement(N,o()({},t,{key:t.toastsId,duration:"duration"in t?t.duration:i,onRequestClose:e.removeToast}))})))}}]),r}(w.Component);R()(_,"Type",P.Z),R()(_,"Position",W.Z),_.propTypes={className:O().string,style:O().object,parentEl:O().object,toasts:O().arrayOf(O().oneOfType([O().shape({className:O().string,style:O().object,type:O().oneOf(L.Z.enumerateValue(P.Z)),message:O().string,iconCls:O().string,duration:O().number}),O().string,O().number])),position:O().oneOf(L.Z.enumerateValue(W.Z)),duration:O().number,onToastPop:O().func},_.defaultProps={parentEl:document.body,position:W.Z.TOP,duration:2500};const G=_}}]);