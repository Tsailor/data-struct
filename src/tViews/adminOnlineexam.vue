<template>
    <div>
        <SearchPanel :searchForm="selectParams" :submitFun="submitSearch" />
        <ButtonPanel :btnGroup="btnGroup" />
        <OnLineTablePanel :tableData="tableData" />
        <Pagination />
    </div>
</template>
<script>
// 课前测
import SearchPanel from 'teaComponents/quClub/searchPanel.vue';
import ButtonPanel from 'teaComponents/quClub/buttonPanel.vue';
import OnLineTablePanel from 'teaComponents/exClub/onLineTablePanel.vue';
import Pagination from 'teaComponents/quClub/pagination.vue';
// OnLineTablePanel
export default {
    name: 'AdminOnlineexam',
    data() {
        return {
            belonglists: [
                { text: '期中考试', value: 0 },
                { text: '第一章', value: 1 },
                { text: '第二章', value: 2 },
                { text: '第三章', value: 3 },
            ],

            btnGroup: [
                {
                    type: '',
                    label: '新建试卷',
                    fun: this.handleAddClass,
                },
                {
                    type: '',
                    label: '从收藏夹生成',
                    fun: this.handleAddClass,
                },
            ],
            tableData: [
                {
                    id: '87122',
                    name: '期中考试',
                    belongId: 3,
                    belong: '期中考试',
                    startTime: '2021-03-05 21:00',
                    status: 0,
                    endTime: '2021-03-05 23:00',
                    statusDesc: '已发布',
                    quesnumber: 5,

                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87122',
                    name: '第一章测验',
                    belongId: 1,
                    belong: '第一章',
                    startTime: '2021-03-05 21:00',
                    status: 0,
                    quesnumber: 5,
                    statusDesc: '已发布',
                    endTime: '2021-03-05 23:00',
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87123',
                    name: '期中考试第一次课前测',
                    belongId: 3,
                    belong: '期中考试',
                    startTime: '2021-03-05 21:00',
                    endTime: '2021-03-05 23:00',
                    status: 0,
                    statusDesc: '未发布',
                    quesnumber: 5,
                    creator: '王军',
                    createDate: '2020-12-23',
                },
                {
                    id: '87125',
                    name: '期中考试前第一次测验',
                    belongId: 3,
                    belong: '第二章',

                    startTime: '2021-03-05 21:00',
                    quesnumber: 3,
                    status: 0,
                    statusDesc: '已发布',
                    endTime: '2021-03-05 23:00',
                    creator: '周明明',
                    createDate: '2020-12-23',
                },
                {
                    id: '87126',
                    name: '第三章 测验',
                    belongId: 3,
                    belong: '期中考试',

                    startTime: '2021-03-05 21:00',
                    status: 0,
                    statusDesc: '已发布',
                    endTime: '2021-03-05 23:00',

                    quesnumber: 2,
                    creator: '吴菲菲',
                    createDate: '2020-12-23',
                },
            ], // 表格数据
        };
    },
    computed: {
        selectParams: function() {
            return [
                { label: '关键字', value: 'keywords', type: 'input' },
                {
                    label: '归属',
                    value: 'belongId',
                    type: 'select',
                    optionsLists: this.belonglists,
                },

                {
                    label: '状态',
                    value: 'status',
                    type: 'select',
                    optionsLists: [
                        { text: '已发布', value: 0 },
                        { text: '未发布', value: 1 },
                    ],
                },
            ];
        },
    },
    methods: {
        submitSearch(params) {
            console.log('params', params);
        },
        handleAddClass() {
            alert('add click');
        },
    },
    mounted() {
        // console.log(
        //     'console.log(this.$store.state.count)',
        //     this.$store.state.count
        // );
    },
    components: {
        SearchPanel,
        ButtonPanel,
        OnLineTablePanel,
        Pagination,
    },
};
</script>
<style lang="less">
.classexamPanel {
    .el-table tr th {
        background-color: #eee9e9;
    }
}
</style>
