<template>
    <tr class="tw-divide-x-2 tw-divide-gray-500 tw-divide-opacity-20">
        <td>
            <div class="tw-w-full tw-h-52 tw-flex">
                <div class="tw-h-full tw-w-1/2">
                    <img class="tw-object-contain tw-h-full tw-content-center tw-justify-center tw-flex-col" :src="item.imageUrl" alt="">
                </div>
                <div class="tw-h-full tw-w-1/2 tw-flex tw-justify-center tw-flex-col">
                    {{ item.name }}
                </div>
            </div>
        </td>
        <td>
            <div class="tw-w-auto tw-h-12 tw-flex tw-pl-10">
                <button type="button" class="btn tw-w-1/6 tw-bg-yellow-600 tw-rounded-l-lg tw-rounded-r-none" @click="removeFromCart()">-</button> 
                <div class="tw-h-full tw-w-1/4 tw-flex tw-justify-center tw-flex-col tw-text-center tw-box-border tw-border-t-2 tw-border-b-2">
                    {{ item.quantity }}
                </div>
                <button type="button" class="btn tw-w-1/6 tw-bg-green-600 tw-rounded-r-lg tw-rounded-l-none" @click="addToCart()">+</button>
            </div>  
        </td>
        <td>
            <div class="tw-pl-10">
                {{ n(item.price, 'currency', currency)}}
            </div>
        </td>
        <td>
            <div class="tw-font-bold tw-pl-10">
                {{ n(item_cost, 'currency', currency)}}
            </div>
        </td>
    </tr> 
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name:"CartItem",
    props: ['item'],
    setup() {
        const { t, n,  locale } = useI18n({
            inheritLocale: true,
            useScope: "global",
        });
        return { t, n, locale };
    },
    computed: {
        item_cost() {
            return this.item.price * this.item.quantity
        },
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        },
        currency() {
            return this.$store.state.currency
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.item)
        },
        removeFromCart() {
            this.$store.commit('removeFromCart', this.item)
        }
    }
}
</script>

<style lang="scss">
.cart-item-card {
    width: 90%;
    margin: 5%;
    background-color: white;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;
    padding: 10px;
    text-align: left;

    .header {
        display: flex;
        justify-content: space-around;
    }
}
</style>