/*
jQWidgets v4.5.4 (2017-June)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){a.jqx.dataview.sort=function(){this.sortby=function(b,c,d){var e=Object.prototype.toString;if(null==c)return this.sortdata=null,this.sortcache={},this.grid._pagescache=new Array,this.grid._cellscache=new Array,void this.refresh();void 0==c&&(c=!0),c="a"==c||"asc"==c||"ascending"==c||1==c;var f=b;this.sortfield=b,this.sortfielddirection=c?"asc":"desc",void 0==this.sortcache&&(this.sortcache={}),this.sortdata=[];var g=[],h=!1;if("constructor"==f&&(f=""),!this.virtualmode&&null!=this.sortcache[f]){var i=this.sortcache[f];g=i._sortdata,i.direction==c?g.reverse():(!i.direction&&c&&g.reverse(),h=!0),g.length<this.totalrecords&&(this.sortcache={},h=!1,g=[])}Object.prototype.toString="function"==typeof b?b:function(){return this[b]};var j=this.records,k=(this.that,"");if(this.source.datafields&&a.each(this.source.datafields,function(){if(this.name==b)return this.type&&(k=this.type),!1}),0==g.length)if(j.length)for(var l=j.length,m=0;m<l;m++){var n=j[m];if(null!=n){var o=n,p=o.toString();g.push({sortkey:p,value:o,index:m})}}else{var q=!1;for(obj in j){var n=j[obj];if(void 0==n){q=!0;break}var o=n;g.push({sortkey:o.toString(),value:o,index:obj})}q&&a.each(j,function(a,b){g.push({sortkey:b.toString(),value:b,index:a})})}if(!h)if(null==d){this._sortcolumntype=k;var r=this;g.sort(function(a,b){return r._compare(a,b,k)})}else g.sort(d);c||g.reverse(),Object.prototype.toString=e,this.sortdata=g,this.sortcache[f]={_sortdata:g,direction:c},this.reload(this.records,this.rows,this.filters,this.updated,!0)},this.clearsortdata=function(){this.sortcache={},this.sortdata=null},this._compare=function(b,c,d){var b=b.sortkey,c=c.sortkey;if(void 0===b&&(b=null),void 0===c&&(c=null),null===b&&null===c)return 0;if(null===b&&null!==c)return-1;if(null!==b&&null===c)return 1;if(a.jqx.dataFormat)if(d&&""!=d)switch(d){case"number":case"int":case"float":return b<c?-1:b>c?1:0;case"date":case"time":return b<c?-1:b>c?1:0;case"string":case"text":b=String(b).toLowerCase(),c=String(c).toLowerCase()}else{if(a.jqx.dataFormat.isNumber(b)&&a.jqx.dataFormat.isNumber(c))return b<c?-1:b>c?1:0;if(a.jqx.dataFormat.isDate(b)&&a.jqx.dataFormat.isDate(c))return b<c?-1:b>c?1:0;a.jqx.dataFormat.isNumber(b)||a.jqx.dataFormat.isNumber(c)||(b=String(b).toLowerCase(),c=String(c).toLowerCase())}try{if(b<c)return-1;if(b>c)return 1}catch(a){}return 0},this._equals=function(a,b){return 0===this._compare(a,b)}},a.extend(a.jqx._jqxGrid.prototype,{_rendersortcolumn:function(){var b=this.that,c=this.getsortcolumn();if(this.sortdirection){var d=function(c,d){var e=b.getcolumn(c);e&&(d.ascending?a.jqx.aria(e.element,"aria-sort","ascending"):d.descending?a.jqx.aria(e.element,"aria-sort","descending"):a.jqx.aria(e.element,"aria-sort","none"))};this._oldsortinfo&&this._oldsortinfo.column&&d(this._oldsortinfo.column,{ascending:!1,descending:!1}),d(c,this.sortdirection)}this._oldsortinfo={column:c,direction:this.sortdirection},this.sortdirection&&a.each(this.columns.records,function(d,e){var f=a.data(document.body,"groupsortelements"+this.displayfield);null==c||this.displayfield!=c?(a(this.sortasc).hide(),a(this.sortdesc).hide(),null!=f&&(f.sortasc.hide(),f.sortdesc.hide())):b.sortdirection.ascending?(a(this.sortasc).show(),a(this.sortdesc).hide(),null!=f&&(f.sortasc.show(),f.sortdesc.hide())):(a(this.sortasc).hide(),a(this.sortdesc).show(),null!=f&&(f.sortasc.hide(),f.sortdesc.show()))})},getsortcolumn:function(){return void 0!=this.sortcolumn?this.sortcolumn:null},removesort:function(){this.sortby(null)},sortby:function(a,b,c,d,e){if(this._loading&&!1!==e)throw new Error("jqxGrid: "+this.loadingerrormessage);if(null==a&&(b=null,a=this.sortcolumn),void 0!=a){var f=this.that;if(void 0==c&&null!=f.source.sortcomparer&&(c=f.source.sortcomparer),ascending="a"==b||"asc"==b||"ascending"==b||1==b,f.sortdirection=null!=b?{ascending:ascending,descending:!ascending}:{ascending:!1,descending:!1},f.sortcolumn=null!=b?a:null,f.source.sort||f.virtualmode){if(f.dataview.sortfield=a,f.dataview.sortfielddirection=null==b?"":ascending?"asc":"desc",f.source.sort&&!this._loading)return f.source.sort(a,b),void f._raiseEvent(6,{sortinformation:f.getsortinformation()})}else f.dataview.sortby(a,b,c);if(!1===d)return;f.groupable&&f.groups.length>0?(f._render(!0,!1,!1),f._updategroupheadersbounds&&f.showgroupsheader&&f._updategroupheadersbounds(),f._postrender("sort")):(f.pageable&&f.dataview.updateview(),f._updaterowsproperties(),f.rendergridcontent(!0),f._postrender("sort")),f._raiseEvent(6,{sortinformation:f.getsortinformation()})}},_togglesort:function(a){var b=this.that;if(!this.disabled&&a.sortable&&b.sortable){var c=b.getsortinformation(),d=null;null!=c.sortcolumn&&c.sortcolumn==a.displayfield?(d=c.sortdirection.ascending,d=b.sorttogglestates>1?1!=d&&null:!d):d=!0,b.sortby(a.displayfield,d,null)}}})}(jqxBaseFramework);

