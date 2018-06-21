<template>
  <div>
    <div class="title">Blog's List</div>
    <ul class="blog-list">
      <li>
        <span class="blog-title">
          webpack构建工具
        </span>
        <div class="blog-des">
          <img src="../public/imgs/webpack.png" />
          <div class="info">Webpack 是一个开源的前端打包工具。将各种静态资源视为模块，并从它生成优化过的代码。</div>
        </div>
        <div class="blog-time">
          2018-03-03
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlogLayout'
}
</script>

<style lang="stylus" scoped>
  .title 
    color red
    font-size 20px
    margin-top 50px
    text-align center
  .blog-list li
    width 800px
    min-height 150px
    border 1px solid #ccc
    border-radius 3px
    padding 20px
    margin 20px auto
    list-style-type none
    background-color #f7f7f7
  .blog-title
    font-size 20px
    cursor pointer
  .blog-title:hover
    color blue  
  .blog-time
    clear both
    color grey
    float right
  .blog-des img 
    float left
    width 180px
  .blog-des info 
    float left
    margin-left 200px
</style>
