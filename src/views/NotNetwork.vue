<template>
    <div class="network">
        <h3>我没网了!!!</h3>
        <div class="btn" @click="onRefresh">点击刷新</div>
    </div>
</template>

<script>
    export default {
        name: "NotNetwork",
        methods: {
            // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
            onRefresh () {
                console.log(this.$route);
                //获取断网前用户所在路由
                //回退到原路由
                let path = this.$route.query.redirect;
                this.$router.replace(path);
            }
        }
    }
</script>

<style scoped>
    .network{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 3000;
        width: 50%;
        height: 200px;
        background: gray;
    }
    .btn{
        width: 200px;
        background: yellow;
    }
</style>