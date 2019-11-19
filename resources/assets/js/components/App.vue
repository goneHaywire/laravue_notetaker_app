<template>
    <div id="page">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import navbar from "./Navbar";

    export default {
        name: "App",
        components: {
            navbar
        }
    }
</script>

<style scoped>

</style>