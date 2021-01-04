(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),c=n(3),s=n.n(c),i=(n(17),n(18),n(4)),u=n(5),l=n(7),h=n(6),m=n(8),d=(n(19),n(20),n(21),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.onInputChange=function(t){e.setState({searchQuery:t.target.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.searchQuery.trim())return Object(m.b)("Enter some image name");e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.onInputChange})]})})}}]),n}(r.Component)),g=n(10);var j=function(e){var t=e.name,n=e.url,r=e.onClick;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)("img",{src:n,alt:t,className:"ImageGalleryItem-image",onClick:r})})},b=n(11),f=n.n(b);function p(e){var t=e.onClick;return Object(a.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}var v=document.querySelector("#modal-root"),y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.image,t=e.largeImageURL,n=e.tags;return Object(c.createPortal)(Object(a.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:t,alt:n})})}),v)}}]),n}(r.Component);function O(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("19547883-c83eecf3fafc0cf8c7a25c2e3","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}))}))}var w=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,activeIdx:null,status:"idle",showModal:!1},e.fetchNewImages=function(){e.setState({status:"pending"});var t=e.state.currentPage;O(e.props.query,t).then((function(t){return e.setState({images:t})})).then((function(){0===e.state.images.length?(m.b.error("No such name exists"),e.setState({status:"idle"})):(e.setState({status:"resolved"}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))})).catch((function(){return e.setState({status:"rejected"})}))},e.handleLoadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.showImage=function(t){var n=e.state.images.findIndex((function(e){return e.webformatURL===t.target.src}));e.setState({activeIdx:n,showModal:!0})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchNewImages()}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(e.query!==this.props.query&&(this.setState({images:[],currentPage:1,activeIdx:null,status:"idle"}),this.fetchNewImages()),e.query===this.props.query&&t.currentPage!==this.state.currentPage){this.setState({status:"pending"});var a=this.state.currentPage;O(this.props.query,a).then((function(e){return n.setState((function(t){return{images:[].concat(Object(g.a)(t.images),Object(g.a)(e))}}))})).then((function(){n.setState({status:"resolved"}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(){return n.setState({status:"rejected"})}))}}},{key:"render",value:function(){var e=this,t=this.state,n=t.images,r=t.status,o=t.activeIdx,c=t.showModal;return Object(a.jsxs)(a.Fragment,{children:["rejected"===r&&m.b.error("oops ... something went wrong"),Object(a.jsx)("ul",{className:"ImageGallery",children:n.map((function(t){var n=t.id,r=t.tags,o=t.webformatURL;return Object(a.jsx)(j,{name:r,url:o,onClick:e.showImage},n)}))}),Object(a.jsxs)("div",{className:"container",children:["pending"===r&&Object(a.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),n.length>0&&"resolved"===r&&Object(a.jsx)(p,{onClick:this.handleLoadMore})]}),c&&Object(a.jsx)(y,{image:n[o],onClose:this.toggleModal})]})}}]),n}(r.PureComponent),x=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleFormSubmit=function(t){e.setState({query:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.query;return Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{onSubmit:this.handleFormSubmit}),Object(a.jsx)(m.a,{autoClose:3e3}),e&&Object(a.jsx)(w,{query:e})]})}}]),n}(r.Component);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ca5c263d.chunk.js.map