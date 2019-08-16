<template>
  <div class="wrapper">
    <div class="container">
    <CommHeader></CommHeader>
    <CommFooter></CommFooter>
    </div>
  </div>
</template>

<script>
    import CommHeader from "@/components/CommHeader"
    import  CommFooter from  '@/components/CommFooter'
    export default {
        name: "course1",
      components:{
          "CommHeader":CommHeader,
          "CommFooter": CommFooter
      }
    }
</script>

<style scoped>

</style>
