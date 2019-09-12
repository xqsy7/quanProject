export default {
    path:"/home",
    name:"Home",
    // 路由懒加载
    component:()=>import("@pages/home"),
}