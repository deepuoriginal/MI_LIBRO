"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[332],{8332:function(e,r,t){t.d(r,{cm:function(){return I},yO:function(){return N}});var n=t(9439),i=t(2791),o=t(7621),a=t(4554),c=t(890),l=t(6314),s=t(533),d=t(3400),u=t(9861),h=t(220),p=t(6151),x=t(4945),Z=t(718),m=t(6934),f=(t(5042),t(4860)),v=t(7237),b=t(7488),g=t(2654),j=t(3575),y=t(184),w=(0,m.ZP)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function k(e){var r=e.product,t=(0,j.a)().LikeBook,m=r._id,k=(r.name,r.authorName,r.cover,r.price,r.status),C=(r.publishedDate,r.priceSale,r.likeNumber,r.commentNumber),P=r.pic,S=r.title,D=r.author,I=r.publicationDate,F=r.genre,M=r.isbn,T=r.description,z=r.usersPics,B=(0,i.useState)(!1),N=(0,n.Z)(B,2),R=N[0],A=N[1],O=(0,i.useState)(!1),L=(0,n.Z)(O,2),q=L[0],H=L[1],W=function(){var e=new Date,r=new Date(I);return(e.getTime()-r.getTime())/864e5<=2}();return(0,y.jsxs)(o.Z,{children:[(0,y.jsxs)(a.Z,{sx:{pt:"100%",position:"relative"},children:[k&&(0,y.jsx)(f.Z,{variant:"filled",color:"Available"===k?"success":"Rented"===k?"warning":"error",sx:{zIndex:9,top:16,right:16,position:"absolute",textTransform:"uppercase"},children:k}),(0,y.jsx)(w,{alt:S,src:P}),W&&(0,y.jsx)(a.Z,{sx:{position:"absolute",top:0,left:0,bgcolor:"primary.main",color:"common.white",p:"2px 8px",borderRadius:"4px"},children:(0,y.jsx)(c.Z,{variant:"caption",children:"New"})})]}),(0,y.jsxs)(l.Z,{spacing:2,sx:{p:3},children:[(0,y.jsx)(s.Z,{color:"inherit",underline:"hover",children:(0,y.jsx)(c.Z,{variant:"subtitle2",noWrap:!0,children:S})}),(0,y.jsxs)(c.Z,{variant:"caption",children:["Author: ",D]}),(0,y.jsx)(c.Z,{variant:"caption",children:"Likes: 5 "}),(0,y.jsxs)(c.Z,{variant:"caption",children:["Comments: ",C]}),(0,y.jsxs)(c.Z,{variant:"caption",children:["Published Date: ",(0,g.Mu)(I)]}),(0,y.jsxs)(c.Z,{variant:"caption",children:["Genre: ",F]}),(0,y.jsxs)(l.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,y.jsx)(d.Z,{color:R?"error":"default",onClick:function(){A(!R),t(m,R)},children:R?(0,y.jsx)(v.Z,{}):(0,y.jsx)(b.Z,{})}),z&&(0,y.jsx)(u.Z,{max:12,children:z.map((function(e,r){return(0,y.jsx)(h.Z,{src:e,alt:"User ".concat(r+1),sx:{width:24,height:24}},r)}))})]}),(0,y.jsx)(p.Z,{variant:"contained",onClick:function(){H(!0)},children:"View Details"}),(0,y.jsx)(x.Z,{open:q,onClose:function(){H(!1)},children:(0,y.jsx)(Z.Z,{children:(0,y.jsxs)(a.Z,{sx:{p:3},children:[(0,y.jsx)(c.Z,{variant:"h5",mb:2,children:S}),(0,y.jsxs)(c.Z,{variant:"body1",mb:2,children:["Author: ",D]}),(0,y.jsx)("img",{src:P,alt:S,style:{width:"50%",height:"50%"}}),(0,y.jsxs)(c.Z,{variant:"body1",mb:2,children:["Likes: 5"," "]}),(0,y.jsxs)(c.Z,{variant:"body1",mb:2,children:["Comments: ",C]}),(0,y.jsxs)(c.Z,{variant:"body1",mb:2,children:["Published Date: ",I]}),(0,y.jsxs)(c.Z,{variant:"body1",children:["Genre: ",F]}),(0,y.jsxs)(c.Z,{variant:"body1",children:["ISBN: ",M]}),(0,y.jsxs)(c.Z,{variant:"body1",children:["Description: ",T]}),z&&(0,y.jsx)(l.Z,{direction:"row",spacing:1,mt:2,children:z.map((function(e,r){return(0,y.jsx)(h.Z,{src:e,alt:"User ".concat(r+1)},r)}))})]})})})]})]})}var C=t(1413),P=t(5987),S=t(1889),D=["products"];function I(e){var r=e.products,t=(0,P.Z)(e,D);return(0,y.jsx)(S.ZP,(0,C.Z)((0,C.Z)({container:!0,spacing:3},t),{},{children:r.map((function(e){return(0,y.jsx)(S.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,y.jsx)(k,{product:e})},e._id)}))}))}var F=t(1715),M=t(3786),T=t(9365),z=t(8910),B=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}];function N(){var e=(0,i.useState)(null),r=(0,n.Z)(e,2),t=r[0],o=r[1],a=function(){o(null)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(p.Z,{color:"inherit",disableRipple:!0,onClick:function(e){o(e.currentTarget)},endIcon:t?(0,y.jsx)(T.Z,{}):(0,y.jsx)(z.Z,{}),children:["Sort By:\xa0",(0,y.jsx)(c.Z,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:"Newest"})]}),(0,y.jsx)(F.Z,{keepMounted:!0,anchorEl:t,open:Boolean(t),onClose:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:B.map((function(e){return(0,y.jsx)(M.Z,{selected:"newest"===e.value,onClick:a,sx:{typography:"body2"},children:e.label},e.value)}))})]})}t(9785)},4860:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(1413),i=t(5987),o=t(2791),a=t(3967),c=t(4554),l=t(6934),s=t(2065),d=(0,l.ZP)(c.Z)((function(e){var r=e.theme,t=e.ownerState,i="light"===r.palette.mode,o="filled"===t.variant,a="outlined"===t.variant,c="soft"===t.variant,l=(0,n.Z)({},"default"===t.color&&(0,n.Z)((0,n.Z)({},a&&{backgroundColor:"transparent",color:r.palette.text.primary,border:"1px solid ".concat((0,s.Fq)(r.palette.grey[500],.32))}),c&&{color:i?r.palette.text.primary:r.palette.common.white,backgroundColor:(0,s.Fq)(r.palette.grey[500],.16)})),d=(0,n.Z)({},"default"!==t.color&&(0,n.Z)((0,n.Z)((0,n.Z)({},o&&{color:r.palette[t.color].contrastText,backgroundColor:r.palette[t.color].main}),a&&{backgroundColor:"transparent",color:r.palette[t.color].main,border:"1px solid ".concat(r.palette[t.color].main)}),c&&{color:r.palette[t.color][i?"dark":"light"],backgroundColor:(0,s.Fq)(r.palette[t.color].main,.16)}));return(0,n.Z)((0,n.Z)({height:24,minWidth:22,lineHeight:0,borderRadius:6,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",textTransform:"capitalize",padding:r.spacing(0,1),color:r.palette.grey[800],fontSize:r.typography.pxToRem(12),fontFamily:r.typography.fontFamily,backgroundColor:r.palette.grey[300],fontWeight:r.typography.fontWeightBold},d),l)})),u=t(184),h=["children","color","variant","startIcon","endIcon","sx"],p=(0,o.forwardRef)((function(e,r){var t=e.children,o=e.color,l=void 0===o?"default":o,s=e.variant,p=void 0===s?"soft":s,x=e.startIcon,Z=e.endIcon,m=e.sx,f=(0,i.Z)(e,h),v=(0,a.Z)(),b={width:16,height:16,"& svg, img":{width:1,height:1,objectFit:"cover"}};return(0,u.jsxs)(d,(0,n.Z)((0,n.Z)({ref:r,component:"span",ownerState:{color:l,variant:p},sx:(0,n.Z)((0,n.Z)((0,n.Z)({},x&&{pl:.75}),Z&&{pr:.75}),m),theme:v},f),{},{children:[x&&(0,u.jsxs)(c.Z,{sx:(0,n.Z)({mr:.75},b),children:[" ",x," "]}),t,Z&&(0,u.jsxs)(c.Z,{sx:(0,n.Z)({ml:.75},b),children:[" ",Z," "]})]}))}))},9785:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(1413),i=t(5987),o=t(2791),a=t(4554),c=t(9953),l=t(6934),s=t(2065),d=(0,l.ZP)("div")((function(){return{flexGrow:1,height:"100%",overflow:"hidden"}})),u=(0,l.ZP)(c.Z)((function(e){var r=e.theme;return{maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,s.Fq)(r.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}})),h=t(184),p=["children","sx"];function x(e){var r=e.children,t=e.sx,o=(0,i.Z)(e,p),c="undefined"===typeof navigator?"SSR":navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)?(0,h.jsx)(a.Z,(0,n.Z)((0,n.Z)({sx:(0,n.Z)({overflowX:"auto"},t)},o),{},{children:r})):(0,h.jsx)(d,{children:(0,h.jsx)(u,(0,n.Z)((0,n.Z)({timeout:500,clickOnTrack:!1,sx:t},o),{},{children:r}))})}var Z=(0,o.memo)(x)},5042:function(e,r,t){t.d(r,{v1:function(){return o}});var n=t(6098),i=t.n(n);function o(e){return a(e?i()(e).format("0.00a"):"",".00")}function a(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".00";return e.includes(r)?e.replace(r,""):e}},2654:function(e,r,t){t.d(r,{DY:function(){return a},Mu:function(){return o}});var n=t(1482),i=t(5939);function o(e,r){var t=r||"dd MMM yyyy";return e?(0,n.Z)(new Date(e),t):""}function a(e){return e?(0,i.Z)(new Date(e),{addSuffix:!0}):""}}}]);
//# sourceMappingURL=332.c43509a3.chunk.js.map