<template>
  <div id="app">

    <router-view/>
    <Loading></Loading>
  </div>
</template>

<script>
  import Loading from "@/components/Loading"
  export default {
      name: "App",
      components: {Loading}
  }

</script>

<style>
#app {
/*
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  */
  width: 100%;
  height: 100%;
}

</style>
