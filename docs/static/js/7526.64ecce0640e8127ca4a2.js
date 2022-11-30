"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[7526],{15439:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(15671),a=n(43144),l=n(97326),o=n(60136),c=n(82963),i=n(61120),s=n(4942),u=n(37699),p=n(45697),m=n.n(p),d=n(14659),h=n(93379),f=n.n(h),Z=n(7795),E=n.n(Z),y=n(90569),b=n.n(y),v=n(3565),g=n.n(v),R=n(19216),T=n.n(R),P=n(44589),N=n.n(P),C=n(59141),w={};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}w.styleTagTransform=N(),w.setAttributes=g(),w.insert=b().bind(null,"head"),w.domAPI=E(),w.insertStyleElement=T(),f()(C.Z,w),C.Z&&C.Z.locals&&C.Z.locals;var x=function(e){(0,o.Z)(m,e);var t,n,p=(t=m,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function m(e){var t;return(0,r.Z)(this,m),t=p.call(this,e),(0,s.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var n in t.props.data)e.push(O({name:n},t.props.data[n]));return e})),t}return(0,a.Z)(m,[{key:"render",value:function(){return u.createElement("div",{className:"prop-type-desc-table-wrapper"},u.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),m}(u.Component);x.propTypes={data:m().object};const I=x},40541:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(15671),a=n(43144),l=n(97326),o=n(60136),c=n(82963),i=n(61120),s=n(4942),u=n(37699),p=n(99015),m=n(81182),d=n(46748),h=n(88550),f=n(51689),Z=n(15439);const E=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"The button theme.Can be primary,highlight,success,warning,error.","default":"Theme.DEFAULT"},"isRounded":{"type":"PropTypes.bool","desc":"If true,the button will have rounded corners.","default":"false"},"isCircular":{"type":"PropTypes.bool","desc":"If true,the button will be round.","default":"false"},"title":{"type":"PropTypes.string","desc":"The title of the button."},"value":{"type":"PropTypes.any","desc":"The text of the button.","default":""},"type":{"type":"PropTypes.string","desc":"The type of button.Can be reset,submit or button.","default":"button"},"disabled":{"type":"PropTypes.bool","desc":"Disables the button if set to true.","default":"false"},"isLoading":{"type":"PropTypes.bool","desc":"If true,the button will be have loading effect.","default":"false"},"disableTouchRipple":{"type":"PropTypes.bool","desc":"If true,the element\'s ripple effect will be disabled.","default":"false"},"iconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.It will display on the left."},"rightIconCls":{"type":"PropTypes.string","desc":"Use this property to display an icon.It will display on the right."},"rippleDisplayCenter":{"type":"PropTypes.bool","desc":"If true,the ripple effect will be display centered.","default":"false"},"tip":{"type":"PropTypes.string"},"tipPosition":{"type":"PropTypes.oneOf","default":"TipProvider.Position.BOTTOM"},"renderer":{"type":"PropTypes.func","desc":"You can create a complicated renderer callback instead of value prop."},"onClick":{"type":"PropTypes.func","desc":"Callback function fired when the button is touch-tapped."}}');var y=n(93379),b=n.n(y),v=n(7795),g=n.n(v),R=n(90569),T=n.n(R),P=n(3565),N=n.n(P),C=n(19216),w=n.n(C),S=n(44589),O=n.n(S),x=n(81075),I={};I.styleTagTransform=O(),I.setAttributes=N(),I.insert=T().bind(null,"head"),I.domAPI=g(),I.insertStyleElement=w(),b()(x.Z,I),x.Z&&x.Z.locals&&x.Z.locals;var A=function(e){(0,o.Z)(b,e);var t,n,y=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,i.Z)(t);if(n){var a=(0,i.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,c.Z)(this,e)});function b(e){var t;return(0,r.Z)(this,b),t=y.call(this,e),(0,s.Z)((0,l.Z)(t),"show",(function(e){var n=t.state.AnchorButtonVisible;n[e]=!0,t.setState({AnchorButtonVisible:n})})),(0,s.Z)((0,l.Z)(t),"hide",(function(e){var n=t.state.AnchorButtonVisible;n[e]=!1,t.setState({AnchorButtonVisible:n})})),t.state={AnchorButtonVisible:{}},t}return(0,a.Z)(b,[{key:"render",value:function(){var e=this,t=this.state.AnchorButtonVisible;return u.createElement("div",{className:"example anchor-button-examples"},u.createElement("h2",{className:"example-title"},"Anchor Button"),u.createElement("p",null,u.createElement("span",null,"Anchor Button"),"are used for general functions and reduce the amount of layering on the screen, making it more readable."),u.createElement("h2",{className:"example-title"},"Examples"),u.createElement(m.Z,null,u.createElement(d.Z,{className:"example-header",title:"Basic"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"Anchor Button")," with default theme, ",u.createElement("code",null,"success"),", ",u.createElement("code",null,"warning"),", ",u.createElement("code",null,"error")," and ",u.createElement("code",null,"disabled")," props applied."),u.createElement(p.Z,{value:"Default",tip:"Default"}),u.createElement(p.Z,{value:"Primary",tip:"Primary",theme:p.Z.Theme.PRIMARY}),u.createElement(p.Z,{value:"Secondary",tip:"Secondary",theme:p.Z.Theme.SECONDARY}),u.createElement(p.Z,{value:"Highlight",tip:"Highlight",theme:p.Z.Theme.HIGHLIGHT}),u.createElement(p.Z,{value:"Info",tip:"Info",theme:p.Z.Theme.INFO}),u.createElement(p.Z,{value:"Success",tip:"Success",theme:p.Z.Theme.SUCCESS}),u.createElement(p.Z,{value:"Warning",tip:"Warning",theme:p.Z.Theme.WARNING}),u.createElement(p.Z,{value:"Error",tip:"Error",theme:p.Z.Theme.ERROR}),u.createElement(p.Z,{value:"Disabled",tip:"Disabled",disabled:!0}))))),u.createElement(m.Z,null,u.createElement(d.Z,{className:"example-header",title:"With border radius"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,"Set the ",u.createElement("code",null,"isRounded")," property to true for button round corner."),u.createElement(p.Z,{value:"Default",isRounded:!0}),u.createElement(p.Z,{value:"Primary",theme:p.Z.Theme.PRIMARY,isRounded:!0}),u.createElement(p.Z,{value:"Secondary",theme:p.Z.Theme.SECONDARY,isRounded:!0}),u.createElement(p.Z,{value:"Highlight",theme:p.Z.Theme.HIGHLIGHT,isRounded:!0}),u.createElement(p.Z,{value:"Info",theme:p.Z.Theme.INFO,isRounded:!0}),u.createElement(p.Z,{value:"Success",theme:p.Z.Theme.SUCCESS,isRounded:!0}),u.createElement(p.Z,{value:"Warning",theme:p.Z.Theme.WARNING,isRounded:!0}),u.createElement(p.Z,{value:"Error",theme:p.Z.Theme.ERROR,isRounded:!0}),u.createElement(p.Z,{value:"Disabled",disabled:!0,isRounded:!0}))))),u.createElement(m.Z,null,u.createElement(d.Z,{className:"example-header",title:"With icon"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,"Set the ",u.createElement("code",null,"iconCls")," property for button left icon.And set the",u.createElement("code",null,"rightIconCls")," property for button right icon."),u.createElement(p.Z,{value:"Reset",iconCls:"fas fa-undo"}),u.createElement(p.Z,{value:"Add",theme:p.Z.Theme.SUCCESS,iconCls:"fas fa-plus"}),u.createElement(p.Z,{value:"Delete",theme:p.Z.Theme.ERROR,iconCls:"fas fa-trash-alt"}),u.createElement(p.Z,{value:"Next",theme:p.Z.Theme.PRIMARY,rightIconCls:"fas fa-angle-right"}))))),u.createElement(m.Z,null,u.createElement(d.Z,{className:"example-header",title:"Use circle shape"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,"Set the ",u.createElement("code",null,"isCircular")," property to true for circle shape flat button."),u.createElement(p.Z,{value:"Primary",isCircular:!0}),u.createElement(p.Z,{value:"Success",theme:p.Z.Theme.SUCCESS,isCircular:!0}),u.createElement(p.Z,{value:"Error",theme:p.Z.Theme.ERROR,isCircular:!0}),u.createElement(p.Z,{value:"Warning",theme:p.Z.Theme.WARNING,isCircular:!0}))))),u.createElement(m.Z,null,u.createElement(d.Z,{className:"example-header",title:"In Dialog"}),u.createElement("div",{className:"widget-content"},u.createElement("div",{className:"example-content"},u.createElement("div",{className:"examples-wrapper"},u.createElement("p",null,u.createElement("code",null,"Anchor Button")," with default theme, ",u.createElement("code",null,"success"),", ",u.createElement("code",null,"warning"),", ",u.createElement("code",null,"error")," and ",u.createElement("code",null,"disabled")," props applied."),u.createElement(h.Z,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),u.createElement(f.Z,{visible:t[1],onRequestClose:function(){return e.hide(1)}},(function(e){return u.createElement("div",{className:"popover-dialog-content-scroller"},u.createElement(p.Z,{value:"Default",parentEl:e,tip:"Default"}),u.createElement(p.Z,{value:"Primary",tip:"Primary",parentEl:e,theme:p.Z.Theme.PRIMARY}),u.createElement(p.Z,{value:"Secondary",tip:"Secondary",parentEl:e,theme:p.Z.Theme.SECONDARY}),u.createElement(p.Z,{value:"Highlight",tip:"Highlight",parentEl:e,theme:p.Z.Theme.HIGHLIGHT}),u.createElement(p.Z,{value:"Info",tip:"Info",parentEl:e,theme:p.Z.Theme.INFO}),u.createElement(p.Z,{value:"Success",tip:"Success",parentEl:e,theme:p.Z.Theme.SUCCESS}),u.createElement(p.Z,{value:"Warning",tip:"Warning",parentEl:e,theme:p.Z.Theme.WARNING}),u.createElement(p.Z,{value:"Error",tip:"Error",parentEl:e,theme:p.Z.Theme.ERROR}),u.createElement(p.Z,{value:"Disabled",tip:"Disabled",parentEl:e,disabled:!0}))})))))),u.createElement("h2",{className:"example-title"},"Properties"),u.createElement(Z.Z,{data:E}))}}]),b}(u.Component);const D=A},99015:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(87462),a=n(45987),l=n(15671),o=n(43144),c=n(97326),i=n(60136),s=n(82963),u=n(61120),p=n(4942),m=n(37699),d=n(45697),h=n.n(d),f=n(41844),Z=n.n(f),E=n(3628),y=n(95857),b=n(32371),v=n(75717),g=n(64997),R=["className"];var T=function(e){(0,i.Z)(h,e);var t,n,d=(t=h,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(n){var a=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,s.Z)(this,e)});function h(e){var t;(0,l.Z)(this,h);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t=d.call.apply(d,[this,e].concat(r)),(0,p.Z)((0,c.Z)(t),"startRipple",(function(e,n){t.button&&t.button.current&&t.button.current.startRipple(e,n)})),(0,p.Z)((0,c.Z)(t),"endRipple",(function(){t.button&&t.button.current&&t.button.current.endRipple()})),(0,p.Z)((0,c.Z)(t),"triggerRipple",(function(e,n){t.button&&t.button.current&&t.button.current.triggerRipple(e,n)})),t.button=(0,m.createRef)(),t}return(0,o.Z)(h,[{key:"render",value:function(){var e=this.props,t=e.className,n=(0,a.Z)(e,R);return m.createElement(E.Z,(0,r.Z)({},n,{ref:this.button,className:Z()("anchor-button",(0,p.Z)({},t,t))}))}}]),h}(m.Component);(0,p.Z)(T,"Theme",b.Z),(0,p.Z)(T,"TipPosition",v.Z),T.propTypes={className:h().string,style:h().object,theme:h().oneOf(g.ZP.enumerateValue(b.Z)),isRounded:h().bool,isCircular:h().bool,title:h().string,value:h().any,type:h().string,disabled:h().bool,isLoading:h().bool,disableTouchRipple:h().bool,iconCls:h().string,rightIconCls:h().string,rippleDisplayCenter:h().bool,tip:h().string,tipPosition:h().oneOf(g.ZP.enumerateValue(y.Z.Position)),renderer:h().func,onClick:h().func},T.defaultProps={theme:b.Z.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:y.Z.Position.BOTTOM};const P=T},59141:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8081),a=n.n(r),l=n(23645),o=n.n(l)()(a());o.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const c=o},81075:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8081),a=n.n(r),l=n(23645),o=n.n(l)()(a());o.push([e.id,".anchor-button-examples .anchor-button{margin:0 10px 10px 0}.anchor-button-examples .anchor-button.button-circular{width:60px;height:60px;padding:0;line-height:60px}.example-content .dialog-button{width:120px}.popover-dialog-content-scroller{width:1000px;height:1000px}",""]);const c=o}}]);