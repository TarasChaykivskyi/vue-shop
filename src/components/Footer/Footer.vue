<template>
    <footer>
        <div class="footer container">
            <h3>Footer logo</h3>
            <div class="site-rights">
                <p>@Copyright 2020</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer {
        width: 100%;
        height: 50px;
        padding: 10px 0;
        border-top: 2px solid darkslateblue;
    }

    .footer {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>