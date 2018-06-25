(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{405:function(e,t,o){(e.exports=o(169)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},406:function(e,t,o){var i=o(405);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(168)(i,n);i.locals&&(e.exports=i.locals)},407:function(e,t,o){"use strict";var i=o(0),n=o.n(i),r=o(109),a=o.n(r),p=o(10),s=o.n(p),l=o(108),u=o.n(l),c=o(7),g=o.n(c),m=o(9),f=o.n(m),d=o(1),h=o.n(d),b=o(408),T=(o(406),function(e){function t(e){s()(this,t);var o=g()(this,(t.__proto__||a()(t)).call(this,e));return o.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],o.generateData=o.generateData.bind(o),o}return f()(t,e),u()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(n()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return h.a.createElement("div",{className:"prop-type-desc-table-wrapper"},h.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(d.Component));T.defaultProps={data:null},t.a=T},444:function(e,t,o){(e.exports=o(169)(!1)).push([e.i,".pop-examples .trigger-button{width:160px;height:50px;margin:0}.pop-examples .button-group-wrapper{position:relative;width:500px;height:280px}.pop-examples .button-group-wrapper .button-group .trigger-position-button{width:120px}.pop-examples .button-group-wrapper .button-group.top{position:absolute;left:50px}.pop-examples .button-group-wrapper .button-group.top .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child{margin-left:0}.pop-examples .button-group-wrapper .button-group.left{position:absolute;top:60px;left:0}.pop-examples .button-group-wrapper .button-group.left .trigger-position-button{display:block;margin-top:20px}.pop-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child{margin-top:0}.pop-examples .button-group-wrapper .button-group.right{position:absolute;top:60px;right:0}.pop-examples .button-group-wrapper .button-group.right .trigger-position-button{display:block;margin-top:20px}.pop-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child{margin-top:0}.pop-examples .button-group-wrapper .button-group.bottom{position:absolute;left:50px;bottom:0}.pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child{margin-left:0}.pop-examples .button-group-wrapper .button-group.center{position:absolute;left:190px;top:120px}.pop-examples .button-group-wrapper .button-group.center .trigger-position-button{margin-left:20px}.pop-examples .button-group-wrapper .button-group.center .trigger-position-button:first-child{margin-left:0}",""])},445:function(e,t,o){var i=o(444);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(168)(i,n);i.locals&&(e.exports=i.locals)},654:function(e,t,o){(e.exports=o(169)(!1)).push([e.i,".customized-tip .customized-tip-triangle{position:relative;top:-4px}.customized-tip .tip-content{border:1px solid #e7e7e7}",""])},655:function(e,t,o){var i=o(654);"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};o(168)(i,n);i.locals&&(e.exports=i.locals)},656:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},contentClassName:{type:"PropTypes.string",desc:"The CSS class name of the content element."},modalClassName:{type:"PropTypes.string"},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The popover theme.Can be primary,highlight,success,warning,error.",default:"Theme.DARK"},triggerEl:{type:"PropTypes.object",desc:"This is the DOM element that will be used to set the position of the popover."},visible:{type:"PropTypes.bool",desc:"If true,the popover is visible.",default:"false"},hasTriangle:{type:"PropTypes.bool",desc:"If true,the popover will have a triangle on the top of the DOM element.",default:"true"},triangle:{type:"PropTypes.element"},position:{type:"PropTypes.oneOf",desc:"The popover alignment.",default:"Position.BOTTOM"},isAnimated:{type:"PropTypes.bool",desc:"If true, menu will have animation effects.",default:"true"},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},depth:{type:"PropTypes.number",desc:"The depth of Paper component.",default:"6"},isTriggerPositionFixed:{type:"PropTypes.bool",default:"false"},showModal:{type:"PropTypes.bool",default:"false"},onRender:{type:"PropTypes.func",desc:"The function of tip render."},onRendered:{type:"PropTypes.func",desc:"The function of tip rendered."},onDestroy:{type:"PropTypes.func",desc:"The function of tip destroy."},onDestroyed:{type:"PropTypes.func",desc:"The function of tip destroyed."},onWheel:{type:"PropTypes.func",desc:"Callback function fired when wrapper wheeled."}}},854:function(e,t,o){"use strict";o.r(t);var i=o(109),n=o.n(i),r=o(10),a=o.n(r),p=o(108),s=o.n(p),l=o(7),u=o.n(l),c=o(9),g=o.n(c),m=o(1),f=o.n(m),d=o(68),h=o(415),b=o(418),T=o(419),v=o(410),E=o(409),w=o(404),y=o(407),x=o(656),O=(o(445),o(655),function(e){function t(e){a()(this,t);var o=u()(this,(t.__proto__||n()(t)).call(this,e));return o.showTip=function(e){var t=o.state.tipVisible;t[e]=!0,o.setState({tipVisible:t})},o.hideTip=function(e){var t=o.state.tipVisible;t[e]=!1,o.setState({tipVisible:t})},o.state={tipVisible:{},triggerEl:{}},o}return g()(t,e),s()(t,[{key:"componentDidMount",value:function(){for(var e={},t=0;t<=12;t++)e[t]=Object(d.findDOMNode)(this.refs["trigger"+t]);this.setState({triggerEl:e})}},{key:"render",value:function(){var e=this,t=this.state,o=t.tipVisible,i=t.triggerEl;return f.a.createElement("div",{className:"example pop-examples tip-examples"},f.a.createElement("h2",{className:"example-title"},"Tip"),f.a.createElement("p",null,"A ",f.a.createElement("span",null,"Tip")," can be used as an alternative to a Drop Down Tip that can contain elements inside."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"With value"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"popup-example-wrapper"},f.a.createElement("p",null,"Set the ",f.a.createElement("code",null,"value")," property to show different position of ",f.a.createElement("code",null,"Tip"),"."),f.a.createElement("div",{className:"button-group-wrapper"},f.a.createElement("div",{className:"button-group top"},f.a.createElement(h.a,{ref:"trigger3",className:"trigger-position-button",value:"Top Left",onMouseOver:function(){e.showTip(3)},onMouseOut:function(){e.hideTip(3)}}),f.a.createElement(h.a,{ref:"trigger4",className:"trigger-position-button",value:"Top",onMouseOver:function(){e.showTip(4)},onMouseOut:function(){e.hideTip(4)}}),f.a.createElement(h.a,{ref:"trigger5",className:"trigger-position-button",value:"Top right",onMouseOver:function(){e.showTip(5)},onMouseOut:function(){e.hideTip(5)}})),f.a.createElement("div",{className:"button-group right"},f.a.createElement(h.a,{ref:"trigger9",className:"trigger-position-button",value:"Right Top",onMouseOver:function(){e.showTip(9)},onMouseOut:function(){e.hideTip(9)}}),f.a.createElement(h.a,{ref:"trigger10",className:"trigger-position-button",value:"Right",onMouseOver:function(){e.showTip(10)},onMouseOut:function(){e.hideTip(10)}}),f.a.createElement(h.a,{ref:"trigger11",className:"trigger-position-button",value:"Right Bottom",onMouseOver:function(){e.showTip(11)},onMouseOut:function(){e.hideTip(11)}})),f.a.createElement("div",{className:"button-group bottom"},f.a.createElement(h.a,{ref:"trigger0",className:"trigger-position-button",value:"Bottom Left",onMouseOver:function(){e.showTip(0)},onMouseOut:function(){e.hideTip(0)}}),f.a.createElement(h.a,{ref:"trigger1",className:"trigger-position-button",value:"Bottom",onMouseOver:function(){e.showTip(1)},onMouseOut:function(){e.hideTip(1)}}),f.a.createElement(h.a,{ref:"trigger2",className:"trigger-position-button",value:"Bottom Right",onMouseOver:function(){e.showTip(2)},onMouseOut:function(){e.hideTip(2)}})),f.a.createElement("div",{className:"button-group left"},f.a.createElement(h.a,{ref:"trigger6",className:"trigger-position-button",value:"Left Top",onMouseOver:function(){e.showTip(6)},onMouseOut:function(){e.hideTip(6)}}),f.a.createElement(h.a,{ref:"trigger7",className:"trigger-position-button",value:"Left",onMouseOver:function(){e.showTip(7)},onMouseOut:function(){e.hideTip(7)}}),f.a.createElement(h.a,{ref:"trigger8",className:"trigger-position-button",value:"Left Bottom",onMouseOver:function(){e.showTip(8)},onMouseOut:function(){e.hideTip(8)}}))),f.a.createElement(b.a,{visible:o[0],triggerEl:i[0],position:b.a.Position.BOTTOM_LEFT},"Tip Content"),f.a.createElement(b.a,{visible:o[1],triggerEl:i[1],position:b.a.Position.BOTTOM},"Tip Content"),f.a.createElement(b.a,{visible:o[2],triggerEl:i[2],position:b.a.Position.BOTTOM_RIGHT},"Tip Content"),f.a.createElement(b.a,{visible:o[3],triggerEl:i[3],position:b.a.Position.TOP_LEFT},"Tip Content"),f.a.createElement(b.a,{visible:o[4],triggerEl:i[4],position:b.a.Position.TOP},"Tip Content"),f.a.createElement(b.a,{visible:o[5],triggerEl:i[5],position:b.a.Position.TOP_RIGHT},"Tip Content"),f.a.createElement(b.a,{visible:o[6],triggerEl:i[6],position:b.a.Position.LEFT_TOP},"Tip Content"),f.a.createElement(b.a,{visible:o[7],triggerEl:i[7],position:b.a.Position.LEFT},"Tip Content"),f.a.createElement(b.a,{visible:o[8],triggerEl:i[8],position:b.a.Position.LEFT_BOTTOM},"Tip Content"),f.a.createElement(b.a,{visible:o[9],triggerEl:i[9],position:b.a.Position.RIGHT_TOP},"Tip Content"),f.a.createElement(b.a,{visible:o[10],triggerEl:i[10],position:b.a.Position.RIGHT},"Tip Content"),f.a.createElement(b.a,{visible:o[11],triggerEl:i[11],position:b.a.Position.RIGHT_BOTTOM},"Tip Content"))))),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Customized Tip Triangle"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"popup-example-wrapper"},f.a.createElement(h.a,{ref:"trigger12",className:"trigger-button",value:"Show Tip",onMouseOver:function(){e.showTip(12)},onMouseOut:function(){e.hideTip(12)}}),f.a.createElement(b.a,{className:"customized-tip",theme:w.a.DEFAULT,visible:o[12],triggerEl:i[12],triangle:f.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"customized-tip-triangle",width:"17",height:"7"},f.a.createElement("polyline",{points:"0,7 9,0 17,7",style:{stroke:"#e7e7e7",fill:"#fff"}}))},"Tip Content"))))),f.a.createElement(v.a,null,f.a.createElement(E.a,{className:"example-header",title:"Use Tip Provider"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"popup-example-wrapper"},f.a.createElement(T.a,{text:"Tip Content"},f.a.createElement(h.a,{className:"trigger-button",value:"Show Tip"})))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(y.a,{data:x}))}}]),t}(m.Component));t.default=O}}]);