// 封装axios
import axios from 'axios'
import Cookies from 'js-cookie'
//在开发环境中的测试 development
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/'
}
//在生产环境中的测试 production
if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '/'
}
//还有一种环境 debug
//响应超时的时间
axios.defaults.timeout = 5000;

let token = Cookies.get("qingline_token")


export function get(url, headers, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: headers,
            params: params
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

//封装接口的方法
export const getReceiveStatus = () => {
    if (!token) {
        redirect = encodeURIComponent(redirect);
        window.location.href = `https://www.qingline.net/login?redirect=${redirect}`;
    } else {
        axios.defaults.headers.common['Authorization'] = `${token}`    
    }

    const url = 'api/textbook/info/523'
    const headers = {
      'Content-Type': 'multipart/form-data'
    }
    return get(url, headers)
  }


