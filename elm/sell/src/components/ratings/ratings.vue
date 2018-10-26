<template>
    <div class="rating">
          <div class="score border-right-1px">
               <div class="score-left">
                    <div class="scoreNum">{{seller.score}}</div>
                    <div class="scoreRating">综合评分</div>
                    <div class="rankRate">高于周边商家{{seller.rankRate}}%</div>
               </div>
               <div class="score-right">
                   <div class="Attitude">
                       <p class="title">服务态度</p>
                       <div class="star">
                           <star :size="36" :score="seller.serviceScore"></star><span class="num">{{seller.serviceScore}}</span>
                       </div>
                    </div>
                    <div class="Attitude">
                       <p class="title">商品评分</p>
                       <div class="star">
                           <star :size="36" :score="seller.foodScore"></star><span class="num">{{seller.foodScore}}</span>
                       </div>
                    </div>
                    <div class="Attitude">
                       <p class="title">送达时间</p>
                       <div class="star deliveryTime">{{seller.deliveryTime}}分钟</div>
                    </div>
               </div>
          </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import star from '../star/star.vue';
    export default {
        props: {
            seller: {
                type: Object
            }
        },
         components: {
            star
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin"
   .rating
      .score
         display :flex
         margin:18px 0
         border-1px(rgba(7,17,27,0.1))
         .score-left
            flex:0 0 138px
            width:138px
            text-align:center
            border-right-1px(rgba(7,17,27,0.1))
            margin-bottom:18px
            .scoreNum
              font-size:24px
              color:rgb(255,153,0)
              line-height:28px
              font-weight:700
            .scoreRating
              font-size:12px
              color:rgb(7,17,27)
              line-height:12px
              margin-top:6px
            .rankRate
              font-size:10px
              color:#ccc
              line-height :10px
              margin-top:8px
         .score-right
            flex:1
            margin-left :24px
            margin-bottom:18px
            .Attitude
               margin-top:12px
               font-size:12px
               color:rgb(7,17,27)
               &:first-child
                  margin-top:0
               .title
                   vertical-align :top
                   display:inline-block
               .star
                   display:inline-block
                   marging-left:12px
                   .num 
                     display:inline-block
                     color:rgb(255,153,0)
                     margin-left:12px       
</style>
