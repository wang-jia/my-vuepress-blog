module.exports = {
  title: '个人主页', 
  description: '王佳的博客',
  head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
  ],
  serviceWorker: true // 配置PWA
}
