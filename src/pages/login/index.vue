<template>
    <div class="login">
        <div class="head">
            <em class="iconfont iconfont1" @click="clickBackHandler()">&#xe6f3;</em>
            <a href="">
                <h1>登陆</h1>
            </a>
        </div>
        <div class="layout">
            <form action="">
                <label>
                    <div class="phone">
                        <i class="iconfont iconfont2">&#xe697;</i>
                        <input type="text" placeholder="手机号码">
                        <i class="iconfont iconfont3">&#xe615;</i>
                        <p>请输入正确11位的手机号码！</p>
                    </div>
                </label>
                 <label>
                    <div class="password">
                        <i class="iconfont iconfont4">&#xe623;</i>
                        <input type="password" placeholder="密码">
                        <i class="iconfont iconfont5">&#xe718;</i>
                        <p>请输入正确11位的手机号码！</p>
                    </div>
                </label>
                <div class="btn">
                    <button class="btn1">登陆</button>
                </div>
                <div class="resiger">
                    
			    还没有账号？立即
                <a href="#/register">注册</a>
                </div>
            </form>
        </div>
        <div class="foot">
            <div class="login-Y">
                验证码登陆
            </div>
            <div class="password-Z">
                找回密码
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
    methods:{
        clickBackHandler(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
.login{
    height: 100%;
     background: #ffffff;
}
.head{
    height:100%;
   margin-bottom: 1rem;
}
.head h1{
    text-align: center;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: #333;
    position: relative;
    z-index: 2;
    zoom: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 300;
}
.iconfont1{
    float: left;
    height: 45px;
    font-size: .4rem;
    line-height: 45px;
    margin-left: .2rem;
}
.layout{
    width: 100%;
    height: 100%;
}
.layout form{
    width: 6rem;
    margin:0 auto;
}
.iconfont2,.iconfont5{
    line-height: 1.3rem;
    text-indent: .2rem;
    color: #666;
    font-size: .4rem;
}
 .iconfont3,.iconfont4{
     line-height: 1.3rem;
    text-indent: .2rem;
     margin-left: .1rem;
     font-size: .4rem;
 }
 
.layout form input{
    color: #333;
    font-size: .3rem;
    border: 0;
    width: 90%;
    background: 0 0;
    width: 4rem;
    height:.45rem;
    margin-right: .1rem;
    margin-left: .1rem;
}
.phone,.password{
    height: 1.3rem;
     border-bottom: 1px solid #eee;
}
.btn{
    margin-top: .8rem;
    width: 100%
}
.btn1{
    margin: 0 auto;
    display: block;
    width: 5rem;
    background: #eee;
    color: #666;
    font-size: .3rem;
    height:.8rem;
    border: 0;
    border-radius: .2rem;
}
.resiger{
    margin: .2rem .2rem 0;
    font-size: .28rem;
}
.resiger a{
    color: #1991EB;
}

.foot{
    width: 100%;
    margin-top: 1rem;
    padding-bottom: 10em;
}

.login-Y{
    float: left;
    margin-left: 2rem;
    font-size: .25rem;
    color: #666;
}
.password-Z{
    float: right;
    margin-right: 2rem;
    font-size: .25rem;
    color: #666;
}

</style>