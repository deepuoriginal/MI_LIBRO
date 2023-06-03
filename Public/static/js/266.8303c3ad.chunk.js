"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[266],{1266:function(e,n,r){r.r(n),r.d(n,{default:function(){return T}});var s=r(4942),o=r(6907),i=r(6934),a=r(4554),t=r(220),d=r(890),l=r(9164),c=r(6151),u=r(4721),m=r(3861),h=r(6105),x=r(3732),w=r(4165),f=r(5861),Z=r(1413),j=r(9439),p=r(2791),g=r(7689),b=r(6314),v=r(8096),P=r(4925),y=r(8029),C=r(3466),k=r(3400),D=r(9709),F=r(3710),S=r(9569),W=r(8518),B=r(3575),q=r(184);function A(){(0,g.s0)();var e=(0,W.Ds)().enqueueSnackbar,n=(0,B.a)(),r=(n.isAuthenticated,n.user,n.Forgot),o=(0,p.useState)(!1),i=(0,j.Z)(o,2),a=i[0],t=i[1],l=(0,p.useState)({email:"",dob:"",newPassword:"",confirmPassword:""}),c=(0,j.Z)(l,2),u=c[0],m=c[1],h=(0,p.useState)({}),x=(0,j.Z)(h,2),A=x[0],I=x[1],z=(0,p.useState)(!1),M=(0,j.Z)(z,2),N=M[0],T=M[1],E=(0,p.useState)(!1),H=(0,j.Z)(E,2),L=H[0],O=H[1],R=function(){t(!a)},U=function(e){e.preventDefault()},G=function(e){m((0,Z.Z)((0,Z.Z)({},u),{},(0,s.Z)({},e.target.name,e.target.value)))},J=function(){var e={},n=!0;return u.email||(n=!1,e.email="Email/Username is required"),u.dob||(n=!1,e.dob="Date of Birth is required"),u.newPassword||(n=!1,e.newPassword="New Password is required"),u.confirmPassword||(n=!1,e.confirmPassword="Confirm Password is required"),u.newPassword!==u.confirmPassword&&(n=!1,e.confirmPassword="Passwords do not match"),I(e),n},K=function(){var n=(0,f.Z)((0,w.Z)().mark((function n(s){var o,i;return(0,w.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),J())try{T(!0),o=r(u.email,u.dob,u.newPassword),i=o.message,200===o.status?(e("Password changed successfully",{variant:"success"}),window.location.href="/home"):(e(i,{variant:"error"}),I({email:i,password:i})),T(!1)}catch(a){T(!1),I({email:"Invalid email/username or password"})}case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)(b.Z,{spacing:1,children:[(0,q.jsx)(d.Z,{variant:"body2",sx:{color:"#f80202"},children:A.email}),(0,q.jsxs)(v.Z,{fullWidth:!0,children:[(0,q.jsx)(P.Z,{htmlFor:"outlined-adornment-username-login",children:"Email / Username"}),(0,q.jsx)(y.Z,{id:"outlined-adornment-username-login",type:"text",name:"email",value:u.email,onChange:G,label:"Username",error:!!A.email,helperText:A.email})]}),(0,q.jsx)(d.Z,{variant:"body2",sx:{color:"#f80202"},children:A.dob}),(0,q.jsxs)(v.Z,{fullWidth:!0,children:[(0,q.jsx)(P.Z,{htmlFor:"outlined-adornment-dob-login",children:"Date of Birth"}),(0,q.jsx)(y.Z,{id:"outlined-adornment-dob-login",type:L?"date":"text",name:"dob",value:u.dob,onChange:G,onFocus:function(){O(!0)},onBlur:function(){return O(!1)},label:"Date of Birth",error:!!A.dob,helperText:A.dob})]}),(0,q.jsx)(d.Z,{variant:"body2",sx:{color:"#f80202"},children:A.newPassword}),(0,q.jsxs)(v.Z,{fullWidth:!0,children:[(0,q.jsx)(P.Z,{htmlFor:"outlined-adornment-newpassword-login",children:"New Password"}),(0,q.jsx)(y.Z,{id:"outlined-adornment-newpassword-login",type:a?"text":"password",name:"newPassword",value:u.newPassword,onChange:G,endAdornment:(0,q.jsx)(C.Z,{position:"end",children:(0,q.jsx)(k.Z,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:U,edge:"end",size:"large",children:a?(0,q.jsx)(F.Z,{}):(0,q.jsx)(S.Z,{})})}),label:"New Password",error:!!A.newPassword,helperText:A.newPassword})]}),(0,q.jsx)(d.Z,{variant:"body2",sx:{color:"#f80202"},children:A.confirmPassword}),(0,q.jsxs)(v.Z,{fullWidth:!0,children:[(0,q.jsx)(P.Z,{htmlFor:"outlined-adornment-confirmpassword-login",children:"Confirm Password"}),(0,q.jsx)(y.Z,{id:"outlined-adornment-confirmpassword-login",type:a?"text":"password",name:"confirmPassword",value:u.confirmPassword,onChange:G,endAdornment:(0,q.jsx)(C.Z,{position:"end",children:(0,q.jsx)(k.Z,{"aria-label":"toggle password visibility",onClick:R,onMouseDown:U,edge:"end",size:"large",children:a?(0,q.jsx)(F.Z,{}):(0,q.jsx)(S.Z,{})})}),label:"Confirm Password",error:!!A.confirmPassword,helperText:A.confirmPassword})]}),(0,q.jsxs)(D.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:N,onClick:K,children:[N&&(0,q.jsx)(q.Fragment,{children:"Loading..."}),!N&&(0,q.jsx)(q.Fragment,{children:"CHANGE PASSWORD"})]})]})})}var I=r(7394),z=(0,i.ZP)("div")((function(e){var n=e.theme;return(0,s.Z)({},n.breakpoints.up("md"),{display:"flex"})})),M=(0,i.ZP)("div")((function(e){var n=e.theme;return{width:"100%",maxWidth:480,display:"flex",flexDirection:"column",justifyContent:"center",boxShadow:n.customShadows.card,backgroundColor:n.palette.background.default}})),N=(0,i.ZP)("div")((function(e){return{maxWidth:480,margin:"auto",minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",padding:e.theme.spacing(12,0)}}));function T(){var e=(0,m.Z)("up","md");return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(o.ql,{children:(0,q.jsx)("title",{children:" Forgot password | MI LIBRO "})}),(0,q.jsxs)(z,{children:[(0,q.jsxs)(a.Z,{sx:{position:"fixed",top:{xs:16,sm:24,md:40},left:{xs:16,sm:24,md:40}},children:[(0,q.jsx)(t.Z,{src:h}),"  ","MI LIBRO"]}),e&&(0,q.jsxs)(M,{children:[(0,q.jsx)(d.Z,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Hi, Welcome Back"}),(0,q.jsx)("img",{src:x,alt:"login"})]}),(0,q.jsx)(l.Z,{maxWidth:"sm",children:(0,q.jsxs)(N,{children:[(0,q.jsx)(d.Z,{variant:"body2",children:(0,q.jsxs)(c.Z,{size:"medium",onClick:function(){return window.location.replace("/login")},children:[(0,q.jsx)(I.Z,{})," "," Go Back"]})}),(0,q.jsx)(u.Z,{sx:{my:3}}),(0,q.jsx)(A,{})]})})]})]})}}}]);
//# sourceMappingURL=266.8303c3ad.chunk.js.map