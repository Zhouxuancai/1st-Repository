import{a1 as $,S as ee,i as te,s as se,C as le,k as E,a as q,P as G,l as M,m as w,c as A,h as v,Q as J,n as r,p as B,T as H,b as N,R as b,W as P,K as W,D as ne,E as ie,F as re,g as F,v as ae,d as L,f as oe,a0 as ue,V as ce,M as fe,X,a2 as x}from"./index.43730d4b.js";const he=90,de=Math.floor(1e3/he);function ge(e,t){const l=new Set;let n=e,i=null,o=0;const g=c=>{if(c-o>de){i=null,e=n;for(const _ of l)_(e);o=c}else i=requestAnimationFrame(g)},m=c=>(l.add(c),c(e),()=>l.delete(c)),h=c=>{if(t){if(t(c,n))return}else if(c===n)return;n=c,i&&cancelAnimationFrame(i),i=requestAnimationFrame(g)};return{subscribe:m,set:h,update:c=>h(c(n))}}function _e(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function Y(e){const t=e-1;return t*t*t+1}function pe(e){return Math.pow(e-1,3)*(1-e)+1}let V,z;function K(e,t){return V||(z=new WeakMap,V=new ResizeObserver(l=>{for(const n of l){const i=z.get(n.target);i&&i(n.target)}})),z.set(e,t),V.observe(e),{destroy:()=>{z.delete(e),V.unobserve(e)}}}function be(e,{delay:t=0,duration:l=400,easing:n=$}={}){const i=+getComputedStyle(e).opacity;return{delay:t,duration:l,easing:n,css:o=>`opacity: ${o*i}`}}function Q(e,{delay:t=0,speed:l,duration:n,easing:i=_e}={}){let o=e.getTotalLength();const g=getComputedStyle(e);return g.strokeLinecap!=="butt"&&(o+=parseInt(g.strokeWidth)),n===void 0?l===void 0?n=800:n=o/l:typeof n=="function"&&(n=n(o)),{delay:t,duration:n,easing:i,css:(m,h)=>`
			stroke-dasharray: ${o};
			stroke-dashoffset: ${h*o};
		`}}function j(e){let t,l,n;return{c(){t=G("rect"),this.h()},l(i){t=J(i,"rect",{height:!0,width:!0,rx:!0,ry:!0,"stroke-width":!0,stroke:!0}),w(t).forEach(v),this.h()},h(){r(t,"height","100%"),r(t,"width","100%"),r(t,"rx","10"),r(t,"ry","10"),r(t,"stroke-width","4"),r(t,"stroke","white")},m(i,o){N(i,t,o),n=!0},p(i,o){},i(i){n||(fe(()=>{n&&(l||(l=X(t,Q,{duration:300,easing:Y},!0)),l.run(1))}),n=!0)},o(i){l||(l=X(t,Q,{duration:300,easing:Y},!1)),l.run(0),n=!1},d(i){i&&v(t),i&&l&&l.end()}}}function me(e){let t,l,n,i,o,g=`translate3d(${e[8].x}px, ${e[8].y}px, 0) scale(${e[6]})
				`,m,h,y,c,_,k,f,S,O;const I=e[15].default,d=le(I,e,e[14],null);let u=e[7]&&j();return{c(){t=E("a"),l=E("div"),d&&d.c(),n=q(),i=E("div"),o=E("div"),m=q(),h=E("div"),y=E("div"),c=q(),_=G("svg"),u&&u.c(),this.h()},l(s){t=M(s,"A",{href:!0,target:!0,title:!0,rel:!0,style:!0,class:!0});var a=w(t);l=M(a,"DIV",{class:!0,style:!0});var p=w(l);d&&d.l(p),n=A(p),i=M(p,"DIV",{class:!0});var R=w(i);o=M(R,"DIV",{class:!0}),w(o).forEach(v),R.forEach(v),p.forEach(v),m=A(a),h=M(a,"DIV",{class:!0});var C=w(h);y=M(C,"DIV",{class:!0}),w(y).forEach(v),c=A(C),_=J(C,"svg",{xmlns:!0,height:!0,width:!0,fill:!0});var T=w(_);u&&u.l(T),T.forEach(v),C.forEach(v),a.forEach(v),this.h()},h(){r(o,"class","svelte-1cnxt2p"),B(o,"transform",g),r(i,"class","hover-effect svelte-1cnxt2p"),r(l,"class","link-wrapper svelte-1cnxt2p"),r(l,"style",e[4]),r(y,"class","resize-trigger svelte-1cnxt2p"),r(_,"xmlns","http://www.w3.org/2000/svg"),r(_,"height","100%"),r(_,"width","100%"),r(_,"fill","none"),r(h,"class","tab-outline svelte-1cnxt2p"),r(t,"href",e[0]),r(t,"target",e[1]),r(t,"title",e[2]),r(t,"rel",k=e[1]==="_blank"?"external":null),r(t,"style",e[4]),r(t,"class","svelte-1cnxt2p"),H(t,"text",e[3]==="text")},m(s,a){N(s,t,a),b(t,l),d&&d.m(l,null),b(l,n),b(l,i),b(i,o),b(t,m),b(t,h),b(h,y),b(h,c),b(h,_),u&&u.m(_,null),f=!0,S||(O=[P(K.call(null,y,e[13])),W(t,"mousemove",e[11]),W(t,"mousedown",ye),W(t,"touchstart",e[12],{passive:!0}),W(t,"click",function(){x(e[5])&&e[5].apply(this,arguments)}),W(t,"keypress",function(){x(e[5])&&e[5].apply(this,arguments)}),P(K.call(null,t,e[10]))],S=!0)},p(s,[a]){e=s,d&&d.p&&(!f||a&16384)&&ne(d,I,e,e[14],f?re(I,e[14],a,null):ie(e[14]),null),a&320&&g!==(g=`translate3d(${e[8].x}px, ${e[8].y}px, 0) scale(${e[6]})
				`)&&B(o,"transform",g),(!f||a&16)&&r(l,"style",e[4]),e[7]?u?(u.p(e,a),a&128&&F(u,1)):(u=j(),u.c(),F(u,1),u.m(_,null)):u&&(ae(),L(u,1,1,()=>{u=null}),oe()),(!f||a&1)&&r(t,"href",e[0]),(!f||a&2)&&r(t,"target",e[1]),(!f||a&4)&&r(t,"title",e[2]),(!f||a&2&&k!==(k=e[1]==="_blank"?"external":null))&&r(t,"rel",k),(!f||a&16)&&r(t,"style",e[4]),(!f||a&8)&&H(t,"text",e[3]==="text")},i(s){f||(F(d,s),F(u),f=!0)},o(s){L(d,s),L(u),f=!1},d(s){s&&v(t),d&&d.d(s),u&&u.d(),S=!1,ue(O)}}}function ye(e){const t=e.currentTarget,{left:l,top:n,height:i,width:o}=t.getBoundingClientRect(),g=e.x-l+o,m=e.y-n+i;t.lastElementChild.style.transformOrigin=`${g}px ${m}px`}function ve(e,t,l){let n,{$$slots:i={},$$scope:o}=t,{href:g}=t,{target:m=null}=t,{title:h=null}=t,{linkStyle:y="text"}=t,{style:c=null}=t,{overrideClick:_=null}=t;const k=ge({x:0,y:0},(s,a)=>s.x===a.x&&s.y===a.y);ce(e,k,s=>l(8,n=s));let f=1;function S(s){s.clientWidth>s.clientHeight?l(6,f=s.clientWidth/s.clientHeight):l(6,f=s.clientHeight/s.clientWidth)}function O(s){const{left:a,top:p}=s.currentTarget.getBoundingClientRect();k.set({x:s.x-a,y:s.y-p})}function I(s){const a=s.currentTarget,{left:p,top:R,height:C,width:T}=a.getBoundingClientRect(),D=s.touches.item(s.touches.length-1);if(D){k.set({x:D.clientX-p,y:D.clientY-R});const U=D.clientX-p+T,Z=D.clientY-R+C;a.lastElementChild.style.transformOrigin=`${U}px ${Z}px`}}let d=!1;function u(s){l(7,d=s.clientWidth>0)}return e.$$set=s=>{"href"in s&&l(0,g=s.href),"target"in s&&l(1,m=s.target),"title"in s&&l(2,h=s.title),"linkStyle"in s&&l(3,y=s.linkStyle),"style"in s&&l(4,c=s.style),"overrideClick"in s&&l(5,_=s.overrideClick),"$$scope"in s&&l(14,o=s.$$scope)},[g,m,h,y,c,_,f,d,n,k,S,O,I,u,o,i]}class we extends ee{constructor(t){super(),te(this,t,ve,me,se,{href:0,target:1,title:2,linkStyle:3,style:4,overrideClick:5})}}export{we as M,Q as a,Y as c,ge as d,be as f,pe as q,K as r};
