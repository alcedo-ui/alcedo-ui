webpackJsonp([16],{1046:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),i=n(u),c=a(401),p=n(c),d=a(407),f=n(d),m=a(402),h=n(m),y=a(403),g=n(y),b=a(1062),P=n(b),v=a(1239),T=n(v);a(1183);var E=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"ID",sortable:!0,sortProp:"id",renderer:"id",headerClassName:"test-header",cellClassName:"test-cell",flex:1},{header:"Name",renderer:"${firstName} - ${lastName}",flex:2},{header:"Status",renderer:function(e){return i.default.createElement(f.default,{value:!e.disabled,size:"small",onTouchTap:function(e){e.stopPropagation()}})},flex:2}],a.state={data:a.generateData()},a}return o(t,e),s(t,[{key:"generateData",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=[],a=0;a<e;a++)t.push({id:a,firstName:"firstName"+a,lastName:"lastName"+a});return t}},{key:"render",value:function(){var e=this.state.data;return i.default.createElement("div",{className:"example table-examples"},i.default.createElement("h2",{className:"example-title"},"Table"),i.default.createElement("p",null,i.default.createElement("span",null,"Tables")," are used to display data and to organize it."),i.default.createElement("h2",{className:"example-title"},"Examples"),i.default.createElement(h.default,null,i.default.createElement(g.default,{className:"example-header",title:"With isPagging"}),i.default.createElement("div",{className:"widget-content"},i.default.createElement("div",{className:"example-content"},i.default.createElement("p",null,"A simple ",i.default.createElement("code",null,"Table")," example."),i.default.createElement(p.default,{columns:this.columns,isPagging:!0,data:e})))),i.default.createElement(h.default,null,i.default.createElement(g.default,{className:"example-header",title:"With isPagging"}),i.default.createElement("div",{className:"widget-content"},i.default.createElement("div",{className:"example-content"},i.default.createElement("p",null,"A simple ",i.default.createElement("code",null,"Table")," example."),i.default.createElement(p.default,{columns:this.columns,isPagging:!0,data:e,mode:p.default.Mode.RADIO,sortInitConfig:{prop:"id",type:-1}})))),i.default.createElement(h.default,null,i.default.createElement(g.default,{className:"example-header",title:"With hasLineNumber and isMultiSelect"}),i.default.createElement("div",{className:"widget-content"},i.default.createElement("div",{className:"example-content"},i.default.createElement("p",null,"A more complex example.Set the ",i.default.createElement("code",null,"hasLineNumber")," and ",i.default.createElement("code",null,"isMultiSelect"),"to true for showLineNumber and checkbox."),i.default.createElement(p.default,{columns:this.columns,isPagging:!0,mode:p.default.Mode.CHECKBOX,data:e,paggingSelectedCountVisible:!0,defaultPageSize:20,pageSizes:[10,20,30,40],onChange:function(e){console.log(e)}})))),i.default.createElement("h2",{className:"example-title"},"Properties"),i.default.createElement(P.default,{data:T.default}))}}]),t}(u.Component);t.default=E},1062:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),c=n(i),p=a(1),d=n(p),f=a(401),m=n(f);a(1064);var h=function(e){function t(e){l(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return o(t,e),u(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return c.default.createElement("div",{className:"prop-type-desc-table-wrapper"},c.default.createElement(m.default,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(i.Component);t.default=h,h.propTypes={data:d.default.object},h.defaultProps={data:""}},1063:function(e,t,a){t=e.exports=a(1005)(),t.push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n",""])},1064:function(e,t,a){var n=a(1063);"string"==typeof n&&(n=[[e.i,n,""]]);a(1006)(n,{});n.locals&&(e.exports=n.locals)},1137:function(e,t,a){t=e.exports=a(1005)(),t.push([e.i,"",""])},1183:function(e,t,a){var n=a(1137);"string"==typeof n&&(n=[[e.i,n,""]]);a(1006)(n,{});n.locals&&(e.exports=n.locals)},1239:function(e,t){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},data:{type:"PropTypes.array",desc:"The table list data.",default:"[]"},value:{type:"PropTypes.any",desc:"The value of tr.",default:"null"},sortFunc:{type:"PropTypes.func",desc:"Sorting method."},hasLineNumber:{type:"PropTypes.bool",desc:"If true,the table will have line number.",default:"false"},onSelectChange:{type:"PropTypes.func",desc:"The function that trigger when select changes."},columns:{type:"PropTypes.array",desc:"Children passed into table header.",default:"[]"},mode:{type:"PropTypes.oneOf",desc:"The type of table list.Can be checkbox,radio,normal.",default:"Table.Mode.NORMAL"},idProp:{type:"PropTypes.string",desc:"The fields as ID.",default:"id"},useFullPagging:{type:"PropTypes.bool",desc:"If true,the table will use Pagging component.",default:"false"},isPagging:{type:"PropTypes.bool",desc:"If true,the table will have padding.",default:"true"},paggingSelectedCountVisible:{type:"PropTypes.bool",desc:"If true,the total of selected will display.",default:"false"},paggingPageSizeVisible:{type:"PropTypes.bool",desc:"If true,the pageSize will display.",default:"true"},defaultPageSize:{type:"PropTypes.number",desc:"",default:"10"},pageSizes:{type:"PropTypes.array",desc:"",default:"[5, 10, 15, 20]"},sortInitConfig:{type:"PropTypes.shape",desc:"Sort init config.",default:"null"},onSelect:{type:"PropTypes.func",desc:"The function that trigger when select one item."},onDeselect:{type:"PropTypes.func",desc:"The function that trigger when unSelect one item."},onRowTouchTap:{type:"PropTypes.func",desc:"The function that trigger when the row is touch-tapped."},onCellTouchTap:{type:"PropTypes.func",desc:"The function that trigger when the td is touch-tapped."},onChange:{type:"PropTypes.func",desc:""}}}});