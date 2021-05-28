(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{25:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(19),c=n.n(a),s=(n(25),n(0)),o=function(){return Object(s.jsx)("h2",{children:"Expense Tracker"})},i=n(4),u=n.n(i),l=n(8),j=n(6),d=n(20),p=n(3),b=function(t,e){switch(e.type){case"GET_TRANSACTIONS":return Object(p.a)(Object(p.a)({},t),{},{loading:!1,transactions:e.payload});case"DELETE_TRANSACTION":return Object(p.a)(Object(p.a)({},t),{},{transactions:t.transactions.filter((function(t){return t._id!==e.payload}))});case"ADD_TRANSACTION":return Object(p.a)(Object(p.a)({},t),{},{transactions:[].concat(Object(d.a)(t.transactions),[e.payload])});case"TRANSACTION_ERROR":return Object(p.a)(Object(p.a)({},t),{},{error:e.payload});default:return t}},O=n(9),x=n.n(O),h={transactions:[],error:null,loading:!0},f=Object(r.createContext)(h),m=function(t){var e=t.children,n=Object(r.useReducer)(b,h),a=Object(j.a)(n,2),c=a[0],o=a[1];function i(){return(i=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("/api/v1/transactions");case 3:e=t.sent,o({type:"GET_TRANSACTIONS",payload:e.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),o({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(l.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.delete("/api/v1/transactions/".concat(e));case 3:o({type:"DELETE_TRANSACTION",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),o({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function p(){return(p=Object(l.a)(u.a.mark((function t(e){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,x.a.post("/api/v1/transactions",e,n);case 4:r=t.sent,o({type:"ADD_TRANSACTION",payload:r.data.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(s.jsx)(f.Provider,{value:{transactions:c.transactions,error:c.error,loading:c.loading,getTransactions:function(){return i.apply(this,arguments)},deleteTransaction:function(t){return d.apply(this,arguments)},addTransaction:function(t){return p.apply(this,arguments)}},children:e})};function v(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var T=function(){var t=Object(r.useContext)(f).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Your Balance"}),Object(s.jsx)("h1",{children:v(t)})]})};function N(){var t=Object(r.useContext)(f).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Income"}),Object(s.jsxs)("p",{className:"money plus",children:["$",v(e)]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Expense"}),Object(s.jsxs)("p",{className:"money minus",children:["$",v(n)]})]})]})}var y=function(t){var e=t.transaction,n=Object(r.useContext)(f).deleteTransaction,a=e.amount<0?"-":"+";return Object(s.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text," ",Object(s.jsxs)("span",{children:[a,"$",v(Math.abs(e.amount))]}),Object(s.jsx)("button",{onClick:function(){return n(e._id)},className:"delete-btn",children:"x"})]})},A=function(){var t=Object(r.useContext)(f),e=t.transactions,n=t.getTransactions;return Object(r.useEffect)((function(){n()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"History"}),Object(s.jsx)("ul",{id:"list",className:"list",children:e.map((function(t){return Object(s.jsx)(y,{transaction:t},t.id)}))})]})},R=function(){var t=Object(r.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1],c=Object(r.useState)(0),o=Object(j.a)(c,2),i=o[0],u=o[1],l=Object(r.useContext)(f).addTransaction;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Add new transaction"}),Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Math.floor(1e8*Math.random()),text:n,amount:Number(i)};l(e)},children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"text",children:"Text"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(t){return a(t.target.value)},placeholder:"Enter text..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(s.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(s.jsx)("input",{type:"number",value:i,onChange:function(t){return u(t.target.value)},placeholder:"Enter amount..."})]}),Object(s.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var C=function(){return Object(s.jsxs)(m,{children:[Object(s.jsx)(o,{}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(T,{}),Object(s.jsx)(N,{}),Object(s.jsx)(A,{}),Object(s.jsx)(R,{})]})]})};c.a.render(Object(s.jsx)(C,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2b64ce81.chunk.js.map