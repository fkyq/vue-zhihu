<template>

  <div id="app">
    
    <Head></Head>

    <router-view/>
  </div>
</template>

<script>
// $(document).ready(function() {
//     $(".test").click(function(e) {
//         e.preventDefault();
//         $(this).css({
//             color: "#FF0000"
//         });
//     });
// });
import Head from "./components/Head/Head";

export default {
    name: "App",
    components: {
       Head
    },
    methods: {}
};
</script>

<style>
body{
  font-size: 15px;
  line-height: 1.7;
}

a:hover{
  text-decoration: none;
}

button{
  padding: 0;
  border: 1px solid transparent;
  outline: none;
}
svg{
    fill: currentColor;
}

</style>
