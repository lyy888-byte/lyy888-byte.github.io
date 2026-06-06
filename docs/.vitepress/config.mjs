import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的技术博客',
  description: '记录日常技术经验与心得',
  lang: 'zh-CN',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/hello' },
    ],

    sidebar: [
      {
        text: '文章列表',
        items: [
          { text: 'Hello World', link: '/posts/hello' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026',
    },
  },
})
