(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{317:function(e,a,n){"use strict";var t=n(55),l=n.n(t),i=n(56),s=n.n(i),r=n(57),o=n.n(r),c=n(58),p=n.n(c),d=n(19),m=n.n(d),u=n(59),g=n.n(u),h=n(6),f=n.n(h),E=n(0),v=n.n(E),y=n(311),b=n.n(y),x=n(323);n(318);function N(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function w(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?N(n,!0).forEach(function(a){f()(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var S=function(e){function a(e){var n;return l()(this,a),n=o()(this,p()(a).call(this,e)),f()(m()(n),"generateData",function(){var e=[];if(!n.props.data)return[];for(var a in n.props.data)e.push(w({name:a},n.props.data[a]));return e}),n}return g()(a,e),s()(a,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(x.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(E.Component);S.propTypes={data:b.a.object},a.a=S},318:function(e,a,n){var t=n(319);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(124)(t,l);t.locals&&(e.exports=t.locals)},319:function(e,a,n){(e.exports=n(123)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},375:function(e,a,n){"use strict";var t=n(315),l=n.n(t),i=n(296),s=n.n(i),r=n(55),o=n.n(r),c=n(56),p=n.n(c),d=n(57),m=n.n(d),u=n(58),g=n.n(u),h=n(19),f=n.n(h),E=n(59),v=n.n(E),y=n(6),b=n.n(y),x=n(0),N=n.n(x),w=n(311),S=n.n(w),P=n(312),L=n.n(P),T=n(329),O=n(347),k=n(328),z=n(314),C=n(316),j=n(313),D=n(324),R=function(e){function a(e){var n,t;o()(this,a);for(var l=arguments.length,i=new Array(l>1?l-1:0),s=1;s<l;s++)i[s-1]=arguments[s];return t=m()(this,(n=g()(a)).call.apply(n,[this,e].concat(i))),b()(f()(t),"handleClick",function(e){var a=t.props,n=a.disabled,l=a.isLoading,i=a.beforeChange,s=a.onClick;if(!n&&!l){s&&s(e);var r=!t.state.value,o=function(){t.setState({value:r},function(){var a=t.props.onChange;a&&a(r,e)})};i?!1!==i(r)&&o():o()}}),t.state={value:!!e.value},t}return v()(a,e),p()(a,[{key:"render",value:function(){var e,n=this.props,t=n.className,i=n.style,r=n.theme,o=n.disabled,c=n.isLoading,p=n.size,d=n.labelVisible,m=n.tip,u=n.triggerEl,g=n.parentEl,h=n.tipPosition,f=(n.beforeChange,s()(n,["className","style","theme","disabled","isLoading","size","labelVisible","tip","triggerEl","parentEl","tipPosition","beforeChange"])),E=this.state.value;return N.a.createElement(k.a,{tipContent:m,triggerEl:u,parentEl:g,position:h},N.a.createElement("div",l()({},f,{className:L()("switcher",(e={activated:E,small:p===a.Size.SMALL},b()(e,"theme-".concat(r),r),b()(e,t,t),e)),style:i,disabled:o||c,onClick:this.handleClick}),d?N.a.createElement("div",{className:"switcher-label"}):null,N.a.createElement(T.a,{className:"switcher-slider-wrapper",disableTouchRipple:o||c},N.a.createElement("div",{className:"switcher-slider"},c?N.a.createElement(O.a,null):null))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{prevProps:e,value:D.a.getDerivedState(e,a,"value")}}}]),a}(x.Component);b()(R,"Size",{DEFAULT:"",SMALL:"small"}),b()(R,"Theme",z.a),R.propTypes={className:S.a.string,style:S.a.object,theme:S.a.oneOf(j.a.enumerateValue(z.a)),value:S.a.bool,disabled:S.a.bool,isLoading:S.a.bool,labelVisible:S.a.bool,size:S.a.oneOf(j.a.enumerateValue(R.Size)),tip:S.a.string,tipPosition:S.a.oneOf(j.a.enumerateValue(C.a)),triggerEl:S.a.object,parentEl:S.a.object,onClick:S.a.func,beforeChange:S.a.func,onChange:S.a.func},R.defaultProps={theme:z.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:R.Size.DEFAULT,tipPosition:C.a.BOTTOM};var A=R;n.d(a,"a",function(){return A})},463:function(e,a,n){"use strict";var t=n(6),l=n.n(t),i=n(55),s=n.n(i),r=n(56),o=n.n(r),c=n(57),p=n.n(c),d=n(58),m=n.n(d),u=n(59),g=n.n(u),h=n(0),f=n.n(h),E=n(311),v=n.n(E),y=n(312),b=n.n(y),x=function(e){function a(e){var n,t;s()(this,a);for(var l=arguments.length,i=new Array(l>1?l-1:0),r=1;r<l;r++)i[r-1]=arguments[r];return(t=p()(this,(n=m()(a)).call.apply(n,[this,e].concat(i)))).state={spanning:e.spanning},t}return g()(a,e),o()(a,[{key:"componentWillReceiveProps",value:function(e){var a=this,n=e.spanning,t=this.props.delay;n&&t&&!isNaN(Number(t))?this.delayTimeout=setTimeout(function(){return a.setState({spanning:n})},t):this.setState({spanning:n})}},{key:"componentWillUnmount",value:function(){this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"render",value:function(){var e,a=this.props,n=a.className,t=a.style,i=a.description,s=a.size,r=a.children,o=this.state.spanning;return f.a.createElement("div",{className:b()("span-loading",(e={},l()(e,"span-loading-".concat(s),s),l()(e,n,n),e)),style:t},o?f.a.createElement("span",{className:"span-loading-dot ".concat(s||"")},f.a.createElement("i",null),f.a.createElement("i",null),f.a.createElement("i",null),f.a.createElement("i",null)):null,r,i?f.a.createElement("div",{className:"span-loading-text"},i):null)}}]),a}(h.Component);x.propTypes={children:v.a.any,className:v.a.string,style:v.a.object,spanning:v.a.bool,tip:v.a.string,size:v.a.string,delay:v.a.number,description:v.a.any},x.defaultProps={spanning:!0,tip:"",type:""};var N=x;n.d(a,"a",function(){return N})},773:function(e){e.exports=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"spanning":{"type":"PropTypes.bool","desc":"If true,will show a span loading animation.","default":"true"},"tip":{"type":"PropTypes.string","desc":"Set the tip text,there will be a description under the loading.","default":""},"size":{"type":"PropTypes.string","desc":"Set the size of loading,can use small or large."},"delay":{"type":"PropTypes.number","desc":"Set the delay time of loading animation."},"description":{"type":"PropTypes.any"}}')},774:function(e,a,n){var t=n(775);"string"==typeof t&&(t=[[e.i,t,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(124)(t,l);t.locals&&(e.exports=t.locals)},775:function(e,a,n){(e.exports=n(123)(!1)).push([e.i,".span-loading-examples .example-span-loading {\n  text-align: center;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  padding: 30px 50px;\n  margin: 20px 0;\n  position: relative; }\n\n.span-loading-examples .span-loading-nested {\n  width: 100%; }\n  .span-loading-examples .span-loading-nested .span-loading-dot {\n    position: absolute;\n    top: calc(50% - 10px);\n    left: calc(50% - 10px);\n    z-index: 60; }\n\n.span-loading-examples .span-loading-info {\n  border: 1px solid #7eccf2;\n  background-color: white;\n  padding: 20px 0;\n  position: relative;\n  width: 100%; }\n  .span-loading-examples .span-loading-info.span-loading-blur {\n    overflow: hidden;\n    opacity: .7;\n    -webkit-filter: blur(0.5px);\n            filter: blur(0.5px); }\n  .span-loading-examples .span-loading-info .span-loading-message {\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.55);\n    display: block;\n    margin-bottom: 10px; }\n  .span-loading-examples .span-loading-info .span-loading-content {\n    display: block; }\n\n.span-loading-examples .switcher-con {\n  padding: 30px 0 20px 10px; }\n  .span-loading-examples .switcher-con span {\n    float: left; }\n  .span-loading-examples .switcher-con .switcher {\n    float: left;\n    margin-left: 20px; }\n",""])},885:function(e,a,n){"use strict";n.r(a);var t=n(55),l=n.n(t),i=n(56),s=n.n(i),r=n(57),o=n.n(r),c=n(58),p=n.n(c),d=n(19),m=n.n(d),u=n(59),g=n.n(u),h=n(6),f=n.n(h),E=n(0),v=n.n(E),y=n(463),b=n(322),x=n(321),N=n(375),w=n(317),S=n(773),P=(n(774),function(e){function a(e){var n;return l()(this,a),n=o()(this,p()(a).call(this,e)),f()(m()(n),"toggle",function(e,a){n.setState(f()({},"loading".concat(a),!n.state["loading".concat(a)]))}),n.state={loading1:!1,loading2:!1},n}return g()(a,e),s()(a,[{key:"render",value:function(){var e=this,a=this.state,n=a.loading1,t=a.loading2;return v.a.createElement("div",{className:"example span-loading-examples"},v.a.createElement("h2",{className:"example-title"},"SpanLoading"),v.a.createElement("p",null,v.a.createElement("span",null,"SpanLoading")," use to show pages and blocks loading status."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"A simple SpanLoading example."),v.a.createElement(y.a,{spanning:!0})))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"With description"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"description")," property to add a description for SpanLoading."),v.a.createElement(y.a,{spanning:!0,description:"Loading..."})))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"With size"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"size")," property to small or large for different size SpanLoading."),v.a.createElement(y.a,{spanning:!0,size:"small"}),v.a.createElement(y.a,{spanning:!0}),v.a.createElement(y.a,{spanning:!0,size:"large"})))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading Inside Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Put SpanLoading inside a container."),v.a.createElement("div",{className:"example-span-loading"},v.a.createElement(y.a,{spanning:!0}))))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"SpanLoading nested Example"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"You can embed the contents directly into SpanLoading and change the existing containers to loaded states."),v.a.createElement(y.a,{spanning:n,className:"span-loading-nested"},v.a.createElement("div",{className:"span-loading-info ".concat(n?"span-loading-blur":"")},v.a.createElement("span",{className:"span-loading-message"},"Alert message title"),v.a.createElement("span",{className:"span-loading-description"},"Further details about the context of this alert."))),v.a.createElement("div",{className:"switcher-con"},v.a.createElement("span",null,"Loading state："),v.a.createElement(N.a,{value:n,onChange:function(a){e.toggle(a,1)}}))))),v.a.createElement(b.a,null,v.a.createElement(x.a,{className:"example-header",title:"With delay"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"delay")," property to delay the loading animation."),v.a.createElement(y.a,{spanning:t,delay:1e3,className:"span-loading-nested"},v.a.createElement("div",{className:"span-loading-info ".concat(t?"span-loading-blur":"")},v.a.createElement("span",{className:"span-loading-description"},"Delay the loading animation."))),v.a.createElement("div",{className:"switcher-con"},v.a.createElement("span",null,"Loading state："),v.a.createElement(N.a,{value:t,onChange:function(a){e.toggle(a,2)}}))))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(w.a,{data:S}))}}]),a}(E.Component));a.default=P}}]);