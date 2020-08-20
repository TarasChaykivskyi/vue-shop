<template>
    <div class="products-list">
        <h2>Product List</h2>
        <div class="container-products-item">
            <div class="product-item" v-for="item of products" :key="item.id">
                <h4 class="title-product">{{ item.title }}</h4>
                <p class="price-product">Price: {{ item.price }}$</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Product-list",
        computed: {
            ...mapGetters(['products'])
        }
    }
</script>

<style scoped>

    .container-products-item {
        display: flex;
        flex-wrap: wrap;
    }

    .product-item {
        width: 31%;
        margin: 10px 1%;
        border: 1px solid darkolivegreen;
        min-height: 200px;
        text-align: center;
        padding: 20px 0;
    }

    .title-product {
        font-size: 35px;
    }

    .price-product {
        padding: 10px 0;
        font-size: 20px;
    }

    .add-to-cart {
        background: darkolivegreen;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        padding: 10px;
        color: #ffffff;
        cursor: pointer;
        margin-top: 20px;
    }

    .add-to-cart:hover {
        background: darkslategray;
    }

</style>