<template>
  <div class="hello">
    <button @click="pageClick()">pageA 点击按钮</button>
  </div>
</template>

<script>
import GroupDispatcher from './src/GroupDispatcher.js';
import GroupEvent from './src/GroupEvent.js';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {

  },
  methods: {
    pageClick() {
      GroupDispatcher.dispatch(GroupEvent.PAGE_A_CLICK, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
