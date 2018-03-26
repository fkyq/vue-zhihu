<!--  -->
<template>
    <div class="recommend">

        <div class="recommend-title">
            <i class="recommend-title-icon"></i>
            <span>编辑推荐</span>
            <a href=""> 更多推荐 »</a>
        </div>
        <div class="recommend-list">
            <!-- 这里不能用带有slot的子组件，因为它们的内容一直在更改，带有slot的子组件适用于它们具有相同内容 
                可以观察到除了第一个元素（有img等等），后面元素都相同，
                如果用for循环，那么for循环的模板就会是第一个元素和其它元素的并集，
                那么后面元素的img的src就会为空，导致页面出现空白
                因为第一个元素和后面的元素模板机会完全不一样，所以用v-if来控制不同的地方比较艰难
                所以可以将第一个元素单独列出来，后面再用v-for
            -->
            <div class="recommend-list-item1">
                <a href="" class="question">
                    靶向治疗是现在治疗癌症的最好手段吗？它有什么优点和局限？</a>
                <div class="item1-main">
                    <div class="item1-main-left">
                        <a href=""> <img src="https://pic2.zhimg.com/v2-9a21499b28433540a8867f9faa91a530_m.jpg" alt=""></a>
                    </div>
                    <div class="item1-main-right">
                        <div class="author-info">
                            <span class="author-name nickname">
                                <a href="">
                                    盐小姐不吃盐
                                </a>
                            </span>
                            <span class="author-bref self-introduction">
                                去记录吧，就像没有人注意一样。
                            </span>
                        </div>
                        <div class="item1-text">
                            <span class="attach-img">
                                <img src="https://pic4.zhimg.com/v2-722a51596fd8a4a83b289df93a367bab_200x112.jpg" alt="">
                            </span>
                            <span>
                                “如果你愿意一层一层一层的剥开我的心，你会发现，你会讶异，其实我没那么那么难治“-------肿瘤君1.什么是“靶向治疗“？随着医疗科技的发展和对肿瘤研究的不断深入，医学家对肿瘤的认识逐渐从过去的实质病灶到细胞，进一步深化到分子水平。靶向治疗有一…
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend-list-item">
                <a href="" class="question">不仅仅是死亡缠绕 | 卡哇伊伦纳德的精彩攻防赏析</a>
                <span>篮球JUMPSHOT</span>
            </div>

        </div>
    </div>
</template>

<script>
// import RecommendItem from "./RecommendItem";
export default {
    data() {
        return {};
    },

    components: {
        // RecommendItem
    },

    computed: {},

    mounted: {},

    methods: {}
};
</script>
<style>
.recommend {
    /* display: flex; */
    font-size: 13px;
}
.recommend a:hover{
    text-decoration: underline;
}
.recommend-title {
    display: flex;
    font-size: 14px;
    color: #666;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(190, 189, 189);
}
.recommend-title-icon {
    background: url("../../assets/img/recommend-title-icon.png") no-repeat;
    width: 20px;
    height: 18px;
    margin-right: 5px;
}
.recommend-title a {
    /* flex: 1; */
    margin-left: auto;
    color: #999;
    font-size: 13px;
}
.recommend-list-item,
.recommend-list-item1 {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}
.recommend-list-item {
    display: flex;
}
.recommend-list-item span {
    color: #999;
    font-weight: 400;
    margin-left: auto;
}
.question {
    color: #259;
    font-weight: 700;
    line-height: 1.7;
    font-size: 14px;
}
</style>