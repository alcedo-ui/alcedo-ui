(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{384:function(e,t,a){"use strict";var n=a(6),i=a.n(n),l=a(80),r=a.n(l),s=a(81),o=a.n(s),c=a(82),p=a.n(c),d=a(83),m=a.n(d),u=a(84),g=a.n(u),h=a(11),f=a.n(h),v=a(0),w=a.n(v),E=a(388),y=(a(385),function(e){function t(e){var a,n;return r()(this,t),(n=p()(this,m()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=f()(f()(n)),n.generateData).bind(a),n}return g()(t,e),o()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return w.a.createElement("div",{className:"prop-type-desc-table-wrapper"},w.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(v.Component));y.defaultProps={data:null},t.a=y},385:function(e,t,a){var n=a(386);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(150)(n,i);n.locals&&(e.exports=n.locals)},386:function(e,t,a){(e.exports=a(149)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},458:function(e,t,a){"use strict";var n=a(80),i=a.n(n),l=a(81),r=a.n(l),s=a(82),o=a.n(s),c=a(83),p=a.n(c),d=a(84),m=a.n(d),u=a(11),g=a.n(u),h=a(20),f=a.n(h),v=a(0),w=a.n(v),E=a(381),y=a.n(E),x=a(468),b=a.n(x),P=function(e){function t(e){var a,n;i()(this,t);for(var l=arguments.length,r=new Array(l>1?l-1:0),s=1;s<l;s++)r[s-1]=arguments[s];return n=o()(this,(a=p()(t)).call.apply(a,[this,e].concat(r))),f()(g()(g()(n)),"setLoading",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.loadingProgress,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e[t],i=a.width,l=a.timeout,r={};r.width=i+"%",r.transition="width "+l+"ms linear 0ms",n.setState({highlightStyle:r},function(){t<e.length-1&&(n.clearProgress(),n.progressTimeout=setTimeout(function(){n.setLoading(e,t+1)},100===i?0:l))})}),f()(g()(g()(n)),"clearProgress",function(){n.progressTimeout&&clearTimeout(n.progressTimeout)}),f()(g()(g()(n)),"enterHandler",function(){n.clearProgress(),n.setState({highlightStyle:n.defaultHighlightStyle},function(){n.setLoading()})}),f()(g()(g()(n)),"exitHandler",function(){n.clearProgress(),n.setLoading([{width:100,timeout:n.finishDuration}])}),n.progressTimeout=null,n.finishDuration=100,n.defaultHighlightStyle={width:0,transition:"width 0s"},n.state={highlightStyle:n.defaultHighlightStyle},n}return m()(t,e),r()(t,[{key:"componentWillUnmonut",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.visible,i=e.duration,l=e.showStripes,r=this.state.highlightStyle,s=y()("page-loading",f()({striped:l},t,t));return w.a.createElement(b.a,{in:n,timeout:{exit:i+this.finishDuration},classNames:"page-loading",onEnter:this.enterHandler,onExit:this.exitHandler},w.a.createElement("div",{className:s,style:a},w.a.createElement("div",{className:"page-loading-bar",style:r})))}}]),t}(v.Component);P.defaultProps={visible:!1,duration:250,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var N=P;a.d(t,"a",function(){return N})},791:function(e){e.exports={className:{type:"PropTypes.string"},style:{type:"PropTypes.object"},visible:{type:"PropTypes.bool",default:"false"},duration:{type:"PropTypes.number",default:"250"},showStripes:{type:"PropTypes.bool",default:"true"}}},792:function(e,t,a){var n=a(793);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(150)(n,i);n.locals&&(e.exports=n.locals)},793:function(e,t,a){(e.exports=a(149)(!1)).push([e.i,".page-loading-examples .example-content {\n  position: relative;\n  padding-left: 0; }\n  .page-loading-examples .example-content > p {\n    margin-left: 30px; }\n  .page-loading-examples .example-content .raised-button {\n    margin-left: 30px; }\n",""])},893:function(e,t,a){"use strict";a.r(t);var n=a(80),i=a.n(n),l=a(81),r=a.n(l),s=a(82),o=a.n(s),c=a(83),p=a.n(c),d=a(84),m=a.n(d),u=a(11),g=a.n(u),h=a(20),f=a.n(h),v=a(0),w=a.n(v),E=a(458),y=a(390),x=a(389),b=a(395),P=a(384),N=a(791),S=(a(792),function(e){function t(e){var a;return i()(this,t),a=o()(this,p()(t).call(this,e)),f()(g()(g()(a)),"showLoading",function(e){a.setState(f()({},e,!0),function(){setTimeout(function(){a.setState(f()({},e,!1))},2e3)})}),a.loadingProgress=[{width:0,timeout:0},{width:80,timeout:200},{width:99,timeout:2e3}],a.state={visible1:!1,visible2:!1,visible3:!1},a}return m()(t,e),r()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.visible1,n=t.visible2,i=t.visible3;return w.a.createElement("div",{className:"example page-loading-examples"},w.a.createElement("h2",{className:"example-title"},"PageLoading"),w.a.createElement("p",null,w.a.createElement("span",null,"PageLoading")," use to show pages and blocks loading status."),w.a.createElement("h2",{className:"example-title"},"Examples"),w.a.createElement(y.a,null,w.a.createElement(x.a,{className:"example-header",title:"PageLoading Example"}),w.a.createElement("div",{className:"widget-content"},w.a.createElement("div",{className:"example-content"},w.a.createElement("p",null,"A simple PageLoading example."),w.a.createElement(b.a,{value:"loading",onClick:function(){e.showLoading("visible1")}}),w.a.createElement(E.a,{visible:a,showStripes:!1})))),w.a.createElement(y.a,null,w.a.createElement(x.a,{className:"example-header",title:"Self Progress PageLoading Example"}),w.a.createElement("div",{className:"widget-content"},w.a.createElement("div",{className:"example-content"},w.a.createElement("p",null,"Set self loading progress on PageLoading."),w.a.createElement(b.a,{value:"loading",onClick:function(){e.showLoading("visible2")}}),w.a.createElement(E.a,{visible:n,showStripes:!1,loadingProgress:this.loadingProgress})))),w.a.createElement(y.a,null,w.a.createElement(x.a,{className:"example-header",title:"Striped PageLoading Example"}),w.a.createElement("div",{className:"widget-content"},w.a.createElement("div",{className:"example-content"},w.a.createElement("p",null,"A striped pageLoading example."),w.a.createElement(b.a,{value:"loading",onClick:function(){e.showLoading("visible3")}}),w.a.createElement(E.a,{visible:i,showStripes:!0})))),w.a.createElement("h2",{className:"example-title"},"Properties"),w.a.createElement(P.a,{data:N}))}}]),t}(v.Component));t.default=S}}]);