<template>
  <div class="hello">
    <div>pageC获取值：{{showNum}}</div>
  </div>
</template>

<script>
import GroupDispatcher from './src/GroupDispatcher.js';
import GroupEvent from './src/GroupEvent.js';
export default {
  name: 'HelloWorld',
  data() {
    return {
      showNum: 0
    }
  },
  created: function () {
    this.addEvent();
  },
  methods: {
    addEvent() {
      GroupDispatcher.addListenter(GroupEvent.PAGE_B_EVENT, this.pageDataGet);
    },
    pageDataGet(e) {
      let num = e.data;
      this.showNum += num;
      console.log('pageC 获取' + num);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
