!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@donkeyclip/motorcortex")):"function"==typeof define&&define.amd?define(["@donkeyclip/motorcortex"],e):(t="undefined"!=typeof globalThis?globalThis:t||self)["@donkeyclip/motorcortex-scroller"]=e(t.MotorCortex)}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},s=function(t){return t&&t.Math==Math&&t},a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof o&&o)||function(){return this}()||Function("return this")(),u={},c=function(t){try{return!!t()}catch(t){return!0}},l=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f=!c((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),h=f,p=Function.prototype.call,d=h?p.bind(p):function(){return p.apply(p,arguments)},v={},b={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,g=y&&!b.call({1:2},1);v.f=g?function(t){var e=y(this,t);return!!e&&e.enumerable}:b;var m,w,S=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},T=f,j=Function.prototype,O=j.bind,M=j.call,x=T&&O.bind(M,M),k=T?function(t){return t&&x(t)}:function(t){return t&&function(){return M.apply(t,arguments)}},E=k,P=E({}.toString),C=E("".slice),A=function(t){return C(P(t),8,-1)},_=k,I=c,F=A,D=a.Object,L=_("".split),N=I((function(){return!D("z").propertyIsEnumerable(0)}))?function(t){return"String"==F(t)?L(t,""):D(t)}:D,z=a.TypeError,G=function(t){if(null==t)throw z("Can't call method on "+t);return t},W=N,B=G,R=function(t){return W(B(t))},q=function(t){return"function"==typeof t},J=q,Y=function(t){return"object"==typeof t?null!==t:J(t)},K=a,U=q,X=function(t){return U(t)?t:void 0},H=function(t,e){return arguments.length<2?X(K[t]):K[t]&&K[t][e]},Q=k({}.isPrototypeOf),V=H("navigator","userAgent")||"",$=a,Z=V,tt=$.process,et=$.Deno,nt=tt&&tt.versions||et&&et.version,rt=nt&&nt.v8;rt&&(w=(m=rt.split("."))[0]>0&&m[0]<4?1:+(m[0]+m[1])),!w&&Z&&(!(m=Z.match(/Edge\/(\d+)/))||m[1]>=74)&&(m=Z.match(/Chrome\/(\d+)/))&&(w=+m[1]);var it=w,ot=it,st=c,at=!!Object.getOwnPropertySymbols&&!st((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&ot&&ot<41})),ut=at&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ct=H,lt=q,ft=Q,ht=ut,pt=a.Object,dt=ht?function(t){return"symbol"==typeof t}:function(t){var e=ct("Symbol");return lt(e)&&ft(e.prototype,pt(t))},vt=a.String,bt=q,yt=function(t){try{return vt(t)}catch(t){return"Object"}},gt=a.TypeError,mt=function(t){if(bt(t))return t;throw gt(yt(t)+" is not a function")},wt=mt,St=d,Tt=q,jt=Y,Ot=a.TypeError,Mt={exports:{}},xt=a,kt=Object.defineProperty,Et=function(t,e){try{kt(xt,t,{value:e,configurable:!0,writable:!0})}catch(n){xt[t]=e}return e},Pt=Et,Ct="__core-js_shared__",At=a[Ct]||Pt(Ct,{}),_t=At;(Mt.exports=function(t,e){return _t[t]||(_t[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE",source:"https://github.com/zloirock/core-js"});var It=G,Ft=a.Object,Dt=function(t){return Ft(It(t))},Lt=Dt,Nt=k({}.hasOwnProperty),zt=Object.hasOwn||function(t,e){return Nt(Lt(t),e)},Gt=k,Wt=0,Bt=Math.random(),Rt=Gt(1..toString),qt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Rt(++Wt+Bt,36)},Jt=a,Yt=Mt.exports,Kt=zt,Ut=qt,Xt=at,Ht=ut,Qt=Yt("wks"),Vt=Jt.Symbol,$t=Vt&&Vt.for,Zt=Ht?Vt:Vt&&Vt.withoutSetter||Ut,te=function(t){if(!Kt(Qt,t)||!Xt&&"string"!=typeof Qt[t]){var e="Symbol."+t;Xt&&Kt(Vt,t)?Qt[t]=Vt[t]:Qt[t]=Ht&&$t?$t(e):Zt(e)}return Qt[t]},ee=d,ne=Y,re=dt,ie=function(t,e){var n=t[e];return null==n?void 0:wt(n)},oe=function(t,e){var n,r;if("string"===e&&Tt(n=t.toString)&&!jt(r=St(n,t)))return r;if(Tt(n=t.valueOf)&&!jt(r=St(n,t)))return r;if("string"!==e&&Tt(n=t.toString)&&!jt(r=St(n,t)))return r;throw Ot("Can't convert object to primitive value")},se=te,ae=a.TypeError,ue=se("toPrimitive"),ce=function(t,e){if(!ne(t)||re(t))return t;var n,r=ie(t,ue);if(r){if(void 0===e&&(e="default"),n=ee(r,t,e),!ne(n)||re(n))return n;throw ae("Can't convert object to primitive value")}return void 0===e&&(e="number"),oe(t,e)},le=dt,fe=function(t){var e=ce(t,"string");return le(e)?e:e+""},he=Y,pe=a.document,de=he(pe)&&he(pe.createElement),ve=function(t){return de?pe.createElement(t):{}},be=!l&&!c((function(){return 7!=Object.defineProperty(ve("div"),"a",{get:function(){return 7}}).a})),ye=l,ge=d,me=v,we=S,Se=R,Te=fe,je=zt,Oe=be,Me=Object.getOwnPropertyDescriptor;u.f=ye?Me:function(t,e){if(t=Se(t),e=Te(e),Oe)try{return Me(t,e)}catch(t){}if(je(t,e))return we(!ge(me.f,t,e),t[e])};var xe={},ke=l&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Ee=a,Pe=Y,Ce=Ee.String,Ae=Ee.TypeError,_e=function(t){if(Pe(t))return t;throw Ae(Ce(t)+" is not an object")},Ie=l,Fe=be,De=ke,Le=_e,Ne=fe,ze=a.TypeError,Ge=Object.defineProperty,We=Object.getOwnPropertyDescriptor,Be="enumerable",Re="configurable",qe="writable";xe.f=Ie?De?function(t,e,n){if(Le(t),e=Ne(e),Le(n),"function"==typeof t&&"prototype"===e&&"value"in n&&qe in n&&!n.writable){var r=We(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:Re in n?n.configurable:r.configurable,enumerable:Be in n?n.enumerable:r.enumerable,writable:!1})}return Ge(t,e,n)}:Ge:function(t,e,n){if(Le(t),e=Ne(e),Le(n),Fe)try{return Ge(t,e,n)}catch(t){}if("get"in n||"set"in n)throw ze("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Je=xe,Ye=S,Ke=l?function(t,e,n){return Je.f(t,e,Ye(1,n))}:function(t,e,n){return t[e]=n,t},Ue={exports:{}},Xe=q,He=At,Qe=k(Function.toString);Xe(He.inspectSource)||(He.inspectSource=function(t){return Qe(t)});var Ve,$e,Ze,tn=He.inspectSource,en=q,nn=tn,rn=a.WeakMap,on=en(rn)&&/native code/.test(nn(rn)),sn=Mt.exports,an=qt,un=sn("keys"),cn={},ln=on,fn=a,hn=k,pn=Y,dn=Ke,vn=zt,bn=At,yn=function(t){return un[t]||(un[t]=an(t))},gn=cn,mn="Object already initialized",wn=fn.TypeError,Sn=fn.WeakMap;if(ln||bn.state){var Tn=bn.state||(bn.state=new Sn),jn=hn(Tn.get),On=hn(Tn.has),Mn=hn(Tn.set);Ve=function(t,e){if(On(Tn,t))throw new wn(mn);return e.facade=t,Mn(Tn,t,e),e},$e=function(t){return jn(Tn,t)||{}},Ze=function(t){return On(Tn,t)}}else{var xn=yn("state");gn[xn]=!0,Ve=function(t,e){if(vn(t,xn))throw new wn(mn);return e.facade=t,dn(t,xn,e),e},$e=function(t){return vn(t,xn)?t[xn]:{}},Ze=function(t){return vn(t,xn)}}var kn={set:Ve,get:$e,has:Ze,enforce:function(t){return Ze(t)?$e(t):Ve(t,{})},getterFor:function(t){return function(e){var n;if(!pn(e)||(n=$e(e)).type!==t)throw wn("Incompatible receiver, "+t+" required");return n}}},En=l,Pn=zt,Cn=Function.prototype,An=En&&Object.getOwnPropertyDescriptor,_n=Pn(Cn,"name"),In=_n&&"something"===function(){}.name,Fn=_n&&(!En||En&&An(Cn,"name").configurable),Dn=a,Ln=q,Nn=zt,zn=Ke,Gn=Et,Wn=tn,Bn={EXISTS:_n,PROPER:In,CONFIGURABLE:Fn}.CONFIGURABLE,Rn=kn.get,qn=kn.enforce,Jn=String(String).split("String");(Ue.exports=function(t,e,n,r){var i,o=!!r&&!!r.unsafe,s=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet,u=r&&void 0!==r.name?r.name:e;Ln(n)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!Nn(n,"name")||Bn&&n.name!==u)&&zn(n,"name",u),(i=qn(n)).source||(i.source=Jn.join("string"==typeof u?u:""))),t!==Dn?(o?!a&&t[e]&&(s=!0):delete t[e],s?t[e]=n:zn(t,e,n)):s?t[e]=n:Gn(e,n)})(Function.prototype,"toString",(function(){return Ln(this)&&Rn(this).source||Wn(this)}));var Yn={},Kn=Math.ceil,Un=Math.floor,Xn=function(t){var e=+t;return e!=e||0===e?0:(e>0?Un:Kn)(e)},Hn=Xn,Qn=Math.max,Vn=Math.min,$n=function(t,e){var n=Hn(t);return n<0?Qn(n+e,0):Vn(n,e)},Zn=Xn,tr=Math.min,er=function(t){return t>0?tr(Zn(t),9007199254740991):0},nr=function(t){return er(t.length)},rr=R,ir=$n,or=nr,sr=function(t){return function(e,n,r){var i,o=rr(e),s=or(o),a=ir(r,s);if(t&&n!=n){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((t||a in o)&&o[a]===n)return t||a||0;return!t&&-1}},ar={includes:sr(!0),indexOf:sr(!1)},ur=zt,cr=R,lr=ar.indexOf,fr=cn,hr=k([].push),pr=function(t,e){var n,r=cr(t),i=0,o=[];for(n in r)!ur(fr,n)&&ur(r,n)&&hr(o,n);for(;e.length>i;)ur(r,n=e[i++])&&(~lr(o,n)||hr(o,n));return o},dr=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],vr=pr,br=dr.concat("length","prototype");Yn.f=Object.getOwnPropertyNames||function(t){return vr(t,br)};var yr={};yr.f=Object.getOwnPropertySymbols;var gr=H,mr=Yn,wr=yr,Sr=_e,Tr=k([].concat),jr=gr("Reflect","ownKeys")||function(t){var e=mr.f(Sr(t)),n=wr.f;return n?Tr(e,n(t)):e},Or=zt,Mr=jr,xr=u,kr=xe,Er=c,Pr=q,Cr=/#|\.prototype\./,Ar=function(t,e){var n=Ir[_r(t)];return n==Dr||n!=Fr&&(Pr(e)?Er(e):!!e)},_r=Ar.normalize=function(t){return String(t).replace(Cr,".").toLowerCase()},Ir=Ar.data={},Fr=Ar.NATIVE="N",Dr=Ar.POLYFILL="P",Lr=Ar,Nr=a,zr=u.f,Gr=Ke,Wr=Ue.exports,Br=Et,Rr=function(t,e,n){for(var r=Mr(e),i=kr.f,o=xr.f,s=0;s<r.length;s++){var a=r[s];Or(t,a)||n&&Or(n,a)||i(t,a,o(e,a))}},qr=Lr,Jr=function(t,e){var n,r,i,o,s,a=t.target,u=t.global,c=t.stat;if(n=u?Nr:c?Nr[a]||Br(a,{}):(Nr[a]||{}).prototype)for(r in e){if(o=e[r],i=t.noTargetGet?(s=zr(n,r))&&s.value:n[r],!qr(u?r:a+(c?".":"#")+r,t.forced)&&void 0!==i){if(typeof o==typeof i)continue;Rr(o,i)}(t.sham||i&&i.sham)&&Gr(o,"sham",!0),Wr(n,r,o,t)}},Yr={};Yr[te("toStringTag")]="z";var Kr=a,Ur="[object z]"===String(Yr),Xr=q,Hr=A,Qr=te("toStringTag"),Vr=Kr.Object,$r="Arguments"==Hr(function(){return arguments}()),Zr=Ur?Hr:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Vr(t),Qr))?n:$r?Hr(e):"Object"==(r=Hr(e))&&Xr(e.callee)?"Arguments":r},ti=Zr,ei=a.String,ni=fe,ri=xe,ii=S,oi=function(t,e,n){var r=ni(e);r in t?ri.f(t,r,ii(0,n)):t[r]=n},si=$n,ai=nr,ui=oi,ci=a.Array,li=Math.max,fi=function(t,e,n){for(var r=ai(t),i=si(e,r),o=si(void 0===n?r:n,r),s=ci(li(o-i,0)),a=0;i<o;i++,a++)ui(s,a,t[i]);return s.length=a,s},hi=Math.floor,pi=function(t,e){var n=t.length,r=hi(n/2);return n<8?di(t,e):vi(t,pi(fi(t,0,r),e),pi(fi(t,r),e),e)},di=function(t,e){for(var n,r,i=t.length,o=1;o<i;){for(r=o,n=t[o];r&&e(t[r-1],n)>0;)t[r]=t[--r];r!==o++&&(t[r]=n)}return t},vi=function(t,e,n,r){for(var i=e.length,o=n.length,s=0,a=0;s<i||a<o;)t[s+a]=s<i&&a<o?r(e[s],n[a])<=0?e[s++]:n[a++]:s<i?e[s++]:n[a++];return t},bi=pi,yi=c,gi=V.match(/firefox\/(\d+)/i),mi=!!gi&&+gi[1],wi=/MSIE|Trident/.test(V),Si=V.match(/AppleWebKit\/(\d+)\./),Ti=!!Si&&+Si[1],ji=Jr,Oi=k,Mi=mt,xi=Dt,ki=nr,Ei=function(t){if("Symbol"===ti(t))throw TypeError("Cannot convert a Symbol value to a string");return ei(t)},Pi=c,Ci=bi,Ai=function(t,e){var n=[][t];return!!n&&yi((function(){n.call(null,e||function(){throw 1},1)}))},_i=mi,Ii=wi,Fi=it,Di=Ti,Li=[],Ni=Oi(Li.sort),zi=Oi(Li.push),Gi=Pi((function(){Li.sort(void 0)})),Wi=Pi((function(){Li.sort(null)})),Bi=Ai("sort"),Ri=!Pi((function(){if(Fi)return Fi<70;if(!(_i&&_i>3)){if(Ii)return!0;if(Di)return Di<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)Li.push({k:e+r,v:n})}for(Li.sort((function(t,e){return e.v-t.v})),r=0;r<Li.length;r++)e=Li[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}}));ji({target:"Array",proto:!0,forced:Gi||!Wi||!Bi||!Ri},{sort:function(t){void 0!==t&&Mi(t);var e=xi(this);if(Ri)return void 0===t?Ni(e):Ni(e,t);var n,r,i=[],o=ki(e);for(r=0;r<o;r++)r in e&&zi(i,e[r]);for(Ci(i,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:Ei(e)>Ei(n)?1:-1}}(t)),n=i.length,r=0;r<n;)e[r]=i[r++];for(;r<o;)delete e[r++];return e}});var qi=pr,Ji=dr,Yi=Object.keys||function(t){return qi(t,Ji)},Ki=l,Ui=k,Xi=d,Hi=c,Qi=Yi,Vi=yr,$i=v,Zi=Dt,to=N,eo=Object.assign,no=Object.defineProperty,ro=Ui([].concat),io=!eo||Hi((function(){if(Ki&&1!==eo({b:1},eo(no({},"a",{enumerable:!0,get:function(){no(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=eo({},t)[n]||Qi(eo({},e)).join("")!=r}))?function(t,e){for(var n=Zi(t),r=arguments.length,i=1,o=Vi.f,s=$i.f;r>i;)for(var a,u=to(arguments[i++]),c=o?ro(Qi(u),o(u)):Qi(u),l=c.length,f=0;l>f;)a=c[f++],Ki&&!Xi(s,u,a)||(n[a]=u[a]);return n}:eo,oo=io;Jr({target:"Object",stat:!0,forced:Object.assign!==oo},{assign:oo});var so=A,ao=Array.isArray||function(t){return"Array"==so(t)},uo=k,co=c,lo=q,fo=Zr,ho=tn,po=function(){},vo=[],bo=H("Reflect","construct"),yo=/^\s*(?:class|function)\b/,go=uo(yo.exec),mo=!yo.exec(po),wo=function(t){if(!lo(t))return!1;try{return bo(po,vo,t),!0}catch(t){return!1}},So=function(t){if(!lo(t))return!1;switch(fo(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return mo||!!go(yo,ho(t))}catch(t){return!0}};So.sham=!0;var To=!bo||co((function(){var t;return wo(wo.call)||!wo(Object)||!wo((function(){t=!0}))||t}))?So:wo,jo=a,Oo=ao,Mo=To,xo=Y,ko=te("species"),Eo=jo.Array,Po=function(t){var e;return Oo(t)&&(e=t.constructor,(Mo(e)&&(e===Eo||Oo(e.prototype))||xo(e)&&null===(e=e[ko]))&&(e=void 0)),void 0===e?Eo:e},Co=c,Ao=it,_o=te("species"),Io=Jr,Fo=a,Do=c,Lo=ao,No=Y,zo=Dt,Go=nr,Wo=oi,Bo=function(t,e){return new(Po(t))(0===e?0:e)},Ro=function(t){return Ao>=51||!Co((function(){var e=[];return(e.constructor={})[_o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},qo=it,Jo=te("isConcatSpreadable"),Yo=9007199254740991,Ko="Maximum allowed index exceeded",Uo=Fo.TypeError,Xo=qo>=51||!Do((function(){var t=[];return t[Jo]=!1,t.concat()[0]!==t})),Ho=Ro("concat"),Qo=function(t){if(!No(t))return!1;var e=t[Jo];return void 0!==e?!!e:Lo(t)};Io({target:"Array",proto:!0,forced:!Xo||!Ho},{concat:function(t){var e,n,r,i,o,s=zo(this),a=Bo(s,0),u=0;for(e=-1,r=arguments.length;e<r;e++)if(Qo(o=-1===e?s:arguments[e])){if(u+(i=Go(o))>Yo)throw Uo(Ko);for(n=0;n<i;n++,u++)n in o&&Wo(a,u,o[n])}else{if(u>=Yo)throw Uo(Ko);Wo(a,u++,o)}return a.length=u,a}});var Vo=new n.default.TimeCapsule,$o="@donkeyclip/scrollbar_player",Zo=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.clip=e.clip,this.host=this.clip.props.host,this.swipeAxis="vertical"===(e.swipeAxis||"vertical")?"clientY":"clientX";var i=e.mode||"free";"free"===i?(this.host.onwheel=this.handlePlainWheel.bind(this),this.journey=Vo.startJourney(this.clip),this.host.addEventListener("touchstart",this._touchstart.bind(this)),this.host.addEventListener("touchmove",this._touchmove.bind(this))):"chapters"===i&&(this.transitionTimeout=null,this.transitionSpeed=e.transitionSpeed||1,this.easing=n.default.utils.easings[e.easing||"easeOutQuart"],this.transitionStart=null,e.chapters.sort((function(t,e){return t.millisecond-e.millisecond})),this.chapters=e.chapters,this.transitioning=!1,this.host.onwheel=this.handleChapterWheel.bind(this),this.host.addEventListener("touchstart",this._touchstart.bind(this)),this.host.addEventListener("touchmove",this._touchmove.bind(this)),this.host.addEventListener("touchend",this._chapterTouchend.bind(this)));var o=5/(e.wheelSpeed||5);this.speed=1/o;var s={display:!0,position:"right",color:"purple"};void 0!==e.progressBar&&Object.assign(s,e.progressBar),this._setupScrollbar(s)}var e,o,s;return e=t,(o=[{key:"_setupScrollbar",value:function(t){var e=this;if(!1!==t.display){var n,r,i=document.createElement("div");switch(i.setAttribute("id","".concat($o,"-scrollbarId")),t.position){case"left":n="left:0px; top: 0px; width: 2px; height: 0%;",r="height";break;case"right":n="right:0px; top: 0px; width: 2px; height: 0%;",r="height";break;case"top":n="top:0px; left: 0px; height: 2px; width: 0%;",r="width";break;case"bottom":n="bottom:0px; left: 0px; height: 2px; width: 0%;",r="width"}i.setAttribute("style","".concat(n," position:absolute; background: ").concat(t.color,";")),this.host.appendChild(i),this.clip.subscribe("".concat($o,"_").concat((new Date).getTime()),(function(t){i.style[r]="".concat(100*t/e.clip.duration,"%")}))}}},{key:"_touchstart",value:function(t){t.preventDefault(),1===t.touches.length&&(this.previousTouch=t.touches[0][this.swipeAxis],this.transitioning=!1)}},{key:"_touchmove",value:function(t){t.preventDefault(),this.transitioning=!1,null!==this.transitionTimeout&&clearTimeout(this.transitionTimeout);var e=this.previousTouch-event.touches[0][this.swipeAxis];this.direction=e>0?"fw":"bw",this.previousTouch=event.touches[0][this.swipeAxis];var n=10*e*this.speed,r=Vo.startJourney(this.clip),i=this.clip.runTimeInfo.currentMillisecond+n;i<0?(i=0,n=0):i>this.clip.duration&&(i=this.clip.duration,n=0),r.destination(i)}},{key:"_chapterTouchend",value:function(t){var e=this;if(t.preventDefault(),"fw"===this.direction&&this.clip.runTimeInfo.currentMillisecond!==this.clip.duration){var n=this._getNextChapter(this.clip.runTimeInfo.currentMillisecond);this.transitionTimeout=setTimeout((function(){e.transitionToChapter(n,"fw")}),this.latency)}else if("bw"===this.direction&&0!==this.clip.runTimeInfo.currentMillisecond){var r=this._getPreviousChapter(this.clip.runTimeInfo.currentMillisecond);this.transitionTimeout=setTimeout((function(){e.transitionToChapter(r,"bw")}),this.latency)}}},{key:"_getNextChapter",value:function(t){for(var e=0;e<this.chapters.length;e++){var n=this.chapters[e];if(n.millisecond>t)return n.millisecond}return this.clip.duration}},{key:"_getPreviousChapter",value:function(t){for(var e=this.chapters.length-1;e>=0;e--){var n=this.chapters[e];if(n.millisecond<t)return n.millisecond}return 0}},{key:"handleChapterWheel",value:function(t){var e=this;t.preventDefault(),this.transitioning=!1,null!==this.transitionTimeout&&clearTimeout(this.transitionTimeout);var n=t.deltaY*this.speed,r=Vo.startJourney(this.clip),i=this.clip.runTimeInfo.currentMillisecond+n;if(i<0?(i=0,n=0):i>this.clip.duration&&(i=this.clip.duration,n=0),n>0){var o=this._getNextChapter(i);this.transitionTimeout=setTimeout((function(){e.transitionToChapter(o,"fw")}),this.latency)}else if(n<0){var s=this._getPreviousChapter(i);this.transitionTimeout=setTimeout((function(){e.transitionToChapter(s,"bw")}),this.latency)}r.destination(i)}},{key:"transitionToChapter",value:function(t){this.transitioning=!0,this.transitionStart=null,this.targetMillisecond=t,this.startMillisecond=this.clip.runTimeInfo.currentMillisecond,this.journey=Vo.startJourney(this.clip),this.direction=this.targetMillisecond>=this.startMillisecond?"fw":"bw",window.requestAnimationFrame(this._step.bind(this))}},{key:"_step",value:function(t){null===this.transitionStart&&(this.transitionStart=t);var e,n=t-this.transitionStart,r=!1;if("fw"===this.direction?(e=this.startMillisecond+n*this.transitionSpeed)>this.targetMillisecond&&(e=this.targetMillisecond,r=!0):(e=this.startMillisecond-n*this.transitionSpeed)<this.targetMillisecond&&(e=this.targetMillisecond,r=!0),!1!==this.transitioning){var i,o=Math.abs(e-this.startMillisecond)/Math.abs(this.targetMillisecond-this.startMillisecond);i="fw"===this.direction?this.startMillisecond+this.easing(o)*(this.targetMillisecond-this.startMillisecond):this.startMillisecond-this.easing(o)*(this.startMillisecond-this.targetMillisecond),this.journey.station(i),r?this.journey.destination():window.requestAnimationFrame(this._step.bind(this))}}},{key:"handlePlainWheel",value:function(t){t.preventDefault();var e=t.deltaY*this.speed,n=this.clip.runTimeInfo.currentMillisecond+e;n<0?n=0:n>this.clip.duration&&(n=this.clip.duration),this.journey.station(n)}}])&&i(e.prototype,o),s&&i(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}();return Zo}));
