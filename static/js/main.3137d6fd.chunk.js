(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{15:function(e,t,n){e.exports={content:"Movie_content__1h9ty",link:"Movie_link__3Nm3B"}},21:function(e,t,n){e.exports={title:"App_title__2eeOH",main_content:"App_main_content__1j2V-"}},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(18),s=n.n(r),a=n(10),o=n(2),j=n(8),l=n.n(j),u=n(12),d=n(9),m=n(15),b=n.n(m),p=n(1);var O=function(e){var t=e.id,n=e.medium_cover_image,c=e.title,i=e.description_full,r=e.genres;return console.log(r),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:b.a.content,children:[Object(p.jsx)("img",{src:n,alt:n}),Object(p.jsx)("h2",{className:b.a.link,children:Object(p.jsxs)(a.b,{to:"/movie/".concat(t),children:[" ",c]})}),Object(p.jsx)("p",{children:i&&i.length>235?"".concat(i.slice(0,235),"..."):i}),Object(p.jsx)("ul",{children:r&&r.map((function(e){return Object(p.jsx)("li",{children:e},e)}))})]})})},h=n(21),v=n.n(h);var _=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),a=s[0],o=s[1],j=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n.data.movies),i(!1),console.log(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){j()}),[]),Object(p.jsx)("div",{children:n?Object(p.jsx)("h1",{children:"Loading..."}):Object(p.jsx)("div",{className:v.a.main_content,children:a.map((function(e){return Object(p.jsx)(O,{id:e.id,medium_cover_image:e.medium_cover_image,title:e.title,description_full:e.description_full,genres:e.genres},e.id)}))})})};var f=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!0),s=Object(d.a)(r,2),a=s[0],j=s[1],m=Object(o.f)().id,b=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(m));case 2:return e.next=4,e.sent.json();case 4:t=e.sent,console.log(t),i(t.data.movie),j(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(n),Object(c.useEffect)((function(){b()}),[]),Object(p.jsx)("div",{children:a?Object(p.jsx)("h1",{children:"Loading...."}):Object(p.jsx)(O,{id:m,medium_cover_image:n.medium_cover_image,title:n.title,description_full:n.description_full,genres:n.genres},n.id)})};var x=function(){return Object(p.jsx)(a.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/movie/:id",children:Object(p.jsx)(f,{})}),Object(p.jsx)(o.a,{path:"/",children:Object(p.jsx)(_,{})})]})})};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3137d6fd.chunk.js.map