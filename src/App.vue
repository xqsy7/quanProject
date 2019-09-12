<template>
    <div id="app">
        <router-view></router-view>
        <TabBar/>
        <AsideFixed/>
        
    </div>
</template>

<script>
// import MessageBox from "@lib/messageBox/index.js";
import TabBar from "@components/tabBar";
import AsideFixed from "@components/asideFixed";

export default {
    name:"App",
    components:{
        TabBar,
        AsideFixed,
        

    },
    // created(){
    //     // console.log(MessageBox);

    //     MessageBox.init({
    //         title:"nihao",
    //         content:"nihao",
    //     })
    // },
    data(){
        return {
           
        }
    }
}
</script>

<style scoped>
#app{
    overflow: hidden;
}


</style>