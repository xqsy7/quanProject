export default {
    name:"Collection",
    path:"/collection",
    // 按需加载引入===>路由的懒加载
    component:()=>import("@pages/collection"),
}