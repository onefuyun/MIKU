<template>  
    <div>
        <div class="red">
            <i class="ion-social-octocat"></i>
            <p><b>￥0</b></p>
            <p>总收益</p>
        </div>
        <p class="gray">分享收益</p>
        <ul>
            <li>
                <p style="color:#27bfbd;border:1px solid #27bfbd;">A</p>
                <p class="p">￥0</p>
            </li>
            <li>
                <p style="color:#ea824e;border:1px solid #ea824e;">B</p>
                <p class="p">￥0</p>
            </li>
            <li>
                <p style="color:#d498bb;border:1px solid #d498bb;">C</p>
                <p class="p">￥0</p>
            </li>
        </ul>
        <p class="gray amr">邀约收益</p>
        <ul>
            <li>
                <p style="color:#27bfbd;border:1px solid #27bfbd;">A</p>
                <p class="p">￥0</p>
            </li>
            <li>
                <p style="color:#ea824e;border:1px solid #ea824e;">B</p>
                <p class="p">￥0</p>
            </li>
            <li>
                <p style="color:#d498bb;border:1px solid #d498bb;">C</p>
                <p class="p">￥0</p>
            </li>
        </ul>
    </div>
</template>
<style scoped>
     .red{height:160px;background:#fd3636;margin-top:50px;border:1px solid transparent;}
     .red i{font-size:50px;color:#fff;display:block;margin:25px auto;width:50px;text-align:center;}
     .red p{font-size:23px;color:white;width:70px;margin:0 auto;text-align:center; }
     .red p:nth-child(3){font-size:17px;margin-top:10px;}
     .gray{padding:10px 42%;width:100%;}
     ul{margin-top:-12px;}
     ul li {width:calc(100% / 3);float:left;text-align:center;background:white;border-right:1px solid #ccc;}
     ul li p:nth-child(1){margin-top:25px;width:25px;height:25px;line-height:25px;margin:20px auto;border-radius:50%;font-size:18px;}
     .p{font-size:17px;color:#ea824e;}
     .amr{margin-top:110px;}
</style>
<script>
     export default{
          
     }
</script>