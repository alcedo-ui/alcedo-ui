(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1125:function(e,t,o){(e.exports=o(134)(!1)).push([e.i,".customized-popover .customized-popover-triangle {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.customized-popover .popover-content {\n  border: 1px solid #e7e7e7; }\n",""])},1126:function(e,t,o){var n=o(1125);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(133)(n,a);n.locals&&(e.exports=n.locals)},1127:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:"null"},contentClassName:{type:"PropTypes.string",desc:"The CSS class name of the content element.",default:"null"},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},triggerEl:{type:"PropTypes.object",desc:"This is the DOM element that will be used to set the position of the popover.",default:"null"},visible:{type:"PropTypes.bool",desc:"If true,the popover is visible.",default:"false"},hasTriangle:{type:"PropTypes.bool",desc:"If true,the popover will have a triangle on the top of the DOM element.",default:"true"},triangle:{type:"PropTypes.element"},theme:{type:"PropTypes.oneOf",desc:"The popover theme.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},position:{type:"PropTypes.oneOf",desc:"The popover alignment.The value can be Popover.Position.LEFT or Popover.Position.RIGHT.",default:"Position.BOTTOM"},isAnimated:{type:"PropTypes.bool",desc:"If true, popover will have animation effects.",default:"true"},depth:{type:"PropTypes.number",desc:"The depth of Paper component.",default:"6"},isBlurClose:{type:"PropTypes.bool",default:"true"},isEscClose:{type:"PropTypes.bool",default:"true"},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},isTriggerPositionFixed:{type:"PropTypes.bool",default:"false"},onRender:{type:"PropTypes.func",desc:"The function of popover render."},onRendered:{type:"PropTypes.func",desc:"The function of popover rendered."},onDestroy:{type:"PropTypes.func",desc:"The function of popover destroy."},onDestroyed:{type:"PropTypes.func",desc:"The function of popover destroyed."},onRequestClose:{type:"PropTypes.func",desc:"Callback function fired when the popover is requested to be closed."},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},1296:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return P});var n=o(14),a=o.n(n),r=o(9),i=o.n(r),s=o(13),l=o.n(s),p=o(7),u=o.n(p),c=o(8),m=o.n(c),g=o(1),d=o.n(g),v=o(36),f=o(922),h=o(962),b=o(114),E=o(921),T=o(920),y=o(918),w=o(1127),P=(o(932),o(1126),function(e){function t(e){i()(this,t);var o=u()(this,(t.__proto__||a()(t)).call(this,e));return o.state={menuVisible:{},triggerEl:{}},o.showMenu=o.showMenu.bind(o),o.hideMenu=o.hideMenu.bind(o),o}return m()(t,e),l()(t,[{key:"showMenu",value:function(e){var t=this.state.menuVisible;t[e]=!0,this.setState({menuVisible:t})}},{key:"hideMenu",value:function(e){var t=this.state.menuVisible;t[e]=!1,this.setState({menuVisible:t})}},{key:"componentDidMount",value:function(){for(var e={},t=0;t<=15;t++)e[t]=Object(v.findDOMNode)(this.refs["trigger"+t]);this.setState({triggerEl:e})}},{key:"render",value:function(){var e=this,t=this.state,o=t.menuVisible,n=t.triggerEl,a=[{iconCls:"fab fa-facebook",value:"Facebook",text:"Facebook"},{iconCls:"fab fa-twitter",value:"Twitter",text:"Twitter"},{iconCls:"fab fa-google-plus-g",value:"Google+",text:"Google+"}];return d.a.createElement("div",{className:"example pop-examples popover-examples"},d.a.createElement("h2",{className:"example-title"},"Popover"),d.a.createElement("p",null,"A ",d.a.createElement("span",null,"Popover")," can be used as an alternative to a Drop Down Popover that can contain elements inside."),d.a.createElement("h2",{className:"example-title"},"Examples"),d.a.createElement(E.a,null,d.a.createElement(T.a,{className:"example-header",title:"Basic"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"popup-example-wrapper"},d.a.createElement("p",null,d.a.createElement("code",null,"Popover")," simple example."),d.a.createElement(f.a,{ref:"trigger0",className:"trigger-button",value:"Toggle Popover",onMouseOver:function(){e.showMenu(0)}}),d.a.createElement(h.a,{theme:h.a.Theme.PRIMARY,visible:o[0],triggerEl:n[0],onRequestClose:function(){e.hideMenu(0)}},d.a.createElement("div",{style:{padding:20,color:"#fff"}},"Popover")))))),d.a.createElement(E.a,null,d.a.createElement(T.a,{className:"example-header",title:"Without triangle"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"popup-example-wrapper"},d.a.createElement("p",null,"Set ",d.a.createElement("code",null,"hasTriangle")," to false,the popover will have no triangle on the top of the DOM element."),d.a.createElement(f.a,{ref:"trigger1",className:"trigger-button",value:"Toggle Popover",onMouseOver:function(){e.showMenu(1)}}),d.a.createElement(h.a,{visible:o[1],triggerEl:n[1],hasTriangle:!1,onRequestClose:function(){e.hideMenu(1)}},d.a.createElement(b.a,{data:a})))))),d.a.createElement(E.a,null,d.a.createElement(T.a,{className:"example-header",title:"With value"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"popup-example-wrapper"},d.a.createElement("p",null,"Set the ",d.a.createElement("code",null,"value")," property to show different position of ",d.a.createElement("code",null,"Popover"),"."),d.a.createElement("div",{className:"button-group-wrapper"},d.a.createElement("div",{className:"button-group top"},d.a.createElement(f.a,{ref:"trigger5",className:"trigger-position-button",value:"Top Left",onMouseOver:function(){e.showMenu(5)}}),d.a.createElement(f.a,{ref:"trigger6",className:"trigger-position-button",value:"Top",onMouseOver:function(){e.showMenu(6)}}),d.a.createElement(f.a,{ref:"trigger7",className:"trigger-position-button",value:"Top right",onMouseOver:function(){e.showMenu(7)}})),d.a.createElement("div",{className:"button-group right"},d.a.createElement(f.a,{ref:"trigger11",className:"trigger-position-button",value:"Right Top",onMouseOver:function(){e.showMenu(11)}}),d.a.createElement(f.a,{ref:"trigger12",className:"trigger-position-button",value:"Right",onMouseOver:function(){e.showMenu(12)}}),d.a.createElement(f.a,{ref:"trigger13",className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){e.showMenu(13)}})),d.a.createElement("div",{className:"button-group bottom"},d.a.createElement(f.a,{ref:"trigger2",className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){e.showMenu(2)}}),d.a.createElement(f.a,{ref:"trigger3",className:"trigger-position-button",value:"Bottom",onMouseOver:function(){e.showMenu(3)}}),d.a.createElement(f.a,{ref:"trigger4",className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){e.showMenu(4)}})),d.a.createElement("div",{className:"button-group left"},d.a.createElement(f.a,{ref:"trigger8",className:"trigger-position-button",value:"Left Top",onMouseOver:function(){e.showMenu(8)}}),d.a.createElement(f.a,{ref:"trigger9",className:"trigger-position-button",value:"Left",onMouseOver:function(){e.showMenu(9)}}),d.a.createElement(f.a,{ref:"trigger10",className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){e.showMenu(10)}})),d.a.createElement("div",{className:"button-group center"},d.a.createElement(f.a,{ref:"trigger14",className:"trigger-position-button",value:"Center",onMouseOver:function(){e.showMenu(14)}}))),d.a.createElement(h.a,{visible:o[2],triggerEl:n[2],position:h.a.Position.BOTTOM_LEFT,onRequestClose:function(){e.hideMenu(2)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[3],triggerEl:n[3],position:h.a.Position.BOTTOM,onRequestClose:function(){e.hideMenu(3)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[4],triggerEl:n[4],position:h.a.Position.BOTTOM_RIGHT,onRequestClose:function(){e.hideMenu(4)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[5],triggerEl:n[5],position:h.a.Position.TOP_LEFT,onRequestClose:function(){e.hideMenu(5)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[6],triggerEl:n[6],position:h.a.Position.TOP,onRequestClose:function(){e.hideMenu(6)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[7],triggerEl:n[7],position:h.a.Position.TOP_RIGHT,onRequestClose:function(){e.hideMenu(7)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[8],triggerEl:n[8],position:h.a.Position.LEFT_TOP,onRequestClose:function(){e.hideMenu(8)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[9],triggerEl:n[9],position:h.a.Position.LEFT,onRequestClose:function(){e.hideMenu(9)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[10],triggerEl:n[10],position:h.a.Position.LEFT_BOTTOM,onRequestClose:function(){e.hideMenu(10)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[11],triggerEl:n[11],position:h.a.Position.RIGHT_TOP,onRequestClose:function(){e.hideMenu(11)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[12],triggerEl:n[12],position:h.a.Position.RIGHT,onRequestClose:function(){e.hideMenu(12)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[13],triggerEl:n[13],position:h.a.Position.RIGHT_BOTTOM,onRequestClose:function(){e.hideMenu(13)}},d.a.createElement(b.a,{data:a})),d.a.createElement(h.a,{visible:o[14],triggerEl:n[14],position:h.a.Position.CENTER,onRequestClose:function(){e.hideMenu(14)}},d.a.createElement(b.a,{data:a})))))),d.a.createElement(E.a,null,d.a.createElement(T.a,{className:"example-header",title:"Customized Popover Triangle"}),d.a.createElement("div",{className:"widget-content"},d.a.createElement("div",{className:"example-content"},d.a.createElement("div",{className:"popup-example-wrapper"},d.a.createElement(f.a,{ref:"trigger15",className:"trigger-button",value:"Toggle Popover",onMouseOver:function(){e.showMenu(15)}}),d.a.createElement(h.a,{className:"customized-popover",visible:o[15],triggerEl:n[15],triangle:d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-popover-triangle",width:"17",height:"7"},d.a.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}})),onRequestClose:function(){e.hideMenu(15)}},d.a.createElement("div",{style:{padding:20}},"Popover")))))),d.a.createElement("h2",{className:"example-title"},"Properties"),d.a.createElement(y.a,{data:w}))}}]),t}(g.Component))},916:function(e,t,o){(e.exports=o(134)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},917:function(e,t,o){var n=o(916);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(133)(n,a);n.locals&&(e.exports=n.locals)},918:function(e,t,o){"use strict";var n=o(6),a=o.n(n),r=o(14),i=o.n(r),s=o(9),l=o.n(s),p=o(13),u=o.n(p),c=o(7),m=o.n(c),g=o(8),d=o.n(g),v=o(1),f=o.n(v),h=o(0),b=o.n(h),E=o(919),T=(o(917),function(e){function t(e){l()(this,t);var o=m()(this,(t.__proto__||i()(t)).call(this,e));return o.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],o.generateData=o.generateData.bind(o),o}return d()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(a()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return f.a.createElement("div",{className:"prop-type-desc-table-wrapper"},f.a.createElement(E.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(v.Component));T.propTypes={data:b.a.object},T.defaultProps={data:null},t.a=T},931:function(e,t,o){(e.exports=o(134)(!1)).push([e.i,".pop-examples .trigger-button {\n  width: 160px;\n  height: 50px;\n  margin: 0; }\n\n.pop-examples .button-group-wrapper {\n  position: relative;\n  width: 500px;\n  height: 280px; }\n  .pop-examples .button-group-wrapper .button-group .trigger-position-button {\n    width: 120px; }\n  .pop-examples .button-group-wrapper .button-group.top {\n    position: absolute;\n    left: 50px; }\n    .pop-examples .button-group-wrapper .button-group.top .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.left {\n    position: absolute;\n    top: 60px;\n    left: 0; }\n    .pop-examples .button-group-wrapper .button-group.left .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.right {\n    position: absolute;\n    top: 60px;\n    right: 0; }\n    .pop-examples .button-group-wrapper .button-group.right .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.bottom {\n    position: absolute;\n    left: 50px;\n    bottom: 0; }\n    .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.center {\n    position: absolute;\n    left: 190px;\n    top: 120px; }\n    .pop-examples .button-group-wrapper .button-group.center .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child {\n        margin-left: 0; }\n",""])},932:function(e,t,o){var n=o(931);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};o(133)(n,a);n.locals&&(e.exports=n.locals)},962:function(e,t,o){"use strict";var n,a,r=o(6),i=o.n(r),s=o(10),l=o.n(s),p=o(26),u=o.n(p),c=o(14),m=o.n(c),g=o(9),d=o.n(g),v=o(13),f=o.n(v),h=o(7),b=o.n(h),E=o(8),T=o.n(E),y=o(1),w=o.n(y),P=o(0),x=o.n(P),M=o(11),N=o.n(M),O=o(139),C=o(4),R=o(16),H=o(27),k=o(5),q=o(186),D=(a=n=function(e){function t(e){var o;d()(this,t);for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var i=b()(this,(o=t.__proto__||m()(t)).call.apply(o,[this,e].concat(a)));return i.closeTimeout=null,i.clearCloseTimeout=i.clearCloseTimeout.bind(i),i.mouseOverHandler=i.mouseOverHandler.bind(i),i.mouseOutHandler=i.mouseOutHandler.bind(i),i.renderHandler=i.renderHandler.bind(i),i.destroyHandler=i.destroyHandler.bind(i),i}return T()(t,e),f()(t,[{key:"clearCloseTimeout",value:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},{key:"mouseOverHandler",value:function(){this.clearCloseTimeout()}},{key:"mouseOutHandler",value:function(e){var t=this.props.onRequestClose;this.clearCloseTimeout(),this.closeTimeout=setTimeout(function(){t&&t(e)},1e3/6)}},{key:"renderHandler",value:function(e){var t=this.props.triggerEl;H.a.addEvent(t,"mouseover",this.mouseOverHandler),H.a.addEvent(t,"mouseout",this.mouseOutHandler),H.a.addEvent(e,"mouseover",this.mouseOverHandler),H.a.addEvent(e,"mouseout",this.mouseOutHandler)}},{key:"destroyHandler",value:function(e){var t=this.props.triggerEl;H.a.removeEvent(t,"mouseover",this.mouseOverHandler),H.a.removeEvent(t,"mouseout",this.mouseOutHandler),H.a.removeEvent(e,"mouseover",this.mouseOverHandler),H.a.removeEvent(e,"mousemove",this.mouseOutHandler)}},{key:"resetPosition",value:function(){this.refs.popover.resetPosition()}},{key:"componentWillReceiveProps",value:function(e){var t=e.visible;e.isEscClose&&t&&q.a.push(this)}},{key:"componentWillUnmount",value:function(){this.clearCloseTimeout(),q.a.pop(this)}},{key:"render",value:function(){var e=this.props,t=e.className,o=e.contentClassName,n=(e.onRequestClose,u()(e,["className","contentClassName","onRequestClose"])),a=N()("popover",l()({},t,t)),r=N()("popover-content",l()({},o,o));return w.a.createElement(O.a,i()({},n,{ref:"popover",className:a,contentClassName:r,onRender:this.renderHandler,onDestroy:this.destroyHandler}))}}]),t}(y.Component),n.Position=R.a,n.Theme=C.a,a);D.propTypes={className:x.a.string,contentClassName:x.a.string,style:x.a.object,triggerEl:x.a.object,visible:x.a.bool,hasTriangle:x.a.bool,triangle:x.a.element,theme:x.a.oneOf(k.a.enumerateValue(C.a)),position:x.a.oneOf(k.a.enumerateValue(R.a)),isAnimated:x.a.bool,depth:x.a.number,isBlurClose:x.a.bool,isEscClose:x.a.bool,shouldPreventContainerScroll:x.a.bool,isTriggerPositionFixed:x.a.bool,onRender:x.a.func,onRendered:x.a.func,onDestroy:x.a.func,onDestroyed:x.a.func,onRequestClose:x.a.func,onWheel:x.a.func},D.defaultProps={className:null,contentClassName:null,style:null,depth:6,triggerEl:null,visible:!1,hasTriangle:!0,theme:C.a.DEFAULT,position:R.a.BOTTOM,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldPreventContainerScroll:!0,isTriggerPositionFixed:!1};var _=D;o.d(t,"a",function(){return _})}}]);