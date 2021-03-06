module.exports = {
  title: "云图博客",
  description: '云图博客网',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '文档', 
        icon: '信息',
        items: [
          { text: '云图blog1.0', link: '/docs/yuntublog/' }
        ]
      },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '联系我们', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/niulinbiao', icon: 'reco-github' },
          { text: 'Gitee', link: 'https://gitee.com/niusongcun', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/docs/yuntublog/': [
        {
          title: '部署指南',
          collapsable: true,
          children: [
            ''
          ]
        },
        {
          title: '基本配置',
          collapsable: true,
          children: [
            'dl-code',
            'base-config'
          ]
        },
        {
          title: '云函数配置',
          collapsable: true,
          children: [
            'cloud-config',
            'cloud-config1',
            'cloud-config2',
            'cloud-db-config',
            'font-config',
            'router-official',
            'post-config',
            'ad-config'
          ]
        },
        {
          title: 'halo后台配置',
          collapsable: true,
          children: [
            'halo-config'
          ]
        },
        {
          title: '谁在用',
          collapsable: true,
          children: [
            'who-use'
          ]
        }
      ]
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink: [
      {
        title: 'IOS资源',
        desc: '提供IOS共享账号、海外苹果账号，免费下载付费应用',
        email: 'a742111488@qq.com',
        link: 'https://www.onetuyun.top',
        avatar: "https://s4.ax1x.com/2021/12/19/TZZnHO.jpg"
      },
      {
        title: '云图博客',
        desc: '基于Halo博客框架的个人微信小程序',
        avatar: "https://s4.ax1x.com/2022/02/05/Hmab9S.png",
        link: 'https://my-vuepress-brown.vercel.app/'
      },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '今晚打老虎',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: '豫ICP备2021030497号-2',
    // 项目开始时间
    startYear: '2021'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  }
}  
