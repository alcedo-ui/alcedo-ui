"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[3174],{15439:(e,t,o)=>{o.d(t,{Z:()=>D});var r=o(15671),n=o(43144),i=o(97326),l=o(60136),s=o(82963),a=o(61120),u=o(4942),p=o(37699),c=o(45697),m=o.n(c),d=o(14659),g=o(93379),f=o.n(g),v=o(7795),h=o.n(v),b=o(90569),Z=o.n(b),E=o(3565),y=o.n(E),O=o(19216),T=o.n(O),P=o(44589),w=o.n(P),N=o(59141),R={};function x(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function C(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?x(Object(o),!0).forEach((function(t){(0,u.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):x(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}R.styleTagTransform=w(),R.setAttributes=y(),R.insert=Z().bind(null,"head"),R.domAPI=h(),R.insertStyleElement=T(),f()(N.Z,R),N.Z&&N.Z.locals&&N.Z.locals;var M=function(e){(0,l.Z)(m,e);var t,o,c=(t=m,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,a.Z)(t);if(o){var n=(0,a.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;return(0,r.Z)(this,m),t=c.call(this,e),(0,u.Z)((0,i.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var o in t.props.data)e.push(C({name:o},t.props.data[o]));return e})),t}return(0,n.Z)(m,[{key:"render",value:function(){return p.createElement("div",{className:"prop-type-desc-table-wrapper"},p.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),m}(p.Component);M.propTypes={data:m().object};const D=M},19446:(e,t,o)=>{o.r(t),o.d(t,{default:()=>A});var r=o(15671),n=o(43144),i=o(97326),l=o(60136),s=o(82963),a=o(61120),u=o(4942),p=o(37699),c=o(88550),m=o(5171),d=o(46836),g=o(82343),f=o(81182),v=o(46748),h=o(51689),b=o(79958),Z=o(15439);const E=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"contentClassName":{"type":"PropTypes.string","desc":"The CSS class name of the content element."},"modalClassName":{"type":"PropTypes.string"},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"parentEl":{"type":"PropTypes.object","default":"document.body"},"triggerEl":{"type":"PropTypes.object","desc":"This is the DOM element that will be used to set the position of the popover."},"visible":{"type":"PropTypes.bool","desc":"If true,the popover is visible.","default":"false"},"hasTriangle":{"type":"PropTypes.bool","desc":"If true,the popover will have a triangle on the top of the DOM element.","default":"true"},"container":{"type":"PropTypes.element"},"triangle":{"type":"PropTypes.element"},"theme":{"type":"PropTypes.oneOf","desc":"The popover theme.Can be primary,highlight,success,warning,error.","default":"Theme.DEFAULT"},"position":{"type":"PropTypes.oneOf","desc":"The popover alignment.The value can be Popover.Position.LEFT or Popover.Position.RIGHT.","default":"Position.BOTTOM"},"isAnimated":{"type":"PropTypes.bool","desc":"If true, popover will have animation effects.","default":"true"},"depth":{"type":"PropTypes.number","desc":"The depth of Paper component."},"isBlurClose":{"type":"PropTypes.bool","default":"true"},"shouldFollowScroll":{"type":"PropTypes.bool","default":"false"},"scrollEl":{"type":"PropTypes.object"},"closeWait":{"type":"PropTypes.number","default":"1000 / 6"},"resetPositionWait":{"type":"PropTypes.number","default":"250"},"showModal":{"type":"PropTypes.bool","default":"false"},"onRender":{"type":"PropTypes.func","desc":"The function of popover render."},"onRendered":{"type":"PropTypes.func","desc":"The function of popover rendered."},"onDestroy":{"type":"PropTypes.func","desc":"The function of popover destroy."},"onDestroyed":{"type":"PropTypes.func","desc":"The function of popover destroyed."},"onRequestClose":{"type":"PropTypes.func","desc":"Callback function fired when the popover is requested to be closed."},"onWheel":{"type":"PropTypes.func","desc":"Callback function fired when wrapper wheeled."}}');o(71887);var y=o(93379),O=o.n(y),T=o(7795),P=o.n(T),w=o(90569),N=o.n(w),R=o(3565),x=o.n(R),C=o(19216),M=o.n(C),D=o(44589),q=o.n(D),j=o(13734),B={};function S(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function k(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?S(Object(o),!0).forEach((function(t){(0,u.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}B.styleTagTransform=q(),B.setAttributes=x(),B.insert=N().bind(null,"head"),B.domAPI=P(),B.insertStyleElement=M(),O()(j.Z,B),j.Z&&j.Z.locals&&j.Z.locals;var F=function(e){(0,l.Z)(O,e);var t,o,y=(t=O,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,a.Z)(t);if(o){var n=(0,a.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function O(e){var t;return(0,r.Z)(this,O),t=y.call(this,e),(0,u.Z)((0,i.Z)(t),"show",(function(e){var o=k({},t.state.popVisible);o[e]=!0,t.setState({popVisible:o})})),(0,u.Z)((0,i.Z)(t),"hide",(function(e){var o=k({},t.state.popVisible);o[e]=!1,t.setState({popVisible:o})})),t.state={popVisible:{}},t}return(0,n.Z)(O,[{key:"render",value:function(){var e=this,t=this.state.popVisible,o=[{iconCls:"fab fa-facebook",value:"Facebook",text:"Facebook"},{iconCls:"fab fa-twitter",value:"Twitter",text:"Twitter"},{iconCls:"fab fa-google-plus-g",value:"Google+",text:"Google+"}];return p.createElement("div",{className:"example pop-examples popover-examples"},p.createElement("h2",{className:"example-title"},"Popover"),p.createElement("p",null,"A ",p.createElement("span",null,"Popover")," can be used as an alternative to a Drop Down Popover that can contain elements inside."),p.createElement("h2",{className:"example-title"},"Examples"),p.createElement(f.Z,null,p.createElement(v.Z,{className:"example-header",title:"Basic"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"popover-example-wrapper"},p.createElement("p",null,p.createElement("code",null,"Popover")," simple example."),p.createElement(c.Z,{ref:function(t){return e.trigger0=(0,b.findDOMNode)(t)},className:"trigger-button",value:"Toggle Popover",onMouseOver:function(){return e.show(0)}}),p.createElement(m.Z,{theme:m.Z.Theme.PRIMARY,visible:t[0],triggerEl:this.trigger0,onRequestClose:function(){return e.hide(0)}},p.createElement("div",{style:{padding:20,color:"#fff"}},"Popover Content")))))),p.createElement(f.Z,null,p.createElement(v.Z,{className:"example-header",title:"Without triangle"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"popover-example-wrapper"},p.createElement("p",null,"Set ",p.createElement("code",null,"hasTriangle")," to false,the popover will have no triangle on the top of the DOM element."),p.createElement(c.Z,{ref:function(t){return e.trigger1=(0,b.findDOMNode)(t)},className:"trigger-button",value:"Toggle Popover",onMouseOver:function(){return e.show(1)}}),p.createElement(m.Z,{visible:t[1],triggerEl:this.trigger1,hasTriangle:!1,onRequestClose:function(){return e.hide(1)}},p.createElement(g.Z,{data:o})))))),p.createElement(f.Z,null,p.createElement(v.Z,{className:"example-header",title:"With value"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"popover-example-wrapper"},p.createElement("p",null,"Set the ",p.createElement("code",null,"value")," property to show different position of ",p.createElement("code",null,"Popover"),"."),p.createElement("div",{className:"button-group-wrapper"},p.createElement("div",{className:"button-group top"},p.createElement(c.Z,{ref:function(t){return e.trigger5=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Top Left",onMouseOver:function(){return e.show(5)}}),p.createElement(c.Z,{ref:function(t){return e.trigger6=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Top",onMouseOver:function(){return e.show(6)}}),p.createElement(c.Z,{ref:function(t){return e.trigger7=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Top right",onMouseOver:function(){return e.show(7)}})),p.createElement("div",{className:"button-group right"},p.createElement(c.Z,{ref:function(t){return e.trigger11=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Right Top",onMouseOver:function(){return e.show(11)}}),p.createElement(c.Z,{ref:function(t){return e.trigger12=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Right",onMouseOver:function(){return e.show(12)}}),p.createElement(c.Z,{ref:function(t){return e.trigger13=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){return e.show(13)}})),p.createElement("div",{className:"button-group bottom"},p.createElement(c.Z,{ref:function(t){return e.trigger2=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){return e.show(2)}}),p.createElement(c.Z,{ref:function(t){return e.trigger3=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom",onMouseOver:function(){return e.show(3)}}),p.createElement(c.Z,{ref:function(t){return e.trigger4=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){return e.show(4)}})),p.createElement("div",{className:"button-group left"},p.createElement(c.Z,{ref:function(t){return e.trigger8=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Left Top",onMouseOver:function(){return e.show(8)}}),p.createElement(c.Z,{ref:function(t){return e.trigger9=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Left",onMouseOver:function(){return e.show(9)}}),p.createElement(c.Z,{ref:function(t){return e.trigger10=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){return e.show(10)}})),p.createElement("div",{className:"button-group center"},p.createElement(c.Z,{ref:function(t){return e.trigger14=(0,b.findDOMNode)(t)},className:"trigger-position-button",value:"Center",onMouseOver:function(){return e.show(14)}}))),p.createElement(m.Z,{visible:t[2],triggerEl:this.trigger2,position:m.Z.Position.BOTTOM_LEFT,onRequestClose:function(){return e.hide(2)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[3],triggerEl:this.trigger3,position:m.Z.Position.BOTTOM,onRequestClose:function(){return e.hide(3)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[4],triggerEl:this.trigger4,position:m.Z.Position.BOTTOM_RIGHT,onRequestClose:function(){return e.hide(4)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[5],triggerEl:this.trigger5,position:m.Z.Position.TOP_LEFT,onRequestClose:function(){return e.hide(5)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[6],triggerEl:this.trigger6,position:m.Z.Position.TOP,onRequestClose:function(){return e.hide(6)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[7],triggerEl:this.trigger7,position:m.Z.Position.TOP_RIGHT,onRequestClose:function(){return e.hide(7)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[8],triggerEl:this.trigger8,position:m.Z.Position.LEFT_TOP,onRequestClose:function(){return e.hide(8)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[9],triggerEl:this.trigger9,position:m.Z.Position.LEFT,onRequestClose:function(){return e.hide(9)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[10],triggerEl:this.trigger10,position:m.Z.Position.LEFT_BOTTOM,onRequestClose:function(){return e.hide(10)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[11],triggerEl:this.trigger11,position:m.Z.Position.RIGHT_TOP,onRequestClose:function(){return e.hide(11)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[12],triggerEl:this.trigger12,position:m.Z.Position.RIGHT,onRequestClose:function(){return e.hide(12)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[13],triggerEl:this.trigger13,position:m.Z.Position.RIGHT_BOTTOM,onRequestClose:function(){return e.hide(13)}},p.createElement(g.Z,{data:o})),p.createElement(m.Z,{visible:t[14],triggerEl:this.trigger14,position:m.Z.Position.CENTER,onRequestClose:function(){return e.hide(14)}},p.createElement(g.Z,{data:o})))))),p.createElement(f.Z,null,p.createElement(v.Z,{className:"example-header",title:"Customized Popover Triangle"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"popover-example-wrapper"},p.createElement(c.Z,{ref:function(t){return e.trigger15=(0,b.findDOMNode)(t)},className:"trigger-button",value:"Toggle Popover",onMouseOver:function(){return e.show(15)}}),p.createElement(m.Z,{className:"customized-popover",visible:t[15],triggerEl:this.trigger15,triangle:p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-popover-triangle",width:"17",height:"7"},p.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}})),onRequestClose:function(){return e.hide(15)}},p.createElement("div",{style:{padding:20}},"Popover Content")))))),p.createElement(f.Z,null,p.createElement(v.Z,{className:"example-header",title:"Popover Provider"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"popover-example-wrapper"},p.createElement(d.Z,{className:"customized-popover",popoverContent:p.createElement("div",{style:{padding:20}},"Popover Content")},p.createElement(c.Z,{className:"trigger-button",value:"Toggle Popover",onMouseOver:function(){return console.log("onMouseOver")}})))))),p.createElement(f.Z,null,p.createElement(v.Z,{className:"example-header",title:"Popover in Dialog"}),p.createElement("div",{className:"widget-content"},p.createElement("div",{className:"example-content"},p.createElement("div",{className:"popover-example-wrapper"},p.createElement(c.Z,{className:"trigger-button",value:"Show Dialog",onClick:function(){return e.show(16)}}),p.createElement(h.Z,{visible:t[16],onRequestClose:function(){return e.hide(16)}},(function(r){return p.createElement("div",{className:"popover-dialog-content-scroller"},p.createElement(c.Z,{ref:function(t){return e.trigger17=(0,b.findDOMNode)(t)},className:"dialog-trigger-button",value:"Toggle Popover",onMouseOver:function(){return e.show(17)}}),p.createElement(m.Z,{position:m.Z.Position.BOTTOM_LEFT,visible:t[17],triggerEl:e.trigger17,parentEl:r,onRequestClose:function(){return e.hide(17)}},p.createElement(g.Z,{data:o})),p.createElement(d.Z,{className:"customized-popover",position:d.Z.Position.BOTTOM_LEFT,parentEl:r,popoverContent:p.createElement("div",{style:{padding:20}},"Popover Content")},p.createElement(c.Z,{className:"dialog-trigger-button",value:"Toggle Popover Provider"})),p.createElement(c.Z,{ref:function(t){return e.trigger18=(0,b.findDOMNode)(t)},className:"dialog-trigger-button",value:"Toggle Popover",onMouseOver:function(){return e.show(18)}}),p.createElement(m.Z,{position:m.Z.Position.BOTTOM_LEFT,visible:t[18],triggerEl:e.trigger18,shouldFollowScroll:!0,onRequestClose:function(){return e.hide(18)}},p.createElement(g.Z,{data:o})),p.createElement(d.Z,{className:"customized-popover",position:d.Z.Position.BOTTOM_LEFT,shouldFollowScroll:!0,popoverContent:p.createElement("div",{style:{padding:20}},"Popover Content")},p.createElement(c.Z,{className:"dialog-trigger-button",value:"Toggle Popover Provider"})))})))))),p.createElement("h2",{className:"example-title"},"Properties"),p.createElement(Z.Z,{data:E}))}}]),O}(p.Component);const A=F},5171:(e,t,o)=>{o.d(t,{Z:()=>P});var r=o(87462),n=o(45987),i=o(15671),l=o(43144),s=o(97326),a=o(60136),u=o(82963),p=o(61120),c=o(4942),m=o(37699),d=o(45697),g=o.n(d),f=o(70476),v=o(32371),h=o(75717),b=o(41844),Z=o.n(b),E=o(79952),y=o(64997),O=["className","contentClassName","closeWait","onRequestClose"];var T=function(e){(0,a.Z)(g,e);var t,o,d=(t=g,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,p.Z)(t);if(o){var n=(0,p.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function g(e){var t;(0,i.Z)(this,g);for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return t=d.call.apply(d,[this,e].concat(r)),(0,c.Z)((0,s.Z)(t),"resetPosition",(function(){var e,o;null===(e=t.popInstance)||void 0===e||null===(o=e.resetPosition)||void 0===o||o.call(e)})),(0,c.Z)((0,s.Z)(t),"clearCloseTimeout",(function(){t.closeTimeout&&(clearTimeout(t.closeTimeout),t.closeTimeout=null)})),(0,c.Z)((0,s.Z)(t),"handleMouseOver",(function(){t.clearCloseTimeout()})),(0,c.Z)((0,s.Z)(t),"handleMouseOut",(function(e){t.clearCloseTimeout(),t.closeTimeout=setTimeout((function(){var o,r;return null===(o=(r=t.props).onRequestClose)||void 0===o?void 0:o.call(r,e)}),t.props.closeWait)})),(0,c.Z)((0,s.Z)(t),"handleRender",(function(e){for(var o,r,n=t.props.triggerEl,i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];null===(o=(r=t.props).onRender)||void 0===o||o.call.apply(o,[r,e].concat(l)),E.Z.addEvent(n,"mouseover",t.handleMouseOver),E.Z.addEvent(n,"mouseout",t.handleMouseOut),E.Z.addEvent(e,"mouseover",t.handleMouseOver),E.Z.addEvent(e,"mouseout",t.handleMouseOut)})),(0,c.Z)((0,s.Z)(t),"handleDestroy",(function(e){for(var o,r,n=t.props.triggerEl,i=arguments.length,l=new Array(i>1?i-1:0),s=1;s<i;s++)l[s-1]=arguments[s];null===(o=(r=t.props).onDestroy)||void 0===o||o.call.apply(o,[r,e].concat(l)),E.Z.removeEvent(n,"mouseover",t.handleMouseOver),E.Z.removeEvent(n,"mouseout",t.handleMouseOut),E.Z.removeEvent(e,"mouseover",t.handleMouseOver),E.Z.removeEvent(e,"mousemove",t.handleMouseOut)})),t.closeTimeout=null,t.pop=(0,m.createRef)(),t.popInstance=null,t}return(0,l.Z)(g,[{key:"componentDidMount",value:function(){var e;this.popInstance=null===(e=this.pop)||void 0===e?void 0:e.current}},{key:"componentWillUnmount",value:function(){this.clearCloseTimeout()}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.contentClassName,i=(e.closeWait,e.onRequestClose,(0,n.Z)(e,O));return m.createElement(f.Z,(0,r.Z)({},i,{ref:this.pop,className:Z()("popover",(0,c.Z)({},t,t)),contentClassName:Z()("popover-content",(0,c.Z)({},o,o)),onRender:this.handleRender,onDestroy:this.handleDestroy}))}}]),g}(m.Component);(0,c.Z)(T,"Position",h.Z),(0,c.Z)(T,"Theme",v.Z),T.propTypes={className:g().string,contentClassName:g().string,modalClassName:g().string,style:g().object,parentEl:g().object,triggerEl:g().object,visible:g().bool,hasTriangle:g().bool,container:g().element,triangle:g().element,theme:g().oneOf(y.ZP.enumerateValue(v.Z)),position:g().oneOf(y.ZP.enumerateValue(h.Z)),isAnimated:g().bool,depth:g().number,isBlurClose:g().bool,shouldFollowScroll:g().bool,scrollEl:g().object,closeWait:g().number,resetPositionWait:g().number,showModal:g().bool,onRender:g().func,onRendered:g().func,onDestroy:g().func,onDestroyed:g().func,onRequestClose:g().func,onWheel:g().func},T.defaultProps={parentEl:document.body,visible:!1,hasTriangle:!0,theme:v.Z.DEFAULT,position:h.Z.BOTTOM,isAnimated:!0,isBlurClose:!0,shouldFollowScroll:!1,closeWait:1e3/6,resetPositionWait:250,showModal:!1};const P=T},46836:(e,t,o)=>{o.d(t,{Z:()=>T});var r=o(87462),n=o(45987),i=o(15671),l=o(43144),s=o(97326),a=o(60136),u=o(82963),p=o(61120),c=o(4942),m=o(37699),d=o(45697),g=o.n(d),f=o(5171),v=o(32371),h=o(75717),b=o(79958),Z=o(64997),E=o(62013),y=["children","popoverContent","onRequestOpen","onRequestClose"];var O=function(e){(0,a.Z)(g,e);var t,o,d=(t=g,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,p.Z)(t);if(o){var n=(0,p.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function g(e){var t;(0,i.Z)(this,g);for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return t=d.call.apply(d,[this,e].concat(r)),(0,c.Z)((0,s.Z)(t),"show",(function(){t.state.visible||t.setState({visible:!0},(function(){var e=t.props.onRequestOpen;null==e||e()}))})),(0,c.Z)((0,s.Z)(t),"hide",(function(){t.state.visible&&t.setState({visible:!1},(function(){var e=t.props.onRequestClose;null==e||e()}))})),(0,c.Z)((0,s.Z)(t),"toggle",(function(){t.setState({visible:!t.state.visible},(function(){if(t.state.visible){var e=t.props.onRequestOpen;null==e||e()}else{var o=t.props.onRequestClose;null==o||o()}}))})),(0,c.Z)((0,s.Z)(t),"handleMouseOver",(function(e){var o,r,n,i;null===(o=t.props)||void 0===o||null===(r=o.children)||void 0===r||null===(n=r.props)||void 0===n||null===(i=n.onMouseOver)||void 0===i||i.call(n,e),t.show()})),t.trigger=(0,m.createRef)(),t.triggerEl=null,t.state={visible:e.visible},t}return(0,l.Z)(g,[{key:"componentDidMount",value:function(){var e;this.triggerEl=(0,b.findDOMNode)(null===(e=this.trigger)||void 0===e?void 0:e.current)}},{key:"render",value:function(){var e=this.props,t=e.children,o=e.popoverContent,i=(e.onRequestOpen,e.onRequestClose,(0,n.Z)(e,y)),l=this.state.visible;return o?m.createElement(m.Fragment,null,(0,m.cloneElement)(t,{ref:this.trigger,onMouseOver:this.handleMouseOver}),m.createElement(f.Z,(0,r.Z)({},i,{triggerEl:this.triggerEl,visible:l,onRequestClose:this.hide}),o)):t}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{prevProps:e,visible:E.Z.getDerivedState(e,t,"visible")}}}]),g}(m.Component);(0,c.Z)(O,"Position",h.Z),(0,c.Z)(O,"Theme",v.Z),O.propTypes={children:g().any,className:g().string,contentClassName:g().string,modalClassName:g().string,style:g().object,parentEl:g().object,triggerEl:g().object,visible:g().bool,hasTriangle:g().bool,triangle:g().element,theme:g().oneOf(Z.ZP.enumerateValue(v.Z)),position:g().oneOf(Z.ZP.enumerateValue(h.Z)),isAnimated:g().bool,depth:g().number,isBlurClose:g().bool,shouldFollowScroll:g().bool,scrollEl:g().object,closeWait:g().number,resetPositionWait:g().number,showModal:g().bool,onRender:g().func,onRendered:g().func,onDestroy:g().func,onDestroyed:g().func,onRequestOpen:g().func,onRequestClose:g().func,onWheel:g().func,popoverContent:g().any},O.defaultProps={parentEl:document.body,visible:!1,hasTriangle:!0,theme:v.Z.DEFAULT,position:h.Z.BOTTOM,isAnimated:!0,isBlurClose:!0,shouldFollowScroll:!1,closeWait:1e3/6,resetPositionWait:250,showModal:!1};const T=O},59141:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(8081),n=o.n(r),i=o(23645),l=o.n(i)()(n());l.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const s=l},66242:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(8081),n=o.n(r),i=o(23645),l=o.n(i)()(n());l.push([e.id,".pop-examples .material-text-field{margin-top:24px}.pop-examples .trigger-button{width:160px;height:50px;margin:0}.pop-examples .button-group-wrapper{position:relative;width:500px;height:280px;margin-top:32px}.pop-examples .button-group-wrapper .button-group .trigger-position-button{width:120px}.pop-examples .button-group-wrapper .button-group.top{position:absolute;left:50px}.pop-examples .button-group-wrapper .button-group.top .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child{margin-left:0}.pop-examples .button-group-wrapper .button-group.left{position:absolute;top:60px;left:0}.pop-examples .button-group-wrapper .button-group.left .trigger-position-button{display:block;margin-top:20px}.pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child{margin-top:0}.pop-examples .button-group-wrapper .button-group.right{position:absolute;top:60px;right:0}.pop-examples .button-group-wrapper .button-group.right .trigger-position-button{display:block;margin-top:20px}.pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child{margin-top:0}.pop-examples .button-group-wrapper .button-group.bottom{position:absolute;left:50px;bottom:0}.pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child{margin-left:0}.pop-examples .button-group-wrapper .button-group.center{position:absolute;left:190px;top:120px}.pop-examples .button-group-wrapper .button-group.center .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child{margin-left:0}",""]);const s=l},13734:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(8081),n=o.n(r),i=o(23645),l=o.n(i)()(n());l.push([e.id,".customized-popover .customized-popover-triangle{position:absolute;left:-9px;top:0}.customized-popover .popover-content{border:1px solid #e7e7e7}.popover-dialog-content-scroller{width:1000px;height:1000px}.popover-dialog-content-scroller .dialog-trigger-button{display:block;width:auto;margin-bottom:16px}",""]);const s=l},71887:(e,t,o)=>{var r=o(93379),n=o.n(r),i=o(7795),l=o.n(i),s=o(90569),a=o.n(s),u=o(3565),p=o.n(u),c=o(19216),m=o.n(c),d=o(44589),g=o.n(d),f=o(66242),v={};v.styleTagTransform=g(),v.setAttributes=p(),v.insert=a().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=m(),n()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals}}]);