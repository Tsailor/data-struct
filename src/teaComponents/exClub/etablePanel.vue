<template>
    <div class="classexamTable">
        <el-table
            :data="tableData"
            style="width: 100%;"
            size="mini"
            :highlight-current-row="true"
        >
            <el-table-column
                label="编号"
                prop="id"
                width="80%"
            ></el-table-column>
            <el-table-column
                label="标题"
                prop="name"
                width="240%"
            ></el-table-column>

            <el-table-column label="章" prop="capter"></el-table-column>
            <el-table-column label="节" prop="section"></el-table-column>

            <el-table-column label="来源" prop="creator"></el-table-column>
            <el-table-column
                label="时间"
                prop="createDate"
                width="125%"
            ></el-table-column>

            <el-table-column label="题量" prop="quesnumber" width="60%">
            </el-table-column>
            <el-table-column label="状态" prop="statusDesc"></el-table-column>
            <el-table-column label="操作" width="200%">
                <template slot-scope="scope">
                    <el-button type="text" size="mini">编辑</el-button>
                    <el-button type="text" size="mini">预览</el-button>
                    <el-button type="text" size="mini">发布</el-button>
                    <el-button type="text" size="mini">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'ETablePanel',
    props: {
        tableData: Array, // 表格数据
    },
    data() {
        return {};
    },

    methods: {},
    mounted() {
        // console.log(
        //     'console.log(this.$store.state.count)',
        //     this.$store.state.count
        // );
    },
};
</script>
<style lang="less">
.classexamTable {
    .el-table tr th {
        background-color: #eee9e9;
    }
}
</style>
