(this["webpackJsonpworking-portfolio"]=this["webpackJsonpworking-portfolio"]||[]).push([[0],{39:function(e,c,t){},40:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var n=t(0),r=t.n(n),a=t(16),s=t.n(a),i=(t(39),t(40),t(19)),o=t(3),d=t(1),l=function(){return Object(d.jsx)("div",{className:"ui fixed menu",children:Object(d.jsx)("div",{className:"ui container center",children:Object(d.jsx)("h2",{children:"FaceShop"})})})},j=t(11),u=t.n(j),b=t(17),O=t(18),p=t.n(O),h=t(9),x=function(){var e=Object(h.c)((function(e){return e.allProducts.products})).map((function(e){var c=e.id,t=e.title,n=e.image,r=e.price,a=e.category;return Object(d.jsx)("div",{className:"four wide column",children:Object(d.jsx)(i.b,{to:"/product/".concat(c),children:Object(d.jsx)("div",{className:"ui link cards",style:{marginBottom:"20px"},children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"image",style:{padding:"40px"},children:Object(d.jsx)("img",{src:n,alt:t})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("div",{className:"header",children:t}),Object(d.jsxs)("div",{className:"meta price",children:["$",r]}),Object(d.jsx)("div",{className:"meta",children:a})]})]})})})},c)}));return Object(d.jsx)("div",{className:"d-flex",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around"},children:e})},m="SET_PRODUCTS",f="SELECTED_PRODUCT",v="REMOVE_SELECTED_PRODUCT",g=function(e){return{type:m,payload:e}},N=function(e){return{type:f,payload:e}},E=function(){var e=Object(h.c)((function(e){return e})),c=Object(h.b)(),t=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("Err",e)}));case 2:t=e.sent,c(g(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t()}),[]),console.log("Products",e),Object(d.jsx)("div",{className:"ui grid container",children:Object(d.jsx)(x,{})})},y=function(){var e=Object(h.c)((function(e){return e.product})),c=e.products?e.products:e,t=c.image,r=c.title,a=c.price,s=c.category,i=c.description,l=Object(o.f)().productId,j=Object(h.b)();console.log(l);var O=function(){var e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://fakestoreapi.com/products/".concat(l)).catch((function(e){console.log("ERROR",e)}));case 2:c=e.sent,j(N(c.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return l&&""!==l&&O(),function(){j({type:v})}}),[l]),Object(n.useEffect)((function(){console.log("product data",e)}),[e]),Object(d.jsx)("div",{className:"ui grid container",children:0===Object.keys(e).length?Object(d.jsx)("div",{children:"...Loading"}):Object(d.jsx)("div",{className:"ui placeholder segment",children:Object(d.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(d.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(d.jsxs)("div",{className:"middle aligned row",children:[Object(d.jsx)("div",{className:"column lp",children:Object(d.jsx)("img",{className:"ui fluid image",src:t})}),Object(d.jsxs)("div",{className:"column rp",children:[Object(d.jsx)("h1",{children:r}),Object(d.jsx)("h2",{children:Object(d.jsxs)("a",{className:"ui teal tag label",children:["$",a]})}),Object(d.jsx)("h3",{className:"ui brown block header",children:s}),Object(d.jsx)("p",{children:i}),Object(d.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(d.jsx)("div",{classNam:"hidden content",children:Object(d.jsx)("i",{className:"shop icon"})}),Object(d.jsx)("div",{className:"visible content",children:"Add to Card"})]})]})]})]})})})};var w=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,component:E}),Object(d.jsx)(o.a,{path:"/product/:productId",exact:!0,component:y}),Object(d.jsx)(o.a,{children:"404 Not Found!"})]})]})})},_=t(20),k=t(13),D={products:[{id:1,title:"Dispesh",category:"Programmer"}]},S=Object(_.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;return t===m?Object(k.a)(Object(k.a)({},e),{},{products:n}):e},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case f:return Object(k.a)(Object(k.a)({},e),{},{products:n});case v:return{};default:return e}}}),T=S,R=Object(_.b)(T,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(h.a,{store:R,children:Object(d.jsx)(w,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.0cddaae1.chunk.js.map