(function(){var f,g="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},h;
if("function"==typeof Object.setPrototypeOf)h=Object.setPrototypeOf;else{var k;a:{var l={H:!0},m={};try{m.__proto__=l;k=m.H;break a}catch(a){}k=!1}h=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var n=h,p=this;
function q(a){a=a.split(".");for(var b=p,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function r(a,b,c){return a.call.apply(a.bind,arguments)}
function aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=r:t=aa;return t.apply(null,arguments)}
var v=Date.now||function(){return+new Date};
function w(a,b){var c=a.split("."),d=p;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
;function x(){this.h=this.h;this.m=this.m}
x.prototype.h=!1;x.prototype.dispose=function(){this.h||(this.h=!0,this.o())};
x.prototype.o=function(){if(this.m)for(;this.m.length;)this.m.shift()()};var y=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};w("yt.config_",y);function z(a,b){return a in y?y[a]:b}
function B(){return z("SCHEDULER_SOFT_STATE_TIMER",800)}
;var C,D=z("EXPERIMENT_FLAGS",{}).web_emulated_idle_callback_delay;C=void 0===D?300:Number(D||0);var E=1E3/60-3;
function F(a){a=void 0===a?{}:a;x.call(this);this.a=[];this.a[4]=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];this.f=0;this.G=a.timeout||1;this.c={};this.l=E;this.s=this.b=this.j=0;this.u=this.i=!1;this.g=[];this.B=t(this.J,this);this.F=t(this.L,this);this.C=t(this.I,this);this.D=t(this.K,this);this.v=!1;var b;if(b=!!window.requestIdleCallback)b=!z("EXPERIMENT_FLAGS",{}).disable_scheduler_requestIdleCallback;this.A=b;(this.w=!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",
this.B)}
F.prototype=g(x.prototype);F.prototype.constructor=F;if(n)n(F,x);else for(var G in x)if("prototype"!=G)if(Object.defineProperties){var H=Object.getOwnPropertyDescriptor(x,G);H&&Object.defineProperty(F,G,H)}else F[G]=x[G];F.a=x.prototype;function I(a,b){var c=v();J(b);c=v()-c;a.i||(a.l-=c)}
function K(a,b,c,d){++a.s;if(10==c)return I(a,b),a.s;var e=a.s;a.c[e]=b;a.i&&!d?a.g.push({id:e,priority:c}):(a.a[c].push(e),a.u||a.i||(0!=a.b&&L(a)!=a.j&&M(a),a.start()));return e}
function N(a){a.g.length=0;for(var b=4;0<=b;b--)a.a[b].length=0;a.c={};M(a)}
function L(a){for(var b=4;b>=a.f;b--)if(0<a.a[b].length)return 0<b?!document.hidden&&a.w?3:2:1;return 0}
function J(a){try{a()}catch(b){(a=q("yt.logging.errors.log"))&&a(b)}}
f=F.prototype;f.I=function(a){var b=void 0;a&&(b=a.timeRemaining());this.v=!0;O(this,b);this.v=!1};
f.L=function(){O(this)};
f.K=function(){O(this)};
f.J=function(){this.b&&(M(this),this.start())};
function O(a,b){M(a);a.i=!0;for(var c=v()+(b||a.l),d=a.a[4];d.length;){var e=d.shift(),u=a.c[e];delete a.c[e];u&&J(u)}d=a.v?0:1;d=a.f>d?a.f:d;if(!(v()>=c)){do{a:{e=a;u=d;for(var A=3;A>=u;A--)for(var Q=e.a[A];Q.length;){var R=Q.shift(),S=e.c[R];delete e.c[R];if(S){e=S;break a}}e=null}e&&J(e)}while(e&&v()<c)}a.i=!1;c=0;for(d=a.g.length;c<d;c++)e=a.g[c],a.a[e.priority].push(e.id);a.l=E;a:{for(c=3;0<=c;c--)if(a.a[c].length){c=!0;break a}c=!1}(c||a.g.length)&&a.start();a.g.length=0}
f.start=function(){this.u=!1;if(0==this.b)switch(this.j=L(this),this.j){case 1:var a=this.C;this.b=this.A?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,C);break;case 2:this.b=window.setTimeout(this.F,this.G);break;case 3:this.b=window.requestAnimationFrame(this.D)}};
f.pause=function(){M(this);this.u=!0};
function M(a){if(a.b){switch(a.j){case 1:var b=a.b;a.A?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:window.clearTimeout(a.b);break;case 3:window.cancelAnimationFrame(a.b)}a.b=0}}
f.o=function(){N(this);M(this);this.w&&document.removeEventListener("visibilitychange",this.B);x.prototype.o.call(this)};var P=q("yt.scheduler.instance.timerIdMap_")||{},T=0,U=0;function V(){var a=q("ytglobal.schedulerInstanceInstance_");if(!a||a.h)a=new F(z("scheduler",void 0)||{}),w("ytglobal.schedulerInstanceInstance_",a);return a}
function ba(){var a=q("ytglobal.schedulerInstanceInstance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),w("ytglobal.schedulerInstanceInstance_",null))}
function ca(){N(V())}
function da(a,b,c){if(0==c||void 0===c)return c=void 0===c,-K(V(),a,b,c);var d=window.setTimeout(function(){var c=K(V(),a,b);P[d]=c},c);
return d}
function ea(a){I(V(),a)}
function fa(a){var b=V();if(0>a)delete b.c[-a];else{var c=P[a];c?(delete b.c[c],delete P[a]):window.clearTimeout(a)}}
function W(a){var b=q("ytcsi.tick");b&&b(a)}
function ha(){W("jse");X()}
function X(){window.clearTimeout(T);V().start()}
function ia(){V().pause();window.clearTimeout(T);T=window.setTimeout(ha,B())}
function Y(){window.clearTimeout(U);U=window.setTimeout(function(){W("jset");Z(0)},B())}
function Z(a){Y();var b=V();b.f=a;b.start()}
function ja(a){Y();var b=V();b.f>a&&(b.f=a,b.start())}
function ka(){window.clearTimeout(U);var a=V();a.f=0;a.start()}
;q("yt.scheduler.initialized")||(w("yt.scheduler.instance.dispose",ba),w("yt.scheduler.instance.addJob",da),w("yt.scheduler.instance.addImmediateJob",ea),w("yt.scheduler.instance.cancelJob",fa),w("yt.scheduler.instance.cancelAllJobs",ca),w("yt.scheduler.instance.start",X),w("yt.scheduler.instance.pause",ia),w("yt.scheduler.instance.setPriorityThreshold",Z),w("yt.scheduler.instance.enablePriorityThreshold",ja),w("yt.scheduler.instance.clearPriorityThreshold",ka),w("yt.scheduler.initialized",!0));}).call(this);
