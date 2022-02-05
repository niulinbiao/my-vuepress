---
title: 云函数配置①
date: 2022-02-04
---

 ## 云函数环境配置①

***重要，不配置则小程序无法评论***（因为用到了云函数所以需要在开发控制台开通[云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)，并在app.js配置云环境ID） 云端安装部署<font style="color: #D35400;">msgseccheck </font>云函数

```
wx.cloud.init({
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'xxxxxxx',//换成自己的云环境ID
        traceUser: true,
      })

```
