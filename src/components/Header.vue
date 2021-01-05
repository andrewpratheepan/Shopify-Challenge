<template>
    <el-menu default-active="/" class="el-menu-demo" mode="horizontal" :router="true" style="align-content: stretch">
        <el-menu-item>{{log}}</el-menu-item>
        <el-menu-item index="/addImages">Add Images</el-menu-item>
        <el-menu-item index="/">Images</el-menu-item>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Header",
        props: ["logout"],
        computed: {
            ...mapGetters(['hasToken']),
            log() {
                return this.hasToken ? "Logout":"Login"
            }
        }
    }
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item{
    float: right;
    padding-right: 30px;
}
</style>