<template>
    <header>
        <div class="container header">
            {{ title }}
            <Nav />
        </div>
    </header>
</template>

<script>
    import Nav from "./Nav/Nav";

    export default {
        name: "Header",
        computed: {
          title() {
              return this.$store.getters.title
          }
        },
        components: {
            Nav
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        height: 100px;
        border-bottom: 2px solid darkslateblue;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }

    .header {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>