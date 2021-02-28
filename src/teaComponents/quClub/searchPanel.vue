<template>
    <el-row class="searchpanel" :gutter="30">
        <el-form
            :model="curSearchForm"
            ref="curSearchForm"
            label-width="80px"
            class="demo-ruleForm"
            size="mini"
            label-suffix=":"
        >
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 12 }"
                :md="{ span: 8 }"
                v-for="(item, index) in searchForm"
                :key="index"
            >
                <el-form-item
                    :label="item.label"
                    :prop="curSearchForm[item.value]"
                >
                    <el-select
                        placeholder="请选择活动区域"
                        v-model="curSearchForm[item.value]"
                    >
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :md="{ span: 8 }">
                <el-form-item>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                    <el-button type="primary" @click="submitForm('ruleForm')"
                        >查询</el-button
                    >
                </el-form-item>
            </el-col>
        </el-form>
    </el-row>
</template>
<script>
export default {
    props: {
        searchForm: Array,
        resetFun: Function,
        submitFun: Function,
    },
    name: 'SearchPanel',
    computed: {
        // curSearchForm: () => [...this.searchForm],
        // curSearchForm: {
        //     get: function() {
        //         const da = this.searchForm.reduce((init, item) => {
        //             init[item.value] = '';
        //             return init;
        //         }, {});
        //         return da;
        //     },
        //     set: function(value) {
        //         console.log('value', value);
        //     },
        // },
    },
    data() {
        return {
            curSearchForm: this.searchForm.reduce((init, item) => {
                init[item.value] = '';
                return init;
            }, {}),
        };
    },
    methods: {
        resetForm: function() {},
        submitForm: function() {},
    },
    created() {
        console.log('searchForm', this.searchForm);
        console.log('curSearchForm', this.curSearchForm);
        this.submitFun(this.curSearchForm);
    },
};
</script>
<style lang="less" scoped>
.searchpanel {
    padding: 30px;
    box-sizing: border-box;
}
</style>
