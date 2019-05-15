##注意
> 不要在选项属性或回调上使用箭头函数，比如 
```
created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。
```
 因为箭头函数是和父级上下文绑定在一起的，this 不会是如你做预期的 Vue 实例，且 this.a 或 this.myMethod 也会是未定义的。

> 建议使用 uni-app 的 onReady代替 vue 的 mounted。

> 建议使用 uni-app 的 onLoad 代替 vue 的 created。

#自定义组件
#### 不支持列表
> 详细的非H5端不支持列表：

- 暂不支持在组件引用时，在组件上定义 click 等原生事件、v-show（可用 v-if 代替）和 class style 等样式属性(例：<card class="class-name"> </card> 样式是不会生效的)。
- Slot（scoped 暂时还没做支持）
- 动态组件
- 异步组件
- inline-template
- X-Templates
- keep-alive
- transition
- class
- style
- 组件里使用 slot 嵌套的其他组件时不支持 v-for
