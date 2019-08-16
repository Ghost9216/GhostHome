<template>
<div class="top">
  <AppHeader></AppHeader>
  <AppContent></AppContent>
  <AppFooter></AppFooter>
</div>
</template>

<script>
  import AppHeader from "@/components/AppHeader"
  import AppContent from "@/components/AppContent"
  import AppFooter from  '@/components/AppFooter'
    export default {
        name: "Home",
      components:{
          'AppHeader': AppHeader,
         'AppContent': AppContent,
        'AppFooter': AppFooter

      },
      data(){
          return{

          }
      }
    }
</script>

<style>
html{
  background-color: lightgoldenrodyellow;
}
  .top{
    margin: 0 auto;
    width: 1190px;
    background-color: white;
  }
</style>
