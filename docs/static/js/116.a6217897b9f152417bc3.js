(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{282:function(e,t,n){"use strict";var a=n(54),r=n.n(a),o=n(55),l=n.n(o),s=n(56),c=n.n(s),p=n(57),i=n.n(p),d=n(20),u=n.n(d),m=n(58),f=n.n(m),h=n(7),y=n.n(h),b=n(0),g=n.n(b),v=n(277),w=n.n(v),E=n(289);n(283);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(e){var n;return r()(this,t),n=c()(this,i()(t).call(this,e)),y()(u()(n),"generateData",(function(){var e=[];if(!n.props.data)return[];for(var t in n.props.data)e.push(O({name:t},n.props.data[t]));return e})),n}return f()(t,e),l()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(b.Component);N.propTypes={data:w.a.object},t.a=N},283:function(e,t,n){var a=n(284);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(109)(a,r);a.locals&&(e.exports=a.locals)},284:function(e,t,n){(e.exports=n(108)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},662:function(e){e.exports=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"depth":{"type":"PropTypes.number","desc":"This number represents the zDepth of the root element shadow.","default":"1"}}')},663:function(e,t,n){var a=n(664);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(109)(a,r);a.locals&&(e.exports=a.locals)},664:function(e,t,n){(e.exports=n(108)(!1)).push([e.i,".widget-examples .widget .widget-content {\n  padding: 20px; }\n",""])},820:function(e,t,n){"use strict";n.r(t);var a=n(54),r=n.n(a),o=n(55),l=n.n(o),s=n(56),c=n.n(s),p=n(57),i=n.n(p),d=n(58),u=n.n(d),m=n(0),f=n.n(m),h=n(294),y=n(287),b=n(286),g=n(282),v=n(662),w=(n(663),function(e){function t(e){return r()(this,t),c()(this,i()(t).call(this,e))}return u()(t,e),l()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"example widget-examples"},f.a.createElement("h2",{className:"example-title"},"Widget"),f.a.createElement("p",null,"A ",f.a.createElement("span",null,"Widget")," element is a basic container that can give a title."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(y.a,null,f.a.createElement(b.a,{className:"example-header",title:"Widget Example"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),f.a.createElement(y.a,null,f.a.createElement(b.a,{title:"Title"},f.a.createElement(h.a,{iconCls:"far fa-thumbs-up"}),f.a.createElement(h.a,{iconCls:"fas fa-trash-alt"})),f.a.createElement("div",{className:"widget-content"},"widget content")))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(g.a,{data:v}))}}]),t}(m.Component));t.default=w}}]);