"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{806:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(439),c=t(791),i=t(689),o="Reviews_reviewsList__epPrl",u="Reviews_reviewsItem__M9RKs",s=t(635),a=t(184),h=function(){var e=(0,i.UO)().id,n=(0,c.useState)([]),t=(0,r.Z)(n,2),h=t[0],f=t[1];return(0,c.useEffect)((function(){(0,s.Hx)(e).then((function(e){return f(e.results)}))}),[e]),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{className:o,children:0===h.length?(0,a.jsx)("li",{children:(0,a.jsx)("h3",{children:"Sorry, we cannot find reviews for you"})}):h.map((function(e){return(0,a.jsxs)("li",{className:u,children:[(0,a.jsx)("h3",{children:e.author}),(0,a.jsx)("p",{children:e.content})]},e.id)}))})})}},635:function(e,n,t){t.d(n,{DC:function(){return c},Hx:function(){return s},Mc:function(){return o},mv:function(){return i},uV:function(){return u}});var r="f7ffdce4cad751b792655bd09ea4613c",c=function(){return fetch("https://api.themoviedb.org/3//trending/movie/week?api_key=".concat(r)).then((function(e){return e.json()}))},i=function(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(r)).then((function(e){return e.json()}))},o=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(r)).then((function(e){return e.json()}))},u=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(r)).then((function(e){return e.json()}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(r)).then((function(e){return e.json()}))}}}]);
//# sourceMappingURL=806.7cab1609.chunk.js.map