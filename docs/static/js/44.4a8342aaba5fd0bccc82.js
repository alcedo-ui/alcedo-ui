(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{466:function(e,t,a){(e.exports=a(80)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},467:function(e,t,a){var n=a(466);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(79)(n,r);n.locals&&(e.exports=n.locals)},468:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(12),s=a.n(l),o=a(7),i=a.n(o),p=a(11),c=a.n(p),d=a(5),m=a.n(d),u=a(6),h=a.n(u),f=a(1),v=a.n(f),g=a(0),y=a.n(g),w=a(469),E=(a(467),function(e){function t(e){i()(this,t);var a=m()(this,(t.__proto__||s()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return h()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(w.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(f.Component));E.propTypes={data:y.a.object},E.defaultProps={data:null},t.a=E},648:function(e,t,a){(e.exports=a(80)(!1)).push([e.i,".widget-examples .widget .widget-content {\n  padding: 20px; }\n",""])},649:function(e,t,a){var n=a(648);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(79)(n,r);n.locals&&(e.exports=n.locals)},650:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},depth:{type:"PropTypes.number",desc:"This number represents the zDepth of the root element shadow.",default:"1"}}},838:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return E});var n=a(12),r=a.n(n),l=a(7),s=a.n(l),o=a(11),i=a.n(o),p=a(5),c=a.n(p),d=a(6),m=a.n(d),u=a(1),h=a.n(u),f=a(39),v=a(470),g=a(471),y=a(468),w=a(650),E=(a(649),function(e){function t(e){return s()(this,t),c()(this,(t.__proto__||r()(t)).call(this,e))}return m()(t,e),i()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"example widget-examples"},h.a.createElement("h2",{className:"example-title"},"Widget"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Widget")," element is a basic container that can give a title."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(v.a,null,h.a.createElement(g.a,{className:"example-header",title:"Widget Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),h.a.createElement(v.a,null,h.a.createElement(g.a,{title:"Title"},h.a.createElement(f.a,{iconCls:"far fa-thumbs-up"}),h.a.createElement(f.a,{iconCls:"fas fa-trash-alt"})),h.a.createElement("div",{className:"widget-content"},"widget content")))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(y.a,{data:w}))}}]),t}(u.Component))}}]);