<template>
  <div class="page has-tabbar" v-tabbar-menu-index="2">
     <div class="red">
         <p>我的店铺</p>
         <p>商品管理</p>
         <p>提升级别</p> 
         <img src="../assets/images/logo.png" alt="">        
     </div>
     <div class="blank">
      <div>
        <span class="zero float">0件</span>
        <p class="float enjoy">分享商品</p>
        <div class="float line"></div>
      </div>
     </div>
     <div>
          <div class="circle"><i class="ion-information"></i></div>
          <h4 style="font-weight:bolder;width:189px;margin: 0 auto;color:#666;font-size:21px;">橱窗没有在售的产品</h4>
          <p style="margin-left:10px;color:#666;">
            <span style="color:#ff0000;">分享佣金:</span>
           您在米库商城购买的商品, 当订单完成后您都可以将该商品分享到橱窗销售, 任何用户通过您的分享橱窗购买商品,
           您都可以获得分享佣金。
          </p>
          <p style="margin-left:10px;color:#666;">
            <span style="color:#ff0000;">邀约佣金:</span>
           在<a href="">我的二维码</a> 页面为您提供店铺独一无二的二维码,任何用户通过您的二维码注册和购买商品, 您都可
           以获得邀约佣金和分享佣金。         
          </p>
     </div>
     
     <button @click="next" class="button button-balanced button-block" style="width:80%;margin:0 auto;">
        马上去主页挑选商品
      </button>
       
    
  </div>
</template>
<style scoped>
  .red{height:100px;background:#ef483f;position:relative;}
  .red p:nth-child(1){font-size:16px;color:white;position:absolute;top:55px;left:100px;}
  .red p:nth-child(2),.red p:nth-child(3){font-size:15px;position:absolute;border:1px solid white;width:75px;
  text-align:center;padding:2px;border-radius:5px;color:#454545;}
  .red p:nth-child(2){top:25px;right:20px;background:white;}
  .red p:nth-child(3){top:60px;right:20px;background:white; }
  .red img{width:70px;height:70px;position:absolute;top:70px;left:10px;}
  .blank{height:55px;width:100%;background:white;}
   
  .float{float:left;}
  .zero{margin:7px 30%;color:#333333;font-size:18px;}
  .enjoy{margin:0 25%;color:#666;}
  .line{width:1px; height:40px;margin: -42px 50%;background:#ccc;}
  .circle{width:100px;height:100px;border-radius:50px;background:#10aeff;text-align:center;line-height:100px;color:white;
  font-size:50px;margin:40px auto;}
</style>
<script>
   
  export default {
    data() {
      return {
        
      }
    },
    methods:{
      next(){
        $router.back('/home')
      }
    }
    
  }
</script>