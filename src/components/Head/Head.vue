<!--  -->
<template>
  <div class="head-container">
    <header class="head">
      <div class="logo">
        <a href="">
          <img src="../../assets/img/logo.png" alt="">
        </a>
        
        
      </div>
      <Nav></Nav>
      
      <Search></Search>
      <UserInfo></UserInfo>
    </header>

  </div>
</template>

<script>

import Nav from "./Nav"
import Search from "./Search"
import UserInfo from "./UserInfo"

export default {
  data () {
    return {
    };
  },

  components: {
    Nav,Search,UserInfo
  },

  computed: {},

  mounted: {},

  methods: {}
}

</script>
<style>
.head-container{
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
  background: white;
}
.head{
  display: flex;
  align-items: center;
  width: 1032px;
  margin: 0 auto;
  padding: 0 16px;
  height: 52px;;

}

</style>