---
title: 流量主配置
date: 2022-02-04
categories:
 -  小程序
---

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
