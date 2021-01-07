<template>
    <div>
        <p>helllo,world</p>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
}
</script>
