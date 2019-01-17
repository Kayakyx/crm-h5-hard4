<template>
    <div class="work">
        <!--使用表情属性传递 Header组件显示的内容-->
        <Header title="工作"></Header>
        work
        <div>
            <p>点击下面的按钮去测试axios的封装和接口的统一管理</p>
            <p>
                <van-button type="primary" @click="goTest">去测试页</van-button>
            </p>
        </div>
    </div>
</template>

<script>
    import Header from '../components/Header';
    export default {
        name: "Work",
        components: {Header},
        methods: {
            goTest(){
                this.$router.push('/testpage');
            }
        },
        mounted(){
            // this.getData();
        }
    }
</script>

<style scoped>

</style>