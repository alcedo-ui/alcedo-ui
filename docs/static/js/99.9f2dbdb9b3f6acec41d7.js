(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{230:function(e,t,a){"use strict";var r=a(50),n=a.n(r),l=a(51),i=a.n(l),s=a(19),c=a.n(s),o=a(52),u=a.n(o),d=a(53),p=a.n(d),h=a(37),f=a.n(h),m=a(9),v=a.n(m),g=a(0),y=a.n(g),b=a(91),E=a.n(b),w=a(237);a(231);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){v()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=f()(e);if(t){var n=f()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return p()(this,a)}}var O=function(e){u()(a,e);var t=S(a);function a(e){var r;return n()(this,a),r=t.call(this,e),v()(c()(r),"generateData",(function(){var e=[];if(!r.props.data)return[];for(var t in r.props.data)e.push(x({name:t},r.props.data[t]));return e})),r}return i()(a,[{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(w.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(g.Component);O.propTypes={data:E.a.object},t.a=O},231:function(e,t,a){var r=a(92),n=a(232);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}},232:function(e,t,a){"use strict";a.r(t);var r=a(54),n=a.n(r)()(!1);n.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),t.default=n},383:function(e,t,a){"use strict";a.d(t,"a",(function(){return F}));var r=a(211),n=a.n(r),l=a(93),i=a.n(l),s=a(50),c=a.n(s),o=a(51),u=a.n(o),d=a(19),p=a.n(d),h=a(52),f=a.n(h),m=a(53),v=a.n(m),g=a(37),y=a.n(g),b=a(9),E=a.n(b),w=a(0),P=a.n(w),x=a(91),S=a.n(x),O=a(226),N=a.n(O),R=a(215),D=a.n(R),j=a(250),C=a(233);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(Object(a),!0).forEach((function(t){E()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=y()(e);if(t){var n=y()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return v()(this,a)}}var L=function(e){f()(a,e);var t=k(a);function a(e){var r;c()(this,a);for(var l=arguments.length,s=new Array(l>1?l-1:0),o=1;o<l;o++)s[o-1]=arguments[o];return r=t.call.apply(t,[this,e].concat(s)),E()(p()(r),"getPosition",(function(e){var t=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.scrollLeft||document.body.scrollLeft;return{x:e.clientX+a,y:e.clientY+t}})),E()(p()(r),"getElementLeft",(function(e){if(!e)return 0;for(var t=e.offsetLeft,a=e.offsetParent;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t})),E()(p()(r),"handleDown",(function(e){if(!r.props.disabled)return(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?r.setState({shadow:"left"}):r.setState({shadow:"right"}),!1})),E()(p()(r),"throttleMove",D()((function(e){r.handleMove(e)}),16)),E()(p()(r),"handleMove",(function(e){if(r.state.shadow){var t=e||event,a=r.getPosition(t).x-r.getElementLeft(r.sliderBoxEl),n=r.props.width>a?a:r.props.width;n=n>0?n:0,r.props.ruler&&(n=r.getNearest(n));var l=r.getValueFromPosition(n).toFixed(r.props.decimalPlaces);"left"===r.state.shadow?r.setState({left:l},(function(){r.handleChange(l,r.state.right)})):r.setState({right:l},(function(){r.handleChange(r.state.left,l)}))}})),E()(p()(r),"handleChange",(function(e,t){r.props.onChange&&r.props.onChange(e,t)})),E()(p()(r),"handleUp",(function(){r.setState({shadow:""},(function(){r.props.onBlur&&r.props.onBlur(r.state.left,r.state.right)}))})),E()(p()(r),"handleOver",(function(e){(e.srcElement||e.target).getAttribute("class").indexOf("left")>-1?r.setState({tip:"left"}):r.setState({tip:"right"})})),E()(p()(r),"handleOut",(function(){r.setState({tip:""})})),E()(p()(r),"handleClick",(function(e){if(!r.props.disabled){var t=e||event,a=r.getElementLeft(r.sliderBoxEl),n=r.getPosition(t).x-a,l=r.getPositionFromValue(r.state.left,r.state.right),i=l.leftPosition,s=l.rightPosition;if(r.props.ruler&&(n=r.getNearest(n)),Math.abs(i-n)>Math.abs(s-n)||!1===r.props.leftPoint){var c=r.getValueFromPosition(n).toFixed(r.props.decimalPlaces);r.setState({right:c},(function(){r.handleChange(r.state.left,c)}))}else{var o=r.getValueFromPosition(n).toFixed(r.props.decimalPlaces);r.setState({left:o},(function(){r.handleChange(o,r.state.right)}))}}})),E()(p()(r),"getNearest",(function(e){var t=r.props,a=t.width,n=t.ruler,l=t.scale,i=r.getScaleValueAndLabel(l)[0],s=i[0],c=i[i.length-1],o=Math.round(e*(c-s)/(a*n))*n/(c-s)*a;return o>a?a:o})),E()(p()(r),"getScaleValueAndLabel",(function(e){var t=[],a=[];return e.length>0&&e.forEach((function(e){t.push("object"===i()(e)?e.value:e),a.push("object"===i()(e)?e.label:e)})),[t,a]})),E()(p()(r),"getValueFromPosition",(function(e){var t=r.props,a=t.scale,l=t.width,i=r.getScaleValueAndLabel(a),s=n()(i,1)[0];return e/l*(s[s.length-1]-s[0])+s[0]})),E()(p()(r),"getPositionFromValue",(function(e,t){var a=r.props,l=a.scale,i=a.width,s=r.getScaleValueAndLabel(l),c=n()(s,1)[0],o=Math.min(c[0],c[c.length-1]),u=Math.max(c[0],c[c.length-1]),d=parseFloat(e||c[0]),p=parseFloat(t||c[0]);return p=p>u?u:p<o?o:p,{leftPosition:((d=d>u?u:d<o?o:d)-c[0])/(c[c.length-1]-c[0])*i,rightPosition:(p-c[0])/(c[c.length-1]-c[0])*i}})),r.sliderBox=Object(w.createRef)(),r.sliderBoxEl=null,r.circleLeft=Object(w.createRef)(),r.circleRight=Object(w.createRef)(),r.state={left:e.left||0,right:e.right||0,shadow:"",tip:""},r}return u()(a,[{key:"componentDidMount",value:function(){this.sliderBoxEl=this.sliderBox&&this.sliderBox.current,j.a.addEvent(document,"mousemove",this.throttleMove),j.a.addEvent(document,"mouseup",this.handleUp),j.a.addEvent(this.circleRight.current,"mouseover",this.handleOver),j.a.addEvent(this.circleRight.current,"mouseout",this.handleOut),j.a.addEvent(this.circleLeft.current,"mouseover",this.handleOver),j.a.addEvent(this.circleLeft.current,"mouseout",this.handleOut)}},{key:"componentWillUnmount",value:function(){j.a.removeEvent(document,"mousemove",this.throttleMove),j.a.removeEvent(document,"mouseup",this.handleUp),this.circleRight&&this.circleRight.current&&(j.a.removeEvent(this.circleRight.current,"mouseover",this.handleOver),j.a.removeEvent(this.circleRight.current,"mouseout",this.handleOut)),this.circleLeft&&this.circleLeft.current&&(j.a.removeEvent(this.circleLeft.current,"mouseover",this.handleOver),j.a.removeEvent(this.circleLeft.current,"mouseout",this.handleOut))}},{key:"render",value:function(){var e=this,t=this.props,a=t.leftPoint,r=t.showScalePoint,l=t.scale,i=t.width,s=t.showScale,c=t.decimalPlaces,o=t.className,u=t.style,d=t.disabled,p=this.state,h=p.left,f=p.right,m=p.shadow,v=p.tip,g=v||m?"":"hide",y=this.getScaleValueAndLabel(l),b=n()(y,2),w=b[0],x=b[1],S=this.getPositionFromValue(h,f),O=S.leftPosition,R=S.rightPosition;return P.a.createElement("div",{className:N()("slider",E()({},o,o)),style:T(T({},u),{},{width:i})},P.a.createElement("div",{ref:this.sliderBox,className:"slider-box ".concat(d?"disabled":""),onMouseDown:this.handleClick},r?w.map((function(t){var a=(t-w[0])/(w[w.length-1]-w[0])*i,r=Math.min(O,R),n=Math.max(O,R);return(P.a.createElement("div",{className:"slider-circle fixed-circle ".concat(a<r||a>n?"disable-circle":""),style:{left:a},onMouseDown:e.handleDown}))})):null,a?P.a.createElement("div",{ref:this.circleLeft,className:"slider-circle slider-circle-left ".concat("left"===m?"slider-shadow":""," ").concat(d?"disabled":""),style:{left:O},onMouseDown:this.handleDown}):null,P.a.createElement("div",{ref:this.circleRight,className:"slider-circle slider-circle-right ".concat("right"===m?"slider-shadow":""," ").concat(d?"disabled":""),style:{left:R},onMouseDown:this.handleDown}),P.a.createElement("div",{className:"slider-highlight ".concat(d?"disabled":""),style:{width:Math.abs(O-R),left:Math.min(O,R)}}),"left"===m||"left"===v?P.a.createElement("div",{className:"slider-tip ".concat(g),style:{left:O}},parseFloat(O/i*(w[w.length-1]-w[0])+w[0]).toFixed(c)):P.a.createElement("div",{className:"slider-tip ".concat(g),style:{left:R}},parseFloat(R/i*(w[w.length-1]-w[0])+w[0]).toFixed(c))),P.a.createElement("div",{className:"Slide-scale"},s?P.a.createElement("ul",null,x&&x.map((function(e,t){return P.a.createElement("li",{key:t,style:{left:(w[t]-w[0])/(w[w.length-1]-w[0])*100+"%"}},e)}))):null))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,left:isFinite(e.left)?C.a.getDerivedState(e,t,"left"):t.left,right:isFinite(e.right)?C.a.getDerivedState(e,t,"right"):t.right}}}]),a}(w.Component);L.propTypes={className:S.a.string,style:S.a.object,disabled:S.a.bool,leftPoint:S.a.bool,width:S.a.number,scale:S.a.array,showScale:S.a.bool,showScalePoint:S.a.bool,ruler:S.a.number,decimalPlaces:S.a.number,onChange:S.a.func,onBlur:S.a.func},L.defaultProps={leftPoint:!1,showScalePoint:!1,width:300,scale:[0,100],showScale:!1,decimalPlaces:0};var F=L},517:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"disabled":{"type":"PropTypes.bool","desc":"If true,the slider will be disabled."},"leftPoint":{"type":"PropTypes.bool","desc":"If true,the slider will have leftPoint.","default":"false"},"width":{"type":"PropTypes.number","desc":"The width of the slider.","default":"300"},"scale":{"type":"PropTypes.array","desc":"The size displayed on slider.","default":"[0, 100]"},"showScale":{"type":"PropTypes.bool","desc":"If true,the scale will have display.","default":"false"},"showScalePoint":{"type":"PropTypes.bool","desc":"If true,the scale point will have display.","default":"false"},"ruler":{"type":"PropTypes.number","desc":"The granularity the slider can step through values."},"decimalPlaces":{"type":"PropTypes.number","desc":"Decimal digits of tip.","default":"0"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the slider change."},"onBlur":{"type":"PropTypes.func","desc":"Callback function fired when the slider blur."}}')},518:function(e,t,a){var r=a(92),n=a(519);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var l={insert:"head",singleton:!1};r(n,l);e.exports=n.locals||{}},519:function(e,t,a){"use strict";a.r(t);var r=a(54),n=a.n(r)()(!1);n.push([e.i,".slider-examples .slider {\n  margin: 30px 0; }\n",""]),t.default=n},734:function(e,t,a){"use strict";a.r(t);var r=a(50),n=a.n(r),l=a(51),i=a.n(l),s=a(19),c=a.n(s),o=a(52),u=a.n(o),d=a(53),p=a.n(d),h=a(37),f=a.n(h),m=a(9),v=a.n(m),g=a(0),y=a.n(g),b=a(383),E=a(246),w=a(235),P=a(236),x=a(230),S=a(517);a(518);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=f()(e);if(t){var n=f()(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return p()(this,a)}}var N=function(e){u()(a,e);var t=O(a);function a(e){var r;return n()(this,a),r=t.call(this,e),v()(c()(r),"changeHandler",(function(e,t){})),r.state={text:1},r}return i()(a,[{key:"render",value:function(){var e=this;return(y.a.createElement("div",{className:"example slider-examples"},y.a.createElement("h2",{className:"example-title"},"Slider"),y.a.createElement("p",null,"A ",y.a.createElement("span",null,"Slider")," is an interface for users to input a value in a range. Sliders can be continuous or discrete."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Slider simple default example."),y.a.createElement(b.a,{key:1,scale:[1,8],width:500,decimalPlaces:1,right:this.state.text,showScale:!0,onChange:function(t,a){e.setState({text:a})}}),y.a.createElement(E.a,{value:this.state.text,onChange:function(t){e.setState({text:t})}}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the leftPoint property to true for display leftPoint and the ruler property for the slider step through values."),y.a.createElement(b.a,{key:2,initialScale:20,scale:[20,100],width:500,ruler:10}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the showScale property to true and the scale property for size displayed on slider."),y.a.createElement(b.a,{key:3,leftPoint:!0,scale:[0,50,80,100],showScale:!0}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the decimalPlaces property for the decimal digits of tip."),y.a.createElement(b.a,{key:4,leftPoint:!0,scale:[{value:4,label:"Current"},{value:3,label:"POS 3"},{value:2,label:"POS 2"},{value:1,label:"POS 1"}],initialScale:4.31,showScale:!0,showScalePoint:!0,decimalPlaces:2}))))),y.a.createElement(w.a,null,y.a.createElement(P.a,{className:"example-header",title:"Slider Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("div",{className:"examples-wrapper"},y.a.createElement("p",null,"Set the width property for reset the slider width."),y.a.createElement(b.a,{key:5,leftPoint:!0,scale:[0,5,8,10],showScale:!0,decimalPlaces:1,width:600,tip:!0,onChange:this.changeHandler}))))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(x.a,{data:S})))}}]),a}(g.Component);t.default=N}}]);