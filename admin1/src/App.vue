<template>
  <router-view/>
</template>

<style lang="stylus">
.container
    flex-direction column
    height 100%
    display flex
    .query
       flex-shrink 0
    .table
       flex 1
       overflow auto
.query .layui-input
    height 30px
    font-size 12px
.query .layui-btn
    font-size 12px
    height 30px
    line-height 30px
.query .layui-form-pane .layui-form-label
    width auto !important
    height 30px !important
    line-height 14px !important
    font-size 12px
    color #666
</style>
