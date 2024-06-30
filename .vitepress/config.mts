import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'
//每页的文章数量
const pageSize = 10

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Roy's Blog",
  description: "A blog wrote by roy",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Category', link: '/pages/category' },
      { text: 'Archives', link: '/pages/archives' },
      { text: 'Tags', link: '/pages/tags' },
      { text: 'About', link: '/pages/about' }
    ],
    posts: await getPosts(pageSize),
    website: 'https://github.com/ohroy/paper', //copyright link
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  srcExclude: ['README.md'], // exclude the README.md , needn't to compiler
})
