<template>
    <div class="layout">
        <el-menu router default-active="2" class="el-menu-vertical-demo">
            <el-menu-item index="/admin/index">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">个人中心</span>
            </el-menu-item>
            <!-- index:菜单项唯一标志，配合router属性使用 -->
            <el-menu-item index="/admin/adminhome">
                <i class="el-icon-notebook-2"></i>
                <span slot="title">课程信息</span>
            </el-menu-item>
            <el-menu-item index="/admin/statistics">
                <i class="el-icon-s-data"></i>
                <span slot="title">统计</span>
            </el-menu-item>
            <!-- <el-menu-item index="/admin/test">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">试卷发布</span>
            </el-menu-item> -->

            <el-submenu index="/admin/test" class="sub-menu">
                <template slot="title">
                    <i class="el-icon-edit-outline"></i>
                    <span slot="title">试卷发布</span>
                </template>
                <el-menu-item index="2-1">课前测发布</el-menu-item>
                <el-menu-item index="2-2">试卷发布</el-menu-item>
                <!-- <el-menu-item index="2-3">选项3</el-menu-item> -->
            </el-submenu>
            <el-menu-item index="/admin/tiku">
                <i class="el-icon-folder-opened"></i>
                <span slot="title">题库</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'TeaMenu',
    data() {
        return {}
    },
    methods: {},
    mounted() {},
    components: {},
}
</script>

<style scoped lang="less">
.layout {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.tac {
    flex-grow: 1;
}
.sub-menu {
    width: 100%;
}
</style>
