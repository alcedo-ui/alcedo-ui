webpackJsonp([47],{1028:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a(0),s=r(c),f=a(2),p=r(f),d=a(415),m=r(d);a(1030);var h=function(e){function t(e){n(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return l(t,e),u(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(i({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return s.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isAdaptiveHeight:!0})}}]),t}(c.Component);t.default=h,h.propTypes={data:p.default.object},h.defaultProps={data:""}},1029:function(e,t,a){t=e.exports=a(976)(),t.push([e.i,"",""])},1030:function(e,t,a){var r=a(1029);"string"==typeof r&&(r=[[e.i,r,""]]);a(977)(r,{});r.locals&&(e.exports=r.locals)},1040:function(e,t,a){t=e.exports=a(976)(),t.push([e.i,"",""])},1081:function(e,t,a){var r=a(1040);"string"==typeof r&&(r=[[e.i,r,""]]);a(977)(r,{});r.locals&&(e.exports=r.locals)},1162:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},data:{type:"PropTypes.array",desc:"The items data."}}},979:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),u=a(0),c=r(u),s=a(1),f=(r(s),a(448)),p=r(f),d=a(416),m=r(d),h=a(417),y=r(h),b=a(15),v=r(b),x=a(1028),T=r(x),_=a(1162),E=r(_);a(1081);var O=function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),i(t,[{key:"render",value:function(){var e=[{type:"header",headerText:"Now"},{theme:v.default.PRIMARY,type:"title",contentText:"just a title.",hasBorder:!1,date:"2017-05-03 15:16:34"},{theme:v.default.HIGHLIGHT,type:"title",hasBorder:!0,contentText:"just a title.",date:"2017-05-03 15:16:34"},{theme:v.default.SUCCESS,type:"title",contentText:"just a title.",hasBorder:!0,date:"2017-05-03 15:16:34"},{theme:v.default.WARNING,type:"title",hasBorder:!0,contentText:"example content.",date:"2017-05-06 12:52:12"},{theme:v.default.ERROR,type:"title",hasBorder:!0,contentText:"welcome to China.",date:"2017-05-03 15:16:34"},{type:"header",headerText:"2016"}];return c.default.createElement("div",{className:"example time-line-examples"},c.default.createElement("h2",{className:"example-title"},"TimeLine"),c.default.createElement("p",null,"The TimeLine is used to display time flow information vertically."),c.default.createElement("h2",{className:"example-title"},"Examples"),c.default.createElement(m.default,null,c.default.createElement(y.default,{className:"example-header",title:"TimeLine Example"}),c.default.createElement("div",{className:"widget-content"},c.default.createElement("div",{className:"example-content"},c.default.createElement("p",null,"A simple TimeLine example."),c.default.createElement(p.default,{data:e})))),c.default.createElement("h2",{className:"example-title"},"Properties"),c.default.createElement(T.default,{data:E.default}))}}]),t}(u.Component);t.default=O}});