<template>
  <div>
    <button type="submit">
      <slot v-bind:user = 'user'>{{user.firstName}}</slot>
    </button>

  </div>
</template>

<script>
    export default {
        name: "demo8",
      data(){
          return{
            user:{
              firstName:'ghost',
              lastName:"charry"
            }

          }
      }

    }
</script>

<style scoped>

</style>
