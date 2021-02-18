<template>
    <div>
        <el-row>
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 20, offset: 2 }"
                :md="{ span: 4, offset: 2 }"
                :lg="{ span: 4, offset: 2 }"
                :xl="{ span: 3, offset: 2 }"
            >
                <TeaMenu />
                <!-- <router-view name="menu"></router-view> -->
            </el-col>
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 24 }"
                :md="{ span: 18 }"
                :lg="{ span: 18 }"
                :xl="{ span: 17 }"
            >
                <router-view style="background:red"></router-view>
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
