webpackJsonp([29],{1051:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),u=l(c),i=a(450),d=l(i),p=a(405),f=l(p),m=a(406),h=l(m),y=a(1081),E=l(y),v=a(1266),b=l(v);a(1197);var w=function(e){function t(e){r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.change=a.change.bind(a),a}return o(t,e),s(t,[{key:"change",value:function(e,t){}},{key:"render",value:function(){return u.default.createElement("div",{className:"example slider-examples"},u.default.createElement("h2",{className:"example-title"},"Slider"),u.default.createElement("p",null,"A ",u.default.createElement("span",null,"Slider")," is an interface for users to input a value in a range. Sliders can be continuous or discrete."),u.default.createElement("h2",{className:"example-title"},"Examples"),u.default.createElement(f.default,null,u.default.createElement(h.default,{className:"example-header",title:"Slider Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Slider simple default example."),u.default.createElement(d.default,null))))),u.default.createElement(f.default,null,u.default.createElement(h.default,{className:"example-header",title:"Slider Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Set the leftPoint property to true for display leftPoint and the ruler property for the slider step through values."),u.default.createElement(d.default,{leftPoint:!0,ruler:10}))))),u.default.createElement(f.default,null,u.default.createElement(h.default,{className:"example-header",title:"Slider Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Set the showScale property to true and the scale property for size displayed on slider."),u.default.createElement(d.default,{leftPoint:!0,scale:[0,50,80,100],showScale:!0}))))),u.default.createElement(f.default,null,u.default.createElement(h.default,{className:"example-header",title:"Slider Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Set the decimalPlaces property for the decimal digits of tip."),u.default.createElement(d.default,{leftPoint:!1,scale:[2,5,7,10],showScale:!0,decimalPlaces:2}))))),u.default.createElement(f.default,null,u.default.createElement(h.default,{className:"example-header",title:"Slider Example"}),u.default.createElement("div",{className:"widget-content"},u.default.createElement("div",{className:"example-content"},u.default.createElement("div",{className:"examples-wrapper"},u.default.createElement("p",null,"Set the width property for reset the slider width."),u.default.createElement(d.default,{leftPoint:!0,scale:[0,5,8,10],showScale:!0,decimalPlaces:1,width:600,tip:!0,onChange:this.change}))))),u.default.createElement("h2",{className:"example-title"},"Properties"),u.default.createElement(E.default,{data:b.default}))}}]),t}(c.Component);t.default=w},1081:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),i=l(u),d=a(1),p=l(d),f=a(404),m=l(f);a(1083);var h=function(e){function t(e){r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return o(t,e),c(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return i.default.createElement("div",{className:"prop-type-desc-table-wrapper"},i.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(u.Component);t.default=h,h.propTypes={data:p.default.object},h.defaultProps={data:""}},1082:function(e,t,a){t=e.exports=a(1020)(),t.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n",""])},1083:function(e,t,a){var l=a(1082);"string"==typeof l&&(l=[[e.i,l,""]]);a(1021)(l,{});l.locals&&(e.exports=l.locals)},1147:function(e,t,a){t=e.exports=a(1020)(),t.push([e.i,".slider-examples .examples-wrapper .slider {\n  margin: 30px 0; }\n",""])},1197:function(e,t,a){var l=a(1147);"string"==typeof l&&(l=[[e.i,l,""]]);a(1021)(l,{});l.locals&&(e.exports=l.locals)},1266:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"{}"},leftPoint:{type:"PropTypes.bool",desc:"If true,the slider will have leftPoint.",default:"false"},width:{type:"PropTypes.number",desc:"The width of the slider.",default:"300"},scale:{type:"PropTypes.array",desc:"The size displayed on slider.",default:"[0, 100]"},showScale:{type:"PropTypes.bool",desc:"If true,the scale will have display.",default:"false"},tipShow:{type:"PropTypes.bool",desc:"If true,the tip will display.",default:"true"},ruler:{type:"PropTypes.number",desc:"The granularity the slider can step through values."},decimalPlaces:{type:"PropTypes.number",desc:"Decimal digits of tip.",default:"0"},onChange:{type:"PropTypes.func",desc:"Callback function fired when the slider change."}}}});