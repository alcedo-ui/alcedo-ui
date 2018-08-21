(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{426:function(e,t,o){"use strict";var n=o(10),i=o.n(n),r=o(108),a=o.n(r),p=o(109),s=o.n(p),l=o(110),u=o.n(l),c=o(111),g=o.n(c),m=o(112),f=o.n(m),d=o(0),h=o.n(d),b=o(430),T=(o(427),function(e){function t(e){s()(this,t);var o=g()(this,(t.__proto__||a()(t)).call(this,e));return o.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],o.generateData=o.generateData.bind(o),o}return f()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return h.a.createElement("div",{className:"prop-type-desc-table-wrapper"},h.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(d.Component));T.defaultProps={data:null},t.a=T},427:function(e,t,o){var n=o(428);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(184)(n,i);n.locals&&(e.exports=n.locals)},428:function(e,t,o){(e.exports=o(183)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},466:function(e,t,o){var n=o(467);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(184)(n,i);n.locals&&(e.exports=n.locals)},467:function(e,t,o){(e.exports=o(183)(!1)).push([e.i,".pop-examples .trigger-button {\n  width: 160px;\n  height: 50px;\n  margin: 0; }\n\n.pop-examples .button-group-wrapper {\n  position: relative;\n  width: 500px;\n  height: 280px; }\n  .pop-examples .button-group-wrapper .button-group .trigger-position-button {\n    width: 120px; }\n  .pop-examples .button-group-wrapper .button-group.top {\n    position: absolute;\n    left: 50px; }\n    .pop-examples .button-group-wrapper .button-group.top .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.left {\n    position: absolute;\n    top: 60px;\n    left: 0; }\n    .pop-examples .button-group-wrapper .button-group.left .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.right {\n    position: absolute;\n    top: 60px;\n    right: 0; }\n    .pop-examples .button-group-wrapper .button-group.right .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child {\n        margin-top: 0; }\n  .pop-examples .button-group-wrapper .button-group.bottom {\n    position: absolute;\n    left: 50px;\n    bottom: 0; }\n    .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child {\n        margin-left: 0; }\n  .pop-examples .button-group-wrapper .button-group.center {\n    position: absolute;\n    left: 190px;\n    top: 120px; }\n    .pop-examples .button-group-wrapper .button-group.center .trigger-position-button {\n      margin-left: 20px; }\n      .pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child {\n        margin-left: 0; }\n",""])},735:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},contentClassName:{type:"PropTypes.string",desc:"The CSS class name of the content element."},modalClassName:{type:"PropTypes.string"},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The popover theme.Can be primary,highlight,success,warning,error.",default:"Theme.DARK"},triggerEl:{type:"PropTypes.object",desc:"This is the DOM element that will be used to set the position of the popover."},visible:{type:"PropTypes.bool",desc:"If true,the popover is visible.",default:"false"},hasTriangle:{type:"PropTypes.bool",desc:"If true,the popover will have a triangle on the top of the DOM element.",default:"true"},triangle:{type:"PropTypes.element"},position:{type:"PropTypes.oneOf",desc:"The popover alignment.",default:"Position.BOTTOM"},isAnimated:{type:"PropTypes.bool",desc:"If true, menu will have animation effects.",default:"true"},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},depth:{type:"PropTypes.number",desc:"The depth of Paper component."},isTriggerPositionFixed:{type:"PropTypes.bool",default:"false"},showModal:{type:"PropTypes.bool",default:"false"},onRender:{type:"PropTypes.func",desc:"The function of tip render."},onRendered:{type:"PropTypes.func",desc:"The function of tip rendered."},onDestroy:{type:"PropTypes.func",desc:"The function of tip destroy."},onDestroyed:{type:"PropTypes.func",desc:"The function of tip destroyed."},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},736:function(e,t,o){var n=o(737);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};o(184)(n,i);n.locals&&(e.exports=n.locals)},737:function(e,t,o){(e.exports=o(183)(!1)).push([e.i,".customized-tip .customized-tip-triangle {\n  position: relative;\n  top: -4px; }\n\n.customized-tip .tip-content {\n  border: 1px solid #e7e7e7; }\n",""])},894:function(e,t,o){"use strict";o.r(t);var n=o(108),i=o.n(n),r=o(109),a=o.n(r),p=o(110),s=o.n(p),l=o(111),u=o.n(l),c=o(112),g=o.n(c),m=o(0),f=o.n(m),d=o(68),h=o(437),b=o(443),T=o(440),v=o(432),E=o(431),w=o(425),y=o(426),x=o(735),O=(o(466),o(736),function(e){function t(e){a()(this,t);var o=u()(this,(t.__proto__||i()(t)).call(this,e));return o.showTip=function(e){var t=o.state.tipVisible;t[e]=!0,o.setState({tipVisible:t})},o.hideTip=function(e){var t=o.state.tipVisible;t[e]=!1,o.setState({tipVisible:t})},o.state={tipVisible:{},triggerEl:{}},o}return g()(t,e),s()(t,[{key:"componentDidMount",value:function(){for(var e={},t=0;t<=12;t++)e[t]=Object(d.findDOMNode)(this.refs["trigger"+t]);this.setState({triggerEl:e})}},{key:"render",value:function(){var e=this,t=this.state,o=t.tipVisible,n=t.triggerEl;return f.a.createElement("div",{className:"example pop-examples tip-examples"},f.a.createElement("h2",{className:"example-title"},"Tip"),f.a.createElement("p",null,"A ",f.a.createElement("span",null,"Tip")," can be used as an alternative to a Drop Down Tip that can contain elements inside."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"With value"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"popup-example-wrapper"},f.a.createElement("p",null,"Set the ",f.a.createElement("code",null,"value")," property to show different position of ",f.a.createElement("code",null,"Tip"),"."),f.a.createElement("div",{className:"button-group-wrapper"},f.a.createElement("div",{className:"button-group top"},f.a.createElement(h.a,{ref:"trigger3",className:"trigger-position-button",value:"Top Left",onMouseOver:function(){e.showTip(3)},onMouseOut:function(){e.hideTip(3)}}),f.a.createElement(h.a,{ref:"trigger4",className:"trigger-position-button",value:"Top",onMouseOver:function(){e.showTip(4)},onMouseOut:function(){e.hideTip(4)}}),f.a.createElement(h.a,{ref:"trigger5",className:"trigger-position-button",value:"Top right",onMouseOver:function(){e.showTip(5)},onMouseOut:function(){e.hideTip(5)}})),f.a.createElement("div",{className:"button-group right"},f.a.createElement(h.a,{ref:"trigger9",className:"trigger-position-button",value:"Right Top",onMouseOver:function(){e.showTip(9)},onMouseOut:function(){e.hideTip(9)}}),f.a.createElement(h.a,{ref:"trigger10",className:"trigger-position-button",value:"Right",onMouseOver:function(){e.showTip(10)},onMouseOut:function(){e.hideTip(10)}}),f.a.createElement(h.a,{ref:"trigger11",className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){e.showTip(11)},onMouseOut:function(){e.hideTip(11)}})),f.a.createElement("div",{className:"button-group bottom"},f.a.createElement(h.a,{ref:"trigger0",className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){e.showTip(0)},onMouseOut:function(){e.hideTip(0)}}),f.a.createElement(h.a,{ref:"trigger1",className:"trigger-position-button",value:"Bottom",onMouseOver:function(){e.showTip(1)},onMouseOut:function(){e.hideTip(1)}}),f.a.createElement(h.a,{ref:"trigger2",className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){e.showTip(2)},onMouseOut:function(){e.hideTip(2)}})),f.a.createElement("div",{className:"button-group left"},f.a.createElement(h.a,{ref:"trigger6",className:"trigger-position-button",value:"Left Top",onMouseOver:function(){e.showTip(6)},onMouseOut:function(){e.hideTip(6)}}),f.a.createElement(h.a,{ref:"trigger7",className:"trigger-position-button",value:"Left",onMouseOver:function(){e.showTip(7)},onMouseOut:function(){e.hideTip(7)}}),f.a.createElement(h.a,{ref:"trigger8",className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){e.showTip(8)},onMouseOut:function(){e.hideTip(8)}}))),f.a.createElement(b.a,{visible:o[0],triggerEl:n[0],position:b.a.Position.BOTTOM_LEFT},"Tip Content"),f.a.createElement(b.a,{visible:o[1],triggerEl:n[1],position:b.a.Position.BOTTOM},"Tip Content"),f.a.createElement(b.a,{visible:o[2],triggerEl:n[2],position:b.a.Position.BOTTOM_RIGHT},"Tip Content"),f.a.createElement(b.a,{visible:o[3],triggerEl:n[3],position:b.a.Position.TOP_LEFT},"Tip Content"),f.a.createElement(b.a,{visible:o[4],triggerEl:n[4],position:b.a.Position.TOP},"Tip Content"),f.a.createElement(b.a,{visible:o[5],triggerEl:n[5],position:b.a.Position.TOP_RIGHT},"Tip Content"),f.a.createElement(b.a,{visible:o[6],triggerEl:n[6],position:b.a.Position.LEFT_TOP},"Tip Content"),f.a.createElement(b.a,{visible:o[7],triggerEl:n[7],position:b.a.Position.LEFT},"Tip Content"),f.a.createElement(b.a,{visible:o[8],triggerEl:n[8],position:b.a.Position.LEFT_BOTTOM},"Tip Content"),f.a.createElement(b.a,{visible:o[9],triggerEl:n[9],position:b.a.Position.RIGHT_TOP},"Tip Content"),f.a.createElement(b.a,{visible:o[10],triggerEl:n[10],position:b.a.Position.RIGHT},"Tip Content"),f.a.createElement(b.a,{visible:o[11],triggerEl:n[11],position:b.a.Position.RIGHT_BOTTOM},"Tip Content"))))),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Customized Tip Triangle"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"popup-example-wrapper"},f.a.createElement(h.a,{ref:"trigger12",className:"trigger-button",value:"Show Tip",onMouseOver:function(){e.showTip(12)},onMouseOut:function(){e.hideTip(12)}}),f.a.createElement(b.a,{className:"customized-tip",theme:w.a.DEFAULT,visible:o[12],triggerEl:n[12],triangle:f.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-tip-triangle",width:"17",height:"7"},f.a.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}}))},"Tip Content"))))),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Use Tip Provider"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"popup-example-wrapper"},f.a.createElement(T.a,{text:"Tip Content"},f.a.createElement(h.a,{className:"trigger-button",value:"Show Tip"})))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(y.a,{data:x}))}}]),t}(m.Component));t.default=O}}]);