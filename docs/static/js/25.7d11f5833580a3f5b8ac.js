webpackJsonp([25],{1001:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),u=a(0),i=r(u),f=a(2),p=r(f),d=a(399),m=r(d);a(1003);var h=function(e){function t(e){l(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return o(t,e),c(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return i.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isAdaptiveHeight:!0})}}]),t}(u.Component);t.default=h,h.propTypes={data:p.default.object},h.defaultProps={data:""}},1002:function(e,t,a){t=e.exports=a(948)(),t.push([e.i,"",""])},1003:function(e,t,a){var r=a(1002);"string"==typeof r&&(r=[[e.i,r,""]]);a(949)(r,{});r.locals&&(e.exports=r.locals)},1035:function(e,t,a){t=e.exports=a(948)(),t.push([e.i,'.switcher-examples .examples-wrapper .field-group {\n  float: none; }\n  .switcher-examples .examples-wrapper .field-group::before, .switcher-examples .examples-wrapper .field-group::after {\n    display: table;\n    content: ""; }\n  .switcher-examples .examples-wrapper .field-group::after {\n    clear: both; }\n',""])},1077:function(e,t,a){var r=a(1035);"string"==typeof r&&(r=[[e.i,r,""]]);a(949)(r,{});r.locals&&(e.exports=r.locals)},1136:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},value:{type:"PropTypes.bool",desc:"If true,the switcher will be in active status.",default:"false"},disabled:{type:"PropTypes.bool",desc:"Disables the switcher if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the switcher will be have loading effect.",default:"false"},size:{type:"PropTypes.oneOf",desc:"The size of switcher.The value can be small or default.",default:"Switcher.Size.DEFAULT"},beforeChange:{type:"PropTypes.func",desc:"Callback function fired before the switcher is touch-tapped."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the switcher is touch-tapped."}}},975:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=a(0),u=r(c),i=a(403),f=r(i),p=a(400),d=r(p),m=a(401),h=r(m),y=a(1001),b=r(y),w=a(1136),v=r(w);a(1077);var E=function(e){function t(e){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"example switcher-examples"},u.default.createElement("h2",{className:"example-title"},"Switcher"),u.default.createElement("p",null,"A ",u.default.createElement("span",null,"Switcher")," is used as an on/off control."),u.default.createElement("h2",{className:"example-title"},"Examples"),u.default.createElement(d.default,null,u.default.createElement(h.default,{className:"example-header",title:"Switcher Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Switcher simple example.Set the value property to true for active status."),u.default.createElement(f.default,{value:!0}))))),u.default.createElement(d.default,null,u.default.createElement(h.default,{className:"example-header",title:"Switcher Size Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Set the size property to small for small size switcher."),u.default.createElement(f.default,{size:"small",beforeChange:function(){return!1}}))))),u.default.createElement(d.default,null,u.default.createElement(h.default,{className:"example-header",title:"Switcher Disabled Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Set the disabled property to true for disabled props applied."),u.default.createElement(f.default,{disabled:!0}))))),u.default.createElement("h2",{className:"example-title"},"Properties"),u.default.createElement(b.default,{data:v.default}))}}]),t}(c.Component);t.default=E}});