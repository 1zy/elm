# sell

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

vue2.0变化
#v-for 
在v-for的使用过程中需要使用到index需要在 v-for="(item,index) in seller.supports"在使用时[index]使用
 <li class="support-item border-1px" :key="item" v-for="(item,index) in seller.supports">
    <span class="icon" :class="classMap[seller.supports[index].type]" ></span>
    <span class="text">{{seller.supports[index].description}}</span>
</li>

#动画的改变transition
 transform:translate3d(0,0,0)   //最终的呈现状态卸载最外层
&.move-enter-active, &.move-leave-active  
        transition: all 0.4s linear  //动画的状态写在过渡之间
    .inner
        display: inline-block
        font-size:24px
        line-height :24px
        color:rgb(0,160,220)
        transition: all 0.4s linear 
        transform:rotate(0deg)
&.move-enter,&.move-leave-to
    opacity:0
    transform:translate3d(24px,0,0)
    .inner
        transform :rotate(180deg)

# $emit & $dispatch 
# vue2.0父组件调用子组件的事件
1、子组件：
  在需要给父组件的事件上加上派发（父组件需要调用的时间啊是addCart）
  addCart(event) {
        if(!event._constructed){
            return
        }
        if (!this.food.count) {
            Vue.set(this.food,'count',1)
        }else{
            this.food.count ++;
        }
        this.$emit('add-to-cart',event.target);   //派发事件（名称，参数）
    },
2、父组件：
    <cartcontrol :food="food"  v-on:add-to-cart="addToCart"></cartcontrol>
    addToCart(target){
        // 体验优化，异步执行下落动画
        this.$nextTick(() => {
            this.$refs.shopcart.drop(target);   //调用shopcart组件中的drop方法
        });
    },
#vue子组件中不能修改由父组件中传递的props中的数据
处理方式
1、子元素props获取父组件中传递的数据
    props: {
       ratings:{
            type:Array,
            default() {
               return [];
            }
        },
        data() {
          return{
            sType: this.selectType,
            oContent: this.onlyContent  
          }
        },
        selectType: {
            type: Number,
            default: ALL
        },
        onlyContent: {
            type:Boolean,
            default: false   
        },
        desc: {
            type: Object,
            default() {
               return {
                  all: '全部',
                  positive: '满意',
                  negative: '不满意'
               };
            }
        },
    },
2、子元素中的中的data将现需要做出改变的数据重新赋值（其中selectType和onlycontent会有数据改变）
    data() {
        return{
            sType: this.selectType,
            oContent: this.onlyContent  
        }
    },
3、将改变事件派发到父元素上
 select(type, event) {
            console.log(type)
            if (!event._constructed) {
                return;
            };
            this.sType=type;
            this.$emit('ratingtype-select', type);  //派发事件
        },

#vue2.0动画的改变
1、将最终状态写到指定的class中
2、&.fade-enter-active,&.fade-leave-active 中写入持续的时间和动画的方式
     即：transition:all 5s linear
   &.fade-enter,&fade-leave-to
     设置开始和结束的状态

#vue2.0router的配置改变
在router的文件中
对应的路由配置在webpack.dev.config中进行配置