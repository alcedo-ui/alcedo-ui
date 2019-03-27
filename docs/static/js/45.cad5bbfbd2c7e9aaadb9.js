(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{366:function(e,t,a){"use strict";var n=a(7),o=a.n(n),l=a(81),s=a.n(l),r=a(82),i=a.n(r),c=a(83),p=a.n(c),d=a(84),u=a.n(d),m=a(21),h=a.n(m),f=a(85),y=a.n(f),b=a(1),g=a.n(b),T=a(2),v=a.n(T),C=a(373),E=(a(367),function(e){function t(e){var a,n;return s()(this,t),(n=p()(this,u()(t).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],n.generateData=(a=h()(n),n.generateData).bind(a),n}return y()(t,e),i()(t,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var t in this.props.data)e.push(o()({name:t},this.props.data[t]));return e}},{key:"render",value:function(){return g.a.createElement("div",{className:"prop-type-desc-table-wrapper"},g.a.createElement(C.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),t}(b.Component));E.propTypes={data:v.a.object},E.defaultProps={data:null},t.a=E},367:function(e,t,a){var n=a(368);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,o);n.locals&&(e.exports=n.locals)},368:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},374:function(e,t,a){"use strict";var n=a(364),o=a.n(n),l=a(348),s=a.n(l),r=a(81),i=a.n(r),c=a(82),p=a.n(c),d=a(83),u=a.n(d),m=a(84),h=a.n(m),f=a(21),y=a.n(f),b=a(85),g=a.n(b),T=a(22),v=a.n(T),C=a(1),E=a.n(C),w=a(2),x=a.n(w),P=a(361),B=a.n(P),k=a(376),N=a(382),S=a(375),I=a(369),D=a(378),O=a(363),L=a(365),R=a(362),M=a(388),H=function(e){function t(e){var a,n;i()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return n=u()(this,(a=h()(t)).call.apply(a,[this,e].concat(l))),v()(y()(n),"getEl",function(){return n.refs.pop&&n.refs.pop.getEl()}),v()(y()(n),"okButtonClickHandler",function(){var e=n.props,t=e.visible,a=e.onOKButtonClick;t&&a&&a(function(){n.setState({visible:!1},function(){var e=n.props.onRequestClose;e&&e()})})}),v()(y()(n),"cancelButtonClickHandler",function(){var e=n.props,t=e.onCancelButtonClick,a=e.onRequestClose;t&&t(),n.setState({visible:!1},function(){a&&a()})}),v()(y()(n),"closeButtonClickHandler",function(){var e=n.props,t=e.onCloseButtonClick,a=e.onRequestClose;t&&t(),n.setState({visible:!1},function(){a&&a()})}),v()(y()(n),"renderHandler",function(){M.a.push(y()(n),{shouldLockBody:n.props.showModal});var e=n.props.onRender;e&&e.apply(void 0,arguments)}),v()(y()(n),"destroyHandler",function(){M.a.pop(y()(n));var e=n.props.onDestroy;e&&e.apply(void 0,arguments)}),n}return g()(t,e),p()(t,[{key:"componentWillUnmount",value:function(){M.a.pop(this)}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.className,l=t.modalClassName,r=t.position,i=t.disabled,c=t.showModal,p=t.title,d=t.buttons,u=t.isLoading,m=t.visible,h=t.okButtonVisible,f=t.okButtonText,y=t.okButtonIconCls,b=t.okButtonTheme,g=t.okButtonDisabled,T=t.okButtonIsLoading,w=t.cancelButtonVisible,x=t.cancelButtonText,P=t.cancelButtonIconCls,O=t.cancelButtonDisabled,L=t.cancelButtonIsLoading,R=t.cancelButtonTheme,M=t.closeButtonVisible,H=t.closeIconCls,F=(t.isBlurClose,t.isEscClose,t.onRequestClose,t.onOKButtonClick,t.onCloseButtonClick,t.onCancelButtonClick,s()(t,["children","className","modalClassName","position","disabled","showModal","title","buttons","isLoading","visible","okButtonVisible","okButtonText","okButtonIconCls","okButtonTheme","okButtonDisabled","okButtonIsLoading","cancelButtonVisible","cancelButtonText","cancelButtonIconCls","cancelButtonDisabled","cancelButtonIsLoading","cancelButtonTheme","closeButtonVisible","closeIconCls","isBlurClose","isEscClose","onRequestClose","onOKButtonClick","onCloseButtonClick","onCancelButtonClick"])),V=B()("dialog",v()({},n,n));return E.a.createElement(k.a,o()({},F,{ref:"pop",className:V,position:r,visible:m,container:E.a.createElement(N.a,{depth:6}),showModal:c,modalClassName:l,onRender:this.renderHandler,onDestroy:this.destroyHandler}),function(t){return E.a.createElement(C.Fragment,null,E.a.createElement("div",{className:"dialog-title"},p,M?E.a.createElement(D.a,{className:"dialog-title-close-button",iconCls:H,disabled:i,onClick:e.closeButtonClickHandler}):null),E.a.createElement("div",{className:"dialog-content"},"function"==typeof a?a(t&&t.querySelector(".dialog-content"),t):a),E.a.createElement("div",{className:"dialog-buttons"},d?C.Children.map(d,function(e){return Object(C.cloneElement)(e,{isLoading:u,disabled:i})}):null,!d&&h?E.a.createElement(I.a,{className:"ok-button",value:f,iconCls:y,theme:b,disabled:g,isLoading:u||T,disableTouchRipple:!0,onClick:e.okButtonClickHandler}):null,!d&&w?E.a.createElement(S.a,{className:"cancel-button",value:x,iconCls:P,theme:R,disabled:O,isLoading:u||L,disableTouchRipple:!0,onClick:e.cancelButtonClickHandler}):null))})}}]),t}(C.Component);v()(H,"ButtonTheme",O.a),v()(H,"Position",L.a),H.propTypes={className:x.a.string,modalClassName:x.a.string,style:x.a.object,parentEl:x.a.object,position:x.a.oneOf(R.a.enumerateValue(L.a)),disabled:x.a.bool,visible:x.a.bool,showModal:x.a.bool,title:x.a.any,isBlurClose:x.a.bool,isLoading:x.a.bool,okButtonVisible:x.a.bool,okButtonText:x.a.string,okButtonIconCls:x.a.string,okButtonDisabled:x.a.bool,okButtonIsLoading:x.a.bool,okButtonTheme:x.a.oneOf(R.a.enumerateValue(O.a)),cancelButtonVisible:x.a.bool,cancelButtonText:x.a.string,cancelButtonIconCls:x.a.string,cancelButtonDisabled:x.a.bool,cancelButtonIsLoading:x.a.bool,cancelButtonTheme:x.a.oneOf(R.a.enumerateValue(O.a)),closeButtonVisible:x.a.bool,closeIconCls:x.a.string,isEscClose:x.a.bool,buttons:x.a.any,onRender:x.a.func,onRequestClose:x.a.func,onOKButtonClick:x.a.func,onCancelButtonClick:x.a.func,onCloseButtonClick:x.a.func},H.defaultProps={parentEl:document.body,position:L.a.CENTER,disabled:!1,visible:!1,showModal:!0,isBlurClose:!1,isLoading:!1,okButtonVisible:!0,okButtonText:"OK",okButtonDisabled:!1,okButtonIsLoading:!1,okButtonTheme:O.a.SUCCESS,cancelButtonVisible:!0,cancelButtonText:"Cancel",cancelButtonDisabled:!1,cancelButtonIsLoading:!1,cancelButtonTheme:O.a.DEFAULT,closeButtonVisible:!0,closeIconCls:"fas fa-times",isEscClose:!0};var F=H;a.d(t,"a",function(){return F})},375:function(e,t,a){"use strict";var n=a(364),o=a.n(n),l=a(348),s=a.n(l),r=a(81),i=a.n(r),c=a(82),p=a.n(c),d=a(83),u=a.n(d),m=a(84),h=a.n(m),f=a(21),y=a.n(f),b=a(85),g=a.n(b),T=a(22),v=a.n(T),C=a(1),E=a.n(C),w=a(2),x=a.n(w),P=a(361),B=a.n(P),k=a(384),N=a(377),S=a(363),I=a(365),D=a(362),O=function(e){function t(e){var a,n;i()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return n=u()(this,(a=h()(t)).call.apply(a,[this,e].concat(l))),v()(y()(n),"startRipple",function(e,t){n.refs.baseButton&&n.refs.baseButton.startRipple(e,t)}),v()(y()(n),"endRipple",function(){n.refs.baseButton&&n.refs.baseButton.endRipple()}),v()(y()(n),"triggerRipple",function(e,t){n.refs.baseButton&&n.refs.baseButton.triggerRipple(e,t)}),n}return g()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=s()(e,["children","className"]),l=B()("flat-button",v()({},a,a));return E.a.createElement(k.a,o()({},n,{ref:"baseButton",className:l}),t)}}]),t}(C.Component);v()(O,"Theme",S.a),v()(O,"TipPosition",I.a),O.propTypes={className:x.a.string,style:x.a.object,theme:x.a.oneOf(D.a.enumerateValue(S.a)),isRounded:x.a.bool,isCircular:x.a.bool,title:x.a.string,value:x.a.any,type:x.a.string,disabled:x.a.bool,isLoading:x.a.bool,disableTouchRipple:x.a.bool,iconCls:x.a.string,rightIconCls:x.a.string,rippleDisplayCenter:x.a.bool,tip:x.a.string,tipPosition:x.a.oneOf(D.a.enumerateValue(N.a.Position)),renderer:x.a.func,onClick:x.a.func},O.defaultProps={theme:S.a.DEFAULT,isRounded:!1,isCircular:!1,value:"",disabled:!1,type:"button",isLoading:!1,disableTouchRipple:!1,rippleDisplayCenter:!1,tipPosition:N.a.Position.BOTTOM};var L=O;a.d(t,"a",function(){return L})},376:function(e,t,a){"use strict";var n=a(364),o=a.n(n),l=a(348),s=a.n(l),r=a(81),i=a.n(r),c=a(82),p=a.n(c),d=a(83),u=a.n(d),m=a(84),h=a.n(m),f=a(21),y=a.n(f),b=a(85),g=a.n(b),T=a(22),v=a.n(T),C=a(1),E=a.n(C),w=a(2),x=a.n(w),P=a(361),B=a.n(P),k=a(390),N=a(363),S=a(365),I=a(372),D=a(362);a(380);function O(e){return(window.innerWidth-e.offsetWidth)/2}function L(e){return(window.innerHeight-e.offsetHeight)/2}function R(e,t,a){if(t){var n={};switch(a){case S.a.TOP_LEFT:n.left=0,n.top=0;break;case S.a.TOP:n.left=O(t),n.top=0;break;case S.a.TOP_RIGHT:n.right=0,n.top=0;break;case S.a.BOTTOM_LEFT:n.left=0,n.bottom=0;break;case S.a.BOTTOM:n.left=O(t),n.bottom=0;break;case S.a.BOTTOM_RIGHT:n.right=0,n.bottom=0;break;case S.a.LEFT_TOP:n.left=0,n.top=0;break;case S.a.LEFT:n.left=0,n.top=L(t);break;case S.a.LEFT_BOTTOM:n.left=0,n.bottom=0;break;case S.a.RIGHT_TOP:n.right=0,n.top=0;break;case S.a.RIGHT:n.right=0,n.top=L(t);break;case S.a.RIGHT_BOTTOM:n.right=0,n.bottom=0;break;case S.a.CENTER:n.left=O(t),n.top=L(t)}return n}}var M={getStyle:R,setStyle:function(e,t,a){var n=R(0,t,a);if(n)for(var o in t.style.left=t.style.right=t.style.top=t.style.bottom=null,n)t.style[o]=n[o]+"px"}},H=function(e){function t(e){var a,n;i()(this,t);for(var o=arguments.length,l=new Array(o>1?o-1:0),s=1;s<o;s++)l[s-1]=arguments[s];return n=u()(this,(a=h()(t)).call.apply(a,[this,e].concat(l))),v()(y()(n),"getEl",function(){return n.refs.pop&&n.refs.pop.getEl()}),v()(y()(n),"resetPosition",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.refs.pop.getEl(),t=n.props,a=t.parentEl,o=t.position;M.setStyle(a,e,o)}),n}return g()(t,e),p()(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.children,l=a.container,r=a.className,i=a.theme,c=a.position,p=a.isAnimated,d=(a.isEscClose,a.isBlurClose,a.shouldPreventContainerScroll,s()(a,["children","container","className","theme","position","isAnimated","isEscClose","isBlurClose","shouldPreventContainerScroll"])),u=B()("position-pop",(e={},v()(e,"theme-".concat(i),i),v()(e,"position-pop-".concat(c),c),v()(e,"position-pop-animated",p),v()(e,r,r),e));return E.a.createElement(k.a,o()({},d,{ref:"pop",className:u,container:l,isAnimated:p,onWheel:function(e){return I.a.wheelHandler(e,t.props)},resetPosition:this.resetPosition}),function(e){return"function"==typeof n?n(e):n})}}]),t}(C.Component);v()(H,"Position",S.a),v()(H,"Theme",N.a),H.propTypes={className:x.a.string,style:x.a.object,visible:x.a.bool,theme:x.a.oneOf(D.a.enumerateValue(N.a)),parentEl:x.a.object,position:x.a.oneOf(D.a.enumerateValue(S.a)),isAnimated:x.a.bool,depth:x.a.number,isBlurClose:x.a.bool,isEscClose:x.a.bool,shouldPreventContainerScroll:x.a.bool,container:x.a.node,showModal:x.a.bool,modalClassName:x.a.string,onRender:x.a.func,onRendered:x.a.func,onDestroy:x.a.func,onDestroyed:x.a.func,onWheel:x.a.func},H.defaultProps={parentEl:document.body,depth:6,visible:!1,theme:N.a.DEFAULT,position:S.a.CENTER,isAnimated:!0,isBlurClose:!0,isEscClose:!0,shouldPreventContainerScroll:!0,container:E.a.createElement("div",null),showModal:!1};var F=H;a.d(t,"a",function(){return F})},622:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},triggerClassName:{type:"PropTypes.string",desc:"The CSS class name of the trigger element."},popupClassName:{type:"PropTypes.string",desc:"The class name of the popup element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},popupStyle:{type:"PropTypes.object",desc:"Override the styles of the popup element."},theme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},popupTheme:{type:"PropTypes.oneOf",desc:"The theme.",default:"Theme.DEFAULT"},position:{type:"PropTypes.oneOf"},name:{type:"PropTypes.string",desc:"The name of the dropDownSelect."},value:{type:"PropTypes.any",desc:"The value of the dropDownSelect."},placeholder:{type:"PropTypes.string",desc:"The placeholder of the dropDownSelect.",default:"Please select ..."},title:{type:"PropTypes.string"},tip:{type:"PropTypes.string"},tipPosition:{type:"PropTypes.oneOf",default:"Position.BOTTOM"},triggerRenderer:{type:"PropTypes.func"},rightIconCls:{type:"PropTypes.string",default:"fas fa-angle-down"},data:{type:"PropTypes.oneOf",desc:"The options data.",default:"[]"},invalidMsg:{type:"PropTypes.string",desc:"The invalid message of dropDownSelect."},disabled:{type:"PropTypes.bool",desc:"If true,the dropDownSelect will be disabled.",default:"false"},isLoading:{type:"PropTypes.bool",desc:"If true,the dropDownSelect will be loading.",default:"false"},itemDisabled:{type:"PropTypes.bool",desc:"List item disabled callback.",default:"false"},selectMode:{type:"PropTypes.oneOf",desc:"The select mode of listItem.Can be normal,checkbox.",default:"SelectMode.SINGLE_SELECT"},valueField:{type:"PropTypes.string",desc:'The value field name in data. (default: "value")',default:"value"},displayField:{type:"PropTypes.string",desc:'The display field name in data. (default: "text")',default:"text"},descriptionField:{type:"PropTypes.string",desc:'The description field name in data. (default: "desc")',default:"desc"},infoMsg:{type:"PropTypes.string",desc:"The message of the dropDownSelect."},textFormat:{type:"PropTypes.func",desc:"Use this function to format the options's text."},autoClose:{type:"PropTypes.bool",desc:"If true,the drop-down box automatically closed after selection.",default:"true"},useFilter:{type:"PropTypes.bool",desc:"If true,the drop-down box will have search input.",default:"false"},isGrouped:{type:"PropTypes.bool",desc:"If true,the dropDownSelect will be grouped.",default:"false"},filterIconCls:{type:"PropTypes.string",default:"fas fa-search"},useSelectAll:{type:"PropTypes.bool",default:"false"},selectAllText:{type:"PropTypes.string",default:"Select All"},isHiddenInputFilter:{type:"PropTypes.bool",default:"false"},clearHiddenInputFilterInterval:{type:"PropTypes.number",default:"1000"},noMatchedMsg:{type:"PropTypes.string",desc:"The message of no matching option."},shouldPreventContainerScroll:{type:"PropTypes.bool",default:"true"},popupChildren:{type:"PropTypes.any"},useDynamicRenderList:{type:"PropTypes.bool",default:"false"},listHeight:{type:"PropTypes.number"},itemHeight:{type:"PropTypes.number"},scrollBuffer:{type:"PropTypes.number"},radioUncheckedIconCls:{type:"PropTypes.string"},radioCheckedIconCls:{type:"PropTypes.string"},checkboxUncheckedIconCls:{type:"PropTypes.string"},checkboxCheckedIconCls:{type:"PropTypes.string"},checkboxIndeterminateIconCls:{type:"PropTypes.string"},resetPopPositionWait:{type:"PropTypes.number",default:"250"},autoPopupWidth:{type:"PropTypes.bool",default:"true"},renderer:{type:"PropTypes.func"},filterCallback:{type:"PropTypes.func"},onItemClick:{type:"PropTypes.func",desc:"Callback function fired when the button is touch-tapped."},onOpenPopup:{type:"PropTypes.func",desc:"Callback function fired when the popup is open."},onClosePopup:{type:"PropTypes.func",desc:"Callback function fired when the popup is close."},onChange:{type:"PropTypes.func",desc:"Callback function fired when a menu item is selected."},onWheel:{type:"PropTypes.func"},onFocus:{type:"PropTypes.func"},onBlur:{type:"PropTypes.func"},onMouseOver:{type:"PropTypes.func"},onMouseOut:{type:"PropTypes.func"}}},623:function(e,t,a){var n=a(624);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(147)(n,o);n.locals&&(e.exports=n.locals)},624:function(e,t,a){(e.exports=a(146)(!1)).push([e.i,'.dropdown-select-examples .field-group {\n  float: none; }\n  .dropdown-select-examples .field-group::before, .dropdown-select-examples .field-group::after {\n    display: table;\n    content: ""; }\n  .dropdown-select-examples .field-group::after {\n    clear: both; }\n  .dropdown-select-examples .field-group .dropdown-select-label,\n  .dropdown-select-examples .field-group .dropdown-select {\n    float: left; }\n  .dropdown-select-examples .field-group .dropdown-select-label {\n    font-size: 14px;\n    line-height: 50px;\n    margin-right: 20px;\n    width: 60px; }\n\n.example-content .dialog-button {\n  width: 120px; }\n\n.popover-dialog-content-scroller {\n  width: 1000px;\n  height: 1000px; }\n',""])},846:function(e,t,a){"use strict";a.r(t);var n=a(148),o=a.n(n),l=a(81),s=a.n(l),r=a(82),i=a.n(r),c=a(83),p=a.n(c),d=a(84),u=a.n(d),m=a(21),h=a.n(m),f=a(85),y=a.n(f),b=a(22),g=a.n(b),T=a(1),v=a.n(T),C=a(436),E=a(371),w=a(370),x=a(363),P=a(369),B=a(374),k=a(366),N=a(622),S=(a(623),function(e){function t(e){var a;return s()(this,t),a=p()(this,u()(t).call(this,e)),g()(h()(a),"show",function(e){var t=a.state.DropdownSelectVisible;t[e]=!0,a.setState({DropdownSelectVisible:t})}),g()(h()(a),"hide",function(e){var t=a.state.DropdownSelectVisible;t[e]=!1,a.setState({DropdownSelectVisible:t})}),g()(h()(a),"onChange",function(e){console.log(e)}),a.data=["test0",{text:"test1",value:1,children:[{text:"test111",value:11}]},{text:"test2",value:2,desc:"Here is test2.",onClick:function(){console.log("test2 selected!")}},"test3","test4","test5",{text:"test6",value:6,desc:"Here is test6.",onClick:function(){console.log("test6 selected!")}},"test7","test8","test9"],a.groupData=[{name:"test0",children:[{text:"test001",value:1},{text:"test002",value:2},{text:"test003",value:3},{text:"test004",value:4}]},{name:"test1",children:[{text:"test111",value:11}]},{name:"test2",children:[{text:"test221",value:221},{text:"test222",value:222},{text:"test223",value:223},{text:"test224",value:224}]},{name:"test3",children:[{text:"test331",value:331},{text:"test332",value:332},{text:"test333",value:333},{text:"test334",value:334}]}],a.state={DropdownSelectVisible:{}},a}return y()(t,e),i()(t,[{key:"render",value:function(){var e=this,t=this.state.DropdownSelectVisible,a=["a000","booo",{text:"c000",value:2,desc:"Here is test2."},"dtest3","etest4","ftest5",{text:"test6",value:6},"hhhh","yywe","people"];return v.a.createElement("div",{className:"example drop-down-select-examples"},v.a.createElement("h2",{className:"example-title"},"Dropdown Select"),v.a.createElement("p",null,v.a.createElement("span",null,"Dropdown Select"),"use to store operating elements. Click on the contact and a drop-down menu will appear. You can select from the list and execute the appropriate command."),v.a.createElement("h2",{className:"example-title"},"Examples"),v.a.createElement(E.a,null,v.a.createElement(w.a,{className:"example-header",title:"Basic"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,v.a.createElement("code",null,"Dropdown Select")," simple example."),v.a.createElement("div",{className:"field-group"},v.a.createElement(C.a,{data:this.data,renderer:function(e){return e&&"object"===o()(e)?"".concat(e.text," (").concat(e.value,")"):"".concat(e," (").concat(e,")")},onChange:this.onChange})))))),v.a.createElement(E.a,null,v.a.createElement(w.a,{className:"example-header",title:"Group"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,v.a.createElement("code",null,"Dropdown Select")," group example."),v.a.createElement("div",{className:"field-group"},v.a.createElement(C.a,{data:this.groupData,useFilter:!0,isGrouped:!0,displayField:"text",valueField:"value",onChange:this.onChange})))))),v.a.createElement(E.a,null,v.a.createElement(w.a,{className:"example-header",title:"Self defined theme"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"autoClose")," property to false,the select list will not close when choose one item."),v.a.createElement("div",{className:"field-group"},v.a.createElement(C.a,{theme:x.a.PRIMARY,popupTheme:x.a.PRIMARY,data:this.data,onChange:this.onChange})))))),v.a.createElement(E.a,null,v.a.createElement(w.a,{className:"example-header",title:"With Filter"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("div",{className:"field-group"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"filter")," property to true,the DropdownSelect will have user search input."),v.a.createElement(C.a,{data:this.data,useFilter:!0,useSelectAll:!0,useDynamicRenderList:!0,selectAllText:"All Example Items",selectMode:C.a.SelectMode.MULTI_SELECT,autoClose:!1,checkboxUncheckedIconCls:"far fa-window-close",checkboxCheckedIconCls:"fas fa-window-close",onChange:this.onChange})))))),v.a.createElement(E.a,null,v.a.createElement(w.a,{className:"example-header",title:"With multi"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("div",{className:"field-group"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"mod")," property to",v.a.createElement("code",null,"DropdownSelect.SelectMode.MULTI_SELECT"),", the DropdownSelect can be Multiselect."),v.a.createElement(C.a,{data:this.data,autoClose:!1,selectMode:C.a.SelectMode.MULTI_SELECT,onChange:this.onChange})))))),v.a.createElement(E.a,null,v.a.createElement(w.a,{className:"example-header",title:"Self defined theme"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"autoClose")," property to false,the select list will not close when choose one item."),v.a.createElement("div",{className:"field-group"},v.a.createElement(C.a,{data:a,isHiddenInputFilter:!0,tip:"DropdownSelect Example",onChange:this.onChange})))))),v.a.createElement(E.a,null,v.a.createElement(w.a,{className:"example-header",title:"In Dialog"}),v.a.createElement("div",{className:"widget-content"},v.a.createElement("div",{className:"example-content"},v.a.createElement("div",{className:"examples-wrapper"},v.a.createElement("p",null,"Set the ",v.a.createElement("code",null,"autoClose")," property to false,the select list will not close when choose one item."),v.a.createElement(P.a,{className:"trigger-button dialog-button",value:"Show Dialog",onClick:function(){return e.show(1)}}),v.a.createElement(B.a,{visible:t[1],onRequestClose:function(){return e.hide(1)}},function(t){return v.a.createElement("div",{className:"popover-dialog-content-scroller"},v.a.createElement("div",{className:"field-group"},v.a.createElement(C.a,{data:a,isHiddenInputFilter:!0,parentEl:t,tip:"DropdownSelect Example",onChange:e.onChange})))}))))),v.a.createElement("h2",{className:"example-title"},"Properties"),v.a.createElement(k.a,{data:N}))}}]),t}(T.Component));t.default=S}}]);