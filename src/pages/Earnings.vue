<template>
  <div class="page has-tabbar" v-tabbar-menu-index="3">
       <ul class="title">
            <li v-for="(l,index) in list" @click="change($event,index)" :class="{current:index==a?true:false}">{{l.title}}</li>
       </ul>
       <mine v-if="a == 0"></mine>
       <enjoy v-if="a == 1"></enjoy>
       <invate v-if="a == 2"></invate>
       <rank v-if="a == 3"></rank>
  </div>
</template>
<style scoped>
    .current{background:#ccc;color:red;}
    li {float:left;width:25%;border-right:1px solid #ccc;text-align:center;height:50px;line-height:50px;
    font-size:16px;border-bottom:1px solid #ccc;color:#999999;}
    .title li:last-child{border-right:none;}
</style>
<script>
 import mine from '../components/mine' 
 import enjoy from '../components/enjoy' 
 import invate from '../components/invate' 
 import rank from '../components/rank' 
    export default {
        data (){
            return{
                list:[
                    {title:'我的收益'},
                    {title:'分享收益'},
                    {title:'邀约收益'},
                    {title:'收益排行'},
                ],
                a : 0
            }
        },
        components:{
            mine,enjoy,invate,rank
        },
        methods:{
            change(e,index){
                console.log(index)
                this.a = index
                var oLi = document.querySelectorAll('li')
                for(let i=0;i<oLi.length;i++){
                    oLi[i].style.background = ''
                    oLi[i].style.color = ''
                }
                oLi[index].style.background = '#ccc'
                oLi[index].style.color = 'red'
            }
        }
    }
</script>