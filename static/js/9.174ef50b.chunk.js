(this["webpackJsonpjson-placeholder-web-site"]=this["webpackJsonpjson-placeholder-web-site"]||[]).push([[9],{428:function(e,s,r){e.exports={dialogs:"dialogs_dialogs__3dfl8",dialogsMonitor:"dialogs_dialogsMonitor__3Y_Aq",dialogsSending:"dialogs_dialogsSending__LH5ny",dialogsUsers:"dialogs_dialogsUsers__1HZKA",userMessages:"dialogs_userMessages__WCQYZ",messagesForm:"dialogs_messagesForm__3StNU",titeUserSendingMessage:"dialogs_titeUserSendingMessage__2DGaz",messagesMonitor:"dialogs_messagesMonitor__3K3C5",ownerMessage:"dialogs_ownerMessage__jS414",avatar:"dialogs_avatar__76oBM"}},452:function(e,s,r){"use strict";r.r(s);var n=r(51),t=r(52),a=r(54),i=r(53),o=r(0),c=r.n(o),u=r(25),g=r(428),d=r.n(g),l=r(407),j=r(1),m=c.a.memo((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:d.a.titeUserSendingMessage,children:e.currentUser.length>2&&e.currentUser[1].userName}),Object(j.jsx)("div",{className:d.a.dialogsMonitor,children:e.currentUser.length>2&&e.currentUser[2].messages[0].map((function(s){return Object(j.jsxs)("div",{className:d.a.messagesMonitor,children:[Object(j.jsxs)("span",{className:d.a.ownerMessage,children:[null!==e.owner&&e.owner.profile.username," :"]})," ",Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:s.message})]},Object(l.a)())}))})]})})),p=r(405),b=c.a.memo((function(e){return Object(j.jsxs)("div",{className:d.a.userMessages,onClick:function(){e.getCurrentUser(e.user.id,e.user.username)},children:[Object(j.jsx)(p.a,{className:d.a.avatar,style:{backgroundColor:"orange",marginRight:"7px",marginTop:"7px"},size:"large",children:e.user.username[0]}),e.user.username]})})),h=function(e){Object(a.a)(r,e);var s=Object(i.a)(r);function r(){return Object(n.a)(this,r),s.apply(this,arguments)}return Object(t.a)(r,[{key:"componentDidMount",value:function(){this.props.getCurrentUser(this.props.user.id,this.props.user.username)}},{key:"render",value:function(){return Object(j.jsx)(b,{getCurrentUser:this.props.getCurrentUser,user:this.props.user})}}]),r}(o.Component),O=r(34),M=r(234),U=r(443),_=r(216),f=c.a.memo((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.c)("your message","message",[],O.b),Object(j.jsx)(M.a,{block:!0,type:"primary",htmlType:"submit",children:"send"}),e.error&&Object(j.jsx)("div",{children:e.error})]})})),x=Object(_.a)({form:"messages"})(f),v=function(e){e.owner;var s=e.sendMessage,r=e.currentUser;e.isAuth;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x,{onSubmit:function(e){var n=void 0;r.length>0||void 0!==n?(n=r[0].userId,s(n,e)):U.a.open({message:"",description:"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d. \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u044d\u0442\u043e!"})}})})},w=c.a.memo((function(e){return Object(j.jsxs)("div",{className:d.a.dialogs,children:[Object(j.jsx)("div",{className:d.a.dialogsUsers,children:0!==e.userMessages.length&&e.userMessages.map((function(s){return Object(j.jsx)(h,{user:s,getCurrentUser:e.getCurrentUser},s.id||99)}))}),Object(j.jsxs)("div",{className:d.a.dialogsSending,children:[Object(j.jsx)(m,{owner:e.owner,currentUser:e.currentUser}),Object(j.jsx)(v,{sendMessage:e.sendMessage,currentUser:e.currentUser})]})]})})),C=r(39),y=r(32),N=r(213),S=function(e){return e.dialogsPage.userMessages},k=function(e){return e.dialogsPage.currentUser},F=function(e){return e.auth.signIn},A=function(e){Object(a.a)(r,e);var s=Object(i.a)(r);function r(){return Object(n.a)(this,r),s.apply(this,arguments)}return Object(t.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;this.props.getUserMessages(e)}},{key:"render",value:function(){return null===this.props.owner?Object(j.jsx)(y.a,{to:"/signin"}):Object(j.jsx)(w,{getCurrentUser:this.props.getCurrentUser,userMessages:this.props.userMessages,currentUser:this.props.currentUser,sendMessage:this.props.sendMessage,owner:this.props.owner})}}]),r}(c.a.PureComponent);s.default=Object(u.d)(y.g,Object(C.b)((function(e){return{userMessages:S(e),currentUser:k(e),owner:F(e)}}),{getUserMessages:N.c,getCurrentUser:N.b,sendMessage:N.d}))(A)}}]);
//# sourceMappingURL=9.174ef50b.chunk.js.map