"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[1125],{59141:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=a},46995:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".hue-picker-examples .examples-wrapper .picked-hue-wrapper{margin-top:8px;border-top:1px solid #e4eaf2;padding-top:8px}.hue-picker-examples .examples-wrapper .picked-hue{display:inline-block;margin-right:16px;vertical-align:bottom}.hue-picker-examples .examples-wrapper .picked-hue-value{display:inline-block;line-height:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.hue-picker-examples .examples-wrapper .hue-select-scroller-wrapper{width:200px;height:200px;overflow:auto}.hue-picker-examples .examples-wrapper .hue-select-scroller-wrapper .hue-select-scroller{width:1000px;height:1000px}.hue-select-pop{width:auto !important}",""]);const o=a},1116:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(15671),a=r(43144),o=r(97326),l=r(60136),c=r(82963),s=r(61120),i=r(4942),u=r(37699),p=r(45697),h=r.n(p),f=r(82996),d=r(93379),v=r.n(d),m=r(7795),Z=r.n(m),y=r(90569),g=r.n(y),b=r(3565),k=r.n(b),E=r(19216),P=r.n(E),R=r(44589),w=r.n(R),x=r(59141),C={};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}C.styleTagTransform=w(),C.setAttributes=k(),C.insert=g().bind(null,"head"),C.domAPI=Z(),C.insertStyleElement=P(),v()(x.Z,C),x.Z&&x.Z.locals&&x.Z.locals;var M=function(e){(0,l.Z)(h,e);var t,r,p=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){var t;return(0,n.Z)(this,h),t=p.call(this,e),(0,i.Z)((0,o.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(O({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(h,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),h}(u.Component);M.propTypes={data:h().object};const S=M},88284:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(15671),a=r(43144),o=r(97326),l=r(60136),c=r(82963),s=r(61120),i=r(4942),u=r(37699),p=r(24471),h=r(50704),f=r(14474),d=r(73294),v=r(41161),m=r(1116);const Z=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"value":{"type":"PropTypes.number","desc":"hue value (deg).","default":"0"},"onChange":{"type":"PropTypes.func"}}');var y=r(44042),g=r(93379),b=r.n(g),k=r(7795),E=r.n(k),P=r(90569),R=r.n(P),w=r(3565),x=r.n(w),C=r(19216),N=r.n(C),O=r(44589),M=r.n(O),S=r(46995),B={};B.styleTagTransform=M(),B.setAttributes=x(),B.insert=R().bind(null,"head"),B.domAPI=E(),B.insertStyleElement=N(),b()(S.Z,B),S.Z&&S.Z.locals&&S.Z.locals;var T=function(e){(0,l.Z)(b,e);var t,r,g=(t=b,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function b(e){var t;return(0,n.Z)(this,b),t=g.call(this,e),(0,i.Z)((0,o.Z)(t),"changeHandler",(function(e){t.setState({hue:e})})),t.state={hue:y.Z.rgb2hsb(y.Z.hex2rgb("38b1eb"))[0]},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this.state.hue;return u.createElement("div",{className:"example hue-picker-examples"},u.createElement("h2",{className:"example-title"},"Hue Picker"),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(p.Z,null,u.createElement(h.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement(f.Z,{value:e,onChange:this.changeHandler}),u.createElement("div",{className:"picked-hue-wrapper"},u.createElement(d.Z,{className:"picked-hue",value:y.Z.rgb2hex(y.Z.hue2rgb(e))}),u.createElement("div",{className:"picked-hue-value"},e,"°")))))),u.createElement(p.Z,null,u.createElement(h.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("div",{className:"hue-select-scroller-wrapper"},u.createElement("div",{className:"hue-select-scroller"},u.createElement(v.Z,{className:"hue-select-pop",position:v.Z.Position.BOTTOM_LEFT,parentEl:document.querySelector(".hue-select-scroller-wrapper"),popupContent:u.createElement(f.Z,{value:e,scrollEl:document.querySelector(".hue-select-scroller-wrapper"),onChange:this.changeHandler})},u.createElement("div",null,u.createElement(d.Z,{className:"picked-hue",value:y.Z.rgb2hex(y.Z.hue2rgb(e))}),u.createElement("div",{className:"picked-hue-value"},e,"°"))))))))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(m.Z,{data:Z}))}}]),b}(u.Component);const D=T},73294:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(87462),a=r(45987),o=r(15671),l=r(43144),c=r(97326),s=r(60136),i=r(82963),u=r(61120),p=r(4942),h=r(37699),f=r(45697),d=r.n(f),v=r(41844),m=r.n(v),Z=["className","style","opacity","value"];var y=function(e){(0,s.Z)(d,e);var t,r,f=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;(0,o.Z)(this,d);for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return t=f.call.apply(f,[this,e].concat(n)),(0,p.Z)((0,c.Z)(t),"isHex",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return/^\#?(([0-9a-fA-F]{3})|([0-9a-fA-F]{6}))$/.test(e)})),(0,p.Z)((0,c.Z)(t),"getColor",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.value;return t.isHex(e)?"#"===e[0]?e:"#".concat(e):e})),t}return(0,l.Z)(d,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,o=e.opacity,l=(e.value,(0,a.Z)(e,Z));return h.createElement("div",(0,n.Z)({},l,{className:m()("color-block",(0,p.Z)({},t,t)),style:r}),h.createElement("div",{className:"color-block-overlay",style:{background:this.getColor(),opacity:o}}))}}]),d}(h.Component);y.propTypes={className:d().string,style:d().object,value:d().string,opacity:d().number},y.defaultProps={value:"ff0000",opacity:1};const g=y},14474:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(15671),a=r(43144),o=r(97326),l=r(60136),c=r(82963),s=r(61120),i=r(4942),u=r(37699),p=r(45697),h=r.n(p),f=r(41844),d=r.n(f),v=r(72),m=r(25299),Z=r(25681),y=r(19605);var g=function(e){(0,l.Z)(h,e);var t,r,p=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var a=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function h(e){var t;(0,n.Z)(this,h);for(var r=arguments.length,a=new Array(r>1?r-1:0),l=1;l<r;l++)a[l-1]=arguments[l];return t=p.call.apply(p,[this,e].concat(a)),(0,i.Z)((0,o.Z)(t),"calcSliderLeft",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.value;if(!e||!t.huePickerBarEl||!t.huePickerSliderEl)return 0;var r=t.huePickerBarEl.offsetWidth,n=t.huePickerSliderEl.offsetWidth,a=r-n;return e/360*a})),(0,i.Z)((0,o.Z)(t),"handleMouseDown",(function(e){t.activated=!0,t.handleChange(e.pageX)})),(0,i.Z)((0,o.Z)(t),"handleMouseMove",(function(e){t.activated&&t.handleChange(e.pageX)})),(0,i.Z)((0,o.Z)(t),"handleMouseUp",(function(){t.activated=!1})),(0,i.Z)((0,o.Z)(t),"handleChange",(function(e){var r=m.Z.getOffset(t.huePickerBarEl).left,n=t.huePickerBarEl.offsetWidth,a=t.huePickerSliderEl.offsetWidth,o=a/2,l=n-a,c=Z.Z.range(e-o-r,0,l)/l,s=Math.round(360*c);t.setState({value:s},(function(){var e=t.props.onChange;e&&e(s)}))})),t.activated=!1,t.huePickerBar=(0,u.createRef)(),t.huePickerBarEl=null,t.huePickerSlider=(0,u.createRef)(),t.huePickerSliderEl=null,t.state={value:e.value},t}return(0,a.Z)(h,[{key:"componentDidMount",value:function(){this.huePickerBarEl=this.huePickerBar&&this.huePickerBar.current,this.huePickerSliderEl=this.huePickerSlider&&this.huePickerSlider.current,v.Z.addEvent(document,"mousemove",this.handleMouseMove),v.Z.addEvent(document,"mouseup",this.handleMouseUp)}},{key:"componentWillUnmount",value:function(){v.Z.removeEvent(document,"mousemove",this.handleMouseMove),v.Z.removeEvent(document,"mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style;return u.createElement("div",{className:d()("hue-picker",(0,i.Z)({},t,t)),style:r},u.createElement("div",{ref:this.huePickerBar,className:"hue-picker-bar",onMouseDown:this.handleMouseDown},u.createElement("div",{ref:this.huePickerSlider,className:"hue-picker-slider",style:{left:this.calcSliderLeft()}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,value:Math.round(y.Z.getDerivedState(e,t,"value"))}}}]),h}(u.Component);g.propTypes={className:h().string,style:h().object,value:h().number,onChange:h().func},g.defaultProps={value:0};const b=g},41161:(e,t,r)=>{r.d(t,{Z:()=>P});var n=r(87462),a=r(45987),o=r(15671),l=r(43144),c=r(97326),s=r(60136),i=r(82963),u=r(61120),p=r(4942),h=r(37699),f=r(45697),d=r.n(f),v=r(79958),m=r(23046),Z=r(87712),y=r(65248),g=r(81540),b=r(19605),k=["children","popupContent","onRequestOpen","onRequestClose"];var E=function(e){(0,s.Z)(d,e);var t,r,f=(t=d,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var a=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,i.Z)(this,e)});function d(e){var t;(0,o.Z)(this,d);for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return t=f.call.apply(f,[this,e].concat(n)),(0,p.Z)((0,c.Z)(t),"show",(function(){t.state.visible||t.setState({visible:!0},(function(){var e,r;return null===(e=(r=t.props).onRequestOpen)||void 0===e?void 0:e.call(r)}))})),(0,p.Z)((0,c.Z)(t),"hide",(function(){t.state.visible&&t.setState({visible:!1},(function(){var e,r;return null===(e=(r=t.props).onRequestClose)||void 0===e?void 0:e.call(r)}))})),(0,p.Z)((0,c.Z)(t),"toggle",(function(){t.setState({visible:!t.state.visible},(function(){var e,r,n,a;t.state.visible?null===(e=(r=t.props).onRequestOpen)||void 0===e||e.call(r):null===(n=(a=t.props).onRequestClose)||void 0===n||n.call(a)}))})),(0,p.Z)((0,c.Z)(t),"handleClick",(function(e){var r=t.props.children;r&&r.props&&r.props.onClick&&"function"==typeof r.props.onClick&&r.props.onClick(e),t.toggle()})),t.trigger=(0,h.createRef)(),t.triggerEl=null,t.state={visible:e.visible},t}return(0,l.Z)(d,[{key:"componentDidMount",value:function(){var e;this.triggerEl=(0,v.findDOMNode)(null===(e=this.trigger)||void 0===e?void 0:e.current)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.popupContent,o=(e.onRequestOpen,e.onRequestClose,(0,a.Z)(e,k)),l=this.state.visible;return r?h.createElement(h.Fragment,null,(0,h.cloneElement)(t,{ref:this.trigger,onClick:this.handleClick}),h.createElement(m.Z,(0,n.Z)({},o,{triggerEl:this.triggerEl,visible:l,onRequestClose:this.hide}),r)):t}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,visible:b.Z.getDerivedState(e,t,"visible")}}}]),d}(h.Component);(0,p.Z)(E,"Position",y.Z),(0,p.Z)(E,"Theme",Z.Z),E.propTypes={children:d().any,className:d().string,contentClassName:d().string,modalClassName:d().string,style:d().object,theme:d().oneOf(g.Z.enumerateValue(Z.Z)),parentEl:d().object,triggerEl:d().object,visible:d().bool,hasTriangle:d().bool,triangle:d().element,position:d().oneOf(g.Z.enumerateValue(y.Z)),isAnimated:d().bool,depth:d().number,isBlurClose:d().bool,isEscClose:d().bool,shouldFollowScroll:d().bool,scrollEl:d().object,resetPositionWait:d().number,showModal:d().bool,triggerHandler:d().func,onRender:d().func,onRendered:d().func,onDestroy:d().func,onDestroyed:d().func,onRequestOpen:d().func,onRequestClose:d().func,onWheel:d().func,popupContent:d().any},E.defaultProps={parentEl:document.body,visible:!1,hasTriangle:!0,position:y.Z.BOTTOM,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldFollowScroll:!1,resetPositionWait:250,showModal:!1};const P=E},44042:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(42982),a=r(70885),o=r(25681);const l={hue2rgb:function(e){if(o.Z.isDeg(e)){var t=e/360,r=Math.floor(6*t),n=Math.round(255*(6*t-r)),a=function(e){var t=[[255,0,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[255,0,255],[255,0,0]];return o.Z.isPerCent(e)?t[Math.floor(6*e)]:t[0]}(t);return a[(2*r+1)%3]+=n*(o.Z.isOdd(r)?-1:1),a}},rgb2hsb:function(e){if(!o.Z.isRGB(e))return null;var t=(0,a.Z)(e,3),r=t[0],l=t[1],c=t[2],s=Math.max.apply(Math,(0,n.Z)(e)),i=Math.min.apply(Math,(0,n.Z)(e)),u=0;return s===r&&l>=c?u=60*(l-c)/(s-i)+0:s===r&&l<c?u=60*(l-c)/(s-i)+360:s===l?u=60*(c-r)/(s-i)+120:s===c&&(u=60*(r-l)/(s-i)+240),[u?Math.round(u):u,0===s?0:(s-i)/s,s/255]},hsb2rgb:function(e){if(!o.Z.isHSB(e))return null;var t=(0,a.Z)(e,3),r=t[0],n=t[1],l=t[2];r=360===r?0:r;var c=Math.floor(r/60)%6,s=r/60-c,i=l*(1-n),u=l*(1-s*n),p=l*(1-(1-s)*n),h=0,f=0,d=0;switch(c){case 0:h=l,f=p,d=i;break;case 1:h=u,f=l,d=i;break;case 2:h=i,f=l,d=p;break;case 3:h=i,f=u,d=l;break;case 4:h=p,f=i,d=l;break;case 5:h=l,f=i,d=u}return[Math.round(255*h),Math.round(255*f),Math.round(255*d)]},rgb2hex:function(e){if(e&&o.Z.isRGB(e))return e.map((function(e){var t=e.toString(16);return t.length<2?"0".concat(t):t})).join("")},hex2rgb:function(e){if(o.Z.isHex(e)){var t="#"===e[0]?1:0;return[r(0),r(2),r(4)]}function r(r){return parseInt(e.slice(r+t,r+t+2),16)}}}}}]);