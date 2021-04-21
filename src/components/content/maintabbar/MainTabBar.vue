<template>
    <div id="main-tab-bar">
      <tab-bar>
       <tab-bar-item  link="/home">
         <img slot="icon" src="~assets/img/tabbar/home.svg" alt="首页">
         <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="首页">
         <div slot="text">首页</div>
       </tab-bar-item>
       <tab-bar-item link="/category">
         <img slot="icon" src="~assets/img/tabbar/category.svg" alt="分类">
         <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="分类">
         <div slot="text">分类</div>
       </tab-bar-item>
       <tab-bar-item link="/cart">
         <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="购物车">
         <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="购物车">
         <div slot="text">购物车</div>
       </tab-bar-item>
        <tab-bar-item link="/profile">
          <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="我的">
         <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="我的">
         <div slot="text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name:"MainTabBar",
  components:{
   TabBar,
   TabBarItem
  }
}
</script>

<style>

</style>