---
title: 指南
date: 2022-02-4
---

## 简介须知
此微信小程序是基于开源博客[Halo](Halo)提供的API开发，使用的前提是自己已经部署有自己的Halo博客网站。
## 基本功能
- 基本统计展示
- 最新和最热门文章展示
- 评论
- 文章永久收藏（即时删除原文收藏内容也持久化在云端）
- 分类
- 海报
- 日记（展示与小程序端发布）
- 相册
- 管理端（<font style="color: #D35400;">一键登录</font>，无需手动输入（当然也可以<font style="color: #D35400;">手动通过密钥登录</font>））
- 流量主开通（<font style="color: #D35400;">收益获取</font>）
## 准备
- 线上小程序必须使用<font style="color: #D35400;">备案过的域名</font>，因此您需要准备一个<font style="color: #D35400;">已备案域名</font>（***微信审核必须要的***）
<br>
- 一台服务器，halo后台的最低标准256M内存即可运行，宽带1M即可，如果嫌麻烦建议直接使用腾讯的[ServerLess](ServerLess)一键部署Halo后台(<font style="color: #D35400;">已经部署过halo的直接使用已有的即可，这个是给没有部署使用过halo的人建议的</font>)
- 微信小程序使用api必须是<font style="color: #D35400;">https</font>，因此需要自己的博客<font style="color: #D35400;">配置ssl证书。</font>
 <br>
- 上线自己的小程序需要微信自己的开发工具，因此需要下载<font style="color: #D35400;">微信开发者工具</font>([点击前往下载微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html))</font>
<br>
- <font style="color: #D35400;">bug</font>或者新功能添加请在仓库<font style="color: #D35400;">[issue](issue)</font>中提出
<br>
- 联系方式  ![](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-NLB_404-brightgreen)![](https://img.shields.io/badge/%E5%85%AC%E4%BC%97%E5%8F%B7-云图博客网-yellowgreen) NLB和404有一个下划线
## 小程序体验
![云图博客小程序](https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/upload/2022/01/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%A0%81-6dbdc03c86b44b588bdaa6606c725e6d.jpg)
## Halo开源博客地址
- [halo官网](https://halo.run/)
- [halo-GitHub地址](https://github.com/halo-dev/halo)
## 鸣谢
 - Halo 高颜值轻便开源个人博客
<br>
 - lin-ui 简洁美观的小程序UI组件
 <br>
 - mp-html 富文本和markdown渲染组件
 <br>
 - vant 众多人喜欢的小程序渲染组件
 <br>
 -  color-ui 色彩绚丽的UI组件库
 <br>