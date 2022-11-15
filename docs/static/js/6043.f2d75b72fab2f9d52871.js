"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6043],{15439:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(15671),a=n(43144),i=n(97326),o=n(60136),l=n(82963),s=n(61120),c=n(4942),u=n(37699),p=n(45697),d=n.n(p),m=n(14659),f=n(93379),h=n.n(f),g=n(7795),y=n.n(g),v=n(90569),b=n.n(v),Z=n(3565),E=n.n(Z),w=n(19216),P=n.n(w),x=n(44589),S=n.n(x),N=n(59141),R={};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}R.styleTagTransform=S(),R.setAttributes=E(),R.insert=b().bind(null,"head"),R.domAPI=y(),R.insertStyleElement=P(),h()(N.Z,R),N.Z&&N.Z.locals&&N.Z.locals;var L=function(e){(0,o.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),t=p.call(this,e),(0,c.Z)((0,i.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(T({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(d,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(m.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(u.Component);L.propTypes={data:d().object};const j=L},54006:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(15671),a=n(43144),i=n(97326),o=n(60136),l=n(82963),s=n(61120),c=n(4942),u=n(37699),p=n(29576),d=n(81182),m=n(46748),f=n(88550),h=n(15439);const g=JSON.parse('{"className":{"type":"PropTypes.string"},"style":{"type":"PropTypes.object"},"visible":{"type":"PropTypes.bool","default":"false"},"duration":{"type":"PropTypes.number","default":"250"},"finishDuration":{"type":"PropTypes.number","default":"100"},"showStripes":{"type":"PropTypes.bool","default":"true"}}');var y=n(93379),v=n.n(y),b=n(7795),Z=n.n(b),E=n(90569),w=n.n(E),P=n(3565),x=n.n(P),S=n(19216),N=n.n(S),R=n(44589),O=n.n(R),T=n(82410),L={};L.styleTagTransform=O(),L.setAttributes=x(),L.insert=w().bind(null,"head"),L.domAPI=Z(),L.insertStyleElement=N(),v()(T.Z,L),T.Z&&T.Z.locals&&T.Z.locals;var j=function(e){(0,o.Z)(v,e);var t,n,y=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function v(e){var t;return(0,r.Z)(this,v),t=y.call(this,e),(0,c.Z)((0,i.Z)(t),"showLoading",(function(e){t.setState((0,c.Z)({},e,!0),(function(){setTimeout((function(){t.setState((0,c.Z)({},e,!1))}),2e3)}))})),t.loadingProgress=[{width:0,timeout:0},{width:80,timeout:200},{width:99,timeout:2e3}],t.state={visible1:!1,visible2:!1,visible3:!1},t}return(0,a.Z)(v,[{key:"render",value:function(){var e=this,t=this.state,n=t.visible1,r=t.visible2,a=t.visible3;return u.createElement("div",{className:"example page-loading-examples"},u.createElement("h2",{className:"example-title"},"PageLoading"),u.createElement("p",null,u.createElement("span",null,"PageLoading")," use to show pages and blocks loading status."),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(d.Z,null,u.createElement(m.Z,{className:"example-header",title:"PageLoading Example"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("p",null,"A simple PageLoading example."),u.createElement(f.Z,{value:"loading",onClick:function(){e.showLoading("visible1")}}),u.createElement(p.Z,{visible:n,showStripes:!1})))),u.createElement(d.Z,null,u.createElement(m.Z,{className:"example-header",title:"Self Progress PageLoading Example"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("p",null,"Set self loading progress on PageLoading."),u.createElement(f.Z,{value:"loading",onClick:function(){e.showLoading("visible2")}}),u.createElement(p.Z,{visible:r,showStripes:!1,loadingProgress:this.loadingProgress})))),u.createElement(d.Z,null,u.createElement(m.Z,{className:"example-header",title:"Striped PageLoading Example"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("p",null,"A striped pageLoading example."),u.createElement(f.Z,{value:"loading",onClick:function(){e.showLoading("visible3")}}),u.createElement(p.Z,{visible:a,showStripes:!0})))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(h.Z,{data:g}))}}]),v}(u.Component);const k=j},29576:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(15671),a=n(43144),i=n(97326),o=n(60136),l=n(82963),s=n(61120),c=n(4942),u=n(37699),p=n(45697),d=n.n(p),m=n(29697),f=n(41844),h=n.n(f);var g=function(e){(0,o.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function d(e){var t;(0,r.Z)(this,d);for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return t=p.call.apply(p,[this,e].concat(a)),(0,c.Z)((0,i.Z)(t),"setLoading",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.loadingProgress,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e[n],a=r.width,i=r.timeout,o={};o.width=a+"%",o.transition="width "+i+"ms linear 0ms",t.setState({highlightStyle:o},(function(){n<e.length-1&&(t.clearProgress(),t.progressTimeout=setTimeout((function(){t.setLoading(e,n+1)}),100===a?0:i))}))})),(0,c.Z)((0,i.Z)(t),"clearProgress",(function(){t.progressTimeout&&clearTimeout(t.progressTimeout)})),(0,c.Z)((0,i.Z)(t),"handleEnter",(function(){t.clearProgress(),t.setState({highlightStyle:t.defaultHighlightStyle},(function(){t.setLoading()}))})),(0,c.Z)((0,i.Z)(t),"handleExit",(function(){t.clearProgress(),t.setLoading([{width:100,timeout:t.props.finishDuration}])})),t.progressTimeout=null,t.defaultHighlightStyle={width:0,transition:"width 0s"},t.state={highlightStyle:t.defaultHighlightStyle},t}return(0,a.Z)(d,[{key:"componentWillUnmount",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.visible,a=e.duration,i=e.finishDuration,o=e.showStripes,l=this.state.highlightStyle;return u.createElement(m.Z,{in:r,timeout:{exit:a+i},classNames:"page-loading",onEnter:this.handleEnter,onExit:this.handleExit},u.createElement("div",{className:h()("page-loading",(0,c.Z)({striped:o},t,t)),style:n},u.createElement("div",{className:"page-loading-bar",style:l})))}}]),d}(u.Component);g.propTypes={className:d().string,style:d().object,visible:d().bool,duration:d().number,finishDuration:d().number,showStripes:d().bool,loadingProgress:d().arrayOf(d().shape({width:d().number,timeout:d().number}))},g.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};const y=g},59141:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8081),a=n.n(r),i=n(23645),o=n.n(i)()(a());o.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const l=o},82410:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(8081),a=n.n(r),i=n(23645),o=n.n(i)()(a());o.push([e.id,".page-loading-examples .example-content{position:relative;padding-left:0}.page-loading-examples .example-content>p{margin-left:30px}.page-loading-examples .example-content .raised-button{margin-left:30px}",""]);const l=o}}]);