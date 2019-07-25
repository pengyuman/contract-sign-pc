<template>
  <header>
    <p>{{title}}</p>
  </header>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    title: {
      tytpe: String,
      requried: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
header {
  width: 960px;
  height: 28px;
  border-left: 4px solid #dd231f;
  margin: 0 auto;
  p {
    font-size: 22px;
    line-height: 28px;
    padding-left: 15px;
  }
}
</style>
