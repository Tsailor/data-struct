<template>
    <el-row class="searchpanel">
        <el-form
            :model="curSearchForm"
            ref="curSearchForm"
            label-width="100px"
            size="mini"
            label-suffix=":"
            class="searchpanel-form"
        >
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 12 }"
                :md="{ span: 8 }"
                v-for="(item, index) in searchForm"
                :key="index"
            >
                <el-form-item :label="item.label" :prop="item.value">
                    <el-input
                        v-if="item.type === 'input'"
                        placeholder="请输入"
                        v-model="curSearchForm[item.value]"
                        class="form-item"
                    ></el-input>
                    <el-select
                        v-if="item.type === 'select'"
                        :clearable="true"
                        placeholder="请选择"
                        v-model="curSearchForm[item.value]"
                        class="form-item"
                    >
                        <el-option
                            v-for="(ops, ins) in item.optionsLists"
                            :key="ins"
                            :label="ops.text"
                            :value="ops.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col
                :xs="{ span: 24 }"
                :sm="{ span: 12 }"
                :md="{ span: 8 }"
                :lg="{ span: 8 }"
                style="float:right"
            >
                <el-form-item>
                    <el-button @click="resetForm('curSearchForm')"
                        >重置</el-button
                    >
                    <el-button type="primary" @click="submitForm()"
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
        // resetFun: Function,
        submitFun: Function,
    },
    name: 'SearchPanel',
    computed: {},
    data() {
        return {
            curSearchForm: this.searchForm.reduce((init, item) => {
                init[item.value] = '';
                return init;
            }, {}),
        };
    },
    methods: {
        resetForm: function(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm: function() {
            this.submitFun({ ...this.curSearchForm });
        },
    },
    created() {},
};
</script>
<style lang="less" scoped>
.searchpanel {
    width: 100%;
    padding: 30px;
    padding-bottom: 0;
    box-sizing: border-box;
    .form-item {
        width: 100%;
    }
    @media only screen and (min-width: 1200px) {
        .searchpanel-form {
            width: 90%;
        }
    }
    @media only screen and (min-width: 1500px) {
        .searchpanel-form {
            width: 80%;
        }
    }
}
</style>
<style lang="less">
.searchpanel {
    .el-form-item__content {
        text-align: left;
    }
}
</style>
