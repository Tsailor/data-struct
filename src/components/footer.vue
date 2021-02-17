<template>
    <div id="foot">
        <p>
            <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44080202000058"
            ></a>
            版权所有©岭南师范学院 |
            <a href="http://www.beian.miit.gov.cn" style="color:red;"
                >粤ICP备15053357号</a
            >
            | 粤公网安备 44080202000058
        </p>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {}
    },
    methods: {},
    mounted() {},
    components: {},
    computed: {},
}
</script>

<style scoped lang="less">
#foot {
    box-sizing: border-box;
    width: 100%;
    min-height: 70px;
    background: #d3dce6;
    opacity: 1;
    font-size: 15px;
    line-height: 1.42857143;
    color: #333;
    p {
        text-align: center;
        line-height: 70px;
        color: black;
        margin: 0;
        a {
            color: #4c4c4c;
            text-decoration: none !important;
            img {
                vertical-align: middle;
                margin-top: -3px;
            }
        }
        a:hover {
            transition: color 0.25s ease-in;
        }
    }
}
</style>
