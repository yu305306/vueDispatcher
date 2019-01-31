<template>
  <div class="hello">
    <div>pageB获取值：{{showNum}}</div>
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
      GroupDispatcher.addListenter(GroupEvent.PAGE_A_CLICK, this.pageDataGet);
    },
    pageDataGet(e) {
      let num = e.data;
      this.showNum += num;
      console.log('pageB 获取' + num);
      GroupDispatcher.dispatch(GroupEvent.PAGE_B_EVENT, num + 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
