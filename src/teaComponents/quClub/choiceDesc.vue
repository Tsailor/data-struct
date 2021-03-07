<template>
    <div class="choicedesc">
        <div>
            <span>{{ record.mutiplyChoose ? '【多选题】' : '【单选题】' }}</span
            ><span>{{ record.name }}</span>
        </div>
        <div class="options">
            <el-checkbox-group
                v-model="record.checkedOptions"
                :min="0"
                :max="record.mutiplyChoose ? record.options.length : 1"
            >
                <el-checkbox
                    v-for="op in record.options"
                    :label="DICTIONARY[op.key]"
                    :key="op.key"
                    >{{ DICTIONARY[op.key] }} {{ op.value }}
                </el-checkbox>
            </el-checkbox-group>
        </div>

        <div class="answerbox" v-if="showAns">
            正确答案：<span
                class="answerSpan"
                v-for="(ans, i) in record.answers"
                :key="i"
                >{{ DICTIONARY[ans] }}</span
            >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        record: Object,
        showAns: Boolean,
    },
    name: 'ChoiceDesc',
    data() {
        return {
            DICTIONARY: 'ABCDEFGHIJK',
        };
    },
    methods: {},
    mounted() {},
};
</script>
<style lang="less" scoped>
.choicedesc {
    font-size: 12px;
}
.options {
    margin: 8px 0;
    margin-left: 18px;
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
    margin: 0 4px;
    color: #04e015;
}
</style>
<style lang="less">
.choicedesc {
    .el-checkbox__label {
        font-size: 12px;
    }
}
</style>
