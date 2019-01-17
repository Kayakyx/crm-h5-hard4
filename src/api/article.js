// 模拟 假设我们有个文章模块
/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块,以便进行序列化（FormData）post请求。

let www = base.proxy;
const article = {
    //以下接口都是用来，模拟当做实例的。
    // 新闻列表
    articleList () {
        return axios.get(`${www}/ajax/movieOnInfoList?token=`);
    },
    // 新闻详情,演示
    articleDetail (params) {
        return axios.get(`${www}/ajax/detailmovie`, {
            params: params
        });

    },
    // post提交
    //有这样一个post接口 http://m.maoyan.com/ajax/movie ，传参为 {forceUpdate：1547620659240}
    articleApi1 (params) {
        return axios.post(`${www}/ajax/movie`, qs.stringify(params)); //FormData提交
    },
    articleApi2(params){
        return axios.post(`${www}/ajax/movie`,params);
    }

    // article模块其他接口…………
};

export default article;
