---
title: 小程序配置
date: 2022-02-04
---

## 从git仓库下载稳定包或者稳定分支[源码](https://gitee.com/niusongcun/yuntu-blog/tree/master/)，用微信开发工具打开源码
<font style="color: #D35400;">注意：master分支是最新的代码，如果想要体验最新的未发布版本，直接拉取主分支即可，正常来说主分支的代码均可稳定运行</font>
## 基础配置
<font style="color: #D35400;">项目路径 -> app.js 文件中</font>
```this.globalData = {
      domain:'https://xxx.com',   //自己的域名
      baseUrl: 'https://xxx.com/api', //自己的域名+/api
      api_access_key:"xxxxxx", //token  halo后台自己设置
      index_bg_image_url:"https://s4.ax1x.com/2022/01/24/7TtDJO.png",//首页背景
      title:"云图博客",//自定义title
      shareName:'云图博客网',//小程序分享名称
      userInfo:undefined,//登录用户信息储存处   不用写
      admin_token: undefined,//临时 token undefined  不用写
      authorInfo:undefined,//作者信息  不用写
      myCollectArticle:'myCollectArticle',//云数据库 存放收藏文章
      openComment:true,//是否开启评论 true为开启 false为关闭
      openAd:false,//流量主开通则打开
      unitId:'自己的原生模板广告ID',//原生模板广告ID  自定义的时候子集可以选择样式  也可以在全局配置中配置
      unitId2:'自己的视频激励广告ID',//视频激励广告--用于文章设置观看视频阅读更多功能
      config:{},//全局配置  
    }

```
- <font style="color: #D35400;">domain</font>：自己的域名
- <font style="color: #D35400;">baseUrl</font>：基础的API（halo博客的）
- <font style="color: #D35400;">api_access_key</font>：博客后台开启api后设置的token
- <font style="color: #D35400;">index_bg_image_url</font>：背景图地址
- <font style="color: #D35400;">title</font>：自定义小程序title
- <font style="color: #D35400;">shareName</font>：小程序分享名称
- <font style="color: #D35400;">userInfo</font>：不用配置
- <font style="color: #D35400;">admin_token</font>：不用配置
- <font style="color: #D35400;">authorInfo</font>：不用配置
- <font style="color: #D35400;">myCollectArticle</font>：云数据库中的收藏文章数据表名称

## 云函数配置
将下方的云函数全部上传并部署

![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-221daa0f39834657bdaeec1dc7bd7f75.png)

云函数总共有三个需要在云端安装 ：
 - <font style="color: #D35400;">login </font>：不用配置:用于登录 
 - <font style="color: #D35400;">msgseccheck</font>：敏感词校验 
 - <font style="color: #D35400;">login-halo</font>：halo后台一键登录
 ### 云函数环境配置①

***重要，不配置则小程序无法评论***（因为用到了云函数所以需要在开发控制台开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)，并在app.js配置云环境ID） 云端安装部署<font style="color: #D35400;">msgseccheck </font>云函数

```
wx.cloud.init({
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'xxxxxxx',//换成自己的云环境ID
        traceUser: true,
      })

```
### 云函数环境配置②
***重要：用于配置一键登录管理后台的功能***
- 在前面的基础上，云端安装部署<font style="color: #D35400;">login-halo</font>云函数
- 小程序工具打开云开发控制台->云函数->选择login-halo云函数->打开右边<font style="color: #D35400;">版本与配置</font>->列表中打开最新版本的<font style="color: #D35400;">配置</font>->点开<font style="color: #D35400;">高级配置</font>->设置三个变量如下：
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-634b54ef4eac412c869909c244ec8e0e.png)
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-b1194b177e354d96bd8349c851efaa14.png)
> 参数说明：
> - <font style="color: #D35400;">pwd_halo</font>: halo的后台密码，
> - <font style="color: #D35400;">username_halo</font>: halo的后台登录账号,
> - <font style="color: #D35400;">openId_me</font>: 个人openID

> （个人openID每个微信用户特有的，可以自己在小程序的<font style="color: #D35400;">login</font>云函数中获取） 
### 云数据库配置
> 用于储存收藏的文章
1. 打开云控制台
2. 点击 <font style="color: #D35400;">数据库</font> - > '集合名称右侧的小加号' 创建集合 集合名字为：<font style="color: #D35400;">myCollectArticle</font>
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-6bacb70ac18e4ccc9f9d93f1f1338afb.png)
> 用于友情链接与全局配置

将源码中的数据文件<font style="color: #D35400;">db.json</font>导入云数据库
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-bfb69dbb3ab54f98ab2255da8e967ebd.png)

点击<font style="color: #D35400;">云开发控制台</font>-><font style="color: #D35400;">更多</font>-><font style="color: #D35400;">内容管理</font>
点击开通后进入到你的<font style="color: #D35400;">内容管理平台</font>，然后创建一个你的项目

![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-71c04c6bc1524920a943a1e02bf8cb2f.png)

点击<font style="color: #D35400;">内容管理</font>-><font style="color: #D35400;">导入模型</font>
将<font style="color: #D35400;">db.json</font>导入即可
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-7de9f765ca2840ac95651d122d9bec60.png)
> 参数说明
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-8f33b90ba1374d2a9dfbae031e5ff99c.png)
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-90aadf3a650541f58a6280b0b19284b5.png)
## 字体配置
> ***可选操作，默认即可***

> 自定义字体显示***只有一部分特定的中文字体***，***所有英文，数字***

> 使用过程中如果***有想要单独使用字体***的，后续***我可以添加到字体文件中***，***然后发布新的字体链接版本***
```
@font-face {
  font-family: 'CUSTOM_FONT_T_01';
  src: url('https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/img-article/2021032601fangzhengziji_xingkaijianti.ttf');
}

@font-face {
  font-family: 'CUSTOM_FONT_T_02';
  src: url('https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/img-article/2020032601jianghaoyingbikaishu.ttf');
}

```
## 跳转公众号文章配置
发表文章时在halo后台配置<font style="color: #D35400;">元数据</font>：key为 <font style="color: #D35400;">gzhURL </font>value为：<font style="color: #D35400;">公众号文章链接</font>
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-713c0d54897e48cc932192ecf155f167.png)
## 海报生成的二维码配置
在<font style="color: #D35400;">my-config</font>数据表中的<font style="color: #D35400;">海报URL</font>替换即可
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-6f5bbb24bdab4666877d266eebb74bd0.png)
## 流量主配置
- 登录后台，开通流量主
- 按照下面创建<font style="color: #D35400;">原生模板广告</font>和<font style="color: #D35400;">激励式广告</font>

<br/>

> <font style="color: #D35400;">原生模板广告</font>,注意修改样式 保证和文章列表渲染匹配

![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-5ecc3ffc3adb4f74849c94ff380a8d84.png)
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-6cf3d67766464cd3880123c2e8f6fa3b.png)
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-7e154333c92a4c178582d93057591ed0.png)

> ***激励式广告，这个和halo文章设置元数据有关，因为需要您在发布文章的时候指定参数如下***
- 微信后台创建广告
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-195a1c9eff1e43e58c94c502660ddbc2.png)
- halo后台创建元数据
  -  <font style="color: #D35400;">showAd: true/false</font>是否展示激励广告
  - <font style="color: #D35400;">maxShowHeight number </font>类型的数字 对应文章在展示激励广告时可见内容高度 <font style="color: #D35400;">不设置默认在1500</font>
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-7211578103574bcab35025c468a80375.png)
<br/>
- 复制对应的广告id填写到<font style="color: #D35400;">my-config</font>数据表中，也可以写死在<font style="color: #D35400;">app.js</font>配置文件中
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-6b74d74197bf450eb33905fbb1245a5e.png)

``` 
this.globalData = {
      ...
      openAd:false,//流量主开通则打开
      unitId:'自己的原生模板广告ID',//原生模板广告ID  自定义的时候子集可以选择样式  也可以在全局配置中配置
      unitId2:'自己的视频激励广告ID',//视频激励广告--用于文章设置观看视频阅读更多功能
      config:{},//全局配置  
    }

```
