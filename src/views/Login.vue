<template>
    <div class="app-container">
        <form>
            <div class="login-group">
                <div class="login-item">
                    <span class="icon icon-user"></span>
                    <input type="text" placeholder="邮箱/手机号" v-model="username" />
                </div>
                <div class="login-item">
                    <span class="icon icon-lock"></span>
                    <input type="password" placeholder="密码" v-model="password" />
                </div>
                <div class="login-item">
                    <div id="register">注册</div>
                    <div id="forgot">忘记密码</div>
                </div>
                <div class="login-item" @click="toLogin">
                    登录
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import {
        loginReq
    } from '../api/index'

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            // 发送登录请求
            async toLogin() {
                let userinfo = {
                    username: this.username,
                    password: this.password
                }
                const res = await loginReq(userinfo)

            }
        }
    }
</script>

<style lang="less" scoped>

</style>