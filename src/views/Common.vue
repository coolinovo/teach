<template>
    <el-container>
        <el-header>
            <div class="logo">
                <!--                    <img src="" alt="logo">-->
                logo
            </div>
            <div class="to-home">
                <!--                    <img src="" alt="">-->
                home
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <!-- 用户信息 -->
                <el-row class="user-row">
                    <el-col :span="24"></el-col>
                </el-row>
                <!-- 课程列表 -->
                <el-row class="course-row">
                    <el-col :span="24">
                        <el-row>
                            <el-col :span="24">
                                课程学习页面
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <div class="menu">
                                    <div class="submenu">课程</div>
                                    <div class="menu-group">
                                        <ul>
                                            <li class="menu-item"><span>内容1</span></li>
                                            <li><span>内容2</span></li>
                                            <li><span>内容3</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-aside>
            <!-- 子组件内容区域 -->
            <el-main>

                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import { loginReq } from '../api'

    export default {
        name: "Common",
        data() {
            return {
                list: [],
                detail_list: []
            }
        },
        methods: {
            async getList() {
                const res = await loginReq()
                console.log(res)
                this.list = res
            }
        },
        created() {
            this.getList()
        },
        mounted() {
            $(document).ready(function(){
                $(".menu").click(function(){
                    $(".submenu").slideToggle("slow")
                })
            })
        }
    }
</script>

<style lang="less" scoped>
    .el-container {
        width: 100%;
        height: 100%;

        .el-header {
            background-color: lightblue;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .el-container {

            .el-aside {
                background-color: lightcoral;

                .user-row {
                    width: 100%;
                    height: 40%;
                    background-color: #000;
                }

                .course-row {
                    width: 100%;
                    height: 60%;
                    background-color: #fff;
                }
            }

            .el-main {
                background-color: lightgreen;
            }
        }
    }
</style>