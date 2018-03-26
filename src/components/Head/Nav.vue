<!--  -->
<template>

  <nav class="nav">
    <router-link to="/">

      <a href="" class="nav-item" :class="{'nav-item-click':active1}">首页</a>
    </router-link>
    <router-link to="/explore">

      <a href="" class="nav-item" :class="{'nav-item-click':active2}">发现</a>

    </router-link>
    <router-link to="/topic">
      <a href="" class="nav-item" :class="{'nav-item-click':active3}">话题</a>
    </router-link>

  </nav>

</template>

<script type="es6">

$(document).ready(function () {
    $(".nav-item").click(function (e) { 
        $(this).addClass("nav-item-click");
        $(this).parent().siblings().find("a").removeClass("nav-item-click")
        
    });
});
export default {
    data() {
        return {
            active1: false,
            active2: false,
            active3: false
        };
    },

    components: {},

    computed: {},

    mounted: {},

    methods: {},

    watch: {
        // $route() {
        //   //如果有N个路由，是否就需要写10次判断，可以用switch-case语句
        //   //但目前而言最简单的方法只是判断点击事件就可以了,如上面
        //     var currentPath = this.$route.path;
        //     if (currentPath == "/") {
        //         this.active1 = true;
        //         this.active2 = false;
        //         this.active3 = false;
        //     } else if (currentPath == "/explore") {
        //         this.active1 = false;
        //         this.active2 = true;
        //         this.active3 = false;
        //     } else {
        //         this.active1 = false;
        //         this.active2 = false;
        //         this.active3 = true;
        //     }
        // }
    },
    created() {
        //页面刷新时，判断处于哪个页面，并更改导航相应元素样式，必须
        var currentPath = this.$route.path;
        if (currentPath == "/") {
            this.active1 = true;
        } else if (currentPath == "/explore") {
            this.active2 = true;
        } else {
            this.active3 = true;
        }
    }
};
</script>
<style>
.nav {
    margin: 0 18px 0 27px;
}
.nav-item {
    padding: 0 15px;
    font-size: 15px;
    color: #8590a6;
}
.nav-item:hover {
    color: rgb(44, 112, 196);
    font-weight: 500;
}
.nav .nav-item-click {
    color: black;
}
.nav-item:nth-child(1) {
    padding-left: 0;
}
</style>