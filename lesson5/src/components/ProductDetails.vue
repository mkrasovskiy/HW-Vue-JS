<template>
    <div class="wrp">
        <div class="article" v-for="product in products" :key="product.id">
            <p class="name">Название: {{ product.name }}</p>
            <p class="price">Цена: {{ '$' + product.price }}</p>
            <p class="available" v-if="product.available > 0">В наличии: {{ product.available }}шт.</p>
            <p v-else>Out of stock</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'Утюг',
                    price: 50,
                    available: 0
                },
                {
                    id: 2,
                    name: 'Телевизор',
                    price: 100,
                    available: 3
                },
                {
                    id: 3,
                    name: 'Пылесос',
                    price: 150,
                    available: 5
                }
            ],
            dollar: '',
        };
    },
    
    computed: {
        formattedPrice() {
            return '$' + this.product.price;
        }
        
    },
};
</script>

<style lang="scss" scoped>

    .wrp {
        display: flex;
        gap: 32px;
        justify-content: center;
    }
    .article {
        width: 250px;
        height: 150px;
        border: 1px solid blue;
        border-radius: 10px;
    }
</style>