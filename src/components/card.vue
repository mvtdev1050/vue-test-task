<template>
    <div class="card">
        <div class="card-content">
            <div class="dot-icon">
                <div class="drop-down">
                    <font-awesome-icon icon="ellipsis-h" color="#999a90"/>
                    <div class="dropdown-content">
                        <h5 @click="orderDelete(index)">Delete</h5>
                    </div>
                </div>
            </div>
            <div class="order-card-info">
                <div class="order-img">
                    <img src="https://via.placeholder.com/75.png/09f/fff" />
                </div>
                <div class="order-details">
                    <span v-if="orderItem.orderType === 'New Order'" class="new-order">
                       {{ orderItem.orderType }}
                    </span>
                    <span v-if="orderItem.orderType === 'In progress'" class="in-progress">
                       {{ orderItem.orderType }}
                    </span>
                    <span v-if="orderItem.orderType === 'Delivered'" class="delivered">
                       {{ orderItem.orderType }}
                    </span>
                    <span v-if="orderItem.orderType === 'Completed'" class="completetd">
                       {{ orderItem.orderType }}
                    </span>
                    <h5><font-awesome-icon icon="clock" /> 5 days left</h5>
                    <h5>20 hrs <strong>| {{ orderItem.price }}</strong></h5>
                </div>
            </div>
            <div class="view-order-section">
                <div class="view-order-link">
                    <h5>View Order</h5>
                </div>
                <div class="comment-section">
                    <div>
                        <font-awesome-icon icon="comment" color="#999a90"/>
                    </div>
                    <div class="comment-img">
                        <img src="https://via.placeholder.com/25.png/09f/fff" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        orderItem: {
            type: Object,
            default: () => {}
        },
        orderDelete: { type: Function },
        index: { type: Number }
    },
    
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

    .card {
        background: #fff;
        border-radius: 10px;
        width: 100%;
        margin: 15px 0px;
    }
    .card .card-content .dot-icon {
        text-align: end;
        padding: 10px 16px;
    }
    .card .card-content .order-card-info {
        padding: 0px 16px;
        border-bottom: 1px solid #f2f2f2;
        margin: 0;
        display: flex;
        justify-content: space-between;
    }
    .order-card-info .order-details span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        background: #FFECD0;
        border-radius: 25px;
        padding: 4px 16px;
        color: #885B3B;
        font-family: 'Roboto', sans-serif;
    }
    .order-card-info .order-details .in-progress {
        background: #D5E1FB;
        color: #8894B6;
    }
    .order-card-info .order-details .delivered {
        background: #FFD7EB;
        color: #9B6E84;
    }
    .order-card-info .order-details .completetd {
        background: #D2F4E5;
        color: #84A897;
    }
    .order-card-info .order-details h5 {
        margin: 12px 0;
        color: #999a90;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .order-card-info .order-details h5 svg {
        width: 0.7em;
    }
    .order-card-info .order-details h5 strong {
        color: #414246;
    }
    .view-order-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
    }
    .view-order-link h5 {
        margin: 0;
        color: #999a90;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .order-img img {
        border-radius: 5px;
        width: 75px;
        height: 75px;
    }
    .comment-img img {
        border-radius: 50px;
        width: 20px;
        height: 20x;
        margin-left: 10px;
    }
    .comment-section {
        display: flex;
        align-items: center;
    }
    .dot-icon .drop-down {
        width: 70px;
        margin-left: auto;
    }
    .dropdown-content {
        text-align: center;
        background-color: #fff;
        box-shadow: 0 0px 3px 0px #ccc;
        padding: 8px 16px;
        border-radius: 3px;
        display: none;
        position: absolute;
    }
    .drop-down:hover .dropdown-content {
        display: block;
    }
    .dropdown-content h5 {
        margin: 0;
        font-family: 'Roboto';
        cursor: pointer;
    }
</style>