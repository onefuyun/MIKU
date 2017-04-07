<template>
    <div class="page page-content">
        <div style="padding:40%;">
            <p>{{l}}</p>
        </div>
    </div>
</template>
<style scoped>
    
</style>
<script>
    import bus from '../bus.js'
    export default {
        data(){
            return{
                l:''
            }
        },
        created(){
            bus.$on('detaildata',(a)=>{
                this.l = a.title
                // 有问题
            })
        }
    }
</script>