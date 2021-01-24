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
                                :max="item.single ? 1 : item.optons.length"
                                class="checkgroup"
                            >
                                <el-checkbox
                                    v-for="op in item.optons"
                                    :label="DIRECTIONARY[op.key]"
                                    :key="op.ke"
                                    >{{ DIRECTIONARY[op.key] }} {{ op.value }}
                                </el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </el-collapse-item>
                </el-collapse>

                <el-dialog
                    v-bind:title="
                        chooseDailogData.questionId
                            ? '编辑选择题'
                            : '新建选择题'
                    "
                    :visible.sync="visible"
                    :width="'60'"
                    :center="true"
                >
                    <el-form
                        :model="chooseDailogData"
                        ref="chooseDailogData"
                        label-width="100px"
                        class="demo-dynamic"
                        style="width:80%;"
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
                            v-for="(option, index) in chooseDailogData.optons"
                            :label="'选项' + (index + 1)"
                            :key="index"
                            :prop="'option' + index"
                            :size="'medium'"
                            :rules="{
                                required: true,
                                message: `选项${index}不能为空`,
                                trigger: 'blur',
                            }"
                        >
                            <el-input
                                v-model="option.value"
                                style="width:50%"
                            ></el-input
                            ><el-button
                                style="width:20%;margin-left:5%"
                                @click.prevent=""
                                >删除</el-button
                            >
                        </el-form-item>
                        <!-- <el-form-item>
                            <el-button type="primary">提交</el-button>
                            <el-button @click="addDomain">新增域名</el-button>
                            <el-button @click="resetForm('dynamicValidateForm')"
                                >重置</el-button
                            >
                        </el-form-item> -->
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
// import axios from 'axios'
// import { routes } from '../router/index'

export default {
    name: 'ChoiceQuestion',
    data() {
        return {
            DIRECTIONARY: 'ABCDEFGHIJKLMN',
            data: [
                {
                    // 题目数据
                    title: '下列国家中是发展中的国家是？',
                    questionId: 520,
                    type: 'choose',
                    single: true, // 单选
                    optons: [
                        { key: 0, value: '美国' },
                        { key: 1, value: '中国' },
                        { key: 2, value: '韩国' },
                        { key: 3, value: '英国' },
                    ],
                    answer: ['B'], // 多选时则 多个 如果是后端判题，这个可以不要，建议后端判题
                    checkedOptions: [],
                },
                {
                    // 题目数据
                    title: '下列不属于社会主义核心价值观的是？',
                    questionId: 521,
                    type: 'choose',
                    single: false,
                    optons: [
                        { key: 0, value: '谄媚' },
                        { key: 1, value: '民主' },
                        { key: 2, value: '自私' },
                        { key: 3, value: '和谐' },
                    ],

                    answer: [0, 2], // 多选时则 多个
                    checkedOptions: [], // 选中的内容
                },
            ],
            visible: false, // 模态框可见标识  点击编辑可见
            activeNames: ['0'], // 默认首个可见
            chooseDailogData: {}, // 选择题模态框数据
        }
    },
    computed: {
        chooseDatas: function() {
            return this.data.filter(v => v.type === 'choose')
        },
    },
    methods: {
        handleChooseEdit: function(item) {
            console.log(item)
            this.visible = true
            this.chooseDailogData = item // 选择题模态框数据
        },
        handleChooseDel: function(item) {},
    },
    created() {},
}
</script>
