(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{317:function(e,t,n){"use strict";var a=n(55),r=n.n(a),o=n(56),s=n.n(o),l=n(57),c=n.n(l),i=n(58),p=n.n(i),d=n(19),m=n.n(d),u=n(59),f=n.n(u),h=n(6),y=n.n(h),b=n(0),v=n.n(b),g=n(311),w=n.n(g),E=n(323);n(318);function x(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){y()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var N=function(e){function t(e){var n;return r()(this,t),n=c()(this,p()(t).call(this,e)),y()(m()(n),"generateData",function(){var e=[];if(!n.props.data)return[];for(var t in n.props.data)e.push(O({name:t},n.props.data[t]));return e}),n}return f()(t,e),s()(t,[{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(E.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(b.Component);N.propTypes={data:w.a.object},t.a=N},318:function(e,t,n){var a=n(319);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(124)(a,r);a.locals&&(e.exports=a.locals)},319:function(e,t,n){(e.exports=n(123)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},699:function(e){e.exports=JSON.parse('{"children":{"type":"PropTypes.any"},"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"depth":{"type":"PropTypes.number","desc":"This number represents the zDepth of the root element shadow.","default":"1"}}')},700:function(e,t,n){var a=n(701);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(124)(a,r);a.locals&&(e.exports=a.locals)},701:function(e,t,n){(e.exports=n(123)(!1)).push([e.i,".widget-examples .widget .widget-content {\n  padding: 20px; }\n",""])},857:function(e,t,n){"use strict";n.r(t);var a=n(55),r=n.n(a),o=n(56),s=n.n(o),l=n(57),c=n.n(l),i=n(58),p=n.n(i),d=n(59),m=n.n(d),u=n(0),f=n.n(u),h=n(329),y=n(322),b=n(321),v=n(317),g=n(699),w=(n(700),function(e){function t(e){return r()(this,t),c()(this,p()(t).call(this,e))}return m()(t,e),s()(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"example widget-examples"},f.a.createElement("h2",{className:"example-title"},"Widget"),f.a.createElement("p",null,"A ",f.a.createElement("span",null,"Widget")," element is a basic container that can give a title."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(y.a,null,f.a.createElement(b.a,{className:"example-header",title:"Widget Example"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),f.a.createElement(y.a,null,f.a.createElement(b.a,{title:"Title"},f.a.createElement(h.a,{iconCls:"far fa-thumbs-up"}),f.a.createElement(h.a,{iconCls:"fas fa-trash-alt"})),f.a.createElement("div",{className:"widget-content"},"widget content")))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(v.a,{data:g}))}}]),t}(u.Component));t.default=w}}]);