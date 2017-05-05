<template>
  <div class="tmpl">
    {{this.$route.params.id}}
    {{mag}}
    <subcomment :articl="articl"></subcomment>
  </div>
</template>

<script>
  import subcomment from '../subcomps/subcomment.vue'
  export default {
    data(){
      return{
        mag : '通过id进行Ajax数据请求',
        articl : 0
      }
    },
    components : {
      subcomment
    },
    created () {
      this.articl = this.$route.params.id
    }
  }
</script>
  <style>

  </style>
