<template>
    <div id="app">
        <router-view name="nav"></router-view>
        <router-view class="body"> </router-view>

        <Footer></Footer>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer'
export default {
    name: 'App',
    components: {
        Footer,
    },
}
</script>

<style>
html {
    height: 100%;
}
body {
    height: 100%;
    width: 90%;
    margin: 0 auto;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    height: 100%;
    flex-direction: column;
}
.body {
    flex: 1;
}
</style>
