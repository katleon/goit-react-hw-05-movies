"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[852],{254:function(e,t,n){n.d(t,{u:function(){return u}});var r=n(87),i="MovieCard_MovieCard__DStH+",c="MovieCard_cardImage__hecEt",o=n(184),u=function(e){var t=e.movie,n=e.state;return(0,o.jsx)(r.rU,{to:"/movies/".concat(t.id),state:n,children:(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w780".concat(t.poster_path):"https://timescineplex.com/times/img/no-poster.png",alt:t.title,width:"200",loading:"lazy",className:c}),(0,o.jsx)("h2",{children:t.title}),(0,o.jsx)("p",{children:t.release_date})]})})}},852:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(439),i="Movies_moviesSection__o4M2J",c="Movies_form__4ow+Z",o=n(185),u=n(7),s=n.n(u),a="SearchingMoviesList_moviesList__Mv5fr",h=n(635),f=n(254),m=n(791),v=n(689),d=n(184),p=function(e){var t=e.query,n=(0,m.useState)([]),i=(0,r.Z)(n,2),c=i[0],o=i[1],u=(0,v.TH)();return(0,m.useEffect)((function(){t&&(0,h.mv)(t).then((function(e){return o(e.results)}))}),[t]),(0,d.jsx)("div",{className:a,children:c.length>0&&c.map((function(e){return(0,d.jsx)("div",{children:(0,d.jsx)(f.u,{movie:e,state:{from:u}})},e.id)}))})};f.u.propTypes={query:s().string};var l=n(87),_=function(){var e,t=(0,l.lr)(),n=(0,r.Z)(t,2),u=n[0],s=n[1],a=null!==(e=u.get("query"))&&void 0!==e?e:"";return(0,d.jsxs)("div",{className:i,children:[(0,d.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchQuery.value;""!==t&&(s({query:t}),e.currentTarget.reset())},children:[(0,d.jsx)("input",{type:"text",name:"searchQuery"}),(0,d.jsx)("button",{type:"submit",children:(0,d.jsx)(o.dVI,{})})]}),a&&(0,d.jsx)(p,{query:a})]})}},635:function(e,t,n){n.d(t,{DC:function(){return i},Hx:function(){return s},Mc:function(){return o},mv:function(){return c},uV:function(){return u}});var r="f7ffdce4cad751b792655bd09ea4613c",i=function(){return fetch("https://api.themoviedb.org/3//trending/movie/week?api_key=".concat(r)).then((function(e){return e.json()}))},c=function(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(r)).then((function(e){return e.json()}))},o=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r)).then((function(e){return e.json()}))},u=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.json()}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.json()}))}}}]);
//# sourceMappingURL=852.3258f01d.chunk.js.map