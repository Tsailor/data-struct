<template>
    <div>
        班级
    </div>
</template>
<script>
export default {
    name: 'AdminClass',
    props: ['id'],
    methods: {},
    mounted() {},
    created: function() {
        console.log('id', this.$route.query.classId)
    },
}
</script>
