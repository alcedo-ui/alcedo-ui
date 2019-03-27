(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{366:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(81),s=a.n(r),l=a(82),o=a.n(l),p=a(83),c=a.n(p),d=a(84),u=a.n(d),m=a(21),g=a.n(m),h=a(85),f=a.n(h),v=a(1),y=a.n(v),b=a(2),w=a.n(b),E=a(373),x=(a(367),function(e){function t(e){var a,n;return s()(this,t),(n=c()(this,u()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=g()(n),n.generateData).bind(a),n}return f()(t,e),o()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(v.Component));x.propTypes={data:w.a.object},x.defaultProps={data:null},t.a=x},367:function(e,t,a){var n=a(368);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,i);n.locals&&(e.exports=n.locals)},368:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},437:function(e,t,a){"use strict";var n=a(81),i=a.n(n),r=a(82),s=a.n(r),l=a(83),o=a.n(l),p=a(84),c=a.n(p),d=a(21),u=a.n(d),m=a(85),g=a.n(m),h=a(22),f=a.n(h),v=a(1),y=a.n(v),b=a(2),w=a.n(b),E=a(361),x=a.n(E),P=a(451),N=a.n(P),S=function(e){function t(e){var a,n;i()(this,t);for(var r=arguments.length,s=new Array(r>1?r-1:0),l=1;l<r;l++)s[l-1]=arguments[l];return n=o()(this,(a=c()(t)).call.apply(a,[this,e].concat(s))),f()(u()(n),"setLoading",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props.loadingProgress,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e[t],i=a.width,r=a.timeout,s={};s.width=i+"%",s.transition="width "+r+"ms linear 0ms",n.setState({highlightStyle:s},function(){t<e.length-1&&(n.clearProgress(),n.progressTimeout=setTimeout(function(){n.setLoading(e,t+1)},100===i?0:r))})}),f()(u()(n),"clearProgress",function(){n.progressTimeout&&clearTimeout(n.progressTimeout)}),f()(u()(n),"enterHandler",function(){n.clearProgress(),n.setState({highlightStyle:n.defaultHighlightStyle},function(){n.setLoading()})}),f()(u()(n),"exitHandler",function(){n.clearProgress(),n.setLoading([{width:100,timeout:n.props.finishDuration}])}),n.progressTimeout=null,n.defaultHighlightStyle={width:0,transition:"width 0s"},n.state={highlightStyle:n.defaultHighlightStyle},n}return g()(t,e),s()(t,[{key:"componentWillUnmonut",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.style,n=e.visible,i=e.duration,r=e.finishDuration,s=e.showStripes,l=this.state.highlightStyle,o=x()("page-loading",f()({striped:s},t,t));return y.a.createElement(N.a,{in:n,timeout:{exit:i+r},classNames:"page-loading",onEnter:this.enterHandler,onExit:this.exitHandler},y.a.createElement("div",{className:o,style:a},y.a.createElement("div",{className:"page-loading-bar",style:l})))}}]),t}(v.Component);S.propTypes={className:w.a.string,style:w.a.object,visible:w.a.bool,duration:w.a.number,finishDuration:w.a.number,showStripes:w.a.bool,loadingProgress:w.a.arrayOf(w.a.shape({width:w.a.number,timeout:w.a.number}))},S.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};var L=S;a.d(t,"a",function(){return L})},820:function(e){e.exports={className:{type:"PropTypes.string"},style:{type:"PropTypes.object"},visible:{type:"PropTypes.bool",default:"false"},duration:{type:"PropTypes.number",default:"250"},finishDuration:{type:"PropTypes.number",default:"100"},showStripes:{type:"PropTypes.bool",default:"true"}}},821:function(e,t,a){var n=a(822);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,i);n.locals&&(e.exports=n.locals)},822:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".page-loading-examples .example-content {\n  position: relative;\n  padding-left: 0; }\n  .page-loading-examples .example-content > p {\n    margin-left: 30px; }\n  .page-loading-examples .example-content .raised-button {\n    margin-left: 30px; }\n",""])},927:function(e,t,a){"use strict";a.r(t);var n=a(81),i=a.n(n),r=a(82),s=a.n(r),l=a(83),o=a.n(l),p=a(84),c=a.n(p),d=a(21),u=a.n(d),m=a(85),g=a.n(m),h=a(22),f=a.n(h),v=a(1),y=a.n(v),b=a(437),w=a(371),E=a(370),x=a(369),P=a(366),N=a(820),S=(a(821),function(e){function t(e){var a;return i()(this,t),a=o()(this,c()(t).call(this,e)),f()(u()(a),"showLoading",function(e){a.setState(f()({},e,!0),function(){setTimeout(function(){a.setState(f()({},e,!1))},2e3)})}),a.loadingProgress=[{width:0,timeout:0},{width:80,timeout:200},{width:99,timeout:2e3}],a.state={visible1:!1,visible2:!1,visible3:!1},a}return g()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.visible1,n=t.visible2,i=t.visible3;return y.a.createElement("div",{className:"example page-loading-examples"},y.a.createElement("h2",{className:"example-title"},"PageLoading"),y.a.createElement("p",null,y.a.createElement("span",null,"PageLoading")," use to show pages and blocks loading status."),y.a.createElement("h2",{className:"example-title"},"Examples"),y.a.createElement(w.a,null,y.a.createElement(E.a,{className:"example-header",title:"PageLoading Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"A simple PageLoading example."),y.a.createElement(x.a,{value:"loading",onClick:function(){e.showLoading("visible1")}}),y.a.createElement(b.a,{visible:a,showStripes:!1})))),y.a.createElement(w.a,null,y.a.createElement(E.a,{className:"example-header",title:"Self Progress PageLoading Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"Set self loading progress on PageLoading."),y.a.createElement(x.a,{value:"loading",onClick:function(){e.showLoading("visible2")}}),y.a.createElement(b.a,{visible:n,showStripes:!1,loadingProgress:this.loadingProgress})))),y.a.createElement(w.a,null,y.a.createElement(E.a,{className:"example-header",title:"Striped PageLoading Example"}),y.a.createElement("div",{className:"widget-content"},y.a.createElement("div",{className:"example-content"},y.a.createElement("p",null,"A striped pageLoading example."),y.a.createElement(x.a,{value:"loading",onClick:function(){e.showLoading("visible3")}}),y.a.createElement(b.a,{visible:i,showStripes:!0})))),y.a.createElement("h2",{className:"example-title"},"Properties"),y.a.createElement(P.a,{data:N}))}}]),t}(v.Component));t.default=S}}]);