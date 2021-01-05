<template >
    <div v-loading.fullscreen.lock="true">

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "AuthCallback",
        methods: {
            ...mapActions(['handleCallback'])
        },
        mounted() {
            this.handleCallback(window.location.hash)
        }
    }
</script>

<style scoped>

</style>