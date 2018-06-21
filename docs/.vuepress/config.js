module.exports = {
  title: "Wj's Blog", 
  description: '敬请期待',
  // dest: './dist',    // 设置输出目录
  // base: 'docs', // 设置站点根路径
  repo: 'https://github.com/wang-jia/my-vuepress-blog',
  head: [
      ['link', { rel: 'icon', href: '/imgs/logo.png' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'apple-touch-icon', href: '/imgs/logo.png' }],
  ],
  serviceWorker: true, // 配置PWA,
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', 
      // 这里是下拉列表展现形式。
      items: [
        { text: 'webpack构建工具', link: '/blogs/webpack' },
        { text: '数据可视化', link: '/blogs/chart' }
      ]},
      { text: 'About Me', link: '/me/' },
      {
        text: 'My Projects',
        // 这里是下拉列表展现形式。
        items: [
          { text: '我的博客', link: 'https://github.com/wang-jia/my-vuepress-blog' },
          { text: '其他项目', link: 'https://github.com/wang-jia/my-vuepress-blog22' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    // sidebar: ['/', '/Blog', '/About Me']
  }
}
