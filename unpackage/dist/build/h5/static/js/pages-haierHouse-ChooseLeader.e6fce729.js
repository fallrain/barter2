(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-haierHouse-ChooseLeader"],{"05ed":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"BCheckboxList",props:{checkedId:{type:Array,required:!0,default:[]},type:{type:String,default:"single"},title:{type:String},list:{type:Array},handleChange:{type:Function,default:function(){}}},data:function(){return{checkboxChange:function(e){var t=e.detail;this.$emit("update:checkedId",t.value),this.handleChange&&this.handleChange(t.value)}}},computed:{checkedIdObj:function(){var e={};return this.checkedId.forEach(function(t){e[t]=!0}),e}}};t.default=a},"064d":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("b-checkbox-list",{attrs:{title:"选择一站筑家负责人",list:e.list,checkedId:e.checkedId,handleChange:e.change},on:{"update:checkedId":function(t){t=e.$handleEvent(t),e.checkedId=t},"update:checked-id":function(t){t=e.$handleEvent(t),e.checkedId=t}}})],1)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"08ba":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62"),i=c(n("b6a5"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={name:"ChooseLeader",components:{BCheckboxList:i.default},data:function(){return{checkedId:[this.choosedLeader.id],list:[{id:"1",val:"张亮"},{id:"2",val:"刘宏伟"},{id:"3",val:"孙大壮"},{id:"4",val:"王志欢"},{id:"5",val:"孙代"}]}},onLoad:function(){this.hGet("barter-builthouse/buildHouse/areaBuildHouse/1",{name:1}).then(function(e){e&&console.log(e)})},computed:u({},(0,a.mapState)("haierHouse",["choosedLeader"]),{checkedId:function(){return[this.choosedLeader.id]}}),methods:u({},(0,a.mapMutations)("haierHouse",["changeChoosedLeader"]),{change:function(e){var t=this.list.find(function(t){return t.id===e[0]});this.changeChoosedLeader(t),uni.navigateTo({url:"/pages/haierHouse/HaierHouseApply"})}})};t.default=o},1127:function(e,t,n){"use strict";n.r(t);var a=n("08ba"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=i.a},"1f1c":function(e,t,n){"use strict";var a=n("8b08"),i=n.n(a);i.a},"49b4":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.BCheckboxList-item[data-v-53ed57de]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}',""])},"7f77":function(e,t,n){"use strict";n.r(t);var a=n("05ed"),i=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=i.a},8820:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"bt2-houseApply-card"},[n("p",{staticClass:"bt2-houseApply-card-title"},[e._v(e._s(e.title))]),n("v-uni-checkbox-group",{on:{change:function(t){t=e.$handleEvent(t),e.checkboxChange(t)}}},[n("ul",{staticClass:"bt2-houseApply-card-cnt"},e._l(e.list,function(t){return n("li",{key:t.id,staticClass:"bt2-houseApply-card-item BCheckboxList-item"},[n("v-uni-text",{staticClass:"bt2-houseApply-card-item-name"},[e._v(e._s(t.val))]),n("v-uni-checkbox",{attrs:{value:t.id,checked:e.checkedIdObj[t.id]}})],1)}),0)])],1)},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"8b08":function(e,t,n){var a=n("49b4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("0ee018c0",a,!0,{sourceMap:!1,shadowMode:!1})},b6a5:function(e,t,n){"use strict";n.r(t);var a=n("8820"),i=n("7f77");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);n("1f1c");var u=n("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"53ed57de",null);t["default"]=r.exports},d642:function(e,t,n){"use strict";n.r(t);var a=n("064d"),i=n("1127");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);var u=n("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"48ae340e",null);t["default"]=r.exports}}]);