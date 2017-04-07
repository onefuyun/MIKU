 <template>
  <div class="has-tabbar" v-tabbar-menu-index="0">
     <div class="page-content pagemain" @scroll="getScroll">
      <swiper ref="swiper" direction="horizontal" width="100%" height="150" pager-color="#ea5a49" pager-bg-color="#e5e4e3"  >
          <swiper-item>
            <img src="../assets/images/1.jpg" alt="">
          </swiper-item>
          <swiper-item>
            <img src="../assets/images/2.jpg" alt="">
          </swiper-item>
          <swiper-item>
            <img src="../assets/images/3.jpg" alt=""> 
          </swiper-item>
      </swiper>
       <ul>
          <li @click="next" v-for="a in arr">
            <img :src="a.uri" alt="">
            <p>{{a.title}}</p>
          </li>
       </ul>
       <div class="clear"></div>
       <inpu @click.native="ups"  @tijiao="tijiao"></inpu>
       <div class="more">
          <span class="zou">首页1号橱窗</span><span class="you" @click="gotos">查看更多>></span>
       </div>
       <div class="clear"></div>-
       <ol>
        <li v-for="(l,index) in lists" @click="todetail($event,index)">
          <img :src="'http://lazy-pig.oss-cn-shenzhen.aliyuncs.com/'+l.picture.resource" alt="">
          <div style="height:70px;position:relative;">
            <p>{{l.title | change}}</p>
            <div class="xia"><span class="zou">￥{{l.price}}</span><span class="you"><s>原价￥{{l.retail_price}}</s></span></div>
          </div>
        </li>
       </ol>
       <load-more @click.native="loadMore"></load-more>
    </div>  
    <back-top v-if="show" @click.native="backTop"></back-top>
  </div>
</template>
<style scoped>
  .pagemain{padding-bottom:50px;}
  .clear{clear:both;}
  img{width:100%;height:100%;}
  ul{margin-top:10px;}
  ul li{background:#ffffff;width:20%;height:70px;float:left;text-align:center;color:#666666;font-size:12px;}
  ul li img{width:65%;height:50px;}
  ul li p {margin-top:-4px;}
  
  .more{margin-top:10px;height:40px;background:#ffffff;line-height:40px;color:#9b9b9b;}
  .zou{float:left;margin-left:10px;}
  .you{float:right;margin-right:10px;}
  ol li{width:calc(50% - 10px);float:left;margin:5px; box-shadow:2px 2px 2px 2px #ccc;color:#3b3b3b;}
  ol li p{margin-left:10px;}
  ol .zou{font-size:18px;color:red;font-weight:bolder;position:absolute;bottom:5px;}
  ol .you{position:absolute;bottom:5px;right:5px;}
</style>
<script>
  import inpu  from '../components/input'
  import loadMore from '../components/LoadMore'
  import backTop from '../components/backTop'
  import bus from '../bus.js'
  export default {
    data(){
      return {
        scrollTop:0,
        show:false,
        count:1,
        lists:[],
        arr:[
          {title:'家居',uri:'http://lemiku.com/static/img/house.png'},
          {title:'家电',uri:'http://lemiku.com/static/img/appliances.png'},
          {title:'数码',uri:'http://lemiku.com/static/img/digital.png'},
          {title:'百货',uri:'http://lemiku.com/static/img/department.png'},
          {title:'食品',uri:'http://lemiku.com/static/img/food.png'},
          {title:'本地服',uri:'http://lemiku.com/static/img/o2o.png'},
          {title:'服饰',uri:'http://lemiku.com/static/img/apparel.png'},
          {title:'保健',uri:'http://lemiku.com/static/img/health.png'},
          {title:'美妆',uri:'http://lemiku.com/static/img/makeup.png'},
          {title:'饰品',uri:'http://lemiku.com/static/img/jewelry.png'},
        ]
      }
    },
    components:{
      loadMore,backTop,inpu 
    },
    created(){
      this.getInfo(this.count) 
     },
     methods:{
       gotos(){
        $router.forward('/sort')
       },
       next(){
         $router.forward('/sort')
       },
       getInfo(page){
          this.axios.get(`http://lemiku.com/api/goods/search?page=${page}&page_size=20`)
          .then((data)=>{
              this.lists = this.lists.concat(data.data.goods)
              console.log(data)
          })
       },
       loadMore(){
        this.count++
        this.getInfo(this.count)
       },
       getScroll(){
           this.scrollTop = this.$el.querySelector(".pagemain").scrollTop;
           if(this.scrollTop>=350){
              this.show =true;
           }else{
              this.show =false;
           }
       },
       backTop(){
        //  console.log(this.scrollTop)
          let timer = setInterval(()=>{
            if(this.scrollTop > 0){
              this.$el.querySelector('.pagemain').scrollTop  -= 70
            }else{
              clearInterval(timer)
              this.$el.querySelector('.pagemain').scrollTop = 0
            }
         },20)
       },
       ups(){
         let timer = setInterval(()=>{
          if(this.$el.querySelector('.pagemain').scrollTop < 300){
            this.$el.querySelector('.pagemain').scrollTop += 15
          }else{
            this.$el.querySelector('.pagemain').scrollTop = 300
            clearInterval(timer)
          }
         },30)
         
       },
       tijiao(value){
         console.log("这是inpu发来的"+value)
       },
       todetail(e,index){
        //  直接写着
        
          var l = this.lists[index]
          $router.forward('/detail')
          
          // console.log(l)
          bus.$emit('detaildata',1)
       }
     }
  }
</script>
