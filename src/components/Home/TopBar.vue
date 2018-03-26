<!--  -->
<template>
    <div class="top-bar-container">
        <div class="top-bar">
            <div class="top-bar-nav">
                <span>提问</span>
                <span>回答</span>
                <span>写文章</span>
                <span>写想法</span>
            </div>
            <div class="top-bar-right">
                <a href="">草稿</a>
            </div>
        </div>
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
.top-bar-container {
    margin-bottom: 10px;
    width: 694px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.top-bar {
    padding: 0 20px;
    display: flex;
    line-height: 58px;
}
.top-bar-nav{

}
.top-bar-nav span{
    padding-left: 24px;
    font-size: 16px;
    margin-left: 40px;
    cursor: pointer;
}
.top-bar-nav span:hover{
    color: #175199;
}
.top-bar-nav span:nth-child(1){
    background: url("../../assets/img/top-bar-ask.png") no-repeat;
      margin-left: 0;
    
}
.top-bar-nav span:nth-child(2){
    background: url("../../assets/img/top-bar-answer.png") no-repeat;
    background-position: left 1px;

    
}
.top-bar-nav span:nth-child(3){
    background: url("../../assets/img/top-bar-write.png") no-repeat;
    
}
.top-bar-nav span:nth-child(4){
    background: url("../../assets/img/top-bar-write-idea.png") no-repeat;
    
}
.top-bar-right{
    flex: 1;
    justify-content: flex-end;
    display: flex;
}
.top-bar-right a{
    color: #8590a6;

}
.top-bar-right a:hover{
    color: #175199;
}
</style>