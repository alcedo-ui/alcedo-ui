(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{384:function(e,a,t){"use strict";var n=t(6),r=t.n(n),l=t(80),i=t.n(l),s=t(81),u=t.n(s),o=t(82),c=t.n(o),p=t(83),m=t.n(p),d=t(84),h=t.n(d),v=t(11),f=t.n(v),y=t(0),E=t.n(y),b=t(1),g=t.n(b),N=t(388),V=(t(385),function(e){function a(e){var t,n;return i()(this,a),(n=c()(this,m()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(t=f()(f()(n)),n.generateData).bind(t),n}return h()(a,e),u()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(r()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return E.a.createElement("div",{className:"prop-type-desc-table-wrapper"},E.a.createElement(N.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(y.Component));V.propTypes={data:g.a.object},V.defaultProps={data:null},a.a=V},385:function(e,a,t){var n=t(386);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(150)(n,r);n.locals&&(e.exports=n.locals)},386:function(e,a,t){(e.exports=t(149)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},490:function(e,a,t){"use strict";var n=t(80),r=t.n(n),l=t(81),i=t.n(l),s=t(82),u=t.n(s),o=t(83),c=t.n(o),p=t(84),m=t.n(p),d=t(11),h=t.n(d),v=t(20),f=t.n(v),y=t(0),E=t.n(y),b=t(1),g=t.n(b),N=t(381),V=t.n(N),x=function(e){function a(e){var t,n;r()(this,a);for(var l=arguments.length,i=new Array(l>1?l-1:0),s=1;s<l;s++)i[s-1]=arguments[s];return n=u()(this,(t=c()(a)).call.apply(t,[this,e].concat(i))),f()(h()(h()(n)),"init",function(){n.animationFrameId&&cancelAnimationFrame(n.animationFrameId),n.startTime=void 0,n.initValue=n.currentValue}),f()(h()(h()(n)),"step",function(e){if(n.startTime){var a=n.initValue+Math.round((n.props.value-n.initValue)*(e-n.startTime)/n.flashDuration);n.props.value<n.initValue?n.refs.el.innerHTML=n.currentValue=a>n.props.value?a:n.props.value:n.props.value>n.initValue&&(n.refs.el.innerHTML=n.currentValue=a<n.props.value?a:n.props.value)}else n.startTime=e;n.currentValue!=n.props.value?n.animationFrameId=requestAnimationFrame(n.step):n.animationFrameId=void 0}),n.flashDuration=e.flashDuration,n.startTime,n.initValue=e.initValue,n.animationFrameId,n.currentValue=0,n}return m()(a,e),i()(a,[{key:"componentDidMount",value:function(){this.props.value!=this.initValue&&(this.animationFrameId=requestAnimationFrame(this.step))}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&(this.init(),this.animationFrameId=requestAnimationFrame(this.step)),e.flashDuration!==this.flashDuration&&(this.flashDuration=e.flashDuration)}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,n=V()("flash-number",f()({},a,a));return E.a.createElement("span",{ref:"el",className:n,style:t},this.currentValue)}}]),a}(y.Component);x.propTypes={className:g.a.string,style:g.a.object,initValue:g.a.number,value:g.a.number,flashDuration:g.a.number},x.defaultProps={initValue:0,value:0,flashDuration:450};var T=x;t.d(a,"a",function(){return T})},639:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},initValue:{type:"PropTypes.number",desc:"Initial result value.",default:"0"},value:{type:"PropTypes.number",desc:"Result value.",default:"0"},flashDuration:{type:"PropTypes.number",desc:"Animation execution time.",default:"450"}}},640:function(e,a,t){var n=t(641);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(150)(n,r);n.locals&&(e.exports=n.locals)},641:function(e,a,t){(e.exports=t(149)(!1)).push([e.i,".flash-number-examples .field-group > * {\n  display: inline-block;\n  vertical-align: middle; }\n",""])},825:function(e,a,t){"use strict";t.r(a);var n=t(80),r=t.n(n),l=t(81),i=t.n(l),s=t(82),u=t.n(s),o=t(83),c=t.n(o),p=t(84),m=t.n(p),d=t(11),h=t.n(d),v=t(20),f=t.n(v),y=t(0),E=t.n(y),b=t(394),g=t(490),N=t(390),V=t(389),x=t(384),T=t(639),D=(t(640),function(e){function a(e){var t;return r()(this,a),t=u()(this,c()(a).call(this,e)),f()(h()(h()(t)),"changeHandleValue1",function(e){t.setState({value1:e})}),f()(h()(h()(t)),"changeHandleValue2",function(e){t.setState({value2:e})}),t.state={value1:"",value2:""},t}return m()(a,e),i()(a,[{key:"render",value:function(){var e=this.state,a=e.value1,t=e.value2;return E.a.createElement("div",{className:"example flash-number-examples"},E.a.createElement("h2",{className:"example-title"},"FlashNumber"),E.a.createElement("p",null,"A ",E.a.createElement("span",null,"FlashNumber")," is a numerical calculation animation."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(N.a,null,E.a.createElement(V.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,E.a.createElement("code",null,"FlashNumber")," simple example."),E.a.createElement("div",{className:"field-group"},E.a.createElement(b.a,{type:"number",value:a,onChange:this.changeHandleValue1}),E.a.createElement("span",null,"  X 2 = "),E.a.createElement(g.a,{initValue:0,value:2*a})))))),E.a.createElement(N.a,null,E.a.createElement(V.a,{className:"example-header",title:"With flashTime"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Set the ",E.a.createElement("code",null,"flashTime")," property to reset animation execution time."),E.a.createElement("div",{className:"field-group"},E.a.createElement(b.a,{type:"number",value:t,onChange:this.changeHandleValue2}),E.a.createElement("span",null,"  X 3 = "),E.a.createElement(g.a,{initValue:0,flashTime:1e3,value:3*t})))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(x.a,{data:T}))}}]),a}(y.Component));a.default=D}}]);