<template>
    <div>
        <SearchPanel :searchForm="selectParams" :submitFun="submitSearch" />
        <ButtonPanel :btnGroup="btnGroup" />
    </div>
</template>
<script>
import SearchPanel from 'teaComponents/quClub/searchPanel.vue';
import ButtonPanel from 'teaComponents/quClub/buttonPanel.vue';
const quLists = [
    { text: '选择题', value: 0 },
    { text: '填空题', value: 1 },
    { text: '判断题', value: 2 },
    { text: '简答题', value: 3 },
];
export default {
    name: 'AdminClassexam',
    data() {
        return {
            chapterLists: [
                { text: '线性表', value: 0 },
                { text: '栈和队列', value: 1 },
                { text: '树', value: 2 },
            ],
            sectionLists: [],
            btnGroup: [
                {
                    type: '',
                    label: '新建课前测',
                    fun: this.handleAddClass,
                },
                {
                    type: '',
                    label: '从文件夹生成',
                    fun: this.handleAddClass,
                },
            ],
        };
    },
    computed: {
        selectParams: function() {
            return [
                { label: '关键字', value: 'keywords', type: 'input' },
                {
                    label: '归属章',
                    value: 'chapter',
                    type: 'select',
                    optionsLists: this.chapterLists,
                },
                {
                    label: '归属节',
                    value: 'section',
                    type: 'select',
                    optionsLists: this.sectionLists,
                },
                // {
                //     label: '题型',
                //     value: 'type',
                //     type: 'select',
                //     optionsLists: quLists,
                // },
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
    },
};
</script>
