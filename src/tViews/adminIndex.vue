<template>
    <div>
        <el-row>
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 20, offset: 2 }"
                :md="{ span: 4 }"
                :lg="{ span: 4 }"
                :xl="{ span: 3 }"
            >
                <TeaMenu />
                <!-- <router-view name="menu"></router-view> -->
            </el-col>
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 20 }"
                :lg="{ span: 20 }"
                :xl="{ span: 21 }"
            >
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import TeaMenu from 'components/teaMenu'
export default {
    name: 'AdminIndex',
    methods: {},
    mounted() {},
    components: {
        TeaMenu,
    },
}
</script>
<style lang="less"></style>
