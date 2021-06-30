<template>
    <div class="order-container">
        <div class="card-container">
            <div class="card-items">
                <h6>New orders</h6>
                <div v-for="(item, index) in items" :key="item.id" >
                    <Card v-if="item.orderType === 'New Order'" :index="index" :orderItem="item" :orderDelete="deleteOrder"/>
                </div>
            </div>
            <div class="card-items">
                <h6>In Progress</h6>
                <div v-for="(item, index) in items" :key="item.id" >
                    <Card v-if="item.orderType === 'In progress'" :index="index" :orderItem="item" :orderDelete="deleteOrder"/>
                </div>
            </div>
            <div class="card-items">
                <h6>Waiting for buyer</h6>
                <div v-for="(item, index) in items" :key="item.id" >
                    <Card v-if="item.orderType === 'Delivered'" :index="index" :orderItem="item" :orderDelete="deleteOrder"/>
                </div>
            </div>
            <div class="card-items">
                <h6>completed</h6>
               <div v-for="(item, index) in items" :key="item.id" >
                    <Card v-if="item.orderType === 'Completed'" :index="index" :orderItem="item" :orderDelete="deleteOrder"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from './card.vue'
    export default {
        components: {
            Card
        },
        data(){
            return{
                items: [
                    {   
                        id: 0,
                        orderType: 'New Order',
                        price: '$320'
                    },
                    {
                        id: 1,
                        orderType: 'In progress',
                        price: '$3200'
                    },
                    {   
                        id: 2,
                        orderType: 'Delivered',
                        price: '$78'
                    },
                    {
                        id: 3,
                        orderType: 'Completed',
                        price: '$315'
                    },
                    {
                        id: 4,
                        orderType: 'Completed',
                        price: '$20'
                    },
                ]
            }
        },
        methods: {
            deleteOrder(index) {
                console.log(index)
                this.items.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    
    .card-container {
        display: flex;
        flex-wrap: wrap;
    }
    .card-items {
        background-color: #fafafa;
        margin: 0 15px 15px;
        padding: 16px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        width: 300px;
    }
    .card-items h6 {
        text-transform: uppercase;
        font-size: 14px;
        color: #979797;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
</style>