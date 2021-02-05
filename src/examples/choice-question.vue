<template>
    <div>
        <h2>选择题</h2>

        <el-row>
            <el-col
                :xs="{ span: 22, offset: 1 }"
                :sm="{ span: 20, offset: 2 }"
                :md="{ span: 18, offset: 3 }"
                :lg="{ span: 18, offset: 3 }"
                :xl="{ span: 16, offset: 4 }"
            >
                <el-collapse v-model="activeNames">
                    <el-collapse-item
                        v-for="(item, index) in chooseDatas"
                        v-bind:name="index"
                        v-bind:key="index"
                    >
                        <template slot="title">
                            <div>
                                【{{ item.single ? '单选题' : '多选题' }}】
                            </div>
                            <div class="titlebox">{{ item.title }}</div>
                            <div class="operateBox">
                                <i
                                    class="el-icon-edit"
                                    v-on:click.stop="handleChooseEdit(item)"
                                ></i>
                                <i
                                    class="el-icon-delete"
                                    v-on:click.stop="handleChooseDel(item)"
                                ></i>
                            </div>
                        </template>
                        <div>
                            <el-checkbox-group
                                v-model="item.checkedOptions"
                                :min="0"
                                :max="item.single ? 1 : item.options.length"
                                class="checkgroup"
                            >
                                <el-checkbox
                                    v-for="op in item.options"
                                    :label="DIRECTIONARY[op.key]"
                                    :key="op.ke"
                                    >{{ DIRECTIONARY[op.key] }} {{ op.value }}
                                </el-checkbox>
                            </el-checkbox-group>
                            <div class="answerbox">
                                正确答案：<span
                                    class="answerSpan"
                                    v-for="(ans, i) in item.answer"
                                    :key="i"
                                    >{{ DIRECTIONARY[ans] }}</span
                                >
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>

                <el-dialog
                    v-bind:title="'编辑选择题'"
                    :visible.sync="visible"
                    :width="'600px'"
                    :center="true"
                >
                    <el-form
                        :model="chooseDailogData"
                        ref="chooseDailogData"
                        label-width="20%"
                        class="demo-dynamic"
                        style="width:90%;"
                    >
                        <el-form-item
                            prop="title"
                            label="题目"
                            :rules="[
                                {
                                    required: true,
                                    message: '请输入题目',
                                    trigger: 'blur',
                                },
                            ]"
                        >
                            <el-input
                                v-model="chooseDailogData.title"
                            ></el-input>
                        </el-form-item>
                        <el-form-item
                            v-for="(option, index) in chooseDailogData.options"
                            :label="'选项' + DIRECTIONARY[option.key]"
                            :key="option.key"
                            :prop="'options.' + index + '.value'"
                            :size="'medium'"
                            :rules="{
                                required: true,
                                message: `选项${
                                    DIRECTIONARY[option.key]
                                }不能为空`,
                                trigger: 'blur',
                            }"
                        >
                            <el-input
                                v-model="option.value"
                                style="width:60%"
                            ></el-input>
                            <el-button
                                style="margin-left:5%"
                                icon="el-icon-minus"
                                circle
                                v-on:click.stop="handleDelOptions(option)"
                            ></el-button>
                        </el-form-item>
                        <el-form-item label="单选题">
                            <el-switch
                                :active-text="
                                    chooseDailogData.single
                                        ? 'tips:本题为单选题'
                                        : 'tips:本题为多选题'
                                "
                                v-model="chooseDailogData.single"
                                @change="handleChoiceTypeChange"
                            ></el-switch>
                        </el-form-item>
                        <el-form-item
                            label="设置答案"
                            :size="'medium'"
                            :rules="answerRule"
                            prop="answer"
                        >
                            <el-select
                                v-if="chooseDailogData.single === true"
                                v-model="chooseDailogData.answer[0]"
                                placeholder="请选择"
                                @change="handleSingleChooseChange"
                            >
                                <el-option
                                    v-for="item in chooseDailogData.options"
                                    :key="item.key"
                                    :label="DIRECTIONARY[item.key]"
                                    :value="item.key"
                                >
                                </el-option>
                            </el-select>
                            <el-select
                                v-else
                                v-model="chooseDailogData.answer"
                                placeholder="请选择"
                                multiple
                            >
                                <el-option
                                    v-for="item in chooseDailogData.options"
                                    :key="item.key"
                                    :label="DIRECTIONARY[item.key]"
                                    :value="item.key"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>

                    <div slot="footer" class="dialog-footer">
                        <el-button @click="handleAddOption">新增选项</el-button>
                        <el-button @click="handleCancel">取 消</el-button>
                        <el-button type="primary" @click="handleSubmit"
                            >确 定</el-button
                        >
                    </div>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<style>
.checkgroup {
    display: flex;
}
.titlebox {
    width: 75%;
    text-align: left;
}
.operateBox {
    font-size: 18px;
    width: 10%;
    display: flex;
    justify-content: space-evenly;
}
.el-collapse-item__content {
    padding-bottom: 10px;
}
.answerbox {
    padding: 10px 20px 0 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    box-sizing: border-box;
}
.answerSpan {
    margin: 0 4px;
    color: #04e015;
}
</style>
<script>
import { Message } from 'element-ui'
import { MessageBox } from 'element-ui'
import {
    getChoiceQuestionLists,
    delChoiceQuestion,
    editChoices,
} from '../server/examples'
import { deepClone } from '../utils/util'

export default {
    name: 'ChoiceQuestion',
    data() {
        // 自定义答案的校验暂未实现。
        var validateAnswer = (rule, value, callback) => {
            console.log('value', value)
            // if (value.length === 0) {
            callback(new Error('请设置答案'))
            // } else {
            //   if (this.ruleForm.checkPass !== '') {
            //     this.$refs.ruleForm.validateField('checkPass');
            //   }
            //  callback()
            // }
        }
        return {
            DIRECTIONARY: 'ABCDEFGHIJKLMN',
            pageData: [],
            visible: false, // 模态框可见标识  点击编辑可见
            activeNames: ['0'], // 默认首个可见
            chooseDailogData: {}, // 选择题模态框数据

            isEdit: false, // 点击编辑的时候，里面的表单是否发生改动
            answerRule: [
                { required: true, validator: validateAnswer, trigger: 'blur' },
            ],

            // validateAnswer: (rule, value, callback) => {
            //     console.log(value)
            //     // if (value.length === 0) {
            //     //   callback(new Error('请设置答案'));
            //     // } else {
            //     //   if (this.ruleForm.checkPass !== '') {
            //     //     this.$refs.ruleForm.validateField('checkPass');
            //     //   }
            //     //   callback();
            //     // }
            // },
        }
    },
    computed: {
        // 选择题的数据
        chooseDatas: function() {
            return this.pageData.filter(v => v.type === 'choose')
        },
    },
    watch: {
        chooseDailogData: {
            handler(newData, oldData) {
                // 首次监听 oldValue 值异常 剔除。
                if (!oldData.options) {
                    return
                }
                this.isEdit = true
                // 选择题的选项数目发生变化的时候
                if (newData.options.length !== oldData.options.length) {
                    // options 里面是否有 k
                    const InOPtions = k => {
                        return newData.options.some(v => v.key === k)
                    }
                    // 答案的选项必须都在 题目的选项 里面
                    const ans = newData.answer.filter(v => InOPtions(v))
                    this.chooseDailogData.answer = ans
                }
            },
            immediate: false,
            deep: true,
        },
        pageData: function(v) {
            console.log('pageData', v)
        },
    },
    methods: {
        getLists: async function(params) {
            const res = await getChoiceQuestionLists(params)
            console.log('getChoiceQuestionLists', res)
            if (res.status === 200) {
                this.pageData = res.data.data
            }
        },
        // 编辑题目
        handleChooseEdit: function(item) {
            // console.log(item)
            this.visible = true
            this.chooseDailogData = deepClone(item) // 选择题模态框数据
            this.isEdit = false
        },
        // 删除题目
        handleChooseDel: function(item) {
            const that = this
            MessageBox({
                title: '提示',
                message: '此操作将永久删除该题目, 是否继续?',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                callback: async function(action) {
                    if (action === 'confirm') {
                        const { questionId } = item
                        const res = await delChoiceQuestion({ questionId })
                        if (res.status === 200) {
                            Message.success('操作成功')
                            that.getLists()
                        }
                    }
                },
            })
        },
        // 删除一个选项
        handleDelOptions: function(option) {
            let ops = this.chooseDailogData.options.filter(
                v => v.key !== option.key
            )
            // 重置 选项的key
            ops = ops.map((v, i) => {
                return { key: i, value: v.value }
            })
            this.chooseDailogData = {
                ...this.chooseDailogData,
                options: ops,
            }
        },
        // 增加一个选项
        handleAddOption: function() {
            let length = this.chooseDailogData.options.length
            this.chooseDailogData.options.push({ key: length, value: '' })
        },
        // 切换答案选择类型（单选/多选）的时候
        handleChoiceTypeChange: function() {
            this.chooseDailogData.answer = []
        },
        // 单选时，答案改变时，手动设置answer
        handleSingleChooseChange: function(v) {
            this.chooseDailogData.answer = [v]
        },
        // 点击编辑后，点击取消
        handleCancel: function() {
            const that = this
            if (this.isEdit) {
                MessageBox({
                    title: '提示',
                    message: '此次编辑尚未保存，确认离开?',
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    callback: async function(action) {
                        if (action === 'confirm') {
                            that.visible = false
                        }
                    },
                })
            } else {
                that.visible = false
            }
        },
        // 点击确定，保存
        handleSubmit: async function() {
            const data = deepClone(this.chooseDailogData)
            let res = await editChoices(data)
            if (res.status === 200) {
                Message.success('保存成功')
                this.visible = false
                this.getLists()
            }
        },
        // 自定义答案区域的校验规则
        // validatePass: (rule, value, callback) => {
        //     console.log(value)
        //     // if (value.length === 0) {
        //     //   callback(new Error('请设置答案'));
        //     // } else {
        //     //   if (this.ruleForm.checkPass !== '') {
        //     //     this.$refs.ruleForm.validateField('checkPass');
        //     //   }
        //     //   callback();
        //     // }
        // },
    },
    created() {
        this.getLists()
    },
}
</script>
