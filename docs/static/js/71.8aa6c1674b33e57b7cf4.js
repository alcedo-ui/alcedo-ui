(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{426:function(e,t,a){"use strict";var n=a(10),r=a.n(n),l=a(108),s=a.n(l),o=a(109),i=a.n(o),c=a(110),p=a.n(c),m=a(111),d=a.n(m),u=a(112),h=a.n(u),f=a(0),v=a.n(f),g=a(430),w=(a(427),function(e){function t(e){i()(this,t);var a=d()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),p()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(g.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));w.defaultProps={data:null},t.a=w},427:function(e,t,a){var n=a(428);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(184)(n,r);n.locals&&(e.exports=n.locals)},428:function(e,t,a){(e.exports=a(183)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},756:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},depth:{type:"PropTypes.number",desc:"This number represents the zDepth of the root element shadow.",default:"1"}}},757:function(e,t,a){var n=a(758);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(184)(n,r);n.locals&&(e.exports=n.locals)},758:function(e,t,a){(e.exports=a(183)(!1)).push([e.i,".widget-examples .widget .widget-content {\n  padding: 20px; }\n",""])},901:function(e,t,a){"use strict";a.r(t);var n=a(108),r=a.n(n),l=a(109),s=a.n(l),o=a(110),i=a.n(o),c=a(111),p=a.n(c),m=a(112),d=a.n(m),u=a(0),h=a.n(u),f=a(445),v=a(432),g=a(431),w=a(426),y=a(756),E=(a(757),function(e){function t(e){return s()(this,t),p()(this,(t.__proto__||r()(t)).call(this,e))}return d()(t,e),i()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"example widget-examples"},h.a.createElement("h2",{className:"example-title"},"Widget"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Widget")," element is a basic container that can give a title."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(v.a,null,h.a.createElement(g.a,{className:"example-header",title:"Widget Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),h.a.createElement(v.a,null,h.a.createElement(g.a,{title:"Title"},h.a.createElement(f.a,{iconCls:"far fa-thumbs-up"}),h.a.createElement(f.a,{iconCls:"fas fa-trash-alt"})),h.a.createElement("div",{className:"widget-content"},"widget content")))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(w.a,{data:y}))}}]),t}(u.Component));t.default=E}}]);