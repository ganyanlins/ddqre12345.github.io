webpackJsonp([4,6],{1:function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,r=t.default);var c="function"==typeof r?r.options:r;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i),n){var l=c.computed||(c.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:a,exports:r,options:c}}},5:function(t,e){"use strict";function i(t){return("00"+t).substr(t.length)}e.formatDate=function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in n)if(new RegExp("("+a+")").test(e)){var r=n[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?r:i(r))}return e},e.objectDate=function(t){if(t&&"string"==typeof t){t=new Date(t);var e={Y:t.getFullYear(),M:t.getMonth()+1,D:t.getDate()};return e}return t}},26:function(t,e,i){i(123);var n=i(1)(i(56),i(155),null,null);t.exports=n.exports},56:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5);e.default={mounted:function(){this.getPersonalInfo()},data:function(){return{articleData:{},titleImage:"",avatarImage:"",authorName:""}},methods:{goBack:function(){window.history.back()},getPersonalInfo:function(){var t=this;this.$store.commit("UPDATE_LOADING",!0),this.axios.get("/api/posts/"+this.$route.params.pid).then(function(e){t.articleData=e.data,t.titleImage=e.data.titleImage,t.avatarImage="http://zhihu.garychang.cn/tiny-pic?img=https://pic4.zhimg.com/"+e.data.author.avatar.id+"_l.jpg",t.authorName=e.data.column.name,t.$nextTick(function(){t.$store.commit("UPDATE_LOADING",!1)})}).catch(function(t){console.log(t)})}},computed:{titleImageObj:function(){return this.titleImage?"http://zhihu.garychang.cn/tiny-pic?img="+this.titleImage:""},textContent:function(){return String(this.articleData.content).replace(new RegExp("https://pic1.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=https://pic1.zhimg.com").replace(new RegExp("https://pic2.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=https://pic2.zhimg.com").replace(new RegExp("https://pic3.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=https://pic3.zhimg.com").replace(new RegExp("https://pic4.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=https://pic4.zhimg.com").replace(new RegExp("http://pic1.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=http://pic1.zhimg.com").replace(new RegExp("http://pic2.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=http://pic2.zhimg.com").replace(new RegExp("http://pic3.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=http://pic3.zhimg.com").replace(new RegExp("http://pic4.zhimg.com","gm"),"http://zhihu.garychang.cn/tiny-pic?img=http://pic4.zhimg.com")}},filters:{formatDate:function(t){var e=new Date(t);return(0,n.formatDate)(e,"yyyy-MM-dd")}}}},108:function(t,e,i){e=t.exports=i(2)(),e.push([t.id,".article-content.fade-enter-active,.article-content.fade-leave-active{transition:all .2s linear;transform:translateZ(0)}.article-content.fade-enter,.article-content.fade-leave-active{opacity:0;transform:translate3d(100%,0,0)}.article-content .article-content-info .article-info-header{padding-left:15px;padding-right:15px}.article-content .article-content-info .article-info-header .article-title-image .article-title-image-pic{width:100%;margin-bottom:22px}.article-content .article-content-info .article-info-header .article-title{font-size:26px;line-height:1.3;font-weight:700;text-align:center}.article-content .article-content-info .article-info-header .article-author-info{display:-ms-flexbox;display:flex;margin-top:22px;-ms-flex-direction:row;flex-direction:row;position:relative;-ms-flex-align:center;align-items:center;font-size:14px;color:gray}.article-content .article-content-info .article-info-header .article-author-info a{color:gray;margin-right:10px}.article-content .article-content-info .article-info-header .article-author-info a img{width:36px;height:36px;border-radius:50%}.article-content .article-content-info .article-info-header .article-author-info .published-time{color:gray}.rich-text{white-space:normal;padding:15px}.rich-text a,.rich-text a:not(.video-box):not(.link-box):not(.member_mention){color:#259;text-decoration:none;border-bottom:0!important}.rich-text a:hover,.rich-text a:not(.video-box):not(.link-box):not(.member_mention):hover{text-decoration:underline;color:#259}.rich-text p{margin:20px 0}.rich-text ol+br,.rich-text p+br,.rich-text ul+br{display:none}.rich-text h1,.rich-text h2,.rich-text h3,.rich-text h4{margin:20px 0;font-size:24px;font-weight:400}.rich-text blockquote,.rich-text ol,.rich-text ul{margin:20px 0}.rich-text img{max-width:100%;display:block;margin:20px auto 30px}.rich-text blockquote{padding-left:1.2em;border-left:4px solid #e2e3e4;color:#333}.rich-text li{margin-top:10px}.rich-text ol,.rich-text ul{padding-left:24px}.rich-text embed{width:100%}[v-cloak]{display:none}","",{version:3,sources:["/./src/components/articleContent/articleContent.vue"],names:[],mappings:"AACA,sEAEE,0BAA4B,AAC5B,uBAAgC,CACjC,AACD,+DAEE,UAAW,AACX,+BAAmC,CACpC,AACD,4DACE,kBAAmB,AACnB,kBAAoB,CACrB,AACD,0GACE,WAAY,AACZ,kBAAoB,CACrB,AACD,2EACE,eAAgB,AAChB,gBAAiB,AACjB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,iFACE,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,uBAAwB,AACpB,mBAAoB,AACxB,kBAAmB,AACnB,sBAAuB,AACvB,mBAAoB,AACpB,eAAgB,AAChB,UAAe,CAChB,AACD,mFACE,WAAe,AACf,iBAAmB,CACpB,AACD,uFACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,iGACE,UAAe,CAChB,AACD,WACE,mBAAoB,AACpB,YAAc,CACf,AACD,8EAEE,WAAY,AACZ,qBAAsB,AACtB,yBAA4B,CAC7B,AACD,0FAEE,0BAA2B,AAC3B,UAAY,CACb,AACD,aACE,aAAe,CAChB,AACD,kDAGE,YAAc,CACf,AACD,wDAIE,cAAe,AACf,eAAgB,AAChB,eAAiB,CAClB,AACD,kDAGE,aAAe,CAChB,AACD,eACE,eAAgB,AAChB,cAAe,AACf,qBAAuB,CACxB,AACD,sBACE,mBAAoB,AACpB,8BAA+B,AAC/B,UAAY,CACb,AACD,cACE,eAAiB,CAClB,AACD,4BAEE,iBAAmB,CACpB,AACD,iBACE,UAAY,CACb,AACD,UACE,YAAc,CACf",file:"articleContent.vue",sourcesContent:["\n.article-content.fade-enter-active,\n.article-content.fade-leave-active {\n  transition: all 0.2s linear;\n  transform: translate3d(0, 0, 0);\n}\n.article-content.fade-enter,\n.article-content.fade-leave-active {\n  opacity: 0;\n  transform: translate3d(100%, 0, 0);\n}\n.article-content .article-content-info .article-info-header {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.article-content .article-content-info .article-info-header .article-title-image .article-title-image-pic {\n  width: 100%;\n  margin-bottom: 22px;\n}\n.article-content .article-content-info .article-info-header .article-title {\n  font-size: 26px;\n  line-height: 1.3;\n  font-weight: 700;\n  text-align: center;\n}\n.article-content .article-content-info .article-info-header .article-author-info {\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 22px;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  position: relative;\n  -ms-flex-align: center;\n  align-items: center;\n  font-size: 14px;\n  color: #808080;\n}\n.article-content .article-content-info .article-info-header .article-author-info a {\n  color: #808080;\n  margin-right: 10px;\n}\n.article-content .article-content-info .article-info-header .article-author-info a img {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.article-content .article-content-info .article-info-header .article-author-info .published-time {\n  color: #808080;\n}\n.rich-text {\n  white-space: normal;\n  padding: 15px;\n}\n.rich-text a,\n.rich-text a:not(.video-box):not(.link-box):not(.member_mention) {\n  color: #259;\n  text-decoration: none;\n  border-bottom: 0 !important;\n}\n.rich-text a:hover,\n.rich-text a:not(.video-box):not(.link-box):not(.member_mention):hover {\n  text-decoration: underline;\n  color: #259;\n}\n.rich-text p {\n  margin: 20px 0;\n}\n.rich-text ol+br,\n.rich-text p+br,\n.rich-text ul+br {\n  display: none;\n}\n.rich-text h1,\n.rich-text h2,\n.rich-text h3,\n.rich-text h4 {\n  margin: 20px 0;\n  font-size: 24px;\n  font-weight: 400;\n}\n.rich-text blockquote,\n.rich-text ol,\n.rich-text ul {\n  margin: 20px 0;\n}\n.rich-text img {\n  max-width: 100%;\n  display: block;\n  margin: 20px auto 30px;\n}\n.rich-text blockquote {\n  padding-left: 1.2em;\n  border-left: 4px solid #e2e3e4;\n  color: #333;\n}\n.rich-text li {\n  margin-top: 10px;\n}\n.rich-text ol,\n.rich-text ul {\n  padding-left: 24px;\n}\n.rich-text embed {\n  width: 100%;\n}\n[v-cloak] {\n  display: none;\n}"],sourceRoot:"webpack://"}])},123:function(t,e,i){var n=i(108);"string"==typeof n&&(n=[[t.id,n,""]]);i(3)(n,{});n.locals&&(t.exports=n.locals)},155:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return e("transition",{attrs:{name:"fade2"}},[e("div",{staticClass:"article-content"},[e("header",{staticClass:"header"},[e("header",{staticClass:"bar bar-nav"},[e("div",{staticClass:"pull-left",on:{click:t.goBack}},[e("span",{staticClass:"iconfont icon-left"})])," ",e("div",{staticClass:"title"},[t._s(t.articleData.title)])])])," ",e("div",{staticClass:"article-content-info"},[e("div",{staticClass:"article-info-header"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.titleImageObj,expression:"titleImageObj"}],staticClass:"article-title-image"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.titleImageObj,expression:"titleImageObj"}],staticClass:"article-title-image-pic",attrs:{alt:"articleData.title",lazy:"loading"}})])," ",e("h1",{staticClass:"article-title",domProps:{textContent:t._s(t.articleData.title)}})," ",e("div",{staticClass:"article-author-info"},[e("a",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.avatarImage,expression:"avatarImage"}],staticClass:"avatar-size-xs",attrs:{alt:"authorName",lazy:"loading"}})])," ",e("a",{domProps:{textContent:t._s(t.authorName)}})," ",e("div",{staticClass:"published-time"},[t._s(t._f("formatDate")(t.articleData.publishedTime))])])])," ",e("div",{staticClass:"rich-text",domProps:{innerHTML:t._s(t.textContent)}})])])])},staticRenderFns:[]}}});
//# sourceMappingURL=4.73305149097237dd3ebd.js.map