(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={H1:"Message_H1__19tte",message_container:"Message_message_container__umNCE",message:"Message_message__Yw2s3",avatar_container:"Message_avatar_container__1NqJR",body_container:"Message_body_container__3ddfP",time_container:"Message_time_container__3KhwS",text:"Message_text__21Lg9",time:"Message_time__3Fg03",name:"Message_name__1lEsp",svgWrapper:"Message_svgWrapper__46W2q"}},,function(e,a,t){e.exports={container:"Greeting_container__3vYbA",inputContainer:"Greeting_inputContainer__27dy1",error:"Greeting_error__zh8qL",notAnError:"Greeting_notAnError__22gos",btn:"Greeting_btn__3eRuT",errorMsgContainer:"Greeting_errorMsgContainer__1wzwN",counterContainer:"Greeting_counterContainer__1aB_4"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__29enb",HW2:"Affairs_HW2__21LhM",affair:"Affairs_affair__1IA7e",name:"Affairs_name__62o6J",priority:"Affairs_priority__9Ro-V",buttonContainer:"Affairs_buttonContainer__3zjwS"}},,,,function(e,a,t){e.exports={default:"SuperButton_default__m8XE1",small:"SuperButton_small__32gxo",red:"SuperButton_red__2-HEt"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__UgCpd",errorInput:"SuperInputText_errorInput__3QbUq",error:"SuperInputText_error__1aSV7"}},function(e,a,t){e.exports={blue:"HW4_blue__2rH0M",column:"HW4_column__gs3CO",testSpanError:"HW4_testSpanError__1tOoa"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__CqOUR",spanClassName:"SuperCheckbox_spanClassName__3JG2_"}},,,function(e,a,t){e.exports={App:"App_App__1iINi"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=(t(21),t(14)),s=t.n(o),i=t(1),m=t.n(i);var u=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("div",{className:m.a.avatar_container},r.a.createElement("img",{alt:"avatar",src:e.avatar})),r.a.createElement("div",{className:m.a.svgWrapper},r.a.createElement("svg",{viewBox:"0 0 100 100"},r.a.createElement("path",{d:"M100,0v100H18.2c0.3-1.2,3.6-1.8,13.6-5.2c14.8-5,28.1-13.3,38.9-24.1C88.8,52.6,100,27.6,100,0z"}))),r.a.createElement("div",{className:m.a.message_container},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.body_container},r.a.createElement("div",{className:m.a.text_wrapper},r.a.createElement("p",{className:m.a.text},e.message)),r.a.createElement("div",{className:m.a.time_container},r.a.createElement("div",{className:m.a.time},e.time)))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Artem",d='\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043e\u0447\u0435\u043d\u044c \u0434\u043b\u0438\u043d\u043d\u043e\u0433\u043e \u0441\u043b\u043e\u0432\u0430: "idllamcorpellamcoramcorpellamcorpellamcllamcorpellamcorperpellamcorpeamcorpellamcorpellamcllamcorpellamcorperpellamcorpeamcorpellamcorpellamcllamcorpellamcorperpellamcorpepellamcllamcamcorpellamcorpellamcllamcorpellamcorperpellamcorpeorpellamcorperpellamcorpellamcorpe" - elementum vehicula. Etiam efficitur ante ullamcorper risus convallis volutpat. Morbi vel tincidunt nisl. Sed dapibus vel sem in ultricies.',f="22:00";var E=function(){return r.a.createElement("div",{className:m.a.H1},r.a.createElement(u,{avatar:p,name:_,message:d,time:f}))},g=t(2),h=t(4),v=t.n(h),b=t(5),C=t(8),N=t.n(C),k=["red","className","children","small"],x=function(e){var a=e.red,t=e.className,n=e.children,l=e.small,c=Object(b.a)(e,k),o="\n        ".concat(a||l?"":N.a.default,"\n        ").concat(a?N.a.red:"","\n        ").concat(l?N.a.small:"","\n        ").concat(t||"");return r.a.createElement("button",Object.assign({className:o},c),n," ")};var y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,r.a.createElement("p",null,e.affair.name)),r.a.createElement("td",null,r.a.createElement("p",null,e.affair.priority)),r.a.createElement("td",null,r.a.createElement(x,{small:!0,className:v.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("th",{className:v.a.th},a._id,"."),r.a.createElement(y,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})))}));return r.a.createElement("div",null,a,r.a.createElement("div",{className:v.a.buttonContainer},r.a.createElement(x,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(x,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(x,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(x,{onClick:function(){e.setFilter("low")}},"Low")))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(O),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),s=o[0],i=o[1],m=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e.filter((function(e){return"low"===e.priority}))}(t,s);return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),"homework 2",r.a.createElement("div",{className:v.a.HW2},r.a.createElement("table",null,r.a.createElement(w,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a})).map((function(e,a){return e._id=a+1,e}))}(t,e))}})),r.a.createElement("hr",null)))},j=t(15),A=t(3),M=t.n(A),H=t(9),W=t.n(H),I=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],T=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(b.a)(e,I),m="".concat(W.a.error," ").concat(s||""),u="".concat(c?W.a.errorInput:W.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u},i)),c&&r.a.createElement("span",{className:m},c))},U=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?M.a.error:M.a.notAnError;return r.a.createElement("div",{className:M.a.container},r.a.createElement("div",{className:M.a.inputContainer},r.a.createElement(T,{value:a,onChange:t,className:o,placeholder:"input username here..."}),r.a.createElement(x,{disabled:Boolean(l),className:M.a.btn,onClick:n},"Add user")),r.a.createElement("div",{className:M.a.errorMsgContainer},r.a.createElement("span",{className:M.a.errorMsg},l)),r.a.createElement("div",{className:M.a.counterContainer},r.a.createElement("span",null,"Total users count: ",c)))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(""),m=Object(g.a)(i,2),u=m[0],p=m[1],_=a.length;return r.a.createElement(U,{name:o,setNameCallback:function(e){var a=e.target.value.replace(/\s/g,"");a.length>3?(s(a),p("")):(s(a),p("Username should be at least 4 characters long!"))},addUser:function(){!u&&o?a.some((function(e){return e.name===o}))?p("Username already exists!"):(t(o),console.log("Hello ".concat(o,"!"))):p("Username should be at least 4 characters long!")},error:u,totalUsers:_})},B=t(24);var G=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,"homework 3",r.a.createElement(F,{users:t,addUserCallback:function(e){var a={_id:Object(B.a)(),name:e};l([].concat(Object(j.a)(t),[a]))}}),r.a.createElement("hr",null))},q=t(10),J=t.n(q),R=t(11),P=t.n(R),z=["type","onChange","onChangeChecked","className","spanClassName","children"],K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(b.a)(e,z),o="".concat(P.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:P.a.spanClassName},l))};var L=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t?"":"Required input",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(g.a)(s,2),m=i[0],u=i[1];return r.a.createElement("div",null,"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(T,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(T,{className:J.a.blue}),r.a.createElement(x,null,"Default button"),r.a.createElement(x,{red:!0,onClick:o},"Delete button"),r.a.createElement(x,{disabled:!0},"Disabled button"),r.a.createElement(K,{checked:m,onChangeChecked:u},"someee text"),r.a.createElement(K,{checked:m,onChange:function(e){return u(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var D=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"homework 1"),r.a.createElement(E,null),r.a.createElement(S,null),r.a.createElement(G,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.fd65be52.chunk.js.map