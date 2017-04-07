<template>
  <div class="page has-tabbar  page-content" v-tabbar-menu-index="1">
     <div class="zuo">
        <ul>
          <li v-for="(l,index) in list" @click="toggle($event,index)" :class="{current:(index==0?true:false)}" >{{l.title}}</li>
        </ul>
     </div>
       
     <div class="zhong"></div>
     
     <div class="yuo" style="overflow:auto;padding-bottom:50px;" @scroll="getScroll">
        <ol v-show="show">
          <loading v-show="loading"></loading>
          <li v-for="a in arr" v-show="!loading">
            <img :src="'http://lazy-pig.oss-cn-shenzhen.aliyuncs.com/'+a.picture.resource" alt="">
             <div style="height:120px;position:relative;">
              <p>{{a.title | change}}</p>
              <p class="left"><h4 style="color:red;font-weight:bolder;font-style:italic;">￥{{a.price}}</h4></p>
              <p class="right"><s>原价:￥{{a.retail_price}}</s></p>
             </div>
          </li>
        </ol>
        <div v-show="!show">
          <div class="circle"><i class="ion-information"></i></div>
          <h4 style="font-weight:bolder;width:36px;margin: 0 auto;">抱歉</h4>
          <p style="width:98px;margin:20px auto;">次分类暂无商品</p>
        </div>
        <back-top @click.native="backTop" v-if="tog"></back-top>
     </div>
   
  </div>
</template>
<style scoped>
  body{overflow:auto;color:#ccc;}
  .clear{clear:both;}
  .zuo{height:100%;width:90px;background:#e6e6e6;float:left;}
  .zhong{height:100%;width:15px;background:#f2f2f2;float:left;}
  .yuo{background:#f2f2f2;width:calc(100% - 105px);height:100%;float:left;}
  ul{margin-top:25px;}
  ul li{height:45px;text-align:left;font-size:16px;padding:10px;line-height:30px;}
  .current{background:#f2f2f2;color:#ff6600;}


  ol li {float:left;width:calc(50% - 10px);background:white;margin:5px;box-shadow:2px 2px 2px 2px #ccc;color:#3b3b3b;}
  ol li img{width:100%;height:100px;}
  p{margin:3px;}
  .right{ margin-right:5px;position:absolute;right:5px;bottom:5px;}
  .left{position:absolute;  }
  .circle{width:100px;height:100px;border-radius:50px;background:#10aeff;text-align:center;line-height:100px;color:white;
  font-size:50px;margin:40px auto;}
</style>
<script>
  import backTop from '../components/backTop'
  import loading from '../components/loading'
  export default {
    data() {
      return {
        list:[
          {title:'鞋包',address:'580d6b74fd4df7001b186614'},
          {title:'母婴',address:'580d6b36fd4df7001b18660b'},
          {title:'家居',address:'578f29652135c14e0506993e'},
          {title:'家电',address:'5791bfb993cb8b4f83f1c890'},
          {title:'数码',address:'578f2c1c2135c14e05069974'},
          {title:'百货',address:'5791bfec93cb8b4f83f1c891'},
          {title:'食品',address:'578f169c2135c14db45d09b6'},
          {title:'本地服务',address:'5798a86293cb8b5128b2f395'},
          {title:'服饰',address:'5798a83e93cb8b5128b2f394'},
          {title:'保健',address:'5798a81393cb8b5128b2f393'},
          {title:'美妆',address:'578f2f942135c14e050699c1'},
          {title:'饰品',address:'578f28402135c14e0506992e'},
        ],
        arr:[],
        show:true,
        tog:false,
        loading:false
      }
    },
    components:{
      backTop,loading
    },
    mounted(){
      this.loading = true
      setTimeout(()=>{
        this.axios.get('http://lemiku.com/api/category/580d6b74fd4df7001b186614/goods?page=1&page_size=20')
        .then((data)=>{
          console.log(data)
          this.arr = data.data.goods
        })
        this.loading = false
      },300)
    },
     methods:{
       toggle(e,index){
         this.loading = true
          let time = setTimeout(()=>{
              this.axios.get('http://lemiku.com/api/category/'+this.list[index].address+'/goods?page=1&page_size=20')
              .then((data)=>{
                console.log(data.data.goods.length)
                var a = data.data.goods.length
                if(a == 0){
                  this.show = false
                }else{
                  this.show = true
                  this.arr = data.data.goods
                }
                this.loading = false
              })
               
              clearTimeout(time)
          },300)
        
        for(let i= 0;i<this.list.length;i++){
          let oLi = document.querySelectorAll('li')
          oLi[i].style.background = '#e6e6e6'
          oLi[i].style.color = '#000000'
        }
        e.target.style.background = '#f2f2f2'
        e.target.style.color = '#ff6600'
       },
       getScroll(){
        //  console.log(this.$el.querySelector('.yuo').scrollTop)
         let top = this.$el.querySelector('.yuo').scrollTop
         if(top>300){
           this.tog = true
         }else{
           this.tog = false
         }
       },
       backTop(){            
         let timer = setInterval(()=>{
          if(this.$el.querySelector('.yuo').scrollTop>0){
            this.$el.querySelector('.yuo').scrollTop -=70
          }else{
            clearInterval(timer)
            this.$el.querySelector('.yuo').scrollTop = 0
          }
        },30)
       }
     }
  }
</script>