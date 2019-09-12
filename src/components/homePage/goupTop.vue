<template>
    <div class="group-top">
        <div class="box"></div>
        <div class="top-line">
            <div class="left">
                <img src="/public/img/youhuitop.png" alt="">
            </div>
            <div v-for="(item,index) in lineData" :key="index"
            class="right"
            >
                <a href="" class="text-a">
                    <div>
                        <p class="text-p">
                            <span>{{item.tag}}</span>
                            {{item.name}}
                        </p>
                    </div>
                    <em>&gt;</em>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import http from "../../utils/http";
export default {
    name:"GroupTop",
    data(){
        return {
            lineData:[],
        }
    },
    created(){
        http("get","/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=10023&proModelId=13&source=3&userId=669231&tuserId=669231")
        .then((data)=>{
            this.lineData = data.data.config.list;
        })
    }
}
</script>

<style scoped>
.group-top{
    position: absolute;
    top: 10.922rem;
    height: .8rem;
    margin-bottom: 2rem;
}
.box{
    height: 1px;
    background: #EFEFEF;
    width: 100%;
}
.top-line{
    height: 100%;
    width: 95%;
    display: flex;
    align-items: center;
    background: #fff;
    margin-left: .2rem;
    margin-right: .2rem;
    border-radius: 0 0 .1rem .1rem;
}
.left{
    width: 1.08rem;
    height: .28rem;
    margin: -.08rem .24rem 0;
}
.left img{
    width: 100%;
    height: 100%;
}   
.right{
    height: .2rem;
    width: 2.8rem;
    position: relative;
    z-index: 1;
    zoom: 1;
    top: .04rem
}
.text-a{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.text-p{
    line-height: .14rem;
    box-sizing: border-box;
    padding: .02rem;
    font-size: .2rem;
}
.text-p span{
    display: inline-block;
    min-width: .48rem;
    padding: 0 .1rem;
    height: .24rem;
    background: linear-gradient(90deg,#ff9676 0,#ff7913 100%);
    border-radius: .07rem;
    font-size: .2rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fff;
    line-height: .24rem;
    margin-right: .08rem;
}
.text-p em{
    font-size: .2rem;
    font-weight: 400;
}

</style>