# crm-h5

这是一个app小架子，主要是为了我以后好起项目。

说明： 
	1.本项目使用了，VantUI框架
	2.项目借助postcss-plugin-px2rem 插件，将项目中的px，转转成
		rem（设计稿中，量多少就写多少px）。
	3.简单封装了 axios,并进行接口的统一管理,最后把封装好的接口挂载到了
		Vue原型上。

本项目中
（@代表src文件就夹）

@/utils文件夹及文件说明

    utils文件夹时，用来存放的封装axios的http.js 的，其他小工具你也可以放到这个文件夹里。（随便起的名字 ^_^）
    这个封装axios的http.js文件，会被引入到，定义模块接口的js文件中，例如 @api下的 login.js和article.js 中


--------------------
本项目中
@/api文件夹及内文件说明

api这块，考虑到一下需求：

1.更加模块化

2.更方便多人开发，有效减少解决命名冲突

3.处理接口域名有多个情况

这里这里呢新建了一个api文件夹，里面有一个index.js和一个base.js，以及多个根据模块划分的接口js文件。index.js是一个api的出口，base.js管理接口域名，其他js则用来管理各个模块的接口。

、、、、、、、、、、、、、、、、、

其它js说明：
article.js 是文章模块的 API 统一管理JS
login.js 是登录模块的   API 统一管理JS

、、、、、、、、、、、、、、、、、

相对于crm-h5-hard3 区别
	把每次发送请求要显示的Loading加载中,提成了一个Loading.vue 组件。通过vuex中的一个isLoading状态来决定显不显示  
	<正在加载> 提示组件。

、、、、、、、、、、、、、、、、、




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
