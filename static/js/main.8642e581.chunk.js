(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){e.exports={taskContainer:"App_taskContainer__T2B5D",taskContainer__title:"App_taskContainer__title__3plfy"}},2:function(e,t,n){e.exports={listItem:"ListItem_listItem__1eZX5",listItem__text:"ListItem_listItem__text__2AyNw",listItem__timer:"ListItem_listItem__timer__1AHTb",listItem__btn:"ListItem_listItem__btn__7HdPg",listItem__btn_start:"ListItem_listItem__btn_start__1oULr",listItem__btn_pause:"ListItem_listItem__btn_pause__1GtZK",listItem__btn_delete:"ListItem_listItem__btn_delete__2hUUY"}},24:function(e,t,n){e.exports=n(49)},35:function(e,t,n){},4:function(e,t,n){e.exports={form:"Form_form__iu174",form__input:"Form_form__input__1OsLG",form__btn:"Form_form__btn__1uDbG",form__icon:"Form_form__icon__3HgIN"}},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(7),l=n.n(i),c=n(3),o=n(19),s=(n(35),n(14)),u={ADD_TASK:"ADD_TASK",DELETE_TASK:"DELETE_TASK",START_TRACKER:"START_TRACKER",PAUSE_TRACKER:"PAUSE_TRACKER"},m=n(20),f=n.n(m),_=function(e){return{type:u.ADD_TASK,payload:{task:e,id:f.a.generate(),startTime:Date.now(),currentTime:0,isPaused:!1}}},p=function(e){return{type:u.DELETE_TASK,payload:{id:e}}},b=function(e){return{type:u.START_TRACKER,payload:{id:e}}},v=function(e,t){return{type:u.PAUSE_TRACKER,payload:{id:e,currentTime:t}}},E=n(4),d=n.n(E);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),g=a.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"}),T=function(e){var t=e.svgRef,n=e.title,r=y(e,["svgRef","title"]);return a.a.createElement("svg",h({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,O,g)},j=a.a.forwardRef((function(e,t){return a.a.createElement(T,h({svgRef:t},e))})),I=(n.p,function(){var e=Object(c.b)(),t=Object(r.useState)(""),n=Object(s.a)(t,2),i=n[0],l=n[1],o=Object(r.useState)(!0),u=Object(s.a)(o,2),m=u[0],f=u[1];return a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(_(i)),l(""),f(!0)},className:d.a.form},a.a.createElement("input",{type:"text",placeholder:"tracker name",onChange:function(e){l(e.target.value),0===e.target.value.trim().length?f(!0):f(!1)},value:i,className:d.a.form__input}),a.a.createElement("button",{type:"submit",className:d.a.form__btn,disabled:m},a.a.createElement(j,{className:d.a.form__icon})))}),R=n(5),S=n.n(R);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),P=a.a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),C=function(e){var t=e.svgRef,n=e.title,r=A(e,["svgRef","title"]);return a.a.createElement("svg",w({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,k,P)},x=a.a.forwardRef((function(e,t){return a.a.createElement(C,w({svgRef:t},e))}));n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var K=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),N=a.a.createElement("path",{d:"M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"}),L=function(e){var t=e.svgRef,n=e.title,r=z(e,["svgRef","title"]);return a.a.createElement("svg",D({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,K,N)},M=a.a.forwardRef((function(e,t){return a.a.createElement(L,D({svgRef:t},e))}));n.p;function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B=a.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),F=a.a.createElement("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),G=function(e){var t=e.svgRef,n=e.title,r=U(e,["svgRef","title"]);return a.a.createElement("svg",H({height:24,viewBox:"0 0 24 24",width:24,ref:t},r),n?a.a.createElement("title",null,n):null,B,F)},J=a.a.forwardRef((function(e,t){return a.a.createElement(G,H({svgRef:t},e))})),V=(n.p,n(2)),Z=n.n(V),W=function(e){return e<10?"0".concat(e):e},X=function(e){var t=e.task,n=e.id,r=e.startTime,i=e.currentTime,l=e.isPaused,o=Object(c.b)(),s=function(){o(p(n))},u=0;return l&&i?u=i:i?u=Date.now()-r+i:l||i||(u=Date.now()-r),a.a.createElement("li",{className:Z.a.listItem},a.a.createElement("p",{className:Z.a.listItem__text},t),a.a.createElement(S.a,{initialTime:u,startImmediately:!l},(function(e){var t=e.start,r=e.pause,i=e.getTime;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:Z.a.listItem__timer},W(S.a.Hours()._owner.memoizedState.h)," :",W(S.a.Minutes()._owner.memoizedState.m)," :",W(S.a.Seconds()._owner.memoizedState.s)),a.a.createElement("div",null,l&&a.a.createElement("button",{onClick:function(){return function(e){e(),o(b(n))}(t)},className:Z.a.listItem__btn},a.a.createElement(x,{className:Z.a.listItem__btn_start})),!l&&a.a.createElement("button",{onClick:function(){return function(e,t){e(),o(v(n,t()))}(r,i)},className:Z.a.listItem__btn},a.a.createElement(M,{className:Z.a.listItem__btn_pause})),a.a.createElement("button",{type:"button",onClick:s,className:Z.a.listItem__btn},a.a.createElement(J,{className:Z.a.listItem__btn_delete}))))})))},Y=function(e){return e.tasks},q=function(){var e=Object(c.c)(Y),t=Object(r.useMemo)((function(){return e.map((function(e){return a.a.createElement(X,{key:e.id,id:e.id,task:e.task,startTime:e.startTime,currentTime:e.currentTime,isPaused:e.isPaused})}))}),[e]);return a.a.createElement("ul",null,t)},Q=n(12),$=n.n(Q),ee=function(){return a.a.createElement("div",{className:$.a.taskContainer},a.a.createElement("h1",{className:$.a.taskContainer__title},"tracker"),a.a.createElement(I,null),a.a.createElement(q,null))},te=n(1),ne=n(21),re=n(13),ae=n(22),ie=n.n(ae),le=n(15),ce=n(23),oe=Object(te.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case u.ADD_TASK:return[].concat(Object(ce.a)(e),[r]);case u.DELETE_TASK:return e.filter((function(e){return e.id!==r.id}));case u.START_TRACKER:return e.map((function(e){return e.id===r.id?Object(le.a)({},e,{startTime:Date.now(),isPaused:!1}):e}));case u.PAUSE_TRACKER:return e.map((function(e){return e.id===r.id?Object(le.a)({},e,{currentTime:r.currentTime,isPaused:!0}):e}));default:return e}}}),se=Object(ne.composeWithDevTools)(),ue={key:"tasks",storage:ie.a},me=Object(re.a)(ue,oe),fe=Object(te.createStore)(me,se),_e=Object(re.b)(fe);l.a.render(a.a.createElement(c.a,{store:fe},a.a.createElement(o.a,{persistor:_e},a.a.createElement(ee,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8642e581.chunk.js.map