_jsload2&&_jsload2('copyrightctrl', 'z.extend($b.prototype,{zf:function(){this.B&&this.He(this.B)},initialize:function(a){Vb.prototype.initialize.call(this,a);this.Aa();this.uo();this.ba(a);return this.C},ba:function(a){var b=this;a.addEventListener("load",function(){b.uo()});a.addEventListener("moveend",function(){b.uo()});a.addEventListener("zoomend",function(){b.uo()});a.addEventListener("maptypechange",function(){b.C&&(b.C.style.color=b.B.oa().zm())})},Aa:function(){Vb.prototype.Aa.call(this);z.D.Ua(this.C,"BMap_cpyCtrl");var a= this.C.style;a.cursor="default";a.whiteSpace="nowrap";a.MozUserSelect="none";a.color=this.B.oa().zm();a.background="none";a.font="11px/15px "+G.fontFamily;Vb.prototype.Nr.call(this)},uo:function(){if(this.B&&this.C&&0!=this.cc.length)for(var a=0,b=this.cc.length;a<b;a++){this.B.fa();var c=this.B.xb({x:0,y:0}),e=this.B.xb({x:this.B.width,y:this.B.height}),c=new fb(c,e);if(this.cc[a].bounds&&c.ot(this.cc[a].bounds)==s){if(this.C)for(e=0;e<this.C.children.length;e++)if(this.C.children[e].getAttribute("_cid")== this.cc[a].id&&"none"!=this.C.children[e].style.display){this.C.children[e].style.display="none";return}}else if(this.C){for(var c=t,e=0,f=this.C.children.length;e<f;e++)if(this.C.children[e].getAttribute("_cid")==this.cc[a].id){c=q;this.C.children[e].style.display="inline";this.C.children[e].innerHTML!=this.cc[a].content&&(this.C.children[e].innerHTML=this.cc[a].content);break}c||this.Uq(this.cc[a])}}},Bw:function(a){if(a&&Wa(a.id)&&!isNaN(a.id)){var b={bounds:s,content:""},c;for(c in a)b[c]=a[c]; if(a=this.pm(a.id))for(var e in b)a[e]=b[e];else this.cc.push(b);this.uo()}},pm:function(a){for(var b=0,c=this.cc.length;b<c;b++)if(this.cc[b].id==a)return this.cc[b]},PD:w("cc"),qF:function(a){for(var b,c=0,e=this.cc.length;c<e;c++)this.cc[c].id==a&&(b=this.cc.splice(c,1),c--,e=this.cc.length);(a=this.Jd(a))&&a.parentNode&&a.parentNode.removeChild(a);this.uo();return b},Uq:function(a){this.C&&(this.C.innerHTML+="<span _cid=\'"+a.id+"\'>"+a.content+"</span>")},Jd:function(a){var b=Vb.prototype.Jd.call(this); if(Hb(a)){if(b)for(var c=0,e=b.children.length;c<e;c++)if(b.children[c].getAttribute("_cid")==a)return b.children[c]}else return b}});T(wf,{addCopyright:wf.Bw,removeCopyright:wf.qF,getCopyright:wf.pm,getCopyrightCollection:wf.PD}); ');