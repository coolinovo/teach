import axios from 'axios'
import { Message } from 'element-ui'

let baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://192.168.0.113:8085'

const service = axios.create({
    baseURL,
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        if (token) {
            config.headers['Authorization'] = token
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        return config
    },
    err => console.error(err)
)

service.interceptors.response.use(
    config => {
        if (res.data.code === 200) {
            return res.data.data
        } else {
            Message(
                { message: '请求失败！', type: 'error' }
            )
        }
    }
)

export default service