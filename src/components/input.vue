<template>
    <div>
        <div class="absolute" v-show="search">
            <span class="float"><i class="ion-ios-search" @click="submit"></i></span>
            <form>
                <input type="text" placeholder="请输入商品关键字" class="float">
            </form>
            <span class="float" @click="searcher">取消</span>
        </div>
        <div class="input" v-show="blank" @click="blanker">
          <p><i class="ion-ios-search"></i>商品搜索<span></span></p>
        </div>
    </div>
</template>
<style scoped>
    .absolute{margin-top:10px;width:95%;}
    .float{float:left;}
    span:nth-child(1){height:28px;font-size:18px;line-height:28px;text-align:center;margin-left:5px;
    background:white;width:40px;}
    span:nth-child(3){height:28px;width:40px;text-align:center;line-height:28px;color:green;font-size:16px;}
    input{border:none;height:28px;width:calc(100% - 90px);}
    .absolute,.input{clear:both;height:40px;width:100%;border-bottom:1px solid #ccc;}
    .input p{width:95%;height:28px;margin:10px auto;background:#ffffff;text-align:center;border-radius:3px;line-height:28px;
    color:#9b9b9b;font-size:15px;}
</style>
<script>
import bus from "../bus.js"
    export default {
         
        data(){
            return{
                blank:true,
                search:false,
                
            }
        },
        methods:{
            searcher(){
                this.search = false;
                this.blank= true;
                document.querySelector('input').value = ''
            },
            blanker(){
                this.search = true;
                this.blank = false;
            },
            submit(){
                this.search = false;
                this.blank= true;
                var a = $('input').val()
                this.$router.forward({path:'/search',query:{id:a}})
                bus.$emit('showtitle',a)
            }
        }
    }
</script>