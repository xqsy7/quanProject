<template>
    <div id="app">
        <router-view></router-view>
        <TabBar v-if="$route.meta.flag"/>
        <AsideFixed/>
    </div>
</template>

<script>
import TabBar from "@components/tabBar";
import AsideFixed from "@components/asideFixed";

export default {
    name:"App",
    components:{
        TabBar,
        AsideFixed,
    },
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