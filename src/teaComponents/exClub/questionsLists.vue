<template>
    <div>
        <el-collapse accordion>
            <el-collapse-item
                v-for="(record, index) in recordArray"
                :key="index"
            >
                <template slot="title">
                    <div class="list-item-box">
                        <div class="list-item">
                            {{ `【${record.type}】` }}{{ record.name }}
                        </div>
                        <i class="el-icon-delete"></i>
                    </div>
                </template>
                <ChoiceDesc
                    v-if="record.typeId === 1"
                    :record="record"
                    :showAns="showAns"
                />

                <CompletionDesc
                    v-else-if="record.typeId === 2"
                    :record="record"
                    :showAns="showAns"
                />
                <JudgmentDesc
                    v-else-if="record.typeId === 3"
                    :record="record"
                    :showAns="showAns"
                />
                <ShortanswerDesc
                    v-else-if="record.typeId === 4"
                    :record="record"
                    :showAns="showAns"
                />

                <span v-else>未知错误，请联系老师！</span>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import ChoiceDesc from 'teaComponents/quClub/choiceDesc';
import JudgmentDesc from 'teaComponents/quClub/judgmentDesc';
import CompletionDesc from 'teaComponents/quClub/completionDesc';
import ShortanswerDesc from 'teaComponents/quClub/shortanswerDesc';
export default {
    name: 'QuestionsLists',
    props: {
        recordArray: Array,
        showAns: Boolean,
    },
    data() {
        return {};
    },
    components: {
        ChoiceDesc,
        JudgmentDesc,
        CompletionDesc,
        ShortanswerDesc,
    },
};
</script>
<style lang="less" scoped>
.list-item-box {
    height: 100%;
    width: 100%;
    display: flex;
}
.list-item {
    width: 90%;
    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
