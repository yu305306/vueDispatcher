<template>
  <div class="hello">
    <pageAVue></pageAVue>
    <pageBVue></pageBVue>
    <pageCVue></pageCVue>
  </div>
</template>

<script>
import pageAVue from './pageA.vue';
import pageBVue from './pageB.vue';
import pageCVue from './pageC.vue';

export default {
  components: {
    pageAVue, pageBVue, pageCVue
  },
  data: function () {
    return {
    }
  },
  created: function () {
  },
  methods: {
    
  }
}
</script>

<style scoped></style>
