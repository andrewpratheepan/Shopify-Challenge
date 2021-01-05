<template>
    <div>
        <button @click="handleCallback">set</button>
        <button @click="logout">no</button>
        <button @click="loginUser">login</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "Home",
        computed: {
            ...mapGetters(['hasToken']),
        },
        methods: {
            ...mapActions(['handleCallback','logout','login']),
            loginUser() {
                this.login().then(function (response, err) {
                    // handle success
                    console.log(response, err);
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>

</style>