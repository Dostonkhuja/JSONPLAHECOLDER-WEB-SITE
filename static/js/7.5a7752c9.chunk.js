(this["webpackJsonpjson-placeholder-web-site"]=this["webpackJsonpjson-placeholder-web-site"]||[]).push([[7],{424:function(t,e,o){t.exports={photosContainer:"photos_photosContainer__3EoCe",photo:"photos_photo__IlyUk",contentStyle:"photos_contentStyle__3zpHr",corusel:"photos_corusel__cEXOj"}},427:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"b",(function(){return r})),o.d(e,"d",(function(){return c}));var n=function(t){return t.albumsPage.albums},s=function(t){return t.albumsPage.pageSize},r=function(t){return t.albumsPage.currentPage},c=function(t){return t.albumsPage.photosAlbum}},456:function(t,e,o){"use strict";o.r(e);var n=o(51),s=o(52),r=o(54),c=o(53),u=o(0),a=o.n(u),i=o(25),b=o(39),l=o(26),p=o(424),h=o.n(p),j=o(403),m=o(1),d=j.a.Meta,f=function(t){return Object(m.jsx)("div",{className:h.a.photo,children:Object(m.jsx)(j.a,{hoverable:!0,style:{width:240},cover:Object(m.jsx)("img",{src:t.photos.url}),children:Object(m.jsx)(d,{title:t.photos.title})})})},O=o(74),x=function(t){return null===t.photosAlbum?Object(m.jsx)(O.a,{}):Object(m.jsx)("div",{className:h.a.photosContainer,children:t.photosAlbum.map((function(t){return Object(m.jsx)(f,{photos:t},t.id)}))})},_=o(179),g=o(427),v=function(t){Object(r.a)(o,t);var e=Object(c.a)(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=this.props.match.params.albumId;t||this.props.history.push("/albums"),this.props.getPhotosAlbum(t)}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.b,{to:"/albums",children:"back"}),Object(m.jsx)(x,{photosAlbum:this.props.photosAlbum}),Object(m.jsx)(l.b,{to:"/albums",children:"back"})]})}}]),o}(a.a.Component);e.default=Object(i.d)(Object(b.b)((function(t){return{photosAlbum:Object(g.d)(t)}}),{getPhotosAlbum:_.c}))(v)}}]);
//# sourceMappingURL=7.5a7752c9.chunk.js.map