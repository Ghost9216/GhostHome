<template>
  <div>
    <h1>demo1</h1>
    <ul>
      <router-link to="/demo/demo1/demo2">demo2</router-link>
      <router-link to="/demo/demo1/demo3">demo3</router-link>
    </ul>
    <router-view/>
  </div>

</template>

<script>
    export default {
        name: "demo1"
    }
</script>

<style scoped>

</style>
