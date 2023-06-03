"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[908],{7908:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var n=r(9439),i=r(6907),a=r(3967),o=r(4554),l=r(9164),s=r(6314),d=r(7047),c=r(890),v=r(2791),u=r(3575),h=r(4165),f=r(5861),p=r(4942),m=r(1413),w=r(7621),x=r(9585),g=r(4721),Z=r(9504),j=r(8096),b=r(4925),C=r(8029),P=r(3466),S=r(3400),M=r(2363),y=r(6151),R=r(3710),A=r(9569),k=r(184);function I(){var e=(0,u.a)(),t=(e.isAuthenticated,e.updateUserPasswordFetch),r=(0,v.useState)({}),i=(0,n.Z)(r,2),a=i[0],o=i[1],l=(0,v.useState)(!1),I=(0,n.Z)(l,2),q=I[0],N=I[1],z=(0,v.useState)(!0),W=(0,n.Z)(z,2),D=W[0],F=W[1],V=(0,v.useState)({password:"",confirmPassword:""}),L=(0,n.Z)(V,2),T=L[0],B=L[1],U=function(){N(!q)},E=function(e){B((function(t){return(0,m.Z)((0,m.Z)({},t),{},(0,p.Z)({},e.target.name,e.target.value))}))},O=function(e){e.preventDefault()},G=function(){var e={},t=!0;return T.password||(t=!1,e.newPassword="New Password is required"),T.confirmPassword||(t=!1,e.confirmPassword="Confirm Password is required"),T.password!==T.confirmPassword&&(t=!1,e.confirmPassword="Passwords do not match"),o(e),t},H=function(){var e=(0,f.Z)((0,h.Z)().mark((function e(r){var n,i;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),G())try{F(!0),n=t(T.password),i=n.message,200===n.status?window.location.reload():o({password:i}),F(!1)}catch(a){F(!1),o({email:"Invalid email/username or password"})}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){var e=setTimeout((function(){F(!1)}),2e3);return function(){return clearTimeout(e)}}),[]),(0,k.jsx)("form",{onSubmit:H,children:(0,k.jsxs)(w.Z,{children:[D?(0,k.jsx)(x.Z,{children:(0,k.jsx)(d.Z,{variant:"text",width:200,height:40})}):(0,k.jsx)(x.Z,{subheader:"Update password",title:"Password"}),(0,k.jsx)(g.Z,{}),(0,k.jsx)(Z.Z,{children:(0,k.jsx)(s.Z,{spacing:3,sx:{maxWidth:400},children:D?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(d.Z,{variant:"text",width:200,height:40}),(0,k.jsx)(d.Z,{variant:"rectangular",height:56}),(0,k.jsx)(d.Z,{variant:"rectangular",height:56})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(c.Z,{variant:"body2",sx:{color:"#f80202"},children:a.newPassword}),(0,k.jsxs)(j.Z,{fullWidth:!0,children:[(0,k.jsx)(b.Z,{htmlFor:"outlined-adornment-newpassword-login",children:"New Password"}),(0,k.jsx)(C.Z,{id:"outlined-adornment-newpassword-login",type:q?"text":"password",name:"password",value:T.password,onChange:E,endAdornment:(0,k.jsx)(P.Z,{position:"end",children:(0,k.jsx)(S.Z,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:O,edge:"end",size:"large",children:q?(0,k.jsx)(R.Z,{}):(0,k.jsx)(A.Z,{})})}),label:"password",error:!!a.password,helperText:a.password})]}),(0,k.jsx)(c.Z,{variant:"body2",sx:{color:"#f80202"},children:a.confirmPassword}),(0,k.jsxs)(j.Z,{fullWidth:!0,children:[(0,k.jsx)(b.Z,{htmlFor:"outlined-adornment-confirmpassword-login",children:"Confirm Password"}),(0,k.jsx)(C.Z,{id:"outlined-adornment-confirmpassword-login",type:q?"text":"password",name:"confirmPassword",value:T.confirmPassword,onChange:E,endAdornment:(0,k.jsx)(P.Z,{position:"end",children:(0,k.jsx)(S.Z,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:O,edge:"end",size:"large",children:q?(0,k.jsx)(R.Z,{}):(0,k.jsx)(A.Z,{})})}),label:"Confirm Password",error:!!a.confirmPassword,helperText:a.confirmPassword})]})]})})}),(0,k.jsx)(g.Z,{}),D?(0,k.jsx)(M.Z,{sx:{justifyContent:"flex-end"},children:(0,k.jsx)(d.Z,{variant:"rectangular",height:40,width:100,sx:{justifyContent:"flex-end"}})}):(0,k.jsx)(M.Z,{sx:{justifyContent:"flex-end"},children:(0,k.jsx)(y.Z,{variant:"contained",onClick:H,children:"Update"})})]})})}function q(){(0,a.Z)(),(0,u.a)().user;var e=(0,v.useState)(!0),t=(0,n.Z)(e,2),r=t[0],h=t[1];return(0,v.useEffect)((function(){var e=setTimeout((function(){h(!1)}),2e3);return function(){return clearTimeout(e)}}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.ql,{children:(0,k.jsx)("title",{children:"Settings | MI LIBRO"})}),(0,k.jsx)(o.Z,{component:"main",sx:{flexGrow:1,py:8},children:(0,k.jsx)(l.Z,{maxWidth:"lg",children:(0,k.jsxs)(s.Z,{spacing:3,children:[r?(0,k.jsx)(d.Z,{variant:"text",width:200,height:40}):(0,k.jsx)(c.Z,{variant:"h4",children:"Settings"}),(0,k.jsx)(I,{})]})})})]})}},3710:function(e,t,r){var n=r(9201),i=r(184);t.Z=(0,n.Z)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,t,r){var n=r(9201),i=r(184);t.Z=(0,n.Z)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},7621:function(e,t,r){r.d(t,{Z:function(){return w}});var n=r(7462),i=r(3366),a=r(2791),o=r(8182),l=r(4419),s=r(6934),d=r(1402),c=r(5527),v=r(5878),u=r(1217);function h(e){return(0,u.Z)("MuiCard",e)}(0,v.Z)("MuiCard",["root"]);var f=r(184),p=["className","raised"],m=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),w=a.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiCard"}),a=r.className,s=r.raised,c=void 0!==s&&s,v=(0,i.Z)(r,p),u=(0,n.Z)({},r,{raised:c}),w=function(e){var t=e.classes;return(0,l.Z)({root:["root"]},h,t)}(u);return(0,f.jsx)(m,(0,n.Z)({className:(0,o.Z)(w.root,a),elevation:c?8:void 0,ref:t,ownerState:u},v))}))},4721:function(e,t,r){var n=r(3366),i=r(7462),a=r(2791),o=r(8182),l=r(4419),s=r(2065),d=r(6934),c=r(1402),v=r(133),u=r(184),h=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,s.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(e){var t=e.ownerState;return(0,i.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(function(e){var t=e.ownerState;return(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),p=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(e,t){var r=e.ownerState;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiDivider"}),a=r.absolute,s=void 0!==a&&a,d=r.children,m=r.className,w=r.component,x=void 0===w?d?"div":"hr":w,g=r.flexItem,Z=void 0!==g&&g,j=r.light,b=void 0!==j&&j,C=r.orientation,P=void 0===C?"horizontal":C,S=r.role,M=void 0===S?"hr"!==x?"separator":void 0:S,y=r.textAlign,R=void 0===y?"center":y,A=r.variant,k=void 0===A?"fullWidth":A,I=(0,n.Z)(r,h),q=(0,i.Z)({},r,{absolute:s,component:x,flexItem:Z,light:b,orientation:P,role:M,textAlign:R,variant:k}),N=function(e){var t=e.absolute,r=e.children,n=e.classes,i=e.flexItem,a=e.light,o=e.orientation,s=e.textAlign,d={root:["root",t&&"absolute",e.variant,a&&"light","vertical"===o&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(d,v.V,n)}(q);return(0,u.jsx)(f,(0,i.Z)({as:x,className:(0,o.Z)(N.root,m),role:M,ref:t,ownerState:q},I,{children:d?(0,u.jsx)(p,{className:N.wrapper,ownerState:q,children:d}):null}))}));t.Z=m},133:function(e,t,r){r.d(t,{V:function(){return a}});var n=r(5878),i=r(1217);function a(e){return(0,i.Z)("MuiDivider",e)}var o=(0,n.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=o},5527:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(3366),i=r(7462),a=r(2791),o=r(8182),l=r(4419),s=r(2065),d=r(6934),c=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},v=r(1402),u=r(5878),h=r(1217);function f(e){return(0,h.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=r(184),m=["className","component","elevation","square","variant"],w=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t["elevation".concat(r.elevation)]]}})((function(e){var t,r=e.theme,n=e.ownerState;return(0,i.Z)({backgroundColor:(r.vars||r).palette.background.paper,color:(r.vars||r).palette.text.primary,transition:r.transitions.create("box-shadow")},!n.square&&{borderRadius:r.shape.borderRadius},"outlined"===n.variant&&{border:"1px solid ".concat((r.vars||r).palette.divider)},"elevation"===n.variant&&(0,i.Z)({boxShadow:(r.vars||r).shadows[n.elevation]},!r.vars&&"dark"===r.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",c(n.elevation)),", ").concat((0,s.Fq)("#fff",c(n.elevation)),")")},r.vars&&{backgroundImage:null==(t=r.vars.overlays)?void 0:t[n.elevation]}))})),x=a.forwardRef((function(e,t){var r=(0,v.Z)({props:e,name:"MuiPaper"}),a=r.className,s=r.component,d=void 0===s?"div":s,c=r.elevation,u=void 0===c?1:c,h=r.square,x=void 0!==h&&h,g=r.variant,Z=void 0===g?"elevation":g,j=(0,n.Z)(r,m),b=(0,i.Z)({},r,{component:d,elevation:u,square:x,variant:Z}),C=function(e){var t=e.square,r=e.elevation,n=e.variant,i=e.classes,a={root:["root",n,!t&&"rounded","elevation"===n&&"elevation".concat(r)]};return(0,l.Z)(a,f,i)}(b);return(0,p.jsx)(w,(0,i.Z)({as:d,ownerState:b,className:(0,o.Z)(C.root,a),ref:t},j))}))}}]);
//# sourceMappingURL=908.e9a039ba.chunk.js.map