<template>
    <div class="floder">
        <i class="el-icon-s-claim floder-icon"></i>
    </div>
</template>
<script>
export default {
    name: 'Folder',
    methods: {},
    mounted() {},
};
</script>
<style lang="less">
.floder {
    position: fixed;
    bottom: 100px;
    left: 20px;
    width: 48px;
    height: 48px;
    line-height: 48px;
    border-radius: 50%;
    border: aliceblue 2px solid;
    background-color: #2196f3b5;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    cursor: pointer;
}
.floder:hover {
    background-color: #e91e63;
}
.floder-icon {
    font-size: 36px;
    vertical-align: middle;
    color: aliceblue;
}
</style>
