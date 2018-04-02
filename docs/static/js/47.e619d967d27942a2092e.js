(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{475:function(e,a,t){(e.exports=t(83)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},476:function(e,a,t){var r=t(475);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(82)(r,n);r.locals&&(e.exports=r.locals)},477:function(e,a,t){"use strict";var r=t(1),n=t.n(r),l=t(10),p=t.n(l),s=t(4),o=t.n(s),c=t(9),d=t.n(c),m=t(2),i=t.n(m),u=t(3),h=t.n(u),E=t(0),f=t.n(E),x=t(14),v=t.n(x),y=t(478),w=(t(476),function(e){function a(e){o()(this,a);var t=i()(this,(a.__proto__||p()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return h()(a,e),d()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return f.a.createElement("div",{className:"prop-type-desc-table-wrapper"},f.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(E.Component));w.propTypes={data:v.a.object},w.defaultProps={data:null},a.a=w},661:function(e,a,t){(e.exports=t(83)(!1)).push([e.i,'.paper-examples .examples-wrapper:after,.paper-examples .examples-wrapper:before{display:table;content:""}.paper-examples .examples-wrapper:after{clear:both}.paper-examples .examples-wrapper .paper{width:80px;height:80px;float:left;margin:0 20px 20px 0}',""])},662:function(e,a,t){var r=t(661);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(82)(r,n);r.locals&&(e.exports=r.locals)},663:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"Theme of the root element.",default:"Theme.DEFAULT"},depth:{type:"PropTypes.number",desc:"This number represents the zDepth of the paper shadow.",default:"1"},nonRounded:{type:"PropTypes.bool",desc:"If true,the paper container will have no border radius.",default:"false"},isCircular:{type:"PropTypes.bool",desc:"If true,the paper shape is circle.",default:"false"}}},849:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return w});var r=t(10),n=t.n(r),l=t(4),p=t.n(l),s=t(9),o=t.n(s),c=t(2),d=t.n(c),m=t(3),i=t.n(m),u=t(0),h=t.n(u),E=t(164),f=t(480),x=t(479),v=t(477),y=t(663),w=(t(662),function(e){function a(e){return p()(this,a),d()(this,(a.__proto__||n()(a)).call(this,e))}return i()(a,e),o()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"example paper-examples"},h.a.createElement("h2",{className:"example-title"},"Paper"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Paper")," element is a basic container that can give depth to the page."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(f.a,null,h.a.createElement(x.a,{className:"example-header",title:"Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Paper examples showing the range of zDepth."),h.a.createElement(E.a,{depth:0}),h.a.createElement(E.a,{depth:1}),h.a.createElement(E.a,{depth:2}),h.a.createElement(E.a,{depth:3}),h.a.createElement(E.a,{depth:4}),h.a.createElement(E.a,{depth:5}),h.a.createElement(E.a,{depth:6}),h.a.createElement(E.a,{depth:7}))))),h.a.createElement(f.a,null,h.a.createElement(x.a,{className:"example-header",title:"Non-Rounded Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Corners are rounded by default.Set the nonRounded property to true for square corners."),h.a.createElement(E.a,{depth:0,nonRounded:!0}),h.a.createElement(E.a,{depth:1,nonRounded:!0}),h.a.createElement(E.a,{depth:2,nonRounded:!0}),h.a.createElement(E.a,{depth:3,nonRounded:!0}),h.a.createElement(E.a,{depth:4,nonRounded:!0}),h.a.createElement(E.a,{depth:5,nonRounded:!0}),h.a.createElement(E.a,{depth:6,nonRounded:!0}),h.a.createElement(E.a,{depth:7,nonRounded:!0}))))),h.a.createElement(f.a,null,h.a.createElement(x.a,{className:"example-header",title:"Circular Paper Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Pages are square by default. Set the isCircular property to true for round page."),h.a.createElement(E.a,{depth:0,isCircular:!0}),h.a.createElement(E.a,{depth:1,isCircular:!0}),h.a.createElement(E.a,{depth:2,isCircular:!0}),h.a.createElement(E.a,{depth:3,isCircular:!0}),h.a.createElement(E.a,{depth:4,isCircular:!0}),h.a.createElement(E.a,{depth:5,isCircular:!0}),h.a.createElement(E.a,{depth:6,isCircular:!0}),h.a.createElement(E.a,{depth:7,isCircular:!0}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(v.a,{data:y}))}}]),a}(u.Component))}}]);