# vue-test

# manage-system #
基于Vue.js+ Element UI 的后台管理系统

## 前言 ##
基于Vue.js+ Element UI 的后台管理系统
## 功能 ##
- [x] Element UI
- [x] 登录
- [x] 表格
- [x] Tab选项卡
- [x] 表单
- [x] 富文本编辑器


## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|   |-- webpack.base.conf.js                   // 打包依赖路径
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- components                   // 组件
	|           |-- leftNav.vue           // 公共侧边栏
	|           |-- pageNation.vue           	 // 公共分页组件
	|           |-- VueEditor.vue          // 富文本编辑器
	|   |-- view                   	 // 主要路由页面
	|     |-- children                   	 // 二级页面
	|           |-- certificetionAduit             //认证审核
	|             |-- accountMangement.vue         //账号管理
	|             |-- serviceDemand.vue            //服务需求方
	|             |-- serviceProvide.vue           //服务供应方
	|           |-- consultingMangement             //资讯管理
  	|             |-- news2.vue         //资讯管理列表页
  	|             |-- newsAdd.vue       //咨询添加页面
	|     |-- index.vue       // 首页
	|     |-- login.vue         // 登录
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

	git clone https://github.com/lin-xin/vue-manage-system.git      // 把模板下载到本地
	cd vue-manage-system    // 进入模板目录
	npm install         // 安装项目依赖，等待安装完成之后

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8080
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

## 组件使用说明与演示 ##

### element-ui ###
一套基于vue.js2.0的桌面组件库。访问地址：[element](http://element.eleme.io/#/zh-CN/component/layout)

### Vue-Quill-Editor ###
基于Quill、适用于Vue2的富文本编辑器。访问地址：[vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)

## 其他注意事项 ##
### 一、如果我不想用到上面的某些组件呢，那我怎么在模板中删除掉不影响到其他功能呢？ ###

举个栗子，我不想用 Vue-Quill-Editor 这个组件，那我需要分四步走。

第一步：删除该组件的路由，在目录 src/router/index.js 中，找到引入改组件的路由，删除下面这段代码。

```JavaScript
{
    // 富文本编辑器组件
    path: '/editor',
    component: resolve => require(['../components/page/VueEditor.vue'], resolve) 
}
```

第二步：删除引入该组件的文件。在目录 src/components/page/ 删除 VueEditor.vue 文件。

第三步：删除该页面的入口。例如在目录 src/views/children/newsAdd.vue 中，找到该入口，删除引入路径 删除组件内注册。
 import vueEditor from '@/components/VueEditor'   // 分页组件
 components:{
         vueEditor
     },

第四步：卸载该组件。执行以下命令：
	
	npm un vue-quill-editor -S

完成。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
