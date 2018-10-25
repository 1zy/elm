# sell

> sell app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



# 1定义一个路由
var apiRoutes = express.Router()
# 2定义路由的入口
apiRoutes.get('/seller',function(req,res){
   res.json({
      errno:0, //用于标示数据是正常的
      data:seller
   });
})
# 3路由的进入方式
app.use('/api',apiRoutes)
# 4使用
http://localhost:8080/api/ratings

使用Google的jsonview插件可以使数据格式化，使数据更清晰

<!-- 在页面中初始化css代码 -->
1、在static中设置reset.css的样式
2、在文件的最外层中引入css

<!-- 代码风格化eslintrc -->
1.在eslintrc.js中配置
'semi':['error','always']
2.空格不超过两行
"no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
3./* eslint-disable no-new */在代码上增加此行代码可以使其不校验eslint的校验规则

<!-- 支持Es6的语法 -->
<script type="text/ecmascript-6">
</script>

<!-- 支持其他语言的css -->
<style lang="stylus" rel="stylesheet/stylus">
</style>

<!-- 组件引用 -->
组件中通过export default{}将组件导出
在APP.vue中的script中引用
import header from "components/header/header.vue"
//对组件进行注册
export default{
    components:{
        header:header
    }
}

<!-- 当前目录 -->
./

<!-- 组件命名 -->
不允许使用html标签名命名（如<header>）

<!-- 安装vue-router -->
1.在package中输入相应的版本号
2.执行npm install命令
3.引用vue-router在main.js中
  引入 import VueRouter from 'vue-router'
  使用 Vue.use(VueRouter)
4.使用a标签进行跳转,通过path指定路径
  <a v-link="{path:/good}"></a>
  通过点击a标签改变<router-view></router-view>中的内容
5.在main.js中将new vue 改写成使用extend的挂载方式
  let app=Vue.extend(App)
6.创建router的实例let router=new vueRouter()才能够使用路由
7.使用router.map进行路径的指定
  router.map({
      '/goods':{
          
      }
  })
8.router.start(app,'#app');// 将router运行在app文件的app节点上
9.设置默认页面
  router.go('/goods') //页面载入时显示/goods页面
<!-- 文件入口 -->
1.在webpack.base.config文件中可以定义文件的入口，这样方便书写文件的在哪个目录下
 'components': path.resolve(__dirname, '../src/components')


 /////////stylus///
 1.&代表父元素

 <!-- 配置vue激活时的属性为active -->
 1.在router中设置
   let router=new VueRouter({
     linkActiveClass:'active'  //将激活状态的class设置为active
   })
  
<!-- Mixin使用计算多次使用css -->
border-1px($color) /可以传入参数
在需要使用mixin的地方使用import进行引用
@import "./common/stylus/mixin.styl"

<!-- vue-resource相当于ajax的插件的使用 -->
1.在main.js中引用 import VueResouce from 'vue-resouce'
2.Vue.use(VueResouce) 注册
3. this.$http.get('/api/seller').then((response) => {
  //成功的回调
            response = response.body;
            //获取json对象 （由于Api会改变对应的版本号需要查看相应的APi文档）
            if (response.erron === ERR_OK) {
                this.seller = response.data;
                console.log(this.seller);
            }
            });

<!-- 生命周期created -->
 created() {}// 函数书写格式 将this.$http的类ajax请求放入created中

<!-- 邦定v-vind -->
需要将数据return 出来
 export default{
      data() {
          return {
              seller: {}
          };
      },
1.在   <v-header :seller="seller"></v-header>//在App.vue的组件上将seller绑定
2.在所在的header组件中通过prop拿到夫节点上绑定的值
3.在vue中引用props中的数据需要使用v-bind 在img中的src需要更改为：src

<!-- vue中的判断 -->
v-if进行判断
font-size:0可以消除空白间隙
vertical-align:top 顶部对齐

<!-- css的引用 -->
1.如果在css中使用了mixin函数的css需要在使用的组件文件的css样式中引入对应的mixin的css文件
2.其他的css文件可以在main.js中通过import进行引入

<!--超出部分隐藏  -->
1.white-space:nowrap
2.overflow:hidden
3.text-overflow:ellipsis 

<!-- 图片模糊 -->
 filter:blur(10px)
 使用模糊会使边框超出，可以使用overflow将超出的部分隐藏

 <!-- 弹出层 -->
 可以通过v-show进行显示合隐藏
 @click点击事件
 在methods:{}中定义事件
 1. <div  @click="showDetail"> 定义点击事件
 2.<div class="detail" v-show="detailShow"></div> 点击事件执行的元素
 3.定义点击事件所要改变的字段 
 data() {
             return {
                 detailShow: false
             };
         },
 4. 在methods中定义事件
    methods: {
             showDetail() {
                this.detailShow = true;
             }
       },
  

<!-- sticky footers布局 -->
如果页面内容不够长的时候，页脚块粘连在视窗底部，如果内容足够长时，页脚块会倍内柔向下推送
<div class="detail-wrapper clearfix">  //内容承载容器
    <div class="detail-main"></div>     //内容部分
</div>
<div class="detail-close"></div> //关闭按钮

.clearfix
   display:inline-block
     &:after
        display:block
        content:'.'
        height 0
        list-style height 0
        clear:both
        visibility:hidden

  .detail-wrapper
            min-height:100%
            .detail-main
                margin-top:64px
                padding-bottom:64px
          .detail-close
            position :relative
            width:32px
            height :32px
            margin:-64px auto
            clear:both
            font-size:32px

<!-- 引用组件 -->
1.使用for循环
<span  :class="itemClass"  class="star-item"  v-for="itemClass in itemClasses" track-by="$index"></span>
2.export default{ //将组件到处
    props:{  //通过props拿到组件上的传递的参数
         
    }

}
2.在需要插入组件的文件中将组件引入
 import star from '../star/star.vue';
3.在需要组件的文件中注册组件
  components: {
            star
        }
4.   <div class="star-wrapper">   //:size和：score就是传递给props中的值
        <star :size="48" :score="seller.score"></star>
    </div>

<!-- computed和methods间的区别 -->
用户v-bind  ：class
1.调用computed中的方法不需要（）  
2.methods调用其中的方法一定需要（）

<!-- flex布局 -->

1.看阮一峰教程
<!-- 点击事件 -->
@click="" //事件名称

<!-- 动画 -->
vue1.0
1.在需要显示动画的层上加上transition即动画的名称<div class="detail" v-if="detailShow" transition='fade'>
2.     &.fade-transition   //动画的最终状态
            opacity :1
            background :rgba(7,17,27,0.8)
          &.fade-enter  //进入和离开的动画
            opacity :0
            background :rgba(7,17,27,0)
          &.fade-leave
            opacity :0
            background :rgba(7,17,27,0)
<!-- 垂直居中布局 -->
 父元素
 display:table
子元素
  display:table-cell
  vertical-align :middle

#使用better-scroll
1.在package.json中加入版本号 dependencies中 "better-scroll":"^0.1.7"
2.使用npm install 进行包安装
3.在需要使用的文件中引入如goods.vue  
    import BScroll from "better-scroll";
4.在methos中使用 //new BScroll 传入两个参数第一个参数是获取的dom元素
 methods: {
            _initScroll() {
                this.meunScroll = new BScroll(this.$els.menuWrapper,{probeType:3}) //使用probeType属性来实时告诉滚动的位置
                this.foodScroll = new BScroll(this.$els.foodsWrapper,{})
            }
         }
5.调用在creaded函数中调用
    this._initScroll()
//在vue中使用v-el来获取dom元素
  1.在需要的元素上<div class="menu-wrapper" v-el:menu-wrapper>
  2.通过this.$els.menuWrapper获取dom
  注意中间的连线获取元素时需要改为驼峰形式的


#左右联动goods.vue
1.计算每个区间的高度
2.在data中 定义listHeigh数组用于存储每个部分的高度
3.添加class 用于js选择
 <li v-for="item in goods" class="food-list food-list-hook">
4.使用原生dom的形似获取class
this.$els.foodsWrapper.getElementsByclassName()
5.获取每个部分的可见高度clientHeight通过叠加的方式，依次保存在listHeight中
 height +=item.clientHeight;
 this.listHeight.push(height);
6.使用计算属性computed 
  通过监听Y轴的位置来映射meun菜单显示第几个通过当前滑动的位置与上下两个位置间的距离的比较
  #在 <li v-for="item in goods" class="menu-item" :class="{'current':currentIndex===$index}">
  添加currentIndex===$index从而改变对应current的样式

#左侧菜单映射到右侧的内容使用点击事件
使用better-scroll会使原来dom元素的事件失效如click ,需要再 new BScroll()中设置click为true（而在网页端dom的事件不会被组止，如设置click属性为true）
  this.meunScroll = new BScroll(this.$els.menuWrapper, {click:true});
//滑动到某个元素，300ms的动画
this.foodScroll.scrollToElement(el, 300);
解决方式
1. @click="selectMenu($index,$event)" //将事件传入
 //自己派发一个事件_constructed为true而浏览器没有_constructed属性

 #购物车组件
 1.使用IE盒子模型
      width:56px
              height:56px
              box-box-sizing:border-box 
2.使用router传参
 <router-view :seller="seller"></router-view>
 在router-view中将参数传入从使router条辉煌的组件可以获取参数
   selectFoods: {
        type: Array,
        default() {}  //在vue中如果props是Array或者object那么default是一个函数
      },
3.在组件中引用组件需要将其click属性设置为true
 this.foodScroll = new BScroll(this.$els.foodsWrapper, {
                    probeType: 3,
                    click: true
                });
4.引入vue import Vue from 'vue';
通过Vue的set方法给props的对象设置属性
  props: {
            food: Object
        },
    Vue.set(this.food,'count',1)
5.transfrom:translate3D(0,0,0) 使动画更加流畅

#购物车小球动画 
#(将子组件的元素传递给父组件，在将父组件的调用子组件的方法)
1.在shopcart.vue写小球的样式,设置小球需要若干个小球，所以需要一个数组，在data中设置一个balls的数组
   data() {
           return {
               balls: [
                   {
                       show:false
                   }
               ]
           }
        },
2.在cartcontrol.vue中设置   
this.$dispatch('cart.add',event.target)
3.在good.vue中设置事件
     events: {
            // 调用子组件的方法
            'cart.add'(target) {
               this._drop(target);
            }
         }
    并且在method中定义方法
     _drop(target) {
                
            },
4.父组件拿到子组件的元素
v-ref
<shopcart v-ref:shopcart >  在组件中设置
 this.$refs.shopcart 在methods中设置