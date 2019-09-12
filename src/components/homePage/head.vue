<template>
    <div class="head">
        <div class="seach">
                <div class="seach1">
                <router-link to="/seach" tag="div" class="seach-R">
                    <div class="seach2">
                        <span class="seach3">
                            <span class="iconfont">&#xe633;</span>
                            输入商品名或粘贴宝贝标题搜索
                        </span>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- 导航栏 -->
        <div class="nav">
            <div class="nav1">
                <div class="nav-center">
                    <div class="selected">
                        <span>精选</span>
                        <div></div>
                    </div>
                    <div class="center">
                        <div v-for="(item,index) in headData" :key="index">{{item}}</div>
                    </div>
                    <div class="iconfont select">&#xe64d;</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Head",
    data(){
        return {
            headData:["女装","居家日用","美妆","男装","数码家电"]
        }
    },
    
}
</script>

<style scoped>

.head{
    width: 100%;
    height: 1.9rem;
    width: 100%;
    margin: auto;
    background: #48a6db;
    position: fixed;
    z-index: 1111;
    overflow: hidden;
    top:0;
    left:0;
    border-bottom: 1px solid rgba(0,0,0,0);
    margin-bottom: 4rem;
}
.seach1{
    height: .9rem;
    overflow: hidden;
    display: flex;
    margin: auto auto .08rem;
    align-items: center;
    box-sizing: border-box;
    padding-right: .2rem;
}
.seach-R{
    width: 100%;
}
.seach2{
    flex: 1;
    height: .64rem;
    background: #fff;
    border-radius: .72rem;
    margin-left: .18rem;
    margin-top: .18rem;
    display: flex;
    align-items: center;
}
.seach3{
    height: .64rem;
    font-size: .3rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #999;
    line-height: .58rem;
    display: inline-block;
    padding-left: .24rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.iconfont{
    font-size: .36rem;
    margin-right: .16rem;
    font-weight: 400;
}
.nav{
    background: rgba(0,0,0,0);
    width: 100%;
    max-width: 100%;
    overflow: inherit!important;
    padding-bottom: 0;
}
.nav1{
    height: .8rem;
    position: relative;
    zoom: 1;
    line-height: .8rem;
}
.nav-center{
    margin: 0 .15rem 0 .3rem;
    position: relative;
    z-index: 1;
    zoom: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.selected{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: .34rem;
    font-weight: 400;
    color: #fff;
}
.selected span{
    width:100%;
    font-size: .34rem;
    line-height: .75rem;
}
.selected div{
    width: .6rem;
    height: .05rem;
    background:#fff;
}
.center{
    margin-left: .2rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: .34rem;
    color: rgba(255,255,255,.65);
}
.center div{
    margin-left: .05rem;
}
.select{
    position: absolute;
    right: 0rem;
    color: #fff;
}
</style>