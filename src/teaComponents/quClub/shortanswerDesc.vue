<template>
    <div class="shortanswerDesc">
        <div>
            <span>{{ '【简答题】' }}</span
            ><span>{{ record.name }}</span>
        </div>
        <div class="answerbox">
            参考答案：<span class="answerSpan">{{ record.answers }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        record: Object,
    },
    name: 'ShortanswerDesc',
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>
<style lang="less" scoped>
.shortanswerDesc {
    font-size: 12px;
}

.answerbox {
    padding: 10px 20px 0 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-align: left;
    box-sizing: border-box;
}
.answerSpan {
}
</style>
<style lang="less">
.shortanswerDesc {
    .el-checkbox__label {
        font-size: 12px;
    }
}
</style>
