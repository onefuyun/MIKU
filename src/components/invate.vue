<template>  
    <div>
        <p>暂无收益</p>
        <div class="enjoy">
            <enjoy></enjoy>
        </div>
        
    </div>
    
</template>
<style scoped>
    p{padding:20px;}
    .enjoy{margin-top:-90px;}
</style>
<script>
    import enjoy from './enjoy'
    export default {
        components:{
            enjoy
        }
    }
</script>