<template>
    <div class="main">
        <router-view/>
        <footer>
            <div class="main-nav" v-for="item, index in navArr" @click.stop = goPath(index) :class="[{}]">
                <p>icon{{index}}</p>
                <p>{{item.title}}</p>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return{
                isShow: 0,
                navArr: [
                    {title: '工作', path: 'work'},
                    {title: '数据', path: 'data'},
                    {title: '提醒', path: 'remind'},
                    {title: '更多', path: 'more'}
                ]
            }
        },
        methods: {
            goPath(index){
                // console.log();
                this.$router.push(this.navArr[index].path);
            }
        }
    }
</script>

<style scoped lang="stylus">
    footer
        position fixed
        left 0
        bottom 0
        width 100%
        height 100px
        display flex
        border-top 2px solid yellow
    .main-nav
        flex 1
        text-align center
    .current
        color: yellow
</style>