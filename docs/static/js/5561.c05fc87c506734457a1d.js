"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5561],{18726:(t,e,n)=>{n.d(e,{Z:()=>W});var a=n(87462),o=n(45987),r=n(15671),s=n(43144),i=n(97326),l=n(60136),c=n(82963),u=n(61120),d=n(4942),f=n(37699),p=n(45697),h=n.n(p),b=n(2782),v=n(96453),g=n(41844),m=n.n(g),Z=n(47655),y=["className","style","index","isTabFullWidth","data","activatedIndex","activated","draggable"];var T=function(t){(0,l.Z)(h,t);var e,n,p=(e=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,u.Z)(e);if(n){var o=(0,u.Z)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,c.Z)(this,t)});function h(t){var e;(0,r.Z)(this,h);for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return e=p.call.apply(p,[this,t].concat(a)),(0,d.Z)((0,i.Z)(e),"handleMouseDown",(function(t){var n=e.props,a=n.data,o=n.index,r=n.onMouseDown;r&&r(a,o,t)})),(0,d.Z)((0,i.Z)(e),"handleMouseUp",(function(t){var n=e.props,a=n.data,o=n.index,r=n.onMouseUp;r&&r(a,o,t)})),(0,d.Z)((0,i.Z)(e),"handleClick",(function(t){var n=e.props,a=n.data,o=n.index,r=n.onClick;r&&r(a,o,t)})),e}return(0,s.Z)(h,[{key:"render",value:function(){var t=this.props,e=t.className,n=t.style,r=t.index,s=t.isTabFullWidth,i=(t.data,t.activatedIndex,t.activated),l=t.draggable,c=(0,o.Z)(t,y),u=f.createElement(Z.Z,(0,a.Z)({},c,{className:m()("tab-button",(0,d.Z)({activated:i},e,e)),style:n,container:f.createElement("div",null),disableTouchRipple:!0,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onClick:this.handleClick}));return s?u:f.createElement(b._l,{key:r,draggableId:""+r,index:r,isDragDisabled:!l},(function(t){return f.createElement("div",(0,a.Z)({ref:t.innerRef,className:"tab-button-wrapper",style:t.draggableStyle},t.draggableProps,t.dragHandleProps),u)}))}}]),h}(f.Component);T.propTypes={children:h().any,className:h().string,style:h().object,data:h().shape({value:h().oneOfType([h().string,h().number]),disabled:h().bool,isLoading:h().bool,disableTouchRipple:h().bool,iconCls:h().string,iconPosition:h().string,renderer:h().any,onActive:h().func}).isRequired,activatedIndex:h().number,index:h().number,activated:h().bool,isTabFullWidth:h().bool,draggable:h().bool,idField:h().string,onMouseDown:h().func,onMouseUp:h().func,onClick:h().func},T.defaultProps={activatedIndex:0,index:0,activated:!1,isTabFullWidth:!0,draggable:!1};const C=T;var I=n(65248),S=n(5705),R=n(23279),O=n.n(R),w=n(72),k=n(4798),E=n(25681),x=["value","renderer","tabContentRenderer","onActive"];var B=function(t){(0,l.Z)(h,t);var e,n,p=(e=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,u.Z)(e);if(n){var o=(0,u.Z)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,c.Z)(this,t)});function h(t){var e;(0,r.Z)(this,h);for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return e=p.call.apply(p,[this,t].concat(a)),(0,d.Z)((0,i.Z)(e),"isTabsOverflow",(function(){if(!e.tabsEl)return!1;var t=e.tabsEl.querySelector(".tab-buttons-wrapper");return!!t&&Math.floor(e.tabsEl.offsetWidth)<Math.floor(t.offsetWidth)})),(0,d.Z)((0,i.Z)(e),"isScrollLeftButtonDisabled",(function(t){return t<=0})),(0,d.Z)((0,i.Z)(e),"isScrollRightButtonDisabled",(function(t){return!!e.tabsEl&&t>=e.tabsEl.scrollWidth-e.tabsEl.offsetWidth})),(0,d.Z)((0,i.Z)(e),"getScrollerStyle",(function(){var t=k.ZP.getSize(S.Z.HORIZONTAL);return!t||t<=0?null:{height:"calc(100% + ".concat(t,"px)"),marginBottom:-t}})),(0,d.Z)((0,i.Z)(e),"clearTabsScrollTimeout",(function(){e.tabsScrollTimeout&&clearTimeout(e.tabsScrollTimeout)})),(0,d.Z)((0,i.Z)(e),"handleOnTabsScroll",(function(t){e.setState({scrollLeft:t.target.scrollLeft})})),(0,d.Z)((0,i.Z)(e),"handleTabsScroll",(function(t,n){if(e.tabsEl){var a=e.props,o=a.scrollStep,r=a.scrollInterval,s=a.keepScrollingWait;e.tabsEl.scrollLeft+=(t===I.Z.LEFT?-1:1)*o,e.setState({scrollLeft:e.tabsEl.scrollLeft}),e.clearTabsScrollTimeout(),e.tabsScrollTimeout=setTimeout((function(){e.handleTabsScroll(t,!0)}),!0===n?r:s)}})),(0,d.Z)((0,i.Z)(e),"tabsScrollLeft",(function(t){e.handleTabsScroll(I.Z.LEFT);var n=e.props.onScrollLeftButtonMouseDown;n&&n(t)})),(0,d.Z)((0,i.Z)(e),"tabsScrollRight",(function(t){e.handleTabsScroll(I.Z.RIGHT);var n=e.props.onScrollRightButtonMouseDown;n&&n(t)})),(0,d.Z)((0,i.Z)(e),"handleInkBarSizeChange",(function(){if(e.tabsEl){var t=e.tabsEl.querySelectorAll(".tab-buttons .tab-button");if(t&&!(t.length<1)){var n=t[E.Z.range(e.props.activatedIndex,0,t.length-1)];n&&(n.offsetWidth!==e.state.inkBarWidth&&e.setState({inkBarWidth:n.offsetWidth}),n.offsetLeft!==e.state.inkBarOffsetLeft&&e.setState({inkBarOffsetLeft:n.offsetLeft}))}}})),(0,d.Z)((0,i.Z)(e),"handleTabsOverflowChange",(function(){var t=e.props,n=t.isTabsOverflow,a=t.onTabsOverflowChange,o=e.isTabsOverflow();o!==n&&(o&&e.tabsEl&&e.setState({scrollLeft:e.tabsEl.scrollLeft}),a&&a(!n))})),(0,d.Z)((0,i.Z)(e),"handleResize",O()((function(){e.handleInkBarSizeChange(),e.handleTabsOverflowChange()}),150)),e.tabs=(0,f.createRef)(),e.tabsEl=null,e.scrollLeftButton=(0,f.createRef)(),e.scrollRightButton=(0,f.createRef)(),e.tabsScrollTimeout=null,e.state={scrollLeft:0,inkBarWidth:0,inkBarOffsetLeft:0},e}return(0,s.Z)(h,[{key:"componentDidMount",value:function(){this.tabsEl=this.tabs&&this.tabs.current,w.Z.addEvent(window,"resize",this.handleResize),w.Z.addEvent(document,"mouseup",this.clearTabsScrollTimeout),this.handleInkBarSizeChange(),this.handleTabsOverflowChange()}},{key:"componentDidUpdate",value:function(t,e,n){this.handleInkBarSizeChange(),this.handleTabsOverflowChange()}},{key:"componentWillUnmount",value:function(){w.Z.removeEvent(window,"resize",this.handleResize),w.Z.removeEvent(document,"mouseup",this.clearTabsScrollTimeout)}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,r=t.style,s=t.isTabFullWidth,i=t.isInkBarHidden,l=t.data,c=t.activatedIndex,u=t.isTabsOverflow,p=t.draggable,h=t.idField,g=t.scrollLeftIconCls,Z=t.scrollRightIconCls,y=t.onTabMouseDown,T=t.onTabMouseUp,I=t.onTabClick,S=t.onTabButtonDragStart,R=t.onTabButtonDragEnd,O=this.state,w=O.scrollLeft,k=O.inkBarWidth,E=O.inkBarOffsetLeft,B=this.getScrollerStyle();return f.createElement(b.Z5,{onDragStart:S,onDragEnd:R},f.createElement("div",{className:m()("tabs",(0,d.Z)({"auto-width":!s},n,n)),style:r},f.createElement("div",{ref:this.tabs,className:"tabs-scroller",style:B,onScroll:this.handleOnTabsScroll},f.createElement(b.bK,{droppableId:"droppable",direction:"horizontal"},(function(t){return f.createElement("div",(0,a.Z)({className:"tab-buttons-wrapper",ref:t.innerRef},t.droppableProps),f.createElement("div",{className:"tab-buttons"},null==l?void 0:l.map((function(t,e){var n=t.value,r=t.renderer,i=(t.tabContentRenderer,t.onActive,(0,o.Z)(t,x)),u=c===e;return f.createElement(C,(0,a.Z)({},i,{key:h&&t[h]||e,style:{width:s?"".concat(100/l.length,"%"):"auto"},data:t,value:n,index:e,isTabFullWidth:s,activated:u,draggable:p,renderer:r&&"function"==typeof r?r.bind(null,n,u):r,onMouseDown:y,onMouseUp:T,onClick:I}))})),t.placeholder))})),i?null:f.createElement("div",{className:"ink-bar",style:{bottom:B?0:20,width:k,transform:"translateX(".concat(E,"px)")}}),e),u?f.createElement(f.Fragment,null,f.createElement(v.Z,{ref:this.scrollLeftButton,className:"tab-button tab-scroll-left-button",iconCls:g,disabled:this.isScrollLeftButtonDisabled(w),onMouseDown:this.tabsScrollLeft}),f.createElement(v.Z,{ref:this.scrollRightButton,className:"tab-button tab-scroll-right-button",iconCls:Z,disabled:this.isScrollRightButtonDisabled(w),onMouseDown:this.tabsScrollRight})):null))}}]),h}(f.Component);B.propTypes={children:h().any,className:h().string,style:h().object,data:h().arrayOf(h().shape({value:h().oneOfType([h().string,h().number]),disabled:h().bool,isLoading:h().bool,disableTouchRipple:h().bool,iconCls:h().string,iconPosition:h().string,renderer:h().any,tabContentRenderer:h().any,onActive:h().func})).isRequired,activatedIndex:h().number,isTabFullWidth:h().bool,isInkBarHidden:h().bool,isTabsOverflow:h().bool,draggable:h().bool,idField:h().string,scrollLeftIconCls:h().string,scrollRightIconCls:h().string,scrollStep:h().number,scrollInterval:h().number,keepScrollingWait:h().number,onTabClick:h().func,onTabMouseDown:h().func,onTabMouseUp:h().func,onTabsOverflowChange:h().func,onTabButtonDragStart:h().func,onTabButtonDragEnd:h().func,onScrollLeftButtonMouseDown:h().func,onScrollRightButtonMouseDown:h().func},B.defaultProps={data:[],activatedIndex:0,isTabFullWidth:!0,isInkBarHidden:!1,draggable:!1,scrollLeftIconCls:"fas fa-chevron-left",scrollRightIconCls:"fas fa-chevron-right",scrollStep:100,scrollInterval:100,keepScrollingWait:250};const D=B;var P=n(19605),L=n(81540),M=["children","tabsChildren","className","style","isAnimated"];var N=function(t){(0,l.Z)(h,t);var e,n,p=(e=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,u.Z)(e);if(n){var o=(0,u.Z)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,c.Z)(this,t)});function h(t){var e;(0,r.Z)(this,h);for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return e=p.call.apply(p,[this,t].concat(a)),(0,d.Z)((0,i.Z)(e),"getRenderer",(function(t){return t&&t.tabContentRenderer?"function"==typeof t.tabContentRenderer?t.tabContentRenderer(t):t.tabContentRenderer:null})),(0,d.Z)((0,i.Z)(e),"handleTabClick",(function(t,n,a){var o=e.props.onTabClick;if(o&&o(t,n,a),n!==e.state.activatedIndex){var r=e.props.beforeIndexChange;r&&!1===r(n,t,a)||e.setState({activatedIndex:n},(function(){t.onActive&&t.onActive(t,n,a);var o=e.props.onIndexChange;o&&o(n,t,a)}))}})),(0,d.Z)((0,i.Z)(e),"handleTabsOverflowChange",(function(t){e.setState({isTabsOverflow:t})})),(0,d.Z)((0,i.Z)(e),"handleTabButtonDragEnd",(function(t){if(t&&"draggableId"in t&&t.source&&"index"in t.source&&t.destination&&"index"in t.destination){var n=e.state.tabs;L.Z.reorder(n,t.source.index,t.destination.index);var a=e.state.activatedIndex,o={tabs:n};a===t.source.index?o.activatedIndex=t.destination.index:a===t.destination.index?o.activatedIndex=t.source.index:a>t.source.index&&a<t.destination.index?o.activatedIndex=a-1:a<t.source.index&&a>t.destination.index&&(o.activatedIndex=a+1),e.setState(o,(function(){var a=e.props,o=a.onTabButtonDragEnd,r=a.onTabsSequenceChange;o&&o(t),r&&r(n)}))}})),e.state={tabs:t.tabs,activatedIndex:t.activatedIndex,isTabsOverflow:!1},e}return(0,s.Z)(h,[{key:"render",value:function(){var t=this,e=this.props,n=e.children,r=e.tabsChildren,s=e.className,i=e.style,l=e.isAnimated,c=(0,o.Z)(e,M),u=this.state,p=u.tabs,h=u.activatedIndex,b=u.isTabsOverflow,v=100/p.length;return f.createElement("div",{className:m()("tab",(0,d.Z)({animated:l,"tabs-overflow":b},s,s)),style:i},f.createElement(D,(0,a.Z)({},c,{data:p,activatedIndex:h,isTabsOverflow:b,onTabClick:this.handleTabClick,onTabsOverflowChange:this.handleTabsOverflowChange,onTabButtonDragEnd:this.handleTabButtonDragEnd}),r),f.createElement("div",{className:"tab-content-wrapper"},l?f.createElement("div",{className:"tab-content-scroller",style:{width:"".concat(100*p.length,"%"),transform:"translate(".concat(-h*v,"%, 0)")}},p&&p.map((function(e,n){return f.createElement("div",{key:n,className:"tab-content",style:{width:"".concat(v,"%")}},t.getRenderer(e))}))):f.createElement("div",{className:"tab-content"},p&&this.getRenderer(p[h]))),n)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=P.Z.getDerivedState(t,e,"tabs");return{prevProps:t,tabs:n,activatedIndex:E.Z.range(P.Z.getDerivedState(t,e,"activatedIndex"),0,n.length-1)}}}]),h}(f.Component);N.propTypes={children:h().any,tabsChildren:h().any,className:h().string,style:h().object,tabs:h().arrayOf(h().shape({value:h().oneOfType([h().string,h().number]),disabled:h().bool,isLoading:h().bool,disableTouchRipple:h().bool,iconCls:h().string,iconPosition:h().string,renderer:h().any,tabContentRenderer:h().any,onActive:h().func})).isRequired,activatedIndex:h().number,isTabFullWidth:h().bool,isInkBarHidden:h().bool,isAnimated:h().bool,draggable:h().bool,idField:h().string,scrollLeftIconCls:h().string,scrollRightIconCls:h().string,scrollStep:h().number,scrollInterval:h().number,keepScrollingWait:h().number,beforeIndexChange:h().func,onIndexChange:h().func,onTabClick:h().func,onTabMouseDown:h().func,onTabMouseUp:h().func,onTabButtonDragStart:h().func,onTabButtonDragEnd:h().func,onTabsSequenceChange:h().func,onScrollLeftButtonMouseDown:h().func,onScrollRightButtonMouseDown:h().func},N.defaultProps={tabs:[],activatedIndex:0,isTabFullWidth:!0,isInkBarHidden:!1,isAnimated:!0,draggable:!1,scrollLeftIconCls:"fas fa-chevron-left",scrollRightIconCls:"fas fa-chevron-right",scrollStep:100,scrollInterval:100,keepScrollingWait:250};const W=N},229:(t,e,n)=>{n.d(e,{Z:()=>N});var a=n(42982),o=n(71002),r=n(87462),s=n(45987),i=n(15671),l=n(43144),c=n(97326),u=n(60136),d=n(82963),f=n(61120),p=n(4942),h=n(37699),b=n(45697),v=n.n(b),g=n(26256),m=n(79958),Z=n(41844),y=n.n(Z),T=n(22944),C=n(77538),I=n(81540);var S=function(t){(0,u.Z)(o,t);var e,n,a=(e=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,f.Z)(e);if(n){var o=(0,f.Z)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,d.Z)(this,t)});function o(t){var e;(0,i.Z)(this,o);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return e=a.call.apply(a,[this,t].concat(r)),(0,p.Z)((0,c.Z)(e),"getIconCls",(function(){switch(e.props.type){case C.Z.SUCCESS:return"fas fa-check-circle";case C.Z.WARNING:return"fas fa-exclamation-triangle";case C.Z.ERROR:return"fas fa-times-circle";default:return"fas fa-info-circle"}})),(0,p.Z)((0,c.Z)(e),"handleClick",(function(t){var n=e.props,a=n.onRequestClose,o=n.toastsId;a&&a(o)})),e.unrenderTimeout=null,e.toast=(0,h.createRef)(),e.state={hidden:!0,leave:!1},e}return(0,l.Z)(o,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.toastsId,a=e.duration,o=e.onRequestClose;if(this.toast&&this.toast.current){var r=(0,m.findDOMNode)(this.toast.current);r.style.width=r.clientWidth+"px",r.style.height=r.clientHeight+"px"}a>0&&(this.unrenderTimeout=setTimeout((function(){t.setState({hidden:!0,leave:!0},(function(){setTimeout((function(){o&&o(n)}),500)}))}),a)),setTimeout((function(){t.setState({hidden:!1})}),0)}},{key:"componentWillUnmount",value:function(){this.unrenderTimeout&&clearTimeout(this.unrenderTimeout)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.style,a=t.type,o=t.message,r=t.iconCls,s=this.state,i=s.hidden,l=s.leave;return h.createElement(T.Z,{ref:this.toast,className:y()("toast",(0,p.Z)({hidden:i,leave:l},e,e)),style:n,theme:a,iconCls:"".concat(r||this.getIconCls()," toast-icon"),value:o,onClick:this.handleClick})}}]),o}(h.Component);(0,p.Z)(S,"Type",C.Z),S.propTypes={className:v().string,style:v().object,toastsId:v().number,type:v().oneOf(I.Z.enumerateValue(C.Z)),message:v().any,iconCls:v().string,duration:v().number,onRequestClose:v().func},S.defaultProps={toastsId:0,type:C.Z.INFO,duration:2500};const R=S;var O=n(65248),w=n(50361),k=n.n(w),E=0;const x=function(){return E++},B=function(t){return t!==O.Z.BOTTOM_LEFT&&t!==O.Z.BOTTOM&&t!==O.Z.BOTTOM_RIGHT};var D=["className","position","duration","onToastPop"];function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){(0,p.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var M=function(t){(0,u.Z)(v,t);var e,n,b=(e=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,a=(0,f.Z)(e);if(n){var o=(0,f.Z)(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return(0,d.Z)(this,t)});function v(t){var e;(0,i.Z)(this,v);for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return e=b.call.apply(b,[this,t].concat(a)),(0,p.Z)((0,c.Z)(e),"addToast",(function(t){var n=e.state.toasts;B(e.props.position)?n.push(L(L({},t),{},{toastsId:x()})):n.unshift(L(L({},t),{},{toastsId:x()})),e.setState({toasts:n,visible:!0},(function(){e.popInstance&&e.popInstance.resetPosition()}))})),(0,p.Z)((0,c.Z)(e),"removeToast",(function(t){var n=e.state.toasts;!n||n.length<1||(n.splice(n.findIndex((function(e){return e.toastsId===t})),1),e.setState({toasts:n},(function(){n.length<1&&e.setState({visible:!1},(function(){e.popInstance&&e.popInstance.resetPosition()}))})))})),e.pop=(0,h.createRef)(),e.popInstance=null,e.state={visible:!1,toasts:[]},e}return(0,l.Z)(v,[{key:"componentDidMount",value:function(){this.popInstance=this.pop&&this.pop.current}},{key:"componentDidUpdate",value:function(t,e,n){if(this.props.toasts&&this.props.toasts.length>0){this.popInstance&&this.popInstance.resetPosition();var a=this.props.onToastPop;a&&a()}}},{key:"render",value:function(){var t,e=this,n=this.props,a=n.className,o=n.position,i=n.duration,l=(n.onToastPop,(0,s.Z)(n,D)),c=this.state,u=c.toasts,d=c.visible;return h.createElement(g.Z,(0,r.Z)({},l,{ref:this.pop,className:y()("toaster",(t={},(0,p.Z)(t,"toaster-".concat(o),o),(0,p.Z)(t,a,a),t)),visible:d,position:o}),u&&u.map((function(t){return h.createElement(R,(0,r.Z)({},t,{key:t.toastsId,duration:"duration"in t?t.duration:i,onRequestClose:e.removeToast}))})))}}],[{key:"getDerivedStateFromProps",value:function(t,e){if(!t.toasts||t.toasts.length<1)return null;for(var n=k()(t.toasts),r=0,s=n.length;r<s;r++)"object"!==(0,o.Z)(n[r])&&(n[r]={message:n[r]}),n[r].toastsId=x();return{prevProps:t,toasts:n=B(t.position)?[].concat((0,a.Z)(e.toasts),(0,a.Z)(n)):[].concat((0,a.Z)(n.reverse()),(0,a.Z)(e.toasts)),visible:!0}}}]),v}(h.Component);(0,p.Z)(M,"Type",C.Z),(0,p.Z)(M,"Position",O.Z),M.propTypes={className:v().string,style:v().object,parentEl:v().object,toasts:v().arrayOf(v().oneOfType([v().shape({className:v().string,style:v().object,type:v().oneOf(I.Z.enumerateValue(C.Z)),message:v().string,iconCls:v().string,duration:v().number}),v().string,v().number])),position:v().oneOf(I.Z.enumerateValue(O.Z)),duration:v().number,onToastPop:v().func},M.defaultProps={parentEl:document.body,position:O.Z.TOP,duration:2500};const N=M}}]);