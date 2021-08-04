"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5316],{59141:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const o=a},7680:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(23645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".linear-progress-examples .example-box{margin:50px;padding:0 0 20px;overflow:hidden;background:#fff;box-shadow:rgba(0,0,0,.117647) 0 1px 6px,rgba(0,0,0,.117647) 0 1px 4px}.linear-progress-examples .example-box>h3{font-size:16px;color:#758697;background-color:#e3eaf3;margin:0;padding:15px 20px}.linear-progress-examples .example-box>p{margin-left:20px;font-size:14px;color:#4c637b}",""]);const o=a},1116:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(15671),a=r(43144),o=r(97326),s=r(60136),c=r(82963),l=r(61120),i=r(4942),u=r(37699),p=r(45697),f=r.n(p),d=r(82996),m=r(93379),h=r.n(m),y=r(7795),g=r.n(y),v=r(90569),w=r.n(v),b=r(3565),Z=r.n(b),E=r(19216),x=r.n(E),O=r(44589),N=r.n(O),P=r(59141),S={};function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}S.styleTagTransform=N(),S.setAttributes=Z(),S.insert=w().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=x(),h()(P.Z,S),P.Z&&P.Z.locals&&P.Z.locals;var T=function(e){(0,s.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,n.Z)(this,f),t=p.call(this,e),(0,i.Z)((0,o.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(R({name:r},t.props.data[r]));return e})),t}return(0,a.Z)(f,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(u.Component);T.propTypes={data:f().object};const j=T},55848:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(15671),a=r(43144),o=r(60136),s=r(82963),c=r(61120),l=r(37699),i=r(93284),u=r(24471),p=r(50704),f=r(1116);const d=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element.","default":"{"},"theme":{"type":"PropTypes.oneOf","desc":"The progress theme.Can be primary,highlight,success,warning,error."},"highlightWidth":{"type":"PropTypes.string","desc":"The highlight width of linearProgress.","default":"50%"},"word":{"type":"PropTypes.bool","desc":"If true,there will have a text description.","default":"false"},"wordStyle":{"type":"PropTypes.oneOf","desc":"The percent text location.Desirable values include front,middle,follow.","default":"LinearProgress.WordStyle.FRONT"},"animation":{"type":"PropTypes.bool","desc":"If true, the linearProgress will have animation.","default":"false"}}');var m=r(93379),h=r.n(m),y=r(7795),g=r.n(y),v=r(90569),w=r.n(v),b=r(3565),Z=r.n(b),E=r(19216),x=r.n(E),O=r(44589),N=r.n(O),P=r(7680),S={};S.styleTagTransform=N(),S.setAttributes=Z(),S.insert=w().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=x(),h()(P.Z,S),P.Z&&P.Z.locals&&P.Z.locals;const I=function(e){(0,o.Z)(h,e);var t,r,m=(t=h,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,c.Z)(t);if(r){var a=(0,c.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function h(e){var t;return(0,n.Z)(this,h),(t=m.call(this,e)).state={percent:0},t}return(0,a.Z)(h,[{key:"progress",value:function(e){var t=this;if(e>=90)this.setState({percent:100});else{var r=parseInt((10*Math.random()).toFixed(0));this.setState({percent:e+r}),this.timer=setTimeout((function(){return t.progress(e+r)}),1e3)}}},{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout((function(){return e.progress(0)}),1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e={marginBottom:"20px"};return l.createElement("div",{className:"example linear-progress-examples"},l.createElement("h2",{className:"example-title"},"Linear Progress"),l.createElement("p",null,l.createElement("span",null,"Linear Progress")," bars fill from 0% to 100% to show the progress of a task. It also will animate to show there is a task waiting to be done."),l.createElement("h2",{className:"example-title"},"Examples"),l.createElement(u.Z,null,l.createElement(p.Z,{className:"example-header",title:"Linear Progress Example"}),l.createElement("div",{className:"widget-content"},l.createElement("div",{className:"example-content"},l.createElement("p",null,"Linear Progress without percentage description."),l.createElement("div",{style:e},l.createElement(i.Z,{highlightWidth:this.state.percent+"%",style:{width:"300px",height:"30px",lineHeight:"30px",margin:"30px 0 0 20px"},showIcon:!0,status:"success",successIcon:"fa fa-thumbs-up",failureIcon:"fa fa-tags",word:!0,wordStyle:i.Z.WordStyle.END,theme:"warning"}))))),l.createElement(u.Z,null,l.createElement(p.Z,{className:"example-header",title:"Linear Progress Example"}),l.createElement("div",{className:"widget-content"},l.createElement("div",{className:"example-content"},l.createElement("p",null,"Linear Progress without percentage description by default.Set the word property to true and wordStyle property to middle for percentage description stay at middle."),l.createElement("div",{style:e},l.createElement(i.Z,{highlightWidth:this.state.percent+"%",style:{width:"80%",height:"30px",lineHeight:"30px",margin:"30px 0 0 20px"},word:!0,wordStyle:i.Z.WordStyle.END,theme:"success"}))))),l.createElement(u.Z,null,l.createElement(p.Z,{className:"example-header",title:"Linear Progress Example"}),l.createElement("div",{className:"widget-content"},l.createElement("div",{className:"example-content"},l.createElement("p",null,"Linear Progress without percentage description by default.Set the word property to true and wordStyle property to follow for percentage description stay at end."),l.createElement("div",{style:e},l.createElement(i.Z,{highlightWidth:this.state.percent+"%",style:{width:"calc(100% - 40px)",height:"30px",lineHeight:"30px",margin:"30px 0 0 20px"},word:!0,wordStyle:i.Z.WordStyle.FOLLOW,theme:"error",animation:!0}))))),l.createElement("h2",{className:"example-title"},"Properties"),l.createElement(f.Z,{data:d}))}}]),h}(l.Component)},93284:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(15671),a=r(43144),o=r(97326),s=r(60136),c=r(82963),l=r(61120),i=r(4942),u=r(37699),p=r(45697),f=r.n(p),d=r(41844),m=r.n(d),h=r(87712),y=r(32043),g=r(81540);var v=function(e){(0,s.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,n.Z)(this,f);for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return t=p.call.apply(p,[this,e].concat(a)),(0,i.Z)((0,o.Z)(t),"getProgressWidth",(function(){return t.wrapperEl?parseInt(t.wrapperEl.offsetWidth)/2:0})),t.wrapper=(0,u.createRef)(),t.wrapperEl=null,t}return(0,a.Z)(f,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current}},{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.highlightWidth,a=t.style,o=t.word,s=t.wordStyle,c=t.theme,l=t.animation,p=t.status,d=t.showIcon,h=t.successIcon,g=t.failureIcon;return u.createElement("div",{ref:this.wrapper,className:m()("linear-progress",(e={},(0,i.Z)(e,s,s),(0,i.Z)(e,"theme-".concat(c),c),(0,i.Z)(e,r,r),(0,i.Z)(e,p,p),e)),style:a},o&&s===f.WordStyle.FOLLOW?u.createElement(y.Z,{endNum:parseInt(n),status:p,showIcon:d,successIcon:h,failureIcon:g,move:!0}):null,o&&s===f.WordStyle.FRONT?u.createElement(y.Z,{endNum:parseInt(n),status:p,showIcon:d,successIcon:h,failureIcon:g}):null,u.createElement("div",{className:"linear-progress-background"},u.createElement("div",{className:m()("linear-progress-highlight",{"linear-progress-animate":l}),style:{width:n}},s===f.WordStyle.MIDDLE?u.createElement(y.Z,{className:"linear-progress-word",style:{marginLeft:this.getProgressWidth()},status:p,showIcon:d,successIcon:h,failureIcon:g,endNum:parseInt(n)}):null)),o&&s===f.WordStyle.END?u.createElement(y.Z,{endNum:parseInt(n),status:p,showIcon:d,successIcon:h,failureIcon:g}):null)}}]),f}(u.Component);(0,i.Z)(v,"WordStyle",{FRONT:"linear-progress-one",MIDDLE:"linear-progress-two",FOLLOW:"linear-progress-three",END:"linear-progress-four"}),(0,i.Z)(v,"Theme",h.Z),v.propTypes={className:f().string,style:f().object,theme:f().oneOf(g.Z.enumerateValue(h.Z)),highlightWidth:f().string,word:f().bool,wordStyle:f().oneOf(Object.keys(v.WordStyle).map((function(e){return v.WordStyle[e]}))),animation:f().bool},v.defaultProps={style:{width:"200px",height:"2px"},highlightWidth:"50%",word:!1,wordStyle:v.WordStyle.FRONT,animation:!1};const w=v},32043:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(15671),a=r(43144),o=r(97326),s=r(60136),c=r(82963),l=r(61120),i=r(4942),u=r(37699),p=r(45697),f=r.n(p),d=r(41844),m=r.n(d);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){(0,s.Z)(f,e);var t,r,p=(t=f,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var a=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,n.Z)(this,f);for(var r=arguments.length,a=new Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return t=p.call.apply(p,[this,e].concat(a)),(0,i.Z)((0,o.Z)(t),"numberChange",(function(){if(t.state.percent<100){if(t.state.percent<t.props.endNum){t.setState({percent:t.state.percent+1});var e=300/(t.props.endNum-t.state.percent);return void(t.timer=setTimeout((function(){return t.numberChange()}),e))}t.timer=setTimeout((function(){return t.numberChange()}),30)}})),t.state={percent:0},t}return(0,a.Z)(f,[{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout((function(){return e.numberChange()}),30)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var e,t=this.props,r=t.className,n=t.style,a=t.move,o=t.endNum,s=t.status,c=t.showIcon,l=t.successIcon,p=t.failureIcon,f=this.state.percent;return u.createElement("div",{className:m()("circular-progress-percent",(e={},(0,i.Z)(e,r,r),(0,i.Z)(e,s,s),e)),style:!0===a?y({width:o+"%",textAlign:"right"},n):n},u.Children.map(this.props.children,(function(e){return u.createElement("span",null,e)})),"loading"===s?u.createElement("span",null,f,"%"):null,c&&"success"===s?u.createElement("i",{className:l||"fa fa-check-circle"}):null,c&&"failure"===s?u.createElement("i",{className:p||"fa fa-times-circle"}):null)}}]),f}(u.Component);(0,i.Z)(g,"Status",{LOADING:"loading",SUCCESS:"success",FAILURE:"failure"}),g.propTypes={children:f().any,className:f().string,style:f().object,status:f().oneOf(Object.keys(g.Status).map((function(e){return g.Status[e]}))),endNum:f().number,move:f().bool,showIcon:f().string,successIcon:f().string,failureIcon:f().string},g.defaultProps={endNum:100,move:!1};const v=g}}]);