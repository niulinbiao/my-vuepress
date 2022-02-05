---
title: 基础配置
date: 2022-02-04
---

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
