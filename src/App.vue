<template>
    <div id="app">
        <router-view name="nav" class="nav"></router-view>
        <router-view class="body"> </router-view>

        <Footer></Footer>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import local from 'utils/local';
import { deepClone } from 'utils/util';
import Footer from './components/footer';
export default {
    name: 'App',
    components: {
        Footer,
    },

    created() {
        // const store = local.getSessionVal('store');
        // if (store) {
        //     this.$store.replaceState(
        //         Object.assign({}, this.$store.state, store)
        //     );
        // }
        // //在页面刷新时将vuex里的信息保存到sessionStorage里
        // window.addEventListener('beforeunload', () => {
        //     local.setSessionVal('store', deepClone(this.$store.state));
        // });
    },
};
</script>

<style>
html {
    height: 100%;
}
body {
    height: 100%;
    width: 100%;
    margin: 0;
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
.nav {
    position: fixed;
    width: 100%;
    z-index: 10;
}
.body {
    flex: 1;
    margin-top: 61px;
}
</style>
