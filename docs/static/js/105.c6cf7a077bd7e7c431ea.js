(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{351:function(e,t,a){"use strict";var n=a(6),r=a.n(n),l=a(75),s=a.n(l),o=a(76),i=a.n(o),c=a(77),p=a.n(c),d=a(78),m=a.n(d),u=a(79),h=a.n(u),f=a(11),v=a.n(f),g=a(0),y=a.n(g),w=a(1),E=a.n(w),x=a(356),b=(a(352),function(e){function t(e){var a,n;return s()(this,t),(n=p()(this,m()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=v()(v()(n)),n.generateData).bind(a),n}return h()(t,e),i()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(r()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(x.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(g.Component));b.propTypes={data:E.a.object},b.defaultProps={data:null},t.a=b},352:function(e,t,a){var n=a(353);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(136)(n,r);n.locals&&(e.exports=n.locals)},353:function(e,t,a){(e.exports=a(135)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},690:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},depth:{type:"PropTypes.number",desc:"This number represents the zDepth of the root element shadow.",default:"1"}}},691:function(e,t,a){var n=a(692);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(136)(n,r);n.locals&&(e.exports=n.locals)},692:function(e,t,a){(e.exports=a(135)(!1)).push([e.i,".widget-examples .widget .widget-content {\n  padding: 20px; }\n",""])},838:function(e,t,a){"use strict";a.r(t);var n=a(75),r=a.n(n),l=a(76),s=a.n(l),o=a(77),i=a.n(o),c=a(78),p=a.n(c),d=a(79),m=a.n(d),u=a(0),h=a.n(u),f=a(369),v=a(358),g=a(357),y=a(351),w=a(690),E=(a(691),function(e){function t(e){return r()(this,t),i()(this,p()(t).call(this,e))}return m()(t,e),s()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"example widget-examples"},h.a.createElement("h2",{className:"example-title"},"Widget"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Widget")," element is a basic container that can give a title."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(v.a,null,h.a.createElement(g.a,{className:"example-header",title:"Widget Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Widget example showing title and content.Set the value of the title property to 'Title' and place the content in the widget-content container."),h.a.createElement(v.a,null,h.a.createElement(g.a,{title:"Title"},h.a.createElement(f.a,{iconCls:"far fa-thumbs-up"}),h.a.createElement(f.a,{iconCls:"fas fa-trash-alt"})),h.a.createElement("div",{className:"widget-content"},"widget content")))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(y.a,{data:w}))}}]),t}(u.Component));t.default=E}}]);