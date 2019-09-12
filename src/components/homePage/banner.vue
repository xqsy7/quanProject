<template>
    <div class="banner">
        <div class="bacColor"></div>
        <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-wrapper">
                <div class="swiper-slide imgBox"
                    v-for="(item,index) in bannerImg" :key= "index"
                    >
                    <img :src="item.pic" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <ul>
            <li v-for="(item,index) in ulData" :key="index" :class="index==0?'bigImg':'leftImg'">
                <img :src="item.address" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
import http from "@utils/http"
export default {
    name:"Banner",
    data(){
        return{
            bannerImg:[],
            ulData:[]
        }
    },
    mounted(){
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
            autoplay: true,//可选选项，自动滑动
            // effect : 'fade',
            pagination: {
                 el: '.swiper-pagination',
            },
        })
    },
    created(){
        http("get","/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=-1&proModelId=1&source=3&userId=669231&tuserId=669231")
        .then((data)=>{
            this.bannerImg = data.data.config;
        });
        http("get","/api/category/product/model-detail-by-model-id-new?entityId=4&modelId=10021&proModelId=19&source=3&userId=669231&tuserId=669231")
        .then((data)=>{
            this.ulData = data.data.config;
        })
    }
}
</script>

<style scoped>

.banner{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 2rem;
    z-index: 101;
    margin-bottom: .1rem;
}
.bacColor{
    width: 100%;
    height: 3rem;
    position: absolute;
    top: -.1rem;
    background: #48a6db;
}
.imgBox{
    width: 8rem;
    height: 3.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: .2rem;
    margin-right: .2rem;
}
.imgBox img{
    width: 7rem;
    height: 100%;
    border-radius: .1rem;
}
.banner ul{
    width: 100%;
    margin-top: .1rem;
}
.bigImg{
    width: 100%;
    height: 2rem;
    overflow: hidden;
    border-radius: .05rem;
    margin-bottom: .1rem;
}
.bigImg img{
    border-radius: .05rem;
    width: 100%;
    height: 100%;
}
.leftImg{
    float: left;
    width: 3.6rem;
    height: .85rem;
    border-radius: .05rem;
    margin-top: .05rem;
    margin-left: .1rem;
}
.leftImg img{
    width: 3.5rem;
    height: 1.7rem;
    border-radius: .1rem;
}

</style>