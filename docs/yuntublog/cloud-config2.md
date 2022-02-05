---
title: 云函数配置②
date: 2022-02-04
categories:
 -  云开发
---
## 云函数环境配置②
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
