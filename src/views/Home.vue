<template>
  <div class="home">
    <div class="list-wrap">
      <ul class="cut_list">
        <li class="wrap"><img src="../assets/images/logo.png" alt=""></li>
      </ul>
    </div>
    <div class="flex bd-1px-orange">asdfasdf</div>
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style lang="less">
  .flex {
    background: url("@{localImgBaseUrl}/logo.png");
  }
  .list-wrap {
    color: @orange;
    width: 100%;
    overflow-x: scroll;
  }
  .cut_list {
    margin-bottom: 73px;
    box-sizing: border-box;
    white-space: nowrap;
    .wrap {
      width: 310px;
      height: 440px;
      display: inline-block;
      border-radius: 28px;
      margin-right: 19px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  /*.list {
    width: 100%;
    .list-item {
      width: 100%;
      height: 50px;
      background-color: gray;
      border-bottom: 1px solid red;
      &:last-child {
        border-bottom: none;
      }
    }
  }*/
  .flex {
    width: 200px;
    height: 200px;
  }

  @svg 1pxBorder {
    width: 4px;
    height: 4px;
  @rect {
    fill: transparent;
    width: 100%;
    height: 100%;
    stroke-width: 25%;
    stroke: var(--color, black);
  }
  }
  .flex {
    border-radius: 50%;
    /*border: 1px solid transparent;*/
    /*border-image: svg(1 pxBorder param(--color red)) 1 stretch;*/
  }

  @svg square {
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 100%;
  }
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
