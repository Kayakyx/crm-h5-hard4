<template>
    <div class="testpage">
        <div class="article">
            <h4>article模块接口测试</h4>
            <van-button type="primary" @click="handleGet">get请求测试 1</van-button>
            <br>
            <van-button type="danger" @click="handleGet2">get请求测试 2</van-button>
            <br>
            <van-button type="warning" @click="handlePost">post请求测试</van-button>
            <br>
            <van-button type="danger" @click="handleFromData">post,FormData测试</van-button>
        </div>
        <div class="login">
            <h4>login模块接口测试</h4>
            <van-button type="primary" @click="loginGet">get请求测试</van-button>
            <br>
            <van-button type="danger" @click="loginPost">post请求测试</van-button>
        </div>
        <van-button type="warning" @click="handleTost">Tost测试</van-button>

        <div class="remdiv">rem-Box</div>
    </div>
</template>

<script>

/**把 api.js 挂载到 vue 实例上，调用接口的代码*/

export default {
    name: "TestPage",
    methods: {
        /** article 模块的的接口测试*/
        handleGet() {
            this.$api.article.articleList()
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (err) {
                    console.log(2,err);
                })
        },
        ////使用async异步转同步,这样就不用写 then和catch了
        async handleGet2() {
            let data = await this.$api.article.articleDetail({movieId: 1206875});
            console.log(data);

        },

        async handlePost() {
            //不序列化的post请求
            let data = await this.$api.article.articleApi2({forceUpdate: 1547531959082});
            console.log(data);
        },

        async handleFromData() { //post请求序列化
            let data = await this.$api.article.articleApi1({forceUpdate: 1547531959082});
            console.log(data);
        },
        //Toast测试
        handleTost() {
            this.$toast('提示文案');
        },

        /** login 模块的的接口测试*/
        async loginGet(){

            let data = await this.$api.login.loginApi1({movieId: 1206875});
            console.log(data);
        },
        async loginPost(){
            let data = await this.$api.login.loginApi2({forceUpdate: 1547531959082});
            console.log(data);
        }
    }
}
</script>

<style scoped lang="stylus">
    .remdiv
        width 200px
        height 200px
        background-color blue
    .article
        border 1px solid black
    .login
        border 1px solid cyan
</style>