"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[7098],{59141:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(23645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const l=n},1116:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(6610),n=a(5991),l=a(63349),o=a(10379),c=a(46070),s=a(77608),u=a(96156),i=a(37699),p=a(45697),f=a.n(p),d=a(82996),m=a(93379),h=a.n(m),v=a(7795),y=a.n(v),b=a(90569),Z=a.n(b),g=a(3565),E=a.n(g),w=a(19216),O=a.n(w),N=a(44589),P=a.n(N),R=a(59141),k={};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,u.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}k.styleTagTransform=P(),k.setAttributes=E(),k.insert=Z().bind(null,"head"),k.domAPI=y(),k.insertStyleElement=O(),h()(R.Z,k),R.Z&&R.Z.locals&&R.Z.locals;var S=function(e){(0,o.Z)(f,e);var t,a,p=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(a){var n=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;return(0,r.Z)(this,f),t=p.call(this,e),(0,u.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(j({name:a},t.props.data[a]));return e})),t}return(0,n.Z)(f,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),f}(i.Component);S.propTypes={data:f().object};const x=S},41566:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var r=a(6610),n=a(5991),l=a(63349),o=a(10379),c=a(46070),s=a(77608),u=a(96156),i=a(37699),p=a(68874),f=a(24471),d=a(50704),m=a(1116);const h=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"value":{"type":"PropTypes.number","desc":"The value of Rate component."},"allowHalf":{"type":"PropTypes.bool","desc":"If true,the Rate will have half star."},"allowClear":{"type":"PropTypes.bool","desc":"If true,the Rate component will be clear the value when double click.","default":"true"},"disabled":{"type":"PropTypes.bool","desc":"If true,the Rate component will be disabled.","default":"false"},"count":{"type":"PropTypes.number","default":"5"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when the rate change."}}');const v=function(e){(0,o.Z)(y,e);var t,a,v=(t=y,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(a){var n=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function y(e){var t;return(0,r.Z)(this,y),t=v.call(this,e),(0,u.Z)((0,l.Z)(t),"onChangeHandle",(function(e){t.setState({value:e})})),(0,u.Z)((0,l.Z)(t),"onChangeHandle2",(function(e){t.setState({value2:e})})),t.state={value:3,value2:3.5},t}return(0,n.Z)(y,[{key:"render",value:function(){var e=this,t=this.state,a=t.value,r=t.value2;return i.createElement("div",{className:"example rate-examples"},i.createElement("h2",{className:"example-title"},"Rate"),i.createElement("p",null,"The ",i.createElement("span",null,"Rate")," is used to evaluate something."),i.createElement("h2",{className:"example-title"},"Examples"),i.createElement(f.Z,null,i.createElement(d.Z,{className:"example-header",title:"Basic"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("p",null,"A simple ",i.createElement("code",null,"Rate")," example."),i.createElement(p.Z,{value:a,onChange:function(t){e.onChangeHandle(t)}})))),i.createElement(f.Z,null,i.createElement(d.Z,{className:"example-header",title:"With allowHalf"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("p",null,"Set the ",i.createElement("code",null,"allowHalf")," property to display half star."),i.createElement(p.Z,{value:r,allowHalf:!0,onChange:function(t){e.onChangeHandle2(t)}})))),i.createElement(f.Z,null,i.createElement(d.Z,{className:"example-header",title:"With disabled"}),i.createElement("div",{className:"widget-content"},i.createElement("div",{className:"example-content"},i.createElement("p",null,"Set the ",i.createElement("code",null,"disabled")," property to disabled the ",i.createElement("code",null,"Rate")," component."),i.createElement(p.Z,{value:r,allowHalf:!0,disabled:!0,onChange:function(t){e.onChangeHandle2(t)}})))),i.createElement("h2",{className:"example-title"},"Properties"),i.createElement(m.Z,{data:h}))}}]),y}(i.Component)},68874:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(6610),n=a(5991),l=a(63349),o=a(10379),c=a(46070),s=a(77608),u=a(96156),i=a(37699),p=a(45697),f=a.n(p),d=a(41844),m=a.n(d),h=a(72);const v=function(e,t,a){var r=[];if(t)for(var n=0;n<a;n++)n<=e-1?r.push("full"):n<e&&n>e-1?r.push("full-zero"):r.push("zero");else for(var l=0;l<a;l++)l<e?r.push("full"):r.push("zero");return r};var y=a(19605);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,u.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g=function(e){(0,o.Z)(f,e);var t,a,p=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,s.Z)(t);if(a){var n=(0,s.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function f(e){var t;(0,r.Z)(this,f);for(var a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];return t=p.call.apply(p,[this,e].concat(n)),(0,u.Z)((0,l.Z)(t),"createItems",(function(e){var a=t.props,r=a.allowHalf,n=a.count;return v(e,r,n)})),(0,u.Z)((0,l.Z)(t),"handleTriggerEvent",(function(e,t){for(;e;){if(e==t)return!0;e=e.parentNode}return!1})),(0,u.Z)((0,l.Z)(t),"handleMouseMove",(function(e){if(!t.props.disabled){var a=t.handleTriggerEvent(e.target,t.wrapperEl),r=t.props.value;a?"I"===e.target.nodeName?r=e.target.getAttribute("data-key"):"DIV"!==e.target.nodeName||-1===e.target.className.indexOf("half-star")&&-1===e.target.className.indexOf("star")||(r=e.target.getAttribute("data-key")):r=t.props.value;var n=t.createItems(r);t.setState({items:n})}})),(0,u.Z)((0,l.Z)(t),"handleSelect",(function(e,a){a.preventDefault();var r=t.props,n=r.disabled,l=r.allowClear;n||(e===t.state.value&&l&&(e=0),t.setState({value:e},(function(){t.props.onChange&&t.props.onChange(e)})))})),t.wrapper=(0,i.createRef)(),t.wrapperEl=null,t.state={value:0,items:[]},t}return(0,n.Z)(f,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current;var e=this.props.value,t=this.createItems(e);this.setState({value:e,items:t}),h.Z.addEvent(document,"mousemove",this.handleMouseMove)}},{key:"componentWillUnmount",value:function(){h.Z.removeEvent(document,"mousemove",this.handleMouseMove)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=t.style,n=t.allowHalf,l=t.disabled,o=t.count,c=this.state.items;return i.createElement("div",{ref:this.wrapper,className:m()("rate",(0,u.Z)({},a,a)),style:Z({width:30*o},r)},c&&c.map((function(t,a){return n?i.createElement("div",{key:a,className:"half-star ".concat(l?"disabled":""),"data-key":a+1},i.createElement("div",{className:"half-star-left","data-key":a+.5,onClick:function(t){e.handleSelect(a+.5,t)}},i.createElement("i",{className:"fas fa-star-half ".concat("full"==t||"full-zero"==t?"full":"zero"," ").concat(l?"disabled":""),"data-key":a+.5})),i.createElement("div",{className:"half-star-right","data-key":a+1,onClick:function(t){e.handleSelect(a+1,t)}},i.createElement("i",{className:"fas fa-star-half ".concat("zero"==t||"full-zero"==t?"zero":"full"," ").concat(l?"disabled":""),"data-key":a+1}))):i.createElement("div",{key:a,className:"star ".concat(l?"disabled":""),"data-key":a+1},i.createElement("i",{className:"fas fa-star ".concat("zero"==t?"zero":"full"," ").concat(l?"disabled":""),"data-key":a+1,onClick:function(t){e.handleSelect(a+1,t)}}))})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=y.Z.getDerivedState(e,t,"value");return{prevProps:e,value:a,items:v(a,e.allowHalf,e.count)}}}]),f}(i.Component);g.propTypes={className:f().string,style:f().object,value:f().number,allowHalf:f().bool,allowClear:f().bool,disabled:f().bool,count:f().number,onChange:f().func},g.defaultProps={allowClear:!0,count:5,defaultValue:0,disabled:!1};const E=g}}]);