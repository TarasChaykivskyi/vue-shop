<template>
    <nav>
        <ul class="nav">
            <router-link
                    v-for="(link, index) in navigationLinks"
                    :key="index"
                    :to="link.url"
                    tag="li"
            >
                <a>{{ link.text }}</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        computed: {
            navigationLinks() {
                return this.$store.getters.navigationLinks
            }
        }
    }
</script>

<style scoped>
    .nav {
        display: flex;
        list-style: none;
    }

    .nav li {
        margin-right: 20px;
    }

    .nav li:last-child {
        margin-right: 0;
    }

    .nav li a {
        text-decoration: none;
        font-size: 18px;
        color: darkolivegreen;
    }
</style>