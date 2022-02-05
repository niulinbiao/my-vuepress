---
title: 字体配置（app.wxss）
date: 2022-02-04
categories:
 -  小程序
---

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