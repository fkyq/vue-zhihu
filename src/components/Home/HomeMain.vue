<!--  -->
<template>
    <main class="home-main-container">
        <div class="home-main">

            <div class="home-main-colum">
                <TopBar></TopBar>
                <StoryList></StoryList>
            </div>
            <div class="side-bar-container">
                <SideBar></SideBar>

            </div>
        </div>
    </main>
</template>

<script>
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import StoryList from "./StoryList";
export default {
    data() {
        return {};
    },

    components: {
        TopBar,
        SideBar,
        StoryList
    },

    computed: {},

    mounted: {},

    methods: {},
   
};
</script>
<style>
.home-main-container {
    background: #f6f6f6;
    padding-top: 10px;
    margin-top: 52px;
}

.home-main {
    width: 1032px;
    margin: 0px auto;
    padding: 0 16px;
    display: flex;
}

.home-main-colum {
    margin-right: 10px;
    flex: 1;
}
.side-bar-container {
    flex: 1;
}
</style>