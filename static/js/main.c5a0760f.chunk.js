(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),c=n(4),l=n.n(c),s=n(2),a=n(0),o={padding:"10px",backgroundColor:"whitesmoke"},u={display:"block",marginLeft:"auto",marginRight:"auto",border:"3px solid black",borderRadius:"50%"},d={padding:"10px",margin:"10px",border:"2px solid grey",borderRadius:"10px",backgroundColor:"lightGrey",boxShadow:"10px 5px 10px",width:"300px",display:"inline-grid",gridTemplateColumns:"auto auto auto"},j=[{name:"Md Ridwanul Alam",roll:"2902"},{name:"Md Irfanul Alam",roll:"3309"},{name:"Md Ashikul Alam",roll:"4430"},{name:"Md Junayedul Alam",roll:"4880"},{name:"Md Zayanul Alam",roll:"4438"},{name:"Md Shakil",roll:"4438"},{name:"Md Anwar Ali",roll:"4778"},{name:"Md Abdur Rahman",roll:"7388"},{name:"Md Fawzul Karim",roll:"4656"}];function b(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://randomuser.me/api/?results=24").then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[]),n.map((function(e){return Object(a.jsx)("div",{style:d,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{style:u,src:e.picture.large,alt:"image"}),Object(a.jsxs)("h4",{children:["Name: ",e.name.title," ",e.name.first," ",e.name.last]}),Object(a.jsxs)("p",{children:["Cell Phone: ",e.cell]}),Object(a.jsxs)("small",{children:["Email: ",e.email]}),Object(a.jsxs)("p",{children:["Country: ",e.location.country]}),Object(a.jsxs)("p",{children:["City: ",e.location.city]}),Object(a.jsxs)("p",{children:["Gender: ",e.gender]})]})})}))}function m(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{children:["Total Users: ",n.length]}),n.map((function(e){return Object(a.jsx)("div",{style:d,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h5",{children:["Name: ",e.name]}),Object(a.jsxs)("h5",{children:["Email: ",e.email]})]})})}))]})}function h(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Count: ",n]}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ab cum doloribus illum temporibus ipsam?"}),Object(a.jsxs)("button",{onClick:function(){return r(n+1)},type:"button",style:{margin:"5px"},children:[" ","Increase"," "]}),Object(a.jsxs)("button",{onClick:function(){return r(n-1)},type:"button",children:[" ","Decrease"," "]})]})}function p(e){var t=e.info,n=t.name,i=t.roll;return Object(a.jsx)("div",{style:d,children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{children:["Name: ",n]}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ullam expedita quam natus iusto, magnam magni consequatur eveniet eum qui."}),Object(a.jsxs)("small",{style:{display:"inline-block",border:"3px solid red",padding:"3px",marginBottom:"3px"},children:["Roll: ",i]}),Object(a.jsx)("br",{})," ",Object(a.jsx)("button",{type:"button",children:" Go To Profile "})]})})}var x=function(){return Object(a.jsxs)("div",{style:o,children:[Object(a.jsx)(h,{}),Object(a.jsx)(b,{}),Object(a.jsx)(m,{}),j.map((function(e){return Object(a.jsx)(p,{info:e})}))]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,11)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),r(e),c(e),l(e)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),O()}},[[10,1,2]]]);
//# sourceMappingURL=main.c5a0760f.chunk.js.map