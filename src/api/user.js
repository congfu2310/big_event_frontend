// 导入request.js
import request from '@/utils/request.js'

//提供调用注册接口的函数，用于将对象转换为 URL 编码的参数字符串
export const userRegsiterService = (registerData) => {
    //借助URLSearchParams完成传递
    const params = new URLSearchParams()
    //将数据转换为 application/x-www-form-urlencoded 格式
    for (let key in registerData) {
        params.append(key, registerData[key])
    }
    //发送 POST 请求
    return request.post('/user/register', params)
}


//提供调用登录接口的函数
export const userLoginService = (loginData) => {
    const params = new URLSearchParams()
    for (let key in loginData) {
        params.append(key, loginData[key])
    }
    return request.post('/user/login', params)
}

//获取个人信息
export const getUserInfoService = () => {
    return request.get('/user/userInfo');
}

//修改个人信息
export const updateUserInfoService = (userInformation) => {
    return request.put('/user/update', userInformation)
}

//修改头像
export const userAvatarUpdateService = (avatarUrl) => {
    let params = new URLSearchParams();
    params.append('avatarUrl', avatarUrl)
    return request.patch('/user/updateAvatar', params)
}
