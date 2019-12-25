(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{292:function(e,a,t){"use strict";var r=t(61),n=t.n(r),p=t(62),l=t.n(p),c=t(63),o=t.n(c),s=t(64),d=t.n(s),i=t(21),m=t.n(i),u=t(65),h=t.n(u),f=t(9),E=t.n(f),y=t(0),b=t.n(y),x=t(287),v=t.n(x),w=t(299);t(293);function g(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?g(Object(t),!0).forEach((function(a){E()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N=function(e){function a(e){var t;return n()(this,a),t=o()(this,d()(a).call(this,e)),E()(m()(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var a in t.props.data)e.push(P({name:a},t.props.data[a]));return e})),t}return h()(a,e),l()(a,[{key:"render",value:function(){return b.a.createElement("div",{className:"prop-type-desc-table-wrapper"},b.a.createElement(w.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),a}(y.Component);N.propTypes={data:v.a.object},a.a=N},293:function(e,a,t){var r=t(294);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var n={insert:"head",singleton:!1};t(114)(r,n);r.locals&&(e.exports=r.locals)},294:function(e,a,t){(a=t(113)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""]),e.exports=a},670:function(e){e.exports=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"theme":{"type":"PropTypes.oneOf","desc":"Theme of the root element.","default":"Theme.DEFAULT"},"depth":{"type":"PropTypes.number","desc":"This number represents the zDepth of the paper shadow.","default":"1"},"nonRounded":{"type":"PropTypes.bool","desc":"If true,the paper container will have no border radius.","default":"false"},"isCircular":{"type":"PropTypes.bool","desc":"If true,the paper shape is circle.","default":"false"}}')},671:function(e,a,t){var r=t(672);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var n={insert:"head",singleton:!1};t(114)(r,n);r.locals&&(e.exports=r.locals)},672:function(e,a,t){(a=t(113)(!1)).push([e.i,'.paper-examples .examples-wrapper::before, .paper-examples .examples-wrapper::after {\n  display: table;\n  content: ""; }\n\n.paper-examples .examples-wrapper::after {\n  clear: both; }\n\n.paper-examples .examples-wrapper .paper {\n  width: 80px;\n  height: 80px;\n  float: left;\n  margin: 0 20px 20px 0; }\n',""]),e.exports=a},832:function(e,a,t){"use strict";t.r(a);var r=t(61),n=t.n(r),p=t(62),l=t.n(p),c=t(63),o=t.n(c),s=t(64),d=t.n(s),i=t(65),m=t.n(i),u=t(0),h=t.n(u),f=t(307),E=t(296),y=t(297),b=t(292),x=t(670),v=(t(671),function(e){function a(e){return n()(this,a),o()(this,d()(a).call(this,e))}return m()(a,e),l()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"example paper-examples"},h.a.createElement("h2",{className:"example-title"},"Paper"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Paper")," element is a basic container that can give depth to the page."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(E.a,null,h.a.createElement(y.a,{className:"example-header",title:"Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Paper examples showing the range of zDepth."),h.a.createElement(f.a,{depth:0}),h.a.createElement(f.a,{depth:1}),h.a.createElement(f.a,{depth:2}),h.a.createElement(f.a,{depth:3}),h.a.createElement(f.a,{depth:4}),h.a.createElement(f.a,{depth:5}),h.a.createElement(f.a,{depth:6}),h.a.createElement(f.a,{depth:7}))))),h.a.createElement(E.a,null,h.a.createElement(y.a,{className:"example-header",title:"Non-Rounded Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Corners are rounded by default.Set the nonRounded property to true for square corners."),h.a.createElement(f.a,{depth:0,nonRounded:!0}),h.a.createElement(f.a,{depth:1,nonRounded:!0}),h.a.createElement(f.a,{depth:2,nonRounded:!0}),h.a.createElement(f.a,{depth:3,nonRounded:!0}),h.a.createElement(f.a,{depth:4,nonRounded:!0}),h.a.createElement(f.a,{depth:5,nonRounded:!0}),h.a.createElement(f.a,{depth:6,nonRounded:!0}),h.a.createElement(f.a,{depth:7,nonRounded:!0}))))),h.a.createElement(E.a,null,h.a.createElement(y.a,{className:"example-header",title:"Circular Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Pages are square by default. Set the isCircular property to true for round page."),h.a.createElement(f.a,{depth:0,isCircular:!0}),h.a.createElement(f.a,{depth:1,isCircular:!0}),h.a.createElement(f.a,{depth:2,isCircular:!0}),h.a.createElement(f.a,{depth:3,isCircular:!0}),h.a.createElement(f.a,{depth:4,isCircular:!0}),h.a.createElement(f.a,{depth:5,isCircular:!0}),h.a.createElement(f.a,{depth:6,isCircular:!0}),h.a.createElement(f.a,{depth:7,isCircular:!0}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(b.a,{data:x}))}}]),a}(u.Component));a.default=v}}]);