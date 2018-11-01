<template>
     <div v-show="showFlag" class="food" transition="move"> </div>
</template>

<script type="text/ecamscript-6">
    export default {
        props: {
            food: {
                type: Object
            }
        },
        data() {
            return {
                showFlag: false
            }
        },
        methods: {
            show() {
                this.showFlag = true
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .food 
       position: fixed
       left: 0
       top: 0
       z-index: 300
       width: 100%
       height: 100%
       background:#fff
       &.move-transition
          transition:all 0.2s linear 
          transform :translate3d(0,0,0)
       &.move-enter,&.move-leave
          transform :translate3d(100%,0,0)

</style>

