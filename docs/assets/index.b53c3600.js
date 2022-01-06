import{S as b,i as v,s as h,c as k,e as $,a as m,b as i,u as w,g as L,d as S,t as c,f as p,h as f,j as C,k as j,l as q,m as E,n as _,o as M,p as x,q as y,r as P,v as O,w as N,x as B,y as A}from"./vendor.4f6ed4d3.js";const F=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};F();function H(o){let e,r;const s=o[1].default,t=k(s,o,o[0],null);return{c(){e=$("div"),t&&t.c(),m(e,"class","flex flex-col items-center h-full")},m(n,l){i(n,e,l),t&&t.m(e,null),r=!0},p(n,[l]){t&&t.p&&(!r||l&1)&&w(t,s,n,n[0],r?S(s,n[0],l,null):L(n[0]),null)},i(n){r||(c(t,n),r=!0)},o(n){p(t,n),r=!1},d(n){n&&f(e),t&&t.d(n)}}}function I(o,e,r){let{$$slots:s={},$$scope:t}=e;return o.$$set=n=>{"$$scope"in n&&r(0,t=n.$$scope)},[t,s]}class T extends b{constructor(e){super();v(this,e,I,H,h,{})}}function D(o){let e,r;const s=o[1].default,t=k(s,o,o[0],null);return{c(){e=$("div"),t&&t.c(),m(e,"class","flex flex-col items-center grow-0 mt-8")},m(n,l){i(n,e,l),t&&t.m(e,null),r=!0},p(n,[l]){t&&t.p&&(!r||l&1)&&w(t,s,n,n[0],r?S(s,n[0],l,null):L(n[0]),null)},i(n){r||(c(t,n),r=!0)},o(n){p(t,n),r=!1},d(n){n&&f(e),t&&t.d(n)}}}function K(o,e,r){let{$$slots:s={},$$scope:t}=e;return o.$$set=n=>{"$$scope"in n&&r(0,t=n.$$scope)},[t,s]}class z extends b{constructor(e){super();v(this,e,K,D,h,{})}}function G(o){let e,r;const s=o[1].default,t=k(s,o,o[0],null);return{c(){e=$("div"),t&&t.c(),m(e,"class","flex grow-0 w-full pb-6 px-6 justify-end")},m(n,l){i(n,e,l),t&&t.m(e,null),r=!0},p(n,[l]){t&&t.p&&(!r||l&1)&&w(t,s,n,n[0],r?S(s,n[0],l,null):L(n[0]),null)},i(n){r||(c(t,n),r=!0)},o(n){p(t,n),r=!1},d(n){n&&f(e),t&&t.d(n)}}}function J(o,e,r){let{$$slots:s={},$$scope:t}=e;return o.$$set=n=>{"$$scope"in n&&r(0,t=n.$$scope)},[t,s]}class Q extends b{constructor(e){super();v(this,e,J,G,h,{})}}function R(o){let e,r,s,t;return{c(){e=$("button"),r=C(o[0]),m(e,"class","bg-orange-700 active:bg-orange-800 text-stone-200 p-2 focus:outline-none svelte-ggwqiv")},m(n,l){i(n,e,l),j(e,r),s||(t=q(e,"click",o[1]),s=!0)},p(n,[l]){l&1&&E(r,n[0])},i:_,o:_,d(n){n&&f(e),s=!1,t()}}}function U(o,e,r){let{text:s="..."}=e;function t(n){M.call(this,o,n)}return o.$$set=n=>{"text"in n&&r(0,s=n.text)},[s,t]}class V extends b{constructor(e){super();v(this,e,U,R,h,{text:0})}}const W={nextPage:"nextPage"};function X(o){let e,r,s;return{c(){e=$("h1"),e.textContent="Patterson counter",r=N(),s=$("h2"),s.textContent="for Patterson card game",m(e,"class","text-4xl text-orange-700"),m(s,"class","text-xl text-orange-700")},m(t,n){i(t,e,n),i(t,r,n),i(t,s,n)},d(t){t&&f(e),t&&f(r),t&&f(s)}}}function Y(o){let e,r;return e=new V({props:{text:"Start"}}),e.$on("click",o[0]),{c(){x(e.$$.fragment)},m(s,t){y(e,s,t),r=!0},p:_,i(s){r||(c(e.$$.fragment,s),r=!0)},o(s){p(e.$$.fragment,s),r=!1},d(s){P(e,s)}}}function Z(o){let e,r,s,t,n,l;return e=new z({props:{$$slots:{default:[X]},$$scope:{ctx:o}}}),n=new Q({props:{$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){x(e.$$.fragment),r=N(),s=$("div"),s.innerHTML=`<p>This is an application that helps players to count points in Patterson card game</p> 
    <p class="pt-4">Press <span class="text-orange-700 font-medium">Start</span> button to add players and start counting points.</p>`,t=N(),x(n.$$.fragment),m(s,"class","flex flex-col grow justify-center text-stone-600 p-10")},m(a,u){y(e,a,u),i(a,r,u),i(a,s,u),i(a,t,u),y(n,a,u),l=!0},p(a,u){const d={};u&4&&(d.$$scope={dirty:u,ctx:a}),e.$set(d);const g={};u&4&&(g.$$scope={dirty:u,ctx:a}),n.$set(g)},i(a){l||(c(e.$$.fragment,a),c(n.$$.fragment,a),l=!0)},o(a){p(e.$$.fragment,a),p(n.$$.fragment,a),l=!1},d(a){P(e,a),a&&f(r),a&&f(s),a&&f(t),P(n,a)}}}function ee(o){let e,r;return e=new T({props:{$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){x(e.$$.fragment)},m(s,t){y(e,s,t),r=!0},p(s,[t]){const n={};t&4&&(n.$$scope={dirty:t,ctx:s}),e.$set(n)},i(s){r||(c(e.$$.fragment,s),r=!0)},o(s){p(e.$$.fragment,s),r=!1},d(s){P(e,s)}}}function te(o){const e=O();function r(){e(W.nextPage)}return[r]}class ne extends b{constructor(e){super();v(this,e,te,ee,h,{})}}function se(o){let e;return{c(){e=$("p"),e.textContent="Next page"},m(r,s){i(r,e,s)},p:_,i:_,o:_,d(r){r&&f(e)}}}function re(o){let e,r;return e=new ne({}),e.$on("nextPage",o[1]),{c(){x(e.$$.fragment)},m(s,t){y(e,s,t),r=!0},p:_,i(s){r||(c(e.$$.fragment,s),r=!0)},o(s){p(e.$$.fragment,s),r=!1},d(s){P(e,s)}}}function oe(o){let e,r,s,t;const n=[re,se],l=[];function a(u,d){return u[0]===0?0:1}return r=a(o),s=l[r]=n[r](o),{c(){e=$("div"),s.c(),m(e,"class","m-auto h-full md:max-w-lg bg-stone-300")},m(u,d){i(u,e,d),l[r].m(e,null),t=!0},p(u,[d]){let g=r;r=a(u),r===g?l[r].p(u,d):(A(),p(l[g],1,1,()=>{l[g]=null}),B(),s=l[r],s?s.p(u,d):(s=l[r]=n[r](u),s.c()),c(s,1),s.m(e,null))},i(u){t||(c(s),t=!0)},o(u){p(s),t=!1},d(u){u&&f(e),l[r].d()}}}function le(o,e,r){let s=0;function t(){r(0,s+=1)}return[s,t]}class ae extends b{constructor(e){super();v(this,e,le,oe,h,{})}}new ae({target:document.getElementById("app")});