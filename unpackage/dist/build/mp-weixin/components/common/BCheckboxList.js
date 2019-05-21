(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/common/BCheckboxList"],{"3ca2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"BCheckboxList",props:{checkedId:{type:Array,required:!0,default:[]},type:{type:String,default:"single"},title:{type:String},list:{type:Array},handleChange:{type:Function,default:function(){}}},data:function(){return{checkboxChange:function(t){var e=t.detail;this.$emit("update:checkedId",e.value),this.handleChange&&this.handleChange(e.value)}}},computed:{checkedIdObj:function(){var t={};return this.checkedId.forEach(function(e){t[e]=!0}),t}}};e.default=a},4383:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},5969:function(t,e,n){},"7f77":function(t,e,n){"use strict";n.r(e);var a=n("3ca2"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=u.a},"81b9":function(t,e,n){"use strict";var a=n("5969"),u=n.n(a);u.a},b6a5:function(t,e,n){"use strict";n.r(e);var a=n("4383"),u=n("7f77");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("81b9");var r=n("2877"),i=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/common/BCheckboxList-create-component',
    {
        'components/common/BCheckboxList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b6a5"))
        })
    },
    [['components/common/BCheckboxList-create-component']]
]);                
