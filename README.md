### <p align="center">基于`HbuilderX`可视化创建的`uni-app`模板</p>

### 使用：

+ 项目下载：`git clone https://github.com/ljxyaly/uni_app_huilderx_template.git`
+ 安装依赖：`npm install`
+ 运行：使用`HbuilerX`工具运行到各个相应平台

**内置了常用基础功能，包括`axios`的封装，全局变量的实现，工具函数的封装等**

+ 全局安装：`cnpm install -g tree-node-cli`
+ 打印出项目目录结构：`treee -L 3 -I "node_modules|.git|uview-ui" -a --dirs-first`

### 目录说明：
```bash
├── api                            全局api存放         
│   ├── modules                    api模块    
│   │   ├── activity.js
│   │   ├── admin.js
│   │   ├── api.js
│   │   ├── order.js
│   │   ├── public.js
│   │   ├── store.js
│   │   └── user.js
│   ├── index.js
│   └── request.js                 axios请求配置 
├── config                         全局公共配置
│   ├── app.js                     
│   └── cache.js    
├── libs
│   ├── login.js                   登录js
│   ├── routine.js                 小程序相关js
│   └── wechat.js                  公众号相关js
├── pages                          页面存放
│   └── index
│       └── index.vue
├── plugin                         插件
│   └── jweixin-module             微信SDK
│       └── index.js
├── static                         静态文件
│   └── logo.png
├── store                          vuex全局状态管理
│   ├── modules
│   │   ├── app.js
│   │   └── index.js
│   ├── getters.js
│   └── index.js
├── utils                          工具函数
│   ├── cache.js
│   └── index.js
├── App.vue
├── main.js
├── manifest.json
├── package-lock.json
├── package.json
├── pages.json
├── README.md
└── uni.scss
```

