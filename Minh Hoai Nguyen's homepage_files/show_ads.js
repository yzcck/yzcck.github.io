(function(){var f=!0,h=null,i=!1,aa=function(a,b,c){return a.call.apply(a.bind,arguments)},ba=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},j=function(a,b,c){j=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return j.apply(h,arguments)};var k=(new Date).getTime();var ca=/&/g,da=/</g,ea=/>/g,fa=/\"/g,m={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},p={"'":"\\'"};var ga=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},ha=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,q=function(a){return!a?"pagead2.googlesyndication.com":(a=a.match(ha))?a[0]:"pagead2.googlesyndication.com"};q("");var s=function(a){return!!a&&"function"==typeof a&&!!a.call},ia=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])};function t(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}var ja=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b)return a[Math.floor(c/b*a.length)]}return h},u=function(a){try{return!!a.location.href||""===a.location.href}catch(b){return i}};var w=h,ka=function(){if(!w){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,u(a))b=a;else break;w=b}return w};var x,y=function(a){this.c=[];this.a=a||window;this.b=0;this.d=h},la=function(a,b){this.l=a;this.i=b};y.prototype.n=function(a,b){0==this.b&&0==this.c.length&&(!b||b==window)?(this.b=2,this.g(new la(a,window))):this.h(a,b)};y.prototype.h=function(a,b){this.c.push(new la(a,b||this.a));z(this)};y.prototype.o=function(a){this.b=1;a&&(this.d=this.a.setTimeout(j(this.f,this),a))};y.prototype.f=function(){1==this.b&&(this.d!=h&&(this.a.clearTimeout(this.d),this.d=h),this.b=0);z(this)};y.prototype.p=function(){return f};
y.prototype.nq=y.prototype.n;y.prototype.nqa=y.prototype.h;y.prototype.al=y.prototype.o;y.prototype.rl=y.prototype.f;y.prototype.sz=y.prototype.p;var z=function(a){a.a.setTimeout(j(a.m,a),0)};y.prototype.m=function(){if(0==this.b&&this.c.length){var a=this.c.shift();this.b=2;a.i.setTimeout(j(this.g,this,a),0);z(this)}};y.prototype.g=function(a){this.b=0;a.l()};
var ma=function(a){try{return a.sz()}catch(b){return i}},oa=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&ma(a)&&s(a.nq)&&s(a.nqa)&&s(a.al)&&s(a.rl)},A=function(){if(x&&ma(x))return x;var a=ka(),b=a.google_jobrunner;return oa(b)?x=b:a.google_jobrunner=x=new y(a)},pa=function(a,b){A().nq(a,b)},qa=function(a,b){A().nqa(a,b)};var ra=/MSIE [2-7]|PlayStation|Gecko\/20090226/i,sa=/Android|Opera/,ta=function(){var a=B,b=F.google_ad_width,c=F.google_ad_height,e=["<iframe"],d;for(d in a)a.hasOwnProperty(d)&&ia(e,d+"="+a[d]);e.push('style="left:0;position:absolute;top:0;"');e.push("></iframe>");b="border:none;height:"+c+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+b+"px";return['<ins style="display:inline-table;',b,'"><ins id="',a.id+"_anchor",'" style="display:block;',b,'">',e.join(" "),"</ins></ins>"].join("")};var ua=/^true$/.test("false")?f:i;var va=function(a,b,c){c||(c=ua?"https":"http");return[c,"://",a,b].join("")};var wa=function(){},G=function(a,b,c){switch(typeof b){case "string":xa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==h){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",g=0;g<e;g++)c.push(d),G(a,b[g],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(g=b[d],"function"!=typeof g&&(c.push(e),xa(d,c),c.push(":"),G(a,g,c),e=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},H={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ya=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,xa=function(a,b){b.push('"');b.push(a.replace(ya,function(a){if(a in H)return H[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return H[a]=d+b.toString(16)}));b.push('"')};var I="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_override google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_bid google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_language google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_num_slots_to_rotate google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_override_format google_page_url google_previous_watch google_previous_searches google_referrer_url google_region google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_scs google_skip google_tag_info google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_with_pyv_ads".split(" ");var J=function(a){this.a=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},log:[],shouldLog:0.01>Math.random()?f:i});this.e=a.google_iframe_oncopy;a.setTimeout(j(this.k,this),3E4)},za;var K="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){i+='.call';setTimeout(h,0)}else if(h.match){i+='.nav';w.location.replace(h)}s.log&&s.log.push(i)}";
/[&<>\"]/.test(K)&&(-1!=K.indexOf("&")&&(K=K.replace(ca,"&amp;")),-1!=K.indexOf("<")&&(K=K.replace(da,"&lt;")),-1!=K.indexOf(">")&&(K=K.replace(ea,"&gt;")),-1!=K.indexOf('"')&&(K=K.replace(fa,"&quot;")));za=K;J.prototype.set=function(a,b){this.e.handlers[a]=b;this.a.addEventListener&&this.a.addEventListener("load",j(this.j,this,a),i)};J.prototype.j=function(a){var a=this.a.document.getElementById(a),b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()};
J.prototype.k=function(){if(this.e.shouldLog){var a=this.e.log,b=this.a.document;if(a.length){b=["/pagead/gen_204?id=iframecopy&log=",t(a.join("-")),"&url=",t(b.URL.substring(0,512)),"&ref=",t(b.referrer.substring(0,512))].join("");a.length=0;a=this.a;b=va(q(""),b);a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)}}};var Aa=function(){var a="script";return["<",a,' src="',va(q(""),"/pagead/js/r20120620/r20120410/show_ads_impl.js",""),'"></',a,">"].join("")},Ba=function(a,b,c,e){return function(){var d=i;e&&A().al(3E4);try{if(u(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,o=g.document;if(!o.body||
!o.body.firstChild)o.open(),g.google_async_iframe_close=f,o.write(c)}else{var C=a.document.getElementById(b).contentWindow,Q;g=c;g=""+g;if(g.quote)Q=g.quote();else{for(var o=['"'],D=0;D<g.length;D++){var E=g.charAt(D),na=E.charCodeAt(0),Qa=o,Ra=D+1,R;if(!(R=m[E])){var v;if(31<na&&127>na)v=E;else{var n=E;if(n in p)v=p[n];else if(n in m)v=p[n]=m[n];else{var l=n,r=n.charCodeAt(0);if(31<r&&127>r)l=n;else{if(256>r){if(l="\\x",16>r||256<r)l+="0"}else l="\\u",4096>r&&(l+="0");l+=r.toString(16).toUpperCase()}v=
p[n]=l}}R=v}Qa[Ra]=R}o.push('"');Q=o.join("")}C.location.replace("javascript:"+Q)}d=f}catch($a){C=ka().google_jobrunner,oa(C)&&C.rl()}d&&(new J(a)).set(b,Ba(a,b,c,i))}},Ca=Math.floor(1E6*Math.random()),Da=function(a){for(var a=a.data.split("\n"),b={},c=0;c<a.length;c++){var e=a[c].indexOf("=");-1!=e&&(b[a[c].substr(0,e)]=a[c].substr(e+1))}b[1]==Ca&&(window.google_top_url=b[3])};var Ea=ga("0"),Fa=ga("0.001");window.google_loader_used=f;var L=window;if(!("google_onload_fired"in L)){L.google_onload_fired=i;var Ga=function(){L.google_onload_fired=f};L.addEventListener?L.addEventListener("load",Ga,i):L.attachEvent&&L.attachEvent("onload",Ga)}var M=window,N=2;try{M.top.document==M.document?N=0:u(M.top)&&(N=1)}catch(Ha){}
if(2===N&&top.postMessage&&!window.google_top_experiment&&(window.google_top_experiment=ja(["jp_e","jp_c"],Fa),"jp_e"===window.google_top_experiment)){var O=window;O.addEventListener?O.addEventListener("message",Da,i):O.attachEvent&&O.attachEvent("onmessage",Da);var Ia={"0":"google_loc_request",1:Ca},Ja=[],P;for(P in Ia)Ja.push(P+"="+Ia[P]);top.postMessage(Ja.join("\n"),"*")}window.google_loader_experiment||(window.google_loader_experiment=ja(["async_bad_black","block_bad_black"],Ea)||""||"launch");
var S;a:{try{if(window.google_enable_async!==f&&"blockodd"==window.google_loader_experiment&&1==window.top.location.hostname.length%2){S=i;break a}}catch(Ka){}S=f}var T;if(T=S){var U;if(window.google_enable_async===i)U=0;else{var La=navigator.userAgent,Ma=window.google_loader_experiment;U=(ra.test(La)?i:sa.test(La)?"async_bad_black"==Ma:f)&&!window.google_container_id&&(!window.google_ad_output||"html"==window.google_ad_output)}T=U}
if(T){var V=window;V.google_unique_id?++V.google_unique_id:V.google_unique_id=1;var W=window;if(!W.google_slot_list||!W.google_slot_list.push)W.google_slot_list=[];W.google_slot_list.push([W.google_ad_slot||"",W.google_ad_format||"",W.google_ad_width||"",W.google_ad_height||""].join("."));for(var F=window,_script$$inline_80="script",X,B={allowtransparency:'"true"',frameborder:'"0"',height:'"'+F.google_ad_height+'"',hspace:'"0"',marginwidth:'"0"',marginheight:'"0"',onload:'"'+za+'"',scrolling:'"no"',
vspace:'"0"',width:'"'+F.google_ad_width+'"'},Na=F.document,Y=B.id,Oa=0;!Y||F.document.getElementById(Y);)Y="aswift_"+Oa++;B.id=Y;B.name=Y;Na.write(ta());X=Y;var Pa;F.google_page_url&&(F.google_page_url=""+F.google_page_url);for(var Sa=[],Z=0,Ta=I.length;Z<Ta;Z++){var $=I[Z];if(F[$]!=h){var Ua;try{var Va=[];G(new wa,F[$],Va);Ua=Va.join("")}catch(Wa){}Ua&&ia(Sa,$,"=",Ua,";")}}Pa=Sa.join("");for(var Xa=0,Ya=I.length;Xa<Ya;Xa++)F[I[Xa]]=h;var Za=(new Date).getTime(),ab=window.google_loader_experiment,
bb=window.google_top_experiment,cb=["<!doctype html><html><body><",_script$$inline_80,">",Pa,"google_show_ads_impl=true;google_unique_id=",F.google_unique_id,';google_async_iframe_id="',X,'";google_start_time=',k,";",ab?'google_loader_experiment="'+ab+'";':"",bb?'google_top_experiment="'+bb+'";':"","google_bpp=",Za>k?Za-k:1,";</",_script$$inline_80,">",Aa(),"</body></html>"].join("");(F.document.getElementById(X)?pa:qa)(Ba(F,X,cb,f))}else window.q=k,document.write(Aa());})();
