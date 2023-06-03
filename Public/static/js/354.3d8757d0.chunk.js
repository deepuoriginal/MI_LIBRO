"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[354],{1310:function(e,t,o){var r=o(4836);t.Z=void 0;var l=r(o(5649)),n=o(184),i=(0,l.default)((0,n.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM20 4v13.17L18.83 16H4V4h16zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z"}),"CommentOutlined");t.Z=i},6388:function(e,t,o){var r=o(4836);t.Z=void 0;var l=r(o(5649)),n=o(184),i=(0,l.default)((0,n.jsx)("path",{d:"M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"}),"ThumbUpAltOutlined");t.Z=i},3896:function(e,t,o){o.d(t,{Z:function(){return w}});var r=o(4942),l=o(3366),n=o(7462),i=o(2791),a=o(8182),c=o(4419),s=o(3701),d=o(4036),u=o(1402),f=o(6934),v=o(5878),p=o(1217);function b(e){return(0,p.Z)("MuiTab",e)}var h=(0,v.Z)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),m=o(184),Z=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],S=(0,f.ZP)(s.Z,{name:"MuiTab",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.label&&o.icon&&t.labelIcon,t["textColor".concat((0,d.Z)(o.textColor))],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped]}})((function(e){var t,o,l,i=e.theme,a=e.ownerState;return(0,n.Z)({},i.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},a.label&&{flexDirection:"top"===a.iconPosition||"bottom"===a.iconPosition?"column":"row"},{lineHeight:1.25},a.icon&&a.label&&(0,r.Z)({minHeight:72,paddingTop:9,paddingBottom:9},"& > .".concat(h.iconWrapper),(0,n.Z)({},"top"===a.iconPosition&&{marginBottom:6},"bottom"===a.iconPosition&&{marginTop:6},"start"===a.iconPosition&&{marginRight:i.spacing(1)},"end"===a.iconPosition&&{marginLeft:i.spacing(1)})),"inherit"===a.textColor&&(t={color:"inherit",opacity:.6},(0,r.Z)(t,"&.".concat(h.selected),{opacity:1}),(0,r.Z)(t,"&.".concat(h.disabled),{opacity:(i.vars||i).palette.action.disabledOpacity}),t),"primary"===a.textColor&&(o={color:(i.vars||i).palette.text.secondary},(0,r.Z)(o,"&.".concat(h.selected),{color:(i.vars||i).palette.primary.main}),(0,r.Z)(o,"&.".concat(h.disabled),{color:(i.vars||i).palette.text.disabled}),o),"secondary"===a.textColor&&(l={color:(i.vars||i).palette.text.secondary},(0,r.Z)(l,"&.".concat(h.selected),{color:(i.vars||i).palette.secondary.main}),(0,r.Z)(l,"&.".concat(h.disabled),{color:(i.vars||i).palette.text.disabled}),l),a.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},a.wrapped&&{fontSize:i.typography.pxToRem(12)})})),w=i.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiTab"}),r=o.className,s=o.disabled,f=void 0!==s&&s,v=o.disableFocusRipple,p=void 0!==v&&v,h=o.fullWidth,w=o.icon,x=o.iconPosition,g=void 0===x?"top":x,C=o.indicator,y=o.label,B=o.onChange,M=o.onClick,W=o.onFocus,P=o.selected,T=o.selectionFollowsFocus,E=o.textColor,R=void 0===E?"inherit":E,I=o.value,z=o.wrapped,H=void 0!==z&&z,N=(0,l.Z)(o,Z),k=(0,n.Z)({},o,{disabled:f,disableFocusRipple:p,selected:P,icon:!!w,iconPosition:g,label:!!y,fullWidth:h,textColor:R,wrapped:H}),L=function(e){var t=e.classes,o=e.textColor,r=e.fullWidth,l=e.wrapped,n=e.icon,i=e.label,a=e.selected,s=e.disabled,u={root:["root",n&&i&&"labelIcon","textColor".concat((0,d.Z)(o)),r&&"fullWidth",l&&"wrapped",a&&"selected",s&&"disabled"],iconWrapper:["iconWrapper"]};return(0,c.Z)(u,b,t)}(k),F=w&&y&&i.isValidElement(w)?i.cloneElement(w,{className:(0,a.Z)(L.iconWrapper,w.props.className)}):w;return(0,m.jsxs)(S,(0,n.Z)({focusRipple:!p,className:(0,a.Z)(L.root,r),ref:t,role:"tab","aria-selected":P,disabled:f,onClick:function(e){!P&&B&&B(e,I),M&&M(e)},onFocus:function(e){T&&!P&&B&&B(e,I),W&&W(e)},ownerState:k,tabIndex:P?0:-1},N,{children:["top"===g||"start"===g?(0,m.jsxs)(i.Fragment,{children:[F,y]}):(0,m.jsxs)(i.Fragment,{children:[y,F]}),C]}))}))},9124:function(e,t,o){o.d(t,{Z:function(){return K}});var r,l=o(9439),n=o(4942),i=o(3366),a=o(7462),c=o(2791),s=(o(7441),o(8182)),d=o(4419),u=o(8069),f=o(6934),v=o(1402),p=o(3967),b=o(3199);function h(){if(r)return r;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),r="reverse",e.scrollLeft>0?r="default":(e.scrollLeft=1,0===e.scrollLeft&&(r="negative")),document.body.removeChild(e),r}function m(e,t){var o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function Z(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var S=o(162),w=o(7602),x=o(184),g=["onChange"],C={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var y=o(7883),B=o(1883),M=o(3701),W=o(5878),P=o(1217);function T(e){return(0,P.Z)("MuiTabScrollButton",e)}var E=(0,W.Z)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),R=["className","slots","slotProps","direction","orientation","disabled"],I=(0,f.ZP)(M.Z,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.orientation&&t[o.orientation]]}})((function(e){var t=e.ownerState;return(0,a.Z)((0,n.Z)({width:40,flexShrink:0,opacity:.8},"&.".concat(E.disabled),{opacity:0}),"vertical"===t.orientation&&{width:"100%",height:40,"& svg":{transform:"rotate(".concat(t.isRtl?-90:90,"deg)")}})})),z=c.forwardRef((function(e,t){var o,r,l=(0,v.Z)({props:e,name:"MuiTabScrollButton"}),n=l.className,c=l.slots,f=void 0===c?{}:c,b=l.slotProps,h=void 0===b?{}:b,m=l.direction,Z=(0,i.Z)(l,R),S="rtl"===(0,p.Z)().direction,w=(0,a.Z)({isRtl:S},l),g=function(e){var t=e.classes,o={root:["root",e.orientation,e.disabled&&"disabled"]};return(0,d.Z)(o,T,t)}(w),C=null!=(o=f.StartScrollButtonIcon)?o:y.Z,M=null!=(r=f.EndScrollButtonIcon)?r:B.Z,W=(0,u.Z)({elementType:C,externalSlotProps:h.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w}),P=(0,u.Z)({elementType:M,externalSlotProps:h.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:w});return(0,x.jsx)(I,(0,a.Z)({component:"div",className:(0,s.Z)(g.root,n),ref:t,role:null,ownerState:w,tabIndex:null},Z,{children:"left"===m?(0,x.jsx)(C,(0,a.Z)({},W)):(0,x.jsx)(M,(0,a.Z)({},P))}))})),H=o(9683);function N(e){return(0,P.Z)("MuiTabs",e)}var k=(0,W.Z)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]),L=o(8301),F=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],j=function(e,t){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild},A=function(e,t){return e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild},X=function(e,t,o){for(var r=!1,l=o(e,t);l;){if(l===e.firstChild){if(r)return;r=!0}var n=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!n)return void l.focus();l=o(e,l)}},Y=(0,f.ZP)("div",{name:"MuiTabs",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,n.Z)({},"& .".concat(k.scrollButtons),t.scrollButtons),(0,n.Z)({},"& .".concat(k.scrollButtons),o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile),t.root,o.vertical&&t.vertical]}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},t.vertical&&{flexDirection:"column"},t.scrollButtonsHideMobile&&(0,n.Z)({},"& .".concat(k.scrollButtons),(0,n.Z)({},o.breakpoints.down("sm"),{display:"none"})))})),D=(0,f.ZP)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:function(e,t){var o=e.ownerState;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((function(e){var t=e.ownerState;return(0,a.Z)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},t.fixed&&{overflowX:"hidden",width:"100%"},t.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},t.scrollableX&&{overflowX:"auto",overflowY:"hidden"},t.scrollableY&&{overflowY:"auto",overflowX:"hidden"})})),V=(0,f.ZP)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:function(e,t){var o=e.ownerState;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex"},t.vertical&&{flexDirection:"column"},t.centered&&{justifyContent:"center"})})),O=(0,f.ZP)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:function(e,t){return t.indicator}})((function(e){var t=e.ownerState,o=e.theme;return(0,a.Z)({position:"absolute",height:2,bottom:0,width:"100%",transition:o.transitions.create()},"primary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.primary.main},"secondary"===t.indicatorColor&&{backgroundColor:(o.vars||o).palette.secondary.main},t.vertical&&{height:"100%",width:2,right:0})})),q=(0,f.ZP)((function(e){var t=e.onChange,o=(0,i.Z)(e,g),r=c.useRef(),l=c.useRef(null),n=function(){r.current=l.current.offsetHeight-l.current.clientHeight};return(0,S.Z)((function(){var e=(0,b.Z)((function(){var e=r.current;n(),e!==r.current&&t(r.current)})),o=(0,w.Z)(l.current);return o.addEventListener("resize",e),function(){e.clear(),o.removeEventListener("resize",e)}}),[t]),c.useEffect((function(){n(),t(r.current)}),[t]),(0,x.jsx)("div",(0,a.Z)({style:C,ref:l},o))}),{name:"MuiTabs",slot:"ScrollbarSize"})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),U={},G=c.forwardRef((function(e,t){var o=(0,v.Z)({props:e,name:"MuiTabs"}),r=(0,p.Z)(),f="rtl"===r.direction,S=o["aria-label"],g=o["aria-labelledby"],C=o.action,y=o.centered,B=void 0!==y&&y,M=o.children,W=o.className,P=o.component,T=void 0===P?"div":P,E=o.allowScrollButtonsMobile,R=void 0!==E&&E,I=o.indicatorColor,k=void 0===I?"primary":I,G=o.onChange,K=o.orientation,J=void 0===K?"horizontal":K,Q=o.ScrollButtonComponent,$=void 0===Q?z:Q,_=o.scrollButtons,ee=void 0===_?"auto":_,te=o.selectionFollowsFocus,oe=o.slots,re=void 0===oe?{}:oe,le=o.slotProps,ne=void 0===le?{}:le,ie=o.TabIndicatorProps,ae=void 0===ie?{}:ie,ce=o.TabScrollButtonProps,se=void 0===ce?{}:ce,de=o.textColor,ue=void 0===de?"primary":de,fe=o.value,ve=o.variant,pe=void 0===ve?"standard":ve,be=o.visibleScrollbar,he=void 0!==be&&be,me=(0,i.Z)(o,F),Ze="scrollable"===pe,Se="vertical"===J,we=Se?"scrollTop":"scrollLeft",xe=Se?"top":"left",ge=Se?"bottom":"right",Ce=Se?"clientHeight":"clientWidth",ye=Se?"height":"width",Be=(0,a.Z)({},o,{component:T,allowScrollButtonsMobile:R,indicatorColor:k,orientation:J,vertical:Se,scrollButtons:ee,textColor:ue,variant:pe,visibleScrollbar:he,fixed:!Ze,hideScrollbar:Ze&&!he,scrollableX:Ze&&!Se,scrollableY:Ze&&Se,centered:B&&!Ze,scrollButtonsHideMobile:!R}),Me=function(e){var t=e.vertical,o=e.fixed,r=e.hideScrollbar,l=e.scrollableX,n=e.scrollableY,i=e.centered,a=e.scrollButtonsHideMobile,c=e.classes,s={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",a&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,d.Z)(s,N,c)}(Be),We=(0,u.Z)({elementType:re.StartScrollButtonIcon,externalSlotProps:ne.startScrollButtonIcon,ownerState:Be}),Pe=(0,u.Z)({elementType:re.EndScrollButtonIcon,externalSlotProps:ne.endScrollButtonIcon,ownerState:Be});var Te=c.useState(!1),Ee=(0,l.Z)(Te,2),Re=Ee[0],Ie=Ee[1],ze=c.useState(U),He=(0,l.Z)(ze,2),Ne=He[0],ke=He[1],Le=c.useState({start:!1,end:!1}),Fe=(0,l.Z)(Le,2),je=Fe[0],Ae=Fe[1],Xe=c.useState({overflow:"hidden",scrollbarWidth:0}),Ye=(0,l.Z)(Xe,2),De=Ye[0],Ve=Ye[1],Oe=new Map,qe=c.useRef(null),Ue=c.useRef(null),Ge=function(){var e,t,o=qe.current;if(o){var l=o.getBoundingClientRect();e={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollLeftNormalized:m(o,r.direction),scrollWidth:o.scrollWidth,top:l.top,bottom:l.bottom,left:l.left,right:l.right}}if(o&&!1!==fe){var n=Ue.current.children;if(n.length>0){var i=n[Oe.get(fe)];0,t=i?i.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},Ke=(0,H.Z)((function(){var e,t,o=Ge(),r=o.tabsMeta,l=o.tabMeta,i=0;if(Se)t="top",l&&r&&(i=l.top-r.top+r.scrollTop);else if(t=f?"right":"left",l&&r){var a=f?r.scrollLeftNormalized+r.clientWidth-r.scrollWidth:r.scrollLeft;i=(f?-1:1)*(l[t]-r[t]+a)}var c=(e={},(0,n.Z)(e,t,i),(0,n.Z)(e,ye,l?l[ye]:0),e);if(isNaN(Ne[t])||isNaN(Ne[ye]))ke(c);else{var s=Math.abs(Ne[t]-c[t]),d=Math.abs(Ne[ye]-c[ye]);(s>=1||d>=1)&&ke(c)}})),Je=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).animation;void 0===t||t?function(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},n=r.ease,i=void 0===n?Z:n,a=r.duration,c=void 0===a?300:a,s=null,d=t[e],u=!1,f=function(){u=!0};d===o?l(new Error("Element already at target position")):requestAnimationFrame((function r(n){if(u)l(new Error("Animation cancelled"));else{null===s&&(s=n);var a=Math.min(1,(n-s)/c);t[e]=i(a)*(o-d)+d,a>=1?requestAnimationFrame((function(){l(null)})):requestAnimationFrame(r)}}))}(we,qe.current,e,{duration:r.transitions.duration.standard}):qe.current[we]=e},Qe=function(e){var t=qe.current[we];Se?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),Je(t)},$e=function(){for(var e=qe.current[Ce],t=0,o=Array.from(Ue.current.children),r=0;r<o.length;r+=1){var l=o[r];if(t+l[Ce]>e){0===r&&(t=e);break}t+=l[Ce]}return t},_e=function(){Qe(-1*$e())},et=function(){Qe($e())},tt=c.useCallback((function(e){Ve({overflow:null,scrollbarWidth:e})}),[]),ot=(0,H.Z)((function(e){var t=Ge(),o=t.tabsMeta,r=t.tabMeta;if(r&&o)if(r[xe]<o[xe]){var l=o[we]+(r[xe]-o[xe]);Je(l,{animation:e})}else if(r[ge]>o[ge]){var n=o[we]+(r[ge]-o[ge]);Je(n,{animation:e})}})),rt=(0,H.Z)((function(){if(Ze&&!1!==ee){var e,t,o=qe.current,l=o.scrollTop,n=o.scrollHeight,i=o.clientHeight,a=o.scrollWidth,c=o.clientWidth;if(Se)e=l>1,t=l<n-i-1;else{var s=m(qe.current,r.direction);e=f?s<a-c-1:s>1,t=f?s>1:s<a-c-1}e===je.start&&t===je.end||Ae({start:e,end:t})}}));c.useEffect((function(){var e,t=(0,b.Z)((function(){qe.current&&(Ke(),rt())})),o=(0,w.Z)(qe.current);return o.addEventListener("resize",t),"undefined"!==typeof ResizeObserver&&(e=new ResizeObserver(t),Array.from(Ue.current.children).forEach((function(t){e.observe(t)}))),function(){t.clear(),o.removeEventListener("resize",t),e&&e.disconnect()}}),[Ke,rt]);var lt=c.useMemo((function(){return(0,b.Z)((function(){rt()}))}),[rt]);c.useEffect((function(){return function(){lt.clear()}}),[lt]),c.useEffect((function(){Ie(!0)}),[]),c.useEffect((function(){Ke(),rt()})),c.useEffect((function(){ot(U!==Ne)}),[ot,Ne]),c.useImperativeHandle(C,(function(){return{updateIndicator:Ke,updateScrollButtons:rt}}),[Ke,rt]);var nt=(0,x.jsx)(O,(0,a.Z)({},ae,{className:(0,s.Z)(Me.indicator,ae.className),ownerState:Be,style:(0,a.Z)({},Ne,ae.style)})),it=0,at=c.Children.map(M,(function(e){if(!c.isValidElement(e))return null;var t=void 0===e.props.value?it:e.props.value;Oe.set(t,it);var o=t===fe;return it+=1,c.cloneElement(e,(0,a.Z)({fullWidth:"fullWidth"===pe,indicator:o&&!Re&&nt,selected:o,selectionFollowsFocus:te,onChange:G,textColor:ue,value:t},1!==it||!1!==fe||e.props.tabIndex?{}:{tabIndex:0}))})),ct=function(){var e={};e.scrollbarSizeListener=Ze?(0,x.jsx)(q,{onChange:tt,className:(0,s.Z)(Me.scrollableX,Me.hideScrollbar)}):null;var t=je.start||je.end,o=Ze&&("auto"===ee&&t||!0===ee);return e.scrollButtonStart=o?(0,x.jsx)($,(0,a.Z)({slots:{StartScrollButtonIcon:re.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:We},orientation:J,direction:f?"right":"left",onClick:_e,disabled:!je.start},se,{className:(0,s.Z)(Me.scrollButtons,se.className)})):null,e.scrollButtonEnd=o?(0,x.jsx)($,(0,a.Z)({slots:{EndScrollButtonIcon:re.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:Pe},orientation:J,direction:f?"left":"right",onClick:et,disabled:!je.end},se,{className:(0,s.Z)(Me.scrollButtons,se.className)})):null,e}();return(0,x.jsxs)(Y,(0,a.Z)({className:(0,s.Z)(Me.root,W),ownerState:Be,ref:t,as:T},me,{children:[ct.scrollButtonStart,ct.scrollbarSizeListener,(0,x.jsxs)(D,{className:Me.scroller,ownerState:Be,style:(0,n.Z)({overflow:De.overflow},Se?"margin".concat(f?"Left":"Right"):"marginBottom",he?void 0:-De.scrollbarWidth),ref:qe,onScroll:lt,children:[(0,x.jsx)(V,{"aria-label":S,"aria-labelledby":g,"aria-orientation":"vertical"===J?"vertical":null,className:Me.flexContainer,ownerState:Be,onKeyDown:function(e){var t=Ue.current,o=(0,L.Z)(t).activeElement;if("tab"===o.getAttribute("role")){var r="horizontal"===J?"ArrowLeft":"ArrowUp",l="horizontal"===J?"ArrowRight":"ArrowDown";switch("horizontal"===J&&f&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),X(t,o,A);break;case l:e.preventDefault(),X(t,o,j);break;case"Home":e.preventDefault(),X(t,null,j);break;case"End":e.preventDefault(),X(t,null,A)}}},ref:Ue,role:"tablist",children:at}),Re&&nt]}),ct.scrollButtonEnd]}))})),K=G},7384:function(e,t,o){var r=o(6248);t.Z=r.Z}}]);
//# sourceMappingURL=354.3d8757d0.chunk.js.map