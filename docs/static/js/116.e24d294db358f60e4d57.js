(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{282:function(e,t,a){"use strict";var n=a(4),r=a.n(n),l=a(51),o=a.n(l),s=a(52),i=a.n(s),c=a(53),p=a.n(c),d=a(54),m=a.n(d),u=a(19),h=a.n(u),f=a(55),y=a.n(f),v=a(18),w=a.n(v),E=a(0),g=a.n(E),b=a(276),x=a.n(b),N=a(288),T=(a(283),function(e){function t(e){var a;return o()(this,t),a=p()(this,m()(t).call(this,e)),w()(h()(a),"generateData",function(){var e=[];if(!a.props.data)return[];for(var t in a.props.data)e.push(r()({name:t},a.props.data[t]));return e}),a}return y()(t,e),i()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(N.a,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),t}(E.Component));T.propTypes={data:x.a.object},t.a=T},283:function(e,t,a){var n=a(284);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(107)(n,r);n.locals&&(e.exports=n.locals)},284:function(e,t,a){(e.exports=a(106)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},664:function(e){e.exports={children:{type:"PropTypes.any"},className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},depth:{type:"PropTypes.number",desc:"This number represents the zDepth of the root element shadow.",default:"1"}}},665:function(e,t,a){var n=a(666);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(107)(n,r);n.locals&&(e.exports=n.locals)},666:function(e,t,a){(e.exports=a(106)(!1)).push([e.i,".widget-examples .widget .widget-content {\n  padding: 20px; }\n",""])},822:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a.n(n),l=a(52),o=a.n(l),s=a(53),i=a.n(s),c=a(54),p=a.n(c),d=a(55),m=a.n(d),u=a(0),h=a.n(u),f=a(294),y=a(287),v=a(286),w=a(282),E=a(664),g=(a(665),function(e){function t(e){return r()(this,t),i()(this,p()(t).call(this,e))}return m()(t,e),o()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"example widget-examples"},h.a.createElement("h2",{className:"example-title"},"Widget"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Widget")," element is a basic container that can give a title."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(y.a,null,h.a.createElement(v.a,{className:"example-header",title:"Widget Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),h.a.createElement(y.a,null,h.a.createElement(v.a,{title:"Title"},h.a.createElement(f.a,{iconCls:"far fa-thumbs-up"}),h.a.createElement(f.a,{iconCls:"fas fa-trash-alt"})),h.a.createElement("div",{className:"widget-content"},"widget content")))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(w.a,{data:E}))}}]),t}(u.Component));t.default=g}}]);