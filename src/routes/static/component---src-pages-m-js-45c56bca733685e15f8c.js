(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7vjl":function(e,t,r){"use strict";r.r(t);r("OG14");var a=r("q1tI"),o=r.n(a),n=r("Yn+B"),i=r("sK1y"),l=r("Weur"),c=r("bQFp"),d=r("qWyU"),s=r("EsjQ"),u=r("pVnL"),m=r.n(u),p=r("8OQS"),h=r.n(p),b=r("qKvR"),g=r("BMxC"),v=Object(a.forwardRef)((function(e,t){var r=e.orientation,a=h()(e,["orientation"]),o="vertical"===r?{borderLeft:"0.0625rem solid",height:"auto",mx:2}:{borderBottom:"0.0625rem solid",width:"auto",my:2};return Object(b.c)(g.a,m()({ref:t,as:"hr","aria-orientation":r,border:"0",opacity:"0.6"},o,{borderColor:"inherit"},a))})),f=r("we/t"),w=r("mf32"),y=function(e){var t=Object(w.a)().colorMode;return Object(b.c)(g.a,m()({as:"span",ml:1,color:{light:"red.500",dark:"red.300"}[t],"aria-hidden":"true",children:"*"},e))},O=Object(a.forwardRef)((function(e,t){var r=e.children,a=h()(e,["children"]),o=Object(f.b)(a);return Object(b.c)(g.a,m()({ref:t,fontSize:"md",pr:"12px",pb:"4px",opacity:o.isDisabled?"0.4":"1",fontWeight:"medium",textAlign:"left",verticalAlign:"middle",display:"inline-block",as:"label"},a),r,o.isRequired&&Object(b.c)(y,null))}));O.displayName="FormLabel";var x=O,j=r("FpzS"),E=(r("f3/d"),r("cOp2")),_=r.n(E),C=r("5D9J");function A(){var e=_()(["\n  flex-shrink: 0;\n  backface-visibility: hidden;\n  &:not(:root) {\n    overflow: hidden;\n  }\n"]);return A=function(){return e},e}var S=Object(C.a)(g.a)(A()),R=Object(a.forwardRef)((function(e,t){var r=e.size,o=void 0===r?"1em":r,n=e.name,i=e.color,l=void 0===i?"currentColor":i,c=e.role,d=void 0===c?"presentation":c,s=e.focusable,u=void 0!==s&&s,p=h()(e,["size","name","color","role","focusable"]),g=Object(a.useContext)(b.a).icons,v=g["question-outline"],f=null==g[n]?v.path:g[n].path,w=(null==g[n]?v.viewBox:g[n].viewBox)||"0 0 24 24";return Object(b.c)(S,m()({ref:t,as:"svg",size:o,color:l,display:"inline-block",verticalAlign:"middle",viewBox:w,focusable:u,role:d},p),f)}));R.displayName="Icon";var k=R,z=r("yI6m"),W=(r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("lSNA")),B=r.n(W),D=r("8hg0"),F=r("CjxU");function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){B()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G={light:{color:"inherit",_hover:{bg:"gray.100"},_active:{bg:"gray.200"}},dark:{color:"whiteAlpha.900",_hover:{bg:"whiteAlpha.200"},_active:{bg:"whiteAlpha.300"}}},U=function(e){var t=e.color,r=e.colorMode,a=e.theme,o=a.colors[t]&&a.colors[t][200];return("gray"===t?G:{light:{color:t+".500",bg:"transparent",_hover:{bg:t+".50"},_active:{bg:t+".100"}},dark:{color:t+".200",bg:"transparent",_hover:{bg:Object(D.a)(o,.12)},_active:{bg:Object(D.a)(o,.24)}}})[r]},I={light:{bg:"gray.100",_hover:{bg:"gray.200"},_active:{bg:"gray.300"}},dark:{bg:"whiteAlpha.200",_hover:{bg:"whiteAlpha.300"},_active:{bg:"whiteAlpha.400"}}},L={_disabled:{opacity:"40%",cursor:"not-allowed",boxShadow:"none"}},P={lg:{height:12,minWidth:12,fontSize:"lg",px:6},md:{height:10,minWidth:10,fontSize:"md",px:4},sm:{height:8,minWidth:8,fontSize:"sm",px:3},xs:{height:6,minWidth:6,fontSize:"xs",px:2}},q={_focus:{boxShadow:"outline"}},H={userSelect:"inherit",bg:"none",border:0,color:"inherit",display:"inline",font:"inherit",lineHeight:"inherit",m:0,p:0,textAlign:"inherit"},Q=function(e){switch(e.variant){case"solid":return r=(t=e).color,a=t.colorMode,o={light:{bg:r+".500",color:"white",_hover:{bg:r+".600"},_active:{bg:r+".700"}},dark:{bg:r+".200",color:"gray.800",_hover:{bg:r+".300"},_active:{bg:r+".400"}}},"gray"===r&&(o=I),o[a];case"ghost":return U(e);case"link":return function(e){var t=e.color,r=e.colorMode;return{p:0,height:"auto",lineHeight:"normal",color:{light:t+".500",dark:t+".200"}[r],_hover:{textDecoration:"underline"},_active:{color:{light:t+".700",dark:t+".500"}[r]}}}(e);case"outline":return function(e){var t=e.color,r=e.colorMode;return N({border:"1px",borderColor:"gray"===t?{light:"gray.200",dark:"whiteAlpha.300"}[r]:"current"},U(e))}(e);case"unstyled":return H;default:return{}}var t,r,a,o},T={display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",transition:"all 250ms",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",lineHeight:"1.2",outline:"none"},J=function(e){var t,r=N({},e,{colorMode:Object(w.a)().colorMode,theme:Object(F.b)()});return N({},T,{},(t=r.size,P[t]),{},q,{},L,{},Q(r))},K=r("+Cyc"),V=r("D7Da"),Y=function(e){var t=e.icon,r=h()(e,["icon"]);return"string"==typeof t?Object(b.c)(k,m()({focusable:"false","aria-hidden":"true",name:t,color:"currentColor"},r)):Object(b.c)(g.a,m()({as:t,"data-custom-icon":!0,focusable:"false","aria-hidden":"true",color:"currentColor"},r))},X=Object(a.forwardRef)((function(e,t){var r=e.isDisabled,a=e.isLoading,o=e.isActive,n=e.isFullWidth,i=e.children,l=e.as,c=void 0===l?"button":l,d=e.variantColor,s=void 0===d?"gray":d,u=e.leftIcon,p=e.rightIcon,v=e.variant,f=void 0===v?"solid":v,w=e.loadingText,y=e.iconSpacing,O=void 0===y?2:y,x=e.type,j=void 0===x?"button":x,E=e.size,_=void 0===E?"md":E,C=e.colorMode,A=h()(e,["isDisabled","isLoading","isActive","isFullWidth","children","as","variantColor","leftIcon","rightIcon","variant","loadingText","iconSpacing","type","size","colorMode"]);Object(V.b)("Button",s);var S=J({color:s,variant:f,size:_,colorMode:C}),R=r||a;return Object(b.c)(K.a,m()({disabled:R,"aria-disabled":R,ref:t,as:c,type:j,borderRadius:"md",fontWeight:"semibold",width:n?"full":void 0,"data-active":o?"true":void 0},S,A),u&&!a&&Object(b.c)(Y,{ml:-1,mr:O,icon:u}),a&&Object(b.c)(z.a,{position:w?"relative":"absolute",mr:w?O:0,color:"currentColor",size:"1em"}),a?w||Object(b.c)(g.a,{as:"span",opacity:"0"},i):i,p&&!a&&Object(b.c)(Y,{mr:-1,ml:O,icon:p}))}));X.displayName="Button";var Z=X,$=Object(a.forwardRef)((function(e,t){var r=e.gap,a=e.rowGap,n=e.columnGap,i=e.autoFlow,l=e.autoRows,c=e.autoColumns,d=e.templateRows,s=e.templateColumns,u=e.templateAreas,p=e.area,b=e.column,v=e.row,f=h()(e,["gap","rowGap","columnGap","autoFlow","autoRows","autoColumns","templateRows","templateColumns","templateAreas","area","column","row"]);return o.a.createElement(g.a,m()({ref:t,display:"grid",gridArea:p,gridTemplateAreas:u,gridGap:r,gridRowGap:a,gridColumnGap:n,gridAutoColumns:c,gridColumn:b,gridRow:v,gridAutoFlow:i,gridAutoRows:l,gridTemplateRows:d,gridTemplateColumns:s},f))}));$.displayName="Grid";var ee=$,te=r("pboS"),re=r("dCQc"),ae=r("Qyje"),oe=r.n(ae),ne=r("Bl7J");t.default=function(e){var t=Object(a.useState)({}),r=t[0],u=t[1],m=Object(a.useState)(""),p=m[0],h=m[1],b=Object(a.useState)(""),w=b[0],y=b[1],O=Object(a.useState)(""),E=O[0],_=O[1],C=Object(a.useState)([]),A=C[0],S=C[1];Object(a.useEffect)((function(){var t=oe.a.parse(e.location.search.slice(1));t&&t.movie_id&&(Object(re.b)(t.movie_id).then((function(e){u(e.data)})),R())}),[]);var R=function(){return Object(re.c)(oe.a.parse(e.location.search.slice(1))&&oe.a.parse(e.location.search.slice(1)).movie_id).then((function(e){S(e.data&&e.data.resources)}))};return o.a.createElement(ne.a,null,o.a.createElement(n.a,{Flex:!0,border:"1px solid gray",borderRadius:"5px"},o.a.createElement(i.a,{as:"div",color:"cadetblue",p:"4px",m:"0 !important",w:"100%"},o.a.createElement(l.a,{flexDir:"row",height:"150px"},o.a.createElement(c.a,{mx:"10px",height:"150px",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+r.poster_path}),o.a.createElement(l.a,{flexDir:"column",style:{textOverflow:"ellipsis",overflow:"hidden"}},o.a.createElement(d.a,{m:"0",size:"sm"},r.title),o.a.createElement(s.a,{variantColor:"pink"},r.release_date),o.a.createElement(i.a,{mt:2,fontSize:"sm",lineHeight:"short"},r.overview)))),o.a.createElement(v,null),o.a.createElement(g.a,{px:"20px"},o.a.createElement(d.a,{size:"md"},"Add resource:"),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),Object(re.a)({movieId:oe.a.parse(e.location.search.slice(1)).movie_id,resources:{resourceName:p,addedBy:E,resourceUri:w}}).then((function(e){_(""),h(""),y(""),R()}))}},o.a.createElement(f.a,null,o.a.createElement(x,{htmlFor:"resourceName"},"Resource name"),o.a.createElement(j.a,{type:"text",id:"resourceName",value:p,onChange:function(e){return h(e.target.value)}})),o.a.createElement(f.a,null,o.a.createElement(x,{htmlFor:"resourceUri"},"Resource URL"),o.a.createElement(j.a,{type:"text",id:"resourceUri",value:w,onChange:function(e){return y(e.target.value)}})),o.a.createElement(f.a,null,o.a.createElement(x,{htmlFor:"resourceName"},"Resource name"),o.a.createElement(j.a,{type:"text",id:"addedBy",value:E,onChange:function(e){return _(e.target.value)}})),o.a.createElement(Z,{type:"submit",m:"10px",float:"right"},"Add")))," ",o.a.createElement(v,null),o.a.createElement(ee,{templateColumns:"repeat(3, 1fr)",gap:6},o.a.createElement(g.a,{px:"10px",w:"100%",h:"10"},o.a.createElement(i.a,{fontWeight:"bold"},"Resource Name")),o.a.createElement(g.a,{px:"10px",h:"10"},o.a.createElement(i.a,{fontWeight:"bold"},"Resource URL")),o.a.createElement(g.a,{px:"10px",w:"100%",h:"10"},o.a.createElement(i.a,{fontWeight:"bold"},"Added by")),A&&A.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{px:"10px",h:"10",key:e.resourceName+Math.random()},o.a.createElement(i.a,null,e.resourceName)),o.a.createElement(g.a,{px:"10px",h:"10",key:e.resourceUri+Math.random(),style:{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}},o.a.createElement(te.a,{href:e.resourceUri,target:"_blank"},e.resourceUri)),o.a.createElement(g.a,{px:"10px",h:"10",key:e.addedBy+Math.random()},o.a.createElement(i.a,null,e.addedBy)))})))))}}}]);
//# sourceMappingURL=component---src-pages-m-js-45c56bca733685e15f8c.js.map