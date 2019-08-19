(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,a){e.exports=a(233)},161:function(e,t,a){},230:function(e,t){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=a(12),i=a(138),s=a(41),u=a(143),m=a(296),d=(a(161),a(15)),p=a.n(d),f=a(23),v="ADD_MESSAGE",E=a(129),b=a.n(E).a.create({baseURL:"https://simple-chat-apix.herokuapp.com"}),g=function(e){return{type:"NEW_MESSAGE",payload:e}},h=function(e){return{type:"ADD_CHANNEL",payload:e}},y=function(e){return{type:"ADD_SERVER",payload:e}},O=function(e){return{type:"CHANGE_SERVER",payload:e}},j=function(e){return{type:"CHANGE_channel",payload:e}},N=function(e){return function(){var t=Object(f.a)(p.a.mark(function t(a){var n,r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="/user/data?userId=".concat(e),t.next=3,b.get(n);case 3:r=t.sent,a({type:"GET_INITIAL_DATA",payload:r.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},C=function(e){return{type:"SIGN_IN",payload:e}},S=function(e){return{type:"SIGN_OUT",payload:e}},x=a(26),k=Object(x.b)(),w=a(7),I=a(298),D=a(270),A=a(271),T=a(264),_=a(302),M=a(268);function R(e){var t=Object(o.c)(function(e){return e.chat}),a=Object.keys(t.servers),n=Object(o.b)(),c=e.setModalVisible,l=e.setModalType;return r.a.createElement("div",{className:"servers-container"},r.a.createElement(T.a,null,a.map(function(e){return r.a.createElement(_.a,{title:e.split("-")[0],key:e,placement:"right",className:"tooltip"},r.a.createElement(M.a,{className:"server-icon",onClick:function(){return function(e){n(O(e))}(e)}},r.a.createElement(D.a,null)))}),r.a.createElement(_.a,{title:"Create Server",key:"create-server",placement:"right",className:"tooltip"},r.a.createElement(M.a,{className:"server-icon",onClick:function(){return l("server-create-join"),void c(!0)}},r.a.createElement(A.a,null)))))}var P=a(272),V=a(274),G=a(277),L=a(234),J=a(273),B=a(60),K=a(275),H=a(276),W=a(278),U=a(279),z=a(144),F=a(280);function X(e){var t=Object(o.c)(function(e){return e.chat}),a=Object.keys(t.servers[t.activeServer]),c=t.activeServer,l=Object(o.b)(),i=Object(o.c)(function(e){return e.user}),s=e.setDrawerVisible,u=e.setModalVisible,m=e.setModalType,d=e.handleSnackMessage,v=Object(n.useState)(null),E=Object(w.a)(v,2),g=E[0],h=E[1],y=Object(n.useState)(null),O=Object(w.a)(y,2),N=O[0],C=O[1],x=Object(n.useState)(!1),k=Object(w.a)(x,2),I=k[0],D=k[1];Object(n.useEffect)(function(){function e(){return(e=Object(f.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.split("-")[1],e.next=3,b.get("/server/admin?serverId=".concat(t,"&userId=").concat(i.userId));case 3:a=e.sent,D(a.data);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[c]);var A=function(e){m(e),u(!0)},R=function(e,t){"server"===t?h(e.currentTarget):"channel"===t&&C(e.currentTarget)},X=function(){h(null),C(null)};return r.a.createElement("div",{className:"channels-container"},r.a.createElement(T.a,{className:"channel-list"},r.a.createElement(L.a,{className:"title-container"},c.split("-")[0],I?r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{title:"Server Settings",key:"server-settings",placement:"right",className:"tooltip"},r.a.createElement(M.a,{onClick:function(e){return R(e,"server")}}," ",r.a.createElement(P.a,null)," "))):null),a.map(function(e,t){return r.a.createElement(J.a,{direction:"right",in:!0,timeout:200*(t+1),key:e+c},r.a.createElement(L.a,{onClick:function(t){return function(e){l(j(e)),"undefined"!==typeof s&&s(!1)}(e)},button:!0,className:"channel-item"},r.a.createElement(B.a,{variant:"body1"},r.a.createElement("i",{className:"channel-hashtag"},"#"),e.split("-")[0].toLowerCase()),I?r.a.createElement(_.a,{title:"Server Settings",key:"server-settings",placement:"right",className:"tooltip"},r.a.createElement(M.a,{onClick:function(e){return R(e,"channel")}}," ",r.a.createElement(V.a,{className:"channel-settings"})," ")):null))})),r.a.createElement("div",{className:"user-options"},r.a.createElement(L.a,{className:"user-info"},r.a.createElement(K.a,null,r.a.createElement(H.a,null,r.a.createElement(G.a,null))),r.a.createElement(W.a,{primary:i.userName}),r.a.createElement(U.a,{onClick:function(){localStorage.clear("user"),l(S(i.userId))}},"Sign out"))),r.a.createElement(z.a,{id:"server-settings-menu",anchorEl:g,open:Boolean(g),onClick:X,onClose:X},r.a.createElement(F.a,null," Server Id - ",c.split("-")[1]," "),r.a.createElement(F.a,{onClick:function(){return A("server-rename")}}," Change Server Name "),r.a.createElement(F.a,{onClick:function(){return A("channel-create")}}," Add Channel ")),r.a.createElement(z.a,{id:"channel-settings-menu",anchorEl:N,open:Boolean(N),onClick:X,onClose:X},r.a.createElement(F.a,{onClick:function(){return A("channel-rename")}}," Change Channel Name "),r.a.createElement(F.a,{onClick:function(){return e=function(){return A("channel-delete")},void(1===a.length?d("Please delete the server if only 1 channel"):e());var e}}," Delete Channel ")))}var Y=a(281),q=a(282),Q=a(283),Z=a(284),$=a(285),ee=a(297),te=a(146),ae=a(286),ne=a(287);function re(e){var t=Object(o.c)(function(e){return e.user}).userId,a=Object(o.c)(function(e){return e.chat}),c=a.activeServer,l=a.activeChannel,i=Object(o.b)(),s=e.handleSnackMessage,u=e.modalType,m=Object(n.useState)(!0),d=Object(w.a)(m,2),v=d[0],E=d[1],g=Object(n.useState)("left"),O=Object(w.a)(g,2),j=O[0],N=O[1],C=Object(n.useState)(!1),S=Object(w.a)(C,2),x=S[0],k=S[1],I=Object(n.useState)("left"),D=Object(w.a)(I,2),A=D[0],T=D[1],_=Object(n.useState)(!1),M=Object(w.a)(_,2),R=M[0],P=M[1],V=Object(n.useState)("left"),G=Object(w.a)(V,2),L=G[0],K=G[1],H=Object(n.useState)(""),W=Object(w.a)(H,2),z=W[0],F=W[1],X=Object(n.useState)(""),re=Object(w.a)(X,2),ce=re[0],le=re[1],oe=Object(n.useState)(""),ie=Object(w.a)(oe,2),se=ie[0],ue=ie[1],me=function(){var e=Object(f.a)(p.a.mark(function e(t,a){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("/server/create?serverName=".concat(t,"&userId=").concat(a));case 3:n=e.sent,i(y(n.data)),r="Server ".concat(n.data.server.split("-")[0]," with ID ").concat(n.data.server.split("-")[1]," created"),s(r,!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(e.t0.response.data,!1);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}(),de=function(){var e=Object(f.a)(p.a.mark(function e(t,a){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("/server/join?serverId=".concat(t,"&userId=").concat(a));case 3:n=e.sent,s(n.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}(),pe=function(){var e=Object(f.a)(p.a.mark(function e(a,n){var r,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("/channel/create?channelName=".concat(a,"&server=").concat(n,"&userId=").concat(t));case 3:r=e.sent,i(h(r.data)),c="Server ".concat(r.data.channel.split("-")[0]," with ID ").concat(r.data.channel.split("-"[1])," created"),s(c,!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s(e.t0.response.data,!1);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,a){return e.apply(this,arguments)}}(),fe=function(){var e=Object(f.a)(p.a.mark(function e(a,n){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("/server/rename?serverName=".concat(a,"&serverId=").concat(n,"&userId=").concat(t));case 3:r=e.sent,s(r.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}(),ve=function(){var e=Object(f.a)(p.a.mark(function e(a,n){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.post("/channel/rename?channelName=".concat(a,"&channelId=").concat(n,"&serverId=").concat(c.split("-")[1],"&userId=").concat(t));case 3:r=e.sent,s(r.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(f.a)(p.a.mark(function e(a,n){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.delete("/channel/delete?channelId=".concat(n,"&serverId=").concat(c.split("-")[1],"&userId=").concat(t));case 3:r=e.sent,s(r.data,!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0.response.data,!1);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}(),be=function(e,t){"Enter"===e.key&&t()};return"server-create-join"===u?r.a.createElement(te.a,{className:"container-prompt"},r.a.createElement(J.a,{direction:j,in:v,timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Another server? Wow you're popular!")),r.a.createElement(Y.a,{item:!0,sm:6,xs:12},r.a.createElement(q.a,{className:"grid-card"},r.a.createElement(Q.a,{onClick:function(){return N("right"),K("left"),k(!0),void E(!1)}},r.a.createElement(Z.a,null,r.a.createElement(B.a,{variant:"h5",color:"primary",gutterBottom:!0},"Create"),r.a.createElement(B.a,{variant:"body1",paragraph:!0},"Create a server and invite all your buddies."),r.a.createElement($.a,null,r.a.createElement(ae.a,{className:"modal-card-icon"})),r.a.createElement(U.a,{variant:"contained",color:"primary",className:"modal-button"},"Join a server"))))),r.a.createElement(Y.a,{item:!0,sm:6,xs:12},r.a.createElement(q.a,{className:"grid-card"},r.a.createElement(Q.a,{onClick:function(){return N("right"),T("left"),P(!0),void E(!1)}},r.a.createElement(Z.a,null,r.a.createElement(B.a,{variant:"h5",color:"secondary",gutterBottom:!0},"Join"),r.a.createElement(B.a,{variant:"body1",paragraph:!0},"Join a friends server and pwn some noobs!"),r.a.createElement($.a,null,r.a.createElement(ne.a,{className:"modal-card-icon"})),r.a.createElement(U.a,{variant:"contained",color:"secondary",className:"modal-button"},"Join a server"))))))),r.a.createElement(J.a,{direction:A,in:x,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Create a Server!")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(B.a,{variant:"body1",paragraph:!0}," Enter a Server Name to create a server and get access to unlimited chat channels! "),r.a.createElement(ee.a,{id:"create-server-field",label:"Server Name",value:z,onChange:function(e){return F(e.target.value)},onKeyPress:function(e){return be(e,function(){return me(z,t)})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement(U.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return me(z,t)}},"Create Server")))),r.a.createElement(J.a,{direction:L,in:R,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Join a Server!")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(B.a,{variant:"body1",paragraph:!0}," Enter a the Server Id provided by your friend and start chatting right now!  "),r.a.createElement(ee.a,{id:"join-server-field",label:"Server Id",value:ce,onChange:function(e){return le(e.target.value)},onKeyPress:function(e){return be(e,function(){return de(ce,t)})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement(U.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return de(ce,t)}},"Join Server"))))):"channel-create"===u?r.a.createElement(te.a,{className:"container-prompt"},r.a.createElement(J.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Create a Channel!")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(B.a,{variant:"body1",paragraph:!0}," Enter a Channel Name for your new channel and start chatting right now!  "),r.a.createElement(ee.a,{id:"create-channel-field",label:"Channel Name",value:se,onChange:function(e){return ue(e.target.value)},onKeyPress:function(e){return be(e,function(){return pe(se,c)})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement(U.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return pe(se,c)}},"Create Channel"))))):"server-rename"===u?r.a.createElement(te.a,{className:"container-prompt"},r.a.createElement(J.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Rename Server")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(B.a,{variant:"body1",paragraph:!0}," Enter a new Server Name for Server - ",c.split("-")[0]," "),r.a.createElement(ee.a,{id:"create-channel-field",label:"Channel Name",value:z,onChange:function(e){return F(e.target.value)},onKeyPress:function(e){return be(e,function(){return fe(z,c.split("-")[1])})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement(U.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return fe(z,c.split("-")[1])}},"Rename Server"))))):"channel-rename"===u?r.a.createElement(te.a,{className:"container-prompt"},r.a.createElement(J.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Rename Chanel")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(B.a,{variant:"body1",paragraph:!0}," Enter a new Channel Name for Channel - ",l.split("-")[0]," "),r.a.createElement(ee.a,{id:"create-channel-field",label:"Channel Name",value:se,onChange:function(e){return ue(e.target.value)},onKeyPress:function(e){return be(e,function(){return ve(se,l.split("-")[1])})},margin:"dense",variant:"outlined",autoComplete:"off"})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement(U.a,{className:"modal-button",variant:"contained",color:"primary",onClick:function(){return ve(se,l.split("-")[1])}},"Rename Channel"))))):"channel-delete"===u?r.a.createElement(te.a,{className:"container-prompt"},r.a.createElement(J.a,{direction:"left",in:!0,mountOnEnter:!0,unmountOnExit:!0,timeout:500},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Rename Server")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(B.a,{variant:"body1",paragraph:!0}," Are you sure you want to delete - ",l.split("-")[0]," ")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement(U.a,{className:"modal-button",variant:"contained",color:"primary",style:{backgroundColor:"green",marginRight:"8px"},onClick:function(){return Ee(se,l.split("-")[1])}},"Yes"),r.a.createElement(U.a,{className:"modal-button",variant:"contained",color:"primary",style:{backgroundColor:"red",marginLeft:"8px"},onClick:function(){return s("Not deleting channel",!1)}},"No"))))):void 0}var ce=a(301);function le(e){var t=e.content,a=e.visible,n=e.setVisible;return r.a.createElement(ce.a,{open:a,message:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},onEntered:function(){setTimeout(function(){n(!1)},2500)}})}function oe(e){var t=Object(o.c)(function(e){return e.user}),a=Object(o.b)(),c=e.setDrawerVisible,l=Object(n.useState)(!1),i=Object(w.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)(null),d=Object(w.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(""),E=Object(w.a)(v,2),b=E[0],g=E[1],h=Object(n.useState)(!1),y=Object(w.a)(h,2),O=y[0],j=y[1],C=function(e,n){null!==e&&(u(!1),j(!0),g(e),n&&a(N(t.userId)))};return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement(R,{setModalVisible:u,setModalType:f,handleSnackMessage:C}),r.a.createElement(X,{setDrawerVisible:c,setModalVisible:u,setModalType:f,handleSnackMessage:C}),r.a.createElement(I.a,{open:s,"aria-labelledby":"server create modal","aria-describedby":"create a server",className:"modal-wrapper",onClose:function(){return u(!1)}},r.a.createElement(re,{handleSnackMessage:C,modalType:p})),r.a.createElement(le,{visible:O,setVisible:j,content:b}))}var ie=a(290),se=a(291),ue=a(135),me=a.n(ue),de=a(289);Object(de.a)(function(e){return{card:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",width:250,background:"#2f3136"},cardHeader:{background:"#202225",width:"100%"},image:{marginTop:"1em",marginBottom:"8px"},cardInput:{padding:"1em"},input:{height:"38px"}}});function pe(){var e,t,a=Object(o.c)(function(e){return e.chat}),c=a.activeServer,l=a.activeChannel,i=Object(n.useState)(!1),s=Object(w.a)(i,2),u=(s[0],s[1]),m=Object(n.useState)(12),d=Object(w.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(!1),E=Object(w.a)(v,2),b=E[0],g=E[1],h=Object(n.useState)(null),y=Object(w.a)(h,2),O=(y[0],y[1]),j=Object(n.useState)(null),N=Object(w.a)(j,2),C=(N[0],N[1]);Object(n.useEffect)(function(){b?t.scroll(0,56):e.scrollIntoView({block:"end",behavior:"smooth"})}),Object(n.useEffect)(function(){e.scrollIntoView({block:"end",behavior:"smooth"})},[]);var S=function(e){return e.split("```")[1]},x=function(e,t){O(t),u(!0),C(e.currentTarget)},k=a.servers[c][l].length;return r.a.createElement("div",{className:"messages-container",onScroll:function(e){return function(e){var t=e.target;t.scrollTop>100&&g(!1),0===t.scrollTop&&k>p&&setTimeout(function(){g(!0),f(p+12>k?k:p+12)},400)}(e)},ref:function(e){return t=e}},k>=p?r.a.createElement("div",{className:"progress-container"},r.a.createElement(ie.a,{color:"primary"})):null,r.a.createElement(T.a,null,a.servers[c][l].slice(k-p,k).map(function(e,t){return null!==e.msg?r.a.createElement(se.a,{in:!0,timeout:500},r.a.createElement(L.a,{className:"message",key:t},r.a.createElement(K.a,null,r.a.createElement(H.a,null,r.a.createElement("img",{className:"user",onClick:function(t){return x(t,e.from)},src:"/React-Discord-Clone/user.png",alt:"user icon",height:"48"}))),function(e){return!(!e.startsWith("```")||!e.endsWith("```"))}(e.msg)?r.a.createElement(W.a,{primary:r.a.createElement("div",{className:"user",onClick:function(t){return x(t,e.from)}},e.from),secondary:r.a.createElement(me.a,{codeString:S(e.msg)}),className:"message-text"}):r.a.createElement(W.a,{primary:r.a.createElement("div",{className:"user",onClick:function(t){return x(t,e.from)}},e.from),secondary:e.msg,className:"message-text"}))):null})),r.a.createElement("div",{ref:function(t){return e=t}}))}var fe=a(288),ve=(a(201),a(142)),Ee=a(136),be=a.n(Ee);function ge(e){var t=Object(o.c)(function(e){return e.chat}),a=t.activeServer,c=t.activeChannel,l=Object(o.c)(function(e){return e.user}).userName,i=Object(o.b)(),s=Object(n.useState)(""),u=Object(w.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(!1),f=Object(w.a)(p,2),v=f[0],E=f[1];function b(e){var t;"Enter"!==e.key||e.shiftKey||""!==(t={server:a,channel:c,from:l,msg:m}).msg.trim()&&(i(g(t)),d(""))}return window.onclick=function(e){String(e.target.className).includes("send-message-emoji-menu")&&E(!1)},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"send-message-border"}),r.a.createElement("div",{className:"send-message-container"},r.a.createElement(fe.a,{"aria-label":"empty textarea",placeholder:"Message  #".concat(c.split("-")[0]),className:"message-text-area",value:m,onChange:function(e){return function(e){"\n"!==e.target.value&&d(e.target.value)}(e)},onKeyPress:function(e){return b(e)}}),r.a.createElement(be.a,{className:"send-message-emoji-button",onClick:function(){return E(!v)}})),r.a.createElement("div",{className:v?"send-message-emoji-menu show":"send-message-emoji-menu hide"},r.a.createElement("div",{className:"emoji-wrapper"},r.a.createElement(ve.a,{set:"emojione",onSelect:function(e){return function(e){d(m+e.native),E(!1)}(e)}}))))}var he=a(292),ye=a(293),Oe=a(137),je=a.n(Oe),Ne=a(300),Ce=a(294),Se=a(55);function xe(e){var t=Object(o.c)(function(e){return e.chat}),a=Object.keys(t.servers),c=Object.keys(t.servers[t.activeServer]),l=t.activeChannel,i=Object(n.useState)(!1),s=Object(w.a)(i,2),u=s[0],m=s[1];return r.a.createElement(he.a,{position:"static"},r.a.createElement(ye.a,{className:"navbar"},r.a.createElement(M.a,{edge:"start",color:"inherit","aria-label":"menu",className:"menu-burger-button",onClick:function(){return m(!0)}},r.a.createElement(je.a,null)),r.a.createElement(Ne.a,{anchor:"left",open:u,onClose:function(){return m(!1)},onOpen:function(){return m(!0)}},r.a.createElement(oe,{channels:c,servers:a,setDrawerVisible:m})),r.a.createElement(B.a,{variant:"h6"}," ",r.a.createElement("i",{className:"channel-hashtag"},"#"),l.split("-")[0].toLowerCase()," "),r.a.createElement(Ce.a,{href:"https://github.com/ericellb/React-Discord-Clone",target:"_blank",style:{color:"white"}},r.a.createElement(_.a,{title:"Check me out on Github!",className:"tooltip"},r.a.createElement(M.a,null,r.a.createElement(Se.a,null,r.a.createElement("path",{d:"M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"})))))))}function ke(){var e=Object(o.c)(function(e){return e.user}),t=Object(o.b)();return Object(n.useEffect)(function(){e.isSignedIn?t(N(e.userId)):k.push("/")},[t,e.isSignedIn,e.userId]),window.addEventListener("resize",function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}),r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"sidebar-grid"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"messages-grid"},r.a.createElement(xe,null),r.a.createElement(pe,null)),r.a.createElement("div",{className:"send-messages-grid"},r.a.createElement(ge,null)))}var we=a(299),Ie=a(295);function De(){var e=Object(o.b)(),t=Object(n.useState)(!0),a=Object(w.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)("left"),s=Object(w.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(!1),v=Object(w.a)(d,2),E=v[0],g=v[1],h=Object(n.useState)("left"),y=Object(w.a)(h,2),O=y[0],j=y[1],N=Object(n.useState)(!1),S=Object(w.a)(N,2),x=S[0],I=S[1],D=Object(n.useState)("left"),A=Object(w.a)(D,2),T=A[0],_=A[1],R=Object(n.useState)(""),P=Object(w.a)(R,2),V=P[0],L=P[1],K=Object(n.useState)(!1),H=Object(w.a)(K,2),W=H[0],z=H[1],F=Object(n.useState)(!1),X=Object(w.a)(F,2),ae=X[0],re=X[1],ce=Object(n.useState)(""),le=Object(w.a)(ce,2),oe=le[0],ie=le[1],se=Object(n.useState)(!1),ue=Object(w.a)(se,2),me=ue[0],de=ue[1],pe=Object(n.useState)(!1),fe=Object(w.a)(pe,2),ve=fe[0],Ee=fe[1],be=Object(n.useState)(!1),ge=Object(w.a)(be,2),he=ge[0],ye=ge[1],Oe=function(){m("left"),l(!0),g(!1),j("right"),I(!1),_("right")},je=function(e,t){"Enter"===e.key&&t()},Ne=function(e,t,a){var n=!1;""===e?(z(!0),re("Name cannot be empty"),n=!0):z(!1),t.length<6?(de(!0),Ee("Passwords must be 6 characters"),n=!0):de(!1),n||a()},Ce=function(){var t=Object(f.a)(p.a.mark(function t(a,n){var r,c;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.post("/user/create?userName=".concat(a,"&userPass=").concat(n));case 3:r=t.sent,he&&localStorage.setItem("user",JSON.stringify(r.data)),e(C(r.data)),k.push("/dashboard"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),(c=t.t0.response.data)&&(z(!0),re(c));case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}(),Se=function(){var t=Object(f.a)(p.a.mark(function t(a,n){var r,c;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.get("/user/login?userName=".concat(a,"&userPass=").concat(n));case 3:r=t.sent,he&&localStorage.setItem("user",JSON.stringify(r.data)),e(C(r.data)),k.push("/dashboard"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),(c=t.t0.response.data)&&(z(!0),re(c),de(!0),Ee(c));case 13:case"end":return t.stop()}},t,null,[[0,9]])}));return function(e,a){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"auth-wrapper"},r.a.createElement(te.a,{className:"container-prompt"},r.a.createElement(J.a,{direction:u,in:c,timeout:350,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(Y.a,{container:!0,spacing:3,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,sm:12,xs:12},r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Create an account, or sign in!")),r.a.createElement(Y.a,{item:!0,sm:6,xs:12},r.a.createElement(q.a,{className:"grid-card"},r.a.createElement(Q.a,{onClick:function(){return j("left"),m("right"),g(!0),void l(!1)}},r.a.createElement(Z.a,null,r.a.createElement(B.a,{variant:"h5",color:"primary",gutterBottom:!0},"Create"),r.a.createElement(B.a,{variant:"body1",paragraph:!0},"Create a new account."),r.a.createElement($.a,null,r.a.createElement(ne.a,{className:"modal-card-icon"})),r.a.createElement(U.a,{variant:"contained",color:"primary"},"Create"))))),r.a.createElement(Y.a,{item:!0,sm:6,xs:12},r.a.createElement(q.a,{className:"grid-card"},r.a.createElement(Q.a,{onClick:function(){return _("left"),m("right"),I(!0),void l(!1)}},r.a.createElement(Z.a,null,r.a.createElement(B.a,{variant:"h5",color:"secondary",gutterBottom:!0},"Login"),r.a.createElement(B.a,{variant:"body1",paragraph:!0},"Sign in to an existing account."),r.a.createElement($.a,null,r.a.createElement(G.a,{className:"modal-card-icon"})),r.a.createElement(U.a,{variant:"contained",color:"secondary"},"Login "))))))),r.a.createElement(J.a,{direction:O,in:E,timeout:350,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(Y.a,{container:!0,spacing:1,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(M.a,{onClick:Oe},r.a.createElement(Ie.a,null)),r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Create Account")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"username",label:"Username",values:V,error:W,helperText:ae,onChange:function(e){return L(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return je(e,function(){return Ne(V,oe,function(){return Ce(V,oe)})})}})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"password",label:"Password",type:"password",values:oe,error:me,helperText:ve,onChange:function(e){return ie(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return je(e,function(){return Ne(V,oe,function(){return Ce(V,oe)})})}})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement("div",null,"Remember Me ",r.a.createElement(we.a,{value:he,onChange:function(e){return ye(e.target.checked)}})),r.a.createElement(U.a,{variant:"contained",color:"primary",onClick:function(){return Ne(V,oe,function(){return Ce(V,oe)})}},"Create")))),r.a.createElement(J.a,{direction:T,in:x,timeout:350,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(Y.a,{container:!0,spacing:2,justify:"center",alignItems:"center"},r.a.createElement(Y.a,{item:!0,xs:12},r.a.createElement(M.a,{onClick:Oe},r.a.createElement(Ie.a,null)),r.a.createElement(B.a,{variant:"h5",color:"primary",align:"center"},"Login Account")),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"username",label:"Username",values:V,error:W,helperText:ae,onChange:function(e){return L(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return je(e,function(){return Ne(V,oe,function(){return Se(V,oe)})})}})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-textfield"},r.a.createElement(ee.a,{id:"password",label:"Password",type:"password",values:oe,error:me,helperText:ve,onChange:function(e){return ie(e.target.value)},margin:"dense",autoComplete:"off",variant:"outlined",onKeyPress:function(e){return je(e,function(){return Ne(V,oe,function(){return Se(V,oe)})})}})),r.a.createElement(Y.a,{item:!0,xs:12,className:"grid-button"},r.a.createElement("div",null,"Remember Me ",r.a.createElement(we.a,{vale:he,onChange:function(e){return ye(e.target.checked)}})),r.a.createElement(U.a,{className:"modal-login-button",variant:"contained",color:"primary",onClick:function(){return Ne(V,oe,function(){return Se(V,oe)})}},"Login"))))))}var Ae=function(){var e=Object(o.b)();return r.a.createElement(m.a,{theme:Te},r.a.createElement(i.a,null,function(){var t=JSON.parse(localStorage.getItem("user"));t&&(e(C(t)),k.push("/dashboard"))}(),r.a.createElement(s.a,{path:"/dashboard",exact:!0,component:ke}),r.a.createElement(s.a,{path:"/",exact:!0,component:De})))},Te=Object(u.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"14px",backgroundColor:"black"}},MuiSnackbarContent:{root:{backgroundColor:"#202225",color:"white"}},MuiAppBar:{colorPrimary:{backgroundColor:"#36393E",position:"absolute"}}},palette:{type:"dark",primary:{main:"#7289da"},secondary:{main:"#3ca374"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600}}),_e=a(39),Me=a(140),Re=a(141),Pe=a.n(Re);function Ve(e,t,a){return t.on(e,function(e){"message"===e.type&&a.dispatch({type:v,payload:e.payload})})}var Ge,Le=a(33),Je=a(75),Be=a(22),Ke={servers:{"Default-FANfDprXmt":{"general-0m5vBsRnfd":[],"gaming-p9DnvvrfWo":[],"programming-aRoD4umYpb":[],"cooking-v88UngJkiD":[],"misc-uSje5DwUH0":[],"/b/-Ry06VYrX3x":[]}},activeServer:"Default-FANfDprXmt",activeChannel:"general-0m5vBsRnfd"},He={isSignedIn:!1,isAdmin:!1,userId:null,userName:null},We=Object(_e.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.payload),t.type){case v:var a=t.payload,n=a.server,r=a.channel,c=a.from,l=a.msg;return Object(Be.a)({},e,{servers:Object(Be.a)({},e.servers,Object(Le.a)({},n,Object(Be.a)({},e.servers[n],Object(Le.a)({},r,[].concat(Object(Je.a)(e.servers[n][r]),[{from:c,msg:l}])))))});case"ADD_CHANNEL":return Object(Be.a)({},e,{servers:Object(Be.a)({},e.servers,Object(Le.a)({},t.payload.server,Object(Be.a)({},e.servers[t.payload.server],Object(Le.a)({},t.payload.channel,[]))))});case"ADD_SERVER":return Object(Be.a)({},e,{servers:Object(Be.a)({},e.servers,Object(Le.a)({},t.payload.server,Object(Le.a)({},t.payload.channel,[])))});case"GET_INITIAL_DATA":return Object(Be.a)({},e,{servers:t.payload,activeServer:Object.keys(t.payload)[0],activeChannel:Object.keys(t.payload[Object.keys(t.payload)[0]])[0]});case"CHANGE_SERVER":return Object(Be.a)({},e,{activeServer:t.payload,activeChannel:Object.keys(e.servers[t.payload])[0]});case"CHANGE_channel":return Object(Be.a)({},e,{activeChannel:t.payload});default:return Object(Be.a)({},e)}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return console.log(t),Object(Be.a)({},e,{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName});case"SIGN_OUT":return Object(Be.a)({},e,{isSignedIn:!1,userId:null,userName:"anon"+Math.floor(100*Math.random(0))});default:return e}}}),Ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.d,ze=Object(_e.e)(We,Ue(Object(_e.a)(Me.a,(Ge="https://simple-chat-apix.herokuapp.com",function(e){var t=Pe()(Ge),a=Ve("default",t,e);return function(n){return function(r){if("NEW_MESSAGE"!==r.type)return"SIGN_IN"===r.type&&(t.emit("simple-chat-userId",r.payload.userId),a.off(),a=Ve(r.payload.userId,t,e)),n(r);t.emit("simple-chat-new-message",r.payload)}}}))));l.a.render(r.a.createElement(o.a,{store:ze},r.a.createElement(Ae,null)),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.eba65329.chunk.js.map