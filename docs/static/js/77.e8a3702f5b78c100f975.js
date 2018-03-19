(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1163:function(e,t,a){(e.exports=a(134)(!1)).push([e.i,".editable-select-examples .editable-select {\n  width: 300px; }\n",""])},1164:function(e,t,a){var n=a(1163);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(133)(n,s);n.locals&&(e.exports=n.locals)},1165:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element.",default:""},popupClassName:{type:"PropTypes.string",desc:"The class name of the popup element.",default:""},style:{type:"PropTypes.object",desc:"Override the styles of the root element.",default:"null"},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element.",default:"null"},name:{type:"PropTypes.string",desc:"The name of the editableSelect.",default:""},value:{type:"PropTypes.any",desc:"The value of the editableSelect.",default:""},renderer:{type:"PropTypes.func",desc:"You can create a complicated renderer callback instead of value and desc prop."},placeholder:{type:"PropTypes.string",desc:"The placeholder of the editableSelect.",default:"Please select ..."},data:{type:"PropTypes.oneOf",desc:"The options data.",default:"[]"},invalidMsg:{type:"PropTypes.string",desc:"The invalid message of editableSelect.",default:""},disabled:{type:"PropTypes.bool",desc:"If true,the editableSelect will be disabled.",default:"false"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")'},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},infoMsg:{type:"PropTypes.string",desc:"The message of the editableSelect.",default:""},textFormat:{type:"PropTypes.func",desc:"Use this function to format the options's text."},autoClose:{type:"PropTypes.bool",desc:"If true,the drop-down box automatically closed after selection.",default:"true"},useFilter:{type:"PropTypes.bool",desc:"If true,the drop-down box will have search input.",default:"false"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matching option.",default:""},triggerTheme:{type:"PropTypes.oneOf",desc:"The theme of editableSelect.Can be primary,highlight,success,warning,error.",default:"Theme.DEFAULT"},isGrouped:{type:"PropTypes.bool",desc:"If true,the drop-down box will be have group selection.",default:"false"},onItemTouchTap:{type:"PropTypes.func",desc:"Callback function fired when the button is touch-tapped."},onChange:{type:"PropTypes.func",desc:"Callback function fired when a menu item is selected."},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},1320:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return T});var n=a(14),s=a.n(n),l=a(9),o=a.n(l),r=a(13),i=a.n(r),p=a(7),c=a.n(p),d=a(8),u=a.n(d),h=a(1),f=a.n(h),m=a(943),g=a(921),v=a(920),b=a(918),y=a(1165),T=(a(1164),function(e){function t(e){o()(this,t);var a=c()(this,(t.__proto__||s()(t)).call(this,e));return a.data=[{value:0,text:"test0"},{value:1,text:"test1"},{text:"test2",value:2,desc:"Here is test2.",onTouchTap:function(){console.log("test2 selected!")}},{value:3,text:"test3"},{value:4,text:"test4"},{value:5,text:"test5"},{text:"test6",value:6,desc:"Here is test6.",onTouchTap:function(){console.log("test6 selected!")}},{value:6,text:"test6"},{value:7,text:"test7"},{value:8,text:"test8"}],a.groupedData=[{name:"socialNetwork",children:[{iconCls:"fab fa-facebook",text:"Facebook",desc:"Here is a Facebook Desc."},{iconCls:"fab fa-twitter",text:"Twitter",desc:"Here is a Twitter Desc."},{iconCls:"fab fa-google-plus-g",text:"Google+",desc:"Here is a Google+ Desc."}]},{name:"device",children:[{iconCls:"fab fa-android",text:"Android",desc:"Here is a Android Desc."},{iconCls:"fab fa-apple",text:"Apple",desc:"Here is a Apple Desc."},{iconCls:"fab fa-windows",text:"Windows",desc:"Here is a Windows Desc."}]}],a.onChange=a.onChange.bind(a),a}return u()(t,e),i()(t,[{key:"onChange",value:function(e){console.log(e)}},{key:"render",value:function(){return f.a.createElement("div",{className:"example editable-select-examples"},f.a.createElement("h2",{className:"example-title"},"Editable Select"),f.a.createElement("p",null,f.a.createElement("span",null,"Editable Select")," use to store operating elements. Click on the contact and a drop-down menu will appear. You can select from the list and execute the appropriate command."),f.a.createElement("h2",{className:"example-title"},"Examples"),f.a.createElement(g.a,null,f.a.createElement(v.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Select")," simple example."),f.a.createElement("div",{className:"field-group"},f.a.createElement(m.a,{data:this.data,onChange:this.onChange,renderer:function(e){return e?"["+e.value+"] "+e.text:null}})))))),f.a.createElement(g.a,null,f.a.createElement(v.a,{className:"example-header",title:"Basic"}),f.a.createElement("div",{className:"widget-content"},f.a.createElement("div",{className:"example-content"},f.a.createElement("div",{className:"examples-wrapper"},f.a.createElement("p",null,f.a.createElement("code",null,"Editable Select")," simple example."),f.a.createElement("div",{className:"field-group"},f.a.createElement(m.a,{data:this.data,onChange:this.onChange,valueField:"text",useFilter:!0})))))),f.a.createElement("h2",{className:"example-title"},"Properties"),f.a.createElement(b.a,{data:y}))}}]),t}(h.Component))},916:function(e,t,a){(e.exports=a(134)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},917:function(e,t,a){var n=a(916);"string"==typeof n&&(n=[[e.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(133)(n,s);n.locals&&(e.exports=n.locals)},918:function(e,t,a){"use strict";var n=a(6),s=a.n(n),l=a(14),o=a.n(l),r=a(9),i=a.n(r),p=a(13),c=a.n(p),d=a(7),u=a.n(d),h=a(8),f=a.n(h),m=a(1),g=a.n(m),v=a(0),b=a.n(v),y=a(919),T=(a(917),function(e){function t(e){i()(this,t);var a=u()(this,(t.__proto__||o()(t)).call(this,e));return a.columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],a.generateData=a.generateData.bind(a),a}return f()(t,e),c()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(s()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(y.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(m.Component));T.propTypes={data:b.a.object},T.defaultProps={data:null},t.a=T},943:function(e,t,a){"use strict";var n,s,l=a(10),o=a.n(l),r=a(115),i=a.n(r),p=a(55),c=a.n(p),d=a(14),u=a.n(d),h=a(9),f=a.n(h),m=a(13),g=a.n(m),v=a(7),b=a.n(v),y=a(8),T=a.n(y),C=a(1),E=a.n(C),x=a(0),w=a.n(x),P=a(36),N=a(11),F=a.n(N),S=a(255),M=a(135),O=a(114),k=a(4),D=a(5),H=a(260),V=(s=n=function(e){function t(e){var a;f()(this,t);for(var n=arguments.length,s=Array(n>1?n-1:0),l=1;l<n;l++)s[l-1]=arguments[l];var o=b()(this,(a=t.__proto__||u()(t)).call.apply(a,[this,e].concat(s)));return o.state={value:e.value,listValue:e.value,filter:"",popupVisible:!1,isAbove:!1},o.showPopup=o.showPopup.bind(o),o.closePopup=o.closePopup.bind(o),o.filterData=o.filterData.bind(o),o.popupRenderHandle=o.popupRenderHandle.bind(o),o.changeHandle=o.changeHandle.bind(o),o.onChangeValue=o.onChangeValue.bind(o),o}return T()(t,e),g()(t,[{key:"onChangeValue",value:function(e){var t=this;this.props.useFilter?this.setState({value:e,filter:e,listValue:""},function(){var a=t.props.onChange;a&&a(e)}):this.setState({value:e,listValue:""},function(){var a=t.props.onChange;a&&a(e)})}},{key:"showPopup",value:function(){var e=this;this.setState({popupVisible:!0},function(){e.props.onTriggerTouchTap&&e.props.onTriggerTouchTap(e.state.popupVisible),e.props.onFocus&&e.props.onFocus()})}},{key:"closePopup",value:function(){var e=this;this.setState({popupVisible:!1},function(){e.props.onTriggerTouchTap&&e.props.onTriggerTouchTap(e.state.popupVisible),e.props.onPopupClosed&&e.props.onPopupClosed()})}},{key:"triggerHandler",value:function(e,t,a,n,s){if(!t)return!0;for(;e;){if(e==a)return n;if(e==t)return!0;e=e.parentNode}return!s&&n}},{key:"filterData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.filter,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.data;if(!e)return t;var a=this.props,n=a.displayField,s=function(t){return t.filter(function(t){return"object"===(void 0===t?"undefined":c()(t))&&t[n]?t[n].toString().toUpperCase().includes(e.toUpperCase()):t.toString().toUpperCase().includes(e.toUpperCase())})};if(a.isGrouped)for(var l=i()(t),o=0,r=l.length;o<r;o++){var p=l[o];p.children=s(p.children),p.children.length<1&&(l.splice(o,1),o--)}return s(t)}},{key:"popupRenderHandle",value:function(e){var t=H.a.isAbove(this.editabledSelectEl,this.triggerEl,Object(P.findDOMNode)(e));t!==this.state.isAbove&&this.setState({isAbove:t})}},{key:"changeHandle",value:function(e){var t=this,a=this.props,n=a.valueField,s=a.renderer,l=s?s(e):"object"==(void 0===e?"undefined":c()(e))?e[n]:e,o=this.props.autoClose,r={value:l,listValue:e};o&&(r.popupVisible=!1),this.setState(r,function(){var e=t.props.onChange;e&&e(l)})}},{key:"componentDidMount",value:function(){this.editabledSelectEl=this.refs.editabledSelect,this.triggerEl=Object(P.findDOMNode)(this.refs.trigger)}},{key:"componentWillReceiveProps",value:function(e){e.value!==this.props.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.popupClassName,n=e.style,s=e.popupStyle,l=e.name,r=e.placeholder,p=e.disabled,c=(e.useFilter,e.valueField),d=e.descriptionField,u=(e.noMatchedMsg,e.triggerTheme),h=e.isGrouped,f=e.onItemTouchTap,m=e.renderer,g=e.onMouseOver,v=e.onMouseOut,b=this.state,y=b.value,T=b.listValue,C=(b.filter,b.popupVisible),x=b.isAbove,w=F()("editable-select-trigger",x?"above":"blow",{activated:C,empty:!y}),P=F()("editable-select-popup",x?"above":"blow",o()({},a,a)),N=i()({width:this.triggerEl&&getComputedStyle(this.triggerEl).width},s),k=this.filterData();return E.a.createElement("div",{ref:"editabledSelect",className:"editable-select"+(t?" "+t:""),style:n},l?E.a.createElement("input",{type:"hidden",name:l,value:y}):null,E.a.createElement(S.a,{ref:"trigger",className:w,value:y,rightIconCls:"fas fa-angle-"+(x?"up":"down")+" editable-select-trigger-icon",placeholder:r,disabled:p,theme:u,onMouseOver:g,onMouseOut:v,onChange:this.onChangeValue,onFocus:this.showPopup}),E.a.createElement(M.a,{ref:"popup",className:P,style:N,visible:C,triggerEl:this.triggerEl,triggerHandler:this.triggerHandler,hasTriangle:!1,position:x?M.a.Position.TOP_LEFT:M.a.Position.BOTTOM_LEFT,onRender:this.popupRenderHandle,onRequestClose:this.closePopup},E.a.createElement(O.a,{className:"editable-select-list",isGrouped:h,data:k.length<1?[]:k,valueField:c,value:T,displayField:c,descriptionField:d,renderer:m,onItemTouchTap:f,onChange:this.changeHandle})))}}]),t}(C.Component),n.Theme=k.a,s);V.propTypes={className:w.a.string,popupClassName:w.a.string,style:w.a.object,popupStyle:w.a.object,name:w.a.string,value:w.a.any,renderer:w.a.func,placeholder:w.a.string,data:w.a.oneOfType([w.a.arrayOf(w.a.oneOfType([w.a.shape({className:w.a.string,style:w.a.object,theme:w.a.oneOf(D.a.enumerateValue(k.a)),value:w.a.oneOfType([w.a.string,w.a.number]),desc:w.a.oneOfType([w.a.string,w.a.number]),disabled:w.a.bool,isLoading:w.a.bool,disableTouchRipple:w.a.bool,iconCls:w.a.string,rightIconCls:w.a.string,renderer:w.a.func,onTouchTap:w.a.func}),w.a.string,w.a.number])),w.a.array]).isRequired,invalidMsg:w.a.string,disabled:w.a.bool,valueField:w.a.string,descriptionField:w.a.string,infoMsg:w.a.string,textFormat:w.a.func,autoClose:w.a.bool,useFilter:w.a.bool,noMatchedMsg:w.a.string,triggerTheme:w.a.oneOf(D.a.enumerateValue(k.a)),isGrouped:w.a.bool,onItemTouchTap:w.a.func,onChange:w.a.func,onMouseOver:w.a.func,onMouseOut:w.a.func},V.defaultProps={className:"",popupClassName:"",style:null,popupStyle:null,name:"",value:"",placeholder:"Please select ...",data:[],invalidMsg:"",disabled:!1,displayField:"text",descriptionField:"desc",infoMsg:"",autoClose:!0,useFilter:!1,noMatchedMsg:"",triggerTheme:k.a.DEFAULT,isGrouped:!1};var _=V;a.d(t,"a",function(){return _})}}]);