import axios from "axios";


let http = axios.create({
    withCredentials:true,
    timeout:2000
})

// 请求拦截
http.interceptors.request.use((config)=>{
    if(config.method == "get"){
        config.params = {...config.data}
    }else{
        config.headers["content-type"] == "application/x-www-form-urlencoded";
    }
    return config;
},(err)=>{
    return Promise.reject(err);
})

// 响应拦截
http.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
})

export default (method,url,data)=>{
    //    if(method == "get"){
//       return http.get(url,{
//            params:data
//        })
//    }else if(method == "post"){
//        return http.post(url,data);
//    }
    return http({method,url,data});
}