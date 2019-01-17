<template>
    <div class="header">{{title}}</div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: {
                type: String, //属性的类型
                required: false, //// true 必须传 false 不是必须传递的
                default: 'CRM客户管理系统'// 默认值
            },
        }
    }
</script>

<style scoped lang="stylus">
    .header
        height 100px
        line-height 100px
        text-align center
        background-color cyan
</style>