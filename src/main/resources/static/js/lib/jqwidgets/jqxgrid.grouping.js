/*
jQWidgets v4.5.4 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.dataview.grouping=function(){this.loadgrouprecords=function(b,c,d,e,f,g,h,i,j){for(var k=b,l=this,m=new Array,n=0;n<l.groups.length;n++)m[n]=l.generatekey();var o=new Array,p=0,m=m,q=new Array,r=c,s=c,t=l.groups.length;this.loadedrecords=new Array,this.bounditems=new Array,this.loadedrecords=new Array,this.loadedrootgroups=new Array,this.loadedgroups=new Array,this.loadedgroupsByKey=new Array,this.sortedgroups=new Array;var u=null!=this.sortdata,v=u?this.sortdata:this.records;if(this.pageable){var w=new Array,x=0;v[c]||(a.each(v,function(a,b){w[c+a++]=this}),v=w)}if(this.virtualmode){for(var w=new Array,x=0,r=0;r<d-c;r++)v[r]?w[c+x++]=v[r]:v[c+x]&&(w[c+x]=v[c+x],x++);r=0,v=w}for(var y=c;y<d;y++){var z={};z=u?a.extend({},v[y].value):a.extend({},v[y]),id=z[l.uniqueId],(f>=i||id!=h[f][l.uniqueId]||g&&g[id])&&(j[j.length]=f);for(var A=new Array,B=0,n=0;n<t;n++){var C=l.groups[n],D=z[C];null==D&&(D=""),A[B++]={value:D,hash:m[n]}}if(A.length!=t)break;for(var E=null,F="",G=-1,H=0;H<A.length;H++){G++;var I=A[H].value;if(F=F+"_"+A[H].hash+"_"+I,void 0==q[F]||null==q[F]){if(null==E)E={group:I,subItems:new Array,subGroups:new Array,level:0},o[p++]=E,E.uniqueid=l.generatekey(),l.loadedgroupsByKey[I]=E;else{var J={group:I,subItems:new Array,subGroups:new Array,parentItem:E,level:E.level+1};l.loadedgroupsByKey[E.uniqueid+"_"+I]=J,J.uniqueid=l.generatekey(),E.subGroups[E.subGroups.length++]=J,E=J}q[F]=E}else E=q[F]}null!=E?(void 0==z.uid&&(z.uid=this.getid(this.source.id,z,r)),u?(z.boundindex=v[y].index,this.recordsbyid["id"+z.uid]=v[y].value):(z.boundindex=r,this.recordsbyid["id"+z.uid]=v[y]),this.bounditems[z.boundindex]=z,this.sortedgroups[r]=z,z.uniqueid=l.generatekey(),z.parentItem=E,z.level=E.level+1,E.subItems[E.subItems.length++]=z):(void 0==z.uid&&(z.uid=this.getid(this.source.id,z,r)),u?(z.boundindex=v[y].index,this.recordsbyid["id"+z.uid]=v[y].value):(z.boundindex=r,this.recordsbyid["id"+z.uid]=v[y]),this.sortedgroups[r]=z,this.bounditems[z.boundindex]=z,z.uniqueid=l.generatekey()),f++,r++,s++}var K=function(a,c,d){for(var e=0;e<c.subItems.length;e++)c.subItems[e].visibleindex=b+d,a.rows[d]=c.subItems[e],a.loadedrecords[d]=c.subItems[e],d++;return d},L=function(a,c,d){var e=1,f=a.grid.columns.records?a.grid.columns.records:a.grid.columns;if(1==a.aggregates)for(var g=0;g<f.length;g++)f[g].aggregates&&(e=Math.max(e,f[g].aggregates.length));for(subGroup in c.subGroups){var h=c.subGroups[subGroup];h.subGroups&&(a.loadedgroups[a.loadedgroups.length]=h,h.visibleindex=b+d,a.rows[d]=h,a.loadedrecords[d]=h,d++,h.subGroups.length>0?d=L(a,h,d):h.subItems.length>0&&(d=K(a,h,d)))}return c.subItems.length>0&&(d=K(a,c,d)),function(c){if(1==a.aggregates)for(var g=0;g<e;g++)!function(e){var g=c,h={},i=function(b){for(var c=0;c<f.length;c++)if(f[c].aggregates)for(var d=a.grid.getcolumnaggregateddata(f[c].datafield,f[c].aggregates,!0,b),g=0;g<f[c].aggregates.length;g++)if(f[c].aggregates[e]){var i=f[c],j=f[c].aggregates[e],k=j;k=a.grid._getaggregatename(k);var l=k+":"+d[j];h[i.datafield]=l}};if(null!=g)if(h.level=g.level,h.visibleindex=b+d,h.uniqueid=a.generatekey(),a.rows[d]=h,a.loadedrecords[d++]=h,h.totalsrow=!0,c.subItems.length>0){g=c.subItems[c.subItems.length-1],h.parentItem=g.parentItem,h.parentItem.subItems&&(h.parentItem.subItems[h.parentItem.subItems.length]=h);var j=[],k=function(){for(var a=0;a<c.subItems.length;a++)c.subItems[a].totalsrow||(j[j.length]=c.subItems[a])};k(c),i(j)}else if(c.subGroups.length>0){g=c.subGroups[c.subGroups.length-1],h.level=g.level,h.parentItem=c,c.subGroups[c.subGroups.length]=h;var j=[],k=function(a){if(!a.totalsrow){for(var b=0;b<a.subItems.length;b++)a.subItems[b].totalsrow||(j[j.length]=a.subItems[b]);for(var b=0;b<a.subGroups.length;b++)k(a.subGroups[b])}};k(c),i(j)}}(g)}(c),d},M=o.length;this.loadedgroups=new Array,this.rows=new Array;for(var k=0,r=0;r<M;r++){var C=o[r];this.loadedrootgroups[r]=C,this.loadedgroups[this.loadedgroups.length]=C,C.visibleindex=b+k,this.rows[k]=C,this.loadedrecords[k]=C,k++,k=L(this,C,k)}return k},this._updategroupsinpage=function(b,c,d,e,f,g,h){var i=new Array,j=[];if(this.groupable&&this.groups.length>0){for(var k=0,l=new Array,m=new Array,n=0;n<b.groups.length;n++)m[n]=b.generatekey();var o=0,p=new Array,q=0;h>this.totalrecords&&(h=this.totalrecords);for(var r=g;r<h;r++){var s=a.extend({},b.sortedgroups[r]);if(id=s[b.uniqueId],!b.pagesize||d>=b.pagesize*b.pagenum&&d<b.pagesize*(b.pagenum+1)){(e>=f||id!=i[e][b.uniqueId]||updated&&updated[id])&&(j[j.length]=e);for(var t=new Array,u=0,n=0;n<b.groups.length;n++){var v=b.groups[n],w=s[v];null==w&&(w=""),t[u++]={value:w,hash:m[n]}}if(t.length!=b.groups.length)break;for(var x=null,y="",z=-1,A=0;A<t.length;A++){z++;var B=t[A].value;if(y=y+"_"+t[A].hash+"_"+B,void 0==l[y]||null==l[y]){if(null==x){x={group:B,subItems:new Array,subGroups:new Array,level:0},p[q++]=x;var C=b.loadedgroupsByKey[B];void 0!=C&&(x.visibleindex=C.visibleindex,x.uniqueid=C.uniqueid)}else{var D={group:B,subItems:new Array,subGroups:new Array,parentItem:x,level:x.level+1},C=b.loadedgroupsByKey[x.uniqueid+"_"+B];D.visibleindex=C.visibleindex,D.uniqueid=C.uniqueid,x.subGroups[x.subGroups.length++]=D,x=D}l[y]=x}else x=l[y]}null!=x&&(s.parentItem=x,s.level=x.level+1,x.subItems[x.subItems.length++]=s),e++}o++,d++}for(var E=function(b,c,d){for(var e=0;e<c.subItems.length;e++)i[d]=a.extend({},c.subItems[e]),d++;return d},F=function(a){var b=!1;for(subGroup in a.subGroups){var c=a.subGroups[subGroup];if(c.subGroups){if(c.subGroups.length>0){if(F(c))return b=!0,!0}if(c.subItems.length>0)return b=!0,!0}}return a.subItems.length>0?(b=!0,!0):b},G=function(a,b,c){var d=1,e=a.grid.columns.records?a.grid.columns.records:a.grid.columns;if(1==a.aggregates)for(var f=0;f<e.length;f++)e[f].aggregates&&(d=Math.max(d,e[f].aggregates.length));var g=function(b){if(1==a.aggregates)for(var f=0;f<d;f++)!function(d){var f=b,g={},h=function(b){for(var c=0;c<e.length;c++)if(e[c].aggregates)for(var f=a.grid.getcolumnaggregateddata(e[c].datafield,e[c].aggregates,!0,b),h=0;h<e[c].aggregates.length;h++)if(e[c].aggregates[d]){var i=e[c],j=e[c].aggregates[d],k=j;k=a.grid._getaggregatename(k);var l=k+":"+f[j];g[i.datafield]=l}};if(null!=f)if(g.level=f.level,g.visibleindex=c,g.uniqueid=a.generatekey(),i[c]=g,a.loadedrecords[c++]=g,g.totalsrow=!0,b.subItems.length>0){f=b.subItems[b.subItems.length-1],g.parentItem=f.parentItem,g.parentItem.subItems&&(g.parentItem.subItems[g.parentItem.subItems.length]=g);var j=[],k=function(){for(var a=0;a<b.subItems.length;a++)b.subItems[a].totalsrow||(j[j.length]=b.subItems[a])};k(b),h(j)}else if(b.subGroups.length>0){f=b.subGroups[b.subGroups.length-1],g.level=f.level,g.parentItem=b,b.subGroups[b.subGroups.length]=g;var j=[],k=function(a){if(!a.totalsrow){for(var b=0;b<a.subItems.length;b++)a.subItems[b].totalsrow||(j[j.length]=a.subItems[b]);for(var b=0;b<a.subGroups.length;b++)k(a.subGroups[b])}};k(b),h(j)}}(f)};for(subGroup in b.subGroups){var h=b.subGroups[subGroup];h.subGroups&&F(h)&&(i[c]=h,c++,h.subGroups.length>0?c=G(a,h,c):h.subItems.length>0&&(c=E(0,h,c)),g(h))}return b.subItems.length>0&&(c=E(0,b,c)),g(b),c},o=0;o<p.length;o++){var v=p[o];F(v)&&(i[k]=v,k++,k=G(this,v,k))}}return i}},a.extend(a.jqx._jqxGrid.prototype,{_initgroupsheader:function(){if(this.groupsheader.css("visibility","hidden"),this._groupsheader()){this.groupsheader.css("visibility","inherit");var b=this,c=this.gridlocalization.groupsheaderstring;this.groupsheaderdiv=this.groupsheaderdiv||a('<div style="width: 100%; position: relative;"></div>'),this.groupsheaderdiv.height(this.groupsheaderheight),this.groupsheaderdiv.css("top",0),this.groupsheader.append(this.groupsheaderdiv),this.groupheadersbounds=new Array;var d=this.groups.length;this.groupsheaderdiv.children().remove(),this.groupsheaderdiv[0].innerHTML="";var e=new Array;if(d>0)a.each(this.groups,function(c){var f=this,g=b._getColumnText(this),h=g.label,i=b._rendergroupcolumn(h,f);if(i.addClass(b.toThemeProperty("jqx-grid-group-column")),b.groupsheaderdiv.append(i),b.closeablegroups){var j=a(i.find(".jqx-icon-close"));b.isTouchDevice()&&!0!==b.touchmode?b.addHandler(j,"touchstart",function(){return b.removegroupat(c),!1}):b.addHandler(j,"click",function(){return b.removegroupat(c),!1})}if(b.sortable&&b.addHandler(i,"click",function(){var a=b.getcolumn(f);return null!=a&&b._togglesort(a),!1}),e[e.length]=i,b._handlegroupstocolumnsdragdrop(this,i),c<d-1){var k=i.height(),l=a('<div style="float: left; position: relative;"></div>');b.rtl&&l.css("float","right"),l.width(b.groupindentwidth/3),l.height(1),l.css("top",k/2),l.addClass(b.toThemeProperty("jqx-grid-group-column-line")),b.groupsheaderdiv.append(l)}});else{var f=a('<div style="position: relative;">'+c+"</div>");this.groupsheaderdiv.append(f),this.rtl&&f.addClass(this.toThemeProperty("jqx-rtl"))}this._groupheaders=e,this._updategroupheadersbounds()}},_updategroupheadersbounds:function(){var b=this,c=this.groupsheaderdiv.children().outerHeight(),d=(this.groupsheader.height()-c)/2;this.groupsheaderdiv.css("top",d),this.rtl?(this.groupsheaderdiv.css("left",""),this.groupsheaderdiv.css("right",d)):(this.groupsheaderdiv.css("left",d),this.groupsheaderdiv.css("right","")),this.rtl&&this._groupheaders.reverse(),a.each(this._groupheaders,function(a){var c=this.coord();b.groupheadersbounds[a]={left:c.left,top:c.top,width:this.outerWidth(),height:this.outerHeight(),index:a}})},addgroup:function(a){if(a){var b=this;b.groups!==b.dataview.groups&&(b.dataview.groups=b.groups),b.groups[b.groups.length]=a,b.refreshgroups(),this._raiseEvent(12,{type:"Add",index:b.groups[b.groups.length],groups:b.groups})}},insertgroup:function(a,b){if(void 0!=a&&null!=a&&a>=0&&a<=this.groups.length&&b){var c=this;c.groups!==c.dataview.groups&&(c.dataview.groups=c.groups),c.groups.splice(a,0,b.toString()),c.refreshgroups(),this._raiseEvent(12,{type:"Insert",index:a,groups:c.groups})}},refreshgroups:function(){this._refreshdataview(),this._render(!0,!0,!0,!1),this._postrender("group")},_insertaftergroup:function(a,b){var c=this._getGroupIndexByDataField(a);this.insertgroup(c+1,b)},_insertbeforegroup:function(a,b){var c=this._getGroupIndexByDataField(a);this.insertgroup(c,b)},removegroupat:function(a){if(a>=0&&null!=a&&void 0!=a){var b=this;return b.groups!==b.dataview.groups&&(b.dataview.groups=b.groups),b.groups.splice(a,1),b.refreshgroups(),b.virtualmode&&b.updatebounddata(),this._raiseEvent(12,{type:"Remove",index:a,groups:b.groups}),!0}return!1},cleargroups:function(){var a=this;return a.groups=[],a.dataview.groups=a.groups,a.refreshgroups(),this._raiseEvent(12,{type:"Clear",index:-1,groups:a.groups}),!0},removegroup:function(a){if(null==a)return!1;var b=this.groups.indexOf(a.toString());return this.removegroupat(b)},getrootgroupscount:function(){return this.dataview.loadedrootgroups.length},collapsegroup:function(a){if(a>=0&&-1===a.toString().indexOf("."))return this._setrootgroupstate(a,!1);var b=a.toString().split("."),c=null;this.groupsVisibility||(this.groupsVisibility=new Array);for(var d=0;d<b.length;d++){var a=parseInt(b[d]);if(0==d){var c=this.dataview.loadedrootgroups[a];this.groupsVisibility[c.group]=null}else{var e=c.subGroups[a];e&&(c=e,d==b.length-1&&(this._setgroupstate(c,!1,!0),this.groupsVisibility[c.group]=null))}}},expandgroup:function(a){if(a>=0&&-1===a.toString().indexOf("."))return this._setrootgroupstate(a,!0);for(var b=a.toString().split("."),c=null,d=0;d<b.length;d++){var a=parseInt(b[d]);if(0==d){var c=this.dataview.loadedrootgroups[a];this._setrootgroupstate(a,!0),this.groupsVisibility||(this.groupsVisibility=new Array),this.groupsVisibility[c.group]=c}else{var e=c.subGroups[a];e&&(c=e,this._setgroupstate(c,!0,!0),this.groupsVisibility||(this.groupsVisibility=new Array),this.groupsVisibility[c.group]=c)}}},collapseallgroups:function(a){this._setbatchgroupstate(!1,a)},expandallgroups:function(a){this._setbatchgroupstate(!0,a)},isgroupexpanded:function(a){var b=this.dataview.loadedrootgroups[a];return null==b?null:this.expandedgroups[b.uniqueid].expanded},getgroup:function(b){var c=this.dataview.loadedrootgroups[b];if(null==c)return null;var d=this.expandedgroups[c.uniqueid].expanded,e=c.group,f=c.level,g=new Array;this._getsubgroups(g,c);var h=this,i={group:e,level:f,expanded:d,subgroups:g};if(c.subItems){var j=new Array;a.each(c.subItems,function(){var a=this.boundindex;j[j.length]=h.getrowdata(a)}),j.length>0&&(i.subrows=j)}return i},getrootgroups:function(){for(var a=this.dataview.loadedrootgroups.length,b=new Array,c=0;c<a;c++)b[c]=this.getgroup(c);return b},_getsubgroups:function(b,c){var d=this;for(obj in c.subGroups){var e=c.subGroups[obj],f=d.expandedgroups[e.uniqueid].expanded,g=e.group,h=e.level;if(b[b.length]={group:g,level:h,expanded:f},e.subItems){var i=new Array;a.each(e.subItems,function(){var a=this.boundindex;i[i.length]=d.getrowdata(a)}),b[b.length-1].subrows=i}if(e.subGroups){var j=new Array;d._getsubgroups(j,e)}}return b},_setbatchgroupstate:function(a,b){var c=this;for(obj in this.dataview.loadedrootgroups)c._setrootgroupstate(obj,a,!1,!0);if(0==b)return c._requiresupdate=!0,c._renderrows(c.virtualsizeinfo),!0;var d=this.vScrollBar[0].style.visibility;return this.rendergridcontent(!0,!1),(d!=this.vScrollBar[0].style.visibility||this._hiddencolumns)&&(this._updatecolumnwidths(),this._updatecellwidths(),this._renderrows(this.virtualsizeinfo)),!0},_setrootgroupstate:function(a,b,c,d){if(void 0==a||null==a||a<0)return!1;if(!this.groupable||0==this.groups.length)return!1;var e=void 0==c||c;if(a>=0&&a<this.dataview.loadedrootgroups.length){var f=this.dataview.loadedrootgroups[a];if(this.pageable){for(var g=new Array,h=0;h<this.dataview.rows.length;h++)null!=this.dataview.rows[h].group&&0===this.dataview.rows[h].level&&g.push(this.dataview.rows[h]);if(!(f=g[a]))return}return this._setgroupstate(f,b,e,d)}return!1},_togglegroupstate:function(a,b){if(null==a||void 0==a)return!1;var c=this.vScrollInstance.value,d=this.expandedgroups[a.uniqueid];d=void 0!=d&&d.expanded,d=!d,this.groupsVisibility||(this.groupsVisibility=new Array),this.groupsVisibility[a.group]=d?a:null;var e=this._setgroupstate(a,d,b);return this._newmax=null,0!==c&&"hidden"!==this.vScrollBar.css("visibility")&&(c<=this.vScrollInstance.max?this.vScrollInstance.setPosition(c):this.vScrollInstance.setPosition(this.vScrollInstance.max)),e},_setgroupstate:function(a,b,c,d){if(null==a||void 0==a)return!1;var e=!1;this.editable&&this.editcell&&this.endcelledit(this.editcell.row,this.editcell.column,!1,!1);var f=this.expandedgroups[a.uniqueid];if(void 0==f&&(f={expanded:!1},e=!0),f.expanded!=b&&(e=!0),e){if(this.expandedgroups[a.uniqueid]={expanded:b,group:a},this._setsubgroupsvisibility(this,a,!b,d),c){var g=this.vScrollBar[0].style.visibility;this.rendergridcontent(!0,!1),(g!=this.vScrollBar[0].style.visibility||this._hiddencolumns)&&(this._updatecolumnwidths(),this._updatecellwidths(),this._renderrows(this.virtualsizeinfo))}return void 0!=this.suspendgroupevents&&0!=this.suspendgroupevents||(b?this._raiseEvent(4,{group:a.group,parentgroup:a.parentItem?a.parentItem.group:null,level:a.level,visibleindex:a.visibleindex}):this._raiseEvent(5,{group:a.group,parentgroup:a.parentItem?a.parentItem.group:null,level:a.level,visibleindex:a.visibleindex})),!0}return!1},_setgroupitemsvisibility:function(a,b,c){for(var d=0;d<b.subItems.length;d++)a._setrowvisibility(b.subItems[d].visibleindex,c,!1)},_setsubgroupsvisibility:function(a,b,c,d){if(null!=b.parentItem){if(this.hiddens[b.parentItem.visibleindex])return}else if(null==b.parentItem&&this.hiddens[b.visibleindex])return;for(subGroup in b.subGroups){var e=b.subGroups[subGroup];c||a._setrowvisibility(e.visibleindex,c,!1);var f=!c;d?this.expandedgroups[e.uniqueid]={expanded:f,group:e}:f=void 0!=a.expandedgroups[e.uniqueid]&&a.expandedgroups[e.uniqueid].expanded,e.subGroups&&(e.subGroups.length>0?a._setsubgroupsvisibility(a,e,!f||c,d):e.subItems.length>0&&a._setgroupitemsvisibility(a,e,!f||c)),c&&a._setrowvisibility(e.visibleindex,c,!1)}b.subItems&&b.subItems.length>0&&a._setgroupitemsvisibility(a,b,c)},_handlecolumnsdragdrop:function(){var b=this,c=-1,d=!1;if(b.groupable){var e="mousemove.grouping"+this.element.id,f=(this.element.id,"mouseup.grouping"+this.element.id),g=!1;this.isTouchDevice()&&!0!==this.touchmode&&(g=!0,e=a.jqx.mobile.getTouchEventName("touchmove")+".grouping"+this.element.id,a.jqx.mobile.getTouchEventName("touchstart")+".grouping"+this.element.id,f=a.jqx.mobile.getTouchEventName("touchend")+".grouping"+this.element.id),this.removeHandler(a(document),e),this.addHandler(a(document),e,function(e){if(!b.showgroupsheader)return!0;if(null!=b.dragcolumn){var f=parseInt(e.pageX),h=parseInt(e.pageY);if(g){var i=b.getTouches(e),j=i[0];f=parseInt(j.pageX),h=parseInt(j.pageY)}var k=b.host.coord(),l=parseInt(k.left),m=parseInt(k.top);void 0!=b.dragmousedownoffset&&null!=b.dragmousedownoffset||(b.dragmousedownoffset={left:0,top:0});var n=parseInt(f)-parseInt(b.dragmousedownoffset.left),o=parseInt(h)-parseInt(b.dragmousedownoffset.top);if(b.dragcolumn.css({left:n+"px",top:o+"px"}),d=!1,f>=l&&f<=l+b.host.width()&&h>=m&&h<=m+b.host.height()&&(d=!0),c=-1,d){b.dragcolumnicon.removeClass(b.toThemeProperty("jqx-grid-dragcancel-icon")),b.dragcolumnicon.addClass(b.toThemeProperty("jqx-grid-drag-icon"));var p=b.groupsheader.coord(),q=p.top+b.groupsheader.height(),r=a.data(b.dragcolumn[0],"datarecord");if(r)var s=b.groups.indexOf(r.toString());else var s=-1;var t=-1==s||b.groups.length>1&&s>-1;null!=b.dropline&&(h>=p.top&&h<=q?t&&(c=b._handlegroupdroplines(f)):b.dropline.fadeOut("slow"))}else null!=b.dropline&&b.dropline.fadeOut("slow"),b.dragcolumnicon.removeClass(b.toThemeProperty("jqx-grid-drag-icon")),b.dragcolumnicon.addClass(b.toThemeProperty("jqx-grid-dragcancel-icon"));if(g)return e.preventDefault(),e.stopPropagation(),!1}}),this.removeHandler(a(document),f),this.addHandler(a(document),f,function(e){if(!b.showgroupsheader)return!0;b.__drag=!1,a(document.body).removeClass("jqx-disableselect");var f=(parseInt(e.pageX),parseInt(e.pageY));if(g){var h=b.getTouches(e),i=h[0];parseInt(i.pageX),f=parseInt(i.pageY)}var j=b.host.coord(),k=(parseInt(j.left),parseInt(j.top)),l=b.groupsheader.height();if(b.showtoolbar&&(k+=b.toolbarheight),b.dragstarted=!1,b.dragmousedown=null,null!=b.dragcolumn){var m=a.data(b.dragcolumn[0],"datarecord");if(b.dragcolumn.remove(),b.dragcolumn=null,null!=m){if(!b.getcolumn(m).groupable)return void(null!=b.dropline&&(b.dropline.remove(),b.dropline=null));if(d)if(-1!=c){var n=c.index,o=b.groups[n],p=b._getGroupIndexByDataField(m);p!=n&&(void 0!=p&&p>=0&&b.groups.splice(p,1),"before"==c.position?b.rtl?b._insertaftergroup(o,m):b._insertbeforegroup(o,m):b.rtl?b._insertbeforegroup(o,m):b._insertaftergroup(o,m))}else if(0==b.groups.length)f>k&&f<=k+l&&b.addgroup(m);else if(f>k+l){var p=b._getGroupIndexByDataField(m);b.removegroupat(p)}null!=b.dropline&&(b.dropline.remove(),b.dropline=null)}}})}},_getGroupIndexByDataField:function(a){for(var b=0;b<this.groups.length;b++)if(this.groups[b]==a)return b;return-1},_isColumnInGroups:function(a){for(var b=0;b<this.groups.length;b++)if(this.groups[b]==a)return!0;return!1},_handlegroupdroplines:function(b){var c=this,d=-1;return a.each(c.groupheadersbounds,function(a){if(b<=this.left+this.width/2){var e=this.left-3;return a>0&&(e=this.left-1-c.groupindentwidth/6),c.dropline.css("left",e),c.dropline.css("top",this.top),c.dropline.height(this.height),c.dropline.fadeIn("slow"),d={index:a,position:"before"},c.rtl&&(d={index:c.groupheadersbounds.length-1-a,position:"before"}),!1}b>=this.left+this.width/2&&(c.dropline.css("left",1+this.left+this.width),c.dropline.css("top",this.top),c.dropline.height(this.height),c.dropline.fadeIn("slow"),d={index:a,position:"after"},c.rtl&&(d={index:c.groupheadersbounds.length-1-a,position:"after"}))}),d},_handlegroupstocolumnsdragdrop:function(b,c){this.dragmousedown=null,this.dragmousedownoffset=null,this.dragstarted=!1,this.dragcolumn=null;var d,e=this,f="mousedown",g="mousemove",h=!1;this.isTouchDevice()&&!0!==this.touchmode&&(h=!0,f=a.jqx.mobile.getTouchEventName("touchstart"),g=a.jqx.mobile.getTouchEventName("touchmove")),this.addHandler(c,"dragstart",function(a){return!1}),this.addHandler(c,f,function(b){if(!e.showgroupsheader)return!0;var c=b.pageX,d=b.pageY;if(e.__drag=!0,e.dragmousedown={left:c,top:d},h){var f=e.getTouches(b),g=f[0];c=g.pageX,d=g.pageY,e.dragmousedown={left:c,top:d},b.preventDefault&&b.preventDefault()}var i=a(b.target).coord();e.dragmousedownoffset={left:parseInt(c)-parseInt(i.left),top:parseInt(d-i.top)}}),this.addHandler(c,g,function(f){if(!e.showgroupsheader)return!0;if(e.dragmousedown){if(d={left:f.pageX,top:f.pageY},h){var g=e.getTouches(f),i=g[0];d={left:i.pageX,top:i.pageY}}if(!e.dragstarted&&null==e.dragcolumn){var j=Math.abs(d.left-e.dragmousedown.left),k=Math.abs(d.top-e.dragmousedown.top);(j>3||k>3)&&(e._createdragcolumn(c,d,!0),a(document.body).addClass("jqx-disableselect"),a.data(e.dragcolumn[0],"datarecord",b),f.preventDefault&&f.preventDefault())}}})},_createdragcolumn:function(b,c,d){var e=this,f=c;e.dragcolumn=a("<div></div>");var g=b.clone();e.dragcolumn.css("z-index",999999),g.css("border-width","1px"),g.css("opacity","0.4");var h=a(g.find("."+e.toThemeProperty("jqx-grid-column-menubutton")));h.length>0&&h.css("display","none");var i=a(g.find(".jqx-icon-close"));i.length>0&&i.css("display","none"),e.dragcolumnicon=a('<div style="z-index: 9999; position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -7px;"></div>'),e.dragcolumnicon.addClass(e.toThemeProperty("jqx-grid-drag-icon")),e.dragcolumn.css("float","left"),e.dragcolumn.css("position","absolute");e.host.coord();g.width(b.width()+16),e.dragcolumn.append(g),e.dragcolumn.height(b.height()),e.dragcolumn.width(g.width()),e.dragcolumn.append(e.dragcolumnicon),a(document.body).append(e.dragcolumn),g.css("margin-left",0),g.css("left",0),g.css("top",0),e.dragcolumn.css("left",f.left+e.dragmousedown.left),e.dragcolumn.css("top",f.top+e.dragmousedown.top),void 0!=d&&d&&(e.dropline=a('<div style="display: none; position: absolute;"></div>'),e.dropline.width(2),e.dropline.addClass(e.toThemeProperty("jqx-grid-group-drag-line")),a(document.body).append(e.dropline))},iscolumngroupable:function(a){return this._getcolumnproperty(a,"groupable")},_handlecolumnstogroupsdragdrop:function(b,c){this.dragmousedown=null,this.dragmousedownoffset=null,this.dragstarted=!1,this.dragcolumn=null;var d,e=this,f=!1;this.isTouchDevice()&&!0!==this.touchmode&&(f=!0);var g="mousedown.drag",d="mousemove.drag";f?(g=a.jqx.mobile.getTouchEventName("touchstart")+".drag",d=a.jqx.mobile.getTouchEventName("touchmove")+".drag"):this.addHandler(c,"dragstart",function(a){return!1}),this.addHandler(c,g,function(d){if(!e.showgroupsheader)return!0;if(e.__drag=!0,e._isColumnInGroups(b.displayfield))return c.css("cursor"),!0;if(0==b.groupable)return!0;var g=d.pageX,h=d.pageY;if(f){var i=e.getTouches(d),j=i[0];g=j.pageX,h=j.pageY}e.dragmousedown={left:g,top:h},f&&d.preventDefault&&d.preventDefault();var k=a(d.target).coord();e.dragmousedownoffset={left:parseInt(g)-parseInt(k.left),top:parseInt(h-k.top)}}),this.addHandler(c,d,function(g){if(!e.showgroupsheader)return!0;if(e._isColumnInGroups(b.displayfield))return c.css("cursor"),!0;if(e.dragmousedown){var h=g.pageX,i=g.pageY;if(f){var j=e.getTouches(g),k=j[0];h=k.pageX,i=k.pageY}if(d={left:h,top:i},!e.dragstarted&&null==e.dragcolumn){var l=Math.abs(d.left-e.dragmousedown.left),m=Math.abs(d.top-e.dragmousedown.top);(l>3||m>3)&&(e._createdragcolumn(c,d,!0),a.data(e.dragcolumn[0],"datarecord",b.displayfield),g.preventDefault&&g.preventDefault())}}})},_rendergroupcolumn:function(b,c){var d=a('<div style="float: left; position: relative;"></div>');if(this.rtl&&d.css("float","right"),null!=this.groupcolumnrenderer&&(d[0].innerHTML=this.groupcolumnrenderer(b),d.addClass(this.toThemeProperty("jqx-grid-group-column")),d.addClass(this.toThemeProperty("jqx-fill-state-normal"))),this.closeablegroups){""==d[0].innerHTML&&(d[0].innerHTML='<a style="float: left;" href="#">'+b+"</a>"),this.rtl&&(d[0].innerHTML='<a style="float: right;" href="#">'+b+"</a>");var e=this.rtl?"left":"right",f='<div style="float: '+e+'; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>';if(a.jqx.browser.msie&&a.jqx.browser.version<8&&(f='<div style="float: left; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -18px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>'),this.rtl){var f='<div style="float: '+e+'; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>';a.jqx.browser.msie&&a.jqx.browser.version<8&&(f='<div style="float: left; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-icon-close")+'"></div></div>')}d[0].innerHTML+=f}else""==d[0].innerHTML&&(d[0].innerHTML='<a href="#">'+b+"</a>");if(this.sortable){var g=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),h=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.closeablegroups)var g=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -32px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),h=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 100%; top: 50%; margin-left: -32px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.rtl){var g=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 0px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),h=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 0px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>');if(this.closeablegroups)var g=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortascbutton")+'"></div></div>'),h=a('<div style="float: right; min-height: 16px; min-width: 18px;"><div style="position: absolute; left: 0px; top: 50%; margin-left: 16px; margin-top: -8px; float: none; width: 16px; height: 16px;" class="'+this.toThemeProperty("jqx-grid-column-sortdescbutton")+'"></div></div>')}g.css("display","none"),h.css("display","none"),a.jqx.browser.msie&&a.jqx.browser.version<8&&(g.css("float","left"),h.css("float","left")),d.append(g),d.append(h),a.data(document.body,"groupsortelements"+c,{sortasc:g,sortdesc:h})}return d.addClass(this.toThemeProperty("jqx-fill-state-normal")),d.addClass(this.toThemeProperty("jqx-grid-group-column")),d},_rendergroup:function(b,c,d,e,f,g,h){var i=c,j=c.cells[d.level];this.rtl&&(j=c.cells[c.cells.length-1-d.level]);var k=this._findgroupstate(d.uniqueid);if(d.bounddata.subGroups.length>0||d.bounddata.subItems.length>0){var l=this.rtl?"-rtl":"",m=this.toThemeProperty("jqx-icon-arrow-right");l&&(m=this.toThemeProperty("jqx-icon-arrow-left")),j.className+=k?" "+this.toThemeProperty("jqx-grid-group-expand"+l)+" "+this.toThemeProperty("jqx-icon-arrow-down"):" "+this.toThemeProperty("jqx-grid-group-collapse"+l)+" "+m}var n=this._getColumnText(this.groups[d.level]).label,o=this.groupindentwidth,p=this.rowdetails&&this.showrowdetailscolumn?(1+b)*o:b*o,q=h-p,r=d.level+1;this.rtl&&(r=0);for(var s=i.cells[r],t=2;void 0!=s&&"none"==s.style.display&&t<i.cells.length-1;)s=i.cells[r+t-1],t++;var u=a(s);if(s){if(s.style.width=parseInt(q)+"px",-1!=s.className.indexOf("jqx-grid-cell-filter")&&u.removeClass(this.toThemeProperty("jqx-grid-cell-filter")),-1!=s.className.indexOf("jqx-grid-cell-sort")&&u.removeClass(this.toThemeProperty("jqx-grid-cell-sort")),-1!=s.className.indexOf("jqx-grid-cell-pinned")&&u.removeClass(this.toThemeProperty("jqx-grid-cell-pinned")),null!=this.groupsrenderer){var v={group:d.group,level:d.level,parent:d.bounddata.parentItem,subGroups:d.bounddata.subGroups,subItems:d.bounddata.subItems,groupcolumn:this._getColumnText(this.groups[d.level]).column},w=this.groupsrenderer(n+": "+d.group,d.group,k,v);if(w)s.innerHTML=w;else{var x=d.bounddata.subItems.length>0?d.bounddata.subItems.length:d.bounddata.subGroups.length;if(this.showgroupaggregates){var y=d.bounddata.subItems.length>0?d.bounddata.subItems:d.bounddata.subGroups;x=0;for(var z=0;z<y.length;z++)y[z].totalsrow||x++}s.innerHTML='<div class="'+this.toThemeProperty("jqx-grid-groups-row")+'" style="position: absolute;"><span>'+n+': </span><span class="'+this.toThemeProperty("jqx-grid-groups-row-details")+'">'+d.group+" ("+x+")</span></div>"}}else{var A=this._getcolumnbydatafield(this.groups[d.level]),B=d.group;if(null==A)throw new Error("jqxGrid: Unable to find '"+this.groups[d.level]+"' group in the Grid's columns collection.");A.cellsformat&&a.jqx.dataFormat&&(a.jqx.dataFormat.isDate(B)?B=a.jqx.dataFormat.formatdate(B,A.cellsformat,this.gridlocalization):a.jqx.dataFormat.isNumber(B)&&(B=a.jqx.dataFormat.formatnumber(B,A.cellsformat,this.gridlocalization)));var x=d.bounddata.subItems.length>0?d.bounddata.subItems.length:d.bounddata.subGroups.length;if(this.showgroupaggregates){var y=d.bounddata.subItems.length>0?d.bounddata.subItems:d.bounddata.subGroups;x=0;for(var z=0;z<y.length;z++)y[z].totalsrow||x++}s.innerHTML='<div class="'+this.toThemeProperty("jqx-grid-groups-row")+'" style="position: absolute;"><span>'+n+': </span><span class="'+this.toThemeProperty("jqx-grid-groups-row-details")+'">'+B+" ("+x+")</span></div>"}if(this.rtl){A||(A=this._getcolumnbydatafield(this.groups[d.level]));var C="hidden"==this.hScrollBar.css("visibility")?0:this.hScrollInstance.max-this.hScrollInstance.value,D="hidden"==this.vScrollBar.css("visibility")?0:this.scrollbarsize+6,p=this.rowdetails&&this.showrowdetailscolumn?(2+d.level)*o:(1+d.level)*o;s.style.width=h+parseInt(C)-p-D+"px",u.addClass(this.toThemeProperty("jqx-rtl"));var E=a(c.cells[c.cells.length-1]).css("z-index");u.css("z-index",E);var F=u.find("div"),q=F.width();F.css("left","100%");var G=null!=this.columns.records[c.cells.length-2-d.level]&&this.columns.records[c.cells.length-2-d.level].pinned;if(this.table.width()<h&&(h=this.table.width(),"hidden"!=this.vScrollBar.css("visibility")&&(h+=this.vScrollBar.outerWidth())),A.pinned||G)this.rowdetails&&this.showrowdetailscolumn&&(h+=30),F.css("margin-left",-q),s.style.width=h+C-p-D+"px";else{var C="hidden"==this.hScrollBar.css("visibility")?0:this.hScrollInstance.max;s.style.width=h+C-p-D+"px";var q=F.width();F.css("margin-left",-q)}}}}})}(jqxBaseFramework);

