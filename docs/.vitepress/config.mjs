import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Portfolio",
  description: "My Portfolio",
  base: "/mtm6407-static-site-sing2032/", 
  build: {
    outDir: '../../dist' 
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Blog', link: '/blog' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Main Sections',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Projects', link: '/projects' },
          { text: 'Blog', link: '/blog' },
          { text: 'About', link: '/about' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
