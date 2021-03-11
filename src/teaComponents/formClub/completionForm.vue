<template>
    <div>
        <el-form
            :model="completionData"
            ref="completionData"
            label-width="24%"
            style="width:90%;"
            label-suffix=":"
        >
            <el-form-item prop="title" label="题目描述">
                <el-input
                    v-model="completionData.title"
                    size="mini"
                    :disabled="true"
                    type="textarea"
                    autosize
                    placeholder="题目描述,编辑时，系统自动生成"
                ></el-input>
            </el-form-item>
            <el-form-item
                v-for="(option, index) in completionData.options"
                :label="option.capType === 0 ? '题目文本' : '答案'"
                :key="index"
                :prop="'options.' + index + '.value'"
                size="mini"
                :rules="{
                    required: true,
                    message: `${
                        option.capType === 0 ? '请输入题目文本' : '请设置答案'
                    }`,
                    trigger: 'blur',
                }"
            >
                <el-input
                    v-model="option.value"
                    style="width:60%"
                    :placeholder="
                        option.capType === 0 ? '请输入题目文本' : '请设置答案'
                    "
                    @input="handleInput"
                ></el-input>
                <el-button
                    style="margin-left:5%"
                    icon="el-icon-minus"
                    circle
                    v-on:click.stop="handleDelOptions(index)"
                ></el-button>
            </el-form-item>
            <el-form-item
                label="选择归属"
                size="mini"
                :rules="[
                    {
                        required: true,
                        message: '请选择归属',
                        trigger: 'blur',
                    },
                ]"
                prop="belong"
            >
                <el-cascader
                    style="width:70%"
                    v-model="completionData.belong"
                    :options="syllabusData"
                    placeholder="请选择归属"
                ></el-cascader>
            </el-form-item>
            <el-form-item>
                <el-button
                    @click="handleAddFields(0)"
                    size="mini"
                    class="el-icon-plus el-icon--right"
                    >插入题目文本</el-button
                >
                <el-button
                    @click="handleAddFields(1)"
                    size="mini"
                    class="el-icon-plus el-icon--right"
                    >插入答题</el-button
                >
                <el-button @click="handleCancel" size="mini">取 消</el-button>
                <el-button type="primary" @click="handleSubmit" size="mini"
                    >确 定</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import { deepClone, throttle } from 'utils/util';

export default {
    name: 'CompletionForm',
    props: {
        formData: Object,
        handlecancelFun: Function,
    },
    data() {
        return {
            completionData: deepClone(this.formData),
        };
    },
    methods: {
        handleAddFields: function(key) {
            const { options } = this.completionData;
            let _options = [];
            if (Array.isArray(options)) {
                _options = options;
            }
            _options.push({
                capType: key,
                value: '',
            });

            this.completionData = {
                ...this.completionData,
                options: _options,
            };
        },

        handleDelOptions: function(i) {
            this.completionData.options.splice(i, 1);
        },
        handleCancel: function() {
            this.handlecancelFun();
        },
        handleSubmit: function() {
            const that = this;
            this.$refs['completionData'].validate(async valid => {
                if (valid) {
                    console.log('this.completionData', that.completionData);
                    // const data = deepClone(this.chooseDailogData);
                    // let res = await editChoices(data);
                    // if (res.status === 200) {
                    //     Message.success('保存成功');
                    //     this.visible = false;
                    //     this.getLists();
                    // }
                }
            });
        },
        handleInput: throttle(function() {
            this.transformTitle();
        }, 500),
        transformTitle: function() {
            console.log('transformTitle', this.completionData);
        },
    },
    computed: {
        syllabusData: function() {
            return this.$store.state.syllabusData;
        },
    },
};
</script>
<style lang="less" scoped></style>
