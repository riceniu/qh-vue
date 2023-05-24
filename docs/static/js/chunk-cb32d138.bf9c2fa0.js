(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb32d138"],{"08cc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"300px"},attrs:{placeholder:"Search QuoteNumber/company/contact"},on:{input:t.handleFilter},model:{value:t.listQuery.keyWords,callback:function(e){t.$set(t.listQuery,"keyWords",e)},expression:"listQuery.keyWords"}}),n("el-date-picker",{staticClass:"filter-item",attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"to","start-placeholder":"Start","end-placeholder":"End","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:t.dateSelection},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}}),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(" Search ")]),n("router-link",{attrs:{to:"/quote/new"}},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"}},[t._v(" Add ")])],1),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.handleAll}},[t._v(" All ")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fift:"","highlight-current-row":""}},[n("el-table-column",{attrs:{prop:"quoteNumber",label:"Quote No.",align:"center",width:"120",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"dateQuote",label:"Date",align:"center",width:"120",sortable:""}}),n("el-table-column",{attrs:{prop:"currency",label:"Currency",align:"center",width:"85",sortable:""}}),n("el-table-column",{attrs:{prop:"discountDirect",label:"Disc.",align:"center",width:"60"}}),n("el-table-column",{attrs:{prop:"discount",label:"Disc%",align:"center",width:"70"}}),n("el-table-column",{attrs:{prop:"vat",label:"VAT",align:"center",width:"50"}}),n("el-table-column",{attrs:{prop:"total",label:"Total",align:"right",width:"100",sortable:"",formatter:t.totalFormat,"show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"contact",label:"Contact",align:"left",width:"175",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"company",label:"Company",align:"left",width:"175",sortable:"","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"category",label:"Cat.",align:"center",sortable:"",width:"80"}}),n("el-table-column",{attrs:{prop:"owner",label:"Owner",align:"center",sortable:"",width:"100"}}),n("el-table-column",{attrs:{align:"center",label:"Actions",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/quote/list/edit/"+e.row.quoteNumber}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}})],1),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(n){return t.handleDelete(e.row)}}})]}}])})],1),n("br"),n("div",[n("router-link",{attrs:{to:"/quote/new"}},[n("el-button",{attrs:{type:"success"}},[t._v("Add")])],1)],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1)},i=[],o=n("c7eb"),r=n("1da1"),l=(n("b680"),n("caad"),n("2532"),n("ac1f"),n("5319"),n("1fcf")),s=n("333d"),u={name:"ProductList",components:{Pagination:s["a"]},data:function(){return{pickerOptions:{shortcuts:[{text:"Last 30 days",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-2592e6),t.$emit("pick",[n,e])}},{text:"Last 6 months",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-15552e6),t.$emit("pick",[n,e])}},{text:"Last 1 year",onClick:function(t){var e=new Date,n=new Date;n.setTime(n.getTime()-31536e6),t.$emit("pick",[n,e])}}]},list:null,total:0,listLoading:!0,listQuery:{page:1,limit:50,keyWords:"",orderBy:"",start:"",end:""},dateRange:[]}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,this.list=[],Object(l["e"])(this.listQuery).then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.dialogStatus="Edit",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},resetTemp:function(){this.temp={name:"",username:"",password:""}},closeDialog:function(){this.dialogFormVisible=!1,this.tempPw&&(this.temp.password=this.tempPw,this.resetPassword=!1)},handleDelete:function(t){var e=this;console.log(t),this.$confirm("Delete this contact?","Warning",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then((function(){e.delQuote(t)})).catch((function(){e.$message({type:"info",message:"Canceled"})}))},delQuote:function(t){var e=this;return Object(r["a"])(Object(o["a"])().mark((function n(){return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(l["d"])(t);case 2:e.$message({type:"success",message:"Deleted!"}),e.getList();case 4:case"end":return n.stop()}}),n)})))()},totalFormat:function(t,e,n){return n=parseFloat(n).toFixed(2),n+="",n.includes(".")||(n+="."),n.replace(/(\d)(?=(\d{3})+\.)/g,(function(t,e){return e+","})).replace(/\.$/,"")},handleFilter:function(){this.listQuery.page=1,this.getList()},handleAll:function(){this.listQuery={page:1,limit:50,keyWords:"",orderBy:"",start:"",end:""},this.dateRange=[],this.getList()},dateSelection:function(){this.listQuery.start=this.dateRange[0],this.listQuery.end=this.dateRange[1],this.getList(),console.log(this.dateRange)}}},c=u,d=(n("eb9e"),n("2877")),p=Object(d["a"])(c,a,i,!1,null,"472dffc6",null);e["default"]=p.exports},"1c69":function(t,e,n){"use strict";n("2fdd")},"1fcf":function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return u})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d}));var a=n("b775");function i(t){return Object(a["a"])({url:"/vue-element-admin/quote/list",method:"get",params:t})}function o(t){return Object(a["a"])({url:"/vue-element-admin/quote/create",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/vue-element-admin/quote/update",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/vue-element-admin/quote/items",method:"get",params:t})}function s(t){return Object(a["a"])({url:"/vue-element-admin/quote/delete",method:"delete",data:t})}function u(){return Object(a["a"])({url:"/vue-element-admin/quote/getLatestQuoteNumber",method:"get"})}function c(t){return Object(a["a"])({url:"/vue-element-admin/quote/number",method:"get",params:t})}function d(t){return Object(a["a"])({url:"/vue-element-admin/quote/checkContext",method:"get",params:t})}},"2fdd":function(t,e,n){},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var a=l(),i=t-a,s=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=s;var l=Math.easeInOutQuad(u,a,i,e);r(l),u<e?o(t):n&&"function"===typeof n&&n()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:50},pageSizes:{type:Array,default:function(){return[50,100,200]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(n("1c69"),n("2877")),p=Object(d["a"])(c,a,i,!1,null,"782ba650",null);e["a"]=p.exports},a90e:function(t,e,n){},eb9e:function(t,e,n){"use strict";n("a90e")}}]);