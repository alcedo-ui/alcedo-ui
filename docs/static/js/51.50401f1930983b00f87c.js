(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{282:function(e,a,t){"use strict";var n=t(4),r=t.n(n),l=t(51),i=t.n(l),s=t(52),u=t.n(s),o=t(53),p=t.n(o),c=t(54),m=t.n(c),d=t(19),h=t.n(d),f=t(55),v=t.n(f),y=t(18),E=t.n(y),b=t(0),w=t.n(b),N=t(276),V=t.n(N),x=t(288),g=(t(283),function(e){function a(e){var t;return i()(this,a),t=p()(this,m()(a).call(this,e)),E()(h()(t),"generateData",function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(r()({name:a},t.props.data[a]));return e}),t}return v()(a,e),u()(a,[{key:"render",value:function(){return w.a.createElement("div",{className:"prop-type-desc-table-wrapper"},w.a.createElement(x.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(b.Component));g.propTypes={data:V.a.object},a.a=g},283:function(e,a,t){var n=t(284);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(107)(n,r);n.locals&&(e.exports=n.locals)},284:function(e,a,t){(e.exports=t(106)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},432:function(e,a,t){"use strict";var n=t(51),r=t.n(n),l=t(52),i=t.n(l),s=t(53),u=t.n(s),o=t(54),p=t.n(o),c=t(19),m=t.n(c),d=t(55),h=t.n(d),f=t(18),v=t.n(f),y=t(0),E=t.n(y),b=t(276),w=t.n(b),N=t(277),V=t.n(N),x=function(e){function a(e){var t,n;r()(this,a);for(var l=arguments.length,i=new Array(l>1?l-1:0),s=1;s<l;s++)i[s-1]=arguments[s];return n=u()(this,(t=p()(a)).call.apply(t,[this,e].concat(i))),v()(m()(n),"init",function(){n.animationFrameId&&cancelAnimationFrame(n.animationFrameId),n.startTime=void 0,n.initValue=n.currentValue}),v()(m()(n),"step",function(e){if(n.startTime){if(n.wrapperEl){var a=n.initValue+Math.round((n.props.value-n.initValue)*(e-n.startTime)/n.flashDuration);n.props.value<n.initValue?n.wrapperEl.innerHTML=n.currentValue=a>n.props.value?a:n.props.value:n.props.value>n.initValue&&(n.wrapperEl.innerHTML=n.currentValue=a<n.props.value?a:n.props.value)}}else n.startTime=e;n.currentValue!=n.props.value?n.animationFrameId=requestAnimationFrame(n.step):n.animationFrameId=void 0}),n.flashDuration=e.flashDuration,n.startTime,n.initValue=e.initValue,n.animationFrameId,n.currentValue=0,n.wrapper=Object(y.createRef)(),n.wrapperEl=null,n}return h()(a,e),i()(a,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,this.props.value!=this.initValue&&(this.animationFrameId=requestAnimationFrame(this.step))}},{key:"componentDidUpdate",value:function(e,a,t){e.value!==this.props.value&&(this.init(),this.animationFrameId=requestAnimationFrame(this.step)),e.flashDuration!==this.flashDuration&&(this.flashDuration=this.props.flashDuration)}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style;return E.a.createElement("span",{ref:this.wrapper,className:V()("flash-number",v()({},a,a)),style:t},this.currentValue)}}]),a}(y.Component);x.propTypes={className:w.a.string,style:w.a.object,initValue:w.a.number,value:w.a.number,flashDuration:w.a.number},x.defaultProps={initValue:0,value:0,flashDuration:450};var g=x;t.d(a,"a",function(){return g})},572:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},initValue:{type:"PropTypes.number",desc:"Initial result value.",default:"0"},value:{type:"PropTypes.number",desc:"Result value.",default:"0"},flashDuration:{type:"PropTypes.number",desc:"Animation execution time.",default:"450"}}},573:function(e,a,t){var n=t(574);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(107)(n,r);n.locals&&(e.exports=n.locals)},574:function(e,a,t){(e.exports=t(106)(!1)).push([e.i,".flash-number-examples .field-group > * {\n  display: inline-block;\n  vertical-align: middle; }\n",""])},781:function(e,a,t){"use strict";t.r(a);var n=t(51),r=t.n(n),l=t(52),i=t.n(l),s=t(53),u=t.n(s),o=t(54),p=t.n(o),c=t(19),m=t.n(c),d=t(55),h=t.n(d),f=t(18),v=t.n(f),y=t(0),E=t.n(y),b=t(301),w=t(432),N=t(287),V=t(286),x=t(282),g=t(572),T=(t(573),function(e){function a(e){var t;return r()(this,a),t=u()(this,p()(a).call(this,e)),v()(m()(t),"changeHandleValue1",function(e){t.setState({value1:e})}),v()(m()(t),"changeHandleValue2",function(e){t.setState({value2:e})}),t.state={value1:"",value2:""},t}return h()(a,e),i()(a,[{key:"render",value:function(){var e=this.state,a=e.value1,t=e.value2;return E.a.createElement("div",{className:"example flash-number-examples"},E.a.createElement("h2",{className:"example-title"},"FlashNumber"),E.a.createElement("p",null,"A ",E.a.createElement("span",null,"FlashNumber")," is a numerical calculation animation."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(N.a,null,E.a.createElement(V.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,E.a.createElement("code",null,"FlashNumber")," simple example."),E.a.createElement("div",{className:"field-group"},E.a.createElement(b.a,{type:"number",value:a,onChange:this.changeHandleValue1}),E.a.createElement("span",null,"  X 2 = "),E.a.createElement(w.a,{initValue:0,value:2*a})))))),E.a.createElement(N.a,null,E.a.createElement(V.a,{className:"example-header",title:"With flashTime"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the ",E.a.createElement("code",null,"flashTime")," property to reset animation execution time."),E.a.createElement("div",{className:"field-group"},E.a.createElement(b.a,{type:"number",value:t,onChange:this.changeHandleValue2}),E.a.createElement("span",null,"  X 3 = "),E.a.createElement(w.a,{initValue:0,flashTime:1e3,value:3*t})))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(x.a,{data:g}))}}]),a}(y.Component));a.default=T}}]);