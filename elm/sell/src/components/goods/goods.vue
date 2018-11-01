<template>
   <div class="goods">
        <div class="menu-wrapper" v-el:menu-wrapper>
            <ul>
                <li v-for="item in goods" class="menu-item" :class="{'current':currentIndex===$index}" @click="selectMenu($index,$event)">
                    <span class="text border-1px">
                        <span v-show="item.type>0"  class="icon" :class="classMap[item.type]" ></span>{{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" v-el:foods-wrapper>
           <ul>                                                                  
               <li v-for="item in goods" class="food-list food-list-hook">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                       <li v-for="food in item.foods" class="food-item border-1px"  @click=" selectedFoodDetail(food, $event) ">
                            <div class="icon">
                                 <img :src="food.icon" width="57" height="57">
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span>
                                    <span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                                </div>
                                <div class="control-wrapper">
                                      <cartcontrol :food="food"></cartcontrol>
                                </div>
                                
                            </div>
                       </li>
                    </ul>
               </li>
           </ul>
        </div>
        <div class="shopcartWrapper">
           <shopcart :select-foods='selectFoods' v-ref:shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" ></shopcart>
        </div>
   </div>
   <food :food="selectedFood" v-ref:food></food>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import shopcart from '../shopcart/shopcart.vue';
    import cartcontrol from '../cartcontrol/cartcontrol.vue';
    import food from '../food/food.vue';
    
    const ERR_OK = 0;
    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                goods: [],
                listHeight: [],
                scrollY: 0,
                selectedFood: {}
            };
        },
        computed: {
            currentIndex() {
                for (var i=0;i<this.listHeight.length;i++) {
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i + 1];
                    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                        return i;
                    }
                }
                return 0;
            },
            selectFoods() {
                // 点击增加点餐数
                let foods = [];
                this.goods.forEach((good) => {
                    good.foods.forEach((food) => {
                       if (food.count) {
                           foods.push(food);
                       }
                    });
                });
                return foods;
            }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

            this.$http.get('/api/goods').then((response) => {
                response = response.body;
                if (response.erron === ERR_OK) {
                    this.goods = response.data;
                    this.$nextTick(() => {
                        this._initScroll();
                        this._calculateHeight();
                    });
                }
            });
         },
         methods: {
            selectMenu(index, event) {
                if (!event._constructed) {
                    return;
                }
                let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
                let el=foodList[index];
                this.foodScroll.scrollToElement(el, 300);
            },
            selectedFoodDetail(food, event) {
                console.log(food);
                if (!event._constructed) {
                      return;
                   }
               this.selectedFood = food;
               this.$refs.food.show();
            },
            _drop(target) {
                // 处理第一点击时动画卡顿的情况（同时运行两个动画）异步执行下落动画
                this.$nextTick(() => {
                    this.$refs.shopcart.drop(target);
                });
            },
            _initScroll() {
                this.meunScroll = new BScroll(this.$els.menuWrapper, {click: true});
                this.foodScroll = new BScroll(this.$els.foodsWrapper, {
                    probeType: 3,
                    click: true
                });
                this.foodScroll.on('scroll', (pos) => {
                     this.scrollY = Math.abs(Math.round(pos.y));
                });
            },
            _calculateHeight() {
                let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
                let height = 0;
                this.listHeight.push(height);
                for (let i=0;i< foodList.length;i++) {
                  let item = foodList[i];
                  height += item.clientHeight;
                  this.listHeight.push(height);
                }
            }
         },
         components: {
             shopcart,
             cartcontrol,
             food
           },
         events: {
            // 调用子组件的方法
            'cart.add'(target) {
               this._drop(target);
            }
         }
        };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin"
  .goods
     position :absolute
     top:174px
     bottom:46px
     width:100%
     display:flex
     overflow :hidden
     .menu-wrapper
        flex:0 0 80px
        width:80px
        background #f3f5f7
        .menu-item
           display:table
           height 54px
           width:56px
           line-height :14px
           padding:0 12px
           &.current
              position:relative
              margin-top:-1px
              z-index:10
              background:#fff
              font-weight:700
              .text 
                border-none()
           .icon
              display:inline-block
              width:12px
              height :12px
              margin-right:2px
              background-size:12px 12px
              background-repeat:no-repeat
              &.decrease
                bg-image('decrease_3')
              &.discount
                bg-image('discount_3')
              &.guarantee
                bg-image('guarantee_3')
              &.invoice
                bg-image('invoice_3')
              &.special
                bg-image('special_3')  
           .text
              font-size:12px
              display:table-cell
              width :56px
              vertical-align :middle
              border-1px(rgba(7,17,27,0.1))
     .foods-wrapper
        flex:1 
        .title
           padding-left:14px
           height :26px;
           line-height:26px
           border-left:2px solid #d9dde1
           font-size:12px
           color:rgb(147,153,159)
           background :#f3f5f7
        .food-item
           display:flex
           margin:18px
           padding-bottom:18px
           border-1px(rgba(7,17,27,0.1))
           &:last-child
              border-none()
              margin-bottom:0
           .icon
             flex:0 0 57
             margin-right:10px
           .content
             flex:1
             .name
                margin:2px 0 8px 0
                height:14px
                line-height :14px
                font-size:14px
                color:rgb(7,17,27)
             .desc,.extra
                line-height:10px
                font-size:10px
                color:rgb(147,153,159)
             .desc
                margin-bottom:8px
                line-height :12px
             .extra
                &.count
                   margin-right :12px
             .price
                font-weight:700
                line-height:24px
                .now
                   margin-right:8px
                   font-size:14px
                   color:rgb(240,20,20)
                .old
                   text-decoration:line-through
                   font-size:10px
                   color:rgb(147,153,159)
             .control-wrapper
               position :absolute
               bottom:12px
               right:0
     .shopcartWrapper
        z-index:999
</style>


