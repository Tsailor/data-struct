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
                    <ChoiceDesc
                        v-if="props.row.typeId === 1"
                        :record="props.row"
                    />

                    <CompletionDesc
                        v-else-if="props.row.typeId === 2"
                        :record="props.row"
                    />
                    <JudgmentDesc
                        v-else-if="props.row.typeId === 3"
                        :record="props.row"
                    />
                    <ShortanswerDesc
                        v-else-if="props.row.typeId === 4"
                        :record="props.row"
                    />

                    <span v-else>{{ props.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="编号"
                prop="id"
                width="80%"
            ></el-table-column>
            <el-table-column
                label="题目"
                prop="name"
                width="360%"
            ></el-table-column>
            <el-table-column label="章" prop="capter"></el-table-column>
            <el-table-column label="节" prop="section"></el-table-column>
            <el-table-column label="题型" prop="type"></el-table-column>
            <el-table-column label="来源" prop="creator"></el-table-column>
            <el-table-column
                label="时间"
                prop="createDate"
                width="125%"
            ></el-table-column>
            <el-table-column label="状态" prop="statusDesc"></el-table-column>
            <el-table-column label="操作" width="200%">
                <template slot-scope="scope">
                    <el-button type="text" size="mini">收纳</el-button>
                    <el-button type="text" size="mini">编辑</el-button>
                    <el-button type="text" size="mini">发布</el-button>
                    <el-button type="text" size="mini">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<style lang="less">
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
import ChoiceDesc from 'teaComponents/quClub/choiceDesc';
import JudgmentDesc from 'teaComponents/quClub/judgmentDesc';
import CompletionDesc from 'teaComponents/quClub/completionDesc';
import ShortanswerDesc from 'teaComponents/quClub/shortanswerDesc';
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
                    name: '下列属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    type: '选择题',
                    mutiplyChoose: false,
                    options: [
                        { key: 0, value: '团结' },
                        { key: 1, value: '和谐' },
                        { key: 2, value: '文明' },
                        { key: 3, value: '奉献' },
                    ],
                    checkedOptions: [],
                    answers: [0],
                    typeId: 1,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87122',
                    name: '下列不属于社会主义核心价值观的是？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    type: '选择题',
                    mutiplyChoose: true,
                    options: [
                        { key: 0, value: '团结' },
                        { key: 1, value: '嘲讽' },
                        { key: 2, value: '谩骂' },
                        { key: 3, value: '团结' },
                    ],
                    answers: [1, 2],
                    checkedOptions: [],
                    typeId: 1,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87123',
                    name: '团结友爱不属于社会主义核心价值观的内容？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '未发布',
                    options: [
                        { key: 0, value: '正确' },
                        { key: 1, value: '错误' },
                    ],
                    type: '判断题',
                    checkedOptions: [],
                    answers: { key: 0, value: '正确' },
                    typeId: 3,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87125',
                    name: '社会主义核心价值观：_____、_____、_____？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    options: [
                        { capType: 0, value: '社会主义核心价值观：' },
                        { capType: 1, value: '' },
                        { capType: 1, value: '' },
                        { capType: 1, value: '' },
                    ],
                    answers: ['团结', '友爱', '奉献'],
                    type: '填空题',
                    typeId: 2,
                    creator: '周明明',
                    createDate: '2020-12-23',
                },
                {
                    id: '87126',
                    name: '写出社会主义核心价值观的内容？',
                    capterId: 3,
                    capter: '线性表',
                    section: '第1节 结构',
                    status: 0,
                    statusDesc: '已发布',
                    sectionId: 2,
                    answers: '爱国、富强、团结、友爱、互助',
                    type: '简答题',
                    typeId: 4,
                    creator: '吴菲菲',
                    createDate: '2020-12-23',
                },
            ],
        };
    },
    components: {
        ChoiceDesc,
        JudgmentDesc,
        CompletionDesc,
        ShortanswerDesc,
    },
};
</script>
