(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{439:function(e,a,t){(e.exports=t(216)(!1)).push([e.i,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""])},440:function(e,a,t){var l=t(439);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(215)(l,r);l.locals&&(e.exports=l.locals)},441:function(e,a,t){"use strict";var l=t(1),r=t.n(l),n=t(9),s=t.n(n),i=t(5),c=t.n(i),o=t(8),p=t.n(o),d=t(3),m=t.n(d),u=t(4),h=t.n(u),f=t(0),v=t.n(f),b=t(442),w=(t(440),function(e){function a(e){c()(this,a);var t=m()(this,(a.__proto__||s()(a)).call(this,e));return t.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],t.generateData=t.generateData.bind(t),t}return h()(a,e),p()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(r()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return v.a.createElement("div",{className:"prop-type-desc-table-wrapper"},v.a.createElement(b.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(f.Component));w.defaultProps={data:null},a.a=w},462:function(e,a,t){"use strict";var l,r,n=t(2),s=t.n(n),i=t(9),c=t.n(i),o=t(5),p=t.n(o),d=t(8),m=t.n(d),u=t(3),h=t.n(u),f=t(4),v=t.n(f),b=t(0),w=t.n(b),y=t(7),E=t.n(y),x=t(28),g=t(47),T=t(6),N=(t(11),r=l=function(e){function a(e){var t;p()(this,a);for(var l=arguments.length,r=Array(l>1?l-1:0),n=1;n<l;n++)r[n-1]=arguments[n];var s=h()(this,(t=a.__proto__||c()(a)).call.apply(t,[this,e].concat(r)));return s.clickHandler=function(e){e.preventDefault();var a=s.props,t=a.disabled,l=a.isLoading,r=a.beforeChange,n=a.onClick;if(!t&&!l){n&&n(e);var i=!s.state.value,c=function(){s.setState({value:i},function(){var a=s.props.onChange;a&&a(i,e)})};r?!1!==r(i)&&c():c()}},s.state={value:!!e.value},s}return v()(a,e),m()(a,[{key:"componentWillReceiveProps",value:function(e){e.value!==this.state.value&&this.setState({value:!!e.value})}},{key:"render",value:function(){var e,t=this.props,l=t.className,r=t.style,n=t.theme,i=t.disabled,c=t.isLoading,o=t.size,p=t.labelVisible,d=this.state.value,m=E()("switcher",(e={activated:d,small:o===a.Size.SMALL},s()(e,"theme-"+n,n),s()(e,l,l),e));return w.a.createElement("div",{className:m,style:r,disabled:i||c,onClick:this.clickHandler},p?w.a.createElement("div",{className:"switcher-label"}):null,w.a.createElement(x.a,{className:"switcher-slider-wrapper",disableTouchRipple:i||c},w.a.createElement("div",{className:"switcher-slider"},c?w.a.createElement(g.a,null):null)))}}]),a}(b.Component),l.Size={DEFAULT:"",SMALL:"small"},l.Theme=T.a,r);N.defaultProps={theme:T.a.DEFAULT,value:!1,disabled:!1,isLoading:!1,labelVisible:!1,size:N.Size.DEFAULT};var S=N;t.d(a,"a",function(){return S})},710:function(e,a,t){(e.exports=t(216)(!1)).push([e.i,'.switcher-examples .field-group{float:none}.switcher-examples .field-group:after,.switcher-examples .field-group:before{display:table;content:""}.switcher-examples .field-group:after{clear:both}',""])},711:function(e,a,t){var l=t(710);"string"==typeof l&&(l=[[e.i,l,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(215)(l,r);l.locals&&(e.exports=l.locals)},712:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},theme:{type:"PropTypes.oneOf",desc:"The Switcher theme.",default:"Theme.DEFAULT"},value:{type:"PropTypes.bool",desc:"If true,the switcher will be in active status.",default:"false"},disabled:{type:"PropTypes.bool",desc:"Disables the switcher if set to true.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the switcher will be have loading effect.",default:"false"},labelVisible:{type:"PropTypes.bool",default:"false"},size:{type:"PropTypes.oneOf",desc:"The size of switcher.The value can be small or default.",default:"Switcher.Size.DEFAULT"},onClick:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."},beforeChange:{type:"PropTypes.func",desc:"Callback function fired before the switcher touch-tapped."},onChange:{type:"PropTypes.func",desc:"Callback function fired when the switcher touch-tapped."}}},876:function(e,a,t){"use strict";t.r(a);var l=t(9),r=t.n(l),n=t(5),s=t.n(n),i=t(8),c=t.n(i),o=t(3),p=t.n(o),d=t(4),m=t.n(d),u=t(0),h=t.n(u),f=t(462),v=t(443),b=t(444),w=t(441),y=t(712),E=(t(711),function(e){function a(e){return s()(this,a),p()(this,(a.__proto__||r()(a)).call(this,e))}return m()(a,e),c()(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"example switcher-examples"},h.a.createElement("h2",{className:"example-title"},"Switcher"),h.a.createElement("p",null,"A ",h.a.createElement("span",null,"Switcher")," is used as an on/off control."),h.a.createElement("h2",{className:"example-title"},"Examples"),h.a.createElement(v.a,null,h.a.createElement(b.a,{className:"example-header",title:"Switcher Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Switcher simple example.Set the value property to true for active status."),h.a.createElement(f.a,{value:!0}))))),h.a.createElement(v.a,null,h.a.createElement(b.a,{className:"example-header",title:"Switcher Size Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the size property to small for small size switcher."),h.a.createElement(f.a,{theme:f.a.Theme.HIGHLIGHT,size:f.a.Size.SMALL,labelVisible:!0}))))),h.a.createElement(v.a,null,h.a.createElement(b.a,{className:"example-header",title:"Switcher Disabled Example"}),h.a.createElement("div",{className:"widget-content"},h.a.createElement("div",{className:"example-content"},h.a.createElement("div",{className:"examples-wrapper"},h.a.createElement("p",null,"Set the disabled property to true for disabled props applied."),h.a.createElement(f.a,{disabled:!0}),h.a.createElement("br",null),h.a.createElement(f.a,{value:!0,disabled:!0}))))),h.a.createElement("h2",{className:"example-title"},"Properties"),h.a.createElement(w.a,{data:y}))}}]),a}(u.Component));a.default=E}}]);