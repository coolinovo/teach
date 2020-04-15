import service from './request'

// 登录请求
export const loginReq = userinfo => {
    service.post('/login', userinfo)
}

// 获取课程列表
export const listReq = () => {
    service.get('/military/course/lsit')
}