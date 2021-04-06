(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[6891],{59141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(23645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}\n",""]);const l=n},27037:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(23645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,'.transfer-examples .field-group{margin:10px auto;float:none}.transfer-examples .field-group::before,.transfer-examples .field-group::after{display:table;content:""}.transfer-examples .field-group::after{clear:both}.transfer-examples .field-group .transfer-label,.transfer-examples .field-group .text-field{float:left}.transfer-examples .field-group .transfer-label{font-size:14px;line-height:50px;margin-right:20px;width:60px}\n',""]);const l=n},1116:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var a=r(6610),n=r(5991),l=r(63349),s=r(10379),c=r(46070),o=r(77608),i=r(96156),f=r(37699),p=r(45697),u=r.n(p),d=r(82996),h=r(93379),m=r.n(h),g=r(59141);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}m()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;var Z=function(e){(0,s.Z)(u,e);var t,r,p=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(r){var n=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function u(e){var t;return(0,a.Z)(this,u),t=p.call(this,e),(0,i.Z)((0,l.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(y({name:r},t.props.data[r]));return e})),t}return(0,n.Z)(u,[{key:"render",value:function(){return f.createElement("div",{className:"prop-type-desc-table-wrapper"},f.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),u}(f.Component);Z.propTypes={data:u().object};const b=Z},51647:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var a=r(6610),n=r(5991),l=r(10379),s=r(46070),c=r(77608),o=r(37699),i=r(24471),f=r(50704),p=r(4184),u=r(1116);const d=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"leftData":{"type":"PropTypes.array","desc":"The data of left select field.","default":"[]"},"rightData":{"type":"PropTypes.array","desc":"The data of left select field.","default":"[]"},"leftSelected":{"type":"PropTypes.array","desc":"The left-selected data items.","default":"[]"},"rightSelected":{"type":"PropTypes.array","desc":"The left-selected data items.","default":"[]"},"onChange":{"type":"PropTypes.func","desc":"Callback function fired when select item changed."}}');var h=r(93379),m=r.n(h),g=r(27037);m()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const v=function(e){(0,l.Z)(m,e);var t,r,h=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.Z)(t);if(r){var n=(0,c.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){return(0,a.Z)(this,m),h.call(this,e)}return(0,n.Z)(m,[{key:"render",value:function(){for(var e=[],t=[],r=0;r<30;r++){var a={text:"item"+(r+1),id:r};r%2==0&&(a.disabled=!0),2*Math.random()>1?e.push(a):t.push(a)}return o.createElement("div",{className:"example transfer-examples"},o.createElement("h2",{className:"example-title"},"Transfer"),o.createElement("p",null,o.createElement("span",null,"Transfer")," double column shuttle selection box."),o.createElement("h2",{className:"example-title"},"Examples"),o.createElement(i.Z,null,o.createElement(f.Z,{className:"example-header",title:"Basic"}),o.createElement("div",{className:"widget-content"},o.createElement("div",{className:"example-content"},o.createElement("div",{className:"examples-wrapper"},o.createElement("p",null,o.createElement("code",null,"Transfer")," simple example."),o.createElement("div",{className:"field-group"},o.createElement(p.Z,{leftData:e,rightData:t})))))),o.createElement("h2",{className:"example-title"},"Properties"),o.createElement(u.Z,{data:d}))}}]),m}(o.Component)},4184:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var a=r(6610),n=r(5991),l=r(63349),s=r(10379),c=r(46070),o=r(77608),i=r(96156),f=r(37699),p=r(45697),u=r.n(p),d=r(41844),h=r.n(d),m=r(22944),g=r(90484),v=r(50361),y=r.n(v),Z=r(11669),b=r(45580);var S=function(e){(0,s.Z)(u,e);var t,r,p=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(r){var n=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function u(e){var t;(0,a.Z)(this,u);for(var r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];return t=p.call.apply(p,[this,e].concat(n)),(0,i.Z)((0,l.Z)(t),"select",(function(e){if(e&&!e.disabled){for(var r=y()(t.props.value),a=t.state.selectAll,n=!1,l=0;l<r.length;l++)if(r[l].id===e.id){n=!0;break}if(n){var s=r.findIndex((function(t){return t.id==e.id}));r.splice(s,1),a=!1}else r.push(e),r.length==t.props.data.length&&(a=!0);t.setState({selectAll:a},(function(){var e=t.props.onChange;e&&e(r)}))}})),(0,i.Z)((0,l.Z)(t),"handleSelectAll",(function(){for(var e=t.state,r=e.selectAll,a=e.filter,n=t.props.data,l=t.getFilterList(n,a),s=[],c=0;c<l.length;c++)l[c].disabled||s.push(l[c]);var o=r?[]:s;t.setState({selectAll:!r},(function(){t.props.onChange&&t.props.onChange(o)}))})),(0,i.Z)((0,l.Z)(t),"handleFilterChange",(function(e){t.setState({filter:e,selectAll:!1},(function(){t.props.onChange&&t.props.onChange([])}))})),(0,i.Z)((0,l.Z)(t),"getItemValue",(function(e){for(var r=t.props.value,a=!1,n=0;n<r.length;n++){if(r[n].id===e){a=!0;break}a=!1}return a})),(0,i.Z)((0,l.Z)(t),"getFilterList",(function(e,t){return e.filter((function(e){return"object"==(0,g.Z)(e)?-1!=e.text.toUpperCase().indexOf(t.toUpperCase()):-1!=e.toUpperCase().indexOf(t.toUpperCase())}))})),t.state={filter:""},t}return(0,n.Z)(u,[{key:"render",value:function(){var e=this,t=this.props,r=t.className,a=t.listStyle,n=t.data,l=t.value,s=this.state,c=s.filter,o=s.selectAll;return this.filterList=this.getFilterList(n,c),f.createElement("div",{className:h()("transfer-list",(0,i.Z)({},r,r)),style:a},f.createElement("div",{className:"transfer-header"},f.createElement(b.Z,{label:l&&l.length>0?l.length+"/"+this.filterList.length+" items":this.filterList.length+" items",checked:o,onChange:this.handleSelectAll})),f.createElement(Z.Z,{className:"search",rightIconCls:"fas fa-search",onChange:this.handleFilterChange,placeholder:"Search here",value:c}),f.createElement("div",{className:"options"},this.filterList&&this.filterList.map((function(t){return f.createElement("div",{key:t.text,className:"option ".concat(t.disabled?"disabled":"")},f.createElement(b.Z,{label:t.text,checked:e.getItemValue(t.id),disabled:!!t.disabled&&t.disabled,onChange:function(){return e.select(t)}}))}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return!(e&&t&&t.prevProps)||e.data&&t.prevProps.data&&e.data.length===t.prevProps.data.length?{prevProps:e}:{prevProps:e,selectAll:!1}}}]),u}(f.Component);S.propTypes={className:u().string,listStyle:u().object,data:u().array,value:u().array,onChange:u().func};const x=S;var C=function(e){(0,s.Z)(u,e);var t,r,p=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,o.Z)(t);if(r){var n=(0,o.Z)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return(0,c.Z)(this,e)});function u(e){var t;(0,a.Z)(this,u);for(var r=arguments.length,n=new Array(r>1?r-1:0),s=1;s<r;s++)n[s-1]=arguments[s];return t=p.call.apply(p,[this,e].concat(n)),(0,i.Z)((0,l.Z)(t),"handleLeftSelect",(function(e){t.setState({leftSelected:e})})),(0,i.Z)((0,l.Z)(t),"handleRightSelect",(function(e){t.setState({rightSelected:e})})),(0,i.Z)((0,l.Z)(t),"handleMoveToRight",(function(){for(var e=t.state,r=e.leftSelected,a=e.leftData,n=e.rightData,l=[],s=0;s<r.length;s++)n.push(r[s]);for(var c=0;c<a.length;c++){for(var o=!1,i=0;i<r.length;i++)if(a[c].id===r[i].id){o=!0;break}o||l.push(a[c])}t.setState({leftSelected:[],leftData:l,rightData:n},(function(){t.props.onChange&&t.props.onChange()}))})),(0,i.Z)((0,l.Z)(t),"handleMoveToLeft",(function(){for(var e=t.state,r=e.rightSelected,a=e.leftData,n=e.rightData,l=[],s=0;s<r.length;s++)a.push(r[s]);for(var c=0;c<n.length;c++){for(var o=!1,i=0;i<r.length;i++)if(n[c].id===r[i].id){o=!0;break}o||l.push(n[c])}t.setState({rightSelected:[],leftData:a,rightData:l},(function(){t.props.onChange&&t.props.onChange()}))})),t.state={leftData:[],rightData:[],leftSelected:[],rightSelected:[]},t}return(0,n.Z)(u,[{key:"componentDidMount",value:function(){var e=this.props,t=e.leftData,r=e.rightData,a=e.leftSelected,n=e.rightSelected;this.setState({leftData:t,rightData:r,leftSelected:a,rightSelected:n})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,a=this.state,n=a.leftData,l=a.rightData,s=a.leftSelected,c=a.rightSelected;return f.createElement("div",{className:h()("transfer",(0,i.Z)({},t,t)),style:r},f.createElement(x,{className:"fl",data:n,value:s,onChange:this.handleLeftSelect}),f.createElement("div",{className:"transfer-operation fl"},f.createElement("div",null,f.createElement(m.Z,{className:"action-button",iconCls:"fas fa-angle-right",disabled:s&&s.length<1,onClick:this.handleMoveToRight})),f.createElement("div",null,f.createElement(m.Z,{className:"action-button",iconCls:"fas fa-angle-left",disabled:c&&c.length<1,onClick:this.handleMoveToLeft}))),f.createElement(x,{className:"fl",data:l,value:c,onChange:this.handleRightSelect}))}}]),u}(f.Component);C.propTypes={className:u().string,style:u().object,leftData:u().array,rightData:u().array,leftSelected:u().array,rightSelected:u().array,onChange:u().func},C.defaultProps={leftData:[],rightData:[],leftSelected:[],rightSelected:[]};const E=C}}]);