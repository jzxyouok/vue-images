webpackJsonp([2,0],[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=i(22),o=n(s),a=i(67),c=n(a),r=i(56),d=n(r);new c.default((0,o.default)({el:"#app"},d.default))},,,,,,,,,,function(t,e,i){var n,s;i(53),n=i(16);var o=i(64);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return'<svg fill="'+t+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">\n    <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"/>\n  </svg>'}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return'<svg fill="'+t+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">\n    <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"/>\n  </svg>'}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return'<svg fill="'+t+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>\n  </svg>'}},function(t,e,i){"use strict";t.exports={arrowLeft:i(11),arrowRight:i(12),close:i(13)}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(59),o=n(s),a=i(58),c=n(a),r=i(60),d=n(r);e.default={name:"app",data:function(){return{isShow:!1,index:2,touchPoint:{prev:0,now:0},images:[{imageUrl:"https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=2&auto=format&w=1024",caption:"Photo by 1",index:1,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=2&auto=format&w=1024",caption:"Photo by 2",index:2,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?dpr=2&auto=format&w=1024",caption:"Photo by 3",index:3,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1456926631375-92c8ce872def?dpr=2&auto=format&w=1024",caption:"Photo by 4",index:4,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&w=1024",caption:"Photo by 5",index:5,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1471145653077-54c6f0aae511?dpr=2&auto=format&w=1024",caption:"Photo by 6",index:6,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?dpr=2&auto=format&w=1024",caption:"Photo by 7",index:7,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1470583190240-bd6bbde8a569?dpr=2&auto=format&w=1024",caption:"Photo by 8",index:8,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1470688090067-6d429c0b2600?dpr=2&auto=format&w=1024",caption:"Photo by 9",index:9,total:10,isActive:!1},{imageUrl:"https://images.unsplash.com/photo-1470742292565-de43c4b02b57?dpr=2&auto=format&w=1024",caption:"Photo by 10",index:10,total:10,isActive:!1}]}},created:function(){this.isShow&&(window.addEventListener("keydown",this.keyFun),window.addEventListener("mousewheel",this.wheelFun),this.$refs.lightbox.addEventListener("touchstart",this.touchFun))},methods:{openImg:function(){this.isShow=!0},closeImg:function(){this.isShow=!1},nextImg:function(){this.index<this.images.length-1&&this.index++},prevImg:function(){this.index>0&&this.index--},changeImg:function(t){this.isShow=!0,this.index=t},keyFun:function(t){var e=this;switch(t.keyCode){case 27:this.closeImg();break;case 37:this.index>0&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutRight"),window.setTimeout(function(){e.$refs.fancybox._data.next=!0,e.$refs.fancybox._data.animation=!0,e.prevImg()},375));break;case 39:this.index<this.images[this.index].total-1&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutLeft"),window.setTimeout(function(){e.$refs.fancybox._data.next=!1,e.$refs.fancybox._data.animation=!0,e.nextImg()},375));break;default:return}},wheelFun:function(t){var e=this;t.deltaY>0?this.index<this.images[this.index].total-1&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutLeft"),window.setTimeout(function(){e.$refs.fancybox._data.next=!1,e.$refs.fancybox._data.animation=!0,e.nextImg()},375)):this.index>0&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutRight"),window.setTimeout(function(){e.$refs.fancybox._data.next=!0,e.$refs.fancybox._data.animation=!0,e.prevImg()},375))},touchFun:function(t){this.touchPoint.prev=t.touches[0].clientX},endFun:function(t){this.touchPoint.now=t.changedTouches[0].clientX;var e=this;this.touchPoint.prev>this.touchPoint.now+50?this.index<this.images[this.index].total-1&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutLeft"),window.setTimeout(function(){e.$refs.fancybox._data.next=!1,e.$refs.fancybox._data.animation=!0,e.nextImg()},375)):this.touchPoint.now>this.touchPoint.prev+50&&this.index>0&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutRight"),window.setTimeout(function(){e.$refs.fancybox._data.next=!0,e.$refs.fancybox._data.animation=!0,e.prevImg()},375))}},watch:{isShow:function(){this.isShow?(window.addEventListener("keydown",this.keyFun),window.addEventListener("mousewheel",this.wheelFun),this.$refs.lightbox.addEventListener("touchstart",this.touchFun),this.$refs.lightbox.addEventListener("touchend",this.endFun)):(window.removeEventListener("keydown",this.keyFun),window.removeEventListener("mousewheel",this.wheelFun),this.$refs.lightbox.removeEventListener("touchstart",this.touchFun),this.$refs.lightbox.removeEventListener("touchend",this.endFun))}},components:{gallery:o.default,fancybox:c.default,paginator:d.default}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(14),o=n(s);e.default={props:{type:String,color:String},computed:{icon:function(){return o.default[this.type]?o.default[this.type].default(this.color):(console.log("Icon render error -- type not exist"),"")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{imageUrl:String}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),o=n(s);e.default={props:{index:Number,images:Array,animate:{type:Boolean,default:!1}},data:function(){return{next:!0,animation:!1}},methods:{decIndex:function(){this.$refs.images[this.index].classList.add("slideOutRight");var t=this;window.setTimeout(function(){t.$emit("decIndex"),t.next=!0,t.animation=!0},350)},addIndex:function(){if(this.index<this.images[this.index].total-1){this.$refs.images[this.index].classList.add("slideOutLeft");var t=this;window.setTimeout(function(){t.$emit("addIndex"),t.next=!1,t.animation=!0},350)}},close:function(){this.$emit("close"),this.animation=!1}},watch:{index:function(){var t=this;this.$refs.images[this.index].classList.remove("slideInLeft","slideInRight","slideOutLeft","slideOutRight");var e=this.next?"slideInLeft":"slideInRight";(this.animation||this.animate)&&this.$refs.images[this.index].classList.add(e),this.$nextTick(function(){t.animation=!1})}},components:{icon:o.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{images:Array},methods:{setActive:function(t){this.$emit("changeIndex",t)}}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),o=n(s),a=i(57),c=n(a);e.default={props:{images:Array,activeIndex:Number},data:function(){return{index:0}},computed:{activeImages:function(){return this.images.slice(this.index,this.index+5)}},mounted:function(){this.index=this.setIndex(this.activeIndex),this.setActive(this.activeIndex)},watch:{activeIndex:function(){this.index=this.setIndex(this.activeIndex),this.setActive(this.activeIndex)}},methods:{setIndex:function(t){return t<=this.images.length-3&&t>=2?t-2:t<2?0:this.images.length-5},setActive:function(t){t!==this.activeIndex&&this.$emit("changeIndex",t),this.images.forEach(function(t){t.isActive=!1}),this.images[t].isActive=!0}},components:{icon:o.default,thumbnail:c.default}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,i){var n,s;i(55),n=i(15);var o=i(66);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e,i){var n,s;i(54),n=i(17);var o=i(65);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e,i){var n,s;i(52),n=i(18);var o=i(63);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e,i){var n,s;i(51),n=i(19);var o=i(62);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-0cb4f183",t.exports=n},function(t,e,i){var n,s;i(50),n=i(20);var o=i(61);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=n},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"paginator"},[t.index>0?i("div",{staticClass:"arrow left",on:{click:function(e){e.stopPropagation(),t.index-=1}}},[i("icon",{attrs:{type:"arrowLeft",color:"#ccc"}})],1):t._e(),t._v(" "),t._l(t.activeImages,function(e){return i("div",{staticClass:"thumbnail-wrapper",on:{click:function(i){i.stopPropagation(),t.setActive(e.index-1)}}},[i("thumbnail",{class:{active:e.isActive},attrs:{imageUrl:e.imageUrl}})],1)}),t._v(" "),t.index<t.images.length-5?i("div",{staticClass:"arrow right",on:{click:function(e){e.stopPropagation(),t.index+=1}}},[i("icon",{attrs:{type:"arrowRight",color:"#ccc"}})],1):t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery"},[i("div",{staticClass:"bigger"},[i("img",{attrs:{src:t.images[0].imageUrl},on:{click:function(e){t.setActive(0)}}}),t._v(" "),i("img",{attrs:{src:t.images[5].imageUrl},on:{click:function(e){t.setActive(5)}}})]),t._v(" "),i("div",{staticClass:"smaller"},[i("img",{attrs:{src:t.images[1].imageUrl},on:{click:function(e){t.setActive(1)}}}),t._v(" "),i("img",{attrs:{src:t.images[2].imageUrl},on:{click:function(e){t.setActive(2)}}})]),t._v(" "),i("div",{staticClass:"smaller"},[i("img",{attrs:{src:t.images[3].imageUrl},on:{click:function(e){t.setActive(3)}}}),t._v(" "),i("img",{attrs:{src:t.images[4].imageUrl},on:{click:function(e){t.setActive(4)}}}),t._v(" "),i("img",{attrs:{src:t.images[9].imageUrl},on:{click:function(e){t.setActive(9)}}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fancybox"},[i("div",{staticClass:"image-wrapper"},[i("div",{staticClass:"header"},[i("div",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.close(e)}}},[i("icon",{attrs:{type:"close",color:"#ccc"}})],1)]),t._v(" "),t._l(t.images,function(e){return i("img",{directives:[{name:"show",rawName:"v-show",value:e.index===t.index+1,expression:"item.index===index+1"}],ref:"images",refInFor:!0,staticClass:"image animated",attrs:{src:e.imageUrl},on:{click:function(e){e.stopPropagation(),t.addIndex(e)}}})}),t._v(" "),i("div",{staticClass:"footer"},[i("span",{staticClass:"caption",on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.images[t.index].caption))]),t._v(" "),i("span",{staticClass:"count",on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.index+1)+" of "+t._s(t.images[t.index].total))])])],2),t._v(" "),t.index>0?i("div",{staticClass:"arrow left",on:{click:function(e){e.stopPropagation(),t.decIndex(e)}}},[i("icon",{attrs:{type:"arrowLeft",color:"#ccc"}})],1):t._e(),t._v(" "),t.index<t.images[t.index].total-1?i("div",{staticClass:"arrow right",on:{click:function(e){e.stopPropagation(),t.addIndex(e)}}},[i("icon",{attrs:{type:"arrowRight",color:"#ccc"}})],1):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{domProps:{innerHTML:t._s(t.icon)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+t.imageUrl+")"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("gallery",{attrs:{images:t.images},on:{changeIndex:function(e){t.changeImg(e)}}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"lightbox",staticClass:"lightbox",on:{click:t.closeImg}},[i("fancybox",{ref:"fancybox",attrs:{images:t.images,index:t.index},on:{close:t.closeImg,addIndex:t.nextImg,decIndex:t.prevImg}}),t._v(" "),i("paginator",{attrs:{images:t.images,activeIndex:t.index},on:{changeIndex:function(e){t.changeImg(e)}}})],1)],1)},staticRenderFns:[]}}]);