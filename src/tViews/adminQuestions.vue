<template>
    <div>
        <SearchPanel
            :searchForm="selectParams"
            :submitFun="v => submitSearch(v)"
        />
    </div>
</template>
<script>
import SearchPanel from 'teaComponents/quClub/searchPanel.vue';
export default {
    name: 'AdminQuestions',
    data() {
        return {
            selectParams: [
                { label: '关键字', value: 'keywords', type: 'input' },
                { label: '归属章', value: 'captial', type: 'input' },
                { label: '归属节', value: 'selector', type: 'input' },
                { label: '题型', value: 'type', type: 'input' },
                { label: '状态', value: 'status', type: 'input' },
            ],
        };
    },
    methods: {
        submitSearch(params) {
            console.log('params', params);
        },
    },
    mounted() {},
    components: {
        SearchPanel,
    },
};
</script>
