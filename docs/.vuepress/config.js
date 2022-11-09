import { defaultTheme } from 'vuepress';

export default {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'GisMenu UI Kit',
      description: 'Documentation site for the GisMenu Material Design component library plugin',
      head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
    },
  },
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/guide/' },
      { text: 'UI Components', link: '/components/' },
      {
        text: 'Versions',
        children: ['/group/foo.md', '/group/bar.md'],
      },
    ],
    sidebar: [
      {
        text: 'UI Components',
        link: '/foo/',
        children: [
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          '/foo/bar.md',
          {
            text: 'standart-components',
            link: '/components/standard-component',
          },
           {
            text: 'button',
            link: '/components/button',
          }
        ],
      },
      '/bar/README.md',
    ],
  }),
};
