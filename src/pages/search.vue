<template>
    <div class="page page-content">
        <InputSearch @sendmessage="jieshou"></InputSearch>
        <p @click="back" class="back">返回首页</p>
        <ul class="mycontent" v-html="licontent">

        </ul>
    </div>
</template>
<style scoped>
    .back{height:30px;text-align:center;line-height:30px;color:red;border:1px solid #ccc;float:right;margin:10px;
    border-radius:10px;}
    .page{overflow:auto;}
    .mycontent .showcase-item .weui_panel_bd {width:50%; }
     
</style>
<script>
    import InputSearch from '../components/InputSearch'
    export default {
        data(){
            return{
                licontent:""
            }
        },
        components:{
            InputSearch
        },
        created(){
            let id=this.$route.query.id;
            $.post("http://lemiku.com/m/search/goods/bar",{page:1,title:id}).done(data=>{
                this.licontent=data.html;
            }).fail(error=>{
                console.log(error)
            })
        },
        methods:{
            back(){
                $router.back('/home')
            },
            jieshou(message){
                if(!message){
                    this.licontent = '<h1>没有该商品信息</h1>'
                }else{
                    this.licontent=message;
                }
            }
        }
    }
</script>