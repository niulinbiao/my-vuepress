---
title: halo后台配置
date: 2022-02-04
---
# halo后台配置
## 配置指南
```登录后台管理```->```系统```
->```博客设置```->```切换到高级选项```（***右上角小字***） ->```API设置```->```API服务开启```->```设置acessKey```(***小程序端所需的***)
> 这个地方的```acessKey``` 就是小程序端的```api_access_key```

``` 
    this.globalData = {
      domain:'https://xxxx.com',   //自己的域名
      baseUrl: 'https:/xxxx.com/api', //自己的域名+/api
      api_access_key:"xxxx", //token  halo后台自己设置
      ...... 
    }
```
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-8212eba711f7450791a7a904a61df979.png)
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-63a13ee4064e4fb39fa7b7b867bd8978.png)
![image.png](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/02/image-58f92c5bbdea481abd12ea12d7b8988f.png)

