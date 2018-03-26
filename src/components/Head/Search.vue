<!--  -->
<template>
    <div class="search-container">
        <div class="search">
            <div class="search-box-container" :class="{'ani-search-box-container':active}">
                <input type="text" name="" id="" placeholder="搜索你感兴趣的内容" class="search-box" :class="{'ani-search-box':active}" @focus="changeActive()" @blur="changeActive()">
                <span class="search-icon"></span>
            </div>

            <!-- <span class="search-icon"></span> -->

        </div>
        <button class="btn-search" v-bind:class="{'ani-btn-search-hide':active}">提问</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false
        };
    },

    components: {},

    computed: {},

    mounted: {},

    methods: {
        changeActive() {
            this.active = !this.active;
        }
    }
};
</script>
<style>
.search-container {
    display: flex;
}
.search {
    position: relative;
    width: 324px;
}
.search-box-container {
    height: 34px;
    padding: 4px 10px;
    border: 1px solid #ebebeb;
    background: #f6f6f6;
    width: 324px;
    transition: width 0.2s linear;
    position: relative;
}
.search-box {
    width: 304px;
    border: none;
    background: #f6f6f6;
    height: 24px;
    outline: none;
    transition: width 0.2s linear;
}
.search-icon {
    background: url("../../assets/img/search-icon.png");
    width: 33px;
    height: 32px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
.btn-search {
    background-color: #0084ff;
    color: #fff;
    border: 1px solid;
    padding: 0 14px;
    border-radius: 3px;
    margin-left: 16px;
    transition: transform 0.07s linear;
}
.btn-search:hover {
    background-color: #0077e6;
}
/* input::-webkit-input-placeholder  {
　　color:blue !important;
} */
.ani-search-box-container{
    width: 395px;
    background: white;
    border: 1px solid #77839C;
    
}
.ani-search-box {
    width: 375px;
    background: white;
}

.ani-btn-search-hide {
    transform: scale(0);
}
</style>