webpackJsonp([30],{1050:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),i=n(u),c=a(448),p=n(c),f=a(405),d=n(f),h=a(406),m=n(h),y=a(1081),b=n(y),v=a(1264),g=n(v);a(1196);var w=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.data=["test123456789123456789123456789123456789","test2","test3","derby1","derby2","derby3","test4","test5","test6","test7","test8","test9","test10","test11"],a.searchLength=2,a.state={chooseData:[],text:"",loading:!1},a.onChange=a.onChange.bind(a),a.onBlur=a.onBlur.bind(a),a}return l(t,e),s(t,[{key:"onChange",value:function(e,t){var a=this;this.timing&&clearTimeout(this.timing),e&&e.length>=this.searchLength&&t?this.timing=setTimeout(function(){var t=[];a.data.map(function(a){0===a.indexOf(e)&&t.push(a)}),a.setState({chooseData:t,text:e})},2e3):this.setState({chooseData:[],text:e})}},{key:"onBlur",value:function(e){this.setState({chooseData:[],text:e})}},{key:"render",value:function(){var e=this.state,t=e.chooseData,a=e.text,n=e.loading;return i.default.createElement("div",{className:"example auto-complete-examples"},i.default.createElement("h2",{className:"example-title"},"Remote Auto Complete"),i.default.createElement("p",null,"A ",i.default.createElement("span",null,"Remote Auto Complete")," is an interface to help users to complete their input."),i.default.createElement("h2",{className:"example-title"},"Examples"),i.default.createElement(d.default,null,i.default.createElement(m.default,{className:"example-header",title:"Remote Auto Complete Example"}),i.default.createElement("div",{className:"widget-content"},i.default.createElement("div",{className:"example-content"},i.default.createElement("div",{className:"examples-wrapper"},i.default.createElement("p",null,"Remote Auto Complete simple default example."),i.default.createElement(p.default,{data:t,onChange:this.onChange,value:a,onBlur:this.onBlur,loading:n}))))),i.default.createElement("h2",{className:"example-title"},"Properties"),i.default.createElement(b.default,{data:g.default}))}}]),t}(u.Component);t.default=w},1081:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),c=n(i),p=a(1),f=n(p),d=a(404),h=n(d);a(1083);var m=function(e){function t(e){r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return l(t,e),u(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return c.default.createElement("div",{className:"prop-type-desc-table-wrapper"},c.default.createElement(h.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(i.Component);t.default=m,m.propTypes={data:f.default.object},m.defaultProps={data:""}},1082:function(e,t,a){t=e.exports=a(1020)(),t.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n",""])},1083:function(e,t,a){var n=a(1082);"string"==typeof n&&(n=[[e.i,n,""]]);a(1021)(n,{});n.locals&&(e.exports=n.locals)},1146:function(e,t,a){t=e.exports=a(1020)(),t.push([e.i,"",""])},1196:function(e,t,a){var n=a(1146);"string"==typeof n&&(n=[[e.i,n,""]]);a(1021)(n,{});n.locals&&(e.exports=n.locals)},1264:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"{}"},value:{type:"PropTypes.string",desc:"The value of input.",default:""},data:{type:"PropTypes.array",desc:"The options data.",default:"[]"},loading:{type:"PropTypes.bool",desc:"If true, the list is loading.",default:"false"},placeholder:{type:"PropTypes.string",desc:"The placeholder of input."},onChange:{type:"PropTypes.func",desc:"Callback function fired when value change."},onBlur:{type:"PropTypes.func",desc:"Callback function fired when input blur."},onFocus:{type:"PropTypes.func",desc:"Callback function fired when input focus."}}}});