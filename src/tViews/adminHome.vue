<template>
    <div>
        <div style="border-radius: 2px">
            <el-row>
                <el-col
                    :xs="{ span: 24 }"
                    :sm="{ span: 12, offset: 0 }"
                    :md="{ span: 12, offset: 0 }"
                    :lg="{ span: 11, offset: 1 }"
                    :xl="{ span: 11, offset: 1 }"
                >
                    <div class="page-top">
                        <div class="item">
                            <div class="item-label">我教的课程：</div>
                            <div>{{ indexData.curriculumName }}</div>
                        </div>
                        <div class="item">
                            <div class="item-label">我教的班级：</div>
                            <div class="item-con">
                                <el-button
                                    v-for="(list,
                                    index) in indexData.classLists"
                                    :key="index"
                                    class="index-btn"
                                    @click="
                                        () => hadldeClassManage(list.classId)
                                    "
                                    >{{ list.className }}
                                    <i
                                        style="margin-left:12px"
                                        @click.stop="
                                            () =>
                                                handleClassDelete(list.classId)
                                        "
                                        class="el-icon-delete el-icon--right"
                                    ></i
                                ></el-button>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item-addbody">
                                <el-popover
                                    placement="top"
                                    width="300"
                                    v-model="importClassVisible"
                                >
                                    <div>
                                        <h4 class="importClass-headline">
                                            导入班级：
                                        </h4>
                                    </div>

                                    <el-form
                                        ref="importClassForm"
                                        :model="importClassForm"
                                        label-width="50"
                                    >
                                        <el-form-item
                                            label="班级"
                                            :rules="{
                                                required: true,
                                                message: '班级不能为空',
                                                trigger: 'blur',
                                            }"
                                            prop="classId"
                                        >
                                            <el-select
                                                placeholder="请选择"
                                                v-model="
                                                    importClassForm.classId
                                                "
                                            >
                                                <el-option
                                                    v-for="item in allClassList"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.value"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>

                                        <el-form-item
                                            style="float:right; padding-right:25px"
                                            size="small"
                                        >
                                            <el-button
                                                @click="
                                                    importClassVisible = false
                                                "
                                                >取消</el-button
                                            >
                                            <el-button
                                                type="primary"
                                                @click="handleImportClass"
                                                >立即导入</el-button
                                            >
                                        </el-form-item>
                                    </el-form>

                                    <el-button
                                        slot="reference"
                                        class="item-addnew"
                                        @click="handleClassImport"
                                        >导入班级<i
                                            class="el-icon-plus el-icon--right"
                                        ></i
                                    ></el-button>
                                </el-popover>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col
                    :xs="{ span: 24 }"
                    :sm="{ span: 10, offset: 1 }"
                    :md="{ span: 10, offset: 1 }"
                    :lg="{ span: 8, offset: 2 }"
                    :xl="{ span: 8, offset: 2 }"
                    ><div class="page-top"></div
                ></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import TooltipButton from 'teaComponents/tooltipButton'
import { getIndexData, getAllClassLists, addClass } from 'server/teacher.js'
import { Message } from 'element-ui'
export default {
    name: 'AdminIndex',
    data: function() {
        return {
            importClassVisible: false,
            importClassForm: {
                classId: '',
            },
            indexData: {}, // 主页部分数据
            allClassList: [],
        }
    },
    methods: {
        // 点击删除
        handleClassDelete(classId) {
            console.log(1)
            // this.$router.push(`class/${classId}`)
        },
        // 点击 班级 进入 班级管理
        hadldeClassManage(classId) {
            this.$router.push(`class?classId=${classId}`)
        },
        // 点击 导入班级
        async handleClassImport() {
            const res = await getAllClassLists()
            if (res.status === 200) {
                console.log('all', res)
                let _allClassList = res.data.map(v => ({
                    label: v.className,
                    value: v.classId,
                }))
                this.allClassList = _allClassList
            }
        },
        // 点击确定导入
        handleImportClass() {
            this.$refs['importClassForm'].validate(async valid => {
                if (valid) {
                    const { classId } = this.importClassForm
                    let res = await addClass({ classId })
                    if (res.status === 200) {
                        Message.success('班级导入成功')
                        this.importClassVisible = false
                        this.getIndexPageDatas()
                    }
                }
            })
        },
        async getIndexPageDatas() {
            const { status, data } = await getIndexData()
            if (status === 200) {
                this.indexData = data
            }
        },
    },

    created() {
        this.getIndexPageDatas()
        // const p1 = getIndexData();
        // const p2 = getAllClassLists;
        // Promise.all([p1,p2]).then(([res1,res2])=>{
        //     if(res1.status === 200 && res2.status === 200){

        //     }
        // })
    },
    computed: {
        // importClassPlacement: function() {
        //     return document.documentElement.scrollWidth > 750 ? 'top' : 'bottom'
        // },
    },
    components: {
        TooltipButton,
    },
}
</script>
<style lang="less" scoped>
.page-top {
    padding: 10px;
    box-sizing: border-box;
    .index-btn {
        border-radius: 0;
        padding: 6px;
        margin-left: 0;
        margin: 6px 0;
    }
    .delete-icon {
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 0;
    }
    .item {
        display: flex;
        padding: 5px 0;
    }
    .item-label {
        width: 30%;
        text-align: center;
    }
    .item-con {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .item-addbody {
        margin-left: 30%;
    }
    .item-addnew {
        padding: 6px;
        border-radius: 0;
    }
}
</style>
<style lang="less">
.importClass-tips {
    font-size: 10px;
}
</style>
