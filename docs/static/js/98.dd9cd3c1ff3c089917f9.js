(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{339:function(e,t,a){"use strict";var l=a(4),n=a.n(l),r=a(57),s=a.n(r),i=a(58),c=a.n(i),o=a(59),d=a.n(o),h=a(60),p=a.n(h),m=a(19),u=a.n(m),f=a(61),v=a.n(f),E=a(0),g=a.n(E),y=a(333),w=a.n(y),x=a(345),N=(a(340),function(e){function t(e){var a,l;return s()(this,t),(l=d()(this,p()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],l.generateData=(a=u()(l),l.generateData).bind(a),l}return v()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(x.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(E.Component));N.propTypes={data:w.a.object},N.defaultProps={data:null},t.a=N},340:function(e,t,a){var l=a(341);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(128)(l,n);l.locals&&(e.exports=l.locals)},341:function(e,t,a){(e.exports=a(127)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},456:function(e,t,a){"use strict";var l=a(4),n=a.n(l),r=a(57),s=a.n(r),i=a(58),c=a.n(i),o=a(59),d=a.n(o),h=a(60),p=a.n(h),m=a(19),u=a.n(m),f=a(61),v=a.n(f),E=a(20),g=a.n(E),y=a(0),w=a.n(y),x=a(333),N=a.n(x),P=a(334),b=a.n(P),S=a(364),T=function(e){function t(e){var a,l;s()(this,t);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return l=d()(this,(a=p()(t)).call.apply(a,[this,e].concat(r))),g()(u()(l),"getPosition",function(e){var t=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.scrollLeft||document.body.scrollLeft;return{x:e.clientX+a,y:e.clientY+t}}),g()(u()(l),"getElementLeft",function(e){if(!e)return 0;for(var t=e.offsetLeft,a=e.offsetParent;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t}),g()(u()(l),"handleDown",function(e){return(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?l.setState({shadow:"left"}):l.setState({shadow:"right"}),!1}),g()(u()(l),"handleMove",function(e){if(l.state.shadow){var t=e||event,a=l.getElementLeft(l.sliderBoxEl),n=l.props.width>l.getPosition(t).x-a?l.getPosition(t).x-a:l.props.width;n=n>0?n:0,l.props.ruler&&(n=l.getNearest(n)),"left"===l.state.shadow?l.setState({left:n},function(){l.handleChange()}):l.setState({right:n},function(){l.handleChange()})}}),g()(u()(l),"handleChange",function(){var e=l.props,t=e.scale,a=e.decimalPlaces,n=e.width,r=l.state,s=r.left,i=r.right,c=parseFloat(s/n*(t[t.length-1]-t[0])+t[0]).toFixed(a),o=parseFloat(i/n*(t[t.length-1]-t[0])+t[0]).toFixed(a);l.props.onChange&&l.props.onChange(c,o)}),g()(u()(l),"handleUp",function(){l.setState({shadow:""})}),g()(u()(l),"handleOver",function(e){(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?l.setState({tip:"left"}):l.setState({tip:"right"})}),g()(u()(l),"handleOut",function(){l.setState({tip:""})}),g()(u()(l),"handleClick",function(e){var t=e||event,a=l.getElementLeft(l.sliderBoxEl),n=l.getPosition(t).x-a;l.props.ruler&&(n=l.getNearest(n)),Math.abs(l.state.left-n)>Math.abs(l.state.right-n)||!1===l.props.leftPoint?l.setState({right:n},function(){l.handleChange()}):l.setState({left:n},function(){l.handleChange()})}),g()(u()(l),"getNearest",function(e){for(var t=l.props,a=t.width,n=t.ruler,r=a,s=0,i=0;i<n;i++){var c=Math.abs(e-i*a/(n-1));c<r&&(r=c,s=i)}return s*a/(n-1)}),l.sliderBox=Object(y.createRef)(),l.sliderBoxEl=null,l.circleLeft=Object(y.createRef)(),l.circleRight=Object(y.createRef)(),l.state={left:0,right:0,shadow:"",tip:""},l}return v()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.sliderBoxEl=this.sliderBox&&this.sliderBox.current,this.setState({right:this.props.width/2}),S.a.addEvent(document,"mousemove",this.handleMove),S.a.addEvent(document,"mouseup",this.handleUp),this.circleRight&&this.circleRight.current&&(S.a.addEvent(this.circleRight.current,"mouseover",this.handleOver),S.a.addEvent(this.circleRight.current,"mouseout",this.handleOut)),this.circleLeft&&this.circleLeft.current&&(S.a.addEvent(this.circleLeft.current,"mouseover",this.handleOver),S.a.addEvent(this.circleLeft.current,"mouseout",this.handleOut))}},{key:"componentWillUnmount",value:function(){S.a.removeEvent(document,"mousemove",this.handleMove),S.a.removeEvent(document,"mouseup",this.handleUp),this.circleRight&&this.circleRight.current&&(S.a.removeEvent(this.circleRight.current,"mouseover",this.handleOver),S.a.removeEvent(this.circleRight.current,"mouseout",this.handleOut)),this.circleLeft&&this.circleLeft.current&&(S.a.removeEvent(this.circleLeft.current,"mouseover",this.handleOver),S.a.removeEvent(this.circleLeft.current,"mouseout",this.handleOut))}},{key:"render",value:function(){var e=this.props,t=e.leftPoint,a=e.scale,l=e.width,r=e.showScale,s=e.decimalPlaces,i=e.className,c=e.style,o=this.state,d=o.left,h=o.right,p=o.shadow,m=o.tip,u=m||p?"":"hide";return w.a.createElement("div",{className:b()("slider",g()({},i,i)),style:n()({},c,{width:l})},w.a.createElement("div",{ref:this.sliderBox,className:"slider-box",onMouseDown:this.handleClick},t?w.a.createElement("div",{ref:this.circleLeft,className:"slider-circle slider-circle-left ".concat("left"===p?"slider-shadow":""),style:{left:d},onMouseDown:this.handleDown}):null,w.a.createElement("div",{ref:this.circleRight,className:"slider-circle slider-circle-right ".concat("right"===p?"slider-shadow":""),style:{left:h},onMouseDown:this.handleDown}),w.a.createElement("div",{className:"slider-highlight",style:{width:Math.abs(d-h),left:Math.min(d,h)}}),"left"===p||"left"===m?w.a.createElement("div",{className:"slider-tip ".concat(u),style:{left:d}},parseFloat(d/l*(a[a.length-1]-a[0])+a[0]).toFixed(s)):w.a.createElement("div",{className:"slider-tip ".concat(u),style:{left:h}},parseFloat(h/l*(a[a.length-1]-a[0])+a[0]).toFixed(s))),w.a.createElement("div",{className:"Slide-scale"},r?w.a.createElement("ul",null,a&&a.map(function(e,t){return w.a.createElement("li",{key:t,style:{left:(e-a[0])/(a[a.length-1]-a[0])*100+"%"}},e)})):null))}}]),t}(y.Component);T.propTypes={className:N.a.string,style:N.a.object,leftPoint:N.a.bool,width:N.a.number,scale:N.a.array,showScale:N.a.bool,ruler:N.a.number,decimalPlaces:N.a.number,onChange:N.a.func},T.defaultProps={leftPoint:!1,width:300,scale:[0,100],showScale:!1,decimalPlaces:0};var C=T;a.d(t,"a",function(){return C})},618:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},leftPoint:{type:"PropTypes.bool",desc:"If true,the slider will have leftPoint.",default:"false"},width:{type:"PropTypes.number",desc:"The width of the slider.",default:"300"},scale:{type:"PropTypes.array",desc:"The size displayed on slider.",default:"[0, 100]"},showScale:{type:"PropTypes.bool",desc:"If true,the scale will have display.",default:"false"},ruler:{type:"PropTypes.number",desc:"The granularity the slider can step through values."},decimalPlaces:{type:"PropTypes.number",desc:"Decimal digits of tip.",default:"0"},onChange:{type:"PropTypes.func",desc:"Callback function fired when the slider change."}}},619:function(e,t,a){var l=a(620);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(128)(l,n);l.locals&&(e.exports=l.locals)},620:function(e,t,a){(e.exports=a(127)(!1)).push([e.i,".slider-examples .slider {\n  margin: 30px 0; }\n",""])},828:function(e,t,a){"use strict";a.r(t);var l=a(57),n=a.n(l),r=a(58),s=a.n(r),i=a(59),c=a.n(i),o=a(60),d=a.n(o),h=a(19),p=a.n(h),m=a(61),u=a.n(m),f=a(20),v=a.n(f),E=a(0),g=a.n(E),y=a(456),w=a(344),x=a(343),N=a(339),P=a(618),b=(a(619),function(e){function t(e){var a;return n()(this,t),a=c()(this,d()(t).call(this,e)),v()(p()(a),"changeHandler",function(e,t){}),a}return u()(t,e),s()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"example slider-examples"},g.a.createElement("h2",{className:"example-title"},"Slider"),g.a.createElement("p",null,"A ",g.a.createElement("span",null,"Slider")," is an interface for users to input a value in a range. Sliders can be continuous or discrete."),g.a.createElement("h2",{className:"example-title"},"Examples"),g.a.createElement(w.a,null,g.a.createElement(x.a,{className:"example-header",title:"Slider Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("p",null,"Slider simple default example."),g.a.createElement(y.a,null))))),g.a.createElement(w.a,null,g.a.createElement(x.a,{className:"example-header",title:"Slider Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("p",null,"Set the leftPoint property to true for display leftPoint and the ruler property for the slider step through values."),g.a.createElement(y.a,{leftPoint:!0,ruler:10}))))),g.a.createElement(w.a,null,g.a.createElement(x.a,{className:"example-header",title:"Slider Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("p",null,"Set the showScale property to true and the scale property for size displayed on slider."),g.a.createElement(y.a,{leftPoint:!0,scale:[0,50,80,100],showScale:!0}))))),g.a.createElement(w.a,null,g.a.createElement(x.a,{className:"example-header",title:"Slider Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("p",null,"Set the decimalPlaces property for the decimal digits of tip."),g.a.createElement(y.a,{leftPoint:!1,scale:[2,5,7,10],showScale:!0,decimalPlaces:2}))))),g.a.createElement(w.a,null,g.a.createElement(x.a,{className:"example-header",title:"Slider Example"}),g.a.createElement("div",{className:"widget-content"},g.a.createElement("div",{className:"example-content"},g.a.createElement("div",{className:"examples-wrapper"},g.a.createElement("p",null,"Set the width property for reset the slider width."),g.a.createElement(y.a,{leftPoint:!0,scale:[0,5,8,10],showScale:!0,decimalPlaces:1,width:600,tip:!0,onChange:this.changeHandler}))))),g.a.createElement("h2",{className:"example-title"},"Properties"),g.a.createElement(N.a,{data:P}))}}]),t}(E.Component));t.default=b}}]);