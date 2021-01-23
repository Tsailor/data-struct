<template>
    <div>
        <h3>Search</h3>
        <el-input
            v-model="input"
            placeholder="请输入内容"
            v-on:input="searchLists"
        ></el-input>

        <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
        >
            <el-select v-model="select" slot="append" placeholder="请选择">
                <el-option label="简单" value="1"></el-option>
                <el-option label="一般" value="2"></el-option>
                <el-option label="困难" value="3"></el-option>
            </el-select>
            <el-button slot="prepend" icon="el-icon-search"></el-button>
        </el-input>
    </div>
</template>
<style lang="stylus"></style>
<script>
import { getQuestions } from '../server/examples'
export default {
    name: 'Search',
    data() {
        return {
            input: '',
        }
    },
    methods: {
        async searchLists(e) {
            console.log(e)
            // const res = await getQuestions()
        },
    },
}
</script>
