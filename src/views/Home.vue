<template>
  <div id='home'>
    <el-carousel :interval="5000"
                 height="400px"
                 arrow="never">
      <el-carousel-item v-for="item in 4"
                        :key="item">
      </el-carousel-item>
    </el-carousel>
    <div class="industry-module">
      <headline v-bind:title="industryModule"></headline>
      <div class="menu-industry">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2"
                      mode="horizontal">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项ssd1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3"><a href="https://www.ele.me"
               target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="person-history">
      <headline v-bind:title="personHistory"></headline>

    </div>
  </div>
</template>

<script>
import Headline from '../components/Headline'
export default {
  name: 'Home',
  data () {
    return {
      industryModule: '行业模块',
      personHistory: '个人历史记录',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components: {
    'headline': Headline
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less">
#home {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #8dd7e2;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #5b8fc9;
  }
  .is-active {
    .el-carousel__button {
      width: 25px !important;
      height: 10px;
      border-radius: 5px !important;
    }
  }
  .el-carousel__indicator--horizontal {
    padding: 39px 11px;
  }
  .el-carousel__indicator {
    .el-carousel__button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
  .industry-module,
  .person-history {
    width: 100%;
    padding: 35px 0;
    .menu-industry {
      width: 960px;
      margin: 0 auto;
    }
  }
  .person-history {
    background: #f5f5f5;
  }
}
</style>
