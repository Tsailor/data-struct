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
                            :label="'选项' + (index + 1)"
                            :key="option.key"
                            :prop="'options.' + index + '.value'"
                            :size="'medium'"
                            :rules="{
                                required: true,
                                message: `选项${index + 1}不能为空`,
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
                        <el-form-item>
                            <el-button type="info" plain>新增选项</el-button>
                        </el-form-item>
                    </el-form>

                    <div slot="footer" class="dialog-footer">
                        <el-button @click="visible = false">取 消</el-button>
                        <el-button type="primary" @click="visible = false"
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
</style>
<script>
import { Message } from 'element-ui'
import { MessageBox } from 'element-ui'
import { getChoiceQuestionLists, delChoiceQuestion } from '../server/examples'
import { deepClone } from '../utils/util'
export default {
    name: 'ChoiceQuestion',
    data() {
        return {
            DIRECTIONARY: 'ABCDEFGHIJKLMN',
            pageData: [],
            visible: false, // 模态框可见标识  点击编辑可见
            activeNames: ['0'], // 默认首个可见
            chooseDailogData: {}, // 选择题模态框数据
        }
    },
    computed: {
        chooseDatas: function() {
            return this.pageData.filter(v => v.type === 'choose')
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
            const ops = this.chooseDailogData.options.filter(
                v => v.key !== option.key
            )
            this.chooseDailogData = {
                ...this.chooseDailogData,
                options: ops,
            }
        },
    },
    created() {
        this.getLists()
    },
}
</script>
