<template>
  <div >
      <v-header :seller="seller"></v-header>
      <div class="tab border-1px">
         <div class="tab-item">
            <router-link to="/goods">商品</router-link>
         </div>
         <div class="tab-item">
            <router-link to="/ratings">评论</router-link>
         </div>
         <div class="tab-item">
            <router-link to="/seller">商家</router-link>
         </div>
      </div>
        <keep-alive>
            <router-view v-bind:seller="seller"></router-view>
        </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
    import header from './components/header/header.vue';
    import {urlParse} from './common/js/util.js';
    const ERR_OK = 0;

    export default{
      data() {
          return {
              seller: {
                id: (() => {
                    let queryParam = urlParse();
                    return queryParam.id;
                })()
              }
          };
      },
      created() {
         this.$http.get('/api/seller?id='+this.seller.id).then((response) => {
            response = response.data;
             console.log(response);
            if (response.errno === ERR_OK) {
                this.seller = Object.assign({}, this.seller, response.data);
                console.log(this.seller);
            }
            });
      },
      components: {
          'v-header': header
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/mixin.styl"
    .tab
       display: flex
       height: 40px
       width: 100%
       line-height:40px
       .tab-item
          flex:1  
          text-align:center
          border-1px(rgba(7,17,27,0.1))
          &>a
             display:block
             font-size:14px
             color:rgb(77,85,93)
             &.active
               color:rgb(240,20,20)
</style>
