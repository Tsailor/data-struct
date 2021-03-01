<template>
    <div class="dtablePanel">
        <el-table
            :data="tableColumns"
            style="width: 100%;"
            size="mini"
            :highlight-current-row="true"
        >
            <el-table-column type="expand">
                <template slot-scope="props">
                    <span>{{ props.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="编号" prop="id" width="80%">
            </el-table-column>
            <el-table-column label="题目" prop="name" width="360%">
            </el-table-column>
            <el-table-column
                label="章"
                prop="capter"
                class-name="datableColumn"
            >
            </el-table-column>
            <el-table-column
                label="节"
                prop="section"
                class-name="datableColumn"
            >
            </el-table-column>
            <el-table-column
                label="题型"
                prop="type"
                class-name="datableColumn"
            >
            </el-table-column>
            <el-table-column
                label="来源"
                prop="creator"
                class-name="datableColumn"
            >
            </el-table-column>
            <el-table-column
                label="时间"
                prop="createDate"
                class-name="datableColumn"
                width="125%"
            >
            </el-table-column>
            <el-table-column
                label="状态"
                prop="statusDesc"
                class-name="datableColumn"
            >
            </el-table-column>
            <el-table-column
                label="操作"
                class-name="datableColumn"
                width="200%"
            >
                <template slot-scope="scope">
                    <el-button type="text" size="mini">
                        收纳
                    </el-button>
                    <el-button type="text" size="mini">
                        编辑
                    </el-button>
                    <el-button type="text" size="mini">
                        发布
                    </el-button>
                    <el-button type="text" size="mini">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style lang="less">
.datableColumn {
}
.datableColumn-mini {
}
.datableColumn-title {
}
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
.dtablePanel {
    .el-table tr th {
        background-color: #eee9e9;
    }
}
</style>

<script>
export default {
    name: 'DTablePanel',
    computed: {
        tableColumns: function() {
            return this.tableData.filter(v => ({
                id: v.id,
                name: v.name,
                capter: v.capter,
                section: v.section,
                statusDesc: v.statusDesc,
                type: v.type,
                creator: v.creator,
                createDate: v.createDate,
            }));
        },
    },
    data() {
        return {
            tableData: [
                {
                    id: '87122',
                    name: '下列不属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    type: '选择题',
                    typeId: 1,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87123',
                    name: '下列不属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '未发布',
                    status: 0,
                    type: '选择题',
                    typeId: 1,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87125',
                    name: '下列不属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    status: 0,
                    type: '选择题',
                    typeId: 1,
                    creator: '周明明',
                    createDate: '2020-12-23',
                },
                {
                    id: '87126',
                    name: '下列不属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    sectionId: 2,
                    status: 0,
                    type: '选择题',
                    typeId: 1,
                    creator: '吴菲菲',
                    createDate: '2020-12-23',
                },
            ],
        };
    },
};
</script>
