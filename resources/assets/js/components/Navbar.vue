<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">

            <router-link class="navbar-brand" to="/">Larticles</router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav navbar-right">
                    <li class="nav-item" :class="{active: $route.path === '/'}">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item" :class="{active: $route.path === '/create'}">
                        <router-link class="nav-link" to="/create">Create</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>