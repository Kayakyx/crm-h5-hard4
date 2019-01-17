/**
 * api接口的统一出口
 */
/*
    index.js是一个api接口的出口，这样就可以把api接口根据功能划分为多个模块，利于多人协作开发，比如一个人只负责一个模块的开发等，还能方便每个模块中接口的命名哦。
*/

// 文章模块接口
import article from '@/api/article';
//登录模块接口
import login from '@/api/login';
// 其他模块的接口……

// 暴露接口
export default {
    article,
    login
    // ……
}