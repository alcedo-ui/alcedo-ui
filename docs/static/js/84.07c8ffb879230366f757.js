(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{466:function(e,a,t){(e.exports=t(80)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},467:function(e,a,t){var l=t(466);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(79)(l,n);l.locals&&(e.exports=l.locals)},468:function(e,a,t){"use strict";var l=t(4),n=t.n(l),r=t(12),s=t.n(r),i=t(7),o=t.n(i),c=t(11),p=t.n(c),u=t(5),d=t.n(u),m=t(6),h=t.n(m),f=t(1),v=t.n(f),b=t(0),y=t.n(b),w=t(469),E=(t(467),function(e){function a(e){o()(this,a);var t=d()(this,(a.__proto__||s()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return h()(a,e),p()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(w.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(f.Component));E.propTypes={data:y.a.object},E.defaultProps={data:null},a.a=E},487:function(e,a,t){"use strict";var l,n,r=t(8),s=t.n(r),i=t(12),o=t.n(i),c=t(7),p=t.n(c),u=t(11),d=t.n(u),m=t(5),h=t.n(m),f=t(6),v=t.n(f),b=t(1),y=t.n(b),w=t(0),E=t.n(w),T=t(9),g=t.n(T),x=t(39),N=t(57),S=t(2),L=t(3),P=(n=l=function(e){function a(e){var t;p()(this,a);for(var l=arguments.length,n=Array(l>1?l-1:0),r=1;r<l;r++)n[r-1]=arguments[r];var s=h()(this,(t=a.__proto__||o()(a)).call.apply(t,[this,e].concat(n)));return s.state={value:!!e.value},s.touchTapHandler=s.touchTapHandler.bind(s),s}return v()(a,e),d()(a,[{key:"touchTapHandler",value:function(e){var a=this;e.preventDefault();var t=this.props,l=t.disabled,n=t.isLoading,r=t.beforeChange,s=t.onTouchTap;if(!l&&!n){s&&s(e);var i=!this.state.value,o=function(){a.setState({value:i},function(){var t=a.props.onChange;t&&t(i,e)})};r?!1!==r(i)&&o():o()}}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:!!e.value})}},{key:"render",value:function(){var e,t=this.props,l=t.className,n=t.style,r=t.theme,i=t.disabled,o=t.isLoading,c=t.size,p=t.labelVisible,u=this.state.value,d=g()("switcher",(e={activated:u,small:c===a.Size.SMALL},s()(e,"theme-"+r,r),s()(e,l,l),e));return y.a.createElement("div",{className:d,style:n,disabled:i||o,onTouchTap:this.touchTapHandler},p?y.a.createElement("div",{className:"switcher-label"}):null,y.a.createElement(x.a,{className:"switcher-slider-wrapper",disableTouchRipple:i||o},y.a.createElement("div",{className:"switcher-slider"},o?y.a.createElement(N.a,null):null)))}}]),a}(b.Component),l.Size={DEFAULT:"",SMALL:"small"},l.Theme=S.a,n);P.propTypes={className:E.a.string,style:E.a.object,theme:E.a.oneOf(L.a.enumerateValue(S.a)),value:E.a.bool,disabled:E.a.bool,isLoading:E.a.bool,labelVisible:E.a.bool,size:E.a.oneOf(L.a.enumerateValue(P.Size)),onTouchTap:E.a.func,beforeChange:E.a.func,onChange:E.a.func},P.defaultProps={className:"",style:null,theme:S.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:P.Size.DEFAULT};var z=P;t.d(a,"a",function(){return z})},730:function(e,a,t){(e.exports=t(80)(!1)).push([e.i,'.switcher-examples .field-group {\n  float: none; }\n  .switcher-examples .field-group::before, .switcher-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .switcher-examples .field-group::after {\n    clear: both; }\n',""])},731:function(e,a,t){var l=t(730);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(79)(l,n);l.locals&&(e.exports=l.locals)},732:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},theme:{type:"PropTypes.oneOf",desc:"The Switcher theme.",default:"Theme.DEFAULT"},value:{type:"PropTypes.bool",desc:"If true,the switcher will be in active status.",default:"false"},disabled:{type:"PropTypes.bool",desc:"Disables the switcher if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the switcher will be have loading effect.",default:"false"},labelVisible:{type:"PropTypes.bool",default:"false"},size:{type:"PropTypes.oneOf",desc:"The size of switcher.The value can be small or default.",default:"Switcher.Size.DEFAULT"},onTouchTap:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired before the switcher touch-tapped."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."}}},878:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return E});var l=t(12),n=t.n(l),r=t(7),s=t.n(r),i=t(11),o=t.n(i),c=t(5),p=t.n(c),u=t(6),d=t.n(u),m=t(1),h=t.n(m),f=t(487),v=t(470),b=t(471),y=t(468),w=t(732),E=(t(731),function(e){function a(e){return s()(this,a),p()(this,(a.__proto__||n()(a)).call(this,e))}return d()(a,e),o()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"example switcher-examples"},h.a.createElement("h2",{className:"example-title"},"Switcher"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Switcher")," is used as an on/off control."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(v.a,null,h.a.createElement(b.a,{className:"example-header",title:"Switcher Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Switcher simple example.Set the value property to true for active status."),h.a.createElement(f.a,{value:!0}))))),h.a.createElement(v.a,null,h.a.createElement(b.a,{className:"example-header",title:"Switcher Size Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the size property to small for small size switcher."),h.a.createElement(f.a,{theme:f.a.Theme.HIGHLIGHT,size:f.a.Size.SMALL,labelVisible:!0}))))),h.a.createElement(v.a,null,h.a.createElement(b.a,{className:"example-header",title:"Switcher Disabled Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the disabled property to true for disabled props applied."),h.a.createElement(f.a,{disabled:!0}),h.a.createElement("br",null),h.a.createElement(f.a,{value:!0,disabled:!0}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(y.a,{data:w}))}}]),a}(m.Component))}}]);