"use strict";(self.webpackChunkalcedo_ui=self.webpackChunkalcedo_ui||[]).push([[5916],{59141:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(23645),l=r.n(n)()((function(e){return e[1]}));l.push([e.id,".prop-type-desc-table-wrapper{overflow-x:auto;overflow-y:visible}.prop-type-desc-table-wrapper .prop-type-desc-table{border:none}",""]);const a=l},1116:(e,t,r)=>{r.d(t,{Z:()=>D});var n=r(15671),l=r(43144),a=r(97326),c=r(60136),o=r(82963),s=r(61120),u=r(4942),i=r(37699),p=r(45697),m=r.n(p),d=r(82996),f=r(93379),b=r.n(f),h=r(7795),E=r.n(h),y=r(90569),g=r.n(y),v=r(3565),Z=r.n(v),w=r(19216),O=r.n(w),P=r(44589),N=r.n(P),I=r(59141),j={};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}j.styleTagTransform=N(),j.setAttributes=Z(),j.insert=g().bind(null,"head"),j.domAPI=E(),j.insertStyleElement=O(),b()(I.Z,j),I.Z&&I.Z.locals&&I.Z.locals;var x=function(e){(0,c.Z)(m,e);var t,r,p=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var l=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function m(e){var t;return(0,n.Z)(this,m),t=p.call(this,e),(0,u.Z)((0,a.Z)(t),"generateData",(function(){var e=[];if(!t.props.data)return[];for(var r in t.props.data)e.push(S({name:r},t.props.data[r]));return e})),t}return(0,l.Z)(m,[{key:"render",value:function(){return i.createElement("div",{className:"prop-type-desc-table-wrapper"},i.createElement(d.Z,{className:"prop-type-desc-table",columns:[{headRenderer:"Name",bodyRenderer:function(e){return e.name}},{headRenderer:"Type",bodyRenderer:function(e){return e.type}},{headRenderer:"Default",bodyRenderer:function(e){return e.default}},{headRenderer:"Description",bodyRenderer:function(e){return e.desc}}],data:this.generateData(),isPaginated:!1}))}}]),m}(i.Component);x.propTypes={data:m().object};const D=x},3099:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(15671),l=r(43144),a=r(60136),c=r(82963),o=r(61120),s=r(37699),u=r(24471),i=r(50704),p=r(25694),m=r(1116);const d=JSON.parse('{"className":{"type":"PropTypes.string","desc":"The CSS class name of the root element."},"style":{"type":"PropTypes.object","desc":"Override the styles of the root element."},"src":{"type":"PropTypes.string","desc":"Image src url."},"alt":{"type":"PropTypes.string","desc":"Image alt text.","default":""},"loadingWidth":{"type":"PropTypes.number","desc":"Loading width.","default":"100"},"loadingHeight":{"type":"PropTypes.number","desc":"Loading height.","default":"100"},"width":{"type":"PropTypes.number","desc":"Image width."},"height":{"type":"PropTypes.number","desc":"Image height."},"placeholder":{"type":"PropTypes.any","desc":"Image placeholder.","default":""},"scrollEl":{"type":"PropTypes.object","default":"document"},"onImageLoadStart":{"type":"PropTypes.func","desc":"Image load start callback."},"onImageLoaded":{"type":"PropTypes.func","desc":"Image load end callback."}}');const f=function(e){(0,a.Z)(b,e);var t,r,f=(t=b,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,o.Z)(t);if(r){var l=(0,o.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,c.Z)(this,e)});function b(e){return(0,n.Z)(this,b),f.call(this,e)}return(0,l.Z)(b,[{key:"render",value:function(){var e="https://github.com/alcedo-ui/alcedo-ui/blob/master/examples/assets/images/intro-bg.jpg?raw=true";return s.createElement("div",{className:"example lazy-image-examples"},s.createElement("h2",{className:"example-title"},"Lazy Image"),s.createElement("p",null,s.createElement("span",null,"Lazy Image"),"use for delayed loading of images."),s.createElement("h2",{className:"example-title"},"Examples"),s.createElement(u.Z,null,s.createElement(i.Z,{className:"example-header",title:"Basic"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"Long",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"Article"),s.createElement(p.Z,{src:"https://github.com/alcedo-ui/alcedo-ui/blob/master/assets/alcedo-logo.png?raw=true"}))))),s.createElement(u.Z,null,s.createElement(i.Z,{className:"example-header",title:"Specified Size"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"Long",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"Article"),s.createElement(p.Z,{src:e,width:400}))))),s.createElement(u.Z,null,s.createElement(i.Z,{className:"example-header",title:"Prevent Load"}),s.createElement("div",{className:"widget-content"},s.createElement("div",{className:"example-content"},s.createElement("div",{className:"examples-wrapper"},s.createElement("p",null,"Long",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"...",s.createElement("br",null),"Article"),s.createElement(p.Z,{src:e,onImageLoadStart:function(){return!1}}))))),s.createElement("h2",{className:"example-title"},"Properties"),s.createElement(m.Z,{data:d}))}}]),b}(s.Component)},25694:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(15671),l=r(43144),a=r(97326),c=r(60136),o=r(82963),s=r(61120),u=r(4942),i=r(37699),p=r(45697),m=r.n(p),d=r(23279),f=r.n(d),b=r(41844),h=r.n(b),E=r(65059);const y={PENDING:0,LOADING:1,FINISH:2};var g=r(72);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(e){(0,c.Z)(m,e);var t,r,p=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,s.Z)(t);if(r){var l=(0,s.Z)(this).constructor;e=Reflect.construct(n,arguments,l)}else e=n.apply(this,arguments);return(0,o.Z)(this,e)});function m(e){var t;(0,n.Z)(this,m);for(var r=arguments.length,l=new Array(r>1?r-1:0),c=1;c<r;c++)l[c-1]=arguments[c];return t=p.call.apply(p,[this,e].concat(l)),(0,u.Z)((0,a.Z)(t),"handleScroll",f()((function(){if(!(t.state.status>y.PENDING||!t.wrapperEl||t.wrapperEl.getBoundingClientRect().top>window.innerHeight)){var e,r=t.props.onImageLoadStart;r&&(e=r()),!1!==e&&t.setState({status:y.LOADING},(function(){var e=new Image;g.Z.addEvent(e,"load",(function(e){t.setState({status:y.FINISH},(function(){var r=t.props.onImageLoaded;r&&r(e)}))})),e.src=t.props.src}))}}),250)),t.wrapper=(0,i.createRef)(),t.state={status:y.PENDING},t}return(0,l.Z)(m,[{key:"componentDidMount",value:function(){this.wrapperEl=this.wrapper&&this.wrapper.current,g.Z.addEvent(this.props.scrollEl,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){g.Z.removeEvent(this.props.scrollEl,"scroll",this.handleScroll),this.handleScroll&&this.handleScroll.cancel()}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.style,n=e.src,l=e.alt,a=e.loadingWidth,c=e.loadingHeight,o=e.width,s=e.height,p=e.placeholder,m=this.state.status===y.FINISH;return i.createElement("div",{ref:this.wrapper,className:h()("lazy-image",(0,u.Z)({},t,t)),style:Z(Z({},r),{},{width:m?o:a,height:m?s:c})},i.createElement("img",{className:"lazy-image-img",src:m?n:"",alt:l,width:o,height:s}),i.createElement("div",{className:h()("lazy-image-placeholder",{hidden:m})},p||i.createElement(E.Z,{className:"lazy-image-loading"})))}}]),m}(i.Component);(0,u.Z)(w,"Status",y),w.propTypes={className:m().string,style:m().object,src:m().string.isRequired,alt:m().string,loadingWidth:m().number,loadingHeight:m().number,width:m().number,height:m().number,placeholder:m().any,scrollEl:m().object,onImageLoadStart:m().func,onImageLoaded:m().func},w.defaultProps={alt:"",placeholder:"",scrollEl:document,loadingWidth:100,loadingHeight:100};const O=w}}]);