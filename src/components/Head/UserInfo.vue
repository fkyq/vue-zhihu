<!--  -->
<template>
    <div class="user-info">
        <span></span>
        <span></span>
        <img src="https://pic4.zhimg.com/da8e974dc_is.jpg" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {},

    mounted: {},

    methods: {}
};
</script>
<style>
.user-info {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
}
.user-info span {
    width: 25px;
    height: 25px;
    margin-right: 40px;
    cursor: pointer;
}

.user-info span:nth-child(1) {
    background: url("../../assets/img/user-info-icon01.png") no-repeat;
}
.user-info span:nth-child(2) {
    background: url("../../assets/img/user-info-icon02.png") no-repeat;
}
.user-info img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}
</style>