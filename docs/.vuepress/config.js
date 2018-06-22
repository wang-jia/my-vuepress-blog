module.exports = {
  title: "Wj's Blog", 
  description: '敬请期待',
  head: [
      ['link', { rel: 'icon', href: '/imgs/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'apple-touch-icon', href: '/imgs/logo.png' }],
  ],
  serviceWorker: true, // 配置PWA,
  // theme: 'vue',
  themeConfig: {
    repo: 'wang-jia',
    editLinks: true,
    docsDir: 'docs',
    sidebar: 'auto',
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', 
      // 下拉列表
      items: [
        { text: 'webpack构建工具', link: '/blogs/webpack'},
        { text: '数据可视化', link: '/blogs/chart'},
        { text: 'Vue骨架屏', link: '/blogs/vue-skeleton'}
      ]},
      { text: '关于我', link: '/me/' },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/blogs/': [
        {
          collapsable: false,
          children: [
            'webpack',
            'chart',
            'vue-skeleton'
          ]
        }
      ]
    }
  }
}
