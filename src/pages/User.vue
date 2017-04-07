<template>
  <div class="page has-tabbar" v-tabbar-menu-index="4">
     <div class="logo">
      <img src="../assets/images/logo.png" alt="">
      <p class="span">15514369031</p>
      <p class="float">账号管理</p>
  </div>
  <ul>
    <li v-for="(l,index) in list">
      <i :class="l.uri"></i>
      <p>{{l.title}}</p>
    </li>
  </ul>
  <ul class="top">
    <li v-for="(l,index) in list">
      <i :class="l.uri"></i>
      <p>{{l.title}}</p>
    </li>
  </ul>
  <ul class="bottom">
    <li v-for="a in arr">
      <i :class="a.uri"></i>
      <p>{{a.title}}</p>
    </li>
  </ul>
  <div class="last">
    <item class="item-icon-right item-icon-left" @click.native="rookie">
      <i class="icon ion-plus-circled" style="color:#ea8010;"></i>
      <span>新手学堂</span>
      <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
    </item>
    <item class="item-icon-right item-icon-left" @click.native="laod">
      <i class="icon ion-android-download" style="color:#ea8010;"></i>
      <span>下载米库商城APP</span>
      <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
    </item>
    <item class="item-icon-right item-icon-left" @click.native="cancle">
      <i class="icon ion-information-circled" style="color:#ea8010;"></i>
      <span>关于米库商城不删档测试</span>
      <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
    </item>
  </div>
  </div>
</template>
<style scoped>
  .logo{height:90px;background:#fd3636;}
  .logo img{width:60px;margin:15px;}
  .logo .span{margin: -60px 0px 20px 80px;font-size:17px;color:white;}
  .float{float:right;margin :-45px 10px 20px 0;border:1px solid #fff;text-align:center; padding:1px 15px;line-height:25px;
  border-radius:5px; background:white;}
  ul{margin:15px 0; }
  ul li{width:25%;float:left;background:#ffffff; text-align:center;padding:5px;height:55px; }
  ul li i{font-size:25px; }
  ul li p{color:#888888;}
  .top{margin-top:85px;}
  .bottom{margin-top:155px;}
  .bottom li{width:calc(100% / 3);height:90px;padding:20px;border:1px solid #ccc;}
  .bottom li i{color:#ea8010;font-size:30px;}
  .bottom li p{color:#000000;}
  .last{margin-top:360px;}
   
</style>
<script>
   
  export default {
    data() {
      return {
        list:[
          {uri:'ion-social-bitcoin',title:'待付款'},
          {uri:'ion-android-bus',title:'待收货'},
          {uri:'ion-android-chat',title:'待评价'},
          {uri:'ion-ios-grid-view',title:'我的订单'},
        ],
        arr:[
          {uri:'ion-social-usd',title:'提现'},
          {uri:'ion-social-twitch',title:'消息'},
          {uri:'ion-ios-grid-view',title:'我的二维码'},
          {uri:'ion-social-yen',title:'兑换'},
          {uri:'ion-ios-photos',title:'红包'},
          {uri:'ion-social-euro',title:'现金券'},
        ]
      }
    },
    methods:{
      rookie(){
        $router.forward('/rookie')
      },
      laod(){
        $router.forward('/loadapp')
      },
      cancle(){
        $router.forward('/nocancle')
      },
    }
     
    
  }
</script>