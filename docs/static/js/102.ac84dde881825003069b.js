(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{384:function(e,a,t){"use strict";var l=t(6),n=t.n(l),r=t(80),c=t.n(r),m=t(81),s=t.n(m),o=t(82),i=t.n(o),u=t(83),p=t.n(u),d=t(84),E=t.n(d),b=t(11),h=t.n(b),g=t(0),y=t.n(g),f=t(388),v=(t(385),function(e){function a(e){var t,l;return c()(this,a),(l=i()(this,p()(a).call(this,e))).columns=[{header:"Name",renderer:"name"},{header:"Type",renderer:"type"},{header:"Default",renderer:"default"},{header:"Description",renderer:"desc"}],l.generateData=(t=h()(h()(l)),l.generateData).bind(t),l}return E()(a,e),s()(a,[{key:"generateData",value:function(){var e=[];if(!this.props.data)return[];for(var a in this.props.data)e.push(n()({name:a},this.props.data[a]));return e}},{key:"render",value:function(){return y.a.createElement("div",{className:"prop-type-desc-table-wrapper"},y.a.createElement(f.a,{className:"prop-type-desc-table",columns:this.columns,data:this.generateData(),isPagging:!1}))}}]),a}(g.Component));v.defaultProps={data:null},a.a=v},385:function(e,a,t){var l=t(386);"string"==typeof l&&(l=[[e.i,l,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(150)(l,n);l.locals&&(e.exports=l.locals)},386:function(e,a,t){(e.exports=t(149)(!1)).push([e.i,".prop-type-desc-table-wrapper {\n  overflow-x: auto;\n  overflow-y: visible; }\n  .prop-type-desc-table-wrapper .prop-type-desc-table {\n    border: none; }\n",""])},493:function(e,a,t){"use strict";var l=t(6),n=t.n(l),r=t(80),c=t.n(r),m=t(81),s=t.n(m),o=t(82),i=t.n(o),u=t(83),p=t.n(u),d=t(84),E=t.n(d),b=t(11),h=t.n(b),g=t(20),y=t.n(g),f=t(0),v=t.n(f),w=t(370),N=t.n(w),x=t(381),I=t.n(x),P=t(405),S=t(391),L=function(e){function a(e){var t,l;c()(this,a);for(var n=arguments.length,r=new Array(n>1?n-1:0),m=1;m<n;m++)r[m-1]=arguments[m];return l=i()(this,(t=p()(a)).call.apply(t,[this,e].concat(r))),y()(h()(h()(l)),"scrollHandler",N()(function(){if(!(l.state.imageState>0)&&l.wrapperEl&&l.wrapperEl.getBoundingClientRect().top<window.innerHeight){var e,a=l.props.onImageLoadStart;if(a&&(e=a()),!1===e)return;l.setState({imageState:1},function(){var e=new Image;S.a.addEvent(e,"load",function(e){l.setState({imageState:2},function(){var a=l.props.onImageLoaded;a&&a(e)})}),e.src=l.props.src})}},250)),l.state={imageState:0},l}return E()(a,e),s()(a,[{key:"componentDidMount",value:function(){this.wrapperEl=this.refs.wrapper,S.a.addEvent(document,"scroll",this.scrollHandler)}},{key:"componentWillUnmount",value:function(){S.a.removeEvent(document,"scroll",this.scrollHandler)}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.style,l=e.src,r=e.alt,c=e.loadingWidth,m=e.loadingHeight,s=e.width,o=e.height,i=e.placeholder,u=this.state.imageState,p=I()("lazy-image",y()({},a,a)),d=n()({},t,{width:2===u?s:c,height:2===u?o:m}),E=I()("lazy-image-placeholder",{hidden:2===u});return v.a.createElement("div",{ref:"wrapper",className:p,style:d},v.a.createElement("img",{className:"lazy-image-img",src:2===u?l:"",alt:r,width:s,height:o}),v.a.createElement("div",{className:E},i?{placeholder:i}:v.a.createElement(P.a,{className:"lazy-image-loading"})))}}]),a}(f.Component);L.defaultProps={alt:"",loadingWidth:100,loadingHeight:100,placeholder:""};var T=L;t.d(a,"a",function(){return T})},794:function(e){e.exports={className:{type:"PropTypes.string",desc:"The CSS class name of the root element."},style:{type:"PropTypes.object",desc:"Override the styles of the root element."},src:{type:"PropTypes.string",desc:"Image src url."},alt:{type:"PropTypes.string",desc:"Image alt text.",default:""},loadingWidth:{type:"PropTypes.number",desc:"Loading width.",default:"100"},loadingHeight:{type:"PropTypes.number",desc:"Loading height.",default:"100"},width:{type:"PropTypes.number",desc:"Image width."},height:{type:"PropTypes.number",desc:"Image height."},placeholder:{type:"PropTypes.any",desc:"Image placeholder.",default:""},onImageLoadStart:{type:"PropTypes.func",desc:"Image load start callback."},onImageLoaded:{type:"PropTypes.func",desc:"Image load end callback."}}},894:function(e,a,t){"use strict";t.r(a);var l=t(80),n=t.n(l),r=t(81),c=t.n(r),m=t(82),s=t.n(m),o=t(83),i=t.n(o),u=t(84),p=t.n(u),d=t(0),E=t.n(d),b=t(390),h=t(389),g=t(493),y=t(384),f=t(794),v=function(e){function a(e){return n()(this,a),s()(this,i()(a).call(this,e))}return p()(a,e),c()(a,[{key:"render",value:function(){var e="https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true";return E.a.createElement("div",{className:"example lazy-image-examples"},E.a.createElement("h2",{className:"example-title"},"Lazy Image"),E.a.createElement("p",null,E.a.createElement("span",null,"Lazy Image"),"use for delayed loading of images."),E.a.createElement("h2",{className:"example-title"},"Examples"),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Basic"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:"https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true"}))))),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Specified Size"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:e,width:400}))))),E.a.createElement(b.a,null,E.a.createElement(h.a,{className:"example-header",title:"Prevent Load"}),E.a.createElement("div",{className:"widget-content"},E.a.createElement("div",{className:"example-content"},E.a.createElement("div",{className:"examples-wrapper"},E.a.createElement("p",null,"Long",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"...",E.a.createElement("br",null),"Article"),E.a.createElement(g.a,{src:e,onImageLoadStart:function(){return!1}}))))),E.a.createElement("h2",{className:"example-title"},"Properties"),E.a.createElement(y.a,{data:f}))}}]),a}(d.Component);a.default=v}}]);