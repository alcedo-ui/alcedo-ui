(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6043],{59141:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}\n",""]);const i=a},82410:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,".page-loading-examples .example-content{position:relative;padding-left:0}.page-loading-examples .example-content>p{margin-left:30px}.page-loading-examples .example-content .raised-button{margin-left:30px}\n",""]);const i=a},1116:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(6610),a=n(5991),i=n(63349),o=n(10379),l=n(46070),s=n(77608),c=n(96156),u=n(37699),p=n(45697),d=n.n(p),f=n(82996),m=n(93379),h=n.n(m),g=n(59141);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}h()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;var b=function(e){(0,o.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function d(e){var t;return(0,r.Z)(this,d),t=p.call(this,e),(0,c.Z)((0,i.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(v({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(d,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(f.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),d}(u.Component);b.propTypes={data:d().object};const Z=b},33731:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Z});var r=n(6610),a=n(5991),i=n(63349),o=n(10379),l=n(46070),s=n(77608),c=n(96156),u=n(37699),p=n(60025),d=n(24471),f=n(50704),m=n(22944),h=n(1116);const g=JSON.parse('{"className":{"type":"PropTypes.string"},"style":{"type":"PropTypes.object"},"visible":{"type":"PropTypes.bool","default":"false"},"duration":{"type":"PropTypes.number","default":"250"},"finishDuration":{"type":"PropTypes.number","default":"100"},"showStripes":{"type":"PropTypes.bool","default":"true"}}');var y=n(93379),v=n.n(y),b=n(82410);v()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;const Z=function(e){(0,o.Z)(v,e);var t,n,y=(t=v,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function v(e){var t;return(0,r.Z)(this,v),t=y.call(this,e),(0,c.Z)((0,i.Z)(t),"showLoading",(function(e){t.setState((0,c.Z)({},e,!0),(function(){setTimeout((function(){t.setState((0,c.Z)({},e,!1))}),2e3)}))})),t.loadingProgress=[{width:0,timeout:0},{width:80,timeout:200},{width:99,timeout:2e3}],t.state={visible1:!1,visible2:!1,visible3:!1},t}return(0,a.Z)(v,[{key:"render",value:function(){var e=this,t=this.state,n=t.visible1,r=t.visible2,a=t.visible3;return u.createElement("div",{className:"example page-loading-examples"},u.createElement("h2",{className:"example-title"},"PageLoading"),u.createElement("p",null,u.createElement("span",null,"PageLoading")," use to show pages and blocks loading status."),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(d.Z,null,u.createElement(f.Z,{className:"example-header",title:"PageLoading Example"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("p",null,"A simple PageLoading example."),u.createElement(m.Z,{value:"loading",onClick:function(){e.showLoading("visible1")}}),u.createElement(p.Z,{visible:n,showStripes:!1})))),u.createElement(d.Z,null,u.createElement(f.Z,{className:"example-header",title:"Self Progress PageLoading Example"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("p",null,"Set self loading progress on PageLoading."),u.createElement(m.Z,{value:"loading",onClick:function(){e.showLoading("visible2")}}),u.createElement(p.Z,{visible:r,showStripes:!1,loadingProgress:this.loadingProgress})))),u.createElement(d.Z,null,u.createElement(f.Z,{className:"example-header",title:"Striped PageLoading Example"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("p",null,"A striped pageLoading example."),u.createElement(m.Z,{value:"loading",onClick:function(){e.showLoading("visible3")}}),u.createElement(p.Z,{visible:a,showStripes:!0})))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(h.Z,{data:g}))}}]),v}(u.Component)},60025:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(6610),a=n(5991),i=n(63349),o=n(10379),l=n(46070),s=n(77608),c=n(96156),u=n(37699),p=n(45697),d=n.n(p),f=n(29697),m=n(41844),h=n.n(m);var g=function(e){(0,o.Z)(d,e);var t,n,p=(t=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(n){var a=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,l.Z)(this,e)});function d(e){var t;(0,r.Z)(this,d);for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return t=p.call.apply(p,[this,e].concat(a)),(0,c.Z)((0,i.Z)(t),"setLoading",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props.loadingProgress,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e[n],a=r.width,i=r.timeout,o={};o.width=a+"%",o.transition="width "+i+"ms linear 0ms",t.setState({highlightStyle:o},(function(){n<e.length-1&&(t.clearProgress(),t.progressTimeout=setTimeout((function(){t.setLoading(e,n+1)}),100===a?0:i))}))})),(0,c.Z)((0,i.Z)(t),"clearProgress",(function(){t.progressTimeout&&clearTimeout(t.progressTimeout)})),(0,c.Z)((0,i.Z)(t),"handleEnter",(function(){t.clearProgress(),t.setState({highlightStyle:t.defaultHighlightStyle},(function(){t.setLoading()}))})),(0,c.Z)((0,i.Z)(t),"handleExit",(function(){t.clearProgress(),t.setLoading([{width:100,timeout:t.props.finishDuration}])})),t.progressTimeout=null,t.defaultHighlightStyle={width:0,transition:"width 0s"},t.state={highlightStyle:t.defaultHighlightStyle},t}return(0,a.Z)(d,[{key:"componentWillUnmount",value:function(){this.clearProgress()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,r=e.visible,a=e.duration,i=e.finishDuration,o=e.showStripes,l=this.state.highlightStyle;return u.createElement(f.Z,{in:r,timeout:{exit:a+i},classNames:"page-loading",onEnter:this.handleEnter,onExit:this.handleExit},u.createElement("div",{className:h()("page-loading",(0,c.Z)({striped:o},t,t)),style:n},u.createElement("div",{className:"page-loading-bar",style:l})))}}]),d}(u.Component);g.propTypes={className:d().string,style:d().object,visible:d().bool,duration:d().number,finishDuration:d().number,showStripes:d().bool,loadingProgress:d().arrayOf(d().shape({width:d().number,timeout:d().number}))},g.defaultProps={visible:!1,duration:250,finishDuration:100,showStripes:!0,loadingProgress:[{width:0,timeout:0},{width:50,timeout:200},{width:80,timeout:2e3},{width:90,timeout:2500},{width:95,timeout:25e3}]};const y=g}}]);