function y(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function H(){return Object.create(null)}function w(t){t.forEach(G)}function R(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function V(t){return Object.keys(t).length===0}function W(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ut(t){let e;return W(t,n=>e=n)(),e}function ft(t,e,n,s){if(t){const c=P(t,e,n,s);return t[0](c)}}function P(t,e,n,s){return t[1]&&s?Q(n.ctx.slice(),t[1](s(e))):n.ctx}function at(t,e,n,s){if(t[2]&&s){const c=t[2](s(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const f=[],u=Math.max(e.dirty.length,c.length);for(let i=0;i<u;i+=1)f[i]=e.dirty[i]|c[i];return f}return e.dirty|c}return e.dirty}function lt(t,e,n,s,c,f){if(c){const u=P(e,n,s,f);t.p(u,c)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function _t(t,e){t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function X(t){t.parentNode.removeChild(t)}function gt(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function mt(){return Y(" ")}function bt(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function xt(t,e){t.value=e==null?"":e}function tt(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}let $;function k(t){$=t}function et(){if(!$)throw new Error("Function called outside component initialization");return $}function wt(){const t=et();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const c=tt(e,n);s.slice().forEach(f=>{f.call(t,c)})}}}function $t(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const E=[],I=[],j=[],O=[],nt=Promise.resolve();let B=!1;function st(){B||(B=!0,nt.then(J))}function D(t){j.push(t)}function kt(t){O.push(t)}const F=new Set;let C=0;function J(){const t=$;do{for(;C<E.length;){const e=E[C];C++,k(e),rt(e.$$)}for(k(null),E.length=0,C=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];F.has(n)||(F.add(n),n())}j.length=0}while(E.length);for(;O.length;)O.pop()();B=!1,F.clear(),k(t)}function rt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const A=new Set;let b;function Et(){b={r:0,c:[],p:b}}function vt(){b.r||w(b.c),b=b.p}function K(t,e){t&&t.i&&(A.delete(t),t.i(e))}function St(t,e,n,s){if(t&&t.o){if(A.has(t))return;A.add(t),b.c.push(()=>{A.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function jt(t,e){t.d(1),e.delete(t.key)}function Ct(t,e,n,s,c,f,u,i,a,r,p,_){let l=t.length,h=f.length,d=l;const M={};for(;d--;)M[t[d].key]=d;const v=[],z=new Map,q=new Map;for(d=h;d--;){const o=_(c,f,d),g=n(o);let m=u.get(g);m?s&&m.p(o,e):(m=r(g,o),m.c()),z.set(g,v[d]=m),g in M&&q.set(g,Math.abs(d-M[g]))}const L=new Set,T=new Set;function N(o){K(o,1),o.m(i,p),u.set(o.key,o),p=o.first,h--}for(;l&&h;){const o=v[h-1],g=t[l-1],m=o.key,S=g.key;o===g?(p=o.first,l--,h--):z.has(S)?!u.has(m)||L.has(m)?N(o):T.has(S)?l--:q.get(m)>q.get(S)?(T.add(m),N(o)):(L.add(S),l--):(a(g,u),l--)}for(;l--;){const o=t[l];z.has(o.key)||a(o,u)}for(;h;)N(v[h-1]);return v}function At(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function Mt(t){t&&t.c()}function ct(t,e,n,s){const{fragment:c,on_mount:f,on_destroy:u,after_update:i}=t.$$;c&&c.m(e,n),s||D(()=>{const a=f.map(G).filter(R);u?u.push(...a):w(a),t.$$.on_mount=[]}),i.forEach(D)}function it(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(E.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function zt(t,e,n,s,c,f,u,i=[-1]){const a=$;k(t);const r=t.$$={fragment:null,ctx:null,props:f,update:y,not_equal:c,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:H(),dirty:i,skip_bound:!1,root:e.target||a.$$.root};u&&u(r.root);let p=!1;if(r.ctx=n?n(t,e.props||{},(_,l,...h)=>{const d=h.length?h[0]:l;return r.ctx&&c(r.ctx[_],r.ctx[_]=d)&&(!r.skip_bound&&r.bound[_]&&r.bound[_](d),p&&ot(t,_)),l}):[],r.update(),p=!0,w(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){const _=Z(e.target);r.fragment&&r.fragment.l(_),_.forEach(X)}else r.fragment&&r.fragment.c();e.intro&&K(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),J()}k(a)}class qt{$destroy(){it(this,1),this.$destroy=y}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const c=s.indexOf(n);c!==-1&&s.splice(c,1)}}$set(e){this.$$set&&!V(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function Nt(t,e=y){let n;const s=new Set;function c(i){if(U(t,i)&&(t=i,n)){const a=!x.length;for(const r of s)r[1](),x.push(r,t);if(a){for(let r=0;r<x.length;r+=2)x[r][0](x[r+1]);x.length=0}}}function f(i){c(i(t))}function u(i,a=y){const r=[i,a];return s.add(r),s.size===1&&(n=e(c)||y),i(t),()=>{s.delete(r),s.size===0&&(n(),n=null)}}return{set:c,update:f,subscribe:u}}export{I as A,At as B,kt as C,Ct as D,R as E,jt as F,vt as G,Et as H,qt as S,pt as a,ht as b,ft as c,at as d,gt as e,St as f,dt as g,X as h,zt as i,Y as j,_t as k,bt as l,yt as m,y as n,$t as o,Mt as p,ct as q,it as r,U as s,K as t,lt as u,wt as v,mt as w,xt as x,ut as y,Nt as z};