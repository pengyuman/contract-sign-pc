<template>
  <div id="app">
    <div class="header">
      <div class="header-container">
        <p class="header-icon">合同签约指导学习平台</p>
        <div class="header-person">
          <p class="popup-news"><span>您的建议已回复</span><i></i></p>
          <el-badge :value="3"
                    class="item"
                    :max="99">
            <el-button size="small">个人中心</el-button>
          </el-badge>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <p class="comment-hover">评论建议</p>
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    height: auto;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.13);
    .header-container {
      width: 960px;
      height: 80px;
      margin: 0 auto;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
  }
  .header-icon {
    color: #000000;
    font-size: 24px;
    background: url(./assets/images/header-logo.png) no-repeat;
    background-size: 100px auto;
    background-position-y: center;
    padding-left: 105px;
  }
  .header-person {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .popup-news {
      width: 150px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      background: #dd231f;
      color: #fff;
      position: relative;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 2px;
      i {
        display: inline-block;
        width: 13px;
        height: 13px;
        transform: rotate(45deg);
        background: #dd231f;
        position: absolute;
        top: 8px;
        right: -6px;
        border-radius: 1px;
      }
    }
  }
  .comment-hover {
    width: 35px;
    text-align: center;
    color: #fff;
    background: #dd231f;
    font-size: 18px;
    padding: 2px;
    padding: 14px 8px;
    position: fixed;
    top: 52%;
    right: 0;
    z-index: 2;
  }
  .el-badge {
    position: initial;
    .el-button {
      color: #000;
      border: none;
      padding-right: 0;
      font-size: 18px;
    }
    .el-badge__content {
      background-color: #dd231f;
    }
  }
}
</style>
