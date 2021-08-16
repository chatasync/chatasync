(this["webpackJsonpchat-frontend"]=this["webpackJsonpchat-frontend"]||[]).push([[0],{199:function(e){e.exports=JSON.parse('{"title":"welcome"}')},588:function(e,n,t){"use strict";t.r(n);t(324),t(334);var a,r=t(1),o=t.n(r),c=t(21),i=t(27),l=(t(528),t(32)),s=t(150),u=t(74),m=t(30),d=t(299),p=t(201),f=Object(p.a)(a||(a=Object(d.a)(["\n \n  .layout{\n    display: flex;\n    width: 100vw;\n    height: 100vh;\n    flex-direction: row;\n    background-color: #ebebeb;\n  }\n  .sidebar{\n    display: flex;\n    justify-content: space-between;\n    width: 5%;\n    height: 100%;\n    flex-direction: column;\n    background-color: white;\n  }\n\n  .chat-rooms{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    \n  }\n  .success-code{\n    width: 100%;\n    background-color: lawngreen;\n    color:black;\n    font-weight: bold;\n    height: 40px;\n    text-align: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    justify-content: center;\n    margin: 0 0 20px 0;\n    border-radius: 10px;\n  }\n  .error-code {\n    width: 100%;\n    background-color: #ff0000;\n    color:white;\n    height: 40px;\n    text-align: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    justify-content: center;\n    margin: 0 0 20px 0;\n    border-radius: 10px;\n  }\n  .sidebar-upper {\n    display: flex;\n    height: 15%;\n    width: 100%;\n    align-items: center;\n    align-self: center;\n    flex-direction: column;\n    justify-content: space-between;\n  }\n  .chatAsync-logo {\n    display: flex;\n    flex-direction: column;\n    height: 70px;\n    align-items: center;\n    align-self: center;\n    justify-content: center;\n    margin-bottom: 30px;\n    width: 100%;\n    background-color: aqua;\n  }\n  .sidebar-icons-logo {\n    margin: 10px;\n  }\n  \n  .sidebar-lower {\n    height: 70px;\n    align-items: center;\n    align-self: center;\n  }\n  \n  .chat-rooms-layout {\n    height: 90%;\n    width: 90%;\n    background-color: white;\n  }\n  \n  .chat-title {\n    display: flex;\n    flex-direction: row;\n    font-size: 24px;\n    width: 100%;\n    padding: 20px;\n    font-weight: 700;\n  }\n  \n  \n  .chat-rooms-individual {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100%;\n    overflow-y: scroll;\n  }\n  \n  .chat-room-element {\n    height: 70px;\n    width: 100%;\n    padding: 5px;\n    background-color: aquamarine;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    margin-top: 5px;\n  }\n  .chat-room-element-content .name {\n    font-size: 18px;\n    font-weight: 900;\n  }\n  .chat-room-element-content .last-message {\n    font-size: 15px;\n    font-weight: 400;\n    color: #ababab;\n  }\n  .chat-room-element-content {\n    width: available;\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    margin-left: 10px;\n  }\n  .chat-room-element-img {\n    height: 100%;\n    object-fit: fill;\n  }\n\n\n  .active-chat {\n    display: flex;\n    width: calc(95%);\n    height: 100%;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .active-chat .layout {\n    display: flex;\n    height: 90%;\n    width: 100%;\n    justify-content: space-between;\n    flex-direction: column;\n    background-color: #ebebeb;\n    padding: 15px 15px 0px 15px;\n  }\n\n  .active-chat .header {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    border-bottom: 2px solid #ababab;\n    padding-bottom: 10px;\n  }\n  .active-chat .photo{\n    width: 80px;\n    height: 80px;\n    object-fit: cover;\n  }\n  \n  .active-chat .content {\n    width: available;\n    display: flex;\n    flex-direction: column;\n    padding: 0px 0px 0px 10px;\n    font-size: 18px;\n    font-weight: 800;\n    text-align: center;\n    align-items: center;\n    justify-items: center;\n    justify-content: center;\n  }\n  \n  .active-chat .textbox{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .active-chat .textbox .textinput{\n    width: 80%;\n  }\n  \n  .chat-body{\n    height: 100%;\n    width: 100%;\n    overflow-y: scroll;\n    ::-webkit-scrollbar {\n      display: none;\n    }\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding-top: 10px;\n    margin-bottom: 10px;\n    border-bottom: 2px solid #ababab;;\n  }\n  \n  .chat-body .left{\n    max-width:70%;\n    min-width: 5%;\n    padding: 5px;\n  }\n\n  .chat-body .right{\n    max-width:70%;\n    min-width: 10%;\n    margin-left: auto;\n    padding: 5px;\n    overflow: visible;\n    margin-bottom: 5px;\n  }\n  \n  .chat-body .message {\n    height: 20px;\n    display: flex;\n    flex-direction: row;\n  }\n  .chat-body .time {\n    height: 20px;\n    min-width: 20px;\n    display: flex;\n    flex-direction: row;\n    float: right;\n  }\n  \n  .chat-body .timestamp{\n    width: 100%;\n  }\n  \n  \n  .chat-background{\n    background-image: url(\"https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100vw;\n    height: 100vh;\n  }\n  \n  .login-card {\n    float: right;\n    height: 80%;\n    width: 20%;\n    margin-top: 5%;\n    margin-right: 5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  .signup-card {\n    float: right;\n    height: 90%;\n    width: 20%;\n    margin-top: 5%;\n    margin-right: 5%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  \n  .login-title {\n    float: left;\n    font-size: 44px;\n    font-family: 'Zen Tokyo Zoo', cursive;\n    color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    width: 40%;\n    height: 100%;\n    padding: 5%;\n  }\n  \n  .form-root{\n    height: 40%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    justify-items: center;\n  }\n  .sform-root{\n    height: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    justify-items: center;\n  }\n  \n"]))),g=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},a=e;n&&(a=function(){return e().then((function(e){return{default:n(e)}}))});var c=Object(r.lazy)(a);return function(e){return o.a.createElement(r.Suspense,{fallback:t.fallback},o.a.createElement(c,e))}},h=g((function(){return t.e(4).then(t.bind(null,629))}),(function(e){return e.HomePage})),b=g((function(){return t.e(3).then(t.bind(null,631))}),(function(e){return e.NotFoundPage})),x=t(627);function y(e){var n=e.Component;return e.isProtected?r.createElement("div",null,r.createElement(n,null)):r.createElement(m.a,{to:"/auth/login"})}function v(e){var n=e.Component,t=e.isGuest;return console.log("GuestRoute"),t?r.createElement(r.Fragment,null,r.createElement(n,null)):r.createElement(m.a,{to:"/allusers"})}function w(e){return r.createElement(r.Fragment,null,"ResetPassword")}function E(e){return r.createElement("div",null,"ForgotPassword")}var j=t(11),k=t.n(j),O=t(62),S=t(618),N=t(626),C=t(622),I=t(163),P="https://chatasync-java.ddns.net",T="https://chatasync-nodejs.ddns.net",F="/chatasync/users/list",A=function(e){return"".concat(P).concat(e)},z=t(61),L=function(e){return Object(z.b)(e)},M=t(129);function R(e){return Object(M.b)(e)}function G(e){return Object(M.c)(e)}var H=k.a.mark(q);function q(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),H)}var B={apicall:!1,status:200,error:0},J=L({name:"signuppage",initialState:B,reducers:{someAction:function(e,n){},makeApiCall:function(e){e.apicall=!0},completeApiCall:function(e){e.apicall=!1,e.status=201},error:function(e,n){e.error=n.payload.status,e.apicall=!1}}}),U=(J.actions,t(154)),D=Object(U.a)([function(e){return e.signuppage||B}],(function(e){return e}));function V(e){var n=Object(m.g)(),t=(R({key:J.name,reducer:J.reducer}),G({key:J.name,saga:q}),{actions:J.actions}).actions,a=Object(I.a)(),o=a.register,c=a.handleSubmit,l=Object(i.c)(),s=function(){var e=Object(O.a)(k.a.mark((function e(a){var r,o,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),(r=new Headers).append("Content-Type","application/json"),o=JSON.stringify({userName:a.email,password:a.password}),e.next=6,fetch("".concat(A("/chatasync/users/register")),{method:"POST",headers:r,body:o,redirect:"follow"});case 6:return c=e.sent,e.next=9,c.json();case 9:"Email already exist."===e.sent.message?l(t.error({status:401})):(l(t.completeApiCall()),n.push("/auth/login"));case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=Object(i.d)(D);return r.createElement(r.Fragment,null,r.createElement("div",{className:"chat-background"},r.createElement("div",{className:"login-title"},r.createElement("div",null,"Get into the Journey of Chat Async Where, you don't have to worry about privacy.")),r.createElement(S.a,{className:"signup-card"},0!==u.error&&r.createElement("div",{className:"error-code"},r.createElement("span",null,"Error While Signing up")),r.createElement("form",{onSubmit:c(s),className:"sform-root",noValidate:!0},r.createElement(r.Fragment,null,r.createElement(N.a,{id:"standard-error-helper-text",label:"Name",type:"text",name:"name",inputRef:o({required:!0})}),r.createElement(N.a,{id:"standard-error-helper-text",label:"Email",type:"email",name:"email",inputRef:o({required:!0})}),r.createElement(N.a,{id:"standard-error-helper-text",label:"Password",type:"password",name:"password",inputRef:o({required:!0})}),r.createElement(N.a,{id:"standard-error-helper-text",label:"Confirm Password",type:"password",name:"cpassword",inputRef:o({required:!0})}),r.createElement(C.a,{type:"submit",variant:"contained",color:"primary"},"Signup"),r.createElement(C.a,{onClick:function(){n.goBack()},variant:"contained",color:"primary"},"Go Back"))))))}var W=t(56),Z=Object(U.a)([function(e){return e.loginPage||Y}],(function(e){return e})),_=k.a.mark(Q),K=k.a.mark(X);function Q(){var e,n,t,a,r;return k.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(W.b)(Z);case 2:return e=o.sent,console.log("MakeUserLogin Saga",e),(n=new Headers).append("Content-Type","application/json"),t=JSON.stringify({userName:e.username,password:e.password}),o.next=9,fetch(P+"/chatasync/login",{method:"POST",headers:n,body:t,redirect:"follow"});case 9:return a=o.sent,o.next=12,a.json();case 12:if(r=o.sent,console.log(a.status),200===a.status){o.next=19;break}return o.next=17,Object(W.a)(ee.loginError({status:parseInt(a.status)}));case 17:o.next=22;break;case 19:localStorage.setItem("token",r.jwt),localStorage.setItem("roomId",e.username),window.location.pathname="/allusers";case 22:case"end":return o.stop()}}),_)}function X(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)(ee.makeLogin.type,Q);case 2:case"end":return e.stop()}}),K)}var Y={password:"",username:"",apicall:!1,jwt:localStorage.getItem("token")||"",error:200},$=L({name:"loginPage",initialState:Y,reducers:{makeLogin:function(e,n){e.username=n.payload.username,e.password=n.payload.password,e.apicall=!0},LoginSucess:function(e,n){e.jwt=n.payload.jwt,e.apicall=!1,e.error=200},loginError:function(e,n){e.error=n.payload.status}}}),ee=$.actions;function ne(e){var n=Object(I.a)(),t=n.register,a=n.handleSubmit,o=(R({key:$.name,reducer:$.reducer}),G({key:$.name,saga:X}),{actions:$.actions}).actions,c=Object(i.d)(Z),l=Object(i.c)(),s=Object(m.g)();Object(r.useEffect)((function(){""!==c.jwt&&s.push("/allusers")}),[c.jwt]);var u=Object(i.d)(D);return r.createElement(r.Fragment,null,r.createElement("div",{className:"chat-background"},r.createElement("div",{className:"login-title"},r.createElement("div",null,"Welcome To ChatAsync - A Brand New Platform for your Communication")),r.createElement(S.a,{className:"login-card"},201===u.status&&r.createElement("div",{className:"success-code"},r.createElement("span",null,"Signup Successfull")),200!==c.error&&r.createElement("div",{className:"error-code"},r.createElement("span",null,"Invalid Cedentials")),r.createElement("form",{onSubmit:a((function(e){console.log(e),l(o.makeLogin({password:e.password,username:e.email}))})),noValidate:!0,className:"form-root"},r.createElement(N.a,{id:"standard-error-helper-text",label:"Email",type:"email",name:"email",inputRef:t({required:!0})}),r.createElement(N.a,{id:"standard-error-helper-text",label:"Password",name:"password",type:"password",inputRef:t({required:!0})}),r.createElement(C.a,{type:"submit",variant:"contained",color:"primary"},"Login"),r.createElement(C.a,{onClick:function(){s.push("/auth/signup")},variant:"contained",color:"primary"},"Sign up")))))}var te=t(305),ae=void 0,re=t(161),oe=t(28),ce=k.a.mark(le),ie=k.a.mark(se);function le(){var e,n,t,a;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(console.log("fetchUsers"),e=new Headers,""===(n=localStorage.getItem("token")||"")){r.next=12;break}return e.append("Authorization",n),r.next=7,fetch(A(F),{method:"GET",headers:e,redirect:"follow"});case 7:return t=r.sent,r.next=10,t.json();case 10:a=r.sent,console.log(a.map((function(e){return e.userName.replace("@","")})));case 12:case"end":return r.stop()}}),ce)}function se(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)(de.fetchusers.type,le);case 2:case"end":return e.stop()}}),ie)}var ue={messages:[],apicall:!1,chats:[],users:[],connectionCount:0},me=L({name:"userchats",initialState:ue,reducers:{someAction:function(e,n){},fetchusers:function(e){e.apicall=!0},addMessage:function(e,n){},addToMessage:function(e,n){var t=Object(oe.a)(e.messages);t.push(Object(re.a)({},n.payload.message)),e.messages=t},updateSelectorCount:function(e){e.connectionCount=1+e.connectionCount}}}),de=me.actions,pe=function(){return R({key:me.name,reducer:me.reducer}),G({key:me.name,saga:se}),{actions:me.actions}},fe=function(e){return e.userchats||ue},ge=Object(U.a)([fe],(function(e){return e})),he=Object(U.a)([fe],(function(e){return e.connectionCount}));function be(e){var n=Object(i.c)(),t=void 0===ae?(console.log("generating io client"),ae=Object(te.io)("https://".concat(T,":").concat(443))):ae,a=Object(r.useState)(10),o=Object(l.a)(a,2),c=o[0],s=(o[1],Object(r.useState)(!1)),u=Object(l.a)(s,2),m=u[0],d=(u[1],pe().actions),p=Object(i.d)(he),f=function e(){setTimeout((function(){if(void 0!==localStorage.getItem("roomId")&&null!==localStorage.getItem("roomId"))if(t.connected&&!m){p<1&&t.on("message",(function(e){var t=JSON.parse(e);console.log("Incoming Message",t),n(d.addToMessage({message:{message:t.message,time:t.time,from:t.from,to:t.to}}))}));var a="room1",r="";console.log(void 0!==localStorage.getItem("roomId"),null!==localStorage.getItem("roomId")),void 0!==localStorage.getItem("roomId")&&null!==localStorage.getItem("roomId")&&null!==(a=localStorage.getItem("roomId"))&&(r=a),t.emit("join_room",{room:r.replace("@",""),apikey:"hey"})}else e()}),5e3)};return Object(r.useEffect)((function(){f()}),[c]),console.debug("socket Handler"),r.createElement(r.Fragment,null)}var xe=t(306),ye=t(307),ve=t(624),we=t(623),Ee=t(313),je=t(628),ke=["Update Profile","Logout"];function Oe(e){var n=r.useState(null),t=Object(l.a)(n,2),a=t[0],o=t[1],c=Boolean(a),i=function(){o(null)};return r.createElement(r.Fragment,null,r.createElement("div",{className:"sidebar-lower"},r.createElement(we.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.createElement(ve.a,{className:"sidebar-icons",size:"30px",color:"#dbdbdb"})),r.createElement(Ee.a,{id:"long-menu",anchorEl:a,keepMounted:!0,open:c,onClose:i,PaperProps:{style:{maxHeight:216,width:"20ch"}}},ke.map((function(e){return r.createElement(je.a,{key:e,selected:"Update Profile"===e,onClick:i},e)})))))}function Se(e){var n=Object(m.g)();return r.createElement(r.Fragment,null,r.createElement(S.a,{className:"sidebar"},r.createElement("div",{className:"sidebar-upper"},r.createElement("div",{className:"chatAsync-logo"},r.createElement(xe.a,{size:"45px",color:"#ffffff"})),r.createElement(ye.a,{className:"sidebar-icons",size:"30px",color:"#dbdbdb",onClick:function(){n.push("/allusers")}})),r.createElement(Oe,null)))}var Ne=t(625),Ce=Object(Ne.a)({root:{backgroundColor:"white",width:"15%"}}),Ie=Object(U.a)([function(e){return e.acitvechatcomponent||ze}],(function(e){return e})),Pe=k.a.mark(Fe),Te=k.a.mark(Ae);function Fe(){var e,n,t;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(e=new Headers).append("Content-Type","application/x-www-form-urlencoded"),a.next=4,Object(W.b)(Ie);case 4:return n=a.sent,(t=new URLSearchParams).append("topic",n.topic.replace("@","")),t.append("from",n.from.replace("@","")),t.append("message",JSON.stringify({from:n.from,to:n.topic,message:n.message,time:n.time})),a.next=11,fetch((r="/message/send-message","https://".concat(T,":").concat(443).concat(r)),{method:"POST",headers:e,body:t,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return console.log(e)})).catch((function(e){return console.log("error",e)}));case 11:case"end":return a.stop()}var r}),Pe)}function Ae(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)(Me.sendMessage.type,Fe);case 2:case"end":return e.stop()}}),Te)}var ze={from:"",message:"",time:"",topic:""},Le=L({name:"acitvechatcomponent",initialState:ze,reducers:{sendMessage:function(e,n){e.from=n.payload.from,e.message=n.payload.message,e.time=(new Date).toTimeString(),e.topic=n.payload.topic}}}),Me=Le.actions;function Re(e){var n=Ce(),t=Object(m.h)(),a=t.name,o=t.roomid,c=(R({key:Le.name,reducer:Le.reducer}),G({key:Le.name,saga:Ae}),{actions:Le.actions}).actions,s=Object(i.c)(),u=r.useState(""),d=Object(l.a)(u,2),p=d[0],f=d[1],g=Object(i.d)(ge),h=Object(r.useState)([]),b=Object(l.a)(h,2),x=b[0],y=b[1];return Object(r.useEffect)((function(){var e=g.messages.filter((function(e){var n=localStorage.getItem("roomId")||"";return e.to===n&&e.from===o||e.from===n&&e.to===o}));y(e),console.log(x)}),[g]),Object(r.useEffect)((function(){var e=document.getElementById("scroll-body");e.scrollTop=e.scrollHeight}),[x]),r.createElement(r.Fragment,null,r.createElement("div",{className:"layout"},r.createElement("div",{className:"header"},r.createElement("img",{src:"https://image.flaticon.com/icons/png/512/147/147144.png",className:"photo"}),r.createElement("div",{className:"content"},r.createElement("div",{className:"name"},a))),r.createElement("div",{className:"chat-body",id:"scroll-body"},x.map((function(e,n){return r.createElement(S.a,{key:n,className:e.from===o?"left":"right"},r.createElement("div",{className:"message "},e.message),r.createElement("div",{className:"time"},e.time))}))),r.createElement("div",{className:"textbox"},r.createElement(N.a,{variant:"outlined",className:"textinput",onChange:function(e){return f(e.target.value)}}),r.createElement(C.a,{className:n.root,onClick:function(){console.log({message:p,from:localStorage.getItem("roomId")||"",topic:o}),s(c.sendMessage({message:p,from:localStorage.getItem("roomId")||"",topic:o}))}},"Send"))))}function Ge(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"layout"},r.createElement(Se,null),r.createElement("div",{className:"active-chat"},r.createElement(Re,null))))}var He=k.a.mark(Be),qe=k.a.mark(Je);function Be(){var e,n,t,a,r;return k.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(console.log("fetchUsers"),e=new Headers,""===(n=localStorage.getItem("token")||"")){o.next=17;break}return e.append("Authorization",n),o.next=7,fetch(A(F),{method:"GET",headers:e,redirect:"follow"});case 7:return t=o.sent,o.next=10,t.json();case 10:return a=o.sent,o.next=13,a.map((function(e){return{roomId:e.userName,name:e.name||"no-name"}}));case 13:return r=o.sent,o.next=16,Object(W.a)(Ve.updateusers({users:r}));case 16:console.log(r);case 17:case"end":return o.stop()}}),He)}function Je(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.c)(Ve.fetchusers.type,Be);case 2:case"end":return e.stop()}}),qe)}var Ue={apicall:!1,users:[]},De=L({name:"allusers",initialState:Ue,reducers:{fetchusers:function(e){e.apicall=!0},updateusers:function(e,n){e.users=n.payload.users,e.apicall=!1}}}),Ve=De.actions,We=Object(U.a)([function(e){return e.allusers||Ue}],(function(e){return e}));function Ze(e){pe().actions;var n=Object(i.d)(We),t=Object(m.g)();return r.createElement(r.Fragment,null,r.createElement(S.a,{className:"chat-rooms-layout"},r.createElement("div",{className:"chat-title"},"All Users"),r.createElement("div",{className:"chat-rooms-individual"},n.users.map((function(e,n){return r.createElement("div",{className:"chat-room-element",key:n,onClick:function(){var n,a;n=e.roomId,a=e.name,t.push("/chats/".concat(a,"/").concat(n))}},r.createElement("img",{src:"https://image.flaticon.com/icons/png/512/147/147144.png",className:"chat-room-element-img"}),r.createElement("div",{className:"chat-room-element-content"},r.createElement("span",{className:"name"},e.name)))})))))}function _e(e){var n=(R({key:De.name,reducer:De.reducer}),G({key:De.name,saga:Je}),{actions:De.actions}).actions,t=Object(i.c)(),a=Object(r.useState)(0),o=Object(l.a)(a,2),c=o[0];o[1];return Object(r.useEffect)((function(){t(n.fetchusers())}),[c]),r.createElement(r.Fragment,null,r.createElement("div",{className:"layout"},r.createElement(Se,null),r.createElement("div",{className:"chat-rooms"},r.createElement(Ze,null))))}function Ke(){var e=Object(x.a)().i18n,n=localStorage.getItem("token"),t=(localStorage.getItem("refresh_token"),!1);null!==n&&""!==n&&(t=!0),console.log({isLoggedIn:t,tokenNull:null!==n,tokenEmpty:""!==n});var a=Object(r.useState)(0),o=Object(l.a)(a,2);o[0],o[1];return r.createElement(r.Fragment,null,r.createElement(be,null),r.createElement(u.a,null,r.createElement(s.a,{titleTemplate:"%s - React Boilerplate",defaultTitle:"Chat Async",htmlAttributes:{lang:e.language}},r.createElement("meta",{name:"description",content:"An Application for Messaging Friends"})),r.createElement(m.d,null,r.createElement(m.b,{exact:!0,path:"/",component:h}),r.createElement(m.b,{exact:!0,path:"/auth/login"},r.createElement(v,{isGuest:!t,Component:ne})),r.createElement(m.b,{path:"/auth/signup"},r.createElement(v,{isGuest:!t,Component:V})),r.createElement(m.b,{path:"/auth/forgot-password"},r.createElement(v,{isGuest:!t,Component:E})),r.createElement(m.b,{path:"/auth/reset-password"},r.createElement(v,{isGuest:!t,Component:w})),r.createElement(m.b,{path:"/chats/:name/:roomid"},r.createElement(y,{isProtected:t,Component:Ge})),r.createElement(m.b,{path:"/allusers"},r.createElement(y,{isProtected:t,Component:_e})),r.createElement(m.b,{component:b})),r.createElement(f,null)))}var Qe=t(315),Xe=t(42);function Ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(Xe.c)(Object(re.a)({},e))}var $e=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,630)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),o(e),c(e)}))},en=t(314),nn=t(131),tn=t(312),an=t(199),rn={},on={en:{translation:an}};!function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rn,a=arguments.length>2?arguments[2]:void 0;Object.keys(n).forEach((function(r){var o=a?"".concat(a,".").concat(r):r;"object"===typeof n[r]?(t[r]={},e(n[r],t[r],o)):t[r]=o}))}(an);en.a.use(nn.e).use(tn.a).init({resources:on,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}});var cn=function(){var e=Object(Qe.a)({}),n=e.run,t=[e],a=[Object(M.a)({createReducer:Ye,runSaga:n})];return Object(z.a)({reducer:Ye(),middleware:[].concat(Object(oe.a)(Object(z.c)()),t),devTools:!1,enhancers:a})}(),ln=document.getElementById("root");c.render(r.createElement(i.a,{store:cn},r.createElement(s.b,null,r.createElement(r.StrictMode,null,r.createElement(Ke,null)))),ln),$e()}},[[588,1,2]]]);