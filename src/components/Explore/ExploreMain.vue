<!--  -->
<template>
  <div class="explore-container">
    <div class="explore">
      <main class="explore-main-column">
        <Recommend></Recommend>
        <Hot></Hot>

      </main>
      <SideBar></SideBar>
    </div>
  </div>
</template>

<script>
import Recommend from "./Recommend";
import Hot from "./Hot";
import SideBar from "./SideBar";

export default {
    data() {
        return {};
    },

    components: {
        Recommend,
        Hot,
        SideBar
    },

    computed: {},

    mounted: {},

    methods: {}
};
</script>
<style>
.explore-container {
    margin-top: 52px;
}
.explore {
    padding-top: 25px;
    width: 960px;
    margin: 0 auto;
    min-height: 340px;
}
.explore-main-column{
  margin-right: 328px;
}
</style>