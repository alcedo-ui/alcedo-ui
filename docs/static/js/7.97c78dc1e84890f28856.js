webpackJsonp([7],{1021:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,o,l){return o&&e(t.prototype,o),l&&e(t,l),t}}(),i=o(0),s=l(i),f=o(28),c=l(f),d=o(60),g=l(d),m=o(57),b=l(m),h=o(11),E=l(h),P=o(401),T=l(P),v=o(402),y=l(v),R=o(1027),w=l(R),x=o(1187),O=l(x);o(1041);var N=function(e){function t(e){a(this,t);var o=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={popupVisible1:!1,popupVisible2:!1,popupVisible3:!1,popupVisible4:!1,popupVisible5:!1,popupVisible6:!1,popupVisible7:!1,popupVisible8:!1,popupVisible9:!1,popupVisible10:!1,popupVisible11:!1,popupVisible12:!1,popupVisible13:!1,popupVisible14:!1,popupVisible15:!1,triggerEl1:null,triggerEl2:null,triggerEl3:null,triggerEl4:null,triggerEl5:null,triggerEl6:null,triggerEl7:null,triggerEl8:null,triggerEl9:null,triggerEl10:null,triggerEl11:null,triggerEl12:null,triggerEl13:null,triggerEl14:null,triggerEl15:null},o.togglePopup=o.togglePopup.bind(o),o.closePopup=o.closePopup.bind(o),o}return p(t,e),r(t,[{key:"togglePopup",value:function(e,t){var o;this.setState((o={},n(o,"popupVisible"+t,!this.state["popupVisible"+t]),n(o,"triggerEl"+t,e.currentTarget),o))}},{key:"closePopup",value:function(e){this.setState(n({},"popupVisible"+e,!1))}},{key:"render",value:function(){var e=this,t=this.state,o=t.popupVisible1,l=t.popupVisible3,n=t.popupVisible4,a=t.popupVisible5,u=t.popupVisible6,p=t.popupVisible7,r=t.popupVisible8,i=t.popupVisible9,f=t.popupVisible10,d=t.popupVisible11,m=t.popupVisible12,h=t.popupVisible13,P=t.popupVisible14,v=t.popupVisible15,R=t.triggerEl1,x=t.triggerEl3,N=t.triggerEl4,_=t.triggerEl5,M=t.triggerEl6,V=t.triggerEl7,C=t.triggerEl8,I=t.triggerEl9,j=t.triggerEl10,A=t.triggerEl11,q=t.triggerEl12,Y=t.triggerEl13,B=t.triggerEl14,L=t.triggerEl15,k=[{iconCls:"fa fa-facebook",text:"Facebook",theme:E.default.PRIMARY},{iconCls:"fa fa-twitter",text:"Twitter",theme:E.default.PRIMARY},{iconCls:"fa fa-google-plus",text:"Google+",theme:E.default.PRIMARY}];return s.default.createElement("div",{className:"example popup-examples"},s.default.createElement("h2",{className:"example-title"},"Popup"),s.default.createElement("p",null,"A ",s.default.createElement("span",null,"Popup")," can be used as an alternative to a Drop Down Menu that can contain elements inside."),s.default.createElement("h2",{className:"example-title"},"Examples"),s.default.createElement(T.default,null,s.default.createElement(y.default,{className:"example-header",title:"Basic"}),s.default.createElement("div",{className:"widget-content"},s.default.createElement("div",{className:"example-content"},s.default.createElement("div",{className:"popup-example-wrapper"},s.default.createElement("p",null,s.default.createElement("code",null,"Popup")," simple example."),s.default.createElement(c.default,{className:"trigger-button",value:"Toggle Popup",onTouchTap:function(t){e.togglePopup(t,1)}}),s.default.createElement(g.default,{visible:o,triggerEl:R,theme:E.default.PRIMARY,onRequestClose:function(){e.closePopup(1)}},s.default.createElement(b.default,{items:k})))))),s.default.createElement(T.default,null,s.default.createElement(y.default,{className:"example-header",title:"Without triangle"}),s.default.createElement("div",{className:"widget-content"},s.default.createElement("div",{className:"example-content"},s.default.createElement("div",{className:"popup-example-wrapper"},s.default.createElement("p",null,"Set ",s.default.createElement("code",null,"hasTriangle")," to false,the popover will have no triangle on the top of the DOM element."),s.default.createElement(c.default,{className:"trigger-button",value:"Toggle Popup",onTouchTap:function(t){e.togglePopup(t,3)}}),s.default.createElement(g.default,{visible:l,triggerEl:x,hasTriangle:!1,onRequestClose:function(){e.closePopup(3)}},s.default.createElement(b.default,{items:k})))))),s.default.createElement(T.default,null,s.default.createElement(y.default,{className:"example-header",title:"With value"}),s.default.createElement("div",{className:"widget-content"},s.default.createElement("div",{className:"example-content"},s.default.createElement("div",{className:"popup-example-wrapper"},s.default.createElement("p",null,"Set the ",s.default.createElement("code",null,"value")," property to show different position of ",s.default.createElement("code",null,"Popup"),"."),s.default.createElement("div",{className:"button-group-wrapper"},s.default.createElement("div",{className:"button-group top"},s.default.createElement(c.default,{className:"trigger-position-button",value:"Top Left",onTouchTap:function(t){e.togglePopup(t,7)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Top",onTouchTap:function(t){e.togglePopup(t,8)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Top right",onTouchTap:function(t){e.togglePopup(t,9)}})),s.default.createElement("div",{className:"button-group right"},s.default.createElement(c.default,{className:"trigger-position-button",value:"Right Top",onTouchTap:function(t){e.togglePopup(t,13)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Right",onTouchTap:function(t){e.togglePopup(t,14)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Right Bottom",onTouchTap:function(t){e.togglePopup(t,15)}})),s.default.createElement("div",{className:"button-group bottom"},s.default.createElement(c.default,{className:"trigger-position-button",value:"Bottom Left",onTouchTap:function(t){e.togglePopup(t,4)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Bottom",onTouchTap:function(t){e.togglePopup(t,5)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Bottom Right",onTouchTap:function(t){e.togglePopup(t,6)}})),s.default.createElement("div",{className:"button-group left"},s.default.createElement(c.default,{className:"trigger-position-button",value:"Left Top",onTouchTap:function(t){e.togglePopup(t,10)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Left",onTouchTap:function(t){e.togglePopup(t,11)}}),s.default.createElement(c.default,{className:"trigger-position-button",value:"Left Bottom",onTouchTap:function(t){e.togglePopup(t,12)}}))),s.default.createElement(g.default,{visible:n,triggerEl:N,theme:E.default.PRIMARY,position:g.default.Position.BOTTOM_LEFT,onRequestClose:function(){e.closePopup(4)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:a,triggerEl:_,theme:E.default.PRIMARY,position:g.default.Position.BOTTOM,onRequestClose:function(){e.closePopup(5)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:u,triggerEl:M,theme:E.default.PRIMARY,position:g.default.Position.BOTTOM_RIGHT,onRequestClose:function(){e.closePopup(6)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:p,triggerEl:V,theme:E.default.PRIMARY,position:g.default.Position.TOP_LEFT,onRequestClose:function(){e.closePopup(7)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:r,triggerEl:C,theme:E.default.PRIMARY,position:g.default.Position.TOP,onRequestClose:function(){e.closePopup(8)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:i,triggerEl:I,theme:E.default.PRIMARY,position:g.default.Position.TOP_RIGHT,onRequestClose:function(){e.closePopup(9)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:f,triggerEl:j,theme:E.default.PRIMARY,position:g.default.Position.LEFT_TOP,onRequestClose:function(){e.closePopup(10)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:d,triggerEl:A,theme:E.default.PRIMARY,position:g.default.Position.LEFT,onRequestClose:function(){e.closePopup(11)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:m,triggerEl:q,theme:E.default.PRIMARY,position:g.default.Position.LEFT_BOTTOM,onRequestClose:function(){e.closePopup(12)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:h,triggerEl:Y,theme:E.default.PRIMARY,position:g.default.Position.RIGHT_TOP,onRequestClose:function(){e.closePopup(13)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:P,triggerEl:B,theme:E.default.PRIMARY,position:g.default.Position.RIGHT,onRequestClose:function(){e.closePopup(14)}},s.default.createElement(b.default,{items:k})),s.default.createElement(g.default,{visible:v,triggerEl:L,theme:E.default.PRIMARY,position:g.default.Position.RIGHT_BOTTOM,onRequestClose:function(){e.closePopup(15)}},s.default.createElement(b.default,{items:k})))))),s.default.createElement("h2",{className:"example-title"},"Properties"),s.default.createElement(w.default,{data:O.default}))}}]),t}(i.Component);t.default=N},1027:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,o,l){return o&&e(t.prototype,o),l&&e(t,l),t}}(),i=o(0),s=l(i),f=o(2),c=l(f),d=o(400),g=l(d);o(1029);var m=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],o.generateData=o.generateData.bind(o),o}return u(t,e),r(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(p({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return s.default.createElement("div",{className:"prop-type-desc-table-wrapper"},s.default.createElement(g.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(i.Component);t.default=m,m.propTypes={data:c.default.object},m.defaultProps={data:""}},1028:function(e,t,o){t=e.exports=o(972)(),t.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n",""])},1029:function(e,t,o){var l=o(1028);"string"==typeof l&&(l=[[e.i,l,""]]);o(973)(l,{});l.locals&&(e.exports=l.locals)},1037:function(e,t,o){t=e.exports=o(972)(),t.push([e.i,".popup-examples .trigger-button {\n  width: 160px;\n  height: 50px;\n  margin: 0; }\n\n.popup-examples .button-group-wrapper {\n  position: relative;\n  width: 440px;\n  height: 280px; }\n  .popup-examples .button-group-wrapper .button-group .trigger-position-button {\n    width: 100px; }\n  .popup-examples .button-group-wrapper .button-group.top {\n    position: absolute;\n    left: 50px; }\n    .popup-examples .button-group-wrapper .button-group.top .trigger-position-button {\n      margin-left: 20px; }\n      .popup-examples .button-group-wrapper .button-group.top .trigger-position-button:first-child {\n        margin-left: 0; }\n  .popup-examples .button-group-wrapper .button-group.left {\n    position: absolute;\n    top: 60px;\n    left: 0; }\n    .popup-examples .button-group-wrapper .button-group.left .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .popup-examples .button-group-wrapper .button-group.left .trigger-position-button:first-child {\n        margin-top: 0; }\n  .popup-examples .button-group-wrapper .button-group.right {\n    position: absolute;\n    top: 60px;\n    right: 0; }\n    .popup-examples .button-group-wrapper .button-group.right .trigger-position-button {\n      display: block;\n      margin-top: 20px; }\n      .popup-examples .button-group-wrapper .button-group.right .trigger-position-button:first-child {\n        margin-top: 0; }\n  .popup-examples .button-group-wrapper .button-group.bottom {\n    position: absolute;\n    left: 50px;\n    bottom: 0; }\n    .popup-examples .button-group-wrapper .button-group.bottom .trigger-position-button {\n      margin-left: 20px; }\n      .popup-examples .button-group-wrapper .button-group.bottom .trigger-position-button:first-child {\n        margin-left: 0; }\n",""])},1041:function(e,t,o){var l=o(1037);"string"==typeof l&&(l=[[e.i,l,""]]);o(973)(l,{});l.locals&&(e.exports=l.locals)},1187:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},triggerEl:{type:"PropTypes.object",desc:"This is the DOM element that will be used to set the position of the popover.",default:"null"},visible:{type:"PropTypes.bool",desc:"If true,the popover is visible.",default:"false"},hasTriangle:{type:"PropTypes.bool",desc:"If true,the popover will have a triangle on the top of the DOM element.",default:"true"},theme:{type:"PropTypes.oneOf",desc:"The popover theme.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},position:{type:"PropTypes.oneOf",desc:"The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.",default:"PopupBody.Position.BOTTOM_LEFT"},isAnimated:{type:"PropTypes.bool",desc:"If true,popup will have animation effects.",default:"true"},triggerMode:{type:"PropTypes.oneOf",desc:"The status of popup-triangle.Can be open or toggle.",default:"PopupBody.TriggerMode.TOGGLE"},depth:{type:"PropTypes.number",desc:"The depth of Paper component.",default:"4"},triggerHandle:{type:"PropTypes.func",desc:"The function of popup event handler."},onRender:{type:"PropTypes.func",desc:"The function of popup render."},onRequestClose:{type:"PropTypes.func",desc:"Callback function fired when the popover is requested to be closed."}}}});