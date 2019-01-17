/**
 * 登录模块的接口
 * */
import base from './base';  //接口域名列表
import axios from '@/utils/http'; //导入创建的axios实例
import qs from 'qs'; //序列化post请求的

let www = base.proxy;

//开始定义接口
const login = {
    loginApi1(params){
        return axios.get(`${www}/ajax/detailmovie`,{
            params: params
        })
    },
    loginApi2(params){
        return axios.post(`${www}/ajax/movie`,qs.stringify(params))
    }

    // 登录模块的其他接口
    // ... ...
};

export default login;
