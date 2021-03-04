<template>
    <el-dialog
        :visible="addQuvisible"
        center
        :width="width"
        title="新建题目"
        :close-on-click-modal="false"
        @close="cancelFun"
        >helo</el-dialog
    >
</template>
<script>
export default {
    props: {
        addQuvisible: Boolean,
        cancelFun: Function,
    },
    name: 'AddQuestionDialog',
    computed: {
        width: function() {
            return document.documentElement.clientWidth >= 768
                ? '600px'
                : '100%';
        },
    },
    methods: {},
    mounted() {},
};
</script>
