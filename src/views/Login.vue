<template>
    <div class="login">
        <Header title="登录"></Header>

        <van-button type="primary" @click="login">登录</van-button>
    </div>
</template>

<script>
    import Header from '../components/Header'
    export default {
        name: "Login",
        components: {Header},
        methods: {
            //模拟登录
            login(){
                sessionStorage.setItem('isLogin','1');
                //跳回用户想去页
                let path = this.$route.query.redirect;
                this.$router.replace(path);
            }
        }

    }
</script>

<style scoped>

</style>