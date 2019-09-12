<template>
  <div class="content">
    <div class="qq">
        <span>QQ：</span>
        <span>872343474</span>
        <span>在线交谈</span>
      </div>
      <div class="tel">
        <span>Tel：</span>
        <span>13894906386</span>
      <span>立即拨打</span>
    </div>
    <div class="cry"> 
    <img src="https://cmsstatic.dataoke.com/wap_new/common/images/ui-def.png?v=2019-09-11">
    </div>
  </div>
</template>
<script>
export default {
  name: "Content"
};
</script>
<style scoped>
.content{
    width:100%;
    height:auto;
}
.content .qq{
    width:100%;
    background:white;
    position: relative;
    height: 80px;
    
    padding: 22px 0;
    /* font-size:30px; */
    border-bottom: #eee 1px solid;
}
.content .qq span:nth-of-type(1){
    font-size:20px;
    padding-left:30px;
    color:#9e9e9e;
    padding-right:40px;
}
.content .qq span:nth-of-type(2){

    font-size:24px;
    color:#9e9e9e;
    width:70%;
}
.content .qq span:nth-of-type(3){
    border-radius: 3px;
    height:30px;
    font-size:10px;
    color:#fe4a65;
    border:1px solid #fe4a65;
    margin-top:8px;
    height:20px;
    width:70px;
    text-align:center;
    padding-top:2px;
    float: right;
    margin-right:30px;

}
.content .tel{
    width:100%;
    background:white;
    position: relative;
    height: 80px;
    
    padding: 22px 0;
    /* font-size:30px; */
    border-bottom: #eee 1px solid;
}
.content .tel span:nth-of-type(1){
    font-size:20px;
    padding-left:30px;
    color:#9e9e9e;
    padding-right:30px;
}
.content .tel span:nth-of-type(2){

    font-size:24px;
    color:#9e9e9e;
    width:70%;
}
.content .tel span:nth-of-type(3){
    border-radius: 3px;
    height:30px;
    font-size:10px;
    color:#fe4a65;
    border:1px solid #fe4a65;
    margin-top:8px;
    height:20px;
    width:70px;
    text-align:center;
    padding-top:2px;
    float: right;
    margin-right:30px;
}
.content .wx{
    width:100%;
    background:white;
    position: relative;
    height: 80px;
    
    padding: 22px 0;
    /* font-size:30px; */
    border-bottom: #eee 1px solid;
}
.content .wx span:nth-of-type(1){
    font-size:20px;
    padding-left:30px;
    color:#9e9e9e;
    padding-right:30px;
}
.content .wx span:nth-of-type(2){

    font-size:28px;
    color:#9e9e9e;
    width:70%;
}
.content .wx span:nth-of-type(3){
    border-radius: 3px;
    height:30px;
    font-size:10px;
    color:#fe4a65;
    border:1px solid #fe4a65;
    margin-top:8px;
    height:20px;
    width:70px;
    text-align:center;
    padding-top:2px;
    float: right;
    margin-right:30px;
}
.cry{
    width:100%;
    display:flex;
    text-align: center;
    justify-content:center;
    align-items: center;
}
.cry img{
    width:60%;
    height:60%;
}
</style>