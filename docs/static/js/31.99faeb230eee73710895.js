(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{424:function(e,t,a){"use strict";var l=a(10),n=a.n(l),r=a(108),s=a.n(r),i=a(109),o=a.n(i),c=a(110),d=a.n(c),m=a(111),p=a.n(m),u=a(112),h=a.n(u),f=a(0),v=a.n(f),E=a(428),g=(a(425),function(e){function t(e){o()(this,t);var a=p()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),d()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));g.defaultProps={data:null},t.a=g},425:function(e,t,a){var l=a(426);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(184)(l,n);l.locals&&(e.exports=l.locals)},426:function(e,t,a){(e.exports=a(183)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},555:function(e,t,a){"use strict";var l=a(10),n=a.n(l),r=a(405),s=a.n(r),i=a(108),o=a.n(i),c=a(109),d=a.n(c),m=a(110),p=a.n(m),u=a(111),h=a.n(u),f=a(112),v=a.n(f),E=a(0),g=a.n(E),y=a(421),w=a.n(y),x=a(431),N=function(e){function t(e){var a;d()(this,t);for(var l=arguments.length,n=Array(l>1?l-1:0),r=1;r<l;r++)n[r-1]=arguments[r];var s=h()(this,(a=t.__proto__||o()(t)).call.apply(a,[this,e].concat(n)));return s.getPosition=function(e){var t=document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.scrollLeft||document.body.scrollLeft;return{x:e.clientX+a,y:e.clientY+t}},s.getElementLeft=function(e){for(var t=e.offsetLeft,a=e.offsetParent;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t},s.downHandle=function(e){return(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?s.setState({shadow:"left"}):s.setState({shadow:"right"}),!1},s.moveHandle=function(e){if(s.state.shadow){var t=e||event,a=s.getElementLeft(s.refs.sliderBox),l=s.props.width>s.getPosition(t).x-a?s.getPosition(t).x-a:s.props.width;l=l>0?l:0,s.props.ruler&&(l=s.getNearest(l)),"left"===s.state.shadow?s.setState({left:l},function(){s.changeHandle()}):s.setState({right:l},function(){s.changeHandle()})}},s.changeHandle=function(){var e=s.props,t=e.scale,a=e.decimalPlaces,l=e.width,n=s.state,r=n.left,i=n.right,o=parseFloat(r/l*(t[t.length-1]-t[0])+t[0]).toFixed(a),c=parseFloat(i/l*(t[t.length-1]-t[0])+t[0]).toFixed(a);s.props.onChange&&s.props.onChange(o,c)},s.upHandle=function(){s.setState({shadow:""})},s.overHandle=function(e){(e.srcElement?e.srcElement:e.target).getAttribute("class").indexOf("left")>-1?s.setState({tip:"left"}):s.setState({tip:"right"})},s.outHandle=function(){s.setState({tip:""})},s.clickHandle=function(e){var t=e||event,a=s.getElementLeft(s.refs.sliderBox),l=s.getPosition(t).x-a;s.props.ruler&&(l=s.getNearest(l)),Math.abs(s.state.left-l)>Math.abs(s.state.right-l)||!1===s.props.leftPoint?s.setState({right:l},function(){s.changeHandle()}):s.setState({left:l},function(){s.changeHandle()})},s.getNearest=function(e){for(var t=s.props,a=t.width,l=t.ruler,n=a,r=0,i=0;i<l;i++){var o=Math.abs(e-i*a/(l-1));o<n&&(n=o,r=i)}return r*a/(l-1)},s.state={left:0,right:0,shadow:"",tip:""},s}return v()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.setState({right:this.props.width/2}),x.a.addEvent(document,"mousemove",this.moveHandle),x.a.addEvent(document,"mouseup",this.upHandle),x.a.addEvent(this.refs.circleRight,"mouseover",this.overHandle),x.a.addEvent(this.refs.circleRight,"mouseout",this.outHandle),this.refs.circleLeft&&(x.a.addEvent(this.refs.circleLeft,"mouseover",this.overHandle),x.a.addEvent(this.refs.circleLeft,"mouseout",this.outHandle))}},{key:"componentWillUnmount",value:function(){x.a.removeEvent(document,"mousemove",this.moveHandle),x.a.removeEvent(document,"mouseup",this.upHandle),x.a.removeEvent(this.refs.circleRight,"mouseover",this.overHandle),x.a.removeEvent(this.refs.circleRight,"mouseout",this.outHandle),this.refs.circleLeft&&(x.a.removeEvent(this.refs.circleLeft,"mouseover",this.overHandle),x.a.removeEvent(this.refs.circleLeft,"mouseout",this.outHandle))}},{key:"render",value:function(){var e=this.props,t=e.leftPoint,a=e.scale,l=e.width,r=e.showScale,i=e.decimalPlaces,o=e.className,c=e.style,d=this.state,m=d.left,p=d.right,u=d.shadow,h=d.tip,f=w()("slider",s()({},o,o)),v=n()({},c,{width:l}),E={width:Math.abs(m-p),left:Math.min(m,p)},y={left:m},x={left:p},N=h||u?"":"hide",P="left"===u?"slider-shadow":"",S="right"===u?"slider-shadow":"",H=parseFloat(m/l*(a[a.length-1]-a[0])+a[0]).toFixed(i),b=parseFloat(p/l*(a[a.length-1]-a[0])+a[0]).toFixed(i);return g.a.createElement("div",{className:f,style:v},g.a.createElement("div",{ref:"sliderBox",className:"slider-box",onMouseDown:this.clickHandle},t?g.a.createElement("div",{ref:"circleLeft",className:"slider-circle slider-circle-left "+P,style:y,onMouseDown:this.downHandle}):null,g.a.createElement("div",{ref:"circleRight",className:"slider-circle slider-circle-right "+S,style:x,onMouseDown:this.downHandle}),g.a.createElement("div",{className:"slider-highlight",style:E}),"left"===u||"left"===h?g.a.createElement("div",{className:"slider-tip "+N,style:y},H):g.a.createElement("div",{className:"slider-tip "+N,style:x},b)),g.a.createElement("div",{className:"Slide-scale"},r?g.a.createElement("ul",null,a&&a.map(function(e,t){var l={left:(e-a[0])/(a[a.length-1]-a[0])*100+"%"};return g.a.createElement("li",{style:l,key:t},e)})):null))}}]),t}(E.Component);N.defaultProps={leftPoint:!1,width:300,scale:[0,100],showScale:!1,decimalPlaces:0};var P=N;a.d(t,"a",function(){return P})},670:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},leftPoint:{type:"PropTypes.bool",desc:"If true,the slider will have leftPoint.",default:"false"},width:{type:"PropTypes.number",desc:"The width of the slider.",default:"300"},scale:{type:"PropTypes.array",desc:"The size displayed on slider.",default:"[0, 100]"},showScale:{type:"PropTypes.bool",desc:"If true,the scale will have display.",default:"false"},ruler:{type:"PropTypes.number",desc:"The granularity the slider can step through values."},decimalPlaces:{type:"PropTypes.number",desc:"Decimal digits of tip.",default:"0"},onChange:{type:"PropTypes.func",desc:"Callback function fired when the slider change."}}},671:function(e,t,a){var l=a(672);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(184)(l,n);l.locals&&(e.exports=l.locals)},672:function(e,t,a){(e.exports=a(183)(!1)).push([e.i,".slider-examples .slider {\n  margin: 30px 0; }\n",""])},854:function(e,t,a){"use strict";a.r(t);var l=a(108),n=a.n(l),r=a(109),s=a.n(r),i=a(110),o=a.n(i),c=a(111),d=a.n(c),m=a(112),p=a.n(m),u=a(0),h=a.n(u),f=a(555),v=a(430),E=a(429),g=a(424),y=a(670),w=(a(671),function(e){function t(e){s()(this,t);var a=d()(this,(t.__proto__||n()(t)).call(this,e));return a.changeHandler=function(e,t){},a}return p()(t,e),o()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"example slider-examples"},h.a.createElement("h2",{className:"example-title"},"Slider"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Slider")," is an interface for users to input a value in a range. Sliders can be continuous or discrete."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(v.a,null,h.a.createElement(E.a,{className:"example-header",title:"Slider Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Slider simple default example."),h.a.createElement(f.a,null))))),h.a.createElement(v.a,null,h.a.createElement(E.a,{className:"example-header",title:"Slider Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the leftPoint property to true for display leftPoint and the ruler property for the slider step through values."),h.a.createElement(f.a,{leftPoint:!0,ruler:10}))))),h.a.createElement(v.a,null,h.a.createElement(E.a,{className:"example-header",title:"Slider Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the showScale property to true and the scale property for size displayed on slider."),h.a.createElement(f.a,{leftPoint:!0,scale:[0,50,80,100],showScale:!0}))))),h.a.createElement(v.a,null,h.a.createElement(E.a,{className:"example-header",title:"Slider Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the decimalPlaces property for the decimal digits of tip."),h.a.createElement(f.a,{leftPoint:!1,scale:[2,5,7,10],showScale:!0,decimalPlaces:2}))))),h.a.createElement(v.a,null,h.a.createElement(E.a,{className:"example-header",title:"Slider Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the width property for reset the slider width."),h.a.createElement(f.a,{leftPoint:!0,scale:[0,5,8,10],showScale:!0,decimalPlaces:1,width:600,tip:!0,onChange:this.changeHandler}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(g.a,{data:y}))}}]),t}(u.Component));t.default=w}}]);